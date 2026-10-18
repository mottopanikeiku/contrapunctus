import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { transform } from 'esbuild';
import { OUT, files, hash, save } from './cache.mjs';
export async function generateServiceWorker(out = OUT) {
  const paths = (await files(path.join(out, 'assets'))).filter((file) => /\.(css|js|woff2)$/.test(file) || file === path.join(out, 'assets/listen/programme.json'));
  const precache = [];
  paths.push(path.join(out, 'index.html'), path.join(out, 'hall.html'));
  const core = /^(?:index\.html|hall\.html|assets\/listen\/programme\.json|assets\/js\/(?:app|player|site|room)\.js|assets\/css\/(?:style|shared|room|fonts)\.css)$/;
  for (const file of paths) {
    const url = path.relative(out, file).split(path.sep).join('/');
    const font = url.startsWith('assets/fonts/') && url.includes('.core.');
    precache.push({ url, revision: hash(await readFile(file)), precache: core.test(url) || font });
  }
  const template = await readFile(new URL('./service-worker.js', import.meta.url), 'utf8');
  const build = hash(JSON.stringify(precache) + template).slice(0, 20);
  const source = `const BUILD=${JSON.stringify(build)},PRECACHE=${JSON.stringify(precache)};\n${template}`;
  const result = await transform(source, { minify: true, target: 'es2022', legalComments: 'none' });
  await save(path.join(out, 'sw.js'), result.code);
  return { build, entries: precache.length, precached: precache.filter((entry) => entry.precache).length };
}
