export default {
  id: 'puccini-o-soave-fanciulla', composer: 'puccini', order: 5,
  work: 'La bohème', movement: 'Act I · O soave fanciulla',
  set: { id: 'puccini-boheme-duets', title: 'La bohème — two duets', part: 1, of: 2, unit: 'duets' },
  year: '1896', key: '', forces: 'Soprano, tenor and orchestra; acoustic scoring unestablished',
  performers: 'Nellie Melba, soprano; Enrico Caruso, tenor; orchestra uncredited', recorded: '24 March 1907',
  source: { file: 'File:Enrico Caruso - Nellie Melba - La bohème - O soave fanciulla (restored).ogg' },
  intro: 'In the attic, with moonlight falling on Mimì, Rodolfo’s conversation turns into a declaration of love. Nellie Melba and Enrico Caruso sing the duet, at the end of which the new lovers go out into the Paris night.',
  sections: [
    { t: 0, label: 'A · Rodolfo and Mimì’s duet', m: 'A', mNote: 'Rodolfo’s declaration is followed by Mimì’s reply.' },
    { t: 88, label: 'B · Mimì asks to come along', m: 'B', mNote: 'The lovers move from declarations to conversation.' },
    { t: 158, label: 'C · Mimì and Rodolfo leave', m: 'C' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Duet, opening exchange', text: 'Rodolfo turns from the window and sees Mimì lit by the moon. He sings “O soave fanciulla, o dolce viso” (“O gentle girl, O sweet face”), and Mimì answers him.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, La bohème (1896), end of Act I: stage direction and the opening exchange of O soave fanciulla. https://it.wikisource.org/wiki/La_boh%C3%A8me/Quadro_primo . Translation ours.' },
    { t: 70, kind: 'world', title: 'Friends in the courtyard', text: 'Rodolfo’s friends have been shouting from the courtyard, impatient to get to the Café Momus. He tells them to keep two places. As they leave, Marcello calls back that the poet has found his poetry. Upstairs, Mimì stands in the moonlight.', basis: 'documented', precision: 'passage', evidence: 'Illica and Giacosa, La bohème (1896), Act I, the scene immediately before and at the beginning of the duet. https://it.wikisource.org/wiki/La_boh%C3%A8me/Quadro_primo' },
    { t: 88, kind: 'music', title: 'Mimì asks to go out', text: 'Mimì asks to go out with Rodolfo. He suggests that they stay in, because it is cold outside. She promises to stay close to him.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, La bohème (1896), Act I: Se venissi con voi, Rodolfo’s reply Sarebbe così dolce restar qui and Mimì’s Vi starò vicina. https://it.wikisource.org/wiki/La_boh%C3%A8me/Quadro_primo' },
    { t: 158, kind: 'form', title: 'End of Act I, Rodolfo and Mimì', text: 'Rodolfo helps Mimì with her shawl and offers his arm. Before they leave, he asks her to say she loves him, and she answers “Io t’amo” (“I love you”). They go out together into the cold.', basis: 'score-proportion', precision: 'passage', evidence: 'Illica and Giacosa, La bohème (1896), final stage directions and exchange of Act I: https://it.wikisource.org/wiki/La_boh%C3%A8me/Quadro_primo . Translation ours; staging described from the libretto. Recording restoration by Adam Cuerden, via commons.wikimedia.org; attribution required: https://commons.wikimedia.org/wiki/File:Enrico_Caruso_-_Nellie_Melba_-_La_boh%C3%A8me_-_O_soave_fanciulla_(restored).ogg' },
  ],
};
