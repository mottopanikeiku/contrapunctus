export default {
  "id": "debussy-childrens-corner-serenade-doll",
  "composer": "debussy",
  "order": 32,
  "work": "Children’s Corner",
  "movement": "III. Serenade for the Doll",
  "set": {
    "id": "debussy-childrens-corner",
    "title": "Children’s Corner",
    "part": 3,
    "of": 6
  },
  "year": "1906–08",
  "key": "E major",
  "forces": "Piano",
  "performers": "Robert Casadesus, piano",
  "recorded": "11 April 1950, Columbia 30th Street Studio, New York",
  "source": {
    "archive": {
      "item": "lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0",
      "file": "disc1/02.03. Children's Corner Suite: Serenade For The Doll.mp3"
    },
    "rights": {
      "basis": "eu-published-before-1963",
      "published": 1951,
      "evidence": "Columbia Masterworks ML 4366, 1951; Internet Archive item metadata and original carrier: https://archive.org/details/lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0. Territorial EU basis; US status not established."
    }
  },
  "intro": "“Serenade for the Doll” is the third piece of Debussy’s <i>Children’s Corner</i>, a short serenade whose tune passes between the pianist’s hands and is decorated with grace notes. Debussy kept the soft pedal down throughout, including the passages where the doll’s song becomes emphatic.",
  "sections": [
    { "t": 0, "label": "A · Grace notes and plucked chords", "m": "A", "mNote": "The tune passes between the hands above a detached accompaniment." },
    { "t": 50, "label": "B · Sharper accents, chromatic chords", "m": "B", "mNote": "Chromatic notes enter the E-major melody." },
    { "t": 104, "label": "A′ · The song over running quavers", "m": "A′", "mNote": "The grace notes return over a smoother left hand." }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "Opening, left-hand tune", "text": "The piano plays detached chords that imitate plucked strings. The tune begins in the left hand, with grace notes leading up to each longer note, and then passes to the right hand. Debussy marks the passage <i>léger et gracieux</i> (light and graceful).", "basis": "score-proportion", "precision": "passage", "evidence": "Debussy, Children’s Corner, Durand (1908), plate D. & F. 7188, p. 10: detached accompaniment, grace-note tune first in the left hand, then the right, and léger et gracieux. https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 50, "kind": "music", "title": "Soft pedal throughout", "text": "Sharps and flats enter the tune, and sudden accents break into its short phrases. In a footnote Debussy requires the soft pedal to stay down throughout, even in forte passages.", "basis": "general", "precision": "passage", "evidence": "Durand score, p. 10, footnote requiring the soft pedal throughout, including forte passages; pp. 12–14 show chromatic phrases, accents and En animant un peu. The note describes Debussy’s instruction." },
    { "t": 104, "kind": "form", "title": "Return of the melody, E major", "text": "The grace-note melody returns in E major over continuous left-hand quavers. Near the end the hands again exchange short notes. The piano rises to a high E, and the final bar is a bar of rests under a fermata.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, p. 15: returning melody over quavers, detached closing figures, high E and final bar of rests with fermatas." }
  ],
  "transitions": [
    {
      "id": "into-wandering-middle",
      "title": "Chromatic bass and change of signature",
      "from": "A · Grace notes and plucked chords",
      "to": "B · Sharper accents, chromatic chords",
      "at": { "t": 50 },
      "span": [40, 65],
      "how": "<p>The piano continues in short, detached notes while the bass moves through chromatic pitches. Debussy cancels the four-sharp signature and marks the passage <i>En animant un peu</i>. The melody moves away from E major. The grace notes continue, and sharply accented chords now interrupt them.</p>",
      "devices": ["motivic link", "texture change", "tempo change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, pp. 12–13: chromatic bass, cancellation of the E-major signature, En animant un peu, grace notes and sforzando chords."
    },
    {
      "id": "into-flowing-recollection",
      "title": "Quaver bass under the returning tune",
      "from": "B · Sharper accents, chromatic chords",
      "to": "A′ · The song over running quavers",
      "at": { "t": 104 },
      "span": [94, 116],
      "how": "<p>Rising runs cross the piano and end on a sforzando. The left hand then begins an even quaver pattern, played softly. Above it the right hand plays the grace-note melody again in E major. Long held notes take the place of the plucked accompaniment heard at the opening.</p>",
      "devices": ["retransition", "motivic link", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, pp. 14–15: rising runs, sforzando, the left-hand quaver pattern and the return of the E-major grace-note melody."
    }
  ]
};
