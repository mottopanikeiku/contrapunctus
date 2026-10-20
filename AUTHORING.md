# Authoring guide

Contrapunctus is a reference work for listeners. Write it the way a good concert programme book, a museum catalogue or a scholarly biography is written: informed, exact, unhurried, and without performance. The reader usually has the music playing. Every sentence should tell them something they did not know; none should be there to sound good.

Exemplars for structure and fields: `content/composers/debussy.mjs` and `content/composers/mahler.mjs` (composer pages), `content/listen/debussy-faune.mjs` (Hall notes). For voice, follow the rules below and the before-and-after pairs at the end of this section.

## Voice

The site must not read as machine-written. Machine prose is recognisable less by its words than by its devices: every paragraph built to the same shape, every note ending on a turn of phrase, instruments that “refuse” and “remember”, tidy lists of three. A human expert writes unevenly, says the plain thing plainly, and stops when the information runs out.

### What to write

- **Information first.** A note or paragraph exists to carry facts: what happens in the score (instrument, key, marking, bar, form), what happened in the world (who, where, when), or what someone said (quoted and attributed). Two facts in plain order beat one fact dressed up.
- **History in the past tense.** “Brahms finished the symphony in 1876.” The present tense is for what the music does: “The horn enters on G.”
- **Plain verbs for music.** Instruments enter, play, hold, repeat, double, stop, take over, rest; harmony moves, resolves, modulates; a theme returns, is varied, is inverted. Instruments and themes do not refuse, insist, remember, discover, find, decide, hesitate, persist, wait, sigh, breathe, dream, long or speak. (A marking may: *seufzend*, sighing, is Mahler’s word, so quote it as his.)
- **Effects are the reader’s business.** Describe what is on the page and in the recording; do not narrate how it feels (“sounds wonderfully fresh”, “makes the return feel inevitable”, “is hard to bear”). A critic’s or composer’s reaction can be quoted, attributed.
- **Opinion sparingly, and signed.** “The place to start is…” on a recordings list is the site’s view; elsewhere, judgments belong to named people.
- **Uneven is fine.** One-sentence notes, a long sentence followed by a short one, a paragraph of dates. Do not shape every note as three sentences of fifteen words.

### Devices that make prose read as machine-made (do not use)

- **The closing line.** Never end a note or paragraph with a sentence that sums up, reframes or turns a phrase. Not: “The rests carry the joke.” “<i>Pagodes</i> is what he took home.” “The family’s everyday words survive the child.” “The piece discovers that it has much more to say.” End on the last fact.
- **Personification** of instruments, keys, themes and works (above).
- **Antithesis frames**: “not X but Y”, “X rather than Y”, “less X than Y”, “X, not Y”, “it is not … it is …”. State the positive fact.
- **Lists of three for rhythm**: “a summer, a man going back, and his own words”; “quiet, patient and strange”. Lists are for content that is a list.
- **The colon reveal**: “One thing remains: the silence.” Colons introduce lists, quotations and definitions only.
- **Mood adverbs and hedging softeners**: quietly, gently, simply, just, almost, somehow, something, a kind of, a sort of, as if, seems.
- **Programme-note pastiche vocabulary**, unless inside a quotation: luminous, radiant, shimmering, glowing, haunting, poignant, wistful, yearning, aching, brooding, lush, tender, delicate, playful, sly, mischievous, delicious(ly), magical, dreamlike, otherworldly, ethereal, sweeping, soaring, blooms, blossoms, unfolds, lands, arrives (of music), breathes, lingers, weaves, conjures, evokes.
- **Addressing the reader**: “you”, “we”, “Listen for”, “Notice”, “Imagine”, rhetorical questions.
- The old list still applies: tapestry, delve, testament to, timeless, masterful, myriad, resonate with, vibrant, breathtaking, nuanced, showcase, realm, seamless, elevate, captivating, unparalleled, profound, soundscape, “genius”, “in the world of”, “the listener”, “a different kind of”, “gives way to”.

### Titles and labels

Titles are labels, as in a catalogue or a score’s table of contents. No metaphors, puns, verbs of personification or full sentences.

- Music notes name the event: “Second subject, violas”, “Return of the opening theme”, “Cadenza”, “Coda in D major”, “Bar 32: the left hand stops”.
- History notes name the subject and, where it helps, the date: “First performance, Vienna, 1808”, “Letter to Wegeler, 1801”, “The 1945 recording session”.
- Section labels in `sections[]`: letter and plain description (“A · Theme in the violas”), never an image.
- Interface text uses nouns and plain verbs: “Programme”, “Recordings”, “Play from the beginning”, “Copy link”. Not invitations (“Follow the threads”, “Enter and listen”) or arrows in prose.

### Confidence in the text, doubt in the drawer

- The text states the best-supported reading plainly. Sources, alternatives and caveats belong in `evidence` (Hall notes), dossiers, `sources` lists and margin notes.
- Mention doubt in the text only when the doubt is itself the fact: “His family kept his birthday on 1 March; the parish register gives 22 February.”
- Never defend against a misreading the reader did not make (“need not”, “is not evidence”, “not a documented source”). If a comparison is editorial, say what it shows.
- A legend is told once, as a legend, with its teller named.

### Mechanical checks

`tools/validate.mjs` reports machine language (decibels, “relative level”, “the report”, file paths), defensive hedging, instructions to the reader, contrast by negation above one per 250 words, personified instruments and the pastiche vocabulary above. It cannot see closing lines or rhythmic triplets; authors and reviewers must.

### Quotations

- Prefer the composers’ own words: letters, criticism, memoirs, conversations recorded at the time.
- Attribute every quotation: who, to whom or where, and when. Quote only what you have checked against a source, and record the source: composer pages in `content/plan/research/prose/<slug>.md`, Hall notes in the cue’s `evidence`.
- Translate non-English quotations yourself; keep them short.

### Typography and accuracy

- British spelling; curly quotes ‘ ’ “ ”; en dashes for ranges (1888–94); em dashes sparingly; ♯ ♭ ♮ for accidentals in prose; italics for work titles that are names (<i>La Mer</i>), roman for generic titles (Symphony No. 5).
- State only what is documented. Dates, keys and catalogue numbers must be right. If you are unsure of a detail, leave it out silently.

### Before and after

> **One bassoon refuses to stop.** The first movement closes in E minor, but the first bassoon holds on to B after the other instruments finish. That single note carries into the Andante. It will rise a semitone to C as the slow movement begins.

> **Bassoon link to the Andante.** The first movement ends in E minor. The first bassoon holds its B after the orchestra stops, then rises to C, the first note of the Andante; Mendelssohn wanted no pause between the movements.

> **The missing little face.** The father’s glance falls where his daughter’s face should be: “dein lieb Gesichtchen” — your dear little face. Rückert fills the poem with diminutives, from “Mütterlein” to “Töchterlein”. The family’s everyday words survive the child.

> **Rückert’s diminutives.** The father looks to the doorway where his daughter used to appear: “dein lieb Gesichtchen”, your dear little face. Rückert wrote the poems after two of his children died in the winter of 1833–34; this one is full of household diminutives, “Mütterlein”, “Töchterlein”.

The second version of each has more information and no performance.

## Files and tools

- Composer: `content/composers/<slug>.mjs`, slug from `content/roster.mjs`, `era` = the roster key.
- Validate the files you change: `node tools/validate.mjs content/composers/<slug>.mjs`. It must print `ok`. It checks schema, links, ABC notation and that every Commons file exists.
- Find images: `node tools/art.mjs search "Bocklin Isle of the Dead"`, then `node tools/art.mjs check "File:Exact title.jpg"` to see size, licence, artist and date. `node tools/art.mjs fetch` downloads newly referenced images and makes their narrower renditions.

## Schema (composer)

```js
export default {
  slug, name, given, family,
  born: { year, date: '7 July 1860', place: 'Kaliště, Bohemia' },
  died: { year, date, place } | null,            // null for living composers
  era,                                            // roster key
  epithet: 'One plain sentence, specific to this composer.',
  portrait: { file: 'File:…', caption: 'What, by whom, when.', focus: '50% 25%' },  // focus = CSS object-position for crops; optional zoom (e.g. 1.25) enlarges the crop about the focus point
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
- `sound` aspects show their `glyph` (a musical symbol in Noto Music) beside the label; choose one that names the aspect plainly (♮ harmony, 𝄞 line, 𝄢 bass) or omit it.
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

After `node src/build.mjs`, check desktop (1440×900) and mobile (390×844),
including navigation while the persistent player is playing. No recording page
should create another audio element. The abcjs vendor loads on demand for score
figures, not on every page. Influence cameos use the 160-pixel rendition, which
`node tools/art.mjs derive 160` makes from already-fetched originals without
downloading them again.
