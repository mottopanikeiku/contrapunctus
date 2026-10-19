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
  "intro": "The second movement, Allegro con grazia, of the Symphony No. 6 in B minor, Op. 74 “Pathétique”, opens with a waltz-like melody for the cellos in five beats, grouped two plus three. In the B-minor middle section the timpani repeat a single note beneath the melody.",
  "sections": [
    { "t": 0, "label": "A · Cello theme in five", "m": "A", "mNote": "A D-major cello tune over plucked strings" },
    { "t": 154, "label": "B · B minor over repeated D", "m": "B", "mNote": "Timpani and basses repeat a pedal D beneath the descending melody." },
    { "t": 294, "label": "A′ · D-major dance theme returns", "m": "A′", "mNote": "The cello tune returns with its light accompaniment." },
    { "t": 416, "label": "Coda · Falling woodwind scales", "m": "Coda", "mNote": "The descending phrases of the middle section return." }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Cello theme in five-beat bars",
      "text": "The cellos play a D-major tune above plucked strings. Each bar holds five beats, grouped as two and three. Clarinets and bassoons follow with short falling phrases, and the horns fill the gaps.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, pp. 11–13: opening cello melody, wind accompaniment and the five-beat dance. https://qso.com.au/uploads/QSO-Learning-Resource-Breathtaking-Tchaikovsky-1-.pdf"
    },
    {
      "t": 60,
      "kind": "life",
      "title": "Four-hand piano arrangement, 1893",
      "text": "In August 1893, while he was still scoring the symphony, Tchaikovsky made his own arrangement of it for piano four hands. Jurgenson published the piano duet in November 1893 and the full score in February 1894.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Tchaikovsky Research, Symphony No. 6: the arrangement made between 1/13 and 12/24 August 1893, and the publication history. https://en.tchaikovsky-research.net/pages/Symphony_No._6"
    },
    {
      "t": 119,
      "kind": "life",
      "title": "End of the sketches, 1893",
      "text": "At the end of this movement’s sketches Tchaikovsky wrote: “Today 24 March finished the rough sketches completely!!!” The year was 1893, and he had already drafted the other three movements. The second movement was the last part of the symphony to be sketched.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Tchaikovsky’s inscription in the second-movement sketches, dated 24 March 1893 Old Style (5 April New Style); composition order documented at https://en.tchaikovsky-research.net/pages/Symphony_No._6."
    },
    {
      "t": 154,
      "kind": "form",
      "title": "Middle section in B minor",
      "text": "The middle section is in B minor. Flute, first violins and cellos play a descending melody while timpani and double basses repeat D beneath it. Tchaikovsky marked the passage <i>con dolcezza e flebile</i>, asking for sweetness and a plaintive tone.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, p. 14, reproduces the middle-section score; the expression marking is discussed in Harlow Robinson’s note, https://www.bso.org/works/tchaikovsky-symphony-no-6."
    },
    {
      "t": 294,
      "kind": "form",
      "title": "Return of the opening dance",
      "text": "The opening dance returns in D major. The tune is again in five beats to the bar, and plucked strings accompany the long notes.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, pp. 11–14, describes the return of the opening dance. Tonal plan: https://en.wikipedia.org/wiki/Symphony_No._6_(Tchaikovsky)."
    },
    {
      "t": 416,
      "kind": "music",
      "title": "Descending woodwind scales and coda",
      "text": "Descending woodwind scales lead into the coda. The falling phrases of the middle section return in the D-major dance, softened for the close.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, p. 14: descending woodwind scales and the coda’s recollection of the middle section. https://qso.com.au/uploads/QSO-Learning-Resource-Breathtaking-Tchaikovsky-1-.pdf"
    }
  ],
  "transitions": [
    {
      "id": "join-1",
      "title": "Five beats over a single note",
      "from": "A · Cello theme in five",
      "to": "B · B minor over repeated D",
      "at": { "t": 154 },
      "span": [144, 169],
      "how": "<p>The D-major dance moves towards B minor. Timpani and double basses play a repeated D, while flutes, first violins and cellos descend above them. The five-beat bar continues. The new marking, <i>con dolcezza e flebile</i>, calls for sweetness and plaintiveness.</p>",
      "devices": ["texture change", "orchestration change", "decrescendo"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, p. 14; marking in Harlow Robinson’s programme note, https://www.bso.org/works/tchaikovsky-symphony-no-6."
    },
    {
      "id": "join-2",
      "title": "The dance returns in D major",
      "from": "B · B minor over repeated D",
      "to": "A′ · D-major dance theme returns",
      "at": { "t": 294 },
      "span": [284, 309],
      "how": "<p>The repeated bass note stops, and the opening tune returns in D major with its plucked string accompaniment. The melody runs across the same two-plus-three bar used in the B-minor middle section.</p>",
      "devices": ["motivic link", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Queensland Symphony Orchestra, Symphony No. 6 learning resource, pp. 11–14; D-major reprise in https://en.wikipedia.org/wiki/Symphony_No._6_(Tchaikovsky)."
    },
    {
      "id": "join-3",
      "title": "Falling scales in the coda",
      "from": "A′ · D-major dance theme returns",
      "to": "Coda · Falling woodwind scales",
      "at": { "t": 416 },
      "span": [406, 431],
      "how": "<p>The returning dance grows quieter as the woodwinds descend in scales. In the coda the falling phrases of the middle section return within the D-major close, and the five-beat accompaniment continues beneath them.</p>",
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
        "note": "Opening dance: the cellos play the melody over pizzicato accompaniment, with clarinets, bassoons and horns added to the phrase."
      },
      {
        "t": 110,
        "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "trumpets", "violins-1", "violins-2", "violas", "cellos", "basses"],
        "lead": ["flutes", "violins-1"],
        "note": "In the later build of the outer dance, trumpets add punctuation to the winds, horns and strings (score PDF pp. 6–7); this passage falls roughly before the climax measured at 2:20–2:25."
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
        "note": "Middle section: flute and violins play the melody above a repeated D, with timpani and lower strings below."
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
        "note": "Return: the melody and accompaniment of the opening dance come back to the foreground."
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
        "note": "Coda: quieter wind phrases and strings recall the middle section’s colour before the D-major close."
      },
      {
        "t": 450,
        "playing": ["oboes", "clarinets", "bassoons", "horns", "trumpets", "trombones", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"],
        "lead": ["violins-1", "cellos"],
        "note": "Coda brass phrase: trumpets and alto/tenor trombones enter above the D foundation (score PDF p. 24), in the renewed closing activity at roughly 7:25–7:45."
      },
      {
        "t": 470,
        "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"],
        "lead": ["flutes", "oboes", "clarinets"],
        "note": "After the brief brass phrase, the ending is reduced (score PDF p. 25); the report drops markedly at 7:50. Timing is passage-level."
      }
    ]
  }
};
