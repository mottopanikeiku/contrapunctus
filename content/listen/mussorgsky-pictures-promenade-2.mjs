// Source files and recording credit: see content/dossiers/mussorgsky-pictures-promenade-2.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide and the LA Phil note.
// Score for the piano original: Lamm's text, Mutopia Project (promenade-2.ly).
export default {
  id: 'mussorgsky-pictures-promenade-2',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'Promenade — Moderato comodo e con delicatezza',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 3, of: 15 },
  year: '1874',
  key: 'A♭ major',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - promenade - moderato comodo e con delicatezza.ogg' },
  intro: 'After the gnome, the walk resumes in A♭ major, marked “with delicacy”. A horn takes up the familiar tune, and the woodwinds answer.',

  sections: [
    { t: 0, label: 'A · Horn and winds, A♭ major', m: 'A', mNote: 'The walking tune returns softly' },
    { t: 18, label: 'B · A new turn of the tune', m: 'B', mNote: 'The melody turns down; the answering chords climb' },
    { t: 42, label: 'C · High B♭, a fading E♭ chord', m: 'C', mNote: 'High octaves slow above the closing chords' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A horn takes the walk', text: 'The horn leads, and the woodwinds answer. Mussorgsky marks this walk “with delicacy”: the tune keeps its alternating bars of five and six beats, now in A♭ major.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Promenade II, bars 1–4; Ravel’s horn and wind scoring is described by Orrin Howard for the LA Phil. This recording’s orchestration is inferred as Ravel’s. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-2.ly ; https://www.laphil.com/musicdb/pieces/557/pictures-at-an-exhibition' },
    { t: 42, kind: 'music', title: 'High notes, slower steps', text: 'The closing bars climb into high octaves and slow down. A high B♭ hangs over an E♭-major chord, softly. Mussorgsky writes <i>attacca</i>: the next picture is to begin without a break.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Promenade II, bars 9–12: ritardando, high octaves, final E♭ harmony with B♭ above, pp and attacca. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-2.ly' },
  ],

  transitions: [
    {
      id: 'into-fuller-restatement',
      title: 'The tune takes a lower turn',
      from: 'A · Horn and winds, A♭ major',
      to: 'B · A new turn of the tune',
      at: { t: 18 },
      span: [10, 28],
      how: '<p>The next phrase begins E♭–F–C, turning down through the walking tune. The lower line carries it first; a chordal answer then climbs above it. The five- and six-beat bars continue, with E♭ chords recurring inside the A♭-major key.</p>',
      devices: ['motivic link', 'register change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Promenade II, bars 5–8. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-2.ly',
    },
    {
      id: 'into-slowing-close',
      title: 'The low steps become high octaves',
      from: 'B · A new turn of the tune',
      to: 'C · High B♭, a fading E♭ chord',
      at: { t: 42 },
      span: [34, 56],
      how: '<p>Low E♭ and A♭ notes mark the last heavy steps. The tune then climbs into high octaves at <i>ritardando</i>, while the accompanying chords move underneath. It ends very softly on E♭ major with B♭ above, followed by the instruction <i>attacca</i>.</p>',
      devices: ['register change', 'decrescendo', 'tempo change', 'attacca'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Promenade II, bars 9–12. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-2.ly',
    },
  ],
};
