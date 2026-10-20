// Curated concerts for the Hall: each plays its tracks in order, then stops.
// `tracks` are listen ids; unpublished or missing ids are dropped at build time with a warning.
export default [
  {
    id: 'first-evening',
    title: 'A first evening',
    subtitle: 'Bach to Ravel in seventy minutes',
    note: 'Bach’s aria, a Vivaldi spring and Handel’s chorus come first, followed by the opening movements of two symphonies, a Viennese winter song, a Chopin nocturne and Paris at the turn of the twentieth century. The last piece is built on a single drum rhythm, played 169 times.',
    tracks: ['bach-goldberg-aria', 'vivaldi-spring-allegro', 'handel-messiah-hallelujah', 'mozart-40-molto-allegro', 'beethoven-5-first', 'schubert-winterreise-leiermann', 'chopin-nocturne-op27-2', 'satie-gymnopedie-1', 'debussy-faune', 'mahler-5-adagietto', 'ravel-bolero'],
  },
  {
    id: 'paris-1888-1913',
    title: 'Paris, 1888–1913',
    subtitle: 'From Satie’s Gymnopédies to The Rite of Spring',
    note: 'The evening covers twenty-five years in Paris. It includes the first Gymnopédie, which Satie wrote in Montmartre, Debussy accompanying Mary Garden, the flute that opens the Faune, Ravel’s harp, the drowned cathedral, and two Stravinsky ballets that the Ballets Russes brought to Paris.',
    tracks: ['satie-gymnopedie-1', 'debussy-garden-il-pleure', 'debussy-faune', 'debussy-nocturnes-nuages', 'debussy-nocturnes-fetes', 'ravel-pavane', 'ravel-introduction-and-allegro', 'debussy-cathedrale-engloutie', 'stravinsky-petrushka-fair', 'stravinsky-rite-sacrifice'],
  },
  {
    id: 'vienna',
    title: 'Vienna, from Haydn to Schoenberg',
    subtitle: 'A hundred and twenty years of music in one city',
    note: 'Haydn’s surprise, Mozart’s G minor, the symphony Schubert never finished, the hurdy-gurdy man at the end of Winterreise, Brahms in C minor, Mahler’s Adagietto, and Schoenberg’s night walk and his step into “the air of another planet”.',
    tracks: ['haydn-94-andante', 'mozart-40-molto-allegro', 'schubert-8-allegro-moderato', 'schubert-winterreise-leiermann', 'brahms-3-poco-allegretto', 'mahler-5-adagietto', 'schoenberg-verklarte-nacht-side-1', 'schoenberg-quartet-2-entrueckung'],
  },
  {
    id: 'composers-play',
    title: 'Composers as performers',
    subtitle: 'Grieg, Debussy, Rachmaninoff, Elgar, Ravel and Stravinsky performing their own music',
    note: 'Every recording here has the composer at the piano or on the podium, from Grieg in Paris in 1903 to Stravinsky in 1960. Each plays at his own tempos and departs from his own written markings where he chooses.',
    tracks: ['grieg-wedding-day-grieg-1903', 'debussy-garden-il-pleure', 'debussy-garden-mes-longs-cheveux', 'rachmaninoff-polka-vr', 'rachmaninoff-prelude-c-sharp-minor-victor-1921', 'elgar-pomp-circumstance-1-elgar-1927', 'rachmaninoff-concerto-2-moderato-rachmaninoff-1929-side1', 'ravel-bolero-ravel-1930', 'stravinsky-rite-sacrifice'],
  },
  {
    id: 'late-at-night',
    title: 'Late at night',
    subtitle: 'Slow music for late evening',
    note: 'Bach’s alto aria after Peter’s denial, the slow movement of Mozart’s last concerto, the adagio of Schubert’s Quintet, a Chopin nocturne, Schumann’s Träumerei, Debussy’s Clair de lune, the last page of Fauré’s Requiem and Mahler’s Adagietto.',
    tracks: ['bach-st-matthew-erbarme-dich', 'mozart-clarinet-adagio', 'schubert-quintet-956-adagio', 'chopin-nocturne-op27-2', 'schumann-kinderszenen-traumerei', 'debussy-clair-de-lune', 'ravel-pavane', 'faure-requiem-in-paradisum', 'mahler-5-adagietto'],
  },
  {
    id: 'first-recordings',
    title: 'The first recordings',
    subtitle: 'Grieg to Elgar, 1903–1928',
    note: 'Musicians playing and singing into a recording horn, and from 1925 into a microphone. Grieg, Caruso, Nikisch’s Berlin Philharmonic, Paderewski, Chaliapin, de Pachmann, and Elgar conducting his own march.',
    tracks: ['grieg-wedding-day-grieg-1903', 'debussy-garden-il-pleure', 'leoncavallo-vesti-caruso-1907', 'beethoven-5-first-nikisch-1913', 'chopin-waltz-op64-2-paderewski-1917', 'sibelius-finlandia-stokowski-1921', 'rachmaninoff-prelude-c-sharp-minor-victor-1921', 'volga-boatmen-chaliapin-1922', 'chopin-nocturne-op27-2-pachmann-1925', 'elgar-pomp-circumstance-1-elgar-1927', 'schubert-winterreise-leiermann'],
  },
  {
    id: 'at-the-opera',
    title: 'Opera',
    subtitle: 'Rossini to Puccini',
    note: 'The evening includes Figaro’s entrance in Seville; the chorus of the Hebrew slaves, which Toscanini conducted when Verdi was buried in 1901; the Habanera and the Toreador Song from Carmen; the clown’s aria associated with Caruso; and Tosca’s prayer. The orchestra plays Rossini’s overture and Wagner’s Valkyries on its own.',
    tracks: ['rossini-barber-overture', 'rossini-largo-al-factotum', 'verdi-nabucco-va-pensiero', 'verdi-traviata-prelude', 'wagner-walkure-ride-valkyries', 'bizet-carmen-habanera', 'bizet-carmen-toreador', 'leoncavallo-vesti-caruso-1907', 'puccini-o-soave-fanciulla', 'puccini-vissi-darte'],
  },
  {
    id: 'new-world',
    title: 'Music in America',
    subtitle: 'Dvořák in New York to Copland’s Lincoln',
    note: 'Dvořák wrote his Largo in New York in 1893 and told American composers to turn to their own folk songs. The evening continues with three American composers: Ives’s music on the Alcotts’ house in Concord; Gershwin’s Rhapsody in the 1924 recording by Gershwin and Paul Whiteman’s band; and Copland’s fanfare and his portrait of Lincoln, with Carl Sandburg reading Lincoln’s words.',
    tracks: ['dvorak-9-largo', 'ives-concord-alcotts', 'gershwin-rhapsody-1924', 'copland-fanfare-common-man', 'copland-lincoln-portrait'],
  },
];
