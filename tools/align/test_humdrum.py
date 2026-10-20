"""Regression tests for the **kern reader used by the Chopin first-edition alignments."""
import tempfile
import unittest
from fractions import Fraction
from pathlib import Path

import humdrum_convert as hc


def kern(text):
    """Write a small **kern file and return its path."""
    handle = tempfile.NamedTemporaryFile('w', suffix='.krn', delete=False, encoding='utf-8')
    handle.write(text)
    handle.close()
    return Path(handle.name)


TWO_STAFF = '\n'.join([
    '**kern\t**kern',
    '*staff2\t*staff1',
    '*clefF4\t*clefG2',
    '*M3/4\t*M3/4',
    '=1\t=1',
    '2.C\t4c 4e\t',
    '.\t4d',
    '.\t4FFF',
    '=2\t=2',
    '2.GG\t2.g',
    '==\t==',
    '*-\t*-',
]).replace('\t\n', '\n')


class Rhythm(unittest.TestCase):
    def test_dot_after_rest_or_pitch_counts(self):
        # humlib reads every '.' as an augmentation dot, also after the signifier.
        self.assertEqual(hc.rhythm('4r.yy')[0], Fraction(3, 2))
        self.assertEqual(hc.rhythm('4C.')[0], Fraction(3, 2))
        self.assertEqual(hc.rhythm('8.cc')[0], Fraction(3, 4))

    def test_triplet_ratio(self):
        logical, kind, dots, ratio = hc.rhythm('12e')
        self.assertEqual((logical, kind, dots, ratio), (Fraction(1, 3), 'eighth', 0, (3, 2)))


class Pitch(unittest.TestCase):
    def test_octaves_and_accidentals(self):
        self.assertEqual(hc.pitch('c')[0], 60)
        self.assertEqual(hc.pitch('C')[0], 48)
        self.assertEqual(hc.pitch('FFF')[0], 29)
        self.assertEqual(hc.pitch('FFF#')[0], 30)
        self.assertEqual(hc.pitch('ee-')[0], 75)


class Corrections(unittest.TestCase):
    def setUp(self):
        self.path = kern(TWO_STAFF)

    def tearDown(self):
        self.path.unlink()

    def test_applies_one_documented_subtoken_repair(self):
        fix = {'line': 8, 'old': '4FFF', 'new': '4FFF#', 'basis': 'first edition shows F sharp'}
        lines = hc.source_lines(self.path, [fix])
        self.assertEqual(lines[7].split('\t')[1], '4FFF#')
        self.assertIn('4FFF', self.path.read_text())  # the downloaded bytes stay unchanged

    def test_rejects_undocumented_or_ambiguous_repairs(self):
        with self.assertRaises(ValueError):
            hc.source_lines(self.path, [{'line': 8, 'old': '4FFF', 'new': '4FFF#'}])  # no basis
        with self.assertRaises(ValueError):
            hc.source_lines(self.path, [{'line': 8, 'old': '4GGG', 'new': '4GGG#', 'basis': 'x'}])  # not on that line
        with self.assertRaises(ValueError):
            hc.source_lines(self.path, [{'line': 5, 'old': '=1', 'new': '=1a', 'basis': 'x'}])  # barline, not data

    def test_corrected_pitch_reaches_the_events(self):
        fix = {'line': 8, 'old': '4FFF', 'new': '4FFF#', 'basis': 'first edition shows F sharp'}
        midis = lambda events: sorted(n['midi'] for e in events for n in e['notes'])
        plain = midis(hc.parse(self.path)[0])
        fixed = midis(hc.parse(self.path, [fix])[0])
        self.assertIn(29, plain)
        self.assertNotIn(29, fixed)
        self.assertIn(30, fixed)


class Parse(unittest.TestCase):
    def test_bars_chords_and_bar_fill(self):
        path = kern(TWO_STAFF)
        try:
            events, bars, _ = hc.parse(path)
        finally:
            path.unlink()
        self.assertEqual([b['time'] for b in bars], [0, 3, 6])
        chord = next(e for e in events if len(e['notes']) == 2)
        self.assertEqual(chord['duration'], 1)
        self.assertEqual(sum(e['duration'] for e in events if e['staff'] == 1 and e['time'] < 3), 3)
        self.assertEqual([n['midi'] for n in chord['notes']], [60, 64])


if __name__ == '__main__':
    unittest.main()
