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
    const widths = [160, 480, 960].filter((width) => width < image.w);
    for (const width of [...widths, image.w]) {
      const webp = width === image.w ? image.src : image.src.replace(/\.webp$/, `-${width}.webp`);
      let input = width === image.w ? original : await optional(path.join(out, webp));
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
    // Runtime portrait/thumb/hero URLs may refer to a 160px twin even when the
    // original is smaller; preserve any such pre-existing rendition as well.
    if (image.w <= 160) {
      const file = image.src.replace(/\.webp$/, '-160.webp');
      const data = await optional(path.join(out, file));
      if (data) await save(path.join(out, file.replace(/\.webp$/, '.avif')), await cached(hash(`avif-v1-${sharp.versions.sharp}-${hash(data)}`), 'avif', () => sharp(data).avif({ quality: 65, effort: 5, chromaSubsampling: '4:4:4' }).toBuffer()));
    }
  });
  return { originals: Object.keys(art).length, generated };
}
