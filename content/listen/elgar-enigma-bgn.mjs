export default {
  "id": "elgar-enigma-bgn",
  "composer": "elgar",
  "order": 12,
  "work": "Variations on an Original Theme “Enigma”, Op. 36",
  "movement": "XII. “B.G.N.” (Andante)",
  "set": {
    "id": "elgar-enigma",
    "title": "Enigma Variations, Op. 36",
    "part": 12,
    "of": 14, "unit": "parts" },
  "year": "1898–99",
  "key": "G minor",
  "forces": "Orchestra",
  "performers": "Hallé Orchestra, John Barbirolli",
  "recorded": "1947",
  "source": {
    "file": "File:Elgar; Enigma variations, Theme XII. B.G.N.ogg"
  },
  "intro": "Variation XII, “B.G.N.” (Andante), from Elgar’s Variations on an Original Theme “Enigma”, Op. 36, is a portrait of Basil Nevinson, who was the cellist in Elgar’s piano trio. A solo cello opens and closes the variation.",
  "sections": [
    {
      "t": 0,
      "label": "Var 12 · Andante, Nevinson’s solo cello",
      "m": "Var 12",
      "mNote": "Solo cello plays over soft lower strings."
    },
    {
      "t": 38,
      "label": "Var 12 · Violins join the cello melody",
      "m": "Var 12",
      "mNote": "Divided violins play above the cello phrase."
    },
    {
      "t": 112,
      "label": "Var 12 · Andante, solo cello",
      "m": "Var 12",
      "mNote": "The orchestra thins out around the solo cello."
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Solo cello, rehearsal 52",
      "text": "A solo cello begins <i>molto espressivo</i> and <i>ad libitum</i> for its first two bars, accompanied by quiet violas and the other cellos. At <i>a tempo</i> the whole cello section takes up the tune, marked <i>largamente ed espressivo</i>.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 82, rehearsal 52: solo cello marked molto espressivo and ad libitum, followed by a tempo and largamente ed espressivo for the cello section."
    },
    {
      "t": 30,
      "kind": "world",
      "title": "Nevinson, cellist in Elgar’s trio",
      "text": "Nevinson played chamber music with Elgar on violin and Hew David Steuart-Powell at the piano. In his written tribute Elgar praised his playing and recorded that Nevinson put his scientific and artistic skills at his friends’ disposal, wholeheartedly.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Elgar, My Friends Pictured Within (Novello, 1946), commentary on variation XII, reproduced at https://en.wikipedia.org/wiki/Enigma_Variations. The Elgar Society confirms the trio: https://elgar.org/3enigma.htm"
    },
    {
      "t": 112,
      "kind": "music",
      "title": "Ending for solo cello",
      "text": "The orchestra makes a diminuendo, and the solo cello has the last phrase. After a long pause the cello rises once more over held lower strings. The final marking is <i>attacca</i>, and the Romanza follows without a break.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 86: diminuendo molto, solo cello, longa fermata, ritardando and attacca. The extra final bar is reserved for separate performances."
    }
  ],
  "transitions": [
    {
      "id": "intimate-close",
      "title": "Wind releases under the solo cello",
      "from": "Var 12 · Violins join the cello melody",
      "to": "Var 12 · Andante, solo cello",
      "at": {
        "t": 112
      },
      "how": "<p>Elgar writes <i>diminuendo molto</i> across the winds and strings at the close of the G minor Andante. The flutes and oboes stop first, then the bassoons and horns. The basses are silent, and the orchestral cellos hold a low note beneath the soloist’s last upward phrase and its long pause.</p>",
      "devices": [
        "decrescendo",
        "orchestration change",
        "fermata"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 86: successive wind releases, silent double basses, held orchestral cellos and the solo cello’s final phrase."
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
      "locator": "Novello full score, pp. 82–86, rehearsal figures 52–54: solo cello, the orchestral answer and the return of the opening solo."
    },
    "timeline": [
      { "t": 0, "playing": ["violas", "cellos"], "lead": ["cellos"], "note": "The solo cello plays above divided violas and a held note in the other cellos (p. 82)." },
      { "t": 14, "playing": ["oboes", "clarinets", "bassoons", "horns", "violas", "cellos", "basses"], "lead": ["cellos", "violas"], "note": "All the cellos take up the tune with violas and basses; wind replies join them before the violins enter (pp. 82–83)." },
      { "t": 38, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "cellos"], "note": "Divided violins join the melody over a quiet timpani roll and wind chords (p. 83)." },
      { "t": 64, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "flutes"], "note": "Woodwind phrases are set around the long violin melody (p. 84)." },
      { "t": 82, "playing": ["clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "cellos"], "note": "The violins play on their G strings above lower wind chords (p. 85)." },
      { "t": 98, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "cellos"], "note": "Woodwinds join the rising strings; trumpets and trombones do not play (pp. 85–86)." },
      { "t": 112, "playing": ["clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["cellos"], "note": "Elgar wrote dim. molto as the winds stop and the cello returns to its solo (p. 86)." },
      { "t": 124, "playing": ["violas", "cellos"], "lead": ["cellos"], "note": "Solo cello repeats its opening phrase over divided violas and held cello notes (p. 86)." }
    ]
  }
};
