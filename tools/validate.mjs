#!/usr/bin/env node
// Validate content files in isolation (safe to run while other files are being written).
//   node tools/validate.mjs content/composers/ravel.mjs [more files...]
// Checks: schema, [[links]] against the roster, ABC notation parses cleanly, every File: exists on Commons.
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { lookup, normalizeTitle } from './commons.mjs';
import roster from '../content/roster.mjs';

const require = createRequire(import.meta.url);
const ABCJS = require('../docs/assets/vendor/abcjs-basic-min.js');
const slugs = new Set(Object.values(roster).flat());
const eras = new Set(Object.keys(roster));
const pages = new Set(['origins', 'workshop', 'timeline', 'gallery', 'credits', 'index', 'composers']);
const SLOP = /\b(tapestry|delve|testament to|timeless|masterful(ly)?|myriad|resonat(e|es|ing) with|journey|vibrant|breathtaking|nuanced|showcas(e|es|ing)|realm of|in the world of|seamless(ly)?|elevat(e|es|ing)|captivat(e|es|ing)|unparalleled|profound(ly)?|evocative|lush tapestry|sonic landscape|soundscape)\b/gi;

let bad = 0;
const err = (f, m) => { bad++; console.log(`ERROR ${f}: ${m}`); };
const warn = (f, m) => console.log(`warn  ${f}: ${m}`);

const files = process.argv.slice(2);
if (!files.length) { console.log('usage: node tools/validate.mjs <content file>...'); process.exit(2); }

for (const f of files) {
  let mod;
  try { mod = (await import(pathToFileURL(path.resolve(f)).href + `?t=${Date.now()}`)).default; }
  catch (e) { err(f, `does not import: ${e.message}`); continue; }
  const text = JSON.stringify(mod);
  const isComposer = f.includes('/composers/');

  if (isComposer) {
    for (const k of ['slug', 'name', 'given', 'family', 'born', 'era', 'epithet', 'portrait', 'life', 'sound', 'works', 'arts', 'recordings', 'lineage']) if (mod[k] == null) err(f, `missing field ${k}`);
    if (mod.slug && !slugs.has(mod.slug)) err(f, `slug ${mod.slug} is not in content/roster.mjs`);
    if (mod.era && !eras.has(mod.era)) err(f, `unknown era ${mod.era}`);
    if (mod.slug && path.basename(f, '.mjs') !== mod.slug) err(f, `file name must be ${mod.slug}.mjs`);
    if (!mod.born?.year || !mod.born?.place) err(f, 'born needs {year, date, place}');
    if (mod.died && (!mod.died.year || !mod.died.place)) err(f, 'died needs {year, date, place} or null for living composers');
    if (!mod.portrait?.file) err(f, 'portrait.file missing');
    if ((mod.score ?? []).length === 0) warn(f, 'no score examples');
    if ((mod.arts ?? []).length < 2) warn(f, 'fewer than two sister-arts entries');
    for (const a of mod.arts ?? []) {
      if (a.type === 'poem') { if (!a.author || !a.title || !(a.original || a.translation)) err(f, `poem needs author, title, original/translation: ${a.title}`); }
      else if (!a.file || !a.artist || !a.title) err(f, `painting needs file, artist, title: ${a.title ?? a.file}`);
    }
  }

  for (const m of text.matchAll(/\[\[([^\]|\"\[]+)(?:\|[^\]]+)?\]\]/g)) {
    const [page] = m[1].trim().split('#');
    const ok = slugs.has(page) || pages.has(page) || (page.startsWith('era:') && eras.has(page.slice(4)));
    if (!ok) err(f, `unresolvable link [[${m[1]}]] (use a roster slug, era:<slug>, origins#id, workshop#id)`);
  }

  const slop = [...new Set([...text.matchAll(SLOP)].map((m) => m[0].toLowerCase()))];
  if (slop.length) warn(f, `house style: avoid ${slop.join(', ')}`);

  const scores = [mod.score ?? [], ...(mod.lessons ?? []).map((l) => l.score ?? [])].flat();
  for (const s of scores) {
    if (!s.abc) { err(f, `score "${s.title}" has no abc`); continue; }
    const [tune] = ABCJS.parseOnly(s.abc);
    const w = (tune?.warnings ?? []).map((x) => x.replace(/<[^>]+>/g, ''));
    if (!tune || !tune.lines?.length) err(f, `score "${s.title}" produced no music`);
    for (const x of w) err(f, `score "${s.title}": ${x}`);
  }

  const titles = new Set();
  const walk = (v) => { if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (k === 'file' && typeof x === 'string') titles.add(normalizeTitle(x)); else walk(x); } };
  walk(mod);
  if (titles.size) {
    const info = await lookup([...titles]);
    for (const [t, i] of info) {
      if (!i) err(f, `not on Commons: ${t}`);
      else if (!/public domain|^pd|cc0|cc[- ]by/i.test(i.license)) warn(f, `check licence "${i.license}" for ${t}`);
    }
  }
  console.log(`${bad ? '' : 'ok    '}${f}: ${scores.length} scores, ${titles.size} images checked`);
}
process.exit(bad ? 1 : 0);
