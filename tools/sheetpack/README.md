# Sheetpack

`sheetpack` converts LilyPond 2.24 SVG pages into independently loadable score pages and a bar-coordinate index. The hall can load the visible page and position a full-system highlight without measuring noteheads in the browser.

## Re-engrave the website scores

From the repository root:

```sh
node tools/engrave.mjs
# Or select a piece:
node tools/engrave.mjs beethoven-5-first
```

The engraving script builds the Rust binary with the checked-in Cargo lockfile, runs LilyPond, and writes `docs/assets/data/<id>/sheet/`. It passes the piece’s `score.json` to the packer so every aligned bar has a box, including silent bars without a marked glyph. It uses `$LILYPOND` or `~/.local/opt/lilypond-2.24.4/bin/lilypond`, and `$CARGO` or `~/.cargo/bin/cargo`. Install Rust with [rustup](https://rustup.rs/) if Cargo is absent.

LilyPond now emits separate pages rather than a single tall page. Piano pages are 230 × 297 mm; Beethoven’s orchestral pages are 260 × 360 mm. The final paper settings override the source editions’ paper widths, margins and headers; in particular, the orchestral staves must not extend outside the page’s viewBox. The source files under `tools/align/sources/` are not modified: conversion and engraving take place under `cache/engrave/`.

## Pack existing LilyPond pages

```sh
~/.cargo/bin/cargo build --release --locked --manifest-path tools/sheetpack/Cargo.toml

tools/sheetpack/target/release/sheetpack \
  --out docs/assets/data/satie-gymnopedie-1/sheet \
  --score docs/assets/data/satie-gymnopedie-1/score.json \
  cache/engrave/satie-gymnopedie-1/out.svg
```

Supply **every page in page order**. Shell expansion of `out-*.svg` puts page 10 before page 2; the engraving script sorts numerically. Inputs must be unstacked LilyPond SVGs, not the retired `sheet.svg` files. The CLI validates each input’s marked bars before replacing an existing output directory. The optional `--score FILE` also requires every `bars[].n` in that alignment file to resolve. An unresolved bar fails the pack without replacing its predecessor. A successful replacement removes stale pages from an earlier, longer pack.

```sh
~/.cargo/bin/cargo test --release --locked --manifest-path tools/sheetpack/Cargo.toml
```

The tests cover small glyph-scale transforms, two-decimal coordinates, glyph reuse, retained rhythmic attributes, page-specific definition IDs, full-system bar extents, a bar split across systems, derived silent bars within and across pages, consecutive silent bars before a repeat barline, deterministic output, stale-page removal, and preserving the previous pack when an input or required bar fails. Whiteout regressions cover inherited and explicit white, rounded backgrounds, independently painted reused glyphs, painter order, and excluding paper-coloured masks from barline geometry.

## Output contract

Each piece has `p1.svg` … `pN.svg` and `index.json`:

```json
{
  "pages": [
    { "src": "p1.svg", "w": 145.43, "h": 187.79 }
  ],
  "bars": {
    "1": [[0, 15.23, 7.69, 25.00, 13.30]],
    "2": [[0, 40.23, 7.69, 20.00, 13.30]]
  },
  "derived": ["2"]
}
```

The numbers above illustrate the schema, not a particular score’s geometry.

- `src` is relative to the directory containing `index.json`.
- `w` and `h` are the page viewBox’s width and height, not CSS pixels.
- Bar keys retain LilyPond’s `data-bar` strings. Each box is `[pageIndex, x, y, width, height]`, with a **zero-based** page index and coordinates in that page’s viewBox units.
- A bar split between systems or pages has several boxes. Render all boxes belonging to the visible page.
- Boxes extend vertically from the top line of the highest staff to the bottom line of the lowest staff in the system, including silent staves. They do not expand for ledger notes, dynamics or instrument labels.
- Horizontal edges use the opening and closing barlines. If an edge cannot be identified between neighbouring bars’ notes, it falls back to the note extents plus one staff space, clipped to the system’s horizontal extent.
- Noteheads and rests retain `class="nh"` or `class="rs"`, `data-bar`, and `data-pos` on a `<use>` or `<path>`. `data-pos` is preserved exactly; it is a rhythmic position in whole notes, not a geometric coordinate and not a recording timestamp.
- `derived` lists bars without a marked source glyph whose boxes were recovered from neighbouring bars and source barlines. It is omitted when empty. One silent bar between two bars in the same system fills their horizontal gap. Consecutive silent bars use intervening barlines; adjacent strokes of double/repeat barlines are one boundary. At a system edge, a missing barline permits the remaining gap to the system end for one bar, never equal-width subdivision of several bars.

Ordinary black SVG ink uses `currentColor`. LilyPond's whiteout backgrounds become `var(--paper, #fbf5e6)`, **not ink**: they follow the hall's paper colour and have a cream fallback in standalone SVGs. Other explicit source colours remain explicit. Inline the SVG to inherit the hall’s ink/paper colours and to target noteheads/rests; loading it through `<img>` does not expose those elements to the parent document. Each page is self-contained. Definition IDs are namespaced by piece and page so several inline pages can coexist. The root retains its viewBox but has no fixed width or height.

## Packing and geometry

The Rust XML parser uses `roxmltree`; `svgtypes` parses paths, colours and transform matrices. Glyph scales are applied **before** rounding coordinates to two decimal places: rounding LilyPond’s `scale(0.004,-0.004)` directly would erase the glyphs. Repeated outlines become page-local `<defs>` and `<use>` elements, with paint retained independently on each use. Opaque themed staff rules, barlines, stems, beams and ledger lines with the same paint are combined into paths **only within a paint-order layer**. Whiteout or other source colours end a layer so earlier ink stays behind the background and later annotations remain above it. Inherited `color`, `fill`, and `stroke` survive group flattening. Rounded stems and ledger lines become round-capped strokes without changing their paint. Comments, metadata, titles, source links and fixed dimensions are removed; text annotations and musical symbols remain.

The engraver tags staff symbols and barlines for geometry extraction. Sheetpack recognises five equally spaced staff rules and uses the system’s opening vertical barline to join its staves. It then groups marked glyphs by bar and system and selects the surrounding barlines. Older untagged LilyPond pages are also accepted: full-staff rectangular barlines are identified geometrically. This is an engraving-specific packer, not a general SVG optimiser; unsupported drawing elements fail rather than disappearing silently.

For visual inspection, serve the repository, open `docs/assets/data/<id>/sheet/p1.svg`, and draw rectangles from `index.json` in the SVG’s coordinate system. Check an opening bar, an interior bar, a bar in the next system and every derived bar. Compare every original `data-bar` with the index, and every aligned `score.json` bar, before deleting a legacy monolithic SVG.

## Verified website packs (16 October 2026)

Sizes are bytes. “Before” is the retired monolithic `sheet.svg`; “after” is every paged SVG plus `index.json`. Gzip uses level 9, compressed separately per asset and summed, rather than compressing the whole directory as one stream.

| Piece | Pages | Indexed bars | Raw before → after | Gzip before → after |
| --- | ---: | ---: | ---: | ---: |
| Bach, BWV 869 fugue | 4 | 76 | 1,690,125 → 651,359 | 129,925 → 132,413 |
| Satie, Gymnopédie No. 1 | 1 | 47 | 316,550 → 95,399 | 21,052 → 18,620 |
| Schubert, D 899 No. 3 | 7 | 86 | 2,292,898 → 875,236 | 184,426 → 171,349 |
| Beethoven, Symphony No. 5/I | 16 | 502 | 10,900,158 → 3,586,528 | 574,963 → 549,584 |

All 16,486 marked noteheads/rests retain their source class, bar and rhythmic position. Every source-marked bar and every distinct aligned `score.json` bar resolves. Beethoven’s `derived` list is `["57","123","124","301","389"]`; bars 123–124 use the two source barline intervals at the end of page 4. No aligned bars remain unresolved.

Chromium measured the source staves against all 711 boxes on 28 pages (93 systems), with no full-system extent or marked-glyph containment failures. Source/packed overlay screenshots were inspected at 1440 × 900 and 390 × 844; all five derived bars were also inspected. The throwaway inspection page was removed. The locked release test suite passed all nine tests, and `node --check tools/engrave.mjs` passed.

Bach’s aggregate gzip total increases by 1.9% because the pages compress independently; its raw size falls by 61.5%, and the hall no longer needs the whole score in a single request.

