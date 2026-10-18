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
  intro: 'Behind the puppet theatre, Petrushka’s music alternates violent gestures with exposed piano and wind lines. Two clarinets make the famous C-major/F♯-major clash sound like one character unable to settle into a single harmonic identity.',
  question: 'How do exposed instrumental lines change our sense of the puppet heard dancing with the others?',
  sections: [
    { t: 0, label: 'Cries and curses', m: 'A', mNote: 'opposed triads and piano figuration expand into orchestral outbursts' },
    { t: 72, label: 'An inward lament', m: 'B', mNote: 'lighter wind and piano writing replaces the preceding weight' },
    { t: 138, label: 'The Ballerina’s visit', m: 'C', mNote: 'gentler gestures lead into an awkward animated display' },
    { t: 188, label: 'Abandonment and despair', m: 'D', mNote: 'fragmented gestures grow towards another orchestral cry' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Two triads, one character', text: 'Petrushka’s signature sound sets C major against F♯ major. The two clarinet lines turn those familiar triads into an abrasive combined figure; the piano takes up the conflict rather than resolving it into one ordinary key.', basis: 'score-proportion', precision: 'passage', evidence: `Score pp. 63–65, rehearsals 48–51, supplies the paired clarinets, piano and opposed triads. The report’s first quiet stretch contains prominent C, C♯, F♯ and G, then gains activity at 0:45–1:05. The cue describes the opening sequence, not its first clarinet note. ${scoreUrl}` },
    { t: 35, kind: 'world', title: 'A room made of cardboard', text: 'The original scenario gives Petrushka a black cardboard room painted with stars and a crescent moon. A portrait of the Charlatan hangs on the wall. His prison belongs visibly to a puppet theatre even while the music gives him human distress.', basis: 'documented', precision: 'passage', evidence: `Kirchmeyer, Summary, describes the second tableau’s scenery and the Charlatan’s portrait. ${catalogueUrl}` },
    { t: 70, kind: 'form', title: 'After the outburst', text: 'The early orchestral cry collapses into much more exposed writing. In this inward passage, piano and high winds leave space around their gestures; compare the change of texture with the force of the preceding tutti.', basis: 'score-proportion', precision: 'passage', evidence: `Score p. 67 moves from Furioso into Adagietto at rehearsal 52. The 1:12 boundary follows the 1:00–1:05 crest, with relative level falling to −24.6 dB at 1:15. This is a passage placement. ${scoreUrl}` },
    { t: 105, kind: 'life', title: 'The ballet’s first nucleus', text: 'In Stravinsky’s retrospective account, the music he played to Diaghilev became the second tableau. The idea of the puppet’s struggle therefore preceded the completed fairground setting: the piano was central before Petrushka became a danced role.', basis: 'documented', precision: 'passage', evidence: `IRCAM quotes Stravinsky identifying the piece played to Diaghilev as the future second tableau. ${contextUrl}` },
    { t: 140, kind: 'listen', title: 'Tenderness and awkward display', text: 'Through the visit sequence, compare the more gently shaped flute-and-piano writing with the animated gestures that follow. Petrushka’s attempt at courtship does not acquire the smooth continuity of a conventional ballet duet.', basis: 'score-proportion', precision: 'passage', evidence: `Score pp. 68–70 moves from Andantino through the Ballerina’s entrance to Allegro. Changes at 1:56 and 2:18 precede the rise at 2:45–3:00. The broad sequence is located; the Ballerina’s first step is not timed. ${scoreUrl}` },
    { t: 175, kind: 'world', title: 'Nijinsky’s puppet role', text: 'Vaslav Nijinsky danced Petrushka at the Paris premiere on 13 June 1911; Tamara Karsavina was the Ballerina. Michel Fokine supplied the choreography, while Alexandre Benois designed the sets and costumes as well as helping devise the scenario.', basis: 'documented', precision: 'passage', evidence: `IRCAM’s work record gives the premiere date and production team; Kirchmeyer documents Benois’s scenario collaboration. ${contextUrl} ${catalogueUrl}` },
    { t: 210, kind: 'music', title: 'Fragments gather force again', text: 'After the visit, broken gestures begin to gather orchestral force again. Listen to the distance between quiet fragments and the later outburst: the scene repeatedly changes the size of Petrushka’s musical voice.', basis: 'audio-feature', precision: 'passage', evidence: 'cache/analysis/stravinsky-petrushka-room.txt: the 3:08 change leads to very low relative levels at 3:10–3:15, followed by a rise through 3:35–3:45. Rehearsals 59–61 supply the final despair sequence: https://www.kcatalog.org/index.php/browse-chapters/kcatalog/179-k012-petrushka.' },
    { t: 245, kind: 'listen', title: 'No stable reconciliation', text: 'The closing sequence withdraws from its outburst without giving Petrushka a comfortable harmonic reconciliation. The score recalls the paired clarinet gesture before the curtain music; carry that unresolved identity into the contrasting room of his rival.', basis: 'score-proportion', precision: 'passage', evidence: `Score p. 77, rehearsal 61, includes a slow clarinet cadenza and curtain passage. Relative level retreats after 3:55, with a boundary at 4:04 and a darker spectral balance at 4:20–4:25. No final chord or drumstroke is aligned. ${scoreUrl}` },
  ],
  transitions: [
    { id: 'into-lament', title: 'The orchestra releases its grip', from: 'Cries and curses', to: 'An inward lament', at: { t: 72 }, span: [60, 88], how: '<p>The Furioso reaches held orchestral gestures and a pause; a piano glissando leads into Adagietto. Piano, high winds and xylophone replace the earlier weight of brass and strings. The opposing harmonic materials have not been reconciled: the sudden reduction in texture allows them to sound exposed rather than massed.</p>', devices: ['fermata', 'tempo change', 'texture change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Score p. 67, rehearsal 52. The 1:12 measured boundary separates the crest at 1:00–1:05 from the low 1:15–1:30 interval. Piano glissando and instrumental assignments come from the score, not the audio features. ${scoreUrl}` },
    { id: 'into-visit', title: 'A gentler line invites another character', from: 'An inward lament', to: 'The Ballerina’s visit', at: { t: 138 }, span: [125, 156], how: '<p>Andantino gives the flute a lamenting line above piano, then broadens towards the Ballerina’s entrance. The following Allegro replaces that continuity with sharply separated gestures and changing orchestral combinations. The visit is therefore framed by a change in pace and articulation, not by a cadence establishing a secure new home key.</p>', devices: ['tempo change', 'texture change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Score pp. 68–70, rehearsals 53–56. The 2:18 boundary changes spectral balance after the darker 1:55–2:15 interval; the animated display builds later, around 2:45. The join represents the visit sequence, not an exact stage entrance. ${scoreUrl}` },
    { id: 'into-despair', title: 'Courtship breaks back into isolated gestures', from: 'The Ballerina’s visit', to: 'Abandonment and despair', at: { t: 188 }, span: [176, 205], how: '<p>The Ballerina leaves, and Petrushka’s music loses its temporary public display. Piano figures and short wind calls separate before the orchestral forces gather again. Alternations of movement and hesitation make the join a broken continuation of his complaint, rather than the start of an unrelated slow movement.</p>', devices: ['texture change', 'orchestration change', 'tempo change', 'motivic link'], basis: 'score-proportion', precision: 'passage', evidence: `Score pp. 73–77, rehearsals 58–61. The report’s 3:08 change and quiet 3:10–3:15 interval place the withdrawal; the later crest is at 3:45–3:55. This is not a bar alignment of the departure. ${scoreUrl}` },
  ],
  orchestra: {
    ensemble: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'horns', 'cornets', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'piano', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: { title: 'Stravinsky, Petrushka, 1911 orchestration; Édition Russe plate R.M.V. 127, Dover reprint', url: scoreUrl, locator: 'Printed pp. 63–77, rehearsals 48–61. Public-domain score in the US, not the EU. Passage timings are provisional, guided by cache/analysis/stravinsky-petrushka-room.txt. Xylophone is grouped under percussion; active groups describe a passage, not every simultaneous note.' },
    timeline: [
      { t: 0, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'cornets', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piano', 'clarinets'], note: 'The opening ejection gives way to Petrushka’s paired clarinets and piano.', evidence: 'Score pp. 63–64; opening active sound, with reduced level through 0:10–0:40.' },
      { t: 30, playing: ['clarinets', 'bassoons', 'trumpets', 'piano', 'violins-1'], lead: ['clarinets', 'piano'], note: 'Exposed clarinet figures and piano arpeggios carry the puppet’s complaint.', evidence: 'Score p. 64, rehearsal 49; boundary at 0:30, before the growth in activity at 0:45.' },
      { t: 60, playing: ['flutes', 'oboes', 'cor-anglais', 'clarinets', 'bassoons', 'horns', 'cornets', 'trumpets', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos'], lead: ['piano', 'clarinets'], note: 'The Furioso spreads the complaint through a larger wind, brass and string texture.', evidence: 'Score pp. 65–67, rehearsal 51; crest at 1:00–1:05 and boundary at 1:12.' },
      { t: 72, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'percussion', 'piano'], lead: ['piano', 'flutes'], note: 'Adagietto reduces the sound to piano, high winds and xylophone.', evidence: 'Score p. 67, rehearsal 52; 1:12 boundary and low relative level at 1:15–1:30.' },
      { t: 116, playing: ['flutes', 'cor-anglais', 'bass-clarinet', 'bassoons', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'basses'], lead: ['flutes', 'piano'], note: 'Andantino and the following visit preparation place a gentler line over the piano.', evidence: 'Score pp. 68–69, rehearsals 53–55; 1:56 boundary, before the changed balance at 2:18. Groups vary within the passage.' },
      { t: 188, playing: ['cor-anglais', 'clarinets', 'harp', 'piano', 'violins-1'], lead: ['piano', 'cor-anglais'], note: 'After the visit, piano and short wind gestures begin the final complaint.', evidence: 'Score pp. 73–74, rehearsals 58–59; quiet interval at 3:10–3:15 after the 3:08 boundary.' },
      { t: 244, playing: ['clarinets', 'bassoons', 'horns', 'cornets', 'trumpets', 'timpani', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['clarinets'], note: 'The last withdrawal includes the clarinets’ slow cadenza before the curtain passage.', evidence: 'Score p. 77, rehearsal 61; relative-level retreat after 3:55 and boundary at 4:04. The list covers the changing closing combinations, not a continuous tutti.' },
    ],
  },
};
