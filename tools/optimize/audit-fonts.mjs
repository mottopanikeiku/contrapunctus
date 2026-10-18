import puppeteer from 'puppeteer-core';
import path from 'node:path';
import { writeFile } from 'node:fs/promises';
import { ROOT, OUT, files } from './cache.mjs';

const origin = process.argv[2] || 'http://127.0.0.1:8770';
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH, headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage', ...(process.env.CHROME_FLAGS || '').split(/\s+/).filter(Boolean)] });
const result = new Map();
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.setRequestInterception(true);
  page.on('request', (request) => ['image', 'font', 'media'].includes(request.resourceType()) ? request.abort() : request.continue());
  for (const filename of (await files(OUT)).filter((file) => file.endsWith('.html') && !file.endsWith('/404.html'))) {
    const relative = path.relative(OUT, filename);
    await page.goto(new URL(relative, `${origin}/`).href, { waitUntil: 'networkidle0' });
    const usage = await page.evaluate(() => {
      const groups = {};
      for (const element of document.body.querySelectorAll('*')) {
        if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(element.tagName) || ![...element.childNodes].some((node) => node.nodeType === 3 && node.textContent.trim())) continue;
        const style = getComputedStyle(element);
        const family = style.fontFamily.split(',')[0].replaceAll('"', '').replaceAll("'", '').trim();
        if (!['Cormorant Garamond', 'Cormorant SC', 'EB Garamond', 'Noto Music'].includes(family)) continue;
        const key = `${family}|${style.fontStyle}|${style.fontWeight}`;
        groups[key] ??= { selector: `${element.tagName.toLowerCase()}.${[...element.classList].join('.')}`, text: element.textContent.trim().slice(0, 100) };
      }
      return groups;
    });
    for (const [key, example] of Object.entries(usage)) if (!result.has(key)) result.set(key, { page: relative, ...example });
  }
  const rows = [...result].sort().map(([font, example]) => ({ font, ...example }));
  await writeFile(path.join(ROOT, 'cache/performance/font-weight-audit.json'), JSON.stringify(rows, null, 2));
  console.table(rows);
} finally { await browser.close(); }
