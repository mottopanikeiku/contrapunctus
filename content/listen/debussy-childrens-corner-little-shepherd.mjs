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
    "of": 6
  },
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
  "intro": "The piano becomes a shepherd’s pipe: a single line curls into the silence, then answers itself with a little dance. Debussy needs only two pages for three calls and their replies.",
  "sections": [
    { "t": 0, "label": "A · A pipe and a dance", "m": "A", "mNote": "A lone melody is answered by dotted rhythms and chords" },
    { "t": 50, "label": "A′ · The second call", "m": "A′", "mNote": "The piano sings alone again, then adds soft chords" },
    { "t": 78, "label": "A″ · A bolder call, a quiet dance", "m": "A″", "mNote": "The last answer grows animated, then settles in A major" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "A pipe without accompaniment", "text": "A single piano line winds down and up, with small ornaments and a pause at the end. The left hand is silent. Then the tune begins to dance in dotted rhythms, and soft chords arrive underneath it.", "basis": "score-proportion", "precision": "passage", "evidence": "Debussy, Children’s Corner, Durand (1908), plate D. & F. 7188, p. 22: unaccompanied opening, fermata, then Plus mouvementé with dotted figures and left-hand chords. https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 50, "kind": "form", "title": "Another breath, another call", "text": "The dance settles on a held chord and the accompaniment falls silent. The shepherd’s line starts again, with changed notes and the same easy turns. Its answer comes in soft chords, then pauses over another long-held harmony.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, p. 22, third and fourth systems, to p. 23, first system: held A-major chord, renewed unaccompanied melody and chordal answer ending in E major." },
    { "t": 78, "kind": "form", "title": "The shepherd’s last dance", "text": "The third call is a little stronger, and the answer grows more animated. Then the dotted dance returns pianissimo. Debussy asks for it to be held back while keeping its rhythm; the final A-major chord is marked ppp.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, p. 23: un poco più forte, Plus mouvementé, Poco animato, Un peu retenu (en conservant le rythme), and final A-major chord." }
  ],
  "transitions": [
    {
      "id": "into-renewed-exchange",
      "title": "A major rings, then one voice",
      "from": "A · A pipe and a dance",
      "to": "A′ · The second call",
      "at": { "t": 50 },
      "span": [40, 62],
      "how": "<p>The first dance slows under <i>Cédez</i> and settles on a very soft A-major chord spread across the piano. After a breath, the right hand resumes alone at the original pace. Its new call reaches towards the black keys before the left-hand chords return.</p>",
      "devices": ["decrescendo", "texture change", "motivic link", "tempo change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 22, third and fourth systems: Cédez, held A-major chord, breath mark, au Mouvement and the second unaccompanied call."
    },
    {
      "id": "into-larger-answer",
      "title": "E major clears for the last call",
      "from": "A′ · The second call",
      "to": "A″ · A bolder call, a quiet dance",
      "at": { "t": 78 },
      "span": [66, 92],
      "how": "<p>The second answer rests on E major, pianissimo. The right hand begins alone again, this time <i>un poco più forte</i>. Dotted rhythms and left-hand chords rejoin it under <i>Plus mouvementé</i>, and the answer grows into the piece’s fullest passage.</p>",
      "devices": ["texture change", "motivic link", "tempo change", "crescendo build"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 23: E-major chord, third solo call, un poco più forte, Plus mouvementé and Poco animato."
    }
  ]
};
