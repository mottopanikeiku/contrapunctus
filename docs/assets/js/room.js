// The Listening Room: continuous concert, live analysis of the sound, notes timed to the recording.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const fmt = (t) => { t = Math.max(0, t || 0); return `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`; };
  const NAMES = ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
  const FIFTHS = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];
  const KIND = { music: 'In the music', form: 'The form', listen: 'Listen for', life: 'The life', world: 'The world around it' };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let P = [];          // programme
  let idx = 0;         // current track
  let track = null;
  let env = null;      // loudness envelope of current track
  let cueIdx = -1;
  let sectionIdx = -1;
  let started = false;
  let A4 = 440;        // reference pitch of the current recording
  let advancing = false;

  // ------------------------------------------------------------- audio graph
  const audio = new Audio();
  audio.crossOrigin = 'anonymous';
  audio.preload = 'auto';
  let ctx = null, analyser = null, freq = null, wave = null;
  function ensureGraph() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    const src = ctx.createMediaElementSource(audio);
    analyser = ctx.createAnalyser();
    analyser.fftSize = 8192;
    analyser.smoothingTimeConstant = 0.55;
    analyser.minDecibels = -100;
    analyser.maxDecibels = -20;
    src.connect(analyser);
    analyser.connect(ctx.destination);
    freq = new Float32Array(analyser.frequencyBinCount);
    wave = new Float32Array(analyser.fftSize);
  }

  // ------------------------------------------------------------- UI refs
  const ui = {
    backdrop: $$('.backdrop img'), eraNum: $('.era-num'), eraName: $('.era-name'), given: $('.now-composer .given'), family: $('.now-composer .family'),
    work: $('.now-work .work'), movement: $('.now-work .movement'), meta: $('.now-meta'),
    cue: $('.cue-now'), kind: $('.cue-kind'), cueTitle: $('.cue-title'), cueText: $('.cue-text'), cueNext: $('.cue-next'), past: $('.cue-past'),
    tabComposer: $('.tab-composer'), tabPiece: $('.tab-piece'),
    play: $('.t-play'), cur: $('.t-cur'), dur: $('.t-dur'), timeline: $('.timeline'), tlCanvas: $('.tl-canvas'), tlSections: $('.tl-sections'), head: $('.tl-head'),
    progBtn: $('.t-prog'), prog: $('.programme'), curtain: $('.curtain'), interlude: $('.interlude'),
    cameo: $('.oval-r img'), cameoCap: $('.cameo-r figcaption'), chord: $('.chord'), bass: $('.ro-bass'), top: $('.ro-top'),
    loud: $('.meter:not(.bright) span'), bright: $('.meter.bright span'), axis: $('.spectro-axis'), spectro: $('.spectro'), wheel: $('.wheel'),
  };
  let backdropFront = 0;

  // ------------------------------------------------------------- load a track
  async function load(i, { autoplay = true } = {}) {
    idx = (i + P.length) % P.length;
    track = P[idx];
    cueIdx = -1; sectionIdx = -1; env = null;
    A4 = track.tuning || 440;
    const t = track, c = t.composer;
    document.body.style.setProperty('--accent', t.era?.accent ?? '#c9a65a');
    history.replaceState(null, '', `#${t.id}`);
    document.title = `${c.name} — ${t.work} · The Listening Room`;

    // backdrop crossfade when the period's painting changes
    if (t.era?.hero) {
      const front = ui.backdrop[backdropFront];
      if (!front.src.endsWith(t.era.hero)) {
        const back = ui.backdrop[1 - backdropFront];
        back.src = t.era.hero;
        back.onload = () => { back.classList.add('on'); front.classList.remove('on'); backdropFront = 1 - backdropFront; };
      }
    }
    ui.eraNum.textContent = t.era?.numeral ?? '';
    ui.eraName.textContent = t.era ? `${t.era.name} · ${t.era.span}` : '';
    ui.given.textContent = c.given ?? '';
    ui.family.textContent = c.family ?? c.name;
    ui.work.textContent = t.work;
    ui.movement.textContent = t.movement;
    ui.meta.textContent = [t.year, t.key, t.forces, t.performers, A4 !== 440 ? `pitch A = ${A4} Hz (the visualizer listens at this pitch)` : ''].filter(Boolean).join(' · ');
    ui.cameo.src = c.portrait ?? '';
    ui.cameo.style.objectPosition = c.focus;
    ui.cameo.alt = c.name;
    ui.cameoCap.textContent = c.dates;
    renderComposerTab(); renderPieceTab();
    ui.past.innerHTML = '';
    showCue(-1);
    renderSections();
    $$('.programme li button').forEach((b) => b.classList.toggle('on', b.dataset.id === t.id));

    audio.src = t.stream;
    audio.load();
    ui.dur.textContent = fmt(t.duration);
    fetch(`assets/listen/${t.id}.json`).then((r) => r.ok ? r.json() : null).then((j) => { if (track === t) { env = j; drawTimeline(); } }).catch(() => {});
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({ title: `${t.work}${t.movement ? ' · ' + t.movement : ''}`, artist: c.name, album: 'The Listening Room — Contrapunctus', artwork: c.portrait ? [{ src: new URL(c.portrait, location.href).href }] : [] });
    }
    if (autoplay && started) play();
    drawTimeline();
  }

  function play() {
    ensureGraph();
    ctx.resume();
    return audio.play().then(() => { started = true; ui.curtain.hidden = true; document.body.classList.remove('waiting'); }).catch((e) => {
      if (e.name === 'NotAllowedError') ui.curtain.hidden = false; document.body.classList.add('waiting');
    });
  }

  // ------------------------------------------------------------- cues
  function cueAt(t) {
    const cs = track.cues; let i = -1;
    for (let k = 0; k < cs.length; k++) { if (cs[k].t <= t + 0.05) i = k; else break; }
    return i;
  }
  function showCue(i) {
    cueIdx = i;
    const c = track.cues[Math.max(0, i)] ?? { kind: 'listen', title: track.work, text: track.intro };
    ui.cue.dataset.kind = c.kind;
    ui.kind.textContent = KIND[c.kind] ?? c.kind;
    ui.cueTitle.textContent = c.title;
    ui.cueText.innerHTML = c.text;
    if (!reduced) { ui.cue.classList.remove('enter'); void ui.cue.offsetWidth; ui.cue.classList.add('enter'); }
    ui.past.innerHTML = track.cues.slice(0, Math.max(0, i)).reverse().map((p) => `<li data-kind="${p.kind}" data-t="${p.t}"><span class="tm">${fmt(p.t)}</span><div><b>${p.title}</b><span>${p.text}</span></div></li>`).join('');
  }
  ui.past.addEventListener('click', (e) => { const li = e.target.closest('li'); if (li) seek(+li.dataset.t); });

  function renderComposerTab() {
    const c = track.composer;
    ui.tabComposer.innerHTML = `<div class="bio-head">${c.portrait ? `<img src="${c.portrait}" alt="" style="object-position:${c.focus}">` : '<span></span>'}<div><h3>${c.name}</h3><span class="dates">${c.dates}</span></div></div>
<p class="epi">${c.epithet}</p>${c.quote ? `<blockquote>“${c.quote.text}”<br><small>— ${c.quote.source}</small></blockquote>` : ''}${c.background}
<dl><div><dt>Born</dt><dd>${c.born}</dd></div>${c.died ? `<div><dt>Died</dt><dd>${c.died}</dd></div>` : ''}${c.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
<a class="more-link" href="composers/${c.slug}.html">The full portrait: life, scores, paintings →</a>`;
  }
  function renderPieceTab() {
    const t = track;
    ui.tabPiece.innerHTML = `<h3>${t.work}${t.movement ? `<br><small style="font-style:italic;font-size:.75em">${t.movement}</small>` : ''}</h3>
<p class="intro">${t.intro}</p>
<dl>${t.year ? `<div><dt>Composed</dt><dd>${t.year}</dd></div>` : ''}${t.key ? `<div><dt>Key</dt><dd>${t.key}</dd></div>` : ''}<div><dt>Forces</dt><dd>${t.forces}</dd></div><div><dt>Performers</dt><dd>${t.performers}${t.recorded ? `, ${t.recorded}` : ''}</dd></div><div><dt>Recording</dt><dd><a href="${t.sourcePage}" target="_blank" rel="noopener">Wikimedia Commons</a> · ${t.license}</dd></div></dl>
<dt style="font:600 .66rem var(--caps);letter-spacing:.2em;color:var(--accent);font-variant:small-caps">Form</dt><ol class="sec-list">${t.sections.map((s) => `<li data-t="${s.t}"><span>${fmt(s.t)}</span><span>${s.label}</span></li>`).join('')}</ol>
<dt style="font:600 .66rem var(--caps);letter-spacing:.2em;color:var(--accent);font-variant:small-caps">Every note in this recording</dt><ol class="cue-list">${t.cues.map((c) => `<li data-t="${c.t}" data-kind="${c.kind}"><span>${fmt(c.t)}</span><span>${c.title}</span></li>`).join('')}</ol>`;
  }
  ui.tabPiece.addEventListener('click', (e) => { const li = e.target.closest('li[data-t]'); if (li) seek(+li.dataset.t); });

  $$('.tabs button').forEach((b) => b.addEventListener('click', () => {
    $$('.tabs button').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
    $$('.tab').forEach((p) => { p.hidden = p.dataset.panel !== b.dataset.tab; });
  }));

  // ------------------------------------------------------------- timeline
  function renderSections() {
    const d = track.duration;
    ui.tlSections.innerHTML = track.sections.map((s, i) => {
      const end = track.sections[i + 1]?.t ?? d;
      return `<span style="left:${(s.t / d) * 100}%;width:${((end - s.t) / d) * 100}%" title="${s.label}">${s.label}</span>`;
    }).join('');
  }
  function drawTimeline() {
    const cv = ui.tlCanvas, dpr = Math.min(2, devicePixelRatio || 1);
    const w = cv.clientWidth, h = cv.clientHeight;
    if (!w) return;
    if (cv.width !== w * dpr) { cv.width = w * dpr; cv.height = h * dpr; }
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, w, h);
    const d = track?.duration || 1;
    const now = audio.currentTime || 0;
    const mid = h * 0.55;
    if (env?.env?.length) {
      const n = env.env.length;
      for (let x = 0; x < w; x++) {
        const k = Math.min(n - 1, Math.floor((x / w) * n));
        const v = env.env[k] ** 1.6;
        const played = (x / w) * d <= now;
        g.fillStyle = played ? 'rgba(233,207,140,.85)' : 'rgba(233,207,140,.22)';
        const a = v * mid * 0.95;
        g.fillRect(x, mid - a, 1, a * 1.55);
      }
    } else {
      g.fillStyle = 'rgba(233,207,140,.2)'; g.fillRect(0, mid, w, 1);
      g.fillStyle = 'rgba(233,207,140,.8)'; g.fillRect(0, mid, (now / d) * w, 1);
    }
    for (const c of track?.cues ?? []) {
      const x = (c.t / d) * w;
      g.fillStyle = getComputedStyle(document.body).getPropertyValue(`--k-${c.kind}`) || '#e9cf8c';
      g.beginPath(); g.arc(Math.max(2, x), h - 2.5, 2, 0, Math.PI * 2); g.fill();
    }
    ui.head.style.left = `${(now / d) * 100}%`;
    ui.timeline.setAttribute('aria-valuemax', String(Math.round(d)));
    ui.timeline.setAttribute('aria-valuenow', String(Math.round(now)));
    ui.timeline.setAttribute('aria-valuetext', `${fmt(now)} of ${fmt(d)}`);
  }
  function seek(t) {
    audio.currentTime = Math.max(0, Math.min(track.duration - 0.5, t));
    if (!started) play();
    tick(true);
  }
  let dragging = false;
  const posToTime = (e) => { const r = ui.timeline.getBoundingClientRect(); return ((e.clientX - r.left) / r.width) * track.duration; };
  ui.timeline.addEventListener('pointerdown', (e) => { dragging = true; ui.timeline.setPointerCapture(e.pointerId); seek(posToTime(e)); });
  ui.timeline.addEventListener('pointermove', (e) => { if (dragging) seek(posToTime(e)); });
  ui.timeline.addEventListener('pointerup', () => { dragging = false; });
  ui.timeline.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') seek(audio.currentTime + 10); if (e.key === 'ArrowLeft') seek(audio.currentTime - 10); });

  // ------------------------------------------------------------- transport
  ui.play.addEventListener('click', () => { if (audio.paused) play(); else audio.pause(); });
  $('.t-next').addEventListener('click', () => next());
  $('.t-prev').addEventListener('click', () => (audio.currentTime > 5 ? seek(0) : load(idx - 1)));
  audio.addEventListener('play', () => { ui.play.textContent = '❚❚'; ui.play.setAttribute('aria-label', 'Pause'); });
  audio.addEventListener('pause', () => { ui.play.textContent = '▶'; ui.play.setAttribute('aria-label', 'Play'); });
  audio.addEventListener('ended', () => next(true));
  audio.addEventListener('error', () => { if (track && started) { ui.cueText.textContent = 'This recording could not be loaded; moving on.'; setTimeout(() => next(), 2500); } });
  addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea')) return;
    if (e.code === 'Space') { e.preventDefault(); ui.play.click(); }
    if (e.key === 'n' || e.key === 'N') next();
    if (e.key === 'p' || e.key === 'P') load(idx - 1);
  });
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('nexttrack', () => next());
    navigator.mediaSession.setActionHandler('previoustrack', () => load(idx - 1));
    navigator.mediaSession.setActionHandler('play', () => play());
    navigator.mediaSession.setActionHandler('pause', () => audio.pause());
  }

  function next(withInterlude = false) {
    if (advancing) return;
    const n = P[(idx + 1) % P.length];
    if (!withInterlude || reduced) { load(idx + 1); return; }
    advancing = true;
    ui.interlude.style.setProperty('--accent', n.era?.accent ?? '#c9a65a');
    $('.i-era', ui.interlude).textContent = n.era ? `${n.era.numeral} · ${n.era.name}` : '';
    $('.i-name', ui.interlude).textContent = n.composer.name;
    $('.i-work', ui.interlude).textContent = `${n.work}${n.movement ? ' · ' + n.movement : ''}`;
    ui.interlude.hidden = false;
    setTimeout(() => { load(idx + 1); }, 1600);
    setTimeout(() => { ui.interlude.hidden = true; advancing = false; }, 4200);
  }

  // programme drawer
  ui.progBtn.addEventListener('click', () => { ui.prog.hidden = !ui.prog.hidden; ui.progBtn.setAttribute('aria-expanded', String(!ui.prog.hidden)); });
  $('.prog-close').addEventListener('click', () => { ui.prog.hidden = true; });
  ui.prog.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-id]'); if (!b) return;
    load(P.findIndex((t) => t.id === b.dataset.id));
    ui.prog.hidden = true;
    if (!started) play();
  });
  $('.begin').addEventListener('click', () => play());
  ui.curtain.addEventListener('click', (e) => { if (e.target === ui.curtain) play(); });

  // ------------------------------------------------------------- per-frame update
  let lastTl = 0;
  function tick(force = false) {
    if (!track) return;
    const t = audio.currentTime || 0;
    ui.cur.textContent = fmt(t);
    const i = cueAt(t);
    if (i !== cueIdx) showCue(i);
    const nextCue = track.cues[i + 1];
    ui.cueNext.textContent = nextCue && !audio.paused ? `next note in ${fmt(nextCue.t - t)}` : '';
    let s = -1; track.sections.forEach((x, k) => { if (x.t <= t + 0.05) s = k; });
    if (s !== sectionIdx) { sectionIdx = s; $$('span', ui.tlSections).forEach((el, k) => el.classList.toggle('on', k === s)); }
    const now = performance.now();
    if (force || now - lastTl > 120) { drawTimeline(); lastTl = now; }
  }

  // ------------------------------------------------------------- spectrogram
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
  const FMIN = 32.703, OCT = 8; // C1 .. C9
  let sg = null, rows = null, colImg = null, sgW = 0, sgH = 0, dprS = 1;
  function setupSpectro() {
    const cv = ui.spectro; dprS = Math.min(1.5, devicePixelRatio || 1);
    sgW = Math.round(cv.clientWidth * dprS); sgH = Math.round(cv.clientHeight * dprS);
    if (!sgW || !sgH) return;
    cv.width = sgW; cv.height = sgH;
    sg = cv.getContext('2d', { willReadFrequently: false });
    sg.fillStyle = '#060504'; sg.fillRect(0, 0, sgW, sgH);
    colImg = sg.createImageData(3, sgH);
    rows = null;
    ui.axis.innerHTML = [1, 2, 3, 4, 5, 6, 7, 8].map((o) => { const y = (1 - o / OCT) * 100 + (0 / OCT); return `<span style="top:${(1 - (o - 1 + 0) / OCT) * 100 - (100 / OCT) * 0}%"><b>C${o}</b></span>`; }).join('');
    // position labels precisely
    $$('span', ui.axis).forEach((el, k) => { const o = k; el.style.top = `${(1 - o / OCT) * 100}%`; });
  }
  function buildRows() {
    const sr = ctx.sampleRate, n = analyser.frequencyBinCount, binHz = sr / analyser.fftSize;
    rows = new Int32Array(sgH * 2);
    for (let y = 0; y < sgH; y++) {
      const f0 = FMIN * 2 ** ((1 - (y + 1) / sgH) * OCT), f1 = FMIN * 2 ** ((1 - y / sgH) * OCT);
      const lo = Math.max(1, Math.floor(f0 / binHz)), hi = Math.min(n - 1, Math.max(lo, Math.ceil(f1 / binHz)));
      rows[y * 2] = lo; rows[y * 2 + 1] = hi;
    }
  }
  // vertical keyboard along the pitch axis: each key glows with the energy at its pitch
  let kb = null, kbW = 0;
  function setupKeys() {
    const cv = $('.keys'); if (!cv) return;
    kbW = Math.round(cv.clientWidth * dprS); cv.width = kbW; cv.height = sgH;
    kb = cv.getContext('2d');
  }
  const BLACK = new Set([1, 3, 6, 8, 10]);
  function drawKeys() {
    if (!kb || !rows) return;
    const sr = ctx.sampleRate, binHz = sr / analyser.fftSize;
    kb.clearRect(0, 0, kbW, sgH);
    const keyH = sgH / (OCT * 12);
    for (let m = 24; m < 24 + OCT * 12; m++) {
      const f = A4 * 2 ** ((m - 69) / 12);
      const lo = Math.max(1, Math.floor((f * 2 ** (-1 / 24)) / binHz)), hi = Math.max(lo, Math.ceil((f * 2 ** (1 / 24)) / binHz));
      let v = -200; for (let k = lo; k <= hi && k < freq.length; k++) if (freq[k] > v) v = freq[k];
      let e = (v + 80) / 45; e = e < 0 ? 0 : e > 1 ? 1 : e;
      const y = sgH - (m - 24 + 1) * keyH;
      const black = BLACK.has(m % 12);
      kb.fillStyle = black ? '#17130f' : '#d8ccb6';
      const w = black ? kbW * 0.62 : kbW;
      kb.fillRect(kbW - w, y + 0.5, w, Math.max(1, keyH - 1));
      if (e > 0.02) { kb.fillStyle = `rgba(246,${200 - e * 70},${110 - e * 60},${e})`; kb.fillRect(kbW - w, y + 0.5, w, Math.max(1, keyH - 1)); }
    }
  }
  function drawSpectro() {
    if (!sg) return;
    if (!rows) buildRows();
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

  // ------------------------------------------------------------- pitch analysis
  const chroma = new Float32Array(12);
  const TEMPLATES = [];
  for (let r = 0; r < 12; r++) {
    TEMPLATES.push({ name: `${NAMES[r]} major`, root: r, tones: [r, (r + 4) % 12, (r + 7) % 12] });
    TEMPLATES.push({ name: `${NAMES[r]} minor`, root: r, tones: [r, (r + 3) % 12, (r + 7) % 12] });
  }
  let chordHold = { name: '', n: 0 }, shownChord = '', chordTones = [], lastRead = 0;
  function analyse() {
    const sr = ctx.sampleRate, binHz = sr / analyser.fftSize, n = freq.length;
    const raw = new Float32Array(12);
    const kLo = Math.ceil(80 / binHz), kHi = Math.min(n - 2, Math.floor(4200 / binHz));
    let maxDb = -200;
    for (let k = kLo; k <= kHi; k++) if (freq[k] > maxDb) maxDb = freq[k];
    const floor = Math.max(-85, maxDb - 38);
    for (let k = kLo; k <= kHi; k++) {
      const v = freq[k];
      if (v < floor || v < freq[k - 1] || v < freq[k + 1]) continue;
      const midi = 69 + 12 * Math.log2((k * binHz) / A4);
      const pc = ((Math.round(midi) % 12) + 12) % 12;
      raw[pc] += 10 ** ((v - floor) / 20) - 1;
    }
    const mx = Math.max(...raw);
    for (let p = 0; p < 12; p++) { const v = mx > 0 ? raw[p] / mx : 0; chroma[p] += (v - chroma[p]) * (v > chroma[p] ? 0.35 : 0.08); }

    // readouts at ~8 Hz
    const now = performance.now();
    if (now - lastRead < 120) return;
    lastRead = now;
    // loudness (RMS)
    analyser.getFloatTimeDomainData(wave);
    let s = 0; for (let i = 0; i < wave.length; i++) s += wave[i] * wave[i];
    const db = 10 * Math.log10(s / wave.length + 1e-12);
    ui.loud.style.width = `${Math.max(0, Math.min(1, (db + 60) / 50)) * 100}%`;
    // brightness: spectral centroid 60 Hz–10 kHz
    let num = 0, den = 0;
    for (let k = Math.ceil(60 / binHz); k < Math.min(n, 10000 / binHz); k++) { const m = 10 ** (freq[k] / 20); num += m * k * binHz; den += m; }
    const cent = den ? num / den : 0;
    ui.bright.style.width = `${Math.max(0, Math.min(1, Math.log2(Math.max(1, cent) / 250) / 4)) * 100}%`;
    const silent = db < -58;
    // bass: lowest spectral peak within 14 dB of the strongest one in 38–260 Hz
    const bLo = Math.ceil(38 / binHz), bHi = Math.floor(260 / binHz);
    let bMax = -200; for (let k = bLo; k <= bHi; k++) if (freq[k] > bMax) bMax = freq[k];
    let bass = '—', bassMidi = null;
    if (!silent && bMax > -78) {
      for (let k = bLo; k <= bHi; k++) {
        if (freq[k] >= bMax - 14 && freq[k] >= freq[k - 1] && freq[k] >= freq[k + 1]) {
          const midi = Math.round(69 + 12 * Math.log2((k * binHz) / A4));
          bassMidi = midi;
          bass = `${NAMES[((midi % 12) + 12) % 12]}<small style="font-size:.6em;opacity:.6">${Math.floor(midi / 12) - 1}</small>`;
          break;
        }
      }
    }
    ui.bass.innerHTML = bass;
    const bassPc = bassMidi == null ? -1 : ((bassMidi % 12) + 12) % 12;
    const order = [...chroma.keys()].sort((a, b) => chroma[b] - chroma[a]);
    ui.top.textContent = silent ? '—' : order.filter((p) => chroma[p] > 0.55).slice(0, 4).map((p) => NAMES[p]).join(' · ');
    // chord: best triad template, cosine similarity, held for stability
    let best = null, second = 0;
    const norm = Math.hypot(...chroma) || 1;
    for (const T of TEMPLATES) {
      let sc = (chroma[T.tones[0]] * 1 + chroma[T.tones[1]] * 0.9 + chroma[T.tones[2]] * 0.8) / (norm * Math.hypot(1, 0.9, 0.8));
      if (bassPc === T.root) sc += 0.08; else if (T.tones.includes(bassPc)) sc += 0.03; else if (bassPc >= 0) sc -= 0.04;
      if (chroma[T.root] < 0.35) sc -= 0.1;
      if (!best || sc > best.sc) { second = best?.sc ?? 0; best = { ...T, sc }; } else if (sc > second) second = sc;
    }
    const name = !silent && best && best.sc > 0.72 && best.sc - second > 0.015 ? best.name : '';
    if (name === chordHold.name) chordHold.n++; else chordHold = { name, n: 1 };
    if (chordHold.n >= 3 && name !== shownChord) {
      shownChord = name; chordTones = name ? best.tones : [];
      ui.chord.textContent = name || '—';
    }
  }

  // ------------------------------------------------------------- wheel
  let wg = null, wSize = 0;
  function setupWheel() {
    const cv = ui.wheel, dpr = Math.min(2, devicePixelRatio || 1);
    wSize = cv.clientWidth; if (!wSize) return;
    cv.width = cv.height = Math.round(wSize * dpr);
    wg = cv.getContext('2d'); wg.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function drawWheel() {
    if (!wg) return;
    const S = wSize, c = S / 2, r0 = S * 0.22, r1 = S * 0.4, rl = S * 0.465;
    wg.clearRect(0, 0, S, S);
    wg.strokeStyle = 'rgba(230,203,133,.16)'; wg.lineWidth = 1;
    for (const r of [r0, (r0 + r1) / 2, r1]) { wg.beginPath(); wg.arc(c, c, r, 0, Math.PI * 2); wg.stroke(); }
    const step = (Math.PI * 2) / 12;
    const pts = [];
    FIFTHS.forEach((pc, i) => {
      const a = -Math.PI / 2 + i * step, v = chroma[pc];
      const r = r0 + (r1 - r0) * v;
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
      if (inChord) { wg.fillStyle = '#f6e3a8'; wg.beginPath(); wg.arc(c + Math.cos(a) * (r1 + S * 0.025), c + Math.sin(a) * (r1 + S * 0.025), 1.8, 0, Math.PI * 2); wg.fill(); }
    });
    wg.strokeStyle = 'rgba(246,227,168,.55)'; wg.lineWidth = 1;
    wg.beginPath(); pts.forEach(([x, y], i) => (i ? wg.lineTo(x, y) : wg.moveTo(x, y))); wg.closePath(); wg.stroke();
  }

  // ------------------------------------------------------------- main loop
  function frame() {
    requestAnimationFrame(frame);
    tick();
    if (analyser && !audio.paused) {
      analyser.getFloatFrequencyData(freq);
      drawSpectro();
      drawKeys();
      analyse();
    } else {
      for (let p = 0; p < 12; p++) chroma[p] *= 0.96;
    }
    drawWheel();
  }

  const onResize = () => { setupSpectro(); setupKeys(); setupWheel(); drawTimeline(); };
  addEventListener('resize', () => { clearTimeout(onResize.t); onResize.t = setTimeout(onResize, 150); });

  // ------------------------------------------------------------- boot
  fetch(window.PROGRAMME_URL).then((r) => r.json()).then(async (prog) => {
    P = prog;
    setupSpectro(); setupKeys(); setupWheel();
    const want = decodeURIComponent(location.hash.slice(1));
    const start = Math.max(0, P.findIndex((t) => t.id === want));
    await load(start, { autoplay: false });
    requestAnimationFrame(frame);
    // Try to start without a click (allowed for returning visitors in some browsers).
    ensureGraph();
    try { await Promise.race([ctx.resume(), new Promise((r) => setTimeout(r, 250))]); } catch {}
    if (ctx.state === 'running') {
      audio.play().then(() => { started = true; }).catch(() => { ui.curtain.hidden = false; document.body.classList.add('waiting'); });
    } else {
      ui.curtain.hidden = false; document.body.classList.add('waiting');
    }
  });
})();
