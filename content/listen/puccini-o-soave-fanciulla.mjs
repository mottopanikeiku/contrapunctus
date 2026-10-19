export default {
  id: 'puccini-o-soave-fanciulla', composer: 'puccini', order: 5,
  work: 'La bohème', movement: 'Act I · O soave fanciulla',
  set: { id: 'puccini-boheme-duets', title: 'La bohème — two duets', part: 1, of: 2 },
  year: '1896', key: '', forces: 'Soprano, tenor and orchestra; acoustic scoring unestablished',
  performers: 'Nellie Melba, soprano; Enrico Caruso, tenor; orchestra uncredited', recorded: '24 March 1907',
  source: { file: 'File:Enrico Caruso - Nellie Melba - La bohème - O soave fanciulla (restored).ogg' },
  intro: 'Moonlight falls on Mimì in the attic, and Rodolfo’s conversation becomes a declaration of love. Nellie Melba and Enrico Caruso sing the duet that sends the new lovers out into the Paris night.',
  sections: [
    { t: 0, label: 'A · Mimì in the moonlight', m: 'A', mNote: 'Rodolfo’s declaration draws an answer from Mimì' },
    { t: 88, label: 'B · Mimì asks to come along', m: 'B', mNote: 'The lovers turn from declarations to teasing conversation' },
    { t: 158, label: 'C · Arm in arm into the night', m: 'C', mNote: 'Mimì and Rodolfo leave the attic together' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'A face in moonlight', text: 'Rodolfo turns from the window and sees Mimì lit by the moon. “O soave fanciulla, o dolce viso” — “O gentle girl, O sweet face.” The tenor sings to her; the soprano’s answer admits how deeply his words have touched her.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, La bohème (1896), end of Act I: stage direction and the opening exchange of O soave fanciulla. https://it.wikisource.org/wiki/La_boh%C3%A8me/Quadro_primo . Translation ours.' },
    { t: 70, kind: 'world', title: 'Friends below the window', text: 'Rodolfo’s friends have been shouting from the courtyard, impatient to get to the Café Momus. He tells them to save two places. As they leave, Marcello calls back that the poet has found his poetry. Upstairs, Mimì is standing in the moonlight.', basis: 'documented', precision: 'passage', evidence: 'Illica and Giacosa, La bohème (1896), Act I, the scene immediately before and at the beginning of the duet. https://it.wikisource.org/wiki/La_boh%C3%A8me/Quadro_primo' },
    { t: 88, kind: 'music', title: 'Mimì makes a suggestion', text: 'The grand declaration becomes a little negotiation. Mimì asks to go out with Rodolfo; he suggests staying in because it is cold outside. She promises to stay close.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, La bohème (1896), Act I: Se venissi con voi, Rodolfo’s reply Sarebbe così dolce restar qui and Mimì’s Vi starò vicina. https://it.wikisource.org/wiki/La_boh%C3%A8me/Quadro_primo' },
    { t: 158, kind: 'form', title: 'Two lovers leave together', text: 'Rodolfo helps Mimì with her shawl and offers his arm. Before they leave, he asks her to say she loves him. “Io t’amo” — “I love you.” Their first meeting ends with a walk out into the cold.', basis: 'score-proportion', precision: 'passage', evidence: 'Illica and Giacosa, La bohème (1896), final stage directions and exchange of Act I: https://it.wikisource.org/wiki/La_boh%C3%A8me/Quadro_primo . Translation ours; staging described from the libretto. Recording restoration by Adam Cuerden, via commons.wikimedia.org; attribution required: https://commons.wikimedia.org/wiki/File:Enrico_Caruso_-_Nellie_Melba_-_La_boh%C3%A8me_-_O_soave_fanciulla_(restored).ogg' },
  ],
};
