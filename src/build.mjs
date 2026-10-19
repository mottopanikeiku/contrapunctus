#!/usr/bin/env node
// Static generator: content/*.mjs -> docs/, followed by cached asset optimisation.
import { mkdir, writeFile, readdir, unlink, readFile, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { loadContent } from './content.mjs';
import { normalizeTitle, sourceKey } from '../tools/commons.mjs';
import { pathToFileURL } from 'node:url';
import routes from '../content/routes.mjs';
import { buildReturnLab } from './returnlab.mjs';
import { buildCompare, compareLinks } from './compare.mjs';
import PROGRAMMES from '../content/programmes.mjs';
import { buildAtlasMap, placesSection } from './atlas-map.mjs';
import { buildJourneys } from './journeys.mjs';
import { buildGuide, guideVersion } from './guide.mjs';
import { optimize } from '../tools/optimize/index.mjs';
import { picture } from '../tools/optimize/pictures.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'docs');
const C = await loadContent();
const { eras, composers, pages, site, art, listens: allListens, precursors = [], prologue } = C;
// Short display name: the surname, unless two composers share it (J. S. Bach / C. P. E. Bach, Robert / Clara Schumann).
const familyCount = new Map();
for (const c of composers) familyCount.set(c.family, (familyCount.get(c.family) ?? 0) + 1);
for (const c of composers) {
  const given = (c.given ?? '').trim().split(/\s+/).filter(Boolean);
  c.short = !c.family || familyCount.get(c.family) < 2 || !given.length ? c.family ?? c.name : given.length === 1 ? `${given[0]} ${c.family}` : `${given.map((g) => `${g[0]}.`).join(' ')} ${c.family}`;
}
// Publication gate: a recording goes live when it was on the site before the expansion (content/plan/baseline.json)
// or its independent review passed (content/plan/reviews/<id>.json, verdict "pass"). Everything else waits.
const baseline = new Set(JSON.parse(await readFile(path.join(ROOT, 'content/plan/baseline.json'), 'utf8').catch(() => '[]')));
const BASE_SCORES = new Set(['satie-gymnopedie-1', 'beethoven-5-first', 'bach-wtc1-fugue-b-minor', 'schubert-impromptu-gflat']);
const reviewedScore = (id) => { try { return JSON.parse(readFileSync(path.join(ROOT, 'content/plan/reviews', `score-${id}.json`), 'utf8')).verdict === 'pass'; } catch { return false; } };
const reviewed = (id) => { try { return JSON.parse(readFileSync(path.join(ROOT, 'content/plan/reviews', `${id}.json`), 'utf8')).verdict === 'pass'; } catch { return false; } };
const listens = allListens.filter((l) => baseline.has(l.id) || reviewed(l.id));
const held = allListens.filter((l) => !baseline.has(l.id) && !reviewed(l.id)).map((l) => l.id);
const bySlug = new Map(composers.map((c) => [c.slug, c]));
const eraBySlug = new Map(eras.map((e) => [e.slug, e]));
const SITE_URL = 'https://mottopanikeiku.github.io/contrapunctus/';
const warnings = [];
let PROG_V = '';
const INFLUENCE_EDGES = (await Promise.all((await readdir(path.join(ROOT, 'content/influence')).catch(() => [])).filter((f) => f.endsWith('.json') && f !== 'threads.json').map(async (f) => JSON.parse(await readFile(path.join(ROOT, 'content/influence', f), 'utf8')).edges?.length ?? 0))).reduce((a, b) => a + b, 0);
const ver = async (rel) => createHash('md5').update(await readFile(path.join(OUT, rel))).digest('hex').slice(0, 8);
const V = { css: await ver('assets/css/style.css'), js: await ver('assets/js/site.js'), shared: await ver('assets/css/shared.css'), app: await ver('assets/js/app.js'), room: await ver('assets/js/room.js'), player: await ver('assets/js/player.js') };

async function jsonDirectory(name) {
  const dir = path.join(ROOT, 'content', name);
  const files = await readdir(dir).catch((e) => { if (e.code === 'ENOENT') return []; throw e; });
  return Promise.all(files.filter((f) => f.endsWith('.json')).sort().map(async (f) => JSON.parse(await readFile(path.join(dir, f), 'utf8'))));
}
const glossaryFile = path.join(ROOT, 'content/glossary.mjs');
const GLOSSARY = existsSync(glossaryFile) ? (await import(pathToFileURL(glossaryFile).href)).default : [];
const [bibliographies, dossiers, returnLabs, influenceBatches, elsewhereFiles] = await Promise.all(['bibliography', 'dossiers', 'returnlab', 'influence', 'elsewhere'].map(jsonDirectory));
const elsewhereBy = new Map(elsewhereFiles.map((e) => [e.composer, e]));
const influenceEdges = influenceBatches.flatMap((b) => (Array.isArray(b) ? [] : b.edges ?? []));
const publishedJourneys = (C.journeys ?? []).filter((j) => { try { return JSON.parse(readFileSync(path.join(ROOT, 'content/plan/reviews', `journey-${j.id}.json`), 'utf8')).verdict === 'pass'; } catch { return false; } });
const bibliography = new Map(bibliographies.map((b) => [b.id, b]));
const dossierById = new Map(dossiers.map((d) => [d.id, d]));
const listenById = new Map(listens.map((l) => [l.id, l]));
const scoreIndex = new Map(await Promise.all(listens.map(async (l) => {
  const file = path.join(OUT, 'assets/data', l.id, 'score.json');
  if (!existsSync(file)) return [l.id, null];
  const { bars, status, source } = JSON.parse(await readFile(file, 'utf8'));
  return [l.id, { bars, status, source }];
})));

// ---------------------------------------------------------------- helpers
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = esc;
const dash = (a, b) => (b == null ? `b. ${a}` : `${a}–${b}`);
const lifespan = (c) => dash(c.born.year, c.died?.year);
const plain = (s = '') => String(s).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) => label ?? bySlug.get(target)?.short ?? target).replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();
const fold = (s) => plain(s).normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
const termAliases = new Map();
for (const g of GLOSSARY) for (const name of [g.term, ...(g.aka ?? [])]) {
  if (name) termAliases.set(name.toLocaleLowerCase('en'), g.slug);
}
const termPattern = termAliases.size ? new RegExp(`(?<![\\p{L}\\p{N}_])(${[...termAliases.keys()].sort((a, b) => b.length - a.length).map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})(?![\\p{L}\\p{N}_])`, 'giu') : null;

/** Link the first prose occurrence of each glossary entry; markup and headings stay intact. */
export function termify(ctx, html) {
  if (!termPattern) return html;
  const seen = ctx.termSeen ??= new Set();
  const stack = [];
  const excluded = new Set(['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code', 'pre', 'script', 'style', 'svg', 'button', 'nav', 'label', 'textarea', 'select']);
  const prose = new Set(['p', 'li', 'dd', 'figcaption', 'blockquote', 'aside']);
  return html.replace(/<!--[\s\S]*?-->|<[^>]+>|[^<]+/g, (part) => {
    if (part.startsWith('<')) {
      const tag = part.match(/^<\s*(\/?)\s*([a-z][\w:-]*)/i);
      if (!tag) return part;
      const name = tag[2].toLowerCase();
      if (tag[1]) {
        const i = stack.lastIndexOf(name);
        if (i >= 0) stack.length = i;
      } else if (!/\/\s*>$/.test(part) && !['area', 'br', 'hr', 'img', 'input', 'link', 'meta', 'source', 'wbr'].includes(name)) stack.push(name);
      return part;
    }
    if (!stack.some((tag) => prose.has(tag)) || stack.some((tag) => excluded.has(tag))) return part;
    return part.replace(termPattern, (text) => {
      const slug = termAliases.get(text.toLocaleLowerCase('en'));
      if (seen.has(slug)) return text;
      seen.add(slug);
      return `<a class="term" href="${ctx.base}glossary.html#${slug}" data-term="${slug}">${text}</a>`;
    });
  });
}


function furtherReading(ctx, id) {
  const items = bibliography.get(id)?.items ?? [];
  if (!items.length) return '';
  return `<section class="apparatus" id="further-reading"><h2>Further reading</h2><ul class="reading-list">${items.map((item) => {
    const cite = esc(item.cite).replace(/\*([^*]+)\*/g, '<cite>$1</cite>');
    return `<li>${item.url ? `<a href="${attr(item.url)}">${cite}</a>` : cite}<span class="reading-kind">${esc(item.kind)}</span>${item.note ? `<p>${esc(item.note)}</p>` : ''}</li>`;
  }).join('')}</ul></section>`;
}

function citePage(ctx, title) {
  const url = `${SITE_URL}${ctx.page}.html`;
  const date = new Date().toISOString().slice(0, 10);
  const accessed = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
  const chicago = `Contrapunctus. “${title}.” Accessed ${accessed}. ${url}.`;
  const tex = (s) => s.replace(/[\\{}%&#_$]/g, (c) => c === '\\' ? '\\textbackslash{}' : `\\${c}`);
  const bibtex = `@misc{contrapunctus-${ctx.page.replace(/\//g, '-')},\n  author = {{Contrapunctus}},\n  title = {${tex(title)}},\n  howpublished = {\\url{${url}}},\n  note = {Accessed ${date}}\n}`;
  return `<details class="apparatus citation" id="cite"><summary>Cite this page</summary><p id="cite-chicago">${esc(chicago)}</p><button type="button" class="textbook-button" data-copy="cite-chicago">Copy Chicago citation</button><pre id="cite-bibtex"><code>${esc(bibtex)}</code></pre><button type="button" class="textbook-button" data-copy="cite-bibtex">Copy BibTeX</button><p class="copy-status" role="status"></p></details>`;
}

function hearButton(id, t = 0, label = 'Hear it') {
  return listenById.has(id) ? `<button type="button" class="play" data-play-id="${attr(id)}" data-play-t="${t}">${esc(label)}</button>` : '';
}


/** Partials 1–16 over C2: bar height ~ 1/n, label = nearest note and deviation from equal temperament. */
function harmonicSeriesSvg() {
  const names = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
  const W = 960, H = 300, base = 250, left = 40, step = (W - left - 30) / 15;
  const parts = [];
  for (let n = 1; n <= 16; n++) {
    const cents = 1200 * Math.log2(n);
    const semis = Math.round(cents / 100);
    const dev = Math.round(cents - semis * 100);
    const oct = 2 + Math.floor(semis / 12);
    const name = `${names[((semis % 12) + 12) % 12]}${oct}`;
    const x = left + (n - 1) * step;
    const h = 200 / n + 8;
    const off = Math.abs(dev) > 20;
    parts.push(`<g class="h" data-n="${n}" tabindex="0" role="button" aria-label="Partial ${n}, ${name}"><rect x="${x - 7}" y="${base - h}" width="14" height="${h}"${off ? ' class="off"' : ''} fill="currentColor" opacity=".85"/><text x="${x}" y="${base + 20}" text-anchor="middle" font-size="17" font-style="italic" fill="currentColor">${n}</text><text x="${x}" y="${base + 40}" text-anchor="middle" font-size="15" fill="currentColor">${name}</text><text x="${x}" y="${base + 56}" text-anchor="middle" font-size="12.5" fill="currentColor" opacity=".65">${dev === 0 ? '±0' : (dev > 0 ? '+' : '−') + Math.abs(dev)}¢</text></g>`);
  }
  return `<figure class="series-fig"><svg class="series" viewBox="0 0 ${W} ${H + 20}" role="img" aria-label="The harmonic series over C: partials 1 to 16">${[0, 1, 2, 3, 4].map((i) => `<line x1="${left - 20}" x2="${W - 10}" y1="${base - 40 * i - 0.5}" y2="${base - 40 * i - 0.5}" stroke="currentColor" opacity="${i ? 0.12 : 0.6}"/>`).join('')}${parts.join('')}</svg>
<figcaption class="label" style="border-left-color:var(--accent)"><span class="who">The harmonic series over C</span>Bar height ≈ relative strength (1/<i>n</i>). Gold partials are more than 20 cents away from the nearest equal-tempered note — the 7th, 11th, 13th and 14th are the ones no keyboard can play. Click a partial to hear it against the fundamental.</figcaption></figure>`;
}

function href(ctx, target) {
  const [page, hash] = target.split('#');
  const h = hash ? `#${hash}` : '';
  if (page.startsWith('era:')) return `${ctx.base}eras/${page.slice(4)}.html${h}`;
  if (bySlug.has(page)) return `${ctx.base}composers/${page}.html${h}`;
  if (['origins', 'workshop', 'timeline', 'gallery', 'credits', 'index', 'glossary', 'sources', 'hall', 'atlas', 'routes', 'influence'].includes(page)) return `${ctx.base}${page}.html${h}`;
  if (page === 'composers') return `${ctx.base}composers/index.html${h}`;
  return null;
}

/** Expand [[target|label]] cross-references in authored HTML. */
function rich(ctx, html = '') {
  return html.replace(/<p>\s*\{\{harmonic-series\}\}\s*<\/p>|\{\{harmonic-series\}\}/g, () => harmonicSeriesSvg()).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) => {
    const url = href(ctx, target.trim());
    const text = label ?? bySlug.get(target.trim())?.short ?? bySlug.get(target.trim())?.name ?? target;
    if (!url) { warnings.push(`${ctx.page}: unresolved link [[${target}]]`); return text; }
    return `<a href="${url}">${text}</a>`;
  });
}

function artInfo(file, ctx) {
  const info = art[normalizeTitle(file)];
  if (!info) warnings.push(`${ctx.page}: image not fetched: ${file}`);
  return info;
}

function img(ctx, file, alt, options = {}) {
  const image = artInfo(file, ctx);
  if (!image) return `<div class="missing-img" style="aspect-ratio:4/3;background:var(--paper-3)"></div>`;
  return picture(image, ctx.base, alt, options);
}

const staffRule = (cls = '') => `<svg class="staff-rule ${cls}" viewBox="0 0 1000 34" preserveAspectRatio="none" aria-hidden="true">${[5, 11, 17, 23, 29].map((y) => `<line x1="0" x2="1000" y1="${y}" y2="${y}" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke"/>`).join('')}<line x1="994" x2="994" y1="5" y2="29" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-width="1"/><line x1="999" x2="999" y1="5" y2="29" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-width="3"/></svg>`;

function label(a) {
  const meta = [a.medium, a.collection].filter(Boolean).join(' · ');
  return `<figcaption class="label"><span class="who">${esc(a.artist)}</span><span class="what">${a.titleHtml ?? `<cite>${esc(a.title)}</cite>`}</span>${a.date ? `, ${esc(a.date)}` : ''}${meta ? `<span class="meta">${esc(meta)}</span>` : ''}</figcaption>`;
}

function painting(ctx, a, opts = {}) {
  const frame = a.frame ?? 'gilt';
  const cls = frame === 'gilt' ? 'frame' : `frame ${frame}`;
  const cap = `${a.artist}, ${a.title}${a.date ? `, ${a.date}` : ''}`;
  return `<figure class="painting${opts.reveal === false ? '' : ' reveal'}"><a class="${cls}" href="${ctx.base}${artInfo(a.file, ctx)?.src ?? ''}" data-caption="${attr(cap)}"><span class="canvas">${img(ctx, a.file, a.alt ?? cap, opts)}</span></a>${label(a)}${opts.extra ?? ''}</figure>`;
}

function poem(ctx, p) {
  return `<article class="poem reveal"><header><span class="who">${esc(p.author)}</span><h4>${esc(p.title)}</h4><span class="meta">${esc([p.date, p.source].filter(Boolean).join(' · '))}</span></header>
<div class="lines">${p.original ? `<div class="orig"><span class="lang">${esc(p.lang ?? 'Original')}</span>${esc(p.original.trim())}</div>` : ''}${p.translation ? `<div class="tr"><span class="lang">${esc(p.translator ?? 'English')}</span>${esc(p.translation.trim())}</div>` : ''}</div>
${p.note ? `<div class="art-note">${rich(ctx, p.note)}</div>` : ''}</article>`;
}

function arts(ctx, list = []) {
  return list.map((a) => {
    if (a.type === 'poem' || a.type === 'text') return poem(ctx, a);
    return `<div class="sister">${painting(ctx, a, { sizes: '(max-width: 860px) 100vw, 45vw' })}<div class="art-note reveal">${rich(ctx, a.note ?? '')}</div></div>`;
  }).join('\n');
}

function scores(ctx, list = []) {
  return list.map((s, i) => `<figure class="score reveal" id="${attr(s.id ?? `${ctx.scorePrefix ? `${ctx.scorePrefix}-` : ''}ex-${i + 1}`)}"><div class="score-head"><h4>${s.kicker ? `<span class="sc">${esc(s.kicker)}</span>` : ''}${esc(s.title)}</h4><button class="play" type="button" aria-label="Play example">Play</button></div>
<div class="abc"></div><script type="text/vnd.abc">${s.abc.trim().replace(/<\/script/gi, '<\\/script')}</script>
<figcaption>${rich(ctx, s.caption ?? esc(s.title))}</figcaption></figure>`).join('\n');
}

const fonts = '<!--cp-fonts-->'; // The optimiser injects local subsets after scanning the complete site.

const NAV = [
  ['hall', 'The Hall', 'hall.html'],
  ['journeys', 'Journeys', 'journeys/index.html'],
  ['composers', 'Composers', 'composers/index.html'],
  ['influence', 'Influence', 'influence.html'],
  ['map', 'Map', 'atlas-map.html'],
  ['workshop', 'Workshop', 'workshop.html'],
];
// Pages outside the main navigation mark the section they belong to.
const NAV_PARENT = { eras: 'composers', timeline: 'composers', works: 'composers', compare: 'hall', 'return-lab': 'hall', returnlab: 'hall', routes: 'hall', origins: 'workshop', glossary: 'workshop', gallery: 'influence' };
const navItems = (ctx, current) => NAV.map(([k, t, u]) => `<li><a href="${ctx.base}${u}"${current === k ? ' aria-current="page"' : ''}>${t}</a></li>`).join('');

/** The layer that survives page changes: now-playing bar and search. */
function persist(ctx) {
  return `<div id="cp-persist">
<div class="np" hidden role="region" aria-label="Now playing">
  <button class="np-play" type="button" aria-label="Play">▶</button>
  <img class="np-i" alt="" hidden>
  <a class="np-now" href="${ctx.base}hall.html"><span class="np-c"></span><span class="np-w"></span></a>
  <div class="np-track" role="presentation"><div class="np-prog"><span></span></div></div>
  <span class="np-time">0:00</span>
  <button class="np-next" type="button" aria-label="Next piece">⏭</button>
  <a class="np-hall" href="${ctx.base}hall.html">Enter the hall</a>
</div>
<dialog class="srch" aria-label="Search">
  <div class="srch-box"><span class="glyph" aria-hidden="true">𝄞</span><input type="search" placeholder="Search composers, works, recordings, ideas" aria-label="Search" autocomplete="off"><button class="srch-close" type="button" aria-label="Close">×</button></div>
  <ul class="srch-results"></ul>
</dialog>
</div>`;
}
const headScripts = (ctx) => `<link rel="stylesheet" href="${ctx.base}assets/css/shared.css?v=${V.shared}">
<link rel="modulepreload" href="${ctx.base}assets/js/player.js?v=${V.player}">
<script type="module" src="${ctx.base}assets/js/app.js?v=${V.app}"></script>`;

function layout(ctx, { title, description, body, dark = false, accent, nav, ogImage, head = '', modules = [] }) {
  const style = accent ? ` style="--accent:${accent}"` : '';
  body = termify(ctx, body);
  return `<!doctype html>
<html lang="en" data-site="${V.js}" data-room="${V.room}" data-player="${V.player}" data-prog="${PROG_V}" data-guide="${guideVersion}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${attr(description ?? site.description)}">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(description ?? site.description)}">
${ogImage ? `<meta property="og:image" content="${attr(SITE_URL + ogImage)}">\n<meta name="twitter:card" content="summary_large_image">` : ''}
<meta name="theme-color" content="#13110e">
<link rel="icon" href="${ctx.base}assets/favicon.svg" type="image/svg+xml">
${fonts}
<link rel="stylesheet" href="${ctx.base}assets/css/style.css?v=${V.css}">
${headScripts(ctx)}
${head}
</head>
<body class="${dark ? 'is-over-dark' : ''}"${style}${modules.length ? ` data-modules="${modules.join(' ')}"` : ''}>
<a class="skip" href="#main">Skip to content</a>
<header class="masthead"><div class="wrap">
<a class="brand" href="${ctx.base}index.html"><span class="glyph" aria-hidden="true">𝄞</span>Contrapunctus</a>
<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
<nav aria-label="Main navigation"><ul class="nav" id="nav">${navItems(ctx, NAV_PARENT[nav] ?? nav)}<li><a href="#" data-search aria-label="Search">Search</a></li></ul></nav>
</div></header>
<main id="main">
${body}
</main>
<footer class="colophon"><div class="wrap">
<div>${staffRule()}<a class="brand" href="${ctx.base}index.html"><span class="glyph" aria-hidden="true">𝄞</span>Contrapunctus</a>
<p>${site.colophon}</p></div>
<div><h5>Listen</h5><ul><li><a href="${ctx.base}hall.html">The Concert Hall</a></li><li><a href="${ctx.base}works/index.html">Every work</a></li><li><a href="${ctx.base}journeys/index.html">Guided journeys</a></li><li><a href="${ctx.base}compare/index.html">Compare performers</a></li><li><a href="${ctx.base}return-lab/index.html">The Return Lab</a></li><li><a href="${ctx.base}routes.html">Listening routes</a></li><li><a href="${ctx.base}guide.html">Guide</a></li></ul></div>
<div><h5>Read</h5><ul><li><a href="${ctx.base}composers/index.html">Composers</a></li>${eras.map((e) => `<li><a href="${ctx.base}eras/${e.slug}.html">${e.numeral}. ${esc(e.name)}</a></li>`).join('')}<li><a href="${ctx.base}origins.html">Before Bach</a></li></ul></div>
<div><h5>Look and learn</h5><ul><li><a href="${ctx.base}workshop.html">The Workshop</a></li><li><a href="${ctx.base}glossary.html">Glossary</a></li><li><a href="${ctx.base}timeline.html">Lifelines</a></li><li><a href="${ctx.base}gallery.html">Sister Arts</a></li><li><a href="${ctx.base}atlas-map.html">The Map</a></li><li><a href="${ctx.base}influence.html">The Web of Influence</a></li></ul></div>
<div><h5>About</h5><ul><li><a href="${ctx.base}about.html">About Contrapunctus</a></li><li><a href="${ctx.base}sources.html">Sources &amp; method</a></li><li><a href="${ctx.base}credits.html">Image credits</a></li></ul></div>
<div class="fine"><span>Set in Cormorant Garamond and EB Garamond. Music engraved in the browser with abcjs.</span><span>Paintings are public-domain reproductions via Wikimedia Commons.</span></div>
</div></footer>
<dialog class="lightbox"><button type="button" aria-label="Close">×</button><img alt=""><p></p></dialog>
${persist(ctx)}
</body>
</html>
`;
}

function chapter(id, title, inner, sub) {
  return `<section class="chapter" id="${id}"><header class="reveal"><h2>${title}</h2>${sub ? `<p>${sub}</p>` : ''}</header>${inner}</section>`;
}

function card(ctx, c) {
  return `<a class="card reveal" href="${ctx.base}composers/${c.slug}.html"><span class="pic">${img(ctx, c.portrait.file, c.name, { sizes: '220px' }).replace('<img ', `<img style="object-position:${c.portrait.focus ?? '50% 25%'}" `)}</span>
<span class="dates">${lifespan(c)}</span><h4>${esc(c.name)}</h4><span class="epithet">${esc(c.epithet)}</span></a>`;
}

const chip = (ctx, s) => {
  const c = bySlug.get(s);
  return c ? `<a class="chip" href="${ctx.base}composers/${s}.html">${esc(c.name)}</a>` : `<span class="chip ext">${esc(s)}</span>`;
};

// ---------------------------------------------------------------- works
// A work page gathers every hosted recording of one piece: the movements of a set and rival performances.
const keyless = (s) => plain(s).split(/;| — /)[0].replace(/\s+in\s+[A-G](?:♯|♭|-sharp|-flat)?\s+(?:major|minor)/gi, '');
const workSlug = (s) => keyless(s).normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[“”‘’"']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 64);
const WORKS = new Map();      // slug → { slug, composer, title, listens, entry }
const workOf = new Map();     // listen id → work slug
const workOfEntry = new Map(); // composer works[] entry → work slug
const progById = new Map();
const fmtTime = (d) => `${Math.floor(d / 60)}:${String(Math.round(d % 60)).padStart(2, '0')}`;
const hours = (secs) => secs >= 3600 ? `${Math.floor(secs / 3600)} h ${Math.round((secs % 3600) / 60)} min` : `${Math.round(secs / 60)} min`;

/** The composer's own works[] entry for a hosted work: exact title match first, then the longest whole-word prefix. */
function matchWork(c, title) {
  const target = workSlug(title);
  let best = null;
  for (const w of c.works ?? []) {
    for (const s of [workSlug(w.title), workSlug(`${w.title} ${w.cat ?? ''}`)]) {
      if (!s) continue;
      const hit = s === target || (target.startsWith(s) && target[s.length] === '-') || (s.startsWith(target) && s[target.length] === '-');
      if (hit && (!best || s.length > best.len)) best = { w, len: s.length };
    }
  }
  return best?.w ?? null;
}

function collectWorks(prog) {
  for (const t of prog) progById.set(t.id, t);
  for (const l of listens) {
    const c = bySlug.get(l.composer);
    if (!c || !progById.has(l.id)) continue;   // guests and the prologue have no work pages
    const slug = `${c.slug}-${workSlug(l.work)}`;
    if (!WORKS.has(slug)) WORKS.set(slug, { slug, composer: c, title: keyless(l.work), listens: [] });
    const w = WORKS.get(slug);
    w.listens.push(l);
    if (!/[;—]/.test(l.work) && l.work.length > w.title.length) w.title = l.work;
    workOf.set(l.id, slug);
  }
  for (const w of WORKS.values()) {
    w.listens.sort((a, b) => (a.concert === false) - (b.concert === false) || (!a.set) - (!b.set) || (a.set?.part ?? 0) - (b.set?.part ?? 0) || (a.order ?? 1) - (b.order ?? 1));
    w.entry = matchWork(w.composer, w.title);
    if (w.entry && !workOfEntry.has(w.entry)) workOfEntry.set(w.entry, w.slug);
    w.duration = w.listens.filter((l) => l.concert !== false).reduce((a, l) => a + (progById.get(l.id)?.duration ?? 0), 0);
    w.first = Math.min(...w.listens.map((l) => setPos(l)));
  }
}
const composerWorks = (c) => [...WORKS.values()].filter((w) => w.composer === c).sort((a, b) => a.first - b.first || a.title.localeCompare(b.title));

function workPills(c) {
  const list = composerWorks(c);
  const elsewhere = elsewhereBy.get(c.slug);
  if (!list.length && !elsewhere) return '';
  const count = (w) => {
    const movements = new Set(w.listens.filter((l) => l.set).map((l) => l.movement)).size;
    return movements > 1 ? `${movements} movements` : w.listens.length > 1 ? `${w.listens.length} recordings` : fmtTime(progById.get(w.listens[0].id)?.duration ?? 0);
  };
  return `<div class="listen-links"><span class="sc">${list.length ? 'Hear it in the Concert Hall' : 'Not yet in the Concert Hall'}</span>${list.map((w) => `<a href="../works/${w.slug}.html"><span class="play-dot" aria-hidden="true"></span>${esc(keyless(w.title))}<small>${esc(count(w))}</small></a>`).join('')}${elsewhere ? `<a href="#elsewhere" class="elsewhere-link">Where to hear it ↓</a>` : ''}</div>`;
}

/** Official recordings on other services, for composers the Hall cannot host. */
function elsewhereSection(ctx, data, { heading = true } = {}) {
  const label = { youtube: 'YouTube', spotify: 'Spotify', apple: 'Apple Music', label: 'Label', publisher: 'Publisher', bandcamp: 'Bandcamp' };
  return `<ul class="elsewhere">${data.items.map((it) => `<li class="reveal"><div class="ew-head"><span class="w">${esc(it.work)}</span>${it.year ? `<span class="y">${esc(it.year)}</span>` : ''}</div><span class="p">${esc([it.performers, it.label, it.recorded].filter(Boolean).join(' · '))}</span>${it.note ? `<p>${rich(ctx, it.note)}</p>` : ''}<p class="ew-links">${(it.links ?? []).map((k) => `<a href="${attr(k.url)}" target="_blank" rel="noopener" title="${attr(k.title ?? '')}">${esc(label[k.kind] ?? k.kind)} ↗</a>`).join('')}</p>${it.moments?.length ? `<ol class="ew-moments">${it.moments.map((m) => `<li><time>${esc(m.t)}</time> ${esc(m.text)}</li>`).join('')}</ol>` : ''}</li>`).join('')}</ul>${heading ? '<p class="ew-note">These recordings are under copyright, so the Hall cannot play them; the links go to the labels’ and artists’ own uploads and to streaming services.</p>' : ''}`;
}

// ---------------------------------------------------------------- pages
function composerPage(c, i) {
  const ctx = { base: '../', page: `composers/${c.slug}` };
  const era = eraBySlug.get(c.era);
  if (!era) warnings.push(`${c.slug}: unknown era ${c.era}`);
  const prev = composers[i - 1], next = composers[i + 1];
  const parts = [];
  const toc = [];
  const add = (id, title, inner, sub) => { toc.push([id, title]); parts.push(chapter(id, title, inner, sub)); };
  const elsewhere = elsewhereBy.get(c.slug);

  add('life', 'Life', `<div class="prose">${rich(ctx, c.life)}</div>`);
  if (elsewhere && !composerWorks(c).length) add('elsewhere', 'Where to hear it', elsewhereSection(ctx, elsewhere));
  placesSection(ctx, c.slug, add);
  const inheritance = influenceModule?.influenceSection?.(ctx, c.slug) ?? '';
  if (inheritance) { toc.push(['inheritance', 'Musical inheritance']); parts.push(inheritance); }
  if (c.sound?.length) add('sound', 'The Sound', `<div class="anatomy">${c.sound.map((s) => `<div class="reveal"><h4>${s.glyph ? `<span class="glyph">${s.glyph}</span>` : ''}${esc(s.aspect)}</h4>${rich(ctx, s.html)}</div>`).join('')}</div>`);
  if (c.works?.length) add('works', 'Works', `<ol class="works">${c.works.map((w, j) => { const page = workOfEntry.get(w); return `<li class="reveal" id="work-${j + 1}"><span class="yr">${esc(w.year)}</span><div><span class="t">${page ? `<a href="../works/${page}.html">${w.titleHtml ?? esc(w.title)}</a>` : w.titleHtml ?? esc(w.title)}</span>${w.cat ? `<span class="cat">${esc(w.cat)}</span>` : ''}${w.forces ? `<span class="forces">${esc(w.forces)}</span>` : ''}${w.note ? `<div class="w-note">${rich(ctx, w.note)}</div>` : ''}${page ? `<a class="w-hear" href="../works/${page}.html">Hear it in the Hall →</a>` : ''}</div></li>`; }).join('')}</ol>`, 'A listening path, not a complete catalogue.');
  if (c.score?.length) add('score', 'In the Score', scores(ctx, c.score), 'Short examples, engraved and playable.');
  if (c.arts?.length) add('arts', 'Sister Arts', arts(ctx, c.arts));
  if (c.recordings?.length) add('listen', 'Recordings to own', `<ul class="discs">${c.recordings.map((r) => `<li class="reveal"><span class="disc" aria-hidden="true"></span><div><span class="w">${esc(r.work)}</span><span class="p">${esc(r.performers)}</span><span class="m">${esc([r.label, r.year].filter(Boolean).join(' · '))}</span>${r.note ? `<span class="d">${rich(ctx, r.note)}</span>` : ''}</div></li>`).join('')}</ul>`);
  if (elsewhere && composerWorks(c).length) add('elsewhere', 'Where to hear more', elsewhereSection(ctx, elsewhere));
  if (c.lineage) add('lineage', 'Lineage', `<div class="lineage reveal"><div class="side from"><span class="sc">Drew from</span>${(c.lineage.from ?? []).map((s) => chip(ctx, s)).join('')}</div><div class="self">${esc(c.short)}</div><div class="side to"><span class="sc">Passed to</span>${(c.lineage.to ?? []).map((s) => chip(ctx, s)).join('')}</div></div>${c.lineage.note ? `<div class="lineage-note">${rich(ctx, c.lineage.note)}</div>` : ''}`);
  if (bibliography.has(c.slug)) toc.push(['further-reading', 'Further reading']);

  const facts = (c.facts ?? []).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${rich(ctx, v)}</dd></div>`).join('');
  const body = `<section class="c-hero"><div class="wrap">
<figure class="portrait reveal"><a class="frame" href="${ctx.base}${artInfo(c.portrait.file, ctx)?.src ?? ''}" data-caption="${attr(c.portrait.caption ?? c.name)}"><span class="canvas">${img(ctx, c.portrait.file, `Portrait of ${c.name}`, { eager: true, sizes: '(max-width: 860px) 18rem, 23rem' })}</span></a><figcaption>${esc(c.portrait.caption ?? `Portrait of ${c.name}`)}</figcaption></figure>
<div><div class="crumbs"><a href="../composers/index.html">Composers</a> / ${era ? `<a href="../eras/${era.slug}.html">${era.numeral}. ${esc(era.name)}</a>` : ''}</div>
<h1><span class="given">${esc(c.given ?? '')}</span>${esc(c.family ?? c.name)}</h1>
<div class="lifespan"><span>Born <b>${esc(c.born.date ?? c.born.year)}</b>, ${esc(c.born.place)}</span>${c.died ? `<span>Died <b>${esc(c.died.date ?? c.died.year)}</b>, ${esc(c.died.place)}</span>` : ''}</div>
<p class="epithet">${esc(c.epithet)}</p>
${workPills(c)}
${facts ? `<dl class="facts">${facts}</dl>` : ''}
</div></div></section>
<div class="wrap c-body"><nav class="toc" aria-label="On this page"><ol>${toc.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></nav>
<div>${c.quote ? `<blockquote class="prose c-quote"><span>“${esc(c.quote.text)}”</span><footer class="sc">— ${esc(c.quote.source)}</footer></blockquote>` : ''}
${parts.join('\n')}
${furtherReading(ctx, c.slug)}${citePage(ctx, c.name)}
<nav class="pager">${prev ? `<a href="${prev.slug}.html"><span class="sc">← Earlier</span><span class="nm">${esc(prev.name)}</span></a>` : '<span></span>'}${next ? `<a href="${next.slug}.html"><span class="sc">Later →</span><span class="nm">${esc(next.name)}</span></a>` : ''}</nav>
</div></div>`;
  return layout(ctx, {
    title: `${c.name} (${lifespan(c)}) — Contrapunctus`, description: c.epithet, body, dark: true,
    accent: era?.accent, nav: 'composers', ogImage: art[normalizeTitle(c.portrait.file)]?.src,
  });
}

function eraPage(e) {
  const ctx = { base: '../', page: `eras/${e.slug}` };
  const list = composers.filter((c) => c.era === e.slug);
  const parts = [];
  const add = (id, t, inner, sub) => parts.push(chapter(id, t, inner, sub));
  add('essay', 'The Story', `<div class="prose">${rich(ctx, e.essay)}</div>`);
  if (e.glossary?.length) add('terms', 'Terms of Art', `<div class="glossary">${e.glossary.map((g) => `<div class="reveal"><h4>${esc(g.term)}</h4>${rich(ctx, g.html)}</div>`).join('')}</div>`);
  if (e.score?.length) add('score', 'In the Score', scores(ctx, e.score));
  if (e.arts?.length) add('arts', 'Sister Arts', arts(ctx, e.arts));
  add('composers', 'Composers', `<div class="composer-grid">${list.map((c) => card(ctx, c)).join('')}</div>`);
  const unhosted = list.filter((c) => !composerWorks(c).length && elsewhereBy.get(c.slug));
  if (unhosted.length) add('elsewhere', 'Where to hear this music', `<div class="era-elsewhere">${unhosted.map((c) => `<section><h3><a href="../composers/${c.slug}.html">${esc(c.name)}</a></h3>${elsewhereSection(ctx, { items: elsewhereBy.get(c.slug).items.slice(0, 2) }, { heading: false })}</section>`).join('')}</div><p class="ew-note">These recordings are under copyright, so the Hall cannot play them; the links go to the labels’ and artists’ own uploads and to streaming services.</p>`);
  const i = eras.indexOf(e);
  const prev = eras[i - 1], next = eras[i + 1];
  const h = e.hero;
  const body = `<section class="e-hero" style="--focus:${h.focus ?? '50% 40%'}">${img(ctx, h.file, `${h.artist}, ${h.title}`, { eager: true, sizes: '100vw' })}
<div class="wrap"><div><span class="n">${e.numeral}</span><span class="span">${esc(e.span)}</span><h1>${esc(e.name)}</h1><p class="sub">${esc(e.subtitle)}</p></div>
<p class="hero-caption"><b>${esc(h.artist)}</b><cite>${esc(h.title)}</cite>, ${esc(h.date)}${h.collection ? `<br>${esc(h.collection)}` : ''}</p></div></section>
<div class="wrap">${parts.join('\n')}${furtherReading(ctx, e.slug)}${citePage(ctx, e.name)}
<nav class="pager">${prev ? `<a href="${prev.slug}.html"><span class="sc">← ${prev.numeral}</span><span class="nm">${esc(prev.name)}</span></a>` : '<a href="../origins.html"><span class="sc">← Prelude</span><span class="nm">Before Bach</span></a>'}${next ? `<a href="${next.slug}.html"><span class="sc">${next.numeral} →</span><span class="nm">${esc(next.name)}</span></a>` : '<a href="../timeline.html"><span class="sc">Coda →</span><span class="nm">Lifelines</span></a>'}</nav></div>`;
  return layout(ctx, { title: `${e.numeral}. ${e.name} (${e.span}) — Contrapunctus`, description: e.subtitle, body, dark: true, accent: e.accent, nav: 'eras', ogImage: art[normalizeTitle(e.hero.file)]?.src });
}

/** The curated Hall programmes that survive the publication gate, with their running times. */
function liveProgrammes() {
  return PROGRAMMES.map((p) => {
    const tracks = p.tracks.filter((id) => progById.has(id));
    for (const id of p.tracks) if (!progById.has(id)) warnings.push(`programme ${p.id}: ${id} is not published`);
    return { ...p, tracks, duration: tracks.reduce((a, id) => a + (progById.get(id).duration ?? 0), 0) };
  }).filter((p) => p.tracks.length >= 3);
}

function indexPage() {
  const ctx = { base: '', page: 'index' };
  const slides = site.heroSlides.map((s, i) => `<div class="hero-slide${i === 0 ? ' on' : ''}" style="--origin:${s.focus ?? '50% 40%'}" data-caption="${attr(`<b>${s.kicker}</b><cite>${esc(s.title)}</cite> — ${esc(s.artist)}, ${esc(s.date)}`)}">${i === 0 ? img(ctx, s.file, `${s.artist}, ${s.title}`, { eager: true, sizes: '100vw' }) : img(ctx, s.file, `${s.artist}, ${s.title}`, { sizes: '100vw' }).replace(/ (srcset|src)="/g, ' data-$1="')}</div>`).join('');  // later slides load just before they are shown
  const movements = eras.map((e) => {
    const list = composers.filter((c) => c.era === e.slug);
    return `<article class="movement" style="--accent:${e.accent}"><div class="movement-art">${painting(ctx, { ...e.hero }, { sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
<div class="reveal"><span class="movement-num">${e.numeral}</span><span class="movement-span">${esc(e.span)}</span><h3><a href="eras/${e.slug}.html">${esc(e.name)}</a></h3><div class="precis">${rich(ctx, e.precis)}</div>
<ul class="roster">${list.map((c) => `<li><a href="composers/${c.slug}.html">${esc(c.short)}</a></li>`).join('')}</ul>
<a class="more" href="eras/${e.slug}.html">Read the chapter</a></div></article>`;
  }).join('\n');
  const concert = PROG.filter((t) => t.concert !== false);
  const programmes = liveProgrammes();
  const programmeBand = programmes.length ? `<section class="section night programmes-band" id="programmes"><div class="wrap"><div class="section-head"><span class="kicker">Tonight in the Hall</span><h2>${esc(site.programmesTitle)}</h2><p>${rich(ctx, site.programmesLede)}</p></div>
<div class="programme-cards">${programmes.map((p) => `<a class="programme-card" href="hall.html#programme-${attr(p.id)}"><span class="pc-meta">${p.tracks.length} pieces · ${hours(p.duration)}</span><h3>${esc(p.title)}</h3><p class="pc-sub">${esc(p.subtitle)}</p><p>${esc(p.note)}</p><span class="pc-go">Play this programme →</span></a>`).join('')}</div></div></section>` : '';
  const body = `<section class="hero"><div class="hero-slides">${slides}</div>
<div class="wrap hero-inner"><div><h1 class="hero-title">Contrapunctus</h1><p class="hero-sub"><span class="sc">${esc(site.kicker)}</span>${esc(site.tagline)}</p>
<div class="hero-doors"><a class="enter-hall" href="hall.html"><span class="eh-k">The Concert Hall</span><span class="eh-t">Enter and listen</span><span class="eh-s">${concert.length} recordings, ${hours(concert.reduce((a, t) => a + (t.duration || 0), 0))} of music, with notes as it plays</span></a><a class="enter-hall enter-web" href="influence.html"><span class="eh-k">The Web of Influence</span><span class="eh-t">Follow the threads</span><span class="eh-s">${INFLUENCE_EDGES} sourced connections · hear what was borrowed</span></a><a class="hero-browse" href="#programmes">Or choose a concert ↓</a><a class="hero-browse" href="hall.html#surprise">Or surprise me</a></div></div>
<div><p class="hero-caption" aria-live="polite"></p><div class="hero-dots">${site.heroSlides.map((_, i) => `<button type="button" aria-label="Painting ${i + 1}"${i === 0 ? ' class="on"' : ''}></button>`).join('')}</div></div></div>
<a class="scroll-cue" href="#prelude">Begin ↓</a></section>
<section class="section" id="prelude"><div class="wrap"><div class="section-head"><span class="kicker">Prelude</span><h2>${esc(site.preludeTitle)}</h2></div>
<div class="prose">${rich(ctx, site.prelude)}</div></div></section>
${programmeBand}
${journeys.band(ctx)}
<section class="section" id="movements"><div class="wrap"><div class="section-head"><span class="kicker">Seven movements</span><h2>${esc(site.erasTitle)}</h2><p>${rich(ctx, site.erasLede)}</p></div>
<div class="movements">${movements}</div></div></section>
<section class="section night"><div class="wrap"><div class="section-head"><span class="kicker">Lifelines</span><h2>Who overlapped with whom</h2><p>${rich(ctx, site.lifelinesLede)}</p></div>
<div class="tl-wrap">${timelineSvg(ctx, { compact: true, dark: true })}</div><p style="margin-top:1.6rem"><a class="more" style="color:var(--gold-hi)" href="timeline.html">The full timeline, with history and painting alongside →</a></p></div></section>
<section class="section"><div class="wrap atlas-pair">
<div class="reveal"><span class="kicker">Before Bach</span><h2 style="margin:.8rem 0 1rem"><a href="origins.html" style="text-decoration:none">Origins</a></h2><p>${rich(ctx, pages.origins?.lede ?? '')}</p><a class="more" href="origins.html" style="font:600 .86rem var(--caps);letter-spacing:.18em;color:var(--accent)">Begin with the monochord →</a></div>
<div class="reveal"><span class="kicker">How it works</span><h2 style="margin:.8rem 0 1rem"><a href="workshop.html" style="text-decoration:none">The Workshop</a></h2><p>${rich(ctx, pages.workshop?.lede ?? '')}</p><a class="more" href="workshop.html" style="font:600 .86rem var(--caps);letter-spacing:.18em;color:var(--accent)">Open the workshop →</a></div>
</div></section>`;
  return layout(ctx, { title: `Contrapunctus — ${site.kicker}`, body, dark: true, nav: '', ogImage: art[normalizeTitle(site.heroSlides[0].file)]?.src, head: journeys.head });
}

function composersIndex() {
  const ctx = { base: '../', page: 'composers/index' };
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">The atlas</span><h1>Composers</h1><p class="lede">${composers.length} composer${composers.length === 1 ? '' : 's'} in seven chapters, ordered by year of birth. Or browse <a href="../works/index.html">every work in the Concert Hall</a>.</p></div><span class="bg-glyph" aria-hidden="true">𝄢</span></header>
<div class="wrap section">${eras.map((e) => `<section class="era-group" style="--accent:${e.accent}"><header><span class="n">${e.numeral}</span><h3><a href="../eras/${e.slug}.html">${esc(e.name)}</a></h3><span class="sc">${esc(e.span)}</span></header><div class="composer-grid">${composers.filter((c) => c.era === e.slug).map((c) => card(ctx, c)).join('')}</div></section>`).join('')}</div>`;
  return layout(ctx, { title: 'Composers — Contrapunctus', body, nav: 'composers' });
}

function longPage(p) {
  const ctx = { base: '', page: p.slug };
  const hear = (l) => {
    const pointers = (l.listen ?? []).filter((x) => listenById.has(x.id));
    return pointers.length ? `<ul class="lesson-hear">${pointers.map((x) => `<li>${hearButton(x.id, x.t)}<p>${rich(ctx, x.why ?? '')} <a href="${ctx.base}${workOf.has(x.id) ? `works/${workOf.get(x.id)}.html` : `hall.html#${x.id}`}">${esc(listenById.get(x.id).work)}</a></p></li>`).join('')}</ul>` : '';
  };
  const lessons = p.lessons.map((l) => `<section class="lesson chapter" id="${l.id}"><div class="n">${esc(l.numeral ?? '')}<small>${esc(l.label ?? '')}</small></div><div>
<h2 class="reveal">${esc(l.heading)}</h2>${l.question ? `<p class="lesson-question">${esc(l.question)}</p>` : ''}<div class="prose">${rich(ctx, l.html)}</div>${scores({ ...ctx, scorePrefix: l.id }, l.score)}${l.arts?.length ? `<div style="margin-top:3rem">${arts(ctx, l.arts)}</div>` : ''}${hear(l)}</div></section>`).join('\n');
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">${esc(p.kicker)}</span><h1>${esc(p.title)}</h1><div class="lede">${rich(ctx, p.lede)}</div></div><span class="bg-glyph" aria-hidden="true">${p.glyph ?? '𝄐'}</span></header>
<div class="wrap"><nav class="chapter-map" aria-label="Contents">${p.lessons.map((l) => `<a href="#${l.id}"><span>${esc(l.numeral ?? '')}</span> ${esc(l.label || l.heading)}</a>`).join('')}</nav>${lessons}${p.slug === 'workshop' ? joinsSection(ctx) : ''}${furtherReading(ctx, p.slug)}${citePage(ctx, p.title)}</div>`;
  return layout(ctx, { title: `${p.title} — Contrapunctus`, description: plain(p.lede), body, accent: p.accent, nav: p.slug });
}

// Every work in the Hall, by chapter and composer. Radio chips filter by forces in CSS alone (style.css .works-index).
const FORCE_KINDS = [
  ['orchestra', 'Orchestra', /orchestra|symphon|\bband\b/i],
  ['keyboard', 'Piano and keyboard', /piano|harpsichord|keyboard|organ|clavichord/i],
  ['voices', 'Voices', /\b(?:voices?|soprano|alto|contralto|mezzo|tenor|baritone|choir|chorus|singers?|narrator)\b/i],
  ['chamber', 'Chamber music', /quartet|trio|quintet|sextet|octet|\bduo\b|(?:violin|cello|viola|flute|clarinet|oboe) and/i],
];
function worksIndex() {
  const ctx = { base: '../', page: 'works/index' };
  const kinds = (w) => { const f = w.listens.map((l) => l.forces ?? '').join(' '); return FORCE_KINDS.filter(([, , re]) => re.test(f)).map(([k]) => k); };
  const item = (w) => {
    const year = w.entry?.year ?? w.listens[0].year;
    const n = w.listens.length;
    const length = w.duration ? fmtTime(w.duration) : fmtTime(progById.get(w.listens[0].id)?.duration ?? 0);
    return `<li data-k="${kinds(w).join(' ')}"><a href="${attr(w.slug)}.html">${esc(keyless(w.title))}</a><span class="wi-meta">${esc([year, w.listens[0].forces, n > 1 ? `${n} recordings` : length].filter(Boolean).join(' · '))}</span></li>`;
  };
  const total = WORKS.size;
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">The repertoire</span><h1>Every work</h1><p class="lede">${total} pieces in the Concert Hall, by chapter and composer. Each has a page with every recording and every note.</p></div><span class="bg-glyph" aria-hidden="true">𝄞</span></header>
<div class="wrap section works-index">
<fieldset class="wi-filter"><legend class="sc">Show</legend><input type="radio" name="wi" id="wi-all" checked><label for="wi-all">Everything</label>${FORCE_KINDS.map(([k, label]) => `<input type="radio" name="wi" id="wi-${k}"><label for="wi-${k}">${esc(label)}</label>`).join('')}</fieldset>
${eras.map((e) => {
  const cs = composers.filter((c) => c.era === e.slug && composerWorks(c).length);
  return cs.length ? `<section class="wi-era" style="--accent:${e.accent}"><h2><span class="n">${e.numeral}</span>${esc(e.name)}</h2>${cs.map((c) => `<div class="wi-composer"><h3><a href="../composers/${c.slug}.html">${esc(c.name)}</a><span>${lifespan(c)}</span></h3><ul>${composerWorks(c).map(item).join('')}</ul></div>`).join('')}</section>` : '';
}).join('')}
</div>`;
  return layout(ctx, { title: 'Every work — Contrapunctus', description: `${total} pieces in the Concert Hall, each with every recording and every note.`, body, nav: 'composers' });
}

function workPage(w) {
  const ctx = { base: '../', page: `works/${w.slug}` };
  const c = w.composer, era = eraBySlug.get(c.era), entry = w.entry;
  const ids = new Set(w.listens.map((l) => l.id));
  const first = w.listens.find((l) => l.concert !== false) ?? w.listens[0];
  const portrait = rendition(art[normalizeTitle(c.portrait.file)]?.src ?? null, 160);
  const meta = [entry?.year ?? first.year, entry?.cat, entry?.forces ?? first.forces].filter(Boolean).join(' · ');
  const recording = (l) => {
    const t = progById.get(l.id);
    return `<li class="w-rec"><div class="w-rec-head">${hearButton(l.id, 0, 'Play')}<div><span class="w-mv">${esc(l.movement || l.work)}</span><span class="w-perf">${esc([l.performers, l.recorded].filter(Boolean).join(' · '))}</span></div><span class="w-dur">${fmtTime(t?.duration ?? 0)}</span></div>${l.intro ? `<p class="w-intro">${rich(ctx, l.intro)}</p>` : ''}${notes(l)}<p class="w-hall"><a href="../hall.html#${attr(l.id)}">Open in the Concert Hall${t?.hasSheet ? ', with the score' : ''} →</a></p></li>`;
  };
  const notes = (l) => {
    const cues = (l.cues ?? []).map((q) => ({ ...q, at: anchorTime(l.id, q) })).filter((q) => q.at != null).sort((a, b) => a.at - b.at);
    const joins = (l.transitions ?? []).map((tr) => ({ ...tr, at: anchorTime(l.id, tr.at ?? {}) })).filter((tr) => tr.at != null).sort((a, b) => a.at - b.at);
    if (!cues.length && !joins.length) return '';
    return `<details class="w-notes"><summary>Notes as it plays${joins.length ? ' · how it is joined' : ''}</summary><ol class="w-cues">${cues.map((q) => `<li>${hearButton(l.id, q.at, fmtTime(q.at))}<div><b>${esc(q.title)}</b><p>${rich(ctx, q.text)}</p></div></li>`).join('')}</ol>${joins.length ? `<h4>How it is joined</h4><ol class="w-cues w-joins">${joins.map((tr) => `<li>${hearButton(l.id, Math.max(0, tr.at - 8), fmtTime(tr.at))}<div><b>${esc(tr.title)}</b>${rich(ctx, tr.how)}</div></li>`).join('')}</ol>` : ''}</details>`;
  };
  const concert = w.listens.filter((l) => l.concert !== false), others = w.listens.filter((l) => l.concert === false);
  const comparisons = [...new Map(w.listens.flatMap((l) => compareLinks(l.id)).map((x) => [x.compare, x])).values()];
  const journeyLinks = publishedJourneys.filter((j) => j.stations.some((s) => ids.has(s.listen?.id)));
  const edges = influenceEdges.filter((e) => ids.has(e.exhibit?.from?.listen?.id) || ids.has(e.exhibit?.to?.listen?.id));
  const terms = GLOSSARY.filter((g) => (g.hear ?? []).some((h) => ids.has(h.listen)));
  const related = [
    comparisons.length ? `<div><h3>Other performers</h3><ul>${comparisons.map((x) => `<li><a href="../compare/${attr(x.compare)}.html">${esc(x.label)}</a></li>`).join('')}</ul></div>` : '',
    journeyLinks.length ? `<div><h3>Guided journeys</h3><ul>${journeyLinks.map((j) => `<li><a href="../journeys/${attr(j.id)}.html">${esc(j.title)}</a></li>`).join('')}</ul></div>` : '',
    edges.length ? `<div><h3>Borrowed and handed on</h3><ul>${edges.map((e) => `<li><a href="../influence.html#edge-${attr(e.id)}">${esc(e.title)}</a></li>`).join('')}</ul></div>` : '',
    terms.length ? `<div><h3>Terms you can hear here</h3><ul>${terms.map((g) => `<li><a href="../glossary.html#${attr(g.slug)}">${esc(g.term)}</a></li>`).join('')}</ul></div>` : '',
  ].filter(Boolean).join('');
  const body = `<header class="w-hero" style="--accent:${era?.accent ?? 'var(--gold)'}"><div class="wrap">
<p class="crumbs"><a href="../composers/${c.slug}.html">${portrait ? `<img src="../${portrait}" alt="" width="40" height="40" loading="lazy" style="object-position:${c.portrait.focus ?? '50% 25%'}">` : ''}${esc(c.name)}</a>${era ? ` / <a href="../eras/${era.slug}.html">${era.numeral}. ${esc(era.name)}</a>` : ''}</p>
<h1>${entry?.titleHtml ?? esc(keyless(w.title))}</h1>${meta ? `<p class="w-meta">${esc(meta)}</p>` : ''}
${entry?.note ? `<div class="w-lede">${rich(ctx, entry.note)}</div>` : ''}
${concert.length ? `<p class="w-play">${hearButton(concert[0].id, 0, concert.length > 1 ? 'Play from the beginning' : 'Play')} <span>${concert.length > 1 ? `${concert.length} recordings · ` : ''}${hours(w.duration)}</span></p>` : ''}
</div></header>
<div class="wrap w-body">
${concert.length ? `<section class="chapter" id="recordings"><header><h2>${concert.length > 1 ? 'In the Hall' : 'The recording'}</h2></header><ol class="w-recs">${concert.map(recording).join('')}</ol></section>` : ''}
${others.length ? `<section class="chapter" id="other-recordings"><header><h2>${concert.length ? 'Other performances' : 'Recordings'}</h2><p>Historical and comparison recordings, outside the concert’s running order.</p></header><ol class="w-recs">${others.map(recording).join('')}</ol></section>` : ''}
${related ? `<section class="chapter w-related" id="related"><header><h2>Around this piece</h2></header><div class="w-related-grid">${related}</div></section>` : ''}
<p class="w-back"><a href="../composers/${c.slug}.html#works">More by ${esc(c.short)} →</a></p>
</div>`;
  return layout(ctx, { title: `${plain(keyless(w.title))} · ${c.name} — Contrapunctus`, description: plain(entry?.note ?? first.intro ?? `${c.name}: ${w.title}`), body, dark: true, accent: era?.accent, nav: 'works', ogImage: art[normalizeTitle(c.portrait.file)]?.src });
}

function aboutPage() {
  const ctx = { base: '', page: 'about' };
  const concert = PROG.filter((t) => t.concert !== false);
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">Colophon</span><h1>About Contrapunctus</h1><div class="lede">${rich(ctx, site.about.lede)}</div></div><span class="bg-glyph" aria-hidden="true">𝄐</span></header>
<div class="wrap section"><div class="prose about">${rich(ctx, site.about.html)}
<h3><span class="sc">In numbers</span>What is here</h3>
<ul><li>${composers.length} composers in seven chapters, and ${precursors.length} before Bach.</li><li>${concert.length} recordings in the Concert Hall (${hours(concert.reduce((a, t) => a + (t.duration || 0), 0))}), ${PROG.length - concert.length} more for comparing performers.</li><li>${WORKS.size} works with their own pages, ${PROG.filter((t) => t.hasSheet).length} of them with the score following the recording.</li><li>${INFLUENCE_EDGES} sourced connections in the Web of Influence; ${GLOSSARY.length} terms in the glossary.</li></ul>
${rich(ctx, site.about.coda)}</div></div>`;
  return layout(ctx, { title: 'About — Contrapunctus', description: plain(site.about.lede), body, nav: '' });
}

function timelineSvg(ctx, { compact = false } = {}) {
  const y0 = 1640, y1 = 2030, W = 1400, left = 20, right = 20;
  const x = (y) => left + ((y - y0) / (y1 - y0)) * (W - left - right);
  const rowH = compact ? 15 : 21;
  const thisYear = 2026;
  const charW = 6.1; // approximate advance of 12–13px Garamond

  // Events: greedy row packing so labels never collide.
  const laneTop = 44, laneH = 19;
  const lanes = [];
  const placed = compact ? [] : [...(site.events ?? [])].sort((a, b) => a.year - b.year).map((ev) => {
    const ex = x(ev.year);
    const text = `${ev.year} ${ev.label}`;
    const w = text.length * charW + 14;
    let lane = lanes.findIndex((end) => end < ex - 4);
    if (lane === -1) { lane = lanes.length; lanes.push(0); }
    lanes[lane] = ex + w;
    return { ev, ex, text, lane };
  });
  const top = compact ? 34 : laneTop + lanes.length * laneH + 22;
  const H = top + composers.length * rowH + 16;

  const rows = composers.map((c, i) => {
    const e = eraBySlug.get(c.era);
    const a = x(c.born.year), b = x(c.died?.year ?? thisYear);
    const yy = top + i * rowH;
    const living = !c.died;
    const label = `${esc(c.name)} <tspan class="yr">${lifespan(c)}</tspan>`;
    const labelW = (c.name.length + lifespan(c).length + 1) * charW + 10;
    const after = b + 6 + labelW < W - 4;
    return `<a class="life" href="${ctx.base}composers/${c.slug}.html"><title>${esc(c.name)}, ${lifespan(c)}</title><rect x="${a.toFixed(1)}" y="${yy}" width="${(b - a).toFixed(1)}" height="${rowH - 6}" rx="1" fill="${e?.accent ?? '#888'}" opacity=".8"${living ? ` mask="url(#fade)"` : ''}/><text x="${(after ? b + 6 : a - 6).toFixed(1)}" y="${yy + rowH - 9}"${after ? '' : ' text-anchor="end"'}>${label}</text></a>`;
  }).join('');

  const grid = [];
  for (let y = 1650; y <= 2025; y += 25) grid.push(`<line x1="${x(y)}" x2="${x(y)}" y1="22" y2="${H}" opacity="${y % 50 ? .35 : .9}"/>${y % 50 ? '' : `<text x="${x(y) + 4}" y="16">${y}</text>`}`);
  const events = placed.map(({ ev, ex, text, lane }) => {
    const ly = laneTop + lane * laneH;
    return `<g class="${ev.kind === 'art' ? 'event art-event' : 'event'}"><line x1="${ex}" x2="${ex}" y1="${ly + 4}" y2="${H}"/><circle cx="${ex}" cy="${ly}" r="3"/><text x="${ex + 6}" y="${ly + 4}">${esc(text)}</text></g>`;
  }).join('');
  return `<svg class="tl${compact ? ' compact' : ''}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Lifespans of composers, 1640 to the present"><defs><linearGradient id="fadeg"><stop offset=".8" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="fade" maskContentUnits="objectBoundingBox"><rect width="1" height="1" fill="url(#fadeg)"/></mask></defs><g class="grid">${grid.join('')}</g>${events}${rows}</svg>`;
}

const eraLegend = () => `<ul class="tl-legend">${eras.map((e) => `<li><span style="background:${e.accent}"></span><a href="eras/${e.slug}.html">${e.numeral}. ${esc(e.name)}</a></li>`).join('')}</ul>`;

function timelinePage() {
  const ctx = { base: '', page: 'timeline' };
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">Coda</span><h1>Lifelines</h1><p class="lede">${rich(ctx, site.timelineLede ?? '')}</p></div><span class="bg-glyph" aria-hidden="true">𝄇</span></header>
<div class="section"><div class="wrap">${eraLegend()}<div class="tl-wrap">${timelineSvg(ctx)}</div><p style="font-size:.95rem;color:var(--muted);margin-top:1rem">Red markers: historical events. Gold markers: painting, literature and theatre. Bars are coloured by chapter; click a name to open the portrait.</p></div></div>`;
  return layout(ctx, { title: 'Lifelines — Contrapunctus', body, nav: 'timeline' });
}

function allArt() {
  const list = [];
  const seen = new Set();
  const push = (a, ownerHtml) => {
    const key = a.file ? normalizeTitle(a.file) : `${a.type}:${a.author}:${a.title}`;
    if ((!a.file && !['poem', 'text'].includes(a.type)) || seen.has(key)) return;
    seen.add(key);
    list.push({ a, ownerHtml, id: `art-${createHash('sha1').update(key).digest('hex').slice(0, 12)}` });
  };
  for (const e of eras) { push(e.hero, `<a href="eras/${e.slug}.html">${e.numeral}. ${esc(e.name)}</a>`); (e.arts ?? []).forEach((a) => push(a, `<a href="eras/${e.slug}.html">${e.numeral}. ${esc(e.name)}</a>`)); }
  for (const c of composers) (c.arts ?? []).forEach((a) => push(a, `<a href="composers/${c.slug}.html">${esc(c.name)}</a>`));
  for (const p of Object.values(pages)) for (const l of p.lessons ?? []) (l.arts ?? []).forEach((a) => push(a, `<a href="${p.slug}.html#${l.id}">${esc(p.title)}</a>`));
  return list;
}

function galleryPage() {
  const ctx = { base: '', page: 'gallery' };
  const items = allArt().map(({ a, ownerHtml, id }) => `<div class="gallery-object" id="${id}">${['poem', 'text'].includes(a.type) ? `${poem(ctx, a)}<p class="gallery-owner">Read beside ${ownerHtml}</p>` : painting(ctx, a, { sizes: '(max-width: 700px) 100vw, 33vw', thumb: true }).replace('</figcaption>', `<span class="for">Hung beside ${ownerHtml}</span></figcaption>`)}</div>`).join('');
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">The salon</span><h1>Sister Arts</h1><p class="lede">${rich(ctx, site.galleryLede ?? '')}</p></div><span class="bg-glyph" aria-hidden="true">𝄋</span></header>
<div class="section wall"><div class="wrap salon">${items}</div></div>`;
  return layout(ctx, { title: 'Sister Arts — Contrapunctus', body, nav: 'gallery' });
}

function creditsPage() {
  const ctx = { base: '', page: 'credits' };
  const rows = Object.entries(art).map(([t, i]) => `<tr><td>${img(ctx, t, '', { thumb: true, sizes: '64px' })}</td><td><a href="${attr(i.page)}">${esc(t.slice(5))}</a><br><span style="color:var(--muted)">${esc(i.artist)}${i.date ? `, ${esc(i.date)}` : ''}</span></td><td>${esc(i.license || 'see source')}</td></tr>`).join('');
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">Provenance</span><h1>Image credits</h1><p class="lede">Every reproduction on this site is taken from Wikimedia Commons, where each file page records its source and copyright status. Thumbnails were re-encoded for the web; follow the links for full-resolution originals.</p></div></header>
<div class="section"><div class="wrap"><table class="credits"><thead><tr><th></th><th>File</th><th>Licence</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
  return layout(ctx, { title: 'Image credits — Contrapunctus', body, nav: '' });
}

function routesPage() {
  const ctx = { base: '', page: 'routes' };
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">Listen first</span><h1>Listening routes</h1><p class="lede">Follow a returning melody, an independent voice or a change of instrument. Each button starts the recording without leaving the page.</p></div></header><div class="wrap section">${routes.map((r) => `<section class="route" id="${r.id}"><h2>${esc(r.title)}</h2><p>${esc(r.intro)}</p><ol>${r.tracks.filter((t) => listenById.has(t.id)).map((t) => { const l = listenById.get(t.id); return `<li><h3><a href="hall.html#${l.id}">${esc(bySlug.get(l.composer)?.name)} · ${esc(l.work)}</a></h3>${l.movement ? `<p>${esc(l.movement)}</p>` : ''}${t.why ? `<p>${esc(t.why)}</p>` : ''}${hearButton(t.id, 0, 'Play recording')}</li>`; }).join('')}</ol></section>`).join('')}</div>`;
  return layout(ctx, { title: 'Listening routes — Contrapunctus', body });
}

function anchorTime(id, anchor) {
  if (!anchor.bar) return Number.isFinite(anchor.t) ? anchor.t : null;
  return scoreIndex.get(id)?.bars?.find((b) => String(b.n) === String(anchor.bar.n) && b.occ === (anchor.bar.occ ?? 1))?.t ?? null;
}

function joinsSection(ctx) {
  const examples = listens.flatMap((l) => (l.transitions ?? []).slice(0, 1).map((tr) => ({ l, tr, t: anchorTime(l.id, tr.at ?? {}) }))).filter((x) => x.t != null).slice(0, 4);
  return `<section class="apparatus" id="joins"><span class="kicker">At the boundary</span><h2>How pieces are joined</h2><p>A cadence can close a section; a held bass note, a sequence or a shared motif can carry the music into the next. Four joins from the Hall, each with the passage to hear:</p><div class="join-examples">${examples.map(({ l, tr, t }) => `<article><h3>${esc(tr.title)}</h3><p class="sc">${esc(l.work)} · ${esc(tr.from)} → ${esc(tr.to)}</p>${rich(ctx, tr.how)}${hearButton(l.id, Math.max(0, t - 8), 'Hear the join')} <a href="${workOf.has(l.id) ? `works/${workOf.get(l.id)}.html` : `hall.html#${l.id}`}">More on this piece</a><p class="timing-note">${esc(tr.evidence ?? '')}</p></article>`).join('')}</div></section>`;
}

function glossaryPage() {
  const ctx = { base: '', page: 'glossary', termSeen: new Set(GLOSSARY.map((g) => g.slug)) };
  const entries = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term, 'en'));
  const kinds = [...new Set(entries.map((g) => g.kind))].sort();
  if (!entries.length) return layout(ctx, { title: 'Glossary — Contrapunctus', nav: 'glossary', body: `<header class="page-hero"><div class="wrap"><span class="kicker">A listening vocabulary</span><h1>Glossary</h1><p class="lede">This edition has no glossary entries. The <a href="workshop.html">Workshop</a> explains musical techniques with notation and listening examples.</p></div></header>` });
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">A listening vocabulary</span><h1>Glossary</h1><p class="lede">Every term, defined in plain words, and wherever we can, played: press Hear it for an example from the recordings.</p></div></header><div class="wrap section"><div class="glossary-controls"><label for="glossary-kind">Show a kind of term</label><select id="glossary-kind"><option value="">All kinds</option>${kinds.map((k) => `<option value="${attr(k)}">${esc(k)}</option>`).join('')}</select><p id="glossary-count" role="status">${entries.length} terms</p></div><nav class="glossary-alphabet" aria-label="Glossary alphabet">${[...new Set(entries.map((g) => g.term[0].toLocaleUpperCase('en')))].map((letter) => `<a href="#${entries.find((g) => g.term[0].toLocaleUpperCase('en') === letter).slug}">${esc(letter)}</a>`).join('')}</nav><div class="glossary-entries">${entries.map((g) => `<article class="glossary-entry" id="${attr(g.slug)}" data-kind="${attr(g.kind)}"><header><span class="kicker">${esc(g.kind)}</span><h2>${esc(g.term)}</h2>${g.aka?.length ? `<p class="aliases">Also: ${g.aka.map(esc).join('; ')}</p>` : ''}</header><p class="definition">${esc(g.short)}</p>${rich(ctx, g.html)}${(g.hear ?? []).map((h) => {
    const t = anchorTime(h.listen, h), l = listenById.get(h.listen), score = scoreIndex.get(h.listen);
    if (!l) return '';
    return `<div class="term-hear">${t != null ? hearButton(h.listen, t, 'Hear it') : `<a href="hall.html#${h.listen}">Open recording</a>`}<p>${esc(h.note)} <a href="${workOf.has(h.listen) ? `works/${workOf.get(h.listen)}.html` : `hall.html#${h.listen}`}">${esc(l.work)}</a>${h.bar && t != null ? `<small>Bar ${esc(h.bar.n)}${score?.status === 'reviewed' ? '' : ' · timed automatically'}</small>` : ''}</p></div>`;
  }).join('')}${g.see?.length ? `<p class="see-also">See also: ${g.see.filter((slug) => GLOSSARY.some((x) => x.slug === slug)).map((slug) => `<a href="#${slug}">${esc(GLOSSARY.find((x) => x.slug === slug).term)}</a>`).join(' · ')}</p>` : ''}</article>`).join('')}</div></div>`;
  return layout(ctx, { title: 'Glossary — Contrapunctus', body, nav: 'glossary' });
}

function searchIndex() {
  const entries = [];
  const add = (type, title, sub, url, extra = '') => entries.push({ type, title: plain(title), sub: plain(sub), url, k: fold(`${title} ${sub} ${extra}`) });
  for (const c of composers) {
    add('composer', c.name, `${lifespan(c)} · ${eraBySlug.get(c.era)?.name}`, `composers/${c.slug}.html`, c.epithet);
    (c.works ?? []).forEach((w, i) => add('work', w.title, `${c.name} · ${w.cat ?? ''} · ${w.year}`, workOfEntry.has(w) ? `works/${workOfEntry.get(w)}.html` : `composers/${c.slug}.html#work-${i + 1}`, `${w.forces ?? ''} ${w.note ?? ''}`));
  }
  for (const e of eras) add('era', e.name, e.span, `eras/${e.slug}.html`, e.subtitle);
  for (const l of listens) add('recording', `${bySlug.get(l.composer)?.name ?? l.guest?.name ?? ''} · ${l.work}`, `${l.movement ?? ''} · ${l.performers}`, workOf.has(l.id) ? `works/${workOf.get(l.id)}.html` : `hall.html#${l.id}`, l.key);
  for (const w of WORKS.values()) if (!w.entry) add('work', keyless(w.title), `${w.composer.name} · in the Concert Hall`, `works/${w.slug}.html`);
  for (const p of liveProgrammes()) add('programme', p.title, `A concert in the Hall · ${hours(p.duration)}`, `hall.html#programme-${p.id}`, `${p.subtitle} ${p.note}`);
  add('page', 'About Contrapunctus', 'What this is, how it is made, and how to correct it', 'about.html');
  add('page', 'Every work', 'Every piece in the Concert Hall, by composer, filterable by forces', 'works/index.html');
  for (const p of Object.values(pages)) for (const l of p.lessons ?? []) add('lesson', l.heading, p.title, `${p.slug}.html#${l.id}`, `${l.label} ${l.question ?? ''}`);
  for (const g of GLOSSARY) add('glossary', g.term, g.short, `glossary.html#${g.slug}`, `${(g.aka ?? []).join(' ')} ${g.kind}`);
  for (const { a, id } of allArt()) add(['poem', 'text'].includes(a.type) ? 'poem' : 'painting', a.title, `${a.author ?? a.artist} · ${a.date ?? ''}`, `gallery.html#${id}`, a.note ?? '');
  for (const r of returnLabs) add('return-lab', r.title, 'Return Lab · compare two passages', `return-lab/${r.id}.html`);
  for (const r of routes) add('route', r.title, r.intro, `routes.html#${r.id}`);
  add('return-lab', 'The Return Lab', 'Compare returning passages in the same recording', 'return-lab/index.html');
  add('page', 'The Web of Influence', 'Composers, paintings, poems and the evidence connecting them', 'influence.html');
  add('page', 'Compare performers', 'Switch performers at the same musical moment', 'compare/index.html');
  for (const c of comparisonSearch) add('comparison', c.title, `${c.composer} · ${c.work}`, `compare/${c.id}.html`, c.question);
  for (const lesson of guideLessons) add('guide', lesson.title, lesson.promise, `guide.html#${lesson.id}`, `${lesson.feature} tour show me`);
  const figures = new Map(composers.map((c) => [c.slug, { id: c.slug, name: c.name, dates: lifespan(c), kind: 'composer' }]));
  const edges = new Map(), threads = new Map();
  for (const batch of influenceBatches) {
    if (Array.isArray(batch)) { for (const thread of batch) threads.set(thread.id, thread); continue; }
    for (const figure of batch.figures ?? []) figures.set(figure.id, figure);
    for (const edge of batch.edges ?? []) edges.set(edge.id, edge);
  }
  for (const edge of edges.values()) add('influence', edge.title, `${figures.get(edge.from)?.name ?? edge.from} → ${figures.get(edge.to)?.name ?? edge.to} · ${edge.status}`, `influence.html#edge-${edge.id}`, `${edge.claim} ${Object.values(edge.works ?? {}).join(' ')} ${edge.thread ?? ''}`);
  for (const thread of threads.values()) add('thread', thread.name, thread.summary, `influence.html#thread-${thread.id}`);
  if (edges.size) for (const figure of figures.values()) add('figure', figure.name, `${figure.kind} · ${figure.dates ?? ''}`, `influence.html#node-${figure.id}`);
  add('page', 'Sources & method', 'Dossiers, evidence, recording register, scores, downloads and citation', 'sources.html');
  return entries;
}

// Lossless substring/prefix search: front-coded vocabulary and delta-coded postings.
// Flags: 1 = searchable text token, 2 = first title token. Display rows are fetched
// only for the best 24 matches, in small shards; prose never enters the hot search loop.
async function writeSearchIndex() {
  const entries = searchIndex(), words = new Map(), size = 16;
  entries.forEach((e, id) => {
    const tokens = new Set(e.k.split(/\s+/).filter(Boolean));
    const title = e.title.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().split(/\s+/)[0];
    for (const word of new Set([...tokens, title])) {
      if (!word) continue;
      if (!words.has(word)) words.set(word, []);
      words.get(word).push([id, (tokens.has(word) ? 1 : 0) | (word === title ? 2 : 0)]);
    }
  });
  const w = [], p = [];
  let previous = '';
  for (const [word, postings] of [...words].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)) {
    let prefix = 0;
    while (prefix < word.length && prefix < previous.length && word[prefix] === previous[prefix]) prefix++;
    w.push(String.fromCodePoint(prefix + 32) + word.slice(prefix));
    previous = word;
    let last = 0;
    p.push(postings.map(([id, flags]) => { const delta = id - last; last = id; return String.fromCodePoint(delta * 4 + flags + 32); }).join(''));
  }
  const v = createHash('md5').update(JSON.stringify(entries)).digest('hex').slice(0, 8);
  const b = entries.map((e) => e.type === 'composer' ? 2 : e.type === 'recording' ? 1 : 0);
  const previousIndex = await readJsonOr(path.join(OUT, 'assets/search.json'));
  const previousVersion = previousIndex?.v === v ? previousIndex.previous : previousIndex?.v;
  const root = path.join(OUT, 'assets/search'), dir = path.join(root, v);
  await mkdir(dir, { recursive: true });
  for (let i = 0; i < entries.length; i += size) {
    const name = `${i / size}.json`;
    await writeFile(path.join(dir, name), JSON.stringify(entries.slice(i, i + size).map((e) => [e.type, e.title, e.sub, e.url])));
  }
  // Publish the pointer only after every immutable shard is available. Retain one
  // previous generation for open tabs, without accumulating every development build.
  await emit('assets/search.json', JSON.stringify({ v, previous: previousVersion, size, w, p, b }));
  const keep = new Set([v, previousVersion]);
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (entry.isDirectory() && /^[a-f0-9]{8}$/.test(entry.name) && !keep.has(entry.name)) await rm(path.join(root, entry.name), { recursive: true });
    else if (entry.isFile() && /^\d+\.json$/.test(entry.name)) await unlink(path.join(root, entry.name));
  }
}

const fieldValue = (v) => Array.isArray(v) ? v.map(fieldValue).join('; ') : v && typeof v === 'object' ? (v.name ? `${v.name}${v.role ? ` (${v.role})` : ''}` : Object.entries(v).map(([k, x]) => `${k}: ${fieldValue(x)}`).join('; ')) : v == null ? '' : String(v);
const dossierFields = (d) => [d?.work?.version, d?.performers, d?.session?.date, d?.session?.place, d?.carrier?.label, d?.carrier?.catalogue, d?.carrier?.matrixTakeSides, d?.transfer?.credits, d?.transfer?.date, d?.transfer?.processing, d?.rights?.composition, d?.rights?.recording].filter(Boolean);
function evidenceSummary(d) {
  const counts = new Map();
  for (const f of dossierFields(d)) counts.set(f.status, (counts.get(f.status) ?? 0) + 1);
  return [...counts].map(([status, n]) => `${n} ${status}`).join('; ') || 'Unknown — no dossier';
}
function flattenDossier(d, prefix = '', out = {}) {
  for (const [key, value] of Object.entries(d)) {
    const name = prefix ? `${prefix}.${key}` : key;
    if (Array.isArray(value)) out[name] = JSON.stringify(value);
    else if (value && typeof value === 'object') flattenDossier(value, name, out);
    else out[name] = value;
  }
  return out;
}
function recordingRows() {
  return listens.map((l) => ({ id: l.id, composer: bySlug.get(l.composer)?.name ?? l.composer, title: l.work, movement: l.movement ?? '', ...flattenDossier(dossierById.get(l.id) ?? {}), evidence: evidenceSummary(dossierById.get(l.id)) }));
}
function recordingsCsv(rows) {
  const keys = [...new Set(rows.flatMap(Object.keys))];
  const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  return [keys, ...rows.map((r) => keys.map((k) => r[k]))].map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
}
function sourcesPage() {
  const ctx = { base: '', page: 'sources' };
  const showField = (f) => `<span>${esc(fieldValue(f?.value) || (f?.status === 'not applicable' ? 'Not applicable' : 'Unknown'))}</span><small class="evidence-status">${esc(f?.status ?? 'unknown')}</small>`;
  const fields = ['Recording', 'Performers', 'Session date', 'Label / matrix', 'Recording rights', 'Evidence status'];
  const rows = listens.map((l) => {
    const d = dossierById.get(l.id);
    const values = [`${bySlug.get(l.composer)?.name} ${l.work}`, fieldValue(d?.performers?.value), fieldValue(d?.session?.date?.value), `${fieldValue(d?.carrier?.label?.value)} ${fieldValue(d?.carrier?.matrixTakeSides?.value)}`, fieldValue(d?.rights?.recording?.value), evidenceSummary(d)];
    const cells = [`<a href="#dossier-${l.id}">${esc(bySlug.get(l.composer)?.name)} · ${esc(l.work)}</a>${l.movement ? `<small>${esc(l.movement)}</small>` : ''}`, showField(d?.performers), showField(d?.session?.date), `${showField(d?.carrier?.label)}<span class="matrix">${showField(d?.carrier?.matrixTakeSides)}</span>`, showField(d?.rights?.recording), `${esc(evidenceSummary(d))}<br><a href="#dossier-${l.id}">Read the evidence</a>`];
    return `<tr>${cells.map((cell, i) => `<td data-sort="${attr(values[i])}">${cell}</td>`).join('')}</tr>`;
  }).join('');
  const details = listens.map((l) => {
    const d = dossierById.get(l.id), compact = dossierFor(d);
    return `<details class="research-dossier" id="dossier-${l.id}"><summary>${esc(bySlug.get(l.composer)?.name)} · ${esc(l.work)}${l.movement ? ` · ${esc(l.movement)}` : ''}</summary><p><a href="hall.html#${l.id}">Hear this recording in the Hall</a></p>${compact ? `<dl>${compact.fields.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value || 'Unknown')} <span class="evidence-status">${esc(f.statusText)}</span>${f.note ? `<p>${esc(f.note)}</p>` : ''}${f.alts.length ? `<ul>${f.alts.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>` : ''}${f.src.map((n) => `<a href="#source-${l.id}-${n}">[${n}]</a>`).join(' ')}</dd></div>`).join('')}</dl><p>${esc(compact.credit)} ${compact.licenseUrl ? `<a href="${attr(compact.licenseUrl)}">Rights statement</a>` : ''}</p><ol class="dossier-sources">${compact.sources.map((s, i) => `<li id="source-${l.id}-${i + 1}"><a href="${attr(s.url)}">${esc(s.title)}</a>${s.locator ? ` — ${esc(s.locator)}` : ''}. Accessed ${esc(s.accessed)}.</li>`).join('')}</ol>` : '<p>No dossier is available for this recording.</p>'}</details>`;
  }).join('');
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">For researchers</span><h1>Sources &amp; method</h1><p class="lede">Recording provenance, the evidence behind a claim, and the difference between a written bar and a measured time.</p><nav class="chapter-map" aria-label="On this page"><a href="#method">Method</a><a href="#recordings">Recordings</a><a href="#dossiers">Dossiers</a><a href="#scores">Scores</a><a href="#downloads">Downloads</a><a href="#cite">Citation</a></nav></div></header><div class="wrap">
<section class="apparatus" id="method"><h2>How claims are labelled</h2><div class="method-grid"><div><h3>Evidence belongs to each field</h3><dl class="method-terms"><dt>Documented</dt><dd>Stated in a cited source. This identifies the source’s claim; it does not guarantee that the source is right.</dd><dt>Inferred</dt><dd>Estimated from the evidence, not explicitly documented. The note gives the reasoning.</dd><dt>Disputed</dt><dd>Sources disagree. The dossier retains the alternatives and their sources.</dd><dt>Unknown</dt><dd>Not established from the sources consulted. An upload date is not a session date; an uploader is not necessarily a performer or transfer engineer.</dd><dt>Not applicable</dt><dd>The field does not apply. This is not a substitute for ‘unknown’.</dd></dl></div><div><h3>What a cue time means</h3><dl class="method-terms"><dt>score-aligned</dt><dd>A written bar is matched to its performed occurrence in this recording. Repeats are counted separately.</dd><dt>score-proportion</dt><dd>Placement estimated from the score’s proportions. Tempo changes and pauses can move the event away from the estimated time.</dd><dt>audio-feature</dt><dd>A measured feature of this recording, such as a silence or a level change, locates the event. It does not by itself identify a chord or instrument.</dd><dt>documented</dt><dd>A fact from a cited source; it need not identify an audible event at that second.</dd><dt>general</dt><dd>A description of the surrounding stretch, not a claim about one instant.</dd></dl></div></div>
<h3>Provisional alignment</h3><p>A machine has matched score events to the recording; a named listener has not yet checked the published alignment against the score. A provisional bar time is an estimate, not an exact onset. ‘Reviewed’ records a listening check, with its scope and reviewer in the score data. Cue precision distinguishes a moment (about ±2 seconds) from a passage; neither label removes uncertainty in the underlying alignment.</p><p>Rights statements report the sources and their qualifications, not worldwide legal clearance. The composition, edition, performance, recording and digital transfer can have different rights.</p></section>
<section class="apparatus" id="recordings"><h2>The recording register</h2><p>${listens.length} recordings. Select a column heading to sort; select a work to open its dossier. Evidence counts describe individual fields, not a single confidence score for the recording.</p><p class="table-status" role="status"></p><div class="table-scroll" role="region" aria-label="Recording register; scroll horizontally on small screens" tabindex="0"><table class="recording-table"><thead><tr>${fields.map((f, i) => `<th scope="col" aria-sort="none"><button type="button" data-sort-column="${i}">${f}<span aria-hidden="true"> ↕</span></button></th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div></section>
<section class="apparatus" id="downloads"><h2>Download the register</h2><p><a class="textbook-button" href="assets/data/recordings.csv" download>Recordings · CSV</a> <a class="textbook-button" href="assets/data/recordings.json" download>Recordings · JSON</a></p><p>One row per recording. Dotted column names preserve the dossier hierarchy; arrays (performers, source identifiers, alternatives and sources) are JSON-encoded strings. Values, evidence statuses, notes and source locators remain separate. A blank CSV value means no value was recorded, not a negative finding.</p></section>
<section class="apparatus" id="dossiers"><h2>Recording dossiers</h2>${details}</section>
<section class="apparatus" id="scores"><h2>Scores and alignments</h2><p>The alignment files identify the score source, edition, method and review status. The Hall displays the available score views beside the recording.</p><ul class="score-register">${listens.filter((l) => scoreIndex.get(l.id)).map((l) => `<li><a href="hall.html#${l.id}">${esc(bySlug.get(l.composer)?.name)} · ${esc(l.work)}</a> — <a href="assets/data/${l.id}/score.json" download>alignment data</a> <span class="evidence-status">${esc(scoreIndex.get(l.id).status ?? 'provisional')}</span>${scoreIndex.get(l.id).source?.url ? ` · <a href="${attr(scoreIndex.get(l.id).source.url)}">score source</a>` : ''}</li>`).join('')}</ul></section>
${furtherReading(ctx, 'recording-history')}${bibliography.get('performance-practice') ? furtherReading(ctx, 'performance-practice').replace('id="further-reading"', 'id="performance-reading"') : ''}${citePage(ctx, 'Sources & method')}</div>`;
  return layout(ctx, { title: 'Sources & method — Contrapunctus', body, nav: 'sources' });
}

// ---------------------------------------------------------------- listening room
async function resolveStreams() {
  const { sourceInfo } = await import('../tools/commons.mjs');
  const file = path.join(ROOT, 'content/audio.json');
  let cache = {};
  try { cache = JSON.parse(await readFile(file, 'utf8')); } catch {}
  for (const l of listens) {
    const key = sourceKey(l.source);
    if (cache[key]) continue;
    const i = await sourceInfo(l.source);
    if (!i?.stream) { warnings.push(`listen/${l.id}: no stream for ${key}`); continue; }
    cache[key] = { stream: i.stream, page: i.page, license: i.license, artist: i.artist, duration: i.duration };
  }
  const live = new Set(listens.map((l) => sourceKey(l.source)));
  const sorted = Object.fromEntries(Object.entries(cache).filter(([k]) => live.has(k)).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(file, JSON.stringify(sorted, null, 1) + '\n');
  return sorted;
}

function background(ctx, c) {
  const paras = [...(c.life ?? '').matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].slice(0, 2).map((m) => `<p>${rich(ctx, m[1])}</p>`);
  return paras.join('');
}

const STATUS_TEXT = {
  documented: 'Documented', inferred: 'Inferred, not documented', disputed: 'Disputed: sources disagree',
  unknown: 'Unknown', 'not applicable': 'Not applicable',
};
async function readJsonOr(file, d = null) { try { return JSON.parse(await readFile(file, 'utf8')); } catch { return d; } }

/** A compact dossier for the hall: each field keeps its evidence status and sources. */
function dossierFor(d) {
  if (!d) return null;
  const val = (v) => (Array.isArray(v) ? v.map((x) => (typeof x === 'object' ? [x.name, x.role ? `(${x.role})` : ''].filter(Boolean).join(' ') : x)).join(', ') : v && typeof v === 'object' ? Object.values(v).filter(Boolean).join(' · ') : v ?? '');
  const field = (label, f) => f && { label, value: val(f.value), status: f.status, statusText: STATUS_TEXT[f.status] ?? '', note: f.note ?? '', alts: (f.alternatives ?? []).map((a) => val(a.value)), src: (f.sourceIds ?? []).map((id) => d.sources.findIndex((x) => x.id === id) + 1).filter((n) => n > 0) };
  return {
    fields: [
      field('Performers', d.performers), field('Work version', d.work?.version), field('Recorded', d.session?.date), field('Place', d.session?.place),
      field('Label', d.carrier?.label), field('Catalogue', d.carrier?.catalogue), field('Matrix, take, sides', d.carrier?.matrixTakeSides),
      field('Transfer', d.transfer?.credits), field('Transfer date', d.transfer?.date), field('Processing', d.transfer?.processing),
      field('Composition rights', d.rights?.composition), field('Recording rights', d.rights?.recording),
    ].filter((f) => f && (f.value || f.status !== 'not applicable')),
    credit: d.rights?.creditLine ?? '', licenseUrl: d.rights?.licenseUrl ?? '',
    sources: (d.sources ?? []).map((x) => ({ title: x.title ?? x.url, url: x.url, locator: x.locator ?? '', accessed: x.accessed })),
  };
}

const BASIS_TEXT = {
  'score-aligned': 'Timed from the score, aligned to this recording automatically.',
  'score-proportion': 'Placed from the score; the timing is approximate.',
  'audio-feature': 'Placed by measuring this recording.',
  documented: '',
  general: 'About the passage as a whole.',
};

/** The smallest existing rendition at least `w` wide (renditions: -480, -960), else the original. */
function rendition(src, w) {
  if (!src) return src;
  for (const r of [160, 480, 960]) {
    if (r < w) continue;
    const alt = src.replace(/\.webp$/, `-${r}.webp`);
    if (existsSync(path.join(OUT, alt))) return alt;
  }
  return src;
}

// Movements of one set stay together, in part order, at the position of the set's earliest member.
const setFirst = new Map();
for (const l of listens) if (l.set) setFirst.set(l.set.id, Math.min(setFirst.get(l.set.id) ?? Infinity, l.order ?? 1));
const setPos = (l) => (l.set ? setFirst.get(l.set.id) : l.order ?? 1);

async function programme() {
  const streams = await resolveStreams();
  const ctx = { base: '', page: 'hall' };
  // The prologue: composers before Bach (content/precursors.mjs) play first, under a synthetic era.
  const pre = [...precursors].sort((a, b) => a.born.year - b.born.year);
  const who = new Map([...pre.map((c) => [c.slug, { ...c, era: 'before-bach', facts: c.facts ?? [], portrait: c.portrait ?? { file: '' } }]), ...bySlug]);
  const eraOf = new Map([['before-bach', { slug: 'before-bach', numeral: '0', name: 'Before Bach', span: 'c. 900–1700', accent: '#9fc3c6', hero: prologue?.hero ?? { file: site.heroSlides[0].file, artist: site.heroSlides[0].artist, title: site.heroSlides[0].title } }], ...eraBySlug]);
  const rank = new Map([...pre.map((c, i) => [c.slug, i - pre.length]), ...composers.map((c, i) => [c.slug, i])]);
  // Comparison-only recordings of music by composers outside the Atlas (Grieg, a folk song) carry
  // composer: null and a `guest` { name, dates } instead; they never play in the concert.
  for (const l of listens) if (l.composer == null && l.guest && l.concert === false) {
    const slug = `guest-${l.id}`;
    who.set(slug, { slug, name: l.guest.name, given: '', family: l.guest.name, born: { year: l.guest.born ?? '', place: l.guest.bornPlace ?? '' }, died: l.guest.died ? { year: l.guest.died, place: l.guest.diedPlace ?? '' } : null, era: null, epithet: '', facts: [], portrait: { file: '' }, page: null });
    l.composer = slug;
    rank.set(slug, 1e6);
  }
  const list = listens
    .filter((l) => who.has(l.composer) && streams[sourceKey(l.source)])
    .sort((a, b) => rank.get(a.composer) - rank.get(b.composer) || setPos(a) - setPos(b) || (a.set?.part ?? 0) - (b.set?.part ?? 0) || (a.order ?? 1) - (b.order ?? 1));
  const out = [];
  for (const l of list) {
    const c = who.get(l.composer);
    const e = eraOf.get(c.era);
    // Glossary links: each term is linked once per piece, at its first appearance in time order.
    const tctx = { base: '', page: `hall/${l.id}`, termSeen: new Set() };
    const prose = (html) => termify(tctx, `<p>${rich(ctx, html)}</p>`).replace(/^<p>|<\/p>$/g, '');
    const s = streams[sourceKey(l.source)];
    const p = c.portrait.file ? art[normalizeTitle(c.portrait.file)] : null;
    // Score alignments are shown only once independently reviewed (the four original alignments predate reviews).
    const scoreOk = BASE_SCORES.has(l.id) || reviewedScore(l.id);
    const score = scoreOk ? await readJsonOr(path.join(OUT, 'assets/data', l.id, 'score.json')) : null;
    const hasSheet = scoreOk && existsSync(path.join(OUT, 'assets/data', l.id, 'sheet/index.json'));
    const barTime = (bar) => {
      if (!bar || !score) return null;
      const b = score.bars.find((x) => x.n === String(bar.n) && x.occ === (bar.occ ?? 1));
      if (!b) warnings.push(`hall/${l.id}: bar ${bar.n}/${bar.occ} not in score.json`);
      return b?.t ?? null;
    };
    const intro = prose(l.intro ?? '');
    const cues = (l.cues ?? []).map((q) => ({ t: q.bar ? barTime(q.bar) : q.t, kind: q.kind, title: q.title, text: q.text, basis: q.basis ?? 'general', precision: q.precision ?? null, evidence: q.evidence ?? '', how: BASIS_TEXT[q.basis] ?? '' }))
      .filter((q) => q.t != null).sort((a, b) => a.t - b.t);
    const transitions = (l.transitions ?? []).map((tr) => {
      const at = tr.at?.bar ? barTime(tr.at.bar) : tr.at?.t;
      if (at == null) return null;
      const span = tr.span ?? [Math.max(0, at - 8), Math.min(s.duration, at + 8)];
      return { id: tr.id, title: tr.title, from: tr.from, to: tr.to, at, span, how: tr.how, devices: tr.devices ?? [], basis: tr.basis, precision: tr.precision, evidence: tr.evidence ?? '', bar: tr.at?.bar ? `${tr.at.bar.n}` : null };
    }).filter(Boolean).sort((a, b) => a.at - b.at);
    for (const x of [...cues.map((q) => ['c', q]), ...transitions.map((j) => ['j', j])].sort((a, b) => (a[1].t ?? a[1].at) - (b[1].t ?? b[1].at))) {
      if (x[0] === 'c') x[1].text = prose(x[1].text); else x[1].how = prose(x[1].how);
    }
    const rel = (await readJsonOr(path.join(ROOT, 'content/relations', `${l.id}.json`)))?.relations ?? [];
    const tuning = typeof l.tuning === 'object' ? l.tuning : { hz: l.tuning ?? 440, status: l.tuning ? 'documented' : 'standard' };
    out.push({
      id: l.id,
      workPage: bySlug.has(l.composer) ? `works/${l.composer}-${workSlug(l.work)}.html` : null,
      composer: {
        slug: c.slug, page: c.slug.startsWith('guest-') ? null : c.era === 'before-bach' ? `origins.html${c.anchor ? '#' + c.anchor : ''}` : `composers/${c.slug}.html`, name: c.name, given: c.given, family: c.family, short: c.short ?? c.family ?? c.name, dates: c.dates ?? lifespan(c),
        born: `${c.born.date ?? c.born.year}, ${c.born.place}`, died: c.died ? `${c.died.date ?? c.died.year}, ${c.died.place}` : null,
        epithet: c.epithet, portrait: rendition(p?.src ?? null, 480), thumb: rendition(p?.src ?? null, 160), focus: c.portrait.focus ?? '50% 25%',
        facts: (c.facts ?? []).map(([k, v]) => [k, rich(ctx, v)]),
        quote: c.quote ?? null, background: background(ctx, c),
      },
      era: e ? { slug: e.slug, numeral: e.numeral, name: e.name, span: e.span, accent: e.accent, hero: rendition(art[normalizeTitle(e.hero.file)]?.src ?? null, 480), heroCaption: `${e.hero.artist}, ${e.hero.title}` } : null,
      tuning: tuning.hz ?? 440, tuningStatus: tuning.status ?? 'standard', work: l.work, movement: l.movement ?? '', set: l.set ?? null, monophonic: !!l.monophonic, concert: l.concert ?? true, year: l.year, key: l.key ?? '', forces: l.forces, performers: l.performers, recorded: l.recorded ?? '',
      intro, stream: s.stream, sourcePage: s.page, license: l.license ?? s.license, duration: s.duration,
      sections: l.sections ?? [], relations: rel, cues, transitions, orchestra: l.orchestra ?? null,
      hasScore: !!score, hasSheet, voices: score?.voices?.map((v) => v.name) ?? [],
      scoreSource: score ? { title: score.source?.title ?? '', edition: score.source?.edition ?? '', url: score.source?.url ?? '', license: score.source?.license ?? '', status: score.status } : null,
      dossier: dossierFor(await readJsonOr(path.join(ROOT, 'content/dossiers', `${l.id}.json`))),
    });
  }
  return out;
}

async function roomPage(prog) {
  // The player needs only the index; everything a reader opens in the hall is fetched per piece.
  const INDEX = new Set(['id', 'stream', 'duration', 'composer', 'work', 'movement', 'set', 'concert', 'era']);
  const BIO = new Set(['facts', 'quote', 'background', 'born', 'died', 'epithet']);
  const composers = [], eras = [], composerIds = new Map(), eraIds = new Map();
  const rows = prog.map((t) => {
    if (!composerIds.has(t.composer.slug)) {
      composerIds.set(t.composer.slug, composers.length);
      composers.push(Object.fromEntries(Object.entries(t.composer).filter(([k]) => !BIO.has(k))));
    }
    if (t.era && !eraIds.has(t.era.slug)) { eraIds.set(t.era.slug, eras.length); eras.push(t.era); }
    return [t.id, t.stream, t.duration, composerIds.get(t.composer.slug), t.work, t.movement, t.set, t.concert === false ? 0 : 1, t.era ? eraIds.get(t.era.slug) : -1];
  });
  const index = { composers, eras, rows, programmes: liveProgrammes().map((p) => ({ id: p.id, title: p.title, subtitle: p.subtitle, ids: p.tracks })) };
  await writeFile(path.join(OUT, 'assets/listen/programme.json'), JSON.stringify(index));
  await mkdir(path.join(OUT, 'assets/hall'), { recursive: true });
  for (const t of prog) {
    const d = Object.fromEntries(Object.entries(t).filter(([k]) => !INDEX.has(k)));
    d.composer = Object.fromEntries(Object.entries(t.composer).filter(([k]) => BIO.has(k)));
    await writeFile(path.join(OUT, 'assets/hall', `${t.id}.json`), JSON.stringify(d));
  }
  const keep = new Set([...allListens.map((l) => `${l.id}.json`), 'programme.json']);  // analysis envelopes of recordings still in review must survive
  for (const f of await readdir(path.join(OUT, 'assets/listen'))) if (!keep.has(f)) await unlink(path.join(OUT, 'assets/listen', f));
  for (const f of await readdir(path.join(OUT, 'assets/hall'))) if (!keep.has(f)) await unlink(path.join(OUT, 'assets/hall', f));
  const vcss = await ver('assets/css/room.css');
  const first = prog[0];
  // The first recording is known at build time. Its real text reserves the
  // responsive heading/metadata rows before the Hall module fetches detail.
  const roman = (n) => ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'][n] ?? String(n);
  const firstMovement = first.set ? `${first.movement} (${roman(first.set.part)} of ${roman(first.set.of)})` : first.movement;
  const firstMeta = [first.year, first.key, first.forces, first.performers, first.tuning !== 440 ? `pitch A ≈ ${first.tuning} Hz${first.tuningStatus === 'inferred' ? ' (inferred)' : ''}` : ''].filter(Boolean).join(' · ');
  const ctx = { base: '', page: 'hall' };
  const concert = prog.filter((t) => t.concert !== false), concertN = concert.length, concertSecs = concert.reduce((a, t) => a + (t.duration || 0), 0);
  const eraList = [{ slug: 'before-bach', numeral: '0', name: 'Before Bach', accent: '#9fc3c6' }, ...C.eras].map(  // C.eras: chapter order (a local `eras` table above is in programme order)
(e) => ({ e, tracks: prog.filter((t) => t.era?.slug === e.slug && t.concert !== false) })).filter((x) => x.tracks.length);
  const fmt = (d) => `${Math.floor(d / 60)}:${String(Math.round(d % 60)).padStart(2, '0')}`;
  return `<!doctype html>
<html lang="en" data-site="${V.js}" data-room="${V.room}" data-player="${V.player}" data-prog="${PROG_V}" data-guide="${guideVersion}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>The Concert Hall — Contrapunctus</title>
<meta name="description" content="A concert from plainchant to Shostakovich in real recordings, with the score following the music where we have it, and notes on what you are hearing.">
<meta property="og:title" content="The Concert Hall — Contrapunctus">
<meta property="og:description" content="Real recordings, the score following the music, and notes on what you are hearing as it plays.">
${first?.era?.hero ? `<meta property="og:image" content="${SITE_URL}${first.era.hero.replace(/-480\.webp$/, '.webp')}"><meta name="twitter:card" content="summary_large_image">` : ''}
<meta name="theme-color" content="#0d0b09">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
${fonts}
<link rel="stylesheet" href="assets/css/room.css?v=${vcss}">
${headScripts(ctx)}
</head>
<body class="room waiting">
<div class="backdrop" aria-hidden="true"><img alt=""><img alt=""></div>
<header class="r-top">
  <a class="r-brand" href="index.html"><span class="glyph">𝄞</span>Contrapunctus</a>
  <nav class="r-nav" aria-label="Main navigation">${NAV.filter(([k]) => k !== 'hall').map(([, t, u]) => `<a href="${u}">${t}</a>`).join('')}<a href="#" data-search>Search</a></nav>
</header>

<main class="stage">
  <section class="now" aria-live="polite">
    <div class="now-era"><span class="era-num">${esc(first.era?.numeral ?? '')}</span><span class="era-name">${esc(first.era ? `${first.era.name} · ${first.era.span}` : '')}</span></div>
    <h1 class="now-composer"><span class="given">${esc(first.composer.given ?? '')}</span><span class="family">${esc(first.composer.family ?? first.composer.name)}</span></h1>
    <p class="now-work"><span class="work">${esc(first.work)}</span><span class="movement">${esc(firstMovement)}</span></p>
    <p class="now-meta">${esc(firstMeta)}</p>
  </section>

  <section class="viz" aria-label="The music">
    <div class="views" role="tablist" aria-label="View"></div>
    <div class="spectro-frame">
      <canvas class="spectro" aria-hidden="true"></canvas>
      <canvas class="keys" aria-hidden="true"></canvas>
      <div class="spectro-axis" aria-hidden="true"></div>
      <div class="spectro-label">Pitch over time · each band is an octave of C</div>
      <div class="view-layer" hidden></div>
      <button class="widen" type="button" aria-pressed="false" aria-label="Fill the hall with the music" title="Fill the hall with the music (F)">⤢</button>
      <p class="wide-cue" aria-hidden="true"></p>
    </div>
    <div class="viz-row">
      <div class="wheel-wrap">
        <canvas class="wheel" aria-hidden="true"></canvas>
        <div class="wheel-centre"><span class="chord">—</span><span class="chord-cap">heard harmony</span></div>
      </div>
      <div class="viz-mid">
        <div class="now-section"><span class="ns-k">This section</span><p class="ns-label">—</p><p class="ns-note"></p><p class="ns-next"></p></div>
        <dl class="readouts" hidden>
          <div><dt>Lowest note</dt><dd class="ro-bass">—</dd></div>
          <div><dt>Sounding now</dt><dd class="ro-top">—</dd></div>
        </dl>
      </div>
      <figure class="cameo-r"><span class="oval-r"><img alt=""></span><figcaption></figcaption></figure>
    </div>
  </section>

  <section class="notes">
    <div class="tabs" role="tablist">
      <button role="tab" aria-selected="true" data-tab="live">As it plays</button>
      <button role="tab" aria-selected="false" data-tab="joins">The joins</button>
      <button role="tab" aria-selected="false" data-tab="composer">The composer</button>
      <button role="tab" aria-selected="false" data-tab="piece">This recording</button>
    </div>
    <div class="tab tab-live" data-panel="live">
      <article class="join-card" hidden></article>
      <article class="cue-now"><span class="cue-kind"></span><h2 class="cue-title"></h2><p class="cue-text"></p><details class="cue-how"><summary>How we know</summary><p></p></details><span class="cue-next"></span><span class="cue-acts"><button type="button" class="cue-share">Link to this moment</button><button type="button" class="cue-keep">Keep this moment</button></span></article>
      <ol class="cue-past"></ol>
    </div>
    <div class="tab tab-joins" data-panel="joins" hidden></div>
    <div class="tab tab-composer" data-panel="composer" hidden></div>
    <div class="tab tab-piece" data-panel="piece" hidden></div>
  </section>
</main>

<footer class="transport">
  <div class="t-buttons">
    <button class="t-prev" aria-label="Previous piece">⏮</button>
    <button class="t-play" aria-label="Play">▶</button>
    <button class="t-next" aria-label="Next piece">⏭</button>
    <button class="t-guide" type="button" data-tour="hall-welcome" aria-label="Take the 1-minute Hall tour" title="Take the Hall tour">?</button>
  </div>
  <span class="t-time t-cur">0:00</span>
  <div class="timeline" tabindex="0" role="slider" aria-label="Position in the piece" aria-valuemin="0">
    <canvas class="tl-canvas"></canvas>
    <div class="tl-sections"></div>
    <div class="tl-joins"></div>
    <div class="tl-head"></div>
  </div>
  <span class="t-time t-dur">0:00</span>
  <button class="t-prog" aria-expanded="false">Programme</button>
</footer>
<aside class="hall-hint" hidden aria-label="Welcome to the Hall"><span>New here? <button type="button" data-tour="hall-welcome">Take the 1-minute tour</button></span><button type="button" class="hall-hint-close" aria-label="Dismiss the tour invitation">×</button></aside>

<aside class="programme" hidden>
  <header><h2>The programme</h2><p>Choose an evening, or the whole concert: ${concertN} recordings, ${Math.round(concertSecs / 3600)} hours, in the order the composers were born. Pieces marked <span class="p-score">score</span> show the engraved score as they play.</p><button class="prog-close" aria-label="Close">×</button></header>
  <section class="p-kept" hidden><h3><span>☆</span>Kept moments</h3><ol></ol></section>
  ${(() => { const progs = liveProgrammes(); return progs.length ? `<section class="p-curated"><h3><span>✦</span>Evenings</h3><ol>${progs.map((p) => `<li><button data-programme="${attr(p.id)}"><span class="p-c">${esc(p.title)}</span><span class="p-w">${esc(p.subtitle)}</span><span class="p-d">${Math.round(p.duration / 60)} min</span></button></li>`).join('')}<li><button data-programme=""><span class="p-c">The whole concert</span><span class="p-w">Everything, in the order the composers were born</span><span class="p-d">${Math.round(concertSecs / 3600)} h</span></button></li><li><button data-surprise><span class="p-c">Surprise me</span><span class="p-w">One piece from anywhere in the concert, chosen at random</span><span class="p-d">?</span></button></li></ol></section>` : ''; })()}
  ${eraList.map(({ e, tracks }) => `<section style="--accent:${e.accent}"><h3><span>${e.numeral}</span>${esc(e.name)}</h3><ol>${tracks.map((t, i) => {
    const head = t.set && tracks[i - 1]?.set?.id !== t.set.id ? `<li class="p-set"><span>${esc(t.composer.name)}</span> ${esc(t.set.title)} <em>${(() => { const n = tracks.filter((x) => x.set?.id === t.set.id).length; return n >= t.set.of ? `complete · ${t.set.of} movements` : `${n} of ${t.set.of} movements`; })()}</em></li>` : '';
    return `${head}<li${t.set ? ' class="p-mv"' : ''}><button data-id="${t.id}">${t.composer.thumb ? `<img class="p-i" src="${t.composer.thumb}" alt="" loading="lazy" decoding="async" style="object-position:${t.composer.focus}">` : '<span class="p-i"></span>'}<span class="p-c">${esc(t.composer.name)}${t.hasSheet ? ' <span class="p-score">score</span>' : ''}</span><span class="p-w">${t.set ? esc(t.movement || t.work) : `${esc(t.work)}${t.movement ? ` · ${esc(t.movement)}` : ''}`}</span><span class="p-d">${fmt(t.duration)}</span></button></li>`;
  }).join('')}</ol></section>`).join('')}
</aside>

<div class="curtain">
  <div class="curtain-inner">
    <span class="kicker">The Concert Hall</span>
    <h2>From plainchant to ${esc(concert.at(-1)?.composer.family ?? '')}</h2>
    <p>${concertN} recordings, in the order the composers were born. Where we have the score, it follows the music; notes say what you are hearing as it happens. Or open the programme and choose an evening.</p>
    <button class="begin" disabled>Loading the concert…</button>
    <small>Browsers need one click before a page may play sound. After that, the music plays on its own.</small>
  </div>
</div>
<div class="interlude" hidden><span class="i-cameo"><img alt=""></span><span class="i-era"></span><span class="i-name"></span><span class="i-work"></span></div>
${persist(ctx)}
</body>
</html>
`;
}

// ---------------------------------------------------------------- write
async function emit(rel, html) {
  const file = path.join(OUT, rel);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
}

const written = new Set();
const out = async (rel, html) => { written.add(rel); await emit(rel, html); };

const PROG = await programme();
PROG_V = createHash('md5').update(JSON.stringify(PROG)).digest('hex').slice(0, 8);  // versions programme.json and assets/hall/*.json
collectWorks(PROG);
const influenceModule = existsSync(path.join(ROOT, 'src/influence.mjs')) ? await import('./influence.mjs') : null;
if (influenceModule) await influenceModule.buildInfluence({ out, layout, esc, attr, rich, termify, furtherReading, composers, bySlug, eras, eraBySlug, art, listens, ROOT, OUT, warnings, img });
await buildAtlasMap({ out, layout, composers, eras, art, listens, ROOT, OUT });
const journeys = await buildJourneys({ out, layout, esc, attr, rich, img, art, PROG, ROOT, OUT });
await out('index.html', indexPage());
await out('hall.html', await roomPage(PROG));
const comparisonSearch = await buildCompare({ out, layout, esc, attr, bySlug, listens, held, PROG, ROOT, OUT });
await out('atlas.html', `<!doctype html><meta charset="utf-8"><title>Contrapunctus</title><meta http-equiv="refresh" content="0; url=index.html"><link rel="canonical" href="index.html"><a href="index.html">Contrapunctus</a>`);
await out('composers/index.html', composersIndex());
for (const [i, c] of composers.entries()) await out(`composers/${c.slug}.html`, composerPage(c, i));
for (const w of WORKS.values()) await out(`works/${w.slug}.html`, workPage(w));
await out('works/index.html', worksIndex());
await out('about.html', aboutPage());
for (const e of eras) await out(`eras/${e.slug}.html`, eraPage(e));
for (const p of Object.values(pages)) await out(`${p.slug}.html`, longPage(p));
await out('timeline.html', timelinePage());
await buildReturnLab({ out, layout, esc, attr, listens, bySlug, PROG, ROOT, OUT, warnings });
await out('gallery.html', galleryPage());
await out('credits.html', creditsPage());
await out('routes.html', routesPage());
await out('glossary.html', glossaryPage());
await out('sources.html', sourcesPage());
const guideLessons = await buildGuide({ out, emit, layout, esc, attr });
await emit('assets/glossary.json', JSON.stringify(Object.fromEntries(GLOSSARY.map((g) => [g.slug, { term: g.term, short: g.short }]))));
await writeSearchIndex();
const recordings = recordingRows();
await emit('assets/data/recordings.json', JSON.stringify(recordings, null, 2) + '\n');
await emit('assets/data/recordings.csv', recordingsCsv(recordings));
await out('404.html', layout({ base: '/contrapunctus/', page: '404' }, { title: 'Not found — Contrapunctus', nav: '', body: `<header class="page-hero"><div class="wrap"><span class="kicker">Tacet</span><h1>A rest, not a note</h1><p class="lede">This page does not exist. The <a href="/contrapunctus/composers/index.html">composers</a> and the <a href="/contrapunctus/index.html">seven chapters</a> are where you left them.</p></div><span class="bg-glyph" aria-hidden="true">𝄽</span></header>` }));

// remove stale generated pages
for (const dir of ['composers', 'eras', 'works']) {
  for (const f of await readdir(path.join(OUT, dir)).catch(() => [])) {
    if (f.endsWith('.html') && !written.has(`${dir}/${f}`)) await unlink(path.join(OUT, dir, f));
  }
}

console.log(`built ${written.size} pages: ${composers.length} composers, ${eras.length} eras, ${Object.keys(pages).length} long pages`);
console.log(`recordings: ${listens.length} published, ${held.length} awaiting review${held.length ? ` (${held.slice(0, 12).join(', ')}${held.length > 12 ? ', …' : ''})` : ''}`);
if (warnings.length) { console.log(`\n${warnings.length} warnings:\n  ${[...new Set(warnings)].join('\n  ')}`); }
await optimize();
