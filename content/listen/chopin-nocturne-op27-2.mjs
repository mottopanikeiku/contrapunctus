// Historical and musical sources:
// https://chopin.nifc.pl/en/chopin/kompozycja/271
// https://www.laphil.com/works/two-nocturnes-op-27
// https://chopin.nifc.pl/en/chopin/kalendarium/123_lata-adaptacji-18311835/712
// https://www.bbc.co.uk/radio3/classical/chopinexperience/timeline/timeline.shtml
export default {
  id: 'chopin-nocturne-op27-2',
  composer: 'chopin',
  order: 2,
  work: 'Nocturne in D♭ major, Op. 27 No. 2',
  movement: 'Lento sostenuto',
  year: '1835',
  key: 'D♭ major',
  forces: 'Piano',
  performers: 'Frank Lévy',
  recorded: 'c. 2014',
  source: { file: 'File:Chopin - Nocturne No. 8 in D-flat major, Op. 27 No. 2 (Frank Levy).flac' },
  intro: 'A rocking left hand supports a melody that repeatedly grows a second voice. Listen for the difference between the notes that carry the phrase and the ornaments that delay their arrival.',
  sections: [
    { t: 0, label: 'The solo singing line' },
    { t: 42, label: 'Paired voices and expansion' },
    { t: 116, label: 'First return' },
    { t: 154, label: 'A darker expansion' },
    { t: 206, label: 'The opening melody returns again' },
    { t: 280, label: 'Coda · D♭ sustained' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'A singer above broken chords', text: 'The left hand establishes a rocking accompaniment in D♭ major, and the right hand carries a slower singing line. The marking is Lento sostenuto: slow and sustained, although the piano’s sound begins to decay as soon as each note is struck.', evidence: 'D♭–F–A♭ pitch classes from the opening, labelled enharmonically C♯ major by the report; −28.4 dB at 0:00 rises to −16.8 at 0:05; 1.4–2.4 onsets/s across the opening' },
    { t: 42, kind: 'music', title: 'One voice becomes two', text: 'The contrasting phrase lets the melody move in thirds and sixths, as if a second singer had joined it. Listen for both notes of the duet, not just the top one; their spacing is part of the change in expression.', evidence: 'boundary 0:42 (0.42); −22.0 dB at 0:40 rises to −13.5 at 0:45; B♭/F/D♭ chroma and increased onset density at 0:45–0:55 locate the score’s paired-voice expansion' },
    { t: 70, kind: 'music', title: 'The phrase grows more insistent', text: 'The sound grows stronger and the surface becomes busier. The left hand’s continuity makes the intensification measurable: the accompaniment keeps moving while the upper voices acquire more notes and harmonic pressure.', evidence: '−14.8 dB at 0:50 rises to −10.3 at 1:10; brightness 679→941 Hz and onsets 4.0→5.2/s; E♭ minor estimates at 1:00–1:15 confirm the darker expansion' },
    { t: 105, kind: 'world', title: 'A Parisian dedication', text: 'The two Op. 27 Nocturnes were published in 1836 and dedicated to Countess Thérèse d’Apponyi, whose Paris salon Chopin frequented. The dedication places the music in a network of patrons and performers, rather than identifying a secret subject for the piece.' },
    { t: 135, kind: 'life', title: 'Learning from the opera', text: 'After reaching Paris in 1831, Chopin became a regular opera-goer. His letters name singers including Giuditta Pasta, Maria Malibran and Giovanni Battista Rubini. The sustained phrase and decorated return in his piano writing belong to the same practical world of singing.' },
    { t: 170, kind: 'music', title: 'A darker second expansion', text: 'The returning music has become more forceful and moves away from the opening major-key calm. The pianist must still keep the two melodic voices distinct; increasing the volume does not turn their duet into a single line.', evidence: 'boundaries 2:30 (0.54), 2:34 (0.71) and 2:50 (0.57); −17.1 dB at 2:30 rises to −5.8 at 2:55; C♯ minor/E major region at 2:30–2:50 and brightness up to 1,025 Hz at 3:10' },
    { t: 206, kind: 'form', title: 'The melody returns again', text: 'D♭ major and the opening melody come back. This nocturne is built from repeated returns and expansions, not a simple quiet–stormy–quiet design; ornament changes what a familiar phrase contains each time.', evidence: 'strongest boundary 3:26 (1.00); brightness drops from 998 Hz at 3:20 to 593 at 3:25; D♭–F–A♭ chroma at 3:25–3:45, tonic major r=0.91 at 3:25' },
    { t: 243, kind: 'music', title: 'The final crest approaches', text: 'Another rise in the paired melodic writing leads to the recording’s largest swell. Listen for the longer phrase through the ornamental movement: its destination matters more than the number of notes needed to reach it.', evidence: 'boundaries 3:56 (0.49) and 4:02 (0.41); −24.3 dB at 4:00 rises to −6.6 at 4:15 and −4.8 at 4:25, the loudest window; onsets reach 5.2/s at 4:10' },
    { t: 280, kind: 'form', title: 'The coda stays close', text: 'The final expansion gives way to a quieter closing span. D♭ remains the harmonic centre, but small chromatic changes continue inside the texture; staying in one place does not require every accompanying note to stay still.', evidence: 'boundary 4:40 (0.50); −4.8 dB at 4:25 falls to −17.5 at 4:40 and −21.2 at 4:55; D♭ bass persists from 4:40 through 5:50 with changing inner pitch classes' },
    { t: 315, kind: 'life', title: 'Chopin plays in Leipzig', text: 'Chopin played this nocturne during his September 1835 visit to Leipzig, where he met Schumann and Mendelssohn at Friedrich Wieck’s house. Mendelssohn later told his sister Fanny that he had learnt a substantial part of the new piece by ear.' },
    { t: 350, kind: 'listen', title: 'Listen past the attack', text: 'The closing notes are increasingly separated by their own resonance. Listen to the sound after the key is struck: pedalling and release determine how one harmony remains audible while the next is prepared.', evidence: 'onset density drops to 0.8/s at 5:40, 0.0 at 5:55 and 0.6 at 6:00; loudness falls from −19.8 dB at 5:50 to −36.2 at 5:55; D♭/F/A♭ remains stable' },
    { t: 365, kind: 'music', title: 'D♭ fades into silence', text: 'The final major harmony is left to decay. No new phrase follows it: the remaining sound is the piano’s resonance, gradually disappearing.', evidence: 'no detected attacks from 6:05 onwards; −45.8 dB at 6:05, −53.0 at 6:10 and −74.0 at 6:15; D♭ major pitch collection persists into the decay' },
  ],
};
