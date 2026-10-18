import { parse } from 'parse5';
const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const widths = (image) => [...[160, 480, 960].filter((width) => width < image.w), image.w];
const rendition = (image, width) => width === image.w ? image.src : image.src.replace(/\.webp$/, `-${width}.webp`);
function srcset(image, base, format, formats) {
  return widths(image).map((width) => {
    const file = rendition(image, width);
    const selected = format === 'avif' && formats && !formats[file] ? 'webp' : format;
    return `${base}${file.replace(/\.webp$/, `.${selected}`)} ${width}w`;
  }).join(', ');
}
const hasAvif = (image, formats) => !formats || widths(image).some((width) => formats[rendition(image, width)]);
function wrap(image, base, sizes, img, formats) {
  // AVIF-capable target browsers also decode WebP. A mixed candidate set keeps
  // the best format at each width without overserving or upscaling a winner.
  return `<picture style="display:contents">${hasAvif(image, formats) ? `<source type="image/avif" srcset="${srcset(image, base, 'avif', formats)}" sizes="${escape(sizes)}">` : ''}<source type="image/webp" srcset="${srcset(image, base, 'webp')}" sizes="${escape(sizes)}">${img}</picture>`;
}
export function picture(image, base, alt, { cls = '', sizes = '(max-width: 860px) 100vw, 50vw', eager = false, thumb = false } = {}) {
  const src = rendition(image, thumb ? widths(image)[0] : image.w);
  const img = `<img src="${base}${src}" srcset="${srcset(image, base, 'webp')}" sizes="${escape(sizes)}" width="${image.w}" height="${image.h}" alt="${escape(alt)}" decoding="async"${eager ? ' fetchpriority="high"' : ' loading="lazy"'}${cls ? ` class="${escape(cls)}"` : ''}>`;
  return wrap(image, base, sizes, img);
}
// Some independent page generators emit literal images instead of img().
// Upgrade those at publication without changing their source or CSS geometry.
export function pictureHTML(html, relative, art, formats) {
  const lookup = new Map();
  for (const image of Object.values(art)) {
    lookup.set(image.src, image);
    for (const width of [160, 480, 960]) lookup.set(image.src.replace(/\.webp$/, `-${width}.webp`), image);
  }
  const edits = [], doc = parse(html, { sourceCodeLocationInfo: true });
  const base = relative === '404.html' ? '/contrapunctus/' : '../'.repeat(relative.split('/').length - 1);
  function visit(node) {
    if (node.tagName === 'source' && node.attrs.some(({ name, value }) => name === 'type' && value === 'image/avif')) {
      const attribute = node.attrs.find(({ name }) => name === 'srcset' || name === 'data-srcset');
      if (attribute) {
        const first = attribute.value.trim().split(/\s+/)[0];
        const url = new URL(first.replace(/^\/contrapunctus\//, '/'), `https://build.invalid/${relative}`);
        const image = lookup.get(url.pathname.slice(1).replace(/\.avif$/, '.webp'));
        if (image) {
          const location = node.sourceCodeLocation;
          const value = hasAvif(image, formats)
            ? html.slice(location.startOffset, location.endOffset).replace(/\b(?:data-)?srcset="[^"]*"/, `${attribute.name}="${escape(srcset(image, base, 'avif', formats))}"`)
            : '';
          edits.push({ start: location.startOffset, end: location.endOffset, value });
        }
      }
    }
    if (node.tagName === 'img' && node.parentNode?.tagName !== 'picture') {
      const attributes = Object.fromEntries(node.attrs.map(({ name, value }) => [name, value]));
      if (attributes.src && !/^(?:[a-z]+:|\/\/)/i.test(attributes.src)) {
        const url = new URL(attributes.src.replace(/^\/contrapunctus\//, '/'), `https://build.invalid/${relative}`);
        const image = lookup.get(url.pathname.slice(1));
        if (image) {
          const location = node.sourceCodeLocation;
          let img = html.slice(location.startOffset, location.endOffset).replace(/\s(srcset|sizes)="[^"]*"/g, '');
          const sizes = attributes.sizes || (attributes.class?.split(/\s+/).includes('p-i') ? '2.1rem' : attributes.width ? `${attributes.width}px` : '100vw');
          let extra = ` srcset="${srcset(image, base, 'webp')}" sizes="${escape(sizes)}"`;
          if (!attributes.width) extra += ` width="${image.w}"`;
          if (!attributes.height) extra += ` height="${image.h}"`;
          if (!attributes.decoding) extra += ' decoding="async"';
          if (!attributes.loading && attributes.fetchpriority !== 'high') extra += ' loading="lazy"';
          img = img.replace(/\s*\/?>$/, `${extra}>`);
          edits.push({ start: location.startOffset, end: location.endOffset, value: wrap(image, base, sizes, img, formats) });
        }
      }
    }
    for (const child of node.childNodes || []) visit(child);
  }
  visit(doc);
  for (const { start, end, value } of edits.sort((a, b) => b.start - a.start)) html = html.slice(0, start) + value + html.slice(end);
  return html;
}
