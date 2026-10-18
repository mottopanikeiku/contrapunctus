export default {
  id: 'origins-machaut-douce-dame-jolie',
  composer: 'origins-machaut',
  order: 1,
  short: true,
  work: 'Douce dame jolie / L’espoir que j’ai',
  movement: 'Machaut and Janequin · Weckerlin arrangements · complete Victor side',
  year: '14th- and 16th-century songs; later arrangements',
  key: '',
  forces: 'Tenor, harp and lute',
  performers: 'Lambert Murphy, tenor; Stefano Di Stefano, harp; William Carlino, lute',
  recorded: '17 March 1915; New York',
  source: {
    archive: { item: 'loc-jukebox-12087-douce-dame-jolie', file: 'jukebox-12087_douce-dame-jolie.mp3' },
    rights: {
      basis: 'us-published-before-cutoff',
      published: 1916,
      evidence: 'John R. Bolig, The Victor Discography: Green, Blue, and Purple Labels, entry 45083, gives release in May 1916, distinct from the 17 March 1915 session. The label identifies 45083-B; LOC and DAHR identify matrix B-15595, take 4. The Archive mirror’s 1915 first-publication assertion is not followed. https://adp-assets.library.ucsb.edu/BoligGreenBluePurple.pdf ; https://adp.library.ucsb.edu/index.php/matrix/refer/700000578 ; https://www.loc.gov/item/jukebox-12087/?fo=json',
    },
  },
  intro: 'This complete acoustic record side pairs Machaut with Janequin in arrangements from Weckerlin’s collection. Murphy’s tenor, harp and lute document an early twentieth-century presentation of old French song, not an unaltered medieval performance.',
  question: 'What changes when a medieval solo song is heard through a later accompanied arrangement?',

  sections: [
    { t: 0, label: 'Paired songs · complete published side', m: 'A', mNote: 'two arrangements retained together; their internal boundary is not aligned' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Two songs, one side', text: 'This side contains Machaut’s <i>Douce dame jolie</i> and Janequin’s <i>L’espoir que j’ai</i>, in that order. Both pass through Weckerlin’s arrangements; the record is not a complete performance of Machaut’s original virelai.', basis: 'documented', precision: 'passage', evidence: 'Victor label 45083-B numbers both songs and names Weckerlin’s Échos du temps passé. DAHR identifies the paired master B-15595. The analysis measures the whole side at 98.8 s but does not identify the switch between songs; no internal cut point is assigned.' },
    { t: 34, kind: 'world', title: 'A name behind a pseudonym', text: 'Victor also lists Lambert Murphy under the name Raymond Dixon. These are not two tenors sharing the side: DAHR identifies Dixon as Murphy’s pseudonym and credits the issued take to a single male soloist.', basis: 'documented', precision: 'passage', evidence: 'DAHR B-15595 personnel explicitly says “Pseudonym for Lambert Murphy”; its description is male vocal solo with harp and lute. https://adp.library.ucsb.edu/index.php/matrix/refer/700000578' },
    { t: 68, kind: 'listen', title: 'Voice and plucked strings', text: 'Across the side, compare the tenor’s sustained line with the shorter decay of the harp and lute. These accompaniments belong to this documented historical arrangement; they are not evidence for the instruments Machaut originally expected.', basis: 'general', precision: 'passage', evidence: 'The label specifies tenor with harp and lute; DAHR names Stefano Di Stefano for takes 3–4 and William Carlino. The report shows recorded sound continuing through this passage but cannot separate its instruments. No entrance, song boundary or original medieval instrumentation is inferred.' },
  ],
  transitions: [],
};
