export default {
  kicker: 'An illustrated atlas of composers · Bach to the present',
  tagline: 'Classical composers, historical recordings and scores, with the paintings and poems connected with the music.',
  description: 'An illustrated atlas of classical composers from Bach to the present, with historical recordings, timed listening notes, playable scores, maps and musical connections.',
  colophon: 'Dates follow the standard biographies; catalogue numbers follow the thematic catalogues (BWV, K., D., Op.). Sources appear on each page.',


  heroSlides: [
    { kicker: 'I · The Baroque', file: 'File:Johannes Vermeer - Lady at the Virginal with a Gentleman, \'The Music Lesson\' - Google Art Project.jpg', artist: 'Johannes Vermeer', title: 'The Music Lesson', date: 'c. 1662–65', focus: '55% 45%' },
    { kicker: 'II · Classical', file: 'File:Jacques-Louis David, Le Serment des Horaces.jpg', artist: 'Jacques-Louis David', title: 'The Oath of the Horatii', date: '1784', focus: '40% 40%' },
    { kicker: 'III · Romanticism', file: 'File:Caspar David Friedrich - Two Men Contemplating the Moon - Google Art Project.jpg', artist: 'Caspar David Friedrich', title: 'Two Men Contemplating the Moon', date: '1819–20', focus: '60% 40%' },
    { kicker: 'IV · Fin de siècle', file: 'File:Gustav Klimt - Beethovenfries, "Die Leiden der schwachen Menschheit" und "Der wohlgerüstete Starke" (Tafel 3, linke Langwand) - 5987-3 - Österreichische Galerie Belvedere.jpg', artist: 'Gustav Klimt', title: 'Beethoven Frieze: The Well-Armed Strong One', date: '1901–02', focus: '72% 35%' },
    { kicker: 'V · The French Line', file: 'File:James McNeill Whistler - Nocturne en bleu et or.jpg', artist: 'James McNeill Whistler', title: 'Nocturne: Blue and Gold — Old Battersea Bridge', date: 'c. 1872–75', focus: '50% 35%' },
    { kicker: 'VI · Modernism', file: 'File:Wassily Kandinsky - Impression III (Concert) - Google Art Project.jpg', artist: 'Wassily Kandinsky', title: 'Impression III (Concert)', date: '1911', focus: '50% 50%' },
    { kicker: 'VII · After 1945', file: 'File:Ad Parnassum, Paul Klee (1932, 274).jpg', artist: 'Paul Klee', title: 'Ad Parnassum', date: '1932', focus: '50% 45%' },
  ],

  preludeTitle: 'Introduction',
  prelude: `
<p class="dropcap">The Concert Hall plays historical and openly licensed recordings, from plainchant to Boulez’s <i>Le Marteau sans maître</i>, in the order the composers were born. Listening notes appear during playback, and aligned scores follow the recording bar by bar. The evenings below play a selection of pieces in order.</p>
<p>Composer chapters cover the life, the music and the works to start with, alongside playable examples, paintings and poems. Letters and memoirs supply the composers’ own words. Each work page gathers its recordings and listening notes.</p>
<aside class="note"><b>Recordings and copyright</b>The Hall uses historical recordings first published before 1963 and newer recordings with open licences. For Ligeti, Reich and other recent composers, the chapters link to recordings on the artists’ and labels’ own channels.</aside>
<p>The chapters overlap, as the periods of music do. In 1909 [[rachmaninoff|Rachmaninoff]] wrote his Third Piano Concerto for his first American tour, and [[schoenberg|Schoenberg]] wrote his Three Piano Pieces, Op. 11, which have no home key. The Web of Influence and the Map connect the chapters through copied scores, borrowed tunes and composers who lived in the same city.</p>`,


  erasTitle: 'Bach to the present in seven chapters',
  erasLede: 'Paintings and music from each period, with accounts of changes in harmony, form and instruments.',

  programmesTitle: 'Evenings',
  programmesLede: 'A selection of recordings to play in order, with listening notes and available scores. Playback stops at the end of the evening.',
  lifelinesLede: 'Bach died the year Haydn turned eighteen. Brahms heard Mahler conduct <i>Don Giovanni</i> in Budapest in 1890 and praised it. Rachmaninoff outlived Ravel and Mahler, dying two years before Bartók.',
  timelineLede: 'Lifespans of every composer in the atlas, set against the events and artworks of their times, drawn to scale. Schubert lived thirty-one years, Mozart thirty-five, Lili Boulanger twenty-four.',
  galleryLede: 'Paintings, drawings, prints and poems from the atlas, hung salon-style. Each one links to the music it is associated with.',

  about: {
    lede: 'An illustrated atlas of Western art music, built around playable recordings and readable scores.',
    html: `<p class="dropcap">Contrapunctus is an atlas of Western art music in seven chapters, from Bach to the present, with a prologue that reaches back to plainchant.</p>
<h2><span class="sc">The recordings</span>Public domain and Creative Commons</h2>
<p>The Concert Hall draws public-domain and Creative Commons recordings from Wikimedia Commons and the Internet Archive. These include Nikisch conducting Beethoven in 1913, Rachmaninoff playing Rachmaninoff and Stravinsky conducting <i>The Rite of Spring</i>. For much of the music written since 1945, the chapters link to the labels’ and artists’ own channels. Recording details list the performers, dates, locations and sources.</p>
<h2><span class="sc">The scores</span>Notation and playback</h2>
<p>Short examples use ABC notation, engraved and played in the browser with abcjs. Longer scores come from public-domain or openly licensed encodings. Where an edition has been aligned with a recording, the Hall highlights its bars and turns the pages during playback.</p>
<h2><span class="sc">The writing</span>Quotations and sources</h2>
<p>Quotations name the speaker, recipient and date where known. Listening notes, musical connections, places and recordings link to their sources. <a href="sources.html">Sources &amp; method</a> explains the source labels and how score timings are estimated.</p>`,
    coda: '<p>Corrections are welcome as issues on the project’s <a href="https://github.com/mottopanikeiku/contrapunctus/issues">GitHub repository</a>.</p>',
  },

  events: [
    { year: 1700, label: 'Cristofori’s first pianos, Florence', kind: 'history' },
    { year: 1719, label: 'Defoe, Robinson Crusoe', kind: 'art' },
    { year: 1759, label: 'Voltaire, Candide', kind: 'art' },
    { year: 1776, label: 'American Declaration of Independence', kind: 'history' },
    { year: 1784, label: 'David, The Oath of the Horatii', kind: 'art' },
    { year: 1789, label: 'Storming of the Bastille', kind: 'history' },
    { year: 1808, label: 'Goethe, Faust Part One', kind: 'art' },
    { year: 1815, label: 'Waterloo; Congress of Vienna', kind: 'history' },
    { year: 1819, label: 'Friedrich, Two Men Contemplating the Moon', kind: 'art' },
    { year: 1848, label: 'Revolutions across Europe', kind: 'history' },
    { year: 1857, label: 'Baudelaire, Les Fleurs du mal', kind: 'art' },
    { year: 1861, label: 'Emancipation of the Russian serfs', kind: 'history' },
    { year: 1874, label: 'First Impressionist exhibition, Paris', kind: 'art' },
    { year: 1877, label: 'Edison’s phonograph', kind: 'history' },
    { year: 1897, label: 'Vienna Secession founded', kind: 'art' },
    { year: 1905, label: 'Revolution of 1905, Russia', kind: 'history' },
    { year: 1911, label: 'Der Blaue Reiter, Munich', kind: 'art' },
    { year: 1914, label: 'First World War', kind: 'history' },
    { year: 1917, label: 'Russian Revolutions', kind: 'history' },
    { year: 1922, label: 'Joyce, Ulysses; Eliot, The Waste Land', kind: 'art' },
    { year: 1933, label: 'Nazis take power in Germany', kind: 'history' },
    { year: 1936, label: 'Pravda: “Muddle instead of music”', kind: 'history' },
    { year: 1939, label: 'Second World War', kind: 'history' },
    { year: 1948, label: 'Zhdanov decree on music', kind: 'history' },
    { year: 1950, label: 'Pollock’s poured paintings', kind: 'art' },
    { year: 1969, label: 'Moon landing', kind: 'history' },
    { year: 1971, label: 'Rothko Chapel, Houston', kind: 'art' },
    { year: 1989, label: 'Fall of the Berlin Wall', kind: 'history' },
  ],
};
