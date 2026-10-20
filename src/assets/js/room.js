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
const KIND = { music: 'Music', form: 'Form', life: 'Life', world: 'History' };
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
    progBtn: $('.t-prog'), prog: $('.programme'), scrim: $('.prog-scrim'), curtain: $('.curtain'), interlude: $('.interlude'),
    cameo: $('.oval-r img'), cameoCap: $('.cameo-r figcaption'), chord: $('.chord'), chordCap: $('.chord-cap'), bass: $('.ro-bass'), top: $('.ro-top'), readouts: $('.readouts'),
    nsLabel: $('.ns-label'), nsNote: $('.ns-note'), nsNext: $('.ns-next'), axis: $('.spectro-axis'), spectro: $('.spectro'), wheel: $('.wheel'),
    frame: $('.spectro-frame'), layer: $('.view-layer'), views: $('.views'), cap: $('.sheet-cap'),
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
    // The era's accent, mixed toward the ink in room.css so it reads on the dark hall.
    if (t.era?.accent) document.body.style.setProperty('--era', t.era.accent); else document.body.style.removeProperty('--era');
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
    ui.movement.textContent = movementLabel(t);
    ui.meta.textContent = [t.year, t.key, t.forces, t.performers, A4 !== 440 ? `pitch A ≈ ${A4} Hz${t.tuningStatus === 'inferred' ? ' (inferred)' : ''}` : ''].filter(Boolean).join(' · ');
    if (c.portrait) ui.cameo.src = new URL(c.portrait, app.root).href; else ui.cameo.removeAttribute('src');
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
    // Each view writes its own caption under the frame; Notes needs none beyond its legend.
    setCap(v === 'sound' ? 'Pitch over time; each band is an octave of C.' : '');
    // Without an aligned score the wheel shows what sounds, and its centre names the piece's key: a live chord guess misleads.
    // With no value to show, the centre stays empty rather than printing a dash over its caption.
    ui.chordCap.textContent = track.monophonic ? 'single line' : score ? 'from the score' : 'key of the piece';
    if (!score) ui.chord.textContent = (track.key ?? '').split(/[(;,]/)[0].replace(/ in the .*/, '').trim();
    ui.readouts.hidden = !score;
    if (v === 'score') viewObj = sheetView();
    else if (v === 'notes') viewObj = rollView();
    else if (v === 'orchestra') viewObj = orchestraView();
    else if (v === 'form') viewObj = formView();
    if (v === 'sound') requestAnimationFrame(() => { setupSpectro(); setupKeys(); });
    wake();
  }
  const widen = $('.widen'), wideCue = $('.wide-cue');
  // One line under the frame; when there is more to say (source, edition, licence, method) the § opens it.
  const setCap = (short, full = '') => { ui.cap.innerHTML = full ? `<details class="cap-more"><summary><span>${short}</span></summary><div class="cap-full">${full}</div></details>` : short; };
  const setWide = (on) => {
    document.body.classList.toggle('wide', on);
    widen.textContent = on ? 'Restore' : 'Enlarge';
    widen.title = `${on ? 'Restore' : 'Enlarge'} the view (F)`;
    requestAnimationFrame(() => { if (view === 'sound') { setupSpectro(); setupKeys(); } else if (view === 'form' || view === 'orchestra') setView(view); });
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
    // Licensed encodings (CC BY / BY-SA) need their credit and licence beside the engraving that adapts them.
    const src = track.scoreSource ?? {};
    const licensed = src.license && !/public domain|cc0/i.test(src.license);
    const licence = src.licenseUrl ? `<a href="${escapeHtml(src.licenseUrl)}" target="_blank" rel="noopener">${escapeHtml(src.license)}</a>` : escapeHtml(src.license ?? '');
    const credit = licensed ? ` Encoding: ${src.url ? `<a href="${escapeHtml(src.url)}" target="_blank" rel="noopener">${escapeHtml(src.encoder || 'source')}</a>` : escapeHtml(src.encoder ?? '')}, ${licence}; engraved and aligned by Contrapunctus under the same terms.${src.attribution ? ` <span class="sheet-attrib">${escapeHtml(src.attribution)}</span>` : ''}` : '';
    const named = [src.title, src.edition].filter(Boolean).map(escapeHtml).join(', ');
    // The line under the frame stays one line in every view, so the frame keeps its size: it names the edition by
    // its first clause only (publisher, place, year); the work is in the heading and the § holds the rest.
    const brief = String(src.edition ?? '').split(/\s*[;(]/)[0].trim();
    setCap(`Score${brief && brief.length <= 44 ? `: ${escapeHtml(brief)}` : ''} · aligned by machine`,
      `The written score${named ? `: ${named}` : ''}, engraved with LilyPond. The gold bar follows the recording by automatic alignment (not yet checked by ear). Select a bar to play from it.${credit}`);
    ui.layer.append(wrap);
    const t0 = track;
    let pack = null, pages = [], current = null, lit = [], userScroll = 0, autoUntil = 0, barLen = 0.25, io = null, destroyed = false;
    // The window follows the music a whole system at a time. A system is every bar sharing a box top on one page;
    // its box spans all the staves, so the tallest one sets how far a full score must shrink to fit.
    let sysRatio = 0, shownSys = null;
    const fit = () => {
      if (!sysRatio || !wrap.clientWidth) return;
      const room = wrap.clientHeight - 16, need = sysRatio * wrap.clientWidth;
      wrap.style.setProperty('--page-w', need > room ? `${Math.max(50, (room / need) * 100).toFixed(2)}%` : '100%');
      shownSys = null; current = null;
    };
    const ro = new ResizeObserver(() => { fit(); tick(true); veilUpdate(); });
    ro.observe(wrap);
    const hl = document.createElement('div');
    hl.className = 'sheet-hl';
    const heads = new Map();   // bar n → [{ el, pos }] for loaded pages
    // Only whole systems show: a system cut by the foot of the window is covered with paper, unless it is the one
    // being played or nothing whole is shown above it.
    const veil = document.createElement('div');
    veil.className = 'sheet-veil';
    const veilUpdate = () => {
      if (!pack || destroyed) return;
      const wr = wrap.getBoundingClientRect(), foot = wrap.clientHeight;
      let cut = 0, whole = false;
      for (const P of pages) {
        const pr = P.el.getBoundingClientRect();
        if (pr.bottom < wr.top || pr.top > wr.bottom) continue;
        for (const s of P.systems) {
          const top = pr.top - wr.top + (s.y / P.h) * pr.height, bottom = top + (s.h / P.h) * pr.height;
          if (top >= -2 && bottom <= foot + 2) whole = true;
          else if (top > 0 && top < foot && bottom > foot && `${P.i}:${s.y}` !== shownSys) cut = Math.max(cut, foot - top + 6);
        }
      }
      veil.style.height = whole && cut ? `${Math.round(cut)}px` : '0px';
    };

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
      // One scale for the whole piece (no zooming at each page turn): three systems in four fit whole; the rare
      // taller one (every instrument at once) is shown from its top. Never below half the width, where it stops being legible.
      const systems = new Map(), perPage = j.pages.map(() => new Map());
      for (const boxes of Object.values(j.bars)) for (const [pi, , y, , h] of boxes) { systems.set(`${pi}:${y}`, h / j.pages[pi].w); perPage[pi].set(y, Math.max(h, perPage[pi].get(y) ?? 0)); }
      const ratios = [...systems.values()].sort((a, b) => a - b);
      sysRatio = ratios[Math.floor((ratios.length - 1) * 0.75)] ?? 0;
      wrap.innerHTML = '';
      pages = j.pages.map((p, i) => {
        const el = document.createElement('div');
        el.className = 'sheet-page';
        el.style.aspectRatio = `${p.w} / ${p.h}`;
        el.dataset.i = i;
        wrap.append(el);
        return { ...p, el, state: null, i, systems: [...perPage[i]].map(([y, h]) => ({ y, h })) };
      });
      ui.layer.append(veil);
      fit();
      io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) loadPage(pages[+e.target.dataset.i]); }), { root: wrap, rootMargin: '120% 0px' });
      pages.forEach((P) => io.observe(P.el));
      tick(true);
      veilUpdate();
    });

    const onScroll = () => { if (performance.now() > autoUntil) userScroll = performance.now(); veilUpdate(); };
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
              const pr = P.el.getBoundingClientRect(), wr = wrap.getBoundingClientRect();
              const top = pr.top - wr.top + wrap.scrollTop + (y / P.h) * pr.height, bottom = top + (h / P.h) * pr.height;
              const sys = `${pi}:${y}`;
              if (sys !== shownSys || top < wrap.scrollTop || bottom > wrap.scrollTop + wrap.clientHeight) {
                shownSys = sys; autoUntil = performance.now() + (reduced ? 100 : 900);
                // A little paper above the top staff keeps its high notes and markings in view.
                wrap.scrollTo({ top: Math.max(0, top - Math.max(12, (bottom - top) * 0.12)), behavior: reduced ? 'auto' : 'smooth' });
                veilUpdate();
              }
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
      destroy() { destroyed = true; io?.disconnect(); ro.disconnect(); },
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
          g.fillStyle = col;
          g.beginPath(); g.roundRect ? g.roundRect(x, y, w, nh, Math.min(4, nh / 2)) : g.rect(x, y, w, nh); g.fill();
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
    // The section now playing is named in HTML under the drawing (as in the orchestra view), so its type keeps the
    // hall's sizes at every width. The drawing is never taller than 0.45 of its width, and its letters never fall
    // below 13 px on screen however narrow the frame.
    const now = document.createElement('div');
    now.className = 'stage-now';
    now.innerHTML = '<span class="sn-k">Section</span><span class="sn-lead"></span><span class="sn-note"></span>';
    const box = ui.layer.getBoundingClientRect(), availH = Math.max(1, box.height - 72), availW = Math.max(1, box.width);
    const W = 1000, H = Math.round(Math.max(260, Math.min(W * 0.45, (W * availH) / availW)));
    const px = Math.min(availW / W, availH / H);   // screen pixels per drawing unit
    // On touch screens each section block is at least 44 px tall, so it can be tapped to play from there.
    const fs = Math.max(22, 13 / px), fsJ = Math.max(13, 10 / px), stoneH = Math.max(46, fs * 1.9, matchMedia('(pointer: coarse)').matches ? 44 / px : 0);
    const X0 = 30, X1 = 970, floor = H - Math.max(34, fsJ * 2.4), d = track.duration || 1;
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
      const x1 = mid(a), x2 = mid(b), r = (x2 - x1) / 2, top = floor - stoneH, h = Math.max(12, Math.min(top - 26, 36 + (r * 2 / maxSpan) * (top - 70)));
      html += `<path class="fm-arc" data-a="${a.i}" data-b="${b.i}" d="M${x1},${top} C${x1},${top - h * 1.33} ${x2},${top - h * 1.33} ${x2},${top}" stroke-width="${Math.max(1.2, Math.min(5, (b.end - b.t) / d * 40))}"/>`;
    }
    for (const s of secs) {
      const x = X(s.t), w = Math.max(2, X(s.end) - x - 2);
      const letter = s.m || '';
      const showLetter = w > fs * Math.max(1, letter.length * 0.55) + 4;
      html += `<g class="fm-sec" data-i="${s.i}" tabindex="0" role="button" aria-label="${escapeHtml(s.label)} at ${fmt(s.t)}">
<rect x="${x + 1}" y="${floor - stoneH}" width="${w}" height="${stoneH}" rx="2"/>${showLetter ? `<text x="${x + 1 + w / 2}" y="${floor - stoneH / 2 + fs * 0.32}" text-anchor="middle" class="fm-m" font-size="${fs.toFixed(1)}">${escapeHtml(letter)}</text>` : ''}</g>`;
    }
    for (const j of track.transitions) html += `<text x="${X(j.at)}" y="${floor + fsJ * 1.6}" text-anchor="middle" class="fm-join" font-size="${fsJ.toFixed(1)}">◆</text>`;
    html += `<g class="fm-head"><line x1="0" x2="0" y1="12" y2="${floor + 6}"/><circle cx="0" cy="${floor + 6}" r="4"/></g>`;
    svg.innerHTML = html;
    setCap(arcs.length ? 'Sections in order; arcs join returning material' : 'Sections in order; diamonds mark the joins',
      arcs.length
        ? 'The whole piece, left to right. Each block is a section; an arc joins material to its return (A to A′). Diamonds mark the joins between sections. Select a block to play from that section.'
        : 'The whole piece, left to right, one block per section. Diamonds mark the joins between sections. Select a block to play from that section.');
    ui.layer.append(svg, now);
    const head = svg.querySelector('.fm-head'), nowL = now.querySelector('.sn-lead'), nowN = now.querySelector('.sn-note');
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
        nowL.textContent = s ? (s.m && !s.label.startsWith(s.m) ? `${s.m} · ${s.label}` : s.label) : '—';
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
    const cx = 500, cy = 500, r0 = 92, rowW = Math.min(96, (420 - r0) / Math.max(1, rows.length));
    // The floor is drawn just outside the last row, so the drawing fills the frame; labels are sized for the screen:
    // never under 12 px however small the frame (a long name breaks onto two lines before it overflows its wedge).
    const maxR = r0 + rows.length * rowW, floorR = maxR + 28;
    const lay = ui.layer.getBoundingClientRect(), availW = Math.max(1, lay.width), availH = Math.max(1, lay.height - 64);
    const fit = (cond) => Math.min(availW / (2 * floorR + 24), availH / (floorR + 16 + cond * 1.9));
    const condFs = Math.max(12, 11.5 / fit(14)), px = fit(condFs), minFs = 12 / px;
    const pol = (r, a) => [cx + r * Math.cos(a), cy - r * Math.sin(a)];
    const wedge = (ri, ro, a0, a1) => { const [x0, y0] = pol(ro, a0), [x1, y1] = pol(ro, a1), [x2, y2] = pol(ri, a1), [x3, y3] = pol(ri, a0); return `M${x0.toFixed(1)},${y0.toFixed(1)} A${ro},${ro} 0 0 0 ${x1.toFixed(1)},${y1.toFixed(1)} L${x2.toFixed(1)},${y2.toFixed(1)} A${ri},${ri} 0 0 1 ${x3.toFixed(1)},${y3.toFixed(1)}Z`; };
    let html = `<defs>
<radialGradient id="floorg" cx="50%" cy="100%" r="90%"><stop offset="0" stop-color="#3a2c17" stop-opacity=".55"/><stop offset=".6" stop-color="#1b150d" stop-opacity=".35"/><stop offset="1" stop-color="#0d0b09" stop-opacity="0"/></radialGradient>
<radialGradient id="seatg" cx="50%" cy="100%" r="100%"><stop offset="0" stop-color="#fff0c2"/><stop offset=".55" stop-color="#e9cf8c"/><stop offset="1" stop-color="#a8843a"/></radialGradient>
<filter id="bloom" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter></defs>
<path d="M${cx - floorR},${cy} A${floorR},${floorR} 0 0 1 ${cx + floorR},${cy} Z" fill="url(#floorg)"/>
<path d="M${cx - floorR},${cy} A${floorR},${floorR} 0 0 1 ${cx + floorR},${cy}" fill="none" stroke="rgba(230,203,133,.22)"/>
<line x1="${cx - floorR - 10}" x2="${cx + floorR + 10}" y1="${cy + .5}" y2="${cy + .5}" stroke="rgba(230,203,133,.35)"/>`;
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
        let fs = Math.max(minFs, Math.min(21, arc / (label.length * 0.5))), lines = [label];
        const words = label.split(' ');
        if (label.length * 0.5 * fs > arc && words.length > 1 && rowW - 8 > fs * 2.1) {
          const cut = Math.ceil(words.length / 2);
          lines = [words.slice(0, cut).join(' '), words.slice(cut).join(' ')];
          fs = Math.max(minFs, Math.min(21, arc / (Math.max(...lines.map((l) => l.length)) * 0.5)));
        }
        const body = lines.length === 1 ? escapeHtml(label) : lines.map((l, q) => `<tspan x="${lx.toFixed(1)}" dy="${q ? (fs * 1.02).toFixed(1) : '0'}">${escapeHtml(l)}</tspan>`).join('');
        const y = lines.length === 1 ? ly + fs * 0.32 : ly - fs * 0.2;
        labels.push(`<text class="st-n" data-id="${id}" font-size="${fs.toFixed(1)}" x="${lx.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" transform="rotate(${deg.toFixed(1)} ${lx.toFixed(1)} ${ly.toFixed(1)})">${body}</text>`);
      });
    });
    html += labels.join('');
    if (solo) html += `<g class="sec solo" data-id="${solo}"><ellipse class="halo" cx="${cx}" cy="${cy - 52}" rx="90" ry="30" filter="url(#bloom)"/><ellipse class="seat" cx="${cx}" cy="${cy - 52}" rx="78" ry="24"/><text class="st-n" data-id="${solo}" x="${cx}" y="${cy - 46}" text-anchor="middle" font-size="${Math.max(20, minFs).toFixed(1)}">${orch?.soloLabel ?? ({ clarinets: 'Solo clarinet', flutes: 'Solo flute', oboes: 'Solo oboe', horns: 'Solo horn', cellos: 'Solo cello', violas: 'Solo viola' })[solo] ?? NAME[solo] ?? solo}</text></g>`;
    html += `<circle cx="${cx}" cy="${cy - 8}" r="5" class="st-podium"/><text x="${cx}" y="${(cy + 6 + condFs).toFixed(1)}" text-anchor="middle" class="st-cond" font-size="${condFs.toFixed(1)}">the conductor</text>`;
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `${cx - floorR - 12} ${cy - floorR - 8} ${2 * floorR + 24} ${(floorR + 16 + condFs * 1.9).toFixed(1)}`);
    svg.setAttribute('class', 'stage-svg');
    svg.setAttribute('preserveAspectRatio', 'xMidYMax meet');   // the stage stands on the frame's floor, above the melody line
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', `The ensemble on stage: ${[...ensemble].map((id) => NAME[id] ?? id).join(', ')}`);
    svg.innerHTML = html;
    const now = document.createElement('div');
    now.className = 'stage-now';
    now.innerHTML = '<span class="sn-k">Melody</span><span class="sn-lead">—</span><span class="sn-note"></span>';
    setCap(score ? 'Lit sections are playing; the brightest has the melody' : 'Who plays in each passage; the brightest has the melody',
      escapeHtml(score
        ? 'Each section lights while its written part sounds (from the score, aligned automatically to this recording; not yet checked by ear). The brightest sections have the melody.'
        : `Who plays in each passage, read from the score${orch?.source?.title ? `: ${orch.source.title}` : ''}. Changes are placed against this recording passage by passage and may fall a moment early or late. The brightest sections have the melody.`));
    ui.layer.append(svg, now);
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
    ui.cueTitle.innerHTML = titleHtml(c.title);
    if (joinIdx < 0) wideCue.innerHTML = `<span>${KIND[c.kind] ?? ''}</span>${titleHtml(c.title)}`;
    ui.cueText.innerHTML = c.text;
    ui.cueHow.innerHTML = `${c.how ?? ''} ${linkify(escapeHtml(c.evidence ?? ''))}`;
    keepTogether(ui.cue);
    $('.cue-how').hidden = !(c.how || c.evidence);
    if (!reduced) { ui.cue.classList.remove('enter'); void ui.cue.offsetWidth; ui.cue.classList.add('enter'); }
    ui.past.innerHTML = track.cues.slice(0, Math.max(0, i)).reverse().map((p) => `<li data-kind="${p.kind}" data-t="${p.t}" tabindex="0"><span class="tm">${fmt(p.t)}</span><div><b>${p.title}</b><span>${p.text}</span></div></li>`).join('');
  }
  on(ui.past, 'click', (e) => { const li = e.target.closest('li'); if (li) seek(+li.dataset.t); });
  // Rows that play from their time answer the keyboard as buttons do.
  const playRow = (e) => { const li = e.target.closest('li[data-t]'); if (li && e.target === li && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); seek(+li.dataset.t); } };
  on(ui.past, 'keydown', playRow);

  const joinAt = (t) => track.transitions.findIndex((j) => t >= j.at - 7 && t <= Math.max(j.at + 9, j.span[1]));
  function showJoin(i) {
    joinIdx = i;
    if (i < 0) { ui.join.hidden = true; return; }
    const j = track.transitions[i];
    ui.join.innerHTML = `<span class="join-k"><span class="diamond">◆</span> Join · ${escapeHtml(j.from)} <span class="arrow">→</span> ${escapeHtml(j.to)}${j.bar ? ` · bar\u00a0${j.bar}` : ''}</span>
<h2>${titleHtml(j.title)}</h2><div class="join-how">${j.how}</div>
<div class="join-dev">${j.devices.map((d) => `<span>${escapeHtml(d)}</span>`).join('')}</div>
<button type="button" class="join-again" data-span="${j.span[0]}">Play the join again</button>`;
    keepTogether(ui.join);
    ui.join.hidden = false;
    wideCue.innerHTML = `<span>◆ Join</span>${titleHtml(j.title)}`;
    if (!reduced) { ui.join.classList.remove('enter'); void ui.join.offsetWidth; ui.join.classList.add('enter'); }
  }
  on(ui.join, 'click', (e) => { const b = e.target.closest('.join-again'); if (b) seek(+b.dataset.span); });

  function renderJoinsTab() {
    const js = track.transitions;
    ui.tabJoins.innerHTML = js.length ? `<p class="joins-intro">Joins between the sections of this piece by ${escapeHtml(track.composer.short ?? track.composer.name)}. Each join also appears under <em>Listening notes</em> when the recording reaches it.</p>` + js.map((j) => `<article class="join-item"><span class="join-k"><span class="diamond">◆</span> ${fmt(j.at)} · ${escapeHtml(j.from)} → ${escapeHtml(j.to)}${j.bar ? ` · bar\u00a0${j.bar}` : ''}</span><h2>${titleHtml(j.title)}</h2><div class="join-how">${j.how}</div><div class="join-dev">${j.devices.map((d) => `<span>${escapeHtml(d)}</span>`).join('')}</div><button type="button" class="join-again" data-span="${j.span[0]}">Play this join</button></article>`).join('')
      : '<p class="joins-intro">No joins between sections are marked for this piece.</p>';
    keepTogether(ui.tabJoins);
  }
  on(ui.tabJoins, 'click', (e) => { const b = e.target.closest('.join-again'); if (b) seek(+b.dataset.span); });

  function renderComposerTab() {
    const c = track.composer;
    const portrait = c.portrait ? new URL(c.portrait, app.root).href : '';
    ui.tabComposer.innerHTML = `<div class="bio-head">${portrait ? `<img src="${portrait}" alt="" style="object-position:${c.focus}">` : '<span></span>'}<div><h2>${c.name}</h2><span class="dates">${c.dates}</span></div></div>
<p class="epi">${c.epithet}</p>${c.quote ? `<blockquote>“${c.quote.text}”<br><small>— ${c.quote.source}</small></blockquote>` : ''}${c.background}
<dl><div><dt>Born</dt><dd>${c.born}</dd></div>${c.died ? `<div><dt>Died</dt><dd>${c.died}</dd></div>` : ''}${c.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
<div class="inherit"></div>
${c.page === null ? '' : `<a class="more-link" href="${new URL(c.page ?? `composers/${c.slug}.html`, app.root).href}">${c.era === 'before-bach' || (c.page ?? '').startsWith('origins') ? 'Before Bach: origins of this music' : 'Composer chapter: life, scores, paintings'}</a>`}`;
    keepTogether(ui.tabComposer);
    const t0 = track;
    influence().then((all) => {
      const mine = all?.[c.slug];
      if (!mine || track !== t0 || (!mine.in?.length && !mine.out?.length)) return;
      const item = (e, dir) => `<li><a href="${new URL(`influence.html#edge-${e.id}`, app.root).href}"><span class="ih-y">${e.year ?? ''}</span><span class="ih-t">${escapeHtml(e.title)}</span><span class="ih-w">${dir === 'in' ? 'from' : 'to'} ${escapeHtml(e.name ?? e.from ?? e.to ?? '')} · ${escapeHtml(e.kind)}</span></a></li>`;
      $('.inherit', ui.tabComposer).innerHTML = `<h3 class="tab-h">Influences</h3>
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
    // An empty value reads "Unknown" (or "Not applicable"), as on the Sources page, never a bare dash.
    const field = (f) => {
      const value = f.value || (f.status === 'not applicable' ? 'Not applicable' : 'Unknown');
      const note = f.value ? `${f.statusText}${f.note ? ` — ${escapeHtml(f.note)}` : ''}` : escapeHtml(f.note ?? '');
      return `<div class="st-${f.status.replace(' ', '-')}"><dt>${f.label}</dt><dd>${escapeHtml(value)}${f.src.length ? ` <sup>${f.src.join(',')}</sup>` : ''}${note ? `<small>${note}</small>` : ''}${f.alts.map((a) => `<small class="alt">or: ${escapeHtml(a)}</small>`).join('')}</dd></div>`;
    };
    const dossier = d ? `<p class="dossier-key" aria-hidden="true"><span class="st-documented">Documented</span><span class="st-inferred">Inferred</span><span class="st-disputed">Disputed</span><span>Unknown</span></p><dl class="dossier">${d.fields.map(field).join('')}</dl>
<p class="credit">${escapeHtml(d.credit)}${d.licenseUrl ? ` · <a href="${d.licenseUrl}" target="_blank" rel="noopener">licence</a>` : ''}</p>
<ol class="sources">${d.sources.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${escapeHtml(s.title)}</a>${s.locator ? ` — ${escapeHtml(s.locator)}` : ''}</li>`).join('')}</ol>`
      : `<dl class="dossier"><div><dt>Performers</dt><dd>${escapeHtml(t.performers)}</dd></div><div><dt>Recording</dt><dd><a href="${t.sourcePage}" target="_blank" rel="noopener">${host(t.sourcePage)}</a> · ${escapeHtml(t.license)}</dd></div></dl>`;
    const cite = `${t.composer.name}, <i>${escapeHtml(t.work)}</i>${t.movement ? `, ${escapeHtml(t.movement)}` : ''}. ${escapeHtml(t.performers)}. Audio: <a href="${t.sourcePage}" target="_blank" rel="noopener">${host(t.sourcePage)}</a>. Notes: Contrapunctus, ${location.href.split('#')[0]}#${t.id}.`;
    ui.tabPiece.innerHTML = `<h2>${t.work}${t.movement ? `<small>${t.movement}</small>` : ''}</h2>
<p class="intro">${t.intro}</p>${t.workPage ? `<p class="work-link"><a href="${new URL(t.workPage, app.root).href}">Work page: every recording, with all its notes</a></p>` : ''}
<dl>${t.year ? `<div><dt>Composed</dt><dd>${t.year}</dd></div>` : ''}${t.key ? `<div><dt>Key</dt><dd>${t.key}</dd></div>` : ''}<div><dt>Forces</dt><dd>${t.forces}</dd></div></dl>
<h3 class="tab-h">Recording details</h3>${dossier}
<h3 class="tab-h">Form</h3><ol class="sec-list">${t.sections.map((s) => `<li data-t="${s.t}" tabindex="0"><span>${fmt(s.t)}</span><span>${s.label}</span></li>`).join('')}</ol>
<h3 class="tab-h">All listening notes</h3><ol class="cue-list">${t.cues.map((c) => `<li data-t="${c.t}" data-kind="${c.kind}" tabindex="0"><span>${fmt(c.t)}</span><span>${c.title}</span></li>`).join('')}</ol>
<div class="others"></div>
<h3 class="tab-h">Citation</h3><p class="cite">${cite}</p>`;
    keepTogether(ui.tabPiece);
    const t0 = t;
    compareIndex().then((idx) => {
      const mine = idx?.[t.id];
      if (!mine?.length || track !== t0) return;
      $('.others', ui.tabPiece).innerHTML = `<h3 class="tab-h">Other performances</h3><ul class="others-l">${mine.map((e) => `<li><a href="${new URL(`compare/${e.compare}.html`, app.root).href}">${escapeHtml(e.label)}</a></li>`).join('')}</ul>`;
    });
  }
  on(ui.tabPiece, 'click', (e) => { const li = e.target.closest('li[data-t]'); if (li) seek(+li.dataset.t); });
  on(ui.tabPiece, 'keydown', playRow);
  $$('.tabs button').forEach((b) => on(b, 'click', () => {
    $$('.tabs button').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
    $$('.tab').forEach((p) => { p.hidden = p.dataset.panel !== b.dataset.tab; });
    if (track && !ui.tabComposer.hidden && !ui.tabComposer.childNodes.length) renderComposerTab();
    if (track && !ui.tabPiece.hidden && !ui.tabPiece.childNodes.length) renderPieceTab();
    wake();
  }));

  // ================================================================= timeline
  // The timeline names each section by its letter (A, B, Dev, A′, Coda); the full label is in "This section".
  function renderSections() {
    const d = track.duration;
    ui.tlSections.innerHTML = track.sections.map((s, i) => {
      const end = track.sections[i + 1]?.t ?? d;
      return `<span style="left:${(s.t / d) * 100}%;width:${((end - s.t) / d) * 100}%" title="${escapeHtml(s.label)}">${escapeHtml(s.m || s.label)}</span>`;
    }).join('');
  }
  function renderJoinMarkers() {
    const d = track.duration;
    ui.tlJoins.innerHTML = track.transitions.map((j, i) => `<button type="button" style="left:${(j.at / d) * 100}%" data-join="${i}" title="Join: ${escapeHtml(plainTitle(j.title))}" aria-label="Join at ${fmt(j.at)}: ${escapeHtml(plainTitle(j.title))}">◆</button>`).join('');
  }
  on(ui.tlJoins, 'pointerdown', (e) => e.stopPropagation());
  on(ui.tlJoins, 'click', (e) => { const b = e.target.closest('[data-join]'); if (b) seek(track.transitions[+b.dataset.join].span[0]); });
  let timelineTrack = null, timelineEnv = null, timelineDpr = 0;
  const timelineLayers = [document.createElement('canvas'), document.createElement('canvas')];
  function drawTimeline() {
    const cv = ui.tlCanvas, dpr = Math.min(2, devicePixelRatio || 1);
    const w = cv.clientWidth, h = cv.clientHeight;
    if (!w || !track || document.hidden || !visible.timeline) return;
    const width = Math.floor(w * dpr), height = Math.floor(h * dpr);
    const d = track.duration || 1, now = player.time, mid = h * 0.55;
    if (timelineTrack !== track || timelineEnv !== env || timelineDpr !== dpr || cv.width !== width || cv.height !== height) {
      cv.width = width; cv.height = height;
      timelineTrack = track; timelineEnv = env; timelineDpr = dpr;
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
    g.fillStyle = 'rgba(233,207,140,.75)';
    for (const c of track.cues) { g.beginPath(); g.arc(Math.max(2, (c.t / d) * w), h - 2.5, 2, 0, Math.PI * 2); g.fill(); }
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
    if (ok) offerTour();
  }
  // One invitation, in the notes column, once the concert has begun on a first visit; never after a tour.
  const hint = $('.hall-hint');
  function offerTour() {
    if (!hint || app.hallGuideSeen || document.documentElement.classList.contains('cp-touring')) return;
    let seen = false; try { seen = !!localStorage.getItem('cp-hall-guide'); } catch {}
    if (seen) return;
    hint.hidden = false; app.hallGuideSeen = true;
    try { localStorage.setItem('cp-hall-guide', 'seen'); } catch {}
  }
  on($('.hall-hint-close'), 'click', () => { hint.hidden = true; try { localStorage.setItem('cp-hall-guide', 'dismissed'); } catch {} });
  // The icons are drawn in CSS from the label; no glyph to fall back to emoji.
  const playState = () => { ui.play.setAttribute('aria-label', player.playing ? 'Pause' : 'Play'); };
  on(ui.play, 'click', () => (player.playing ? player.pause() : begin()));
  on($('.t-next'), 'click', () => player.next());
  on($('.t-prev'), 'click', () => (player.time > 5 ? seek(0) : player.prev()));
  // The site's navigation folds behind Menu on narrow screens, as on every other page.
  const menu = $('.r-menu'), nav = $('.r-nav');
  const setMenu = (open) => { nav.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); menu.textContent = open ? 'Close' : 'Menu'; };
  on(menu, 'click', () => setMenu(!nav.classList.contains('open')));
  on(nav, 'click', (e) => { if (e.target.closest('a')) setMenu(false); });
  on(document, 'click', (e) => { if (nav.classList.contains('open') && !e.target.closest('.r-top')) setMenu(false); });
  // The programme is a drawer over a scrim: Escape, the scrim or × close it, and focus returns to its button.
  function setProg(open, { focus = true } = {}) {
    ui.prog.hidden = !open; ui.scrim.hidden = !open;
    ui.progBtn.setAttribute('aria-expanded', String(open));
    if (open && focus) ui.prog.focus({ preventScroll: true });
    else if (!open && focus && (ui.prog.contains(document.activeElement) || document.activeElement === document.body)) ui.progBtn.focus({ preventScroll: true });
  }
  on(window, 'keydown', (e) => {
    if (e.key === 'Escape') {
      if (!ui.prog.hidden) { setProg(false); return; }
      if (nav.classList.contains('open')) { setMenu(false); menu.focus(); return; }
      if (document.body.classList.contains('wide')) { setWide(false); return; }
    }
    if (e.target.closest('input, textarea, button, a, [role="slider"], summary, li[data-t], .fm-sec') || document.querySelector('dialog[open]') || !ui.prog.hidden) return;
    if (e.code === 'Space') { e.preventDefault(); ui.play.click(); }
    if (e.key === 'n' || e.key === 'N') player.next();
    if (e.key === 'f' || e.key === 'F') widen.click();
    if (e.key === 'p' || e.key === 'P') player.prev();
  });
  on(ui.progBtn, 'click', () => setProg(ui.prog.hidden));
  on($('.prog-close'), 'click', () => setProg(false));
  on(ui.scrim, 'click', () => setProg(false));
  // One concert recording from anywhere, never the one already playing.
  const surprise = () => { const pool = P.filter((x) => x.concert !== false && x.id !== player.track?.id); return pool[Math.floor(Math.random() * pool.length)]?.id; };
  on(ui.prog, 'click', async (e) => {
    const evening = e.target.closest('button[data-programme]');
    if (evening) { setProg(false); await player.setQueue(evening.dataset.programme || null, { play: true }); queueState(); return; }
    if (e.target.closest('button[data-surprise]')) { setProg(false); await player.setQueue(null); await player.load(surprise(), { play: true }); return; }
    const unkeep = e.target.closest('button[data-unkeep]');
    if (unkeep) { const list = kept(); list.splice(+unkeep.dataset.unkeep, 1); saveKept(list); renderKept(); return; }
    const moment = e.target.closest('button[data-kept]');
    if (moment) {
      const k = kept()[+moment.dataset.kept];
      if (!k || !P.some((x) => x.id === k.id)) return;
      setProg(false);
      if (player.queue && !player.queue.ids.includes(k.id)) await player.setQueue(null);
      await player.load(k.id, { play: true, t: k.t });
      return;
    }
    const b = e.target.closest('button[data-id]'); if (!b) return;
    setProg(false);
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
    // The evening's title may shorten; its place in the evening never does.
    ui.progBtn.innerHTML = n >= 0 ? `<span class="tp-t">${escapeHtml(q.title)}</span><span class="tp-n">&nbsp;· ${n + 1}&nbsp;of&nbsp;${q.ids.length}</span>` : '<span class="tp-t">Programme</span>';
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
    $('ol', keptBox).innerHTML = list.map((k, i) => `<li><button data-kept="${i}"><span class="p-c">${escapeHtml(k.composer)}</span><span class="p-w">${titleHtml(k.title)} · ${escapeHtml(k.work)}</span><span class="p-d">${fmt(k.t)}</span></button><button type="button" class="p-unkeep" data-unkeep="${i}" aria-label="Forget this moment">×</button></li>`).join('');
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
    player.on('track', (t) => { clearSpectro(); show(t); queueState(); }),
    player.on('queue', () => queueState()),
    player.on('queue-end', () => setProg(true, { focus: false })),
    player.on('blocked', (b) => { ui.curtain.hidden = !b; document.body.classList.toggle('waiting', b); }),
    player.on('advance', ({ from, to, interlude }) => {
      if (!interlude || reduced || !to) return;
      // Within one work the hall only marks the new movement; a new work gets the full interlude.
      const sameWork = from?.set && to.set && from.set.id === to.set.id;
      ui.interlude.classList.toggle('mv', !!sameWork);
      if (to.era?.accent) ui.interlude.style.setProperty('--era', to.era.accent); else ui.interlude.style.removeProperty('--era');
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
    // The next section by its letter only, keeping the line short; its full name appears above when it begins.
    text(ui.nsNext, nextSec ? `Next section in ${fmt(nextSec.t - t)}: ${nextSec.m || nextSec.label}` : '');
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
    text(ui.chord, ch ? ch.label : '');
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
  // The spectrogram keeps scrolling (at the analysis rate) while another view is shown, so Sound opens on the
  // recent past instead of an empty panel. Re-sizing keeps what is drawn, right-aligned at the same time scale.
  function setupSpectro() {
    const cv = ui.spectro; dprS = Math.min(1.5, devicePixelRatio || 1);
    const w = Math.round(cv.clientWidth * dprS), h = Math.round(cv.clientHeight * dprS);
    if (!w || !h) return;
    // C2…C8: the C1 line is the frame's bottom edge, where its label would be cut.
    ui.axis.innerHTML = Array.from({ length: OCT - 1 }, (_, k) => `<span style="top:${(1 - (k + 1) / OCT) * 100}%"><b>C${k + 2}</b></span>`).join('');
    if (sg && w === sgW && h === sgH) return;
    let old = null;
    if (sg) { old = document.createElement('canvas'); old.width = sgW; old.height = sgH; old.getContext('2d').drawImage(cv, 0, 0); }
    sgW = w; sgH = h; cv.width = w; cv.height = h;
    sg = cv.getContext('2d');
    clearSpectro();
    if (old) { const ow = old.width * (h / old.height); sg.drawImage(old, w - ow, 0, ow, h); }
    colImg = sg.createImageData(3, sgH);
    rows = null;
  }
  function clearSpectro() { if (sg) { sg.fillStyle = '#060504'; sg.fillRect(0, 0, sgW, sgH); } }
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
  /** Scroll by the time elapsed since the last column (96 px a second), then paint the newest column. */
  function drawSpectro(ms) {
    if (!sg) return;
    if (!rows || rowsA4 !== A4) buildRows();
    const dx = Math.max(1, Math.round(Math.min(ms, 250) * 0.096 * dprS));
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
  let chordHold = { name: '', n: 0 }, shownChord = '', chordTones = [], lastRead = 0, lastColumn = 0;
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
    // Pitch names are never smaller than 0.72rem; on a small wheel the ring narrows so they stay inside the canvas.
    const S = wSize, c = S / 2, fsz = Math.max(11.5, S * 0.068);
    const rl = Math.min(S * 0.465, c - fsz * 0.72), r1 = Math.min(S * 0.4, rl - fsz * 0.85), r0 = Math.min(S * 0.25, r1 - 6);
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
      // Never fainter than about 4.5:1 on the night ground.
      wg.font = `${inChord ? 'italic 600 ' : '500 '}${fsz.toFixed(1)}px "EB Garamond", serif`;
      wg.textAlign = 'center'; wg.textBaseline = 'middle';
      wg.fillStyle = inChord ? '#f6e3a8' : `rgba(239,229,210,${0.55 + v * 0.45})`;
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
    if (player.playing && (visible.wheel || visible.view) && ensureAnalyser()) {
      const sound = visible.view && view === 'sound';
      if (sound || now - lastColumn >= 120) {
        analyser.getFloatFrequencyData(freq);
        drawSpectro(lastColumn ? now - lastColumn : 16.7); lastColumn = now;
        if (sound) drawKeys();
        if (visible.wheel) analyse();
      }
    } else {
      lastColumn = 0;
      if (!scoreCovers(player.time) && visible.wheel) {
        for (let p = 0; p < 12; p++) chroma[p] *= 0.96;
        wheelDirty = true;
      }
    }
    if (visible.wheel && wheelDirty) { drawWheel(); wheelDirty = false; }
    if (player.playing || --settling > 0) raf = requestAnimationFrame(frame);
  }
  on(document, 'visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
    else { tick(true); wheelDirty = true; wake(); }
  });
  // Drawings sized to their frame (form, orchestra) are redrawn at the new size.
  const onResize = () => { setupSpectro(); if (view === 'sound') setupKeys(); else if (view === 'form' || view === 'orchestra') setView(view); setupWheel(); drawTimeline(); wheelDirty = true; wake(); };
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
  wake();
  // Loading the hall or restoring a session is not consent to download cross-origin audio.
  if (!player.playing) {
    const ok = navigator.userActivation?.hasBeenActive ? await player.play() : false;
    ui.curtain.hidden = ok;
    document.body.classList.toggle('waiting', !ok);
    if (ok) offerTour();
  } else { ui.curtain.hidden = true; offerTour(); }
  $('.begin').disabled = false;
  $('.begin').textContent = 'Begin the concert';

  return () => { alive = false; cancelAnimationFrame(raf); viewObj?.destroy?.(); cleanups.forEach((f) => { try { f(); } catch {} }); };
}

function roman(n) { return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'][n] ?? String(n); }
/** A movement already numbered in its title ("I. Allegro con brio", "5. Der Lindenbaum") does not repeat its number;
 *  others say where they stand in the set. build.mjs applies the same rule to the first recording. */
function movementLabel(t) {
  if (!t.set || /^(No\.\s*)?([IVXLC]+|\d+)[.:·\s]/.test(t.movement ?? '')) return t.movement ?? '';
  const n = (k) => (t.set.of <= 12 ? roman(k) : String(k));
  return `${t.movement} (${n(t.set.part)} of ${n(t.set.of)})`;
}
// Compounds such as "E-minor" and "thirty-nine" stay on one line (the fonts have no non-breaking hyphen).
const COMPOUND = /\b[A-G][♭♯]?-(?:major|minor|flat|sharp)\b|\b(?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)-(?:one|two|three|four|five|six|seven|eight|nine|first|second|third|fourth|fifth|sixth|seventh|eighth|ninth)\b/gi;
function keepTogether(root) {
  const nodes = [], walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walk.nextNode()) { COMPOUND.lastIndex = 0; if (COMPOUND.test(walk.currentNode.data)) nodes.push(walk.currentNode); }
  for (const node of nodes) {
    const frag = document.createDocumentFragment(), text = node.data;
    let last = 0;
    text.replace(COMPOUND, (m, at) => { frag.append(text.slice(last, at)); const s = document.createElement('span'); s.className = 'nw'; s.textContent = m; frag.append(s); last = at + m.length; return m; });
    frag.append(text.slice(last));
    node.replaceWith(frag);
  }
}
function escapeHtml(s = '') { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
/** Note and join titles may italicise a work title with <i>…</i>; every other tag is escaped. */
function titleHtml(s = '') { return escapeHtml(s).replace(/&lt;(\/?)i&gt;/g, '<$1i>'); }
function plainTitle(s = '') { return String(s).replace(/<\/?i>/g, ''); }
// Evidence links read as the name of their source, not as a raw address.
const SOURCES = [[/(^|\.)wikipedia\.org$/, 'Wikipedia'], [/(^|\.)wikisource\.org$/, 'Wikisource'], [/^commons\.wikimedia\.org$/, 'Wikimedia Commons'], [/(^|\.)archive\.org$/, 'Internet Archive'],
  [/(^|\.)imslp\.(org|eu|tw)$/, 'IMSLP'], [/^mutopiaproject\.org$/, 'Mutopia Project'], [/^gutenberg\.org$/, 'Project Gutenberg'], [/^loc\.gov$/, 'Library of Congress'],
  [/^adp\.library\.ucsb\.edu$/, 'Discography of American Historical Recordings'], [/^hyperion-records\.co\.uk$/, 'Hyperion Records'], [/^musescore\.com$/, 'MuseScore'], [/^kb\.dk$/, 'Royal Danish Library'],
  [/^catalogue\.bnf\.fr$/, 'Bibliothèque nationale de France'], [/^henle\.de$/, 'G. Henle Verlag'], [/^bso\.org$/, 'Boston Symphony Orchestra'], [/^laphil\.com$/, 'Los Angeles Philharmonic'],
  [/^mahlerfoundation\.org$/, 'Mahler Foundation'], [/^universaledition\.com$/, 'Universal Edition'], [/^chopin\.nifc\.pl$/, 'Fryderyk Chopin Institute'], [/^hdl\.handle\.net$/, 'Handle.net'],
  [/^(internet\.)?beethoven\.de$/, 'Beethoven-Haus Bonn'], [/^dme\.mozarteum\.at$/, 'Mozarteum Digital Edition'], [/^berliner-philharmoniker\.de$/, 'Berliner Philharmoniker']];
function sourceName(url) {
  let host = ''; try { host = new URL(url.replace(/&amp;/g, '&')).hostname.replace(/^www\./, ''); } catch { return url; }
  return SOURCES.find(([re]) => re.test(host))?.[1] ?? host;
}
function linkify(s) { return s.replace(/https?:\/\/[^\s<]+[^\s<.,;:)]/g, (u) => `<a href="${u}" target="_blank" rel="noopener">${sourceName(u)}</a>`); }
