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
