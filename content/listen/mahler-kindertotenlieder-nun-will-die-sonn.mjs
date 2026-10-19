export default {
  "id": "mahler-kindertotenlieder-nun-will-die-sonn",
  "composer": "mahler",
  "order": 30,
  "set": {
    "id": "mahler-kindertotenlieder",
    "title": "Kindertotenlieder",
    "part": 1,
    "of": 5
  },
  "work": "Kindertotenlieder",
  "movement": "I. Nun will die Sonn’ so hell aufgeh’n",
  "year": "1901–04",
  "key": "D minor",
  "forces": "Baritone and orchestra",
  "performers": "Dietrich Fischer-Dieskau, baritone; Berlin Philharmonic; Rudolf Kempe, conductor",
  "recorded": "20–21 June 1955",
  "source": {
    "file": "File:Mahler - Kindertotenlieder, I (Fischer-Dieskau, Kempe, 1955).ogg"
  },
  "intro": "The sun rises after a child’s death, as though nothing has happened. Dietrich Fischer-Dieskau sings the opening <i>Kindertotenlied</i> with Rudolf Kempe and the Berlin Philharmonic; an oboe and horn begin it alone.",
  "sections": [
    {
      "t": 0,
      "label": "A · Oboe, horn and sunrise",
      "m": "A",
      "mNote": "Two wind lines precede the baritone"
    },
    {
      "t": 84,
      "label": "A′ · The sun shines for everyone",
      "m": "A′",
      "mNote": "Flute and bassoon join the returning phrases"
    },
    {
      "t": 144,
      "label": "B · Night and eternal light",
      "m": "B",
      "mNote": "Horns take the vocal tune; violins climb"
    },
    {
      "t": 232,
      "label": "A″ · A lamp goes out",
      "m": "A″",
      "mNote": "Oboe and flute recall the opening"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Oboe above a horn",
      "text": "The oboe edges upwards by small steps; a horn answers below it. Mahler marks the music slow and melancholy. The strings wait. Fischer-Dieskau’s first line places the rising sun inside this spare wind duet.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mahler, Kindertotenlieder, C. F. Kahnt full score, plate 4460, p. 3: Langsam und schwermütig; nicht schleppend. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "t": 84,
      "kind": "form",
      "title": "“Nur mir allein”",
      "text": "“Das Unglück geschah nur mir allein” — the disaster happened to me alone. Rückert puts the whole distance between the father and the bright morning into those last three words. The opening tune returns, with the flute above the voice and the bassoon repeating its small upward steps.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 6–8, second couplet of Rückert’s poem; our translation. Geert Woltjer discusses the flute doubling and bassoon figure: https://geertwoltjer.nl/Songs/MahlerAnalysis/Mahler1.html"
    },
    {
      "t": 144,
      "kind": "form",
      "title": "Night inside the father",
      "text": "The third couplet speaks to the father himself: he must sink his night into eternal light. Horns take up the earlier vocal melody, and the voice answers with a new line. The violins carry the climb onwards after the words run out.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 9–14. The third couplet and the exchange of oboe, horn and vocal phrases are discussed at https://geertwoltjer.nl/Songs/MahlerAnalysis/Mahler1.html"
    },
    {
      "t": 232,
      "kind": "form",
      "title": "The extinguished lamp",
      "text": "“Ein Lämplein verlosch in meinem Zelt” — a little lamp went out in my tent. Fischer-Dieskau returns to the opening melody with this small domestic image. Oboe and flute bring back their short phrases, and the glockenspiel sounds through the gaps.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 14–17, Rückert’s final couplet; our translation. Page 14 marks the orchestral return zurückkehrend."
    },
    {
      "t": 302,
      "kind": "music",
      "title": "Harp and small bells",
      "text": "The baritone’s final word is “Welt” — world. The harp keeps its little rocking figure going, with soft glockenspiel notes above it. Mahler leaves the last bar empty under a fermata.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 17: final vocal phrase, harp, glockenspiel and the closing bar of rests with fermatas. The existing cue marks the closing passage."
    }
  ],
  "transitions": [
    {
      "id": "second-stanza",
      "title": "The oboe starts again",
      "from": "A · Oboe, horn and sunrise",
      "to": "A′ · The sun shines for everyone",
      "at": { "t": 84 },
      "span": [74, 96],
      "how": "<p>The harp’s rocking D-minor figure and glockenspiel notes continue beneath the oboe’s return. The second couplet shortens the introduction: flute joins the vocal line, while the bassoon takes the repeated C♯–D steps below. The singer’s rhythm changes to put the stress on “mir” — me.</p>",
      "devices": ["motivic link", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 6–8; Woltjer, song I, discussion of bars 22 onwards. https://geertwoltjer.nl/Songs/MahlerAnalysis/Mahler1.html"
    },
    {
      "id": "middle-expansion",
      "title": "The horn takes the tune",
      "from": "A′ · The sun shines for everyone",
      "to": "B · Night and eternal light",
      "at": { "t": 144 },
      "span": [134, 156],
      "how": "<p>After “allgemein”, the horn stretches the closing phrase over low clarinet and bassoon notes. The oboe answers more urgently. In the passage that follows, the horn takes the first vocal tune while the singer moves against it; D minor and D major alternate as the words turn towards eternal light.</p>",
      "devices": ["motivic link", "sequence", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 9–13; Woltjer, song I, discussion of bars 36–59. https://geertwoltjer.nl/Songs/MahlerAnalysis/Mahler1.html"
    },
    {
      "id": "last-stanza",
      "title": "Flute and oboe find home",
      "from": "B · Night and eternal light",
      "to": "A″ · A lamp goes out",
      "at": { "t": 232 },
      "span": [222, 244],
      "how": "<p>Marked <i>zurückkehrend</i> — returning — the flute’s running notes soften around the oboe’s opening phrase. Horns hold below; glockenspiel notes punctuate the retreat. The strings fall silent before the last couplet restores the D-minor vocal melody.</p>",
      "devices": ["decrescendo", "retransition", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 14–15, zurückkehrend and the final couplet. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    }
  ],
  "orchestra": {
    "ensemble": [
      "flutes",
      "oboes",
      "clarinets",
      "bass-clarinet",
      "bassoons",
      "horns",
      "harp",
      "percussion",
      "violins-1",
      "violins-2",
      "violas",
      "cellos",
      "basses",
      "solo-voice"
    ],
    "solo": "solo-voice",
    "basis": "score-proportion",
    "source": {
      "title": "Mahler, Kindertotenlieder, full score (C. F. Kahnt, plate 4460)",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425",
      "locator": "Song I, printed pp. 3–17: oboe and horn introduction, muted strings, the violins’ rising phrases and the final harp and glockenspiel."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "oboes",
          "horns"
        ],
        "lead": [
          "oboes"
        ],
        "note": "Opening duet: oboe above the first horn; the voice and strings wait."
      },
      {
        "t": 35,
        "playing": [
          "solo-voice",
          "harp",
          "bass-clarinet",
          "violas",
          "cellos"
        ],
        "lead": [
          "solo-voice"
        ],
        "note": "Harp and muted violas and cellos accompany the baritone’s first stanza."
      },
      {
        "t": 84,
        "playing": [
          "solo-voice",
          "flutes",
          "oboes",
          "clarinets",
          "bassoons",
          "horns"
        ],
        "lead": [
          "solo-voice",
          "oboes"
        ],
        "note": "The oboe’s opening phrase returns as the father names the loss that belongs to him alone."
      },
      {
        "t": 178,
        "playing": [
          "solo-voice",
          "flutes",
          "oboes",
          "harp",
          "violins-1"
        ],
        "lead": [
          "solo-voice",
          "violins-1"
        ],
        "note": "The first violins enter with a high melody as the voice turns towards eternal light."
      },
      {
        "t": 232,
        "playing": [
          "solo-voice",
          "flutes",
          "oboes",
          "bassoons",
          "horns"
        ],
        "lead": [
          "solo-voice",
          "oboes"
        ],
        "note": "Flute and oboe bring back the opening phrases before the last stanza."
      },
      {
        "t": 262,
        "playing": [
          "solo-voice",
          "harp",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-voice",
          "violins-1"
        ],
        "note": "Harp and strings accompany the father’s blessing of the world’s joyful light."
      }
    ]
  }
};
