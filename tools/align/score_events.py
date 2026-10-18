#!/usr/bin/env python3
"""Extract source-defined voices and explicitly ordered performed score events."""
import argparse
from collections import Counter, defaultdict, deque
import json
import subprocess

import mido
import numpy as np

from config import HERE, LILYPOND, inside, load, piece_ids
from prepare import prepare


def midi_events(path):
    midi = mido.MidiFile(path)
    events, tracks = [], []
    for ti, track in enumerate(midi.tracks):
        tick = 0
        active = defaultdict(deque)
        for msg in track:
            tick += msg.time
            if msg.type == 'note_on' and msg.velocity:
                active[msg.channel, msg.note].append((tick, msg.velocity))
            elif msg.type == 'note_off' or (msg.type == 'note_on' and not msg.velocity):
                if not active[msg.channel, msg.note]:
                    raise ValueError(f'Unmatched MIDI note-off in {path}, track {ti}, tick {tick}')
                start, velocity = active[msg.channel, msg.note].popleft()
                events.append([start / midi.ticks_per_beat, (tick - start) / midi.ticks_per_beat,
                               msg.note, ti, velocity])
        if any(active.values()):
            raise ValueError(f'Unclosed MIDI notes in {path}, track {ti}')
        tracks.append(track.name)
    if not events:
        raise ValueError(f'No MIDI notes in {path}')
    return np.array(sorted(events), dtype=float), tracks


def attack_inventory(path, offset=0, multiset=False):
    midi = mido.MidiFile(path)
    attacks = Counter() if multiset else set()
    for track in midi.tracks:
        tick = 0
        for msg in track:
            tick += msg.time
            if msg.type == 'note_on' and msg.velocity:
                pair = (round(tick / midi.ticks_per_beat - offset, 7), msg.note)
                if multiset:
                    attacks[pair] += 1
                else:
                    attacks.add(pair)
    return attacks


def compile_midi(directory, name, music, midi, lilypond):
    generated = directory / (name + '.ly')
    generated.write_text('\\version "2.24.4"\n\\include "__definitions.ly"\n'
                         + '\\score {\n' + music + '\n\\midi {\n' + midi + '\n}\n}\n')
    subprocess.run([lilypond, '-dno-print-pages', '-o', str(generated.with_suffix('')), str(generated)],
                   cwd=directory, check=True)
    return generated.with_suffix('.midi')


def extract(ident, lilypond=LILYPOND, directory=None):
    cfg = load(ident)
    directory = directory or prepare(cfg, lilypond)
    extraction = cfg['extraction']
    voices = cfg['voices']
    mode = extraction['mode']
    source_checks = {}
    if cfg['source'].get('musicxml'):
        source_checks['musicxmlConversion'] = 'LilyPond 2.24.4 with per-note tie emission'
    if cfg['source'].get('patches'):
        source_checks['derivativePatches'] = cfg['source']['patches']
    if mode == 'isolated-voices':
        result, tracks = [], []
        for vi, voice in enumerate(voices):
            staves = []
            if voice['staff'] not in extraction['staves']:
                raise ValueError(f'{ident}: unknown voice staff {voice["staff"]}')
            for staff in extraction['staves']:
                music = voice['music'] if voice['staff'] == staff else ''
                staves.append('\\new Staff = "' + staff + '" << { '
                              + extraction.get('global', '') + ' ' + extraction.get('silent', '')
                              + ' } { ' + music + ' } >>')
            music = '\\new StaffGroup <<\n' + '\n'.join(staves) + '\n>>'
            path = compile_midi(directory, '__voice-' + str(vi), music, extraction.get('midiSettings', ''), lilypond)
            notes, _ = midi_events(path)
            notes[:, 3] = vi
            result.extend(notes.tolist())
            tracks.append(voice['id'])
        notes = np.asarray(sorted(result))
    else:
        if mode == 'compiled-midi':
            midi = compile_midi(directory, '__events', extraction['music'], extraction.get('midiSettings', ''), lilypond)
        elif mode == 'published-midi':
            midi = inside(directory, cfg['source']['midi'])
        else:
            raise ValueError(f'Unknown extraction mode: {mode}')
        notes, tracks = midi_events(midi)
        expected = extraction.get('expectedTracks')
        if expected is not None and (len(tracks) != len(expected) or any(e is not None and e != a for e, a in zip(expected, tracks))):
            raise ValueError(f'{ident}: MIDI track identities changed: {tracks}')
        mapping = {}
        for vi, voice in enumerate(voices):
            for track in voice['tracks']:
                if isinstance(track, str):
                    matches = [i for i, name in enumerate(tracks) if name == track]
                    if len(matches) != 1:
                        raise ValueError(f'{ident}: track name must resolve uniquely: {track!r}; got {tracks}')
                    track = matches[0]
                if track in mapping:
                    raise ValueError('A MIDI track is assigned to two voices')
                mapping[track] = vi
        for note in notes:
            if int(note[3]) not in mapping:
                raise ValueError(f'{ident}: unmapped sounding MIDI track {int(note[3])}')
            note[3] = mapping[int(note[3])]
    offset = extraction.get('offsetQ', 0)
    if extraction.get('endQ') is not None:
        notes = notes[notes[:, 0] < extraction['endQ'] - 1e-8]
    notes = notes[notes[:, 0] >= offset - 1e-8]
    notes[:, 0] -= offset
    for tie in extraction.get('ties', []):
        masks = []
        for key in ('origin', 'continuation'):
            row = tie[key]
            vi = next(i for i, v in enumerate(voices) if v['id'] == row['voice'])
            mask = (notes[:, 0] == row['q']) & (notes[:, 2] == row['pitch']) & (notes[:, 3] == vi)
            if mask.sum() != 1 or notes[mask, 1][0] != row['durationQ']:
                raise ValueError(f'{ident}: declared cross-voice tie does not match source: {tie}')
            masks.append(mask)
        if tie['origin']['q'] + tie['origin']['durationQ'] != tie['continuation']['q']:
            raise ValueError('Cross-voice tie must be contiguous')
        notes[masks[0], 1] += notes[masks[1], 1][0]
        notes = notes[~masks[1]]
    if extraction.get('comparePublished') is not None:
        compare = extraction['comparePublished']
        multiset = bool(cfg['source'].get('legacyRelative') == 'verify-midi' or cfg['source'].get('patches'))
        original = attack_inventory(inside(directory, cfg['source']['midi']), compare.get('offsetQ', 0), multiset)
        pairs = [(round(n[0], 7), int(n[2])) for n in notes]
        separated = Counter(pairs) if multiset else set(pairs)
        if original != separated:
            raise ValueError(f'{ident}: source pitch/onset inventory differs: missing {len(original - separated)}, extra {len(separated - original)}')
        print('INVENTORY', ident, sum(original.values()) if multiset else len(original),
              'source pitch/onset ' + ('multiset' if multiset else 'pairs') + ' equal', flush=True)
        source_checks['pitchOnsetInventory'] = {
            'kind': 'multiset' if multiset else 'set', 'matched': True,
            'count': sum(original.values()) if multiset else len(original)}
    for vi, voice in enumerate(voices):
        notes[notes[:, 3] == vi, 2] += voice.get('transpose', 0) + extraction.get('transpose', 0)
        for correction in voice.get('transposeRanges', []):
            start, end = correction['fromQ'], correction['toQ']
            if not 0 <= start < end or not correction.get('basis'):
                raise ValueError('A regional transposition needs an ordered quarter interval and source basis')
            selected = (notes[:, 3] == vi) & (notes[:, 0] >= start) & (notes[:, 0] < end)
            notes[selected, 2] += correction['semitones']
    if not len(notes) or np.any(notes[:, 1] <= 0) or np.any(notes[:, 2] < 0) or np.any(notes[:, 2] > 127):
        raise ValueError('Empty extraction, non-positive written duration, or out-of-range sounding pitch')
    spec = cfg['bars']
    canonical, cursor = {}, 0.
    first = spec.get('first', 1)
    for number in range(first, first + spec['count']):
        duration = float(spec.get('overrides', {}).get(str(number), spec['quarters']))
        if duration <= 0:
            raise ValueError('Bar lengths must be positive quarter units')
        canonical[number] = (cursor, duration)
        cursor += duration
    order = []
    for segment in spec['order']:
        if isinstance(segment, list):
            lo, hi = segment
            begin, finish = 0., canonical[hi][1]
        else:
            lo, begin = segment['from']
            hi, finish = segment['to']
        if lo > hi or not 0 <= begin <= canonical[lo][1] or not 0 <= finish <= canonical[hi][1]:
            raise ValueError('Invalid performed bar segment')
        for number in range(lo, hi + 1):
            start, duration = canonical[number]
            left = begin if number == lo else 0.
            right = finish if number == hi else duration
            if right > left:
                order.append((number, start + left, right - left))
    if not order:
        raise ValueError('Empty performed bar order')
    performed, bars, cursor = [], [], 0.
    occurrences = defaultdict(int)
    previous_end = None
    for number, source_start, duration in order:
        if bars and bars[-1]['n'] == str(number) and previous_end == source_start:
            bars[-1]['durQ'] += duration
        else:
            occurrences[str(number)] += 1
            bars.append({'n': str(number), 'occ': occurrences[str(number)], 'q': cursor, 'durQ': duration})
        previous_end = source_start + duration
        start = cursor if extraction.get('timeline', 'canonical') == 'performed' else source_start
        selected = (notes[:, 0] >= start - 1e-8) & (notes[:, 0] < start + duration - 1e-8)
        for onset, dur, pitch, voice, velocity in notes[selected]:
            performed.append([cursor + onset - start, dur, int(pitch), int(voice), len(bars) - 1, int(velocity)])
        cursor += duration
    # Unperformed source bars may deliberately be omitted (e.g. a skipped volta).
    # Notes beyond the declared score extent are never silently discarded.
    extent = cursor if extraction.get('timeline') == 'performed' else sum(d for _, d in canonical.values())
    if np.any(notes[:, 0] >= extent - 1e-8):
        raise ValueError(f'{ident}: MIDI attacks extend beyond declared bar lengths ({extent} quarter units)')
    if not performed:
        raise ValueError('No notes in performed bar order')
    result = {'id': ident, 'voices': [{k: v[k] for k in ('id', 'name')} for v in voices],
              'bars': bars, 'notes': sorted(performed), 'endQ': cursor,
              'repeats': spec['description'],
              'provenance': cfg.get('provenance', []) + [
                  f'Verified derivative syntax repair in {p["file"]}: {p["basis"]}' for p in cfg['source'].get('patches', [])],
              'midiTracks': tracks, 'sourceChecks': source_checks}
    out = HERE / 'work' / (ident + '-events.json')
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(result, ensure_ascii=False, separators=(',', ':')) + '\n')
    print('EVENTS', ident, 'bars', len(bars), 'notes', len(performed), 'voices', len(voices), 'end_q', cursor, flush=True)
    return result


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('ids', nargs='*')
    parser.add_argument('--lilypond', default=LILYPOND)
    args = parser.parse_args()
    for ident in args.ids or piece_ids():
        extract(ident, args.lilypond)
