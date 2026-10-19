export default {
  "id": "mozart-40-finale",
  "composer": "mozart",
  "order": 5,
  "work": "Symphony No. 40 in G minor, K. 550",
  "movement": "IV. Finale: Allegro assai",
  "set": {
    "id": "mozart-40",
    "title": "Symphony No. 40 in G minor, K. 550",
    "part": 4,
    "of": 4
  },
  "year": "1788",
  "key": "G minor",
  "forces": "Orchestra",
  "performers": "Musopen Symphony (Commons credit; ensemble attribution disputed)",
  "recorded": "",
  "source": {
    "file": "File:Mozart - Symphony No. 40 in G minor, K550 - IV. Finale. Allegro assai (Musopen Symphony).flac"
  },
  "intro": "A quiet string arpeggio shoots upwards and the orchestra answers fiercely. Even the finale’s lyrical second tune eventually comes back in G minor; Mozart holds to that key right to the end.",
  "sections": [
    {
      "t": 0,
      "label": "A · Rising strings, fierce orchestral answer",
      "m": "A",
      "mNote": "A quiet arpeggio climbs through G minor"
    },
    {
      "t": 66,
      "label": "B · A gentler tune in B♭",
      "m": "B",
      "mNote": "Violins and winds share the second theme"
    },
    {
      "t": 116,
      "label": "Dev · The arpeggio breaks apart",
      "m": "Dev",
      "mNote": "Chromatic unison, then fragments in imitation"
    },
    {
      "t": 188,
      "label": "A′ · The G minor leap returns",
      "m": "A′",
      "mNote": "Quiet strings and the forceful answer return"
    },
    {
      "t": 228,
      "label": "B′ · The gentle tune in G minor",
      "m": "B′",
      "mNote": "The second theme takes on the home minor key"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Upwards, then the answer",
      "text": "The strings climb quietly through a G minor chord. The orchestra answers with a forceful rush. Mozart keeps setting the two against each other: the spare rising phrase and the crowded reply.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel full score (1880), IV, bars 1–16. The triadic opening and rushing violin response are described by Marianne Williams Tobias: https://www.indianapolissymphony.org/backstage/program-notes/mozart-symphony-no-40/."
    },
    {
      "t": 66,
      "kind": "form",
      "title": "Violins and winds soften",
      "text": "The second theme sings in B♭ major, shared by violins and winds. Its longer notes make a welcome space in this fast movement. The accompanying pulse continues underneath.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel full score (1880), IV, second group, pp. 37–38 of the numbered scan; Tobias’s Indianapolis Symphony note describes the violin-and-wind melody."
    },
    {
      "t": 116,
      "kind": "form",
      "title": "The leap breaks loose",
      "text": "At the development, the opening leap returns in a jagged unison, studded with chromatic notes. The strings then chase fragments of it through overlapping entries. The tidy arpeggio has become difficult to pin down.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel full score (1880), IV, bars 125–170: chromatic opening of the development and subsequent imitative writing."
    },
    {
      "t": 175,
      "kind": "world",
      "title": "Horns without trumpets",
      "text": "The whole symphony uses horns, woodwinds and strings. Mozart leaves out trumpets and timpani. Even the finale’s fiercest answers come from this comparatively small orchestra.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Instrumentation in both versions of K. 550, listed at https://imslp.org/wiki/Symphony_No.40_in_G_minor,_K.550_(Mozart,_Wolfgang_Amadeus)."
    },
    {
      "t": 188,
      "kind": "form",
      "title": "The first leap again",
      "text": "The quiet rising figure is back in G minor, with its fierce answer still attached. After the development’s chromatic scrambling, the notes of the opening chord are suddenly clear again.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel full score (1880), IV, recapitulation from bar 206."
    },
    {
      "t": 228,
      "kind": "form",
      "title": "The tune turns minor",
      "text": "The gentle second theme returns in G minor. Its familiar curves remain, but the earlier B♭ major warmth has gone. The symphony keeps this minor key through its final chords.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel full score (1880), IV, recapitulated second group and final cadence, pp. 46–49 of the numbered scan."
    }
  ],
  "transitions": [
    {
      "id": "into-second-group",
      "title": "F prepares the gentler tune",
      "from": "A · Rising strings, fierce orchestral answer",
      "to": "B · A gentler tune in B♭",
      "at": {
        "t": 66
      },
      "how": "<p>The transition gathers on F, the dominant of B♭ major. After the break, violins and woodwinds share the quieter second theme. Longer notes replace the opening’s rushing answer, while the Allegro assai pulse continues.</p>",
      "devices": [
        "medial caesura",
        "texture change",
        "standing on the dominant"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel full score (1880), IV, transition and second-group opening, pp. 36–37 of the numbered scan."
    },
    {
      "id": "into-development",
      "title": "A jagged answer to B♭",
      "from": "B · A gentler tune in B♭",
      "to": "Dev · The arpeggio breaks apart",
      "at": {
        "t": 116
      },
      "how": "<p>The exposition closes in B♭ major. Its successor is the opening leap stretched into a chromatic unison: the orchestra briefly loses the comfort of a supporting chord. The strings then take up fragments in imitation, one entry pursuing another.</p>",
      "devices": [
        "perfect cadence",
        "motivic link",
        "sequence",
        "texture change"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel full score (1880), IV, bars 118–140."
    },
    {
      "id": "into-recapitulation",
      "title": "D leads back to G",
      "from": "Dev · The arpeggio breaks apart",
      "to": "A′ · The G minor leap returns",
      "at": {
        "t": 188
      },
      "how": "<p>The running string fragments lead to D, the dominant of G minor. The opening arpeggio returns quietly in the strings over its original G minor harmony. Then comes the familiar forceful answer.</p>",
      "devices": [
        "retransition",
        "motivic link",
        "texture change"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel full score (1880), IV, bars 193–214."
    },
    {
      "id": "second-group-home",
      "title": "D prepares the changed melody",
      "from": "A′ · The G minor leap returns",
      "to": "B′ · The gentle tune in G minor",
      "at": {
        "t": 228
      },
      "how": "<p>The returning transition prepares G minor through its dominant, D. Violins and winds resume the quieter second theme in that home key. The orchestral contrast survives; the earlier change to B♭ major is replaced by a G minor melody.</p>",
      "devices": [
        "standing on the dominant",
        "texture change"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel full score (1880), IV, recapitulatory transition and second group, pp. 45–47 of the numbered scan."
    }
  ],
  "orchestra": {
    "ensemble": [
      "flutes",
      "oboes",
      "bassoons",
      "horns",
      "violins-1",
      "violins-2",
      "violas",
      "cellos",
      "basses"
    ],
    "basis": "score-proportion",
    "source": {
      "title": "Mozart, Symphony No. 40, K. 550, Breitkopf & Härtel, Mozarts Werke VIII/40 (1880), plate W.A.M. 550; parts common to both versions",
      "url": "https://imslp.org/wiki/Symphony_No.40_in_G_minor,_K.550_(Mozart,_Wolfgang_Amadeus)",
      "locator": "IV. Allegro assai, PDF pp. 33–49: opening arpeggio, second theme, development and recapitulation. The edition prints both orchestral versions."
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
          "violins-1"
        ],
        "note": "The violins’ quiet rising arpeggio is supported by bassoons and lower strings."
      },
      {
        "t": 28,
        "playing": [
          "flutes",
          "oboes",
          "bassoons",
          "horns",
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
        "note": "Winds and horns reinforce the running string figures."
      },
      {
        "t": 66,
        "playing": [
          "oboes",
          "bassoons",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "violins-1"
        ],
        "note": "The violins’ gentler B♭ major tune alternates with wind replies."
      },
      {
        "t": 116,
        "playing": [
          "flutes",
          "oboes",
          "bassoons",
          "horns",
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
        "note": "The opening arpeggio breaks into a chromatic unison, then passes between imitating parts."
      },
      {
        "t": 188,
        "playing": [
          "bassoons",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "violins-1"
        ],
        "note": "The quiet rising arpeggio returns in the violins, with bassoons and lower strings."
      },
      {
        "t": 228,
        "playing": [
          "oboes",
          "bassoons",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "violins-1"
        ],
        "note": "The gentler second theme returns in G minor, with strings and winds answering each other."
      },
      {
        "t": 266,
        "playing": [
          "flutes",
          "oboes",
          "bassoons",
          "horns",
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
        "note": "Running strings press towards the close beneath held and accented wind chords."
      }
    ]
  }
};
