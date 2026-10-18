import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { transform as javascript } from 'esbuild';
import { transform as stylesheet, browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';
import { minify as htmlMinify } from 'html-minifier-terser';
import Beasties from 'beasties';
import { ROOT, OUT, files, hash, cached, save } from './cache.mjs';
import { optimizeFonts, fontFallbacks } from './fonts.mjs';
import { optimizeImages } from './images.mjs';
import { generateServiceWorker } from './sw.mjs';
import { pictureHTML } from './pictures.mjs';

const targets = browserslistToTargets(browserslist('last 2 years and not dead'));
const htmlOptions = {
  collapseWhitespace: true, conservativeCollapse: true, removeComments: true,
  removeRedundantAttributes: true, collapseBooleanAttributes: true,
  minifyJS: false, minifyCSS: false, processScripts: [],
  // ABC line boundaries, embedded JSON, and poem lineation are content, not
  // formatting. Do not let the HTML minifier rewrite any of them.
  ignoreCustomFragments: [
    /<script\b[^>]*type=["'](?:application\/(?:ld\+)?json|text\/vnd\.abc)["'][^>]*>[\s\S]*?<\/script>/gi,
    /<div class="(?:orig|tr)">[\s\S]*?<\/div>/g,
  ],
};
async function minifyAssets(out, source) {
  const versions = new Map();
  for (const file of await files(source)) {
    const relative = path.relative(source, file).split(path.sep).join('/');
    const input = await readFile(file);
    if (!/\.(css|js)$/.test(relative)) {
      await save(path.join(out, 'assets', relative), relative.endsWith('.json') ? JSON.stringify(JSON.parse(input)) : input);
      continue;
    }
    const css = relative.endsWith('.css');
    const key = hash(`assets-v1-${JSON.stringify(targets)}-${relative}-${hash(input)}`);
    const result = await cached(key, css ? 'css' : 'js', async () => {
      if (css) {
        const result = stylesheet({ filename: relative, code: Buffer.from(fontFallbacks(input.toString())), minify: true, targets, errorRecovery: false });
        if (result.warnings.length) throw new Error(`${relative}: ${JSON.stringify(result.warnings)}`);
        return result.code;
      }
      const result = await javascript(input.toString(), { minify: true, format: relative.startsWith('vendor/') ? undefined : 'esm', target: 'es2022', legalComments: 'eof', sourcefile: relative });
      if (result.warnings.length) throw new Error(`${relative}: ${JSON.stringify(result.warnings)}`);
      return result.code;
    });
    await save(path.join(out, 'assets', relative), result);
    versions.set(`assets/${relative}`, hash(result).slice(0, 12));
  }
  return versions;
}
function versionHTML(html, relative, versions, programmeVersion) {
  html = html.replace(/\b(href|src)="([^"]+)"/g, (match, attribute, value) => {
    if (/^(?:[a-z]+:|\/\/|#)/i.test(value)) return match;
    const url = new URL(value.replace(/^\/contrapunctus\//, '/'), `https://build.invalid/${relative}`);
    const revision = versions.get(url.pathname.slice(1));
    if (!revision) return match;
    return `${attribute}="${value.replace(/[?#].*$/, '')}?v=${revision}${url.hash}"`;
  });
  return html.replace(/<html\b([^>]*)>/, (_, attributes) => {
    for (const [file, revision] of versions) {
      if (!file.startsWith('assets/js/')) continue;
      const name = path.basename(file, '.js');
      attributes = attributes.replace(new RegExp(`\\sdata-${name}="[^"]*"`, 'g'), '');
      attributes += ` data-${name}="${revision}"`;
    }
    attributes = attributes.replace(/\sdata-prog="[^"]*"/g, '');
    return `<html${attributes} data-prog="${programmeVersion}">`;
  });
}
async function criticalCSS(html, file) {
  // These disconnected containers cover the masthead and the first viewport
  // at both tested widths; no viewport/runtime dependency is added to builds.
  html = html.replace(/<(header|section) class="(masthead|hero|c-hero)"/g, '<$1 data-beasties-container class="$2"');
  const processor = new Beasties({
    path: path.dirname(file), preload: 'media', pruneSource: false,
    reduceInlineStyles: false, mergeStylesheets: false, fonts: false,
    inlineThreshold: 0, minimumExternalSize: 0, keyframes: 'critical',
    noscriptFallback: true, logLevel: 'warn',
    allowRules: [/^:root$/, /^html$/, /^body/, /^\.reveal/, /^\.js \.reveal/],
  });
  const result = await processor.process(html);
  return result.replace(/<style>/g, '<style data-cp-critical>').replace(/\sdata-beasties-container(?:="")?/g, '');
}
export async function optimize({ out = OUT, source = path.join(ROOT, 'src/assets') } = {}) {
  const started = performance.now();
  const all = await files(out);
  const pages = all.filter((file) => file.endsWith('.html'));
  // Source text is scanned before JS minification can escape or drop glyphs.
  const fontFiles = [...all.filter((file) => /\.(?:html|json)$/.test(file)), ...(await files(source)).filter((file) => /\.(?:js|css)$/.test(file))];
  const fonts = await optimizeFonts(fontFiles, out);
  const art = JSON.parse(await readFile(path.join(ROOT, 'content/art.json'), 'utf8'));
  const imageResult = await optimizeImages(out);
  const artVersion = hash(JSON.stringify([art, imageResult.formats]));
  const versions = await minifyAssets(out, source);
  for (const file of all.filter((file) => file.endsWith('.json'))) {
    const original = await readFile(file, 'utf8');
    await save(file, JSON.stringify(JSON.parse(original)));
  }
  const programmeVersion = hash(await readFile(path.join(out, 'assets/listen/programme.json'))).slice(0, 12);
  for (const file of pages) {
    const relative = path.relative(out, file).split(path.sep).join('/');
    const base = relative === '404.html' ? '/contrapunctus/' : '../'.repeat(relative.split('/').length - 1);
    const html = versionHTML(await readFile(file, 'utf8'), relative, versions, programmeVersion);
    const head = fonts.head(base);
    const result = await cached(hash(`html-v2-${relative}-${artVersion}-${head}-${html}`), 'html', async () => {
      let result = pictureHTML(html, relative, art, imageResult.formats);
      if (relative === 'index.html' || /^composers\/(?!index\.html)[^/]+\.html$/.test(relative)) result = await criticalCSS(result, file);
      result = result.replace('<!--cp-fonts-->', head);
      return htmlMinify(result, htmlOptions);
    });
    await save(file, result);
  }
  const worker = await generateServiceWorker(out);
  console.log(`optimized ${pages.length} pages, ${versions.size} CSS/JS files, ${fonts.manifest.length} subset fonts (${fonts.manifest.reduce((sum, f) => sum + f.bytes, 0)} bytes), ${imageResult.avifPictures} AVIF picture sets (${imageResult.generated} new encodes); SW ${worker.precached} precached/${worker.entries} revisioned; ${((performance.now() - started) / 1000).toFixed(2)}s`);
  return { fonts: fonts.manifest, images: imageResult, worker };
}
