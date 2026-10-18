#!/usr/bin/env node
// One browser at a time; raw reports are retained beside the compact table.
import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
const [label = 'after', origin = 'http://127.0.0.1:8080'] = process.argv.slice(2);
const dir = path.resolve('cache/performance', label);
await mkdir(dir, { recursive: true });
const pages = process.env.PAGES?.split(',') || ['index.html', 'hall.html', 'influence.html', 'atlas-map.html', 'compare/mahler-5-adagietto.html', 'composers/mahler.html', 'glossary.html'];
const rows = [];
for (const page of pages) for (const mode of process.env.MODES?.split(',') || ['mobile', 'desktop']) {
  const file = path.join(dir, `${page.replaceAll('/', '_')}.${mode}.json`);
  const args = ['lighthouse', new URL(page, `${origin}/`).href, '--only-categories=performance', '--output=json', `--output-path=${file}`, `--chrome-flags=--headless --no-sandbox --disable-dev-shm-usage ${process.env.CHROME_FLAGS || ''}`, '--quiet', ...(mode === 'desktop' ? ['--preset=desktop'] : []), ...(process.env.THROTTLING_METHOD ? [`--throttling-method=${process.env.THROTTLING_METHOD}`] : [])];
  console.log(`$ npx ${args.join(' ')}`);
  await new Promise((resolve, reject) => {
    const child = spawn('npx', args, { stdio: 'inherit' });
    child.on('error', reject);
    child.on('exit', (code) => code ? reject(new Error(`Lighthouse exited ${code}`)) : resolve());
  });
  const report = JSON.parse(await readFile(file, 'utf8')), a = report.audits;
  if (report.runtimeError) throw new Error(JSON.stringify(report.runtimeError));
  const network = a['network-requests'].details.items.filter((request) => /^https?:/.test(request.url));
  const bytes = (type) => network.filter((r) => r.resourceType === type).reduce((sum, r) => sum + r.transferSize, 0);
  const row = { page, mode, score: Math.round(report.categories.performance.score * 100), lcp: Math.round(a['largest-contentful-paint'].numericValue), cls: a['cumulative-layout-shift'].numericValue, tbt: Math.round(a['total-blocking-time'].numericValue), bytes: a['total-byte-weight'].numericValue, requests: network.length, js: bytes('Script'), css: bytes('Stylesheet'), fonts: bytes('Font'), images: bytes('Image'), renderBlocking: a['render-blocking-insight']?.metricSavings || a['render-blocking-resources']?.details?.overallSavingsMs || null };
  rows.push(row);
  console.log(JSON.stringify(row));
  await writeFile(path.join(dir, 'summary.json'), JSON.stringify(rows, null, 2));
}
console.table(rows);
