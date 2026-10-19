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
  intro: '<i>Mille regretz</i> is a four-voice chanson attributed to Josquin des Prez. Its four short lines of French are a lover’s farewell, and the last sentence returns several times. It is sung here by Collegium Vocale Bydgoszcz.',

  sections: [
    { t: 0, label: 'A · Three voices, then the tenor', m: 'A', mNote: 'The tenor enters while the other three parts continue.' },
    { t: 42, label: 'B · Long notes on words of grief', m: 'B', mNote: 'Long notes set the words for grief and pain.' },
    { t: 62, label: 'C · Closing phrase, repeated', m: 'C', mNote: 'The closing words overlap from voice to voice.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Opening, delayed tenor entry', text: 'The soprano, contratenor and bass begin together. The tenor rests for two bars, then enters with the same opening words. By then the soprano has already moved on to the words of departure.', basis: 'score-proportion', precision: 'passage', evidence: 'Albert Smijers’s edition, printed p. 63, bars 1–5: the tenor rests for two bars before its entry. Attribution to Josquin is disputed; see the IMSLP authorship note. https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP559228-PMLP236034-24._Mille_regretz.pdf ; https://cn.imslp.org/wiki/Mille_regretz_(Josquin_Desprez)' },
    { t: 32, kind: 'world', title: 'The anonymous French text', text: 'The anonymous French poem has four lines. It names regret at leaving, the beloved’s face, grief, and the fear that life will soon end. The music repeats these few words many times.', basis: 'documented', precision: 'passage', evidence: 'The four-line French text is printed in Smijers’s edition and transcribed at https://en.wikipedia.org/wiki/Mille_regretz . The reading of “fache amoureuse” as the beloved’s face follows the modern-French transcription there.' },
    { t: 62, kind: 'form', title: 'Final line, bars 24–41', text: 'The final line, “Qu’on me verra brief mes jours definer”, passes from the soprano to the other voices in bars 24–41 of Smijers’s edition. The entries are staggered, and several voices repeat fragments of the text. This last sentence occupies nearly half the score.', basis: 'score-proportion', precision: 'passage', evidence: 'Smijers’s edition, printed p. 63, bars 24–41: staggered entries and repeated fragments of “Qu’on me verra brief mes jours definer”. https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP559228-PMLP236034-24._Mille_regretz.pdf' },
  ],
  transitions: [
    { id: 'central-phrases', title: 'Long notes for grief and pain', from: 'A · Three voices, then the tenor', to: 'B · Long notes on words of grief', at: { t: 42 }, span: [34, 54], how: '<p>The third line of the poem (bars 17–23 in Smijers’s edition, p. 63) brings the words for grief and pain. Soprano, contratenor and bass sustain them in long notes, and the tenor stops and re-enters. The four parts rest at different points.</p>', devices: ['texture change'], basis: 'score-proportion', precision: 'passage', evidence: 'Smijers’s edition, printed p. 63, bars 17–23, setting the third poetic line. https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP559228-PMLP236034-24._Mille_regretz.pdf' },
    { id: 'closing-sentence', title: 'Staggered entries in the last line', from: 'B · Long notes on words of grief', to: 'C · Closing phrase, repeated', at: { t: 62 }, span: [54, 75], how: '<p>The soprano begins the last line first. The contratenor and bass follow, then the tenor, so the words overlap. The bass continues under rests in the upper parts. The line is sung again in fragments, and all four voices then reach the final chord (Smijers’s edition, p. 63, bars 24–41).</p>', devices: ['elision', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: 'Smijers’s edition, printed p. 63, bars 24–41. https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP559228-PMLP236034-24._Mille_regretz.pdf' },
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
