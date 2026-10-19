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
  "intro": "Robert Casadesus plays Debussy’s cakewalk, a dry, springy dance with an unexpected guest: Wagner’s <i>Tristan</i>. The grand romantic phrase arrives “with great emotion” and gets a cheeky answer.",
  "sections": [
    { "t": 0, "label": "A · The E♭-major dance", "m": "A", "mNote": "Syncopations jostle a steady bass-and-chord accompaniment" },
    { "t": 52, "label": "B · Tristan at the dance", "m": "B", "mNote": "Wagner’s phrase meets clipped grace-note replies" },
    { "t": 120, "label": "A′ · The cakewalk returns", "m": "A′", "mNote": "The first tempo and E♭-major syncopations return" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "A dance with elbows", "text": "The tune pushes its accents across the beat while the left hand keeps up a regular bass-and-chord step. Debussy marks it <i>très net et très sec</i> — very clear and very dry. Sudden loud notes poke through the quieter ones.", "basis": "score-proportion", "precision": "passage", "evidence": "Debussy, Children’s Corner, Durand (1908), plate D. & F. 7188, pp. 24–25: syncopation, bass-and-chord accompaniment, contrasting dynamics and très net et très sec. https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 35, "kind": "world", "title": "Dancers and a racist doll", "text": "In Paris in 1902–03, seven African American women, the Florida Creole Girls, help make the cakewalk a craze. Debussy’s title names a racist caricature: Florence Kate Upton’s blackface doll, introduced in an 1895 picture book.", "basis": "documented", "precision": "passage", "evidence": "James Deaville, Debussy’s Cakewalk (2014), on the Florida Creole Girls at the Casino de Paris: https://revuemusicaleoicrm.org/rmo-vol2-n1/debussy-s-cakewalk/. David Pilgrim, Jim Crow Museum, on Upton’s 1895 character and minstrel doll: https://jimcrowmuseum.ferris.edu/golliwog/homepage.htm." },
    { "t": 70, "kind": "music", "title": "Tristan gets an answer", "text": "The slower middle quotes the opening of [[wagner|Wagner]]’s <i>Tristan und Isolde</i>. Debussy writes <i>avec une grande émotion</i> — with great emotion — above the yearning phrase. Short, clipped chords answer it, as if the pianist has just remembered where the dance floor is.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, pp. 26–27: avec une grande émotion and the alternating chromatic phrase and grace-note chords. The Tristan quotation is discussed by Deaville in Debussy’s Cakewalk (2014)." },
    { "t": 120, "kind": "form", "title": "Back to the cakewalk", "text": "The first tempo snaps back, with E♭ major and the familiar bass-and-chord step. The tune recovers its sharp elbows. Near the end, Debussy lets it dwindle to little fragments before two fortissimo chords shut the door.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, pp. 27–28: 1° Tempo, restored three-flat signature and dance, quiet fragments, and two final detached fortissimo chords." }
  ],
  "transitions": [
    {
      "id": "into-expressive-interruption",
      "title": "The dance slows into G♭ major",
      "from": "A · The E♭-major dance",
      "to": "B · Tristan at the dance",
      "at": { "t": 52 },
      "span": [42, 66],
      "how": "<p>The E♭-major dance dwindles to small replies between the hands. Six flats replace three, and <i>Un peu moins vite</i> slows the pace. Over repeated bass notes, grace-note chords introduce the G♭-major middle; soon the piano stretches out into the chromatic phrase from <i>Tristan</i>.</p>",
      "devices": ["tempo change", "texture change", "direct modulation"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, pp. 25–26: change to six flats, Un peu moins vite, repeated bass and grace-note chords, followed by the Tristan quotation."
    },
    {
      "id": "into-dance-return",
      "title": "The bass puts the dance back",
      "from": "B · Tristan at the dance",
      "to": "A′ · The cakewalk returns",
      "at": { "t": 120 },
      "span": [108, 132],
      "how": "<p>The middle slows under <i>Retenez</i> and <i>Toujours retenu</i>. A short descending line is left alone before a breath mark. Then <i>1° Tempo</i> restores E♭ major and the left hand’s bass-and-chord accompaniment; the right hand resumes its syncopated dance.</p>",
      "devices": ["retransition", "tempo change", "texture change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 27: Retenez, Toujours retenu, unaccompanied descending phrase, breath mark, three-flat signature and 1° Tempo."
    }
  ]
};
