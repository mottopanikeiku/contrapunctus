// Source files and recording credit: see content/dossiers/mussorgsky-pictures-promenade-4.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide and the LA Phil note.
// Metre: Lamm's piano text, Mutopia Project (promenade-4.ly).
export default {
  id: 'mussorgsky-pictures-promenade-4',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'Promenade — Tranquillo',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 8, of: 15 },
  year: '1874',
  key: '',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - promenade - tranquillo.ogg' },
  intro: 'After the ox-cart, the Promenade returns quietly in D minor. Flutes begin the walk; oboes and bassoons take their turn before the tune drops into the bass.',

  sections: [
    { t: 0, label: 'A · Flutes begin a quiet walk', m: 'A', mNote: 'The familiar tune returns in D minor' },
    { t: 18, label: 'B · Low octaves, then quick notes', m: 'B', mNote: 'The tune drops into the bass before a quick flicker' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Flutes, oboes and bassoons', text: 'The walking tune passes from flutes to oboes and bassoons, marked <i>Tranquillo</i>. D minor darkens it. Bars of five, six and seven beats make the steps unequal, even in this quiet stretch.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Promenade IV, gives D minor, Tranquillo and changing metres. Orrin Howard’s LA Phil note identifies the wind sequence in Ravel’s scoring, inferred for this recording. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-4.ly ; https://www.laphil.com/musicdb/pieces/557/pictures-at-an-exhibition' },
    { t: 18, kind: 'life', title: 'Mussorgsky’s face in the music', text: 'In June 1874, writing to Vladimir Stasov as he composes <i>Pictures</i>, Mussorgsky says: “My physiognomy can be seen in the interludes.” The man walking between Hartmann’s pictures is the composer himself.', basis: 'documented', precision: 'passage', evidence: 'Mussorgsky’s letter to Vladimir Stasov, probably 12 June 1874, quoted in the composition history at https://en.wikipedia.org/wiki/Pictures_at_an_Exhibition . The exact date is uncertain.' },
  ],

  transitions: [
    {
      id: 'into-brief-climax',
      title: 'The walk drops into the bass',
      from: 'A · Flutes begin a quiet walk',
      to: 'B · Low octaves, then quick notes',
      at: { t: 18 },
      span: [10, 30],
      how: '<p>The D-minor tune moves down into bass octaves, beginning A–B♭–E. The upper part answers in octaves too. After this heavier exchange, the music dwindles to isolated A notes and a quick flicker of chords before the next picture.</p>',
      devices: ['register change', 'texture change', 'decrescendo'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Promenade IV, bars 5–10: bass-octave phrase, upper-octave answer and the final short figures. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-4.ly',
    },
  ],
};
