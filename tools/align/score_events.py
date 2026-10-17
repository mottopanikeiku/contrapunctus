#!/usr/bin/env python3
"""Extract quarter-note event coordinates, preserving source-defined parts.

All output is derived from the downloaded LilyPond/MIDI, not audio transcription.
The Satie wrapper changes only MIDI routing, not music, and leaves downloads intact.
"""
import argparse
from collections import defaultdict, deque
import json
from pathlib import Path
import subprocess

import mido
import numpy as np

HERE = Path(__file__).resolve().parent
IDS = ['satie-gymnopedie-1', 'beethoven-5-first', 'bach-wtc1-fugue-b-minor', 'schubert-impromptu-gflat']


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
                start, velocity = active[msg.channel, msg.note].popleft()
                events.append([start / midi.ticks_per_beat, (tick - start) / midi.ticks_per_beat,
                               msg.note, ti, velocity])
        if any(active.values()):
            raise ValueError(f'Unclosed MIDI notes in {path}, track {ti}')
        tracks.append(track.name)
    return np.array(sorted(events), dtype=float), tracks


def satie_midi(lilypond):
    source = HERE / 'sources/satie-gymnopedie-1/gymnopedie_1.ly'
    generated = HERE / 'work/satie-voices.ly'
    generated.parent.mkdir(parents=True, exist_ok=True)
    definitions = source.read_text().split('\\score {', 1)[0]
    generated.write_text(definitions + r'''
\score {
  \context PianoStaff <<
    \context Staff = "treble" << \global \clef treble \top \middle >>
    \context Staff = "bass" << \global \clef bass \bottom >>
  >>
  \midi {
    \context { \Staff \remove "Staff_performer" }
    \context { \Voice \consists "Staff_performer" }
  }
}
''')
    subprocess.run([lilypond, '-dno-print-pages', '-o', str(generated.with_suffix('')), str(generated)], check=True)
    return generated.with_suffix('.midi')


def keyboard_voice_events(ident, lilypond):
    """Compile each declared musical voice separately, retaining cross-staff notes.

    A staff MIDI cannot distinguish a cross-staff move from a change of voice;
    even the Bach Voice performer reuses anonymous child contexts at the close.
    Isolated source variables avoid either inference.
    """
    source_dir = HERE / 'sources' / ident
    if ident == IDS[2]:
        definitions = (source_dir / 'bwv869b-lys/notes.lyi').read_text()
        expressions = [r'\soprano', r'\alto', r'\tenore', r'\basso']
        upper, lower, global_music, first_lower = 'RH', 'LH', '', 2
        names = ['soprano', 'alto', 'tenore', 'basso']
        silent = r's1*76'
    else:
        definitions = next(source_dir.glob('*.ly')).read_text().split('\\score {', 1)[0]
        expressions = [r'\hautI', r'\hautII',
            r'\basIa \basIaM \basIb \basIbM \basIc \basIcM \basId \basIdM \basIe \basIeM \basIf \basIfM \basIg \basIgM \basIh \basIhM \basIi \basIiM \basIj',
            r'\basII', r'\basIII']
        upper, lower, global_music, first_lower = 'upII', 'downIII', r'\KEYTIME', 2
        names = ['hautI', 'hautII', 'basI', 'basII', 'basIII']
        silent = r's1*172'
    result = []
    for vi, expression in enumerate(expressions):
        a = expression if vi < first_lower else ''
        b = expression if vi >= first_lower else ''
        generated = HERE / 'work' / f'{ident}-{names[vi]}.ly'
        generated.parent.mkdir(parents=True, exist_ok=True)
        generated.write_text(definitions + '\n' + rf'''
\score {{
  \new PianoStaff <<
    \new Staff = "{upper}" << {{ {global_music} {silent} }} {{ {a} }} >>
    \new Staff = "{lower}" << {{ {global_music} {silent} }} {{ {b} }} >>
  >>
  \midi {{ }}
}}
''')
        if ident == IDS[3]:
            converted = subprocess.run([str(Path(lilypond).with_name('convert-ly')), str(generated)],
                                       check=True, capture_output=True, text=True)
            generated.write_text(converted.stdout)
        subprocess.run([lilypond, '-dno-print-pages', '-o', str(generated.with_suffix('')), str(generated)], check=True)
        voice_notes, _ = midi_events(generated.with_suffix('.midi'))
        voice_notes[:, 3] = vi
        result.extend(voice_notes.tolist())
    notes = np.asarray(sorted(result))
    if ident == IDS[2]:
        # notes.lyi explicitly marks a cross-voice tie in bar 23. The F♯
        # attacked in Alto at q89.5 continues into Soprano's q90 sixteenth.
        # Keep that single attack in its originating voice, not a new attack.
        continuation = (notes[:, 0] == 90) & (notes[:, 2] == 66) & (notes[:, 3] == 0)
        origin = (notes[:, 0] == 89.5) & (notes[:, 2] == 66) & (notes[:, 3] == 1)
        assert continuation.sum() == origin.sum() == 1
        assert notes[continuation, 1][0] == .25 and notes[origin, 1][0] == .5
        notes[origin, 1] = .75
        notes = notes[~continuation]
    published, _ = midi_events(next(source_dir.glob('*.mid')))
    if ident == IDS[3]:
        published[:, 0] -= 8
    original_attacks = {(round(n[0], 7), int(n[2])) for n in published}
    separated_attacks = {(round(n[0], 7), int(n[2])) for n in notes}
    if original_attacks != separated_attacks:
        raise ValueError(f'{ident}: isolated voice pitch/onset inventory differs: missing {original_attacks - separated_attacks}, extra {separated_attacks - original_attacks}')
    return notes, names


def extract(ident, lilypond):
    source_dir = HERE / 'sources' / ident
    original = next(source_dir.glob('*.mid'))
    if ident in IDS[2:]:
        notes, tracks = keyboard_voice_events(ident, lilypond)
    else:
        notes, tracks = midi_events(satie_midi(lilypond) if ident == IDS[0] else original)
    voices = []
    provenance = []
    if ident == IDS[0]:
        print('SATIE_TRACKS', tracks)
        assert tracks[1:] == ['', 'accomp:accomp', '', 'othervoice:othervoice', 'othervoice:othervoice'], tracks
        # Anonymous top/bottom contexts retain declaration order; the named inner
        # voice is instantiated once in each alternative ending.
        voices = [{'id': v, 'name': n} for v, n in [
            ('melody', 'Melody'), ('accompaniment', 'Accompaniment chords'),
            ('bass', 'Bass'), ('bass-inner', 'Bass staff, additional voice')]]
        mapping = {1: 0, 2: 1, 3: 2, 4: 3, 5: 3}
        published = mido.MidiFile(original)
        original_attacks = set()
        for track in published.tracks:
            tick = 0
            for msg in track:
                tick += msg.time
                if msg.type == 'note_on' and msg.velocity:
                    original_attacks.add((round(tick / published.ticks_per_beat, 7), msg.note))
        separated_attacks = {(round(n[0], 7), int(n[2])) for n in notes}
        if original_attacks != separated_attacks:
            raise ValueError('Voice-separated Satie MIDI differs from published pitch/onset inventory')
        provenance.append('Voice-level Staff_performer exposes top, accomp, bottom and othervoice; the aggregate set of pitch/onset pairs equals the published MIDI. Regeneration preserves the twelve-quarter F♯ melody tie at bar 9: the published merged-staff MIDI truncates it at accompaniment reattacks and has two redundant note-offs at quarter 36.')
        canonical = [(str(n), (n - 1) * 3., 3.) for n in range(1, 48)]
        order = list(range(1, 40)) + list(range(1, 32)) + list(range(40, 48))
        repeat_text = 'Compact Mutopia numbering: bars 1–39, then bars 1–31 again, then second ending 40–47. This is 78 performed bars; the source folds the original written-out return into a volta.'
    elif ident == IDS[1]:
        labels = [('flutes', 'Flutes'), ('oboes', 'Oboes'), ('clarinets', 'Clarinets'), ('bassoons', 'Bassoons'),
                  ('horns', 'Horns'), ('trumpets', 'Trumpets'), ('timpani', 'Timpani'), ('violins-1', 'Violins I'),
                  ('violins-2', 'Violins II'), ('violas', 'Violas'), ('cellos', 'Cellos'), ('basses', 'Double basses')]
        voices = [{'id': v, 'name': n} for v, n in labels]
        expected = ['one:', 'two:', 'three:', 'four:', 'five:', 'six:', 'seven:', 'eight:', 'nine:', 'ten:', 'eleven:', 'twelve:']
        assert tracks[1:] == expected, tracks
        mapping = {i: i - 1 for i in range(1, 13)}
        # LilyPond source gives written bass pitches but omits octave transposition.
        notes[notes[:, 3] == 12, 2] -= 12
        provenance.append('Staff names one–twelve are mapped through Symphony5_1.ly, not GM patches (horns/trumpets incorrectly use the English-horn patch). Clarinets/horns are already transposed by LilyPond. Double bass pitches are lowered one octave from written pitches because basso.ly omits the sounding-octave transposition.')
        # struktur.ly has 267 ordinary bars, then a 12-quarter unmeasured bar 268.
        canonical = [(str(n), (n - 1) * 2. + (10 if n > 268 else 0), 12. if n == 268 else 2.) for n in range(1, 503)]
        order = list(range(1, 125)) + list(range(1, 503))
        repeat_text = 'Bars 1–124 (exposition), bars 1–124 again, then bars 125–502. Bar 268 includes the oboe cadenza: the encoding allocates twelve quarter-note units to this single unmeasured bar; these are not six extra numbered bars.'
    elif ident == IDS[2]:
        voices = [{'id': v, 'name': n} for v, n in [('soprano', 'Soprano'), ('alto', 'Alto'), ('tenor', 'Tenor'), ('bass', 'Bass')]]
        mapping = {i: i for i in range(4)}
        provenance.append('Compile soprano, alto, tenore and basso separately from notes.lyi, retaining their cross-staff notes and internal subdivisions. The explicit bar-23 cross-voice F♯ tie is one event assigned to its originating Alto voice, not a new Soprano attack. The aggregate pitch/onset set equals the published MIDI. Isolated variables avoid the anonymous child-voice reuse that places the alto’s closing D♯ in the published soprano MIDI track.')
        canonical = [(str(n), (n - 1) * 4., 4.) for n in range(1, 77)]
        order = list(range(1, 77))
        repeat_text = 'Bars 1–76 once, in score order; no repeat sign or inserted repeat. Subject recurrences remain within this continuous contrapuntal sequence.'
    else:
        labels = [('upper-1', 'Upper voice 1 (melody)'), ('upper-2', 'Upper voice 2'), ('lower-1', 'Lower voice 1'),
                  ('lower-2', 'Lower voice 2'), ('lower-3', 'Lower voice 3')]
        voices = [{'id': v, 'name': n} for v, n in labels]
        mapping = {i: i for i in range(5)}
        provenance.append('Compile hautI, hautII, basI, basII and basIII separately. Cross-staff figures remain attached to their source variable, not their destination MIDI staff. The aggregate pitch/onset set equals the published MIDI after its eight-quarter SILENCE pre-roll is removed. Encoder-authored playback tempo and pedal are not note timings.')
        canonical = [(str(n), (n - 1) * 8., 8.) for n in range(1, 87)]
        order = list(range(1, 87))
        repeat_text = 'Bars 1–86 once, in score order. The return at bar 55 is written out, not an additional repeated traversal.'
    for note in notes:
        note[3] = mapping[int(note[3])]
    performed, bars = [], []
    cursor = 0.
    occurrences = defaultdict(int)
    for bar_number in order:
        number, start, duration = canonical[bar_number - 1]
        occurrences[number] += 1
        bars.append({'n': number, 'occ': occurrences[number], 'q': cursor, 'durQ': duration})
        for note in notes[(notes[:, 0] >= start - 1e-8) & (notes[:, 0] < start + duration - 1e-8)]:
            onset, dur, pitch, voice, velocity = note
            performed.append([cursor + onset - start, dur, int(pitch), int(voice), len(bars) - 1, int(velocity)])
        cursor += duration
    result = {'id': ident, 'voices': voices, 'bars': bars, 'notes': sorted(performed), 'endQ': cursor,
              'repeats': repeat_text, 'provenance': provenance, 'midiTracks': tracks}
    out = HERE / 'work' / (ident + '-events.json')
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(result, ensure_ascii=False, separators=(',', ':')) + '\n')
    print('EVENTS', ident, 'bars', len(bars), 'notes', len(performed), 'voices', len(voices), 'end_q', cursor, flush=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('ids', nargs='*', default=IDS)
    parser.add_argument('--lilypond', default='/tmp/lilypond-2.24.4/bin/lilypond')
    args = parser.parse_args()
    for ident in args.ids:
        extract(ident, args.lilypond)
