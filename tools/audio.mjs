#!/usr/bin/env node
// Recordings for the Concert Hall.
//   node tools/audio.mjs search "Mahler symphony 5"           -> audio files on Commons
//   node tools/audio.mjs check "File:Some recording.ogg"       -> duration, licence, performer, description, stream URL
//   node tools/audio.mjs archive "<query>" | archive-files <identifier>  -> Internet Archive audio
//   node tools/audio.mjs analyze content/listen/<id>.mjs        -> download the stream, write analysis
//        (docs/assets/listen/<id>.json for the site; cache/analysis/<id>.txt for authors)
//   node tools/audio.mjs analyze-all                            -> every content/listen file lacking analysis
//   node tools/audio.mjs derive content/listen/<id>.mjs         -> extract the audio of an openly licensed Commons
//        file without an MP3 derivative (source.derived, e.g. a concert video) into docs/assets/audio/<id>.mp3
import { createHash } from 'node:crypto';
import { mkdir, writeFile, readdir, access, readFile, copyFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { UA, audioInfo, sourceInfo, politeFetch, commonsApi as api } from './commons.mjs';
import { mkdir as mkdirp, rm, stat } from 'node:fs/promises';

/** Run fn while holding a cross-process lock (a directory); stale locks (> 10 min) are broken. */
async function withLock(dir, fn) {
  for (;;) {
    try { await mkdirp(dir); break; } catch {
      try { if (Date.now() - (await stat(dir)).mtimeMs > 600000) await rm(dir, { recursive: true, force: true }); } catch {}
      await new Promise((r) => setTimeout(r, 2000 + Math.random() * 2000));
    }
  }
  try { const r = await fn(); if (r?.arrayBuffer) { const b = await r.arrayBuffer(); return { ok: r.ok, status: r.status, arrayBuffer: async () => b }; } return r; }
  finally { await rm(dir, { recursive: true, force: true }); }
}

const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.round(t % 60)).padStart(2, '0')}`;

const run = promisify(execFile);
const ROOT = path.resolve(import.meta.dirname, '..');
const [cmd, ...args] = process.argv.slice(2);

if (cmd === 'archive') {
  // node tools/audio.mjs archive "rachmaninoff prelude"  -> Internet Archive audio items with licence and files
  const q = `(${args.join(' ')}) AND mediatype:audio`;
  const u = `https://archive.org/advancedsearch.php?q=${encodeURIComponent(q)}&fl[]=identifier&fl[]=title&fl[]=creator&fl[]=date&fl[]=licenseurl&rows=40&output=json`;
  const d = await fetch(u, { headers: { 'User-Agent': UA } }).then((r) => r.json());
  for (const x of d.response.docs) console.log(`${x.identifier}\n    ${x.title} | ${[].concat(x.creator ?? []).join('; ')} | ${x.date ?? '?'} | ${x.licenseurl ?? 'no licence url'}`);
} else if (cmd === 'archive-files') {
  // node tools/audio.mjs archive-files <identifier>  -> audio files with durations
  const d = await fetch(`https://archive.org/metadata/${encodeURIComponent(args[0])}`, { headers: { 'User-Agent': UA } }).then((r) => r.json());
  console.log(`${d.metadata?.title} | ${[].concat(d.metadata?.creator ?? []).join('; ')} | ${d.metadata?.date ?? '?'} | licence: ${d.metadata?.licenseurl ?? 'none'}`);
  for (const f of d.files ?? []) if (/mp3|flac|ogg/i.test(f.format ?? '')) console.log(`    ${f.name} | ${f.format} | ${f.length ?? '?'}`);
} else if (cmd === 'search') {
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
    const info = await sourceInfo(mod.source);
    if (!info?.stream) { console.log(`ERROR ${f}: no streamable source`); process.exitCode = 1; continue; }
    const mp3 = path.join(ROOT, 'cache/audio', `${mod.id}.mp3`);
    try { await access(mp3); } catch {
      if (info.derived) { await copyFile(path.join(ROOT, 'docs', info.stream), mp3); } else {
        // Many authors share one IP: downloads are serialised through a lock directory and retried politely.
        const res = await withLock(path.join(ROOT, 'cache/.download-lock'), () => politeFetch(info.stream, 8));
        if (!res.ok) { console.log(`ERROR ${f}: HTTP ${res.status} for ${info.stream}`); process.exitCode = 1; continue; }
        await writeFile(mp3, Buffer.from(await res.arrayBuffer()));
      }
    }
    const json = path.join(ROOT, 'docs/assets/listen', `${mod.id}.json`);
    const txt = path.join(ROOT, 'cache/analysis', `${mod.id}.txt`);
    await run(path.join(ROOT, '.venv/bin/python'), [path.join(ROOT, 'tools/analyze.py'), mp3, json, txt], { maxBuffer: 1 << 26 });
    console.log(`analysed ${mod.id} -> ${path.relative(ROOT, txt)}`);
  }
} else if (cmd === 'derive') {
  // Only for openly licensed Commons files (validate.mjs enforces the licence): the site hosts the derivative itself.
  for (const f of args) {
    const mod = (await import(pathToFileURL(path.resolve(f)).href + `?t=${Date.now()}`)).default;
    const want = `assets/audio/${mod.id}.mp3`;
    if (mod.source?.derived !== want || !mod.source?.file) { console.log(`ERROR ${f}: source must be { file: 'File:…', derived: '${want}' }`); process.exitCode = 1; continue; }
    const info = await audioInfo(mod.source.file);
    if (!info?.url) { console.log(`ERROR ${f}: Commons file not found`); process.exitCode = 1; continue; }
    await mkdir(path.join(ROOT, 'cache/audio'), { recursive: true });
    await mkdir(path.join(ROOT, 'docs/assets/audio'), { recursive: true });
    const original = path.join(ROOT, 'cache/audio', `${mod.id}.original${path.extname(new URL(info.url).pathname)}`);
    try { await access(original); } catch {
      const res = await withLock(path.join(ROOT, 'cache/.download-lock'), () => politeFetch(info.url, 8));
      if (!res.ok) { console.log(`ERROR ${f}: HTTP ${res.status} for ${info.url}`); process.exitCode = 1; continue; }
      await writeFile(original, Buffer.from(await res.arrayBuffer()));
    }
    const out = path.join(ROOT, 'docs', want);
    // The licence travels with the file: performer, licence and source page as ID3 tags (CC BY/BY-SA attribution).
    const tags = { title: [mod.work, mod.movement].filter(Boolean).join(', '), artist: mod.performers ?? info.artist ?? '', copyright: `${info.license}${info.artist ? `; Commons uploader ${info.artist}` : ''}`, comment: `Audio extracted from ${info.page} by Contrapunctus` };
    const meta = Object.entries(tags).filter(([, v]) => v).flatMap(([k, v]) => ['-metadata', `${k}=${v}`]);
    await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', original, '-vn', '-map_metadata', '-1', ...meta, '-id3v2_version', '3', '-ac', '2', '-ar', '44100', '-c:a', 'libmp3lame', '-b:a', '160k', out]);
    const sha = (b) => createHash('sha256').update(b).digest('hex');
    console.log(`derived ${want}\n    original ${info.url}\n    original sha256 ${sha(await readFile(original))}\n    mp3 sha256 ${sha(await readFile(out))}\n    ffmpeg -vn -ac 2 -ar 44100 -c:a libmp3lame -b:a 160k, ID3v2.3 tags: ${Object.keys(tags).join(', ')}`);
  }
} else {
  console.log('usage: node tools/audio.mjs search <q> | check <File:...> | analyze <content/listen/x.mjs> | analyze-all | derive <content/listen/x.mjs>');
}
