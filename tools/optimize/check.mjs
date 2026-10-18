import path from 'node:path';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { parse } from 'parse5';
import * as fontkit from 'fontkit';
import { OUT, ROOT, files, hash } from './cache.mjs';

const all = await files(OUT), paths = new Set(all);
const errors = [], referencedAvif = new Set(), modules = new Set();
let pages = 0, pictures = 0, images = 0, sourcedImages = 0, jsonScripts = 0, jsonFiles = 0;
const check = (condition, message) => { if (!condition) errors.push(message); };
function localAsset(value, relative) {
  if (!value || /^(?:[a-z]+:|\/\/|#)/i.test(value)) return;
  const url = new URL(value.replace(/^\/contrapunctus\//, '/'), `https://build.invalid/${relative}`);
  if (!url.pathname.startsWith('/assets/')) return;
  const file = path.join(OUT, decodeURIComponent(url.pathname));
  check(paths.has(file), `${relative}: missing ${value}`);
  if (file.endsWith('.avif')) referencedAvif.add(file);
}
const nodeText = (node) => node.value ?? (node.childNodes || []).map(nodeText).join('');
for (const file of all) {
  const relative = path.relative(OUT, file).split(path.sep).join('/');
  if (file.endsWith('.json')) {
    const text = await readFile(file, 'utf8');
    try { check(text === JSON.stringify(JSON.parse(text)), `${relative}: JSON is not compact`); jsonFiles++; }
    catch (error) { errors.push(`${relative}: ${error.message}`); }
  }
  if (!file.endsWith('.html')) continue;
  pages++;
  const html = await readFile(file, 'utf8'), doc = parse(html);
  check(!/fonts\.(?:googleapis|gstatic)\.com/.test(html), `${relative}: third-party font URL`);
  let high = 0, critical = '', deferredStyles = false, dark = false, decorativeGlyph = false;
  function visit(node) {
    const attrs = Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value]));
    if (node.tagName === 'body') {
      for (const name of (attrs['data-modules'] || '').split(/\s+/).filter(Boolean)) modules.add(name);
      dark = (attrs.class || '').split(/\s+/).includes('is-over-dark');
    }
    if (node.tagName === 'style' && 'data-cp-critical' in attrs) critical += (node.childNodes || []).map((child) => child.value || '').join('');
    if (attrs.class === 'bg-glyph') decorativeGlyph = true;
    if (relative === 'hall.html' && ['now-composer', 'now-work', 'now-meta'].includes(attrs.class)) check(nodeText(node).trim(), `${relative}: initial ${attrs.class} is empty`);
    if (node.tagName === 'link' && attrs.rel === 'stylesheet' && ['print', 'not x'].includes(attrs.media)) deferredStyles = true;
    if (node.tagName === 'picture') pictures++;
    if (node.tagName === 'img') {
      images++;
      // Empty lightbox/player/backdrop slots have CSS-sized boxes and no
      // intrinsic image until the user or player selects a source.
      if (attrs.src || attrs['data-src']) {
        sourcedImages++;
        check(Number(attrs.width) > 0 && Number(attrs.height) > 0, `${relative}: image dimensions missing: ${attrs.src || attrs['data-src']}`);
      }
      check(attrs.decoding === 'async', `${relative}: image decoding is not async: ${attrs.src}`);
      if (attrs.fetchpriority === 'high') high++;
      else check(attrs.loading === 'lazy', `${relative}: non-priority image is not lazy: ${attrs.src}`);
    }
    if (node.tagName === 'script' && /application\/(?:ld\+)?json/.test(attrs.type || '')) {
      try { JSON.parse((node.childNodes || []).map((child) => child.value || '').join('')); jsonScripts++; }
      catch (error) { errors.push(`${relative}: embedded JSON: ${error.message}`); }
    }
    if (['img', 'script', 'source'].includes(node.tagName)) localAsset(attrs.src, relative);
    if (node.tagName === 'link') localAsset(attrs.href, relative);
    for (const value of [attrs.srcset, attrs['data-srcset']].filter(Boolean)) {
      for (const candidate of value.split(',')) localAsset(candidate.trim().split(/\s+/)[0], relative);
    }
    for (const child of node.childNodes || []) visit(child);
  }
  visit(doc);
  check(high <= 1, `${relative}: ${high} high-priority images`);
  const needsCritical = ['index.html', 'influence.html', 'atlas-map.html', 'glossary.html'].includes(relative) || relative.startsWith('compare/') || /^composers\/(?!index\.html)[^/]+\.html$/.test(relative);
  if (needsCritical) {
    check(deferredStyles, `${relative}: critical extraction left every stylesheet render-blocking`);
    check(critical.includes('.masthead .wrap'), `${relative}: critical CSS lost the masthead ancestor`);
    check(/\.skip[{:]/.test(critical), `${relative}: critical CSS lost the skip link`);
    if (dark) check(critical.includes('.is-over-dark .masthead'), `${relative}: critical CSS lost the dark masthead`);
  }
  if (decorativeGlyph) {
    check(critical.includes(".page-hero span.bg-glyph{font-family:'CP Page Glyph'"), `${relative}: decorative glyph face is missing or loses to the external font shorthand`);
    check(/@font-face\{font-family:'CP Page Glyph';[^}]*font-display:block/.test(critical) && html.includes('rel="preload" href="data:font/woff2'), `${relative}: decorative glyph can paint with a mismatched fallback`);
  }
  if (relative === 'index.html') {
    check(/\.hero \.hero-caption\{[^}]*width:19rem/.test(critical), `${relative}: slideshow caption width is not reserved in critical CSS`);
    for (const face of ['Caps', 'Display', 'Text']) check(critical.includes(`font-family:'CP Entrance ${face}'`), `${relative}: exact entrance ${face} face is missing`);
  }
  if (relative === 'glossary.html') check(critical.includes('content-visibility:auto'), `${relative}: glossary containment is missing from critical CSS`);
}
for (const file of all.filter((file) => file.endsWith('.avif'))) check(referencedAvif.has(file), `Unreferenced AVIF: ${path.relative(OUT, file)}`);
for (const name of modules) check(paths.has(path.join(OUT, `assets/js/${name}.js`)), `Page module missing: ${name}`);
const manifest = JSON.parse(await readFile(path.join(OUT, 'assets/fonts/manifest.json'), 'utf8'));
const fontNames = new Set(manifest.map((face) => face.name));
for (const file of all.filter((file) => file.endsWith('.woff2'))) check(fontNames.has(path.basename(file)), `Unmanifested font: ${file}`);
const music = new Set();
for (const face of manifest) {
  const data = await readFile(path.join(OUT, 'assets/fonts', face.name));
  const font = fontkit.create(data), axis = font.variationAxes.wght;
  check(data.length === face.bytes && face.name.includes(hash(data).slice(0, 16)), `Font revision mismatch: ${face.name}`);
  check(!face.name.includes('.page.'), `Per-page font survived: ${face.name}`);
  check(!axis, `Static face retains a weight axis: ${face.name}`);
  if (face.family === 'Noto Music') for (const point of font.characterSet) music.add(point);
}
for (const char of '♯♭♮𝄞') check(music.has(char.codePointAt(0)), `Missing musical glyph: ${char}`);
const result = { pages, pictures, images, sourcedImages, dynamicImageSlots: images - sourcedImages, jsonScripts, jsonFiles, pageModules: [...modules].sort(), fonts: manifest.length, avifFiles: referencedAvif.size, errors };
await mkdir(path.join(ROOT, 'cache/performance'), { recursive: true });
await writeFile(path.join(ROOT, 'cache/performance/static-checks.json'), JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
