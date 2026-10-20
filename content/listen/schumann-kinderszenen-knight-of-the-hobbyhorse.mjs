// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 13.
// Title list in the letter to Clara Wieck and letter to Raimund Härtel of 6 July 1838: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), items 3 and 6.
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
export default {
  id: 'schumann-kinderszenen-knight-of-the-hobbyhorse',
  composer: 'schumann',
  order: 90,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 9 · Ritter vom Steckenpferd — Knight of the Hobbyhorse',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 9, of: 13, unit: 'pieces' },
  year: '1838',
  key: 'C major',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - ix. knight of the hobbyhorse.ogg' },
  intro: '“Ritter vom Steckenpferd” (Knight of the Hobbyhorse), No. 9 of <i>Kinderszenen</i>, Op. 15, depicts a child galloping on a stick horse. Its C major chords fall off the beat above a steady bass.',

  sections: [
    { t: 0, label: 'A · Offbeat chords in C major', m: 'A', mNote: 'The right hand starts each bar with a rest.' },
    { t: 13, label: 'B · Same rhythm at fortissimo', m: 'B', mNote: 'Chromatic bass notes beneath the same bounding rhythm.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Opening rhythm and accents', text: 'The right hand rests on the downbeat and plays a chord halfway through the beat. Its long–short–long rhythm of crotchet, quaver and crotchet sits across the three-beat bar. Accents mark the chords.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 13: 3/4, opening quaver rests, crotchet–quaver–crotchet chords and accents. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { t: 13, kind: 'form', title: 'Second strain', text: 'The second part keeps the rhythm of the first unchanged. Chromatic notes enter the chords and bass, and the music later reaches <i>fortissimo</i>. Both halves have repeat signs.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 13: two repeated strains; chromatic writing in the second, followed by fortissimo.' },
    { t: 28, kind: 'life', title: 'Letter to Raimund Härtel, 1838', text: 'On 6 July 1838 Schumann wrote to his publisher Raimund Härtel asking for news of <i>Kinderszenen</i>. “They will grow too old with time,” he wrote. “Please — do not forget them; I long to see them.”', basis: 'documented', precision: 'passage', evidence: 'Schumann to Raimund Härtel, 6 July 1838, quoted in Thomas Synofzik, 175 Jahre Kinderszenen (2013), item 6. Translation from the German. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
  ],

  transitions: [
    {
      id: 'into-second-part',
      title: 'First strain to second strain',
      from: 'A · Offbeat chords in C major',
      to: 'B · Same rhythm at fortissimo',
      at: { t: 13 },
      span: [7, 20],
      how: '<p>The first strain closes in C major. The second keeps the right hand’s quaver rest and offbeat chords, and the left hand moves into chromatic notes. Its longer bass notes continue underneath the offbeat attacks. Later the C major chords return marked <i>fortissimo</i>.</p>',
      devices: ['motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 13, the join between the two repeated strains and the later fortissimo return.',
    },
  ],
};
