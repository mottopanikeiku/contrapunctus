# Bernstein — hosted recordings and checks

Checked 19 October 2026. Scope: Hall recordings, dossiers and notes for Bernstein’s music. Composition rights are stated separately from phonogram rights in every dossier. None of the three hosted transfers is presented as public-domain music; the Office’s work pages name Boosey & Hawkes for performance licences.

## Hosted

| Hall id | Performance and carrier | File | Duration |
| --- | --- | --- | --- |
| `bernstein-age-of-anxiety-part-1` | Lukas Foss, piano; Philharmonic-Symphony Orchestra of New York; Bernstein. Columbia Masterworks ML 4325, US mono LP (the Archive’s transfer is of a c. 1960 pressing); recorded 27 February 1950, Columbia’s 30th Street Studio. Original 1949 version of the score. Part I: Prologue, The Seven Ages, The Seven Stages. | `ML4325 Bernstein Sym 2 (i).mp3` in [ml-4325-bernstein-sym-2-ii](https://archive.org/details/ml-4325-bernstein-sym-2-ii) | EXT: Archive metadata 996.68 s; MEAS: audio analysis 996.6 s. MD5 24d316cf1a844d232ee72d9a0a5b2cad (Archive-supplied). |
| `bernstein-age-of-anxiety-part-2` | Same performance. Part II: The Dirge, The Masque, The Epilogue. | `ML4325 Bernstein Sym 2 (ii).mp3` in the same item | EXT: 935.29 s; MEAS: 935.3 s. MD5 05ecca05e9756f829f75d06f90f84a37. |
| `bernstein-serenade-phaedrus-pausanias` | Isaac Stern, violin; Symphony of the Air; Bernstein. Columbia Masterworks ML 5144, US mono LP, 1956; recorded 19 April 1956, New York. First movement, Phaedrus and Pausanias. | `disc1/01.01. Serenade For Violin Solo, Strings And Percussion: I - Phaedrus: Pausanias.mp3` in [lp_serenade-for-violin-solo-strings-and-percu_leonard-bernstein-symphony-of-the-air-isaa](https://archive.org/details/lp_serenade-for-violin-solo-strings-and-percu_leonard-bernstein-symphony-of-the-air-isaa) | EXT: 420.94 s; MEAS: 420.9 s. MD5 b3ccbc51e53d77bd50bd5fd5c3c79e32. |

Part I and Part II form a two-part set (`set.id` `bernstein-age-of-anxiety`). The two files are the two sides of the LP, each complete in itself as a side; the 78-rpm issue (set MM-946, matrices XCO 42387 to 42394) divided the music differently, and the dossiers record both.

## Dated evidence for first publication

- ML 4325: the Archive note by the uploader (Bryan, The Shellackophile) states first issue in March 1951 on the LP and the 78-rpm set MM-946 (records 13121-D to 13124-D). [Discogs release 5727420](https://www.discogs.com/release/5727420) gives “Year: 1950”, US, vinyl LP, mono, and master 1089430 also 1950; the Discogs year may be the recording year. Either year is before 1963. The dossier uses 1951 as the stated first issue and records the discrepancy. The Shellackophile’s [blog post of 8 October 2012](http://shellackophile.blogspot.com/2012/10/bernstein-age-of-anxiety-original.html) independently names ML-4325, the mono LP and the recording date.
- ML 5144: [Discogs release 5995545](https://www.discogs.com/release/5995545) (Columbia Masterworks ML 5144, US, 1956, vinyl LP mono); the Archive record gives 1956 and publisher Columbia Masterworks; Sony’s upload of the [Eryximachus movement](https://www.youtube.com/watch?v=vZ6lhjkhZk0) states “Recorded on April 19, 1956, in New York City. Mono recording. Originally released 1956 Sony Music Entertainment Inc.”
- Rights reasoning: [Directive 2011/77/EU](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A32011L0077), recitals 1–3 and 7 and Article 1(2) and 1(3), read in full. INFERENCE: a phonogram first published in 1951 or 1956 had completed its 50-year term (1996 or 2006) before 1 November 2013, so the 70-year extension did not apply. This is a territorial EU treatment, not US or worldwide clearance and not a Creative Commons licence. The phrase and the basis follow the project’s existing `eu-published-before-1963` rule.

## Speed and pitch checks

Method: `librosa.estimate_tuning` on the whole cached MP3 (resolution 0.01 semitone), run after `tools/audio.mjs analyze`. These figures are the research desk’s measurements of the audio, not claims from a source.

| Hall id | Measured offset | Equivalent A |
| --- | --- | --- |
| `bernstein-age-of-anxiety-part-1` | +0.07 semitone | about 441.8 Hz |
| `bernstein-age-of-anxiety-part-2` | +0.06 semitone | about 441.5 Hz |
| `bernstein-serenade-phaedrus-pausanias` | +0.07 semitone | about 441.8 Hz |

All three agree with normal LP playback (A near 440–442). Durations: the Office gives a nominal 36 minutes for the Second Symphony in its current, revised form (Details block) and the two parts here sum to 32 minutes 12 seconds; the pitch shows no speed error, so the difference is tempo and the shorter 1949 finale. The Office gives 30 minutes for the Serenade and the three LP bands sum to 31 minutes.

## Section times

The Archive note for ML 4325 gives approximate start times for each section and variation, from the uploader’s own listening: Part I, Prologue 0:01, Variation 1 at 2:21, 2 at 3:20, 3 at 4:38, 4 at 6:05, 5 at 7:00, 6 at 7:48, 7 at 8:53, Variation 8 at 10:41, 9 at 12:29, 10 at 13:39, 11 at 14:06, 12 at 14:57, 13 at 15:16, 14 at 16:04; Part II, Dirge 0:01, Masque 5:41, Epilogue 10:10. The audio analysis agrees at the points checked: a rise from about −27 dB to about −10 dB at 3:20 and a near-silent join at 10:40 in Part I, a rise in note density at 5:41 and a fall at 10:10 in Part II. Section labels and cues use those times as passages (`score-proportion`), never as moments. The score was not available; the variation tempo marks quoted in one cue are the uploader’s list.

For the Serenade, the change from Lento to Allegro marcato at about 3:03 is placed from the audio (note density rises from below one to above two per second at 3:05) and from Bernstein’s own division of the movement. It is described as a passage.

The cue placing the orchestra’s four bars of “hectic jazz” in the Masque (500 s) is the least certain: Bernstein’s programme note does not give a position, and the audio shows loud passages near 8:55 and 9:15–9:40. The note says only that the entry comes within the Masque and before the Epilogue. Reviewers may prefer to remove it.

## Performer credit in dispute (Serenade)

The LP credits the Symphony of the Air (Archive and Discogs). Sony’s upload of the Eryximachus movement lists “New York Philharmonic”. The dossier records the field as disputed with both alternatives, and the listen file uses the carrier’s credit. Isaac Stern’s part and Bernstein’s conducting are not in doubt.

## Candidates examined and not hosted

- **Fancy Free, Ballet Theatre Orchestra, Bernstein, Decca set DA-406** ([Internet Archive transfer](https://archive.org/details/da-406s-2-8-bernstein-fancy-free), 20:27; recorded 2 June 1944; issued 1946 per the transfer note and per Carol J. Oja’s [OUPblog excerpt](https://blog.oup.com/2014/07/billie-holiday-fancy-free-leonard-bernstein/), “that label released Fancy Free the same year” as March 1946). The publication evidence is sound and the music is the most historically important of the pre-1963 candidates. The transfer was not hosted because it plays flat. MEAS: the whole file measures −0.38 semitone (about A = 430 Hz) and every side lies between −0.35 and −0.43; a steady component sits at 58.5 Hz, where 60 Hz mains hum from the session would sit at about 2.4 per cent slow. An independent transfer of the “Galop Variation and Finale” side, made at 78 rpm by George Blood for the Archive of Contemporary Music ([item](https://archive.org/details/78_fancy-free_leonard-bernstein-ballet-theatre-orchestra_gbia0000702b), 3:27), measures −0.35 semitone as well, and the Billie Holiday side of the set measures −0.23. INFERENCE: the discs were cut at a speed above 78 rpm, and both public transfers play about 2 per cent slow. No corrected transfer was found. A transfer at the correct speed would be eligible.
- **Trouble in Tahiti, MGM LP** (Beverly Wolff, David Atkinson and others; Archive items dated 1953 and 1958 with conflicting dates for the carrier): the date of first publication was not established from a dated source, and each file spans several scenes.
- **Candide, original Broadway cast, Columbia 1956** (overture excerpts, `candideoverobc`): user excerpts without carrier documentation.
- **Symphonic Dances from West Side Story, Columbia ML 5661 / MS 6251 (1961)** and **West Side Story, original cast (Columbia, 1957, Max Goberman conducting)**: no Archive transfer with documented carrier was found.
- **Serenade, movements II–III and IV–V**: on the same LP and eligible on the same evidence; not added.
- **Fancy Free, Capitol LP conducted by Joseph Levine (1953)**: not a Bernstein performance and not checked.
- **Stravinsky’s Octet and *L’histoire du soldat* conducted by Bernstein (1947)** appear in the Archive search. They belong to Stravinsky’s chapter and were not examined.

## Listing notes: source of each cue

- Part I: Bernstein’s programme note as quoted on the Office’s [Symphony No. 2 page](https://leonardbernstein.com/works/view/16/symphony-no-2-the-age-of-anxiety) (clarinet duet, flute scale, “each variation seizes upon…”, “a hectic, though indecisive, close”, the poem’s publication, prize and characters); the Archive note for the variation markings and times.
- Part II: the same page for the Dirge (twelve-tone row, “colossal dad”), the Masque (“nervous, sentimental, self-satisfied, vociferous”; the four bars of “hectic jazz”), the Epilogue (“something pure”; the single chord; the 1965 revision), the commission, the dedication “in tribute” and the three weeks in which the Epilogue was finished.
- Serenade: Bernstein’s guideposts of 8 August 1954 and his remarks on the Office’s [Serenade page](https://leonardbernstein.com/works/view/23/serenade-after-platos-symposium); the recording date from Sony’s upload.

## Unresolved

- The exact position of the orchestra’s four bars in the Masque (see above).
- The Discogs year of ML 4325 (1950) against the Archive’s March 1951.
- The orchestra credit on the 1956 Serenade.
- Whether a speed-corrected transfer of the 1944 *Fancy Free* exists.
