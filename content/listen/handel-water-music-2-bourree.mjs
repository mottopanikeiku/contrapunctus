// Score evidence: Arnold, The Celebrated Water-musick in score (London, 1788), pp. 49–50 (Commons, BnF scans, images 26–27 of 30): https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(26_of_30).jpg
// Bar numbers and the instruction “This Air to be played 3 times over”: Hallische Händel-Ausgabe IV/13 (Redlich, Bärenreiter, 1962), Suite II, printed p. 53 (IMSLP #559922).

export default {
  id: 'handel-water-music-2-bourree',
  composer: 'handel',
  order: 5,
  work: 'Water Music, Suite No. 2 in D, HWV 349',
  movement: 'IV. Bourrée',
  set: { id: 'handel-water-music-2', title: 'Water Music · Suite No. 2', part: 4, of: 5 },
  year: '1717',
  key: 'D major',
  forces: 'Trumpets, horns, oboes, bassoon, strings and continuo',
  performers: 'Marine Chamber Orchestra of the United States Marine Band; Major Michelle Rakers, conductor',
  recorded: '29 January 2017',
  source: { file: "File:Handel's Water Music - 15. Bourree - Chamber Orchestra - United States Marine Band.opus" },
  intro: 'The Bourrée, fourth movement of the Water Music Suite No. 2 in D, HWV 349, is a twelve-bar dance in D major made of a short strain and a longer second strain, each repeated. Michelle Rakers and the Marine Chamber Orchestra play the whole dance three times.',

  sections: [
    { t: 0, label: 'A · Bourrée in D, twelve bars', m: 'A', mNote: 'A four-bar strain and an eight-bar strain, each repeated.' },
    { t: 24.6, label: 'A · Bourrée repeated, both strains', m: 'A', mNote: 'The upbeat begins a second playing of both strains.' },
    { t: 48.1, label: 'A′ · The two strains return in D major', m: 'A′', mNote: 'The same two strains return and close on D major.' },
  ],

  cues: [
    { t: 0, kind: 'form', title: 'Form: upbeat and two strains', text: 'The dance opens on a single upbeat. A four-bar phrase is played and repeated, followed by an eight-bar phrase, also repeated. The tune moves in quick, even notes over a steady bass line.', basis: 'score-proportion', precision: 'passage', evidence: 'Samuel Arnold’s full score, The Celebrated Water-musick (1788), pp. 49–50: upbeat, four-bar and eight-bar strains with repeat signs. https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(26_of_30).jpg' },
    { t: 30, kind: 'world', title: 'The bourrée, a French dance', text: 'A bourrée is a French folk dance of quick, skipping steps, associated in particular with the Auvergne, where the dancers sometimes wear wooden clogs. Handel’s <i>Water Music</i> places French dances beside English ones, and the programme note for this concert calls the hornpipe “Purcellian”. The Bourrée is one of the French dances.', basis: 'documented', precision: 'passage', evidence: 'Marine Chamber Orchestra programme, 29 January 2017: the English “Purcellian hornpipe” and the French overture and “several French dances”. https://web.archive.org/web/20251101025231id_/https://www.marineband.marines.mil/Portals/175/Docs/Programs/170129.pdf?ver=2017-01-24-094649-630 The dance: Encyclopaedia Britannica, “bourrée” (French folk dance with quick, skipping steps; dancers occasionally wear wooden clogs; notably associated with Auvergne; Handel’s suites among the 18th-century suites in which it appears as an optional galanterie), archived copy https://web.archive.org/web/20241217071129/https://www.britannica.com/art/bourree ; Pierre-Paul Lacas, Encyclopædia Universalis, “Bourrée” (popular French dance, origin unknown; in the Limousin and Auvergne in triple time; Handel among the composers of bourrées), https://www.universalis.fr/encyclopedie/bourree/ (both opened). Universalis gives the origin as unknown, so the note says “associated with”, not “began in”.' },
    { t: 48.1, kind: 'music', title: 'Suspension before the final cadence', text: 'The dance begins its third complete pass. At the end of the longer strain, an upper note is held over the bass and then falls a step, the 4–3 suspension figured beneath the stave in bars 11–12. The harmony then resolves to D major.', basis: 'score-proportion', precision: 'passage', evidence: 'Arnold’s full score (1788), p. 50: 4–3 figures before the final D major chord, bars 11–12. The established section marks the third complete pass. https://commons.wikimedia.org/wiki/File:The_celebrated_Water-musick._In_score._Composed_in_the_year_1716._By_G._F._Handel_-_btv1b10072587v_(27_of_30).jpg' },
  ],

  transitions: [
    {
      id: 'into-second-pass',
      title: 'D major cadence, then the upbeat',
      from: 'A · Bourrée in D, twelve bars',
      to: 'A · Bourrée repeated, both strains',
      at: { t: 24.6 },
      span: [20, 30],
      how: '<p>A 4–3 suspension delays the last cadence of the eight-bar strain. The bass reaches D and the upper parts hold the D major chord. The upbeat then starts the dance again, with no linking passage between the two rounds.</p>',
      devices: ['perfect cadence', 'motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Arnold’s full score (1788), pp. 49–50: the closing suspension and D major chord, then the opening upbeat. The existing sections identify the three complete passes.',
    },
    {
      id: 'into-third-pass',
      title: 'Third pass through the Bourrée',
      from: 'A · Bourrée repeated, both strains',
      to: 'A′ · The two strains return in D major',
      at: { t: 48.1 },
      span: [43, 54],
      how: '<p>The second pass closes on the same D major chord. The upbeat brings back the opening, and the short and long strains are played a final time. Both keep their repeats, and the bass returns to D at the final cadence.</p>',
      devices: ['perfect cadence', 'motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Arnold’s full score (1788), pp. 49–50: the two repeated strains and their closing cadence. The established section boundary marks the third pass.',
    },
  ],
};
