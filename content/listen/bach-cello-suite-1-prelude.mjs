export default {
  id: 'bach-cello-suite-1-prelude',
  composer: 'bach',
  order: 5,
  work: 'Cello Suite No. 1, BWV 1007',
  movement: 'I. Prélude',
  set: { id: 'bach-cello-suite-1', title: 'Cello Suite No. 1', part: 1, of: 6 },
  year: 'c. 1717–23',
  key: 'G major',
  forces: 'Unaccompanied cello',
  performers: 'John Michel, cello',
  recorded: '',
  source: { file: 'File:JOHN MICHEL CELLO-J S BACH CELLO SUITE 1 in G Prelude.ogg' },
  intro: 'John Michel opens Bach’s First Cello Suite with a single line that seems to carry its own bass. The bow circles through broken chords, then breaks free into scales before the final G-major chord.',
  sections: [
    { t: 0, label: 'A · G major, one note at a time', m: 'A', mNote: 'Broken chords circle above a changing bass' },
    { t: 64, label: 'B · Scales after the held D', m: 'B', mNote: 'The cello runs on after the fermata' },
    { t: 106, label: 'Coda · A chromatic climb above D', m: 'Coda', mNote: 'The upper notes rise towards the final G-major chord' },
  ],
  cues: [
    { bar: { n: '1', occ: 1 }, kind: 'music', title: 'One cello, bass and melody', text: 'G, D, B: the cello opens a G-major chord one note at a time. The low G keeps returning while the bow circles through the notes above it. With no accompanist, the cello supplies both the bass and everything that grows from it.', basis: 'score-aligned', precision: 'passage', evidence: 'Schirmer score (1916), Prelude, bars 1–4, in the Mutopia edition: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=517.' },
    { bar: { n: '22', occ: 1 }, kind: 'form', title: 'A held D, then flight', text: 'A rising arpeggio reaches D and stops on a fermata. Then the cello starts running again, in scales that escape the opening’s repeated pattern. D belongs to the dominant of G; the home chord is still some way off.', basis: 'score-aligned', precision: 'passage', evidence: 'Schirmer score (1916), Prelude, bar 22 and following: fermata on D followed by freer semiquaver figuration. Mutopia edition, music ID 517.' },
    { bar: { n: '37', occ: 1 }, kind: 'music', title: 'D beneath the climb', text: 'A repeated D alternates with a line climbing by semitones. The cello keeps touching that fixed note as the upper notes rise beyond it. After one last round of broken chords, the bow settles on a full G-major chord.', basis: 'score-aligned', precision: 'passage', evidence: 'Schirmer score (1916), Prelude, bars 37–42: chromatic ascent alternating with D, then broken chords and the final G-major chord. Mutopia edition, music ID 517.' },
  ],
  transitions: [
    { id: 'into-freer-figuration', title: 'The held D releases a scale', from: 'A · G major, one note at a time', to: 'B · Scales after the held D', at: { t: 64 }, span: [51, 76], how: '<p>The cello climbs to a D marked with a fermata. After the pause, semiquavers run up the scale and spread through a wider range. The bass and upper notes still belong to one bow; D, the dominant of G, keeps the ending in suspense.</p>', devices: ['fermata', 'texture change', 'standing on the dominant'], basis: 'score-proportion', precision: 'passage', evidence: 'Schirmer score (1916), Prelude, bar 22 and following; Mutopia edition, music ID 517.' },
    { id: 'into-closing-build', title: 'A fixed D, a climbing line', from: 'B · Scales after the held D', to: 'Coda · A chromatic climb above D', at: { t: 106 }, span: [96, 123], how: '<p>The cello alternates D with a rising chromatic line. The repeated note acts as a dominant pedal while the upper notes climb. Broken chords then lead through the final cadence to G major, held beneath a fermata.</p>', devices: ['dominant pedal', 'register change', 'perfect cadence', 'fermata'], basis: 'score-proportion', precision: 'passage', evidence: 'Schirmer score (1916), Prelude, bars 37–42; Mutopia edition, music ID 517.' },
  ],
};
