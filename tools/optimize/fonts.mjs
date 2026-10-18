import path from 'node:path';
import { readFile, readdir, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import subsetFont from 'subset-font';
import * as fontkit from 'fontkit';
import { decodeHTML } from 'entities';
import { OUT, cached, hash, save } from './cache.mjs';

// Pinned upstream sources. Exact weights follow the browser/CSS/canvas audit;
// only the common 400/500 italic core shares a smaller clamped variable file.
// Inherited bold keeps the site's original nearest-face behaviour.
const sourceCommit = '47d54ca1ebb14fd864695f1d39dc734f39017c33';
// Retain the Google-served default shaping and CSS-used numeric features.
// Optional fraction/numerator/denominator and initial/final swash features are
// never enabled by the site. smcp/c2sc would change its synthetic small capitals.
const faceFeatures = {
  'Cormorant Garamond': { normal: 'calt ccmp liga lnum tnum kern mark mkmk', italic: 'calt ccmp liga lnum pnum tnum kern mark mkmk' },
  'Cormorant SC': { normal: 'calt ccmp lnum tnum kern mark mkmk' },
  'EB Garamond': { normal: 'liga pnum rlig tnum kern mark', italic: 'liga pnum rlig tnum kern mark mkmk' },
  'Noto Music': { normal: 'ccmp curs kern mark mkmk' }
};
const faces = [
  ['cormorant-garamond-normal', 'Cormorant Garamond', 'normal', [400, 500], 'cormorantgaramond/CormorantGaramond[wght].ttf', 'd992a83ce525c330fad3a19087746bcb2dc038ee'],
  ['cormorant-garamond-italic', 'Cormorant Garamond', 'italic', [300, 400, 500, 600], 'cormorantgaramond/CormorantGaramond-Italic[wght].ttf', '0d914e7663b7a1429d06ec60a5c5bb026031a2ef'],
  ['eb-garamond-normal', 'EB Garamond', 'normal', [400, 500, 600], 'ebgaramond/EBGaramond[wght].ttf', '52d34b86ec20977f222ce37e8158e6b3002c0a31'],
  ['eb-garamond-italic', 'EB Garamond', 'italic', [400, 500], 'ebgaramond/EBGaramond-Italic[wght].ttf', 'f9ad996001c8ee72fd43b4b8e67c8924b7f615b1'],
  ['cormorant-sc-500', 'Cormorant SC', 'normal', [500], 'cormorantsc/CormorantSC-Medium.ttf', '17eed98943cf625359680c08c190598370f669ac'],
  ['cormorant-sc-600', 'Cormorant SC', 'normal', [600], 'cormorantsc/CormorantSC-SemiBold.ttf', 'fe26e5977ad14edc7127f53c9df1af60b3365355'],
  ['noto-music', 'Noto Music', 'normal', [400], 'notomusic/NotoMusic-Regular.ttf', '7f1d616dd5efee190bb631231cf5f35fa8b8ab95'],
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
// Measured advance widths in em for metric-compatible Times New Roman /
// Liberation Serif. Matching widths, not x-height, preserves line wrapping.
const metricSample = 'The quick brown fox jumps over the lazy dog. 0123456789';
const fallbackWidths = {
  normal: [23.7734375, 30.88916015625],
  italic: [23.40478515625, 29.8876953125],
  bold: [24.79833984375, 32.3359375],
  boldItalic: [24.00048828125, 31.1328125],
};
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
  const used = new Set(Array.from({ length: 0x7f - 0x20 }, (_, i) => i + 0x20));
  for (const c of ' ‘’“”–—−♯♭♮𝄞') used.add(c.codePointAt(0));
  for (const file of textFiles) {
    const text = decodeHTML((await readFile(file, 'utf8')).replace(/(?:\\u[\da-f]{4})+/gi, (s) => JSON.parse(`"${s}"`)));
    for (const c of text.match(/[^\x00-\x7f]/gu) || []) {
      // CSS synthetic small caps and text transforms also need case partners.
      for (const variant of c + c.toUpperCase() + c.toLowerCase()) used.add(variant.codePointAt(0));
    }
  }
  const points = [...used].sort((a, b) => a - b);
  const css = [], manifest = [];
  const influence = (await readFile(path.join(out, 'influence.html'), 'utf8')).match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] || '';
  let italicTitle = '';
  const romanTitle = influence.replace(/<em\b[^>]*>([\s\S]*?)<\/em>/g, (_, text) => { italicTitle += text; return ''; });
  const titleText = { normal: decodeHTML(romanTitle.replace(/<[^>]*>/g, '')), italic: decodeHTML(italicTitle.replace(/<[^>]*>/g, '')) };
  const titleFaces = [], titlePreloads = [];
  const core = (point) => point <= 0xff || point >= 0x2000 && point <= 0x206f || /[\p{P}\p{S}]/u.test(String.fromCodePoint(point));
  for (const [id, family, style, weights, file, sha] of faces) {
    const original = await source(file, sha);
    const font = fontkit.create(original);
    const included = points.filter((point) => covered(point, family) && font.hasGlyphForCodePoint(point));
    const groups = family === 'Noto Music' ? [included] : [included.filter(core), included.filter((point) => !core(point))];
    const keepFeatures = faceFeatures[family][style].split(' ');
    if (family === 'Cormorant Garamond' && titleText[style]) {
      const text = titleText[style];
      const title = await cached(hash(`influence-title-v1-${sha}-${keepFeatures.join(',')}-${text}`), 'woff2', () => subsetFont(original, text, { targetFormat: 'woff2', variationAxes: { wght: 400 }, keepFeatures }));
      const url = `data:font/woff2;base64,${title.toString('base64')}`;
      titlePreloads.push(`<link rel="preload" href="${url}" as="font" type="font/woff2" fetchpriority="high" crossorigin>`);
      titleFaces.push(`@font-face{font-family:'CP Influence Heading';font-style:${style};font-weight:400;font-display:swap;src:url(${url}) format('woff2')}`);
    }
    for (const weight of weights) {
      const variationAxes = font.variationAxes.wght ? { wght: weight } : undefined;
      for (const [index, glyphs] of groups.entries()) {
        if (!glyphs.length) continue;
        const chars = String.fromCodePoint(...glyphs);
        // Both common italic weights are used on every measured first view.
        // Keep rare weights and extended glyphs static: wider axes and
        // variable EB Garamond enlarge pages using fewer of their weights.
        const commonItalic = id === 'cormorant-garamond-italic' && !index && (weight === 400 || weight === 500);
        if (commonItalic && weight === 500) continue;
        const descriptor = commonItalic ? '400 500' : weight;
        const axes = commonItalic ? { wght: { min: 400, max: 500, default: 400 } } : variationAxes;
        const recipe = commonItalic ? 'shared-variable-v1' : 'shared-static-v1';
        const subset = await cached(hash(`${recipe}-${sha}-${descriptor}-${keepFeatures.join(',')}-${chars}`), 'woff2', () => subsetFont(original, chars, { targetFormat: 'woff2', variationAxes: axes, keepFeatures }));
        const name = `${id}.${String(descriptor).replace(' ', '-')}.${index ? 'extended' : 'core'}.${hash(subset).slice(0, 16)}.woff2`;
        await save(path.join(out, 'assets/fonts', name), subset);
        css.push(`@font-face{font-family:'${family}';font-style:${style};font-weight:${descriptor};font-display:swap;src:url('__BASE__assets/fonts/${name}') format('woff2');unicode-range:${ranges(glyphs)}}`);
        manifest.push({ id, family, style, weight, maxWeight: commonItalic ? 500 : weight, name, bytes: subset.length, source: file, sha, glyphs: glyphs.length, extra: Boolean(index) });
      }
      const target = font.variationAxes.wght ? font.getVariation({ wght: weight }) : font;
      const caps = family === 'Cormorant SC';
      const fallbackStyle = weight >= 600 ? style === 'italic' ? 'boldItalic' : 'bold' : style;
      const textWidth = family === 'Noto Music' ? 0 : target.layout(caps ? metricSample.toUpperCase() : metricSample).positions.reduce((sum, position) => sum + position.xAdvance, 0) / target.unitsPerEm;
      const adjust = family === 'Noto Music' ? 1 : textWidth / fallbackWidths[fallbackStyle][Number(caps)];
      const percent = (value) => `${(value * 100).toFixed(4)}%`;
      const suffix = { normal: '', italic: ' Italic', bold: ' Bold', boldItalic: ' Bold Italic' }[fallbackStyle];
      const locals = `local('Times New Roman${suffix}'),local('Liberation Serif${suffix}')`;
      css.push(`@font-face{font-family:'${family} Fallback';font-style:${style};font-weight:${weight};src:${locals};size-adjust:${percent(adjust)};ascent-override:${percent(target.ascent / target.unitsPerEm / adjust)};descent-override:${percent(-target.descent / target.unitsPerEm / adjust)};line-gap-override:${percent(target.lineGap / target.unitsPerEm / adjust)};unicode-range:${ranges(included)}}`);
    }
  }
  for (const [family, sha] of licenses) await save(path.join(out, 'assets/fonts', `${family}-OFL.txt`), await source(`${family}/OFL.txt`, sha));
  // This also removes the retired per-page products, not just old revisions.
  const names = new Set(manifest.map((face) => face.name));
  for (const file of await readdir(path.join(out, 'assets/fonts'))) {
    if (faces.some(([id]) => file.startsWith(`${id}.`)) && file.endsWith('.woff2') && !names.has(file)) await unlink(path.join(out, 'assets/fonts', file));
  }
  await save(path.join(out, 'assets/fonts/manifest.json'), JSON.stringify(manifest));
  // Relative URLs in an external sheet do not change base after pushState.
  // No app-time font-sheet rewrite is needed while fonts are loading.
  const fontCSS = css.join('').replaceAll('__BASE__assets/', '../');
  const fontVersion = hash(fontCSS).slice(0, 12);
  await save(path.join(out, 'assets/css/fonts.css'), fontCSS);
  return {
    manifest,
    head(base, relative) {
      // Measured LCP text faces, not a blanket pair of preloads. The composer
      // mobile LCP is its portrait; reserve font preloading for desktop there.
      const roman = 'cormorant-garamond-normal', italic = 'cormorant-garamond-italic', body = 'eb-garamond-normal';
      const wanted = relative === 'index.html' ? [[body, '(max-width: 760px)'], [italic, '(min-width: 761px)']]
        : /^composers\/(?!index\.html)/.test(relative) ? [[italic, '(min-width: 861px)']]
        : relative === 'hall.html' || relative.startsWith('compare/') ? [[italic]]
        : relative === 'atlas-map.html' ? [[roman], [italic]]
        : relative === 'glossary.html' ? [[body]] : [];
      const preloads = wanted.map(([id, media]) => {
        const face = manifest.find((face) => face.id === id && face.weight === 400 && !face.extra);
        return `<link rel="preload" data-cp-font-preload href="${base}assets/fonts/${face.name}" as="font" type="font/woff2" fetchpriority="high" crossorigin${media ? ` media="${media}"` : ''}>`;
      }).join('');
      const title = relative === 'influence.html' ? `${titlePreloads.join('')}<style data-cp-critical>${titleFaces.join('')}.influence-page .iw-heading h1{font-family:'CP Influence Heading','Cormorant Garamond','Cormorant Garamond Fallback',serif}</style>` : '';
      return `${preloads}<link rel="stylesheet" data-cp-fonts href="${base}assets/css/fonts.css?v=${fontVersion}">${title}`;
    },
  };
}

export function fontFallbacks(css) {
  for (const family of ['Cormorant Garamond', 'EB Garamond', 'Cormorant SC', 'Noto Music']) {
    const expression = new RegExp(`(['"])${family}\\1(?!\\s*,\\s*['"]${family} Fallback)`, 'g');
    css = css.replace(expression, `'${family}','${family} Fallback'`);
  }
  return css;
}
