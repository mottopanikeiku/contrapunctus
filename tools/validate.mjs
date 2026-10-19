#!/usr/bin/env node
// Validate content files in isolation (safe to run while other files are being written).
//   node tools/validate.mjs content/composers/ravel.mjs [more files...]
// Checks: schema, [[links]] against the roster, ABC notation parses cleanly, every File: exists on Commons.
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { lookup, normalizeTitle } from './commons.mjs';
import roster from '../content/roster.mjs';
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const require = createRequire(import.meta.url);
const ABCJS = require('../docs/assets/vendor/abcjs-basic-min.js');
const slugs = new Set(Object.values(roster).flat());
// Composers before Bach (concert prologue) are valid recording composers too.
try { for (const c of (await import(new URL('../content/precursors.mjs', import.meta.url).href)).default) slugs.add(c.slug); } catch {}
const eras = new Set(Object.keys(roster));
const pages = new Set(['origins', 'workshop', 'timeline', 'gallery', 'credits', 'index', 'composers', 'glossary', 'sources', 'routes', 'hall', 'atlas', 'influence']);
const topics = new Set(['origins', 'workshop', 'recording-history', 'performance-practice', 'influence']);
const ROOT = path.resolve(import.meta.dirname, '..');
const SLOP = /\b(tapestry|delve|testament to|timeless|masterful(ly)?|myriad|resonat(e|es|ing) with|journey|vibrant|breathtaking|nuanced|showcas(e|es|ing)|realm of|in the world of|seamless(ly)?|elevat(e|es|ing)|captivat(e|es|ing)|unparalleled|profound(ly)?|evocative|lush tapestry|sonic landscape|soundscape)\b/gi;

let bad = 0;
const err = (f, m) => { bad++; console.log(`ERROR ${f}: ${m}`); };
const warn = (f, m) => console.log(`warn  ${f}: ${m}`);
const nonempty = (v) => typeof v === 'string' && !!v.trim();
const webUrl = (v) => { try { return ['http:', 'https:'].includes(new URL(v).protocol); } catch { return false; } };

// ---------------------------------------------------------------- house style (AUTHORING.md)
// Reader-facing prose only: notation, file names, URLs, identifiers, sources and poem originals are skipped.
const PROSE_SKIP = new Set(['abc', 'file', 'url', 'href', 'id', 'slug', 'focus', 'accent', 'glyph', 'kind', 'basis', 'precision', 'status', 'era', 'numeral', 'devices', 'stream', 'page', 'license', 'licenseUrl', 'locator', 'sources', 'source', 'rights', 'reading', 'orchestra', 'lang', 'original', 'translation', 'frame', 'checked', 'archive', 'composer', 'listen', 'alignment', 'aka']);
const MACHINE = [
  /[−-]?\d+(?:\.\d+)?\s?dB\b/, /\bdB\b/, /\bdecibels?\b/i, /\brelative level\b/i, /\b(?:the |recorded )level (?:rises|falls|drops|jumps|stays|climbs|sinks|dips)\b/i,
  /\bloudest windows?\b/i, /\bfive-second\b/i, /\bthe report\b/i, /\banalysis (?:shows|places|detects|finds|suggests|report)\b/i, /\bkey estimate/i,
  /(?<![/\w.])cache\//, /\bnovelty (?:peak|curve)\b/i, /\b(?:at|confidence(?: of)?) 0\.\d\d\b/, /\bWikipedia (?:hears|says|calls|describes|notes)\b/i,
  /\baccording to the [^.]{0,60}?\bnotes?\b/i,
];
const HEDGE = [/\bneed not\b/i, /\bnot evidence (?:of|for)\b/i, /\bis not evidence\b/i, /\bnot a documented\b/i, /\beditorial comparison\b/i, /\bdoes not (?:claim|establish|identify|imply|assert)\b/i, /\bis claimed\b/i, /\bnot a measurement\b/i];
const INSTRUCT = /(?:^\s*|[.!?:;]\s+|—\s*)(?:Listen|Follow|Compare|Notice|Keep|Track|Watch|Try|Stay|Hear|Imagine)\b|[,;:]\s+(?:listen|follow|notice|watch|try) (?:for|to|out|how|the|one)\b/g;
// An imperative inside a quotation belongs to the person quoted (Couperin's “Keep the wrists level”).
const quoted = (s, i) => (s.slice(0, i).match(/“/g)?.length ?? 0) > (s.slice(0, i).match(/”/g)?.length ?? 0);
const instruction = (s) => [...s.matchAll(INSTRUCT)].find((m) => !quoted(s, m.index + m[0].length));
const NEGATION = /\brather than\b|[,;—]\s*not (?:a|an|the|as|in|by|to|only|merely|simply|just|one|every)\b|\bnot (?:only|merely|simply|just) [^.]{1,80}? but\b/gi;
// AUTHORING.md "Devices that make prose read as machine-made": instruments and themes given human will, and
// programme-note pastiche words. Both are allowed inside a quotation (the person quoted chose them).
const PERSONIFY = /\b(?:piano|orchestra|violins?|violas?|cellos?|basses|double bass|horns?|oboes?|flutes?|clarinets?|bassoons?|trumpets?|trombones?|tuba|timpani|drums?|strings|woodwinds?|winds|brass|harp|organ|choir|chorus|tune|melody|theme|motif|chords?|harmony|key|music|bass line|left hand|right hand|accompaniment)\s+(?:refuses?|insists?|remembers?|discovers?|decides?|hesitates?|persists?|sighs?|breathes?|dreams?|longs?|wants?|tries|knows?|forgets?|gathers? (?:its|their) breath|takes? (?:its|their) time|holds? (?:its|their) ground|has (?:its|their) say|gets? the last word|finds? (?:a|its|their) (?:voice|way|tune|footing|feet))\b/gi;
const PASTICHE = /\b(?:luminous|radiant|shimmer(?:s|ing)?|glow(?:s|ing)|haunting(?:ly)?|poignant(?:ly)?|wistful(?:ly)?|yearning|aching(?:ly)?|brooding|lush|playful(?:ly)?|mischievous(?:ly)?|delicious(?:ly)?|magical|dreamlike|otherworldly|ethereal|blooms?|blossoms?|conjures?|evokes?)\b/gi;
const unquotedMatch = (s, re) => [...s.matchAll(re)].find((m) => !quoted(s, m.index + m[0].length));
const stripTags = (s) => s.replace(/<[^>]+>/g, ' ').replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, '$1').replace(/\[\[([^\]]+)\]\]/g, '$1');
function proseOf(v, key = '', out = { prose: [], evidence: [], plain: [] }) {
  if (typeof v === 'string') {
    if (/[a-z]{3}\s+[a-z]/i.test(v)) {
      (key === 'evidence' ? out.evidence : out.prose).push(stripTags(v));
      // Italicised titles (a film called “Delicious”) are names, not the writer’s adjectives.
      if (key !== 'evidence') out.plain.push(stripTags(v.replace(/<i>[\s\S]*?<\/i>/g, ' ')));
    }
  }
  else if (Array.isArray(v)) v.forEach((x) => proseOf(x, key, out));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!PROSE_SKIP.has(k)) proseOf(x, k, out);
  return out;
}
function houseStyle(f, mod, { instruct = false } = {}) {
  const { prose, evidence, plain } = proseOf(mod);
  const snippet = (s, re) => { const m = s.match(re); const i = Math.max(0, (m?.index ?? 0) - 40); return `“…${s.slice(i, i + 110).trim()}…”`; };
  for (const s of [...prose, ...evidence]) {
    const machine = MACHINE.find((re) => re.test(s)), hedge = HEDGE.find((re) => re.test(s));
    if (machine) err(f, `house style: machine language ${snippet(s, machine)}`);
    if (hedge) err(f, `house style: defensive hedging ${snippet(s, hedge)}`);
  }
  if (instruct) {
    for (const s of prose) { const m = instruction(s); if (m) err(f, `house style: instruction to the listener “…${s.slice(Math.max(0, m.index - 40), m.index + 70).trim()}…”`); }
    for (const s of plain) {
      const p = unquotedMatch(s, PERSONIFY); if (p) err(f, `house style: personified music “…${s.slice(Math.max(0, p.index - 30), p.index + 60).trim()}…”`);
      const v = unquotedMatch(s, PASTICHE); if (v) err(f, `house style: pastiche word “${v[0]}” in “…${s.slice(Math.max(0, v.index - 40), v.index + 50).trim()}…”`);
    }
  }
  const all = prose.join('\n');
  const words = all.split(/\s+/).filter(Boolean).length;
  const negations = [...all.matchAll(NEGATION)].length;
  const allowed = Math.max(1, Math.floor(words / 250));
  if (negations > allowed) err(f, `house style: ${negations} contrasts by negation (“rather than”, “, not a …”) in ${words} words; at most ${allowed}`);
  const listener = [...all.matchAll(/\bthe listener\b/gi)].length;
  if (listener) warn(f, `house style: “the listener” ×${listener}`);
}

function validateBibliography(f, b) {
  if (!b || typeof b !== 'object' || Array.isArray(b)) { err(f, 'bibliography must be an object'); return; }
  if (path.basename(f, '.json') !== b.id) err(f, 'bibliography file name must equal id');
  const known = b.kind === 'composer' ? slugs : b.kind === 'era' ? eras : b.kind === 'topic' ? topics : null;
  if (!known) err(f, 'bibliography kind must be composer, era or topic');
  else if (!known.has(b.id)) err(f, `unknown ${b.kind} bibliography id ${b.id}`);
  if (!Array.isArray(b.items) || !b.items.length) { err(f, 'bibliography needs a non-empty items array'); return; }
  for (const [i, item] of b.items.entries()) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) { err(f, `items[${i}] must be an object`); continue; }
    for (const key of ['cite', 'kind', 'note']) if (!nonempty(item[key])) err(f, `items[${i}].${key} must be a non-empty string`);
    if (item.url != null && !webUrl(item.url)) err(f, `items[${i}].url must be an http(s) URL`);
  }
}

async function validateGlossary(f, entries) {
  if (!Array.isArray(entries)) { err(f, 'glossary must export an array'); return; }
  const ids = new Set();
  const listenIds = new Set((await readdir(path.join(ROOT, 'content/listen'))).filter((n) => n.endsWith('.mjs')).map((n) => n.slice(0, -4)));
  const scores = new Map();
  for (const g of entries) {
    if (!g || typeof g !== 'object' || Array.isArray(g)) { err(f, 'glossary entry must be an object'); continue; }
    if (!nonempty(g.slug) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(g.slug)) err(f, `invalid glossary slug ${g.slug}`);
    if (ids.has(g.slug)) err(f, `duplicate glossary slug ${g.slug}`);
    ids.add(g.slug);
    for (const key of ['term', 'kind', 'short', 'html']) if (!nonempty(g[key])) err(f, `${g.slug}.${key} must be a non-empty string`);
    for (const key of ['aka', 'hear', 'see']) if (!Array.isArray(g[key])) err(f, `${g.slug}.${key} must be an array`);
    for (const alias of Array.isArray(g.aka) ? g.aka : []) if (!nonempty(alias)) err(f, `${g.slug}: aliases must be non-empty strings`);
    for (const h of Array.isArray(g.hear) ? g.hear : []) {
      if (!h || typeof h !== 'object' || Array.isArray(h)) { err(f, `${g.slug}: hear entries must be objects`); continue; }
      if (!listenIds.has(h.listen)) { err(f, `${g.slug}: unknown hear listen id ${h.listen}`); continue; }
      if (!nonempty(h.note)) err(f, `${g.slug}: hear note must be a non-empty string`);
      if ((h.t != null) === (h.bar != null)) err(f, `${g.slug}: hear needs exactly one of t or bar`);
      if (h.t != null && (!Number.isFinite(h.t) || h.t < 0)) err(f, `${g.slug}: hear time must be a non-negative number`);
      if (h.bar != null) {
        if (!nonempty(h.bar.n) || !Number.isInteger(h.bar.occ) || h.bar.occ < 1) { err(f, `${g.slug}: bar must be { n: string, occ: positive integer }`); continue; }
        if (!scores.has(h.listen)) {
          const file = path.join(ROOT, 'docs/assets/data', h.listen, 'score.json');
          try { scores.set(h.listen, existsSync(file) ? JSON.parse(await readFile(file, 'utf8')) : null); }
          catch (e) { err(f, `${g.slug}: cannot read score.json: ${e.message}`); scores.set(h.listen, null); }
        }
        const score = scores.get(h.listen);
        if (score && !score.bars?.some((b) => String(b.n) === h.bar.n && b.occ === h.bar.occ && Number.isFinite(b.t))) err(f, `${g.slug}: bar ${h.bar.n}/${h.bar.occ} not in ${h.listen}/score.json`);
      }
    }
  }
  for (const g of entries) for (const slug of Array.isArray(g?.see) ? g.see : []) if (!ids.has(slug)) err(f, `${g.slug}: unknown see slug ${slug}`);
}

const files = process.argv.slice(2);
if (!files.length) { console.log('usage: node tools/validate.mjs <content file>...'); process.exit(2); }

for (const f of files) {
  let mod;
  if (f.endsWith('.json')) {
    try { mod = JSON.parse(await (await import('node:fs/promises')).readFile(f, 'utf8')); }
    catch (e) { err(f, `invalid JSON: ${e.message}`); continue; }
    if (f.includes('/bibliography/')) {
      const before = bad;
      validateBibliography(f, mod);
      if (bad === before) console.log(`ok    ${f}: ${mod.items.length} bibliography items`);
      continue;
    }
    const STATUS = new Set(['documented', 'inferred', 'disputed', 'unknown', 'not applicable']);
    const field = (v, name) => {
      if (!v || typeof v !== 'object' || !('value' in v) || !STATUS.has(v.status)) { err(f, `${name} must be a Field {value, status, sourceIds, note}`); return; }
      if (!Array.isArray(v.sourceIds)) err(f, `${name}.sourceIds must be an array`);
      if (v.status === 'documented' && !v.sourceIds.length) err(f, `${name} is documented but cites no source`);
      if (v.status === 'disputed' && !(v.alternatives?.length >= 2)) err(f, `${name} is disputed but lists fewer than two alternatives`);
      for (const id of [...v.sourceIds, ...(v.alternatives ?? []).flatMap((a) => a.sourceIds ?? [])]) if (!(mod.sources ?? []).some((s) => s.id === id)) err(f, `${name} cites unknown source ${id}`);
    };
    if (f.includes('/dossiers/')) {
      if (path.basename(f, '.json') !== mod.id) err(f, 'file name must equal id');
      field(mod.work?.version, 'work.version'); field(mod.performers, 'performers');
      field(mod.session?.date, 'session.date'); field(mod.session?.place, 'session.place');
      for (const k of ['label', 'catalogue', 'matrixTakeSides']) field(mod.carrier?.[k], `carrier.${k}`);
      for (const k of ['credits', 'date', 'processing']) field(mod.transfer?.[k], `transfer.${k}`);
      field(mod.rights?.composition, 'rights.composition'); field(mod.rights?.recording, 'rights.recording');
      if (!mod.rights?.creditLine) err(f, 'rights.creditLine missing');
      if (!(mod.sources ?? []).length) err(f, 'no sources');
      if (/[\w.-]+@[\w-]+\.[a-z]{2,}/i.test(JSON.stringify(mod))) err(f, 'contains an email address; name the institution, not a person’s account');
      for (const s of mod.sources ?? []) if (!s.id || !s.url || !s.accessed) err(f, `source ${s.id ?? '?'} needs id, url, accessed`);
    }
    if (f.includes('/relations/')) {
      const KINDS = new Set(['literal repeat', 'varied return', 'tonal return', 'transposed return']);
      for (const r of mod.relations ?? []) {
        if (!KINDS.has(r.kind)) err(f, `relation kind ${r.kind}`);
        if (!(Array.isArray(r.a) && Array.isArray(r.b) && r.a[0] < r.a[1] && r.b[0] < r.b[1] && r.a[0] < r.b[0])) err(f, `relation "${r.label}" spans invalid`);
        if (!r.label || !r.basis || !['provisional', 'reviewed'].includes(r.status)) err(f, `relation "${r.label}" needs label, basis, status`);
      }
    }
    if (/\/(journeys|compare|returnlab|influence)\//.test(f)) houseStyle(f, mod, { instruct: /\/(journeys|compare)\//.test(f) });
    console.log(`${bad ? '' : 'ok    '}${f}`);
    continue;
  }
  try { mod = (await import(pathToFileURL(path.resolve(f)).href + `?t=${Date.now()}`)).default; }
  catch (e) { err(f, `does not import: ${e.message}`); continue; }
  if (path.basename(f) === 'glossary.mjs') {
    const before = bad;
    await validateGlossary(f, mod);
    houseStyle(f, mod);
    if (bad === before) console.log(`ok    ${f}: ${mod.length} glossary entries`);
    continue;
  }
  const text = JSON.stringify(mod);
  houseStyle(f, mod, { instruct: /\/(listen|composers|eras|pages)\/|precursors\.mjs$/.test(f) });
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

  if (f.includes('/listen/')) {
    const { sourceInfo } = await import('./commons.mjs');
    for (const k of ['id', 'work', 'year', 'forces', 'performers', 'source', 'intro', 'sections', 'cues']) if (mod[k] == null) err(f, `missing field ${k}`);
    if (mod.id && path.basename(f, '.mjs') !== mod.id) err(f, `file name must be ${mod.id}.mjs`);
    if (mod.composer && !slugs.has(mod.composer)) err(f, `unknown composer ${mod.composer}`);
    if (mod.composer == null && !(mod.concert === false && mod.guest?.name)) err(f, 'composer: null is allowed only for concert: false recordings with guest { name, born, died }');
    for (const [i, section] of (mod.sections ?? []).entries()) {
      for (const key of ['m', 'mNote']) if (section[key] !== undefined && typeof section[key] !== 'string') err(f, `sections[${i}].${key} must be a string when present`);
      if (typeof section.mNote === 'string' && section.mNote.trim().split(/\s+/).length > 12) err(f, `sections[${i}].mNote must be no more than 12 words`);
    }
    const info = await sourceInfo(mod.source);
    if (!info) err(f, `recording not found: ${JSON.stringify(mod.source)}`);
    else {
      if (!info.stream) err(f, 'recording has no MP3 stream');
      // Licence: the host's licence field, or (Internet Archive only) a documented US public-domain basis:
      // sound recordings published more than 100 years before the current year's 1 January (in 2026: 1925 and earlier).
      const R = mod.source.rights, usPd = R?.evidence && ((R.basis === 'us-published-before-cutoff' && Number(R.published) <= new Date().getFullYear() - 101) || (R.basis === 'eu-published-before-1963' && Number(R.published) < 1963));
      if (!/public domain|^pd|cc0|cc[- ]by|\boal\b|open audio licen/i.test(info.license) && !usPd) err(f, `licence not allowed: ${info.license || 'none'} (archive items without a PD/CC licence need source.rights { basis: 'us-published-before-cutoff', published, evidence })`);
      if (mod.set && (!mod.set.id || !mod.set.title || !(mod.set.part >= 1) || !(mod.set.of >= mod.set.part))) err(f, 'set must be { id, title, part, of }');
      if (info.duration < (mod.set || mod.concert === false || mod.short ? 20 : 90)) err(f, `recording too short (${info.duration}s)`);  // short complete pieces: set movements, comparison-only recordings, or `short: true` (a complete miniature such as an étude)
      const dur = info.duration;
      const check = (list, name) => list.forEach((c, i) => {
        if (typeof c.t !== 'number' || c.t < 0 || c.t > dur) err(f, `${name}[${i}] time ${c.t} outside 0–${Math.round(dur)}`);
        if (i && c.t <= list[i - 1].t) err(f, `${name}[${i}] not after previous`);
      });
      check(mod.sections ?? [], 'sections');
      const cues = mod.cues ?? [];
      // cues anchored to a score bar get their time from docs/assets/data/<id>/score.json at build time
      const timed = cues.filter((c) => !c.bar);
      check(timed, 'cues');
      if (cues[0] && !cues[0].bar && cues[0].t !== 0) err(f, 'first cue must be at t: 0');
      const BASES = new Set(['score-aligned', 'score-proportion', 'audio-feature', 'documented', 'general']);
      for (const c of cues) {
        if (!BASES.has(c.basis)) err(f, `cue "${c.title}" needs basis (one of ${[...BASES].join(', ')})`);
        if (['music', 'form', 'listen'].includes(c.kind)) {
          if (!['moment', 'passage'].includes(c.precision)) err(f, `cue "${c.title}" needs precision 'moment' or 'passage'`);
          if (c.precision === 'moment' && !['score-aligned', 'audio-feature'].includes(c.basis)) err(f, `cue "${c.title}": precision 'moment' requires basis score-aligned or audio-feature`);
          if (c.basis === 'score-aligned' && !c.bar) err(f, `cue "${c.title}": basis score-aligned requires bar: { n, occ }`);
          if (!c.evidence) err(f, `cue "${c.title}" needs evidence (shown to readers under "Evidence")`);
        }
        if (c.bar && (typeof c.bar.n !== 'string' || !c.bar.occ)) err(f, `cue "${c.title}": bar must be { n: '12', occ: 1 }`);
      }
      const kinds = new Set(['music', 'form', 'life', 'world']);
      for (const c of cues) {
        if (c.kind === 'listen') err(f, `cue "${c.title}": kind "listen" is retired; say what happens (music/form)`);
        else if (!kinds.has(c.kind)) err(f, `bad cue kind ${c.kind}`);
        if (!c.title || !c.text) err(f, `cue at ${c.t} needs title and text`);
        const words = (c.text ?? '').split(/\s+/).length;
        if (words > 58) err(f, `cue at ${c.t} has ${words} words (max 55)`);
      }
      if (mod.orchestra) {
        const O = mod.orchestra, IDS = new Set(['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'e-flat-clarinet', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'cornets', 'trombones', 'euphoniums', 'tuba', 'timpani', 'percussion', 'harp', 'celesta', 'piano', 'organ', 'harpsichord', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'solo-violin', 'solo-voice', 'chorus']);
        const ens = new Set(O.ensemble ?? []);
        for (const id of ens) if (!IDS.has(id)) err(f, `orchestra: unknown section "${id}"`);
        if (O.solo && !ens.has(O.solo)) err(f, `orchestra: solo "${O.solo}" not in ensemble`);
        if (!O.source?.url) err(f, 'orchestra: needs source { title, url }');
        let prev = -1;
        for (const e of O.timeline ?? []) {
          if (!(e.t >= 0 && e.t <= dur) || e.t < prev) err(f, `orchestra: entry at ${e.t} out of order or outside recording`);
          prev = e.t;
          for (const id of [...(e.playing ?? []), ...(e.lead ?? [])]) if (!ens.has(id)) err(f, `orchestra at ${e.t}: "${id}" not in ensemble`);
          for (const id of e.lead ?? []) if (!(e.playing ?? []).includes(id)) err(f, `orchestra at ${e.t}: lead "${id}" not playing`);
        }
        if (!O.timeline?.length) err(f, 'orchestra: empty timeline');
      }
      const DEVICES = new Set(['perfect cadence', 'half cadence', 'deceptive cadence', 'plagal cadence', 'elision', 'pivot chord', 'common-tone modulation', 'direct modulation', 'enharmonic reinterpretation', 'chromatic slide', 'sequence', 'dominant pedal', 'tonic pedal', 'retransition', 'standing on the dominant', 'liquidation', 'motivic link', 'fermata', 'general pause', 'medial caesura', 'crescendo build', 'decrescendo', 'texture change', 'orchestration change', 'register change', 'tempo change', 'metre change', 'link passage', 'cadenza', 'attacca', 'fade']);
      const tids = new Set();
      for (const tr of mod.transitions ?? []) {
        const name = tr.title ?? tr.id;
        if (!tr.id || tids.has(tr.id)) err(f, `transition ${name}: missing or duplicate id`); tids.add(tr.id);
        if (!tr.title || tr.title.split(/\s+/).length > 8) err(f, `transition ${name}: title missing or > 8 words`);
        if (!tr.from || !tr.to) err(f, `transition ${name}: needs from/to`);
        if (!tr.at || (tr.at.t == null && !tr.at.bar)) err(f, `transition ${name}: needs at { t } or at { bar }`);
        if (tr.at?.t != null && (tr.at.t < 0 || tr.at.t > dur)) err(f, `transition ${name}: at.t outside recording`);
        if (tr.at?.bar && tr.basis !== 'score-aligned') err(f, `transition ${name}: bar anchors require basis score-aligned`);
        const words = (tr.how ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
        if (!words || words > 90) err(f, `transition ${name}: how must be 1–80 words (has ${words})`);
        for (const dv of tr.devices ?? []) if (!DEVICES.has(dv)) err(f, `transition ${name}: unknown device "${dv}"`);
        if (!(tr.devices ?? []).length) err(f, `transition ${name}: needs at least one device`);
        if (!BASES.has(tr.basis) || !['moment', 'passage'].includes(tr.precision) || !tr.evidence) err(f, `transition ${name}: needs basis, precision, evidence`);
        if (tr.precision === 'moment' && !['score-aligned', 'audio-feature'].includes(tr.basis)) err(f, `transition ${name}: moment precision needs score-aligned or audio-feature basis`);
      }
      const maxNotes = Math.max(3, Math.ceil(dur / 40));
      if (cues.length > maxNotes) err(f, `${cues.length} notes for ${Math.round(dur)} s; at most ${maxNotes} (one per 40 s of music)`);
      if (!cues.length) err(f, 'no notes');
    }
  }

  for (const m of text.matchAll(/\[\[([^\]|\"\[]+)(?:\|[^\]]+)?\]\]/g)) {
    const [page] = m[1].trim().split('#');
    const ok = slugs.has(page) || pages.has(page) || (page.startsWith('era:') && eras.has(page.slice(4)));
    if (!ok) err(f, `unresolvable link [[${m[1]}]] (use a roster slug, era:<slug>, origins#id, workshop#id)`);
  }

  const slop = [...new Set(proseOf(mod).prose.flatMap((s) => [...s.matchAll(SLOP)].map((m) => m[0].toLowerCase())))];
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
  const walk = (v) => { if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (k === 'file' && typeof x === 'string') { if (!/\.(mp3|ogg|flac|wav|oga|m4a)$/i.test(x) || /^File:/i.test(x)) titles.add(normalizeTitle(x)); } else if (k !== 'archive') walk(x); } };  // recording sources are checked above, not as images
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
