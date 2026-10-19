const scoreUrl = 'https://vmirror.imslp.org/files/imglnks/usimg/1/18/IMSLP472771-PMLP179431-PMLUS00370-Stravinsky_-_Petrushka_OrchScore.pdf';
const catalogueUrl = 'https://www.kcatalog.org/index.php/browse-chapters/kcatalog/179-k012-petrushka';
const contextUrl = 'https://resources.ircam.fr/en/work/petrouchka';

export default {
  id: 'stravinsky-petrushka-room',
  composer: 'stravinsky',
  order: 5,
  work: 'Petrushka (1911 original version)',
  movement: 'II. Petrushka’s room',
  set: { id: 'stravinsky-petrushka', title: 'Petrushka (1911 original version)', part: 2, of: 4 },
  year: '1910–11',
  key: '',
  forces: 'Orchestra with piano, celesta and two harps',
  performers: 'Orchestre de la Suisse Romande; Ernest Ansermet',
  recorded: '1957',
  source: {
    archive: {
      item: 'lp_petrushka-complete-ballet-original-editio_igor-stravinsky-lorchestre-de-la-suisse-ro',
      file: "disc1/01.02. 2nd Tableau: In Petrushko's Room.mp3",
    },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1958,
      evidence: 'London CS 6009 is pictured as NOW AVAILABLE in the Grosse Pointe News, 6 November 1958, p. 7, London/Pecar Electronics advertisement: https://digitize.gp.lib.mi.us/history/newspapers/grossePointeNews/year_ranges/1950s/1958/pdf/1958-11-06.pdf . The inspected sleeve and Archive carrier metadata identify this Ansermet/OSR Original Edition. First lawful publication anywhere before 1963; territorial EU recording basis only, US sound-recording status not established.',
    },
  },
  intro: 'Petrushka is kicked into his room and left alone with his fury. Two clarinets give him his unforgettable cry: C major and F♯ major, jammed together.',
  sections: [
    { t: 0, label: 'A · Petrushka’s cry', m: 'A', mNote: 'Two clarinets clash; the piano takes up the quarrel' },
    { t: 72, label: 'B · Piano, flutes and xylophone', m: 'B', mNote: 'Adagietto leaves the puppet with a small, brittle band' },
    { t: 166, label: 'C · Petrushka dances for the Ballerina', m: 'C', mNote: 'Allegro turns his courtship into awkward leaps' },
    { t: 188, label: 'D · The Ballerina leaves', m: 'D', mNote: 'Clarinet cadenza and piano arpeggios renew his complaint' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Two keys, one cry', text: 'A foot kicks Petrushka through the door. His cry comes from two clarinets playing the notes of C major and F♯ major together. The piano catches the quarrel and sends it racing up and down the keyboard.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe full score, plate R.M.V. 127, pp. 63–65, rehearsals 48–51; stage direction and paired clarinet arpeggios. ${scoreUrl}` },
    { t: 35, kind: 'world', title: 'Stars on cardboard', text: 'Petrushka’s room has black cardboard walls painted with stars and a crescent moon. A portrait of the magician hangs above the hole the puppet punches in the wall. Even in his cell, his owner watches him.', basis: 'documented', precision: 'passage', evidence: `The second tableau’s original scenery and action, transcribed in Helmut Kirchmeyer’s catalogue, K012, “Summary”. ${catalogueUrl}` },
    { t: 72, kind: 'form', title: 'A brittle little band', text: 'The furious outburst stops. A piano run climbs into <i>Adagietto</i>, where flutes repeat soft little figures and xylophone taps punctuate the piano’s high notes. The brass and strings leave Petrushka to this small, uncomfortable company.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, p. 67, rehearsal 52: piano quasi glissando, Adagietto, high woodwinds and xylophone; brass and strings rest. ${scoreUrl}` },
    { t: 105, kind: 'life', title: 'The ballet starts here', text: 'Before there is a fairground, Stravinsky has this unhappy puppet at the piano. The piece he plays to Diaghilev becomes the second tableau of <i>Petrushka</i>. The whole bustling ballet grows around a creature shut in a room.', basis: 'documented', precision: 'passage', evidence: `Stravinsky’s account identifies the music played to Diaghilev as the future second tableau; reproduced by IRCAM. ${contextUrl}` },
    { t: 166, kind: 'form', title: 'An awkward courtship', text: 'The Ballerina visits, and Petrushka tries to impress her. At <i>Allegro</i>, piano runs tumble between clipped wind phrases; the bars keep switching length. His eager leaps frighten her away.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 69–73, rehearsals 55–58: Ballerina’s entrance, Allegro and alternating metres. The scenario describes her alarm and departure. ${scoreUrl} ${catalogueUrl}` },
    { t: 245, kind: 'music', title: 'The clarinets remain', text: 'The two clarinets bring back Petrushka’s cry in a slow cadenza. C major and F♯ major still rub against each other. The curtain closes on the same impossible pair of chords that speaks for him at the beginning.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, p. 77, rehearsal 61: paired clarinet cadenza before the curtain passage. ${scoreUrl}` },
  ],
  transitions: [
    { id: 'into-lament', title: 'A piano run after the shout', from: 'A · Petrushka’s cry', to: 'B · Piano, flutes and xylophone', at: { t: 72 }, span: [60, 88], how: '<p>A held orchestral chord breaks off at a pause. The piano climbs through a soft, glissando-like run into <i>Adagietto</i>. Flutes repeat a rocking figure above the piano’s low notes, while clarinets and xylophone add short taps. The brass and strings fall silent.</p>', devices: ['fermata', 'tempo change', 'texture change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, p. 67, rehearsal 52. ${scoreUrl}` },
    { id: 'into-visit', title: 'Petrushka starts showing off', from: 'B · Piano, flutes and xylophone', to: 'C · Petrushka dances for the Ballerina', at: { t: 166 }, span: [155, 180], how: '<p>The gentler flute-and-piano music turns into <i>Allegro</i>. Bassoons and oboes jab at repeated notes while the piano throws out arpeggios. Bars of two and three crotchets alternate; the strings switch between plucking and bowing as Petrushka dances.</p>', devices: ['tempo change', 'metre change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 69–70, rehearsals 55–56. ${scoreUrl}` },
    { id: 'into-despair', title: 'A clarinet cries after her', from: 'C · Petrushka dances for the Ballerina', to: 'D · The Ballerina leaves', at: { t: 188 }, span: [176, 205], how: '<p>The dance breaks off. A solo clarinet stretches its cadenza into a slow lament, marked <i>molto ritardando</i> and <i>lamentoso assai</i>. Quiet cellos hold beneath it; the piano answers with rushing arpeggios, followed by a cor anglais call.</p>', devices: ['cadenza', 'tempo change', 'texture change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 73–74, after rehearsal 58. ${scoreUrl}` },
  ],
  orchestra: {
    ensemble: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'horns', 'cornets', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'piano', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: { title: 'Stravinsky, Petrushka, 1911 orchestration; Édition Russe plate R.M.V. 127, Dover reprint', url: scoreUrl, locator: 'Printed pp. 63–77, rehearsals 48–61. Public-domain score in the US, not the EU. Passage timings are provisional, guided by cache/analysis/stravinsky-petrushka-room.txt. Xylophone is grouped under percussion; active groups describe a passage, not every simultaneous note.' },
    timeline: [
      { t: 0, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'cornets', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piano', 'clarinets'], note: 'The opening ejection gives way to Petrushka’s paired clarinets and piano.', evidence: 'Score pp. 63–64; opening active sound, with reduced level through 0:10–0:40.' },
      { t: 30, playing: ['clarinets', 'bassoons', 'trumpets', 'piano', 'violins-1'], lead: ['clarinets', 'piano'], note: 'Exposed clarinet figures and piano arpeggios carry the puppet’s complaint.', evidence: 'Score p. 64, rehearsal 49; boundary at 0:30, before the growth in activity at 0:45.' },
      { t: 60, playing: ['flutes', 'oboes', 'cor-anglais', 'clarinets', 'bassoons', 'horns', 'cornets', 'trumpets', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos'], lead: ['piano', 'clarinets'], note: 'The Furioso spreads the complaint through a larger wind, brass and string texture.', evidence: 'Score pp. 65–67, rehearsal 51; crest at 1:00–1:05 and boundary at 1:12.' },
      { t: 72, playing: ['piccolo', 'flutes', 'clarinets', 'percussion', 'piano'], lead: ['piano', 'flutes'], note: 'Adagietto reduces the sound to piano, high winds and xylophone.', evidence: 'Score p. 67, rehearsal 52; 1:12 boundary and low relative level at 1:15–1:30.' },
      { t: 116, playing: ['flutes', 'cor-anglais', 'bass-clarinet', 'bassoons', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'basses'], lead: ['flutes', 'piano'], note: 'Andantino and the following visit preparation place a gentler line over the piano.', evidence: 'Score pp. 68–69, rehearsals 53–55; 1:56 boundary, before the changed balance at 2:18. Groups vary within the passage.' },
      { t: 166, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'cornets', 'trumpets', 'percussion', 'piano', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piano', 'flutes', 'clarinets'], note: 'The visit’s Allegro spreads animated gestures across piano, winds, brass and strings.', evidence: 'Score pp. 70–73, rehearsals 56–58; 2:46 change, attack density 4.4/s at 2:45, and increasing level towards 3:00. Combinations change within the passage.' },
      { t: 188, playing: ['cor-anglais', 'clarinets', 'harp', 'piano', 'violins-1'], lead: ['piano', 'cor-anglais'], note: 'After the visit, piano and short wind gestures begin the final complaint.', evidence: 'Score pp. 73–74, rehearsals 58–59; quiet interval at 3:10–3:15 after the 3:08 boundary.' },
      { t: 244, playing: ['clarinets', 'bassoons', 'horns', 'cornets', 'trumpets', 'timpani', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['clarinets'], note: 'The last withdrawal includes the clarinets’ slow cadenza before the curtain passage.', evidence: 'Score p. 77, rehearsal 61; relative-level retreat after 3:55 and boundary at 4:04. The list covers the changing closing combinations, not a continuous tutti.' },
    ],
  },
};
