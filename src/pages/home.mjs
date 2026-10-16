// Home: one promise, one featured listening, quiet doors to the rest.
import { page, icon } from '../shell.mjs';
import { esc, fmt, bySlug, scores, envelopes, streamOf, listenOrder, img, eras, composers } from '../lib.mjs';
import routes from '../../content/routes.mjs';

const FEATURED = 'satie-gymnopedie-1';
const VOICE = ['var(--v1)', 'var(--v2)', 'var(--v3)', 'var(--v4)', 'var(--v5)', 'var(--v6)', 'var(--v7)', 'var(--v8)'];

/** A static, real-data preview: the first ~40 s of the score aligned to the recording, or its level trace. */
function preview(id, dur) {
  const sc = scores.get(id);
  const W = 640, H = 360;
  if (sc) {
    const span = 40;
    const notes = sc.notes.filter((n) => n[0] < span);
    const lo = Math.min(...notes.map((n) => n[2])) - 2, hi = Math.max(...notes.map((n) => n[2])) + 2;
    const y = (m) => H - 24 - ((m - lo) / (hi - lo)) * (H - 48);
    const x = (t) => (t / span) * W;
    const bars = sc.bars.filter((b) => b.t < span);
    const rects = notes.map((n) => `<rect x="${x(n[0]).toFixed(1)}" y="${(y(n[2]) - 4).toFixed(1)}" width="${Math.max(3, x(n[1]) - 1).toFixed(1)}" height="8" rx="3" fill="${VOICE[n[3] % VOICE.length]}" opacity=".9"/>`).join('');
    const grid = bars.map((b) => `<line x1="${x(b.t).toFixed(1)}" x2="${x(b.t).toFixed(1)}" y1="14" y2="${H - 14}" stroke="var(--rule)"/><text x="${(x(b.t) + 3).toFixed(1)}" y="12" font-size="11" fill="var(--muted)" font-family="var(--ui)">${esc(b.n)}</text>`).join('');
    const chords = (sc.chords ?? []).filter((c) => c.t0 < span).map((c) => `<text x="${(x(c.t0) + 3).toFixed(1)}" y="${H - 2}" font-size="12" fill="var(--ink-2)" font-family="var(--ui)" font-weight="600">${esc(c.label)}</text>`).join('');
    const names = sc.voices.map((v, i) => `<tspan fill="${VOICE[i % VOICE.length]}">■</tspan> ${esc(v.name)}`).join('   ');
    return { svg: `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="The opening of the score drawn as notes over time: each bar is a note, height is pitch, length is duration.">${grid}${rects}${chords}</svg>`, caption: `The first ${span} seconds, drawn from the score and aligned to this recording: each bar is a note, height is pitch, length is how long it lasts. ${names ? '' : ''}Timing is aligned automatically and not yet checked by ear.` };
  }
  const env = envelopes.get(id)?.env ?? [];
  const pts = env.map((v, i) => `${((i / env.length) * W).toFixed(1)},${(H / 2 - v ** 1.5 * (H / 2 - 20)).toFixed(1)}`);
  const pts2 = env.map((v, i) => `${((i / env.length) * W).toFixed(1)},${(H / 2 + v ** 1.5 * (H / 2 - 20)).toFixed(1)}`).reverse();
  return { svg: `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Relative level of the recording over its whole length"><polygon points="${[...pts, ...pts2].join(' ')}" fill="var(--ink)" opacity=".7"/></svg>`, caption: `The whole recording, ${fmt(dur)}, as relative level over time.` };
}

export async function build(out) {
  const ctx = { base: '', page: 'index' };
  const order = listenOrder();
  const f = order.find((l) => l.id === FEATURED) ?? order[0];
  const c = bySlug.get(f.composer);
  const s = streamOf(f);
  const pv = preview(f.id, s.duration);
  const n = order.length;
  const main = `
<div class="wrap">
  <section class="home-hero" aria-labelledby="h-home">
    <div>
      <h1 id="h-home">Classical music. Hear what to listen for.</h1>
      <p class="promise">Real performances, with a short guide to what is happening as the music plays. No score-reading needed.</p>
      <div class="feature">
        <span class="label">Start here · ${esc(c.name)}, ${esc(f.year ?? '')}</span>
        <h2>${esc(f.work)}</h2>
        <p class="q">${esc(f.question ?? '')}</p>
        <div style="display:flex;gap:.75rem;flex-wrap:wrap">
          <button class="btn primary" type="button" data-play-id="${f.id}">${icon.play}<span>Play the complete piece · ${fmt(s.duration)}</span></button>
          <a class="btn quiet" href="listen/${f.id}.html">Open the guide</a>
        </div>
        <p class="credit">${esc(f.performers ?? '')} · Wikimedia Commons</p>
      </div>
    </div>
    <figure class="preview"><div class="board">${pv.svg}</div><figcaption>${pv.caption}</figcaption></figure>
  </section>
  <nav class="routes" aria-label="Listening routes"><span class="label">Or follow a route</span>${routes.slice(0, 3).map((r) => `<a href="listen/index.html#route-${r.id}">${esc(r.title)}</a>`).join('')}<a href="listen/index.html">All ${n} recordings</a></nav>
  <p class="scope">The recordings here are free to share, so they concentrate on music written between about 1700 and 1930; the reading covers ${composers.length} composers from Bach to the present.</p>
</div>

<section class="section" style="margin-top:2rem"><div class="wrap">
  <div class="doors">
    <a class="door" href="return-lab/index.html"><span class="label accent">The Return Lab</span><h3>The tune is back. Is it doing the same job?</h3><p>Hear a passage beside its return in the same recording, and see what the composer changed.</p></a>
    <a class="door" href="explore/index.html"><span class="label">Explore</span><h3>Composers, periods, lifelines</h3><p>${composers.length} composers in ${eras.length} periods, with the paintings, poems and documents that belong beside their music.</p></a>
    <a class="door" href="learn/index.html"><span class="label">Learn</span><h3>How the music works</h3><p>Counterpoint, sonata form, the Tristan chord, the twelve-tone row: each idea starts with something to hear.</p></a>
  </div>
</div></section>`;
  await out('index.html', page(ctx, { title: 'Contrapunctus — Classical music, and what to listen for', description: 'Real performances of classical music with a guide to what is happening as it plays, plus composers, periods, art and lessons from Bach to the present.', main, type: 'home', nav: '' }));
}
