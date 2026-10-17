// App shell: keeps the music playing across pages.
// - Same-site links are fetched and swapped in place; everything inside #cp-persist (audio state, the
//   now-playing bar, search) survives. Stylesheets are synchronised before the swap.
// - The concert hall (body.room) mounts room.js; every other page mounts site.js.
import { player } from './player.js';

const ROOT = player.root;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmt = (t) => { t = Math.max(0, Math.floor(t || 0)); return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; };
const app = { player, root: ROOT, navigate, fmt };
window.CP = app;

// ================================================================== now-playing bar
const np = $('.np');
const npUi = np && { play: $('.np-play', np), c: $('.np-c', np), w: $('.np-w', np), prog: $('.np-prog span', np), time: $('.np-time', np), now: $('.np-now', np), next: $('.np-next', np) };
function npShow() {
  if (!np) return;
  const inHall = document.body.classList.contains('room');
  np.hidden = inHall || !player.track;
  document.documentElement.classList.toggle('np-on', !np.hidden);
}
function npTrack() {
  const t = player.track; if (!t || !np) return;
  npUi.c.textContent = t.composer.name;
  const im = $('.np-i', np);
  if (t.composer.thumb) { im.src = new URL(t.composer.thumb, ROOT).href; im.style.objectPosition = t.composer.focus; im.hidden = false; } else im.hidden = true;
  npUi.w.textContent = `${t.work}${t.movement ? ' · ' + t.movement : ''}`;
  npUi.now.href = new URL(`hall.html#${t.id}`, ROOT).href;
  np.style.setProperty('--accent', t.era?.accent ?? '#c9a65a');
  npShow();
}
if (np) {
  npUi.play.addEventListener('click', () => player.toggle());
  npUi.next?.addEventListener('click', () => player.next());
  $('.np-track', np).addEventListener('click', (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const d = player.track?.duration; if (d) player.seek(((e.clientX - r.left) / r.width) * d);
  });
  player.on('track', npTrack);
  player.on('play', () => { npUi.play.textContent = '❚❚'; npUi.play.setAttribute('aria-label', 'Pause'); });
  player.on('pause', () => { npUi.play.textContent = '▶'; npUi.play.setAttribute('aria-label', 'Play'); });
  player.on('timeupdate', () => {
    const d = player.track?.duration || 1;
    npUi.prog.style.width = `${(player.time / d) * 100}%`;
    npUi.time.textContent = `${fmt(player.time)} / ${fmt(d)}`;
  });
}

// ================================================================== search
const dlg = $('dialog.srch');
let index = null;
const fold = (s) => (s ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
async function openSearch() {
  if (!dlg) return;
  dlg.showModal();
  const input = $('input', dlg);
  input.value = ''; render('');
  input.focus();
  if (!index) index = await fetch(new URL('assets/search.json', ROOT)).then((r) => r.json()).catch(() => []);
}
function render(q) {
  const box = $('.srch-results', dlg);
  const terms = fold(q).split(/\s+/).filter(Boolean);
  if (!terms.length) { box.innerHTML = '<li class="srch-hint">A composer (Ravel), a work (Boléro), a recording, an idea (fugue, sonata form, Tristan chord).</li>'; return; }
  if (!index) { box.innerHTML = '<li class="srch-hint">Loading…</li>'; return; }
  const hits = [];
  for (const e of index) {
    let s = 0;
    for (const t of terms) {
      if (fold(e.title).startsWith(t)) s += 6;
      else if (e.k.split(/[^a-z0-9]+/).some((w) => w.startsWith(t))) s += 3;
      else if (e.k.includes(t)) s += 1;
      else { s = -1; break; }
    }
    const type = e.type.toLowerCase();
    if (s > 0) hits.push([s + (type === 'composer' ? 2 : type === 'recording' ? 1 : 0), e]);
  }
  hits.sort((a, b) => b[0] - a[0]);
  box.innerHTML = hits.slice(0, 24).map(([, e], i) => `<li><a href="${new URL(e.url, ROOT).href}"${i === 0 ? ' class="sel"' : ''}><span class="srch-t">${e.type}</span><span class="srch-n">${e.title}</span><span class="srch-s">${e.sub ?? ''}</span></a></li>`).join('') || '<li class="srch-hint">Nothing found. Try fewer words.</li>';
}
if (dlg) {
  $('input', dlg).addEventListener('input', (e) => render(e.target.value));
  $('input', dlg).addEventListener('keydown', (e) => {
    const opts = $$('.srch-results a', dlg);
    let i = opts.findIndex((a) => a.classList.contains('sel'));
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); opts[i]?.classList.remove('sel'); i = Math.max(0, Math.min(opts.length - 1, i + (e.key === 'ArrowDown' ? 1 : -1))); opts[i]?.classList.add('sel'); opts[i]?.scrollIntoView({ block: 'nearest' }); }
    if (e.key === 'Enter' && opts[i]) { e.preventDefault(); dlg.close(); navigate(opts[i].href); }
  });
  dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.closest('.srch-close')) dlg.close(); if (e.target.closest('.srch-results a')) dlg.close(); });
}
document.addEventListener('click', (e) => { if (e.target.closest('[data-search]')) { e.preventDefault(); openSearch(); } });
addEventListener('keydown', (e) => {
  if (e.key === '/' && !e.target.closest?.('input, textarea, select') && !document.querySelector('dialog[open]')) { e.preventDefault(); openSearch(); }
});

// ================================================================== router
let unmounts = [];
let token = 0;
const modules = {};

// The hall mounts room.js; every other page mounts site.js. Pages may add their own modules with
// <body data-modules="name …">, each loaded from assets/js/<name>.js and exporting mount(app) → cleanup.
async function mount() {
  const room = document.body.classList.contains('room');
  const names = [room ? 'room' : 'site', ...(document.body.dataset.modules ?? '').split(/\s+/).filter(Boolean)];
  for (const name of names) {
    try {
      modules[name] ??= await import(new URL(`assets/js/${name}.js?v=${document.documentElement.dataset[name] ?? document.documentElement.dataset.site ?? ''}`, ROOT).href);
      const off = await modules[name].mount(app);
      if (typeof off === 'function') unmounts.push(off);
    } catch (err) { console.error(`mount ${name} failed`, err); }
  }
  npShow();
}

const sameSite = (u) => u.origin === location.origin && u.pathname.startsWith(ROOT.pathname) && (/\.html$/.test(u.pathname) || u.pathname.endsWith('/'));

async function syncStyles(doc) {
  const want = $$('link[rel="stylesheet"]', doc.head).map((l) => new URL(l.getAttribute('href'), doc.baseURI || location.href).href);
  const have = $$('link[rel="stylesheet"]', document.head);
  const loads = [];
  for (const href of want) {
    if (have.some((l) => l.href === href)) continue;
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = href;
    loads.push(new Promise((res) => { l.onload = l.onerror = res; }));
    document.head.append(l);
  }
  await Promise.all(loads);
  return () => have.forEach((l) => { if (!want.includes(l.href)) l.remove(); });
}

export async function navigate(href, { push = true } = {}) {
  const url = new URL(href, location.href);
  if (!sameSite(url)) { location.href = url.href; return; }
  if (url.pathname === location.pathname && url.search === location.search) {
    if (push && url.hash !== location.hash) history.pushState(null, '', url.href);
    if (url.hash) { document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView({ behavior: 'smooth' }); window.dispatchEvent(new HashChangeEvent('hashchange')); }
    return;
  }
  const my = ++token;
  let html;
  try { const r = await fetch(url.href); if (!r.ok) throw 0; html = await r.text(); } catch { location.href = url.href; return; }
  if (my !== token) return;
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const base = doc.createElement('base'); base.href = url.href; doc.head.prepend(base);
  const dropOld = await syncStyles(doc);
  if (my !== token) return;
  for (const f of unmounts.splice(0)) { try { f(); } catch {} }
  // swap everything in <body> except the persistent layer
  const persist = $('#cp-persist');
  for (const n of [...document.body.childNodes]) if (n !== persist) n.remove();
  const frag = document.createDocumentFragment();
  for (const n of [...doc.body.childNodes]) {
    if (n.id === 'cp-persist' || (n.tagName === 'SCRIPT')) continue;
    frag.append(document.importNode(n, true));
  }
  // rewrite relative URLs to the new page's location
  for (const el of frag.querySelectorAll('[href],[src],[srcset]')) {
    for (const a of ['href', 'src']) { const v = el.getAttribute(a); if (v && !/^(#|[a-z]+:|\/\/)/i.test(v)) el.setAttribute(a, new URL(v, url.href).href); }
    const ss = el.getAttribute('srcset');
    if (ss) el.setAttribute('srcset', ss.split(',').map((c) => { const [u, ...d] = c.trim().split(/\s+/); return [new URL(u, url.href).href, ...d].join(' '); }).join(', '));
  }
  document.body.insertBefore(frag, persist);
  document.body.className = doc.body.className;
  document.body.setAttribute('style', doc.body.getAttribute('style') ?? '');
  if (doc.body.dataset.modules) document.body.dataset.modules = doc.body.dataset.modules; else delete document.body.dataset.modules;
  document.title = doc.title;
  for (const k of ['site', 'room', 'prog']) if (doc.documentElement.dataset[k]) document.documentElement.dataset[k] = doc.documentElement.dataset[k];
  dropOld();
  if (push) history.pushState(null, '', url.href);
  if (url.hash) document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView(); else scrollTo(0, 0);
  ($('h1') ?? document.body).setAttribute('tabindex', '-1');
  ($('h1') ?? document.body).focus({ preventScroll: true });
  await mount();
}

document.addEventListener('click', (e) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = e.target.closest('a[href]');
  if (!a || a.target || a.hasAttribute('download') || a.closest('.frame')) return;
  const url = new URL(a.href, location.href);
  if (!sameSite(url)) return;
  e.preventDefault();
  navigate(url.href);
});
addEventListener('popstate', () => navigate(location.href, { push: false }));

// ================================================================== boot
// Restore the last recording into the bar (paused) so a returning visitor can resume.
try {
  const last = JSON.parse(localStorage.getItem('cp-last') || 'null');
  if (last && !document.body.classList.contains('room')) player.load(last.id, { t: last.t }).then(npTrack);
} catch {}
mount();
