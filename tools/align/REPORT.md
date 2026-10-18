# Score alignment report

**Decision:** publish all four files as **provisional**, with `review.by: null`. No aural review was performed. **MEAS** denotes measurements from commands run for this assignment; source/edition/licence statements are **EXT**, linked in [README.md](README.md). Full numerical records, software versions, recording SHA-256 hashes and endpoint-search evidence are in [`results/`](results/).

## Method and acceptance

All four use public-domain Mutopia LilyPond/MIDI, source-defined parts, explicit performed bar order, tuning-adjusted Sync Toolbox **1.4.2** multiscale DTW with **chroma + DLNCO at 50 frames/s**, first/last pitch-energy anchors, section anchors and strictly monotonic path interpolation. No onset snapping or machine chord labels. Exact reproduction commands and the symbolic exceptions are in [README.md](README.md).

The primary onset check is nearest **librosa** spectral-flux onset distance for each distinct score attack, not a note-weighted average. A separate locally normalised detector checks quiet passages missed by default peak picking. Neither detector supplies the alignment. Whole-piece primary medians are below **0.15 s**; all four runs report `gateReasons: []`, zero collapsed attacks and zero non-positive durations. No gross pitch/order mismatch was identified in the numerical checks and inspected pitch-energy overlays. This is not a human timing-accuracy benchmark.

| MEAS | Performed bars | Notes | Parts/voices | Estimated A (Hz) | Primary median (s) | Primary P95 (s) | Local-detector median (s) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Satie | 78 | 455 | 4 | 441.02 | 0.0293 | 0.0664 | 0.0372 |
| Beethoven | 626 | 10,135 | 12 | 441.27 | 0.0691 | 1.1733 | 0.0300 |
| Bach | 76 | 1,808 | 4 | 442.80 | 0.0235 | 0.0505 | 0.0332 |
| Schubert | 86 | 2,730 | 5 | 440.00 | 0.1198 | 0.5360 | 0.0433 |

**Do not hide the large Beethoven/Schubert P95 values.** Default peak picking misses quiet accompaniment attacks: for example Beethoven’s 56–64 s window has a 1.894 s default median but a 0.027 s local-detector median. Pitch-energy inspection supports detector omissions there, rather than a four-second displacement of the score. Dense unrelated attacks can also produce deceptively small nearest-onset errors; the additional evidence does not remove that limitation.

## Satie — [numerical record](results/satie-gymnopedie-1.json)

- **Method/source:** Mutopia 37; regenerate voice-separated MIDI to preserve the melody’s tied F♯ against accompaniment reattacks. Four encoded parts, including the brief additional bass-staff voice. Performed compact-Mutopia order: **1–39, 1–31, 40–47**. Opening editorial chords only: Gmaj7/Dmaj7 in bars 1–4 and their recurrence, eight spans with `basis: "editorial"`.
- **Sections (score time versus existing section):** bar 19 **42.928 versus 42 s**; bar 1 occurrence 2 **90.340 versus 88 s**; second ending bar 40 **158.528 versus 158 s**. The repeat’s bass attack is later than the existing broad return label; those labels were not forced onto score bars.
- **Recurrence:** independent 65 s fixed-lag chroma comparison, **5–70 → 92.5–157.5 s**, offset **87.5 s**, mean cosine **0.8571**. Its best fixed lag is 0.840 s earlier than the score-derived prediction over this window; rubato means one lag cannot describe the entire return.
- **Held notes:** bar-9 F♯ melody tie is one event lasting **9.372 s**, and **8.986 s** on recurrence. The bar-19 E tie lasts **7.058 / 6.762 s**. No artificial reattacks were introduced into these ties.
- **First / middle / last attack anchors:** **2.180 / 90.340 / 176.817 s**; independent onset deviations **0.061 / 0.067 / 0.009 s**. Leading silence is retained. Minimum mapped note duration: **0.607 s**.
- **Doubts:** compact source bar numbers are not the original written-out engraving’s numbers. Chord spans describe the written harmony, not a simultaneously struck four-note chord. Pedal and release timing are not established.

Worst five eight-second regions, ranked by primary median:

| Recording window (s) | Median (s) | P95 (s) | Local median (s) |
| --- | ---: | ---: | ---: |
| 80–88 | 0.037 | 0.073 | 0.049 |
| 152–160 | 0.035 | 0.049 | 0.043 |
| 8–16 | 0.035 | 0.052 | 0.046 |
| 96–104 | 0.034 | 0.053 | 0.035 |
| 64–72 | 0.034 | 0.089 | 0.045 |

## Beethoven — [numerical record](results/beethoven-5-first.json)

- **Method/source:** Mutopia 941, full orchestral first movement; twelve source staves, not MIDI-patch-derived instrument guesses. Double basses are converted from written to sounding octave. Performed order: **1–124 twice, then 125–502**. The twelve-quarter encoded oboe cadenza stays inside **bar 268**, not six extra numbered bars.
- **Sections:** bars **59 / 1 occurrence 2 / 125 / 248 / 303 / 374** map to **51.987 / 102.587 / 203.053 / 295.749 / 349.659 / 402.176 s**. Differences from existing **54 / 102 / 204 / 292 / 350 / 404 s** are **−2.013 / +0.587 / −0.947 / +3.749 / −0.341 / −1.824 s**. The 292 s label anticipates the score’s bar-248 return; the surrounding build and the returned held gestures were inspected, not silently equated.
- **Recurrence:** **3–48 → 105–150 s**, offset **102 s**, cosine **0.9338**; **54–96 → 155–197 s**, offset **101 s**, cosine **0.9410**. Both support taking the exposition repeat; their different lags show why a fixed offset is not a complete timing map.
- **Held-note sanity:** first-violin opening E♭ in bar 2 lasts **2.637 s**, and the tied D across bars 4–5 lasts **2.768 s**. On repeat: **2.812 / 3.103 s**. Each is one event, not a string of detected attacks.
- **First / middle / last attack anchors:** **0.896 / 233.035 / 498.537 s**; deviations **0.037 / 0.011 / 0.028 s**. Minimum mapped note duration: **0.0167 s**.
- **Doubts:** orchestral masking makes the default onset detector particularly incomplete. The largest local-detector eight-second median anywhere is **0.0519 s**, but short cadenza notes and actual fermata releases still need a listener. Instrument labels identify score parts, not separated audio stems. Source tremolos/articulations are not a transcription of individual orchestral attacks.

| Recording window (s) | Median (s) | P95 (s) | Local median (s) |
| --- | ---: | ---: | ---: |
| 56–64 | 1.894 | 3.689 | 0.027 |
| 160–168 | 1.332 | 3.207 | 0.037 |
| 72–80 | 0.621 | 2.029 | 0.026 |
| 360–368 | 0.611 | 1.878 | 0.027 |
| 64–72 | 0.476 | 1.675 | 0.048 |

## Bach — [numerical record](results/bach-wtc1-fugue-b-minor.json)

- **Method/source:** Mutopia 1563; compile soprano, alto, tenor and bass separately to preserve cross-staff identity and avoid anonymous MIDI-context collisions. The explicitly notated bar-23 cross-voice F♯ tie stays with its originating Alto attack. Performed order: **1–76 once**; no literal repeat inserted.
- **Sections:** existing **138 / 194 / 264 / 318 / 392 / 466 s** have nearest bar locators **22 / 31 / 43 / 52 / 64 / 76**, at **137.822 / 192.332 / 264.104 / 317.674 / 390.646 / 465.118 s**. These are locators, **not independent formal-boundary checks**: the existing passage labels do not assert score bars.
- **Recurrence:** the strongest tested 60 s fixed-lag diagonal at offsets ≥20 s has cosine **0.5884**, lag **168.5 s**. This does not support an inserted long repeat; it does not deny shorter fugue-subject recurrences.
- **Held-note sanity:** the final B-major chord begins **465.118 s**, not several seconds into its decay. Its mapped written hold extends **12.242 s** to the **477.360 s** analysis frame; the measured −45 dB decay boundary is **477.367 s**, and the file ends at **482.195 s**. This is a display-duration estimate, not a measured key release.
- **First / middle / last attack anchors:** **0.785 / 254.398 / 465.118 s**; deviations **0.016 / 0.012 / 0.011 s**. Minimum mapped note duration: **0.196 s**.
- **Doubts:** the final decay threshold and the bar-23 cross-voice attribution are explicit modelling decisions. Ornament realisation is not independently established. No claim of aural verification of four-voice continuity.

| Recording window (s) | Median (s) | P95 (s) | Local median (s) |
| --- | ---: | ---: | ---: |
| 48–56 | 0.038 | 0.064 | 0.046 |
| 16–24 | 0.033 | 0.110 | 0.039 |
| 152–160 | 0.033 | 0.055 | 0.037 |
| 144–152 | 0.032 | 0.053 | 0.042 |
| 160–168 | 0.032 | 0.100 | 0.043 |

## Schubert — [numerical record](results/schubert-impromptu-gflat.json)

- **Method/source:** Mutopia 1193; independently compile five explicitly encoded voices, keeping cross-staff figures with their source variable. Ignore the MIDI’s eight-quarter silent pre-roll and encoder-authored playback tempo/pedal. Performed order: **1–86 once**; bar 55 is a written-out return, not an inserted repeat.
- **Sections:** bars **25 / 55 / 75** map to **98.189 / 218.961 / 300.475 s**, versus existing **100 / 218 / 298 s**: differences **−1.811 / +0.961 / +2.475 s**.
- **Recurrence:** **2–26 → 220.5–244.5 s**, offset **218.5 s**, cosine **0.9461**; residual from the score-derived prediction **−0.461 s**.
- **Held-note sanity:** the final G♭ chord begins **348.233 s** and has a mapped written hold of **9.587 s**, extending to the estimated decay boundary. Individual source grace-note timing remains uncertain; the minimum mapped duration is **0.0173 s**, with no zero-length notes.
- **First / middle / last attack anchors:** **0.600 / 172.870 / 348.233 s**; deviations **0.043 / 0.130 / 0.044 s**.
- **Doubts:** this is the weakest timing case. The 344–352 s closing window’s local-detector P95 remains **0.344 s**, despite a **0.089 s** local median. Do not use this file as evidence for frame-precise grace-note or arpeggio timing. Aural checking of that closing window, the 208–216 s transition and cross-staff passages is particularly important.

| Recording window (s) | Median (s) | P95 (s) | Local median (s) |
| --- | ---: | ---: | ---: |
| 344–352 | 0.446 | 1.044 | 0.089 |
| 208–216 | 0.245 | 1.098 | 0.044 |
| 144–152 | 0.211 | 0.819 | 0.051 |
| 320–328 | 0.193 | 0.539 | 0.055 |
| 136–144 | 0.183 | 0.695 | 0.045 |

## Commands run and key output

Final publication and checks, run sequentially from the project root:

```sh
OPENBLAS_NUM_THREADS=1 OMP_NUM_THREADS=1 MKL_NUM_THREADS=1 NUMBA_NUM_THREADS=1 /tmp/contrapunctus-align-venv/bin/python tools/align/align.py --publish satie-gymnopedie-1 beethoven-5-first bach-wtc1-fugue-b-minor schubert-impromptu-gflat
/tmp/contrapunctus-align-venv/bin/python tools/align/check_contract.py docs/assets/data/satie-gymnopedie-1/score.json docs/assets/data/beethoven-5-first/score.json docs/assets/data/bach-wtc1-fugue-b-minor/score.json docs/assets/data/schubert-impromptu-gflat/score.json
node tools/validate.mjs docs/assets/data/satie-gymnopedie-1/score.json docs/assets/data/beethoven-5-first/score.json docs/assets/data/bach-wtc1-fugue-b-minor/score.json docs/assets/data/schubert-impromptu-gflat/score.json
```

Key output:

```text
PUBLISHED satie-gymnopedie-1 provisional; not checked by ear
PUBLISHED beethoven-5-first provisional; not checked by ear
PUBLISHED bach-wtc1-fugue-b-minor provisional; not checked by ear
PUBLISHED schubert-impromptu-gflat provisional; not checked by ear
ok docs/assets/data/satie-gymnopedie-1/score.json contract; 78 bars; 455 notes; 4 source-defined voices
ok docs/assets/data/beethoven-5-first/score.json contract; 626 bars; 10135 notes; 12 source-defined voices
ok docs/assets/data/bach-wtc1-fugue-b-minor/score.json contract; 76 bars; 1808 notes; 4 source-defined voices
ok docs/assets/data/schubert-impromptu-gflat/score.json contract; 86 bars; 2730 notes; 5 source-defined voices
ok    docs/assets/data/satie-gymnopedie-1/score.json
ok    docs/assets/data/beethoven-5-first/score.json
ok    docs/assets/data/bach-wtc1-fugue-b-minor/score.json
ok    docs/assets/data/schubert-impromptu-gflat/score.json
```

Source extraction also printed the four event counts above, with pitch/onset inventory assertions against the published MIDI. Initial candidates with leading-silence errors, a late Bach final attack, or a collapsed Schubert grace note were **not published**; explicit endpoint anchors and the standard strict-path conversion address those failure mechanisms. Source syntax conversion and voice isolation are reproducible, not hand-edited output notes.

**Not run / unavailable:** aural review, site build and browser integration tests. The requested builder brief was unavailable at `local://council/builder-brief.md`; the supplied assignment and project contracts governed the work. No named listener has checked these files. Existing listening-section content was intentionally left to its owners.

## Solo-piano expansion scope — 17 October 2026

Only recordings already present in `content/listen/` were considered. The source inventory supplies complete matching Mutopia LilyPond and MIDI for the first seven Kinderszenen, selected Chopin works and Rachmaninoff’s Op. 3 No. 2 and Op. 23 No. 5. Newly authored solo-piano performances of Chopin’s Op. 9 No. 2 by Frank Lévy and Patrizia Prati use inventory source 1590; the violin arrangement is not a substitute for the piano score.

The inventory has no complete matching source for the remaining six Kinderszenen, the present Liszt recordings, the Op. 32 Rachmaninoff preludes, Beethoven Op. 109/iii or Scarlatti K. 119. Its Debussy Book I archive contains only Préludes 1–3, not La cathédrale engloutie. Those gaps were not filled with a different movement, arrangement or inferred transcription. This is an inventory limitation, not a claim that no encoding exists elsewhere.

## chopin-etude-op10-5-cortot — withheld before alignment

- **Decision:** do not publish an Op. 10 No. 5-only alignment for this complete recording.
- **Evidence:** the listening module identifies two consecutive études, Op. 10 No. 5 followed by Op. 25 No. 9. Inventory source [Mutopia 926](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=926) covers only the first. Stretching that MIDI over the complete recording would be a gross score-order mismatch even if a nearest-onset median passed.
- **Measurements:** no alignment run or timing median claimed. The single-work performance `chopin-etude-op10-5` is processed separately.

## beethoven-131-lener — withheld before alignment

- **Decision:** do not publish a one-movement or unsubstantiated seven-movement score map for the complete Léner Quartet recording.
- **Recording scope (MEAS):** `content/listen/beethoven-131-lener.mjs` identifies movements I–VII in one file. `ffprobe` measured the cached MP3 at **2441.490 s**. No movement has been silently substituted for that complete recording.
- **Source (EXT):** [Mutopia 594](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=594), Eulenburg 1911, encoded by Will Oram, CC BY-SA 2.5, supplies seven separate movement MIDIs. Direct MIDI inspection establishes **`quartet_o131.mid` = I**, then suffixes **`-1` through `-6` = II through VII**. The unsuffixed file is not the finale or the complete quartet.
- **Blocking correspondence:** the recorded traversal of the variation/scherzo repeats and any historic side joins/cuts has not been substantiated. Independently, the current driver has no demonstrated movement-prefixed engraving/bar map for seven reset-numbered movements, pickups and alternative-ending bar resets. It can concatenate source definitions, but concatenation alone does not establish the performed order or unambiguous bar identity.
- **Measurements:** source MIDI durations are **485 / 595.5 / 44 / approximately 1026 / 2000 / 84 / 1549 quarter units**, respectively; these are symbolic coordinates, not recorded movement boundaries. No alignment, timing median or aural review is claimed. This withholding is a correspondence/compound-map limitation, not absence of a complete symbolic source.

## Config-driven baseline reproduction — 17 October 2026

**MEAS decision:** the new driver regenerated and published all four original `score.json` files **byte-identically**. Every note identity, voice, performed-bar identity and metadata field is unchanged; maximum onset, duration and bar-time differences are **0.000 s**, not merely within the 1 ms numerical-equivalence tolerance. Per-piece `work/<id>-diff.json`, `work/<id>-checks.json` and published `results/<id>.json` retain the comparisons and source/config/audio hashes.

Commands exercised:

```sh
node tools/score.mjs satie-gymnopedie-1 --publish
node tools/score.mjs beethoven-5-first --publish
node tools/score.mjs bach-wtc1-fugue-b-minor --publish
node tools/score.mjs schubert-impromptu-gflat --publish
```

The initial Satie attempt correctly withheld on an overly strict incidental track-0 title expectation; the config now explicitly leaves only that title unspecified while asserting the source-bearing track identities. A tool-process interruption lost background command delivery after Satie completed and during Beethoven engraving. Satie’s persisted check report records `"published": true` and matching original/candidate hashes; the remaining commands were resumed with captured output in `work/<id>-driver.log`. No unfinished candidate was substituted for a publication.

| Recording | Primary median (s) | Maximum first/middle/last deviation (s) | Maximum local eight-second median (s) | Bars / notes / voices | Diff |
| --- | ---: | ---: | ---: | --- | --- |
| Satie | 0.029311 | 0.066893 | 0.049105 | 78 / 455 / 4 | byte-identical |
| Beethoven | 0.069122 | 0.036614 | 0.051950 | 626 / 10135 / 12 | byte-identical |
| Bach | 0.023463 | 0.015957 | 0.046006 | 76 / 1808 / 4 | byte-identical |
| Schubert | 0.119800 | 0.130272 | 0.089367 | 86 / 2730 / 5 | byte-identical |

All reports have `gateReasons: []`, zero collapsed attack intervals and zero non-positive note durations. The Beethoven/Bach/Schubert captured commands each ended `EXIT 0`, printed `PUBLISHED <id> provisional; not checked by ear`, and reported `"byteIdentical": true` with all three `maximumAbsoluteDifferences` equal to zero. SHA-256 before = after:

```text
satie-gymnopedie-1         07c4061d8fa397c5705f8f3e1457aa89d6ed24a8e59b895efd8509405aeac88a
beethoven-5-first          f2fb4fbfb67938b821049b67d1eb12d3f9cc3fbf025f932ae1bbab279b075715
bach-wtc1-fugue-b-minor     85a4a99c39e538af74fa6fdfa050df70a398fca0f7a28525259da384b293f612
schubert-impromptu-gflat    e25ff06d057b382b80bc66927bcd678669c5b519ffc9d87ea82f4517e5e559e5
```

Fresh final-candidate endpoint, middle and worst-region pitch-energy overlays were regenerated; their exact paths are in each check report. The old Beethoven endpoint-image discrepancy is not carried into the new report’s overlays. Engraving/packing output included **16 pages / 502 bars / 11,235 marked glyphs** for Beethoven, **4 / 76 / 2,048** for Bach and **7 / 86 / 2,869** for Schubert, with all aligned bars resolved. The driver uses configured sources and movement wrappers rather than an id-specific engraving table.

**Unchanged limits:** provisional automatic alignment, not aural review. The high primary-detector Beethoven/Schubert P95 values above remain visible; no detector or threshold was loosened to obtain this reproduction. Historical commands earlier in this report describe the original run; `align.py --publish` has now been removed in favour of the single gated driver.

## handel-messiah-hallelujah-edison-1916 — withheld: unsubstantiated accompaniment version

The recording remains eligible as a listening item, but its correspondence to the complete twelve-stave Mutopia 459 encoding is not established. [Densmore’s Edison catalogue transcription](https://www.densmore-edisondd.info/SubjectGuide/index.html) identifies 80292-R as “Mixed voices with orchestra — Oratorio Chorus”; lack of named players is therefore **not** the reason to withhold. [David Hoehl’s discussion of these Edison *Messiah* records](https://www.tnt-audio.com/vintage/edison_messiah_e.html), however, explicitly describes acoustically rescored accompaniments and cautions that their orchestration only broadly resembles later recordings. Neither source establishes that this side plays the encoded instrumental lines without substitutions or cuts.

The prepared config retains the source’s twelve named staves and does not invent a separate double-bass or realised continuo part. No alignment/publication run was made for this id: a plausible choral onset median would not verify the unsubstantiated accompaniment. No `score.json` or sheet pack was published. VerS independently confirmed this version/scoring blocker; this is not a claim that every accompaniment note differs.

## mozart-don-giovanni-serenade — withheld: recording withdrawn as a medley

Mutopia 189 supplies a complete, public-domain six-stave encoding of “Deh, vieni alla finestra”: mandolin, Don Giovanni’s baritone line and four string staves, with 44 bars in 6/8. The original full-score `score.mid` was inspected rather than substituting the reduced `canz.mid`.

The selected Scotti transfer was subsequently identified by its recording author as a Mozart/Verdi medley, and `content/listen/mozart-don-giovanni-serenade.mjs` was withdrawn. The queued driver stopped at its eligibility check (`no eligible content/listen recording`), before source preparation or alignment. The now-orphaned per-piece config was removed; no Mozart-only score was stretched over the combined recording, and no public assets were created.

## beethoven-5-andante — withheld: primary timing gate

The complete public-domain [Mutopia 1437](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=1437) orchestral source is the Breitkopf & Härtel 1862–65 edition encoded by Stelios Samelis and Johannes Heinecke. Twelve named source staves, rather than pitch-register guesses, define the voices. The source C-horn notation lacks a sounding transposition; the configured C-basso correction is −12 semitones for horns only. Double basses likewise require −12, whereas the encoded clarinet transposition is retained. These are notation-based corrections, not evidence of separately recovered recorded instruments. The pickup is bar 0 (0.5 quarter units); bars 1–247 follow once, with the final bar shortened to 1 quarter unit.

`node tools/score.mjs beethoven-5-andante` produced a contract-valid private candidate: **248 bars, 6,619 notes, 12 voices**. The unique-attack primary median is **0.178920 s**, above the unchanged 0.15 s ceiling; P95 is **1.648057 s**. First/middle/last detector deviations are 0.161950 / 0.235308 / 0.274284 s. No collapsed attacks or non-positive durations occurred; mean path-chroma cosine is 0.805808.

Opening, middle (289.091–301.091 s), final (592.505–598.701 s), and the worst primary region (160–168 s) were inspected as pitch-energy overlays, **not listened to**. The latter has primary median 2.696776 s versus local-normalized 0.048728 s, with many quiet attacks missed by the whole-recording detector. That explanation does not waive the primary gate. The final score attack is mapped at 596.504669 s with a 1.100 s notated-duration warp; the acoustic arrival is spread and this is not a measured release. **No public score or sheet pack was published.** The private checks and overlays remain under `tools/align/work/`.

## dvorak-9-largo — withheld: primary timing gate

[Mutopia 1793](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=1793), Keith O’Hara’s encoding of the N. Simrock 1894 edition, is **CC BY-SA 3.0**, not public domain. Its original orchestral MIDI defines 13 grouped voices; the compound “Oboes and cor anglais” and “Trombones and tuba” labels deliberately retain the source’s merged identities. The two horn tracks are grouped. Double basses are **not** lowered again: the source `bass_8` convention already produces sounding pitches. VerS checked the first string entry against the [full-score scan](https://s9.imslp.org/files/imglnks/usimg/4/42/IMSLP405834-PMLP08710-DvorakSymph9.pdf), PDF p. 29 / printed p. 207: written bass D♭4 sounds D♭3, in unison with the cello.

The final `node tools/score.mjs dvorak-9-largo` candidate has **127 bars, 2,989 notes, 13 voices**, once through; only bar 34 is 2/4. Opening pitch inspection rejected a broad-window swell at 2.34 s in favour of the actual first chord near 0.58 s. The resulting first/middle/last detector deviations are 0.057551 / 0.202082 / 0.220864 s, with no collapsed attacks or invalid durations. Nevertheless, the primary unique-attack median is **0.185433 s** (limit 0.15), P95 **1.754322 s**; mean chroma cosine is 0.825789.

The first, middle, final divided-bass, and worst-region overlays were inspected as feature evidence. The worst primary window, 560–568 s, has median 3.816140 s versus local-normalized 0.047084 s; quieter attacks are missed by the whole-recording detector. Local success does not override the primary failure. The four final bass pitches are mapped at 684.129249 s for a warped 6.473735 s, not measured bow releases. The coarse editorial 24 s “bar 7” comparison differs by 11.070 s and is not used to force the path. **No public score or sheet pack was published; no aural review is claimed.**

## brahms-symphony-1-allegro — withheld: primary and final-anchor gates

The [Hauptstimme/OpenScore orchestral MusicXML](https://raw.githubusercontent.com/MarkGotham/Hauptstimme/main/data/Brahms%2C_Johannes/Symphony_No.1%2C_Op.68/1/Brahms_Op.68_1.mxl) identifies IMSLP 317803. The repository dedicates score notation to CC0; its separately licensed analytical lyrics alone are removed from the derivative. Named source parts define the voices. C horns P10/P11 are kept distinct from E-flat horns: the old bass-clef passage in XML 497–508, canonical q1489.5–1525.5, receives **+12 semitones only there**, following the [International Horn Society’s historical-clef rule](https://www.hornsociety.org/publications/horn-call/horn-call-archive/149-advice-for-amateurs). Printed notation and all other source transpositions remain unchanged.

The unrepeated order plays 1–188 then 191–513, omitting the two first-ending bars. The driver produced **511 performed bars, 15,750 notes, 14 voices**. Its primary unique-attack median is **0.627175 s**, P95 **7.699102 s**; first/middle/last detector deviations are 0.022585 / 0.177147 / **4.249627 s**. There are no collapsed attacks or non-positive durations; mean chroma cosine is 0.785947. The 424–432 s primary window has median 10.962880 s while the local-normalized check is 0.025774 s. Neither the local detector nor the plausible harmonic match waives the failed primary and final-anchor gates.

A direct canonical XML-versus-MIDI inventory matched all wind/brass/percussion onset-pitch sets, including the source’s pre-correction horn notation. Several first-violin attacks remain absent from the compiled distinct-attack set, so no complete-inventory identity is claimed. The final overlay was inspected; the nominal final attack is 901.909853 s and the low-string duration warp is 1.990049 s, without a reliable independent primary onset nearby. **No public score or sheet pack was published.**

## brahms-symphony-1-andante-sostenuto — withheld: quiet final-anchor gate

The complete [CC0 orchestral source](https://raw.githubusercontent.com/MarkGotham/Hauptstimme/main/data/Brahms%2C_Johannes/Symphony_No.1%2C_Op.68/2/Brahms_Op.68_2.mxl) likewise cites IMSLP 317803. Analytical lyric labels alone are omitted. The source’s solo/tutti first-violin parts are grouped as Violins I; its actual contrabassoon is retained rather than removed from memory. VerS independently found an active second-movement contrabassoon in a [separately engraved part](https://s9.imslp.org/files/imglnks/usimg/b/ba/IMSLP967826-PMLP01662-Symphony_Number_1_Opus_68_-_Contrabassoon.pdf), p. 4. This is not described as direct inspection of the corresponding 1926–27 scan page.

All 20 source-part distinct onset-pitch sets match the compiled canonical MIDI; one duplicate same-pitch cello event is coalesced. `node tools/score.mjs brahms-symphony-1-andante-sostenuto` yielded **128 bars, 4,437 notes, 13 voices**, without repeats. Primary median **0.087633 s**, P95 **0.403430 s**, and mean chroma cosine 0.832782 are retained in the checks. First/middle/last detector deviations are 0.212608 / 0.165279 / **0.510292 s**. The last value exceeds the unchanged 0.5 s gate; it is not rounded down or excused because the miss is small.

Opening, middle and final pitch-energy overlays were inspected, not listened to. The quiet terminal E-major rearticulation is not securely distinguished from internal bow-energy fluctuations by the primary detector. The nominal last attack at 513.509844 s maps three written quarters to 2.050156 s; this is not an observed acoustic release. **No public score or sheet pack was published.**

