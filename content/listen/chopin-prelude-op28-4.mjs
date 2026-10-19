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
  "intro": "Ivan Ilić plays the Prelude in E minor, Op. 28 No. 4, marked Largo. The melody moves very little over twenty-five bars, and the chords beneath it descend by semitones.",
  "sections": [
    { "t": 0, "label": "A · The chords descend", "m": "A", "mNote": "Repeated quavers beneath a lingering melody" },
    { "t": 48, "label": "A′ · Opening melody returns, rising to forte", "m": "A′", "mNote": "The opening returns, then rises to a forte." },
    { "t": 90, "label": "Coda · Rest before E minor", "m": "Coda", "mNote": "A held rest separates the last chords." }
  ],
  "cues": [
    {
      "bar": { "n": "0", "occ": 1 },
      "kind": "music",
      "title": "Melody on B, bars 1–4",
      "text": "The melody reaches B by an octave leap and stays there, touching C and returning to B. The left hand repeats its chords eight times a bar, and within them individual notes move down by semitones.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Peters edition, edited by Herrmann Scholtz (1900), upbeat and bars 1–4. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    },
    {
      "t": 34,
      "kind": "world",
      "title": "Ivan Ilić, Berkeley and Paris",
      "text": "Ilić came to Paris with degrees in mathematics and music from Berkeley, then studied at the Paris Conservatoire and the École Normale. He made this recording in Paris in October 2005. Three years later he released a Debussy disc of that composer’s twenty-four preludes.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Training and the October 2008 Debussy release: https://en.wikipedia.org/wiki/Ivan_Ilić_(pianist). Session: https://commons.wikimedia.org/wiki/File:Ivan_Ilić-Chopin_Prelude_Opus_28_n.4.ogg"
    },
    {
      "bar": { "n": "23", "occ": 1 },
      "kind": "music",
      "title": "Fermata and final cadence",
      "text": "The repeated quavers stop. Chopin puts a fermata over the rest, then marks the final chords <i>pianissimo</i>. In the melody D♯ rises to E while the bass falls from B to E.",
      "basis": "score-aligned",
      "precision": "moment",
      "evidence": "Peters–Scholtz edition, bars 23–25: fermata over the rest, pp, and the final B7–E minor cadence. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    }
  ],
  "transitions": [
    {
      "id": "into-renewed-phrase",
      "title": "The opening melody returns",
      "from": "A · The chords descend",
      "to": "A′ · Opening melody returns, rising to forte",
      "at": { "t": 48 },
      "span": [38, 60],
      "how": "<p>A short right-hand flourish crosses the gap left by the accompaniment. At bar 13 the opening B returns over an E minor chord with G in the bass, and the left-hand quavers begin again. This second phrase breaks into <i>stretto</i> at bar 16 and presses forward towards the forte.</p>",
      "devices": ["motivic link", "crescendo build"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Peters–Scholtz edition, bars 12–17: accompaniment rests, renewed opening at bar 13, stretto at bar 16. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    },
    {
      "id": "into-final-chords",
      "title": "The quavers stop",
      "from": "A′ · Opening melody returns, rising to forte",
      "to": "Coda · Rest before E minor",
      "at": { "t": 90 },
      "span": [80, 102],
      "how": "<p>The marking <i>smorzando</i> directs the piano to die away. The left-hand quavers stop, a chord is held, and a rest carries a fermata. Three soft chords follow. The last two move from B7 to E minor, with the melody rising D♯–E above B–E in the bass.</p>",
      "devices": ["decrescendo", "fermata", "general pause", "perfect cadence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Peters–Scholtz edition, bars 21–25. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=921"
    }
  ]
};
