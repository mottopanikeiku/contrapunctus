"""Small deterministic regressions; no audio decoding, network or site build."""
import copy
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch
import xml.etree.ElementTree as ET

import mido
import numpy as np

from align import endpoint_anchors, publication_reasons
from config import HERE, LILYPOND
from pipeline import comparison
from score_events import attack_inventory, extract
from musicxml_ties import source_timing, route_ties
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


class PitchAnchors(unittest.TestCase):
    def setUp(self):
        self.events = {'notes': [[0, 1, 60, 0], [1, 1, 64, 0], [2, 1, 67, 0]]}
        pitch = np.zeros((128, 350))
        for note, frame in [(60, 50), (64, 150), (67, 250)]:
            pitch[note, frame:frame + 20] = 1
        self.data = {'pitch': pitch}
        self.config = {'endpoints': {'first': [.8, 1.2], 'last': [4.8, 5.2], 'basis': 'Fixture'},
                       'anchors': [{'scoreQ': 1, 'window': [2.8, 3.2], 'basis': 'Fixture', 'label': 'coda'}]}

    def test_internal_pitch_window_retains_endpoints(self):
        anchors = endpoint_anchors(self.config, self.events, self.data)
        self.assertEqual([a['label'] for a in anchors], ['first', 'coda', 'last'])
        self.assertEqual(anchors[1]['audioSeconds'], 2.98)
        self.assertEqual(anchors[1]['midiPitches'], [64])
        self.assertEqual(anchors[1]['basis'], 'Fixture')

    def test_nonattack_and_duplicate_anchor_rejected(self):
        self.config['anchors'][0]['scoreQ'] = .5
        with self.assertRaisesRegex(ValueError, 'no score attack'):
            endpoint_anchors(self.config, self.events, self.data)
        self.config['anchors'][0]['scoreQ'] = 1
        self.config['anchors'].append(copy.deepcopy(self.config['anchors'][0]))
        with self.assertRaisesRegex(ValueError, 'increase'):
            endpoint_anchors(self.config, self.events, self.data)

    def test_backward_recording_anchor_rejected(self):
        self.data['pitch'][64, 20:30] = 1
        self.config['anchors'][0]['window'] = [.2, .6]
        with self.assertRaisesRegex(ValueError, 'increase'):
            endpoint_anchors(self.config, self.events, self.data)


class MusicXMLNoteTies(unittest.TestCase):
    def test_partial_chord_tie_keeps_untied_reattack(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            xml = directory / 'partial-tie.xml'
            xml.write_text('''<?xml version="1.0" encoding="utf-8"?>
<score-partwise version="3.1">
  <part-list><score-part id="P1"><part-name>Piano</part-name></score-part></part-list>
  <part id="P1"><measure number="1">
    <attributes><divisions>4</divisions><time><beats>2</beats><beat-type>4</beat-type></time>
      <clef><sign>G</sign><line>2</line></clef></attributes>
    <note><pitch><step>C</step><octave>4</octave></pitch><duration>4</duration>
      <tie type="start"/><type>quarter</type><notations><tied type="start"/></notations></note>
    <note><chord/><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><type>quarter</type></note>
    <note><pitch><step>C</step><octave>4</octave></pitch><duration>4</duration>
      <tie type="stop"/><type>quarter</type><notations><tied type="stop"/></notations></note>
    <note><chord/><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration><type>quarter</type></note>
  </measure></part>
</score-partwise>
''')
            lily = directory / 'partial-tie.ly'
            commands = [
                [sys.executable, str(HERE / 'musicxml_convert.py'), '--converter',
                 str(Path(LILYPOND).with_name('musicxml2ly')), '--midi', '--npl', '-o', str(lily), str(xml)],
                [LILYPOND, '-dno-print-pages', '-o', str(directory / 'out'), str(lily)],
            ]
            for command in commands:
                result = subprocess.run(command, capture_output=True, text=True)
                self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
            self.assertEqual(attack_inventory(directory / 'out.midi', multiset=True),
                             {(0., 60): 1, (0., 64): 1, (1., 64): 1})


class MusicXMLTieRoutes(unittest.TestCase):
    def fixture(self):
        xml = ET.fromstring('''<score-partwise><part id="P3">
<measure number="88"><attributes><divisions>12</divisions></attributes>
  <note><pitch><step>A</step><octave>4</octave></pitch><duration>36</duration><voice>1</voice><type>half</type><dot/></note>
  <backup><duration>36</duration></backup>
  <note><pitch><step>A</step><octave>4</octave></pitch><duration>36</duration><tie type="start"/>
    <voice>4</voice><type>half</type><dot/><notations><tied type="start"/><fermata type="inverted"/></notations></note>
</measure><measure number="89">
  <note><pitch><step>A</step><octave>4</octave></pitch><duration>12</duration><tie type="stop"/>
    <voice>1</voice><type>quarter</type><notations><tied type="stop"/></notations></note>
</measure></part></score-partwise>''')
        route = {'part': 'P3', 'measure': 88, 'fromNote': 1, 'toNote': 0,
                 'continuation': {'measure': 89, 'note': 0}, 'basis': 'Fixture'}
        return xml, route

    def test_only_tie_origin_moves_between_exact_unisons(self):
        xml, route = self.fixture()
        part = xml.find('part')
        before = source_timing(part)
        fermata = xml.find('.//fermata')
        route_ties(xml, [route])
        self.assertEqual(before, source_timing(part))
        self.assertEqual(len(xml.findall('.//note')), 3)
        notes = part.find('measure').findall('note')
        self.assertEqual(notes[0].find('tie').get('type'), 'start')
        self.assertIsNone(notes[1].find('tie'))
        self.assertIs(notes[1].find('notations/fermata'), fermata)
        self.assertEqual(fermata.get('type'), 'inverted')
        self.assertEqual(xml.findall('.//measure')[1].find('note/tie').get('type'), 'stop')

    def test_nonidentical_or_noncontiguous_routes_rejected(self):
        for selector, text in [('part/measure/note/pitch/step', 'G'),
                               ('part/measure/note/duration', '24'),
                               ('part/measure[@number=\"89\"]/note/voice', '2')]:
            with self.subTest(selector=selector):
                xml, route = self.fixture()
                xml.find(selector).text = text
                with self.assertRaisesRegex(ValueError, 'identical simultaneous unison'):
                    route_ties(xml, [route])


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
