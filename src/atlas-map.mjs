import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { normalizeTitle } from '../tools/commons.mjs';
import { readInfluence } from './influence.mjs';
import { project, bounds, round, simplify, linePath, loadGeometry, baseMap, paths, EUROPE, WORLD } from '../tools/geo/prepare.mjs';

const esc = (s = '') => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const italic = (s = '') => esc(s).replace(/&lt;(\/?)i&gt;/g, '<$1i>');  // place descriptions may italicise titles
const text = (s = '') => String(s).replace(/<[^>]*>/g, '').replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => label ?? id);
const fold = (s) => text(s).normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const year = (date) => Number(String(date).slice(0, 4));
const residence = new Set(['born', 'childhood', 'studied', 'lived', 'worked', 'exile']);
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// "1809-05-31" reads "31 May 1809"; a range with a full date takes a spaced dash.
const readableDate = (date) => { const [y, m, d] = String(date).split('-'); return m ? `${d ? `${Number(d)}\u00a0` : ''}${MONTHS[Number(m) - 1]}\u00a0${y}` : y; };
const dates = (p) => {
  if (!p.to || p.to === p.from) return readableDate(p.from);
  const a = readableDate(p.from), b = readableDate(p.to);
  return a.includes('\u00a0') || b.includes('\u00a0') ? `${a}\u00a0– ${b}` : `${a}–${b}`;
};
const miniSizes = new Map();
let catalogue;

// Authored events keep their precision; residence-derived intervals are separate.
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
  let last = -1, active = -1, activeRank = -1;
  for (let i = 0; i < c.places.length; i++) {
    const p = c.places[i];
    if (!residence.has(p.kind) || p.y > y || (c.died && p.y > c.died)) continue;
    last = i;
    if (p.end >= y) {
      // An ongoing post is the annual primary location when a summer home
      // overlaps it. Point engagements do not displace an explicit residence.
      const rank = p.to ? (p.kind === 'worked' ? 4 : ['lived', 'exile'].includes(p.kind) ? 3 : 2) : 1;
      if (rank >= activeRank) { active = i; activeRank = rank; }
    }
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
    if (!city) { city = { id: cities.length, name: p.name, x: p.x, y: p.z, lat: p.lat, lon: p.lon, visits: [], residents: [], pairs: [] }; cities.push(city); }
    p.city = city.id;
  }
  for (const c of composers) for (let i = 0; i < c.places.length; i++) {
    const p = c.places[i];
    if (p.status !== 'documented' || ['premiere', 'buried'].includes(p.kind) || (c.died && p.y > c.died)) continue;
    cities[p.city].visits.push({ c: c.id, p: i, from: p.from, to: p.to ?? p.from, a: p.y, b: p.end, basis: 'dated' });
  }
  // Use precisely the same primary-place selection as the cameos. Do not
  // rewrite authored end dates to make these derived intervals look sourced.
  for (const c of composers) {
    let interval = null;
    for (let y = 1680; y <= 1990; y++) {
      const state = currentPlace(c, y);
      if (!state || state.dead) { interval = null; continue; }
      const p = c.places[state.p];
      if (interval?.p === state.p && interval.b === y - 1) {
        interval.b = y; interval.to = String(y);
      } else {
        interval = { c: c.id, p: state.p, from: p.y === y ? p.from : String(y), to: String(y), a: y, b: y, basis: 'residence', sourceFrom: p.from, sourceTo: p.to ?? p.from, sourceEnd: p.end, status: p.status };
        cities[p.city].residents.push(interval);
      }
    }
  }
  for (const city of cities) {
    const pairs = new Map(), presence = [...city.visits, ...city.residents];
    for (let i = 0; i < presence.length; i++) for (let j = i + 1; j < presence.length; j++) {
      const a = presence[i], b = presence[j];
      if (a.c === b.c) continue;
      const start = Math.max(dateLimit(a.from), dateLimit(b.from));
      const end = Math.min(dateLimit(a.to, true), dateLimit(b.to, true));
      if (start > end) continue;
      const ids = [a.c, b.c].sort(), basis = a.basis === 'dated' && b.basis === 'dated' ? 'dated' : 'residence';
      const key = `${ids.join(':')}:${start}:${end}:${basis}`;
      pairs.set(key, { ids, basis, from: Math.floor(start / 10000), to: Math.floor(end / 10000), evidence: [a, b].map(({ c, p, basis }) => ({ c, p, basis })) });
    }
    city.pairs = [...pairs.values()];
    delete city.lat; delete city.lon;
  }
  return cities;
}
function packFrame(composers, y) {
  const rows = [];
  for (let i = 0; i < composers.length; i++) {
    const state = currentPlace(composers[i], y);
    if (state) rows.push([i, state.p, state.dead ? 1 : 0, state.known ? 1 : 0]);
  }
  return rows;
}
function shoreClearance(land) {
  const rings = land.map((g) => ({ points: simplify(g.points, 2), box: g.box })).filter((g) => g.points.length >= 4);
  return (x, y) => {
    let inside = false, best = 40 * 40;
    for (const { points, box } of rings) {
      const bx = Math.max(box[0] - x, 0, x - box[0] - box[2]), by = Math.max(box[1] - y, 0, y - box[1] - box[3]);
      if (bx * bx + by * by > best) continue;
      for (let i = 1; i < points.length; i++) {
        const [ax, ay] = points[i - 1], [zx, zy] = points[i];
        if ((ay > y) !== (zy > y) && x < (zx - ax) * (y - ay) / (zy - ay) + ax) inside = !inside;
        const dx = zx - ax, dy = zy - ay, length = dx * dx + dy * dy;
        const t = length ? Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / length)) : 0;
        best = Math.min(best, (x - ax - t * dx) ** 2 + (y - ay - t * dy) ** 2);
      }
    }
    return inside ? Math.floor(Math.sqrt(best) * 9) / 10 : 0;
  };
}
function prepareRoute(c, cities) {
  const regionFor = (p) => p.lon >= -25 && p.lon <= 60 && p.lat >= 32 && p.lat <= 72 ? 'europe' : p.lon < -25 ? 'americas' : p.lon < 60 && p.lat < 32 ? 'africa' : 'asia-pacific';
  for (const p of c.places) p.region = regionFor(p);
  const primary = c.places.some((p) => p.region === 'europe') ? 'europe' : c.places[0].region;
  const groups = new Map();
  for (const [i, p] of c.places.entries()) {
    const group = groups.get(p.city) ?? { city: p.city, region: p.region, places: [] };
    group.places.push(i); groups.set(p.city, group);
  }
  const stops = [...groups.values()].map((g) => ({ ...g, name: cities[g.city].name, x: cities[g.city].x, z: cities[g.city].y }));
  const extent = (points, padding) => bounds(points.map((p) => [p.x, p.z]), padding);
  const regions = [...new Set(c.places.map((p) => p.region))].filter((id) => id !== primary).map((id) => {
    const places = c.places.map((p, i) => p.region === id ? i : -1).filter((i) => i >= 0);
    const regionStops = stops.filter((s) => s.region === id);
    return { id, label: regionStops.length === 1 ? regionStops[0].name : ({ americas: 'The Americas', africa: 'Africa', 'asia-pacific': 'Asia & the Pacific', europe: 'Europe' })[id], places, bounds: extent(places.map((i) => c.places[i]), 32) };
  });
  const transfers = stops.filter((s) => s.region !== primary).flatMap((stop) => {
    const first = stop.places[0];
    const origin = c.places.slice(0, first).findLast((p) => p.region === primary) ?? c.places.find((p) => p.region === primary);
    if (!origin) return [];
    return [{ city: stop.city, region: stop.region, x: origin.x, z: origin.z, label: `to ${stop.name}, ${Math.min(...stop.places.map((i) => c.places[i].y))}–${Math.max(...stop.places.map((i) => c.places[i].end))}` }];
  });
  c.map = { primary, bounds: extent(c.places.filter((p) => p.region === primary), 12), stops, regions, transfers };
}
// Place numbers are grouped by city and written as ranges: "1, 7, 15", "13–25".
function numberRanges(numbers) {
  const runs = [];
  for (const n of numbers) { const last = runs.at(-1); if (last && n === last[1] + 1) last[1] = n; else runs.push([n, n]); }
  return runs.map(([a, b]) => a === b ? `${a}` : b === a + 1 ? `${a}, ${b}` : `${a}–${b}`).join(', ');
}
const textWidth = (s, size) => [...s].reduce((w, ch) => w + (/\d/.test(ch) ? .58 : ch === '–' ? .5 : .28), 0) * size;
// Greedy cartographic placement: the nearest free position around each dot,
// moving outwards with a leader line before accepting the least overlap. A label that would sit as near
// another stop as its own (Warsaw beside Żelazowa Wola, the Thuringian towns) is moved until it is unambiguous.
function placeLabels(items, dots, rect, size) {
  const overlap = (a, b) => Math.max(0, Math.min(a[0] + a[2], b[0] + b[2]) - Math.max(a[0], b[0])) * Math.max(0, Math.min(a[1] + a[3], b[1] + b[3]) - Math.max(a[1], b[1]));
  const gap = ([bx, by, bw, bh], x, y) => Math.hypot(Math.max(bx - x, 0, x - bx - bw), Math.max(by - y, 0, y - by - bh));
  const taken = dots.map(([x, y]) => [x - 3.5, y - 3.5, 7, 7]);
  const crowd = (item) => items.filter((o) => Math.hypot(o.x - item.x, o.y - item.y) < 40).length;
  const directions = [[1, 0], [-1, 0], [0, -1], [0, 1], [1, -1], [-1, -1], [1, 1], [-1, 1]];
  return [...items].sort((a, b) => crowd(b) - crowd(a) || a.order - b.order).map((item) => {
    const w = textWidth(item.text, size) + 2, h = size + 2;
    let best = null;
    search: for (const distance of [5, 15, 27, 41, 57, 75]) {
      for (const [dx, dy] of directions) {
        const d = dx && dy ? distance * .75 : distance;
        const x = dx > 0 ? item.x + d : dx < 0 ? item.x - d - w : item.x - w / 2;
        const y = dy > 0 ? item.y + d : dy < 0 ? item.y - d - h : item.y - h / 2;
        const box = [x, y, w, h];
        if (x < rect[0] + 3 || y < rect[1] + 3 || x + w > rect[0] + rect[2] - 3 || y + h > rect[1] + rect[3] - 3) continue;
        const own = gap(box, item.x, item.y);
        const ambiguous = items.some((o) => o !== item && gap(box, o.x, o.y) < own + 8);
        const cost = taken.reduce((sum, other) => sum + overlap(box, other), 0) + (ambiguous ? w * h : 0);
        if (!best || cost < best.cost) best = { box, cost, distance };
        if (!cost) break search;
      }
    }
    best ??= { box: [item.x + 5, item.y - h / 2, w, h], distance: 5 };
    taken.push(best.box);
    return { ...item, box: best.box, leader: best.distance > 5 };
  });
}
/** The chapter map: every panel filled edge to edge with land and sea, labels kept clear of each other. */
function miniMap(c, geometry, narrow = false) {
  const regions = c.map.regions, n = regions.length, size = 13, [, , spanW, spanH] = c.map.bounds;
  const W = narrow ? 360 : 660, mainW = !narrow && n ? W - 196 : W;
  // Places spread north–south get a taller panel, so a dense cluster (Bach's Thuringia) is drawn larger.
  const fitH = (min, max) => Math.round(Math.min(max, Math.max(min, (mainW - 60) * Math.max(spanH, 32) / Math.max(spanW, 32) + 60)));
  const mainH = narrow ? fitH(250, 330) : fitH(300, 400), insetH = narrow && n ? 120 : 0, H = mainH + (insetH ? insetH + 8 : 0);
  const panels = [{ id: c.map.primary, label: '', bounds: c.map.bounds, rect: [0, 0, mainW, mainH] }, ...regions.map((r, i) => ({ ...r, rect: narrow
    ? [i * (W + 8) / n, mainH + 8, (W + 8) / n - 8, insetH]
    : [mainW + 8, i * (mainH + 8) / n, W - mainW - 8, (mainH + 8) / n - 8] }))];
  const renderPanel = (panel, index) => {
    const box = panel.bounds, [x, y, width, height] = panel.rect, pad = index ? 18 : 30;
    const scale = Math.min((width - 2 * pad) / Math.max(box[2], 32), (height - 2 * pad - (index ? 14 : 0)) / Math.max(box[3], 32));
    const cx = box[0] + box[2] / 2, cy = box[1] + box[3] / 2, oy = index ? 7 : 0;
    const transform = ([px, py]) => [round((px - cx) * scale + x + width / 2), round((py - cy) * scale + y + height / 2 + oy)];
    // Clip land to the whole panel (plus a hairline margin), never to the data's bounding box.
    const view = [cx - (width / 2 + 2) / scale, cy - (height / 2 + oy + 2) / scale, (width + 4) / scale, (height + 4) / scale];
    const places = c.places.map((p, i) => ({ p, i })).filter(({ p }) => p.region === panel.id);
    const routes = places.filter(({ i }) => i && c.places[i - 1].region === panel.id).map(({ p, i }) => linePath([transform([c.places[i - 1].x, c.places[i - 1].z]), transform([p.x, p.z])])).join('');
    const dots = places.map(({ p }) => transform([p.x, p.z]));
    const labels = placeLabels(c.map.stops.filter((s) => s.region === panel.id).map((s, order) => {
      const [px, py] = transform([s.x, s.z]);
      return { x: px, y: py, order, name: s.name, text: numberRanges(s.places.map((i) => i + 1)) };
    }), dots, index ? [x, y + 20, width, height - 20] : [x, y, width, height], size);
    const leader = ({ x: px, y: py, box: [bx, by, bw, bh] }) => {
      const ex = Math.max(bx, Math.min(bx + bw, px)), ey = Math.max(by, Math.min(by + bh, py));
      return `M${round(px)},${round(py)}L${round(ex)},${round(ey)}`;
    };
    return `<g clip-path="url(#p${index})"><rect x="${x}" y="${y}" width="${width}" height="${height}" fill="#121a17"/><path d="${paths(geometry[2], 1.2, view, transform)}" fill="#2f2a1f" stroke="#7d6c4a" stroke-width=".5"/><path d="${paths(geometry[0], .8, view, transform)}" fill="none" stroke="#b59a62" stroke-width=".7"/></g>`
      + `<path d="${routes}" fill="none" stroke="#dcc184" stroke-opacity=".75" stroke-width="1.1"/><path d="${labels.filter((l) => l.leader).map(leader).join('')}" fill="none" stroke="#f3e6c9" stroke-opacity=".85" stroke-width=".8" stroke-dasharray="2 2"/>`
      + dots.map(([px, py]) => `<circle cx="${px}" cy="${py}" r="2.6" fill="#ecd498" stroke="#121a17" stroke-width="1"/>`).join('')
      + labels.map((l) => `<text x="${round(l.box[0] + 1)}" y="${round(l.box[1] + 1 + size * .8)}"><title>${esc(l.name)}: ${esc(l.text)}</title>${esc(l.text)}</text>`).join('')
      + (index ? `<text class="r" x="${x + 8}" y="${y + 16}">${esc(panel.label)}</text>` : '')
      + `<rect x="${x + .5}" y="${y + .5}" width="${width - 1}" height="${height - 1}" fill="none" stroke="#c3a970" stroke-opacity=".55"/>`;
  };
  const clips = panels.map((panel, i) => `<clipPath id="p${i}"><rect x="${panel.rect[0]}" y="${panel.rect[1]}" width="${panel.rect[2]}" height="${panel.rect[3]}"/></clipPath>`).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Places in the life of ${esc(c.name)}"><defs>${clips}<style>text{font:${size}px Georgia,'Times New Roman',serif;fill:#f3e6c9;stroke:#121a17;stroke-width:3.5px;stroke-linejoin:round;paint-order:stroke}.r{font-style:italic;fill:#e3c786}</style></defs>${panels.map(renderPanel).join('')}</svg>`;
  return { svg, width: W, height: H };
}

/** A single composerPage hook; the full list is readable without JavaScript. */
export function placesSection(ctx, slug, add) {
  const c = catalogue?.get(slug);
  const link = `<a href="${ctx.base}atlas-map.html#c-${esc(slug)}">${esc(c?.label ?? slug)} on the Map</a>`;
  if (!c) { add('places', 'Places', `<p>No sourced place record is published for this composer yet. ${link}</p>`); return; }
  // Coordinate lookups (OpenStreetMap, Wikipedia coordinate queries) stay in the data files; readers see the sources for the claim itself.
  const claimSources = (p) => p.sources.filter((s) => !/nominatim\.openstreetmap\.org|[?&]prop=coordinates/.test(s.url))
    .map((s) => ({ ...s, url: s.url.replace(/^(https:\/\/[a-z]+\.wikipedia\.org)\/w\/index\.php\?title=([^&]+)&action=render$/, '$1/wiki/$2') }));
  const [wide, narrow] = miniSizes.get(slug), src = `${ctx.base}assets/data/geo/${esc(slug)}`;
  add('places', 'Places', `<figure class="places-map"><a href="${ctx.base}atlas-map.html#c-${esc(slug)}"><picture><source media="(max-width: 600px)" srcset="${src}-narrow.svg" width="${narrow.width}" height="${narrow.height}"><img src="${src}.svg" width="${wide.width}" height="${wide.height}" loading="lazy" alt="A map of ${esc(c.name)}’s recorded places; numbers correspond to the list below."></picture></a><figcaption>Every recorded place, joined in date order. ${link}</figcaption></figure><details class="places-list"><summary>All ${c.places.length} places, with sources</summary><ol>${c.places.map((p) => `<li><strong>${esc(p.name)}</strong>\u00a0· ${esc(dates(p))}\u00a0· ${esc(p.kind)}${p.status === 'documented' ? '' : ` <small>(${esc(p.status)})</small>`}<p>${italic(p.what)}${p.work ? ` <i>${esc(p.work)}</i>.` : ''}</p><p>${claimSources(p).map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a>`).join('\u00a0· ')}</p></li>`).join('')}</ol></details>`);
}

export async function buildAtlasMap({ out, layout, composers, eras, art, listens, ROOT, OUT }) {
  const started = performance.now(), directory = path.join(ROOT, 'content/geo');
  const files = new Set((await readdir(directory).catch((e) => { if (e.code === 'ENOENT') return []; throw e; })).filter((f) => f.endsWith('.json')));
  const geometry = await loadGeometry(), base = baseMap(geometry), clearance = shoreClearance(geometry[0]), data = [];
  const eraById = new Map(eras.map((e) => [e.slug, e]));
  for (const c of composers) {
    if (!files.has(`${c.slug}.json`)) continue;
    const record = JSON.parse(await readFile(path.join(directory, `${c.slug}.json`), 'utf8'));
    if (!record.places?.length) continue;
    const recordings = listens.filter((l) => l.composer === c.slug).map((l) => ({ id: l.id, work: l.work, movement: l.movement ?? '', year: l.year ?? '' }));
    const places = record.places.map((p) => {
      const [x, z] = project(p.lon, p.lat);
      return { ...p, x, z, shore: clearance(x, z), y: year(p.from), end: year(p.to ?? p.from), listens: recordingsAt(p, recordings) };
    }).sort((a, b) => dateLimit(a.from) - dateLimit(b.from));
    const src = art[normalizeTitle(c.portrait?.file ?? '')]?.src;
    const portrait = src?.replace(/\.webp$/, '-160.webp');
    data.push({ id: c.slug, name: c.name, label: c.short ?? c.family ?? c.name, born: c.born.year, died: c.died?.year ?? null, era: c.era, colour: eraById.get(c.era)?.accent ?? '#c9a65a', portrait: portrait && existsSync(path.join(OUT, portrait)) ? portrait : null, places, recordings, influences: [] });
  }
  const cities = clusterCities(data), byId = new Map(data.map((c) => [c.id, c]));
  for (const c of data) prepareRoute(c, cities);
  const { edges, figures } = await readInfluence(ROOT), names = new Map([...composers.map((c) => [c.slug, c.name]), ...figures.map((f) => [f.id, f.name])]);
  for (const edge of edges) {
    const recipient = byId.get(edge.to); if (!recipient) continue;
    const claim = fold(`${edge.title} ${edge.claim}`);
    const eventIndex = recipient.places.findIndex((p) => p.y <= edge.year && p.end >= edge.year && (` ${claim} `.includes(` ${fold(cities[p.city].name)} `) || (p.kind === 'heard' && p.work && edge.works?.from && fold(p.work).includes(fold(edge.works.from)))));
    if (eventIndex < 0) continue;
    const p = recipient.places[eventIndex], origin = byId.get(edge.from), state = origin && currentPlace(origin, Math.min(edge.year, origin.died ?? edge.year));
    const a = state ? { x: origin.places[state.p].x, y: origin.places[state.p].z } : { x: p.x, y: p.z };
    const item = { id: edge.id, from: edge.from, to: edge.to, title: edge.title, year: edge.year, status: edge.status, place: p.name, origin: names.get(edge.from) ?? edge.from, path: arc(a, { x: p.x, y: p.z }), note: 'Music linked to this place; the connection’s account and sources are in the Web of Influence.' };
    recipient.influences.push(item);
    if (origin && origin !== recipient) origin.influences.push(item);
  }
  const frames = [];
  for (let y = 1680; y <= 1990; y++) frames.push(packFrame(data, y));
  const compact = data.map((c) => ({ id: c.id, name: c.name, label: c.label, born: c.born, died: c.died, portrait: c.portrait, colour: c.colour, places: c.places.map((p, i) => {
    const previous = c.places[i - 1];
    return { x: p.x, z: p.z, shore: p.shore, y: p.y, end: p.end, city: p.city, region: p.region, kind: p.kind, ...(p.kind === 'premiere' ? { work: p.work ?? p.what } : {}), path: previous ? (p.kind === 'travelled' ? arc({ x: previous.x, y: previous.z }, { x: p.x, y: p.z }) : `M${previous.x},${previous.z}L${p.x},${p.z}`) : '' };
  }) }));
  catalogue = byId;
  const target = path.join(OUT, 'assets/data/geo'); await mkdir(target, { recursive: true });
  await Promise.all([
    writeFile(path.join(target, 'base.json'), JSON.stringify(base)),
    writeFile(path.join(target, 'index.json'), JSON.stringify({ first: 1680, last: 1990, composers: compact, cities, frames, europe: EUROPE, world: WORLD })),
    ...data.flatMap((c) => {
      const wide = miniMap(c, geometry), narrow = miniMap(c, geometry, true);
      miniSizes.set(c.id, [wide, narrow]);
      return [writeFile(path.join(target, `${c.id}.json`), JSON.stringify(c)), writeFile(path.join(target, `${c.id}.svg`), wide.svg), writeFile(path.join(target, `${c.id}-narrow.svg`), narrow.svg)];
    }),
  ]);
  const bands = eras.map((e, i) => `<span style="left:${Math.max(0, e.from - 1680) / 310 * 100}%;width:${(Math.min(1990, e.to) - Math.max(1680, e.from)) / 310 * 100}%;--band:${esc(e.accent)};--lane:${i % 3}" title="${esc(e.name)} · ${e.from}–${e.to}"></span>`).join('');
  const body = `<div class="atlas-map-page" data-atlas-map>
<header class="am-heading"><div><span class="kicker">Places and dates · 1680–1990</span><h1>The <em>Map</em></h1><p>Where the composers lived, worked and travelled, and where their music was first performed, year by year, with a source for every place.</p></div><p class="am-census"><strong>${data.length}</strong> composers<span>${data.reduce((n, c) => n + c.places.length, 0)} places with sources</span></p></header>
<div class="am-toolbar"><label>Composer<select name="composer" aria-label="Composer"><option value="">All composers</option>${data.map((c) => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join('')}</select></label><label>City<select name="city" aria-label="City"><option value="" disabled hidden>Choose a city</option>${[...cities].sort((a, b) => a.name.localeCompare(b.name)).map((c) => `<option value="${c.id}"${c.name === 'Vienna' ? ' selected' : ''}>${esc(c.name)}</option>`).join('')}</select></label><div class="am-extents"><button class="textbook-button" type="button" data-action="europe">Europe</button><button class="textbook-button" type="button" data-action="world">World</button><button class="textbook-button" type="button" data-action="encounters">Encounters</button></div></div>
<noscript><p class="am-noscript">The interactive map needs JavaScript; each composer’s <a href="composers/index.html">Places section</a> also has a static map, dates and sources.</p></noscript>
<div class="am-workspace"><div class="am-stage"><svg class="am-map" role="group" aria-label="Map of composers’ places. Drag to pan; pinch or use plus and minus to zoom. Arrow keys pan; Home returns to Europe." tabindex="0"><defs><clipPath id="am-oval"><ellipse rx="16" ry="21"/></clipPath><marker id="am-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8" fill="none" stroke="#e3c78c"/></marker></defs><g class="am-world"><path class="am-graticule"/><path class="am-land"/><path class="am-countries"/><path class="am-coast"/><g class="am-trails"></g><g class="am-influence"></g><g class="am-route"></g><g class="am-cities"></g><g class="am-events"></g><g class="am-people"></g><g class="am-clusters"></g><g class="am-route-points"></g></g><g class="am-transfers"></g></svg><section class="am-inset" hidden aria-label="Places beyond Europe"><label>Outside Europe<select name="inset" aria-label="Overseas region"></select></label><svg class="am-inset-map" viewBox="0 0 200 130" role="group" aria-label="Overseas places; numbered city badges open their records"><g class="am-inset-world"><path class="am-land"/><path class="am-coast"/><g class="am-inset-routes"></g><g class="am-inset-points"></g></g></svg><p class="am-inset-caption"></p></section><div class="am-cartouche"><span>Contrapunctus</span><em>Places of composers</em><strong data-year-display>1805</strong><small>Mercator · Natural Earth</small></div><div class="am-compass" aria-hidden="true"><span>N</span><svg viewBox="0 0 60 60"><path d="M30 2L35 25 58 30 35 35 30 58 25 35 2 30 25 25Z" fill="none" stroke="currentColor"/><path d="M30 2L30 58M2 30L58 30M30 2L35 25 30 30Z" fill="currentColor" stroke="currentColor"/><circle cx="30" cy="30" r="17" fill="none" stroke="currentColor"/></svg></div><div class="am-zoom"><button type="button" data-action="zoom-in" aria-label="Zoom in">+</button><button type="button" data-action="zoom-out" aria-label="Zoom out">−</button><button type="button" data-action="fit" aria-label="Fit the current route or Europe">Fit</button></div><p class="am-map-note">Select a portrait to show that composer’s places</p></div>
<aside class="am-card" aria-label="Places and encounters"><div class="am-card-bar"><span>Places &amp; encounters</span><button type="button" data-action="close" aria-label="Close place card">×</button></div><div class="am-card-content"></div></aside></div>
<div class="am-time"><button class="textbook-button" type="button" data-action="time-play">Play years</button><label class="am-year-label" for="am-year">Year <output for="am-year" data-year-display>1805</output></label><div class="am-time-track"><div class="am-era-bands" aria-hidden="true">${bands}</div><input id="am-year" type="range" min="1680" max="1990" value="1805" step="1" aria-label="Map year"><div class="am-year-ticks" aria-hidden="true">${[1680, 1750, 1800, 1850, 1900, 1990].map((y) => `<span style="left:${(y - 1680) / 310 * 100}%">${y}</span>`).join('')}</div></div></div>
<div class="am-legend"><span><i class="am-key-cameo"></i>Main post or home</span><span><i class="am-key-route"></i>Places in date order</span><span><svg class="am-key-lozenge" viewBox="-5 -7.5 10 15" aria-hidden="true"><path d="M0,-6.5L4.2,0L0,6.5L-4.2,0Z"/></svg> Première</span><span><b>†</b> Died</span><span><i class="am-key-dotted"></i>Music heard or borrowed</span></div><p class="am-status" role="status" aria-live="polite">Loading the map…</p>
<details class="am-method"><summary>Key, sources and method</summary><div><p>Gold dots mark places; grouped portraits open a <em>menu of composers</em>.</p><p>Each year’s location favours a dated post over a home or other stay, with the latest record breaking ties. Between dated stays, the last place remains until the next residence or death, marked by a dashed portrait frame.</p><p>City cards distinguish <em>residence-based locations</em> from <em>dated events</em>; sharing a city and year is not proof of a meeting.</p><p>Selecting a composer shows every recorded place, with overseas stops on a separate inset.</p><p>Lines join records in date order; dotted lines mark musical connections.</p><p>The Mercator map uses <a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noopener">Natural Earth 1:50m, public domain</a>, from the <a href="https://github.com/nvkelso/natural-earth-vector/tree/${base.revision}/geojson" target="_blank" rel="noopener">pinned source revision</a>; outlines show <em>present-day countries</em>.</p><p><a href="assets/data/geo/base.json" download>Download the base map</a> · <a href="assets/data/geo/index.json" download>Download dates and overlaps</a>. Each composer’s card gives the full records and sources.</p></div></details></div>`;
  await out('atlas-map.html', layout({ base: '', page: 'atlas-map' }, { title: 'The Map — Contrapunctus', description: 'Composers’ homes, posts, journeys and premières on a map by year, with recordings of music written or first performed there and the composers who shared a city.', body, dark: true, night: true, nav: 'map', head: '<link rel="stylesheet" href="assets/css/atlas-map.css">', modules: ['atlas-map'] }));
  console.log(`map: ${data.length} composers, ${cities.length} city groups, ${cities.reduce((n, c) => n + c.pairs.length, 0)} possible overlaps; ${(performance.now() - started).toFixed(0)} ms`);
}
