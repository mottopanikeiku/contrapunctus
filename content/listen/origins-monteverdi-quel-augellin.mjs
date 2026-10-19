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
  intro: 'Monteverdi’s five-part madrigal Quel augellin che canta (Book IV, No. 13, SV 87) sets a text about a bird that flits from fir to beech to myrtle, singing of love. In this performance by the Tudor Consort, quick notes pass from voice to voice.',

  sections: [
    { t: 0, label: 'A · Two sopranos and alto, opening line', m: 'A', mNote: 'Two sopranos and alto share the quick figures.' },
    { t: 40, label: 'B · Five voices, a declaration of love', m: 'B', mNote: 'Tenor and bass join the upper voices.' },
    { t: 86, label: 'C · Running notes on the final words', m: 'C', mNote: 'Running notes extend the setting of the final words.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Opening, upper three voices', text: 'Two sopranos and an alto begin, and the tenor and bass rest. The upper singers share quick runs on the words for singing and flying.', basis: 'score-proportion', precision: 'passage', evidence: 'Daniel Van Gilst’s edition (2019), bars 1–17: the upper trio sets the bird’s song and flight before the lower parts enter. https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf' },
    { t: 40, kind: 'world', title: 'Text from Guarini’s Il pastor fido', text: 'In Guarini’s <i>Il pastor fido</i>, a bird flies between a fir, a beech and a myrtle. If it could speak, it would say that it burns with love. Its mate replies in the same terms, and the human speaker blesses the little bird.', basis: 'documented', precision: 'passage', evidence: 'Guarini, Il pastor fido, Act I, scene 1, lines 175–186, with Monteverdi’s adapted ending in the 1603 madrigal. LiederNet gives the original and sung texts. https://www.lieder.net/lieder/get_text.html?RF=0&TextId=7068' },
    { t: 86, kind: 'music', title: 'Closing phrase, bars 59–74', text: 'In the final blessing, quick notes spread across the upper voices while the bass holds longer notes below. The last words, <i>vago augelletto</i> (lovely little bird), are repeated through several phrases.', basis: 'score-proportion', precision: 'passage', evidence: 'Van Gilst’s edition (2019), bars 59–74, setting “amoroso, gentil, vago augelletto”; translation ours. https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf' },
  ],
  transitions: [
    { id: 'sustained-middle', title: 'Tenor and bass enter', from: 'A · Two sopranos and alto, opening line', to: 'B · Five voices, a declaration of love', at: { t: 40 }, span: [30, 55], how: '<p>Tenor and bass enter, and the opening trio becomes five-part writing (bars 17–31 in Van Gilst’s 2019 edition). The poem moves from the bird’s flight to the love it would declare “s’avesse umano spirto”. Beneath the sopranos’ running phrases, the bass has longer notes. All five voices then set “ardo d’amore” and reach a cadence together.</p>', devices: ['texture change', 'register change'], basis: 'score-proportion', precision: 'passage', evidence: 'Van Gilst’s edition (2019), bars 17–31, the lower entries and setting of “s’avesse umano spirto” and “ardo d’amore”. https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf' },
    { id: 'final-expansion', title: 'Upper-voice blessing and extended ending', from: 'B · Five voices, a declaration of love', to: 'C · Running notes on the final words', at: { t: 86 }, span: [76, 103], how: '<p>The blessing begins in the three upper voices. Tenor and bass then rejoin, and the word <i>vago</i> is set to long runs passed among the singers. Beneath them the bass moves in slower notes and leads the phrase to the final held chord.</p>', devices: ['texture change', 'motivic link'], basis: 'score-proportion', precision: 'passage', evidence: 'Van Gilst’s edition (2019), bars 44–74: upper-trio blessing, lower entries from bar 55 and the extended ending. https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf' },
  ],
  orchestra: {
    ensemble: ['chorus'],
    basis: 'documented',
    source: { title: 'Monteverdi, Quel augellin che canta, ed. Daniel Van Gilst (2019), CC0', url: 'https://ks15.imslp.org/files/imglnks/usimg/b/b7/IMSLP561996-PMLP525417-Monteverdi,_Claudio_-_Quel_augellin_che_canta_(5vx).pdf', locator: 'Four-page score for two sopranos, alto, tenor and bass. The upper trio begins alone; tenor and bass join later.' },
    timeline: [
      { t: 0, playing: ['chorus'], lead: ['chorus'], note: 'Two sopranos and an alto share the bird’s quick figures; tenor and bass are silent.' },
    ],
  },
};
