// Listening routes: short sequences built around one thing you can hear.
export default [
  {
    id: 'returns',
    title: 'A melody returns',
    intro: 'Music keeps its listener oriented by bringing things back. Listen for what comes back unchanged, and what does not.',
    tracks: [
      { id: 'satie-gymnopedie-1', why: 'The whole piece is played twice; the second ending is not the first.' },
      { id: 'beethoven-5-first', why: 'An exposition repeated note for note, then a recapitulation that is not.' },
      { id: 'vivaldi-spring-allegro', why: 'A refrain for the full band frames each solo episode.' },
      { id: 'haydn-94-andante', why: 'One plain tune, varied each time it returns.' },
      { id: 'mozart-40-molto-allegro', why: 'The second theme returns, but in the minor.' },
    ],
  },
  {
    id: 'voices',
    title: 'Hear independent voices',
    intro: 'Counterpoint means several melodies at once. Try following one line, then another.',
    tracks: [
      { id: 'bach-wtc1-fugue-b-minor', why: 'Four voices enter one by one with the same subject.' },
      { id: 'couperin-nations-piemontaise', why: 'Three written parts shared by four players.' },
      { id: 'bach-brandenburg-5-allegro', why: 'A harpsichord that steps out of the band.' },
      { id: 'brahms-4-finale', why: 'Thirty variations over one repeating eight-bar pattern.' },
      { id: 'handel-messiah-hallelujah', why: 'A chorus alternating block chords with imitation.' },
    ],
  },
  {
    id: 'colour',
    title: 'Listen for changing colour',
    intro: 'The same notes can sound utterly different depending on who plays them, and how.',
    tracks: [
      { id: 'ravel-bolero', why: 'One melody, passed from instrument to instrument for a quarter of an hour.' },
      { id: 'mahler-5-adagietto', why: 'An orchestra reduced to strings and harp.' },
      { id: 'debussy-cathedrale-engloutie', why: 'A piano made to sound like bells under water.' },
      { id: 'rimsky-korsakov-scheherazade-prince', why: 'A teacher of orchestration showing his craft.' },
    ],
  },
  {
    id: 'short',
    title: 'Under four minutes',
    intro: 'Complete pieces and movements for a short break.',
    tracks: [
      { id: 'scriabin-etude-op8-12', why: '' },
      { id: 'elgar-enigma-nimrod', why: '' },
      { id: 'satie-gymnopedie-1', why: '' },
      { id: 'handel-messiah-hallelujah', why: '' },
      { id: 'vivaldi-spring-allegro', why: '' },
      { id: 'verdi-traviata-prelude', why: '' },
      { id: 'rachmaninoff-prelude-c-sharp-minor', why: 'Played by Rachmaninoff himself, 1919.' },
    ],
  },
];
