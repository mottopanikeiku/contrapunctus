export default {
  "id": "debussy-childrens-corner-cakewalk",
  "composer": "debussy",
  "order": 35,
  "work": "Children’s Corner",
  "movement": "VI. Golliwogg’s Cake-Walk",
  "set": {
    "id": "debussy-childrens-corner",
    "title": "Children’s Corner",
    "part": 6,
    "of": 6
  },
  "year": "1906–08",
  "key": "E♭ major",
  "forces": "Piano",
  "performers": "Robert Casadesus, piano",
  "recorded": "11 April 1950, Columbia 30th Street Studio, New York",
  "source": {
    "archive": {
      "item": "lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0",
      "file": "disc1/02.06. Children's Corner Suite: Golliwog's Cakewalk.mp3"
    },
    "rights": {
      "basis": "eu-published-before-1963",
      "published": 1951,
      "evidence": "Columbia Masterworks ML 4366, 1951; Internet Archive item metadata and original carrier: https://archive.org/details/lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0. Territorial EU basis; US status not established."
    }
  },
  "intro": "Robert Casadesus plays “Golliwogg’s Cake-Walk”, the sixth piece of Debussy’s Children’s Corner. The cakewalk quotes a phrase from Wagner’s <i>Tristan</i>, marked “with great emotion”.",
  "sections": [
    { "t": 0, "label": "A · The E♭-major dance", "m": "A", "mNote": "Syncopations over a steady bass-and-chord accompaniment" },
    { "t": 52, "label": "B · Wagner’s Tristan quotation, middle section", "m": "B", "mNote": "Wagner’s phrase alternates with clipped grace-note figures" },
    { "t": 120, "label": "A′ · Cakewalk theme returns, E♭ major", "m": "A′", "mNote": "The first tempo and the E♭-major syncopations return." }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "Syncopated tune over bass and chords", "text": "The tune places its accents across the beat while the left hand plays a regular bass-and-chord accompaniment. Debussy marks it <i>très net et très sec</i> — very clear and very dry. Sudden loud notes stand out among the quieter ones.", "basis": "score-proportion", "precision": "passage", "evidence": "Debussy, Children’s Corner, Durand (1908), plate D. & F. 7188, pp. 24–25: syncopation, bass-and-chord accompaniment, contrasting dynamics and très net et très sec. https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 35, "kind": "world", "title": "Cakewalk craze, Paris, 1902–03", "text": "In Paris in 1902–03, seven African American women, the Florida Creole Girls, helped make the cakewalk a craze. Debussy’s title names a racist caricature, Florence Kate Upton’s blackface doll, introduced in an 1895 picture book.", "basis": "documented", "precision": "passage", "evidence": "James Deaville, Debussy’s Cakewalk (2014), on the Florida Creole Girls at the Casino de Paris: https://revuemusicaleoicrm.org/rmo-vol2-n1/debussy-s-cakewalk/. David Pilgrim, Jim Crow Museum, on Upton’s 1895 character and minstrel doll: https://jimcrowmuseum.ferris.edu/golliwog/homepage.htm." },
    { "t": 70, "kind": "music", "title": "Tristan quotation, middle section", "text": "The slower middle section quotes the opening of [[wagner|Wagner]]’s <i>Tristan und Isolde</i>. Debussy marks the chromatic phrase <i>avec une grande émotion</i> (with great emotion). Short grace-note chords alternate with it.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, pp. 26–27: avec une grande émotion and the alternating chromatic phrase and grace-note chords. The Tristan quotation is discussed by Deaville in Debussy’s Cakewalk (2014)." },
    { "t": 120, "kind": "form", "title": "Return of the cakewalk", "text": "The first tempo returns, with the three-flat signature of E♭ major and the bass-and-chord step of the dance. Near the end the tune breaks into short, quiet fragments. Two detached fortissimo chords close the piece.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, pp. 27–28: 1° Tempo, restored three-flat signature and dance, quiet fragments, and two final detached fortissimo chords." }
  ],
  "transitions": [
    {
      "id": "into-expressive-interruption",
      "title": "The middle section in G♭ major",
      "from": "A · The E♭-major dance",
      "to": "B · Wagner’s Tristan quotation, middle section",
      "at": { "t": 52 },
      "span": [42, 66],
      "how": "<p>The E♭-major dance thins out to short exchanges between the hands. The key signature changes from three flats to six, and the marking <i>Un peu moins vite</i> slows the tempo. Grace-note chords over repeated bass notes open the G♭-major middle section, and the piano then plays the chromatic phrase from <i>Tristan</i>.</p>",
      "devices": ["tempo change", "texture change", "direct modulation"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, pp. 25–26: change to six flats, Un peu moins vite, repeated bass and grace-note chords, followed by the Tristan quotation."
    },
    {
      "id": "into-dance-return",
      "title": "Return to 1° Tempo in E♭ major",
      "from": "B · Wagner’s Tristan quotation, middle section",
      "to": "A′ · Cakewalk theme returns, E♭ major",
      "at": { "t": 120 },
      "span": [108, 132],
      "how": "<p>The middle section slows under <i>Retenez</i> and <i>Toujours retenu</i>. A short descending phrase is played unaccompanied, followed by a breath mark. At <i>1° Tempo</i> the three-flat signature returns with E♭ major, the left hand takes up its bass-and-chord accompaniment again and the right hand resumes the syncopated dance.</p>",
      "devices": ["retransition", "tempo change", "texture change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 27: Retenez, Toujours retenu, unaccompanied descending phrase, breath mark, three-flat signature and 1° Tempo."
    }
  ]
};
