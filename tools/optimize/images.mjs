import path from 'node:path';
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';
import { ROOT, OUT, cached, eachLimit, hash, optional, save } from './cache.mjs';

// Retain the reviewed WebP pixels. Never recompress an existing rendition.
// AVIF uses 4:4:4 to avoid introducing chroma fringes around fine painting detail.
export async function optimizeImages(out = OUT) {
  sharp.concurrency(1);
  const art = JSON.parse(await readFile(path.join(ROOT, 'content/art.json'), 'utf8'));
  let generated = 0;
  await eachLimit([...new Map(Object.values(art).map((image) => [image.src, image])).values()], 2, async (image) => {
    const original = await readFile(path.join(out, image.src));
    const digest = hash(original);
    // Old art fetches also emitted e.g. -480.webp for a 300px original (no
    // upscaling). Programme URLs can reference those names: twin them too.
    const renditions = [160, 480, 960].map((width) => ({ width, webp: image.src.replace(/\.webp$/, `-${width}.webp`) }));
    renditions.push({ width: image.w, webp: image.src });
    for (const { width, webp } of renditions) {
      let input = webp === image.src ? original : await optional(path.join(out, webp));
      if (!input && width >= image.w) continue;
      if (!input) {
        input = await cached(hash(`webp-v1-${sharp.versions.sharp}-${digest}-${width}`), 'webp', () => sharp(original).resize({ width, withoutEnlargement: true }).webp({ quality: 84, effort: 5 }).toBuffer());
        await save(path.join(out, webp), input);
      }
      const avif = webp.replace(/\.webp$/, '.avif');
      const result = await cached(hash(`avif-v1-${sharp.versions.sharp}-${hash(input)}`), 'avif', async () => {
        generated++;
        return sharp(input).avif({ quality: 65, effort: 5, chromaSubsampling: '4:4:4' }).toBuffer();
      });
      await save(path.join(out, avif), result);
    }
  });
  return { originals: Object.keys(art).length, generated };
}
