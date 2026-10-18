// Source files and recording credit: see content/dossiers/mussorgsky-pictures-promenade-1.json.
// Orchestration is not named by any source; the version is treated as Ravel's 1922 scoring (inferred) and no timed claim depends on it.
// Score for structure and harmony: Pavel Lamm's text of the piano original, Mutopia Project,
// https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/promenade-1.ly
export default {
  id: 'mussorgsky-pictures-promenade-1',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'Promenade — Allegro giusto, nel modo russico',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 1, of: 15 },
  year: '1874',
  key: 'B♭ major',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - promenade - allegro giusto, nel modo russico senza allegrezza, ma.ogg' },
  intro: 'Mussorgsky’s walking theme opens the suite and comes back between pictures. No source names the orchestration; this performance has Ravel’s layout of Promenades, so the notes follow his 1922 scoring.',
  question: 'How can a tune in unequal bars suggest someone walking through a gallery?',

  sections: [
    { t: 0, label: 'Theme alone, then in chords', m: 'A' },
    { t: 28, label: 'Pedal-note chords', m: 'B' },
    { t: 44, label: 'Fuller statements to the close', m: 'C' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A single line, five beats then six', text: 'In Ravel’s scoring a solo trumpet states the theme unaccompanied. Its bars alternate five beats and six, so the stride lurches instead of marching. Count the long note that ends each short bar.', basis: 'documented', precision: 'passage', evidence: 'Trumpet solo: Philharmonia listening guide (Joanna Wyld) and LA Phil note (Orrin Howard). The 5/4 and 6/4 bars are in the score. The report estimates the tempo at 89 bpm, consistent with a crotchet pulse for the five- and six-beat bars.' },
    { t: 9, kind: 'music', title: 'The tune again, with a bass', text: 'Around eight seconds the same melody returns in chords with a bass line under it, and the level jumps by about ten decibels. In Ravel’s version a brass chorale answers the trumpet, then the strings reply more softly.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level rises from −15.0 dB at 0:05 to −4.5 dB at 0:10, the loudest window of the first twenty seconds. The brass chorale is from the Philharmonia guide; the report does not identify instruments.' },
    { t: 28, kind: 'form', title: 'Low chords over a held note', text: 'At about 0:28 the left hand re-enters and the harmony darkens towards A♭ and G♭. The sound thins; by 0:40 almost no new attacks are detected. In the score, slowly changing chords rest on a long low bass note.', basis: 'score-proportion', precision: 'passage', evidence: 'Strongest structural boundary at 0:28 (novelty 1.00). Onsets per second fall from 3.2 (0:25) to 0.0 (0:40); bass pitch class A♭ at 0:30 and F♯ (G♭) at 0:35. The pedal notes are in Lamm’s score; no bar alignment is claimed.' },
    { t: 56, kind: 'life', title: 'Hartmann is boiling', text: 'Around 12 June 1874, writing to Vladimir Stasov, Mussorgsky reported that “Hartmann is boiling as Boris boiled”. He finished the whole suite in three weeks, between 2 and 22 June, within a year of Viktor Hartmann’s death.', basis: 'documented', precision: 'passage', evidence: 'Letter to Stasov, probably 12 June 1874, quoted in Wikipedia’s Pictures at an Exhibition article (composition history); LA Phil and Boston Symphony notes give the composition dates and Hartmann’s death. The note sits over a quiet passage (−22.6 dB at 0:55).' },
    { t: 72, kind: 'listen', title: 'Broad chords hold the level', text: 'From about 1:10 the sound stays within a few decibels of its maximum, with few new attacks per second. Chords carry the tune above a walking bass, the broadest statement in the movement.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level is −9.3 to −6.4 dB across 1:10–1:35 at 0.4 to 1.6 onsets per second; the loudest windows are 1:15, 1:25, 1:30 and 1:35.' },
    { t: 94, kind: 'world', title: 'Stasov’s picture of the walker', text: 'Vladimir Stasov described the opening as Mussorgsky “roving through the exhibition, now leisurely, now briskly”, sometimes thinking sadly of his dead friend. The score marks the last chord attacca, running straight into Gnomus.', basis: 'documented', precision: 'passage', evidence: 'Stasov’s programme quoted in Michael Steinberg’s Boston Symphony note (https://www.bso.org/works/pictures-at-an-exhibition); attacca mark in Lamm’s score (Mutopia). The level falls to −33 dB at 1:40.' },
  ],

  transitions: [
    {
      id: 'into-pedal-chords',
      title: 'Chords settle over a low pedal',
      from: 'Theme alone, then in chords',
      to: 'Pedal-note chords',
      at: { t: 28 },
      span: [20, 38],
      how: '<p>The statements so far end in the F and A♭ regions. At about 0:28 the left hand returns with a low A♭ and the harmony darkens; a G♭ pedal follows, and chords change slowly above it. Activity drops sharply. The melody keeps its rising shape and its unequal bars, so the new texture is the same walk taken more slowly, not a new subject.</p>',
      devices: ['texture change', 'register change', 'motivic link'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'The strongest boundary in the report is 0:28 (novelty 1.00); onsets per second fall from 3.2 at 0:25 to 1.2 at 0:30 and 0.0 at 0:40, and the bass pitch class moves to A♭ (0:30) and F♯/G♭ (0:35). The pedal and chord layout are from Lamm’s piano score; the match to the orchestral version is by proportion only.',
    },
    {
      id: 'into-fuller-statements',
      title: 'The pedal lifts and F major returns',
      from: 'Pedal-note chords',
      to: 'Fuller statements',
      at: { t: 44 },
      span: [38, 54],
      how: '<p>The low chords give way to a bass that steps down and up again, and the music arrives in F major, the dominant of B♭, with a jump in loudness. From here the tune is carried by full chords. The harmonic route is a retransition by bass motion, not a modulation: the closing bars return to B♭ major.</p>',
      devices: ['retransition', 'crescendo build', 'orchestration change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundary at 0:44 (novelty 0.90); relative level rises from −19.4 dB (0:40) to −8.9 dB (0:45); local key reads F major from 0:45 (r 0.67–0.93) and B♭ major at 1:40 (r 0.92). Key labels are confirmation only; the bass motion is from the score’s second half.',
    },
  ],
};
