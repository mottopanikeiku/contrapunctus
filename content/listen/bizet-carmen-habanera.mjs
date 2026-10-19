export default {
  id: 'bizet-carmen-habanera', composer: 'bizet', order: 1,
  work: 'Carmen', movement: 'Act I · Habanera — L’amour est un oiseau rebelle',
  year: '1873–75', key: 'D minor / D major', forces: 'Soprano and orchestra',
  performers: 'Geraldine Farrar, soprano; orchestra conducted by Walter B. Rogers',
  recorded: '9 December 1914, New York',
  source: {
    archive: {
      item: '78_carmen-love-is-like-a-wood-bird-act-1_geraldine-farrar-bizet_gbia0354066a',
      file: 'Carmen ("Love is Like a Wood Bird") (Ac - Geraldine Farrar.mp3',
    },
    rights: {
      basis: 'us-published-before-cutoff', published: 1915,
      evidence: 'Victor 87210, Geraldine Farrar, Habanera: The Talking Machine World, January 1915, p. 62, lists it among the February Red Seal releases (https://www.worldradiohistory.com/Archive-Talking-Machine/10s/Talking-Machine-1915-01.pdf). Session and matrix B-15474-2 are independently catalogued by Florida Atlantic University (https://rsa.fau.edu/album/7640) and the Library of Congress (https://www.loc.gov/item/jukebox-11762/). US protection for this pre-1923 publication ended on 31 December 2021.',
    },
  },
  intro: 'In the Habanera from Act I of <i>Carmen</i>, Carmen sings that love obeys no law, over a bass that repeats the same dance step. Geraldine Farrar sings both verses in French in this acoustic recording made in 1914.',
  sections: [
    { t: 0, label: 'A · Chromatic verse over habanera bass', m: 'A' },
    { t: 46, label: 'B · Major-key section', m: 'B' },
    { t: 84, label: 'A′ · Second verse, descending theme returns', m: 'A′', mNote: 'The descending tune returns for the second verse.' },
    { t: 123, label: 'B′ · Refrain and closing warning', m: 'B′', mNote: 'The major-key refrain returns, with an extended close.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Habanera, Carmen’s entrance', text: 'The bass repeats the habanera rhythm throughout: a dotted quaver, a semiquaver, then two quavers. Above it the voice descends by semitones. Carmen enters with a song about a bird that nobody can tame.', basis: 'general', precision: 'passage', evidence: 'Bizet’s own piano reduction, Choudens vocal score (archive.org copy catalogued 1883), no. 5, pp. 49–50: the repeated bass and chromatic vocal line. https://archive.org/details/carmenopracomi00bize' },
    { t: 50, kind: 'form', title: 'Refrain in D major', text: 'At the refrain, “L’amour est enfant de Bohème”, the music moves from D minor to D major and the bass keeps its dance rhythm. The words warn that anyone Carmen loves should beware.', basis: 'score-proportion', precision: 'passage', evidence: 'Choudens vocal score (copy catalogued 1883), no. 5, pp. 51–52: the major-key refrain beginning “L’amour est enfant de Bohème”. The verse-and-refrain design is also described at https://en.wikipedia.org/wiki/Habanera_(aria).' },
    { t: 105, kind: 'world', title: 'Borrowing from Iradier', text: 'Bizet built Carmen’s entrance from Sebastián Iradier’s song <i>El arreglito</i> and wrote the Habanera’s words himself. Choudens’s vocal score acknowledged the Spanish source in a footnote beneath the opening bars.', basis: 'documented', precision: 'passage', evidence: 'Hugh Macdonald, Bizet Catalogue, Carmen: borrowing from Iradier and attribution of the Habanera text to Bizet. The Choudens vocal score, p. 49, prints the footnote “Imitée d’une chanson espagnole. Propriété des Éditeurs du Ménestrel.” https://hdwlabs.artsci.wustl.edu/bizet/works/Carmen.html https://archive.org/details/carmenopracomi00bize' },
    { t: 150, kind: 'music', title: 'Closing refrain', text: 'The refrain returns, and the words about love now address “you” directly. The repeating bass continues under both verses, and Carmen stretches the phrase above it while the dance rhythm holds.', basis: 'general', precision: 'passage', evidence: 'Choudens vocal score (copy catalogued 1883), no. 5, pp. 57–59, closing refrain. Bru Zane’s Carmen study discusses Bizet’s pointed use of the singular “tu”: https://www.bruzanemediabase.com/exploration/oeuvres/carmen-meilhac-l-halevy-bizet' },
  ],
};
