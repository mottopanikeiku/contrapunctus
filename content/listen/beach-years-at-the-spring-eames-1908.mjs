// Recording: Emma Eames, Victor matrix C-6203 take 1, New York, 18 May 1908 (DAHR); issued as Victor 88008.
// Source file: track 13 of the Romophone 81001-2 transfer by Ward Marston, as uploaded to the Internet Archive.
// Score read for the text: A. P. Schmidt, 1900, B♭ edition, https://archive.org/details/per_women-composers-collection_the-years-at-the-spring_1900
export default {
  id: 'beach-years-at-the-spring-eames-1908',
  composer: 'beach',
  order: 3,
  short: true,
  work: 'The Year’s at the Spring',
  movement: '',
  year: '1900',
  key: 'D♭ major',
  forces: 'Voice and piano',
  performers: 'Emma Eames, soprano, with piano',
  recorded: '18 May 1908',
  source: {
    archive: {
      item: 'emma-eames-cd-2',
      file: "13 - Emma Eames - CD 2 - The Year's at the Spring (Beach) Mx. C-6203-1 (Part), Victor 88008 (18.V.1908).mp3",
    },
    rights: {
      basis: 'us-published-before-cutoff',
      published: 1909,
      evidence: 'The New Victor Record Catalogue of July 1909, p. 55, lists Victor 88008 on the Emma Eames page as Spring (Henschel) and The Year’s at the Spring (Beach), twelve-inch, $3.00, https://archive.org/details/newvictorrecordc00vict. The Discography of American Historical Recordings dates matrix C-6203, take 1, to 18 May 1908 and lists it on Victor 88008, https://adp.library.ucsb.edu/index.php/matrix/refer/200007142. 1909 is the latest year of first publication. The Archive item carries the uploader’s Public Domain Mark, which is not the basis here; the audio is Ward Marston’s restoration for Romophone, whose own rights position is not documented (the dossier sets out why it does not block publication). This basis covers the 1908 recording, not the restoration.',
    },
  },
  intro: 'Emma Eames recorded Beach’s Browning song for Victor on 18 May 1908, a remake of her 1905 recording. She sings the whole song, including both of Beach’s settings of the opening lines, in under a minute.',

  sections: [
    { t: 0, label: 'A · First setting of the opening lines', m: 'A' },
    { t: 15.5, label: 'A′ · Opening lines again, a tempo', m: 'A′', mNote: 'The same lines restart, piano and a tempo.' },
    { t: 25.5, label: 'B · Crescendo, then “God’s in his heaven”', m: 'B' },
    { t: 34.5, label: 'C · “All’s right with the world”', m: 'C' },
  ],

  cues: [
    {
      t: 0,
      kind: 'world',
      title: 'Victor 88008, 18 May 1908',
      text: 'Eames recorded the song with piano in New York on 18 May 1908. Victor issued it on a single-sided 12-inch disc, number 88008, where it followed Henschel’s <i>Spring</i>. The May 1908 catalogue lists the same number for her 1905 recording, coupled with Hahn’s <i>L’Incrédule</i>.',
      basis: 'documented',
      precision: 'passage',
      evidence: 'The Discography of American Historical Recordings lists matrix C-6203, take 1, 18 May 1908, New York, on Victor 88008, with the note “Also recorded as C-2314” (https://adp.library.ucsb.edu/index.php/matrix/refer/200007142). The July 1909 Victor catalogue, p. 55, gives Spring and The Year’s at the Spring for 88008 (https://archive.org/details/newvictorrecordc00vict). The May 1908 catalogue, p. 45, lists 88008 as L’Incrédule and The Year’s at the Spring (https://archive.org/details/newvictorrecordc00vict_0); the Discography lists matrix C-2314, the 1905 recording, under 88008 as well (https://adp.library.ucsb.edu/index.php/objects/refer/55891).',
    },
    {
      t: 34.5,
      kind: 'music',
      title: 'Held note on “right”',
      text: 'After <i>ff</i> on “All’s”, the voice holds “right” for more than two bars over repeated piano chords. A ritenuto leads to “world”, held <i>a tempo</i> for more than two bars, and the piano ends the song on a fermata chord.',
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'The 1900 edition, p. 5 (B♭ edition): ff at “All’s”, then “right” tied across two bars and an eighth over repeated chords marked marcato, “rit.” in the 4/4 bar, “a tempo” at “world!”, held over two bars, and a fermata on the closing bar (https://archive.org/details/per_women-composers-collection_the-years-at-the-spring_1900).',
    },
  ],
  transitions: [],
};
