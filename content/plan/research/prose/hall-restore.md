# Hall restoration ledger

Each batch appends one section. Cap per recording: at most `max(3, ceil(duration / 40))` notes. Old versions: `git show 966bad62:content/listen/<id>.mjs`. Skipped throughout without comment: old `audio-feature` cues and `general` cues with no source.

## Batch 7

Agent Restore7. Counts are notes before → after; “restored” counts old candidates brought back (rewritten, sometimes re-timed or re-sourced); “added” counts new sourced notes that are not old cues.

### mozart-requiem-dies-irae (113 s, cap 3): 3 → 3, restored 0, discarded 4

- Discarded: “A text about judgement” (Dies irae = day of wrath; no story, cap reached); “A concert after a symphony” (Salzburg Festival, 26 July 1956; already in the file’s `recorded`, cap reached); “The basses change the argument” and “The orchestra has the last word” (both covered by the score-aligned notes at bars 40 and 66).

### mozart-requiem-lacrimosa (205 s, cap 6): 5 → 6, restored 1, discarded 6

- Restored: **Eybler’s two added bars** (t = 108), from old “Another hand before Süssmayr”. Source: Nowak, NMA Requiem foreword, pp. VII and XV (21 December 1791 declaration; Eybler’s traces from the Dies irae to “the two measures appended to the Lacrimosa”). https://dme.mozarteum.at/DME/objs/pdf/nma_14_-23_-3_eng.pdf (opened; page labels checked). The old “receipt” became “declaration”, the NMA’s word.
- Discarded: “A completion enters print” (1800 Breitkopf & Härtel; would sit 12 s from the t = 35 note, and one slot was left); “Beyond the surviving draft” (covered by the t = 79 note); “The prayer becomes more intimate” (covered by the transition into the quieter prayer); “The plea regains its weight” (covered by t = 136); “Walter does not treat every doubling as fixed” (Walter quoted via Hausner 1964, NMA p. XX note 53; slot used by Eybler; not independently checked beyond the NMA text); “A short Amen, not a fugue” (covered by t = 180).

### mussorgsky-night-bald-mountain (733 s, cap 19): 8 → 11, restored 3, discarded 3

- Restored: **Borodin meets the young officer** (t = 40), from old “An officer leaves service”, now the October 1856 scene with Borodin’s reminiscence and the 1858 resignation. https://en.wikipedia.org/wiki/Modest_Mussorgsky (opened).
- Restored: **A bell the hall could not tune** (t = 540), from old “An unfinished comic opera”, rebuilt around Rimsky-Korsakov’s own account (dream intermezzo ended by the village bell; tam-tam substituted at the 1886 première). https://en.wikipedia.org/wiki/Night_on_Bald_Mountain (opened; quotes Chronicle of My Musical Life).
- Restored: **Repin in the hospital** (t = 685, moved from 650 because the flute note occupies 650). https://en.wikipedia.org/wiki/Portrait_of_M._P._Mussorgsky and https://en.wikipedia.org/wiki/Modest_Mussorgsky (both opened). The portrait page prints the sittings as “14–17 March O.S. … 2–5 March N.S.”, which is reversed (the Mussorgsky ledger has 2–5 March O.S. = 14–17 March N.S. from Orlova, not reopened here: the Indiana University Press reader returned only its cookie shell), so the note gives no sitting dates.
- Discarded: “Balakirev rejects the score” (covered by t = 235); “An editor’s concert piece” (covered by t = 375); “From gathering to daybreak” (covered by the t = 500 bell note).
- Unresolved: the existing t = 235 note says the “wicked prank” remark is from a letter to Rimsky-Korsakov (LA Phil note); Wikipedia prints the same passage as part of a letter to Nikolsky. Left as it was.

### mussorgsky-pictures-baba-yaga (212 s, cap 6): 5 → 6, restored 1, discarded 3

- Restored: **A witches’ sabbath before** (t = 124), from old “The witches’ sabbath again”. Bald Mountain finished on St John’s Eve (23 June 1867) and refused by Balakirev: https://en.wikipedia.org/wiki/Night_on_Bald_Mountain ; Orrin Howard’s “best Bald Mountain pictorialism”: https://www.laphil.com/works/pictures-at-an-exhibition-modest-mussorgsky-zs2phpn9 (both opened).
- Discarded: “Earthy rushes and shrieks” and “A strident trumpet theme” (the old text was audio levels; the Philharmonia description is already in the t = 0 note); “A clock shaped like a hut” (covered by t = 100).

### mussorgsky-pictures-bydlo (139 s, cap 4): 4 → 4, restored 0, discarded 4

- Discarded: “A tuba tune from afar” (covered by t = 0); “Poland on Mussorgsky’s mind” (life; evidence was a site influence edge, not a primary source; cap reached); “Stasov’s ox-cart, and a secret” (covered by t = 78); “Harp and plucked bass” (covered by t = 118).

### mussorgsky-pictures-catacombae (113 s, cap 3): 3 → 3, restored 0, discarded 4

- Discarded: “Chords with echoes” (covered by t = 0); “Hartmann in the Paris catacombs” (covered by t = 56); “A brief mournful trumpet” (Philharmonia guide names the solo, no place for it in the music); “A friend’s sudden death” (Hartmann died 4 August 1873 aged 39; the t = 56 note already ends on it; cap reached).

### mussorgsky-pictures-goldenberg-schmuyle (128 s, cap 4): 3 → 4, restored 1, discarded 3

- Restored: **A more abrupt dismissal** (t = 112), from old “A sudden dismissal”. Steinberg: Mussorgsky ends with a long note, Ravel has Goldenberg dismiss Schmuyle more abruptly (https://www.bso.org/works/pictures-at-an-exhibition, opened); Wyld: the warmer idea “swiftly curtailed by the emphatic ending” (https://philharmonia-assets.s3.amazonaws.com/uploads/2022/04/07.04.22_RFH-online.pdf, opened).
- Discarded: “A slow, gruff unison” (covered by t = 0); “Two drawings Mussorgsky owned” (covered by t = 86); “A missing Promenade” (Ravel omits the fifth Promenade, Wikipedia; whether this recording’s album does is not documented, and the slot went to the dismissal).

### mussorgsky-pictures-great-gate (328 s, cap 9): 8 → 9, restored 1, discarded 5

- Restored: **Dedicated to Stasov** (t = 76, between 56 and 97), from old “Dedicated to Stasov”. https://en.wikipedia.org/wiki/Pictures_at_an_Exhibition (composition 2–22 June 1874; tribute five days after completion; publication note a month later; 1886 edition) and https://www.bso.org/works/pictures-at-an-exhibition (both opened).
- Discarded: “A proud brass opening” (covered by t = 0); “A gate that was never built” (covered by t = 56; the BSO page prints “April 4, 1886” for the assassination attempt, an evident slip for 1866, so no date is used); “The Promenade returns” (covered by t = 195); “Hartmann’s own favourite” (the t = 56 note covers the design; cap); “Ravel brings it to Paris” (covered by t = 150).

### mussorgsky-pictures-promenade-1 (101 s, cap 3): 3 → 3, restored 0, discarded 4

- Discarded: “The theme alone, then in chords” (covered by t = 0); “Slower, darker chords” (placed by audio; cap); “Hartmann is boiling” (letter to Stasov, probably 12 June 1874, verified in the Pictures article; the t = 56 note tells the exhibition story; cap reached); “Stasov’s picture of the walker” (Steinberg’s quotation of Stasov; cap reached).

### mussorgsky-pictures-promenade-2 (57 s, cap 3): 2 → 2, restored 0, discarded 2

- Discarded: “Horn and woodwinds” (covered by t = 0); “Ravel’s commission” (the same Koussevitzky story is already told in the Great Gate note at t = 150, and a third note in 57 s would crowd the track).

### mussorgsky-pictures-promenade-3 (30 s, cap 3): 1 → 2, restored 1, discarded 1

- Restored: **A cliffhanger in pizzicato** (t = 22). Wyld’s Philharmonia guide: Promenade 3 ends with “a cliffhanger of slowing pizzicato strings” (opened); Stasov’s description of the Tuileries picture via https://en.wikipedia.org/wiki/Pictures_at_an_Exhibition (opened).
- Discarded: “Trumpet and trombones, full band” (covered by t = 0).

### origins-buxtehude-praeludium-137 (300 s, cap 8): 6 → 7, restored 1, discarded 5

- Restored: **A 1984 organ in Gerstetten** (t = 266), from old “A modern instrument in Gerstetten”. Commons description: Reiser organ II/P/22, 1984, St Peter and St Paul, Gerstetten: https://commons.wikimedia.org/wiki/File:D._Buxtehude_Pr%C3%A4ludium,_Fuge_und_Chaconne_C-Dur_BuxWV_137_Fabian_W%C3%B6hrle_Kath._Kirche_Gerstetten.mp3 (opened).
- Discarded: “An organist in Lübeck” (covered by t = 70); “One subject, successive voices” (covered by t = 108); “Bach’s long absence” (covered by t = 176); “The fugue releases its pattern” (covered by t = 190); “A short ground, changing upper parts” (covered by t = 228).

### origins-corelli-concerto-6-4-first (205 s, cap 6): 5 → 6, restored 1, discarded 5

- Restored: **Printed after his death** (t = 126, from old “A publication after Corelli’s death”). Corelli died 8 January 1713 (https://en.wikipedia.org/wiki/Arcangelo_Corelli); first publication 1714, Amsterdam, dedicated to Johann Wilhelm, Elector Palatine (https://imslp.org/wiki/12_Concerti_Grossi,_Op.6_(Corelli,_Arcangelo)); both opened. The existing t = 93 note already gives Roger and 1714, so this one adds the death and the dedication.
- Discarded: “Small group and larger group” (covered by t = 20 and t = 93); “The source identifies a season” (already in `recorded` and `performers`); the four score-proportion notes on the Adagio, the entries and the repeats (covered by t = 0, 20, 102, 152).

### origins-josquin-mille-regretz (116 s, cap 3): 3 → 3, restored 0, discarded 3

- Discarded: “A disputed composer’s name” (IMSLP authorship note, Fallows’s 2009 defence; the dispute already sits in the t = 0 evidence and the work line says “attributed to”; cap reached — the strongest candidate left out); “Four lines of separation” (covered by t = 32); “Together and apart” (covered by t = 0).

### origins-monteverdi-quel-augellin (120 s, cap 3): 3 → 3, restored 0, discarded 4

- Discarded: “The bird has several voices” (covered by t = 0); “Guarini’s bird speaks of love” (covered by t = 40); “Motion against longer notes” (no score alignment; cap); “An Ordizia concert, not 2010” (already in `recorded`).

### origins-palestrina-sicut-lilium (279 s, cap 7): 5 → 6, restored 1, discarded 4

- Restored: **From his first book of motets** (t = 35), from old “The first motet collection”. John Milsom (Hyperion, 1569 Rome set; student-work suggestion; “poise and polish”): https://www.hyperion-records.co.uk/dw.asp?dc=W15060_GBLLH1645012 ; IMSLP’s page for the other setting (1584 Liber 4): https://imslp.org/wiki/Sicut_lilium,_PdPWV_Mot135_(Palestrina,_Giovanni_Pierluigi_da) ; both opened.
- Discarded: “Five lines, one motet” (covered by t = 0); “A biblical love comparison” (covered by t = 70); “A motet becomes a Mass” (covered by t = 175).
- Unresolved: Palestrina set the text twice (1569 first book, 1584 Liber 4). The file’s existing score notes and this one follow Werke vol. I No. 21 (the 1569 setting); the Tudor Consort source does not say which setting it sings.

### origins-purcell-fairy-queen-chaconne (162 s, cap 5): 4 → 5, restored 1, discarded 3

- Restored: **A spoken play with music** (t = 92), from old “Dance inside a spoken play” (moved from 35, which the museum note holds). 2 May 1692, Dorset Garden, masques in every act but the first, none of Shakespeare’s text set, score lost and rediscovered: https://en.wikipedia.org/wiki/The_Fairy-Queen ; first performance, anonymous adaptation, Act V Chaconne: https://imslp.org/wiki/The_Fairy_Queen,_Z.629_(Purcell,_Henry) ; both opened.
- Discarded: “Church, court and theatre” (Westminster Abbey 1679; one slot only); “Recorded in a museum” (covered by t = 35); “No continuous bass ground” (covered by t = 68).

### prokofiev-piano-sonata-2 (979 s, cap 25): 8 → 13, restored 2, added 3, discarded 6

- Restored: **A quiet song after the bridge** (t = 70, old “A longer melodic breath”) and **The opening returns, almost whispered** (t = 228, old “Returning with another balance”). Zanetti, Santa Cecilia programme note 12 March 1965 (Italian; translations ours): https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sonata14.html (opened). Placement rests on the section boundaries and proportion (second idea inside the exposition, recapitulation from about 3:40, almost all pianissimo to the closing crescendo); the score itself was not opened.
- Added: **A critic’s verdict on the Concerto** (t = 265; Quattrocchi, Accademia Filarmonica Romana programme note, 8 February 1989, same page; the critic is unnamed there); **Dedicated to a friend** (t = 520; IMSLP and https://en.wikipedia.org/wiki/Piano_Sonata_No._2_(Prokofiev), Schmidthof, suicide 1913; both opened); **Perpetual motion, high theme** (t = 790; Quattrocchi on the finale). These break the 175–178 s gaps between notes.
- Discarded: “Short figures in the scherzo” (covered by t = 350); “Space in the Andante” (covered by t = 454); “A tarantella finale” (covered by t = 712); “Growing out of a sonatina” (covered by t = 175); “Lyricism in retrospect” (covered by t = 680); “Publication before the premiere” (covered by t = 890).

### puccini-e-lucevan-le-stelle (154 s, cap 4): 4 → 4, restored 0, discarded 3

- Discarded: “A piano, not an orchestra” (the credit is already in `performers` and the intro); “A letter before execution” (covered by t = 35); “Two years after Tosca” (première Rome, 14 January 1900; Caruso’s disc 11 April 1902; cap reached).

### puccini-mi-chiamano-mimi (241 s, cap 7): 5 → 7, restored 2, discarded 3

- Restored: **The public will judge** (t = 35), from old “Paris through two librettists”, rebuilt as the origin story (train back from Turin, Leoncavallo’s claim, Puccini’s reply to the Corriere della Sera). https://www.puccinimuseum.org/en/giacomo-puccini/le-opere/la-boheme/ (opened; the museum’s English).
- Restored: **Turin, 1 February 1896** (t = 104, from old “Turin, February 1896” at 126, which sits 14 s from the key-and-sun notes). Cast, Toscanini aged 28, divided critics: https://en.wikipedia.org/wiki/La_boh%C3%A8me ; the “big mark in the history of opera” review: the Puccini Museum page above; both opened. The museum says the audience applauded and Wikipedia says the audience was subdued, so the note says only that critics divided.
- Discarded: “From organ to theatre” (Puccini’s Lucca and Milan education is on the composer page and unconnected to the aria); “The encounter continues” (Café Momus; covered by t = 212); “An answer to Rodolfo” (general).

### puccini-vissi-darte (191 s, cap 5): 4 → 5, restored 1, discarded 3

- Restored: **Destinn in the studio** (t = 118), from old “The record’s two restorers”, now with the session (Victor 88487, matrix C-14508-4, 23 April 1914) and Destinn’s creation of Minnie at the Met in December 1910. Commons description via the site’s audio check; https://en.wikipedia.org/wiki/Emmy_Destinn and https://www.puccinimuseum.org/en/giacomo-puccini/le-opere/la-fanciulla-del-west/ (opened).
- Discarded: “The bargain remains” (covered by t = 35); “Church musician to dramatist” (composer-page material; one slot only); “A singer’s self-account” (general).

### rachmaninoff-barcarolle-op10-3 (about 235 s, cap 6): 5 → 6, restored 1, discarded 3

- Restored: **Issued nearly two years later** (t = 172), from old “Edison’s only disc of it”. Densmore’s Edison list (82202, 2/1921; Barcarolle matrix 6743 and Valse in A♭ Op. 64 No. 3, matrix 6736, both 1919.04): https://www.densmore-edisondd.info/EdisonRecordsList/index.html ; DAHR: https://adp.library.ucsb.edu/index.php/objects/refer/234970 ; both opened. “Only disc” and the RCA take-C claim are left out (the booklet was not reopened).
- Discarded: “On the programme, winter 1920–21” (checked against https://classical-pianists.net/vii-b/sergei-rachmaninoff/chronology-2/ : Barcarolle with Polichinelle at Cleveland on 15 November 1920, Carnegie Hall on 19 December 1920; a reconstruction from programmes and press, and one slot only); “Third of seven salon pieces” (covered by t = 26).
- Unresolved: the Archive file name says recorded 23.IV.1919; DAHR lists Barcarolle matrix 6743 as 4/24/1919. Only “April 1919” is used.

## Batch 10

Agent Restore10. Counts are notes before → after; “restored” counts old documented candidates brought back (rewritten, re-timed and re-sourced); “added” counts new sourced notes that were not old cues. Dates of Russian events are New Style, as in the composer page; the Old Style date is in each `evidence`. Sources opened by fetch: Tchaikovsky Research (Symphony No. 6, Piano Concerto No. 1, *A Life*), Boston Symphony Orchestra notes (Tchaikovsky 6, Petrushka), Queensland Symphony Orchestra learning resource (PDF, pages located with `pdftotext`), Tonic Chord, Kirchmeyer’s catalogue (kcatalog.org), Gerald Larner’s notes (Verdi, Wagner), Wikipedia (Requiem, La traviata, Siegfried Idyll), Treccani (Talbot on Vivaldi), Boston Baroque (Pearlman), Wikisource (de Brosses, letter XVIII), the Wagner Societies’ Fineske note, the Richard Wagner Museum Lucerne, the Mahler Foundation (Richter) and the Concise Oxford Dictionary of Music (Encyclopedia.com).

### stravinsky-petrushka-evening (803 s, cap 21): 9 → 12, restored 3, discarded 16

- Restored: **A puppet with a piano** (t = 36), from old “A ballet made in months”. Stravinsky’s account of the piano piece and Diaghilev’s visit, quoted by Ledbetter; composition at Lausanne and Clarens, August 1910 to May 1911. https://www.bso.org/works/stravinsky-petrushka-1947-version
- Restored: **The 1911 score, before the revision** (t = 460), from old “The original orchestral palette”. The old text claimed separate cornets, two harps and keyboard colours; the new text keeps only what Ledbetter states (woodwinds and brass cut in 1946–47, the piano scarcely used after tableau 2 and given more in the revision). The sleeve wording “Original Edition” is from the file’s own provenance record. https://www.bso.org/works/stravinsky-petrushka-1947-version
- Restored: **Only wood and sawdust** (t = 700), from old “Only wood and sawdust?”. Stage directions at rehearsals 129–130 (policeman sent for the Charlatan, body lifted and shaken, crowd disperses) in Kirchmeyer https://www.kcatalog.org/index.php/browse-chapters/kcatalog/179-k012-petrushka ; the sawdust in Ledbetter (BSO link above). The old claim that the Charlatan “reassures the crowd” in words is dropped.
- Discarded: “Outside the puppet theatre again”, “Melody over a working bass”, “A familiar street song”, “Pipe above a heavy animal”, “Money enters the spectacle”, “A deliberately heavy dance”, “More dancers, more layers”, “Masks replace the massed dance”, “A dance becomes a chase”, “Small sounds after violence”, “Muted trumpets answer back” (all covered by current notes at t = 0, 64, 226, 324, 368, 506, 594, 640 and 754); “A tune changes scale”, “The fair reassembles itself”, “Repeated notes, restless movement”, “The crowd leaves gaps” (no event or source beyond level figures); “An ending without a triumph” (the theatrical ending is already in the t = 754 note and the orchestra locator).

### tchaikovsky-6-adagio (1051 s, cap 27): 9 → 12, restored 2, added 1, discarded 4

- Restored: **Two pages in a day** (t = 420), from old “Orchestration took longer”. Tchaikovsky to Modest, 22 July/3 August 1893 (letter 4984), quoted in the composition history at https://en.tchaikovsky-research.net/pages/Symphony_No._6 ; the old text’s paraphrase of “dissatisfaction” is replaced by the letter’s own words.
- Restored: **A title before the première** (t = 990), from old “Written for Davydov”. The dedication on the autograph title page, and the title story: Modest’s later claim set against Jurgenson’s letter of 20 September/2 October 1893 (note 1 on the same page). Boston Symphony’s note says recent research gives Tchaikovsky himself the title (https://www.bso.org/works/tchaikovsky-symphony-no-6); the text states only the two documented items.
- Added: **“A blizzard”, said Balanchine** (t = 740). Balanchine’s phrase and his ballet on the fourth movement are in Harlow Robinson’s BSO note (link above); the development’s fast strings and trombone-and-tuba waves are on p. 10 of the Queensland learning resource, https://qso.com.au/uploads/QSO-Learning-Resource-Breathtaking-Tchaikovsky-1-.pdf .
- Discarded: all `general` cues; “Four days of sketches”, “A private programme”, “A chant in the score” (covered by t = 198, 317, 635); “First heard in Petersburg” (moved to the finale file at t = 215, beside the bewilderment letter).

### tchaikovsky-6-allegro-grazia (496 s, cap 13): 5 → 6, restored 1, discarded 2

- Restored: **A four-hand version first** (t = 60), from old “Published after the premiere”. The old text put the full score after Tchaikovsky’s death and the duet “earlier”; the source says he made the four-hand arrangement himself between 13 and 24 August 1893 (with Konyus’s help), the duet appeared in November 1893 and the full score in February 1894. https://en.tchaikovsky-research.net/pages/Symphony_No._6
- Discarded: “Grace is written down” (the title and *con dolcezza e flebile* are already in the t = 154 note); “The last movement sketched” (covered by t = 119).

### tchaikovsky-6-allegro-vivace (593 s, cap 15): 7 → 9, restored 1, added 1, discarded 2

- Restored: **Corrections after the première** (t = 175), from old “Corrected after performance”, now in the composer’s own words from the autograph title page (“I made some corrections in the 2nd and 3rd movements…”), which the page says was added, it seems, after the first performance. https://en.tchaikovsky-research.net/pages/Symphony_No._6
- Added: **Heroism or desperation** (t = 495). Harlow Robinson’s BSO note: critics’ and audiences’ confusion, David Brown’s reading, the G-major landing and the premature cheers it draws. https://www.bso.org/works/tchaikovsky-symphony-no-6 Only part of Brown’s sentence is quoted, so the “not only … but also” construction stays out of the text.
- Discarded: “Not the symphony’s ending” (covered by the last sentence of t = 540); “The ending planned early” (covered by t = 450).

### tchaikovsky-6-finale (619 s, cap 16): 8 → 11, restored 2, added 1, discarded 1

- Restored: **Bewilderment in Petersburg** (t = 215), from old “The composer reports bewilderment”. Letter 5062 to Jurgenson, 18/30 October 1893; première 16/28 October. https://en.tchaikovsky-research.net/pages/Symphony_No._6
- Restored: **The most sincere of all** (t = 400), from old “Pride, not an explanation”. Letter 4998 to Davydov, 2/14 August 1893, quoted on the same page; the old sentence about not predicting his death is left out of the text.
- Added: **Nine days later** (t = 570). Poznansky’s account of the last illness, death at a quarter past three on the morning of 25 October/6 November 1893 (https://en.tchaikovsky-research.net/pages/Tchaikovsky:_A_Life , opened through `?action=render`); the memorial performance under Nápravník twenty days after the première, BSO note (https://www.bso.org/works/tchaikovsky-symphony-no-6). The composer page already states the cholera and the nine days.
- Discarded: “The slow ending was planned” (covered by t = 110).

### tchaikovsky-piano-concerto-1-allegro (1127 s, cap 29): 10 → 14, restored 3, added 1, discarded 3

- Restored: **Boston, 1875** (t = 790), from old “The premiere was in Boston”: 25 October 1875, Music Hall, Bülow and Lang; repeated five days later; New York, Saint Petersburg and Moscow within weeks. https://en.tchaikovsky-research.net/pages/Piano_Concerto_No._1 (Performances).
- Restored: **Rubinstein plays it himself** (t = 940), from old “A critic becomes an advocate”: Moscow, 22 March 1878; the Trocadéro, 9 September 1878; the 1880 dedication of the Second Concerto (same page). The old “Moscow, Saint Petersburg and Paris in 1878” is narrowed to the two dated performances.
- Restored: **Three versions of the concerto** (t = 365), from old “Versions are not interchangeable”: 1875, 1879, 1889; the 1889 edition “corresponds to the version we are familiar with today” (same page). The recording’s edition stays unidentified, as the evidence line says.
- Added: **Taneyev’s name struck out** (t = 625): the autograph’s dedication to Taneyev replaced by Bülow’s name, and Bülow’s letter of 13 June 1875 in the page’s translation of the French original.
- Discarded: “Written over one winter” (the t = 164 letter and the t = 451 play-through cover November 1874 to January 1875); “Rubinstein’s first response” (covered by t = 451); “A Ukrainian source” (covered by t = 287). All `general` cues skipped.

### tchaikovsky-piano-concerto-1-finale (370 s, cap 10): 7 → 9, restored 1, added 1, discarded 1

- Restored: **Bülow’s one comment** (t = 280), from old “The dedicatee offered advice”: letter of 13 January 1876 (“no changes are necessary”; the “triumphal 2nd motif” before the last stretta). The direction of his tempo remark is left out: the page’s English for that sentence contradicts itself. https://en.tchaikovsky-research.net/pages/Piano_Concerto_No._1 (second version).
- Added: **A second folk song** (t = 110): “I’m Coming to the Capital”, arranged in 1869 as No. 30 of *Fifty Russian Folksongs*, thought to be the source of the finale’s second subject (same page, Related Works).
- Discarded: “Another Ukrainian melody” (covered by t = 0).

### verdi-requiem-dies-irae (122 s, cap 4): 3 → 4, restored 1, discarded 3

- Restored: **A Requiem for Rossini first** (t = 69), from old “An earlier memorial plan”: Rossini’s death in 1868; the Libera me; the performance set for 13 November 1869 and abandoned nine days before; the 1871 letter “There are so many, many Masses for the Dead”. Gerald Larner, https://geraldlarner.com/work/verdi-messa-da-requiem ; composition history at https://en.wikipedia.org/wiki/Requiem_(Verdi). The number of composers is left out: Larner says twelve, Wikipedia thirteen.
- Discarded: “Words older than the music” (the claim that Verdi avoids the plainchant tune has no source; the Latin sequence is already in t = 0); “For Alessandro Manzoni” (covered by t = 42); “An opening, not the whole sequence” (cap reached; the intro already calls this the opening number).

### verdi-traviata-prelude (224 s, cap 6): 5 → 6, restored 1, discarded 2

- Restored: **A play seen in Paris** (t = 160), from old “A contemporary French source”: the Paris visit and the play in February 1852; La Fenice’s insistence on a setting c. 1700. Composition history citing Phillips-Matz and Budden, https://en.wikipedia.org/wiki/La_traviata . The old BnF-based details (the novel of 1848, Marguerite Gautier) were not reopened and are left out.
- Discarded: “Venice, March 1853” (covered by t = 35); “A household outside marriage” (cap reached; Strepponi now appears in the new note).

### vivaldi-spring-allegro (215 s, cap 6): 5 → 6, restored 0, added 1, discarded 2

- Added: **Spring in France** (t = 40): the Concert Spirituel performances and the arrangements of Spring by Corette (choral motet) and Rousseau (flute alone). Martin Pearlman, Boston Baroque, https://baroque.boston/vivaldi-four-seasons
- Discarded: “The Pietà’s violin teacher” (ordination March 1703 and appointment September 1703 verified in Talbot, https://www.treccani.it/enciclopedia/antonio-vivaldi_%28Dizionario-Biografico%29/ , but one slot only; the appointment is used in the Largo note); “A poem beside the parts” (the sonnets and their anonymous publication are already in the notes’ evidence).

### vivaldi-spring-largo (172 s, cap 5): 4 → 5, restored 1, discarded 2

- Restored: **The girls’ concerts of Venice** (t = 112), from old “Teaching in Venice”. De Brosses, letter XVIII, 29 August (1739): concerts of about forty girls, a young woman in a white habit conducting with a bunch of pomegranates, the Pietà his favourite and first for its symphonies (translation ours), https://fr.wikisource.org/wiki/Lettres_famili%C3%A8res_%C3%A9crites_d%E2%80%99Italie_T.1/%C3%80_M._DE_BLANCEY._%E2%80%94_Suite_du_s%C3%A9jour_%C3%A0_Venise ; Vivaldi hired as violin master in September 1703, Talbot (Treccani link above).
- Discarded: “A poem beside the music” (the sonnet stanza is printed in the current notes); “Follow the middle layer”, “The layers continue” (general).

### vivaldi-spring-finale (244 s, cap 7): 5 → 7, restored 2, discarded 1

- Restored: **A first opera in Vicenza** (t = 124), from old “More than a concerto composer”. Talbot: *Ottone in villa* (libretto by Lalli), May 1713, Vicenza, a success, staged outside Venice to shield his debut; then the oratorio *La vittoria navale*. https://www.treccani.it/enciclopedia/antonio-vivaldi_%28Dizionario-Biografico%29/
- Restored: **The Seasons in print** (t = 182), from old “Published as a collection”. Op. 8, Le Cène, Amsterdam, 1725, dedicated to Morzin (Talbot, link above); the concertos already known to Morzin, and no autograph (Pearlman, https://baroque.boston/vivaldi-four-seasons).
- Discarded: “Nymphs and shepherds” (covered by t = 96).

### vivaldi-winter-allegro (209 s, cap 6): 5 → 6, restored 0, added 1, discarded 4

- Added: **Faster than a copyist** (t = 110). De Brosses, letter XVIII, 29 August (1739): “Vivaldi s’est fait de mes amis intimes, pour me vendre des concertos bien chers”, “furie de composition prodigieuse” and the copyist boast; translation ours (Wikisource link as in the Spring Largo entry).
- Discarded: “Work beyond Venice” (Mantua, spring 1718 to 1720: verified in Talbot, but one slot only, and the de Brosses letter gives a scene); “The texture accumulates”, “Instructions in the parts”, “Teeth in the notation” (covered by the score-aligned notes at bars 1, 22 and 47).

### vivaldi-winter-finale (193 s, cap 5): 5 → 5, restored 0, discarded 4

- Discarded: “A violinist’s working world” (father Giovanni Battista, violinist at St Mark’s, probably the first teacher: verified in Talbot, but the cap is reached with five score-aligned notes); “Walking on ice”, “A moving violin, a held bass”, “Two named winds” (covered by the notes at bars 1, 51, 101 and 120).

### vivaldi-winter-largo (132 s, cap 4): 3 → 4, restored 0, added 1, discarded 3

- Added: **A tight chest** (t = 85). Talbot: “strettezza di petto” in the 1737 letter, its origin in childhood, the end of his Mass duties in 1706, ordination in March 1703. https://www.treccani.it/enciclopedia/antonio-vivaldi_%28Dizionario-Biografico%29/ The text says “breathing attacks”, not asthma, following the composer page’s caution.
- Discarded: “A live performance in Kansas” (the date and performers are already in `recorded` and `performers`; one slot only); “A sheltered winter scene”, “Singing above the rain” (covered by the notes at bars 1 and 9).

### wagner-siegfried-idyll (932 s, cap 24): 8 → 10, restored 2, discarded 2

- Restored: **Fidi’s birdsong and a sunrise** (t = 470), from old “Two Siegfrieds in the background”: the original title, Fidi as the family’s name for Siegfried (born 6 June 1869) and the double reference of the later title. Rainer Fineske, International Association of Wagner Societies, https://www.richard-wagner.org/rwvi/en/news/news-committee/?collection_id=3075 ; Richard Wagner Museum Lucerne, https://www.richard-wagner-museum.ch/en/museum/years-in-lucerne/
- Restored: **Witness, then trumpeter** (t = 790), from the same old note’s marriage detail: the wedding of 25 August 1870 with Hans Richter as a witness (Lucerne museum); Richter as Wagner’s copyist and the first performance’s trumpeter (https://www.mahlerfoundation.org/mahler/contemporaries/hans-richter); that he learned the trumpet for the occasion (https://www.encyclopedia.com/arts/dictionaries-thesauruses-pictures-and-press-releases/siegfried-idyll); the trumpet’s thirteen bars (Fineske). Wikipedia’s story that Richter practised on the lake is left out: it is marked “reportedly” and rests on a web article.
- Discarded: “A family morning” (covered by t = 76); “Four sides become one stream” (catalogue-digit discrepancy belongs in the dossier, and `source.rights` already records it).
- Unresolved (existing note, not changed): the t = 380 note “Melodies share the room” still carries `basis: 'general'`. Larner’s longer note supports its content (the lullaby inverted against the opening tune), but no source places it at that time.

### Unresolved across the batch

- The public Tchaikovsky Research page for letter 4865 is cut off mid-sentence for readers who are not logged in, so the existing finale note at t = 110 (“a long drawn-out adagio”; “blissful”) could not be rechecked there. The BSO note independently reports a “most protracted Adagio” as one of Tchaikovsky’s earliest ideas, and a search extract (not opened) gives “a long drawn-out adagio” in another translation of the same letter.
- The Spring Largo, Winter Allegro and Winter Largo notes with `t` values sit between score-aligned bar notes; their times fall at least 24 s from the neighbouring bar times computed from `score.json`.

## Batch 3

Agent Restore3. Counts are notes before → after; “restored” counts old candidates brought back (rewritten, often re-timed or re-sourced); “added” counts new sourced notes that are not old cues, written to close gaps of more than about two minutes or to give the movement a story the old file never had. All 22 files print `ok` from `tools/validate.mjs`. Sources were fetched and read in this pass unless marked “not opened”.

### chopin-prelude-op28-4 (110 s, cap 3): 3 → 3, restored 0, discarded 7

- At the cap; the three existing notes were kept. Not restored: “Small movement, changing harmony” (covered by the score-aligned bar-0 note); “The Mallorca winter” (documented, NIFC https://chopin.nifc.pl/en/chopin/gatunki/12_preludia, but no free slot); “Bach within reach” (same source, no slot); “A complete miniature” (no slot); and three general or audio-feature cues. The Mallorca and Bach notes are the two worth swapping in if the file’s existing “Berkeley to Paris” note is ever judged weaker.

### chopin-prelude-op28-4-paquet (115 s, cap 3): 3 → 3, restored 0, discarded 7

- At the cap; existing notes kept. Not restored: “Hear the moving middle” (instruction to the listener, covered by the bar-1 note); “A documented modern instrument” (covered by “A French piano”); “Completion in Mallorca” and “Twenty-four different keys” (documented at NIFC, no slot); “Renewal without a new tune” (covered by the bar-16 note); “Keep the melody separate” and “Wait through the pause” (general, audio-feature).

### couperin-barricades-mysterieuses (95 s, cap 3): 3 → 3, restored 0, discarded 6

- At the cap; existing notes kept. Not restored: “Church and royal chamber” (the Saint-Gervais and royal-chapel facts now sit in couperin-nations-piemontaise); “A deliberately puzzling title” (the composer page and its ledger already refuse a solution; no slot); “The longer final excursion” (covered by the t = 52 note); “A piano, not a harpsichord” (session facts are in `recorded`; no slot); two general cues.

### couperin-nations-piemontaise (603 s, cap 16): 8 → 11, restored 3, discarded 13

- Restored: **The Saint-Gervais organ bench** (t = 50), from old “An inherited organ loft”: Charles’s death in 1679, François titular by survivance, Lalande’s interim, François in the post from 1685. Opéra Royal de Versailles https://www.operaroyal-versailles.fr/genre-event/couperin/ and Larousse https://www.larousse.fr/encyclopedie/musdico/Fran%C3%A7ois_Couperin/167027 (both opened; the Larousse “dès 1685” dates the start of service). Age at his father’s death left out because the sources say ten or eleven.
- Restored: **A royal chapel by competition** (t = 230), from old “A royal chapel organist”: Thomelin’s death, the competition, the January quarter. Larousse (above) and the Opéra Royal biography. The end date of the post is omitted; the two sources say 1730 and 1733.
- Restored: **The mirror and the key** (t = 416), from old “A keyboard teaching book”, now built on the book itself: the mirror for grimaces and the key taken away after “trois quarts d’heure”. Couperin, <i>L’Art de toucher le clavecin</i> (1716), Nicolas Sceaux’s transcription, https://musebaroque.fr/archives/Partitions/Couperin_clavecin2.pdf (pp. 2–3, opened).
- Discarded: “Three parts, four players” (general; covered by the t = 0 note); “An estimated lower pitch” (audio-feature); “Quicker exchanges”, “Alternating kinds of pace”, “Quick and marked”, “The graceful airs”, “A measured closing section”, “The last quick exchange” (all instructions to the listener, covered by the score notes at t = 90, 274, 514 and 545); “Ornament and main note” (general); “The sonade’s final cadence” (covered by the t = 345 note); “Four names in print”, “Corelli beside Lully”, “An Italian disguise” (already in the file).
- Unresolved: the IMSLP score is an image scan, so only the page-5 marking (Vivement at bar 30) was checked by eye; no new score note was written for “Vivement et marqué”.

### debussy-cathedrale-engloutie (340 s, cap 9): 7 → 8, restored 1, discarded 9

- Restored: **A charming child, aged ten** (t = 226), from old “Training at the Conservatoire”: admitted 22 October 1872 after playing Moscheles’s Op. 65 (33 of 157 applicants), and Marmontel’s report of 13 January 1874, “Charming child, true artistic temperament; will become a distinguished musician”. François Lesure, <i>Claude Debussy: A Critical Biography</i>, trans. Marie Rolf (University of Rochester Press, 2019), chs. 1–2, publisher’s preview https://api.pageplace.de/preview/DT0400.9781787444515_A42902130/preview-9781787444515_A42902130.pdf (opened). This is the same Marmontel report the composer page already quotes; the old note’s Guiraud and Prix de Rome details were dropped.
- Discarded: “Fifths before full chords”, “Emerging from the mist”, “An organ without pipes”, “The phrase as an echo” (all covered by the score notes); “The drowned city of Ys” and “The title comes afterwards” (covered by the t = 34 note); “A melody made of chords” (general); “A second rise” and “Let the resonance finish” (audio-feature).

### debussy-childrens-corner-jimbos-lullaby (178 s, cap 5): 3 → 5, restored 2, discarded 4

- Restored: **For Chouchou, with apologies** (t = 25), from old “A toy, not a portrait”. The dedication, “À ma chère petite Chouchou, avec les tendres excuses de son Père pour ce qui va suivre”, read from the rendered dedication leaf of the Durand first edition (IMSLP https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf); Morris Hastings’s sleeve note on Columbia ML 4366 (Internet Archive text): “Jimbo was one of Chou-Chou’s treasured toys, an elephant made of felt.” Translation ours. Kept as the sleeve writer’s statement because en.wikipedia’s Children’s Corner article identifies Jimbo instead with an elephant at the Jardin des plantes (Jumbo); neither is a documented source from Debussy, so the toy is attributed, not asserted.
- Restored: **A church for a studio** (t = 95), from old “Session and issue are different”. Session 11 April 1950, Columbia 30th Street Studio (official Casadesus discography https://www.robertcasadesus.com/en/discography/, opened). The building: the Adams-Parkhurst Presbyterian church, converted 1948, nicknamed “The Church” (https://en.wikipedia.org/wiki/CBS_30th_Street_Studio, opened). The old note’s 1951 LP date was dropped.
- Discarded: “Tenderness with an awkward step”, “Rocking beneath the song”, “The first voice returns”, “Quiet without dragging” (covered by the score notes).

### debussy-clair-de-lune (260 s, cap 7): 6 → 7, restored 1, discarded 7

- Restored: **One side of an HMV disc** (t = 185, between bars 51 and 66, 25 s and 33 s from them), from old “One side of an HMV disc”. Abbey Road Studio 3, 28 February 1946, matrix 2EA 10890-1 (Moiseiwitsch chronology, entry BM-C#051, https://classical-pianists.net/viii/benno-moiseiwitsch/chronology-2/); HMV C.3485 (Internet Archive item metadata https://archive.org/details/78_clair-de-lune-moonlight_benno-moiseiwitsch-debussy_gbia3042373b). The old note’s coupling with Chopin’s Polonaise Op. 71 No. 2 was dropped: no source I could open confirms it.
- Discarded: “Stillness made from moving voices”, “A current beneath the melody”, “A swell, then less weight”, “A memory with different support”, “Arrival before disappearance” (covered by the bar-aligned notes); “Moonlight and masked dancers” (covered by the t = 35 note); “Third of four movements” (no slot after the disc note; cap 7).

### debussy-la-mer-orchestral-dawn (494 s, cap 13): 7 → 11, restored 3, added 1, discarded 11

- Restored: **Three symphonic sketches** (t = 130), from old “Three sketches, one work”. Debussy’s subtitle, the three movement titles (IMSLP https://imslp.org/wiki/La_mer_(Debussy,_Claude)) and Trezise (Cambridge, 1994, p. 47) on his avoiding “symphony” and “symphonic poem”, as quoted at https://en.wikipedia.org/wiki/La_mer_(Debussy); Trezise itself not opened.
- Restored: **Dedicated to his publisher** (t = 230), from old “A publisher receives the dedication”: dedication to Jacques Durand, première 15 October 1905 (Lamoureux, Chevillard), publication 15 November 1905, all from the IMSLP work page (opened).
- Restored: **Detroit, December 1955** (t = 470), from old “Detroit, not the sea”: Old Orchestra Hall, 3–4 December 1955, three-track half-inch tape with a Schoeps M201 centre and two Neumann U-47s, from the Eloquence Mercury Masters Vol. 1 recording information https://www.eloquenceclassics.com/releases-archive/paul-paray-the-mercury-masters-vol-1-1953-1957/ (opened; the stereo release SR 90010 of 1958 is not mentioned in the note).
- Added: **Enough to make the fish weep** (t = 385): Debussy to Jacques Durand, Le Puys near Dieppe, 8 August 1906, French original and date as printed in Gerald Larner’s collected extracts, https://geraldlarner.com/source/debussy-la-mer-from-debussy-s-letters (opened). Translation ours. Single source for the date; no second edition of the letter could be opened.
- Discarded: “The horizon is still indistinct”, “A wave on the cover” and “A slower, broader closing span” (told by the existing t = 0, 333 and 438 notes); eight general, audio-feature or listen cues.

### dvorak-9-adagio (605 s, cap 16): 9 → 14, restored 1, added 4, discarded 15

- Restored: **Mrs Thurber’s conservatory** (t = 480), from old “A conservatory in America”: Jeannette Thurber’s admissions policy (1885), her 1892 offer to Dvořák, and the benefit concert of 23 January 1894 (about fifty student players, an all-Black choir of 130, Madison Square Garden Concert Hall). Majda Kallab Whitaker, “Grateful to Mrs. Thurber”, https://www.dvoraknyc.org/thurber (opened).
- Added, all from the Dvořák work catalogue https://www.antonin-dvorak.cz/en/work/symphony-no-9/ (opened) unless noted: **Drawn out, where possible** (t = 45; the instruction for the introduction and the recurrence of its outline in the E♭ Quintet and Humoresque No. 1); **Four pages a day** (t = 215; Josef Kovařík’s memoir of the first afternoon in Spillville); **A tune close to a spiritual** (t = 285; the closing theme and Swing Low, Sweet Chariot, and the New York Herald statement “I have not actually used any of the melodies”); **“The folk songs of America”** (t = 355; New York Herald, 21 May 1893, p. 28, “Real Value of Negro Melodies”; the scan https://static.qobuz.com/info/IMG/pdf/NYHerald-1893-Mai-21-Recadre.pdf was rendered and the sentence read by eye, three days before the score was finished on 24 May).
- Discarded: “Written in New York” and “Burleigh’s singing mattered” (covered by the t = 156 and t = 429 notes); “Seidl conducted the premiere” (told in the Largo and finale files); twelve general or audio-feature cues.

### dvorak-9-largo (694 s, cap 18): 10 → 15, restored 3 (from two old cues), added 2, discarded 14

- Restored (from old “Harry Burleigh’s singing”, which cited Dvořák’s statements to the Herald and to Nedbal): **“It is a lie!”** (t = 225; Dvořák to Oskar Nedbal, February 1900, English as given in the catalogue); **Indian melodies from a friend** (t = 340; Herald interview of 15 December 1893, the Iroquois performances in Prague in August 1879, and David Beveridge’s 2022 finding that Dvořák’s visit to Buffalo Bill’s show came in spring 1894). The unnamed “friend” is as in the interview.
- Restored: **Applause after the Largo** (t = 610), from old “Carnegie Hall, December 1893”: Otakar Dvořák’s memoir, quoted in the catalogue’s première section. Only Otakar’s version (his father “appeared” to bow) is used; Dvořák’s letter to Simrock says he bowed from his box, so the phrase is kept neutral. Otakar was a child at the time; the note says only that he remembered it.
- Added: **A clarinet tune becomes cor anglais** (t = 70; the clarinet in the sketches, the cor anglais and “said to have” recalled Burleigh’s voice) and **“The Legend Begins”** (t = 120; the sketch inscriptions “Legend” and “The Legend Begins”, Beckerman’s “once upon a time”, the sketchbook variants of the opening chords), both from the catalogue. The catalogue itself says the Hiawatha burial scene attributed to Dvořák rests on an unverifiable second-hand report, so no note uses it.
- Discarded: “A melody with few pitches”, “A contrasting middle”, “A crest within the symphony”, “A smaller scale again”, “The frame returns” (covered by the score notes); “Written in New York” (Adagio file); “Goin’ Home came later” (already in the file); seven audio-feature and general cues.

### dvorak-9-finale (703 s, cap 18): 9 → 13, restored 1, added 3, discarded 17

- Restored: **London, Karlovy Vary, Prague** (t = 430), from old “A European return”: 21 June 1894, 20 July 1894, 13 October 1894 (performance history in the catalogue).
- Added: **Memory saved for later** (t = 300; Beethoven’s Ninth against Dvořák’s reminiscences, catalogue analysis of the fourth movement); **“If the composers are Dr. Dvořák”** (t = 340; Seidl and Victor Herbert at the public rehearsal of 15 December 1893, as quoted in the catalogue; the Herbert sentence is printed that way there); **“A triumph such as this”** (t = 575; Dvořák to Simrock after the première, catalogue).
- Discarded: “Finished on 24 May” and “The title came late” (the existing t = 161 and t = 482 notes); “Not a collection of quotations” (told in the Adagio and Largo files); fourteen general or audio-feature cues.

### elgar-cello-concerto-harrison-1920 (952 s, cap 24): 8 → 15, restored 0, added 7, discarded 27

- The old documented cues were already covered (Salmond’s première, the Brinkwells summer and Alice’s posting, the two sessions and issue months, the Colvin dedication); the file had a 232 s stretch (t = 240–472) and three more of 145–172 s without a note, so seven new notes were added, all from Frank Beck on the Elgar Society site (opened): https://www.elgar.org/3cello-c.htm and https://www.elgar.org/3cello-a.htm.
- Added: **A tune from a nursing home** (t = 50; Carice’s account of March 1918); **Playing it through at Brinkwells** (t = 130; Landon Ronald on 2 June 1919, Salmond three days later, Alice’s “FS most delighted and enthusiastic”); **A nineteen-year-old in the cellos** (t = 300; Barbirolli in the LSO at the première, and his 1965 recording with du Pré; Warner Classics https://www.warnerclassics.com/release/elgar-du-pre, opened; Beck’s “sixty-six years later” is wrong and was not used); **Ernest Newman’s review** (t = 360); **Elgar’s soloist** (t = 420; Beatrice Harrison studying the work with Elgar, his request that she play it whenever he conducted, the November 1925 concert; https://en.wikipedia.org/wiki/Beatrice_Harrison, secondary); **“My ideal!”** (t = 610; Elgar’s Leipzig remark and Beck’s Schumann echoes; the year 1883 follows from Beck’s “thirty-six years later”); **Whistling on the Malvern Hills** (t = 850; Elgar’s remark in his last illness, Beck).
- Discarded: “A concerto on four sides” (the intro and the existing notes), “Work at Brinkwells”, “Salmond at the première”, “The Colvins’ dedication”, “A shortened final movement”, “Two sessions, one issue”, “Issued after the sessions” (all in the file already); “One movement per side” (record-side durations only); “Pitch belongs to the transfer” (transfer note; the pitch figures are not a verified session tuning); eighteen general and audio-feature cues.

### elgar-pomp-circumstance-1-elgar-1927 (264 s, cap 7): 6 → 7, restored 1, discarded 6

- Restored: **Elgar’s first recording, cut to four minutes** (t = 40), from old “Electrical recording begins”: the acoustic session of 26 June 1914 (cut to just over four minutes, begun with the trio, some thirty players) and the first complete recording on 27 April 1926 at Queen’s Hall. Elgar Society, “Elgar’s own recordings”, https://www.elgar.org/3pomp-d.htm (opened).
- Discarded: “Composer on the podium” (label wording; no slot); “March before ceremony” (instruction; the t = 0 note already gives the marking); “Returning rhythmic figures” (instruction; the analysis file cited in its evidence is not a source); three audio-feature cues.

### faure-requiem-agnus-dei (349 s, cap 9): 7 → 9, restored 1, added 1, discarded 10

- Restored: **Recorded in Monaco** (t = 36), from the old Introit cue “Where and when it was recorded” (the Introit file had no slot): the Erato LDE 3228 sleeve (Internet Archive scan, https://archive.org/details/faure-o-requiem-cantique-de-jean-racine-louis-fremaux, text read in full) prints “Enregistré en la Cathédrale N.-D. de l’Immaculée Conception, à Monaco, le 11 Août 1962” and the organist Chanoine Henri Carol. The old note recorded that Commons and other listings give 10 August and the Salle Alcazar; the dossier marks the date as disputed. The note states the sleeve’s version, which is the primary document; the other listings were not re-opened.
- Added: **Between two bereavements** (t = 205): Philippe Fauré-Frémiet, the composer’s elder son, as quoted in French on the same sleeve by Louis Aubert: “Entre deux deuils … le luceat eis est tout naturellement murmuré en faveur de ceux qui l’ont bercé”. Translation ours. Two deaths (1885, New Year’s Eve 1887) are in https://en.wikipedia.org/wiki/Requiem_(Faur%C3%A9); the composer page’s refusal to attribute the work to a single bereavement is respected.
- Discarded: “A school for church musicians” and “The teacher of Ravel” (IRCAM biography; both true but not about this music, and no slot after the two above); “The fuller choral petition”, “Melody and accompaniment again”, “A prayer for light”, “Hearing the choral chords”, “The whole Requiem remembered”, “An instrumental conclusion” (covered by the score notes); “A Paris funeral” (the existing t = 177 note); two general or audio-feature cues.

### faure-requiem-in-paradisum (215 s, cap 6): 5 → 6, restored 1, discarded 6

- Restored: **A lullaby of death** (t = 185), from the old note of that name, now with the French original: Fauré to Louis Aguettant, 12 July 1902 (published in <i>Comœdia</i>, 1954, p. 6), “quelqu’un l’a appelé une berceuse de la mort. Mais c’est ainsi que je sens la mort: comme une délivrance heureuse, une aspiration au bonheur d’au-delà”. René Gagnaux’s page http://www.rene-gagnaux.ch/inghelbrecht_desire-emile/faure_requiem.html (opened). The English is ours; “beyond” translates “d’au-delà”.
- Discarded: “An organ that shimmers” (covered by the t = 0 note); “A composer going deaf” (IRCAM; not about this music, no slot); “Played at his own funeral” (existing t = 124 note); three audio-feature cues.

### faure-requiem-introit-kyrie (383 s, cap 10): 8 → 10, restored 2, discarded 10

- Restored: **Why a Requiem?** (t = 40), from old “Why a Requiem?”: motive uncertain; father’s death in 1885, mother’s on New Year’s Eve 1887, work begun before the second (https://en.wikipedia.org/wiki/Requiem_(Faur%C3%A9), History); “composé pour rien… pour le plaisir si j’ose dire” from the Aguettant interview (Gagnaux, above), translated by us rather than copying the Wikipedia wording.
- Restored: **“All these novelties”** (t = 350), from old “Too many novelties”: the priest’s remark after the 1888 service, Jessica Duchen, <i>Gabriel Fauré</i> (Phaidon, 2000), p. 80, as reported in a note to the Wikipedia article (Duchen itself not opened). The evidence says the anecdote is secondary reporting.
- Discarded: “Where and when it was recorded” (moved to the Agnus Dei file, which had the slot and where the sleeve could be quoted); “One note, then one chord” and “The Kyrie borrows the tenor tune” (covered by the score notes); seven audio-feature cues.

### faure-requiem-libera-me (294 s, cap 8): 7 → 8, restored 1, discarded 11

- Restored: **The Dies irae, as an episode** (t = 120), from old “The Dies irae, briefly”: Louis Aubert’s sleeve note, “Le Dies irae y passe comme un épisode indispensable”, with Fauré’s setting of only the Pie Jesu part of the sequence (Wikipedia, Text). Translation ours.
- Discarded: “A plucked, steady bass” (covered by the t = 0 note); “The oldest music in the Requiem” (existing t = 30 note); “A text the liturgy dropped” (Bugnini on the 1969–70 removal; true but about the liturgy, not Fauré, and no slot); “The opening melody, in unison” (existing t = 192 note); seven audio-feature cues.

### faure-requiem-offertoire (460 s, cap 12): 7 → 11, restored 2, added 2, discarded 12

- Restored: **Tired of funerals** (t = 175), from old “Something different”, now taken from the Aguettant interview itself (“voilà si longtemps que j’accompagne à l’orgue des services d’enterrement! J’en ai par-dessus la tête. J’ai voulu faire autre chose”) rather than the Wikipedia rendering; Gagnaux page, translation ours.
- Restored: **The baritone, Bernard Kruysen** (t = 240), from old “The baritone soloist”: born Montreux 1933, studied in Paris with Pierre Bernac, Poulenc often at the piano (https://en.wikipedia.org/wiki/Bernard_Kruysen, opened; its sources were not); the sleeve’s credit “avec l’aimable autorisation des disques Valois” is in the evidence.
- Added: **An O that Fauré added** (t = 85; the added “O”, the trimmed second verse, the omitted third verse; Wikipedia, Text); **Religious illusion and eternal rest** (t = 390; Fauré, as quoted in Michael Steinberg, <i>Choral Masterworks</i> (OUP, 2005), pp. 132–133, as cited at the Wikipedia article, which gives the date as 1921; English as printed there, Steinberg not opened).
- Discarded: “Low strings and organ” (covered by t = 0); “The prayer climbs a step” and “A third step, more urgent” (the existing t = 35 note already says each appeal starts a step higher; a note built on the sleeve’s description of the rising prayer was written and then cut as redundant); “A movement that grew” (existing t = 64 note); “The organ steps forward” (existing t = 272 note); “An Amen in B major” (existing t = 422 note); six audio-feature cues.

### faure-requiem-pie-jesu (181 s, cap 5): 4 → 5, restored 1, discarded 6

- Restored: **The sleeve writer, once a treble** (t = 165), from old “The sleeve writer, once a treble”: Louis Aubert’s sleeve note, “quelques mois plus tard — j’avais alors 12 ans — … soprano solo de la Maîtrise”, and the soloist credit for Denis Thilliez (Internet Archive scan, read in full). Wikipedia names Aubert as the treble at the 16 January 1888 première itself; his own account puts it months later, so the note follows his account and the evidence records the difference.
- Discarded: “A boy soprano over organ” (covered by t = 0); “Only the last verse” (partly told at the existing t = 28 note; no slot); “A boy’s voice” (the Madeleine’s boys-only rule is the existing t = 28 note; the Thilliez credit is now in the t = 165 note); three audio-feature cues.

### faure-requiem-sanctus (190 s, cap 5): 4 → 5, restored 1, discarded 6

- Restored: **Angelic violins** (t = 80, 20 s before the Hosanna note; the divided violins enter with “Pleni sunt coeli” in the existing timeline at t = 78), from old “Angelic violins”: Fauré’s remark to Eugène Ysaÿe on the “angelic” violins of the Sanctus in the full-orchestra version, Nectoux (1991) as cited in the Wikipedia article (Versions); Nectoux not opened.
- Discarded: “Harp, violas and organ” (covered by t = 0); “The same pattern, wider phrases” (covered by the transition at t = 62); “The full orchestra of 1900” (existing t = 34 note); “Who scored it?” (Hamelle, Roger-Ducasse and the critics’ doubts; no slot); two audio-feature cues.

### gershwin-rhapsody-tovey (1090 s, cap 28): 8 → 15, restored 0, added 7

- No old file exists (the recording is new), so nothing could be restored. Two gaps (190 s and 192 s) exceeded three minutes, so seven sourced notes were added. Six come from Jim Farrington’s National Recording Registry essay https://www.loc.gov/static/programs/national-recording-preservation-board/documents/RhapsodyInBlue.pdf (opened, read in full): **Gorman’s rehearsal slide** (t = 35); **A concerto he had forgotten** (t = 75; the 4 January 1924 Tribune item, told with Farrington’s “according to legend” about the pool table); **The Tribune’s verdict** (t = 300; Lawrence Gilman); **Two pianos and a page at a time** (t = 450; Grofé’s method); **Bernstein on the paragraphs** (t = 640; the quotation is Farrington’s, thirty-one years after the première); **The record made again in 1927** (t = 975; Shilkret conducting, nine and six takes). The Gershwin composer ledger omits the train-origin anecdote and the million-seller claim; neither was used.
- Added: **A pianist who became a conductor** (t = 810): Bramwell Tovey’s training and posts, https://en.wikipedia.org/wiki/Bramwell_Tovey (opened; secondary).
- Unresolved: the Marine Band announcement cited by the existing notes returned HTTP 403 to every fetch, so those notes’ concert details were not rechecked here.

### handel-messiah-hallelujah (201 s, cap 6): 5 → 6, restored 1, discarded 6

- Restored: **No hoops, no swords** (t = 140; between the bar-51 and bar-92 notes, 35 s and 44 s from them), from old “A Dublin charitable benefit”, now built on the newspaper notices of 9 and 13 April 1742 transcribed in the Handel Reference Database, https://web.stanford.edu/~ichriss/HRD/1742.htm (opened): the Stewards of the Charitable Musical Society ask the ladies “not to come with hoops” and the gentlemen to come without their swords, to make room for more of the audience and so for the charity.
- Discarded: “Jennens supplies the words” (no slot; the composer page already tells Jennens’s letters); “The Foundling performances” (no slot; the composer ledger warns against conflating the 1749 anthem concert and the 1750 hospital performance); four general or audio-feature cues.

### Unresolved across the batch

- The three shortest files (chopin-prelude-op28-4, its Pâquet comparison and couperin-barricades-mysterieuses) are already at their three-note cap, so nothing could be restored. If the cap is accepted as it stands, nothing more is needed.
- Single-source items: the 8 August 1906 Debussy letter (Larner’s extracts only); Jimbo as a felt toy (the LP sleeve only; Wikipedia gives a rival identification); the Wikipedia-reported priest’s remark (Duchen not opened) and Ysaÿe remark (Nectoux not opened).
- Not opened: Trezise on La Mer, Duchen, Nectoux, Steinberg; the Marine Band page (403).

## Batch 9

Counts are notes before → after (validator cap in brackets). “Restored” counts notes added; most are rewritten in the current voice from sources opened for this pass, and a few replace an old cue whose claim was wrong or only secondary. Time anchors for passage notes come from the recording’s section boundaries and, where noted, from the printed bar numbers by proportion. All 22 files validate `ok`.

### richard-strauss-till-eulenspiegel (10 → 16 [24]; restored 6; discarded 3 documented)

Restored (new notes from Strauss’s own score labels, as listed in Hepokoski, Table 1 and note 23, and from Dotsey; bar numbers converted to time by proportion within the section boundaries):
- A good laugh (t 90): Strauss’s later reply on “metaphysical” intentions. https://houstonsymphony.org/strauss-till-eulenspiegel/
- Dainty courtesies with pretty girls (t 280): labels 12–14, bars 209–232. https://jameshepokoski.com/wp-content/uploads/2019/04/2006-Framing-Till-Eulenspiegel.pdf
- A refusal, then a vow (t 350): labels 15 and 17, bars 244 and 263, four horns in unison.
- A grimace from afar (t 505): labels 19–20, bars 315 and 345.
- Whistling a street tune (t 540): label 21, bars 375–382.
- A strangled clarinet (t 830): label 26, bars 615–619.

Discarded: “The printed trickster” and “Cologne, November 1895” (both already covered by the current “The trickster in print” and “Nuts for the Cologne audience”); “Strauss reshapes the story” (its point, the execution as Strauss’s own ending, is in the current trickster note). All 17 other old cues are audio-feature, general or listen.

### rimsky-korsakov-scheherazade-festival (8 → 13 [18]; restored 5; discarded 1 documented)

Restored:
- The Sultan reaches for the bass drum (t 40): Serotsky on the staged entry of percussion and the bass drum in the introduction. https://www.musicweb-international.com/Programme_Notes/rimsky_scheheraz.htm
- Guests from other tales (t 250): Rimsky-Korsakov, My Musical Life (Joffe), pp. 247–248, on the Kalender and Princess themes in the festival. https://s9.imslp.org/files/imglnks/usimg/7/72/IMSLP721391-PMLP52433-My_Musical_Life_eng_edt.pdf
- A summerhouse full of fingerings (t 300): replaces the old “An inspector of naval bands”; the same book, pp. 115–117 (the 1873 appointment, the instruments at Pargolovo) and pp. 226–227 (the post ends in 1884).
- The ship shudders and breaks (t 535): Serotsky on the wreck.
- Bob Varney’s transfer (t 640): restores the old “transfer credit”; Internet Archive metadata. https://archive.org/metadata/Sheherazade/metadata

Discarded: “The headings remain suggestions” (the point is already made by the current Prince note quoting My Musical Life on “fairy-tale wonders”). The other 15 old cues are general or listen.

### rimsky-korsakov-scheherazade-kalendar (7 → 11 [16]; restored 4; discarded 4 documented)

Restored:
- A violinist who taught Stern (t 70): Naoum Blinder, from his Jewish Telegraphic Agency obituary. https://www.jta.org/archive/naoum-blinder-teacher-of-many-ranking-musicians-dies-in-san-francisco
- The tune in new colours (t 112): Serotsky on the variations. https://www.musicweb-international.com/Programme_Notes/rimsky_scheheraz.htm
- Not the Sultan (t 215): replaces the old “A title is not a casting list”; My Musical Life, pp. 247–248.
- A fanfare that sails on (t 320): the muted-brass fanfare returns in the finale for the wrecking ship (same pages). Placement confirmed only by Rimsky-Korsakov’s statement and a legible “con sord.” trumpet staff before rehearsal E on printed p. 30; the exact bar of the muted entry is not claimed.

Discarded: “Teaching before complete confidence” (the memoir passage on not being able to harmonise a chorale, ch. X, pp. 100–102, is verified but the current “The professor teaches himself” already covers the appointment); “The recording’s original album” (Victor DM-920, used in the Prince file instead); “A later explanation of the headings” (see the festival file); “The bassoon colour returns” and the other general cues.

### rimsky-korsakov-scheherazade-prince (8 → 11 [13]; restored 3; discarded 2 documented)

Restored:
- A composer in the navy (t 90): Orrin Howard, Los Angeles Philharmonic. https://www.laphil.com/works/scheherazade-last-movement
- “They carry the Princess on a palanquin” (t 215): Serotsky, with the Princess theme as a B♭-major clarinet theme from My Musical Life, pp. 247–248.
- San Francisco, March 1942 (t 395): the Commons file description.

Discarded: “Titles, not a screenplay” (covered by the current “Fairy-tale wonders”); “Professor at twenty-seven” (told once, in the Kalendar file).

### satie-gymnopedie-1 (5 → 5 [5]; restored 0; discarded 3 documented)

The file is at its cap and every note is bar-aligned, so nothing was swapped in. Cap-limited candidates, all documented in the Concise Oxford Dictionary of Music entry and Whiting’s biography as reproduced at https://www.encyclopedia.com/people/literature-and-arts/music-history-composers-and-performers-biographies/erik-satie: “Outside the Conservatoire” (1887 move to Montmartre, 1888 Gymnopédies), “Debussy adds an orchestra” (1896 orchestrations of Nos. 1 and 3), “Counterpoint at thirty-nine” (Schola Cantorum, 1905).

### schoenberg-verklarte-nacht-side-2 (7 → 13 [21]; restored 6; discarded 3 documented)

All six come from Schoenberg’s 1950 programme note, read on the Capitol sleeve (Internet Archive OCR) and in German at the Arnold Schönberg Center (https://schoenberg.at/en/schoenberg/kompositionen/transfigured-night-op-4). The section from 212 to 606 s has no bar alignment, so the notes there are placed in Schoenberg’s own order of themes and written to hold across the passage.
- Nature and feeling, not a plot (t 150): replaces the old “Emotion rather than stage directions”.
- The warmth that flows between them (t 330), The man’s resolve (t 520), A climb to the man’s theme (t 565): examples 15, 16 and the closing climax.
- Hissed in Vienna (t 395): the closing paragraph of the 1950 note.
- Under the composer’s supervision (t 660): the sleeve says the recording “was prepared under the personal supervision of the composer”; the session dates and players are from the Schönberg Center audio archive (recording 47). https://archive.schoenberg.at/av/aufnahme.php?id_aufnahme=47&action=view

Discarded: “The poet heard independent music”, “Before the orchestral versions” and “The quiet conclusion” (all already in the current notes at 266, 456 and 718); the old “Hollywood, August nineteen fifty” (superseded by the supervision note).

### schubert-8-allegro-moderato (9 → 13 [16]; restored 4; discarded 2 documented)

Restored:
- Locked away for forty-three years (t 40): replaces “Sent to Graz, never played”. Stähr, Berliner Philharmoniker programme note (the Hüttenbrenner brothers; Anselm’s condition that one of his overtures share the programme). https://www.berliner-philharmoniker.de/en/programme-notes/franz-schubert-symphony-no-7-in-b-minor-d-759-unfinished
- Why it stopped (t 150): the same note; the syphilis and Wanderer Fantasy theories are left out because Wikipedia gives them only as conjecture.
- Stokowski’s second recording (t 490): Pristine PASC 483 (acoustic version of 1924; electrical April 1927). https://www.pristineclassical.com/products/pasc483
- As if graves were opening (t 590): Stähr on the third appearance of the basses’ phrase.

Discarded: “Sent to Graz, never played” as written (Wikipedia’s Graz-diploma account and the Berlin note disagree about how the score reached the Hüttenbrenners, so only the shared facts are kept); “First heard in 1865” (covered by “Vienna hears it in 1865”).

### schubert-8-andante-con-moto (9 → 13 [18]; restored 4; discarded 2 documented)

Restored:
- Farewells from songs of travel (t 60): Stähr, same Berlin note.
- A short score survived (t 190): Wikipedia, Early history and Third and fourth movements (single secondary source; EXT). https://en.wikipedia.org/wiki/Symphony_No._8_(Schubert)
- Three discs for two movements (t 420): Pristine PASC 483 (matrices CVE 29052-6 to 29057-7; Victor 6663–6665, album M-16).
- Why only two (t 668): Wikipedia on the Newbould theory and the 1867 British première (EXT).

Discarded: “Hanslick’s verdict” (already covered); “The coda begins” (covered by “Two bars become a coda”).

### schubert-impromptu-gflat (8 → 9 [9]; restored 1; discarded 1 documented)

Restored: The year of Winterreise (t 250), from Wikipedia’s Impromptus and Winterreise articles and Utz, ZGMTH 18 (2021), note 14. https://www.gmth.de/zeitschrift/artikel/1132.aspx

Discarded (cap): “Music beside the classroom” (Gretchen am Spinnrade, 1814). “Printed in another key” is covered by “Six flats become one sharp”.

### schubert-quintet-956-adagio (7 → 12 [20]; restored 5; discarded 3 documented)

Restored:
- A cousin of the B♭ sonata (t 150): Blumhofer’s note. https://www.jonathanblumhofer.com/writings/program-notes/schubert-string-quintet-in-c-major/
- Brahms writes for the same forces (t 430): Wikipedia on the Brahms F minor quintet and the Adagio’s F minor (EXT). https://en.wikipedia.org/wiki/Piano_Quintet_(Brahms)
- Casals at Prades (t 540) and The music of friends (t 610): the Columbia sleeve notes (Internet Archive OCR), including the quotation from Scholes. https://archive.org/details/lp_casals-festival-at-prades-third-series-qui_franz-schubert-isaac-stern-alexander-schne
- Casals can be heard grunting (t 680): John Buxton’s review. https://classicalguy.substack.com/p/building-a-collection-24-schuberts

Discarded: “Rubinstein’s wish” (Wikipedia and Interlude give it without a primary source; the NPR piece does not mention it); “Two months before the end” and “Not heard in his lifetime” (covered by “A letter to Leipzig” and “Twenty-two years of waiting”).

### schubert-winterreise-fruhlingstraum (6 → 7 [7]; restored 1; discarded 5 documented)

Restored: The longest song on the set (t 156): Utz, ZGMTH 18 (2021), note 25 (12-inch side a little over four minutes; Frühlingstraum 4:11). https://www.gmth.de/zeitschrift/artikel/1132.aspx

Discarded: the four lyric paraphrases (“Dream and waking”, “Frost on the window”, “A second dream…”, “The last question”) are already in the current notes; “A group of twelve ends here” (the Hans Gál remark is cited only through German Wikipedia).

### schubert-winterreise-gute-nacht (5 → 7 [7]; restored 2; discarded 3 documented)

Restored:
- A cycle of terrifying songs (t 122): Spaun’s recollection as quoted in the Winterreise article. https://en.wikipedia.org/wiki/Winterreise
- The first complete recording (t 196): Utz, ZGMTH 18 (2021), section 2 and note 23 (19 songs with Foll on 27 April, 2 and 4 May 1928; five with Orthmann on 11 July). The old claim of twelve discs, one song to a side, is not in Utz and is left out.

Discarded: “A walking tempo”, “A stranger arrives”, “Good night on the gate” and “The verse that is not sung” (all covered).

### schubert-winterreise-leiermann (5 → 5 [5]; restored 0; discarded 5 documented)

At cap, so nothing was swapped in. Candidates: “Schubert’s last proofs” (Wikipedia, Winterreise: the proofs of part 2, 19 November, 30 December 1828; verified) is the strongest; the lyric paraphrases are covered by the current notes; “A hurdy-gurdy man” rests on Wikipedia’s hurdy-gurdy article.

### schubert-winterreise-lindenbaum (6 → 7 [7]; restored 1; discarded 5 documented)

Restored: The song Schober liked (t 105): Spaun, via the Winterreise article. https://en.wikipedia.org/wiki/Winterreise

Discarded: “A song for four voices” (Silcher, 1846; known only from German Wikipedia, not opened; cap); the lyric paraphrases and “The first major key” (covered or weakly sourced).

### schumann-kinderszenen-traumerei (3 → 6 [6]; restored 3; discarded 2 documented)

All from Thomas Synofzik’s catalogue 175 Jahre Kinderszenen (Robert-Schumann-Haus Zwickau, 2013). https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
- Thirty little droll things (t 70): Schumann to Clara, 17 March 1838 (item 3), our translation.
- Left out of the early programmes (t 110): items 15 and 16.
- Pictures, poems and a film (t 170): items 17, 33–34 and 38.

Discarded: “A piece scientists keep measuring” (its closing figure is a measurement of this recording, which cannot appear in prose; Repp and Shoda & Adachi not opened this pass); “An upbeat and a climbing tune” (covered by the bar-aligned opening note).

### schumann-piano-concerto-1 (10 → 14 [22]; restored 4; discarded 6 documented)

Restored (Steinberg’s Boston Symphony note, https://www.bso.org/works/schumann-piano-concerto-in-a-minor-opus-54, plus RIPM for the journal):
- A name in the oboe tune (t 60): CHiArA; Steinberg’s “whether or not Schumann intended it” is left to the evidence field.
- Schumann on concertos (t 205): the 1839 letter to Clara.
- A big bravura piece (t 520): Clara’s diary, June 1845.
- A review in his own journal (t 625): F.W.M. in the Neue Zeitschrift für Musik, with the RIPM dates (founded 1834; resigned 1 July 1844). https://ripm.org/assets/files/introductions/NZM1834-1844introEnglish.pdf

Discarded: “A concerto began as a fantasy”, “A difficult work to sell”, “Clara tries the first version”, “Dresden, December 1845” (all covered by current notes); “The composer as editor” (folded into the review note; the old “more than three hundred articles” is not in RIPM and is dropped); general cues skipped.

### scriabin-etude-op8-12 (3 → 4 [4]; restored 1; discarded 2 documented)

Restored: A White House workshop (t 90): the White House video page naming Bell, Weilerstein, Isbin and Pratt, 4 November 2009. https://obamawhitehouse.archives.gov/photos-and-video/video/white-house-workshop-classical-music

Discarded (cap): “A publisher’s support” and “An étude revised before publication” (both told by the current “The publisher has to wait”; Henle preface verified).

### shostakovich-5-allegretto (5 → 7 [7]; restored 2; discarded 3 documented)

Restored:
- The sarcastic Shostakovich (t 40): Harlow Robinson, Boston Symphony note. https://www.bso.org/works/symphony-no-5-shostakovich
- A London hall in October 1954 (t 200): replaces “The label names London”; the Westminster reissue record (2–14 October 1954, Walthamstow Hall, Royal Philharmonic). https://ci.nii.ac.jp/ncid/BA40424469

Discarded: “One side, two movements” and “Rodzinski had an earlier connection” (covered by “Rodzinski takes it to America”); the unverified general cues.

### shostakovich-5-largo (9 → 11 [22]; restored 2; discarded 2 documented)

Restored:
- A shout and a howl (t 410): replaces “Reception was not unanimous”; DSCH, work history (about twenty articles; Ostretsov). https://shostakovich-en.ru/140en
- Can tragedy be Soviet? (t 590): Shostakovich’s 1956 introduction to the score, quoted by DSCH.

Discarded: “The beginning of side two” and “Which score did they use?” (low value; the DSCH editorial page 272en was not opened).

### shostakovich-5-moderato (8 → 12 [22]; restored 4; discarded 3 documented)

Restored:
- Work begins on 18 April (t 130): DSCH, work history.
- No title, no dedication (t 380) and Tchaikovsky’s ovation, remembered (t 470): Robinson, Boston Symphony note.
- The genesis of the individual (t 730): Shostakovich’s statement as quoted by Robinson.

Discarded: “A premiere in Leningrad”, “An attack in print” and “Applause had witnesses” (covered by the current Pravda and première notes).

### sibelius-finlandia-stokowski-1921 (4 → 7 [7]; restored 3; discarded 4 documented)

All from the Sibelius Society of Finland’s account. https://sibelius.klubi.fi/english/musiikki/ork_finlandia.htm
- Gloomy themes over the Great Hate (t 56): Heikki Klemetti’s recollection of 1899.
- A tune for the whole world (t 125): Stokowski’s suggestion of the hymn as a world anthem.
- Many names before Finlandia (t 205): Finland, Finale, Vaterland, La Patrie; Carpelan’s title.

Discarded: “Half of a work, on one side” (the title already says abridged); “A protest in disguise”, “A tune with many lives” (the Koskenniemi text is in “The hymn without words”) and “Four takes, one survives” (covered by “Stokowski in Camden”). Left out for cap: the Society’s story that Sibelius politely asked a restaurant trio in Bergen to stop playing the piece in 1921.

### sibelius-symphony-2 (10 → 27 [66]; restored 17; discarded 5 documented)

Sources: Sibelius Society of Finland (https://sibelius.klubi.fi/english/musiikki/ork_sinf_02.htm), Serotsky (https://www.musicweb-international.com/Programme_Notes/sibelius_sym2.htm), the Decca Monteux booklet (https://d24ku69pnn7av2.cloudfront.net/decca-classics-booklets/2020/02894834711X_Pierre_Monteux_Booklet.pdf) and Wikipedia’s Symphony No. 2 article for the Carpelan letter, the nickname and Kajanus’s haystack remark (EXT).
Restored: High time to travel (160); “Now it came!” (235, Wasenius); A unity found while writing (340, Murtomäki); What Finland needed in 1902 (560); Brahms and the French (705, booklet); Don Juan argues, Death answers (800); Monteux and the London Symphony (1030); A crushing protest (1150, Kajanus 1902); Exceeded the highest expectations (1400, Merikanto); Straw on the haystack (1530); A new rising figure for horns (1690); The trio, unexpectedly again (1774); A new way to join movements (1840); An oboe for a sister (2020); Kingsway Hall, June 1958 (2110); A christening in Ruovesi (2210); A masterpiece, or vulgar? (2330).

Discarded: “One file, four movements”, “Strings, then winds and horns” (covered by the current opening note); “A stranger at the castle” and “A sketch headed Christus” (covered by “Don Juan at Rapallo” and “Strings after the brass”); “Premiere, revision, second premiere” (covered by “Helsinki, then Stockholm”).

### Unresolved across the batch

- satie-gymnopedie-1 and schubert-winterreise-leiermann are at their caps (5 and 5), so their documented candidates are listed above but not restored. Swapping a bar-aligned note for a life note would be the only way in; left to the lead.
- Timing: the new Till notes and the five Schoenberg notes between 150 and 565 s are placed by proportion within section boundaries; each is written to stay true across a window of about 20 s either way, not at the instant.
- Secondary-only claims (Wikipedia, EXT): Schubert 8 “A short score survived” and “Why only two”; the Quintet’s Brahms note; Sibelius 2 “High time to travel”, “Straw on the haystack” and the nickname in “What Finland needed in 1902”; Impromptu “The year of Winterreise”.
- Not opened: the Decca booklet’s printed page for the Monteux birth date (cited as pp. 48–51); Hanslick’s review itself; Repp and Shoda & Adachi on Träumerei timing; shostakovich-en.ru/272en; German Wikipedia on the Lindenbaum.

## Batch 8

Agent Restore8. Counts are notes before → after; “restored” counts old candidates brought back (rewritten, re-timed or re-sourced); “added” counts new sourced notes that are not old cues (only on long tracks or where a restored story needed its context). Skipped throughout without comment: old `audio-feature` cues and `general` cues. “Covered” means a current note already says it. Batch totals: 135 → 183 notes; 30 restored, 18 added. Score pages for Rachmaninoff’s Second Concerto are cited by printed page (PDF page + 2).

### rachmaninoff-concerto-2-allegro-scherzando (700 s, cap 18): 10 → 16, restored 6, discarded 9

- Restored: **Richter in Warsaw** (t = 64), from old “Richter in Warsaw”: recorded 26 and 28 April 1959, Philharmonic Hall, DG LP 138 076. https://pianistdiscography.com/discography/pianistLabel.php?cdnum=2186 and https://www.deutschegrammophon.com/en/catalogue/products/rachmaninov-tchaikovsky-piano-concertos-richter-4901 (both opened).
- Restored: **The piano takes the tune** (t = 138), from old “The piano takes up the line”. Full score p. 78 (rehearsal 31), opened at https://s9.imslp.org/files/imglnks/usimg/7/72/IMSLP528309-PMLP01953-Rachmaninoff_-_Piano_Concerto_No._2_(orch._score).pdf : piano mf dolce, chords over left-hand arpeggios; the oboe stave on p. 77 carries two flats, so the B♭ major of the existing notes stands.
- Restored: **Dr Dahl and the concerto** (t = 296) and **The finale is heard first** (t = 340), from old “Dahl and the new concerto” and “The finale was heard first”. Marc Mandel, BSO note, https://www.bso.org/works/piano-concerto-no-2-6 (opened): daily sessions January–April 1900, 15 December 1900 benefit concert for the Ladies’ Charity Prison Committee, première 9 November 1901.
- Restored: **The piano repeats the handover** (t = 412), from old “Recognise the accompaniment as well”. Full score p. 98 (rehearsal 37): a tempo, piano mf dolce over left-hand arpeggios.
- Restored: **Presto, then a flourish alone** (t = 596), from old “A flourish before the broadening”. Full score pp. 108–109: Presto, fff chords, lunga fermatas over rests, piano quasi glissando, fermata, Maestoso.
- Discarded: nine score and documented cues already covered by current notes (“The orchestra prepares the soloist”, “Short figures, quick responses”, “A broad melody in the orchestra”, “The short material regains force”, “The broad theme in another key”, “A melody with another title”, “A quiet start to the final drive”, “The long theme reaches C major”, “From broad theme to quick close”).

### rachmaninoff-etude-op39-5 (271 s, cap 7): 6 → 7, restored 1, discarded 6

- Restored: **The pictures he kept to himself** (t = 100), from old “Nine study pictures”, rebuilt around Rachmaninoff’s 2 January 1930 letter to Respighi, which names the pictures behind Op. 39 Nos. 2, 6, 7, 9 and Op. 33 No. 7 only. Geoffrey Norris, Hyperion CDA68188 note, https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA68188 (opened). The old IMSLP plate numbers were dropped.
- Discarded: “Gilanyan and Musopen” (recording metadata, the 2005–07 range is already in `recorded`; cap reached); five covered by current notes at t = 32, 62, 144, 194, 252.

### rachmaninoff-lilacs-piano (153 s, cap 4): 4 → 4, restored 0, discarded 4

- At cap, so nothing restored. Verified but not placed: Victor’s twelve takes of *Lilacs* (take 1 17 May 1920; takes 2–3 24 February 1922; takes 4–7 24–25 October 1923; takes 8–9 27 December 1923; takes 10–12 28 December; take 9 the master on Victor 1051). https://adp.library.ucsb.edu/index.php/matrix/detail/700009327/B-24123-Lilacs_op._21_no._5 (opened). Also not placed: “Rewritten in the summer of 1913” (Sudbin liner notes, not reopened; the t = 26 note already gives 1902, 1913, cadenzas and coda) and the Strekalova dedication. The current notes at 0, 26, 60 and 106 stay.

### rachmaninoff-polichinelle (219 s, cap 6): 5 → 6, restored 1, discarded 3

- Restored: **A first take destroyed** (t = 62), from old “A destroyed first attempt”. DAHR C-24643 (take 1 destroyed 20 October 1920, Camden; take 2 master 6 March 1923, New York; Victor 74807 and 6452) https://adp.library.ucsb.edu/index.php/matrix/detail/700009866/C-24643-Polichinelle_op._3_no._4 and Victor 6452 coupling with the F♯ major Nocturne https://adp.library.ucsb.edu/index.php/objects/refer/41140 (both opened). The old “and later 6452” order was dropped; the catalogue gives no order.
- Discarded: “Taking the piece apart” (Rachmaninoff’s “You must take the work apart, peer into every corner, before you can assemble the whole”, RCA booklet pp. 24–25, opened and verified; no slot at cap, and it concerns his method in general); two covered by t = 0 and 28.

### rachmaninoff-polka-vr (249 s, cap 7): 6 → 7, restored 1, discarded 3

- Restored: **Ten sides for Edison** (t = 105), merging old “Ten sides for Edison, in a hurry” and “A distant piano”. RCA/BMG booklet (1992), “The Recordings”, p. 28, https://archive.org/details/9-0023-sergei-rachmaninoff-complete-recordings-booklet-to-10-cd-set-rca-bmg-09026-61265-2-1992 (djvu text opened). The old session date is disputed (23 or 24 April), so the note gives “April 1919”; the “upright piano” detail is hedged in the booklet (“evidently”) and was left out.
- Discarded: “A critic hears the left hand” (Henderson, The Sun, 22 December 1918, via the Classical Pianists chronology, not reopened; no slot); two covered by t = 0 and 26.

### rachmaninoff-prelude-c-sharp-minor (228 s, cap 6): 5 → 6, restored 1, discarded 5

- Restored: **Siloti, and “It”** (t = 100), from old “Siloti takes it abroad”. BSO note (autumn 1898 Siloti tour, “It”) https://www.bso.org/works/piano-concerto-no-2-6 and the RCA booklet essay “The Composer”, p. 24 (“Oh, must I?”), both opened. Dropped from the old note: the claim that London publishers sold it as *The Burning of Moscow* and *The Day of Judgement* (no source opened).
- Discarded: “The composer at the keyboard” (Commons metadata: Diamond Disc 82187-R, restored by Adam Cuerden; no slot); “Nineteen and newly qualified” and three score cues, covered by t = 32 and the bar-aligned notes.

### rachmaninoff-prelude-op23-5 (216 s, cap 6): 5 → 6, restored 1, discarded 5

- Restored: **Four takes over three sessions** (t = 104), merging old “The composer at Victor” and “An approved fourth take”. DAHR C-23984: takes 1–2 destroyed 3 May 1920, take 3 master/hold 4 May, take 4 master 17 May, Victor 74628. https://adp.library.ucsb.edu/index.php/matrix/refer/700009183 (opened). The Victor contract date (21 April 1920) lives in the RCA booklet, p. 29 (opened) and was left out for length.
- Discarded: “The fifth was written first” (1901 composition, February 1903 Moscow performance; Wikipedia only, no slot); four covered by the bar-aligned notes.

### rachmaninoff-prelude-op32-10 (321 s, cap 9): 6 → 9, restored 2, added 1, discarded 5

- Restored: **All twenty-four keys** (t = 40), from old “Completing twenty-four keys”. Norris, Hyperion CDA68188 note (Op. 23 of 1901 and 1903, Op. 32 of 1910, Op. 3 No. 2 of 1892), https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA68188 (opened).
- Restored: **La Pianista’s own recording** (t = 200), from old “A credited modern performance”. Commons description: performed and recorded 12 May 2010, own work, CC BY 3.0 for the recording. https://commons.wikimedia.org/wiki/File:Rachmaninoff_Prelude_in_B_Minor,_Op._32,_No._10.oga (opened via the API).
- Added: **A man at the pool** (t = 148), a description of Böcklin’s *The Return* (1887), taken from https://en.wikipedia.org/wiki/The_Homecoming_(painting) (opened) and checked against the image (Commons, File:Böcklin Die Heimkehr 1887.jpg, viewed). The Moiseiwitsch/Bertensson–Leyda p. 296 link stays in the existing t = 128 note.
- Discarded: “A remembered conversation” (covered at t = 128); four score cues covered at t = 104, 168, 230, 282.

### rachmaninoff-prelude-op32-12 (154 s, cap 4): 4 → 4, restored 0, discarded 5

- At cap. Verified but not placed: DAHR B-24642: take 5, 21 January 1921, Camden, master on Victor 64963 and 812; takes 1–4 (20 and 21 October, two on 3 November 1920) destroyed. https://adp.library.ucsb.edu/index.php/matrix/refer/700009865 (opened). Also not placed: “Before microphones” (RCA booklet p. 29: separate horns for treble and bass in the acoustic sessions) and “An older work, a later career”. The four current score notes stay.

### rachmaninoff-prelude-op32-5 (183 s, cap 5): 5 → 5, restored 0, discarded 6

- At cap. The current t = 28 note already gives the 3 May 1920 Camden session (DAHR C-23985). Not placed: “One key in a complete collection” (same Norris fact as in op32-10), “A transfer, not a new performance” (RCA booklet p. 20 credits, not reopened).

### rachmaninoff-serenade-op3-5 (190 s, cap 5): 4 → 5, restored 1, discarded 4

- Restored: **Four takes thrown away** (t = 110), from old “Four takes thrown away”. DAHR B-27110 (takes 1–3 on 1 November, 4–5 on 4 November 1922; takes 1–4 destroyed; Victor 66129 and 816; ledger note “Steinway piano, style B-211833”). https://adp.library.ucsb.edu/index.php/matrix/detail/800001056/B-27110-Serenade (opened).
- Discarded: “Not the page, the performance” and “Revised, and played as played” (Henle HN 1491 critical report, Rahmer; the current t = 56 note already cites the report; Foley’s 1940 title page not reopened; no slot); two covered at t = 0 and 22.

### rameau-gavotte-six-doubles (407 s, cap 11): 8 → 9, restored 1, discarded 7

- Restored: **A theory of chord roots** (t = 111), from old “A theory of chord roots”, now with Rameau’s own preface sentence (“La Musique est une science qui doit avoir des regles certaines”, found in the PDF at https://frances.paginas.ufsc.br/files/2022/06/traite-de-lhmonie-de-rameau.pdf, opened) and the fundamental-bass account in Bartlet and Baker’s entries, https://www.encyclopedia.com/people/literature-and-arts/music-history-composers-and-performers-biographies/jean-philippe-rameau-0 (opened). Matches the Rameau ledger’s preface correction.
- Discarded: “Before the Paris operas” and “A stage debut at fifty” (both inside the t = 41 note); five score cues covered by the existing double-by-double notes. Not added: a Marcelle Meyer session note (the 29–30 October 1953 Salle Adyar session, DF 98/99, is verified at https://classical-pianists.net/viii/marcelle-meyer/chronology/ but already sits in the La Poule file).

### rameau-la-poule (186 s, cap 5): 5 → 5, restored 0, discarded 4

- At cap. “Meyer’s twentieth-century keyboard” is covered by the current t = 30 note; “Character inside a suite” and “Theory before the theatre” had no slot.

### ravel-bolero-ravel-1930 (952 s, cap 24): 6 → 20, restored 0, added 14, discarded 1

- Old cues were one documented note (“The composer conducts”, covered by the t = 202 note) and three audio-feature cues. All 14 new notes are sourced additions, written to close the 200–260 s gaps. Timing: the score runs to about 340 bars (the two-bar drum pattern sounds 169 times), and the recording keeps a nearly constant 2.8 s per bar, which reproduces the file’s section joins (460 s = statement 10, 660 s = 14, 912 s = E major, 932 s = the final percussion) to within a few seconds. Statement k therefore begins about 2.8 × (2 + 18(k − 1)) s, and the instrument notes sit mid-statement. Orchestration order: Wikipedia’s instrument table (themes A and B in the pattern AABB AABB AABB AABB AB) and Cleveland’s note; rehearsal marks checked in the Durand 1929 score (Commons PDF; printed pp. 1–3, 11 and 20–25 viewed).
- Added: **A dance hall for the record** (t = 25: Bal Bullier, Wolff, *Menuet antique*), **Ravel’s own metronome mark** (t = 65), **A commission for Iberia** (t = 105), **One finger at the piano** (t = 145), **“Not so fast”** (t = 180; Coppola’s session), **An oboe d’amore** (t = 235), **A flute and a muted trumpet** (t = 285), **Priam and Mule on saxophones** (t = 345), **Four instruments, one organ** (t = 428), **A publisher’s death** (t = 535), **“Orchestral tissue without music”** (t = 590), **A tavern in Spain** (t = 705), **A factory in the background** (t = 800), **Toscanini takes it faster** (t = 855).
- Sources opened: Manuel Cornejo’s chronology https://boleravel.fr/wp-content/uploads/RAVEL_Chronology_2018.pdf (1928 and 1930 entries); Phonobase https://phonobase.org/en/fiche/6574 (Wolff, Mule, Priam); https://en.wikipedia.org/wiki/Boléro (wikitext, including the table and the Orenstein, Woodley, Mawer, Coppola citations); Cleveland Orchestra note https://www.clevelandorchestra.com/posts/ravels-bolero (1932 *Evening Standard* quotation, oboe d’amore, original title); Beavers, https://www.mtosmt.org/issues/mto.19.25.4/mto.19.25.4.beavers.html (Reh. 5 and Reh. 8, the “tissue” phrase).
- Not opened: Orenstein (1991, 2003), Woodley (2000), Mawer (2006) and Coppola (1944), all cited through Wikipedia; Gramophone’s Boléro guide (page body empty). The Polydor date is left out because the sources disagree (Wikipedia “the next day” after 13 January; Cornejo “between 13 and 28 January”; Phonobase “11 January?”). The Toscanini exchange has two reported versions; the note says “in one report”. The old “madwoman” story (Wikipedia, Kavanaugh 1996, “possibly apocryphal”; Cornejo has Ravel absent from the première) was not used.

### ravel-gaspard-le-gibet (425 s, cap 11): 6 → 8, restored 1, added 1, discarded 3

- Restored: **A Bechstein in the Kaisersaal** (t = 320), from old “One score, separate performances”. Commons description (own work, Bechstein D 282, Wiener Kaisersaal, 2020-04-03, CC BY-SA 4.0), read through the API. The comparison with the other two Gaspard movements was dropped.
- Added: **Bertrand, read again** (t = 110): Larner’s programme note https://geraldlarner.com/work/ravel-gaspard-de-la-nuit-1908 (student reading with Viñes, 1908 Mercure de France edition, “three romantic poems of transcendental virtuosity”) and Cornejo (composition May–5 September 1908; première 9 January 1909). Larner says the new edition “must have” revived Ravel’s interest; the caveat sits in `evidence`.
- Discarded: “What makes the sound?” (covered at t = 72), “The score refuses haste” (covered at t = 0 and 276), “No release into daylight” (covered at t = 360).

### ravel-miroirs-alborada (357 s, cap 9): 7 → 9, restored 2, discarded 3

- Restored: **Ravel on his clown** (t = 150), from old “For a critic and a clown”. Roger Nichols, Hyperion CDA67731/2 note, https://www.hyperion-records.co.uk/dw.asp?dc=W5434_67731 (opened): “humorous, but with an edge to him—less well meaning than Beaumarchais’s Figaro”, plus his Érard-piano point. The Apaches and Calvocoressi detail was dropped (current t = 195 covers the dedication).
- Restored: **A ballet for Diaghilev** (t = 330), from old “Orchestrated for a Spanish ballet”. https://en.wikipedia.org/wiki/Alborada_del_gracioso (opened): Diaghilev’s commission, *Les jardins d’Aranjuez* at the Alhambra Theatre 1919, première 17 May 1919 (Pasdeloup, Rhené-Baton), the bassoon’s song. The orchestration’s year (1918 on IMSLP, “fourteen years later” on Wikipedia) is left out.
- Discarded: “Spain, at one remove” (no slot; the Basque mother and Madrid childhood are in the Ravel ledger from Wikipedia), “An encore on the first night” (Nichols; no slot), “A dawn song for a clown” (covered at t = 0).

### ravel-miroirs-noctuelles (259 s, cap 7): 6 → 7, restored 1, discarded 4

- Restored: **Ravel on his new harmony** (t = 100), from old “Ravel on his own harmony”. Esquisse autobiographique (1928) in French at https://fr.wikipedia.org/wiki/Miroirs_(Ravel) and Fyr ¶1, https://mtosmt.org/issues/mto.20.26.4/mto.20.26.4.fyr.html (both opened); Cornejo dates the dictation to 10 October 1928.
- Discarded: “Eliminated in the first round” (verified in Cornejo: fifth try 6–12 May 1905, jury of 13 May excludes Ravel and keeps six pupils of Lenepveu; no slot; the Dubois-resignation causal claim stays out, per the Ravel ledger); “Fargue and the Apaches” and “Count five, then three” (covered at t = 42 and 60); “Night moths, nine bars” (covered at t = 0).

### ravel-miroirs-oiseaux-tristes (214 s, cap 6): 5 → 6, restored 1, discarded 3

- Restored: **Ravel on his birds** (t = 84), from the remark inside old “One bird, nothing beneath”: birds lost in the torpor of a very dark forest in the hottest hours of summer. Esquisse autobiographique via https://www.veniccio.com/blogs/news/miroirs-ravel-s-scenes-and-sketches and https://fr.wikipedia.org/wiki/Miroirs_(Ravel) (the piece as the most significant of the set); Nichols quotes the same image (all opened). Translation ours; the French original of the sketch itself was not opened.
- Discarded: “For Ricardo Viñes” (covered at t = 42); “A first night with mixed reviews” (Jane Vial Jaffe’s programme note, not reopened; no slot); “Not scored by Ravel” (Colin Matthews and Felix Günther arrangements; Wikipedia only; no slot). Also found, unused: the salon première by Ravel on 13 January 1905 at Marguerite de Saint-Marceaux’s (Cornejo).

### ravel-miroirs-une-barque (403 s, cap 11): 9 → 11, restored 2, discarded 3

- Restored: **A line from Julius Caesar** (t = 150), from old “A line from Julius Caesar”. Fyr ¶5 (Orenstein 2003, p. 35) and the 1928 Esquisse in French at https://fr.wikipedia.org/wiki/Miroirs_(Ravel) (“par analogie”).
- Restored: **Aboard the yacht Aimée** (t = 303), from old “Seven weeks on a yacht”. Cornejo (1905): 2 June to about 29–31 July, canals of France, Belgium, the Netherlands and Germany, with Pierre Bonnard among the guests; 6 January 1906 première. The old “first trip abroad” claim was dropped and no link between the cruise and the piece is asserted.
- Discarded: “For a painter of the Apaches” (covered at t = 40; the Borodin whistle detail, Wikipedia’s Les Apaches, not reopened); “Ravel scored it himself” (1906, revised 1926; IMSLP; no slot); “A boat, wrapped in pedal” (covered at t = 0).

### ravel-miroirs-vallee-des-cloches (283 s, cap 8): 7 → 8, restored 1, discarded 3

- Restored: **A roll said to be Ravel** (t = 170), from old “A roll said to be Ravel”. Fyr ¶30 (opened in full): Duo-Art rolls marketed as the composer’s, Ravel’s letter to Calvocoressi about a better pianist (Orenstein 2003, p. 219), Woodley (2000, p. 222), Howat (2009, p. 321: “moments of mild anarchy between the hands”), sessions in 1922.
- Discarded: “La Savoyarde, and Faure’s lesson” (the La Savoyarde half is at t = 250; the “two distinct levels, within a pianissimo that did not sound feeble” coaching is Nichols and Fyr ¶29, no slot); “A letter from Alkmaar” and “Bells at noon in Paris” (covered at t = 38 and 118).

### ravel-tombeau-menuet (300 s, cap 8): 6 → 8, restored 2, discarded 4

- Restored: **From one Forlane to a Tombeau** (t = 72), from old “Dance as a remembered form”, re-sourced to the Orchestre national de Lyon programme (Coline Miallier), https://www.auditorium-lyon.com/en/node/13646 (opened): the 1914 Forlane, interruption by service, resumption in spring 1917, dedications to fallen comrades. The old paraphrase about the minuet as an inherited dance was dropped.
- Restored: **Piano first, then orchestra** (t = 215), from old “A later orchestral life”: Marguerite Long, Salle Gaveau, 11 April 1919; four movements orchestrated; Concerts Pasdeloup, 28 February 1920 (same programme).
- Discarded: “Remembering Jean Dreyfus” and the Musette, returning-minuet and final-page cues (all covered at t = 35, 110, 188, 285).

### richard-strauss-don-juan-coates-1922 (849 s, cap 22): 10 → 17, restored 5, added 2, discarded 6

- Restored: **Finished on 30 September 1888** (t = 260), from old “Completed before the première”; **A tone poem for Thuille** (t = 395), from “A dedication within a circle”; **A storm of applause in Weimar** (t = 445), from “Strauss conducts in Weimar”. All from Walter Werbeck’s introduction to the Richard Strauss Edition, https://schott-production.s3.eu-central-1.amazonaws.com/public_content/element/321495/dl/don_juan_einleitung_introduction.pdf (downloaded and read: pp. XI–XV).
- Restored: **“Color is everything”** (t = 545), from old “Colour becomes an argument”: Hanslick’s 1890 review quoted by Herbert Glass, https://www.laphil.com/works/don-juan (opened).
- Restored: **A London orchestra, an American label** (t = 725), from old “A London orchestra on an American label”. DAHR Cc1260 (Part 1: Hayes, Room 1, 28 April 1922, take 3 master, Gramophone D-670, Victor 55176), https://adp.library.ucsb.edu/index.php/matrix/detail/2000007287/Cc1260-Don_Juan (opened). The 5 May date in `recorded` and parts 2–4 rest on Bolig, which would not download (HTTP 202, empty); the note states only the 28 April session. The Victor object pages returned 503.
- Added: **Themes in a Padua cloister** (t = 62; Strauss’s later recollection, the sketches, the 11 June 1888 letter) and **Bülow’s verdict** (t = 175; 24 August 1888 letter, January 1890 card), both from the same introduction.
- Discarded: “Lenau, not a scene-by-scene script” (covered at t = 35), “Four parts on two discs” (covered at t = 210), the oboe-succession and horn cues and the E-major return and ending cues (covered at t = 326, 498, 644, 808), “A less forceful span” (covered at t = 94).

### Unresolved across the batch

- Four files are at their cap with documented session stories verified but unplaced (lilacs: Victor’s twelve takes; op32-12: four destroyed takes before take 5; op32-5 and la poule: nothing documented lost beyond what the current notes carry). If a note should be swapped for them, the candidates for removal are the score-only cues; the brief says to keep existing notes, so none was touched.
- Existing text to check: rachmaninoff-polka-vr names Behr’s tune *Scherzpolka*, Op. 303; the old note called it *Lachtäubchen* and IMSLP calls the work after *La Rieuse*; Hyperion’s note was not reopened.
- Timing inference: Concerto note times at 138 and 412 follow the piano’s return after the oboe/violas (about 35 s) and flute/violins (about 30 s) statements; Boléro instrument notes follow the constant-tempo model above. Both are passage-level, not moments.
- Not opened: Orenstein, Woodley, Mawer, Coppola, Bolig (HTTP 202 empty), Gramophone’s Boléro guide (empty body), DAHR Victor object pages for 55176–77 (503), Sudbin’s Lilacs notes, Henderson’s 1922 review, Jane Vial Jaffe’s Miroirs note, the Henle critical report, the Borodin-whistle sentence in Wikipedia’s Les Apaches.

## Batch 4

Agent Restore4. Counts are notes before → after; “restored” counts old candidates brought back (rewritten, re-sourced, sometimes merged or re-timed); “added” counts new sourced notes that are not old cues, written to close gaps over about three minutes or to give a recording a story the old file never had. All 22 files print `ok` from `tools/validate.mjs`. Sources were fetched and read in this pass unless marked “not opened”. Notes are placed at the old time where the event was known to be there, otherwise inside a section and worded to hold across the stretch.

### handel-messiah-hallelujah-edison-1916 (223 s, cap 6): 5 → 6, restored 1, discarded 6

- Restored: **Jennens’s scripture collection** (t = 72), from old “Words assembled before music”: Jennens’s scripture compilation sent in summer 1741, not a continuous story; Part I prophecy and birth, II death and resurrection, III the believer’s response. Teresa M. Neff, Handel and Haydn Society programme notes, https://handelandhaydn.org/interactive-program-notes-handels-messiah/ (opened).
- Discarded: “A disc, not a cylinder” (the 80292 disc facts are in “Handel on an Edison disc”; the cylinder remark corrects a Commons comment, not music); “A choir without individual credits” (negative provenance, the Oratorio Chorus credit is already in the t = 35 note; NPS catalogue https://www.nps.gov/edis/learn/photosmultimedia/opera-vocal-and-choral.htm opened, names no conductor); “Voices through the medium”, “A quieter interval”, “Pressure held and released”, “Space around the last gestures” (instructions to the listener and audio-feature cues).

### handel-messiah-hallelujah-sargent-1926 (265 s, cap 7): 6 → 7, restored 1, discarded 6

- Restored: **Side two of a Good Friday disc** (t = 200), from old “The side has an identity”: the Hallelujah is side 2 of Electrola EJ 39, side 1 is “Behold the Lamb of God” (“Oh, seht das Gotteslamm”), both from the 2 April 1926 concert; 2 April 1926 was Good Friday and the Royal Choral Society’s annual Good Friday Messiah dates from 1876. German National Library, https://d-nb.info/380148420 and https://d-nb.info/380148439 (both opened); Royal Choral Society history, https://www.royalchoralsociety.co.uk/history.htm (opened). Easter 1926 (4 April) computed, not looked up.
- Discarded: “A concert preserved on disc” (covered by “Inside the Albert Hall”); “The named performing forces” (negative, no headcount); “One year remains disputed” (1926 v. 1927 release year, dossier material); “A marked withdrawal”, “Continuity through changing sound”, “Closing sound and surface noise” (audio-feature or general).
- Unresolved: the Sargent credit. The Royal Choral Society’s history says Sargent became permanent conductor in 1928 and guest conductors led from 1922; the German National Library record names no conductor, so Sargent’s credit rests on the Public Domain Project/Commons description alone. Metadata left unchanged.

### handel-water-music-2-bourree (76 s, cap 3): 2 → 3, restored 1, discarded 2

- Restored: **A French dance among English ones** (t = 30), from old “A French dance among English ones”: the programme note’s “Purcellian hornpipe” and “several French dances”, with the bourrée’s Auvergne origin. Marine Chamber Orchestra programme, 29 January 2017, https://web.archive.org/web/20251101025231id_/https://www.marineband.marines.mil/Portals/175/Docs/Programs/170129.pdf?ver=2017-01-24-094649-630 (opened); bourrée origin from https://en.wikipedia.org/wiki/Bourr%C3%A9e (opened; Britannica returned 403, not opened). The old cut-time and upbeat details are already in the t = 0 note.
- Discarded: “Twelve bars, three times” (covered by “An upbeat and twelve bars” and the sections); “Louder to the last chord” (audio-feature).

### handel-water-music-2-minuet (195 s, cap 5): 4 → 5, restored 1, discarded 5

- Restored: **The Prince stays away** (t = 145), from old “The day on the river”: Bonet’s report to Berlin that neither the Prince nor the Princess of Wales took part, and the November 1717 ejection of the Prince from the palace. Handel Reference Database 1717, https://web.stanford.edu/~ichriss/HRD/1717.htm (opened) and Robert King’s Hyperion note, https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA66967 (opened). Attributed to Bonet because the same database prints a second newspaper report saying the Prince and Princess attended.
- Discarded: “Last piece in the programme” (covered by the Arnold note’s Finis); “Where the score rests the brass” (covered by “Three bars for the strings”); “The whole Minuet again, louder” and “The last chord, then silence” (audio-feature, applause); “No autograph survives” (documented in King’s note, no slot; the one to swap in).

### haydn-54-2-adagio (188 s, cap 5): 4 → 5, restored 1, discarded 5

- Restored: **A wild Hungarian lament** (t = 110), merging old “A slow movement in C minor” and “The prominent first violin”: Rosemary Hughes on the first violin’s “impassioned arabesques”, and its unusually prominent role in all twelve Tost quartets. Laurie Shulman, programme note for the Schumann Quartet, 20 November 2022, https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf (opened).
- Discarded: “One line above, three below” and “A held note, then the Menuetto” (covered by “Three steady companions” and “The unfinished ending”); three audio-feature cues.

### haydn-54-2-finale (437 s, cap 11): 6 → 8, restored 2, discarded 14

- Restored: **Paris first, then London** (t = 215), from old “Three cities, within two years”, re-sourced: Sieber’s June 1789 edition as Opp. 54 and 55; Longman and Broderip’s parts of July 1789 and January 1790 marked “Performed at the Professional Concert Hanover Square 1789”. Peter Holman, Hyperion CDA66971 booklet, https://www.hyperion-records.co.uk/notes/66971-B.pdf (opened; scanned text). The old Hummel/Amsterdam item rested on undated IMSLP prints and is dropped.
- Restored: **Foreshadowing Beethoven and Mahler** (t = 250), from old “A finale that starts slow”: Shulman’s verdict on the second Adagio. Same Shulman note.
- Discarded: “Two violins together” and “A murmur in the second ending” (covered by the t = 0 and t = 72 notes); “A Tel Aviv concert series” (credit trivia) and “Two dates for one concert” (upload date v. session date, dossier material); “Listen for the pauses” (general); nine audio-feature cues.

### haydn-54-2-menuet (200 s, cap 5): 4 → 5, restored 1, discarded 7

- Restored: **Another Adagio to come** (t = 180), from old “A slow finale to come”: the finale is a second Adagio with a Presto in the middle, which Shulman says shifts “the entire balance and emotional weight”. Same Shulman note.
- Discarded: “Without a pause” and “Not the first time” (covered by “Straight into the dance” and “An earlier C major quartet”); five audio-feature cues.

### haydn-54-2-vivace (263 s, cap 7): 5 → 7, restored 1, added 1, discarded 9

- Restored: **Tel Aviv, May 2015** (t = 225), from old “Tel Aviv, May 2015”: the museum’s music channel films the concert; the quartet took its name in 2008 when the Norwegian cellist Fredrik Schøyen Sjölin joined three Danes who had met as children at a summer camp. Video description, https://www.youtube.com/watch?v=dGgmFFMFICc (opened; it misprints Op. 64 for Op. 54), and https://en.wikipedia.org/wiki/Danish_String_Quartet (opened; secondary).
- Added: **The first violin’s fire** (t = 162): Hughes on the first movement’s “bold, striding gestures and big sonorities” and the virtuosity that lends “fire and eloquence”. Shulman note above.
- Discarded: “A gesture, then silence”, “Tost and the first violin” and “The development opens loudly” (covered by “Four players stop short”, “A violinist goes into business”, “The violin starts again”); six audio-feature cues.

### haydn-94-adagio-vivace (370 s, cap 10): 5 → 10, restored 3, added 2, discarded 9

- Restored: **A brief, patrician prelude** (t = 28), from old “Every Salomon symphony but one”: Orrin Howard, LA Phil note, https://www.laphil.com/works/symphony-no-94-surprise (opened), with Richard Wigmore’s note that No. 95 is the only London symphony without an introduction (Hyperion booklet for Howard Shelley, https://www.hyperion-records.co.uk/notes/44371-B.pdf, opened).
- Restored: **Three tunes in the exposition** (t = 140), from old “Three tunes in turn”: Howard’s cast of three themes, now a description rather than an instruction.
- Restored: **So that Pleyel would not outdo him** (t = 285), from old “Pleyel, the rival”: Haydn’s answer to Griesinger, “so that my student Pleyel … should not outdo me”, and the Allegro’s “countless Bravos”. As quoted at https://en.wikipedia.org/wiki/Symphony_No._94_(Haydn) (opened); Griesinger’s Biographische Notizen itself not opened.
- Added: **Simple, then complicated** (t = 165): the Morning Herald’s “remarkably simple, but extended to vast complication”, as quoted by Wigmore, who links the introduction’s repeated notes and rising chromatic lines to the Vivace. **A second development** (t = 325): Wigmore on the recapitulation as “in effect an intensive second development”.
- Discarded: “A slow introduction” and “A London first night” (covered by “Winds speak, strings answer” and “London, March 1792”); seven audio-feature cues.
- Unresolved: Wigmore says the Vivace “initially pretends it is in A minor rather than G major”, Howard that its first theme “begins mischievously outside the home key”, and the existing t = 88 note says “still leaning towards D major”. The new notes avoid the point; the existing note is not mine to change.

### haydn-94-menuetto (230 s, cap 6): 4 → 6, restored 1, added 1, discarded 7

- Restored: **A peasant dance and its Trio** (t = 125), from old “A peasant dance”: Howard’s “a true Austrian peasant dance” and “delightfully subtle and dignified” Trio. LA Phil note above.
- Added: **Fastest and lustiest** (t = 25): Wigmore, “the fastest and lustiest minuet in all Haydn’s symphonies”, with an “oompah” accompaniment, and a second half with irregular phrases, casual counterpoint and a recurring three-note figure. Hyperion booklet above.
- Discarded: “A minuet at scherzo speed” (its claim that Allegro molto marks the historical shift to the scherzo rests on Wikipedia alone, https://en.wikipedia.org/wiki/Symphony_No._94_(Haydn), and I found no stronger source); six audio-feature cues.

### ives-concord-emerson (938 s, cap 24): 9 → 16, restored 7, discarded 18

- Restored: **Composite pictures** (t = 38), from “An impression, not a biography”: Ives’s introductory note calls Emerson and Thoreau “composite pictures or impressions”. Ives, Essays Before a Sonata, https://www.gutenberg.org/files/3673/3673-h/3673-h.htm (opened; the `cache/` form of the Gutenberg URL trips the validator’s machine-language check, so the `files/` form is used).
- Restored: **Both halves at once** (t = 114), from “Two ideas can coexist”, now a score fact: right hand in C, left in A♭. Kyle Gann, “Following the Concord Sonata”, https://charlesives.org/node/6616 (opened).
- Restored: **Carlyle’s complaint** (t = 190), from “Unity without straight lines”: Ives, “Emerson”, section 2, with Gann’s “grand, nonlinear chaos of interrelated ideas”.
- Restored: **A Fugue in Four Keys** (t = 266), from “An organist’s formal training”, rebuilt on the Parker anecdote: Jan Swafford, https://charlesives.org/ives-man-his-life (opened).
- Restored: **The “nature” episode** (t = 425), from “Nature is a reading”: Gann’s name for the central episode, the harmonic-series bass and the Boléro comparison.
- Restored: **Kirkpatrick plays it whole** (t = 720): Cos Cob, 28 November 1938, from memory; Town Hall, 20 January 1939; the Tribune’s “greatest music composed by an American”. Gann’s timeline.
- Restored: **The Soul knocking at the door** (t = 840), from “More than fate knocking”: Ives’s last paragraph of “Emerson”.
- Discarded: nine old notes covered by existing ones (opening page, concerto origin, printed at his own expense, central episode, song to fugue, revisions, recapitulation, Beethoven motive, closing fragments) and nine audio-feature cues.

### ives-concord-hawthorne (762 s, cap 20): 10 → 13, restored 3, discarded 19

- Restored: **An extended fragment** (t = 108), from “Not Hawthorne’s whole moral world”: Ives’s last two paragraphs of “Hawthorne”. **Drum parts with his fists** (t = 470): Swafford’s story, with George Ives’s “It’s all right to do that, Charles, if you know what you’re doing”. **The way something happens** (t = 612), from “How something happens”: Ives’s list of associations and “not something that happens, but the way something happens”. Sources above.
- Discarded: ten old notes covered by existing ones (opening, board on black keys, ragtime, Celestial Rail-Road, circus hymn, march, Columbia) or general prompts, and nine audio-feature cues.

### ives-concord-thoreau (631 s, cap 16): 9 → 13, restored 3 (from two old cues), added 1, discarded 16

- Restored: **Three walks, three shores** (t = 120), from “Walking is not yet freedom”: the white-pebbled eastern shore, the “bolder northern” and western shores, the railroad “where the Aeolian harp plays”, and freedom “in his submission to her”. Ives, “Thoreau”; Gann matches the walks to the three G major episodes.
- Restored: **The Concord bell** (t = 285) and **A flute in 1911** (t = 545), both from “The day becomes an evening”: “the faint sound of the Concord bell” with Gann’s placement in the soft dissonant chords before the climax; “the poet’s flute is heard out over the pond” with Gann’s 1911 flute sketch (Pell’s, Adirondacks, no Beethoven motive yet).
- Added: **Played for a critic** (t = 355): Ives’s 1913 memo, in Gann’s timeline, that he played the sonata for Max Smith in 1912 with Thoreau improvised.
- Discarded: “Harmony and the composing years” (documented but not tied to Thoreau; the Gann facts above do the same work); “An autumn day at Walden”, “A repeated line below”, “Listening beyond the concert room” and “A melody across four portraits” (covered); other general prompts; eight audio-feature cues.

### lili-boulanger-pie-jesu (286 s, cap 8): 5 → 7, restored 2, discarded 7

- Restored: **A boy’s voice** (t = 175), from “A boy’s solo voice”: Alain Fauqueur of the Petits Chanteurs de Vincennes, and David Noakes’s sleeve note on its “ineffable serenity”. Everest LPBR 6059 (1960) insert, read from the Discogs scans (opened as images) and https://archive.org/details/lp_du-fond-de-labime-psaume-24-psaume-129_lili-boulanger-igor-markevitch-orchestre-d.
- Restored: **Nadia’s lifelong ambition** (t = 250), from “A posthumous score”, re-sourced: death at Mézy on 15 March 1918 (Galluhn’s preface, https://repertoire-explorer.musikmph.de/wp-content/uploads/vorworte_prefaces/987.html, opened) and the sleeve’s “lifelong ambition” to have Lili’s music recorded (archive.org djvu text, opened).
- Discarded: “A chamber prayer”, “Written through her sister”, “A different kind of rest” (covered by existing notes); “Motion beneath a held line” (instruction); three audio-feature cues.

### lili-boulanger-psalm-24 (210 s, cap 6): 5 → 6, restored 1 (from two old cues), discarded 5

- Restored: **A fanfare ensemble, with harps** (t = 105), merging “Brass without a string cushion” and “A dedication to Griset”: four-part choir, organ, four horns, three trumpets, four trombones, tuba, timpani and two harps, and the dedication to Jules Griset of the Guillot de Saint-Brice choir. Helen Julia Minors, preface (2011), https://repertoire-explorer.musikmph.de/wp-content/uploads/vorworte_prefaces/1146.html (opened).
- Discarded: “A Roman score”, “The soloist’s smaller surroundings”, “The whole choir opens out”, “Nadia behind the recording” (all covered); one audio-feature cue.

### lili-boulanger-psalm-129 (369 s, cap 10): 6 → 9, restored 1, added 2, discarded 10

- Restored: **Three ways to sing it** (t = 315), from “A choice in the score”: baritone with optional women’s voices, men’s chorus, or mixed chorus, a printed note on holding the brass back, and Pierre Mollet’s credit. The score’s printed p. 3 was read as a rendered image (the PDF has no text layer), https://ks15.imslp.org/files/imglnks/usimg/7/74/IMSLP829067-PMLP430945-Boulanger,_L_-_Psalm_129_full_score.pdf; the Everest sleeve credit as above.
- Added: **A sarrusophone in the bass** (t = 55): listed after the bassoons on the score’s p. 3; Minors’s preface, https://repertoire-explorer.musikmph.de/wp-content/uploads/vorworte_prefaces/1100.html (opened). **Hatred and exasperation** (t = 225): Georges Migot, La revue musicale, 1924, as quoted in French in the same preface; the translation is ours.
- Discarded: “Another Roman psalm”, “One voice takes the argument”, “Triplets within the pressure”, “Performed after her death”, “A different orchestral light” (covered); two listening prompts; three audio-feature cues. The preface’s remark that Dukas used the sarrusophone in <i>L’apprenti sorcier</i> is not used (not verified).

### lili-boulanger-psalm-130 (1440 s, cap 37): 10 → 22, restored 4, added 8, discarded 33

- Restored: **A committee for musicians at war** (t = 720), from “Work during the war”: Library of Congress, https://guides.loc.gov/feminism-french-women-history/famous/lili-boulanger (opened). **The conductor, Igor Markevitch** (t = 1030), from “Who conducted this recording?”, now his biography from the sleeve (archive.org djvu text). **Never heard in her lifetime** (t = 1215), from “The score outlived its composer”, re-sourced to Christopher Palmer’s Hyperion CDA66726 note, https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA66726 (opened). **One side of an LP** (t = 1360), from “One complete LP side”, checked against the archive.org file list (Psalm 130, 1440 s, alone on side one).
- Added from Gerald Larner’s programme note, https://geraldlarner.com/work/boulanger-psaume-130 (opened): **Chanting, then supplication** (t = 300), **A climax on “Adonaï”** (t = 600), **Who can stand?** (t = 790), **The turning point** (t = 950), **Major harmonies at last** (t = 1160), **Without easy consolation** (t = 1405). From Palmer: **B♭ minor, the key of the abyss** (t = 40) and **The record that changed Palmer’s life** (t = 500): he first heard Lili on “the classic Markevich record originally issued on the Everest label”. These close gaps of up to 385 s.
- Discarded: “Two named soloists”, “The organ has a player” (credits, and the soloists are named in the existing notes), “Finished at Gargenville” and the rest of the old score notes (covered), listening prompts, and the audio-feature cues.

### lili-boulanger-vieille-priere (433 s, cap 11): 7 → 9, restored 1, added 1, discarded 11

- Restored: **The Mettā Sutta** (t = 95), from “A French Buddhist text”: the words come from the Mettā Sutta; the score’s subtitle is <i>Prière quotidienne pour tout l’Univers</i>. Galluhn’s preface (above).
- Added: **Compared to Angkor** (t = 365): Georges Migot, 1 August 1921, paraphrased from the English in Galluhn’s preface. The première date is already in “Rome to Arcachon”.
- Discarded: “A low collective voice”, “Humming joins the phrases”, “The flute continues the thread”, “A single tenor speaks”, “First heard after her death”, “From humming to full speech”, “A coda without words” (covered by the existing notes); five audio-feature or listening cues.

### liszt-hungarian-rhapsody-6 (383 s, cap 10): 8 → 10, restored 1, added 1, discarded 10

- Restored: **Thirteen from twenty-two** (t = 60), from “Published in a larger group”: Rhapsodies III–XV all published in 1853, selected from the earlier set of twenty-two; only I and II are quite new. Leslie Howard, Hyperion CDA67418/9, https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA67418%2F9 (opened).
- Added: **A relative’s notebook** (t = 322): the fourth theme in János Liszt’s handwritten collection, the <i>Nagy potpourri</i>, in the Goethe-Schiller Archive. Same Howard note.
- Discarded: “Four sections, one pianist” (covered by the sections), “Sources beyond one tradition” (covered by the composer page’s margin note on the Hungarian band), “A different home key” (covered), and seven listening and audio-feature cues.

### liszt-sonata-b-minor (1656 s, cap 42): 10 → 23, restored 5, added 8, discarded 37

- Restored: **Peace to compose in Weimar** (t = 285), from “Weimar rather than the tour”; **A climax, and the song returns** (t = 850), from “A climax within the slow region”; **No programme, but Faust** (t = 950), from “Published without a story” (Yale exhibit, https://musiclib-exhibits.library.yale.edu/exhibits/liszt/bminor_sonata.html, opened); **Where does the fugato belong?** (t = 1000), from the old formal-design cue, now Walker’s and Hamilton’s words; **A pupil of a pupil** (t = 1220), from “A recording dated 1960”: Bolet studied with Moriz Rosenthal, a pupil of Liszt, and played the soundtrack of <i>Song Without End</i> in 1960 (https://en.wikipedia.org/wiki/Jorge_Bolet, opened; secondary).
- Added: **A manuscript in black and red** (t = 95), **A first version in 1849** (t = 480), **Clara’s diary** (t = 610) and **Blank lines in the autograph** (t = 700), all from Ernst Herttrich’s Henle preface (HN 559), https://www.henle.de/media/2b/bc/b3/1697725922/9559-1697725922-sync.pdf (opened); **Agitato, then incalzando** (t = 400) and **Prestissimo, then silence** (t = 1385) from Alan Tang’s bar-by-bar analysis, https://www.classicalmusic-notes.com/liszt-sonata-1/ (opened; Bärenreiter score on IMSLP, not opened); **Wagner hears it from Klindworth** (t = 760) and **“Highly delighted”** (t = 1600), Wagner’s letter of 5 April 1855 and Liszt’s reply of 2 May 1855, Hueffer’s translation, https://www.gutenberg.org/ebooks/4234 (opened). These close three gaps of 320–385 s.
- Discarded: “A broader kind of statement”, “Bülow gives the première”, “The fugato approaches”, “B minor returns with history” and similar (covered); “B major rather than B minor” (no source opened states the final chord; not written); the many listening prompts and audio-feature cues; “Brahms fell asleep” (legend, Wikipedia only; Clara’s diary is better documented).
- Unresolved: Henle gives the first public performance as “probably 22 January 1857”, Wikipedia 27 January; the existing note says only “January 1857”.

### mahler-2-allegro-maestoso (1330 s, cap 34): 9 → 16, restored 3, added 4, discarded 31

- Restored: **Todtenfeier** (t = 395), from “A movement from 1888”, re-sourced: title page “Prag 10. September 1888”, and Lipiner’s translation of Mickiewicz’s <i>Dziady</i>. **A second autograph** (t = 800), from “Revision before the premiere”: 29 April and 18 December 1894. **Berlin, December 1895** (t = 1175), from “A premiere without the voices”: most critics hostile, the audience’s long ovation. Stephen E. Hefling, essay for the Universal Edition study score (December 2010), https://www.universaledition.com/en/Works/Symphony-No.-2/P0049337 (opened), and Mahler Foundation chronology, https://mahlerfoundation.org/mahler/compositions/symphony-no-2/symphony-no-2-history/ (opened).
- Added: **A mighty being, a titanic struggle** (t = 70), Mahler’s letter of 1896 as quoted at https://mahlerfoundation.org/mahler/compositions/symphony-no-2/symphony-no-2-manuscript/ (opened); **Life written in blood** (t = 500), to Bauer-Lechner in 1893; **Bülow’s verdict** (t = 640), Foerster’s recollection; **The crisis the finale will dissolve** (t = 895), the Dies irae and the climax of bars 324–329 (Hefling). These close a 356 s gap.
- Discarded: “The opera house in Hamburg” (generic, Wikipedia only), the old notes covered by existing ones, and the listening prompts and audio-feature cues. Wikipedia’s “Anton Seidl” for the Klopstock letter is wrong (Arthur Seidl, per the ledger); the letter is not used here.

### mahler-2-andante-moderato (622 s, cap 16): 7 → 9, restored 1, added 2, discarded 15

- Restored: **Two pianos first** (t = 240), from “From manuscript to print”: Behn’s two-piano arrangement (1896), Hofmeister’s full score (February 1897), two Hamburg industrialists’ support. Hefling and Mahler Foundation, above.
- Added: **Episodes from the hero’s life** (t = 335), the 1896 letter on the Andante and Scherzo (Mahler Foundation quotation); **The summer composer arrives** (t = 530), Steinbach, about 20 June 1893, the Andante sketched in about seven days (Hefling). The 1901 Dresden programme’s wording for the Andante was seen only in secondary summaries and is not used.
- Discarded: “Several voices in the strings” and the other listening prompts, audio-feature cues, and old notes covered by existing ones.

### Unresolved across the batch

- Secondary-only claims (EXT): the bourrée’s Auvergne origin, Danish String Quartet history, Bolet’s teachers and the Song Without End soundtrack (all Wikipedia); Haydn’s reply to Griesinger (as quoted on Wikipedia).
- Not opened: Britannica on the bourrée (403); the Royal Albert Hall’s Good Friday Messiah page (redirect loop); Griesinger, Biographische Notizen (1810); the Bärenreiter Sonata score (Tang’s bar numbers are used at passage level only); Mahler’s 1901 Dresden programme text; IMSLP Eulenburg score for Haydn Op. 54/2 (not consulted for the new notes).
- Timing: Liszt Sonata, Mahler 2 first movement and Psalm 130 notes are placed by proportion between section boundaries and worded for the whole stretch; none names a bar at an instant.
- Quotations from English translations (Hueffer for Wagner and Liszt; Henle’s English for Clara Schumann; the Mahler Foundation’s and Hefling’s English for Mahler) are attributed to those editions; Migot’s French (Psalm 129) is translated by us.

## Batch 1

Agent Restore1. Counts are notes before → after; “restored” counts old candidates brought back (rewritten, re-timed or re-sourced); “added” counts new sourced notes that are not old cues; “discarded” is every other old non-audio-feature cue (covered by a current note, general/listening prompts with no source, or over the cap). Several old cues carried machine-level evidence (levels, onset counts); none of that text survives.

Score checks made for this batch: Mutopia 1563 LilyPond source (WTC I fugue 24, bars 4–76); Mutopia 941 LilyPond source and the voice table `docs/assets/data/beethoven-5-first/score.json` (Beethoven 5/I); the voice table for `bach-brandenburg-5-finale` plus the Bach-Gesellschaft scan (IMSLP02043, pp. 149, 158–159); the Breitkopf Op. 131 scan p. 147 (lvbeethoven.it Opus131.pdf); the Bach-Gesellschaft St Matthew scan pp. 2 and 4 (IMSLP00934), which confirms the existing note that Orchestra II rests when Choir I enters at bar 17.

### bach-brandenburg-5-affettuoso (356 s, cap 9): 6 → 8, restored 1, added 1, discarded 9

- Restored: **Köthen, then Leipzig** (t = 283), from “Court musician before cantor”: contract of August 1717, Leipzig duties from 1723, the annual birthday cantata for Prince Leopold. https://www.bach-leipzig.de/en/neutral/johann-sebastian-bach-%E2%94%80-chronology (opened).
- Added: **Adagio becomes Affettuoso** (t = 105). The 1721 heading “Affettuoso” read on the Bach-Gesellschaft scan, p. 149 (IMSLP02043, opened as images); the early version’s Adagio from https://en.wikipedia.org/wiki/Brandenburg_Concerto_No._5 (opened; EXT).
- Discarded: “Bach also played violin” and “Six concertos presented together” (both already in the file); “Refrain in another minor”, “Recognise rhythm through harmony”, “The opening finds home” (covered by the notes at 140, 216, 318); “The keyboard can answer”, “A dotted figure travels”, “Bass beneath the ornaments” (general; no source).

### bach-brandenburg-5-allegro (599 s, cap 15): 7 → 9, restored 1, added 1, discarded 10

- Restored: **Concerts at the coffeehouse** (t = 315), from “The later coffeehouse concerts”: Collegium Musicum from 1729 at Café Zimmermann, weekly concerts, outdoors in summer, the suites and the violin and harpsichord concertos. Bach-Archiv chronology, as above (opened).
- Added: **A harpsichord from Berlin** (t = 215): March 1719 trip to collect a new harpsichord for Köthen; Bach’s dedication preface recalls playing for the Margrave “a couple of years ago”. https://www.bachvereniging.nl/en/bwv/bwv-1050 (opened). The Bach Society says “probably”; the text says “probably”. The instrument-maker (Mietke) appears only on Wikipedia and is left out.
- Discarded: “A recurring orchestral frame”, “Three instruments in conversation”, “Beyond the home key”, “A composed display”, “Remember the ensemble rhythm” (general or listening prompts); “A month in confinement” (already at t = 58); “A dedication, not a premiere” (covered by the t = 132 note); “Köthen to Leipzig” (used in the Affettuoso file); “An extended keyboard solo” and “The closing ritornello” (covered).

### bach-brandenburg-5-finale (297 s, cap 8): 5 → 7, restored 1, added 1, discarded 8

- Restored: **Music of the Bach Family** (t = 262), from “One documented concert programme”: the Advent Chamber Orchestra programme of 10 and 17 February 2008 lists Brandenburg 6, C. P. E. Bach’s flute concerto Wq 169, then Brandenburg 5. https://www.ibiblio.org/pandora/vorbis/chamber_orchestra/MAR-08/readme.html (opened).
- Added: **The harpsichord alone** (bar 164, about 2:35). Voice table: bars 164–176 carry only harpsichord notes, the longest such run in the movement; the same passage is nine bars of harpsichord alone at the top of Bach-Gesellschaft p. 159 (scan viewed). Evidence names the Mutopia bar numbers (music ID 548).
- Discarded: “A dance becomes counterpoint”, “Two beats, three subdivisions” (covered by the bar 1 note); “The middle keeps the figure”, “From violinist to organist”, “A nineteenth-century printed score”, “The opening starts again” (covered); “Follow one line through others”, “The running notes settle” (general).

### bach-cello-suite-1-prelude (130 s, cap 4): 3 → 4, restored 1, added 0, discarded 5

- Restored: **The copy that survives** (t = 30), from “A copy leaves choices”: no autograph survives; Anna Magdalena’s copy and her varied slurs. https://en.wikipedia.org/wiki/Cello_Suites_(Bach) and https://www.bachvereniging.nl/en/bwv/bwv-1007 (both opened). The Bach Society page says Anna Magdalena notated “the only surviving manuscript”; other copies exist, so the note says “copies, one of them made by his wife”.
- Discarded: “A chord unfolded in time”, “The pattern becomes freer”, “Building towards the tonic” (covered by the bar 1, 22 and 37 notes); “A court-period collection” (cap reached); “Follow the lowest notes” (general).

### bach-goldberg-aria (292 s, cap 8): 6 → 7, restored 1, added 0, discarded 7

- Restored: **Bach’s own copy** (t = 112), from “Music issued in print”: Schmid’s Nuremberg print of 1741 (title page asks for a two-manual harpsichord) plus Bach’s own copy, found in Strasbourg in 1974, with fourteen canons on the ground. https://en.wikipedia.org/wiki/Goldberg_Variations and https://www.bachvereniging.nl/en/bwv/bwv-988 (both opened).
- Discarded: “Melody above a foundation”, “The first half repeats”, “The second harmonic route”, “The second half repeats” (covered by the bar-aligned notes); “A story told much later” (Forkel note present); “An aria in the household” (covered at 182); “Ornaments belong to the line” (general).

### bach-partita-2-chaconne (782 s, cap 20): 8 → 12, restored 3, added 1, discarded 14

- Restored: **Home to a grave** (t = 130), from “A date is not a programme”: Maria Barbara’s death in 1720 (Bach-Archiv chronology, opened) and Helga Thoene’s tombeau reading of 1994, told as a disputed reading (https://en.wikipedia.org/wiki/Partita_for_Violin_No._2_(Bach), opened; EXT).
- Restored: **Heifetz on a 45** (t = 455), from “Two sides joined together”: the item description reads “17 cm Single RCA ERA 9544 (2 sides, here put together) … rec. 1952”. https://archive.org/metadata/chaconne-d-moll-heifetz (opened).
- Restored: **Bach the violinist** (t = 570), from “The composer inside an ensemble”: Weimar 1703 (Bach-Archiv) and the 1720 manuscript (Bach Society, https://www.bachvereniging.nl/en/bwv/bwv-1004, opened).
- Added: **A Chaconne in the Metro** (t = 330): 12 January 2007, 7:51 a.m., Bell “decided to begin with ‘Chaconne’”, 1,097 passers-by in 43 minutes, seven stopped, 27 gave “$32 and change”. Weingarten, The Washington Post, 8 April 2007, archived copy https://web.archive.org/web/2007/http://www.washingtonpost.com/wp-dyn/content/article/2007/04/04/AR2007040401721_pf.html (opened; the live Post page is paywalled).
- Discarded: the six “listen”/general cues on the bass, the arpeggio edges and the later variations; “A ground beneath variation”, “A manuscript dated 1720”, “Several voices, one bow” (covered by the bar 1 and t = 72 notes); the old structural cues for bars 133, 209 and 249 (covered by the bar-aligned notes); “A date is not a programme” survives only as the note above.
- Not used: C. P. E. Bach’s 1754 remark that his father “played the violin cleanly and penetratingly” (no primary text opened).

### bach-st-matthew-erbarme-dich (466 s, cap 12): 7 → 9, restored 1, added 1, discarded 5

- Restored: **Bach’s own score** (t = 338), from “Bach’s own score”: holograph Mus. ms. Bach P 25, Staatsbibliothek zu Berlin, dated [1736–40] on IMSLP, “manuscript of 1736” at the Bach Society. https://imslp.org/wiki/St._Matthew_Passion,_BWV_244_(Bach,_Johann_Sebastian) and https://www.bachvereniging.nl/en/bwv/bwv-244 (both opened). The Society’s “1736” is kept out of the text (the note says “between 1736 and 1740”).
- Added: **The music stands in the room** (t = 215): Heinrich Sievers, May 1959, on Richter’s four stereo LPs; our translation of the German in the Deutsche Grammophon booklet (Internet Archive item Booklet_djvu.txt, opened), which also credits Töpper and Büchner.
- Discarded: “The aria alone”, “A violin sings first”, “Peter weeps”, “Bach, violinist” (all covered); “Violin and voice share the line” (evidence was onset counts).

### bach-st-matthew-opening (589 s, cap 15): 8 → 12, restored 3, added 1, discarded 10

- Restored: **A Lutheran Agnus Dei** (t = 236), from “A Lutheran Agnus Dei”: Decius, text and tune dated 1522/23, first printed in Low German at Rostock in 1531 (the old note gave 1531 as the date of writing; the Passion table on Wikipedia’s structure page says 1541, a High German print). https://en.wikipedia.org/wiki/O_Lamm_Gottes,_unschuldig (opened; EXT).
- Restored: **Mendelssohn conducts it in Berlin** (t = 470), from “Mendelssohn, 1829”: 11 March 1829, second performance 21 March, ten arias and seven choruses cut. https://en.wikipedia.org/wiki/St_Matthew_Passion (opened; EXT). The old “first performance outside Leipzig” is dropped (the page itself says “not heard … in its entirety”).
- Restored: **Twenty-two sessions in 1958** (t = 145), the other half of the same old cue: 22 sessions between 23 June and 21 August 1958, stereo, Freyse on Klemperer’s extra forty minutes. Deutsche Grammophon booklet (above, opened).
- Added: **Music for a prince’s funeral** (t = 350): the March 1729 funeral music for Leopold of Anhalt-Köthen shares ten movements with the Passion. https://www.bachvereniging.nl/en/bwv/bwv-244 (opened); Picander as librettist from https://en.wikipedia.org/wiki/K%C3%B6thener_Trauermusik (opened). The direction of borrowing is left open (“derived from, or serve as models for”).
- Discarded: “Two orchestras, one pulse”, “Sixteen bars, then voices”, “The first choir alone”, “Whom? The bridegroom”, “The chorale above both choirs” (covered; their evidence was dB levels); “Words by Picander”, “Good Friday vespers”, “Bach in Leipzig” (covered); “Follow the top line” and “Short questions, long answers” (general).

### bach-wtc1-fugue-b-minor (482 s, cap 13): 10 → 13, restored 3, added 0, discarded 20

- Restored: **The bass takes the subject** (bar 9), **The alto, between its companions** (bar 21) and **B minor is home again** (bar 60), from the old bar-aligned “Bass subject, two counter-lines”, “Alto returns in B minor” and “Tenor restores B minor”. Each rewritten and checked pitch by pitch against Mutopia 1563 (notes.lyi: bass F♯–D–B–G–F♯–B–A♯ at bar 9, tenor crotchets B–A–G♯–F♯ in bar 10, alto F♯–D–B at bar 21, soprano B–A–G♯–F♯ in bar 22, bass B–G♯–E late in bar 57, tenor F♯–D–B late in bar 60). https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=1563 (LilyPond source downloaded).
- Discarded: bars 4, 24, 34, 38, 47, 50, 57, 69 (cap reached at 13 notes); bars 17, 30, 41, 53, 64, 74, 76 (already in the file); life cues on Ohrdruf (1695), Anna Magdalena and the Leipzig duties (cap reached; the 1721 marriage note is already at 232).

### bartok-concerto-orchestra-introduzione (595 s, cap 15): 9 → 13, restored 4, added 0, discarded 7

- Restored: **Plunging into the unknown** (t = 40), from “Work after emigration”: October 1940 departure, “like plunging into the unknown from what is known, but unbearable”, Columbia post. Rodda, Pittsburgh Symphony programme, 17–19 January 2020 (PDF opened) https://culturaldistrict-prod.s3.amazonaws.com/culturaldistrict/system/assets/29105/original/Jan._17-19__2020.pdf . Rodda quotes the letter without naming the recipient.
- Restored: **Two friends make a suggestion** (t = 76), from “A commission in memory”: Szigeti and Reiner suggest the commission (Ramey, in Rodda).
- Restored: **An orchestra of soloists** (t = 212), from “An ensemble of soloists”: Bartók’s Boston programme note, with the brass fugato as his first example (Rodda; https://www.orchestralbassoon.com/bartok-concerto, opened).
- Restored: **Pittsburgh before Chicago** (t = 350), from the old note of the same idea: Móricz, Comments, source RecR (recorded 4–5 February 1946, first commercial recording, issued 1948; Henle PDF opened) https://www.henle.de/media/7c/05/ab/1697725629/7001-1697725628-sync.pdf ; Chicago recording of 22 October 1955 from https://chicagosymphony.org/inside-the-music/article/8311/125-moments-011-first-grammy-awards (opened).
- Discarded: “Starting beneath the orchestra”, “The fast movement takes hold”, “Room for a longer phrase”, “Material becomes an argument”, “Entries that overlap”, “The gentler idea returns first” (all covered by the current score-proportion notes); “Keeping the low line” (general).

### bartok-concerto-orchestra-coppie (350 s, cap 9): 6 → 8, restored 2, added 0, discarded 8

- Restored: **A kolo for two bassoons** (t = 70), from “A collector’s precise ear”: the bassoon duet imitates a Yugoslav kolo, a major sixth apart (Suchoff, p. 139, via https://www.orchestralbassoon.com/bartok-concerto, opened) and the Columbia post (Rodda). The old note’s caution (not a collected tune) is carried by saying “imitates … in the account of Bartók’s editor Benjamin Suchoff”.
- Restored: **Reiner’s old teacher** (t = 270), from “Reiner and his former teacher”, now with Philip Hart’s sentence quoted by the Chicago Symphony archive page above (opened).
- Discarded: “A new distance between voices”, “Jesting within the concerto”, “The procession becomes a chorale”, “The frame closes quietly” (covered); “Five kinds of duet”, “Preparing to move again”, “Recognisable but less solitary” (general / listening prompts).

### bartok-concerto-orchestra-elegia (470 s, cap 12): 8 → 11, restored 2, added 1, discarded 4

- Restored: **A lugubrious death-song** (t = 100), from “The composer’s central death-song” (Bartók’s Boston note, in Rodda and at orchestralbassoon.com). **Pittsburgh, 1946** (t = 410), from “An early Pittsburgh commitment”: performances of 18 and 20 January, recording of 4–5 February 1946 (Móricz), Bartók’s death on 26 September 1945 (Rodda).
- Added: **A quasi boycott** (t = 270): Bartók, end of 1942, as quoted by Rodda (the letter is not named there).
- Discarded: “Remembering the low strings”, “Composing at Saranac Lake” (covered); “Different speeds at once”, “The frame is not unchanged” (general; the second has no source).

### bartok-concerto-orchestra-intermezzo (269 s, cap 7): 6 → 7, restored 1, added 0, discarded 5

- Restored: **Whose joke is it?** (t = 158), from “Recognising the musical visitor”: the march parodies the “invasion” theme of Shostakovich’s Seventh (Rodda), which itself refers to “Da geh’ ich zu Maxim” from The Merry Widow; whether Bartók mocks Shostakovich, Lehár or both is argued (https://en.wikipedia.org/wiki/Concerto_for_Orchestra_(Bart%C3%B3k), opened; EXT). Rodda also writes that the Lehár song was a favourite of Hitler; not used.
- Discarded: “A song with uneven steps”, “The second song opens out”, “A ballet that never happened”, “A less courteous visitor” (covered); “A different kind of interruption” (Douglas Watt, The New Yorker, 12 March 1949: not opened).

### bartok-concerto-orchestra-finale (543 s, cap 14): 9 → 11, restored 2, added 0, discarded 8

- Restored: **The best orchestra piece** (t = 175), from “The Boston beginning”: première on 1 December 1944 (Rodda) and Bartók to a pupil, “the best orchestra piece of the last 25 years” (Suchoff, p. 115, via orchestralbassoon.com). **Two endings** (t = 480), from “An ending revised before recording”: Koussevitzky’s broadcast of 30 December 1944 (original ending) and Reiner’s 1946 recording (alternative ending) from Móricz’s source list.
- Discarded: “A call before the rush”, “The difficult last movement”, “A score corrected by Bartók”, “The full orchestra closes” (covered); “A line against continuing motion”, “Counterpoint at a smaller scale”, “Following more than one line”, “Quietness without immobility” (general / listening prompts).

### beethoven-109-prestissimo (140 s, cap 4): 3 → 4, restored 1, added 0, discarded 1

- Restored: **“A dedication!”** (t = 110), from “A dedication, a flawed first edition”: Beethoven to Maximiliane Brentano, 6 December 1821, from the autograph transcription at https://www.lvbeethoven.org/Opus109/ (opened); her parents from https://en.wikipedia.org/wiki/Piano_Sonata_No._30_(Beethoven) (opened). The first-edition errors are left out: lvbeethoven’s header says Artaria, Vienna, its detailed section Schlesinger, Berlin; Wikipedia says Schlesinger, November 1821.
- Discarded: “A sonata in blocks of four” (covered by the bar notes’ account of the movement).

### beethoven-131-lener (2,442 s, cap 62): 10 → 26, restored 5, added 11, discarded 50

- Restored: **Four days in London** (t = 150), from “Four dates in London”, now with DAHR’s matrix dates (11, 21, 22 February; 25 August 1924). https://adp.library.ucsb.edu/index.php/objects/refer/595384 (opened). **Ten sides, five discs** (t = 640), from “Ten sides become continuous”: L 1581–1585, Masterworks Set 6, side contents from the Internet Archive description (opened). **Without a break** (t = 560), from “Playing without a long break”: Beethoven-Haus guide, showcase 1 (opened as PDF). **Parts first, score later** (t = 840), from “From manuscript to parts”: Schott parts May/June 1827, score February 1828. **Halberstadt, 1828** (t = 2200), from “A posthumous public hearing”. The last two from https://www.lvbeethoven.org/opus131/ (opened).
- Added: **Beethoven’s first piece** (t = 70; Holz’s question of January 1826 and the conversation-book sketch of about 11 December 1825, lvbeethoven); **“Another idea”** (t = 225; Beethoven to Holz, “best quartet”, Beethoven-Haus guide); **The most melancholy fugue** (t = 300; Wagner and Kerman as cited on Wikipedia, EXT); **Schubert’s last wish** (t = 360; Holz’s recollection, Deutsch via Wikipedia, EXT); **Announced as Op. 129** (t = 950, lvbeethoven); **A dedication withdrawn** (t = 1200; Wolfmayer and the letters of 22 February and 10 March 1827, lvbeethoven; “by everything in the world” is our translation of “um alles in der Welt”); **The engraver’s copy** (t = 1300; Beethoven-Haus guide); **The extreme boundary** (t = 1430; Schumann, 1877 translation, via Wikipedia, EXT); **260 performances** (t = 1750; Beethoven-Haus guide, showcase 8); **Bowing close to the bridge** (t = 1890; Breitkopf scan p. 147 viewed: sul ponticello, pp, “da capo per l’ordinario”, attacca; plus the guide); **Hamlet in the finale** (t = 2310; Schering, as summarised by Biamonti on lvbeethoven).
- Discarded: about 30 general or listening cues (“Keep one line”, “Hear the bass as melody”, “Tonic and dominant”, “One note outlasts a chord”, and the like); “A quartet from 1826”, “Unequal lengths by design”, “Seven movements, one file” (covered by the 705 and 1930 notes or the intro); “A publisher’s question” (already at 1105); “A changed dedication” (the file’s own t = 440 note); “The transfer’s limits” (no claim a reader could use); the old per-movement form cues (covered by the score-proportion notes and transitions).
- Gaps: the longest silence is 140 s (1750 → 1890).

### beethoven-132-dankgesang (1,093 s, cap 28): 10 → 17, restored 3, added 4, discarded 23

- Restored: **A prince asks for quartets** (t = 410), from “A commission from St Petersburg”: Galitzin, November 1822, 50 ducats, bankruptcy of 1826, the son’s payments of 1835 and 1852 (Beethoven-Haus guide, showcase 6, opened). **“Our musical Jean Paul”** (t = 870), from “Listeners asked for repeated hearings”: the Leipzig AMZ review of the concert of 6 November, our translation of the German quoted on https://www.lvbeethoven.org/opus132/ (opened); the review’s month is not on that page, so the note gives only 1825. **A rehearsal, then the première** (t = 740), from “Private hearings before public concerts”: Holz to Beethoven, 8 September 1825, and Smart’s note that Beethoven conducted (lvbeethoven).
- Added: **The prince reads about it** (t = 520; Galitzin, 14 January 1826, French, our translation); **Published in Paris and Berlin** (t = 610; Beethoven-Haus guide, showcase 2); **Linke played better than ever** (t = 800; Karl van Beethoven, BKh 8 p. 182); **Panting behind Beethoven** (t = 930; Wiener Allgemeine Theaterzeitung, 24 November 1825, p. 579). These all from lvbeethoven’s documentary section unless noted.
- Discarded: “An LP date, not a session” (catalogue facts only; no story); “Making the performing parts” (covered by the t = 480 note); the old form cues (covered); about fifteen general or listening cues.
- Unresolved: lvbeethoven’s Op. 132 text places Beethoven’s illness in “April 1824”, which looks like a slip; the file’s existing note says spring 1825 (Beethoven-Haus guide, which gives no month). Left as it was.

### beethoven-5-first (500 s, cap 13): 10 → 13, restored 1, added 2, discarded 23

- Restored: **The first hold returns** (bar 479, about 7:56), from the old bar-aligned “The opening holds return”; voice table bars 479–483 (E♭ held, F–F–F, D) agrees with Mutopia 941.
- Added: **Fate at the door** (t = 150): Schindler’s later claim and the doubts about Schindler (https://en.wikipedia.org/wiki/Symphony_No._5_(Beethoven), opened; EXT); **Horns that could not** (t = 372): why the recapitulation’s call goes to bassoons, Antony Hopkins as quoted there (EXT).
- Discarded: bars 25, 33, 63 (second time), 99 (both times), 165, 339, 410, 447, 491 (cap reached; bars 165 and 491 were checked against the voice table and are accurate); bar 248 (recapitulation start, 19 s before the oboe note); the life cues on 1804–08 and the Heiligenstadt Testament (cap reached; the first moved to the Andante file); bars 1, 59, 63, 1/2, 125, 210, 268, 303, 374 (already in the file).

### beethoven-5-andante (599 s, cap 15): 9 → 12, restored 1, added 2, discarded 13

- Restored: **Four years of work** (t = 300), from “Four years of work”: sketches from 1804, completed 1808, the works written in between (Wikipedia and Eastman; both opened).
- Added: **“Again!”** (t = 195): the concertmaster’s dry call in the Choral Fantasy, from Seyfried’s account as printed at https://en.wikipedia.org/wiki/Beethoven_concert_of_22_December_1808 (opened; the page’s rendering of Seyfried is garbled in places, the gist agrees with Thayer); **A hundred gulden** (t = 540): Esterházy, from Thayer via the same page (EXT).
- Discarded: “A shared premiere concert” (the new notes carry it); the general cues on fanfare, links and the coda; the old form cues (covered by the existing notes).

### beethoven-5-scherzo (336 s, cap 9): 7 → 9, restored 2, added 0, discarded 8

- Restored: **Mozart in the sketchbook** (t = 112), from “The first and third conceived early”, now joined to Lockwood’s link between the Eroica sketchbook and the finale of Mozart’s G minor Symphony (Eastman page, opened; Lockwood pp. 97 and 100). **Twice through, or once** (t = 175), from “The third movement was revised”: the autograph’s repeat, Gülke 1978, Del Mar 1999 (https://en.wikipedia.org/wiki/Symphony_No._5_(Beethoven), opened; EXT). This recording’s sections show the shorter form.
- Discarded: “A scherzo without the name” (Eastman: only “allegro” is given; cap reached); “A question from below”, “The horn rhythm”, “The trio starts low”, “A return without the blast” (covered); “Imitation changes the balance”, “An ending that waits” (general).

### beethoven-5-finale (707 s, cap 18): 9 → 13, restored 1, added 3, discarded 17

- Restored: **One of the most important works** (t = 470), from “Hoffmann reads the whole work”: the 1810 review, revised 1813 for Kreisleriana (Eastman, opened).
- Added: **One hearing is not enough** (t = 205; AMZ, 25 January 1809, via the Wikipedia concert page); **In Lobkowitz’s box** (t = 320; Reichardt’s letter of 25 December 1808, same page); **Fate by the throat** (t = 610; Beethoven to Wegeler, 1801, https://en.wikipedia.org/wiki/Ludwig_van_Beethoven and the Eastman page; the year is Wikipedia’s context, the letter’s exact date not opened).
- Discarded: “Writing beside the Sixth” (covered elsewhere); the general and listening cues; the old form cues (covered).

### beethoven-appassionata-andante (360 s, cap 10): 7 → 9, restored 2, added 0, discarded 9

- Restored: **Never called Appassionata** (t = 50), from “A named dedicatee”: dedication to Count Franz von Brunsvik; the nickname first on Cranz’s four-hand edition of 1838. https://www.beethoven.de/en/work/view/5292968940404736 (opened). **All thirty-two, twice** (t = 265), from “A pianist with singers”, re-pointed at the 1927 and 1933 Berlin cycles and Schnabel’s emigration. https://schnabelmusicfoundation.org/musicians/artur-schnabel/ (opened). Therese Behr and the 1928 Schubert programmes are left out.
- Discarded: “Chords establish the theme”, “Chords after the bass”, “Harmony becomes flowing notes”, “The surface divides again”, “The theme without repeats”, “A chord looking forward” (covered by the bar-aligned notes); “Marie Bigot’s manuscript” (covered by the wet-manuscript note); “Two repeated halves”, “Across the last flourish” (general).

### Unresolved across the batch

- Secondary-only claims (EXT, Wikipedia as the only opened source): Adagio → Affettuoso, Thoene’s reading, Decius’s dates, Mendelssohn’s 1829 cuts, the funeral-music link (Bach Society, opened), Wagner, Kerman, Schubert and Schumann on Op. 131, Schindler and Hopkins on the Fifth, the Gülke and Del Mar editions, Seyfried, Thayer, Reichardt and the AMZ passages from the 1808 concert article, the Lehár link in the Bartók Intermezzo.
- Not opened: the New Yorker 12 March 1949 review; DAHR beyond the Columbia M-6 page; the Public Domain Project HMV DB 2211–2217 page (database error); IMSLP BGA scans beyond the pages named above; Bach’s autograph title page (Affettuoso is read on the 1871 edition).
- Timing: the life, world and recording notes sit between section boundaries and are worded for the stretch; bar-aligned notes (Brandenburg 5 finale, WTC, Beethoven 5/I) take their times from the files’ score.json.

## Batch 2 (Restore2)

Method: old cues fetched from `966bad62`; each candidate checked against the source named in its evidence (programme notes, Mémoires, letters, catalogues opened in this pass). Score claims were checked against open scores where reachable (Mutopia data behind the Hall’s `score.json`; Hansen’s bar-by-bar guides). IMSLP’s Gutmann first edition of Bruckner 7 is behind a JavaScript gate, so Bruckner score-letter claims (letters H, L, N, T, page numbers) were not re-verified and were not restored. `audio-feature` cues skipped entirely; `general` cues skipped (no source). Notes marked “new” were not in the old file: added only to close gaps longer than three minutes, each with a source opened here.

### beethoven-appassionata-finale (9 → 11; restored 1, new 1, discarded 11)
- Restored (corrected): “A name from 1838” — first edition 1807 (Bureau des Arts et d’Industrie, plate 521), nickname first on Cranz’s 1838 four-hand edition. https://www.beethoven.de/en/work/view/ag9iZWV0aG92ZW4tdml1cjNyEQsSBHdvcmsYgICA7NW9swkM/Sonata+for+piano+%26%23040%3BF+minor%26%23041%3B+op.+57?fromArchive=6299845270700032 ; https://www.henle.de/en/Piano-Sonata-no.-23-f-minor-op.-57-Appassionata/HN-58
- New: “A theme on the way to Döbling” — Ries on the finale’s theme (Wegeler and Ries, Biographische Notizen, 1838). https://archive.org/stream/biographischenot00wege/biographischenot00wege_djvu.txt
- Discarded: the other score cues duplicate current score-aligned notes; “The sonata on radio” (a 1934 New Zealand radio listing: no bearing on the music); “Cycles before these records” duplicates the Berlin-cycles note; the rest `listen` or report-based.

### berlioz-fantastique-march (7 → 8; restored 1, discarded 9)
- “Written in one night” — Mémoires ch. 26, “fut écrite en une nuit”, with the three weeks on the Scène aux champs. https://fr.wikisource.org/wiki/M%C3%A9moires_de_Hector_Berlioz/26
- Discarded: premiere (duplicates current), idée fixe note (covered by the clarinet note), “One movement still remains” (cap: 8 notes for 288 s), all audio-feature/listen cues.

### berlioz-fantastique-reveries-passions (9 → 11; restored 1, new 1, discarded 20)
- Restored: “Beethoven comes to Paris” — Mémoires ch. 20 (“Il m’ouvrait un monde nouveau en musique”; Lesueur’s hat). https://fr.wikisource.org/wiki/M%C3%A9moires_de_Hector_Berlioz/20
- New: “The ‘vague des passions’” — programme part I; Austin on Chateaubriand. http://www.hberlioz.com/Scores/fantasf.htm ; http://www.hberlioz.com/Scores/sfantastique.htm
- Discarded: Estelle, Smithson, Habeneck, Herminie (all covered by current notes); the `general`/`listen`/audio cues.

### berlioz-fantastique-sabbat (9 → 11; restored 0, new 2, discarded 17)
- New: “A symphony of Faust” — letter to Ferrand, 2 Feb 1829 (CG 113, Austin’s translation); Walpurgis Night. http://www.hberlioz.com/Scores/sfantastique.htm ; https://fr.wikisource.org/wiki/M%C3%A9moires_de_Hector_Berlioz/26
- New: “Liszt applauds” — Mémoires ch. 31. https://fr.wikisource.org/wiki/M%C3%A9moires_de_Hector_Berlioz/31
- Discarded: all old documented cues (programme change, beloved at the sabbat, bells, Two kinds of recurrence) duplicate current notes or are generic; the rest audio/listen/general.

### berlioz-fantastique-scene-aux-champs (9 → 12; restored 0, new 3, discarded 25)
- New: “An unaccustomed calm” (programme part III, both versions); “Beethoven’s birdsong” (Austin: Pastoral echoes in the same key); “Next, the opium” (1845 programme part IV, replacing the old “The dream changes scene”). http://www.hberlioz.com/Scores/fantasf.htm ; http://www.hberlioz.com/Scores/sfantastique.htm
- Discarded: three-weeks, Gratias, Hiller, programme-silence cues are already current; all audio/listen/general cues. The old “After Beethoven’s countryside” survives corrected as the new Pastoral note.

### brahms-3-poco-allegretto (8 → 10; restored 1, new 1, discarded 9)
- Restored: “Brahms’s Eroica” — première 2 Dec 1883 under Richter; Hanslick on Richter’s “Brahms’s Eroica”; all four movements end quietly. https://www.bso.org/works/brahms-symphony-no-3
- New (score-aligned): “The oboe sings it” at bar 111, checked against Hansen’s guide and the Hall’s score data. http://www.kellydeanhansen.com/opus90.html
- Discarded: “No trumpets or drums” (the orchestra panel shows it; cap), Wiesbaden (current), `general`/audio cues.

### brahms-symphony-1-allegretto (6 → 8; restored 1, new 1, discarded 8)
- Restored: “A symphony for four hands” — Simrock, October 1877, plates 7957/7959. https://brahmsinstitut.de/Archiv/web/bihl_digital/jb_werkekatalog/op_068.html
- New: “Karlsruhe, 4 November 1876” (Dessoff; Brahms’s “long and not exactly amiable”). https://www.bso.org/works/symphony-no-1-in-c-minor
- Discarded: “A pattern for later symphonies” (no concrete claim), Levi (current), audio/general cues.

### brahms-symphony-1-andante-sostenuto (8 → 9; restored 0, new 1, discarded 14)
- New: “A publisher waits” — Simrock’s 22 Feb 1873 letter; Hanslick. https://www.bso.org/works/symphony-no-1-in-c-minor
- Discarded: Clara (covered by the finale-friends note), “A public-domain recording project” (collection provenance, not music), audio/listen cues.

### brahms-symphony-1-finale (10 → 22; restored 5, new 7, discarded 17)
- Restored: “Everything plucked” (bars 6–19); “Every jackass hears it” (Brahms’s reply on the Ninth likeness; Krasting) https://www.berliner-philharmoniker.de/en/programme-notes/johannes-brahms-symphony-no-1-in-c-minor-op-68 ; “The tune is cut into pieces” (bar 94); “The call returns, then the descent” (bars 114–131); “The symphony crosses the Atlantic” (Damrosch 15 Dec 1877, Zerrahn 3 Jan 1878; BSO 10 Dec 1881) https://www.bso.org/works/symphony-no-1-in-c-minor
- New from Hansen’s guide with the Hall’s section anchors: exposition close, plucked strings in the development, development proper, orchestral blast, closing music in C minor, Più allegro, final chords. http://www.kellydeanhansen.com/opus68.html
- Discarded: first-score 1877 note (used in the Allegretto file), Clara birthday (current), audio/general cues.

### bruckner-7-allegro-moderato (10 → 15; restored 0, new 5, discarded 36)
- New (documented): “The first page, September 1881” and “Eroica and Carmen” (Cohrs, Hyperion booklet, https://www.hyperion-records.co.uk/dc.asp?dc=D_LSO0887-D); “Be calm, Bruckner” (SLSO https://slso.org/bruckners-seventh/); “Munich, March 1885” (Cohrs; Hungarian Philharmonic note https://www.filharmonikusok.hu/en/muvek/vii-e-dur-szimfonia/); “A prelude from the Ring?” (Berlin Philharmonic note https://www.berliner-philharmoniker.de/en/programme-notes/anton-bruckner-symphony-no-7-in-e-major/; E pedal from https://en.wikipedia.org/wiki/Symphony_No._7_(Bruckner)).
- Discarded: all old score-letter cues (H, L, N, T …): score not reachable (IMSLP gate); Leipzig/dream (current); audio cues. The old Parsifal-salvation note is merged into “Be calm, Bruckner”; “Wagner’s July 1882” dated by “first season”, not 30 July (Cohrs’s “première on 30 July” is a later performance date).

### bruckner-7-adagio (10 → 20; restored 7, new 3, discarded 30)
- Restored: “A premonition of Wagner’s death” (Mottl; Hungarian note, Konzerthaus https://www.konzerthaus.de/en/magazin/work-of-the-week-bruckner-7/217 , SLSO); “A phrase from the Te Deum” (Munich analysis https://openmusic.academy/docs/bmwvSwGA9xQFLhfL4GJukj/anton-bruckner-sinfonie-nr7-e-dur-wab-107 ); “Tubas made for the Ring”; “The model is Beethoven’s Ninth” (Hungarian, SLSO, Cohrs); “What makes Bruckner Bruckner” (Tintner, via Wikipedia, Naxos 8.501205); “The cymbal crash that may not belong” (Hungarian note, Konzerthaus, Mann via Wikipedia); “Hamburg radio, 1 May 1945” (Engel, https://www.abruckner.com/down/articles/articlesEnglish/engel-friedrich-hitlers-death-as-announced-on-the-/Engel__Hitlers_Death_as_Announced_on_the_Radio.pdf ).
- New: “A funeral march, and for whom?” (Cohrs); “Toward a bright outburst in G” (Hungarian); “The last thirty bars” (Konzerthaus: “in memory of the highly blessed, dearly beloved immortal master”).
- Discarded: all audio/`listen` cues; “A cry in the unwinding” (placement by timing alone); Nowak’s claim that the climax preceded Wagner’s death conflicts with Cohrs’s sketch date and is not used; the 1943 Stalingrad broadcast (only Wikipedia, not opened primary).
- Note: the Hungarian note says the second theme returns “a half-step higher”; F♯→A♭ is a whole tone (the current note is right).

### bruckner-7-scherzo (7 → 10; restored 0, new 3, discarded 12)
- New (Cohrs): “Scherzo first, Adagio later”; “The audience before the fire”; “Flames and a red cock”. https://www.hyperion-records.co.uk/dc.asp?dc=D_LSO0887-D
- Corrected an existing evidence line: Bruckner’s letter on the Ringtheater fire was to Johann Nepomuk Hueber (Cohrs), not “Johann Baptist”.
- Discarded: “An organist still studying”, “St Florian’s daily work”, “Learning from Wagner” (biography unconnected to this movement); Leipzig (current); audio cues.

### bruckner-7-finale (9 → 15; restored 3, new 3, discarded 22)
- Restored: “No Wagner tubas at first” (Cohrs); “Wolf and Levi are baffled”, “The most important since 1827” (Hungarian note); “A finale like Haydn’s?” (Tintner via Wikipedia; timings from Hungarian note). 
- New: “A toccata in the dotted rhythm” (Cohrs); “Keys a major third apart” (Munich analysis, restored from the old documented cue).
- Discarded: “Two faces of one theme” (covered by the opening and last notes), Nikisch (current), all letter/page cues.

### chopin-ballade-3 (8 → 10; restored 1, new 1, discarded 11)
- Restored (corrected): “Mickiewicz’s water nymph?” — Schumann’s 1841 report concerned the Second Ballade; the Third’s Świtezianka link is traditional (Zakrzewska, Polish Music Journal 2, 1999). https://polishmusic.usc.edu/research/publications/polish-music-journal/vol2/mickiewicz-and-chopin/ ; https://en.wikipedia.org/wiki/Ballade_No._3_(Chopin)
- New: “A letter to Fontana” (18 Oct 1841; Breitkopf Jan 1842). Same Wikipedia page.
- Discarded: dedication/Nohant (current); the NIFC work pages are JavaScript-rendered and could not be opened, so cues resting only on them were not restored.

### chopin-ballade-4 (9 → 11; restored 1, new 1, discarded 20)
- Restored (corrected): “The Three Budrys?” — Cortot’s claim in the Salabert foreword, reported at https://en.wikipedia.org/wiki/Ballade_No._4_(Chopin) (foreword not opened).
- New (score-aligned): “Ornaments in the high register” at bar 152 (Samson’s fourth variation; Hall score data shows the melody reaching F7). 
- Discarded: Ogdon’s “experience of a lifetime” (only a chopinmusic.net quotation); A-major return and second theme (covered); all general/audio cues.

### chopin-etude-op10-5 (3 → 3; restored 0, discarded 6)
- No room (cap 3 for 111 s). Candidates lost to the cap: Liszt dedication, 1833 collection, Chopin on Clara Wieck’s choice (the last is used in the Cortot file).

### chopin-etude-op10-5-cortot (3 → 5; restored 2)
- “Chopin on Clara Wieck’s choice” — Chopin to Fontana, Marseille, 25 April 1839. https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin) (primary letter not opened). “Two dedications” (Liszt, d’Agoult). https://en.wikipedia.org/wiki/Études_(Chopin)
- Discarded: “One side, two études” (DAHR returned 403; date and venue not re-verified, the 1920 / Victor 64989 details are in Internet Archive metadata only); rubato cue (it concerns Cortot’s 1942–43 recordings).

### chopin-etude-op25-5 (5 → 6; restored 1)
- “Marie d’Agoult’s études” — Wikipedia, Études. https://en.wikipedia.org/wiki/Études_(Chopin)
- Discarded: three publishing houses and the 1837 collection (NIFC not openable), audio/listen cues.

### chopin-nocturne-op15-2 (5 → 6; restored 1)
- “For Ferdinand Hiller” — Op. 15 published January 1834; Hiller in Paris 1828–36, friend of Chopin and Berlioz. https://en.wikipedia.org/wiki/Nocturnes,_Op._15_(Chopin) ; https://en.wikipedia.org/wiki/Ferdinand_Hiller
- Discarded: “German first edition” (cap), audio/listen cues.

### Not done (unresolved)
- chopin-nocturne-op15-2-paderewski (cap leaves 1 slot), chopin-prelude-op28-15 (2 slots): not attempted in this run. chopin-nocturne-op15-2-dalbert has no room (5/5 under the cap).
- Claims resting only on NIFC work pages were skipped (pages are JavaScript-rendered). The Gutmann Bruckner score and the Salabert Cortot foreword were not opened.

## Batch 6 (Restore6)

Sources opened for this batch: Mahler catalogue (Paul Banks) KtL.htm and KtLprints.htm; Reinhold Kubik’s Universal Edition introductions to Kindertotenlieder and to Ich bin der Welt (autumn 2008); Mahler Foundation introduction; Kahnt full score (Sibley scan, pp. 3 and 86 viewed); Naxos 8.111300 rear cover; Interlude (Alma’s memoir passage); Wikipedia Kindertotenlieder; Houston Symphony (Dotsey); Indianapolis Symphony (Tobias); BSO (Ledbetter); Old Manuscripts & Incunabula facsimile description; SCO Joachim page; Mendelssohn full score (IMSLP24558, pp. 4–8, 12–13, 17–18, 26–36 viewed); LSO discography session 0158; Bolig HMV discography pp. 505–506; Internet Archive item Mozart.PianoConcertoNo.21; NMA Requiem foreword; Wikipedia pages for Musopen, Minuet, Trio (music), Piano Concerto No. 21.
Not opened: the Breitkopf K. 550 full score (IMSLP #492601 sits behind a Cloudflare challenge, no direct file URL), Alma Mahler’s memoir itself, Andreas Dorschel’s *Musikfreunde* article, Hefling (2009), Keefe (2005), Kerman (1999), Steinberg (1998), Reik (1953), Salzburg Festival catalogue (2022), Rückert’s original text of *Wenn dein Mütterlein*. Claims resting on these are written as “as quoted in …” in the evidence.
Timing: no `score.json` exists for these ids, so every note is `passage`; times keep old values only where the old event is score-established, otherwise sit at section boundaries or in quiet stretches. Author-side analysis was used only to place the Mendelssohn Allegro climax (p. 13, t = 330) and the Third-Symphony cello allusion (last five bars of song 5, t = 370 / 335).

### mahler-kindertotenlieder-in-diesem-wetter (6 → 10; +4)
- Restored: “A wider orchestra for the storm” (old “The orchestra grows wider”; piccolo, contrabassoon, horns 3–4 in no. 5 only) https://www.mahlercat.org.uk/Pages/KtL/KtL.htm ; “What Mahler told Guido Adler” (old “The chronology matters”, now with the Adler letter) https://mahlerfoundation.org/mahler/compositions/kindertotenlieder/kindertotenlieder-introduction/ , https://en.wikipedia.org/wiki/Kindertotenlieder .
- New, sourced: “A march from the Third Symphony” https://www.universaledition.com/en/Kindertotenlieder/P0045027 ; “A cello melody from the Third” (mm. 129–133, Dorschel via Mahler Foundation and Wikipedia; the cello’s pp morendo phrase is on printed p. 86 of the score).
- Discarded: “One inseparable cycle” (moved to the song 1 files, because the footnote is printed on the first page of song 1, p. 3; already present in the Anderson song 5 file); listen/audio-feature cues; “Weather in the poem”, lullaby and postlude cues (already covered by current notes).
### mahler-kindertotenlieder-in-diesem-wetter-anderson (6 → 10; +4)
- Same four notes as above, placed at t = 30, 105, 235, 335 (the existing t = 315 “Five songs, no applause” keeps its place). Discarded: same as above.
### mahler-kindertotenlieder-nun-seh-ich-wohl (5 → 7; +2)
- Restored: “A publisher at the hotel door” (old “Published after the premiere”; Mahler to Alma, Leipzig, 28 Nov 1904, Kahnt first editions Aug 1905) https://www.mahlercat.org.uk/Pages/KtL/KtL.htm ; “Berlin, June 1955” (old “A recording, not a premiere”; session 20–21 June 1955, Jesus-Christus-Kirche) https://cdn.naxos.com/SharedFiles/pdf/rear/8.111300r.pdf .
- Discarded: Kubik’s remark that the three-note upbeat “Nun seh’ ich” and the harp recall the Adagietto (no timing anchor); listen/audio cues.
### mahler-kindertotenlieder-nun-seh-ich-wohl-anderson (5 → 6; +1)
- Restored: “A publisher at the hotel door” (as above). Discarded: “A recording, not a premiere” (Commons gives only “1950”; DAHR, Wikipedia and RCA sleeve scans gave no session date or venue); cap reached.
### mahler-kindertotenlieder-nun-will-die-sonn (5 → 8; +3)
- Restored: “Rückert’s two children” (old “A father’s poems”; Luise 31 Dec 1833, Ernst 16 Jan 1834) https://www.universaledition.com/en/Kindertotenlieder/P0045027 , https://mahlerfoundation.org/mahler/compositions/kindertotenlieder/kindertotenlieder-introduction/ ; “One cycle, not five numbers” (score p. 3 footnote viewed; also on the 1905 vocal-score title page) https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425 , https://www.mahlercat.org.uk/Pages/KtL/KtLprints.htm ; “A sold-out Musikverein” (old “A baritone at the premiere”; sold out by 24 Jan, repeat 3 Feb 1905) https://www.mahlercat.org.uk/Pages/KtL/KtL.htm .
- Discarded: “Two composing summers” (cap; scholars disagree on which songs, only “three in 1901, two in 1904” is certain); “The middle grows outward” (score pp. 10–14 not re-opened); listen/audio cues.
### mahler-kindertotenlieder-nun-will-die-sonn-anderson (5 → 7; +2)
- Restored: “Rückert’s two children”; “One cycle, not five numbers” (sources as above). Discarded: premiere note and “Two composing summers” (cap 7/7); listen/audio cues.
### mahler-kindertotenlieder-oft-denk-ich (4 → 5; +1) and -anderson (4 → 5; +1)
- Restored: “The one song printed alone” (old “A song published separately”; 10 May 1905, *Neue Zeitschrift für Musik* 72/20 supplement, published by Kahnt) https://www.mahlercat.org.uk/Pages/KtL/KtLprints.htm .
- Discarded: “Before Mahler’s own loss” (cap; the Adler-letter note sits in the song 5 files); “A small verbal change” and the stanza cues (covered); listen/audio cues.
### mahler-kindertotenlieder-wenn-dein-muetterlein (4 → 7; +3) and -anderson (4 → 7; +3)
- Restored: “A chamber orchestra in a small hall” (old “Music for smaller halls”; Kleiner Musikvereinssaal, Stephaniesaal; strings probably ≤ 10, 8, 6, 6, 4) https://www.mahlercat.org.uk/Pages/KtL/KtL.htm .
- New, sourced: “A nursery tune for a lost child” https://www.universaledition.com/en/Kindertotenlieder/P0045027 ; “‘Don’t tempt Providence’” (Alma’s memoir as quoted by Interlude; timing from Hefling via Wikipedia) https://interlude.hk/mahler-kindertotenlieder-premiered-today-1905/ .
- Discarded: “Mahler reshapes Rückert’s poem” (Woltjer says the stanzas are reversed and cut; Kubik says Mahler altered the poems only slightly; Rückert’s original not opened); listen/audio cues; the remaining score cues are covered by current notes.
### mahler-ruckert-ich-bin-der-welt (8 → 10; +2)
- Restored: “Time flees” (old “Time flees”; Kubik’s ‘fuga’ between voice and bass at “mit der ich sonst viele Zeit verdorben”) https://www.universaledition.com/en/Works/Ich-bin-der-Welt-abhanden-gekommen/P0086596 .
- New, sourced: “A manuscript for Guido Adler” (same Kubik essay: gift on Adler’s 50th birthday in 1905, title-page dedication, later fate under the Nazis).
- Discarded (cap 10/10): “A tune returns in the Adagietto” and “A song for a small hall” (both verified in Kubik; the latter cannot say which singer took which song), “Mahler edits Rückert” (LiederNet text not opened), the audio-feature cues (288, 344), and the old score cues already covered.
### mendelssohn-violin-concerto-allegro (10 → 18; +8)
- Restored: “The orchestra takes the tune” (old audio-feature cue at 63, rewritten from score pp. 4–5, solo staff resting) https://s9.imslp.org/files/imglnks/usimg/a/af/IMSLP24558-PMLP04931-Mendelssohn_Violin_Concerto_Op.64.pdf ; “Chromatic waves, then calm” (old “A restless transition”; pp. 6–8; Steinberg via Wikipedia) ; “‘With fire’: the Kraków autograph” (old “A manuscript found in 1989”) https://www.omifacsimiles.com/brochures/mendel_vc.html , https://en.wikipedia.org/wiki/Violin_Concerto_(Mendelssohn) ; “Fortissimo with trills” (old audio-feature “development’s peak”, rewritten from p. 13) ; “The cadenza quickens” (old Wikipedia cue; p. 17 viewed: quavers, scale, trills, triplets, semiquaver arpeggios to pp) ; “Joachim’s toast” (old “The heart’s jewel”) https://www.sco.org.uk/news/joseph-joachim .
- New, sourced: “‘I am just groping around’” (Mendelssohn to David, three months before the première) https://www.omifacsimiles.com/brochures/mendel_vc.html ; “A model for later concertos” (moved from the finale; Legacy section, Keefe/Kerman) https://en.wikipedia.org/wiki/Violin_Concerto_(Mendelssohn) .
- Discarded: all audio-feature and listen cues; “Two themes in one” (covered by current t = 272); “The transition recalled” (end-of-movement variant not checked in the score); autograph/première cues (covered by t = 170, 420).
### mendelssohn-violin-concerto-andante (7 → 11; +4)
- Restored: “A song without words” (old “A song without words”) https://en.wikipedia.org/wiki/Violin_Concerto_(Mendelssohn) (Cambridge volume cited there, not opened).
- New, sourced: “No pauses between movements” https://www.bso.org/works/mendelssohn-violin-concerto ; “David wants a showpiece” https://www.omifacsimiles.com/brochures/mendel_vc.html (a facsimile publisher’s summary of Drees’s commentary; weaker than the others); “The middle section drives upward” (score pp. 30–33; fortissimo chords and sforzandi seen, exact bar not aligned).
- Discarded: “A friend as concertmaster”, “The orchestra opens the middle section”, “The first long-playing record” (covered by current t = 200, 228, 420); all audio-feature cues.
### mendelssohn-violin-concerto-finale (8 → 9; +1)
- New, sourced: “Fairy music” (Ledbetter) https://www.bso.org/works/mendelssohn-violin-concerto .
- Discarded: “An instant success” (only Wikipedia citing a miniature score), “A model for later concertos” (moved to the Allegro file, where the cadenza is), “The first movement’s melody, again” (Wilson via Wikipedia, not opened); audio-feature cues.
### mozart-40-andante (6 → 8; +2)
- Restored: “Three symphonies in six weeks” (old “Three symphonies in weeks”) https://www.indianapolissymphony.org/backstage/program-notes/mozart-symphony-no-40/ ; “Musopen’s Kickstarter” (old “A public-domain project”; Kickstarter 2010, $68,359) https://en.wikipedia.org/wiki/Musopen , Commons file page (category Musopen Kickstarter Project).
- Discarded: all score cues (“The quiet surface breaks”, “Chromatic pressure”, “Force followed by space”): Breitkopf score not opened; “Letters asking for help” (covered by current t = 140); listen cues.
### mozart-40-menuetto (5 → 7; +2)
- Restored: “Why the Trio is called a Trio” https://en.wikipedia.org/wiki/Minuet , https://en.wikipedia.org/wiki/Trio_(music) .
- New, sourced: “Was it ever performed?” (Tobias). Discarded: “Colour in small groups” (score not opened), “A summer catalogue” and the da capo cues (covered).
### mozart-40-finale (6 → 8; +2)
- New, sourced: “‘Shockingly voluptuous’” (Rosen via Tobias); “The most discussed symphony” (Zaslaw, Jahn via Tobias) https://www.indianapolissymphony.org/backstage/program-notes/mozart-symphony-no-40/ .
- Discarded: “No final commission known” (the cited note says nothing about an occasion), “The source leaves a gap” (provenance gap, no content), “Running figures carry weight” (score not opened), listen cues.
### mozart-467-allegro-maestoso (10 → 12; +2)
- Restored: “Studio 1, 12 January 1937” (old “Abbey Road, January 1937”; LSO session 0158, producer Lawrance Collingwood, K. 459 begun 9 January) https://londonso-assets.s3.amazonaws.com/uploads/2024/08/Discography-August-2024.pdf#page=289 ; “Four discs for one concerto” (old “Four discs in 1937”; Bolig: DB 3099–3102, cadenza on side 4) https://www.examenapium.it/cs/biblio/Bolig2020.pdf#page=530 .
- Discarded: “From shellac to LP” (moved to the Andante file), “The later theme at home” (score not re-opened), listen/audio cues.
### mozart-467-andante (7 → 9; +2)
- Restored: “The Elvira Madigan concerto” (old “A later film association”) https://en.wikipedia.org/wiki/Piano_Concerto_No._21_(Mozart) ; “From shellac to LP” (old “A preserved mono performance”) https://archive.org/details/Mozart.PianoConcertoNo.21 , LSO discography above.
- Discarded: “A concerto for Mozart” (covered by the Allegro file), score cues (covered), listen/audio cues.
### mozart-467-finale (8 → 9; +1)
- Restored: “Two sides, one movement” (old, same title; DB 3102, matrices 2EA 4610–4611) https://www.examenapium.it/cs/biblio/Bolig2020.pdf#page=530 .
- Discarded: “A Bechstein in the studio” (already in the Andante file), “A concentrated concerto period” (already current t = 105), listen/audio cues.
### mozart-clarinet-allegro (8 → 12; +4)
- Restored: “The lost autograph” (old “A lost autograph”, now with the pawning rumour and the octave-transposed first edition) https://houstonsymphony.org/swan-song-mozarts-clarinet-concerto/ .
- New, sourced: “First, a basset horn”; “A friend who never paid”; “Prague, October 1791” (all Dotsey, same URL).
- Discarded: “A busy final autumn” (*Magic Flute* and *Tito* are not in the cited note), “The player builds the instrument” and “A university performance” (covered by current t = 455), score and listen cues.
### mozart-requiem-communio (7 → 9; +2)
- Restored: “Constanze’s version” (old “What Süssmayr actually says”; Constanze to Breitkopf & Härtel, 27 March 1799, BD IV no. 1240) https://dme.mozarteum.at/DME/objs/pdf/nma_14_-23_-3_eng.pdf .
- New, sourced: “Brahms on Süssmayr” (same NMA foreword, quoting the Alte Mozart-Ausgabe critical report).
- Discarded: “Performance, issue and upload are different dates” (Salzburg Festival catalogue not opened, low value), “A Salzburg concert in Mozart’s bicentenary” (covered by t = 250), listen/audio cues.

### Not done (unresolved)
- Mozart K. 550 score notes (bars 25–36, 58–65, closing pages) could not be re-verified; they were left out rather than restored.
- The Anderson/Monteux 1950 session (date, venue) remains unknown; no recording-session note was written for the Anderson files.
- The Mendelssohn Allegro note at t = 330 (p. 13 climax) is placed with the help of author-side analysis; the page-to-time match is approximate.

## Batch 5 (Restore5) — Mahler: Second, Fourth, Fifth, Ninth, Das Lied von der Erde

Totals: 22 files, 161 notes added (the per-file entries below say which notes rebuild old documented or score-checked cues and which are new). Every file validates `ok`. No `score.json` exists for Mahler, so every timed note is `score-proportion/passage`, or `documented/passage` for life and world notes. Most old Mahler cues were `listen`, `general` or `audio-feature` and are not listed individually below. The audio analysis was used only to find where loud and quiet stretches fall. Main sources, opened for this batch: the Mahler Foundation pages and Lew Smoley’s listening guides (https://mahlerfoundation.org/mahler/listening-guide/), Bettie Jo Basinger’s Utah Symphony guides (https://usuo.org/explore/2014/11/mahler-2-listening-guide, …/2015/05/mahler-4-listening-guide/, …/2015/10/mahler-5-listening-guide/), Universal Edition notes by Reinhold Kubik and Stephen Hefling, Paul Banks’s Mahler catalogue (https://www.mahlercat.org.uk/), Erik Ryding’s Library of Congress essay on the 1938 Ninth, Wikipedia, and the IMSLP scores (Second, Fourth, Ninth), which I downloaded and viewed page by page for the markings quoted.

### mahler-2-im-tempo-des-scherzos (10 → 34)
Restored: “Written in three weeks, signed in December” (old “The completed autograph”; https://mahlerfoundation.org/mahler/compositions/symphony-no-2/symphony-no-2-introduction/ and …/symphony-no-2-history/); “Berlin, 13 December 1895” (same pages); “A MiniDisc in Wheaton” (old “This performance’s documented place”; https://archive.org/details/dupageso-2004-05-22); “Mahler goes hunting for bells” (old “Finding the final bells”; https://mahlerfoundation.org/mahler/locations/germany/berlin/city-of-berlin//bell-foundry-collier/); “Mahler alters Klopstock” and “The lord of the harvest” (old Klopstock cues; https://www.mahlercat.org.uk/Pages/Symph2/Texts.htm). Added from Smoley’s finale guide and Basinger: Dies irae chorale, brass chorale in D♭, the march, bells and raised horns, the offstage band, the graves bursting open (Mahler’s programme), the nightingale, the soprano, the men’s chorus, the duet, Mahler on the climax, the closing trumpets.
Discarded: “A funeral supplies the text” (existing note); “The home reached is different” (key scheme covered by existing notes); all `audio-feature` and unsourced `general` cues.

### mahler-2-in-ruhig-fliessender-bewegung (8 → 16)
Restored: “The song without its singer” (old “Words withheld from the symphony”; Smoley, https://mahlerfoundation.org/mahler/listening-guide/listening-guide-movement-3-in-ruhig-fliessender-bewegung/). Added: E♭ clarinet marked mit Humor (score p. 82 viewed), the trio, the chamber trio, the battle cry turned lullaby, the return and the cry, peace after the cry (p. 122 viewed), “The fish dive”. Discarded: “A sermon for the fish” and “Song and symphony together” (existing); `listen` and `audio-feature` cues.

### mahler-2-urlicht (6 → 8)
Restored: “A folk poem from 1808” (https://www.mahlercat.org.uk/Pages/Symph2/Texts.htm; vol. II p. 11, headed Mündlich). Added: “The seed of the finale” (https://mahlerfoundation.org/mahler/compositions/symphony-no-2/symphony-no-2-movement-4-lied-1-urlicht-sehr-feierlich-aber-schlicht/). Discarded: “Refusing the angel” (existing 204 s note); `listen` and `audio-feature` cues.

### mahler-4-ruhevoll (9 → 23)
Restored (markings checked on printed pp. 307–327 of IMSLP70999): “The same steps, again and again”, “A smile on a tomb”, “His mother’s face”, “Ten days at Aussee”, “Cheerfulness with something eerie”, “Links to the finale”, “Booed in Munich”, “The tragic climax”, “Sinking into silence”, “Faster, in steps”, “Racing, then a sudden halt”, “Slow again, and hushed”, “Flowing, then pressing”, “Bells up”. Sources: https://mahlerfoundation.org/mahler/compositions/symphony-no-4/symphony-no-4-introduction/ ; https://usuo.org/explore/2015/05/mahler-4-listening-guide/ ; https://mahlerfoundation.org/mahler/locations/germany/munich/1901-concert-munich-25-11-1901/. Discarded: “St Ursula laughs too”, “The violins sing the lament”, “Slightly more animated” (existing notes); “A breath before the blaze” (18 s from the E-major note); `audio-feature` cues.

### mahler-4-himmlische-leben (9 → 13, at the cap)
Restored: “Mahler at the Welte-Mignon” (https://mahlerfoundation.org/mahler/compositions/symphony-no-4/symphony-no-4-history/); “The saint who smiled in the Adagio” (score p. 351 viewed); “Bleating and bellowing”, “Angels who dance and hop” (Basinger). Discarded: “A warning to the conductor” (already in the opening note), “A violin-filled sky”, “A symphony that ends elsewhere” (cap); the later score cues duplicate existing notes.

### mahler-4-scherzo (7 → 11)
Restored: “A leaf for Arnold Rosé” (https://mahlerfoundation.org/mahler/compositions/symphony-no-4/symphony-no-4-movement-2-in-gemachlicher-bewegung/), “Böcklin’s fiddling skeleton” (Basinger), “An afterthought for the basses” (http://www.mahlercat.org.uk/Pages/Symph4/Symph4prints.htm), “The trio dies away” (score p. 283 viewed). Discarded: “Walter’s title for it” (existing 26 s note); “A dry accompaniment”, “More leisurely still” (no timed event / too close to an existing note); `audio-feature` cues.

### mahler-5-trauermarsch (7 → 14)
Restored: “Within an hour of death” (old “Illness is not a programme”; https://usuo.org/explore/2015/10/mahler-5-listening-guide/, https://en.wikipedia.org/wiki/Symphony_No._5_(Mahler)); “Cologne, 18 October 1904” (https://mahlerfoundation.org/mahler/compositions/symphony-no-5/symphony-no-5-history/). Added: “A military signal”, “The drummer boy’s tune”, “Hope rises in the horns”, “A quotation from Kindertotenlieder” (Smoley, Basinger and https://www.aspenmusicfestival.com/program_notes/view/mahler-symphony-no.-5-in-c-sharp-minor agree), “The climax: klagend”. Discarded: “A trumpet before the march”, “Summer work at Maiernigg”, “Heavy need not mean loud” (existing notes); `listen`/`audio-feature` cues.

### mahler-5-sturmisch-bewegt (7 → 17)
Restored: “Published, then revised” (https://mahlerfoundation.org/mahler/compositions/symphony-no-5/symphony-no-5-history/). Added nine notes from Smoley’s guide (https://mahlerfoundation.org/mahler/listening-guide/listening-guide-movement-2-sturmisch-bewegt-mit-groster-vehemenz/) and Basinger, from the three-attempt violin theme to the storm joining the climb. Discarded: “A symphony without a text” (on the composer page); “The preceding march remembered”, “Two summers” (existing); `listen` cues.

### mahler-5-scherzo (8 → 21)
Restored: “Fifty years too early” (Mahler to Alma during the Cologne rehearsals; https://peoriasymphony.org/digging-deeper-into-mahlers-fifth/). Added: “A man in the full light of day” and “Themes side by side” (Bauer-Lechner via the Aspen note), and eleven music notes from Smoley (https://mahlerfoundation.org/mahler/listening-guide/listening-guide-movement-3-scherzo-kraftig-nicht-zu-schnell/). Discarded: “One movement makes a whole part”, “A familiar genre enlarged” (generic); the Kindertotenlieder-in-the-scherzo claim (Smoley only, not corroborated); `listen` cues.

### mahler-5-adagietto (7 → 13)
Restored: “Seven minutes or ten” (old “Slow is an instruction”; https://mahlerfoundation.org/mahler/compositions/symphony-no-5/symphony-no-5-movement-4-adagietto-sehr-langsam/), “A harp for a continuo” (old “Fourth of five movements”). Added: “A poem with the music” (Alma’s letter to Mengelberg, as reported by the Foundation), “The day is beautiful”, “The finale’s second tune is born”, “The song behind the ending” (Kubik, https://www.universaledition.com/en/Works/Ich-bin-der-Welt-abhanden-gekommen/P0086596). Discarded: “A letter without words?”, “A second public life” (existing); the Tristan motive (one source).

### mahler-5-adagietto-mengelberg-1926 (7 → 9)
Restored: “Both sides of one disc” (old “Two sides already joined”; https://archive.org/details/willem-mengelberg-cgo-col-l-1798-wax-1548-9-1926). Added: “Seven minutes”. Discarded: “A disc in circulation” — the Papers Past page (Wanganui Chronicle, 3 March 1928) returned no text, so it was not opened and is not cited.

### mahler-5-rondo-finale (8 → 17)
Restored: “Mahler plays the funeral march” (old “A piano roll, not this orchestra”; the Foundation history page above). Added: “The donkey judges the singers” (Lob des hohen Verstandes; Basinger, Smoley) and eight notes from Smoley (https://mahlerfoundation.org/mahler/listening-guide/listening-guide-movement-5-rondo-finale-allegro-allegro-giocoso-frisch/). Discarded: “The Fifth’s second summer”, “Counterpoint is not a Bach quotation” (existing); “The work’s first public performance” (in the Trauermarsch file; the source tail after 865 s is not music).

### mahler-9-andante-comodo (10 → 24)
Restored/rebuilt: “Whose heartbeat?” (old “No literal heartbeat established”), ““Mit Wut”” (score p. 23 viewed), “A falling second, and Les Adieux”, “A waltz for lost youth” and ““O days of youth!”” (Kubik’s note, https://www.universaledition.com/en/Mahler-Symphony-No.-9-Original-draft-of-1st-3-Movements.-Facsimile-of-Composers-Manuscript-D-major-for-orchestra/P0005537), “A presentiment of death” (Berg). Added from Smoley and Wikipedia: “A phrase from Das Lied”, “A chord that settles nothing”, “Trumpets stand fast”, “The fighters freeze”, “One cry from the whole orchestra”, “Like a funeral procession”, “Chamber music in limbo”, “Birdcalls”. Discarded: “A summer’s draft” and “Toblach and New York” (Mahler-Online returned HTTP 502; not opened); “The producer’s practical reason”, “A later historical witness” (covered by existing 1938 notes).

### mahler-9-adagio (9 → 16)
Restored: ““Welt! Lebe wohl!”” (last-page inscriptions and the 2 September 1909 sign-off; https://mahlerfoundation.org/mahler/compositions/symphony-no-9/symphony-no-9-movement-4-adagio-sehr-langsam-und-noch-zuruckhaltend/). Added: “A hymn tune, and heaven”, “The mocking tune becomes a prayer”, “Mahler’s music in slow motion” (Kubik), “Three kinds of death” (Bernstein), “Der Abschied in the English horn”, ““The day is fine”, one last time”. Discarded: “Walter questioned the reissue” (the existing note cites Walter’s book instead); “Mozart shared the concert” (International Gustav Mahler Society page not opened); “A documented style of connection” (Pristine page not opened).

### mahler-9-landler (8 → 14)
Restored (https://www.loc.gov/static/programs/national-recording-preservation-board/documents/MahlerSymphonyNo9.pdf, read locally): “A trial in rehearsal” (old “Five rehearsals for the microphones”), ““The dance is over”” (old “Walter’s account is an interpretation”), “Seventy minutes”. Added from Smoley: “A fish sermon in the horns”, “A distorted tune, a boisterous waltz”, “The fiddler of the Fourth”. Discarded: “A summer’s draft” (Mahler-Online not opened); “A festival of ninths” (existing note).

### mahler-9-rondo-burleske (7 → 13)
Restored: “Counterpoint, in Walter’s words” (old “Virtuosity beyond the soloist”), “A bewildered refugee in Paris”, “To my brothers in Apollo” (UE note). Added: “The Fifth’s trumpet rhythm”, “A muted trumpet calls the tune back”, “The Adagio tune never returns”. Discarded: “A ten-disc symphony” (Pristine page not opened); “A performance before exile” (existing note).

### mahler-das-lied-abschied (10 → 22; 12 added: 9 rebuilt from old cues, 3 new)
Restored (old note → current title, source): “Not written in 1907” (Alma’s claim against Roller’s report and the dated manuscripts; Hefling’s Universal Edition introduction, https://www.universaledition.com/en/Works/Das-Lied-von-der-Erde/P0109538); “A silver boat on the sky-lake”, “Mahler edits Bethge” and “Wang Wei: ask no more” (Mahler Archives, http://www.mahlerarchives.net/Archive%20documents/DLvDE/Der_Abschied.htm); “How slow is the march?” (old “Fast march or slow?”, rewritten from Utz’s survey of recordings, https://musau.org/parts/neue-article-page/view/37); “A voice from the hall” (old note at 1170 s, now 1200 s; https://archive.org/details/06-das-lied-von-der-erde-mahler-concertgebouw-amsterdam-carl-schuricht-5.-x.-193); “The line Mahler left out” (Foundation Lied 6 page, Wikipedia, Hefling); “He never heard it” (old note at 1645 s, now 1580 s; Wikipedia, Foundation history page, Hefling); “Soft, softer, pianississimo” (old “Mengelberg: soft, softer, pianississimo”, moved from 555 s; https://mahlerfoundation.org/mahler/compositions/das-lied-von-der-erde/das-lied-von-der-erde-history/).
New: ““For the first time”” (Vienna, 30 December 1917, Rosé’s remark to Urlus; Foundation history page); “How to conduct that?” (Walter’s account and Ohne Rücksicht auf das Tempo; https://mahlerfoundation.org/mahler/compositions/das-lied-von-der-erde/das-lied-von-der-erde-lied-6-der-abschied/ and https://en.wikipedia.org/wiki/Das_Lied_von_der_Erde); “Mahler’s fear of the finale” (same two sources).
Discarded: “The longest farewell” (generic), “Oboe over tam-tam”, “The lute: mandolin and harp” and “Pauses held long” (score details I could not verify); “Do not cover the flute” and “Two poems, two poets” (existing 305 s and 58 s notes); the remaining `listen`, `audio-feature` and unsourced `music` cues.

### mahler-das-lied-einsame (10 → 12; 2 added: 1 rebuilt from an old cue, 1 new)
Restored: “The première, and a baritone” (old “Premiere and the baritone option”; Walter, Munich, 20 November 1911, Cahier and Miller; Mahler’s note at the alto’s entry): https://en.wikipedia.org/wiki/Das_Lied_von_der_Erde ; https://mahlerfoundation.org/mahler/compositions/das-lied-von-der-erde/das-lied-von-der-erde-history/
New: “A heart that tires” (July 1907 diagnosis of a valvular defect and its link to the endocarditis of 1911; the song was composed in July 1908): Hefling, https://www.universaledition.com/en/Works/Das-Lied-von-der-Erde/P0109538 ; Foundation history page.
Discarded: “A weaver’s poem becomes autumn” and “The first song of the cycle” (the existing 30 s and 160 s notes cover them); the `music` and `listen` cues without a source.

### mahler-das-lied-jugend (4 → 6, at the cap; 2 new)
New: “A pavilion that never stood” (Li Bai’s “Banquet at Tao’s Family Pavilion”, the double-meaning character, Gautier’s mistranslation kept by Bethge and Mahler): http://www.mahlerarchives.net/Archive%20documents/DLvDE/Der_Jugend.htm ; “Toblach, summer 1908” (doctors’ restrictions, 83 paraphrases of 38 poets, seven chosen, letter to Walter of early September): Hefling, https://www.universaledition.com/en/Works/Das-Lied-von-der-Erde/P0109538
Discarded: “Winds before voices” and “The tenor and the pavilion” (the existing opening note covers them); the `listen` and `audio-feature` cues.

### mahler-das-lied-schoenheit (7 → 10; 3 added: 1 rebuilt from an old cue, 2 new)
Restored: “Mahler adds a cry” (old “Mahler edits the poem”; the mane and nostril lines are Mahler’s own, Lüge → Verstellung): http://www.mahlerarchives.net/Archive%20documents/DLvDE/Der_Schonheit.htm
New: “A lotus song, filtered twice” (Li Bai’s “Lotus-plucking Song”, Ruoye Brook near Shaoxing, d’Hervey, Bethge, Mahler): same Mahler Archives page; “A conductor who stayed with Mahler” (Schuricht: Danzig 1880, the Sixth’s première, Wiesbaden festival of April 1921, ban of 1933–45; concert of 5 October 1939): https://en.wikipedia.org/wiki/Carl_Schuricht ; https://archive.org/details/06-das-lied-von-der-erde-mahler-concertgebouw-amsterdam-carl-schuricht-5.-x.-193
Discarded: “The singer: Kerstin Thorborg” (the existing 215 s note names her; the Schuricht note replaces performer facts); “Comodo, dolcissimo” and “Girls with lotus flowers” (the existing opening note covers them).

### mahler-das-lied-trinklied (10 → 14, at the cap; 4 added: 1 rebuilt from an old cue, 3 new)
Restored: “Li Bai’s sorrowful song” (old “Li Bai’s song of sorrow”; “Tale of Sorrowful Song”, Bethge’s “Schon winkt der Wein” and refrain): http://www.mahlerarchives.net/Archive%20documents/DLvDE/Das_Trinklied.htm
New: “Three blows of 1907” (resignation, Metropolitan contract of 21 June, Maria’s death, the heart defect): Hefling, https://www.universaledition.com/en/Works/Das-Lied-von-der-Erde/P0109538 ; “Cylinders of Chinese music” (Hammerschlag, August 1908): Foundation history page; ““Du aber, Mensch”” (bar 298–299 per Utz, https://musau.org/parts/neue-article-page/view/37 ; the quotation in the Ninth’s first movement per Smoley, https://mahlerfoundation.org/mahler/listening-guide/listening-guide-movement-1-andante-comodo/). No “leidenschaftlich” marking is claimed; it was not verified.
Discarded: “A tenor against the full orchestra” (its Adorno “denatured voice” remark was not verified in a source I opened; the tenor’s high entry is already in the opening note); “The host’s cellar” and “Harps and the lute” (existing notes cover them); `listen` and `audio-feature` cues.

### mahler-das-lied-trunkene (6 → 8, at the cap; 2 new)
New: “Li Bai wakes from drink” (“Feelings upon Awakening from Drunkenness on a Spring Day”; d’Hervey’s “Un jour de printemps”, Heilmann, Bethge): http://www.mahlerarchives.net/Archive%20documents/DLvDE/Der_Trunkene.htm ; “Face to face with nothing” (letter of 18 July 1908 to Walter): Hefling, https://www.universaledition.com/en/Works/Das-Lied-von-der-Erde/P0109538
Discarded: “A tenor who left the stage” (Öhman’s “History of the Tenor” page not opened, so nothing from it is cited); “The second scherzo” and “A key that will not stay put” (no source).

### Not done (unresolved)
- Mahler-Online (GMW 50), Pristine PASC389, the International Gustav Mahler Society catalogue and Papers Past were unreachable or returned no text; notes depending only on them stay out.
- Timings inside long movements rest on section joins, page proportion and the listening guides’ order of events, always passage-level; the S2 finale chorus notes and the Ninth’s development notes are the least certain placements (±20 s).
- Smoley’s guides are speech-to-text transcripts; only statements that were clear were used, and several were cross-checked against Basinger, the Foundation or Wikipedia.

## Secondary-source check (batches 6–10)

Agent HallSecondaryB. Scope reached: all flagged Batch 7 notes and their spot-checks, plus the Batch 10 notes on Stravinsky, Tchaikovsky (Symphony No. 6), Verdi and Wagner. Batches 6, 8 and 9 and the Batch 10 Vivaldi and Tchaikovsky Piano Concerto notes were NOT reached in this pass and remain as flagged in their sections above. Changed listen files all print `ok` from `tools/validate.mjs`. Scratch copies of scores and PDFs sat in /tmp only.

### Batch 7

- mussorgsky-night-bald-mountain, “Borodin meets the young officer”: corrected. Borodin’s own account (quoted in Khubov’s biography, ch. 3, http://mussorgsky.ru/hubov019.html) dates the meeting to autumn 1856, “September or October”, in the hospital duty room; the piano playing was that evening at the chief physician’s house. The 1 May 1858 petition to leave the regiment is in *Istoriya russkoy muzyki*, vol. 7 (https://lib.rmvoz.ru/bigzal/irm/7/musorgskij/st). “To study with Balakirev” removed.
- same file, “Mussorgsky’s wicked prank”: corrected and retitled “A sinful prank”. The phrase is in the letter to V. V. Nikolsky of 12 July 1867 (note 73 of the same volume), not the 5 July letter to Rimsky-Korsakov. Balakirev’s refusal: belcanto.ru (Mikheeva) and Rimsky-Korsakov, *My Musical Life*, p. 220 (IMSLP 721391).
- same file, “A bell the hall could not tune”: kept with new source: Rimsky-Korsakov, *My Musical Life*, pp. 221 and 236 (read in full; first Russian Symphony Concert of 1886–87).
- same file, “Repin in the hospital”: corrected. The Tretyakov Gallery page (https://my.tretyakov.ru/app/masterpiece/20705) gives four sittings, 2–5 March Old Style, hospital robe, death 16 March Old Style (= 28 March). The desk-for-easel detail rests only on secondary web pages and was removed; “green robe” became “crimson lapels”. Birth 9 (21) March 1839 from Khubov ch. 1.
- mussorgsky-pictures-baba-yaga, “A witches’ sabbath before”: kept with new source (inscription of 23 June 1867 via belcanto.ru; memoir p. 220). Howard’s “best Bald Mountain pictorialism” verified on the LA Phil page.
- mussorgsky-pictures-great-gate, “Dedicated to Stasov”: kept with new source. I read Mussorgsky’s autograph (IMSLP #733281, RNB): last page signed 22 June 1874; title page “Posvyashchaetsya Vladimiru Vasilyevichu Stasovu”; inscription to Stasov dated 27 June; “K pechati” note dated 26 July (handwriting only partly legible; the dates agree with the published readings).
- mussorgsky-pictures-promenade-3: corrected. Stasov’s Tuileries wording could not be traced to a primary text; the note now follows Steinberg’s BSO note (“swarming with children and their nurses”). Wyld’s “cliffhanger” sentence verified in the Philharmonia PDF.
- mussorgsky-pictures-goldenberg-schmuyle: kept. Steinberg’s sentence verified on the BSO page; Wyld’s “curtailed by the emphatic ending” verified in the PDF.
- origins-corelli-concerto-6-4-first: corrected with Treccani’s *Dizionario Biografico* entry: died in the night before 8 January 1713; Op. 6 undated but Fornari’s dedication to the Elector Palatine is signed 20 November 1714; Opp. 1–4 trio sonatas, Op. 5 violin sonatas. Wikipedia dropped.
- origins-purcell-fairy-queen-chaconne: corrected. Shedlock’s preface to Purcell Society vol. XII (1903; IMSLP 611116) gives the anonymous adaptation, the Queen’s (Dorset Garden) Theatre, the Gentleman’s Journal notice of May 1692, the lost score found at the Royal Academy of Music, and the 1693 Act I additions. “2 May”, “masque in every act but the first” and “none of Shakespeare’s words” had no source I could open and were dropped; the note now says May 1692 and masques in the later acts.
- origins-palestrina-sicut-lilium: corrected and re-sourced. The 1862 *Werke* vol. I (the file’s score) reproduces the 1569 title page “Liber primus … quinis, senis, septenis vocibus”; Milsom’s “earliest set of motets” was not repeated (the four-voice book of 1563 may be earlier), so the note says first book of motets for five, six and seven voices. Unresolved: no source states which of the two settings the Tudor Consort sing. Phillips says the Mass *Sicut lilium* is built on the 1569 motet and the Tudor Consort album pairs motet and Mass, so the 1569 setting is a reasonable inference, not a documented fact.
- prokofiev-piano-sonata-2: “A quiet song after the bridge” kept, now checked against the Jurgenson plates (Più mosso 2/4, Tempo primo 3/4, p). “The opening returns, almost whispered” corrected and moved from 228 to 232 s: in the printed score the recapitulation brings back the Più mosso bridge pp and the 3/4 idea pp dolce (tristemente later), so the note says that; Zanetti’s “almost entirely pianissimo” is kept in the evidence only. “A critic’s verdict” replaced by “Sabaneyev on the Concerto” (Golos Moskvy, 1912, via a Russian journal article on Cyberleninka), because the Quattrocchi quotation names no critic and I found no match for it. “Dedicated to a friend” corrected: the printed score is headed “To Maximilian Anatolyevich Schmidthof”; the clause that Jurgenson published in the year of his death was dropped. Zanetti’s and Quattrocchi’s statements were confirmed on the programme-note page.
- puccini-mi-chiamano-mimi, “The public will judge” and “Turin, 1 February 1896”: kept with new sources (Puccini Museum page; Giacomo Puccini Catalogue of the Works, https://catalog.puccini.it/public/works/la-boheme for date, cast, conductor). Wikipedia dropped.
- puccini-vissi-darte, “Destinn in the studio”: kept; Wikipedia replaced by the Puccini catalogue entry for the 10 December 1910 Metropolitan première. Session facts (23 April 1914, matrix C-14508-4) still rest on the Commons description alone: DAHR and the Library of Congress jukebox pages were blocked by bot challenges, so they could not be rechecked.
- Spot-checks, kept: mozart-requiem-lacrimosa “Eybler’s two added bars” (NMA foreword read: declaration of 21 December 1791, “the two measures appended to the Lacrimosa”); origins-buxtehude-praeludium-137 Gerstetten organ (Commons description: Reiser II/P/22, 1984); rachmaninoff-barcarolle-op10-3 (Densmore: 82202, 2/1921, matrices 6743 and 6736, 1919.04); prokofiev t = 790 (Quattrocchi page).
- Batch 7 “Unresolved” items: the Rimsky-Korsakov/Nikolsky letter question is resolved (Nikolsky); the Palestrina setting question is narrowed as above; the 23 or 24 April 1919 Barcarolle date stays unresolved and unused.

### Batch 10

- stravinsky-petrushka-evening, “A puppet with a piano”: corrected. Stravinsky’s *An Autobiography* (1936), pp. 47–48, read at the Internet Archive: the piece is a Konzertstück with a leading piano, not a piano piece; the quotation and the Diaghilev visit at Clarens match. “The 1911 score, before the revision” (Ledbetter: the piano scarcely appears after the second tableau; more in the 1946–47 score) and “Only wood and sawdust” (Kirchmeyer figures 129–130; Ledbetter on the sawdust) verified, kept.
- tchaikovsky-6-adagio, -allegro-grazia, -allegro-vivace, -finale: all letter numbers, dates and quotations verified on the Tchaikovsky Research page fetched with `?action=render` (letters 4865, 4984, 4998, 5062; the title-page note; note 1 on the title; the 1/13–12/24 August duet arrangement; November 1893 and February 1894 publication). The batch’s unresolved item (letter 4865 cut off for logged-out readers) is resolved: “a long drawn-out adagio” and “blissful” are on the rendered page. BSO note verified for Balanchine’s “a blizzard” and ballet, David Brown’s sentence and the G-major landing, and the première/memorial dates. All kept.
- verdi-requiem-dies-irae, “A Requiem for Rossini first”: corrected. “Abandoned nine days before” rests only on Wikipedia and was dropped; the note says the performance planned for 13 November 1869 never takes place (Larner; BR-Klassik article by Susanna Felix). The 1871 quotation is Larner’s, and he writes of eleven other composers (thirteen in total, as Wikipedia says; neither number is used).
- verdi-traviata-prelude, “A play seen in Paris”: rewritten. The claim that La Fenice insisted on a setting around 1700 could not be confirmed: the Schirmer vocal-score introduction on IMSLP says the 1853 production wore modern dress and was moved to an earlier century for the revival, which contradicts Wikipedia. The note now rests on Oreste Bossini’s Cagliari programme essay (Verdi’s letter of 21 January 1852 from Paris; the De Sanctis letter of 1 January 1853) and René Weis (Royal Opera House) for the play’s première at the Vaudeville on 2 February 1852. Not resolved: who imposed the 1700 setting and for which production.
- wagner-siegfried-idyll: “Fidi’s birdsong and a sunrise” and “Witness, then trumpeter” verified (Fineske’s IAWS page: original title, Fidi, 13 trumpet bars; Lucerne museum page: wedding of 25 August 1870, witnesses Meysenbug and Richter, Siegfried born 6 June 1869; Mahler Foundation: Richter trumpeter at the first performance; Oxford dictionary text on encyclopedia.com: he learned the trumpet for the occasion). Kept. The existing t = 380 note with `basis: 'general'` is unchanged and still has no source that places it in time.

### Not reached (left as flagged above)

- Batch 6: all Mahler Kindertotenlieder, Mendelssohn, Mozart 40 / K. 467 / clarinet / Requiem Communio notes. Flagged and still unchecked: Wikipedia-only items (Mendelssohn “Chromatic waves”, “A song without words”, “A model for later concertos”; Mozart 40 “Musopen’s Kickstarter”, “Why the Trio is called a Trio”; K. 467 “The Elvira Madigan concerto”), and second-hand quotations (Alma Mahler via Interlude and Hefling via Wikipedia; Rosen, Zaslaw and Jahn via Tobias).
- Batch 8: Boléro (fourteen notes citing Wikipedia, Orenstein, Woodley, Mawer, Coppola at second hand), the Miroirs notes that quote Ravel’s *Esquisse autobiographique* from French Wikipedia, the Alborada note, the Op. 32 No. 10 painting note (Wikipedia), and Hanslick via Glass in Strauss’s Don Juan.
- Batch 9: Schubert 8 “A short score survived” and “Why only two”; Quintet “Brahms writes for the same forces” and the Scholes quotation and Substack review in the Adagio file; Winterreise notes quoting Spaun via Wikipedia; Impromptu “The year of Winterreise”; Sibelius 2 “High time to travel”, “Straw on the haystack” and the nickname.
- Batch 10: vivaldi-spring-allegro (Pearlman), vivaldi-spring-largo and vivaldi-winter-allegro (de Brosses on Wikisource), vivaldi-spring-finale and vivaldi-winter-largo (Talbot on Treccani); tchaikovsky-piano-concerto-1-allegro and -finale (I fetched the Tchaikovsky Research page with `?action=render` but did not compare the notes with it).

## Secondary-source check (batches 1–5)

Agent HallSecondaryA. Scope reached: all flagged notes of Batch 1 plus ten spot-checks; the Wikipedia-only Chopin notes of Batch 2 (and a check of the Brahms notes); nothing yet of Batches 3–5 (see “Not reached”). All fourteen changed listen files print `ok` from `tools/validate.mjs`. Verdicts: kept with new source / corrected / removed. Sources were opened unless marked otherwise.

### Batch 1

- bach-brandenburg-5-affettuoso, “Adagio becomes Affettuoso” (t = 105): kept with new source. Neue Bach-Ausgabe VII/2 Nachtrag (ed. Dürr, Bärenreiter 1975; IMSLP #828858), p. 26, scan read: movement 2 of BWV 1050a headed “Adagio”, flute, violin, harpsichord.
- bach-partita-2-chaconne, “Home to a grave” (t = 130): kept with new source. Spitzer, Eighteenth-Century Music 19/1 (2022), 5–12 (Thoene’s 1994 Köthen article “deeply controversial”; Carlsbad May 1720, return July); ECM Morimur page.
- bach-st-matthew-opening, “A Lutheran Agnus Dei” (t = 236): corrected. The 1522/23 composition date rested on Wikipedia. Julian’s Dictionary of Hymnology gives Low German print, Geystliche leder, Rostock 1531, and Decius leaving Steterburg in July 1522; the note now says “left his cloister for the Reformation in 1522” and “first printed in 1531”.
- bach-st-matthew-opening, “Music for a prince’s funeral” (t = 350): kept with new source for Picander (bach-cantatas.com BWV 244a page: Picander, NBA I/34, first performed 23–24 March 1729); the ten-movement link is on the Bach Society page.
- bach-st-matthew-opening, “Mendelssohn conducts it in Berlin” (t = 470): corrected. Devrient’s memoir (1869 English translation, pp. 56, 61–63) confirms 11 and 21 March 1829, a crowded second performance, “Most of the songs would have to be omitted”, and the sewing-school proceeds; it gives no counts. The Wikipedia-quoted “ten arias, seven choruses” and “sells out at once” are removed.
- beethoven-131-lener, “The most melancholy fugue” (t = 300): corrected. Wagner’s own sentence (Dannreuther’s translation, p. 62): “than which probably nothing more melancholy has been expressed in tones”, of the “longer introductory Adagio” of the C♯ minor quartet. The Kerman quotation (“this most moving of all fugues”) could not be traced and is removed; the Berger paraphrase is replaced.
- beethoven-131-lener, “Schubert’s last wish” (t = 360): kept, softened. Holz’s sentence is confirmed in Deutsch’s Memoirs and in Gibbs, The Life of Schubert (Internet Archive full-text snippets only; both are lending copies, so the pages were not read). “A week before his death” (Wikipedia only) became “in his last illness, in November 1828”.
- beethoven-131-lener, “The extreme boundary” (t = 1430): kept with new source. Schumann, “A Retrospective View”, Ritter 1877, p. 391, read (“with some of Bach’s choruses and organ pieces” added to the note).
- beethoven-131-lener, “Hamlet in the finale” (t = 2310): kept; Schering’s programme as summarised by Biamonti on lvbeethoven.org (opened). Schering’s book itself not opened.
- beethoven-5-first, “Fate at the door” (t = 150): corrected. Schindler, Biographie (1840), p. 241 (“So pocht das Schicksal an die Pforte!”), read; the forgery point rests on Stadlen (Musical Times, July 1977) as summarised by BBC Music Magazine (Stadlen itself not opened). “Pointed to the opening bars” dropped.
- beethoven-5-first, “Horns that could not” (t = 372): corrected. Hopkins via Wikipedia replaced by the Eastman School page (“the milder-toned bassoons” rather than E♭ horns changing to C crooks). “Natural horns cannot play C without stopping” and “modern orchestras often return it to the horns” had no opened source and are removed.
- beethoven-5-scherzo, “Twice through, or once” (t = 175): corrected. Del Mar’s own account (British Academy PDF): the first-performance parts contained the repeat and its pages were excised from the lost engraver’s copy, which he judges could only have been done on Beethoven’s instructions. The Gülke 1978 / Del Mar 1999 dates (Wikipedia only) are dropped.
- beethoven-5-andante, “Again!” (t = 195): kept with new source. Seyfried (appendix to Beethoven’s Studien, p. 15) as translated in Thayer–Krehbiel 1921, vol. 2, pp. 130–131.
- beethoven-5-andante, “A hundred gulden” (t = 540): kept, source moved to Thayer–Forbes (1964; seen only through Internet Archive full-text snippets: “pecuniary results … not known”; Esterházy 100 gulden from the Grenzboten of 13 November 1868). Thayer–Krehbiel (1921) places a 100-florin payment in the 23 December paragraph, so this is the least secure note of the batch.
- beethoven-5-finale, “One hearing is not enough” (t = 205): replaced. The AMZ review of 25 January 1809 (Wikipedia’s translation) could not be found in the OCR of any AMZ volume on the Internet Archive. New note “A concert on little rehearsal” from Reichardt, Vertraute Briefe (1810), vol. 1, pp. 255–56 (German read; translation ours).
- beethoven-5-finale, “In Lobkowitz’s box” (t = 320): kept with new source. Reichardt’s German (“in der bittersten Kälte von halb 7 bis halb elf”), vol. 1, pp. 254–55.
- beethoven-5-finale, “Fate by the throat” (t = 610): corrected. Letter XXXVIII, Kalischer/Shedlock 1909, p. 35 (“November 16 [1801 ?]”): “I will seize fate by the throat; it shall certainly never wholly overcome me”. The old “not crush him completely” was Lockwood’s rendering.
- bartok-concerto-orchestra-intermezzo, “Whose joke is it?” (t = 158): kept with new sources. Rodda (Shostakovich theme, itself a Lehár phrase), Berlin Philharmonic programme note (Lehár melody woven with the invasion theme), Guardian letters of 4 January 2016 for the argument.
- Spot-checks, all kept (claim found in the opened source): bach-brandenburg-5-allegro “A harpsichord from Berlin” (Bach Society); bach-st-matthew-erbarme-dich “The music stands in the room” (DG booklet, Sievers, German read); bach-cello-suite-1-prelude “The copy that survives” (Bach Society); bach-partita-2-chaconne “A Chaconne in the Metro” (Washington Post archived copy); bartok-concerto-orchestra-introduzione “Plunging into the unknown” (Rodda); bartok-concerto-orchestra-coppie “Reiner’s old teacher” (CSO page quoting Hart); beethoven-109-prestissimo “A dedication!” (letter text on lvbeethoven); beethoven-132-dankgesang “Linke played better than ever” (BKh 8 p. 182); beethoven-131-lener “A dedication withdrawn” and “Halberstadt, 1828”; beethoven-appassionata-andante “Never called Appassionata” (Beethoven-Haus).
- Not corrected, still second-hand: beethoven-5-finale “One of the most important works” (Hoffmann via the Eastman page; Hoffmann’s review not opened); beethoven-5-andante “Four years of work” (Eastman and Wikipedia).

### Batch 2 (partial)

- chopin-ballade-3, “A letter to Fontana” (t = 345): removed. The 18 October 1841 letter and “January 1842” rested on Wikipedia. The letter is not among Opienski/Voynich letters 151–156 (October 1841, read); NIFC lists Wessel and Schlesinger as first editions and IMSLP dates the Breitkopf print “[1841]”.
- chopin-ballade-3, “Mickiewicz’s water nymph?” (t = 170): kept. NIFC (Tomaszewski, read through the NIFC page API) quotes Kleczyński tying the Third Ballade to Mickiewicz’s Świtezianka and calls such readings “suppositions”; Voynich’s preface reports Cortot’s attributions.
- chopin-ballade-4, “The Three Budrys?” (t = 345): kept with new source. Voynich preface, pp. vii–viii, reporting Cortot (the foreword itself not opened).
- chopin-ballade-4, “Ornaments in the high register” (bar 152): kept with new source. Samson’s phrase found by Internet Archive full-text search (page not read).
- chopin-etude-op10-5-cortot, “Chopin on Clara Wieck’s choice” (t = 22): kept with primary source. Letter 109 to Fontana, Marseilles, 25 April 1839 (Voynich, p. 199). The “F natural in bar 66” sentence is dropped from the evidence.
- chopin-etude-op10-5-cortot, “Cortot at the lesson” (t = 46): corrected. In Cortot’s 1915 Édition de travail (Senart; IMSLP #367492, p. 33 read) the aim for Étude V is “Legato brillant, nommé ‘jeu perlé’”; “brilliant and delicate legato” is not there.
- chopin-etude-op10-5-cortot, “Two dedications” (t = 125) and chopin-etude-op25-5, “Marie d’Agoult’s études” (t = 87): corrected. IMSLP (Op. 10: 1833, Liszt; Op. 25: 1837, Comtesse d’Agoult); the quoted “à mon ami Franz Liszt” and “reason unknown” had no opened source and are dropped; “mistress” became “companion” (liszt.org chronology, 1834–35).
- chopin-nocturne-op15-2, “For Ferdinand Hiller” (t = 26): corrected. IMSLP: composed 1830–33, published 1833–34, dedicated to Hiller. Hiller’s Paris dates (Wikipedia 1828–36; 1911 Britannica 1829–36) and the Berlioz friendship had no agreeing source and are dropped; new content from the joint letter of 20 June 1833 (Voynich letter 76, pp. 170–71).
- brahms-3-poco-allegretto, brahms-symphony-1-allegretto, -andante-sostenuto, -finale (BSO notes): kept. Mandel’s BSO notes were opened and match the claims (Richter’s “Brahms’s Eroica” per Hanslick, Simrock’s letter of 22 February 1873, Karlsruhe 4 November 1876, “long and not exactly amiable”, Damrosch, Zerrahn and Henschel dates). Hanslick’s and Simrock’s own texts were not found, so those quotations remain second-hand; several books (Internet Archive full-text hits) confirm Richter’s “Brahms’s Eroica”.

### Not reached

- Batch 2: Bruckner 7 notes resting on Wikipedia (Tintner, adagio t = 265 and finale t = 380; Mann on the cymbal, adagio t = 845; E pedal, allegro moderato t = 950; Wagner tubas, adagio t = 130); the Brahms Ninth-likeness reply (Krasting, Berlin Philharmonic note) not rechecked; spot-checks.
- Batch 3: Duchen’s priest remark and Nectoux’s Ysaÿe remark (Fauré), Steinberg’s Fauré quotation, Trezise (La mer), Larner’s Debussy letter, the Jimbo sleeve note, Beatrice Harrison (Elgar), Kruysen and Tovey biographies, the Marine Band announcement (403); spot-checks.
- Batch 4: bourrée origin, Danish String Quartet history, Bolet, Haydn to Griesinger, the Sargent credit, the Liszt Sonata première day (22 vs 27 January 1857), the Haydn 94 A-minor/G-major wording; spot-checks.
- Batch 5: the notes resting on Smoley’s speech-to-text guides and Wikipedia (Schuricht, Das Lied, Ninth); second-hand quotations (Walter, Bauer-Lechner, Göhler, Alma to Mengelberg, Rosé to Urlus); spot-checks.
- Working method for whoever continues: IMSLP scans download once the 7-second countdown in a Chromium tab (`browser.open` with `app: {tern: false}`) shows the file link; NIFC pages are readable through `api-chopin.nifc.pl/index.php/main/page_builder/<base64 of the path>`; Open Library’s `search/inside.json` gives full-text snippets from lending copies on the Internet Archive.

## Secondary-source check (batch 4)

Agent HallSecondaryF. Scope reached: every item flagged in Batch 4 (bourrée origin, Danish String Quartet history, Bolet, Haydn to Griesinger, the Sargent credit, the Liszt Sonata première day, the Haydn 94 A-minor/G-major wording) and six spot-checks. All five changed listen files print `ok` from `tools/validate.mjs`. Sources were opened unless marked otherwise. Verdicts: kept with new source / corrected / removed; nothing was removed.

- handel-water-music-2-bourree, “A French dance among English ones” (t = 30): corrected. Britannica (archived copy https://web.archive.org/web/20241217071129/https://www.britannica.com/art/bourree; the live page returns 403) says only that the bourrée is “notably associated with Auvergne” and that dancers occasionally wear wooden clogs; Encyclopædia Universalis (Lacas, https://www.universalis.fr/encyclopedie/bourree/) calls the origin unknown. “Began in the Auvergne” and “French clog dance” (Wikipedia) became “notably associated with the Auvergne, where the dancers sometimes wear wooden clogs”.
- haydn-54-2-vivace, “Tel Aviv, May 2015” (t = 225): corrected. The quartet’s own “Our story” (https://www.danishquartet.com/about) and ECM’s artist page (https://ecmrecords.com/artists/danish-string-quartet/) confirm the three Danes meeting at a summer camp for amateur musicians (football and chamber music) and Fredrik Schøyen Sjölin joining in 2008. Neither says the group took its name in 2008 (ECM has the quartet recording Nielsen in 2006 as the “Young Danish String Quartet”; the 2008 renaming is Wikipedia only), so that clause was cut. The video description (Tel Aviv Museum of Art, May 2015; it misprints Op. 64) was reread on YouTube.
- liszt-sonata-b-minor, “A pupil of a pupil” (t = 1220): kept with new sources. Baker’s Biographical Dictionary (Slonimsky, via Encyclopedia.com): at Curtis he studied with Godowsky (1932–33) and Rosenthal (1935). Curtis Institute page (https://www.curtis.edu/news/tag/jorge-bolet): Rosenthal among his teachers; “In 1960, he played the piano soundtrack” for the Liszt biopic Song Without End (the page misprints the film as 1950). Rosenthal as Liszt’s pupil: The New Yorker, 26 December 1936, “Liszt’s Pupil”, and the Steinway artist page. Film (Columbia, Bogarde as Liszt) released 11 August 1960 (Rotten Tomatoes). Wikipedia dropped.
- haydn-94-adagio-vivace, “So that Pleyel would not outdo him” (t = 285): corrected. Griesinger, Biographische Notizen (Leipzig, 1810), BSB scan, OCR text read in both Internet Archive copies (https://archive.org/stream/10600112bsb/10600112bsb_djvu.txt is the clean one). The question was put “im Scherz” about the Andante with the drum stroke, not about the first movement; Haydn’s reply and the sentence on the first Allegro’s “unzähligen Bravos” match the Wikipedia English. The note now carries our own translation instead of the quoted English, and its evidence cites Griesinger’s “acht Tage vor den meinigen” in place of “a week before the première” credited to Howard, who does not say it. The cue was cut to the 55-word limit.
- handel-messiah-hallelujah-sargent-1926, “Inside the Albert Hall” (t = 125): kept with new source. HMV D 1108 (matrix CR 237-1A, label number 04871, the same number as the Electrola label): two Internet Archive transfers of a pressing (George Blood, Leif Druedahl collection; https://archive.org/details/78_hallelujah-chorus_royal-choral-society-handel-malcolm-sargent_gbia7012305b and …_gbia7012305a) credit Malcolm Sargent and state “Recorded during the actual performance at the Royal Albert Hall, on April 2nd, 1926”. A discographic listing of the 1926 HMV Albert Hall sides (https://archive.org/details/04-royal-choral-society-raho-m-sargent-messiah-hmv-d-1108-1926-04-02-2_202207; its title names four conductors across the sessions) gives Sargent for D 1108. The Royal Choral Society history has guest conductors between Bridge’s retirement in 1922 and Sargent’s permanent appointment in 1928. The German National Library record names no conductor. The credit still rests on the label as transcribed by those uploads; no contemporary printed review was found.
- liszt-sonata-b-minor, “Bülow takes it to Berlin” (t = 1080): corrected. The day is 22 January 1857. The liszt.org chronology already cited in the note says January 22, and Herttrich’s Henle preface says “probably” 22 January 1857 (both opened). Gustav Engel’s review in the Berlinische Nachrichten of 24 January 1857 (transcribed at https://classical-pianists.net/v/hans-von-bulow/articles/; the newspaper itself not opened) reports the third trio soirée of Bülow, Laub and Wohlers “am Donnerstag im englischen Hause”, with the Liszt sonata second; 22 January 1857 was a Thursday, and a review printed on 24 January excludes the 27 January (a Tuesday) given on Hyperion’s work pages and in Wikipedia. The text now says “On 22 January 1857” and names the Englisches Haus; the 1851 pupil date and the August 1857 wedding (18 August, Liszt present) are confirmed by the same chronology.
- liszt-sonata-b-minor, “A dedication sent to Schumann” (t = 560): kept with new sources. Wikipedia replaced by the Yale exhibit (Schumann “had dedicated his C major Fantasy to Liszt fifteen years earlier”; institutionalised 1854), the Henle preface (dedication copy sent to Clara on 21 May 1854) and the Schumann-Portal (brought to Endenich on 4 March 1854, https://www.schumann-portal.de/bonn-1475.html).
- liszt-sonata-b-minor, “Two figures become a fugue” (t = 1045) and the transition “Quiet music starts to chase itself”: kept with new source for the B♭-minor fugato (Wikipedia replaced by INVENTIO, Catholic University of America, vol. 5 no. 2: “The Fugato section begins with the subject of the fugue in B-flat-minor”; a student journal, so the key is still best confirmed against the score, which was not opened).
- haydn-94-adagio-vivace, “Two violins steal away” (t = 88): corrected. The note said the Vivace is “still leaning towards D major”. Wigmore (Hyperion booklet, p. 6) says it “initially pretends it is in A minor rather than G major” and Howard that the first theme begins “outside the home key”. The Rietz/Breitkopf full score (IMSLP #546546, printed p. 2, rendered and read) shows a G♯ in the second violins’ first bar, which points to A minor and not to D major, and the forte tutti on G four bars in. The note now says “bending towards A minor”.
- haydn-94-adagio-vivace, “London, March 1792” (t = 112): kept with new source. The 23 March 1792 première date, previously on de.wikipedia, is now Wigmore (p. 6, “Premiered in Salomon’s concert on 23 March 1792”); Pleyel’s rival series is in Howard’s note (reread).
- Spot-checks, all kept (claim found in the opened source): handel-water-music-2-minuet “The Prince stays away” (HRD 1717 prints Bonet’s report of 19/30 July 1717: “ni le Prince ni la Princesse n’ont eu aucune part à cette fête”; another newspaper report in the same entry says the Prince and Princess attended, as the note’s evidence already records); liszt-sonata-b-minor “Peace to compose in Weimar”, “A first version in 1849” and “Clara’s diary” (Henle preface, German and English, read); “Wagner hears it from Klindworth” and “Highly delighted” (Hueffer, Gutenberg 4234: letter 184, London, 5 April 1855, and letter 185, Weymar, 2 May 1855; the quoted sentences are verbatim); ives-concord-emerson “Kirkpatrick plays it whole” and ives-concord-thoreau “Played for a critic” (Gann’s timeline: Cos Cob 28 November 1938, Town Hall 20 January 1939, Max Smith 1912 per the 1913 memo; “greatest music composed by an American”, New York Tribune, in Gann’s article); ives-concord-hawthorne “Drum parts with his fists” (Swafford, “It’s all right to do that, Charles, if you know what you’re doing”); haydn-94-menuetto “Fastest and lustiest” and haydn-94-adagio-vivace “Simple, then complicated” and “A second development” (Wigmore, Hyperion booklet pp. 6–7, read).

### Not reached (Batch 4)

- Every other Batch 4 note was left as restored: the Handel Hallelujah (Edison) and Water Music Minuet notes other than those above, the Haydn Op. 54 No. 2 notes resting on Shulman and Holman (not reread), the Lili Boulanger notes (Everest sleeve, Galluhn and Minors prefaces), Liszt Hungarian Rhapsody No. 6 (Leslie Howard’s Hyperion note), Mahler 2 notes (Hefling and the Mahler Foundation, not reopened). The Wikipedia-only dating of Haydn 94 Menuetto’s tempo was already dropped in Batch 4.
- Griesinger: the printed page number could not be read reliably from either OCR (one gives 50, the other 56), so the evidence names the section and not a page.
- Working method for whoever continues: the IMSLP download page (`https://imslp.org/wiki/Special:ImagefromIndex/<id>/hfpn`) in a Chromium tab opened with `app: {tern: false}` shows “Click here to continue your download” after about 25 s; read its link from the DOM (`a[href*=imglnks]`) and `curl` that link. A plain `curl` of imslp.org/images/… returns the disclaimer page.

## Secondary-source check (Batch 2 Bruckner 7; Batch 3 flagged notes)

Agent HallSecondaryE. Scope reached: the five Wikipedia-dependent Bruckner 7 notes of Batch 2 and every flagged Batch 3 note named in the earlier “Not reached” list except the Marine Band page, plus four Fauré spot-checks. Verdicts: kept with new source / corrected / removed. All ten changed listen files print `ok` from `tools/validate.mjs`. Scores read for this pass: Bruckner Symphony 7, Gutmann first edition (IMSLP #26842, 98 pp.; printed page = PDF page + 1) and Fauré Requiem, Hamelle 1901 (IMSLP #30151; printed page = PDF page).

### Batch 2 (Bruckner 7)

- bruckner-7-adagio, “Tubas made for the Ring” (t = 130): kept with new sources. Gutmann p. 33 (read): four horns listed apart from four Wagner tubas (two tenor in B♭, two bass in F) and a contrabass tuba. Los Angeles Philharmonic programme note: “the first appearance of these instruments in symphonic music” (https://www.laphil.com/works/symphony-no-7-bruckner); Hungarian National Philharmonic (first time another composer used them); Konzerthaus Berlin (four of the eight horn players). The Wikipedia citation is gone.
- bruckner-7-adagio, “What makes Bruckner Bruckner” (t = 265): removed. The Tintner quotation is Wikipedia’s transcription of an audio talk on Naxos 8.501205; the Naxos pages and booklet URLs returned 403/404 and no other transcript turned up.
- bruckner-7-finale, “A finale like Haydn’s?” (t = 380): corrected. Tintner’s own booklet note on the Seventh (Naxos 8.554269), quoted by Ates Orga in BBC Music Magazine (https://www.classical-music.com/reviews/orchestral/bruckner-87; booklet not opened): the finale “in relation to the rest … more like the finale in a Haydn symphony”. The Hungarian note gives the timings (13 against 22; Fifth 23 against 19; Eighth 21 against 14). Wikipedia’s “sum up everything” wording is dropped.
- bruckner-7-adagio, “The cymbal crash that may not belong” (t = 845): kept, corrected. William Mann (Decca booklet for Solti/Chicago, quoted on Wikipedia; Nikisch “persuaded” Bruckner) is not used: Cohrs (Hyperion booklet, 2023) says the Adagio was first composed without percussion and Bruckner later added timpani, triangle and cymbals at the Schalk brothers’ suggestion, and Konzerthaus says the instigator is unclear; the Munich analysis also calls the percussion a later insertion. Gutmann p. 47 (read) prints Triangel u. Becken at the C-major climax (letter W). The note now says Bruckner first wrote the movement without percussion and added the cymbals later.
- bruckner-7-allegro-moderato, “A prelude from the Ring?” (t = 950): kept with new sources. Gutmann p. 28 (read): a timpani roll on E over double basses tied from bar to bar on low E (pp. 29–31 follow the same pattern in the existing score notes); Hungarian note: the timpani tremolo lasts 52 measures; the Rheingold prelude’s sustained E♭ in the double basses, joined by bassoons: Opera North via OperaVision (https://operavision.eu/performance/das-rheingold). The Wikipedia citation is gone.
- bruckner-7-finale, “A chorale on plucked basses” (t = 58) and “One melody across the orchestra” (t = 170): kept; the “also in Wikipedia” clauses are removed from the evidence. Letter F, p. 75: the horns’ first notes (written e″, b′, g′ for horn in F) sound a′, e′, c′, an A-minor triad. The A♭ major of the chorale was checked only by the flats printed on pp. 71–72 (B♭ and D♭ in the violins), not by a second source.
- Noted, not changed: the t = 170 note puts the finale’s third theme in A minor while the t = 285 note, from the Munich analysis (major-third key relations, from which E, A♭ and C are inferred), lists E, A♭ and C major as the main keys.

### Batch 3

- faure-requiem-introit-kyrie, “All these novelties” (t = 350): kept as a story. Duchen p. 80 was not opened; the exchange is retold in Jeremy Summerly’s Hyperion CDA68209 booklet (“we do not need these novelties”), Lyle Chan’s ABC Classic guide and, in French, on fr.wikipedia (“une petite histoire”). No first-hand account found, so the text says “the story goes”; the English is ours, from the French.
- faure-requiem-sanctus, “Angelic violins” (t = 80): corrected, retitled “A violin section, added in 1900”. Fauré’s remark to Ysaÿe (Nectoux 1991, p. 119) is reachable only through Wikipedia and is removed. Replaced by what the score and notes show: Hamelle p. 45 “1ers et 2ds Violons … Sourdines” and the violin line at p. 51; Nectoux’s Harmonia Mundi HMM 931292 booklet (1893 orchestration “pas de violons, pas de bois”, solo violin credited in the Sanctus); Wadham Sutton’s Hyperion note (a full body of violins in the 1900 version).
- faure-requiem-sanctus, “Two hundred and fifty performers” (t = 34; the same Wikipedia/Nectoux dependency): corrected, retitled “The concert-hall version”. Date, venue and Taffanel: IMSLP work page (first performance 1900-07-12, Trocadéro, Société des concerts du Conservatoire, Taffanel) and Sutton; Hamelle’s advice to prepare a full-orchestra version: Nectoux 1988 booklet. The 250 performers (Nectoux 1991, p. 514, via Wikipedia) are dropped.
- faure-requiem-offertoire, “Religious illusion and eternal rest” (t = 390): corrected. The sentence is from Fauré’s letter to René Fauchois of 1921 (13 April per fr.wikipedia); French as quoted in the Orchestre Philharmonique Royal de Liège programme note by Éric Mairlot (https://www.oprl.be/sites/default/files/2018-10/Requiem.pdf): “… un sentiment bien humain : la confiance dans le repos éternel”. Steinberg (OUP 2005) was not opened; Steinberg’s “faith in eternal rest” and Summerly’s “belief” are other renderings, so the note now carries our own translation from the French and names the addressee and year.
- faure-requiem-offertoire, “The baritone, Bernard Kruysen” (t = 240): kept with new source. Grove Music biography as reproduced at https://www.bach-cantatas.com/Bio/Kruysen-Bernard.htm (born Montreux 28 March 1933; French government scholarship to study with Bernac; “recognized as one of the greatest interpreters” of French song; recitals with Poulenc). Tense corrected (died 30 October 2000); “often accompanied” became “accompanied him in recital”.
- debussy-la-mer-orchestral-dawn, “Three symphonic sketches” (t = 130): corrected. Trezise p. 47 is known only from Wikipedia’s quotation and is not used. The note now rests on Debussy’s letter to André Messager, Bichain, 12 September 1903, printed in the Sotheby’s catalogue of the Debussy–Messager correspondence (lot 133): “trois esquisses symphoniques … Sous le titre général de La Mer”, with the working titles “Mer belle aux Sanguinaires”, “Jeu de vagues” and “le vent fait danser la mer”, set beside the published titles (IMSLP).
- debussy-la-mer-orchestral-dawn, “Enough to make the fish weep” (t = 385): kept with a second source. François-Bernard Mâche’s text for the Académie des beaux-arts “Journée Debussy” (24 October 2012) quotes the same French passage, headed Grand Hôtel Château de Puys, près Dieppe, 8 août 1906, to Jacques Durand (https://podcasts.institutdefrance.fr/emissions/carrefour-des-arts/debussy-et-la-nature-je-me-suis-fait-une-religion-de-la-mysterieuse-nature). The printed Durand edition itself was not opened.
- debussy-childrens-corner-jimbos-lullaby, “For Chouchou, with apologies” (t = 25): corrected. The toy-elephant identification rests on the Hastings sleeve alone and contradicts the other accounts found (Wikipedia, unsourced, and the Runyan programme note make Jimbo the Jardin des plantes elephant Jumbo; other programme notes say a stuffed toy), with no scholarly source reachable, so it is dropped. The note keeps the dedication and adds the contents leaf’s subtitle <i>Berceuse des éléphants</i> from the Durand first edition.
- elgar-cello-concerto-harrison-1920, “Elgar’s soloist” (t = 420): corrected, retitled “An awful slaughter”. “Studies the concerto with Elgar” and “November 1925 Royal Philharmonic Society concert” had only Wikipedia behind them and are removed. Replaced by Elgar’s two letters to Harrison (14 December 1919: “the copy with the cuts for the Gramophone … an awful slaughter but it is the best I can do”; Tuesday [23 December 1919]: “recording is rather an ordeal”), read from the typed transcripts in the Museum of Music History exhibition (https://momh.org.uk/exhibitions/beatrice-harrison-1892-1965/); the second letter’s “yesterday” agrees with the 22 December 1919 session. Elgar’s preference for her: Science Museum Group (also “reappearing at the Royal Philharmonic in 1925”, no month) and Julian Lloyd Webber, Elgar Society Journal, January 1993, pp. 8–9.
- gershwin-rhapsody-tovey, “A pianist who became a conductor” (t = 810): corrected, retitled “From Salvation Army bands”. The present-tense Wikipedia note was out of date: Tovey died on 12 July 2022. Sources: Marsha Lederman’s obituary in The Globe and Mail, 23 July 2022 (Salvation Army bands; Royal Academy and University of London; piano and tuba; eighteen years at the Vancouver Symphony, which he left in 2018); BBC Media Centre, 13 July 2022 (principal conductor of the BBC Concert Orchestra since January 2018); Chicago Symphony Orchestra, 13 July 2022 (died aged 69; began at Vancouver in September 2000).

### Fauré spot-checks in the same files

- faure-requiem-introit-kyrie, “Why a Requiem?” (t = 40): kept with new sources (Summerly; Sutton: the mother died while the work was in its early stages; Nectoux 1988: mostly autumn 1887 and early 1888; the Aguettant interview). The Wikipedia citation is gone.
- faure-requiem-introit-kyrie, “The Madeleine, January 1888” (t = 66): corrected. Date, funeral service, five movements and the architect Lesoufaché are in Nectoux 1988 and Summerly. “The boy soprano is Louis Aubert” is removed: Nectoux calls Aubert the first Pie Jesu soloist without dating the service, and Aubert’s own sleeve account (the Pie Jesu note) puts his solo months after the première, so the two notes had disagreed.
- faure-requiem-offertoire, “A prayer added later” (t = 64): corrected from Nectoux 1988 (Hostias completed spring 1889; Libera me written 1877 and added 1891) and Sutton (21 January 1893 at the Madeleine). The earlier order “then enlarges the Offertoire and adds the Libera me” is not in either source and is dropped.
- faure-requiem-offertoire, “Two voices in pursuit” (t = 35): kept; the Wikipedia clause is removed from the evidence (score pages only).

### Not reached

- faure-requiem-offertoire, “An O that Fauré added” (t = 85, text changes from Wikipedia) and the Wikipedia clause on the added Amen in the t = 422 evidence; the Gershwin Marine Band page (403); the “CBS 30th Street Studio” Wikipedia note in the Jimbo file; Duchen, Steinberg, Trezise and Nectoux (1991), none opened; the Naxos 8.554269 booklet (403).
- Working method: the Gutmann scan came through the IMSLP countdown page in a Chromium tab (the link appears after about 15 s), then `curl`. A first call to `browser.open` reused an existing tab named “imslp” opened by someone else and navigated it before I switched to my own tab, “hallE-imslp”.

## Secondary-source check (Batch 9 flagged notes; Batch 10 Vivaldi and Tchaikovsky Piano Concerto No. 1)

Agent HallSecondaryD. All changed listen files print `ok` from `tools/validate.mjs`. Scratch files sat in /tmp only. Verdicts: kept with new source / corrected / removed. Sources were opened unless marked “not opened”.

### Batch 9

- schubert-8-andante-con-moto, “A short score survived” (t = 190): kept with new source, text rewritten. Cohrs, “Schuberts Unvollendete: Eine Bestandsaufnahme” (2008), preface to the Samale–Cohrs edition of the scherzo, summarising the Neue Schubert-Ausgabe: piano draft of at least three movements (first three of ten pages, bars 1–248 of the first movement, lost), scherzo draft ending with the trio, draft passing to Ferdinand Schubert, then Dumba (1859), then the Gesellschaft der Musikfreunde (1901). https://repertoire-explorer.musikmph.de/wp-content/uploads/vorworte_prefaces/884.html (German; translations ours).
- same file, “Why only two” (t = 668): corrected and retitled “Grove’s candidate finale”. The claim that the Rosamunde entr’acte was played as the finale at the British première of 6 April 1867 had no source: Grove’s own Dictionary article (vol. 3) gives the Crystal Palace performance of 6 April 1867 but says the Rosamunde parts were found in Vienna later in 1867, and Cohrs puts the first use of the entr’acte as a finale in London in 1881 (his date, not rechecked). The note now says Grove suspected the entr’acte soon after Herbeck’s find and Newbould later argued it (Cohrs). Newbould 1992 not opened.
- same file, “The manuscript goes further” (t = 700): kept with new sources; text adjusted (title page dated 30 October 1822; scherzo orchestrated only for a few bars). Cohrs; Huscher, Chicago Symphony Orchestra (2021): nine scherzo bars fully scored on the back of the Andante’s last page, and Landon’s leaf of 1967 (not used).
- same file, “Hanslick hears thunder clouds”: kept with new source. Pleasants’s translation of Hanslick’s 1865 review (Music Criticisms 1846–99): “musical thunder clouds rather than of dangerous clouds of passion” and “few horn figurations and here and there a clarinet or oboe solo” found by full-text search of the Internet Archive scans (book not read in full; no page number given).
- schubert-8-allegro-moderato, “Locked away for forty-three years” (t = 40): corrected and retitled “A treasure in Graz”. Stähr’s “kept it locked away” is contradicted in substance by the Schubert-Lexikon as reported by Cohrs (score reached Anselm from Josef at an unknown date; Herbeck visited on 1 May 1865; the charge of deliberate withholding is probably unjust). The note now gives Josef’s letter of 8 March 1860 (“a treasure”; Huscher; Glass, LA Phil) and the shared 17 December 1865 programme.
- same file, “Vienna hears it in 1865”: kept with new sources (Cohrs, Stähr, Huscher) in place of Wikipedia.
- schubert-quintet-956-adagio: “Twenty-two years of waiting” kept, “manuscript and sketches lost” re-sourced to Egon Voss’s preface to Henle HN 812 (autograph missing; Spina 1853 print the only source; Hellmesberger Quartet with Stransky, 17 November 1850) and IMSLP. “Brahms writes for the same forces” corrected: Misha Donat (Hyperion CDA67551): autumn 1862, the first three movements sent to Clara, for “the same ensemble that Schubert used”; the old “completes … in 1862” and the Wikipedia citation are gone. “The music of friends”: kept; Scholes’s sentence and “poetic definition” found in The Oxford Companion to Music, “Chamber Music” (Internet Archive full-text hits, several editions), and on the Columbia sleeve (read in full). “Casals can be heard grunting” replaced by “Groans from Casals” on Tully Potter’s Strad review (December 2016: “groans from Casals only increase the tension”); the Substack review was dropped, and the MusicWeb review of the same CD (Jonathan Woolf) refers to the Fifth Symphony, so it is not used. “A letter to Leipzig” and “A cousin of the B♭ sonata” kept (Donat quotes the 2 October 1828 letter; Voss cites Deutsch p. 540; Blumhofer’s sentence verified).
- schubert-winterreise-gute-nacht, “A cycle of terrifying songs” (t = 122) retitled “A cycle of horrifying songs” and rewritten; schubert-winterreise-lindenbaum, “The song Schober liked” (t = 105) corrected. Spaun’s account read in German in Heinrich Welti’s ADB article “Schubert, Franz”, vol. 32 (1891), p. 626 (https://de.wikisource.org/wiki/ADB:Schubert,_Franz_(Komponist)): “ich werde Euch einen Cyclus schauerlicher Lieder vorsingen” (sing, not “play”); Schubert “sagte hierauf” (the Wikipedia version’s “leaped up” is not in it). Translations ours; Haywood (Radio Times, 1939) not used.
- same Gute Nacht file, “The first complete recording”: corrected (“the last five” → “the other five”: Nos. 16, 17, 19, 20 and 23 with Orthmann on 11 July). schubert-winterreise-fruhlingstraum, “The longest song on the set”: kept; Utz’s text also says the cycle was issued as twelve records, one song to a side (the Batch 9 ledger’s “not in Utz” was wrong), now in the note. Utz article read at https://www.gmth.de/zeitschrift/artikel/1132.aspx.
- schubert-impromptu-gflat, “The year of Winterreise” (t = 250): kept with new sources. IMSLP: 1827 for D 899, D 935 and Winterreise; Utz’s note 13 (not 14) for the two phases, February and October 1827. “Six flats become one sharp” (t = 140): kept; IMSLP gives Nos. 3–4 first published 1857 and a pencil instruction on the holograph (attributed to Carl Haslinger) to transpose No. 3 to G.
- sibelius-symphony-2: “High time to travel” (t = 160) rewritten, 1900 letter quoted in Oramo’s LA Phil note (Carpelan penniless, found a patron; Italy end of January 1901); the old “raises the money for a mountain villa” and the Rapallo sketch duplicated by the t = 98 note are gone. “Straw on the haystack” (t = 1530): kept; Kajanus’s sentence verified in Oramo (LA Phil), with the Society’s shorter version. “A crushing protest”: kept; Oramo’s translation is “broken-hearted protest”. “What Finland needed in 1902” (t = 560): corrected. The nickname “Symphony of Independence” could not be sourced beyond Wikipedia and Classic FM and was removed; the note now rests on the Society page and Oramo (emblem of national liberation; Sibelius denied programmatic readings). “Don Juan at Rapallo” re-sourced to Oramo (sheet dated 2/19/01), “Strings after the brass” to Oramo for “Christus” (Florence). Decca booklet checked (birth date, Geloso Quartet, 25-year contract, Kingsway Hall 18–20 June 1958, LSC 2342; printed p. 40) and Serotsky’s note for four notes: all kept.
- satie-gymnopedie-1: nothing flagged to check; all five notes are score-aligned on the Mutopia transcription. No change.
- Batch 9 spot-checks (kept unless noted): richard-strauss-till-eulenspiegel “A good laugh” (Dotsey), “Dainty courtesies”, “A refusal, then a vow”, “A grimace from afar”, “Whistling a street tune” and “A strangled clarinet” (labels 12–26 in Hepokoski, Table 1, with Whittall’s translations: read); rimsky-korsakov-scheherazade-festival “Guests from other tales” (My Musical Life, pp. 247–248: read) and “A summerhouse full of fingerings” (pp. 115–117 and 226–227; changed “buys” to “obtains”, the memoir’s word); scheherazade-kalendar “A violinist who taught Stern” (JTA obituary); schoenberg-verklarte-nacht-side-2 “Nature and feeling, not a plot”, “Hissed in Vienna” and “Under the composer’s supervision” (Capitol sleeve OCR: “hissed and caused riots and fist fights”; “prepared under the personal supervision of the composer”); sibelius-finlandia-stokowski-1921 (Klemetti, Stokowski and the titles: Society page).
- Not reached: schumann-kinderszenen-traumerei (Synofzik), schumann-piano-concerto-1 (Steinberg, RIPM), scriabin-etude-op8-12 (White House page), shostakovich-5 (Robinson, DSCH, Westminster record), Rimsky Prince notes, schubert-winterreise-leiermann; the Schubert 8 notes whose evidence is only “described at” Wikipedia for score passages; Newbould 1992, Kreissle and the Deutsch Erinnerungen were not opened.

### Batch 10 (Vivaldi, Tchaikovsky Piano Concerto No. 1)

- vivaldi-spring-allegro, “Spring in France” (t = 40): corrected, re-sourced. Everett, Vivaldi: The Four Seasons and Other Concertos, Op. 8 (Cambridge Music Handbooks, 1996; read in a scrambled OCR copy at dokumen.pub, page numbers not recoverable; “eleven out of the sixteen pertinent occasions during the period 1736–63” confirmed by Open Library full-text search of the Internet Archive copy): Corrette’s motet <i>Laudate Dominum de coelis</i> (1765; the spelling is Corrette, not Corette) and Rousseau’s solo-flute version (1775). Pearlman’s Boston Baroque note opened and agrees.
- vivaldi-spring-largo, “The girls’ concerts of Venice”, and vivaldi-winter-allegro, “Faster than a copyist”: kept. De Brosses, letter XVIII, 29 August, checked in the Wikisource text of the 1858 Babou edition, vol. 1, pp. 141–148 (forty girls, white habit and pomegranate flowers, the Pietà his favourite and first for symphonies; “plus promptement qu’un copiste ne le pourroit copier”). Evidence now names the edition. Year 1739 from the volume title (1739–40 letters), not from the letter.
- vivaldi-spring-finale, “A first opera in Vicenza”: kept; Talbot (Treccani) opened: 1713, first opera and oratorio entirely his own, May at Vicenza to shield the debut, success, <i>La vittoria navale</i>. “The Seasons in print”: kept; Talbot, IMSLP (Le Cène 1725, Morzin dedication), Everett (music Morzin already possessed), Pearlman (no autograph).
- vivaldi-winter-largo, “A tight chest” (t = 85): corrected. The note now rests on Vivaldi’s letter to Bentivoglio of 16 November 1737, read in Heller, The Red Priest of Venice (1997), Appendix, letter 5, pp. 287–288: no Mass for twenty-five years, “ailment from which I have suffered from birth”, three departures from the altar after about a year of saying Mass. Talbot’s 1706 date (end of the Pietà Mass benefice) is no longer in the text; “strettezza di petto” and the 1703 ordination stay (Talbot).
- tchaikovsky-piano-concerto-1-allegro: “Boston, 1875”, “Rubinstein plays it himself”, “Three versions of the concerto”, “Taneyev’s name struck out”, “Rubinstein says no”, “A singer in Ukraine”, “Piano passages by force”: all compared with the Tchaikovsky Research page (fetched with `?action=render`) and kept; no change.
- tchaikovsky-piano-concerto-1-finale: “Bülow’s one comment” kept. “A second folk song”: kept, evidence adds the Tchaikovsky Research page on the Fifty Russian Folksongs (arranged August–September 1869; No. 30, “a variant of this tune may have been used as the second subject”). “Shorter and better”: corrected. The letter to Ziloti says he “altered der verfluchte Stelle” (“the accursed place”); it does not say he cut it.
- Batch 10 spot-checks, kept: tchaikovsky-6-adagio “A blizzard, said Balanchine” (Queensland Symphony resource: fast fragments of earlier themes, brass “waves of sound” driven by trombones and tuba); plus the seven Piano Concerto notes above.
- Unresolved: Newbould’s and Everett’s books were not read directly; the Hanslick and Everett page numbers are not given.

## Secondary-source check (Batch 5: Mahler)

Agent HallSecondaryG. Scope: every Batch 5 note resting on Wikipedia or on Lew Smoley’s guides, and the second-hand quotations. Twelve listen files changed (listed below); all twelve print `ok` from `tools/validate.mjs`. Sources opened in this pass: Stephen Hefling’s Universal Edition introduction to *Das Lied von der Erde* (the public page truncates it behind “Show more”; read in full through the browser) and Reinhold Kubik’s note to the Ninth facsimile; Natalie Bauer-Lechner, *Erinnerungen an Gustav Mahler* (1923, Internet Archive OCR); Bettie Jo Basinger’s Utah Symphony guides to the Second, Fourth, Fifth and Ninth (read in full); Erik Ryding’s Library of Congress essay (read in full); the Berlin Philharmonic note by Tobias Bleek; the Wiesbaden Stadtlexikon; Christian Utz’s article; and scores from IMSLP (Second #415748, Hofmeister reprint; Fifth #111956, Peters; Ninth #353450; Das Lied, Universal Edition vocal score in French, #177005), viewed page by page for the markings cited. Smoley’s guides are speech-to-text transcripts (the guide to the Fifth’s Scherzo prints “lender”, “ghetto string figuration”, “buguero”); a Smoley sentence is kept only where the score or a second source agrees, or is named as Smoley’s.

### Second-hand quotations and Wikipedia-only notes

- mahler-4-ruhevoll, “Cheerfulness with something eerie” (t = 960): corrected, re-sourced. Bauer-Lechner, 1923, p. 171, entry “Leseprobe am 12. Oktober 1901” (the German is in the evidence; translation ours). Basinger’s “October 1901” becomes the read-through of 12 October.
- mahler-2-im-tempo-des-scherzos, “Mahler on the final climax” (t = 2000): corrected, re-sourced. The remark is Bauer-Lechner, 1923, pp. 23–24 (“Deutung der Zweiten Symphonie”), not a letter; Wikipedia’s own footnote points to her *Recollections*. Attributed, translated and the Wikipedia source dropped.
- mahler-5-trauermarsch, “Within an hour of death” → “A brush with death” (t = 235): corrected. The doctor’s “within an hour” rests only on an uncited Wikipedia sentence and was dropped; Basinger (Mahler’s own description next morning, two operations, sanatorium) and the Mahler Foundation’s health record (Hochenegg, 24 February and 4 March 1901).
- mahler-5-trauermarsch, “Cologne, 18 October 1904” (t = 500): kept with new source. The Peters score prints the part numbers (I at the Trauermarsch p. 3, II at the Scherzo p. 118, III at the Adagietto p. 178; “2.” sits inside Part I); Wikipedia dropped.
- mahler-das-lied-schoenheit, “A conductor who stayed with Mahler” (t = 360): corrected. The Wiesbaden Stadtlexikon gives Danzig, 3 July 1880, the 1912 appointment and “Symphony of a Thousand” 1913, “Gustav Mahler Week” 1920 and 1921. The claims that Schuricht heard the Sixth’s première in 1906, that April 1921 was the “first German Mahler festival” with this work, and the “1933–45 ban” rested on Wikipedia only and were removed; the Stadtlexikon says weeks in 1920 and 1921. Amsterdam, 5 October 1939: Internet Archive metadata; Ryding for the suppression of Mahler’s music in Germany.
- mahler-das-lied-abschied, “Not written in 1907” (t = 100): kept. Hefling’s introduction read in full: Alma, Roller, the Börsenblatt of 5 October 1907, “largely if not entirely during the summer of 1908” (text now says “indicate … largely”).
- same file, “He never heard it” (t = 1580): kept with new source (Berlin Philharmonic note for 20 November 1911; Hefling for the title sheet and the number 9); Wikipedia dropped.
- same file, “How to conduct that?” (t = 625): kept; Walter’s words rest on the Mahler Foundation page and, behind Wikipedia’s footnote, on La Grange, vol. IV, p. 510 (not opened). Walter’s own text was not found.
- same file, ““For the first time”” (t = 555): kept on the Mahler Foundation history page alone (Rosé to Urlus, German quoted); Urlus’s own account was not found.
- same file, “Mahler’s fear of the finale” (t = 895): removed. “Won’t people go home and shoot themselves?” reaches Wikipedia through an unopened SCO programme note; no primary or scholarly source found.
- same file, “The line Mahler left out” (t = 1535): removed. Its Bernstein reading comes from a 1972 film through Wikipedia, and the note repeated “Mahler makes the earth green” (t = 1470, Hefling, kept).
- mahler-das-lied-einsame, “The première, and a baritone” (t = 525): kept with new source. Bleek (Walter, Munich, 20 November 1911, Cahier and Miller); Universal Edition vocal score, French edition, p. 26, prints “peut éventuellement être chanté par un Baryton” at the contralto’s entry (page image viewed).
- mahler-das-lied-jugend “Toblach, summer 1908”, -trunkene “Face to face with nothing”, -einsame “Mahler needs his walks”, -trinklied “Three blows of 1907”: kept; every sentence found in Hefling’s introduction (83 paraphrases of 38 poets, seven chosen, letters of 18 July and early September 1908, “vis-à-vis de rien”).
- mahler-das-lied-trinklied, “Du aber, Mensch” (t = 345): corrected. “Mahler quotes the phrase in the first movement of his Ninth” rested on Smoley alone and was removed; Utz now supplies bars 298–299, the Leidenschaftlich at bar 291 and the intensification to bars 353–368.
- mahler-9-andante-comodo, “A phrase from Das Lied” (t = 320): removed (the same Smoley-only quotation; absent from Basinger, Kubik and Wikipedia’s list of allusions). “One cry from the whole orchestra” (t = 740) loses its “Du aber, Mensch” clause.
- same file, “A waltz for lost youth” (t = 490): kept with new source. Kubik’s note (three citations, bars 148ff., 267–271, 436ff.; golden hall of 1870; Conservatory in the same building). The Wikipedia/Barford credit and Smoley’s “slows it to a remembered pace” are dropped.
- same file, “A presentiment of death” (t = 945): corrected. Kubik quotes Berg to his wife (“appears again and again … all that is earthly and dreamy culminates in it”); “the presentiment becomes certain knowledge” came from Smoley and is gone.
- same file, “Like a funeral procession” (t = 1015): corrected. The score (pp. 47–48) prints *Wie ein schwerer Kondukt* over timpani and a staff for “3 tiefe Glocken”; Basinger agrees (“wie ein schwerer Kondukt”, bells). “First and only time” (Wikipedia) dropped.
- same file, “Whose heartbeat?” (t = 1085): corrected. Bernstein’s suggestion is reported by the Mahler Foundation (and by Wikipedia from a Chicago Symphony note, not opened); “no document supports it” was Smoley’s opinion and is gone.
- same file, “Birdcalls” (t = 1390): corrected. The score (p. 54) is marked *Plötzlich bedeutend langsamer (Lento) und leise, Misterioso* with piccolo, flute, oboes and solo violin; “birdcalls” and Berg’s “vision of the hereafter” are Floros through Wikipedia (not opened), so the note now says commentators hear birdcalls and drops Berg.
- mahler-9-andante-comodo, “Walter returns to the Musikverein” (t = 80) and “Two machines beside the timpani” (t = 440); -adagio “Walter’s melting cloud” (t = 560); -landler “A trial in rehearsal”, “Three Ninths in Vienna”, “Seventy minutes”, “The dance is over”; -rondo-burleske “Vienna before the Anschluss”, “Counterpoint, in Walter’s words”, “A bewildered refugee in Paris”: kept. Every quotation and figure found in Ryding. Walter’s 1936 book itself was not opened.
- mahler-9-landler, “A fish sermon in the horns” (t = 200) → “The fish sermon, quoted”: corrected. Basinger puts a brief “Fischpredigt” reference at the start of the coda; Smoley puts it in the first waltz, played by two horns. The note keeps only the quotation, as a whole-movement note.
- mahler-9-adagio, ““Welt! Lebe wohl!”” (t = 1010): corrected. The Mahler Foundation captions the last page “Toblach, Thursday, 02-09-1909”; Kubik says the draft is dated 1 September 1909 at its end. The note says “the first days of September 1909”.
- same file, “The mocking tune becomes a prayer” (t = 120): corrected. It said the *second* theme quotes the Rondo-Burleske; the Foundation and Smoley say the movement’s hymn grows from the E♭ clarinet’s mocking tune of the Rondo-Burleske’s middle section, and Basinger puts the later allusion to its second episode in the central portion. “A hymn tune, and heaven” (Urlicht, Kubik and Basinger), “A bassoon below the hymn”, “An enormous empty space”, “Der Abschied in the English horn” (Kubik, Basinger) and “The day is fine, one last time” (Basinger) now cite Basinger or Kubik beside Smoley.
- mahler-2-im-tempo-des-scherzos, “The lord of the harvest”, “The soprano takes up the plea”: kept; Wikipedia replaced by Basinger (she prints Klopstock’s stanzas and Mahler’s continuation).
- mahler-2-urlicht, “A folk poem from 1808”: kept, Wikipedia sentence dropped (Banks’s catalogue already gives vol. II, 1808, p. 11, “Mündlich”). “Suffering bends the tune”, “The angel on the road”, “Strings finish the sentence”: kept with the score (Hofmeister reprint pp. 129–133: markings, five flats then three sharps, D♭ major, *gänzlich ersterbend*).
- mahler-2-in-ruhig-fliessender-bewegung, “The song without its singer” (t = 150): corrected. “First 131 bars” is Smoley’s number alone; the note now says the scherzo is the fish-sermon song without its singer (Basinger: orchestral version of the song’s material plus a trio).
- mahler-4-himmlische-leben “A song from Hamburg”, -scherzo “Böcklin’s fiddling skeleton”, -ruhevoll “Ten days at Aussee”: kept; the dates (10 February and 12 March 1892), Alma’s claim and the ten days are in Basinger.
- mahler-4-ruhevoll “Saint Ursula smiles” and -scherzo “Death takes the violin”: kept on Basinger, who prints Walter’s letter to Schiedermair of 5 December 1901; the letter itself was not found. mahler-4-ruhevoll “Links to the finale”: kept on Basinger’s printed passage of Mahler’s letter to Georg Göhler (the letter itself was not found; Basinger’s “Göhler’s 1911 essay” cannot be right, since Mahler died in May 1911, and the note gives no date).
- mahler-5-scherzo “A man in the full light of day”, “Themes side by side”: kept on the Aspen note (Bauer-Lechner, March 1901); these conversations are not in the 1923 *Erinnerungen* (they belong to the later *Mahleriana*), so the quotations were not traced further. “Fifty years too early”: kept; Peoria’s essay and Smoley’s transcript give the same passage of the letter to Alma independently.
- mahler-5-adagietto “Mengelberg’s note about Alma”: kept; the German annotation is confirmed at alma-mahler.com (Semmering archive). “A poem with the music”: kept (Mahler Foundation; Alma’s letter to Mengelberg not opened). “Seven minutes or ten”: kept (Foundation: about seven minutes for Mahler and Mengelberg; Basinger: seven to nine).
- mahler-5-trauermarsch “A trumpet alone”, “A military signal”, “Violins beside cellos”, “The march breaks open”, “The signal comes back”: kept with the Peters score (pp. 3, 7, 20, 33 viewed: key signatures, Schwer, rehearsal 2 and 12) and Basinger (signal, Haydn, Mendelssohn, Beethoven’s motto, dance-orchestra strings).
- mahler-5-sturmisch-bewegt (spot-check of the score at pp. 70, 91): E♭-minor passage with cor anglais and timpani roll at p. 70; E-minor signature at p. 91, rehearsal 22, with *Schalltrichter auf*. No change.
- Kept unchanged, resting on Smoley’s guide alone or with a Mahler Foundation composition page that paraphrases the same facts; no independent source found and no score page checked: mahler-2-im-tempo-des-scherzos t = 205, 275, 380, 425, 530, 810, 945, 985, 1040, 1340, 2100; -in-ruhig-fliessender-bewegung t = 240, 270, 360, 465, 655; -urlicht t = 32; mahler-5-trauermarsch t = 365, 596; -sturmisch-bewegt t = 70, 135, 205, 250, 340, 475, 525, 565, 625; -scherzo t = 55, 200, 455, 535, 595, 645, 680, 725, 765, 810, 862, 905; -adagietto t = 60, 297, 345; -rondo-finale t = 150, 200, 285, 410, 500, 575, 636, 690, 745; mahler-9-andante-comodo t = 365, 555, 660, 805, 980, 1195; -adagio t = 305, 655, 880; -landler t = 175, 296, 390, 565, 645, 800, 885; -rondo-burleske t = 85, 120, 220, 338, 435, 490, 540. The riskiest are the identifications of other works (the Fifth’s trumpet rhythm and Pan’s march in the Rondo-Burleske, the Fourth’s fiddler in the Ländler, the *Kindertotenlieder* motive in the Adagietto, *Revelge* in the Stürmisch). The transitions and orchestra timelines of the Fifth’s files cite Smoley in the same way.
- Not reached: Walter’s 1936 book (every Walter quotation comes through Ryding or Basinger); a page-by-page score check of the 35 notes that cite a score page beside Smoley in the Second’s finale, the Fifth’s Stürmisch, Scherzo and Rondo, and the Ninth’s Ländler and Rondo-Burleske (only the pages named above were viewed; the markings and key signatures seen matched every note compared); the Manton (Yale) notes of the Mengelberg 1926 Adagietto file.

## Secondary-source check (batches 6 and 8)

Agent HallSecondaryC. Verdicts: kept with new source / corrected / removed. All 19 changed listen files print `ok` from `tools/validate.mjs`. Scratch copies of scores and PDFs sat in /tmp only. Sources were opened unless marked “not opened” or “excerpt seen” (an Internet Archive full-text excerpt through Open Library’s `search/inside.json`; page not seen).

### Batch 6

- mendelssohn-violin-concerto-allegro, “Chromatic waves, then calm”: corrected. “Frenetic” (Steinberg via Wikipedia) dropped; the score pp. 6–8 (viewed: accidentals throughout, swell and fall marks) and Tovey (Essays in Musical Analysis, vol. 3, p. 179, Internet Archive dli.ernet.28887: transition theme given out by the orchestra, developed by the solo violin) now carry it.
- same file, “A tune without peace”: kept with new source. Lady Wallace’s 1863 translation (Project Gutenberg 50473) of the letter to David, Berlin, 30 July 1838; Henle HN 720 preface (Scheideler) gives the German.
- same file, “With fire”: corrected. Henle HN 720 (source list: Kraków, Mendelssohn Aut. 39, completed 16 September 1844; preface: tempo mark altered from Allegro con fuoco to Allegro molto appassionato, cadenza expanded). The “resurfaced in 1989” date (Wikipedia only) and “more than a hundred details” are removed.
- same file, “I am just groping around”: kept, re-dated and re-sourced. The sentence is in the letter of 17 December 1844 (Henle preface: the long letter explaining the revisions; Westchester Philharmonic and La Scena Musicale quote the sentence with the cadenza question). Letter itself not opened (Eckardt 1888 and the Sämtliche Briefe were not reachable).
- same file, “David plays; Gade conducts”: corrected. Dörffel, Geschichte der Gewandhausconcerte (1884), pp. 109–110: last concert of the winter, 13 March 1845; Gade the concerts’ director; Mendelssohn conducted none of that winter’s concerts and lived in Frankfurt from 30 November 1844. “Mendelssohn is ill” (Wikipedia, Tobias) removed: Dörffel gives no illness.
- same file, “A model for later concertos”: corrected. Tovey, pp. 179–180 (“the original type of the majority of modern concertos”; cadenza “grafted” on to the development); Layton, ed., A Companion to the Concerto (1988), excerpt seen, for Tchaikovsky. The Sibelius claim and “few composers leave the cadenza to be improvised” (Wikipedia, Keefe, Kerman) removed as unsupported.
- same file, “Joachim’s toast”: removed. SCO page and Wikipedia give no source; German Wikipedia traces it to H. E. Jacob’s Mendelssohn biography with “soll gesagt haben”; no primary text found.
- mendelssohn-violin-concerto-andante, “A song without words”: corrected and retitled “Breadth and dignity”. The Songs Without Words comparison (Wikipedia citing a Cambridge volume, not opened) is replaced by Tovey, pp. 180–181 (“true breadth and dignity”; the middle episode’s “agitation and anxiety”).
- same file, “David wants a showpiece”: corrected and retitled “David asks for brilliance”. The OMI publisher summary is replaced by Mendelssohn’s own words to David (1839, “You ask that it should be brilliant, and how can anyone like me do this?”), as quoted by Tobias (Indianapolis); letter not opened. “Takes six years to answer” removed.
- mendelssohn-violin-concerto-finale, “Mendelssohn takes the baton”: corrected. Dörffel p. 111: the third concert of 1845–46, 23 October, Mendelssohn leading Schumann’s B♭ symphony, David playing the concerto “zum zweiten Male”. The illness claim is removed.
- mozart-40-andante, “Three symphonies in six weeks”: corrected and retitled. Mozart’s catalogue dates 26 June, 25 July, 10 August 1788 (Jahn’s table, Gutenberg 43413; BL Zweig MS 63 record); Tobias’s “28 June” is not in the catalogue.
- same file, “Musopen’s Kickstarter”: kept with new sources (Farber, San Francisco Classical Voice, 2012: Dunn, 2006, $68,630, 1,276 backers; Seattle Star, 2012: $68,360). Figures differ between sources, so the note says “more than $68,000”. Kickstarter’s own pages returned 403.
- mozart-40-menuetto, “Why the Trio is called a Trio”: kept with new sources (Harrap’s Illustrated Dictionary of Music, 1990; Collins, Classical Music, 1997; excerpts seen). The Lully and “two oboes and a bassoon” detail (Wikipedia via Randel) removed.
- same file, “An entry in July”: corrected. Catalogue dates from Jahn’s table; “Three very different orchestras’ evenings” became “symphonies”.
- same file, “Was it ever performed?”: rewritten as “A grand symphony in 1791”. Deutsch’s Documentary Biography prints the Tonkünstler-Societät announcement “A Grand Symphony composed by Herr Mozart”; Keys says Salieri conducted (excerpts seen). The announcement does not name the symphony, and the note does not say which.
- mozart-40-finale, “Shockingly voluptuous”: kept; the quotation now carries its ellipsis (the sentence runs on through Don Giovanni and Pamina’s aria; Steinberg, The Symphony, excerpt seen). Rosen’s book not opened.
- same file, “The most discussed symphony”: corrected. Zaslaw’s sentence is in Mozart’s Symphonies (Clarendon, 1989; excerpt seen). Jahn’s “a work of pain and grieving” (Tobias) does not appear in the Townsend translation; the note now quotes Jahn’s own “Sorrow and complaining take the place of joy and gladness” and “a wild merriment that seeks to drown sorrow” (Life of Mozart, vol. 3).
- mozart-467-andante, “The Elvira Madigan concerto”: kept with new sources (Hemming, Discovering Music, 1974; Whitburn, Top Pop Albums, 1993; excerpts seen). Allen Hughes (NYT, 1970) not reached; Britannica, Ebert and the Swedish Film Database returned 403. The 1967 date was not checked against a primary record.
- mozart-clarinet-allegro, “The lost autograph”: corrected with the primary text: Constanze to André, 31 May 1800 (Tift, 2002): Stadler says the portmanteau was stolen; others say it was pawned for 73 ducats.
- same file, “A friend who never paid”: kept, re-worded to attribute the claim to the widow and her sister; the 500 florins rest on Dotsey alone (“allegedly”) and could not be traced to a primary letter.
- mahler-kindertotenlieder-in-diesem-wetter (and -anderson), “What Mahler told Guido Adler”: kept; evidence now names Reik (1953), Russell (1991) and the Mahler Foundation. The Adler letter itself was not found; Reik and Russell seen only as excerpts.
- same files, “A cello melody from the Third”: kept; Dorschel’s article (Musikfreunde 25, 2012/13, no. 5) named as the source, not opened; the sentence is as given on the Mahler Foundation page. I did not compare the scores of the Third’s finale and song 5.
- mahler-kindertotenlieder-wenn-dein-muetterlein (and -anderson), “Don’t tempt Providence”: corrected. “Two weeks old” (Interlude/Hefling via Wikipedia) removed. Alma’s words as quoted by Georg Predota (Interlude) and in Kennedy, Seckerson and Johnson (excerpts seen): she could not understand bewailing children’s deaths “hardly one hour after having kissed and fondled them”. The memoir itself was not opened.
- Spot-checks (10), all kept: Kindertotenlieder “A publisher at the hotel door” (Banks catalogue prints the German of the 28 November 1904 letter and the English “eager to acquire my new Lieder and Ballads”), “A sold-out Musikverein”, “The one song printed alone”, “A chamber orchestra in a small hall”, “One cycle, not five numbers” (Banks, KtL.htm and KtLprints.htm); “Rückert’s two children” (Kubik, UE); Ich bin der Welt “An August at Maiernigg”, “Time flees”, “A manuscript for Guido Adler” (Kubik, UE: draft 16 August 1901; fuga; title-page dedication); Mozart 40 “Ten days at home” and “A room with a garden” (Bauer–Deutsch 1079 and 1077, Digital Mozart Edition: German and English read); K. 467 “Mozart at the Burgtheater” (Chan-Hartley, NAC); “Four discs for one concerto” and “Studio 1, 12 January 1937” (Bolig pp. 505–506: DB 3099–3102, cadenza on Part 4; LSO discography session 0158, COLH 67 November 1959).

### Batch 8

- ravel-bolero-ravel-1930, “Ravel’s own metronome mark”: removed. The Durand 1929 full score (Commons PDF, p. 1 viewed) prints ♩ = 72; the “printed 76 crossed out, 66 written in” claim rests on Wikipedia citing Orenstein p. 541 and Woodley, neither reachable.
- same file, “A commission for Iberia”: corrected and retitled “Fandango, then Boléro”. Cornejo’s chronology (13 July 1928) carries it; the claim that Rubinstein asked for an Iberia orchestration (Wikipedia only) is removed.
- same file, “One finger at the piano”: kept with new source. Samazeuilh’s recollection in Orenstein, Ravel: Man and Musician and A Ravel Reader (“a number of times without any development”, excerpts seen). The “insistent quality” clause was not found in an excerpt.
- same file, “Not so fast”: kept with new source. Coppola’s account in A Ravel Reader (“increased the tempo by a fraction. Ravel jumped up…”, excerpt seen); Cornejo confirms Ravel attended. Cornejo dates the Coppola session 13 January, Phonobase 8 January; the note gives no date.
- same file, “Priam and Mule on saxophones”: corrected. Phonobase (Polydor 566030–31; Mule soprano, Priam tenor); the score pp. 14–18 (viewed: tenor at rehearsal 6, then sopranino and soprano parts). “Mule also plays the première” removed: sources disagree.
- same file, “Four instruments, one organ”: kept with new source. Score p. 22 (viewed: two piccolo staves signed for G and E, celesta on two staves) and Beavers ¶¶4.2, 6.2 (“evokes the sound of an organ stop”); Wikipedia dropped.
- same file, “Orchestral tissue without music”: kept with new sources. Calvocoressi’s Daily Telegraph interview, 11 July 1931 (Nichols 2011, Cambridge Companion to Ravel, Orenstein; excerpts seen) and Nin via Mawer 2006, p. 219 (excerpt seen).
- same file, “A tavern in Spain”: corrected. “Leaps onto the long table” replaced by the scenario as summarised in the Cleveland note (a woman stamping the rhythm on a table); Cornejo for date, cast, Ravel in Madrid.
- same file, “A factory in the background”: kept, shortened. The “open-air stage” sentence (Wikipedia only) removed; the quotation rests on the Cleveland note (Tanyeri), the Evening Standard itself not opened.
- same file, “Toscanini takes it faster”: corrected. “Refuses to acknowledge the ovation” (Wikipedia citing Orenstein 1991) removed; Cornejo (4 May 1930, composer present, vexed); the exchange in Rink, ed., Musical Performance (CUP 2002, excerpt seen). The closing line “Then do not play it” follows Dunoyer 1993, p. 97, not opened.
- same file, “A dance hall for the record”, “An oboe d’amore”, “A flute and a muted trumpet”, “A publisher’s death”: spot-checked and kept. Cornejo (Bal Bullier, Wolff, Menuet antique; 23 August, 15 and 16 October 1928, 20,000 francs) and Phonobase verified; Beavers ¶6.2 verified. The t = 0, 460, 660, 912 and 932 notes still cite Wikipedia beside the score for the instrument order; not changed.
- ravel-miroirs-noctuelles, “Ravel on his new harmony”: kept with a primary source. Ravel’s notes dictated to Roland-Manuel, 10 October 1928, BnF Gallica btv1b10073212x, sheet 6 (read from the Commons images): “un changement assez considérable pour avoir décontenancé les musiciens les plus accoutumés jusqu’alors à ma manière”.
- ravel-miroirs-oiseaux-tristes, “Ravel on his birds”: corrected. Sheets 6–7 of the same manuscript: the piece is “le premier en date de ces morceaux et le plus typique de tous” (not “most significant”, which came from French Wikipedia), and “des oiseaux perdus dans la torpeur d’une forêt très sombre aux heures les plus chaudes de l’été”.
- ravel-miroirs-une-barque, “A line from Julius Caesar”: kept, Wikipedia dropped. Fyr ¶5 (Orenstein 2003, p. 35) for Shakespeare; “by analogy” via Abramovitch’s Indiana thesis (2012). The BnF draft breaks off at the title with a note to explain it, so the Shakespeare and “analogy” passages come from the text published in La Revue musicale, December 1938, which was not opened.
- ravel-miroirs-alborada, “A ballet for Diaghilev”: corrected and retitled “A ballet at the Alhambra”. Cornejo (17 May 1919 première, Rhené-Baton; 18 July 1919, Alhambra programme) and Nichols’s chronology (the Ballets russes perform Menuet pompeux, Alborada and Fauré’s Pavane as Les Jardins d’Aranjuez, excerpt seen). Diaghilev’s “commission” and the bassoon solo (Wikipedia only) removed; I did not open the orchestral score.
- rachmaninoff-prelude-op32-10, “Rachmaninoff’s favourite prelude”: corrected and retitled “A painting behind the Prelude”. The Moiseiwitsch “favourite” anecdote (Wikipedia) removed. The Böcklin link rests on Giltburg’s notes (reached only as a search extract) and Bertensson and Leyda, p. 296 (not opened); unresolved.
- richard-strauss-don-juan-coates-1922, “Color is everything”: corrected from the primary text. Hanslick Online (Austrian Academy of Sciences) prints the Neue Freie Presse review of 12 January 1892 on the Philharmonic concert of the previous Sunday: “Die Farbe ist ihnen Alles, der musikalische Gedanke nichts”; ladies and young Wagnerians recall the piece with “ein wollüstiger Schauer”. The LA Phil note’s “1890” and its “Wagner disciples exalting the piece” are wrong. The old text had Hanslick “watching” disciples.
- Spot-checks, Batch 8 (six made, not ten): ravel-bolero-ravel-1930 “A dance hall for the record” and “A publisher’s death” (Cornejo’s chronology: Bal Bullier, Wolff, Menuet antique; 23 August, 15 and 16 October 1928, 20,000 francs), “A flute and a muted trumpet” and “Four instruments, one organ” (Beavers ¶¶4.2, 6.2), rachmaninoff-etude-op39-5 “The pictures he kept to himself” (Norris, Hyperion CDA68188: letter to Respighi of 2 January 1930), rachmaninoff-prelude-op32-10 “All twenty-four keys” (same note), ravel-miroirs-oiseaux-tristes “Viñes at the Salle Érard” (Cornejo: première of 6 January 1906, Viñes, Salle Érard). All kept. Not rechecked: the DAHR-based Rachmaninoff session notes, rameau-gavotte-six-doubles, ravel-gaspard-le-gibet, ravel-miroirs-vallee-des-cloches, ravel-tombeau-menuet, Don Juan’s Werbeck-based notes.

### Not reached

- Batch 6: Mahler Kindertotenlieder “Berlin, June 1955” (Naxos rear cover, not reopened), mozart-requiem-communio (“Constanze’s version”, “Brahms on Süssmayr”), mozart-467 Allegro and Finale notes other than those named above, and the Mendelssohn “A few days in July” letter (1839; Ledbetter’s quotation not compared with a primary text).
- Batch 8: the Rachmaninoff DAHR/Densmore session notes, Rameau, Ravel Gaspard, Vallée des cloches, Tombeau, Alborada’s other notes; rachmaninoff-polka-vr’s existing *Scherzpolka* Op. 303 claim; the Boléro t = 0, 460, 660, 912, 932 evidence lines (Wikipedia beside the score).
- Source gaps: Eckardt’s edition of the Mendelssohn–David letters, Mendelssohn’s Sämtliche Briefe, Reik, Russell, Alma’s memoir, Orenstein and Mawer (excerpts only), Dunoyer, Bertensson and Leyda p. 296, Jahn’s German original, and La Revue musicale (December 1938) could not be opened.

## Secondary-source check (Batch 9: Schumann, Scriabin, Shostakovich 5, Rimsky-Korsakov Prince, Winterreise Leiermann)

Agent HallSecondaryH. Files: schumann-kinderszenen-traumerei, schumann-piano-concerto-1, scriabin-etude-op8-12, shostakovich-5-allegretto, shostakovich-5-largo, shostakovich-5-moderato, rimsky-korsakov-scheherazade-prince, schubert-winterreise-leiermann. All changed files print `ok` from `tools/validate.mjs` (the Leiermann file is unchanged). Cue text is capped at 55 words by the validator; the rewrites were cut to fit. Scratch copies of PDFs and OCR text sat in /tmp only. Sources opened unless marked “not opened”. Verdicts: kept (with new source) / corrected / rewritten / removed.

### schumann-kinderszenen-traumerei

- “Schumann’s little thing” (t = 28, spot-check): kept. Synofzik, 175 Jahre Kinderszenen (Zwickau, 2013), item 1, read: diary entries of 17, 22, 24 and 25 February 1838 with the German wording; 24 February 1838 is a Saturday.
- “Thirty little droll things” (t = 70): kept, second source added. The letter of 17 March 1838 (Jugendbriefe, p. 277, as printed in Synofzik item 3) is also in May Herbert’s English translation, Early Letters of Robert Schumann (1888), pp. 264–265, read in the Internet Archive OCR: “about thirty quaint little things, from which I have selected twelve”; our translation of “putzige” stays “droll”. The 1885 German Jugendbriefe scans have unusable Fraktur OCR, so the German was not compared directly.
- “Left out of the early programmes” (t = 110) and “Pictures, poems and a film” (t = 170): kept. Synofzik items 15–17, 33 and 38 read and match (Marie Wieck, Cosel-Palais, 18 January 1853, six pieces; Nanette Falk, Vienna, 17 March 1857, three pieces; Träger and Zick 1886; UFA 1943–44; Medem 1877, four silhouettes). Item 16’s cross-reference “vgl. 13” is evidently a slip for 15. No better source found; the catalogue is the Zwickau museum’s, by its curator, and prints the programmes’ contents.
- Header comment citing Repp and Shoda & Adachi: no cue draws on them; left in place.

### schumann-piano-concerto-1

- “A name in the oboe tune” (t = 60): kept on Steinberg (BSO) alone. Wikipedia repeats the C–H–A–A reading without a source. I rendered full-score pp. 1–2 (IMSLP #51508) but could not read the oboe pitches reliably at that resolution; the t = 0 note’s C–B–A–A stands on Steinberg. Carnaval’s “Chiarina” (No. 11) and the “Chiara” of Schumann’s prose were not rechecked.
- “Four years in the drawer” (t = 158): kept. Schumann-Portal (Irmgard Knechtges-Obrecht, https://www.schumann-portal.de/op-54-1267.html) agrees: May 1841, no public performance and no publisher, reworked in early summer 1845.
- “Schumann on concertos” (t = 205): kept on Steinberg’s translation alone. Neither the German nor the letter’s date was found (Weissweiler’s edition not opened; the English translations of Litzmann and of Storck’s Letters of Robert Schumann (1907) were searched without finding it; the OCR of the 1885 Jugendbriefe is unusable).
- “Clara plays it twice” (t = 309): corrected. Steinberg gives 8 August 1841 and Mendelssohn conducting; Litzmann (Clara Schumann: An Artist’s Life, trans. Hadow, 1913, vol. 1, p. 326 n. 1) and Schumann-Portal both give 13 August 1841, at a Gewandhaus rehearsal of the B♭ symphony (Litzmann), with Clara’s “I played it twice, and thought it magnificent!” (German: “Ich spielte sie aber zwei mal, und fand sie herrlich!”). Neither names the conductor, so Mendelssohn is dropped. Note rewritten around Clara’s complaint about the empty hall.
- “A big bravura piece” (t = 520), now “A great bravura piece”: rewritten on the primary. Litzmann, vol. 1, p. 404: Clara’s entries of 27 June 1845 (“a beautiful last movement … a great bravura piece by him”) and 31 July 1845 (“as happy as a king”); Hadow’s wording is used.
- “Clara brings it to Dresden” (t = 572): kept; Schumann-Portal confirms 4 December 1845, Dresden, Hiller conducting and dedicatee.
- “A review in his own journal” (t = 625): kept. RIPM introduction read: founded 1834 by Schumann, resigned 1 July 1844. The 1846 review by F.W.M. was not opened (Steinberg only).

### scriabin-etude-op8-12

- “A White House workshop” (t = 90): rewritten. The White House page is an official source, and its transcript lists Bell, Weilerstein, Isbin and Pratt together as the four musicians the students learned from; the old line named only the other three as leading the day, which left Pratt out of the four. The note now has Mrs Obama’s “the best in the world” and her remark about Pratt’s hundred-dollar upright. The Commons description of the file gives 29:40–31:44 of the video for the étude. The transcript carries a release date of 26 October 2009 above remarks timed 2:22 p.m. on 4 November; the video date is 4 November.
- “The publisher has to wait” (t = 36, spot-check): not reopened; evidence is the Henle HN 1486 preface (verified in Batch 9).

### shostakovich-5-allegretto

- “The sarcastic Shostakovich” (t = 40): kept. Harlow Robinson’s BSO note read: “the sarcastic, ironic side of Shostakovich already familiar from the First Symphony and the Piano Concerto No. 1”. Single programme-note source.
- “Rodzinski takes it to America” (t = 140, spot-check): kept on Robinson’s BSO note (NBC Symphony broadcast, 9 April 1938). The DSCH page lists only Paris (14 June 1938) and “May 1940” New York under premieres abroad, so no second source confirms the 1938 broadcast.
- “A London hall in October 1954” (t = 200): kept, text reduced to “Walthamstow, in east London”. The only documentary source is the CiNii Books record of the 1997 Japanese reissue (Westminster MVCW-18008), which transcribes “Recorded: October 2 to 14, 1954, Walthamstow Hall, London”. Discogs (user-contributed) gives Walthamstow Assembly Hall and, for the Tchaikovsky Fifth, 2–3 October. The LP sleeve OCR (read) has no session data; the Eloquence page for the Rodziński set says only “mostly in London” from 1954. The Shostakovich session dates within the range remain unconfirmed.

### shostakovich-5-largo

- “Three days at the desk” (t = 80, spot-check): kept. DSCH’s English page quotes “I wrote the third part in three days” in the 1956 introduction to the score.
- “A shout and a howl” (t = 410), now “A cry and a wail”: corrected. The DSCH Russian page (https://shostakovich.ru/140ru) reads «пафос страдания в ряде мест доведён до натуралистического крика и вопля»; the English page’s “the spirit of suffering … shout and howl” loosens “пафос”. The “about twenty articles” and the overall positive reception match. Ostretsov’s article itself was not opened.
- “Can tragedy be Soviet?” (t = 590): kept; the wording matches DSCH’s English text of the 1956 introduction.

### shostakovich-5-moderato

- “Pravda attacks the opera” (t = 80, spot-check): corrected. “Shostakovich begins the Fifth the following spring” was wrong: the editorial is of 28 January 1936 and work began on 18 April 1937. Now “More than a year later, in April 1937”. “Unsigned” checked against the Russian Wikisource transcription of the Pravda text (no author given).
- “Work begins on 18 April” (t = 130): kept; the closing clause about “at least 20 September” is dropped. DSCH’s history (editors’ commentary) has work continuing to at least 20 September, while Robinson gives completion on 20 July 1937; the note keeps what both agree on (start 18 April; first three movements drafted quickly).
- “A first night in Leningrad” (t = 240, spot-check): kept; Steinberg’s diary quotation read in the DSCH page.
- “No title, no dedication” (t = 380): kept (Robinson, BSO). Single source.
- “Tchaikovsky’s ovation, remembered” (t = 470): removed, replaced by “Mravinsky lifts the score”. The elderly philologist who compared the evening with the première of the Pathétique rests only on Robinson’s BSO note; repeated full-text searches (English and Russian) found no other source for it. The new note uses the DSCH page’s witnesses: an unnamed contemporary (audience rising one by one, Mravinsky raising the score) and Lyubov Yakovleva’s diary (“he retaliated and retaliated well”).
- “The genesis of the individual” (t = 730), now “A lyrical-heroic symphony”: rewritten. Robinson’s quotation joins two statements. DSCH’s Russian page gives the “lyrical-heroic” sentence to Literaturnaya gazeta, 12 January 1938 (Пятая симфония Шостаковича), and “the shaping of the individual … man with all his experiences” to the 1956 score introduction; Robinson’s “sufferings” translates «переживания» (experiences) loosely.

### rimsky-korsakov-scheherazade-prince

- “A summer’s work” (t = 35, spot-check): kept. My Musical Life (Joffe, 1923; IMSLP #721391, read in full text), ch. XX, p. 247: finished in the summer of 1888. The November première rests on Glass (LA Phil) only; the memoir mentions Scheherazade only as played in the 1888–89 season.
- “A composer in the navy” (t = 90): corrected. Howard’s “three years at sea” is a round figure; the memoir (ch. V) says the voyage “had lasted two years and eight months”, which the note now attributes to him (“he recalls”). Rewritten on ch. I (end of July 1856, the Marine Corps, aged twelve), ch. III (Balakireff and the symphony; midshipman, 8 April 1862) and ch. IV–V (Almaz weighs anchor on 21 October 1862). The memoir’s dates are Old Style, so the note gives years only. “Becomes an officer” is dropped: he left as a midshipman, “something midway between pupil and officer”.
- “Fairy-tale wonders” (t = 175, spot-check): quotation corrected to the memoir’s wording, “an oriental narrative of some numerous and varied fairy-tale wonders” (ch. XX, p. 248); Glass’s LA Phil quotation omits “and varied”.
- “They carry the Princess on a palanquin” (t = 215): removed, replaced by “A theme in another story”. The palanquin remark appears only in Paul Serotsky’s MusicWeb note, with no source; it is not in the memoir, the LA Phil, BSO, Houston or Wikipedia pages, and a Russian-language search found nothing. The new note uses the memoir (ch. XX, pp. 247–248): the Princess’s clarinet theme in B♭ major, and the Baghdad festival. It overlaps in fact with the Festival file’s “Guests from other tales”, but uses a different quotation.
- “San Francisco, March 1942” (t = 395): kept, sources added. Commons’s description (transcribed from the 78 set) agrees with Discogs’s entry for the 45-rpm reissue WDM 920 and with the 1959 Camden CDN 1009 sleeve as transcribed at The Music Parlour. DAHR could not be searched (the search page returned no results to the reader; curl was refused with 403).
- “The broad song returns” (t = 260, spot-check): the trumpet-led rubato rests on the score (printed pp. 65–66, Come prima) and Serotsky; the score was not reopened.

### schubert-winterreise-leiermann

- No restored or added note (at the cap). The five existing notes were checked against Müller’s text (German Wikisource transcription of Die Winterreise, No. 24): all lines paraphrased are in the poem. Bar-aligned claims rest on the OpenScore transcription, which was not reopened; file unchanged. The Wikipedia (Winterreise; hurdy-gurdy) and Utz comment lines in the header are cited by no cue.

### Not reached or unresolved

- Not opened: Ostretsov’s 1938 review; the 1846 NZfM review by F.W.M.; Weissweiler’s edition of the Schumann correspondence; Litzmann’s German original; Rodzinski’s original session sheets or the booklet of the Westminster reissue; Harlow Robinson’s source for the philologist anecdote.
- Single-source notes left as they were: Allegretto “The sarcastic Shostakovich”, “Rodzinski takes it to America”; Moderato “No title, no dedication”; Schumann “A name in the oboe tune”, “Schumann on concertos”.

## Smoley re-check (Mahler 2 and 4 files)

Agent MahlerVerifyA. Scope: every note in `mahler-2-*` and `mahler-4-*` that cited Lew Smoley’s listening guides, with or without a score page. Only three files did: `mahler-2-im-tempo-des-scherzos`, `mahler-2-in-ruhig-fliessender-bewegung` and `mahler-2-urlicht`. `mahler-2-allegro-maestoso`, `mahler-2-andante-moderato` and all four `mahler-4-*` files cite no Smoley guide (grep for “Smoley” and the listening-guide URLs is empty), so they are unchanged. Score: IMSLP #415748 (Hofmeister 1897, Universal Edition reprint, 209 pp.); the printed page number equals the PDF page. Pages 82–127 and 128–209 were viewed as page images (100 dpi, with 150–300 dpi crops where a marking was in doubt). Other sources opened: Basinger’s Utah Symphony guide to the Second (https://usuo.org/explore/2014/11/mahler-2-listening-guide), the Mahler Foundation pages for movements 4 and 5 (https://mahlerfoundation.org/mahler/compositions/symphony-no-2/) and Smoley’s finale transcript, used only to know what to look for. Every changed file prints `ok` from `tools/validate.mjs`. Smoley no longer appears in any of the nine files. Where a point could not be seen in the score or in Basinger or the Foundation page, the clause was dropped.

### mahler-2-im-tempo-des-scherzos (finale)

- t = 205 “The Dies irae, made solemn” → “A chorale from the Dies irae”: corrected. Score p. 142 (Langsam, flute, oboe and clarinet over pizzicato violas and cellos, four flats) and the Foundation page (wind chorale over pizzicato quavers, recalls the Dies irae). “F minor” and “the tragic edge has gone; solemn, even majestic” were Smoley only and are removed.
- t = 275 “Trombone, then trumpet, turn heroic” → “A trombone, then a trumpet”: corrected. Score p. 142 rehearsal 5 (first trombone p bestimmt, then first trumpet) and p. 143 rehearsal 6 (horns sehr hervortretend, horns in the distance, divided tremolo verhallend). “Heroic bearing”, “pointing ahead to the chorus tune”, “the trumpet calls of the opening outburst” and “night falls” removed.
- t = 380 “Cries of woe peak in a shriek”: corrected. Score pp. 145–147 (Etwas drängend, Sehr drängend, Wieder zurückhaltend, low trombones, timpani roll fading to ppp). “The woe motive from the first movement” and the clarinets’ “rising dotted rhythm” could not be confirmed and are removed.
- t = 425 “Brass alone, in D♭ major” → “The low brass alone”: corrected. Score p. 148 rehearsal 10 (G.P., Wieder sehr breit for contrabassoon, trombones and tuba, five flats; Etwas energischer with trumpets under a crescendo) and the Foundation (a chorale to which the lower brass add solemnity). “Dies irae”, “D♭ major”, “unaccompanied brass choir” and “a forceful sustained note that suddenly softens” removed (the identity and key need analysis, and the page shows trombones, tuba and contrabassoon, not the whole brass choir).
- t = 530 “A procession without tragedy” → “The fanfare returns in C major”: corrected. Score pp. 149–151 (rehearsal 11 Wieder breit with no signature; horn and trumpet volleys, harps and cymbals on p. 150; runs from rehearsal 12) and the Foundation (fanfare prepares a far more assertive resurrection theme). The “regal procession recalling the first movement’s pomp” was Smoley only and is removed.
- t = 680 “The Dies irae marches”: corrected. Basinger (Dies irae becomes a serious, initially upbeat march, trumpet chorale-like variation above) and score p. 158 (Kräftig, “a fresh march tempo has been reached”). “Clipped dotted rhythms and whiplash upbeats from the first movement” and “the terror motive hurled between sections” removed.
- t = 810 “Bells and raised horns” → “Bells against the march”, moved to t = 720: corrected and moved. The bell staff (3 Stahlstäbe oder Glocken von tiefem und unbestimmtem Klange) is on p. 161, with the woodwinds’ Schalltrichter auf on p. 160; the march runs from p. 155 (t = 610) to p. 173, and the cello recitative at p. 174 is the t = 865 note, so p. 161 lies about a third of the way in, not late in the march. The placement is by page proportion and could be out by 20 s or so. “Horns lift their bells for a huge statement of the transformed Dies irae” removed; the 22-bar figure stays on the Foundation page (further bell staves in the coda, pp. 206–209).
- t = 905 “The plea behind ‘O glaube’”: verified with Basinger (the development resumes with the “O glaube” material) and score pp. 174–175 (cellos molto espress., changing 2/4, 3/4, 4/4 bars). Smoley sentence dropped from `evidence`; “to the same melodic shape” softened to “a return of the same pleading phrases”.
- t = 945 “A band in the distance”: verified with score p. 175 and pp. 176–179 (trumpets in F and C, triangle, cymbals and bass drum, “in weitester Ferne aufgestellt”; p. 178 “Hier soll die Musik viel stärker hörbar sein”) and the Foundation (spatialization). “Built from the horn calls heard earlier” changed to “fanfare signals”.
- t = 985 “The graves burst open”: corrected. Score pp. 181–182 (rehearsal 26, Più mosso, molto accelerando, ff to fff, triangle, bass drum, cymbals, tam-tam, timpani) and Basinger (acceleration, rising volume and dissonance). “The opening cataclysm returns, built from a tangle of polyphony” was Smoley only and is removed; Mahler’s programme sentence stays on the Foundation’s translation.
- t = 1040 “Cellos whisper the new theme” → “The hush after the climax”: corrected. Score p. 183 rehearsal 27 (Langsam, immer noch mehr zurückhaltend; five flats; pp horn chords, timpani tremolo, glockenspiel, oboe and cello lines, clarinets marked Echo). “High cellos whisper the resurrection theme, first hinted at after the opening outburst” and “the oboe’s broader version” are Smoley only and removed.
- t = 1340 “The orchestra lifts the tune” → “The orchestra takes the hymn”: corrected. Score p. 187 (rehearsal 32 “Unsterblich Leben … dir geben”, soprano among the choral staves; rehearsal 33 Sehr breit, horns and trumpets molto portamento), pp. 188–189 (rehearsal 34 Streng im Tempo, strings lang gezogen) and Basinger (interlude after the first stanza, chorus interrupts). “Overlapping entries climbing to solo violins and flutes” and “steady common time” could not be confirmed and are removed.
- t = 1705 “The soprano takes up the plea”: corrected. Score pp. 194–195 (soprano “O glaube: Du wardst nicht umsonst geboren”; first violin Solo on the D string; harp glissando at rehearsal 42, first note to be strongly accented). “Like the alto, she stops before a full cadence” and “a chain of rising viola tremolos” removed.
- t = 1810 “Stop trembling, prepare to live”: corrected. Score pp. 195–197 (rehearsal 42 alto, tenor and bass “Was entstanden ist, das muss vergehen” over trombones, tuba and violin trills; rehearsal 43 “auferstehen”, “Hör’ auf zu beben” at ppp, then “Bereite dich zu leben”, Schneller) and Basinger (Auferstehen material, Mahler’s text). “The men of the chorus burst in”, “as if whispered by an angel” and “the men, unaccompanied” removed (soprano and alto also sing “auferstehen” on p. 196).
- t = 1895 “Two voices answer pain and death”: corrected. Score pp. 197–199 (rehearsal 44 Mit Aufschwung, aber nicht eilen; rehearsal 45; Vorwärts, Drängend) and Basinger (Mit Aufschwung; the Urlicht melody). “In great agitation, on rising and falling scales from the resurrection theme that mirror the words” was Smoley only and is replaced by the printed markings.
- t = 2100 “Two notes, widened to an octave” → “Trumpets over the closing chord”: corrected. Score pp. 208–209 (horn staves for players 1 to 10; trumpets repeating a two-note figure marked ff then fff; organ volles Werk; bell staff; scharf abreissen) and Basinger (ten horns, four of them offstage earlier). The widening of the interval from a sixth to an octave and “the first two notes of the resurrection theme” could not be read with certainty on the scan and are removed.

### mahler-2-in-ruhig-fliessender-bewegung (scherzo)

- t = 40 “A clarinet told to be funny”: corrected. Score p. 82 (E♭ clarinet, mit Humor; the same marking recurs on p. 110). “It sounds like a sneer” was Smoley’s reading and is removed.
- t = 150 “The song without its singer”: kept. Basinger (song and orchestral version made together; the symphony movement leaves out most of the vocal melody, fragments in the woodwinds) and score p. 82 (running sixteenths). The Smoley sentence about “the first 131 measures” is dropped from `evidence`.
- t = 240 “The trio begins in C major”: corrected. Basinger (rumble in brass and timpani, protracted whistle in piccolo and flute, brass fanfare referencing the First Symphony) and score pp. 92–94 (p. 92 stopped brass and timpani; p. 93 rehearsal 36 with no signature, piccolo and flute on a held high note, low divided strings sehr wuchtig, horns and trumpets offen; p. 94 rehearsal 37 Vorwärts, full orchestra). “A volley of falling fourths”, “a high C” and “a heroic variation of the dance theme” removed.
- t = 270 “A chamber trio, then a call to arms”: removed. The flute, solo violin and cello trio was not found on the pages read (92–99) and Smoley is the only source; the orchestral outburst it described is now in the t = 240 note (p. 94).
- t = 360 “The battle cry becomes a lullaby”: removed. The inverted-fragments derivation and “still in E major” rest on Smoley alone; nothing in the score or in Basinger or the Foundation could be checked against it.
- t = 465 “The dance returns and is torn apart”: corrected. Score pp. 108–111 (rehearsal 45: three flats as at the opening, muted violins, pizzicato strings, Ruthe on the bass drum; rehearsal 46: ff woodwinds, horns offen; runs through winds and strings on p. 111). “Descending chromatic scales” and “the martial counter-theme from the trio” removed.
- t = 585 “Peace after the cry”: corrected. Score pp. 118–122 (Wieder unmerklich zurückhaltend; timpani roll ppp and trumpets Immer mit Dämpfer at rehearsal 52; horn and trumpet phrase and violins molto espress.; both harps in glissando with morendo, p. 122). “The timpani strike the movement’s opening rhythm”, “the trio’s tune returns in low strings” and “it foretells the peace after the Last Judgment” removed.
- t = 655 “The fish dive” → “No pause before Urlicht”: corrected and retitled. Score p. 124 (rehearsal 54: ff woodwind runs, falling harp glissando, Tempo I) and p. 127 (pizzicato strings, tam-tam stroke, “Folgt ohne jede Unterbrechung der 4. Satz”). “Plunge to the tonic” and the parallel with the end of the song (Smoley only) removed.

### mahler-2-urlicht

- t = 0 “One voice, then brass”: corrected. Score p. 128 (attacca; Sehr feierlich, aber schlicht, Choralmässig; “O Röschen roth!” with fermatas; trumpets and horns in chorale texture; the margin note that the brass stand at the back) and Basinger (first line opens the movement, brass choir at the rear). “Three rising notes” and “unfolding into an arch” removed.
- t = 32 “The seed of the finale”: kept. The Foundation’s page on the movement (an expanded version of the ascending chorale theme becomes the resurrection theme); the Smoley sentence is dropped from `evidence`.
- t = 64 “Suffering bends the tune”: corrected. Score p. 129 (the alto’s lines, changing bar lengths, rit. and molto espress. at “Je lieber möcht’ ich im Himmel sein”) and Basinger (chromaticism, fluctuating metre). “The brass hymn returns when the singer longs for heaven” removed.
- t = 160 “The angel on the road” (and the transition at t = 160): corrected. Score pp. 130–131 (Etwas bewegter, five flats, clarinet figure with harp and glockenspiel, solo violin ohne Dämpfer, three sharps at “da kam ein Engelein”) and Basinger (minor key; clarinet, harp, glockenspiel; solo violin and flute; the oboe closes the first portion). “B♭ minor” and “A major” are now stated as “minor” and “three sharps”, since five or three accidentals do not by themselves fix the key.
- t = 204 “The traveller stands firm” (and the transition at t = 204): corrected. Score pp. 131–132 (Leidenschaftlich at “Ach nein!” over tremolo; zart drängend at “Ich bin von Gott”; mit steigerndem Ausdruck) and Basinger (zart drängend). “Rising chromatic chords” removed.
- t = 284 “Strings finish the sentence”: corrected. Score p. 133 (solo violins and strings continue after “Leben”, D♭ major, gänzlich ersterbend, the foot-of-page direction that the fifth movement follows without a break). “The singer stops before the harmony has come to rest” removed.
- Transition at t = 64: re-sourced to score pp. 128–130 and Basinger; “moving its plain hymn chords into more troubled harmony” removed.

### mahler-4-ruhevoll, -scherzo, -bedaechtig, -himmlische-leben

- Unchanged: none of their notes cites Smoley, so none was in this list.

### Not done or unresolved

- The t = 720 placement of the bells note and the t = 1340 and t = 1810 placements rest on page proportion; the printed pages are certain, the seconds are not.
- Not verifiable here: the identity of the F-minor and D♭ chorales as “the Dies irae” beyond the Foundation’s wording; the trumpets’ final two-note interval (sixth or octave); the flute, solo violin and cello trio in the scherzo trio.

## Smoley re-check (Mahler 5 and 9 files; Das Lied)

Agent MahlerVerifyB. Scope: every note in `mahler-5-*`, `mahler-9-*` and `mahler-das-lied-*` that cited Lew Smoley’s Mahler Foundation listening guide alone or beside a score page. Scores: Mahler 5, Peters (IMSLP #111956, 249 PDF pages; printed page = PDF page + 2) and Mahler 9, Universal Edition first edition (Dover reprint, IMSLP353450); pages were rendered locally and read by eye, and the evidence fields cite the printed page numbers (the PDF page is one lower than the printed page in parts of movements II and III). Guides: Basinger (Utah Symphony) for the Fifth (https://usuo.org/explore/2015/10/mahler-5-listening-guide/) and the Ninth (https://usuo.org/explore/2016/05/mahler-9-listening-guide/); Laki’s Hungarian Philharmonic note for the Adagietto (https://www.filharmonikusok.hu/en/muvek/v-cisz-moll-szimfonia/); the Mahler Foundation composition pages. Smoley is cited nowhere in these files now. All nine changed files print `ok` from `tools/validate.mjs`. Transitions that cited Smoley were rewritten or removed with their notes; section labels that carried Smoley-only claims were renamed (and the transitions that name them updated). Verdicts: verified (source) / corrected / removed.

### mahler-5-trauermarsch
- t = 0 “A trumpet alone”: verified, corrected. Peters score (IMSLP #111956) p. 3 read (marking, first trumpet alone, footnote on the upbeat triplets “flüchtig … Militärfanfaren”); Basinger for the orchestra enveloping the call. “Hammered out by many players” dropped; Smoley dropped.
- t = 80 “Violins beside cellos”: corrected. Score p. 7 shows the tune in first violins and cellos (cello part marked unis.) over pizzicato basses; the “low violins, high cellos” registers were Smoley’s and could not be confirmed from the page, so they are gone.
- t = 318 “The march breaks open”: corrected. Score pp. 19–21 read: Plötzlich schneller. Leidenschaftlich. Wild., five flats, footnote “Geigen stets so vehement als möglich!”, trumpet line over chromatic violin runs (Basinger). “Twice its old speed” and the bass “fourths” were not confirmable and were dropped.
- t = 365 “Hope rises in the horns”: removed. Smoley only; pp. 24–28 (timpani “Es nach B”, horns marked precipitato) did not let the specific claims (falling fourths, “theme of hope returns in the next movement”) be confirmed.
- t = 418 “The signal comes back”: verified, corrected. Score pp. 31–33 read (Unmerklich zu Tempo I zurückkehren, Tempo I with the triplet figure, Schwer at rehearsal 12).
- t = 570 “A quotation from Kindertotenlieder”: corrected. Score p. 38 (violins pp singend before rehearsal 15), Basinger and the Aspen note for the quotation; the words “Heil sei dem Freudenlicht der Welt” were in Smoley only and are dropped.
- t = 596 “Violins inherit the cry”: corrected. Score pp. 38–40 (rehearsal 15, Immer dasselbe Tempo, first violins molto espr., second violins divisi a 3); Basinger for the second trio’s derivation from the wild trio and its rising scales. The “great upward leaps end in sighs” detail removed.
- t = 650 “The climax: klagend”: verified, corrected. Score pp. 40–45 (steigernd, Etwas drängend, Klagend and Zurückhaltend at rehearsal 18, fff chords, Schalltrichter auf!); Basinger for the klagend climax and the returning fanfare.
- t = 696 “The procession recedes”: verified, corrected. Score pp. 45–47 (Poco meno mosso, Streng im Tempo, Nicht zurückhalten, Schwer, muted trumpet “Die Triole immer schnell, aber nicht überstürzt”, flute “Triole flüchtig”, bass-drum roll pp to ppp, last pizzicato in violas, cellos and basses). “Sharp plucked note from the low strings” corrected to include the violas.
- Transitions (4): rewritten to what pp. 19–21, 31–33, 38–39 and 44–47 show; Smoley dropped.

### mahler-5-sturmisch-bewegt
- t = 0 “Five notes strike upwards” → “A five-note figure, then a blow”: verified, corrected. Score p. 48 read (cellos, basses and bassoons, five notes, fff, rit./a tempo, conductor’s footnote on the pause and the fast figure). “Slashing diminished-seventh chords” could not be confirmed from the page and is dropped; Smoley dropped.
- t = 70 “The violins reach for a tune”: removed. Smoley only; pp. 54–57 show Drängend / Sehr drängend runs but not the three attempts, the “falling turn” or the horn replies.
- t = 96 “Cellos remember the march”: verified, corrected. Score pp. 57–58 (timpani roll, rehearsal 5 Bedeutend langsamer im Tempo des ersten Satzes „Trauermarsch“, cellos molto cantando, four flats); “F minor” not stated (key signature only), Smoley dropped; Basinger added.
- t = 135 “The lament, widened” → “The song is passed on”: corrected. Only what pp. 58 and 60 show survives (clarinet counter-melody etwas hervortretend, first violins zart, pizzicato strings). The “rising sixth” and “held notes” details (Smoley only) are removed.
- t = 205 “The storm cuts the song short”: corrected. Score p. 66 (the opening figure ff in low strings and bassoons, horns gestopft, trumpets muted) and Basinger’s development; “harsh seventh chord”, “chromatic woodwinds” and “violins playing the trumpet fanfare” (Smoley only) removed.
- t = 250 “Twenty bars for cellos” → “Cellos over a timpani roll”: verified, corrected. Score pp. 70–71 (six flats, Langsam aber immer, pp klagend am Griffbrett, timpani roll, violas); Basinger for the klagend return over a timpani roll. The “twenty bars” and “G♭” were not counted or read and are dropped.
- t = 340 “A sigh reversed” → “Horns take the song”: corrected. Score p. 71 (rehearsal 12 Tempo moderato wie im ersten Teil, two horns espress. / zart hervortretend over repeated woodwind notes); the “reversed sigh” interpretation (Smoley only) is removed.
- t = 440 “The funeral march learns to march”: corrected. Score p. 78 (Più mosso subito, aber immer noch nicht so schnell wie zu Anfang) and Basinger (faster march in a major key). “A♭ major”, the canon with the fanfare and the Revelge comparison were Smoley only and are removed.
- t = 475 “A new day, briefly”: corrected. Re-based on Basinger (brass chorale over a ringing triangle, timpani punctuation, stormy motives intrude); no score page was found that confirms the triangle, so only Basinger is cited. “Diminished sevenths” and the timpani “volley of eighths” removed.
- t = 525 “The violins risk everything”: removed. Smoley only; the E-minor signature at rehearsal 20 (p. 86) is visible but not the leap or off-beat accents.
- t = 565 “Almost too much to bear”: removed (Smoley’s own opinion, no other source).
- t = 625 “The storm joins the climb”: removed (Smoley only; Basinger does not describe it).
- t = 676 “The brass find D major”: verified, corrected. Score p. 102 (two sharps, sustained brass chords, harp fff runs, Becken mit Teller, rushing string scales) and Basinger. The “chord marked Höhepunkt” was not found on p. 102 and is dropped.
- t = 746 “The storm has survived”: corrected. Score p. 107 (Ritenuto, brass dying to pp, strings morendo) and Basinger (coda motives; chorale returns in the finale). The “shower of descending triplets” (Smoley only) removed.
- t = 800 “Harp notes in the wreckage”: verified, corrected. Score pp. 116–117 (sparse wind, harp and triangle; cellos and basses Tutti pizz. ppp; timpani last note; “folgt lange Pause”). The “three low notes descend” claim replaced by what the page shows.
- Transitions (5): rewritten to what pp. 57–58, 66, 70–71, 102 and 107 show; Smoley dropped.

### mahler-5-scherzo
- t = 0 “A horn takes the floor”: verified, corrected. Score p. 118 (Kräftig, nicht zu schnell; D major, 3/4; separate Corno obligato staff; three-note horn gestures) and Basinger (tune tossed between solo horn, woodwinds, first violins). The “violins’ country dance, accents nudging one another off balance” (Smoley) is removed.
- t = 55 “A country dance joins”: removed. Smoley only (yodel-like figures, dotted rhythm of the funeral march “moved to the middle of the bar”); no page or other source.
- t = 90 “A man in the full light of day”: kept; Smoley dropped, Aspen note retained and Basinger (Mahler to Bauer-Lechner, 25 July 1901) added.
- t = 135 “Violins with a lilt”: verified, corrected. Score p. 128 (Etwas ruhiger, two flats, first violins over pizzicato violas and basses, footnote on the fleeting eighth); Basinger on the first-trio waltz.
- t = 200 “The call cuts in”: verified, corrected. Score p. 132 (horn call fff, string fugato with wild! over successive entries); Basinger (brief, brisk fugue). “Trumpet’s interruption” (Smoley) replaced by the horns the page shows.
- t = 312 “A horn beyond the ballroom”: verified, corrected. Score pp. 136–137 (horns with bells raised, Tempo poco sostenuto, lang / verklingend in the obbligato horn, answering English horn, bass clarinet, bassoons, low strings); Basinger (rocking theme in a horn solo).
- t = 400 “The dance is plucked”: corrected. Score p. 137 (rehearsal 11 Molto moderato, Solo pizz. in violins, cellos, basses); “in D minor” could not be confirmed and is dropped.
- t = 455 “Snippets for chamber groups”: corrected. Score p. 140 (oboe, bassoons, trumpet, tuba each p espress. over sustained strings and a timpani roll); Basinger (fragmentation of the rocking theme). The “tuba mimics the oboe”, “horns in a trance”, “trumpet widens its intervals” and “trombone intrudes” details (Smoley only) removed.
- t = 535 “The horn dreams again” → “The tune darkens”: corrected. Score pp. 140–145 (four flats, obbligato horn entering) and Basinger (solo horn announces a minor-key return that speeds up, gets louder and takes the contours of the waltz). “More horns, a contrabassoon … F minor … plucked trio” (Smoley only) removed.
- t = 595 “The brass cast the daydream aside”: corrected. Score p. 145 (Nicht schleppen, four flats, running figure in bassoons, trombones, tuba and basses, trumpet figure, trills, glockenspiel). The “trumpet tattoo in disguise” and “stretto of the two main tunes” (Smoley only) removed.
- t = 645 “D major, crowded again”: verified, corrected. Score p. 148 (rehearsal 17, key signature from four flats to D major, poco rit. a tempo I.) and Basinger (the recapitulation after a sudden halt).
- t = 680 “The Ländler misses its cue”, t = 725 “The waltz runs riot”, t = 765 “The waltz turns brassy”, t = 810 “Waltz and Ländler, face to face”: removed. Smoley only; the pages around p. 151 were not placed against these descriptions, and Basinger gives no bar-level account.
- t = 862 “The waltz in D major, meekly”: removed. Smoley’s “meekly” contradicts Basinger’s “sweeping grandeur” for the returned first trio, and no page could be placed.
- t = 905 “The horn keeps trying”: corrected. Score p. 170 (obbligato horn nicht riten / nicht zurückhalten!, Langsam, a tempo (schnell), rit., string tremolo); Basinger (horn solo, sudden speed-up). “Four horns in unison on a diminished seventh” (Smoley only) removed.
- t = 960 “One last turn”: verified, corrected. Score pp. 176–177 (rehearsal 32, dotted figures, running scales, Sehr drängend bis zum Schluss, final two short fff chords). “Horns reclaim the tune” not confirmed and dropped.
- Transitions (5): rewritten to what pp. 128, 132, 136–137, 145–148, 170–177 show; Smoley dropped.

### mahler-5-rondo-finale
- t = 0 “One A becomes a conversation”: verified, corrected. Score p. 183 (Allegro; horn and first violins on a held note marked lang, verklingend; bassoon f, oboe p zögernd, clarinet Etwas langsamer). “The note left behind by the Adagietto” (Smoley) is dropped.
- t = 22 “The donkey judges the singers”: kept; Smoley dropped (Basinger already names the bassoon fragment and prints the poem).
- t = 46 “The horn finds a tune”: verified, corrected. Score p. 183 (riten., Allegro commodo (Hauptzeitmass), D major, second horn in imitation, open fifths in the bassoons) and Basinger (giocoso theme first played by the horns over drone harmonies, returns like a refrain). “Little falling figures that keep turning up” removed.
- t = 80 “Cellos start the chase”: verified, corrected. Score pp. 185–186 (rehearsal 2, Nicht eilen, cellos and basses, successive string entries p leggiero); Basinger on fugal process. “Before the previous phrase has quite finished” dropped.
- t = 150 “The chorale in outline”: removed. Smoley only; Basinger says the giocoso refrain resembles the chorale of the second movement, which is a different claim from woodwinds with raised bells.
- t = 200 “The Adagietto learns to dance”: corrected. Score p. 196 (rehearsal 8, first violins marked schwungvoll over quick string figures) and Basinger (the Adagietto surfaces after the second refrain-fugue pair as a grazioso flowing dance). That the p. 196 melody is the Adagietto theme was not checked note against note; it rests on the marking, Basinger’s order of events and Laki’s remark that a rondo episode derives from the Adagietto.
- t = 285 “Adagietto fragments in the violas”, t = 410 “A hearty folk dance”, t = 500 “The Adagietto, happy now”, t = 636 “The bass gets the dance”, t = 690 “The Adagietto, tender once more”, t = 745 “The opening trumpet call”: removed. Smoley only; the pages at about pp. 208, 217, 235 and 241 show a climax (p. 217, rehearsal 20, fff, D major) and a key change (p. 241, rehearsal 32), but nothing that supports the Smoley descriptions (G-major fugue on theme Y, C-major striding tune, tender violin octaves, return of the first movement’s trumpet call). No source other than Smoley reports a trumpet call from the first movement returning before the chorale.
- t = 575 “The bottom falls out” → “A drop to two flats”: corrected. Score p. 224 (two flats, Nicht eilen. (Pesante.), running figure in violas, cellos, basses, staccato horns and trombones) and Basinger (fugues after each refrain). The “hee-haw” figure and “abrupt jump from D major” (Smoley only) are removed.
- t = 780 “The chorale comes home”: verified, corrected. Score p. 244 (Pesante (Etwas gehalten), D major, brass fff, bells raised, cymbal klingen lassen, running strings) and Basinger.
- t = 840 “A sharp last stroke”: corrected. Score p. 251 (Presto, chromatic runs, secco chords, schnell abdämpfen). The “little figure from the introduction” (Smoley) is removed.
- Transitions (2): rewritten to what pp. 183 and 244 show; Smoley dropped.

### mahler-5-adagietto
- t = 60 “A harp for a continuo”: verified. Score pp. 178–182 carry staves for harp and strings only; Laki’s Hungarian Philharmonic note (https://www.filharmonikusok.hu/en/muvek/v-cisz-moll-szimfonia/, opened) says the same; Mahler Foundation page for the continuo comparison. Smoley dropped.
- t = 297 “The day is beautiful” (Kindertotenlieder “Der Tag ist schön” motive): removed. Smoley only; neither Basinger, Laki nor the score pages gave it, and a web search returned only Smoley’s guide.
- t = 345 “The finale’s second tune is born”: verified, corrected. Score p. 180 (Etwas drängend, climax, six flats, pp subito, no harp staff on the last system); Mahler Foundation movement page and Laki for the finale episode derived from the Adagietto. Smoley dropped.

### mahler-9-landler
- Score used: Mahler, Symphony No. 9, Universal Edition first edition (Dover reprint, IMSLP353450; printed page = PDF page for movement II). Pages read: 59, 64–66, 73, 77, 86, 102 (printed 103). Basinger’s Utah Symphony guide (https://usuo.org/explore/2016/05/mahler-9-listening-guide/) for the form of the movement.
- t = 0 “Fiddles in heavy shoes”: verified, corrected. Score p. 59 (Im Tempo eines gemächlichen Ländlers, Etwas täppisch und sehr derb, bassoon and viola upbeat, second violins Schwerfällig / wie Fiedeln); Basinger. “Clarinets answer on three square beats” reduced to “the clarinets answer”.
- t = 175 “The waltz elbows in”: verified, corrected. Score p. 64 (Poco più mosso subito, Tempo II, four sharps) and Basinger (sudden speed-up, downbeat emphasis, sigh lines, chromaticism). “Little upbeat from the country dance”, “third-beat accent” and “enormous downward leaps” (Smoley) removed.
- t = 200 “The fish sermon, quoted”: kept; Smoley’s placement (first waltz, played by horns) dropped; Basinger alone (start of the coda).
- t = 296 “A slower pair of feet”: verified, corrected. Score p. 73 (Molto riten., Tempo III Ländler, ganz langsam, solo bassoon) and Basinger (triangle, sigh figures). “F major, four falling seconds, bits of the first dance intruding” (Smoley) removed.
- t = 390 “The waltz spins faster”: corrected. Score p. 77 (rehearsal 22, two sharps, pizzicato/arco alternation, turns in the winds) and Basinger (reharmonized waltz between slow Ländlers). “Glockenspiel” and “keeps accelerating until he has to rein it in” (Smoley) removed; the note’s link to Tempo II was not found on p. 77 itself.
- t = 565 “A dance for fewer players”: verified, corrected. Score p. 86 (bassoons, 2. Violine Solo, Viola Solo, violas pizzicato); Basinger (abbreviated return of the moderate Ländler). “Solo viola and cello, then solo violin” corrected to what the page shows; “C major” not stated.
- t = 645 “A distorted tune, a boisterous waltz”: removed. Smoley only (G♭-major woodwind counter-theme, more boisterous waltz); Basinger’s account of the third part does not mention it and no page was placed.
- t = 800 “The dancers lose the tune”: corrected and re-based on Basinger (abrupt return of the original tempo, heavy accents, then lighter). The solo horn’s “long farewells” (Smoley only) removed.
- t = 885 “The fiddler of the Fourth” → “The dance slips away”: corrected, re-based on Basinger’s coda (muted, pianissimo, fragments emerging and sneaking out instrument by instrument). The comparison with the Fourth’s scherzo fiddler (Smoley only) is removed.
- t = 920 “Piccolo meets contrabassoon”: verified. Score p. 103 (Nicht eilen bis zum Schluß, piccolo and contrabassoon pp figures, solo viola, final pizzicato chord).
- Transitions (6): five rewritten to what pp. 64–65, 73, 77, 86 and Basinger show (the fourth, “late-waltz-interruption” at t = 640, removed: Smoley only, C-minor brass and chromatic horns not found). The last transition is renamed “The first tempo comes back” because the horn stumble was Smoley’s.

### mahler-9-rondo-burleske
- Pages read (printed page numbers): 104, 111, 114, 123, 131, 132, 141, 146, 150, 157, 163.
- t = 0 “Three notes start a fight” → “A trumpet starts a fight”: verified, corrected. Score p. 104 (Allegro assai. Sehr trotzig; first trumpet alone; violins’ melody ff) and Basinger. “Three notes … falling tritone” (Smoley) removed.
- t = 85 “The Fifth’s trumpet rhythm”: removed. Smoley only; p. 111 shows no passage that could be matched to the Fifth’s opening rhythm, and no other source makes the link.
- t = 120 “A tune out strolling”: corrected, re-based on Basinger (first episode: reduced scoring, softer dynamics, operetta style) and pp. 111–114 (one flat). “F-major second subject, same tempo, upbeat from the opening” (Smoley) removed.
- t = 220 “A muted trumpet calls the tune back” → “A muted trumpet calls”: corrected. Score p. 123 (first trumpet mit Dämpfer ff dim., triangle roll, violins). The Pan’s-march rhythm of the Third and the return of the “strolling tune” (Smoley only) removed.
- t = 338 “The trumpet starts to sing”: verified, corrected. Score p. 132 (cymbal, Flatterzunge flutes, brass chords, Etwas gehalten, two sharps, trumpet p subito poco espressivo, string tremolo) and Basinger (cymbal crash, dissonant chorale, lyrical melody; the finale’s melody absorbs the Rondo-Burleske’s turn motive). “Circling one note before leaping upwards” removed.
- t = 435 “The clarinet bares its teeth” → “Harp sweeps clear the stage”: corrected. Score p. 141 (harp glissandos, second violins 3fach geteilt am Steg pp). The E♭ clarinet “at twice the speed” (Smoley only) removed.
- t = 490 “The Adagio tune never returns” → “The song is turned away”: corrected, re-based on Basinger (oboe and other instruments try to bring the lyrical melody back and are rejected). Tremolos “calling back the Adagio tune”, English-horn replies and muted violins and brass (Smoley only) removed.
- t = 540 “The rondo forces its way back”: removed. Smoley only; pp. 146 and 150 show the refrain at full strength (p. 146) and a p grazioso passage (p. 150), neither matching “trombones and low strings” and “omission of the second subject”.
- t = 620 “Faster, then faster again”: verified. Score pp. 157–163 (Più stretto on p. 157; final short attacks on p. 163) and Basinger; Smoley dropped.
- Transitions: “A cymbal crash, then D major” and “A harp glissando clears the scraps” rewritten from pp. 132 and 141; “rondo-recovery” (t = 540) removed. The section labels B′ and A′ (which carried the E♭ clarinet and low-brass claims) were renamed to match.
- Not changed: the `orchestra.timeline` entries at t = 435 and t = 540 (clarinets / E♭ clarinet; trombones and low strings) come from the same Smoley passages and are now unsupported; they are not notes and were left for the lead.

### mahler-9-adagio
- Pages read (PDF page = printed page): 164, 165, 166, 168, 175, 178, 179, 180. Basinger’s guide for the finale’s form.
- t = 0 “The violins speak together”: verified, corrected. Score p. 164 (Sehr langsam und noch zurückhaltend; first and second violins in unison f lang gezogen; violas, cellos and basses entering p molto espress.); Basinger; Smoley dropped.
- t = 80 “A bassoon below the hymn”: verified, corrected. Score p. 164 (first violin p subito, morendo; first bassoon Solo, pp langsam). “D♭” dropped; Basinger kept.
- t = 120 “The mocking tune becomes a prayer” → “A middle section becomes an elegy”: corrected. Smoley’s “E♭ clarinet’s mocking phrase” removed; the Mahler Foundation page (direct quote from the Rondo-Burleske’s middle section, an elegy here) and Basinger (turn motive) remain.
- t = 190 “An enormous empty space”: verified, corrected. Score p. 165 (Plötzlich wieder langsam (wie zu Anfang) und etwas zögernd; contrabassoon, cellos, basses; first violins pp ohne Empfindung in the high register); Basinger (contrabassoon and cellos reiterate B material, violins’ new idea ohne Empfindung). “Sustained high A” not confirmed and dropped.
- t = 305 “The hymn returns in pieces”: verified, corrected. Score p. 168 (Pesante, rit., a tempo (Molto adagio), five flats, stets breitester Strich) and Basinger (major mode, warmth of the horn). “Horn and second violins take one tune, first violins and violas the other” removed.
- t = 655 “The strings pull apart”: removed. Smoley only; pp. 175 and 178 show Tempo I and a crescendo passage but not the claims.
- t = 700 “Der Abschied in the English horn” → “Der Abschied in the woodwinds”: corrected to Basinger (intertwining high woodwinds, rising bassoon idea beneath) and Kubik. The English-horn couplets and the E♭ clarinet (Smoley only) removed.
- t = 880 “The orchestra leaves the strings”: verified, corrected. Score p. 179 (dim., morendo, ppp violins, English horn espr., ersterbend); the “C♮” and “cellos can carry it no further” (Smoley) removed.
- t = 1080 “The viola’s last turn” → “The last page”: corrected. Score p. 180 (mit Dämpfer in lower strings, stets ohne Dämpfer in first violins, Langsam und ppp bis zum Schluß, Äußerst langsam, pppp, ersterbend). The “upward turn in the viola” and “D♭-major chord” (Smoley) removed.
- Transitions: first-interlude, first-restatement, final-withdrawal and adagissimo-page rewritten from pp. 165, 168, 179, 180; second-interlude (t = 462) and late-accumulation (t = 655) removed (Smoley only).
- Not changed: `orchestra.timeline` entries at t = 85 (D♭), 195 (high A), 570, 680, 880 (C♮) and 1080 are Smoley-derived and are not notes; left for the lead. Section labels at t = 462 (“Held violins and small wind replies”) and t = 655 (“Strings climb against descending lines”) have the same origin.

### mahler-9-andante-comodo
- Pages read (PDF page = printed page): 1, 2, 5, 15, 16, 21, 22, 23, 24, 26, 28, 29, 30, 31, 33, 35, 45, 47, 49–56, 58. Basinger’s guide for the form.
- t = 0 “A rhythm finding its feet”: verified, corrected. Score p. 1 (Andante comodo; cellos pp, horns stopped then offen (Echo), harp f, double bass flageolet, violas pp). “Another horn tries a little melody” dropped.
- t = 40 “Two notes become a song” → “A song in short phrases”: corrected. Score pp. 1–2 (rehearsal 1, second violins, divided viola sextuplets, pizzicato cellos and basses) and Basinger (short segments separated by rests, sigh figures). “Just two neighbouring notes” and “D-major” (Smoley) dropped.
- t = 125 “D major turns minor”: corrected, re-based on Basinger (minor-mode passage, short-lived, quasi-fanfare in the trumpets) with score p. 5. First violins “angular, weak beats” (Smoley) removed.
- t = 365 “A chord that settles nothing”: corrected. Score p. 16 (sustained chord, timpani roll ff dim. to pp, Tempo I subito). “B♭ major chord with an added sixth” (Smoley only) could not be read from the page and is dropped.
- t = 390 “The horns remember”: corrected. Score p. 16 (Tempo I subito aber nicht schleppend, horns, muted trombones, tuba, timpani roll pp) and Basinger. “Four horns … timpani answer with the steadier one … between B♭ and G minor” (Smoley) removed.
- t = 555 “Trumpets stand fast”: verified, corrected. Score pp. 22–23 (trumpets mit Dämpfer triplets, timpani roll, violin trills, horns gest. fff, Mit Wut) and Basinger.
- t = 660 “The fighters freeze”: removed. Smoley only; the passage cannot be placed with confidence (p. 26 shows woodwind trills and harp runs, but the “gurgling of the opening” was not confirmed).
- t = 740 “One cry from the whole orchestra” → “A cry, then a collapse”: verified, corrected. Score pp. 28–29 (Becken, harp runs, change of key signature at rehearsal 11, rapid descending figures in violas, cellos, basses) and Basinger. “Almost the only time in the development … single phrase” (Smoley) removed.
- t = 805 “Strings in the shadows”: verified, corrected. Score p. 35 (Schattenhaft, horns, muted trombones, ppp sextuplets, Allmählich an Ton gewinnend) and Basinger. “Violins climb by semitones” (Smoley) removed.
- t = 980 “The small rhythm becomes enormous” → “A dissonance mit höchster Gewalt”: corrected. Score p. 45 (Stringendo; trombones and bass tuba fff mit höchster Gewalt, Schalltr. auf, timpani ff, rapid descending figures) and Basinger. That the brass play the symphony’s opening rhythm (Smoley) is dropped; the Bernstein note at t = 1085 still says the rhythm returns “first small, then enormous”, which now rests on Smoley alone (not edited).
- t = 1195 “Chamber music in limbo”: removed. Smoley only, and the only page that fits (p. 54, Misterioso, solo violin, flutes, then Nicht mehr so langsam) is the same passage as the existing “Birdcalls” note (t = 1390).
- t = 1310 “A horn opens the coda”: verified, corrected. Score p. 56 (Schon ganz langsam, two sharps, first horn molto espr. p (sehr weich hervortretend), harp arpeggios, held wind chords). “Lifts the minor third back into D major” and “rocking cellos” (Smoley) removed.
- t = 1440 “One D left ringing” → “A solo violin at the end”: corrected. Score p. 58 (Wieder a tempo aber viel langsamer als zu Anfang, solo violin schmeichelnd / dolciss., harp ascending, Zögernd, last bar pizzicato flageolets on the G string pp with fermata). “Held D in piccolo and cello” (Smoley) removed.
- Transitions (7): all rewritten from pp. 5, 16, 22–23, 35, 45, 47–49 and 56 plus Basinger; section labels and notes renamed to match (B, Dev, Link, A′, Coda).
- Observation (not changed): the existing “Birdcalls” note (t = 1390) cites p. 54, which precedes the coda page 56 used for t = 1310; the two time anchors are in the wrong order against the score.
- Not changed: `orchestra.timeline` (t = 0 “fourth horn”, t = 125 “sharper D-minor theme”, t = 980 “enlarge the opening rhythm”) rests partly on Smoley.

### mahler-das-lied-* and mahler-5-adagietto-mengelberg-1926
- No note, transition or timeline in mahler-das-lied-abschied, -einsame, -jugend, -schoenheit, -trinklied, -trunkene or mahler-5-adagietto-mengelberg-1926 cites Smoley or a Mahler Foundation listening guide (checked by grep and by loading the cues); nothing to verify or remove.
