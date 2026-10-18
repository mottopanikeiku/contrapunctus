// One persistent audio element. Reference -> performer maps are never extrapolated.
const ROOT = new URL('../../', import.meta.url);
let indexPromise;
export async function compareLinks(listenId) {
  indexPromise ??= fetch(new URL('assets/compare-index.json', ROOT)).then((response) => {
    if (!response.ok) throw new Error('Comparison index could not be loaded.');
    return response.json();
  }).catch((error) => { indexPromise = null; throw error; });
  return (await indexPromise)[listenId] ?? [];
}

/** Piecewise-linear interpolation; invert by exchanging axes. Plateaus use their midpoint. */
export function mapTime(map, time, inverse = false) {
  if (!map?.length || !Number.isFinite(time)) return null;
  const from = inverse ? 1 : 0, to = 1 - from;
  if (time < map[0][from] || time > map[map.length - 1][from]) return null;
  let lo = 0, hi = map.length;
  while (lo < hi) { const mid = (lo + hi) >>> 1; if (map[mid][from] < time) lo = mid + 1; else hi = mid; }
  if (map[lo][from] === time) {
    let end = lo, upper = map.length;
    while (end < upper) { const mid = (end + upper) >>> 1; if (map[mid][from] <= time) end = mid + 1; else upper = mid; }
    return (map[lo][to] + map[end - 1][to]) / 2;
  }
  const a = map[lo - 1], b = map[lo];
  return a[to] + (time - a[from]) / (b[from] - a[from]) * (b[to] - a[to]);
}

export async function mount(app) {
  const root = document.querySelector('[data-cmp-page]');
  const source = root?.querySelector('[data-cmp]');
  if (!source) return () => {};
  const data = JSON.parse(source.textContent);
  const { player, fmt } = app;
  const recordings = new Map(data.recordings.map((r) => [r.listen, r]));
  const $ = (selector) => root.querySelector(selector);
  const play = $('[data-cmp-play]'), seek = $('[data-cmp-seek]'), stop = $('[data-cmp-stop]');
  const now = $('[data-cmp-now]'), clock = $('[data-cmp-time]'), duration = $('[data-cmp-duration]');
  const referenceTime = $('[data-cmp-reference-time]'), status = $('[data-cmp-status]'), playhead = $('[data-cmp-playhead]');
  const cards = [...root.querySelectorAll('[data-cmp-card]')];
  const selectors = [...root.querySelectorAll('[data-cmp-select]')];
  const passages = [...root.querySelectorAll('[data-cmp-passage]')];
  const lines = [...root.querySelectorAll('[data-cmp-line]')];
  const events = new AbortController(), off = [];
  const on = (element, event, handler) => element.addEventListener(event, handler, { signal: events.signal });
  let selected = recordings.has(player.track?.id) ? player.track.id : data.reference;
  let referencePosition = 0, alive = true, changing = false, busy = false, operation = 0;
  let sequence = null, timer = 0, savedConcert = null, awaitingStart = false;
  const ownsTrack = () => recordings.has(player.track?.id);
  const toReference = (id, time) => id === data.reference ? time : mapTime(recordings.get(id)?.map, time, true);
  const fromReference = (id, time) => id === data.reference ? time : mapTime(recordings.get(id)?.map, time);
  const passageSpans = data.passages.map(spansFor);
  const say = (message) => { status.textContent = message; };

  function refresh() {
    if (!alive) return;
    const owns = ownsTrack(), id = owns ? player.track.id : selected;
    const r = recordings.get(id);
    if (owns) { selected = id; referencePosition = toReference(id, player.time); }
    const ref = referencePosition;
    now.textContent = r.label;
    clock.textContent = fmt(owns ? player.time : fromReference(id, ref) ?? 0);
    duration.textContent = `/ ${fmt(r.duration)}`;
    referenceTime.textContent = ref == null ? 'outside aligned span' : fmt(ref);
    const bounds = r.listen === data.reference ? [0, data.duration] : r.map?.length ? [r.map[0][0], r.map.at(-1)[0]] : null;
    seek.disabled = busy || !bounds;
    if (bounds) { seek.min = bounds[0]; seek.max = bounds[1]; }
    if (ref != null) seek.value = ref;
    seek.setAttribute('aria-valuetext', ref == null ? 'Outside the aligned reference span' : `${fmt(ref)} in the reference recording`);
    play.disabled = busy;
    play.textContent = owns && player.playing ? 'Pause' : 'Play';
    play.setAttribute('aria-label', `${owns && player.playing ? 'Pause' : 'Play'} ${r.label}`);
    for (const card of cards) card.classList.toggle('is-selected', card.dataset.cmpCard === id);
    for (const button of selectors) {
      const target = button.dataset.cmpSelect, active = target === id;
      const targetTime = ref == null ? null : fromReference(target, ref);
      const available = !owns || active || targetTime != null;
      button.disabled = busy || !available;
      button.setAttribute('aria-pressed', String(active));
      button.textContent = active ? 'Selected' : available ? 'Switch performer' : 'Outside aligned span';
      button.title = available ? `Select ${recordings.get(target).label} at the same musical moment` : 'There is no mapped counterpart at the current position. Choose an aligned passage below.';
    }
    for (const line of lines) line.classList.toggle('is-selected', line.dataset.cmpLine === id);
    for (const button of passages) {
      button.disabled = busy || passageSpans[Number(button.dataset.cmpPassage)].length < 2;
      button.setAttribute('aria-pressed', String(sequence?.passage === Number(button.dataset.cmpPassage)));
    }
    stop.hidden = !sequence;
    stop.disabled = !sequence;
    playhead.setAttribute('visibility', owns && ref != null ? 'visible' : 'hidden');
    if (ref != null) { const x = 58 + ref / data.duration * 844; playhead.setAttribute('x1', x); playhead.setAttribute('x2', x); }
  }

  function takeConcert() {
    if (savedConcert == null) { savedConcert = player.concert; player.concert = false; }
  }
  function restoreConcert() {
    if (savedConcert != null) { player.concert = savedConcert; savedConcert = null; }
  }
  function clearSequence(message) {
    sequence = null; clearTimeout(timer); timer = 0;
    if (message) say(message);
  }
  function fail(message) {
    busy = false; awaitingStart = false; clearSequence(message); refresh();
  }

  async function activate(id, time, shouldPlay) {
    const token = ++operation;
    takeConcert();
    busy = true; changing = true; selected = id;
    refresh();
    try {
      await player.load(id, { t: time });
      if (!alive || token !== operation) return;
      // load deliberately preserves its position when t is zero; a comparison seek must not.
      player.seek(time);
      changing = false; busy = false;
      if (shouldPlay) {
        awaitingStart = true;
        player.play().then((ok) => {
          if (!alive || token !== operation) return;
          awaitingStart = false;
          if (!ok) fail('Playback could not start. Press Play to try again, or open the recording source below.');
          else { refresh(); armBoundary(); }
        }).catch(() => { if (alive && token === operation) fail('The recording could not be played. Its original source is linked below.'); });
      }
      refresh();
    } catch (error) {
      if (!alive || token !== operation) return;
      changing = false;
      fail('The shared player could not load this recording. Its original source is linked below.');
    }
  }

  function spansFor(p) {
    const next = data.passages.filter((q) => q.t > p.t).reduce((end, q) => Math.min(end, q.t), data.duration);
    const end = Math.min(p.t + 12, next, data.duration);
    return data.recordings.flatMap((r) => {
      const start = fromReference(r.listen, p.t);
      const spanEnd = Math.min(end, r.listen === data.reference ? data.duration : r.map?.at(-1)?.[0] ?? 0);
      const mappedEnd = fromReference(r.listen, spanEnd);
      const finish = mappedEnd == null ? null : Math.min(mappedEnd, r.duration - .35);
      return start != null && finish != null && finish > start
        ? [{ id: r.listen, start, end: finish }] : [];
    });
  }
  function armBoundary() {
    clearTimeout(timer); timer = 0;
    if (!sequence || changing || busy || !player.playing) return;
    const span = sequence.spans[sequence.index];
    if (player.track?.id !== span.id) { clearSequence(); return; }
    const remaining = span.end - player.time;
    if (remaining <= .04) { advance(); return; }
    // Recheck at most four times a second so stalled playback cannot consume a passage.
    timer = setTimeout(armBoundary, Math.max(20, Math.min(250, remaining * 1000 / (player.audio.playbackRate || 1))));
  }
  function advance() {
    if (!sequence) return;
    clearTimeout(timer); timer = 0;
    sequence.index++;
    if (sequence.index >= sequence.spans.length) {
      player.pause(); clearSequence('Sequence complete. Switch performers to continue comparing, or choose another moment.'); refresh(); return;
    }
    const span = sequence.spans[sequence.index];
    say(`Playing ${sequence.index + 1} of ${sequence.spans.length}: ${recordings.get(span.id).label}.`);
    activate(span.id, span.start, true);
  }

  try { await player.getProgramme(); }
  catch { say('The shared player could not load. The recording sources and notes remain available below.'); return () => {}; }
  if (!root.isConnected) return () => {};
  say('Press Play, then switch performers at the same musical moment.');
  on(root, 'click', (event) => {
    const select = event.target.closest('[data-cmp-select]');
    if (select) {
      const id = select.dataset.cmpSelect;
      if (id === selected) return;
      const owns = ownsTrack(), ref = owns ? toReference(player.track.id, player.time) : referencePosition;
      const time = ref == null ? null : fromReference(id, ref);
      if (owns && time == null) { say('This moment is outside the aligned span. Choose a passage to compare instead.'); return; }
      clearSequence();
      const start = time ?? recordings.get(id).map?.[0]?.[1] ?? 0;
      say(time == null ? `Selected ${recordings.get(id).label} at the start of its available span; no counterpart at the previous position.` : `Same musical moment · ${fmt(ref)} in the reference → ${fmt(start)} in ${recordings.get(id).label}.`);
      activate(id, start, owns && player.playing);
      return;
    }
    const passage = event.target.closest('[data-cmp-passage]');
    if (passage) {
      const i = Number(passage.dataset.cmpPassage), spans = passageSpans[i];
      if (spans.length < 2) { say('Fewer than two recordings cover this whole passage.'); return; }
      clearSequence(); sequence = { passage: i, spans, index: 0 };
      const omitted = data.recordings.length - spans.length;
      say(`Playing 1 of ${spans.length}: ${recordings.get(spans[0].id).label}.${omitted ? ` ${omitted} recording(s) omitted because the passage is outside their aligned span.` : ''}`);
      activate(spans[0].id, spans[0].start, true);
    }
  });
  on(play, 'click', () => {
    if (ownsTrack()) {
      if (player.playing) { operation++; awaitingStart = false; player.pause(); }
      else { takeConcert(); player.play().then((ok) => { if (alive && !ok) fail('Playback could not start. Try the recording’s original source below.'); }); }
    } else {
      const r = recordings.get(selected);
      activate(selected, fromReference(selected, referencePosition) ?? r.map?.[0]?.[1] ?? 0, true);
    }
  });
  on(stop, 'click', () => { operation++; awaitingStart = false; clearSequence('Sequence stopped.'); if (ownsTrack()) player.pause(); refresh(); });
  on(seek, 'input', () => {
    const ref = Number(seek.value), time = fromReference(selected, ref);
    if (time == null) return;
    clearSequence(`Reference position ${fmt(ref)} · ${fmt(time)} in ${recordings.get(selected).label}.`); referencePosition = ref;
    if (player.track?.id === selected) { changing = true; player.seek(time); changing = false; refresh(); }
    else activate(selected, time, false);
  });
  on(window, 'pagehide', () => { clearSequence(); restoreConcert(); });
  on(window, 'pageshow', () => { if (ownsTrack() && player.playing) takeConcert(); });
  off.push(player.on('track', () => {
    if (changing) return;
    if (sequence && player.track?.id !== sequence.spans[sequence.index]?.id) clearSequence('The shared player selected another recording.');
    if (!ownsTrack()) restoreConcert();
    refresh();
  }));
  off.push(player.on('seek', () => { if (!changing) { clearSequence(); refresh(); } }));
  off.push(player.on('timeupdate', () => { refresh(); armBoundary(); }));
  off.push(player.on('play', () => { refresh(); armBoundary(); }));
  off.push(player.on('playing', () => { refresh(); armBoundary(); }));
  off.push(player.on('pause', () => {
    clearTimeout(timer); timer = 0;
    if (!changing && !busy && !awaitingStart && !player.playing && sequence) clearSequence('Sequence paused. Choose a passage to hear each version again.');
    refresh();
  }));
  off.push(player.on('ended', () => { if (sequence && !busy) advance(); else refresh(); }));
  off.push(player.on('error', () => { if (ownsTrack()) fail('This recording could not be streamed. Try its original source below.'); }));
  refresh();
  return () => {
    alive = false; operation++; clearSequence(); events.abort(); off.forEach((remove) => remove()); restoreConcert();
    // The audio survives navigation; only this desk’s sequence boundary is released.
  };
}
