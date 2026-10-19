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
    "of": 14
  },
  "year": "1898–99",
  "key": "G minor",
  "forces": "Orchestra",
  "performers": "Hallé Orchestra, John Barbirolli",
  "recorded": "1947",
  "source": {
    "file": "File:Elgar; Enigma variations, Theme XII. B.G.N.ogg"
  },
  "intro": "Basil Nevinson is the cellist in Elgar’s piano trio, and the cello opens and closes his portrait. Between those two solos, a roomful of friends becomes an orchestra.",
  "sections": [
    {
      "t": 0,
      "label": "Var 12 · Nevinson’s cello",
      "m": "Var 12",
      "mNote": "A solo cello sings over hushed lower strings"
    },
    {
      "t": 38,
      "label": "Var 12 · The violins join",
      "m": "Var 12",
      "mNote": "Divided violins rise above the cello phrase"
    },
    {
      "t": 112,
      "label": "Var 12 · The cello’s last word",
      "m": "Var 12",
      "mNote": "The orchestra falls quiet around the soloist"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Nevinson’s own instrument",
      "text": "A solo cello begins <i>molto espressivo</i>, free to linger over its first two bars. Quiet violas and the other cellos support it. Then the whole cello section takes up the tune, still broad and singing.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 82, rehearsal 52: solo cello marked molto espressivo and ad libitum, followed by a tempo and largamente ed espressivo for the cello section."
    },
    {
      "t": 30,
      "kind": "world",
      "title": "The trio’s generous cellist",
      "text": "Nevinson plays chamber music with Elgar on violin and Hew David Steuart-Powell at the piano. Elgar’s written tribute praises more than his playing: Nevinson puts his scientific and artistic skills at his friends’ disposal, wholeheartedly.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Elgar, My Friends Pictured Within (Novello, 1946), commentary on variation XII, reproduced at https://en.wikipedia.org/wiki/Enigma_Variations. The Elgar Society confirms the trio: https://elgar.org/3enigma.htm"
    },
    {
      "t": 112,
      "kind": "music",
      "title": "A private farewell",
      "text": "The orchestra dwindles, and the cello has the last phrase. Elgar writes a long pause, then lets the soloist reach upwards once more over held lower strings. The final instruction is <i>attacca</i>: the Romanza follows without a break.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 86: diminuendo molto, solo cello, longa fermata, ritardando and attacca. The extra final bar is reserved for separate performances."
    }
  ],
  "transitions": [
    {
      "id": "intimate-close",
      "title": "The cello keeps singing",
      "from": "Var 12 · The violins join",
      "to": "Var 12 · The cello’s last word",
      "at": {
        "t": 112
      },
      "how": "<p>The G-minor Andante contracts around the cello. Elgar writes <i>diminuendo molto</i> across the winds and strings; the flutes and oboes stop, then the bassoons and horns. The basses fall silent while the orchestral cellos hold a low note beneath the soloist’s last upward phrase and its long pause.</p>",
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
      { "t": 0, "playing": ["violas", "cellos"], "lead": ["cellos"], "note": "Solo cello sings above divided violas and a held note in the other cellos (p. 82)." },
      { "t": 14, "playing": ["oboes", "clarinets", "bassoons", "horns", "violas", "cellos", "basses"], "lead": ["cellos", "violas"], "note": "All the cellos take up the tune with violas and basses; wind replies join them before the violins enter (pp. 82–83)." },
      { "t": 38, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "cellos"], "note": "Divided violins join the melody over a quiet timpani roll and wind chords (p. 83)." },
      { "t": 64, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "flutes"], "note": "Woodwind phrases weave around the long violin melody (p. 84)." },
      { "t": 82, "playing": ["clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "cellos"], "note": "The violins sing on their G strings above lower wind chords (p. 85)." },
      { "t": 98, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "cellos"], "note": "Woodwinds join the rising strings; trumpets and trombones remain silent (pp. 85–86)." },
      { "t": 112, "playing": ["clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["cellos"], "note": "Elgar writes dim. molto as the winds fall silent and the cello returns to its solo (p. 86)." },
      { "t": 124, "playing": ["violas", "cellos"], "lead": ["cellos"], "note": "Solo cello recalls its opening phrase over divided violas and held cello notes (p. 86)." }
    ]
  }
};
