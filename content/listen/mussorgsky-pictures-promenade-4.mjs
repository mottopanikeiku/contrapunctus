// Source files and recording credit: see content/dossiers/mussorgsky-pictures-promenade-4.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide and the LA Phil note.
// Metre: Lamm's piano text, Mutopia Project (promenade-4.ly).
export default {
  id: 'mussorgsky-pictures-promenade-4',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'Promenade — Tranquillo',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 8, of: 15, unit: 'pieces' },
  year: '1874',
  key: '',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - promenade - tranquillo.ogg' },
  intro: 'This is the Promenade marked Tranquillo from <i>Pictures at an Exhibition</i>, which follows the ox-cart and returns in D minor. The flutes play the theme first, then the oboes and bassoons take it over before it moves down into the bass.',

  sections: [
    { t: 0, label: 'A · Promenade theme, flutes, Tranquillo', m: 'A', mNote: 'The Promenade theme returns in D minor.' },
    { t: 18, label: 'B · Tune in low octaves, then quick notes', m: 'B', mNote: 'The tune moves into the bass, followed by quick notes.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Flutes, oboes and bassoons', text: 'The Promenade theme passes from flutes to oboes and bassoons, marked <i>Tranquillo</i>, in D minor. The metre changes between bars of five, six and seven beats.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Promenade IV, gives D minor, Tranquillo and changing metres. Orrin Howard’s LA Phil note identifies the wind sequence in Ravel’s scoring, inferred for this recording. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-4.ly ; https://www.laphil.com/musicdb/pieces/557/pictures-at-an-exhibition' },
    { t: 18, kind: 'life', title: 'Letter to Vladimir Stasov, June 1874', text: 'In June 1874, while composing <i>Pictures</i>, Mussorgsky wrote to Vladimir Stasov: “My physiognomy can be seen in the interludes.”', basis: 'documented', precision: 'passage', evidence: 'Mussorgsky’s letter to Vladimir Stasov, probably 12 June 1874, quoted in the composition history at https://en.wikipedia.org/wiki/Pictures_at_an_Exhibition . The exact date is uncertain.' },
  ],

  transitions: [
    {
      id: 'into-brief-climax',
      title: 'The theme moves into the bass',
      from: 'A · Promenade theme, flutes, Tranquillo',
      to: 'B · Tune in low octaves, then quick notes',
      at: { t: 18 },
      span: [10, 30],
      how: '<p>In bars 5–10 of Lamm’s piano text, the D minor tune moves down into bass octaves, beginning A–B♭–E. The upper part follows, also in octaves. The texture then thins to isolated A notes and a quick group of chords before the next picture.</p>',
      devices: ['register change', 'texture change', 'decrescendo'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Promenade IV, bars 5–10: bass-octave phrase, upper-octave answer and the final short figures. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-4.ly',
    },
  ],
};
