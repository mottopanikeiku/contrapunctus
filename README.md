# Contrapunctus

An illustrated atlas of Western art music, from Bach to the present: composer portraits with technical listening notes, playable score examples, the origins of the forms, and the paintings and poems that share their world.

**Site:** https://mottopanikeiku.github.io/contrapunctus/

## The Concert Hall

A continuous concert from Couperin and Bach to Stravinsky, Ives and Bartók: 55 real recordings streamed from Wikimedia Commons, in order of the composers' births. The music keeps playing as you move through the site (one persistent player, a gilded now-playing bar, pause any time).

- **Views of the music**: the engraved **score** lighting up bar by bar (Bach, Beethoven 5, Schubert, Satie; LilyPond engraving aligned to the recording), a gold **note-roll** by voice, the **orchestra** on its stage with each section glowing as its part sounds, the piece's **form** as an arc diagram joining every return of its material, and the live **sound** (spectrogram, keyboard, pitch wheel, key-aware note names). Press F to let any view fill the hall.
- **Notes timed to the recording**, each with *How we know* (score-aligned, measured, documented or general), and **the joins**: 224 dissected transitions between sections, appearing as gilded cards as the music reaches them, marked ◆ on the timeline.
- **This recording**: a provenance dossier for each recording (documented / inferred / disputed, alternatives, sources, how to cite).

## The Web of Influence

264 sourced connections between the 60 composers and 115 painters, poets, philosophers, teachers and traditions, laid out across four centuries. Touch a portrait to light what flowed in and out; open a connection for the claim, its evidence status and sources, the two passages engraved side by side and playable, or the painting beside the music. Seven motif threads (Dies irae, B–A–C–H, the Tristan chord, the lament bass, La Folia, the Ode to Joy, Frère Jacques) can be traced as one golden path through time.

## What's inside

- **60 composers** in seven chapters, from Couperin and Bach to Saariaho and Adès; extended portraits of Mahler, Rachmaninoff, Ravel and Prokofiev.
- Each page: a life with margin notes, a technical anatomy of the style (harmony, line, rhythm, orchestration, form), a listening path through the works, **playable engraved score examples**, sister arts (public-domain paintings, prints and poems with new translations), recordings and lineage.
- **Before Bach** — the origins: Pythagoras's ratios, chant, Guido's staff, organum, the ars nova, Renaissance polyphony, the violin family, the birth of opera, figured bass. Includes an interactive harmonic series.
- **A modern textbook**: numbered chapters and figures, key ideas, questions to take away, further reading (verified bibliographies for every composer, era and topic), citation in Chicago and BibTeX, a 120-term **glossary** with popovers and “hear it” moments, **Sources & method** with downloadable recording data, the **Return Lab** (a passage beside its return), and search (press /).
- **The Workshop** — eighteen lessons from species counterpoint to spectralism, with a tuning laboratory that plays pure and tempered intervals.
- **Lifelines** — every lifespan on one axis against history and the other arts; **Sister Arts** — every image hung salon-style.

## Structure

| Path | What |
| --- | --- |
| `content/composers/*.mjs` | One file per composer (life, sound, works, score examples in ABC, sister arts, recordings, lineage) |
| `content/eras/*.mjs` | The seven chapters |
| `content/pages/*.mjs` | Long-form pages: Origins, Workshop |
| `content/site.mjs` | Home page copy, hero slides, timeline events |
| `src/build.mjs` | Static generator and final asset optimisation → `docs/` |
| `src/assets/{js,css,vendor}/` | Canonical readable browser sources; edit these, never the minified copies in `docs/assets/` |
| `tools/optimize/` | Responsive pictures, cached AVIF/WOFF2 generation, minification, critical CSS and revisioned service-worker generation |
| `tools/art.mjs` | Wikimedia Commons search / check / fetch (images re-encoded to WebP) |
| `tools/validate.mjs` | Schema, links, ABC notation and image checks for content files |
| `content/listen/*.mjs` | One file per recording: metadata, formal sections and timed cues (see `LISTENING.md`) |
| `tools/audio.mjs`, `tools/analyze.py` | Find Commons recordings; analyse them (librosa) for cue timing |
| `tools/barcheck.mjs` | Checks every bar of every score example against its time signature |
| `content/influence/*.json` | The Web of Influence: edges, figures, threads (validated by `tools/validate-influence.mjs`) |
| `content/glossary.mjs`, `content/bibliography/*.json` | Glossary and further reading |
| `content/dossiers/*.json`, `content/returnlab/*.json` | Recording provenance; Return Lab comparisons |
| `tools/align/`, `tools/engrave.mjs`, `tools/sheetpack/` | Score alignment (Sync Toolbox), LilyPond engraving, and the Rust packer that splits scores into lazily loaded pages with precomputed bar boxes |
| `AUTHORING.md`, `CONTRACTS.md` | House style; data schemas |

## Build

```sh
npm ci                     # install the locked build/measurement dependencies (Node 22.12+)
node tools/art.mjs fetch     # download any newly referenced Commons images (needs ffmpeg)
node src/build.mjs           # generate and optimise docs/, including sw.js
node tools/perf-preview.mjs 8080 docs  # gzip preview matching GitHub Pages
```

GitHub Pages serves `docs/` from `main`.

The final build step publishes responsive pictures at 160/480/960 pixels and the original width, without upscaling. Existing WebP renditions are retained. An AVIF rendition is published only when it is smaller than its WebP counterpart and passes a 40 dB RGB PSNR screen with unchanged alpha. AVIF-capable browsers receive a mixed AVIF/WebP candidate set, using the winning format at each width; an all-WebP source remains the fallback. Same-path AVIF twins therefore exist only for winning renditions, not for blind extension replacement in Hall data. Decisions and byte/quality measurements are written to `cache/optimize/images.json`. Image encodes, quality measurements and font subsets are cached by their inputs under `cache/optimize/`; keep that directory between builds. A first build downloads pinned, integrity-checked upstream font sources; subsequent builds reuse them. The generated WOFF2 files and SIL Open Font Licences are self-hosted under `docs/assets/fonts/`.

Font subsets retain Latin, Latin-1, Extended-A, site-used punctuation and musical symbols. Common Latin, extended Latin and other scripts use separate Unicode ranges, derived from published HTML, site-owned JavaScript and JSON. Encoded search postings and third-party notation vectors are not display text; indexed page text is already included through HTML. The original font Unicode coverage is preserved so formerly system-rendered symbols keep their appearance. CSS-used weight ranges are kept as variable fonts where applicable. Two first-viewport faces are preloaded; `font-display: swap` and metric-adjusted local fallbacks avoid blocking text. Index and composer first-viewport styles are inlined; the full stylesheets still load and the persistent router removes outgoing critical styles on navigation.

`docs/sw.js` is generated from content-hash revisions. It precaches the core router/player/Hall CSS and JavaScript, core fonts, the compact programme, and the index/Hall shell. Other modules, vendor code and non-Latin font ranges enter the immutable revision cache on demand. HTML is network-first with an offline cached fallback; other data uses stale-while-revalidate. Images and score SVG pages are cache-first, with separate 300-entry LRU limits. Cross-origin resources, audio and Range requests always bypass the worker. Updates wait for the old app to close rather than interrupting music. Offline playback of streamed recordings is intentionally not provided.

For repeatable performance measurements, run the gzip preview on a free port and use `CHROME_PATH=/path/to/chrome node tools/optimize/measure.mjs after http://127.0.0.1:8080`. It serialises mobile and desktop Lighthouse runs for the seven acceptance pages and saves raw JSON plus a byte/request breakdown under `cache/performance/after/`. `tools/optimize/browser-checks.mjs` and `navigation-checks.mjs` expose helpers for the browser tool: isolated, reduced-motion screenshots at 1440×900/390×844, pixel diffs, persistent-player module navigation and genuine service-worker offline navigation. Measurement artifacts stay in `cache/`, not the published site.

Images are public-domain or freely licensed reproductions from Wikimedia Commons; see `docs/credits.html`. Notation is engraved client-side with [abcjs](https://abcjs.net) (MIT).
