// Recording: Emma Eames, Victor matrix C-2314 take 2, New York, 16 March 1905 (DAHR); issued as Victor 85057, later numbered 88008.
// Source file: track 5 of the Romophone 81001-2 transfer by Ward Marston, as uploaded to the Internet Archive.
// Score read for the text: A. P. Schmidt, 1900, B♭ edition, https://archive.org/details/per_women-composers-collection_the-years-at-the-spring_1900
export default {
  id: 'beach-years-at-the-spring-eames-1905',
  composer: 'beach',
  order: 2,
  short: true,
  work: 'The Year’s at the Spring',
  movement: '',
  year: '1900',
  key: 'D♭ major',
  forces: 'Voice and piano',
  performers: 'Emma Eames, soprano, with piano',
  recorded: '16 March 1905',
  source: {
    archive: {
      item: 'emma-eames-cd-1',
      file: "05 - Emma Eames - CD 1 - The Year's at the Spring (Beach) Mx. C-2314-2 (part), Victor 85057 (16.III.1905).mp3",
    },
    rights: {
      basis: 'us-published-before-cutoff',
      published: 1908,
      evidence: 'The New Victor Record Catalogue of May 1908, p. 45, lists Victor 88008 on the Emma Eames page as L’Incrédule (Reynaldo Hahn, French) and The Year’s at the Spring (Beach, English), twelve-inch, $3.00, https://archive.org/details/newvictorrecordc00vict_0. The Discography of American Historical Recordings dates matrix C-2314, take 2, to 16 March 1905 and lists it on Victor 85057 and Victor 88008, https://adp.library.ucsb.edu/index.php/matrix/refer/200003689; its record for 85057 gives a publication year of [1905], https://adp.library.ucsb.edu/index.php/objects/refer/55071. 1908 is the latest year of first publication that a dated source documents. The Archive item carries the uploader’s Public Domain Mark, which is not the basis here; the audio is Ward Marston’s restoration for Romophone, whose own rights position is not documented (the dossier sets out why it does not block publication). This basis covers the 1905 recording, not the restoration.',
    },
  },
  intro: 'Emma Eames recorded Beach’s Browning song for Victor on 16 March 1905, in D♭ according to the label. She sings the whole song, including both of Beach’s settings of the opening lines, in under a minute.',

  sections: [
    { t: 0, label: 'A · First setting of the opening lines', m: 'A' },
    { t: 15.5, label: 'A′ · Opening lines again, a tempo', m: 'A′', mNote: 'The same lines restart, piano and a tempo.' },
    { t: 26.5, label: 'B · Crescendo, then “God’s in his heaven”', m: 'B' },
    { t: 36.5, label: 'C · “All’s right with the world”', m: 'C' },
  ],

  cues: [
    {
      t: 0,
      kind: 'world',
      title: 'Victor 85057, 16 March 1905',
      text: 'Eames recorded the song in New York on 16 March 1905. The first take, made on 20 February, was destroyed. Victor issued take 2 as 85057, with Hahn’s <i>L’Incrédule</i> first and the Beach song second, its key given on the label as D♭. The May 1908 catalogue lists the same coupling as 88008.',
      basis: 'documented',
      precision: 'passage',
      evidence: 'The Discography of American Historical Recordings lists matrix C-2314: take 1, 20 February 1905, destroyed; take 2, 16 March 1905, master, Victor 85057. Its notes say “The year’s at the spring” was sung in English and that the original label of 85057 shows the first selection in the key of A and the second in the key of D flat (https://adp.library.ucsb.edu/index.php/matrix/refer/200003689). The New Victor Record Catalogue of May 1908, p. 45, lists 88008 as L’Incrédule and The Year’s at the Spring (https://archive.org/details/newvictorrecordc00vict_0); the Discography also lists C-2314 under 88008 (https://adp.library.ucsb.edu/index.php/objects/refer/55891).',
    },
    {
      t: 15.5,
      kind: 'form',
      title: 'Second setting of the opening lines',
      text: 'Beach sets the first four lines of Browning’s poem twice. The first setting, on p. 3 of the 1900 edition, is marked <i>mf</i> and reaches <i>f</i> at “The hillside’s”. The second, on p. 4, restarts <i>a tempo</i> and <i>p</i> and goes on through the rest of the poem.',
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'The 1900 edition (B♭ version, pp. 3–4): p. 3 opens mf, marks f at “The hillside’s” and slows with poco rall. and rit.; p. 4 restarts a tempo, p, at “The year’s at the spring” and continues to the end of the poem. The sung line of the recording follows both settings in order (https://archive.org/details/per_women-composers-collection_the-years-at-the-spring_1900).',
    },
  ],
  transitions: [],
};
