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
  { id: 'hall-welcome', title: 'The Hall: playback and programme', promise: 'Playing a recording, choosing from the programme, and the player bar that stays on every page.', duration: '≈ 1 min', feature: 'Play · programme · now playing', steps: [
    step(satie, '.t-play', 'Play', 'Play starts Satie’s First Gymnopédie; the next recording follows automatically. Space pauses; N and P change pieces when no control has focus.', 'play', 'on-event'),
    step(satie, '.views [data-view="score"]', 'Score view', 'Choose Score. The gold highlight marks the bar being played; selecting a bar plays from there.', 'click', 'on-click'),
    step(satie, '.t-prog', 'Programme', 'Open the programme to choose an evening or a single recording. The full concert follows the composers’ birth order and keeps the movements of a work together.', 'click', 'on-click'),
    step(satie, '.prog-close', 'Close the programme', 'Closing the programme does not stop playback. The question-mark button reopens this tour.', 'click', 'on-click'),
    step('guide.html#hall-welcome', '.np', 'Player bar', 'The player bar stays on every page of the site; playback continues while a chapter or lesson is open.'),
  ] },
  { id: 'score-satie', title: 'Score view: Satie’s First Gymnopédie', promise: 'The engraved score with the current bar highlighted, and the same music in the Notes view.', duration: '≈ 1 min', feature: 'Score · coloured notes', steps: [
    step(satie, '.t-play', 'Play', 'Play starts the First Gymnopédie.', 'play', 'on-event'),
    step(satie, '.views [data-view="score"]', 'Score', 'Choose Score. The gold highlight moves through the printed bars with the recording.', 'click', 'on-click'),
    step(satie, '.sheet-cap', 'Score source', 'The caption names the score; its timing is aligned automatically and has not yet been checked by ear. The § opens the edition and licence. Selecting a bar plays from there.'),
    step(satie, '.views [data-view="notes"]', 'Notes', 'Choose Notes to show each voice in its own colour, with pitches and lengths taken from the score.', 'click', 'on-click'),
  ] },
  { id: 'hall-views', title: 'Views of Beethoven’s Fifth', promise: 'The Score, Notes, Orchestra, Form and Sound views, on the first movement of Beethoven’s Fifth Symphony.', duration: '≈ 2 min', feature: 'Score · Notes · Orchestra · Form · Sound', steps: [
    step(hall, '.t-play', 'Play', 'Play starts the first movement of Beethoven’s Fifth; the view can be changed while the recording continues.', 'play', 'on-event'),
    step(hall, '.views [data-view="score"]', 'Score', 'Choose Score for the engraved score; the gold highlight marks the bar being played.', 'click', 'on-click'),
    step(hall, '.views [data-view="notes"]', 'Notes', 'Choose Notes for the score’s pitches and note lengths as coloured lines, one colour per voice.', 'click', 'on-click'),
    step(hall, '.views [data-view="orchestra"]', 'Orchestra', 'Choose Orchestra. Each instrument group lights up while its part sounds. The same view is available for Boléro.', 'click', 'on-click'),
    step(hall, '.views [data-view="form"]', 'Form', 'Choose Form for the sections, with arcs joining each theme to its return. Selecting a section plays from its start.', 'click', 'on-click'),
    step(hall, '.views [data-view="sound"]', 'Sound', 'Choose Sound for the recording’s frequencies and loudness, with an estimate of its harmony.', 'click', 'on-click'),
    step(hall, '.widen', 'Enlarge the view', 'F, or Enlarge under the view, fills the hall with it; F again restores it.', 'key:F', 'on-event'),
    step('guide.html#hall-views', '.np', 'Player bar', 'Playback continues while a chapter or lesson is open; the player bar has a pause button on every page.'),
  ] },
  { id: 'hall-joins', title: 'Joins between sections', promise: 'The silence before the horn call in Beethoven’s Fifth, and how the score prepares it.', duration: '≈ 2 min', feature: 'Joins · timeline markers · sources', steps: [
    step(hall, '[data-tab="joins"]', 'Joins', 'Choose Joins. The tab describes how each section leads into the next: a silence, a new chord, a change of instrument.', 'click', 'on-click'),
    step(hall, '.tab-joins .join-again', 'Play the first join', 'This button plays the passage leading into the silence before the horn call.', 'click', 'on-click'),
    step(hall, '.tl-joins button', 'Timeline markers', 'Each diamond on the timeline marks a join; selecting one plays the passage around it.'),
    step(hall, '[data-tab="live"]', 'Listening notes', 'Choose Listening notes. The notes follow the recording, with a card at each join.', 'click', 'on-click'),
    step(hall, '.cue-how summary', 'Evidence', 'Open Evidence for the source of the note: the score, the recording or a historical account.', 'click', 'on-click'),
  ] },
  { id: 'recording-sources', title: 'Recording details and sources', promise: 'The session, the original disc, the digital transfer and a citation for one recording.', duration: '≈ 2 min', feature: 'Recording details · other performances · downloads', steps: [
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '[data-tab="piece"]', 'Recording', 'Choose Recording for the performers, session, original disc and digital transfer.', 'click', 'on-click'),
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '.dossier', 'Evidence labels', 'Documented facts have a cited source; inferred ones are reasoned from evidence. Disputed entries give alternatives, and unknown entries are marked Unknown.'),
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '.others-l', 'Other performances', 'Each link opens a comparison of the same music; each card there identifies its performance and transfer.'),
    step('hall.html#rachmaninoff-prelude-c-sharp-minor', '.tab-piece .cite', 'Citation', 'A citation with the performer, the recording source and the Hall link.'),
    step('sources.html#downloads', '#downloads', 'Download the register', 'The recording register as CSV or JSON, with separate fields for facts, evidence labels, sources and alternatives.'),
  ] },
  { id: 'compare-switching', title: 'Comparing two recordings', promise: 'Rachmaninoff’s 1919 and 1928 recordings of his Prelude in C♯ minor, switched mid-phrase.', duration: '≈ 2 min', feature: 'Compare · tempo maps · short passages', steps: [
    step(compare, '[data-cmp-select="rachmaninoff-prelude-c-sharp-minor"]', 'The 1919 recording', 'Select the Edison recording; its clock is the reference for this comparison.', 'click', 'on-click'),
    step(compare, '[data-cmp-play]', 'Play', 'Play starts the selected recording. Selecting another card continues from the matching point in that recording.', 'click', 'on-click'),
    step(compare, '[data-cmp-seek]', 'Move to 0:42', 'Move to 42 seconds in the reference recording, after the opening lead-in.', 'seek:42', 'on-event'),
    step(compare, '[data-cmp-select="rachmaninoff-prelude-c-sharp-minor-victor-1928"]', 'Switch to 1928', 'Select the 1928 electrical Victor recording; the phrase continues from the same point.', 'click', 'on-click'),
    step(compare, '.cmp-tempo-svg', 'Tempo map', 'Above 1×, the performer takes longer over the same music than the reference; below it, less time.'),
    step(compare, '[data-cmp-passage="1"]', 'Passages', 'Each passage plays in every available recording, one after another.'),
  ] },
  { id: 'influence-thread', title: 'The Dies irae in the Web of Influence', promise: 'The chant and its use in Rachmaninoff’s Isle of the Dead.', duration: '≈ 2 min', feature: 'Influence · recurring material · sources', steps: [
    step(thread, '.iw-thread-chips a[href="#thread-dies-irae"]', 'Dies irae', 'Choose Dies irae to highlight the works that use the chant; each gold line opens a connection and its sources.'),
    step(thread, '[data-passage="thread"] [data-passage-play]', 'The chant', 'Play the opening of the chant in synthesised sound; the caption explains the rhythm and tempo chosen.', 'click', 'on-click'),
    step(thread, '.iw-journey a[href="#edge-gregorian-chant--rachmaninoff-isle-dies-irae"]', 'Isle of the Dead', 'Open the Isle of the Dead connection for where the chant appears in Rachmaninoff’s music.', 'click', 'on-click'),
    step(death, '.iw-evidence', 'Evidence', 'The evidence note gives the basis for the connection between the chant and the Isle of the Dead.'),
    step(death, '.iw-sources', 'Sources and link', 'Each source opens in a new tab; the page address links directly to this connection.'),
  ] },
  { id: 'evidence-room', title: 'Vivaldi’s RV 522 and Bach’s BWV 593', promise: 'The opening of Vivaldi’s concerto and of Bach’s organ transcription, as playable score examples.', duration: '≈ 1 min', feature: 'Influence · playable score examples', steps: [
    step('influence.html#edge-vivaldi--bach-bwv593', '.iw-works', 'The two works', 'Bach transcribed Vivaldi’s Concerto RV 522 for organ as BWV 593.'),
    step('influence.html#edge-vivaldi--bach-bwv593', '[data-passage="from"] [data-passage-play]', 'Vivaldi: first violin', 'Play the first violin’s opening two bars in A minor, in synthesised sound.', 'click', 'on-click'),
    step('influence.html#edge-vivaldi--bach-bwv593', '[data-passage="to"] [data-passage-play]', 'Bach: organ', 'Play Bach’s uppermost line; the caption names the omitted voices and links to the full score.', 'click', 'on-click'),
    step('influence.html#edge-vivaldi--bach-bwv593', '.iw-sources', 'Sources', 'The sources link to the full scores of both works.'),
  ] },
  { id: 'map-mahler', title: 'The Map: Vienna in 1900 and Mahler', promise: 'Vienna in 1900, and Mahler’s places in date order.', duration: '≈ 2 min', feature: 'Map · years · composers · cities', steps: [
    step(map, '#am-year', 'Year', 'The Map opens at 1900; the slider changes the year.'),
    step(map, '[name="composer"]', 'Composer', 'Mahler is selected; the numbered list gives dates and sources for each place on his map.'),
    step(map, '.am-recordings [data-map-play]', 'Recordings', 'Play a work linked to this place, or choose another recording by the composer.', 'click', 'on-click'),
    step(map, '[data-action="encounters"]', 'Encounters', 'Open Encounters for the composers whose dates overlap in the selected city.', 'click', 'on-click'),
    step(map, '.am-card-content', 'City records', 'The card gives dates and sources. The City menu selects another place.'),
  ] },
  { id: 'vienna-journey', title: 'Guided journey: Vienna, 1900', promise: 'Recordings, paintings and sources for Vienna around 1900, station by station.', duration: '≈ 1 min', feature: 'Guided journeys · music · paintings · sources', steps: [
    step(journey, '[data-j-play]', 'Begin', 'Begin plays the stations in order; Pause stops at the current station for reading or looking at a painting.', 'click', 'on-click'),
    step(journey, '.j-station.is-current .j-narration', 'Station text', 'Each station pairs a recording excerpt with a text and an exhibit; short notes appear as the excerpt plays.'),
    step(journey, '.j-station.is-current .j-sources summary', 'Sources', 'Open Sources & recording for the excerpt’s times, its sources and a link to the full recording in the Hall.', 'click', 'on-click'),
    step(journey, '[data-j-next]', 'Next station', 'Next or a numbered station changes station; after the tour the arrow keys do the same. The current station is saved in this browser.', 'click', 'on-click'),
  ] },
  { id: 'composer-citation', title: 'Composer chapter: Mahler', promise: 'Contents, influences, further reading and citation in Mahler’s chapter.', duration: '≈ 2 min', feature: 'Composer chapters · influences · reading · citations', steps: [
    step(chapter, '.toc', 'Contents', 'The contents link to Mahler’s life, music, works, places and sources.'),
    step(chapter + '#inheritance', '#inheritance', 'Influences', 'Each connection opens its account and sources in the Web of Influence.'),
    step(chapter + '#further-reading', '#further-reading', 'Further reading', 'Each book, catalogue and article has a short note.'),
    step(chapter + '#cite', '#cite summary', 'Cite this page', 'Open a Chicago reference or BibTeX entry for this page.', 'click', 'on-click'),
    step(chapter + '#cite', '[data-copy="cite-chicago"]', 'Copy the citation', 'Copy the Chicago citation and set the access date to the day the page was read.', 'click', 'on-click'),
  ] },
  { id: 'glossary-search', title: 'Glossary and search', promise: 'The sonata form entry with its recorded example, definitions in the text, and site search.', duration: '≈ 1 min', feature: 'Glossary · quick definitions · search', steps: [
    step('glossary.html#sonata-form', '#sonata-form h2', 'Sonata form', 'The entry defines sonata form with Beethoven’s Fifth as the example, and links to related terms and passages.'),
    step('glossary.html#sonata-form', '#sonata-form [data-play-id]', 'Example', 'Play starts the passage described in the note.', 'click', 'on-click'),
    step('workshop.html#sonata-form', 'a[data-term]', 'Definitions in the text', 'Hover over an underlined term, reach it with Tab or tap it to open a definition; its link leads to the glossary entry.'),
    step('guide.html#glossary-search', '.masthead', 'Search', 'Search, or the / key, finds composers, works, recordings, terms and guide tours. On a small screen, Search is inside Menu.'),
  ] },
  { id: 'return-lab', title: 'Return Lab: exposition and recapitulation', promise: 'The exposition and recapitulation of the first movement of Beethoven’s Fifth, bar by bar.', duration: '≈ 2 min', feature: 'Return Lab · paired passages · bar charts', steps: [
    step('return-lab/beethoven-exposition-recapitulation.html', '[data-rl-play="A"]', 'Passage A', 'Choose A for the marked passage from the exposition.', 'click', 'on-click'),
    step('return-lab/beethoven-exposition-recapitulation.html', '[data-rl-play="B"]', 'Passage B', 'Choose B for the corresponding passage in the recapitulation, where Beethoven brings the music towards the home key.', 'click', 'on-click'),
    step('return-lab/beethoven-exposition-recapitulation.html', '[data-rl-canvas]', 'Bar grid', 'Matching bars share a column; colours separate the voices, and hatched gaps mark bars with no counterpart.'),
    step('return-lab/beethoven-exposition-recapitulation.html', '.rl-evidence', 'Score and performance', 'Beethoven’s written changes beside the time each bar takes in this performance.'),
  ] },
];

export const paths = [
  { title: 'New listeners', intro: 'The Hall, the score view, joins, the Web of Influence and a guided journey.', lessons: ['hall-welcome', 'score-satie', 'hall-joins', 'influence-thread', 'vienna-journey'] },
  { title: 'Players and score readers', intro: 'Views of the music, performer comparisons, the Return Lab, score examples and the glossary.', lessons: ['hall-views', 'compare-switching', 'return-lab', 'evidence-room', 'glossary-search'] },
  { title: 'Historians and archivists', intro: 'Recording sources, the Map, the Web of Influence, citation and performer comparisons.', lessons: ['recording-sources', 'map-mahler', 'influence-thread', 'composer-citation', 'compare-switching'] },
];
