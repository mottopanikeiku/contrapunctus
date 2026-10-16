// Programme and compositional history:
// https://www.hberlioz.com/Scores/fantas.htm
// https://www.hberlioz.com/Scores/sfantastique.htm
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
  intro: 'Berlioz makes an execution march the fourth movement of a symphony. Low strings, brass and percussion turn a regular tread into public spectacle; one remembered melody interrupts the machinery.',
  sections: [
    { t: 0, label: 'The procession gathers' },
    { t: 18, label: 'Descending march theme' },
    { t: 98, label: 'Brass-led march' },
    { t: 170, label: 'Minor-key return and build-up' },
    { t: 252, label: 'The last recollection' },
    { t: 264, label: 'Execution and close' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'An execution in a dream', text: 'This is the fourth of five movements. In Berlioz’s printed programme, an opium-dazed musician dreams that he has murdered his beloved and is being led to execution; the quiet opening prepares the procession rather than announcing a triumphant march.', evidence: 'opening G minor region; −42.6 dB at 0:00, rising to −25.0 at 0:15; sparse attacks before the 0:18 boundary' },
    { t: 18, kind: 'music', title: 'The melody walks down', text: 'Cellos and double basses carry a descending march tune. Its weight comes from the low register and repeated steps; the answering orchestral accents interrupt rather than smooth out the line.', evidence: 'strongest boundary 0:18 (1.00); brightness 704 Hz at 0:15, 770 at 0:20; rise to −13.4 dB at 0:25 followed by −29.8 at 0:30; score places the low-string march after the introduction' },
    { t: 55, kind: 'life', title: 'An actress in Paris', text: 'Berlioz saw Harriet Smithson as Ophelia and Juliet in Paris in 1827. She inspired the symphony’s beloved, but did not attend its premiere; hearing the revised work in December 1832 brought them together. They married in October 1833.' },
    { t: 98, kind: 'music', title: 'The brass take command', text: 'The march becomes louder and more openly ceremonial. The brass-led tune turns towards B♭ major, the relative major of G minor: the same two-flat key signature can support both the prisoner’s heavy steps and the procession’s public display.', evidence: 'boundary 1:38 (0.55); −30.4 dB at 1:30 to −12.3 at 1:40; centroid 1,214→2,351 Hz; B♭ major estimate r=0.84 at 1:40–1:50 confirms the score’s major-key march' },
    { t: 135, kind: 'world', title: 'Paris hears the symphony', text: 'François-Antoine Habeneck conducted the premiere at the Paris Conservatoire on 5 December 1830. Berlioz later recalled that the march took the audience by storm; his account also admits that two rehearsals had not been enough.' },
    { t: 170, kind: 'music', title: 'Back to the low tread', text: 'The volume drops and the darker march material returns. Listen to how quickly Berlioz rebuilds the sound: the withdrawal lasts only a few phrases before the full orchestral weight presses forward again.', evidence: 'boundary 2:50 (0.30); −8.3 dB at 2:45 drops to −21.4 at 2:50; G minor r=0.75–0.82 at 2:50–2:55; rise to −5.3 at 3:10' },
    { t: 210, kind: 'life', title: 'A march with a past', text: 'In his memoirs Berlioz says he wrote this movement in one night. The manuscript supplies a qualification: he reworked a guards’ march from his abandoned opera <i>Les Francs-juges</i>. The remembered beloved was added for the symphony.' },
    { t: 252, kind: 'listen', title: 'A thought before the blow', text: 'The march breaks off for a quiet recollection. A solo clarinet gives the opening of the idée fixe, the melody representing the beloved throughout the symphony; listen for how little of it the orchestra allows to survive.', evidence: 'boundary 4:12 (0.81); −9.0 dB at 4:10 falls to −28.3 at 4:15 and −29.9 at 4:20; attacks fall from 2.8/s to 0.6–0.8/s; matches the score’s brief clarinet recollection before the execution' },
    { t: 264, kind: 'music', title: 'The sentence is carried out', text: 'The orchestral blow cuts across the recollection. Brass and percussion turn the ending into a blunt G major proclamation: the bright final chord belongs to the crowd’s celebration, not to a reprieve for the condemned man.', evidence: 'boundary 4:24 (0.43); −29.9 dB at 4:20 jumps to −8.9 at 4:25; loudest windows 4:30 and 4:35; G–B–D chroma and G major r≈0.79 confirm the major close' },
    { t: 280, kind: 'form', title: 'Four movements are not enough', text: 'The final chords decay, but the symphony has one movement left. The witches’ sabbath will bring the beloved’s melody back on E♭ clarinet, stripped of its earlier singing character.', evidence: '−20.5 dB at 4:40 falls to −52.3 at 4:45, with no detected attacks in the last window' },
  ],
};
