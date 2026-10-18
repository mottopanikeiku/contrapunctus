import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { ROOT } from './cache.mjs';

export async function checkNavigation(browser, origin) {
  const context = await browser.createBrowserContext();
  const page = await context.newPage();
  const cdp = await page.createCDPSession();
  await cdp.send('Network.enable');
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
  const errors = [], responses = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  cdp.on('Network.responseReceived', ({ response }) => responses.push({ url: response.url, status: response.status, worker: response.fromServiceWorker }));
  const pages = ['index.html', 'influence.html', 'atlas-map.html', 'compare/mahler-5-adagietto.html', 'return-lab/beethoven-exposition-recapitulation.html', 'journeys/death-and-the-dies-irae.html', 'composers/mahler.html', 'glossary.html', 'hall.html'];
  const result = { pages: [], offline: [], errors };
  try {
    await page.goto(`${origin}/index.html`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => navigator.serviceWorker.ready);
    await page.waitForFunction(() => !!navigator.serviceWorker.controller);
    await page.evaluate(() => { window.__acceptanceAudio = window.CP.player.audio; });
    for (const name of pages) {
      await page.evaluate((url) => window.CP.navigate(url), `${origin}/${name}`);
      await page.waitForNetworkIdle({ idleTime: 500, timeout: 30000 });
      const state = await page.evaluate(() => ({ url: location.pathname, modules: document.body.classList.contains('room') ? ['room'] : ['site', ...(document.body.dataset.modules || '').split(/\s+/).filter(Boolean)], content: !!document.querySelector('main, .stage'), persistentAudio: window.CP.player.audio === window.__acceptanceAudio, title: document.title, critical: document.querySelectorAll('style[data-cp-critical]').length }));
      if (!state.content || !state.persistentAudio) throw new Error(`Page did not mount: ${name}: ${JSON.stringify(state)}`);
      result.pages.push({ name, ...state });
    }
    await page.setOfflineMode(true);
    for (const name of ['composers/mahler.html', 'hall.html']) {
      // A full navigation also exercises bootstrap/module/font caching, not
      // just modules retained by the router in the current document.
      const response = await page.goto(`${origin}/${name}`, { waitUntil: 'networkidle0' });
      await page.waitForFunction(() => !!window.CP);
      if (name === 'hall.html') await page.waitForFunction(() => !!document.querySelector('.now-composer')?.textContent.trim());
      const state = await page.evaluate(() => ({ online: navigator.onLine, worker: navigator.serviceWorker.controller?.scriptURL, room: document.body.classList.contains('room'), heading: document.querySelector('.now-composer, h1')?.textContent.trim() }));
      const row = { name, status: response.status(), fromServiceWorker: response.fromServiceWorker(), ...state };
      if (state.online || !row.fromServiceWorker || row.status !== 200 || !row.heading || name === 'hall.html' && !row.room) throw new Error(`Offline rendering failed: ${JSON.stringify(row)}`);
      result.offline.push(row);
    }
    result.cacheURLs = await page.evaluate(async () => (await Promise.all((await caches.keys()).map(async (name) => (await (await caches.open(name)).keys()).map((request) => request.url)))).flat());
    result.cachedAudio = result.cacheURLs.filter((url) => /\.(mp3|ogg|oga|opus|flac|wav|m4a)(?:$|\?)/.test(url) || new URL(url).origin !== new URL(origin).origin);
    if (result.cachedAudio.length || errors.length) throw new Error(JSON.stringify({ cachedAudio: result.cachedAudio, errors }));
    result.responses = responses;
  } finally {
    await mkdir(path.join(ROOT, 'cache/performance'), { recursive: true });
    await writeFile(path.join(ROOT, 'cache/performance/navigation.json'), JSON.stringify(result, null, 2));
    await context.close();
  }
  return { mounted: result.pages, offline: result.offline, errors, cachedAudio: result.cachedAudio };
}
