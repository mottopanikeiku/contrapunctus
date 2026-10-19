export default {
  "id": "chopin-prelude-op28-4",
  "composer": "chopin",
  "order": 10,
  "work": "Prelude in E minor, Op. 28 No. 4",
  "movement": "Largo",
  "year": "completed 1839",
  "key": "E minor",
  "forces": "Piano",
  "performers": "Ivan Ilić",
  "recorded": "October 2005, Paris",
  "source": {
    "file": "File:Ivan Ilić-Chopin Prelude Opus 28 n.4.ogg"
  },
  "intro": "Ivan Ilić plays a Prelude whose melody scarcely moves while the chords beneath it sink by semitones. The whole drama fits into twenty-five bars.",
  "sections": [
    { "t": 0, "label": "A · The chords descend", "m": "A", "mNote": "Repeated quavers beneath a lingering melody" },
    { "t": 48, "label": "A′ · The melody tries again", "m": "A′", "mNote": "The opening returns, then rises to a forte" },
    { "t": 90, "label": "Coda · Silence before E minor", "m": "Coda", "mNote": "A held rest separates the last chords" }
  ],
  "cues": [
    {
      "bar": { "n": "0", "occ": 1 },
      "kind": "music",
      "title": "B, then its neighbour",
      "text": "An octave leap lands on B. The melody lingers there, touching C and returning, while the left hand repeats its chords eight times a bar. Inside those chords, individual notes slip down by semitones. The tune hardly has to move.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Peters edition, edited by Herrmann Scholtz (1900), upbeat and bars 1–4. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    },
    {
      "t": 34,
      "kind": "world",
      "title": "Berkeley to Paris",
      "text": "Ilić comes to Paris with degrees in mathematics and music from Berkeley, then studies at the Paris Conservatoire and the École Normale. He makes this recording in Paris in October 2005. Three years later, his Debussy disc brings together that composer’s twenty-four preludes.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Training and the October 2008 Debussy release: https://en.wikipedia.org/wiki/Ivan_Ilić_(pianist). Session: https://commons.wikimedia.org/wiki/File:Ivan_Ilić-Chopin_Prelude_Opus_28_n.4.ogg"
    },
    {
      "bar": { "n": "23", "occ": 1 },
      "kind": "music",
      "title": "A rest with a fermata",
      "text": "The repeated quavers stop. Chopin puts a fermata over the silence, then asks for the final chords <i>pianissimo</i>. D♯ rises to E in the melody as the bass falls from B to E. After so much slipping away, the two hands finally arrive together.",
      "basis": "score-aligned",
      "precision": "moment",
      "evidence": "Peters–Scholtz edition, bars 23–25: fermata over the rest, pp, and the final B7–E minor cadence. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    }
  ],
  "transitions": [
    {
      "id": "into-renewed-phrase",
      "title": "The first melody tries again",
      "from": "A · The chords descend",
      "to": "A′ · The melody tries again",
      "at": { "t": 48 },
      "span": [38, 60],
      "how": "<p>A short right-hand flourish crosses the gap left by the accompaniment. The opening B returns over an E minor chord with G in the bass. The left-hand quavers begin again, quietly; this second phrase will break into <i>stretto</i>, pressing forward towards the forte.</p>",
      "devices": ["motivic link", "crescendo build"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Peters–Scholtz edition, bars 12–17: accompaniment rests, renewed opening at bar 13, stretto at bar 16. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    },
    {
      "id": "into-final-chords",
      "title": "The quavers stop",
      "from": "A′ · The melody tries again",
      "to": "Coda · Silence before E minor",
      "at": { "t": 90 },
      "span": [80, 102],
      "how": "<p><i>Smorzando</i> asks the piano to die away. The left-hand quavers stop, a chord hangs, and a rest carries a fermata. Three quiet chords follow; the last two take B7 to E minor, with the melody rising D♯–E above the bass’s B–E.</p>",
      "devices": ["decrescendo", "fermata", "general pause", "perfect cadence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Peters–Scholtz edition, bars 21–25. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    }
  ]
};
