# Hall notes: stratified fact-check sample

## Fact-check (independent)

Scope: 28 Hall files, every cue, section label, transition `how` and `orchestra` note read against its `evidence` and, wherever a score was retrievable, against the cited score (rendered pages, or Mutopia MIDI / OpenScore MusicXML for bar-level claims). About 255 cues and transitions were examined. Two further files drawn for the sample, `haydn-94-andante` and `schoenberg-quartet-2-entrueckung`, were read but **not** fact-checked (run budget); they are unverified.

### Files checked

- Origins (4): `origins-machaut-douce-dame-jolie`, `origins-monteverdi-quel-augellin`, `origins-purcell-fairy-queen-chaconne`, `origins-pange-lingua`.
- Historical 78s (4): `beethoven-5-first-nikisch-1913`, `rachmaninoff-prelude-c-sharp-minor-victor-1921`, `leoncavallo-vesti-caruso-1902`, `volga-boatmen-chaliapin-1922`.
- Orchestral (6): `bartok-concerto-orchestra-elegia`, `mahler-5-adagietto`, `debussy-la-mer-orchestral-dawn`, `stravinsky-rite-sacrifice`, `bruckner-7-adagio`, `shostakovich-5-largo`.
- Piano (8): `chopin-ballade-1`, `beethoven-appassionata-first`, `liszt-sonata-b-minor`, `scriabin-sonata-5`, `ives-concord-emerson`, `ravel-gaspard-le-gibet`, `schumann-kinderszenen-traumerei`, `couperin-barricades-mysterieuses`.
- Vocal / choral (6): `faure-requiem-in-paradisum`, `schubert-winterreise-leiermann`, `mahler-kindertotenlieder-oft-denk-ich`, `verdi-requiem-dies-irae`, `puccini-e-lucevan-le-stelle`, `lili-boulanger-psalm-130`.

### Error rate

Eight cues/transitions/orchestra notes (of about 255) carried an error: 3 of them in reader-facing text or the Mengelberg sourcing (about 1.5%), 5 in `evidence` or `orchestra.source` locators only (bar numbers). Four of 28 files needed edits (14%). The reader-facing prose was accurate in 25 of 28 files; no invented quotation, date, place or name was found.

### Corrections (all applied; validator `ok` on each)

1. `stravinsky-rite-sacrifice`, cue t=0 “Night in the orchestra”: “Flutes and clarinets hold soft chords” → “Flutes and clarinets murmur soft repeated chords while the oboes hold long notes”. Full score p. 86, fig. 79: flutes and both clarinets repeat quavers (p); only the oboes sustain (ppp). https://s9.imslp.org/files/imglnks/usimg/a/af/IMSLP524674-PMLP179425-PMLUS00725-complete1.pdf
2. `stravinsky-rite-sacrifice`, transition `into-evocation`: “the preceding quaver” → “the preceding dotted quaver”; evidence “quaver-to-crotchet” → “dotted-quaver-to-crotchet”. Score p. 115, fig. 121 carries the equation ♪. = ♩ after G.P. (same IMSLP score).
3. `ives-concord-emerson`, cue t=570 “A score still changing”: “reaches print in October 1947” → “reaches print in 1947”; evidence “7 October 1947” → “in 1947 (second edition, Arrow Music Press, later Associated Music Publishers)”. Only the year could be confirmed (Wise Music catalogue: Arrow Music Press 1947; Wikipedia, Piano Sonata No. 2: second edition 1947). Gann’s page at charlesives.org sits behind a Cloudflare challenge and could not be opened to confirm the day. https://www.wisemusicclassical.com/work/24816/Sonata-No-2-Concord-Mass-1840-60-2nd-Edition--Charles-Ives/
4. `mahler-5-adagietto`, cue t=276 evidence, transition `into-flowing-middle` evidence and `orchestra.source.locator`: “harp return in bars 45–48” → “bars 44–46” (cue evidence also adds “Fliessender at bar 38” and “G♭-major signature at bar 47”). Peters p. 180: harp is silent at bar 38 (Fliessender) to bar 43, plays in bars 44–46, and the six-flat signature begins at bar 47. https://s9.imslp.org/files/imglnks/usimg/0/04/IMSLP13083-Mahler-Symphony_No.5_IV.pdf
5. `mahler-5-adagietto`, cue t=128 evidence: the cited Fort Collins note quotes only half of Mengelberg’s words. Added the full annotation (“Statt eines Briefes sandte er ihr dieses im Manuskript: weiter kein Wort dazu. Sie hat es verstanden … Beide haben mir dies erzählt. WM”), which supports every clause of the cue. https://www.alma-mahler.com/archiv_semmering_deutsch/presscorner/alma_und_musik.html
6. `origins-purcell-fairy-queen-chaconne`, cue t=114 and transition `closing-texture` evidence: “running basso from bar 81” → “bar 82”. Bass bar 81 is a dotted half note; the quaver runs begin in bar 82 (Shedlock–Dunn score, printed p. 51, system beginning bar 79). https://s9.imslp.org/files/imglnks/usimg/6/69/IMSLP435506-PMLP237007-Suite_from_The_Fairy_Queen_Complete.pdf

### Protected-data and other findings (not edited)

- `origins-purcell-fairy-queen-chaconne`: `tuning: 415` is not stated on the Commons record (https://commons.wikimedia.org/wiki/File:Purcell_TheFairyQueen_ActV_Chaconne_Z629_Esmuc.flac); unverified.
- `origins-monteverdi-quel-augellin`: `movement` says “No. 13”; IMSLP’s contents list (https://imslp.org/wiki/Madrigals,_Book_4,_SV_75%E2%80%9393_(Monteverdi,_Claudio)) and LiederNet both number it 14th in Book IV (SV 87 is correct). The `recorded` date, 2 November 2005, is right (Internet Archive description of the Tudor Consort album; Commons shows the upload date 19 August 2010).
- `origins-pange-lingua`: the cue titled “Aquinas at the supper table” (t=34) describes stanza 3 (the Last Supper); if stanzas are about 34 s each, t=34 falls in stanza 2 (the birth). Timings not changed; audio not checked.
- `bruckner-7-adagio`: the cited Gutmann first edition (IMSLP #26842) could not be fetched (IMSLP’s download redirect needs JavaScript), so its score claims rest on the Munich analysis and Cohrs/Berlin Philharmonic notes, not on the printed pages. The first edition adds cymbals, triangle and timpani at the C-major climax (letter W); the `orchestra.ensemble` lists none. Which edition the Munich recording uses is not stated.
- `beethoven-5-first-nikisch-1913`, cue bar 303: correct. Mutopia’s oboe cadenza (bar 268) occupies 12 quarters in one numbered bar, so raw MIDI bar counts after 268 run five bars ahead of the printed numbering used in the file.

### Confirmed (one line each)

Quotations and dated facts:
- Schumann on Chopin’s Ballade No. 1, “I’m glad of that because it’s the one I prefer too” (Leipzig 1836, in Schumann’s letter): https://www.laphil.com/works/ballade-no-1-in-g-minor-op-23
- Shostakovich, “I wrote the third part in three days”, from the Introduction to the Score of Symphony No. 5 (Muzgiz, 1956): https://shostakovich-en.ru/140en
- Stravinsky sketchbook, p. 97, 4/17 November 1912, Clarens, Châtelard Hotel, “with an unbearable toothache I finished the music of the Sacre”; 5 April 1914 Casino de Paris, composer carried on shoulders; 1943 revision of the Sacrificial Dance (unit of beat 16th → 8th, quavers become crotchets): Van den Toorn, https://publishing.cdlib.org/ucpressebooks/public/book/stravinsky-and-the-rite-of-spring.html
- Schumann diary, Saturday 24 February 1838 (“das kleine Ding ‚Träumerei‘ componirt”) and 25 February (“Kinderscene in F Dur, die mir sehr hübsch vorkommt”): https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
- Beethoven-Haus: “appassionato” appears nowhere in Op. 57; the title comes from Cranz, Hamburg, 1838: https://www.beethoven.de/en/work/view/5292968940404736
- Bruckner Adagio: sketch concluded 11 January 1883, score 21 April 1883, Wagner died 13 February 1883 (Cohrs): https://www.hyperion-records.co.uk/dc.asp?dc=D_LSO0887-D . Levi, Munich, *Die Walküre* and the midnight “funeral music”: https://www.berliner-philharmoniker.de/en/programme-notes/symphony-no-7-in-e-major/
- Nikisch, 10 November 1913, whole symphony in one day, engineer Max Hampe, exposition repeat omitted: https://journal.sciencemuseum.ac.uk/article/acoustic-recording/
- Rachmaninoff Prelude: Victor session 14 October 1921, take 3 (DAHR); written at nineteen and demanded as an encore (Matthew-Walker): https://adp.library.ucsb.edu/index.php/matrix/refer/700010909 ; https://www.hyperion-records.co.uk/dw.asp?dc=W6690_66081
- Murphy/“Raymond Dixon”, Victor 45083-B, B-15595 take 4, 17 March 1915, Di Stefano harp (takes 3–4), Carlino lute: https://adp.library.ucsb.edu/index.php/matrix/refer/700000578
- Caruso, Vesti la giubba, Milan 30 November 1902, Cottone, matrix 2875b; Chaliapin, Hayes 9 October 1922, Byng, Keneman, Victor 88663 (secondary summaries of DAHR; DAHR pages blocked by a bot challenge during the run): https://www.discogs.com/release/14981062-Enrico-Caruso-Pagliacci-Vesti-La-Giubba ; https://adp.library.ucsb.edu/index.php/matrix/detail/2000007686/Cc1891-Song_of_the_Volga_boatmen
- Leoncavallo, Act I finale (Peppe, “Andiamo, arriva il pubblico”, Recitar!/Vesti la giubba): https://www.teatroregio.torino.it/sites/default/files/uploads/inline-files/20210807%20-%20Pagliacci%20-%20Libretto.pdf
- Guarini, Il pastor fido I.1 lines 175–186, with Monteverdi’s ending: https://www.lieder.net/lieder/get_text.html?RF=0&TextId=7068
- Pange lingua: six six-line stanzas, Tantum ergo = stanzas 5–6, Roman Phrygian (Mode III) tune; recording 14 March 2005: https://en.wikipedia.org/wiki/Pange_lingua_gloriosi_corporis_mysterium ; https://commons.wikimedia.org/wiki/File:Pange_Lingua_Latin_in_Latin.ogg
- Bartók: composed 15 August–8 October 1943 at Saranac Lake; Koussevitzky commission in hospital: https://www.orchestralbassoon.com/bartok-concerto ; the Pittsburgh programme PDF (culturaldistrict-prod.s3.amazonaws.com …/Jan._17-19__2020.pdf)
- Debussy, La Mer begun August 1903 at his parents-in-law’s in Burgundy; Hokusai on the score’s title page; interplay of twos and threes throughout the first movement: https://en.wikipedia.org/wiki/La_mer_(Debussy) ; https://www.bso.org/works/la-mer
- Liszt Sonata/Schumann dedication; Ives 1921 mailing and the Emerson Concerto: Gann pre-concert talk https://www.kylegann.com/Concord-Preconcert.html ; https://en.wikipedia.org/wiki/Piano_Sonata_No._2_(Ives)
- Meyer, Wigmore Hall 11 May 1927 (Couperin, Ravel *Jeux d’eau*, Stravinsky *Piano-Rag-Music*); Couperin sessions 1953/54, Salle Adyar, DF 86: https://classical-pianists.net/viii/marcelle-meyer/chronology/
- Fauré Requiem sung in full orchestral version at his 1924 funeral: https://en.wikipedia.org/wiki/Requiem_(Faur%C3%A9)
- Lili Boulanger: Ernest Boulanger died 14 April 1900 (Lili born 21 August 1893, so six); Psalm 130 orchestration finished at Gargenville 1917; tenor canon a fifth below the contralto: https://en.wikipedia.org/wiki/Ernest_Boulanger_(composer) ; https://repertoire-explorer.musikmph.de/wp-content/uploads/vorworte_prefaces/1001.html
- Mahler/Mengelberg, Bernstein at Robert Kennedy’s funeral 8 June 1968: https://mahlerfoundation.org/mahler/compositions/symphony-no-5/symphony-no-5-movement-4-adagietto-sehr-langsam/

Score details confirmed against the cited scores or machine-readable sources:
- Beethoven 5/I (Mutopia 941 MIDI): bars 1–5, 59–70, 125–128, 248, 268, 303 (printed numbering), 374–381.
- Chopin Ballade 1 (Mutopia 1959 MIDI): bars 1–10, 61–69, 93–96, 106–109, 164–168, 193–197, 206–210, with the 4/4 → 6/4 → 4/4 changes at bars 8 and 208.
- Schubert, Der Leiermann (OpenScore MusicXML): voice entries at bars 9, 17, 31, 39, 53; piano alone at 1–8, 27–30, 49–52, 59–61; octave leaps at 56–57.
- Bartók III (B. & H. 9009 pages 47–67): eleven-note runs at fig. 10, solo pizzicato cellos and sul ponticello strings at bars 54–61, poco agitato/molto rubato at fig. 62, cor anglais at Tempo I (fig. 80), final piccolo/muted-horn/timpani bars.
- Debussy La Mer I (Durand pp. 143–173): 6/4 → 6/8 at Modéré, sixteen cellos at fig. 9, Très lent chorale at fig. 14.
- Stravinsky Part II (pp. 86–128): Largo, six solo violas at fig. 91, eleven chords at fig. 103, 5/8–9/8 at fig. 104, G.P. at fig. 121, Lento at fig. 128, cor anglais at fig. 129.
- Shostakovich Largo (Muzgiz pp. 85–108): eight string staves with violin III opening, flute solo fig. 79 and two flutes fig. 80, piano and xylophone at fig. 89, con sord. at fig. 93, celesta/harp harmonics and morendo at fig. 96.
- Mahler Adagietto (Peters pp. 178–182), Ravel Gibet (Durand pp. 17–20), Scriabin 5 (Rochester copy, E♭ signature and final rest), Couperin (Outremontaises, bars 31–53), Träumerei (first edition p. 11), Mahler Kindertotenlieder IV (Kahnt pp. 48–58), Verdi Dies irae (Eulenburg pp. 21–37), Fauré In paradisum (Hamelle pp. 114–122), Boulanger Ps. 130 (Durand p. 1).
