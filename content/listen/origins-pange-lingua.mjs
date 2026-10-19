export default {
  id: 'origins-pange-lingua',
  composer: 'origins-gregorian',
  order: 1,
  work: 'Pange lingua gloriosi corporis mysterium',
  movement: 'Traditional plainchant hymn',
  year: 'Medieval melody; exact date unknown',
  key: 'Mode III',
  monophonic: true,
  forces: 'Unaccompanied solo voice',
  performers: 'Gareth Hughes, voice',
  recorded: '14 March 2005',
  source: { file: 'File:Pange Lingua Latin in Latin.ogg' },
  intro: 'Monophony means one melody without a separate accompaniment. Gareth Hughes sings <i>Pange lingua</i>, six Latin stanzas about the bread and wine of the Eucharist.',

  sections: [
    { t: 0, label: 'A · Solo voice, Latin hymn', m: 'A', mNote: 'Six-line stanzas share one melody' },
    { t: 64, label: 'A′ · More verses of the same tune', m: 'A′', mNote: 'New Latin words fill the familiar phrases' },
    { t: 129, label: 'A″ · The hymn’s closing stanzas', m: 'A″', mNote: 'The same voice and melody carry the final prayer' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Gareth Hughes, alone', text: 'Hughes sings the traditional Roman melody in Mode III, also called Phrygian. The voice carries everything: the rise of each phrase, its resting note and the silence before the next breath.', basis: 'documented', precision: 'passage', evidence: 'The recording description identifies Gareth Hughes and Mode III. The hymn’s music history identifies this as the Roman Phrygian tune. https://commons.wikimedia.org/wiki/File:Pange_Lingua_Latin_in_Latin.ogg ; https://en.wikipedia.org/wiki/Pange_lingua_gloriosi_corporis_mysterium' },
    { t: 34, kind: 'world', title: 'Aquinas at the supper table', text: 'Thomas Aquinas’s thirteenth-century hymn brings Christ to the table with the twelve apostles. He gives himself to them as food with his own hands. The Latin makes bread, flesh, wine and blood the centre of the prayer.', basis: 'documented', precision: 'passage', evidence: 'Aquinas’s text, especially stanzas three and four; Hugh Henry, “Pange Lingua Gloriosi”, The Catholic Encyclopedia (1911), section on the hymn of Aquinas. https://www.newadvent.org/cathen/11441c.htm ; https://en.wikipedia.org/wiki/Pange_lingua_gloriosi_corporis_mysterium' },
    { t: 64, kind: 'form', title: 'One tune, six stanzas', text: 'Each stanza has six lines, and each takes the same tune. The Latin changes beneath the familiar notes: first the body and blood, then Christ’s birth, the Last Supper and the act of worship.', basis: 'general', precision: 'passage', evidence: 'The complete six-stanza Latin text and traditional chant setting are reproduced at https://en.wikipedia.org/wiki/Pange_lingua_gloriosi_corporis_mysterium ; Hughes’s recording uses the traditional Latin text.' },
    { t: 136, kind: 'world', title: 'The words of Tantum ergo', text: 'The final two stanzas have a life of their own as <i>Tantum ergo</i>, sung at Benediction. Aquinas brings the worshippers to their knees, then ends with praise of the Father, Son and Holy Spirit.', basis: 'documented', precision: 'passage', evidence: 'Hugh Henry, “Pange Lingua Gloriosi”, The Catholic Encyclopedia (1911), on the separate use of the last two stanzas; the Latin text supplies their subjects. https://www.newadvent.org/cathen/11441c.htm' },
  ],
  transitions: [],
};
