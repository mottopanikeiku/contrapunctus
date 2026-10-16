// Contrapunctus — client behaviour: navigation, hero, reveals, notation, audio, lightbox.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- masthead
  const mast = $('.masthead');
  const onScroll = () => mast.classList.toggle('scrolled', scrollY > innerHeight * 0.55);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const toggle = $('.nav-toggle');
  toggle?.addEventListener('click', () => {
    const open = $('#nav').classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // ---- hero slideshow
  const slides = $$('.hero-slide');
  if (slides.length) {
    const cap = $('.hero-caption');
    const dots = $$('.hero-dots button');
    let i = 0, timer;
    const show = (n) => {
      slides[i].classList.remove('on'); dots[i]?.classList.remove('on');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('on'); dots[i]?.classList.add('on');
      cap.innerHTML = slides[i].dataset.caption;
    };
    const auto = () => { clearInterval(timer); if (!reduced) timer = setInterval(() => show(i + 1), 9000); };
    dots.forEach((d, n) => d.addEventListener('click', () => { show(n); auto(); }));
    cap.innerHTML = slides[0].dataset.caption;
    auto();
  }

  // ---- reveal on scroll
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach((el) => io.observe(el));

  // ---- table of contents highlight
  const tocLinks = $$('.toc a');
  if (tocLinks.length) {
    const map = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const tio = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { tocLinks.forEach((a) => a.classList.remove('on')); map.get(e.target.id)?.classList.add('on'); }
    }), { rootMargin: '-30% 0px -60% 0px' });
    $$('.chapter').forEach((s) => tio.observe(s));
  }

  // ---- lightbox
  const dlg = $('dialog.lightbox');
  if (dlg) {
    $$('a.frame').forEach((a) => a.addEventListener('click', (ev) => {
      ev.preventDefault();
      const im = $('img', a);
      $('img', dlg).src = a.getAttribute('href') || im.src;
      $('img', dlg).alt = im.alt;
      $('p', dlg).textContent = a.dataset.caption || im.alt;
      dlg.showModal();
    }));
    dlg.addEventListener('click', (ev) => { if (ev.target === dlg || ev.target.tagName === 'BUTTON' || ev.target.tagName === 'IMG') dlg.close(); });
  }

  // ---- notation
  let audioCtx;
  const ctxAudio = () => (audioCtx ??= new (window.AudioContext || window.webkitAudioContext)());
  let current = null; // { synth, timer, btn }

  function stopCurrent() {
    if (!current) return;
    current.synth.stop();
    current.timer?.stop();
    current.btn.classList.remove('on');
    current.btn.textContent = 'Play';
    $$('.playing').forEach((el) => el.classList.remove('playing'));
    current = null;
  }

  function engrave(fig) {
    if (fig.dataset.done) return;
    const src = $('script[type="text/vnd.abc"]', fig).textContent;
    const target = $('.abc', fig);
    const [visual] = ABCJS.renderAbc(target, src, {
      responsive: 'resize', add_classes: true, paddingtop: 6, paddingbottom: 6, paddingleft: 0, paddingright: 0,
      staffwidth: 760, foregroundColor: 'currentColor', format: { titlefont: '"EB Garamond" 1', gchordfont: '"EB Garamond" 14', vocalfont: '"EB Garamond" 13', annotationfont: '"EB Garamond" italic 13', partsfont: '"EB Garamond" 13', voicefont: '"Cormorant SC" 12' },
    });
    fig._visual = visual;
    fig.dataset.done = '1';
  }

  async function play(fig, btn) {
    if (current?.btn === btn) { stopCurrent(); return; }
    stopCurrent();
    engrave(fig);
    const visual = fig._visual;
    btn.classList.add('loading');
    btn.textContent = 'Loading';
    const ac = ctxAudio();
    await ac.resume();
    const synth = new ABCJS.synth.CreateSynth();
    try {
      await synth.init({ audioContext: ac, visualObj: visual, options: { soundFontVolumeMultiplier: 1 } });
      await synth.prime();
    } catch (err) {
      btn.classList.remove('loading'); btn.textContent = 'No audio';
      console.error(err);
      return;
    }
    btn.classList.remove('loading');
    btn.classList.add('on');
    btn.textContent = 'Stop';
    let lit = [];
    const timer = new ABCJS.TimingCallbacks(visual, {
      eventCallback: (ev) => {
        lit.forEach((el) => el.classList.remove('playing'));
        if (!ev) { stopCurrent(); return 'continue'; }
        lit = (ev.elements ?? []).flat();
        lit.forEach((el) => el.classList.add('playing'));
        return 'continue';
      },
    });
    current = { synth, timer, btn };
    synth.start();
    timer.start();
  }

  const scores = $$('figure.score');
  if (scores.length) {
    const whenAbc = (fn) => (window.ABCJS ? fn() : addEventListener('load', fn, { once: true }));
    whenAbc(() => {
      const sio = new IntersectionObserver((es) => es.forEach((e) => {
        if (e.isIntersecting) { engrave(e.target); sio.unobserve(e.target); }
      }), { rootMargin: '400px 0px' });
      scores.forEach((f) => sio.observe(f));
      scores.forEach((f) => $('.play', f).addEventListener('click', (ev) => play(f, ev.currentTarget)));
    });
  }

  // ---- tuning laboratory: compare pure and tempered intervals
  $$('[data-lab="tuning"]').forEach((lab) => {
    const out = $('.readout', lab);
    let nodes = [];
    const stop = () => { nodes.forEach((n) => { try { n.stop(); } catch {} }); nodes = []; $$('button', lab).forEach((b) => b.classList.remove('on')); };
    const tone = (ac, f, t0, dur, gainNode) => {
      // organ-like tone: fundamental plus a few harmonics, so beats are audible
      [1, 2, 3, 4, 5].forEach((h, k) => {
        const o = ac.createOscillator();
        const g = ac.createGain();
        o.frequency.value = f * h;
        g.gain.value = [0.5, 0.28, 0.18, 0.12, 0.08][k];
        o.connect(g).connect(gainNode);
        o.start(t0); o.stop(t0 + dur);
        nodes.push(o);
      });
    };
    $$('button[data-ratio]', lab).forEach((b) => b.addEventListener('click', async () => {
      stop();
      const ac = ctxAudio(); await ac.resume();
      const base = 220;
      const r = Number(b.dataset.ratio); // frequency ratio, e.g. 1.25 (pure third) or 1.259921 (tempered)
      const master = ac.createGain();
      const t0 = ac.currentTime + 0.05, dur = 4;
      master.gain.setValueAtTime(0, t0);
      master.gain.linearRampToValueAtTime(0.16, t0 + 0.08);
      master.gain.setValueAtTime(0.16, t0 + dur - 0.4);
      master.gain.linearRampToValueAtTime(0, t0 + dur);
      master.connect(ac.destination);
      tone(ac, base, t0, dur, master);
      tone(ac, base * r, t0, dur, master);
      b.classList.add('on');
      const cents = 1200 * Math.log2(r);
      out.textContent = `${b.textContent.trim()}: ${base} Hz and ${(base * r).toFixed(2)} Hz — ${cents.toFixed(1)} cents. ${b.dataset.say ?? ''}`;
      setTimeout(() => b.classList.remove('on'), dur * 1000);
    }));
  });

  // ---- harmonic series: click a partial to hear it against the fundamental
  $$('svg.series').forEach((svg) => {
    $$('.h', svg).forEach((g) => g.addEventListener('click', async () => {
      const ac = ctxAudio(); await ac.resume();
      const n = Number(g.dataset.n), f0 = 65.41; // C2
      const t0 = ac.currentTime + 0.03;
      [1, n].forEach((m, k) => {
        const o = ac.createOscillator(), gn = ac.createGain();
        o.type = 'sine'; o.frequency.value = f0 * m;
        gn.gain.setValueAtTime(0, t0);
        gn.gain.linearRampToValueAtTime(k ? 0.22 : 0.18, t0 + 0.05);
        gn.gain.exponentialRampToValueAtTime(0.0001, t0 + 2.6);
        o.connect(gn).connect(ac.destination); o.start(t0); o.stop(t0 + 2.7);
      });
      $$('.h', svg).forEach((x) => x.classList.toggle('on', x === g));
    }));
  });
})();
