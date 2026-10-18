"""Explicit, asserted MusicXML structure repairs; timed notes remain unchanged."""
import copy
from fractions import Fraction
import xml.etree.ElementTree as ET

from musicxml_ties import source_timing


def preserve_partial_measures(xml, specifications):
    for part in xml.findall('part'):
        _, lengths = source_timing(part)
        for spec in specifications:
            measures = [m for m in part.findall('measure') if m.get('number') == str(spec['number'])]
            expected = Fraction(str(spec['quarters']))
            if len(measures) != 1 or expected <= 0 or not spec.get('basis'):
                raise ValueError('Explicit partial measures require unique numbers, positive lengths and source basis')
            measure = measures[0]
            if lengths[measure] != expected:
                raise ValueError(f'{part.get("id")} measure {spec["number"]}: source duration {lengths[measure]} != declared {expected}')
            # Consumed only by our guarded 2.24.4 interpreter adapter. Unlike
            # implicit=yes, this resets the next bar instead of joining it.
            measure.set('cp-preserve-duration', 'yes')
            print('PARTIAL', part.get('id'), spec['number'], str(expected), spec['basis'], flush=True)


def repeat_signature(part):
    return [(measure.get('number'), barline.get('location', 'right'), repeat.get('direction'), repeat.get('times', '2'))
            for measure in part.findall('measure') for barline in measure.findall('barline')
            for repeat in barline.findall('repeat')]


def ending_signature(measure):
    return [(barline.get('location', 'right'), ending.get('number'), ending.get('type'), (ending.text or '').strip())
            for barline in measure.findall('barline') for ending in barline.findall('ending')]


def share_endings(xml, master_id):
    parts = xml.findall('part')
    masters = [p for p in parts if p.get('id') == master_id]
    if len(masters) != 1:
        raise ValueError('Shared endings require one exact master part')
    master = masters[0]
    master_measures = master.findall('measure')
    numbers = [m.get('number') for m in master_measures]
    if len(set(numbers)) != len(numbers):
        raise ValueError('Shared endings require unique measure numbers in the selected movement')
    if not any(ending_signature(m) for m in master_measures):
        raise ValueError('Shared ending master contains no ending annotations')
    repeats = repeat_signature(master)
    for part in parts:
        measures = part.findall('measure')
        if [m.get('number') for m in measures] != numbers or repeat_signature(part) != repeats:
            raise ValueError('Shared endings require identical measure order and repeat barlines in every part')
        for source, target in zip(master_measures, measures):
            expected, actual = ending_signature(source), ending_signature(target)
            if actual:
                if actual != expected:
                    raise ValueError(f'{part.get("id")} measure {target.get("number")}: existing endings contradict master')
                continue
            for source_barline in source.findall('barline'):
                endings = source_barline.findall('ending')
                if not endings:
                    continue
                location = source_barline.get('location', 'right')
                matches = [b for b in target.findall('barline') if b.get('location', 'right') == location]
                if len(matches) > 1:
                    raise ValueError('Shared ending location has ambiguous source barlines')
                if matches:
                    barline = matches[0]
                else:
                    barline = ET.Element('barline', {'location': location})
                    target.insert(0 if location == 'left' else len(target), barline)
                for ending in endings:
                    index = next((i for i, node in enumerate(barline) if node.tag == 'repeat'), len(barline))
                    barline.insert(index, copy.deepcopy(ending))
        print('SHARED-ENDINGS', master_id, '->', part.get('id'), flush=True)


def mark_initial_grace(xml, spec):
    parts = [p for p in xml.findall('part') if p.get('id') == spec['part']]
    if len(parts) != 1 or not spec.get('basis'):
        raise ValueError('Initial grace synchronization requires one source part and documented basis')
    part = parts[0]
    measures = [m for m in part.findall('measure') if m.get('number') == str(spec['measure'])]
    index = spec['note']
    if len(measures) != 1 or not isinstance(index, int) or not 0 <= index < len(measures[0].findall('note')):
        raise ValueError('Initial grace synchronization requires one exact source note')
    note = measures[0].findall('note')[index]
    locations, _ = source_timing(part)
    if (note.find('grace') is None or note.get('print-object') == 'no'
            or locations[note][0] != 0 or locations[note][2] is None):
        raise ValueError('Initial grace synchronization must identify a real visible pitched grace at source time zero')
    xml.set('cp-prime-initial-graces', 'yes')
