#!/usr/bin/env python3
"""Rank pitch-specific energy-rise peaks for first/last score attack anchors.

These measurements do not use the held-out librosa onset detector.
"""
import json
import numpy as np
from scipy.signal import find_peaks
from score_events import HERE, IDS

for ident in IDS:
    data = np.load(HERE / 'work' / (ident + '-features.npz'))
    events = json.loads((HERE / 'work' / (ident + '-events.json')).read_text())
    notes = np.array(events['notes'])
    flux = np.maximum(np.diff(data['pitch'], axis=1, prepend=data['pitch'][:, :1]), 0)
    for label, q in [('first', notes[:, 0].min()), ('last', notes[:, 0].max())]:
        pitches = np.unique(notes[notes[:, 0] == q, 2]).astype(int)
        strength = flux[pitches].sum(axis=0)
        ix, _ = find_peaks(strength, distance=6)
        if label == 'first':
            ix = ix[ix / 50 < 8]
        else:
            ix = ix[ix / 50 > float(data['duration']) - 25]
        ix = sorted(ix, key=lambda i: -strength[i])[:15]
        print(ident, label, 'score_q', q, 'pitches', pitches.tolist(), 'peaks', [(round(i / 50, 3), round(float(strength[i]), 6)) for i in ix])
