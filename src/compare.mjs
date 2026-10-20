// Performer comparisons: static, portrait-free listening desks and per-page alignment data.
// Map coordinates are absolute recording seconds, including offsets from compare.py trims.
import { readdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const GROUPS = [
  ['composer-performers', 'Composers playing their own music', 'Recordings with the composer at the keyboard or conducting, beside other performances of the same music.'],
  ['century', 'Performances across a century', 'The same score recorded by performers of different generations.'],
  ['singers', 'Singers: acoustic and electrical recordings', 'Voices and phrasing recorded before and after the introduction of the microphone.'],
  ['golden-age', 'Pianists of the Golden Age', 'Pianists of the early twentieth century beside later performances of the same pieces, compared phrase by phrase.'],
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
  return `<svg class="cmp-level" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="Changes in volume within this recording"><path d="${segments.join('')}" fill="none" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>`;
}

// Ratios this far from 1 are alignment failures (a skipped repeat, a long silence), not tempo.
const PLAUSIBLE = [.33, 3];
const ratioLabel = (v) => `${+v.toFixed(2)}×`;
function tempoChart(recordings, duration, passages, esc) {
  const W = 920, H = 280, left = 74, right = 22, top = 34, bottom = 46;
  let low = 1, high = 1;
  for (const r of recordings) for (const value of r.alignment?.ratio ?? []) if (Number.isFinite(value) && value >= PLAUSIBLE[0] && value <= PLAUSIBLE[1]) { low = Math.min(low, value); high = Math.max(high, value); }
  // Round ticks: quarters of a tempo ratio (or halves on a wide range) and whole minutes.
  const step = high - low > 1.6 ? .5 : .25;
  low = Math.max(0, Math.floor((low - .05) / step) * step);
  high = Math.ceil((high + .05) / step) * step;
  const minute = [30, 60, 120, 300, 600].find((s) => duration / s <= 7) ?? 600;
  const x = (t) => left + t / duration * (W - left - right);
  const y = (v) => top + (high - v) / (high - low) * (H - top - bottom);
  const grid = [];
  for (let v = low; v <= high + 1e-9; v += step) grid.push(`<line class="cmp-gridline${Math.abs(v - 1) < 1e-9 ? ' is-unit' : ''}" x1="${left}" x2="${W - right}" y1="${number(y(v))}" y2="${number(y(v))}"/><text x="${left - 12}" y="${number(y(v) + 5)}" text-anchor="end">${ratioLabel(v)}</text>`);
  for (let t = 0; t <= duration; t += minute) grid.push(`<text x="${number(x(t))}" y="${H - 14}" text-anchor="${t ? 'middle' : 'start'}">${fmt(t)}</text>`);
  const lines = recordings.map((r, i) => {
    if (r.reference) return `<path class="cmp-tempo-line is-reference" data-cmp-line="${esc(r.listen)}" d="M${left},${number(y(1))}H${W - right}" fill="none" stroke="${GOLD[i % GOLD.length]}" stroke-width="1"><title>${esc(r.label)} (reference)</title></path>`;
    // A gap in the line marks a stretch the alignment could not match.
    let pen = false;
    const d = (r.alignment?.map ?? []).map(([t], j) => {
      const v = r.alignment.ratio[j];
      if (!Number.isFinite(v) || v < PLAUSIBLE[0] || v > PLAUSIBLE[1]) { pen = false; return ''; }
      const move = pen ? 'L' : 'M'; pen = true;
      return `${move}${number(x(t))},${number(y(v))}`;
    }).join('');
    if (!d) return '';
    return `<path class="cmp-tempo-line" data-cmp-line="${esc(r.listen)}" d="${d}" fill="none" stroke="${GOLD[i % GOLD.length]}" stroke-width="2"${DASH[i % DASH.length] ? ` stroke-dasharray="${DASH[i % DASH.length]}"` : ''}><title>${esc(r.label)}</title></path>`;
  }).join('');
  const markers = passages.map((p, i) => `<g class="cmp-marker"><title>${i + 1}. ${esc(p.label.replace(/<\/?i>/g, ''))} · ${fmt(p.t)}</title><line x1="${number(x(p.t))}" x2="${number(x(p.t))}" y1="${top}" y2="${H - bottom}"/><text x="${number(x(p.t))}" y="19" text-anchor="middle">${i + 1}</text></g>`).join('');
  return `<svg class="cmp-tempo-svg" viewBox="0 0 ${W} ${H}" data-left="${left}" data-right="${right}" role="img" aria-labelledby="cmp-tempo-title cmp-tempo-desc"><title id="cmp-tempo-title">Time taken compared with the reference recording</title><desc id="cmp-tempo-desc">Each gold line follows a performer. Above 1×, the recording takes longer over the same music. Numbered lines mark the passages below.</desc>${grid.join('')}${markers}${lines}<line class="cmp-playhead" data-cmp-playhead x1="${left}" x2="${left}" y1="${top}" y2="${H - bottom}" visibility="hidden"/></svg>`;
}

export async function buildCompare({ out, layout, esc, attr, bySlug, listens, held = [], PROG, ROOT, OUT }) {
  /** Reader-facing text may italicise titles and terms with <i>…</i>; every other tag is escaped. */
  const italic = (s = '') => esc(s).replace(/&lt;(\/?)i&gt;/g, '<$1i>');
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
  const page = (id, title, description, body) => layout({ base: '../', page: `compare/${id}` }, { title: `${title} — Contrapunctus`, description, body, dark: true, night: true, nav: 'compare', head: `<link rel="stylesheet" href="../assets/css/compare.css?v=${version}">`, modules: ['compare'] });
  const ornament = '<div class="cmp-rule" aria-hidden="true"><span>𝄞</span></div>';
  const sources = (items) => items.map((s) => `<li><a href="${attr(s.url)}">${esc(s.title)}</a></li>`).join('');
  // A card's year is printed above its heading, so the heading drops the year that ends the label;
  // the performers line is left out when it only repeats that name.
  const bare = (label) => String(label).replace(/,\s*(?:c\.\s*)?\d{4}(?:[–-]\d{2,4})?$/, '');
  const fold = (s) => String(s ?? '').normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const repeats = (r) => fold(r.performers).startsWith(fold(bare(r.label)));
  for (const { c, recordings, reference, composer } of comparisons) {
    const passages = c.passages ?? [];
    const maxDuration = Math.max(...recordings.map((r) => r.duration));
    const cards = recordings.map((r, i) => `<article class="cmp-recording${r.reference ? ' is-selected' : ''}" data-cmp-card="${attr(r.listen)}" style="--performer:${GOLD[i % GOLD.length]}">
  <div class="cmp-card-top"><span class="cmp-year">${esc(r.year ?? 'Date unknown')}</span><span class="cmp-card-role">${r.reference ? 'Reference recording' : `Performance ${String(i + 1).padStart(2, '0')}`}</span></div>
  <h3>${esc(bare(r.label))}</h3>${repeats(r) ? '' : `<p class="cmp-performers">${esc(r.performers)}</p>`}
  ${levelStrip(r.envelope?.env) || '<p class="cmp-no-level">Volume chart unavailable.</p>'}
  <p class="cmp-card-note">${italic(r.note)}</p><div class="cmp-card-bottom"><span class="num">${fmt(r.duration)}</span><button class="textbook-button" type="button" data-cmp-select="${attr(r.listen)}" aria-pressed="${r.reference}" disabled>${r.reference ? 'Selected' : 'Switch to this recording'}</button></div>
</article>`).join('');
    const confidence = recordings.filter((r) => !r.reference).map((r) => `<li><b>${esc(r.label)}</b>: ${r.alignment ? r.alignment.median == null ? 'no match score available; timing charts and switching are unavailable.' : `match score ${r.alignment.median.toFixed(3)}.${r.alignment.median < .75 ? ' Too low to offer timing charts or switching.' : r.alignment.median < .85 ? ' Check the matched passages by ear before using these timings.' : ' Matched passages available.'}` : 'no timing match available; switching is unavailable.'}</li>`).join('');
    const legend = recordings.map((r, i) => `<li><svg viewBox="0 0 34 8" aria-hidden="true"><path d="M0 4H34" stroke="${GOLD[i % GOLD.length]}" stroke-width="${r.reference ? 1 : 2}"${r.reference ? ' stroke-dasharray="1 4"' : DASH[i % DASH.length] ? ` stroke-dasharray="${DASH[i % DASH.length]}"` : ''}/></svg>${esc(r.label)}${r.reference ? ' · reference' : !r.alignment?.map ? ' · not aligned' : ''}</li>`).join('');
    const durations = recordings.map((r, i) => `<li><div><span>${esc(r.label)}</span><b class="num">${fmt(r.duration)}</b></div><span class="cmp-duration-track"><span style="width:${number(r.duration / maxDuration * 100)}%;--performer:${GOLD[i % GOLD.length]}"></span></span></li>`).join('');
    const data = { id: c.id, reference: c.reference, duration: reference.duration, passages, recordings: recordings.map((r) => ({ listen: r.listen, label: r.label, duration: r.duration, map: r.alignment?.map ?? null })) };
    const body = `<article class="cmp-page" data-cmp-page>
<header class="cmp-hero"><div class="wrap cmp-heading"><p class="crumbs"><a href="index.html">Compare performers</a><span aria-hidden="true"> / </span>${c.composer ? `<a href="../composers/${attr(c.composer)}.html">${esc(composer.name)}</a>` : `<span>${esc(composer.name)}</span>`}</p><h1>${esc(c.title)}</h1><p class="cmp-work">${esc(c.work)}</p><p class="cmp-question">${esc(c.question)}</p></div></header>
<div class="wrap cmp-content"><section class="cmp-desk" aria-labelledby="cmp-desk-title"><div class="cmp-section-heading"><span class="kicker">Player</span><h2 id="cmp-desk-title">Recordings in<br><i>this comparison</i></h2><p>Choose a recording and press Play. Selecting another card continues playback from the matching point in that recording.</p></div>
<div class="cmp-recordings">${cards}</div>
<div class="cmp-transport" role="region" aria-label="Comparison playback"><button class="play cmp-play" type="button" data-cmp-play disabled aria-label="Play selected recording">Play</button><div class="cmp-now"><span class="sc">Selected recording</span><b data-cmp-now>${esc(reference.label)}</b><label class="cmp-seek-label" for="cmp-seek">Reference recording at <span class="num" data-cmp-reference-time>0:00</span></label><input id="cmp-seek" data-cmp-seek type="range" min="0" max="${reference.duration}" step="0.1" value="0" disabled></div><div class="cmp-clock num"><span data-cmp-time>0:00</span> <span data-cmp-duration>/ ${fmt(reference.duration)}</span></div><button class="textbook-button cmp-stop" type="button" data-cmp-stop disabled hidden>Stop</button></div>
<p class="cmp-status" data-cmp-status role="status">Loading the player…</p><p class="cmp-level-note">Each strip shows changes in volume within one recording.</p><noscript><p>Playback needs JavaScript; the notes, the charts and the links to the full recordings work without it.</p></noscript></section>
<aside class="cmp-honesty"><span class="sc">About the timings</span><p>Recordings are matched automatically; cuts, skipped repeats and long rests can throw the match off.</p></aside>
${ornament}<div class="cmp-introduction"><span class="kicker">The comparison</span><p>${italic(c.intro)}</p></div>
<section class="cmp-tempo" aria-labelledby="cmp-tempo-heading"><div class="cmp-section-heading"><span class="kicker">Tempo</span><h2 id="cmp-tempo-heading">Tempo map</h2><p>Time taken compared with ${esc(reference.label)}: above 1×, the performer takes longer over the same music; below it, less time.</p></div><figure><div class="cmp-chart-scroll" tabindex="0" role="region" aria-label="Tempo map; scroll horizontally on small screens">${tempoChart(recordings, reference.duration, passages, esc)}</div><figcaption>The reference recording’s clock runs left to right. Each line is smoothed over about eight seconds; pauses can create peaks. Numbers mark the passages below.</figcaption></figure><ul class="cmp-legend">${legend}</ul></section>
<div class="cmp-lower"><section class="cmp-passages" aria-labelledby="cmp-passages-heading"><span class="kicker">Passages</span><h2 id="cmp-passages-heading">Passages compared</h2><p class="cmp-section-note">Each version plays in card order, for up to 12 seconds of reference music or until the next marked passage, whichever comes first.</p><ol>${passages.map((p, i) => `<li><span class="cmp-passage-number">${String(i + 1).padStart(2, '0')}</span><div><h3>${italic(p.label)}</h3><span class="cmp-passage-time num">${fmt(p.t)} in the reference</span><p>${italic(p.note)}</p><button class="play" type="button" data-cmp-passage="${i}" disabled>Play each version</button></div></li>`).join('')}</ol></section>
<section class="cmp-durations" aria-labelledby="cmp-duration-heading"><span class="kicker">Durations</span><h2 id="cmp-duration-heading">Length of each recording</h2><ol>${durations}</ol><p class="cmp-section-note">These times include the lead-in and final fade. Cuts, repeats and disc-side breaks also affect a recording’s length.</p></section></div>
${ornament}<section class="cmp-notes" aria-labelledby="cmp-notes-heading"><span class="kicker">Performers and sessions</span><h2 id="cmp-notes-heading">Recording notes</h2><div>${recordings.map((r) => `<article><h3>${esc(r.label)}</h3><p>${italic(r.note)}</p><p class="cmp-recorded">${esc(r.performers)}${r.recorded ? `<br>${esc(r.recorded)}` : ''}</p><a href="../hall.html#${attr(r.listen)}">Listening notes &amp; recording details</a>${r.sourcePage ? `<a href="${attr(r.sourcePage)}">Original recording source ↗</a>` : ''}</article>`).join('')}</div></section>
<section class="cmp-sources" aria-labelledby="cmp-sources-heading"><div><span class="kicker">Sources &amp; method</span><h2 id="cmp-sources-heading">Further reading</h2><ul class="reading-list">${sources(c.sources ?? [])}</ul></div><details><summary>How the recordings are matched</summary><p>The matching follows sequences of pitches, using a method called dynamic time warping. Every recording is mapped to the reference, so switching between two versions goes through that shared clock. Where several reference times match one point, the middle time is used.</p><ul>${confidence}</ul><p>Switching stays within the matched span, and trimmed recordings keep their original clock times. Match scores describe similarity in the sound.</p></details></section>
<nav class="pager" aria-label="Comparison navigation"><a href="index.html"><span class="sc">Compare performers</span><span class="nm">All comparisons</span></a><a href="../hall.html#${attr(c.reference)}"><span class="sc">The Concert Hall</span><span class="nm">The reference recording</span></a></nav></div><script type="application/json" data-cmp>${JSON.stringify(data).replace(/</g, '\\u003c')}</script></article>`;
    await out(`compare/${c.id}.html`, page(c.id, c.title, c.question, body));
  }

  const years = comparisons.flatMap(({ recordings }) => recordings.map((r) => r.year)).filter(Number.isFinite);
  const groups = GROUPS.map(([id, title, description], i) => {
    const entries = comparisons.filter((c) => c.group === id);
    const lead = `${entries.length % 3 === 1 && entries.length > 1 ? ' is-lead-3' : ''}${entries.length % 2 ? ' is-lead-2' : ''}`;
    return `<section class="cmp-group" id="${id}"><header><span class="cmp-group-number">${['I', 'II', 'III', 'IV'][i]}</span><div><h2>${title}</h2><p>${description}</p></div><span class="cmp-count">${entries.length} ${entries.length === 1 ? 'comparison' : 'comparisons'}</span></header>${entries.length ? `<ol class="cmp-studies${lead}">${entries.map(({ c, recordings, composer }) => `<li><a class="cmp-study" href="${attr(c.id)}.html"><span class="sc">${esc(composer?.name ?? c.composer)}</span><h3>${esc(c.title)}</h3><p>${esc(c.question)}</p><div class="cmp-study-recordings">${recordings.map((r) => `<span><b>${esc(r.year ?? 'Date unknown')}</b>${esc(r.year ? bare(r.label) : r.label)}</span>`).join('')}</div><span class="cmp-study-open">${recordings.length} performances</span></a></li>`).join('')}</ol>` : '<p class="cmp-empty">No published comparisons in this group yet.</p>'}</section>`;
  }).join('');
  const body = `<article class="cmp-page cmp-index"><header class="cmp-hero"><div class="wrap cmp-heading"><p class="crumbs"><a href="../hall.html">The Concert Hall</a><span aria-hidden="true"> / </span>Compare performers</p><h1>Compare <i>performers</i></h1><p class="cmp-question">Recordings of the same music by different performers, matched passage by passage.</p><p class="cmp-index-intro">Choose a recording; when another recording is selected, playback continues from the matching point.</p><div class="cmp-index-facts"><span><b>${comparisons.length}</b> comparisons</span><span><b>${new Set(comparisons.flatMap(({ recordings }) => recordings.map((r) => r.listen))).size}</b> recordings</span>${years.length ? `<span><b>${Math.min(...years)}–${Math.max(...years)}</b> recording years</span>` : ''}</div><nav class="cmp-group-nav" aria-label="Comparison groups">${GROUPS.map(([id, title]) => `<a href="#${id}">${title}</a>`).join('')}</nav></div><div class="cmp-record-art" aria-hidden="true"><div><span>CONTRAPUNCTUS</span><i>Performances<br>compared</i><b>78</b></div></div></header><div class="wrap cmp-content">${groups}${ornament}<section class="cmp-index-guide"><div><span class="kicker">The player</span><h2>How the player<br>works</h2></div><ol><li><b>Choose a recording.</b> Press Play.</li><li><b>Select another recording.</b> Playback continues from the matching phrase.</li><li><b>Passages.</b> Each marked passage plays in every version in turn; the tempo map shows the time each performer takes. Timings are matched automatically.</li></ol></section></div></article>`;
  await out('compare/index.html', page('index', 'Compare performers', 'Switch between recordings of the same piece: composers playing their own music, singers, Golden Age pianists and a century of performances.', body));
  await writeFile(path.join(OUT, 'assets/compare-index.json'), JSON.stringify(linkIndex));
  const live = new Set(['index.html', ...comparisons.map(({ c }) => `${c.id}.html`)]);
  for (const file of await readdir(path.join(OUT, 'compare'))) if (file.endsWith('.html') && !live.has(file)) await unlink(path.join(OUT, 'compare', file));
  console.log(`comparisons: ${comparisons.length} published, ${heldComparisons.length} held${heldComparisons.length ? ` (${heldComparisons.join(', ')})` : ''}`);
  return comparisons.map(({ c, composer }) => ({ id: c.id, title: c.title, question: c.question, work: c.work, composer: composer.name }));
}
