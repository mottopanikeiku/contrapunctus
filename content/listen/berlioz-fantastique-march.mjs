// Programme and compositional history:
// http://www.hberlioz.com/Scores/fantas.htm
// http://www.hberlioz.com/Scores/sfantastique.htm
export default {
  id: 'berlioz-fantastique-march',
  composer: 'berlioz',
  order: 1,
  work: 'Symphonie fantastique, Op. 14',
  movement: 'IV. Marche au supplice — Allegretto non troppo',
  year: '1830',
  key: 'G minor',
  forces: 'Orchestra',
  performers: 'Igor Markevitch, Orchestre Lamoureux',
  recorded: '1962',
  source: { file: 'File:Hector Berlioz - Symphonie fantastique, op. 14 - 4. Marche au supplice (Igor Markevitch, Orchestre Lamoureux, 1962).ogg' },
  question: 'How can a march turn a melody into an interruption?',
  intro: 'Berlioz places an execution march inside a symphony, with a brief recollection of the beloved’s melody near its end. What happens to the regular tread when that recollection interrupts it?',
  sections: [
    { t: 0, label: 'The procession gathers' },
    { t: 18, label: 'Descending march theme' },
    { t: 98, label: 'Brass-led march' },
    { t: 170, label: 'Minor-key return and build-up' },
    { t: 252, label: 'The last recollection' },
    { t: 264, label: 'Execution and close' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'An execution in a dream', text: 'This is the fourth of five movements. In Berlioz’s printed programme, an opium-dazed musician dreams that he has murdered his beloved and is being led to execution. Listen for the contrast between the march’s heavy tread and its more ceremonial passages.', basis: 'documented', precision: 'passage', evidence: 'Berlioz’s published programme, part four, describes the dream and the march’s contrasting characters.' },
    { t: 18, kind: 'listen', title: 'A descending march tune', text: 'The opening stretch builds around a descending tune in the low register. Follow the downward motion and its interruptions: a march can keep a regular tread without giving every phrase an uninterrupted line.', basis: 'score-proportion', precision: 'passage', evidence: 'The score places the descending tune after the introduction; an audio change near 0:18 gives only an approximate location.' },
    { t: 55, kind: 'world', title: 'The beloved as melody', text: 'Berlioz’s programme calls the recurring melody an idée fixe: a persistent idea. It represents the beloved across all five movements, so the march belongs to a larger musical narrative rather than an independent military scene.', basis: 'documented', precision: 'passage', evidence: 'The 1845 programme’s first movement explains the recurring melodic image and its connection to the beloved.' },
    { t: 98, kind: 'listen', title: 'A more ceremonial march', text: 'Around this part of the march, the sound grows stronger and more brilliant. Compare the broad tune with the earlier descending line, while keeping track of the tread beneath it.', basis: 'audio-feature', precision: 'passage', evidence: 'The measured relative level rises by about 18 dB from 1:30 to 1:40, with more energy in the upper frequencies.' },
    { t: 135, kind: 'world', title: 'Paris hears the symphony', text: 'François-Antoine Habeneck conducted the premiere at the Paris Conservatoire on 5 December 1830. Berlioz later recalled the march’s strong reception, while admitting that two rehearsals had not been enough for a flawless performance.', basis: 'documented', precision: 'passage', evidence: 'Berlioz’s Memoirs, chapter 31, describes the premiere, its rehearsals and the march’s reception.' },
    { t: 170, kind: 'listen', title: 'Withdrawal and renewed force', text: 'This stretch contains a pronounced withdrawal followed by another build-up. Follow how the march keeps its forward motion through the change in level, rather than treating the quieter passage as a new tempo.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level falls sharply around 2:50 and rises again across the following 20 seconds.' },
    { t: 210, kind: 'life', title: 'One night, later revisions', text: 'In his memoirs Berlioz says he wrote the march in one night. In the same account he says that he continued altering it, and the other movements, over several years; speed of first composition did not mean a finished score.', basis: 'documented', precision: 'passage', evidence: 'Berlioz makes both statements in Memoirs, chapter 26; they are his retrospective account.' },
    { t: 252, kind: 'listen', title: 'A thought before the blow', text: 'Near the close, the march makes room for a brief recollection before the final outburst. Berlioz’s programme describes this as a last thought of love, interrupted by the execution; listen for the scale of the contrast rather than a complete restatement of the melody.', basis: 'score-proportion', precision: 'passage', evidence: 'The programme identifies the recollection; a marked fall in relative level around 4:12 supports its approximate position, not a clarinet entrance.' },
    { t: 264, kind: 'listen', title: 'The closing outburst', text: 'The final stretch sets a short, quiet recollection against a much stronger ending. In the programme, the interruption is fatal: the major-key close does not mean a reprieve for the condemned musician.', basis: 'score-proportion', precision: 'passage', evidence: 'The score and programme establish the ending; the relative level rises by about 21 dB between 4:20 and 4:25.' },
    { t: 280, kind: 'form', title: 'One movement still remains', text: 'The march’s closing chords are not the end of the symphony. A fifth movement follows: the dream of a witches’ sabbath, where Berlioz’s programme describes the beloved’s melody transformed into a grotesque dance.', basis: 'documented', precision: 'passage', evidence: 'Berlioz’s published programme gives the fifth movement this scene and describes the melody’s transformation.' },
  ],
};
