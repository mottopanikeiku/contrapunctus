export default {
  id: 'richard-strauss-im-abendrot',
  composer: 'richard-strauss',
  order: 3,
  work: 'Four Last Songs',
  movement: 'IV. Im Abendrot — Andante',
  year: '1948',
  key: 'E♭ major',
  forces: 'Soprano and orchestra',
  performers: 'Elisabeth Schwarzkopf, soprano; Philharmonia Orchestra; Otto Ackermann',
  recorded: 'September 1953, Watford Town Hall',
  source: {
    archive: {
      item: 'lp_four-last-songs-capriccio-op-85-closing_richard-strauss-elisabeth-schwarzkopf-phil',
      file: 'disc1/01.04. Four Last Songs: Im Abendrot.mp3'
    },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1954,
      evidence: 'Angel Records 35084, commercially published in the United States in 1954, as catalogued with the original LP scans at https://archive.org/details/lp_four-last-songs-capriccio-op-85-closing_richard-strauss-elisabeth-schwarzkopf-phil. Territorial EU public-domain recording basis; no US or worldwide clearance is asserted.'
    }
  },
  intro: '“Im Abendrot”, marked Andante, is the fourth of Strauss’s Four Last Songs; an old couple watch the evening fade, and at the closing question Strauss quoted a melody he had written nearly sixty years earlier. Elisabeth Schwarzkopf sings the complete song with Otto Ackermann and the Philharmonia Orchestra in their 1953 recording.',
  sections: [
    { t: 0, label: 'Intro · Strings over E♭', m: 'Intro' },
    { t: 84, label: 'A · The couple at sunset', m: 'A' },
    { t: 190, label: 'B · Flutes and solo violin', m: 'B' },
    { t: 332, label: 'Coda · Orchestral postlude', m: 'Coda' }
  ],
  cues: [
    {
      t: 0,
      kind: 'music',
      title: 'Orchestral prelude',
      text: 'The violins play a long descending line above held brass chords and a deep E♭. Woodwinds double and decorate the melody. The soprano rests through this Andante prelude and does not enter until after rehearsal B.',
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Boosey & Hawkes full score (1950), plate B. & H. 16918, pp. 44–46: Andante orchestral prelude, with the voice resting until after rehearsal B. https://petruccimusiclibrary.ca/files/imglnks/caimg/8/83/IMSLP615036-PMLP36684-Strauss_-_Four_Last_Songs.pdf'
    },
    {
      t: 94,
      kind: 'form',
      title: 'First stanza, soprano',
      text: 'Eichendorff’s couple has travelled together through hardship and happiness. The soprano sings their story in a moving line over short phrases in the strings, which keep a walking pace beneath her.',
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Boosey & Hawkes full score (1950), pp. 46–48, first stanza after rehearsal B; Joseph von Eichendorff’s German text is also printed in the original Angel 35084 booklet. https://archive.org/download/lp_four-last-songs-capriccio-op-85-closing_richard-strauss-elisabeth-schwarzkopf-phil/lp_four-last-songs-capriccio-op-85-closing_richard-strauss-elisabeth-schwarzkopf-phil_djvu.txt'
    },
    {
      t: 145,
      kind: 'life',
      title: 'Montreux, May 1948',
      text: 'Strauss finished <i>Im Abendrot</i> at Montreux on 6 May 1948, a month before his eighty-fourth birthday. It was the first of the four songs to be completed. After his death the publisher Ernst Roth placed it last and gave the collection its title.',
      basis: 'documented',
      precision: 'passage',
      evidence: 'Bryan Gilliam’s Boston Symphony programme note quotes Ernst Roth’s account of the manuscript dates and describes Roth’s posthumous title and ordering. https://www.bso.org/works/four-last-songs'
    },
    {
      t: 200,
      kind: 'music',
      title: 'Larks, two flutes',
      text: 'The poem has two larks rising above the darkening valleys. Strauss gives them to a pair of flutes, which trill above the soprano and the sustained strings.',
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Boosey & Hawkes full score (1950), pp. 49–51, rehearsals D–E: the paired flute trills surround the second stanza’s larks and continue into the third stanza. Calvin Dotsey’s Houston Symphony note describes the word painting: https://houstonsymphony.org/strauss-four-last-songs/'
    },
    {
      t: 332,
      kind: 'form',
      title: 'Quotation from Tod und Verklärung',
      text: 'After the final vocal question about death, the orchestra brings back the transfiguration theme from <i>Tod und Verklärung</i>, completed in 1889. The soprano’s part ends and the orchestra continues into a long postlude.',
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Boosey & Hawkes full score (1950), pp. 53–55, rehearsals G–I, and Andrew Porter’s Angel 35084 booklet identify the quotation around the final vocal question. The earlier work’s completion in 1889 is documented by Calvin Dotsey: https://houstonsymphony.org/strausss-death-transfiguration/'
    },
    {
      t: 400,
      kind: 'music',
      title: 'Piccolo trills and final chord',
      text: 'The two flautists change to piccolos for the final bird calls. Their trills sound above the orchestra as the tempo slows, and the song ends on an E♭ major chord.',
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Boosey & Hawkes full score (1950), p. 55, rehearsal I: both flute parts change to piccolo; rit. sehr langsam and the final E♭ major chord. https://petruccimusiclibrary.ca/files/imglnks/caimg/8/83/IMSLP615036-PMLP36684-Strauss_-_Four_Last_Songs.pdf'
    }
  ]
};
