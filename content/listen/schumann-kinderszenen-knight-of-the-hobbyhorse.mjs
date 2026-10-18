// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 13.
// Title list in the letter to Clara Wieck and letter to Raimund Härtel of 6 July 1838: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), items 3 and 6.
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
export default {
  id: 'schumann-kinderszenen-knight-of-the-hobbyhorse',
  composer: 'schumann',
  order: 90,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 9 · Ritter vom Steckenpferd — Knight of the Hobbyhorse',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 9, of: 13 },
  year: '1838',
  key: 'C major',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - ix. knight of the hobbyhorse.ogg' },
  intro: 'A child gallops on a stick horse: accented chords in C major, a rest on every first beat. Both parts of the piece carry repeat signs, and this performance takes them, so every bar is heard twice.',
  question: 'How do repeats change a forty-second piece?',

  sections: [
    { t: 0, label: 'A · eight bars, played twice', m: 'A', mNote: 'repeat taken; eight bars sound twice' },
    { t: 13, label: 'B · sixteen bars, played twice', m: 'B', mNote: 'chromatic chords, ff in the second half' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A rest, then accented chords', text: 'Three beats to the bar, marked mf. The right hand rests on the first beat of each bar and plays accented chords on the later beats, over long notes in the left hand. The gallop is in the gap before each chord. The first eight bars close with a repeat sign.', basis: 'score-proportion', precision: 'passage', evidence: 'First edition p. 13 (IMSLP #03060): 3/4, no sharps or flats, mf, rest on the first beat of every bar, accent marks on the later chords, long left-hand notes, closing repeat sign after bar 8. Report: C major (G C E among the strongest pitch classes at 0:00–0:10), 3.8–4.6 onsets per second.' },
    { t: 13, kind: 'form', title: 'Both repeats are taken', text: 'The second part has sixteen bars and its own repeat sign. At about 0.8 seconds a bar, the piece with both repeats runs 48 bars, near 39 seconds; the recording lasts 44. So both repeats are taken, and each pass of the second part lasts about 14 seconds.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: novelty 1.00 at 0:14, the only structural boundary. Onset-envelope autocorrelation peaks at 0.267 s (one beat) and 0.813 s (three beats, one bar). Form analysis: 0:08.5–0:22.5 matches 0:22.5–0:36.5 (lag 14 s, mean 0.95). 48 bars × 0.81 s ≈ 39 s. Score p. 13: repeat signs after bar 8 and after bar 24.' },
    { t: 28, kind: 'world', title: 'A title on a list, a publisher chased', text: 'Schumann named this piece in his March 1838 list of titles for Clara. By 6 July he was pressing the publisher Raimund Härtel about the set: “sie werden zu alt mit der Zeit”, they will grow too old with time. The first edition appeared in 1839.', basis: 'documented', precision: 'passage', evidence: 'Zwickau catalogue, item 3 (title list including “Ritter vom Steckenpferd”) and item 6 (letter to Härtel, 6 July 1838); IMSLP lists the first publication as Breitkopf & Härtel, Leipzig, 1839.' },
  ],

  transitions: [
    {
      id: 'into-second-part',
      title: 'The same gallop over new harmony',
      from: 'A · eight bars, played twice',
      to: 'B · sixteen bars, played twice',
      at: { t: 13 },
      span: [7, 20],
      how: '<p>After the repeat of the first eight bars, the second part keeps the rhythm of the first: a rest, then accented chords. What changes is the harmony, with flat and natural signs in the chords, and the dynamic, which reaches <i>ff</i> in the second half of the part. The rhythm stays fixed, so the change comes only from harmony and volume.</p>',
      devices: ['motivic link'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Report: novelty 1.00 at 0:14 with level −8.3 dB at 0:10 and −5.6 dB at 0:15. Score p. 13: double bar with repeat signs after bar 8, flat and natural signs in the third system, ff in the fourth.',
    },
  ],
};
