#!/usr/bin/env python3
"""Plot measured pitch energy and unsnapped score timing for numerical inspection."""
import os
for key in ('OPENBLAS_NUM_THREADS', 'OMP_NUM_THREADS', 'MKL_NUM_THREADS', 'NUMBA_NUM_THREADS'):
    os.environ.setdefault(key, '1')
import argparse
import json
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
from score_events import HERE


def plot(ident, start, end):
    data = np.load(HERE / 'work' / (ident + '-features.npz'))
    score = json.loads((HERE / 'work' / (ident + '-candidate.json')).read_text())
    notes = np.array(score['notes'])
    fig, axes = plt.subplots(3, 1, figsize=(15, 9), sharex=True, layout='constrained')
    a, b = int(start * 50), min(int(end * 50), data['pitch'].shape[1])
    p = np.log1p(data['pitch'][24:96, a:b] * 100)
    p /= np.maximum(np.max(p, axis=1, keepdims=True), .01)
    axes[0].imshow(p, origin='lower', aspect='auto', extent=[start, b / 50, 24, 96], cmap='Greys', vmin=0, vmax=1)
    for onset, dur, pitch, voice, _ in notes[(notes[:, 0] + notes[:, 1] >= start) & (notes[:, 0] <= end)]:
        axes[0].plot([onset, onset + dur], [pitch + .4, pitch + .4], color=plt.cm.tab10(int(voice) % 10), lw=1.4, alpha=.7)
    axes[0].set_ylim(24, 96)
    axes[0].set_ylabel('MIDI pitch; score lines / measured energy')
    t = np.arange(a, b) / 50
    axes[1].plot(t, np.sum(data['dlnco'][:, a:b], axis=0), color='black')
    unique = np.unique(notes[:, 0])
    axes[1].vlines(unique[(unique >= start) & (unique < end)], 0, .7, color='tab:red', label='Score attacks')
    onsets = data['onsets']
    axes[1].vlines(onsets[(onsets >= start) & (onsets < end)], .8, 1.4, color='tab:blue', label='librosa attacks')
    axes[1].legend()
    axes[1].set_ylabel('DLNCO / attacks')
    path = np.load(HERE / 'work' / (ident + '-path.npz'))
    selected = (path['audio_seconds'] >= start) & (path['audio_seconds'] < end)
    axes[2].plot(path['audio_seconds'][selected], path['score_seconds'][selected] / path['scale'])
    axes[2].set_ylabel('Score quarter units')
    axes[2].set_xlabel('Recording seconds')
    for bar in score['bars']:
        if start < bar['t'] < end:
            axes[2].axvline(bar['t'], color='0.7', lw=.5)
            axes[2].text(bar['t'], 1, bar['n'] + ('.2' if bar['occ'] == 2 else ''), rotation=90, fontsize=7, transform=axes[2].get_xaxis_transform(), va='top')
    axes[0].set_xlim(start, end)
    fig.suptitle(ident + ': provisional machine alignment, not aural review')
    dest = HERE / 'work' / f'{ident}-{start:g}-{end:g}.png'
    fig.savefig(dest, dpi=115)
    plt.close(fig)
    print(dest)
    print('AUDIO_ONSETS', onsets[(onsets >= start) & (onsets < end)].round(3).tolist())
    print('SCORE_ATTACKS', unique[(unique >= start) & (unique < end)].round(3).tolist())


if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('id')
    p.add_argument('start', type=float)
    p.add_argument('end', type=float)
    args = p.parse_args()
    plot(args.id, args.start, args.end)
