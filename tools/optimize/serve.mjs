#!/usr/bin/env node
// Local GitHub Pages-like preview: gzip, a ten-minute HTTP cache, no Brotli.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
const root = path.resolve(process.argv[2] || 'docs');
const port = Number(process.argv[3] || 8768);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2', '.png': 'image/png', '.txt': 'text/plain' };
const encoded = new Map();
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let file = path.resolve(root, `.${decodeURIComponent(url.pathname)}`);
    if (!file.startsWith(`${root}/`) && file !== root) { res.writeHead(403).end(); return; }
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const info = await stat(file), ext = path.extname(file);
    let item = encoded.get(file);
    if (!item || item.mtime !== info.mtimeMs) {
      const data = await readFile(file);
      item = { mtime: info.mtimeMs, data, gzip: /\.(html|js|css|json|svg|txt|csv)$/.test(file) ? gzipSync(data) : null };
      encoded.set(file, item);
    }
    const gzip = item.gzip && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
    const body = gzip ? item.gzip : item.data;
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream', 'Content-Length': body.length, 'Cache-Control': 'max-age=600', 'Vary': 'Accept-Encoding', ...(gzip ? { 'Content-Encoding': 'gzip' } : {}) });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch (error) { res.writeHead(error.code === 'ENOENT' ? 404 : 500).end(); }
}).listen(port, '127.0.0.1', () => console.log(`Previewing ${root} at http://127.0.0.1:${port}`));
