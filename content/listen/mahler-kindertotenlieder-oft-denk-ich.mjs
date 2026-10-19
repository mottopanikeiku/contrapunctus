export default {
  "id": "mahler-kindertotenlieder-oft-denk-ich",
  "composer": "mahler",
  "order": 33,
  "set": {
    "id": "mahler-kindertotenlieder",
    "title": "Kindertotenlieder",
    "part": 4,
    "of": 5
  },
  "work": "Kindertotenlieder",
  "movement": "IV. Oft denk’ ich, sie sind nur ausgegangen",
  "year": "1901–04",
  "key": "E♭ major",
  "forces": "Baritone and orchestra",
  "performers": "Dietrich Fischer-Dieskau, baritone; Berlin Philharmonic; Rudolf Kempe, conductor",
  "recorded": "20–21 June 1955",
  "source": {
    "file": "File:Mahler - Kindertotenlieder, IV (Fischer-Dieskau, Kempe, 1955).ogg"
  },
  "intro": "The children have only gone for a walk; soon they will come home. Dietrich Fischer-Dieskau sings the fourth <i>Kindertotenlied</i> with Rudolf Kempe and the Berlin Philharmonic, as the same tune slowly changes what those comforting words mean.",
  "sections": [
    {
      "t": 0,
      "label": "A · They have only gone out",
      "m": "A",
      "mNote": "Horn and strings above moving cellos"
    },
    {
      "t": 54,
      "label": "A′ · They will come home",
      "m": "A′",
      "mNote": "Clarinet and bassoon accompany the renewed promise"
    },
    {
      "t": 110,
      "label": "A″ · They have gone ahead",
      "m": "A″",
      "mNote": "The same tune carries the changed words"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "A walk in the sunshine",
      "text": "The horn and violins sing above little cello figures, with harp and plucked bass marking the steps. Fischer-Dieskau’s first thought is a familiar one: the children are out somewhere, and the day is fine. Mahler marks the music calmly moving, without haste.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mahler, Kindertotenlieder, C. F. Kahnt full score, plate 4460 (1905), pp. 48–49: Ruhig bewegt, ohne zu eilen and Rückert’s first stanza. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "t": 54,
      "kind": "form",
      "title": "Saying it again",
      "text": "“Ja wohl, sie sind nur ausgegangen” — yes, surely, they have only gone out. The voice tries the thought again. Much of the orchestra falls silent, leaving clarinets and bassoon around the baritone’s familiar phrase.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 52, rehearsal 3, a tempo; Rückert’s second stanza, our translation."
    },
    {
      "t": 82,
      "kind": "world",
      "title": "The one song printed alone",
      "text": "On 10 May 1905 this is the only song of the five to appear by itself, in a voice-and-piano version printed as the music supplement of the <i>Neue Zeitschrift für Musik</i>. Mahler wants the five kept together; the periodical’s publisher, Kahnt, issues the whole cycle later that year.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Mahler catalogue, Kindertotenlieder: chronology (10 May 1905) and the description of the supplement to Neue Zeitschrift für Musik 72/20, published by Kahnt, “despite Mahler’s stipulation that the cycle was to be considered an indivisible whole”: https://www.mahlercat.org.uk/Pages/KtL/KtLprints.htm"
    },
    {
      "t": 110,
      "kind": "form",
      "title": "One word changes",
      "text": "“Ausgegangen” becomes “vorausgegangen”: gone out becomes gone ahead. The children will stay where they are; the parents will catch up with them. Fischer-Dieskau sings the familiar tune over the harp’s pulse and the cellos’ moving line.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 56–58, rehearsal 5; Rückert’s last stanza, our translations of ausgegangen and vorausgegangen."
    },
    {
      "t": 174,
      "kind": "music",
      "title": "The distant sunny heights",
      "text": "The voice reaches the sunny heights of the last line, then the instruments complete the phrase. The horn sings softly, the harp resumes its steady notes, and the strings sink into a closing chord marked “morendo” — dying away.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 59, final vocal phrase and postlude. The existing closing cue marks this passage."
    }
  ],
  "transitions": [
    {
      "id": "renewed-reassurance",
      "title": "Clarinets carry the second promise",
      "from": "A · They have only gone out",
      "to": "A′ · They will come home",
      "at": { "t": 54 },
      "span": [44, 66],
      "how": "<p>A brief <i>poco ritardando</i> closes the first stanza. At <i>a tempo</i>, the string parts empty out and clarinets take the moving phrase, with bassoon below. The voice restarts the tune on “Ja wohl”; the harp is silent at the join.</p>",
      "devices": ["tempo change", "texture change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 52, rehearsal 3. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "id": "gone-ahead",
      "title": "The harp restores the pulse",
      "from": "A′ · They will come home",
      "to": "A″ · They have gone ahead",
      "at": { "t": 110 },
      "span": [100, 122],
      "how": "<p>The third stanza begins <i>a tempo, Nicht eilen</i> — in tempo, without hurrying. The harp marks steady notes while bowed cellos keep the small running figure moving. Clarinets recall the tune above, and the voice is marked <i>schlicht</i> — plain — for the changed words “Sie sind uns nur vorausgegangen”.</p>",
      "devices": ["motivic link", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 56, rehearsal 5. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    }
  ],
  "orchestra": {
    "ensemble": [
      "flutes",
      "oboes",
      "clarinets",
      "bassoons",
      "horns",
      "harp",
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
      "locator": "Song IV, printed pp. 48–59: horn, violins and moving cellos at the opening, clarinets at the second stanza and the quiet orchestral close."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "bassoons",
          "horns",
          "harp",
          "violins-1",
          "violins-2",
          "cellos",
          "basses"
        ],
        "lead": [
          "horns",
          "cellos"
        ],
        "note": "Horn and violins share the tune above moving cellos, harp and plucked double basses."
      },
      {
        "t": 22,
        "playing": [
          "solo-voice",
          "oboes",
          "clarinets",
          "bassoons",
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
        "note": "Fischer-Dieskau takes up the opening tune as the father imagines the children coming home."
      },
      {
        "t": 54,
        "playing": [
          "solo-voice",
          "clarinets",
          "bassoons",
          "harp",
          "cellos"
        ],
        "lead": [
          "solo-voice",
          "clarinets"
        ],
        "note": "Clarinets answer the singer above a bassoon line at the start of the second stanza."
      },
      {
        "t": 110,
        "playing": [
          "solo-voice",
          "flutes",
          "oboes",
          "clarinets",
          "harp",
          "violins-2",
          "violas",
          "cellos"
        ],
        "lead": [
          "solo-voice",
          "cellos"
        ],
        "note": "Running cellos and the harp’s repeated notes accompany the last stanza."
      }
    ]
  }
};
