#!/usr/bin/env node
// Static generator: content/*.mjs -> docs/*.html. No dependencies.
import { mkdir, writeFile, readdir, unlink, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { loadContent } from './content.mjs';
import { normalizeTitle } from '../tools/commons.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'docs');
const C = await loadContent();
const { eras, composers, pages, site, art } = C;
const bySlug = new Map(composers.map((c) => [c.slug, c]));
const eraBySlug = new Map(eras.map((e) => [e.slug, e]));
const warnings = [];
const ver = async (rel) => createHash('md5').update(await readFile(path.join(OUT, rel))).digest('hex').slice(0, 8);
const V = { css: await ver('assets/css/style.css'), js: await ver('assets/js/site.js') };

// ---------------------------------------------------------------- helpers
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = esc;
const dash = (a, b) => (b == null ? `b. ${a}` : `${a}–${b}`);
const lifespan = (c) => dash(c.born.year, c.died?.year);

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
  if (['origins', 'workshop', 'timeline', 'gallery', 'credits', 'index'].includes(page)) return `${ctx.base}${page}.html${h}`;
  if (page === 'composers') return `${ctx.base}composers/index.html${h}`;
  return null;
}

/** Expand [[target|label]] cross-references in authored HTML. */
function rich(ctx, html = '') {
  return html.replace(/<p>\s*\{\{harmonic-series\}\}\s*<\/p>|\{\{harmonic-series\}\}/g, () => harmonicSeriesSvg()).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) => {
    const url = href(ctx, target.trim());
    const text = label ?? bySlug.get(target.trim())?.family ?? bySlug.get(target.trim())?.name ?? target;
    if (!url) { warnings.push(`${ctx.page}: unresolved link [[${target}]]`); return text; }
    return `<a href="${url}">${text}</a>`;
  });
}

function artInfo(file, ctx) {
  const info = art[normalizeTitle(file)];
  if (!info) warnings.push(`${ctx.page}: image not fetched: ${file}`);
  return info;
}

function img(ctx, file, alt, { cls = '', sizes = '(max-width: 860px) 100vw, 50vw', eager = false } = {}) {
  const i = artInfo(file, ctx);
  if (!i) return `<div class="missing-img" style="aspect-ratio:4/3;background:var(--paper-3)"></div>`;
  return `<img src="${ctx.base}${i.src}" width="${i.w}" height="${i.h}" alt="${attr(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}${cls ? ` class="${cls}"` : ''} sizes="${sizes}">`;
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
  return list.map((s, i) => `<figure class="score reveal" id="${attr(s.id ?? `ex-${i + 1}`)}"><div class="score-head"><h4>${s.kicker ? `<span class="sc">${esc(s.kicker)}</span>` : ''}${esc(s.title)}</h4><button class="play" type="button" aria-label="Play example">Play</button></div>
<div class="abc"></div><script type="text/vnd.abc">${s.abc.trim().replace(/<\/script/gi, '<\\/script')}</script>
${s.caption ? `<figcaption>${rich(ctx, s.caption)}</figcaption>` : ''}</figure>`).join('\n');
}

const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Cormorant+SC:wght@500;600&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Noto+Music&display=swap" rel="stylesheet">`;

const NAV = [
  ['eras', 'Eras', 'index.html#movements'],
  ['composers', 'Composers', 'composers/index.html'],
  ['origins', 'Origins', 'origins.html'],
  ['workshop', 'Workshop', 'workshop.html'],
  ['timeline', 'Timeline', 'timeline.html'],
  ['gallery', 'Gallery', 'gallery.html'],
];

function layout(ctx, { title, description, body, dark = false, accent, nav, needsAbc = false, ogImage }) {
  const style = accent ? ` style="--accent:${accent}"` : '';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${attr(description ?? site.description)}">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(description ?? site.description)}">
${ogImage ? `<meta property="og:image" content="${attr(ogImage)}">` : ''}
<meta name="theme-color" content="#13110e">
<link rel="icon" href="${ctx.base}assets/favicon.svg" type="image/svg+xml">
${fonts}
<link rel="stylesheet" href="${ctx.base}assets/css/style.css?v=${V.css}">
</head>
<body class="${dark ? 'is-over-dark' : ''}"${style}>
<a class="skip" href="#main">Skip to content</a>
<header class="masthead"><div class="wrap">
<a class="brand" href="${ctx.base}index.html"><span class="glyph" aria-hidden="true">𝄞</span>Contrapunctus</a>
<button class="nav-toggle" aria-expanded="false" aria-controls="nav">menu</button>
<ul class="nav" id="nav">${NAV.map(([k, t, u]) => `<li><a href="${ctx.base}${u}"${nav === k ? ' aria-current="page"' : ''}>${t}</a></li>`).join('')}</ul>
</div></header>
<main id="main">
${body}
</main>
<footer class="colophon"><div class="wrap">
<div>${staffRule()}<a class="brand" href="${ctx.base}index.html"><span class="glyph" aria-hidden="true">𝄞</span>Contrapunctus</a>
<p>${site.colophon}</p></div>
<div><h5>Chapters</h5><ul>${eras.map((e) => `<li><a href="${ctx.base}eras/${e.slug}.html">${e.numeral}. ${esc(e.name)}</a></li>`).join('')}</ul></div>
<div><h5>Reading</h5><ul><li><a href="${ctx.base}origins.html">Before Bach</a></li><li><a href="${ctx.base}workshop.html">The Workshop</a></li><li><a href="${ctx.base}timeline.html">Lifelines</a></li><li><a href="${ctx.base}gallery.html">Sister Arts</a></li><li><a href="${ctx.base}credits.html">Image credits</a></li></ul></div>
<div class="fine"><span>Set in Cormorant Garamond and EB Garamond. Music engraved in the browser with abcjs.</span><span>Paintings are public-domain reproductions via Wikimedia Commons.</span></div>
</div></footer>
<dialog class="lightbox"><button type="button" aria-label="Close">×</button><img alt=""><p></p></dialog>
${needsAbc ? `<script src="${ctx.base}assets/vendor/abcjs-basic-min.js" defer></script>` : ''}
<script src="${ctx.base}assets/js/site.js?v=${V.js}" defer></script>
</body>
</html>
`;
}

function chapter(n, id, title, inner, sub) {
  return `<section class="chapter" id="${id}"><header class="reveal"><h2><span class="n">${n}</span>${title}</h2>${sub ? `<p>${sub}</p>` : ''}</header>${inner}</section>`;
}

function card(ctx, c) {
  return `<a class="card reveal" href="${ctx.base}composers/${c.slug}.html"><span class="pic">${img(ctx, c.portrait.file, c.name, { sizes: '220px' }).replace('<img ', `<img style="object-position:${c.portrait.focus ?? '50% 25%'}" `)}</span>
<span class="dates">${lifespan(c)}</span><h4>${esc(c.name)}${c.featured ? ' <span class="star" title="Extended portrait">✦</span>' : ''}</h4><span class="epithet">${esc(c.epithet)}</span></a>`;
}

const chip = (ctx, s) => {
  const c = bySlug.get(s);
  return c ? `<a class="chip" href="${ctx.base}composers/${s}.html">${esc(c.name)}</a>` : `<span class="chip ext">${esc(s)}</span>`;
};

// ---------------------------------------------------------------- pages
function composerPage(c, i) {
  const ctx = { base: '../', page: `composers/${c.slug}` };
  const era = eraBySlug.get(c.era);
  if (!era) warnings.push(`${c.slug}: unknown era ${c.era}`);
  const prev = composers[i - 1], next = composers[i + 1];
  const parts = [];
  const toc = [];
  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const add = (id, title, inner, sub) => { const n = roman[toc.length]; toc.push([id, n, title]); parts.push(chapter(n, id, title, inner, sub)); };

  add('life', 'Life', `<div class="prose">${rich(ctx, c.life)}</div>`);
  if (c.sound?.length) add('sound', 'The Sound', `<div class="anatomy">${c.sound.map((s) => `<div class="reveal"><h4>${s.glyph ? `<span class="glyph">${s.glyph}</span>` : ''}${esc(s.aspect)}</h4>${rich(ctx, s.html)}</div>`).join('')}</div>`, 'How the music is built — harmony, line, rhythm, colour, form.');
  if (c.works?.length) add('works', 'Works', `<ol class="works">${c.works.map((w) => `<li class="reveal"><span class="yr">${esc(w.year)}</span><div><span class="t">${w.titleHtml ?? esc(w.title)}</span>${w.cat ? `<span class="cat">${esc(w.cat)}</span>` : ''}${w.forces ? `<span class="forces">${esc(w.forces)}</span>` : ''}${w.note ? `<div class="w-note">${rich(ctx, w.note)}</div>` : ''}</div></li>`).join('')}</ol>`, 'A listening path, not a complete catalogue.');
  if (c.score?.length) add('score', 'In the Score', scores(ctx, c.score), 'Short examples, engraved and playable. Press play; notes light up as they sound.');
  if (c.arts?.length) add('arts', 'Sister Arts', arts(ctx, c.arts), 'Paintings and poems that share a world with this music.');
  if (c.recordings?.length) add('listen', 'Listen', `<ul class="discs">${c.recordings.map((r) => `<li class="reveal"><span class="disc" aria-hidden="true"></span><div><span class="w">${esc(r.work)}</span><span class="p">${esc(r.performers)}</span><span class="m">${esc([r.label, r.year].filter(Boolean).join(' · '))}</span>${r.note ? `<span class="d">${rich(ctx, r.note)}</span>` : ''}</div></li>`).join('')}</ul>`, 'Recordings worth seeking out.');
  if (c.lineage) add('lineage', 'Lineage', `<div class="lineage reveal"><div class="side from"><span class="sc">Drew from</span>${(c.lineage.from ?? []).map((s) => chip(ctx, s)).join('')}</div><div class="self">${esc(c.family ?? c.name)}</div><div class="side to"><span class="sc">Passed to</span>${(c.lineage.to ?? []).map((s) => chip(ctx, s)).join('')}</div></div>${c.lineage.note ? `<div class="lineage-note">${rich(ctx, c.lineage.note)}</div>` : ''}${c.reading?.length ? `<div class="lineage-note"><h4 style="margin:2.4rem 0 .8rem" class="sc">Further reading</h4><ul>${c.reading.map((r) => `<li>${r}</li>`).join('')}</ul></div>` : ''}`);

  const facts = (c.facts ?? []).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${rich(ctx, v)}</dd></div>`).join('');
  const body = `<section class="c-hero"><div class="wrap">
<figure class="portrait reveal"><a class="frame" href="${ctx.base}${artInfo(c.portrait.file, ctx)?.src ?? ''}" data-caption="${attr(c.portrait.caption ?? c.name)}"><span class="canvas">${img(ctx, c.portrait.file, `Portrait of ${c.name}`, { eager: true, sizes: '(max-width: 860px) 18rem, 23rem' })}</span></a>${c.portrait.caption ? `<figcaption>${esc(c.portrait.caption)}</figcaption>` : ''}</figure>
<div><div class="crumbs"><a href="../composers/index.html">Composers</a> / ${era ? `<a href="../eras/${era.slug}.html">${era.numeral}. ${esc(era.name)}</a>` : ''}</div>
<h1><span class="given">${esc(c.given ?? '')}</span>${esc(c.family ?? c.name)}</h1>
<div class="lifespan"><span>Born <b>${esc(c.born.date ?? c.born.year)}</b>, ${esc(c.born.place)}</span>${c.died ? `<span>Died <b>${esc(c.died.date ?? c.died.year)}</b>, ${esc(c.died.place)}</span>` : ''}</div>
<p class="epithet">${esc(c.epithet)}</p>
${facts ? `<dl class="facts">${facts}</dl>` : ''}
</div></div></section>
<div class="wrap c-body"><nav class="toc" aria-label="On this page"><ol>${toc.map(([id, n, t]) => `<li><a href="#${id}"><span class="n">${n}</span>${t}</a></li>`).join('')}</ol></nav>
<div>${c.quote ? `<blockquote class="prose" style="margin:4.5rem 0 0;font:italic 400 clamp(1.5rem,2.6vw,2.1rem)/1.35 var(--display);color:var(--ink-2)"><span>“${esc(c.quote.text)}”</span><footer class="sc" style="font:600 .8rem var(--caps);letter-spacing:.16em;color:var(--muted);margin-top:1rem;font-style:normal">— ${esc(c.quote.source)}</footer></blockquote>` : ''}
${parts.join('\n')}
<nav class="pager">${prev ? `<a href="${prev.slug}.html"><span class="sc">← Earlier</span><span class="nm">${esc(prev.name)}</span></a>` : '<span></span>'}${next ? `<a href="${next.slug}.html"><span class="sc">Later →</span><span class="nm">${esc(next.name)}</span></a>` : ''}</nav>
</div></div>`;
  return layout(ctx, {
    title: `${c.name} (${lifespan(c)}) — Contrapunctus`, description: c.epithet, body, dark: true,
    accent: era?.accent, nav: 'composers', needsAbc: !!c.score?.length,
  });
}

function eraPage(e) {
  const ctx = { base: '../', page: `eras/${e.slug}` };
  const list = composers.filter((c) => c.era === e.slug);
  const parts = [];
  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI'];
  let n = 0;
  const add = (id, t, inner, sub) => parts.push(chapter(roman[n++], id, t, inner, sub));
  add('essay', 'The Story', `<div class="prose">${rich(ctx, e.essay)}</div>`);
  if (e.glossary?.length) add('terms', 'Terms of Art', `<div class="glossary">${e.glossary.map((g) => `<div class="reveal"><h4>${esc(g.term)}</h4>${rich(ctx, g.html)}</div>`).join('')}</div>`, 'The vocabulary you need to hear this period clearly.');
  if (e.score?.length) add('score', 'In the Score', scores(ctx, e.score));
  if (e.arts?.length) add('arts', 'Sister Arts', arts(ctx, e.arts));
  add('composers', 'Composers', `<div class="composer-grid">${list.map((c) => card(ctx, c)).join('')}</div>`);
  const i = eras.indexOf(e);
  const prev = eras[i - 1], next = eras[i + 1];
  const h = e.hero;
  const body = `<section class="e-hero" style="--focus:${h.focus ?? '50% 40%'}">${img(ctx, h.file, `${h.artist}, ${h.title}`, { eager: true, sizes: '100vw' })}
<div class="wrap"><div><span class="n">${e.numeral}</span><span class="span">${esc(e.span)}</span><h1>${esc(e.name)}</h1><p class="sub">${esc(e.subtitle)}</p></div>
<p class="hero-caption"><b>${esc(h.artist)}</b><cite>${esc(h.title)}</cite>, ${esc(h.date)}${h.collection ? `<br>${esc(h.collection)}` : ''}</p></div></section>
<div class="wrap">${parts.join('\n')}
<nav class="pager">${prev ? `<a href="${prev.slug}.html"><span class="sc">← ${prev.numeral}</span><span class="nm">${esc(prev.name)}</span></a>` : '<a href="../origins.html"><span class="sc">← Prelude</span><span class="nm">Before Bach</span></a>'}${next ? `<a href="${next.slug}.html"><span class="sc">${next.numeral} →</span><span class="nm">${esc(next.name)}</span></a>` : '<a href="../timeline.html"><span class="sc">Coda →</span><span class="nm">Lifelines</span></a>'}</nav></div>`;
  return layout(ctx, { title: `${e.numeral}. ${e.name} (${e.span}) — Contrapunctus`, description: e.subtitle, body, dark: true, accent: e.accent, nav: 'eras', needsAbc: !!e.score?.length });
}

function indexPage() {
  const ctx = { base: '', page: 'index' };
  const slides = site.heroSlides.map((s, i) => `<div class="hero-slide${i === 0 ? ' on' : ''}" style="--origin:${s.focus ?? '50% 40%'}" data-caption="${attr(`<b>${s.kicker}</b><cite>${esc(s.title)}</cite> — ${esc(s.artist)}, ${esc(s.date)}`)}">${img(ctx, s.file, `${s.artist}, ${s.title}`, { eager: i === 0, sizes: '100vw' })}</div>`).join('');
  const movements = eras.map((e) => {
    const list = composers.filter((c) => c.era === e.slug);
    return `<article class="movement" style="--accent:${e.accent}"><div class="movement-art">${painting(ctx, { ...e.hero }, { sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
<div class="reveal"><span class="movement-num">${e.numeral}</span><span class="movement-span">${esc(e.span)}</span><h3><a href="eras/${e.slug}.html">${esc(e.name)}</a></h3><div class="precis">${rich(ctx, e.precis)}</div>
<ul class="roster">${list.map((c) => `<li><a href="composers/${c.slug}.html">${esc(c.family ?? c.name)}</a>${c.featured ? '<span class="star">✦</span>' : ''}</li>`).join('')}</ul>
<a class="more" href="eras/${e.slug}.html">Read the chapter</a></div></article>`;
  }).join('\n');
  const four = composers.filter((c) => c.featured);
  const body = `<section class="hero"><div class="hero-slides">${slides}</div>
<div class="wrap hero-inner"><div><h1 class="hero-title">Contrapunctus</h1><p class="hero-sub"><span class="sc">${esc(site.kicker)}</span>${esc(site.tagline)}</p></div>
<div><p class="hero-caption" aria-live="polite"></p><div class="hero-dots">${site.heroSlides.map((_, i) => `<button type="button" aria-label="Painting ${i + 1}"${i === 0 ? ' class="on"' : ''}></button>`).join('')}</div></div></div>
<a class="scroll-cue" href="#prelude">Prelude ↓</a></section>
<section class="section" id="prelude"><div class="wrap"><div class="section-head"><span class="kicker">Prelude</span><h2>${esc(site.preludeTitle)}</h2></div>
<div class="prose">${rich(ctx, site.prelude)}</div></div></section>
<section class="section night" id="four"><div class="wrap"><div class="section-head center"><span class="kicker">Four portraits</span><h2>${esc(site.fourTitle)}</h2><p>${rich(ctx, site.fourLede)}</p></div>
<div class="four">${four.map((c) => `<a class="cameo reveal" href="composers/${c.slug}.html"><span class="oval">${img(ctx, c.portrait.file, c.name, { sizes: '(max-width: 1000px) 45vw, 22vw' }).replace('<img ', `<img style="object-position:${c.portrait.focus ?? '50% 25%'}" `)}</span><span class="dates">${lifespan(c)}</span><h3>${esc(c.name)}</h3>${c.quote ? `<blockquote>“${esc(c.quote.text)}”</blockquote>` : ''}</a>`).join('')}</div></div></section>
<section class="section" id="movements"><div class="wrap"><div class="section-head"><span class="kicker">Seven movements</span><h2>${esc(site.erasTitle)}</h2><p>${rich(ctx, site.erasLede)}</p></div>
<div class="movements">${movements}</div></div></section>
<section class="section night"><div class="wrap"><div class="section-head"><span class="kicker">Lifelines</span><h2>Who overlapped with whom</h2><p>Every composer in the atlas on one axis. Bach died the year Haydn turned eighteen; Brahms heard the thirty-year-old Mahler conduct <i>Don Giovanni</i> in Budapest in 1890 and praised it; Rachmaninoff outlived Ravel and Mahler and died two years before Bartók.</p></div>
<div class="tl-wrap">${timelineSvg(ctx, { compact: true, dark: true })}</div><p style="margin-top:1.6rem"><a class="more" style="color:var(--gold-hi)" href="timeline.html">The full timeline, with history and painting alongside →</a></p></div></section>
<section class="section"><div class="wrap" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));gap:4rem">
<div class="reveal"><span class="kicker">Before Bach</span><h2 style="margin:.8rem 0 1rem"><a href="origins.html" style="text-decoration:none">Origins</a></h2><p>${rich(ctx, pages.origins?.lede ?? '')}</p><a class="more" href="origins.html" style="font:600 .86rem var(--caps);letter-spacing:.18em;color:var(--accent)">Begin with the monochord →</a></div>
<div class="reveal"><span class="kicker">How it works</span><h2 style="margin:.8rem 0 1rem"><a href="workshop.html" style="text-decoration:none">The Workshop</a></h2><p>${rich(ctx, pages.workshop?.lede ?? '')}</p><a class="more" href="workshop.html" style="font:600 .86rem var(--caps);letter-spacing:.18em;color:var(--accent)">Open the workshop →</a></div>
</div></section>`;
  return layout(ctx, { title: `Contrapunctus — ${site.kicker}`, body, dark: true, nav: '' });
}

function composersIndex() {
  const ctx = { base: '../', page: 'composers/index' };
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">The atlas</span><h1>Composers</h1><p class="lede">${composers.length} composer${composers.length === 1 ? '' : 's'} in seven chapters, ordered by year of birth. Those marked ✦ have extended portraits.</p></div><span class="bg-glyph" aria-hidden="true">𝄢</span></header>
<div class="wrap section">${eras.map((e) => `<section class="era-group" style="--accent:${e.accent}"><header><span class="n">${e.numeral}</span><h3><a href="../eras/${e.slug}.html">${esc(e.name)}</a></h3><span class="sc">${esc(e.span)}</span></header><div class="composer-grid">${composers.filter((c) => c.era === e.slug).map((c) => card(ctx, c)).join('')}</div></section>`).join('')}</div>`;
  return layout(ctx, { title: 'Composers — Contrapunctus', body, nav: 'composers' });
}

function longPage(p) {
  const ctx = { base: '', page: p.slug };
  const lessons = p.lessons.map((l) => `<section class="lesson" id="${l.id}"><div class="n">${l.numeral}<small>${esc(l.label ?? '')}</small></div><div>
<h2 class="reveal">${esc(l.heading)}</h2><div class="prose">${rich(ctx, l.html)}</div>${scores(ctx, l.score)}${l.arts?.length ? `<div style="margin-top:3rem">${arts(ctx, l.arts)}</div>` : ''}</div></section>`).join('\n');
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">${esc(p.kicker)}</span><h1>${esc(p.title)}</h1><p class="lede">${rich(ctx, p.lede)}</p></div><span class="bg-glyph" aria-hidden="true">${p.glyph ?? '𝄐'}</span></header>
<div class="wrap">${lessons}</div>`;
  return layout(ctx, { title: `${p.title} — Contrapunctus`, description: p.lede.replace(/<[^>]+>|\[\[|\]\]/g, ''), body, accent: p.accent, nav: p.slug, needsAbc: p.lessons.some((l) => l.score?.length || /data-lab/.test(l.html)) });
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
    if (!a.file || seen.has(normalizeTitle(a.file))) return;
    seen.add(normalizeTitle(a.file));
    list.push({ a, ownerHtml });
  };
  for (const e of eras) { push(e.hero, `<a href="eras/${e.slug}.html">${e.numeral}. ${esc(e.name)}</a>`); (e.arts ?? []).forEach((a) => push(a, `<a href="eras/${e.slug}.html">${e.numeral}. ${esc(e.name)}</a>`)); }
  for (const c of composers) (c.arts ?? []).forEach((a) => push(a, `<a href="composers/${c.slug}.html">${esc(c.name)}</a>`));
  for (const p of Object.values(pages)) for (const l of p.lessons ?? []) (l.arts ?? []).forEach((a) => push(a, `<a href="${p.slug}.html#${l.id}">${esc(p.title)}</a>`));
  return list.filter(({ a }) => a.type !== 'poem' && a.type !== 'text');
}

function galleryPage() {
  const ctx = { base: '', page: 'gallery' };
  const items = allArt().map(({ a, ownerHtml }) => painting(ctx, a, { sizes: '(max-width: 700px) 100vw, 33vw', extra: '' }).replace('</figcaption>', `<span class="for">Hung beside ${ownerHtml}</span></figcaption>`)).join('');
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">The salon</span><h1>Sister Arts</h1><p class="lede">${rich(ctx, site.galleryLede ?? '')}</p></div><span class="bg-glyph" aria-hidden="true">𝄋</span></header>
<div class="section wall"><div class="wrap salon">${items}</div></div>`;
  return layout(ctx, { title: 'Sister Arts — Contrapunctus', body, nav: 'gallery' });
}

function creditsPage() {
  const ctx = { base: '', page: 'credits' };
  const rows = Object.entries(art).map(([t, i]) => `<tr><td><img src="${i.src}" alt="" loading="lazy"></td><td><a href="${attr(i.page)}">${esc(t.slice(5))}</a><br><span style="color:var(--muted)">${esc(i.artist)}${i.date ? `, ${esc(i.date)}` : ''}</span></td><td>${esc(i.license || 'see source')}</td></tr>`).join('');
  const body = `<header class="page-hero"><div class="wrap"><span class="kicker">Provenance</span><h1>Image credits</h1><p class="lede">Every reproduction on this site is taken from Wikimedia Commons, where each file page records its source and copyright status. Thumbnails were re-encoded for the web; follow the links for full-resolution originals.</p></div></header>
<div class="section"><div class="wrap"><table class="credits"><thead><tr><th></th><th>File</th><th>Licence</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
  return layout(ctx, { title: 'Image credits — Contrapunctus', body, nav: '' });
}

// ---------------------------------------------------------------- write
async function emit(rel, html) {
  const file = path.join(OUT, rel);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
}

const written = new Set();
const out = async (rel, html) => { written.add(rel); await emit(rel, html); };

await out('index.html', indexPage());
await out('composers/index.html', composersIndex());
for (const [i, c] of composers.entries()) await out(`composers/${c.slug}.html`, composerPage(c, i));
for (const e of eras) await out(`eras/${e.slug}.html`, eraPage(e));
for (const p of Object.values(pages)) await out(`${p.slug}.html`, longPage(p));
await out('timeline.html', timelinePage());
await out('gallery.html', galleryPage());
await out('credits.html', creditsPage());

// remove stale generated pages
for (const dir of ['composers', 'eras']) {
  for (const f of await readdir(path.join(OUT, dir)).catch(() => [])) {
    if (f.endsWith('.html') && !written.has(`${dir}/${f}`)) await unlink(path.join(OUT, dir, f));
  }
}

console.log(`built ${written.size} pages: ${composers.length} composers, ${eras.length} eras, ${Object.keys(pages).length} long pages`);
if (warnings.length) { console.log(`\n${warnings.length} warnings:\n  ${[...new Set(warnings)].join('\n  ')}`); }
