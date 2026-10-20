// Concert prologue: chapter links, not substitute composer biographies.
// Image titles and licences checked with tools/art.mjs check, 17 October 2026.
// Approximate birth years place uncertain medieval lives in chronological order.
export default [
  {
    slug: 'origins-gregorian', dates: 'from c. 800', name: 'Gregorian chant', given: '', family: 'Gregorian chant',
    born: { year: 900, place: '' }, died: null,
    epithet: 'A single unaccompanied melody setting the words of worship.',
    portrait: { file: 'File:Codex 10127-10144 fol 90.png', caption: 'The opening page of the Mont-Blandin chant book, c. 800.', focus: '50% 30%' },
    facts: [], anchor: 'chant', quote: null,
  },
  {
    slug: 'origins-hildegard', name: 'Hildegard of Bingen', given: 'Hildegard', family: 'of Bingen',
    born: { year: 1098, place: '' }, died: { year: 1179, place: 'Rupertsberg' },
    epithet: 'Composer of chants with wide melodic leaps, written for the women of Rupertsberg.',
    portrait: { file: 'File:Hildegard von Bingen.jpg', caption: 'Hildegard receives a vision in an illumination from the Rupertsberg manuscript tradition.', focus: '50% 30%' },
    facts: [], anchor: 'chant', quote: null,
  },
  {
    slug: 'origins-machaut', name: 'Guillaume de Machaut', given: 'Guillaume', family: 'de Machaut',
    born: { year: 1300, date: 'c. 1300', place: '' }, died: { year: 1377, place: 'Reims' },
    epithet: 'A canon of Reims who wrote love songs as well as a Mass.',
    portrait: { file: 'File:Machaut 1.jpg', caption: 'Nature brings Machaut her gifts of Sense, Rhetoric and Music; a fourteenth-century illumination.', focus: '50% 35%' },
    facts: [], anchor: 'ars-nova', quote: null,
  },
  {
    slug: 'origins-josquin', name: 'Josquin des Prez', given: 'Josquin', family: 'des Prez',
    born: { year: 1450, date: 'c. 1450', place: '' }, died: { year: 1521, place: 'Condé-sur-l’Escaut' },
    epithet: 'A greeting to Mary passes through four voices.',
    portrait: { file: 'File:Josquin.jpg', caption: 'Josquin as imagined by Charles Gustave Housez in 1881.', focus: '50% 25%' },
    facts: [], anchor: 'polyphony', quote: null,
  },
  {
    slug: 'origins-palestrina', name: 'Giovanni Pierluigi da Palestrina', given: 'Giovanni Pierluigi', family: 'da Palestrina',
    born: { year: 1525, date: 'c. 1525', place: 'Palestrina' }, died: { year: 1594, place: 'Rome' },
    epithet: 'Six voices sing the words of the Mass.',
    portrait: { file: 'File:Retrato de Palestrina.jpg', caption: 'An anonymous sixteenth-century portrait, identified as Palestrina.', focus: '50% 25%' },
    facts: [], anchor: 'polyphony', quote: null,
  },
  {
    slug: 'origins-monteverdi', name: 'Claudio Monteverdi', given: 'Claudio', family: 'Monteverdi',
    born: { year: 1567, place: 'Cremona' }, died: { year: 1643, place: 'Venice' },
    epithet: 'Orpheus sings to Charon, the ferryman of the underworld.',
    portrait: { file: 'File:Bernardo Strozzi - Claudio Monteverdi (c.1630).jpg', caption: 'Bernardo Strozzi’s portrait, identified as Monteverdi, c. 1630.', focus: '50% 25%' },
    facts: [], anchor: 'opera', quote: null,
  },
  {
    slug: 'origins-buxtehude', name: 'Dieterich Buxtehude', given: 'Dieterich', family: 'Buxtehude',
    born: { year: 1637, date: 'c. 1637', place: '' }, died: { year: 1707, place: 'Lübeck' },
    epithet: 'Organist at Lübeck, whom Bach walked north to hear.',
    portrait: { file: 'File:BuxWV83 organ tablature.jpg', caption: 'Gustav Düben’s copy of an organ accompaniment by Buxtehude, written in tablature.', focus: '50% 30%' },
    facts: [], anchor: 'instruments', quote: null,
  },
  {
    slug: 'origins-corelli', name: 'Arcangelo Corelli', given: 'Arcangelo', family: 'Corelli',
    born: { year: 1653, place: 'Fusignano' }, died: { year: 1713, place: 'Rome' },
    epithet: 'Two violins and a cello play as a separate group from the larger string band.',
    portrait: { file: 'File:Arcangelo Corelli, portrait by Hugh Howard (1697).jpg', caption: 'Hugh Howard’s portrait of Corelli, 1697–98.', focus: '50% 25%' },
    facts: [], anchor: 'continuo', quote: null,
  },
  {
    slug: 'origins-purcell', name: 'Henry Purcell', given: 'Henry', family: 'Purcell',
    born: { year: 1659, place: 'Westminster' }, died: { year: 1695, place: 'Westminster' },
    epithet: 'Dido sings her farewell above a bass that falls by semitones.',
    portrait: { file: 'File:John Closterman (1660-1711) (by or after) - Henry Purcell - NPG 1352 - National Portrait Gallery.jpg', caption: 'Purcell, by or after the studio of John Closterman, c. 1695; National Portrait Gallery.', focus: '50% 25%' },
    facts: [], anchor: 'opera', quote: null,
  },
];

export const era = {
  hero: {
    file: 'File:Ghent Altarpiece - Singing Angels (left).jpg',
    artist: 'Hubert and Jan van Eyck',
    title: 'The Ghent Altarpiece: Singing Angels, 1432',
  },
};
