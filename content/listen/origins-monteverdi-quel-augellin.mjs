export default {
  id: 'origins-monteverdi-quel-augellin',
  composer: 'origins-monteverdi',
  order: 1,
  short: true,
  work: 'Quel augellin che canta',
  movement: 'Madrigals, Book IV · No. 13, SV 87',
  year: '1603 publication',
  key: '',
  forces: 'Five-part unaccompanied vocal ensemble',
  performers: 'The Tudor Consort; Alastair Carey, director',
  recorded: '2 November 2005, Parroquial Church, Ordizia, Spain',
  source: { file: 'File:The Tudor Consort - 05 - Claudio Monteverdi - Quel Augelin Che Canta.ogg' },
  intro: 'A bird flits from fir to beech to myrtle, singing of love. In Monteverdi’s five-part madrigal, the Tudor Consort passes its quick notes from voice to voice.',

  sections: [
    { t: 0, label: 'A · Three high voices sing the bird', m: 'A', mNote: 'Two sopranos and alto share the quick figures' },
    { t: 40, label: 'B · Five voices, a declaration of love', m: 'B', mNote: 'Tenor and bass join the upper singers' },
    { t: 86, label: 'C · The bird receives a blessing', m: 'C', mNote: 'Running notes extend the final words' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'A bird in three voices', text: 'Two sopranos and an alto begin; tenor and bass wait. The upper singers share quick runs on the words for singing and flying. Monteverdi gives his little bird three throats.', basis: 'score-proportion', precision: 'passage', evidence: 'Daniel Van Gilst’s edition (2019), bars 1–17: the upper trio sets the bird’s song and flight before the lower parts enter. https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf' },
    { t: 40, kind: 'world', title: 'Guarini’s amorous bird', text: 'In Guarini’s <i>Il pastor fido</i>, a bird flies between a fir, a beech and a myrtle. If it could speak, it would declare that it burns with love. Its mate answers in the same spirit; the human speaker blesses the little bird.', basis: 'documented', precision: 'passage', evidence: 'Guarini, Il pastor fido, Act I, scene 1, lines 175–186, with Monteverdi’s adapted ending in the 1603 madrigal. LiederNet gives the original and sung texts. https://www.lieder.net/lieder/get_text.html?RF=0&TextId=7068' },
    { t: 86, kind: 'music', title: 'The little bird lingers', text: 'The final blessing keeps the bird in the air. Quick notes spread across the upper voices while the bass holds longer notes below. The last words, <i>vago augelletto</i> — lovely little bird — stretch through phrase after phrase.', basis: 'score-proportion', precision: 'passage', evidence: 'Van Gilst’s edition (2019), bars 59–74, setting “amoroso, gentil, vago augelletto”; translation ours. https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf' },
  ],
  transitions: [
    { id: 'sustained-middle', title: 'The lower voices join the bird', from: 'A · Three high voices sing the bird', to: 'B · Five voices, a declaration of love', at: { t: 40 }, span: [30, 55], how: '<p>Tenor and bass turn the opening trio into five-part singing. The poem moves from the bird’s flight to its imagined declaration of love. The bass has longer notes beneath the sopranos’ running phrases, and the voices bring their declarations to a shared close.</p>', devices: ['texture change', 'register change'], basis: 'score-proportion', precision: 'passage', evidence: 'Van Gilst’s edition (2019), bars 17–31, the lower entries and setting of “s’avesse umano spirto” and “ardo d’amore”. https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf' },
    { id: 'final-expansion', title: 'The blessing grows new wings', from: 'B · Five voices, a declaration of love', to: 'C · The bird receives a blessing', at: { t: 86 }, span: [76, 103], how: '<p>The blessing begins in the three upper voices. Tenor and bass rejoin, and the word <i>vago</i> grows into long runs passed among the singers. Beneath them the bass moves in slower notes, carrying the phrase towards its final held chord.</p>', devices: ['texture change', 'motivic link'], basis: 'score-proportion', precision: 'passage', evidence: 'Van Gilst’s edition (2019), bars 44–74: upper-trio blessing, lower entries from bar 55 and the extended ending. https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf' },
  ],
  orchestra: {
    ensemble: ['chorus'],
    basis: 'documented',
    source: { title: 'Monteverdi, Quel augellin che canta, ed. Daniel Van Gilst (2019), CC0', url: 'https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf', locator: 'Four-page score for two sopranos, alto, tenor and bass. The upper trio begins alone; tenor and bass join later.' },
    timeline: [
      { t: 0, playing: ['chorus'], lead: ['chorus'], note: 'Two sopranos and an alto share the bird’s quick figures; tenor and bass wait.' },
    ],
  },
};
