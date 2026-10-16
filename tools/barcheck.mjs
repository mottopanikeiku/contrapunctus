#!/usr/bin/env node
// Report bars whose total duration differs from the time signature (first bar may be a pickup).
import { createRequire } from 'node:module';
import { loadContent } from '../src/content.mjs';

const require = createRequire(import.meta.url);
const ABCJS = require('../docs/assets/vendor/abcjs-basic-min.js');
const C = await loadContent();
const sources = [];
for (const c of C.composers) (c.score ?? []).forEach((s) => sources.push([c.slug, s]));
for (const e of C.eras) (e.score ?? []).forEach((s) => sources.push([`era:${e.slug}`, s]));
for (const p of Object.values(C.pages)) for (const l of p.lessons) (l.score ?? []).forEach((s) => sources.push([`${p.slug}#${l.id}`, s]));

let issues = 0;
for (const [owner, s] of sources) {
  const [tune] = ABCJS.parseOnly(s.abc);
  const meter = tune.getMeterFraction?.();
  if (!meter || !meter.den || /M:\s*none/i.test(s.abc)) continue;
  const barLen = meter.num / meter.den;
  const voices = new Map();
  for (const line of tune.lines) {
    if (!line.staff) continue;
    line.staff.forEach((st, si) => st.voices.forEach((v, vi) => {
      const key = `${si}.${vi}`;
      const acc = voices.get(key) ?? { bars: [], cur: 0, mult: 1 };
      for (const el of v) {
        if (el.el_type === 'note') {
          if (el.startTriplet) acc.mult = el.tripletMultiplier ?? 1;
          acc.cur += el.duration * (acc.mult ?? 1);
          if (el.endTriplet) acc.mult = 1;
        } else if (el.el_type === 'bar') { acc.bars.push(acc.cur); acc.cur = 0; }
        else if (el.el_type === 'meter') { /* meter changes: skip strict checking */ acc.meterChange = true; }
      }
      voices.set(key, acc);
    }));
  }
  for (const [key, acc] of voices) {
    if (acc.meterChange) continue;
    if (acc.cur > 1e-6) acc.bars.push(acc.cur);
    const bad = acc.bars.map((d, i) => [i + 1, d]).filter(([i, d], k) => Math.abs(d - barLen) > 1e-3 && !(k === 0 && d < barLen) && !(k === acc.bars.length - 1 && d < barLen && acc.bars.length > 1 && acc.bars[0] < barLen));
    if (bad.length) {
      issues++;
      console.log(`${owner} — "${s.title}" voice ${key}: bar(s) ${bad.map(([i, d]) => `${i}=${+d.toFixed(4)}`).join(', ')} vs ${barLen}`);
    }
  }
}
console.log(`${sources.length} examples, ${issues} voices with irregular bars`);
