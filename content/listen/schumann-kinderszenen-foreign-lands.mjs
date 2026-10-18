// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 3.
// https://imslp.org/wiki/Kinderszenen,_Op.15_(Schumann,_Robert)
// Composition dates: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013).
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
// Recording: Donald Betts, album The Inner Voice (innig.net), recorded May 2005; see the dossier for how the file is linked to it.
export default {
  id: 'schumann-kinderszenen-foreign-lands',
  composer: 'schumann',
  order: 10,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 1 · Von fremden Ländern und Menschen — Of Foreign Lands and Peoples',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 1, of: 13 },
  year: '1838',
  key: 'G major',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - i. of foreign lands and peoples.ogg' },
  intro: 'The cycle opens in G major with a tune over rippling triplets. The eight bars are heard four times in this performance, twice at the start and once in each pass of the second strain, where the first note changes. All thirteen pieces of this set are played by Donald Betts.',
  question: 'How does an eight-bar tune survive being heard four times?',

  sections: [
    { t: 0, label: 'A · opening strain, played twice', m: 'A', mNote: 'eight bars in G major, repeated literally' },
    { t: 36, label: 'B · six new bars, slowing to a fermata', m: 'B' },
    { t: 54, label: 'A′ · the opening tune returns', m: 'A′', mNote: 'the eight bars come back to close the strain' },
    { t: 72, label: 'B · second strain repeated', m: 'B', mNote: 'new bars and returning tune heard again' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A tune over triplets', text: 'Two beats to the bar in G major, marked p. The tune leaps from B up to G and steps down F♯–E–D. Beneath it, triplet quavers in broken chords weave between the hands, with the pedal marked and the bass marking the beats separately.', basis: 'score-proportion', precision: 'passage', evidence: 'First edition p. 3 (IMSLP #03060): G major, 2/4, p, triplet groups marked “3” in the inner voices, pedal in bar 1; melodic notes B–G–F♯–E–D checked against the Mutopia transcription (SchumannOp15No01.ly). The report reads G major from 0:05 (local key r = 0.85–0.93); the level rises from −17.9 dB at 0:00 to −10.1 dB at 0:05.' },
    { bar: { n: '1', occ: 2 }, kind: 'form', title: 'The eight bars again', text: 'The opening eight bars are repeated, as the repeat sign requires. The second pass comes back at the same pace with the same accompaniment, near 0:18; the long note that closes bar 8 is where the join can be heard.', basis: 'score-aligned', precision: 'passage', evidence: 'Provisional score alignment (docs/assets/data/schumann-kinderszenen-foreign-lands/score.json): bar 8 at 15.6 s and bar 1 (second time) at 17.9 s. The form analysis also matches 0:03–0:16 with 0:20–0:34 (mean similarity 0.92) and the report shows novelty 0.54 at 0:18. The score has a repeat sign after bar 8 and a minim at the end of the bar.' },
    { t: 38, kind: 'listen', title: 'Slowing before the tune returns', text: 'The second strain opens with six new bars marked piano. The last carries a ritardando and a fermata, so the music almost stops before the opening tune comes back. In the recording the level dips around 0:50.', basis: 'audio-feature', precision: 'passage', evidence: 'Score p. 3: ritardando and fermata in the sixth bar after the repeat sign, then piano and the opening tune. Report: −8.7 dB at 0:45, −14.5 dB at 0:50, novelty 0.72 at 0:50. The form analysis finds 0:55–1:10 resembling 0:20–0:35 (mean 0.96), the returning tune.' },
    { t: 62, kind: 'life', title: 'Written in February 1838', text: 'Schumann’s diary records work on the Kinderszenen by Saturday 17 February 1838; on the 22nd he played from them to a merchant visiting from Bremen. Clara Wieck was giving recitals in Vienna that winter, and in March he wrote to tell her of the pieces.', basis: 'documented', precision: 'passage', evidence: 'Diary entries quoted in the Robert-Schumann-Haus Zwickau catalogue 175 Jahre Kinderszenen (2013), item 1; the March letter is item 3 (17 March 1838). Clara’s Vienna recitals ran from December 1837 to April 1838 (Nancy Reich, Clara Schumann, rev. edn).' },
    { t: 88, kind: 'world', title: 'The one complete autograph', text: 'Only this piece of the thirteen survives in a complete autograph, now in the Robert-Schumann-Haus, Zwickau. Schumann dedicated it in 1847 to his sister-in-law Marie Wieck. No manuscript of the whole set is known.', basis: 'documented', precision: 'passage', evidence: 'Zwickau catalogue 175 Jahre Kinderszenen, item 5 (autograph 3702–A1, dedicated 1847 to Marie Wieck); the Henle Urtext review at schumann-portal.de/3213.html says there was probably never a continuous autograph.' },
  ],

  transitions: [
    {
      id: 'into-new-strain',
      title: 'The repeat ends and a new strain begins',
      from: 'A · opening strain',
      to: 'B · six new bars',
      at: { bar: { n: '9', occ: 1 } },
      span: [28, 46],
      how: '<p>After the second pass of the eight-bar strain the repeat sign is not taken again. Bar 9 begins a new strain marked <i>p</i>, with a different melodic shape over the continuing triplet motion. The pulse and the metre are unchanged, so the join is a change of material rather than of tempo.</p>',
      devices: ['motivic link'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Provisional score alignment: bar 9 (first time) at 36.1 s after the second pass of bars 1–8. The form analysis places the repeat of 0:03–0:16 at 0:20–0:34; the report shows novelty 0.40 at 0:36. The first edition (p. 3) has the repeat sign after bar 8 and p at bar 9.',
    },
    {
      id: 'into-returning-tune',
      title: 'A fermata, then the tune comes home',
      from: 'B · six new bars',
      to: 'A′ · the opening tune',
      at: { bar: { n: '15', occ: 1 } },
      span: [46, 64],
      how: '<p>The sixth new bar carries a ritardando and a fermata, which holds the music almost still. The next bar is marked <i>p</i> and the opening tune returns, in G major, to close the strain; its first note is D rather than the B that began the piece, and the rest of the top line follows the opening. The pause makes the return sound like an arrival: the listener has heard the same eight bars twice and now hears them as the destination.</p>',
      devices: ['fermata', 'tempo change', 'retransition'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Provisional score alignment: bar 14 (the fermata bar) at 48.8 s and bar 15 at 53.5 s. The form analysis matches 0:20–0:35 with 0:55–1:10 (mean 0.96); the report shows a level dip at 0:50 (−14.5 dB) before the return. Score p. 3: ritardando and fermata in the last new bar, p, then the opening tune.',
    },
    {
      id: 'into-repeat-of-second-strain',
      title: 'The repeat sign returns to bar nine',
      from: 'A′ · the opening tune returns',
      to: 'B · second strain repeated',
      at: { bar: { n: '9', occ: 2 } },
      span: [66, 82],
      how: '<p>At the end of the returning tune the closing repeat sign sends the music back to bar 9. The long note that ends the eight bars gives no break; the six new bars and the fermata are heard a second time, with the opening tune again closing the strain, and the piece then ends on the same long note.</p>',
      devices: ['motivic link'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Provisional score alignment: bar 22 at 69.6 s and bar 9 (second time) at 72.4 s. The form analysis matches 0:36–1:10 with 1:13–1:47 (lag 36.5 s, mean similarity 0.94); the report shows novelty 0.41 at 1:10. The score has a closing repeat sign at the end of bar 22.',
    },
  ],
};
