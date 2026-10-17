#!/usr/bin/env node
// Local schema and notation checks; source accuracy still requires editorial research.
// Usage: node tools/validate-influence.mjs
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { loadContent } from '../src/content.mjs';
import { readInfluence, INFLUENCE_KINDS, FIGURE_KINDS } from '../src/influence.mjs';

const require = createRequire(import.meta.url);
const ABCJS = require('../docs/assets/vendor/abcjs-basic-min.js');
const ROOT = path.resolve(import.meta.dirname, '..');
const nonempty = (value) => typeof value === 'string' && value.trim().length > 0;
const object = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const identifier = (value) => nonempty(value) && /^[a-z0-9][a-z0-9-]*$/.test(value);
const webUrl = (value) => { try { return typeof value === 'string' && ['http:', 'https:'].includes(new URL(value).protocol); } catch { return false; } };

export function validateInfluence(data, { composers, listens }) {
  const errors = [];
  const error = (where, message) => errors.push(`${where}: ${message}`);
  const composerIds = new Set(composers.map((c) => c.slug));
  const listenById = new Map(listens.map((l) => [l.id, l]));
  const nodes = new Set(composerIds), edgeIds = new Set(), threadIds = new Set(), batchIds = new Set();
  const source = (value, where) => {
    if (!object(value)) { error(where, 'source must be an object'); return; }
    if (!nonempty(value.title)) error(where, 'source title is required');
    if (!webUrl(value.url)) error(where, 'source needs an absolute http(s) URL');
    if (value.locator != null && !nonempty(value.locator)) error(where, 'locator must be a non-empty string when supplied');
  };
  const abc = (value, where) => {
    if (!nonempty(value)) { error(where, 'ABC notation is required'); return; }
    for (const header of ['X', 'M', 'L', 'K']) if (!new RegExp(`^${header}:\\s*\\S`, 'm').test(value)) error(where, `ABC needs a ${header}: header`);
    try {
      const tunes = ABCJS.parseOnly(value);
      if (tunes.length !== 1) error(where, 'ABC must contain one short example');
      const tune = tunes[0];
      if (!tune?.lines?.length) error(where, 'ABC produced no music');
      for (const warning of tune?.warnings ?? []) error(where, warning.replace(/<[^>]+>/g, ''));
    } catch (e) { error(where, `ABC parser: ${e.message}`); }
  };
  for (const batch of data.batches ?? []) {
    if (!nonempty(batch.batch)) error(batch.file ?? 'batch', 'batch name is required');
    if (batchIds.has(batch.batch)) error(batch.file, `duplicate batch name ${batch.batch}`);
    batchIds.add(batch.batch);
    if (!Array.isArray(batch.edges) || !Array.isArray(batch.figures)) error(batch.file, 'edges and figures must be arrays');
    if (batch.file?.startsWith('_')) error(batch.file, 'development fixtures must be removed before publication');
    const localFigures = new Set();
    for (const figure of batch.figures ?? []) {
      if (localFigures.has(figure.id)) error(batch.file, `duplicate figure ${figure.id} within batch`);
      localFigures.add(figure.id);
    }
  }
  for (const figure of data.figures ?? []) {
    if (!object(figure)) { error('figure', 'must be an object'); continue; }
    const where = `figure ${figure.id ?? '?'}`;
    if (!identifier(figure.id)) error(where, 'invalid id');
    if (nodes.has(figure.id)) error(where, 'figure id collides with another node');
    nodes.add(figure.id);
    for (const key of ['name', 'dates']) if (!nonempty(figure[key])) error(where, `${key} is required`);
    if (!Number.isInteger(figure.year)) error(where, 'year must be an integer');
    if (!FIGURE_KINDS.includes(figure.kind)) error(where, `unknown kind ${figure.kind}`);
    if (figure.portrait != null && !/^File:.+/.test(figure.portrait)) error(where, 'portrait must name a Wikimedia Commons File:');
  }
  if (!Array.isArray(data.threads)) error('threads.json', 'must be an array');
  for (const thread of Array.isArray(data.threads) ? data.threads : []) {
    if (!object(thread)) { error('thread', 'must be an object'); continue; }
    const where = `thread ${thread.id ?? '?'}`;
    if (!identifier(thread.id)) error(where, 'invalid id');
    if (threadIds.has(thread.id)) error(where, 'duplicate thread id');
    threadIds.add(thread.id);
    for (const key of ['name', 'summary']) if (!nonempty(thread[key])) error(where, `${key} is required`);
    if (thread.abcNote != null && !nonempty(thread.abcNote)) error(where, 'abcNote must be a non-empty string when supplied');
    source(thread.source, where); abc(thread.abc, where);
  }
  for (const edge of data.edges ?? []) {
    if (!object(edge)) { error('edge', 'must be an object'); continue; }
    const where = `edge ${edge.id ?? '?'}`;
    if (!identifier(edge.id)) error(where, 'invalid id');
    if (edgeIds.has(edge.id)) error(where, 'duplicate edge id');
    edgeIds.add(edge.id);
    for (const key of ['from', 'to']) if (!nodes.has(edge[key])) error(where, `unknown ${key} endpoint ${edge[key]}`);
    if (!INFLUENCE_KINDS.includes(edge.kind)) error(where, `unknown kind ${edge.kind}`);
    if (!Number.isInteger(edge.year)) error(where, 'year must be an integer');
    if (!nonempty(edge.title)) error(where, 'title is required');
    else if (edge.title.trim().split(/\s+/).length > 9) error(where, 'title exceeds nine words');
    if (!nonempty(edge.claim)) error(where, 'claim is required');
    if (!object(edge.works) || !nonempty(edge.works.from) || !nonempty(edge.works.to)) error(where, 'works needs from and to descriptions');
    if (!['documented', 'inferred', 'disputed'].includes(edge.status)) error(where, `unknown evidence status ${edge.status}`);
    if (['inferred', 'disputed'].includes(edge.status) && !nonempty(edge.note)) error(where, 'inferred/disputed claims need a note explaining the uncertainty');
    if (edge.thread != null && !threadIds.has(edge.thread)) error(where, `unknown thread ${edge.thread}`);
    if (!Array.isArray(edge.sources) || !edge.sources.length) error(where, 'at least one source is required');
    for (const item of Array.isArray(edge.sources) ? edge.sources : []) source(item, where);
    if (edge.art != null && (!object(edge.art) || !/^File:.+/.test(edge.art.file) || !nonempty(edge.art.caption))) error(where, 'art needs a Commons File: name and caption');
    if (edge.exhibit != null) {
      if (!object(edge.exhibit)) { error(where, 'exhibit must be an object'); continue; }
      if (!edge.exhibit.from && !edge.exhibit.to) error(where, 'exhibit needs at least one passage');
      for (const [side, passage] of Object.entries(edge.exhibit)) {
        const location = `${where}, exhibit.${side}`;
        if (!['from', 'to'].includes(side)) { error(location, 'only from/to passages are supported'); continue; }
        if (!object(passage)) { error(location, 'passage must be an object'); continue; }
        if (!nonempty(passage.label)) error(location, 'passage label is required');
        if (!webUrl(passage.checked)) error(location, 'checked score needs an absolute http(s) URL');
        abc(passage.abc, location);
        if (passage.listen != null) {
          if (!object(passage.listen)) { error(location, 'listen must be an object'); continue; }
          const listen = listenById.get(passage.listen.id);
          if (!listen) error(location, `unknown listen id ${passage.listen.id}`);
          if (!Number.isFinite(passage.listen.t) || passage.listen.t < 0) error(location, 'listen.t must be a non-negative number');
        }
      }
    }
  }
  return errors;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const [data, content] = await Promise.all([readInfluence(ROOT), loadContent()]);
    const errors = validateInfluence(data, content);
    if (errors.length) { for (const message of errors) console.error(`ERROR ${message}`); process.exitCode = 1; }
    else console.log(`ok    influence: ${data.batches.length} batches, ${data.edges.length} edges, ${data.figures.length} figures, ${data.threads.length} threads; ABC parsed with abcjs`);
  } catch (error) { console.error(`ERROR influence: ${error.message}`); process.exitCode = 1; }
}
