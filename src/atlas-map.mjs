import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { normalizeTitle } from '../tools/commons.mjs';
import { readInfluence } from './influence.mjs';
import { project, bounds, round, linePath, loadGeometry, baseMap, paths, EUROPE, WORLD } from '../tools/geo/prepare.mjs';

const esc = (s = '') => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const text = (s = '') => String(s).replace(/<[^>]*>/g, '').replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => label ?? id);
const fold = (s) => text(s).normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const year = (date) => Number(String(date).slice(0, 4));
const residence = new Set(['born', 'childhood', 'studied', 'lived', 'worked', 'exile']);
const dates = (p) => `${p.from}${p.to && p.to !== p.from ? `–${p.to}` : ''}`;
let catalogue;

// Omitted ends are point events, never invented continuous residence intervals.
function dateLimit(date, end = false) {
  const [y, m, d] = String(date).split('-').map(Number);
  return y * 10000 + (m ?? (end ? 12 : 1)) * 100 + (d ?? (end ? new Date(Date.UTC(y, m ?? 12, 0)).getUTCDate() : 1));
}
function currentPlace(c, y) {
  if (c.born > y) return null;
  if (c.died && y >= c.died) {
    const final = c.places.findLastIndex((p) => ['died', 'buried'].includes(p.kind) && p.y <= y);
    if (final >= 0) return { p: final, dead: true, known: true };
  }
  let last = -1, active = -1;
  for (let i = 0; i < c.places.length; i++) {
    const p = c.places[i];
    if (!residence.has(p.kind) || p.y > y || (c.died && p.y > c.died)) continue;
    last = i;
    if (p.end >= y) active = i;
  }
  const p = active < 0 ? last : active;
  return p < 0 ? null : { p, dead: Boolean(c.died && y >= c.died), known: active >= 0 };
}
function arc(a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  return Math.abs(dx) + Math.abs(dy) < 1 ? `M${a.x},${a.y}c-12,-22 20,-22 10,0` : `M${a.x},${a.y}Q${round((a.x + b.x) / 2 + dy * .16)},${round((a.y + b.y) / 2 - dx * .16)} ${b.x},${b.y}`;
}
function recordingsAt(p, recordings) {
  if (!p.work) return [];
  const names = String(p.work).split(';').map((s) => fold(s.replace(/^[^:]+:\s*/, '')));
  return recordings.filter((l) => names.includes(fold(l.work))).map((l) => l.id);
}
function clusterCities(composers) {
  const cities = [];
  // Short city names precede venue-qualified names; each venue joins a fixed centre
  // within 7 km, not a transitive chain that can absorb neighbouring towns.
  const places = composers.flatMap((c) => c.places).sort((a, b) => a.name.length - b.name.length || a.name.localeCompare(b.name));
  for (const p of places) {
    let city = cities.find((c) => Math.hypot((p.lon - c.lon) * Math.cos(p.lat * Math.PI / 180), p.lat - c.lat) * 111.2 < 7);
    if (!city) { city = { id: cities.length, name: p.name, x: p.x, y: p.z, lat: p.lat, lon: p.lon, visits: [], pairs: [] }; cities.push(city); }
    p.city = city.id;
  }
  for (const c of composers) for (let i = 0; i < c.places.length; i++) {
    const p = c.places[i];
    if (p.status !== 'documented' || ['premiere', 'buried'].includes(p.kind) || (c.died && p.y > c.died)) continue;
    cities[p.city].visits.push({ c: c.id, p: i, from: p.from, to: p.to ?? p.from, a: p.y, b: p.end });
  }
  for (const city of cities) {
    const pairs = new Map();
    for (let i = 0; i < city.visits.length; i++) for (let j = i + 1; j < city.visits.length; j++) {
      const a = city.visits[i], b = city.visits[j];
      if (a.c === b.c) continue;
      const start = Math.max(dateLimit(a.from), dateLimit(b.from));
      const end = Math.min(dateLimit(a.to, true), dateLimit(b.to, true));
      if (start > end) continue;
      const ids = [a.c, b.c].sort(), key = `${ids.join(':')}:${start}:${end}`;
      pairs.set(key, { ids, from: Math.floor(start / 10000), to: Math.floor(end / 10000), evidence: [a, b].map(({ c, p }) => ({ c, p })) });
    }
    city.pairs = [...pairs.values()];
    delete city.lat; delete city.lon;
  }
  return cities;
}
function packFrame(composers, y, scale) {
  const occupied = [], result = [];
  for (let i = 0; i < composers.length; i++) {
    const c = composers[i], state = currentPlace(c, y);
    if (!state) continue;
    const p = c.places[state.p], width = state.dead ? 17 : Math.max(64, c.label.length * 6.5), height = state.dead ? 22 : 62;
    let dx = 0, dy = 0;
    for (let step = 0; step < 600; step++) {
      const theta = step * 2.399963, radius = step ? 14 * Math.sqrt(step) : 0;
      dx = Math.round(Math.cos(theta) * radius); dy = Math.round(Math.sin(theta) * radius);
      const x = p.x * scale + dx, z = p.z * scale + dy;
      if (!occupied.some((b) => Math.abs(x - b.x) < (width + b.w) / 2 + 3 && Math.abs(z - b.y) < (height + b.h) / 2 + 3)) {
        occupied.push({ x, y: z, w: width, h: height }); break;
      }
    }
    result.push([i, state.p, dx, dy, state.dead ? 1 : 0, state.known ? 1 : 0]);
  }
  return result;
}
function packRoute(c) {
  const box = bounds(c.places.map((p) => [p.x, p.z]), 28);
  for (const [key, width, height] of [['marker', 800, 480], ['mobileMarker', 390, 400]]) {
    const scale = Math.min((width - 85) / Math.max(box[2], 100), (height - 90) / Math.max(box[3], 100)), occupied = [];
    for (const p of c.places) {
      let dx = 0, dy = 0;
      for (let step = 0; step < 700; step++) {
        const angle = step * 2.399963, radius = 8 * Math.sqrt(step);
        dx = Math.round(Math.cos(angle) * radius); dy = Math.round(Math.sin(angle) * radius);
        const x = p.x * scale + dx, y = p.z * scale + dy;
        if (!occupied.some((q) => Math.hypot(q.x - x, q.y - y) < 24)) { occupied.push({ x, y }); break; }
      }
      p[key] = [dx, dy];
    }
  }
}
function miniMap(c, geometry) {
  const box = bounds(c.places.map((p) => [p.x, p.z]), 28), width = 660, height = 290;
  const scale = Math.min((width - 50) / Math.max(box[2], 90), (height - 35) / Math.max(box[3], 70));
  const transform = ([x, y]) => [round((x - box[0] - box[2] / 2) * scale + width / 2), round((y - box[1] - box[3] / 2) * scale + height / 2)];
  const points = c.places.map((p) => transform([p.x, p.z]));
  const seen = new Set();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Places in the life of ${esc(c.name)}"><rect width="660" height="290" fill="#111916"/><path d="${paths(geometry[0], .8, box, transform)}" fill="#302b20" stroke="#ad935b" stroke-width=".65"/><path d="${linePath(points)}" fill="none" stroke="#e1c78a" stroke-width="1.2"/>${points.map(([x, y], i) => {
    const city = c.places[i].city; if (seen.has(city)) return ''; seen.add(city);
    return `<circle cx="${x}" cy="${y}" r="4" fill="#e3c786"/><text x="${x + 7}" y="${y - 6}" fill="#f1e4c8" stroke="#111916" stroke-width="3" paint-order="stroke" font-family="Georgia,serif" font-size="11">${i + 1}</text>`;
  }).join('')}<rect x="5" y="5" width="650" height="280" fill="none" stroke="#c3a970" stroke-opacity=".5"/></svg>`;
}

/** A single composerPage hook; the full list is readable without JavaScript. */
export function placesSection(ctx, slug, add) {
  const c = catalogue?.get(slug);
  const link = `<a href="${ctx.base}atlas-map.html#c-${esc(slug)}">Explore ${esc(c?.label ?? slug)} on the Map →</a>`;
  if (!c) { add('places', 'Places', `<p>No sourced place record is published for this composer yet. ${link}</p>`); return; }
  add('places', 'Places', `<figure class="score-figure"><a href="${ctx.base}atlas-map.html#c-${esc(slug)}"><img src="${ctx.base}assets/data/geo/${esc(slug)}.svg" width="660" height="290" loading="lazy" alt="A map of ${esc(c.name)}’s recorded places; numbers correspond to the list below."></a><figcaption>Recorded places, joined in date order, not a reconstruction of roads or continuous residence. ${link}</figcaption></figure><details><summary>Read all ${c.places.length} place records and their sources</summary><ol>${c.places.map((p) => `<li><strong>${esc(p.name)}</strong> · ${esc(dates(p))} · ${esc(p.kind)} <small>(${esc(p.status)})</small><p>${esc(p.what)}${p.work ? ` <i>${esc(p.work)}</i>.` : ''}</p><p>${p.sources.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a>`).join(' · ')}</p></li>`).join('')}</ol></details>`);
}

export async function buildAtlasMap({ out, layout, composers, eras, art, listens, ROOT, OUT }) {
  const started = performance.now(), directory = path.join(ROOT, 'content/geo');
  const files = new Set((await readdir(directory).catch((e) => { if (e.code === 'ENOENT') return []; throw e; })).filter((f) => f.endsWith('.json')));
  const geometry = await loadGeometry(), base = baseMap(geometry), data = [];
  const eraById = new Map(eras.map((e) => [e.slug, e]));
  for (const c of composers) {
    if (!files.has(`${c.slug}.json`)) continue;
    const record = JSON.parse(await readFile(path.join(directory, `${c.slug}.json`), 'utf8'));
    if (!record.places?.length) continue;
    const recordings = listens.filter((l) => l.composer === c.slug).map((l) => ({ id: l.id, work: l.work, movement: l.movement ?? '', year: l.year ?? '' }));
    const places = record.places.map((p) => {
      const [x, z] = project(p.lon, p.lat);
      return { ...p, x, z, y: year(p.from), end: year(p.to ?? p.from), listens: recordingsAt(p, recordings) };
    }).sort((a, b) => dateLimit(a.from) - dateLimit(b.from));
    const src = art[normalizeTitle(c.portrait?.file ?? '')]?.src;
    const portrait = src?.replace(/\.webp$/, '-160.webp');
    data.push({ id: c.slug, name: c.name, label: c.family ?? c.name, born: c.born.year, died: c.died?.year ?? null, era: c.era, colour: eraById.get(c.era)?.accent ?? '#c9a65a', portrait: portrait && existsSync(path.join(OUT, portrait)) ? portrait : null, places, recordings, influences: [] });
  }
  const cities = clusterCities(data), byId = new Map(data.map((c) => [c.id, c]));
  for (const c of data) packRoute(c);
  const { edges, figures } = await readInfluence(ROOT), names = new Map([...composers.map((c) => [c.slug, c.name]), ...figures.map((f) => [f.id, f.name])]);
  for (const edge of edges) {
    const recipient = byId.get(edge.to); if (!recipient) continue;
    const claim = fold(`${edge.title} ${edge.claim}`);
    const eventIndex = recipient.places.findIndex((p) => p.y <= edge.year && p.end >= edge.year && (` ${claim} `.includes(` ${fold(cities[p.city].name)} `) || (p.kind === 'heard' && p.work && edge.works?.from && fold(p.work).includes(fold(edge.works.from)))));
    if (eventIndex < 0) continue;
    const p = recipient.places[eventIndex], origin = byId.get(edge.from), state = origin && currentPlace(origin, Math.min(edge.year, origin.died ?? edge.year));
    const a = state ? { x: origin.places[state.p].x, y: origin.places[state.p].z } : { x: p.x, y: p.z };
    const item = { id: edge.id, from: edge.from, to: edge.to, title: edge.title, year: edge.year, status: edge.status, place: p.name, origin: names.get(edge.from) ?? edge.from, path: arc(a, { x: p.x, y: p.z }), note: 'A connection with music at a recorded place; the line does not assert travel or a personal meeting.' };
    recipient.influences.push(item);
    if (origin && origin !== recipient) origin.influences.push(item);
  }
  const frames = [], mobileFrames = [];
  for (let y = 1680; y <= 1990; y++) { frames.push(packFrame(data, y, 1.5)); mobileFrames.push(packFrame(data, y, .75)); }
  const compact = data.map((c) => ({ id: c.id, name: c.name, label: c.label, born: c.born, died: c.died, portrait: c.portrait, colour: c.colour, places: c.places.map((p, i) => {
    const previous = c.places[i - 1];
    return { x: p.x, z: p.z, y: p.y, end: p.end, city: p.city, kind: p.kind, ...(p.kind === 'premiere' ? { work: p.work ?? p.what } : {}), path: previous ? (p.kind === 'travelled' ? arc({ x: previous.x, y: previous.z }, { x: p.x, y: p.z }) : `M${previous.x},${previous.z}L${p.x},${p.z}`) : '' };
  }) }));
  catalogue = byId;
  const target = path.join(OUT, 'assets/data/geo'); await mkdir(target, { recursive: true });
  await Promise.all([
    writeFile(path.join(target, 'base.json'), JSON.stringify(base)),
    writeFile(path.join(target, 'index.json'), JSON.stringify({ first: 1680, last: 1990, composers: compact, cities, frames, mobileFrames, europe: EUROPE, world: WORLD })),
    ...data.flatMap((c) => [writeFile(path.join(target, `${c.id}.json`), JSON.stringify(c)), writeFile(path.join(target, `${c.id}.svg`), miniMap(c, geometry))]),
  ]);
  const bands = eras.map((e, i) => `<span style="left:${Math.max(0, e.from - 1680) / 310 * 100}%;width:${(Math.min(1990, e.to) - Math.max(1680, e.from)) / 310 * 100}%;--band:${esc(e.accent)};--lane:${i % 3}" title="${esc(e.name)} · ${e.from}–${e.to}"></span>`).join('');
  const body = `<div class="atlas-map-page" data-atlas-map>
<header class="am-heading"><div><span class="kicker">The geography of listening · 1680–1990</span><h1>The <em>Map</em></h1><p>Lives, places, and the music that travelled between them.</p></div><p class="am-census"><strong>${data.length}</strong> mapped lives<span>${data.reduce((n, c) => n + c.places.length, 0)} sourced place records</span></p></header>
<div class="am-toolbar"><label>Follow a composer<select name="composer" aria-label="Focus a composer"><option value="">All mapped lives</option>${data.map((c) => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join('')}</select></label><label>Find a city<select name="city" aria-label="Find a city">${[...cities].sort((a, b) => a.name.localeCompare(b.name)).map((c) => `<option value="${c.id}"${c.name === 'Vienna' ? ' selected' : ''}>${esc(c.name)}</option>`).join('')}</select></label><div class="am-extents"><button type="button" data-action="europe">Europe</button><button type="button" data-action="world">Across the Atlantic</button><button type="button" data-action="encounters">Encounters</button></div></div>
<div class="am-workspace"><div class="am-stage"><svg class="am-map" role="group" aria-label="Map of composers’ places. Drag to pan; pinch or use plus and minus to zoom. Arrow keys pan; Home returns to Europe." tabindex="0"><defs><clipPath id="am-oval"><ellipse rx="16" ry="21"/></clipPath></defs><g class="am-world"><path class="am-graticule"/><path class="am-land"/><path class="am-countries"/><path class="am-coast"/><g class="am-trails"></g><g class="am-influence"></g><g class="am-route"></g><g class="am-cities"></g><g class="am-events"></g><g class="am-people"></g><g class="am-route-points"></g></g></svg><div class="am-cartouche"><span>Contrapunctus</span><em>Atlas of musical lives</em><strong data-year-display>1805</strong><small>Mercator · Natural Earth</small></div><div class="am-compass" aria-hidden="true"><span>N</span><svg viewBox="0 0 60 60"><path d="M30 2L35 25 58 30 35 35 30 58 25 35 2 30 25 25Z" fill="none" stroke="currentColor"/><path d="M30 2L30 58M2 30L58 30M30 2L35 25 30 30Z" fill="currentColor" stroke="currentColor"/><circle cx="30" cy="30" r="17" fill="none" stroke="currentColor"/></svg></div><div class="am-zoom"><button type="button" data-action="zoom-in" aria-label="Zoom in">+</button><button type="button" data-action="zoom-out" aria-label="Zoom out">−</button><button type="button" data-action="fit" aria-label="Fit the current route or Europe">Fit</button></div><p class="am-map-note">Drag to explore · select a portrait or city</p></div>
<aside class="am-card" aria-label="Places and encounters"><div class="am-card-bar"><span>Places &amp; encounters</span><button type="button" data-action="close" aria-label="Close place card">×</button></div><div class="am-card-content"></div></aside></div>
<div class="am-time"><button type="button" data-action="time-play" aria-label="Play the years" aria-pressed="false">▶</button><label class="am-year-label" for="am-year">Year <output for="am-year" data-year-display>1805</output></label><div class="am-time-track"><div class="am-era-bands" aria-hidden="true">${bands}</div><input id="am-year" type="range" min="1680" max="1990" value="1805" step="1" aria-label="Map year"><div class="am-year-ticks" aria-hidden="true">${[1680, 1750, 1800, 1850, 1900, 1990].map((y) => `<span style="left:${(y - 1680) / 310 * 100}%">${y}</span>`).join('')}</div></div></div>
<div class="am-legend"><span><i class="am-key-cameo"></i>Latest residence or post</span><span><i class="am-key-route"></i>Recorded path</span><span><b>✧</b> Premiere</span><span><b>†</b> Died</span><span><i class="am-key-dotted"></i>Music heard / influence</span></div><p class="am-status" role="status" aria-live="polite">Loading the engraved map…</p>
<details class="am-method"><summary>How to read this map · sources &amp; method</summary><div><p>The portrait marks the latest active residence or post recorded by that year. When no stay covers the year, a dashed frame marks the <em>last recorded</em> place, not proof of continued residence. Short visits and premieres do not move a residence. Overlapping seasonal homes cannot be resolved into a daily itinerary at this annual scale. A cross marks death; later burial records may move it.</p><p>City groups join coordinates within 7 km of a fixed centre. Encounters use only documented, explicitly dated presence: omitted end dates are point events. Premieres do not establish the composer’s attendance, and burials do not establish living presence, so neither enters the encounter calculation. Overlapping date ranges are evidence of possible co-presence, not proof of a meeting. Annual labels retain the source’s precision in the individual records.</p><p>Numbered lines join place records in date order, not historical roads or actual transit routes. Dotted influence lines connect musical evidence to a place; an origin may be an earlier residence, never an assertion of a meeting. Posthumous premieres are marked separately. Exact normalised work-title matches offer recordings of that work; otherwise the card explicitly offers other recordings by the composer. Only published recordings are offered.</p><p>Land, coastline and present-day country outlines: <a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noopener">Natural Earth 1:50m, public domain</a>, via the <a href="https://github.com/nvkelso/natural-earth-vector/tree/${base.revision}/geojson" target="_blank" rel="noopener">pinned source revision</a>. Mercator projection and Douglas–Peucker simplification are computed at build time. Country outlines are orientation aids, <em>not historical political borders</em>. The map has no tile server. Place evidence and status appear in each composer’s card; unresearched composers simply do not appear.</p><p><a href="assets/data/geo/base.json" download>Download the projected base map</a> · <a href="assets/data/geo/index.json" download>Download the chronology and encounters</a>. Full records are loaded only when a composer is selected.</p></div></details><noscript><p>The interactive map needs JavaScript. Every composer’s <a href="composers/index.html">Places section</a> includes a static map, dates and sources without it.</p></noscript></div>`;
  await out('atlas-map.html', layout({ base: '', page: 'atlas-map' }, { title: 'The Map — Contrapunctus', description: 'Follow composers through their recorded places, hear the music written and premiered there, and find documented overlaps in a city through time.', body, dark: true, nav: 'map', accent: '#dfc287', head: '<link rel="stylesheet" href="assets/css/atlas-map.css">', modules: ['atlas-map'] }));
  console.log(`map: ${data.length} composers, ${cities.length} city groups, ${cities.reduce((n, c) => n + c.pairs.length, 0)} dated overlaps; ${(performance.now() - started).toFixed(0)} ms`);
}
