// The one shell every page shares: header, search, menu, persistent rail, footer.
import { esc, attr, site, SITE_URL, version } from './lib.mjs';

const V = { css: await version('assets/css/site.css'), app: await version('assets/js/app.js') };

const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">`;

export const NAV = [
  ['listen', 'Listen', 'listen/index.html', 'Real performances with a guide'],
  ['explore', 'Explore', 'explore/index.html', 'Composers, periods, lifelines, art'],
  ['learn', 'Learn', 'learn/index.html', 'How the music works, and where it came from'],
];

const icon = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><text x="12" y="15.5" font-size="7" text-anchor="middle" fill="currentColor" stroke="none" font-family="sans-serif">10</text></svg>',
  fwd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/><text x="12" y="15.5" font-size="7" text-anchor="middle" fill="currentColor" stroke="none" font-family="sans-serif">10</text></svg>',
  next: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5v14l9-7zM16 5h2v14h-2z"/></svg>',
};
export { icon };

/**
 * page(ctx, { title, description, main, type, nav, ogImage })
 * `type` names the client module mounted for <main> (listen, composer, notation, lifelines, collection, directory, lesson).
 */
export function page(ctx, { title, description, main, type = 'page', nav = '', ogImage, noindex = false }) {
  const b = ctx.base;
  const desc = description ?? site.description;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${attr(desc)}">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(desc)}">
${ogImage ? `<meta property="og:image" content="${attr(SITE_URL + ogImage)}"><meta name="twitter:card" content="summary_large_image">` : ''}
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta name="theme-color" content="#f5f2ea">
<link rel="icon" href="${b}assets/favicon.svg" type="image/svg+xml">
${fonts}
<link rel="stylesheet" href="${b}assets/css/site.css?v=${V.css}">
<script>window.CP_BASE = ${JSON.stringify(b)};</script>
<script type="module" src="${b}assets/js/app.js?v=${V.app}"></script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-head"><div class="wrap">
  <a class="wordmark" href="${b}index.html">Contrapunctus</a>
  <nav class="primary-nav" aria-label="Main">${NAV.map(([k, t, u]) => `<a href="${b}${u}"${nav === k ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav>
  <div class="head-actions">
    <button class="search-btn" type="button" data-open-search aria-label="Search">${icon.search}<span>Search</span><kbd>/</kbd></button>
    <button class="icon-btn menu-btn" type="button" data-open-menu aria-label="Menu" aria-haspopup="dialog">${icon.menu}</button>
  </div>
</div></header>
<main id="main" data-page="${type}" tabindex="-1">
${main}
</main>
<footer class="site-foot"><div class="wrap">
  <div><a class="wordmark" href="${b}index.html">Contrapunctus</a>
  <p>Western classical music, explained while you listen. Free recordings here come mainly from the eighteenth to the early twentieth century; the reading reaches the present.</p></div>
  <div><h2>Listen</h2><ul><li><a href="${b}listen/index.html">All recordings</a></li><li><a href="${b}listen/index.html#routes">Listening routes</a></li><li><a href="${b}return-lab/index.html">The Return Lab</a></li></ul></div>
  <div><h2>Explore</h2><ul><li><a href="${b}composers/index.html">Composers</a></li><li><a href="${b}periods/index.html">Periods</a></li><li><a href="${b}explore/lifelines.html">Lifelines</a></li><li><a href="${b}explore/collection.html">Art and documents</a></li></ul></div>
  <div><h2>About</h2><ul><li><a href="${b}learn/index.html">Learn</a></li><li><a href="${b}about.html">Method, sources and rights</a></li><li><a href="${b}about.html#cite">How to cite</a></li><li><a href="https://github.com/mottopanikeiku/contrapunctus/issues">Report an error</a></li></ul></div>
</div></footer>

<div class="rail" hidden data-rail>
  <div class="rail-inner">
    <div class="controls">
      <button class="icon-btn" type="button" data-act="back" aria-label="Back 10 seconds">${icon.back}</button>
      <button class="icon-btn play" type="button" data-act="toggle" aria-label="Play">${icon.play}</button>
      <button class="icon-btn" type="button" data-act="fwd" aria-label="Forward 10 seconds">${icon.fwd}</button>
      <button class="icon-btn" type="button" data-act="next" aria-label="Next piece">${icon.next}</button>
    </div>
    <a class="now" data-now href="#"><b data-now-title></b><span data-now-sub></span></a>
    <div class="seek"><span class="num" data-cur>0:00</span><input type="range" min="0" max="100" step="0.1" value="0" aria-label="Position in the recording" data-seek><span class="num" data-dur>0:00</span></div>
    <div class="more"><span class="status" data-status aria-live="polite"></span><label class="text-btn" style="display:inline-flex;align-items:center;gap:.4rem"><input type="checkbox" data-concert checked> Keep playing</label><button class="text-btn" type="button" data-open-programme>Choose music</button></div>
  </div>
</div>

<dialog class="search" data-search aria-label="Search">
  <div class="search-field">${icon.search}<input type="search" placeholder="Composers, works, ideas…" aria-label="Search the site" autocomplete="off" data-search-input><button class="icon-btn" type="button" data-close aria-label="Close search">${icon.close}</button></div>
  <ul class="search-results" data-search-results role="listbox" aria-label="Results"></ul>
</dialog>

<dialog class="sheet" data-menu aria-label="Menu">
  <div class="sheet-head"><a class="wordmark" href="${b}index.html">Contrapunctus</a><button class="icon-btn" type="button" data-close aria-label="Close menu">${icon.close}</button></div>
  <nav aria-label="Main">${NAV.map(([, t, u, s]) => `<a href="${b}${u}">${t}<small>${s}</small></a>`).join('')}<a href="${b}about.html">About<small>Method, sources and rights</small></a></nav>
</dialog>

<dialog class="sheet wide" data-programme aria-label="Choose music">
  <div class="sheet-head"><strong class="ui">Choose music</strong><button class="icon-btn" type="button" data-close aria-label="Close">${icon.close}</button></div>
  <div class="prog-filter"><input type="search" placeholder="Filter by composer or work" aria-label="Filter recordings" data-prog-filter></div>
  <div class="prog-list" data-prog-list></div>
</dialog>
</body>
</html>
`;
}
