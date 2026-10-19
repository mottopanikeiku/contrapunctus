export default {
  "id": "mahler-kindertotenlieder-wenn-dein-muetterlein",
  "composer": "mahler",
  "order": 32,
  "set": {
    "id": "mahler-kindertotenlieder",
    "title": "Kindertotenlieder",
    "part": 3,
    "of": 5
  },
  "work": "Kindertotenlieder",
  "movement": "III. Wenn dein Mütterlein",
  "year": "1901–04",
  "key": "C minor",
  "forces": "Baritone and orchestra",
  "performers": "Dietrich Fischer-Dieskau, baritone; Berlin Philharmonic; Rudolf Kempe, conductor",
  "recorded": "20–21 June 1955",
  "source": {
    "file": "File:Mahler - Kindertotenlieder, III (Fischer-Dieskau, Kempe, 1955).ogg"
  },
  "intro": "A mother comes through the door; the father looks down for the little face beside her. Dietrich Fischer-Dieskau sings this scene with Rudolf Kempe and the Berlin Philharmonic, in a song whose orchestra has no violins.",
  "sections": [
    {
      "t": 0,
      "label": "A · The empty place by the door",
      "m": "A",
      "mNote": "Cor anglais and bassoons above plucked cellos"
    },
    {
      "t": 114,
      "label": "A′ · The mother brings a candle",
      "m": "A′",
      "mNote": "Harp and plucked double bass renew the opening"
    },
    {
      "t": 236,
      "label": "Coda · Cor anglais after the lament",
      "m": "Coda",
      "mNote": "Horns and bowed cellos; a G-major ending"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "An orchestra without violins",
      "text": "Cor anglais and bassoons wind around one another above plucked cellos. Mahler marks the opening “Schwer, dumpf” — heavy, muffled. Fischer-Dieskau joins an orchestra stripped of violins for the whole song.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mahler, Kindertotenlieder, C. F. Kahnt full score, plate 4460 (1905), p. 33: instrumentation and opening marking; our translation. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "t": 34,
      "kind": "world",
      "title": "At the child’s height",
      "text": "Rückert’s father turns towards his wife, then looks below her face: “näher nach der Schwelle” — nearer the threshold. His eyes still expect the daughter who used to come in beside her. The room remembers a habit the father cannot stop.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Rückert, Wenn dein Mütterlein, first stanza as set by Mahler; German text at https://en.wikipedia.org/wiki/Kindertotenlieder#Text. Our translation."
    },
    {
      "t": 114,
      "kind": "form",
      "title": "The doorway again",
      "text": "The cor anglais begins again, now with harp and plucked double bass underneath. In the second stanza the mother carries a candle, and the child seems to slip into the room behind her. Fischer-Dieskau’s closing lament calls her a light extinguished too soon.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 40–46, rehearsal 3 onwards; Rückert’s second stanza. The changed bass scoring is discussed at https://geertwoltjer.nl/Songs/MahlerAnalysis/Mahler3.html"
    },
    {
      "t": 236,
      "kind": "music",
      "title": "The cellos take their bows",
      "text": "The cor anglais recalls the opening after the voice has finished. The cellos now bow their notes, with horns close beside them. The song comes to rest on G major, the chord that would normally lead back to C minor.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 47: Wieder wie zu Anfang, bowed cellos, horns and the final dominant chord. https://geertwoltjer.nl/Songs/MahlerAnalysis/Mahler3.html"
    }
  ],
  "transitions": [
    {
      "id": "second-stanza",
      "title": "A new bass beneath the doorway",
      "from": "A · The empty place by the door",
      "to": "A′ · The mother brings a candle",
      "at": { "t": 114 },
      "span": [104, 126],
      "how": "<p>The first stanza descends to its low “Töchterlein” and closes in C minor. After the ritardando, <i>Wie zu Anfang</i> restores the opening pace and cor anglais tune. Harp and plucked double bass replace the cello pulse; a held bass-clarinet note crosses the join.</p>",
      "devices": ["motivic link", "orchestration change", "tempo change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 40, rehearsal 3; Woltjer, song III, bars 31–33. https://geertwoltjer.nl/Songs/MahlerAnalysis/Mahler3.html"
    },
    {
      "id": "instrumental-close",
      "title": "Bowed cellos replace the plucked pulse",
      "from": "A′ · The mother brings a candle",
      "to": "Coda · Cor anglais after the lament",
      "at": { "t": 236 },
      "span": [226, 248],
      "how": "<p><i>Wieder wie zu Anfang</i> brings the cor anglais back, with horns and bowed cellos beneath it. The wind phrases lengthen and slow. Harp and low strings support a final G-major chord, C minor’s dominant, held under fermatas.</p>",
      "devices": ["motivic link", "orchestration change", "decrescendo", "half cadence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 47. The dominant ending is discussed at https://geertwoltjer.nl/Songs/MahlerAnalysis/Mahler3.html"
    }
  ],
  "orchestra": {
    "ensemble": [
      "flutes",
      "oboes",
      "cor-anglais",
      "clarinets",
      "bass-clarinet",
      "bassoons",
      "horns",
      "harp",
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
      "locator": "Song III, printed pp. 33–47: cor anglais and plucked cellos at the opening, harp and double basses in the second stanza. Violins are silent throughout."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "cor-anglais",
          "bassoons",
          "cellos"
        ],
        "lead": [
          "cor-anglais"
        ],
        "note": "Opening: cor anglais and bassoon lines above the pizzicato cello pulse."
      },
      {
        "t": 22,
        "playing": [
          "solo-voice",
          "oboes",
          "cor-anglais",
          "bass-clarinet",
          "bassoons",
          "cellos"
        ],
        "lead": [
          "solo-voice",
          "cor-anglais"
        ],
        "note": "The baritone joins the cor anglais and bassoons above plucked cellos."
      },
      {
        "t": 114,
        "playing": [
          "cor-anglais",
          "bass-clarinet",
          "bassoons",
          "harp",
          "basses"
        ],
        "lead": [
          "cor-anglais"
        ],
        "note": "Harp and plucked double basses replace the cellos beneath the returning cor anglais phrase."
      },
      {
        "t": 236,
        "playing": [
          "cor-anglais",
          "clarinets",
          "bassoons",
          "horns",
          "harp",
          "cellos",
          "basses"
        ],
        "lead": [
          "cor-anglais",
          "horns"
        ],
        "note": "Cor anglais, horns and bowed cellos recall the opening before the final G-major chord."
      }
    ]
  }
};
