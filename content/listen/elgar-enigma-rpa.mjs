export default {
  "id": "elgar-enigma-rpa",
  "composer": "elgar",
  "order": 5,
  "work": "Variations on an Original Theme “Enigma”, Op. 36",
  "movement": "V. “R.P.A.” (Moderato)",
  "set": {
    "id": "elgar-enigma",
    "title": "Enigma Variations, Op. 36",
    "part": 5,
    "of": 14
  },
  "year": "1898–99",
  "key": "C minor",
  "forces": "Orchestra",
  "performers": "Hallé Orchestra, John Barbirolli",
  "recorded": "1947",
  "source": {
    "file": "File:Elgar; Enigma variations, Theme V. R.P.A.ogg"
  },
  "intro": "Richard Penrose Arnold can never keep a serious conversation serious for long. Elgar gives him a solemn tune in the basses, then lets the woodwinds break in with jokes.",
  "sections": [
    {
      "t": 0,
      "label": "A · Arnold begins solemnly",
      "m": "A",
      "mNote": "Cellos and basses carry the C-minor theme"
    },
    {
      "t": 32,
      "label": "B · The woodwinds interrupt",
      "m": "B",
      "mNote": "C major, with quick flute and oboe replies"
    },
    {
      "t": 98,
      "label": "Link · On towards Ysobel",
      "m": "Link",
      "mNote": "A quiet string figure keeps the music moving"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "A solemn beginning",
      "text": "Cellos and double basses set out the theme in C minor, marked <i>sostenuto</i>. The violins wind around it on their lowest strings. Arnold begins his conversation with a properly serious face.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 24, rehearsal 15: sostenuto lower strings, violin figuration marked sul G. Elgar connects the theme’s solemnity with Arnold’s conversation in his commentary on variation V: https://en.wikipedia.org/wiki/Enigma_Variations"
    },
    {
      "t": 35,
      "kind": "world",
      "title": "The poet’s son at the piano",
      "text": "Arnold, son of the poet Matthew Arnold, teaches himself the piano. Elgar enjoys the way he gets round the difficult bits while still conveying the music’s feeling. His conversation has the same freedom: earnest talk keeps breaking into whimsical remarks.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Elgar’s recollections of Arnold’s piano playing and conversation, quoted in John Pickard’s BBC programme note (2005): https://www.bbc.com/radio3/classical/elgar/notes/note_enigma.shtml"
    },
    {
      "t": 98,
      "kind": "music",
      "title": "The conversation carries on",
      "text": "The wind chatter subsides. Small string figures continue over quiet timpani and low brass, leading straight into Isabel Fitton’s portrait, <i>Ysobel</i>. Elgar writes <i>attacca</i> at the end of the page.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, pp. 29–30: chromatic closing link, soft trombones and tuba, timpani roll and attacca into variation VI."
    }
  ],
  "transitions": [
    {
      "id": "lighter-replies",
      "title": "The flute cracks a joke",
      "from": "A · Arnold begins solemnly",
      "to": "B · The woodwinds interrupt",
      "at": {
        "t": 32
      },
      "how": "<p>The C-minor bass melody settles on C, and E♮ brightens the harmony into C major. A solo flute runs upwards while oboes and clarinets exchange short replies. The strings fall to <i>pianissimo</i>; the Moderato pace holds, though the conversation has become much less solemn.</p>",
      "devices": [
        "direct modulation",
        "texture change",
        "orchestration change"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 25, rehearsal 16: C in the bass, E naturals in the flute line, pianissimo strings and wind exchanges."
    },
    {
      "id": "into-link",
      "title": "Low brass under the farewell",
      "from": "B · The woodwinds interrupt",
      "to": "Link · On towards Ysobel",
      "at": {
        "t": 98
      },
      "how": "<p>A falling clarinet run leads into the closing link. The strings keep a small curling figure moving while timpani hold a quiet roll. Trombones and tuba enter <i>pianissimo</i>, and the double basses sustain their note beneath them. The page ends <i>attacca</i>, carrying Arnold’s last sentence into <i>Ysobel</i>.</p>",
      "devices": [
        "decrescendo",
        "link passage",
        "attacca"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, pp. 29–30: descending solo clarinet, sustained bass and timpani, pianissimo trombones and tuba, and the attacca marking."
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
      "locator": "Novello full score, pp. 24–30, rehearsal figures 15–18: the solemn C-minor melody, its C-major wind interruptions and the link into Ysobel."
    },
    "timeline": [
      { "t": 0, "playing": ["bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["cellos", "basses"], "note": "Cellos and basses carry the solemn melody, with bassoon and horn replies (p. 24)." },
      { "t": 32, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["flutes", "clarinets"], "note": "Short wind phrases interrupt in C major over quiet strings (pp. 25–26)." },
      { "t": 48, "playing": ["flutes", "oboes", "clarinets", "bassoons", "contrabassoon", "horns", "trumpets", "trombones", "tuba", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "oboes"], "note": "Wind and brass join the long melody while the strings keep moving beneath it (pp. 26–28)." },
      { "t": 84, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["clarinets", "flutes"], "note": "The brass withdraw and short clarinet and flute replies return (pp. 28–29)." },
      { "t": 98, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "trombones", "tuba", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["clarinets", "violins-1"], "note": "A clarinet run and moving strings lead into quiet low-brass chords and timpani (pp. 29–30)." }
    ]
  }
};
