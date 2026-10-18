// Station content is static HTML; only playback state, cues and visibility change.
export async function mount(app) {
  const root = document.querySelector('[data-j-reader]');
  if (!root) return;
  const data = JSON.parse(root.querySelector('[data-journey]').textContent);
  const { player } = app, stations = data.stations;
  const panels = [...root.querySelectorAll('[data-j-station]')];
  const rail = [...root.querySelectorAll('[data-j-go]')];
  const play = root.querySelector('[data-j-play]'), previous = root.querySelector('[data-j-prev]'), next = root.querySelector('[data-j-next]');
  const status = root.querySelector('[data-j-status]'), clock = root.querySelector('[data-j-clock]'), positionLabel = root.querySelector('[data-j-position]');
  const intro = root.querySelector('[data-j-intro]'), finish = root.querySelector('[data-j-finish]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const key = `cp-journey:${data.id}`, events = new AbortController(), off = [];
  let index = 0, position = stations[0].listen.from, started = false, complete = false;
  let engaged = false, loading = false, alive = true, priorConcert = null;
  let cueIndex = -2, lastSecond = -1, lastSave = 0, animations = [], touch = null;
  const on = (el, type, fn, options = {}) => el.addEventListener(type, fn, { ...options, signal: events.signal });
  const listen = (type, fn) => off.push(player.on(type, fn));
  const current = () => stations[index];
  const matches = () => player.track?.id === current().listen.id;
  const clamp = (t) => Math.max(current().listen.from, Math.min(current().listen.to, t));
  const fmt = app.fmt;

  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    const i = saved ? stations.findIndex((s) => s.id === saved.station && s.listen.id === saved.listen) : -1;
    if (i >= 0 && Number.isFinite(saved.t)) {
      index = i; position = clamp(saved.t); started = true;
      complete = !!saved.complete && i === stations.length - 1;
    }
  } catch { /* Reading stays usable when storage is unavailable. */ }

  function save() {
    if (!started) return;
    try {
      localStorage.setItem(key, JSON.stringify({ station: current().id, listen: current().listen.id, t: position, complete }));
    } catch {
      root.querySelector('[data-j-save-note]').textContent = ' · This browser cannot save your place.';
    }
    lastSave = performance.now();
  }
  function acquire() {
    if (priorConcert === null) { priorConcert = player.concert; player.concert = false; }
    engaged = true;
  }
  function release() {
    engaged = false;
    if (priorConcert !== null) { player.concert = priorConcert; priorConcert = null; }
  }
  function controls() {
    const playing = engaged && matches() && player.playing;
    play.textContent = loading ? 'Opening…' : complete ? 'Listen again' : playing ? 'Pause' : started ? 'Resume' : 'Begin';
    play.setAttribute('aria-label', playing ? 'Pause journey' : complete ? 'Restart journey' : started ? 'Resume journey' : 'Begin journey');
    play.disabled = loading;
    previous.disabled = loading || index === 0;
    next.disabled = loading || complete;
    next.innerHTML = index === stations.length - 1 ? '<span>Finish</span> →' : '<span>Next</span> →';
    rail.forEach((button) => { button.disabled = loading; });
    root.classList.toggle('is-playing', playing);
    intro.hidden = started;
    finish.hidden = !complete;
    positionLabel.textContent = `Station ${index + 1} of ${stations.length}`;
  }
  function paint(t = position) {
    position = clamp(t);
    const s = current(), duration = s.listen.to - s.listen.from;
    const elapsed = Math.max(0, position - s.listen.from), second = Math.floor(elapsed);
    if (second !== lastSecond) { clock.textContent = `${fmt(elapsed)} / ${fmt(duration)}`; lastSecond = second; }
    rail[index].style.setProperty('--j-progress', `${Math.min(100, elapsed / duration * 100)}%`);
    let c = -1;
    for (let i = 0; i < s.cues.length && s.cues[i].at <= position; i++) c = i;
    if (c !== cueIndex) {
      panels[index].querySelector('[data-j-cue]').textContent = c < 0 ? 'Let the music lead you into this station.' : s.cues[c].text;
      panels[index].querySelector('.j-cue').classList.toggle('has-cue', c >= 0);
      cueIndex = c;
    }
  }
  function show(i, { focus = false, animate = true } = {}) {
    animations.forEach((a) => { a.onfinish = null; a.cancel(); }); animations = [];
    const old = panels[index];
    index = i; cueIndex = -2; lastSecond = -1;
    panels.forEach((panel, n) => {
      panel.hidden = n !== i; panel.inert = n !== i;
      panel.classList.toggle('is-current', n === i);
      panel.classList.remove('is-leaving');
      panel.setAttribute('aria-hidden', String(n !== i));
    });
    rail.forEach((button, n) => {
      if (n === i) button.setAttribute('aria-current', 'step'); else button.removeAttribute('aria-current');
      button.classList.toggle('is-past', n < i);
      button.style.setProperty('--j-progress', n < i ? '100%' : '0%');
    });
    if (animate && !reduced.matches && old !== panels[i]) {
      old.hidden = false; old.classList.add('is-leaving');
      const outgoing = old.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, fill: 'forwards' });
      const incoming = panels[i].animate([{ opacity: 0 }, { opacity: 1 }], { duration: 600, fill: 'both' });
      outgoing.onfinish = () => { old.hidden = true; old.classList.remove('is-leaving'); outgoing.cancel(); };
      incoming.onfinish = () => incoming.cancel();
      animations = [outgoing, incoming];
    }
    // Scroll only the rail, never pull the reader away from a paragraph.
    const track = rail[i].closest('ol'), button = rail[i];
    track.scrollTo({ left: button.offsetLeft - track.offsetLeft - (track.clientWidth - button.offsetWidth) / 2, behavior: reduced.matches ? 'instant' : 'smooth' });
    if (focus) panels[i].querySelector('h2').focus({ preventScroll: true });
    root.dataset.station = current().id;
    controls();
  }
  async function go(i, { playMusic = engaged && player.playing, t, focus = false, automatic = false } = {}) {
    if (!alive || loading || i < 0 || i >= stations.length) return;
    const old = current(), oldTime = player.time;
    const wasEngaged = engaged;
    loading = true; complete = false;
    show(i, { focus });
    position = clamp(t ?? current().listen.from);
    paint();
    if (playMusic || wasEngaged) {
      started = true; acquire();
      const s = current().listen;
      status.textContent = `Opening station ${index + 1}: ${current().title}.`;
      try {
        const continuous = automatic && matches() && old.listen.id === s.id && Math.abs(old.listen.to - s.from) < .5 && oldTime >= s.from && oldTime < s.to;
        if (!continuous) {
          if (matches()) {
            player.seek(position);
            if (playMusic) await player.play(); else player.pause();
          } else {
            if (!playMusic) player.pause();
            await player.load(s.id, { play: playMusic, t: position });
          }
        }
        if (!alive) return;
        status.textContent = player.playing ? `Station ${index + 1}: ${current().title}. The next station follows automatically.` : 'Paused here. Press Resume when you are ready.';
      } catch {
        if (alive) status.textContent = 'The recording could not be opened. Press Resume to try again.';
      }
    } else {
      status.textContent = `Station ${index + 1}: ${current().title}. Press ${started ? 'Resume' : 'Begin'} to listen here.`;
    }
    loading = false;
    if (!alive) return;
    controls(); paint(position); save();
  }
  function end() {
    if (!alive || complete) return;
    position = current().listen.to; started = true; complete = true;
    // Retain the concert override: the player's ended handler runs after ours.
    if (engaged && matches()) player.pause();
    paint(); controls(); save();
    status.textContent = 'Journey complete. Your final station is saved.';
  }
  function advance() {
    if (loading || !engaged || complete || !matches()) return;
    if (index === stations.length - 1) end();
    else void go(index + 1, { playMusic: true, automatic: true });
  }
  function tick() {
    if (!alive || loading || !engaged || complete || !matches()) return;
    const t = player.time;
    paint(t);
    if (performance.now() - lastSave > 5000) save();
    if (t >= current().listen.to && (player.playing || player.audio.ended)) advance();
  }
  async function toggle() {
    if (loading) return;
    if (engaged && matches() && player.playing) { player.pause(); return; }
    if (complete) { await go(0, { playMusic: true, t: stations[0].listen.from, focus: true }); return; }
    if (position >= current().listen.to) position = current().listen.from;
    await go(index, { playMusic: true, t: position });
  }

  await player.getProgramme();
  if (!root.isConnected) return;
  root.classList.add('is-enhanced'); document.body.classList.add('journey-reading');
  // A router return may rejoin the same still-playing passage without restarting it.
  if (started && !complete && matches() && player.playing && player.time >= current().listen.from && player.time < current().listen.to) {
    position = player.time; acquire();
  }
  show(index, { animate: false }); paint();
  status.textContent = complete ? 'Journey complete. Choose a station or listen again.' : engaged ? 'The music is continuing from where you left it.' : started ? 'Your place is kept. Press Resume to continue.' : 'Use Begin to start the music.';
  on(play, 'click', toggle);
  on(previous, 'click', () => go(index - 1, { focus: true }));
  on(next, 'click', () => index === stations.length - 1 ? end() : go(index + 1, { focus: true }));
  rail.forEach((button, i) => on(button, 'click', () => go(i, { focus: true })));
  on(document, 'keydown', (event) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.repeat || document.querySelector('dialog[open]') || event.target.closest('input, textarea, select, a, summary, [contenteditable="true"]')) return;
    if (event.target.closest('button') && !root.contains(event.target)) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); void go(index + (event.key === 'ArrowLeft' ? -1 : 1), { focus: true }); }
    else if (event.code === 'Space' && !event.target.closest('button')) { event.preventDefault(); void toggle(); }
  });
  const stages = root.querySelector('[data-j-stages]');
  on(stages, 'touchstart', (event) => {
    touch = event.touches.length === 1 && !event.target.closest('a, button, summary, input') ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }, { passive: true });
  on(stages, 'touchend', (event) => {
    if (!touch || event.changedTouches.length !== 1) return;
    const dx = event.changedTouches[0].clientX - touch.x, dy = event.changedTouches[0].clientY - touch.y; touch = null;
    if (Math.abs(dx) >= 60 && Math.abs(dx) > Math.abs(dy) * 1.8 && !window.getSelection()?.toString()) void go(index + (dx < 0 ? 1 : -1));
  }, { passive: true });
  on(stages, 'touchcancel', () => { touch = null; }, { passive: true });
  listen('timeupdate', tick);
  listen('ended', advance);
  listen('play', () => { if (engaged && matches() && !loading) { controls(); status.textContent = 'Listening. The next station follows automatically.'; } });
  listen('pause', () => {
    if (!engaged || loading || !matches()) return;
    if (!complete) { paint(player.time); status.textContent = 'Paused here. Your place is kept.'; }
    controls(); save();
  });
  listen('seek', (t) => { if (engaged && !loading && matches()) { paint(t); save(); } });
  listen('track', () => {
    if (!loading && engaged && !matches()) { save(); release(); controls(); status.textContent = 'Another recording is playing. Resume to return to this journey.'; }
  });
  listen('blocked', (blocked) => { if (blocked && engaged) { controls(); status.textContent = 'Your browser paused playback. Press Resume to listen.'; } });
  listen('error', () => { if (engaged) { controls(); status.textContent = 'The recording is unavailable. You can resume or choose the next station.'; } });
  on(window, 'pagehide', save);
  on(document, 'visibilitychange', () => { if (document.hidden) save(); });
  on(reduced, 'change', () => {
    if (reduced.matches) { show(index, { animate: false }); paint(); }
  });
  return () => {
    if (engaged && matches() && !complete) position = clamp(player.time);
    save(); alive = false; events.abort(); off.forEach((remove) => remove());
    animations.forEach((a) => { a.onfinish = null; a.cancel(); });
    release(); document.body.classList.remove('journey-reading');
  };
}
