// Listen page: one recording, its guide and three views (Score, Map, Sound).
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const SVGNS = 'http://www.w3.org/2000/svg';
const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const VOICES = ['--v1', '--v2', '--v3', '--v4', '--v5', '--v6', '--v7', '--v8'];
const NAMES = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
const KIND = { music: 'In the music', form: 'The form', listen: 'Listen for', life: 'The life', world: 'Around the music' };
const BASIS = {
  'score-aligned': 'From the score, timed by aligning the score to this recording',
  'score-proportion': 'Placed from the score’s proportions; timing approximate',
  'audio-feature': 'Located by measuring this recording',
  documented: 'Documented fact',
  general: 'General description of this stretch',
};
const REL = { 'literal repeat': 'literal', 'varied return': 'varied', 'tonal return': 'tonal', 'transposed return': 'transposed' };

export async function mount(main, app) {
  const data = JSON.parse($('[data-track]', main).textContent);
  const { player, fmt } = app;
  const params = new URLSearchParams(location.search);
  const music = data.cues.filter((c) => c.lane === 'music');
  const context = data.cues.filter((c) => c.lane === 'context');
  let startT = Number(params.get('t')) || 0;
  const byId = params.get('n') && data.cues.find((c) => c.id === params.get('n'));
  if (byId) startT = byId.t;
  const isMine = () => player.track?.id === data.id;
  const now = () => (isMine() ? player.position : startT);
  let alive = true;
  let raf = 0;
  const cleanups = [];

  // ------------------------------------------------------------ play button
  const playBtn = $('[data-play-page]', main);
  const playLabel = playBtn.querySelector('span');
  const syncPlayBtn = () => { playLabel.textContent = isMine() && player.playing ? 'Pause' : `${isMine() && player.position > 1 ? 'Resume' : 'Play'} · ${fmt(data.duration)}`; };
  playBtn.addEventListener('click', async () => {
    if (isMine()) { player.toggle(); return; }
    await player.load(data.id, { t: startT, play: true });
  });
  cleanups.push(player.on('state', syncPlayBtn), player.on('track', syncPlayBtn));
  // if nothing is playing, cue this recording in the rail without downloading it
  if (!player.track || (!player.playing && player.track.id !== data.id)) await player.load(data.id, { t: startT });
  syncPlayBtn();

  const seekTo = async (t) => {
    if (!isMine()) await player.load(data.id, { t, play: true });
    else { player.seek(t); if (!player.playing) player.play(); }
    held = false; holdBtn.setAttribute('aria-pressed', 'false');
    render(true);
  };

  // ------------------------------------------------------------ cue column
  const el = {
    cue: $('[data-cue]', main), kind: $('[data-cue-kind]', main), when: $('[data-cue-when]', main), title: $('[data-cue-title]', main), text: $('[data-cue-text]', main), how: $('[data-cue-how]', main),
    ctxTitle: $('[data-context-title]', main), ctxText: $('[data-context-text]', main), transcript: $('[data-transcript]', main),
  };
  const holdBtn = $('[data-cue-hold]', main);
  let held = false, shownCue = -1, shownCtx = -1;
  const idxAt = (list, t) => { let i = -1; for (let k = 0; k < list.length; k++) { if (list[k].t <= t + 0.05) i = k; else break; } return i; };
  function showCue(i) {
    if (i === shownCue) return;
    shownCue = i;
    const c = music[Math.max(0, i)];
    if (!c) return;
    el.cue.dataset.kind = c.kind;
    el.kind.textContent = KIND[c.kind] ?? c.kind;
    el.when.textContent = fmt(c.t);
    el.title.textContent = c.title;
    el.text.innerHTML = c.text;
    const prec = c.precision === 'moment' ? 'This note marks a specific moment located in the recording.' : 'This note describes a stretch of music; it may appear a little before or after what it describes.';
    el.how.innerHTML = `<span class="basis-tag">${BASIS[c.basis] ?? ''}.</span> ${escapeHtml(c.evidence || '')} ${prec}`;
    $$('li', el.transcript).forEach((li) => li.removeAttribute('aria-current'));
    const li = $$('li', el.transcript).find((x) => Number(x.dataset.t) === c.t && !x.classList.contains('ctx'));
    li?.setAttribute('aria-current', 'true');
    highlightMapCue(c);
  }
  function showCtx(i) {
    if (!el.ctxTitle || i === shownCtx || i < 0) return;
    shownCtx = i;
    el.ctxTitle.textContent = context[i].title;
    el.ctxText.innerHTML = context[i].text;
  }
  holdBtn.addEventListener('click', () => { held = !held; holdBtn.setAttribute('aria-pressed', String(held)); if (!held) render(true); });
  $('[data-cue-prev]', main).addEventListener('click', () => { const i = Math.max(0, shownCue - 1); seekTo(music[i].t); });
  $('[data-cue-next]', main).addEventListener('click', () => { const i = Math.min(music.length - 1, shownCue + 1); seekTo(music[i].t); });
  $('[data-cue-replay]', main).addEventListener('click', () => seekTo(music[Math.max(0, shownCue)]?.t ?? 0));
  el.transcript.addEventListener('click', (e) => { const b = e.target.closest('[data-seek-to]'); if (b) seekTo(Number(b.dataset.seekTo)); });
  $('[data-share]', main)?.addEventListener('click', async () => {
    const c = music[Math.max(0, shownCue)];
    const url = new URL(location.href);
    url.search = ''; url.hash = '';
    url.searchParams.set('t', String(Math.floor(c?.t ?? now())));
    if (c) url.searchParams.set('n', c.id);
    try { if (navigator.share) await navigator.share({ title: document.title, text: c?.title, url: url.href }); else { await navigator.clipboard.writeText(url.href); app.toast('Link to this moment copied'); } } catch {}
  });

  // ------------------------------------------------------------ lenses
  const board = $('[data-board]', main);
  const strip = $('[data-map-strip]', main);
  const key = $('[data-map-key]', main);
  const basisLabel = $('[data-lens-basis]', main);
  const tabs = $$('[role="tab"]', main);
  let lens = null;
  let score = null;
  let view = null;   // current board renderer { draw(t), destroy() }
  async function setLens(name, focus = false) {
    if (lens === name) return;
    lens = name;
    tabs.forEach((b) => { const on = b.dataset.lens === name; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
    view?.destroy?.();
    board.innerHTML = '';
    board.setAttribute('aria-labelledby', `lens-${name}`);
    if (name === 'score') view = await scoreView();
    else if (name === 'map') view = mapView(board, { big: true });
    else view = soundView();
    strip.hidden = name === 'map';
    render(true);
  }
  tabs.forEach((b, i) => {
    b.addEventListener('click', () => setLens(b.dataset.lens));
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      setLens(n.dataset.lens, true);
    });
  });

  // ------------------------------------------------------------ map (sections, returns, level, notes)
  let mapStrip = null;
  const highlightFns = [];
  function highlightMapCue(c) { highlightFns.forEach((f) => f(c)); }
  function mapView(host, opts = {}) {
    // Rebuild at the container's real width so labels stay readable on every screen.
    let inner = buildMap(host, opts);
    let lastW = host.clientWidth;
    const ro = new ResizeObserver(() => { if (Math.abs(host.clientWidth - lastW) > 24) { lastW = host.clientWidth; const t = now(); inner.destroy(); inner = buildMap(host, opts); inner.draw(t); } });
    ro.observe(host);
    return { draw: (t) => inner.draw(t), destroy() { ro.disconnect(); inner.destroy(); } };
  }
  function buildMap(host, { big = false } = {}) {
    const W = Math.max(320, Math.round(host.clientWidth || 1000)), H = big ? (W < 600 ? 230 : 300) : (W < 600 ? 120 : 130);
    const relH = data.relations.length ? (big ? 90 : 34) : (big ? 20 : 8);
    const secY = relH + 6, secH = big ? 30 : 22, lvlY = secY + secH + (big ? 14 : 6), lvlH = H - lvlY - (big ? 28 : 16);
    const x = (t) => (t / data.duration) * W;
    const svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('class', 'mapsvg');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', `Map of the recording: ${data.sections.length} sections${data.relations.length ? `, ${data.relations.length} returns` : ''}, with the relative level over time.`);
    let s = '';
    // returns as arcs between spans
    data.relations.forEach((r, i) => {
      const k = REL[r.kind] ?? 'varied';
      const a = (r.a[0] + r.a[1]) / 2, b = (r.b[0] + r.b[1]) / 2;
      const h = Math.min(relH - 6, (x(b) - x(a)) * 0.35 + 10);
      s += `<g class="rel" data-rel="${i}"><rect class="span ${k}" x="${x(r.a[0])}" y="${relH - 4}" width="${x(r.a[1]) - x(r.a[0])}" height="4" /><rect class="span ${k}" x="${x(r.b[0])}" y="${relH - 4}" width="${x(r.b[1]) - x(r.b[0])}" height="4"/><path class="arc ${k}" d="M${x(a)},${relH - 5} Q${(x(a) + x(b)) / 2},${relH - 5 - h * 2} ${x(b)},${relH - 5}"/></g>`;
    });
    // sections
    data.sections.forEach((sec, i) => {
      const end = data.sections[i + 1]?.t ?? data.duration;
      const w = x(end) - x(sec.t);
      s += `<g class="sec" data-sec="${i}"><rect x="${x(sec.t)}" y="${secY}" width="${w}" height="${secH}" rx="2"/>${w > 60 ? `<text x="${x(sec.t) + 6}" y="${secY + secH / 2 + 4.5}">${escapeHtml(truncate(sec.label, Math.floor(w / 7.2)))}</text>` : ''}</g>`;
    });
    // level trace (mirrored silhouette): unplayed and played layers clipped by the playhead
    const env = data.env;
    if (env.length) {
      const mid = lvlY + lvlH / 2;
      const pts = env.map((v, i) => `${(i / env.length) * W},${mid - (v ** 1.6) * lvlH / 2}`);
      const low = env.map((v, i) => `${(i / env.length) * W},${mid + (v ** 1.6) * lvlH / 2}`).reverse();
      const poly = [...pts, ...low].join(' ');
      const cid = `clip-${Math.random().toString(36).slice(2)}`;
      s += `<defs><clipPath id="${cid}"><rect class="played-clip" x="0" y="0" width="0" height="${H}"/></clipPath></defs><polygon class="lvl" points="${poly}"/><polygon class="lvl-played" points="${poly}" clip-path="url(#${cid})"/>`;
    }
    // cue marks: ticks for moments, brackets for passages
    data.cues.filter((c) => c.lane === 'music').forEach((c, i, arr) => {
      const end = arr[i + 1]?.t ?? data.duration;
      if (c.precision === 'passage') s += `<rect class="bracket" data-cue-mark="${c.id}" x="${x(c.t)}" y="${lvlY}" width="${Math.max(2, x(end) - x(c.t))}" height="${lvlH}"/>`;
      s += `<line class="cue-tick" data-cue-tick="${c.id}" x1="${x(c.t)}" x2="${x(c.t)}" y1="${lvlY + lvlH + 2}" y2="${lvlY + lvlH + (big ? 10 : 7)}"/>`;
    });
    // time axis
    const step = data.duration > 600 ? 120 : data.duration > 240 ? 60 : 30;
    for (let t = 0; t <= data.duration; t += step) s += `<g class="axis"><text x="${x(t) + 2}" y="${H - 2}">${fmt(t)}</text></g>`;
    s += `<line class="head" x1="0" x2="0" y1="0" y2="${H - (big ? 14 : 10)}"/><rect class="hit" x="0" y="0" width="${W}" height="${H}"/>`;
    svg.innerHTML = s;
    host.append(svg);
    const head = $('.head', svg), clip = $('.played-clip', svg);
    const hit = $('.hit', svg);
    hit.addEventListener('click', (e) => {
      const r = svg.getBoundingClientRect();
      seekTo(((e.clientX - r.left) / r.width) * data.duration);
    });
    $$('.rel', svg).forEach((g) => { g.style.cursor = 'pointer'; g.addEventListener('click', (e) => { e.stopPropagation(); const r = data.relations[+g.dataset.rel]; seekTo(r.a[0]); }); });
    let lastSec = -1;
    const hl = (c) => {
      $$('[data-cue-mark]', svg).forEach((b) => b.classList.toggle('on', b.dataset.cueMark === c.id));
      $$('[data-cue-tick]', svg).forEach((tk) => tk.classList.toggle('on', tk.dataset.cueTick === c.id));
    };
    highlightFns.push(hl);
    if (big) {
      const ex = document.createElement('div');
      ex.className = 'explain';
      ex.innerHTML = `<b>How to read this.</b> Coloured blocks are the sections of the piece. ${data.relations.length ? 'Arcs join a passage to its return. Select an arc to hear the earlier passage. ' : ''}The grey shape is the <b>relative level</b> of this recording over time: louder is taller, measured within this recording only. Shaded: the stretch the current note describes.`;
      host.append(ex);
    }
    const exEl = big ? host.lastElementChild : null;
    return {
      draw(t) {
        const px = x(t);
        head.setAttribute('x1', px); head.setAttribute('x2', px);
        clip?.setAttribute('width', px);
        const si = idxAt(data.sections, t);
        if (si !== lastSec) { lastSec = si; $$('.sec', svg).forEach((g, k) => g.classList.toggle('on', k === si)); }
      },
      destroy() { highlightFns.splice(highlightFns.indexOf(hl), 1); svg.remove(); exEl?.remove(); },
    };
  }

  // map key under the strip
  const kinds = [...new Set(data.relations.map((r) => r.kind))];
  key.innerHTML = [
    ...kinds.map((k) => `<span><i style="border-color:var(--rel-${REL[k] ?? 'varied'})${k === 'transposed return' ? ';border-top-style:dashed' : ''}"></i>${k[0].toUpperCase() + k.slice(1)}</span>`),
    data.relations.length ? '' : '<span>No returns are marked in this recording.</span>',
    '<span>Grey shape: relative level within this recording</span>',
  ].join('');
  if (data.relations.length) {
    key.insertAdjacentHTML('afterend', `<ul class="returns">${data.relations.map((r, i) => `<li><button type="button" data-ret="${i}"><b>${escapeHtml(r.label)}</b> ${fmt(r.a[0])} → ${fmt(r.b[0])} · ${r.kind}${r.status === 'provisional' ? ' · provisional' : ''}</button></li>`).join('')}</ul>`);
    const ul = key.nextElementSibling;
    ul.addEventListener('click', (e) => { const b = e.target.closest('[data-ret]'); if (b) seekTo(data.relations[+b.dataset.ret].b[0]); });
    cleanups.push(() => ul.remove());
  }
  mapStrip = mapView(strip);

  // ------------------------------------------------------------ score roll
  async function scoreView() {
    if (!score) {
      try { score = await fetch(new URL(`assets/data/${data.id}/score.json`, app.base)).then((r) => r.json()); }
      catch { board.innerHTML = '<div class="placeholder">The score could not be loaded.</div>'; return { draw() {} }; }
    }
    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    board.append(canvas);
    const muted = new Set();
    const legend = document.createElement('div');
    legend.className = 'legend';
    legend.innerHTML = `<span class="label" style="margin-right:.25rem">Voices</span>` + score.voices.map((v, i) => `<button type="button" aria-pressed="true" data-voice="${i}"><i style="background:var(${VOICES[i % VOICES.length]})"></i>${escapeHtml(v.name)}</button>`).join('');
    legend.addEventListener('click', (e) => {
      const b = e.target.closest('[data-voice]'); if (!b) return;
      const i = +b.dataset.voice;
      // pressing a voice spotlights it; pressing again restores all
      const solo = muted.size === score.voices.length - 1 && !muted.has(i);
      muted.clear();
      if (!solo) score.voices.forEach((_, k) => { if (k !== i) muted.add(k); });
      $$('[data-voice]', legend).forEach((x) => x.setAttribute('aria-pressed', String(!muted.has(+x.dataset.voice))));
      draw(lastT, true);
    });
    const ex = document.createElement('div');
    ex.className = 'explain';
    ex.innerHTML = `<b>From the score · timing aligned to this recording.</b> Each bar is a written note: height is pitch, length is duration, colour is the voice. The red line is now. Timing was aligned automatically and is ${score.status === 'reviewed' ? `checked by ear (${escapeHtml(score.review?.by ?? '')})` : '<b>provisional</b>: not yet checked by ear'}. Score: ${escapeHtml(score.source?.title ?? '')}${score.source?.edition ? `, ${escapeHtml(score.source.edition)}` : ''}${score.source?.url ? ` (<a href="${score.source.url}">source</a>, ${escapeHtml(score.source.license ?? '')})` : ''}. Select a voice to follow it.`;
    board.append(legend, ex);
    basisLabel.textContent = 'From the score';

    const notes = score.notes;
    const lo = Math.min(...notes.map((n) => n[2])) - 2, hi = Math.max(...notes.map((n) => n[2])) + 2;
    const colours = score.voices.map((_, i) => css(VOICES[i % VOICES.length]));
    const ink = css('--ink'), muteC = css('--muted'), rule = css('--rule'), now = css('--now');
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, dpr = 1, lastT = -1;
    const fit = () => { dpr = Math.min(2, devicePixelRatio || 1); W = canvas.clientWidth; H = canvas.clientHeight; canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    fit();
    const ro = new ResizeObserver(() => { fit(); draw(lastT, true); });
    ro.observe(canvas);
    const reduced = app.reduced.matches;
    function draw(t, force) {
      if (!force && Math.abs(t - lastT) < 0.008) return;
      lastT = t;
      const span = W < 600 ? 9 : 14;
      // reduced motion: page by bar windows instead of scrolling
      let t0 = t - span * 0.3;
      if (reduced) { const page = Math.floor(t / (span * 0.8)); t0 = page * span * 0.8 - span * 0.1; }
      const t1 = t0 + span;
      const X = (s) => ((s - t0) / span) * W;
      const top = 22, bottom = H - (score.chords?.length ? 26 : 10);
      const Y = (m) => bottom - ((m - lo) / (hi - lo)) * (bottom - top);
      const nh = Math.max(4, Math.min(11, ((bottom - top) / (hi - lo)) * 0.8));
      ctx.clearRect(0, 0, W, H);
      // octave guides at each C
      ctx.font = `500 11px ${css('--ui')}`; ctx.textBaseline = 'middle';
      for (let m = Math.ceil(lo / 12) * 12; m <= hi; m += 12) {
        const y = Y(m); ctx.strokeStyle = rule; ctx.globalAlpha = 0.7; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); ctx.globalAlpha = 1;
        ctx.fillStyle = muteC; ctx.fillText(`C${m / 12 - 1}`, 4, y - 7);
      }
      // bar lines with numbers
      ctx.textBaseline = 'top';
      for (const b of score.bars) {
        if (b.t < t0 - 1 || b.t > t1) continue;
        const bx = X(b.t);
        ctx.strokeStyle = rule; ctx.beginPath(); ctx.moveTo(bx, top - 6); ctx.lineTo(bx, bottom + 4); ctx.stroke();
        ctx.fillStyle = muteC; ctx.fillText(b.occ > 1 ? `${b.n}′` : b.n, bx + 3, 4);
      }
      // notes
      for (const n of notes) {
        const [on, dur, m, v] = n;
        if (on > t1 || on + dur < t0) continue;
        const nx = X(on), nw = Math.max(3, (dur / span) * W - 1.5), ny = Y(m) - nh / 2;
        const active = on <= t && on + dur > t;
        const past = on + dur <= t;
        const dim = muted.has(v);
        ctx.globalAlpha = dim ? 0.12 : past ? 0.38 : active ? 1 : 0.78;
        ctx.fillStyle = colours[v];
        roundRect(ctx, nx, ny, nw, nh, Math.min(3, nh / 2)); ctx.fill();
        if (active && !dim) { ctx.globalAlpha = 1; ctx.strokeStyle = ink; ctx.lineWidth = 1.5; roundRect(ctx, nx - 1, ny - 1, nw + 2, nh + 2, 3); ctx.stroke(); }
      }
      ctx.globalAlpha = 1;
      // editorial chord labels
      if (score.chords?.length) {
        ctx.font = `600 13px ${css('--ui')}`; ctx.textBaseline = 'bottom'; ctx.fillStyle = ink;
        for (const c of score.chords) if (c.t1 > t0 && c.t0 < t1) ctx.fillText(c.label, Math.max(2, X(c.t0) + 3), H - 6);
      }
      // now line
      const hx = X(t);
      ctx.strokeStyle = now; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(hx, 0); ctx.lineTo(hx, H); ctx.stroke(); ctx.lineWidth = 1;
      // current pitches as text for the label
      const sounding = notes.filter((n) => n[0] <= t && n[0] + n[1] > t && !muted.has(n[3])).map((n) => NAMES[((n[2] % 12) + 12) % 12] + (Math.floor(n[2] / 12) - 1));
      basisLabel.textContent = sounding.length ? `Sounding now: ${[...new Set(sounding)].join(' · ')}` : 'From the score';
    }
    return { draw, destroy() { ro.disconnect(); canvas.remove(); legend.remove(); ex.remove(); basisLabel.textContent = ''; } };
  }

  // ------------------------------------------------------------ sound (live spectrogram, honestly labelled)
  function soundView() {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    board.append(canvas);
    const ex = document.createElement('div');
    ex.className = 'explain';
    ex.innerHTML = '<b>The raw sound, as it is heard now.</b> Height is frequency on a piano-like scale, time runs right to left over the last 12 seconds, brightness is energy. Every instrument sounds many frequencies at once: the lowest is the note you would name, the rest are its overtones, so one note draws several lines. This view shows colour and texture, not which notes are written.';
    board.append(ex);
    basisLabel.textContent = 'Measured live from the recording';
    const ctx = canvas.getContext('2d');
    let analyser = null, freq = null;
    try {
      const a = player.audio;
      const AC = window.AudioContext || window.webkitAudioContext;
      a._cpCtx ??= new AC();
      a._cpSrc ??= a._cpCtx.createMediaElementSource(a);
      if (!a._cpAn) { a._cpAn = a._cpCtx.createAnalyser(); a._cpAn.fftSize = 8192; a._cpAn.smoothingTimeConstant = 0.5; a._cpSrc.connect(a._cpAn); a._cpAn.connect(a._cpCtx.destination); }
      a._cpCtx.resume();
      analyser = a._cpAn; freq = new Float32Array(analyser.frequencyBinCount);
    } catch (err) { ex.insertAdjacentHTML('beforeend', ' <b>Live analysis is unavailable in this browser.</b>'); }
    const A4 = data.tuning?.hz || 440;
    const lowMidi = 24, octs = 7, span = 12;
    let W = 0, H = 0, dpr = 1, last = null, colX = 0;
    const fit = () => { dpr = Math.min(1.5, devicePixelRatio || 1); W = canvas.clientWidth; H = canvas.clientHeight; canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.fillStyle = css('--card'); ctx.fillRect(0, 0, W, H); };
    fit();
    const ro = new ResizeObserver(fit); ro.observe(canvas);
    const ink = [32, 35, 31], paper = [251, 249, 244], red = [141, 48, 40];
    function draw(t) {
      if (!analyser || !isMine() || !player.playing) return;
      const pps = W / span;
      const dt = last == null ? 0 : Math.max(0, Math.min(0.5, t - last));
      last = t;
      const shift = dt * pps;
      if (shift * dpr < 1) { last -= dt; return; }
      // scroll left by elapsed time, not by frames
      // shift by whole device pixels with smoothing off, so the history never blurs
      const sx = Math.min(canvas.width - 1, Math.round(shift * dpr));
      if (sx < 1) return;
      ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.imageSmoothingEnabled = false;
      ctx.drawImage(canvas, sx, 0, canvas.width - sx, canvas.height, 0, 0, canvas.width - sx, canvas.height);
      analyser.getFloatFrequencyData(freq);
      const binHz = analyser.context.sampleRate / analyser.fftSize;
      const rows = canvas.height;
      const img = ctx.createImageData(sx, rows);
      for (let y = 0; y < rows; y++) {
        const m1 = lowMidi + (1 - y / rows) * octs * 12, m0 = lowMidi + (1 - (y + 1) / rows) * octs * 12;
        const k0 = Math.max(1, Math.floor((A4 * 2 ** ((m0 - 69) / 12)) / binHz)), k1 = Math.max(k0, Math.ceil((A4 * 2 ** ((m1 - 69) / 12)) / binHz));
        let db = -200; for (let k = k0; k <= k1 && k < freq.length; k++) if (freq[k] > db) db = freq[k];
        let v = (db + 92) / 62; v = v < 0 ? 0 : v > 1 ? 1 : v; v = v ** 1.6;
        const c = v < 0.7 ? mix(paper, ink, v / 0.7) : mix(ink, red, (v - 0.7) / 0.3);
        for (let x = 0; x < sx; x++) { const o = (y * sx + x) * 4; img.data[o] = c[0]; img.data[o + 1] = c[1]; img.data[o + 2] = c[2]; img.data[o + 3] = 255; }
      }
      ctx.putImageData(img, canvas.width - sx, 0);
      ctx.restore();
      // octave labels
      ctx.font = `500 11px ${css('--ui')}`; ctx.fillStyle = css('--muted');
      for (let o = 1; o <= octs; o++) { const y = H - (o / octs) * H; ctx.fillText(`C${o + 1}`, 4, y + 12); }
    }
    return { draw, destroy() { ro.disconnect(); canvas.remove(); ex.remove(); basisLabel.textContent = ''; } };
  }

  // ------------------------------------------------------------ loop
  function render(force = false) {
    const t = now();
    if (!held) { showCue(idxAt(music, t)); showCtx(idxAt(context, t)); }
    view?.draw(t, force);
    mapStrip?.draw(t);
  }
  const loop = () => { if (!alive) return; render(); raf = requestAnimationFrame(loop); };
  await setLens(tabs[0].dataset.lens);
  showCue(Math.max(0, idxAt(music, startT)));
  raf = requestAnimationFrame(loop);
  cleanups.push(player.on('time', () => render(true)));

  return () => { alive = false; cancelAnimationFrame(raf); view?.destroy?.(); mapStrip?.destroy?.(); cleanups.forEach((f) => f?.()); };
}

function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, w, h, r) : ctx.rect(x, y, w, h); }
function mix(a, b, f) { return [0, 1, 2].map((i) => Math.round(a[i] + (b[i] - a[i]) * f)); }
function truncate(s, n) { return s.length > n ? `${s.slice(0, Math.max(1, n - 1))}…` : s; }
function escapeHtml(s = '') { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
