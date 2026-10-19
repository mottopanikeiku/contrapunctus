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
  intro: 'This Promenade from <i>Pictures at an Exhibition</i> comes after the gnome and is in A♭ major, marked Moderato comodo e con delicatezza, “with delicacy”. A horn plays the familiar Promenade tune, and the woodwinds follow.',

  sections: [
    { t: 0, label: 'A · Promenade theme, horn and winds, A♭ major', m: 'A', mNote: 'The Promenade theme returns, played softly.' },
    { t: 18, label: 'B · The tune varied', m: 'B', mNote: 'The melody moves downward; the chords that follow rise.' },
    { t: 42, label: 'C · High B♭ octaves, final E♭ chord', m: 'C', mNote: 'High octaves slow down above the closing chords.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Promenade in A♭ major, horn', text: 'The horn plays the tune and the woodwinds reply. Mussorgsky marks this Promenade “with delicacy”. The tune keeps its alternating bars of five and six beats, now in A♭ major.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Promenade II, bars 1–4; Ravel’s horn and wind scoring is described by Orrin Howard for the LA Phil. This recording’s orchestration is inferred as Ravel’s. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-2.ly ; https://www.laphil.com/musicdb/pieces/557/pictures-at-an-exhibition' },
    { t: 42, kind: 'music', title: 'Closing bars and attacca', text: 'The closing bars climb into high octaves and slow down. A high B♭ sounds softly above an E♭-major chord. Mussorgsky marks <i>attacca</i>, so the next picture begins without a break.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Promenade II, bars 9–12: ritardando, high octaves, final E♭ harmony with B♭ above, pp and attacca. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-2.ly' },
  ],

  transitions: [
    {
      id: 'into-fuller-restatement',
      title: 'The tune turns lower',
      from: 'A · Promenade theme, horn and winds, A♭ major',
      to: 'B · The tune varied',
      at: { t: 18 },
      span: [10, 28],
      how: '<p>The next phrase begins E♭–F–C and turns down through the walking tune. The lower line plays it first, and a chordal answer then climbs above it. The five- and six-beat bars continue, and E♭ chords recur within A♭ major.</p>',
      devices: ['motivic link', 'register change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Promenade II, bars 5–8. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-2.ly',
    },
    {
      id: 'into-slowing-close',
      title: 'Low E♭ and A♭ give way to octaves',
      from: 'B · The tune varied',
      to: 'C · High B♭ octaves, final E♭ chord',
      at: { t: 42 },
      span: [34, 56],
      how: '<p>Low E♭ and A♭ notes mark the last steps in the bass. The tune then climbs into high octaves at <i>ritardando</i>, and the accompanying chords move underneath. The section ends very softly on E♭ major with B♭ above, followed by the instruction <i>attacca</i>.</p>',
      devices: ['register change', 'decrescendo', 'tempo change', 'attacca'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Promenade II, bars 9–12. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-2.ly',
    },
  ],
};
