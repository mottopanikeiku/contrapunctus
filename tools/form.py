#!/usr/bin/env python3
"""Find recurrence candidates, never automatically publish formal relations.

Run from any directory with the project environment:
    .venv/bin/python tools/form.py                 # all cached listening tracks
    .venv/bin/python tools/form.py beethoven-5-first satie-gymnopedie-1

Writes only cache/form/<id>.txt. The reports contain editorial section/cue
snapshots and JSON candidate rows; content/relations/<id>.json remains an
editorial decision. Re-running this command does not overwrite those decisions.

Method: librosa CENS (36 CQT bins/octave), mean aggregation on a 0.5-second
grid, L2 normalisation, cosine self-similarity for each of 12 circular pitch
class shifts, then a 5.5-second diagonal moving average. Each candidate uses
ONE fixed shift and ONE time offset throughout; shifts cannot switch at every
frame to manufacture a match. Diagonal runs may bridge at most one second,
must average >= 0.90 raw cosine and have >= 95% active paired frames. The
minimum duration is 12 seconds OR 15% of the recording, whichever is shorter.
Candidates are non-overlapping in performed time. Near-duplicate paths are
suppressed; the report retains up to 120, with additional representatives for
each pair of editorial sections. No score, key, melody or instrument identity
is inferred by this program. Fixed-lag paths can fragment a return with rubato
or changed tempo. Stable chords, accompaniment and noise can produce matches.

Reports record file hashes, parameters and package versions for reproduction.
The reported shift is the number of semitones taking passage a to passage b
(modulo octaves; +6 represents the tritone). Similarity is not a probability.
All endpoints are approximate analysis-window boundaries, not score barlines.
"""

import os

# Bound CPU use on the shared editorial workstation before importing NumPy.
for _variable in ("OPENBLAS_NUM_THREADS", "OMP_NUM_THREADS", "MKL_NUM_THREADS",
                  "NUMBA_NUM_THREADS"):
    os.environ[_variable] = "1"

import argparse
import hashlib
import json
from pathlib import Path
import subprocess
import sys

import librosa
import numpy as np
import scipy
from scipy.ndimage import uniform_filter1d

ROOT = Path(__file__).resolve().parents[1]
SR = 22050
HOP = 512
STEP = 0.5
ENHANCE_FRAMES = 11
SMOOTH_THRESHOLD = 0.88
MEAN_THRESHOLD = 0.90
MAX_GAP_FRAMES = 2
MAX_REPORTED = 120


def sha256(path):
    with path.open("rb") as handle:
        return hashlib.file_digest(handle, "sha256").hexdigest()


def tracks_from_modules(ids):
    """Use Node's module loader rather than trying to parse JavaScript as JSON."""
    loader = """
        import { pathToFileURL } from 'node:url';
        const tracks = [];
        for (const name of process.argv.slice(1)) {
            const track = (await import(pathToFileURL(name).href)).default;
            tracks.push(track);
        }
        process.stdout.write(JSON.stringify(tracks));
    """
    files = [ROOT / "content" / "listen" / f"{track_id}.mjs" for track_id in ids]
    result = subprocess.run(["node", "--input-type=module", "-e", loader,
                             *map(str, files)], check=True, capture_output=True,
                            text=True)
    return json.loads(result.stdout)


def aggregate_features(audio):
    duration = len(audio) / SR
    cens = librosa.feature.chroma_cens(y=audio, sr=SR, hop_length=HOP,
                                      bins_per_octave=36, tuning=None)
    rms = librosa.feature.rms(y=audio, hop_length=HOP)[0]
    count = int(np.ceil(duration / STEP))
    boundaries = np.minimum(np.floor(np.arange(count + 1) * STEP * SR / HOP)
                            .astype(int), cens.shape[1])
    chroma = np.empty((12, count), dtype=np.float32)
    levels = np.empty(count, dtype=np.float32)
    for index in range(count):
        first = boundaries[index]
        last = max(first + 1, boundaries[index + 1])
        chroma[:, index] = cens[:, first:last].mean(axis=1)
        levels[index] = rms[first:last].mean()
    norms = np.linalg.norm(chroma, axis=0)
    chroma /= np.maximum(norms, 1e-12)
    active = levels > levels.max() * 10 ** (-55 / 20)
    chroma[:, ~active] = 0
    return chroma, active, duration


def runs(mask):
    padded = np.pad(mask.astype(np.int8), (1, 1))
    changes = np.diff(padded)
    return zip(np.flatnonzero(changes == 1), np.flatnonzero(changes == -1))


def bridge_short_gaps(mask):
    mask = mask.copy()
    for first, last in runs(~mask):
        if first > 0 and last < len(mask) and last - first <= MAX_GAP_FRAMES:
            mask[first:last] = True
    return mask


def section_at(time, sections):
    for index in range(len(sections) - 1, -1, -1):
        if time >= sections[index]["t"]:
            return index
    return 0


def overlap_fraction(first, second):
    overlap = max(0, min(first[1], second[1]) - max(first[0], second[0]))
    return overlap / min(first[1] - first[0], second[1] - second[0])


def find_candidates(chroma, active, duration, sections):
    minimum = min(12.0, duration * 0.15)
    minimum_frames = int(np.ceil(minimum / STEP))
    size = chroma.shape[1]
    candidates = []
    for shift in range(12):
        # S[i,j] compares a[i] raised by `shift` with b[j]. Never mix shifts.
        similarity = chroma.T @ np.roll(chroma, -shift, axis=0)
        np.clip(similarity, 0, 1, out=similarity)
        for lag in range(minimum_frames, size - minimum_frames + 1):
            diagonal = np.diagonal(similarity, offset=lag)
            enhanced = uniform_filter1d(diagonal, size=ENHANCE_FRAMES,
                                        mode="constant", cval=0)
            mask = bridge_short_gaps(enhanced >= SMOOTH_THRESHOLD)
            for first, last in runs(mask):
                # The same sound must not count as both sides of a relation.
                last = min(last, first + lag)
                if last - first < minimum_frames:
                    continue
                values = diagonal[first:last]
                mean = float(values.mean())
                paired_active = active[first:last] & active[first + lag:last + lag]
                active_fraction = float(paired_active.mean())
                if mean < MEAN_THRESHOLD or active_fraction < 0.95:
                    continue
                a = [round(first * STEP, 2), round(min(last * STEP, duration), 2)]
                b = [round((first + lag) * STEP, 2),
                     round(min((last + lag) * STEP, duration), 2)]
                sustained = min(a[1] - a[0], b[1] - b[0])
                if sustained < minimum:
                    continue
                # How much more distinctive is this path than displaced paths?
                neighbours = []
                indices = np.arange(first, last)
                for delta in (-16, -8, 8, 16):
                    other = indices + lag + delta
                    valid = (other >= 0) & (other < size)
                    if valid.any():
                        neighbours.append(float(similarity[indices[valid],
                                                           other[valid]].mean()))
                contrast = mean - float(np.mean(neighbours)) if neighbours else 0
                candidates.append({
                    "a": a, "b": b, "seconds": round(sustained, 2),
                    "shift": shift if shift <= 6 else shift - 12,
                    "mean": round(mean, 5),
                    "p10": round(float(np.quantile(values, 0.1)), 5),
                    "enhancedMean": round(float(enhanced[first:last].mean()), 5),
                    "contrast": round(contrast, 5),
                    "activeFraction": round(active_fraction, 5),
                    "offset": round(lag * STEP, 2),
                    "sectionA": section_at(a[0], sections),
                    "sectionB": section_at(b[0], sections),
                    "score": sustained * (mean - 0.80),
                })
    candidates.sort(key=lambda item: (-item["score"], -item["mean"],
                                      item["a"][0], item["b"][0], item["shift"]))
    distinct = []
    for candidate in candidates:
        duplicate = any(
            candidate["shift"] == prior["shift"]
            and abs(candidate["offset"] - prior["offset"]) <= 3
            and overlap_fraction(candidate["a"], prior["a"]) >= 0.6
            and overlap_fraction(candidate["b"], prior["b"]) >= 0.6
            for prior in distinct
        )
        if not duplicate:
            distinct.append(candidate)
    selected = distinct[:MAX_REPORTED]
    # Do not let a repetitive background crowd every late return out of a report.
    represented = {(item["sectionA"], item["sectionB"], item["shift"] == 0)
                   for item in selected}
    for candidate in distinct[MAX_REPORTED:]:
        group = (candidate["sectionA"], candidate["sectionB"], candidate["shift"] == 0)
        if group not in represented:
            selected.append(candidate)
            represented.add(group)
    for index, candidate in enumerate(selected, 1):
        candidate.pop("score")
        candidate["candidate"] = index
    return selected, len(candidates), len(distinct), minimum


def write_report(track, candidates, raw_count, distinct_count, minimum, duration,
                 audio_path, active):
    track_id = track["id"]
    snapshot = json.dumps(track, ensure_ascii=False, sort_keys=True,
                          separators=(",", ":")).encode("utf-8")
    lines = [
        f"Recurrence candidates: {track_id}",
        f"Work: {track['work']} | {track.get('movement', '')}",
        f"Decoded duration: {duration:.3f} s; analysis grid: {STEP:.1f} s.",
        "Method: librosa.feature.chroma_cens(y=audio, sr=22050, hop_length=512, "
        "bins_per_octave=36, tuning=None); mean aggregation; L2 cosine.",
        "Path enhancement: 11-frame (5.5 s) diagonal moving average; fixed "
        "time offset and fixed circular shift for each candidate; all 12 shifts searched.",
        f"Thresholds: enhanced >= {SMOOTH_THRESHOLD}; raw mean >= {MEAN_THRESHOLD}; "
        f"minimum {minimum:.2f} s (12 s OR 15%); gaps <= 1 s; active pairs >= 95%.",
        "Silence mask: half-second mean RMS below -55 dB relative to the "
        "recording maximum is excluded. Similarity is not a probability.",
        "Contrast: raw mean minus the mean of paths displaced by +/-4 and +/-8 s. "
        "Small contrast warns of persistent harmony/accompaniment, not a distinct return.",
        "Endpoints: approximate analysis windows, not barlines. Fixed-lag paths "
        "can split real returns when tempo changes. No aural review has occurred.",
        f"Candidates: {raw_count} raw qualifying paths; {distinct_count} after "
        f"near-duplicate suppression; {len(candidates)} retained for editorial inspection.",
        "Retention: top 120 by duration * (mean - 0.80), then additional "
        "section-pair representatives (unshifted/shifted). This is not exhaustive form analysis.",
        f"Active grid frames: {int(active.sum())}/{len(active)}.",
        f"Audio SHA256: {sha256(audio_path)}",
        f"Listening snapshot SHA256 (sorted compact UTF-8 JSON): "
        f"{hashlib.sha256(snapshot).hexdigest()}",
        f"Finder SHA256: {sha256(Path(__file__))}",
        f"Versions: Python {sys.version.split()[0]}; librosa {librosa.__version__}; "
        f"NumPy {np.__version__}; SciPy {scipy.__version__}.",
        f"Reproduce: .venv/bin/python tools/form.py {track_id}",
        "",
        "EDITORIAL SECTION SNAPSHOT (not audio ground truth)",
    ]
    for index, section in enumerate(track["sections"]):
        lines.append(f"  {index}: {section['t']:g} s | {section['label']}")
    lines.extend(["", "MUSICAL LISTENING NOTE SNAPSHOT (not aural verification)"])
    for cue in track["cues"]:
        if cue["kind"] in ("music", "form", "listen"):
            lines.append(f"  {cue.get('t', '?')} s | {cue['title']} | {cue['text']}")
            lines.append(f"    Evidence: {cue.get('evidence', 'Not supplied')}")
    lines.extend(["", "CANDIDATES (JSON rows; indices refer to the section snapshot)"])
    lines.extend(json.dumps(candidate, ensure_ascii=False, separators=(",", ":"))
                 for candidate in candidates)
    if not candidates:
        lines.append("No sustained path passed the stated thresholds. This does not prove "
                     "that the work contains no returns.")
    output = ROOT / "cache" / "form" / f"{track_id}.txt"
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"{track_id}: {duration:.1f} s, {len(candidates)} candidates -> "
          f"{output.relative_to(ROOT)}", flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("ids", nargs="*", help="Listening track ids; omit for all tracks")
    args = parser.parse_args()
    available = {path.stem for path in (ROOT / "content" / "listen").glob("*.mjs")}
    ids = args.ids or sorted(available)
    unknown = set(ids) - available
    if unknown:
        parser.error("Unknown listening track id(s): " + ", ".join(sorted(unknown)))
    tracks = tracks_from_modules(ids)
    for track in tracks:
        audio_path = ROOT / "cache" / "audio" / f"{track['id']}.mp3"
        audio, _ = librosa.load(audio_path, sr=SR, mono=True)
        chroma, active, duration = aggregate_features(audio)
        candidates, raw_count, distinct_count, minimum = find_candidates(
            chroma, active, duration, track["sections"])
        write_report(track, candidates, raw_count, distinct_count, minimum,
                     duration, audio_path, active)


if __name__ == "__main__":
    main()
