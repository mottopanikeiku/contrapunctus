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
  intro: '<i>Pange lingua gloriosi corporis mysterium</i> is a traditional plainchant hymn in six Latin stanzas on the bread and wine of the Eucharist. It is monophonic, a single melody with no separate accompaniment, and is sung here by Gareth Hughes.',

  sections: [
    { t: 0, label: 'A · Solo voice, Latin hymn', m: 'A', mNote: 'Six-line stanzas share one melody' },
    { t: 64, label: 'A′ · More verses of the same tune', m: 'A′', mNote: 'New Latin words fill the familiar phrases' },
    { t: 129, label: 'A″ · Closing stanzas, same melody', m: 'A″', mNote: 'The same voice sings the final stanzas to the same melody.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Gareth Hughes, solo voice', text: 'Gareth Hughes sings the traditional Roman melody in Mode III, also called Phrygian. He sings unaccompanied.', basis: 'documented', precision: 'passage', evidence: 'The recording description identifies Gareth Hughes and Mode III. The hymn’s music history identifies this as the Roman Phrygian tune. https://commons.wikimedia.org/wiki/File:Pange_Lingua_Latin_in_Latin.ogg ; https://en.wikipedia.org/wiki/Pange_lingua_gloriosi_corporis_mysterium' },
    { t: 34, kind: 'world', title: 'Aquinas’s text, stanzas three and four', text: 'Thomas Aquinas’s thirteenth-century hymn describes Christ at table with the twelve apostles, giving himself to them as food with his own hands. The Latin text centres on bread, flesh, wine and blood.', basis: 'documented', precision: 'passage', evidence: 'Aquinas’s text, especially stanzas three and four; Hugh Henry, “Pange Lingua Gloriosi”, The Catholic Encyclopedia (1911), section on the hymn of Aquinas. https://www.newadvent.org/cathen/11441c.htm ; https://en.wikipedia.org/wiki/Pange_lingua_gloriosi_corporis_mysterium' },
    { t: 64, kind: 'form', title: 'Strophic form, six stanzas', text: 'Each of the six stanzas has six lines and is sung to the same tune. The Latin text turns first to the body and blood, then to Christ’s birth, the Last Supper and the act of worship.', basis: 'general', precision: 'passage', evidence: 'The complete six-stanza Latin text and traditional chant setting are reproduced at https://en.wikipedia.org/wiki/Pange_lingua_gloriosi_corporis_mysterium ; Hughes’s recording uses the traditional Latin text.' },
    { t: 136, kind: 'world', title: 'Text of the <i>Tantum ergo</i>', text: 'The final two stanzas are also sung on their own as <i>Tantum ergo</i> at Benediction. In them Aquinas calls on the worshippers to kneel, and he ends with praise of the Father, Son and Holy Spirit.', basis: 'documented', precision: 'passage', evidence: 'Hugh Henry, “Pange Lingua Gloriosi”, The Catholic Encyclopedia (1911), on the separate use of the last two stanzas; the Latin text supplies their subjects. https://www.newadvent.org/cathen/11441c.htm' },
  ],
  transitions: [],
};
