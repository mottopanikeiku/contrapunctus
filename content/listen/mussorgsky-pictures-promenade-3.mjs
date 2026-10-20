// Source files and recording credit: see content/dossiers/mussorgsky-pictures-promenade-3.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide and the LA Phil note.
export default {
  id: 'mussorgsky-pictures-promenade-3',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'Promenade — Moderato non tanto, pesante',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 5, of: 15, unit: 'pieces' },
  year: '1874',
  key: '',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - promenade - moderato non tanto, pesante.ogg' },
  intro: 'This Promenade from <i>Pictures at an Exhibition</i>, marked Moderato non tanto, pesante, brings the theme back in B major on trumpet and trombones. Eight bars later it has thinned to a few bare notes, and the children’s picture <i>Tuileries</i> follows.',

  sections: [
    { t: 0, label: 'A · Promenade theme, brass, B major', m: 'A', mNote: 'Trumpet and trombones play the tune in B major.' },
    { t: 14, label: 'B · Promenade theme ending on C♯', m: 'B', mNote: 'Octaves thin to single notes; the tempo slows.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Promenade, trumpet and trombones', text: 'Trumpet and trombones bring back the Promenade, with the orchestra behind them. The Promenade is in B major and lasts eight bars. At the end the chords drop out, and a single line slows down and stops on C♯.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Promenade III, bars 1–8; Orrin Howard’s LA Phil note identifies trumpet and trombones. Ravel’s orchestration is inferred for this recording. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-3.ly ; https://www.laphil.com/musicdb/pieces/557/pictures-at-an-exhibition' },
    { t: 22, kind: 'music', title: 'End of the Promenade, pizzicato strings', text: 'In Ravel’s scoring the strings play pizzicato and slow to a halt. The next picture, <i>Tuileries</i>, shows the Paris park, “swarming with children and their nurses”.', basis: 'documented', precision: 'passage', evidence: 'Joanna Wyld, Philharmonia listening guide, 7 April 2022, p. 7: Promenade 3 ends with a cliffhanger of slowing pizzicato strings (https://philharmonia-assets.s3.amazonaws.com/uploads/2022/04/07.04.22_RFH-online.pdf). Michael Steinberg’s Boston Symphony note describes Tuileries as the park in Paris “swarming with children and their nurses”: https://www.bso.org/works/pictures-at-an-exhibition' },
  ],

  transitions: [
    {
      id: 'into-plucked-ending',
      title: 'Promenade III into <i>Tuileries</i>',
      from: 'A · Promenade theme, brass, B major',
      to: 'B · Promenade theme ending on C♯',
      at: { t: 14 },
      span: [8, 30],
      how: '<p>The next phrase begins F♯–G♯–C♯ in octaves. The chords stop and the final fragment slows, marked <i>ritardando</i> and <i>diminuendo</i>. Its last C♯ is unaccompanied. The score marks <i>Tuileries</i> to follow immediately.</p>',
      devices: ['texture change', 'decrescendo', 'tempo change', 'attacca'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Promenade III, bars 5–8, ending with an unaccompanied C♯ and attacca. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-3.ly',
    },
  ],
};
