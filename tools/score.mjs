#!/usr/bin/env node
// One recording, one config, all numeric gates; no publication without --publish.
import { spawn } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';

const args = process.argv.slice(2);
const id = args.find(a => !a.startsWith('-'));
if (!id || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)
    || args.filter(a => !a.startsWith('-')).length !== 1
    || args.some(a => a.startsWith('-') && a !== '--publish')) {
  console.error('usage: node tools/score.mjs <listen-id> [--publish]');
  process.exit(1);
}
const root = path.resolve(import.meta.dirname, '..');
const python = process.env.ALIGN_PYTHON ?? '/tmp/contrapunctus-align-venv/bin/python';
const env = { ...process.env, OPENBLAS_NUM_THREADS: '1', OMP_NUM_THREADS: '1', MKL_NUM_THREADS: '1', NUMBA_NUM_THREADS: '1' };
// Feature extraction/DTW are memory-heavy. All builders share this one lock.
const child = spawn('flock', ['-w', '7200', path.join(os.tmpdir(), 'contrapunctus-score.lock'),
  python, path.join(root, 'tools/align/pipeline.py'), id, ...(args.includes('--publish') ? ['--publish'] : [])],
  { cwd: root, env, stdio: 'inherit' });
child.on('error', e => { console.error(e.message); process.exitCode = 1; });
child.on('exit', (code, signal) => { process.exitCode = code ?? (signal ? 1 : 0); });
