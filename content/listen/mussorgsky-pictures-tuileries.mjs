// Source files and recording credit: see content/dossiers/mussorgsky-pictures-tuileries.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide and the LA Phil note.
export default {
  id: 'mussorgsky-pictures-tuileries',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'III. Tuileries (Dispute d’enfants après jeux) — Allegretto non troppo, capriccioso',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 6, of: 15, unit: 'pieces' },
  year: '1874',
  key: 'B major',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - iii. tuileries - allegretto non troppo, capriccioso.ogg' },
  intro: '“Tuileries (Dispute d’enfants après jeux)”, the third number of Mussorgsky’s <i>Pictures at an Exhibition</i>, is marked Allegretto non troppo, capriccioso and shows children quarrelling in the Tuileries gardens. In thirty bars a two-note taunt returns between scurrying figures, and a smoother tune comes between the quarrels.',

  sections: [
    { t: 0, label: 'A · Two-note figure and semiquaver runs', m: 'A', mNote: 'Short two-note calls alternate with running semiquavers.' },
    { t: 28, label: 'B · Smooth tune rising upwards', m: 'B', mNote: 'A♯ rises through B to B♯.' },
    { t: 49, label: 'A′ · Two-note figure returns', m: 'A′', mNote: 'The opening calls return piano, then stop.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Opening, wind calls and strings', text: 'Two-note calls alternate with semiquaver runs. Ravel gives the calls to the winds and the semiquavers to the strings. Mussorgsky marked the movement <i>capriccioso</i>.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Tuileries, bars 1–13; Orrin Howard’s LA Phil note identifies the wind chords and string figures in Ravel’s scoring, inferred for this recording. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/tuileries.ly ; https://www.laphil.com/musicdb/pieces/557/pictures-at-an-exhibition' },
    { t: 28, kind: 'music', title: 'Middle tune, bars 14–19', text: 'The middle tune moves in longer notes and rises by semitones through A♯, B and B♯. Beneath it, D♯ falls to D♮ while F♯ is held.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Tuileries, bars 14–19, especially the melody and paired accompaniment notes in bars 14–15. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/tuileries.ly' },
  ],

  transitions: [
    {
      id: 'into-violin-theme',
      title: 'From short calls to a slurred phrase',
      from: 'A · Two-note figure and semiquaver runs',
      to: 'B · Smooth tune rising upwards',
      at: { t: 28 },
      span: [20, 38],
      how: '<p>A rising run leads into a longer melody beginning on A♯. Beneath it are D♯ and F♯; D♯ then moves down to D♮ as the melody rises through B to B♯. The short calls are followed by a slurred phrase, with semitone changes inside the B major key.</p>',
      devices: ['texture change', 'chromatic slide'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Tuileries, bars 13–16. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/tuileries.ly',
    },
    {
      id: 'into-return',
      title: 'Return of the two-note calls',
      from: 'B · Smooth tune rising upwards',
      to: 'A′ · Two-note figure returns',
      at: { t: 49 },
      span: [38, 60],
      how: '<p>Bars 25–30 bring back the short two-note calls, marked <i>piano</i>, followed by the opening figure at <i>pianissimo</i>. Quick runs interrupt them again. The last run ends on a short B major chord, a quaver, and rests fill the remaining beats of the bar.</p>',
      devices: ['motivic link', 'decrescendo', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Tuileries, bars 25–30, including p, pp and the final quaver chord followed by rests. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/tuileries.ly',
    },
  ],
};
