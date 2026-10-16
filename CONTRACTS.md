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
