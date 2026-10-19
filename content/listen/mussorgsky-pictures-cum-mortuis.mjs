export default {
  id: 'mussorgsky-pictures-cum-mortuis',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'Cum mortuis in lingua mortua — Andante non troppo, con lamento',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 13, of: 15 },
  year: '1874',
  key: 'B minor',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - cum mortuis in lingua mortua - andante non troppo, con lamento.ogg' },
  intro: 'The Promenade becomes a lament beneath trembling strings. In his manuscript Mussorgsky pictures Hartmann leading him towards skulls that glow from within.',

  sections: [
    { t: 0, label: 'A · The Promenade among the dead', m: 'A', mNote: 'The walking tune returns in B minor beneath a tremolo' },
    { t: 58, label: 'B · High F♯, quiet answers below', m: 'B', mNote: 'The tremolo settles; the last chord turns to B major' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'The walker mourns', text: 'The Promenade’s familiar tune returns in B minor, marked <i>con lamento</i>. Ravel puts it among quiet woodwinds and trembling strings. The melody still has the shape of a walk, but each phrase now seems to hesitate before taking another step.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano edition, opening of Cum mortuis; Joanna Wyld, Philharmonia listening guide, 7 April 2022, p. 7: https://philharmonia-assets.s3.amazonaws.com/uploads/2022/04/07.04.22_RFH-online.pdf. Ravel attribution for this recording remains inferred.' },
    { t: 32, kind: 'world', title: 'The skulls begin to glow', text: 'In his 1874 manuscript Mussorgsky writes that Hartmann’s spirit leads him towards the skulls: “the skulls are illuminated gently from within”. The title means “with the dead in a dead language”. The visitor in the gallery has entered his friend’s picture.', basis: 'documented', precision: 'passage', evidence: 'Mussorgsky’s marginal inscription in the 1874 manuscript, quoted by Michael Steinberg: https://www.bso.org/works/pictures-at-an-exhibition. Title translation: Peter Laki, https://www.clevelandorchestra.com/works/pictures-at-an-exhibition-mussorgsky' },
    { t: 102, kind: 'music', title: 'A quiet B major', text: 'The high F♯ tremolo stays in place while the lower phrases fall silent between their answers. The last chord contains D♯: B minor has become B major. Mussorgsky leaves it under a fermata.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano edition, final ten bars: fixed F♯ tremolo, rests between phrases and final B–D♯–F♯ chord: https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-6.ly' },
  ],

  transitions: [
    {
      id: 'into-fuller-statements',
      title: 'F♯ stays above the quiet chords',
      from: 'A · The Promenade among the dead',
      to: 'B · High F♯, quiet answers below',
      at: { t: 58 },
      span: [48, 68],
      how: '<p>The tremolo stops wandering and settles on high F♯. Below it, the score marks <i>tranquillo</i>: long chords alternate with rising F♯ major arpeggios in the bass. The melody grows shorter, with rests between its replies.</p>',
      devices: ['texture change', 'dominant pedal'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano edition, Tranquillo and the following bars: fixed F♯ tremolo and F♯–C♯–F♯–A♯–C♯ bass arpeggios; Mutopia transcription. The established section boundary places this later passage approximately.',
    },
  ],
};
