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
  "intro": "Ferenc Fricsay conducts Ravel’s <i>Boléro</i>, in which a snare drum repeats a two-bar rhythm throughout while a tune first played by the flute passes to more and more of the orchestra until the full orchestra plays it. Near the end the music modulates once, to E major.",
  "sections": [
    { "t": 0, "label": "A · Snare drum, flute, clarinet", "m": "A", "mNote": "The first theme passes between two solo woodwinds." },
    { "t": 100, "label": "B · Second tune, bassoon and small clarinet", "m": "B", "mNote": "The second tune rises higher and falls lower than the first." },
    { "t": 190, "label": "A′ · Oboe d’amore, then further soloists", "m": "A′", "mNote": "Muted trumpet and saxophones follow the oboe d’amore" },
    { "t": 360, "label": "A′ · Horn, celesta and piccolos", "m": "A′", "mNote": "Several instruments combine to play one melodic line" },
    { "t": 525, "label": "A″ · Violins take up the tune", "m": "A″", "mNote": "The strings move from accompaniment to the melody." },
    { "t": 690, "label": "A″ · The two tunes, full orchestra", "m": "A″", "mNote": "Brass, winds and strings share the last statements." },
    { "t": 770, "label": "C · Eight bars in E major", "m": "C", "mNote": "The bass leaves its C-major circuit." },
    { "t": 788, "label": "Coda · Trombone glissandi, C major", "m": "Coda", "mNote": "Cymbals, bass drum and tam-tam reinforce the ending." }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Opening, snare drum and flute",
      "text": "The snare drum starts quietly over plucked strings. A flute plays the first tune, which moves around the notes of C major. Beneath it the bass alternates C and G, and these two notes continue through nearly the whole piece.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score (1929), opening and first flute statement. The scoring and bass pattern are described at https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "t": 80, "kind": "world", "title": "First performance, Paris Opéra, 1928",
      "text": "Boléro was first performed at the Paris Opéra on 22 November 1928. Ida Rubinstein danced on a tavern table while men gathered around her, in choreography by Bronislava Nijinska.",
      "basis": "documented", "precision": "passage",
      "evidence": "Première date, performers and the scenario printed in the first programme: https://en.wikipedia.org/wiki/Boléro. Peter Laki also describes the staging at https://www.clevelandorchestra.com/posts/ravels-bolero."
    },
    {
      "t": 100, "kind": "music", "title": "Second theme, bassoon",
      "text": "A bassoon plays the second theme first, high in its range. The theme spans two octaves and adds flattened notes over the same C and G in the bass. The E♭ clarinet plays it next.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, third and fourth melody statements; instrumental sequence and the two-octave span: https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "t": 190, "kind": "music", "title": "First theme, oboe d’amore",
      "text": "The first tune returns on oboe d’amore, a lower-pitched relative of the oboe. Its long phrases sit over the same clipped accompaniment. In the next statement a muted trumpet plays the tune with a flute an octave above.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, fifth and sixth statements. The oboe d’amore and trumpet–flute pairing are described by Peter Laki: https://www.clevelandorchestra.com/posts/ravels-bolero."
    },
    {
      "t": 360, "kind": "music", "title": "Horn, celesta and two piccolos",
      "text": "A horn plays the tune with celesta and two piccolos above it. The horn stays in C while the piccolos double the tune in E and G, on pitches that correspond to upper harmonics of the horn’s line.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, ninth statement. The horn, celesta and piccolo parts and their pitches are described at https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "t": 447, "kind": "music", "title": "Trombone solo, second tune",
      "text": "A solo trombone plays the second tune in its high register, sliding between notes across the long phrase. Underneath, the drummer continues the same two-bar rhythm.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, eleventh statement; the high trombone solo is described by Peter Laki: https://www.clevelandorchestra.com/posts/ravels-bolero."
    },
    {
      "t": 525, "kind": "form", "title": "First violins take the melody",
      "text": "The first violins join the woodwinds in the melody. Until this point the strings have played pizzicato or repeated the accompaniment. In the next statement the second violins also take up the tune.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, thirteenth and fourteenth statements; scoring sequence: https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "t": 596, "kind": "world", "title": "Interview, London Evening Standard, 1932",
      "text": "“It was a factory which inspired my <i>Boléro</i>,” Ravel told the <i>London Evening Standard</i> in 1932. “I would like it always to be played with a vast factory in the background.”",
      "basis": "documented", "precision": "passage",
      "evidence": "Ravel’s 1932 London Evening Standard interview, quoted by Peter Laki: https://www.clevelandorchestra.com/posts/ravels-bolero."
    },
    {
      "t": 770, "kind": "form", "title": "Modulation to E major",
      "text": "After the long stretch in C major, the orchestra moves to E major at rehearsal 18, with a change in the bass. The drum continues. After eight bars the music returns to C.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, rehearsal 18: eight-bar E-major passage before the return to C. https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "t": 788, "kind": "form", "title": "Final bars, return to C major",
      "text": "C major returns with trombone glissandos and full percussion. The bass drum, cymbals and tam-tam enter only in these last bars, and the whole orchestra plays at full strength as the dance is cut short.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, final six bars: percussion entries, trombone glissandos and final C-major chord. https://en.wikipedia.org/wiki/Boléro."
    }
  ],
  "transitions": [
    {
      "id": "handover-method", "title": "Horn, celesta and two piccolos",
      "from": "A′ · Oboe d’amore, then further soloists", "to": "A′ · Horn, celesta and piccolos",
      "at": { t: 360 }, "span": [347, 379],
      "how": "<p>The snare rhythm and the C-and-G bass continue through the join. Horn, celesta and two piccolos play the first melody together. The horn plays it in C. The piccolos play it in E and in G, high above the horn. The celesta doubles the horn in octaves.</p>",
      "devices": ["orchestration change", "motivic link", "tonic pedal"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score (1929), ninth statement; instrumental doubling described at https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "id": "into-e-major", "title": "The bass leaves C",
      "from": "A″ · The two tunes, full orchestra", "to": "C · Eight bars in E major",
      "at": { t: 770 }, "span": [758, 785],
      "how": "<p>The bass leaves C and the orchestra moves directly into E major, with E–G♯–B in place of C–E–G. The snare drum continues its two-bar rhythm and the metre stays in three. The new key lasts eight bars.</p>",
      "devices": ["direct modulation", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, rehearsal 18; the E-major excursion is described at https://en.wikipedia.org/wiki/Boléro."
    },
    {
      "id": "into-collapse", "title": "Return to C major with trombone slides",
      "from": "C · Eight bars in E major", "to": "Coda · Trombone glissandi, C major",
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
      { t: 0, playing: ['percussion', 'violas', 'cellos'], lead: ['percussion'], note: 'The snare drum begins above plucked violas and cellos. The flute has not yet entered.' },
      { t: 13, playing: ['flutes', 'percussion', 'violas', 'cellos'], lead: ['flutes'], note: 'A solo flute introduces the first tune over snare drum and plucked lower strings.' },
      { t: 56, playing: ['flutes', 'clarinets', 'percussion', 'violas', 'cellos', 'basses'], lead: ['clarinets'], note: 'The clarinet takes the flute’s tune. The flute moves into the repeated accompaniment.' },
      { t: 104, playing: ['flutes', 'bassoons', 'percussion', 'harp', 'violas', 'cellos', 'basses'], lead: ['bassoons'], note: 'The bassoon plays the second tune in its high register; the harp adds plucked chords.' },
      { t: 148, playing: ['flutes', 'e-flat-clarinet', 'percussion', 'harp', 'violas', 'cellos', 'basses'], lead: ['e-flat-clarinet'], note: 'The small E♭ clarinet repeats the second tune above the flute’s clipped notes and the plucked strings.' },
      { t: 190, playing: ['oboes', 'bassoons', 'percussion', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['oboes'], note: 'The oboe d’amore brings back the first tune while the bassoons take up the snare drum’s rhythm.' },
      { t: 232, playing: ['flutes', 'horns', 'trumpets', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['flutes', 'trumpets'], note: 'A flute plays the tune an octave above a muted trumpet. The horn keeps the repeated rhythm beneath them.' },
      { t: 282, playing: ['flutes', 'clarinets', 'saxophones', 'trumpets', 'percussion', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['saxophones'], note: 'The tenor saxophone plays the second tune; muted trumpet plays the short repeated notes.' },
      { t: 323, playing: ['oboes', 'cor-anglais', 'saxophones', 'trumpets', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['saxophones'], note: 'The saxophone solo moves higher. Ravel divided this statement between sopranino and soprano parts.' },
      { t: 362, playing: ['piccolo', 'flutes', 'bass-clarinet', 'bassoons', 'horns', 'percussion', 'harp', 'celesta', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'horns', 'celesta'], note: 'Horn, celesta and two piccolos play the tune together, sounding it at several pitches at once.' },
      { t: 404, playing: ['oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'horns', 'trumpets', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['oboes', 'cor-anglais', 'clarinets'], note: 'Oboe, oboe d’amore, cor anglais and clarinets share the tune. The inner strings add moving figures.' },
      { t: 447, playing: ['flutes', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'horns', 'trombones', 'percussion', 'harp', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['trombones'], note: 'A solo trombone plays the second tune high above the violas’ bowed rhythm.' },
      { t: 488, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'saxophones'], note: 'Woodwinds and tenor saxophone take over the tune; second violins bow the repeated accompaniment.' },
      { t: 530, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bassoons', 'contrabassoon', 'horns', 'timpani', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'oboes', 'clarinets', 'violins-1'], note: 'The first violins finally have the tune, doubled by woodwinds. Timpani strengthen the bass.' },
      { t: 570, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'saxophones', 'violins-1', 'violins-2'], note: 'Both violin sections now play the first tune, with winds and tenor saxophone.' },
      { t: 612, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'trumpets', 'violins-1', 'violins-2'], note: 'Trumpet joins violins and upper winds in the second tune. Low brass adds weight below.' },
      { t: 652, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'saxophones', 'trombones', 'violins-1', 'violins-2', 'violas', 'cellos'], note: 'Trombones, soprano saxophone and strings broaden the second tune. The horns keep the repeated rhythm going.' },
      { t: 692, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'saxophones', 'trumpets', 'violins-1'], note: 'The first tune returns on upper winds, saxophones, trumpets and first violins. Lower strings repeat their chords.' },
      { t: 733, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'saxophones', 'trumpets', 'trombones', 'violins-1'], note: 'The solo trombone plays the second tune again, now with upper winds, saxophones, trumpets and violins.' },
      { t: 770, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo', 'flutes', 'saxophones', 'trumpets', 'violins-1'], note: 'The melody modulates to E major. Horns and lower strings continue the repeated accompaniment beneath it.' },
      { t: 788, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'saxophones', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['trombones', 'trumpets', 'violins-1'], note: 'The trombones play slides across the dance. Cymbals, tam-tam and bass drum enter as the music crashes back into C major.' },
    ],
  },
};
