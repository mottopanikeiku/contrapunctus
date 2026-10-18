"""Small deterministic regressions; no audio decoding, network or site build."""
import copy
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
import xml.etree.ElementTree as ET

import mido

from align import publication_reasons
from pipeline import comparison
from score_events import attack_inventory, extract
from musicxml_tuplets import flatten_tuplets


class PublicationGates(unittest.TestCase):
    def setUp(self):
        self.checks = {
            'medianAbsoluteOnsetDeviation': .15, 'zeroOrNegativeDurations': 0,
            'collapsedAttackIntervals': 0, 'roundedCollapsedAttackIntervals': 0,
            'anchors': [{'nearestOnsetDeviation': .5}],
            'worstFiveAdaptiveRegions': [{'adaptiveMedian': .3}],
        }
        self.score = {'bars': [{'t': 0}, {'t': 1}], 'notes': [[0, .001, 60, 0, 0]]}

    def test_exact_thresholds_are_inclusive(self):
        self.assertEqual(publication_reasons(self.checks, self.score), [])

    def test_each_numeric_gate_rejects_independently(self):
        variants = [
            {'medianAbsoluteOnsetDeviation': .150001},
            {'zeroOrNegativeDurations': 1},
            {'collapsedAttackIntervals': 1},
            {'roundedCollapsedAttackIntervals': 1},
            {'anchors': [{'nearestOnsetDeviation': .500001}]},
            {'worstFiveAdaptiveRegions': [{'adaptiveMedian': .300001}]},
        ]
        for changes in variants:
            with self.subTest(changes=changes):
                self.assertEqual(len(publication_reasons({**self.checks, **changes}, self.score)), 1)

    def test_rounded_note_and_bar_collapse_reject(self):
        self.score['notes'][0][1] = 0
        self.score['bars'][1]['t'] = 0
        self.assertEqual(len(publication_reasons(self.checks, self.score)), 2)


class ScoreComparison(unittest.TestCase):
    def setUp(self):
        self.score = {'id': 'example', 'bars': [{'n': '0', 'occ': 1, 't': .2}],
                      'notes': [[.2, 1., 60, 0, 0]], 'voices': [{'id': 'part', 'name': 'Part'}]}

    def check_diff(self, new):
        return comparison(json.dumps(self.score).encode(), json.dumps(new).encode())

    def test_identical_and_one_millisecond_tolerance(self):
        self.assertTrue(self.check_diff(self.score)['byteIdentical'])
        changed = copy.deepcopy(self.score)
        changed['notes'][0][0] += .001
        result = self.check_diff(changed)
        self.assertFalse(result['byteIdentical'])
        self.assertTrue(result['numericallyEquivalent'])
        changed['notes'][0][0] += .001
        self.assertFalse(self.check_diff(changed)['numericallyEquivalent'])

    def test_voice_or_pitch_changes_are_not_timing_equivalence(self):
        changed = copy.deepcopy(self.score)
        changed['notes'][0][2] += 12
        self.assertFalse(self.check_diff(changed)['numericallyEquivalent'])
        changed = copy.deepcopy(self.score)
        changed['voices'][0]['name'] = 'Invented voice'
        self.assertFalse(self.check_diff(changed)['numericallyEquivalent'])


class PerformedEvents(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.directory = Path(self.temp.name)
        midi = mido.MidiFile(ticks_per_beat=480)
        midi.tracks.append(mido.MidiTrack([mido.MetaMessage('track_name', name='Part')]))
        # Real MIDI: half-quarter attacks at source q0, q1, q2 and q3.
        track = midi.tracks[0]
        for index in range(4):
            track.append(mido.Message('note_on', note=60 + index, velocity=64, time=0 if index == 0 else 240))
            track.append(mido.Message('note_off', note=60 + index, velocity=0, time=240))
        midi.save(self.directory / 'source.mid')
        self.cfg = {'id': 'example', 'source': {'midi': 'source.mid'},
                    'extraction': {'mode': 'published-midi'},
                    'voices': [{'id': 'part', 'name': 'Part', 'tracks': ['Part']}],
                    'bars': {'first': 0, 'count': 3, 'quarters': 1.5,
                             'overrides': {'0': 1}, 'order': [[0, 2]], 'description': 'Fixture'}}

    def extract_fixture(self):
        # Only config/path lookup is isolated. MIDI parsing and repeat/pitch
        # transformations run through the production implementation.
        with patch('score_events.load', return_value=self.cfg), patch('score_events.HERE', self.directory):
            return extract('example', directory=self.directory)

    def test_pickup_and_named_track_mapping(self):
        events = self.extract_fixture()
        self.assertEqual([b['n'] for b in events['bars']], ['0', '1', '2'])
        self.assertEqual([b['q'] for b in events['bars']], [0, 1, 2.5])
        self.assertEqual([n[2] for n in events['notes']], [60, 61, 62, 63])
        self.assertEqual(events['endQ'], 4)

    def test_partial_bar_repeat_and_occurrences(self):
        self.cfg['bars']['order'] = [{'from': [0, 0], 'to': [1, 1]},
                                     {'from': [1, 0], 'to': [2, 1.5]}]
        events = self.extract_fixture()
        self.assertEqual([(b['n'], b['occ']) for b in events['bars']], [('0', 1), ('1', 1), ('1', 2), ('2', 1)])
        self.assertEqual([(n[0], n[2]) for n in events['notes']], [(0, 60), (1, 61), (2, 61), (3, 62), (4, 63)])

    def test_contiguous_fragments_merge(self):
        self.cfg['bars']['order'] = [{'from': [0, 0], 'to': [1, 1]},
                                     {'from': [1, 1], 'to': [2, 1.5]}]
        events = self.extract_fixture()
        self.assertEqual(len(events['bars']), 3)
        self.assertEqual(events['bars'][1]['durQ'], 1.5)

    def test_regional_transposition_is_half_open(self):
        self.cfg['voices'][0]['transpose'] = -12
        self.cfg['voices'][0]['transposeRanges'] = [{'fromQ': 1, 'toQ': 3, 'semitones': 12, 'basis': 'Fixture convention'}]
        self.assertEqual([n[2] for n in self.extract_fixture()['notes']], [48, 61, 62, 51])

    def test_inventory_multiset_preserves_doublings(self):
        midi = mido.MidiFile(self.directory / 'source.mid')
        midi.tracks.append(copy.deepcopy(midi.tracks[0]))
        midi.save(self.directory / 'doubled.mid')
        single = attack_inventory(self.directory / 'source.mid', multiset=True)
        double = attack_inventory(self.directory / 'doubled.mid', multiset=True)
        self.assertEqual(set(single), set(double))
        self.assertNotEqual(single, double)
        self.assertEqual(sum(double.values()), 8)


class MusicXMLTuplets(unittest.TestCase):
    def fixture(self):
        xml = ET.fromstring('<score-partwise><part id="P3"><measure number="120">'
                            '<attributes><divisions>480</divisions></attributes>'
                            '</measure><measure number="121"><note><duration>480</duration>'
                            '<type>quarter</type></note></measure></part></score-partwise>')
        measure = xml.find('part/measure')
        for i in range(18):
            note = ET.SubElement(measure, 'note')
            pitch = ET.SubElement(note, 'pitch')
            ET.SubElement(pitch, 'step').text = 'A'
            ET.SubElement(pitch, 'octave').text = '3'
            ET.SubElement(note, 'duration').text = '53'
            ET.SubElement(note, 'type').text = '16th'
            mod = ET.SubElement(note, 'time-modification')
            ET.SubElement(mod, 'actual-notes').text = '18'
            ET.SubElement(mod, 'normal-notes').text = '8'
            ET.SubElement(note, 'beam', {'number': '1'}).text = 'continue'
            notation = ET.SubElement(note, 'notations')
            if i == 0:
                ET.SubElement(notation, 'tuplet', {'type': 'start', 'number': '1'})
                ET.SubElement(notation, 'slur', {'type': 'start', 'number': '1'})
            if i % 6 == 0:
                ET.SubElement(notation, 'tuplet', {'type': 'start', 'number': '2'})
            if i % 6 == 5:
                ET.SubElement(notation, 'tuplet', {'type': 'stop', 'number': '2'})
            if i == 17:
                ET.SubElement(notation, 'tuplet', {'type': 'stop', 'number': '1'})
                ET.SubElement(notation, 'slur', {'type': 'stop', 'number': '1'})
        return xml

    def test_exact_rhythm_without_duplicating_notes(self):
        xml = self.fixture()
        flatten_tuplets(xml, [{'part': 'P3', 'measures': [120], 'basis': 'Fixture nested ratio'}])
        measure = xml.find('part/measure')
        notes = measure.findall('note')
        self.assertEqual(len(notes), 18)
        self.assertEqual(measure.findtext('attributes/divisions'), '1440')
        self.assertEqual([n.findtext('duration') for n in notes], ['160'] * 18)
        self.assertEqual(len(measure.findall('.//tuplet')), 2)
        self.assertEqual(len(measure.findall('.//slur')), 2)
        self.assertEqual(len(measure.findall('.//beam')), 18)
        self.assertEqual([n.findtext('pitch/step') for n in notes], ['A'] * 18)
        self.assertEqual(xml.findtext("part/measure[@number='121']/note/duration"), '1440')
        self.assertEqual(measure.findtext('.//tuplet-actual/tuplet-number'), '18')
        self.assertEqual(measure.findtext('.//tuplet-normal/tuplet-number'), '8')

    def test_ambiguous_voice_is_rejected(self):
        xml = self.fixture()
        ET.SubElement(xml.find('part/measure'), 'backup')
        with self.assertRaisesRegex(ValueError, 'one sequential voice'):
            flatten_tuplets(xml, [{'part': 'P3', 'measures': [120], 'basis': 'Fixture'}])


if __name__ == '__main__':
    unittest.main()
