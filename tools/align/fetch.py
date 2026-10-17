#!/usr/bin/env python3
"""Fetch configured symbolic sources, pin digests, and preserve original bytes."""
import argparse
from datetime import date
import hashlib
import io
import urllib.request
import zipfile

from config import HERE, inside, load, piece_ids, write_json


def fetch(ident):
    cfg = load(ident)
    source = cfg['source']
    directory = HERE / 'sources' / ident
    directory.mkdir(parents=True, exist_ok=True)
    pinned = False
    for record in source['downloads']:
        dest = inside(directory, record['file'])
        if not dest.exists():
            request = urllib.request.Request(record['url'], headers={'User-Agent': 'Contrapunctus score research'})
            with urllib.request.urlopen(request, timeout=90) as response:
                data = response.read()
            digest = hashlib.sha256(data).hexdigest()
            if record.get('sha256') and record['sha256'] != digest:
                raise ValueError(f'{ident}: SHA-256 mismatch for {record["file"]}')
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(data)
        else:
            data = dest.read_bytes()
            digest = hashlib.sha256(data).hexdigest()
        if record.get('sha256') and record['sha256'] != digest:
            raise ValueError(f'{ident}: SHA-256 mismatch for {record["file"]}')
        if not record.get('sha256'):
            record['sha256'] = digest
            pinned = True
        if dest.suffix.lower() == '.zip':
            with zipfile.ZipFile(io.BytesIO(data)) as archive:
                for member in archive.infolist():
                    path = inside(directory, member.filename)
                    if not member.is_dir():
                        path.parent.mkdir(parents=True, exist_ok=True)
                        path.write_bytes(archive.read(member))
    if pinned:
        write_json(HERE / 'pieces' / (ident + '.json'), cfg)
    manifest = {**source, 'accessed': source.get('accessed', date.today().isoformat())}
    write_json(directory / 'manifest.json', manifest)
    print('SOURCES', ident, 'SHA-256 checked;', len(source['downloads']), 'downloads', flush=True)
    return cfg


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('ids', nargs='*')
    args = parser.parse_args()
    for ident in args.ids or piece_ids():
        fetch(ident)
