export default {
  id: 'origins-palestrina-sicut-lilium',
  composer: 'origins-palestrina',
  order: 1,
  work: 'Sicut lilium inter spinas',
  movement: 'Motet',
  year: '1569 publication',
  key: '',
  forces: 'Five-part unaccompanied vocal ensemble',
  performers: 'The Tudor Consort; Michael Stewart, director',
  recorded: 'Live recording',
  source: { file: 'File:The Tudor Consort - 01 - Palestrina - Sicut lilium inter spinas.ogg' },
  intro: 'Five voices turn a single image — a lily among thorns — into long, overlapping phrases. The Tudor Consort sings Palestrina’s motet, with two tenor parts warming the middle of the choir.',

  sections: [
    { t: 0, label: 'A · The lily among thorns', m: 'A', mNote: 'The upper voice begins; four others take up its phrase' },
    { t: 96, label: 'B · My beloved among the daughters', m: 'B', mNote: 'Inner voices begin while the upper voice holds its note' },
    { t: 214, label: 'C · Alleluia passes through the choir', m: 'C', mNote: 'Overlapping Alleluias lead to the five-part close' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'One voice becomes five', text: 'The highest voice begins alone. The alto takes up its phrase, then the tenor; the bass and second tenor enter later. Each singer starts “Sicut lilium” while another is still carrying the line forward.', basis: 'score-proportion', precision: 'passage', evidence: 'Palestrina’s Werke, volume I, edited by Theodor de Witt (Breitkopf & Härtel, 1862), No. 21, pp. 90–91: the five opening entries. https://s9.imslp.org/files/imglnks/usimg/f/f5/IMSLP55722-PMLP115176-Tomus_I.pdf' },
    { t: 70, kind: 'world', title: 'A lily among thorns', text: 'The Song of Songs supplies the image: “Sicut lilium inter spinas” — “As a lily among thorns”. The beloved stands among the daughters of Adam as the flower stands among thorns.', basis: 'documented', precision: 'passage', evidence: 'The Latin text appears in the 1862 score, No. 21, pp. 90–93. John Milsom identifies its Song of Songs source in his programme note: https://www.hyperion-records.co.uk/dw.asp?dc=W15060_GBLLH1645012 . Translation ours.' },
    { t: 96, kind: 'music', title: 'The middle voices speak', text: 'The alto and tenor carry the next words, “sic amica mea” — “so is my beloved”. Above them, the highest voice holds the end of its earlier phrase. For a while the choir sings both halves of the comparison at once.', basis: 'score-proportion', precision: 'passage', evidence: 'Palestrina’s Werke, volume I (1862), No. 21, p. 91, bottom system: altus and tenor begin sic amica mea beneath the cantus’s sustained spinas. Translation ours; the section boundary locates the passage.' },
    { t: 175, kind: 'world', title: 'The motet becomes a Mass', text: 'Palestrina uses this motet again in his <i>Missa Sicut lilium inter spinas</i>. Its opening phrase becomes the beginning of the Kyrie: the five voices that sing of a beloved now ask for mercy.', basis: 'documented', precision: 'passage', evidence: 'Peter Phillips describes the motet’s opening imitations and their transfer to the first Kyrie: https://www.hyperion-records.co.uk/dw.asp?dc=W15061_810202 .' },
    { t: 214, kind: 'form', title: 'Alleluia, voice by voice', text: 'The closing Alleluia begins in the tenor and spreads through the choir. Short running notes mingle with long held ones. Even near the end, the voices finish at different times: the tenor reaches its last note while the others still sing.', basis: 'score-proportion', precision: 'passage', evidence: 'Palestrina’s Werke, volume I (1862), No. 21, pp. 93–94: tenor begins Alleluia; the final system holds the tenor’s last note beneath the continuing parts.' },
  ],
  transitions: [
    { id: 'central-text-phrases', title: 'New words beneath a held note', from: 'A · The lily among thorns', to: 'B · My beloved among the daughters', at: { t: 96 }, span: [82, 110], how: '<p>The cantus sustains the last syllable of <i>spinas</i>. Beneath it, the alto and tenor begin <i>sic amica mea</i>; the second tenor follows, and the bass starts again after a rest. Palestrina keeps the old phrase sounding while the new one takes root in the middle of the choir.</p>', devices: ['elision', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: 'Palestrina’s Werke, volume I, edited by Theodor de Witt (1862), No. 21, p. 91, bottom system.' },
    { id: 'closing-acclamation', title: 'The tenor begins Alleluia', from: 'B · My beloved among the daughters', to: 'C · Alleluia passes through the choir', at: { t: 214 }, span: [200, 230], how: '<p>The tenor starts <i>Alleluia</i> while the bass still holds the end of <i>Adae</i>. The second tenor answers, followed by the alto and highest voice. Shorter notes carry the word from part to part; the bass joins last.</p>', devices: ['elision', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: 'Palestrina’s Werke, volume I (1862), No. 21, p. 93, middle system, continuing to p. 94.' },
  ],
  orchestra: {
    ensemble: ['chorus'],
    basis: 'documented',
    source: { title: 'Palestrina, Motettorum, Liber 1, No. 21, ed. Theodor de Witt (1862)', url: 'https://s9.imslp.org/files/imglnks/usimg/f/f5/IMSLP55722-PMLP115176-Tomus_I.pdf', locator: 'Printed pp. 90–94 (PDF pp. 104–108). Five unaccompanied parts: cantus, altus, tenor, quintus (second tenor) and bassus.' },
    timeline: [
      { t: 0, playing: ['chorus'], lead: ['chorus'], note: 'The highest voice begins alone; alto, tenor, bass and second tenor take up its phrase.' },
    ],
  },
};
