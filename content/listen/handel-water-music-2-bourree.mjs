// Score evidence: Arnold, The Celebrated Water-musick in score (London, 1788), pp. 49–50 (Commons, BnF scans, images 26–27 of 30): https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(26_of_30).jpg
// Bar numbers and the instruction “This Air to be played 3 times over”: Hallische Händel-Ausgabe IV/13 (Redlich, Bärenreiter, 1962), Suite II, printed p. 53 (IMSLP #559922).
// Pass boundaries: dips in the recording at 24.6 s and 48.0 s; each pass is four bars, repeated, then eight bars, repeated (24 bars in about 23.5 s, 0.98 s a bar).
const strings = ['violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'harpsichord'];
const withoutBrass = ['oboes', 'bassoons', ...strings];
const everyone = ['trumpets', 'horns', ...withoutBrass];

export default {
  id: 'handel-water-music-2-bourree',
  composer: 'handel',
  order: 5,
  work: 'Water Music, Suite No. 2 in D, HWV 349',
  movement: 'IV. Bourrée',
  set: { id: 'handel-water-music-2', title: 'Water Music · Suite No. 2', part: 4, of: 5 },
  year: '1717',
  key: 'D major',
  forces: 'Trumpets, horns, oboes, bassoon, strings and continuo',
  performers: 'Marine Chamber Orchestra of the United States Marine Band; Major Michelle Rakers, conductor',
  recorded: '29 January 2017',
  source: { file: "File:Handel's Water Music - 15. Bourree - Chamber Orchestra - United States Marine Band.opus" },
  intro: 'The shortest dance of the suite has twelve bars: a four-bar strain and an eight-bar strain, each repeated. The edition tells the players to repeat the whole air three times over, and in this recording the third pass is noticeably louder.',
  question: 'What can change when twelve bars are played three times?',

  sections: [
    { t: 0, label: 'First pass', m: 'A' },
    { t: 24.6, label: 'Second pass', m: 'A' },
    { t: 48.1, label: 'Third pass · louder', m: 'A′', mNote: 'same strains, about six decibels louder than before' },
  ],

  cues: [
    { t: 0, kind: 'form', title: 'Twelve bars, three times', text: 'The Bourrée has twelve bars: a four-bar strain and an eight-bar strain, each repeated. The edition prints “This Air to be played 3 times over”, and the recording plays the whole dance three times, about twenty-four seconds each.', basis: 'documented', precision: 'passage', evidence: 'HHA p. 53 prints the twelve bars, the repeat signs and the instruction; IMSLP lists the movement as 12 bars (36 played three times). Dips in the recording at 24.6 s and 48.0 s divide it into three passes of 23.5, 23.4 and 24.8 s.' },
    { t: 5, kind: 'music', title: 'The short strain, twice', text: 'The four-bar strain ends at about 0:05 and is repeated, ending again near 0:09. Each bar lasts almost exactly one second, so the dance moves at about 120 minims a minute.', basis: 'audio-feature', precision: 'passage', evidence: 'Brief dips to −22.6 dB at 4.78 s and −23.8 dB at 8.68–8.78 s mark the ends of the strain and of its repeat. The report’s onset-tempo estimate is 123 beats a minute, and 24 bars occupy about 23.5 s.' },
    { t: 9, kind: 'music', title: 'The long strain, twice', text: 'The eight-bar strain follows and is also repeated: it ends near 0:16 and again near 0:25. Trumpets, horns, oboes and strings of the score play in every bar, in the same rhythm, with the bass line moving in steps beneath.', basis: 'score-proportion', precision: 'passage', evidence: 'Dips to −24.5 dB at 16.53–16.65 s and −23.1 dB at 24.61–24.68 s mark the ends of the strain and of its repeat. HHA p. 53 and Arnold’s 1788 score, p. 49, give every section notes in every bar.' },
    { t: 20, kind: 'world', title: 'A French dance among English ones', text: 'The Marine programme says Handel took the English style in a “Purcellian hornpipe” and the French style in several French dances. The Bourrée is one of the French dances, written in cut time with a one-note upbeat.', basis: 'documented', precision: 'passage', evidence: 'Programme note for the Marine Chamber Orchestra concert of 29 January 2017: https://web.archive.org/web/20251101025231id_/https://www.marineband.marines.mil/Portals/175/Docs/Programs/170129.pdf?ver=2017-01-24-094649-630 . The cut-time signature and the one-note upbeat are on HHA p. 53.' },
    { t: 25, kind: 'form', title: 'The second pass', text: 'The second pass starts at about 0:25. The printed score marks no change from one pass to the next, so what differs comes from the players; this pass sits at almost the same level as the first.', basis: 'audio-feature', precision: 'passage', evidence: 'The relative level averages −14.5 dB for 2–24.5 s and −15.5 dB for 25–48 s. The level curves of the two passes match at an offset of 23.5 s (correlation 0.44).' },
    { t: 40, kind: 'listen', title: 'Listen for the step up', text: 'At about 0:48 the third pass begins and the sound grows louder. The notes do not change; listen for how much more weight the same twelve bars carry.', basis: 'audio-feature', precision: 'passage', evidence: 'A dip to −26.8 dB at 40.12–40.43 s closes the second pass’s eight-bar strain; the third pass begins after the dip to −24.1 dB at 48.04–48.16 s, followed by a rise to −10.1 dB at 48.5 s.' },
    { t: 48.1, kind: 'music', title: 'The third pass is louder', text: 'At 0:48 the level steps up by about eight decibels and stays there, about six decibels above the first two passes on average. The printed notes are the same, and the recording does not show how the extra weight is made.', basis: 'audio-feature', precision: 'moment', evidence: 'The relative level is −18.1 dB at 48.0 s, −10.1 dB at 48.5 s and −7.3 dB at 49.5 s. Its mean is −15.1 dB for 2–48 s and −9.4 dB for 49–70 s.' },
    { t: 64.5, kind: 'listen', title: 'The last eight bars', text: 'The repeated eight-bar strain begins at about 1:04 and ends at about 1:12. A 4–3 suspension in the figured bass leads to the closing chord, a held dotted minim, and the sound has gone by 1:13.', basis: 'score-proportion', precision: 'passage', evidence: 'HHA bars 11–12: the bass figures 4–3, then a final dotted minim. The relative level falls below −22 dB at 72.98 s. The third pass runs from about 48.2 to 72.5 s, so its repeated eight-bar strain starts near 64.4 s.' },
  ],

  transitions: [
    {
      id: 'into-second-pass',
      title: 'Closing cadence, then the dance restarts',
      from: 'First pass',
      to: 'Second pass',
      at: { t: 24.6 },
      span: [20, 30],
      how: '<p>The eight-bar strain ends its repeat on a held D with a 4–3 suspension in the figured bass before it (bars 11–12), and the dance starts again from the upbeat with no link. The recording dips only briefly, to about −23 dB for under 0.1 seconds, so the three passes run on almost without a break. The instruction “This Air to be played 3 times over” makes the restart part of the written music.</p>',
      devices: ['perfect cadence'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'The relative level dips to −23.1 dB at 24.61–24.68 s. HHA p. 53 (bars 11–12, figures 4–3, final dotted minim) and Arnold’s 1788 score, p. 50, where the strain ends.',
    },
    {
      id: 'into-third-pass',
      title: 'The same cadence, a louder restart',
      from: 'Second pass',
      to: 'Third pass',
      at: { t: 48.1 },
      span: [43, 54],
      how: '<p>The second pass ends as the first did, with a dip to −24 dB at 48.0–48.2 seconds. The third pass then starts about eight decibels louder than the end of the second and stays about six decibels above the first two passes. The printed notes are identical; the recording does not show whether more instruments join or all of them play louder.</p>',
      devices: ['perfect cadence'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'The relative level is −18.1 dB at 48.0 s, −10.1 dB at 48.5 s and −7.3 dB at 49.5 s; mean −15.1 dB for 2–48 s and −9.4 dB for 49–70 s. HHA p. 53 prints one statement of the twelve bars for all three passes.',
    },
  ],

  orchestra: {
    ensemble: ['trumpets', 'horns', 'oboes', 'bassoons', 'harpsichord', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: {
      title: 'Handel, The Celebrated Water-musick in score (London: Samuel Arnold, 1788), pp. 49–50',
      url: 'https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(26_of_30).jpg',
      locator: 'Commons images 26–27 of 30 (BnF). Parts checked there; the bar numbers, repeat signs and the instruction to play the air three times follow the Hallische Händel-Ausgabe (Bärenreiter, 1962; IMSLP #559922, printed p. 53), whose structure the recording matches. In the score every section plays in every bar, so the printed parts cannot say which instruments sound in each pass. The quieter first and second passes are shown without trumpets and horns and the louder third pass with them; this follows the level of the recording (about six decibels higher in the third pass) and is not documented. Whether the oboes sound is likewise unconfirmed.',
    },
    timeline: [
      { t: 0, playing: withoutBrass, lead: ['violins-1', 'oboes'], note: 'First and second passes: the score gives every section notes in every bar; the lower level fits oboes, bassoon, strings and continuo without the brass, which is not confirmed.' },
      { t: 48.1, playing: everyone, lead: ['trumpets', 'violins-1'], note: 'Third pass, about six decibels louder: shown with trumpets and horns because the score has them in every bar; the added forces are not documented.' },
      { t: 72.98, playing: [], lead: [], note: 'The last chord has ended.' },
    ],
  },
};
