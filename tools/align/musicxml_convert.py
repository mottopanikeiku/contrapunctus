#!/usr/bin/env python3
"""Run the pinned converter with note-specific ties, staff-owned clefs and explicit short measures.

The installed converter and libraries stay untouched. Exact source guards fail
closed if the implementation changes; no score notes or pitches are patched.
"""
import argparse
import inspect
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
                 '_install_source_trills': install_source_trills, '_ornament_has_wavyline': ornament_has_wavyline}
    exec(compile(source, str(path), 'exec'), namespace)


if __name__ == '__main__':
    main()
