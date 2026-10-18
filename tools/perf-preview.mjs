// Local GitHub Pages-like preview for reproducible transfer accounting (gzip, max-age=600).
// Usage: node tools/perf-preview.mjs [port] [root]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { gzipSync } from 'node:zlib';
const root = resolve(process.argv[3] ?? 'docs');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.avif': 'image/avif', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg' };
const cache = new Map();
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + pathname + (pathname.endsWith('/') ? 'index.html' : ''));
    if (!file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    const info = await stat(file), ext = extname(file);
    let entry = cache.get(file);
    if (!entry || entry.mtime !== info.mtimeMs) {
      const raw = await readFile(file);
      entry = { mtime: info.mtimeMs, raw, gzip: /\.(?:html|js|css|json|svg)$/.test(file) ? gzipSync(raw) : null };
      cache.set(file, entry);
    }
    const compressed = entry.gzip && /\bgzip\b/.test(req.headers['accept-encoding'] ?? '');
    const body = compressed ? entry.gzip : entry.raw;
    res.writeHead(200, { 'Content-Type': types[ext] ?? 'application/octet-stream', 'Content-Length': body.length, 'Cache-Control': 'max-age=600', 'Vary': 'Accept-Encoding', ...(compressed ? { 'Content-Encoding': 'gzip' } : {}) });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(Number(process.argv[2] ?? 8768), '127.0.0.1', () => console.log(`Preview: http://127.0.0.1:${process.argv[2] ?? 8768}/`));
