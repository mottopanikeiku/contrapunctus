// Real recordings, real router, no media substitutions. Run serially on the shared host.
import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { tours } from '../../src/guide-tours.mjs';

const [label = 'guide-acceptance', origin = 'https://127.0.0.1:8791'] = process.argv.slice(2);
if (!process.env.CHROME_PATH) throw new Error('Set CHROME_PATH to the matched native Chrome binary.');
const dir = path.resolve('cache/performance', label);
await mkdir(dir, { recursive: true });
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH, headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage', '--ignore-certificate-errors'] });
const report = { origin, viewports: [], checks: [], screenshots: [] };
const requested = process.env.TOURS?.split(',') ?? ['hall-views', 'compare-switching', 'influence-thread'];
try {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const context = await browser.createBrowserContext(), page = await context.newPage();
    await page.setViewport(viewport);
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    const cdp = await page.createCDPSession(); await cdp.send('Network.enable');
    const network = [], errors = [];
    cdp.on('Network.requestWillBeSent', ({ type, request }) => network.push({ type, url: request.url, phase: phase }));
    page.on('pageerror', (error) => errors.push(error.message));
    let phase = 'cold-guide';
    const evaluate = async (fn, ...args) => {
      const result = await cdp.send('Runtime.evaluate', { expression: `(${fn.toString()})(...${JSON.stringify(args)})`, awaitPromise: true, returnByValue: true });
      if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
      return result.result.value;
    };
    const shot = async (name) => {
      await evaluate(() => document.fonts.ready.then(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))));
      const file = `${name}.${viewport.width}x${viewport.height}.png`;
      await page.screenshot({ path: path.join(dir, file) }); report.screenshots.push(file);
    };
    const waitStep = (tour, i) => page.waitForFunction((title) => document.querySelector('#tour-title')?.textContent === title && !!document.querySelector('.tour-ring:not([hidden])') && !document.querySelector('.tour-do')?.disabled, { timeout: 30000 }, tour.steps[i].title);
    try {
      await page.goto(`${origin}/guide.html`, { waitUntil: 'networkidle0' });
      await page.waitForFunction(() => !!window.CP);
      await shot('guide');
      assert.equal(network.filter((r) => /\/tour\.(?:js|css)|\/guide-tours\.json/.test(r.url)).length, 0, 'Tour assets requested before starting');
      report.checks.push({ viewport, name: 'cold-guide-lazy-assets', requests: 0 });
      if (process.env.EXTRA === '1') {
        phase = 'first-hall-visit';
        await evaluate((url) => CP.navigate(url), `${origin}/hall.html`);
        await page.waitForSelector('.hall-hint:not([hidden])');
        await page.click('.hall-hint-close');
        assert.equal(await evaluate(() => localStorage.getItem('cp-hall-guide')), 'dismissed');
        await evaluate((url) => CP.navigate(url), `${origin}/guide.html`);
        await evaluate((url) => CP.navigate(url), `${origin}/hall.html`);
        assert.equal(await evaluate(() => document.querySelector('.hall-hint').hidden), true);
        assert.equal(network.filter((r) => /\/tour\.(?:js|css)|\/guide-tours\.json/.test(r.url)).length, 0);
        await page.click('.t-guide');
        await waitStep(tours.find((t) => t.id === 'hall-welcome'), 0);
        await page.keyboard.press('Escape');
        assert.equal(await page.$('.cp-tour'), null);
        report.checks.push({ viewport, name: 'first-visit-dismissal-and-direct-question-button', result: 'pass' });
      }
      for (const id of requested) {
        const tour = tours.find((t) => t.id === id); assert.ok(tour, id);
        phase = id;
        await evaluate((url) => window.CP.navigate(url), `${origin}/guide.html#${id}`);
        await page.click(`#${id} [data-tour]`);
        const observations = [];
        for (let i = 0; i < tour.steps.length; i++) {
          const step = tour.steps[i];
          await waitStep(tour, i);
          await shot(`${id}-${i + 1}`);
          const state = await evaluate((selector) => {
            const rect = (el) => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; };
            return { title: document.querySelector('#tour-title').textContent, note: document.querySelector('.tour-note').textContent, page: location.pathname + location.hash, target: rect(document.querySelector(selector)), card: rect(document.querySelector('.tour-card')), playing: CP.player.playing, track: CP.player.track?.id, time: CP.player.time, focus: document.activeElement.id, reducedMotion: getComputedStyle(document.querySelector('.tour-card')).animationName };
          }, step.selector);
          assert.equal(state.note, '', `${id} skipped a step`);
          assert.equal(state.reducedMotion, 'none');
          assert.ok(state.card.x >= 0 && state.card.y >= 0 && state.card.x + state.card.width <= viewport.width + 1, 'Card outside viewport');
          observations.push(state);
          if (id === 'hall-views' && i === 6) await evaluate(() => { window.__tourAudio = CP.player.audio; window.__tourTime = CP.player.time; });
          if (step.action) {
            await page.click('.tour-do');
            if (step.advance === 'next') await page.click('.tour-next');
          } else await page.click('.tour-next');
          if (id === 'compare-switching' && i === 1) await page.waitForFunction(() => CP.player.playing && CP.player.time > 0, { timeout: 60000 });
          if (id === 'compare-switching' && i === 3) {
            await page.waitForFunction(() => CP.player.playing && CP.player.track?.id === 'rachmaninoff-prelude-c-sharp-minor-victor-1928', { timeout: 60000 });
            const switched = await evaluate(() => ({ playing: CP.player.playing, track: CP.player.track.id, time: CP.player.time }));
            assert.ok(switched.time > 20 && switched.time < 80, 'Switch restarted rather than matching the phrase');
            report.checks.push({ viewport, name: '1919-to-1928-switch', ...switched });
          }
          if (id === 'hall-views' && i === 6) {
            await waitStep(tour, 7);
            const continuity = await evaluate(() => ({ playing: CP.player.playing, sameAudio: CP.player.audio === window.__tourAudio, before: window.__tourTime, after: CP.player.time }));
            assert.ok(continuity.playing && continuity.sameAudio && continuity.after >= continuity.before, 'Music stopped on tour navigation');
            report.checks.push({ viewport, name: 'music-through-navigation', ...continuity });
          }
        }
        await page.waitForSelector('.tour-complete');
        assert.equal(await evaluate(() => sessionStorage.getItem('cp-tour')), null);
        await page.click('.tour-next');
        assert.equal(await page.$('.cp-tour'), null);
        assert.equal(await page.$('link[data-cp-tour]'), null);
        report.viewports.push({ viewport, tour: id, steps: observations });
        console.log(`MEAS ${viewport.width}×${viewport.height}: ${id} completed ${observations.length}/${tour.steps.length} steps; no skips`);
      }
      if (process.env.EXTRA === '1') {
        phase = 'search-and-lifecycle';
        await evaluate((url) => CP.navigate(url), `${origin}/guide.html`);
        await page.keyboard.press('/');
        await page.type('.srch input', 'Change hands');
        await page.waitForSelector('.srch-results a[href$="guide.html#compare-switching"]');
        await page.click('.srch-results a[href$="guide.html#compare-switching"]');
        await page.waitForFunction(() => location.hash === '#compare-switching');
        assert.equal(await page.$('.cp-tour'), null);
        report.checks.push({ viewport, name: 'search-opens-anchored-lesson-without-starting', result: 'pass' });

        const sources = tours.find((t) => t.id === 'recording-sources');
        await page.click('#recording-sources [data-tour]');
        await waitStep(sources, 0); await page.click('.tour-do'); await waitStep(sources, 1);
        await page.reload({ waitUntil: 'networkidle0' }); await waitStep(sources, 1);
        assert.equal(await evaluate(() => JSON.parse(sessionStorage.getItem('cp-tour')).step), 1);
        await page.keyboard.press('ArrowLeft'); await waitStep(sources, 0);
        await page.keyboard.press('ArrowRight'); await waitStep(sources, 1);
        await page.keyboard.press('Tab');
        assert.ok(await evaluate(() => document.activeElement.closest('.tour-card') !== null));
        await evaluate((url) => CP.navigate(url), `${origin}/guide.html`);
        await page.waitForFunction(() => document.querySelector('.tour-next')?.textContent === 'Resume step →');
        assert.equal(await page.$$eval('.cp-tour', (items) => items.length), 1);
        await page.click('.tour-next'); await waitStep(sources, 1);
        await page.keyboard.press('Escape');
        assert.equal(await evaluate(() => sessionStorage.getItem('cp-tour')), null);
        assert.equal(await page.$('link[data-cp-tour]'), null);
        report.checks.push({ viewport, name: 'reload-back-next-focus-unmount-resume-escape', result: 'pass' });

        await evaluate((url) => CP.navigate(url), `${origin}/guide.html`);
        await page.click('#hall-views [data-tour]');
        const views = tours.find((t) => t.id === 'hall-views');
        await waitStep(views, 0); await page.click('.tour-do'); await waitStep(views, 1);
        await evaluate(() => document.querySelector('.views [data-view="notes"]').remove());
        const start = Date.now();
        await page.click('.tour-do'); await waitStep(views, 3);
        const note = await evaluate(() => document.querySelector('.tour-note').textContent);
        assert.match(note, /Skipped.*Notes/);
        assert.ok(Date.now() - start < 10000, 'Missing selector wait was not bounded');
        await shot('missing-selector-note');
        await page.keyboard.press('Escape');
        report.checks.push({ viewport, name: 'missing-selector-skips-with-note', elapsedMs: Date.now() - start, note });
        console.log(`MEAS ${viewport.width}×${viewport.height}: search, first visit, keyboard, reload, unmount/resume and missing-selector checks passed`);
      }
      assert.deepEqual(errors, []);
      await writeFile(path.join(dir, `network.${viewport.width}x${viewport.height}.json`), JSON.stringify(network, null, 2));
      const lazy = network.filter((r) => /\/tour\.(?:js|css)|\/guide-tours\.json/.test(r.url));
      assert.ok(lazy.some((r) => /\/tour\.js/.test(r.url)) && lazy.some((r) => /\/tour\.css/.test(r.url)));
      report.checks.push({ viewport, name: 'lazy-network-after-start', requests: lazy });
    } catch (error) {
      report.failure = await evaluate(() => ({ url: location.href, title: document.querySelector('#tour-title')?.textContent, note: document.querySelector('.tour-note')?.textContent, error: document.querySelector('#cp-tour-error')?.textContent, session: sessionStorage.getItem('cp-tour') }));
      report.failure.errors = errors;
      await shot('failure');
      throw error;
    } finally {
      await writeFile(path.join(dir, `network.${viewport.width}x${viewport.height}.json`), JSON.stringify(network, null, 2));
      await context.close();
    }
  }
  report.result = 'pass';
} catch (error) { report.result = 'fail'; report.error = error.stack; throw error; }
finally { await writeFile(path.join(dir, 'acceptance.json'), JSON.stringify(report, null, 2)); await browser.close(); }
console.log(`MEAS guide acceptance: ${report.result}; evidence ${dir}`);
