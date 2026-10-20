const scoreUrl = 'https://vmirror.imslp.org/files/imglnks/usimg/1/18/IMSLP472771-PMLP179431-PMLUS00370-Stravinsky_-_Petrushka_OrchScore.pdf';
const catalogueUrl = 'https://www.kcatalog.org/index.php/browse-chapters/kcatalog/179-k012-petrushka';
const contextUrl = 'https://resources.ircam.fr/en/work/petrouchka';

export default {
  id: 'stravinsky-petrushka-fair',
  composer: 'stravinsky',
  order: 4,
  work: 'Petrushka (1911 original version)',
  movement: 'I. The Shrovetide Fair',
  set: { id: 'stravinsky-petrushka', title: 'Petrushka (1911 original version)', part: 1, of: 4, unit: 'tableaux' },
  year: '1910–11',
  key: '',
  forces: 'Orchestra with piano, celesta and two harps',
  performers: 'Orchestre de la Suisse Romande; Ernest Ansermet',
  recorded: '1957',
  source: {
    archive: {
      item: 'lp_petrushka-complete-ballet-original-editio_igor-stravinsky-lorchestre-de-la-suisse-ro',
      file: 'disc1/01.01. 1st Tableau: The Shrovetide Fair.mp3',
    },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1958,
      evidence: 'London CS 6009 is pictured as NOW AVAILABLE in the Grosse Pointe News, 6 November 1958, p. 7, London/Pecar Electronics advertisement: https://digitize.gp.lib.mi.us/history/newspapers/grossePointeNews/year_ranges/1950s/1958/pdf/1958-11-06.pdf . The inspected sleeve and Archive carrier metadata identify this Ansermet/OSR Original Edition. First lawful publication anywhere before 1963; territorial EU recording basis only, US sound-recording status not established.',
    },
  },
  intro: 'The first tableau of Petrushka is set at a fair in St Petersburg, where a flute plays over an imitation of an accordion, street dancers compete for customers and a magician brings three puppets to life. Ernest Ansermet conducts the original 1911 score, which places a piano within the orchestra.',
  sections: [
    { t: 0, label: 'A · Flute melody over the fair', m: 'A', mNote: 'Clarinets and horns play rocking figures beneath the flute’s tune.' },
    { t: 100, label: 'B · Organ-grinder and music box', m: 'B', mNote: 'Street entertainers interrupt the crowd’s dancing.' },
    { t: 200, label: 'A′ · Return of the crowd music', m: 'A′', mNote: 'The barker’s call sounds and the revellers’ music returns.' },
    { t: 318, label: 'C · The magician’s flute', m: 'C', mNote: 'Low bassoons, celesta and harp play before the magician’s trick.' },
    { t: 432, label: 'D · Russian Dance, three puppets', m: 'D', mNote: 'Piano chords and woodwinds begin the Russian Dance.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Flute solo over accordion figure', text: 'A flute plays its tune over clarinets and horns, which rock between alternating fifths and thirds in imitation of an accordion. Four solo cellos enter.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe full score, plate R.M.V. 127, p. 7, opening and rehearsal 1. Gerald Larner identifies the accordion figure in his programme note: https://geraldlarner.com/work/stravinsky-petrushka-1911. ${scoreUrl}` },
    { t: 100, kind: 'form', title: 'Organ-grinder episode', text: 'The organ-grinder’s music repeatedly interrupts the crowd music. The tempo slows to <i>Meno mosso</i>, and a small wind group takes over: flutes play the figure of the turning handle and clarinets play the tune. A street dancer beside him beats time on a triangle.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, rehearsals 9–13, especially pp. 21–22; stage directions and tempo changes transcribed in Kirchmeyer’s catalogue. ${scoreUrl} ${catalogueUrl}` },
    { t: 180, kind: 'world', title: 'Second dancer, rehearsals 15–16', text: 'At the other end of the stage a second dancer starts her music box. The first dancer plays her triangle, and the two acts continue at the same time. Benois and Stravinsky set this competition for customers within the larger fair scene.', basis: 'documented', precision: 'passage', evidence: `Original stage directions at rehearsals 15–16, transcribed in Helmut Kirchmeyer’s catalogue, K012, “Summary” and “Structures”. ${catalogueUrl}` },
    { t: 200, kind: 'form', title: 'Return of the crowd', text: 'The organ-grinder and music box stop. The barker resumes his sales pitch, and the dancing crowd returns. Stravinsky alternates the barker’s hurried announcements with the revellers’ tune from earlier.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, rehearsals 17–27: the barker’s Stringendo alternates with Come prima for the returning crowd. Stage directions transcribed in Kirchmeyer, K012. ${catalogueUrl}` },
    { t: 318, kind: 'form', title: 'Drummers and the magician’s entrance', text: 'Two drummers call the crowd to the puppet theatre. The tempo slows to <i>Lento</i> for the magician’s entrance. Bassoons play low, the double basses pluck, and celesta and harp play short descending figures.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, rehearsals 28–30, pp. 39–41; the drummers’ stage direction precedes the magician’s entrance. ${scoreUrl}` },
    { t: 360, kind: 'music', title: 'Flute cadenza, rehearsal 31', text: 'At rehearsal 31, headed “The Magician Plays the Flute” in the score, the flute plays a cadenza after the music of the fair stops. Its runs rise and turn back down. Stravinsky marks it <i>ad libitum, ma non accelerando</i>, meaning freely, without speeding up.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, p. 41, rehearsal 31: “The Magician Plays the Flute”; cadenza marked ad lib. ma non accel. ${scoreUrl}` },
    { t: 396, kind: 'world', title: 'Letter from Debussy, 13 April 1912', text: 'On 13 April 1912 [[debussy|Debussy]] wrote to Stravinsky about this music, calling it “a sort of magic in sound, a mysterious transformation of mechanical souls that become human”. He praised the magician’s music in particular.', basis: 'documented', precision: 'passage', evidence: `Debussy to Stravinsky, 13 April 1912, quoted in French by IRCAM; our translation of “une sorte de magie sonore, de transformation mystérieuse d’âmes mécaniques qui deviennent humaines”. ${contextUrl}` },
    { t: 432, kind: 'form', title: 'Russian Dance, rehearsal 33', text: 'Petrushka, the Ballerina and the Moor dance together. The piano plays chords with the woodwinds while the strings play pizzicato beneath them. The tempo is <i>Allegro giusto</i>, after the magician’s flute solo in free time.', basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, p. 44, rehearsal 33: Russian Dance, Allegro giusto; piano, woodwinds and pizzicato strings. ${scoreUrl}` },
    { t: 504, kind: 'life', title: 'Diaghilev’s visit to Clarens, 1910', text: 'In 1910 Diaghilev visited Stravinsky in Clarens, expecting sketches for <i>The Rite of Spring</i>. Stravinsky played him music for piano and orchestra about a puppet, with furious piano arpeggios set against the orchestra. Diaghilev asked for a whole ballet, and the piano kept a leading part in the score.', basis: 'documented', precision: 'passage', evidence: `Stravinsky’s retrospective account of Diaghilev’s visit and the projected Konzertstück, reproduced by IRCAM. ${contextUrl}` },
  ],
  transitions: [
    { id: 'into-street-acts', title: 'The organ-grinder’s entry', from: 'A · Flute melody over the fair', to: 'B · Organ-grinder and music box', at: { t: 100 }, span: [88, 118], how: '<p>The rushing string figures of the crowd alternate with a slower wind tune marked <i>Meno mosso</i>. When the organ-grinder’s music begins in earnest, the strings fade out. Flutes repeat short turns above clarinets and bass clarinet, and the triangle plays the dancer’s beat.</p>', devices: ['tempo change', 'texture change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, rehearsals 9–13, especially pp. 21–22. ${scoreUrl}` },
    { id: 'into-magic', title: 'Theatre drummers lead to the <i>Lento</i>', from: 'A′ · Return of the crowd music', to: 'C · The magician’s flute', at: { t: 318 }, span: [303, 335], how: '<p>The theatre’s drummers play over the crowd music. At <i>Lento</i>, the bassoons begin a phrase above plucked double basses. Celesta, harp and muted strings join them. The flute then plays the magician’s cadenza while nearly all the rest of the orchestra stops.</p>', devices: ['orchestration change', 'tempo change', 'link passage'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 39–41, rehearsals 28–31. ${scoreUrl}` },
    { id: 'into-russian-dance', title: 'Into the Russian Dance', from: 'C · The magician’s flute', to: 'D · Russian Dance, three puppets', at: { t: 432 }, span: [419, 449], how: '<p>Harp glissandi and a final flourish on the flute end the conjuring trick. A pause follows before the <i>Allegro giusto</i>. The Russian Dance begins with chords in the piano and woodwind over a low C in the plucked basses. Between the string strokes, the piano’s left hand plays running figures that keep the dance going.</p>', devices: ['fermata', 'tempo change', 'texture change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Édition Russe score, pp. 43–44, end of rehearsal 32 into 33. ${scoreUrl}` },
  ],
  orchestra: {
    ensemble: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'contrabassoon', 'horns', 'cornets', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'celesta', 'piano', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: { title: 'Stravinsky, Petrushka, 1911 orchestration; Édition Russe plate R.M.V. 127, Dover reprint', url: scoreUrl, locator: 'Printed pp. 7–62, rehearsals 1–47. Public-domain score in the US, not the EU. Passage timings are provisional, guided by cache/analysis/stravinsky-petrushka-fair.txt; groups describe the passage rather than every simultaneous note. Both harps share one stage position.' },
    timeline: [
      { t: 0, playing: ['flutes', 'clarinets', 'horns', 'cellos'], lead: ['flutes'], note: 'The opening combines flute figures, clarinet and horn patterns, then solo cellos.', evidence: 'Score p. 7; initial active audio and rise through 0:35.' },
      { t: 130, playing: ['piccolo', 'flutes', 'clarinets', 'bass-clarinet', 'percussion'], lead: ['flutes', 'clarinets'], note: 'The organ-grinder passage uses repeating wind figures; triangle marks the dancer’s pulse.', evidence: 'Score pp. 21–22; low relative level from 2:05 and repeating attacks through 2:45.' },
      { t: 200, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'cornets', 'trumpets', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['flutes', 'oboes', 'clarinets'], note: 'Returning crowd episodes restore wind figures, brass punctuation and string motion.', evidence: 'Rehearsals 17–29; relative level rises at 3:20–3:25 and crests at 3:50–4:00.' },
      { t: 318, playing: ['clarinets', 'bassoons', 'contrabassoon', 'horns', 'celesta', 'harp', 'violins-1', 'violins-2', 'violas', 'basses'], lead: ['bassoons'], note: 'The magic trick reduces the orchestra to low wind figures with keyboard, harp and strings.', evidence: 'Score p. 41, rehearsal 30; 5:18 boundary and sharply reduced brightness at 5:20.' },
      { t: 352, playing: ['flutes'], lead: ['flutes'], note: 'The Charlatan’s flute cadenza has no continuing accompaniment in the score.', evidence: 'Score p. 41, rehearsal 31; 5:52 boundary followed by quiet, low-brightness windows. Approximate cadenza placement, not a note alignment.' },
      { t: 394, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'horns', 'cornets', 'trumpets', 'percussion', 'celesta', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['flutes', 'celesta'], note: 'The puppet-revealing passage restores small, changing instrumental combinations after the flute cadenza.', evidence: 'Score pp. 42–43, rehearsal 32; changes at 6:34 and 6:48. Not all listed groups sound throughout.' },
      { t: 432, playing: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bassoons', 'horns', 'cornets', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piano', 'flutes'], note: 'The Russian Dance combines piano and wind attacks over articulated strings.', evidence: 'Score p. 44, rehearsal 33; rising level and attack density around 7:10–7:20.' },
    ],
  },
};
