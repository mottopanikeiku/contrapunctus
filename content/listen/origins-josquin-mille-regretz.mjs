export default {
  id: 'origins-josquin-mille-regretz',
  composer: 'origins-josquin',
  order: 1,
  short: true,
  work: 'Mille regretz',
  movement: 'Four-voice chanson · attributed to Josquin des Prez',
  year: '16th century; composition date unknown',
  key: '',
  forces: 'Unaccompanied vocal ensemble',
  performers: 'Collegium Vocale Bydgoszcz',
  recorded: '',
  source: { file: 'File:Josquin Desprez -- Mille regretz.opus' },
  intro: 'A lover says goodbye in four short lines of French. Collegium Vocale Bydgoszcz sings <i>Mille regretz</i>, whose last sentence keeps returning as if the parting could still be put off.',

  sections: [
    { t: 0, label: 'A · Three voices, then the tenor', m: 'A', mNote: 'The tenor enters while the other parts continue' },
    { t: 42, label: 'B · The singers dwell on grief', m: 'B', mNote: 'Long notes carry the words for grief and pain' },
    { t: 62, label: 'C · The farewell repeats', m: 'C', mNote: 'The closing words overlap from voice to voice' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Three voices, then the tenor', text: 'The soprano, contratenor and bass begin together. The tenor waits two bars, then enters with the same opening words. While it sings its regrets, the soprano is already moving on to the words of departure.', basis: 'score-proportion', precision: 'passage', evidence: 'Albert Smijers’s edition, printed p. 63, bars 1–5: the tenor rests for two bars before its entry. Attribution to Josquin is disputed; see the IMSLP authorship note. https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP559228-PMLP236034-24._Mille_regretz.pdf ; https://cn.imslp.org/wiki/Mille_regretz_(Josquin_Desprez)' },
    { t: 32, kind: 'world', title: 'A thousand regrets', text: 'The anonymous French poem says everything in four lines: regret at leaving, the beloved’s face, grief, and the fear that life will soon end. The singers have only that small handful of words, which the music turns over again and again.', basis: 'documented', precision: 'passage', evidence: 'The four-line French text is printed in Smijers’s edition and transcribed at https://en.wikipedia.org/wiki/Mille_regretz . The reading of “fache amoureuse” as the beloved’s face follows the modern-French transcription there.' },
    { t: 62, kind: 'form', title: 'The farewell will not finish', text: 'The final line passes from soprano to the other voices. Each singer reaches the words about the end of life at a different time; several begin them again. The last sentence takes almost half the score.', basis: 'score-proportion', precision: 'passage', evidence: 'Smijers’s edition, printed p. 63, bars 24–41: staggered entries and repeated fragments of “Qu’on me verra brief mes jours definer”. https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP559228-PMLP236034-24._Mille_regretz.pdf' },
  ],
  transitions: [
    { id: 'central-phrases', title: 'Long notes for grief and pain', from: 'A · Three voices, then the tenor', to: 'B · The singers dwell on grief', at: { t: 42 }, span: [34, 54], how: '<p>The third line of the poem brings the words for grief and pain. Soprano, contratenor and bass sustain them while the tenor breaks off and returns. The long notes leave the French syllables exposed; the four parts keep their separate pauses.</p>', devices: ['texture change'], basis: 'score-proportion', precision: 'passage', evidence: 'Smijers’s edition, printed p. 63, bars 17–23, setting the third poetic line. https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP559228-PMLP236034-24._Mille_regretz.pdf' },
    { id: 'closing-sentence', title: 'One farewell enters after another', from: 'B · The singers dwell on grief', to: 'C · The farewell repeats', at: { t: 62 }, span: [54, 75], how: '<p>The soprano starts the last line first. Contratenor and bass follow, then the tenor, so the words overlap. The bass continues beneath pauses in the upper parts, and the sentence is sung again in fragments before all four voices reach the last chord.</p>', devices: ['elision', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: 'Smijers’s edition, printed p. 63, bars 24–41. https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP559228-PMLP236034-24._Mille_regretz.pdf' },
  ],
  orchestra: {
    ensemble: ['chorus'],
    basis: 'documented',
    source: { title: 'Mille regretz, four voices, ed. Albert Smijers', url: 'https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP559228-PMLP236034-24._Mille_regretz.pdf', locator: 'Printed p. 63, complete chanson for soprano, contratenor, tenor and bass, unaccompanied.' },
    timeline: [
      { t: 0, playing: ['chorus'], lead: ['chorus'], note: 'Soprano, contratenor and bass open together; the tenor enters two bars later.' },
    ],
  },
};
