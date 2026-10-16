// Shared state and helpers for every page module.
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { loadContent } from './content.mjs';
import { normalizeTitle } from '../tools/commons.mjs';

export const ROOT = path.resolve(import.meta.dirname, '..');
export const OUT = path.join(ROOT, 'docs');
export const SITE_URL = 'https://mottopanikeiku.github.io/contrapunctus/';
export const C = await loadContent();
export const { eras, composers, pages, site, art, listens } = C;
export const bySlug = new Map(composers.map((c) => [c.slug, c]));
export const eraBySlug = new Map(eras.map((e) => [e.slug, e]));
export const warnings = [];
/** Entries for the site search: { type, title, sub, url, audio?: true, terms? } with url relative to the site root. */
export const searchIndex = [];

// ---------------------------------------------------------------- side data (dossiers, relations, score alignments)
async function readJson(file) { try { return JSON.parse(await readFile(file, 'utf8')); } catch { return null; } }
export const dossiers = new Map();
export const relations = new Map();
export const scores = new Map();
export const audioCache = (await readJson(path.join(ROOT, 'content/audio.json'))) ?? {};
for (const l of listens) {
  const d = await readJson(path.join(ROOT, 'content/dossiers', `${l.id}.json`)); if (d) dossiers.set(l.id, d);
  const r = await readJson(path.join(ROOT, 'content/relations', `${l.id}.json`)); if (r) relations.set(l.id, r);
  const s = await readJson(path.join(OUT, 'assets/data', l.id, 'score.json')); if (s) scores.set(l.id, s);
}
export const envelopes = new Map();
for (const l of listens) { const e = await readJson(path.join(OUT, 'assets/listen', `${l.id}.json`)); if (e) envelopes.set(l.id, e); }

// ---------------------------------------------------------------- text helpers
export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const attr = esc;
export const strip = (s = '') => String(s).replace(/<[^>]+>/g, '').replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2').replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/\s+/g, ' ').trim();
export const dash = (a, b) => (b == null ? `born ${a}` : `${a}–${b}`);
export const lifespan = (c) => dash(c.born.year, c.died?.year);
export const fmt = (t) => `${Math.floor(t / 60)}:${String(Math.round(t % 60)).padStart(2, '0')}`.replace(/:60$/, ':59');
export const fold = (s = '') => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export async function version(rel) {
  const f = path.join(OUT, rel);
  if (!existsSync(f)) return '0';
  return createHash('md5').update(await readFile(f)).digest('hex').slice(0, 8);
}

// ---------------------------------------------------------------- URLs
export function href(ctx, target) {
  const [page, hash] = target.split('#');
  const h = hash ? `#${hash}` : '';
  if (page.startsWith('era:')) return `${ctx.base}periods/${page.slice(4)}.html${h}`;
  if (bySlug.has(page)) return `${ctx.base}composers/${page}.html${h}`;
  if (page === 'workshop' || page === 'origins') return hash ? `${ctx.base}learn/${hash}.html` : `${ctx.base}learn/index.html`;
  if (['timeline', 'lifelines'].includes(page)) return `${ctx.base}explore/lifelines.html${h}`;
  if (['gallery', 'collection'].includes(page)) return `${ctx.base}explore/collection.html${h}`;
  if (page === 'composers') return `${ctx.base}composers/index.html${h}`;
  if (page === 'credits' || page === 'about') return `${ctx.base}about.html${h}`;
  if (page === 'index') return `${ctx.base}index.html${h}`;
  if (page.startsWith('listen:')) return `${ctx.base}listen/${page.slice(7)}.html${h}`;
  return null;
}

/** Partials 1–16 over C2: bar height ~ 1/n, label = nearest note and deviation from equal temperament. */
export function harmonicSeriesSvg() {
  const names = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
  const W = 960, H = 300, base = 250, left = 40, step = (W - left - 30) / 15;
  const parts = [];
  for (let n = 1; n <= 16; n++) {
    const cents = 1200 * Math.log2(n);
    const semis = Math.round(cents / 100);
    const dev = Math.round(cents - semis * 100);
    const name = `${names[((semis % 12) + 12) % 12]}${2 + Math.floor(semis / 12)}`;
    const x = left + (n - 1) * step;
    const h = 200 / n + 8;
    const off = Math.abs(dev) > 20;
    parts.push(`<g class="h" data-n="${n}" tabindex="0" role="button" aria-label="Partial ${n}, ${name}, ${dev} cents from equal temperament"><rect class="hit" x="${x - step / 2}" y="20" width="${step}" height="${H - 20}" fill="transparent"/><rect x="${x - 7}" y="${base - h}" width="14" height="${h}"${off ? ' class="off"' : ''} fill="currentColor" opacity=".85"/><text x="${x}" y="${base + 20}" text-anchor="middle" font-size="16" fill="currentColor">${n}</text><text x="${x}" y="${base + 40}" text-anchor="middle" font-size="14" fill="currentColor">${name}</text><text x="${x}" y="${base + 56}" text-anchor="middle" font-size="12" fill="currentColor" opacity=".7">${dev === 0 ? '±0' : (dev > 0 ? '+' : '−') + Math.abs(dev)}¢</text></g>`);
  }
  return `<figure class="series-fig"><div class="series-scroll"><svg class="series" viewBox="0 0 ${W} ${H + 20}" role="img" aria-label="The harmonic series over C: partials 1 to 16">${[0, 1, 2, 3, 4].map((i) => `<line x1="${left - 20}" x2="${W - 10}" y1="${base - 40 * i - 0.5}" y2="${base - 40 * i - 0.5}" stroke="currentColor" opacity="${i ? 0.12 : 0.6}"/>`).join('')}${parts.join('')}</svg></div>
<figcaption>The harmonic series over C. Bar height is roughly the relative strength of each partial (1/<i>n</i>). Ochre partials lie more than 20 cents from the nearest note of twelve-tone equal temperament; the 7th, 11th, 13th and 14th are the ones an ordinary equal-tempered keyboard does not reproduce. Select a partial to hear it against the fundamental.</figcaption></figure>`;
}

/** Expand [[target|label]] cross-references in authored HTML. */
export function rich(ctx, html = '') {
  return String(html).replace(/<p>\s*\{\{harmonic-series\}\}\s*<\/p>|\{\{harmonic-series\}\}/g, () => harmonicSeriesSvg()).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) => {
    const url = href(ctx, target.trim());
    const text = label ?? bySlug.get(target.trim())?.family ?? bySlug.get(target.trim())?.name ?? target;
    if (!url) { warnings.push(`${ctx.page}: unresolved link [[${target}]]`); return text; }
    return `<a href="${url}">${text}</a>`;
  });
}

// ---------------------------------------------------------------- images
export function artInfo(file, ctx) {
  const info = art[normalizeTitle(file)];
  if (!info && ctx) warnings.push(`${ctx.page}: image not fetched: ${file}`);
  return info;
}

export function img(ctx, file, alt, { cls = '', sizes = '(max-width: 860px) 100vw, 50vw', eager = false, style = '' } = {}) {
  const i = artInfo(file, ctx);
  if (!i) return '';
  const base = `${ctx.base}${i.src}`;
  const set = [480, 960].filter((w) => w < i.w).map((w) => `${base.replace(/\.webp$/, `-${w}.webp`)} ${w}w`).concat(`${base} ${i.w}w`).join(', ');
  return `<img src="${base}" srcset="${set}" sizes="${sizes}" width="${i.w}" height="${i.h}" alt="${attr(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}${cls ? ` class="${cls}"` : ''}${style ? ` style="${style}"` : ''}>`;
}

/** Portrait thumbnail: the smallest rendition. */
export function thumb(ctx, c, w = 480) {
  const i = artInfo(c.portrait.file, ctx);
  if (!i) return '';
  const src = `${ctx.base}${i.w > w ? i.src.replace(/\.webp$/, `-${w}.webp`) : i.src}`;
  return `<img src="${src}" alt="" loading="lazy" decoding="async" style="object-position:${c.portrait.focus ?? '50% 25%'}">`;
}

// ---------------------------------------------------------------- relationships between art and music
export const RELATION_TYPES = {
  'documented-use': 'Documented use',
  'documented-encounter': 'Documented encounter',
  'shared-context': 'Shared context',
  'editorial-comparison': 'Editorial comparison',
};

export function objectFigure(ctx, a, { sizes = '(max-width: 860px) 100vw, 50vw' } = {}) {
  const meta = [a.date, a.medium, a.collection].filter(Boolean).map(esc).join(' · ');
  return `<figure class="object"><div class="img">${img(ctx, a.file, a.alt ?? `${a.artist}, ${a.title}`, { sizes })}</div><figcaption><span class="who">${esc(a.artist)}</span>, <cite>${a.titleHtml ?? esc(a.title)}</cite>${meta ? `<br>${meta}` : ''}</figcaption></figure>`;
}

export function relationTag(a) {
  return a.relation && RELATION_TYPES[a.relation] ? `<span class="relation ${a.relation}">${RELATION_TYPES[a.relation]}</span>` : '';
}

export function poem(ctx, p) {
  return `<article class="poem"><header>${relationTag(p)}<span class="who">${esc(p.author)}</span><h4>${esc(p.title)}</h4><span class="meta">${esc([p.date, p.source].filter(Boolean).join(' · '))}</span></header>
<div class="lines">${p.original ? `<div class="orig" lang="${p.langCode ?? ''}"><span class="lang">${esc(p.lang ?? 'Original')}</span>${esc(p.original.trim())}</div>` : ''}${p.translation ? `<div class="tr"><span class="lang">${esc(p.translator === 'Our translation' ? 'English · Contrapunctus translation' : (p.translator ?? 'English'))}</span>${esc(p.translation.trim())}</div>` : ''}</div>
${p.note ? `<div class="art-note">${rich(ctx, p.note)}</div>` : ''}</article>`;
}

export function arts(ctx, list = []) {
  return list.map((a) => {
    if (a.type === 'poem' || a.type === 'text') return poem(ctx, a);
    return `<div class="pairing">${objectFigure(ctx, a, { sizes: '(max-width: 860px) 100vw, 45vw' })}<div class="art-note">${relationTag(a)}${rich(ctx, a.note ?? '')}</div></div>`;
  }).join('\n');
}

/** Notation examples. Each is labelled as a quotation or a schematic, never both. */
export function scoresHtml(ctx, list = []) {
  return list.map((s, i) => {
    const text = `${s.kicker ?? ''} ${s.title} ${s.caption ?? ''}`;
    const schematic = s.kind ? s.kind === 'schematic' : /schematic|invented|illustrat|not a (quotation|transcription)/i.test(text);
    return `<figure class="score" id="${attr(s.id ?? `ex-${i + 1}`)}"><div class="score-head"><h4>${s.kicker ? `<span class="sc">${esc(s.kicker)}</span>` : ''}${esc(s.title)}<br><span class="score-kind ${schematic ? 'schematic' : 'quote'}">${schematic ? 'Teaching schematic' : 'From the score'}</span></h4><button class="play" type="button">Play example</button></div>
<div class="abc"></div><script type="text/vnd.abc">${s.abc.trim().replace(/<\/script/gi, '<\\/script')}</script>
${s.caption ? `<figcaption>${rich(ctx, s.caption)}</figcaption>` : ''}</figure>`;
  }).join('\n');
}

// ---------------------------------------------------------------- recordings
export const CUE_LANE = { music: 'music', form: 'music', listen: 'music', life: 'context', world: 'context' };
export const KIND_LABEL = { music: 'In the music', form: 'The form', listen: 'Listen for', life: 'The life', world: 'Around the music' };
export const BASIS_LABEL = {
  'score-aligned': 'From the score, timed by aligning the score to this recording',
  'score-proportion': 'Placed from the score’s proportions; timing approximate',
  'audio-feature': 'Located by measuring this recording',
  documented: 'Documented fact',
  general: 'General description of this stretch',
};

export function listenOrder() {
  const rank = new Map(composers.map((c, i) => [c.slug, i]));
  return listens.filter((l) => bySlug.has(l.composer) && audioCache[normalizeTitle(l.source.file)]).sort((a, b) => rank.get(a.composer) - rank.get(b.composer) || (a.order ?? 1) - (b.order ?? 1));
}

export function streamOf(l) { return audioCache[normalizeTitle(l.source.file)]; }

export function tuningOf(l) {
  const t = l.tuning;
  if (!t) return { hz: 440, status: 'standard' };
  if (typeof t === 'number') return { hz: t, status: 'documented' };
  return { hz: t.hz ?? 440, status: t.status ?? 'inferred', note: t.note ?? '' };
}

/** Resolve cue display times: bar-anchored cues take their time from the score alignment. */
export function resolveCues(l) {
  const sc = scores.get(l.id);
  return (l.cues ?? []).map((c) => {
    let t = c.t;
    if (c.bar && sc) {
      const b = sc.bars.find((x) => x.n === String(c.bar.n) && x.occ === (c.bar.occ ?? 1));
      if (b) t = b.t; else warnings.push(`listen/${l.id}: bar ${c.bar.n}/${c.bar.occ} not in score.json`);
    }
    return { ...c, t: t ?? 0 };
  }).sort((a, b) => a.t - b.t);
}

export function recordingLine(l) {
  const d = dossiers.get(l.id);
  const names = (v) => (Array.isArray(v) ? v : v ? [v] : []).map((p) => (typeof p === 'string' ? p : p.name + (p.role && !/ensemble|orchestra|choir|band/i.test(p.role) ? ` (${p.role})` : ''))).join(', ');
  let perf = l.performers;
  if (d?.performers) {
    const f = d.performers;
    if (f.status === 'disputed' && f.alternatives?.length) perf = `${f.alternatives.map((a) => names(a.value)).join(' or ')} (attribution disputed)`;
    else if (names(f.value)) perf = names(f.value) + (f.status === 'inferred' ? ' (inferred)' : '');
    else if (f.status === 'unknown') perf = 'Performers not identified';
  }
  const date = d?.session?.date?.value && d.session.date.status !== 'unknown' ? `${d.session.date.status === 'disputed' ? 'recorded ' : 'recorded '}${d.session.date.value}${d.session.date.status === 'inferred' ? ' (inferred)' : d.session.date.status === 'disputed' ? ' (disputed)' : ''}` : (l.recorded ? `recorded ${l.recorded}` : '');
  return [perf, date].filter(Boolean).join(' · ');
}
