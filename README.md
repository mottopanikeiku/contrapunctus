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
| `src/build.mjs` | Static generator (no dependencies) → `docs/` |
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
node tools/art.mjs fetch     # download any newly referenced Commons images (needs ffmpeg)
node src/build.mjs           # write docs/
python3 -m http.server -d docs 8080
```

GitHub Pages serves `docs/` from `main`.

Images are public-domain or freely licensed reproductions from Wikimedia Commons; see `docs/credits.html`. Notation is engraved client-side with [abcjs](https://abcjs.net) (MIT).
