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
  intro: 'A slow movement in three beats for the full orchestra, with trumpets and horns holding long notes under the oboes and violins. The first strain is played twice, a second strain without brass follows, and the first strain returns to end the movement.',
  question: 'How does a slow dance change colour when the brass drop out?',

  sections: [
    { t: 0, label: 'First hearing of the first strain', m: 'A' },
    { t: 34.3, label: 'Repeat of the first strain', m: 'A' },
    { t: 68.1, label: 'Second strain · brass silent', m: 'B' },
    { t: 98.6, label: 'Da capo · first strain once more', m: 'A', mNote: 'first strain again, played once, ending on the fermata chord' },
  ],

  cues: [
    { t: 0, kind: 'form', title: 'Slowly, in three', text: 'Lentement is French for “slowly”. Here it is the title of a movement in 3/4 for the full orchestra: two trumpets, two horns, two oboes, bassoon, strings and continuo. It has two strains, and the first is played twice.', basis: 'documented', precision: 'passage', evidence: 'Arnold’s 1788 score, p. 47 (heading Lentement, time signature 3/4) and HHA pp. 51–52, which print the scoring (Tromba I, II; Corno I, II; Oboe I, II; Fagotto; Violino I, II; Viola; Bassi) and a repeat sign after bar 19.' },
    { t: 8, kind: 'listen', title: 'Long notes under the tune', text: 'Trumpets and horns often hold long notes while oboes and violins keep the tune moving. In the first bars the trumpets tie a minim across two bars, then rest while the horns hold theirs.', basis: 'score-proportion', precision: 'passage', evidence: 'HHA bars 3–6: tied minims in the trumpets in bars 3–4 and in the horns in bars 5–6 (Arnold’s 1788 score, p. 47). At about 1.7 s a bar, these bars fall between 4 and 11 s.' },
    { t: 17, kind: 'listen', title: 'The bass line carries numbers', text: 'Figures such as 6, 7 and 4–3 under the bass tell the harpsichordist which chords to fill in above the cellos, basses and bassoon. The score does not write that part out; the player realises it at the keyboard.', basis: 'documented', precision: 'passage', evidence: 'Figures are printed under the bass line in Arnold’s 1788 score (pp. 47–49) and in the HHA, whose lowest stave is headed Bassi (Violoncello, Violone, Cembalo). The Marine Band’s video of the Bourrée shows a harpsichord at stage left.' },
    { t: 27, kind: 'world', title: 'No autograph survives', text: 'No autograph score of the Water Music survives. John Walsh printed parts for about half of the movements in the 1730s, and Samuel Arnold published the first full score in 1788. The grouping into three suites appears to date from the 1950s.', basis: 'documented', precision: 'passage', evidence: 'Robert King’s note for Hyperion CDA66967 (no autograph; Walsh’s parts held only about half the movements; Arnold’s full score of 1788): https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA66967 . IMSLP credits Thurston Dart with the three-suite designation in the 1950s, first published by Eulenburg in 1959: https://imslp.org/wiki/Water_Music,_HWV_348-350_(Handel,_George_Frideric)' },
    { t: 33.5, kind: 'music', title: 'Fermata, then the strain again', text: 'The first strain ends on a chord held under a fermata. The sound falls to near silence for about 0.8 seconds, then the strain begins again from its upbeat, as the repeat sign directs.', basis: 'audio-feature', precision: 'moment', evidence: 'The relative level falls to −37.7 dB between 33.53 and 34.34 s. HHA bar 19 carries the fermata and a repeat sign.' },
    { t: 46, kind: 'listen', title: 'A plain repeat', text: 'The second hearing of the first strain lasts about 32.8 seconds, against about 32.5 for the first. The tempo is steady between the two, so the repeat is a plain repeat. Listen for the brass’s long held notes, which recur in the same places.', basis: 'audio-feature', precision: 'passage', evidence: 'Silences at 33.5–34.3 s and 67.1–68.1 s bracket the repeat: the first hearing runs from about 0.9 to 33.5 s and the second from 34.3 to 67.1 s. The pitch-class content of the two stretches follows each other closely.' },
    { t: 68.1, kind: 'music', title: 'The brass fall silent', text: 'For the second strain trumpets and horns rest for all fifteen bars, and oboes, bassoon and strings carry the music alone. The average level falls from about −7 dB to about −12 dB.', basis: 'score-proportion', precision: 'moment', evidence: 'HHA bars 20–34: the trumpet and horn staves are empty. The level falls to −41.4 dB at 67.13–68.10 s; its mean is −6.6 dB for 39–66 s and −11.6 dB for 69–97 s.' },
    { t: 78, kind: 'listen', title: 'Through minor keys to the dominant', text: 'Through the middle of the strain the audio estimates read B minor at 1:10, E minor at 1:25–1:30 and A major at 1:35: a route from D through its relative minor towards the dominant, which prepares the return to D.', basis: 'audio-feature', precision: 'passage', evidence: 'Local-key estimates in the audio report: B minor (r 0.89) at 1:10; B major (0.75, 0.77) at 1:15–1:20; E minor (0.78, 0.87) at 1:25–1:30; A major (0.79) at 1:35. These are estimates, not chord identifications.' },
    { t: 98.6, kind: 'form', title: 'Da capo', text: 'After a brief silence the da capo sends the players back to the beginning. Trumpets and horns return, and the first strain is played once more without its repeat.', basis: 'audio-feature', precision: 'moment', evidence: 'The relative level falls to −45.1 dB between 97.36 and 98.59 s and is −3.1 dB at 99.0 s. HHA bar 34 is marked da capo.' },
    { t: 118, kind: 'listen', title: 'Where the movement stops', text: 'The movement ends on the fermata chord of the first strain, marked Fine, not at the end of the second strain. The chord is held until about 2:13, and the room has gone quiet by 2:15.', basis: 'audio-feature', precision: 'passage', evidence: 'HHA bar 19 carries the fermata and the mark Fine. The relative level falls below −22 dB at 133.5 s, and the file ends at 135.6 s.' },
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
