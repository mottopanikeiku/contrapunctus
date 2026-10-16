// Listen: one page per recording, the recordings index with routes, and the data the player needs.
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { page, icon } from '../shell.mjs';
import {
  OUT, searchIndex, esc, attr, rich, strip, fmt, fold, bySlug, eraBySlug, eras, lifespan, thumb, dossiers, relations, scores, envelopes,
  listenOrder, streamOf, tuningOf, resolveCues, recordingLine, CUE_LANE, KIND_LABEL, BASIS_LABEL, warnings, art,
} from '../lib.mjs';
import { normalizeTitle } from '../../tools/commons.mjs';
import routes from '../../content/routes.mjs';

const STATUS_TEXT = {
  documented: 'Documented — stated in the cited source.',
  inferred: 'Inferred — estimated from the evidence; not explicitly documented.',
  disputed: 'Disputed — sources disagree; alternatives are shown below.',
  unknown: 'Unknown — not established from the sources consulted.',
  'not applicable': 'Not applicable — this field does not apply to this recording.',
};
const slug = (s) => fold(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);

function fieldValue(v) {
  if (v == null || v === '') return '';
  if (Array.isArray(v)) return v.map((x) => (typeof x === 'object' ? [x.name, x.role ? `(${x.role})` : ''].filter(Boolean).join(' ') : x)).map(esc).join('<br>');
  if (typeof v === 'object') return esc(Object.values(v).filter(Boolean).join(' · '));
  return esc(v);
}

function dossierField(d, label, f) {
  if (!f) return '';
  const srcs = (ids = []) => ids.map((id) => { const i = d.sources.findIndex((s) => s.id === id); return i < 0 ? '' : `<a class="src" href="#src-${d.id}-${id}">[${i + 1}]</a>`; }).join(' ');
  const value = fieldValue(f.value);
  const shown = value || (f.status === 'unknown' ? '—' : '');
  return `<dt>${label}</dt><dd>${shown} ${srcs(f.sourceIds)}<span class="st ${f.status === 'disputed' ? 'disputed' : ''}">${STATUS_TEXT[f.status] ?? ''}${f.note ? ` ${esc(f.note)}` : ''}</span>${(f.alternatives ?? []).map((a) => `<span class="alt">${fieldValue(a.value)} ${srcs(a.sourceIds)}</span>`).join('')}</dd>`;
}

function dossierHtml(l, s, url) {
  const d = dossiers.get(l.id);
  const today = new Date().toISOString().slice(0, 10);
  const c = bySlug.get(l.composer);
  const cite = `${c.name}, <i>${esc(l.work)}</i>${l.movement ? `, ${esc(l.movement)}` : ''}. ${esc(recordingLine(l))}. Audio: Wikimedia Commons, <a href="${attr(s.page)}">${esc(decodeURIComponent(s.page.split('/').pop()).replace(/_/g, ' '))}</a>. Listening notes: Contrapunctus${d?.editorial?.revised ? `, revised ${d.editorial.revised}` : ''}, <a href="${attr(url)}">${esc(url)}</a> (accessed ${today}).`;
  if (!d) {
    return `<div class="dossier"><dl><dt>Performers</dt><dd>${esc(l.performers || '—')}</dd><dt>Licence</dt><dd>${esc(l.license ?? s.license)}</dd><dt>Source</dt><dd><a href="${attr(s.page)}">Wikimedia Commons file page</a></dd></dl><div class="cite" id="cite"><b>How to cite</b>${cite}</div></div>`;
  }
  return `<div class="dossier"><dl>
${dossierField(d, 'Work version', d.work?.version)}
${dossierField(d, 'Performers', d.performers)}
${dossierField(d, 'Recorded', d.session?.date)}
${dossierField(d, 'Place', d.session?.place)}
${dossierField(d, 'Label', d.carrier?.label)}
${dossierField(d, 'Catalogue', d.carrier?.catalogue)}
${dossierField(d, 'Matrix · take · sides', d.carrier?.matrixTakeSides)}
${dossierField(d, 'Transfer', d.transfer?.credits)}
${dossierField(d, 'Transfer date', d.transfer?.date)}
${dossierField(d, 'Processing', d.transfer?.processing)}
${dossierField(d, 'Composition rights', d.rights?.composition)}
${dossierField(d, 'Recording rights', d.rights?.recording)}
<dt>Credit</dt><dd>${esc(d.rights?.creditLine ?? '')}${d.rights?.licenseUrl ? ` · <a href="${attr(d.rights.licenseUrl)}">licence</a>` : ''}</dd>
</dl>
<ol class="sources">${(d.sources ?? []).map((x) => `<li id="src-${d.id}-${x.id}"><a href="${attr(x.url)}">${esc(x.title ?? x.url)}</a>${x.locator ? ` — ${esc(x.locator)}` : ''} <span class="ui" style="color:var(--muted);font-size:.85em">accessed ${esc(x.accessed)}</span></li>`).join('')}</ol>
<div class="cite" id="cite"><b>How to cite</b>${cite}</div></div>`;
}

export async function build(out) {
  const order = listenOrder();
  const ctxRoot = { base: '', page: 'listen' };
  const catalogue = [];
  for (const [i, l] of order.entries()) {
    const c = bySlug.get(l.composer);
    const e = eraBySlug.get(c.era);
    const s = streamOf(l);
    catalogue.push({ id: l.id, url: `listen/${l.id}.html`, composer: c.name, slug: c.slug, work: l.work, movement: l.movement ?? '', duration: s.duration, stream: s.stream, era: e?.name ?? '', eraColour: e?.accent ?? '#888', year: l.year ?? '', tuning: tuningOf(l).hz });
  }
  await mkdir(path.join(OUT, 'assets/data'), { recursive: true });
  await writeFile(path.join(OUT, 'assets/data/catalogue.json'), JSON.stringify(catalogue));

  for (const [i, l] of order.entries()) {
    const ctx = { base: '../', page: `listen/${l.id}` };
    const c = bySlug.get(l.composer);
    const e = eraBySlug.get(c.era);
    const s = streamOf(l);
    const env = envelopes.get(l.id);
    const rel = relations.get(l.id)?.relations ?? [];
    const sc = scores.get(l.id);
    const tuning = tuningOf(l);
    const cues = resolveCues(l).map((q) => ({ id: slug(q.title), t: q.t, kind: q.kind, lane: CUE_LANE[q.kind] ?? 'music', title: q.title, text: rich(ctx, q.text), basis: q.basis ?? 'general', precision: q.precision ?? (CUE_LANE[q.kind] === 'music' ? 'passage' : null), evidence: q.evidence ?? '' }));
    const music = cues.filter((q) => q.lane === 'music');
    const context = cues.filter((q) => q.lane === 'context');
    const url = `https://mottopanikeiku.github.io/contrapunctus/listen/${l.id}.html`;
    const prev = order[i - 1], next = order[i + 1];
    const data = {
      id: l.id, url: `listen/${l.id}.html`, composer: c.name, work: l.work, movement: l.movement ?? '', duration: s.duration, stream: s.stream,
      tuning, env: env?.env ?? [], sections: l.sections ?? [], relations: rel, cues, hasScore: !!sc, next: next?.id ?? null, prev: prev?.id ?? null,
    };
    const lenses = [sc ? ['score', 'Score'] : null, ['map', 'Map'], ['sound', 'Sound']].filter(Boolean);
    const first = music[0] ?? cues[0];
    const firstCtx = context[0];
    const movement = l.movement ? `<span class="mvt">${esc(l.movement)}</span>` : '';
    const portrait = art[normalizeTitle(c.portrait.file)];
    const arrangement = /arr\.|arrang|transcri|band/i.test(`${l.forces} ${l.work}`) ? ' · arrangement' : '';
    const main = `
<div class="wrap">
  <header class="listen-head">
    <div>
      <p class="crumbs"><a href="../listen/index.html">Listen</a> · ${e ? `<a href="../periods/${e.slug}.html">${esc(e.name)}</a>` : ''}</p>
      <p class="who"><a href="../composers/${c.slug}.html">${esc(c.name)}</a> <span class="dates">${lifespan(c)}</span></p>
      <h1>${esc(l.work)}${movement}</h1>
      <p class="rec">${esc([l.year, l.key, l.forces].filter(Boolean).join(' · '))}${arrangement}<br>${esc(recordingLine(l))} · <a href="#about-recording">About this recording</a>${tuning.hz !== 440 ? ` · pitch A ≈ ${tuning.hz} Hz${tuning.status === 'inferred' ? ' (inferred)' : ''}` : ''}</p>
      ${l.question ? `<p class="question">${esc(l.question)}</p>` : ''}
    </div>
    <div class="listen-start"><button class="btn primary" type="button" data-play-page>${icon.play}<span>Play · ${fmt(s.duration)}</span></button></div>
  </header>

  <div class="lenses" role="tablist" aria-label="View">
    ${lenses.map(([k, t], j) => `<button role="tab" id="lens-${k}" aria-controls="board" aria-selected="${j === 0}" tabindex="${j === 0 ? 0 : -1}" data-lens="${k}">${t}</button>`).join('')}
    <span class="basis" data-lens-basis></span>
  </div>

  <div class="stage">
    <div>
      <div class="board" id="board" role="tabpanel" data-board>
        <div class="placeholder">Loading the graphic…</div>
      </div>
      <div class="map" data-map-strip></div>
      <div class="map-key" data-map-key></div>
    </div>
    <aside class="note-col" aria-label="Listening notes">
      <article class="cue" data-cue data-kind="${first?.kind ?? ''}">
        <span class="kind"><span data-cue-kind>${esc(KIND_LABEL[first?.kind] ?? '')}</span> <span class="when num" data-cue-when>${first ? fmt(first.t) : ''}</span></span>
        <h2 data-cue-title>${esc(first?.title ?? l.work)}</h2>
        <p data-cue-text>${first?.text ?? esc(l.intro)}</p>
      </article>
      <div class="cue-tools">
        <button class="btn small quiet" type="button" data-cue-prev>Previous note</button>
        <button class="btn small quiet" type="button" data-cue-replay>Replay this moment</button>
        <button class="btn small quiet" type="button" data-cue-hold aria-pressed="false">Hold this note</button>
        <button class="btn small quiet" type="button" data-cue-next>Next note</button>
      </div>
      <details class="how"><summary>How we know</summary><p data-cue-how>${first ? `<span class="basis-tag">${esc(BASIS_LABEL[first.basis] ?? '')}.</span> ${esc(first.evidence)}` : ''}</p></details>
      ${context.length ? `<div class="context"><span class="label">Around the music</span><details data-context><summary data-context-title>${esc(firstCtx.title)}</summary><p data-context-text>${firstCtx.text}</p></details></div>` : ''}
      <div class="share"><button class="btn small quiet" type="button" data-share>Share this moment</button></div>
    </aside>
  </div>

  <div class="below">
    <section aria-labelledby="h-notes">
      <h2 id="h-notes" style="font-size:1.75rem;margin-bottom:.4rem">Listening notes</h2>
      <p class="ui" style="color:var(--muted);font-size:1rem;margin:0 0 1rem">${esc(l.intro ?? '')} Select a note to hear its moment.</p>
      <ol class="transcript" data-transcript>
${cues.map((q) => `<li class="${q.lane === 'context' ? 'ctx' : ''}" data-t="${q.t}"><button type="button" data-seek-to="${q.t}"><span class="tm num">${fmt(q.t)}</span><span><span class="k">${esc(KIND_LABEL[q.kind] ?? q.kind)}</span><span class="tt">${esc(q.title)}</span><span class="tx">${q.text}</span></span></button></li>`).join('\n')}
      </ol>
    </section>
    <section aria-labelledby="about-recording">
      <h2 id="about-recording" style="font-size:1.75rem;margin-bottom:1rem">About this recording</h2>
      ${dossierHtml(l, s, url)}
      <div class="composer-card">${portrait ? thumb(ctx, c) : '<span></span>'}<div><h3>${esc(c.name)}</h3><p>${esc(c.epithet)}</p><a class="link-arrow" href="../composers/${c.slug}.html">Life, works and sources</a></div></div>
      <nav class="pager" aria-label="Neighbouring recordings">${prev ? `<a href="${prev.id}.html"><span class="label">Previous</span><span class="nm">${esc(bySlug.get(prev.composer).name)}</span></a>` : '<span></span>'}${next ? `<a href="${next.id}.html"><span class="label">Next</span><span class="nm">${esc(bySlug.get(next.composer).name)}</span></a>` : ''}</nav>
    </section>
  </div>
</div>
<script type="application/json" data-track>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
    searchIndex.push({ type: 'Recording', title: `${l.work}${l.movement ? ` · ${l.movement}` : ''}`, sub: `${c.name} · ${fmt(s.duration)}`, url: `listen/${l.id}.html`, audio: true, terms: [c.name, l.work, l.movement, l.key, l.forces, ...cues.filter((q) => q.lane === 'music').map((q) => q.title)].filter(Boolean).join(' ') });
    await out(`listen/${l.id}.html`, page(ctx, {
      title: `${c.name}: ${l.work}${l.movement ? `, ${l.movement}` : ''} — Listen · Contrapunctus`,
      description: l.question ? `${l.question} ${strip(l.intro ?? '')}` : strip(l.intro ?? ''),
      main, type: 'listen', nav: 'listen', ogImage: portrait?.src,
    }));
  }

  // ---- index: all recordings, routes, by period
  const byEra = eras.map((e) => ({ e, list: order.filter((l) => bySlug.get(l.composer).era === e.slug) })).filter((x) => x.list.length);
  const trackLink = (l, why) => {
    const c = bySlug.get(l.composer);
    return `<li><a href="${l.id}.html"><span class="c">${esc(c.name)}</span><span class="w"><i>${esc(l.work)}</i>${l.movement ? ` · ${esc(l.movement)}` : ''}</span>${why ? `<span class="tags">${esc(why)}</span>` : ''}<span class="d num">${fmt(streamOf(l).duration)}</span></a></li>`;
  };
  const byId = new Map(order.map((l) => [l.id, l]));
  const main = `
<div class="wrap">
  <header class="page-head"><span class="label accent">Listen</span><h1>Choose a piece</h1>
  <p class="lede">${order.length} real performances, each with a guide that explains what is happening as it plays. Press play on any of them; when one ends, the next in chronological order follows unless you turn that off.</p>
  <p class="scope">Free recordings concentrate on music written between about 1700 and 1930, because later music is still in copyright. Composers after 1945 are in <a href="../composers/index.html">Explore</a>.</p></header>
  <section class="section" id="routes"><div class="section-head"><h2>Listening routes</h2><p>Short sequences around one question you can hear.</p></div>
    <div class="catalogue">${routes.map((r) => `<section id="route-${r.id}"><h3>${esc(r.title)}</h3><p class="ui" style="color:var(--ink-2);font-size:1rem;margin:.5rem 0">${esc(r.intro)}</p><ul class="track-list">${r.tracks.filter((t) => byId.has(t.id)).map((t) => trackLink(byId.get(t.id), t.why)).join('')}</ul></section>`).join('')}</div>
  </section>
  <section class="section"><div class="section-head"><h2>Every recording, by period</h2></div>
    <div class="catalogue">${byEra.map(({ e, list }) => `<section><h3><span class="era-dot" style="background:${e.accent}"></span>${esc(e.name)} <span style="font-weight:500;text-transform:none;letter-spacing:0">${esc(e.span)}</span></h3><ul class="track-list">${list.map((l) => trackLink(l)).join('')}</ul></section>`).join('')}</div>
  </section>
</div>`;
  await out('listen/index.html', page(ctxRoot.base === '' ? { base: '../', page: 'listen/index' } : ctxRoot, { title: 'Listen — Contrapunctus', description: 'Real performances of classical music, each with a guide to what is happening as it plays.', main, type: 'catalogue', nav: 'listen' }));
  return order;
}
