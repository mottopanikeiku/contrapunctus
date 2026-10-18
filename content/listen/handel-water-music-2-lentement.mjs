// Score evidence: Arnold, The Celebrated Water-musick in score (London, 1788), pp. 47–49 (Commons, BnF scans, images 25–26 of 30): https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(25_of_30).jpg
// Bar numbers: Hallische Händel-Ausgabe IV/13 (Redlich, Bärenreiter, 1962), Suite II, printed pp. 51–52 (IMSLP #559922): first strain bars 1–19 (fermata, Fine and repeat sign at bar 19), second strain bars 20–34, da capo at bar 34.
// Fine-grained measurements (pauses, level samples, curve correlations, method): cache/analysis/handel-water-music-2-lentement.txt, section “Supplementary measurements”.
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
  intro: 'A slow movement in three beats for the full orchestra, with trumpets and horns holding long notes under the oboes and violins. The first strain is played twice, a second strain without brass follows, and the first strain returns to end the movement.',
  question: 'How does a slow dance change colour when the brass drop out?',

  sections: [
    { t: 0, label: 'First hearing of the first strain', m: 'A' },
    { t: 34.3, label: 'Repeat of the first strain', m: 'A' },
    { t: 68.1, label: 'Second strain · brass silent', m: 'B' },
    { t: 98.6, label: 'Da capo · first strain once more', m: 'A', mNote: 'first strain again, played once, ending on the fermata chord' },
  ],

  cues: [
    { t: 0, kind: 'form', title: 'Slowly, in three', text: 'Lentement is French for “slowly”: a movement in 3/4 for the full orchestra. Trumpets and horns trade long held notes while oboes and violins carry the tune, and figures under the bass line tell the harpsichord which chords to fill in. The first strain is played twice.', basis: 'documented', precision: 'passage', evidence: 'Arnold’s 1788 score, pp. 47–49 (heading Lentement, time signature 3/4, figures under the bass) and HHA pp. 51–52: tied minims in the trumpets in bars 3–4 and in the horns in bars 5–6, a repeat sign after bar 19, and a lowest stave headed Bassi (Violoncello, Violone, Cembalo). The Marine Band’s video of the Bourrée shows a harpsichord at stage left.' },
    { t: 34, kind: 'music', title: 'Fermata, then the strain again', text: 'The first strain ends on a chord held under a fermata. The sound falls to near silence for about 0.8 seconds, then the strain begins again from its upbeat. The repeat takes 32.8 seconds against 32.5 for the first hearing, so it is a plain repeat at the same pace.', basis: 'audio-feature', precision: 'moment', evidence: 'The relative level falls to −37.7 dB between 33.53 and 34.34 s and to −41.4 dB between 67.13 and 68.10 s. The first hearing runs from about 0.9 to 33.5 s and the repeat from 34.3 to 67.1 s, and their pitch-class content follows each other closely. HHA bar 19 carries the fermata and a repeat sign.' },
    { t: 68.1, kind: 'music', title: 'The brass fall silent', text: 'For the second strain trumpets and horns rest for all fifteen bars; oboes, bassoon and strings carry it alone, and the average level falls from about −7 to −12 dB. The audio estimates read B minor at 1:10, E minor near 1:25 and A major at 1:35.', basis: 'score-proportion', precision: 'passage', evidence: 'HHA bars 20–34: the trumpet and horn staves are empty. The mean relative level is −6.6 dB for 39–66 s and −11.6 dB for 69–97 s. Local-key estimates in the audio report: B minor (r 0.89) at 1:10; B major (0.75, 0.77) at 1:15–1:20; E minor (0.78, 0.87) at 1:25–1:30; A major (0.79) at 1:35. These are estimates, not chord identifications.' },
    { t: 98.6, kind: 'form', title: 'Da capo, and where it stops', text: 'After a brief silence the da capo sends the players back to the beginning. The brass return and the first strain is played once more, without its repeat, stopping on the fermata chord marked Fine; the chord is held until about 2:13.', basis: 'audio-feature', precision: 'moment', evidence: 'The relative level falls to −45.1 dB between 97.36 and 98.59 s and is −3.1 dB at 99.0 s; it falls below −22 dB at 133.5 s. HHA bar 34 is marked da capo and bar 19 Fine.' },
  ],

  transitions: [
    {
      id: 'into-repeat',
      title: 'Fermata chord, then the strain again',
      from: 'First hearing',
      to: 'Repeat of the first strain',
      at: { t: 34 },
      span: [30, 39],
      how: '<p>The first strain ends at bar 19 on a chord held under a fermata in every part, followed by a repeat sign. In the recording the sound falls to about −38 dB for 0.8 seconds, long enough for a breath, before the upbeat of bar 1 starts again. The repeat keeps the full scoring, trumpets and horns included, and the same pace.</p>',
      devices: ['fermata', 'general pause'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'The relative level falls to −37.7 dB between 33.53 and 34.34 s. HHA bar 19 (fermata and repeat sign); Arnold’s 1788 score, p. 48, where the first strain ends on a fermata chord.',
    },
    {
      id: 'into-brassless-strain',
      title: 'The brass drop out of the second strain',
      from: 'Repeat of the first strain',
      to: 'Second strain',
      at: { t: 67.6 },
      span: [62, 76],
      how: '<p>The second hearing of the first strain ends on the same fermata chord (the level is −41 dB at 67.1–68.1 s). The second strain, bars 20–34, starts with trumpets and horns silent and keeps them silent to the end, so oboes, bassoon and strings carry it alone. The audio estimates read B minor at 1:10, E minor around 1:25–1:30 and A major at 1:35: a route from D through the relative minor towards the dominant.</p>',
      devices: ['orchestration change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'HHA bars 19–34 and Arnold’s 1788 score, pp. 48–49, where the trumpet and horn staves are empty in the second strain. The level falls to −41.4 dB at 67.13–68.10 s. The key readings are audio estimates, used as confirmation only.',
    },
    {
      id: 'into-da-capo',
      title: 'Da capo returns the opening strain',
      from: 'Second strain',
      to: 'Da capo',
      at: { t: 98 },
      span: [92, 106],
      how: '<p>The second strain ends in silence (about −45 dB at 97.4–98.6 s). Da capo sends the players back to bar 1; the brass return and the level climbs again to the opening’s −3 to −6 dB. The strain is played once, without its repeat, and stops on the D major fermata chord that ended it the first time, marked Fine.</p>',
      devices: ['retransition', 'fermata', 'general pause'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'The relative level falls to −45.1 dB between 97.36 and 98.59 s. HHA bar 34 (da capo) and bar 19 (Fine); Arnold’s 1788 score, p. 49 (Da Capo).',
    },
  ],

  orchestra: {
    ensemble: ['trumpets', 'horns', 'oboes', 'bassoons', 'harpsichord', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: {
      title: 'Handel, The Celebrated Water-musick in score (London: Samuel Arnold, 1788), pp. 47–49',
      url: 'https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(25_of_30).jpg',
      locator: 'Commons images 25–26 of 30 (BnF). Parts, fermata, repeat sign and da capo checked there; bar numbers follow the Hallische Händel-Ausgabe (Bärenreiter, 1962; IMSLP #559922, printed pp. 51–52), whose structure the recording matches (first strain bars 1–19, repeated; second strain bars 20–34 without brass; da capo to the Fine at bar 19). The performing edition is not identified and the programme lists no players, so entries show the parts printed in the score. The recording is about five decibels louder in the strains that include the brass than in the second strain, which fits their presence; oboes and bassoon are taken from the score.',
    },
    timeline: [
      { t: 0, playing: everyone, lead: ['oboes', 'violins-1'], note: 'Full scoring from the first bar: trumpets and horns trade long held notes under the oboes and violins (bars 1–19).' },
      { t: 34.3, playing: everyone, lead: ['oboes', 'violins-1'], note: 'The first strain is repeated with the same scoring.' },
      { t: 68.1, playing: withoutBrass, lead: ['oboes', 'violins-1'], note: 'Trumpets and horns rest for the whole second strain (bars 20–34).' },
      { t: 98.6, playing: everyone, lead: ['oboes', 'violins-1'], note: 'Da capo: the full scoring returns for the first strain, played once more.' },
      { t: 133.5, playing: [], lead: [], note: 'The final chord has died away.' },
    ],
  },
};
