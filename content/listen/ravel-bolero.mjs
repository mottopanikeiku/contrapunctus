// Historical and scoring sources:
// https://www.clevelandorchestra.com/posts/ravels-bolero
// https://en.wikipedia.org/wiki/Bol%C3%A9ro
// https://www.montfortlamaury.fr/culture-tourisme/sites-et-monuments/la-maison-musee-de-maurice-ravel/?lang=en
// Commons gives 1959 in the filename but November 1956 in the description;
// the recording date is deliberately left blank.
export default {
  id: 'ravel-bolero',
  composer: 'ravel',
  order: 1,
  work: 'Boléro',
  movement: '',
  year: '1928',
  key: 'C major',
  forces: 'Orchestra',
  performers: 'Berlin Symphonic Orchestra, Ferenc Fricsay',
  recorded: '',
  source: { file: 'File:Bolero-Maurice Ravel-Berlin Symphonic Orchestra-Ferenc Fricsay-November 1959.ogg' },
  "intro": "A snare drum keeps its two-bar rhythm while a flute tune grows into a full orchestra. Ferenc Fricsay conducts Ravel’s extraordinary exercise in staying put, with its one startling escape into E major near the end.",
  "sections": [
    { "t": 0, "label": "A · Snare drum, flute, clarinet", "m": "A", "mNote": "The first tune passes between two solo woodwinds" },
    { "t": 100, "label": "B · Bassoon and small clarinet", "m": "B", "mNote": "The second tune reaches higher and falls further" },
    { "t": 190, "label": "A′ · Oboe d’amore, then more soloists", "m": "A′", "mNote": "Muted trumpet and saxophones follow the oboe d’amore" },
    { "t": 360, "label": "A′ · Horn, celesta and piccolos", "m": "A′", "mNote": "Several instruments combine to make one unfamiliar voice" },
    { "t": 525, "label": "A″ · Violins take up the tune", "m": "A″", "mNote": "The strings move from accompaniment into the melody" },
    { "t": 690, "label": "A″ · The two tunes, full orchestra", "m": "A″", "mNote": "Brass, winds and strings share the last statements" },
    { "t": 770, "label": "C · Eight bars in E major", "m": "C", "mNote": "The bass finally leaves its C-major circuit" },
    { "t": 788, "label": "Coda · Trombone slides and C major", "m": "Coda", "mNote": "Cymbals, bass drum and tam-tam reinforce the ending" }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "A drum and a flute",
      "text": "The snare drum starts quietly over plucked strings. A flute supplies the first tune, curling round the notes of C major. Beneath it, the bass alternates C and G. Those two notes will keep their place through almost the entire piece.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score (1929), opening and first flute statement. The scoring and bass pattern are described at https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "t": 80, "kind": "world", "title": "A dancer on a table",
      "text": "Paris Opéra, 22 November 1928: Ida Rubinstein dances on a tavern table while men gather around her. Bronislava Nijinska supplies the choreography. Ravel’s unbroken crescendo begins its life in the theatre.",
      "basis": "documented", "precision": "passage",
      "evidence": "Première date, performers and the scenario printed in the first programme: https://en.wikipedia.org/wiki/Boléro. Peter Laki also describes the staging at https://www.clevelandorchestra.com/posts/ravels-bolero."
    },
    {
      "t": 100, "kind": "music", "title": "The bassoon sings high",
      "text": "The second tune belongs first to a bassoon, uncomfortably high in its range. It stretches across two octaves and introduces flattened notes against the same C-and-G bass. The small E♭ clarinet takes the next turn.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, third and fourth melody statements; instrumental sequence and the two-octave span: https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "t": 190, "kind": "music", "title": "The oboe’s quieter cousin",
      "text": "The first tune returns on oboe d’amore, the lower-pitched cousin of the oboe. Its long phrases float over the same clipped accompaniment. Ravel’s next combination is stranger: muted trumpet with a flute an octave above.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, fifth and sixth statements. The oboe d’amore and trumpet–flute pairing are described by Peter Laki: https://www.clevelandorchestra.com/posts/ravels-bolero."
    },
    {
      "t": 360, "kind": "music", "title": "An instrument Ravel invents",
      "text": "A horn plays the tune with celesta and two piccolos above it. The piccolos trace it in E and G while the horn stays in C: separate instruments pick out the upper harmonics of a single, imaginary instrument.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, ninth statement. The horn, celesta and piccolo parts and their pitches are described at https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "t": 447, "kind": "music", "title": "The trombone steps forward",
      "text": "A solo trombone takes the second tune into its high register. Its sliding notes make the long phrase sound almost vocal. The drummer carries on underneath, still counting the same two bars.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, eleventh statement; the high trombone solo is described by Peter Laki: https://www.clevelandorchestra.com/posts/ravels-bolero."
    },
    {
      "t": 525, "kind": "form", "title": "The violins finally sing",
      "text": "The first violins join the melody with the woodwinds. For much of the piece the strings have been plucking or repeating the accompaniment; now the tune spreads across the desks. The second violins join it in the following statement.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, thirteenth and fourteenth statements; scoring sequence: https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "t": 596, "kind": "world", "title": "A factory behind the dancers",
      "text": "“It was a factory which inspired my <i>Boléro</i>,” Ravel tells the <i>London Evening Standard</i> in 1932. “I would like it always to be played with a vast factory in the background.” His preferred scenery has machinery behind the dancers.",
      "basis": "documented", "precision": "passage",
      "evidence": "Ravel’s 1932 London Evening Standard interview, quoted by Peter Laki: https://www.clevelandorchestra.com/posts/ravels-bolero."
    },
    {
      "t": 770, "kind": "form", "title": "Eight bars elsewhere",
      "text": "After all that C major, the orchestra breaks into E major. The drum keeps going. Eight bars are enough: the change in the bass makes the whole dance seem to have slipped sideways.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, rehearsal 18: eight-bar E-major passage before the return to C. https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "t": 788, "kind": "form", "title": "The dance breaks apart",
      "text": "C major returns through trombone glissandos and crashing percussion. The bass drum, cymbals and tam-tam have waited until these last bars. The orchestra cuts the dance short at full strength.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, final six bars: percussion entries, trombone glissandos and final C-major chord. https://en.wikipedia.org/wiki/Boléro."
    }
  ],
  "transitions": [
    {
      "id": "handover-method", "title": "The horn acquires upper voices",
      "from": "A′ · Oboe d’amore, then more soloists", "to": "A′ · Horn, celesta and piccolos",
      "at": { t: 360 }, "span": [347, 379],
      "how": "<p>The snare rhythm and C-and-G bass continue through the handover. Horn, celesta and two piccolos take the first melody together. The horn keeps it in C; the piccolos add E and G versions high above, while the celesta doubles the horn in octaves.</p>",
      "devices": ["orchestration change", "motivic link", "tonic pedal"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score (1929), ninth statement; instrumental doubling described at https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "id": "into-e-major", "title": "The bass leaves C",
      "from": "A″ · The two tunes, full orchestra", "to": "C · Eight bars in E major",
      "at": { t: 770 }, "span": [758, 785],
      "how": "<p>The bass abandons C and the orchestra moves directly into E major: E–G♯–B replaces C–E–G. The snare keeps its two-bar rhythm and the music stays in three beats. The new key lasts just eight bars.</p>",
      "devices": ["direct modulation", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, rehearsal 18; the E-major excursion is described at https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "id": "into-collapse", "title": "C major, with trombone slides",
      "from": "C · Eight bars in E major", "to": "Coda · Trombone slides and C major",
      "at": { t: 788 }, "span": [781, 800],
      "how": "<p>The orchestra returns to C as the trombones slide across the repeated rhythm. Bass drum, cymbals and tam-tam enter for the final six bars. A dissonant stack of B♭-minor and F-minor notes falls onto the last C-major chord.</p>",
      "devices": ["direct modulation", "orchestration change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, final six bars; closing chord sequence and percussion entries: https://en.wikipedia.org/wiki/Boléro."
    }
  ],
  orchestra: {
    ensemble: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'e-flat-clarinet', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'celesta', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: {
      title: 'Ravel, Boléro, full score (Durand, plate D. & F. 11,839)',
      url: 'https://commons.wikimedia.org/wiki/File:IMSLP01578-Ravel_-_Bolero_Full_Score_Durand_1929.pdf',
      locator: 'Opening, rehearsal figures 1–18 and final six bars. The oboe d’amore part shares the oboe row.',
    },
    timeline: [
      { t: 0, playing: ['percussion', 'violas', 'cellos'], lead: ['percussion'], note: 'The snare drum begins above plucked violas and cellos. The flute is still waiting.' },
      { t: 13, playing: ['flutes', 'percussion', 'violas', 'cellos'], lead: ['flutes'], note: 'A solo flute introduces the first tune over snare drum and plucked lower strings.' },
      { t: 56, playing: ['flutes', 'clarinets', 'percussion', 'violas', 'cellos', 'basses'], lead: ['clarinets'], note: 'The clarinet takes the flute’s tune. The flute moves into the repeated accompaniment.' },
      { t: 104, playing: ['flutes', 'bassoons', 'percussion', 'harp', 'violas', 'cellos', 'basses'], lead: ['bassoons'], note: 'The bassoon climbs high for the second tune; the harp adds plucked chords.' },
      { t: 148, playing: ['flutes', 'e-flat-clarinet', 'percussion', 'harp', 'violas', 'cellos', 'basses'], lead: ['e-flat-clarinet'], note: 'The small E♭ clarinet repeats the second tune above the flute’s clipped notes and the plucked strings.' },
      { t: 190, playing: ['oboes', 'bassoons', 'percussion', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['oboes'], note: 'Oboe d’amore brings back the first tune while the bassoons pick up the snare drum’s rhythm.' },
      { t: 232, playing: ['flutes', 'horns', 'trumpets', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['flutes', 'trumpets'], note: 'A flute plays the tune an octave above a muted trumpet. The horn keeps the repeated rhythm beneath them.' },
      { t: 282, playing: ['flutes', 'clarinets', 'saxophones', 'trumpets', 'percussion', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['saxophones'], note: 'The tenor saxophone sings the second tune; muted trumpet supplies the short repeated notes.' },
      { t: 323, playing: ['oboes', 'cor-anglais', 'saxophones', 'trumpets', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['saxophones'], note: 'The saxophone solo rises higher: Ravel divides this statement between sopranino and soprano parts.' },
      { t: 362, playing: ['piccolo', 'flutes', 'bass-clarinet', 'bassoons', 'horns', 'percussion', 'harp', 'celesta', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'horns', 'celesta'], note: 'Horn, celesta and two piccolos fuse into a strange new instrument, with the tune sounding at several pitches.' },
      { t: 404, playing: ['oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'horns', 'trumpets', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['oboes', 'cor-anglais', 'clarinets'], note: 'Oboe, oboe d’amore, cor anglais and clarinets share the tune. The inner strings add moving figures.' },
      { t: 447, playing: ['flutes', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'horns', 'trombones', 'percussion', 'harp', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['trombones'], note: 'A solo trombone carries the second tune high above the violas’ bowed rhythm.' },
      { t: 488, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'saxophones'], note: 'Woodwinds and tenor saxophone take over the tune; second violins bow the repeated accompaniment.' },
      { t: 530, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bassoons', 'contrabassoon', 'horns', 'timpani', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'oboes', 'clarinets', 'violins-1'], note: 'The first violins finally have the tune, doubled by woodwinds. Timpani strengthen the bass.' },
      { t: 570, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'saxophones', 'violins-1', 'violins-2'], note: 'Both violin sections now play the first tune, with winds and tenor saxophone.' },
      { t: 612, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'trumpets', 'violins-1', 'violins-2'], note: 'Trumpet joins violins and upper winds in the second tune. Low brass adds weight below.' },
      { t: 652, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'saxophones', 'trombones', 'violins-1', 'violins-2', 'violas', 'cellos'], note: 'Trombones, soprano saxophone and strings broaden the second tune. The horns keep the repeated rhythm going.' },
      { t: 692, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'saxophones', 'trumpets', 'violins-1'], note: 'The first tune returns on upper winds, saxophones, trumpets and first violins. Lower strings repeat their chords.' },
      { t: 733, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'saxophones', 'trumpets', 'trombones', 'violins-1'], note: 'The solo trombone joins the second tune again, now surrounded by upper winds, saxophones, trumpets and violins.' },
      { t: 770, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'saxophones', 'trumpets', 'violins-1'], note: 'The melody leaps into E major. Horns and lower strings keep the repeated accompaniment beneath it.' },
      { t: 788, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['trombones', 'trumpets', 'violins-1'], note: 'Trombone slides cut across the dance. Cymbals, tam-tam and bass drum join the crash back into C major.' },
    ],
  },
};
