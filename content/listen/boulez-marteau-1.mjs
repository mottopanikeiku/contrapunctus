const LONCHAMPT = 'Jacques-Marie Lonchampt, programme note in the IRCAM work record: https://ressources.ircam.fr/fr/works/work/6981';
const SLEEVE = 'the Vega C 35 A 67 sleeve (note by Pierre Souvtchinsky, credits), scanned in the Internet Archive item https://archive.org/details/c-35-a-67-boulez-o-le-marteau-sans-maitre-pierre-boulez';
const BIO = 'Philharmonie de Paris and French Ministry of Culture, Pierre Boulez archival biography, https://www.pierreboulez.org/default/biographie.aspx?_lg=en-US';

export default {
  id: 'boulez-marteau-1',
  composer: 'boulez',
  order: 1,
  work: 'Le Marteau sans maître',
  movement: 'I–V. First half, to “Bel édifice et les pressentiments”, first version',
  set: { id: 'boulez-marteau', title: 'Le Marteau sans maître', part: 1, of: 2, unit: 'parts' },
  year: '1952–55; revised 1957',
  key: '',
  forces: 'Voice (alto), alto flute, viola, guitar, vibraphone, xylorimba and percussion',
  performers: 'Marie-Thérèse Cahn, voice; J. Tiberge, flute; Collot, viola; A. Stingl, guitar; J. Delecluse, vibraphone; P. Naudin, xylorimba; A. Cavaille, percussion; Pierre Boulez, conductor',
  recorded: '1956 season',
  source: {
    archive: { item: 'c-35-a-67-boulez-o-le-marteau-sans-maitre-pierre-boulez', file: 'C 35 A 67•f1.mp3' },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1956,
      evidence: 'Philharmonie de Paris and French Ministry of Culture, Pierre Boulez archival biography, https://www.pierreboulez.org/default/biographie.aspx?_lg=en-US : the entry headed 1956 lists the record release of Le Marteau sans maître, Domaine musical, Pierre Boulez, Marie-Thérèse Cahn, on Véga. L’Express, 12 November 1959, https://archive.org/details/sim_express_1959-11-12_439 , lists the “version intégrale” on Vega C 35 A 67 with its Grand Prix du Disque. Boulez, Penser la musique aujourd’hui (Paris: Gonthier, 1963), discography: “Vega n° C 35 A 67 version intégrale. (Enregistrement saison 1956.)” Territorial EU basis only; US status not established.',
    },
  },
  intro: 'Pierre Boulez conducted this recording of the complete <i>Le Marteau sans maître</i> for Vega, with Marie-Thérèse Cahn as the voice. The two sides of the LP are published as two parts, and this one holds movements I to V.',
  sections: [
    { t: 0, label: 'A · I, Avant “L’Artisanat furieux”', m: 'A' },
    { t: 92, label: 'B · II, Commentaire I', m: 'B' },
    { t: 325, label: 'C · III, “L’Artisanat furieux”, voice and flute', m: 'C' },
    { t: 458, label: 'D · IV, Commentaire II', m: 'D' },
    { t: 657, label: 'E · V, “Bel édifice”, first version', m: 'E' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Movement I: two duos', text: 'Avant “L’Artisanat furieux” begins as two duos, flute with vibraphone and guitar with viola. After a short viola cadenza the four instruments mingle more freely.', basis: 'score-proportion', precision: 'passage', evidence: `${LONCHAMPT}: “Avant L’Artisanat furieux débute comme un double duo entre flûte et vibraphone d’une part, et guitare et alto d’autre part”.` },
    { t: 40, kind: 'world', title: 'Domaine musical, 1956 season', text: 'The sleeve calls this the fourth concert of the Domaine musical’s 1956 season, recorded under the auspices of the International Music Council with UNESCO’s help. Boulez had conducted the French première, with Marie-Thérèse Cahn, at the Petit Marigny on 21 March 1956.', basis: 'documented', precision: 'passage', evidence: `Recording credit: ${SLEEVE} . French première of 21 March 1956 and Cahn: ${BIO}` },
    { t: 92, kind: 'music', title: 'Movement II: flute, then xylorimba', text: 'Commentaire I de “Bourreaux de solitude” is roughly in three parts. A long flute solo over the soft murmur of the other instruments is followed by a harsher section led by the xylorimba, then a brief return of the flute.', basis: 'score-proportion', precision: 'passage', evidence: `${LONCHAMPT}, on Commentaire I.` },
    { t: 150, kind: 'life', title: 'Central African wood percussion', text: 'Boulez told Jed Distler in 2000 that the start of this second piece was “very much under the influence of central African music”, with its wood percussion and xylophone. In 1945–46 Mady Sauvageot, curator of music collections at the Musée Guimet, had introduced him to recordings from Africa and Asia.', basis: 'documented', precision: 'passage', evidence: 'Boulez to Jed Distler, London, August 2000, republished 6 January 2016: https://jdistlerblog.wordpress.com/2016/01/06/an-interview-with-pierre-boulez-1925-2016/ . Recordings of music from Africa, India, Indonesia and Asia discovered through Mady Sauvageot, winter 1945–46: Philharmonie de Paris and French Ministry of Culture, Pierre Boulez archival biography, https://www.pierreboulez.org/default/biographie.aspx?_lg=en-US' },
    { t: 300, kind: 'form', title: 'Nine parts, unequal silences', text: 'Pierre Souvtchinsky’s sleeve note says the work divides into nine parts separated by silences of unequal length, each with its own meaning. The next movement follows one of those pauses.', basis: 'documented', precision: 'passage', evidence: `Souvtchinsky: “L’œuvre se divise en 9 parties séparées par des silences de durées inégales”; our translation. ${SLEEVE}` },
    { t: 325, kind: 'music', title: 'Movement III: voice and flute', text: 'In “L’Artisanat furieux” the voice sings Char’s poem, which begins “La roulotte rouge au bord du clou”, with the flute alone. Lonchampt notes that this scoring cites “Der kranke Mond” from Schoenberg’s <i>Pierrot lunaire</i>, and that the melodic lines alternate between superposition and overlap.', basis: 'score-proportion', precision: 'passage', evidence: `${LONCHAMPT}, on L’Artisanat furieux. Text of the poem, as printed on the Vega sleeve: ${SLEEVE}` },
    { t: 458, kind: 'music', title: 'Movement IV: no flute', text: 'Commentaire II is the only movement without the flute. It moves in blocks of different lengths, separated by stops and sometimes filled with vibraphone resonance. The viola plays pizzicato until a section where it takes up the bow, and the triangle enters at the end of a rapid passage.', basis: 'score-proportion', precision: 'passage', evidence: `${LONCHAMPT}, on Commentaire II.` },
    { t: 657, kind: 'music', title: 'Movement V: first “Bel édifice”', text: '“Bel édifice et les pressentiments”, first version, alternates unstable instrumental sections with entries for the voice over a more homophonic accompaniment. It is the first of two settings of the same Char poem; the second ends the work.', basis: 'score-proportion', precision: 'passage', evidence: `${LONCHAMPT}, on Bel édifice et les pressentiments and on the three cycles (movements 5 and 9 are two successive versions of one text).` },
    { t: 760, kind: 'world', title: 'First performance, Baden-Baden, 1955', text: 'Hans Rosbaud conducted the first performance on 18 June 1955 at the International Society for Contemporary Music festival in Baden-Baden, with Sybilla Plate as soloist. The work was chosen after a hard struggle within the French selection committee.', basis: 'documented', precision: 'passage', evidence: `Date, conductor and soloist: ${BIO} . Selection committee: ${LONCHAMPT}` },
  ],
};
