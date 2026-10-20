// Guided journeys: reviewed stories, precomputed exhibits, and one shared player.
import { readdir, readFile, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { normalizeTitle } from '../tools/commons.mjs';
import { readInfluence } from './influence.mjs';
import { project, bounds, paths, loadGeometry } from '../tools/geo/prepare.mjs';

const json = async (file) => JSON.parse(await readFile(file, 'utf8'));
const optionalJson = async (file) => {
  try { return await json(file); } catch (error) { if (error.code === 'ENOENT') return null; throw error; }
};
const filesIn = async (dir) => readdir(dir).catch((error) => { if (error.code === 'ENOENT') return []; throw error; });
const fmt = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
const serialise = (data) => JSON.stringify(data).replaceAll('<', '\u003c');

export async function buildJourneys({ out, layout, esc, attr, rich, img, art, PROG, ROOT, OUT }) {
  /** Reader-facing text may italicise titles and terms with <i>…</i>; every other tag is escaped. */
  const italic = (s = '') => esc(s).replace(/&lt;(\/?)i&gt;/g, '<$1i>');
  const programme = new Map(PROG.map((t) => [t.id, t]));
  const files = (await filesIn(path.join(ROOT, 'content/journeys'))).filter((f) => f.endsWith('.json')).sort();
  const journeys = [], held = [];
  for (const file of files) {
    const id = path.basename(file, '.json');
    const review = await optionalJson(path.join(ROOT, 'content/plan/reviews', `journey-${id}.json`));
    if (review?.verdict !== 'pass') { held.push(id); continue; }
    const j = await json(path.join(ROOT, 'content/journeys', file));
    if (j.id !== id || !/^[a-z0-9][a-z0-9-]*$/.test(id) || !j.stations?.length) throw new Error(`journeys/${id}: matching id and stations required`);
    if (j.stations.some((s) => !programme.has(s.listen?.id) || (s.score && !programme.has(s.score.listen)))) { held.push(id); continue; }
    const stationIds = new Set();
    for (const s of j.stations) {
      const { from, to } = s.listen, t = programme.get(s.listen.id);
      if (!s.id || stationIds.has(s.id)) throw new Error(`journeys/${id}: unique station ids required`);
      stationIds.add(s.id);
      if (!Number.isFinite(from) || !Number.isFinite(to) || from < 0 || from >= to || to > t.duration + .5) throw new Error(`journeys/${id}/${s.id}: excerpt outside recording`);
      let last = from;
      for (const cue of s.cues ?? []) {
        if (!Number.isFinite(cue.at) || cue.at < last || cue.at >= to) throw new Error(`journeys/${id}/${s.id}: cues must be ordered inside the excerpt`);
        last = cue.at;
      }
    }
    journeys.push(j);
  }

  const version = createHash('md5').update(await readFile(path.join(OUT, 'assets/css/journeys.css'))).update(await readFile(path.join(OUT, 'assets/js/journeys.js'))).digest('hex').slice(0, 8);
  const stylesheet = (base) => `<link rel="stylesheet" href="${base}assets/css/journeys.css?v=${version}">`;
  const sources = (items = []) => `<ul>${items.map((s) => `<li><a href="${attr(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)} ↗</a></li>`).join('')}</ul>`;
  const composers = (j) => [...new Set(j.stations.map((s) => programme.get(s.listen.id).composer.family))].join(' · ');
  // A hero's crop: `focus` keeps faces in a wide card, `zoom` trims a scan's mount from the edges.
  const crop = (h) => { const s = [h.focus && `--focus:${h.focus}`, h.zoom && `--zoom:${h.zoom}`].filter(Boolean).join(';'); return s ? ` style="${attr(s)}"` : ''; };
  const cards = (ctx, list, level = 3) => `<div class="j-cards">${list.map((j) => `<a class="j-card" href="${ctx.base}journeys/${attr(j.id)}.html"><div class="j-card-art"${crop(j.hero)}>${img(ctx, j.hero.file, j.hero.caption, { sizes: '(max-width: 640px) 92vw, (max-width: 1000px) 45vw, 30vw', thumb: true })}</div><div class="j-card-copy"><span class="j-meta">${j.minutes} minutes · ${j.stations.length} stations</span><h${level}>${esc(j.title)}</h${level}><p>${esc(j.subtitle)}</p><span class="j-card-composers">${esc(composers(j))}</span><span class="j-card-open">Open the journey</span></div></a>`).join('')}</div>`;
  const band = (ctx) => journeys.length ? `<section class="j-band night" aria-labelledby="journey-band-title"><div class="wrap"><header class="j-band-heading"><div><span class="kicker">Recordings, paintings and places</span><h2 id="journey-band-title">Guided journeys</h2></div><a href="${ctx.base}journeys/index.html">All journeys</a></header>${cards(ctx, journeys)}</div></section>` : '';
  const page = (id, title, description, body) => layout({ base: '../', page: `journeys/${id}` }, { title: `${title} — Contrapunctus`, description, body, dark: true, night: true, nav: 'journeys', head: stylesheet('../'), modules: ['journeys'] });
  const indexCtx = { base: '../', page: 'journeys/index' };
  const index = `<div class="j-index"><header class="j-index-hero">${journeys.length ? `<div class="j-index-painting" aria-hidden="true"${crop(journeys[0].hero)}>${img(indexCtx, journeys[0].hero.file, '', { eager: true, sizes: '100vw' })}</div>` : ''}<div class="wrap"><span class="kicker">Recordings, paintings and places</span><h1>Guided <i>journeys</i></h1><p>Each journey is a sequence of excerpts from recordings in the Hall.<br>Each excerpt has a text and an exhibit: a painting, a page of the score, a map or a connection from the Web of Influence.</p><span class="j-meta">Pause at any station · Place saved in this browser</span></div></header><section class="wrap j-index-catalogue" aria-label="Guided journeys">${journeys.length ? cards(indexCtx, journeys, 2) : '<p class="j-empty">No journeys are published yet. The full recordings are in <a href="../hall.html">the Concert Hall</a>.</p>'}</section></div>`;
  await out('journeys/index.html', page('index', 'Guided journeys', 'Sequences of recording excerpts with a text for each, and paintings, scores, maps and sources.', index));

  const edges = journeys.some((j) => j.stations.some((s) => s.edge)) ? new Map((await readInfluence(ROOT)).edges.map((e) => [e.id, e])) : new Map();
  const geo = new Map(), scores = new Map(), comparisons = new Map();
  let geometry;
  const painting = (ctx, a) => {
    const info = art[normalizeTitle(a.file)];
    return `<figure class="j-painting"><a class="frame j-gilt" href="${ctx.base}${attr(info?.src ?? '')}" aria-label="Enlarge painting">${img(ctx, a.file, a.caption, { sizes: '(max-width: 760px) 90vw, 42vw' })}</a><figcaption>${italic(a.caption)}${info?.page ? ` <a href="${attr(info.page)}" target="_blank" rel="noopener noreferrer">Image source ↗</a>` : ''}</figcaption></figure>`;
  };
  const influence = (ctx, id) => {
    const e = edges.get(id);
    if (!e) throw new Error(`journeys: unknown influence edge ${id}`);
    return `<aside class="j-influence"><span class="kicker">${esc(e.status)} · ${e.year}</span><h3>${esc(e.title)}</h3>${rich(ctx, e.claim)}${e.status !== 'documented' && e.note ? rich(ctx, e.note) : ''}<a href="../influence.html#edge-${attr(id)}">This connection in the Web of Influence</a><details><summary>Evidence</summary>${sources(e.sources)}</details></aside>`;
  };
  async function mapVignette(s) {
    const { composer, year } = s.map;
    if (!geo.has(composer)) geo.set(composer, await optionalJson(path.join(ROOT, 'content/geo', `${composer}.json`)));
    const places = (geo.get(composer)?.places ?? []).filter((p) => Number(p.from.slice(0, 4)) <= year && Number((p.to ?? p.from).slice(0, 4)) >= year);
    const url = `../atlas-map.html?year=${year}#c-${attr(composer)}`;
    if (!places.length) return `<aside class="j-map"><span class="kicker">${esc(composer)} · ${year}</span><p>No place is recorded here for this year.</p><a href="${url}">Other dates on the Map</a></aside>`;
    geometry ??= await loadGeometry();
    const points = places.map((p) => project(p.lon, p.lat)), box = bounds(points, 100);
    const scale = Math.min(520 / box[2], 260 / box[3]);
    const transform = ([x, y]) => [(x - box[0] - box[2] / 2) * scale + 280, (y - box[1] - box[3] / 2) * scale + 150];
    return `<figure class="j-map"><span class="kicker">Places on record · ${year}</span><a href="${url}"><svg viewBox="0 0 560 300" role="img" aria-label="Recorded places in ${year}; numbered in the caption"><path class="j-land" d="${paths(geometry[0], .8, box, transform)}"/>${points.map((p, i) => { const [x, y] = transform(p); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5"/><text x="${(x + 10).toFixed(1)}" y="${(y - 8).toFixed(1)}">${i + 1}</text>`; }).join('')}</svg></a><figcaption><ol>${places.map((p) => `<li><b>${esc(p.name)}</b> · ${esc(p.kind)} · ${esc(p.status)}<details><summary>${esc(p.from)}${p.to ? `–${esc(p.to)}` : ''}</summary><p>${italic(p.what)}</p>${sources(p.sources)}</details></li>`).join('')}</ol><p>Dated places on a present-day coastline.</p><a href="${url}">This year on the Map</a></figcaption></figure>`;
  }
  async function scoreFigure(s) {
    const id = s.score.listen, bar = String(s.score.bar);
    if (!scores.has(id)) scores.set(id, { score: await optionalJson(path.join(OUT, 'assets/data', id, 'score.json')), pack: await optionalJson(path.join(OUT, 'assets/data', id, 'sheet/index.json')) });
    const { score, pack } = scores.get(id), box = pack?.bars?.[bar]?.[0], p = box && pack.pages[box[0]];
    const occurrence = score?.bars?.find((b) => b.n === bar && b.t >= s.listen.from && b.t < s.listen.to) ?? score?.bars?.find((b) => b.n === bar);
    const url = `../hall.html#${attr(id)}`;
    const visual = p ? `<a class="j-score-page" href="../assets/data/${attr(id)}/sheet/${attr(p.src)}" target="_blank" rel="noopener noreferrer"><img src="../assets/data/${attr(id)}/sheet/${attr(p.src)}" width="${p.w}" height="${p.h}" loading="lazy" alt="Engraved score page containing bar ${attr(bar)}"><span class="j-score-mark" style="left:${box[1] / p.w * 100}%;top:${box[2] / p.h * 100}%;width:${box[3] / p.w * 100}%;height:${box[4] / p.h * 100}%" aria-hidden="true"></span></a>` : '<p>The engraved page is not available for this bar.</p>';
    return `<figure class="j-score"><span class="kicker">From the score · bar ${esc(bar)}</span>${visual}<figcaption>${occurrence ? `Recording time · ${esc(score.status ?? 'provisional')} · ${fmt(occurrence.t)}${occurrence.occ > 1 ? ` (pass ${occurrence.occ})` : ''}.` : 'Timing unavailable for this bar.'}${score?.source?.url ? ` <a href="${attr(score.source.url)}" target="_blank" rel="noopener noreferrer">${esc(score.source.title ?? 'Score source')} ↗</a>` : ''} <a href="${url}">Score and recording in the Hall</a></figcaption></figure>`;
  }
  async function comparison(id) {
    if (!comparisons.has(id)) {
      const review = await optionalJson(path.join(ROOT, 'content/plan/reviews', `compare-${id}.json`));
      const c = review?.verdict === 'pass' ? await optionalJson(path.join(ROOT, 'content/compare', `${id}.json`)) : null;
      comparisons.set(id, c && c.recordings.every((r) => programme.has(r.listen)) ? c : null);
    }
    const c = comparisons.get(id);
    return c ? `<a class="j-compare" href="../compare/${attr(id)}.html"><span class="kicker">Other performances</span><strong>${esc(c.title)}</strong><span>Performances compared</span></a>` : '<p class="j-exhibit-note">This performance comparison is not published yet.</p>';
  }

  for (const j of journeys) {
    const ctx = { base: '../', page: `journeys/${j.id}` }, stations = [];
    for (const [i, s] of j.stations.entries()) {
      const t = programme.get(s.listen.id);
      // A station without its own exhibit is text only; the journey's own painting stays in the background.
      const visual = s.score ? await scoreFigure(s) : s.art ? painting(ctx, s.art) : s.map ? await mapVignette(s) : s.edge ? influence(ctx, s.edge) : '';
      const extra = `${s.score && s.art ? `<details class="j-context"><summary>Painting</summary>${painting(ctx, s.art)}</details>` : ''}${s.map && (s.score || s.art) ? `<details class="j-context"><summary>Places on record · ${s.map.year}</summary>${await mapVignette(s)}</details>` : ''}${s.edge && (s.score || s.map || s.art) ? `<details class="j-context"><summary>Influence</summary>${influence(ctx, s.edge)}</details>` : ''}${s.compare ? await comparison(s.compare) : ''}`;
      stations.push(`<section class="j-station${i === 0 ? ' is-current' : ''}${visual || extra ? '' : ' is-text'}" data-j-station="${attr(s.id)}" aria-labelledby="j-title-${i}"><div class="j-station-copy"><span class="kicker">Station ${String(i + 1).padStart(2, '0')} <span aria-hidden="true">/</span> ${String(j.stations.length).padStart(2, '0')}</span><h2 id="j-title-${i}" tabindex="-1">${esc(s.title)}</h2><p class="j-recording"><b>${esc(t.composer.name)}</b> · ${esc(t.work)}${t.movement ? `<br><span>${esc(t.movement)}</span>` : ''}</p><div class="j-narration">${rich(ctx, s.text)}</div><div class="j-cue" aria-live="polite" aria-atomic="true" hidden><span class="kicker">Listening note</span><p data-j-cue></p></div><details class="j-sources"><summary>Sources &amp; recording</summary><p>${esc(t.performers)}<br>Excerpt ${fmt(s.listen.from)}–${fmt(s.listen.to)} · <a href="../hall.html#${attr(t.id)}">Full recording &amp; listening notes</a></p>${sources(s.sources)}${s.cues?.length ? `<ol class="j-cue-list">${s.cues.map((c) => `<li><time>${fmt(c.at)}</time> ${italic(c.text)}</li>`).join('')}</ol>` : ''}</details></div>${visual || extra ? `<div class="j-station-exhibit">${visual}${extra}</div>` : ''}</section>`);
    }
    const data = { id: j.id, stations: j.stations.map((s) => ({ id: s.id, title: s.title, listen: s.listen, cues: s.cues ?? [] })) };
    const body = `<article class="j-reader" data-j-reader><div class="j-atmosphere" aria-hidden="true"${crop(j.hero)}>${img(ctx, j.hero.file, '', { eager: true, sizes: '100vw' })}</div><div class="wrap j-reader-inner"><header class="j-reader-heading"><a href="index.html">Guided journeys</a><span class="j-meta">${j.minutes} minutes · ${j.stations.length} stations</span><h1>${esc(j.title)}</h1><p>${esc(j.subtitle)}</p></header><div class="j-introduction" data-j-intro><p>${italic(j.intro)}</p><span>Begin plays the stations in order; Pause stops playback at the current station.</span></div><nav class="j-rail" aria-label="Journey stations"><ol style="--n:${j.stations.length};--half:${Math.ceil(j.stations.length / 2)}">${j.stations.map((s, i) => `<li><button type="button" data-j-go="${i}" disabled${i === 0 ? ' aria-current="step"' : ''}><span class="j-rail-number"><span class="visually-hidden">Station </span>${String(i + 1).padStart(2, '0')}<span class="visually-hidden">:</span></span><span class="j-rail-title">${esc(s.title)}</span><span class="j-rail-fill" aria-hidden="true"></span></button></li>`).join('')}</ol></nav><div class="j-stations" data-j-stages>${stations.join('')}</div><div class="j-finish" data-j-finish hidden><span class="kicker">End</span><h2>End of the journey</h2><p>Select a station to play it again, or see <a href="index.html">the other journeys</a>.</p></div><div class="j-transport" role="region" aria-label="Journey playback"><button class="textbook-button" type="button" data-j-prev disabled><span>Previous</span></button><button class="play j-play" type="button" data-j-play disabled>Begin</button><div class="j-position"><span data-j-position>Station 1 of ${j.stations.length}</span><span class="num" data-j-clock>0:00 / ${fmt(j.stations[0].listen.to - j.stations[0].listen.from)}</span></div><button class="textbook-button" type="button" data-j-next disabled><span>Next</span></button></div><p class="j-status" data-j-status role="status">Press Begin to start playback.</p><p class="j-keyboard">← → stations · Space pauses · swipe to change station<span data-j-save-note></span></p><noscript><p>Playback needs JavaScript; every station and its sources can be read above.</p></noscript></div><script type="application/json" data-journey>${serialise(data)}</script></article>`;
    await out(`journeys/${j.id}.html`, page(j.id, j.title, j.subtitle, body));
  }
  const keep = new Set(['index.html', ...journeys.map((j) => `${j.id}.html`)]);
  for (const file of await filesIn(path.join(OUT, 'journeys'))) if (file.endsWith('.html') && !keep.has(file)) await unlink(path.join(OUT, 'journeys', file));
  console.log(`journeys: ${journeys.length} published, ${held.length} held`);
  return { band, head: journeys.length ? stylesheet('') : '' };
}
