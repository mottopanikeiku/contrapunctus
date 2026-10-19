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
  "intro": "In Rameau’s <i>La Poule</i>, played by Marcelle Meyer on the piano, a hen’s clucking is developed into repeated chords and running passages. The clucking figure begins on a single G.",
  "sections": [
    { "t": 0, "label": "A · Repeated notes on G", "m": "A", "mNote": "Repeated Gs expand into chords and quick runs" },
    { "t": 94, "label": "A′ · Repeated-note figure, D minor", "m": "A′", "mNote": "The repeated-note figure opens the second half in D minor." },
    { "t": 166, "label": "Coda · Runs descend into G minor", "m": "Coda", "mNote": "The bass runs down beneath the final chord." }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "Opening, repeated Gs", "text": "The right hand repeats G, then turns upwards. Rameau printed “co co co co co” beneath the opening notes. The left hand takes up the repeated-note figure, and the short flourish rises higher.", "basis": "score-proportion", "precision": "passage", "evidence": "Rameau, La Poule, in Nouvelles Suites de pièces de clavecin (c. 1728), Saint-Saëns edition (Durand, 1895), p. 86: repeated Gs and the printed clucking syllables. https://archive.org/download/imslp-suites-de-pices-de-clavecin-rameau-jean-philippe/Rameau_-_nouvelles_suite.pdf" },
    { "t": 30, "kind": "world", "title": "Marcelle Meyer recording, Paris, 1953", "text": "In October 1953 Marcelle Meyer recorded Rameau’s three harpsichord books on the piano at the Salle Adyar in Paris. <i>La Poule</i> belongs to the third book, which also contains dances, <i>Les Sauvages</i> and <i>L’Enharmonique</i>.", "basis": "documented", "precision": "passage", "evidence": "Classical Pianists chronology, Marcelle Meyer, session MaMe-C#015, lists the Rameau recordings on 29–30 October 1953 at Salle Adyar: https://classical-pianists.net/viii/marcelle-meyer/chronology/. The Nouvelles Suites score gives the contents of the third book." },
    { "t": 60, "kind": "music", "title": "Repeated notes and chords", "text": "The repeated-note figure appears in single notes and in chords. In some passages one line repeats a note alone; elsewhere both hands repeat chords beneath a held upper note. Rameau marks alternations of <i>fort</i> and <i>doux</i>, loud and soft, across the piece.", "basis": "general", "precision": "passage", "evidence": "Saint-Saëns edition, pp. 86–89: single-note figures, repeated chords, held upper notes and fort/doux markings." },
    { "t": 94, "kind": "form", "title": "Opening of the second half", "text": "After a cadence in D minor, the second half begins with the clucking figure on D. The same quick upward flick starts another passage of repeated notes and runs, which moves back towards G minor.", "basis": "score-proportion", "precision": "passage", "evidence": "Saint-Saëns edition, pp. 87–89: D minor cadence and double bar, repeated Ds at the start of the second half, then the eventual G minor close." },
    { "t": 166, "kind": "music", "title": "Final bars in G minor", "text": "Near the end, the hands exchange repeated notes while quick runs pass across them. The final G minor chord is held over a descending bass run, which ends on a low G.", "basis": "score-proportion", "precision": "passage", "evidence": "Saint-Saëns edition, p. 89, final systems: exchanges of repeated notes and runs, then a held G minor chord over the descending bass." }
  ],
  "transitions": [
    {
      "id": "into-second-strain",
      "title": "D minor cadence and the double bar",
      "from": "A · Repeated notes on G",
      "to": "A′ · Repeated-note figure, D minor",
      "at": { "t": 94 },
      "span": [82, 108],
      "how": "<p>The first half closes in D minor, with the bass running down beneath the held chord. After the double bar the right hand plays alone, repeating D and adding the upward flick heard earlier. The left hand re-enters as the figure rises.</p>",
      "devices": ["perfect cadence", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Saint-Saëns edition, pp. 87–88: D minor cadence, double bar, repeated Ds and renewed accompaniment. https://archive.org/download/imslp-suites-de-pices-de-clavecin-rameau-jean-philippe/Rameau_-_nouvelles_suite.pdf"
    },
    {
      "id": "into-closing-drive",
      "title": "Repeated notes and runs close in G minor",
      "from": "A′ · Repeated-note figure, D minor",
      "to": "Coda · Runs descend into G minor",
      "at": { "t": 166 },
      "span": [154, 183],
      "how": "<p>The piano passes repeated notes between the high and low parts, and quick runs cross them. The final phrase cadences in G minor. The upper chord is held while the bass descends to G.</p>",
      "devices": ["register change", "motivic link", "perfect cadence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Saint-Saëns edition, p. 89, final systems: repeated-note exchanges, G minor cadence and descending bass. https://archive.org/download/imslp-suites-de-pices-de-clavecin-rameau-jean-philippe/Rameau_-_nouvelles_suite.pdf"
    }
  ]
};
