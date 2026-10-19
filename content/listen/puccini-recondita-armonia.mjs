export default {
  id: 'puccini-recondita-armonia', composer: 'puccini', order: 2,
  work: 'Tosca', movement: 'Act I · Recondita armonia',
  set: { id: 'puccini-tosca-arias', title: 'Tosca — three arias', part: 1, of: 3 },
  year: '1900', key: '', forces: 'Tenor and orchestra; acoustic scoring unestablished',
  performers: 'Enrico Caruso, tenor; Victor Orchestra', recorded: '6 November 1909',
  source: { file: 'File:Enrico Caruso, Recondita armonia (Tosca).ogg' },
  intro: 'In a Roman church, Cavaradossi paints a blonde Mary Magdalene while thinking of the dark-haired Tosca. Caruso sings the painter’s discovery that two very different faces can be beautiful — and that only one of them has his heart.',
  sections: [
    { t: 0, label: 'A · The painter and his two beauties', m: 'A', mNote: 'Cavaradossi sets Tosca beside his painted Magdalene' },
    { t: 64, label: 'B · Blue eyes and black', m: 'B', mNote: 'The tenor contrasts the women’s faces' },
    { t: 102, label: 'C · Tosca alone in his thoughts', m: 'C', mNote: 'The comparison becomes a declaration of love' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Two faces before the painter', text: '“Recondita armonia di bellezze diverse” — “A hidden harmony of different beauties.” Cavaradossi’s painted Mary Magdalene has blonde hair and blue eyes. His lover, Floria Tosca, is dark-haired. The tenor’s aria begins with a painter enjoying the difference.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act I, scene 3; La Scala libretto, pp. 2–3, including the description of the painting. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translation ours.' },
    { t: 35, kind: 'world', title: 'The model has a secret', text: 'The blonde woman is the Marchesa Attavanti. Cavaradossi has watched her praying in Sant’Andrea della Valle and painted her without her knowing. Her visits have another purpose: she hides clothes in the family chapel to help her brother Angelotti escape.', basis: 'documented', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act I, scenes 3 and 6; La Scala libretto, pp. 2 and 11. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf' },
    { t: 64, kind: 'music', title: 'Blue eyes, black eyes', text: 'Cavaradossi speaks to the painting as though the woman were there: “Tu azzurro hai l’occhio, Tosca ha l’occhio nero” — “Your eyes are blue; Tosca’s are black.” The aria turns his inspection of a canvas into an intimate comparison with the woman he loves.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act I, Recondita armonia; La Scala libretto, p. 3. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translation ours; the words describe the aria’s central comparison.' },
    { t: 102, kind: 'form', title: 'Only Tosca remains', text: 'Art can bring different beauties together, Cavaradossi says. Then the argument falls away into a name: “Il mio solo pensier, Tosca, sei tu” — “My only thought, Tosca, is you.” The painting is still before him; the aria ends with the absent woman.', basis: 'score-proportion', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act I, final lines of Recondita armonia; La Scala libretto, p. 3. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translation ours; placed at the established closing section.' },
  ],
};
