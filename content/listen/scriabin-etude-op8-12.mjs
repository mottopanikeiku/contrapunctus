// Biography: https://www.scriabin-association.com/scriabin-biography/
// Publication: https://www.henle.de/media/56/3c/dd/1697725817/1486-1697725817-sync.pdf
// Commons explicitly gives the performance CC BY 3.0 and the recording PD-USGov.
export default {
  id: 'scriabin-etude-op8-12',
  composer: 'scriabin',
  order: 1,
  work: 'Étude in D♯ minor, Op. 8 No. 12',
  movement: 'Patetico',
  year: '1894',
  key: 'D♯ minor',
  forces: 'Piano',
  performers: 'Awadagin Pratt, piano',
  recorded: '4 November 2009',
  license: 'CC BY 3.0',
  source: { file: 'File:20091104 Awadagin Pratt - Scriabin, Étude Op. 8 No. 12.ogg' },
  intro: 'A short étude that asks for weight as well as speed: the right-hand melody is projected in octaves over widely spaced left-hand figures. Listen for the quieter middle and the heavier return of the opening.',
  sections: [
    { t: 0, label: 'A · octave melody' },
    { t: 36, label: 'B · quieter middle' },
    { t: 64, label: 'A′ · intensified return' },
    { t: 104, label: 'Closing cadence' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Octaves over a wide bass', text: 'The right hand projects the melody in octaves while the left covers wide distances beneath it. Listen for the singing top line rather than treating every note in the accompaniment as equally important.', evidence: 'D♯ minor estimated enharmonically as E♭ minor, r=0.94 at 0:00; 4.0–4.8 onsets/s at 0:00–0:10 support the continuous accompanying motion.' },
    { t: 20, kind: 'life', title: 'A Moscow-trained pianist', text: 'Scriabin graduated from the Moscow Conservatory as a pianist in 1892. Rachmaninoff was a fellow student; Scriabin’s first published works likewise centred on the piano.' },
    { t: 36, kind: 'music', title: 'A quieter middle', text: 'The volume drops and the harmony moves towards F♯ major. The hands still have plenty to do, but the melody no longer presses forward with the opening’s weight.', evidence: 'Boundary 0:36, strength 0.98; −9.3 dB at 0:30 falls to −19.3 at 0:35; F♯ major estimates at 0:35–0:40.' },
    { t: 54, kind: 'life', title: 'Belyayev backs the composer', text: 'The publisher and patron Mitrofan Belyayev began supporting Scriabin in 1894. He published the twelve études of Op. 8 in 1895, helping turn a young pianist’s manuscripts into a public catalogue.' },
    { t: 70, kind: 'form', title: 'The opening returns heavier', text: 'The D♯ minor material returns with greater force. The accompaniment becomes denser beneath the octave melody; the reprise increases the physical demands instead of merely repeating the opening.', evidence: 'Boundaries 1:00 and 1:04; loudest window at 1:05, −5.5 dB; D♯ minor/E♭ minor estimates at 1:05–1:25 and 5.2–5.4 onsets/s, against 4.0–4.8 at the opening.' },
    { t: 90, kind: 'world', title: 'Students at the White House', text: 'Awadagin Pratt gave this performance at the White House Classical Music Student Workshop Concert on 4 November 2009. The recording comes from the White House’s video of the event.' },
    { t: 108, kind: 'music', title: 'The attacks spread out', text: 'The closing gestures become more widely spaced. After the dense accompaniment, the piano’s struck sound is allowed to decay instead of being immediately renewed by another running figure.', evidence: 'Boundary 1:44, strength 0.62; onsets fall from 4.6/s at 1:40 to 3.0 at 1:45 and 2.2 at 1:50; −9.0 dB at 1:40 falls to −27.2 at 1:55.' },
  ],
};
