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
- PNG overlays for first/middle/last anchors, every configured internal pitch anchor, and both detectors’ worst regions, regenerated **after final alignment**, never inherited from an earlier candidate.
- `<id>-source/`: disposable converted sources, wrapper MIDI and optional selected MusicXML.

Publication also writes `results/<id>.json`. Processing exceptions write `pipelineError` plus a withholding reason, not a fake pass. Original downloads remain intact. Work files are reproducible diagnostics, not site assets.

A numerically passing candidate may still be withheld after a source/overlay inspection. To retain that decision, copy its exact check report to `results/<id>.json` with `published:false` and a separate `manualWithholding:{basis,reviewers,evidence,date}` record, including the inspected candidate SHA and windows. Keep the actual `gateReasons` unchanged: visual source disagreement is not an invented numeric failure, and inspection is not an aural review. Do not leave a known incorrect pack published.

Public score candidates and sheet indexes use the site's exact compact `JSON.stringify` representation, without a final newline. The post-build optimizer therefore does not reformat them. Older pretty-printed publications can have different byte hashes with identical parsed content; the diff report separates that from note/bar identity and numerical differences. Independent SVG compilations may also use different DOM-id prefixes; compare normalized structure/geometry and rendered source notation, not raw SVG hashes alone.

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

The current note/chroma contract is pitched. Unpitched GM drum keys are instrument identifiers, not note names. Do not relabel a triangle as A5 or a cymbal as C-sharp3, or silently drop the part to publish an otherwise eligible recording. Such sources remain withheld until the representation can retain their meaning; genuine pitched timpani are a different case.

**Compiled MIDI:** `extraction.definitions` is `[{file,before?}]`. Each converted file is included up to the literal delimiter (usually `"\\score"`), or in full without it. The default is `source.main` before its first score. `extraction.music` is the complete LilyPond music expression for the chosen movement; `midiSettings` is optional content inside `\\midi { ... }`. Map the resulting tracks through `voices[].tracks`. Do not use `\\unfoldRepeats` if `bars.order` will unfold canonical MIDI again.

**Isolated voices:** use the same definitions, `extraction.staves` (source staff names), optional `global` and `silent` music, plus `voices[].music` (e.g. `"\\soprano"`) and `staff`. Each variable is compiled separately with destination staves present, preserving cross-staff identity. Schubert’s explicit concatenated bass variables avoid encoder playback instructions.

An initial grace note can give isolated MIDI files different pre-roll origins. Check source-quarter identity, not only the total note count. If origins differ, compile the named voices simultaneously in separate MIDI staves with `compiled-midi`, retaining the original printed staves in `engraving.music`. This gives them one common MIDI clock. Preserve the grace; document any common lead once in the initial bar’s MIDI-quarter extent, rather than cropping the grace, independently shifting regular attacks, or calling the pre-roll an extra written beat.

For all modes:

- `voices[].transpose` and/or `extraction.transpose`: additional sounding-pitch semitones. Never double-apply LilyPond’s existing transposition.
- `voices[].transposeRanges`: `[{fromQ:474,toQ:480,semitones:12,basis:"source convention and citation"}]` applies an additional correction to attacks in the half-open source-quarter interval after `offsetQ` removal and before repeat unfolding. This supports documented changes of historical transposing-clef convention; it does not rewrite the printed score.
- `extraction.offsetQ`: remove MIDI pre-roll; optional `endQ` selects an exclusive source boundary **before** subtracting the offset. Attacks at or after that boundary are excluded; earlier notes' sounding durations are clipped there. This explicit selection is recorded in `sourceChecks.crop`.
- `extraction.timeline:"performed"`: MIDI already unfolded in exactly the configured order. Default `"canonical"` unfolds through `bars.order`.
- `extraction.comparePublished:{offsetQ:0}`: assert aggregate pitch/onset identity against `source.midi` before additional sounding-pitch fixes.
  Successful inventory measurements are recorded as `sourceChecks.pitchOnsetInventory` in event/check JSON, including whether a set or multiset was compared and the matched count.
- `extraction.ties`: documented cross-voice continuations as `{origin:{q,pitch,voice,durationQ},continuation:{...}}`. Exact same-pitch events are asserted before joining durations/removing a continuation attack. See Bach bar 23. Normally they must be contiguous. An explicitly source-written tie across intervening other notes may add `gapQ` and `basis`; the exact nonnegative gap is asserted and included in the origin's held duration. Checks retain every join; nonzero gaps are disclosed in provenance. This repairs the event table, not missing cross-voice engraving arcs, and is not automatic tie guessing.

### Diagnostics and engraving

- `boundaries`: `[["19",1,42], ...]` gives printed bar, occurrence and coarse independent editorial seconds. Without them, listen sections are explicitly non-independent nearest-bar locators.
- `anchors`: optional `[{scoreQ:368,window:[185.7,186.1],basis:"documented score-pitch energy evidence",label:"penultimate-chord"}]`. `scoreQ` is an actual interior **performed** attack from the event table, not an inferred printed-bar locator. The same pitch-energy edge detector measures these windows and pins both DTW passes; all measurements and fresh overlays are reported. Score/time order must increase. These anchors are disclosed as non-independent inspections and never replace the onset/region/collapse gates.
- `endpoints.end`: optional `{seconds:256.5,basis:"measured pitch-energy decay evidence"}` for a documented musical display end when surface noise keeps whole-file RMS active after the pitched decay. It must follow the last attack and lie inside the recording. The report retains both the original −45 dB RMS end and this explicit boundary; this is not a measured key release and does not relax any numeric gate.
- `diagnostics.held`: `{voice:0,minimumDurationQ:9}` or `{voice:7,onsets:[2,6]}`. Default: inspect the final chord.
- `diagnostics.recurrences`: fixed-lag specs such as `{start:3,secondQ:248,secondOffset:3,length:45,search:4}`. `startQ` plus `startOffset` may replace absolute `start`; `scanRecurrence:true` enables the original long-diagonal diagnostic.
- `diagnostics.overlays`: extra recording `[start,end]` windows.
- `chords`: editor-written `{bars:["1"],label:"Gmaj7",basis:"editorial"}` with optional `occ`. No inferred chord labels.
- `engraving`: `{staff:18,width:230,height:297,music?}`; dimensions are millimetres. Optional `music` selects one movement with the same definitions, instead of engraving all scores in `source.main`.
- `method`: optional descriptive metadata, used by the four baseline configs to retain their original publication text byte-for-byte. New configs use instrument-neutral generated wording; documented internal/end anchors add their specific disclosure automatically.

Every `.ly`, `.ily`, `.lyi` in the disposable source copy goes through adjacent `convert-ly`; files without versions inherit the main file’s version. Relative includes retain their locations; built-in includes such as `articulate.ly` remain built-in. Engraving retains `data-bar`/`data-pos` on noteheads and rests, including custom movement wrappers. Sheetpack must resolve every aligned printed bar before publication. See [sheetpack](../sheetpack/README.md) for its coordinate contract.

For an initial pickup LilyPond reports negative rhythmic positions before bar 1. The instrumentation labels those actual pickup glyphs `data-bar="0"` (generally the preceding bar number), preserving their negative `data-pos` values exactly. Thus the packer uses real pickup ink rather than inventing an empty geometric interval.

The removed pre-2.17.15 `old-relative` option is **not silently ignored**. An explicit `source.legacyRelative:"verify-midi"` permits removing only that obsolete directive from derivative files, but requires `compiled-midi`, `comparePublished:{}`, a published `source.midi`, and identical `extraction.music`/`engraving.music` or the separate ornament notation proof below. The selected movement’s generated and published pitch/onset **multisets** must match before alignment (using only the source-proved legacy unison corrections below when necessary); changed octave semantics therefore withhold publication. Standalone re-engraving also runs this proof. Source directives remain intact in the hashed downloads. See LilyPond’s [conversion limitations](https://lilypond.org/doc/v2.24/Documentation/usage/updating-files-with-convert_002dly); syntactic conversion alone is not proof of musical equivalence.

`source.patches:[{file,old,new,basis}]` permits documented, exact LilyPond syntax repairs in the disposable tree **before** conversion, for example explicit register resets after old-relative polyphonic blocks. Each nonempty `old` string must occur exactly once, replacements must differ, and only `.ly`/`.ily`/`.lyi` files are eligible. Every patched source requires the same compiled/published **multiset** proof and identical wrappers or separate notation proof described here; there is no unverified patch mode. The check report retains the exact patches and their bases, and the publication receipt's `scoreProvenance` records each repair. Original downloaded bytes and hashes remain unchanged.

Some legacy simultaneous-voice MIDI omits real written unisons or a reattack beneath another voice's held pitch. `comparePublished.additions:[{kind,attack:[q,pitch],durationsQ:[...],source:{file,text},basis}]` is a narrow, source-pinned reference correction, **not** note synthesis or a broad comparison waiver. Each literal must occur exactly once in the immutable source; each pitch/onset group is unique; `durationsQ` declares **every** current source duration at that group and must match exactly. `"coincident-unison"` requires an existing published attack and retains every original same-onset duration. `"held-reattack"` requires no published attack there and prior same-pitch holds strictly across the onset in **both** inventories. The entire source attack multiset must equal the original plus only the declared count increments; no original attack may disappear. Checks distinguish `publishedCount` from the corrected source `count` and retain all evidence. If shared-channel MIDI corrupts overlapping durations, compile independent Voice performers/tracks before this proof; do not insert notes or repair durations by guesswork.

When a source explicitly supplies ornament-realized playback and a printed ornament glyph, `extraction.notationProof:{ornaments:[{source:{file,text},attacks:[[q,pitch],...],basis}]}` allows different playback and engraving wrappers. Every exact source literal must occur once in the immutable download tree. The playback wrapper must still reproduce **all** published MIDI attacks as a multiset. A second compilation of `engraving.music` must equal that complete reference (including any source-proved legacy omissions) minus **only** the declared source-encoded ornament attacks; no other difference is allowed. Checks report the original, corrected playback when different, and printed counts plus the exact allowance, and `scoreProvenance` distinguishes source-defined realization from printed notation. This does not assert that the recording executes that ornament realization.

### MusicXML input

For a rights-established MusicXML source, `source.musicxml` names the original downloaded `.mxl`/`.xml`; `source.main` names the derivative `.ly` generated by `musicxml2ly --midi --npl`. OpenScore is not relabelled as Mutopia.

MusicXML conversion uses the pinned **2.24.4** converter through [musicxml_convert.py](musicxml_convert.py). Its original chord-level tie emission loses untied chord members’ reattacks when only one note is tied. The adapter keeps each source tied-start on its own note (`<a~ cis>`, not `<a cis>~`); ordinary single-note ties remain ordinary ties. A mid-measure clef-only attribute goes to its recorded source-time owning voice, rather than being inserted ahead of earlier notes in every other voice on that staff; the staff context shares the clef. Initial or mixed attributes retain the converter’s ordinary distribution. Guarded in-memory operations also preserve explicitly declared short-measure durations below. Source notes and installed files are unchanged; unknown converter versions/implementations are rejected rather than patched without examination. Checks record `sourceChecks.musicxmlConversion` and configured structural operations. These fixes do not establish every importer result: source-to-event identity, performed order and actual engraving still require inspection.

Optional explicit derivative transformations:

- `musicxmlMeasures:[start,end]`: zero-based half-open measure slice in **each part**, carrying preceding attributes (clefs/key/time/divisions etc.) into the first selected measure unless overridden there.
- `stripLyrics:true`: remove lyric elements only, for identified analytical labels on instrumental scores, not vocal lyrics.
- `musicxmlImplicitMeasures:[1,55,101]`: mark an initial pickup and **continuation fragments** implicit. In LilyPond’s converter, implicit means “continue the previous bar”, not “any short measure”. For a bar split into XML 54+55, only **55** is implicit; making both implicit joins the preceding full bar and corrupts the converter’s clock/chords. A shortened final XML measure is not padded when there is no following bar and normally needs no implicit flag.
- `musicxmlPartialMeasures:[{number:162,quarters:2,basis:"documented shortened first ending"}]`: assert that every part’s selected XML measure contains exactly the stated quarter duration and preserve it instead of padding to the meter. Unlike an implicit continuation, the next measure begins a new bar. This does not inject notes, `\\partial`, or a hidden time signature. It prevents the converter’s fabricated gap from prematurely closing an alternative-ending group.
- `musicxmlSharedEndingsFrom:"P1"`: share the master part’s ending annotations across parts only after asserting identical measure order and repeat barlines. Missing annotations are copied; contradictory existing endings are rejected. This supports full scores that print first/second-ending brackets only above the top staff; it does not invent repeats or infer performed order.
- `metricEquivalenceWords:true`: preserve two-beat-unit metric-equivalence metronomes as equivalent printed words, avoiding a LilyPond 2.24.4 converter failure.
- `otherDynamicsWords:true`: preserve nonstandard `other-dynamics` text as words rather than invalid identifiers; ordinary dynamics remain intact.
- `musicxmlFlattenTuplets`: `[{part:"P3",measures:[120,121,122,123],outerNumber:1,basis:"source nested-tuplet evidence"}]` handles the converter’s duplicated uniform nested-tuplet groups. Each selected single-voice measure must have explicit combined type/ratio and complete outer groups. Their brackets flatten to that combined ratio; exact written durations replace rounded playback ticks on a common divisions grid. Pitch/order, beams and slurs stay unchanged; other part durations are exactly rescaled. Ambiguous/mixed groups, cross-measure groups, chords and grace notes are rejected, not guessed.
- `musicxmlTieRoutes`: `[{part:"P3",measure:88,fromNote:1,toNote:0,continuation:{measure:89,note:0},basis:"documented cross-voice tie"}]`. Note indices are zero-based direct note children of the selected original XML measures. This moves an explicit tie start from one note onto an **already existing identical simultaneous unison** in the destination voice, allowing LilyPond’s within-voice tie model to reach the source continuation. Pitch, onset, duration, staff, destination voice and matching contiguous stop are asserted; both origin notes and other notations such as fermatas remain untouched. There is no generic equal-pitch merging or new note synthesis. Exact routes are retained in checks and their bases in the publication receipt's `scoreProvenance`.
- `musicxmlSingleNoteChordTies:true`: emit a single tied note as `<e~>4`, retaining original pitch, duration, accidentals, colour and associated directives. Multi-note chords already carry ties on their individual notes. This avoids a bare `e4~` broadcasting a tie to simultaneous untied noteheads when an explicitly audited per-piece engraving wrapper relocates `Tie_engraver` to the staff. The flag does **not** make arbitrary staff-level tie matching safe: audit all source start/stop identities, intervening equal pitches and actual rendered endpoints; retain zero missing/extra ties. No ghost notes are introduced.
- `musicxmlTrillSpans`: source-backed cross-voice/hidden-endpoint repairs as `{part,start:{measure,note,number},stop:{measure,note,number,edge?}|null,startQ,endQ,basis,evidence:{file,selector,expected}}`. The separately hash-pinned native MSCX `selector` must select one endpoint `location`; `expected` asserts its exact child-text fields. Its `measures` and whole-note `fractions` offsets must derive the declared endpoint from the selected MusicXML measure grid. Existing XML stops must also match that endpoint (`edge:"end"` by default, or explicit `"start"`). The destination must be an existing visible note/rest in the start’s voice and staff. Only stop notation moves; hidden cue/rest notes stay hidden and all timed notes remain unchanged. Missing stops require the native endpoint evidence, not inference from a subsequent trill. Every trill-span start in configured parts must be covered, and overlapping same-voice spans are rejected. Tagged spans emit independent stop-before-start commands rather than relying on the converter’s global ornament state. See the exercised Ravel quartet config.
- `musicxmlInitialGrace:{part:"P2",measure:1,note:1,basis:"source initial grace and notation rationale"}`: identify a real visible pitched source grace at quarter zero. The converter synchronizes initial staff-attribute moments by adding only nonprinting, nonsounding grace skips after original attributes and before other voices’ first timed music, including initial multimeasure rests. Real grace notes and main-time durations remain intact; unsupported nested leading music and unequal existing grace groups are rejected, not flattened or given artificial slurs. This follows LilyPond’s documented [grace-skip synchronization](https://lilypond.org/doc/v2.24/Documentation/notation/special-rhythmic-concerns#grace-notes), not clef/key/time-signature suppression. Compare regenerated source events and inspect the actual first system.

Explain transformations in provenance and the per-piece report. Original downloaded bytes remain unmodified. The optional tuplet operation derives exact time from the source’s written type/dots/ratio rather than its rounded MIDI-style ticks; it does not invent pitches or duplicate notes. Inspect generated variables and bar numbers: successful conversion does not establish edition or repeat correctness.

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

Without explicit ids, `node tools/engrave.mjs` re-engraves only configured recordings that already have a published `score.json`, not withheld candidates.

Deterministic regressions cover gate boundaries, rounding, numerical equivalence, canonical publication JSON, pickups/repeats, transposition, pitch anchors, exact legacy unison omissions, separate ornament notation proofs, MusicXML clef ownership, nested tuplets, source-backed trill spans, partial measures/endings, initial grace synchronization and note-specific ties. They decode no recording and use no network; conversion/notation fixtures invoke the installed LilyPond 2.24.4 tools:

```sh
OPENBLAS_NUM_THREADS=1 OMP_NUM_THREADS=1 MKL_NUM_THREADS=1 NUMBA_NUM_THREADS=1 \
  flock -w 7200 /tmp/contrapunctus-score.lock \
  /tmp/contrapunctus-align-venv/bin/python -m unittest discover -s tools/align -p 'test_*.py'
```
