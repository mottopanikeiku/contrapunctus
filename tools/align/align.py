#!/usr/bin/env python3
"""Provisional score/audio alignment, numerical gates and reproducible diagnostics.

No nearest-onset snapping: librosa onset detections are reserved for evaluation.
Audio features use Sync Toolbox's tuned pitch filterbank and DLNCO; symbolic
features are generated directly from the repeat-aware score event table.
"""
import os
for key in ('OPENBLAS_NUM_THREADS', 'OMP_NUM_THREADS', 'MKL_NUM_THREADS', 'NUMBA_NUM_THREADS'):
    os.environ.setdefault(key, '1')
import argparse
import hashlib
import importlib.metadata
import json
from pathlib import Path
import subprocess
import time

import librosa
import numpy as np
from scipy.ndimage import uniform_filter1d, maximum_filter1d
from synctoolbox.feature.pitch import audio_to_pitch_features
from synctoolbox.feature.pitch_onset import audio_to_pitch_onset_features
from synctoolbox.feature.chroma import pitch_to_chroma
from synctoolbox.feature.dlnco import pitch_onset_features_to_DLNCO
from synctoolbox.dtw.mrmsdtw import sync_via_mrmsdtw_with_anchors
from synctoolbox.dtw.utils import make_path_strictly_monotonic

from config import HERE, ROOT, load, piece_ids, write_json
FPS, SR, HOP = 50, 22050, 256




def normalise(x):
    return x / np.maximum(np.linalg.norm(x, axis=0, keepdims=True), 1e-12)


def audio_features(ident):
    cache = HERE / 'work' / (ident + '-features.npz')
    audio = ROOT / 'cache/audio' / (ident + '.mp3')
    audio_hash = hashlib.sha256(audio.read_bytes()).hexdigest()
    if cache.exists():
        data = dict(np.load(cache, allow_pickle=False))
        if str(data['audio_sha256']) != audio_hash:
            raise ValueError('Audio changed; remove only the corresponding feature cache before rerunning')
        return data
    y, _ = librosa.load(audio, sr=SR, mono=True)
    tuning = float(librosa.estimate_tuning(y=y, sr=SR, resolution=0.01))
    print('AUDIO', ident, 'duration', len(y) / SR, 'tuning_cents', tuning * 100, flush=True)
    pitch = audio_to_pitch_features(y, Fs=SR, feature_rate=FPS, tuning_offset=tuning * 100)
    peaks = audio_to_pitch_onset_features(y, Fs=SR, tuning_offset=tuning * 100)
    chroma = normalise(pitch_to_chroma(np.log1p(100 * pitch)))
    dlnco = pitch_onset_features_to_DLNCO(peaks, pitch.shape[1], feature_rate=FPS)
    onset_env = librosa.onset.onset_strength(y=y, sr=SR, hop_length=HOP)
    onsets = librosa.onset.onset_detect(onset_envelope=onset_env, sr=SR, hop_length=HOP, units='time', backtrack=False)
    rms = librosa.feature.rms(y=y, hop_length=HOP)[0]
    db = librosa.amplitude_to_db(rms, ref=np.max)
    activity = np.where(db > -45)[0] * HOP / SR
    data = {'chroma': chroma.astype(np.float32), 'dlnco': dlnco.astype(np.float32),
            'pitch': pitch.astype(np.float32), 'onsets': onsets, 'duration': len(y) / SR,
            'tuning_semitones': tuning, 'active_start': activity[0], 'active_end': activity[-1],
            'audio_sha256': audio_hash}
    np.savez_compressed(cache, **data)
    print('\nFEATURES', ident, chroma.shape, 'onsets', len(onsets), flush=True)
    return data


def adaptive_evaluation_onsets(ident):
    """A second, score-independent detector for quiet accompaniment attacks."""
    cache = HERE / 'work' / (ident + '-adaptive-onsets.json')
    if cache.exists():
        return np.array(json.loads(cache.read_text())['onsets'])
    y, _ = librosa.load(ROOT / 'cache/audio' / (ident + '.mp3'), sr=SR, mono=True)
    envelope = librosa.onset.onset_strength(y=y, sr=SR, hop_length=HOP)
    local = maximum_filter1d(envelope, size=173)
    envelope = envelope / np.maximum(local, max(float(envelope.max()) * .001, 1e-12))
    onsets = librosa.onset.onset_detect(onset_envelope=envelope, sr=SR, hop_length=HOP,
        units='time', normalize=False, delta=.08, pre_max=3, post_max=3,
        pre_avg=9, post_avg=9, wait=5)
    write_json(cache, {'method': 'librosa spectral flux / two-second local maximum; delta .08, 58 ms refractory period; no score input',
                       'onsets': onsets.tolist()})
    return onsets


def endpoint_anchors(cfg, events, data):
    windows = cfg['endpoints']
    notes = np.asarray(events['notes'])
    anchors = []
    for label, q in [('first', notes[:, 0].min()), ('last', notes[:, 0].max())]:
        pitches = np.unique(notes[notes[:, 0] == q, 2]).astype(int)
        energy = data['pitch'][pitches].sum(axis=0)
        rise = uniform_filter1d(np.maximum(np.diff(energy, prepend=energy[0]), 0), 3)
        lo, hi = [int(round(t * FPS)) for t in windows[label]]
        if not 0 <= lo < hi < len(rise) or not np.any(rise[lo:hi + 1] > 0):
            raise ValueError(f'Invalid or silent {label} endpoint window: {windows[label]}')
        peak = lo + int(np.argmax(rise[lo:hi + 1]))
        onset = peak
        while onset > lo and rise[onset - 1] > .2 * rise[peak]:
            onset -= 1
        anchors.append({'label': label, 'scoreQ': float(q), 'audioSeconds': onset / FPS,
                        'peakSeconds': peak / FPS, 'window': windows[label],
                        'midiPitches': pitches.tolist(), 'basis': windows['basis']})
    return anchors


def score_features(events, scale):
    end = events['endQ'] * scale
    length = int(np.ceil(end * FPS)) + 1
    pitch = np.zeros((128, length))
    peaks = {}
    for onset, duration, midi, voice, bar, velocity in events['notes']:
        start, stop = int(round(onset * scale * FPS)), int(round((onset + duration) * scale * FPS))
        # Equal score weights avoid treating the encoder's playback mix as performance evidence.
        pitch[midi, start:max(start + 1, stop)] += 1
        peaks.setdefault(midi, []).append([onset * scale * 1000, 1.])
    chroma = normalise(pitch_to_chroma(np.log1p(pitch)))
    dlnco = pitch_onset_features_to_DLNCO({p: np.array(v).T for p, v in peaks.items()}, length, feature_rate=FPS)
    return chroma, dlnco


def path_map(path):
    # Sync Toolbox's standard conversion discards ambiguous horizontal/vertical
    # DTW runs before interpolation. It does not clamp individual note durations.
    strict = make_path_strictly_monotonic(path)
    return strict[0] / FPS, strict[1] / FPS


def nearest_error(times, targets):
    if not len(targets):
        raise ValueError('No detected audio onsets')
    ix = np.searchsorted(targets, times)
    left = targets[np.maximum(ix - 1, 0)]
    right = targets[np.minimum(ix, len(targets) - 1)]
    return np.minimum(np.abs(times - left), np.abs(times - right))


def recurrence(chroma, start, second, length, search=4):
    # Independent fixed-lag audio/audio comparison at 0.5-second resolution.
    c = normalise(uniform_filter1d(chroma.astype(float), 25, axis=1)[:, ::25])
    a = np.arange(int(round(start * 2)), int(round((start + length) * 2)))
    candidates = []
    for b0 in np.arange(second - search, second + search + 0.25, 0.5):
        b = a - a[0] + int(round(b0 * 2))
        if len(a) and a[-1] < c.shape[1] and b[0] >= 0 and b[-1] < c.shape[1]:
            candidates.append((float(np.mean(np.sum(c[:, a] * c[:, b], axis=0))), float(b[0] / 2)))
    similarity, best = max(candidates)
    return {'aStart': float(a[0] / 2), 'aEnd': float((a[-1] + 1) / 2), 'predictedBStart': second, 'bestBStart': best,
            'offsetSeconds': best - float(a[0] / 2), 'boundaryResidualSeconds': best - second, 'cosine': similarity,
            'searchRadiusSeconds': search}


def checks(cfg, events, data, sx, ay, scale, score_chroma, path, sections):
    ident = cfg['id']
    notes = np.asarray(events['notes'])
    mapq = lambda q: np.interp(np.asarray(q) * scale, sx, ay)
    attacks_q = np.unique(notes[:, 0])
    attacks_t = mapq(attacks_q)
    deviations = nearest_error(attacks_t, data['onsets'])
    per_note = nearest_error(mapq(notes[:, 0]), data['onsets'])
    adaptive_deviations = nearest_error(attacks_t, data['adaptive_onsets'])
    regions = []
    for start in np.arange(0, float(data['duration']), 8):
        selected = (attacks_t >= start) & (attacks_t < start + 8)
        if selected.sum():
            dev = deviations[selected]
            regions.append({'start': float(start), 'end': min(float(start + 8), float(data['duration'])),
                            'attacks': int(selected.sum()), 'median': float(np.median(dev)),
                            'p95': float(np.percentile(dev, 95)), 'max': float(np.max(dev))})
            regions[-1]['adaptiveMedian'] = float(np.median(adaptive_deviations[selected]))
            regions[-1]['adaptiveP95'] = float(np.percentile(adaptive_deviations[selected], 95))
    # Low harmonic similarity is a gross-misalignment flag independent of onset density.
    similarity = np.sum(score_chroma[:, path[0].astype(int)] * data['chroma'][:, path[1].astype(int)], axis=0)
    harmonic_regions = []
    path_t = path[1] / FPS
    for start in np.arange(0, float(data['duration']), 8):
        selected = (path_t >= start) & (path_t < start + 8)
        if selected.sum():
            harmonic_regions.append({'start': float(start), 'meanCosine': float(np.mean(similarity[selected]))})
    section_rows = []
    for number, occurrence, editorial in cfg.get('boundaries', []):
        bar = next(b for b in events['bars'] if b['n'] == number and b['occ'] == occurrence)
        aligned = float(mapq(bar['q']))
        section_rows.append({'bar': number, 'occ': occurrence, 'editorial': editorial,
                             'aligned': aligned, 'difference': aligned - editorial})
    if not section_rows:
        # Passage labels without score bars are locators, not independent checks.
        # A nearest bar is reported as a locator, not an independent boundary test.
        bar_times = mapq([b['q'] for b in events['bars']])
        for section in sections[1:]:
            ix = int(np.argmin(abs(bar_times - section['t'])))
            section_rows.append({'bar': events['bars'][ix]['n'], 'occ': events['bars'][ix]['occ'], 'editorial': section['t'],
                                 'aligned': float(bar_times[ix]), 'difference': float(bar_times[ix] - section['t']),
                                 'note': 'Nearest bar locator only; original section has no score-bar assertion.'})
    anchor_rows = []
    for label, index in [('first', 0), ('middle', len(attacks_q) // 2), ('last', len(attacks_q) - 1)]:
        q, t = attacks_q[index], attacks_t[index]
        bi = int(notes[np.where(notes[:, 0] == q)[0][0], 4])
        anchor_rows.append({'label': label, 'bar': events['bars'][bi]['n'], 'occ': events['bars'][bi]['occ'],
                            'scoreQ': float(q), 'audioSeconds': float(t), 'nearestOnsetDeviation': float(deviations[index])})
    held = []
    held_spec = cfg.get('diagnostics', {}).get('held')
    if held_spec:
        selection = notes[:, 3] == held_spec['voice']
        if 'onsets' in held_spec:
            selection &= np.isin(notes[:, 0], held_spec['onsets'])
        if 'minimumDurationQ' in held_spec:
            selection &= notes[:, 1] >= held_spec['minimumDurationQ']
    else:
        selection = notes[:, 0] == notes[:, 0].max()
    for note in notes[selection]:
        onset, dur, pitch, voice, bi, _ = note
        held.append({'bar': events['bars'][int(bi)]['n'], 'occ': events['bars'][int(bi)]['occ'],
                     'midi': int(pitch), 'voice': events['voices'][int(voice)]['id'], 'durationQ': float(dur),
                     'onset': float(mapq(onset)), 'offset': float(mapq(onset + dur)),
                     'durationSeconds': float(mapq(onset + dur) - mapq(onset))})
    returns = []
    for spec in cfg.get('diagnostics', {}).get('recurrences', []):
        start = float(mapq(spec['startQ'])) if 'startQ' in spec else spec['start']
        start += spec.get('startOffset', 0)
        second = float(mapq(spec['secondQ'])) + spec.get('secondOffset', 0)
        returns.append(recurrence(data['chroma'], start, second, spec['length'], spec.get('search', 4)))
    if cfg.get('diagnostics', {}).get('scanRecurrence'):
        # Long exact-texture repetition is not implied by a fugue subject return.
        c = normalise(uniform_filter1d(data['chroma'].astype(float), 25, axis=1)[:, ::25])
        best = (-1., 0.)
        for shift in range(40, c.shape[1] // 2):
            vals = np.sum(c[:, :-shift] * c[:, shift:], axis=0)
            if len(vals) >= 120:
                mean = float(np.max(uniform_filter1d(vals, 120)[60:-60]))
                if mean > best[0]:
                    best = (mean, shift / 2)
        returns.append({'method': 'Strongest 60-second fixed-lag chroma diagonal, offsets ≥20 s',
                        'cosine': best[0], 'offsetSeconds': best[1],
                        'interpretation': 'Diagnostic only; no whole-texture repeat inserted.'})
    durations = mapq(notes[:, 0] + notes[:, 1]) - mapq(notes[:, 0])
    summary = {'uniqueScoreAttacks': len(attacks_q), 'audioDetectedOnsets': len(data['onsets']),
               'medianAbsoluteOnsetDeviation': float(np.median(deviations)),
               'noteWeightedMedianDeviation': float(np.median(per_note)),
               'p95AbsoluteOnsetDeviation': float(np.percentile(deviations, 95)),
               'fractionWithin150ms': float(np.mean(deviations <= .15)),
               'regions': regions,
               'worstFiveOnsetRegions': sorted(regions, key=lambda r: (-r['median'], -r['p95']))[:5],
               'worstFiveAdaptiveRegions': sorted(regions, key=lambda r: (-r['adaptiveMedian'], -r['adaptiveP95']))[:5],
               'worstFiveHarmonicRegions': sorted(harmonic_regions, key=lambda r: r['meanCosine'])[:5],
               'sections': section_rows, 'anchors': anchor_rows, 'heldNotes': held, 'recurrence': returns,
               'zeroOrNegativeDurations': int(np.sum(durations < .0005)),
               'minimumNoteDuration': float(durations.min()),
               'collapsedAttackIntervals': int(np.sum(np.diff(attacks_t) < .0005)),
               'meanPathChromaCosine': float(np.mean(similarity)),
               'endAnchor': {'scoreQ': events['endQ'], 'audioSeconds': float(mapq(events['endQ'])),
                             'decodedDuration': float(data['duration']), 'activeEndMinus45dB': float(data['active_end'])}}
    write_json(HERE / 'work' / (ident + '-attack-checks.json'),
               [{'q': float(q), 't': float(t), 'deviation': float(d)} for q, t, d in zip(attacks_q, attacks_t, deviations)])
    return summary


def run(ident):
    cfg = load(ident)
    begun = time.monotonic()
    events = json.loads((HERE / 'work' / (ident + '-events.json')).read_text())
    data = audio_features(ident)
    sections = json.loads(subprocess.check_output(['node', '--input-type=module', '-e',
        f'import c from "./content/listen/{ident}.mjs"; console.log(JSON.stringify(c.sections ?? []))'], cwd=ROOT))
    data['adaptive_onsets'] = adaptive_evaluation_onsets(ident)
    endpoints = endpoint_anchors(cfg, events, data)
    rough_scale = float(data['duration']) / events['endQ']
    origin_frame = int(round(max(0, endpoints[0]['audioSeconds'] - endpoints[0]['scoreQ'] * rough_scale) * FPS))
    end_frame = min(data['chroma'].shape[1] - 1, int(round(float(data['active_end']) * FPS)))
    origin = origin_frame / FPS
    scale = (end_frame / FPS - origin) / events['endQ']
    score_chroma, score_onset = score_features(events, scale)
    kwargs = dict(f_chroma1=score_chroma, f_chroma2=data['chroma'][:, origin_frame:end_frame + 1].astype(float),
                  f_onset1=score_onset, f_onset2=data['dlnco'][:, origin_frame:end_frame + 1].astype(float), input_feature_rate=FPS,
                  threshold_rec=100000, verbose=False, alpha=.5,
                  step_sizes=np.array([[1, 0], [0, 1], [1, 1]], dtype=np.int32),
                  step_weights=np.ones(3))
    endpoint_pairs = [(a['scoreQ'] * scale, a['audioSeconds'] - origin) for a in endpoints if a['scoreQ'] > 0]
    linear = [-1] + ([0] if endpoints[0]['scoreQ'] > 0 else [])
    path = sync_via_mrmsdtw_with_anchors(**kwargs, anchor_pairs=endpoint_pairs.copy(), linear_inp_idx=linear)
    sx0, ay0 = path_map(path)
    anchors = endpoint_pairs.copy()
    for number, occurrence, editorial in cfg.get('boundaries', []):
        bar = next(b for b in events['bars'] if b['n'] == number and b['occ'] == occurrence)
        score_time = bar['q'] * scale
        aligned = float(np.interp(score_time, sx0, ay0))
        anchors.append((score_time, aligned))
    if not cfg.get('boundaries'):
        # These are passage locators, not independent score-bar annotations.
        for section in sections[1:]:
            if section['t'] < endpoints[-1]['audioSeconds']:
                score_time = float(np.interp(section['t'] - origin, ay0, sx0))
                anchors.append((score_time, float(section['t']) - origin))
    anchors.sort()
    path = sync_via_mrmsdtw_with_anchors(**kwargs, anchor_pairs=anchors.copy(), linear_inp_idx=linear)
    path[1] += origin_frame
    sx, ay = path_map(path)
    mapq = lambda q: np.interp(np.asarray(q) * scale, sx, ay)
    diagnostics = checks(cfg, events, data, sx, ay, scale, score_chroma, path, sections)
    manifest = json.loads((HERE / 'sources' / ident / 'manifest.json').read_text())
    source = {k: manifest[k] for k in ('title', 'edition', 'encoder', 'url', 'license', 'licenseUrl')}
    score = {'id': ident, 'status': 'provisional', 'review': {'by': None, 'date': None, 'scope': ''},
             'source': source, 'tuningHz': round(440 * 2 ** (float(data['tuning_semitones']) / 12), 2),
             'method': 'Public-domain LilyPond/MIDI → voice-aware performed event table; tuning estimated with librosa; Sync Toolbox 1.4.2 memory-restricted multiscale DTW at 50 frames/s, chroma + DLNCO. First/last attacks anchored by score-pitch energy rises in documented inspection windows; section anchors refined by DTW and checked against existing passage labels. Note-offs are warped notation, not measured key releases; final piano holds extend to an estimated decay threshold. No aural review. See tools/align/REPORT.md.',
             'voices': events['voices'],
             'bars': [{'n': b['n'], 'occ': b['occ'], 't': round(float(mapq(b['q'])), 3)} for b in events['bars']],
             'notes': [[round(float(mapq(n[0])), 3), round(float(mapq(n[0] + n[1]) - mapq(n[0])), 3), int(n[2]), int(n[3]), int(n[4])] for n in events['notes']],
             'repeats': events['repeats']}
    if source['license'] != 'Public Domain':
        score['method'] = score['method'].replace('Public-domain LilyPond/MIDI', 'Licensed symbolic score → LilyPond/MIDI')
    if cfg.get('chords'):
        score['chords'] = []
        for bar in events['bars']:
            for chord in cfg['chords']:
                if bar['n'] in chord['bars'] and ('occ' not in chord or chord['occ'] == bar['occ']):
                    if chord['basis'] != 'editorial':
                        raise ValueError('Only editorial chord readings may be published')
                    score['chords'].append({'t0': round(float(mapq(bar['q'])), 3),
                                            't1': round(float(mapq(bar['q'] + bar['durQ'])), 3),
                                            'label': chord['label'], 'basis': 'editorial'})
    reasons = []
    if diagnostics['medianAbsoluteOnsetDeviation'] > .15:
        reasons.append('Median unique-onset deviation exceeds 0.15 seconds.')
    if diagnostics['zeroOrNegativeDurations'] or diagnostics['collapsedAttackIntervals']:
        reasons.append('DTW collapses score note durations or distinct attacks.')
    if any(a['nearestOnsetDeviation'] > .5 for a in diagnostics['anchors']):
        reasons.append('A first/middle/last anchor disagrees with the independent onset detector by over 0.5 seconds.')
    if any(r['adaptiveMedian'] > .3 for r in diagnostics['worstFiveAdaptiveRegions']):
        reasons.append('An eight-second region has median deviation above 0.3 seconds even with local onset normalisation.')
    if any(b['t'] <= a['t'] for a, b in zip(score['bars'], score['bars'][1:])):
        reasons.append('Rounded publication bar times are not strictly increasing.')
    if any(n[1] <= 0 for n in score['notes']):
        reasons.append('Rounded publication contains a non-positive note duration.')
    rounded_attacks = np.round(mapq(np.unique(np.asarray(events['notes'])[:, 0])), 3)
    diagnostics['roundedCollapsedAttackIntervals'] = int(np.sum(np.diff(rounded_attacks) <= 0))
    if diagnostics['roundedCollapsedAttackIntervals']:
        reasons.append('Rounding collapses distinct score attacks in the publication.')
    diagnostics.update({'id': ident, 'tuningHz': score['tuningHz'], 'audioSha256': str(data['audio_sha256']),
                        'software': {p: importlib.metadata.version(p) for p in ('librosa', 'synctoolbox', 'numpy', 'scipy', 'mido')},
                        'scoreProvenance': events['provenance'], 'sectionAnchorPairsSeconds': [(s, a + origin) for s, a in anchors],
                        'sourceChecks': events.get('sourceChecks', {}),
                        'endpointMeasurements': endpoints,
                        'adaptiveOnsetCount': len(data['adaptive_onsets']),
                        'adaptiveMedianDeviation': float(np.median(nearest_error(mapq(np.unique(np.asarray(events['notes'])[:, 0])), data['adaptive_onsets']))),
                        'gateReasons': reasons, 'elapsedSeconds': time.monotonic() - begun})
    diagnostics['dtwSteps'] = kwargs['step_sizes'].tolist()
    diagnostics['dtwStepWeights'] = kwargs['step_weights'].tolist()
    diagnostics['counts'] = {'bars': len(score['bars']), 'notes': len(score['notes']), 'voices': len(score['voices'])}
    write_json(HERE / 'work' / (ident + '-candidate.json'), score)
    write_json(HERE / 'work' / (ident + '-checks.json'), diagnostics)
    np.savez_compressed(HERE / 'work' / (ident + '-path.npz'), score_seconds=sx, audio_seconds=ay, scale=scale)
    print('CHECKS', ident, json.dumps({k: diagnostics[k] for k in ('medianAbsoluteOnsetDeviation', 'p95AbsoluteOnsetDeviation', 'zeroOrNegativeDurations', 'collapsedAttackIntervals', 'meanPathChromaCosine', 'gateReasons')}), flush=True)
    print('SECTIONS', ident, json.dumps(diagnostics['sections']), flush=True)
    print('ANCHORS', ident, json.dumps(diagnostics['anchors']), flush=True)
    print('HELD', ident, json.dumps(diagnostics['heldNotes']), flush=True)
    print('WORST', ident, json.dumps(diagnostics['worstFiveOnsetRegions']), flush=True)
    return score, diagnostics


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('ids', nargs='*')
    args = parser.parse_args()
    failed = False
    for ident in args.ids or piece_ids():
        _, diagnostics = run(ident)
        failed |= bool(diagnostics['gateReasons'])
    raise SystemExit(2 if failed else 0)
