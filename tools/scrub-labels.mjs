// Removes research working labels (EXT, INFERENCE, MEAS) that agents sometimes leave at the start of prose.
// Usage: node tools/scrub-labels.mjs [--check] <files…>   (JSON files; --check exits 1 if any label is found)
import { readFile, writeFile } from 'node:fs/promises';

const check = process.argv.includes('--check');
const files = process.argv.slice(2).filter((f) => f !== '--check');
const LEAD = /(<b>\s*)?\b(EXT|INFERENCE|MEAS)\b(\s*<\/b>)?\s*[—–:-]?\s*/g;
let found = 0;
for (const f of files) {
  const raw = await readFile(f, 'utf8');
  let n = 0;
  const walk = (o) => (typeof o === 'string' ? o.replace(LEAD, () => (n++, '')).replace(/^\s+/, '').replace(/^(<p>)\s+/, '$1')
    : Array.isArray(o) ? o.map(walk) : o && typeof o === 'object' ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, walk(v)])) : o);
  const out = walk(JSON.parse(raw));
  if (!n) continue;
  found += n;
  console.log(`${f}: ${n} label${n > 1 ? 's' : ''}`);
  if (!check) await writeFile(f, JSON.stringify(out, null, 1) + '\n');
}
if (check && found) process.exitCode = 1;
