// Tour copy and destinations are shared by the static Guide, search and the lazy runner.
const step = (page, selector, title, text, action, advance = 'next') => ({ page, selector, title, text, ...(action ? { action } : {}), advance });
const hall = 'hall.html#beethoven-5-first';
const satie = 'hall.html#satie-gymnopedie-1';
const compare = 'compare/rachmaninoff-prelude-c-sharp-minor.html';
const thread = 'influence.html#thread-dies-irae';
const death = 'influence.html#edge-gregorian-chant--rachmaninoff-isle-dies-irae';
const map = 'atlas-map.html?year=1900#c-mahler';
const journey = 'journeys/vienna-1900.html';
const chapter = 'composers/mahler.html';

export const tours = [
  { id: 'hall-welcome', title: 'Your first minute in the Hall', promise: 'Start a concert and take the music with you.', duration: '≈ 1 min', feature: 'Play · programme · now playing', steps: [
    step(satie, '.t-play', 'Begin with Satie', 'Press Play to hear the First Gymnopédie. The next recording follows automatically. Space pauses; N and P change pieces when no control has focus.', 'play', 'on-event'),
    step(satie, '.views [data-view="score"]', 'Watch the score', 'Choose Score, then touch a bar to hear it; the gold highlight follows the recording.', 'click', 'on-click'),
    step(satie, '.t-prog', 'Choose your programme', 'Open the programme to choose an evening or a single recording. The full concert follows composers’ birth order, keeping movements of a work together.', 'click', 'on-click'),
    step(satie, '.prog-close', 'Return to the music', 'Close the programme; the music keeps playing. The question-mark button brings you back to this tour.', 'click', 'on-click'),
    step('guide.html#hall-welcome', '.np', 'Take the music with you', 'This player stays with you across the site. Open a chapter or lesson and keep listening.'),
  ] },
  { id: 'score-satie', title: 'Read a score by listening', promise: 'Watch Satie’s Gymnopédie unfold on the page.', duration: '≈ 1 min', feature: 'Score · coloured notes', steps: [
    step(satie, '.t-play', 'Let the piano begin', 'Press Play to start the First Gymnopédie.', 'play', 'on-event'),
    step(satie, '.views [data-view="score"]', 'Choose Score', 'Follow the gold highlight across the printed bars.', 'click', 'on-click'),
    step(satie, '.sheet-cap', 'Find the score’s source', 'The caption names the score and explains the timing. Timings are aligned automatically and await checking by ear. Touch a bar to hear it.'),
    step(satie, '.views [data-view="notes"]', 'Try Notes', 'Choose Notes to see each voice in a different colour, with pitches and lengths taken from the score.', 'click', 'on-click'),
  ] },
  { id: 'hall-views', title: 'Five ways to see the music', promise: 'Explore Beethoven’s Fifth through its score, instruments and returning themes.', duration: '≈ 2 min', feature: 'Score · Notes · Orchestra · Form · Sound', steps: [
    step(hall, '.t-play', 'Start Beethoven’s Fifth', 'Press Play; you can change views while the recording continues.', 'play', 'on-event'),
    step(hall, '.views [data-view="score"]', 'Score: the printed page', 'Choose Score to follow the gold highlight through the bars.', 'click', 'on-click'),
    step(hall, '.views [data-view="notes"]', 'Notes: separate the voices', 'Choose Notes to see the score’s pitches and note lengths as coloured lines.', 'click', 'on-click'),
    step(hall, '.views [data-view="orchestra"]', 'Orchestra: the players', 'Choose Orchestra to see each instrument group light up as it plays. You can try this view with Boléro too.', 'click', 'on-click'),
    step(hall, '.views [data-view="form"]', 'Form: hear the returns', 'Choose Form to see the sections and the arcs joining returning themes. Touch a section to hear its opening.', 'click', 'on-click'),
    step(hall, '.views [data-view="sound"]', 'Sound: inside the recording', 'Choose Sound to see the recording’s frequencies and loudness, alongside an estimate of its harmony.', 'click', 'on-click'),
    step(hall, '.widen', 'Fill the Hall', 'Press F or use this corner button to enlarge the view; press F again to return.', 'key:F', 'on-event'),
    step('guide.html#hall-views', '.np', 'Keep listening as you read', 'Open a chapter or lesson while the concert continues; this bar lets you pause from any page.'),
  ] },
  { id: 'hall-joins', title: 'Hear how a section turns', promise: 'Hear the silence before Beethoven’s horn call and see how the score prepares it.', duration: '≈ 2 min', feature: 'The joins · timeline diamonds · sources', steps: [
    step(hall, '[data-tab="joins"]', 'Open The joins', 'The joins explain the turns between sections: a silence, a new chord, a change of instrument.', 'click', 'on-click'),
    step(hall, '.tab-joins .join-again', 'Hear the first join', 'Replay the passage leading into the silence before the horn call.', 'click', 'on-click'),
    step(hall, '.tl-joins button', 'Find the diamonds', 'Select a diamond on the timeline to hear the passage around a join.'),
    step(hall, '[data-tab="live"]', 'Return to As it plays', 'Choose As it plays for notes that follow the recording, including a card at each join.', 'click', 'on-click'),
    step(hall, '.cue-how summary', 'Open How we know', 'Open the note’s sources to see what comes from the score, the recording or a historical account.', 'click', 'on-click'),
  ] },
  { id: 'recording-sources', title: 'Find a recording’s story', promise: 'Find the session, the source and a citation you can use.', duration: '≈ 2 min', feature: 'Recording details · other performances · downloads', steps: [
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '[data-tab="piece"]', 'Open This recording', 'Find the performers, session, original disc and digital transfer in the recording tab.', 'click', 'on-click'),
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '.dossier', 'Read the evidence labels', 'Documented facts have a cited source; inferred ones are reasoned from evidence. Disputed entries give alternatives, and unknown dates stay unknown.'),
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '.others-l', 'Find other performances', 'Open a comparison of the same music; each card identifies its performance and transfer.'),
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '.tab-piece .cite', 'Cite this recording', 'Copy the citation with the performer, recording source and Hall link.'),
    step('sources.html#downloads', '#downloads', 'Take the sources with you', 'Download the recording register as CSV or JSON, with separate fields for facts, evidence labels, sources and alternatives.'),
  ] },
  { id: 'compare-switching', title: 'Change hands, keep the phrase', promise: 'Switch between Rachmaninoff’s 1919 and 1928 recordings mid-phrase.', duration: '≈ 2 min', feature: 'Compare · tempo maps · short passages', steps: [
    step(compare, '[data-cmp-select="rachmaninoff-prelude-c-sharp-minor"]', 'Choose the 1919 recording', 'Select the Edison performance: its clock is the reference for this comparison.', 'click', 'on-click'),
    step(compare, '[data-cmp-play]', 'Start the recording', 'Press Play at the listening desk; switching cards will take you to the matching place in another recording.', 'click', 'on-click'),
    step(compare, '[data-cmp-seek]', 'Move into the phrase', 'Move to 42 seconds in the reference recording, beyond the opening lead-in.', 'seek:42', 'on-event'),
    step(compare, '[data-cmp-select="rachmaninoff-prelude-c-sharp-minor-victor-1928"]', 'Switch to 1928', 'Choose the electrical Victor remake and hear the phrase continue.', 'click', 'on-click'),
    step(compare, '.cmp-tempo-svg', 'Read the tempo map', 'Above 1×, the performer takes longer over the same music than the reference; below it, less time.'),
    step(compare, '[data-cmp-passage="1"]', 'Compare a short passage', 'Choose a passage to hear it in each available performance, one after another.'),
  ] },
  { id: 'influence-thread', title: 'Follow the Dies irae', promise: 'Trace the chant’s path to Rachmaninoff’s Isle of the Dead.', duration: '≈ 2 min', feature: 'Influence · musical threads · sources', steps: [
    step(thread, '.iw-thread-chips a[href="#thread-dies-irae"]', 'One tune, several afterlives', 'Choose Dies irae to trace the chant through the web; each gold line opens a connection and its sources.'),
    step(thread, '[data-passage="thread"] [data-passage-play]', 'Hear the chant’s outline', 'Play the synthesised opening; the caption explains the chosen rhythm and tempo.', 'click', 'on-click'),
    step(thread, '.iw-journey a[href="#edge-gregorian-chant--rachmaninoff-isle-dies-irae"]', 'Follow it to Rachmaninoff', 'Open the Isle of the Dead connection to see where the chant enters Rachmaninoff’s music.', 'click', 'on-click'),
    step(death, '.iw-evidence', 'Read the connection’s history', 'The evidence note explains how we know Rachmaninoff used the chant.'),
    step(death, '.iw-sources', 'Read and share', 'Open a source to read further, or copy the page address to share this connection.'),
  ] },
  { id: 'evidence-room', title: 'From Vivaldi’s violin to Bach’s organ', promise: 'Hear how Bach transcribes Vivaldi’s opening.', duration: '≈ 1 min', feature: 'Influence · playable score examples', steps: [
    step('influence.html#edge-vivaldi--bach-bwv593', '.iw-works', 'Put the works side by side', 'Vivaldi’s Concerto RV 522 becomes Bach’s organ transcription BWV 593.'),
    step('influence.html#edge-vivaldi--bach-bwv593', '[data-passage="from"] [data-passage-play]', 'Hear the violin line', 'Play the first violin’s opening two bars in A minor, using synthesised sound.', 'click', 'on-click'),
    step('influence.html#edge-vivaldi--bach-bwv593', '[data-passage="to"] [data-passage-play]', 'Hear the organ line', 'Now play Bach’s uppermost line; the caption names the omitted voices and links to the full score.', 'click', 'on-click'),
    step('influence.html#edge-vivaldi--bach-bwv593', '.iw-sources', 'Read the full scores', 'The sources take you to the works behind these short examples.'),
  ] },
  { id: 'map-mahler', title: 'Find a place in time', promise: 'Explore Vienna in 1900, then follow Mahler from place to place.', duration: '≈ 2 min', feature: 'Map · years · composers · cities', steps: [
    step(map, '#am-year', 'Set the year', 'The Map opens at 1900; drag the year slider to move through time.'),
    step(map, '[name="composer"]', 'Follow Mahler', 'Mahler is selected; the numbered list gives dates and sources for each place on his map.'),
    step(map, '.am-recordings [data-map-play]', 'Hear music from a place', 'Play a work linked to this place, or choose another recording by the composer.', 'click', 'on-click'),
    step(map, '[data-action="encounters"]', 'Explore Vienna’s composers', 'Open Encounters to find composers whose dates overlap in the selected city.', 'click', 'on-click'),
    step(map, '.am-card-content', 'Read the city’s records', 'Explore the dates and sources, then use Find a city to visit another place.'),
  ] },
  { id: 'vienna-journey', title: 'Let a story lead the listening', promise: 'Explore Vienna in 1900 through music and paintings.', duration: '≈ 1 min', feature: 'Guided Journeys · music · paintings · sources', steps: [
    step(journey, '[data-j-play]', 'Begin Vienna 1900', 'Press Begin; the music carries you from station to station, and you can pause to read or look at a painting.', 'click', 'on-click'),
    step(journey, '.j-station.is-current .j-narration', 'Read beside the music', 'Each station pairs a recording with a story and an exhibit; short notes appear as the music plays.'),
    step(journey, '.j-station.is-current .j-sources summary', 'Open the sources', 'Find this excerpt’s times, its sources and a link to the full recording in the Hall.', 'click', 'on-click'),
    step(journey, '[data-j-next]', 'Turn to the next station', 'Choose Next or a numbered station; after this tour, the arrow keys work too. Your place is saved for next time.', 'click', 'on-click'),
  ] },
  { id: 'composer-citation', title: 'Read, trace, cite', promise: 'Explore Mahler’s chapter, follow his borrowings and cite the page.', duration: '≈ 2 min', feature: 'Composer chapters · influences · reading · citations', steps: [
    step(chapter, '.toc', 'Find your way round', 'Use the contents to jump to Mahler’s life, music, works, places or sources.'),
    step(chapter + '#inheritance', '#inheritance', 'Follow the influences', 'Open a connection in the Web of Influence to read its story and sources.'),
    step(chapter + '#further-reading', '#further-reading', 'Choose something to read', 'Each book, catalogue and article has a short note to help you choose.'),
    step(chapter + '#cite', '#cite summary', 'Cite this page', 'Open a Chicago reference or BibTeX entry for this page.', 'click', 'on-click'),
    step(chapter + '#cite', '[data-copy="cite-chicago"]', 'Copy the citation', 'Copy the Chicago citation and set the access date to the day you read the page.', 'click', 'on-click'),
  ] },
  { id: 'glossary-search', title: 'Find the word you heard', promise: 'Hear sonata form, open a definition and search the Atlas.', duration: '≈ 1 min', feature: 'Glossary · quick definitions · search', steps: [
    step('glossary.html#sonata-form', '#sonata-form h2', 'Put a term to music', 'Explore sonata form through Beethoven’s Fifth, with links to related terms and passages.'),
    step('glossary.html#sonata-form', '#sonata-form [data-play-id]', 'Hear the example', 'Choose Hear it to play the passage described in the caption.', 'click', 'on-click'),
    step('workshop.html#sonata-form', 'a[data-term]', 'Open a quick definition', 'Hover over an underlined term, reach it with Tab or tap it to open a definition; follow its link for more.'),
    step('guide.html#glossary-search', '.masthead', 'Search from any page', 'Use Search or press / to find composers, works, recordings, ideas and guide lessons. On a small screen, look inside Menu.'),
  ] },
  { id: 'return-lab', title: 'Hear what changes on return', promise: 'Compare Beethoven’s exposition and recapitulation, bar by bar.', duration: '≈ 2 min', feature: 'Return Lab · paired passages · bar charts', steps: [
    step('return-lab/beethoven-exposition-recapitulation.html', '[data-rl-play="A"]', 'Hear the first statement', 'Choose A to hear the marked passage from the exposition.', 'click', 'on-click'),
    step('return-lab/beethoven-exposition-recapitulation.html', '[data-rl-play="B"]', 'Hear its return', 'Choose B to hear the corresponding passage as Beethoven brings the music towards the home key.', 'click', 'on-click'),
    step('return-lab/beethoven-exposition-recapitulation.html', '[data-rl-canvas]', 'Read the bar grid', 'Matching bars share a column; colours separate the voices, and hatched gaps mark bars with no counterpart.'),
    step('return-lab/beethoven-exposition-recapitulation.html', '.rl-evidence', 'Compare score and performance', 'Read Beethoven’s written changes beside the time each bar takes in this performance.'),
  ] },
];

export const paths = [
  { title: 'New to this music', intro: 'Start with a piece you can hear.', lessons: ['hall-welcome', 'score-satie', 'hall-joins', 'influence-thread', 'vienna-journey'] },
  { title: 'I play or read music', intro: 'Follow the parts and compare performances.', lessons: ['hall-views', 'compare-switching', 'return-lab', 'evidence-room', 'glossary-search'] },
  { title: 'Historian or archivist', intro: 'Find the story behind a source.', lessons: ['recording-sources', 'map-mahler', 'influence-thread', 'composer-citation', 'compare-switching'] },
];
