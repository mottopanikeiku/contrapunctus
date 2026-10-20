export default {
  id: 'mussorgsky-pictures-cum-mortuis',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'Cum mortuis in lingua mortua — Andante non troppo, con lamento',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 13, of: 15, unit: 'pieces' },
  year: '1874',
  key: 'B minor',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - cum mortuis in lingua mortua - andante non troppo, con lamento.ogg' },
  intro: 'In “Cum mortuis in lingua mortua” (Andante non troppo, con lamento), the movement of <i>Pictures at an Exhibition</i>, the Promenade theme returns over tremolo strings. In a note in his manuscript, Mussorgsky described Hartmann leading him towards skulls lit from within.',

  sections: [
    { t: 0, label: 'A · Promenade theme in B minor', m: 'A', mNote: 'The Promenade theme returns in B minor beneath a tremolo.' },
    { t: 58, label: 'B · High F♯, quiet phrases below', m: 'B', mNote: 'The tremolo settles; the last chord moves to B major.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Walking tune in B minor', text: 'The familiar tune returns in B minor, marked <i>con lamento</i>. Ravel sets it among quiet woodwinds and trembling strings. The melody keeps the shape of a walk.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano edition, opening of Cum mortuis; Joanna Wyld, Philharmonia listening guide, 7 April 2022, p. 7: https://philharmonia-assets.s3.amazonaws.com/uploads/2022/04/07.04.22_RFH-online.pdf. Ravel attribution for this recording remains inferred.' },
    { t: 32, kind: 'world', title: 'Inscription in the 1874 manuscript', text: 'In his 1874 manuscript Mussorgsky wrote that Hartmann’s spirit led him towards the skulls: “the skulls are illuminated gently from within”. The title means “with the dead in a dead language”.', basis: 'documented', precision: 'passage', evidence: 'Mussorgsky’s marginal inscription in the 1874 manuscript, quoted by Michael Steinberg: https://www.bso.org/works/pictures-at-an-exhibition. Title translation: Peter Laki, https://www.clevelandorchestra.com/works/pictures-at-an-exhibition-mussorgsky' },
    { t: 102, kind: 'music', title: 'Final chord in B major', text: 'The high F♯ tremolo holds while the lower phrases are separated by rests. The last chord, B–D♯–F♯, is in B major, where the movement began in B minor. It carries a fermata.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano edition, final ten bars: fixed F♯ tremolo, rests between phrases and final B–D♯–F♯ chord: https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-6.ly' },
  ],

  transitions: [
    {
      id: 'into-fuller-statements',
      title: 'High F♯ tremolo over the chords',
      from: 'A · Promenade theme in B minor',
      to: 'B · High F♯, quiet phrases below',
      at: { t: 58 },
      span: [48, 68],
      how: '<p>The tremolo moves to high F♯ and stays on that note. Below it the score marks <i>tranquillo</i>, and long chords alternate with rising F♯ major arpeggios in the bass (F♯–C♯–F♯–A♯–C♯). The melodic phrases become shorter, with rests between them.</p>',
      devices: ['texture change', 'dominant pedal'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano edition, Tranquillo and the following bars: fixed F♯ tremolo and F♯–C♯–F♯–A♯–C♯ bass arpeggios; Mutopia transcription. The established section boundary places this later passage approximately.',
    },
  ],
};
