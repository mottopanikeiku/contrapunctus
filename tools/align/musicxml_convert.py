#!/usr/bin/env python3
"""Run the pinned converter with note-specific ties and explicit short measures.

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
        'import musicexp\n': 'import musicexp\n_install_note_ties(musicexp)\n',
        'import musicxml\n': 'import musicxml\n_install_measure_lengths(musicxml)\n',
        '                    ev_chord.append(musicexp.TieEvent())':
            '                    main_event._cp_tie_to_next = True',
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
                 '_install_measure_lengths': install_measure_lengths}
    exec(compile(source, str(path), 'exec'), namespace)


if __name__ == '__main__':
    main()
