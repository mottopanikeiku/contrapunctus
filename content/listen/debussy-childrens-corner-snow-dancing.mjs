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
    "of": 6, "unit": "pieces" },
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
  "intro": "“The Snow Is Dancing” is the fourth piece of Debussy’s <i>Children’s Corner</i>, in which small rapid notes pass between the pianist’s hands. Debussy set a slow melody against this figuration, and at the close the figuration rises towards the top of the keyboard.",
  "sections": [
    { "t": 0, "label": "A · Alternating semiquavers around a slow tune", "m": "A", "mNote": "Alternating semiquavers surround a slow tune." },
    { "t": 44, "label": "B · Triplets against the accompaniment", "m": "B", "mNote": "Repeated upper notes sound against the accompaniment." },
    { "t": 84, "label": "A′ · Return of the alternating notes", "m": "A′", "mNote": "The alternating notes return and climb towards the treble." }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "Alternating semiquavers and second melody", "text": "The two hands alternate in semiquavers, each playing in the gaps left by the other. Debussy marks the piano <i>doux et estompé</i> (soft and blurred), though the notes are short. A slower melody in longer notes enters among them, marked <i>doux et triste</i> (soft and sad).", "basis": "score-proportion", "precision": "passage", "evidence": "Debussy, Children’s Corner, Durand (1908), plate D. & F. 7188, pp. 16–17: alternating semiquavers, doux et estompé, and the longer melody marked doux et triste. https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 44, "kind": "music", "title": "Triplets in the treble", "text": "Repeated notes in the treble fall into groups of three against the running accompaniment. Debussy marks <i>Cédez un peu</i>, then <i>Au Mouvement</i>. Sharply accented chords interrupt the figuration.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, pp. 18–19: repeated-note triplets, Cédez un peu, Au Mouvement and accented chords." },
    { "t": 84, "kind": "form", "title": "Return of the opening pattern", "text": "The opening alternating pattern returns <i>molto pp</i>. Its notes climb into the highest octaves, where Debussy writes <i>perdendo</i> (dying away). The score also marks <i>Sans retenir</i>.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, pp. 20–21: return of the alternating pattern, octave-up treble writing, molto pp e perdendo and Sans retenir." }
  ],
  "transitions": [
    {
      "id": "into-repeated-figures",
      "title": "Repeated triplets cross the running notes",
      "from": "A · Alternating semiquavers around a slow tune",
      "to": "B · Triplets against the accompaniment",
      "at": { "t": 44 },
      "span": [34, 58],
      "how": "<p>The two hands briefly run down and up the piano. At <i>Cédez un peu</i>, the right hand takes up repeated triplets and the left continues in even semiquavers. Under <i>Au Mouvement</i> the treble line descends, and an accented chord marked sforzando falls across the pattern.</p>",
      "devices": ["texture change", "tempo change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 18, second to fourth systems: running link, repeated triplets, Cédez un peu, Au Mouvement and sforzando."
    },
    {
      "id": "into-receding-flurry",
      "title": "Alternating figure returns over low D",
      "from": "B · Triplets against the accompaniment",
      "to": "A′ · Return of the alternating notes",
      "at": { "t": 84 },
      "span": [74, 98],
      "how": "<p>The accented chords stop and a line of semiquavers runs alone, without accompaniment. The pattern then returns over a low D, with the hands alternating again and the original tune above. Debussy marks the return softer still, <i>più pp</i>.</p>",
      "devices": ["link passage", "motivic link", "texture change", "decrescendo"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 20: unaccompanied running link and return of the alternating figure over low D, marked più pp."
    }
  ]
};
