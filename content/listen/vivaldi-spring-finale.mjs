export default {
  "id": "vivaldi-spring-finale",
  "composer": "vivaldi",
  "order": 3,
  "work": "The Four Seasons · Spring, RV 269",
  "movement": "III. Allegro — Danza pastorale",
  "set": {
    "id": "vivaldi-spring",
    "title": "The Four Seasons · Spring, RV 269",
    "part": 3,
    "of": 3
  },
  "year": "1725, publication",
  "key": "E major",
  "forces": "Solo violin, strings and continuo",
  "performers": "John Harrison, violin; Wichita State University Chamber Players; Robert Turizziani, conductor",
  "recorded": "6 February 2000",
  "license": "CC BY-SA 4.0",
  "source": {
    "file": "File:Vivaldi - Four Seasons 1 Spring mvt 3 Allegro - John Harrison violin.oga"
  },
  "intro": "Nymphs and shepherds dance to lilting violins over the long E and B of a country bagpipe. Vivaldi lets the dance wander into C♯ minor and E minor before bringing everyone home.",
  "sections": [
    { "t": 0, "label": "A · The bagpipe dance", "m": "A", "mNote": "A lilting violin tune above long E and B notes" },
    { "t": 34, "label": "B · The soloist leaves the drone", "m": "B", "mNote": "Rising sequences and a chromatic bass lead towards C♯ minor" },
    { "t": 59, "label": "A′ · The dance in C♯ minor", "m": "A′", "mNote": "The refrain returns in C♯ minor and reaches B major" },
    { "t": 90, "label": "C · Solo violin and answering strings", "m": "C", "mNote": "The solo travels through several keys above sustained bass notes" },
    { "t": 150, "label": "A″ · The dance turns to E minor", "m": "A″", "mNote": "The refrain begins in E major, then loses its G♯" },
    { "t": 185, "label": "D · Solo violin over B", "m": "D", "mNote": "The bass holds B while the upper strings rest" },
    { "t": 212, "label": "A · The last E-major dance", "m": "A", "mNote": "The full strings return to E major" }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "A country bagpipe",
      "text": "“Di pastoral Zampogna al Suon festante” — “To the merry sound of a shepherd’s bagpipe.” The 1725 sonnet gives this dance its instrument. Long E and B notes in the bass imitate the bagpipe’s drone while the violin tune rocks in four groups of three quavers.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Spring sonnet, letter G; translation ours. Mutopia score after Performers’ Facsimiles, III, bars 1–12, marked Danza Pastorale in 12/8: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301."
    },
    {
      "t": 59,
      "kind": "form",
      "title": "The dance in C♯ minor",
      "text": "The strings return with the same rocking dance in C♯ minor. The bass holds C♯ where it first held E. Soon it starts moving again, carrying the tune through E major towards B major.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 22–34; José Rodríguez Alvira traces the progression: https://www.teoria.com/en/articles/2021/vivaldi-seasons/primavera/03.php."
    },
    {
      "t": 96,
      "kind": "world",
      "title": "Nymphs beside the shepherds",
      "text": "“Danzan Ninfe e Pastor nel tetto amato / Di primavera all’apparir brillante” — “Nymphs and shepherds dance beneath their beloved shelter at spring’s brilliant arrival.” The sonnet puts mythological nymphs beside working shepherds. Their music is the same country dance.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Spring sonnet, 1725, final two lines, letter G; translation ours. The text is printed with the Mutopia score and reproduced at https://nac-cna.ca/en/event/notes/36996. The sonnets were published anonymously."
    },
    {
      "t": 150,
      "kind": "form",
      "title": "G♯ becomes G♮",
      "text": "The dance returns in E major, then turns to E minor. G♯ becomes G♮; the bass descends by semitones beneath the familiar lilt. The tune keeps dancing through the change.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 58–70, including the change to E minor in bar 61 and chromatic bass descent; commentary at https://www.teoria.com/en/articles/2021/vivaldi-seasons/primavera/03.php."
    },
    {
      "t": 212,
      "kind": "form",
      "title": "Back to the bagpipe",
      "text": "The long bass B resolves to E, and the full strings restore the major-key dance. The final phrase has a soft echo. After the soloist’s wandering, the bass can settle back into its bagpipe drone.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 79–89, with the return to E major and the later piano echo: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301."
    }
  ],
  "transitions": [
    {
      "id": "first-solo",
      "title": "The drone starts walking",
      "from": "A · The bagpipe dance",
      "to": "B · The soloist leaves the drone",
      "at": { "t": 34 },
      "how": "<p>The solo violin leaves the full-string dance while the bass still holds E. Then the bass begins to move: ascending sequences pass through A and B towards C♯ minor. A descent by semitones tightens the approach to the next refrain.</p>",
      "devices": ["orchestration change", "sequence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 12–22; bass and harmonic route shown at https://www.teoria.com/en/articles/2021/vivaldi-seasons/primavera/03.php."
    },
    {
      "id": "minor-refrain",
      "title": "The strings land on C♯",
      "from": "B · The soloist leaves the drone",
      "to": "A′ · The dance in C♯ minor",
      "at": { "t": 59 },
      "how": "<p>The bass resolves G♯ to C♯. The full strings resume the opening dance in C♯ minor over a long C♯ pedal. Its dotted rhythm survives intact, then a descending-fifths progression takes the phrase through E major towards B major.</p>",
      "devices": ["perfect cadence", "motivic link", "orchestration change", "sequence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 21–34; harmonic sequence explained at https://www.teoria.com/en/articles/2021/vivaldi-seasons/primavera/03.php."
    },
    {
      "id": "extended-solo",
      "title": "B major releases the soloist",
      "from": "A′ · The dance in C♯ minor",
      "to": "C · Solo violin and answering strings",
      "at": { "t": 90 },
      "how": "<p>The bass moves E–F♯–B at the cadence. The soloist begins a new episode in B major while short bass notes punctuate the phrase. A chain of fifths carries it through E, A and D before the music finds its way back to B.</p>",
      "devices": ["perfect cadence", "orchestration change", "sequence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 33–58; key sequence in Rodríguez Alvira’s commentary: https://www.teoria.com/en/articles/2021/vivaldi-seasons/primavera/03.php."
    },
    {
      "id": "mixed-refrain",
      "title": "The returning dance loses G♯",
      "from": "C · Solo violin and answering strings",
      "to": "A″ · The dance turns to E minor",
      "at": { "t": 150 },
      "how": "<p>The solo episode ends in B major. The bass restores its long E and the strings begin the dance in E major. At bar 61 the key signature changes to one sharp: G♮ replaces G♯, and the refrain continues in E minor.</p>",
      "devices": ["motivic link", "orchestration change", "direct modulation"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 58–61: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301."
    },
    {
      "id": "minor-solo",
      "title": "A long B under the solo",
      "from": "A″ · The dance turns to E minor",
      "to": "D · Solo violin over B",
      "at": { "t": 185 },
      "how": "<p>The bass descends E–D♯–D–C♯–C–B and holds the B. The orchestral violins withdraw, leaving the soloist above that dominant pedal. The held note lasts through the episode until the final return to E major.</p>",
      "devices": ["orchestration change", "dominant pedal"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 68–79, bass descent and sustained B: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301."
    },
    {
      "id": "last-refrain",
      "title": "E major after the long B",
      "from": "D · Solo violin over B",
      "to": "A · The last E-major dance",
      "at": { "t": 212 },
      "how": "<p>The bass leaves its long B for E, and the full strings resume the dance in E major. The soloist rejoins the orchestral violins. Long E and B notes support the last phrases, including their piano echo.</p>",
      "devices": ["dominant pedal", "motivic link", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 79–89: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301."
    }
  ],
  "orchestra": {
    "ensemble": [
      "solo-violin",
      "violins-1",
      "violins-2",
      "violas",
      "cellos",
      "basses"
    ],
    "solo": "solo-violin",
    "basis": "score-proportion",
    "source": {
      "title": "Vivaldi, The Four Seasons — Mutopia score after Performers’ Facsimiles",
      "url": "https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301",
      "locator": "III. Allegro, especially bars 1–14, 22, 34–58, 71–89. Passage-level participation, not individual attack alignment; cellos/basses represent the written basso part, with no claim about keyboard realization."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin",
          "violins-1"
        ],
        "note": "Full-string dance over sustained bass notes."
      },
      {
        "t": 34,
        "playing": [
          "solo-violin",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin"
        ],
        "note": "First solo episode; orchestral upper strings rest while the basso supports the violin."
      },
      {
        "t": 59,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin",
          "violins-1"
        ],
        "note": "The minor-key refrain restores the full strings."
      },
      {
        "t": 90,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin"
        ],
        "note": "Extended solo-led passage; upper strings answer and the bass later rests, so this is passage-level participation."
      },
      {
        "t": 150,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin",
          "violins-1"
        ],
        "note": "The refrain returns and changes from E major to E minor."
      },
      {
        "t": 185,
        "playing": [
          "solo-violin",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin"
        ],
        "note": "Solo violin over the sustained B bass; orchestral violins rest."
      },
      {
        "t": 212,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin",
          "violins-1"
        ],
        "note": "The full-string closing dance regains E major."
      }
    ]
  }
};
