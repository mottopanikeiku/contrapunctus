# Provisional score alignment

These scripts produce the four requested Listening Room score event tables. They do not transcribe the recordings or claim that anybody listened to them. A published file has `status: "provisional"` and `review.by: null`. Numerical results and publication decisions are in [REPORT.md](REPORT.md).

## Inputs and provenance

The downloaded files in `sources/<id>/` are unmodified. Each `manifest.json` records the source page, edition, encoder, licence, download URLs and SHA-256 digests. The encodings are declared **Public Domain** by Mutopia; this is separate from the recordings’ rights.

| Recording | Mutopia source | Edition | Encoder |
| --- | --- | --- | --- |
| Satie, Gymnopédie No. 1 | [37](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=37) | Dover reproduction of the original; translated text omitted | Evin Robertson |
| Beethoven, Symphony No. 5/i | [941](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=941) | Breitkopf and Härtel, 1862–1865 | Stelios Samelis; version adaptation by Johannes Heinecke |
| Bach, BWV 869 fugue | [1563](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=1563) | Breitkopf & Härtel, 1866 | Itay Perl |
| Schubert, D. 899/3 | [1193](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=1193) | Breitkopf & Härtel, 1888 | Ph. Raynaud |

[Mutopia’s public-domain statement](https://www.mutopiaproject.org/legal.html#publicdomain) applies to the symbolic sources. The cached MP3 recordings must already exist at `cache/audio/<id>.mp3`; no recording is downloaded or republished by this workflow.

## Commands

Run from the project root. The exercised interpreter was Python 3.11.15. BLAS, OpenMP and Numba use one thread; process recordings sequentially. No project build, Git command or paid provider is involved.

Environment creation and the initial installation used:

```sh
uv venv --python /home/alp/.local/bin/python3.11 /tmp/contrapunctus-align-venv
uv pip install --python /tmp/contrapunctus-align-venv/bin/python librosa==0.11.0 mido==1.3.3 synctoolbox==1.4.2 pretty_midi==0.2.11
```

For a fresh reproduction, use the frozen environment instead of the second command:

```sh
uv pip install --python /tmp/contrapunctus-align-venv/bin/python -r tools/align/requirements.txt
```

Install the portable compiler linked by [LilyPond’s download page](https://lilypond.org/doc/v2.24/Documentation/web/download), then acquire and inspect the sources:

```sh
curl --fail --location https://gitlab.com/lilypond/lilypond/-/releases/v2.24.4/downloads/lilypond-2.24.4-linux-x86_64.tar.gz --output /tmp/contrapunctus-lilypond.tar.gz
tar -xzf /tmp/contrapunctus-lilypond.tar.gz -C /tmp
python3 tools/align/fetch.py
/tmp/contrapunctus-align-venv/bin/python tools/align/inspect_midi.py
OPENBLAS_NUM_THREADS=1 OMP_NUM_THREADS=1 /tmp/contrapunctus-align-venv/bin/python tools/align/score_events.py
```

`score_events.py --lilypond /another/path/to/lilypond` selects another compiler location; use version 2.24.4 for this reproduction. Schubert’s derivative wrapper is converted with the adjacent `convert-ly`; the downloaded source is never edited. Generated wrappers, MIDI, event tables, feature caches and plots stay in the ignored `work/` directory.

Run the alignment and all numerical checks, without publication:

```sh
OPENBLAS_NUM_THREADS=1 OMP_NUM_THREADS=1 MKL_NUM_THREADS=1 NUMBA_NUM_THREADS=1 /tmp/contrapunctus-align-venv/bin/python tools/align/align.py satie-gymnopedie-1 beethoven-5-first bach-wtc1-fugue-b-minor schubert-impromptu-gflat
/tmp/contrapunctus-align-venv/bin/python tools/align/endpoint_peaks.py
```

Inspect `work/<id>-checks.json`, `work/<id>-attack-checks.json` and score/pitch-energy overlays. Examples actually used to investigate initial endpoint errors and quiet passages:

```sh
/tmp/contrapunctus-align-venv/bin/python tools/align/diagnose.py satie-gymnopedie-1 0 13
/tmp/contrapunctus-align-venv/bin/python tools/align/diagnose.py satie-gymnopedie-1 83 101
/tmp/contrapunctus-align-venv/bin/python tools/align/diagnose.py beethoven-5-first 0 12
/tmp/contrapunctus-align-venv/bin/python tools/align/diagnose.py beethoven-5-first 50 80
/tmp/contrapunctus-align-venv/bin/python tools/align/diagnose.py beethoven-5-first 486 500.115
/tmp/contrapunctus-align-venv/bin/python tools/align/diagnose.py bach-wtc1-fugue-b-minor 450 482
/tmp/contrapunctus-align-venv/bin/python tools/align/diagnose.py schubert-impromptu-gflat 0 8
/tmp/contrapunctus-align-venv/bin/python tools/align/diagnose.py schubert-impromptu-gflat 144 160
```

`align.py --publish <ids...>` writes only the named `docs/assets/data/<id>/score.json` files after its numeric gates. Do not use that option merely because the whole-piece median is small: inspect the worst regions, endpoint anchors, score order and held notes first. The command and file list actually published are recorded in REPORT.md. Validate each published file with both `check_contract.py` and `node tools/validate.mjs`; the former enforces the score-specific schema which the latter currently does not check beyond JSON parsing.

## Symbolic extraction decisions

- **Satie:** regenerate MIDI with a performer per LilyPond voice. Preserve `top`, `accomp`, `bottom` and the explicitly separate `othervoice`; the last is a small inner line in the bass staff, not a fourth continuous contrapuntal part. The aggregate pitch/onset set is asserted against the published MIDI. The published merged-staff MIDI truncates the melody’s F♯ tie when the accompaniment reattacks that pitch; voice-separated regeneration preserves the written tie. Compact Mutopia numbering is **1–39, 1–31, 40–47**, giving 78 performed bars. This is not the original engraving’s written-out bar numbering.
- **Beethoven:** the twelve named score staves identify the instrument parts. GM patches do not: this MIDI uses an English-horn patch for both horns and trumpets. Clarinets and horns already sound at their transposed pitches. The double-bass part is lowered one octave from the written MIDI pitches because the source omits the bass’s octave transposition. Unfold **1–124, 1–502**. The unmeasured oboe cadenza is within bar 268: the encoding allocates twelve quarter units to it, not six numbered bars.
- **Bach:** compile the declared `soprano`, `alto`, `tenore` and `basso` separately. This preserves cross-staff identity and avoids anonymous child contexts reusing another voice’s MIDI track. The explicitly marked bar-23 cross-voice F♯ tie is one event attributed to its originating Alto voice. Its continuation is not a new attack. The aggregate pitch/onset set is asserted against the published MIDI. Play bars **1–76** once.
- **Schubert:** compile `hautI`, `hautII`, `basI`, `basII`, `basIII` separately, retaining cross-staff figures with their source variable. Compare pitch/onset sets with the published MIDI after removing its eight-quarter silent pre-roll. Discard the encoder’s playback-tempo and pedal instructions, not the written note durations. Play bars **1–86** once; the return at bar 55 is written out.

## Alignment and checks

**MEAS method:** decode mono at 22,050 Hz; estimate tuning with `librosa.estimate_tuning(resolution=0.01)`; set the Sync Toolbox pitch/onset filterbank offset to that estimate in cents. Convert it to `tuningHz = 440 × 2^(semitones/12)`. This is a global recording estimate, not a claim about a piano’s stretch tuning or an orchestra’s tuning practice.

At 50 frames/s, compute log-compressed pitch chroma and decaying locally normalised chroma onset (DLNCO) features. Generate corresponding symbolic features directly from the performed event table, using equal note weights rather than the encoder’s playback mix. Sync Toolbox’s memory-restricted multiscale DTW uses its four smoothing/downsampling levels, a 100,000-cell recursion threshold, standard horizontal/vertical/diagonal steps and equal chroma/onset cost weights. Its `make_path_strictly_monotonic` utility removes ambiguous horizontal/vertical runs before time interpolation; individual note durations are never clamped to an invented minimum. No synthetic sound replaces the recording.

`endpoint_windows.json` contains score-pitch inspection windows, not listening annotations. Within each, the endpoint detector takes the leading 20%-of-peak edge of the smoothed positive energy rise at the expected score pitches. These anchors correct leading silence/noise and the ambiguity of a final sustained chord. End-of-decay is the last RMS frame above −45 dB relative to the recording’s peak. The final held interval is interpolated rather than allowing DTW to move its attack into the decay. Section anchors come from a first endpoint-constrained path and are refined in a second pass. Original editorial seconds remain independent, coarse comparisons. Bach’s broad passage labels contain no asserted score bars: their nearest-bar locators are explicitly not independent boundary annotations.

Onset error is the **absolute distance from each distinct score attack to the nearest detected audio onset**, without snapping score events to those detections. The primary detector is unmodified `librosa.onset_detect` on spectral flux at a 256-sample hop. Chord doublings are not counted repeatedly in the primary median; a note-weighted median is also retained. Default peak picking misses many quiet accompaniment attacks in Beethoven and Schubert. A second, score-independent detector uses a two-second local maximum normalisation, the same fixed parameters for all recordings, and a 58 ms refractory period. Both results are reported, including the original detector’s poor regions; the second detector never controls DTW.

**Limits:** nearest-onset error is not pitch accuracy, one-to-one event matching, or an independent human benchmark. Dense textures can obtain small errors against unrelated attacks. Pitch-energy overlays, harmonic similarity, recurrence diagonals, source-voice checks and endpoint/held-note inspection address different failure modes but do not establish aural correctness. Durations are warped notation; pedal, reverberation and actual key releases are not measured. Source ornaments and articulations are not an invented transcription of their performance.

**Publication gates:** reject a whole-piece primary median above 0.15 s, any collapsed event/attack, endpoint anchor deviation above 0.5 s, or any eight-second region above 0.3 s median with local onset normalisation. Any observed gross pitch/order mismatch also overrides a small median. The report states the decision and outstanding doubts for every piece.

Only the Satie opening four bars and their performed recurrence carry chords. These eight spans are an editorial reading of G2 plus B3–D4–F♯4 (**Gmaj7**) and D2 plus A3–C♯4–F♯4 (**Dmaj7**); `basis` is `editorial`. No automatic chord or Roman-numeral labels are generated.
