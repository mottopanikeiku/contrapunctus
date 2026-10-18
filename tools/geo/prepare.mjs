import { readFile, writeFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Public-domain Natural Earth 1:50m. Normal builds are strictly offline.
export const REVISION = 'ca96624a56bd078437bca8184e78163e5039ad19';
export const LAYERS = ['ne_50m_land', 'ne_50m_coastline', 'ne_50m_admin_0_countries'];
const DIR = path.dirname(fileURLToPath(import.meta.url));
export const round = (n) => Math.round(n * 10) / 10;
export const project = (lon, lat) => [round((lon + 180) * 8), round(1440 - 1440 / Math.PI * Math.log(Math.tan(Math.PI / 4 + Math.max(-82, Math.min(82, lat)) * Math.PI / 360)))];
export function bounds(points, padding = 0) {
  const xs = points.map((p) => p[0]), ys = points.map((p) => p[1]);
  const x = Math.min(...xs), y = Math.min(...ys);
  return [x - padding, y - padding, Math.max(...xs) - x + 2 * padding, Math.max(...ys) - y + 2 * padding].map(round);
}
export const EUROPE = bounds([project(-10.5, 60.5), project(40.5, 38)]);
export const WORLD = bounds([project(-135, 72), project(155, -48)]);

/** Iterative Douglas–Peucker in projected units (no recursion-depth limit). */
export function simplify(points, tolerance) {
  if (points.length < 3) return points;
  const keep = new Uint8Array(points.length), stack = [0, points.length - 1], squared = tolerance * tolerance;
  keep[0] = keep[points.length - 1] = 1;
  while (stack.length) {
    const end = stack.pop(), start = stack.pop(), a = points[start], b = points[end];
    const dx = b[0] - a[0], dy = b[1] - a[1], length = dx * dx + dy * dy;
    let farthest = squared, selected = -1;
    for (let i = start + 1; i < end; i++) {
      const p = points[i], t = length ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / length)) : 0;
      const distance = (p[0] - a[0] - t * dx) ** 2 + (p[1] - a[1] - t * dy) ** 2;
      if (distance > farthest) { farthest = distance; selected = i; }
    }
    if (selected >= 0) { keep[selected] = 1; stack.push(start, selected, selected, end); }
  }
  return points.filter((_, i) => keep[i]);
}
export const linePath = (points, closed = false) => points.length > 1 ? `M${points.map((p) => p.map(round).join(',')).join('L')}${closed ? 'Z' : ''}` : '';
function lines(geometry) {
  switch (geometry.type) {
    case 'Polygon': return geometry.coordinates.map((points) => ({ points, closed: true }));
    case 'MultiPolygon': return geometry.coordinates.flatMap((polygon) => polygon.map((points) => ({ points, closed: true })));
    case 'LineString': return [{ points: geometry.coordinates, closed: false }];
    case 'MultiLineString': return geometry.coordinates.map((points) => ({ points, closed: false }));
    default: return [];
  }
}
export async function loadGeometry() {
  return Promise.all(LAYERS.map(async (layer) => {
    const data = JSON.parse(await readFile(path.join(DIR, `${layer}.geojson`), 'utf8'));
    return data.features.flatMap((feature) => lines(feature.geometry)).map(({ points, closed }) => {
      const projected = points.map(([lon, lat]) => project(lon, lat));
      return { points: projected, closed, box: bounds(projected) };
    });
  }));
}
const intersects = (a, b) => a[0] <= b[0] + b[2] && a[0] + a[2] >= b[0] && a[1] <= b[1] + b[3] && a[1] + a[3] >= b[1];
// Clip chapter-map polygons before serialising: do not ship the rest of the
// world invisibly outside each small SVG's viewBox.
function clipRing(points, box) {
  let ring = points;
  for (const [axis, edge, direction] of [[0, box[0], 1], [0, box[0] + box[2], -1], [1, box[1], 1], [1, box[1] + box[3], -1]]) {
    const output = [];
    if (!ring.length) return output;
    let previous = ring[ring.length - 1], wasInside = (previous[axis] - edge) * direction >= 0;
    for (const point of ring) {
      const inside = (point[axis] - edge) * direction >= 0;
      if (inside !== wasInside) {
        const t = (edge - previous[axis]) / (point[axis] - previous[axis]);
        output.push([previous[0] + t * (point[0] - previous[0]), previous[1] + t * (point[1] - previous[1])]);
      }
      if (inside) output.push(point);
      previous = point; wasInside = inside;
    }
    ring = output;
  }
  if (ring.length) ring.push(ring[0]);
  return ring;
}
export function paths(geometry, tolerance = .8, box = null, transform = (p) => p) {
  return geometry.filter((g) => !box || intersects(g.box, box)).map((g) => {
    const clipped = box && g.closed ? clipRing(g.points, box) : g.points;
    const points = simplify(clipped.map(transform), tolerance);
    return g.closed && points.length < 4 ? '' : linePath(points, g.closed);
  }).join('');
}
export function baseMap(geometry) {
  const graticule = [];
  for (let lon = -180; lon <= 180; lon += 10) graticule.push(linePath([project(lon, -82), project(lon, 82)]));
  for (let lat = -70; lat <= 80; lat += 10) graticule.push(linePath([project(-180, lat), project(180, lat)]));
  return { projection: 'Mercator, 8 units/degree at equator; latitude clipped at ±82°', revision: REVISION, europe: EUROPE, world: WORLD, land: paths(geometry[0], 2), coastline: paths(geometry[1], 2), countries: paths(geometry[2], 2.6), graticule: graticule.join('') };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const sources = [];
  for (const layer of LAYERS) {
    const file = path.join(DIR, `${layer}.geojson`);
    const url = `https://raw.githubusercontent.com/nvkelso/natural-earth-vector/${REVISION}/geojson/${layer}.geojson`;
    try { await access(file); } catch {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`${response.status} fetching ${url}`);
      const body = await response.text();
      if (JSON.parse(body).type !== 'FeatureCollection') throw new Error(`Not GeoJSON: ${url}`);
      await writeFile(file, body);
    }
    const bytes = await readFile(file);
    sources.push({ file: `${layer}.geojson`, url, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') });
    console.log(`${layer}: ${bytes.length} bytes cached`);
  }
  await writeFile(path.join(DIR, 'sources.json'), JSON.stringify({ licence: 'Public domain', terms: 'https://www.naturalearthdata.com/about/terms-of-use/', revision: REVISION, sources }, null, 2) + '\n');
}
