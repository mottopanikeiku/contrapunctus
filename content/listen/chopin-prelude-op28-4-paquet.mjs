export default {
  "id": "chopin-prelude-op28-4-paquet",
  "composer": "chopin",
  "order": 20,
  "work": "Prelude in E minor, Op. 28 No. 4",
  "movement": "Largo",
  "year": "completed 1839",
  "key": "E minor",
  "forces": "Piano",
  "performers": "Dorian Pâquet",
  "recorded": "21 October 2019",
  "source": {
    "file": "File:Prelude op28 n4.wav"
  },
  "concert": false,
  "intro": "Dorian Pâquet plays the E minor Prelude on a Chavanne piano made in 2006. Chopin gives the right hand a few lingering notes and lets the left hand do the aching.",
  "sections": [
    { "t": 0, "label": "A · Quavers beneath a held melody", "m": "A", "mNote": "The left-hand chords change one note at a time" },
    { "t": 50, "label": "A′ · B returns above the chords", "m": "A′", "mNote": "The second phrase reaches higher, then falls back" },
    { "t": 94, "label": "Coda · The last three chords", "m": "Coda", "mNote": "A fermata holds the silence before the cadence" }
  ],
  "cues": [
    {
      "bar": { "n": "1", "occ": 1 },
      "kind": "music",
      "title": "The left hand sinks",
      "text": "The piano begins softly, <i>espressivo</i>. Its first chord puts G in the bass, with B and E above. The left hand keeps repeating, but the notes within it gradually sink. Above them, the melody holds B through three beats before touching C.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Peters edition, edited by Herrmann Scholtz (1900), bars 1–4. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    },
    {
      "t": 34,
      "kind": "world",
      "title": "A French piano",
      "text": "Pâquet’s instrument bears the name Chavanne. Vincent Chavanne begins by making copies of old harpsichords in Toulouse, then turns to pianos and establishes his company in 1990. The piano on this recording dates from 2006.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Instrument and recording date: https://commons.wikimedia.org/wiki/File:Prelude_op28_n4.wav. Company history: https://fr.wikipedia.org/wiki/Chavanne_(pianos)"
    },
    {
      "bar": { "n": "16", "occ": 1 },
      "kind": "music",
      "title": "The melody breaks free",
      "text": "<i>Stretto</i>: the phrase presses forward. The right hand rises above its earlier narrow range, and the left hand reaches down for a low bass before striking the forte chords. The outburst is brief. Chopin soon writes <i>diminuendo</i>, then <i>piano</i>.",
      "basis": "score-aligned",
      "precision": "moment",
      "evidence": "Peters–Scholtz edition, bars 16–19: stretto, forte at bar 17, diminuendo and piano. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    }
  ],
  "transitions": [
    {
      "id": "into-renewed-phrase",
      "title": "B returns over E minor",
      "from": "A · Quavers beneath a held melody",
      "to": "A′ · B returns above the chords",
      "at": { "t": 50 },
      "span": [40, 62],
      "how": "<p>The left hand rests while the right hand curls through a short flourish. B returns above an E minor chord, G at the bottom, and the repeated quavers resume. The melody begins its second attempt quietly before the written <i>stretto</i> drives it upwards.</p>",
      "devices": ["motivic link", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Peters–Scholtz edition, bars 12–16. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    },
    {
      "id": "into-final-space",
      "title": "A fermata over silence",
      "from": "A′ · B returns above the chords",
      "to": "Coda · The last three chords",
      "at": { "t": 94 },
      "span": [84, 106],
      "how": "<p>The accompaniment dies away under <i>smorzando</i>. Its repeated quavers become a held chord and then silence, prolonged by a fermata. The final three chords are marked <i>pianissimo</i>; B7 resolves to E minor as the melody rises a semitone from D♯ to E.</p>",
      "devices": ["decrescendo", "general pause", "fermata", "perfect cadence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Peters–Scholtz edition, bars 21–25. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    }
  ]
};
