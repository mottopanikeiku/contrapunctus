#!/usr/bin/env node
// Engrave public-domain LilyPond sources into paged, glyph-deduplicated SVG packs.
// Noteheads/rests retain data-bar/data-pos; index.json contains full-system bar boxes.
//   node tools/engrave.mjs [id ...]        (default: every tools/align/sources/<id>)
// Needs LilyPond 2.24 at $LILYPOND or ~/.local/opt/lilypond-2.24.4/bin/lilypond,
// and Cargo at $CARGO or ~/.cargo/bin/cargo. See tools/sheetpack/README.md.
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
const CARGO = process.env.CARGO ?? path.join(os.homedir(), '.cargo/bin/cargo');
const PACK_MANIFEST = path.join(ROOT, 'tools/sheetpack/Cargo.toml');
const PACK = path.join(ROOT, 'tools/sheetpack/target/release/sheetpack');

// Which file to engrave per piece, and any engraving settings.
const PIECES = {
  'satie-gymnopedie-1': { main: 'gymnopedie_1.ly', staff: 19, width: 230 },
  'schubert-impromptu-gflat': { main: 'SchubertF-D899-3-Impromptu.ly', staff: 18, width: 230 },
  'bach-wtc1-fugue-b-minor': { main: null, staff: 18, width: 230 },
  'beethoven-5-first': { main: 'Symphony5_1-lys/Symphony5_1.ly', staff: 14, width: 260, height: 360 },
};

const PAPER = (width, height = 297) => `
\\paper {
  paper-width = ${width}\\mm
  paper-height = ${height}\\mm
  line-width = ${width - 16}\\mm
  page-breaking = #ly:optimal-breaking
  oddHeaderMarkup = ##f evenHeaderMarkup = ##f
  oddFooterMarkup = ##f evenFooterMarkup = ##f
  bookTitleMarkup = ##f scoreTitleMarkup = ##f
  print-page-number = ##f
  top-margin = 6\\mm bottom-margin = 6\\mm left-margin = 8\\mm right-margin = 8\\mm
  system-system-spacing.basic-distance = #14
  ragged-last-bottom = ##t
}
`;

const PRELUDE = (width, height) => `
#(define (cp-attrs grob)
  (let* ((loc (grob::rhythmic-location grob))
         (bar (if (pair? loc) (car loc) 0))
         (pos (if (pair? loc) (exact->inexact (ly:moment-main (cdr loc))) 0)))
    (list (cons 'class (if (grob::has-interface grob 'rest-interface) "rs" "nh"))
          (cons 'data-bar (number->string bar))
          (cons 'data-pos (number->string pos)))))
${PAPER(width, height)}
\\layout {
  \\context { \\Score
    \\override NoteHead.output-attributes = #cp-attrs
    \\override Rest.output-attributes = #cp-attrs
    \\override StaffSymbol.output-attributes = #'((class . "staff"))
    \\override BarLine.output-attributes = #'((class . "barline"))
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
  const walk = async (d) => { for (const f of await readdir(d)) { const p = path.join(d, f); if ((await stat(p)).isDirectory()) await walk(p); else if (/\.(ly|ily|lyi)$/.test(f)) lys.push(p); } };
  await walk(work);
  for (const f of lys) await run(CONVERT, ['--edit', '--loglevel=ERROR', f]);
  // strip the source's own staff size so ours applies
  let src = await readFile(main, 'utf8');
  src = src.replace(/#\(set-global-staff-size[^)]*\)/g, '');
  await writeFile(main, src);
  const wrapper = path.join(path.dirname(main), '__web.ly');
  // Repeat the paper settings after the include: source-level paper blocks must
  // not crop orchestral staves or restore the original print headers.
  await writeFile(wrapper, `\\version "2.24.4"\n#(set-global-staff-size ${cfg.staff})\n${PRELUDE(cfg.width, cfg.height)}\n\\include "${path.basename(main)}"\n${PAPER(cfg.width, cfg.height)}\n`);
  const { stderr } = await run(LY, ['-dbackend=svg', '-dno-point-and-click', '-dcrop=#f', '-o', path.join(work, 'out'), wrapper], { cwd: path.dirname(main), maxBuffer: 1 << 26 });
  const svgs = (await readdir(work)).filter((f) => f.startsWith('out') && f.endsWith('.svg')).sort((a, b) => (Number(a.match(/-(\d+)\.svg$/)?.[1] ?? 0) - Number(b.match(/-(\d+)\.svg$/)?.[1] ?? 0)));
  if (!svgs.length) throw new Error(`${id}: LilyPond produced no SVG\n${stderr.slice(-2000)}`);
  const outDir = path.join(ROOT, 'docs/assets/data', id, 'sheet');
  const score = path.join(ROOT, 'docs/assets/data', id, 'score.json');
  const { stdout } = await run(PACK, ['--out', outDir, '--score', score, ...svgs.map((f) => path.join(work, f))], { maxBuffer: 1 << 20 });
  console.log(stdout.trim());

}


const ids = process.argv.slice(2).length ? process.argv.slice(2) : (await readdir(SRC)).filter((d) => !d.startsWith('.'));
await run(CARGO, ['build', '--release', '--locked', '--manifest-path', PACK_MANIFEST], { maxBuffer: 1 << 20 });
for (const id of ids) {
  try { await engrave(id); } catch (e) { console.log(`FAILED ${id}: ${e.message}`); process.exitCode = 1; }
}
