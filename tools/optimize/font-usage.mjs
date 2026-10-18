import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { parse } from 'parse5';
import { Window } from 'happy-dom';
import { cached, hash } from './cache.mjs';

// Resolve the actual CSS cascade, rather than assigning every page's alphabet
// to every face. JavaScript, external stylesheets and images never execute/load.
export async function fontUsage(html, relative, out, faces) {
  const tree = parse(html);
  const head = tree.childNodes.find((node) => node.nodeName === 'html').childNodes.find((node) => node.nodeName === 'head');
  const sheets = [];
  for (const node of head.childNodes) {
    if (node.nodeName !== 'link') continue;
    const attrs = Object.fromEntries(node.attrs.map(({ name, value }) => [name, value]));
    if (attrs.rel !== 'stylesheet') continue;
    const url = new URL(attrs.href, `https://build.invalid/${relative}`);
    if (url.origin !== 'https://build.invalid') throw new Error(`External font-cascade stylesheet: ${url}`);
    const filename = url.pathname.replace(/^\/contrapunctus\//, '/');
    sheets.push([attrs.href, await readFile(path.join(out, filename), 'utf8')]);
  }
  const stableHTML = html.replace(/<html\b[^>]*>/i, (tag) => tag.replace(/(data-[\w-]+=")[a-f\d]{12}(")/g, '$1$2')).replace(/\?v=[a-f\d]{12}/g, '');
  const key = hash(`font-usage-v1-${stableHTML}-${JSON.stringify(sheets.map(([, css]) => css))}-${JSON.stringify(faces)}`);
  return JSON.parse(await cached(key, 'json', async () => {
    const groups = new Map();
    let title;
    for (const width of [390, 1440]) {
      const window = new Window({ url: `https://build.invalid/${relative}`, width, height: 900, settings: { enableJavaScriptEvaluation: false, enableCSSFileLoading: false, enableImageFileLoading: false } });
      try {
        const doc = window.document;
        doc.write(html);
        doc.documentElement.classList.add('js');
        for (const link of [...doc.querySelectorAll('link[rel="stylesheet"]')]) {
          const style = doc.createElement('style');
          style.textContent = sheets.find(([href]) => href === link.getAttribute('href'))[1];
          link.replaceWith(style);
        }
        function walk(element) {
          if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(element.tagName) || element.hidden || element.tagName === 'DIALOG' && !element.open) return;
          const style = window.getComputedStyle(element);
          if (style.display === 'none') return;
          const family = style.fontFamily.split(',')[0].trim().replace(/^['"]|['"]$/g, '');
          const italic = /italic|oblique/.test(style.fontStyle) ? 'italic' : 'normal';
          const requested = style.fontWeight === 'bold' ? 700 : parseFloat(style.fontWeight) || 400;
          const candidates = faces.filter((face) => face.family === family && face.style === italic);
          const distance = (face) => Math.max(face.min - requested, requested - face.max, 0);
          candidates.sort((a, b) => distance(a) - distance(b));
          const face = candidates[0];
          const weight = face && Math.min(face.max, Math.max(face.min, requested));
          const id = face && `${face.id}-${weight}`;
          for (const node of element.childNodes) {
            if (node.nodeType === 1) {
              if (element.tagName !== 'DETAILS' || element.open || node.tagName === 'SUMMARY') walk(node);
            } else if (face && node.nodeType === 3 && node.textContent.trim()) {
              let text = node.textContent;
              if (/caps/.test(`${style.fontVariant} ${style.fontVariantCaps}`) || style.textTransform === 'uppercase') text += text.toUpperCase();
              else if (style.textTransform === 'lowercase') text += text.toLowerCase();
              else if (style.textTransform === 'capitalize') text += text.replace(/\p{L}+/gu, (word) => word[0].toUpperCase() + word.slice(1));
              let group = groups.get(id);
              if (!group) groups.set(id, group = { id: face.id, weight, points: new Set([32]) });
              for (const char of text) group.points.add(char.codePointAt(0));
              if (!title && element.closest('h1')) title = id;
            }
          }
        }
        walk(doc.body);
      } finally { await window.happyDOM.close(); }
    }
    return JSON.stringify({ title, groups: [...groups].map(([key, group]) => ({ key, id: group.id, weight: group.weight, points: [...group.points].sort((a, b) => a - b) })) });
  }));
}
