export default {
  "id": "debussy-childrens-corner-snow-dancing",
  "composer": "debussy",
  "order": 33,
  "work": "Children’s Corner",
  "movement": "IV. The Snow Is Dancing",
  "set": {
    "id": "debussy-childrens-corner",
    "title": "Children’s Corner",
    "part": 4,
    "of": 6
  },
  "year": "1906–08",
  "key": "D minor",
  "forces": "Piano",
  "performers": "Robert Casadesus, piano",
  "recorded": "11 April 1950, Columbia 30th Street Studio, New York",
  "source": {
    "archive": {
      "item": "lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0",
      "file": "disc1/02.04. Children's Corner Suite: The Snow Is Dancing.mp3"
    },
    "rights": {
      "basis": "eu-published-before-1963",
      "published": 1951,
      "evidence": "Columbia Masterworks ML 4366, 1951; Internet Archive item metadata and original carrier: https://archive.org/details/lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0. Territorial EU basis; US status not established."
    }
  },
  "intro": "Snow falls in tiny notes passed between the pianist’s hands. Debussy slips a slow, sad tune through the flurry, then sends the last flakes towards the top of the keyboard.",
  "sections": [
    { "t": 0, "label": "A · Snow between the hands", "m": "A", "mNote": "Alternating semiquavers surround a slow tune" },
    { "t": 44, "label": "B · Triplets against the flurry", "m": "B", "mNote": "Repeated upper notes pull against the accompaniment" },
    { "t": 84, "label": "A′ · The snow thins", "m": "A′", "mNote": "Alternating notes return quietly and climb towards the treble" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "Snow between the hands", "text": "Each hand drops its notes into the gaps left by the other. Debussy marks the piano <i>doux et estompé</i> — soft and blurred — although the notes themselves are short. A slower tune emerges among them, marked <i>doux et triste</i>: gentle and sad.", "basis": "score-proportion", "precision": "passage", "evidence": "Debussy, Children’s Corner, Durand (1908), plate D. & F. 7188, pp. 16–17: alternating semiquavers, doux et estompé, and the longer melody marked doux et triste. https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 44, "kind": "music", "title": "Three against the snow", "text": "Repeated notes in the treble fall into groups of three, pulling across the piano’s running accompaniment. Debussy asks for a little hesitation, then the original pace. Sharply accented chords keep breaking into the flurry.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, pp. 18–19: repeated-note triplets, Cédez un peu, Au Mouvement and accented chords." },
    { "t": 84, "kind": "form", "title": "The last high flakes", "text": "The opening pattern returns quietly. Its little notes eventually climb into the highest octaves, where Debussy writes <i>perdendo</i> — dying away. Even here the score says <i>Sans retenir</i>: the snow keeps moving as it disappears.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, pp. 20–21: return of the alternating pattern, octave-up treble writing, molto pp e perdendo and Sans retenir." }
  ],
  "transitions": [
    {
      "id": "into-repeated-figures",
      "title": "Repeated triplets cross the running notes",
      "from": "A · Snow between the hands",
      "to": "B · Triplets against the flurry",
      "at": { "t": 44 },
      "span": [34, 58],
      "how": "<p>The two hands briefly run down and up the piano. At <i>Cédez un peu</i>, the right hand settles on repeated triplets while the left keeps its even semiquavers. The treble line then descends under <i>Au Mouvement</i>, and an accented chord cuts across the pattern.</p>",
      "devices": ["texture change", "tempo change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 18, second to fourth systems: running link, repeated triplets, Cédez un peu, Au Mouvement and sforzando."
    },
    {
      "id": "into-receding-flurry",
      "title": "The bass returns beneath the snow",
      "from": "B · Triplets against the flurry",
      "to": "A′ · The snow thins",
      "at": { "t": 84 },
      "span": [74, 98],
      "how": "<p>The accented chords stop and a quiet line of semiquavers runs alone. A low D then anchors the returning pattern: the hands alternate again, with the original tune above. Debussy marks the return softer still, <i>più pp</i>.</p>",
      "devices": ["link passage", "motivic link", "texture change", "decrescendo"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 20: unaccompanied running link and return of the alternating figure over low D, marked più pp."
    }
  ]
};
