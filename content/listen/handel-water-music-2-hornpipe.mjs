// Score evidence: Arnold, The Celebrated Water-musick in score (London, 1788), pp. 39–44 (Commons, BnF scans, images 21–24 of 30): https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(21_of_30).jpg
// Bar numbers: Hallische Händel-Ausgabe IV/13 (Redlich, Bärenreiter, 1962), Suite II, printed pp. 44–49 (IMSLP #559922).
const strings = ['violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'harpsichord'];
const winds = ['oboes', 'bassoons', ...strings];
const everyone = ['trumpets', 'horns', ...winds];
const noHorns = ['trumpets', ...winds];

// One pass of the first section; o is the offset in seconds from the first pass, first the time of its opening entry.
const section = (o, first) => [
  { t: first, playing: winds, lead: ['oboes', 'violins-1'], note: 'The hornpipe tune for oboes and strings; trumpets and horns rest (bars 1–10).' },
  { t: +(o + 15.8).toFixed(1), playing: ['trumpets'], lead: ['trumpets'], note: 'Trumpets alone for four bars (bars 11–14).' },
  { t: +(o + 21.7).toFixed(1), playing: ['horns'], lead: ['horns'], note: 'The horns play alone; every other part rests (bars 15–17).' },
  { t: +(o + 26.5).toFixed(1), playing: noHorns, lead: ['trumpets', 'violins-1'], note: 'The tutti: trumpets, oboes, bassoon, strings and continuo together (bars 18–20).' },
  { t: +(o + 30.2).toFixed(1), playing: ['horns'], lead: ['horns'], note: 'Horns end the phrase (bars 21–22).' },
  { t: +(o + 32.7).toFixed(1), playing: winds, lead: ['oboes', 'violins-1'], note: 'Oboes and strings alone; the brass rest (bars 22–26).' },
  { t: +(o + 39.6).toFixed(1), playing: ['trumpets'], lead: ['trumpets'], note: 'Trumpets again, over one held note in the strings (bars 27–29).' },
  { t: +(o + 42.5).toFixed(1), playing: ['horns'], lead: ['horns'], note: 'Horns answer (bars 29–31).' },
  { t: +(o + 45.6).toFixed(1), playing: everyone, lead: ['trumpets', 'oboes', 'violins-1'], note: 'The whole orchestra plays to the end of the section, on a held chord at bar 39 (bars 31–39).' },
];

export default {
  id: 'handel-water-music-2-hornpipe',
  composer: 'handel',
  order: 3,
  work: 'Water Music, Suite No. 2 in D, HWV 349',
  movement: 'II. Alla hornpipe',
  set: { id: 'handel-water-music-2', title: 'Water Music · Suite No. 2', part: 2, of: 5 },
  year: '1717',
  key: 'D major',
  forces: 'Trumpets, horns, oboes, bassoon, strings and continuo',
  performers: 'Marine Chamber Orchestra of the United States Marine Band; Major Michelle Rakers, conductor',
  recorded: '29 January 2017',
  source: { file: "File:Handel's Water Music - 12. Alla hornpipe - Chamber Orchestra - United States Marine Band.opus" },
  intro: 'The Alla hornpipe is from Handel’s Water Music, Suite No. 2 in D, HWV 349. Oboes and strings play the hornpipe tune, and the trumpets and horns then take it up in turn; the brass rest through the middle section and return in D major.',

  sections: [
    { t: 0, label: 'A · Hornpipe theme: oboes, strings, then brass', m: 'A', mNote: 'The hornpipe tune passes from one group of instruments to another.' },
    { t: 58.7, label: 'A · Hornpipe theme repeated', m: 'A', mNote: 'The same tune returns, with the same turns for the brass.' },
    { t: 115.9, label: 'B · Middle section without brass', m: 'B', mNote: 'Oboes, bassoon and strings play the middle section.' },
    { t: 155.1, label: 'Link · Strings alone', m: 'Link', mNote: 'Eight bars for strings lead to the da capo.' },
    { t: 168.1, label: 'A · Hornpipe, opening section repeated', m: 'A', mNote: 'The opening section returns once and ends at the Fine.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Opening, oboes and strings', text: 'The hornpipe is in 3/2, with oboes and strings playing the tune. Trumpets and horns rest for ten bars. When they enter, each pair plays alone, the trumpets first and then the horns.', basis: 'score-proportion', precision: 'passage', evidence: 'Samuel Arnold’s full score, The Celebrated Water-musick (1788), pp. 39–40; Alla hornpipe, bars 1–17 in the Hallische Händel-Ausgabe. The metre is 3/2. https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(21_of_30).jpg' },
    { t: 58.7, kind: 'form', title: 'Repeat of the first section', text: 'The first section is repeated, from the oboe-and-string tune to the final D major chord. The brass again play their own separate passages.', basis: 'score-proportion', precision: 'passage', evidence: 'Arnold’s full score (1788), pp. 39–42: first section and its repeat sign. The existing section boundary marks the repeat.',
    },
    { t: 90, kind: 'world', title: 'Royal barge on the Thames, 1717', text: 'On 17 July 1717 about fifty musicians played beside George I’s barge on the Thames. The king liked Handel’s music so much that he asked for it to be played three times. Supper in Chelsea began at one in the morning.', basis: 'documented', precision: 'passage', evidence: 'Friedrich Bonet’s diary entry, quoted in Robert King’s note for Hyperion CDA66967, gives the musicians, three performances and the one o’clock supper. https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA66967' },
    { t: 115.9, kind: 'music', title: 'Middle section without brass', text: 'The middle section, bars 40–74, is scored for oboes, bassoon and strings. Trumpets and horns rest for all thirty-five bars. The violins play running figures beneath and around the wind tune.', basis: 'score-proportion', precision: 'passage', evidence: 'Arnold’s full score (1788), pp. 42–44; Alla hornpipe, bars 40–74 in the Hallische Händel-Ausgabe. Brass staves rest throughout the middle section. https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(24_of_30).jpg' },
    { t: 168.1, kind: 'form', title: 'Da capo return', text: 'At the <i>Da capo</i> the D major hornpipe returns from the beginning. The oboes and strings play first, and the two brass pairs follow in turn. The opening section is played once and stops at the mark <i>Fine</i>.', basis: 'score-proportion', precision: 'passage', evidence: 'Arnold’s full score (1788), p. 44, marks Da Capo; the Hallische Händel-Ausgabe places Fine at bar 39. The established section boundary marks the return.',
    },
  ],

  transitions: [
    {
      id: 'into-repeat',
      title: 'D major cadence and return to bar 1',
      from: 'A · Hornpipe theme: oboes, strings, then brass',
      to: 'A · Hornpipe theme repeated',
      at: { t: 58.6 },
      span: [53, 64],
      how: '<p>The full orchestra reaches a held D major chord, with D in the bass, and the repeat sign follows the cadence. The repeat returns to the opening tune for oboes and strings. Trumpets and horns rest again for ten bars, then make their separate entries in the same order as before.</p>',
      devices: ['perfect cadence', 'orchestration change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Arnold’s full score (1788), pp. 39–42; Alla hornpipe, bars 37–39 and return to bar 1. The repeat sign follows the D major cadence.',
    },
    {
      id: 'into-quiet-middle',
      title: 'Middle section without brass',
      from: 'A · Hornpipe theme repeated',
      to: 'B · Middle section without brass',
      at: { t: 115.9 },
      span: [110, 124],
      how: '<p>The repeated first section closes on D major. Trumpets and horns stop after the double bar, and oboes and strings play a new phrase above the bassoon and continuo. The first violins soon add running quavers. The brass staves stay empty through the whole middle section.</p>',
      devices: ['orchestration change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Arnold’s full score (1788), p. 42; Alla hornpipe, bars 39–46 in the Hallische Händel-Ausgabe. The brass staves are empty after the double bar.',
    },
    {
      id: 'into-strings-alone',
      title: 'Strings alone before the da capo',
      from: 'B · Middle section without brass',
      to: 'Link · Strings alone',
      at: { t: 155.1 },
      span: [150, 162],
      how: '<p>Oboes and bassoon stop. Violins continue the running figures above a sustained bass, with viola and second violin filling in the harmony. After these eight bars for strings and continuo comes the written <i>da capo</i>, and the orchestra returns to D major and the opening tune.</p>',
      devices: ['orchestration change', 'texture change', 'link passage'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Arnold’s full score (1788), p. 44; Alla hornpipe, bars 67–74 in the Hallische Händel-Ausgabe: wind rests, string writing and Da Capo.',
    },
    {
      id: 'into-da-capo',
      title: 'Da capo brings back D major',
      from: 'Link · Strings alone',
      to: 'A · Hornpipe, opening section repeated',
      at: { t: 168.1 },
      span: [162, 174],
      how: '<p>The strings finish the middle section and the <i>da capo</i> returns to the opening D major tune. Oboes and bassoon rejoin the strings, and the trumpets and horns follow later. The opening section is played again and stops at its D major cadence, where the score is marked <i>Fine</i>.</p>',
      devices: ['retransition', 'orchestration change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Arnold’s full score (1788), p. 44, Da Capo; Hallische Händel-Ausgabe, bars 74 and 39, Da Capo and Fine.',
    },
  ],

  orchestra: {
    ensemble: ['trumpets', 'horns', 'oboes', 'bassoons', 'harpsichord', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: {
      title: 'Handel, The Celebrated Water-musick in score (London: Samuel Arnold, 1788), pp. 39–44',
      url: 'https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(21_of_30).jpg',
      locator: 'Arnold’s full score, pp. 39–44, Commons images 21–24. Bar numbers follow the Hallische Händel-Ausgabe, IV/13 (1962), pp. 44–49: 39-bar opening section with repeat, 35-bar middle section, then da capo to Fine.',
    },
    timeline: [
      ...section(0, 0),
      ...section(57.5, 58.7),
      { t: 115.9, playing: winds, lead: ['oboes', 'violins-1'], note: 'In the middle section (bars 40–74) the brass rest for all thirty-five bars, and the oboes and strings carry the music.' },
      { t: 155.1, playing: strings, lead: ['violins-1'], note: 'Oboes and bassoon rest; the strings and continuo play alone (bars 67–74).' },
      { t: 168.1, playing: winds, lead: ['oboes', 'violins-1'], note: 'At the da capo the oboes and strings play the opening tune again (bars 1–10).' },
      { t: 182.5, playing: ['trumpets'], lead: ['trumpets'], note: 'Trumpets alone (bars 11–14).' },
      { t: 188.5, playing: ['horns'], lead: ['horns'], note: 'Horns answer alone, with every other part resting (bars 15–17).' },
      { t: 195.8, playing: noHorns, lead: ['trumpets', 'violins-1'], note: 'The tutti (bars 18–20).' },
      { t: 199.5, playing: ['horns'], lead: ['horns'], note: 'Horns round off the phrase (bars 21–22).' },
      { t: 201.5, playing: winds, lead: ['oboes', 'violins-1'], note: 'Oboes and strings alone; the brass rest (bars 22–26).' },
      { t: 206.5, playing: ['trumpets'], lead: ['trumpets'], note: 'Trumpets again (bars 27–29).' },
      { t: 209.5, playing: ['horns'], lead: ['horns'], note: 'Horns answer (bars 29–31).' },
      { t: 212, playing: everyone, lead: ['trumpets', 'oboes', 'violins-1'], note: 'The whole orchestra plays to the Fine, ending on a held chord at bar 39 (bars 31–39).' },
      { t: 225.5, playing: [], lead: [], note: 'The final chord is D major.' },
    ],
  },
};
