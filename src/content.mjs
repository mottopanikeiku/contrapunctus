import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { normalizeTitle } from '../tools/commons.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const C = path.join(ROOT, 'content');

async function importDir(dir) {
  let names = [];
  try { names = (await readdir(dir)).filter((f) => f.endsWith('.mjs')).sort(); } catch { return []; }
  const mods = await Promise.all(names.map((f) => import(pathToFileURL(path.join(dir, f)).href + `?t=${Date.now()}`)));
  return mods.map((m, i) => ({ ...m.default, _file: names[i] }));
}

export async function loadContent() {
  const eras = (await importDir(path.join(C, 'eras'))).sort((a, b) => a.order - b.order);
  const composers = (await importDir(path.join(C, 'composers'))).sort((a, b) => a.born.year - b.born.year || a.slug.localeCompare(b.slug));
  const pages = Object.fromEntries((await importDir(path.join(C, 'pages'))).map((p) => [p.slug, p]));
  const site = (await import(pathToFileURL(path.join(C, 'site.mjs')).href)).default;
  let art = {};
  try { art = JSON.parse(await readFile(path.join(C, 'art.json'), 'utf8')); } catch {}
  const listens = await importDir(path.join(C, 'listen'));
  return { eras, composers, pages, site, art, listens };
}

/** Every Commons title referenced anywhere in the content tree (keys named `file`). */
export function collectFiles(content) {
  const found = new Set();
  const walk = (v) => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') {
      for (const [k, x] of Object.entries(v)) {
        if (k === 'file' && typeof x === 'string') found.add(normalizeTitle(x));
        else if (k !== 'art') walk(x);
      }
    }
  };
  walk({ eras: content.eras, composers: content.composers, pages: content.pages, site: content.site });
  return found;
}

export function artId(title) {
  return normalizeTitle(title)
    .slice(5)
    .replace(/\.[a-z0-9]+$/i, '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}
