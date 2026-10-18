#!/usr/bin/env node
// Cold HTTP/2 load diagnostics alongside measure.mjs. Same applied presets;
// PerformanceObserver sources explain CLS, and optional traces attribute TBT.
import puppeteer from 'puppeteer-core';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [label, origin] = process.argv.slice(2);
if (!label || !origin || !process.env.CHROME_PATH) throw new Error('Use CHROME_PATH=… node tools/optimize/diagnose.mjs LABEL ORIGIN');
const dir = path.resolve('cache/performance', label);
await mkdir(dir, { recursive: true });
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH, headless: true, ignoreDefaultArgs: ['--hide-scrollbars'], args: ['--no-sandbox', '--disable-dev-shm-usage', ...(process.env.CHROME_FLAGS || '').split(/\s+/).filter(Boolean)] });
const rows = [];
try {
  for (const name of process.env.PAGES?.split(',') || ['index.html', 'hall.html', 'glossary.html']) {
    for (const mode of process.env.MODES?.split(',') || ['mobile', 'desktop']) {
      const context = await browser.createBrowserContext();
      try {
        const page = await context.newPage(), mobile = mode === 'mobile';
        await page.setViewport(mobile ? { width: 412, height: 823, deviceScaleFactor: 1.75, isMobile: true, hasTouch: true } : { width: 1350, height: 940, deviceScaleFactor: 1 });
        const cdp = await page.createCDPSession();
        await cdp.send('Network.enable');
        await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
        await cdp.send('Network.setBypassServiceWorker', { bypass: true });
        await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: mobile ? 562.5 : 0, downloadThroughput: mobile ? 1474.56 * 1024 / 8 : -1, uploadThroughput: mobile ? 675 * 1024 / 8 : -1 });
        await cdp.send('Emulation.setCPUThrottlingRate', { rate: mobile ? 4 : 1 });
        const errors = [], protocols = new Set();
        page.on('pageerror', (error) => errors.push(error.message));
        cdp.on('Network.responseReceived', ({ response }) => { if (response.url.startsWith(origin)) protocols.add(response.protocol); });
        await page.evaluateOnNewDocument(() => {
          const selector = (node) => {
            if (!node) return null;
            if (node.nodeType !== 1) return node.nodeName;
            return node.id ? `#${node.id}` : `${node.tagName.toLowerCase()}${[...node.classList].map((s) => `.${s}`).join('')}`;
          };
          const rect = (r) => ({ x: r.x, y: r.y, width: r.width, height: r.height });
          window.loadEvidence = { shifts: [], longTasks: [] };
          new PerformanceObserver((list) => {
            for (const e of list.getEntries()) window.loadEvidence.shifts.push({ time: e.startTime, value: e.value, hadRecentInput: e.hadRecentInput, sources: e.sources.map((s) => ({ node: selector(s.node), parent: selector(s.node?.parentElement), text: s.node?.textContent?.trim().slice(0, 180), previous: rect(s.previousRect), current: rect(s.currentRect) })) });
          }).observe({ type: 'layout-shift', buffered: true });
          new PerformanceObserver((list) => {
            for (const e of list.getEntries()) window.loadEvidence.longTasks.push({ time: e.startTime, duration: e.duration, attribution: e.attribution.map((a) => a.toJSON()) });
          }).observe({ type: 'longtask', buffered: true });
        });
        const stem = `${name.replaceAll('/', '_')}.${mode}`;
        if (process.env.TRACE === '1') await page.tracing.start({ path: path.join(dir, `${stem}.trace.json`), categories: ['devtools.timeline', 'blink.user_timing', 'disabled-by-default-devtools.timeline', 'v8.execute'] });
        await page.goto(new URL(name, `${origin}/`).href, { waitUntil: 'networkidle0', timeout: 90000 });
        await page.evaluate(async () => { await document.fonts.ready; await new Promise((resolve) => setTimeout(resolve, 12000 - Math.min(performance.now(), 11500))); });
        if (process.env.TRACE === '1') await page.tracing.stop();
        const evidence = await page.evaluate(() => {
          let max = 0, sum = 0, first = 0, last = 0;
          for (const shift of window.loadEvidence.shifts.filter((s) => !s.hadRecentInput)) {
            if (shift.time - last > 1000 || shift.time - first > 5000) { sum = 0; first = shift.time; }
            sum += shift.value; max = Math.max(max, sum); last = shift.time;
          }
          return { ...window.loadEvidence, cls: max, resources: performance.getEntriesByType('resource').map((r) => ({ name: r.name, start: r.startTime, end: r.responseEnd, type: r.initiatorType })), domElements: document.querySelectorAll('*').length };
        });
        await writeFile(path.join(dir, `${stem}.json`), JSON.stringify({ name, mode, protocols: [...protocols], errors, ...evidence }, null, 2));
        const row = { name, mode, cls: evidence.cls, longTasks: evidence.longTasks.length, maxTask: Math.max(0, ...evidence.longTasks.map((t) => t.duration)), protocols: [...protocols], errors };
        rows.push(row); console.log(JSON.stringify(row));
        await writeFile(path.join(dir, 'summary.json'), JSON.stringify(rows, null, 2));
      } finally { await context.close(); }
    }
  }
} finally { await browser.close(); }
