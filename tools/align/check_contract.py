#!/usr/bin/env python3
"""Validate the score contract (the project validator currently only parses JSON)."""
import json
import math
from pathlib import Path
import sys


def number(value):
    return isinstance(value, (float, int)) and not isinstance(value, bool) and math.isfinite(value)


def validate(file):
    score = json.loads(file.read_text())
    assert set(score) in (
        {'id', 'status', 'review', 'source', 'tuningHz', 'method', 'voices', 'bars', 'notes', 'repeats'},
        {'id', 'status', 'review', 'source', 'tuningHz', 'method', 'voices', 'bars', 'notes', 'repeats', 'chords'}), 'Unexpected score fields'
    assert score['status'] == 'provisional'
    assert score['review'] == {'by': None, 'date': None, 'scope': ''}
    for field in ('title', 'edition', 'encoder', 'url', 'license', 'licenseUrl'):
        assert isinstance(score['source'][field], str) and score['source'][field]
    assert number(score['tuningHz']) and 400 < score['tuningHz'] < 480
    assert score['method'] and score['repeats']
    voices = score['voices']
    assert voices and len({v['id'] for v in voices}) == len(voices)
    assert all(set(v) == {'id', 'name'} and v['id'] and v['name'] for v in voices)
    bars = score['bars']
    assert bars
    occurrences = {}
    for i, bar in enumerate(bars):
        assert set(bar) == {'n', 'occ', 't'} and isinstance(bar['n'], str) and bar['n']
        occurrences[bar['n']] = occurrences.get(bar['n'], 0) + 1
        assert bar['occ'] == occurrences[bar['n']]
        assert number(bar['t']) and bar['t'] >= 0 and round(bar['t'], 3) == bar['t']
        assert i == 0 or bar['t'] > bars[i - 1]['t'], ('Non-increasing bar', i)
    previous = -1.
    for note in score['notes']:
        assert len(note) == 5
        onset, duration, midi, voice, bar = note
        assert number(onset) and onset >= previous and onset >= 0
        assert number(duration) and duration > 0
        assert round(onset, 3) == onset and round(duration, 3) == duration
        assert isinstance(midi, int) and 0 <= midi <= 127
        assert isinstance(voice, int) and 0 <= voice < len(voices)
        assert isinstance(bar, int) and 0 <= bar < len(bars)
        assert onset >= bars[bar]['t'] - .001
        assert bar == len(bars) - 1 or onset <= bars[bar + 1]['t'] + .001
        previous = onset
    if 'chords' in score:
        for chord in score['chords']:
            assert set(chord) == {'t0', 't1', 'label', 'basis'}
            assert chord['basis'] == 'editorial' and isinstance(chord['label'], str) and chord['label']
            assert number(chord['t0']) and number(chord['t1']) and chord['t1'] > chord['t0']
    print('ok', file, 'contract;', len(bars), 'bars;', len(score['notes']), 'notes;', len(voices), 'source-defined voices')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        raise SystemExit('usage: check_contract.py <score.json> [...]')
    for arg in sys.argv[1:]:
        validate(Path(arg))
