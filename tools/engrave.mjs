#!/usr/bin/env node
// Engrave licensed LilyPond sources into paged, glyph-deduplicated SVG packs.
// Noteheads/rests retain data-bar/data-pos; index.json contains full-system bar boxes.
//   node tools/engrave.mjs [id ...]        (default: configured, published scores)
// Needs LilyPond 2.24 at $LILYPOND or ~/.local/opt/lilypond-2.24.4/bin/lilypond,
// and Cargo at $CARGO or ~/.cargo/bin/cargo. See tools/sheetpack/README.md.
import { mkdir, readdir, readFile, writeFile, cp, rm, stat } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import os from 'node:os';

const run = promisify(execFile);
const ROOT = path.resolve(import.meta.dirname, '..');
const LY = process.env.LILYPOND ?? path.join(os.homedir(), '.local/opt/lilypond-2.24.4/bin/lilypond');
const PYTHON = process.env.ALIGN_PYTHON ?? '/tmp/contrapunctus-align-venv/bin/python';
const PREPARED = path.join(ROOT, 'tools/align/work');
const CONFIGS = path.join(ROOT, 'tools/align/pieces');
const CARGO = process.env.CARGO ?? path.join(os.homedir(), '.cargo/bin/cargo');
const PACK_MANIFEST = path.join(ROOT, 'tools/sheetpack/Cargo.toml');
const PACK = path.join(ROOT, 'tools/sheetpack/target/release/sheetpack');


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

// LilyPond reports an initial pickup at negative position before the first full
// bar. Give those real glyphs the preceding bar number; retain their positions.
const PRELUDE = (width, height) => `
#(define (cp-attrs grob)
  (let* ((loc (grob::rhythmic-location grob))
         (bar (if (pair? loc) (car loc) 0))
         (pos (if (pair? loc) (exact->inexact (ly:moment-main (cdr loc))) 0)))
    (list (cons 'class (if (grob::has-interface grob 'rest-interface) "rs" "nh"))
          (cons 'data-bar (number->string (if (< pos 0) (- bar 1) bar)))
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


async function engrave(id, options) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) throw new Error('Invalid recording id');
  const piece = JSON.parse(await readFile(path.join(CONFIGS, `${id}.json`), 'utf8'));
  await stat(path.join(ROOT, 'content/listen', `${id}.mjs`));
  const cfg = { staff: 18, width: 230, height: 297, ...piece.engraving };
  if (!options.prepared) {
    const preparation = piece.source.legacyRelative || piece.source.patches?.length || piece.extraction.notationProof
      ? 'score_events.py' : 'prepare.py';
    await run(PYTHON, [path.join(ROOT, 'tools/align', preparation), id], { maxBuffer: 1 << 26 });
  }
  const work = path.join(ROOT, 'cache/engrave', id);
  await rm(work, { recursive: true, force: true });
  await mkdir(work, { recursive: true });
  const prepared = path.join(PREPARED, `${id}-source`);
  await cp(prepared, work, { recursive: true });
  const main = path.resolve(work, piece.source.main);
  if (!main.startsWith(work + path.sep)) throw new Error('Main source escapes work directory');
  // Conversion already happened on disposable copies. Strip source-level sizes
  // and relocate definition includes before adding the rhythmic SVG attributes.
  const walk = async (dir) => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(file);
      else if (/\.(ly|ily|lyi)$/.test(entry.name)) {
        const text = (await readFile(file, 'utf8'))
          .replaceAll(prepared, work)
          .replace(/#\(set-global-staff-size[^)]*\)/g, '');
        await writeFile(file, text);
      }
    }
  };
  await walk(work);
  const wrapper = path.join(path.dirname(main), '__web.ly');
  const music = cfg.music
    ? `\\include "${path.join(work, '__definitions.ly')}"\n\\score { ${cfg.music} \\layout { } }`
    : `\\include "${path.basename(main)}"`;
  // Source-level paper blocks must not restore print headers or crop staves.
  await writeFile(wrapper, `\\version "2.24.4"\n#(set-global-staff-size ${cfg.staff})\n${PRELUDE(cfg.width, cfg.height)}\n${music}\n${PAPER(cfg.width, cfg.height)}\n`);
  const { stderr } = await run(LY, ['-dbackend=svg', '-dno-point-and-click', '-dcrop=#f', '-o', path.join(work, 'out'), wrapper], { cwd: path.dirname(main), maxBuffer: 1 << 26 });
  const svgs = (await readdir(work)).filter((f) => f.startsWith('out') && f.endsWith('.svg')).sort((a, b) => (Number(a.match(/-(\d+)\.svg$/)?.[1] ?? 0) - Number(b.match(/-(\d+)\.svg$/)?.[1] ?? 0)));
  if (!svgs.length) throw new Error(`${id}: LilyPond produced no SVG\n${stderr.slice(-2000)}`);
  const outDir = options.out ?? path.join(ROOT, 'docs/assets/data', id, 'sheet');
  const score = options.score ?? path.join(ROOT, 'docs/assets/data', id, 'score.json');
  const { stdout } = await run(PACK, ['--out', outDir, '--score', score, ...svgs.map((f) => path.join(work, f))], { maxBuffer: 1 << 20 });
  const indexFile = path.join(outDir, 'index.json');
  await writeFile(indexFile, JSON.stringify(JSON.parse(await readFile(indexFile, 'utf8'))));
  console.log(stdout.trim());

}


const args = process.argv.slice(2);
const ids = [];
const options = {};
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--prepared') options.prepared = true;
  else if (args[i] === '--score' || args[i] === '--out') {
    const key = args[i].slice(2);
    if (!args[i + 1]) throw new Error(`Missing --${key} path`);
    options[key] = path.resolve(args[++i]);
  } else if (args[i].startsWith('-')) throw new Error(`Unknown option ${args[i]}`);
  else ids.push(args[i]);
}
if (!ids.length) {
  const configured = (await readdir(CONFIGS)).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5)).sort();
  for (const id of configured) {
    try {
      await stat(path.join(ROOT, 'docs/assets/data', id, 'score.json'));
      ids.push(id);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
}
if (ids.length !== 1 && (options.out || options.score)) throw new Error('--score/--out require one recording');
await run(CARGO, ['build', '--release', '--locked', '--manifest-path', PACK_MANIFEST], { maxBuffer: 1 << 20 });
for (const id of ids) {
  try { await engrave(id, options); }
  catch (e) { console.error(`FAILED ${id}: ${e.message}`); process.exitCode = 1; }
}
