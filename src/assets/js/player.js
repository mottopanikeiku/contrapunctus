// One audio element for the whole visit. It survives page changes (see app.js) so the concert never stops.
const ROOT = new URL('../../', import.meta.url);           // site root
const listeners = new Map();
const emit = (ev, d) => (listeners.get(ev) ?? []).forEach((f) => { try { f(d); } catch (e) { console.warn(e); } });

const audio = new Audio();
audio.crossOrigin = 'anonymous';   // Commons sends CORS headers; required for the analyser
audio.preload = 'none';

let programme = null;
let programmes = [];
let programmeRequest = null;
let index = -1;
let pendingT = 0;
let graph = null;
let concert = localStorage.getItem('cp-concert') !== '0';
// A curated evening ({ id, title, ids }) plays its own order and then stops; null plays the whole concert.
let queue = null;
try { queue = JSON.parse(localStorage.getItem('cp-queue') ?? 'null'); } catch {}

async function getProgramme() {
  if (!programmeRequest) {
    const url = new URL(`assets/listen/programme.json?v=${document.documentElement.dataset.prog ?? ''}`, ROOT);
    programmeRequest = fetch(url).then((r) => {
      if (!r.ok) throw new Error(`Programme: HTTP ${r.status}`);
      return r.json();
    }).then(({ composers, eras, rows, programmes: evenings = [] }) => {
      programme = rows.map(([id, stream, duration, composer, work, movement, set, concert, era]) => ({
        id, stream, duration, composer: composers[composer], work, movement, set, concert: !!concert, era: eras[era] ?? null,
      }));
      programmes = evenings;
      if (queue && !programmes.some((p) => p.id === queue.id)) queue = null;
    }).catch((error) => { programmeRequest = null; throw error; });
  }
  await programmeRequest;
  return programme;
}

function ensureGraph() {
  if (graph) return graph;
  const AC = window.AudioContext || window.webkitAudioContext;
  const ctx = new AC();
  const src = ctx.createMediaElementSource(audio);
  const analyser = ctx.createAnalyser();
  analyser.fftSize = 8192;
  analyser.smoothingTimeConstant = 0.55;
  analyser.minDecibels = -100;
  analyser.maxDecibels = -20;
  src.connect(analyser);
  analyser.connect(ctx.destination);
  graph = { ctx, analyser };
  return graph;
}

export const player = {
  audio,
  root: ROOT,
  on(ev, f) { listeners.set(ev, [...(listeners.get(ev) ?? []), f]); return () => listeners.set(ev, (listeners.get(ev) ?? []).filter((g) => g !== f)); },
  get track() { return programme?.[index] ?? null; },
  get index() { return index; },
  get playing() { return !audio.paused && !audio.ended; },
  get time() { return audio.readyState >= 1 ? audio.currentTime : pendingT; },
  get concert() { return concert; },
  set concert(v) { concert = !!v; localStorage.setItem('cp-concert', concert ? '1' : '0'); emit('concert', concert); },
  get queue() { return queue; },
  getProgramme,
  async getProgrammes() { await getProgramme(); return programmes; },
  /** Start a curated evening by id (null returns to the whole concert). */
  async setQueue(id, { play = false } = {}) {
    await getProgramme();
    const p = programmes.find((x) => x.id === id) ?? null;
    queue = p ? { id: p.id, title: p.title, ids: p.ids } : null;
    if (queue) localStorage.setItem('cp-queue', JSON.stringify(queue)); else localStorage.removeItem('cp-queue');
    emit('queue', queue);
    if (queue) await player.load(queue.ids[0], { play });
  },
  graph: () => ensureGraph(),
  async load(idOrIndex, { play = false, t = 0 } = {}) {
    const P = await getProgramme();
    const i = typeof idOrIndex === 'number' ? (idOrIndex + P.length) % P.length : P.findIndex((x) => x.id === idOrIndex);
    if (i < 0) return;
    if (i !== index) {
      index = i;
      pendingT = 0;
      audio.preload = 'none'; // Selecting/restoring a recording must not request audio before Play.
      audio.src = P[i].stream;
      emit('track', P[i]);
      if ('mediaSession' in navigator) {
        const c = P[i].composer;
        navigator.mediaSession.metadata = new MediaMetadata({ title: `${P[i].work}${P[i].movement ? ' · ' + P[i].movement : ''}`, artist: c.name, album: 'Contrapunctus', artwork: c.portrait ? [{ src: new URL(c.portrait, ROOT).href }] : [] });
      }
    }
    if (t) player.seek(t);
    if (play) await player.play();
    save();
  },
  async play() {
    if (index < 0) await player.load(0);
    audio.preload = 'auto';
    const g = ensureGraph();
    try { await g.ctx.resume(); } catch {}
    try { await audio.play(); emit('blocked', false); return true; }
    catch (e) { if (e.name === 'NotAllowedError') emit('blocked', true); else emit('error', e); return false; }
  },
  pause() { audio.pause(); },
  toggle() { return audio.paused ? player.play() : player.pause(); },
  seek(t) {
    const d = player.track?.duration ?? audio.duration ?? 0;
    t = Math.max(0, Math.min(d - 0.3, t));
    if (audio.readyState >= 1) audio.currentTime = t; else pendingT = t;
    emit('seek', t);
  },
  // The concert skips recordings kept only for comparisons (concert: false); they still play when chosen.
  // Inside a curated evening the evening's own order wins, and its last piece ends the evening.
  async next({ interlude = false } = {}) {
    const P = await getProgramme();
    const q = queue?.ids.indexOf(player.track?.id) ?? -1;
    if (queue && q >= 0) {
      if (q === queue.ids.length - 1) { if (interlude) { emit('queue-end', queue); return; } }
      const to = P.find((x) => x.id === queue.ids[(q + 1) % queue.ids.length]);
      emit('advance', { from: player.track, to, interlude });
      await player.load(to.id, { play: true });
      return;
    }
    let i = index; do i = (i + 1) % P.length; while (P[i].concert === false && i !== index);
    emit('advance', { from: player.track, to: P[i], interlude });
    await player.load(i, { play: true });
  },
  async prev() {
    const P = await getProgramme();
    const q = queue?.ids.indexOf(player.track?.id) ?? -1;
    if (queue && q > 0) { await player.load(queue.ids[q - 1], { play: true }); return; }
    let i = index; do i = (i - 1 + P.length) % P.length; while (P[i].concert === false && i !== index);
    await player.load(i, { play: true });
  },
};

audio.addEventListener('loadedmetadata', () => { if (pendingT) { audio.currentTime = pendingT; pendingT = 0; } });
for (const ev of ['play', 'pause', 'timeupdate', 'waiting', 'playing', 'ended', 'error']) audio.addEventListener(ev, () => emit(ev));
audio.addEventListener('ended', () => { if (concert) player.next({ interlude: true }); });
audio.addEventListener('pause', save);

function save() { const t = player.track; if (t) localStorage.setItem('cp-last', JSON.stringify({ id: t.id, t: Math.floor(player.time) })); }
setInterval(() => { if (player.playing) save(); }, 5000);

if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => player.play());
  navigator.mediaSession.setActionHandler('pause', () => player.pause());
  navigator.mediaSession.setActionHandler('nexttrack', () => player.next());
  navigator.mediaSession.setActionHandler('previoustrack', () => player.prev());
}
