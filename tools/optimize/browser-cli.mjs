import puppeteer from 'puppeteer-core';
import { capture, compareScreenshots } from './browser-checks.mjs';
import { checkNavigation } from './navigation-checks.mjs';
import { checkReading } from './reading-checks.mjs';

const [operation, label, origin] = process.argv.slice(2);
if (operation === 'diff') {
  console.table(await compareScreenshots(label || 'before', origin || 'after'));
} else {
  if (!['capture', 'offline', 'reading'].includes(operation) || !label || !origin || !process.env.CHROME_PATH) {
    throw new Error('Use CHROME_PATH=/path/to/chrome node tools/optimize/browser-cli.mjs capture|offline|reading LABEL ORIGIN, or browser-cli.mjs diff BEFORE_LABEL AFTER_LABEL');
  }
  const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH, headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage', ...(process.env.CHROME_FLAGS || '').split(/\s+/).filter(Boolean)] });
  try {
    const result = operation === 'capture' ? await capture(browser, origin, label) : operation === 'reading' ? await checkReading(browser, origin, label) : await checkNavigation(browser, origin, label);
    console.log(JSON.stringify(result, null, 2));
  } finally { await browser.close(); }
}
