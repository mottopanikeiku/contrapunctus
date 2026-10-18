// Source files and recording credit: see content/dossiers/mussorgsky-pictures-ballet-chicks.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide (Joanna Wyld).
// Form: Lamm's piano text, Mutopia Project (ballet.ly: Scherzino, Trio, "De Capo il Scherzino, senza Trio, e poi Coda").
// Hartmann's picture: Michael Steinberg, Boston Symphony note; the site's influence edge hartmann-pictures--mussorgsky-pictures-1874.
export default {
  id: 'mussorgsky-pictures-ballet-chicks',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'V. Ballet des poussins dans leurs coques — Scherzino, vivo leggiero',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 9, of: 15 },
  year: '1874',
  key: 'F major',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - v. ballet des poussins dans leurs coques - scherzino. vivo leggiero.ogg' },
  intro: 'Children in eggshell costumes dance in a ballet: a quick scherzino, a trio of chirping trills, then the scherzino again without the trio. Listen for the trills.',
  question: 'How do trills and tiny repeated notes turn a costume design into music?',

  sections: [
    { t: 0, label: 'Scherzino, repeated', m: 'A' },
    { t: 34, label: 'Trio · trills', m: 'B' },
    { t: 62, label: 'Scherzino da capo', m: 'A′', mNote: 'da capo, without the trio' },
    { t: 75, label: 'Short coda', m: 'Coda' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Woodwinds, harps, plucked strings', text: 'Ravel uses a delicate palette here: woodwinds, harps and pizzicato strings, with bright percussion. Detected attacks run at about five a second at a quiet level near −20 dB, as small as the dancers.', basis: 'audio-feature', precision: 'passage', evidence: 'Onsets per second 5.2, 5.2, 5.8 at 0:00–0:10; relative level −19.9 to −17.9 dB. Woodwinds, harps, pizzicato strings and percussion: Philharmonia guide; the report does not identify instruments.' },
    { t: 34, kind: 'form', title: 'The trio: trills and tremors', text: 'At about 0:34 the trio begins. In the piano score it is built on trills and quickly rocking pairs of notes, which an orchestra can turn into chirps. Detected attacks fall at first, to 2.6 a second, while the sound brightens.', basis: 'audio-feature', precision: 'passage', evidence: 'Boundary at 0:34 (novelty 0.86); onsets per second 4.6 (0:30), 2.6 (0:35); brightness 1,378 Hz (0:35) rising to 2,075 Hz at 0:55. The trio and its trills are in Lamm’s piano score (Mutopia, ballet.ly); the orchestral scoring is not checked against a score.' },
    { t: 46, kind: 'world', title: 'Canaries in armour', text: 'Hartmann’s costume design for Petipa’s ballet Trilby, given in St Petersburg in 1871, shows canary chicks in eggshells; Stasov wrote of canaries “enclosed in eggs as in suits of armor”. It is the picture on the [[influence#edge-hartmann-pictures--mussorgsky-pictures-1874|Hartmann edge]].', basis: 'documented', precision: 'passage', evidence: 'Michael Steinberg’s Boston Symphony note (https://www.bso.org/works/pictures-at-an-exhibition) for Trilby, Petipa and Gerber, the 1871 date and Stasov’s description; the sketch itself is the art of the site’s edge hartmann-pictures--mussorgsky-pictures-1874 (File:Hartmann Chicks sketch for Trilby ballet.jpg).' },
    { t: 62, kind: 'form', title: 'Back to the scherzino', text: 'The strongest boundary of the movement, at 1:02, brings the scherzino back. The score says to repeat it without the trio, then add a coda. Detected attacks reach their highest rate, over six a second, just before the return.', basis: 'audio-feature', precision: 'passage', evidence: 'Boundary at 1:02 (novelty 1.00); onsets per second 6.2 at 1:00, 5.2 at 1:05; relative level −18.7 dB (1:00). “De Capo il Scherzino, senza Trio, e poi Coda” is the instruction in Lamm’s score (Mutopia).' },
    { t: 75, kind: 'listen', title: 'A terse ending', text: 'The last three seconds are the loudest window of the movement, near −11 dB, with only 1.6 attacks a second: a few short chords after the chatter. Wikipedia calls it a terse extension.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level −11.1 dB at 1:15, the loudest window; onsets per second fall from 5.4 (1:10) to 1.6 (1:15). “Terse extension (coda)”: Wikipedia’s Pictures at an Exhibition article, movement 5.' },
  ],

  transitions: [
    {
      id: 'into-trio',
      title: 'Staccato gives way to trills',
      from: 'Scherzino, repeated',
      to: 'Trio · trills',
      at: { t: 34 },
      span: [26, 46],
      how: '<p>The staccato chatter of the scherzino stops and the trio takes over. In the piano score its figures are trills and pairs of notes rocking quickly back and forth; scored for the orchestra they brighten the sound while reducing the number of separate attacks. The pulse stays quick, so the join is a change of texture, not tempo.</p>',
      devices: ['texture change', 'register change', 'orchestration change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundary at 0:34 (novelty 0.86); onsets per second 4.6 (0:30) to 2.6 (0:35); brightness 1,310 Hz (0:30) rising to 2,075 Hz (0:55). The trio’s trills are in Lamm’s piano score; the orchestral treatment is not checked against a score.',
    },
    {
      id: 'into-da-capo',
      title: 'The trio ends and the opening returns',
      from: 'Trio · trills',
      to: 'Scherzino da capo',
      at: { t: 62 },
      span: [54, 72],
      how: '<p>Attacks multiply again, up to more than six a second, and at about 1:02 the scherzino of the opening returns word for word. The score’s direction is da capo senza trio, so the trio is not repeated. Because the same music comes back, the movement closes the circle and the earlier chirping is heard in a new light.</p>',
      devices: ['retransition', 'motivic link'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundary at 1:02 (novelty 1.00); onsets per second 5.0 (0:50), 6.2 (1:00), 5.2 (1:05). Da capo senza trio: Lamm’s score (Mutopia, ballet.ly). The recurrence is not matched by the report’s self-similarity, so only the score instruction is claimed.',
    },
    {
      id: 'into-coda',
      title: 'A few loud chords close it',
      from: 'Scherzino da capo',
      to: 'Short coda',
      at: { t: 75 },
      span: [68, 78],
      how: '<p>The scherzino’s chatter ends and a short extension finishes the piece with a few louder chords: detected attacks drop from over five a second to under two, and the level reaches the movement’s highest window. The coda adds no new idea; it cuts the dance off, as a curtain falls on a ballet scene.</p>',
      devices: ['texture change', 'crescendo build'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Relative level −16.5 dB (1:10) to −11.1 dB (1:15, the loudest window); onsets per second 5.4 (1:10) to 1.6 (1:15). A terse coda follows the da capo in the score instruction and in Wikipedia’s description.',
    },
  ],
};
