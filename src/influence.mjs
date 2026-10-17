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

const WIDTH = 3000;
const yearX = (year) => 80 + (year <= 1650 ? (Math.max(1100, year) - 1100) / 550 * 330 : 330 + (Math.min(2000, year) - 1650) / 350 * 2500);
const crosses = (a, b, c, d) => {
  const turn = (p, q, r) => (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);
  return turn(a, b, c) * turn(a, b, d) < 0 && turn(c, d, a) * turn(c, d, b) < 0;
};

/** Interval packing with a crossing/length cost. Nothing is laid out in the browser. */
function positionNodes(nodes, edges) {
  const ordered = [...nodes].sort((a, b) => a.year - b.year || a.id.localeCompare(b.id));
  for (const node of ordered) node.x = Math.round(yearX(node.year));
  const lanes = Math.max(8, ...ordered.map((n, i) => ordered.slice(0, i + 1).filter((p) => n.x - p.x < 145).length));
  const occupied = Array.from({ length: lanes }, () => []);
  const neighbours = new Map(nodes.map((n) => [n.id, []]));
  for (const edge of edges) {
    neighbours.get(edge.from)?.push(edge.to);
    neighbours.get(edge.to)?.push(edge.from);
  }
  const placed = new Map(), segments = [];
  for (const node of ordered) {
    const previous = [...new Set(neighbours.get(node.id))].map((id) => placed.get(id)).filter(Boolean);
    const ideal = previous.length ? previous.reduce((s, n) => s + n.lane, 0) / previous.length : (node.kind === 'composer' ? lanes / 2 : lanes / 3);
    let best = 0, cost = Infinity;
    for (let lane = 0; lane < lanes; lane++) {
      if (occupied[lane].some((n) => Math.abs(n.x - node.x) < 145)) continue;
      const candidate = { x: node.x, y: 135 + lane * 112 };
      let score = Math.abs(lane - ideal) * 8 + occupied[lane].length * 2;
      for (const other of previous) {
        score += Math.abs(other.y - candidate.y) / 100;
        for (const [a, b] of segments) if (a.id !== other.id && b.id !== other.id && crosses(other, candidate, a, b)) score += 11;
      }
      if (score < cost) { cost = score; best = lane; }
    }
    node.lane = best; node.y = 135 + best * 112;
    occupied[best].push(node); placed.set(node.id, node);
    for (const other of previous) segments.push([other, node]);
  }
  return { width: WIDTH, height: 240 + (lanes - 1) * 112 };
}

function edgePath(a, b, index) {
  if (a.id === b.id) return `M${a.x},${a.y} C${a.x - 110},${a.y - 110} ${a.x + 110},${a.y - 110} ${a.x},${a.y}`;
  const bend = Math.max(75, Math.abs(b.x - a.x) * .48);
  const direction = b.x >= a.x ? 1 : -1;
  const offset = (index % 5 - 2) * 11;
  return `M${a.x},${a.y} C${a.x + bend * direction},${a.y + offset} ${b.x - bend * direction},${b.y + offset} ${b.x},${b.y}`;
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
    return `<li><a href="${ctx.base}influence.html#edge-${escape(item.id)}">${escape(item.title)}</a><span class="inheritance-meta">${escape(item.name)} · ${item.year} · ${kindLabel(item.kind)}</span>${heard ? `<button type="button" class="play" data-play-id="${escape(heard.id)}" data-play-t="${heard.t}">Hear the passage</button>` : ''}</li>`;
  }).join('') || '<li>No sourced connection in this collection yet.</li>'}</ul></div>`;
  return `<section id="inheritance" class="inheritance apparatus"><span class="kicker">The Web of Influence</span><h2>Inheritance</h2><p>Specific encounters, borrowings and transformations. Follow a connection to its evidence.</p><div class="inheritance-columns">${column('in', 'What came in')}${column('out', 'What went out')}</div><p><a href="${ctx.base}influence.html#node-${escape(slug)}">Find ${escape(nodeById.get(slug)?.label ?? slug)} in the web →</a></p></section>`;
}

export async function buildInfluence({ out, layout, esc = escape, attr = escape, rich, termify, composers, eras, art, listens, ROOT, OUT }) {
  const { edges, figures, threads } = await readInfluence(ROOT);
  const ctx = { base: '', page: 'influence' };
  const prose = (html) => termify ? termify({ ...ctx }, rich ? rich(ctx, html) : html) : rich ? rich(ctx, html) : html;
  const nodes = composers.map((c) => ({ id: c.slug, name: c.name, label: c.family ?? c.name, year: c.born.year, dates: `${c.born.year}–${c.died?.year ?? ''}`, kind: 'composer', era: c.era, url: `composers/${c.slug}.html`, portrait: c.portrait?.file, focus: c.portrait?.focus ?? '50% 25%' }));
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
  const size = positionNodes(nodes, edges);
  const picture = (node) => {
    const info = node.portrait && art[normalizeTitle(node.portrait)];
    return info ? `<img src="${attr(info.src.replace(/\.webp$/, '-160.webp'))}" alt="" width="66" height="80" loading="lazy" decoding="async" style="object-position:${attr(node.focus ?? '50% 30%')}">` : `<span class="iw-star" aria-hidden="true">${node.kind === 'composer' ? esc(node.label.slice(0, 1)) : '✧'}</span>`;
  };
  const paths = edges.map((edge, i) => {
    const a = nodeById.get(edge.from), b = nodeById.get(edge.to), d = edgePath(a, b, i);
    return `<a href="#edge-${attr(edge.id)}" class="iw-edge iw-kind-${edge.kind}" data-edge="${attr(edge.id)}" aria-label="${attr(`${edge.title}, ${edge.year}`)}"><path class="iw-line" d="${d}"/><path class="iw-hit" d="${d}"/></a>`;
  }).join('');
  const erasLabel = eras.map((era, i) => {
    const members = nodes.filter((n) => n.era === era.slug);
    if (!members.length) return '';
    const x = members.reduce((s, n) => s + n.x, 0) / members.length;
    const y = i % 2 ? 53 : 24;
    return `<g class="iw-era"><text x="${Math.round(x)}" y="${y}">${esc(era.name)}</text><path d="M${Math.round(x)},${y + 10} V${size.height - 35}"/></g>`;
  }).join('');
  const years = [1100, 1500, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000].map((year) => `<text x="${Math.round(yearX(year))}" y="${size.height - 8}">${year}</text>`).join('');
  const cameos = nodes.map((node) => `<a class="iw-node ${node.kind === 'composer' && node.url ? 'iw-composer' : 'iw-figure'}" href="#node-${attr(node.id)}" data-node="${attr(node.id)}" style="left:${node.x}px;top:${node.y}px" aria-label="${attr(`${node.name}, ${node.dates}, ${index[node.id].in.length + index[node.id].out.length} connections`)}"><span class="iw-medallion">${picture(node)}</span><span class="iw-node-label">${esc(node.label)}</span><span class="iw-node-dates">${esc(node.dates)}</span></a>`).join('');
  const timeline = [...nodes].sort((a, b) => a.year - b.year || a.name.localeCompare(b.name)).map((node) => {
    const connections = [...index[node.id].in, ...index[node.id].out].sort((a, b) => a.year - b.year);
    return `<li class="iw-time-node" data-time-node="${attr(node.id)}"><span class="iw-time-year">${node.year < 1100 ? 'Before 1100' : node.year}</span><a class="iw-time-person" href="#node-${attr(node.id)}"><span class="iw-medallion">${picture(node)}</span><span><strong>${esc(node.name)}</strong><small>${esc(node.dates)} · ${node.url ? esc(eras.find((e) => e.slug === node.era)?.name ?? 'Composer') : esc(node.kind)}</small></span></a><div class="iw-time-connections">${connections.slice(0, 2).map((e) => `<a href="#edge-${attr(e.id)}" data-time-edge="${attr(e.id)}">${esc(e.title)} <span>${e.year} →</span></a>`).join('')}${connections.length > 2 ? `<a class="iw-time-more" href="#node-${attr(node.id)}">All ${connections.length} connections →</a>` : !connections.length ? '<small>No sourced connections yet.</small>' : ''}</div></li>`;
  }).join('');
  const compact = {
    size,
    nodes: nodes.map(({ portrait, focus, lane, ...node }) => node),
    edges: edges.map(({ id, title, from, to, kind, year, thread }) => ({ id, title, from, to, kind, year, ...(thread ? { thread } : {}) })),
    threads: threads.map(({ id, name, summary }) => ({ id, name, summary: prose(summary) })),
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
    writeFile(path.join(OUT, 'assets/influence-details.json'), JSON.stringify(detail)),
  ]);
  const backdrop = art[normalizeTitle(eras.find((e) => e.slug === 'fin-de-siecle')?.hero?.file ?? '')];
  const featuredThreads = threads.filter((t) => edges.some((e) => e.thread === t.id));
  const body = `<div class="influence-page" data-influence>
    ${backdrop ? `<img class="iw-backdrop" src="${attr(backdrop.src.replace(/\.webp$/, '-960.webp'))}" alt="" loading="lazy" decoding="async" aria-hidden="true">` : ''}
    <header class="iw-heading"><div><span class="kicker">An atlas of musical inheritance</span><h1>The Web of <em>Influence</em></h1><p>A melody borrowed. A painting heard. A teacher remembered.</p></div><p class="iw-census"><strong>${edges.length}</strong> sourced connections<br><span>${composers.length} composers · ${figures.length} other voices</span></p></header>
    <form class="iw-controls" aria-label="Explore the web" onsubmit="return false"><label class="iw-thread-label">Trace a thread<select name="thread"><option value="">The whole constellation</option>${threads.map((t) => `<option value="${attr(t.id)}">${esc(t.name)}</option>`).join('')}</select></label><label>Connection<select name="kind"><option value="">Every kind</option>${INFLUENCE_KINDS.map((kind) => `<option value="${kind}">${kindLabel(kind)}</option>`).join('')}</select></label><label>Period<select name="era"><option value="">All periods</option>${eras.map((era) => `<option value="${era.slug}">${esc(era.name)}</option>`).join('')}<option value="sister-arts">Sister arts &amp; traditions</option></select></label><button type="button" class="iw-reset" data-action="reset">Reset the sky</button></form>
    <div class="iw-explore"><section class="iw-sky" aria-label="Interactive influence map"><div class="iw-map" tabindex="0" role="group" aria-label="Influence map. Drag to pan, scroll to zoom. Arrow keys pan, plus and minus zoom, Home resets." aria-describedby="iw-map-help"><div class="iw-world" style="width:${size.width}px;height:${size.height}px"><svg class="iw-threads" viewBox="0 0 ${size.width} ${size.height}" aria-label="Sourced connections between composers and the sister arts"><g class="iw-era-labels">${erasLabel}</g><g class="iw-paths">${paths}</g><g class="iw-year-labels">${years}</g></svg>${cameos}</div></div><div class="iw-map-tools"><button type="button" data-action="zoom-in" aria-label="Zoom in">+</button><button type="button" data-action="zoom-out" aria-label="Zoom out">−</button><button type="button" data-action="fit" aria-label="Fit the whole web">↔</button></div><p class="iw-map-help" id="iw-map-help">Touch a portrait; follow its gold threads. <span>Drag to wander · scroll to look closer</span></p><p class="iw-empty" hidden>No connections match these filters.</p></section>
    <section class="iw-mobile" aria-label="Influence timeline"><p class="iw-mobile-note">A timeline of lives. Open a connection to read the encounter.</p><ol>${timeline}</ol></section>
    <aside class="iw-card" hidden role="dialog" aria-labelledby="iw-card-title" tabindex="-1"><div class="iw-card-toolbar"><span>The evidence room</span><button type="button" data-action="close" aria-label="Close evidence card">×</button></div><div class="iw-card-content"></div></aside></div>
    <div class="iw-programme"><div><span class="kicker">How to read the sky</span><p>Portraits mark lives; threads record particular encounters, not a claim that one composer explains another. The horizontal scale follows birth years, with the years before 1650 compressed. Cards give the date of the connection.</p></div><ul class="iw-legend"><li><i class="iw-swatch bright"></i>Quotation &amp; parody</li><li><i class="iw-swatch"></i>Teaching, copying &amp; models</li><li><i class="iw-swatch dotted"></i>Music heard</li><li><i class="iw-swatch red"></i>Resistance</li><li><i class="iw-swatch teal"></i>Painting &amp; poetry</li></ul></div>
    <nav class="iw-invitations" aria-label="Begin exploring">${featuredThreads.slice(0, 4).map((t) => `<a href="#thread-${attr(t.id)}"><span>Follow the thread</span>${esc(t.name)} <b>→</b></a>`).join('')}<a href="#node-mahler"><span>Open an inheritance</span>Gustav Mahler <b>→</b></a></nav>
    <p class="iw-status" role="status" aria-live="polite"></p><noscript><style>.iw-sky{display:none}.iw-mobile{display:block}</style><p>The timeline remains readable without JavaScript. Interactive evidence cards, filters and playback require JavaScript.</p></noscript>
    <script type="application/json" id="influence-data">${serialise(compact)}</script>
  </div>`;
  await out('influence.html', layout(ctx, { title: 'The Web of Influence — Contrapunctus', description: 'Follow the sourced connections between composers, paintings, poems and musical ideas. Compare passages and hear how an inheritance changes.', body, dark: true, accent: '#dfc287', nav: 'influence', head: '<link rel="stylesheet" href="assets/css/influence.css">', modules: ['influence'] }));
}
