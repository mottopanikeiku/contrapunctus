// Score evidence: Arnold, The Celebrated Water-musick in score (London, 1788), pp. 49–50 (Commons, BnF scans, images 26–27 of 30): https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(26_of_30).jpg
// Bar numbers and the instruction “This Air to be played 3 times over”: Hallische Händel-Ausgabe IV/13 (Redlich, Bärenreiter, 1962), Suite II, printed p. 53 (IMSLP #559922).
// Pass boundaries: dips in the recording at 24.6 s and 48.0 s; each pass is four bars, repeated, then eight bars, repeated (24 bars in about 23.5 s, 0.98 s a bar).
// Fine-grained measurements (pauses, level samples, curve correlations, method): cache/analysis/handel-water-music-2-bourree.txt, section “Supplementary measurements”.

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
    { t: 0, kind: 'form', title: 'Twelve bars, three times', text: 'A twelve-bar dance: a four-bar strain and an eight-bar strain, each repeated, so one pass lasts about 24 seconds. The edition prints “This Air to be played 3 times over”, and the recording plays it three times, the strains ending near 0:05, 0:09, 0:16 and 0:25.', basis: 'documented', precision: 'passage', evidence: 'HHA p. 53 prints the twelve bars, the repeat signs and the instruction; IMSLP lists the movement as 12 bars (36 played three times). Brief dips to −22.6 dB at 4.78 s, −23.8 dB at 8.68–8.78 s, −24.5 dB at 16.53–16.65 s and −23.1 dB at 24.61–24.68 s mark the strains of the first pass; further dips at 24.6 s and 48.0 s divide the recording into three passes of 23.5, 23.4 and 24.8 s. Twenty-four bars in 23.5 s is 0.98 s a bar; the onset-tempo estimate is 123 beats a minute.' },
    { t: 30, kind: 'world', title: 'A French dance among English ones', text: 'The Marine programme says Handel took the English style in a “Purcellian hornpipe” and the French style in several French dances. The Bourrée is one of the French dances, written in cut time with a one-note upbeat.', basis: 'documented', precision: 'passage', evidence: 'Programme note for the Marine Chamber Orchestra concert of 29 January 2017: https://web.archive.org/web/20251101025231id_/https://www.marineband.marines.mil/Portals/175/Docs/Programs/170129.pdf?ver=2017-01-24-094649-630 . The cut-time signature and the one-note upbeat are on HHA p. 53.' },
    { t: 60, kind: 'music', title: 'Louder to the last chord', text: 'Since 0:48 this pass has run about six decibels above the first two, with the same printed notes; the recording does not show how the extra weight is made. The repeated eight-bar strain begins near 1:04, and a 4–3 suspension in the figured bass leads to the last held chord.', basis: 'audio-feature', precision: 'passage', evidence: 'The relative level is −18.1 dB at 48.0 s, −10.1 dB at 48.5 s and −7.3 dB at 49.5 s; its mean is −15.1 dB for 2–48 s and −9.4 dB for 49–70 s. HHA bars 11–12: the bass figures 4–3, then a final dotted minim. The relative level falls below −22 dB at 72.98 s. The third pass runs from about 48.2 to 72.5 s, so its repeated eight-bar strain starts near 64.4 s.' },
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
};
