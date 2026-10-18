# Data contracts (v3)

Each concern lives in its own file, so editors never collide. The generator (`src/build.mjs`) merges them.

| Concern | File | Owner |
| --- | --- | --- |
| Recording metadata, sections, listening notes | `content/listen/<id>.mjs` | cue editors |
| Recording dossier (provenance, rights) | `content/dossiers/<id>.json` | dossier editors |
| Formal relations (repeats, returns) | `content/relations/<id>.json` | form editor |
| Score notes aligned to the recording | `docs/assets/data/<id>/score.json` | alignment editor |
| Level trace (generated) | `docs/assets/listen/<id>.json` | `tools/audio.mjs analyze` |

## Wording rules (site-wide)

- Score-derived notes are labelled **"From the score · timing aligned to this recording"**, with a timing status of **provisional** (automatic alignment, not yet checked by ear) or **reviewed** (a named listener checked it against the score).
- Nothing is called "exact". Machine estimates are called estimates.
- A level trace is "relative level within this recording". It is never loudness, dynamics, or a comparison between recordings.
- No machine-generated chord or Roman-numeral labels are published. Chord spans appear only where an editor wrote them (`basis: "editorial"`).

## Listening notes: `content/listen/<id>.mjs` → `cues[]`

```js
{
  t: 88,                       // display time in seconds (required unless `bar` is given)
  bar: { n: '22', occ: 2 },    // OPTIONAL, for score-aligned pieces only: display at this performed bar occurrence
  kind: 'music' | 'form' | 'listen' | 'life' | 'world',
  title, text,                 // text ≤ 55 words
  basis: 'score-aligned' | 'score-proportion' | 'audio-feature' | 'documented' | 'general',
  precision: 'moment' | 'passage',   // 'moment': the event is within about ±2 s of t; 'passage': describes the surrounding stretch
  evidence: '…',               // shown to readers under "How we know"; plain English, no jargon dumps
}
```

- `music`, `form` and `listen` notes are the primary lane. `life` and `world` notes are context: shown collapsed, never replacing a musical note.
- Only `basis: 'score-aligned'` or a strong `audio-feature` (a silence, a large level jump, a strong boundary) may use `precision: 'moment'`. Everything else is `passage`, and its wording must stay true if it appears 10 seconds early or late ("In this stretch…", "Soon…", "Through this section…").
- Never name an instrument entrance, a sung word or a bar number at a moment unless the basis supports it.

## Formal relations: `content/relations/<id>.json`

```json
{
  "id": "beethoven-5-first",
  "relations": [
    {
      "kind": "literal repeat" | "varied return" | "tonal return" | "transposed return",
      "a": [0.0, 101.5], "b": [101.5, 203.0],
      "label": "Exposition repeat",
      "basis": "score structure + audio recurrence (diagonal similarity 0.92, sustained 98 s)",
      "status": "provisional" | "reviewed"
    }
  ],
  "candidatesRejected": "short note on recurrences found but not published, and why"
}
```

An empty `relations` array is a valid, honest answer.

## Score notes aligned to a recording: `docs/assets/data/<id>/score.json`

```json
{
  "id": "satie-gymnopedie-1",
  "status": "provisional",
  "review": { "by": null, "date": null, "scope": "" },
  "source": { "title": "…", "edition": "…", "encoder": "…", "url": "…", "license": "Public Domain", "licenseUrl": "…" },
  "tuningHz": 440.0,
  "method": "LilyPond MIDI → event table; Sync Toolbox multiscale DTW (chroma + DLNCO); anchors at …",
  "voices": [ { "id": "bass", "name": "Bass" } ],
  "bars": [ { "n": "1", "occ": 1, "t": 0.52 } ],
  "notes": [ [0.52, 1.80, 43, 0, 0] ],
  "repeats": "plain-English performed order, e.g. bars 1–39, then 1–31, 40–78",
  "chords": [ { "t0": 0.52, "t1": 3.1, "label": "Gmaj7", "basis": "editorial" } ]
}
```

- `notes` rows are `[onset_s, duration_s, midi, voiceIndex, barIndex]`, where `barIndex` indexes `bars` (the performed occurrence).
- `voices` are named only when the encoding really distinguishes them (separate staves or LilyPond voices). A MIDI channel or a register range is never presented as a contrapuntal voice.
- Reproducible publication uses `node tools/score.mjs <id> [--publish]` and the recording-specific `tools/align/pieces/<id>.json`. Only an existing `content/listen/<id>.mjs` is eligible. Source URLs and SHA-256 digests, selected movement/variables, sounding-pitch corrections, performed bar order and endpoint inspection windows are explicit inputs; originals remain unchanged.
- Publication requires a primary unique-attack median ≤0.15 s, first/middle/last onset deviation ≤0.5 s, every nonempty eight-second local-normalised median ≤0.3 s, no collapsed notes/attacks, and a valid rounded score contract. A numeric pass never overrides an observed wrong edition, pitch or repeat order and never implies aural review.
- Fresh candidate/check JSON and pitch-energy PNG overlays remain in `tools/align/work/`. Without `--publish`, public files are untouched; with it, engraving and sheetpacking must succeed before replacing `score.json` and `sheet/`. Notehead/rest `data-bar` and `data-pos` retain printed score coordinates; `bars[].occ` distinguishes repeated traversals. Source licences remain distinct from recording rights.

## Recording dossier: `content/dossiers/<id>.json`

```
Field = { "value": any, "status": "documented"|"inferred"|"disputed"|"unknown"|"not applicable", "sourceIds": [], "note": "", "alternatives"?: [{ "value", "sourceIds" }] }
```

```json
{
  "id": "…",
  "work": { "title": "…", "catalogue": "…", "movement": "…", "version": Field },
  "performers": Field,
  "session": { "date": Field + { "precision": "day"|"month"|"year"|"range"|"approximate"|null }, "place": Field },
  "carrier": { "label": Field, "catalogue": Field, "matrixTakeSides": Field },
  "transfer": { "credits": Field, "date": Field, "processing": Field },
  "digital": { "streamUrl": "…", "sourceChain": ["s1"], "format": "…", "durationSeconds": 0 },
  "rights": { "composition": Field, "recording": Field, "creditLine": "…", "licenseUrl": "…" },
  "sources": [ { "id": "s1", "title": "…", "url": "…", "locator": "…", "accessed": "YYYY-MM-DD" } ],
  "editorial": { "editor": "Contrapunctus research desk", "revised": "YYYY-MM-DD" }
}
```

`performers.value` is `[{ "name", "role" }]`.

Display wording:

| Status | Shown as |
| --- | --- |
| documented | "Documented — stated in the cited source." |
| inferred | "Inferred — estimated from the evidence; not explicitly documented." |
| disputed | "Disputed — sources disagree; alternatives are shown below." |
| unknown | "Unknown — not established from the sources consulted." |
| not applicable | "Not applicable — this field does not apply to this recording." |

Never turn an upload date into a session date. Use `not applicable` only when a field truly cannot apply (a born-digital session has no matrix number). Never use it for something nobody looked up.

## Listening sections: `content/listen/<id>.mjs` → `sections[]`

`sections[]` entries use `{ t, label, m, mNote? }`. `t` is the start time in seconds; `label` names the section; `m` identifies its musical material for the Concert Hall architecture view. Use short letters (`A`, `B`, `C`), with U+2032 primes for varied returns (`A′`, `A″`); reuse a letter only when the material genuinely returns, and choose a distinct letter when the relation is uncertain. Structural labels may be `Intro`, `Coda`, `Link`, `Cadenza` or `Dev`; variation sets use `Theme`, `Var 1`, `Var 2` and so on. Optional `mNote` names a significant change in a return in no more than 12 words, for example ‘theme in the tonic, now for full orchestra’. These editorial labels derive from the work’s form and the file’s cues and transitions; they do not claim new timing precision.

When one existing section spans several variations, use a range such as
`Var 3–5`; do not invent individual boundaries. Structural material labels
describe functions, not return families. Only letter/prime families imply
thematic return arcs.

Both `m` and `mNote` are optional strings in the schema; an omitted material
label does not establish a return. `tools/validate.mjs` checks their types and
the twelve-word limit for `mNote` independently of the recording metadata.

## Transitions: `content/listen/<id>.mjs` → `transitions[]`

What the composer does at the joins between sections: how one section is left and the next arrived at. Shown as "How it's joined" on the Listen page, marked on the map and in the score views.

```js
{
  id: 'into-development',                 // unique within the file
  title: 'Two notes become a cliff edge', // ≤ 8 words
  from: 'Exposition',                     // section names as listed in `sections` (label prefix is enough)
  to: 'Development',
  at: { bar: { n: '125', occ: 1 } } | { t: 101.5 },   // the join point: bar-anchored for score-aligned pieces
  span: [95, 112],                        // OPTIONAL seconds: the stretch to play ("Hear the join"); default at−8 … at+8
  how: '<p>…</p>',                        // ≤ 110 words: the technical means, in plain English with exact terms
  devices: ['retransition', 'dominant pedal'],   // from the controlled vocabulary below
  basis, precision, evidence,             // as for cues
}
```

`how` says what the composer did, concretely: the harmony at the join (pivot chord, the route between keys, the cadence type), the bass, the texture and orchestration, the rhythm and tempo, and the motivic link that carries over. Name keys, chords and instruments. For pieces without a score alignment, describe the written join from the score structure. Keep `precision: 'passage'`, and phrase it so it stays true ±10 s.

Controlled `devices` vocabulary:
perfect cadence, half cadence, deceptive cadence, plagal cadence, elision, pivot chord, common-tone modulation, direct modulation, enharmonic reinterpretation, chromatic slide, sequence, dominant pedal, tonic pedal, retransition, standing on the dominant, liquidation, motivic link, fermata, general pause, medial caesura, crescendo build, decrescendo, texture change, orchestration change, register change, tempo change, metre change, link passage, cadenza, attacca, fade.

## Textbook apparatus

`src/build.mjs` numbers Origins as chapter 1, the seven era chapters as 2–8,
Workshop as 9, and composer chapters from 10 in birth order. Sections use
`chapter.section`; captions use `Fig. chapter.figure` in page order. Lesson
questions and listening pointers come from the existing `question` and `listen`
fields. Key ideas extract opening statements from the authored lesson, sound or
period vocabulary. Chicago and BibTeX citations use the canonical page URL and
label the build date as an access-date suggestion, not a publication date.

Composer and era questions reuse the hosted recordings’ authored `question`
and `intro`; where no recording is hosted, they point to a playable score
example, explicitly distinguishing synthesis from a recording. Lessons without
recording pointers can likewise play their first authored score example.
Only pages containing score figures request the abcjs vendor script.

`content/site.mjs` defines four reader paths below the title-page hero. The
featured Influence door is separate from the preserved `.hero-doors` Hall
entrance. The two-tier masthead collapses to a labelled mobile menu.

### Glossary

`content/glossary.mjs` exports an array:

```js
{ slug, term, aka: [], kind, short, html,
  hear: [{ listen, t, note }], // or { listen, bar: { n: '12', occ: 1 }, note }
  see: [] }
```

Slugs are unique. `see` names glossary slugs; `hear.listen` names a recording.
Bar pointers resolve through `docs/assets/data/<listen>/score.json`; if the file
is absent, the entry links to the recording without inventing a time. Machine
alignment is labelled provisional unless the score data says reviewed.

The generator exports `termify(ctx, html)`: first prose occurrence per entry,
including aliases, excluding headings, existing links, code and controls.
`ctx.termSeen` can retain the set across fragments of one page. Output:

```html
<a class="term" href="{base}glossary.html#{slug}" data-term="{slug}">term</a>
```

`docs/assets/glossary.json` maps slugs to `{ term, short }`. The client’s
`mountTerms(app)` delegates hover, focus and touch popovers and returns its
cleanup. The underlying links remain usable without JavaScript.
If the glossary module is absent, the build emits an empty JSON object and a
glossary page directing readers to the Workshop; no guessed definitions appear.

### Further reading

`content/bibliography/<slug>.json` contains:

```js
{ id, kind: 'composer' /* or 'era', 'topic' */,
  items: [{ cite, url, kind, note }] }
```

`cite`, item `kind` and `note` are non-empty strings; `url` is optional.
Citation text may mark an italic title with `*title*`; HTML is escaped.
IDs match canonical composer or era slugs (not numbered source filenames).
Known topics: `origins`, `workshop`, `recording-history`, `performance-practice`, `influence`.
Missing bibliography files omit the reading section. Validate these and the
glossary with `node tools/validate.mjs content/glossary.mjs content/bibliography/*.json`.
Existence and bibliographic accuracy of cited publications still require source
checking; schema validation does not establish either.

### Search and recording exports

`docs/assets/search.json` contains `{ type, title, sub, url, k }` entries with
site-relative URLs and lowercase, accent-folded keywords. Work, lesson and
gallery entries have generated anchors; recordings target `hall.html#<id>`.
The index also covers glossary aliases, paintings and poems, Return Lab pages,
and influence batches when present. Influence URLs are
`influence.html#edge-<id>`, `#thread-<id>` and `#node-<id>`. Repeated figure IDs
across research batches become a single search result.

`docs/assets/data/recordings.{csv,json}` retain one row per recording, including
every available dossier field. Object paths become dotted columns; arrays are
JSON-encoded strings, preserving source identifiers and disputed alternatives.
The JSON export retains nulls; blank CSV values do not imply a negative finding.
Evidence summaries count field statuses rather than assigning a recording-wide
confidence label. `sources.html` supplies the field-level notes and source links.


## The Web of Influence

`content/influence/<batch>.json` is `{ batch, edges: [], figures: [] }`.
Each edge has `id`, `from`, `to`, `kind`, `year`, `title`, `works: { from, to }`,
`claim` (HTML), `status` and `sources: [{ title, url, locator }]`.
`from`/`to` identify a composer slug or a figure ID. Kinds describe a specific
mechanism: `studied-with`, `heard`, `copied`, `quoted`, `modelled`, `parodied`,
`set-text`, `depicted`, `reacted-against`, `championed`, `dedicated` or `taught`.
Status is `documented`, `inferred` or `disputed`; the latter two require `note`
explaining exactly what is uncertain. Titles are at most nine words.

Figures have `{ id, name, dates, year, kind, portrait? }`; `portrait` is a
Wikimedia Commons `File:` title. Kinds are painter, poet, writer, philosopher,
tradition, performer, teacher or composer. A repeated ID must retain identical
fields across batches. Edges can name a motif `thread` from `threads.json`,
an array of `{ id, name, summary, abc, abcNote?, source: { title, url } }`.
`summary` stays reader-facing prose. Optional `abcNote` is a short technical
note displayed beneath the notation, separate from the summary. Thread cards
present the motif first, followed by cameo stops along its path; path labels
show event years, and era ticks orient the timeline.

Optional `exhibit.from` and `exhibit.to` contain `{ label, abc, checked,
listen?: { id, t } }`. `checked` links to the public-domain score used for the
transcription. Use 2–8 bars, a single melodic line and the original key unless
the label explicitly states a transposition. Omit notation rather than guess.
One-sided exhibits are permitted for a text or artwork paired with music.
Listening times must come from that recording’s existing cues, sections or
transitions. Optional `art: { file, caption }` requires a real Commons file.

`src/influence.mjs` builds a full-viewport sky with a density-adaptive time axis:
birth/figure years remain in chronological order, years before 1650 are
compressed, and crowded generations receive more horizontal room. The axis is
not a uniform scale of elapsed years; an edge’s year dates the event. Cameo and
nameplate positions are computed deterministically at build time, not by a
browser force-layout. Mobile presents a birth-order timeline. The public batch
and Hall schemas are unchanged. The build writes
`docs/assets/influence.json` for the compact Hall index; its schema is unchanged.
`docs/assets/influence-details.json` is fetched on demand for cards and has
the shape `{ edges: { "<id>": Edge }, threads: { "<id>": Thread } }`.
Connection titles and full thread records live in this lazy payload rather
than the initial page payload, to support the 400 KB initial-page budget.
`influenceSection(ctx, slug)` supplies the sourced inheritance section between
a composer’s Life and Works; the generator guards against an absent module.
Validate batches with `node tools/validate-influence.mjs`; schema validation
does not substitute for checking historical claims and transcriptions.

## Comparisons

`content/compare/<id>.json` builds `compare/<id>.html`. It contains `id`,
`title` (≤ 8 words), `composer` (roster slug, or null for a guest composer),
`work`, `question` (≤ 25 words), documented `intro` (2–4 sentences),
`recordings: [{ listen, label, year, note }]`, `reference` (a listed listen ID),
`passages: [{ label, t, note }]` (seconds in the reference), and
`sources: [{ title, url }]`. Recording notes are ≤ 25 words; passage notes
are ≤ 30 words. Optional `group` is `composer-performers`, `century`,
`singers`, or `golden-age`, the four sections of `compare/index.html`.

Publication requires every referenced recording to be published (baseline
or an independent passing review), and
`content/plan/reviews/compare-<id>.json` with `verdict: "pass"`.
Comparisons still awaiting review are held as a whole, not partially built.
The generator prints one published/held summary; the index, Hall links and
search contain only published comparisons. Removed or held comparisons’
previously generated pages are removed on the next build.

Each recording remains a normal listen file and dossier. Comparison-only
recordings set `concert: false`; guests additionally set `composer: null`
and `guest: { name, born?, died? }`. A stream represents one file: do not
concatenate 78-rpm sides; compare the relevant side or author separate IDs.

`tools/compare.py` writes
`docs/assets/data/compare/<comparison>/<listen>.json`: `map` pairs
`[referenceSeconds, performerSeconds]`, local `ratio`, `confidence` and
`method`. Both time axes include trim offsets. The reference needs no map.
Switching inverts the current recording’s map, then interpolates the target
map; it never extrapolates. Duplicate performer timestamps use the midpoint
of their reference span. Median confidence ≥ 0.85 is a sound automatic
alignment; 0.75–0.85 requires caution; below 0.75, mappings and ratio
measurements are withheld. All automatic alignment remains provisional.

The tempo chart plots time taken per reference second (higher means longer,
not faster), smoothed by the alignment tool. Duration bars describe whole
files, not necessarily equal musical spans. Level strips are generated from
`docs/assets/listen/<id>.json` `env`; they describe relative level within
one recording, never comparative loudness. Passage sequences play up to
12 reference seconds per performer, stopping sooner at the next passage.
Recordings not covering a passage are omitted explicitly.

Each comparison embeds only its own playback maps as JSON; SVG charts and
level strips are computed at build time. Playback uses the persistent
`app.player` and a single visible transport. The build exports
`compareLinks(listenId)` and writes `docs/assets/compare-index.json` as
`{ listenId: [{ compare, label, year }] }` for the Hall’s “Other performances”
links. `assets/js/compare.js` also exports an asynchronous `compareLinks`
reader for this index.
