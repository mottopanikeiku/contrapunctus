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
  key: 'E♭ major',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - promenade - moderato comodo e con delicatezza.ogg' },
  intro: 'After the gnome the visitor walks on, more gently. The same five-and-six-beat theme now sounds in a different key and a softer colour. Instruments named here follow Ravel’s orchestration, the probable but undocumented version.',
  question: 'What changes when the same walking tune is played “with delicacy”?',

  sections: [
    { t: 0, label: 'Gentle statement', m: 'A' },
    { t: 18, label: 'Fuller restatement', m: 'B' },
    { t: 42, label: 'High, slowing close', m: 'C' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Horn and woodwinds', text: 'In Ravel’s scoring a horn leads the theme, decorated by woodwinds, with a slow string line above. The level is steady, around −11 dB, and several attacks a second come from the decoration rather than the tune.', basis: 'documented', precision: 'passage', evidence: 'Horn, woodwind decoration and string descant: Philharmonia guide and LA Phil note. Relative level is −11.6 to −10.1 dB over 0:00–0:15 at 2.6–3.8 onsets per second; the report does not identify instruments.' },
    { t: 18, kind: 'form', title: 'The tune grows fuller', text: 'At about 0:18 the melody is restated with more instruments, and the sound builds to its peak near 0:30. The harmony is the same family of chords as the opening, but thicker and brighter.', basis: 'audio-feature', precision: 'passage', evidence: 'Boundary at 0:18 (novelty 0.65); relative level reaches −7.9 dB at 0:30, the loudest 5-second window. The thicker restatement is from the score’s second half of the theme; no bar alignment is claimed.' },
    { t: 42, kind: 'world', title: 'Ravel’s commission', text: 'Ravel orchestrated the suite in summer 1922 for Serge Koussevitzky, who reserved the score for his own use for several years and introduced it in Paris that October. Most listeners know Ravel’s colours; this performance’s version is inferred. See the [[influence#edge-mussorgsky--ravel-pictures-orchestration|Ravel edge]].', basis: 'documented', precision: 'passage', evidence: 'Michael Steinberg’s Boston Symphony note (https://www.bso.org/works/pictures-at-an-exhibition) gives the commission, the exclusive-use stipulation and the October 1922 première (its date differs from Wikipedia’s, so only the month is given). Linked edge: mussorgsky--ravel-pictures-orchestration. The version of this file is inferred from its layout of Promenades.' },
    { t: 49, kind: 'listen', title: 'High chords, slowing', text: 'In the last stretch the sound rises into a higher register and softens to about −18 dB. In the piano score the final bars are marked to slow down and end very quietly; listen for the tempo easing.', basis: 'score-proportion', precision: 'passage', evidence: 'Brightness rises from 839 Hz at 0:40 to 1,433 Hz at 0:45; level falls from −12.7 dB to −18.4 dB by 0:55 and onsets drop to 0.2 per second. The ritardando, high register and pianissimo are in Lamm’s piano score (Mutopia); the orchestral treatment is not checked against a score.' },
  ],

  transitions: [
    {
      id: 'into-fuller-restatement',
      title: 'The melody comes back thicker',
      from: 'Gentle statement',
      to: 'Fuller restatement',
      at: { t: 18 },
      span: [10, 28],
      how: '<p>The first statement closes and the theme begins again over richer chords. The bass line keeps its steady steps, but more voices join and the sound builds towards its highest point near 0:30. Nothing modulates here: the join is a change of fullness, with the same E♭-based harmony thickened and the line passed to a larger group of instruments.</p>',
      devices: ['orchestration change', 'crescendo build'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundary at 0:18 (novelty 0.65); relative level reaches −7.9 dB at 0:30. The thickening of the chords is from the piano score’s repeated phrase; the orchestral detail is not checked against a score.',
    },
    {
      id: 'into-slowing-close',
      title: 'Chords rise and the walk slows',
      from: 'Fuller restatement',
      to: 'High, slowing close',
      at: { t: 42 },
      span: [34, 56],
      how: '<p>After the peak the writing climbs into the upper register and thins. In the piano score a marked ritardando and sustained high chords lead to a very quiet ending, so the walker slows to look at the next picture. The harmony settles on the home E♭ chord, and the high, soft chords leave the pulse to fade rather than stopping on a cadence.</p>',
      devices: ['register change', 'decrescendo', 'tempo change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Strongest boundary at 0:42 (novelty 1.00); brightness 839 Hz (0:40) to 1,433 Hz (0:45); level −12.7 dB to −18.4 dB (0:55); onsets per second 1.0 to 0.2. The ritardando and ottava are in Lamm’s piano score (Mutopia). The local key estimate reads E♭ major from 0:45, which only confirms the settling on the home chord.',
    },
  ],
};
