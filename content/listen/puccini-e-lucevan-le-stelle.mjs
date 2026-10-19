export default {
  id: 'puccini-e-lucevan-le-stelle', composer: 'puccini', order: 4,
  work: 'Tosca', movement: 'Act III · E lucevan le stelle — piano-accompanied recording',
  set: { id: 'puccini-tosca-arias', title: 'Tosca — three arias', part: 3, of: 3 },
  year: '1900', key: '', forces: 'Tenor and piano',
  performers: 'Enrico Caruso, tenor; Salvatore Cottone, piano', recorded: '11 April 1902',
  source: { file: 'File:E lucevan le stelle (1902).opus' },
  intro: 'In “E lucevan le stelle”, from Act III of <i>Tosca</i>, Cavaradossi has an hour to live and recalls a night with Tosca. Caruso sings it here with Salvatore Cottone at the piano.',
  sections: [
    { t: 0, label: 'A · Cavaradossi recalls the night with Tosca', m: 'A', mNote: 'Cavaradossi recalls the stars and the garden gate.' },
    { t: 80, label: 'B · Kisses and embraces, tenor and piano', m: 'B', mNote: 'The tenor sings of holding Tosca in his arms.' },
    { t: 124, label: 'C · Cavaradossi facing death', m: 'C', mNote: 'The memory ends with Cavaradossi facing death.' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Cavaradossi’s aria, Act III', text: 'On the roof of Castel Sant’Angelo, Cavaradossi recalls another night, with stars overhead, the scent of the earth and a garden gate creaking. The aria opens “E lucevan le stelle” (“And the stars were shining”). Caruso sings it here with piano accompaniment.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act III, Cavaradossi’s aria; text and setting in the La Scala libretto, pp. 38–39: https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Piano credit: https://commons.wikimedia.org/wiki/File:E_lucevan_le_stelle_(1902).opus . Translation ours; the opening line has the variant lucevan/lucevano.' },
    { t: 35, kind: 'world', title: 'Cavaradossi’s last letter, Act III', text: 'The jailer offers Cavaradossi a priest. Cavaradossi asks to write a last message to Tosca and offers the ring from his finger as payment for its delivery, which the jailer accepts. Before he can finish writing, he begins to remember Tosca.', basis: 'documented', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act III, scene 2, immediately before the aria; La Scala libretto, p. 38. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf' },
    { t: 80, kind: 'music', title: '“O dolci baci”, central lines', text: 'Cavaradossi recalls Tosca’s footsteps on the sand, her scent and her body in his arms. He then sings “O dolci baci, o languide carezze” (“O sweet kisses, O languid caresses”).', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act III, central lines of E lucevan le stelle; La Scala libretto, pp. 38–39. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translation ours; commentary on the remembered scene, without word-level timing.' },
    { t: 124, kind: 'form', title: 'Final line of the aria', text: 'The aria closes with Cavaradossi facing death: “E non ho amato mai tanto la vita” — “And never have I loved life so much.”', basis: 'score-proportion', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act III, final sentence of E lucevan le stelle; La Scala libretto, p. 39. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translation ours; the established closing section locates the passage.' },
  ],
};
