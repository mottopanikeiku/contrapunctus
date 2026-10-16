// Return Lab: two passages on one grid of bars, with span playback and a bar-duration chart.
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const VOICES = ['--v1', '--v2', '--v3', '--v4', '--v5', '--v6', '--v7', '--v8'];

export async function mount(main, app) {
  const d = JSON.parse($('[data-rl]', main).textContent);
  const { player } = app;
  const canvas = $('[data-rl-canvas]', main);
  const ctx = canvas.getContext('2d');
  const colours = d.voices.map((_, i) => css(VOICES[i % VOICES.length]));
  $('[data-rl-voices]', main).innerHTML = d.voices.map((v, i) => `<span><i style="border-color:${colours[i]};border-top-width:6px"></i>${v}</span>`).join('');
  const P = d.pairs.length;
  const allNotes = [...d.A.notes, ...d.B.notes];
  const lo = Math.min(...allNotes.map((n) => n[2])) - 1, hi = Math.max(...allNotes.map((n) => n[2])) + 1;
  let W = 0, H = 0, dpr = 1;
  let stopAt = null, queue = [], cursor = null;   // cursor: { side, x }
  let alive = true, raf = 0;

  const fit = () => { dpr = Math.min(2, devicePixelRatio || 1); W = canvas.clientWidth; H = canvas.clientHeight; canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw(); };
  const ro = new ResizeObserver(fit);
  ro.observe(canvas);

  // which pair index is time t at, on side k ('a' | 'b')
  function posAt(k, t) {
    for (let i = 0; i < P; i++) {
      const b = d.pairs[i][k];
      if (b && t >= b.t && t < b.t + b.d) return i + (t - b.t) / b.d;
    }
    return null;
  }

  function draw() {
    if (!W) return;
    ctx.clearRect(0, 0, W, H);
    const left = 10, right = 12, gap = 46, laneH = (H - gap - 58) / 2;
    const X = (x) => left + (x / P) * (W - left - right);
    const lanes = [{ key: 'a', side: d.A, y0: 40 }, { key: 'b', side: d.B, y0: 40 + laneH + gap }];
    // change highlights
    ctx.fillStyle = css('--accent-soft');
    for (const ch of d.changes) {
      for (const [lane, idx] of [[lanes[0], ch.ia], [lanes[1], ch.ib]]) {
        if (idx < 0) continue;
        ctx.fillRect(X(idx), lane.y0 - 4, Math.max(6, X(idx + 1) - X(idx)), laneH + 8);
      }
    }
    ctx.font = `600 13px ${css('--ui')}`; ctx.textBaseline = 'middle';
    for (const lane of lanes) {
      const Y = (m) => lane.y0 + laneH - ((m - lo) / (hi - lo)) * laneH;
      ctx.fillStyle = css('--ink'); ctx.font = `600 13px ${css('--ui')}`; ctx.fillText(lane.side.label, left, lane.y0 - 27);
      // bar lines and numbers
      ctx.font = `500 11px ${css('--ui')}`;
      d.pairs.forEach((p, i) => {
        const b = p[lane.key];
        const x = X(i);
        ctx.strokeStyle = css('--rule'); ctx.beginPath(); ctx.moveTo(x, lane.y0 - 4); ctx.lineTo(x, lane.y0 + laneH + 4); ctx.stroke();
        if (b && (P <= 40 || i % Math.ceil(P / 40) === 0)) { ctx.fillStyle = css('--muted'); ctx.fillText(b.n, x + 2, lane.y0 - 10); }
        if (!b) { ctx.fillStyle = css('--paper-2'); ctx.fillRect(x + 1, lane.y0, X(i + 1) - x - 2, laneH); }
      });
      ctx.font = `600 13px ${css('--ui')}`;
      const nh = Math.max(3, Math.min(8, (laneH / (hi - lo)) * 0.85));
      for (const [x, w, m, v] of lane.side.notes) {
        ctx.fillStyle = colours[v];
        const active = cursor && cursor.key === lane.key && cursor.x >= x && cursor.x < x + w;
        ctx.globalAlpha = cursor && cursor.key === lane.key ? (cursor.x >= x + w ? 0.4 : active ? 1 : 0.8) : 0.85;
        ctx.fillRect(X(x), Y(m) - nh / 2, Math.max(2, (w / P) * (W - left - right) - 1), nh);
      }
      ctx.globalAlpha = 1;
      if (cursor && cursor.key === lane.key) {
        ctx.strokeStyle = css('--now'); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(X(cursor.x), lane.y0 - 6); ctx.lineTo(X(cursor.x), lane.y0 + laneH + 6); ctx.stroke(); ctx.lineWidth = 1;
      }
    }
  }

  // bar-duration chart (SVG)
  const host = $('[data-rl-tempo]', main);
  {
    const w = 640, h = 180, l = 34, r = 8, t = 10, b = 22;
    const ds = d.pairs.flatMap((p) => [p.a?.d, p.b?.d]).filter(Boolean);
    const sorted = [...ds].sort((x, y) => x - y);
    const p95 = sorted[Math.floor(sorted.length * 0.95)] ?? sorted.at(-1);
    const cap = Math.min(sorted.at(-1), p95 * 1.6);
    const max = cap * 1.08, min = sorted[0] * 0.92;
    const outliers = [];
    d.pairs.forEach((p, i) => ['a', 'b'].forEach((k) => { if (p[k]?.d > cap) outliers.push({ i, k, n: p[k].n, v: p[k].d }); }));
    const X = (i) => l + ((i + 0.5) / P) * (w - l - r);
    const Y = (v) => t + (1 - (v - min) / (max - min)) * (h - t - b);
    const line = (k, col) => {
      let dpath = '', pen = false;
      d.pairs.forEach((p, i) => { const v = p[k]?.d; if (v == null) { pen = false; return; } dpath += `${pen ? 'L' : 'M'}${X(i).toFixed(1)},${Y(Math.min(v, max)).toFixed(1)}`; pen = true; });
      return `<path d="${dpath}" fill="none" stroke="${col}" stroke-width="2"/>`;
    };
    const ticks = [min, (min + max) / 2, max].map((v) => `<text x="${l - 4}" y="${Y(v) + 4}" text-anchor="end" font-size="11" fill="${css('--muted')}" font-family="${css('--ui')}">${v.toFixed(1)}s</text>`).join('');
    host.innerHTML = `<svg viewBox="0 0 ${w} ${h}" style="width:100%;height:auto;display:block" role="img" aria-label="Seconds per corresponding bar, first time and return">${ticks}${line('a', css('--ink'))}${line('b', css('--accent'))}${outliers.map((o) => `<text x="${Math.min(w - 120, X(o.i) + 4)}" y="${t + 10}" font-size="11" fill="${css('--ink-2')}" font-family="${css('--ui')}">↑ bar ${o.n}: ${o.v.toFixed(1)} s (off the scale)</text>`).join('')}<text x="${l}" y="${h - 4}" font-size="11" fill="${css('--muted')}" font-family="${css('--ui')}">bars in order →</text></svg>`;
  }

  // playback of spans
  const playSpan = async (side) => {
    const s = side === 'A' ? d.A : d.B;
    await player.load(d.track, { t: s.start, play: true });
    player.seek(s.start);
    stopAt = s.end;
  };
  $$('[data-rl-play]', main).forEach((b) => b.addEventListener('click', async () => {
    const v = b.dataset.rlPlay;
    queue = v === 'AB' ? ['B'] : [];
    await playSpan(v === 'AB' ? 'A' : v);
  }));
  $$('[data-rl-change]', main).forEach((b) => b.addEventListener('click', async () => {
    const ch = d.changes[+b.dataset.rlChange];
    const pa = d.pairs[ch.ia]?.a, pb = d.pairs[ch.ib]?.b;
    if (pa) { await player.load(d.track, { t: Math.max(0, pa.t - 2), play: true }); player.seek(Math.max(0, pa.t - 2)); stopAt = pa.t + pa.d * 3; queue = pb ? [{ t: Math.max(0, pb.t - 2), end: pb.t + pb.d * 3 }] : []; }
  }));

  const loop = () => {
    if (!alive) return;
    if (player.track?.id === d.track) {
      const t = player.position;
      const xa = posAt('a', t), xb = posAt('b', t);
      cursor = xb != null && (xa == null || t >= d.B.start) ? { key: 'b', x: xb } : xa != null ? { key: 'a', x: xa } : null;
      if (stopAt != null && t >= stopAt && player.playing) {
        const nxt = queue.shift();
        if (nxt === 'B') { stopAt = null; playSpan('B'); }
        else if (nxt && typeof nxt === 'object') { player.seek(nxt.t); stopAt = nxt.end; }
        else { player.pause(); stopAt = null; }
      }
    } else cursor = null;
    draw();
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  return () => { alive = false; cancelAnimationFrame(raf); ro.disconnect(); };
}
