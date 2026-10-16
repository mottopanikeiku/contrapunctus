# Contrapunctus

An illustrated atlas of Western art music, from Bach to the present: composer portraits with technical listening notes, playable score examples, the origins of the forms, and the paintings and poems that share their world.

**Site:** https://mottopanikeiku.github.io/contrapunctus/

## What's inside

- **60 composers** in seven chapters, from Couperin and Bach to Saariaho and Adès; extended portraits of Mahler, Rachmaninoff, Ravel and Prokofiev.
- Each page: a life with margin notes, a technical anatomy of the style (harmony, line, rhythm, orchestration, form), a listening path through the works, **playable engraved score examples**, sister arts (public-domain paintings, prints and poems with new translations), recordings and lineage.
- **Before Bach** — the origins: Pythagoras's ratios, chant, Guido's staff, organum, the ars nova, Renaissance polyphony, the violin family, the birth of opera, figured bass. Includes an interactive harmonic series.
- **The Workshop** — eighteen lessons from species counterpoint to spectralism, with a tuning laboratory that plays pure and tempered intervals.
- **Lifelines** — every lifespan on one axis against history and the other arts; **Sister Arts** — every image hung salon-style.

## Structure

| Path | What |
| --- | --- |
| `content/composers/*.mjs` | One file per composer (life, sound, works, score examples in ABC, sister arts, recordings, lineage) |
| `content/eras/*.mjs` | The seven chapters |
| `content/pages/*.mjs` | Long-form pages: Origins, Workshop |
| `content/site.mjs` | Home page copy, hero slides, timeline events |
| `src/build.mjs` | Static generator (no dependencies) → `docs/` |
| `tools/art.mjs` | Wikimedia Commons search / check / fetch (images re-encoded to WebP) |
| `tools/validate.mjs` | Schema, links, ABC notation and image checks for content files |
| `tools/barcheck.mjs` | Checks every bar of every score example against its time signature |
| `AUTHORING.md` | House style and schema for contributors |

## Build

```sh
node tools/art.mjs fetch     # download any newly referenced Commons images (needs ffmpeg)
node src/build.mjs           # write docs/
python3 -m http.server -d docs 8080
```

GitHub Pages serves `docs/` from `main`.

Images are public-domain or freely licensed reproductions from Wikimedia Commons; see `docs/credits.html`. Notation is engraved client-side with [abcjs](https://abcjs.net) (MIT).
