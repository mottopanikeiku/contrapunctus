export default {
  "id": "elgar-enigma-romanza",
  "composer": "elgar",
  "order": 13,
  "work": "Variations on an Original Theme “Enigma”, Op. 36",
  "movement": "XIII. “***” (Romanza: Moderato)",
  "set": {
    "id": "elgar-enigma",
    "title": "Enigma Variations, Op. 36",
    "part": 13,
    "of": 14
  },
  "year": "1898–99",
  "key": "G major",
  "forces": "Orchestra",
  "performers": "Hallé Orchestra, John Barbirolli",
  "recorded": "1947",
  "source": {
    "file": "File:Elgar; Enigma variations, Theme XIII. Romanza.ogg"
  },
  "intro": "A clarinet quotes Mendelssohn’s <i>Calm Sea and Prosperous Voyage</i> over the distant throb of a liner’s engines. Elgar leaves three asterisks where his traveller’s name should be.",
  "sections": [
    {
      "t": 0,
      "label": "Var 13 · Clarinet over moving strings",
      "m": "Var 13",
      "mNote": "The G-major Romanza begins gently"
    },
    {
      "t": 18,
      "label": "Quotation · Mendelssohn at sea",
      "m": "Quotation",
      "mNote": "Solo clarinet above a soft timpani roll"
    },
    {
      "t": 62,
      "label": "Var 13 · Brass, then the Romanza again",
      "m": "Var 13",
      "mNote": "A brief brass swell, then the clarinet returns"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Clarinet over little waves",
      "text": "A clarinet sings over rising and falling second violins and cellos. The first violins join, then the winds widen the phrase. Elgar calls this a Romanza; the opening has the ease of a song in G major.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 87, rehearsal 55: Moderato in G major, opening clarinet melody and moving second-violin and cello parts."
    },
    {
      "t": 18,
      "kind": "music",
      "title": "A ship’s engines",
      "text": "The clarinet quotes <i>Calm Sea and Prosperous Voyage</i> by [[mendelssohn|Mendelssohn]], above a whispering timpani roll. Elgar asks for side-drum sticks on the timpani. His commentary identifies the sound beneath the tune as the engines of a distant liner.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 88, rehearsal 56: tranquillo, quotation marks around the clarinet phrase and timpani marked ppp with side-drum sticks. Elgar’s account of the liner appears at https://en.wikipedia.org/wiki/Enigma_Variations, variation XIII."
    },
    {
      "t": 65,
      "kind": "world",
      "title": "The woman behind the asterisks",
      "text": "Lady Mary Lygon of Madresfield Court supports local music-making and sails to Australia in 1899. Her initials appear in Elgar’s sketches; three asterisks replace them in print. The missing name keeps this portrait’s secret alive while the clarinet sends its borrowed tune out to sea.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "The Elgar Society regards Lady Mary Lygon as the probable subject: https://elgar.org/3enigma.htm. Her festival support and the initials L.M.L. in the sketches are discussed at https://en.wikipedia.org/wiki/Enigma_Variations, citing Michael Kennedy, Portrait of Elgar, pp. 95–96. Helen Weaver is an alternative identification; the voyage began after the music was completed."
    }
  ],
  "transitions": [
    {
      "id": "quieter-seascape",
      "title": "The Romanza puts out to sea",
      "from": "Var 13 · Clarinet over moving strings",
      "to": "Quotation · Mendelssohn at sea",
      "at": {
        "t": 18
      },
      "how": "<p><i>Poco rallentando</i> leads to <i>tranquillo</i>. The upper strings fade out while divided violas keep a small rising-and-falling figure moving. A soft timpani roll and held cello notes support the clarinet’s Mendelssohn quotation. The score puts quotation marks around the borrowed phrase.</p>",
      "devices": [
        "tempo change",
        "texture change",
        "decrescendo"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 88, rehearsal 56: slowing, divided viola accompaniment, soft timpani, held cellos and the marked clarinet quotation."
    },
    {
      "id": "broader-return",
      "title": "Brass interrupt the crossing",
      "from": "Quotation · Mendelssohn at sea",
      "to": "Var 13 · Brass, then the Romanza again",
      "at": {
        "t": 62
      },
      "how": "<p>Trumpets, trombones and tuba enter softly, then swell over repeated low-string figures. The timpani change from their roll to measured notes. Elgar quickly withdraws the brass again: <i>diminuendo molto</i>, then <i>Come prima</i>, with the clarinet and the moving strings of the G-major Romanza.</p>",
      "devices": [
        "orchestration change",
        "crescendo build",
        "motivic link"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 90, rehearsals 58–59: brass crescendo over repeating low strings, measured timpani notes, diminuendo molto and Come prima."
    }
  ],
  "orchestra": {
    "ensemble": [
      "piccolo",
      "flutes",
      "oboes",
      "clarinets",
      "bassoons",
      "contrabassoon",
      "horns",
      "trumpets",
      "trombones",
      "tuba",
      "timpani",
      "percussion",
      "violins-1",
      "violins-2",
      "violas",
      "cellos",
      "basses"
    ],
    "basis": "score-proportion",
    "source": {
      "title": "Elgar, Enigma Variations, full score (Novello)",
      "url": "https://s9.imslp.org/files/imglnks/usimg/1/1e/IMSLP23792-PMLP07276-Elgar_-_Enigma_Variations_(orch._score).pdf",
      "locator": "Novello full score, pp. 87–92, rehearsal figures 55–60: the clarinet Romanza, quotations from Mendelssohn and the central brass passage."
    },
    "timeline": [
      { "t": 0, "playing": ["clarinets", "violins-2", "cellos"], "lead": ["clarinets"], "note": "Clarinet sings over gently rocking second violins and cellos (p. 87)." },
      { "t": 6, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["clarinets", "violins-1"], "note": "Winds and strings take up the Romanza phrase, with quiet horn chords beneath them (p. 87)." },
      { "t": 24, "playing": ["clarinets", "horns", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["clarinets"], "note": "Solo clarinet quotes Mendelssohn above a soft timpani roll and quiet strings (p. 88)." },
      { "t": 40, "playing": ["clarinets", "timpani", "violas", "cellos"], "lead": ["clarinets"], "note": "The clarinet continues over rocking violas and a held cello note (p. 89)." },
      { "t": 62, "playing": ["flutes", "oboes", "clarinets", "bassoons", "contrabassoon", "horns", "trumpets", "trombones", "tuba", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["horns", "violins-1"], "note": "Brass chords swell and recede above the timpani before the Romanza returns (p. 90)." },
      { "t": 80, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["clarinets", "violins-1"], "note": "Marked Come prima, the Romanza returns to the woodwinds and rocking strings (pp. 90–91)." },
      { "t": 100, "playing": ["clarinets", "horns", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["clarinets"], "note": "The strings fall quiet and the timpani roll returns beneath another clarinet quotation (p. 92)." },
      { "t": 118, "playing": ["clarinets", "timpani", "violas", "cellos"], "lead": ["clarinets"], "note": "Clarinet, violas and cellos remain after the upper strings, horns and basses fall silent (p. 92)." }
    ]
  }
};
