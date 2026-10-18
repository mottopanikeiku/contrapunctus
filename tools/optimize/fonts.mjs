import path from 'node:path';
import { readFile, readdir, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import subsetFont from 'subset-font';
import * as fontkit from 'fontkit';
import { OUT, cached, hash, save } from './cache.mjs';

// Google Fonts upstream blobs, pinned by Git object ID. Only the CSS-used
// ranges are retained; bold HTML retains the previous nearest-face behaviour.
const faces = [
  ['cormorant-garamond-normal', 'Cormorant Garamond', 'normal', '400 600', 'cormorantgaramond/CormorantGaramond[wght].ttf', 'd992a83ce525c330fad3a19087746bcb2dc038ee'],
  ['cormorant-garamond-italic', 'Cormorant Garamond', 'italic', '300 600', 'cormorantgaramond/CormorantGaramond-Italic[wght].ttf', '0d914e7663b7a1429d06ec60a5c5bb026031a2ef'],
  ['eb-garamond-normal', 'EB Garamond', 'normal', '400 600', 'ebgaramond/EBGaramond[wght].ttf', '52d34b86ec20977f222ce37e8158e6b3002c0a31'],
  ['eb-garamond-italic', 'EB Garamond', 'italic', '400 500', 'ebgaramond/EBGaramond-Italic[wght].ttf', 'f9ad996001c8ee72fd43b4b8e67c8924b7f615b1'],
  ['cormorant-sc-500', 'Cormorant SC', 'normal', '500', 'cormorantsc/CormorantSC-Medium.ttf', '17eed98943cf625359680c08c190598370f669ac'],
  ['cormorant-sc-600', 'Cormorant SC', 'normal', '600', 'cormorantsc/CormorantSC-SemiBold.ttf', 'fe26e5977ad14edc7127f53c9df1af60b3365355'],
  ['noto-music', 'Noto Music', 'normal', '400', 'notomusic/NotoMusic-Regular.ttf', '7f1d616dd5efee190bb631231cf5f35fa8b8ab95'],
];
const licenses = [
  ['cormorantgaramond', '507d70f4565352dbfcf2dfc9b42eb092b57c0be8'],
  ['cormorantsc', '507d70f4565352dbfcf2dfc9b42eb092b57c0be8'],
  ['ebgaramond', 'c1ec5e1818415eab6f8fca95a230af477d64eb61'],
  ['notomusic', 'b6cd8a88e3c1ed12552e242d6428fd6bd8f292b1'],
];
async function source(file, sha) {
  return cached(`source-${sha}`, path.extname(file).slice(1), async () => {
    const response = await fetch(`https://raw.githubusercontent.com/google/fonts/main/ofl/${file.split('/').map(encodeURIComponent).join('/')}`);
    if (!response.ok) throw new Error(`Font source ${file}: HTTP ${response.status}`);
    const data = Buffer.from(await response.arrayBuffer());
    const actual = createHash('sha1').update(`blob ${data.length}\0`).update(data).digest('hex');
    if (actual !== sha) throw new Error(`Font upstream changed: ${file}. Review the new font before updating the pinned blob.`);
    return data;
  });
}
function ranges(points) {
  const runs = [];
  for (const point of points) {
    const last = runs.at(-1);
    if (last && point === last[1] + 1) last[1] = point;
    else runs.push([point, point]);
  }
  return runs.map(([a, b]) => `U+${a.toString(16)}${a === b ? '' : `-${b.toString(16)}`}`).join(',');
}
export async function optimizeFonts(textFiles, out = OUT) {
  const used = new Set(Array.from({ length: 0x180 - 0x20 }, (_, i) => i + 0x20));
  for (const c of '‘’“”–—−♯♭♮𝄞') used.add(c.codePointAt(0));
  for (const file of textFiles) {
    const text = (await readFile(file, 'utf8')).replace(/(?:\\u[\da-f]{4})+/gi, (s) => JSON.parse(`"${s}"`));
    for (const c of text.match(/[^\x00-\x7f]/gu) || []) used.add(c.codePointAt(0));
    for (const match of text.matchAll(/&#(x[\da-f]+|\d+);/gi)) {
      const value = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : Number(match[1]);
      if (value <= 0x10ffff) used.add(value);
    }
  }
  const points = [...used].sort((a, b) => a - b);
  const css = [], manifest = [];
  for (const [id, family, style, weight, file, sha] of faces) {
    const original = await source(file, sha);
    const font = fontkit.create(original);
    const included = points.filter((point) => font.hasGlyphForCodePoint(point));
    const chars = String.fromCodePoint(...included);
    const weights = weight.split(' ').map(Number);
    const variationAxes = font.variationAxes.wght ? { wght: { min: weights[0], max: weights.at(-1) } } : undefined;
    const subset = await cached(hash(`subset-v1-${sha}-${weight}-${chars}`), 'woff2', () => subsetFont(original, chars, { targetFormat: 'woff2', variationAxes }));
    const name = `${id}.${hash(subset).slice(0, 16)}.woff2`;
    await save(path.join(out, 'assets/fonts', name), subset);
    css.push(`@font-face{font-family:'${family}';font-style:${style};font-weight:${weight};font-display:swap;src:url('__BASE__assets/fonts/${name}') format('woff2');unicode-range:${ranges(included)}}`);
    if (family !== 'Noto Music') {
      // Times New Roman and its metric-compatible Liberation Serif substitute:
      // measured x-height 940 / 2048. Match target x-height and vertical metrics.
      const target = font.variationAxes.wght ? font.getVariation({ wght: Math.max(400, weights[0]) }) : font;
      const adjust = (target.xHeight / target.unitsPerEm) / (940 / 2048);
      const percent = (value) => `${(value * 100).toFixed(4)}%`;
      const italic = style === 'italic';
      const locals = italic ? "local('Times New Roman Italic'),local('Liberation Serif Italic')" : "local('Times New Roman'),local('Liberation Serif')";
      css.push(`@font-face{font-family:'${family} Fallback';font-style:${style};font-weight:${weight};src:${locals};size-adjust:${percent(adjust)};ascent-override:${percent(target.ascent / target.unitsPerEm / adjust)};descent-override:${percent(-target.descent / target.unitsPerEm / adjust)};line-gap-override:${percent(target.lineGap / target.unitsPerEm / adjust)}}`);
    }
    manifest.push({ id, family, style, weight, name, bytes: subset.length, source: file, sha, glyphs: included.length });
  }
  for (const [family, sha] of licenses) await save(path.join(out, 'assets/fonts', `${family}-OFL.txt`), await source(`${family}/OFL.txt`, sha));
  // Remove only our superseded hash-named products, never unrelated fonts.
  const names = new Set(manifest.map((face) => face.name));
  for (const file of await readdir(path.join(out, 'assets/fonts'))) {
    if (faces.some(([id]) => file.startsWith(`${id}.`)) && file.endsWith('.woff2') && !names.has(file)) await unlink(path.join(out, 'assets/fonts', file));
  }
  await save(path.join(out, 'assets/fonts/manifest.json'), JSON.stringify(manifest));
  const preloads = ['cormorant-garamond-italic', 'eb-garamond-normal'].map((id) => manifest.find((face) => face.id === id));
  return { manifest, head: (base) => `${preloads.map((face) => `<link rel="preload" href="${base}assets/fonts/${face.name}" as="font" type="font/woff2" crossorigin>`).join('')}<style data-cp-fonts>${css.join('').replaceAll('__BASE__', base)}</style>` };
}

export function fontFallbacks(css) {
  for (const family of ['Cormorant Garamond', 'EB Garamond', 'Cormorant SC']) {
    const expression = new RegExp(`(['"])${family}\\1(?!\\s*,\\s*['"]${family} Fallback)`, 'g');
    css = css.replace(expression, `'${family}','${family} Fallback'`);
  }
  return css;
}
