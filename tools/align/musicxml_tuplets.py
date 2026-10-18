"""Flatten explicitly selected uniform nested tuplets for musicxml2ly.

Pitch/order, beams and slurs are untouched. Exact written type/dots/ratio replace
rounded XML playback ticks, with a common divisions grid for the affected part.
"""
from fractions import Fraction
from math import lcm
import xml.etree.ElementTree as ET

QUARTERS = {'maxima': Fraction(32), 'long': Fraction(16), 'breve': Fraction(8),
            'whole': Fraction(4), 'half': Fraction(2), 'quarter': Fraction(1),
            **{name: Fraction(1, divisor) for name, divisor in (
                ('eighth', 2), ('16th', 4), ('32nd', 8), ('64th', 16),
                ('128th', 32), ('256th', 64), ('512th', 128), ('1024th', 256))}}


def flatten_tuplets(xml, specifications):
    for spec in specifications:
        part = xml.find(f"part[@id='{spec['part']}']")
        if part is None or not spec.get('basis'):
            raise ValueError('Tuplet normalization requires an existing part and source basis')
        wanted = {str(n) for n in spec['measures']}
        measures = [m for m in part.findall('measure') if m.get('number') in wanted]
        if {m.get('number') for m in measures} != wanted:
            raise ValueError('A requested tuplet measure is absent')
        outer = str(spec.get('outerNumber', 1))
        exact = {}
        for measure in measures:
            notes = measure.findall('note')
            if (measure.find('backup') is not None or measure.find('forward') is not None
                    or len({n.findtext('voice', '1') for n in notes}) != 1):
                raise ValueError('Flattened tuplet measures must have one sequential voice')
            group = None
            for note in notes:
                if note.find('chord') is not None or note.find('grace') is not None:
                    raise ValueError('Uniform nested-tuplet normalization does not accept chords/graces')
                mod = note.find('time-modification')
                if mod is None:
                    raise ValueError('Every selected note must carry its written tuplet ratio')
                actual, normal = int(mod.findtext('actual-notes')), int(mod.findtext('normal-notes'))
                typ, dots = note.findtext('type'), len(note.findall('dot'))
                if actual <= 0 or normal <= 0 or typ not in QUARTERS:
                    raise ValueError('Invalid written tuplet duration')
                duration = QUARTERS[typ] * (2 - Fraction(1, 2 ** dots)) * Fraction(normal, actual)
                exact[note.find('duration')] = duration
                notation = note.find('notations')
                markers = [] if notation is None else list(notation.findall('tuplet'))
                boundary = [m.get('type') for m in markers if m.get('number', '1') == outer]
                rhythm = (actual, normal, typ, dots)
                if 'start' in boundary:
                    if group is not None:
                        raise ValueError('Nested outer tuplet boundary is ambiguous')
                    group = [rhythm, 0]
                if group is None or group[0] != rhythm:
                    raise ValueError('Selected outer tuplets must have a uniform written rhythm')
                group[1] += 1
                for marker in markers:
                    notation.remove(marker)
                for kind in boundary:
                    marker = ET.SubElement(notation, 'tuplet', {'type': kind, 'number': '1', 'bracket': 'yes'})
                    if kind == 'start':
                        for label, count in [('actual', actual), ('normal', normal)]:
                            unit = ET.SubElement(marker, 'tuplet-' + label)
                            ET.SubElement(unit, 'tuplet-number').text = str(count)
                            ET.SubElement(unit, 'tuplet-type').text = typ
                            for _ in range(dots):
                                ET.SubElement(unit, 'tuplet-dot')
                    elif kind != 'stop':
                        raise ValueError('Unsupported tuplet boundary type')
                if 'stop' in boundary:
                    if group[1] != actual:
                        raise ValueError('Outer tuplet note count disagrees with its combined ratio')
                    group = None
            if group is not None:
                raise ValueError('Selected outer tuplet crosses a measure boundary')
        divisions = [int(n.text) for n in part.findall('measure/attributes/divisions')]
        if not divisions or None in exact:
            raise ValueError('Tuplet normalization requires declared divisions and timed notes')
        grid = lcm(*divisions, *(duration.denominator for duration in exact.values()))
        old_divisions = None
        for measure in part.findall('measure'):
            for node in measure.findall('attributes/divisions'):
                old_divisions = int(node.text)
                node.text = str(grid)
            if old_divisions is None:
                raise ValueError('Missing initial MusicXML divisions')
            for node in measure.findall('.//duration') + measure.findall('.//offset'):
                ticks = exact[node] * grid if node in exact else Fraction(node.text) * grid / old_divisions
                if ticks.denominator != 1:
                    raise ValueError('A MusicXML duration is not representable on the exact grid')
                node.text = str(ticks.numerator)
        print('TUPLETS', spec['part'], 'measures', sorted(wanted, key=int),
              'notes', len(exact), 'exact divisions', grid, flush=True)
