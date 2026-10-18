export default {
  id: 'ravel-ma-mere-loye-pavane', composer: 'ravel', order: 40,
  work: 'Ma mère l’Oye', movement: 'I. Pavane de la Belle au bois dormant',
  year: '1908–10', key: 'A minor', forces: 'Piano four hands',
  performers: 'Duo Campion/Vachon', recorded: '1992 (source description)',
  source: { file: "File:Ravel Duo Campion-Vachon Ma Mere l'oye 1 Pavane de la Belle au bois dormant.OGG" },
  set: { id: 'ravel-ma-mere-loye', title: 'Ma mère l’Oye — piano duet', part: 1, of: 5 },
  intro: 'Ravel opens his five children’s pieces with a slow pavane for Sleeping Beauty, played here on one piano by four hands. This complete miniature is the only movement from the duet suite in this selection.',
  question: 'How do four hands keep a simple melody distinct from its surrounding harmony?',
  sections: [
    { t: 0, label: 'Opening · lower and upper phrases', m: 'A', mNote: 'The lower part begins; the upper part adds its melody.' },
    { t: 38, label: 'Middle · connected phrases', m: 'B', mNote: 'A more continuous line moves through the middle register.' },
    { t: 72, label: 'Return · upper phrase', m: 'A′', mNote: 'The earlier upper melody returns and settles into the close.' },
  ],
  cues: [
    {
      t: 0, kind: 'music', title: 'One piano, four hands',
      text: 'The lower player begins alone. The upper part first answers briefly, then introduces a higher melody over repeated accompanying notes. Listen for the change of register without imagining a second instrument: both players share the same piano and its resonance.',
      basis: 'general', precision: 'passage',
      evidence: 'Durand 1910 piano-duet score, printed pp. 2–3: Seconda begins alone; Prima has two bars of rest, a brief answer in bar 3 and a higher phrase from bar 5. https://hdl.handle.net/1802/17620. No exact entry timestamp is assigned.',
    },
    {
      t: 30, kind: 'world', title: 'Children and a fairy tale',
      text: 'Ravel dedicated Ma mère l’Oye to Mimie and Jean Godebski. The opening piece takes its Sleeping Beauty from Charles Perrault’s fairy tale. Its modest scale is deliberate: this is one of five children’s pieces for piano duet, not a miniature reduction of the later orchestral ballet.',
      basis: 'documented', precision: 'passage',
      evidence: 'IRCAM work catalogue identifies the dedication and original five-piece piano-duet version: https://brahms.ircam.fr/fr/work/ma-mere-l%27oye (page HTML). Literary source and later versions: https://en.wikipedia.org/wiki/Ma_m%C3%A8re_l%27Oye. The 1910 score is explicitly for piano four hands.',
    },
    {
      t: 60, kind: 'world', title: 'Young pianists at the premiere',
      text: 'The first public performance was given by Jeanne Leleu and Geneviève Durony, aged eleven and fourteen, at the Salle Gaveau on 20 April 1910. The dedication to children was matched by young performers, though they were not the two Godebski children named in the score.',
      basis: 'documented', precision: 'passage',
      evidence: 'IRCAM work catalogue, premiere fields and commentary in page HTML: https://brahms.ircam.fr/fr/work/ma-mere-l%27oye. The performers, ages, date and venue are stated there; the premiere concerns the complete duet suite, not this recording.',
    },
    {
      t: 85, kind: 'listen', title: 'Letting the phrase finish',
      text: 'The returning upper melody settles into longer notes. Ravel marks a slowing and a held final note, giving both players time to release the phrase together. Listen to the shared resonance after the last attacks rather than expecting a separate flourish from either player.',
      basis: 'audio-feature', precision: 'passage',
      evidence: 'Durand score, pp. 2–3, final Rall. and fermata. cache/analysis/ravel-ma-mere-loye-pavane.txt: detected attack density falls from about 1.4 per second at 85 seconds to 0.8 at 90 and 0.2 at 95; level falls to −19.4 dB at 95. The report supports the closing passage, not an exact release time.',
    },
  ],
  transitions: [
    {
      id: 'connected-middle', title: 'The melody keeps going', from: 'Opening · lower and upper phrases', to: 'Middle · connected phrases',
      at: { t: 38 }, span: [30, 48],
      how: '<p>The opening alternates a simple lower phrase with a higher, more decorated answer. The middle gives the upper line more continuous movement while the lower part sustains the harmonic support. The two players change their roles within a single piano sound; this is a change of texture and register, not an orchestral handover.</p>',
      devices: ['texture change', 'register change'], basis: 'score-proportion', precision: 'passage',
      evidence: 'Durand score, pp. 2–3, bars 8–12: connected Prima line with reduced repeated accompaniment. The twenty-bar score and analysis boundary candidate at 38 seconds locate the middle approximately. No alignment file or exact bar time is claimed.',
    },
    {
      id: 'upper-return', title: 'A familiar upper phrase returns', from: 'Middle · connected phrases', to: 'Return · upper phrase',
      at: { t: 72 }, span: [64, 90],
      how: '<p>The high phrase heard earlier returns with its gently repeated accompaniment. Recognition comes from the melody and its register rather than a large change in volume. Ravel then lengthens the final gesture, adding a rallentando and a fermata so that the two parts can settle into one ending.</p>',
      devices: ['motivic link', 'tempo change', 'fermata'], basis: 'score-proportion', precision: 'passage',
      evidence: 'Durand score, p. 3, Prima bars 17–20 recalls bars 5–8, with a modified closing bar; final Rall. and fermata. Analysis has its strongest boundary candidate at 72 seconds and another at 78. The return is placed at passage level, not as a verified bar onset.',
    },
  ],
  orchestra: {
    ensemble: ['piano'],
    basis: 'score-proportion',
    source: {
      title: 'Ravel, Ma mère l’Oye, original piano-duet score (Durand, 1910)',
      url: 'https://hdl.handle.net/1802/17620',
      note: 'Printed pp. 2–3, Seconda and Prima. Both parts share one piano; the recording does not identify which pianist plays each part.',
    },
    timeline: [
      { t: 0, playing: ['piano'], lead: ['piano'], note: 'One piano throughout: the lower part begins, and the upper part joins within the opening phrase.' },
    ],
  },
};
