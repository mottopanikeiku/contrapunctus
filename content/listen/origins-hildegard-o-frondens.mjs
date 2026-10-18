export default {
  id: 'origins-hildegard-o-frondens',
  composer: 'origins-hildegard',
  order: 1,
  work: 'O frondens virga',
  movement: 'Antiphon for the Virgin',
  year: '12th century; exact date unknown',
  key: 'D mode in the manuscript',
  forces: 'Unaccompanied solo voice',
  performers: 'Makemi, voice',
  recorded: '2006; live performance',
  source: { file: 'File:O frondens 2.ogg' },
  intro: 'Hildegard’s Marian antiphon makes a complete setting from one melodic line. Follow the balance between syllabic declamation and the short groups of notes that extend a vowel.',
  question: 'How does Hildegard shape a prayer without adding a second voice?',

  sections: [
    { t: 0, label: 'Marian antiphon · continuous solo line', m: 'A', mNote: 'one complete prayer; no internal text boundary has been aligned' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'One voice, several note-shapes', text: 'Much of this antiphon gives each syllable one note, but short groups of notes sometimes prolong a vowel. Listen for those changes of pace within the single line, without an accompanying part to mark a beat.', basis: 'documented', precision: 'passage', evidence: 'Beverly Lomer’s Hildegard Society commentary describes a primarily syllabic setting with neumatic elements and short melismas. Makemi’s source documents a solo live performance; no individual sung word is timed. https://www.hildegard-society.org/2014/10/o-frondens-virga-antiphon.html' },
    { t: 32, kind: 'world', title: 'A particular manuscript witness', text: '<i>O frondens virga</i> survives in the Dendermonde manuscript, on folio 155r, but not in the expanded Riesencodex collection. It is a psalm antiphon for the Virgin, not a number from Hildegard’s drama <i>Ordo virtutum</i>.', basis: 'documented', precision: 'passage', evidence: 'The Hildegard Society identifies the genre and manuscript witness and discusses the absence from the Riesencodex. This corrects the recording page’s erroneous dramatic attribution; the reason for the omission is not established.' },
    { t: 64, kind: 'listen', title: 'A melodic point of rest', text: 'Across the prayer, notice how phrases return to a small number of anchoring notes. In the manuscript, D outlines most phrases and A provides a secondary centre: these are relationships within the melody, not chords sounded beneath it.', basis: 'documented', precision: 'passage', evidence: 'Lomer identifies D mode and the phrase-defining D and A in the manuscript. These are written modal reference points, not an absolute-pitch claim about Makemi’s performance; the report’s E-minor estimate is not used to infer tuning or a transposition.' },
  ],
  transitions: [],
};
