#!/usr/bin/env python3
"""Analyse one recording for the Listening Room.

usage: .venv/bin/python tools/analyze.py <audio file> <out.json> <out.txt>

out.json  -> shipped to the site: duration, loudness envelope (2 values/s) for the timeline.
out.txt   -> report for cue authors: per-5s table of loudness, brightness, onset density,
             strongest pitch classes, bass pitch class, local key; plus ranked structural
             boundaries, loudest/quietest passages and tempo estimate.
"""
import json
import sys

import librosa
import numpy as np

PCS = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']
# Krumhansl–Kessler key profiles
MAJ = np.array([6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88])
MIN = np.array([6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17])


def key_of(chroma_vec):
    """Best key and its correlation for a 12-d chroma vector."""
    best = (-2, '')
    if chroma_vec.sum() <= 0:
        return '', 0.0
    for i in range(12):
        for prof, mode in ((MAJ, 'major'), (MIN, 'minor')):
            r = np.corrcoef(chroma_vec, np.roll(prof, i))[0, 1]
            if r > best[0]:
                best = (r, f'{PCS[i]} {mode}')
    return best[1], float(best[0])


def mmss(t):
    t = int(round(t))
    return f'{t // 60}:{t % 60:02d}'


def main(src, out_json, out_txt):
    sr = 22050
    y, _ = librosa.load(src, sr=sr, mono=True)
    dur = len(y) / sr
    hop = 512
    fps = sr / hop

    rms = librosa.feature.rms(y=y, hop_length=hop)[0]
    db = librosa.amplitude_to_db(rms, ref=np.max(rms) + 1e-12)
    cent = librosa.feature.spectral_centroid(y=y, sr=sr, hop_length=hop)[0]
    onset_env = librosa.onset.onset_strength(y=y, sr=sr, hop_length=hop)
    onsets = librosa.onset.onset_detect(onset_envelope=onset_env, sr=sr, hop_length=hop, units='time')
    chroma = librosa.feature.chroma_cqt(y=y, sr=sr, hop_length=hop, bins_per_octave=36)
    # bass chroma: CQT restricted to C1..B3
    cqt_bass = np.abs(librosa.cqt(y, sr=sr, hop_length=hop, fmin=librosa.note_to_hz('C1'), n_bins=36, bins_per_octave=12))
    bass_pc = cqt_bass.reshape(3, 12, -1).sum(axis=0)

    tempo = librosa.feature.tempo(onset_envelope=onset_env, sr=sr, hop_length=hop, aggregate=np.median)
    tempo = float(np.atleast_1d(tempo)[0])

    # Envelope for the site: 2 points per second, 0..1 (from dB, floor -50)
    n2 = int(np.ceil(dur * 2))
    env = []
    for i in range(n2):
        a, b = int(i * fps / 2), int((i + 1) * fps / 2)
        seg = db[a:max(b, a + 1)]
        env.append(round(float(np.clip((seg.mean() + 50) / 50, 0, 1)), 3))

    # Structural boundaries: novelty from a self-similarity matrix of beat-agnostic 2 s features
    win = int(fps * 2)
    nwin = max(1, len(db) // win)
    feats = []
    for i in range(nwin):
        sl = slice(i * win, (i + 1) * win)
        c = chroma[:, sl].mean(axis=1)
        c = c / (np.linalg.norm(c) + 1e-9)
        feats.append(np.concatenate([c, [db[sl].mean() / 25, np.log(cent[sl].mean() + 1) / 3]]))
    F = np.array(feats)
    F = (F - F.mean(0)) / (F.std(0) + 1e-9)
    S = F @ F.T / F.shape[1]
    k = 6  # checkerboard kernel half-width (12 s)
    kern = np.block([[np.ones((k, k)), -np.ones((k, k))], [-np.ones((k, k)), np.ones((k, k))]])
    nov = np.zeros(nwin)
    for i in range(k, nwin - k):
        nov[i] = (S[i - k:i + k, i - k:i + k] * kern).sum()
    nov = np.clip(nov, 0, None)
    if nov.max() > 0:
        nov /= nov.max()
    peaks = [i for i in range(1, nwin - 1) if nov[i] > 0.25 and nov[i] >= nov[i - 1] and nov[i] >= nov[i + 1]]
    bounds = sorted(((i * 2.0, float(nov[i])) for i in peaks), key=lambda x: -x[1])[:16]

    # Table rows every 5 s
    rows = []
    step = 5.0
    t = 0.0
    while t < dur:
        a, b = int(t * fps), int(min(dur, t + step) * fps)
        sl = slice(a, max(b, a + 1))
        c = chroma[:, sl].mean(axis=1)
        top = [PCS[i] for i in np.argsort(c)[::-1][:3]]
        bp = PCS[int(np.argmax(bass_pc[:, sl].mean(axis=1)))]
        ka, kb = int(max(0, t - 5) * fps), int(min(dur, t + 10) * fps)
        key, r = key_of(chroma[:, ka:kb].mean(axis=1))
        n_on = int(((onsets >= t) & (onsets < t + step)).sum())
        rows.append(dict(t=t, db=float(db[sl].mean()), cent=float(cent[sl].mean()), on=n_on / step, top=top, bass=bp, key=key, r=r))
        t += step

    gkey, gr = key_of(chroma.mean(axis=1))
    loud = sorted(rows, key=lambda r: -r['db'])[:5]
    quiet = sorted(rows, key=lambda r: r['db'])[:5]

    with open(out_json, 'w') as f:
        json.dump({'duration': round(dur, 2), 'env': env}, f, separators=(',', ':'))

    L = []
    L.append(f'Duration {mmss(dur)} ({dur:.1f} s). Global key estimate: {gkey} (r={gr:.2f}). Onset-tempo estimate: {tempo:.0f} bpm (unreliable for rubato/slow music).')
    L.append('dB is relative to the loudest frame (0 = loudest). Brightness = spectral centroid in Hz.')
    L.append('Key/pitch-class estimates come from audio chroma and are approximate: use them to confirm events you already expect from the score, never as the sole basis of a claim.')
    L.append('')
    L.append('Strongest structural boundaries (novelty, 0–1):')
    for tt, s in sorted(bounds):
        L.append(f'  {mmss(tt):>6}  {s:.2f}  ' + '#' * int(s * 20))
    L.append('')
    L.append('Loudest 5-s windows: ' + ', '.join(mmss(r['t']) for r in loud))
    L.append('Quietest 5-s windows: ' + ', '.join(mmss(r['t']) for r in quiet))
    L.append('')
    L.append('  time    dB  loudness             bright  onsets/s  top pitch classes  bass  local key (r)')
    for r in rows:
        bar = '█' * int(max(0, (r['db'] + 50)) / 2.5)
        L.append(f"{mmss(r['t']):>6} {r['db']:6.1f}  {bar:<20} {r['cent']:6.0f}  {r['on']:5.1f}     {' '.join(r['top']):<17}  {r['bass']:<4}  {r['key']} ({r['r']:.2f})")
    with open(out_txt, 'w') as f:
        f.write('\n'.join(L) + '\n')


if __name__ == '__main__':
    main(*sys.argv[1:4])
