# Contrapunctus

An illustrated atlas of Western art music from plainchant to the present: a concert of historical and openly licensed recordings in the order the composers were born, chapters on eighty composers built from their letters and memoirs, scores that follow the recordings bar by bar, and the paintings and poems connected with the music.

**Site:** https://mottopanikeiku.github.io/contrapunctus/

## The Concert Hall

One continuous concert, from Gregorian chant, Hildegard and Machaut to Messiaen, Britten, Bernstein and Boulez: 386 recordings in the order the composers were born, about 48½ hours of music, streamed from Wikimedia Commons and the Internet Archive. One song, extracted from a CC BY-SA Commons video, is served by the site itself. Another 63 recordings (historical takes, comparisons) sit outside the running order, for 449 in all. One player persists across the site.

- **Evenings:** eight curated evenings (a first evening, Paris 1888–1913, Vienna, composers as performers, late at night, the first recordings, opera, music in America). An evening plays its recordings in order and stops. *A piece at random* (`hall.html#surprise`) plays one recording from anywhere in the concert.
- **Links and kept moments:** `hall.html#<id>` opens a recording, `#<id>&t=<seconds>` a moment within it, `#programme-<id>` an evening. *Link to this moment* copies the address; *Keep this moment* saves it to a list in the browser, shown at the top of the programme.
- **Views of the music:** the engraved score lighting up bar by bar where an aligned, independently reviewed score exists (61 recordings), a note-roll by voice, the orchestra on its stage, the form as an arc diagram, and the sound (spectrogram, keyboard, pitch wheel). *This section* names the current passage and the next. F enlarges any view.
- **Listening notes:** 3,344 timed notes written from the score and from documents (letters, premières, recording sessions), each with its evidence, and 1,173 joins between sections, marked ◆ on the timeline. Long works carry notes throughout, at most one per 40 seconds.
- **Recording:** a provenance dossier for every recording (documented, inferred or disputed fields, alternatives, sources, citation).

## Composers and works

- **80 composers** in seven chapters, from Strozzi, Couperin and Bach to Saariaho and Adès. Each life is built from documented events and the composer’s own words; most quote letters, diaries or memoirs.
- Each chapter has the life with margin notes, the sound (harmony, line, rhythm, orchestration, form), a selection of works, playable engraved score examples, sister arts (public-domain paintings, prints and poems with new translations), recordings and influences.
- **206 work pages** (`works/<composer>-<work>.html`) gather every recording of a piece, with its notes and joins. **Every work** (`works/index.html`) lists them by chapter and composer and filters by forces.
- **Where to hear it:** for 37 composers, recordings on official channels (label pages and the artists’ or labels’ own YouTube and Spotify uploads, verified through oEmbed). For composers with no recording published before 1963 that the Hall can stream, such as Ligeti, Reich, Saariaho, Xenakis or Glass, these are the only recordings the site links to.

## Other parts of the site

- **The Web of Influence:** 343 sourced connections between the 80 composers and the painters, poets, teachers, performers and traditions they drew on. Each connection gives its account, evidence status and sources, with the two passages engraved side by side and playable, or the painting beside the music. Seven recurring melodies and motifs (Dies irae, B–A–C–H, the Tristan chord, the lament bass, La Folia, the Ode to Joy, Frère Jacques) can be followed in date order.
- **Compare performers:** 31 comparisons of the same music in two to five recordings, among them composers playing their own works (Rachmaninoff, Grieg, Ravel conducting *Boléro*), Nikisch’s 1913 Beethoven 5, Paderewski, de Pachmann, Cortot, Caruso and Chaliapin. One transport switches recording at the same musical point (chroma alignment, `tools/compare.py`), with tempo maps and notes.
- **The Map:** 1,742 sourced places in the lives of the 80 composers on an engraved map of Europe with a New York inset, year by year from 1680 to 1990.
- **Guided journeys:** six narrated sequences (Vienna 1900, the Dies irae, the growth of the symphony, Paris 1900–1913, the recorded century, Rachmaninoff in exile) that play through the concert’s recordings with paintings, scores, places and connections.
- **Before Bach** (chant, notation, organum, the ars nova, polyphony, instruments, early opera, figured bass, with an interactive harmonic series); **the Workshop** (eighteen lessons from species counterpoint to spectralism, with a tuning laboratory); **the Return Lab** (a passage beside its return); a 120-term **glossary**; **Lifelines**; **Sister Arts**; **Sources & method** with downloadable recording data; site search (press /); and a **Guide** of thirteen short tours that highlight a real control on each page (authored in `src/guide-tours.mjs`).

## House style

`AUTHORING.md` sets the voice: a programme book or scholarly reference. History is told in the past tense, musical description names what can be checked in the score, and people are quoted in their own words. No machine language, defensive hedging, personified instruments, closing summary lines, metaphor titles or invitations to the reader. `tools/validate.mjs` enforces the checkable parts. Every quotation and fact traces to a source in the cue’s `evidence` or in `content/plan/research/prose/<slug>.md`, and each rewritten page carries an independent fact-check section there.

## Structure

| Path | What |
| --- | --- |
| `content/composers/*.mjs` | One file per composer (life, sound, works, score examples in ABC, sister arts, recordings, lineage) |
| `content/eras/*.mjs`, `content/pages/*.mjs` | The seven chapters; Before Bach and the Workshop |
| `content/listen/*.mjs`, `content/dossiers/*.json` | One file per recording (metadata, sections, timed notes; see `LISTENING.md`) and its provenance dossier |
| `content/relations/*.json`, `content/returnlab/*.json`, `content/compare/*.json`, `content/journeys/*.json` | Formal returns, Return Lab studies, performer comparisons, guided journeys |
| `content/influence/*.json`, `content/geo/*.json`, `content/elsewhere/*.json` | The Web of Influence, the Map’s places, recordings on other services |
| `content/site.mjs`, `content/programmes.mjs`, `content/glossary.mjs`, `content/bibliography/*.json`, `content/precursors.mjs`, `content/routes.mjs`, `content/roster.mjs` | Home and About copy, evenings, glossary, further reading, the composers before Bach, listening routes, the roster |
| `content/art.json`, `content/audio.json` | Cached Commons image metadata and resolved audio streams (generated) |
| `content/plan/` | Publication reviews, the baseline list and research ledgers |
| `src/build.mjs` and `src/*.mjs` | Static generator → `docs/` |
| `src/assets/{js,css,vendor}/` | Readable browser sources; `docs/assets/` holds the minified copies |
| `tools/validate.mjs`, `tools/validate-influence.mjs`, `tools/barcheck.mjs` | Schema, link, notation, image and house-style checks |
| `tools/art.mjs`, `tools/audio.mjs`, `tools/analyze.py` | Commons images; Commons and Internet Archive recordings and their analysis; `audio.mjs derive` extracts the audio of an openly licensed Commons video |
| `tools/align/`, `tools/score.mjs`, `tools/engrave.mjs`, `tools/sheetpack/` | Score alignment (Sync Toolbox), LilyPond engraving and the score page packer |
| `tools/optimize/` | Responsive pictures, AVIF and WOFF2 generation, minification, critical CSS, service worker, checks and measurement |

## Build

```sh
npm ci                                 # Node 22.12+
node tools/art.mjs fetch               # newly referenced Commons images (needs ffmpeg)
node src/build.mjs                     # generate and optimise docs/, including sw.js
node tools/perf-preview.mjs 8080 docs  # gzip preview with byte ranges, as GitHub Pages serves it
npm run validate                       # every content file
node tools/optimize/check.mjs          # static checks on docs/
```

GitHub Pages serves `docs/` from `main`.

## Performance notes

- **Images:** responsive WebP renditions at 160, 480, 750 and 960 px and the original width, never upscaled (`RENDITIONS` in `tools/optimize/pictures.mjs`). The 750 step serves full-width paintings on common phones that would otherwise download the 960 rendition. An AVIF rendition is published only when it is smaller and passes a 40 dB PSNR screen. Encodes and measurements are cached under `cache/optimize/`; keep that directory between builds.
- **Fonts:** self-hosted static subsets (Cormorant Garamond, Cormorant SC, EB Garamond, Noto Music) split into a core and an on-demand extended range; `tools/optimize/audit-fonts.mjs` records the weights the site uses. First-viewport faces are preloaded and declared inline; the shared `fonts.css` is applied after the first contentful paint. Headings that must not reflow (the home entrance, the Influence title, large music glyphs) embed exact-text subsets.
- **CSS and HTML:** render-blocking CSS is extracted per page type; the rest loads asynchronously. Sources & method loads each recording dossier on demand from `assets/dossiers/<id>.json`.
- **Service worker** (`docs/sw.js`, generated): precaches the player, the Hall and core fonts; HTML is network-first with an offline fallback; images and score pages are cache-first; audio and byte-range requests bypass it.
- **Measurement:** `CHROME_PATH=… node tools/optimize/measure.mjs <label> http://127.0.0.1:8080` runs Lighthouse on mobile and desktop for the key pages (`PAGES`, `MODES` select cases; `THROTTLING_METHOD=devtools` uses real throttling) and writes to `cache/performance/<label>/`. `tools/optimize/diagnose.mjs` records layout-shift sources and long tasks; `tools/optimize/browser-cli.mjs` captures and diffs screenshots and checks offline navigation; `tools/optimize/guide-checks.mjs` exercises the guided tours.

## Licences

Images are public-domain or freely licensed reproductions from Wikimedia Commons; see `docs/credits.html`. Notation examples are engraved in the browser with [abcjs](https://abcjs.net) (MIT). Aligned scores come from public-domain, CC0, CC BY and CC BY-SA encodings (Mutopia, OpenScore, the Fryderyk Chopin Institute’s Chopin First Editions Online); each keeps its source’s licence and credit line, shown under the score in the Hall and on the Sources page. Fonts are under the SIL Open Font Licence (`docs/assets/fonts/`).
