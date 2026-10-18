"""Route a documented tie onto an existing identical unison in its destination voice.

No notes are created, removed, repitched or retimed. Exact note selectors and
source timing assertions prevent a generic 'merge equal pitches' heuristic.
"""
import copy
from fractions import Fraction
import xml.etree.ElementTree as ET


def note_locations(part):
    divisions, elapsed = None, Fraction(0)
    result = {}
    for measure in part.findall('measure'):
        cursor, extent, previous = Fraction(0), Fraction(0), None
        for item in measure:
            if item.tag == 'attributes' and item.find('divisions') is not None:
                divisions = int(item.findtext('divisions'))
            if item.tag not in ('note', 'backup', 'forward'):
                continue
            if not divisions or divisions <= 0:
                raise ValueError('Tie routing requires explicit positive MusicXML divisions')
            duration = Fraction(item.findtext('duration', '0')) / divisions
            if item.tag == 'backup':
                cursor -= duration
                previous = None
            elif item.tag == 'forward':
                cursor += duration
                previous = None
            else:
                if item.find('grace') is not None:
                    duration = Fraction(0)
                if item.find('chord') is None:
                    start = cursor
                    cursor += duration
                    previous = start
                elif previous is not None:
                    start = previous
                else:
                    raise ValueError('Tie routing found a chord without its preceding note')
                pitch = item.find('pitch')
                identity = None if pitch is None else (pitch.findtext('step'),
                    Fraction(pitch.findtext('alter', '0')), int(pitch.findtext('octave')))
                result[item] = (elapsed + start, duration, identity,
                                item.findtext('staff', '1'), item.findtext('voice', '1'))
                extent = max(extent, start + duration)
            extent = max(extent, cursor)
        elapsed += extent
    return result


def route_ties(xml, routes):
    for route in routes:
        parts = [p for p in xml.findall('part') if p.get('id') == route['part']]
        if len(parts) != 1 or not route.get('basis'):
            raise ValueError('Tie routing requires one exact part and documented source basis')
        part = parts[0]

        def select(measure_number, note_index):
            measures = [m for m in part.findall('measure') if m.get('number') == str(measure_number)]
            if len(measures) != 1 or not isinstance(note_index, int) or note_index < 0:
                raise ValueError('Tie routing requires unique measure numbers and zero-based note indices')
            notes = measures[0].findall('note')
            if note_index >= len(notes):
                raise ValueError('Tie route note index is outside its source measure')
            return notes[note_index]

        origin = select(route['measure'], route['fromNote'])
        target = select(route['measure'], route['toNote'])
        continuation = select(route['continuation']['measure'], route['continuation']['note'])
        locations = note_locations(part)
        a, b, c = (locations[n] for n in (origin, target, continuation))
        if (a[:4] != b[:4] or a[2] is None or a[1] <= 0 or a[4] == b[4]
                or c[0] != a[0] + a[1] or c[1] <= 0 or c[2:] != b[2:]):
            raise ValueError('Tie route must join an identical simultaneous unison to its contiguous destination voice')
        sounding = origin.findall('tie')
        drawn = origin.findall('notations/tied')
        stops = [t for t in continuation.findall('notations/tied') if t.get('type') == 'stop']
        if (len(sounding) != 1 or sounding[0].get('type') != 'start'
                or len(drawn) != 1 or drawn[0].get('type') != 'start'
                or target.findall('tie') or target.findall('notations/tied')
                or len(stops) != 1 or stops[0].get('number', '1') != drawn[0].get('number', '1')
                or not any(t.get('type') == 'stop' for t in continuation.findall('tie'))):
            raise ValueError('Tie route must move one explicit start onto an untied unison with a matching stop')
        origin.remove(sounding[0])
        origin.find('notations').remove(drawn[0])
        target.insert(list(target).index(target.find('duration')) + 1, copy.deepcopy(sounding[0]))
        notations = target.find('notations')
        if notations is None:
            notations = ET.Element('notations')
            index = next((i for i, node in enumerate(target) if node.tag in ('lyric', 'play', 'listen')), len(target))
            target.insert(index, notations)
        notations.append(copy.deepcopy(drawn[0]))
        print('TIE-ROUTE', route['part'], route['measure'], route['fromNote'], '->', route['toNote'], route['basis'], flush=True)
