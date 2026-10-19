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
  "intro": "A little serenade passes between the pianist’s hands, its tune flicked into life by grace notes. Debussy keeps the soft pedal down throughout, even when the doll’s song becomes emphatic.",
  "sections": [
    { "t": 0, "label": "A · Grace notes and plucked chords", "m": "A", "mNote": "The tune changes hands above detached accompaniment" },
    { "t": 50, "label": "B · Sharper accents, wandering chords", "m": "B", "mNote": "Chromatic notes disturb the E-major song" },
    { "t": 104, "label": "A′ · The song over flowing quavers", "m": "A′", "mNote": "Grace notes return over a smoother left hand" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "A tiny plucked serenade", "text": "Detached chords make the piano sound plucked. The tune starts in the left hand, with little grace notes that flick upwards before each longer note; then the right hand takes it over. Debussy marks the whole exchange <i>léger et gracieux</i> — light and graceful.", "basis": "score-proportion", "precision": "passage", "evidence": "Debussy, Children’s Corner, Durand (1908), plate D. & F. 7188, p. 10: detached accompaniment, grace-note tune first in the left hand, then the right, and léger et gracieux. https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 50, "kind": "music", "title": "The soft pedal stays down", "text": "Sharps and flats creep into the tune, and sudden accents interrupt its polite little phrases. The soft pedal stays down even at forte: Debussy puts that instruction in a footnote. The doll’s serenade can raise its voice without losing its veiled piano tone.", "basis": "general", "precision": "passage", "evidence": "Durand score, p. 10, footnote requiring the soft pedal throughout, including forte passages; pp. 12–14 show chromatic phrases, accents and En animant un peu. The note describes Debussy’s instruction." },
    { "t": 104, "kind": "form", "title": "The left hand flows", "text": "The grace-note song returns in E major, now carried by continuous left-hand quavers. The hands trade short notes again as the piece ends. Finally the piano reaches up to a high E and leaves a whole bar of silence under a fermata.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, p. 15: returning melody over quavers, detached closing figures, high E and final bar of rests with fermatas." }
  ],
  "transitions": [
    {
      "id": "into-wandering-middle",
      "title": "Chromatic notes enter the serenade",
      "from": "A · Grace notes and plucked chords",
      "to": "B · Sharper accents, wandering chords",
      "at": { "t": 50 },
      "span": [40, 65],
      "how": "<p>The piano keeps its short, detached notes while the bass moves through chromatic pitches. Debussy cancels the four-sharp signature and writes <i>En animant un peu</i>. The tune strays from E major; the grace notes survive, now interrupted by sharply accented chords.</p>",
      "devices": ["motivic link", "texture change", "tempo change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, pp. 12–13: chromatic bass, cancellation of the E-major signature, En animant un peu, grace notes and sforzando chords."
    },
    {
      "id": "into-flowing-recollection",
      "title": "A running bass carries the tune",
      "from": "B · Sharper accents, wandering chords",
      "to": "A′ · The song over flowing quavers",
      "at": { "t": 104 },
      "span": [94, 116],
      "how": "<p>Rising runs cross the piano and end in a sharp accent. The left hand then starts a quiet, even pattern of quavers. Above it the right hand recalls the grace-note tune in E major, with long notes where the opening accompaniment used to pluck.</p>",
      "devices": ["retransition", "motivic link", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, pp. 14–15: rising runs, sforzando, the left-hand quaver pattern and the return of the E-major grace-note melody."
    }
  ]
};
