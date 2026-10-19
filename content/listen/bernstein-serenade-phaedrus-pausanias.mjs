const office = 'https://leonardbernstein.com/works/view/23/serenade-after-platos-symposium';
const lp = 'https://archive.org/details/lp_serenade-for-violin-solo-strings-and-percu_leonard-bernstein-symphony-of-the-air-isaa';

export default {
  id: 'bernstein-serenade-phaedrus-pausanias',
  composer: 'bernstein',
  order: 3,
  work: 'Serenade (after Plato’s Symposium)',
  movement: 'I. Phaedrus; Pausanias — Lento; Allegro marcato',
  year: '1954',
  key: '',
  forces: 'Solo violin, strings, harp and percussion',
  performers: 'Isaac Stern, violin; Symphony of the Air; Leonard Bernstein',
  recorded: '19 April 1956, New York; Columbia ML 5144 issued 1956',
  source: {
    archive: {
      item: 'lp_serenade-for-violin-solo-strings-and-percu_leonard-bernstein-symphony-of-the-air-isaa',
      file: 'disc1/01.01. Serenade For Violin Solo, Strings And Percussion: I - Phaedrus: Pausanias.mp3',
    },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1956,
      evidence: 'Columbia Masterworks ML 5144 (US mono LP). A Columbia advertisement in The American Record Guide for November 1956 (vol. 23 no. 3) lists the Serenade, Isaac Stern and the Symphony of the Air, ML 5144, among five Bernstein recordings “issued for the first time”, and the December 1956 issue lists it again. The Internet Archive carrier record and Discogs date the LP 1956; Sony’s reissue of the Eryximachus movement gives the recording date, 19 April 1956, and “Originally released 1956”. This territorial phonogram basis does not remove copyright in Bernstein’s composition. https://archive.org/details/sim_american-record-guide_1956-11_23_3 https://archive.org/details/sim_american-record-guide_1956-12_23_4 https://archive.org/details/lp_serenade-for-violin-solo-strings-and-percu_leonard-bernstein-symphony-of-the-air-isaa https://www.discogs.com/release/5995545 https://www.youtube.com/watch?v=vZ6lhjkhZk0',
    },
  },
  intro: 'The first movement of Bernstein’s violin Serenade (after Plato’s Symposium), played by Isaac Stern, who was the soloist at the first performance in 1954, with Bernstein conducting. The movement opens with a slow fugato for the soloist, followed by a fast sonata-allegro on the same material.',
  sections: [
    { t: 0, label: 'A · Lento, solo violin begins fugato', m: 'A' },
    { t: 183, label: 'B · Allegro marcato, Pausanias', m: 'B', mNote: 'Sonata-allegro built on the opening fugato' },
  ],
  cues: [
    {
      t: 0,
      kind: 'music',
      title: 'Opening fugato, solo violin',
      text: 'The Serenade opens with a fugato begun by the solo violin. Bernstein’s guide links it to Phaedrus’s “lyrical oration in praise of Eros”. The intervals and contours of the violin’s opening return in the later movements.',
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Bernstein’s guideposts of 8 August 1954 for each movement, and the account of the opening theme, on the Leonard Bernstein Office page for the Serenade. ' + office,
    },
    {
      t: 60,
      kind: 'world',
      title: 'Bernstein on Plato’s <i>Symposium</i>',
      text: 'Bernstein said the Serenade resulted from “a rereading of Plato’s charming dialogue”, <i>The Symposium</i>, and had “no literal program”. He described the music as “a series of related statements in praise of love”.',
      basis: 'documented',
      precision: 'passage',
      evidence: 'Quotations from Bernstein on the Leonard Bernstein Office page for the Serenade. ' + office,
    },
    {
      t: 183,
      kind: 'form',
      title: 'Pausanias, Allegro marcato',
      text: 'The Allegro marcato follows the speech of Pausanias on the duality of lover and beloved. It is a classical sonata-allegro on the material of the opening fugato. In the second theme the violin plays disjunct grace-note figures and dissonant intervals.',
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Bernstein’s guideposts of 8 August 1954, on the Bernstein Office page; the sentence on the second theme is the Office’s bracketed gloss to the guideposts. The change of tempo at about 3:03 is placed from the audio, which changes character at that point. ' + office,
    },
    {
      t: 300,
      kind: 'world',
      title: 'Recording, New York, 1956',
      text: 'Isaac Stern, soloist at the first performance in Venice on 12 September 1954, recorded the Serenade with Bernstein in New York on 19 April 1956. Columbia issued it that year as a mono LP.',
      basis: 'documented',
      precision: 'passage',
      evidence: 'Premiere: Bernstein Office page. Recording date, mono recording and 1956 release: Sony’s upload of the Eryximachus movement. Carrier, ML 5144: Discogs, and a Columbia advertisement in The American Record Guide, November 1956. ' + office + ' https://www.youtube.com/watch?v=vZ6lhjkhZk0 https://www.discogs.com/release/5995545 https://archive.org/details/sim_american-record-guide_1956-11_23_3',
    },
  ],
};
