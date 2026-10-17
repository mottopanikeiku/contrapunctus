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
