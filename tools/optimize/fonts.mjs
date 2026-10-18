import path from 'node:path';
import { readFile, readdir, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import subsetFont from 'subset-font';
import * as fontkit from 'fontkit';
import { decodeHTML } from 'entities';
import { OUT, CACHE, cached, hash, save } from './cache.mjs';
import { fontUsage } from './font-usage.mjs';

// Google Fonts upstream blobs, pinned by Git object ID. Only the CSS-used
// ranges are retained; bold HTML retains the previous nearest-face behaviour.
const sourceCommit = '47d54ca1ebb14fd864695f1d39dc734f39017c33';
// Match the measured Google-served WOFF2 feature sets, not every optional
// upstream feature. In particular smcp/c2sc would replace the old synthetic
// small capitals and visibly change the gilded typography.
const faceFeatures = {
  'Cormorant Garamond': { normal: 'calt ccmp dnom frac liga lnum numr tnum kern mark mkmk', italic: 'calt ccmp dnom frac liga lnum numr pnum tnum kern mark mkmk' },
  'Cormorant SC': { normal: 'calt ccmp dnom frac lnum numr tnum kern mark mkmk' },
  'EB Garamond': { normal: 'dnom frac liga numr pnum rlig tnum kern mark', italic: 'dnom fina frac init liga numr pnum rlig tnum kern mark mkmk' },
  'Noto Music': { normal: 'ccmp curs kern mark mkmk' }
};
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
// Preserve the original Google CSS coverage. Raw upstream fonts also contain
// symbols the old site rendered with its final serif fallback; exposing them
// changes those glyphs and needlessly enlarges the initial Latin download.
const textCoverage = '0000-02CC,02CE-02D7,02DA,02DC-02FF,0300-0301,0303-0304,0308-0309,0323,0329,0400-052F,1C80-1C8A,1D00-1DBF,1E00-1EFF,2000-206F,20A0-20C4,2113,2116,2122,2191,2193,2212,2215,2C60-2C7F,2DE0-2DFF,A640-A69F,A720-A7FF,FE2E-FE2F,FEFF,FFFD'
  .split(',').map((range) => { const [a, b = a] = range.split('-').map((value) => parseInt(value, 16)); return [a, b]; });
const greekCoverage = [[0x370, 0x377], [0x37a, 0x37f], [0x384, 0x38a], [0x38c, 0x38c], [0x38e, 0x3a1], [0x3a3, 0x3ff], [0x1f00, 0x1fff]];
// Space is required even in the musical face: CSS uses its font metrics for
// the inline strut. Omitting it changes the masthead's baseline and height.
const covered = (point, family) => family === 'Noto Music'
  ? point === 0x20 || point === 0x25cc || point >= 0x2669 && point <= 0x266f || point >= 0x1d000 && point <= 0x1d245
  : textCoverage.some(([a, b]) => point >= a && point <= b) || family === 'EB Garamond' && greekCoverage.some(([a, b]) => point >= a && point <= b);
async function source(file, sha) {
  return cached(`source-${sha}`, path.extname(file).slice(1), async () => {
    const response = await fetch(`https://raw.githubusercontent.com/google/fonts/${sourceCommit}/ofl/${file.split('/').map(encodeURIComponent).join('/')}`);
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
    const text = decodeHTML((await readFile(file, 'utf8')).replace(/(?:\\u[\da-f]{4})+/gi, (s) => JSON.parse(`"${s}"`)));
    for (const c of text.match(/[^\x00-\x7f]/gu) || []) used.add(c.codePointAt(0));
  }
  const points = [...used].sort((a, b) => a - b);
  const css = [], manifest = [], pages = [], records = new Map();
  for (const [id, family, style, weight, file, sha] of faces) {
    const original = await source(file, sha);
    const font = fontkit.create(original);
    const included = points.filter((point) => covered(point, family) && font.hasGlyphForCodePoint(point));
    // Keep the common Latin face small, as the original CSS did. Extended
    // Latin and non-Latin scripts remain available without taxing every page.
    const latinScripts = /[\p{Script=Latin}\p{Script=Common}\p{Script=Inherited}]/u;
    const latin = (point) => latinScripts.test(String.fromCodePoint(point));
    const core = (point) => point <= 0xff || point >= 0x2000 && point <= 0x206f || [0x131, 0x152, 0x153, 0x2bb, 0x2bc, 0x2c6, 0x2da, 0x2dc, 0x304, 0x308, 0x329, 0x20ac, 0x2122, 0x2191, 0x2193, 0x2212, 0x2215, 0xfeff, 0xfffd].includes(point);
    const groups = family === 'Noto Music' ? [included] : [included.filter(core), included.filter((point) => !core(point) && latin(point)), included.filter((point) => !core(point) && !latin(point))];
    const weights = weight.split(' ').map(Number);
    const variationAxes = font.variationAxes.wght ? { wght: { min: weights[0], max: weights.at(-1) } } : undefined;
    const keepFeatures = faceFeatures[family][style].split(' ');
    records.set(id, { id, family, style, weight, file, sha, original, font, keepFeatures, min: weights[0], max: weights.at(-1) });
    for (const [index, glyphs] of groups.entries()) {
      if (!glyphs.length) continue;
      const chars = String.fromCodePoint(...glyphs);
      const subset = await cached(hash(`subset-v3-${sha}-${weight}-${keepFeatures.join(',')}-${chars}`), 'woff2', () => subsetFont(original, chars, { targetFormat: 'woff2', variationAxes, keepFeatures }));
      const name = `${id}.${index ? 'extra.' : ''}${hash(subset).slice(0, 16)}.woff2`;
      await save(path.join(out, 'assets/fonts', name), subset);
      css.push(`@font-face{font-family:'${family}';font-style:${style};font-weight:${weight};font-display:swap;src:url('__BASE__assets/fonts/${name}') format('woff2');unicode-range:${ranges(glyphs)}}`);
      manifest.push({ id, family, style, weight, name, bytes: subset.length, source: file, sha, glyphs: glyphs.length, extra: Boolean(index) });
    }
    if (family !== 'Noto Music') {
      // Times New Roman and its metric-compatible Liberation Serif substitute:
      // measured x-height 940 / 2048. Match target x-height and vertical metrics.
      const target = font.variationAxes.wght ? font.getVariation({ wght: Math.max(400, weights[0]) }) : font;
      const adjust = (target.xHeight / target.unitsPerEm) / (940 / 2048);
      const percent = (value) => `${(value * 100).toFixed(4)}%`;
      const italic = style === 'italic';
      const locals = italic ? "local('Times New Roman Italic'),local('Liberation Serif Italic')" : "local('Times New Roman'),local('Liberation Serif')";
      css.push(`@font-face{font-family:'${family} Fallback';font-style:${style};font-weight:${weight};src:${locals};size-adjust:${percent(adjust)};ascent-override:${percent(target.ascent / target.unitsPerEm / adjust)};descent-override:${percent(-target.descent / target.unitsPerEm / adjust)};line-gap-override:${percent(target.lineGap / target.unitsPerEm / adjust)};unicode-range:${ranges(included)}}`);
    }
  }
  for (const [family, sha] of licenses) await save(path.join(out, 'assets/fonts', `${family}-OFL.txt`), await source(`${family}/OFL.txt`, sha));
  const names = new Set(manifest.map((face) => face.name));
  return {
    manifest,
    async head(base, html, relative) {
      const usage = await fontUsage(html, relative, out, [...records.values()].map(({ id, family, style, min, max }) => ({ id, family, style, min, max })));
      const preferred = [], rules = [];
      for (const group of usage.groups) {
        const face = records.get(group.id);
        const glyphs = group.points.filter((point) => covered(point, face.family) && face.font.hasGlyphForCodePoint(point));
        if (!glyphs.length) continue;
        const chars = String.fromCodePoint(...glyphs);
        // A page uses exact CSS weights, so static instances are smaller than
        // shipping the whole variable axis. The global face remains available
        // for dynamic text and other weights; no design weight is collapsed.
        const subset = await cached(hash(`page-subset-v1-${face.sha}-${group.weight}-${face.keepFeatures.join(',')}-${chars}`), 'woff2', () => subsetFont(face.original, chars, {
          targetFormat: 'woff2', keepFeatures: face.keepFeatures,
          variationAxes: face.font.variationAxes.wght ? { wght: group.weight } : undefined,
        }));
        const name = `${face.id}.page.${hash(subset).slice(0, 16)}.woff2`;
        await save(path.join(out, 'assets/fonts', name), subset);
        rules.push(`@font-face{font-family:'${face.family}';font-style:${face.style};font-weight:${group.weight};font-display:swap;src:url('__BASE__assets/fonts/${name}') format('woff2');unicode-range:${ranges(glyphs)}}`);
        preferred.push({ key: group.key, name, bytes: subset.length });
        if (!names.has(name)) {
          names.add(name);
          manifest.push({ id: face.id, family: face.family, style: face.style, weight: String(group.weight), name, bytes: subset.length, source: face.file, sha: face.sha, glyphs: glyphs.length, page: true });
        }
      }
      pages.push({ page: relative, bytes: preferred.reduce((sum, face) => sum + face.bytes, 0), fonts: preferred });
      const lcp = preferred.find((face) => face.key === usage.title);
      const preload = lcp ? `<link rel="preload" data-cp-font-preload href="${base}assets/fonts/${lcp.name}" as="font" type="font/woff2" crossorigin>` : '';
      return `${preload}<style data-cp-fonts>${[...css, ...rules].join('').replaceAll('__BASE__', base)}</style>`;
    },
    async finish() {
      // Remove only our superseded hash-named products, after every page has
      // contributed its preferred subsets; shared subsets are emitted once.
      for (const file of await readdir(path.join(out, 'assets/fonts'))) {
        if (faces.some(([id]) => file.startsWith(`${id}.`)) && file.endsWith('.woff2') && !names.has(file)) await unlink(path.join(out, 'assets/fonts', file));
      }
      await save(path.join(out, 'assets/fonts/manifest.json'), JSON.stringify(manifest));
      await save(path.join(CACHE, 'font-pages.json'), JSON.stringify(pages));
    },
  };
}

export function fontFallbacks(css) {
  for (const family of ['Cormorant Garamond', 'EB Garamond', 'Cormorant SC']) {
    const expression = new RegExp(`(['"])${family}\\1(?!\\s*,\\s*['"]${family} Fallback)`, 'g');
    css = css.replace(expression, `'${family}','${family} Fallback'`);
  }
  return css;
}
