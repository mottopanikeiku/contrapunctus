// Return Lab: authored score differences beside provisional measurements of one recording.
// Bars follow performed order (including repeats); a gap is not a missing or zero-duration bar.
import { readdir, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const fmt = (t) => {
  const seconds = Math.max(0, Math.floor(t));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
};
const rounded = (n) => +n.toFixed(4);
const playIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3 13 8 5 13Z" fill="currentColor"/></svg>';
const staff = '<div class="rl-staff" aria-hidden="true"><span>𝄋</span></div>';
const json = async (file) => JSON.parse(await readFile(file, 'utf8'));

function resolve(cmp, track, score, envelope) {
  const duration = track.duration;
  const bars = score.bars;
  const lookup = new Map(bars.map((b, i) => [`${b.n}/${b.occ}`, i]));
  const indexOf = (n, occ) => {
    const i = lookup.get(`${n}/${occ}`);
    if (i == null) throw new Error(`unresolved bar ${n}/${occ}`);
    return i;
  };
  const endOf = (i) => bars[i + 1]?.t ?? duration;
  const ranges = [cmp.first, cmp.second].map((s) => {
    const start = indexOf(s.from.n, s.from.occ), end = indexOf(s.to.n, s.to.occ);
    if (end < start) throw new Error(`reversed passage ${s.label}`);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });
  const pairs = cmp.pairs?.length
    ? cmp.pairs.map(([an, ao, bn, bo]) => [an == null ? null : indexOf(an, ao), bn == null ? null : indexOf(bn, bo)])
    : Array.from({ length: Math.max(...ranges.map((r) => r.length)) }, (_, i) => [ranges[0][i] ?? null, ranges[1][i] ?? null]);
  for (const k of [0, 1]) {
    const present = pairs.map((p) => p[k]).filter((i) => i != null);
    if (present.length !== ranges[k].length || present.some((b, i) => b !== ranges[k][i])) {
      throw new Error('pairs must cover each passage once, in performed order');
    }
  }
  const env = envelope.env;
  const level = (start, end) => {
    const from = Math.floor(start * 2), to = Math.min(env.length, Math.max(from + 1, Math.ceil(end * 2)));
    let total = 0;
    for (let i = from; i < to; i++) total += env[i];
    return to > from ? rounded(total / (to - from)) : null;
  };
  const barData = (i) => {
    if (i == null) return null;
    const t = bars[i].t, end = endOf(i);
    if (!Number.isFinite(t) || !Number.isFinite(end) || end <= t) throw new Error(`invalid duration at bar ${bars[i].n}/${bars[i].occ}`);
    return { n: bars[i].n, occ: bars[i].occ, t, d: end - t, lvl: level(t, end) };
  };
  const pairData = pairs.map(([a, b]) => ({ a: barData(a), b: barData(b) }));
  const sides = ranges.map((range, k) => {
    const columns = new Map(pairs.flatMap((p, i) => p[k] == null ? [] : [[p[k], i]]));
    const notes = [];
    // Split sustained notes at performed bar boundaries: each segment then occupies its
    // own grid column, even when the other passage has an inserted or omitted bar.
    for (const [t, length, pitch, voice, firstBar] of score.notes) {
      if (!columns.has(firstBar)) continue;
      const end = Math.min(t + length, endOf(range.at(-1)));
      for (let b = firstBar; b <= range.at(-1) && bars[b].t < end; b++) {
        const column = columns.get(b);
        if (column == null) continue;
        const t0 = Math.max(t, bars[b].t), t1 = Math.min(end, endOf(b));
        const d = endOf(b) - bars[b].t;
        if (t1 > t0) notes.push([rounded(column + (t0 - bars[b].t) / d), rounded((t1 - t0) / d), pitch, voice]);
      }
    }
    return { notes, start: bars[range[0]].t, end: endOf(range.at(-1)), bars: range.length };
  });
  const changeIndex = (k, ref) => ref == null ? -1 : pairs.findIndex((p) => p[k] === indexOf(ref[0], ref[1]));
  const changes = (cmp.scoreChanges ?? []).map((c) => ({ ia: changeIndex(0, c.a), ib: changeIndex(1, c.b), text: c.text }));
  const shared = pairData.filter((p) => p.a && p.b);
  return {
    id: cmp.id, track: cmp.track, duration, voices: score.voices.map((v) => v.name),
    A: { label: cmp.first.label, ...sides[0] }, B: { label: cmp.second.label, ...sides[1] },
    pairs: pairData, changes, method: score.method,
    shared: shared.length,
    sharedA: shared.reduce((sum, p) => sum + p.a.d, 0),
    sharedB: shared.reduce((sum, p) => sum + p.b.d, 0),
  };
}

export async function buildReturnLab({ out, layout, esc, attr, listens, bySlug, PROG, ROOT, OUT, warnings }) {
  const dir = path.join(ROOT, 'content/returnlab');
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
  // Reuse the generator's full metadata; the browser's programme is a compact wire format.
  const programme = new Map(PROG.map((t) => [t.id, t]));
  const loaded = new Map();
  const list = [];
  for (const file of files) {
    const c = await json(path.join(dir, file));
    try {
      const l = listens.find((item) => item.id === c.track), track = programme.get(c.track);
      if (!l || !track) throw new Error('missing recording');
      if (!loaded.has(c.track)) loaded.set(c.track, await Promise.all([
        json(path.join(OUT, 'assets/data', c.track, 'score.json')),
        json(path.join(OUT, 'assets/listen', `${c.track}.json`)),
      ]));
      const [score, envelope] = loaded.get(c.track);
      list.push({ c, track, comp: bySlug.get(l.composer), data: resolve(c, track, score, envelope) });
    } catch (error) {
      warnings.push(`return-lab/${c.id}: ${error.message}`);
    }
  }
  const version = createHash('md5').update(await readFile(path.join(OUT, 'assets/css/returnlab.css'))).digest('hex').slice(0, 8);
  const head = `<link rel="stylesheet" href="../assets/css/returnlab.css?v=${version}">`;
  const ctx = { base: '../', page: 'return-lab' };
  const page = (title, description, body, image) => layout(ctx, {
    title: `${title} — Contrapunctus`, description, body, dark: true, accent: '#c9a65a', nav: 'hall', head, modules: ['returnlab'], ogImage: image,
  });
  const painting = (track) => track?.era?.hero ? `<figure class="rl-backdrop"><img src="../${attr(track.era.hero)}" alt="" fetchpriority="high"><figcaption>${esc(track.era.heroCaption)} · period painting</figcaption></figure>` : '';
  const cameo = (track) => track.composer.portrait ? `<span class="rl-cameo"><img src="../${attr(track.composer.portrait)}" alt="" style="object-position:${attr(track.composer.focus ?? '50% 30%')}" loading="lazy" width="96" height="120"></span>` : '';
  const sources = (c) => c.sources.map((s) => `<li><a href="${attr(s.url)}">${esc(s.title)}</a></li>`).join('');
  const barLabel = (bar) => bar ? `${esc(bar.n)}${bar.occ > 1 ? ` (${bar.occ})` : ''}` : '—';

  for (const { c, track, comp, data: d } of list) {
    const percent = Math.round((d.sharedB / d.sharedA - 1) * 100);
    const measured = d.shared ? `The ${d.shared} matching bars take ${d.sharedB.toFixed(1)} seconds on return and ${d.sharedA.toFixed(1)} seconds the first time${percent ? ` — ${Math.abs(percent)}% ${percent > 0 ? 'longer' : 'shorter'}` : ', the same to the nearest whole per cent'}.` : 'These passages have no matching bars to compare.';
    const sideButton = (key) => `<button class="rl-play" type="button" data-rl-play="${key}" disabled>${playIcon}<span><b>${key} · ${esc(d[key].label)}</b><small class="num">${fmt(d[key].start)}–${fmt(d[key].end)} · ${d[key].bars} bars</small></span></button>`;
    const dataRows = d.pairs.map((p, i) => `<tr><th scope="row">${i + 1}</th><td>${barLabel(p.a)}</td><td>${p.a ? p.a.d.toFixed(2) : '—'}</td><td>${p.a?.lvl != null ? p.a.lvl.toFixed(3) : '—'}</td><td>${barLabel(p.b)}</td><td>${p.b ? p.b.d.toFixed(2) : '—'}</td><td>${p.b?.lvl != null ? p.b.lvl.toFixed(3) : '—'}</td></tr>`).join('');
    const body = `<article class="rl-page">
<header class="rl-hero">${painting(track)}<div class="wrap rl-heading">
  <p class="crumbs"><a href="index.html">The Return Lab</a><span aria-hidden="true"> / </span><a href="../composers/${attr(comp.slug)}.html">${esc(comp.name)}</a></p>
  <span class="kicker">${esc(c.kind)} · score comparison</span>
  <h1>${esc(c.title)}</h1><p class="rl-question">${esc(c.question)}</p>
  <p class="rl-intro">${esc(c.intro)}</p>
  <a class="rl-recording" href="../hall.html#${attr(track.id)}">${cameo(track)}<span><b>${esc(track.work)}${track.movement ? ` · ${esc(track.movement)}` : ''}</b><small>${esc(track.performers)} · Full recording in the hall →</small></span></a>
</div></header>
<div class="wrap rl-content">
<section class="rl-comparison" aria-labelledby="rl-compare-title">
  <div class="rl-section-title"><span class="kicker">Listen & compare</span><h2 id="rl-compare-title">Two passages, one bar grid</h2></div>
  <div class="rl-actions">${sideButton('A')}${sideButton('B')}<button class="rl-play rl-both" type="button" data-rl-play="AB" disabled>${playIcon}<span><b>Play A, then B</b><small>One passage after the other</small></span></button><button class="rl-stop" type="button" data-rl-stop disabled>Stop passage</button></div>
  <p class="rl-status" data-rl-status role="status">Choose A, B or both; playback stops at the end of each passage.</p>
  <noscript><p>Read the comparison below; playback and the note map need JavaScript.</p></noscript>
  <figure class="rl-map">
    <div class="rl-map-toolbar"><label>Show <select data-rl-window><option value="0">Whole passage</option><option value="32">32 columns</option><option value="16">16 columns</option></select></label><div class="rl-map-pages"><button type="button" data-rl-prev aria-label="Previous bars" disabled>←</button><span class="num" data-rl-range></span><button type="button" data-rl-next aria-label="Next bars" disabled>→</button></div></div>
    <div class="rl-canvas-frame"><canvas data-rl-canvas role="img" aria-label="Notes in passage A above notes in passage B, aligned by corresponding bar; pitch increases upwards." aria-describedby="rl-map-caption"></canvas></div>
    <figcaption id="rl-map-caption"><b>The score, bar by bar.</b> Matching bars share a column; colours separate the voices. Shading marks a written change, and hatching marks a bar with no counterpart. Note lengths come from the score, stretched to fit each recorded bar.</figcaption>
  </figure>
  <ul class="rl-voices" data-rl-voices aria-label="Voice colours"></ul>
</section>
${staff}
<div class="rl-evidence">
<section aria-labelledby="rl-score-title"><span class="kicker">In the score</span><h2 id="rl-score-title">What changes on the page</h2><p class="rl-section-note">Choose a written change to hear up to three bars from each passage.</p>
  ${d.changes.length ? `<ol class="rl-changes">${d.changes.map((change, i) => `<li><button type="button" data-rl-change="${i}" disabled><span class="rl-change-bars num">${change.ia >= 0 ? `A · b. ${esc(d.pairs[change.ia].a.n)}` : 'A · no separate entry'}<br>${change.ib >= 0 ? `B · b. ${esc(d.pairs[change.ib].b.n)}` : 'B · no separate entry'}</span><span>${esc(change.text)}<small class="rl-hear">${playIcon} Hear the change</small></span></button></li>`).join('')}</ol>` : '<div class="rl-control"><b>The same notes, twice.</b><p>The repeat sign sends the orchestra back through the same notes and markings, so you can compare two performances of identical bars.</p></div>'}
  <aside class="rl-listen-for"><span class="sc">Listen for</span><p>${esc(c.listenFor)}</p></aside>
</section>
<section aria-labelledby="rl-performance-title"><span class="kicker">In the recording</span><h2 id="rl-performance-title">How the return sounds</h2><p class="rl-section-note">The score, the players, their instruments and the recording all contribute to the differences you hear.</p>
  <p class="rl-measured">${esc(measured)}</p>
  <figure class="rl-tempo"><div class="rl-chart-toolbar"><label>Measure <select data-rl-metric><option value="d">Seconds per bar</option><option value="lvl">Volume</option></select></label><span class="rl-chart-key"><i class="rl-key-a"></i> A <i class="rl-key-b"></i> B</span></div><div data-rl-tempo></div><figcaption data-rl-chart-caption>A higher point means a longer bar, including any pauses or added notes. Gold is A; dashed blue is B. The chart shows the bars selected above.</figcaption></figure>
  <details class="rl-method"><summary>How to read the charts</summary><p>Each bar is timed from its aligned start to the next bar. The final bar runs to the end of the recording, including the dying sound.</p><p>The volume chart averages the recording’s normalised amplitude samples, taken twice a second, within each bar. It shows changes within this recording.</p><p><b>Totals include matching bars only.</b> Columns with a hatched gap are left out.</p></details>
  <details class="rl-method rl-table-details"><summary>All bar measurements</summary><div class="rl-table-scroll" tabindex="0" role="region" aria-label="Bar measurements"><table><caption>Seconds and average amplitude; numbers in brackets identify repeats. A dash marks a bar with no counterpart.</caption><thead><tr><th scope="col">Column</th><th scope="col">A bar</th><th scope="col">A seconds</th><th scope="col">A amplitude</th><th scope="col">B bar</th><th scope="col">B seconds</th><th scope="col">B amplitude</th></tr></thead><tbody>${dataRows}</tbody></table></div></details>
  <section class="rl-sources" aria-labelledby="rl-sources-title"><h3 id="rl-sources-title">Sources &amp; timing</h3><ul>${sources(c)}</ul><details class="rl-method"><summary>How the score is timed</summary><p>${esc(d.method)}</p></details><p class="rl-provisional"><b>Automatic timings.</b> These await checking by ear. <a href="https://github.com/mottopanikeiku/contrapunctus/issues">Report a timing problem</a>.</p></section>
</section>
</div>
<nav class="rl-related" aria-label="Other comparisons"><a href="index.html">← All comparisons</a>${list.filter((entry) => entry.c.id !== c.id).map((entry) => `<a href="${attr(entry.c.id)}.html">${esc(entry.c.title)} →</a>`).join('')}</nav>
</div><script type="application/json" data-rl>${JSON.stringify(d).replace(/</g, '\\u003c')}</script>
</article>`;
    await out(`return-lab/${c.id}.html`, page(c.title, `${c.question} ${c.intro}`, body, track.era?.hero));
  }

  const backdrop = list.find((entry) => entry.track.composer.slug === 'satie')?.track ?? list[0]?.track;
  const body = `<article class="rl-page rl-index"><header class="rl-hero">${painting(backdrop)}<div class="wrap rl-heading">
  <p class="crumbs"><a href="../hall.html">The concert hall</a><span aria-hidden="true"> / </span>Listening studies</p>
  <span class="kicker">Score & performance</span><h1>The Return Lab</h1>
  <p class="rl-question">Hear a passage beside its return.</p><p class="rl-intro">A repeat, a new ending, a return in another key: play two passages from one recording and see their bars side by side.</p>
  <p class="rl-honesty"><span class="sc">About the timings</span> Bar times are aligned automatically and await checking by ear.</p>
</div></header>
<div class="wrap rl-content"><div class="rl-section-title"><span class="kicker">${list.length} listening studies</span><h2>Choose a comparison</h2></div>
<ol class="rl-studies">${list.map(({ c, track, comp, data: d }, i) => `<li><a class="rl-study" href="${attr(c.id)}.html"><div class="rl-study-top"><span class="rl-study-number">${String(i + 1).padStart(2, '0')}</span>${cameo(track)}<span class="sc">${esc(comp.family)}<small>${esc(c.kind)}</small></span></div><h3>${esc(c.title)}</h3><p>${esc(c.question)}</p><div class="rl-study-spans"><span>A <b class="num">${fmt(d.A.start)}–${fmt(d.A.end)}</b></span><span>B <b class="num">${fmt(d.B.start)}–${fmt(d.B.end)}</b></span></div><span class="rl-study-open">Compare ${d.A.bars} & ${d.B.bars} bars <span aria-hidden="true">→</span></span></a></li>`).join('')}</ol>
${staff}<section class="rl-reading-guide" aria-labelledby="rl-guide-title"><div><span class="kicker">On the page, in the performance</span><h2 id="rl-guide-title">See the change, hear the return</h2></div><div><h3>Read the score</h3><p>Find the changed notes, keys and instruments. In a literal repeat, the score stays the same.</p></div><div><h3>Hear the performance</h3><p>Compare the time each bar takes and how its volume changes. Pauses and added notes count towards a bar’s length.</p></div></section>
</div></article>`;
  await out('return-lab/index.html', page('The Return Lab', 'Hear a passage beside its return, with matching bars, score changes and timing charts from one recording.', body, backdrop?.era?.hero));
}
