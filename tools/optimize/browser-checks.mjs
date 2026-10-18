import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { ROOT } from './cache.mjs';

// Called through the browser tool with its real Chromium browser handle.
// Fresh isolated contexts prevent a saved recording/now-playing bar in one
// capture from changing the next. Reduced motion freezes the shared design.
export async function capture(browser, origin, phase, startAt = 0) {
  const dir = path.join(ROOT, 'cache/performance', phase);
  await mkdir(dir, { recursive: true });
  const rows = [];
  let position = 0;
  for (const [width, height] of [[1440, 900], [390, 844]]) for (const name of ['index.html', 'composers/mahler.html', 'hall.html', 'influence.html']) {
    if (position++ < startAt) continue;
    const context = await browser.createBrowserContext();
    try {
      const page = await context.newPage();
      await page.setViewport({ width, height, deviceScaleFactor: 1 });
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      const cdp = await page.createCDPSession();
      await cdp.send('Network.enable');
      await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
      const requests = new Map(), errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
      cdp.on('Network.responseReceived', ({ requestId, type, response }) => requests.set(requestId, { url: response.url, type, status: response.status, bytes: response.encodedDataLength }));
      cdp.on('Network.loadingFinished', ({ requestId, encodedDataLength }) => { const row = requests.get(requestId); if (row) row.bytes = encodedDataLength; });
      await page.goto(new URL(name, `${origin}/`).href, { waitUntil: 'networkidle0', timeout: 60000 });
      await page.evaluate(() => document.fonts.ready);
      if (name === 'hall.html') {
        await page.waitForFunction(() => !!document.querySelector('.now-composer')?.textContent.trim(), { timeout: 30000 });
        // Show the paused hall, not the one-time click-to-start overlay. This
        // does not call play/load or grant intent to preload remote audio.
        await page.evaluate(() => { const curtain = document.querySelector('.curtain'); if (curtain) curtain.hidden = true; });
      }
      const screenshot = `${name.replaceAll('/', '_')}.${width}x${height}.png`;
      await page.screenshot({ path: path.join(dir, screenshot) });
      const fonts = await page.evaluate(() => [...document.fonts].filter((face) => face.status === 'loaded').map((face) => ({ family: face.family, style: face.style, weight: face.weight })));
      const network = [...requests.values()].filter(({ url }) => /^https?:/.test(url));
      rows.push({ name, width, height, screenshot, fonts, errors, requests: network.length, bytes: network.reduce((sum, request) => sum + request.bytes, 0), network });
      await writeFile(path.join(dir, 'screenshots.json'), JSON.stringify(rows, null, 2));
    } finally { await context.close(); }
  }
  await writeFile(path.join(dir, 'screenshots.json'), JSON.stringify(rows, null, 2));
  return rows.map(({ name, width, height, requests, bytes, errors }) => ({ name, width, height, requests, bytes, errors }));
}
export async function compareScreenshots() {
  const root = path.join(ROOT, 'cache/performance');
  const rows = JSON.parse(await readFile(path.join(root, 'after/screenshots.json'), 'utf8'));
  const result = [];
  const { PNG } = await import('pngjs');
  const { default: pixelmatch } = await import('pixelmatch');
  for (const { name, width, height, screenshot } of rows) {
    const before = PNG.sync.read(await readFile(path.join(root, 'before', screenshot)));
    const after = PNG.sync.read(await readFile(path.join(root, 'after', screenshot)));
    if (before.width !== after.width || before.height !== after.height) throw new Error(`Viewport changed: ${screenshot}`);
    const diff = new PNG({ width: before.width, height: before.height });
    const changed = pixelmatch(before.data, after.data, diff.data, before.width, before.height, { threshold: 0.1 });
    let exact = 0;
    for (let i = 0; i < before.data.length; i += 4) if (before.data[i] !== after.data[i] || before.data[i + 1] !== after.data[i + 1] || before.data[i + 2] !== after.data[i + 2] || before.data[i + 3] !== after.data[i + 3]) exact++;
    await writeFile(path.join(root, 'after', `diff-${screenshot}`), PNG.sync.write(diff));
    result.push({ name, width, height, exactChangedPixels: exact, perceptualChangedPixels: changed, perceptualPercent: +(100 * changed / (width * height)).toFixed(4) });
  }
  await writeFile(path.join(root, 'visual-diff.json'), JSON.stringify(result, null, 2));
  return result;
}
