import path from 'node:path';
import { readFile, unlink } from 'node:fs/promises';
import sharp from 'sharp';
import { ROOT, OUT, CACHE, cached, eachLimit, hash, optional, save } from './cache.mjs';

// Keep the reviewed WebP pixels unless a complete responsive AVIF set is both
// smaller and passes a conservative 40 dB PSNR screen. A partial AVIF srcset
// can force a huge image onto a thumbnail, so formats are chosen per picture.
export async function optimizeImages(out = OUT) {
  sharp.concurrency(1);
  const art = JSON.parse(await readFile(path.join(ROOT, 'content/art.json'), 'utf8'));
  let generated = 0;
  const report = [];
  await eachLimit([...new Map(Object.values(art).map((image) => [image.src, image])).values()], 2, async (image) => {
    const original = await readFile(path.join(out, image.src));
    const digest = hash(original), candidates = [];
    for (const width of [...[160, 480, 960].filter((width) => width < image.w), image.w]) {
      const webp = width === image.w ? image.src : image.src.replace(/\.webp$/, `-${width}.webp`);
      let input = webp === image.src ? original : await optional(path.join(out, webp));
      if (!input) {
        input = await cached(hash(`webp-v1-${sharp.versions.sharp}-${digest}-${width}`), 'webp', () => sharp(original).resize({ width, withoutEnlargement: true }).webp({ quality: 84, effort: 5 }).toBuffer());
        await save(path.join(out, webp), input);
      }
      const encoded = await cached(hash(`avif-v1-${sharp.versions.sharp}-${hash(input)}`), 'avif', async () => {
        generated++;
        return sharp(input).avif({ quality: 65, effort: 5, chromaSubsampling: '4:4:4' }).toBuffer();
      });
      let acceptable = false, mse = null;
      if (encoded.length < input.length) {
        const quality = JSON.parse((await cached(hash(`avif-quality-v2-${hash(input)}-${hash(encoded)}`), 'json', async () => {
          const a = await sharp(input).ensureAlpha().raw().toBuffer();
          const b = await sharp(encoded).ensureAlpha().raw().toBuffer();
          if (a.length !== b.length) throw new Error(`AVIF dimensions changed: ${webp}`);
          let error = 0, alphaEqual = true;
          for (let i = 0; i < a.length; i += 4) {
            for (let c = 0; c < 3; c++) error += (a[i + c] - b[i + c]) ** 2;
            if (a[i + 3] !== b[i + 3]) alphaEqual = false;
          }
          return JSON.stringify({ mse: error / (a.length * 0.75), alphaEqual });
        })).toString());
        mse = quality.mse;
        acceptable = quality.alphaEqual && mse <= 255 ** 2 / 10000;
      }
      candidates.push({ webp, encoded, acceptable, mse, webpBytes: input.length });
    }
    const useAvif = candidates.some((candidate) => candidate.acceptable);
    const published = new Set();
    for (const candidate of candidates) {
      if (!candidate.acceptable) continue;
      const avif = candidate.webp.replace(/\.webp$/, '.avif');
      await save(path.join(out, avif), candidate.encoded);
      published.add(avif);
    }
    // Only referenced picture sources enter docs/. Rejected experiments stay
    // in the hash cache, not in the shipped site or version control.
    for (const webp of [image.src, ...[160, 480, 960].map((width) => image.src.replace(/\.webp$/, `-${width}.webp`))]) {
      const avif = webp.replace(/\.webp$/, '.avif');
      if (!published.has(avif)) await unlink(path.join(out, avif)).catch((error) => { if (error.code !== 'ENOENT') throw error; });
    }
    report.push({ image: image.src, avif: useAvif, renditions: candidates.map(({ webp, encoded, acceptable, mse, webpBytes }) => ({ webp, webpBytes, avifBytes: encoded.length, acceptable, mse })) });
  });
  report.sort((a, b) => a.image.localeCompare(b.image));
  await save(path.join(CACHE, 'images.json'), JSON.stringify(report));
  return { originals: Object.keys(art).length, generated, avifPictures: report.filter((image) => image.avif).length, formats: Object.fromEntries(report.flatMap((image) => image.renditions.map((rendition) => [rendition.webp, rendition.acceptable]))) };
}
