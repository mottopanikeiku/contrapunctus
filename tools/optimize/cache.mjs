import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
export const ROOT = path.resolve(import.meta.dirname, '../..');
export const OUT = path.join(ROOT, 'docs');
export const CACHE = path.join(ROOT, 'cache/optimize');
export const hash = (data) => createHash('sha256').update(data).digest('hex');
export async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map((e) => e.isDirectory() ? files(path.join(dir, e.name)) : path.join(dir, e.name)));
  return nested.flat().sort();
}
export async function optional(file) {
  try { return await readFile(file); } catch (e) { if (e.code === 'ENOENT') return null; throw e; }
}
export async function save(file, data) {
  const bytes = Buffer.isBuffer(data) ? data : Buffer.from(data);
  const previous = await optional(file);
  if (previous?.equals(bytes)) return;
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, bytes);
}
export async function cached(key, extension, produce) {
  const file = path.join(CACHE, `${key}.${extension}`);
  let data = await optional(file);
  if (!data) { data = Buffer.from(await produce()); await save(file, data); }
  return data;
}
// Bound memory/AV1 worker pressure on the shared build host.
export async function eachLimit(items, limit, work) {
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) { const i = next++; await work(items[i], i); }
  }));
}
