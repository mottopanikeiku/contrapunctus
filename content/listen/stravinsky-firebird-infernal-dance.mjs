// Recording and arrangement: https://commons.wikimedia.org/wiki/File:Infernal_Dance_from_The_Firebird_by_Stravinsky.ogg
// Premiere and scenario: https://en.wikipedia.org/wiki/The_Firebird
// Biography: https://fondation-igor-stravinsky.org/en/composer/biography/
export default {
  id: 'stravinsky-firebird-infernal-dance',
  composer: 'stravinsky',
  order: 1,
  work: 'The Firebird',
  movement: 'Infernal Dance of Kashchei',
  year: '1909–10',
  key: '',
  forces: 'Concert band, arranged by Thomas Knox',
  performers: 'United States Marine Band; Col John R. Bourgeois',
  recorded: '',
  license: 'Public domain in the US (US Marine Band recording; composition published 1910)',
  source: { file: 'File:Infernal Dance from The Firebird by Stravinsky.ogg' },
  question: 'Can you keep the pulse when the accents shift?',
  intro: 'Thomas Knox’s concert-band arrangement gives the ballet’s enforced dance to brass, woodwind and percussion rather than the original full orchestra. Can you keep a steady pulse beneath the displaced accents?',
  sections: [
    { t: 0, label: 'Dance · repeated figures' },
    { t: 108, label: 'Sustained middle paragraph' },
    { t: 144, label: 'Quiet restart' },
    { t: 194, label: 'Closing build-up' },
    { t: 240, label: 'Final sonority' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Kashchei’s enforced dance', text: 'In the ballet, the Firebird compels Kashchei and his followers to dance. This recording uses Thomas Knox’s band arrangement; listen to the separated rhythmic gestures without assuming that an orchestral string section is present.', basis: 'general', precision: 'passage', evidence: 'The ballet scenario supplies the action, and Commons credits Knox’s arrangement for the United States Marine Band.' },
    { t: 30, kind: 'life', title: 'From law to orchestration', text: 'Stravinsky studied law in Saint Petersburg before pursuing his musical training privately with Rimsky-Korsakov. Their regular work on orchestration in 1905–08 preceded the commission for <i>The Firebird</i>.', basis: 'documented', precision: 'passage', evidence: 'The Fondation Igor Stravinsky biography documents the law studies, private training and orchestration lessons.' },
    { t: 62, kind: 'listen', title: 'Accents across the pulse', text: 'Follow the underlying pulse separately from the accented notes. The dance’s short figures can disturb your sense of where a strong beat belongs without making the pulse itself disappear.', basis: 'general', precision: 'passage', evidence: 'Displaced accents belong to the dance’s rhythmic writing; the analysis measures activity, not which notes a listener will hear as beats.' },
    { t: 92, kind: 'world', title: 'Paris, June 1910', text: '<i>The Firebird</i> opened at the Paris Opéra on 25 June 1910 for Diaghilev’s Ballets Russes. Michel Fokine choreographed it and Tamara Karsavina danced the title role; Stravinsky had just turned twenty-eight.', basis: 'documented', precision: 'passage', evidence: 'The Stravinsky Foundation dates the premiere and his birth; the documented premiere cast names Karsavina.' },
    { t: 108, kind: 'listen', title: 'A longer line within the dance', text: 'The central span contrasts sustained writing with the earlier clipped gestures. Listen across the pulse for a longer line: greater weight does not always require a greater number of attacks.', basis: 'audio-feature', precision: 'passage', evidence: 'Detected attacks become sparse around 1:50–2:15 while relative level rises, supporting the contrast in activity.' },
    { t: 144, kind: 'listen', title: 'A lower starting point', text: 'Across this transition, a quieter, darker stretch becomes the starting point for renewed repeated activity. Compare the reduced sound with the later build-up rather than expecting a named instrument to enter at this note.', basis: 'audio-feature', precision: 'passage', evidence: 'A strong change near 2:24 precedes low relative level and reduced upper-frequency energy, followed by more attacks around 2:30–2:35.' },
    { t: 175, kind: 'life', title: 'Two more ballets', text: 'Diaghilev’s company followed <i>The Firebird</i> with <i>Petrushka</i> in 1911 and <i>The Rite of Spring</i> in 1913. Their subjects moved from a Russian fairy tale to the life of a puppet and an imagined pagan ritual.', basis: 'documented', precision: 'passage', evidence: 'The Stravinsky Foundation biography dates the three ballets and describes their scenarios.' },
    { t: 208, kind: 'listen', title: 'More than one closing surge', text: 'The later passage rises strongly, retreats and then builds again. Keep following after the first crest: the closing stretch contains more than one change of scale.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level peaks around 3:35, recedes towards 3:50 and rises again towards 4:00.' },
    { t: 240, kind: 'listen', title: 'From attacks to sustained weight', text: 'Across the closing passage, compare the repeated attacks with the longer final sound. The ending’s sustained weight differs from the clipped gestures of the opening, before the remaining resonance diminishes.', basis: 'audio-feature', precision: 'passage', evidence: 'The highest relative-level window is near 4:00 with little new attack activity, followed by a steep decline after 4:05.' },
  ],
};
