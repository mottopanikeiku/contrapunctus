export default {
  id: 'origins-hildegard-o-frondens',
  composer: 'origins-hildegard',
  order: 1,
  short: true,
  work: 'O frondens virga',
  movement: 'Antiphon for the Virgin',
  year: '12th century; exact date unknown',
  key: 'D mode in the manuscript',
  monophonic: true,  // one melodic line: the hall shows no chord label
  forces: 'Unaccompanied solo voice',
  performers: 'Makemi, voice',
  recorded: '2006, live',
  source: { file: 'File:O frondens 2.ogg' },
  intro: 'Hildegard’s antiphon <i>O frondens virga</i> is a monophonic prayer to the Virgin, a single melody without separate accompaniment, in which Mary is greeted as a leafy branch and asked to lift the weak. It is sung here by Makemi.',

  sections: [
    { t: 0, label: 'A · Voice greets the Virgin', m: 'A', mNote: 'A leafy branch, the dawn and an outstretched hand.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Syllabic setting with short melismas', text: 'Makemi sings alone. Most syllables have a single note, and here and there Hildegard sets a vowel to a small group of notes.', basis: 'documented', precision: 'passage', evidence: 'Beverly Lomer describes the setting as primarily syllabic, with neumatic groups and short melismas. The recording source identifies Makemi’s live performance. https://www.hildegard-society.org/2014/10/o-frondens-virga-antiphon.html ; https://commons.wikimedia.org/wiki/File:O_frondens_2.ogg' },
    { t: 32, kind: 'world', title: 'Text of the antiphon', text: 'Hildegard’s twelfth-century prayer opens with Mary standing like a leafy branch in the dawn. In the closing lines the singers ask to be freed from their bad habits and ask her to “stretch out your hand to raise us up”.', basis: 'documented', precision: 'passage', evidence: 'Our translation of Hildegard’s Latin, “atque manum tuam porrige ad erigendum nos”, in the Marian antiphon preserved in the Dendermonde manuscript, fol. 155r. Text and commentary: https://www.hildegard-society.org/2014/10/o-frondens-virga-antiphon.html' },
    { t: 64, kind: 'music', title: 'Mode and range', text: 'Hildegard built the written melody around D, with A as a second resting place. The line reaches from the A below its home note to the D an octave above it.', basis: 'general', precision: 'passage', evidence: 'Beverly Lomer identifies D mode, the range A–d′ and the phrase-defining notes D and A in the manuscript. These are the written pitches; the recording’s pitch is unspecified. https://www.hildegard-society.org/2014/10/o-frondens-virga-antiphon.html' },
  ],
  transitions: [],
};
