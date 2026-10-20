export default {
  "id": "elgar-enigma-hdsp",
  "composer": "elgar",
  "order": 2,
  "work": "Variations on an Original Theme “Enigma”, Op. 36",
  "movement": "II. “H.D.S.-P.” (Allegro)",
  "set": {
    "id": "elgar-enigma",
    "title": "Enigma Variations, Op. 36",
    "part": 2,
    "of": 14, "unit": "parts" },
  "year": "1898–99",
  "key": "G minor",
  "forces": "Orchestra",
  "performers": "Hallé Orchestra, John Barbirolli",
  "recorded": "1947",
  "source": {
    "file": "File:Elgar; Enigma variations, Theme II. H.D.S.-P.ogg"
  },
  "intro": "The second of Elgar’s “Enigma” Variations, Op. 36, an Allegro titled “H.D.S.-P.”, portrays the pianist Hew David Steuart-Powell, who ran his fingers over the keys before playing in a piano trio. Elgar turned that warm-up into a short orchestral toccata and added chromatic notes to it.",
  "sections": [
    {
      "t": 0,
      "label": "Var 2 · Allegro, semiquaver figures in violins",
      "m": "Var 2",
      "mNote": "The violins exchange rapid semiquaver figures."
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Staccato semiquavers, violins",
      "text": "The first violins begin a staccato run, and the seconds take it up. Sharps and naturals crowd the short figures, which parody a pianist’s warm-up exercise. The woodwinds follow.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 8, rehearsal 5: semiquaver exchanges between the violin sections, followed by woodwinds. Elgar explains the parody in his commentary on variation II, reproduced at https://en.wikipedia.org/wiki/Enigma_Variations"
    },
    {
      "t": 22,
      "kind": "world",
      "title": "Piano trio partners of Elgar",
      "text": "H.D.S.-P. played piano trios with Elgar on violin and Basil Nevinson on cello. Elgar gave each of them a variation. The pianist’s is this Allegro, and the cellist’s is the twelfth variation, which has a long cello solo.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "The Elgar Society identifies the trio and the subjects of variations II and XII: https://elgar.org/3enigma.htm. Novello full score, pp. 8 and 82."
    }
  ],
  "transitions": [],
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
      "locator": "Novello full score, pp. 8–14, rehearsal figures 5–7: violin semiquavers, woodwind replies and the closing flute and clarinet solos."
    },
    "timeline": [
      { "t": 0, "playing": ["violins-1", "violins-2"], "lead": ["violins-1", "violins-2"], "note": "The two violin sections pass staccato semiquavers between them (p. 8)." },
      { "t": 6, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "clarinets"], "note": "Woodwinds answer the running string figures (pp. 8–9)." },
      { "t": 14, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["flutes", "clarinets", "violins-1"], "note": "Wind accents punctuate the quick string phrases (pp. 10–11)." },
      { "t": 22, "playing": ["flutes", "oboes", "clarinets", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["flutes", "clarinets"], "note": "Flutes and clarinets answer while the strings alternate running notes and shorter replies (p. 12)." },
      { "t": 30, "playing": ["flutes", "oboes", "clarinets", "bassoons", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "violins-2"], "note": "A solo timpani figure enters under the last violin exchanges and the quiet wind replies (pp. 13–14)." },
      { "t": 38, "playing": ["flutes", "clarinets", "violas", "cellos", "basses"], "lead": ["flutes", "clarinets"], "note": "The running violins stop; short flute and clarinet solos finish over the lower strings (p. 14)." }
    ]
  }
};
