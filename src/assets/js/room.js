// The Concert Hall: continuous concert, the score and the orchestra as they sound, notes and joins timed to the recording.
// Mounted by app.js when body.room is present; the audio itself lives in player.js so it survives navigation.
const SHARP = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
const FLAT = ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B'];
const MIXED = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
/** Pitch names spelled for the piece's key: flats in flat keys, sharps in sharp keys. */
function spelling(key = '') {
  const m = /^([A-G])([♭♯b#]?)\s*(major|minor)?/i.exec(key.trim());
  if (!m) return MIXED;
  const pc = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[m[1].toUpperCase()] + (/[♭b]/.test(m[2]) ? -1 : /[♯#]/.test(m[2]) ? 1 : 0);
  const major = /minor/i.test(m[3] ?? '') ? (pc + 3) % 12 : (pc + 12) % 12;   // relative major
  const fifths = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5].indexOf(major);         // 0 = C, 1 = G … 11 = F
  if (fifths === 0) return MIXED;
  if (fifths >= 1 && fifths <= 5) return SHARP;
  if (fifths === 6) return /[♭b]/.test(m[2]) || /^(E♭|Eb)/.test(key) ? FLAT : SHARP;
  return FLAT;
}
let NAMES = MIXED;
const FIFTHS = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];
const KIND = { music: 'Music', form: 'Form', listen: 'Recording', life: 'Life', world: 'History' };
const GOLDS = ['#e9cf8c', '#9fc3c6', '#e08c7a', '#b7a6d8', '#c9d58a', '#e6a96b', '#8fb3e0', '#d79bb6', '#a8d4b0', '#f0dfa8', '#c7a0e0', '#e4b38a'];
const VIEW_LABEL = { score: 'Score', notes: 'Notes', orchestra: 'Orchestra', form: 'Form', sound: 'Sound' };

export async function mount(app) {
  const { player, fmt } = app;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cleanups = [];
  const on = (t, ev, f, o) => { t.addEventListener(ev, f, o); cleanups.push(() => t.removeEventListener(ev, f, o)); };
  const text = (el, value) => { if (el.textContent !== value) el.textContent = value; };
  const html = (el, value) => { if (el._html !== value) { el._html = value; el.innerHTML = value; } };
  let alive = true;

  const P = await player.getProgramme();
  if (!document.body.classList.contains('room')) return;
  let track = null, env = null, score = null, A4 = 440;
  let cueIdx = -2, sectionIdx = -1, joinIdx = -2, view = 'sound', viewObj = null;

  const ui = {
    backdrop: $$('.backdrop img'), eraNum: $('.era-num'), eraName: $('.era-name'), given: $('.now-composer .given'), family: $('.now-composer .family'),
    work: $('.now-work .work'), movement: $('.now-work .movement'), meta: $('.now-meta'),
    cue: $('.cue-now'), kind: $('.cue-kind'), cueTitle: $('.cue-title'), cueText: $('.cue-text'), cueHow: $('.cue-how p'), cueNext: $('.cue-next'), past: $('.cue-past'),
    join: $('.join-card'), tabJoins: $('.tab-joins'), tabComposer: $('.tab-composer'), tabPiece: $('.tab-piece'),
    play: $('.t-play'), cur: $('.t-cur'), dur: $('.t-dur'), timeline: $('.timeline'), tlCanvas: $('.tl-canvas'), tlSections: $('.tl-sections'), tlJoins: $('.tl-joins'), head: $('.tl-head'),
    progBtn: $('.t-prog'), prog: $('.programme'), curtain: $('.curtain'), interlude: $('.interlude'),
    cameo: $('.oval-r img'), cameoCap: $('.cameo-r figcaption'), chord: $('.chord'), chordCap: $('.chord-cap'), bass: $('.ro-bass'), top: $('.ro-top'), readouts: $('.readouts'),
    nsLabel: $('.ns-label'), nsNote: $('.ns-note'), nsNext: $('.ns-next'), axis: $('.spectro-axis'), spectro: $('.spectro'), wheel: $('.wheel'),
    frame: $('.spectro-frame'), layer: $('.view-layer'), views: $('.views'), label: $('.spectro-label'),
  };
  let backdropFront = 0;
  let showVersion = 0;

  // ================================================================= track display
  // Per-piece detail (notes, joins, dossier, biography) is fetched when the piece is shown, then kept.
  const detail = (t) => (t._detail ??= fetch(new URL(`assets/hall/${t.id}.json?v=${document.documentElement.dataset.prog ?? ''}`, app.root)).then((r) => r.json()).then((d) => {
    const { composer, ...rest } = d;
    Object.assign(t, rest);
    Object.assign(t.composer, composer);
    return t;
  }));

  async function show(t) {
    const version = ++showVersion;
    await detail(t);
    if (!alive || version !== showVersion || player.track !== t) return;
    track = t;
    cueIdx = -2; sectionIdx = -1; joinIdx = -2; env = null; score = null;
    A4 = t.tuning || 440;
    NAMES = spelling(t.key);
    const c = t.composer;
    document.body.style.setProperty('--accent', t.era?.accent ?? '#c9a65a');
    history.replaceState(history.state, '', `#${t.id}`);
    document.title = `${c.name} — ${t.work} · The Concert Hall`;
    if (t.era?.hero) {
      const front = ui.backdrop[backdropFront];
      const src = new URL(t.era.hero, app.root).href;
      if (front.src !== src) {
        const back = ui.backdrop[1 - backdropFront];
        back.src = src;
        back.onload = () => { back.classList.add('on'); front.classList.remove('on'); backdropFront = 1 - backdropFront; };
      }
    }
    ui.eraNum.textContent = t.era?.numeral ?? '';
    ui.eraName.textContent = t.era ? `${t.era.name} · ${t.era.span}` : '';
    ui.given.textContent = c.given ?? '';
    ui.family.textContent = c.family ?? c.name;
    ui.work.textContent = t.work;
    ui.movement.textContent = t.set ? `${t.movement} (${roman(t.set.part)} of ${roman(t.set.of)})` : t.movement;
    ui.meta.textContent = [t.year, t.key, t.forces, t.performers, A4 !== 440 ? `pitch A ≈ ${A4} Hz${t.tuningStatus === 'inferred' ? ' (inferred)' : ''}` : ''].filter(Boolean).join(' · ');
    ui.cameo.src = c.portrait ? new URL(c.portrait, app.root).href : '';
    ui.cameo.style.objectPosition = c.focus;
    ui.cameo.alt = c.name;
    ui.cameoCap.textContent = c.dates;
    ui.tabComposer.innerHTML = ''; ui.tabPiece.innerHTML = '';
    if (!ui.tabComposer.hidden) renderComposerTab();
    if (!ui.tabPiece.hidden) renderPieceTab();
    renderJoinsTab();
    ui.past.innerHTML = '';
    ui.join.hidden = true;
    renderSections(); renderJoinMarkers();
    $$('.programme li button').forEach((b) => b.classList.toggle('on', b.dataset.id === t.id));
    ui.dur.textContent = fmt(t.duration);
    fetch(new URL(`assets/listen/${t.id}.json`, app.root)).then((r) => (r.ok ? r.json() : null)).then((j) => { if (track === t) { env = j; drawTimeline(); } }).catch(() => {});
    if (t.hasScore) score = await loadScore(t);
    if (!alive || version !== showVersion || track !== t) return;
    // views available for this recording
    const views = [];
    if (t.hasSheet) views.push('score');
    if (score) views.push('notes');
    if ((score && score.voices.length >= 6) || t.orchestra?.ensemble?.length) views.push('orchestra');
    views.push('sound');
    if (t.sections.length >= 2) views.push('form');
    ui.views.innerHTML = views.length > 1 ? views.map((v) => `<button role="tab" data-view="${v}">${VIEW_LABEL[v]}</button>`).join('') : '';
    ui.views.hidden = views.length < 2;
    setView(views[0]);
    showCue(cueAt(player.time));
    tick(true);
    wheelDirty = true; wake();
  }

  // ================================================================= views
  function setView(v) {
    view = v;
    $$('button', ui.views).forEach((b) => b.setAttribute('aria-selected', String(b.dataset.view === v)));
    viewObj?.destroy?.(); viewObj = null;
    ui.layer.innerHTML = '';
    ui.layer.hidden = v === 'sound';
    ui.frame.classList.toggle('paper', v === 'score');
    ui.frame.classList.toggle('scored', v !== 'sound');
    ui.frame.dataset.view = v;
    ui.label.textContent = v === 'sound' ? 'Pitch over time · each band is an octave of C' : '';
    // Without an aligned score the wheel shows what sounds, and its centre names the piece's key: a live chord guess misleads.
    ui.chordCap.textContent = track.monophonic ? 'single melodic line' : score ? 'from the score' : 'key of the piece';
    if (!score) ui.chord.textContent = (track.key ?? '').split(/[(;,]/)[0].replace(/ in the .*/, '').trim() || '—';
    ui.readouts.hidden = !score;
    if (v === 'score') viewObj = sheetView();
    else if (v === 'notes') viewObj = rollView();
    else if (v === 'orchestra') viewObj = orchestraView();
    else if (v === 'form') viewObj = formView();
    if (v === 'sound') requestAnimationFrame(() => { setupSpectro(); setupKeys(); });
    wake();
  }
  const widen = $('.widen'), wideCue = $('.wide-cue');
  const setWide = (on) => {
    document.body.classList.toggle('wide', on);
    widen.setAttribute('aria-pressed', String(on));
    widen.textContent = on ? '⤡' : '⤢';
    requestAnimationFrame(() => { if (view === 'sound') { setupSpectro(); setupKeys(); } else if (view === 'form') setView('form'); });
  };
  on(widen, 'click', () => setWide(!document.body.classList.contains('wide')));
  cleanups.push(() => document.body.classList.remove('wide'));
  on(ui.views, 'click', (e) => { const b = e.target.closest('[data-view]'); if (b) setView(b.dataset.view); });

  // Notes sorted by onset, with the longest duration, so the sounding set is found by binary search.
  const scores = new Map();
  function loadScore(t) {
    if (!scores.has(t.id)) scores.set(t.id, fetch(new URL(`assets/data/${t.id}/score.json`, app.root)).then((r) => r.json()).then((sc) => {
      sc.notes.sort((a, b) => a[0] - b[0]);
      sc.onsets = Float64Array.from(sc.notes, (n) => n[0]);
      sc.maxDur = sc.notes.reduce((m, n) => Math.max(m, n[1]), 0);
      // Where the score stops: some recordings carry more music after it (a second piece on the same side).
      sc.end = sc.notes.reduce((m, n) => Math.max(m, n[0] + n[1]), 0);
      sc.lo = Math.min(...sc.notes.map((n) => n[2])); sc.hi = Math.max(...sc.notes.map((n) => n[2]));
      return sc;
    }).catch(() => null));
    return scores.get(t.id);
  }
  const firstOnset = (x) => { const a = score.onsets; let lo = 0, hi = a.length; while (lo < hi) { const m = (lo + hi) >> 1; if (a[m] < x) lo = m + 1; else hi = m; } return lo; };
  /** Notes overlapping [t0, t1]. */
  function notesIn(t0, t1, out = []) {
    out.length = 0;
    for (let i = firstOnset(t0 - score.maxDur); i < score.notes.length; i++) {
      const n = score.notes[i];
      if (n[0] > t1) break;
      if (n[0] + n[1] >= t0) out.push(n);
    }
    return out;
  }

  /** Score bar at time t: { i, bar, frac } */
  function barAt(t) {
    const bars = score.bars; let lo = 0, hi = bars.length;
    while (lo < hi) { const m = (lo + hi) >> 1; if (bars[m].t <= t + 0.02) lo = m + 1; else hi = m; }
    const i = Math.max(0, lo - 1);
    const nxt = bars[i + 1];
    return { i, bar: bars[i], frac: nxt ? Math.max(0, Math.min(1, (t - bars[i].t) / (nxt.t - bars[i].t))) : 1 };
  }
  const soundingNotes = [];
  function sounding(t) {
    soundingNotes.length = 0;
    if (score) for (let i = firstOnset(t - score.maxDur); i < score.notes.length; i++) {
      const n = score.notes[i];
      if (n[0] > t) break;
      if (n[0] + n[1] > t) soundingNotes.push(n);
    }
    return soundingNotes;
  }

  // ---- engraved sheet music: pages load as they approach view; bar boxes come precomputed in index.json
  // (tools/sheetpack), so following the music never reads layout from the SVG.
  function sheetView() {
    const base = new URL(`assets/data/${track.id}/sheet/`, app.root);
    const wrap = document.createElement('div');
    wrap.className = 'sheet';
    wrap.innerHTML = '<p class="sheet-wait">Loading the score…</p>';
    const cap = document.createElement('p');
    cap.className = 'sheet-cap';
    // Licensed encodings (CC BY / BY-SA) need their credit and licence beside the engraving that adapts them.
    const src = track.scoreSource ?? {};
    const licensed = src.license && !/public domain|cc0/i.test(src.license);
    const licence = src.licenseUrl ? `<a href="${escapeHtml(src.licenseUrl)}" target="_blank" rel="noopener">${escapeHtml(src.license)}</a>` : escapeHtml(src.license ?? '');
    const credit = licensed ? ` Encoding: ${src.url ? `<a href="${escapeHtml(src.url)}" target="_blank" rel="noopener">${escapeHtml(src.encoder || 'source')}</a>` : escapeHtml(src.encoder ?? '')}, ${licence}; engraved and aligned by Contrapunctus under the same terms.${src.attribution ? ` <span class="sheet-attrib">${escapeHtml(src.attribution)}</span>` : ''}` : '';
    cap.innerHTML = `The written score${src.title ? `: ${src.title}` : ''}${src.edition ? `, ${src.edition}` : ''}, engraved with LilyPond. The gold bar follows the recording by automatic alignment (not yet checked by ear). Select a bar to play from it.${credit}`;
    ui.layer.append(wrap, cap);
    const t0 = track;
    let pack = null, pages = [], current = null, lit = [], userScroll = 0, barLen = 0.25, io = null, destroyed = false;
    const hl = document.createElement('div');
    hl.className = 'sheet-hl';
    const heads = new Map();   // bar n → [{ el, pos }] for loaded pages

    async function loadPage(P) {
      if (P.state) return;
      P.state = 'loading';
      const txt = await fetch(new URL(P.src, base)).then((r) => r.text());
      if (!alive || destroyed || track !== t0) return;
      P.el.insertAdjacentHTML('afterbegin', txt);
      P.state = 'ready';
      let maxPos = 0;
      for (const el of P.el.querySelectorAll('[data-bar]')) {
        const n = el.getAttribute('data-bar'), pos = Number(el.getAttribute('data-pos')) || 0;
        maxPos = Math.max(maxPos, pos);
        if (!heads.has(n)) heads.set(n, []);
        heads.get(n).push({ el, pos });
      }
      barLen = Math.max(barLen, [0.5, 0.75, 1, 1.5, 2, 3].find((m) => m > maxPos + 1e-6) ?? maxPos + 0.25);
      current = null;
    }

    fetch(new URL('index.json', base)).then((r) => r.json()).then((j) => {
      if (!alive || destroyed || track !== t0 || view !== 'score') return;
      pack = j;
      wrap.innerHTML = '';
      pages = j.pages.map((p, i) => {
        const el = document.createElement('div');
        el.className = 'sheet-page';
        el.style.aspectRatio = `${p.w} / ${p.h}`;
        el.dataset.i = i;
        wrap.append(el);
        return { ...p, el, state: null, i };
      });
      io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) loadPage(pages[+e.target.dataset.i]); }), { root: wrap, rootMargin: '120% 0px' });
      pages.forEach((P) => io.observe(P.el));
      tick(true);
    });

    const onScroll = () => { if (!wrap._auto) userScroll = performance.now(); wrap._auto = false; };
    wrap.addEventListener('scroll', onScroll, { passive: true });
    wrap.addEventListener('click', (e) => {
      if (!pack) return;
      const pageEl = e.target.closest('.sheet-page'); if (!pageEl) return;
      const P = pages[+pageEl.dataset.i], r = pageEl.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * P.w, y = ((e.clientY - r.top) / r.height) * P.h;
      let hit = null;
      for (const [n, boxes] of Object.entries(pack.bars)) for (const [pi, bx, by, bw, bh] of boxes) if (pi === P.i && x >= bx && x <= bx + bw && y >= by && y <= by + bh) hit = n;
      if (hit == null) return;
      const cands = score.bars.filter((b) => b.n === hit);
      if (!cands.length) return;
      const t = player.time;
      seek(cands.reduce((a, c) => (Math.abs(c.t - t) < Math.abs(a.t - t) ? c : a)).t);
      userScroll = 0;
    });

    return {
      draw(t) {
        if (!pack || !score) return;
        // Past the end of the written score the highlight goes out rather than holding the last bar.
        const past = t > score.end + 1;
        const { bar, frac } = barAt(t);
        const shown = past ? null : bar.n;
        if (current !== shown) {
          current = shown;
          const box = past ? null : pack.bars[bar.n]?.[0];
          if (box) {
            const [pi, x, y, w, h] = box, P = pages[pi];
            if (!P.state) loadPage(P);
            if (hl.parentNode !== P.el) P.el.append(hl);
            Object.assign(hl.style, { left: `${(x / P.w) * 100}%`, top: `${(y / P.h) * 100}%`, width: `${(w / P.w) * 100}%`, height: `${(h / P.h) * 100}%`, display: '' });
            if (performance.now() - userScroll > 3500) {
              const top = P.el.offsetTop + (y / P.h) * P.el.offsetHeight, bottom = top + (h / P.h) * P.el.offsetHeight;
              if (top < wrap.scrollTop + 24 || bottom > wrap.scrollTop + wrap.clientHeight - 24) { wrap._auto = true; wrap.scrollTo({ top: Math.max(0, top - Math.max(10, Math.min(wrap.clientHeight * 0.28, (wrap.clientHeight - (bottom - top)) / 2))), behavior: reduced ? 'auto' : 'smooth' }); }
            }
          } else hl.style.display = 'none';
        }
        const next = past ? [] : (heads.get(bar.n) ?? []).filter((x) => x.pos / barLen <= frac + 0.02).map((x) => x.el);
        if (next.length !== lit.length || next.some((el, i) => el !== lit[i])) {
          for (const el of lit) if (!next.includes(el)) el.classList.remove('lit');
          for (const el of next) if (!lit.includes(el)) el.classList.add('lit');
          lit = next;
        }
      },
      destroy() { destroyed = true; io?.disconnect(); },
    };
  }

  // ---- gold note-roll (Malinowski-style), from the aligned score
  function rollView() {
    const cv = document.createElement('canvas');
    cv.className = 'roll';
    const legend = document.createElement('div');
    legend.className = 'voice-legend';
    legend.innerHTML = score.voices.map((v, i) => `<button type="button" data-v="${i}" aria-pressed="true"><i style="background:${GOLDS[i % GOLDS.length]}"></i>${v.name}</button>`).join('');
    ui.layer.append(cv, legend);
    const muted = new Set();
    legend.addEventListener('click', (e) => {
      const b = e.target.closest('[data-v]'); if (!b) return;
      const i = +b.dataset.v;
      const solo = muted.size === score.voices.length - 1 && !muted.has(i);
      muted.clear(); if (!solo) score.voices.forEach((_, k) => { if (k !== i) muted.add(k); });
      $$('[data-v]', legend).forEach((x) => x.setAttribute('aria-pressed', String(!muted.has(+x.dataset.v))));
    });
    const g = cv.getContext('2d');
    const lo = score.lo - 2, hi = score.hi + 2;
    const visibleNotes = [];
    let W = 0, H = 0;
    const fit = () => { const dpr = Math.min(2, devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0); };
    fit(); const ro = new ResizeObserver(fit); ro.observe(cv);
    return {
      draw(t) {
        if (!W) return;
        const span = W < 600 ? 9 : 14, t0 = t - span * 0.32, t1 = t0 + span;
        const X = (s) => ((s - t0) / span) * W;
        const top = 26, bottom = H - 14;
        const Y = (m) => bottom - ((m - lo) / (hi - lo)) * (bottom - top);
        const nh = Math.max(5, Math.min(12, ((bottom - top) / (hi - lo)) * 0.82));
        g.clearRect(0, 0, W, H);
        g.font = '500 11px "EB Garamond", serif'; g.textBaseline = 'top';
        for (const b of score.bars) {
          if (b.t < t0 - 1 || b.t > t1) continue;
          const x = X(b.t);
          g.strokeStyle = 'rgba(230,203,133,.14)'; g.beginPath(); g.moveTo(x, 14); g.lineTo(x, H); g.stroke();
          g.fillStyle = 'rgba(233,207,140,.55)'; g.fillText(b.occ > 1 ? `${b.n}′` : b.n, x + 3, 4);
        }
        for (const [on, d, m, v] of notesIn(t0, t1, visibleNotes)) {
          const active = on <= t && on + d > t, past = on + d <= t, dim = muted.has(v);
          const x = X(on), w = Math.max(3, (d / span) * W - 1.5), y = Y(m) - nh / 2;
          const col = GOLDS[v % GOLDS.length];
          g.globalAlpha = dim ? 0.08 : past ? 0.32 : active ? 1 : 0.62;
          if (active && !dim) { g.shadowColor = col; g.shadowBlur = 14; }
          g.fillStyle = col;
          g.beginPath(); g.roundRect ? g.roundRect(x, y, w, nh, Math.min(4, nh / 2)) : g.rect(x, y, w, nh); g.fill();
          g.shadowBlur = 0;
        }
        g.globalAlpha = 1;
        const hx = X(t);
        const grad = g.createLinearGradient(hx - 30, 0, hx, 0); grad.addColorStop(0, 'rgba(233,207,140,0)'); grad.addColorStop(1, 'rgba(233,207,140,.12)');
        g.fillStyle = grad; g.fillRect(hx - 30, 0, 30, H);
        g.strokeStyle = '#e9cf8c'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(hx, 0); g.lineTo(hx, H); g.stroke(); g.lineWidth = 1;
      },
      destroy() { ro.disconnect(); },
    };
  }

  // ---- the architecture of the piece: sections as stones along the floor, arcs joining every return of the
  // same material (section.m letters; A′ returns to A), the joins as diamonds, the playhead walking through.
  function formView() {
    const NS = 'http://www.w3.org/2000/svg';
    const box = ui.layer.getBoundingClientRect();
    const W = 1000, H = Math.round(Math.max(340, Math.min(760, (W * (box.height - 40)) / Math.max(1, box.width)))), X0 = 30, X1 = 970, floor = H - 96, d = track.duration || 1;
    const X = (t) => X0 + (t / d) * (X1 - X0);
    const secs = track.sections.map((s, i) => ({ ...s, i, end: track.sections[i + 1]?.t ?? d, base: (s.m ?? '').replace(/[′″'’\s\d]+$/u, '') }));
    const arcs = [];
    secs.forEach((s, i) => {
      if (!s.m || /^(Intro|Coda|Link|Cadenza|Dev|Var|Theme)/i.test(s.base)) return;
      const prev = [...secs.slice(0, i)].reverse().find((p) => p.base === s.base);
      if (prev) arcs.push({ a: prev, b: s });
    });
    const maxSpan = Math.max(1, ...arcs.map((a) => X(a.b.t) - X(a.a.t)));
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('class', 'form-svg');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', `The form of ${track.work}: ${secs.map((s) => s.m || s.label).join(', ')}`);
    const mid = (s) => (X(s.t) + X(s.end)) / 2;
    let html = `<defs><linearGradient id="arcg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f6e3a8"/><stop offset="1" stop-color="#a8843a"/></linearGradient>
<radialGradient id="stoneg" cx=".5" cy="0" r="1"><stop offset="0" stop-color="rgba(233,207,140,.32)"/><stop offset="1" stop-color="rgba(233,207,140,.04)"/></radialGradient></defs>`;
    html += `<line x1="${X0}" x2="${X1}" y1="${floor + 0.5}" y2="${floor + 0.5}" class="fm-floor"/>`;
    for (const { a, b } of arcs) {
      const x1 = mid(a), x2 = mid(b), r = (x2 - x1) / 2, h = Math.min(floor - 46 - 26, 36 + (r * 2 / maxSpan) * (floor - 46 - 70));
      html += `<path class="fm-arc" data-a="${a.i}" data-b="${b.i}" d="M${x1},${floor - 46} C${x1},${floor - 46 - h * 1.33} ${x2},${floor - 46 - h * 1.33} ${x2},${floor - 46}" stroke-width="${Math.max(1.2, Math.min(5, (b.end - b.t) / d * 40))}"/>`;
    }
    for (const s of secs) {
      const x = X(s.t), w = Math.max(2, X(s.end) - x - 2);
      const letter = s.m || '';
      const showLetter = w > 22;
      html += `<g class="fm-sec" data-i="${s.i}" tabindex="0" role="button" aria-label="${escapeHtml(s.label)} at ${fmt(s.t)}">
<rect x="${x + 1}" y="${floor - 46}" width="${w}" height="46" rx="2"/>${showLetter ? `<text x="${x + 1 + w / 2}" y="${floor - 16}" text-anchor="middle" class="fm-m">${escapeHtml(letter)}</text>` : ''}</g>`;
    }
    for (const j of track.transitions) html += `<text x="${X(j.at)}" y="${floor + 22}" text-anchor="middle" class="fm-join">◆</text>`;
    html += `<g class="fm-head"><line x1="0" x2="0" y1="20" y2="${floor + 8}"/><circle cx="0" cy="${floor + 8}" r="4"/></g>`;
    html += `<text x="${X0}" y="${H - 52}" class="fm-now-l"></text><text x="${X0}" y="${H - 24}" class="fm-now-n"></text>`;
    svg.innerHTML = html;
    const cap = document.createElement('p');
    cap.className = 'sheet-cap';
    cap.innerHTML = arcs.length
      ? 'The whole piece, left to right. Each block is a section; an arc joins material to its return (A to A′). Diamonds mark the joins between sections. Select a block to play from that section.'
      : 'The whole piece, left to right, one block per section. Diamonds mark the joins between sections. Select a block to play from that section.';
    ui.layer.append(svg, cap);
    const head = svg.querySelector('.fm-head'), nowL = svg.querySelector('.fm-now-l'), nowN = svg.querySelector('.fm-now-n');
    const blocks = [...svg.querySelectorAll('.fm-sec')], arcEls = [...svg.querySelectorAll('.fm-arc')];
    svg.addEventListener('click', (e) => { const g = e.target.closest('.fm-sec'); if (g) seek(secs[+g.dataset.i].t + 0.05); });
    svg.addEventListener('keydown', (e) => { const g = e.target.closest('.fm-sec'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); seek(secs[+g.dataset.i].t + 0.05); } });
    let cur = -2;
    return {
      draw(t) {
        head.setAttribute('transform', `translate(${X(t).toFixed(1)},0)`);
        let i = -1; for (const s of secs) if (s.t <= t + 0.05) i = s.i;
        if (i === cur) return;
        cur = i;
        blocks.forEach((b, k) => { b.classList.toggle('on', k === i); b.classList.toggle('past', k < i); });
        arcEls.forEach((a) => a.classList.toggle('on', +a.dataset.a === i || +a.dataset.b === i));
        const s = secs[i];
        nowL.textContent = s ? (s.m && !s.label.startsWith(s.m) ? `${s.m} · ${s.label}` : s.label) : '';
        nowN.textContent = s?.mNote ?? '';
      },
    };
  }

  // ---- the orchestra on its stage, seen from above the conductor: concentric rows of seats, each section a
  // gilded wedge that glows while it plays and burns brighter while it carries the tune. Data: the aligned score
  // (which written parts are sounding) and/or the authored passage timeline in track.orchestra.
  function orchestraView() {
    const NS = 'http://www.w3.org/2000/svg';
    const ROWS = [
      ['violins-1', 'violas', 'cellos'],
      ['violins-2', 'piccolo', 'flutes', 'oboes', 'cor-anglais', 'e-flat-clarinet', 'basses'],
      ['harp', 'celesta', 'harpsichord', 'organ', 'piano', 'clarinets', 'bass-clarinet', 'saxophones', 'bassoons', 'contrabassoon', 'horns'],
      ['percussion', 'cornets', 'trumpets', 'trombones', 'euphoniums', 'tuba', 'timpani'],
      ['chorus'],
    ];
    const CHAIRS = { 'violins-1': 16, 'violins-2': 14, violas: 12, cellos: 10, basses: 8, piccolo: 1, flutes: 2, oboes: 2, 'cor-anglais': 1, 'e-flat-clarinet': 1, clarinets: 2, 'bass-clarinet': 1, saxophones: 4, bassoons: 2, contrabassoon: 1, horns: 4, cornets: 3, trumpets: 2, trombones: 3, euphoniums: 2, tuba: 1, timpani: 1, percussion: 3, harp: 2, celesta: 1, piano: 1, organ: 1, harpsichord: 1, chorus: 24 };
    const NAME = { 'violins-1': 'First violins', 'violins-2': 'Second violins', violas: 'Violas', cellos: 'Cellos', basses: 'Double basses', piccolo: 'Piccolo', flutes: 'Flutes', oboes: 'Oboes', 'cor-anglais': 'Cor anglais', 'e-flat-clarinet': 'E♭ clarinet', clarinets: 'Clarinets', 'bass-clarinet': 'Bass clarinet', saxophones: 'Saxophones', bassoons: 'Bassoons', contrabassoon: 'Contrabassoon', horns: 'Horns', cornets: 'Cornets', trumpets: 'Trumpets', trombones: 'Trombones', euphoniums: 'Euphoniums', tuba: 'Tuba', timpani: 'Timpani', percussion: 'Percussion', harp: 'Harp', celesta: 'Celesta', piano: 'Piano', organ: 'Organ', harpsichord: 'Harpsichord', 'solo-violin': 'Solo violin', 'solo-voice': 'Voice', chorus: 'Chorus' };
    // Score part names → stage sections. Order matters: specific names before families.
    const MAP = [
      [/chorus|choir|\bcoro\b|\bchor\b/i, 'chorus'],  // before voices and basses: 'Chorus bass' is the chorus
      [/contrabassoon|contrafagott|double bassoon/i, 'contrabassoon'], [/bass clarinet|clarinetto basso|bassklarinette/i, 'bass-clarinet'],
      [/cor anglais|english horn|corno inglese|englischhorn/i, 'cor-anglais'], [/e♭ clarinet|eb clarinet|e-flat clarinet|clarinetto piccolo/i, 'e-flat-clarinet'],
      [/^(violins? i|violin 1|1st violins?|first violins?|violini? i|violine i)$/i, 'violins-1'], [/^(violins? ii|violin 2|2nd violins?|second violins?|violini? ii|violine ii)$/i, 'violins-2'],
      [/solo violin|violino solo/i, 'solo-violin'], [/viol(a|e)s?\b|bratsche/i, 'violas'], [/cell|violoncell/i, 'cellos'], [/double bass|contrabass|kontrabass|basses?$|bassi$/i, 'basses'],
      [/piccolo|ottavino/i, 'piccolo'], [/flute|flauti?|flöte/i, 'flutes'], [/oboe|oboi/i, 'oboes'], [/clarinet|clarinetti?|klarinette/i, 'clarinets'], [/bassoon|fagott/i, 'bassoons'],
      [/horn|corni?\b/i, 'horns'], [/trumpet|trombe|tromba|trompete|cornet/i, 'trumpets'], [/trombone|tromboni|posaune/i, 'trombones'], [/tuba/i, 'tuba'], [/timp|pauke/i, 'timpani'],
      [/percussion|drum|cymbal|triangle|tam-tam|glockenspiel/i, 'percussion'], [/harp|arpa|harfe/i, 'harp'], [/celesta/i, 'celesta'], [/organ|organo|orgel/i, 'organ'],
      [/piano|pianoforte|klavier/i, 'piano'], [/harpsichord|cembalo/i, 'harpsichord'], [/soprano|alto|tenor|bass(o)? solo|baritone|voice|singer/i, 'solo-voice'], [/chorus|choir|coro|chor/i, 'chorus'],
    ];
    const orch = track.orchestra;
    const voiceId = score ? score.voices.map((v) => MAP.find(([re]) => re.test(v.name))?.[1] ?? null) : [];
    const ensemble = new Set([...(orch?.ensemble ?? []), ...voiceId.filter(Boolean)]);
    const solo = orch?.solo && ensemble.has(orch.solo) ? orch.solo : null;
    if (solo) ensemble.delete(solo);
    const rows = ROWS.map((r) => r.filter((id) => ensemble.has(id))).filter((r) => r.length);
    const W = 1000, H = 560, cx = 500, cy = 500, r0 = 92, rowW = Math.min(96, (420 - r0) / Math.max(1, rows.length));
    const pol = (r, a) => [cx + r * Math.cos(a), cy - r * Math.sin(a)];
    const wedge = (ri, ro, a0, a1) => { const [x0, y0] = pol(ro, a0), [x1, y1] = pol(ro, a1), [x2, y2] = pol(ri, a1), [x3, y3] = pol(ri, a0); return `M${x0.toFixed(1)},${y0.toFixed(1)} A${ro},${ro} 0 0 0 ${x1.toFixed(1)},${y1.toFixed(1)} L${x2.toFixed(1)},${y2.toFixed(1)} A${ri},${ri} 0 0 1 ${x3.toFixed(1)},${y3.toFixed(1)}Z`; };
    let html = `<defs>
<radialGradient id="floorg" cx="50%" cy="100%" r="90%"><stop offset="0" stop-color="#3a2c17" stop-opacity=".55"/><stop offset=".6" stop-color="#1b150d" stop-opacity=".35"/><stop offset="1" stop-color="#0d0b09" stop-opacity="0"/></radialGradient>
<radialGradient id="seatg" cx="50%" cy="100%" r="100%"><stop offset="0" stop-color="#fff0c2"/><stop offset=".55" stop-color="#e9cf8c"/><stop offset="1" stop-color="#a8843a"/></radialGradient>
<filter id="bloom" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter></defs>
<path d="M${cx - 470},${cy} A470,470 0 0 1 ${cx + 470},${cy} Z" fill="url(#floorg)"/>
<path d="M${cx - 470},${cy} A470,470 0 0 1 ${cx + 470},${cy}" fill="none" stroke="rgba(230,203,133,.22)"/>
<line x1="${cx - 480}" x2="${cx + 480}" y1="${cy + .5}" y2="${cy + .5}" stroke="rgba(230,203,133,.35)"/>`;
    const PAD = 0.012, labels = [];
    rows.forEach((row, ri) => {
      const rIn = r0 + ri * rowW + 4, rOut = r0 + (ri + 1) * rowW - 4;
      const span = Math.PI - 0.16, step = span / row.length;
      row.forEach((id, k) => {
        const a1 = Math.PI - 0.08 - k * step, a0 = a1 - step;
        const d = wedge(rIn, rOut, a0 + PAD, a1 - PAD), mid = (a0 + a1) / 2, rm = (rIn + rOut) / 2;
        const [lx, ly] = pol(rm, mid);
        // chairs: the usual desk count of a full symphony orchestra, set out in two arcs inside the wedge
        const n = CHAIRS[id] ?? 2, perRow = Math.ceil(n / (n > 4 ? 2 : 1)), rowsN = Math.ceil(n / perRow);
        let dots = '';
        for (let q = 0; q < n; q++) {
          const rr = rowsN === 1 ? rm : rIn + ((rOut - rIn) * (Math.floor(q / perRow) + 0.5)) / rowsN;
          const slot = q % perRow, cnt = Math.min(perRow, n - Math.floor(q / perRow) * perRow);
          const aa = a1 - PAD * 3 - ((a1 - a0 - PAD * 6) * (slot + 0.5)) / cnt;
          const [dx, dy] = pol(rr, aa);
          dots += `<circle class="chair" cx="${dx.toFixed(1)}" cy="${dy.toFixed(1)}" r="3.2"/>`;
        }
        html += `<g class="sec" data-id="${id}"><path class="halo" d="${d}" filter="url(#bloom)"/><path class="seat" d="${d}"/>${dots}</g>`;
        const deg = (-(mid * 180) / Math.PI + 90);
        const label = NAME[id] ?? id, arc = (a1 - a0 - PAD * 2) * rm;
        const fs = Math.max(11, Math.min(21, arc / (label.length * 0.5)));
        labels.push(`<text class="st-n" data-id="${id}" font-size="${fs.toFixed(1)}" x="${lx.toFixed(1)}" y="${(ly + 6).toFixed(1)}" text-anchor="middle" transform="rotate(${deg.toFixed(1)} ${lx.toFixed(1)} ${ly.toFixed(1)})">${NAME[id] ?? id}</text>`);
      });
    });
    html += labels.join('');
    if (solo) html += `<g class="sec solo" data-id="${solo}"><ellipse class="halo" cx="${cx}" cy="${cy - 52}" rx="90" ry="30" filter="url(#bloom)"/><ellipse class="seat" cx="${cx}" cy="${cy - 52}" rx="78" ry="24"/><text class="st-n" data-id="${solo}" x="${cx}" y="${cy - 46}" text-anchor="middle">${orch?.soloLabel ?? ({ clarinets: 'Solo clarinet', flutes: 'Solo flute', oboes: 'Solo oboe', horns: 'Solo horn', cellos: 'Solo cello', violas: 'Solo viola' })[solo] ?? NAME[solo] ?? solo}</text></g>`;
    html += `<circle cx="${cx}" cy="${cy - 8}" r="5" class="st-podium"/><text x="${cx}" y="${cy + 30}" text-anchor="middle" class="st-cond">the conductor</text>`;
    const svg = document.createElementNS(NS, 'svg');
    const maxR = r0 + rows.length * rowW;
    svg.setAttribute('viewBox', `${cx - maxR - 24} ${cy - maxR - 24} ${2 * maxR + 48} ${maxR + 66}`);
    svg.setAttribute('class', 'stage-svg');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', `The ensemble on stage: ${[...ensemble].map((id) => NAME[id] ?? id).join(', ')}`);
    svg.innerHTML = html;
    const now = document.createElement('div');
    now.className = 'stage-now';
    now.innerHTML = '<span class="sn-k">Melody</span><span class="sn-lead">—</span><span class="sn-note"></span>';
    const cap = document.createElement('p');
    cap.className = 'sheet-cap';
    cap.textContent = score
      ? 'Each section lights while its written part sounds (from the score, aligned automatically to this recording; not yet checked by ear). The brightest sections have the melody.'
      : `Who plays in each passage, read from the score${orch?.source?.title ? `: ${orch.source.title}` : ''}. Changes are placed against this recording passage by passage and may fall a moment early or late. The brightest sections have the melody.`;
    ui.layer.append(svg, now, cap);
    const secs = new Map([...svg.querySelectorAll('.sec')].map((g) => [g.dataset.id, { g, level: 0, label: svg.querySelector(`.st-n[data-id="${g.dataset.id}"]`) }]));
    const leadEl = now.querySelector('.sn-lead'), noteEl = now.querySelector('.sn-note');
    let lastEntry = null;
    const entryAt = (t) => { const tl = orch?.timeline ?? []; let e = null; for (const x of tl) { if (x.t <= t + 0.05) e = x; else break; } return e; };
    return {
      draw(t) {
        const e = entryAt(t);
        let playing, lead;
        if (score) {
          const ns = sounding(t);
          playing = new Set(ns.map((n) => voiceId[n[3]]).filter(Boolean));
          const top = ns.reduce((a, n) => (voiceId[n[3]] && (!a || n[2] > a[2]) ? n : a), null);
          lead = new Set(e?.lead?.filter((x) => playing.has(x)) ?? (top ? [voiceId[top[3]]] : []));
        } else {
          playing = new Set(e?.playing ?? []);
          lead = new Set(e?.lead ?? []);
        }
        for (const [id, S] of secs) {
          const target = lead.has(id) ? 1 : playing.has(id) ? 0.55 : 0;
          S.level += (target - S.level) * (target > S.level ? 0.35 : 0.06);
          const level = S.level.toFixed(3), active = playing.has(id), leading = lead.has(id);
          if (level !== S.drawnLevel) { S.g.style.setProperty('--lv', level); S.drawnLevel = level; }
          if (active !== S.active) { S.g.classList.toggle('on', active); S.active = active; }
          if (leading !== S.leading) { S.g.classList.toggle('lead', leading); S.label?.classList.toggle('lead', leading); S.leading = leading; }
          const fill = leading ? '' : `rgba(239, 229, 210, ${(0.5 + S.level * 0.5).toFixed(2)})`;
          if (S.label && fill !== S.fill) { S.label.style.fill = fill; S.fill = fill; }
        }
        if (e !== lastEntry || score) {
          const names = [...lead].map((id) => NAME[id] ?? id);
          text(leadEl, names.length ? names.join(', ') : '—');
          if (e !== lastEntry) { noteEl.textContent = e?.note ?? ''; lastEntry = e; }
        }
      },
    };
  }

  // ================================================================= cues and joins
  const cueAt = (t) => { const cs = track.cues; let i = -1; for (let k = 0; k < cs.length; k++) { if (cs[k].t <= t + 0.05) i = k; else break; } return i; };
  function showCue(i) {
    cueIdx = i;
    const c = track.cues[Math.max(0, i)] ?? { kind: 'music', title: track.work, text: track.intro, how: '' };
    ui.cue.dataset.kind = c.kind;
    ui.kind.textContent = KIND[c.kind] ?? c.kind;
    ui.cueTitle.textContent = c.title;
    if (joinIdx < 0) wideCue.innerHTML = `<span>${KIND[c.kind] ?? ''}</span>${escapeHtml(c.title)}`;
    ui.cueText.innerHTML = c.text;
    ui.cueHow.innerHTML = `${c.how ?? ''} ${linkify(escapeHtml(c.evidence ?? ''))}`;
    $('.cue-how').hidden = !(c.how || c.evidence);
    if (!reduced) { ui.cue.classList.remove('enter'); void ui.cue.offsetWidth; ui.cue.classList.add('enter'); }
    ui.past.innerHTML = track.cues.slice(0, Math.max(0, i)).reverse().map((p) => `<li data-kind="${p.kind}" data-t="${p.t}" tabindex="0"><span class="tm">${fmt(p.t)}</span><div><b>${p.title}</b><span>${p.text}</span></div></li>`).join('');
  }
  on(ui.past, 'click', (e) => { const li = e.target.closest('li'); if (li) seek(+li.dataset.t); });

  const joinAt = (t) => track.transitions.findIndex((j) => t >= j.at - 7 && t <= Math.max(j.at + 9, j.span[1]));
  function showJoin(i) {
    joinIdx = i;
    if (i < 0) { ui.join.hidden = true; return; }
    const j = track.transitions[i];
    ui.join.innerHTML = `<span class="join-k"><span class="diamond">◆</span> Join · ${escapeHtml(j.from)} <span class="arrow">→</span> ${escapeHtml(j.to)}${j.bar ? ` · bar ${j.bar}` : ''}</span>
<h3>${escapeHtml(j.title)}</h3><div class="join-how">${j.how}</div>
<div class="join-dev">${j.devices.map((d) => `<span>${escapeHtml(d)}</span>`).join('')}</div>
<button type="button" class="join-again" data-span="${j.span[0]}">Play the join again</button>`;
    ui.join.hidden = false;
    wideCue.innerHTML = `<span>◆ Join</span>${escapeHtml(j.title)}`;
    if (!reduced) { ui.join.classList.remove('enter'); void ui.join.offsetWidth; ui.join.classList.add('enter'); }
  }
  on(ui.join, 'click', (e) => { const b = e.target.closest('.join-again'); if (b) seek(+b.dataset.span); });

  function renderJoinsTab() {
    const js = track.transitions;
    ui.tabJoins.innerHTML = js.length ? `<p class="joins-intro">Joins between the sections of this piece by ${escapeHtml(track.composer.short ?? track.composer.name)}. Each join also appears under <em>Listening notes</em> when the recording reaches it.</p>` + js.map((j) => `<article class="join-item"><span class="join-k"><span class="diamond">◆</span> ${fmt(j.at)} · ${escapeHtml(j.from)} → ${escapeHtml(j.to)}${j.bar ? ` · bar ${j.bar}` : ''}</span><h3>${escapeHtml(j.title)}</h3><div class="join-how">${j.how}</div><div class="join-dev">${j.devices.map((d) => `<span>${escapeHtml(d)}</span>`).join('')}</div><button type="button" class="join-again" data-span="${j.span[0]}">Play this join</button></article>`).join('')
      : '<p class="joins-intro">No joins between sections are marked for this piece.</p>';
  }
  on(ui.tabJoins, 'click', (e) => { const b = e.target.closest('.join-again'); if (b) seek(+b.dataset.span); });

  function renderComposerTab() {
    const c = track.composer;
    const portrait = c.portrait ? new URL(c.portrait, app.root).href : '';
    ui.tabComposer.innerHTML = `<div class="bio-head">${portrait ? `<img src="${portrait}" alt="" style="object-position:${c.focus}">` : '<span></span>'}<div><h3>${c.name}</h3><span class="dates">${c.dates}</span></div></div>
<p class="epi">${c.epithet}</p>${c.quote ? `<blockquote>“${c.quote.text}”<br><small>— ${c.quote.source}</small></blockquote>` : ''}${c.background}
<dl><div><dt>Born</dt><dd>${c.born}</dd></div>${c.died ? `<div><dt>Died</dt><dd>${c.died}</dd></div>` : ''}${c.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
<div class="inherit"></div>
${c.page === null ? '' : `<a class="more-link" href="${new URL(c.page ?? `composers/${c.slug}.html`, app.root).href}">${c.era === 'before-bach' || (c.page ?? '').startsWith('origins') ? 'Before Bach: origins of this music' : 'Composer chapter: life, scores, paintings'}</a>`}`;
    const t0 = track;
    influence().then((all) => {
      const mine = all?.[c.slug];
      if (!mine || track !== t0 || (!mine.in?.length && !mine.out?.length)) return;
      const item = (e, dir) => `<li><a href="${new URL(`influence.html#edge-${e.id}`, app.root).href}"><span class="ih-y">${e.year ?? ''}</span><span class="ih-t">${escapeHtml(e.title)}</span><span class="ih-w">${dir === 'in' ? 'from' : 'to'} ${escapeHtml(e.name ?? e.from ?? e.to ?? '')} · ${escapeHtml(e.kind)}</span></a></li>`;
      $('.inherit', ui.tabComposer).innerHTML = `<h4 class="tab-h">Influences</h4>
${mine.in?.length ? `<p class="ih-k">Influences on ${escapeHtml(c.short ?? c.name)}</p><ol class="ih">${mine.in.map((e) => item(e, 'in')).join('')}</ol>` : ''}
${mine.out?.length ? `<p class="ih-k">Influence of ${escapeHtml(c.short ?? c.name)} on others</p><ol class="ih">${mine.out.map((e) => item(e, 'out')).join('')}</ol>` : ''}
<a class="more-link" href="${new URL(`influence.html#node-${c.slug}`, app.root).href}">${escapeHtml(c.short ?? c.name)} in the Web of Influence</a>`;
    });
  }
  let compareData = null;
  const compareIndex = () => (compareData ??= fetch(new URL(`assets/compare-index.json?v=${document.documentElement.dataset.prog ?? ''}`, app.root)).then((r) => (r.ok ? r.json() : null)).catch(() => null));
  let influenceData = null;
  const influence = () => (influenceData ??= fetch(new URL(`assets/influence.json?v=${document.documentElement.dataset.prog ?? ''}`, app.root)).then((r) => (r.ok ? r.json() : null)).catch(() => null));
  const host = (url = '') => (/archive\.org/.test(url) ? 'Internet Archive' : 'Wikimedia Commons');
  function renderPieceTab() {
    const t = track, d = t.dossier;
    const dossier = d ? `<dl class="dossier">${d.fields.map((f) => `<div class="st-${f.status.replace(' ', '-')}"><dt>${f.label}</dt><dd>${escapeHtml(f.value || '—')}${f.src.length ? ` <sup>${f.src.join(',')}</sup>` : ''}<small>${f.statusText}${f.note ? ` — ${escapeHtml(f.note)}` : ''}</small>${f.alts.map((a) => `<small class="alt">or: ${escapeHtml(a)}</small>`).join('')}</dd></div>`).join('')}</dl>
<p class="credit">${escapeHtml(d.credit)}${d.licenseUrl ? ` · <a href="${d.licenseUrl}" target="_blank" rel="noopener">licence</a>` : ''}</p>
<ol class="sources">${d.sources.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${escapeHtml(s.title)}</a>${s.locator ? ` — ${escapeHtml(s.locator)}` : ''}</li>`).join('')}</ol>`
      : `<dl class="dossier"><div><dt>Performers</dt><dd>${escapeHtml(t.performers)}</dd></div><div><dt>Recording</dt><dd><a href="${t.sourcePage}" target="_blank" rel="noopener">${host(t.sourcePage)}</a> · ${escapeHtml(t.license)}</dd></div></dl>`;
    const cite = `${t.composer.name}, <i>${escapeHtml(t.work)}</i>${t.movement ? `, ${escapeHtml(t.movement)}` : ''}. ${escapeHtml(t.performers)}. Audio: <a href="${t.sourcePage}" target="_blank" rel="noopener">${host(t.sourcePage)}</a>. Notes: Contrapunctus, ${location.href.split('#')[0]}#${t.id}.`;
    ui.tabPiece.innerHTML = `<h3>${t.work}${t.movement ? `<br><small style="font-style:italic;font-size:.75em">${t.movement}</small>` : ''}</h3>
<p class="intro">${t.intro}</p>${t.workPage ? `<p class="work-link"><a href="${new URL(t.workPage, app.root).href}">Work page: every recording, with all its notes</a></p>` : ''}
<dl>${t.year ? `<div><dt>Composed</dt><dd>${t.year}</dd></div>` : ''}${t.key ? `<div><dt>Key</dt><dd>${t.key}</dd></div>` : ''}<div><dt>Forces</dt><dd>${t.forces}</dd></div></dl>
<h4 class="tab-h">Recording details</h4>${dossier}
<h4 class="tab-h">Form</h4><ol class="sec-list">${t.sections.map((s) => `<li data-t="${s.t}"><span>${fmt(s.t)}</span><span>${s.label}</span></li>`).join('')}</ol>
<h4 class="tab-h">All listening notes</h4><ol class="cue-list">${t.cues.map((c) => `<li data-t="${c.t}" data-kind="${c.kind}"><span>${fmt(c.t)}</span><span>${c.title}</span></li>`).join('')}</ol>
<div class="others"></div>
<h4 class="tab-h">Citation</h4><p class="cite">${cite}</p>`;
    const t0 = t;
    compareIndex().then((idx) => {
      const mine = idx?.[t.id];
      if (!mine?.length || track !== t0) return;
      $('.others', ui.tabPiece).innerHTML = `<h4 class="tab-h">Other performances</h4><ul class="others-l">${mine.map((e) => `<li><a href="${new URL(`compare/${e.compare}.html`, app.root).href}">${escapeHtml(e.label)}</a></li>`).join('')}</ul>`;
    });
  }
  on(ui.tabPiece, 'click', (e) => { const li = e.target.closest('li[data-t]'); if (li) seek(+li.dataset.t); });
  $$('.tabs button').forEach((b) => on(b, 'click', () => {
    $$('.tabs button').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
    $$('.tab').forEach((p) => { p.hidden = p.dataset.panel !== b.dataset.tab; });
    if (track && !ui.tabComposer.hidden && !ui.tabComposer.childNodes.length) renderComposerTab();
    if (track && !ui.tabPiece.hidden && !ui.tabPiece.childNodes.length) renderPieceTab();
    wake();
  }));

  // ================================================================= timeline
  function renderSections() {
    const d = track.duration;
    ui.tlSections.innerHTML = track.sections.map((s, i) => {
      const end = track.sections[i + 1]?.t ?? d;
      return `<span style="left:${(s.t / d) * 100}%;width:${((end - s.t) / d) * 100}%" title="${s.label}">${s.label}</span>`;
    }).join('');
  }
  function renderJoinMarkers() {
    const d = track.duration;
    ui.tlJoins.innerHTML = track.transitions.map((j, i) => `<button type="button" style="left:${(j.at / d) * 100}%" data-join="${i}" title="Join: ${escapeHtml(j.title)}" aria-label="Join at ${fmt(j.at)}: ${escapeHtml(j.title)}">◆</button>`).join('');
  }
  on(ui.tlJoins, 'pointerdown', (e) => e.stopPropagation());
  on(ui.tlJoins, 'click', (e) => { const b = e.target.closest('[data-join]'); if (b) seek(track.transitions[+b.dataset.join].span[0]); });
  let timelineTrack = null, timelineEnv = null, timelineDpr = 0;
  const timelineLayers = [document.createElement('canvas'), document.createElement('canvas')];
  let cueColours = {};
  function drawTimeline() {
    const cv = ui.tlCanvas, dpr = Math.min(2, devicePixelRatio || 1);
    const w = cv.clientWidth, h = cv.clientHeight;
    if (!w || !track || document.hidden || !visible.timeline) return;
    const width = Math.floor(w * dpr), height = Math.floor(h * dpr);
    const d = track.duration || 1, now = player.time, mid = h * 0.55;
    if (timelineTrack !== track || timelineEnv !== env || timelineDpr !== dpr || cv.width !== width || cv.height !== height) {
      cv.width = width; cv.height = height;
      timelineTrack = track; timelineEnv = env; timelineDpr = dpr;
      // CSS custom properties are invariant between track/size changes, not a per-cue layout read.
      const style = getComputedStyle(document.body);
      cueColours = Object.fromEntries(Object.keys(KIND).map((kind) => [kind, style.getPropertyValue(`--k-${kind}`) || '#e9cf8c']));
      timelineLayers.forEach((layer, played) => {
        layer.width = width; layer.height = height;
        const g = layer.getContext('2d');
        g.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (env?.env?.length) {
          g.fillStyle = played ? 'rgba(233,207,140,.85)' : 'rgba(233,207,140,.22)';
          for (let x = 0; x < w; x++) {
            const k = Math.min(env.env.length - 1, Math.floor((x / w) * env.env.length));
            const a = env.env[k] ** 1.6 * mid * 0.95;
            g.fillRect(x, mid - a, 1, a * 1.55);
          }
        }
      });
    }
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, w, h);
    if (env?.env?.length) {
      const edge = Math.max(0, Math.min(width, (Math.floor(now / d * w) + 1) * dpr));
      // Disjoint slices preserve the original alpha (overpainting would darken the waveform).
      if (edge) g.drawImage(timelineLayers[1], 0, 0, edge, height, 0, 0, edge / dpr, height / dpr);
      if (edge < width) g.drawImage(timelineLayers[0], edge, 0, width - edge, height, edge / dpr, 0, (width - edge) / dpr, height / dpr);
    } else {
      g.fillStyle = 'rgba(233,207,140,.2)'; g.fillRect(0, mid, w, 1);
      g.fillStyle = 'rgba(233,207,140,.8)'; g.fillRect(0, mid, (now / d) * w, 1);
    }
    for (const c of track.cues) {
      g.fillStyle = cueColours[c.kind] || '#e9cf8c';
      g.beginPath(); g.arc(Math.max(2, (c.t / d) * w), h - 2.5, 2, 0, Math.PI * 2); g.fill();
    }
    ui.head.style.left = `${(now / d) * 100}%`;
    ui.timeline.setAttribute('aria-valuemax', String(Math.round(d)));
    ui.timeline.setAttribute('aria-valuenow', String(Math.round(now)));
    ui.timeline.setAttribute('aria-valuetext', `${fmt(now)} of ${fmt(d)}`);
  }
  function seek(t) {
    player.seek(t);
    if (!player.playing) begin();
    tick(true);
  }
  let dragging = false;
  const posToTime = (e) => { const r = ui.timeline.getBoundingClientRect(); return ((e.clientX - r.left) / r.width) * track.duration; };
  on(ui.timeline, 'pointerdown', (e) => { dragging = true; ui.timeline.setPointerCapture(e.pointerId); seek(posToTime(e)); });
  on(ui.timeline, 'pointermove', (e) => { if (dragging) seek(posToTime(e)); });
  on(ui.timeline, 'pointerup', () => { dragging = false; });
  on(ui.timeline, 'keydown', (e) => { if (e.key === 'ArrowRight') { e.preventDefault(); seek(player.time + 10); } if (e.key === 'ArrowLeft') { e.preventDefault(); seek(player.time - 10); } });

  // ================================================================= transport
  async function begin() {
    const ok = await player.play();
    ui.curtain.hidden = ok;
    document.body.classList.toggle('waiting', !ok);
  }
  const playState = () => { const p = player.playing; ui.play.textContent = p ? '❚❚' : '▶'; ui.play.setAttribute('aria-label', p ? 'Pause' : 'Play'); };
  on(ui.play, 'click', () => (player.playing ? player.pause() : begin()));
  on($('.t-next'), 'click', () => player.next());
  on($('.t-prev'), 'click', () => (player.time > 5 ? seek(0) : player.prev()));
  on(window, 'keydown', (e) => {
    if (e.target.closest('input, textarea, button, a, [role="slider"], summary') || document.querySelector('dialog[open]')) return;
    if (e.code === 'Space') { e.preventDefault(); ui.play.click(); }
    if (e.key === 'n' || e.key === 'N') player.next();
    if (e.key === 'f' || e.key === 'F') widen.click();
    if (e.key === 'Escape' && document.body.classList.contains('wide')) setWide(false);
    if (e.key === 'p' || e.key === 'P') player.prev();
  });
  on(ui.progBtn, 'click', () => { ui.prog.hidden = !ui.prog.hidden; ui.progBtn.setAttribute('aria-expanded', String(!ui.prog.hidden)); });
  on($('.prog-close'), 'click', () => { ui.prog.hidden = true; });
  // One concert recording from anywhere, never the one already playing.
  const surprise = () => { const pool = P.filter((x) => x.concert !== false && x.id !== player.track?.id); return pool[Math.floor(Math.random() * pool.length)]?.id; };
  on(ui.prog, 'click', async (e) => {
    const evening = e.target.closest('button[data-programme]');
    if (evening) { ui.prog.hidden = true; await player.setQueue(evening.dataset.programme || null, { play: true }); queueState(); return; }
    if (e.target.closest('button[data-surprise]')) { ui.prog.hidden = true; await player.setQueue(null); await player.load(surprise(), { play: true }); return; }
    const unkeep = e.target.closest('button[data-unkeep]');
    if (unkeep) { const list = kept(); list.splice(+unkeep.dataset.unkeep, 1); saveKept(list); renderKept(); return; }
    const moment = e.target.closest('button[data-kept]');
    if (moment) {
      const k = kept()[+moment.dataset.kept];
      if (!k || !P.some((x) => x.id === k.id)) return;
      ui.prog.hidden = true;
      if (player.queue && !player.queue.ids.includes(k.id)) await player.setQueue(null);
      await player.load(k.id, { play: true, t: k.t });
      return;
    }
    const b = e.target.closest('button[data-id]'); if (!b) return;
    ui.prog.hidden = true;
    if (player.queue && !player.queue.ids.includes(b.dataset.id)) await player.setQueue(null);
    await player.load(b.dataset.id, { play: true });
  });
  on($('.begin'), 'click', () => begin());
  on(ui.curtain, 'click', (e) => { if (e.target === ui.curtain) begin(); });
  // #<id>, #<id>&t=<seconds> (a moment), #programme-<id> (an evening) and #surprise are shareable.
  const parseHash = () => {
    let raw = ''; try { raw = decodeURIComponent(location.hash.slice(1)); } catch {}
    if (raw === 'surprise') return { surprise: true };
    if (raw.startsWith('programme-')) return { programme: raw.slice(10) };
    const [id, ...rest] = raw.split('&');
    const t = Number(new URLSearchParams(rest.join('&')).get('t'));
    return { id, t: Number.isFinite(t) && t > 0 ? t : 0 };
  };
  on(window, 'hashchange', async () => {
    const h = parseHash();
    if (h.surprise) { await player.setQueue(null); await player.load(surprise(), { play: true }); return; }
    if (h.programme) { await player.setQueue(h.programme, { play: true }); return; }
    if (h.id && (h.id !== track?.id || h.t)) player.load(h.id, { play: true, t: h.t });
  });
  function queueState() {
    const q = player.queue, n = q ? q.ids.indexOf(player.track?.id) : -1;
    ui.progBtn.textContent = n >= 0 ? `${q.title} · ${n + 1} of ${q.ids.length}` : 'Programme';
    $$('button[data-programme]', ui.prog).forEach((b) => b.setAttribute('aria-pressed', String((q?.id ?? '') === b.dataset.programme)));
  }
  on($('.cue-share'), 'click', async (e) => {
    const url = `${location.origin}${location.pathname}#${encodeURIComponent(track.id)}&t=${Math.floor(player.time)}`;
    try { await navigator.clipboard.writeText(url); e.target.textContent = 'Link copied'; } catch { e.target.textContent = url; }
    setTimeout(() => { if (alive) e.target.textContent = 'Link to this moment'; }, 2500);
  });
  // Kept moments: a private listening notebook in this browser, newest first, listed in the programme.
  const KEPT = 'cp-kept';
  const kept = () => { try { return JSON.parse(localStorage.getItem(KEPT) ?? '[]'); } catch { return []; } };
  const saveKept = (list) => { try { localStorage.setItem(KEPT, JSON.stringify(list)); return true; } catch { return false; } };
  const keptBox = $('.p-kept');
  function renderKept() {
    const list = kept();
    keptBox.hidden = !list.length;
    $('ol', keptBox).innerHTML = list.map((k, i) => `<li><button data-kept="${i}"><span class="p-c">${escapeHtml(k.composer)}</span><span class="p-w">${escapeHtml(k.title)} · ${escapeHtml(k.work)}</span><span class="p-d">${fmt(k.t)}</span></button><button type="button" class="p-unkeep" data-unkeep="${i}" aria-label="Forget this moment">×</button></li>`).join('');
  }
  on($('.cue-keep'), 'click', (e) => {
    const c = track.cues[cueIdx];
    const entry = { id: track.id, t: Math.floor(player.time), title: c?.title ?? track.work, composer: track.composer.short ?? track.composer.name, work: track.work };
    const ok = saveKept([entry, ...kept().filter((k) => !(k.id === entry.id && Math.abs(k.t - entry.t) < 5))].slice(0, 100));
    e.target.textContent = ok ? 'Kept in the programme' : 'Could not keep it';
    renderKept();
    setTimeout(() => { if (alive) e.target.textContent = 'Keep this moment'; }, 2500);
  });

  const offs = [
    player.on('play', () => { playState(); wake(); }), player.on('pause', () => { playState(); wake(); }),
    player.on('track', (t) => { show(t); queueState(); }),
    player.on('queue', () => queueState()),
    player.on('queue-end', () => { ui.prog.hidden = false; ui.progBtn.setAttribute('aria-expanded', 'true'); }),
    player.on('blocked', (b) => { ui.curtain.hidden = !b; document.body.classList.toggle('waiting', b); }),
    player.on('advance', ({ from, to, interlude }) => {
      if (!interlude || reduced || !to) return;
      // Within one work the hall only marks the new movement; a new work gets the full interlude.
      const sameWork = from?.set && to.set && from.set.id === to.set.id;
      ui.interlude.classList.toggle('mv', !!sameWork);
      ui.interlude.style.setProperty('--accent', to.era?.accent ?? '#c9a65a');
      $('.i-era', ui.interlude).textContent = to.era ? `${to.era.numeral} · ${to.era.name}` : '';
      $('.i-name', ui.interlude).textContent = to.composer.name;
      const ci = $('.i-cameo img', ui.interlude); ci.src = to.composer.portrait ? new URL(to.composer.portrait, app.root).href : ''; ci.style.objectPosition = to.composer.focus; $('.i-cameo', ui.interlude).hidden = !to.composer.portrait;
      $('.i-work', ui.interlude).textContent = `${to.work}${to.movement ? ' · ' + to.movement : ''}`;
      ui.interlude.hidden = false;
      setTimeout(() => { ui.interlude.hidden = true; }, 3400);
    }),
    player.on('seek', () => { tick(true); wake(); }),
  ];
  cleanups.push(() => offs.forEach((f) => f()));

  // ================================================================= per-frame update
  let lastTl = 0;
  function tick(force = false) {
    if (!track || document.hidden) return;
    const t = player.time, now = performance.now();
    // Read timeline dimensions before writing any text/layout for this frame.
    if (visible.timeline && (force || now - lastTl > 120)) { drawTimeline(); lastTl = now; }
    text(ui.cur, fmt(t));
    const i = cueAt(t);
    if (i !== cueIdx) showCue(i);
    const j = joinAt(t);
    if (j !== joinIdx) showJoin(j);
    const nextCue = track.cues[i + 1];
    text(ui.cueNext, nextCue && player.playing ? `next note in ${fmt(nextCue.t - t)}` : '');
    let s = -1; track.sections.forEach((x, k) => { if (x.t <= t + 0.05) s = k; });
    if (s !== sectionIdx) {
      sectionIdx = s;
      $$('span', ui.tlSections).forEach((el, k) => el.classList.toggle('on', k === s));
      const sec = track.sections[s];
      text(ui.nsLabel, sec?.label ?? '—');
      text(ui.nsNote, sec?.mNote ?? '');
    }
    const nextSec = track.sections[s + 1];
    text(ui.nsNext, nextSec ? `Next section in ${fmt(nextSec.t - t)}: ${nextSec.label}` : '');
    if (visible.view) viewObj?.draw?.(t);
    if (scoreCovers(t) && visible.wheel) scoreReadouts(t);
  }

  // ---- readouts from the written score (accurate where the score is aligned)
  /** The written score accounts for time t (false once a recording continues past the score's last note). */
  function scoreCovers(t) { return !!score && t <= score.end + 1; }
  let lastScoreRead = 0;
  function scoreReadouts(t) {
    const nowMs = performance.now();
    if (nowMs - lastScoreRead < 90) return;
    lastScoreRead = nowMs;
    const notes = sounding(t);
    for (let p = 0; p < 12; p++) chroma[p] *= 0.5;
    for (const n of notes) chroma[n[2] % 12] = Math.min(1, chroma[n[2] % 12] + 0.6);
    const low = notes.reduce((a, n) => (a == null || n[2] < a ? n[2] : a), null);
    html(ui.bass, low == null ? '—' : `${NAMES[low % 12]}<small style="font-size:.6em;opacity:.6">${Math.floor(low / 12) - 1}</small>`);
    text(ui.top, notes.length ? [...new Set(notes.map((n) => NAMES[n[2] % 12]))].slice(0, 5).join(' · ') : '—');
    const ch = (score.chords ?? []).find((c) => c.t0 <= t && c.t1 > t);
    text(ui.chord, ch ? ch.label : '—');
    chordTones = [...new Set(notes.map((n) => n[2] % 12))];
    wheelDirty = true;
  }

  // ================================================================= spectrogram, keyboard, wheel (the live visualizer)
  const LUT = (() => {
    const stops = [[0, [6, 5, 4, 0]], [0.18, [40, 12, 10, 120]], [0.38, [120, 32, 22, 210]], [0.58, [181, 78, 38, 240]], [0.76, [214, 170, 92, 255]], [0.9, [240, 220, 165, 255]], [1, [255, 250, 235, 255]]];
    const lut = new Uint8ClampedArray(256 * 4);
    for (let i = 0; i < 256; i++) {
      const v = i / 255; let k = 0; while (k < stops.length - 2 && v > stops[k + 1][0]) k++;
      const [a, ca] = stops[k], [b, cb] = stops[k + 1]; const f = (v - a) / (b - a);
      for (let j = 0; j < 4; j++) lut[i * 4 + j] = ca[j] + (cb[j] - ca[j]) * f;
    }
    return lut;
  })();
  const OCT = 8;
  let sg = null, rows = null, colImg = null, sgW = 0, sgH = 0, dprS = 1, rowsA4 = 0;
  let analyser = null, freq = null, wave = null;
  function ensureAnalyser() {
    if (analyser) return true;
    try { const g = player.graph(); analyser = g.analyser; freq = new Float32Array(analyser.frequencyBinCount); wave = new Float32Array(analyser.fftSize); return true; } catch { return false; }
  }
  function setupSpectro() {
    const cv = ui.spectro; dprS = Math.min(1.5, devicePixelRatio || 1);
    sgW = Math.round(cv.clientWidth * dprS); sgH = Math.round(cv.clientHeight * dprS);
    if (!sgW || !sgH) return;
    cv.width = sgW; cv.height = sgH;
    sg = cv.getContext('2d');
    sg.fillStyle = '#060504'; sg.fillRect(0, 0, sgW, sgH);
    colImg = sg.createImageData(3, sgH);
    rows = null;
    ui.axis.innerHTML = Array.from({ length: OCT }, (_, o) => `<span style="top:${(1 - o / OCT) * 100}%"><b>C${o + 1}</b></span>`).join('');
  }
  function buildRows() {
    const binHz = analyser.context.sampleRate / analyser.fftSize, n = analyser.frequencyBinCount;
    const FMIN = A4 * 2 ** ((24 - 69) / 12);   // C1 relative to this recording's pitch
    rows = new Int32Array(sgH * 2); rowsA4 = A4;
    for (let y = 0; y < sgH; y++) {
      const f0 = FMIN * 2 ** ((1 - (y + 1) / sgH) * OCT), f1 = FMIN * 2 ** ((1 - y / sgH) * OCT);
      const lo = Math.max(1, Math.floor(f0 / binHz)), hi = Math.min(n - 1, Math.max(lo, Math.ceil(f1 / binHz)));
      rows[y * 2] = lo; rows[y * 2 + 1] = hi;
    }
  }
  let kb = null, kbW = 0;
  function setupKeys() { const cv = $('.keys'); if (!cv) return; kbW = Math.round(cv.clientWidth * dprS); cv.width = kbW; cv.height = sgH; kb = cv.getContext('2d'); }
  const BLACK = new Set([1, 3, 6, 8, 10]);
  function drawKeys() {
    if (!kb || !rows) return;
    const binHz = analyser.context.sampleRate / analyser.fftSize;
    kb.clearRect(0, 0, kbW, sgH);
    const keyH = sgH / (OCT * 12);
    for (let m = 24; m < 24 + OCT * 12; m++) {
      const f = A4 * 2 ** ((m - 69) / 12);
      const lo = Math.max(1, Math.floor((f * 2 ** (-1 / 24)) / binHz)), hi = Math.max(lo, Math.ceil((f * 2 ** (1 / 24)) / binHz));
      let v = -200; for (let k = lo; k <= hi && k < freq.length; k++) if (freq[k] > v) v = freq[k];
      let e = (v + 80) / 45; e = e < 0 ? 0 : e > 1 ? 1 : e;
      const y = sgH - (m - 24 + 1) * keyH, black = BLACK.has(m % 12), w = black ? kbW * 0.62 : kbW;
      kb.fillStyle = black ? '#17130f' : '#d8ccb6'; kb.fillRect(kbW - w, y + 0.5, w, Math.max(1, keyH - 1));
      if (e > 0.02) { kb.fillStyle = `rgba(246,${200 - e * 70},${110 - e * 60},${e})`; kb.fillRect(kbW - w, y + 0.5, w, Math.max(1, keyH - 1)); }
    }
  }
  function drawSpectro() {
    if (!sg) return;
    if (!rows || rowsA4 !== A4) buildRows();
    const dx = Math.max(2, Math.round(1.6 * dprS));
    if (colImg.width !== dx) colImg = sg.createImageData(dx, sgH);
    sg.drawImage(ui.spectro, -dx, 0);
    const d = colImg.data, min = -96, range = 62;
    for (let y = 0; y < sgH; y++) {
      let m = -200; const lo = rows[y * 2], hi = rows[y * 2 + 1];
      for (let k = lo; k <= hi; k++) if (freq[k] > m) m = freq[k];
      let v = (m - min) / range; v = v < 0 ? 0 : v > 1 ? 1 : v; v = v ** 1.15;
      const li = (v * 255) | 0;
      for (let x = 0; x < dx; x++) { const o = (y * dx + x) * 4; d[o] = LUT[li * 4]; d[o + 1] = LUT[li * 4 + 1]; d[o + 2] = LUT[li * 4 + 2]; d[o + 3] = 255; }
    }
    sg.putImageData(colImg, sgW - dx, 0);
  }

  // live pitch analysis (used when no aligned score exists): triads and sevenths, held for stability
  const chroma = new Float32Array(12);
  const TEMPLATES = [];
  for (let r = 0; r < 12; r++) {
    const add = (suf, iv, w = 1) => {
      const weights = [1, 0.9, 0.8, 0.75].slice(0, iv.length);
      TEMPLATES.push({ suf, root: r, tones: iv.map((x) => (r + x) % 12), w, weights, norm: Math.hypot(...weights) });
    };
    add(' major', [0, 4, 7]); add(' minor', [0, 3, 7]); add('7', [0, 4, 7, 10], 0.97); add('maj7', [0, 4, 7, 11], 0.97); add('m7', [0, 3, 7, 10], 0.97); add('°7', [0, 3, 6, 9], 0.95);
  }
  let chordHold = { name: '', n: 0 }, shownChord = '', chordTones = [], lastRead = 0;
  const raw = new Float32Array(12);
  function analyse() {
    const binHz = analyser.context.sampleRate / analyser.fftSize, n = freq.length;
    const now = performance.now();
    if (now - lastRead < 120) return;
    lastRead = now;
    analyser.getFloatTimeDomainData(wave);
    wheelDirty = true;
    let s2 = 0; for (let i = 0; i < wave.length; i++) s2 += wave[i] * wave[i];
    const db = 10 * Math.log10(s2 / wave.length + 1e-12);
    if (scoreCovers(player.time)) return;   // pitch readouts come from the written score instead
    raw.fill(0);
    const kLo = Math.ceil(80 / binHz), kHi = Math.min(n - 2, Math.floor(4200 / binHz));
    let maxDb = -200; for (let k = kLo; k <= kHi; k++) if (freq[k] > maxDb) maxDb = freq[k];
    const floor = Math.max(-85, maxDb - 38);
    for (let k = kLo; k <= kHi; k++) {
      const v = freq[k];
      if (v < floor || v < freq[k - 1] || v < freq[k + 1]) continue;
      const pc = ((Math.round(69 + 12 * Math.log2((k * binHz) / A4)) % 12) + 12) % 12;
      raw[pc] += 10 ** ((v - floor) / 20) - 1;
    }
    const mx = Math.max(...raw);
    for (let p = 0; p < 12; p++) { const v = mx > 0 ? raw[p] / mx : 0; chroma[p] += (v - chroma[p]) * (v > chroma[p] ? 0.35 : 0.12); }
    const silent = db < -58;
    const bLo = Math.ceil(38 / binHz), bHi = Math.floor(260 / binHz);
    let bMax = -200; for (let k = bLo; k <= bHi; k++) if (freq[k] > bMax) bMax = freq[k];
    let bassPc = -1;
    if (!silent && bMax > -78) for (let k = bLo; k <= bHi; k++) if (freq[k] >= bMax - 14 && freq[k] >= freq[k - 1] && freq[k] >= freq[k + 1]) {
      bassPc = ((Math.round(69 + 12 * Math.log2((k * binHz) / A4)) % 12) + 12) % 12;
      break;
    }
    let best = null, second = 0;
    const norm = Math.hypot(...chroma) || 1;
    for (const T of TEMPLATES) {
      let sc = T.tones.reduce((a, pc, k) => a + chroma[pc] * T.weights[k], 0) / (norm * T.norm);
      sc *= T.w;
      if (bassPc === T.root) sc += 0.08; else if (T.tones.includes(bassPc)) sc += 0.02; else if (bassPc >= 0) sc -= 0.05;
      if (chroma[T.root] < 0.35) sc -= 0.1;
      if (!best || sc > best.sc) { second = best?.sc ?? 0; best = { ...T, sc }; } else if (sc > second) second = sc;
    }
    const name = !silent && best && best.sc > 0.72 && best.sc - second > 0.012 ? `${NAMES[best.root]}${best.suf}` : '';
    if (name === chordHold.name) chordHold.n++; else chordHold = { name, n: 1 };
    if (track.monophonic) { chordTones = []; return; }
    if (chordHold.n >= 3 && name !== shownChord) { shownChord = name; chordTones = name ? best.tones : []; }
  }

  let wg = null, wSize = 0;
  function setupWheel() { const cv = ui.wheel, dpr = Math.min(2, devicePixelRatio || 1); wSize = cv.clientWidth; if (!wSize) return; cv.width = cv.height = Math.round(wSize * dpr); wg = cv.getContext('2d'); wg.setTransform(dpr, 0, 0, dpr, 0, 0); }
  function drawWheel() {
    if (!wg) return;
    const S = wSize, c = S / 2, r0 = S * 0.22, r1 = S * 0.4, rl = S * 0.465;
    wg.clearRect(0, 0, S, S);
    wg.strokeStyle = 'rgba(230,203,133,.16)'; wg.lineWidth = 1;
    for (const r of [r0, (r0 + r1) / 2, r1]) { wg.beginPath(); wg.arc(c, c, r, 0, Math.PI * 2); wg.stroke(); }
    const step = (Math.PI * 2) / 12, pts = [];
    FIFTHS.forEach((pc, i) => {
      const a = -Math.PI / 2 + i * step, v = chroma[pc], r = r0 + (r1 - r0) * v;
      const grd = wg.createRadialGradient(c, c, r0, c, c, r1);
      grd.addColorStop(0, `rgba(181,58,42,${0.15 + v * 0.5})`); grd.addColorStop(1, `rgba(233,207,140,${0.2 + v * 0.75})`);
      wg.fillStyle = grd;
      wg.beginPath(); wg.arc(c, c, r, a - step * 0.42, a + step * 0.42); wg.arc(c, c, r0, a + step * 0.42, a - step * 0.42, true); wg.closePath(); wg.fill();
      pts.push([c + Math.cos(a) * r, c + Math.sin(a) * r]);
      const inChord = chordTones.includes(pc);
      wg.font = `${inChord ? 'italic 600 ' : '500 '}${Math.round(S * 0.068)}px "EB Garamond", serif`;
      wg.textAlign = 'center'; wg.textBaseline = 'middle';
      wg.fillStyle = inChord ? '#f6e3a8' : `rgba(239,229,210,${0.35 + v * 0.6})`;
      wg.fillText(NAMES[pc], c + Math.cos(a) * rl, c + Math.sin(a) * rl);
    });
    wg.strokeStyle = 'rgba(246,227,168,.55)';
    wg.beginPath(); pts.forEach(([x, y], i) => (i ? wg.lineTo(x, y) : wg.moveTo(x, y))); wg.closePath(); wg.stroke();
  }

  // ================================================================= main loop
  let raf = 0, settling = 120, wheelDirty = true;
  const visible = { view: true, wheel: true, timeline: true, notes: true };
  const watched = new Map([[ui.frame, 'view'], [ui.wheel, 'wheel'], [ui.timeline, 'timeline'], [$('.notes'), 'notes']]);
  const visibility = new IntersectionObserver((entries) => {
    for (const entry of entries) visible[watched.get(entry.target)] = entry.isIntersecting;
    if (Object.values(visible).some(Boolean)) wake();
    else { cancelAnimationFrame(raf); raf = 0; }
  });
  for (const el of watched.keys()) visibility.observe(el);
  cleanups.push(() => visibility.disconnect());
  function wake() {
    settling = 120;
    if (alive && !document.hidden && !raf && Object.values(visible).some(Boolean)) raf = requestAnimationFrame(frame);
  }
  function frame(now) {
    raf = 0;
    if (!alive || document.hidden || !Object.values(visible).some(Boolean)) return;
    tick();
    if (player.playing && (visible.wheel || (visible.view && view === 'sound')) && ensureAnalyser()) {
      if ((visible.view && view === 'sound') || now - lastRead >= 120) {
        analyser.getFloatFrequencyData(freq);
        if (visible.view && view === 'sound') { drawSpectro(); drawKeys(); }
        if (visible.wheel) analyse();
      }
    } else if (!scoreCovers(player.time) && visible.wheel) {
      for (let p = 0; p < 12; p++) chroma[p] *= 0.96;
      wheelDirty = true;
    }
    if (visible.wheel && wheelDirty) { drawWheel(); wheelDirty = false; }
    if (player.playing || --settling > 0) raf = requestAnimationFrame(frame);
  }
  on(document, 'visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
    else { tick(true); wheelDirty = true; wake(); }
  });
  const onResize = () => { if (view === 'sound') { setupSpectro(); setupKeys(); } setupWheel(); drawTimeline(); wheelDirty = true; wake(); };
  let rt; on(window, 'resize', () => { clearTimeout(rt); rt = setTimeout(onResize, 150); });
  cleanups.push(() => clearTimeout(rt));

  // ================================================================= boot
  // Glossary popovers (shared with the Atlas; site.js owns them).
  import(new URL(`assets/js/site.js?v=${document.documentElement.dataset.site ?? ''}`, app.root).href)
    .then((m) => { if (alive && m.mountTerms) { const off = m.mountTerms(app); if (typeof off === 'function') cleanups.push(off); } })
    .catch(() => {});
  setupSpectro(); setupKeys(); setupWheel();
  const want = parseHash();
  if (want.surprise) { await player.setQueue(null); await player.load(surprise()); }
  else if (want.programme && (await player.getProgrammes()).some((p) => p.id === want.programme)) await player.setQueue(want.programme);
  else if (want.id && P.some((x) => x.id === want.id) && (want.id !== player.track?.id || want.t)) await player.load(want.id, { t: want.t });
  else if (!player.track) await player.load(0);
  queueState();
  renderKept();
  await show(player.track);
  playState();
  // One invitation on the first Hall visit, never on subsequent visits or after a tour.
  const hint = $('.hall-hint');
  if (hint) {
    try {
      if (!localStorage.getItem('cp-hall-guide') && !app.hallGuideSeen) {
        hint.hidden = false; app.hallGuideSeen = true;
        localStorage.setItem('cp-hall-guide', 'seen');
      }
    } catch { if (!app.hallGuideSeen) { hint.hidden = false; app.hallGuideSeen = true; } }
    on($('.hall-hint-close'), 'click', () => { hint.hidden = true; try { localStorage.setItem('cp-hall-guide', 'dismissed'); } catch {} });
  }
  wake();
  // Loading the hall or restoring a session is not consent to download cross-origin audio.
  if (!player.playing) {
    const ok = navigator.userActivation?.hasBeenActive ? await player.play() : false;
    ui.curtain.hidden = ok;
    document.body.classList.toggle('waiting', !ok);
  } else ui.curtain.hidden = true;
  $('.begin').disabled = false;
  $('.begin').textContent = 'Begin the concert';

  return () => { alive = false; cancelAnimationFrame(raf); viewObj?.destroy?.(); cleanups.forEach((f) => { try { f(); } catch {} }); };
}

function roman(n) { return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'][n] ?? String(n); }
function escapeHtml(s = '') { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function linkify(s) { return s.replace(/https?:\/\/[^\s<]+[^\s<.,;:)]/g, (u) => `<a href="${u}" target="_blank" rel="noopener">${u.replace(/^https?:\/\/(www\.)?/, '').slice(0, 48)}${u.length > 56 ? '…' : ''}</a>`); }
