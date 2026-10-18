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
  { id: 'hall-welcome', title: 'Your first minute in the Hall', promise: 'Start a concert, choose a piece, and take the music with you.', duration: '≈ 1 min', feature: 'The concert · programme · now playing', steps: [
    step(satie, '.t-play', 'Begin with Satie', 'Start the First Gymnopédie if it is paused. The concert continues from one recording to the next. Space pauses; N and P move between pieces when no control has focus.', 'play', 'on-event'),
    step(satie, '.views [data-view="score"]', 'Watch the written music', 'Choose Score. The gold bar follows this recording; touch a bar to hear it. Automatic alignment is a listening aid, not a claim of note-exact timing.', 'click', 'on-click'),
    step(satie, '.t-prog', 'Choose your own programme', 'Open the programme to choose any recording. The concert is ordered by composers’ births; movements of one work stay together.', 'click', 'on-click'),
    step(satie, '.prog-close', 'Return to the music', 'Close the programme without stopping the recording. The question-mark button always brings you back to this tour.', 'click', 'on-click'),
    step('guide.html#hall-welcome', '.np', 'The music comes with you', 'This bar belongs to the whole site, not one page. Visited pages can be read again offline after caching; streamed recordings still need a connection. Your last recording is remembered, paused, on a return visit.'),
  ] },
  { id: 'score-satie', title: 'Read a score by listening', promise: 'Hear the score light up as Satie’s Gymnopédie plays.', duration: '≈ 1 min', feature: 'Engraved score · note roll', steps: [
    step(satie, '.t-play', 'Let the piano begin', 'Start the First Gymnopédie. This is a recording of Satie’s music, not a recording of Satie himself.', 'play', 'on-event'),
    step(satie, '.views [data-view="score"]', 'Choose Score', 'The engraved page preserves the notation. The moving gold bar follows the performance; the alignment has not yet been checked by ear.', 'click', 'on-click'),
    step(satie, '.sheet-cap', 'Read the qualification', 'The caption identifies the score and the timing method. You can touch a bar on the page to move the recording there.'),
    step(satie, '.views [data-view="notes"]', 'Try Notes', 'The note roll separates the voices by colour. It follows written pitches rather than guessing notes from the sound.', 'click', 'on-click'),
  ] },
  { id: 'hall-views', title: 'Five ways to see the music', promise: 'Follow Beethoven’s Fifth from score to orchestra, form and sound.', duration: '≈ 2 min', feature: 'Score · Notes · Orchestra · Form · Sound · F', steps: [
    step(hall, '.t-play', 'Start Beethoven’s Fifth', 'Start the recording if it is paused. These views share one recording and one position: changing the view never restarts the music.', 'play', 'on-event'),
    step(hall, '.views [data-view="score"]', 'Score: the printed page', 'Choose Score to follow the engraved bars. A gold highlight follows the automatically aligned recording.', 'click', 'on-click'),
    step(hall, '.views [data-view="notes"]', 'Notes: separate the voices', 'Choose Notes to see the written pitches as coloured lines. Their lengths follow the score, not measured releases in the recording.', 'click', 'on-click'),
    step(hall, '.views [data-view="orchestra"]', 'Orchestra: who is playing?', 'Choose Orchestra. Instrument groups glow while their parts sound. Boléro also has an orchestra view, with changes placed by passage.', 'click', 'on-click'),
    step(hall, '.views [data-view="form"]', 'Form: hear the returns', 'Choose Form. Sections stretch along the recording; arcs connect returning material. Touch a section to hear its beginning.', 'click', 'on-click'),
    step(hall, '.views [data-view="sound"]', 'Sound: the recording itself', 'Choose Sound. The spectrogram measures frequency and loudness in the recording; the heard-harmony estimate is not a transcription.', 'click', 'on-click'),
    step(hall, '.widen', 'Fill the Hall', 'Press F, or use this corner button, to enlarge the current view. Press F again to return. Escape closes this tour.', 'key:F', 'on-event'),
    step('guide.html#hall-views', '.np', 'Keep listening as you read', 'The same player continues here. Open another chapter or lesson without stopping the concert; pause from this bar whenever you want.'),
  ] },
  { id: 'hall-joins', title: 'Hear how a section turns', promise: 'Hear the silence before Beethoven’s horn call, then inspect the evidence.', duration: '≈ 2 min', feature: 'As it plays · The joins · ◆ · How we know', steps: [
    step(hall, '[data-tab="joins"]', 'Open The joins', 'The joins explain how one section becomes another: a silence, a pivot, a change of texture. Each account names what you can hear.', 'click', 'on-click'),
    step(hall, '.tab-joins .join-again', 'Hear the first join', 'Replay the passage around the silence before the horn call. The button begins before the boundary so you hear the preparation.', 'click', 'on-click'),
    step(hall, '.tl-joins button', 'Find the diamonds', 'Each diamond marks a join on the timeline. Select one to hear the surrounding passage rather than only the instant of change.'),
    step(hall, '[data-tab="live"]', 'Return to As it plays', 'Live notes follow the recording. The join card appears when the music reaches its boundary.', 'click', 'on-click'),
    step(hall, '.cue-how summary', 'Ask how we know', 'Open this note’s evidence. Score-aligned, measured, documented and general descriptions make different claims about precision.', 'click', 'on-click'),
  ] },
  { id: 'recording-sources', title: 'Check a recording’s origins', promise: 'Check where a recording comes from, what is uncertain, and how to cite it.', duration: '≈ 2 min', feature: 'This recording · dossiers · other performances · downloads', steps: [
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '[data-tab="piece"]', 'Open This recording', 'The recording tab separates the work from this particular performance, carrier and digital transfer.', 'click', 'on-click'),
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '.dossier', 'Read the status of each field', 'Documented means a cited source states it. Inferred means reasoned from evidence. Disputed retains alternatives. An unknown date is left unknown.'),
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '.others-l', 'Find other performances', 'These links open comparisons of the same music. A different transfer or remake is not automatically the same performance.'),
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '.tab-piece .cite', 'Cite this recording', 'Keep the performer, recording source and Hall link together. A composition’s date is not its recording date.'),
    step('sources.html#downloads', '#downloads', 'Take the evidence with you', 'Download the recording register as CSV or JSON. Values, evidence statuses, source locators and alternatives remain separate fields.'),
  ] },
  { id: 'compare-switching', title: 'Change hands, keep the phrase', promise: 'Switch from Rachmaninoff 1919 to 1928 mid-phrase.', duration: '≈ 2 min', feature: 'Compare · tempo maps · passages', steps: [
    step(compare, '[data-cmp-select="rachmaninoff-prelude-c-sharp-minor"]', 'Choose the 1919 reference', 'This Edison performance supplies the shared timeline. Select it before starting; the other cards identify later recordings and their sources.', 'click', 'on-click'),
    step(compare, '[data-cmp-play]', 'Start the reference', 'Press Play at the listening desk. When you change performer, the comparison maps the current musical position into the other recording.', 'click', 'on-click'),
    step(compare, '[data-cmp-seek]', 'Move into the phrase', 'Move to 42 seconds in the reference, away from the opening lead-in. The map is automatic: matched position does not mean note-exact correspondence.', 'seek:42', 'on-event'),
    step(compare, '[data-cmp-select="rachmaninoff-prelude-c-sharp-minor-victor-1928"]', 'Switch to 1928', 'Choose the electrical Victor remake. Listen for the phrase continuing at its matched position, not at the same number of elapsed seconds.', 'click', 'on-click'),
    step(compare, '.cmp-tempo-svg', 'Read the tempo map', 'Above one means the performer takes longer over the corresponding music than the reference. The line describes local time ratios, not absolute tempo markings.'),
    step(compare, '[data-cmp-passage="1"]', 'Compare a marked passage', 'The passage buttons play the same span through the available performers, then stop. Try one now, or finish the tour and continue switching freely.'),
  ] },
  { id: 'influence-thread', title: 'Follow the Dies irae', promise: 'Trace the Dies irae from chant to Rachmaninoff.', duration: '≈ 2 min', feature: 'Influence · thread chips · evidence · deep links', steps: [
    step(thread, '.iw-thread-chips a[href="#thread-dies-irae"]', 'One tune, several afterlives', 'The Dies irae chip selects a thread through the web. Portraits are people; the gold connections are specific, sourced relationships.'),
    step(thread, '[data-passage="thread"] [data-passage-play]', 'Hear the chant’s outline', 'Play the engraved opening. This is synthesised notation, not a historical recording; the caption explains the editorial rhythm and tempo.', 'click', 'on-click'),
    step(thread, '.iw-journey a[href="#edge-gregorian-chant--rachmaninoff-isle-dies-irae"]', 'Follow it to Rachmaninoff', 'Open the Isle of the Dead connection. Thread stops are dated encounters or works, not a claim that every composer borrowed from the previous stop.', 'click', 'on-click'),
    step(death, '.iw-evidence', 'Distinguish claim from proof', 'Read the evidence status and its qualification. A familiar melodic outline is not, by itself, proof of a documented encounter.'),
    step(death, '.iw-sources', 'Open the source trail', 'These references support this connection. The address now begins #edge-; a portrait uses #node-, and a complete motif thread uses #thread-. Copy the address to share the same view.'),
  ] },
  { id: 'evidence-room', title: 'Compare an inheritance', promise: 'Put Vivaldi’s violin line beside Bach’s organ transcription.', duration: '≈ 1 min', feature: 'Influence · playable evidence room', steps: [
    step('influence.html#edge-vivaldi--bach-bwv593', '.iw-works', 'Source and transformation', 'This connection identifies Vivaldi’s RV 522 and Bach’s BWV 593. The claim concerns a particular transcription, not a general resemblance.'),
    step('influence.html#edge-vivaldi--bach-bwv593', '[data-passage="from"] [data-passage-play]', 'Hear the violin line', 'Play the source’s opening two bars. This synthesised example isolates the first violin in the original A minor.', 'click', 'on-click'),
    step('influence.html#edge-vivaldi--bach-bwv593', '[data-passage="to"] [data-passage-play]', 'Hear the organ line', 'Now play Bach’s uppermost line. The caption states which inner voices have been omitted; open the score source to inspect the fuller texture.', 'click', 'on-click'),
    step('influence.html#edge-vivaldi--bach-bwv593', '.iw-sources', 'Keep the comparison accountable', 'The sources belong to this connection. Follow their locators before using the example as evidence in your own writing.'),
  ] },
  { id: 'map-mahler', title: 'Find a place in time', promise: 'Find who was in Vienna in 1900, then follow Mahler’s places.', duration: '≈ 2 min', feature: 'Map · year slider · composer routes · city lists', steps: [
    step(map, '#am-year', 'Set the year', 'The Map opens here at 1900. Drag the year slider to change the visible lives; the recorded route is not a reconstruction of every journey.'),
    step(map, '[name="composer"]', 'Follow Mahler', 'Mahler is selected. The numbered list records places with dates and sources; the map connects records, not known roads.'),
    step(map, '.am-recordings [data-map-play]', 'Listen from a place', 'These buttons use the shared player. A place’s exact work matches are distinguished from other recordings by that composer.', 'click', 'on-click'),
    step(map, '[data-action="encounters"]', 'Who overlapped in Vienna?', 'Open Encounters for the selected city. Overlapping dates establish a possibility of contact, not proof that the two people met.', 'click', 'on-click'),
    step(map, '.am-card-content', 'Read the city’s records', 'Check the dates and sources beside each possible overlap. Use Find a city to compare another place, or Follow a composer to return to a life.'),
  ] },
  { id: 'vienna-journey', title: 'Let a story lead the listening', promise: 'Follow the Vienna 1900 journey through music, paintings and sources.', duration: '≈ 1 min', feature: 'Journeys · continuous stations · return visits', steps: [
    step(journey, '[data-j-play]', 'Begin Vienna 1900', 'Begin starts the first excerpt. The stations follow the recordings continuously; pause whenever you want more time with a painting or paragraph.', 'click', 'on-click'),
    step(journey, '.j-station.is-current .j-narration', 'Read beside the music', 'The current station pairs a particular recording with narration and an exhibit. Listening notes change as the excerpt plays.'),
    step(journey, '.j-station.is-current .j-sources summary', 'Check this station’s sources', 'Open the recording and source details. The excerpt’s start and end are given beside a link to the complete recording in the Hall.', 'click', 'on-click'),
    step(journey, '[data-j-next]', 'Turn to the next station', 'Use Next, the numbered rail or the arrow keys outside this tour. Your place is saved for a later visit; closing a tour does not stop the music.', 'click', 'on-click'),
  ] },
  { id: 'composer-citation', title: 'Read, trace, cite', promise: 'Find Mahler’s key ideas and sources, then cite a page.', duration: '≈ 2 min', feature: 'Atlas · composer chapters · inheritance · reading · citation', steps: [
    step(chapter, '.key-ideas', 'Begin with the key ideas', 'These statements introduce the chapter’s listening vocabulary. Use the chapter contents to move between the life, works, places and sources.'),
    step(chapter + '#inheritance', '#inheritance', 'Trace what came in', 'Inheritance links lead to specific connections in the Web of Influence. Each connection keeps its own evidence and qualification.'),
    step(chapter + '#further-reading', '#further-reading', 'Choose a source to read', 'The reading list names books, catalogues and articles. Its notes tell you which question each item helps answer.'),
    step(chapter + '#cite', '[data-copy="cite-chicago"]', 'Copy the Chicago citation', 'Copy the citation, then replace the suggested access date with the date you consulted the page. No publication date is asserted.', 'click', 'on-click'),
    step(chapter + '#cite', '#cite details summary', 'Or use BibTeX', 'Open the BibTeX entry if your reference manager uses it. The citation identifies this page, not every source quoted within it.', 'click', 'on-click'),
  ] },
  { id: 'glossary-search', title: 'Find the word you heard', promise: 'Hear sonata form, open a definition, and search the whole Atlas.', duration: '≈ 1 min', feature: 'Glossary · popovers · search /', steps: [
    step('glossary.html#sonata-form', '#sonata-form h2', 'A term beside real music', 'Sonata form is explained here with Beethoven’s Fifth. Definitions link to related terms and recording passages, not only to other definitions.'),
    step('glossary.html#sonata-form', '#sonata-form [data-play-id]', 'Hear the example', 'Hear it moves the shared player to a particular passage. The caption distinguishes a provisional bar alignment from an editorial listening pointer.', 'click', 'on-click'),
    step('workshop.html#sonata-form', 'a[data-term]', 'Read a definition in place', 'Hover over an underlined term, or reach it with Tab, to open its glossary popover. On a touch screen, tap once. The popover links to the fuller definition.'),
    step('guide.html#glossary-search', '.masthead', 'Search from any page', 'Use Search, or press /. On a small screen, Search is inside Menu. Results include composers, works, recordings, ideas and these guide lessons. A lesson result returns to its card here.'),
  ] },
  { id: 'return-lab', title: 'Hear what changes on return', promise: 'Compare Beethoven’s exposition with its recapitulation, bar by bar.', duration: '≈ 2 min', feature: 'Return Lab · paired passages · measurements', steps: [
    step('return-lab/beethoven-exposition-recapitulation.html', '[data-rl-play="A"]', 'Hear the first statement', 'A plays the marked exposition passage and stops at its end. The timestamps belong to this recording, not to every performance.', 'click', 'on-click'),
    step('return-lab/beethoven-exposition-recapitulation.html', '[data-rl-play="B"]', 'Hear its return', 'B plays the corresponding passage in the recapitulation. Listen for what changes when the music returns towards the home key.', 'click', 'on-click'),
    step('return-lab/beethoven-exposition-recapitulation.html', '[data-rl-canvas]', 'Read the bar grid', 'Corresponding bars share a column even when they take different lengths of time. Hatched gaps mark bars without a counterpart; colours identify voices.'),
    step('return-lab/beethoven-exposition-recapitulation.html', '.rl-evidence', 'Separate notation from measurement', 'Written differences come from the score. Timings depend on provisional alignment; note lengths are warped notation, not measured releases.'),
  ] },
];

export const paths = [
  { title: 'New to this music', intro: 'Begin with a sound, not a date.', lessons: ['hall-welcome', 'score-satie', 'hall-joins', 'influence-thread', 'vienna-journey'] },
  { title: 'I play or read music', intro: 'Follow the parts; compare the decisions.', lessons: ['hall-views', 'compare-switching', 'return-lab', 'evidence-room', 'glossary-search'] },
  { title: 'Historian or archivist', intro: 'Follow a claim back to its source.', lessons: ['recording-sources', 'map-mahler', 'influence-thread', 'composer-citation', 'compare-switching'] },
];
