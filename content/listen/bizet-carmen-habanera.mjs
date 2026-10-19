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
  intro: 'Carmen announces that love obeys no law, over a bass that repeats the same dance step. Geraldine Farrar sings the two verses in French in this 1914 acoustic recording.',
  sections: [
    { t: 0, label: 'A · Chromatic verse, rocking bass', m: 'A' },
    { t: 46, label: 'B · The major-key warning', m: 'B' },
    { t: 84, label: 'A′ · The bird escapes again', m: 'A′', mNote: 'The descending tune returns for the second verse' },
    { t: 123, label: 'B′ · Refrain and closing warning', m: 'B′', mNote: 'The major-key refrain returns and extends the close' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'The bass keeps dancing', text: 'A dotted quaver, a semiquaver, then two quavers: the habanera rhythm keeps circling underneath a voice that slips down by semitones. Carmen makes her entrance with a song about a bird that nobody can tame.', basis: 'general', precision: 'passage', evidence: 'Bizet’s own piano reduction, Choudens vocal score (archive.org copy catalogued 1883), no. 5, pp. 49–50: the repeated bass and chromatic vocal line. https://archive.org/details/carmenopracomi00bize' },
    { t: 50, kind: 'form', title: 'A warning in major', text: 'The refrain turns from D minor to D major while the bass keeps its dance rhythm. The brighter key carries a threat: if Carmen loves you, you should beware.', basis: 'score-proportion', precision: 'passage', evidence: 'Choudens vocal score (copy catalogued 1883), no. 5, pp. 51–52: the major-key refrain beginning “L’amour est enfant de Bohème”. The verse-and-refrain design is also described at https://en.wikipedia.org/wiki/Habanera_(aria).' },
    { t: 105, kind: 'world', title: 'A tune from Iradier', text: 'Bizet builds Carmen’s entrance from Sebastián Iradier’s song <i>El arreglito</i>. He supplies the Habanera’s words himself. Choudens’s vocal score acknowledges the Spanish source in a footnote beneath the opening bars.', basis: 'documented', precision: 'passage', evidence: 'Hugh Macdonald, Bizet Catalogue, Carmen: borrowing from Iradier and attribution of the Habanera text to Bizet. The Choudens vocal score, p. 49, prints the footnote “Imitée d’une chanson espagnole. Propriété des Éditeurs du Ménestrel.” https://hdwlabs.artsci.wustl.edu/bizet/works/Carmen.html https://archive.org/details/carmenopracomi00bize' },
    { t: 150, kind: 'music', title: 'The warning comes back', text: 'The refrain repeats its challenge, and the words about love become a direct address to “you”. That repeating bass has survived both verses; Carmen can stretch the phrase above it without losing the dance.', basis: 'general', precision: 'passage', evidence: 'Choudens vocal score (copy catalogued 1883), no. 5, pp. 57–59, closing refrain. Bru Zane’s Carmen study discusses Bizet’s pointed use of the singular “tu”: https://www.bruzanemediabase.com/exploration/oeuvres/carmen-meilhac-l-halevy-bizet' },
  ],
};
