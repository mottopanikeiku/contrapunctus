#!/usr/bin/env python3
"""Download the four public-domain Mutopia encodings without modifying them."""
import hashlib
import io
import json
from pathlib import Path
import urllib.request
import zipfile

HERE = Path(__file__).resolve().parent
SOURCES = {
    'satie-gymnopedie-1': {
        'mutopia': 37, 'base': 'SatieE/gymnopedie_1/gymnopedie_1', 'zip': False,
        'title': 'Gymnopédie No. 1', 'edition': 'Dover Edition (reproduction of the original; translated text omitted)',
        'encoder': 'Evin Robertson', 'revision': 'Mutopia-2014/12/14-37',
    },
    'beethoven-5-first': {
        'mutopia': 941, 'base': 'BeethovenLv/O67/Symphony5_1/Symphony5_1', 'zip': True,
        'title': 'Symphony No. 5, Op. 67 — first movement', 'edition': 'Breitkopf and Härtel, 1862–1865',
        'encoder': 'Stelios Samelis; LilyPond 2.16.2 adaptation by Johannes Heinecke',
        'revision': 'Mutopia-2017/11/05-941',
    },
    'bach-wtc1-fugue-b-minor': {
        'mutopia': 1563, 'base': 'BachJS/BWV869/bwv869b/bwv869b', 'zip': True,
        'title': 'Das Wohltemperierte Clavier I, Fuga XXIV, BWV 869',
        'edition': 'Breitkopf & Härtel, 1866', 'encoder': 'Itay Perl',
        'revision': 'Mutopia-2015/09/01-1563',
    },
    'schubert-impromptu-gflat': {
        'mutopia': 1193, 'base': 'SchubertF/D899/SchubertF-D899-3-Impromptu/SchubertF-D899-3-Impromptu', 'zip': False,
        'title': 'Impromptu in G♭ major, D. 899 No. 3', 'edition': 'Breitkopf & Härtel, 1888',
        'encoder': 'Ph. Raynaud', 'revision': 'Mutopia-2015/11/26-1193',
    },
}


def fetch():
    for ident, source in SOURCES.items():
        directory = HERE / 'sources' / ident
        directory.mkdir(parents=True, exist_ok=True)
        records = []
        for suffix in (('-lys.zip' if source['zip'] else '.ly'), '.mid'):
            url = 'https://www.mutopiaproject.org/ftp/' + source['base'] + suffix
            dest = directory / url.rsplit('/', 1)[-1]
            if not dest.exists():
                request = urllib.request.Request(url, headers={'User-Agent': 'Contrapunctus score research (public-domain encodings)'})
                with urllib.request.urlopen(request, timeout=90) as response:
                    dest.write_bytes(response.read())
            data = dest.read_bytes()
            records.append({'url': url, 'file': dest.name, 'sha256': hashlib.sha256(data).hexdigest()})
            if suffix.endswith('.zip'):
                with zipfile.ZipFile(io.BytesIO(data)) as archive:
                    for member in archive.infolist():
                        path = (directory / member.filename).resolve()
                        if not path.is_relative_to(directory.resolve()):
                            raise ValueError('Archive member escapes source directory')
                        if not member.is_dir():
                            path.parent.mkdir(parents=True, exist_ok=True)
                            path.write_bytes(archive.read(member))
        manifest = {**source, 'url': f'https://www.mutopiaproject.org/cgibin/piece-info.cgi?id={source["mutopia"]}',
                    'license': 'Public Domain', 'licenseUrl': 'https://www.mutopiaproject.org/legal.html#publicdomain',
                    'accessed': '2026-10-16', 'downloads': records}
        (directory / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
        print(ident, 'downloaded', ', '.join(r['file'] for r in records), flush=True)


if __name__ == '__main__':
    fetch()
