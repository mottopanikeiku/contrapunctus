#!/usr/bin/env python3
"""Run the pinned converter with note-specific ties, staff-owned clefs and explicit short measures.

The installed converter and libraries stay untouched. Exact source guards fail
closed if the implementation changes; no score notes or pitches are patched.
"""
import argparse
import inspect
from fractions import Fraction
from pathlib import Path
import sys
import textwrap


def install_note_ties(musicexp):
    original_note = musicexp.NoteEvent.print_ly
    original_chord_element = musicexp.NoteEvent.chord_element_ly

    def print_note(self, printer):
        original_note(self, printer)
        if getattr(self, '_cp_tie_to_next', False):
            printer('~')

    def chord_element(self):
        return original_chord_element(self) + ('~' if getattr(self, '_cp_tie_to_next', False) else '')

    musicexp.NoteEvent.print_ly = print_note
    musicexp.NoteEvent.chord_element_ly = chord_element


def install_source_trills(musicexp):
    original_expression = musicexp.TextSpannerEvent.ly_expression
    original_before = musicexp.TextSpannerEvent.print_before_note

    def expression(self):
        if getattr(self, '_cp_source_trill', False):
            return {-1: '\\startTrillSpan', 1: '\\stopTrillSpan'}[self.span_direction]
        return original_expression(self)

    def before(self, printer):
        if getattr(self, '_cp_source_trill', False):
            if hasattr(self, 'force_direction'):
                printer.dump('\\once \\override TrillSpanner.direction = #' + str(self.force_direction))
        else:
            original_before(self, printer)

    musicexp.TextSpannerEvent.ly_expression = expression
    musicexp.TextSpannerEvent.print_before_note = before


def ornament_has_wavyline(event):
    for child in event._parent._children:
        if child._name != 'wavy-line':
            continue
        if getattr(child, 'cp-trill', None) != 'yes':
            return True
        # A configured start supplies its own trill glyph. A stop must not
        # suppress an independent ornament already attached to that note.
        if event.get_name() == 'trill-mark' and child.get_type() == 'start':
            return True
    return False


def prime_initial_graces(voices, musicexp, parts, make_duration):
    if not parts or getattr(parts[0]._parent, 'cp-prime-initial-graces', None) != 'yes':
        return
    positions = []
    for part, named_voices in voices.items():
        for name, voice in named_voices.items():
            music = voice.ly_voice
            while isinstance(music, musicexp.RelativeMusic):
                music = music.element
            if not isinstance(music, musicexp.SequentialMusic):
                raise ValueError('Initial grace synchronization needs a sequential source voice')
            found = False
            for index, event in enumerate(music.elements):
                # 2.24.4's MultiMeasureRest inherits Music.get_length()==0;
                # its actual written duration is stored separately.
                length = event.duration.get_length() if isinstance(event, musicexp.MultiMeasureRest) else event.get_length()
                if length > 0:
                    if not isinstance(event, (musicexp.ChordEvent, musicexp.RhythmicEvent, musicexp.MultiMeasureRest)):
                        raise ValueError('Unsupported first timed element for initial grace synchronization')
                    grace = getattr(event, 'grace_elements', None)
                    lead = sum((e.get_length() for e in grace.elements), Fraction(0)) if grace else Fraction(0)
                    positions.append((part, name, music, index, event, lead))
                    found = True
                    break
                if ((isinstance(event, musicexp.NestedMusic) and event.elements)
                        or getattr(event, 'element', None) is not None or getattr(event, 'grace_elements', None)):
                    raise ValueError('Initial grace synchronization does not guess through leading nested music')
            if not found:
                raise ValueError('Initial grace synchronization found a voice without timed music')
    maximum = max((p[-1] for p in positions), default=Fraction(0))
    if maximum <= 0:
        raise ValueError('Declared initial grace is absent from converted music')
    if any(0 < p[-1] < maximum for p in positions):
        raise ValueError('Unequal existing initial grace groups require separate source-aware treatment')
    for part, name, music, index, event, lead in positions:
        if lead == maximum:
            continue
        if not isinstance(event, musicexp.ChordEvent):
            wrapper = musicexp.ChordEvent()
            wrapper.append(event)
            music.elements[index] = event = wrapper
        skip = musicexp.SkipEvent()
        skip.duration = make_duration(maximum - lead)
        grace = musicexp.ChordEvent()
        grace.append(skip)
        if event.grace_elements:
            event.grace_elements.elements.insert(0, grace)
        else:
            event.append_grace(grace)
        print('GRACE-PRIME', part, name, str(maximum - lead), 'whole-note units of silent grace skip', flush=True)


def install_measure_lengths(musicxml):
    source = inspect.getsource(musicxml.Part.interpret)
    old = '                    now = new_now'
    if source.count(old) != 1:
        raise ValueError('MusicXML measure interpreter changed; review explicit short-measure support')
    source = source.replace(old,
        '                    if getattr(previous_measure, "cp-preserve-duration", None) != "yes":\n'
        '                        now = new_now', 1)
    methods = {}
    exec(compile(textwrap.dedent(source), '<musicxml explicit measure durations>', 'exec'),
         musicxml.__dict__, methods)
    musicxml.Part.interpret = methods['interpret']


def install_clef_ownership(musicxml):
    source = inspect.getsource(musicxml.Part.extract_voices)
    old = ('                        for v in vids:\n'
           '                            voices[v].add_element(staff_attributes)')
    if source.count(old) != 1:
        raise ValueError('MusicXML attribute distribution changed; review staff clef ownership')
    new = ('                        owner = getattr(n, "voice_id", None)\n'
           '                        clef_only = all(c.get_name() == "clef" for c in staff_attributes.get_all_children())\n'
           '                        for v in vids:\n'
           '                            if not clef_only or owner not in vids or v == owner:\n'
           '                                voices[v].add_element(staff_attributes)')
    methods = {}
    exec(compile(textwrap.dedent(source.replace(old, new, 1)), '<musicxml staff clef ownership>', 'exec'),
         musicxml.__dict__, methods)
    musicxml.Part.extract_voices = methods['extract_voices']


def converter_source(path):
    path = Path(path).resolve()
    source = path.read_text()
    if source.startswith('#!/bin/sh'):
        # The supplied relocatable LilyPond distribution uses this launcher.
        path = path.parent.parent / 'libexec' / 'musicxml2ly'
        source = path.read_text()
    if 'lilypond_version = "2.24.4"' not in source:
        raise ValueError('MusicXML conversion adapters require the documented LilyPond 2.24.4 converter')
    replacements = {
        'import musicexp\n': 'import musicexp\n_install_note_ties(musicexp)\n_install_source_trills(musicexp)\n',
        'import musicxml\n': 'import musicxml\n_install_measure_lengths(musicxml)\n_install_clef_ownership(musicxml)\n',
        '                    ev_chord.append(musicexp.TieEvent())':
            '                    main_event._cp_tie_to_next = True',
        '    if name == "wavy-line":\n        ev.style = OrnamenthasWhat(mxl_event)':
            '    if name == "wavy-line":\n'
            '        if getattr(mxl_event, "cp-trill", None) == "yes":\n'
            '            ev._cp_source_trill = True\n'
            '        else:\n'
            '            ev.style = OrnamenthasWhat(mxl_event)',
        'def OrnamenthasWavyline(mxl_event):\n'
        '    for i in mxl_event._parent._children:\n'
        '        if i._name == "wavy-line":\n'
        '            return True\n'
        '    return False':
            'def OrnamenthasWavyline(mxl_event):\n'
            '    return _ornament_has_wavyline(mxl_event)',
        '    return (all_ly_voices, all_ly_staffinfo)':
            '    _prime_initial_graces(all_ly_voices, musicexp, parts, musicxml2ly_conversion.rational_to_lily_duration)\n'
            '    return (all_ly_voices, all_ly_staffinfo)',
    }
    for old, new in replacements.items():
        if source.count(old) != 1:
            raise ValueError('MusicXML converter implementation changed; review the conversion adapters')
        source = source.replace(old, new, 1)
    return path, source


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--converter', required=True)
    args, options = parser.parse_known_args()
    path, source = converter_source(args.converter)
    sys.dont_write_bytecode = True
    sys.argv = [str(path), *options]
    # Preserve the converter's original relocation and resource lookup paths.
    namespace = {'__name__': '__main__', '__file__': str(path), '_install_note_ties': install_note_ties,
                 '_install_measure_lengths': install_measure_lengths, '_install_clef_ownership': install_clef_ownership,
                 '_install_source_trills': install_source_trills, '_ornament_has_wavyline': ornament_has_wavyline,
                 '_prime_initial_graces': prime_initial_graces}
    exec(compile(source, str(path), 'exec'), namespace)


if __name__ == '__main__':
    main()
