export default {
  kicker: 'An illustrated atlas of composers · Bach to the present',
  tagline: 'Western art music from Bach to the present, with historical recordings and the scores. The chapters cover how the harmony works, where the forms came from, what each composer took from the others, and the paintings and poems connected with the music.',
  description: 'An illustrated atlas of classical composers from Bach to the present, with technical listening notes, playable score examples, the origins of musical forms, and paintings and poems from the same periods.',
  colophon: 'An atlas of composers and their music. Dates follow the standard biographies; catalogue numbers follow the modern thematic catalogues (BWV, K., D., Op.). Where a story is legend and not documented, the text says so.',


  heroSlides: [
    { kicker: 'I · The Baroque', file: 'File:Johannes Vermeer - Lady at the Virginal with a Gentleman, \'The Music Lesson\' - Google Art Project.jpg', artist: 'Johannes Vermeer', title: 'The Music Lesson', date: 'c. 1662–65', focus: '55% 45%' },
    { kicker: 'II · Classical', file: 'File:Jacques-Louis David, Le Serment des Horaces.jpg', artist: 'Jacques-Louis David', title: 'The Oath of the Horatii', date: '1784', focus: '40% 40%' },
    { kicker: 'III · Romanticism', file: 'File:Caspar David Friedrich - Two Men Contemplating the Moon - Google Art Project.jpg', artist: 'Caspar David Friedrich', title: 'Two Men Contemplating the Moon', date: '1819–20', focus: '60% 40%' },
    { kicker: 'IV · Fin de siècle', file: 'File:Gustav Klimt - Beethovenfries, "Die Leiden der schwachen Menschheit" und "Der wohlgerüstete Starke" (Tafel 3, linke Langwand) - 5987-3 - Österreichische Galerie Belvedere.jpg', artist: 'Gustav Klimt', title: 'Beethoven Frieze: The Well-Armed Strong One', date: '1902', focus: '72% 35%' },
    { kicker: 'V · The French Line', file: 'File:James McNeill Whistler - Nocturne en bleu et or.jpg', artist: 'James McNeill Whistler', title: 'Nocturne: Blue and Gold — Old Battersea Bridge', date: 'c. 1872–75', focus: '50% 35%' },
    { kicker: 'VI · Modernism', file: 'File:Wassily Kandinsky - Impression III (Concert) - Google Art Project.jpg', artist: 'Wassily Kandinsky', title: 'Impression III (Concert)', date: '1911', focus: '50% 50%' },
    { kicker: 'VII · After 1945', file: 'File:Ad Parnassum, Paul Klee (1932, 274).jpg', artist: 'Paul Klee', title: 'Ad Parnassum', date: '1932', focus: '50% 45%' },
  ],

  preludeTitle: 'Introduction',
  prelude: `
<p class="dropcap">The Concert Hall plays historical and openly licensed recordings, from plainchant to Boulez’s <i>Le Marteau sans maître</i>, in the order the composers were born. Short notes appear as the music reaches them, and where a score is available, the page moves with the sound. Each of the evenings below can also be played straight through without choosing individual pieces.</p>
<p>Each composer has a chapter. It gives the life, in the composer’s own words where they survive; what the music is made of; the works to start with; short examples to play; and the paintings and poems associated with the music. Every piece in the Hall has a page of its own, with all its recordings and all its notes.</p>
<aside class="note"><b>Copyright</b>Recordings first published in 1963 or later are still protected. The Hall therefore has nothing by Ligeti, Reich and several other recent composers, and its Messiaen, Britten and Boulez come from records issued before 1963. The chapters point to the labels’ and artists’ own recordings.</aside>
<p>The chapters overlap, as the periods of music do. In 1909 [[rachmaninoff|Rachmaninoff]] wrote his Third Piano Concerto for his first American tour, and [[schoenberg|Schoenberg]] wrote his Three Piano Pieces, Op. 11, which have no home key. The Web of Influence and the Map follow what passed between composers, such as a copied score, a borrowed tune, or two composers in the same city in the same year.</p>
<p>Where a story is legend, the text says whose legend it is. The sources are given on every page.</p>`,


  erasTitle: 'Bach to the present in seven chapters',
  erasLede: 'Each chapter opens with a painting from its own years and an account of the changes in harmony, in form and in the instruments themselves.',

  programmesTitle: 'Evenings',
  programmesLede: 'Each plays straight through in the Concert Hall, with the notes and, where available, the score, and stops at the end.',
  lifelinesLede: 'Every composer in the atlas on one axis. Bach died the year Haydn turned eighteen; Brahms heard the thirty-year-old Mahler conduct <i>Don Giovanni</i> in Budapest in 1890 and praised it; Rachmaninoff outlived Ravel and Mahler and died two years before Bartók.',
  timelineLede: 'Lifespans of every composer in the atlas, set against the events and artworks that framed them, drawn to scale. Schubert lived thirty-one years, Mozart thirty-five, Lili Boulanger twenty-four.',
  galleryLede: 'Paintings, drawings, prints and poems from the atlas, hung salon-style. Each one links to the music it is associated with.',

  about: {
    lede: 'An illustrated atlas of Western art music, built around playable recordings and readable scores.',
    html: `<p class="dropcap">Contrapunctus is an atlas of Western art music in seven chapters, from Bach to the present, with a prologue that reaches back to plainchant. It is built around three things, namely recordings that can be played, scores that can be read, and the writing that connects them.</p>
<h3><span class="sc">The recordings</span>Public domain and Creative Commons</h3>
<p>Every recording in the Concert Hall is in the public domain or under a Creative Commons licence, drawn from Wikimedia Commons and the Internet Archive. That gives the Hall Nikisch conducting Beethoven in 1913, Rachmaninoff playing Rachmaninoff and Stravinsky conducting <i>The Rite of Spring</i>. It also means the Hall cannot play most music written since 1945; for those composers the chapters point to the recordings worth hearing on the labels’ and artists’ own channels. Each recording has a dossier recording who played, when and where, and the evidence for each of these.</p>
<h3><span class="sc">The scores</span>Engraved in the browser</h3>
<p>Short examples are written in ABC notation and engraved in the browser with abcjs, and each has a Play button that sounds it. For some pieces a public-domain edition has been aligned with the recording bar by bar, so the Hall can turn the pages with the music.</p>
<h3><span class="sc">The writing</span>Quotations and sources</h3>
<p>Quotations name who said them, to whom and when. The notes in the Hall carry their sources under “Evidence”; the influence connections, places and recordings carry theirs in full, and <a href="sources.html">Sources &amp; method</a> explains how evidence is labelled. Where a story is legend, the text says whose legend it is.</p>`,
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
