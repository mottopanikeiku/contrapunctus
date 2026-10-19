export default {
  "id": "chopin-prelude-op28-15",
  "composer": "chopin",
  "order": 10,
  "work": "Prelude in D♭ major, Op. 28 No. 15",
  "movement": "Sostenuto — Raindrop",
  "year": "completed 1839",
  "key": "D♭ major",
  "forces": "Piano",
  "performers": "Ivan Ilić",
  "recorded": "October 2005, Paris",
  "source": {
    "file": "File:Ivan Ilić-Chopin - Prelude no. 15 in D flat major.ogg"
  },
  "intro": "Chopin’s <i>Raindrop</i> Prelude in D♭ major, Op. 28 No. 15, marked Sostenuto, repeats A♭ beneath the melody, and in the C♯-minor middle section the note is written as G♯. Ivan Ilić plays it in a recording made in Paris in October 2005.",
  "sections": [
    { "t": 0, "label": "A · D♭-major melody over repeated A♭", "m": "A", "mNote": "Repeated quavers under a slow right-hand melody" },
    { "t": 86, "label": "B · C♯ minor, repeated G♯ over chords", "m": "B", "mNote": "The repeated note moves to the right hand." },
    { "t": 210, "label": "A′ · D♭-major melody, shortened", "m": "A′", "mNote": "The opening melody comes back in shortened form." }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Repeated A♭, opening bars",
      "text": "The right hand plays a sustained melody in D♭ major over repeated A♭ quavers. The chords change around the repeated note. Chopin marks the piece <i>Sostenuto</i>.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 1–4: Sostenuto, recurring A♭ quavers and sustained right-hand melody. https://chopinscores.org/partytura/128"
    },
    {
      "t": 60,
      "kind": "life",
      "title": "George Sand’s account, Valldemossa",
      "text": "At Valldemossa, George Sand returned from Palma through heavy rain and found Chopin distraught at the piano. In her memoir, <i>Histoire de ma vie</i>, she wrote that he had dreamt of drowning, with icy drops falling on his chest. When she pointed to the rain on the roof, he angrily rejected the comparison.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "George Sand’s Histoire de ma vie, account of the Mallorca winter of 1838–39, quoted at https://en.wikipedia.org/wiki/Prelude,_Op._28,_No._15_(Chopin). Her memoir leaves the prelude unnamed; later tradition attaches the episode to No. 15. Mieczysław Tomaszewski discusses the rain association: https://chopin.nifc.pl/en/chopin/kompozycja/208"
    },
    {
      "t": 86,
      "kind": "form",
      "title": "Change to C♯ minor",
      "text": "The A♭ is now written G♯, on the same piano key. The right hand repeats it while the left hand plays the melody in low chords. D♭ major has moved to C♯ minor, and Chopin marks the new passage <i>sotto voce</i>, under the breath.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 27–31: change of key signature, right-hand G♯ quavers and lower left-hand melody, marked sotto voce. https://chopinscores.org/partytura/128"
    },
    {
      "t": 210,
      "kind": "form",
      "title": "Return of the opening melody",
      "text": "The opening melody returns at bar 76, beginning on F above D♭, with the original key signature restored. The repeated A♭ sounds beneath the tune again. This return is brief and leads to a shortened close.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 75–83: return to the original key signature and opening melody at bar 76, followed by the abbreviated close. https://chopinscores.org/partytura/128"
    },
    {
      "t": 246,
      "kind": "music",
      "title": "Unaccompanied melody before the close",
      "text": "Near the end, the left hand stops for two bars, and the melody descends alone in crotchets. The repeated A♭ returns beneath the closing chords. The prelude ends on a D♭-major chord.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 82–89: two bars of unaccompanied melody, then the repeated A♭ and final D♭-major chord. https://chopinscores.org/partytura/128"
    }
  ],
  "transitions": [
    {
      "id": "into-minor-middle",
      "title": "A♭ becomes G♯",
      "from": "A · D♭-major melody over repeated A♭",
      "to": "B · C♯ minor, repeated G♯ over chords",
      "at": { "t": 86 },
      "span": [76, 98],
      "how": "<p>The opening melody stops, and A♭ continues alone in quavers. At bars 27–28 the key signature changes to C♯ minor, and the right hand writes the same sounding note as G♯. Low C♯ and G♯ begin the left-hand phrase, and E♮ soon adds the minor third. Chopin marks the passage <i>sotto voce</i>.</p>",
      "devices": ["common-tone modulation", "enharmonic reinterpretation", "register change", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 27–28. https://chopinscores.org/partytura/128"
    },
    {
      "id": "into-major-return",
      "title": "Return of the opening melody",
      "from": "B · C♯ minor, repeated G♯ over chords",
      "to": "A′ · D♭-major melody, shortened",
      "at": { "t": 210 },
      "span": [200, 222],
      "how": "<p>The last hushed chords rest on a low G♯ in the bass. In the linking half-bar G♯ is respelt as A♭, and the left hand moves through F, G♭ and E♭. A D♭ bass then brings back the opening melody on F, marked <i>piano</i>, with the repeated quavers again beneath the tune.</p>",
      "devices": ["decrescendo", "enharmonic reinterpretation", "motivic link", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 74–76. https://chopinscores.org/partytura/128"
    }
  ]
};
