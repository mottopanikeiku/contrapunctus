// Source files and recording credit: see content/dossiers/mussorgsky-pictures-promenade-3.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide and the LA Phil note.
export default {
  id: 'mussorgsky-pictures-promenade-3',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'Promenade — Moderato non tanto, pesante',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 5, of: 15 },
  year: '1874',
  key: '',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - promenade - moderato non tanto, pesante.ogg' },
  intro: 'The walk returns in B major, with trumpet and trombones carrying its heavy steps. Eight bars later it has dwindled to a few bare notes, poised before the children of <i>Tuileries</i>.',

  sections: [
    { t: 0, label: 'A · The brass walk heavily', m: 'A', mNote: 'Trumpet and trombones carry the B-major tune' },
    { t: 14, label: 'B · The tune dwindles to C♯', m: 'B', mNote: 'Octaves thin to single notes and slow down' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Brass, then bare notes', text: 'Trumpet and trombones bring back the Promenade with the orchestra behind them. The B-major walk lasts only eight bars. By the end, the chords have fallen away, leaving a slowing fragment that stops on C♯.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Promenade III, bars 1–8; Orrin Howard’s LA Phil note identifies trumpet and trombones. Ravel’s orchestration is inferred for this recording. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-3.ly ; https://www.laphil.com/musicdb/pieces/557/pictures-at-an-exhibition' },
  ],

  transitions: [
    {
      id: 'into-plucked-ending',
      title: 'The chords leave the tune bare',
      from: 'A · The brass walk heavily',
      to: 'B · The tune dwindles to C♯',
      at: { t: 14 },
      span: [8, 30],
      how: '<p>The next phrase begins F♯–G♯–C♯ in octaves. The chords fall away and the final fragment slows, marked <i>ritardando</i> and <i>diminuendo</i>. Its last C♯ has no chord beneath it. The score asks for <i>Tuileries</i> to follow immediately.</p>',
      devices: ['texture change', 'decrescendo', 'tempo change', 'attacca'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Promenade III, bars 5–8, ending with an unaccompanied C♯ and attacca. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-3.ly',
    },
  ],
};
