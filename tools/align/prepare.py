#!/usr/bin/env python3
"""Convert disposable source copies, never the hash-pinned downloads."""
import argparse
import copy
from pathlib import Path
import re
import shutil
import subprocess
import xml.etree.ElementTree as ET
import zipfile

from config import HERE, LILYPOND, inside, load
from musicxml_tuplets import flatten_tuplets


def definitions(cfg, directory):
    chunks = []
    entries = cfg['extraction'].get('definitions', [{'file': cfg['source']['main'], 'before': '\\score'}])
    for entry in entries:
        text = inside(directory, entry['file']).read_text()
        if entry.get('before'):
            if entry['before'] not in text:
                raise ValueError(f'Definition delimiter missing: {entry}')
            text = text.split(entry['before'], 1)[0]
        # Keep relative includes relative to the file containing the definitions.
        parent = inside(directory, entry['file']).parent
        text = re.sub(r'\\include\s+"([^"]+)"',
                      lambda m: '\\include "' + str(parent / m[1]) + '"' if (parent / m[1]).is_file() else m[0], text)
        chunks.append(text)
    return '\n'.join(chunks)


def prepare(cfg, lilypond=LILYPOND):
    directory = HERE / 'work' / (cfg['id'] + '-source')
    if directory.exists():
        shutil.rmtree(directory)
    shutil.copytree(HERE / 'sources' / cfg['id'], directory)
    source = cfg['source']
    main = inside(directory, source['main'])
    if source.get('musicxml'):
        original = inside(directory, source['musicxml'])
        if zipfile.is_zipfile(original):
            with zipfile.ZipFile(original) as archive:
                container = ET.fromstring(archive.read('META-INF/container.xml'))
                rootfile = container.find('.//{*}rootfile').attrib['full-path']
                xml = ET.fromstring(archive.read(rootfile))
        else:
            xml = ET.parse(original).getroot()
        if xml.tag != 'score-partwise':
            raise ValueError('musicxml2ly input must be score-partwise MusicXML')
        if source.get('musicxmlMeasures'):
            start, end = source['musicxmlMeasures']
            for part in xml.findall('part'):
                measures = part.findall('measure')
                if not 0 <= start < end <= len(measures):
                    raise ValueError('MusicXML movement measure slice is outside a part')
                inherited = {}
                for measure in measures[:start]:
                    for attrs in measure.findall('attributes'):
                        for item in attrs:
                            inherited[item.tag, item.get('number')] = copy.deepcopy(item)
                attrs = measures[start].find('attributes')
                if attrs is None:
                    attrs = ET.Element('attributes')
                    measures[start].insert(0, attrs)
                present = {(item.tag, item.get('number')) for item in attrs}
                for key, item in inherited.items():
                    if key not in present:
                        attrs.append(item)
                for index, measure in enumerate(measures):
                    if not start <= index < end:
                        part.remove(measure)
        if source.get('stripLyrics'):
            for note in xml.findall('.//note'):
                for lyric in note.findall('lyric'):
                    note.remove(lyric)
        if source.get('metricEquivalenceWords'):
            for direction in xml.findall('.//direction-type'):
                for metronome in direction.findall('metronome'):
                    if metronome.find('per-minute') is not None:
                        continue
                    units = []
                    for item in metronome:
                        if item.tag == 'beat-unit':
                            units.append(item.text + ' note')
                        elif item.tag == 'beat-unit-dot' and units:
                            units[-1] = 'dotted ' + units[-1]
                        else:
                            raise ValueError('Unsupported MusicXML metric-equivalence element: ' + item.tag)
                    if len(units) != 2:
                        raise ValueError('Metric equivalence must have two beat units')
                    words = ET.Element('words')
                    words.text = ' = '.join(units)
                    direction.insert(list(direction).index(metronome), words)
                    direction.remove(metronome)
        if source.get('otherDynamicsWords'):
            for direction in xml.findall('.//direction-type'):
                for dynamics in direction.findall('dynamics'):
                    for other in dynamics.findall('other-dynamics'):
                        words = ET.Element('words')
                        words.text = other.text
                        direction.insert(list(direction).index(dynamics), words)
                        dynamics.remove(other)
                    if not len(dynamics):
                        direction.remove(dynamics)
        implicit = {str(n) for n in source.get('musicxmlImplicitMeasures', [])}
        for measure in xml.findall('.//measure'):
            if measure.get('number') in implicit:
                measure.set('implicit', 'yes')
        if source.get('musicxmlFlattenTuplets'):
            flatten_tuplets(xml, source['musicxmlFlattenTuplets'])
        selected = directory / '__selected.musicxml'
        ET.ElementTree(xml).write(selected, encoding='utf-8', xml_declaration=True)
        main.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run([str(Path(lilypond).with_name('musicxml2ly')), '--midi', '--npl', '-o', str(main), str(selected)], check=True)
    legacy = source.get('legacyRelative')
    if legacy:
        extraction = cfg['extraction']
        if (legacy != 'verify-midi' or extraction['mode'] != 'compiled-midi'
                or extraction.get('comparePublished') is None or not source.get('midi')
                or not extraction.get('music')
                or extraction['music'] != cfg.get('engraving', {}).get('music')):
            raise ValueError('legacyRelative requires compiled-midi, comparePublished, source.midi and identical extraction/engraving music')
    main_text = main.read_text()
    version = re.search(r'\\version\s+"([^"]+)"', main_text)
    for file in sorted(directory.rglob('*')):
        if file.suffix not in ('.ly', '.ily', '.lyi'):
            continue
        text = file.read_text()
        if legacy:
            # Conversion is provisional until the selected movement's exact
            # pitch/onset multiset is checked against its published MIDI.
            text = re.sub(r"(?m)^[ \t]*#\(ly:set-option\s+'old-relative\)[ \t]*(?:%[^\n]*)?$", '', text)
            file.write_text(text)
        command = [str(Path(lilypond).with_name('convert-ly')), '--loglevel=ERROR']
        if not re.search(r'\\version\s+"', text):
            if not version:
                raise ValueError(f'No LilyPond version for {file}')
            command += ['--from=' + version[1]]
        converted = subprocess.run(command + [str(file)], capture_output=True, text=True)
        if converted.returncode:
            raise ValueError(f'convert-ly failed for {file.relative_to(directory)}: {converted.stderr.strip()}')
        file.write_text(converted.stdout)
    if cfg['extraction']['mode'] != 'published-midi' or cfg.get('engraving', {}).get('music'):
        (directory / '__definitions.ly').write_text(definitions(cfg, directory))
    print('PREPARED', cfg['id'], source['main'], flush=True)
    return directory


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('id')
    parser.add_argument('--lilypond', default=LILYPOND)
    args = parser.parse_args()
    prepare(load(args.id), args.lilypond)
