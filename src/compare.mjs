// Performer comparisons: static, portrait-free listening desks and per-page alignment data.
// Map coordinates are absolute recording seconds, including offsets from compare.py trims.
import { readdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const GROUPS = [
  ['composer-performers', 'Composers playing their own music', 'The composer at the keyboard or on the podium, beside another interpretation.'],
  ['century', 'A century of one piece', 'One score across recording generations. Dates describe the recordings, not the composition.'],
  ['singers', 'Singers: acoustic vs electric', 'Voices, phrasing and the recording medium. Read the notes for each session’s recording process.'],
  ['golden-age', 'Pianists of the Golden Age', 'Compare touch, pacing and the treatment of a melodic line.'],
];
const GOLD = ['#edd39a', '#cba353', '#b98b69', '#e5c577', '#aa9665', '#f0dfbc'];
const DASH = ['', '9 4', '3 4', '12 3 2 3', '2 3', '16 5'];
const fmt = (t) => `${Math.floor(Math.max(0, t) / 60)}:${String(Math.floor(Math.max(0, t) % 60)).padStart(2, '0')}`;
const number = (n) => +n.toFixed(2);
const json = async (file) => JSON.parse(await readFile(file, 'utf8'));
const optionalJson = async (file) => {
  try { return await json(file); } catch (error) { if (error.code === 'ENOENT') return null; throw error; }
};
let linkIndex = {};

/** Available after buildCompare; also emitted as assets/compare-index.json for the hall. */
export function compareLinks(listenId) { return linkIndex[listenId] ?? []; }

function groupFor(c, recordings, composer) {
  if (GROUPS.some(([id]) => id === c.group)) return c.group;
  const family = composer?.family?.toLowerCase();
  if (family && recordings.some((r) => r.performers.toLowerCase().includes(family))) return 'composer-performers';
  if (recordings.some((r) => /soprano|tenor|baritone|bass voice|contralto|mezzo|voice|singer/i.test(r.forces))) return 'singers';
  // Golden Age membership is an authored category, not something piano forces establish.
  return 'century';
}

function alignmentData(data, id) {
  if (!data) return null;
  const map = data.map;
  if (!Array.isArray(map) || map.length < 2) throw new Error(`compare/${id}: alignment needs at least two points`);
  for (let i = 0; i < map.length; i++) {
    const p = map[i], last = map[i - 1];
    if (!Array.isArray(p) || p.length !== 2 || !p.every(Number.isFinite) || p.some((t) => t < 0) || (last && (p[0] <= last[0] || p[1] < last[1]))) {
      throw new Error(`compare/${id}: alignment must be finite and monotone at point ${i}`);
    }
  }
  const confidence = (data.confidence ?? []).filter(Number.isFinite).sort((a, b) => a - b);
  const mid = Math.floor(confidence.length / 2);
  const median = confidence.length ? (confidence[mid] + confidence[Math.ceil(confidence.length / 2) - 1]) / 2 : null;
  const usable = median != null && median >= .75;
  return { map: usable ? map : null, ratio: usable ? data.ratio ?? [] : [], median, method: data.method ?? 'Automatic chroma alignment' };
}

function levelStrip(env) {
  if (!env?.length) return '';
  const bars = 80, width = 320, height = 38, segments = [];
  for (let i = 0; i < bars; i++) {
    const start = Math.floor(i * env.length / bars), end = Math.max(start + 1, Math.floor((i + 1) * env.length / bars));
    let sum = 0;
    for (let j = start; j < end; j++) sum += env[j] ?? 0;
    const h = Math.max(.7, Math.min(1, sum / (end - start)) * height);
    segments.push(`M${i * width / bars + 2} ${number((height - h) / 2)}v${number(h)}`);
  }
  return `<svg class="cmp-level" viewBox="0 0 ${width} ${height}" role="img" aria-label="Relative level within this recording"><path d="${segments.join('')}" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
}

function tempoChart(recordings, duration, passages, esc) {
  const W = 920, H = 280, left = 58, right = 18, top = 34, bottom = 42;
  let low = 1, high = 1;
  for (const r of recordings) for (const value of r.alignment?.ratio ?? []) if (Number.isFinite(value)) { low = Math.min(low, value); high = Math.max(high, value); }
  low = Math.max(0, Math.floor((low - .08) * 4) / 4);
  high = Math.ceil((high + .08) * 4) / 4;
  const x = (t) => left + t / duration * (W - left - right);
  const y = (v) => top + (high - v) / (high - low) * (H - top - bottom);
  const grid = [];
  for (let i = 0; i <= 4; i++) {
    const v = low + (high - low) * i / 4, t = duration * i / 4;
    grid.push(`<line class="cmp-gridline" x1="${left}" x2="${W - right}" y1="${number(y(v))}" y2="${number(y(v))}"/><text x="${left - 10}" y="${number(y(v) + 5)}" text-anchor="end">${v.toFixed(2)}×</text><text x="${number(x(t))}" y="${H - 14}" text-anchor="${i === 4 ? 'end' : i === 0 ? 'start' : 'middle'}">${fmt(t)}</text>`);
  }
  const lines = recordings.map((r, i) => {
    const points = r.reference ? [[0, 1], [duration, 1]] : (r.alignment?.map ?? []).flatMap(([t], j) => Number.isFinite(r.alignment.ratio[j]) ? [[t, r.alignment.ratio[j]]] : []);
    if (!points.length) return '';
    const d = points.map(([t, v], j) => `${j ? 'L' : 'M'}${number(x(t))},${number(y(v))}`).join('');
    return `<path class="cmp-tempo-line" data-cmp-line="${esc(r.listen)}" d="${d}" fill="none" stroke="${GOLD[i % GOLD.length]}" stroke-width="2"${DASH[i % DASH.length] ? ` stroke-dasharray="${DASH[i % DASH.length]}"` : ''}><title>${esc(r.label)}</title></path>`;
  }).join('');
  const markers = passages.map((p, i) => `<g class="cmp-marker"><title>${i + 1}. ${esc(p.label)} · ${fmt(p.t)}</title><line x1="${number(x(p.t))}" x2="${number(x(p.t))}" y1="${top}" y2="${H - bottom}"/><text x="${number(x(p.t))}" y="19" text-anchor="middle">${i + 1}</text></g>`).join('');
  return `<svg class="cmp-tempo-svg" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="cmp-tempo-title cmp-tempo-desc"><title id="cmp-tempo-title">Local time ratio against the reference recording</title><desc id="cmp-tempo-desc">Each gold line follows a performer. Above one means that recording takes longer over the corresponding music. Numbered vertical lines identify the passages below.</desc>${grid.join('')}${markers}${lines}<line class="cmp-playhead" data-cmp-playhead x1="${left}" x2="${left}" y1="${top}" y2="${H - bottom}" visibility="hidden"/></svg>`;
}

export async function buildCompare({ out, layout, esc, attr, bySlug, listens, held = [], PROG, ROOT, OUT }) {
  const dir = path.join(ROOT, 'content/compare');
  const files = (await readdir(dir).catch((error) => { if (error.code === 'ENOENT') return []; throw error; })).filter((file) => file.endsWith('.json')).sort();
  const programme = new Map(PROG.map((r) => [r.id, r]));
  const envelopes = new Map();
  const comparisons = [], heldComparisons = [];
  const knownIds = new Set([...listens.map((r) => r.id), ...held]);
  linkIndex = {};
  for (const file of files) {
    const review = await optionalJson(path.join(ROOT, 'content/plan/reviews', `compare-${path.basename(file, '.json')}.json`));
    if (review?.verdict !== 'pass') { heldComparisons.push(path.basename(file, '.json')); continue; }
    const c = await json(path.join(dir, file));
    for (const r of c.recordings ?? []) if (!knownIds.has(r.listen)) throw new Error(`compare/${c.id}: recording does not exist: ${r.listen}`);
    if ((c.recordings ?? []).some((r) => !programme.has(r.listen))) { heldComparisons.push(c.id); continue; }
    if (!/^[a-z0-9][a-z0-9-]*$/.test(c.id) || `${c.id}.json` !== file) throw new Error(`compare/${file}: id must match filename`);
    if (c.recordings.length < 2 || !c.recordings.some((r) => r.listen === c.reference)) throw new Error(`compare/${c.id}: two recordings and a listed reference are required`);
    const recordings = [];
    for (const r of c.recordings) {
      const track = programme.get(r.listen);
      if (!track) throw new Error(`compare/${c.id}: missing playable recording ${r.listen}`);
      if (!envelopes.has(r.listen)) envelopes.set(r.listen, await optionalJson(path.join(OUT, 'assets/listen', `${r.listen}.json`)));
      const alignment = r.listen === c.reference ? null : alignmentData(await optionalJson(path.join(OUT, 'assets/data/compare', c.id, `${r.listen}.json`)), `${c.id}/${r.listen}`);
      recordings.push({ ...r, reference: r.listen === c.reference, performers: track.performers, forces: track.forces ?? '', recorded: track.recorded, duration: track.duration, alignment, envelope: envelopes.get(r.listen), sourcePage: track.sourcePage });
    }
    const reference = recordings.find((r) => r.reference);
    const passages = c.passages ?? [];
    for (const p of passages) if (!Number.isFinite(p.t) || p.t < 0 || p.t > reference.duration) throw new Error(`compare/${c.id}: passage outside reference recording`);
    const composer = bySlug.get(c.composer) ?? programme.get(c.reference).composer;
    const group = groupFor(c, recordings, composer);
    comparisons.push({ c, recordings, reference, composer, group });
    for (const r of recordings) (linkIndex[r.listen] ??= []).push({ compare: c.id, label: c.title, year: r.year ?? null });
  }

  const version = createHash('md5').update(await readFile(path.join(OUT, 'assets/css/compare.css'))).update(await readFile(path.join(OUT, 'assets/js/compare.js'))).digest('hex').slice(0, 8);
  const page = (id, title, description, body) => layout({ base: '../', page: `compare/${id}` }, { title: `${title} — Contrapunctus`, description, body, dark: true, nav: 'compare', head: `<link rel="stylesheet" href="../assets/css/compare.css?v=${version}">`, modules: ['compare'] });
  const ornament = '<div class="cmp-rule" aria-hidden="true"><span>𝄞</span></div>';
  const sources = (items) => items.map((s) => `<li><a href="${attr(s.url)}">${esc(s.title)}</a></li>`).join('');
  for (const { c, recordings, reference, composer } of comparisons) {
    const passages = c.passages ?? [];
    const maxDuration = Math.max(...recordings.map((r) => r.duration));
    const cards = recordings.map((r, i) => `<article class="cmp-recording${r.reference ? ' is-selected' : ''}" data-cmp-card="${attr(r.listen)}" style="--performer:${GOLD[i % GOLD.length]}">
  <div class="cmp-card-top"><span class="cmp-year">${esc(r.year ?? 'Date unknown')}</span><span class="cmp-card-role">${r.reference ? 'Timeline reference' : `Performance ${String(i + 1).padStart(2, '0')}`}</span></div>
  <h3>${esc(r.label)}</h3><p class="cmp-performers">${esc(r.performers)}</p>
  ${levelStrip(r.envelope?.env) || '<p class="cmp-no-level">Level trace unavailable.</p>'}
  <p class="cmp-card-note">${esc(r.note)}</p><div class="cmp-card-bottom"><span class="num">${fmt(r.duration)}</span><button type="button" data-cmp-select="${attr(r.listen)}" aria-pressed="${r.reference}" disabled>${r.reference ? 'Selected' : 'Switch performer'}</button></div>
</article>`).join('');
    const confidence = recordings.filter((r) => !r.reference).map((r) => `<li><b>${esc(r.label)}</b>: ${r.alignment ? r.alignment.median == null ? 'confidence not supplied; timing measurements and switching withheld.' : `median chroma confidence ${r.alignment.median.toFixed(3)}.${r.alignment.median < .75 ? ' Alignment failed the confidence threshold: timing measurements and switching withheld.' : r.alignment.median < .85 ? ' Use with caution: inspect the correspondence before relying on these timings.' : ' Automatic alignment remains provisional.'}` : 'no alignment available; same-moment switching is unavailable.'}</li>`).join('');
    const legend = recordings.map((r, i) => `<li><svg viewBox="0 0 34 8" aria-hidden="true"><path d="M0 4H34" stroke="${GOLD[i % GOLD.length]}" stroke-width="2"${DASH[i % DASH.length] ? ` stroke-dasharray="${DASH[i % DASH.length]}"` : ''}/></svg>${esc(r.label)}${r.reference ? ' · reference' : !r.alignment?.map ? ' · not aligned' : ''}</li>`).join('');
    const durations = recordings.map((r, i) => `<li><div><span>${esc(r.label)}</span><b class="num">${fmt(r.duration)}</b></div><span class="cmp-duration-track"><span style="width:${number(r.duration / maxDuration * 100)}%;--performer:${GOLD[i % GOLD.length]}"></span></span></li>`).join('');
    const data = { id: c.id, reference: c.reference, duration: reference.duration, passages, recordings: recordings.map((r) => ({ listen: r.listen, label: r.label, duration: r.duration, map: r.alignment?.map ?? null })) };
    const body = `<article class="cmp-page" data-cmp-page>
<header class="cmp-hero"><div class="wrap cmp-heading"><p class="crumbs"><a href="index.html">Compare performers</a><span aria-hidden="true"> / </span>${c.composer ? `<a href="../composers/${attr(c.composer)}.html">${esc(composer.name)}</a>` : `<span>${esc(composer.name)}</span>`}</p><span class="kicker">One score · different hands</span><h1>${esc(c.title)}</h1><p class="cmp-work">${esc(c.work)}</p><p class="cmp-question">${esc(c.question)}</p></div></header>
<div class="wrap cmp-content"><section class="cmp-desk" aria-labelledby="cmp-desk-title"><div class="cmp-section-heading"><span class="kicker">The listening desk</span><h2 id="cmp-desk-title">Change the performer,<br><i>keep the musical moment.</i></h2><p>Choose a recording, press play, then switch cards. The other performance picks up at the automatically matched place.</p></div>
<div class="cmp-recordings">${cards}</div>
<div class="cmp-transport" role="region" aria-label="Comparison playback"><button class="cmp-play" type="button" data-cmp-play disabled aria-label="Play selected recording">Play</button><div class="cmp-now"><span class="sc">Selected recording</span><b data-cmp-now>${esc(reference.label)}</b><label class="cmp-seek-label" for="cmp-seek">Position in reference: <span class="num" data-cmp-reference-time>0:00</span></label><input id="cmp-seek" data-cmp-seek type="range" min="0" max="${reference.duration}" step="0.1" value="0" disabled></div><div class="cmp-clock num"><span data-cmp-time>0:00</span><span data-cmp-duration>/ ${fmt(reference.duration)}</span></div><button class="cmp-stop" type="button" data-cmp-stop disabled hidden>Stop sequence</button></div>
<p class="cmp-status" data-cmp-status role="status">Loading the shared player…</p><p class="cmp-level-note">Strips show relative level within each recording, not loudness comparisons.</p><noscript><p>Playback requires JavaScript. The notes, charts and full-recording links remain readable.</p></noscript></section>
<aside class="cmp-honesty"><span class="sc">Provisional alignment</span><p>Aligned automatically by chroma; may be wrong across cuts, omitted repeats or long rests. Switching is available only within the aligned span; a matching timestamp is not proof of a matching phrase.</p></aside>
${ornament}<div class="cmp-introduction"><span class="kicker">The comparison</span><p>${esc(c.intro)}</p></div>
<section class="cmp-tempo" aria-labelledby="cmp-tempo-heading"><div class="cmp-section-heading"><span class="kicker">Timing, not intention</span><h2 id="cmp-tempo-heading">The tempo map</h2><p>Local time taken, relative to ${esc(reference.label)}. Above 1× means more time over the corresponding music, not a higher playing speed.</p></div><figure><div class="cmp-chart-scroll" tabindex="0" role="region" aria-label="Tempo map; scroll horizontally on small screens">${tempoChart(recordings, reference.duration, passages, esc)}</div><figcaption>Reference time runs left to right. Ratios are smoothed over about eight seconds; pauses and alignment errors can create peaks. Numbered markers correspond to the passages below.</figcaption></figure><ul class="cmp-legend">${legend}</ul></section>
<div class="cmp-lower"><section class="cmp-passages" aria-labelledby="cmp-passages-heading"><span class="kicker">Side by side, by ear</span><h2 id="cmp-passages-heading">Listen at the joins</h2><p class="cmp-section-note">Hear up to 12 seconds of reference music in each version, in card order. Each excerpt stops at the matched endpoint, or the next marked passage if sooner.</p><ol>${passages.map((p, i) => `<li><span class="cmp-passage-number">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(p.label)}</h3><span class="cmp-passage-time num">${fmt(p.t)} in the reference</span><p>${esc(p.note)}</p><button type="button" data-cmp-passage="${i}" disabled>Hear this moment in each <span aria-hidden="true">→</span></button></div></li>`).join('')}</ol></section>
<section class="cmp-durations" aria-labelledby="cmp-duration-heading"><span class="kicker">Measured file lengths</span><h2 id="cmp-duration-heading">Time on the record</h2><ol>${durations}</ol><p class="cmp-section-note">Whole-file durations, including lead-in and decay. Different sides, cuts and repeats need not contain the same amount of music; a shorter file alone does not establish a faster tempo.</p></section></div>
${ornament}<section class="cmp-notes" aria-labelledby="cmp-notes-heading"><span class="kicker">The evidence behind the sound</span><h2 id="cmp-notes-heading">Recording notes</h2><div>${recordings.map((r) => `<article><h3>${esc(r.label)}</h3><p>${esc(r.note)}</p><p class="cmp-recorded">${esc(r.performers)}${r.recorded ? `<br>${esc(r.recorded)}` : ''}</p><a href="../hall.html#${attr(r.listen)}">Listening notes &amp; recording dossier →</a>${r.sourcePage ? `<a href="${attr(r.sourcePage)}">Original recording source ↗</a>` : ''}</article>`).join('')}</div></section>
<section class="cmp-sources" aria-labelledby="cmp-sources-heading"><div><span class="kicker">Sources &amp; method</span><h2 id="cmp-sources-heading">Read alongside the record</h2><ul>${sources(c.sources ?? [])}</ul></div><details><summary>Alignment evidence &amp; limitations</summary><p>Chroma features describe pitch-class content. Dynamic time warping matches their sequence, then interpolates between sampled pairs of recording times. When switching from a non-reference recording, its map is inverted first, then the chosen performer’s map is applied. Repeated timestamps use the midpoint of the matching reference span.</p><ul>${confidence}</ul><p>Trims retain their original recording offsets. No timing is extrapolated outside a map. Confidence measures feature similarity, not historical or musical certainty.</p></details></section>
<nav class="cmp-related" aria-label="Comparison navigation"><a href="index.html">← All performer comparisons</a><a href="../hall.html#${attr(c.reference)}">This music in the Hall →</a></nav></div><script type="application/json" data-cmp>${JSON.stringify(data).replace(/</g, '\\u003c')}</script></article>`;
    await out(`compare/${c.id}.html`, page(c.id, c.title, c.question, body));
  }

  const years = comparisons.flatMap(({ recordings }) => recordings.map((r) => r.year)).filter(Number.isFinite);
  const groups = GROUPS.map(([id, title, description], i) => {
    const entries = comparisons.filter((c) => c.group === id);
    return `<section class="cmp-group" id="${id}"><header><span class="cmp-group-number">${['I', 'II', 'III', 'IV'][i]}</span><div><h2>${title}</h2><p>${description}</p></div><span class="cmp-count">${entries.length} ${entries.length === 1 ? 'comparison' : 'comparisons'}</span></header>${entries.length ? `<ol class="cmp-studies">${entries.map(({ c, recordings, composer }) => `<li><a class="cmp-study" href="${attr(c.id)}.html"><span class="sc">${esc(composer?.name ?? c.composer)}</span><h3>${esc(c.title)}</h3><p>${esc(c.question)}</p><div class="cmp-study-recordings">${recordings.map((r) => `<span><b>${esc(r.year ?? 'Undated')}</b>${esc(r.label)}</span>`).join('')}</div><span class="cmp-study-open">${recordings.length} performances <span aria-hidden="true">↗</span></span></a></li>`).join('')}</ol>` : '<p class="cmp-empty">No published comparisons in this group yet.</p>'}</section>`;
  }).join('');
  const body = `<article class="cmp-page cmp-index"><header class="cmp-hero"><div class="wrap cmp-heading"><p class="crumbs"><a href="../hall.html">The concert hall</a><span aria-hidden="true"> / </span>The listening desk</p><span class="kicker">The art of interpretation</span><h1>One piece.<br><i>Different hands.</i></h1><p class="cmp-question">Hear what changes when the performer changes.</p><p class="cmp-index-intro">Set recordings beside one another, switch at the same musical moment, and follow the way each performance takes its time. Read the evidence; listen for yourself.</p><div class="cmp-index-facts"><span><b>${comparisons.length}</b> comparisons</span><span><b>${new Set(comparisons.flatMap(({ recordings }) => recordings.map((r) => r.listen))).size}</b> recordings</span>${years.length ? `<span><b>${Math.min(...years)}–${Math.max(...years)}</b> recording years</span>` : ''}</div><nav class="cmp-group-nav" aria-label="Comparison groups">${GROUPS.map(([id, title]) => `<a href="#${id}">${title}</a>`).join('')}</nav></div><div class="cmp-record-art" aria-hidden="true"><div><span>CONTRAPUNCTUS</span><i>Same music<br>another moment</i><b>78</b></div></div></header><div class="wrap cmp-content">${groups}${ornament}<section class="cmp-index-guide"><div><span class="kicker">A listening instrument</span><h2>One transport.<br>More than one reading.</h2></div><ol><li><b>Choose a performance.</b> Its recording plays through the Hall’s shared player.</li><li><b>Change the hands.</b> The alignment seeks the other recording to the corresponding phrase.</li><li><b>Keep the evidence in view.</b> Automatic chroma alignment is provisional and may be wrong across cuts. A duration is a measurement, not an explanation.</li></ol></section></div></article>`;
  await out('compare/index.html', page('index', 'Compare performers', 'Compare recordings of the same music at the same musical moment: composer-performers, a century of one piece, singers and Golden Age pianists.', body));
  await writeFile(path.join(OUT, 'assets/compare-index.json'), JSON.stringify(linkIndex));
  const live = new Set(['index.html', ...comparisons.map(({ c }) => `${c.id}.html`)]);
  for (const file of await readdir(path.join(OUT, 'compare'))) if (file.endsWith('.html') && !live.has(file)) await unlink(path.join(OUT, 'compare', file));
  console.log(`comparisons: ${comparisons.length} published, ${heldComparisons.length} held${heldComparisons.length ? ` (${heldComparisons.join(', ')})` : ''}`);
  return comparisons.map(({ c, composer }) => ({ id: c.id, title: c.title, question: c.question, work: c.work, composer: composer.name }));
}
