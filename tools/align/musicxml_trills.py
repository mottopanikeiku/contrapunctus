"""Route explicitly evidenced trill stops without adding or retiming score notes."""
import copy
from fractions import Fraction
import xml.etree.ElementTree as ET

from config import inside
from musicxml_ties import source_timing


def route_trills(xml, specifications, originals):
    native_files, parts, plans = {}, {}, []
    starts_seen, stops_seen = set(), set()
    intervals = {}
    for spec in specifications:
        part_id = spec['part']
        if part_id not in parts:
            matches = [p for p in xml.findall('part') if p.get('id') == part_id]
            if len(matches) != 1:
                raise ValueError('Trill routing requires one exact source part')
            part = matches[0]
            measures = part.findall('measure')
            locations, lengths = source_timing(part)
            beginnings, cursor = {}, Fraction(0)
            for measure in measures:
                beginnings[measure] = cursor
                cursor += lengths[measure]
            parts[part_id] = (part, measures, locations, beginnings)
        part, measures, locations, beginnings = parts[part_id]

        def select(selector):
            matches = [m for m in measures if m.get('number') == str(selector['measure'])]
            index = selector['note']
            if len(matches) != 1 or not isinstance(index, int) or index < 0:
                raise ValueError('Trill selectors require unique measures and zero-based note indices')
            notes = matches[0].findall('note')
            if index >= len(notes):
                raise ValueError('Trill note index is outside its source measure')
            return matches[0], notes[index]

        measure, start = select(spec['start'])
        q, end = Fraction(str(spec['startQ'])), Fraction(str(spec['endQ']))
        location = locations[start]
        number = str(spec['start']['number'])
        waves = [w for w in start.findall('notations/ornaments/wavy-line')
                 if w.get('type') == 'start' and w.get('number', '1') == number]
        if (len(waves) != 1 or not start.findall('notations/ornaments/trill-mark')
                or start.get('print-object') == 'no' or location[0] != q or location[1] <= 0
                or location[2] is None or end <= q or not spec.get('basis') or waves[0] in starts_seen):
            raise ValueError('Trill routing requires a unique visible source trill start, exact time and basis')
        starts_seen.add(waves[0])
        evidence = spec['evidence']
        if evidence['file'] not in native_files:
            native_files[evidence['file']] = ET.parse(inside(originals, evidence['file'])).getroot()
        endpoints = native_files[evidence['file']].findall(evidence['selector'])
        if len(endpoints) != 1 or endpoints[0].tag != 'location':
            raise ValueError('Native trill evidence must select one exact endpoint location')
        native = endpoints[0]
        actual = {n.tag: (n.text or '').strip() for n in native}
        if len(actual) != len(native) or actual != evidence['expected']:
            raise ValueError('Native trill endpoint fields differ from the declared immutable evidence')
        target_index = measures.index(measure) + int(actual.get('measures', '0'))
        if not 0 <= target_index < len(measures):
            raise ValueError('Native trill endpoint is outside the selected movement')
        native_end = (beginnings[measures[target_index]] + q - beginnings[measure]
                      + 4 * Fraction(actual.get('fractions', '0')))
        if native_end != end:
            raise ValueError(f'Native trill endpoint {native_end} differs from declared {end}')
        targets = [note for note, row in locations.items()
                   if row[0] == end and row[1] > 0 and row[3:] == location[3:]
                   and note.find('chord') is None and note.get('print-object') != 'no']
        if len(targets) != 1:
            raise ValueError('Trill stop requires one existing visible note/rest onset in its source voice and staff')
        stop = None
        stop_parent = None
        if spec.get('stop') is not None:
            _, stop_note = select(spec['stop'])
            stop_location = locations[stop_note]
            matches = [(parent, wave) for parent in stop_note.findall('notations/ornaments')
                       for wave in parent.findall('wavy-line')
                       if wave.get('type') == 'stop' and wave.get('number', '1') == number]
            if (len(matches) != 1 or str(spec['stop'].get('number', number)) != number
                    or stop_location[0] + stop_location[1] != end or matches[0][1] in stops_seen):
            edge = spec['stop'].get('edge', 'end')
            stop_q = stop_location[0] + (stop_location[1] if edge == 'end' else 0)
            if (len(matches) != 1 or str(spec['stop'].get('number', number)) != number
                    or edge not in ('start', 'end') or stop_q != end or matches[0][1] in stops_seen):
                raise ValueError('Trill stop must match its exact source number and evidenced endpoint time')
        else:
            for note, row in locations.items():
                if q < row[0] + row[1] <= end and any(
                        w.get('type') == 'stop' and w.get('number', '1') == number
                        for w in note.findall('notations/ornaments/wavy-line')):
                    raise ValueError('A declared absent trill stop exists in the selected source interval')
        intervals.setdefault((part_id, location[3], location[4]), []).append((q, end))
        plans.append((spec, waves[0], stop_parent, stop, targets[0]))
    for spans in intervals.values():
        ordered = sorted(spans)
        if any(a[1] > b[0] for a, b in zip(ordered, ordered[1:])):
            raise ValueError('Overlapping source trills need separate owning voices, not one LilyPond spanner')
    for part, _, _, _ in parts.values():
        declared = {wave for note in part.findall('measure/note')
                    if note.findall('notations/ornaments/trill-mark')
                    for wave in note.findall('notations/ornaments/wavy-line') if wave.get('type') == 'start'}
        if declared - starts_seen:
            raise ValueError('Trill routing must account for every trill-span start in each selected part')
    for spec, start, parent, stop, target in plans:
        start.set('cp-trill', 'yes')
        if stop is not None:
            parent.remove(stop)
            moved = copy.deepcopy(stop)
        else:
            moved = ET.Element('wavy-line', {'type': 'stop', 'number': str(spec['start']['number'])})
        moved.set('cp-trill', 'yes')
        notations = target.find('notations')
        if notations is None:
            notations = ET.Element('notations')
            index = next((i for i, n in enumerate(target) if n.tag in ('lyric', 'play', 'listen')), len(target))
            target.insert(index, notations)
        ornaments = notations.find('ornaments')
        if ornaments is None:
            ornaments = ET.SubElement(notations, 'ornaments')
        # End the old span before a new source trill starts on this same note.
        ornaments.insert(0, moved)
        print('TRILL-SPAN', spec['part'], spec['startQ'], '->', spec['endQ'], spec['basis'], flush=True)
