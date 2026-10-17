export default {
  kicker: 'An illustrated atlas of composers · Bach to the present',
  tagline: 'Three centuries of Western art music, told through the scores themselves — how the harmony works, where the forms came from, and the paintings and poems that kept the music company.',
  description: 'An illustrated atlas of classical composers from Bach to the present: technical listening notes, playable score examples, origins of musical forms, and the paintings and poems that share their world.',
  colophon: 'A listener’s atlas built for reading slowly. Dates follow the standard biographies; catalogue numbers follow the modern thematic catalogues (BWV, K., D., Op.). Where a story is legend rather than record, the text says so.',

  readerPaths: [
    {
      title: 'New to this music',
      text: 'Start with a recording. Follow one melody, then put a name to what you hear.',
      links: [['Enter the concert hall', 'hall.html'], ['A melody returns · listening route', 'routes.html#returns'], ['Short pieces for a first listen', 'routes.html#short'], ['Look up a musical term', 'glossary.html']],
    },
    {
      title: 'I play or read music',
      text: 'Compare the written notes with the sound: independent lines, harmonic direction and altered returns.',
      links: [['Open the Workshop', 'workshop.html'], ['Scores and alignments', 'sources.html#scores'], ['Compare passages in the Return Lab', 'return-lab/index.html'], ['How pieces are joined', 'workshop.html#joins']],
    },
    {
      title: 'Historian or archivist',
      text: 'Separate a documented date from an inference. Follow the provenance of a recording or cite a chapter.',
      links: [['Recording dossiers and sources', 'sources.html#dossiers'], ['The historical timeline', 'timeline.html'], ['How claims are labelled', 'sources.html#method'], ['Download the recording register', 'sources.html#downloads'], ['Cite a page', 'sources.html#cite']],
    },
    {
      title: 'The Web of Influence',
      featured: true,
      text: 'Follow what passed between composers, poets and painters: a copied score, a borrowed theme, a text set to music. Each connection opens its evidence.',
      links: [['Explore the Web of Influence', 'influence.html'], ['Trace Bach’s inheritance', 'influence.html#node-bach']],
    },
  ],

  heroSlides: [
    { kicker: 'I · The Baroque', file: 'File:Johannes Vermeer - Lady at the Virginal with a Gentleman, \'The Music Lesson\' - Google Art Project.jpg', artist: 'Johannes Vermeer', title: 'The Music Lesson', date: 'c. 1662–65', focus: '55% 45%' },
    { kicker: 'II · Classical', file: 'File:Jacques-Louis David, Le Serment des Horaces.jpg', artist: 'Jacques-Louis David', title: 'The Oath of the Horatii', date: '1784', focus: '40% 40%' },
    { kicker: 'III · Romanticism', file: 'File:Caspar David Friedrich - Two Men Contemplating the Moon - Google Art Project.jpg', artist: 'Caspar David Friedrich', title: 'Two Men Contemplating the Moon', date: '1819–20', focus: '60% 40%' },
    { kicker: 'IV · Fin de siècle', file: 'File:Gustav Klimt - Beethovenfries, "Die Leiden der schwachen Menschheit" und "Der wohlgerüstete Starke" (Tafel 3, linke Langwand) - 5987-3 - Österreichische Galerie Belvedere.jpg', artist: 'Gustav Klimt', title: 'Beethoven Frieze: The Well-Armed Strong One', date: '1902', focus: '72% 35%' },
    { kicker: 'V · The French Line', file: 'File:James McNeill Whistler - Nocturne en bleu et or.jpg', artist: 'James McNeill Whistler', title: 'Nocturne: Blue and Gold — Old Battersea Bridge', date: 'c. 1872–75', focus: '50% 35%' },
    { kicker: 'VI · Modernism', file: 'File:Wassily Kandinsky - Impression III (Concert) - Google Art Project.jpg', artist: 'Wassily Kandinsky', title: 'Impression III (Concert)', date: '1911', focus: '50% 50%' },
    { kicker: 'VII · After 1945', file: 'File:Ad Parnassum, Paul Klee (1932, 274).jpg', artist: 'Paul Klee', title: 'Ad Parnassum', date: '1932', focus: '50% 45%' },
  ],

  preludeTitle: 'How to use this atlas',
  prelude: `
<p class="dropcap">Western art music is a written tradition. A Bach fugue, a Mahler adagio and a Ligeti étude survive because someone wrote them down in a notation precise enough that a stranger, centuries later, can make them sound again. This atlas leans on that fact. Each composer’s page says what the music is made of — which chords, which forms, which instruments in which registers — and shows short examples engraved in the browser, which you can play.</p>
<aside class="note"><b>Reading the examples</b>Notation is rendered from text. Press <i>Play</i> on an example to hear its synthesised pitches and rhythms while the notes light up. Captions distinguish quotations from schematics and identify any reduction or transposition.</aside>
<p>The chapters run from the late Baroque to the present in seven movements. They overlap, because styles do: [[rachmaninoff|Rachmaninoff]] was writing lush tonal concertos in the same decade that [[schoenberg|Schoenberg]] was abandoning the key signature, and [[ravel|Ravel]] and [[prokofiev|Prokofiev]] were both, in their different ways, neoclassicists looking back at the eighteenth century while being thoroughly modern about it.</p>
<p>Alongside the music sit the other arts — the painting Debussy put on the cover of <i>La Mer</i>, the woodcut behind the funeral march in Mahler’s First, the Böcklin canvas Rachmaninoff saw in black and white and turned into a tone poem. These are not decorations. Composers read, looked at pictures and argued with painters, and many of their works began as a response to something they saw or read.</p>
<aside class="note"><b>Where to start</b>If you know nothing, begin with <a href="origins.html">Origins</a>: from Pythagoras’s monochord to the figured bass Bach inherited. If you know the repertoire but not the theory, <a href="workshop.html">The Workshop</a> explains counterpoint, sonata form, the Tristan chord, the octatonic scale and the twelve-tone row with examples.</aside>
<p>Every page ends with recordings worth finding, and a lineage: who the composer learned from, and whom they taught or provoked. Follow those threads and the three centuries become one long conversation.</p>`,

  fourTitle: 'Mahler, Rachmaninoff, Ravel, Prokofiev',
  fourLede: 'Four composers born within thirty-one years of one another, given extended portraits here. A symphonist who wanted the symphony to contain the world; a pianist whose melodies grew out of Orthodox chant and church bells; a precisionist who called himself “artificial by nature”; and a modernist who never stopped writing tunes.',

  erasTitle: 'Three centuries in seven movements',
  erasLede: 'Each chapter opens with a painting from its own years and a short account of what changed in the music — in harmony, in form, in the instruments themselves.',

  timelineLede: 'Lifespans of every composer in the atlas, set against the events and artworks that framed them. Bars are drawn to scale: watch how short some lives were — Schubert, Mozart, Lili Boulanger — and how much fits into them.',
  galleryLede: 'Paintings, drawings, prints and poems from the atlas, gathered in a salon hang. Each object links to the music it accompanies.',

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
