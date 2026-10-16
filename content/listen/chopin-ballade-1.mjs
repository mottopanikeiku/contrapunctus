// Historical and score context:
// https://www.laphil.com/works/ballade-no-1-in-g-minor-op-23
// https://chopin2020.pl/en/compositions/27/ballade-in-g-minor-op.-23
// https://chopin.nifc.pl/en/chopin/kalendarium/123_lata-adaptacji-18311835/712
// https://www.bbc.co.uk/radio3/classical/chopinexperience/timeline/timeline.shtml
export default {
  id: 'chopin-ballade-1',
  composer: 'chopin',
  order: 1,
  work: 'Ballade No. 1, Op. 23',
  movement: 'Largo — Moderato',
  year: '1831–35',
  key: 'G minor',
  forces: 'Piano',
  performers: 'Frank Lévy',
  recorded: 'c. 2014',
  source: { file: 'File:Chopin - Ballade No. 1 in G minor, Op. 23 (Frank Levy).flac' },
  intro: 'Chopin gives the piano the title of a narrative poem without supplying a plot. Two themes return in altered proportions, and a fast coda overturns the measured pace of the opening.',
  sections: [
    { t: 0, label: 'Largo · introduction' },
    { t: 30, label: 'Moderato · first theme' },
    { t: 200, label: 'Lyrical second theme' },
    { t: 272, label: 'Development and transformation' },
    { t: 420, label: 'Expanded lyrical return' },
    { t: 454, label: 'First theme recalled' },
    { t: 486, label: 'Presto con fuoco · coda' },
    { t: 564, label: 'Interruptions and final descent' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Octaves before a home key', text: 'The two hands rise together in octaves rather than dividing into melody and accompaniment. A pause and a suspended dissonance delay the arrival of G minor; the introduction announces a speaker before establishing a regular pace.', evidence: 'opening rise to −15.9 dB at 0:05, then −40.6 at 0:10; boundary 0:12 (0.52); G minor becomes secure only at 0:25–0:35; octave introduction and suspended ending are score features' },
    { t: 30, kind: 'form', title: 'The first theme settles', text: 'A quiet G minor melody begins over a swaying accompaniment. The metre is 6/4: six quarter-note beats grouped into two broad halves. That generous span lets the melody lean across the beat without losing its underlying movement.', evidence: 'G minor r=0.97 at 0:30 and 0.96 at 0:35, with G–B♭–D chroma; quiet −32.1 to −33.5 dB after the introduction; metre from the score' },
    { t: 68, kind: 'life', title: 'Leaving Warsaw behind', text: 'Chopin left Poland in November 1830, shortly before the uprising against Russian rule. After months in Vienna he settled in Paris in 1831. He never returned to Poland; Polish émigrés remained an important part of his Parisian circle.' },
    { t: 108, kind: 'listen', title: 'Keep hearing the singing line', text: 'Listen for the melody through the increasing keyboard activity. The pianist has to distinguish its longer notes from the faster material around them; equal weight on every note would change the phrase into a succession of attacks.', evidence: 'boundary 1:46 (0.28); onset density rises to 3.8/s at 1:50, then recedes to 1.0/s at 2:00; general voicing instruction during the first-theme expansion' },
    { t: 148, kind: 'music', title: 'The opening restraint breaks', text: 'The sound becomes much louder and the keyboard writing more active. Chopin expands the first theme’s surroundings before introducing the contrasting tune; this surge is still part of the opening argument, not the final coda.', evidence: '−26.2 dB at 2:05 rises to −7.8 at 2:30 and −6.5 at 2:40; brightness reaches 1,324 Hz and onset density 4.4/s at 2:35; G minor persists' },
    { t: 186, kind: 'listen', title: 'Make room for another tune', text: 'The rush subsides and the attacks become widely spaced. Listen for the longer, more sustained second theme that follows this release; its first appearance is quiet enough to make its later transformation conspicuous.', evidence: 'strongest boundary 3:06 (1.00); −12.7 dB at 3:05 falls to −27.8 at 3:15; onsets fall to 0.4–0.8/s at 3:10–3:20; another boundary at 3:20 (0.43)' },
    { t: 220, kind: 'life', title: 'A room above Paris', text: 'In October 1831 Chopin described his new Paris room at 27 Boulevard Poissonière, with its view from Montmartre to the Panthéon. His letters from those first months mix excitement about the opera and musicians with loneliness and news of the defeated Polish uprising.' },
    { t: 260, kind: 'world', title: 'A ballade without words', text: 'The First Ballade appeared in print in 1836. Its title borrows a literary genre for solo piano, but Chopin supplied no narrative programme: thematic returns can suggest recollection and reversal without identifying characters or events.' },
    { t: 292, kind: 'music', title: 'Familiar material gathers weight', text: 'The middle of the piece begins quietly, then grows in force. Listen for earlier material gaining a denser accompaniment and a broader register: development here changes the scale of an idea as well as its harmony.', evidence: 'boundary 4:32 (0.55); −23.5 dB at 4:35 and −23.7 at 4:45 rise to −6.5 at 5:00; E-centred pitch collection replaces the earlier E♭ region; brightness 441→980 Hz' },
    { t: 325, kind: 'music', title: 'The lyrical theme enlarged', text: 'The singing material now occupies a much louder, fuller texture. Its broad phrasing has survived the change: the challenge is to hear a sustained line inside chords and passagework that could otherwise dominate it.', evidence: 'loud plateau from 5:00 to 5:40, −6.5 to −5.3 dB; prominent E/A/B pitch classes and brightness up to 1,050 Hz; transformed second-theme passage identified from the score, without treating the E major estimate as its tonic' },
    { t: 360, kind: 'world', title: 'Schumann recognises a favourite', text: 'When Chopin visited Leipzig in 1836, Schumann told him how highly he valued the new G minor Ballade. In Schumann’s account of their conversation, Chopin replied that it was his own favourite too. The exchange is evidence of their shared judgement, not of a hidden literary plot.' },
    { t: 395, kind: 'music', title: 'Another crest, another release', text: 'A forceful passage gives way to lighter, faster-moving detail. Notice that speed of attack and loudness separate here: the piano can become busier while the sound itself grows less heavy.', evidence: 'boundary 6:24 (0.30); −4.9 dB at 6:25 falls to −13.5 at 6:35 while onset density rises from 2.8 to 4.2/s; centroid rises from 1,109 to 1,287 Hz' },
    { t: 430, kind: 'music', title: 'The broad theme comes back', text: 'The lyrical theme returns with greater weight than at its first appearance. E♭ major is restored, but the quiet song has become a large statement; the order of return puts this theme before the G minor melody.', evidence: 'E♭ major r=0.91 at 7:15 and 0.90 at 7:20, E♭ bass and E♭–B♭–G chroma; −9.2 to −9.7 dB, compared with −23.5 at 4:00 in the first statement; score returns the second theme before the first' },
    { t: 465, kind: 'form', title: 'The first melody recalled', text: 'The first theme has returned in G minor, quieter and compressed after the broad lyrical statement. Its recollection does not restore the opening’s equilibrium: the harmony is already preparing the final fast section.', evidence: 'boundary 7:34 (0.35); G minor r=0.95 at 7:35, then boundary 7:42 (0.32); −18.5 dB at 7:35 falls to −27.8 at 7:45, with D-centred harmony through 8:00' },
    { t: 490, kind: 'form', title: 'Presto con fuoco', text: 'The coda changes the gait as well as the speed. Chopin replaces the six-beat span with a driving two-beat metre; leaps, chords and running figures now carry the music towards its ending instead of reopening the themes.', evidence: 'boundary 8:06 (0.32); −24.7 dB at 8:00 rises to −7.3 at 8:10; onsets increase to 3.4–4.0/s at 8:10–8:25; score marks the coda Presto con fuoco in cut time' },
    { t: 525, kind: 'listen', title: 'Do not flatten the accents', text: 'Throughout the coda, follow the accented notes rather than counting every fast note equally. The pianist’s leaps and displaced emphases disturb the surface while the larger two-beat measure keeps the passage from becoming rhythmically shapeless.', evidence: 'continuous active coda at 8:25–9:05, mostly 3.4–4.0 onsets/s and −6.7 to −10.6 dB; score-based listening instruction within the established coda, not a new event' },
    { t: 564, kind: 'music', title: 'The rush is interrupted', text: 'The continuous drive breaks into forceful gestures and quiet gaps. Chopin makes the pauses part of the ending: the next attack has to restart the momentum rather than simply continue it.', evidence: 'boundary 9:24 (0.36); −8.8 dB at 9:20 falls to −24.3 at 9:25; −10.1 at 9:35 then −32.8 at 9:40; onset density 0.2–1.2/s across 9:25–9:45' },
    { t: 595, kind: 'music', title: 'The last descent', text: 'The final keyboard rush collapses into the closing chords. G minor is the destination, not a major-key consolation; after the last attack, the resonance is allowed to decay.', evidence: '−7.1 dB and 3.6 onsets/s at 9:50, then boundary 10:00 (0.60); no detected attacks at 10:05–10:10 and −53.2 dB at 10:10; final G minor comes from the score, since the report mislabels this bass-heavy ending G major' },
  ],
};
