export default {
  "id": "mahler-kindertotenlieder-oft-denk-ich-anderson",
  "composer": "mahler",
  "order": 38,
  "set": {
    "id": "mahler-kindertotenlieder-anderson",
    "title": "Kindertotenlieder — Marian Anderson",
    "part": 4,
    "of": 5, "unit": "songs" },
  "concert": false,
  "work": "Kindertotenlieder",
  "movement": "IV. Oft denk’ ich, sie sind nur ausgegangen",
  "year": "1901–04",
  "key": "E♭ major (written score; playback pitch unverified)",
  "forces": "Contralto and orchestra",
  "performers": "Marian Anderson, contralto; San Francisco Symphony Orchestra; Pierre Monteux, conductor",
  "recorded": "1950",
  "source": {
    "file": "File:Mahler - Kindertotenlieder, IV (Anderson, Monteux, 1950).ogg"
  },
  "intro": "Marian Anderson sings the fourth of the <i>Kindertotenlieder</i>, “Oft denk’ ich, sie sind nur ausgegangen”, with Pierre Monteux and the San Francisco Symphony. A parent repeats that the children will soon be home, harp and cellos play a walking figure beneath the tune, and the final stanza says the children have gone ahead for good.",
  "sections": [
    {
      "t": 0,
      "label": "A · The children’s long walk",
      "m": "A",
      "mNote": "Horn, violins and moving cellos introduce the song."
    },
    {
      "t": 54,
      "label": "A′ · The promise repeated",
      "m": "A′",
      "mNote": "Clarinets and bassoon surround the contralto."
    },
    {
      "t": 108,
      "label": "A″ · Last stanza, harp and cellos",
      "m": "A″",
      "mNote": "Harp and cellos accompany the last stanza."
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Horn and violins over walking bass",
      "text": "Harp and plucked double bass play a steady walking bass beneath the horn and violins. The cellos have a quicker, winding figure of their own. In Anderson’s first stanza the children are imagined taking a long walk on a beautiful day.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mahler, Kindertotenlieder, C. F. Kahnt full score, plate 4460 (1905), pp. 48–49: opening instrumentation and Rückert’s first stanza. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "t": 54,
      "kind": "form",
      "title": "Second stanza, “O sei nicht bang”",
      "text": "“O sei nicht bang” means “oh, do not be afraid”. Rückert repeats the reassurance, rearranging the same few words. Anderson sings the returning tune with clarinets and bassoon close beside her, and the strings play less around the voice.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 52 onwards, second stanza; our translation of Rückert’s words. The established section marks the stanza’s opening."
    },
    {
      "t": 82,
      "kind": "world",
      "title": "Separate printing, 10 May 1905",
      "text": "On 10 May 1905 this song, alone of the five, was printed separately in a version for voice and piano, as the music supplement to the <i>Neue Zeitschrift für Musik</i>. Mahler had stipulated that the cycle be kept together. The periodical’s publisher, Kahnt, issued the complete cycle later that year.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Mahler catalogue, Kindertotenlieder: chronology (10 May 1905) and the description of the supplement to Neue Zeitschrift für Musik 72/20, published by Kahnt, “despite Mahler’s stipulation that the cycle was to be considered an indivisible whole”: https://www.mahlercat.org.uk/Pages/KtL/KtLprints.htm"
    },
    {
      "t": 108,
      "kind": "form",
      "title": "Last stanza, rehearsal 5",
      "text": "The last stanza sets the line “Sie sind uns nur vorausgegangen” (they have only gone ahead of us). Anderson sings it to the same melody. The harp plays underneath, and the cellos continue their short figures.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 56, rehearsal 5; Rückert’s last stanza, our translation. Harmonic names in the score refer to its printed pitch; the transfer’s playback pitch remains unverified."
    },
    {
      "t": 174,
      "kind": "music",
      "title": "Postlude, horn and bassoon",
      "text": "The poem’s sunny heights take the voice upwards before the short instrumental ending. After Anderson stops, horn and bassoon continue, with harp and soft strings. The last chord is marked “morendo” — dying away.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 59, final phrase and postlude. The existing closing cue locates this passage; our translation of morendo."
    }
  ],
  "transitions": [
    {
      "id": "renewed-reassurance",
      "title": "Clarinets take over at a tempo",
      "from": "A · The children’s long walk",
      "to": "A′ · The promise repeated",
      "at": { "t": 54 },
      "span": [44, 66],
      "how": "<p>A <i>poco ritardando</i> slows the end of the first stanza. At the return to <i>a tempo</i> the harp and most of the strings stop. Clarinets play the moving line over bassoon notes as Anderson sings “Ja wohl” again.</p>",
      "devices": ["tempo change", "texture change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 52, rehearsal 3. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "id": "gone-ahead",
      "title": "Harp and cellos return for last stanza",
      "from": "A′ · The promise repeated",
      "to": "A″ · Last stanza, harp and cellos",
      "at": { "t": 108 },
      "span": [98, 120],
      "how": "<p>The harp’s repeated notes return with the bowed cello figure, and clarinets play above as the voice begins the last stanza, marked <i>schlicht</i> (plain). Mahler restores the tempo but adds <i>Nicht eilen</i>.</p>",
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
        "note": "Anderson takes up the opening tune as the father imagines the children coming home."
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
        "t": 108,
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
