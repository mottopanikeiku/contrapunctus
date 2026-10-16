# Writing for the Listening Room

The Listening Room is the heart of the site. A real recording plays automatically, a live visualizer runs beside it, and timed notes appear as the music unfolds. The notes explain what is happening in the music at that moment and tell the composer's life and world. The programme plays straight through, from Bach to the present.

Read `content/listen/mahler-5-adagietto.mjs` in full first. It is the exemplar: match its density, tone, cue spacing and evidence discipline. House style is in `AUTHORING.md` (no filler, every sentence a fact, British spelling, curly quotes). Composer biographies already exist in `content/composers/<slug>.mjs`; mine them for life and world cues, but don't contradict them.

## Choosing a recording

1. `node tools/audio.mjs search "<composer> <work>"` lists Commons audio files.
2. `node tools/audio.mjs check "File:<exact title>"` shows duration, licence, performer, description and the stream URL.
3. Requirements:
   - Licence is Public domain, CC0, CC BY or CC BY-SA. Commons' own licence field is authoritative.
   - Must have a stream URL (an MP3 derivative).
   - One complete movement or piece, ideally **3–14 minutes**. Never a fragment that cuts off mid-phrase.
   - The best performance and sound quality available: prefer professional or major-conservatory ensembles (Musopen, US military bands and orchestras, European Archive LPs, conservatory orchestras) over amateur or MIDI renderings. **Never a synthesized or MIDI rendering.**
   - Choose the work that shows the composer best. A famous, characteristic movement beats an obscure complete piece.
4. If nothing on Commons meets these rules for a composer, write no file for them and say so in your report. Do not use other hosts.

## The file: `content/listen/<id>.mjs`

`id` = `<composer-slug>-<short-work-slug>`, e.g. `bach-wtc1-prelude-fugue-c`, `ravel-bolero`. The file name equals the id.

```js
export default {
  id, composer: '<slug from content/roster.mjs>', order: 1,  // order among this composer's tracks
  work: 'Symphony No. 5', movement: 'IV. Adagietto — Sehr langsam' | '',
  year: '1901–02', key: 'F major' | '', forces: 'Strings and harp',
  performers: 'Exactly as documented on the Commons file page; leave out what is not documented',
  recorded: '1958' | '',
  source: { file: 'File:<exact Commons title>' },
  intro: 'One or two sentences: why this piece, what to listen for.',
  sections: [{ t: seconds, label: 'Exposition · first theme' }, ...],  // 3–8 large formal sections
  cues: [{ t: seconds, kind, title, text, evidence? }, ...],
};
```

Then run `node tools/audio.mjs analyze content/listen/<id>.mjs`. It downloads the recording and writes the analysis report to `cache/analysis/<id>.txt`. Read the report before you write a single timestamp.

## Cues

- `kind` is one of:
  - `music`: what you are hearing now (instruments, harmony, texture, rhythm, technique).
  - `form`: where we are in the structure.
  - `listen`: what to listen for next, or a performance or interpretation point.
  - `life`: the composer's biography.
  - `world`: art, history, people and reception around the work.
- Aim for roughly one cue every 30–45 seconds. The first cue is at `t: 0`. Mix the kinds: at least 40% `music`/`form`/`listen`, and at least 3 `life`/`world` cues per track. Put life and world cues in passages where little new happens musically.
- `title`: 2–6 words. `text`: 1–3 sentences, **at most 55 words**. They are read while listening.
- Speak to the listener in the present tense about the sound ("The horns enter…", "Listen for…").

## Timing discipline (the most important rule)

You cannot hear the recording. Every `music`, `form` and `listen` cue that refers to a specific event must be anchored in the analysis report: a structural boundary, a loudness jump, a change in brightness, a shift in key region, a change in onset density, or the start or end of sound. Record the anchor in `evidence`. Evidence is never shown to readers; it is used to audit you.

Combine the report with what you know of the score. Bar-count proportions help: if a movement has 103 bars and a middle section starts at bar 39, its boundary should fall roughly 35–45% of the way through, adjusted for tempo changes. If the report and your expectation disagree, trust the report for timing and describe the event more generally.

Where you cannot locate an event precisely, do not claim it at a time. Write a general `listen` cue ("Throughout this section…") or a `life`/`world` cue. Never invent instrument entrances or bar numbers you cannot anchor. Key estimates from audio can confuse a key with its dominant or relative; treat them as confirmation only.

`life` and `world` cues need no audio evidence, but they must be facts you are certain of.

## Validation

`node tools/validate.mjs content/listen/<id>.mjs` must print `ok`. It checks the schema, the recording's licence and stream, that cue and section times are sorted and within the duration, the word limits, and that the composer exists.
