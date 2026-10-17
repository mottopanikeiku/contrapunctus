// Minimal Wikimedia Commons client: resolves File: titles to metadata and thumbnails.
const API = 'https://commons.wikimedia.org/w/api.php';
export const UA = 'contrapunctus-build/1.0 (https://github.com/mottopanikeiku/contrapunctus)';

const stripTags = (s = '') =>
  s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

export function normalizeTitle(file) {
  const t = file.replace(/^(File|Image):/i, '').replace(/_/g, ' ').trim();
  return `File:${t}`;
}

/** Query up to 50 titles at once. Returns Map(normalizedTitle -> info | null). */
export async function lookup(titles, width = 1280) {
  const out = new Map();
  for (let i = 0; i < titles.length; i += 40) {
    const batch = titles.slice(i, i + 40).map(normalizeTitle);
    const url = new URL(API);
    url.search = new URLSearchParams({
      action: 'query',
      titles: batch.join('|'),
      prop: 'imageinfo',
      iiprop: 'url|size|extmetadata|mime',
      iiurlwidth: String(width),
      redirects: '1',
      format: 'json',
      formatversion: '2',
    });
    const res = await fetch(url, { headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`Commons API ${res.status}`);
    const data = await res.json();
    const alias = new Map();
    for (const n of data.query.normalized ?? []) alias.set(n.to, n.from);
    for (const r of data.query.redirects ?? []) alias.set(r.to, alias.get(r.from) ?? r.from);
    for (const page of data.query.pages) {
      const key = alias.get(page.title) ?? page.title;
      const ii = page.imageinfo?.[0];
      if (page.missing || !ii) {
        out.set(normalizeTitle(key), null);
        continue;
      }
      const m = ii.extmetadata ?? {};
      out.set(normalizeTitle(key), {
        title: page.title,
        width: ii.width,
        height: ii.height,
        mime: ii.mime,
        thumb: ii.thumburl ?? ii.url,
        original: ii.url,
        page: ii.descriptionurl,
        artist: stripTags(m.Artist?.value),
        date: stripTags(m.DateTimeOriginal?.value),
        license: stripTags(m.LicenseShortName?.value),
        credit: stripTags(m.Credit?.value).slice(0, 300),
        description: stripTags(m.ImageDescription?.value).slice(0, 400),
      });
    }
    for (const t of batch) if (!out.has(t)) out.set(t, null);
  }
  return out;
}

/** Full-text search of the File namespace; used by authors to discover exact titles. */
export async function search(q, limit = 12) {
  const url = new URL(API);
  url.search = new URLSearchParams({
    action: 'query',
    list: 'search',
    srsearch: q,
    srnamespace: '6',
    srlimit: String(limit),
    format: 'json',
    formatversion: '2',
  });
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  const data = await res.json();
  return data.query.search.map((s) => s.title);
}

const stripAudio = (s = '') => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

export async function commonsApi(params) {
  const url = new URL(API);
  url.search = new URLSearchParams({ format: 'json', formatversion: '2', ...params });
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`Commons ${res.status}`);
  return res.json();
}

/** Resolve a Commons audio file to metadata and a browser-streamable MP3 URL (CORS-enabled). */
export async function audioInfo(file) {
  const d = await commonsApi({ action: 'query', titles: normalizeTitle(file), prop: 'videoinfo', viprop: 'url|size|mime|extmetadata|derivatives', redirects: '1' });
  const p = d.query.pages[0];
  const vi = p.videoinfo?.[0];
  if (p.missing || !vi) return null;
  const m = vi.extmetadata ?? {};
  const mp3 = vi.mime === 'audio/mpeg' ? vi.url : vi.derivatives?.find((x) => x.type?.startsWith('audio/mpeg'))?.src;
  return {
    title: p.title,
    duration: vi.duration,
    mime: vi.mime,
    stream: mp3?.split('?')[0],
    page: vi.descriptionurl,
    artist: stripAudio(m.Artist?.value),
    license: stripAudio(m.LicenseShortName?.value),
    date: stripAudio(m.DateTimeOriginal?.value),
    description: stripAudio(m.ImageDescription?.value).slice(0, 500),
    credit: stripAudio(m.Credit?.value).slice(0, 300),
  };
}


// ---------------------------------------------------------------- Internet Archive
// A recording may come from Commons (`source.file`) or from the Internet Archive
// (`source.archive: { item, file }`). Archive downloads send CORS headers, so the hall's analyser works.
const ARCHIVE_LICENCE = [
  [/publicdomain\/mark|publicdomain\/zero/i, 'Public domain'],
  [/licenses\/by-sa\//i, 'CC BY-SA'],
  [/licenses\/by\//i, 'CC BY'],
];
export async function archiveInfo({ item, file }) {
  const res = await fetch(`https://archive.org/metadata/${encodeURIComponent(item)}`, { headers: { 'User-Agent': UA } });
  if (!res.ok) return null;
  const d = await res.json();
  if (!d?.files) return null;
  const f = d.files.find((x) => x.name === file);
  if (!f) return null;
  const m = d.metadata ?? {};
  const lic = m.licenseurl ? ARCHIVE_LICENCE.find(([re]) => re.test(m.licenseurl))?.[1] ?? m.licenseurl : '';
  const one = (v) => (Array.isArray(v) ? v.join('; ') : v ?? '');
  const mp3 = /\.mp3$/i.test(f.name) ? f.name : d.files.find((x) => x.original === f.name && /mp3/i.test(x.format ?? ''))?.name;
  return {
    title: `${item}/${file}`,
    duration: Number(f.length) || (typeof f.length === 'string' && f.length.includes(':') ? f.length.split(':').reduce((a, b) => a * 60 + Number(b), 0) : null),
    stream: mp3 ? `https://archive.org/download/${encodeURIComponent(item)}/${mp3.split('/').map(encodeURIComponent).join('/')}` : null,
    page: `https://archive.org/details/${encodeURIComponent(item)}`,
    artist: one(m.creator), license: lic, licenseUrl: m.licenseurl ?? '',
    date: one(m.date ?? m.year), description: one(m.description).replace(/<[^>]+>/g, ' ').slice(0, 500), credit: one(m.publisher).slice(0, 300),
  };
}

/** Stream information for any recording source. */
export async function sourceInfo(source) {
  if (source?.file) return audioInfo(source.file);
  if (source?.archive) return archiveInfo(source.archive);
  return null;
}
/** Stable cache key for a source. */
export function sourceKey(source) {
  return source?.file ? normalizeTitle(source.file) : source?.archive ? `archive:${source.archive.item}/${source.archive.file}` : '';
}
