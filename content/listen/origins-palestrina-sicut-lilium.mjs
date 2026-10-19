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
  intro: 'Palestrina’s five-voice motet <i>Sicut lilium inter spinas</i> sets the image of a lily among thorns in long, overlapping phrases, with two tenor parts in the middle of the texture. The Tudor Consort sings.',

  sections: [
    { t: 0, label: 'A · Lily among thorns, imitative entries', m: 'A', mNote: 'The upper voice begins; four other voices take up its phrase.' },
    { t: 96, label: 'B · My beloved among the daughters', m: 'B', mNote: 'Inner voices enter while the upper voice holds its note' },
    { t: 214, label: 'C · Alleluia passes through the choir', m: 'C', mNote: 'Overlapping Alleluias lead to the five-part close' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Opening entries, five voices', text: 'The highest voice begins alone. The alto takes up its phrase, then the tenor; the bass and second tenor enter later. Each voice begins “Sicut lilium” while another is still singing the line.', basis: 'score-proportion', precision: 'passage', evidence: 'Palestrina’s Werke, volume I, edited by Theodor de Witt (Breitkopf & Härtel, 1862), No. 21, pp. 90–91: the five opening entries. https://s9.imslp.org/files/imglnks/usimg/f/f5/IMSLP55722-PMLP115176-Tomus_I.pdf' },
    { t: 35, kind: 'life', title: 'First book of motets, Rome, 1569', text: 'This five-voice motet comes from Palestrina’s first book of motets for five, six and seven voices, printed in Rome in 1569. John Milsom suggested from its style that it may be a student work, though he found in it “all the poise and polish” for which Palestrina’s music is famous.', basis: 'documented', precision: 'passage', evidence: 'Title page of the 1569 print (Rome, heirs of Valerio and Aloisio Dorico), reproduced at the head of Palestrina’s Werke, vol. I (Breitkopf & Härtel, 1862): <i>Liber primus … Motettorum quae partim quinis, partim senis, partim septenis vocibus concinantur</i>; this motet is No. 21 there. John Milsom on this five-voice <i>Sicut lilium</i>, the source of “poise and polish” and of the student-work suggestion: https://www.hyperion-records.co.uk/dw.asp?dc=W15060_GBLLH1645012 . Peter Phillips confirms that the Mass <i>Sicut lilium</i> is based on the motet from the First Book of Motets of 1569, and the Tudor Consort album pairs the motet with that Mass: https://www.hyperion-records.co.uk/dw.asp?dc=W15061_810202' },
    { t: 70, kind: 'world', title: 'Text from the Song of Songs', text: 'The words “Sicut lilium inter spinas” (“As a lily among thorns”) come from the Song of Songs. In the text, the beloved stands among the daughters of Adam as the flower stands among thorns.', basis: 'documented', precision: 'passage', evidence: 'The Latin text appears in the 1862 score, No. 21, pp. 90–93. John Milsom identifies its Song of Songs source in his programme note: https://www.hyperion-records.co.uk/dw.asp?dc=W15060_GBLLH1645012 . Translation ours.' },
    { t: 96, kind: 'music', title: 'Alto and tenor, “sic amica mea”', text: 'The alto and tenor sing the next words, “sic amica mea” — “so is my beloved”. Above them, the highest voice holds the end of its earlier phrase, so that for a while the choir sings both halves of the comparison at once.', basis: 'score-proportion', precision: 'passage', evidence: 'Palestrina’s Werke, volume I (1862), No. 21, p. 91, bottom system: altus and tenor begin sic amica mea beneath the cantus’s sustained spinas. Translation ours; the section boundary locates the passage.' },
    { t: 175, kind: 'world', title: 'Parody Mass on the motet', text: 'Palestrina used this motet again in his <i>Missa Sicut lilium inter spinas</i>. The opening phrase of the motet becomes the beginning of the Kyrie, with the five voices now setting the words of the Mass.', basis: 'documented', precision: 'passage', evidence: 'Peter Phillips describes the motet’s opening imitations and their transfer to the first Kyrie: https://www.hyperion-records.co.uk/dw.asp?dc=W15061_810202 .' },
    { t: 214, kind: 'form', title: 'Closing Alleluia', text: 'The closing Alleluia begins in the tenor and passes through the choir, with short running notes set against long held ones. The voices end at different times. The tenor reaches its last note while the other parts are still singing.', basis: 'score-proportion', precision: 'passage', evidence: 'Palestrina’s Werke, volume I (1862), No. 21, pp. 93–94: tenor begins Alleluia; the final system holds the tenor’s last note beneath the continuing parts.' },
  ],
  transitions: [
    { id: 'central-text-phrases', title: 'New words beneath a held note', from: 'A · Lily among thorns, imitative entries', to: 'B · My beloved among the daughters', at: { t: 96 }, span: [82, 110], how: '<p>The cantus holds the last syllable of <i>spinas</i>. Beneath it, the alto and tenor begin <i>sic amica mea</i>. The second tenor follows, and the bass enters again after a rest.</p>', devices: ['elision', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: 'Palestrina’s Werke, volume I, edited by Theodor de Witt (1862), No. 21, p. 91, bottom system.' },
    { id: 'closing-acclamation', title: 'The tenor begins Alleluia', from: 'B · My beloved among the daughters', to: 'C · Alleluia passes through the choir', at: { t: 214 }, span: [200, 230], how: '<p>The tenor begins <i>Alleluia</i> while the bass is still holding the end of <i>Adae</i>. The second tenor enters next, then the alto and the highest voice. The word passes from part to part in shorter notes, and the bass enters last.</p>', devices: ['elision', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: 'Palestrina’s Werke, volume I (1862), No. 21, p. 93, middle system, continuing to p. 94.' },
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
