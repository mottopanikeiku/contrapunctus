"""Shared, recording-scoped configuration and paths for the score pipeline."""
import json
import os
from pathlib import Path
import re
import subprocess

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
LILYPOND = os.environ.get('LILYPOND', str(Path.home() / '.local/opt/lilypond-2.24.4/bin/lilypond'))


def piece_ids():
    return sorted(p.stem for p in (HERE / 'pieces').glob('*.json'))


def load(ident):
    if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', ident):
        raise ValueError('Invalid recording id')
    cfg = json.loads((HERE / 'pieces' / (ident + '.json')).read_text())
    if cfg['version'] != 1 or cfg['id'] != ident:
        raise ValueError('Config version/id mismatch')
    if not (ROOT / 'content/listen' / (ident + '.mjs')).is_file():
        raise ValueError(f'{ident}: no eligible content/listen recording')
    return cfg


def inside(directory, relative):
    result = (directory / relative).resolve()
    if not result.is_relative_to(directory.resolve()):
        raise ValueError(f'Path escapes source directory: {relative}')
    return result


def write_json(path, data, *, compact=False):
    path.parent.mkdir(parents=True, exist_ok=True)
    if compact:
        # Match the site's JSON.stringify pass exactly, including 1.0 -> 1,
        # negative zero and exponent formatting, without a final newline.
        payload = json.dumps(data, ensure_ascii=False, separators=(',', ':'), allow_nan=False)
        payload = subprocess.run(
            ['node', '-e', 'process.stdout.write(JSON.stringify(JSON.parse(require("node:fs").readFileSync(0,"utf8"))))'],
            input=payload, stdout=subprocess.PIPE, encoding='utf-8', check=True).stdout
    else:
        payload = json.dumps(data, ensure_ascii=False, indent=2, allow_nan=False) + '\n'
    path.write_text(payload, encoding='utf-8')
