// App shell: keeps the music playing across pages.
// - Same-site links are fetched and swapped in place; everything inside #cp-persist (audio state, the
//   now-playing bar, search) survives. Stylesheets are synchronised before the swap.
// - The concert hall (body.room) mounts room.js; every other page mounts site.js.
const { player } = await import(`./player.js?v=${document.documentElement.dataset.player ?? ''}`);

const ROOT = player.root;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmt = (t) => { t = Math.max(0, Math.floor(t || 0)); return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; };
const app = { player, root: ROOT, navigate, scrollFragment, fmt };
window.CP = app;
// Initial relative head-link URLs otherwise retarget when pushState enters a nested directory.
for (const link of $$('link[href]', document.head)) link.setAttribute('href', link.href);

// A delegated entry point, not a page module: no tour code, data or CSS is fetched until requested.
let tourRequest;
async function startTour(id) {
  try {
    tourRequest ??= import(new URL(`assets/js/tour.js?v=${document.documentElement.dataset.tour ?? ''}`, ROOT).href)
      .then((module) => (app.tour = module.createTour(app))).catch((error) => { tourRequest = null; throw error; });
    await (await tourRequest).start(id);
  } catch (error) {
    let note = $('#cp-tour-error');
    if (!note) { note = document.createElement('p'); note.id = 'cp-tour-error'; note.setAttribute('role', 'alert'); $('#cp-persist').append(note); }
    note.textContent = `${error.message} Use Guide to choose the lesson again.`;
  }
}
document.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-tour]');
  if (!button) return;
  event.preventDefault(); $('#cp-tour-error')?.remove(); startTour(button.dataset.tour);
});

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
let indexRequest = null, searchVersion = 0, reloadSearch = false;
const searchShards = new Map();
const fold = (s) => (s ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const escapeHtml = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
function searchIndex() {
  if (indexRequest) return indexRequest;
  const cache = reloadSearch ? 'reload' : 'default';
  reloadSearch = false;
  return indexRequest = fetch(new URL('assets/search.json', ROOT), { cache }).then((r) => {
    if (!r.ok) throw new Error(`Search: HTTP ${r.status}`);
    return r.json();
  }).then((index) => {
    let previous = '';
    index.w = index.w.map((packed) => (previous = previous.slice(0, packed.codePointAt(0) - 32) + packed.slice(1)));
    index.parts = index.w.map((word) => word.split(/[^a-z0-9]+/));
    return index;
  }).catch((error) => { indexRequest = null; throw error; });
}
function openSearch() {
  if (!dlg) return;
  dlg.showModal();
  const input = $('input', dlg);
  input.value = ''; render('');
  input.focus();
  // The first open starts just the compact index, never recordings or display shards.
  searchIndex().catch(() => {});
}
async function render(q) {
  const version = ++searchVersion, box = $('.srch-results', dlg);
  const terms = fold(q).split(/\s+/).filter(Boolean);
  if (!terms.length) { box.innerHTML = '<li class="srch-hint">A composer (Ravel), a work (Boléro), a recording, an idea (fugue, sonata form, Tristan chord).</li>'; return; }
  box.innerHTML = '<li class="srch-hint">Loading…</li>';
  try {
    const index = await searchIndex();
    if (version !== searchVersion) return;
    const total = new Uint16Array(index.b.length), matched = new Uint16Array(index.b.length);
    for (const term of terms) {
      const scores = new Uint8Array(index.b.length);
      for (let i = 0; i < index.w.length; i++) {
        const word = index.w[i];
        if (!word.includes(term)) continue;
        const title = word.startsWith(term), value = index.parts[i].some((w) => w.startsWith(term)) ? 3 : 1;
        let id = 0;
        for (const code of index.p[i]) {
          const packed = code.codePointAt(0) - 32, flags = packed & 3;
          id += Math.floor(packed / 4);
          const score = title && (flags & 2) ? 6 : flags & 1 ? value : 0;
          if (score > scores[id]) scores[id] = score;
        }
      }
      for (let id = 0; id < scores.length; id++) if (scores[id]) { total[id] += scores[id]; matched[id]++; }
    }
    const hits = [];
    for (let id = 0; id < total.length; id++) if (matched[id] === terms.length) hits.push(id);
    hits.sort((a, b) => total[b] + index.b[b] - total[a] - index.b[a] || a - b);
    const best = hits.slice(0, 24);
    const rows = await Promise.all(best.map(async (id) => {
      const shard = Math.floor(id / index.size), key = `${index.v}/${shard}`;
      if (!searchShards.has(key)) searchShards.set(key, fetch(new URL(`assets/search/${key}.json`, ROOT)).then((r) => {
        if (!r.ok) throw Object.assign(new Error(`Search results: HTTP ${r.status}`), { staleSearch: r.status === 404 || r.status === 410 });
        return r.json();
      }).catch((error) => { searchShards.delete(key); throw error; }));
      return (await searchShards.get(key))[id % index.size];
    }));
    if (version !== searchVersion) return;
    box.innerHTML = rows.map(([type, title, sub, url], i) => `<li><a href="${escapeHtml(new URL(url, ROOT).href)}"${i === 0 ? ' class="sel"' : ''}><span class="srch-t">${escapeHtml(type)}</span><span class="srch-n">${escapeHtml(title)}</span><span class="srch-s">${escapeHtml(sub)}</span></a></li>`).join('') || '<li class="srch-hint">Nothing found. Try fewer words.</li>';
  } catch (error) {
    if (version !== searchVersion) return;
    if (error.staleSearch) { indexRequest = null; reloadSearch = true; searchShards.clear(); }
    box.innerHTML = '<li class="srch-hint">Search could not load. Type again to retry.</li>';
  }
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
let pageURL = new URL(location.href);
const modules = {};

// The hall mounts room.js; every other page mounts site.js. Pages may add their own modules with
// <body data-modules="name …">, each loaded from assets/js/<name>.js and exporting mount(app) → cleanup.
async function mount() {
  const my = token;
  const room = document.body.classList.contains('room');
  // The cold Hall welcome is server-rendered; an already-playing visit needs no curtain.
  if (room && player.playing) { $('.curtain').hidden = true; document.body.classList.remove('waiting'); }
  const names = [room ? 'room' : 'site', ...(document.body.dataset.modules ?? '').split(/\s+/).filter(Boolean)];
  for (const name of names) {
    try {
      modules[name] ??= await import(new URL(`assets/js/${name}.js?v=${document.documentElement.getAttribute(`data-${name}`) ?? document.documentElement.dataset.site ?? ''}`, ROOT).href);
      if (my !== token) return;
      const off = await modules[name].mount(app);
      if (my !== token) { if (typeof off === 'function') off(); return; }
      if (typeof off === 'function') unmounts.push(off);
    } catch (err) { console.error(`mount ${name} failed`, err); }
  }
  npShow();
  app.tour?.mount();
}

const sameSite = (u) => u.origin === location.origin && u.pathname.startsWith(ROOT.pathname) && (/\.html$/.test(u.pathname) || u.pathname.endsWith('/'));

// Share in-flight requests between hover, touch and navigation. Bound both lifetime and memory;
// large pages such as the source register must not turn a long visit into a document archive.
const pageCache = new Map();
let pageBytes = 0;
function pageHTML(url) {
  const key = new URL(url); key.hash = '';
  let entry = pageCache.get(key.href);
  if (entry && Date.now() - entry.at < 600000) return entry.request;
  if (entry) { pageBytes -= entry.bytes; pageCache.delete(key.href); }
  entry = { at: Date.now(), bytes: 0 };
  entry.request = fetch(key.href).then((r) => { if (!r.ok) throw new Error(`Page: HTTP ${r.status}`); return r.text(); }).then((html) => {
    if (pageCache.get(key.href) === entry) {
      entry.bytes = html.length * 2; pageBytes += entry.bytes;
      while (pageCache.size > 8 || pageBytes > 4000000) {
        const [oldKey, old] = pageCache.entries().next().value;
        pageBytes -= old.bytes; pageCache.delete(oldKey);
      }
    }
    return html;
  }).catch((error) => { if (pageCache.get(key.href) === entry) pageCache.delete(key.href); throw error; });
  pageCache.set(key.href, entry);
  return entry.request;
}
function prefetchLink(event) {
  const connection = navigator.connection;
  if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? '')) return;
  const a = event.target.closest?.('a[href]');
  if (!a || a.target || a.hasAttribute('download') || a.closest('.frame')) return;
  const url = new URL(a.href);
  if (!sameSite(url) || (url.pathname === location.pathname && url.search === location.search)) return;
  pageHTML(url).catch(() => {});
}
document.addEventListener('pointerover', prefetchLink, { passive: true });
document.addEventListener('focusin', prefetchLink);
document.addEventListener('touchstart', prefetchLink, { passive: true });
// New-tab links bypass the persistent router. Prefetch documents, not prerendered players.
if (HTMLScriptElement.supports?.('speculationrules') && !navigator.connection?.saveData) {
  const rules = document.createElement('script');
  rules.type = 'speculationrules';
  rules.textContent = JSON.stringify({ prefetch: [{ source: 'document', where: { and: [
    { href_matches: `${ROOT.origin}${ROOT.pathname}*.html*` }, { selector_matches: 'a[target="_blank"]:not([download])' },
  ] }, eagerness: 'moderate' }] });
  document.head.append(rules);
}

async function syncStyles(doc) {
  const want = $$('link[rel="stylesheet"]', doc.head).map((l) => new URL(l.getAttribute('href'), doc.baseURI || location.href).href);
  const have = $$('link[rel="stylesheet"]', document.head);
  const loads = [];
  for (const href of want) {
    let l = have.find((link) => link.href === href);
    if (l?.sheet) continue;
    const fresh = !l;
    if (fresh) { l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href; l.media = 'not all'; }
    loads.push(new Promise((resolve) => {
      l.addEventListener('load', resolve, { once: true });
      l.addEventListener('error', resolve, { once: true });
    }));
    if (fresh) document.head.append(l);
  }
  await Promise.all(loads);
  return () => {
    // Retain parsed stylesheets for the return trip without letting old rules bleed into the page.
    for (const l of $$('link[rel="stylesheet"]', document.head)) l.media = want.includes(l.href) || l.hasAttribute('data-cp-tour') ? 'all' : 'not all';
    $$('style[data-cp-critical]', document.head).forEach((style) => style.remove());
  };
}

function scrollFragment(url, behavior = 'auto') {
  const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
  if (!target?.closest('.glossary-entry')) { target?.scrollIntoView({ behavior }); return; }
  // A smooth traversal materialises skipped rows and invalidates its destination.
  // Allow one rendering update to lay out newly visible rows before alignment.
  target.scrollIntoView({ behavior: 'instant' });
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (target.isConnected && location.hash === url.hash) target.scrollIntoView({ behavior: 'instant' });
  }));
}

export async function navigate(href, { push = true } = {}) {
  const url = new URL(href, location.href);
  if (!sameSite(url)) { location.href = url.href; return; }
  if (url.pathname === pageURL.pathname && url.search === pageURL.search) {
    if (push && url.hash !== location.hash) history.pushState(null, '', url.href);
    if (url.hash) { scrollFragment(url, 'smooth'); window.dispatchEvent(new HashChangeEvent('hashchange')); }
    return;
  }
  const my = ++token;
  let html;
  try { html = await pageHTML(url); } catch { location.href = url.href; return; }
  if (my !== token) return;
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const base = doc.createElement('base'); base.href = url.href; doc.head.prepend(base);
  const dropOld = await syncStyles(doc);
  if (my !== token) return;
  app.tour?.unmount();
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
  for (const [key, value] of Object.entries(doc.documentElement.dataset)) document.documentElement.dataset[key] = value;
  dropOld();
  if (push) history.pushState(null, '', url.href);
  pageURL = url;
  if (url.hash) scrollFragment(url); else scrollTo(0, 0);
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
mount().then(() => {
  try { if (sessionStorage.getItem('cp-tour')) startTour(); } catch {}
});

// No audio or cross-origin resources enter the offline cache. Activation never interrupts playback.
if ('serviceWorker' in navigator) {
  const register = () => navigator.serviceWorker.register(new URL('../../sw.js', import.meta.url), {
    scope: new URL('../../', import.meta.url).pathname, updateViaCache: 'none',
  }).then(() => navigator.serviceWorker.ready).then((registration) => {
    const assets = new URL('assets/', ROOT), urls = new Set();
    for (const entry of performance.getEntriesByType('resource')) {
      if (entry.initiatorType === 'audio' || entry.initiatorType === 'video') continue;
      const url = new URL(entry.name);
      if (url.origin !== location.origin || !url.pathname.startsWith(assets.pathname)
        || /\.(?:mp3|mp4|m4a|aac|ogg|oga|opus|wav|flac|webm|weba|aiff?|midi?)$/i.test(url.pathname)) continue;
      urls.add(entry.name);
    }
    // Report already-used resources; cache population belongs to the worker, not the page.
    registration.active.postMessage({ type: 'cache-visited-assets', urls: [...urls] });
  }).catch((error) => console.warn('Offline cache unavailable:', error));
  if (document.readyState === 'complete') register();
  else window.addEventListener('load', register, { once: true });
}
