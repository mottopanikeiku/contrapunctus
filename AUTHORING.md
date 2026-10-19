# Authoring guide

Contrapunctus is written for people who love this music, or are about to. The reader usually has a recording playing and no obligation to keep reading. Write as a well-read friend sitting beside them: someone who knows the score, the letters and the gossip, and says what matters in plain sentences.

Exemplars — read one in full before writing: `content/composers/debussy.mjs` and `content/composers/mahler.mjs` (composer pages), `content/listen/debussy-faune.mjs` (Hall notes).

## House style

### What every paragraph needs

At least one of these:

- **A scene**: a place, a date, people in a room. “In August 1910 Mahler walked with Freud for four hours through Leiden.”
- **A sound you could point to in the score**: a named instrument, note, chord, key, bar or marking. “A solo double bass, high and uncomfortable, plays <i>Frère Jacques</i> in the minor.”
- **A person speaking**, in attested words: the composer, a friend, a critic. “I am a summer composer.”

A paragraph made only of categories (“register, texture and density”, “the organisation of musical time”) is not finished. Facts are necessary; they are not sufficient.

### Be specific, then stop

- Name things: the note, the instrument, the city, the year, the catalogue number. Explain a term once, by context, the first time it matters (or link the Workshop).
- Abstract nouns — register, texture, density, material, weight, surface, colour, resonance, gesture, contour, process — are tools for precision, not decoration. One per sentence at most, and only when no concrete word will do.
- End a paragraph on a fact, an image or a quotation, never on a moral that restates what the reader has just read.
- Vary sentence length. A four-word sentence is allowed. So is a joke. Opinions are allowed when they are the site’s considered view and read as such (“the place to start is …”).

### Confidence in the text, doubt in the drawer

- The text states the best-supported reading plainly. Sources, alternatives and caveats belong in `evidence` (Hall notes), dossiers, `sources` lists and margin notes.
- Mention doubt in the text only when the doubt is the story, and then tell it as one: “His family kept his birthday on 1 March; the parish register says 22 February.”
- Never defend against a misreading the reader did not make: not “an editorial comparison, not a documented source”, “their languages need not be collapsed”, “this is not a narrative”, “is not evidence of a quotation”. If a comparison is editorial, say what it shows and move on.
- Tell a legend once, as a legend (“the story, as Freud’s biographer Ernest Jones told it”), then let it run.

### Constructions to avoid

`tools/validate.mjs` checks reader-facing text for these:

- **Machine language** (error): decibels, “relative level”, “the level rises/falls”, “loudest window”, “the report”, “the analysis shows”, “key estimate”, confidence figures, file paths, “Wikipedia hears/says”, “according to the … note”. Audio analysis can help an author find a formal boundary; it never appears in prose, titles or “How we know”.
- **Defensive hedging** (error): “need not”, “is not evidence”, “not a documented”, “editorial comparison”, “does not claim/establish/identify/imply”, “is claimed”, “not a measurement”.
- **Instructions to the listener** in Hall notes and recording introductions (error): “Listen for …”, “Follow …”, “Compare …”, “Keep … in mind”, “Notice …”. Say what happens; the reader is already listening.
- **Contrast by negation** (error above one per 250 words): “X rather than Y”, “not X but Y”, “, not a …”. One in a page is a choice; one in every paragraph is a tic.
- “the listener”, “a different kind of”, “gives way to”, rhetorical questions, “Imagine …”, adjective triplets, and the old word list: tapestry, delve, testament to, timeless, masterful, myriad, resonate with, journey (except as the Guided Journeys feature name), vibrant, breathtaking, nuanced, showcase, realm, seamless, elevate, captivating, unparalleled, profound, evocative, soundscape, “genius”, “in the world of”.

### Quotations

- Prefer the composers’ own words: letters, criticism, memoirs, conversations recorded at the time. Berlioz, Schumann, Debussy, Mozart, Tchaikovsky, Stravinsky and Satie wrote constantly.
- Attribute every quotation: who, to whom or where, and when. Quote only what you have checked against a source, and record the source: composer pages in `content/plan/research/prose/<slug>.md`, Hall notes in the cue’s `evidence`.
- Translate non-English quotations yourself; keep them short.

### Typography and accuracy

- British spelling; curly quotes ‘ ’ “ ”; en dashes for ranges (1888–94); em dashes for asides — like this; ♯ ♭ ♮ for accidentals in prose; italics for work titles that are names (<i>La Mer</i>), roman for generic titles (Symphony No. 5).
- State only what is documented. Dates, keys and catalogue numbers must be right. If you are unsure of a detail, leave it out, and leave it out silently: do not write around the gap.

### The difference, in one paragraph

> At the 1889 Paris Exposition he heard a Javanese gamelan and Vietnamese theatre. These performances took place within a colonial exhibition. For Debussy they demonstrated ways of organising musical time beyond European symphonic development. … Its pentatonic material, the independent speeds of the layers and the resonance left between attacks all carry the connection.

> In the summer of 1889 the Exposition universelle brought a Javanese gamelan to Paris, and Debussy kept going back. Twenty-four years later he was still arguing from it: their counterpoint, he wrote, made Palestrina’s look like child’s play. <i>Pagodes</i> (1903) is what he took home.

The facts are the same. The second has a summer, a man going back, and his own words.

## Files and tools

- Composer: `content/composers/<slug>.mjs`, slug from `content/roster.mjs`, `era` = the roster key.
- Validate your own files only: `node tools/validate.mjs content/composers/<slug>.mjs`. It must print `ok`. It checks schema, links, ABC notation and that every Commons file exists.
- Find images: `node tools/art.mjs search "Bocklin Isle of the Dead"`, then `node tools/art.mjs check "File:Exact title.jpg"` to see size, licence, artist and date.
- Do **not** run `tools/art.mjs fetch`, `src/build.mjs`, or any git command. Do not edit files you do not own.

## Schema (composer)

```js
export default {
  slug, name, given, family,
  born: { year, date: '7 July 1860', place: 'Kaliště, Bohemia' },
  died: { year, date, place } | null,            // null for living composers
  era,                                            // roster key
  epithet: 'One plain sentence, specific to this composer.',
  portrait: { file: 'File:…', caption: 'What, by whom, when.', focus: '50% 25%' },  // focus = CSS object-position for crops
  facts: [['Trained', '…'], ['Posts', '…'], ['Output', '…']],                         // 3–4 rows, short
  quote: { text, source },                        // optional, well attested only
  life: `<p class="dropcap">…</p> <aside class="note"><b>Label</b>…</aside> <h3><span class="sc">kicker</span>Heading</h3> <blockquote>…<footer>source</footer></blockquote>`,
  sound: [{ aspect: 'Harmony', glyph: '♮', html: '<p>…</p>' }],                    // 4–6 aspects
  works: [{ year: '1901–02', title, titleHtml?, cat: 'Op. 18', forces, note }],     // chronological
  score: [{ kicker, title, abc, caption }],
  arts: [ painting | poem ],
  recordings: [{ work, performers, year, label, note }],
  lineage: { from: [slug or plain name], to: [...], note: '<p>…</p>' },
  reading: ['Author, <i>Title</i> (Publisher, year) — one-line verdict.'],
};
```

- `life`: the first paragraph has `class="dropcap"`. `<aside class="note">` is a margin note (a technical aside, a source, a definition) — place it immediately *before* the paragraph it annotates; 2–4 per life. `<h3><span class="sc">…</span>…</h3>` splits long lives into sections.
- `sound` aspects are displayed as plain text labels; the v3 templates do not render decorative glyphs.
- Cross-links: `[[slug]]` or `[[slug|label]]` for composers; `[[era:romantic|Romanticism]]`; `[[workshop#sonata-form|sonata form]]`; `[[origins#chant|plainchant]]`.

Workshop anchors: `counterpoint`, `fugue`, `figured-bass`, `temperament`, `sonata-form`, `harmony`, `chromaticism`, `tristan-chord`, `leitmotif`, `modes`, `whole-tone`, `octatonic`, `atonality`, `twelve-tone`, `rhythm`, `orchestration`, `minimalism`, `spectralism`.
Origins anchors: `monochord`, `chant`, `notation`, `organum`, `ars-nova`, `polyphony`, `instruments`, `opera`, `continuo`.

### Composer and period pages

`src/build.mjs` builds composer pages at `composers/<slug>.html` and era pages
at `eras/<slug>.html`. Both retain authored prose, margin notes, notation and
sister arts. Pages carry no chapter or figure numbers; do not write them into
content. The contents list moves into the reading flow on narrow screens.

The composer directory keeps birth order. Site search is accent-insensitive
and includes work titles and catalogue numbers. Without JavaScript, the
directory and every chapter remain readable.

Playable recordings come from `content/listen/`, matched by composer slug.
Keep numbered works distinct, and name the movement or arrangement beside
the link. The separate composer `recordings` array recommends recordings worth
seeking out; it does not establish that the site hosts them.

Lineage entries are connections, not an implied teaching chain. Keep the
authored lineage note’s qualifications. The separate inheritance block draws
on researched influence edges rather than turning every lineage name into a
documented borrowing.

## Sister arts

Paintings, drawings, prints and photographs that share a world with the music: the picture behind a piece, a painter who was a friend, the same landscape, the same text, the same idea in another medium. The `note` must say *why* the pairing holds, factually.

```js
{ type: 'painting', frame: 'gilt' | 'lacquer' | 'mat', file: 'File:…', artist, title, date, medium, collection, note: '<p>…</p>' }
```
`gilt` for older oil paintings, `lacquer` for twentieth-century paintings, `mat` for works on paper, prints, photographs, manuscripts.

```js
{ type: 'poem', author, title, date, lang: 'German', original: `…`, translator: 'Our translation', translation: `…`, note: '<p>…</p>' }
```
Poems and prose must be in the public domain (published before 1930, or author dead more than 70 years). Give the original and **your own** close English translation (never paste a modern copyrighted translation). 16 lines at most. English originals need no translation.

Images: Wikimedia Commons only; public domain or CC-BY/CC-BY-SA (for photographs of recent composers). Prefer flat, high-resolution scans (“Google Art Project” files are good) over gallery snapshots. Never guess a file name: `check` it.

## Score examples (ABC notation, rendered and played by abcjs)

```
X:1
T:Title
M:4/4
L:1/8
Q:1/4=72
K:Dm
V:1 name="Vln"
V:2 name="Vc." clef=bass
V:1
%%MIDI program 40
d2 ef g2 fe | …|]
V:2
%%MIDI program 42
D,4 A,,4 | …|]
```

- Every example must be **either a faithful quotation** (pitches, rhythm, key and metre as in the score, possibly transposed or reduced — say so) **or explicitly labelled a schematic** illustrating a technique (a scale, a chord, a progression, a rhythm). Never present an approximate melody as a quotation. If you are not sure of the notes, illustrate the technique instead.
- 2–8 bars. Put `%%MIDI program N` (General MIDI, 0-based: 0 piano, 6 harpsichord, 19 church organ, 40 violin, 41 viola, 42 cello, 43 contrabass, 46 harp, 47 timpani, 48 strings, 52 choir aahs, 56 trumpet, 57 trombone, 60 French horn, 68 oboe, 71 clarinet, 73 flute, 70 bassoon) on its own line after each `V:` line, as above.
- Useful syntax: chords `[CEG]`, ties `-`, triplets `(3abc`, dynamics `!p!` `!f!`, accents `!>!`, fermata `H`, lyrics on a `w:` line, chord labels `"Am"C`.
- The `caption` explains what to hear, technically.

## Textbook apparatus and research

- Key ideas quote the opening statements of authored sound, period-vocabulary
  and lesson paragraphs. Write those statements to stand on their own.
- Lesson `question` and `listen: [{ id, t, why }]` fields connect reading with
  listening. Use the recording’s existing cue/section times; do not invent
  precision. Recording `question` and `intro` also supply composer and era
  questions. A synthesised score example is labelled separately.
- Further reading comes from `content/bibliography/<slug>.json`, with
  `{ id, kind, items: [{ cite, url?, kind, note }] }`. Use canonical composer or
  era slugs, not the numbered era filenames. Mark italic titles with
  `*asterisks*`; citation text is escaped, not interpreted as HTML. A note
  should say which question the book, catalogue, letter or article helps answer.
- `content/glossary.mjs` supplies the glossary and the popover definitions.
  The generator links the first prose occurrence, not headings or existing
  links. Include useful aliases and a short definition that stands alone.
- Citation boxes offer Chicago and BibTeX. They assert no publication date;
  the displayed build date is only a suggested access date.

Influence research lives in `content/influence/<batch>.json`; `CONTRACTS.md`
defines edges, figures, motif threads and notation exhibits. A connection
needs a concrete mechanism and a real source URL. Specify what is uncertain
for inferred or disputed claims. Verify ABC against the linked public-domain
score, identify transpositions, and omit an exhibit rather than approximate it.
Do not confuse a poem’s setting, an artwork’s depiction and a musical quotation.

Validate only the content you own:

```sh
node tools/validate.mjs content/glossary.mjs content/bibliography/*.json
node tools/validate-influence.mjs
```

The integration owner builds with `node src/build.mjs`, then checks desktop
(1440×900) and mobile (390×844), including navigation while the persistent
player is playing. No recording page should create another audio element.
The abcjs vendor loads on demand for score figures, not on every page.
Influence cameos use a 160-pixel rendition. The integration owner can generate
these from already-fetched local originals with `node tools/art.mjs derive 160`;
this does not require downloading the artworks again.
