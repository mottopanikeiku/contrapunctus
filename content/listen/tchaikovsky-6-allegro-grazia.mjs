export default {
  "id": "tchaikovsky-6-allegro-grazia",
  "composer": "tchaikovsky",
  "order": 4,
  "work": "Symphony No. 6 in B minor, Op. 74 “Pathétique”",
  "movement": "II. Allegro con grazia",
  "set": {
    "id": "tchaikovsky-symphony-6",
    "title": "Symphony No. 6 in B minor, Op. 74 “Pathétique”",
    "part": 2,
    "of": 4
  },
  "year": "1893",
  "source": {
    "file": "File:Tchaikovsky - Symphony No. 6 in B minor, Op. 74 'Pathétique' - II. Allegro con grazia (Musopen Symphony).flac"
  },
  "key": "D major",
  "forces": "Orchestra",
  "performers": "Musopen Symphony",
  "recorded": "",
  "license": "Public domain",
  "intro": "The cellos dance in five beats, two followed by three, with the ease of a waltz. A B-minor middle brings a repeated timpani note beneath the melody.",
  "sections": [
    { "t": 0, "label": "A · Cellos dance in five", "m": "A", "mNote": "A D-major cello tune over plucked strings" },
    { "t": 154, "label": "B · B minor over repeated D", "m": "B", "mNote": "Timpani and basses keep pulsing beneath the descending tune" },
    { "t": 294, "label": "A′ · The D-major dance returns", "m": "A′", "mNote": "The cello tune recovers its light accompaniment" },
    { "t": 416, "label": "Coda · Falling woodwind scales", "m": "Coda", "mNote": "The close remembers the middle section’s descending phrases" }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Cellos dance in five",
      "text": "The cellos sing a D-major tune above plucked strings. Each bar holds five beats, grouped as two and three. Clarinets and bassoons answer with little falling phrases; the horns fill the gaps.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, pp. 11–13: opening cello melody, wind accompaniment and the five-beat dance. https://qso.com.au/uploads/QSO-Learning-Resource-Breathtaking-Tchaikovsky-1-.pdf"
    },
    {
      "t": 119,
      "kind": "life",
      "title": "The last page of sketches",
      "text": "At the end of this movement’s sketches, Tchaikovsky writes: “Today 24 March finished the rough sketches completely!!!” It is 1893, and he has already drafted the other three movements. The gentle dance is the last piece of the symphony to fall into place.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Tchaikovsky’s inscription in the second-movement sketches, dated 24 March 1893 Old Style (5 April New Style); composition order documented at https://en.tchaikovsky-research.net/pages/Symphony_No._6."
    },
    {
      "t": 154,
      "kind": "form",
      "title": "The timpani stay on D",
      "text": "The middle turns to B minor. Flute, first violins and cellos carry a descending melody while timpani and double basses repeat D beneath it. Tchaikovsky’s marking asks for sweetness and a plaintive voice: <i>con dolcezza e flebile</i>.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, p. 14, reproduces the middle-section score; the expression marking is discussed in Harlow Robinson’s note, https://www.bso.org/works/tchaikovsky-symphony-no-6."
    },
    {
      "t": 294,
      "kind": "form",
      "title": "D major again",
      "text": "The opening dance returns in D major. Its tune still fits five beats with extraordinary ease, and the plucked accompaniment puts spring back beneath the long notes.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, pp. 11–14, describes the return of the opening dance. Tonal plan: https://en.wikipedia.org/wiki/Symphony_No._6_(Tchaikovsky)."
    },
    {
      "t": 416,
      "kind": "music",
      "title": "Woodwinds on the way down",
      "text": "Descending woodwind scales lead into the coda. The middle section’s falling phrases return to the D-major dance, softened for the close.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, p. 14: descending woodwind scales and the coda’s recollection of the middle section. https://qso.com.au/uploads/QSO-Learning-Resource-Breathtaking-Tchaikovsky-1-.pdf"
    }
  ],
  "transitions": [
    {
      "id": "join-1",
      "title": "Five beats over a single note",
      "from": "A · Cellos dance in five",
      "to": "B · B minor over repeated D",
      "at": { "t": 154 },
      "span": [144, 169],
      "how": "<p>The D-major dance turns towards B minor. Timpani and double basses settle on repeated D, while flutes, first violins and cellos descend above them. The five-beat bar stays intact; the new marking, <i>con dolcezza e flebile</i>, asks for sweetness and plaintiveness.</p>",
      "devices": ["texture change", "orchestration change", "decrescendo"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, p. 14; marking in Harlow Robinson’s programme note, https://www.bso.org/works/tchaikovsky-symphony-no-6."
    },
    {
      "id": "join-2",
      "title": "The dance regains D major",
      "from": "B · B minor over repeated D",
      "to": "A′ · The D-major dance returns",
      "at": { "t": 294 },
      "span": [284, 309],
      "how": "<p>The repeated bass note releases its hold, and the opening tune returns in D major with its plucked string accompaniment. The melody stretches across the same two-plus-three bar that carried the B-minor middle.</p>",
      "devices": ["motivic link", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, pp. 11–14; D-major reprise in https://en.wikipedia.org/wiki/Symphony_No._6_(Tchaikovsky)."
    },
    {
      "id": "join-3",
      "title": "Falling scales soften the close",
      "from": "A′ · The D-major dance returns",
      "to": "Coda · Falling woodwind scales",
      "at": { "t": 416 },
      "span": [406, 431],
      "how": "<p>Woodwinds descend in scales as the returning dance quietens. The coda recalls the middle section’s falling phrases within the D-major close; the five-beat accompaniment carries on beneath them.</p>",
      "devices": ["decrescendo", "motivic link", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, p. 14. https://qso.com.au/uploads/QSO-Learning-Resource-Breathtaking-Tchaikovsky-1-.pdf"
    }
  ],
  "orchestra": {
    "ensemble": [
      "clarinets",
      "bassoons",
      "horns",
      "violins-1",
      "violins-2",
      "violas",
      "cellos",
      "basses",
      "flutes",
      "timpani",
      "trumpets",
      "trombones",
      "oboes"
    ],
    "basis": "score-proportion",
    "source": {
      "title": "Tchaikovsky, Symphony No. 6, II, historical full-score scan",
      "url": "https://archive.org/download/Cantorion_sheet_music_collection_2/d450a4b450eded96239c50fdf958f258.pdf",
      "locator": "PDF p. 1 opening cello melody; p. 9 rehearsal D and repeated timpani; later return and pp. 23–25 coda. Times are passage estimates."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "clarinets",
          "bassoons",
          "horns",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "cellos"
        ],
        "note": "Opening dance: cellos sing above pizzicato support; clarinets, bassoons and horns colour the phrase."
      },
      {
        "t": 110,
        "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "trumpets", "violins-1", "violins-2", "violas", "cellos", "basses"],
        "lead": ["flutes", "violins-1"],
        "note": "The outer dance’s later build adds trumpet punctuation to winds, horns and strings (score PDF pp. 6–7); broadly placed before the measured 2:20–2:25 crest."
      },
      {
        "t": 154,
        "playing": [
          "flutes",
          "clarinets",
          "bassoons",
          "horns",
          "timpani",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "flutes",
          "violins-1"
        ],
        "note": "Middle region: flute and violin melody above repeated D, with timpani and lower-string support."
      },
      {
        "t": 294,
        "playing": [
          "flutes",
          "oboes",
          "clarinets",
          "bassoons",
          "horns",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "cellos",
          "violins-1"
        ],
        "note": "Return region: the opening dance’s melodic and accompanimental roles recover the foreground."
      },
      {
        "t": 385,
        "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "trumpets", "violins-1", "violins-2", "violas", "cellos", "basses"],
        "lead": ["flutes", "violins-1"],
        "note": "The returning dance rebuilds its wind, horn and trumpet reinforcement before the report’s 6:40–6:45 crest; a broad score-proportion state."
      },
      {
        "t": 416,
        "playing": [
          "flutes",
          "oboes",
          "clarinets",
          "bassoons",
          "horns",
          "timpani",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "flutes",
          "oboes"
        ],
        "note": "Coda region: quieter wind phrases and strings recall the middle section’s colour before the D-major close."
      },
      {
        "t": 450,
        "playing": ["oboes", "clarinets", "bassoons", "horns", "trumpets", "trombones", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"],
        "lead": ["violins-1", "cellos"],
        "note": "Coda brass phrase: trumpets and alto/tenor trombones enter above the D foundation (score PDF p. 24); broadly placed in the 7:25–7:45 renewed closing activity."
      },
      {
        "t": 470,
        "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"],
        "lead": ["flutes", "oboes", "clarinets"],
        "note": "After the brief brass phrase, the reduced ending withdraws (score PDF p. 25); the report drops markedly at 7:50. Timing is passage-level."
      }
    ]
  }
};
