// Recording: composer’s Victor acoustic session, New York, 4 November 1922 (DAHR matrix B-27110, take 5).
// Source file: track 190 of the 1992 RCA/BMG ‘Complete Rachmaninoff’ CD 10 as uploaded to the Internet Archive.
// Score read for form and markings: Piano Street scan of the 1892 version (public-domain edition), https://www.pianostreet.com/rachmaninoff-sheet-music/morceaux-de-fantaisie/serenade-op-3-no-5.htm
export default {
  id: 'rachmaninoff-serenade-op3-5',
  composer: 'rachmaninoff',
  order: 70,
  work: 'Sérénade, Op. 3 No. 5',
  movement: 'Sostenuto — Tempo di Valse',
  year: '1892',
  key: 'B♭ minor',
  forces: 'Piano',
  performers: 'Sergei Rachmaninoff, piano',
  recorded: '4 November 1922',
  source: {
    archive: { item: '195-complete-rachmaninoff-cd-10', file: '190 - Complete RACHMANINOFF - CD 10 -Rachmaninov - Serenade, Op. 3, No. 5 (rec. 4.XI.1922).mp3' },
    rights: { basis: 'us-published-before-cutoff', published: 1925, evidence: 'Issued by Victor as Red Seal 66129 and later as 816 (DAHR matrix B-27110, https://adp.library.ucsb.edu/index.php/matrix/detail/800001056/B-27110-Serenade); the 1925 Victor catalogue lists the Serenade (Op. 3, No. 5) coupled with the Bizet Minuet, https://archive.org/details/catalogueofvicto00vict_0. 1925 is the latest year of first publication; the exact release date is not documented.' },
  },
  intro: 'Rachmaninoff was nineteen when he added the Sérénade to his Op. 3 pieces; here he plays it for Victor in 1922. A hushed Sostenuto gives way to a waltz that thins out into quiet chords before one last loud chord.',
  question: 'How can a melody sing over a waltz accompaniment without being pushed along by it?',

  sections: [
    { t: 0, label: 'Sostenuto · hushed opening', m: 'A' },
    { t: 56, label: 'Tempo di Valse · the serenade', m: 'B' },
    { t: 164, label: 'Coda · quiet chords, last chord', m: 'Coda' },
  ],

  cues: [
    { t: 0, kind: 'listen', title: 'How little there is', text: 'The Sostenuto is marked pp, in 3/8: an F in the left hand, small turning figures around it, and long rests between them. The waltz does not start for nearly a minute.', basis: 'score-proportion', precision: 'passage', evidence: 'The Piano Street scan of the 1892 version shows Sostenuto, pp, 3/8, a left-hand F, sixteenth-note turns and rests in the first system. The analysis puts the opening among the quietest stretches (0:00 and 0:45–0:55) with 0.4–2.6 attacks per second. https://www.pianostreet.com/rachmaninoff-sheet-music/morceaux-de-fantaisie/serenade-op-3-no-5.htm' },
    { t: 22, kind: 'life', title: 'A fifth piece, written fast', text: 'Rachmaninoff planned four pieces for Op. 3. After reading Tchaikovsky’s newspaper praise of younger composers in November 1892, he said he sat down and composed a fifth: this Sérénade. Gutheil published the set in February 1893.', basis: 'documented', precision: 'passage', evidence: 'Robert Matthew-Walker’s note for Hyperion CDA66081 quotes Rachmaninoff on adding the Serenade after Tchaikovsky’s interview and dates publication to February 1893: https://www.hyperion-records.co.uk/dw.asp?dc=W6690_66081' },
    { t: 56, kind: 'music', title: 'The waltz begins', text: 'Around 0:56 the level jumps by about ten decibels and attacks rise from about 2.6 to 4.4 a second. In Tempo di Valse a bass note falls on the first beat, with chords on the others, under a melody built from small turns.', basis: 'audio-feature', precision: 'moment', evidence: 'Relative level rises from −23.4 dB at 0:55 to −13.5 dB at 1:00, attacks from 2.6 to 4.4 per second, and the boundary strength of 0.90 at 0:56 is the second-highest in the file. The score places Tempo di Valse at the end of its first page.' },
    { t: 84, kind: 'listen', title: 'Tune against a steady pattern', text: 'Follow the melody, made of small turning figures, above the regular bass-and-chord pattern. Because the accompaniment is steady, any stretching or pressing of the tune stands out against it.', basis: 'general', precision: 'passage', evidence: 'The score keeps a bass note and chords in the left hand through the Tempo di Valse; the analysis shows steady attack density (3.2–4.4 per second) from 1:00 to 1:30. This is a listening suggestion, not a measurement of the rubato.' },
    { t: 112, kind: 'life', title: 'Four takes thrown away', text: 'Victor’s ledger shows three takes on 1 November 1922 and two on 4 November, all in New York. Only the fifth was kept. A ledger entry for 1 November reads “Steinway piano, style B-211833”.', basis: 'documented', precision: 'passage', evidence: 'DAHR matrix B-27110 lists takes 1–3 (1 November) and 4–5 (4 November 1922) in New York, takes 1–4 destroyed and take 5 as master, and quotes the ledger note on the Steinway: https://adp.library.ucsb.edu/index.php/matrix/detail/800001056/B-27110-Serenade' },
    { t: 138, kind: 'listen', title: 'Not the page, the performance', text: 'Henle’s 2022 critical report says that Rachmaninoff’s own recording of the Sérénade departs from the printed notation of this version “in many places”. It does not say which of his recordings it means, so listen to his choices rather than expecting a literal reading of the score.', basis: 'documented', precision: 'passage', evidence: 'Dominik Rahmer’s comment on Sérénade bars 103–104 (Henle Urtext HN 1491 critical report): https://www.henle.de/media/76/20/d9/1697725714/1491-1697725714-sync.pdf. The report does not identify the recording or the differences, and no comparison with this record has been made.' },
    { t: 150, kind: 'world', title: 'Revised, and played as played', text: 'In 1940 Rachmaninoff revised the Sérénade; Charles Foley’s edition is headed “Revised and as played by the composer”. This 1922 record is eighteen years older, and Wikipedia’s list of his recordings gives it as the 1892 version.', basis: 'documented', precision: 'passage', evidence: 'Foley’s title page and 1940 date are transcribed in the Henle critical report (https://www.henle.de/media/76/20/d9/1697725714/1491-1697725714-sync.pdf). Wikipedia’s list of the composer’s recordings labels the 4 November 1922 recording the 1892 version: https://en.wikipedia.org/wiki/Sergei_Rachmaninoff_recordings' },
    { t: 166, kind: 'music', title: 'Back to hush, then one chord', text: 'The closing pages fall to ppp and pppp, as quiet as the opening. The score ends on one ff chord under a fermata; here the level drops near 2:45–2:50, the closing minute’s loudest window comes at about 2:55, and the sound has gone by 3:05.', basis: 'audio-feature', precision: 'passage', evidence: 'The score’s last systems show ppp and pppp chords and a final ff chord with a fermata. The analysis shows the level falling to −21.9 and −24.3 dB at 2:45 and 2:50, the closing minute’s loudest window at 2:55 (−10.3 dB; 1:15 at −8.4 dB is louder) and silence from 3:05.' },
  ],

  transitions: [
    {
      id: 'into-the-waltz',
      title: 'Quiet chords, a rising run, then the waltz',
      from: 'Sostenuto',
      to: 'Tempo di Valse',
      at: { t: 56 },
      span: [46, 66],
      how: '<p>The Sostenuto ends on soft chords marked ppp. A short rising run in the bass clef leads into Tempo di Valse, which opens on a rest and then sets a single bass note against light chords in 3/8. The opening’s left hand keeps returning to F, the dominant of B♭ minor; the waltz settles on B♭ minor with a steady bass. Tempo and texture change at once, while the same small turning figures carry over into the melody.</p>',
      devices: ['link passage', 'tempo change', 'texture change', 'motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'The score’s first page ends with ppp chords, a rising run and Tempo di Valse marked p. The analysis shows the largest early jump in level and attack density at 0:56 (−23.4 to −13.5 dB; 2.6 to 4.4 attacks per second), and local key estimates move from F minor (0:00–0:30) to B♭ minor (from 1:00). Key estimates only confirm what the score shows.',
    },
    {
      id: 'into-the-close',
      title: 'The waltz thins to recalled chords',
      from: 'Tempo di Valse',
      to: 'Coda',
      at: { t: 164 },
      span: [152, 176],
      how: '<p>The waltz bass-and-chord pattern falls away. Chords marked ppp and then pppp are as quiet as the opening Sostenuto. The score finishes on a single ff chord under a fermata: the quietest writing in the piece leads straight into its loudest chord, and nothing follows it.</p>',
      devices: ['decrescendo', 'texture change', 'fermata'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'The score’s last two systems show ppp and pppp chords and a final ff chord with a fermata. The analysis finds the boundary at 2:44 (strength 0.66) with attack density falling from 4.2 to 2.0 per second and level to −21.9 dB at 2:45, then the loudest window of the closing minute at 2:55.',
    },
  ],
};
