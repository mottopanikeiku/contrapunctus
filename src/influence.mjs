import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { normalizeTitle } from '../tools/commons.mjs';

export const INFLUENCE_KINDS = ['studied-with', 'heard', 'copied', 'quoted', 'modelled', 'parodied', 'set-text', 'depicted', 'reacted-against', 'championed', 'dedicated', 'taught'];
export const FIGURE_KINDS = ['painter', 'poet', 'writer', 'philosopher', 'tradition', 'performer', 'teacher', 'composer'];
export const kindLabel = (kind) => kind.replaceAll('-', ' ');
const escape = (s = '') => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const serialise = (value) => JSON.stringify(value).replaceAll('<', '\\u003c');
let catalogue = null;

/** Research batches are independent; repeated figure definitions must agree exactly. */
export async function readInfluence(ROOT) {
  const dir = path.join(ROOT, 'content/influence');
  const files = (await readdir(dir).catch((error) => { if (error.code === 'ENOENT') return []; throw error; })).filter((f) => f.endsWith('.json')).sort();
  const batches = [], edges = [], figures = new Map();
  let threads = [];
  for (const file of files) {
    const data = JSON.parse(await readFile(path.join(dir, file), 'utf8'));
    if (file === 'threads.json') { threads = data; continue; }
    if (!Array.isArray(data.edges) || !Array.isArray(data.figures)) throw new Error(`${file}: expected edges and figures arrays`);
    batches.push({ file, ...data });
    edges.push(...data.edges);
    for (const figure of data.figures) {
      const previous = figures.get(figure.id);
      if (previous && ['name', 'dates', 'year', 'kind', 'portrait'].some((key) => previous[key] !== figure[key])) throw new Error(`${file}: conflicting figure ${figure.id}`);
      figures.set(figure.id, figure);
    }
  }
  return { batches, edges: edges.sort((a, b) => a.year - b.year || a.id.localeCompare(b.id)), figures: [...figures.values()], threads };
}

const WIDTH = 2700;
const CHIP_NAMES = { 'dies-irae': 'Dies irae', 'tristan-chord': 'Tristan chord', 'bach-motif': 'B–A–C–H', 'lament-bass': 'Lament bass', 'la-folia': 'La Folia', 'ode-to-joy': 'Ode to Joy', 'frere-jacques': 'Frère Jacques' };

/** Monotone birth-year scale: crowded generations receive more horizontal room. */
function timeScale(nodes) {
  const mass = new Map([[1100, 0], [1650, 0], [2000, 0]]);
  for (const node of nodes) {
    const year = Math.max(1100, Math.min(2000, node.year));
    mass.set(year, (mass.get(year) ?? 0) + (node.url ? 8 : 1));
  }
  let cumulative = 0;
  const points = [...mass].sort(([a], [b]) => a - b).map(([year, weight]) => {
    const baseline = Math.min(year - 1100, 550) * .015 + Math.max(0, year - 1650) * .08;
    const value = baseline + cumulative + weight / 2;
    cumulative += weight;
    return { year, value };
  });
  const first = points[0].value, span = points.at(-1).value - first;
  return (year) => {
    year = Math.max(1100, Math.min(2000, year));
    const right = points.findIndex((p) => p.year >= year);
    const b = points[right], a = points[Math.max(0, right - 1)];
    const value = a.year === b.year ? b.value : a.value + (b.value - a.value) * (year - a.year) / (b.year - a.year);
    return 100 + (value - first) / span * (WIDTH - 200);
  };
}
const crosses = (a, b, c, d) => {
  const turn = (p, q, r) => (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);
  return turn(a, b, c) * turn(a, b, d) < 0 && turn(c, d, a) * turn(c, d, b) < 0;
};

/** Broad, collision-free lanes; minimise crossings without piling up an era. */
function positionNodes(nodes, edges, yearX) {
  const ordered = [...nodes].sort((a, b) => Number(!!b.url) - Number(!!a.url) || a.year - b.year || a.id.localeCompare(b.id));
  const neighbours = new Map(nodes.map((n) => [n.id, []]));
  for (const edge of edges) {
    neighbours.get(edge.from)?.push(edge.to);
    neighbours.get(edge.to)?.push(edge.from);
  }
  const placed = new Map(), segments = [], lanes = Array.from({ length: 7 }, (_, i) => 360 + i * 176);
  const laneUses = Array(7).fill(0), eraUses = new Map();
  let height = 1600, composerIndex = 0;
  for (const node of ordered) {
    node.x = Math.round(yearX(node.year));
    // Figures keep a 56px hit area so they stay a usable target at the overview zoom.
    node.halfW = node.url ? 54 : 28;
    node.halfH = node.url ? 60 : 28;
    node.spanW = node.url ? Math.max(54, Math.min(190, node.label.length * 26 * .57 + 12) / 2) : 28;
    node.above = node.url ? 60 : 28;
    node.below = node.url ? 104 : 28;
    const previous = [...new Set(neighbours.get(node.id))].map((id) => placed.get(id)).filter(Boolean);
    const ideal = previous.length ? previous.reduce((s, n) => s + n.y, 0) / previous.length : lanes[composerIndex % lanes.length];
    const near = [...placed.values()].filter((n) => Math.abs(n.x - node.x) < n.spanW + node.spanW + 10);
    const candidates = [
      ...(node.url ? lanes : [ideal, ...lanes.map((y) => y - 88)]),
      ...near.flatMap((n) => [n.y - n.above - node.below - 10, n.y + n.below + node.above + 10]),
    ];
    let best = 360, cost = Infinity;
    for (const y of candidates) {
      if (y < (node.url ? 360 : 320) || near.some((n) => y - node.above < n.y + n.below + 9 && y + node.below > n.y - n.above - 9)) continue;
      const candidate = { x: node.x, y }, lane = Math.max(0, Math.min(6, Math.round((y - 360) / 176)));
      let score = Math.abs(y - ideal) / 180 + Math.max(0, y - 1440) * 20;
      if (node.url) score += laneUses[lane] * 4 + (eraUses.get(`${node.era}:${lane}`) ?? 0) * 5 + Math.abs(y - lanes[lane]) / 50;
      for (const other of previous) {
        score += Math.abs(other.y - y) / 160;
        for (const [a, b] of segments) if (a.id !== other.id && b.id !== other.id && crosses(other, candidate, a, b)) score += 3;
      }
      if (score < cost) { cost = score; best = y; }
    }
    node.y = Math.round(best);
    height = Math.max(height, node.y + node.below + 80);
    if (node.url) {
      const lane = Math.max(0, Math.min(6, Math.round((node.y - 360) / 176))), key = `${node.era}:${lane}`;
      laneUses[lane]++; eraUses.set(key, (eraUses.get(key) ?? 0) + 1); composerIndex++;
    }
    placed.set(node.id, node);
    for (const other of previous) segments.push([other, node]);
  }
  return { width: WIDTH, height };
}

function labelSize(node, zoom = false) {
  const divisor = zoom ? 2 : 1;
  const font = (node.font ?? (node.url ? 26 : 24)) / divisor, padding = 12 / divisor;
  const w = Math.min(zoom ? 160 : 190, Math.max(60 / divisor, Math.ceil(node.label.length * font * .57 + padding)));
  let rows = 1, line = 0;
  for (const word of node.label.split(/\s+/)) {
    const advance = word.length * font * .57;
    if (line && line + advance > w - padding) { rows++; line = 0; }
    const wraps = Math.max(0, Math.ceil(advance / (w - padding)) - 1);
    rows += wraps;
    line += advance - wraps * (w - padding) + font * .3;
  }
  return { w, h: Math.ceil((rows * (node.font ? node.font * 1.1 : node.url ? 27.3 : 26.4) + 8) / divisor) };
}

/** Pack each view's visible nameplates at build time, never during hover. */
function positionLabels(nodes, portraits, size, indices, zoom = false) {
  const occupied = [];
  const overlaps = (a, b) => a.x < b.x + b.w + 8 && a.x + a.w + 8 > b.x && a.y < b.y + b.h + 8 && a.y + a.h + 8 > b.y;
  const positions = [];
  for (const node of nodes) {
    const { w, h } = labelSize(node, zoom);
    let box;
    const fits = (b) => b.x >= 12 && b.x + w <= size.width - 12 && b.y >= 300 && b.y + h <= size.height - 35 && !portraits.some((r) => overlaps(b, r)) && !occupied.some((r) => overlaps(b, r));
    for (const [x, y] of [
      [node.x - w / 2, node.y + node.halfH + 12],
      [node.x - w / 2, node.y - node.halfH - h - 12],
      [node.x + node.halfW + 14, node.y - h / 2],
      [node.x - node.halfW - w - 14, node.y - h / 2],
    ]) {
      const candidate = { x, y, w, h };
      if (fits(candidate)) { box = candidate; break; }
    }
    // Use nearby empty sky before enlarging the atlas. No browser measurements.
    while (!box) {
      let cost = Infinity;
      for (let y = 300; y + h <= size.height - 35; y += 32) {
        for (let x = 12; x + w <= size.width - 12; x += 36) {
          const distance = (node.x - x - w / 2) ** 2 + (node.y - y - h / 2) ** 2;
          if (distance >= cost) continue;
          const candidate = { x, y, w, h };
          if (fits(candidate)) { box = candidate; cost = distance; }
        }
      }
      if (!box) size.height += 144;
    }
    occupied.push(box);
    const dx = Math.max(box.x, Math.min(node.x, box.x + w)) - node.x;
    const dy = Math.max(box.y, Math.min(node.y, box.y + h)) - node.y;
    positions.push([indices.get(node.id), Math.round(box.x + w / 2 - node.x), Math.round(box.y - node.y), Math.round(Math.hypot(dx, dy)), Math.round(Math.atan2(dy, dx) * 1800 / Math.PI) / 10]);
  }
  return positions;
}

function edgePath(a, b, index, t) {
  const bend = Math.max(75, Math.round(Math.abs(b.x - a.x) * .48));
  const direction = b.x >= a.x ? 1 : -1, offset = (index % 5 - 2) * 11;
  const x1 = a.id === b.id ? a.x - 110 : a.x + bend * direction;
  const x2 = a.id === b.id ? a.x + 110 : b.x - bend * direction;
  const y1 = a.id === b.id ? a.y - 110 : a.y + offset;
  const y2 = a.id === b.id ? a.y - 110 : b.y + offset;
  const d = `M${a.x},${a.y} C${x1},${y1} ${x2},${y2} ${b.x},${b.y}`;
  if (t == null) return { d };
  const u = 1 - t;
  return { d, x: Math.round(u ** 3 * a.x + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t ** 3 * b.x), y: Math.round(u ** 3 * a.y + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t ** 3 * b.y) };
}

/** Called after buildInfluence, before composer pages are emitted. */
export function influenceSection(ctx, slug) {
  if (!catalogue) return '';
  const { index, nodeById, edgeById, listens } = catalogue;
  const connections = index[slug];
  if (!connections || (!connections.in.length && !connections.out.length)) return '';
  const column = (direction, title) => `<div><h3>${title}</h3><ul>${connections[direction].map((item) => {
    const edge = edgeById.get(item.id);
    const heard = Object.values(edge.exhibit ?? {}).find((passage) => passage?.listen && listens.has(passage.listen.id))?.listen;
    return `<li><a href="${ctx.base}influence.html#edge-${escape(item.id)}">${escape(item.title)}</a><span class="inheritance-meta">${escape(item.name)} · ${item.year} · ${kindLabel(item.kind)}</span>${heard ? `<button type="button" class="play" data-play-id="${escape(heard.id)}" data-play-t="${heard.t}">Play the passage</button>` : ''}</li>`;
  }).join('') || '<li>None listed.</li>'}</ul></div>`;
  return `<section id="inheritance" class="inheritance apparatus"><span class="kicker">The Web of Influence</span><h2>Influences</h2><p>Teachers, encounters and borrowed music, each with its account and sources in the Web of Influence.</p><div class="inheritance-columns">${column('in', 'Influences received')}${column('out', 'Influences passed on')}</div><p><a href="${ctx.base}influence.html#node-${escape(slug)}">${escape(nodeById.get(slug)?.label ?? slug)} in the Web of Influence</a></p></section>`;
}

export async function buildInfluence({ out, layout, esc = escape, attr = escape, rich, termify, furtherReading, composers, eras, art, listens, ROOT, OUT }) {
  const { edges, figures, threads } = await readInfluence(ROOT);
  const ctx = { base: '', page: 'influence' };
  const prose = (html) => {
    const linked = html.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, id, label) => {
      const node = nodeById.get(id.trim());
      return node && !node.url ? `<a href="#node-${attr(node.id)}">${esc(label ?? node.name)}</a>` : match;
    });
    const expanded = rich ? rich(ctx, linked) : linked;
    return termify ? termify({ ...ctx }, expanded) : expanded;
  };
  const families = new Map();
  for (const composer of composers) families.set(composer.family, (families.get(composer.family) ?? 0) + 1);
  const nodes = composers.map((c) => {
    const family = c.family ?? c.name;
    const prefix = c.name.endsWith(family) ? c.name.slice(0, -family.length).trim() : '';
    const label = families.get(c.family) > 1 && prefix ? `${prefix.split(/\s+/).map((part) => `${part[0]}.`).join(' ')} ${family}` : family;
    return { id: c.slug, name: c.name, label, year: c.born.year, dates: `${c.born.year}–${c.died?.year ?? ''}`, kind: 'composer', era: c.era, url: `composers/${c.slug}.html`, portrait: c.portrait?.file, focus: c.portrait?.focus ?? '50% 25%' };
  });
  nodes.push(...figures.map((f) => ({ ...f, label: f.name, era: 'sister-arts' })));
  const nodeById = new Map();
  for (const node of nodes) {
    if (nodeById.has(node.id)) throw new Error(`Influence: duplicate node ${node.id}`);
    nodeById.set(node.id, node);
  }
  const edgeById = new Map();
  for (const edge of edges) {
    if (edgeById.has(edge.id)) throw new Error(`Influence: duplicate edge ${edge.id}`);
    if (!nodeById.has(edge.from) || !nodeById.has(edge.to)) throw new Error(`Influence: unknown endpoint in ${edge.id}`);
    edgeById.set(edge.id, edge);
  }
  const index = Object.fromEntries(nodes.map((n) => [n.id, { in: [], out: [] }]));
  for (const edge of edges) {
    const item = { id: edge.id, title: edge.title, from: edge.from, to: edge.to, kind: edge.kind, year: edge.year };
    index[edge.to].in.push({ ...item, name: nodeById.get(edge.from).name });
    index[edge.from].out.push({ ...item, name: nodeById.get(edge.to).name });
  }
  catalogue = { index, nodeById, edgeById, listens: new Set(listens.map((l) => l.id)) };
  const yearX = timeScale(nodes);
  const size = positionNodes(nodes, edges, yearX);
  const landmarks = new Set([...composers.map((c) => [c.slug, index[c.slug].in.length + index[c.slug].out.length]).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([id]) => id)]);
  nodes.sort((a, b) => a.year - b.year || a.name.localeCompare(b.name));
  const nodeOrder = new Map(nodes.map((n, i) => [n.id, i]));
  const portraits = nodes.map((n) => ({ x: n.x - n.halfW, y: n.y - n.halfH, w: n.halfW * 2, h: n.halfH * 2 }));
  const threadStops = new Map(threads.map((t) => [t.id, edges.filter((e) => e.thread === t.id)]));
  const placeLabels = (ids, bounds = size, zoom = false) => positionLabels([...new Set(ids)].map((id) => nodeById.get(id)), portraits, bounds, nodeOrder, zoom);
  const labelLayouts = {
    overview: placeLabels(landmarks),
    zoom: placeLabels([...landmarks, ...nodes.map((n) => n.id)], { ...size }, true),
    nodes: nodes.map((n) => placeLabels([n.id, ...index[n.id].in.map((e) => e.from), ...index[n.id].out.map((e) => e.to)])),
    threads: Object.fromEntries(threads.map((t) => [t.id, placeLabels(threadStops.get(t.id).flatMap((e) => [e.from, e.to]))])),
  };
  // People without a portrait get their initials in the same oval; traditions get a plain dot.
  const initials = (name) => { const words = name.split(/\s+/).filter((w) => /^\p{Lu}/u.test(w)); return words.length > 1 ? `${words[0][0]}${words.at(-1)[0]}` : (words[0] ?? name)[0]; };
  const picture = (node) => {
    const info = node.portrait && art[normalizeTitle(node.portrait)];
    if (info) return `<img src="${attr(info.src.replace(/\.webp$/, '-160.webp'))}" alt="" width="66" height="80" loading="lazy" decoding="async" style="object-position:${attr(node.focus ?? '50% 30%')}">`;
    return node.kind === 'tradition' ? '' : `<span class="iw-initials" aria-hidden="true">${esc(initials(node.name))}</span>`;
  };
  const curves = new Map(edges.map((edge, i) => {
    const a = nodeById.get(edge.from), b = nodeById.get(edge.to), stops = threadStops.get(edge.thread);
    const parallel = stops?.filter((other) => other.from === edge.from && other.to === edge.to);
    const phase = parallel?.length > 1 ? .32 + .36 * parallel.indexOf(edge) / (parallel.length - 1) : .5;
    return [edge.id, edgePath(a, b, i, stops ? phase : undefined)];
  }));
  const dateLabels = new Map();
  for (const [id, stops] of threadStops) {
    const names = labelLayouts.threads[id].map(([i, x, y]) => {
      const node = nodes[i], { w, h } = labelSize(node);
      return { x: node.x + x - w / 2, y: node.y + y, w, h };
    });
    const stamps = stops.map((edge) => ({ id: edge.id, label: String(edge.year), font: 28, x: curves.get(edge.id).x, y: curves.get(edge.id).y, halfW: 0, halfH: 0 }));
    const positions = positionLabels(stamps, [...portraits, ...names], { ...size }, new Map(stamps.map((stamp, i) => [stamp.id, i])));
    for (const [i, dx, dy] of positions) {
      const stamp = stamps[i], { w, h } = labelSize(stamp);
      const x = stamp.x + dx, top = stamp.y + dy;
      const endX = Math.round(Math.max(x - w / 2, Math.min(x + w / 2, stamp.x)));
      const endY = Math.round(Math.max(top, Math.min(top + h, stamp.y)));
      const guide = Math.hypot(endX - stamp.x, endY - stamp.y) > 24 ? `<path class="iw-stop-guide" d="M${stamp.x},${stamp.y} L${endX},${endY}"/>` : '';
      dateLabels.set(stamp.id, `${guide}<text class="iw-stop-year" x="${x}" y="${top + 28}" aria-hidden="true">${stamp.label}</text>`);
    }
  }
  const paths = edges.map((edge, i) => {
    const a = nodeById.get(edge.from), b = nodeById.get(edge.to), { d } = curves.get(edge.id);
    return `<a href="#edge-${attr(edge.id)}" class="iw-edge iw-kind-${edge.kind}" data-edge="${attr(edge.id)}" aria-label="${attr(`${a.label} → ${b.label}, ${edge.year}`)}"><path class="iw-line" d="${d}"/><path class="iw-hit" d="${d}"/>${dateLabels.get(edge.id) ?? ''}</a>`;
  }).join('');
  const eraRows = [];
  const erasLabel = eras.map((era) => {
    const members = nodes.filter((n) => n.era === era.slug);
    if (!members.length) return '';
    const x = members.reduce((s, n) => s + n.x, 0) / members.length;
    const width = era.name.length * 20;
    let row = eraRows.findIndex((labels) => labels.every((label) => Math.abs(label.x - x) > (label.width + width) / 2 + 24));
    if (row < 0) { row = eraRows.length; eraRows.push([]); }
    eraRows[row].push({ x, width });
    const y = 230 + row * 44, start = Math.round(yearX(era.from));
    return `<g class="iw-era"><text x="${Math.round(x)}" y="${y}">${esc(era.name)}</text><path d="M${start},${y + 10} V${size.height - 35}"/><path class="iw-era-tick" d="M${start},${y + 6} v20"/></g>`;
  }).join('');
  const years = [1100, 1500, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000].map((year) => `<text x="${Math.round(yearX(year))}" y="${size.height - 8}">${year}</text>`).join('');
  const cameos = nodes.map((node) => {
    const connections = new Set([...index[node.id].in, ...index[node.id].out].map((e) => e.id)).size;
    const example = index[node.id].in[0] ?? index[node.id].out[0];
    // No aria-label: the name is the node's own text, so it always contains what is visible (the nameplate on the map, the entry in the phone timeline).
    // A tradition's year only places it on the map; the phone timeline prints no date for it.
    const year = node.kind === 'tradition' ? '' : `<span class="iw-time-year">${node.year < 1100 ? 'Before 1100' : node.year}</span>`;
    const sep = '<span class="visually-hidden">, </span>';
    return `<a class="iw-node ${node.url ? 'iw-composer' : `iw-figure${node.kind === 'tradition' ? ' iw-tradition' : ''}`}${landmarks.has(node.id) ? ' iw-landmark' : ''}" href="#node-${attr(node.id)}" data-node="${attr(node.id)}" style="left:${node.x}px;top:${node.y}px">${year}<span class="iw-medallion">${picture(node)}</span><span class="iw-node-label">${esc(node.label)}</span><span class="iw-node-fullname">${sep}${esc(node.name)}</span><span class="iw-node-dates">${sep}${esc(node.dates)}</span><span class="iw-node-count">${sep}${connections} sourced ${connections === 1 ? 'connection' : 'connections'}</span>${example ? `<span class="iw-node-example">${esc(example.title)}</span>` : ''}</a>`;
  }).join('');
  const compact = {
    size,
    labelLayouts,
    nodes: nodes.map(({ portrait, focus, halfW, halfH, spanW, above, below, ...node }) => node),
    edges: edges.map(({ id, from, to, kind, year, thread }) => ({ id, from, to, kind, year, ...(thread ? { thread } : {}) })),
    threads: threads.map(({ id, name }) => ({ id, name })),
  };
  const detail = Object.fromEntries(edges.map((edge) => {
    const copy = { ...edge, claim: prose(edge.claim), note: edge.note ? prose(edge.note) : '' };
    if (edge.art) {
      const info = art[normalizeTitle(edge.art.file)];
      copy.art = { ...edge.art, src: info ? info.src.replace(/\.webp$/, '-960.webp') : `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(edge.art.file.replace(/^File:/, ''))}?width=960`, url: info?.page ?? `https://commons.wikimedia.org/wiki/${encodeURIComponent(edge.art.file)}` };
    }
    return [edge.id, copy];
  }));
  await mkdir(path.join(OUT, 'assets'), { recursive: true });
  await Promise.all([
    writeFile(path.join(OUT, 'assets/influence.json'), JSON.stringify(Object.fromEntries(composers.map((c) => [c.slug, index[c.slug]])))),
    writeFile(path.join(OUT, 'assets/influence-details.json'), JSON.stringify({ edges: detail, threads: Object.fromEntries(threads.map((t) => [t.id, { ...t, summary: prose(t.summary), abcNote: t.abcNote ? prose(t.abcNote) : '' }])) })),
  ]);
  const backdrop = art[normalizeTitle(eras.find((e) => e.slug === 'fin-de-siecle')?.hero?.file ?? '')];
  const hub = composers.map((c) => [c, index[c.slug].in.length + index[c.slug].out.length]).sort((a, b) => b[1] - a[1])[0][0];
  const featuredThreads = threads.filter((t) => edges.some((e) => e.thread === t.id));
  const body = `<div class="influence-page" data-influence>
    ${backdrop ? `<img class="iw-backdrop" src="${attr(backdrop.src.replace(/\.webp$/, '-960.webp'))}" alt="" loading="lazy" decoding="async" aria-hidden="true">` : ''}
    <header class="iw-heading"><div><span class="kicker">Connections</span><h1>The Web of <em>Influence</em></h1><p>Teachers and pupils, quotations, borrowings and meetings between composers, painters and poets, each with its sources.</p></div><p class="iw-census"><strong>${edges.length}</strong> sourced connections<br><span>${composers.length} composers · ${figures.length} other figures</span></p></header>
    <form class="iw-controls" aria-label="Filter connections" onsubmit="return false"><label>Connection<select name="kind"><option value="">All kinds</option>${INFLUENCE_KINDS.map((kind) => `<option value="${kind}">${kindLabel(kind)}</option>`).join('')}</select></label><label>Period<select name="era"><option value="">All periods</option>${eras.map((era) => `<option value="${era.slug}">${esc(era.name)}</option>`).join('')}<option value="sister-arts">Sister arts &amp; traditions</option></select></label><button type="button" class="textbook-button iw-reset" data-action="reset">Reset view</button></form>
    <nav class="iw-thread-chips" aria-label="Recurring material"><span>Recurring material</span>${threads.map((t) => `<a href="#thread-${attr(t.id)}" title="${attr(t.name)}">${esc(CHIP_NAMES[t.id] ?? t.name)}</a>`).join('')}</nav>
    <p class="iw-mobile-intro">Composers and other figures, in order of birth.<br><a href="#node-${attr(hub.slug)}">${esc(hub.family ?? hub.name)}’s connections</a>, the most in the web.</p>
    <div class="iw-explore"><section class="iw-sky" aria-label="Interactive influence map"><div class="iw-map" tabindex="0" role="group" aria-label="Influence map. Drag to pan, scroll to zoom. Arrow keys pan, plus and minus zoom, Home resets." aria-describedby="iw-map-help"><div class="iw-world" style="width:${size.width}px;height:${size.height}px"><svg class="iw-threads" viewBox="0 0 ${size.width} ${size.height}" aria-label="Sourced connections between composers and the sister arts"><g class="iw-era-labels">${erasLabel}</g><g class="iw-paths">${paths}</g><g class="iw-year-labels">${years}</g></svg>${cameos}</div></div><div class="iw-map-tools"><button type="button" data-action="zoom-in" aria-label="Zoom in">+</button><button type="button" data-action="zoom-out" aria-label="Zoom out">−</button><button type="button" data-action="fit" aria-label="Fit the whole web">↔</button></div><p class="iw-map-help" id="iw-map-help">Select a portrait to show its connections. <span>Drag to move · scroll to zoom</span></p><p class="iw-empty" hidden>No connections match these filters.</p></section>
    <aside class="iw-card" hidden role="dialog" aria-labelledby="iw-card-title" tabindex="-1"><div class="iw-card-toolbar"><span>Details and sources</span><button type="button" data-action="close" aria-label="Close details">×</button></div><div class="iw-card-content"></div></aside></div>
    <div class="iw-programme"><div><span class="kicker">Key</span><p>Portraits mark people; lines join their encounters, borrowings and collaborations. Birth years run from left to right, with early centuries compressed and crowded generations spread out. Each line opens the connection’s date, account and sources.</p></div><ul class="iw-legend"><li><i class="iw-swatch bright"></i>Quotation &amp; parody</li><li><i class="iw-swatch"></i>Teaching, copying &amp; models</li><li><i class="iw-swatch dotted"></i>Music heard</li><li><i class="iw-swatch red"></i>Reactions against</li><li><i class="iw-swatch teal"></i>Painting &amp; poetry</li></ul></div>
    <nav class="iw-invitations" aria-label="Recurring material and the most connected composer">${featuredThreads.slice(0, 4).map((t) => `<a href="#thread-${attr(t.id)}"><span>Recurring material</span>${esc(t.name)}</a>`).join('')}<a href="#node-${attr(hub.slug)}"><span>Most connected composer</span>${esc(hub.name)}</a></nav>
    ${furtherReading ? `<div class="iw-reading">${furtherReading(ctx, 'influence')}</div>` : ''}
    <p class="iw-status" role="status" aria-live="polite"></p><p class="iw-javascript-note">The cards, filters and playable examples need JavaScript.</p>
    <script type="application/json" id="influence-data">${serialise(compact)}</script>
  </div>`;
  await out('influence.html', layout(ctx, { title: 'The Web of Influence — Contrapunctus', description: 'Borrowed tunes, teachers and encounters between composers, painters and poets, with playable examples and sources.', body, dark: true, night: true, nav: 'influence', head: '<link rel="stylesheet" href="assets/css/influence.css">', modules: ['influence'] }));
}
