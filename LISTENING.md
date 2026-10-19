# Writing for the Concert Hall

A real recording plays while the Hall shows the score, the orchestra or the sound, and short notes appear as the music reaches them. The notes say what is happening in the music and, in the quiet stretches, something worth knowing about the composer and the work's world. Most readers glance at a note and go back to listening, so each one has to earn its place.

Read `content/listen/debussy-faune.mjs` in full first; it is the exemplar. House style is in `AUTHORING.md`. Composer biographies live in `content/composers/<slug>.mjs`; draw life and world notes from them and never contradict them.

## Choosing a recording

1. `node tools/audio.mjs search "<composer> <work>"` lists Commons audio files; `node tools/audio.mjs archive "<query>"` and `archive-files <identifier>` search the Internet Archive.
2. `node tools/audio.mjs check "File:<exact title>"` shows duration, licence, performer, description and the stream URL.
3. Requirements:
   - Licence is Public domain, CC0, CC BY or CC BY-SA (the host's licence field is authoritative), or an Internet Archive item with a documented US public-domain basis (`source.rights`, see `tools/validate.mjs`).
   - Must have a stream URL (an MP3 derivative).
   - One complete movement or piece, ideally **3–14 minutes**. Never a fragment that cuts off mid-phrase.
   - The best performance and sound available: professional or major-conservatory ensembles over amateur recordings. **Never a synthesized or MIDI rendering.**
   - The work that shows the composer best. A famous, characteristic movement beats an obscure complete piece.
4. If nothing meets these rules, write no file and say so in your report.

## The file: `content/listen/<id>.mjs`

`id` = `<composer-slug>-<short-work-slug>`, e.g. `bach-wtc1-prelude-fugue-c`, `ravel-bolero`. The file name equals the id.

```js
export default {
  id, composer: '<slug from content/roster.mjs>', order: 1,  // order among this composer's tracks
  work: 'Symphony No. 5', movement: 'IV. Adagietto — Sehr langsam' | '',
  year: '1901–02', key: 'F major' | '', forces: 'Strings and harp',
  performers: 'Exactly as documented by the source; leave out what is not documented',
  recorded: '1958' | '',
  tuning: 415,   // ONLY for period-instrument recordings at a non-modern pitch; omit for A = 440/442
  source: { file: 'File:<exact Commons title>' },
  intro: 'One or two sentences: what this is and the one thing that makes it worth hearing.',
  sections: [{ t: seconds, label: 'A · Flute alone', m: 'A', mNote? }, ...],  // 3–8 large formal sections
  cues: [{ t | bar, kind, title, text, basis, precision, evidence }, ...],
  transitions: [...],   // optional, see CONTRACTS.md
};
```

Period-instrument ensembles often play at A = 415 Hz, a semitone below modern pitch; the audio analysis then reads every key a semitone low. Set `tuning` and interpret the analysis accordingly.

`node tools/audio.mjs analyze content/listen/<id>.mjs` downloads the recording and writes `cache/analysis/<id>.txt`. Use it to locate the large formal boundaries. It is a tool for the author, never a source of prose.

## Notes (`cues`)

**Fewer, better.** Between 3 and 10 notes per recording, and no more than one per 45 seconds of music. Each note exists because something is worth saying at that point. Long silences between notes are fine: the music is playing.

- `kind`:
  - `music` — what is happening now, by name: an entry, a key, a return, a marking in the score, a technique.
  - `form` — where we are: the start of a section, a return, the coda.
  - `life` / `world` — the composer, the première, the people, the reception. Put these where the music does not need comment (a repeat, a long held passage).
  - `listen` — retired. Say what happens instead of telling the reader what to do.
- `title`: 2–6 words, concrete. “Harp, then horns”, not “A broad early swell”.
- `text`: at most 55 words, present tense, plain. Name the instrument, the key, the marking. A note may be one sentence.
- `precision: 'passage'` notes must stay true if they appear ten seconds early or late: write about the passage (“The middle section moves to G♭ …”), not the instant.
- `evidence` is shown to readers under “How we know”. One or two plain sentences naming the source: the score (edition, bars), a letter, a book with page, a programme note with its URL. Never decibels, file paths, “the report” or analysis figures.

## Timing

You cannot hear the recording, so anchor every time to something established:

1. **Score-aligned bars.** Where `docs/assets/data/<id>/score.json` exists, use `bar: { n, occ }` and `basis: 'score-aligned'` for anything tied to a moment.
2. **Section boundaries.** The recording's `sections[].t` are the established formal joins. A `form` or `music` note about a new section goes at (or just after) its boundary, with `basis: 'score-proportion'` and `precision: 'passage'`.
3. **Existing times.** Keep an existing note's `t` when the event it names is known to be there.

Never name an instrument entrance, a sung word or a bar number at a moment unless one of these supports it. When you cannot place an event, write about the whole passage or the whole piece, or write a `life`/`world` note. Key estimates from audio can confuse a key with its dominant or relative; never rely on them alone.

`life` and `world` notes need no timing evidence, but they must be facts you are certain of, with the source in `evidence`.

## Introductions, sections and joins

- `intro`: one or two sentences. What this is and why it is worth hearing. No instructions.
- `sections[].label`: `A · Flute alone, then the orchestra`. Concrete, under eight words after the letter. `mNote` ≤ 12 words.
- `transitions[].how`: at most 80 words. The chord at the join, the bass, the instrument that carries across, the marking. Name them; no morals.

## Validation

`node tools/validate.mjs content/listen/<id>.mjs` must print `ok`. It checks the schema, the recording's licence and stream, sorted times within the duration, word limits, note counts and the house-style patterns in `AUTHORING.md`.
