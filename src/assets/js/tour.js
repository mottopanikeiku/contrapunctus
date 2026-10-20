// Loaded only after an explicit tour request (or restoration of an unfinished tour).
const SESSION = 'cp-tour', HINT = 'cp-hall-guide';
const storage = (store, key, value) => { try { if (value === undefined) return store.getItem(key); if (value === null) store.removeItem(key); else store.setItem(key, value); } catch {} };
const visible = (element) => element && [...element.getClientRects()].some((r) => r.width > 0 && r.height > 0) && !element.closest('[hidden], [inert]') && getComputedStyle(element).visibility !== 'hidden' && !element.disabled;

// A bounded, cancellable wait also covers async page modules, disabled controls and font/layout changes.
function waitFor(selector, signal, timeout = 6500) {
  return new Promise((resolve) => {
    let observer, timer, interval;
    const finish = (element) => { observer?.disconnect(); clearTimeout(timer); clearInterval(interval); signal.removeEventListener('abort', abort); resolve(element); };
    const check = () => { const element = document.querySelector(selector); if (visible(element)) finish(element); };
    const abort = () => finish(null);
    if (signal.aborted) return resolve(null);
    observer = new MutationObserver(check);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden', 'class', 'disabled', 'open'] });
    signal.addEventListener('abort', abort, { once: true });
    timer = setTimeout(() => finish(null), timeout);
    interval = setInterval(check, 150);
    check();
  });
}

export function createTour(app) {
  let catalogue, lesson, index = 0, lastPage = null, running = false, routing = false, paused = false;
  let shell, card, ring, sheet, events, stepEvents, target, returnFocus, frame = 0, version = 0;
  let cleanups = [], notes = [];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 700px)');
  const $ = (selector) => shell.querySelector(selector);
  const save = () => storage(sessionStorage, SESSION, JSON.stringify({ id: lesson.id, step: index }));
  const say = (text) => { if (shell) $('.tour-note').textContent = text; };

  async function assets() {
    const revision = document.documentElement.dataset.guide ?? '';
    if (!sheet) {
      sheet = document.createElement('link'); sheet.rel = 'stylesheet'; sheet.dataset.cpTour = '';
      sheet.href = new URL(`assets/css/tour.css?v=${revision}`, app.root).href;
      const loaded = new Promise((resolve, reject) => { sheet.onload = resolve; sheet.onerror = () => reject(new Error('Tour styles could not load.')); });
      document.head.append(sheet);
      try { await loaded; } catch (error) { sheet.remove(); sheet = null; throw error; }
    }
    if (!catalogue) {
      const response = await fetch(new URL(`assets/guide-tours.json?v=${revision}`, app.root));
      if (!response.ok) throw new Error('The tours could not load.');
      catalogue = new Map((await response.json()).map((tour) => [tour.id, tour]));
    }
  }

  function clearStep() {
    stepEvents?.abort(); stepEvents = null;
    cleanups.splice(0).forEach((off) => off());
    cancelAnimationFrame(frame); frame = 0; target = null;
    shell?.remove(); shell = card = ring = null;
  }
  function close() {
    running = false; version++; clearStep(); events?.abort();
    document.documentElement.classList.remove('cp-touring');
    storage(sessionStorage, SESSION, null);
    sheet?.remove(); sheet = null;
    const focus = returnFocus?.isConnected && returnFocus !== document.body ? returnFocus : document.querySelector('h1');
    if (focus) { if (!focus.hasAttribute('tabindex') && focus.tagName === 'H1') focus.tabIndex = -1; focus.focus({ preventScroll: true }); }
  }
  function ui() {
    shell = document.createElement('div'); shell.className = 'cp-tour';
    shell.innerHTML = `<div class="tour-ring" aria-hidden="true" hidden></div><section class="tour-card" role="dialog" aria-modal="false" aria-labelledby="tour-title" aria-describedby="tour-text"><div aria-live="polite" aria-atomic="true"><span class="tour-count"></span><h2 id="tour-title" tabindex="-1"></h2><p id="tour-text"></p></div><p class="tour-note" role="status"></p><button type="button" class="tour-do">Do this step</button><nav class="tour-controls" aria-label="Tour controls"><button type="button" class="tour-back">Back</button><button type="button" class="tour-next">Next</button><button type="button" class="tour-skip">Skip tour</button></nav><span class="tour-keys">← → steps · Esc closes · playback continues</span></section>`;
    document.querySelector('#cp-persist').append(shell);
    card = $('.tour-card'); ring = $('.tour-ring');
    $('.tour-back').onclick = () => go(Math.max(0, index - 1));
    $('.tour-next').onclick = () => paused ? go(index) : go(index + 1);
    $('.tour-skip').onclick = close;
    $('.tour-do').onclick = perform;
  }
  function stepUI(step) {
    ui(); $('.tour-count').textContent = `Step ${index + 1} of ${lesson.steps.length} · ${lesson.title}`;
    $('#tour-title').textContent = step.title; $('#tour-text').textContent = step.text;
    $('.tour-back').disabled = index === 0;
    $('.tour-next').textContent = index === lesson.steps.length - 1 ? 'Finish' : 'Next';
    $('.tour-do').hidden = !step.action; $('.tour-do').disabled = true;
    say('Loading this step…'); position();
  }
  function complete() {
    clearStep(); running = false; storage(sessionStorage, SESSION, null);
    storage(localStorage, HINT, 'completed');
    ui(); shell.classList.add('tour-complete');
    $('.tour-count').textContent = lesson.title;
    $('#tour-title').textContent = 'Tour complete';
    $('#tour-text').textContent = 'The other tours are listed in the Guide.';
    say(notes.join(' '));
    $('.tour-do').hidden = $('.tour-back').hidden = $('.tour-skip').hidden = true;
    $('.tour-next').textContent = 'Close'; $('.tour-next').onclick = close;
    $('#tour-title').focus({ preventScroll: true });
    position();
  }

  function position() {
    frame = 0;
    if (!card) return;
    const width = innerWidth, height = window.visualViewport?.height ?? innerHeight;
    const rect = target?.isConnected ? target.getBoundingClientRect() : null;
    const padding = 7;
    if (rect && rect.width && rect.height) {
      const left = Math.max(3, rect.left - padding), top = Math.max(3, rect.top - padding);
      const right = Math.min(width - 3, rect.right + padding), bottom = Math.min(height - 3, rect.bottom + padding);
      ring.hidden = right <= left || bottom <= top;
      // The ring follows the target's corners: square for the site's controls, round for the Play circle.
      const radius = getComputedStyle(target).borderRadius;
      Object.assign(ring.style, { left: `${left}px`, top: `${top}px`, width: `${Math.max(0, right - left)}px`, height: `${Math.max(0, bottom - top)}px`, borderRadius: radius === '50%' ? '50%' : '0' });
    } else ring.hidden = true;
    if (mobile.matches) {
      // Keep fixed transport controls touchable below the bottom-docked card.
      const transport = target?.closest('.transport, .np, .j-transport');
      const bottom = transport ? height - transport.getBoundingClientRect().top + 12 : 12;
      Object.assign(card.style, { left: '12px', top: 'auto', bottom: `${bottom}px`, width: 'calc(100% - 24px)' });
    } else {
      card.style.width = '350px'; card.style.bottom = 'auto';
      const h = card.offsetHeight, w = card.offsetWidth;
      let left = width - w - 28, top = 100;
      if (rect) {
        // Beside the target, but for a target on the left it goes to the far right, clear of what the step shows (the score, a chart).
        if (rect.right + w + 36 < width) { left = rect.left + rect.width / 2 < width / 2 ? Math.max(rect.right + 22, width - w - 28) : rect.right + 22; top = rect.top; }
        else if (rect.left - w - 36 > 0) { left = rect.left - w - 22; top = rect.top; }
        else { left = Math.max(20, Math.min(width - w - 20, rect.left)); top = rect.bottom + h + 30 < height ? rect.bottom + 22 : rect.top - h - 22; }
      }
      Object.assign(card.style, { left: `${left}px`, top: `${Math.max(18, Math.min(height - h - 18, top))}px` });
    }
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(position); }
  function focusTarget() {
    if (!target) return;
    const before = target.getAttribute('tabindex'), description = target.getAttribute('aria-describedby');
    if (!target.matches('a, button, input, select, textarea, summary, [tabindex]')) target.tabIndex = -1;
    target.setAttribute('aria-describedby', [description, 'tour-text'].filter(Boolean).join(' '));
    cleanups.push(() => {
      if (before === null) targetElement.removeAttribute('tabindex'); else targetElement.setAttribute('tabindex', before);
      if (description === null) targetElement.removeAttribute('aria-describedby'); else targetElement.setAttribute('aria-describedby', description);
    });
    const targetElement = target;
    const observer = new ResizeObserver(schedule); observer.observe(target); observer.observe(card);
    cleanups.push(() => observer.disconnect());
    target.scrollIntoView({ behavior: reduced.matches ? 'instant' : 'smooth', block: 'center', inline: 'nearest' });
    position();
    $('#tour-title').focus({ preventScroll: true });
  }
  function listenToStep(step) {
    const signal = stepEvents.signal;
    const next = () => { queueMicrotask(() => { if (!signal.aborted && running) go(index + 1); }); };
    if (step.advance === 'on-click') target.addEventListener('click', next, { signal, once: true });
    if (step.advance === 'on-event') {
      if (step.action === 'play' || step.action?.startsWith('seek:')) {
        // A page mount may still be starting its recording. Only the reader’s
        // action should dismiss the instruction, not that background completion.
        let requested = false;
        const arm = () => { requested = true; };
        for (const event of ['pointerdown', 'keydown', 'click']) target.addEventListener(event, arm, { capture: true, signal });
        $('.tour-do').addEventListener('click', arm, { capture: true, signal });
        cleanups.push(app.player.on(step.action === 'play' ? 'play' : 'seek', () => { if (requested) next(); }));
      }
      else if (step.action?.startsWith('key:')) window.addEventListener('keydown', (event) => { if (event.key.toUpperCase() === step.action.slice(4).toUpperCase()) next(); }, { signal });
      else if (step.action?.startsWith('wait-for:')) waitFor(step.action.slice(9), signal).then((found) => { if (found) next(); else if (!signal.aborted) skipMissing('The expected control did not appear.'); });
      else target.addEventListener('change', next, { signal, once: true });
    }
  }
  function skipMissing(message) {
    notes.push(`${message} Skipped “${lesson.steps[index].title}”.`);
    go(index + 1);
  }
  async function go(next) {
    if (!running) return;
    const mine = ++version;
    clearStep(); paused = false; index = next;
    if (index >= lesson.steps.length) { complete(); return; }
    const step = lesson.steps[index]; save();
    stepUI(step);
    const url = new URL(step.page, app.root);
    if (step.page !== lastPage || location.pathname !== url.pathname || location.search !== url.search) {
      routing = true;
      try { await app.navigate(url.href); } finally { routing = false; }
      if (mine !== version || !running) return;
      lastPage = step.page;
      // Router unmount removes page-bound listeners and the old spotlight.
      if (!shell) stepUI(step);
      // Reopen non-playing UI prerequisites after a refresh or return from another page.
      // Never replay a recording, passage, seek or performer switch without a new gesture.
      for (const previous of lesson.steps.slice(0, index)) {
        if (previous.page !== step.page || previous.action !== 'click') continue;
        const control = document.querySelector(previous.selector);
        if (control?.matches('[role="tab"]') && control.getAttribute('aria-selected') !== 'true') control.click();
        else if (control?.matches('button[aria-expanded="false"]')) control.click();
        else if (control?.matches('summary') && !control.closest('details').open) control.click();
      }
    }
    stepEvents = new AbortController();
    const signal = stepEvents.signal;
    let found;
    try { found = await waitFor(step.selector, signal); }
    catch { found = null; }
    if (mine !== version || signal.aborted || !running) return;
    if (!found) { skipMissing('This part of the page is unavailable.'); return; }
    target = found; $('.tour-do').disabled = false;
    say(notes.join(' ')); focusTarget(); listenToStep(step);
  }

  async function perform() {
    if (!running || !target || !stepEvents) return;
    const step = lesson.steps[index], signal = stepEvents.signal, action = step.action;
    $('.tour-do').disabled = true;
    try {
      if (action === 'click') target.click();
      else if (action === 'play') {
        if (app.player.playing) { if (step.advance === 'on-event') go(index + 1); }
        else if (!await app.player.play()) say('Could not start playback; try the highlighted Play button or continue without sound.');
      } else if (action?.startsWith('seek:')) app.player.seek(Number(action.slice(5)));
      else if (action?.startsWith('key:')) document.body.dispatchEvent(new KeyboardEvent('keydown', { key: action.slice(4), bubbles: true }));
      else if (action?.startsWith('wait-for:')) {
        const found = await waitFor(action.slice(9), signal);
        if (!found && !signal.aborted) skipMissing('The expected control did not appear.');
      }
      if (!signal.aborted && shell) $('.tour-do').disabled = false;
    } catch { if (!signal.aborted) { say('The control did not respond; try it directly or choose Next.'); $('.tour-do').disabled = false; } }
  }
  function keyboard(event) {
    if (!shell || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'Escape') { event.preventDefault(); event.stopImmediatePropagation(); close(); return; }
    if (event.target.closest('input, textarea, select, [contenteditable="true"], [role="slider"]')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); event.stopImmediatePropagation();
      if (!running) { close(); return; }
      if (paused) go(index); else go(event.key === 'ArrowLeft' ? Math.max(0, index - 1) : index + 1);
    }
    if (event.key === 'Tab') {
      // Cycle through the card AND its highlighted controls, not the dimmed page.
      const controls = [...card.querySelectorAll('button:not([disabled]):not([hidden])'), ...(target ? [target, ...target.querySelectorAll('a,button,input,select,summary,[tabindex]')] : [])].filter((el) => visible(el) && el.tabIndex >= 0);
      if (!controls.length) return;
      const at = controls.indexOf(document.activeElement), direction = event.shiftKey ? -1 : 1;
      const next = at < 0 ? (event.shiftKey ? controls.length - 1 : 0) : (at + direction + controls.length) % controls.length;
      event.preventDefault(); controls[next].focus({ preventScroll: true });
    }
  }
  return {
    async start(id) {
      let saved;
      if (!id) { try { saved = JSON.parse(storage(sessionStorage, SESSION) || 'null'); } catch {} id = saved?.id; }
      if (!id) return;
      if (shell || running) close();
      returnFocus = document.activeElement;
      try { await assets(); } catch (error) { sheet?.remove(); sheet = null; throw error; }
      lesson = catalogue.get(id);
      if (!lesson) { storage(sessionStorage, SESSION, null); sheet?.remove(); sheet = null; throw new Error('This tour is no longer in the Guide.'); }
      notes = []; lastPage = null; running = true;
      storage(localStorage, HINT, 'started');
      const hint = document.querySelector('.hall-hint'); if (hint) hint.hidden = true;
      document.documentElement.classList.add('cp-touring');
      events = new AbortController();
      window.addEventListener('keydown', keyboard, { capture: true, signal: events.signal });
      window.addEventListener('resize', schedule, { signal: events.signal });
      window.addEventListener('scroll', schedule, { capture: true, passive: true, signal: events.signal });
      window.visualViewport?.addEventListener('resize', schedule, { signal: events.signal });
      await go(Number.isInteger(saved?.step) ? Math.max(0, Math.min(lesson.steps.length - 1, saved.step)) : 0);
    },
    unmount() { if (!running) { if (shell) close(); return; } if (!routing) version++; clearStep(); },
    mount() {
      if (!running || routing) return;
      // Ordinary navigation is allowed: do not drag the reader back unexpectedly.
      paused = true; ui(); $('.tour-count').textContent = `Step ${index + 1} of ${lesson.steps.length}`;
      $('#tour-title').textContent = 'Tour paused';
      $('#tour-text').textContent = 'The tour is saved. Resume step returns to it; Skip tour closes it.';
      $('.tour-do').hidden = $('.tour-back').hidden = true; $('.tour-next').textContent = 'Resume step';
      position(); $('#tour-title').focus({ preventScroll: true });
    },
  };
}
