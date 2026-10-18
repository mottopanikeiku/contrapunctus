// Score evidence: Arnold, The Celebrated Water-musick in score (London, 1788), pp. 52–53 (Commons, BnF scans, image 28 of 30), where the D major minuet is headed Coro and ends the score with FINIS: https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(28_of_30).jpg
// Bar numbers: Hallische Händel-Ausgabe IV/13 (Redlich, Bärenreiter, 1962), Suite II, printed pp. 50–51 (IMSLP #559922): first strain bars 1–8, second strain bars 9–24, each with a repeat sign; trumpets and horns rest in bars 9–11.
// Strain boundaries: dips in the recording at 18.5, 36.1, 71.3 and 105.9 s; a strain of 8 bars lasts about 17.5 s and one of 16 bars about 35 s (2.18 s a bar).
// Fine-grained measurements (pauses, level samples, curve correlations, method): cache/analysis/handel-water-music-2-minuet.txt, section “Supplementary measurements”.

export default {
  id: 'handel-water-music-2-minuet',
  composer: 'handel',
  order: 6,
  work: 'Water Music, Suite No. 2 in D, HWV 349',
  movement: 'V. Minuet',
  set: { id: 'handel-water-music-2', title: 'Water Music · Suite No. 2', part: 5, of: 5 },
  year: '1717',
  key: 'D major',
  forces: 'Trumpets, horns, oboes, bassoon, strings and continuo',
  performers: 'Marine Chamber Orchestra of the United States Marine Band; Major Michelle Rakers, conductor',
  recorded: '29 January 2017',
  source: { file: "File:Handel's Water Music - 13. Minuet - Chamber Orchestra - United States Marine Band.opus" },
  intro: 'The minuet that ends the programme is a tutti dance of only twenty-four bars in the score, in two strains each played twice. The recording then plays it through a second time, louder and without repeats.',
  question: 'What does a second hearing add to a short dance?',

  sections: [
    { t: 0, label: 'First strain, played twice', m: 'A' },
    { t: 36.2, label: 'Second strain, played twice', m: 'B' },
    { t: 106, label: 'Second statement · first strain', m: 'A′', mNote: 'same strain, about five decibels louder' },
    { t: 123.3, label: 'Second statement · second strain', m: 'B′', mNote: 'second strain again, played once, louder' },
  ],

  cues: [
    { t: 0, kind: 'form', title: 'Last piece in the programme', text: 'Marking 300 years of the Water Music, the Marine Band’s concert of 29 January 2017 ends with this Minuet. Samuel Arnold’s 1788 full score also ends with it, marked <i>Coro</i> and followed by FINIS; modern editions number it 13, third in the suite.', basis: 'documented', precision: 'passage', evidence: 'The programme’s running order ends with movement 13: https://web.archive.org/web/20251101025231id_/https://www.marineband.marines.mil/Portals/175/Docs/Programs/170129.pdf?ver=2017-01-24-094649-630 . The Marine Band’s announcement of 25 January 2017 says the concert celebrates the 300th anniversary of the Water Music: https://web.archive.org/web/20170219102546/http://www.marineband.marines.mil/News/Article/1060074/an-afternoon-of-water-music/ . Arnold’s score, pp. 52–53 (Coro, FINIS); HHA p. 50 (No. 13).' },
    { t: 36.2, kind: 'music', title: 'Where the score rests the brass', text: 'The first strain, played twice, has almost every instrument in the same rhythm. At about 0:36 the second strain begins. The score gives trumpets and horns three bars’ rest before they join at bar 12; the recording’s level shows no step at that point, so it cannot say whether they play.', basis: 'score-proportion', precision: 'passage', evidence: 'HHA bars 1–12 (p. 50): strain A, bars 1–8, has the whole orchestra in one rhythm; strain B, bars 9–24, has the trumpets and horns resting in bars 9–11 and entering in bar 12. The level differs by only −1.5 dB between bars 9–11 and bars 12–14 of the first hearing of the second strain (37.0–50.2 s) and by +0.5 dB in its repeat (71.4–84.6 s). The level dips to −27.0 dB at 36.08–36.20 s. A strain of 16 bars lasts about 35 s (2.18 s a bar). The official video shows players resting at times where the printed score gives them notes, so the printed parts are not assumed to sound.' },
    { t: 72, kind: 'world', title: 'The day on the river', text: 'On 17 July 1717 about fifty musicians played on a barge beside George I’s. Friedrich Bonet reported that the Prince of Wales and his wife were conspicuously absent. Father and son were quarrelling; in November 1717 a quarrel ended with the Prince ejected from the king’s palace.', basis: 'documented', precision: 'passage', evidence: 'Bonet’s diary entry and the dispute, as given in Robert King’s note for Hyperion CDA66967: https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA66967' },
    { t: 106, kind: 'music', title: 'The whole Minuet again, louder', text: 'After a gap of about 0.3 seconds the minuet starts again from bar 1 and runs through once without repeats, about five decibels louder than before. Around 2:10, in score bar 12, the level rises about four decibels more, a step the first statement does not show at the same bar.', basis: 'audio-feature', precision: 'moment', evidence: 'The relative level falls to −34.3 dB at 105.7–106.0 s. The mean level of the second statement’s first strain is 5.4 dB above that of the two hearings of the first strain; in its second strain the level is 3.9 dB higher in bars 12–14 (about 130–137 s) than in bars 9–11, against −1.5 and +0.5 dB in the first statement. The printed notes are the same.' },
    { t: 131, kind: 'world', title: 'No autograph survives', text: 'No autograph score of the Water Music survives. John Walsh printed parts for about half of the movements in the 1730s, and Samuel Arnold published the first full score in 1788, which ends with this Minuet. The grouping into three suites appears to date from the 1950s.', basis: 'documented', precision: 'passage', evidence: 'Robert King’s note for Hyperion CDA66967 (no autograph; Walsh’s parts held only about half the movements; Arnold’s full score of 1788): https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA66967 . IMSLP credits Thurston Dart with the three-suite designation in the 1950s, first published by Eulenburg in 1959: https://imslp.org/wiki/Water_Music,_HWV_348-350_(Handel,_George_Frideric) . Arnold’s score ends with this movement, p. 53 (FINIS).' },
    { t: 158, kind: 'music', title: 'The last chord, then silence', text: 'The last chord ends at about 2:40 and four seconds of near silence follow. Then bright, steady sound at about −14 dB begins and lasts about half a minute; the video shows the players standing and the audience in silhouette, consistent with applause.', basis: 'audio-feature', precision: 'moment', evidence: 'The relative level is −12.0 dB at 159 s, −15.7 dB at 160 s and −40.0 dB at 161 s, stays near −38 to −44 dB until 163.5 s, is −24.6 dB at 164 s and between −12 and −16 dB from 165 s to about 194 s, then fades (−27.7 dB at 195 s). The tail is bright (spectral centroid about 2.4–2.5 kHz). The official video’s frames over the last half-minute show the whole orchestra standing and silhouettes at the lower edge of the picture.' },
  ],

  transitions: [
    {
      id: 'into-second-strain',
      title: 'The second strain begins',
      from: 'First strain',
      to: 'Second strain',
      at: { t: 36.2 },
      span: [30, 44],
      how: '<p>The first strain ends on a held D major chord, a dotted minim in every part, and its repeat sign is taken once. The second strain begins at bar 9; the score gives trumpets and horns three bars’ rest and brings them in at bar 12. The recording dips to about −27 dB for 0.1 seconds at the join. Its level shows no step at bar 12, so the level alone does not show whether the brass play in this first statement.</p>',
      devices: ['general pause', 'orchestration change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'The relative level dips to −27.0 dB at 36.08–36.20 s. HHA bars 7–12 (printed p. 50) and Arnold’s 1788 score, pp. 52–53, where the first strain ends with a repeat sign and the trumpet and horn staves are empty at the start of the next system. The level is −25.6 dB in bars 9–11 and −27.1 dB in bars 12–14 of the second strain’s first hearing.',
    },
    {
      id: 'into-louder-statement',
      title: 'A pause, then the Minuet again, louder',
      from: 'Second strain',
      to: 'Second statement · first strain',
      at: { t: 106 },
      span: [100, 112],
      how: '<p>The second strain’s repeat ends and the recording falls to about −34 dB for 0.3 seconds. The orchestra then starts again from bar 1 and plays the twenty-four bars once, without repeats. The level is about five decibels higher than in either hearing of the first strain, though the printed notes are the same; the recording does not show how the extra weight is made.</p>',
      devices: ['general pause'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'The relative level falls to −34.3 dB at 105.7–106.0 s. The mean level of 106.3–123 s is 5.4 dB above that of 3–18.5 s and 19.5–36 s.',
    },
    {
      id: 'into-louder-second-strain',
      title: 'Bar 12 brings a louder step',
      from: 'Second statement · first',
      to: 'Second statement · second',
      at: { t: 123.3 },
      span: [118, 134],
      how: '<p>The first strain ends on its held chord and the second begins at bar 9, where the score gives trumpets and horns three bars’ rest before their entry at bar 12. This time the recording’s level rises about four decibels at bar 12, around 2:10, and the strain is played once, without its repeat, ending at about 2:40 on a held D major chord. The recording does not show which instruments account for the rise.</p>',
      devices: ['orchestration change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'HHA bars 9–12 (printed p. 50). The level is 3.9 dB higher in the second statement’s bars 12–14 than in its bars 9–11, against −1.5 and +0.5 dB in the first statement’s two hearings of the strain. Strain boundaries from the dips at 105.9 s and about 123 s.',
    },
  ],
};
