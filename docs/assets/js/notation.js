// Engraved, playable notation (abcjs, loaded on demand), the tuning lab and the harmonic series.
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
let abcjsReady = null;
let ctx = null;
const audioCtx = () => (ctx ??= new (window.AudioContext || window.webkitAudioContext)());

function loadAbcjs(base) {
  return (abcjsReady ??= new Promise((res, rej) => {
    if (window.ABCJS) return res(window.ABCJS);
    const s = document.createElement('script');
    s.src = new URL('assets/vendor/abcjs-basic-min.js', base).href;
    s.onload = () => res(window.ABCJS); s.onerror = rej;
    document.head.append(s);
  }));
}

export async function mount(main, app) {
  const cleanups = [];
  let current = null;
  const stop = () => {
    if (!current) return;
    current.synth.stop(); current.timer?.stop();
    current.btn.classList.remove('on'); current.btn.textContent = 'Play example';
    $$('.playing', main).forEach((el) => el.classList.remove('playing'));
    current = null;
  };
  cleanups.push(stop);

  const figs = $$('figure.score', main);
  if (figs.length) {
    const engrave = async (fig) => {
      if (fig._visual) return;
      const ABCJS = await loadAbcjs(app.base);
      const target = $('.abc', fig);
      const src = $('script[type="text/vnd.abc"]', fig).textContent;
      const narrow = target.clientWidth < 620;
      [fig._visual] = ABCJS.renderAbc(target, src, {
        ...(narrow ? { staffwidth: Math.max(240, target.clientWidth - 12), wrap: { minSpacing: 1.6, maxSpacing: 2.6, preferredMeasuresPerLine: 3 } } : { responsive: 'resize', staffwidth: 760 }),
        add_classes: true, paddingtop: 6, paddingbottom: 6, paddingleft: 0, paddingright: 0, foregroundColor: 'currentColor',
        format: { tempofont: '"Source Sans 3" 13', titlefont: '"EB Garamond" 1', gchordfont: '"Source Sans 3" 13', vocalfont: '"EB Garamond" 14', annotationfont: '"Source Sans 3" 12', voicefont: '"Source Sans 3" 12' },
      });
    };
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { engrave(e.target); io.unobserve(e.target); } }), { rootMargin: '600px 0px' });
    figs.forEach((f) => io.observe(f));
    cleanups.push(() => io.disconnect());

    for (const fig of figs) {
      const btn = $('.play', fig);
      btn.addEventListener('click', async () => {
        if (current?.btn === btn) { stop(); return; }
        stop();
        app.player.pause();
        await engrave(fig);
        const ABCJS = window.ABCJS;
        btn.textContent = 'Loading…';
        const ac = audioCtx(); await ac.resume();
        const synth = new ABCJS.synth.CreateSynth();
        try { await synth.init({ audioContext: ac, visualObj: fig._visual, options: {} }); await synth.prime(); }
        catch (err) { btn.textContent = 'Sound unavailable'; console.warn(err); return; }
        btn.classList.add('on'); btn.textContent = 'Stop';
        let lit = [];
        const timer = new ABCJS.TimingCallbacks(fig._visual, {
          eventCallback: (ev) => {
            lit.forEach((el) => el.classList.remove('playing'));
            if (!ev) { stop(); return 'continue'; }
            lit = (ev.elements ?? []).flat(); lit.forEach((el) => el.classList.add('playing'));
            return 'continue';
          },
        });
        current = { synth, timer, btn };
        synth.start(); timer.start();
      });
    }
  }

  // tuning laboratory: two organ-like tones at a chosen frequency ratio
  $$('[data-lab="tuning"]', main).forEach((lab) => {
    const out = $('.readout', lab);
    let nodes = [];
    const silence = () => { nodes.forEach((n) => { try { n.stop(); } catch {} }); nodes = []; $$('button', lab).forEach((b) => b.classList.remove('on')); };
    cleanups.push(silence);
    $$('button[data-ratio]', lab).forEach((b) => b.addEventListener('click', async () => {
      silence(); app.player.pause();
      const ac = audioCtx(); await ac.resume();
      const base = 220, r = Number(b.dataset.ratio), t0 = ac.currentTime + 0.05, dur = 4;
      const master = ac.createGain();
      master.gain.setValueAtTime(0, t0); master.gain.linearRampToValueAtTime(0.16, t0 + 0.08);
      master.gain.setValueAtTime(0.16, t0 + dur - 0.4); master.gain.linearRampToValueAtTime(0, t0 + dur);
      master.connect(ac.destination);
      for (const f of [base, base * r]) [1, 2, 3, 4, 5].forEach((h, k) => {
        const o = ac.createOscillator(), g = ac.createGain();
        o.frequency.value = f * h; g.gain.value = [0.5, 0.28, 0.18, 0.12, 0.08][k];
        o.connect(g).connect(master); o.start(t0); o.stop(t0 + dur); nodes.push(o);
      });
      b.classList.add('on');
      out.textContent = `${b.textContent.trim()}: ${base} Hz and ${(base * r).toFixed(2)} Hz, ${(1200 * Math.log2(r)).toFixed(1)} cents apart. ${b.dataset.say ?? ''}`;
      setTimeout(() => b.classList.remove('on'), dur * 1000);
    }));
  });

  // harmonic series: hear a partial against the fundamental
  $$('svg.series', main).forEach((svg) => {
    const play = async (g) => {
      app.player.pause();
      const ac = audioCtx(); await ac.resume();
      const n = Number(g.dataset.n), f0 = 65.41, t0 = ac.currentTime + 0.03;
      [1, n].forEach((m, k) => {
        const o = ac.createOscillator(), gn = ac.createGain();
        o.type = 'sine'; o.frequency.value = f0 * m;
        gn.gain.setValueAtTime(0, t0); gn.gain.linearRampToValueAtTime(k ? 0.22 : 0.18, t0 + 0.05);
        gn.gain.exponentialRampToValueAtTime(0.0001, t0 + 2.6);
        o.connect(gn).connect(ac.destination); o.start(t0); o.stop(t0 + 2.7);
      });
      $$('.h', svg).forEach((x) => x.classList.toggle('on', x === g));
    };
    $$('.h', svg).forEach((g) => {
      g.addEventListener('click', () => play(g));
      g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(g); } });
    });
  });

  return () => cleanups.forEach((f) => f());
}
