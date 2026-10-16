#!/usr/bin/env node
// Static generator v3: content/*.mjs → docs/*.html. Page modules live in src/pages/.
import { writeFile, mkdir, readdir, unlink, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { OUT, warnings, searchIndex, fold } from './lib.mjs';

const written = new Set();
async function out(rel, html) {
  written.add(rel);
  const file = path.join(OUT, rel);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
}

// Page modules, in build order. Each exports build(out) (or a named builder).
const modules = ['home', 'listen', 'composers', 'periods', 'explore', 'learn', 'returnlab', 'about'];
for (const m of modules) {
  const file = path.join(import.meta.dirname, 'pages', `${m}.mjs`);
  if (!existsSync(file)) { warnings.push(`page module missing: src/pages/${m}.mjs`); continue; }
  const mod = await import(pathToFileURL(file).href);
  const fn = mod.build ?? Object.values(mod).find((v) => typeof v === 'function' && /^build/.test(v.name));
  await fn(out);
}

// Search index
await writeFile(path.join(OUT, 'assets/data/search.json'), JSON.stringify(searchIndex.map((e) => ({ ...e, k: fold(`${e.title} ${e.sub ?? ''} ${e.terms ?? ''}`) })).map(({ terms, ...e }) => e)));

// Remove generated HTML that no module wrote this time (never touches assets/).
async function prune(dir) {
  for (const f of await readdir(dir)) {
    const full = path.join(dir, f);
    const rel = path.relative(OUT, full);
    if (rel.startsWith('assets')) continue;
    if ((await stat(full)).isDirectory()) { await prune(full); continue; }
    if (f.endsWith('.html') && !written.has(rel)) await unlink(full);
  }
}
await prune(OUT);

console.log(`built ${written.size} pages`);
if (warnings.length) console.log(`\n${warnings.length} warnings:\n  ${[...new Set(warnings)].slice(0, 60).join('\n  ')}`);
