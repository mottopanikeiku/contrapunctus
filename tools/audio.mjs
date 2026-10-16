#!/usr/bin/env node
// Recordings for the Listening Room.
//   node tools/audio.mjs search "Mahler symphony 5"           -> audio files on Commons
//   node tools/audio.mjs check "File:Some recording.ogg"       -> duration, licence, performer, description, stream URL
//   node tools/audio.mjs analyze content/listen/<id>.mjs        -> download the stream, write analysis
//        (docs/assets/listen/<id>.json for the site; cache/analysis/<id>.txt for authors)
//   node tools/audio.mjs analyze-all                            -> every content/listen file lacking analysis
import { mkdir, writeFile, readdir, access } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { UA, audioInfo, commonsApi as api } from './commons.mjs';

const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.round(t % 60)).padStart(2, '0')}`;

const run = promisify(execFile);
const ROOT = path.resolve(import.meta.dirname, '..');
const [cmd, ...args] = process.argv.slice(2);

if (cmd === 'search') {
  const d = await api({ action: 'query', list: 'search', srsearch: `${args.join(' ')} filetype:audio`, srnamespace: '6', srlimit: '25' });
  for (const s of d.query.search) console.log(s.title);
} else if (cmd === 'check') {
  for (const f of args) {
    const i = await audioInfo(f);
    if (!i) { console.log(`MISSING  ${f}`); continue; }
    console.log(`OK  ${i.title}\n    ${mmss(i.duration)} | ${i.license || '?'} | ${i.artist || '?'} | ${i.date || '?'}\n    ${i.description}\n    ${i.credit ? 'credit: ' + i.credit + '\n    ' : ''}stream: ${i.stream ?? 'NO MP3 DERIVATIVE'}`);
  }
} else if (cmd === 'analyze' || cmd === 'analyze-all') {
  let files = args;
  if (cmd === 'analyze-all') {
    const dir = path.join(ROOT, 'content/listen');
    files = [];
    for (const f of (await readdir(dir)).filter((x) => x.endsWith('.mjs'))) {
      try { await access(path.join(ROOT, 'docs/assets/listen', f.replace('.mjs', '.json'))); } catch { files.push(path.join(dir, f)); }
    }
  }
  await mkdir(path.join(ROOT, 'cache/audio'), { recursive: true });
  await mkdir(path.join(ROOT, 'cache/analysis'), { recursive: true });
  await mkdir(path.join(ROOT, 'docs/assets/listen'), { recursive: true });
  for (const f of files) {
    const mod = (await import(pathToFileURL(path.resolve(f)).href + `?t=${Date.now()}`)).default;
    const info = mod.source.file ? await audioInfo(mod.source.file) : { stream: mod.source.url, duration: null };
    if (!info?.stream) { console.log(`ERROR ${f}: no streamable source`); process.exitCode = 1; continue; }
    const mp3 = path.join(ROOT, 'cache/audio', `${mod.id}.mp3`);
    try { await access(mp3); } catch {
      const res = await fetch(info.stream, { headers: { 'User-Agent': UA } });
      if (!res.ok) { console.log(`ERROR ${f}: HTTP ${res.status} for ${info.stream}`); process.exitCode = 1; continue; }
      await writeFile(mp3, Buffer.from(await res.arrayBuffer()));
    }
    const json = path.join(ROOT, 'docs/assets/listen', `${mod.id}.json`);
    const txt = path.join(ROOT, 'cache/analysis', `${mod.id}.txt`);
    await run(path.join(ROOT, '.venv/bin/python'), [path.join(ROOT, 'tools/analyze.py'), mp3, json, txt], { maxBuffer: 1 << 26 });
    console.log(`analysed ${mod.id} -> ${path.relative(ROOT, txt)}`);
  }
} else {
  console.log('usage: node tools/audio.mjs search <q> | check <File:...> | analyze <content/listen/x.mjs> | analyze-all');
}
