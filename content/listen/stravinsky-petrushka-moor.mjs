const scoreUrl = 'https://vmirror.imslp.org/files/imglnks/usimg/1/18/IMSLP472771-PMLP179431-PMLUS00370-Stravinsky_-_Petrushka_OrchScore.pdf';
const catalogueUrl = 'https://www.kcatalog.org/index.php/browse-chapters/kcatalog/179-k012-petrushka';
const programmeUrl = 'https://geraldlarner.com/work/stravinsky-petrushka-1911';

export default {
  id: 'stravinsky-petrushka-moor',
  composer: 'stravinsky',
  order: 6,
  work: 'Petrushka (1911 original version)',
  movement: 'III. The Moor’s room',
  set: { id: 'stravinsky-petrushka', title: 'Petrushka (1911 original version)', part: 3, of: 4 },
  year: '1910–11',
  key: '',
  forces: 'Orchestra with piano, celesta and two harps',
  performers: 'Orchestre de la Suisse Romande; Ernest Ansermet',
  recorded: '1957',
  source: {
    archive: {
      item: 'lp_petrushka-complete-ballet-original-editio_igor-stravinsky-lorchestre-de-la-suisse-ro',
      file: "disc1/02.01. 3rd Tableau: In The Moor's Room.mp3",
    },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1958,
      evidence: 'London CS 6009 is pictured as NOW AVAILABLE in the Grosse Pointe News, 6 November 1958, p. 7, London/Pecar Electronics advertisement: https://digitize.gp.lib.mi.us/history/newspapers/grossePointeNews/year_ranges/1950s/1958/pdf/1958-11-06.pdf . The inspected sleeve and Archive carrier metadata identify this Ansermet/OSR Original Edition. First lawful publication anywhere before 1963; territorial EU recording basis only, US sound-recording status not established.',
    },
  },
  intro: 'The Ballerina courts Petrushka’s rival with a cornet solo and a pair of borrowed waltzes. Her partner dances in two while she dances in three; Stravinsky lets the mismatch stand.',
  sections: [
    { t: 0, label: 'A · Drums and fierce chords', m: 'A', mNote: 'Offstage drums lead to Feroce string and wind chords' },
    { t: 26, label: 'B · The Moor’s heavy tread', m: 'B', mNote: 'Low bassoons prepare clarinet and bass clarinet in octaves' },
    { t: 194, label: 'C · Cornet and military drum', m: 'C', mNote: 'The Ballerina performs her little solo' },
    { t: 235, label: 'D · Waltzes with mismatched steps', m: 'D', mNote: 'Lanner’s tunes meet a partner dancing in two' },
    { t: 384, label: 'E · Petrushka interrupts', m: 'E', mNote: 'Muted brass brings his cry into the room' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'A door into another room', text: 'Offstage drums separate the scenes. Wind chords and plucked strings break in, marked <i>Feroce stringendo</i> — fierce and pressing forward. The bowed strings then begin their heavy, swooping figures.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe full score, plate R.M.V. 127, p. 78, rehearsals 62–63; offstage drums, Feroce stringendo and Meno mosso, Pesante. ${scoreUrl}` },
    { t: 26, kind: 'form', title: 'The heavy tread', text: 'The pace slows to <i>Sostenuto</i>. Bassoons and tuba sound low in the orchestra; plucked strings and percussion establish a steady tread. The main tune belongs to clarinet and bass clarinet, doubling each other an octave apart.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 79–80, rehearsals 64–65. The note describes the preparation and ensuing dance. ${scoreUrl}` },
    { t: 72, kind: 'world', title: 'Palms painted on paper', text: 'Benois gives this puppet a low sofa, a magnificent robe and paper walls painted with palms and exotic fruit. He plays with a coconut. The ballet’s colonial caricature is written into the room as plainly as its luxury.', basis: 'documented', precision: 'passage', evidence: `The third tableau’s scenery and props are transcribed in Kirchmeyer, K012, “Summary”. The description of the caricature is our reading of that staging. ${catalogueUrl}` },
    { t: 194, kind: 'music', title: 'A cornet in her hands', text: 'The Ballerina makes her entrance carrying a toy brass instrument. Her dance uses just cornet and military drum: a nimble tune above little drum strokes. For a moment, this enormous orchestra becomes a band of two.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, p. 83, rehearsal 69, Dance of the Ballerina, “Cornet in Hand”; the opening is scored for solo cornet and military drum. ${scoreUrl}` },
    { t: 235, kind: 'form', title: 'A borrowed ballroom', text: 'The waltz begins with a solo bassoon accompaniment, marked <i>grottesco</i>. Cornet and flute take the melody. Stravinsky borrows the tunes from Joseph Lanner, bringing a little Viennese ballroom into the puppet theatre.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, p. 84, rehearsals 71–72; Lanner borrowings identified by Gerald Larner. ${scoreUrl} ${programmeUrl}` },
    { t: 288, kind: 'music', title: 'Three steps against two', text: 'The Ballerina’s waltz has three beats to the bar. Her partner keeps his heavy two-beat dance going underneath it. The cor anglais and contrabassoon join the lower strings in his tune, while her melody continues above.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 84–88, from rehearsal 72; Larner describes the Moor joining the waltz in duple time. ${scoreUrl} ${programmeUrl}` },
    { t: 384, kind: 'form', title: 'Petrushka at the door', text: 'The couple prick up their ears. Stopped horns and muted trumpets creep into the waltz; Petrushka’s cry grows among them. His entrance turns the dance into a quarrel.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 89–91, rehearsals 76–78: the couple listen, Petrushka appears, then the quarrel begins. ${scoreUrl}` },
    { t: 432, kind: 'world', title: 'Thrown out again', text: 'The Ballerina runs away from the fight. The Moor drives Petrushka out of his room, and the curtain falls. Beyond these cardboard walls, the fair carries on into the evening.', basis: 'documented', precision: 'passage', evidence: `Original scenario, end of the third tableau and opening of the fourth, transcribed in Kirchmeyer, K012. ${catalogueUrl}` },
  ],
  transitions: [
    { id: 'into-low-dance', title: 'Bassoons slow the tread', from: 'A · Drums and fierce chords', to: 'B · The Moor’s heavy tread', at: { t: 26 }, span: [15, 48], how: '<p>The fierce string figures subside into <i>Sostenuto</i>. Bassoons hold a chord while the tuba settles on a long low note. Timpani and muted strings prepare the repeating accompaniment; clarinet and bass clarinet then begin the Moor’s tune in octaves.</p>', devices: ['tempo change', 'texture change', 'register change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 78–79, rehearsals 62–65. ${scoreUrl}` },
    { id: 'into-ballerina-dance', title: 'A band of two', from: 'B · The Moor’s heavy tread', to: 'C · Cornet and military drum', at: { t: 194 }, span: [180, 211], how: '<p>The low accompaniment stops. At <i>Allegro</i>, the military drum sets off alone; the cornet joins it with the Ballerina’s tune. Bassoons, tuba and strings all rest while her little performance occupies the room.</p>', devices: ['orchestration change', 'texture change', 'register change', 'tempo change'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 82–83, rehearsals 68–69. ${scoreUrl}` },
    { id: 'into-waltz', title: 'Flute flourish, then a waltz', from: 'C · Cornet and military drum', to: 'D · Waltzes with mismatched steps', at: { t: 235 }, span: [222, 254], how: '<p>A brief <i>Appassionato</i> outburst in winds and strings ends with a descending flute flourish and a pause. The bassoon starts a lilting accompaniment in three, marked <i>Lento cantabile</i> and <i>grottesco</i>. Cornet and flute add the waltz tune, sweetly marked <i>sentimentalmente</i>.</p>', devices: ['cadenza', 'fermata', 'tempo change', 'metre change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 83–84, rehearsals 70–71. ${scoreUrl}` },
    { id: 'into-quarrel', title: 'The brass interrupts the couple', from: 'D · Waltzes with mismatched steps', to: 'E · Petrushka interrupts', at: { t: 384 }, span: [374, 403], how: '<p>At <i>Vivace</i>, the waltz thins to repeated viola chords and stopped horns. Muted trumpets and cornets bring back Petrushka’s cry, growing from pianissimo. The two dancers stop to hear him before he bursts into the room.</p>', devices: ['orchestration change', 'texture change', 'tempo change', 'motivic link'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, p. 89, rehearsals 76–77; the couple’s reaction precedes Petrushka’s appearance. ${scoreUrl}` },
  ],
  orchestra: {
    ensemble: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'horns', 'cornets', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: { title: 'Stravinsky, Petrushka, 1911 orchestration; Édition Russe plate R.M.V. 127, Dover reprint', url: scoreUrl, locator: 'Printed pp. 78–95, rehearsals 62–81. Public-domain score in the US, not the EU. Passage timings are provisional, guided by cache/analysis/stravinsky-petrushka-moor.txt. Both harps share one stage position; active groups vary within the indicated passage.' },
    timeline: [
      { t: 0, playing: ['flutes', 'oboes', 'cor-anglais', 'clarinets', 'bassoons', 'horns', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['violins-1', 'violins-2', 'horns'], note: 'The ferocious introduction combines orchestral gestures with string weight.', evidence: 'Score p. 78, rehearsals 62–63; opening changes at 0:12 and 0:26.' },
      { t: 26, playing: ['bassoons', 'tuba', 'timpani', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['bassoons'], note: 'A slower, low-centred passage prepares the main melody.', evidence: 'Score p. 79, rehearsal 64; low spectral centroids at 0:25–0:40.' },
      { t: 48, playing: ['clarinets', 'bass-clarinet', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['clarinets', 'bass-clarinet'], note: 'Clarinet and bass clarinet double the principal tune in octaves.', evidence: 'Score pp. 79–80, rehearsal 65; 0:48 boundary followed by a stable pitch profile through 1:35.' },
      { t: 194, playing: ['cornets', 'percussion'], lead: ['cornets'], note: 'The Ballerina’s dance begins with solo cornet and military drum.', evidence: 'Score p. 83, rehearsal 69; 3:14 change and brighter but quiet following passage.' },
      { t: 235, playing: ['flutes', 'cornets', 'bassoons'], lead: ['flutes', 'cornets'], note: 'The first waltz phrase uses flute, cornet and bassoon.', evidence: 'Score p. 84, rehearsal 71; low relative levels and brightness at 3:55–4:05.' },
      { t: 290, playing: ['piccolo', 'flutes', 'cor-anglais', 'clarinets', 'contrabassoon', 'cornets', 'harp', 'percussion', 'violas', 'cellos', 'basses'], lead: ['flutes', 'cornets'], note: 'The waltz’s lighter line coexists with a heavier low accompaniment.', evidence: 'Score pp. 84–88, rehearsals 72–75; internal boundaries at 4:50 and 5:04, followed by a broad increase in level.' },
      { t: 384, playing: ['horns', 'cornets', 'trumpets', 'trombones', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['trumpets', 'trombones'], note: 'Muted brass and stopped horns announce the interruption of the dancing pair.', evidence: 'Score p. 89, rehearsal 76; change at 6:24 before increased brightness at 6:30–6:40.' },
      { t: 406, playing: ['bassoons', 'flutes', 'oboes', 'clarinets', 'horns', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['bassoons', 'violins-1'], note: 'The quarrel begins in bassoon and strings before further winds enter.', evidence: 'Score p. 91, rehearsal 78; 6:46 boundary and renewed activity towards the 7:05–7:15 crest. The exact bassoon entrance is not aligned.' },
    ],
  },
};
