export default {
  "id": "debussy-garden-mes-longs-cheveux",
  "composer": "debussy",
  "order": 41,
  "work": "Pelléas et Mélisande",
  "movement": "Act III, scene 1 · Mes longs cheveux descendent",
  "year": "1893–1902",
  "key": "",
  "forces": "Soprano and piano",
  "performers": "Mary Garden, soprano; Claude Debussy, piano",
  "recorded": "1904, Paris",
  "source": {
    "archive": {
      "item": "78_meslongscheveux_010_14",
      "file": "Meslongscheveux - Mary Garden - Claude Debussy - Claude Debussy.mp3"
    },
    "rights": {
      "basis": "us-published-before-cutoff",
      "published": 1904,
      "evidence": "G&T33447, Paris1904, matrix3078F: IA item78_meslongscheveux_010_14 and The Record Collector IRCC106 discography; BnF cb38388874b subnotice7 corroborates Garden/Debussy and1904. Later1937 IRCC reissue is not the original publication."
    }
  },
  "set": {
    "id": "debussy-garden-1904",
    "title": "Mary Garden and Debussy, 1904",
    "part": 2,
    "of": 2
  },
  "intro": "Mélisande sings this song at her tower window while combing her loosened hair. Mary Garden, the first Mélisande, recorded it with Debussy at the piano; after his prelude, the voice is unaccompanied for most of the song.",
  "sections": [
    {
      "t": 0,
      "label": "A · Prelude and Mélisande’s song",
      "m": "A",
      "mNote": "A piano prelude leads to unaccompanied singing."
    },
    {
      "t": 66,
      "label": "B · Three saints, Sunday noon",
      "m": "B",
      "mNote": "The voice names three saints, then sings of a Sunday at noon."
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Mélisande at the tower window",
      "text": "A piano prelude marked Doux et calme repeats its quavers beneath held notes. Mélisande appears at a window, combing her loosened hair. The piano stops when she sings, Modéré et librement, of her hair reaching down to the foot of the tower, and the vocal line moves through repeated notes.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Debussy, Pelléas et Mélisande, Fromont vocal score (1902), plate E. 1416 F., Act III, scene 1, pp. 102–103: Doux et calme prelude, stage direction and unaccompanied Modéré et librement song. https://s9.imslp.org/files/imglnks/usimg/d/d6/IMSLP33280-PMLP09094-Debussy-L088vsFR.pdf"
    },
    {
      "t": 32,
      "kind": "life",
      "title": "Mary Garden as Mélisande, 1902",
      "text": "Mary Garden created the role of Mélisande in 1902, with André Messager conducting. Two years later, in Paris, she recorded this scene with Debussy.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "The Fromont vocal score’s original cast lists Mlle Garden as Mélisande and André Messager as conductor. The Record Collector’s IRCC discography, entry 106, identifies Garden and Debussy, Paris 1904. https://www.therecordcollector.org/articles/HRSandIRCCdiscographies/internationalrecordcollectorsclub.php"
    },
    {
      "t": 66,
      "kind": "music",
      "title": "Mélisande’s unaccompanied stanza",
      "text": "After a two-bar piano link, Mélisande sings alone again. She names Daniel, Michael and Raphael, then says she was born on a Sunday at noon, and the line slows on those words, marked <i>En retenant</i>. The piano takes over where her song ends.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Fromont vocal score, pp. 103–104: two-bar piano link, unaccompanied Saint Daniel et Saint Michel stanza, Sunday-birth lines, En retenant and instrumental continuation."
    }
  ],
  "transitions": [
    {
      "id": "into-invocation",
      "title": "Piano link between two stanzas",
      "from": "A · Prelude and Mélisande’s song",
      "to": "B · Three saints, Sunday noon",
      "at": { "t": 66 },
      "span": [56, 78],
      "how": "<p>The piano enters beneath Mélisande’s held final word, <i>jour</i>. Low quavers move under sustained treble notes for two bars of 6/4, ending on a fermata. The voice then resumes unaccompanied in 4/4 with the stanza naming the saints.</p>",
      "devices": ["link passage", "fermata", "metre change", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Fromont vocal score, p. 103: piano entry overlapping jour, two-bar 6/4 interlude with fermata, and unaccompanied 4/4 second stanza."
    }
  ],
  "orchestra": {
    "ensemble": [
      "solo-voice",
      "piano"
    ],
    "solo": "solo-voice",
    "basis": "score-proportion",
    "source": {
      "title": "Debussy, Pelléas et Mélisande · Fromont1902 vocal score, plateE.1416F.",
      "url": "https://s9.imslp.org/files/imglnks/usimg/d/d6/IMSLP33280-PMLP09094-Debussy-L088vsFR.pdf",
      "locator": "Act III, scene 1, printed pp. 102–104: piano prelude, two unaccompanied stanzas, a short piano link and the closing instrumental phrase."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "piano"
        ],
        "lead": [
          "piano"
        ],
        "note": "Quiet piano quavers move beneath held treble notes."
      },
      {
        "t": 24,
        "playing": [
          "solo-voice"
        ],
        "lead": [
          "solo-voice"
        ],
        "note": "Mélisande sings alone at the tower window."
      },
      {
        "t": 56,
        "playing": [
          "piano",
          "solo-voice"
        ],
        "lead": [
          "piano"
        ],
        "note": "The piano enters beneath the last held word, then continues alone."
      },
      {
        "t": 66,
        "playing": [
          "solo-voice"
        ],
        "lead": [
          "solo-voice"
        ],
        "note": "The voice sings unaccompanied; the text names the saints and a birth on a Sunday."
      },
      {
        "t": 84,
        "playing": [
          "piano"
        ],
        "lead": [
          "piano"
        ],
        "note": "After the voice stops, the piano plays a quiet closing phrase."
      }
    ]
  }
};
