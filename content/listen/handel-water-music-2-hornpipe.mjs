// Score evidence: Arnold, The Celebrated Water-musick in score (London, 1788), pp. 39–44 (Commons, BnF scans, images 21–24 of 30): https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(21_of_30).jpg
// Bar numbers: Hallische Händel-Ausgabe IV/13 (Redlich, Bärenreiter, 1962), Suite II, printed pp. 44–49 (IMSLP #559922).
// Bar grid: 39 bars of the first section last about 57.4 s (1.47 s a bar), so each pass of it matches the measured loud and quiet stretches.
// Fine-grained measurements (pauses, level samples, curve correlations, method): cache/analysis/handel-water-music-2-hornpipe.txt, section “Supplementary measurements”.
const strings = ['violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'harpsichord'];
const winds = ['oboes', 'bassoons', ...strings];
const everyone = ['trumpets', 'horns', ...winds];
const noHorns = ['trumpets', ...winds];

// One pass of the first section; o is the offset in seconds from the first pass, first the time of its opening entry.
const section = (o, first) => [
  { t: first, playing: winds, lead: ['oboes', 'violins-1'], note: 'The hornpipe tune for oboes and strings; trumpets and horns rest (bars 1–10).' },
  { t: +(o + 15.8).toFixed(1), playing: ['trumpets'], lead: ['trumpets'], note: 'Trumpets alone for four bars (bars 11–14).' },
  { t: +(o + 21.7).toFixed(1), playing: ['horns'], lead: ['horns'], note: 'Horns alone (bars 15–17); the level falls about ten decibels.' },
  { t: +(o + 26.5).toFixed(1), playing: noHorns, lead: ['trumpets', 'violins-1'], note: 'The tutti: trumpets, oboes, bassoon, strings and continuo together (bars 18–20).' },
  { t: +(o + 30.2).toFixed(1), playing: ['horns'], lead: ['horns'], note: 'Horns round off the phrase (bars 21–22).' },
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
  intro: 'A hornpipe in bars of three minims gives its tune to oboes and strings, then lets trumpets and horns answer in turn. The tune is heard three times, with a quiet middle section between the second hearing and the third.',
  question: 'How does Handel keep a short tune fresh across three hearings?',

  sections: [
    { t: 0, label: 'Hornpipe tune, strings then brass', m: 'A' },
    { t: 58.7, label: 'Tune repeated', m: 'A' },
    { t: 115.9, label: 'Middle section · brass silent', m: 'B' },
    { t: 155.1, label: 'Strings alone', m: 'Link' },
    { t: 168.1, label: 'Da capo · the tune once more', m: 'A', mNote: 'first section again, played once, ending at the Fine' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Strings first, then brass in turn', text: 'The tune belongs to oboes, bassoon and strings alone, in bars of three minims, with trumpets and horns resting for ten bars. At about 0:16 two trumpets take it by themselves for four bars, and from about 0:22 the horns answer alone, some ten decibels lower.', basis: 'score-proportion', precision: 'passage', evidence: 'HHA bars 1–17 and Arnold’s 1788 score, pp. 39–40 (time signature 3/2; the trumpet and horn staves rest in bars 1–10): trumpets alone in bars 11–14 and horns alone in bars 15–17, every other part resting. The relative level stays between −12.4 and −21.8 dB from 1.0 to 15.5 s, rises from −12.6 dB at 15.5 s to −7.6 dB at 16.0 s, stays between −5 and −9 dB to 21.0 s, then falls to between −15.8 and −18.6 dB from 22.0 to 24.5 s.' },
    { t: 28, kind: 'music', title: 'Tutti, then the brass step back', text: 'About 0:27 the tutti arrives for three bars and the level returns to about −6 dB. Horns round off the phrase, oboes and strings carry on with the brass silent, and from about 0:40 trumpets and then horns return before the whole orchestra closes the section on a held chord near 0:58.', basis: 'score-proportion', precision: 'passage', evidence: 'HHA bars 18–39: the tutti, horns excepted, in bars 18–20; horns alone in bars 21–22; oboes and strings with the brass resting to bar 26; trumpets in bars 27–29, horns in bars 29–31, then the tutti to the Fine mark at bar 39. The level is −10.8 dB at 26.5 s, −5.9 dB at 27.0 s, between −5.8 and −7.5 dB to 29.5 s, between −11 and −17 dB from 30.0 to 39.5 s, between −5.6 and −9.8 dB from 40.0 to 43.0 s, −13 to −16.4 dB to 45.5 s, then between −5.2 and −8.9 dB from 46.0 to 57.5 s, and −15.8 dB at 58.0 s.' },
    { t: 58.6, kind: 'form', title: 'The section repeats', text: 'A brief silence, then the tune starts again from its first note. The second hearing follows the first closely: trumpets return at about 1:13, horns at 1:19 and the full orchestra at 1:24, each 57.5 seconds after its first appearance. Whatever differs comes from the players.', basis: 'audio-feature', precision: 'moment', evidence: 'The relative level falls to −28.1 dB at 58.54–58.68 s. The level curve for 1–56 s matches the next pass at an offset of 57.5 s (correlation 0.94): loud 73.5–79.0 s, quiet to 84.5 s, loud 84.5–87.0 s, quiet 87.5–97.0 s, loud 97.5–100.5 s, quiet 101–103 s, loud from 103.5 s to 115 s. HHA bar 39 ends with a repeat sign.' },
    { t: 90, kind: 'world', title: 'Purcellian hornpipe, Hanoverian king', text: 'The Marine programme calls this movement the “Purcellian hornpipe”: Handel’s English dance among the French ones. He came to England in 1710 on leave from the Elector of Hanover, who became George I in 1714; the programme says the tale of Water Music winning back the king’s favour has little evidence.', basis: 'documented', precision: 'passage', evidence: 'Programme note for the Marine Chamber Orchestra concert of 29 January 2017 (the Purcellian hornpipe, Handel’s leave from Hanover in 1710, the Elector becoming George I in 1714, and the doubtful story): https://web.archive.org/web/20251101025231id_/https://www.marineband.marines.mil/Portals/175/Docs/Programs/170129.pdf?ver=2017-01-24-094649-630' },
    { t: 115.9, kind: 'music', title: 'The brass fall silent', text: 'After a brief gap the middle section begins with trumpets and horns silent for all thirty-five bars. Oboes, bassoon and strings carry it alone, between about −12 and −22 dB, and the harmony turns to minor keys: the audio estimates read B minor around 1:55 and F♯ minor near 2:20.', basis: 'score-proportion', precision: 'passage', evidence: 'HHA bars 40–74: the trumpet and horn staves rest throughout. The level dips to −29.4 dB at 115.59–115.87 s, then stays between −11.6 and −21.7 dB from 116 to 155 s. Local-key estimates in the audio report: B minor (r 0.83 and 0.82) at 1:55 and 2:00 and F♯ minor (r 0.72 and 0.68) at 2:20 and 2:25; these are estimates, used only to confirm a turn to the minor side.' },
    { t: 155.1, kind: 'form', title: 'Strings alone, then da capo', text: 'At about 2:35 oboes and bassoon drop out and the strings play on alone for eight bars, with short rests between the phrases. At 2:48 a near-silence marks the da capo: the opening tune begins again, to be played without its repeat and stopped at the Fine.', basis: 'score-proportion', precision: 'passage', evidence: 'HHA bars 67–74: oboes and fagotto rest; strings and bassi play; bar 74 is marked da capo and bar 39 Fine. A run of brief dips to between −25 and −30 dB occurs from 155.1 to 160.0 s, and the level falls to −38.6 dB at 167.65–168.07 s. The first 56 s of the movement match the music from 167 s at an offset of 166.5 s (correlation 0.88).' },
    { t: 183, kind: 'listen', title: 'The horns’ turn lasts longer', text: 'Third hearing: trumpets from about 3:02, then horns from about 3:08. This time the quiet horn passage lasts about seven seconds, against about five the first time, before the full orchestra enters near 3:16.', basis: 'audio-feature', precision: 'passage', evidence: 'Loud from 182.5 to 188.0 s, quiet from 188.5 to about 195.5 s, loud from 196.0 s. In the first pass the corresponding quiet stretch runs from 22.0 to 26.5 s. The score is identical, so the difference lies in the playing.' },
    { t: 210, kind: 'music', title: 'The last tutti, and the Fine', text: 'From about 3:32 everyone plays to the end of the section. The movement stops here, at the marked Fine, not at the end of the middle section, and the sound has gone by 3:46.', basis: 'score-proportion', precision: 'passage', evidence: 'HHA bar 39 is marked Fine. The level is −8.3 dB at 212.0 s, between −2.1 and −8 dB until 223.5 s, −15.8 dB at 225.0 s and −29.9 dB at 225.5 s.' },
  ],

  transitions: [
    {
      id: 'into-repeat',
      title: 'A held chord, then the tune again',
      from: 'Hornpipe tune',
      to: 'Tune repeated',
      at: { t: 58.6 },
      span: [53, 64],
      how: '<p>The first section closes at bar 39 with every part holding a long D major chord; the figures under the bass include a 4–3 suspension just before it, and a repeat sign sends the players back to bar 1. The recording drops to about −28 dB for a fraction of a second, then restarts the quiet oboe-and-string tune. The repeat keeps the first pass’s order of entries: trumpets, then horns, then the full orchestra.</p>',
      devices: ['perfect cadence'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'The relative level falls to −28.1 dB at 58.54–58.68 s. HHA bars 37–39 and Arnold’s 1788 score, p. 42, where the repeat sign closes the section.',
    },
    {
      id: 'into-quiet-middle',
      title: 'Brass drop out for the middle section',
      from: 'Tune repeated',
      to: 'Middle section',
      at: { t: 115.9 },
      span: [110, 124],
      how: '<p>After the repeated section ends on its held chord (the level dips to about −29 dB at 115.6–115.9 s), the middle section begins at bar 40 with trumpets and horns resting for all thirty-five bars. Oboes, bassoon and strings alone carry it, so the level falls from the tutti’s −5 dB to about −17 dB. The harmony turns towards minor keys, B minor first according to the audio estimates, before the strings prepare the return to D.</p>',
      devices: ['orchestration change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'The relative level dips to −29.4 dB at 115.59–115.87 s. HHA bars 39–46 and Arnold’s 1788 score, p. 42, where the trumpet and horn staves are empty after the double bar. The key reading is an audio estimate (B minor, r 0.83, at 1:55).',
    },
    {
      id: 'into-strings-alone',
      title: 'Oboes and bassoon rest; strings continue',
      from: 'Middle section',
      to: 'Strings alone',
      at: { t: 155.1 },
      span: [150, 162],
      how: '<p>In bars 67–74 the oboes and fagotto rest and the strings play on by themselves with the continuo. Short rests separate the phrases, and the recording shows a run of brief dips to between −25 and −30 dB from about 155 to 160 seconds. The eight bars work as a link: they lead out of the middle section to the da capo, which returns to bar 1.</p>',
      devices: ['orchestration change', 'texture change', 'link passage'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'HHA bars 67–74. Short dips to −25.2, −30.4, −24.2, −26.9, −27.4 and −24.4 dB between 155.09 and 160.03 s.',
    },
    {
      id: 'into-da-capo',
      title: 'Da capo: back to the first bar',
      from: 'Strings alone',
      to: 'Da capo',
      at: { t: 168.1 },
      span: [162, 174],
      how: '<p>The strings end on a long note and da capo tells the players to return to the top and play to the Fine at bar 39. The sound falls to about −39 dB for under half a second, then the quiet oboe-and-string tune begins again with the brass resting for ten bars. The repeat sign is not taken this time, so the tune is heard once in this pass and the movement stops at the Fine.</p>',
      devices: ['retransition', 'general pause'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'The relative level falls to −38.6 dB at 167.65–168.07 s. HHA bar 74 (da capo) and bar 39 (Fine); Arnold’s 1788 score, p. 44. The return matches the opening at an offset of about 166.5 s.',
    },
  ],

  orchestra: {
    ensemble: ['trumpets', 'horns', 'oboes', 'bassoons', 'harpsichord', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: {
      title: 'Handel, The Celebrated Water-musick in score (London: Samuel Arnold, 1788), pp. 39–44',
      url: 'https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(21_of_30).jpg',
      locator: 'Commons images 21–24 of 30 (BnF). Parts, repeat signs and da capo checked there; bar numbers follow the Hallische Händel-Ausgabe (Bärenreiter, 1962; IMSLP #559922, printed pp. 44–49), whose structure the recording matches (first section 39 bars, repeated; middle section 35 bars; da capo to the Fine at bar 39). The performing edition is not identified and the programme lists no players, so entries show the parts printed in the score. The recording confirms trumpets and horns by sounding at the bars where the score gives them alone; oboes and bassoon are taken from the score. Times follow the measured loud and quiet stretches and are approximate, the da capo to within about three seconds.',
    },
    timeline: [
      ...section(0, 0),
      ...section(57.5, 58.7),
      { t: 115.9, playing: winds, lead: ['oboes', 'violins-1'], note: 'Middle section: the brass rest for all thirty-five bars (bars 40–74); oboes and strings carry it.' },
      { t: 155.1, playing: strings, lead: ['violins-1'], note: 'Oboes and bassoon rest; the strings and continuo play alone (bars 67–74).' },
      { t: 168.1, playing: winds, lead: ['oboes', 'violins-1'], note: 'Da capo: the tune again for oboes and strings. The pass is tracked against measured loud and quiet stretches, and its pacing differs from the first pass by up to about three seconds (bars 1–10).' },
      { t: 182.5, playing: ['trumpets'], lead: ['trumpets'], note: 'Trumpets alone (bars 11–14).' },
      { t: 188.5, playing: ['horns'], lead: ['horns'], note: 'Horns alone (bars 15–17), for longer than in the first pass.' },
      { t: 195.8, playing: noHorns, lead: ['trumpets', 'violins-1'], note: 'The tutti (bars 18–20).' },
      { t: 199.5, playing: ['horns'], lead: ['horns'], note: 'Horns round off the phrase (bars 21–22).' },
      { t: 201.5, playing: winds, lead: ['oboes', 'violins-1'], note: 'Oboes and strings alone; the brass rest (bars 22–26).' },
      { t: 206.5, playing: ['trumpets'], lead: ['trumpets'], note: 'Trumpets again (bars 27–29).' },
      { t: 209.5, playing: ['horns'], lead: ['horns'], note: 'Horns answer (bars 29–31).' },
      { t: 212, playing: everyone, lead: ['trumpets', 'oboes', 'violins-1'], note: 'The whole orchestra to the Fine, on a held chord at bar 39 (bars 31–39).' },
      { t: 225.5, playing: [], lead: [], note: 'The last chord has died away.' },
    ],
  },
};
