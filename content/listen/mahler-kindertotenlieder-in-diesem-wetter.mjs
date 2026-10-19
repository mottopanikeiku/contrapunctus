export default {
  "id": "mahler-kindertotenlieder-in-diesem-wetter",
  "composer": "mahler",
  "order": 34,
  "set": {
    "id": "mahler-kindertotenlieder",
    "title": "Kindertotenlieder",
    "part": 5,
    "of": 5
  },
  "work": "Kindertotenlieder",
  "movement": "V. In diesem Wetter, in diesem Braus",
  "year": "1901–04",
  "key": "D minor → D major",
  "forces": "Baritone and orchestra",
  "performers": "Dietrich Fischer-Dieskau, baritone; Berlin Philharmonic; Rudolf Kempe, conductor",
  "recorded": "20–21 June 1955",
  "source": {
    "file": "File:Mahler - Kindertotenlieder, V (Fischer-Dieskau, Kempe, 1955).ogg"
  },
  "intro": "A father rages at the weather, then sings his children to sleep. Dietrich Fischer-Dieskau, Rudolf Kempe and the Berlin Philharmonic close <i>Kindertotenlieder</i> with a storm that leaves behind a celesta and a lullaby.",
  "sections": [
    {
      "t": 0,
      "label": "A · The father in the storm",
      "m": "A",
      "mNote": "Restless winds, trembling cellos and sharp harp chords"
    },
    {
      "t": 170,
      "label": "Link · Piccolo and small bell",
      "m": "Link",
      "mNote": "The storm slows around a held high note"
    },
    {
      "t": 190,
      "label": "B · A D-major lullaby",
      "m": "B",
      "mNote": "Celesta and quiet strings rock beneath the baritone"
    },
    {
      "t": 300,
      "label": "Coda · Horns after the voice",
      "m": "Coda",
      "mNote": "Bassoon and horns sing above the rocking violas"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "The storm starts quietly",
      "text": "The winds dart in short phrases, cellos tremble, and the harp strikes accented chords. Much of this storm begins softly. Mahler asks for “ruhelos schmerzvollem Ausdruck” — restless, painful expression — before Fischer-Dieskau has sung a word.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mahler, Kindertotenlieder, C. F. Kahnt full score, plate 4460 (1905), p. 60: Mit ruhelos schmerzvollem Ausdruck and the opening dynamics; our translation. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "t": 70,
      "kind": "world",
      "title": "Carried out of the house",
      "text": "Rückert’s father keeps saying he would never send his children out in such weather. Then comes the unbearable correction: “man hat sie getragen hinaus” — they were carried out. “Ich durfte nichts dazu sagen” — I was allowed no say in it.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Rückert, In diesem Wetter, first stanza as set by Mahler; German text at https://en.wikipedia.org/wiki/Kindertotenlieder#Text. Our translations."
    },
    {
      "t": 170,
      "kind": "form",
      "title": "A piccolo above the storm",
      "text": "A high piccolo note and the small bell remain as the storm loses speed. String phrases fall away in shorter waves. Mahler writes “Allmählich langsamer” — gradually slower — across the bridge into the final stanza.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 78–79, rehearsal 8: piccolo, Glöckchen and Allmählich langsamer; our translation."
    },
    {
      "t": 190,
      "kind": "form",
      "title": "The father sings a lullaby",
      "text": "“Langsam. Wie ein Wiegenlied” — slow, like a lullaby. Fischer-Dieskau sings the weather words again, now over celesta and rocking strings in D major. The children rest “als wie in der Mutter Haus” — as in their mother’s house.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 79–84: lullaby marking, two-sharp signature and Rückert’s final stanza. Our translations."
    },
    {
      "t": 300,
      "kind": "music",
      "title": "The cradle keeps rocking",
      "text": "The baritone finishes on the mother’s house. The violas keep rocking; bassoon and horns begin their own soft phrases above divided cellos. Mahler lets the orchestra stay with the sleeping children after the parent falls silent.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 84–85, rehearsal 10: voice ends on Haus; rocking violas, bassoon, horns and divided cellos."
    },
    {
      "t": 350,
      "kind": "music",
      "title": "D major, almost gone",
      "text": "The celesta’s little figures descend through the last bars. Low strings, horns and clarinets settle into D major, with the final chord marked as softly as the instruments can sustain it. The cycle that began before sunrise ends here.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 86: Morendo dim., celesta gänzlich verklingend, final D-major chord at ppp. The existing late cue marks the closing passage."
    }
  ],
  "transitions": [
    {
      "id": "storm-withdrawal",
      "title": "A high D survives the storm",
      "from": "A · The father in the storm",
      "to": "Link · Piccolo and small bell",
      "at": { "t": 170 },
      "span": [160, 182],
      "how": "<p>At rehearsal 8 a high D in the piccolo hangs above the retreating orchestra. The small bell repeats its notes, with harp chords and low bassoon underneath. <i>Allmählich langsamer</i> slows the falling string phrases until the D-minor storm has almost emptied out.</p>",
      "devices": ["decrescendo", "tempo change", "texture change", "link passage"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 78–79. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "id": "lullaby",
      "title": "D minor turns to D major",
      "from": "Link · Piccolo and small bell",
      "to": "B · A D-major lullaby",
      "at": { "t": 190 },
      "span": [180, 202],
      "how": "<p>The piccolo holds across the change to a two-sharp key signature. D minor becomes D major. Celesta and soft strings take up the rocking figure under <i>Langsam. Wie ein Wiegenlied</i>; the low strings leave space around the singer’s quiet return.</p>",
      "devices": ["tempo change", "orchestration change", "texture change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 79, transition into the last stanza. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "id": "orchestral-postlude",
      "title": "The violas continue after “Haus”",
      "from": "B · A D-major lullaby",
      "to": "Coda · Horns after the voice",
      "at": { "t": 300 },
      "span": [290, 312],
      "how": "<p>The voice ends on “Haus” while the violas continue their rocking figure. Divided cellos sustain the bass; horn and bassoon lines enter above, marked <i>weich</i> — soft. The D-major postlude continues the lullaby without a pause.</p>",
      "devices": ["texture change", "orchestration change", "decrescendo"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 84, rehearsal 10, through p. 86. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    }
  ],
  "orchestra": {
    "ensemble": [
      "piccolo",
      "flutes",
      "oboes",
      "cor-anglais",
      "clarinets",
      "bass-clarinet",
      "bassoons",
      "contrabassoon",
      "horns",
      "timpani",
      "percussion",
      "harp",
      "celesta",
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
      "locator": "Song V, printed pp. 60–86: storm music, the high piccolo and small bell, then the D-major lullaby with celesta."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "flutes",
          "clarinets",
          "bass-clarinet",
          "bassoons",
          "contrabassoon",
          "harp",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "flutes",
          "cellos"
        ],
        "note": "Opening storm: short wind figures, muted strings, tremolo cellos and accented harp chords."
      },
      {
        "t": 30,
        "playing": [
          "solo-voice",
          "flutes",
          "oboes",
          "cor-anglais",
          "clarinets",
          "bass-clarinet",
          "bassoons",
          "horns",
          "harp",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-voice"
        ],
        "note": "The baritone’s protests cut across the short wind phrases and restless strings."
      },
      {
        "t": 170,
        "playing": [
          "piccolo",
          "bassoons",
          "percussion",
          "harp",
          "violins-1",
          "violins-2"
        ],
        "lead": [
          "piccolo"
        ],
        "note": "A held high piccolo note and the small bell remain as the storm subsides."
      },
      {
        "t": 190,
        "playing": [
          "solo-voice",
          "piccolo",
          "percussion",
          "celesta",
          "violins-1",
          "violins-2",
          "violas"
        ],
        "lead": [
          "solo-voice"
        ],
        "note": "Celesta and soft strings accompany the lullaby; the bass line falls silent at its opening."
      },
      {
        "t": 300,
        "playing": [
          "horns",
          "bassoons",
          "celesta",
          "violins-1",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "horns",
          "bassoons"
        ],
        "note": "Horn and bassoon continue after the voice, with rocking violas and divided cellos."
      },
      {
        "t": 370,
        "playing": [
          "clarinets",
          "bass-clarinet",
          "horns",
          "celesta",
          "violins-1",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "horns",
          "clarinets"
        ],
        "note": "The celesta descends while winds and strings settle into the final D-major chord."
      }
    ]
  }
};
