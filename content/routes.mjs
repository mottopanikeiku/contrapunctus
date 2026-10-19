// Listening routes: short sequences built around one thing you can hear.
export default [
  {
    id: 'returns',
    title: 'When the tune comes back',
    intro: 'Satie saves a darker chord for his second ending. Other returns arrive in a new key or with the whole orchestra behind them.',
    tracks: [
      { id: 'satie-gymnopedie-1', why: 'The opening returns almost untouched. At the end, F♯ becomes F♮ and D major darkens into D minor.' },
      { id: 'beethoven-5-first', why: 'A written repeat brings the opening back intact. Later, a lone oboe interrupts its return.' },
      { id: 'vivaldi-spring-allegro', why: 'The full strings keep bringing back their spring refrain between the violins’ birdsong and storms.' },
      { id: 'haydn-94-andante', why: 'A plain C-major tune survives four variations, from quiet strings to the full orchestra.' },
      { id: 'mozart-40-molto-allegro', why: 'The second theme first sings in B♭ major. Its return brings it home to G minor.' },
    ],
  },
  {
    id: 'voices',
    title: 'Several tunes at once',
    intro: 'Bach fits four voices under a pianist’s hands. Handel lets a whole choir trade a tune, then brings everyone together on the same words.',
    tracks: [
      { id: 'bach-wtc1-fugue-b-minor', why: 'Four voices enter in turn; one pair of hands keeps their winding lines apart.' },
      { id: 'couperin-nations-piemontaise', why: 'Four players make three parts: two upper melodies and a shared bass.' },
      { id: 'bach-brandenburg-5-allegro', why: 'Flute, violin and harpsichord trade phrases until the keyboard takes the room to itself.' },
      { id: 'brahms-4-finale', why: 'Thirty variations grow from an eight-bar pattern, passed through the orchestra.' },
      { id: 'handel-messiah-hallelujah', why: 'The choir proclaims the words together, then sends a tune chasing through the parts.' },
    ],
  },
  {
    id: 'colour',
    title: 'The orchestra changes its voice',
    intro: 'Ravel changes the instrument and lets the tune stay put. Elsewhere, a whole orchestra becomes strings and harp, or a piano becomes a drowned cathedral.',
    tracks: [
      { id: 'ravel-bolero', why: 'Two melodies pass from one instrument to the next while the snare drum refuses to budge.' },
      { id: 'mahler-5-adagietto', why: 'Mahler leaves only strings and harp: long bowed phrases above plucked notes.' },
      { id: 'debussy-cathedrale-engloutie', why: 'A piano supplies distant bells, a great organ and the water that closes over them.' },
      { id: 'rimsky-korsakov-scheherazade-prince', why: 'A broad violin tune turns into a woodwind dance, with a snare drum keeping time.' },
    ],
  },
  {
    id: 'short',
    title: 'Four minutes to spare',
    intro: 'A thunderous piano étude and a hushed operatic prelude fit into the same short break. Each recording is a complete piece or movement.',
    tracks: [
      { id: 'scriabin-etude-op8-12', why: 'An octave melody sings above a left hand leaping across the keyboard.' },
      { id: 'elgar-enigma-nimrod', why: 'Elgar’s orchestral portrait of August Jaeger, the friend who kept him composing.' },
      { id: 'satie-gymnopedie-1', why: 'A spare piano dance, with the bass one beat ahead of the chords.' },
      { id: 'handel-messiah-hallelujah', why: 'A choir’s great shout of joy, with room for four independent voices.' },
      { id: 'vivaldi-spring-allegro', why: 'Violins turn into birds; a brief thunderstorm interrupts their spring morning.' },
      { id: 'verdi-traviata-prelude', why: 'High, quiet strings give way to a love song; lower strings take it up beneath the violins’ decoration.' },
      { id: 'rachmaninoff-prelude-c-sharp-minor', why: 'Rachmaninoff at the keyboard, recorded in 1919.' },
    ],
  },
];
