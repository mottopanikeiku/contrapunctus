// Return Lab uses the persistent player; it owns a stopping boundary only after a local play action.
const COLOURS = ['#e9cf8c', '#9fc3c6', '#e08c7a', '#b7a6d8', '#c9d58a', '#e6a96b', '#d3a3b8', '#9ebd9c', '#b6c2de', '#d6bd99', '#d2a9dc', '#8eb9ad'];
const A_COLOUR = COLOURS[0], B_COLOUR = COLOURS[1];
const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function mount(app) {
  const root = document.querySelector('.rl-page');
  const source = root?.querySelector('[data-rl]');
  if (!source) return () => {};
  const d = JSON.parse(source.textContent);
  const { player } = app;
  const $ = (s) => root.querySelector(s);
  const canvas = $('[data-rl-canvas]'), ctx = canvas.getContext('2d');
  const layer = document.createElement('canvas'), ink = layer.getContext('2d');
  const chart = $('[data-rl-tempo]'), metric = $('[data-rl-metric]');
  const status = $('[data-rl-status]'), stop = $('[data-rl-stop]');
  const windowSelect = $('[data-rl-window]'), previous = $('[data-rl-prev]'), next = $('[data-rl-next]');
  const playButtons = [...root.querySelectorAll('[data-rl-play]')];
  const changeButtons = [...root.querySelectorAll('[data-rl-change]')];
  const events = new AbortController();
  const on = (element, event, handler) => element.addEventListener(event, handler, { signal: events.signal });
  const off = [];
  const P = d.pairs.length;
  const style = getComputedStyle(root);
  const font = style.getPropertyValue('--text').trim();
  let low = 127, high = 0;
  for (const side of [d.A, d.B]) for (const note of side.notes) { low = Math.min(low, note[2]); high = Math.max(high, note[2]); }
  low -= 2; high += 2;
  let alive = true, width = 0, height = 0, ratio = 1, chartWidth = 0;
  let windowSize = matchMedia('(max-width: 600px)').matches ? 32 : 0, offset = 0;
  let active = null, queue = [], sequence = 0, mode = '', selectedChange = -1, timer = 0, raf = 0;
  let cursor = null, follow = false;
  windowSelect.value = String(windowSize);

  const legend = $('[data-rl-voices]');
  for (const [i, name] of d.voices.entries()) {
    const item = document.createElement('li'), swatch = document.createElement('i');
    swatch.style.setProperty('--voice', COLOURS[i % COLOURS.length]);
    swatch.setAttribute('aria-hidden', 'true');
    item.append(swatch, document.createTextNode(name));
    legend.append(item);
  }
  for (const button of [...playButtons, ...changeButtons]) button.disabled = false;

  const visible = () => Math.min(windowSize || P, P);
  const endColumn = () => Math.min(P, offset + visible());
  const xAt = (column) => 30 + ((column - offset) / visible()) * (width - 42);
  const laneHeight = () => (height - 104) / 2;
  const laneTop = (key) => key === 'a' ? 43 : 43 + laneHeight() + 49;
  const keyOf = (side) => side === 'A' ? 'a' : 'b';

  function positionAt(key, time) {
    for (let i = 0; i < P; i++) {
      const b = d.pairs[i][key];
      if (b && time >= b.t && time < b.t + b.d) return i + (time - b.t) / b.d;
    }
    return null;
  }

  function renderMap() {
    if (!width || !height) return;
    ink.clearRect(0, 0, width, height);
    ink.fillStyle = '#0b0907'; ink.fillRect(0, 0, width, height);
    const laneH = laneHeight();
    const labelStep = Math.max(1, Math.ceil(visible() * 24 / (width - 42)));
    for (const [side, key] of [['A', 'a'], ['B', 'b']]) {
      const top = laneTop(key), yAt = (pitch) => top + laneH - ((pitch - low) / (high - low)) * laneH;
      ink.textBaseline = 'middle'; ink.font = `500 13px ${font}`;
      ink.fillStyle = side === 'A' ? A_COLOUR : B_COLOUR;
      ink.fillText(`${side} · ${d[side].label}`, 12, top - 29, width - 24);
      // Octave rules give both passages one pitch scale.
      for (let pitch = Math.ceil(low / 12) * 12; pitch <= high; pitch += 12) {
        const y = yAt(pitch);
        ink.strokeStyle = '#e9cf8c13'; ink.beginPath(); ink.moveTo(30, y); ink.lineTo(width - 12, y); ink.stroke();
        ink.fillStyle = '#9b8c73'; ink.font = `10px ${font}`; ink.fillText(`C${pitch / 12 - 1}`, 5, y);
      }
      for (const change of d.changes) {
        const i = key === 'a' ? change.ia : change.ib;
        if (i < offset || i >= endColumn()) continue;
        ink.fillStyle = '#c9a65a1b'; ink.fillRect(xAt(i), top - 5, xAt(i + 1) - xAt(i), laneH + 10);
      }
      for (let i = offset; i < endColumn(); i++) {
        const bar = d.pairs[i][key], x = xAt(i), w = xAt(i + 1) - x;
        ink.strokeStyle = '#c9a65a29'; ink.beginPath(); ink.moveTo(x, top - 5); ink.lineTo(x, top + laneH + 5); ink.stroke();
        if (bar && (i - offset) % labelStep === 0) {
          ink.fillStyle = '#b6a78f'; ink.font = `11px ${font}`; ink.fillText(bar.n, x + 2, top - 12);
        }
        if (!bar) {
          ink.save(); ink.beginPath(); ink.rect(x, top, w, laneH); ink.clip();
          ink.strokeStyle = '#c9a65a35';
          for (let dx = -laneH; dx < w; dx += 8) { ink.beginPath(); ink.moveTo(x + dx, top + laneH); ink.lineTo(x + dx + laneH, top); ink.stroke(); }
          ink.restore();
        }
      }
      ink.save(); ink.beginPath(); ink.rect(30, top - 1, width - 42, laneH + 2); ink.clip();
      const noteHeight = Math.max(1.5, Math.min(5, laneH / (high - low) * .9));
      for (const [x, length, pitch, voice] of d[side].notes) {
        if (x + length <= offset || x >= endColumn()) continue;
        ink.fillStyle = COLOURS[voice % COLOURS.length];
        ink.globalAlpha = .88;
        ink.fillRect(xAt(x), yAt(pitch) - noteHeight / 2, Math.max(.8, xAt(x + length) - xAt(x) - .35), noteHeight);
      }
      ink.restore(); ink.globalAlpha = 1;
      if (selectedChange >= 0) {
        const change = d.changes[selectedChange], i = key === 'a' ? change.ia : change.ib;
        if (i >= offset && i < endColumn()) { ink.strokeStyle = '#e9cf8c99'; ink.strokeRect(xAt(i), top - 5, xAt(i + 1) - xAt(i), laneH + 10); }
      }
    }
    draw();
  }

  function draw() {
    if (!width) return;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(layer, 0, 0, layer.width, layer.height, 0, 0, width, height);
    if (!cursor || cursor.x < offset || cursor.x > endColumn()) return;
    const x = xAt(cursor.x), top = laneTop(cursor.key);
    ctx.strokeStyle = cursor.key === 'a' ? A_COLOUR : B_COLOUR;
    ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x, top - 6); ctx.lineTo(x, top + laneHeight() + 6); ctx.stroke();
    ctx.fillStyle = ctx.strokeStyle; ctx.beginPath(); ctx.arc(x, top - 6, 3, 0, Math.PI * 2); ctx.fill();
  }

  function renderChart() {
    const w = Math.max(280, chart.clientWidth), h = 190, left = 35, right = 12, top = 13, bottom = 30;
    chartWidth = chart.clientWidth;
    const field = metric.value;
    let max = 0;
    for (let i = offset; i < endColumn(); i++) for (const key of ['a', 'b']) max = Math.max(max, d.pairs[i][key]?.[field] ?? 0);
    max = max ? max * 1.08 : 1;
    const X = (i) => left + ((i - offset + .5) / visible()) * (w - left - right);
    const Y = (value) => top + (1 - value / max) * (h - top - bottom);
    const unit = field === 'd' ? 's' : '';
    const ticks = [0, max / 2, max].map((v) => `<line x1="${left}" x2="${w - right}" y1="${Y(v)}" y2="${Y(v)}" stroke="#c9a65a25"/><text x="${left - 5}" y="${Y(v) + 4}" fill="#b0a18b" font-size="11" text-anchor="end">${v.toFixed(field === 'd' ? 1 : 2)}${unit}</text>`).join('');
    const line = (key, colour) => {
      let path = '', pen = false, points = '';
      for (let i = offset; i < endColumn(); i++) {
        const bar = d.pairs[i][key], value = bar?.[field];
        if (value == null) { pen = false; continue; }
        path += `${pen ? 'L' : 'M'}${X(i).toFixed(2)},${Y(value).toFixed(2)}`; pen = true;
        points += `<circle cx="${X(i)}" cy="${Y(value)}" r="${visible() <= 32 ? 2.3 : 1.4}" fill="${colour}"><title>${key.toUpperCase()} · bar ${escapeHTML(bar.n)}: ${value.toFixed(field === 'd' ? 2 : 3)}${unit}</title></circle>`;
      }
      return `<path d="${path}" fill="none" stroke="${colour}" stroke-width="1.8"${key === 'b' ? ' stroke-dasharray="5 3"' : ''}/>${points}`;
    };
    chart.innerHTML = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${field === 'd' ? 'Seconds per bar' : 'Relative envelope level'}, A in gold and B in dashed blue, corresponding columns ${offset + 1} to ${endColumn()}">${ticks}${line('a', A_COLOUR)}${line('b', B_COLOUR)}<text x="${left}" y="${h - 5}" fill="#b0a18b" font-size="11">${offset + 1}</text><text x="${(w + left - right) / 2}" y="${h - 5}" fill="#b0a18b" font-size="11" text-anchor="middle">corresponding columns</text><text x="${w - right}" y="${h - 5}" fill="#b0a18b" font-size="11" text-anchor="end">${endColumn()}</text></svg>`;
    $('[data-rl-chart-caption]').textContent = field === 'd'
      ? 'A higher point means a longer bar, not necessarily a slower tempo: pauses and written additions count too. Gold: A. Blue, dashed: B. The chart follows the note map’s selected columns.'
      : 'Mean normalised envelope level, sampled twice per second within each bar. This is not a decibel measurement or a written dynamic. Gold: A. Blue, dashed: B. Gaps have no counterpart.';
  }

  function view() {
    offset = Math.max(0, Math.min(offset, P - visible()));
    previous.disabled = offset === 0; next.disabled = endColumn() === P;
    $('[data-rl-range]').textContent = `${offset + 1}–${endColumn()} / ${P}`;
    renderMap(); renderChart();
  }
  function fit() {
    if (!alive) return;
    const w = canvas.clientWidth, h = canvas.clientHeight, pixelRatio = Math.min(2, devicePixelRatio || 1);
    if (w !== width || h !== height || pixelRatio !== ratio) {
      width = w; height = h; ratio = pixelRatio;
      for (const c of [canvas, layer]) { c.width = Math.round(width * ratio); c.height = Math.round(height * ratio); }
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0); ink.setTransform(ratio, 0, 0, ratio, 0, 0);
      renderMap();
    }
    if (chart.clientWidth !== chartWidth) renderChart();
  }
  const resize = new ResizeObserver(fit);
  resize.observe(canvas); resize.observe(chart);
  document.fonts?.ready.then(() => { if (alive) { renderMap(); renderChart(); } });
  on(windowSelect, 'change', () => { windowSize = Number(windowSelect.value); offset = 0; follow = false; view(); });
  on(previous, 'click', () => { offset -= visible(); follow = false; view(); });
  on(next, 'click', () => { offset += visible(); follow = false; view(); });
  on(metric, 'change', renderChart);

  function buttons() {
    for (const b of playButtons) b.setAttribute('aria-pressed', String(!!active && (b.dataset.rlPlay === mode || b.dataset.rlPlay === active.side)));
    for (const b of changeButtons) b.setAttribute('aria-pressed', String(!!active && Number(b.dataset.rlChange) === selectedChange));
    stop.disabled = !active;
  }
  function release(message) {
    sequence++; active = null; queue = []; mode = ''; follow = false;
    clearTimeout(timer); timer = 0;
    buttons();
    if (message) status.textContent = message;
  }
  function updateCursor() {
    cursor = null;
    if (player.track?.id === d.track) {
      const time = player.time;
      const keys = active ? [keyOf(active.side)] : ['a', 'b'];
      for (const key of keys) { const x = positionAt(key, time); if (x != null) { cursor = { key, x }; break; } }
      if (follow && cursor && windowSize && (cursor.x < offset || cursor.x >= endColumn())) {
        offset = Math.floor(cursor.x / visible()) * visible(); view();
      }
    }
    draw();
  }
  function animate() {
    raf = 0;
    if (!alive) return;
    updateCursor();
    if (player.playing && cursor) raf = requestAnimationFrame(animate);
  }
  function refresh() {
    updateCursor();
    if (!raf && player.playing && cursor) raf = requestAnimationFrame(animate);
  }

  function armBoundary() {
    clearTimeout(timer); timer = 0;
    if (!active || !player.playing || player.track?.id !== d.track) return;
    // timeupdate supplies the clock. A short deadline between updates avoids letting
    // the final file boundary trigger the shared player's next-recording behaviour.
    const remaining = active.end - player.time;
    if (remaining <= .035) { finishSpan(); return; }
    const ticket = sequence;
    timer = setTimeout(() => {
      if (alive && active && sequence === ticket && player.playing) {
        if (player.time >= active.end - .035) finishSpan(); else armBoundary();
      }
    }, Math.max(15, (remaining - .025) * 1000));
  }
  function finishSpan() {
    if (!active || player.track?.id !== d.track) { release(); return; }
    const nextSpan = queue.shift(), ticket = sequence;
    active = null; clearTimeout(timer); timer = 0;
    if (nextSpan) beginSpan(nextSpan, ticket);
    else {
      release('Passage complete. Choose A, B, or both to listen again.');
      player.pause(); refresh();
    }
  }
  async function beginSpan(span, ticket) {
    status.textContent = `Loading ${span.side} · ${d[span.side].label}…`;
    try {
      await player.load(d.track, { t: span.start });
      if (!alive || ticket !== sequence) return;
      active = span; buttons();
      const played = await player.play();
      if (!alive || ticket !== sequence) return;
      if (played === false) { release('Playback could not start. Press a passage button to try again.'); return; }
      status.textContent = `Playing ${span.side} · ${d[span.side].label}${queue.length ? '; the other passage follows.' : '; stops at its marked end.'}`;
      refresh(); armBoundary();
    } catch {
      if (alive && ticket === sequence) release('The recording could not be played. Its score notes and measurements remain available below.');
    }
  }
  function play(spans, chosenMode, change = -1) {
    release(); mode = chosenMode; selectedChange = change; follow = true;
    const [first, ...rest] = spans; queue = rest;
    const column = positionAt(keyOf(first.side), first.start);
    if (column != null && windowSize) offset = Math.floor(column / visible()) * visible();
    view();
    beginSpan(first, sequence);
  }
  const passage = (side) => ({ side, start: d[side].start, end: d[side].end });
  for (const button of playButtons) on(button, 'click', () => {
    const value = button.dataset.rlPlay;
    play(value === 'AB' ? [passage('A'), passage('B')] : [passage(value)], value);
  });
  for (const button of changeButtons) on(button, 'click', () => {
    const index = Number(button.dataset.rlChange), change = d.changes[index], spans = [];
    for (const [side, pairIndex] of [['A', change.ia], ['B', change.ib]]) {
      if (pairIndex < 0) continue;
      const key = keyOf(side), bar = d.pairs[pairIndex][key];
      let end = bar.t + bar.d, count = 1;
      for (let i = pairIndex + 1; i < P && count < 3; i++) { const b = d.pairs[i][key]; if (b) { end = b.t + b.d; count++; } }
      spans.push({ side, start: bar.t, end: Math.min(end, d[side].end) });
    }
    if (spans.length) {
      windowSize = 16; windowSelect.value = '16';
      play(spans, 'change', index);
    }
  });
  on(stop, 'click', () => {
    const ownsPlayback = active && player.track?.id === d.track;
    release('Passage stopped.');
    if (ownsPlayback) player.pause();
    refresh();
  });
  off.push(player.on('timeupdate', () => { refresh(); armBoundary(); }));
  off.push(player.on('play', () => { refresh(); armBoundary(); }));
  off.push(player.on('playing', armBoundary));
  off.push(player.on('pause', () => {
    if (player.playing) return; // A queued pause event may belong to the preceding span.
    clearTimeout(timer); timer = 0;
    if (active) release('Passage paused. Choose a passage to start again.');
    refresh();
  }));
  off.push(player.on('track', () => {
    if (player.track?.id !== d.track) release(mode ? 'Another recording is selected in the shared player.' : undefined);
    refresh();
  }));
  off.push(player.on('seek', () => {
    // A seek made after loading our span belongs to another control, so relinquish
    // the old stop point instead of unexpectedly pausing the user's new selection.
    if (active) release('Passage boundary released after seeking.');
    refresh();
  }));
  off.push(player.on('error', () => { if (active) release('The recording could not be played. Try its full recording in the hall.'); }));
  view(); fit(); refresh();
  return () => {
    alive = false; sequence++; active = null; queue = [];
    clearTimeout(timer); cancelAnimationFrame(raf);
    resize.disconnect(); events.abort(); off.forEach((remove) => remove());
    // Navigation never pauses the persistent player, even if this page started it.
  };
}
