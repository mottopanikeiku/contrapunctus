// Revisions and BUILD are injected by the post-build generator.
const ROOT = new URL('./', self.location);
const PREFIX = `contrapunctus:${ROOT.pathname}:`;
const SHELL = `${PREFIX}shell:${BUILD}`;
const HTML = `${PREFIX}html:${BUILD}`;
const DATA = `${PREFIX}data:${BUILD}`;
const IMAGES = `${PREFIX}images:${BUILD}`;
const SCORES = `${PREFIX}scores:${BUILD}`;
const activeCaches = new Set([SHELL, HTML, DATA, IMAGES, SCORES]);
const revisions = new Map(PRECACHE.map(({ url, revision }) => [new URL(url, ROOT).href, revision]));
const precached = new Set(PRECACHE.filter((entry) => entry.precache).map(({ url }) => new URL(url, ROOT).href));
const revisionKey = (url, revision) => `${url}?__revision=${revision}`;
const storable = (response) => response.ok && response.status !== 206 && response.type === 'basic';
let assetWrites = Promise.resolve();

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL);
    // Four concurrent requests, not a burst of every asset. Reuse installed
    // exact hashes, including visited non-core modules, without fetching
    // notation/other page modules that the visitor has never needed.
    const entries = [...revisions];
    let next = 0;
    await Promise.all(Array.from({ length: Math.min(4, entries.length) }, async () => {
      while (next < entries.length) {
        const [url, revision] = entries[next++], key = revisionKey(url, revision);
        const previous = await caches.match(key);
        if (!previous && !precached.has(url)) continue;
        // Reuse the first page's HTTP responses. Hash-named fonts and versioned
        // CSS/JS/programme URLs are immutable; only HTML needs revalidation.
        const fetchURL = /\.(?:css|js|json)$/.test(url) ? `${url}?v=${revision.slice(0, 12)}` : url;
        const response = previous || await fetch(new Request(fetchURL, { cache: url.endsWith('.html') ? 'reload' : 'force-cache' }));
        if (!storable(response)) throw new Error(`Unable to precache ${url}: ${response.status}`);
        await cache.put(key, response);
      }
    }));
    // The initial document was loaded before worker control. Preserve it too;
    // the app supplies its actually loaded assets through the message below.
    const documents = await caches.open(HTML);
    for (const client of await self.clients.matchAll({ type: 'window', includeUncontrolled: true })) {
      const url = new URL(client.url);
      if (url.origin !== ROOT.origin || !url.pathname.startsWith(ROOT.pathname)) continue;
      url.search = ''; url.hash = '';
      if (url.pathname.endsWith('/')) url.pathname += 'index.html';
      if (!url.pathname.endsWith('.html')) continue;
      const revision = revisions.get(url.href);
      const response = revision && await cache.match(revisionKey(url.href, revision)) || await fetch(new Request(url, { cache: 'force-cache' }));
      if (!storable(response)) throw new Error(`Unable to preserve initial page: ${url}`);
      await documents.put(url, response);
    }
  })());
  // Do not skipWaiting: a new release must not replace a playing page's shell.
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    // Preserve visited HTML/data across releases for offline navigation. New
    // network responses replace these; immutable shell entries stay revisioned.
    for (const name of names) {
      if (!name.startsWith(PREFIX) || activeCaches.has(name)) continue;
      const destination = name.startsWith(`${PREFIX}html:`) ? HTML : name.startsWith(`${PREFIX}data:`) ? DATA : null;
      if (destination) {
        const old = await caches.open(name), current = await caches.open(destination);
        for (const key of await old.keys()) if (!await current.match(key)) await current.put(key, await old.match(key));
      }
      await caches.delete(name);
    }
    await self.clients.claim();
  })());
});

async function networkFirst(request, key) {
  const cache = await caches.open(HTML);
  const offline = async () => await cache.match(key) || (revisions.has(key) ? await (await caches.open(SHELL)).match(revisionKey(key, revisions.get(key))) : undefined);
  try {
    const response = await fetch(request);
    if (storable(response)) { await cache.put(key, response.clone()); return response; }
    if (response.status < 500) return response;
    return await offline() || response;
  } catch (error) {
    const cached = await offline();
    if (cached) return cached;
    throw error;
  }
}
async function staleWhileRevalidate(event, key) {
  const cache = await caches.open(DATA);
  const update = fetch(event.request).then(async (response) => {
    if (storable(response)) await cache.put(key, response.clone());
    return response;
  });
  event.waitUntil(update.catch(() => {}));
  return await cache.match(key) || update;
}
async function cacheLRU(event, name, limit) {
  const cache = await caches.open(name), key = event.request;
  let response = await cache.match(key);
  if (!response) response = await fetch(key);
  if (storable(response)) {
    const copy = response.clone();
    // put() atomically replaces and moves an entry to the insertion-order
    // tail. Deleting first creates a cache-miss window for concurrent offline
    // image/artwork requests. Serialise writes to respect the LRU bound.
    const write = assetWrites.then(async () => {
      await cache.put(key, copy);
      const keys = await cache.keys();
      for (let i = 0; i < keys.length - limit; i++) await cache.delete(keys[i]);
    });
    assetWrites = write.catch(() => {});
    event.waitUntil(assetWrites);
  }
  return response;
}

self.addEventListener('message', (event) => {
  if (event.data?.type !== 'cache-visited-assets' || !Array.isArray(event.data.urls)) return;
  // Reuse HTTP-cached resources actually used before worker control. Do not
  // fetch an unvisited page's modules/images or treat old ?v= bytes as a new
  // shell revision. Four workers keep this off the foreground's critical path.
  event.waitUntil((async () => {
    const queue = [...new Set(event.data.urls)];
    let next = 0;
    await Promise.all(Array.from({ length: Math.min(4, queue.length) }, async () => {
      while (next < queue.length) {
        const url = new URL(queue[next++]);
        if (url.origin !== ROOT.origin || !url.pathname.startsWith(`${ROOT.pathname}assets/`) || /\.(?:mp3|ogg|oga|opus|flac|wav|m4a|aac)$/i.test(url.pathname)) continue;
        const canonical = new URL(url.pathname, ROOT), revision = revisions.get(canonical.href);
        const request = new Request(url, { cache: 'force-cache' });
        let name, key;
        if (revision) {
          if (url.searchParams.has('v') && url.searchParams.get('v') !== revision.slice(0, 12)) continue;
          name = SHELL; key = revisionKey(canonical.href, revision);
        } else if (/\.(?:avif|webp|png|jpe?g|gif|svg)$/i.test(url.pathname)) {
          const score = url.pathname.endsWith('.svg') && /\/(?:data|scores)\//.test(url.pathname);
          await cacheLRU({ request, waitUntil: (promise) => event.waitUntil(promise) }, score ? SCORES : IMAGES, 300);
          continue;
        } else if (url.pathname.endsWith('.json')) {
          name = DATA; key = url.href;
        } else continue;
        const cache = await caches.open(name);
        if (await cache.match(key)) continue;
        const response = await fetch(request);
        if (storable(response)) await cache.put(key, response);
      }
    }));
  })());
});
self.addEventListener('fetch', (event) => {
  const request = event.request, url = new URL(request.url);
  // No audio bytes, partial requests, remote CDNs, or third-party responses.
  if (request.method !== 'GET' || url.origin !== ROOT.origin || !url.pathname.startsWith(ROOT.pathname) || request.headers.has('Range') || request.destination === 'audio' || /\.(?:mp3|ogg|oga|opus|flac|wav|m4a|aac)$/i.test(url.pathname)) return;
  const canonical = new URL(url.pathname, ROOT);
  if (canonical.pathname.endsWith('/')) canonical.pathname += 'index.html';
  const revision = revisions.get(canonical.href);
  const version = url.searchParams.get('v');
  const versionedAsset = /^[a-f0-9]{12}$/.test(version || '') && /\/assets\/(?:js|css|vendor)\/.*\.(?:js|css)$/.test(url.pathname);
  const hashedFont = /\/assets\/fonts\/[^/]+\.[a-f0-9]{16}\.woff2$/.test(url.pathname);
  if (request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    event.respondWith(networkFirst(request, canonical.href));
  } else if (revision || versionedAsset || hashedFont) {
    event.respondWith(caches.open(SHELL).then(async (cache) => {
      // A waiting update must not make the active worker serve its old bytes
      // for a new HTML document's ?v=. Unknown immutable versions have their
      // own URL keys until the next worker owns their full revision manifest.
      const key = revision && (!version || version === revision.slice(0, 12)) ? revisionKey(canonical.href, revision) : url.href;
      const found = await cache.match(key);
      if (found) return found;
      const response = await fetch(request);
      if (storable(response)) await cache.put(key, response.clone());
      return response;
    }));
  } else if (url.pathname.endsWith('.json') || /\/assets\/data\//.test(url.pathname) && !url.pathname.endsWith('.svg')) {
    event.respondWith(staleWhileRevalidate(event, url.href));
  } else if (url.pathname.endsWith('.svg') && /\/(?:data|scores)\//.test(url.pathname)) {
    event.respondWith(cacheLRU(event, SCORES, 300));
  } else if (request.destination === 'image' || /\.(?:avif|webp|png|jpe?g|gif|svg)$/.test(url.pathname)) {
    event.respondWith(cacheLRU(event, IMAGES, 300));
  }
});
