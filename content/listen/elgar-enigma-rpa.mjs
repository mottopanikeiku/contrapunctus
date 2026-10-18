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
  "intro": "A serious C-minor phrase is interrupted by lighter wind replies. Richard Penrose Arnold’s conversation becomes a musical alternation between weight and wit.",
  "question": "How can one variation keep changing the tone of a conversation?",
  "sections": [
    {
      "t": 0,
      "label": "The serious phrase",
      "m": "A",
      "mNote": "a sustained minor-key line"
    },
    {
      "t": 32,
      "label": "Lighter replies",
      "m": "B",
      "mNote": "the major mode and wind figures alter the tone"
    },
    {
      "t": 98,
      "label": "Link towards Ysobel",
      "m": "Link",
      "mNote": "quiet chromatic motion prepares the next portrait"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "A sustained lower line",
      "text": "The opening pairs a sustained lower melody with more mobile violin writing. Listen for the difference between the line’s long notes and the accompaniment’s smaller movements.",
      "basis": "general",
      "precision": "passage",
      "evidence": "Novello p. 24: the lower strings carry the sustained theme beneath violin figuration. Opening-span description."
    },
    {
      "t": 35,
      "kind": "world",
      "title": "Richard Penrose Arnold",
      "text": "Richard Penrose Arnold, son of the poet Matthew Arnold, is an amateur pianist. Elgar remembers serious conversation interrupted by witty remarks; the variation’s contrasts turn that social rhythm into music.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "The Elgar Society identifies Arnold; Elgar’s commentary describes conversation and light-hearted wind writing. https://elgar.org/3enigma.htm https://en.wikipedia.org/wiki/Enigma_Variations"
    },
    {
      "t": 72,
      "kind": "listen",
      "title": "Weight and lightness alternate",
      "text": "Across this portrait, keep the sustained phrase distinct from the lighter replies. A change of instrumental texture can alter the tone of a conversation without requiring a wholly unrelated theme.",
      "basis": "general",
      "precision": "passage",
      "evidence": "The Novello score and Elgar’s commentary describe minor-key seriousness and major-key wind replies. This is a whole-variation comparison, not an entrance at 1:12."
    },
    {
      "t": 105,
      "kind": "music",
      "title": "A link rather than a stop",
      "text": "The ending reduces the weight and keeps a small pattern moving towards the next variation. The score asks for “attacca”: Arnold’s portrait is not designed to be sealed off by a long pause.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello pp. 29–30 show the chromatic link and attacca marking. The report changes at 1:38 and remains comparatively quiet to the end; this source splits the next variation into another file."
    }
  ],
  "transitions": [
    {
      "id": "lighter-replies",
      "title": "The conversation changes its tone",
      "from": "The serious phrase",
      "to": "Lighter replies",
      "at": {
        "t": 32
      },
      "how": "<p>C minor gives way to a lighter major-key exchange. The long line yields attention to shorter wind figures, making the contrast a change of conversational pace and colour rather than a different tempo marking.</p>",
      "devices": [
        "direct modulation",
        "texture change",
        "orchestration change"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "The report changes at 0:32 and becomes quieter around 0:35. The score and Elgar’s commentary supply the change from serious minor material to light wind replies; the boundary is approximate."
    },
    {
      "id": "into-link",
      "title": "The fragments become a connection",
      "from": "Lighter replies",
      "to": "Link towards Ysobel",
      "at": {
        "t": 98
      },
      "how": "<p>The final exchanges diminish into a quiet chromatic link. Small string figures continue under soft wind and low-brass support; the written attacca carries this preparation into Ysobel instead of adding a separate closing cadence.</p>",
      "devices": [
        "decrescendo",
        "link passage",
        "attacca"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello pp. 29–30. The report’s strongest boundary is 1:38, followed by quieter windows; this is a passage-level estimate of the written link."
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
      "locator": "PDF pp. 24–30, rehearsal figures 15–18; passage-level scoring, not a bar-aligned transcription of this performance. Optional organ is not asserted."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "bassoons",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "cellos",
          "basses"
        ],
        "note": "The lower strings sustain the theme below moving violins, with bassoon support."
      },
      {
        "t": 98,
        "playing": [
          "flutes",
          "oboes",
          "clarinets",
          "bassoons",
          "horns",
          "trombones",
          "tuba",
          "timpani",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "clarinets",
          "violins-1"
        ],
        "note": "The quiet closing link uses chromatic figures and soft sustained support; desks enter in succession, not together."
      }
    ]
  }
};
