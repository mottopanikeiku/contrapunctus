#!/usr/bin/env python3
"""Print provenance-relevant MIDI structure; no pitch/register voice guessing."""
from pathlib import Path
from collections import Counter
import mido

for file in sorted((Path(__file__).parent / 'sources').rglob('*.mid')):
    midi = mido.MidiFile(file)
    print('\nFILE', file, 'PPQ', midi.ticks_per_beat)
    for index, track in enumerate(midi.tracks):
        tick = 0
        first = []
        meta = []
        ons = Counter()
        for message in track:
            tick += message.time
            if message.is_meta and message.type != 'end_of_track':
                meta.append((tick / midi.ticks_per_beat, str(message)))
            if message.type == 'note_on' and message.velocity:
                ons[message.channel] += 1
                if len(first) < 12:
                    first.append((tick / midi.ticks_per_beat, message.note, message.channel))
        print(index, 'name', repr(track.name), 'end_q', tick / midi.ticks_per_beat, 'channels', dict(ons), 'first', first)
        print('META', meta[:15])
