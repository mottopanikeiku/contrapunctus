// One audio element for the whole visit. It survives page changes (see app.js) so the concert never stops.
const ROOT = new URL('../../', import.meta.url);           // site root
const listeners = new Map();
const emit = (ev, d) => (listeners.get(ev) ?? []).forEach((f) => { try { f(d); } catch (e) { console.warn(e); } });

const audio = new Audio();
audio.crossOrigin = 'anonymous';   // Commons sends CORS headers; required for the analyser
audio.preload = 'none';

let programme = null;
let index = -1;
let pendingT = 0;
let graph = null;
let concert = localStorage.getItem('cp-concert') !== '0';

async function getProgramme() {
  if (!programme) {
    const url = new URL(`assets/listen/programme.json?v=${document.documentElement.dataset.prog ?? ''}`, ROOT);
    programme = await fetch(url).then((r) => r.json());
  }
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
  getProgramme,
  graph: () => ensureGraph(),
  async load(idOrIndex, { play = false, t = 0 } = {}) {
    const P = await getProgramme();
    const i = typeof idOrIndex === 'number' ? (idOrIndex + P.length) % P.length : P.findIndex((x) => x.id === idOrIndex);
    if (i < 0) return;
    if (i !== index) {
      index = i;
      pendingT = 0;
      audio.preload = play ? 'auto' : 'metadata';
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
  async next({ interlude = false } = {}) {
    const P = await getProgramme();
    let i = index; do i = (i + 1) % P.length; while (P[i].concert === false && i !== index);
    emit('advance', { from: player.track, to: P[i], interlude });
    await player.load(i, { play: true });
  },
  async prev() {
    const P = await getProgramme();
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
