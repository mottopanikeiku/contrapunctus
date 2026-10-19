export default {
  "id": "vivaldi-winter-finale",
  "composer": "vivaldi",
  "order": 6,
  "work": "The Four Seasons · Winter, RV 297",
  "movement": "III. Allegro",
  "set": {
    "id": "vivaldi-winter",
    "title": "The Four Seasons · Winter, RV 297",
    "part": 3,
    "of": 3
  },
  "year": "1725, publication",
  "key": "F minor",
  "forces": "Solo violin, strings and continuo",
  "performers": "John Harrison, violin; Wichita State University Chamber Players; Robert Turizziani, conductor",
  "recorded": "6 February 2000",
  "license": "CC BY-SA 4.0",
  "source": {
    "file": "File:12 - Vivaldi Winter mvt 3 Allegro - John Harrison violin.ogg"
  },
  "intro": "A solo violin ventures onto the ice above a long bass F; before long, everyone is slipping. Vivaldi ends the concerto with the Sirocco and north wind fighting through the strings.",
  "sections": [
    { "t": 0, "label": "A · A violin on the ice", "m": "A", "mNote": "The solo circles above a long F in the bass" },
    { "t": 20.5, "label": "B · Cautious steps, then a fall", "m": "B", "mNote": "The strings join over C and tumble downwards" },
    { "t": 64, "label": "C · Running across the ice", "m": "C", "mNote": "The solo’s detached semiquavers climb above held strings" },
    { "t": 97, "label": "D · The ice breaks", "m": "D", "mNote": "Short string phrases break apart in C minor" },
    { "t": 119, "label": "E · The Sirocco without basses", "m": "E", "mNote": "Lento in E♭ major; the low strings fall silent" },
    { "t": 156, "label": "F · The winds go to war", "m": "F", "mNote": "Solo runs alternate with repeated-note orchestral gusts" },
    { "t": 176, "label": "F′ · The last F-minor gusts", "m": "F′", "mNote": "The full strings carry the wind figures to the cadence" }
  ],
  "cues": [
    {
      "bar": { "n": "1", "occ": 1 },
      "kind": "music",
      "title": "A foot on the ice",
      "text": "“Caminar Sopra’l giaccio, e à passo lento / Per timor di cader gersene intenti” — “To walk on ice with slow steps, taking care for fear of falling.” The 1725 sonnet begins cautiously. The solo violin changes direction above a long F; the other upper strings wait.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Winter sonnet, letters F–G; translation ours. Mutopia score after Performers’ Facsimiles, III, bars 1–20: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351. The sonnets were published anonymously with Op. 8."
    },
    {
      "bar": { "n": "51", "occ": 1 },
      "kind": "music",
      "title": "Down, then up again",
      "text": "“Gir forte Sdruzziolar, cader à terra / Di nuovo ir Sopra ’l giaccio e correr forte” — “Turn sharply, slip, fall to the ground; go back onto the ice and run hard.” After the orchestra’s falling scales, the solo violin scrambles upwards in detached semiquavers.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Winter sonnet, 1725, letters H–I; translation ours. Mutopia score, III, bars 40–60, including Cader à terra at bar 48 and Correr forte at bar 51: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351."
    },
    {
      "bar": { "n": "89", "occ": 1 },
      "kind": "music",
      "title": "Cracks between the notes",
      "text": "“Sin ch’il giaccio Si rompe, e Si disserra” — “Until the ice breaks and splits open.” The strings interrupt their running with short notes and gaps. Little bursts of demisemiquavers fill the cracks before the soloist takes over again.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Winter sonnet, 1725, letter L; translation ours. Mutopia score, III, bars 85–100, especially the rests and short figures at bars 89–92: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351."
    },
    {
      "bar": { "n": "101", "occ": 1 },
      "kind": "music",
      "title": "Beyond the iron gates",
      "text": "“Sentir uscir dalle ferrate porte” — “To hear emerging from the iron gates.” The sonnet unleashes the winds. For the Sirocco, Vivaldi writes Lento in E♭ major and removes the bass entirely. Only the upper strings remain.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Winter sonnet, 1725, letter M; translation ours. Mutopia score, III, bars 101–119, marked Il Vento Sirocco and Lento, with basso tacet: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351."
    },
    {
      "bar": { "n": "120", "occ": 1 },
      "kind": "music",
      "title": "The winds at war",
      "text": "“Sirocco, Borea, e tutti i Venti in guerra” — “Sirocco, Boreas, and all the winds at war.” Solo runs collide with orchestral bursts. The sonnet ends: “Quest’è ’l verno, mà tal, che gioja apporte” — “This is winter, yet it brings joy.” Vivaldi drives the strings towards F minor.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Winter sonnet, 1725, letter N and final line; translation ours. Mutopia score, III, bars 120–153; the last line is printed above the closing bars: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351."
    }
  ],
  "transitions": [
    {
      "id": "held-tonic-to-dominant",
      "title": "F moves to C",
      "from": "A · A violin on the ice",
      "to": "B · Cautious steps, then a fall",
      "at": { "t": 20.5 },
      "how": "<p>The bass changes its long F to C, the dominant of F minor. The orchestral strings join the soloist, first in running semiquavers, then in cautious quavers. The C stays underneath as the steps grow more insistent and the falling scales begin.</p>",
      "devices": ["tonic pedal", "dominant pedal", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 21–50; the dominant pedal and walking episode are described at https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/03.php."
    },
    {
      "id": "running-after-fall",
      "title": "F minor after the fall",
      "from": "B · Cautious steps, then a fall",
      "to": "C · Running across the ice",
      "at": { "t": 64 },
      "how": "<p>The strings tumble down in scales, then the soloist starts running from F. Its detached semiquavers climb above held upper-string notes. The basso briefly rests; the solo travels from F minor towards C minor, where long C and G pedals support the later passage.</p>",
      "devices": ["texture change", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 48–84; harmonic route at https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/03.php."
    },
    {
      "id": "breaking-ice",
      "title": "The C-minor run breaks apart",
      "from": "C · Running across the ice",
      "to": "D · The ice breaks",
      "at": { "t": 97 },
      "how": "<p>The solo’s descending triplets reach a tutti in C minor. Running scales break into short notes, rests and little demisemiquaver flurries. G, the dominant, supports the exchanges before the solo finishes the passage on a low G.</p>",
      "devices": ["texture change", "dominant pedal"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 80–100: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351; C-minor context described by Rodríguez Alvira."
    },
    {
      "id": "sirocco",
      "title": "The bass vanishes in E♭",
      "from": "D · The ice breaks",
      "to": "E · The Sirocco without basses",
      "at": { "t": 119 },
      "how": "<p>The C-minor solo ends on G. At the Lento the upper strings begin in E♭ major, and the basso falls silent for nineteen bars. The violin’s opening G–F–E♭ now moves in quavers under the words <i>Il Vento Sirocco</i>.</p>",
      "devices": ["tempo change", "orchestration change", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 100–119; E♭ major identified at https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/03.php."
    },
    {
      "id": "north-wind",
      "title": "The north wind starts on E♭",
      "from": "E · The Sirocco without basses",
      "to": "F · The winds go to war",
      "at": { "t": 156 },
      "how": "<p>The solo violin bursts into demisemiquavers on E♭, under the words naming Boreas and all the winds. Repeated-note tutti gusts interrupt its runs and bring the bass back. The episode leaves E♭ major and reaches F minor.</p>",
      "devices": ["texture change", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, bars 120–139; harmonic route described at https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/03.php."
    },
    {
      "id": "closing-tutti",
      "title": "The whole orchestra becomes the wind",
      "from": "F · The winds go to war",
      "to": "F′ · The last F-minor gusts",
      "at": { "t": 176 },
      "how": "<p>The soloist rejoins the full strings in F minor. Their repeated demisemiquavers and downward runs extend the wind music through the final tutti. E♮ sharpens the approach to F before the last held chord.</p>",
      "devices": ["motivic link", "orchestration change", "perfect cadence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, III, closing tutti, bars 137–153: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351."
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
      "url": "https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351",
      "locator": "III. Allegro; solo opening, basso pedals, bars 101–119 basso tacet, and final wind episodes. Passage-level participation, not individual attack alignment; cellos/basses represent the written basso part, with no claim about keyboard realization."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "solo-violin",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin"
        ],
        "note": "The solo violin moves over the long F bass; orchestral upper strings rest."
      },
      {
        "t": 20.5,
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
        "note": "Upper strings join over the held dominant C."
      },
      {
        "t": 64,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas"
        ],
        "lead": [
          "solo-violin"
        ],
        "note": "Running solo over sustained upper-string support; the basso briefly rests."
      },
      {
        "t": 76,
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
        "note": "Low pedal support resumes beneath the continuing solo passage."
      },
      {
        "t": 97,
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
        "note": "Tutti interruptions and a solo link alternate in this region."
      },
      {
        "t": 119,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas"
        ],
        "lead": [
          "violins-1"
        ],
        "note": "The Sirocco Lento removes the basso for nineteen bars."
      },
      {
        "t": 156,
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
        "note": "Rapid solo figures alternate with short orchestral wind bursts; participation is intermittent."
      },
      {
        "t": 176,
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
        "note": "The full-string wind figures drive the conclusion."
      }
    ]
  }
};
