#!/usr/bin/env node
// Engrave the public-domain LilyPond sources used for score alignment into web SVG.
// Every notehead and rest carries its bar number and position in the bar (data-bar, data-pos),
// so the page can light up exactly what is sounding.
//   node tools/engrave.mjs [id ...]        (default: every tools/align/sources/<id>)
// Needs LilyPond 2.24 at $LILYPOND or ~/.local/opt/lilypond-2.24.4/bin/lilypond.
import { mkdir, readdir, readFile, writeFile, cp, rm, stat } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import os from 'node:os';

const run = promisify(execFile);
const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'tools/align/sources');
const LY = process.env.LILYPOND ?? path.join(os.homedir(), '.local/opt/lilypond-2.24.4/bin/lilypond');
const CONVERT = path.join(path.dirname(LY), 'convert-ly');

// Which file to engrave per piece, and any engraving settings.
const PIECES = {
  'satie-gymnopedie-1': { main: 'gymnopedie_1.ly', staff: 19, width: 230 },
  'schubert-impromptu-gflat': { main: 'SchubertF-D899-3-Impromptu.ly', staff: 18, width: 230 },
  'bach-wtc1-fugue-b-minor': { main: null, staff: 18, width: 230 },
  'beethoven-5-first': { main: 'Symphony5_1-lys/Symphony5_1.ly', staff: 14, width: 260, pages: true },
};

const PRELUDE = (width, pages) => `
#(define (cp-attrs grob)
  (let* ((loc (grob::rhythmic-location grob))
         (bar (if (pair? loc) (car loc) 0))
         (pos (if (pair? loc) (exact->inexact (ly:moment-main (cdr loc))) 0)))
    (list (cons 'class (if (grob::has-interface grob 'rest-interface) "rs" "nh"))
          (cons 'data-bar (number->string bar))
          (cons 'data-pos (number->string pos)))))
\\paper {
  #(set-paper-size '(cons (* ${width} mm) (* ${pages ? 360 : 297} mm)))
  ${pages ? '' : 'page-breaking = #ly:one-page-breaking'}
  oddHeaderMarkup = ##f evenHeaderMarkup = ##f
  oddFooterMarkup = ##f evenFooterMarkup = ##f
  bookTitleMarkup = ##f scoreTitleMarkup = ##f
  print-page-number = ##f
  top-margin = 6\\mm bottom-margin = 6\\mm left-margin = 8\\mm right-margin = 8\\mm
  system-system-spacing.basic-distance = #14
  ragged-last-bottom = ##t
}
\\layout {
  \\context { \\Score
    \\override NoteHead.output-attributes = #cp-attrs
    \\override Rest.output-attributes = #cp-attrs
    \\override BarNumber.break-visibility = ##(#f #t #t)
  }
}
`;

async function findMain(dir) {
  // the .ly file that contains \score
  const files = [];
  const walk = async (d) => { for (const f of await readdir(d)) { const p = path.join(d, f); if ((await stat(p)).isDirectory()) await walk(p); else if (f.endsWith('.ly')) files.push(p); } };
  await walk(dir);
  for (const f of files) if (/\\score\s*\{/.test(await readFile(f, 'utf8'))) return f;
  throw new Error(`no \\score in ${dir}`);
}

async function engrave(id) {
  const cfg = PIECES[id] ?? { main: null, staff: 18, width: 230 };
  const work = path.join(ROOT, 'cache/engrave', id);
  await rm(work, { recursive: true, force: true });
  await mkdir(work, { recursive: true });
  await cp(path.join(SRC, id), work, { recursive: true });
  const main = cfg.main ? path.join(work, cfg.main) : await findMain(work);
  // bring every source up to the installed LilyPond version
  const lys = [];
  const walk = async (d) => { for (const f of await readdir(d)) { const p = path.join(d, f); if ((await stat(p)).isDirectory()) await walk(p); else if (f.endsWith('.ly') || f.endsWith('.ily')) lys.push(p); } };
  await walk(work);
  for (const f of lys) await run(CONVERT, ['-e', '-q', f]).catch(() => {});
  // strip the source's own staff size so ours applies
  let src = await readFile(main, 'utf8');
  src = src.replace(/#\(set-global-staff-size[^)]*\)/g, '');
  await writeFile(main, src);
  const wrapper = path.join(path.dirname(main), '__web.ly');
  await writeFile(wrapper, `\\version "2.24.4"\n#(set-global-staff-size ${cfg.staff})\n${PRELUDE(cfg.width, cfg.pages)}\n\\include "${path.basename(main)}"\n`);
  const { stderr } = await run(LY, ['-dbackend=svg', '-dno-point-and-click', '-dcrop=#f', '-o', path.join(work, 'out'), wrapper], { cwd: path.dirname(main), maxBuffer: 1 << 26 }).catch((e) => ({ stderr: e.stderr ?? String(e) }));
  const svgs = (await readdir(work)).filter((f) => f.startsWith('out') && f.endsWith('.svg')).sort((a, b) => (Number(a.match(/-(\d+)\.svg$/)?.[1] ?? 0) - Number(b.match(/-(\d+)\.svg$/)?.[1] ?? 0)));
  if (!svgs.length) throw new Error(`${id}: LilyPond produced no SVG\n${stderr.slice(-2000)}`);
  let svg = stack(await Promise.all(svgs.map((f) => readFile(path.join(work, f), 'utf8'))));
  svg = tidy(svg);
  const outDir = path.join(ROOT, 'docs/assets/data', id);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, 'sheet.svg'), svg);
  const bars = new Set([...svg.matchAll(/data-bar="(\d+)"/g)].map((m) => m[1]));
  console.log(`engraved ${id}: ${svgs.length} page(s), ${(svg.length / 1024).toFixed(0)} KB, bars ${Math.min(...bars)}–${Math.max(...bars)}`);

}

/** Stack LilyPond pages vertically into one SVG (each page keeps its own coordinate system). */
function stack(pages) {
  if (pages.length === 1) return pages[0];
  let y = 0, w = 0;
  const parts = pages.map((p) => {
    const vb = p.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(Number);
    const inner = p.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
    const g = `<g transform="translate(0 ${y})">${inner}</g>`;
    y += vb[3]; w = Math.max(w, vb[2]);
    return g;
  });
  const head = pages[0].match(/<svg[^>]*>/)[0].replace(/viewBox="[^"]+"/, `viewBox="0 0 ${w} ${y}"`);
  return `${head}${parts.join('')}</svg>`;
}

/** Make the SVG theme-able: ink becomes currentColor, drop fixed size so it scales. */
function tidy(svg) {
  return svg
    .replace(/<\?xml[^>]*>\s*/, '')
    .replace(/(<svg[^>]*?)\s(width|height)="[^"]*"/g, '$1')
    .replace(/(<svg[^>]*?)\s(width|height)="[^"]*"/g, '$1')
    .replace(/fill="(black|#000000|#000)"/g, 'fill="currentColor"')
    .replace(/stroke="(black|#000000|#000)"/g, 'stroke="currentColor"')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<title>[\s\S]*?<\/title>/g, '');
}

const ids = process.argv.slice(2).length ? process.argv.slice(2) : (await readdir(SRC)).filter((d) => !d.startsWith('.'));
for (const id of ids) {
  try { await engrave(id); } catch (e) { console.log(`FAILED ${id}: ${e.message}`); process.exitCode = 1; }
}
