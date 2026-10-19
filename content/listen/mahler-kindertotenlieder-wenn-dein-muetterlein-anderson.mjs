export default {
  "id": "mahler-kindertotenlieder-wenn-dein-muetterlein-anderson",
  "composer": "mahler",
  "order": 37,
  "set": {
    "id": "mahler-kindertotenlieder-anderson",
    "title": "Kindertotenlieder — Marian Anderson",
    "part": 3,
    "of": 5
  },
  "concert": false,
  "work": "Kindertotenlieder",
  "movement": "III. Wenn dein Mütterlein",
  "year": "1901–04",
  "key": "C minor",
  "forces": "Contralto and orchestra",
  "performers": "Marian Anderson, contralto; San Francisco Symphony Orchestra; Pierre Monteux, conductor",
  "recorded": "1950",
  "source": {
    "file": "File:Mahler - Kindertotenlieder, III (Anderson, Monteux, 1950).ogg"
  },
  "intro": "Marian Anderson sings of a mother entering with a candle and a child who seems, for an instant, to follow her. Pierre Monteux’s San Francisco players accompany her with cor anglais and low strings; Mahler leaves the violins out entirely.",
  "sections": [
    {
      "t": 0,
      "label": "A · Cor anglais at the threshold",
      "m": "A",
      "mNote": "Bassoons answer above a plucked cello pulse"
    },
    {
      "t": 106,
      "label": "A′ · Candlelight and the remembered child",
      "m": "A′",
      "mNote": "Harp and double bass join the returning tune"
    },
    {
      "t": 218,
      "label": "Coda · The winds remain",
      "m": "Coda",
      "mNote": "Bowed cellos and horns support the last cor anglais phrase"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Low strings around Anderson",
      "text": "Plucked cellos mark the pulse beneath cor anglais and bassoons. Their lines keep moving as Anderson enters with the mother at the door. The violins are absent throughout; the score asks for a heavy, muffled sound.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mahler, Kindertotenlieder, C. F. Kahnt full score, plate 4460 (1905), pp. 33–35: Schwer, dumpf, opening scoring and vocal entry. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "t": 34,
      "kind": "world",
      "title": "The missing little face",
      "text": "The father’s glance falls where his daughter’s face should be: “dein lieb Gesichtchen” — your dear little face. Rückert fills the poem with diminutives, from “Mütterlein” to “Töchterlein”. The family’s everyday words survive the child.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Rückert, Wenn dein Mütterlein, German text as set by Mahler at https://en.wikipedia.org/wiki/Kindertotenlieder#Text; our translation."
    },
    {
      "t": 106,
      "kind": "form",
      "title": "A candle through the door",
      "text": "The opening tune returns above harp and double bass. Anderson’s second stanza adds the candle’s glimmer and the imagined child slipping into the room. Mahler repeats words and lengthens syllables so that this shorter stanza occupies the first stanza’s musical shape.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 40–46. The repeated words and syllable extensions are discussed at https://geertwoltjer.nl/Songs/MahlerAnalysis/Mahler3.html"
    },
    {
      "t": 218,
      "kind": "music",
      "title": "Cor anglais without words",
      "text": "After Anderson’s lament, the cor anglais sings its opening phrase once more. Horns and bowed cellos replace the earlier plucked steps. The ending rests on G major, leaving the song’s C-minor home a chord away.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 47, Wieder wie zu Anfang and the dominant close. https://geertwoltjer.nl/Songs/MahlerAnalysis/Mahler3.html"
    }
  ],
  "transitions": [
    {
      "id": "second-stanza",
      "title": "The cor anglais returns with harp",
      "from": "A · Cor anglais at the threshold",
      "to": "A′ · Candlelight and the remembered child",
      "at": { "t": 106 },
      "span": [96, 118],
      "how": "<p>The descending vocal phrase closes in C minor. A ritardando leads into <i>Wie zu Anfang</i> — as at the beginning — and the cor anglais recovers its tune. This time harp and plucked double bass carry the pulse, while the bass clarinet sustains across the barline.</p>",
      "devices": ["motivic link", "orchestration change", "tempo change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 40, rehearsal 3; Woltjer, song III, bars 31–33. https://geertwoltjer.nl/Songs/MahlerAnalysis/Mahler3.html"
    },
    {
      "id": "instrumental-close",
      "title": "The plucked steps become sustained notes",
      "from": "A′ · Candlelight and the remembered child",
      "to": "Coda · The winds remain",
      "at": { "t": 218 },
      "span": [208, 230],
      "how": "<p>The cor anglais returns under <i>Wieder wie zu Anfang</i>, surrounded by horn lines and bowed cellos. A ritardando lengthens its last descending phrase. Harp and low strings settle on G, and the final G-major chord hangs under fermatas.</p>",
      "devices": ["motivic link", "orchestration change", "decrescendo", "half cadence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 47. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
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
        "t": 20,
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
        "note": "Anderson joins the cor anglais and bassoons above plucked cellos."
      },
      {
        "t": 106,
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
        "t": 218,
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
