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
  recorded: 'Live; probably 29 July 2007, Wellington',
  source: { file: 'File:The Tudor Consort - 01 - Palestrina - Sicut lilium inter spinas.ogg' },
  intro: 'The Tudor Consort sings the motet rather than the Mass which shares its title. Listen for the way separate vocal lines keep a phrase moving when another part reaches a resting point.',
  question: 'How does overlapping vocal writing keep the music moving through a cadence?',

  sections: [
    { t: 0, label: 'Opening imitations', m: 'A', mNote: 'the opening point passes successively through the five parts' },
    { t: 96, label: 'Central phrases', m: 'B', mNote: 'new text phrases overlap the ends of earlier ones' },
    { t: 214, label: 'Closing span', m: 'C', mNote: 'the concluding acclamation extends the imitative texture' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Five lines, one motet', text: 'Palestrina writes five vocal parts: cantus, altus, tenor, a second tenor and bassus. Their entries accumulate rather than presenting the whole ensemble as a single block; follow a melodic shape as it passes from one line to another.', basis: 'documented', precision: 'passage', evidence: 'The 1862 collected score, No. 21, begins on printed p. 90 and names all five parts; the opening entries are staggered. No entry after the opening is assigned a precise second. https://s9.imslp.org/files/imglnks/usimg/f/f5/IMSLP55722-PMLP115176-Tomus_I.pdf' },
    { t: 35, kind: 'life', title: 'The first motet collection', text: 'This five-voice setting appears in Palestrina’s first collection of motets, published in Rome in 1569. Publication gives a firm point in its history; the date at which he composed it is not established here.', basis: 'documented', precision: 'passage', evidence: 'IMSLP identifies the 1569 Motettorum, Liber 1 and lists Sicut lilium as No. 21; John Milsom’s programme note independently identifies this five-voice setting and publication. https://www.hyperion-records.co.uk/dw.asp?dc=W15060_GBLLH1645012' },
    { t: 70, kind: 'listen', title: 'A cadence does not stop everyone', text: 'Across these interwoven phrases, listen below the upper line. A lower voice may continue while another rests or holds its last note. The distinction between a local resting point and a complete stop keeps the motet moving.', basis: 'general', precision: 'passage', evidence: 'Printed pp. 90–92 show different phrase lengths, held notes and rests among the parts. This is a general listening invitation, not identification of an individual lower-voice entry at 1:10.' },
    { t: 105, kind: 'world', title: 'A biblical love comparison', text: 'The text comes from the Song of Songs: a beloved is compared with a lily among thorns. Palestrina’s setting expands this short comparison through repeated words and overlapping voices, rather than adding a narrative with new events.', basis: 'documented', precision: 'passage', evidence: 'Milsom identifies the biblical source and paraphrases the comparison; the score sets Sicut lilium inter spinas, sic amica mea inter filias Adae, followed by Alleluia. This note is contextual, not a timestamped transcription.' },
    { t: 140, kind: 'listen', title: 'Follow one inner part', text: 'Choose an inner line for a few phrases rather than following only the highest voice. Its sustained notes can become dissonant as the other parts move, then settle by step; the harmony is the result of several independent motions.', basis: 'general', precision: 'passage', evidence: 'The viewed five-part score, especially printed pp. 91–93, supplies the independent motion and held-note dissonances. No machine chord label, exact suspension or bar number is assigned to this cue.' },
    { t: 175, kind: 'world', title: 'A motet becomes a Mass', text: 'Palestrina later makes this motet the model for a Mass with the same title. The opening imitative point is carried into the Kyrie. This recording is the short motet itself, not one of that Mass’s movements.', basis: 'documented', precision: 'passage', evidence: 'Peter Phillips’s note identifies the Mass’s borrowing of the motet’s opening point. The FMA album lists the motet first and the separate Mass movements afterwards. https://www.hyperion-records.co.uk/dw.asp?dc=W15061_810202' },
    { t: 210, kind: 'listen', title: 'A retreat before renewed weight', text: 'A stronger stretch gives way to a brief reduction in recorded sound, then the ensemble builds again. Keep following the continuing vocal lines across that retreat instead of treating it as the end of the motet.', basis: 'audio-feature', precision: 'passage', evidence: 'The report places its loudest window around 3:25, a substantial drop by 3:35, and renewed level at 3:40–3:45. The boundary at 3:34 anchors this broad contrast, not a particular sung word.' },
    { t: 245, kind: 'music', title: 'The last sustained span', text: 'The closing stretch rises again before the sound withdraws. Listen for the difference between the voices settling on their final sonority and the room’s remaining resonance.', basis: 'audio-feature', precision: 'passage', evidence: 'High-level windows around 4:05–4:15 precede a reduction at 4:20 and a final fall from 4:30 to 4:35. The score closes in sustained notes, but the release is not aligned to a specific second.' },
  ],
  transitions: [
    { id: 'central-text-phrases', title: 'An ending overlaps the next phrase', from: 'Opening imitations', to: 'Central phrases', at: { t: 96 }, span: [82, 110], how: '<p>The opening point gives way to fresh text phrases without a general pause. Palestrina lets one voice hold its closing note while another begins the next idea; the five-part texture changes its internal balance rather than replacing the choir with a new sound. The overlap makes the cadence a hinge within the motet, not a final full stop.</p>', devices: ['elision', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: 'The score’s move from the opening words to sic amica mea is visible on printed p. 91, with held notes and overlapping entries. The quieter 1:25–1:30 region and measured boundary at 1:36 support a broad central grouping. The actual first syllable is not aligned.' },
    { id: 'closing-acclamation', title: 'The final acclamation grows from overlapping lines', from: 'Central phrases', to: 'Closing span', at: { t: 214 }, span: [200, 230], how: '<p>The concluding Alleluia is not set apart by a new ensemble. Its entries overlap the close of the preceding phrase and then extend the same imitative method towards the final sustained sonority. Listen through the temporary reduction in sound: the ending is built by renewed participation within the choir rather than by an instrumental addition.</p>', devices: ['elision', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: 'Printed pp. 93–94 show the overlap into Alleluia and the ensuing imitative close. The report’s strong boundary at 3:34 and level recovery after 3:35 support the approximate closing span; no word or individual entry is timed.' },
  ],
  orchestra: {
    ensemble: ['chorus'],
    basis: 'documented',
    source: { title: 'Palestrina, Motettorum, Liber 1, No. 21, ed. Theodor de Witt (1862)', url: 'https://s9.imslp.org/files/imglnks/usimg/f/f5/IMSLP55722-PMLP115176-Tomus_I.pdf', locator: 'Printed pp. 90–94 (PDF pp. 104–108). Cantus, altus, tenor, quintus (second tenor), bassus. Ensemble-level scoring only; the choir’s edition and individual entry times are unestablished.' },
    timeline: [
      { t: 0, playing: ['chorus'], lead: ['chorus'], note: 'The five-part vocal ensemble supplies both melodic lines and harmony; the stage display does not imply that all five parts sing continuously.' },
    ],
  },
};
