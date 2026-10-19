// Local GitHub Pages-like preview for reproducible transfer accounting (gzip, max-age=600).
// Usage: node tools/perf-preview.mjs [port] [root] [--http2 --key local-key.pem --cert local-cert.pem]
import { createServer } from 'node:http';
import { createSecureServer } from 'node:http2';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { gzipSync } from 'node:zlib';
import { parseArgs } from 'node:util';
const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { http2: { type: 'boolean', default: false }, key: { type: 'string' }, cert: { type: 'string' } },
});
const root = resolve(positionals[1] ?? 'docs'), port = Number(positionals[0] ?? 8768);
if (values.http2 && (!values.key || !values.cert)) throw new Error('--http2 requires --key and --cert for a local test certificate.');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.avif': 'image/avif', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg' };
const cache = new Map();
async function serve(req, res) {
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
    // Byte ranges for uncompressed files (audio seeking), as GitHub Pages serves them.
    const range = !compressed && /^bytes=(\d*)-(\d*)$/.exec(req.headers.range ?? '');
    if (range && (range[1] || range[2])) {
      const size = body.length;
      const start = range[1] ? Number(range[1]) : Math.max(0, size - Number(range[2]));
      const end = range[1] && range[2] ? Math.min(Number(range[2]), size - 1) : size - 1;
      if (start > end || start >= size) { res.writeHead(416, { 'Content-Range': `bytes */${size}` }).end(); return; }
      res.writeHead(206, { 'Content-Type': types[ext] ?? 'application/octet-stream', 'Content-Length': end - start + 1, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Accept-Ranges': 'bytes', 'Cache-Control': 'max-age=600' });
      res.end(req.method === 'HEAD' ? undefined : body.subarray(start, end + 1));
      return;
    }
    res.writeHead(200, { 'Content-Type': types[ext] ?? 'application/octet-stream', 'Content-Length': body.length, 'Cache-Control': 'max-age=600', 'Vary': 'Accept-Encoding', ...(compressed ? { 'Content-Encoding': 'gzip' } : { 'Accept-Ranges': 'bytes' }) });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(404).end('Not found'); }
}
const server = values.http2
  ? createSecureServer({ key: await readFile(values.key), cert: await readFile(values.cert), allowHTTP1: true }, serve)
  : createServer(serve);
server.listen(port, '127.0.0.1', () => console.log(`Preview: ${values.http2 ? 'https' : 'http'}://127.0.0.1:${port}/`));
