// Score evidence: Arnold, The Celebrated Water-musick in score (London, 1788), pp. 47–49 (Commons, BnF scans, images 25–26 of 30): https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(25_of_30).jpg
// Bar numbers: Hallische Händel-Ausgabe IV/13 (Redlich, Bärenreiter, 1962), Suite II, printed pp. 51–52 (IMSLP #559922): first strain bars 1–19 (fermata, Fine and repeat sign at bar 19), second strain bars 20–34, da capo at bar 34.
const strings = ['violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'harpsichord'];
const withoutBrass = ['oboes', 'bassoons', ...strings];
const everyone = ['trumpets', 'horns', ...withoutBrass];

export default {
  id: 'handel-water-music-2-lentement',
  composer: 'handel',
  order: 4,
  work: 'Water Music, Suite No. 2 in D, HWV 349',
  movement: 'III. Lentement',
  set: { id: 'handel-water-music-2', title: 'Water Music · Suite No. 2', part: 3, of: 5 },
  year: '1717',
  key: 'D major',
  forces: 'Trumpets, horns, oboes, bassoon, strings and continuo',
  performers: 'Marine Chamber Orchestra of the United States Marine Band; Major Michelle Rakers, conductor',
  recorded: '29 January 2017',
  source: { file: "File:Handel's Water Music - 14. Lentement - Chamber Orchestra - United States Marine Band.opus" },
  intro: 'In the slow dance of the D major <i>Water Music</i> suite, trumpets and horns hold long notes beneath the oboes and violins. The brass rest during a middle strain, and then the opening returns.',

  sections: [
    { t: 0, label: 'A · Lentement, oboes and violins', m: 'A', mNote: 'Oboes and violins over held brass notes' },
    { t: 34.3, label: 'A · First strain repeated', m: 'A', mNote: 'The same nineteen bars, ending under a fermata.' },
    { t: 68.1, label: 'B · A strain without brass', m: 'B', mNote: 'Oboes begin the new phrase; the strings join them.' },
    { t: 98.6, label: 'A · Return of the first strain', m: 'A', mNote: 'The first strain returns once and closes on its fermata.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Lentement, brass sustained notes', text: '<i>Lentement</i> means slowly. Oboes and violins play a tune in three beats, and beneath it trumpets and horns take turns holding long notes. The bass moves steadily, with figures that tell the continuo player which chords to supply.', basis: 'score-proportion', precision: 'passage', evidence: 'Samuel Arnold’s full score, The Celebrated Water-musick (1788), pp. 47–48: Lentement, 3/4, tied brass notes and figured bass. https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(25_of_30).jpg' },
    { t: 68.1, kind: 'music', title: 'Second strain, woodwind and strings', text: 'The second strain begins with oboes and bassoon, and the strings join their phrase. Trumpets and horns rest for fifteen bars. Woodwind and strings play the dance without the long brass notes.', basis: 'score-proportion', precision: 'passage', evidence: 'Arnold’s full score (1788), pp. 48–49; Lentement, bars 20–34 in the Hallische Händel-Ausgabe. The brass rest throughout the second strain. https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(26_of_30).jpg' },
    { t: 98.6, kind: 'form', title: 'Da capo return of the first strain', text: '<i>Da capo</i> brings back the opening strain, with the brass holding long notes. The final D major chord carries a fermata, and the mark <i>Fine</i> ends the movement there.', basis: 'score-proportion', precision: 'passage', evidence: 'Arnold’s full score (1788), pp. 48–49: opening strain’s fermata and second strain’s Da Capo; Hallische Händel-Ausgabe, bars 19 and 34, Fine and Da Capo.',
    },
  ],

  transitions: [
    {
      id: 'into-repeat',
      title: 'Fermata and repeat of the first strain',
      from: 'A · Lentement, oboes and violins',
      to: 'A · First strain repeated',
      at: { t: 34 },
      span: [30, 39],
      how: '<p>The first strain ends on a D major chord, with a fermata over every part. The repeat sign takes the players back to the upbeat. Oboes, strings and bass play the same tune again, and the trumpets and horns hold their long notes.</p>',
      devices: ['fermata', 'motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Arnold’s full score (1788), pp. 47–48; Lentement, bar 19 in the Hallische Händel-Ausgabe: D major fermata chord and repeat sign.',
    },
    {
      id: 'into-brassless-strain',
      title: 'Woodwinds after the D major fermata',
      from: 'A · First strain repeated',
      to: 'B · A strain without brass',
      at: { t: 67.6 },
      span: [62, 76],
      how: '<p>The repeated strain ends on its D major fermata. Oboes and bassoon begin the next phrase while the strings rest, and the strings then join them. Trumpets and horns have no notes in this fifteen-bar strain, and the woodwinds play the opening alone.</p>',
      devices: ['orchestration change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Arnold’s full score (1788), pp. 48–49; Lentement, bars 19–34 in the Hallische Händel-Ausgabe: fermata, woodwind opening and rests in both brass parts.',
    },
    {
      id: 'into-da-capo',
      title: 'Da capo, return of the brass',
      from: 'B · A strain without brass',
      to: 'A · Return of the first strain',
      at: { t: 98 },
      span: [92, 106],
      how: '<p>The second strain closes with oboes, strings and bass together. At the <i>Da capo</i> the orchestra goes back to the first upbeat and the D major opening, and the trumpets and horns play again. The first strain is repeated as far as the fermata chord, where the <i>Fine</i> ends the dance.</p>',
      devices: ['retransition', 'orchestration change', 'fermata'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Arnold’s full score (1788), pp. 48–49; Lentement, bar 34, Da Capo, and bar 19, the fermata and Fine, in the Hallische Händel-Ausgabe.',
    },
  ],

  orchestra: {
    ensemble: ['trumpets', 'horns', 'oboes', 'bassoons', 'harpsichord', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: {
      title: 'Handel, The Celebrated Water-musick in score (London: Samuel Arnold, 1788), pp. 47–49',
      url: 'https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(25_of_30).jpg',
      locator: 'Arnold’s full score, pp. 47–49, Commons images 25–26. Bar numbers follow the Hallische Händel-Ausgabe, IV/13 (1962), pp. 51–52: first strain, bars 1–19, repeated; second strain, bars 20–34, without brass; da capo to Fine at bar 19.',
    },
    timeline: [
      { t: 0, playing: everyone, lead: ['oboes', 'violins-1'], note: 'Oboes and violins play the tune; trumpets and horns take turns holding long notes (bars 1–19).' },
      { t: 34.3, playing: everyone, lead: ['oboes', 'violins-1'], note: 'The first strain is repeated with the same scoring.' },
      { t: 68.1, playing: withoutBrass, lead: ['oboes', 'violins-1'], note: 'Oboes and bassoon begin the second strain; strings join them while the brass rest (bars 20–34).' },
      { t: 98.6, playing: everyone, lead: ['oboes', 'violins-1'], note: 'Da capo. The full scoring returns for the first strain, which is played once more.' },
      { t: 133.5, playing: [], lead: [], note: 'Silence after the final D major chord.' },
    ],
  },
};
