// Contrapunctus app shell.
// - One persistent <audio> owned here (outside <main>), so music survives navigation.
// - Same-origin links swap <main> via fetch + History API; full-page load is the fallback.
// - Page behaviour lives in modules mounted by <main data-page="…">: assets/js/pages/<type>.js
//   Each exports mount(main, app) and may return an unmount function.

const BASE = new URL(window.CP_BASE || './', location.href);   // site root as a URL
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmt = (t) => { t = Math.max(0, Math.floor(t || 0)); return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; };
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const listeners = new Map();
const emit = (ev, d) => (listeners.get(ev) ?? []).forEach((f) => f(d));
const on = (ev, f) => { listeners.set(ev, [...(listeners.get(ev) ?? []), f]); return () => listeners.set(ev, (listeners.get(ev) ?? []).filter((g) => g !== f)); };

// ===================================================================== player
const audio = new Audio();
audio.crossOrigin = 'anonymous';   // Commons sends CORS headers; needed for the Sound lens analyser
audio.preload = 'none';
let catalogue = null;
let current = null;     // catalogue entry
let wantConcert = localStorage.getItem('cp-concert') !== '0';

async function getCatalogue() {
  if (!catalogue) catalogue = await fetch(new URL('assets/data/catalogue.json', BASE)).then((r) => r.json());
  return catalogue;
}

const player = {
  audio,
  get track() { return current; },
  get time() { return audio.currentTime || 0; },
  get playing() { return !audio.paused && !audio.ended; },
  async load(id, { t = 0, play = false } = {}) {
    const cat = await getCatalogue();
    const entry = cat.find((x) => x.id === id);
    if (!entry) return;
    if (current?.id !== id) {
      current = entry;
      pendingT = 0;
      audio.preload = play ? 'auto' : 'none';   // never download audio the visitor has not asked for
      audio.src = entry.stream;
      showRail();
      updateNow();
      emit('track', entry);
      if ('mediaSession' in navigator) navigator.mediaSession.metadata = new MediaMetadata({ title: `${entry.work}${entry.movement ? ` · ${entry.movement}` : ''}`, artist: entry.composer, album: 'Contrapunctus' });
    }
    if (t) setPending(t);
    if (play) await player.play();
    save();
  },
  async play() {
    if (!current) return;
    setStatus('Loading…');
    try { await audio.play(); setStatus(''); } catch (e) { setStatus(e.name === 'NotAllowedError' ? 'Press play to start' : 'This recording could not be loaded'); }
  },
  pause() { audio.pause(); },
  toggle() { return audio.paused ? player.play() : player.pause(); },
  seek(t) {
    if (!current) return;
    t = Math.max(0, Math.min((current.duration || audio.duration || 0) - 0.25, t));
    if (audio.readyState >= 1) audio.currentTime = t; else setPending(t);
    emit('time', t); save();
  },
  get position() { return audio.readyState >= 1 ? audio.currentTime : pendingT; },
  async next() {
    const cat = await getCatalogue();
    const i = cat.findIndex((x) => x.id === current?.id);
    const n = cat[(i + 1) % cat.length];
    const following = location.pathname.endsWith(`/listen/${current?.id}.html`);
    await player.load(n.id, { play: true });
    if (following) navigate(new URL(n.url, BASE).href, { replace: false });
  },
  on,
};

let pendingT = 0;
function setPending(t) {
  if (audio.readyState >= 1) { audio.currentTime = t; return; }
  pendingT = t;
  ui.cur.textContent = fmt(t); ui.seek.value = String(t);
}
audio.addEventListener('loadedmetadata', () => { if (pendingT) { audio.currentTime = pendingT; pendingT = 0; } });
function save() { if (current) localStorage.setItem('cp-last', JSON.stringify({ id: current.id, t: Math.floor(audio.currentTime || 0) })); }
setInterval(() => { if (player.playing) save(); }, 5000);

// ===================================================================== rail
const rail = $('[data-rail]');
const ui = {
  toggle: $('[data-act="toggle"]', rail), now: $('[data-now]', rail), title: $('[data-now-title]', rail), sub: $('[data-now-sub]', rail),
  cur: $('[data-cur]', rail), dur: $('[data-dur]', rail), seek: $('[data-seek]', rail), status: $('[data-status]', rail), concert: $('[data-concert]', rail),
};
const ICON_PLAY = ui.toggle.innerHTML;
const ICON_PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
function showRail() { rail.hidden = false; document.documentElement.style.setProperty('--rail', `${rail.offsetHeight}px`); }
function setStatus(s) { ui.status.textContent = s; }
function updateNow() {
  if (!current) return;
  ui.title.textContent = `${current.work}${current.movement ? ` · ${current.movement}` : ''}`;
  ui.sub.textContent = current.composer;
  ui.now.href = new URL(current.url, BASE).href;
  ui.dur.textContent = fmt(current.duration);
  ui.seek.max = String(current.duration || 100);
}
ui.concert.checked = wantConcert;
ui.concert.addEventListener('change', () => { wantConcert = ui.concert.checked; localStorage.setItem('cp-concert', wantConcert ? '1' : '0'); });
rail.addEventListener('click', (e) => {
  const act = e.target.closest('[data-act]')?.dataset.act;
  if (act === 'toggle') player.toggle();
  if (act === 'back') player.seek(player.time - 10);
  if (act === 'fwd') player.seek(player.time + 10);
  if (act === 'next') player.next();
});
let scrubbing = false;
ui.seek.addEventListener('input', () => { scrubbing = true; ui.cur.textContent = fmt(+ui.seek.value); });
ui.seek.addEventListener('change', () => { scrubbing = false; player.seek(+ui.seek.value); });
audio.addEventListener('timeupdate', () => {
  if (!scrubbing) { ui.seek.value = String(audio.currentTime); ui.cur.textContent = fmt(audio.currentTime); }
  ui.seek.setAttribute('aria-valuetext', `${fmt(audio.currentTime)} of ${fmt(current?.duration)}`);
});
audio.addEventListener('play', () => { ui.toggle.innerHTML = ICON_PAUSE; ui.toggle.setAttribute('aria-label', 'Pause'); emit('state', 'play'); });
audio.addEventListener('pause', () => { ui.toggle.innerHTML = ICON_PLAY; ui.toggle.setAttribute('aria-label', 'Play'); emit('state', 'pause'); save(); });
audio.addEventListener('waiting', () => setStatus('Loading…'));
audio.addEventListener('playing', () => setStatus(''));
audio.addEventListener('ended', () => { emit('state', 'ended'); if (wantConcert) player.next(); });
audio.addEventListener('error', () => setStatus('This recording could not be loaded. Try again, or choose another piece.'));
addEventListener('resize', () => { if (!rail.hidden) document.documentElement.style.setProperty('--rail', `${rail.offsetHeight}px`); });
if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => player.play());
  navigator.mediaSession.setActionHandler('pause', () => player.pause());
  navigator.mediaSession.setActionHandler('nexttrack', () => player.next());
  navigator.mediaSession.setActionHandler('seekbackward', () => player.seek(player.time - 10));
  navigator.mediaSession.setActionHandler('seekforward', () => player.seek(player.time + 10));
}

// keyboard: only when focus is not on an interactive control
addEventListener('keydown', (e) => {
  if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
  const t = e.target;
  const typing = t.closest?.('input, textarea, select, [contenteditable]');
  if (e.key === '/' && !typing) { e.preventDefault(); openSearch(); return; }
  if (typing || t.closest?.('button, a, [role="tab"], summary, [role="slider"]') || document.querySelector('dialog[open]')) return;
  if (e.key === ' ' && current) { e.preventDefault(); player.toggle(); }
  else if (e.key === 'ArrowLeft' && current) { e.preventDefault(); player.seek(player.time - 10); }
  else if (e.key === 'ArrowRight' && current) { e.preventDefault(); player.seek(player.time + 10); }
});

// ===================================================================== dialogs
function openDialog(d, opener) {
  d.showModal();
  d._opener = opener ?? document.activeElement;
  d.addEventListener('close', () => d._opener?.focus?.(), { once: true });
}
document.addEventListener('click', (e) => {
  const d = e.target.closest('dialog');
  if (e.target.closest('[data-close]') && d) d.close();
  else if (d && e.target === d) d.close();   // backdrop click
});

// menu
$('[data-open-menu]')?.addEventListener('click', (e) => openDialog($('[data-menu]'), e.currentTarget));

// programme (choose music)
async function openProgramme(opener) {
  const d = $('[data-programme]');
  const list = $('[data-prog-list]', d);
  const cat = await getCatalogue();
  const render = (q = '') => {
    const f = q.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    const items = cat.filter((x) => !f || `${x.composer} ${x.work} ${x.movement}`.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(f));
    let era = '';
    list.innerHTML = items.map((x) => {
      const head = x.era !== era ? `<h3><span class="era-dot" style="background:${x.eraColour}"></span> ${x.era}</h3>` : '';
      era = x.era;
      return `${head}<a href="${new URL(x.url, BASE).href}" data-prog-id="${x.id}"${x.id === current?.id ? ' aria-current="true"' : ''}><span class="c">${x.composer}</span><span class="w">${x.work}${x.movement ? ` · ${x.movement}` : ''}</span><span class="d num">${fmt(x.duration)}</span></a>`;
    }).join('') || '<p class="search-empty">Nothing matches.</p>';
  };
  render();
  const input = $('[data-prog-filter]', d);
  input.value = '';
  input.oninput = () => render(input.value);
  openDialog(d, opener);
  input.focus();
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-open-programme]');
  if (b) openProgramme(b);
  const a = e.target.closest('[data-prog-id]');
  if (a) { $('[data-programme]').close(); }
});

// ===================================================================== search
let searchData = null;
const fold = (s) => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
async function openSearch(opener) {
  const d = $('[data-search]');
  openDialog(d, opener);
  const input = $('[data-search-input]', d);
  input.value = '';
  renderResults('');
  input.focus();
  if (!searchData) searchData = await fetch(new URL('assets/data/search.json', BASE)).then((r) => r.json());
}
function renderResults(q) {
  const box = $('[data-search-results]');
  const terms = fold(q).split(/\s+/).filter(Boolean);
  if (!terms.length) { box.innerHTML = '<li class="search-empty">Try a composer (Ravel), a work (Boléro), or an idea (fugue, sonata form).</li>'; return; }
  if (!searchData) { box.innerHTML = '<li class="search-empty">Loading…</li>'; return; }
  const scored = [];
  for (const e of searchData) {
    const words = e.k.split(/[^a-z0-9]+/);
    let score = 0;
    for (const t of terms) {
      if (fold(e.title).startsWith(t)) score += 6;
      else if (words.some((w) => w.startsWith(t))) score += 3;
      else if (e.k.includes(t)) score += 1;
      else { score = -1; break; }
    }
    if (score > 0) scored.push([score + (e.type === 'Composer' ? 2 : 0), e]);
  }
  scored.sort((a, b) => b[0] - a[0]);
  box.innerHTML = scored.slice(0, 30).map(([, e], i) => `<li><a href="${new URL(e.url, BASE).href}" role="option"${i === 0 ? ' aria-selected="true"' : ''}><span class="t">${e.type}</span><span><span class="n">${e.title}</span><span class="s">${e.sub ?? ''}${e.audio ? ' · <span class="audio">recording</span>' : ''}</span></span></a></li>`).join('') || '<li class="search-empty">No matches. Try fewer words.</li>';
}
$('[data-open-search]')?.addEventListener('click', (e) => openSearch(e.currentTarget));
$('[data-search-input]')?.addEventListener('input', (e) => renderResults(e.target.value));
$('[data-search-input]')?.addEventListener('keydown', (e) => {
  const opts = $$('[data-search-results] a');
  let i = opts.findIndex((a) => a.getAttribute('aria-selected') === 'true');
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (i >= 0) opts[i].removeAttribute('aria-selected');
    i = Math.max(0, Math.min(opts.length - 1, i + (e.key === 'ArrowDown' ? 1 : -1)));
    opts[i]?.setAttribute('aria-selected', 'true');
    opts[i]?.scrollIntoView({ block: 'nearest' });
  }
  if (e.key === 'Enter' && opts[i]) { e.preventDefault(); $('[data-search]').close(); navigate(opts[i].href); }
});
document.addEventListener('click', (e) => { if (e.target.closest('[data-search-results] a')) $('[data-search]').close(); });

// ===================================================================== router
let unmount = null;
let navToken = 0;
const pageModules = new Map();
// page types that ship a client module in assets/js/pages/
const CLIENT_MODULES = new Set(['listen', 'directory', 'composer', 'lifelines', 'collection', 'returnlab']);

async function mountMain() {
  const main = $('#main');
  const type = main.dataset.page;
  // shared behaviours for any page
  $$('[data-play-id]', main).forEach((b) => b.addEventListener('click', () => player.load(b.dataset.playId, { play: true, t: Number(b.dataset.playT) || 0 }).then(() => { if (b.dataset.playT) player.seek(Number(b.dataset.playT)); })));
  const unmounts = [];
  if ($('.score', main) || $('[data-lab]', main) || $('svg.series', main)) unmounts.push(await mountModule('notation', main));
  if (CLIENT_MODULES.has(type)) unmounts.push(await mountModule(`pages/${type}`, main));
  unmount = () => unmounts.forEach((u) => typeof u === 'function' && u());
}
async function mountModule(name, main) {
  try {
    let mod = pageModules.get(name);
    if (!mod) { mod = await import(new URL(`assets/js/${name}.js`, BASE).href); pageModules.set(name, mod); }
    return await mod.mount?.(main, app);
  } catch (err) { console.warn(`module ${name} failed`, err); return null; }
}

function sameSite(url) {
  return url.origin === location.origin && url.pathname.startsWith(BASE.pathname) && /\.html$|\/$/.test(url.pathname);
}

async function navigate(href, { replace = false, scroll = true } = {}) {
  const url = new URL(href, location.href);
  if (!sameSite(url)) { location.href = url.href; return; }
  if (url.pathname === location.pathname && url.search === location.search && url.hash) {
    history[replace ? 'replaceState' : 'pushState'](null, '', url.href);
    document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView();
    return;
  }
  const token = ++navToken;
  document.documentElement.setAttribute('aria-busy', 'true');
  let html;
  try {
    const res = await fetch(url.href, { headers: { Accept: 'text/html' } });
    if (!res.ok) throw new Error(res.status);
    html = await res.text();
  } catch { location.href = url.href; return; }
  if (token !== navToken) return;   // a newer navigation won
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const next = doc.querySelector('#main');
  if (!next) { location.href = url.href; return; }
  unmount?.(); unmount = null;
  if (!replace) history.pushState({ cp: true }, '', url.href); else history.replaceState({ cp: true }, '', url.href);
  document.title = doc.title;
  for (const sel of ['meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:description"]']) {
    const n = doc.querySelector(sel), o = document.querySelector(sel);
    if (n && o) o.setAttribute('content', n.getAttribute('content'));
  }
  // nav state
  const navNew = doc.querySelector('.primary-nav');
  if (navNew) $('.primary-nav').innerHTML = navNew.innerHTML;
  const main = $('#main');
  main.replaceWith(document.adoptNode(next));
  document.documentElement.removeAttribute('aria-busy');
  if (scroll) {
    if (url.hash) document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView();
    else scrollTo(0, 0);
  }
  const h1 = $('#main h1');
  (h1 ?? $('#main')).setAttribute('tabindex', '-1');
  (h1 ?? $('#main')).focus({ preventScroll: true });
  await mountMain();
}

document.addEventListener('click', (e) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = e.target.closest('a[href]');
  if (!a || a.target || a.hasAttribute('download') || a.dataset.native !== undefined) return;
  const url = new URL(a.href, location.href);
  if (!sameSite(url)) return;
  e.preventDefault();
  navigate(url.href);
});
addEventListener('popstate', () => navigate(location.href, { replace: true, scroll: false }));

// ===================================================================== boot
const app = { player, navigate, base: BASE, fmt, reduced, getCatalogue, toast };
window.CP = app;

function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.role = 'status'; t.textContent = msg;
  document.body.append(t);
  setTimeout(() => t.remove(), 2600);
}

history.replaceState({ cp: true }, '', location.href);
// Restore the last recording into the rail (never auto-plays).
try {
  const last = JSON.parse(localStorage.getItem('cp-last') || 'null');
  if (last && !$('#main [data-track]')) player.load(last.id, { t: last.t }).then(() => setStatus(last.t ? `Resume at ${fmt(last.t)}` : ''));
} catch {}
mountMain();
