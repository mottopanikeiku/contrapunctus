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
  intro: 'Monophony means one melody without a separate accompaniment. In this prayer, sung by Makemi, Hildegard greets Mary as a leafy branch and asks her to lift the weak.',

  sections: [
    { t: 0, label: 'A · A voice greets the Virgin', m: 'A', mNote: 'A leafy branch, the dawn, an outstretched hand' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'A syllable, then several notes', text: 'Makemi sings alone. Most syllables have a single note; now and then Hildegard lets a vowel carry a little group of notes. The prayer fits into one voice, with room for the words to open out.', basis: 'documented', precision: 'passage', evidence: 'Beverly Lomer describes the setting as primarily syllabic, with neumatic groups and short melismas. The recording source identifies Makemi’s live performance. https://www.hildegard-society.org/2014/10/o-frondens-virga-antiphon.html ; https://commons.wikimedia.org/wiki/File:O_frondens_2.ogg' },
    { t: 32, kind: 'world', title: 'The branch and the hand', text: 'Hildegard’s twelfth-century prayer begins with Mary standing like a leafy branch in the dawn. It ends with a human gesture: “stretch out your hand to raise us up”. The singers ask to be freed from their bad habits.', basis: 'documented', precision: 'passage', evidence: 'Our translation of Hildegard’s Latin, “atque manum tuam porrige ad erigendum nos”, in the Marian antiphon preserved in the Dendermonde manuscript, fol. 155r. Text and commentary: https://www.hildegard-society.org/2014/10/o-frondens-virga-antiphon.html' },
    { t: 64, kind: 'music', title: 'D and A', text: 'Hildegard builds the written melody around D, with A as a second resting place. The line reaches from the A below its home note to the D an octave above it. A single singer has all that space to cross.', basis: 'general', precision: 'passage', evidence: 'Beverly Lomer identifies D mode, the range A–d′ and the phrase-defining notes D and A in the manuscript. These are the written pitches; the recording’s pitch is unspecified. https://www.hildegard-society.org/2014/10/o-frondens-virga-antiphon.html' },
  ],
  transitions: [],
};
