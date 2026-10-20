const scoreUrl = 'https://vmirror.imslp.org/files/imglnks/usimg/1/18/IMSLP472771-PMLP179431-PMLUS00370-Stravinsky_-_Petrushka_OrchScore.pdf';
const catalogueUrl = 'https://www.kcatalog.org/index.php/browse-chapters/kcatalog/179-k012-petrushka';
const contextUrl = 'https://resources.ircam.fr/en/work/petrouchka';

export default {
  id: 'stravinsky-petrushka-room',
  composer: 'stravinsky',
  order: 5,
  work: 'Petrushka (1911 original version)',
  movement: 'II. Petrushka’s room',
  set: { id: 'stravinsky-petrushka', title: 'Petrushka (1911 original version)', part: 2, of: 4, unit: 'tableaux' },
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
  intro: 'In the second tableau of Petrushka, heard here in the 1911 original version, Petrushka is kicked into his room and left alone with his fury. Two clarinets play his cry, sounding C major and F♯ major together.',
  sections: [
    { t: 0, label: 'A · Petrushka’s cry, clarinets and piano', m: 'A', mNote: 'Two clarinets play clashing lines; the piano then takes over.' },
    { t: 72, label: 'B · Adagietto, piano, flutes and xylophone', m: 'B' },
    { t: 166, label: 'C · Petrushka dances for the Ballerina', m: 'C', mNote: 'Allegro; he courts her with awkward leaps.' },
    { t: 188, label: 'D · Clarinet cadenza, piano arpeggios', m: 'D', mNote: 'Clarinet cadenza over piano arpeggios after the Ballerina leaves.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'C major and F♯ major clarinets', text: 'A foot kicks Petrushka through the door. Two clarinets play arpeggios on C major and F♯ major together for his cry. The piano takes up the figure and runs it up and down the keyboard.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe full score, plate R.M.V. 127, pp. 63–65, rehearsals 48–51; stage direction and paired clarinet arpeggios. ${scoreUrl}` },
    { t: 35, kind: 'world', title: 'Scenery of the second tableau', text: 'Petrushka’s room has black cardboard walls painted with stars and a crescent moon. A portrait of the magician hangs above the hole the puppet punches in the wall.', basis: 'documented', precision: 'passage', evidence: `The second tableau’s original scenery and action, transcribed in Helmut Kirchmeyer’s catalogue, K012, “Summary”. ${catalogueUrl}` },
    { t: 72, kind: 'form', title: 'Adagietto, rehearsal 52', text: 'The loud outburst stops. A piano run climbs into the <i>Adagietto</i>, where flutes repeat soft short figures and the xylophone plays with the piano’s high notes. Brass and strings rest.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, p. 67, rehearsal 52: piano quasi glissando, Adagietto, high woodwinds and xylophone; brass and strings rest. ${scoreUrl}` },
    { t: 105, kind: 'life', title: 'Origin of the second tableau', text: 'Stravinsky wrote music for this unhappy puppet at the piano before the fairground scenes existed. By his own account, the piece he played to Diaghilev became the second tableau of <i>Petrushka</i>, and the rest of the ballet was built around it.', basis: 'documented', precision: 'passage', evidence: `Stravinsky’s account identifies the music played to Diaghilev as the future second tableau; reproduced by IRCAM. ${contextUrl}` },
    { t: 166, kind: 'form', title: 'Entrance of the Ballerina', text: 'The Ballerina enters, and Petrushka tries to impress her. At <i>Allegro</i>, piano runs alternate with short wind phrases, and the metre changes from bar to bar. In the scenario his leaps alarm her, and she leaves.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 69–73, rehearsals 55–58: Ballerina’s entrance, Allegro and alternating metres. The scenario describes her alarm and departure. ${scoreUrl} ${catalogueUrl}` },
    { t: 245, kind: 'music', title: 'Clarinet cadenza, rehearsal 61', text: 'The two clarinets bring back Petrushka’s cry in a slow cadenza. C major and F♯ major still sound together. The curtain closes on the same pair of chords that is associated with him at the beginning.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, p. 77, rehearsal 61: paired clarinet cadenza before the curtain passage. ${scoreUrl}` },
  ],
  transitions: [
    { id: 'into-lament', title: 'Piano run into the Adagietto', from: 'A · Petrushka’s cry, clarinets and piano', to: 'B · Adagietto, piano, flutes and xylophone', at: { t: 72 }, span: [60, 88], how: '<p>A held orchestral chord breaks off at a pause. At rehearsal 52 the piano plays a soft, rising run, close to a glissando, into the <i>Adagietto</i>. Flutes repeat a rocking figure above the piano’s low notes, and clarinets and xylophone add short taps. Brass and strings rest.</p>', devices: ['fermata', 'tempo change', 'texture change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, p. 67, rehearsal 52. ${scoreUrl}` },
    { id: 'into-visit', title: 'Flute and piano music to <i>Allegro</i>', from: 'B · Adagietto, piano, flutes and xylophone', to: 'C · Petrushka dances for the Ballerina', at: { t: 166 }, span: [155, 180], how: '<p>At rehearsals 55–56 (Édition Russe score, pp. 69–70) the music for flute and piano is followed by <i>Allegro</i>. Bassoons and oboes play repeated notes and the piano plays arpeggios. Bars of two crotchets alternate with bars of three. The strings move between pizzicato and arco while Petrushka dances.</p>', devices: ['tempo change', 'metre change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 69–70, rehearsals 55–56. ${scoreUrl}` },
    { id: 'into-despair', title: 'Clarinet cadenza after the dance', from: 'C · Petrushka dances for the Ballerina', to: 'D · Clarinet cadenza, piano arpeggios', at: { t: 188 }, span: [176, 205], how: '<p>The dance stops. A solo clarinet extends its cadenza, marked <i>molto ritardando</i> and <i>lamentoso assai</i>, over held notes in the cellos. The piano then plays rushing arpeggios, and a call on the cor anglais follows.</p>', devices: ['cadenza', 'tempo change', 'texture change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 73–74, after rehearsal 58. ${scoreUrl}` },
  ],
  orchestra: {
    ensemble: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'horns', 'cornets', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'piano', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: { title: 'Stravinsky, Petrushka, 1911 orchestration; Édition Russe plate R.M.V. 127, Dover reprint', url: scoreUrl, locator: 'Printed pp. 63–77, rehearsals 48–61. Public-domain score in the US, not the EU. Passage timings are provisional, guided by cache/analysis/stravinsky-petrushka-room.txt. Xylophone is grouped under percussion; active groups describe a passage, not every simultaneous note.' },
    timeline: [
      { t: 0, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'cornets', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piano', 'clarinets'], note: 'After the opening ejection, Petrushka’s paired clarinets and piano enter.', evidence: 'Score pp. 63–64; opening active sound, with reduced level through 0:10–0:40.' },
      { t: 30, playing: ['clarinets', 'bassoons', 'trumpets', 'piano', 'violins-1'], lead: ['clarinets', 'piano'], note: 'Exposed clarinet figures and piano arpeggios carry the puppet’s complaint.', evidence: 'Score p. 64, rehearsal 49; boundary at 0:30, before the growth in activity at 0:45.' },
      { t: 60, playing: ['flutes', 'oboes', 'cor-anglais', 'clarinets', 'bassoons', 'horns', 'cornets', 'trumpets', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos'], lead: ['piano', 'clarinets'], note: 'The Furioso gives the complaint to a larger body of wind, brass and strings.', evidence: 'Score pp. 65–67, rehearsal 51; crest at 1:00–1:05 and boundary at 1:12.' },
      { t: 72, playing: ['piccolo', 'flutes', 'clarinets', 'percussion', 'piano'], lead: ['piano', 'flutes'], note: 'Adagietto reduces the sound to piano, high winds and xylophone.', evidence: 'Score p. 67, rehearsal 52; 1:12 boundary and low relative level at 1:15–1:30.' },
      { t: 116, playing: ['flutes', 'cor-anglais', 'bass-clarinet', 'bassoons', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'basses'], lead: ['flutes', 'piano'], note: 'Andantino and the following visit preparation place a quieter line over the piano.', evidence: 'Score pp. 68–69, rehearsals 53–55; 1:56 boundary, before the changed balance at 2:18. Groups vary within the passage.' },
      { t: 166, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'cornets', 'trumpets', 'percussion', 'piano', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piano', 'flutes', 'clarinets'], note: 'The visit’s Allegro spreads animated gestures across piano, winds, brass and strings.', evidence: 'Score pp. 70–73, rehearsals 56–58; 2:46 change, attack density 4.4/s at 2:45, and increasing level towards 3:00. Combinations change within the passage.' },
      { t: 188, playing: ['cor-anglais', 'clarinets', 'harp', 'piano', 'violins-1'], lead: ['piano', 'cor-anglais'], note: 'After the visit, piano and short wind gestures begin the final complaint.', evidence: 'Score pp. 73–74, rehearsals 58–59; quiet interval at 3:10–3:15 after the 3:08 boundary.' },
      { t: 244, playing: ['clarinets', 'bassoons', 'horns', 'cornets', 'trumpets', 'timpani', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['clarinets'], note: 'The last withdrawal includes the clarinets’ slow cadenza before the curtain passage.', evidence: 'Score p. 77, rehearsal 61; relative-level retreat after 3:55 and boundary at 4:04. The list covers the changing closing combinations, not a continuous tutti.' },
    ],
  },
};
