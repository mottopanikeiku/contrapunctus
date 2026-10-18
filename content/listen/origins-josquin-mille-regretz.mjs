export default {
  id: 'origins-josquin-mille-regretz',
  composer: 'origins-josquin',
  order: 1,
  work: 'Mille regretz',
  movement: 'Four-voice chanson · attributed to Josquin des Prez',
  year: '16th century; composition date unknown',
  key: '',
  forces: 'Unaccompanied vocal ensemble',
  performers: 'Collegium Vocale Bydgoszcz',
  recorded: '',
  source: { file: 'File:Josquin Desprez -- Mille regretz.opus' },
  intro: 'Four vocal parts turn a short French lament into changing combinations of melody and harmony. The familiar attribution to Josquin remains disputed; listen to the part-writing without treating the name as settled.',
  question: 'How can four lines preserve the directness of a short lament?',

  sections: [
    { t: 0, label: 'Opening lament', m: 'A', mNote: 'four parts combine shared declamation with staggered phrases' },
    { t: 42, label: 'Central intensification', m: 'B', mNote: 'the recorded level grows through the middle phrases' },
    { t: 62, label: 'Extended closing sentence', m: 'C', mNote: 'the final thought passes between parts and is repeated' },
  ],
  cues: [
    { t: 0, kind: 'listen', title: 'Together and apart', text: 'Listen for the contrast between voices moving together and a line continuing while another pauses. The four-part setting is not simply a tune placed over three accompanying parts: the text moves through changing combinations of voices.', basis: 'documented', precision: 'passage', evidence: 'Albert Smijers’s score, printed p. 63, shows four named parts, alternating rests and overlapping phrases. This describes the chanson’s texture generally; the report places the rise from the quiet opening across 0:05–0:15. https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP559228-PMLP236034-24._Mille_regretz.pdf' },
    { t: 32, kind: 'world', title: 'A disputed composer’s name', text: 'The chanson is commonly attributed to Josquin, but that attribution is disputed. David Fallows has defended it; other scholarship rejects it. The music can illustrate sixteenth-century vocal writing without resolving the authorship question.', basis: 'documented', precision: 'passage', evidence: 'IMSLP’s authorship note and extra information explicitly identify the dispute, including Fallows’s 2009 defence. The printed Josquin attribution in the Smijers edition is historical evidence, not proof of authorship. https://cn.imslp.org/wiki/Mille_regretz_(Josquin_Desprez)' },
    { t: 64, kind: 'world', title: 'Four lines of separation', text: 'The French poem compresses abandonment, separation and anticipated death into four lines. Repeating portions of those lines gives the musical setting more time than a single spoken reading would take.', basis: 'documented', precision: 'passage', evidence: 'The complete four-line poem is given at https://en.wikipedia.org/wiki/Mille_regretz ; the opened Smijers score visibly repeats portions of its closing line. This cue does not identify the word being sung at 1:04.' },
    { t: 96, kind: 'listen', title: 'The ending loses its weight', text: 'The late crest gives way to a quieter ending. Keep listening through the reduction in sound: the ensemble’s release and the remaining resonance are separate stages of the close.', basis: 'audio-feature', precision: 'passage', evidence: 'The report gives a late crest around 1:20–1:25, falling levels through 1:35–1:40, a strong boundary at 1:42, and near-silence by 1:50. No particular cadence note or release second is claimed.' },
  ],
  transitions: [
    { id: 'central-phrases', title: 'Shared declamation gives the lament more weight', from: 'Opening lament', to: 'Central intensification', at: { t: 42 }, span: [34, 54], how: '<p>Across the central phrases, several parts articulate the text together, then separate into overlapping continuations. The ensemble’s recorded level grows, but the increase does not require an added instrument or soloist. Shorter note-values within the sustained vocal writing give the phrase movement without breaking the lament into a contrasting dance.</p>', devices: ['texture change', 'crescendo build'], basis: 'score-proportion', precision: 'passage', evidence: 'The score’s central text phrase follows the first two poetic lines, around bars 17–22. The report’s change near 0:40 and high-level windows at 0:45–0:50 support an approximate middle grouping, not a sung-word alignment.' },
    { id: 'closing-sentence', title: 'The final thought passes between the parts', from: 'Central intensification', to: 'Extended closing sentence', at: { t: 62 }, span: [54, 75], how: '<p>The closing sentence is extended by staggered entries and repetition. One part can carry its phrase beyond another’s resting point, so closure is repeatedly approached rather than supplied by a single simultaneous statement. All four voices remain the material of the ending; the change is in their combination, not in the ensemble.</p>', devices: ['elision', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: 'The final poetic line begins in staggered parts around bars 24–26 of the 41-bar Smijers score. The report’s boundary at 1:02, after a level dip near 1:00, supports an approximate correspondence. Individual words and entries are not aligned.' },
  ],
  orchestra: {
    ensemble: ['chorus'],
    basis: 'documented',
    source: { title: 'Mille regretz, four voices, ed. Albert Smijers', url: 'https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP559228-PMLP236034-24._Mille_regretz.pdf', locator: 'Printed p. 63, complete chanson. Four vocal staves; no instrumental accompaniment. Ensemble-level display only; individual part rests are not timed.' },
    timeline: [
      { t: 0, playing: ['chorus'], lead: ['chorus'], note: 'Four written vocal parts share the chanson; the display treats the vocal ensemble as one group, not four continuously singing individuals.' },
    ],
  },
};
