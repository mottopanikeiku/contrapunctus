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
    "of": 14
  },
  "year": "1898–99",
  "key": "G major",
  "forces": "Orchestra",
  "performers": "Hallé Orchestra, John Barbirolli",
  "recorded": "1947",
  "source": {
    "file": "File:Elgar; Enigma variations, Theme X. Intermezzo Dorabella.ogg"
  },
  "intro": "Off-beat entries give this intermezzo its light, hesitant gait. Short gestures frame a more sustained inner melody, making a personal portrait out of articulation and rhythm.",
  "question": "How can a melody seem hesitant while the dance keeps moving?",
  "sections": [
    {
      "t": 0,
      "label": "Light, interrupted phrases",
      "m": "Var 10",
      "mNote": "off-beat gestures keep the texture transparent"
    },
    {
      "t": 64,
      "label": "A broader inner line",
      "m": "Var 10",
      "mNote": "longer phrases grow within the same intermezzo"
    },
    {
      "t": 104,
      "label": "The closing phrases",
      "m": "Var 10",
      "mNote": "the light articulation returns to the foreground"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "listen",
      "title": "Hear the gaps",
      "text": "Muted violins and short wind phrases leave small spaces inside the pulse. Listen to the gaps as part of the dance: the music’s lightness depends on what is left open as much as on what is played.",
      "basis": "general",
      "precision": "passage",
      "evidence": "Novello pp. 57–73, rehearsal figures 38–46, show short articulated entries and light string accompaniment. Whole-variation listening point."
    },
    {
      "t": 32,
      "kind": "world",
      "title": "Dora Penny becomes Dorabella",
      "text": "Dora Penny, the daughter of the rector of Wolverhampton, is a younger friend of Elgar. Her nickname borrows Dorabella’s name from Mozart’s Così fan tutte; the portrait is not an orchestration of music from that opera.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "The Elgar Society identifies Penny; the work account supplies the Mozart-derived nickname. https://elgar.org/3enigma.htm https://en.wikipedia.org/wiki/Enigma_Variations"
    },
    {
      "t": 68,
      "kind": "music",
      "title": "Short gestures, longer direction",
      "text": "The middle of the intermezzo gives more space to sustained melodic shapes. Try to connect a whole phrase across the accompaniment’s small articulations instead of hearing a succession of isolated notes.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "The score includes sustained inner melodies between shorter gestures. The report’s 1:04–1:20 span has lower onset density and more sustained recorded weight; this is a broad comparison, not a solo entrance."
    },
    {
      "t": 106,
      "kind": "listen",
      "title": "Lightness is not simply softness",
      "text": "The closing phrases gain some recorded weight before diminishing. Listen for whether the articulated dance character survives the swell: a passage can grow louder without becoming heavy.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "The report has a modest rise at 1:45–1:50 and falls after 1:55 towards the end. It measures the transfer’s envelope, not instrumental articulation."
    }
  ],
  "transitions": [
    {
      "id": "broader-line",
      "title": "A longer phrase within the dance",
      "from": "Light, interrupted phrases",
      "to": "A broader inner line",
      "at": {
        "t": 64
      },
      "how": "<p>The intermezzo does not need a new tempo to change character. Longer melodic notes are set against the continuing short accompaniment, so the listener can follow a broader line while the dance pulse remains in place.</p>",
      "devices": [
        "texture change",
        "motivic link"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello pp. 57–73 contrast short off-beat gestures with sustained inner melody. The 1:04 boundary marks the report’s move towards a less attack-dense span; passage-level placement, not a numbered-bar alignment."
    },
    {
      "id": "closing-phrases",
      "title": "The articulation comes forward again",
      "from": "A broader inner line",
      "to": "The closing phrases",
      "at": {
        "t": 104
      },
      "how": "<p>Shorter gestures and lighter exchanges regain attention as the intermezzo approaches its ending. The texture thins without abandoning its pulse, and the final phrases diminish rather than seeking the weight of a full orchestral climax.</p>",
      "devices": [
        "texture change",
        "decrescendo"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello pp. 70–73 supply the light ending; the report changes at 1:44 and falls away after its modest 1:45–1:50 rise."
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
      "locator": "PDF pp. 57–73, rehearsal figures 38–46; opening texture only; passage-level scoring, not a bar-aligned transcription of this performance. Optional organ is not asserted."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "violins-1",
          "violins-2"
        ],
        "note": "Muted violin phrases sit above light viola chords and pizzicato low strings; wind interruptions enter around them."
      }
    ]
  }
};
