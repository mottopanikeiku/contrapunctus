export default {
  "id": "debussy-childrens-corner-little-shepherd",
  "composer": "debussy",
  "order": 34,
  "work": "Children’s Corner",
  "movement": "V. The Little Shepherd",
  "set": {
    "id": "debussy-childrens-corner",
    "title": "Children’s Corner",
    "part": 5,
    "of": 6, "unit": "pieces" },
  "year": "1906–08",
  "key": "A major",
  "forces": "Piano",
  "performers": "Robert Casadesus, piano",
  "recorded": "11 April 1950, Columbia 30th Street Studio, New York",
  "source": {
    "archive": {
      "item": "lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0",
      "file": "disc1/02.05. Children's Corner Suite: The Little Shepherd.mp3"
    },
    "rights": {
      "basis": "eu-published-before-1963",
      "published": 1951,
      "evidence": "Columbia Masterworks ML 4366, 1951; Internet Archive item metadata and original carrier: https://archive.org/details/lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0. Territorial EU basis; US status not established."
    }
  },
  "intro": "“The Little Shepherd” is the fifth piece of Debussy’s <i>Children’s Corner</i>. Across two pages the piano plays three calls, each a single line in the manner of a shepherd’s pipe, and each is followed by a short dance-like reply.",
  "sections": [
    { "t": 0, "label": "A · Lone melody, dotted rhythms and chords", "m": "A", "mNote": "A lone melody, followed by dotted rhythms and chords." },
    { "t": 50, "label": "A′ · Second statement of the call", "m": "A′", "mNote": "The unaccompanied melody returns, then soft chords are added." },
    { "t": 78, "label": "A″ · Call and dance; ends in A major", "m": "A″", "mNote": "The last dance phrase becomes animated, then cadences in A major." }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "Unaccompanied opening line", "text": "A single line in the right hand moves down and up, with small ornaments, and ends on a pause. The left hand is silent. At Plus mouvementé the tune turns to dotted rhythms and soft left-hand chords enter underneath.", "basis": "score-proportion", "precision": "passage", "evidence": "Debussy, Children’s Corner, Durand (1908), plate D. & F. 7188, p. 22: unaccompanied opening, fermata, then Plus mouvementé with dotted figures and left-hand chords. https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 50, "kind": "form", "title": "Return of the unaccompanied melody", "text": "The dance stops on a held chord of A major, and the accompaniment stops with it. The shepherd’s melody returns unaccompanied, with changed notes and the same turns. Soft chords answer it, ending in E major on another long-held harmony.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, p. 22, third and fourth systems, to p. 23, first system: held A-major chord, renewed unaccompanied melody and chordal answer ending in E major." },
    { "t": 78, "kind": "form", "title": "Final section and closing chord", "text": "The third call is a little stronger, and the answer is more animated. The dotted dance then returns pianissimo. Debussy marks it to be held back while keeping its rhythm, and the final A major chord is marked ppp.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, p. 23: un poco più forte, Plus mouvementé, Poco animato, Un peu retenu (en conservant le rythme), and final A-major chord." }
  ],
  "transitions": [
    {
      "id": "into-renewed-exchange",
      "title": "Held A major chord to second call",
      "from": "A · Lone melody, dotted rhythms and chords",
      "to": "A′ · Second statement of the call",
      "at": { "t": 50 },
      "span": [40, 62],
      "how": "<p>The first dance slows under <i>Cédez</i> and ends on a very soft A major chord spread across the piano. After a breath mark, at <i>au Mouvement</i>, the right hand plays alone at the original tempo. This second unaccompanied call moves towards the black keys, and then the left-hand chords return.</p>",
      "devices": ["decrescendo", "texture change", "motivic link", "tempo change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 22, third and fourth systems: Cédez, held A-major chord, breath mark, au Mouvement and the second unaccompanied call."
    },
    {
      "id": "into-larger-answer",
      "title": "E major chord to the third call",
      "from": "A′ · Second statement of the call",
      "to": "A″ · Call and dance; ends in A major",
      "at": { "t": 78 },
      "span": [66, 92],
      "how": "<p>The second answer ends on an E major chord, pianissimo. The right hand then plays the third solo call alone, this time <i>un poco più forte</i>. At <i>Plus mouvementé</i> the dotted rhythms and left-hand chords return beneath it, and the answer becomes the fullest passage in the piece.</p>",
      "devices": ["texture change", "motivic link", "tempo change", "crescendo build"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 23: E-major chord, third solo call, un poco più forte, Plus mouvementé and Poco animato."
    }
  ]
};
