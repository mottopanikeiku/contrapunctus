"""Align two recordings of the same music and measure how their timing differs.

    .venv/bin/python tools/compare.py A.mp3 B.mp3 out.json [--trim-a S E] [--trim-b S E] [--transpose-b N|auto]

--transpose-b rolls B's chroma by N semitones before alignment (B is N semitones above A, e.g. an
arrangement in another key or a transfer at the wrong speed); `auto` picks the roll with the highest
mean chroma correlation. Only the features are rolled; no audio is altered. The output records it.

Method: chroma (CENS) features at ~10 frames/s, dynamic time warping with the standard step
pattern, then a monotone path resampled every 0.5 s of recording A. From the path we derive the
local tempo ratio B/A (how much longer B takes over the same music), smoothed over 8 s.

The result is an automatic alignment. It is reliable for the overall course of two performances of
the same version; it can be wrong across cuts, repeats one performer omits, or long rests, so the
output records a confidence per point: the cosine similarity of the aligned chroma frames
(1 = identical pitch content; unrelated music typically scores 0.4–0.6).
"""
import json
import sys

import librosa
import numpy as np

SR = 22050
HOP = 2048          # ≈ 93 ms
STEP = 0.5          # output resolution, seconds of A


def features(path, trim=None):
    y, _ = librosa.load(path, sr=SR, mono=True)
    if trim:
        y = y[int(trim[0] * SR): int(trim[1] * SR)]
    c = librosa.feature.chroma_cens(y=y, sr=SR, hop_length=HOP)
    return c, len(y) / SR


def main():
    args = sys.argv[1:]
    trims, transpose = {}, 0
    if '--transpose-b' in args:
        i = args.index('--transpose-b')
        transpose = args[i + 1]
        del args[i:i + 2]
    for flag in ('--trim-a', '--trim-b'):
        if flag in args:
            i = args.index(flag)
            trims[flag] = (float(args[i + 1]), float(args[i + 2]))
            del args[i:i + 3]
    a_path, b_path, out = args
    A, durA = features(a_path, trims.get('--trim-a'))
    B, durB = features(b_path, trims.get('--trim-b'))
    if transpose == 'auto':
        ma, scores = A.mean(axis=1), []
        for k in range(12):
            mb = np.roll(B, -k, axis=0).mean(axis=1)
            scores.append(float(np.dot(ma, mb) / (np.linalg.norm(ma) * np.linalg.norm(mb) + 1e-9)))
        transpose = int(np.argmax(scores))
        if transpose > 6: transpose -= 12
    transpose = int(transpose)
    if transpose: B = np.roll(B, -transpose, axis=0)
    D, wp = librosa.sequence.dtw(X=A, Y=B, metric='cosine', subseq=False)
    wp = wp[::-1]
    fr = HOP / SR
    ta, tb = wp[:, 0] * fr, wp[:, 1] * fr
    # cosine similarity of aligned frames (1 = identical chroma)
    An = A / (np.linalg.norm(A, axis=0, keepdims=True) + 1e-9)
    Bn = B / (np.linalg.norm(B, axis=0, keepdims=True) + 1e-9)
    sim = np.einsum('ij,ij->j', An[:, wp[:, 0]], Bn[:, wp[:, 1]])   # cosine similarity of each aligned frame pair
    grid = np.arange(0, durA, STEP)
    # monotone interpolation of B time over A time (average duplicates)
    ua, idx = np.unique(ta, return_inverse=True)
    ub = np.bincount(idx, tb) / np.bincount(idx)
    us = np.bincount(idx, sim) / np.bincount(idx)
    mb = np.interp(grid, ua, ub)
    conf = np.interp(grid, ua, us)
    # local tempo ratio: d(tB)/d(tA), smoothed over 8 s
    k = int(8 / STEP)
    slope = np.gradient(mb, STEP)
    kernel = np.ones(k) / k
    ratio = np.convolve(slope, kernel, mode='same')
    off_a = trims.get('--trim-a', (0, 0))[0]
    off_b = trims.get('--trim-b', (0, 0))[0]
    json.dump({
        'method': 'chroma CENS + DTW (librosa), resampled every 0.5 s of A; automatic, provisional',
        'transposeB': transpose,
        'trimA': list(trims['--trim-a']) if '--trim-a' in trims else None,
        'trimB': list(trims['--trim-b']) if '--trim-b' in trims else None,
        'durationA': round(durA, 2), 'durationB': round(durB, 2),
        'map': [[round(t + off_a, 2), round(b + off_b, 2)] for t, b in zip(grid, mb)],
        'ratio': [round(float(r), 3) for r in ratio],
        'confidence': [round(float(c), 3) for c in conf],
    }, open(out, 'w'))
    print(f'aligned {durA:.1f}s ↔ {durB:.1f}s; B transposed {transpose:+d}; overall ratio {durB / durA:.3f}; median confidence {np.median(conf):.3f}')


if __name__ == '__main__':
    main()
