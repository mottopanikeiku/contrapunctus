// Historical sources:
// https://www.bruzanemediabase.com/en/exploration/works/pavane-infante-defunte-maurice-ravel
// https://www.laphil.com/works/pavane-pour-une-infante-defunte
export default {
  id: 'ravel-pavane',
  composer: 'ravel',
  order: 2,
  work: 'Pavane pour une infante défunte',
  movement: '',
  year: '1899',
  key: 'G major',
  forces: 'Piano',
  performers: 'Thérèse Dussaut, piano',
  recorded: '1976',
  source: { file: 'File:Maurice Ravel - Thérèse Dussaut - Pavane pour une infante défunte.ogg' },
  license: 'CC BY-SA 2.0',
  intro: 'Before the solo horn of the orchestral version, there was a piano melody held above evenly spaced chords. Thérèse Dussaut plays the 1899 original: an imagined court dance, not the funeral of a particular princess.',
  sections: [
    { t: 0, label: 'A · The refrain' },
    { t: 48, label: 'B · First episode' },
    { t: 114, label: 'A · The refrain returns' },
    { t: 164, label: 'C · The broader episode' },
    { t: 244, label: 'A · Final return' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'A line above the chords', text: 'The piano gives the melody the top of the texture, above evenly spaced chords. Listen for the first long note: it is held across the middle of the bar, so the tune does not simply march in step with its accompaniment.', evidence: 'G is prominent in the opening window; 0:05–0:20 has 1.4–2.2 onsets/s; the score’s opening G lasts five quavers over the regular accompaniment' },
    { t: 38, kind: 'life', title: 'A student of Fauré', text: 'Ravel wrote the <i>Pavane</i> in 1899, two years after entering Fauré’s composition class at the Paris Conservatoire. Fauré also introduced him to the salon of the Princesse de Polignac, who became the work’s dedicatee.' },
    { t: 76, kind: 'listen', title: 'Let the phrase release', text: 'In this first contrasting episode, a brief swell gives way to a much quieter phrase. Listen to the piano’s decay between attacks: Dussaut can reduce the weight of a chord without letting the dance’s underlying pulse disappear.', evidence: 'first-episode boundaries at 0:48 and 1:04; −17.6 dB at 1:10 falls to −30.5 at 1:15, with onset density dropping from 1.6 to 1.0/s' },
    { t: 114, kind: 'form', title: 'The refrain comes back', text: 'The opening melody returns. This is a rondo principle on a small scale: the familiar tune separates contrasting episodes, giving the ear a fixed point without requiring every passage to sound alike.', evidence: 'boundary 1:54 (0.66); B/G/D and then E/B return to prominence at 1:55–2:00, matching the opening’s pitch profile after the D/A-centred preceding passage' },
    { t: 148, kind: 'world', title: 'An imagined Spanish court', text: 'The title does not commemorate a particular dead princess. Ravel described a dance that such a princess might have performed at the Spanish court in earlier centuries; the pavane supplies a historical dance type, not a funeral programme.' },
    { t: 178, kind: 'music', title: 'The contrasting central episode', text: 'After a pause, a new episode opens a different harmonic region. The movement is still measured, but the phrases now build to stronger peaks than those of the opening refrain.', evidence: 'boundaries 2:44 (0.97) and 2:52 (1.00); −31.6 dB at 2:45 rises to −14.3 at 2:55 and −10.5 at 3:10; F/G/B♭ replace the earlier B/F♯ emphasis' },
    { t: 212, kind: 'music', title: 'Another rise and retreat', text: 'The episode repeats its pattern of expansion and release. Keep the upper melody in focus as the chords grow heavier beneath it; the louder writing still needs a distinct singing line.', evidence: '−10.5 dB at 3:10 falls to −32.7 at 3:20; boundary 3:30 (0.96) and renewed peaks of −11.2 at 3:45 and −10.8 at 3:50 anchor the repeated rise' },
    { t: 244, kind: 'form', title: 'The final return', text: 'The opening tune returns after a nearly silent pause. Its familiarity restores the refrain’s proportions after the broader episode; this last appearance carries the piece to its close.', evidence: 'boundary 3:56 (0.88); −36.3 dB and 0.2 onsets/s at 4:00 give way to −23.3 dB and 3.0 onsets/s at 4:05; B/D/G restore the refrain’s pitch profile' },
    { t: 277, kind: 'world', title: 'From piano to orchestra', text: 'Ricardo Viñes gave the piano premiere on 5 April 1902 at the Société nationale de musique. Ravel orchestrated the piece in 1910, giving its opening melody to a solo horn; this recording preserves the earlier keyboard version.' },
    { t: 300, kind: 'music', title: 'The final G major', text: 'The last G major chord is allowed to ring. With no new notes to sustain the line, the piano’s natural decay becomes the ending.', evidence: 'G/D/B dominate at 5:00 and 5:05 with G in the bass; G major estimates 0.89/0.88; onset density falls from 0.2/s to zero and loudness from −17.9 to −33.8 dB' },
  ],
};
