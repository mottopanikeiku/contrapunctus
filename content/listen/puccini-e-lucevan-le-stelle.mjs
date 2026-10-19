export default {
  id: 'puccini-e-lucevan-le-stelle', composer: 'puccini', order: 4,
  work: 'Tosca', movement: 'Act III · E lucevan le stelle — piano-accompanied recording',
  set: { id: 'puccini-tosca-arias', title: 'Tosca — three arias', part: 3, of: 3 },
  year: '1900', key: '', forces: 'Tenor and piano',
  performers: 'Enrico Caruso, tenor; Salvatore Cottone, piano', recorded: '11 April 1902',
  source: { file: 'File:E lucevan le stelle (1902).opus' },
  intro: 'Cavaradossi has an hour to live, and his thoughts return to a night with Tosca. Caruso sings the farewell with Salvatore Cottone at the piano: a remembered embrace becomes a desperate wish to stay alive.',
  sections: [
    { t: 0, label: 'A · A night with Tosca', m: 'A', mNote: 'Cavaradossi remembers the stars and the garden gate' },
    { t: 80, label: 'B · Kisses and embraces', m: 'B', mNote: 'The tenor recalls Tosca in his arms' },
    { t: 124, label: 'C · The will to live', m: 'C', mNote: 'The memory ends with Cavaradossi facing death' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Stars above the garden', text: 'On the roof of Castel Sant’Angelo, Cavaradossi remembers another night: stars overhead, the scent of the earth, a garden gate creaking. “E lucevan le stelle” — “And the stars were shining.” Caruso’s tenor tells the story with Cottone’s piano beneath it.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act III, Cavaradossi’s aria; text and setting in the La Scala libretto, pp. 38–39: https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Piano credit: https://commons.wikimedia.org/wiki/File:E_lucevan_le_stelle_(1902).opus . Translation ours; the opening line has the variant lucevan/lucevano.' },
    { t: 35, kind: 'world', title: 'A ring for a letter', text: 'The jailer offers Cavaradossi a priest. He asks instead to write one last message to Tosca, offering the ring from his finger as payment for its delivery. The jailer accepts. Before Cavaradossi can finish, the memory of Tosca takes over.', basis: 'documented', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act III, scene 2, immediately before the aria; La Scala libretto, p. 38. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf' },
    { t: 80, kind: 'music', title: 'The remembered embrace', text: 'The memory is physical: Tosca’s footsteps on the sand, her scent, her body in his arms. “O dolci baci, o languide carezze” — “O sweet kisses, O languid caresses.” These are the details Cavaradossi clings to as his farewell opens into song.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act III, central lines of E lucevan le stelle; La Scala libretto, pp. 38–39. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translation ours; commentary on the remembered scene, without word-level timing.' },
    { t: 124, kind: 'form', title: 'Never so much life', text: 'The aria ends with the memory broken. Cavaradossi faces death and discovers how fiercely he wants to live: “E non ho amato mai tanto la vita” — “And never have I loved life so much.”', basis: 'score-proportion', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act III, final sentence of E lucevan le stelle; La Scala libretto, p. 39. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translation ours; the established closing section locates the passage.' },
  ],
};
