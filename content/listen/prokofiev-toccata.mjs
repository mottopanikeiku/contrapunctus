// Historical sources: Simon Morrison, Henle HN 1581 preface (2023),
// https://www.henle.de/media/7f/27/66/1708068498/1581.pdf
// Recording and licence:
// https://commons.wikimedia.org/wiki/File:Serge_Prokofiev_-_Toccata,_op._11_(Martha_Argerich,_1962).flac
export default {
  id: 'prokofiev-toccata',
  composer: 'prokofiev',
  order: 1,
  work: 'Toccata in D minor, Op. 11',
  movement: '',
  year: '1912',
  key: 'D minor',
  forces: 'Piano',
  performers: 'Martha Argerich',
  recorded: '1962',
  source: { file: 'File:Serge Prokofiev - Toccata, op. 11 (Martha Argerich, 1962).flac' },
  intro: 'Two hands share a stream of repeated notes; chromatic lines and displaced accents keep changing what those notes mean. Martha Argerich plays the Toccata Prokofiev wrote while he was still a St Petersburg Conservatory student.',
  sections: [
    { t: 0, label: 'Repeated-note opening' },
    { t: 100, label: 'Quiet restart' },
    { t: 134, label: 'Central surge' },
    { t: 202, label: 'D-centred return' },
    { t: 230, label: 'Final burst' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'One note, two hands', text: 'The hands share repeated Ds before chromatic neighbours begin crowding the note. Listen for the difference between the steady semiquavers and the accents laid across them: the pulse stays regular while the weight keeps moving.', evidence: 'Opening D/A pitch-class concentration, 0:05–0:25; 5.6–7.2 detected onsets/s in these windows. Boundary at 0:30 marks the widening pitch field.' },
    { t: 33, kind: 'life', title: 'A classmate’s fingers', text: 'Prokofiev dedicated the Toccata to Nikolay Shtember, his fellow pupil in Anna Esipova’s piano class at the St Petersburg Conservatory. Written in spring 1912, it tested Shtember’s technique and the composer’s own.' },
    { t: 68, kind: 'world', title: 'Seventy-five roubles', text: 'Koussevitzky’s publishing firm rejected the Toccata. Jurgenson offered fifty roubles; Prokofiev negotiated seventy-five, then complained about the delayed proofs. The first edition finally appeared in July 1913.' },
    { t: 100, kind: 'music', title: 'The mechanism thins', text: 'The volume falls sharply and D becomes a fixed point again. Prokofiev does not insert a slow melody here: he reduces the weight of the repeated-note writing, letting the same basic mechanism work more quietly.', evidence: 'Boundary 1:40, novelty 0.95; loudness falls from −4.6 dB at 1:35 to −16.2 at 1:40, then −29.1 at 1:50. D remains the leading pitch class and bass.' },
    { t: 134, kind: 'music', title: 'More weight, less stability', text: 'The quieter stretch gives way to a much heavier passage. Chromatic movement takes the harmony away from the repeated D of the opening; follow the changing bass beneath the attacks rather than trying to turn every accent into a new beat.', evidence: 'Strongest boundary 2:14, novelty 1.00; −5.2 dB at 2:15 after −15.9 at 2:00. Bass moves G → B → A♭ across 2:05–2:20; another boundary at 2:22.' },
    { t: 166, kind: 'life', title: 'A restrained American debut', text: 'At his American debut in the Brooklyn Museum on 29 October 1918, Prokofiev played the Toccata before a reception for an exhibition of Boris Anisfeld’s work. According to his diary, he softened its impact for the audience, even leaving notes out.' },
    { t: 202, kind: 'music', title: 'D takes the weight', text: 'D settles into the bass again, now under much louder playing than at the opening. The returning pitch gives the ear a reference point even while the upper notes continue to collide with it.', evidence: 'Boundary 3:22, novelty 0.93; D leads the pitch classes and bass at 3:20–3:35. Loudness −5.1/−4.6 dB at 3:20/3:25, against −18.8/−15.7 at 0:05/0:10.' },
    { t: 220, kind: 'music', title: 'The attacks almost stop', text: 'The sound drains away and the repeated attacks become widely spaced. This interruption matters because nearly everything before it has depended on maintaining the stream of semiquavers.', evidence: 'Boundary 3:38, novelty 0.73; −30.9 dB at 3:40 and only 0.2 onsets/s at 3:45, against 4.2 at 3:25.' },
    { t: 235, kind: 'listen', title: 'A last concentrated burst', text: 'After that break, rapid attacks return at full weight. Listen through the final blow to its decay: the piece stops the repeated-note pattern rather than fading it into the distance.', evidence: 'Boundary 3:50; −4.4 dB and 7.2 onsets/s at 3:55, followed by −20.4 dB and 0.2 onsets/s at 4:00; −78.1 dB at 4:05.' },
  ],
};
