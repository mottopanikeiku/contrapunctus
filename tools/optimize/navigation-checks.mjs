import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { ROOT } from './cache.mjs';

export async function checkNavigation(browser, origin, label = 'root') {
  const context = await browser.createBrowserContext();
  const page = await context.newPage();
  const cdp = await page.createCDPSession();
  await cdp.send('Network.enable');
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
  // ServiceWorker.ready is forbidden in Chromium's isolated automation world.
  // App globals and offline readiness must be exercised in the page's world.
  const evaluate = async (fn, ...args) => {
    const value = await cdp.send('Runtime.evaluate', { expression: `(${fn.toString()})(...${JSON.stringify(args)})`, awaitPromise: true, returnByValue: true });
    if (value.exceptionDetails) throw new Error(value.exceptionDetails.exception?.description || value.exceptionDetails.text);
    return value.result.value;
  };
  const errors = [], responses = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error') errors.push({ message: message.text(), url: message.location().url }); });
  cdp.on('Network.responseReceived', ({ response }) => responses.push({ url: response.url, status: response.status, worker: response.fromServiceWorker }));
  const pages = ['index.html', 'influence.html', 'atlas-map.html', 'compare/mahler-5-adagietto.html', 'return-lab/beethoven-exposition-recapitulation.html', 'journeys/death-and-the-dies-irae.html', 'composers/mahler.html', 'glossary.html', 'hall.html'];
  const readiness = {
    'influence.html': '.iw-mounted',
    'atlas-map.html': '.am-ready',
    'compare/mahler-5-adagietto.html': '[data-cmp-select][aria-pressed="true"]',
    'return-lab/beethoven-exposition-recapitulation.html': '[data-rl-voices] > li',
    'journeys/death-and-the-dies-irae.html': '[data-j-reader].is-enhanced[data-station]',
    'hall.html': '.now-composer'
  };
  const result = { origin, pages: [], offline: [], errors };
  try {
    await page.goto(`${origin}/index.html`, { waitUntil: 'networkidle0' });
    await evaluate(async () => { await navigator.serviceWorker.ready; return true; });
    await page.waitForFunction(() => !!navigator.serviceWorker.controller);
    await evaluate(() => { window.__acceptanceAudio = window.CP.player.audio; });
    for (const name of pages) {
      await evaluate((url) => window.CP.navigate(url), `${origin}/${name}`);
      await page.waitForNetworkIdle({ idleTime: 500, timeout: 30000 });
      if (readiness[name]) await page.waitForFunction((selector) => !!document.querySelector(selector)?.textContent.trim(), {}, readiness[name]);
      const state = await evaluate(() => ({ url: location.pathname, modules: document.body.classList.contains('room') ? ['room'] : ['site', ...(document.body.dataset.modules || '').split(/\s+/).filter(Boolean)], content: !!document.querySelector('main, .stage'), persistentAudio: window.CP.player.audio === window.__acceptanceAudio, title: document.title, critical: document.querySelectorAll('style[data-cp-critical]').length }));
      if (!state.content || !state.persistentAudio) throw new Error(`Page did not mount: ${name}: ${JSON.stringify(state)}`);
      result.pages.push({ name, ...state });
    }
    const offline = { offline: true, latency: 0, downloadThroughput: 0, uploadThroughput: 0 };
    const sessions = [cdp, ...await Promise.all(context.targets().filter((target) => target.type() === 'service_worker').map((target) => target.createCDPSession()))];
    for (const session of sessions) {
      await session.send('Network.enable');
      await session.send('Network.emulateNetworkConditions', offline);
      await session.send('Network.overrideNetworkState', offline);
    }
    for (const name of ['composers/mahler.html', 'hall.html']) {
      // A full navigation also exercises bootstrap/module/font caching, not
      // just modules retained by the router in the current document.
      const response = await page.goto(`${origin}/${name}`, { waitUntil: 'networkidle0' });
      if (!await evaluate(() => !!window.CP)) throw new Error(`Offline app did not mount: ${name}`);
      if (name === 'hall.html') await page.waitForFunction(() => !!document.querySelector('.now-composer')?.textContent.trim());
      const state = await evaluate(() => ({ online: navigator.onLine, worker: navigator.serviceWorker.controller?.scriptURL, room: document.body.classList.contains('room'), heading: document.querySelector('.now-composer, h1')?.textContent.trim() }));
      const row = { name, status: response.status(), fromServiceWorker: response.fromServiceWorker(), ...state };
      if (state.online || !row.fromServiceWorker || row.status !== 200 || !row.heading || name === 'hall.html' && !row.room) throw new Error(`Offline rendering failed: ${JSON.stringify(row)}`);
      result.offline.push(row);
    }
    result.cacheURLs = await evaluate(async () => (await Promise.all((await caches.keys()).map(async (name) => (await (await caches.open(name)).keys()).map((request) => request.url)))).flat());
    result.cachedAudio = result.cacheURLs.filter((url) => /\.(mp3|ogg|oga|opus|flac|wav|m4a)(?:$|\?)/.test(url) || new URL(url).origin !== new URL(origin).origin);
    result.responses = responses;
    if (result.cachedAudio.length || errors.length) throw new Error(JSON.stringify({ cachedAudio: result.cachedAudio, errors }));
  } finally {
    await mkdir(path.join(ROOT, 'cache/performance'), { recursive: true });
    await writeFile(path.join(ROOT, `cache/performance/navigation-${label}.json`), JSON.stringify(result, null, 2));
    await context.close();
  }
  return { mounted: result.pages, offline: result.offline, errors, cachedAudio: result.cachedAudio };
}
