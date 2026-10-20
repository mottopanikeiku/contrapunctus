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
  "intro": "Dorian Pâquet plays Chopin’s Prelude in E minor, Op. 28 No. 4, marked Largo, on a Chavanne piano made in 2006.",
  "sections": [
    { "t": 0, "label": "A · Melody over repeated left-hand quaver chords", "m": "A", "mNote": "The left-hand chords change one note at a time." },
    { "t": 50, "label": "A′ · B returns above the chords", "m": "A′", "mNote": "The second phrase rises higher, then descends." },
    { "t": 94, "label": "Coda · The last three chords", "m": "Coda", "mNote": "A fermata over a rest precedes the cadence." }
  ],
  "cues": [
    {
      "bar": { "n": "1", "occ": 1 },
      "kind": "music",
      "title": "Opening bars, left-hand chords",
      "text": "The piano begins softly, <i>espressivo</i>. The first chord has G in the bass, with B and E above. The left hand repeats its chords while the notes within them gradually descend, and above them the melody holds B for three beats before moving to C.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Peters edition, edited by Herrmann Scholtz (1900), bars 1–4. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    },
    {
      "t": 34,
      "kind": "world",
      "title": "Chavanne piano, 2006",
      "text": "Pâquet plays a piano made by Chavanne. Vincent Chavanne began by making copies of old harpsichords in Toulouse, then turned to pianos and established his company in 1990. The piano on this recording dates from 2006.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Instrument and recording date: https://commons.wikimedia.org/wiki/File:Prelude_op28_n4.wav. Company history: https://fr.wikipedia.org/wiki/Chavanne_(pianos)"
    },
    {
      "bar": { "n": "16", "occ": 1 },
      "kind": "music",
      "title": "Stretto and forte, bars 16–19",
      "text": "At bar 16 Chopin marks <i>stretto</i>. The right hand rises above its earlier narrow range, and the left hand reaches down to a low bass before the <i>forte</i> chords at bar 17. Chopin then writes <i>diminuendo</i>, then <i>piano</i>.",
      "basis": "score-aligned",
      "precision": "moment",
      "evidence": "Peters–Scholtz edition, bars 16–19: stretto, forte at bar 17, diminuendo and piano. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    }
  ],
  "transitions": [
    {
      "id": "into-renewed-phrase",
      "title": "B returns over E minor",
      "from": "A · Melody over repeated left-hand quaver chords",
      "to": "A′ · B returns above the chords",
      "at": { "t": 50 },
      "span": [40, 62],
      "how": "<p>The left hand rests while the right hand plays a short flourish. B returns above an E minor chord with G in the bass, and the repeated quavers resume. The melody starts again from B, and at the written <i>stretto</i> it rises.</p>",
      "devices": ["motivic link", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Peters–Scholtz edition, bars 12–16. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    },
    {
      "id": "into-final-space",
      "title": "Fermata before the final chords",
      "from": "A′ · B returns above the chords",
      "to": "Coda · The last three chords",
      "at": { "t": 94 },
      "span": [84, 106],
      "how": "<p>Under <i>smorzando</i> the accompaniment fades out. Its repeated quavers turn into a held chord, followed by a silence lengthened by a fermata. The last three chords are marked <i>pianissimo</i>. B7 resolves to E minor, and the melody rises a semitone from D♯ to E.</p>",
      "devices": ["decrescendo", "general pause", "fermata", "perfect cadence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Peters–Scholtz edition, bars 21–25. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    }
  ]
};
