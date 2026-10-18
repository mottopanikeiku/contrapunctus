// Concert prologue: chapter links, not substitute composer biographies.
// Image titles and licences checked with tools/art.mjs check, 17 October 2026.
// Approximate birth years place uncertain medieval lives in chronological order.
export default [
  {
    slug: 'origins-gregorian', dates: 'from c. 800', name: 'Gregorian chant', given: '', family: 'Gregorian chant',
    born: { year: 900, place: '' }, died: null,
    epithet: 'A single melodic line carries Latin liturgy.',
    portrait: { file: 'File:Codex 10127-10144 fol 90.png', caption: 'The Gradual of Mont-Blandin, c. 800: a manuscript witness, not a composer portrait.', focus: '50% 30%' },
    facts: [], anchor: 'chant', quote: null,
  },
  {
    slug: 'origins-hildegard', name: 'Hildegard of Bingen', given: 'Hildegard', family: 'of Bingen',
    born: { year: 1098, place: '' }, died: { year: 1179, place: 'Rupertsberg' },
    epithet: 'A religious community’s worship extends through unusually wide-ranging melodies.',
    portrait: { file: 'File:Hildegard von Bingen.jpg', caption: 'Hildegard receiving a vision; illumination from the Rupertsberg Scivias tradition.', focus: '50% 30%' },
    facts: [], anchor: 'chant', quote: null,
  },
  {
    slug: 'origins-machaut', name: 'Guillaume de Machaut', given: 'Guillaume', family: 'de Machaut',
    born: { year: 1300, date: 'c. 1300', place: '' }, died: { year: 1377, place: 'Reims' },
    epithet: 'Poetry and measured music share the same manuscript books.',
    portrait: { file: 'File:Machaut 1.jpg', caption: 'Nature presents Sense, Rhetoric and Music to Machaut; fourteenth-century manuscript illumination.', focus: '50% 35%' },
    facts: [], anchor: 'ars-nova', quote: null,
  },
  {
    slug: 'origins-josquin', name: 'Josquin des Prez', given: 'Josquin', family: 'des Prez',
    born: { year: 1450, date: 'c. 1450', place: '' }, died: { year: 1521, place: 'Condé-sur-l’Escaut' },
    epithet: 'Vocal imitation joins successive phrases to the words they carry.',
    portrait: { file: 'File:Josquin.jpg', caption: 'Retrospective portrait by Charles Gustave Housez, 1881; not a life portrait.', focus: '50% 25%' },
    facts: [], anchor: 'polyphony', quote: null,
  },
  {
    slug: 'origins-palestrina', name: 'Giovanni Pierluigi da Palestrina', given: 'Giovanni Pierluigi', family: 'da Palestrina',
    born: { year: 1525, date: 'c. 1525', place: 'Palestrina' }, died: { year: 1594, place: 'Rome' },
    epithet: 'Independent vocal lines meet in controlled dissonance and shared cadences.',
    portrait: { file: 'File:Retrato de Palestrina.jpg', caption: 'Portrait identified as Palestrina, anonymous, sixteenth century.', focus: '50% 25%' },
    facts: [], anchor: 'polyphony', quote: null,
  },
  {
    slug: 'origins-monteverdi', name: 'Claudio Monteverdi', given: 'Claudio', family: 'Monteverdi',
    born: { year: 1567, place: 'Cremona' }, died: { year: 1643, place: 'Venice' },
    epithet: 'Madrigal and theatre turn verbal images into changing vocal textures.',
    portrait: { file: 'File:Bernardo Strozzi - Claudio Monteverdi (c.1630).jpg', caption: 'Portrait identified as Monteverdi, Bernardo Strozzi, c. 1630.', focus: '50% 25%' },
    facts: [], anchor: 'opera', quote: null,
  },
  {
    slug: 'origins-buxtehude', name: 'Dieterich Buxtehude', given: 'Dieterich', family: 'Buxtehude',
    born: { year: 1637, date: 'c. 1637', place: '' }, died: { year: 1707, place: 'Lübeck' },
    epithet: 'The organ alternates free gestures, imitation and repeated bass patterns.',
    portrait: { file: 'File:BuxWV83 organ tablature.jpg', caption: 'Continuo tablature for O dulcis Jesu, BuxWV 83, copied by Gustav Düben; not the organ prelude heard here.', focus: '50% 30%' },
    facts: [], anchor: 'instruments', quote: null,
  },
  {
    slug: 'origins-corelli', name: 'Arcangelo Corelli', given: 'Arcangelo', family: 'Corelli',
    born: { year: 1653, place: 'Fusignano' }, died: { year: 1713, place: 'Rome' },
    epithet: 'A small string group converses with the larger ensemble.',
    portrait: { file: 'File:Arcangelo Corelli, portrait by Hugh Howard (1697).jpg', caption: 'Arcangelo Corelli, Hugh Howard, 1697–98.', focus: '50% 25%' },
    facts: [], anchor: 'continuo', quote: null,
  },
  {
    slug: 'origins-purcell', name: 'Henry Purcell', given: 'Henry', family: 'Purcell',
    born: { year: 1659, place: 'Westminster' }, died: { year: 1695, place: 'Westminster' },
    epithet: 'The theatre’s dances and songs grow from recurring bass patterns.',
    portrait: { file: 'File:John Closterman (1660-1711) (by or after) - Henry Purcell - NPG 1352 - National Portrait Gallery.jpg', caption: 'Henry Purcell, by or after John Closterman, 1695; National Portrait Gallery.', focus: '50% 25%' },
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
