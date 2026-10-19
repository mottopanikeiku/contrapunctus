export default {
  "id": "rameau-la-poule",
  "composer": "rameau",
  "order": 2,
  "work": "La Poule",
  "movement": "",
  "year": "c. 1728, publication",
  "key": "G minor",
  "forces": "Solo piano; originally harpsichord",
  "performers": "Marcelle Meyer, piano",
  "recorded": "29–30 October 1953, Salle Adyar, Paris",
  "source": { "file": "File:Jean-Philippe Rameau - La Poule (Marcelle Meyer, 1953).flac" },
  "intro": "A hen’s clucking grows into repeated chords and running passages in Rameau’s <i>La Poule</i>, played here by Marcelle Meyer on piano. The bird starts on a single G.",
  "sections": [
    { "t": 0, "label": "A · The hen clucks on G", "m": "A", "mNote": "Repeated Gs grow into chords and quick runs" },
    { "t": 94, "label": "A′ · The clucking starts again on D", "m": "A′", "mNote": "The repeated-note figure begins the second half in D minor" },
    { "t": 166, "label": "Coda · Runs descend into G minor", "m": "Coda", "mNote": "The bass runs down beneath the final chord" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "A hen on one G", "text": "The right hand repeats G, then flicks upwards. Rameau prints “co co co co co” beneath the opening notes. The left hand joins the clucking, and the little flourish begins to climb higher.", "basis": "score-proportion", "precision": "passage", "evidence": "Rameau, La Poule, in Nouvelles Suites de pièces de clavecin (c. 1728), Saint-Saëns edition (Durand, 1895), p. 86: repeated Gs and the printed clucking syllables. https://archive.org/download/imslp-suites-de-pices-de-clavecin-rameau-jean-philippe/Rameau_-_nouvelles_suite.pdf" },
    { "t": 30, "kind": "world", "title": "Meyer at Salle Adyar", "text": "Paris, October 1953: Marcelle Meyer records Rameau’s three harpsichord books at Salle Adyar, playing them on the piano. <i>La Poule</i> belongs to the third book, alongside dances, <i>Les Sauvages</i> and <i>L’Enharmonique</i>.", "basis": "documented", "precision": "passage", "evidence": "Classical Pianists chronology, Marcelle Meyer, session MaMe-C#015, lists the Rameau recordings on 29–30 October 1953 at Salle Adyar: https://classical-pianists.net/viii/marcelle-meyer/chronology/. The Nouvelles Suites score gives the contents of the third book." },
    { "t": 60, "kind": "music", "title": "One note becomes a chord", "text": "The repeated-note figure keeps acquiring companions. Sometimes one line clucks alone; elsewhere both hands repeat chords beneath a longer upper note. Rameau marks exchanges of <i>fort</i> and <i>doux</i> — loud and soft — across the piece.", "basis": "general", "precision": "passage", "evidence": "Saint-Saëns edition, pp. 86–89: single-note figures, repeated chords, held upper notes and fort/doux markings." },
    { "t": 94, "kind": "form", "title": "The hen starts on D", "text": "The second half begins with the clucking figure on D, after a cadence in D minor. The same quick upward flick sets off another stretch of repeated notes and runs, now working back towards G minor.", "basis": "score-proportion", "precision": "passage", "evidence": "Saint-Saëns edition, pp. 87–89: D minor cadence and double bar, repeated Ds at the start of the second half, then the eventual G minor close." },
    { "t": 166, "kind": "music", "title": "The bass makes its descent", "text": "Near the end, repeated notes trade places between the hands while quick runs sweep across them. The last G minor chord stays above a descending bass run, which carries the piano down to a low G.", "basis": "score-proportion", "precision": "passage", "evidence": "Saint-Saëns edition, p. 89, final systems: exchanges of repeated notes and runs, then a held G minor chord over the descending bass." }
  ],
  "transitions": [
    {
      "id": "into-second-strain",
      "title": "D minor starts another round",
      "from": "A · The hen clucks on G",
      "to": "A′ · The clucking starts again on D",
      "at": { "t": 94 },
      "span": [82, 108],
      "how": "<p>The first half closes in D minor, with the bass running down beneath the held chord. After the double bar, the right hand alone repeats D and adds the familiar upward flick. The left hand re-enters as the figure climbs.</p>",
      "devices": ["perfect cadence", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Saint-Saëns edition, pp. 87–88: D minor cadence, double bar, repeated Ds and renewed accompaniment. https://archive.org/download/imslp-suites-de-pices-de-clavecin-rameau-jean-philippe/Rameau_-_nouvelles_suite.pdf"
    },
    {
      "id": "into-closing-drive",
      "title": "Clucking and runs converge on G",
      "from": "A′ · The clucking starts again on D",
      "to": "Coda · Runs descend into G minor",
      "at": { "t": 166 },
      "span": [154, 183],
      "how": "<p>The piano exchanges repeated notes between high and low parts, with quick runs crossing them. The final phrase settles into G minor. Its upper chord holds while the bass runs down to G.</p>",
      "devices": ["register change", "motivic link", "perfect cadence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Saint-Saëns edition, p. 89, final systems: repeated-note exchanges, G minor cadence and descending bass. https://archive.org/download/imslp-suites-de-pices-de-clavecin-rameau-jean-philippe/Rameau_-_nouvelles_suite.pdf"
    }
  ]
};
