const LONCHAMPT = 'Jacques-Marie Lonchampt, programme note in the IRCAM work record: https://ressources.ircam.fr/fr/works/work/6981';
const SLEEVE = 'the Vega C 35 A 67 sleeve (note by Pierre Souvtchinsky, credits), scanned in the Internet Archive item https://archive.org/details/c-35-a-67-boulez-o-le-marteau-sans-maitre-pierre-boulez';
const BIO = 'Philharmonie de Paris and French Ministry of Culture, Pierre Boulez archival biography, https://www.pierreboulez.org/default/biographie.aspx?_lg=en-US';
const EXPRESS = 'L’Express, 12 November 1959, “Quelques disques de musique contemporaine”: https://archive.org/details/sim_express_1959-11-12_439';

export default {
  id: 'boulez-marteau-2',
  composer: 'boulez',
  order: 2,
  work: 'Le Marteau sans maître',
  movement: 'VI–IX. Second half, from “Bourreaux de solitude” to “Bel édifice et les pressentiments”, second version',
  set: { id: 'boulez-marteau', title: 'Le Marteau sans maître', part: 2, of: 2 },
  year: '1952–55; revised 1957',
  key: '',
  forces: 'Voice (alto), alto flute, viola, guitar, vibraphone, xylorimba and percussion',
  performers: 'Marie-Thérèse Cahn, voice; J. Tiberge, flute; Collot, viola; A. Stingl, guitar; J. Delecluse, vibraphone; P. Naudin, xylorimba; A. Cavaille, percussion; Pierre Boulez, conductor',
  recorded: '1956 season',
  source: {
    archive: { item: 'c-35-a-67-boulez-o-le-marteau-sans-maitre-pierre-boulez', file: 'C 35 A 67•f2.mp3' },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1956,
      evidence: 'Philharmonie de Paris and French Ministry of Culture, Pierre Boulez archival biography, https://www.pierreboulez.org/default/biographie.aspx?_lg=en-US : the entry headed 1956 lists the record release of Le Marteau sans maître, Domaine musical, Pierre Boulez, Marie-Thérèse Cahn, on Véga. L’Express, 12 November 1959, https://archive.org/details/sim_express_1959-11-12_439 , lists the “version intégrale” on Vega C 35 A 67 with its Grand Prix du Disque. Boulez, Penser la musique aujourd’hui (Paris: Gonthier, 1963), discography: “Vega n° C 35 A 67 version intégrale. (Enregistrement saison 1956.)” Territorial EU basis only; US status not established.',
    },
  },
  intro: 'The second side of Boulez’s Vega recording of <i>Le Marteau sans maître</i> holds movements VI to IX: the sung “Bourreaux de solitude”, two instrumental pieces, and the closing “Bel édifice et les pressentiments”, for which the whole ensemble plays.',
  sections: [
    { t: 0, label: 'A · VI, “Bourreaux de solitude”', m: 'A' },
    { t: 192, label: 'B · VII, Après “L’Artisanat furieux”', m: 'B' },
    { t: 253, label: 'C · VIII, Commentaire III', m: 'C' },
    { t: 599, label: 'D · IX, “Bel édifice”, second version', m: 'D' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Movement VI: “Bourreaux de solitude”', text: 'The sung setting of Char’s “Bourreaux de solitude”, the poem that the earlier Commentaires comment on. Lonchampt calls it the most austere piece of the work, and hears complementary rhythms among the instruments at the start, perhaps inherited from Webern’s Symphony, Op. 21.', basis: 'score-proportion', precision: 'passage', evidence: `${LONCHAMPT}, on Bourreaux de solitude. Commentaires as purely instrumental pieces and the poems set: Souvtchinsky’s note on ${SLEEVE}` },
    { t: 60, kind: 'world', title: 'The companion disc, C 30 A 66', text: 'Vega’s companion disc C 30 A 66, headed as the fourth concert of 1956, holds extracts of <i>Le Marteau</i> with Webern’s Symphony and Lieder, Nono’s <i>Incontri</i> and Stockhausen’s <i>Kontra-Punkte</i>, all conducted by Boulez.', basis: 'documented', precision: 'passage', evidence: `Track list of the Vega disc “Les Concerts du Domaine Musical – IVe Concert 1956”, Internet Archive item lp_les-concerts-du-domaine-musical-ive-conc_anton-webern-luigi-nono-karlheinz-stockhau: https://archive.org/details/lp_les-concerts-du-domaine-musical-ive-conc_anton-webern-luigi-nono-karlheinz-stockhau . Catalogue number and conductor: ${EXPRESS}` },
    { t: 192, kind: 'music', title: 'Movement VII: three instruments', text: 'Après “L’Artisanat furieux” is the shortest movement. Lonchampt finds it close to the first movement, written for three instruments, with a rhythmic play that is easy to follow.', basis: 'score-proportion', precision: 'passage', evidence: `${LONCHAMPT}, on Après L’Artisanat furieux.` },
    { t: 253, kind: 'music', title: 'Movement VIII: Commentaire III', text: 'Commentaire III resembles Commentaire I: Lonchampt hears the flute solo and the harsh double notes of the xylorimba laid over one another. The percussion has a formal role, playing claves, then a double bell, then bongos.', basis: 'score-proportion', precision: 'passage', evidence: `${LONCHAMPT}, on Commentaire III.` },
    { t: 330, kind: 'world', title: 'Grand Prix du Disque', text: 'L’Express listed this disc on 12 November 1959 as the complete version of the work, conducted by Boulez with M. T. Cahn, and noted that it had won the Grand Prix du Disque of the Académie Charles-Cros.', basis: 'documented', precision: 'passage', evidence: `${EXPRESS} (“Version intégrale … Grand Prix du Disque ; Académie Charles-Cros. Vega C 35 A 67”).` },
    { t: 480, kind: 'life', title: 'Boulez and René Char', text: 'The three poems come from René Char’s collection <i>Le Marteau sans maître</i>. Boulez had already set Char in <i>Le Visage nuptial</i>, composed in 1946.', basis: 'documented', precision: 'passage', evidence: `${LONCHAMPT} (the poems and Visage nuptial of 1946). First version of Visage nuptial, October 1946: ${BIO}` },
    { t: 599, kind: 'music', title: 'Movement IX: the whole ensemble', text: 'In the second “Bel édifice et les pressentiments” the whole ensemble plays together for the only time in the work. Lonchampt hears a free, recitative-like tempo at the start and quotations from earlier movements.', basis: 'score-proportion', precision: 'passage', evidence: `${LONCHAMPT}, on the last piece: “réunie au complet pour la seule dernière pièce”; “tempo libre de récit”; “citations des pièces antérieures”.` },
    { t: 700, kind: 'music', title: 'Voice and flute without words', text: 'The voice is soon freed from the text and uses Sprechgesang at moments. It then alternates wordless phrases with the flute, supported by the ensemble except for the percussion.', basis: 'score-proportion', precision: 'passage', evidence: `${LONCHAMPT}, on Bel édifice et les pressentiments (version 2).` },
    { t: 940, kind: 'music', title: 'Flute and deep percussion', text: 'The movement closes with the flute against two low tam-tams and a gong. Lonchampt describes the mood as recollected (“recueillie”).', basis: 'score-proportion', precision: 'passage', evidence: `${LONCHAMPT}: the flute, “précisément accompagnée par les percussions profondes (deux tam-tams graves et gong)”, concludes “dans une ambiance recueillie”.` },
  ],
};
