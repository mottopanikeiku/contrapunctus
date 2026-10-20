#!/usr/bin/env python3
"""Humdrum **kern keyboard input: one token parse, a disposable MusicXML derivative and its attack inventory.

The downloaded .krn bytes stay unchanged. Verovio 6.3 reads Humdrum but cannot write MusicXML,
and music21 9.9.2's Humdrum reader drops invisible spacer rests and notes in three- or four-way
spine splits of the Chopin First Editions encodings. This module therefore reads the original
tokens directly: Humdrum line timing, spine splits/merges, explicit **kern pitches (sounding pitch;
*8va is a display instruction), ties, grace notes and tuplet durations. It writes plain
score-partwise MusicXML for LilyPond's converter: notes, rests, ties, tuplets, graces, beams,
slurs within one voice, fermatas, simple articulations/ornaments, clefs, keys, meters and barline
styles. Dynamics, hairpins, pedalling, fingering, stems, layout and editorial text are not converted.
"""
import argparse
from collections import Counter, defaultdict
from fractions import Fraction
from math import lcm
from pathlib import Path
import re
import xml.etree.ElementTree as ET

STEPS = {'c': 0, 'd': 2, 'e': 4, 'f': 5, 'g': 7, 'a': 9, 'b': 11}
RECIP = re.compile(r'(\d+)(?:%(\d+))?')
PITCH = re.compile(r'([a-gA-G])\1*')
TYPES = {Fraction(16): 'long', Fraction(8): 'breve', Fraction(4): 'whole', Fraction(2): 'half', Fraction(1): 'quarter',
         Fraction(1, 2): 'eighth', Fraction(1, 4): '16th', Fraction(1, 8): '32nd', Fraction(1, 16): '64th',
         Fraction(1, 32): '128th', Fraction(1, 64): '256th'}
CLEFS = re.compile(r'\*clef([GFC])(v*)(\^*)([1-5])$')
KEY = re.compile(r'\*k\[([a-g#\-]*)\]$')
METER = re.compile(r'\*M(\d+)/(\d+)$')
MODE = re.compile(r'\*([A-Ga-g])[#\-]?:$')
ARTICULATIONS = (("'", 'staccato'), ('`', 'staccatissimo'), ('^', 'accent'), ('~', 'tenuto'))
ORNAMENTS = (('T', 'trill-mark'), ('t', 'trill-mark'), ('M', 'mordent'), ('m', 'mordent'),
             ('W', 'inverted-mordent'), ('w', 'inverted-mordent'), ('S', 'turn'))


def rhythm(token):
    """Logical quarter duration, written type, dots and tuplet ratio of one **kern subtoken.

    As in humlib, every '.' in the subtoken is an augmentation dot, also after the pitch or rest
    signifier (`4r.yy`, `4C.`).
    """
    match = RECIP.search(token)
    if match is None:
        return None
    number, denominator = match.groups()
    dots = '.' * token.count('.')
    if number in ('0', '00'):
        units = Fraction(1, 2 if number == '0' else 4)
    else:
        units = Fraction(int(number), int(denominator or 1))
    logical = Fraction(4) / units * (2 - Fraction(1, 2 ** len(dots)))
    power = Fraction(1)
    while power * 2 <= units:
        power *= 2
    while power > units:
        power /= 2
    ratio = units / power
    written = Fraction(4) / power
    if written not in TYPES:
        raise ValueError(f'unsupported **kern rhythm {token!r}')
    return logical, TYPES[written], len(dots), (None if ratio == 1 else (ratio.numerator, ratio.denominator))


def pitch(token):
    runs = PITCH.findall(token)
    if len(runs) != 1:
        raise ValueError(f'**kern subtoken without exactly one pitch name: {token!r}')
    run = PITCH.search(token).group(0)
    octave = 3 + len(run) if run[0].islower() else 4 - len(run)
    alter = token.count('#') - token.count('-')
    return 12 * (octave + 1) + STEPS[run[0].lower()] + alter, run[0].upper(), alter, octave


def source_lines(source, corrections=()):
    """The .krn lines with documented single-subtoken repairs ({line, old, new, basis}) applied in memory.

    Each `old` must be one complete subtoken occurring exactly once on its 1-based data line; the
    downloaded bytes are not changed.
    """
    lines = source.read_text(encoding='utf-8').splitlines()
    for item in corrections:
        number = int(item['line'])
        if not item.get('basis') or item['old'] == item['new'] or not item['new'] or set(item['new']) & {' ', '\t'}:
            raise ValueError(f'{source.name}: invalid token correction {item!r}')
        line = lines[number - 1] if 0 < number <= len(lines) else ''
        fields = [f.split(' ') for f in line.split('\t')]
        hits = [(i, j) for i, f in enumerate(fields) for j, s in enumerate(f) if s == item['old']]
        if line[:1] in ('!', '*', '=', '') or len(hits) != 1:
            raise ValueError(f'{source.name}:{number}: correction {item["old"]!r} must match one data subtoken')
        fields[hits[0][0]][hits[0][1]] = item['new']
        lines[number - 1] = '\t'.join(' '.join(f) for f in fields)
    return lines


def parse(source, corrections=()):
    """Return timed events, barlines and attribute changes from a keyboard **kern file."""
    events, bars, attributes = [], [], []
    spines, now = None, Fraction(0)
    for number, line in enumerate(source_lines(source, corrections), 1):
        if not line or line.startswith('!'):
            continue
        fields = line.split('\t')
        if line.startswith('**'):
            spines = [{'kern': f == '**kern', 'busy': now, 'staff': None, 'slot': None} for f in fields]
            continue
        if spines is None or len(fields) != len(spines):
            raise ValueError(f'{source.name}:{number}: spine count mismatch')
        if line.startswith('*'):
            if any(f in ('*^', '*v', '*x', '*+', '*-') for f in fields):
                following, index = [], 0
                while index < len(fields):
                    field, spine = fields[index], spines[index]
                    if field == '*^':
                        right = dict(spine)
                        if spine['kern']:
                            used = {s['slot'] for s in spines + following if s['kern'] and s['staff'] == spine['staff']}
                            right['slot'] = min(set(range(1, 6)) - used)
                            if right['slot'] > 4:
                                raise ValueError(f'{source.name}:{number}: more than four voices on one staff')
                        following += [spine, right]
                    elif field == '*v':
                        run = index
                        while run < len(fields) and fields[run] == '*v':
                            run += 1
                        group = spines[index:run]
                        if len(group) < 2 or len({(s['kern'], s['staff']) for s in group}) != 1:
                            raise ValueError(f'{source.name}:{number}: invalid spine merge')
                        merged = dict(group[0])
                        merged['busy'] = max(s['busy'] for s in group)
                        if merged['kern']:
                            merged['slot'] = min(s['slot'] for s in group)
                        following.append(merged)
                        index = run
                        continue
                    elif field in ('*x', '*+'):
                        raise ValueError(f'{source.name}:{number}: unsupported spine manipulator {field}')
                    elif field != '*-':
                        following.append(spine)
                    index += 1
                spines = following
                continue
            for field, spine in zip(fields, spines):
                if not spine['kern']:
                    continue
                staff = re.fullmatch(r'\*staff(\d+)', field)
                if staff:
                    spine['staff'], spine['slot'] = int(staff.group(1)), 1
                elif CLEFS.match(field):
                    attributes.append({'time': now, 'kind': 'clef', 'staff': spine['staff'], 'slot': spine['slot'],
                                       'value': CLEFS.match(field).groups()})
                elif KEY.match(field):
                    signs = KEY.match(field).group(1)
                    attributes.append({'time': now, 'kind': 'key', 'staff': spine['staff'],
                                       'value': signs.count('#') - signs.count('-')})
                elif METER.match(field):
                    attributes.append({'time': now, 'kind': 'time', 'staff': spine['staff'],
                                       'value': tuple(int(v) for v in METER.match(field).groups())})
                elif field == '*met(c)':
                    attributes.append({'time': now, 'kind': 'symbol', 'staff': spine['staff'], 'value': 'common'})
                elif MODE.match(field):
                    attributes.append({'time': now, 'kind': 'mode', 'staff': spine['staff'],
                                       'value': 'major' if MODE.match(field).group(1).isupper() else 'minor'})
            continue
        if line.startswith('='):
            bars.append({'time': now, 'token': fields[0], 'line': number})
            continue
        timed = False
        for column, (field, spine) in enumerate(zip(fields, spines), 1):
            if not spine['kern'] or field == '.':
                continue
            if spine['staff'] is None:
                raise ValueError(f'{source.name}:{number}: **kern spine without *staff')
            subtokens = field.split(' ')
            grace = ['q' in s or 'Q' in s for s in subtokens]
            # A bare duration (no pitch, no rest) is an invisible space, as Verovio 6.3 reads it.
            space = len(subtokens) == 1 and not grace[0] and 'r' not in field and not PITCH.search(field)
            if any(grace) and not all(grace):
                raise ValueError(f'{source.name}:{number}: mixed grace/regular chord {field!r}')
            rhythms = [rhythm(s) for s in subtokens]
            if rhythms[0] is None:
                if not grace[0]:
                    raise ValueError(f'{source.name}:{number}: token without duration: {field!r}')
                rhythms[0] = (Fraction(0), 'eighth', 0, None)
            # Later chord members without their own recip share the first member's rhythm.
            rhythms = [r or rhythms[0] for r in rhythms]
            rest = ['r' in s or space for s in subtokens]
            if any(rest) and len(subtokens) != 1:
                raise ValueError(f'{source.name}:{number}: rest inside chord {field!r}')
            groups = defaultdict(list)
            for s, r in zip(subtokens, rhythms):
                groups[r].append(s)
            # Humdrum (humlib/Verovio) times a chord by its first subtoken; members with another
            # duration are separate notated voices in MusicXML/LilyPond.
            main = rhythms[0]
            for r, members in sorted(groups.items(), key=lambda item: item[0] != main):
                notes = []
                if not rest[0]:
                    for s in members:
                        if 'yy' in s:
                            raise ValueError(f'{source.name}:{number}: invisible pitched note {s!r}')
                        midi, step, alter, octave = pitch(s)
                        notes.append({'midi': midi, 'step': step, 'alter': alter, 'octave': octave,
                                      'tieStart': '[' in s or '_' in s, 'tieStop': ']' in s or '_' in s,
                                      'arpeggio': ':' in s, 'token': s})
                logical, kind, dots, ratio = r
                events.append({'time': now, 'line': number, 'column': column, 'staff': spine['staff'],
                               'slot': spine['slot'] if r == main else None,
                               'grace': (None if not grace[0] else ('plain' if 'qq' in field or 'Q' in field else 'slash')),
                               'rest': rest[0], 'hidden': rest[0] and ('yy' in field or space), 'notes': notes,
                               'duration': Fraction(0) if grace[0] else logical, 'type': kind, 'dots': dots,
                               'ratio': ratio, 'field': field if r == main else ' '.join(members)})
            if not grace[0]:
                spine['busy'] = now + main[0]
                timed = True
        ahead = [s['busy'] for s in spines if s['kern']]
        # After a line with regular tokens every spine must sound past it: an equal time means a
        # spine whose token had ended carried a null token, i.e. the line has no duration.
        if min(ahead) < now or (timed and min(ahead) == now):
            raise ValueError(f'{source.name}:{number}: a **kern spine has no sounding token')
        now = min(ahead)
    for event in [e for e in events if e['slot'] is None]:
        end = event['time'] + event['duration']
        for slot in range(1, 5):
            others = [o for o in events if o['staff'] == event['staff'] and o['slot'] == slot]
            if all(not (o['time'] < end and event['time'] < o['time'] + o['duration'])
                   and not (o['duration'] == 0 and event['time'] <= o['time'] < end) for o in others):
                event['slot'] = slot
                break
        else:
            raise ValueError(f'{source.name}:{event["line"]}: no free voice for a chord member of another duration')
    return events, bars, attributes


def attacks(source, corrections=()):
    """Regular (quarter, MIDI) attacks without tied continuations, grace notes, and barline times."""
    events, bars, _ = parse(source, corrections)
    regular, grace = Counter(), Counter()
    for event in events:
        for note in event['notes']:
            if event['grace']:
                grace[event['time'], note['midi']] += 1
            elif not note['tieStop']:
                regular[event['time'], note['midi']] += 1
    return regular, grace, [(b['token'], b['time']) for b in bars]


def measures(events, bars, attributes):
    """Numbered measures between barlines; an initial anacrusis is measure 0.

    An unnumbered interior barline inside an incomplete bar (for example a double bar at a
    section change) starts an implicit MusicXML continuation of the same numbered bar. After a
    complete bar it is an ordinary boundary whose next bar receives the following number.
    """
    meters = sorted((a['time'], Fraction(4 * a['value'][0], a['value'][1])) for a in attributes if a['kind'] == 'time')
    meter = lambda time: [length for when, length in meters if when <= time][-1]
    edges = []
    for bar in bars:
        token = bar['token']
        label = re.match(r'=+(\d+)', token)
        edges.append((bar['time'], label.group(1) if label else None, token))
    result = []
    start, number, implicit, bar_start = Fraction(0), '0', True, Fraction(0)
    for index, (time, label, token) in enumerate(edges):
        if time > start:
            result.append({'start': start, 'end': time, 'number': number, 'barline': token, 'implicit': implicit})
        elif result:
            result[-1]['barline'] = token
        final = token.startswith('==') and index == len(edges) - 1
        if label is None and not final and time - bar_start < meter(bar_start):
            number, implicit = number + 'X', True
        elif label is None and not final:
            number, implicit, bar_start = str(int(number) + 1), False, time
        else:
            number, implicit, bar_start = label, False, time
        start = time
    end = max((e['time'] + e['duration'] for e in events), default=start)
    if end > start:
        raise ValueError('notes after the final barline')
    return result


def sub(parent, tag, text=None, **attrs):
    element = ET.SubElement(parent, tag, {k.replace('_', '-'): str(v) for k, v in attrs.items()})
    if text is not None:
        element.text = str(text)
    return element


def slurs(events):
    """Mark slur starts/stops that pair within one staff voice; others are not converted."""
    stacks = defaultdict(list)
    for event in events:
        event['slurStart'], event['slurStop'] = [], []
    for event in sorted(events, key=lambda e: (e['time'], e['grace'] is None, e['line'])):
        key = event['staff'], event['slot']
        closes, opens = event['field'].count(')'), event['field'].count('(')
        for _ in range(closes):
            if stacks[key]:
                origin, level = stacks[key].pop()
                origin['slurStart'].append(level)
                event['slurStop'].append(level)
        for _ in range(opens):
            stacks[key].append((event, len(stacks[key]) + 1))


def beams(events):
    """MusicXML beam levels from **kern L/J (begin/end) and K/k (forward/backward hooks), per staff voice."""
    open_levels = defaultdict(int)
    for event in sorted(events, key=lambda e: (e['time'], e['grace'] is None, e['line'])):
        key = event['staff'], event['slot'], bool(event['grace'])
        token = event['field']
        starts, ends = token.count('L'), min(token.count('J'), open_levels[key])
        current = open_levels[key]
        values = {level: 'continue' for level in range(1, current - ends + 1)}
        values.update({level: 'end' for level in range(current - ends + 1, current + 1)})
        for level in range(current - ends + 1, current - ends + starts + 1):
            values[level] = 'continue' if values.get(level) == 'end' else 'begin'
        top = max(values, default=0)
        for level in range(token.count('K')):
            values[top + 1 + level] = 'forward hook'
        top = max(values, default=0)
        for level in range(token.count('k')):
            values[top + 1 + level] = 'backward hook'
        open_levels[key] = current - ends + starts
        event['beams'] = [] if event['hidden'] else sorted(values.items())


ORDER = ['long', 'breve', 'whole', 'half', 'quarter', 'eighth', '16th', '32nd', '64th', '128th', '256th']
LENGTH = {name: length for length, name in TYPES.items()}


def grace_leads(events):
    """Shorten written grace values only where LilyPond 2.24.4 MIDI would go back in time.

    LilyPond performs a grace group before its main note for about a quarter of the group's
    written length (MEAS: 44 ticks for an eighth at 384 per quarter). When that lead reaches
    back past the previous attack of the same voice, LilyPond reports "Going back in MIDI time"
    and delays the rest of that MIDI track. Such groups are halved until the lead fits; the
    pitches, count and order of the graces are unchanged. A closing group after the last regular
    note becomes a LilyPond after-grace, performed before the default afterGraceFraction (3/4) of
    its preceding note, so it must fit in that part. Returns the number of changed graces.
    """
    groups = defaultdict(list)
    for event in events:
        if event['grace']:
            groups[event['staff'], event['slot'], event['time']].append(event)
    final = max(e['time'] + e['duration'] for e in events)
    for (staff, slot, time), group in groups.items():
        previous = max((e['time'] for e in events if e['staff'] == staff and e['slot'] == slot
                        and e['grace'] is None and e['notes'] and e['time'] < time), default=None)
        if previous is None:
            continue
        span = (time - previous) * (Fraction(3, 4) if time >= final else 1)
        while sum(LENGTH[e['type']] * (2 - Fraction(1, 2 ** e['dots'])) for e in group) / 4 >= span:
            if any(e['type'] == '64th' for e in group):
                raise ValueError(f'grace group at quarter {time} cannot fit before the previous attack')
            for e in group:
                e['type'] = ORDER[ORDER.index(e['type']) + 1]
                e['graceShortened'] = True
    return sum(1 for e in events if e.get('graceShortened'))


def close_beams(voice):
    """Keep MusicXML beams inside one measure voice.

    **kern beams can cross barlines or spine merges; an unterminated LilyPond beam forbids every
    later line break. A continuation without a start begins a beam; a level still open at the
    measure end ends on its last note (a lone start is dropped). Hooks are unchanged.
    """
    for grace in (False, True):
        last = {}
        for event in (e for e in voice if bool(e['grace']) == grace):
            fixed = []
            for level, value in event['beams']:
                if value in ('continue', 'end') and level not in last:
                    value = 'begin' if value == 'continue' else None
                if value is None:
                    continue
                if value in ('begin', 'continue'):
                    last[level] = event
                elif value == 'end':
                    last.pop(level, None)
                fixed.append((level, value))
            event['beams'] = fixed
        for level, event in last.items():
            event['beams'] = [(l, 'end' if l == level and v == 'continue' else v) for l, v in event['beams']
                              if not (l == level and v == 'begin')]


def tuplets(voice):
    """Bracket contiguous equal-ratio groups only when they close on whole tuplet units.

    A group with a gap or invisible rest (a converter skip) is not bracketed: the skip would be scaled too.
    """
    index = 0
    while index < len(voice):
        event = voice[index]
        if event['grace'] or event['ratio'] is None:
            index += 1
            continue
        ratio, total, smallest, stop = event['ratio'], Fraction(0), None, None
        for probe in range(index, len(voice)):
            item = voice[probe]
            if item['grace']:
                continue
            if item['ratio'] != ratio or item['hidden'] or item['time'] != event['time'] + total:
                break
            total += item['duration']
            unit = item['duration'] * ratio[0] / ratio[1] / (2 - Fraction(1, 2 ** item['dots']))
            smallest = unit if smallest is None else min(smallest, unit)
            if (total / (smallest * ratio[1])).denominator == 1:
                stop = probe
                break
        if stop is None:
            index += 1
            continue
        members = [e for e in voice[index:stop + 1] if not e['grace']]
        # The converter needs a start and a stop on pitched notes (it ignores rest notations);
        # other groups keep only their exact time modification.
        if len(members) > 1 and members[0]['notes'] and members[-1]['notes']:
            members[0]['tuplet'], members[-1]['tuplet'] = 'start', 'stop'
        index = stop + 1


def to_musicxml(source, dest, corrections=()):
    events, bars, attributes = parse(source, corrections)
    staves = sorted({e['staff'] for e in events})
    if staves != [1, 2]:
        raise ValueError(f'{source.name}: expected keyboard staves 1 and 2, got {staves}')
    slurs(events)
    beams(events)
    shortened = grace_leads(events)
    bins = measures(events, bars, attributes)
    quanta = [e['time'] for e in events] + [e['duration'] for e in events] + [m['start'] for m in bins]
    divisions = lcm(*(q.denominator for q in quanta))
    root = ET.Element('score-partwise', version='3.1')
    part_list = sub(root, 'part-list')
    score_part = sub(part_list, 'score-part', id='P1')
    sub(score_part, 'part-name', 'Piano')
    part = sub(root, 'part', id='P1')
    state = {'key': None, 'mode': None, 'time': None, 'symbol': None}
    for measure_index, bin_ in enumerate(bins):
        start, end = bin_['start'], bin_['end']
        measure = sub(part, 'measure', number=bin_['number'])
        if bin_['implicit']:
            measure.set('implicit', 'yes')
        # Graces after the last regular note of the piece (a closing flourish) stay in the final
        # measure; musicxml2ly makes graces that end a measure voice after-graces of its last note.
        last = measure_index == len(bins) - 1
        local = [e for e in events if start <= e['time'] < end or (last and e['grace'] and e['time'] == end)]
        changes = [a for a in attributes if start <= a['time'] < end or (measure_index == 0 and a['time'] < end)]
        initial = [a for a in changes if a['time'] == start or measure_index == 0]
        later = [a for a in changes if a not in initial]
        if any(a['kind'] != 'clef' for a in later):
            raise ValueError(f'{source.name}: mid-measure key/meter change in measure {bin_["number"]}')
        head = ET.Element('attributes')
        if measure_index == 0:
            sub(head, 'divisions', divisions)
        for kind in ('key', 'mode', 'time', 'symbol'):
            values = {a['value'] for a in initial if a['kind'] == kind}
            if len(values) > 1:
                raise ValueError(f'{source.name}: staves disagree on {kind} in measure {bin_["number"]}')
            if values:
                state[kind] = values.pop()
        if measure_index == 0 or any(a['kind'] in ('key', 'mode') for a in initial):
            key = sub(head, 'key')
            sub(key, 'fifths', state['key'] or 0)
            if any(a['kind'] == 'mode' for a in initial):
                sub(key, 'mode', state['mode'])
        if measure_index == 0 or any(a['kind'] in ('time', 'symbol') for a in initial):
            if state['time'] is None:
                raise ValueError(f'{source.name}: no meter')
            time = sub(head, 'time', **({'symbol': 'common'} if state['symbol'] == 'common' else {}))
            sub(time, 'beats', state['time'][0])
            sub(time, 'beat-type', state['time'][1])
        if measure_index == 0:
            sub(head, 'staves', 2)
        for clef in [a for a in initial if a['kind'] == 'clef']:
            add_clef(head, clef)
        if len(head):
            measure.append(head)
        cursor = Fraction(0)
        for staff in (1, 2):
            slots = sorted({e['slot'] for e in local if e['staff'] == staff}) or [1]
            for slot in slots:
                voice_number = slot + 4 * (staff - 1)
                if cursor:
                    backup = sub(measure, 'backup')
                    sub(backup, 'duration', int(cursor * divisions))
                    cursor = Fraction(0)
                voice = sorted((e for e in local if e['staff'] == staff and e['slot'] == slot),
                               key=lambda e: (e['time'], e['grace'] is None, e['line']))
                tuplets(voice)
                close_beams(voice)
                pending = [a for a in later if a['staff'] == staff
                           and (a['slot'] == slot if a['slot'] in slots else slot == slots[0])]
                for event in voice + [None]:
                    target = end - start if event is None else event['time'] - start
                    for clef in [a for a in pending if a['time'] - start <= target]:
                        if clef['time'] - start > cursor:
                            forward(measure, clef['time'] - start - cursor, divisions, voice_number, staff)
                            cursor = clef['time'] - start
                        attrs = sub(measure, 'attributes')
                        add_clef(attrs, clef)
                        pending.remove(clef)
                    if target > cursor:
                        forward(measure, target - cursor, divisions, voice_number, staff)
                        cursor = target
                    if event is not None:
                        write_event(measure, event, divisions, voice_number, staff)
                        cursor += event['duration']
        style = bin_['barline']
        if style.startswith('==') or '|!' in style or '||' in style:
            barline = sub(measure, 'barline', location='right')
            sub(barline, 'bar-style', 'light-light' if '||' in style and not style.startswith('==') else 'light-heavy')
        elif ':' in style:
            raise ValueError(f'{source.name}: repeat barline {style!r} is not converted')
    ET.indent(root)
    ET.ElementTree(root).write(dest, encoding='utf-8', xml_declaration=True)
    return {'graceValuesShortened': shortened, 'tokenCorrections': len(corrections)}


def add_clef(parent, clef):
    sign, down, up, line = clef['value']
    element = sub(parent, 'clef', number=clef['staff'])
    sub(element, 'sign', sign)
    sub(element, 'line', line)
    if down or up:
        sub(element, 'clef-octave-change', len(up) - len(down))


def forward(measure, duration, divisions, voice, staff):
    element = sub(measure, 'forward')
    sub(element, 'duration', int(duration * divisions))
    sub(element, 'voice', voice)
    sub(element, 'staff', staff)


def write_event(measure, event, divisions, voice, staff):
    members = event['notes'] or [None]
    for index, note in enumerate(members):
        element = sub(measure, 'note', **({'print-object': 'no'} if event['hidden'] else {}))
        if event['grace']:
            sub(element, 'grace', **({'slash': 'yes'} if event['grace'] == 'slash' else {}))
        if index:
            sub(element, 'chord')
        if note is None:
            sub(element, 'rest')
        else:
            p = sub(element, 'pitch')
            sub(p, 'step', note['step'])
            if note['alter']:
                sub(p, 'alter', note['alter'])
            sub(p, 'octave', note['octave'])
        if not event['grace']:
            sub(element, 'duration', int(event['duration'] * divisions))
        if note is not None and note['tieStop']:
            sub(element, 'tie', type='stop')
        if note is not None and note['tieStart']:
            sub(element, 'tie', type='start')
        sub(element, 'voice', voice)
        sub(element, 'type', event['type'])
        for _ in range(event['dots']):
            sub(element, 'dot')
        if event['ratio']:
            modification = sub(element, 'time-modification')
            sub(modification, 'actual-notes', event['ratio'][0])
            sub(modification, 'normal-notes', event['ratio'][1])
        sub(element, 'staff', staff)
        if index == 0:
            for level, value in event['beams']:
                sub(element, 'beam', value, number=level)
        notations = ET.Element('notations')
        if note is not None and note['tieStop']:
            sub(notations, 'tied', type='stop')
        if note is not None and note['tieStart']:
            sub(notations, 'tied', type='start')
        if index == 0:
            if event.get('tuplet') in ('start', 'single'):
                sub(notations, 'tuplet', type='start', number=1)
            if event.get('tuplet') in ('stop', 'single'):
                sub(notations, 'tuplet', type='stop', number=1)
            for level in event['slurStop']:
                sub(notations, 'slur', type='stop', number=level)
            for level in event['slurStart']:
                sub(notations, 'slur', type='start', number=level)
            if ';' in event['field']:
                sub(notations, 'fermata', type='upright')
            marks = [name for sign, name in ARTICULATIONS if sign in event['field']]
            if "''" in event['field']:
                marks = [m if m != 'staccato' else 'staccatissimo' for m in marks]
            if marks and note is not None:
                group = sub(notations, 'articulations')
                for name in dict.fromkeys(marks):
                    sub(group, name)
            ornaments = [name for sign, name in ORNAMENTS if note is not None and sign in event['field']]
            if ornaments:
                group = sub(notations, 'ornaments')
                sub(group, ornaments[0])
        if note is not None and note['arpeggio']:
            sub(notations, 'arpeggiate')
        if len(notations):
            element.append(notations)


def cross_voice_ties(source, corrections=()):
    """List source ties whose continuation lies in another encoded voice of the same staff.

    LilyPond ties only within a voice, so compiled MIDI reattacks such continuations. Each item
    gives the compiled (same-voice-merged) origin and continuation notes for an explicit
    `extraction.ties` declaration; nothing is joined automatically.
    """
    events, _, _ = parse(source, corrections)
    starts = defaultdict(list)
    for e in events:
        if not e['grace']:
            for n in e['notes']:
                starts[e['staff'], e['time'], n['midi']].append((e, n))
    def successor(e, n):
        found = [(f, m) for f, m in starts.get((e['staff'], e['time'] + e['duration'], n['midi']), []) if m['tieStop']]
        return found[0] if len(found) == 1 else None
    def segment(e, n):
        duration = e['duration']
        while n['tieStart']:
            following = successor(e, n)
            if following is None or following[0]['slot'] != e['slot']:
                break
            e, n = following
            duration += e['duration']
        return e, n, duration
    result = []
    for e in events:
        if e['grace']:
            continue
        for n in e['notes']:
            if n['tieStop']:
                continue
            end, last, duration = segment(e, n)
            origin = {'q': e['time'], 'pitch': n['midi'], 'staff': e['staff'], 'durationQ': duration, 'line': e['line']}
            while last['tieStart']:
                following = successor(end, last)
                if following is None:
                    break
                f, m = following
                end, last, piece = segment(f, m)
                result.append({'origin': dict(origin), 'continuation': {
                    'q': f['time'], 'pitch': m['midi'], 'staff': f['staff'], 'durationQ': piece, 'line': f['line']}})
                origin['durationQ'] += piece
    return result


def verovio_check(source, corrections=()):
    """Independent rhythm reading with Verovio's Humdrum importer.

    Verovio note ids name their **kern line and column. Its timemap qstamps are notated
    quarter positions (its MIDI is not used: Verovio 6.3 omits key-signature accidentals there
    and performs fermatas, arpeggios and graces). Verovio can pad or merge split measures, so
    each non-grace token is compared by its offset from the first token of its measure.
    Returns the per-measure comparison and Verovio's pitched-note count.
    """
    import json
    import verovio
    toolkit = verovio.toolkit()
    toolkit.setOptions({'inputFrom': 'humdrum'})
    if not toolkit.loadData('\n'.join(source_lines(source, corrections)) + '\n'):
        raise ValueError('Verovio could not load the Humdrum file')
    timemap = toolkit.renderToTimemap({'includeMeasures': False, 'includeRests': False})
    timemap = json.loads(timemap) if isinstance(timemap, str) else timemap
    theirs, count = {}, 0
    for entry in timemap:
        for ident in entry.get('on', []):
            count += 1
            match = re.match(r'note-L(\d+)F(\d+)', ident)
            if match:
                theirs.setdefault((int(match.group(1)), int(match.group(2))),
                                  Fraction(entry['qstamp']).limit_denominator(100000))
    events, bars, _ = parse(source, corrections)
    offsets, lines, graced, missing = defaultdict(set), defaultdict(set), set(), 0
    measure = lambda time: max((b['time'] for b in bars if b['time'] <= time), default=Fraction(0))
    for event in events:
        if event['grace']:
            graced.add(measure(event['time']))
        if event['grace'] or not event['notes']:
            continue
        key = event['line'], event['column']
        if key not in theirs:
            missing += 1
            continue
        offsets[measure(event['time'])].add(theirs[key] - event['time'])
        lines[measure(event['time']), event['line']].add(theirs[key])
    disagreeing = [bar for bar, values in offsets.items() if len(values) != 1]
    # Tokens on one Humdrum data line are simultaneous by definition of the format.
    split = {bar for (bar, _), values in lines.items() if len(values) != 1}
    return {'verovio': toolkit.getVersion(), 'verovioNotes': count, 'kernNotes': sum(len(e['notes']) for e in events),
            'measuresCompared': len(offsets), 'tokensMissingInVerovio': missing,
            'differentInternalTiming': len(disagreeing),
            'ofWhichGraceMeasures': sorted(str(b) for b in disagreeing if b in graced),
            'ofWhichVerovioDesynchronisesOneDataLine': sorted(str(b) for b in disagreeing if b not in graced and b in split),
            'unexplained': sorted(str(b) for b in disagreeing if b not in graced and b not in split)}


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('kern')
    parser.add_argument('--musicxml')
    parser.add_argument('--verovio', action='store_true')
    parser.add_argument('--ties', action='store_true', help='print cross-voice ties as extraction.ties JSON')
    parser.add_argument('--config', help='piece config whose source.humdrumCorrections are applied')
    args = parser.parse_args()
    import json
    path = Path(args.kern)
    corrections = json.loads(Path(args.config).read_text())['source'].get('humdrumCorrections', []) if args.config else []
    regular, grace, bars = attacks(path, corrections)
    print('KERN', path.name, 'regular', sum(regular.values()), 'grace', sum(grace.values()),
          'end_q', float(bars[-1][1]), 'barlines', len(bars), 'corrections', len(corrections))
    if args.verovio:
        print('VEROVIO', verovio_check(path, corrections))
    if args.ties:
        voice = {1: 'upper', 2: 'lower'}
        print(json.dumps([{
            key: {'q': float(item[key]['q']), 'pitch': item[key]['pitch'], 'voice': voice[item[key]['staff']],
                  'durationQ': float(item[key]['durationQ'])} for key in ('origin', 'continuation')} | {
            'basis': f'{path.name} lines {item["origin"]["line"]}/{item["continuation"]["line"]}: source tie continues '
                     f'in another encoded voice of the same staff; LilyPond cannot tie across voices, so the note is held, not reattacked.'}
            for item in cross_voice_ties(path, corrections)], ensure_ascii=False, indent=1))
    if args.musicxml:
        print('MUSICXML', to_musicxml(path, Path(args.musicxml), corrections))
