#!/usr/bin/env node
// Usage:
//   node tools/art.mjs search "Bocklin Isle of the Dead"     -> candidate File: titles
//   node tools/art.mjs check "File:A.jpg" "File:B.jpg"       -> existence, license, size
//   node tools/art.mjs fetch                                 -> download every File: referenced in content/
import { mkdir, readFile, writeFile, readdir, stat, unlink } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { lookup, search, normalizeTitle, UA } from './commons.mjs';
import { loadContent, collectFiles, artId } from '../src/content.mjs';

const run = promisify(execFile);
const ROOT = path.resolve(import.meta.dirname, '..');
const IMG = path.join(ROOT, 'docs/assets/img/art');
const CACHE = path.join(ROOT, 'content/art.json');

const [cmd, ...args] = process.argv.slice(2);

if (cmd === 'search') {
  for (const t of await search(args.join(' '))) console.log(t);
} else if (cmd === 'check') {
  const info = await lookup(args);
  for (const [t, i] of info) {
    if (!i) console.log(`MISSING  ${t}`);
    else console.log(`OK       ${t}\n         ${i.width}x${i.height} | ${i.license || '?'} | ${i.artist || '?'} | ${i.date || '?'}\n         ${i.description.slice(0, 160)}`);
  }
} else if (cmd === 'fetch') {
  await mkdir(IMG, { recursive: true });
  const content = await loadContent();
  const files = [...collectFiles(content)];
  let cache = {};
  try { cache = JSON.parse(await readFile(CACHE, 'utf8')); } catch {}
  const todo = files.filter((f) => !cache[normalizeTitle(f)]);
  console.log(`${files.length} referenced, ${todo.length} to fetch`);
  const info = await lookup(todo);
  const missing = [];
  for (const [title, i] of info) {
    if (!i) { missing.push(title); continue; }
    const id = artId(title);
    const out = path.join(IMG, `${id}.webp`);
    const tmp = path.join(IMG, `${id}.src`);
    const res = await fetch(i.thumb, { headers: { 'User-Agent': UA } });
    if (!res.ok) { console.log(`HTTP ${res.status} ${title}`); missing.push(title); continue; }
    await writeFile(tmp, Buffer.from(await res.arrayBuffer()));
    await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp, '-frames:v', '1',
      '-vf', "scale='min(1280,iw)':-2", '-c:v', 'libwebp', '-quality', '72', '-compression_level', '6', out]);
    if ((await stat(out)).size > 450 * 1024) {
      // dense images (gold leaf, mosaics, crackle) get a second, lighter encode
      await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp, '-frames:v', '1',
        '-vf', "scale='min(1280,iw)':-2", '-c:v', 'libwebp', '-quality', '55', '-compression_level', '6', out]);
    }
    await unlink(tmp);
    const { stdout } = await run('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
      '-show_entries', 'stream=width,height', '-of', 'csv=p=0', out]);
    const [w, h] = stdout.trim().split(',').map(Number);
    cache[title] = { id, src: `assets/img/art/${id}.webp`, w, h, page: i.page, artist: i.artist,
      date: i.date, license: i.license, credit: i.credit };
    console.log(`fetched  ${title} -> ${id}.webp ${w}x${h} (${(await stat(out)).size >> 10} KB)`);
    await new Promise((r) => setTimeout(r, 250));
  }
  const liveTitles = new Set(files.map(normalizeTitle));
  const sorted = Object.fromEntries(Object.entries(cache)
    .filter(([t]) => liveTitles.has(t)).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(CACHE, JSON.stringify(sorted, null, 1) + '\n');
  // Drop images no longer referenced.
  const live = new Set([...liveTitles].map((t) => `${artId(t)}.webp`));
  for (const f of await readdir(IMG)) if (!live.has(f)) await unlink(path.join(IMG, f));
  if (missing.length) {
    console.log(`\nMISSING on Commons:\n  ${missing.join('\n  ')}`);
    process.exitCode = 1;
  }
} else {
  console.log('usage: node tools/art.mjs search <query> | check <File:...>... | fetch');
}
