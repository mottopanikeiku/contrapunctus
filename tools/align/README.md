# Provisional score alignment

`node tools/score.mjs <listen-id> [--publish]` runs the config-driven pipeline for an existing `content/listen/<id>.mjs` recording. It does not transcribe recordings or claim that anybody listened to them. Published files have `status: "provisional"` and `review.by: null`. Numerical results and decisions are in [REPORT.md](REPORT.md); each new piece has its own heading.

## One command

From the project root:

```sh
node tools/score.mjs satie-gymnopedie-1
# After inspecting source/order, checks and fresh overlays:
node tools/score.mjs satie-gymnopedie-1 --publish
```

The command fetches and hash-checks sources, converts disposable copies, extracts source-defined voices and performed bars, aligns the cached recording, runs **all numeric gates** and the score contract, and creates fresh JSON checks and PNG overlays. It exits nonzero on a gate or processing failure. Without `--publish`, nothing under `docs/assets/data/` changes. With it, a passing candidate is engraved and sheetpacked in a staging directory **before** replacing public `score.json` and `sheet/`; engraving/packing failure leaves the old publication intact. Passing is not an aural review or proof of the correct edition. Do not publish an observed gross pitch/order mismatch merely because its median is small.

The command takes `/tmp/contrapunctus-score.lock` via `flock -w 7200`, serialising memory-heavy work across builders. BLAS/OpenMP/Numba use one thread. No Git, site build, paid provider, recording download or recording republication is involved. Audio must exist at `cache/audio/<id>.mp3`.

### Environment

The exercised interpreter is Python 3.11.15; the frozen dependencies are in `requirements.txt`:

```sh
uv venv --python /home/alp/.local/bin/python3.11 /tmp/contrapunctus-align-venv
uv pip install --python /tmp/contrapunctus-align-venv/bin/python -r tools/align/requirements.txt
```

Defaults: Python `/tmp/contrapunctus-align-venv/bin/python`, LilyPond `~/.local/opt/lilypond-2.24.4/bin/lilypond`, Cargo `~/.cargo/bin/cargo`. Override with `$ALIGN_PYTHON`, `$LILYPOND`, `$CARGO`. `convert-ly` and `musicxml2ly` must be beside LilyPond. Obtain the portable compiler from [LilyPond’s download page](https://lilypond.org/doc/v2.24/Documentation/web/download); use 2.24.4 for baseline reproduction. Sheetpacking uses the checked-in Cargo lockfile.

### Outputs

Under ignored `work/`:

- `<id>-events.json`: source-quarter events, named parts, performed bar occurrences.
- `<id>-candidate.json`: proposed publication, even if numeric gates reject it.
- `<id>-checks.json`: **every** eight-second region, endpoint measurements, gate reasons, source/config/audio hashes, versions, publication status and exact fresh overlay filenames.
- `<id>-attack-checks.json`, `<id>-path.npz`: per-attack evaluation and final interpolation path.
- `<id>-diff.json`: comparison to the pre-run public score: byte identity, note/bar identities, changed metadata, maximum onset/duration/bar-time differences. Numerical equivalence requires identical identities/metadata and timing differences no greater than 1 ms.
- PNG overlays for first/middle/last anchors and both detectors’ worst regions, regenerated **after final alignment**, never inherited from an earlier candidate.
- `<id>-source/`: disposable converted sources, wrapper MIDI and optional selected MusicXML.

Publication also writes `results/<id>.json`. Processing exceptions write `pipelineError` plus a withholding reason, not a fake pass. Original downloads remain intact. Work files are reproducible diagnostics, not site assets.

## Config format, version 1

Complete exercised examples live in [`pieces/`](pieces/). `pieces/<listen-id>.json` has `version:1` and `id` equal to the filename and existing listen id. Do not edit a config while its command runs.

| Field | Meaning |
| --- | --- |
| `source` | `mutopia` id where applicable; `title`, `edition`, `encoder`, `url`, `license`, `licenseUrl`; relative LilyPond entrypoint `main`; `midi` when using/comparing published MIDI |
| `source.downloads` | `[{url,file,sha256}]`; relative destination `file` under `sources/<id>/`; use `null` for the first digest. First fetch pins it **in the config**; later runs reject changed bytes. ZIPs are safely extracted. |
| `extraction.mode` | `published-midi`, `compiled-midi` or `isolated-voices` |
| `voices` | Source-defined `{id,name}` plus mode-specific fields below; never inferred from register or General MIDI patch |
| `bars` | `{first,count,quarters,overrides,order,description}`; `first` defaults to 1 and can be 0 for pickups; lengths are quarter-note units |
| `endpoints` | `{first:[lo,hi],last:[lo,hi],basis}` in recording seconds; windows select first/last **score attacks**, not decay ends, with a documented basis |
| `provenance` | Array of source/edition/voice/order caveats retained in checks |

`bars.overrides` maps printed bar strings to lengths, e.g. Beethoven `{"268":12}` for one unmeasured cadenza bar. `bars.order` normally contains inclusive ranges: `[[1,124],[1,502]]`. Partial-bar repeats use an item `{"from":[8,2],"to":[16,2]}`: quarter offsets within printed bars, **half-open** at the end. Adjacent contiguous fragments of the same printed bar merge; jumped returns get new occurrences. `description` explains the performed order in plain English. No note durations are clamped to invent a different metre.

### Extraction modes

**Published MIDI:** `source.midi` names the file; `voices[].tracks` lists zero-based track indices or unique exact track-name strings. All sounding tracks must map. Several genuine staff tracks may map to one labelled instrument section. Optional `extraction.expectedTracks` asserts the complete track-name array; `null` entries leave incidental titles unspecified.

**Compiled MIDI:** `extraction.definitions` is `[{file,before?}]`. Each converted file is included up to the literal delimiter (usually `"\\score"`), or in full without it. The default is `source.main` before its first score. `extraction.music` is the complete LilyPond music expression for the chosen movement; `midiSettings` is optional content inside `\\midi { ... }`. Map the resulting tracks through `voices[].tracks`. Do not use `\\unfoldRepeats` if `bars.order` will unfold canonical MIDI again.

**Isolated voices:** use the same definitions, `extraction.staves` (source staff names), optional `global` and `silent` music, plus `voices[].music` (e.g. `"\\soprano"`) and `staff`. Each variable is compiled separately with destination staves present, preserving cross-staff identity. Schubert’s explicit concatenated bass variables avoid encoder playback instructions.

For all modes:

- `voices[].transpose` and/or `extraction.transpose`: additional sounding-pitch semitones. Never double-apply LilyPond’s existing transposition.
- `extraction.offsetQ`: remove MIDI pre-roll; optional `endQ` selects an exclusive source-onset boundary **before** subtracting the offset.
- `extraction.timeline:"performed"`: MIDI already unfolded in exactly the configured order. Default `"canonical"` unfolds through `bars.order`.
- `extraction.comparePublished:{offsetQ:0}`: assert aggregate pitch/onset identity against `source.midi` before additional sounding-pitch fixes.
- `extraction.ties`: documented cross-voice continuations as `{origin:{q,pitch,voice,durationQ},continuation:{...}}`. Exact events are asserted before joining durations/removing a continuation attack. See Bach bar 23. This is not automatic tie guessing.

### Diagnostics and engraving

- `boundaries`: `[["19",1,42], ...]` gives printed bar, occurrence and coarse independent editorial seconds. Without them, listen sections are explicitly non-independent nearest-bar locators.
- `diagnostics.held`: `{voice:0,minimumDurationQ:9}` or `{voice:7,onsets:[2,6]}`. Default: inspect the final chord.
- `diagnostics.recurrences`: fixed-lag specs such as `{start:3,secondQ:248,secondOffset:3,length:45,search:4}`. `startQ` plus `startOffset` may replace absolute `start`; `scanRecurrence:true` enables the original long-diagonal diagnostic.
- `diagnostics.overlays`: extra recording `[start,end]` windows.
- `chords`: editor-written `{bars:["1"],label:"Gmaj7",basis:"editorial"}` with optional `occ`. No inferred chord labels.
- `engraving`: `{staff:18,width:230,height:297,music?}`; dimensions are millimetres. Optional `music` selects one movement with the same definitions, instead of engraving all scores in `source.main`.

Every `.ly`, `.ily`, `.lyi` in the disposable source copy goes through adjacent `convert-ly`; files without versions inherit the main file’s version. Relative includes retain their locations; built-in includes such as `articulate.ly` remain built-in. Engraving retains `data-bar`/`data-pos` on noteheads and rests, including custom movement wrappers. Sheetpack must resolve every aligned printed bar before publication. See [sheetpack](../sheetpack/README.md) for its coordinate contract.

### MusicXML input

For a rights-established MusicXML source, `source.musicxml` names the original downloaded `.mxl`/`.xml`; `source.main` names the derivative `.ly` generated by `musicxml2ly --midi --npl`. OpenScore is not relabelled as Mutopia. Optional explicit derivative transformations:

- `musicxmlMeasures:[start,end]`: zero-based half-open measure slice in **each part**, carrying preceding attributes (clefs/key/time/divisions etc.) into the first selected measure unless overridden there.
- `stripLyrics:true`: remove lyric elements only, for identified analytical labels on instrumental scores, not vocal lyrics.
- `musicxmlImplicitMeasures:[1,54,55]`: mark those original XML numbers implicit, avoiding converter padding of documented pickup/split bars.
- `metricEquivalenceWords:true`: preserve two-beat-unit metric-equivalence metronomes as equivalent printed words, avoiding a LilyPond 2.24.4 converter failure.
- `otherDynamicsWords:true`: preserve nonstandard `other-dynamics` text as words rather than invalid identifiers; ordinary dynamics remain intact.

Explain transformations in provenance and the per-piece report. Original downloaded bytes and note events remain unmodified. Inspect generated variables and bar numbers: successful conversion does not establish edition or repeat correctness.

## Source provenance and baseline decisions

Each `sources/<id>/manifest.json` records the source, edition, encoder, licence, download URLs and SHA-256 digests. Symbolic-source rights are independent of recording rights. The original four are **Public Domain** under [Mutopia’s statement](https://www.mutopiaproject.org/legal.html#publicdomain); other sources retain their actual licences.

| Recording | Mutopia | Edition | Encoder |
| --- | --- | --- | --- |
| Satie, Gymnopédie No. 1 | [37](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=37) | Dover reproduction of original; translated text omitted | Evin Robertson |
| Beethoven, Symphony No. 5/i | [941](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=941) | Breitkopf and Härtel, 1862–1865 | Stelios Samelis; adaptation Johannes Heinecke |
| Bach, BWV 869 fugue | [1563](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=1563) | Breitkopf & Härtel, 1866 | Itay Perl |
| Schubert, D. 899/3 | [1193](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=1193) | Breitkopf & Härtel, 1888 | Ph. Raynaud |

- **Satie:** regenerate with a performer per voice: `top`, `accomp`, `bottom`, separate `othervoice` (a brief bass-staff inner line, not a fourth continuous part). Assert the aggregate pitch/onset set against published MIDI. The published merged staff truncates a melody F♯ tie on accompaniment reattacks; regeneration preserves it. Compact numbering **1–39, 1–31, 40–47** gives 78 performed bars, not the original engraving’s written-out numbers.
- **Beethoven:** twelve named source staves identify parts, not patches (horns/trumpets use an English-horn patch). Clarinets/horns already sound transposed. Lower double bass one octave because its source omits that transposition. Unfold **1–124, 1–502**. The twelve-quarter oboe cadenza stays in **bar 268**, not six extra bars.
- **Bach:** isolate `soprano`, `alto`, `tenore`, `basso`, retaining cross-staff identity and avoiding anonymous MIDI-context reuse. Explicit bar-23 cross-voice F♯ tie stays one event in its originating Alto, not a new Soprano attack. Assert the aggregate published pitch/onset set. Play **1–76** once.
- **Schubert:** isolate `hautI`, `hautII`, `basI`, `basII`, `basIII`, retaining cross-staff variable identity. Compare to published MIDI after its eight-quarter silent pre-roll. Discard encoder tempo/pedal instructions, not written durations. Play **1–86** once; bar 55 return is written out.

## Alignment and publication gates

**MEAS method:** decode mono at 22,050 Hz, estimate tuning with `librosa.estimate_tuning(resolution=0.01)`, and set the Sync Toolbox pitch/onset filterbank offset in cents. `tuningHz = 440 × 2^(semitones/12)` is a global recording estimate, not a claim about stretch tuning or orchestral practice.

At 50 frames/s, use log-compressed pitch chroma and decaying locally normalised chroma onset (DLNCO). Symbolic features come directly from performed events with equal note weights, not encoder playback mix. Sync Toolbox memory-restricted multiscale DTW uses four smoothing/downsampling levels, 100,000-cell recursion threshold, standard horizontal/vertical/diagonal steps and equal chroma/onset cost weights. `make_path_strictly_monotonic` removes ambiguous runs before interpolation; no invented minimum note durations or synthetic replacement audio.

Config endpoint windows are pitch-energy inspections, not listening annotations. The detector takes the leading 20%-of-peak edge of smoothed positive energy rise at expected pitches. Anchors address leading noise/silence and sustained-final-chord ambiguity. End-of-decay is the last RMS frame above −45 dB relative to peak. The final held interval is interpolated rather than moving its attack into decay. Section anchors come from an endpoint-constrained first pass and refine a second pass; editorial seconds remain independent coarse comparisons. Passage labels without asserted score bars are explicitly non-independent locators.

Onset error is absolute distance from each **distinct score attack to the nearest detected audio onset**, without snapping. Primary detection is unmodified `librosa.onset_detect`, spectral flux, 256-sample hop. Chord doublings are not counted repeatedly; note-weighted median is also reported. Default peak picking misses quiet accompaniment attacks in Beethoven/Schubert. The separate score-independent local detector uses a two-second maximum normalisation and fixed 58 ms refractory period. Both detectors’ results, including poor primary regions, remain reported; neither controls DTW.

**All existing gates are mandatory:** primary whole-piece median ≤ **0.15 s**; first/middle/last attack deviation from independent onsets ≤ **0.5 s**; every nonempty eight-second region’s **local-normalised median** ≤ **0.3 s**; no note duration or distinct attack interval below **0.0005 s**. Rounded publication must additionally have positive durations, strictly increasing bar times and satisfy the score contract. The 0.3 s gate is a regional median, not a promise that each attack’s error is ≤0.3 s. Inspect source order, harmonic similarity, recurrences, held notes and overlays; observed gross mismatches override a small median.

**Limits:** nearest-onset error is not pitch accuracy, one-to-one matching or an independent human benchmark. Dense unrelated attacks can score well. Overlays and other diagnostics address different failure modes but cannot establish aural correctness. Durations are warped notation, not measured key releases/pedal/reverberation. Ornaments/articulations are not a transcription of their performance.

Only Satie’s opening four bars and their recurrence carry baseline chords: eight editorial spans reading G2 plus B3–D4–F♯4 (**Gmaj7**) and D2 plus A3–C♯4–F♯4 (**Dmaj7**). No automatic chord/Roman labels.

## Diagnostic commands

```sh
/tmp/contrapunctus-align-venv/bin/python tools/align/inspect_midi.py
/tmp/contrapunctus-align-venv/bin/python tools/align/endpoint_peaks.py satie-gymnopedie-1
/tmp/contrapunctus-align-venv/bin/python tools/align/diagnose.py satie-gymnopedie-1 83 101
/tmp/contrapunctus-align-venv/bin/python tools/align/check_contract.py docs/assets/data/satie-gymnopedie-1/score.json
node tools/engrave.mjs satie-gymnopedie-1
```

Lower-level `fetch.py`, `prepare.py`, `score_events.py`, `align.py` remain diagnostic tools, but **only the driver publishes**; `align.py` no longer offers a `--publish` bypass. The original four-piece rerun and exact numerical/byte differences are recorded in REPORT.md.
