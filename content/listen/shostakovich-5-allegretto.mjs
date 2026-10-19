const score = 'https://imslp.tw/uploads/PMLASIA01319-Shostakovich_Fifth_Symphony%2C__Op__47_-_Full_Score.pdf';
const audio = 'cache/analysis/shostakovich-5-allegretto.txt; source: https://archive.org/details/lp_symphony-no-5-opus-47_dmitri-shostakovich-philharmonic-symphony';

export default {
  id: 'shostakovich-5-allegretto',
  composer: 'shostakovich',
  order: 2,
  work: 'Symphony No. 5 in D minor, Op. 47',
  movement: 'II. Allegretto',
  set: { id: 'shostakovich-5', title: 'Symphony No. 5', part: 2, of: 4 },
  year: '1937',
  key: 'A minor',
  forces: 'Orchestra',
  performers: 'Philharmonic Symphony Orchestra of London; Artur Rodzinski, conductor',
  recorded: '1954, London; Westminster LP issued 1956',
  source: {
    archive: { item: 'lp_symphony-no-5-opus-47_dmitri-shostakovich-philharmonic-symphony', file: 'disc1/01.02. Symphony No. 5 Op. 47: Allegretto.mp3' },
    rights: { basis: 'eu-published-before-1963', published: 1956, evidence: 'Westminster WN 18001 / XWN 18001, published 1956: https://archive.org/details/lp_symphony-no-5-opus-47_dmitri-shostakovich-philharmonic-symphony . Rule 3 is territorial EU sound-recording public domain; US status is not established.' },
  },
  intro: 'The Allegretto is the scherzo and second movement of Shostakovich’s Symphony No. 5 in D minor, Op. 47. Cellos and basses open it with a heavy dance figure, and a solo violin follows with a lighter one.',
  sections: [
    { t: 0, label: 'A · Cellos and basses, opening theme', m: 'A', mNote: 'Cellos and basses play the theme in triple time.' },
    { t: 88, label: 'B · Solo violin with harp', m: 'B', mNote: 'Solo violin plays over harp chords and pizzicato cellos.' },
    { t: 165, label: 'A′ · Opening theme in bassoons', m: 'A′', mNote: 'The opening theme returns in bassoon and contrabassoon.' },
    { t: 234, label: 'Coda · Xylophone and closing chords', m: 'Coda', mNote: 'Short orchestral chords end the dance.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Opening, cellos and double basses', text: 'Cellos and double basses begin alone, in A minor. The tune is in three beats to a bar, with short notes and sudden leaps.', basis: 'score-proportion', precision: 'passage', evidence: `Shostakovich, Symphony No. 5, Muzgiz full score, plate M. 16313 Г, p. 52, rehearsal 48: Allegretto in 3/4, cellos and basses alone. ${score}` },
    { t: 40, kind: 'world', title: 'Harlow Robinson on the second movement', text: 'Harlow Robinson heard in this short movement the sarcastic, ironic Shostakovich already familiar from the First Symphony and the First Piano Concerto.', basis: 'documented', precision: 'passage', evidence: 'Harlow Robinson, Boston Symphony Orchestra programme note on Symphony No. 5, on the second movement. https://www.bso.org/works/symphony-no-5-shostakovich' },
    { t: 88, kind: 'form', title: 'Trio, solo violin', text: 'In the trio a solo violin plays over harp chords and pizzicato cellos, with glissandos and short, clipped phrases. A solo flute then takes up the tune.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 64–65, rehearsals 57–59: solo violin with glissandos, harp and pizzicato cellos; subsequent flute solo. ${score}` },
    { t: 140, kind: 'life', title: 'First American performance, 1938', text: 'On 9 April 1938 Artur Rodzinski conducted the NBC Symphony Orchestra in the symphony’s first American performance, which was broadcast on the radio. He returned to the score in London in 1954 and made the performance heard here.', basis: 'documented', precision: 'passage', evidence: 'First American performance: Harlow Robinson, Boston Symphony Orchestra programme note, https://www.bso.org/works/symphony-no-5-shostakovich . London session attribution: Westminster reissue MVCW-18008, https://ci.nii.ac.jp/ncid/BA40424469 .' },
    { t: 165, kind: 'form', title: 'Return of the opening theme, bassoons', text: 'The opening theme returns in the bassoon and contrabassoon, and the strings follow with pizzicato. At the start of the movement the cellos played the theme with the bow.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 71–72, rehearsals 65–67: bassoon and contrabassoon recall the opening, followed by pizzicato strings. ${score}` },
    { t: 200, kind: 'world', title: 'Recording sessions, Walthamstow, 1954', text: 'Westminster’s sessions with Rodzinski ran from 2 to 14 October 1954 at Walthamstow, in east London. The reissue catalogue names the Royal Philharmonic. The original LP credits the “Philharmonic Symphony Orchestra of London”.', basis: 'documented', precision: 'passage', evidence: 'CiNii Books record of the 1997 Japanese reissue, Westminster MVCW-18008 (The Art of Artur Rodzinski 6), which transcribes the booklet: “Recorded: October 2 to 14, 1954, Walthamstow Hall, London”, Royal Philharmonic Orchestra, Artur Rodzinski. https://ci.nii.ac.jp/ncid/BA40424469 Discogs lists the Westminster Tchaikovsky Fifth from the same sessions as 2–3 October 1954 at Walthamstow Assembly Hall (user-contributed; not used for the dates). Original LP label and sleeve, which name only the “Philharmonic Symphony Orchestra of London”: https://archive.org/details/lp_symphony-no-5-opus-47_dmitri-shostakovich-philharmonic-symphony' },
    { t: 234, kind: 'music', title: 'Closing phrases and final chords', text: 'The full orchestra returns for the closing phrases, and the xylophone plays the tune above the strings. Short chords end the movement.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, p. 84, rehearsal 74: xylophone, winds and strings in the closing phrase, followed by detached orchestral chords. ${score}` },
  ],
  transitions: [
    { id: 'trio-lightening', title: 'Solo violin over harp chords', from: 'A · Cellos and basses, opening theme', to: 'B · Solo violin with harp', at: { t: 88 }, span: [76, 106], how: '<p>The horns finish their phrase and fall silent. A solo violin begins over quiet harp chords, and pizzicato cellos mark out the bass. The three-beat metre continues, and the violin plays the dance with slides and light bow strokes.</p>', devices: ['orchestration change', 'texture change', 'decrescendo'], basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 64–65, rehearsal 57. ${score}` },
    { id: 'scherzo-recoloured', title: 'Bassoons take over the cello tune', from: 'B · Solo violin with harp', to: 'A′ · Opening theme in bassoons', at: { t: 165 }, span: [151, 188], how: '<p>Bassoon and contrabassoon play the low tune from the opening, between rehearsals 65 and 67. When the strings rejoin, they play pizzicato. The melody keeps its shape, and the bass line passes from bowed strings to double reeds.</p>', devices: ['motivic link', 'orchestration change', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 71–72, rehearsals 65–67, compared with the opening on p. 52. ${score}` },
    { id: 'short-close', title: 'Xylophone added to the final phrase', from: 'A′ · Opening theme in bassoons', to: 'Coda · Xylophone and closing chords', at: { t: 234 }, span: [220, 255], how: '<p>High woodwinds and xylophone reinforce the last string phrase. Horns and lower brass punctuate it with chords, and the cellos and basses keep the clipped dance steps underneath. The final chords are short and separated by rests.</p>', devices: ['orchestration change', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, p. 84, rehearsal 74. ${score}` },
  ],
  orchestra: {
    ensemble: ['piccolo', 'flutes', 'oboes', 'e-flat-clarinet', 'clarinets', 'bassoons', 'contrabassoon', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: { title: 'Symphony No. 5 — Muzgiz M. 16313 Г, historical full score', url: score, locator: `Printed pp. 52–84; PDF pp. 54–86. Viewed score is public domain in Taiwan, not cleared for EU/US republication; exact performing edition unknown. Selected passage snapshots with approximate timing from ${audio}, not a complete instrument-on/off transcription.` },
    timeline: [
      { t: 0, playing: ['cellos', 'basses'], lead: ['cellos', 'basses'], note: 'Opening low-string theme, p. 52/rehearsal 48.' },
      { t: 70, playing: ['horns', 'bassoons', 'cellos', 'basses', 'timpani', 'percussion'], lead: ['horns'], note: 'Horn-led later opening span, p. 62/rehearsal 56; regional placement before the 1:28 withdrawal.' },
      { t: 100, playing: ['violins-1', 'harp', 'cellos'], lead: ['violins-1'], note: 'Solo violin with harp and pizzicato cellos, pp. 64–65; the violin solo is played by a section player, represented within violins-1.' },
      { t: 175, playing: ['bassoons', 'contrabassoon', 'violins-1', 'violins-2', 'violas'], lead: ['bassoons', 'contrabassoon'], note: 'Recoloured return, pp. 71–72/rehearsals 65–66; the snapshot includes successive entries in the low wind and pizzicato strings, which do not attack together.' },
      { t: 245, playing: ['piccolo', 'flutes', 'oboes', 'e-flat-clarinet', 'clarinets', 'bassoons', 'contrabassoon', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['violins-1', 'flutes'], note: 'Final orchestral gestures, p. 84, rehearsal 74, with xylophone among the percussion.' },
    ],
  },
};
