// Source files and recording credit: see content/dossiers/mussorgsky-pictures-tuileries.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide and the LA Phil note.
export default {
  id: 'mussorgsky-pictures-tuileries',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'III. Tuileries (Dispute d’enfants après jeux) — Allegretto non troppo, capriccioso',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 6, of: 15 },
  year: '1874',
  key: 'B major',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - iii. tuileries - allegretto non troppo, capriccioso.ogg' },
  intro: 'Children quarrel in the Tuileries gardens: a two-note taunt, a scurry, another taunt. Mussorgsky fits the scene into thirty bars, with a smoother little tune between the squabbles.',

  sections: [
    { t: 0, label: 'A · Two-note taunts and quick replies', m: 'A', mNote: 'Short calls alternate with running semiquavers' },
    { t: 28, label: 'B · A smooth tune slips upwards', m: 'B', mNote: 'A♯ rises through B to B♯' },
    { t: 49, label: 'A′ · The two-note taunt returns', m: 'A′', mNote: 'The opening calls return softly, then stop' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Children answer back', text: 'Two-note calls alternate with scurrying semiquavers. Ravel puts the taunts in the winds and the quick replies in the strings. Mussorgsky’s marking is <i>capriccioso</i>: these children keep changing their minds.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Tuileries, bars 1–13; Orrin Howard’s LA Phil note identifies the wind chords and string figures in Ravel’s scoring, inferred for this recording. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/tuileries.ly ; https://www.laphil.com/musicdb/pieces/557/pictures-at-an-exhibition' },
    { t: 28, kind: 'music', title: 'A tune between the squabbles', text: 'The middle tune has longer notes and a sly upward slide: A♯, B, then B♯. Beneath it, D♯ falls to D♮ while F♯ stays put. Even the smoother music cannot quite sit still.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Tuileries, bars 14–19, especially the melody and paired accompaniment notes in bars 14–15. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/tuileries.ly' },
  ],

  transitions: [
    {
      id: 'into-violin-theme',
      title: 'The taunts become a smooth phrase',
      from: 'A · Two-note taunts and quick replies',
      to: 'B · A smooth tune slips upwards',
      at: { t: 28 },
      span: [20, 38],
      how: '<p>A rising run leaves space for a longer melody beginning on A♯. Beneath it sit D♯ and F♯; then D♯ slips down to D♮ as the melody rises through B to B♯. The short calls have become a slurred phrase, with semitone changes inside the B-major key.</p>',
      devices: ['texture change', 'chromatic slide'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Tuileries, bars 13–16. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/tuileries.ly',
    },
    {
      id: 'into-return',
      title: 'The children return to their taunt',
      from: 'B · A smooth tune slips upwards',
      to: 'A′ · The two-note taunt returns',
      at: { t: 49 },
      span: [38, 60],
      how: '<p>The short two-note calls return, marked <i>piano</i>, followed by the opening figure at <i>pianissimo</i>. Quick runs still interrupt them. The last one lands on a short B-major chord, and the remaining beats of the bar are silent.</p>',
      devices: ['motivic link', 'decrescendo', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Tuileries, bars 25–30, including p, pp and the final quaver chord followed by rests. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/tuileries.ly',
    },
  ],
};
