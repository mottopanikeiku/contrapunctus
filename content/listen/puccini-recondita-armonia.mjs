export default {
  id: 'puccini-recondita-armonia', composer: 'puccini', order: 2,
  work: 'Tosca', movement: 'Act I · Recondita armonia',
  set: { id: 'puccini-tosca-arias', title: 'Tosca — three arias', part: 1, of: 3 },
  year: '1900', key: '', forces: 'Tenor and orchestra; acoustic scoring unestablished',
  performers: 'Enrico Caruso, tenor; Victor Orchestra', recorded: '6 November 1909',
  source: { file: 'File:Enrico Caruso, Recondita armonia (Tosca).ogg' },
  intro: '“Recondita armonia” comes from Act I of <i>Tosca</i>. In a Roman church, the painter Cavaradossi works on a blonde Mary Magdalene while he thinks of the dark-haired Tosca, and he sings of the beauty of both women and of his love for Tosca. Caruso sings the aria.',
  sections: [
    { t: 0, label: 'A · Cavaradossi’s aria, Tosca and Magdalene', m: 'A', mNote: 'Cavaradossi compares Tosca with his painting of the Magdalene.' },
    { t: 64, label: 'B · Blue eyes and black', m: 'B', mNote: 'The tenor compares the two women’s faces.' },
    { t: 102, label: 'C · Tosca alone in his thoughts', m: 'C', mNote: 'The comparison becomes a declaration of love.' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Recondita armonia, opening', text: '“Recondita armonia di bellezze diverse” — “A hidden harmony of different beauties.” Cavaradossi’s painted Mary Magdalene has blonde hair and blue eyes. His lover, Floria Tosca, is dark-haired, and the tenor’s aria opens with the painter comparing the two.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act I, scene 3; La Scala libretto, pp. 2–3, including the description of the painting. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translation ours.' },
    { t: 35, kind: 'world', title: 'The Marchesa Attavanti', text: 'The blonde woman is the Marchesa Attavanti. Cavaradossi has watched her praying in Sant’Andrea della Valle and painted her without her knowing. She also comes to the church to hide clothes in the family chapel for her brother Angelotti’s escape.', basis: 'documented', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act I, scenes 3 and 6; La Scala libretto, pp. 2 and 11. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf' },
    { t: 64, kind: 'music', title: 'Blue eyes, black eyes', text: 'Cavaradossi speaks to the painting as though the woman were there: “Tu azzurro hai l’occhio, Tosca ha l’occhio nero” — “Your eyes are blue; Tosca’s are black.” The aria turns his inspection of a canvas into an intimate comparison with the woman he loves.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act I, Recondita armonia; La Scala libretto, p. 3. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translation ours; the words describe the aria’s central comparison.' },
    { t: 102, kind: 'form', title: 'Final lines of the aria', text: 'Cavaradossi sings that art can bring different beauties together. The aria then closes on the line “Il mio solo pensier, Tosca, sei tu” — “My only thought, Tosca, is you.”', basis: 'score-proportion', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act I, final lines of Recondita armonia; La Scala libretto, p. 3. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translation ours; placed at the established closing section.' },
  ],
};
