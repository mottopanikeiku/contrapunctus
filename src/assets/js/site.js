// Contrapunctus — page behaviour for the Atlas pages: navigation, hero, reveals, notation, lightbox.
// Mounted by app.js on every non-hall page; returns a cleanup so the router can swap pages.
let abcjsReady = null;
export function loadAbcjs(root) {
  return (abcjsReady ??= window.ABCJS ? Promise.resolve(window.ABCJS) : new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = new URL('assets/vendor/abcjs-basic-min.js', root).href;
    s.onload = () => res(window.ABCJS); s.onerror = rej; document.head.append(s);
  }));
}

let glossaryData;
/** Delegated so the Hall can use the same popover for dynamically replaced cues. */
export function mountTerms(app) {
  const events = new AbortController();
  const on = (target, name, fn, options = {}) => target.addEventListener(name, fn, { ...options, signal: events.signal });
  const popup = document.createElement('aside');
  popup.className = 'term-popover'; popup.hidden = true; popup.id = 'term-popover';
  popup.setAttribute('role', 'dialog'); popup.setAttribute('aria-label', 'Glossary definition');
  const title = document.createElement('strong'), text = document.createElement('p'), link = document.createElement('a'), close = document.createElement('button');
  text.id = 'term-popover-description';
  link.textContent = 'Full glossary entry';
  close.type = 'button'; close.textContent = '×'; close.setAttribute('aria-label', 'Close definition');
  popup.append(close, title, text, link); document.body.append(popup);
  let active = null, tapped = null, pointer = 'mouse', timer;
  const hide = () => {
    clearTimeout(timer);
    active?.removeAttribute('aria-describedby'); active?.setAttribute('aria-expanded', 'false');
    active = null; tapped = null; popup.hidden = true;
  };
  const position = () => {
    if (!active || popup.hidden) return;
    const r = active.getBoundingClientRect(), p = popup.getBoundingClientRect();
    popup.style.left = `${Math.max(12, Math.min(r.left, innerWidth - p.width - 12))}px`;
    popup.style.top = `${Math.max(12, r.bottom + p.height + 12 < innerHeight ? r.bottom + 8 : r.top - p.height - 8)}px`;
  };
  const show = async (anchor) => {
    clearTimeout(timer);
    if (active !== anchor) hide();
    active = anchor;
    glossaryData ??= fetch(new URL('assets/glossary.json', app.root)).then((r) => { if (!r.ok) throw new Error('Glossary unavailable'); return r.json(); });
    let data;
    try { data = await glossaryData; } catch { return; } // The ordinary glossary link still works.
    if (events.signal.aborted || active !== anchor) return;
    const entry = data[anchor.dataset.term];
    if (!entry) return;
    title.textContent = entry.term; text.textContent = entry.short; link.href = anchor.href;
    anchor.setAttribute('aria-describedby', text.id); anchor.setAttribute('aria-expanded', 'true');
    popup.hidden = false; position();
  };
  const term = (node) => node instanceof Element ? node.closest('a[data-term]') : null;
  const later = () => { clearTimeout(timer); timer = setTimeout(hide, 180); };
  on(document, 'pointerdown', (e) => { pointer = e.pointerType; if (!term(e.target) && !popup.contains(e.target)) hide(); });
  on(document, 'pointerover', (e) => { const a = term(e.target); if (a && e.pointerType !== 'touch') show(a); if (popup.contains(e.target)) clearTimeout(timer); });
  on(document, 'pointerout', (e) => {
    if ((term(e.target) || popup.contains(e.target)) && !popup.contains(e.relatedTarget) && !term(e.relatedTarget)) later();
  });
  on(document, 'focusin', (e) => { const a = term(e.target); if (a) show(a); else if (popup.contains(e.target)) clearTimeout(timer); else hide(); });
  on(document, 'focusout', (e) => { if (!popup.contains(e.relatedTarget) && !term(e.relatedTarget)) later(); });
  on(document, 'click', (e) => {
    const a = term(e.target);
    if (!a || pointer !== 'touch' || e.detail === 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    if (tapped === a) return;
    e.preventDefault(); e.stopPropagation(); show(a); tapped = a;
  }, { capture: true });
  on(close, 'click', () => { const a = active; hide(); a?.focus(); hide(); });
  on(document, 'keydown', (e) => { if (e.key === 'Escape' && !popup.hidden) { const a = active; hide(); a?.focus(); hide(); } });
  on(window, 'resize', position);
  on(window, 'scroll', position, { capture: true, passive: true });
  return () => { events.abort(); clearTimeout(timer); hide(); popup.remove(); };
}

export async function mount(app) {
  const cleanups = [];
  let mounted = true;
  cleanups.push(() => { mounted = false; });
  const listen = (target, ev, fn, opts) => { target.addEventListener(ev, fn, opts); cleanups.push(() => target.removeEventListener(ev, fn, opts)); };
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  cleanups.push(mountTerms(app));

  // ---- textbook apparatus
  $$('[data-copy]').forEach((button) => listen(button, 'click', async () => {
    const target = document.getElementById(button.dataset.copy);
    const status = button.closest('.citation')?.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(target.textContent);
      if (status) status.textContent = 'Citation copied.';
    } catch {
      const selection = window.getSelection(), range = document.createRange();
      range.selectNodeContents(target); selection.removeAllRanges(); selection.addRange(range);
      if (status) status.textContent = 'Citation selected; copy it with the browser’s Copy command.';
    }
  }));
  const kind = $('#glossary-kind');
  const filterTerms = () => {
    let count = 0;
    $$('.glossary-entry').forEach((entry) => { entry.hidden = !!kind.value && entry.dataset.kind !== kind.value; if (!entry.hidden) count++; });
    $('#glossary-count').textContent = `${count} terms`;
    $$('.glossary-alphabet a').forEach((a) => {
      const entry = $$('.glossary-entry:not([hidden])').find((el) => el.dataset.initial === a.dataset.initial);
      a.hidden = !entry; if (entry) a.href = `#${entry.id}`;
    });
  };
  if (kind) listen(kind, 'change', filterTerms);
  // ---- recording dossiers (Sources & method): each is fetched from assets/dossiers/ when it is first opened.
  const loadDossier = (details) => details.dossierLoad ??= fetch(new URL(`assets/dossiers/${details.dataset.dossier}.json?v=${details.parentElement.dataset.version ?? ''}`, app.root))
    .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
    .then(({ html }) => { $('.dossier-status', details)?.remove(); details.insertAdjacentHTML('beforeend', html); })
    .catch(() => {
      details.dossierLoad = null; // Reopening tries again.
      if (!$('.dossier-status', details)) details.insertAdjacentHTML('beforeend', '<p class="dossier-status">This dossier could not be loaded.</p>');
    });
  listen(document, 'toggle', (e) => { if (e.target.matches?.('.research-dossier[data-dossier]') && e.target.open) loadDossier(e.target); }, true);
  const openAnchor = () => {
    let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    // A dossier's source list exists only once the dossier has been loaded.
    const source = !target && /^source-(.+)-\d+$/.exec(id);
    const dossier = target?.closest('.research-dossier') ?? (source ? document.getElementById(`dossier-${source[1]}`) : null);
    if (dossier) dossier.open = true;
    if (dossier && source) loadDossier(dossier).then(() => { if (mounted) app.scrollFragment(new URL(location.href)); });
    const entry = target?.closest('.glossary-entry');
    if (entry?.hidden && kind) { kind.value = ''; filterTerms(); app.scrollFragment(new URL(location.href)); }
  };
  listen(window, 'hashchange', openAnchor); openAnchor();
  // The router may handle a same-page link without dispatching hashchange.
  listen(document, 'click', (e) => {
    const a = e.target.closest?.('a[href^="#"]');
    if (!a) return;
    let target; try { target = document.getElementById(decodeURIComponent(a.hash.slice(1))); } catch { return; }
    const dossier = target?.closest('.research-dossier');
    if (dossier) dossier.open = true;
    if (target?.classList.contains('glossary-entry') && target.hidden && kind) { kind.value = ''; filterTerms(); }
  }, { capture: true });
  const table = $('.recording-table');
  if (table) {
    const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
    $$('[data-sort-column]', table).forEach((button) => listen(button, 'click', () => {
      const column = Number(button.dataset.sortColumn), th = button.closest('th');
      const direction = th.getAttribute('aria-sort') === 'ascending' ? -1 : 1;
      const rows = $$('tbody tr', table);
      rows.sort((a, b) => direction * collator.compare(a.cells[column].dataset.sort, b.cells[column].dataset.sort));
      $('tbody', table).append(...rows);
      $$('th', table).forEach((h) => h.setAttribute('aria-sort', h === th ? direction === 1 ? 'ascending' : 'descending' : 'none'));
      $('.table-status').textContent = `Sorted by ${button.textContent.replace('↕', '').trim()}, ${direction === 1 ? 'ascending' : 'descending'}.`;
    }));
  }

  // ---- masthead. Over a dark hero it stays transparent only while no text of the hero has reached it; from
  // there to the hero's foot it is opaque night (`on-dark`), below the hero opaque paper. On a night page,
  // where titles start right under it, it turns opaque night as soon as the page moves.
  const mast = $('.masthead');
  const hero = !document.body.classList.contains('is-night') && $('#main :is(.hero, .e-hero, .c-hero, .w-hero, .guide-hero)');
  let clear = 8, foot = 8;
  const measure = () => {
    if (!hero) return;
    const h = mast.offsetHeight, texts = [...hero.querySelectorAll('h1, .crumbs, .kicker, .hero-sub, .n')].map((el) => el.getBoundingClientRect().top + scrollY);
    foot = Math.max(8, hero.getBoundingClientRect().bottom + scrollY - h);
    clear = Math.max(8, Math.min(foot, ...texts.map((t) => t - h - 16)));
  };
  const onScroll = () => {
    mast.classList.toggle('scrolled', scrollY > clear);
    mast.classList.toggle('on-dark', !!hero && scrollY > clear && scrollY < foot);
  };
  if (mast) {
    measure(); onScroll();
    listen(window, 'scroll', onScroll, { passive: true });
    listen(window, 'resize', () => { measure(); onScroll(); }, { passive: true });
    document.fonts.ready.then(() => { if (mounted) { measure(); onScroll(); } });
  }
  const toggle = $('.nav-toggle');
  const closeNav = () => { $('#nav')?.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); if (toggle) toggle.textContent = 'Menu'; };
  if (toggle) listen(toggle, 'click', () => {
    const open = $('#nav').classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? 'Close' : 'Menu';
  });
  if (mast) {
    listen(mast, 'click', (e) => { if (e.target.closest('a')) closeNav(); });
    listen(document, 'click', (e) => { if (!mast.contains(e.target)) closeNav(); });
    listen(document, 'focusin', (e) => { if (!mast.contains(e.target)) closeNav(); });
    listen(document, 'keydown', (e) => { if (e.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') { closeNav(); toggle.focus(); } });
  }

  // ---- hero slideshow
  const slides = $$('.hero-slide');
  if (slides.length) {
    const cap = $('.hero-caption');
    const dots = $$('.hero-dots button');
    let i = 0, timer, preloadTimer;
    // Later slides carry data-src/data-srcset; fetch each one a slide ahead so the hero costs one image up front.
    const prime = (k) => {
      const slide = slides[(k + slides.length) % slides.length], im = slide?.querySelector('img[data-src]');
      if (!im) return;
      for (const source of slide.querySelectorAll('source[data-srcset]')) { source.srcset = source.dataset.srcset; source.removeAttribute('data-srcset'); }
      if (im.dataset.srcset) im.srcset = im.dataset.srcset;
      im.src = im.dataset.src;
      im.removeAttribute('data-src'); im.removeAttribute('data-srcset');
    };
    const show = (n) => {
      prime(n); prime(n + 1);
      slides[i].classList.remove('on'); dots[i]?.classList.remove('on');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('on'); dots[i]?.classList.add('on');
      cap.innerHTML = slides[i].dataset.caption;
    };
    const auto = () => {
      clearInterval(timer); clearTimeout(preloadTimer);
      if (!reduced) {
        preloadTimer = setTimeout(() => prime(i + 1), 6000);
        timer = setInterval(() => show(i + 1), 9000);
      }
    };
    cleanups.push(() => { clearInterval(timer); clearTimeout(preloadTimer); });
    dots.forEach((d, n) => d.addEventListener('click', () => { show(n); auto(); }));
    cap.innerHTML = slides[0].dataset.caption;
    auto();
  }

  // ---- reveal on scroll
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach((el) => io.observe(el));
  cleanups.push(() => io.disconnect());

  // ---- music glyphs beside small-caps labels: each glyph's ink is drawn at its own staff height, so measure the
  // ink and move it until its middle meets the middle of the small caps (without script it stays on the baseline).
  // The webfont sheet is applied after the first paint, so measure again whenever a font finishes loading.
  const glyphs = $$('.anatomy h3 .glyph');
  if (glyphs.length) {
    const placeGlyphs = () => {
      if (!mounted) return;
      const pen = document.createElement('canvas').getContext('2d');
      for (const g of glyphs) {
        const style = getComputedStyle(g), size = parseFloat(style.fontSize);
        pen.font = `${size}px ${style.fontFamily}`;
        const ink = pen.measureText(g.textContent);
        const label = parseFloat(getComputedStyle(g.parentElement).fontSize);
        g.style.translate = `0 ${((ink.actualBoundingBoxAscent - ink.actualBoundingBoxDescent) / 2 - label * 0.22).toFixed(1)}px`;
      }
    };
    document.fonts.ready.then(placeGlyphs);
    listen(document.fonts, 'loadingdone', placeGlyphs);
  }

  // ---- table of contents highlight: every section the contents list names, chapters and apparatus alike;
  // at the foot of the page the last entry is marked, since a short last section never reaches the band.
  const tocLinks = $$('.toc a');
  if (tocLinks.length) {
    const map = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const mark = (a) => { tocLinks.forEach((x) => x.classList.toggle('on', x === a)); };
    const tio = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) mark(map.get(e.target.id)); }), { rootMargin: '-30% 0px -60% 0px' });
    for (const id of map.keys()) { const s = document.getElementById(id); if (s) tio.observe(s); }
    const atFoot = () => { if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) mark(tocLinks.at(-1)); };
    listen(window, 'scroll', atFoot, { passive: true });
    cleanups.push(() => tio.disconnect());
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
  let current = null; // { synth, timer, btn, label }

  function stopCurrent() {
    if (!current) return;
    current.synth.stop();
    current.timer?.stop();
    current.btn.classList.remove('on');
    current.btn.textContent = current.label;
    if (current.name) current.btn.setAttribute('aria-label', current.name);
    $$('.playing').forEach((el) => el.classList.remove('playing'));
    current = null;
  }

  function engrave(fig) {
    if (fig.dataset.done) return;
    const target = $('.abc', fig);
    const narrow = target.clientWidth < 620;
    let src = $('script[type="text/vnd.abc"]', fig).textContent;
    // On a phone, voice names at every system would take a third of the staff: drop them and fit more bars per line.
    if (narrow) src = src.replace(/^V:.*$/gm, (line) => line.replace(/\s+(?:name|nm|subname|snm)=("[^"]*"|\S+)/g, ''));
    const [visual] = ABCJS.renderAbc(target, src, {
      ...(narrow
        ? { staffwidth: Math.max(240, target.clientWidth - 12), wrap: { minSpacing: 1, maxSpacing: 2.4, preferredMeasuresPerLine: 4 } }
        : { responsive: 'resize', staffwidth: 760 }),
      add_classes: true, paddingtop: 6, paddingbottom: 6, paddingleft: 0, paddingright: 0,
      foregroundColor: 'currentColor', format: { tempofont: '"EB Garamond" italic 15', titlefont: '"EB Garamond" 1', gchordfont: '"EB Garamond" 14', vocalfont: '"EB Garamond" 13', annotationfont: '"EB Garamond" italic 13', partsfont: '"EB Garamond" 13', voicefont: '"Cormorant SC" 12' },
    });
    fig._visual = visual;
    fig.dataset.done = '1';
  }

  async function play(fig, btn) {
    if (current?.btn === btn) { stopCurrent(); return; }
    stopCurrent();
    engrave(fig);
    const visual = fig._visual;
    const label = btn.textContent, name = btn.getAttribute('aria-label');
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
    if (!mounted) { synth.stop(); return; }
    btn.classList.remove('loading');
    btn.classList.add('on');
    btn.textContent = 'Stop';
    // An accessible name must begin with the visible label: “Stop” while playing.
    if (name) btn.setAttribute('aria-label', name.replace(/^Play\b/, 'Stop'));
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
    current = { synth, timer, btn, label, name };
    synth.start();
    timer.start();
  }

  const scores = $$('figure.score');
  cleanups.push(stopCurrent);
  if (scores.length) {
    // abcjs (≈500 KB) is fetched only when a score comes near the screen or a Play button is pressed.
    const abc = () => loadAbcjs(app.root);
    const sio = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      sio.unobserve(e.target);
      abc().then(() => { if (mounted) engrave(e.target); });
    }), { rootMargin: '300px 0px' });
    scores.forEach((f) => sio.observe(f));
    cleanups.push(() => sio.disconnect());
    scores.forEach((f) => listen($('.play', f), 'click', (ev) => { const b = ev.currentTarget; app.player.pause(); abc().then(() => { if (mounted) play(f, b); }); }));
    $$('[data-play-example]').forEach((button) => listen(button, 'click', () => {
      const fig = document.getElementById(button.dataset.playExample);
      if (!fig) return;
      app.player.pause(); abc().then(() => { if (mounted) play(fig, button); });
    }));
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
    $$('.h', svg).forEach((g) => g.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); g.dispatchEvent(new Event('click')); } }));
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
  // ---- start a recording in the persistent player from any page. The button that started it shows the state:
  // marked and labelled Pause while its recording plays; pressing it again pauses or resumes.
  const hearButtons = $$('[data-play-id]');
  let heard = null;
  const hearState = () => {
    for (const b of hearButtons) {
      b.dataset.label ??= b.textContent;
      const on = b === heard && app.player.playing && app.player.track?.id === b.dataset.playId;
      b.classList.toggle('on', on);
      b.textContent = on ? 'Pause' : b.dataset.label;
    }
  };
  if (hearButtons.length) for (const ev of ['play', 'pause', 'track', 'ended']) cleanups.push(app.player.on(ev, hearState));
  hearButtons.forEach((b) => listen(b, 'click', (e) => {
    e.preventDefault(); stopCurrent();
    if (b === heard && app.player.track?.id === b.dataset.playId) { app.player.toggle(); return; }
    heard = b;
    app.player.load(b.dataset.playId, { play: true, t: Number(b.dataset.playT) || 0 }).then(hearState);
  }));

  return () => cleanups.forEach((f) => { try { f(); } catch {} });
}
