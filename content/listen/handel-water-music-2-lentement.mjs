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
  intro: 'The slow dance of the D major <i>Water Music</i> suite gives trumpets and horns long notes beneath the oboes and violins. A middle strain leaves the brass silent before the opening returns.',

  sections: [
    { t: 0, label: 'A · The slow dance', m: 'A', mNote: 'Oboes and violins over long brass notes' },
    { t: 34.3, label: 'A · The first strain again', m: 'A', mNote: 'The same nineteen bars, ending under a fermata' },
    { t: 68.1, label: 'B · A strain without brass', m: 'B', mNote: 'Oboes begin the new phrase; the strings join them' },
    { t: 98.6, label: 'A · The brass return', m: 'A', mNote: 'The first strain returns once, closing on its fermata' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Long notes under the tune', text: '<i>Lentement</i> means slowly. Oboes and violins carry a tune in three beats while trumpets and horns take turns holding long notes beneath it. The bass moves steadily, with figures telling the continuo player which chords to supply.', basis: 'score-proportion', precision: 'passage', evidence: 'Samuel Arnold’s full score, The Celebrated Water-musick (1788), pp. 47–48: Lentement, 3/4, tied brass notes and figured bass. https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(25_of_30).jpg' },
    { t: 68.1, kind: 'music', title: 'A phrase without brass', text: 'The second strain begins with oboes and bassoon; the strings join their phrase. Trumpets and horns have fifteen bars of rests. The familiar long brass notes disappear, leaving the woodwinds and strings to carry the dance.', basis: 'score-proportion', precision: 'passage', evidence: 'Arnold’s full score (1788), pp. 48–49; Lentement, bars 20–34 in the Hallische Händel-Ausgabe. The brass rest throughout the second strain. https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(26_of_30).jpg' },
    { t: 98.6, kind: 'form', title: 'The first strain comes home', text: '<i>Da capo</i> brings back the opening, with the brass and their long notes. The first strain plays once more. Its last D major chord bears a fermata, and the mark <i>Fine</i> makes this return the ending.', basis: 'score-proportion', precision: 'passage', evidence: 'Arnold’s full score (1788), pp. 48–49: opening strain’s fermata and second strain’s Da Capo; Hallische Händel-Ausgabe, bars 19 and 34, Fine and Da Capo.',
    },
  ],

  transitions: [
    {
      id: 'into-repeat',
      title: 'A fermata before the repeat',
      from: 'A · The slow dance',
      to: 'A · The first strain again',
      at: { t: 34 },
      span: [30, 39],
      how: '<p>The first strain ends on D major, with a fermata over every part. The repeat sign sends the players back to the upbeat. Oboes, strings and bass begin the same tune again, with the trumpets and horns retaining their long notes.</p>',
      devices: ['fermata', 'motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Arnold’s full score (1788), pp. 47–48; Lentement, bar 19 in the Hallische Händel-Ausgabe: D major fermata chord and repeat sign.',
    },
    {
      id: 'into-brassless-strain',
      title: 'The brass rest after D major',
      from: 'A · The first strain again',
      to: 'B · A strain without brass',
      at: { t: 67.6 },
      span: [62, 76],
      how: '<p>The repeated strain finishes on its D major fermata. Oboes and bassoon begin the next phrase while the strings wait, then join them. Trumpets and horns have no notes in this fifteen-bar strain; the woodwinds now carry the opening by themselves.</p>',
      devices: ['orchestration change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Arnold’s full score (1788), pp. 48–49; Lentement, bars 19–34 in the Hallische Händel-Ausgabe: fermata, woodwind opening and rests in both brass parts.',
    },
    {
      id: 'into-da-capo',
      title: 'Da capo restores the brass',
      from: 'B · A strain without brass',
      to: 'A · The brass return',
      at: { t: 98 },
      span: [92, 106],
      how: '<p>The second strain closes with the oboes, strings and bass together. <i>Da capo</i> sends the orchestra back to the first upbeat and the D major opening. Trumpets and horns return; the strain proceeds to its fermata chord, where <i>Fine</i> ends the dance.</p>',
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
      { t: 0, playing: everyone, lead: ['oboes', 'violins-1'], note: 'Oboes and violins carry the tune; trumpets and horns take turns holding long notes (bars 1–19).' },
      { t: 34.3, playing: everyone, lead: ['oboes', 'violins-1'], note: 'The first strain is repeated with the same scoring.' },
      { t: 68.1, playing: withoutBrass, lead: ['oboes', 'violins-1'], note: 'Oboes and bassoon begin the second strain; strings join them while the brass rest (bars 20–34).' },
      { t: 98.6, playing: everyone, lead: ['oboes', 'violins-1'], note: 'Da capo: the full scoring returns for the first strain, played once more.' },
      { t: 133.5, playing: [], lead: [], note: 'Silence after the final D major chord.' },
    ],
  },
};
