# Authoring guide

Contrapunctus is written for listeners with taste who want to know how the music works. The exemplar is `content/composers/mahler.mjs` — read it in full before writing anything. Match its density, its tone and its schema.

## House style

- **Every sentence carries a fact**: a date, a key, an instrument, a technique, a place, a person, a quotation, a bar of music. No sentence exists only to set a mood.
- **Technical and concrete.** Name the chord, the mode, the form, the register, the instrument, the catalogue number. Explain a term once, by context, the first time it matters (or link to the Workshop).
- **No generic praise.** Never: tapestry, delve, testament to, timeless, masterful, myriad, resonate with, journey, vibrant, breathtaking, nuanced, showcase, realm, seamless, elevate, captivating, unparalleled, profound, evocative, soundscape, “genius”, “in the world of”. `tools/validate.mjs` flags these. Avoid rhetorical questions, “Imagine …”, triplets of adjectives, and closing summaries.
- **British spelling and typography** as in the exemplar: curly quotes ‘ ’ “ ”, en dashes for ranges (1888–94), em dashes for asides — like this, ♯ ♭ ♮ for accidentals in prose, italics for work titles that are names (<i>La Mer</i>), roman for generic titles (Symphony No. 5).
- **Accuracy over colour.** State only what you are confident is documented. Mark legends as legends (“the story, told by …”, “probably apocryphal”). Dates, keys and catalogue numbers must be right. If you are unsure of a detail, leave it out.
- **Quotations** only when well attested; always say who said it, to whom or where, and when.

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
  featured: false,                                // true only for mahler, rachmaninoff, ravel, prokofiev
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
sister arts. Chapter and figure numbers are generated; do not embed them in
content. The contents map moves into the reading flow on narrow screens.

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
