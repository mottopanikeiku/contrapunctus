// Publication: https://www.henle.de/media/56/3c/dd/1697725817/1486-1697725817-sync.pdf
// Commons explicitly gives the performance CC BY 3.0 and the recording PD-USGov.
export default {
  id: 'scriabin-etude-op8-12',
  composer: 'scriabin',
  order: 1,
  work: 'Étude in D♯ minor, Op. 8 No. 12',
  movement: 'Patetico',
  year: '1894–95',
  key: 'D♯ minor',
  forces: 'Piano',
  performers: 'Awadagin Pratt, piano',
  recorded: '4 November 2009',
  license: 'CC BY 3.0',
  source: { file: 'File:20091104 Awadagin Pratt - Scriabin, Étude Op. 8 No. 12.ogg' },
  question: 'How can a melody sing above a busy accompaniment?',
  intro: 'A short étude that asks for weight as well as speed: the right-hand melody is projected in octaves over widely spaced left-hand figures. Listen for the quieter middle and the heavier return of the opening.',
  sections: [
    { t: 0, label: 'A · octave melody' },
    { t: 36, label: 'Quieter middle · approximate' },
    { t: 64, label: 'Intensified return · approximate' },
    { t: 104, label: 'Closing gestures · approximate' },
  ],
  cues: [
    { t: 0, kind: 'listen', title: 'A line above the activity', text: 'Try following the melody as one continuing line, rather than giving every accompanying note equal attention. The study asks the pianist to keep that line distinct while covering wide distances on the keyboard.', basis: 'general', precision: 'passage', evidence: 'The score outline describes a chordal melody above a widely spaced accompaniment. This cue concerns the texture, not an individual note or hand movement at a precise second: https://fr.wikipedia.org/wiki/%C3%89tude_op._8_no_12_de_Scriabine' },
    { t: 20, kind: 'life', title: 'A publisher’s support', text: 'Mitrofan Belyayev heard Scriabin’s music in 1894 and began publishing his works and paying advances. Their surviving correspondence records not just encouragement but negotiations over deadlines and revisions.', basis: 'documented', precision: 'passage', evidence: 'Valentina Rubcova’s Henle preface recounts Belyayev’s support from 1894 and quotes the correspondence: https://www.henle.de/media/56/3c/dd/1697725817/1486-1697725817-sync.pdf' },
    { t: 40, kind: 'music', title: 'Quieter does not mean still', text: 'Across the quieter middle, listen for how much motion remains beneath the melody. A reduction in force can change the character even when the accompaniment continues to keep the hands busy.', basis: 'audio-feature', precision: 'passage', evidence: 'The recorded level falls across roughly 0:35–0:45, but the analysis continues to detect frequent attacks. The cue does not depend on an automatically estimated key.' },
    { t: 55, kind: 'world', title: 'An étude revised before publication', text: 'Scriabin was still revising the Op. 8 studies in March 1895. He also sent Belyayev a second version of the D♯ minor étude but asked him not to publish it immediately. The collection appeared in July that year.', basis: 'documented', precision: 'passage', evidence: 'Rubcova quotes Scriabin’s 1895 letters about the revisions and withheld alternative, and dates publication to 6/18 July 1895. This does not identify the edition used in this performance: https://www.henle.de/media/56/3c/dd/1697725817/1486-1697725817-sync.pdf' },
    { t: 75, kind: 'listen', title: 'A stronger return', text: 'Compare this later, more forceful stretch with the opening. Can you still follow the melody through the accompanying activity, and does the extra weight change where the phrase seems to be heading?', basis: 'audio-feature', precision: 'passage', evidence: 'The analysis finds a higher recorded level and more frequent attacks around 1:05–1:25 than in the opening. These measurements support the broad contrast, not a claim about an exact thematic entrance.' },
    { t: 90, kind: 'world', title: 'Students at the White House', text: 'Awadagin Pratt took part in the White House classical-music workshop and concert on 4 November 2009. This recording is an extract from the event’s video, which also documents performances by students.', basis: 'documented', precision: 'passage', evidence: 'The archived White House video page dates the event, names Pratt and describes the workshop and concert: https://obamawhitehouse.archives.gov/photos-and-video/video/white-house-workshop-classical-music' },
    { t: 108, kind: 'listen', title: 'The attacks spread out', text: 'Across the closing gestures, compare the spaces between attacks with the denser movement earlier in the study. Notice how the sound can continue between notes even as the activity diminishes.', basis: 'audio-feature', precision: 'passage', evidence: 'The report shows fewer detected attacks and a falling recorded level around 1:40–1:55. It does not identify the later sound at the end of this live recording, so no claim of final silence is made.' },
  ],
};
