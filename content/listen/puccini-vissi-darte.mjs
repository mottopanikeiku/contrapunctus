export default {
  id: 'puccini-vissi-darte', composer: 'puccini', order: 3,
  work: 'Tosca', movement: 'Act II · Vissi d’arte',
  set: { id: 'puccini-tosca-arias', title: 'Tosca — three arias', part: 2, of: 3 },
  year: '1900', key: '', forces: 'Soprano and accompaniment; acoustic scoring unestablished',
  performers: 'Emmy Destinn, soprano; accompanists uncredited', recorded: '23 April 1914',
  source: { file: "File:Emmy Destinn, Vissi d'arte (Tosca).ogg" },
  intro: 'Scarpia demands Tosca’s body as the price of her lover’s freedom. Emmy Destinn sings the prayer in which Tosca, a singer herself, puts her life in art and love before God.',
  sections: [
    { t: 0, label: 'A · Tosca accounts for her life', m: 'A', mNote: 'Art, love and secret acts of charity' },
    { t: 74, label: 'B · Flowers, jewels and prayers', m: 'B', mNote: 'The soprano recalls her gifts to the church' },
    { t: 154, label: 'C · The question returns', m: 'C', mNote: 'Tosca asks God why he repays her with suffering' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'A singer’s prayer', text: '“Vissi d’arte, vissi d’amore” — “I lived for art, I lived for love.” Tosca begins with the two things she has trusted. She insists that she has harmed nobody and has quietly helped people in need.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act II, Vissi d’arte; La Scala libretto, p. 34. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translation ours.' },
    { t: 35, kind: 'world', title: 'Scarpia waits for an answer', text: 'Scarpia has had Cavaradossi tortured and condemned. Now he offers Tosca her lover’s life in return for sex. She tries to flee; he reminds her that he holds Mario. The prayer happens with her tormentor still in the room.', basis: 'documented', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act II, the confrontation immediately before Vissi d’arte; La Scala libretto, pp. 30–34. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf' },
    { t: 74, kind: 'music', title: 'Flowers on the altar', text: 'Tosca’s faith has taken ordinary, tangible forms: prayers, flowers on the altar, jewels for the Madonna’s mantle. She has also given her singing to the stars. The aria gathers these offerings before the words turn back towards her own pain.', basis: 'general', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act II: the central verses of Vissi d’arte name the prayers, flowers, jewels and singing. La Scala libretto, p. 34. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf' },
    { t: 154, kind: 'form', title: 'The unanswered question', text: '“Perché me ne rimuneri così” — “Why do you repay me like this.” Tosca returns to the question with which she has already interrupted her prayer. When the aria ends, Scarpia answers with a command: “Risolvi!” — “Decide!”', basis: 'score-proportion', precision: 'passage', evidence: 'Illica and Giacosa, Tosca (1900), Act II: the final question of Vissi d’arte and Scarpia’s next line; La Scala libretto, p. 34. https://www.teatroallascala.org/static/upload/tos/tosca-libretto-accessibile.pdf . Translations ours; Scarpia’s reply belongs to the opera, beyond this solo recording.' },
  ],
};
