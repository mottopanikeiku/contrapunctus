import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { ROOT } from './cache.mjs';

// Exercise the reader-facing contracts of offscreen glossary containment.
export async function checkReading(browser, origin, label) {
  const result = { origin, viewports: [], errors: [] };
  for (const [width, height] of [[1440, 900], [390, 844]]) {
    const context = await browser.createBrowserContext();
    try {
      const page = await context.newPage();
      await page.setViewport({ width, height, deviceScaleFactor: 1 });
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      page.on('pageerror', (error) => result.errors.push(error.message));
      const cdp = await page.createCDPSession();
      const evaluate = async (fn, ...args) => {
        const reply = await cdp.send('Runtime.evaluate', { expression: `(${fn.toString()})(...${JSON.stringify(args)})`, awaitPromise: true, returnByValue: true });
        if (reply.exceptionDetails) throw new Error(reply.exceptionDetails.exception?.description || reply.exceptionDetails.text);
        return reply.result.value;
      };
      await page.goto(`${origin}/index.html`, { waitUntil: 'networkidle0' });
      await evaluate(() => { window.__readingAudio = window.CP.player.audio; });
      await evaluate((url) => window.CP.navigate(url), `${origin}/glossary.html#whole-tone-scale`);
      await page.waitForNetworkIdle({ idleTime: 500 });
      await page.evaluate(() => document.fonts.ready);
      const navigationAnchor = await evaluate(() => {
        const entry = document.getElementById('whole-tone-scale');
        return { top: entry.getBoundingClientRect().top, expectedTop: parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + parseFloat(getComputedStyle(entry).scrollMarginTop), persistentAudio: window.CP.player.audio === window.__readingAudio };
      });
      if (Math.abs(navigationAnchor.top - navigationAnchor.expectedTop) > 2 || !navigationAnchor.persistentAudio) result.errors.push(`Cross-page anchor at ${width}px: ${JSON.stringify(navigationAnchor)}`);
      await page.goto(`${origin}/glossary.html`, { waitUntil: 'networkidle0' });
      await page.waitForSelector('#term-popover', { visible: false });
      await page.evaluate(() => document.fonts.ready);
      const kinds = await page.$$eval('#glossary-kind option', (options) => options.map((option) => option.value));
      const filters = [];
      for (const kind of kinds) {
        await page.select('#glossary-kind', kind);
        const state = await page.evaluate(() => {
          const kind = document.querySelector('#glossary-kind').value;
          const entries = [...document.querySelectorAll('.glossary-entry')];
          const expected = entries.filter((entry) => !kind || entry.dataset.kind === kind);
          const visible = entries.filter((entry) => !entry.hidden);
          const alphabet = [...document.querySelectorAll('.glossary-alphabet a')].every((a) => {
            const first = visible.find((entry) => entry.querySelector('h2').textContent[0].toLocaleUpperCase('en') === a.textContent);
            return first ? !a.hidden && a.hash === `#${first.id}` : a.hidden;
          });
          return { kind, count: visible.length, correct: visible.length === expected.length && visible.every((entry) => expected.includes(entry)), alphabet, status: document.querySelector('#glossary-count').textContent };
        });
        if (!state.correct || !state.alphabet || state.status !== `${state.count} terms`) throw new Error(`Glossary filtering: ${JSON.stringify(state)}`);
        filters.push(state);
      }
      const anchors = [];
      for (const id of ['counterpoint', 'whole-tone-scale']) {
        const excluding = await page.$eval(`#${id}`, (entry, kinds) => kinds.find((kind) => kind && kind !== entry.dataset.kind), kinds);
        await page.select('#glossary-kind', excluding);
        await evaluate((url) => window.CP.navigate(url), `${origin}/glossary.html#${id}`);
        await page.waitForFunction((id) => {
          const entry = document.getElementById(id), rect = entry.getBoundingClientRect();
          return !entry.hidden && rect.top >= 0 && rect.top < innerHeight;
        }, {}, id);
        await page.waitForNetworkIdle({ idleTime: 500 });
        await page.evaluate(() => document.fonts.ready);
        const state = await page.evaluate((id) => {
          const entry = document.getElementById(id), box = entry.getBoundingClientRect();
          return { id, reset: document.querySelector('#glossary-kind').value === '', top: box.top, expectedTop: parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + parseFloat(getComputedStyle(entry).scrollMarginTop), width: box.width, height: box.height, text: entry.textContent, children: [...entry.querySelectorAll('header, h2, p, .term-hear')].map((node) => {
            const r = node.getBoundingClientRect(), css = getComputedStyle(node);
            return { tag: node.tagName, class: node.className, x: r.x - box.x, y: r.y - box.y, width: r.width, height: r.height, font: css.font, text: node.textContent };
          }) };
        }, id);
        if (!state.reset) throw new Error(`Hidden anchor did not reset filter: ${id}`);
        if (Math.abs(state.top - state.expectedTop) > 2) result.errors.push(`Unsettled anchor at ${width}px: ${id} top ${state.top}, expected ${state.expectedTop}`);
        anchors.push(state);
      }
      await page.emulateMediaType('print');
      const printable = await page.$$eval('.glossary-entry', (entries) => entries.every((entry) => getComputedStyle(entry).contentVisibility === 'visible' && !entry.hidden));
      if (!printable) throw new Error('Glossary entries are skipped in print');
      result.viewports.push({ width, height, filters, anchors, navigationAnchor, printable });
    } finally { await context.close(); }
  }
  await mkdir(path.join(ROOT, 'cache/performance'), { recursive: true });
  await writeFile(path.join(ROOT, `cache/performance/reading-${label}.json`), JSON.stringify(result, null, 2));
  if (result.errors.length) throw new Error(JSON.stringify(result.errors));
  return { viewports: result.viewports.map(({ width, height, filters, anchors, navigationAnchor, printable }) => ({ width, height, filters: filters.length, anchors: anchors.map(({ id, reset, top }) => ({ id, reset, top })), navigationAnchor, printable })), errors: result.errors };
}
