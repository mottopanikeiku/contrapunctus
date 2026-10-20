export default {
  "id": "elgar-enigma-dorabella",
  "composer": "elgar",
  "order": 10,
  "work": "Variations on an Original Theme “Enigma”, Op. 36",
  "movement": "X. “Dorabella” (Intermezzo: Allegretto)",
  "set": {
    "id": "elgar-enigma",
    "title": "Enigma Variations, Op. 36",
    "part": 10,
    "of": 14, "unit": "parts" },
  "year": "1898–99",
  "key": "G major",
  "forces": "Orchestra",
  "performers": "Hallé Orchestra, John Barbirolli",
  "recorded": "1947",
  "source": {
    "file": "File:Elgar; Enigma variations, Theme X. Intermezzo Dorabella.ogg"
  },
  "intro": "Variation X, an Intermezzo marked Allegretto, is Elgar’s portrait of Dora Penny, with a long viola melody set among short, skipping figures and brief pauses. Elgar named her Dorabella after the young woman in Mozart’s <i>Così fan tutte</i>.",
  "sections": [
    {
      "t": 0,
      "label": "Var 10 · “Dorabella”, Allegretto, muted violins",
      "m": "Var 10",
      "mNote": "Muted violins play over plucked bass notes."
    },
    {
      "t": 64,
      "label": "Var 10 · Flute melody over violin figures",
      "m": "Var 10",
      "mNote": "The flute holds long notes above short figures in the violins."
    },
    {
      "t": 104,
      "label": "Var 10 · Short wind phrases and muted strings",
      "m": "Var 10",
      "mNote": "Short wind phrases alternate with muted strings."
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Muted violins and pizzicato, rehearsal 38",
      "text": "Muted violins enter late in the bar, with short rests between their phrases. The cellos and basses play pizzicato. The broken phrasing alludes to Dora Penny’s slight stammer.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 57, rehearsal 38: muted violins, rests and pizzicato lower strings. The allusion to Penny’s stammer is documented by John Pickard, BBC programme note (2005): https://www.bbc.com/radio3/classical/elgar/notes/note_enigma.shtml"
    },
    {
      "t": 32,
      "kind": "world",
      "title": "Dora and her memoir",
      "text": "Dora was the daughter of the rector of Wolverhampton and a close friend of the Elgars. Years later, as Mrs Richard Powell, she wrote <i>Edward Elgar: Memories of a Variation</i>.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Penny’s family and friendship: https://elgar.org/3enigma.htm. Her married name and memoir: https://en.wikipedia.org/wiki/Enigma_Variations, variation X."
    },
    {
      "t": 64,
      "kind": "music",
      "title": "Flute melody over muted violins",
      "text": "The flute plays a sustained melody while the muted violins continue their short, broken figures. Earlier in the variation the solo viola has the sustained line.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, pp. 59–60 and 64–65: sustained viola and flute phrases. Elgar singles out these two instruments in his commentary on variation X: https://en.wikipedia.org/wiki/Enigma_Variations"
    }
  ],
  "transitions": [
    {
      "id": "broader-line",
      "title": "The flute’s phrase over pizzicato strings",
      "from": "Var 10 · “Dorabella”, Allegretto, muted violins",
      "to": "Var 10 · Flute melody over violin figures",
      "at": {
        "t": 64
      },
      "how": "<p>The G major dance stays at Allegretto. Over pizzicato cellos and basses, the flute holds its melody across the bar lines. The oboes play short figures between its phrases, and the muted violins continue their off-beat figures.</p>",
      "devices": [
        "orchestration change",
        "texture change"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, pp. 64–65: sustained flute melody, short oboe figures, muted violins and pizzicato lower strings."
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
      "locator": "Novello full score, pp. 57–73, rehearsal figures 38–46: muted strings, the solo viola melody and its later flute counterpart."
    },
    "timeline": [
      { "t": 0, "playing": ["violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "violins-2"], "note": "Muted violins play off the beat above short viola chords and pizzicato low strings (p. 57)." },
      { "t": 6, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "oboes"], "note": "Short wind phrases interrupt the strings’ dance (pp. 57–58)." },
      { "t": 22, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violas"], "note": "A solo viola plays a longer melody beneath the short figures in the violins (pp. 59–60)." },
      { "t": 36, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["bassoons", "violas"], "note": "Bassoons and violas alternate between the short violin phrases (pp. 61–62)." },
      { "t": 44, "playing": ["flutes", "oboes", "clarinets", "bassoons", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "violins-2"], "note": "The violins’ skipping figures return, punctuated by quiet wind chords (pp. 63–64)." },
      { "t": 64, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["flutes", "violins-1"], "note": "The flute holds a long melody above the strings’ short, separated notes (pp. 65–66)." },
      { "t": 80, "playing": ["clarinets", "bassoons", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-2", "violas"], "note": "Second violins and violas continue the dance while the upper woodwinds rest (pp. 67–68)." },
      { "t": 94, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "flutes"], "note": "Little wind phrases rejoin the violins as the dance nears its end (pp. 69–71)." },
      { "t": 110, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "clarinets"], "note": "Winds and muted strings exchange the final phrases over plucked bass notes (pp. 72–73)." }
    ]
  }
};
