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
  intro: 'A child gallops on a stick horse, and the piano takes the adventure seriously. C-major chords lurch off the beat while the bass keeps its seat.',

  sections: [
    { t: 0, label: 'A · Offbeat chords in C major', m: 'A', mNote: 'The right hand starts each bar with a rest' },
    { t: 13, label: 'B · The gallop reaches fortissimo', m: 'B', mNote: 'Chromatic bass notes beneath the same bounding rhythm' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A slightly lopsided gallop', text: 'The right hand misses the downbeat, then lands a chord halfway through the beat. Its long–short–long rhythm sits awkwardly in a three-beat bar. Accents make the toy horse buck.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 13: 3/4, opening quaver rests, crotchet–quaver–crotchet chords and accents. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { t: 13, kind: 'form', title: 'The horse keeps its rhythm', text: 'The second part keeps the gallop exactly as it was. New flats and sharps slip into the chords and bass; later the music reaches <i>fortissimo</i>. Both halves have repeat signs.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 13: two repeated strains; chromatic writing in the second, followed by fortissimo.' },
    { t: 28, kind: 'life', title: 'The children are getting older', text: 'On 6 July 1838 Schumann chases his publisher Raimund Härtel for news of <i>Kinderszenen</i>. “They will grow too old with time,” he writes. “Please — do not forget them; I long to see them.”', basis: 'documented', precision: 'passage', evidence: 'Schumann to Raimund Härtel, 6 July 1838, quoted in Thomas Synofzik, 175 Jahre Kinderszenen (2013), item 6. Translation from the German. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
  ],

  transitions: [
    {
      id: 'into-second-part',
      title: 'New chords, the same horse',
      from: 'A · Offbeat chords in C major',
      to: 'B · The gallop reaches fortissimo',
      at: { t: 13 },
      span: [7, 20],
      how: '<p>The first strain closes in C major. The second keeps the right hand’s quaver rest and bounding chords, while the left hand moves into chromatic notes. Its longer bass notes continue underneath the offbeat attacks; later, <i>fortissimo</i> gives the returning C-major chords an extra kick.</p>',
      devices: ['motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 13, the join between the two repeated strains and the later fortissimo return.',
    },
  ],
};
