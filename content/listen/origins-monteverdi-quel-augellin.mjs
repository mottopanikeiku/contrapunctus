export default {
  id: 'origins-monteverdi-quel-augellin',
  composer: 'origins-monteverdi',
  order: 1,
  short: true,
  work: 'Quel augellin che canta',
  movement: 'Madrigals, Book IV · No. 13, SV 87',
  year: '1603 publication',
  key: '',
  forces: 'Five-part unaccompanied vocal ensemble',
  performers: 'The Tudor Consort; Alastair Carey, director',
  recorded: '2 November 2005; Parroquial Church, Ordizia, Spain',
  source: { file: 'File:The Tudor Consort - 05 - Claudio Monteverdi - Quel Augelin Che Canta.ogg' },
  intro: 'Monteverdi’s five-part madrigal turns a bird’s song into an argument about love. Follow the exchanges between voices rather than looking for one permanent soloist.',
  question: 'How can passing a figure between voices suggest a bird’s movement?',

  sections: [
    { t: 0, label: 'Opening exchanges', m: 'A', mNote: 'short moving figures circulate among the upper voices' },
    { t: 40, label: 'Middle span', m: 'B', mNote: 'more sustained writing contrasts with the opening movement' },
    { t: 86, label: 'Final intensification', m: 'C', mNote: 'moving figures and sustained lower notes lead towards the close' },
  ],
  cues: [
    { t: 0, kind: 'listen', title: 'The bird has several voices', text: 'The score begins with the upper three parts, leaving tenor and bass silent until later. Follow the quick figures shared between the upper lines: the madrigal suggests a bird’s activity through vocal movement, not through an added instrument.', basis: 'documented', precision: 'passage', evidence: 'Daniel Van Gilst’s CC0 score, p. 1, shows the initial upper trio and the later lower-part entries. This is an opening-span observation; no exact second is assigned to the tenor or bass entrance. https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf' },
    { t: 30, kind: 'world', title: 'Guarini’s bird speaks of love', text: 'The poem comes from Giovanni Battista Guarini’s <i>Il pastor fido</i>. A bird moves between trees, and its song becomes an imagined declaration of love, answered by its mate. Monteverdi adapts the passage rather than setting the whole dramatic scene.', basis: 'documented', precision: 'passage', evidence: 'LiederNet identifies Act I, scene 1, lines 175–186 and gives the differences in Monteverdi’s sung text. The imagery is described without assigning a word to this timestamp. https://www.lieder.net/lieder/get_text.html?RF=0&TextId=7068' },
    { t: 60, kind: 'listen', title: 'Motion against longer notes', text: 'In the middle stretch, compare the longer held notes with the smaller movements around them. The choir can reduce the sense of activity without becoming a single sustained chord; independent phrases still pass through the texture.', basis: 'score-proportion', precision: 'passage', evidence: 'The score’s middle pages contrast longer lower-part values with moving upper lines. The report shows reduced onset density and lower recorded level around 0:55–1:15 relative to the opening crest. This supports a broad contrast, not individual note alignment.' },
    { t: 90, kind: 'world', title: 'An Ordizia concert, not 2010', text: 'This performance comes from the Tudor Consort’s concert in Ordizia on 2 November 2005, directed by Alastair Carey. The 2010 date on the download page belongs to its online release, not the singing in the church.', basis: 'documented', precision: 'passage', evidence: 'FMA’s track description names Ordizia and Carey; the album liner notes date that concert to Wednesday 2 November 2005. FMA labels 19 August 2010 “Released”. https://freemusicarchive.org/music/The_Tudor_Consort/Live_in_Concert' },
  ],
  transitions: [
    { id: 'sustained-middle', title: 'Longer values temper the opening movement', from: 'Opening exchanges', to: 'Middle span', at: { t: 40 }, span: [30, 55], how: '<p>The five-part writing places more sustained notes against the active figures, changing the balance between motion and held sound. This is a vocal contrast: no continuo or orchestral colour is introduced. The passage moves away from the opening’s concentration of quick upper-voice figures while the individual lines retain their independence.</p>', devices: ['texture change', 'decrescendo'], basis: 'score-proportion', precision: 'passage', evidence: 'The score’s middle pages show longer lower-voice values and more sustained ensemble writing. The report marks a boundary at 0:40, followed by lower levels at 0:45 and 0:55–1:15. The marker is a broad grouping, not a timed textual entrance.' },
    { id: 'final-expansion', title: 'Renewed motion gathers the final phrase', from: 'Middle span', to: 'Final intensification', at: { t: 86 }, span: [76, 103], how: '<p>The ending combines moving upper lines with longer supporting notes below. Repeated fragments extend the final phrase, and the recorded sound grows towards another crest before settling. The same five vocal parts supply the added weight; a fuller passage does not mean that an instrumental ensemble has joined.</p>', devices: ['texture change', 'crescendo build'], basis: 'score-proportion', precision: 'passage', evidence: 'The last page of the score shows running figures, repeated fragments and sustained lower-part notes. The measured boundary at 1:26 precedes rising level through 1:30–1:40 and a final fall after 1:45. No exact sung syllable or cadence time is asserted.' },
  ],
  orchestra: {
    ensemble: ['chorus'],
    basis: 'documented',
    source: { title: 'Monteverdi, Quel augellin che canta, ed. Daniel Van Gilst (2019), CC0', url: 'https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf', locator: 'Four pages, SSATB vocal score. Used for ensemble and texture only; the choir’s performing edition and transposition are not identified.' },
    timeline: [
      { t: 0, playing: ['chorus'], lead: ['chorus'], note: 'Voices alone: the score begins with an upper trio and later uses all five parts. The display groups the choir rather than timing each part’s rests.' },
    ],
  },
};
