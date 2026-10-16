// The Return Lab: a passage beside its return in the same recording.
// Score differences are authored from the score; performance differences are measured here, never attributed to intent.
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { page, icon } from '../shell.mjs';
import { ROOT, esc, attr, fmt, bySlug, listens, scores, envelopes, streamOf, searchIndex, warnings } from '../lib.mjs';

async function loadComparisons() {
  const dir = path.join(ROOT, 'content/returnlab');
  let files = [];
  try { files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort(); } catch { return []; }
  return Promise.all(files.map(async (f) => JSON.parse(await readFile(path.join(dir, f), 'utf8'))));
}

/** Resolve a comparison against its score alignment into pairs, timings, notes and changes. */
function resolve(cmp) {
  const l = listens.find((x) => x.id === cmp.track);
  const sc = scores.get(cmp.track);
  if (!l || !sc) { warnings.push(`return-lab/${cmp.id}: missing track or score`); return null; }
  const dur = streamOf(l).duration;
  const bi = (n, occ) => sc.bars.findIndex((b) => b.n === String(n) && b.occ === occ);
  const barT = (i) => sc.bars[i]?.t;
  const barEnd = (i) => sc.bars[i + 1]?.t ?? dur;
  let pairs;
  if (cmp.pairs?.length) {
    pairs = cmp.pairs.map(([an, ao, bn, bo]) => [an == null ? -1 : bi(an, ao), bn == null ? -1 : bi(bn, bo)]);
  } else {
    const a0 = bi(cmp.first.from.n, cmp.first.from.occ), a1 = bi(cmp.first.to.n, cmp.first.to.occ);
    const b0 = bi(cmp.second.from.n, cmp.second.from.occ), b1 = bi(cmp.second.to.n, cmp.second.to.occ);
    pairs = [];
    for (let k = 0; k <= Math.max(a1 - a0, b1 - b0); k++) pairs.push([a0 + k <= a1 ? a0 + k : -1, b0 + k <= b1 ? b0 + k : -1]);
  }
  if (pairs.some(([a, b]) => (a < -1 || b < -1) || (a === -1 && b === -1))) warnings.push(`return-lab/${cmp.id}: unresolved bar in pairs`);
  const env = envelopes.get(cmp.track)?.env ?? [];
  const level = (t0, t1) => {
    const i0 = Math.floor(t0 * 2), i1 = Math.max(i0 + 1, Math.ceil(t1 * 2));
    const seg = env.slice(i0, i1);
    return seg.length ? +(seg.reduce((s, v) => s + v, 0) / seg.length).toFixed(3) : null;
  };
  const side = (k) => {
    const idx = pairs.map((p) => p[k]);
    const notes = [];
    idx.forEach((b, pi) => {
      if (b < 0) return;
      const t0 = barT(b), d = barEnd(b) - t0;
      for (const n of sc.notes) if (n[4] === b) notes.push([+(pi + (n[0] - t0) / d).toFixed(4), +(n[1] / d).toFixed(4), n[2], n[3]]);
    });
    const present = idx.filter((b) => b >= 0);
    return { notes, start: barT(present[0]), end: barEnd(present.at(-1)) };
  };
  const pairData = pairs.map(([a, b]) => ({
    a: a < 0 ? null : { n: sc.bars[a].n, t: +barT(a).toFixed(3), d: +(barEnd(a) - barT(a)).toFixed(3), lvl: level(barT(a), barEnd(a)) },
    b: b < 0 ? null : { n: sc.bars[b].n, t: +barT(b).toFixed(3), d: +(barEnd(b) - barT(b)).toFixed(3), lvl: level(barT(b), barEnd(b)) },
  }));
  const pairIndex = (k, ref) => (ref ? pairs.findIndex((p) => p[k] >= 0 && sc.bars[p[k]].n === String(ref[0]) && sc.bars[p[k]].occ === ref[1]) : -1);
  const changes = (cmp.scoreChanges ?? []).map((c) => ({ ia: pairIndex(0, c.a), ib: pairIndex(1, c.b), text: c.text }));
  const A = side(0), B = side(1);
  const totA = pairData.reduce((s, p) => s + (p.a?.d ?? 0), 0), totB = pairData.reduce((s, p) => s + (p.b?.d ?? 0), 0);
  const both = pairData.filter((p) => p.a && p.b);
  const sharedA = both.reduce((s, p) => s + p.a.d, 0), sharedB = both.reduce((s, p) => s + p.b.d, 0);
  return { l, sc, dur, pairs: pairData, changes, A, B, totA, totB, sharedA, sharedB, shared: both.length };
}

export async function build(out) {
  const list = (await loadComparisons()).map((c) => ({ c, r: resolve(c) })).filter((x) => x.r);
  const ctx = { base: '../', page: 'return-lab' };
  for (const { c, r } of list) {
    const comp = bySlug.get(r.l.composer);
    const pct = r.shared ? Math.round((r.sharedB / r.sharedA - 1) * 100) : 0;
    const measured = r.shared ? `Across the ${r.shared} bars that correspond, the return takes ${r.sharedB.toFixed(1)} s against ${r.sharedA.toFixed(1)} s the first time: ${pct === 0 ? 'the same overall pace' : `${Math.abs(pct)}% ${pct > 0 ? 'longer' : 'shorter'}`}.` : '';
    const data = {
      id: c.id, track: r.l.id, duration: r.dur, voices: r.sc.voices.map((v) => v.name),
      A: { label: c.first.label, ...r.A }, B: { label: c.second.label, ...r.B },
      pairs: r.pairs, changes: r.changes,
    };
    const main = `
<div class="wrap">
  <header class="page-head">
    <p class="crumbs"><a href="index.html">The Return Lab</a> · <a href="../listen/${r.l.id}.html">${esc(comp.name)}, ${esc(r.l.work)}${r.l.movement ? `, ${esc(r.l.movement)}` : ''}</a></p>
    <span class="label accent">${esc(c.kind)} · provisional</span>
    <h1>${esc(c.title)}</h1>
    <p class="lede">${esc(c.question)}</p>
    <p class="ui" style="max-width:44rem;color:var(--ink-2);font-size:1.0625rem">${esc(c.intro)}</p>
  </header>

  <section class="rl-compare" aria-label="Comparison">
    <div class="rl-actions">
      <button class="btn primary" type="button" data-rl-play="A">${icon.play}<span>${esc(c.first.label)} · ${fmt(r.A.start)}–${fmt(r.A.end)}</span></button>
      <button class="btn primary" type="button" data-rl-play="B">${icon.play}<span>${esc(c.second.label)} · ${fmt(r.B.start)}–${fmt(r.B.end)}</span></button>
      <button class="btn quiet" type="button" data-rl-play="AB">Both, one after the other</button>
    </div>
    <div class="board rl-board"><canvas data-rl-canvas aria-hidden="true"></canvas>
      <div class="explain"><b>From the score · timing aligned to this recording.</b> Both passages are drawn on the same grid of bars, so a bar sits above the bar it corresponds to, whatever its speed. Notes are coloured by voice; shaded columns mark where the score differs. Timing was aligned automatically and has not yet been checked by ear.</div>
    </div>
    <p class="map-key" data-rl-voices></p>
  </section>

  <div class="below">
    <section aria-labelledby="h-score"><h2 id="h-score" style="font-size:1.75rem;margin-bottom:.4rem">What the score changes</h2>
      <p class="ui" style="color:var(--muted);font-size:1rem;margin:0 0 1rem">Written differences between the two passages, read from the score.</p>
      <ol class="transcript">${r.changes.map((ch, i) => `<li><button type="button" data-rl-change="${i}"><span class="tm num">${ch.ia >= 0 ? `b. ${esc(r.pairs[ch.ia].a?.n ?? '')}` : '—'}</span><span><span class="tx" style="margin:0">${esc(ch.text)}</span></span></button></li>`).join('')}</ol>
      <p class="ui" style="font-size:1rem;color:var(--ink-2);margin-top:1rem"><b>Listen for:</b> ${esc(c.listenFor ?? '')}</p>
    </section>
    <section aria-labelledby="h-perf"><h2 id="h-perf" style="font-size:1.75rem;margin-bottom:.4rem">What changes in this performance</h2>
      <p class="ui" style="color:var(--muted);font-size:1rem;margin:0 0 1rem">Measured from this recording. Different timing or level can come from the score, the performers, the instruments or the recording itself; these numbers do not say which.</p>
      <p style="font-size:1.125rem">${esc(measured)}</p>
      <figure class="object" style="margin-top:1rem"><div data-rl-tempo class="board" style="padding:.75rem"></div><figcaption>Seconds taken by each corresponding bar: the first time (ink) and the return (red). A higher point is a slower bar.</figcaption></figure>
      <h3 style="font-size:1.25rem;margin:2rem 0 .5rem">Sources and status</h3>
      <ul class="reading">${(c.sources ?? []).map((s) => `<li><a href="${attr(s.url)}">${esc(s.title)}</a></li>`).join('')}<li>Score alignment: ${esc(r.sc.method ?? '')}</li><li>Status: provisional. Timings come from automatic alignment and have not been checked by ear. <a href="https://github.com/mottopanikeiku/contrapunctus/issues">Report a problem</a>.</li></ul>
    </section>
  </div>
</div>
<script type="application/json" data-rl>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
    searchIndex.push({ type: 'Return Lab', title: c.title, sub: `${comp.name} · ${c.kind}`, url: `return-lab/${c.id}.html`, terms: `${c.question} ${c.intro} return repeat recapitulation` });
    await out(`return-lab/${c.id}.html`, page(ctx, { title: `${c.title} — The Return Lab · Contrapunctus`, description: `${c.question} ${c.intro}`, main, type: 'returnlab', nav: 'listen' }));
  }

  const main = `
<div class="wrap">
  <header class="page-head"><span class="label accent">The Return Lab</span><h1>The tune is back. Is it doing the same job?</h1>
  <p class="lede">Music keeps its listeners oriented by bringing things back. Here you can hear a passage beside its return in the same recording. On one side, what the score changes; on the other, what changes in the performance.</p>
  <p class="scope">Each comparison is drawn from the score aligned to a free recording. The alignment is automatic and provisional until someone checks it by ear. Differences in timing and level are measured, not interpreted.</p></header>
  <ul class="lesson-list">${list.map(({ c, r }) => `<li><a href="${c.id}.html"><span class="q">${esc(c.title)}</span><span class="t">${esc(bySlug.get(r.l.composer).name)} · ${esc(c.kind)} · ${esc(c.question)}</span></a></li>`).join('')}</ul>
</div>`;
  await out('return-lab/index.html', page(ctx, { title: 'The Return Lab — Contrapunctus', description: 'Hear a passage beside its return, with the score differences and the measured performance differences side by side.', main, type: 'page', nav: 'listen' }));
}
