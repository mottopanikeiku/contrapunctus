// Listening routes: short sequences built around one thing you can hear.
export default [
  {
    id: 'returns',
    title: 'Return of the theme',
    intro: 'Satie’s second ending closes on a D minor chord. Elsewhere, returns come in a new key or with the whole orchestra playing.',
    tracks: [
      { id: 'satie-gymnopedie-1', why: 'The opening returns with few changes. At the end, F♯ becomes F♮ and the music moves from D major to D minor.' },
      { id: 'beethoven-5-first', why: 'A written repeat brings the opening back intact. Later, a lone oboe interrupts its return.' },
      { id: 'vivaldi-spring-allegro', why: 'The full strings return to the opening ritornello between the violin passages imitating birdsong and storms.' },
      { id: 'haydn-94-andante', why: 'A C major tune goes through four variations, starting with quiet strings and ending with the full orchestra.' },
      { id: 'mozart-40-molto-allegro', why: 'The second theme is first heard in B♭ major. When it returns, it is in G minor.' },
    ],
  },
  {
    id: 'voices',
    title: 'Several tunes at once',
    intro: 'Bach wrote four voices for a keyboard player’s two hands. Handel passed a tune between the parts of a choir, then brought all the voices together on the same words.',
    tracks: [
      { id: 'bach-wtc1-fugue-b-minor', why: 'Four voices enter in turn, and one pair of hands keeps their lines apart.' },
      { id: 'couperin-nations-piemontaise', why: 'The four players play three parts, two upper melodies and a shared bass.' },
      { id: 'bach-brandenburg-5-allegro', why: 'Flute, violin and harpsichord exchange phrases until the harpsichord plays alone.' },
      { id: 'brahms-4-finale', why: 'Thirty variations on an eight-bar pattern, passed through the orchestra.' },
      { id: 'handel-messiah-hallelujah', why: 'The choir sings the words together, then the parts enter one after another with the same tune.' },
    ],
  },
  {
    id: 'colour',
    title: 'Changes in the orchestra',
    intro: 'Ravel kept the tune the same and changed the instrument playing it. Elsewhere, the orchestra is reduced to strings and harp, and a piano depicts a drowned cathedral.',
    tracks: [
      { id: 'ravel-bolero', why: 'Two melodies pass from one instrument to the next while the snare drum repeats its rhythm without change.' },
      { id: 'mahler-5-adagietto', why: 'Mahler uses only strings and harp, long bowed phrases above plucked notes.' },
      { id: 'debussy-cathedrale-engloutie', why: 'A piano depicts distant bells, a great organ and the water that closes over them.' },
      { id: 'rimsky-korsakov-scheherazade-prince', why: 'A broad violin tune is followed by a dance for the woodwind, with a snare drum keeping time.' },
    ],
  },
  {
    id: 'short',
    title: 'Under four minutes',
    intro: 'Each recording is a complete piece or movement, from a loud piano étude to a quiet operatic prelude.',
    tracks: [
      { id: 'scriabin-etude-op8-12', why: 'A melody in octaves sounds above a left hand that leaps across the keyboard.' },
      { id: 'elgar-enigma-nimrod', why: 'Elgar’s orchestral portrait of August Jaeger, the friend who kept him composing.' },
      { id: 'satie-gymnopedie-1', why: 'A piano dance in which the bass plays one beat ahead of the chords.' },
      { id: 'handel-messiah-hallelujah', why: 'For choir, with four independent voices.' },
      { id: 'vivaldi-spring-allegro', why: 'The violins imitate birdsong, and a brief thunderstorm interrupts the spring morning.' },
      { id: 'verdi-traviata-prelude', why: 'After high, quiet strings comes a love song; the lower strings take it up beneath decoration in the violins.' },
      { id: 'rachmaninoff-prelude-c-sharp-minor', why: 'Rachmaninoff at the keyboard, recorded in 1919.' },
    ],
  },
];
