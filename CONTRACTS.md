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
- Engraved whiteout is paper, not ink: source white masks use `var(--paper, #fbf5e6)` and retain their order above earlier ink and below later annotations. Ordinary black ink inherits `currentColor`; other explicit source colours survive packing. Paper masks do not create barline geometry.
- Inline score examples embedded in main-score markups retain their visible notation but do not supply main-score bar identities or staff/barline tags. A local annotation bar 1 must not create another opening-bar box on a later page. Real timed cue/ossia staves remain part of main-score instrumentation.

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

`docs/assets/search.json` is a prebuilt inverted index, loaded only when search
opens: `{ v, previous?, size, w, p, b }`. `w` is a sorted vocabulary of whitespace-delimited,
accent-folded tokens. Each string starts with a code point minus 32 giving the
shared-prefix length with the previous word, followed by the remaining suffix.
`p[i]` holds the word's ascending document postings: each code point minus 32 is
`4 * documentIdDelta + flags` (bit 1: searchable text, bit 2: first title token).
`b` holds the original composer/recording ranking boosts. The client retains
the existing title-prefix, word-prefix and arbitrary-substring scores and stable
tie order; it does not replace substring search with a narrower word search.
This index is not display text: font subsetting must exclude its packed `w`/`p`
code points. Search display strings come from the row shards and indexed pages,
not from the encoded vocabulary/postings file.

Display rows live in `assets/search/<v>/<shard>.json`, arrays of
`[type, title, sub, url]`, with `size` rows per shard (currently 16).
Only shards containing the first 24 results are requested. `v` hashes the complete
source entries; immutable paths prevent an open tab from combining an old index
with newly numbered display rows after deployment. The build writes all shards
before publishing the index pointer and retains the current and previous generation.
The optional `previous` hash preserves that retained generation across unchanged rebuilds.
If an older generation is no longer available, the next search input refreshes
the index rather than displaying unrelated rows. The shell caches index and shard
promises across navigation and ignores results from superseded queries.
Work, lesson and gallery URLs have generated anchors; recordings target `hall.html#<id>`.
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

### Persistent player and hall payloads

`assets/listen/programme.json?v=<data-prog>` contains `{ composers, eras, rows }`.
Each row is `[id, stream, duration, composerIndex, work, movement, set, concert, eraIndex]`;
`concert` is 1/0, and `eraIndex` is -1 for a guest without an era. Composer
portrait/focus/name metadata and era artwork/accent metadata are stored once,
not once per recording. `player.getProgramme()` decodes this wire format once
into the existing track objects; every consumer uses that same persistent player.
Build-time comparisons and Return Lab receive the full in-memory programme,
not the browser wire format.

All other per-piece fields (including score flags, key/tuning, recording provenance,
sections, cues, joins and composer biography) live in
`assets/hall/<id>.json?v=<data-prog>` and are fetched when that piece opens.
The composer inheritance and comparison-link indexes load only when their hall
tabs are opened. `influence-details.json` remains lazy until an evidence card opens.
Selecting/restoring a recording sets `preload=none`; audio downloads begin on Play
or an activated Hall visit, never on passive navigation prefetch.

The router coalesces hover/focus/touch prefetches with clicks, bounds its HTML cache
to eight entries/four MB/ten minutes, and keeps inactive parsed stylesheets with
`media="not all"` for return navigation. All initial head `link[href]` URLs are
made absolute before history changes, including stylesheets, favicons and preloads.
Body swaps leave `#cp-persist` untouched.
Shared font faces live in `assets/css/fonts.css`; their relative font URLs resolve
against that stylesheet, independently of SPA history. The router retains this
stylesheet like other shared CSS. Page-specific critical inline CSS is still removed.
Page modules read their version from the literal `data-<module-name>` attribute,
including hyphenated names such as `data-atlas-map`, with the site version as fallback.
Mount selectors using those same data attributes must search the body subtree,
so HTML version metadata cannot be mistaken for a page's UI root.
Hall drawing follows requestAnimationFrame while visible; inactive views, hidden
tabs and settled paused views do not keep drawing. Timeline waveforms and cue
colours are cached until the track/envelope/size changes. Unchanged readouts,
wheel data and orchestra styles do not trigger repeated DOM/canvas updates.
The initially empty Hall view row invisibly reserves its actual tab line-height;
populating it does not change the settled tab geometry.
For an authored backdrop-filter pair, keep `-webkit-backdrop-filter` before
the identical unprefixed declaration. The standard property must remain last
so CSS minification does not leave Chrome with only the prefixed spelling.

Once the service worker is ready, the shell posts `cache-visited-assets` with
deduplicated Resource Timing URLs for already-used same-origin app-root assets,
excluding audio/media. This covers assets loaded before worker control; the worker
owns cache population, and the app does not fetch additional assets for the handoff.

`node tools/perf-preview.mjs 8768` serves the current build locally with gzip and
GitHub Pages' 600-second cache lifetime for browser transfer accounting.
An optional second positional argument chooses a snapshot root. Add
`--http2 --key <cache-only-test-key.pem> --cert <cache-only-test-cert.pem>` for
TLS with HTTP/2 ALPN and HTTP/1 fallback; gzip and cache headers are unchanged.
Use a newly generated self-signed localhost certificate under `cache/`, never
production credentials. A dedicated measurement Chrome can trust only that
certificate with `--ignore-certificate-errors-spki-list=<base64-SHA256-of-SPKI>`.
Matched baseline/after measurements must use the same protocol and server options.



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

## Map data

`content/geo/<composer>.json` holds `{ id, places }`. A place contains `name`,
`country`, numeric `lat` / `lon`, ISO-string `from` and optional `to`
(`YYYY`, `YYYY-MM`, or `YYYY-MM-DD`), `kind`, `what`, optional `work`,
`status` (`documented`, `inferred`, `disputed`), and `sources: [{ title, url }]`.
Kinds are `born`, `childhood`, `studied`, `lived`, `worked`, `travelled`,
`premiere`, `heard`, `exile`, `died`, and `buried`. Omitted `to` is a point
event in authored evidence. Residence carry-forward is a separate, explicitly
labelled model; it never rewrites source dates. Missing composer files are allowed.

`node tools/geo/prepare.mjs` caches the three public-domain Natural Earth
1:50m layers once, pinned to the revision and SHA-256 provenance in
`tools/geo/sources.json`. Ordinary builds never fetch map data. Mercator
projection and Douglas–Peucker simplification happen in `src/atlas-map.mjs`
via the preparation module. Present-day outlines are orientation aids,
not historical borders.

The build writes `assets/data/geo/base.json` (projected SVG paths),
`index.json` (compact annual primary locations, city groups, dated events,
residence-derived intervals and classified overlaps), and `<slug>.json` (full sourced
place records, exact projected coordinates, primary-region bounds, overseas
insets, published recordings and placed influence links, fetched only on focus).
`<slug>.svg` is the static chapter map. `placesSection(ctx, slug, add)` is the sole composer-page hook.
`atlas-map.html#c-<slug>` focuses a life; `?year=1805` selects the year.
Annual frames store `[composerIndex, placeIndex, dead, withinAuthoredDateRange]`.
`cities[].visits` contains dated evidence; `cities[].residents` contains
separately derived primary-residence intervals with their original source dates.
Pairs carry `basis: "dated" | "residence"`; the card never presents the latter
as documented attendance.

Cities join coordinates within 7 km of a fixed centre. The city list and
encounters use the same primary-place rule as the cameos: birth, childhood,
study, residence, work and exile records carry forward to the next primary
residence record or death. Carry-forward is labelled
“resident (from residence records)”; independently dated events are labelled
“documented in this year”. Derived intervals and dated evidence remain
separate, including in encounter labels. Premieres and burials do not establish
living attendance. Co-presence does not establish a meeting.
An explicitly dated ongoing professional post takes priority over overlapping
residences, then other stays; the latest date breaks ties. Seasonal homes stay
in the route but do not displace a simultaneous post. Gold location dots,
death crosses and city-number badges are never geographically displaced.
Individual portrait callouts have leaders bounded by 26 screen pixels.
The build computes clearance from the simplified coastline; callout radii
shrink near the coast rather than moving a portrait centre across the sea.
At every zoom, overlapping portrait circles form screen-proximity clusters,
including across city boundaries. Medallions use the most represented city's
true centre, adding “area” when the group spans multiple cities. Overlapping
medallions are merged too. Hover, keyboard focus or click opens a clearly
labelled portrait-chooser ring; these menu portraits are not map positions.
Every source location dot stays fixed, and clusters split again when zoom permits.
Focused routes fit their European places; overseas records use separate,
labelled-scale insets and dated arrow connectors ending at the inset frame.
A life with no European record opens in its own recorded region.
Each source place retains its exact dot; repeated city numbers share a badge
at the city's true centre. Full numbers and individual evidence remain in
the source card. Static chapter maps use the same primary/inset division.
Route lines join records, not reconstructed roads; posthumous events are
distinguished. Exact normalised work-title matches expose published listens;
fallbacks are explicitly labelled as other recordings by that composer.
Playback uses `app.player.load(id, { play: true, t: 0 })`. The page module
cleans up listeners, requests, resize observation and animation on unmount;
reduced motion disables premiere flashing and the gold glints that travel
along journey arcs. The static base and animated overlay are separate SVG
surfaces, so a moving glint does not repaint the engraved coastline.
The module mounts on `.atlas-map-page[data-atlas-map]`, never the bare
attribute selector: the optimiser also puts a `data-atlas-map` asset
fingerprint on `<html>`.

## Guided journeys

`content/journeys/<id>.json` holds one sourced, 15–25-minute story. Its
top-level fields are `id`, `title`, `subtitle` (up to 12 words), `minutes`,
`hero: { file, caption }`, `intro` (two or three sentences), and `stations`.
A station has a unique `id`, `title` (up to eight words),
`listen: { id, from, to }` in absolute recording seconds, `text` (60–140
words of HTML narration), `cues: [{ at, text }]` (up to 25 words each), and
`sources: [{ title, url }]`. Every factual claim needs a source; cue times
must come from the recording’s authored sections, cues, transitions or score
alignment, never an estimate made for the journey.

Optional station exhibits are `art: { file, caption }`,
`score: { listen, bar }`, `map: { composer, year }`, `edge` (an influence
edge id), and `compare` (a comparison id); unused exhibits are `null`.
The main exhibit prioritises score, then painting, then map, then influence;
additional exhibits remain in expandable panels alongside comparison links.
Score pages and bar highlights resolve from the existing score and sheet
pack. Missing engraving or alignment is stated, not replaced with invented
notation or timing. Map vignettes use only authored date ranges covering the
requested year; a point event is never extended into a residence. The
comparison link appears only after its own review and recording gates pass.
All journey hero and station paintings participate in `tools/art.mjs fetch`,
including drafts awaiting review.

`src/journeys.mjs` publishes `journeys/index.html` and `journeys/<id>.html`
only for `content/plan/reviews/journey-<id>.json` with `verdict: "pass"` and
published recordings for every station and score reference. Reviews with
`verdict: "fix"`, absent reviews and unpublished listens hold the journey.
The build removes stale journey pages, excludes held stories from the
title-page band, and prints `journeys: N published, M held`.

`assets/js/journeys.js` mounts through the router and uses only `app.player`.
Begin starts the selected station at `from`; recording time at `to` advances
to the next station. Adjacent excerpts of the same recording run without
reseeking; other joins load the next recording and start at its `from`.
The page cross-fades, not a second audio element. Timed cues use absolute
recording time. The final station pauses instead of starting the Hall’s
next recording. While engaged, the journey temporarily owns the concert
advance setting and restores it on departure or external track selection.
The opaque transport has a soft fade above it. Station content reserves the
transport’s measured height plus two rem below its last line; resize
observation keeps this clearance correct when the mobile controls wrap or
text is enlarged, and disconnects on router cleanup.

Next/Previous, numbered stations, Left/Right keys and horizontal swipes
change stations. Space pauses or resumes outside native controls and open
dialogs. `cp-journey:<id>` in localStorage retains station id, recording id,
time and completion; reload never autoplays. Pause, page departure and
periodic playback save the place. Reduced motion disables cross-fades and
smooth rail movement. Router cleanup removes event listeners and animations
without stopping the persistent recording. Without JavaScript, all station
text, exhibits and sources remain readable.
