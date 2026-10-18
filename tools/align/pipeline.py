#!/usr/bin/env python3
"""Fetch → extract → align → checks/overlays → gated score and sheet publication."""
import argparse
import hashlib
import json
import os
import shutil
import subprocess
import traceback

from config import HERE, ROOT, LILYPOND, load, write_json
from fetch import fetch
from prepare import prepare
from score_events import extract
from align import run
from check_contract import validate
from diagnose import plot


def comparison(previous, candidate):
    if previous is None:
        return {'previousScore': False, 'byteIdentical': None, 'numericallyEquivalent': None}
    old, new = json.loads(previous), json.loads(candidate)
    same_notes = len(old['notes']) == len(new['notes']) and all(a[2:] == b[2:] for a, b in zip(old['notes'], new['notes']))
    same_bars = len(old['bars']) == len(new['bars']) and all((a['n'], a['occ']) == (b['n'], b['occ']) for a, b in zip(old['bars'], new['bars']))
    deltas = {'noteOnsetSeconds': None, 'noteDurationSeconds': None, 'barSeconds': None}
    if same_notes:
        deltas['noteOnsetSeconds'] = max((abs(a[0] - b[0]) for a, b in zip(old['notes'], new['notes'])), default=0)
        deltas['noteDurationSeconds'] = max((abs(a[1] - b[1]) for a, b in zip(old['notes'], new['notes'])), default=0)
    if same_bars:
        deltas['barSeconds'] = max((abs(a['t'] - b['t']) for a, b in zip(old['bars'], new['bars'])), default=0)
    metadata = [k for k in old.keys() | new.keys() if k not in ('notes', 'bars') and old.get(k) != new.get(k)]
    return {'previousScore': True, 'previousSha256': hashlib.sha256(previous).hexdigest(),
            'candidateSha256': hashlib.sha256(candidate).hexdigest(), 'byteIdentical': previous == candidate,
            'sameNoteIdentities': same_notes, 'sameBarIdentities': same_bars, 'maximumAbsoluteDifferences': deltas,
            'metadataFieldsChanged': sorted(metadata), 'toleranceSeconds': .001,
            'numericallyEquivalent': same_notes and same_bars and not metadata and all(v <= .001 + 1e-12 for v in deltas.values())}


def publish(ident, candidate, report):
    stage = HERE / 'work' / (ident + '-publication')
    if stage.exists():
        shutil.rmtree(stage)
    stage.mkdir()
    subprocess.run(['node', str(ROOT / 'tools/engrave.mjs'), ident, '--prepared',
                    '--score', str(candidate), '--out', str(stage / 'sheet')], cwd=ROOT, check=True)
    destination = ROOT / 'docs/assets/data' / ident
    destination.mkdir(parents=True, exist_ok=True)
    old_sheet = stage / 'previous-sheet'
    sheet = destination / 'sheet'
    # Engrave/pack completed before either public artifact is replaced.
    temporary = destination / 'score.json.tmp'
    shutil.copyfile(candidate, temporary)
    if sheet.exists():
        sheet.rename(old_sheet)
    try:
        (stage / 'sheet').rename(sheet)
        os.replace(temporary, destination / 'score.json')
    except BaseException:
        if sheet.exists():
            shutil.rmtree(sheet)
        if old_sheet.exists():
            old_sheet.rename(sheet)
        temporary.unlink(missing_ok=True)
        raise
    shutil.rmtree(stage)
    report['published'] = True
    write_json(HERE / 'results' / (ident + '.json'), report)
    print('PUBLISHED', ident, 'provisional; not checked by ear', flush=True)


def pipeline(ident, do_publish=False):
    load(ident)
    report_path = HERE / 'work' / (ident + '-checks.json')
    report = {'id': ident, 'published': False, 'gateReasons': []}
    previous_path = ROOT / 'docs/assets/data' / ident / 'score.json'
    previous = previous_path.read_bytes() if previous_path.exists() else None
    try:
        cfg = fetch(ident)
        directory = prepare(cfg, LILYPOND)
        extract(ident, LILYPOND, directory)
        _, report = run(ident)
        report['published'] = False
        report['configSha256'] = hashlib.sha256((HERE / 'pieces' / (ident + '.json')).read_bytes()).hexdigest()
        report['sourceDownloads'] = cfg['source']['downloads']
        candidate = HERE / 'work' / (ident + '-candidate.json')
        report['comparison'] = comparison(previous, candidate.read_bytes())
        write_json(HERE / 'work' / (ident + '-diff.json'), report['comparison'])
        print('DIFF', ident, json.dumps(report['comparison']), flush=True)
        try:
            validate(candidate)
        except (AssertionError, KeyError, TypeError, ValueError) as error:
            report['gateReasons'].append('Score output contract: ' + (str(error) or 'assertion failed'))
        duration = report['endAnchor']['decodedDuration']
        windows = {(max(0., a['audioSeconds'] - 4), min(duration, a['audioSeconds'] + 8)) for a in report['anchors']}
        windows.update((max(0., a['audioSeconds'] - 4), min(duration, a['audioSeconds'] + 8))
                       for a in report['endpointMeasurements'] if a['label'] not in ('first', 'last'))
        windows.update((r['start'], r['end']) for key in ('worstFiveOnsetRegions', 'worstFiveAdaptiveRegions') for r in report[key])
        windows.update(tuple(w) for w in cfg.get('diagnostics', {}).get('overlays', []))
        report['overlays'] = []
        for start, end in sorted(windows):
            if not 0 <= start < end <= duration:
                raise ValueError(f'Overlay outside recording: {start}, {end}')
            report['overlays'].append(str(plot(ident, start, end, verbose=False).relative_to(HERE)))
        write_json(report_path, report)
        if report['gateReasons']:
            print('WITHHELD', ident, '; '.join(report['gateReasons']), flush=True)
            return 2
        if do_publish:
            publish(ident, candidate, report)
        else:
            print('PASS', ident, 'numeric gates only; not published', flush=True)
        write_json(report_path, report)
        return 0
    except Exception as error:
        report['pipelineError'] = str(error)
        report['gateReasons'].append('Pipeline did not complete: ' + str(error))
        write_json(report_path, report)
        traceback.print_exc()
        print('WITHHELD', ident, str(error), flush=True)
        return 1


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('id')
    parser.add_argument('--publish', action='store_true')
    args = parser.parse_args()
    raise SystemExit(pipeline(args.id, args.publish))
