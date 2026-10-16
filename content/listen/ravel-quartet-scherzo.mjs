// Historical and scoring sources:
// https://www.chambermusicsociety.org/about-the-music/compositions/ravel-string-quartet
// https://en.wikipedia.org/wiki/String_Quartet_(Ravel)
export default {
  id: 'ravel-quartet-scherzo',
  composer: 'ravel',
  order: 3,
  work: 'String Quartet in F major',
  movement: 'II. Assez vif — Très rythmé',
  year: '1902–03',
  key: 'A minor',
  forces: 'Two violins, viola and cello',
  performers: 'String players of the United States Army Band',
  recorded: '',
  source: { file: 'File:Ravel - String Quartet, mvt 2 - US Army Band.ogg' },
  intro: 'Four string players begin by putting their bows aside. The scherzo sets plucked attacks against sustained lines, with a slower middle section interrupting the friction between groups of two and three.',
  sections: [
    { t: 0, label: 'A · Plucked scherzo' },
    { t: 102, label: 'B · Muted middle section' },
    { t: 200, label: 'Motion gathers' },
    { t: 290, label: 'A′ · The scherzo returns' },
    { t: 335, label: 'Closing gestures' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Four plucked instruments', text: 'All four players begin pizzicato: plucking the strings rather than bowing them. The short attacks expose the rhythmic disagreement inside the bar, where groups of three quavers compete with groups of two.', evidence: 'opening 0:00–0:05 has 4.6–5.0 onsets/s and centroid 714–728 Hz; the score opens with all four parts pizzicato and competing triple/duple groupings' },
    { t: 32, kind: 'music', title: 'Bows change the attack', text: 'The bowed writing allows the line to continue between attacks instead of dying away after each pluck. Listen for the contrast between a singing phrase and the clipped rhythm: Ravel makes changes of playing technique part of the form.', evidence: 'centroid rises from 714 Hz at 0:05 to 1248 at 0:10 and 1718 at 0:30; onset density falls to 1.2–1.4/s at 0:15–0:20; boundary 0:34 follows the bowed passage' },
    { t: 65, kind: 'life', title: 'Dedicated to his teacher', text: 'Ravel completed the quartet in 1903 and dedicated it to Gabriel Fauré. He had entered Fauré’s composition class in 1897 and continued attending as an auditor after losing his formal place at the Conservatoire.' },
    { t: 104, kind: 'form', title: 'A muted middle section', text: 'The busy scherzo gives way to a slow middle section, with mutes on the strings. Sustained lines replace the opening’s exposed pattern of attacks; the change in colour is as important as the change of pace.', evidence: 'boundary 1:42 (0.42); onset density falls from 4.4/s at 1:35 to 0.2 at 1:45 and zero at 1:55–2:05; score marks the slow middle section with mutes' },
    { t: 140, kind: 'world', title: 'Paris, March 1904', text: 'The Heymann Quartet gave the first performance on 5 March 1904 at a Société nationale de musique concert in Paris. This remained Ravel’s only string quartet, although he later returned to strings alone in the Sonata for Violin and Cello.' },
    { t: 176, kind: 'listen', title: 'Long notes, moving harmony', text: 'In this middle section, changes of harmony do not require the crisp collective attacks of the opening. Follow the sustained parts separately: a line can continue while another player changes the chord around it.', evidence: 'onset density remains 0–0.4/s through 2:30–2:50 and 3:05–3:15; boundaries 2:42 and 3:08 accompany shifts in pitch-class emphasis from D/F/G through A♭/E♭ to C♯/E/G♯' },
    { t: 208, kind: 'music', title: 'Motion begins to gather', text: 'Shorter gestures begin to restore the scherzo’s activity. The return is prepared through changing articulation and more frequent attacks before the opening music regains its full force.', evidence: 'strongest boundary 3:20 (1.00); onset density rises from 0.2/s at 3:15 to 1.2 at 3:20, 3.0 at 3:35 and 3.2 at 3:45; second strong boundary 3:46 (0.96)' },
    { t: 245, kind: 'world', title: 'Debussy’s earlier quartet', text: 'Debussy’s quartet of 1893 also places a pizzicato scherzo second in a four-movement design. Ravel likewise carries related themes between movements; the shared framework was one reason early critics compared the two works.' },
    { t: 279, kind: 'listen', title: 'The plucked pulse rebuilds', text: 'The quick, short attacks return quietly before the opening material recovers its strength. Listen to their spacing rather than their volume: rhythmic activity can increase while the players still hold the sound back.', evidence: '0.4 onsets/s at 4:20 rises to 4.4 at 4:30 and 5.0 at 4:35; centroid remains low at 631–782 Hz; boundary 4:38 (0.35) precedes the loud return at 4:50' },
    { t: 303, kind: 'form', title: 'The scherzo restored', text: 'The opening material is back in a shortened return. Plucked attacks again alternate with bowed melody; the quartet does not need extra instruments to make two sharply different kinds of sound.', evidence: 'boundary 4:50 (0.43); −23.2 dB at 4:45 rises to −11.7 at 4:50, matching the early 0:45 peak; centroid rises from 809 Hz at 4:55 to 1238 at 5:00 as the articulation changes again' },
    { t: 336, kind: 'music', title: 'Short strokes to finish', text: 'The longer bowed phrases give way to shorter attacks. Listen to the spaces between the last notes: their separate strokes, followed by the strings’ decay, close the movement.', evidence: 'centroid falls from 1584 Hz at 5:20 to 796 at 5:35; onset density is 3.6/s at 5:35 then falls to 0.8 at 5:45 and zero at 5:50; loudness falls from −15.7 dB at 5:40 to −26.8 at 5:45' },
  ],
};
