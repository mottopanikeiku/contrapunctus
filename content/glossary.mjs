// Glossary of listening vocabulary (schema: CONTRACTS.md, “Glossary”).
// Entries are grouped by kind for editing; the default export is one flat array.
// `hear` pointers use times and bars taken from content/listen/*.mjs (cues, sections, transitions).

const form = [
  {
    slug: 'sonata-form', term: 'Sonata form', aka: ['sonata-allegro form', 'sonata-allegro'], kind: 'form',
    short: 'A three-part plan: an exposition presents themes in two keys, a development unsettles them, and a recapitulation brings them back in the home key.',
    html: `<p>The plan behind most first movements of Classical and Romantic symphonies, sonatas and quartets. The exposition states a first theme in the home key and a contrasting second theme in a new one — the relative major in a minor-key movement, the dominant in a major-key one. The development takes the material through distant keys. The recapitulation restates it with the second theme now in the home key, which resolves the tension the exposition opened; a coda may follow.</p><p>The scheme is a nineteenth-century textbook codification: [[haydn|Haydn]], [[mozart|Mozart]] and [[beethoven|Beethoven]] used no single name for it, and many of their movements bend it. Beethoven’s Fifth Symphony shows the outline plainly. Its exposition (bars 1–124) runs from C minor to E♭ major and is repeated; the development opens at bar 125; the recapitulation at bar 248 brings the second group back in C major (bar 303).</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 1 }, note: 'The exposition begins: the three-note motto in C minor, interrupted by fermatas.' },
      { listen: 'beethoven-5-first', bar: { n: '125', occ: 1 }, note: 'The development begins: the horns’ call leads to a held G and the strings answer on D♭, a new harmonic direction.' },
      { listen: 'beethoven-5-first', bar: { n: '303', occ: 1 }, note: 'The recapitulated second group arrives in C major, where the exposition had reached E♭ major.' },
    ],
    see: ['exposition', 'development', 'recapitulation', 'coda', 'medial-caesura', 'retransition'],
  },
  {
    slug: 'exposition', term: 'Exposition', aka: [], kind: 'form',
    short: 'The opening section of a sonata-form movement or a fugue, where the main material is first presented, in a sonata moving to a second key.',
    html: `<p>In sonata form the exposition sets out the themes and the key contrast the rest of the movement will work on: a first group in the home key, a transition, then a second group in a new key. Classical expositions are usually marked to be repeated, so a recording may play the same bars twice. In a fugue the exposition is the first round of entries, one voice at a time, each stating the subject.</p><p>The exposition of Beethoven’s Fifth runs from bar 1 to bar 124. A silent bar at 57 divides its two groups (see <i>medial caesura</i>), and the repeat is taken in the Hall’s recording. The B minor fugue of Bach’s <i>Well-Tempered Clavier</i>, Book I, opens with four entries across bars 1–16.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 1 }, note: 'The exposition’s first group: the motto, then a horn call at bar 59 that leads to the E♭-major theme.' },
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 2 }, note: 'The repeat: the exposition begins again, so bar 1 is heard a second time.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'A fugal exposition begins: the alto states the subject alone.' },
    ],
    see: ['sonata-form', 'fugue', 'subject', 'medial-caesura', 'bar'],
  },
  {
    slug: 'development', term: 'Development section', aka: ['development section'], kind: 'form',
    short: 'The middle section of a sonata-form movement, where themes are broken into fragments, combined and sent through unrelated keys.',
    html: `<p>The development is where a movement leaves the tidy contrast of its exposition. Composers pull a theme apart, repeat its fragments in sequence, pass them between instruments and steer the harmony through keys far from the home key. It usually ends by preparing the return, often on the dominant (the retransition).</p><p>In Beethoven’s Fifth the development (bars 125–247) works the motto’s rhythm through new keys: the horns restart it, strings and winds trade pairs of chords, and from bar 196 the exchanges shrink to one chord per reply before the recapitulation breaks in at bar 248. Mozart’s G minor Symphony, K. 550, has imitation across the parts in its development.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '125', occ: 1 }, note: 'The horns launch the motto’s rhythm on a held G; the strings answer on D♭ falling to C.' },
      { listen: 'beethoven-5-first', bar: { n: '165', occ: 1 }, note: 'The material is in fragments: violins climb G–B♭–C while cellos run downwards and the horns repeat the motto’s rhythm.' },
    ],
    see: ['sonata-form', 'liquidation', 'retransition', 'sequence', 'imitation'],
  },
  {
    slug: 'recapitulation', term: 'Recapitulation', aka: [], kind: 'form',
    short: 'The return of the opening themes in the home key that closes the main structure of a sonata-form movement.',
    html: `<p>The recapitulation restates the exposition, but the second theme now arrives in the home key, so the key conflict is settled. Composers rarely copy the exposition exactly: the transition is rewritten, since it no longer needs to leave the home key, and a movement in a minor key can resolve to the major or stay in the minor.</p><p>Beethoven’s Fifth resolves to the major: the call that the horns played in E♭ major at bar 59 returns at bar 303 in the bassoons, a minor third lower, and the second group begins in C major. In Mozart’s G minor Symphony the second theme returns in G minor, with its semitone-inflected outline intact.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '248', occ: 1 }, note: 'The recapitulation breaks in as the motto’s rhythm re-emerges from the fragments of the retransition.' },
      { listen: 'beethoven-5-first', bar: { n: '303', occ: 1 }, note: 'Bassoons take the horn call and the violins’ melody begins in C major.' },
      { listen: 'mozart-40-molto-allegro', t: 265, note: 'In this stretch the second theme returns in G minor, after the same kind of pause as in the exposition.' },
    ],
    see: ['sonata-form', 'development', 'retransition', 'medial-caesura'],
  },
  {
    slug: 'coda', term: 'Coda', aka: [], kind: 'form',
    short: 'Italian “tail”: a closing section after the main structure has ended, sometimes only a few chords, sometimes a second development.',
    html: `<p>A coda confirms the ending. After the recapitulation of a sonata-form movement, or the last variation of a set, composers add a passage that settles the key and often adds a last thought. In Beethoven it can be long enough to count as a second development.</p><p>The coda of Beethoven’s Fifth, first movement, begins at bar 374 and runs to bar 502. It starts on the cadence that closes the recapitulation, with no pause, and holds a high C in the violins while the bass moves under it through C, A♭, E and F, so the repeated note no longer means settled harmony. Chopin’s First Ballade ends with a fast coda, <i>Presto con fuoco</i>, in cut time.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '374', occ: 1 }, note: 'The coda begins as the recapitulation’s cadence arrives; the violins hold C while the cellos change the bass every two bars.' },
      { listen: 'chopin-ballade-1', t: 486, note: 'The recalled theme narrows towards a dominant chord and the fast coda is released: two urgent beats replace the earlier 6/4 sway.' },
    ],
    see: ['sonata-form', 'recapitulation', 'elision', 'perfect-cadence'],
  },
  {
    slug: 'rondo', term: 'Rondo', aka: ['rondo form'], kind: 'form',
    short: 'A form in which a main theme, the refrain, returns between contrasting episodes: A–B–A–C–A, or more.',
    html: `<p>The refrain always comes back in the home key; the episodes between it change key, tune and character. Rondos are common as finales of Classical sonatas and concertos. They differ from the Baroque ritornello, whose returns visit related keys and are often shortened.</p><p>Ravel’s <i>Pavane pour une infante défunte</i> is laid out as a rondo, A–B–A–C–A: a refrain, a first episode, the refrain returning, a broader second episode, and a final return. Richard Strauss subtitled <i>Till Eulenspiegels lustige Streiche</i> “in rondo form”: the recurring themes identify Till while the episodes change around him.</p>`,
    hear: [
      { listen: 'ravel-pavane', t: 114, note: 'The refrain returns after the first episode; a held chord has just stopped the episode’s harmonic sliding.' },
      { listen: 'ravel-pavane', t: 244, note: 'The refrain returns a last time after the broader second episode.' },
      { listen: 'richard-strauss-till-eulenspiegel', t: 35, note: 'Two recurring signatures of Till — a winding tune and a clipped motif — to listen for through the episodes.' },
    ],
    see: ['ternary-form', 'ritornello', 'episode', 'leitmotif'],
  },
  {
    slug: 'ternary-form', term: 'Ternary form', aka: ['A–B–A form', 'ABA form'], kind: 'form',
    short: 'Three sections: a first, a contrasting middle, and the first again, often decorated or altered on its return.',
    html: `<p>Ternary form underlies the da capo aria, the minuet and trio, and many short piano pieces. The middle section usually contrasts in key and mood, so the return of A feels like arrival rather than repetition. A written-out return can change the first section; da capo (“from the head”) means the player simply goes back and repeats it.</p><p>Schubert’s Impromptu in G♭, D. 899 No. 3, is a clear case: a G♭-major melody over flowing triplets (bars 1–24), a middle section that turns to E♭ minor (bars 25–54), a written-out return of the melody (55–74) and a coda (75–86). A held dominant under a fermata releases the return.</p>`,
    hear: [
      { listen: 'schubert-impromptu-gflat', bar: { n: '25', occ: 1 }, note: 'The middle section begins: E♭ minor, accented B♭s in the melody over broken chords.' },
      { listen: 'schubert-impromptu-gflat', bar: { n: '55', occ: 1 }, note: 'After a held dominant the opening melody returns, pianissimo, over the same triplets.' },
    ],
    see: ['rondo', 'binary-form', 'minuet-and-trio', 'retransition'],
  },
  {
    slug: 'binary-form', term: 'Binary form', aka: ['rounded binary'], kind: 'form',
    short: 'A form in two repeated halves: the first leaves the home key, the second returns. Baroque dances and Scarlatti’s sonatas use it.',
    html: `<p>Each half is normally repeated. The first half moves from the tonic to a second key — the dominant in a major-key piece — and ends with a cadence there. The second half begins in that key, wanders, and comes back to the tonic. In rounded binary the opening material also returns near the end of the second half, which foreshadows sonata form.</p><p>Domenico Scarlatti’s Sonata in D major, K. 119, shows the layout: its first half travels from D major to a cadence in A major, and when the repeat is taken the music springs from that A-major close straight back to the opening D-major gestures. (K. numbers are Ralph Kirkpatrick’s catalogue of 1953.)</p>`,
    hear: [
      { listen: 'scarlatti-sonata-k119', t: 68, note: 'The first-half repeat is taken: the music jumps from the A-major cadence back to D-major material, with no bridge written for it.' },
    ],
    see: ['ternary-form', 'sonata-form', 'catalogue-number'],
  },
  {
    slug: 'theme-and-variations', term: 'Theme and variations', aka: ['variation form', 'variations'], kind: 'form',
    short: 'A theme stated, then repeated with changing decoration, harmony, texture or mode, while its outline or bass stays recognisable.',
    html: `<p>The theme is usually short and clearly phrased so it can be tracked through its changes. A variation may decorate the tune, move it into the bass, change the mode from major to minor, thin or thicken the orchestra, or alter the metre. Sets of variations became a vehicle for serious argument in the late works of Beethoven and in Brahms.</p><p>Haydn’s “Surprise” Symphony (No. 94) has a C-major theme, a decorated first variation, a second variation in C minor with forceful attacks, a lighter third, a fourth with full orchestral weight and a coda. Rameau’s A-minor Gavotte is followed by six <i>doubles</i>, the French word for variations. Beethoven’s Op. 109 finale gives a sixteen-bar theme and variations through to a final return of the plain theme.</p>`,
    hear: [
      { listen: 'haydn-94-andante', t: 84, note: 'Variation I: the completed phrase starts moving inside, with decoration around the theme.' },
      { listen: 'haydn-94-andante', t: 164, note: 'Variation II restarts the theme in C minor; E♭ replaces E♮ and the attacks are forceful.' },
      { listen: 'rameau-gavotte-six-doubles', t: 84, note: 'The first double: continuous semiquavers run above a slower chordal version of the theme.' },
      { listen: 'beethoven-109-variations', t: 750, note: 'The theme returns without the accumulated passagework, as slow chords after the trills.' },
    ],
    see: ['passacaglia', 'chaconne', 'ostinato', 'modal-mixture'],
  },
  {
    slug: 'fugue', term: 'Fugue', aka: [], kind: 'form',
    short: 'A piece built from one short subject, announced by each voice in turn and then developed through imitation, episodes and returns.',
    html: `<p>A fugue is a procedure more than a fixed form. A first voice states the <i>subject</i> alone; a second answers it, usually a fifth higher, while the first continues with a countersubject; the remaining voices enter in turn. Between further statements come episodes, built from fragments and sequences, and the subject may later overlap itself in stretto. Fugues are normally written for a fixed number of voices, which may be instruments, singers or the hands of a keyboard player.</p><p>The B minor fugue of Book I of Bach’s <i>Well-Tempered Clavier</i> (BWV 869) is in four voices. They enter in the order alto, tenor, bass, soprano across bars 1–16. The Hall’s recording is a piano performance, with its bars aligned automatically and marked provisional.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'The alto states the subject alone in B minor, beginning F♯–D–B after a quaver rest.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '4', occ: 1 }, note: 'The tenor answers in F♯ minor while the alto continues with a countersubject.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '13', occ: 1 }, note: 'The soprano completes the four voices, carrying the subject to the top of the texture.' },
    ],
    see: ['subject', 'answer', 'countersubject', 'episode', 'stretto', 'counterpoint', 'imitation'],
  },
  {
    slug: 'subject', term: 'Fugue subject', aka: ['fugal subject', 'first subject', 'second subject'], kind: 'form',
    short: 'The main theme of a fugue, stated alone at the start and returning in every voice; in sonata form, one of the movement’s themes.',
    html: `<p>A fugue subject is short, easy to recognise and built to be combined with itself. Its opening usually implies the key, and its shape leaves room for another voice to enter on top of it. In Bach’s B minor fugue (<i>Well-Tempered Clavier</i>, Book I) the alto begins F♯–D–B, with leaps connecting pairs of notes a semitone apart; the complete subject uses all twelve chromatic pitch classes, but its move towards F♯ still gives it a tonal direction.</p><p>In sonata form, older English usage speaks of the “first subject” and “second subject” for the two main themes or groups — the second subject is the one in the new key. Recording notes in the Hall use that language for Rachmaninoff’s Second Piano Concerto, where the second subject is in E♭ major.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'The whole subject in the alto alone, before any other voice enters.' },
      { listen: 'rachmaninoff-concerto-2-moderato', t: 150, note: 'The second subject in E♭ major: the soloist changes from movement to song.' },
    ],
    see: ['fugue', 'answer', 'countersubject', 'sonata-form', 'motif'],
  },
  {
    slug: 'answer', term: 'Fugal answer', aka: ['tonal answer', 'real answer'], kind: 'form',
    short: 'The second entry of a fugue subject, usually in the dominant, while the first voice carries on with a countersubject.',
    html: `<p>The answer repeats the subject a fifth higher (or a fourth lower). A <i>real</i> answer is an exact transposition; a <i>tonal</i> answer adjusts the opening interval so the music does not leave the key too soon. The subject then returns in the home key in the third voice, and the pattern of subject, answer, subject, answer continues until all voices have entered.</p><p>In Bach’s B minor fugue the subject begins on F♯, the fifth degree of B minor (F♯–D–B). The tenor’s answer in bar 4 begins B–A–F♯, so the fifth degree is answered by the tonic; an exact transposition would have begun on C♯. The alto meanwhile starts the countersubject.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '4', occ: 1 }, note: 'The tenor answers, B–A–F♯, in F♯ minor; the alto’s descending crotchets are the countersubject.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '13', occ: 1 }, note: 'The soprano gives the answer in F♯ minor, bringing the subject to the top of the texture.' },
    ],
    see: ['fugue', 'subject', 'countersubject', 'modulation'],
  },
  {
    slug: 'countersubject', term: 'Countersubject', aka: [], kind: 'form',
    short: 'A companion melody that accompanies each statement of a fugue subject, so the two lines can be heard together.',
    html: `<p>The countersubject first appears against the answer, in the voice that has just finished the subject. It usually contrasts in rhythm — slow against fast, or smooth against leaping — and is written so it works above or below the subject, because it will change places with it. The Bach fugue lets you hear this: whenever a voice has the subject, one of the others tends to carry the countersubject.</p><p>In the B minor fugue the countersubject is a line of descending crotchets that breaks into semiquavers, set against the subject’s quavers. At bar 9 the tenor carries it above the bass’s subject while the alto adds a quicker companion, so three rhythms are distinct at once.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '4', occ: 1 }, note: 'The alto’s countersubject: descending crotchets against the tenor’s quavers, two independent speeds.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '9', occ: 1 }, note: 'The bass states the subject while the tenor carries the countersubject and the alto adds a quicker line.' },
    ],
    see: ['fugue', 'subject', 'counterpoint'],
  },
  {
    slug: 'episode', term: 'Episode', aka: [], kind: 'form',
    short: 'A passage between statements of the main theme that uses fragments and sequences to change key; found in fugues, rondos and concertos.',
    html: `<p>In a fugue, an episode is a stretch with no full statement of the subject. It is usually built from a fragment of the subject or countersubject, repeated as a sequence, and it carries the music to the key of the next entry. In a rondo the episodes are the contrasting sections between returns of the refrain; in a Baroque concerto they are the solo passages between orchestral ritornellos.</p><p>The B minor fugue has episodes at bars 17, 24, 50 and 64. In the first, the bass descends in repeating four-note shapes while the upper voices imitate a quicker figure; the alto briefly recalls F♯–D–B in bar 19, then stops — a fragment, not a complete entry. In Vivaldi’s <i>Spring</i> the first episode is the birdsong exchanged by the soloist and two orchestral violins.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '17', occ: 1 }, note: 'An episode: the bass descends in repeating shapes while soprano and tenor imitate a quicker figure.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '50', occ: 1 }, note: 'Running semiquavers pass through the voices, preparing a move from D major to F♯ minor.' },
      { listen: 'vivaldi-spring-allegro', t: 34, note: 'After the opening refrain, the first episode: three violins exchange birdsong figures with trills.' },
    ],
    see: ['fugue', 'sequence', 'ritornello', 'rondo'],
  },
  {
    slug: 'stretto', term: 'Stretto', aka: [], kind: 'form',
    short: 'Italian “narrow”: close imitation in which a fugue subject enters again before the previous statement has finished.',
    html: `<p>Stretto packs the entries tighter, so the voices overlap and the subject seems to chase itself. It tends to appear late in a fugue, as a way of raising tension, and it only works if the subject was designed to fit with itself at a short distance.</p><p>In Bach’s B minor fugue, bar 34 has the alto begin a shortened F♯-minor subject, and one bar later the soprano enters in B minor before the first statement has run its course. From bar 41 the subject passes from soprano (B minor) to alto (E minor, bar 42), bass (A major, bar 43) and tenor (D major, bar 44), each beginning before the last has finished.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '34', occ: 1 }, note: 'The alto starts a shortened subject, and a bar later the soprano enters over it.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '41', occ: 1 }, note: 'Four overlapping entries in four bars, each arriving before a full subject’s length has passed.' },
    ],
    see: ['fugue', 'subject', 'imitation', 'canon'],
  },
  {
    slug: 'ritornello', term: 'Ritornello', aka: ['ritornello form'], kind: 'form',
    short: 'Italian “little return”: the orchestral refrain of a Baroque concerto, returning between solo episodes, often in related keys and in pieces.',
    html: `<p>In the concertos of [[vivaldi|Vivaldi]] and his imitators, a movement is built on a ritornello: the full ensemble opens in the home key, then steps aside for the soloists, who play new figuration; the ritornello returns in a different key, often shortened; and the last statement is in the home key again. It differs from a rondo refrain, which comes back whole and in the same key.</p><p>The opening refrain of <i>Spring</i> from Vivaldi’s <i>Four Seasons</i> (RV 269, E major) returns in shortened form between the birdsong, storm and later solos. In Bach’s Fifth Brandenburg Concerto the D-major ritornello opens the movement; the next, after the first solo episode, is in the dominant, A major, and the last, after a long harpsichord cadenza, restores the opening rhythm to the full ensemble.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 0, note: 'The opening D-major ritornello: ensemble music with a coordinated rhythm to keep in mind.' },
      { listen: 'bach-brandenburg-5-allegro', t: 568, note: 'The final ritornello, released by a dominant pedal at the end of the harpsichord cadenza.' },
      { listen: 'vivaldi-spring-allegro', t: 0, note: 'The refrain of Spring: the shape that returns, shortened, after each episode.' },
    ],
    see: ['concerto', 'episode', 'rondo', 'cadenza'],
  },
  {
    slug: 'passacaglia', term: 'Passacaglia', aka: [], kind: 'form',
    short: 'A set of continuous variations over a repeating bass or harmonic pattern, usually in slow triple time.',
    html: `<p>The word comes from the Spanish <i>pasacalle</i>, a short instrumental vamp played between guitar songs in the early seventeenth century. Baroque composers made it a form for serious music: a bass line or chord progression, from two to eight bars long, repeats without a break while the upper parts change. Bach’s organ Passacaglia in C minor, BWV 582, is a famous example. The line between passacaglia and chaconne is blurred, and composers often used the two names interchangeably.</p><p>The finale of Brahms’s Fourth Symphony is thirty continuous variations on an eight-bar theme. Brahms used the word chaconne for it, though it is also described as a passacaglia, as in the Hall’s own notes. The pattern keeps going even when a slower variation, a flute solo or a trombone chorale occupies the foreground.</p>`,
    hear: [
      { listen: 'brahms-4-finale', t: 0, note: 'The eight-bar theme in wind and brass: the pattern that underpins thirty variations.' },
      { listen: 'brahms-4-finale', t: 205, note: 'A slower variation: 3/4 becomes 3/2, doubling the length of each bar, with the flute unfolding the pattern.' },
    ],
    see: ['chaconne', 'theme-and-variations', 'ostinato', 'lament-bass', 'modelling'],
  },
  {
    slug: 'chaconne', term: 'Chaconne', aka: [], kind: 'form',
    short: 'Variations over a short repeating bass or chord pattern in triple time, close kin to the passacaglia; a Spanish dance made serious.',
    html: `<p>The chaconne began in Spain in the late sixteenth century, reputedly brought from the New World, as a fast, lively dance-song; by the seventeenth century it had become a stately set of variations. Bach’s Chaconne in D minor, the last movement of his Partita No. 2 for solo violin (BWV 1004), is the most famous example; the closing chorus of his Cantata No. 150, <i>Nach dir, Herr, verlanget mich</i>, is also a chaconne.</p><p>Brahms took the chaconne bass of that cantata chorus for the finale of his Fourth Symphony, enlarging it to eight bars and adding a chromatic note. The Boston Symphony programme note documents the Bach source, and Kelly Dean Hansen’s listening guide names Cantata No. 150.</p>`,
    hear: [
      { listen: 'brahms-4-finale', t: 105, note: 'In this stretch the recurring pattern borrowed from Bach’s cantata continues beneath the variations.' },
    ],
    see: ['passacaglia', 'modelling', 'theme-and-variations', 'lament-bass'],
  },
  {
    slug: 'scherzo', term: 'Scherzo', aka: [], kind: 'form',
    short: 'Italian “joke”: a fast movement in triple time, usually with a slower trio, that replaced the minuet in symphonies and quartets.',
    html: `<p>[[haydn|Haydn]]’s Op. 33 string quartets (1781) are the first in which the dance movement is headed <i>scherzo</i> or <i>scherzando</i> rather than minuet. [[beethoven|Beethoven]] made it fast and driving, and later composers kept the plan of scherzo, trio, scherzo. In chamber and piano music the term is also used for a short fast movement without a trio.</p><p>The third movement of [[bruckner|Bruckner]]’s Seventh Symphony is marked <i>Sehr schnell</i>: a repeated string figure under a trumpet call in A minor, followed by a slower trio in F major. The scherzo of Ravel’s String Quartet (<i>Assez vif — Très rythmé</i>) opens with a pizzicato theme, and Prokofiev’s Second Piano Sonata has a short Scherzo as its second movement.</p>`,
    hear: [
      { listen: 'bruckner-7-scherzo', t: 0, note: 'A scherzo in A minor, Sehr schnell: a repeated figure beneath the themes binds the sections.' },
      { listen: 'ravel-quartet-scherzo', t: 0, note: 'Plucked first theme, bowed second theme: a change of technique alters the character without another player.' },
      { listen: 'prokofiev-piano-sonata-2', t: 350, note: 'The Scherzo begins: a short movement of brief accented figures over a recurring motion.' },
    ],
    see: ['minuet-and-trio', 'pizzicato', 'ternary-form'],
  },
  {
    slug: 'minuet-and-trio', term: 'Minuet and trio', aka: [], kind: 'form',
    short: 'The dance movement of Classical symphonies and quartets: a minuet in three beats, a contrasting trio, then the minuet again.',
    html: `<p>The minuet was a French court dance in moderate triple time. In a symphony it became the third movement: minuet (usually in two repeated halves), then a trio in a related key and a lighter texture — so called because Lully and his contemporaries often scored the middle dance for two oboes and a bassoon — and then the minuet da capo, often without its repeats. The scherzo and trio of Beethoven and Bruckner follow the same A–B–A plan at a faster speed.</p><p>The Hall’s Bruckner movement keeps that plan. The A-minor scherzo gives way to a trio marked <i>Etwas langsamer</i> (somewhat slower) in F major, with a sustained melody and a quieter accompaniment; after a pause the scherzo is restored directly, in A minor and at the original speed.</p>`,
    hear: [
      { listen: 'bruckner-7-scherzo', t: 198, note: 'The trio begins in F major: the rushing figure stops, a sustained melody enters and the marking is Etwas langsamer.' },
      { listen: 'bruckner-7-scherzo', t: 328, note: 'After a pause the scherzo returns, with A minor and the fast tempo restored together.' },
    ],
    see: ['scherzo', 'ternary-form', 'direct-modulation', 'general-pause'],
  },
  {
    slug: 'toccata', term: 'Toccata', aka: [], kind: 'form',
    short: 'Italian “touched”: a keyboard showpiece in fast, even running notes that tests the player’s hands.',
    html: `<p>The word comes from <i>toccare</i>, to touch. Early toccatas were improvisatory organ and harpsichord pieces; later ones, such as Bach’s organ toccatas, alternate flourishes with fugal sections. The twentieth-century piano toccata often keeps only the motion: a stream of rapid notes in even rhythm.</p><p>Prokofiev’s Toccata in D minor, Op. 11, was written in spring 1912, dedicated to his fellow student Nikolay Shtember, and published by Jurgenson in July 1913 for seventy-five roubles. It opens with a single repeated note shared by both hands. Ravel ends <i>Le Tombeau de Couperin</i> with a toccata, dedicated to the memory of Joseph de Marliave.</p>`,
    hear: [
      { listen: 'prokofiev-toccata', t: 0, note: 'The opening shares repeated Ds between the hands before chromatic neighbours widen the pitch field.' },
      { listen: 'prokofiev-toccata', t: 134, note: 'The central surge: chromatic lines driven in opposite directions, before the music contracts onto repeated D octaves.' },
    ],
    see: ['prelude', 'fantasia', 'ostinato', 'homage'],
  },
  {
    slug: 'fantasia', term: 'Fantasia', aka: [], kind: 'form',
    short: 'A piece that follows the player’s imagination rather than a set form, with sudden changes of speed, texture and key.',
    html: `<p>Fantasias began as written-down improvisations for lute, keyboard and viol. [[cpe-bach|C. P. E. Bach]] made the fantasia a vehicle for sudden contrast: running passagework alternates with sparse, recitative-like gestures and silences. His Fantasia in F♯ minor, Wq 67, dates from 1787 and is written for the clavichord.</p><p>Later composers kept the freedom. [[schumann|Schumann]] wrote a one-movement <i>Fantasy</i> for piano and orchestra in May 1841; in 1845 he added an Intermezzo and finale, turning it into the first movement of his Piano Concerto in A minor.</p>`,
    hear: [
      { listen: 'cpe-bach-fantasia-fsharp', t: 0, note: 'The free opening: the clavichord’s tangents strike and stay in contact with the strings while keys are held.' },
      { listen: 'cpe-bach-fantasia-fsharp', t: 180, note: 'Running figures give way to short separated gestures with gaps between them, recitative-like speech.' },
      { listen: 'schumann-piano-concerto-1', t: 0, note: 'The first movement of the concerto that began as a fantasy: one orchestral attack, then a descending piano flourish.' },
    ],
    see: ['clavichord', 'recitative', 'toccata', 'concerto'],
  },
  {
    slug: 'prelude', term: 'Prelude', aka: ['preludes'], kind: 'form',
    short: 'A piece that precedes another, or an independent short piece without a set form, often built on one figure or texture.',
    html: `<p>Preludes originally tested an instrument or settled a key before a larger piece: lutenists and organists improvised them. Bach paired each of the 24 preludes of the <i>Well-Tempered Clavier</i> with a fugue. Chopin’s 24 Preludes, Op. 28, and Debussy’s two books of <i>Préludes</i> are independent pieces, each exploring one idea. An opera may also open with an orchestral prelude, such as Verdi’s for <i>La traviata</i>.</p><p>Rachmaninoff’s Prelude in C♯ minor, Op. 3 No. 2, written when he was nineteen, opens on a three-note figure, A–G♯–C♯, answered by quieter chords. Debussy placed the title of each prelude after the music, in parentheses: <i>La cathédrale engloutie</i> is the tenth of Book I.</p>`,
    hear: [
      { listen: 'rachmaninoff-prelude-c-sharp-minor', t: 0, note: 'The opening: a low three-note figure set against quieter answering chords.' },
      { listen: 'debussy-cathedrale-engloutie', t: 0, note: 'Debussy’s prelude begins with bare fifths before full chords; its title appears only after the music.' },
      { listen: 'verdi-traviata-prelude', t: 0, note: 'An operatic prelude: exposed high strings, with Violetta’s melody to follow.' },
    ],
    see: ['toccata', 'fugue', 'nocturne', 'pedal-point'],
  },
  {
    slug: 'nocturne', term: 'Nocturne', aka: [], kind: 'form',
    short: 'A short, lyrical piano piece with a singing melody over a broken-chord accompaniment, a form the Irish composer John Field made popular.',
    html: `<p>John Field’s nocturnes, first published in St Petersburg in 1812, were the first piano pieces to use the title in this sense. [[chopin|Chopin]] took the model, a vocal line floating above a left hand of wide broken chords, and wrote twenty-one nocturnes. The melody is typically decorated on each return rather than repeated unchanged.</p><p>Chopin’s Nocturne in D♭ major, Op. 27 No. 2 (<i>Lento sostenuto</i>), opens with a solo singing line over broken chords, then acquires a lower voice so the melody becomes a duet; a darker expansion turns the tonic to C♯ minor before the opening melody returns. Chopin played it in Leipzig in September 1835, where Mendelssohn learnt a substantial part of it by ear.</p>`,
    hear: [
      { listen: 'chopin-nocturne-op27-2', t: 0, note: 'The solo singing line above broken chords in the left hand.' },
      { listen: 'chopin-nocturne-op27-2', t: 42, note: 'A lower voice joins the melody: one voice becomes a pair.' },
    ],
    see: ['ternary-form', 'rubato', 'ornament', 'enharmonic-reinterpretation'],
  },
  {
    slug: 'lied', term: 'Lied', aka: ['Lieder', 'art song'], kind: 'form',
    short: 'German art song for solo voice and piano, setting a poem with equal care for words and accompaniment.',
    html: `<p>The nineteenth-century Lied, with [[schubert|Schubert]] at its head, treats the piano as a partner in the poem’s meaning: it paints the scene, sets the mood and often carries a motif that the voice does not. Song cycles, such as Schubert’s <i>Winterreise</i> (D. 911, 1827), set a sequence of poems as one narrative. In the later nineteenth century the Lied was orchestrated, as in the orchestral songs of [[mahler|Mahler]].</p><p><i>Urlicht</i> (“Primal Light”) sets a poem from the second volume of <i>Des Knaben Wunderhorn</i>, published in Heidelberg in 1808 by Achim von Arnim and Clemens Brentano. Mahler composed it as a song for alto and orchestra and made it the fourth movement of his Second Symphony. It is a newly composed song, not a transcription of a folk performance.</p>`,
    hear: [
      { listen: 'mahler-2-urlicht', t: 0, note: 'A solitary vocal phrase beside a brass chorale: one line, then several parts moving in hymn-like chords.' },
      { listen: 'mahler-2-urlicht', t: 64, note: 'The hymn yields to a flexible vocal sentence: the first stanza begins in the alto.' },
    ],
    see: ['aria', 'recitative', 'transcription', 'programme-music'],
  },
  {
    slug: 'aria', term: 'Aria', aka: ['arias'], kind: 'form',
    short: 'A self-contained song for one voice in an opera, oratorio or cantata, where the action pauses for a character’s feeling.',
    html: `<p>Recitative carries the plot; the aria stops it to express a feeling at length. The Baroque da capo aria is in A–B–A form: the singer ornaments the A section when it returns. Later composers dissolved the boundary, so that an aria can grow out of conversation and return to it.</p><p>Mimì’s “Sì, mi chiamano Mimì” in Puccini’s <i>La bohème</i> (Act I, Turin, February 1896) answers Rodolfo’s account of his poet’s life with her own. It moves from short speech-like phrases to sustained singing: at a held pause the light 2/4 account of solitary life gives way to common time and <i>Andante molto sostenuto</i>, with a melody about spring that climbs to D major.</p>`,
    hear: [
      { listen: 'puccini-mi-chiamano-mimi', t: 0, note: 'Mimì begins her answer: short speech-like phrases beside sustained singing, in one conversation.' },
      { listen: 'puccini-mi-chiamano-mimi', t: 140, note: 'A held pause, then the long lyrical span: a new metre and a melody in a broader register.' },
    ],
    see: ['recitative', 'lied', 'metre-change', 'fermata'],
  },
  {
    slug: 'recitative', term: 'Recitative', aka: ['recitatives'], kind: 'form',
    short: 'Sung speech: a vocal line that follows the rhythm and pitch of the words, used between arias to carry the story.',
    html: `<p>In <i>secco</i> (“dry”) recitative the singer is accompanied only by the continuo; in <i>accompagnato</i> an orchestra supplies chords or commentary. The singer is free to quicken or slow the speech, and the harmony is chosen to move on rather than to finish. The tenor’s “Comfort ye my people”, the first vocal number of Handel’s <i>Messiah</i>, is accompanied recitative.</p><p>Instrumental music can borrow the manner. C. P. E. Bach’s F♯ minor Fantasia alternates running passagework with what the Hall’s notes call recitative-like gestures: short, separated phrases that must articulate both the speaking line and its pauses.</p>`,
    hear: [
      { listen: 'cpe-bach-fantasia-fsharp', t: 180, note: 'The run gives way to speech: shorter, separated gestures, with gaps that let each harmony decay.' },
    ],
    see: ['aria', 'basso-continuo', 'fantasia'],
  },
  {
    slug: 'symphonic-poem', term: 'Symphonic poem', aka: ['tone poem'], kind: 'form',
    short: 'A single-movement orchestral work that tells a story or paints a subject, with its form shaped by the programme.',
    html: `<p>[[liszt|Liszt]] coined the name for thirteen orchestral works composed between 1848 and 1858, each one built from a few themes transformed to follow a poem, painting or idea. [[richard-strauss|Richard Strauss]] later wrote a series of tone poems (<i>Don Juan</i>, <i>Till Eulenspiegel</i>, <i>Don Quixote</i>) that fuse a large orchestra’s colour with an exact narrative.</p><p><i>Till Eulenspiegels lustige Streiche</i>, Op. 28, was first heard in Cologne in November 1895. It is marked “in rondo form”: a winding tune and a clipped motif identify the prankster through the episodes. The Hall’s recording is Herb Weber’s concert-band transcription, not the orchestral original.</p>`,
    hear: [
      { listen: 'richard-strauss-till-eulenspiegel', t: 0, note: 'The opening: a quiet, sustained prologue before the shorter, more pointed figures of the story.' },
      { listen: 'richard-strauss-till-eulenspiegel', t: 35, note: 'Two musical signatures for one character: a winding tune and a short clipped motif.' },
    ],
    see: ['programme-music', 'rondo', 'leitmotif', 'transcription'],
  },
  {
    slug: 'programme-music', term: 'Programme music', aka: ['program music'], kind: 'form',
    short: 'Instrumental music tied to a story, picture or poem that the composer published or implied.',
    html: `<p>The programme may be printed in the score, as a sonnet beside each concerto or as a prose scenario handed to the audience. It can name a character or place, or describe a sequence of events the music follows. The opposite is called absolute music. The Web of Influence uses the word <i>depicted</i> for the clearest links to a painting or poem.</p><p>Vivaldi’s <i>Four Seasons</i> was published in 1725 with a sonnet for each concerto, linked by letters to passages in the score. Berlioz’s <i>Symphonie fantastique</i> came with a printed programme in which an opium-dazed musician dreams that he has killed his beloved and is led to execution; the March to the Scaffold is the fourth movement. Debussy chose an adaptation of Hokusai’s <i>The Great Wave off Kanagawa</i> for the cover of the published score of <i>La Mer</i>.</p>`,
    hear: [
      { listen: 'berlioz-fantastique-march', t: 0, note: 'The fourth movement of five: the dream of an execution, with a heavy march tread and more ceremonial passages.' },
      { listen: 'vivaldi-spring-allegro', t: 100, note: 'A sonnet printed beside the parts: letters link its lines to passages in the score.' },
      { listen: 'debussy-la-mer-dawn', t: 138, note: 'Debussy’s own choice of Hokusai’s The Great Wave off Kanagawa for the published score.' },
    ],
    see: ['symphonic-poem', 'cyclic-form', 'quotation', 'leitmotif'],
  },
  {
    slug: 'concerto', term: 'Concerto', aka: ['concertos'], kind: 'form',
    short: 'A work in which one or more soloists contrast and cooperate with an orchestra, usually in three movements.',
    html: `<p>The Baroque concerto sets a solo group against the full ensemble, or <i>tutti</i>, in ritornello form. The Classical concerto absorbs sonata form, with the orchestra stating the themes first and the soloist developing them, and ends the first movement with a cadenza. Romantic composers lengthened both the display and the argument, and sometimes cut the orchestral introduction.</p><p>In Bach’s Fifth Brandenburg Concerto the solo group of flute, violin and harpsichord converses with the strings; the harpsichord’s part is written out in full and swells into a long cadenza. Schumann’s Piano Concerto in A minor begins with one orchestral attack and a descending piano flourish, with no long orchestral introduction. Mozart’s Clarinet Concerto, K. 622, was composed for Anton Stadler’s extended-range instrument.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 22, note: 'Flute, violin and harpsichord form the solo group, in conversation above the ensemble.' },
      { listen: 'schumann-piano-concerto-1', t: 0, note: 'One orchestral attack and a falling piano flourish: the soloist is involved from the first bar.' },
      { listen: 'mozart-clarinet-adagio', t: 34, note: 'The clarinet’s phrase rests on the dominant and the orchestra answers with the same shape in D major.' },
    ],
    see: ['ritornello', 'cadenza', 'basset-clarinet', 'sonata-form'],
  },
];

const harmony = [
  {
    slug: 'tonic', term: 'Tonic', aka: ['home key'], kind: 'harmony',
    short: 'The home note of a key and the chord built on it: the point of rest that a piece leaves and returns to.',
    html: `<p>In C major the tonic is C and the tonic chord is C–E–G. Every other note and chord is heard in relation to it: the dominant pulls towards it, the subdominant moves away from it, and a cadence is the moment the tonic is confirmed. A long piece can postpone the tonic, or leave it by modulation, but its return is what most listeners hear as arrival.</p><p>At the end of Chopin’s Nocturne in D♭ major the coda settles on a D♭ bass that the left hand keeps renewing, so the home note is prolonged rather than left. Beethoven’s Fifth ends its coda with the tonic C minor confirmed only after repeated dominant tension.</p>`,
    hear: [
      { listen: 'chopin-nocturne-op27-2', t: 280, note: 'The last expansion relaxes into a D♭ bass that the coda keeps renewing: a tonic pedal under the melody’s final duet.' },
    ],
    see: ['dominant', 'cadence', 'tonic-pedal', 'modulation'],
  },
  {
    slug: 'dominant', term: 'Dominant', aka: [], kind: 'harmony',
    short: 'The fifth note of the scale and the chord on it, which pulls strongly towards the tonic; the usual second key of a major-key exposition.',
    html: `<p>In C major the dominant is G, and the dominant chord G–B–D (often with F added, the dominant seventh) contains the leading note B, a semitone from the tonic C. That makes it the chord most strongly felt to need resolution. Composers use it to end phrases in mid-air (half cadence), to hold a section back (standing on the dominant), or to prepare a return.</p><p>Schubert’s Impromptu in G♭ holds a D♭ dominant seventh under a fermata at bars 54–55 before the opening melody returns. In Mozart’s G minor Symphony the exposition’s transition gathers on F major, the dominant of B♭, before the second theme; the retransition holds D, the dominant of G minor, until the first theme returns.</p>`,
    hear: [
      { listen: 'schubert-impromptu-gflat', bar: { n: '55', occ: 1 }, note: 'The held dominant releases: C♭ falls to B♭ and the G♭-major melody returns.' },
      { listen: 'mozart-40-molto-allegro', t: 50, note: 'In this stretch the transition gathers on the dominant of B♭ major and breaks off before the second theme.' },
    ],
    see: ['tonic', 'half-cadence', 'dominant-pedal', 'standing-on-the-dominant', 'perfect-cadence'],
  },
  {
    slug: 'modulation', term: 'Modulation', aka: ['modulate'], kind: 'harmony',
    short: 'A change of key within a piece, prepared through shared chords or reached abruptly.',
    html: `<p>A modulation can be smooth — through a chord that belongs to both keys (pivot chord), or a note held across the change (common-tone modulation) — or abrupt (direct modulation). Large forms depend on it: a sonata exposition moves from the home key to a second key, and the development travels further.</p><p>In Beethoven’s Fifth the exposition leaves C minor for E♭ major, its relative major: a short B♭-major chord, the dominant of E♭, closes the first group at bar 58, and the horns’ call at bar 59 begins the new key. In Bach’s B minor fugue, descending sequences in the episodes carry the music to E minor (bars 24–30) and to F♯ minor (bars 50–53) before each new entry.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '59', occ: 1 }, note: 'The horn call begins the second group, in E♭ major; quiet violins take over its melody at bar 63.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '24', occ: 1 }, note: 'An episode’s sequence changes the destination, moving towards E minor.' },
    ],
    see: ['pivot-chord', 'common-tone-modulation', 'direct-modulation', 'enharmonic-reinterpretation', 'sequence'],
  },
  {
    slug: 'cadence', term: 'Cadence', aka: ['cadences'], kind: 'harmony',
    short: 'A harmonic formula that closes a phrase, like punctuation: perfect, half, deceptive and plagal cadences are the four standard kinds.',
    html: `<p>A cadence is two or more chords that end a phrase with more or less finality. The perfect cadence (dominant to tonic) is a full stop; the half cadence stops on the dominant and asks a question; the deceptive cadence swerves from the dominant to another chord; the plagal cadence (subdominant to tonic) is the “Amen” close. Cadences also mark the joins in a form: the end of an exposition, the arrival of a coda.</p><p>The last chord of Bach’s B minor fugue is B major, not B minor. The raised third (D♯ replacing D♮) is called a Picardy third; it changes the mode without changing the tonic.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 22, note: 'The opening ritornello closes in D major, and its pulse carries on into the solo episode.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '76', occ: 1 }, note: 'The final chord settles on B major: D♯ replaces D♮ in the held fermata chord.' },
    ],
    see: ['perfect-cadence', 'half-cadence', 'deceptive-cadence', 'plagal-cadence', 'elision'],
  },
  {
    slug: 'pedal-point', term: 'Pedal point', aka: ['pedal note', 'organ point'], kind: 'harmony',
    short: 'A note held or repeated in the bass while the harmonies above it change, usually the tonic or the dominant.',
    html: `<p>The name comes from the organ, where the foot pedals sustain a bass note under changing chords. Above a pedal, harmonies can clash with the bass and then resolve as the pedal note becomes consonant again. A dominant pedal builds tension; a tonic pedal gives stability and often closes a piece.</p><p>In the last bars of Bach’s B minor fugue the bass holds F♯, the dominant, across the barline at bar 74 while the alto sings a last, shortened subject. At the end of Chopin’s Nocturne in D♭ the bass renews D♭, a tonic pedal. In Debussy’s <i>La cathédrale engloutie</i> the moving harmony settles on a low C foundation, so the broad chords above it move like a melody.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '74', occ: 1 }, note: 'The alto gives one last subject while the bass holds F♯ across the barline, postponing the arrival on B.' },
      { listen: 'chopin-nocturne-op27-2', t: 280, note: 'The coda: a D♭ bass renewed repeatedly beneath the right hand’s duet.' },
      { listen: 'debussy-cathedrale-engloutie', t: 106, note: 'A low C foundation replaces the moving triplets as parallel chords carry the melody.' },
    ],
    see: ['dominant-pedal', 'tonic-pedal', 'standing-on-the-dominant', 'ostinato'],
  },
  {
    slug: 'neapolitan-sixth', term: 'Neapolitan sixth', aka: ['Neapolitan chord'], kind: 'harmony',
    short: 'A major chord on the flattened second degree, usually in first inversion, used before a cadence for a sudden dark colour.',
    html: `<p>In C minor the Neapolitan is a D♭ major chord. In its classic “sixth” form the third, F, is in the bass, and the chord leads to the dominant G: D♭–F–A♭ over F resolves to G–B♮–D. The flattened second degree is a semitone above the tonic and is heard as a darkening of the key.</p><p>Chopin’s Ballade No. 1 in G minor begins with a Largo that outlines A♭ major, the flattened-supertonic harmony of G minor, in bare octaves. Here the flattened supertonic is the opening gesture, not a chord before a cadence, and the introduction’s pauses and final dissonance postpone a settled tonic before the Moderato begins.</p>`,
    hear: [
      { listen: 'chopin-ballade-1', t: 0, note: 'The Largo outlines A♭ major — the flattened supertonic of G minor — in bare octaves, before the Moderato.' },
    ],
    see: ['chromaticism', 'cadence', 'augmented-sixth'],
  },
  {
    slug: 'augmented-sixth', term: 'Augmented sixth chord', aka: ['augmented sixth', 'German sixth', 'Italian sixth', 'French sixth'], kind: 'harmony',
    short: 'A chord containing an augmented sixth between its outer notes, which expand outward by step to an octave on the dominant.',
    html: `<p>In C major or minor the interval is A♭ up to F♯. On the dominant chord the two notes resolve outward by step, A♭ to G and F♯ to G, an octave apart. Three standard versions add different inner notes: the Italian sixth (A♭–C–F♯), the French (adding D) and the German (adding E♭). Sounding identical to a dominant seventh on A♭, the German sixth can be respelled and reinterpreted to modulate.</p><p>Beethoven’s “Pathétique” Sonata, Op. 13, has a French sixth in the finale at bars 44–47, as set out in <i>Fundamentals, Function, and Form</i>; the final bars of Schubert’s String Quintet in C major, D. 956, use another, as Nicole Biamonte describes in <i>Music Theory Online</i>.</p>`,
    hear: [],
    see: ['tristan-chord', 'neapolitan-sixth', 'enharmonic-reinterpretation', 'diminished-seventh'],
  },
  {
    slug: 'diminished-seventh', term: 'Diminished seventh', aka: ['diminished seventh chord', 'diminished chord'], kind: 'harmony',
    short: 'A four-note chord stacked in minor thirds, so symmetrical that each note can lead to a different key: the standard sound of sudden instability.',
    html: `<p>B–D–F–A♭ is the diminished seventh on the leading note of C minor. Because the notes divide the octave into four equal minor thirds, only three different diminished seventh chords exist, and each can be respelled to resolve towards four keys. That ambiguity makes it a staple of retransitions and sudden turns.</p><p>Beethoven’s Fifth uses it twice. Bar 56 cuts off A–C–E♭–G♭, a diminished seventh over C, and bar 57 is silent; in bars 233–240 the winds and strings trade B–D–F–A♭ before the motto’s rhythm returns at the recapitulation. In Brahms’s Third, a diminished seventh intensifies the last swell of the Poco allegretto.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '56', occ: 1 }, note: 'The exposition cuts off on a diminished seventh over C; the next bar is silent.' },
      { listen: 'beethoven-5-first', bar: { n: '233', occ: 1 }, note: 'Winds and strings trade B–D–F–A♭, the diminished seventh on C minor’s leading note, in quiet blocks.' },
      { listen: 'brahms-3-poco-allegretto', t: 330, note: 'In this stretch strings join the recalled chords and a diminished seventh intensifies the last swell.' },
    ],
    see: ['augmented-sixth', 'retransition', 'general-pause', 'enharmonic-reinterpretation'],
  },
  {
    slug: 'tristan-chord', term: 'Tristan chord', aka: [], kind: 'harmony',
    short: 'The F–B–D♯–G♯ chord of the Prelude to Wagner’s Tristan und Isolde, whose ambiguous function made it a symbol of strained tonality.',
    html: `<p>The chord sounds in the second bar of the Prelude, in the opening phrase associated with Tristan, and is not resolved in the expected way: it moves on to another dissonance, and the music does not reach a full close until the end of the opera. [[wagner|Wagner]] completed <i>Tristan und Isolde</i> in 1859 and it was first performed in Munich in 1865. The notes themselves are unremarkable — respelled, F–A♭–C♭–E♭ is an ordinary half-diminished seventh — and similar chords occur earlier in Beethoven and Chopin. What is new is the context: analysts still disagree about its function.</p><p>The chord became a quotation. Berg cites it in the <i>Lyric Suite</i>, and Debussy jokingly quotes the opening bars of the opera in “Golliwogg’s Cakewalk” from <i>Children’s Corner</i>.</p>`,
    hear: [],
    see: ['chromaticism', 'augmented-sixth', 'appoggiatura', 'quotation', 'leitmotif'],
  },
  {
    slug: 'chromaticism', term: 'Chromaticism', aka: ['chromatic'], kind: 'harmony',
    short: 'The use of notes outside the key’s seven-note scale, so that melodies and chords move by semitones.',
    html: `<p>A chromatic note belongs to the twelve-note scale but not to the seven-note scale of the current key. A little chromaticism colours a diatonic melody; a lot loosens the grip of the key, as in Wagner’s <i>Tristan</i>, Mahler and the early works of Schoenberg. Chromatic lines can also be tonal: the subject of Bach’s B minor fugue uses all twelve pitch classes, yet its move towards F♯ gives the line a clear tonal direction.</p><p>The opening of Schoenberg’s Second String Quartet, last movement, suspends the usual harmonic bearings with chromatic lines; Chopin’s D♭ nocturne uses chromatic movement in inner notes to loosen a temporary foothold in C♯ minor.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'The alto’s subject: leaps connect pairs of notes a semitone apart, using all twelve chromatic pitch classes.' },
      { listen: 'schoenberg-quartet-2-entrueckung', t: 0, note: 'Across the instrumental introduction, chromatic lines without an immediate home-key cadence.' },
    ],
    see: ['atonality', 'chromatic-slide', 'tristan-chord', 'twelve-note-row'],
  },
  {
    slug: 'atonality', term: 'Atonality', aka: ['atonal'], kind: 'harmony',
    short: 'Music with no tonic: no single note or chord acts as home, so keys and cadences no longer organise it.',
    html: `<p>Atonal music does not use the key as its organising principle. Chords are heard by their sound rather than their function, and dissonance is not expected to resolve. The step towards it came gradually through the chromatic harmony of late Romanticism.</p><p>[[schoenberg|Schoenberg]]’s String Quartet No. 2, Op. 10 (1907–08), shows the transition. Its first two movements carry key signatures; the last two add a soprano singing poems by Stefan George and are almost fully atonal. The finale, <i>Entrückung</i>, begins “Ich fühle Luft von anderem Planeten” (“I feel air from another planet”), has no key signature, and ends on an F♯-major triad, the key in which the quartet began in minor. The first performance, in Vienna on 21 December 1908, had the soprano Marie Gutheil-Schoder and the Rosé Quartet.</p>`,
    hear: [
      { listen: 'schoenberg-quartet-2-entrueckung', t: 0, note: 'The introduction suspends the usual harmonic bearings: chromatic lines with no immediate home-key cadence.' },
      { listen: 'schoenberg-quartet-2-entrueckung', t: 590, note: 'The motion settles into an F♯-major triad: A♯ and C♯ complete it over F♯, major where the quartet began in F♯ minor.' },
    ],
    see: ['chromaticism', 'twelve-note-row', 'tristan-chord'],
  },
  {
    slug: 'twelve-note-row', term: 'Twelve-note row', aka: ['twelve-tone row', 'tone row', 'twelve-tone', 'serialism'], kind: 'harmony',
    short: 'A fixed ordering of all twelve pitch classes, used as the source of a piece’s melodies and harmonies and varied by inversion and reversal.',
    html: `<p>In a twelve-note (or twelve-tone) piece, every note is drawn from a row in which each of the twelve pitch classes appears once. The row can be played forwards (prime), upside down (inversion), backwards (retrograde) and both, and transposed to any of twelve pitches, so a composer has forty-eight forms to work with. [[schoenberg|Schoenberg]]’s first twelve-tone movement was the Waltz of his Five Piano Pieces, Op. 23, sketched on 26 July 1921; his Suite for Piano, Op. 25 (1921–23), was the first large work unified by one row.</p><p>A theme that happens to contain all twelve notes is not a row. The subject of Bach’s B minor fugue does, but it has no system of inversion and retrograde behind it, and it is heard against a home key.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'Not a row, but a subject using all twelve pitch classes, yet still pulled towards F♯ and B minor.' },
    ],
    see: ['atonality', 'chromaticism', 'counterpoint'],
  },
  {
    slug: 'modes', term: 'Modes', aka: ['modal', 'Dorian', 'Phrygian'], kind: 'harmony',
    short: 'Scales other than major and minor, each with its own pattern of tones and semitones: Dorian, Phrygian, Lydian, Mixolydian and others.',
    html: `<p>The modes come from medieval chant theory and were revived by nineteenth- and twentieth-century composers seeking an alternative to major and minor. Dorian is a minor scale with a raised sixth (D–E–F–G–A–B–C–D); Phrygian is minor with a lowered second; Lydian is major with a raised fourth. Pentatonic scales, with five notes, sound modal too.</p><p>Satie’s Gymnopédie No. 1 turns modal in bars 22–29: over a persistent D bass the melody uses C♮, F♮ and B♮, which gives a D Dorian colour rather than an ordinary D-minor scale. Dvořák’s Largo from the New World Symphony has a cor anglais melody of limited pitches, described as pentatonic in character, and Kelly Dean Hansen’s guide notes suggestions of the Phrygian mode in the slow movement of Brahms’s Fourth.</p>`,
    hear: [
      { listen: 'satie-gymnopedie-1', bar: { n: '19', occ: 1 }, note: 'The phrase brings C♮, F♮ and B♮ above the persistent D bass: Dorian colour rather than D minor.' },
      { listen: 'dvorak-9-largo', t: 40, note: 'The cor anglais melody uses a limited collection of pitches and long breaths.' },
    ],
    see: ['whole-tone-scale', 'octatonic-scale', 'modal-mixture'],
  },
  {
    slug: 'whole-tone-scale', term: 'Whole-tone scale', aka: ['whole-tone'], kind: 'harmony',
    short: 'A six-note scale made only of whole steps, with no leading note and so no clear tonic.',
    html: `<p>Starting on C the scale is C–D–E–F♯–G♯–A♯. Only two different whole-tone scales exist, because every note is two semitones from the next. With no semitones and no perfect fifths, it sounds weightless, and chords built from it are augmented triads. Glinka used it in <i>Ruslan and Lyudmila</i> (1842) to depict the sorcerer Chernomor; [[debussy|Debussy]] made it a signature, with whole-tone runs in the clarinets and flutes of the <i>Prélude à l’après-midi d’un faune</i> (1894).</p>`,
    hear: [],
    see: ['modes', 'octatonic-scale', 'chromaticism'],
  },
  {
    slug: 'octatonic-scale', term: 'Octatonic scale', aka: ['octatonic'], kind: 'harmony',
    short: 'An eight-note scale alternating tone and semitone, symmetrical, with only three transpositions; Rimsky-Korsakov, Stravinsky and Messiaen use it.',
    html: `<p>Starting on C the scale runs C–D–E♭–F–G♭–A♭–A–B. Because it repeats at every minor third, only three transpositions exist. Richard Taruskin traced its use from Liszt through [[rimsky-korsakov|Rimsky-Korsakov]] to [[stravinsky|Stravinsky]]. In <i>The Firebird</i> (1910), scholars following Taruskin hear the music of the sorcerer Kashchei as octatonic, set against the diatonic music of the human characters. Messiaen later called it his second mode of limited transposition.</p>`,
    hear: [
      { listen: 'stravinsky-firebird-infernal-dance', t: 0, note: 'Kashchei’s enforced dance, music of the ballet’s sorcerer, whose sound world scholars following Taruskin describe as octatonic.' },
    ],
    see: ['whole-tone-scale', 'modes', 'bitonality'],
  },
  {
    slug: 'bitonality', term: 'Bitonality', aka: ['polytonality', 'bitonal'], kind: 'harmony',
    short: 'Two keys sounding at once, as in Stravinsky’s Petrushka chord of C major against F♯ major.',
    html: `<p>Bitonal music layers two keys, one in each hand or each section, without resolving the clash. The two triads of the <i>Petrushka</i> chord are a tritone apart, the furthest-removed pair possible, and the effect is of two incompatible worlds side by side. In <i>Petrushka</i> (1911) the chord is the puppet’s music: in the second tableau, as the puppet pulls himself together, clarinets play arpeggios of C major and F♯ major together.</p>`,
    hear: [],
    see: ['octatonic-scale', 'atonality', 'ostinato'],
  },
  {
    slug: 'suspension', term: 'Suspension', aka: ['suspensions'], kind: 'harmony',
    short: 'A note held over from one chord into the next, where it clashes, then steps down to resolve.',
    html: `<p>A suspension has three stages: a note is prepared in a consonance, held (“suspended”) as the chord beneath it changes so that it becomes a dissonance, then resolves down by step. It delays the arrival of the chord’s true note and so intensifies it. Suspensions are common in Baroque cadences.</p><p>In Bach’s B minor fugue the soprano’s E, tied across bars 19–20 over D in the bass, resolves down to D. The fugue’s last suspension comes at bar 75, where the soprano holds B over the dominant F♯ before resolving to A♯, delaying the dominant’s third just before the final B-major chord. In Mahler’s Adagietto, suspensions enlarge the returning phrase into the climax.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '19', occ: 1 }, note: 'The soprano’s E tied over the bass’s D resolves down to D: the next step waits.' },
      { listen: 'mahler-5-adagietto', t: 555, note: 'Dissonances delay consonant arrivals as the returning phrase grows into the climax.' },
    ],
    see: ['appoggiatura', 'cadence', 'sequence'],
  },
  {
    slug: 'appoggiatura', term: 'Appoggiatura', aka: ['appoggiaturas'], kind: 'harmony',
    short: 'A dissonant “leaning” note that arrives on a strong beat, unprepared, and moves by step to a chord note.',
    html: `<p>From the Italian <i>appoggiare</i>, to lean. An appoggiatura delays the point of rest inside a phrase: the melody sounds a note that clashes with the harmony, leans on it, and then releases it. It differs from a suspension in that the note is not tied over from the previous chord. Analysts have read the G♯ of the Tristan chord as an appoggiatura.</p><p>Mahler’s Adagietto from the Fifth Symphony is full of them. The Hall’s notes ask you to listen for notes that clash with the harmony and then move by step to a chord tone.</p>`,
    hear: [
      { listen: 'mahler-5-adagietto', t: 80, note: 'Through this stretch, listen for notes that clash with the harmony and then move by step towards a chord tone.' },
    ],
    see: ['suspension', 'tristan-chord', 'ornament'],
  },
  {
    slug: 'modal-mixture', term: 'Modal mixture', aka: ['parallel minor', 'Picardy third'], kind: 'harmony',
    short: 'Borrowing notes or chords from the parallel minor or major, so that a tonic keeps its note but changes its colour.',
    html: `<p>C major and C minor share the tonic C but differ in their third, sixth and seventh. A composer can swap between them without changing the home note, which makes the change feel close rather than distant. The reverse move, ending a minor piece on a major triad, is called a Picardy third.</p><p>In Haydn’s “Surprise” Symphony the second variation restarts the theme in C minor: C and G remain, but E♭ replaces E, and forceful attacks make the switch conspicuous. In Chopin’s D♭ nocturne the tonic D♭ is respelled C♯ and major gives way to minor; Dvořák’s Largo does the same on the way to its minor-key middle. The last chord of Bach’s B minor fugue is the Picardy-third version.</p>`,
    hear: [
      { listen: 'haydn-94-andante', t: 164, note: 'The theme restarts in C minor: the tonic and fifth, C and G, remain while E♭ replaces E.' },
      { listen: 'chopin-nocturne-op27-2', t: 154, note: 'The tonic D♭ is respelled C♯ and major gives way to C♯ minor.' },
      { listen: 'dvorak-9-largo', t: 270, note: 'The same sounding tonic, respelled C♯, turns to minor: E♮ replaces the major third F.' },
    ],
    see: ['modulation', 'enharmonic-reinterpretation', 'cadence', 'theme-and-variations'],
  },
  {
    slug: 'lament-bass', term: 'Lament bass', aka: ['lamento bass', 'descending tetrachord'], kind: 'harmony',
    short: 'A bass descending by step from the tonic to the dominant, a pattern that has signalled grief since the early seventeenth century.',
    html: `<p>In A minor the line runs A–G–F–E, sometimes with the chromatic steps between filled in. Composers repeat it as a ground bass, so that the voices above it must express a lament over an unchanging descent. Monteverdi’s <i>Lamento della ninfa</i> (1638) is an early example, Purcell’s “When I am laid in earth” from <i>Dido and Aeneas</i> a famous one, and the “Crucifixus” of Bach’s Mass in B minor also rests on it.</p><p>The Web of Influence follows the lament bass as a thread through the centuries.</p>`,
    hear: [],
    see: ['passacaglia', 'chaconne', 'ostinato'],
  },
];

const texture = [
  {
    slug: 'counterpoint', term: 'Counterpoint', aka: ['contrapuntal'], kind: 'texture',
    short: 'Music made by combining independent melodic lines that fit together, as in fugue and canon.',
    html: `<p>From the Latin <i>punctus contra punctum</i>, “note against note”. In counterpoint each line has its own rhythm and shape, yet the combination stays consonant at the points that matter. The opposite is a single melody with accompaniment. Baroque counterpoint reached its height in [[bach|Bach]], and later composers returned to it when they wanted density: in the development of [[mozart|Mozart]]’s G minor Symphony, or in the middle variations of [[beethoven|Beethoven]]’s Op. 109 finale.</p><p>In the Op. 109 variations the Hall’s notes ask you to hear the lower part as a melody rather than an accompaniment: two hands, independent lines, not always sharing a rhythm. In Bach’s B minor fugue at bar 9 three voices have three distinct rhythms at once.</p>`,
    hear: [
      { listen: 'beethoven-109-variations', t: 388, note: 'Across the middle variations, follow the lower part as a melody in its own right.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '9', occ: 1 }, note: 'Subject in the bass, countersubject in the tenor and a quicker line in the alto: three distinct rhythms.' },
    ],
    see: ['fugue', 'imitation', 'canon', 'homophony', 'countersubject'],
  },
  {
    slug: 'imitation', term: 'Imitation', aka: ['imitative'], kind: 'texture',
    short: 'One voice repeating another’s melody a moment later, at the same pitch or a different one.',
    html: `<p>Imitation can be strict, as in canon and fugue, or loose, with a fragment passed between instruments. It is how a development lets one small idea sound in several parts at once, and how a chorus can turn a single declaration into a crowd of voices.</p><p>Handel’s “Hallelujah” chorus moves from block-like acclamations to overlapping entries on “For the Lord God omnipotent reigneth”, with the short “Hallelujah” rhythm still audible as an answer. In the central writing of Mozart’s G minor Symphony, the Hall’s note suggests following one fragment as another part takes it up.</p>`,
    hear: [
      { listen: 'handel-messiah-hallelujah', t: 36, note: 'The opening acclamations give way to overlapping entries: one declaration becomes several pursuing voices.' },
      { listen: 'mozart-40-molto-allegro', t: 165, note: 'Through the central writing, follow one fragment as another part takes it up.' },
    ],
    see: ['canon', 'fugue', 'stretto', 'counterpoint'],
  },
  {
    slug: 'canon', term: 'Canon', aka: [], kind: 'texture',
    short: 'Strict imitation: a melody followed note for note by other voices entering at a fixed distance; a round is a canon that can repeat endlessly.',
    html: `<p>Every voice sings or plays the same melody, each starting later. The simplest canon is the round: <i>Frère Jacques</i> sung in four staggered voices. In a canon at the unison the voices sing the same pitches; others enter at a different interval, higher or lower, or in inversion. In Bach’s <i>Goldberg Variations</i> every third variation is a canon, at a different interval each time.</p><p>In the slow movement of [[mahler|Mahler]]’s First Symphony (1888), a funeral march is built on <i>Frère Jacques</i> in the minor, introduced by a muted solo double bass.</p>`,
    hear: [],
    see: ['imitation', 'stretto', 'fugue', 'counterpoint'],
  },
  {
    slug: 'homophony', term: 'Homophony', aka: ['homophonic'], kind: 'texture',
    short: 'A texture in which one line leads and the others support it, often moving in the same rhythm as chords.',
    html: `<p>In homophony the ear follows one melody and hears the rest as harmony: a hymn sung in four parts, or a tune over a waltz accompaniment. It is the contrast to polyphony, in which several lines of equal weight move independently.</p><p>[[handel|Handel]] uses both in the “Hallelujah” chorus. The score alternates chordal declarations — the whole chorus on one rhythm — with imitative passages, so that, as the Hall’s note puts it, voices move together or in pursuit. Brahms’s Fourth Symphony finale has chorale-like writing in the trombones, with bassoons and horns, in the middle of its variations.</p>`,
    hear: [
      { listen: 'handel-messiah-hallelujah', t: 0, note: 'Throughout the chorus, tell voices moving together from lines that enter one after another.' },
      { listen: 'brahms-4-finale', t: 284, note: 'Trombones with bassoons and horns take over in measured chorale phrases, a low, blended chordal body.' },
    ],
    see: ['counterpoint', 'imitation', 'orchestration'],
  },
  {
    slug: 'ostinato', term: 'Ostinato', aka: ['ground bass'], kind: 'texture',
    short: 'Italian “obstinate”: a short phrase, rhythm or bass pattern repeated persistently while other things change above it.',
    html: `<p>An ostinato may be a bass line (a ground bass), a rhythm or a figure. It holds a texture together while melody and harmony change over it, and it is the engine of the passacaglia and of much minimalist music.</p><p>Ravel’s <i>Boléro</i> sets two melodies over a two-bar drum rhythm in three beats, repeated throughout; the growing orchestra supplies most of the large-scale change while the repeated bass keeps the same tonal foundation. In Bartók’s String Quartet No. 2, second movement, the opening repeated-note accompaniment makes a D-centred ostinato in which a pitch functions like a drum rather than a chord.</p>`,
    hear: [
      { listen: 'ravel-bolero', t: 0, note: 'Two tunes over a two-bar drum rhythm: the orchestra grows while the pattern stays fixed.' },
      { listen: 'bartok-quartet-2-allegro', t: 0, note: 'Repeated notes beneath the moving lines: a fixed pitch as anchor, with changing accents.' },
    ],
    see: ['passacaglia', 'lament-bass', 'pedal-point', 'tonic-pedal'],
  },
  {
    slug: 'motif', term: 'Motif', aka: ['motive', 'motifs'], kind: 'texture',
    short: 'A short musical idea — a few notes with a recognisable rhythm or contour — that a composer repeats and transforms.',
    html: `<p>A motif is smaller than a theme and more adaptable: it can be turned upside down, stretched, shrunk, passed between instruments or placed in a different harmony without losing its identity. Beethoven built whole movements from a few of them.</p><p>The four-note motto that opens his Fifth Symphony is the standard example. After a quaver rest, three Gs fall to a held E♭; three Fs then fall to D, held through bar 5. At bar 59 the horns turn it into a call, B♭–B♭–B♭–E♭, with wider intervals but the same repeated-note rhythm. Charles Ives incorporates the short-short-short-long rhythm into the melody of “The Alcotts”, the third movement of his <i>Concord</i> Sonata.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 1 }, note: 'The motto: rest, G–G–G, E♭ held under a fermata, then F–F–F and D.' },
      { listen: 'beethoven-5-first', bar: { n: '59', occ: 1 }, note: 'The horns turn the motto into a call; the repeated-note rhythm survives but the intervals widen.' },
      { listen: 'ives-concord-alcotts', t: 74, note: 'Across the stronger chordal passages, the short-short-short-long rhythm of Beethoven’s Fifth inside Ives’s own melody.' },
    ],
    see: ['motivic-link', 'leitmotif', 'cyclic-form', 'quotation'],
  },
  {
    slug: 'leitmotif', term: 'Leitmotif', aka: ['Leitmotiv', 'leitmotifs'], kind: 'texture',
    short: 'A theme tied to a person, object or idea in a music drama, returning with changed harmony or orchestration as the story develops.',
    html: `<p>[[wagner|Wagner]]’s <i>Ring</i> cycle is built from them: a few notes that stand for a character, a sword, a curse, heard in the orchestra whether or not the singer mentions them. The word was applied to Wagner’s works by the critic Hans von Wolzogen in his 1876 guide to the <i>Ring</i>; Wagner himself preferred terms such as <i>Grundthema</i> or <i>Hauptmotiv</i>. The Tristan chord belongs to the motif associated with Tristan.</p><p>The idea spread to orchestral music. In Strauss’s <i>Till Eulenspiegel</i> a winding tune and a short, clipped motif identify the prankster through the changing episodes.</p>`,
    hear: [
      { listen: 'richard-strauss-till-eulenspiegel', t: 35, note: 'Two musical signatures for one character, returning amid changing episodes.' },
    ],
    see: ['motif', 'cyclic-form', 'tristan-chord', 'symphonic-poem'],
  },
  {
    slug: 'cyclic-form', term: 'Cyclic form', aka: ['cyclic', 'idée fixe'], kind: 'texture',
    short: 'A work in several movements that brings back the same theme or themes in more than one of them.',
    html: `<p>Cyclic form unifies a multi-movement work by recall. A theme from one movement reappears, transformed, in another, and the finale may gather several. The best-known early example is the <i>idée fixe</i> of [[berlioz|Berlioz]]’s <i>Symphonie fantastique</i> (1830): a single melody represents the beloved in all five movements, appearing as a tender tune, a ballroom waltz and, in the Witches’ Sabbath, a grotesque dance.</p><p>In the March to the Scaffold, the fourth movement, the idée fixe returns for a moment just before the blow of the guillotine. Dvořák’s Largo, from the “New World” Symphony, brings back first-movement themes and combines them with its own at the central crest.</p>`,
    hear: [
      { listen: 'berlioz-fantastique-march', t: 252, note: 'A solo voice interrupts the crowd: the last thought of love, cut off by the orchestra’s blow.' },
      { listen: 'dvorak-9-largo', t: 490, note: 'The quicker episode admits remembered themes: the Largo’s tune combined with first-movement themes.' },
    ],
    see: ['programme-music', 'motif', 'leitmotif', 'quotation'],
  },
  {
    slug: 'orchestration', term: 'Orchestration', aka: ['orchestrate', 'orchestrated'], kind: 'texture',
    short: 'The choice of which instruments play each line; it can change a melody’s colour and weight without changing a note.',
    html: `<p>Orchestration is a compositional decision, not decoration. Doubling a flute with a muted trumpet, giving a melody to the cellos instead of the violins, or dividing a section changes what the line sounds like and how far it carries. [[ravel|Ravel]] is the best-known orchestrator of the early twentieth century: he orchestrated Mussorgsky’s <i>Pictures at an Exhibition</i> in 1922, and <i>Boléro</i> is built on the principle.</p><p><i>Boléro</i> passes the same eighteen-bar melodic statements from instrument to instrument over a fixed accompaniment: flute, clarinet, bassoon, and later composite colours such as the muted trumpet with flute an octave above in the sixth statement, and horn, celesta and piccolos in the ninth.</p>`,
    hear: [
      { listen: 'ravel-bolero', t: 232, note: 'The sixth statement combines muted trumpet with flute an octave above: a composite colour rather than two solos.' },
      { listen: 'ravel-bolero', t: 360, note: 'Solo colours give way to mixtures: horn, celesta and piccolos share the melody across registers.' },
    ],
    see: ['orchestration-change', 'transcription', 'divisi', 'pizzicato'],
  },
  {
    slug: 'divisi', term: 'Divisi', aka: [], kind: 'texture',
    short: 'Italian “divided”: a string section splits so that its players play different parts instead of the same one.',
    html: `<p>Normally the first violins all play one line. In <i>divisi</i> passages the section divides, so a group of sixteen violins might play two or four separate parts, and one section gives a fuller or more transparent chord. The score marks it <i>div.</i> and cancels it with <i>unis.</i></p><p>The Adagietto of Mahler’s Fifth, scored for strings and harp, builds its climax by raising the violin line and increasing the weight of the divided strings, while the inner parts keep moving beneath sustained melodic notes. Verdi’s Prelude to <i>La traviata</i> opens with quiet, divided high strings.</p>`,
    hear: [
      { listen: 'mahler-5-adagietto', t: 555, note: 'The return grows into a climax: the violin line rises and the divided strings add weight.' },
      { listen: 'verdi-traviata-prelude', t: 0, note: 'The opening: quiet, divided high strings, not the full orchestra.' },
    ],
    see: ['orchestration', 'tremolo', 'pizzicato'],
  },
  {
    slug: 'pizzicato', term: 'Pizzicato', aka: ['pizz.'], kind: 'texture',
    short: 'Plucking a string with the finger instead of drawing the bow across it, giving a short, dry note.',
    html: `<p>Marked <i>pizz.</i> and cancelled by <i>arco</i> (“with the bow”). Pizzicato notes decay at once, so a plucked line has a clipped edge and almost no sustain. A composer can contrast it with a bowed phrase without changing the number of players.</p><p>The scherzo of Ravel’s String Quartet makes the contrast its subject: a plucked first theme and a bowed second theme, the plucked attacks returning to restore the opening’s balance after the muted middle. In the first variation of the finale of Brahms’s Fourth Symphony, horns and timpani mark the first beat and plucked strings answer on the second, leaving silence on the third.</p>`,
    hear: [
      { listen: 'ravel-quartet-scherzo', t: 0, note: 'Compare the rhythm of the plucked attacks with the line of a longer bowed phrase.' },
      { listen: 'ravel-quartet-scherzo', t: 290, note: 'Plucked attacks recover the opening’s balance as the scherzo returns.' },
      { listen: 'brahms-4-finale', t: 16, note: 'The theme’s harmonies broken into separate beats: horns and timpani on the first, plucked strings on the second.' },
    ],
    see: ['col-legno', 'tremolo', 'divisi'],
  },
  {
    slug: 'tremolo', term: 'Tremolo', aka: ['tremolos'], kind: 'texture',
    short: 'Rapid repetition of one note, on strings by very short bow strokes, to make a shimmering, unsettled sustained sound.',
    html: `<p>The bowed tremolo is the commonest: the player moves the bow back and forth as fast as possible on one note. Pianists produce a tremolo by rapidly alternating two notes, and timpanists by a roll. Tremolo gives sustained sound a tension that a held note lacks, and is often used under a climax or as a background to something more exposed.</p><p>In the coda of Beethoven’s Fifth the high C in the violins alternates between held notes and tremolo while the bass changes beneath it. The Hall’s band transcription of Debussy’s <i>La Mer</i> builds its closing chorale from wind and brass without the string tremolos of the orchestral original.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '374', occ: 1 }, note: 'High C in the violins alternates between held and tremolo notes above the changing bass.' },
      { listen: 'debussy-la-mer-dawn', t: 514, note: 'The closing chorale in a band transcription: wind and brass weight in place of string tremolos.' },
    ],
    see: ['pizzicato', 'col-legno', 'orchestration'],
  },
  {
    slug: 'col-legno', term: 'Col legno', aka: [], kind: 'texture',
    short: 'Italian “with the wood”: string players strike or draw the stick of the bow, not its hair, for a dry, clattering sound.',
    html: `<p>Hitting the strings with the stick gives a short, percussive click with little pitch; drawing the stick across them (<i>col legno tratto</i>) gives a faint, hollow sound. A composer asks for it to evoke bones, rattling or something ghostly. It is cancelled by <i>arco</i> or <i>col crini</i> (“with the hair”).</p><p>Berlioz uses it in the finale of the <i>Symphonie fantastique</i> (1830), the Witches’ Sabbath, where it is among the effects that depict the gathering of witches. The Hall’s recording is the fourth movement, the March to the Scaffold, which comes before it.</p>`,
    hear: [],
    see: ['pizzicato', 'tremolo', 'programme-music'],
  },
  {
    slug: 'ornament', term: 'Ornament', aka: ['ornaments', 'ornamentation', 'trill'], kind: 'texture',
    short: 'A small decorative note or group — trill, turn, mordent — added to a melody note, written as a sign or in small notes.',
    html: `<p>French harpsichord music is dense with ornaments, which composers marked with signs and explained in tables. [[couperin|François Couperin]] published a treatise on harpsichord playing, <i>L’Art de toucher le clavecin</i>, in 1716. A good performer hears the principal note and the ornament around it as one gesture, with the trill or turn shaping the approach to a resting point rather than adding a new melodic destination.</p><p>Trills can also be structural. In the final variation of Beethoven’s Op. 109, rapidly repeated notes approach a sustained layer while other lines keep moving.</p>`,
    hear: [
      { listen: 'couperin-nations-piemontaise', t: 310, note: 'Throughout the airs, distinguish principal notes from the ornaments that shape the approach to a resting point.' },
      { listen: 'beethoven-109-variations', t: 700, note: 'Through the final variation, trilled writing approaches a sustained layer while other lines keep moving.' },
    ],
    see: ['appoggiatura', 'suspension', 'basso-continuo'],
  },
];

const rhythm = [
  {
    slug: 'rubato', term: 'Rubato', aka: ['tempo rubato'], kind: 'rhythm',
    short: 'Italian “stolen”: a flexible tempo in which the performer lingers on some notes and hurries others, giving back the time within the phrase.',
    html: `<p>Rubato is rarely notated; it belongs to the player. In one form the melody moves freely while the accompaniment keeps time. [[mozart|Mozart]] described this to his father in October 1777: in a rubato in an Adagio the left hand should go on playing in strict time while the right hand yields. In a later sense, the whole texture speeds and slows together.</p><p>Because it varies between players, rubato is one reason two recordings of the same piece differ in length and in the timing of each bar.</p>`,
    hear: [],
    see: ['tempo-change', 'score-alignment', 'nocturne'],
  },
  {
    slug: 'metre', term: 'Metre', aka: ['meter', 'time signature'], kind: 'rhythm',
    short: 'The regular grouping of beats into bars: 3/4 is three crotchet beats to the bar, 6/8 two groups of three quavers.',
    html: `<p>Metre is the pattern of strong and weak beats under the notes. Simple metre divides each beat into two (2/4, 3/4, 4/4); compound metre divides it into three (6/8, 9/8). Composers displace it by syncopation, accents on weak beats, or by holding notes across bar lines so that an upbeat sounds like a downbeat.</p><p>The third movement of Brahms’s Third Symphony is written in 3/8, yet its interlude has held wind chords crossing the bar lines, and cellos with a syncopated line, so upbeats sound like downbeats; in the closing pages, longer note values suggest 3/4 across the written 3/8. In the finale of the Fourth, a slower variation changes 3/4 into 3/2, doubling the length of each bar while the note values keep the same speed.</p>`,
    hear: [
      { listen: 'brahms-3-poco-allegretto', t: 110, note: 'A cadence loses its downbeat: held wind chords cross the bar lines and the cellos’ line is syncopated.' },
      { listen: 'brahms-4-finale', t: 205, note: '3/4 becomes 3/2: each bar is twice as long while the note values keep the same speed.' },
    ],
    see: ['metre-change', 'polyrhythm', 'tempo-change'],
  },
  {
    slug: 'polyrhythm', term: 'Polyrhythm', aka: ['two against three', 'cross-rhythm'], kind: 'rhythm',
    short: 'Two or more conflicting rhythms sounding together, such as two notes in one hand against three in the other.',
    html: `<p>In a polyrhythm both layers share the same underlying pulse but divide it differently. Two against three is the classic case: the two layers coincide only at the start of each group.</p><p>Prokofiev’s Second Piano Sonata opens with a melody grouped in pairs above an accompaniment divided into threes. Debussy’s <i>La Mer</i> uses groups of two and three that share the same stretch of time, and Ravel’s String Quartet restores the opening’s two-against-three friction when the scherzo returns.</p>`,
    hear: [
      { listen: 'prokofiev-piano-sonata-2', t: 0, note: 'A melody in pairs above triplet arpeggios: try following the two layers separately.' },
      { listen: 'debussy-la-mer-dawn', t: 164, note: 'Throughout this movement, groups of two and three share the same stretch of time.' },
      { listen: 'ravel-quartet-scherzo', t: 290, note: 'The scherzo returns with its two-against-three friction after the middle’s sustained phrases.' },
    ],
    see: ['metre', 'ostinato'],
  },
];

const notation = [
  {
    slug: 'bar', term: 'Bar', aka: ['bars', 'bar number', 'bar numbers'], kind: 'notation',
    short: 'A unit of music between two bar lines, holding a set number of beats; scores number the bars so passages can be found.',
    html: `<p>American usage says <i>measure</i>. Bars are counted from the first complete bar; pick-up notes before it are not numbered. A passage inside a repeat is performed twice, and the Hall therefore records which pass is meant: “bar 1, occurrence 2” is the second time bar 1 is played.</p><p>Beethoven’s Fifth, first movement, shows the effect. The exposition (bars 1–124) is repeated, so every bar from 1 to 124 has two timings in the recording. Bar numbers on the Hall’s pages come from public-domain scores, and their timings are produced by software and marked provisional until a listener has checked them.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 1 }, note: 'Bar 1, occurrence 1: the first time the motto is heard.' },
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 2 }, note: 'Bar 1, occurrence 2: the exposition repeat begins, and the bar is played again.' },
    ],
    see: ['score-alignment', 'catalogue-number'],
  },
  {
    slug: 'catalogue-number', term: 'Catalogue number', aka: ['catalogue numbers', 'opus number', 'opus numbers', 'BWV'], kind: 'notation',
    short: 'The number that identifies a work: Op. for the composer’s or publisher’s opus order, or a letter code from a later scholar’s catalogue.',
    html: `<p>Opus numbers were often assigned by a publisher at the time of publication, so they do not always follow the order of composition. For composers who left no reliable list, scholars compiled catalogues, and the initials of the compiler became part of each work’s name: <b>BWV</b> (<i>Bach-Werke-Verzeichnis</i>, Wolfgang Schmieder, 1950), <b>K.</b> or <b>KV</b> for [[mozart|Mozart]] (Ludwig von Köchel, 1862), <b>D.</b> for [[schubert|Schubert]] (Otto Erich Deutsch, 1951), <b>RV</b> for [[vivaldi|Vivaldi]] (Peter Ryom, 1973), <b>Wq</b> for [[cpe-bach|C. P. E. Bach]] (Alfred Wotquenne, 1905).</p><p>Beware that one letter can mean different catalogues: Scarlatti’s <b>K.</b> numbers are Ralph Kirkpatrick’s (1953), so Mozart’s Symphony No. 40 is K. 550 and Scarlatti’s Sonata in D major is K. 119.</p>`,
    hear: [],
    see: ['bar', 'binary-form'],
  },
];

const tuning = [
  {
    slug: 'equal-temperament', term: 'Equal temperament', aka: ['equal-tempered'], kind: 'tuning',
    short: 'The tuning that divides the octave into twelve equal semitones, so every key sounds alike and no interval except the octave is perfectly pure.',
    html: `<p>Each semitone is a frequency ratio of the twelfth root of 2, about 1.0595. Fifths come out about two cents narrower than pure, and major thirds about fourteen cents wider. The advantage is that a piece can be played in any key, and modulate to any other, without a bad-sounding interval turning up. It has been the normal tuning of the piano since the nineteenth century.</p><p>The Hall’s recordings of Rameau’s Gavotte and Scarlatti’s K. 119 are played on a piano, normally tuned in equal temperament, though both composers wrote for harpsichord, tuned in other ways.</p>`,
    hear: [
      { listen: 'scarlatti-sonata-k119', t: 0, note: 'A harpsichord sonata, performed here on a piano.' },
      { listen: 'rameau-gavotte-six-doubles', t: 0, note: 'A harpsichord suite movement, performed here on a piano.' },
    ],
    see: ['well-temperament', 'concert-pitch'],
  },
  {
    slug: 'well-temperament', term: 'Well temperament', aka: ['well-tempered'], kind: 'tuning',
    short: 'A family of historical tunings in which every key is usable but each has a slightly different colour; not the same as equal temperament.',
    html: `<p>Earlier systems, such as meantone, made some keys beautifully pure and others unusable. Well temperaments, such as those described by Andreas Werckmeister in 1691, spread the compromise unevenly: keys with few sharps or flats keep purer thirds, remote keys are tenser. Bach’s <i>Well-Tempered Clavier</i>, Book I (1722), has a prelude and fugue in all 24 major and minor keys, which needs a tuning in which every key is usable.</p><p>The title does not say which tuning Bach used, and scholars disagree; “well-tempered” is not a synonym for “equal-tempered”. The Hall’s recording of the B minor fugue is a piano performance.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'The B minor fugue from Book I, played here on a piano; the title names a well-tempered keyboard, not a tuning.' },
    ],
    see: ['equal-temperament', 'concert-pitch', 'fugue'],
  },
  {
    slug: 'concert-pitch', term: 'Concert pitch', aka: ['A=440', 'A = 440', 'A440', 'A=415', 'A = 415', 'pitch standard'], kind: 'tuning',
    short: 'The frequency to which an orchestra tunes: A=440 Hz today, but Baroque ensembles often tune near A=415, about a semitone lower.',
    html: `<p>The note A above middle C is the reference. A 1939 conference at Broadcasting House in London recommended 440 Hz, and the standard was adopted by the International Organization for Standardization in 1955 and finalised as ISO 16 in 1975. Before it, a′ = 435 Hz had been fixed in Paris in 1859 (<i>diapason normal</i>) and confirmed at a Vienna conference in 1885. Historical pitch varied from city to city and decade to decade.</p><p>Early-music ensembles now commonly use A=415 for the Baroque, about a semitone lower than modern pitch, and around A=430 for the Classical period. The Hall’s Couperin recording appears to sit near A=415 by estimate; the performers do not document a pitch standard.</p>`,
    hear: [
      { listen: 'couperin-nations-piemontaise', t: 38, note: 'The recording’s pitches fall about a semitone below the written music: an estimate, not a documented choice.' },
    ],
    see: ['period-instruments', 'equal-temperament', 'well-temperament'],
  },
];

const instrument = [
  {
    slug: 'clavichord', term: 'Clavichord', aka: [], kind: 'instrument',
    short: 'A small keyboard instrument in which brass tangents strike the strings and stay in contact while the key is held; quiet, but sensitive to touch.',
    html: `<p>When a clavichord key is pressed, a brass tangent hits the string and stays against it, so the player’s finger pressure still affects the sounding note. A trained player can add a gentle vibrato (<i>Bebung</i>), and the instrument can sustain and swell very slightly. It is too quiet for any room larger than a small one, and was made for the player’s own ears.</p><p>[[cpe-bach|C. P. E. Bach]] wrote his F♯ minor Fantasia, Wq 67 (1787), for it. Charles Burney described Bach playing the clavichord in 1772 until nearly eleven at night. The Hall’s recording has Joan Benson at the clavichord.</p>`,
    hear: [
      { listen: 'cpe-bach-fantasia-fsharp', t: 0, note: 'Listen to the relationship between attack, continuation and release: the tangents stay in contact while keys are held.' },
      { listen: 'cpe-bach-fantasia-fsharp', t: 180, note: 'Short separated gestures: the clavichord must articulate both the speaking line and its pauses.' },
    ],
    see: ['fantasia', 'ornament', 'recitative'],
  },
  {
    slug: 'basset-clarinet', term: 'Basset clarinet', aka: ['basset clarinets'], kind: 'instrument',
    short: 'A clarinet extended downwards by a few notes, for which Mozart wrote his Clarinet Concerto, K. 622, for Anton Stadler.',
    html: `<p>Anton Stadler’s extended-range clarinet could play lower than the clarinets most players use. [[mozart|Mozart]] wrote the concerto for it, and the autograph is lost; the early published edition adapted the low passages for an ordinary clarinet, so modern basset-clarinet versions reconstruct the extended line from surviving evidence rather than a complete original score.</p><p>In the Hall’s recording of the Adagio, William McColl plays a basset clarinet he constructed himself, not a surviving instrument from Stadler’s time.</p>`,
    hear: [
      { listen: 'mozart-clarinet-adagio', t: 182, note: 'McColl plays a basset clarinet of his own construction through the Adagio.' },
    ],
    see: ['concerto', 'period-instruments'],
  },
];

const performance = [
  {
    slug: 'basso-continuo', term: 'Basso continuo', aka: ['continuo', 'figured bass', 'thoroughbass'], kind: 'performance',
    short: 'The accompanying bass line of Baroque music, played by a low melody instrument and a chord player who fills in the harmony from numbers.',
    html: `<p>The bass line is written with small figures under the notes (<i>figured bass</i>) giving the intervals above it: 6 means a first-inversion chord, 7 a seventh, and so on. A keyboard player — harpsichord, organ or lute — improvises the chords from the figures, while a cello, viola da gamba or bassoon doubles the bass. Together they are the continuo; the keyboard’s realisation is different at each performance.</p><p>Couperin’s <i>La Piémontaise</i> from <i>Les Nations</i> (1726) is written for two treble instruments and continuo; in the Hall’s recording violin and flute take the upper parts, and viola da gamba and keyboard share the bass. In Bach’s Fifth Brandenburg Concerto the harpsichord has a written-out solo part rather than only accompanying chords; the Hall lists it as an obbligato part, a written part the composer treats as essential.</p>`,
    hear: [
      { listen: 'couperin-nations-piemontaise', t: 0, note: 'Violin and flute carry the upper parts; viol and keyboard share the bass.' },
      { listen: 'bach-brandenburg-5-allegro', t: 22, note: 'The harpsichord has a written-out solo part, not just accompanying chords, within the solo group.' },
    ],
    see: ['clavichord', 'recitative', 'concerto'],
  },
  {
    slug: 'period-instruments', term: 'Period instruments', aka: ['period instrument', 'historically informed performance', 'original instruments'], kind: 'performance',
    short: 'Instruments built like those of the composer’s day, or copies, played with the pitch, tuning and techniques of the period.',
    html: `<p>Gut strings, natural horns and trumpets without valves, harpsichords and fortepianos sound and balance differently from their modern descendants, and a baroque or classical orchestra on them usually tunes lower. “Historically informed performance” adds the study of ornamentation, tempo, articulation and continuo practice from treatises and scores, and became established in the later twentieth century.</p><p>A recording can show some of those signs without being documented as period practice. The Hall’s Couperin recording appears by estimate to sit near A=415, about a semitone below modern pitch; its performers do not document a pitch standard, so the estimate is not presented as a claim about instruments.</p>`,
    hear: [],
    see: ['concert-pitch', 'basso-continuo', 'clavichord'],
  },
];

const recording = [
  {
    slug: 'acoustic-recording', term: 'Acoustic recording', aka: ['acoustic recordings', 'electrical recording', 'electrical recordings'], kind: 'recording',
    short: 'Recording before microphones, when performers played into a horn that drove the cutting stylus directly; electrical recording replaced it in 1925–27.',
    html: `<p>Before the mid-1920s performers crowded around a horn, and the sound waves moved a diaphragm that cut the groove directly. The system registered only a narrow band of frequencies — roughly 350 to 3,000 Hz, according to the Discography of American Historical Recordings — and the need to gather round one horn limited the size of ensembles. In spring 1925 Victor and Columbia began issuing records made with microphones and amplifiers; the range widened to about 100–5,000 Hz, and orchestral recording grew rapidly. Edison, the last major label to change, recorded its Diamond Discs acoustically until 1927.</p><p>Rachmaninoff’s own recording of his C♯ minor Prelude was made in 1919 for Edison (Diamond Disc 82187-R, issued in December 1920), so it is an acoustic recording. Haydn’s “Surprise” Andante, with Koussevitzky and the Boston Symphony in Symphony Hall on 22 April 1929 for Victor, is electrical.</p>`,
    hear: [
      { listen: 'rachmaninoff-prelude-c-sharp-minor', t: 0, note: 'The composer at the keyboard in 1919: an acoustic recording on an Edison Diamond Disc.' },
      { listen: 'haydn-94-andante', t: 0, note: 'An electrical recording: Koussevitzky and the Boston Symphony for Victor, 22 April 1929.' },
    ],
    see: ['78-rpm', 'matrix-number', 'transfer', 'public-domain-audio'],
  },
  {
    slug: '78-rpm', term: '78 rpm', aka: ['78s', '78 rpm disc', 'shellac disc'], kind: 'recording',
    short: 'The nominal speed of shellac discs from the early 1900s to the 1950s; a 12-inch side held about four and a half minutes.',
    html: `<p>In the acoustic era disc speeds varied between makers; the standard settled at roughly 78 revolutions a minute. A symphony needed several discs, issued as a numbered set whose sides were played in turn. Edison’s Diamond Discs were different: they ran at 80 rpm and were cut vertically (“hill and dale”), so they cannot be played on a machine built for the others.</p><p>The Hall’s recording of the “Surprise” Andante is two sides, <i>Andante, part 3</i> and <i>Andante concluded, part 4</i>, of Victor set M-55 (the Andante on disc 7059). The <i>Scheherazade</i> movement is Bob Varney’s transfer from the original Victor 78 rpm set DM-920, made by Pierre Monteux and the San Francisco Symphony in March 1942.</p>`,
    hear: [
      { listen: 'haydn-94-andante', t: 0, note: 'This Andante is two 78 rpm sides of Victor set M-55, joined in the transfer.' },
      { listen: 'rimsky-korsakov-scheherazade-prince', t: 0, note: 'Bob Varney’s transfer from the original Victor 78 rpm set DM-920, recorded in March 1942.' },
    ],
    see: ['acoustic-recording', 'matrix-number', 'transfer'],
  },
  {
    slug: 'matrix-number', term: 'Matrix number', aka: ['matrix', 'take number'], kind: 'recording',
    short: 'The number etched in a disc’s run-out groove that identifies the recording; a take number says which attempt was issued.',
    html: `<p>The catalogue number on a record’s label names the product you could buy; the matrix identifies the master from which it was pressed. Companies numbered matrices in their own series, usually with a letter prefix. The two numbers can differ: Columbia’s D 12801 couples Sibelius’s <i>Valse triste</i> (matrix FX 51, 5 June 1925) with Lalo’s <i>Chants russes</i> (matrix FX 56).</p><p>A suffix such as “take 3” says which attempt was issued. Victor’s CVE-48984, take 1, and CVE-48985, take 3, are the two sides of the Haydn Andante recorded on 22 April 1929; the <i>La traviata</i> Prelude with Toscanini and the New York Philharmonic is CVE-48936, take 3. For Rachmaninoff’s Edison disc the National Park Service transcribes the matrix as 6742-C-2-3 [2-1]; its suffixes are not independently decoded.</p>`,
    hear: [
      { listen: 'sibelius-valse-triste', t: 0, note: 'Columbia matrix FX 51, recorded on 5 June 1925 and issued on catalogue number D 12801.' },
      { listen: 'verdi-traviata-prelude', t: 0, note: 'Matrix CVE-48936: take 3 is the issued master listed by the Discography of American Historical Recordings.' },
    ],
    see: ['78-rpm', 'acoustic-recording', 'evidence-status'],
  },
  {
    slug: 'transfer', term: 'Transfer', aka: ['transfers'], kind: 'recording',
    short: 'Copying a disc or tape into a digital file; the stylus, playback speed, equalisation and noise reduction chosen all shape what you hear.',
    html: `<p>An old recording reaches a listener through a transfer engineer. A disc must be played with a stylus of the right shape, at the right speed, through an equalisation curve that matches the one used when the master was cut; clicks and noise may then be reduced. Each choice changes the sound, so a transfer credit is part of a recording’s provenance. The Hall’s dossiers record who made each transfer and what is documented about its processing.</p><p>Bob Varney is credited with transfers from original Victor 78 rpm sets (Haydn’s “Surprise” Andante, Rimsky-Korsakov’s <i>Scheherazade</i>); stylus, playback curve, side-join locations and noise treatment are not documented. Adam Cuerden cleaned and restored the copy of Rachmaninoff’s 1919 Edison disc from audio published by the United States National Park Service; no speed-correction log is given.</p>`,
    hear: [
      { listen: 'rachmaninoff-prelude-c-sharp-minor', t: 175, note: 'This digital copy of the 1919 Edison disc was cleaned and restored by Adam Cuerden.' },
    ],
    see: ['78-rpm', 'acoustic-recording', 'public-domain-audio', 'evidence-status'],
  },
  {
    slug: 'public-domain-audio', term: 'Public domain', aka: ['public-domain recordings'], kind: 'recording',
    short: 'Free of copyright. A composition and a recording of it have separate terms, so out-of-copyright music can sit on a protected recording.',
    html: `<p>Copyright in a piece of music and copyright in one recording of it are separate. A work by Bach or Mozart is long out of copyright, but a 1929 recording of it carries its own rights. In the European Union, performers’ and producers’ rights in a recording run for 70 years from publication (extended from 50 by Directive 2011/77/EU). In the United States, the Music Modernization Act of 2018 gave recordings made before 1972 federal terms: recordings made before 1923 entered the public domain on 1 January 2022, and recordings published in 1925 on 1 January 2026.</p><p>This is why the Hall’s dossiers keep composition rights and recording rights apart, and why a licence tag on Wikimedia Commons is not treated as legal clearance. Rachmaninoff’s Edison disc, released in December 1920, is inside the US public domain. A 1929 Victor recording such as the Haydn “Surprise” Andante depends on its first publication date, and the dossier records conflicting rights metadata and marks its status disputed.</p>`,
    hear: [],
    see: ['transfer', 'evidence-status', 'acoustic-recording'],
  },
  {
    slug: 'level-trace', term: 'Level trace', aka: ['relative level'], kind: 'recording',
    short: 'The Hall’s graph of relative level within one recording: where it grows stronger or quieter, never loudness or a comparison between recordings.',
    html: `<p>A level trace is computed from the audio file by the Hall’s analysis tools. It is “relative level within this recording”: the quietest and strongest stretches of that one file, on its own scale. It is not a measure of loudness, it is not the composer’s dynamics, and it cannot be compared between two recordings, because recording distance, level setting and noise change the level independently of what the score asks for.</p><p>Some listening notes rest on it. They carry the basis “audio-feature” and describe what the trace shows, for example a stretch where level falls while detected attacks stay frequent.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 204, note: 'Through this stretch the relative level falls while the rapid internal motion continues.' },
    ],
    see: ['score-alignment', 'evidence-status'],
  },
  {
    slug: 'score-alignment', term: 'Score alignment', aka: ['score-aligned'], kind: 'recording',
    short: 'Matching a score’s bars to times in a recording by software; the Hall marks such timings provisional until a listener has checked them by ear.',
    html: `<p>Four recordings in the Hall — Bach’s B minor fugue, the first movement of Beethoven’s Fifth, Satie’s first <i>Gymnopédie</i> and Schubert’s G♭ Impromptu — have a public-domain score whose bars are matched to times in the audio. The software turns the score into timed notes and warps it to the recording (dynamic time warping), producing a time for each performed bar. All four are currently marked <i>provisional</i>: the alignment is automatic and has not been checked by ear.</p><p>Because a repeated passage is played twice, each performed bar has an <i>occurrence</i>: “bar 1, occurrence 2” is the second time bar 1 is played. A hear pointer in this glossary that names a bar jumps to the aligned time; if a score file is missing, the entry links to the recording without inventing a time.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 2 }, note: 'The exposition repeat: bar 1 is played again, so it has a second aligned time.' },
    ],
    see: ['bar', 'level-trace', 'evidence-status'],
  },
];

const influence = [
  {
    slug: 'quotation', term: 'Quotation', aka: ['musical quotation'], kind: 'influence',
    short: 'Using a recognisable passage of another work, or a chant or tune, inside a new piece, openly or as an allusion.',
    html: `<p>A quotation carries its source with it: a listener who knows the tune hears two things at once. It may be reverent, ironic or purely structural. [[berlioz|Berlioz]] sets the plainchant <i>Dies irae</i> in the finale of the <i>Symphonie fantastique</i> as a burlesque parody of the funeral chant. [[debussy|Debussy]] jokingly quotes the opening bars of Wagner’s <i>Tristan</i> in “Golliwogg’s Cakewalk”.</p><p>Charles Ives incorporates the short-short-short-long rhythm of Beethoven’s Fifth into the recurring melody of “The Alcotts”, the third movement of the <i>Concord</i> Sonata, as Kyle Gann describes it. A quotation differs from modelling, which borrows a plan rather than the notes, and from transcription, which keeps the whole piece.</p>`,
    hear: [
      { listen: 'ives-concord-alcotts', t: 74, note: 'Across the stronger chordal passages, the rhythm of Beethoven’s Fifth sounds inside Ives’s own melody.' },
    ],
    see: ['parody', 'modelling', 'homage', 'motif', 'tristan-chord'],
  },
  {
    slug: 'parody', term: 'Parody', aka: ['parodied'], kind: 'influence',
    short: 'Two senses: in Renaissance and Baroque practice, reworking existing music into a new piece; today, imitation that mocks.',
    html: `<p>The older sense is not comic. A Renaissance <i>parody mass</i> builds a Mass on a motet or chanson by another composer, working its themes through the new music, and Bach reused music from earlier cantatas in his Mass in B minor. The modern sense is satire: Mozart’s <i>A Musical Joke</i> (K. 522, 1787) lampoons clumsy composers and players, and Berlioz’s programme for the finale of the <i>Symphonie fantastique</i> calls the distorted <i>Dies irae</i> a burlesque parody.</p><p>On the Web of Influence, “parodied” is used in either sense, and each claim says which is meant.</p>`,
    hear: [],
    see: ['quotation', 'modelling', 'transcription'],
  },
  {
    slug: 'modelling', term: 'Modelling', aka: ['modelled on', 'modelled'], kind: 'influence',
    short: 'Taking another work’s plan — its form, its bass, its procedure — as the pattern for a new piece, without quoting its notes.',
    html: `<p>A composer who models a piece on another keeps the scaffold but writes new music on it. The model may be a form (a fugue modelled on one in the <i>Well-Tempered Clavier</i>), a bass (a set of variations on a known ground) or a procedure. It is the most structural kind of borrowing and the one most easily proved, since the underlying pattern can be set beside the original.</p><p>The finale of [[brahms|Brahms]]’s Fourth Symphony is modelled on the chaconne bass of the closing chorus of Bach’s Cantata No. 150. Brahms enlarged the pattern to eight bars and added a chromatic note, and the result is thirty continuous variations. The Boston Symphony programme note documents the source.</p>`,
    hear: [
      { listen: 'brahms-4-finale', t: 105, note: 'Brahms adapted this recurring pattern from a Bach cantata, adding a chromatic note.' },
    ],
    see: ['chaconne', 'passacaglia', 'quotation', 'transcription'],
  },
  {
    slug: 'homage', term: 'Homage', aka: ['tombeau', 'tombeaux', 'hommage'], kind: 'influence',
    short: 'A piece made in honour of another composer or person, often in their style or forms; a tombeau is an homage in memory of the dead.',
    html: `<p>The tombeau began in seventeenth-century France as a lute piece, then a harpsichord piece, written on the death of a friend or patron; Johann Jacob Froberger, [[couperin|Louis Couperin]] and D’Anglebert all wrote them. The genre lapsed in the eighteenth century and was revived in the early twentieth.</p><p>[[ravel|Ravel]]’s <i>Le Tombeau de Couperin</i> (1914–17) takes Baroque dance forms — Prélude, Fugue, Forlane, Rigaudon, Menuet, Toccata — and dedicates each movement to the memory of friends killed in the First World War. Debussy’s <i>Hommage à Rameau</i>, from the first series of <i>Images</i> (1905), honours [[rameau|Rameau]] in a slow, chordal piece.</p>`,
    hear: [],
    see: ['quotation', 'modelling', 'toccata'],
  },
  {
    slug: 'transcription', term: 'Transcription', aka: ['transcriptions'], kind: 'influence',
    short: 'Rewriting a piece for different instruments, from keyboard to orchestra or the reverse; a transcription stays close to the original’s notes.',
    html: `<p>[[liszt|Liszt]] transcribed all nine Beethoven symphonies for solo piano between 1837 and 1864 (published in 1865), and in 1833 made a piano version of Berlioz’s <i>Symphonie fantastique</i>, which he published in 1834. Ravel’s <i>Pavane pour une infante défunte</i> went the other way: Ricardo Viñes gave the piano premiere on 5 April 1902, and Ravel orchestrated it in 1910. A transcription differs from a recomposition: Rimsky-Korsakov’s 1886 concert piece <i>Night on Bald Mountain</i> draws on Mussorgsky’s materials but selects and recomposes them.</p><p>Several recordings in the Hall are concert-band transcriptions: Debussy’s <i>La Mer</i> (Lawrence Odom), Strauss’s <i>Till Eulenspiegel</i> (Herb Weber), the <i>Firebird</i> Infernal Dance (Thomas Knox) and the Waltz of the Flowers (Odom). Sibelius’s <i>Valse triste</i> is heard in a cello and piano arrangement.</p>`,
    hear: [
      { listen: 'debussy-la-mer-dawn', t: 0, note: 'Lawrence Odom’s concert-band transcription: sustained sounds in the low register support the shorter figures.' },
      { listen: 'mussorgsky-night-bald-mountain', t: 375, note: 'Rimsky-Korsakov’s 1886 concert piece: selection and recomposition, not merely a new orchestration of the 1867 score.' },
    ],
    see: ['orchestration', 'quotation', 'modelling'],
  },
  {
    slug: 'evidence-status', term: 'Evidence status', aka: [], kind: 'influence',
    short: 'How firmly a connection or fact is supported: documented (a source states it), inferred (the evidence points to it) or disputed (sources disagree).',
    html: `<p>Claims on the Web of Influence and the recording dossiers carry one of three statuses. <b>Documented</b>: stated in the cited source. <b>Inferred</b>: estimated from the evidence but not explicitly documented. <b>Disputed</b>: sources disagree, and the alternatives are shown. Dossier fields can also read <i>unknown</i>, meaning not established from the sources consulted, or <i>not applicable</i>.</p><p>A status is never filled in by guesswork: an upload date is not treated as a session date, and where two sources give different dates for the same Victor matrix — as for the <i>La traviata</i> Prelude — neither is silently chosen.</p>`,
    hear: [],
    see: ['public-domain-audio', 'level-trace', 'score-alignment', 'matrix-number'],
  },
];

const transition = [
  {
    slug: 'perfect-cadence', term: 'Perfect cadence', aka: ['authentic cadence', 'perfect cadences'], kind: 'transition',
    short: 'The dominant chord followed by the tonic, both in root position: the strongest full stop in tonal harmony.',
    html: `<p>In C major, G–B–D resolves to C–E–G, with the bass falling a fifth (or rising a fourth) from G to C and the melody ending on the tonic. In a sonata or concerto it closes the exposition, the recapitulation and the movement; it is also a way for one section to end and another to begin.</p><p>The opening ritornello of Bach’s Fifth Brandenburg Concerto closes in D major, and its regular pulse carries on into the solo episode, so the cadence works as a hinge rather than a stop. In Beethoven’s Fifth, bar 373’s G-major chord resolves to C major in bar 374, with bass G–C and first violins B–C; that arrival also begins the coda.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '374', occ: 1 }, note: 'The G-major chord resolves to C major, and the arrival is also the coda’s first chord.' },
      { listen: 'bach-brandenburg-5-allegro', t: 22, note: 'The opening ritornello closes in D major and the pulse carries on into the solo episode.' },
    ],
    see: ['cadence', 'elision', 'dominant', 'tonic'],
  },
  {
    slug: 'half-cadence', term: 'Half cadence', aka: ['half close'], kind: 'transition',
    short: 'A phrase that ends on the dominant chord, which sounds unfinished and asks for a continuation.',
    html: `<p>The harmony arrives on the dominant (G major in C) and stops. It works like a comma or a question mark: the ear waits for an answer, often an orchestra replying to a soloist or the next phrase of a theme.</p><p>Mozart’s Clarinet Concerto, Adagio, opens with a clarinet phrase that rests on A major, the dominant of D; the orchestra answers by taking up the same shape in D major. In Beethoven’s Fifth the recapitulation’s first group reaches a half cadence on G major at bar 268, the strings stop, and the oboe keeps the G alone in a written Adagio solo before the violins restart at bar 269.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '268', occ: 1 }, note: 'A half cadence on G major, then the oboe alone: the pulse is suspended before the violins resume.' },
      { listen: 'mozart-clarinet-adagio', t: 34, note: 'The clarinet’s phrase rests on the dominant and the orchestra answers.' },
    ],
    see: ['cadence', 'dominant', 'cadenza', 'medial-caesura'],
  },
  {
    slug: 'deceptive-cadence', term: 'Deceptive cadence', aka: ['interrupted cadence'], kind: 'transition',
    short: 'A dominant chord that resolves to a chord other than the tonic, usually the minor chord on the sixth degree (V–vi), so the expected close is denied.',
    html: `<p>In C major the listener hears G and expects C; the composer supplies A minor (A–C–E), which shares two notes with the tonic chord and so sounds close, but is not the arrival. The phrase has to continue, usually to a further and stronger cadence. The British name is <i>interrupted cadence</i>.</p><p>In the first movement of Brahms’s Fourth Symphony, Kelly Dean Hansen’s guide describes an expected arrival on B (bar 73, and again at bar 184) as thwarted by a “deceptive motion to G”: fanfares return where a cadence had been promised.</p>`,
    hear: [],
    see: ['cadence', 'perfect-cadence', 'dominant'],
  },
  {
    slug: 'plagal-cadence', term: 'Plagal cadence', aka: ['amen cadence'], kind: 'transition',
    short: 'The subdominant chord moving to the tonic (IV–I), the “Amen” cadence: gentler and less final than dominant to tonic.',
    html: `<p>In C major, F–A–C moves to C–E–G. With no leading note it sounds like a settling rather than a conclusion, and it often follows a perfect cadence as a last affirmation.</p><p>The closing cadence of Handel’s “Hallelujah” chorus is plagal: G-major subdominant harmony resolves to D major after a general pause. In the finale of Brahms’s Fourth, an oboe line delays the plagal movement from A harmony towards E at the join into the chorale-like variations.</p>`,
    hear: [
      { listen: 'handel-messiah-hallelujah', t: 186, note: 'After a general pause the last declaration resolves from G major to D major.' },
      { listen: 'brahms-4-finale', t: 284, note: 'A descending oboe line delays the plagal movement into the chorale-like writing.' },
    ],
    see: ['cadence', 'perfect-cadence', 'elision', 'general-pause'],
  },
  {
    slug: 'elision', term: 'Elision', aka: ['elided'], kind: 'transition',
    short: 'Two phrases or sections overlap, so the last chord of one is also the first of the next and no gap separates them.',
    html: `<p>An elision removes the pause that a cadence normally leaves. It keeps momentum across a boundary, and the listener hears a new section begin while the old one is still arriving.</p><p>At bar 374 of Beethoven’s Fifth, first movement, the G-major chord of bar 373 resolves to C major, and that arrival is the coda’s first chord: no rest separates them. In the finale of Brahms’s Fourth, a descending oboe line carries the end of one variation into the next rather than inserting a full stop.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '374', occ: 1 }, note: 'The cadence that closes the recapitulation is the first chord of the coda.' },
      { listen: 'brahms-4-finale', t: 284, note: 'An oboe line carries one variation into the next with no full stop.' },
    ],
    see: ['perfect-cadence', 'coda', 'link-passage'],
  },
  {
    slug: 'pivot-chord', term: 'Pivot chord', aka: ['pivot chords'], kind: 'transition',
    short: 'A chord that belongs to both the old key and the new one, used as a hinge to modulate smoothly.',
    html: `<p>The chord is heard first in the old key and then reinterpreted in the new one, so the listener cannot say where the change took place. A chord that is ii in one key can be iv in another.</p><p>In Vivaldi’s <i>Spring</i>, the returning refrain carries the music from C♯ minor back to E major over a bass that moves C♯–F♯–B–E. The F♯ minor seventh chord belongs to both keys, as iv in C♯ minor and as ii in E major, and it hinges the change.</p>`,
    hear: [
      { listen: 'vivaldi-spring-allegro', t: 166, note: 'The returning phrase changes its destination: C♯ minor, through F♯ minor seventh and B seventh, to E major.' },
    ],
    see: ['modulation', 'common-tone-modulation', 'direct-modulation'],
  },
  {
    slug: 'common-tone-modulation', term: 'Common-tone modulation', aka: ['common tone modulation'], kind: 'transition',
    short: 'Moving to a distant key by holding one note shared by both harmonies, which is heard afresh as a different member of the new chord.',
    html: `<p>The held note acts as a bridge. Because it belongs to both the old chord and the new one, the ear accepts the change even when the other notes move far.</p><p>In the Agnus Dei of Fauré’s Requiem, the tenors’ prayer settles towards C major and the sopranos hold C alone while the moving accompaniment falls away. That same pitch becomes the third of A♭ major as the other voices enter beneath it, and the Lux aeterna begins in a six-part choral texture. The join connects distant harmonic surroundings without a conspicuous melodic leap.</p>`,
    hear: [
      { listen: 'faure-requiem-agnus-dei', t: 138, note: 'One held note changes its harmonic meaning as the Lux aeterna begins.' },
    ],
    see: ['modulation', 'pivot-chord', 'enharmonic-reinterpretation'],
  },
  {
    slug: 'direct-modulation', term: 'Direct modulation', aka: ['abrupt modulation'], kind: 'transition',
    short: 'Changing key without preparation: a phrase ends in one key and the next simply begins in another.',
    html: `<p>No pivot chord or shared note prepares the new key; the composer steps across. It suits a join where the change itself is the effect: a new section, a new mood.</p><p>In Bruckner’s Seventh Symphony the A-minor scherzo ends and the trio begins in F major, a related key that shares A and C with A minor, without the rushing accompaniment turning into a modulating bridge. In the Poco allegretto of Brahms’s Third, a C minor cadence is followed by an A♭ minor chord inside the same bar, before the ear can settle.</p>`,
    hear: [
      { listen: 'bruckner-7-scherzo', t: 198, note: 'The repeated figure stops at the border and the trio begins in F major.' },
      { listen: 'brahms-3-poco-allegretto', t: 110, note: 'A C minor cadence, then an A♭ minor chord in the same bar.' },
    ],
    see: ['modulation', 'pivot-chord', 'minuet-and-trio'],
  },
  {
    slug: 'enharmonic-reinterpretation', term: 'Enharmonic reinterpretation', aka: ['enharmonic'], kind: 'transition',
    short: 'Respelling a note or chord — D♭ as C♯, say — so that it leads to a different key from the one its first spelling implied.',
    html: `<p>On a keyboard D♭ and C♯ are the same key, but in notation they belong to different harmonies. A composer can approach a note as one and leave it as the other, which changes the key without a perceptible gap.</p><p>Liszt’s Hungarian Rhapsody No. 6 moves from the march to the Presto by respelling D♭ major as C♯ major: the notation changes, but the tonic pitch does not. In Chopin’s Nocturne in D♭ the tonic is respelled C♯ and major gives way to C♯ minor; Dvořák’s Largo does the same on its way to the minor-key middle.</p>`,
    hear: [
      { listen: 'liszt-hungarian-rhapsody-6', t: 85, note: 'A flourish releases the Presto, with D♭ major respelled as C♯ major.' },
      { listen: 'chopin-nocturne-op27-2', t: 154, note: 'The tonic D♭ is respelled C♯ and the music darkens into C♯ minor.' },
    ],
    see: ['modulation', 'modal-mixture', 'augmented-sixth', 'diminished-seventh'],
  },
  {
    slug: 'chromatic-slide', term: 'Chromatic slide', aka: [], kind: 'transition',
    short: 'Moving a note or chord by a semitone to reach new harmonic ground, without a conventional modulation.',
    html: `<p>A semitone step in the bass or an inner part can shift the whole harmony. Because the step is small, it is heard as a slide rather than a leap.</p><p>In Debussy’s <i>La cathédrale engloutie</i> the rising fifths return over C in the bass; Debussy lowers the bass to B and establishes B major, while left-hand triplets begin beneath chords that keep the rising pentatonic shape. In the first movement of Rachmaninoff’s Second Piano Concerto, a chromatic descent leaves the horn alone before the quieter restatement of the second subject.</p>`,
    hear: [
      { listen: 'debussy-cathedrale-engloutie', t: 74, note: 'A bass semitone, C to B, starts the emergence of B major.' },
      { listen: 'rachmaninoff-concerto-2-moderato', t: 500, note: 'A chromatic descent leaves the horn alone.' },
    ],
    see: ['chromaticism', 'modulation', 'pedal-point'],
  },
  {
    slug: 'sequence', term: 'Sequence', aka: ['sequences'], kind: 'transition',
    short: 'A short melodic or harmonic pattern repeated at a higher or lower pitch, usually several times in a row.',
    html: `<p>A sequence gives continuity while the harmony travels: the pattern stays the same and its destination changes. It is the commonest engine of episodes and developments.</p><p>In Beethoven’s Fifth, bars 410–414, a violin figure steps down: E♭–D–F–E♭, then D–C–E♭–D, then C–B♭–D–C. In Bach’s B minor fugue the bass in bars 19–20 repeats F♯–A–B–D, then E–G–A–C♯ a tone lower, and the episode continues downwards from there.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '410', occ: 1 }, note: 'A short violin figure keeps stepping down while the lower parts descend more slowly.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '19', occ: 1 }, note: 'The bass repeats a four-note shape a tone lower in the episode’s descending sequence.' },
    ],
    see: ['episode', 'development', 'modulation'],
  },
  {
    slug: 'dominant-pedal', term: 'Dominant pedal', aka: [], kind: 'transition',
    short: 'A held or repeated dominant note in the bass: the music waits for the tonic that it promises.',
    html: `<p>Over a dominant pedal the upper parts can pass through other chords, but the bass says that home has not yet been reached. It is a standard way to prepare a return.</p><p>In the last bars of Bach’s B minor fugue the bass holds F♯ across the barline at bar 74. At the end of the harpsichord cadenza in the Fifth Brandenburg Concerto, A in the bass anchors the keyboard’s figuration while the upper notes crowd around it, and the final ritornello releases it into D major. In Mozart’s G minor Symphony the development’s fragments wait on D, the dominant, before the first theme returns.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '74', occ: 1 }, note: 'The bass holds F♯ beneath the alto’s last subject fragment.' },
      { listen: 'bach-brandenburg-5-allegro', t: 568, note: 'A in the bass anchors the cadenza’s end; the final ritornello releases it.' },
      { listen: 'mozart-40-molto-allegro', t: 194, note: 'Fragments wait on D until the first theme returns.' },
    ],
    see: ['pedal-point', 'tonic-pedal', 'standing-on-the-dominant', 'retransition'],
  },
  {
    slug: 'tonic-pedal', term: 'Tonic pedal', aka: [], kind: 'transition',
    short: 'A held or repeated tonic note in the bass: the harmony moves above it, but the music stays at home.',
    html: `<p>Where a dominant pedal creates tension, a tonic pedal gives stability. It prolongs a place rather than leading to a new one, and often marks a coda or an introduction.</p><p>Chopin’s D♭ Nocturne ends over a D♭ bass that the coda keeps renewing, while the right hand continues its duet. In the first episode of Vivaldi’s <i>Spring</i>, tonic and dominant pedals on E and B hold the birdsong in one harmonic field.</p>`,
    hear: [
      { listen: 'chopin-nocturne-op27-2', t: 280, note: 'The bass stops travelling and keeps renewing D♭.' },
      { listen: 'vivaldi-spring-allegro', t: 34, note: 'Over tonic and dominant pedals, three violins exchange birdsong.' },
    ],
    see: ['pedal-point', 'dominant-pedal', 'tonic', 'coda'],
  },
  {
    slug: 'retransition', term: 'Retransition', aka: [], kind: 'transition',
    short: 'The passage that prepares the return of the opening material, typically by lingering on the dominant of the home key.',
    html: `<p>The retransition is the hinge between a development or a middle section and the recapitulation or return. A good one makes the return sound inevitable.</p><p>In Beethoven’s Fifth the retransition runs through diminished-seventh chords exchanged by winds and strings and fragments of the motto’s rhythm; at bar 248 the bass turns from F to three G attacks and the recapitulation arrives. In Mozart’s G minor Symphony the harmony settles on D, the dominant, and a prolonged dominant prepares the return. In Mendelssohn’s <i>Hebrides</i> the development directs its pressure onto F♯, the dominant of B minor.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '233', occ: 1 }, note: 'Diminished-seventh chords in winds and strings begin the retransition.' },
      { listen: 'mozart-40-molto-allegro', t: 194, note: 'Fragments wait on D; the first theme regains its full phrase.' },
      { listen: 'mendelssohn-hebrides', t: 455, note: 'F♯ gives the opening figure its ground as the home key returns.' },
    ],
    see: ['recapitulation', 'dominant-pedal', 'standing-on-the-dominant', 'diminished-seventh'],
  },
  {
    slug: 'standing-on-the-dominant', term: 'Standing on the dominant', aka: [], kind: 'transition',
    short: 'Holding dominant harmony for a long stretch, so that a return or arrival is delayed and expected.',
    html: `<p>The harmony stays on the dominant while the surface moves, sometimes for many bars. It differs from a half cadence in being a process rather than a punctuation mark.</p><p>The introduction to Tchaikovsky’s Waltz of the Flowers establishes the A-major side of the harmony, the dominant of the coming D-major waltz, then yields to an exposed cadenza; fast notes delay the waltz rather than begin it. In Chopin’s First Ballade the recalled theme narrows towards D-major dominant harmony, leaving G minor an unfulfilled destination, before the fast coda.</p>`,
    hear: [
      { listen: 'tchaikovsky-waltz-flowers', t: 26, note: 'The dominant waits while the dance pulse disappears into a cadenza.' },
      { listen: 'chopin-ballade-1', t: 486, note: 'The recalled theme narrows towards the dominant, then the Presto coda is released.' },
    ],
    see: ['dominant', 'dominant-pedal', 'retransition', 'cadenza'],
  },
  {
    slug: 'liquidation', term: 'Liquidation', aka: [], kind: 'transition',
    short: 'Stripping a theme down, motif by motif, until only a fragment or a single chord is left, often before a return.',
    html: `<p>Liquidation is the opposite of the development’s expansion: the composer removes a motif’s rhythmic detail and leaves its skeleton. It often precedes a return or an ending.</p><p>In bars 196–203 of Beethoven’s Fifth the winds and strings exchange pairs of minim chords instead of repeated quavers. The replies contract further to one chord each (B♭ minor, C♭ major and D♭ major in bars 209–214) and settle on F♯ minor, then D major. The diminuendo reduces the motto’s weight without changing the metre.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '196', occ: 1 }, note: 'Two-note replies shrink to isolated chords, exchanged between winds and strings.' },
    ],
    see: ['development', 'decrescendo', 'motivic-link'],
  },
  {
    slug: 'motivic-link', term: 'Motivic link', aka: [], kind: 'transition',
    short: 'A small motif carried across a join, so the new section feels derived from the old even when key, texture and tempo change.',
    html: `<p>A join can change nearly everything and still feel inevitable if one small gesture persists. A listener who recognises it hears a transformation rather than a new start.</p><p>At bar 59 of Beethoven’s Fifth the horns’ B♭–B♭–B♭–E♭–F–B♭ keeps the motto’s repeated-note rhythm while widening its intervals, and their held B♭ carries across the change from call to dolce melody. In Brahms’s Third, clarinet and bassoon try the song’s three-note opening in A♭ minor, then B♭ minor, before the return arrives in C minor.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '59', occ: 1 }, note: 'The horn call keeps the motto’s rhythm with widened intervals.' },
      { listen: 'brahms-3-poco-allegretto', t: 214, note: 'The song’s three-note opening is tried in A♭ minor and B♭ minor before the return.' },
    ],
    see: ['motif', 'sequence', 'retransition'],
  },
  {
    slug: 'fermata', term: 'Fermata', aka: ['fermatas'], kind: 'transition',
    short: 'A sign, an arc over a dot, that holds a note or rest beyond its written length; the performer decides how long.',
    html: `<p>The Italian word means “stopped”. A fermata suspends the pulse: the player holds the note until it feels right and then continues. It can mark the end of a section, a breath before a return, or a moment of drama.</p><p>Beethoven’s Fifth opens with fermatas on the held E♭ that ends the first gesture and on the D tied through bar 5; they interrupt the pulse, so the second gesture already changes the first. In bars 125–128 the horns’ G and the strings’ D♭–C lead to another fermata, after which quiet second violins and bassoons establish F minor.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 1 }, note: 'Fermatas on the held E♭ and the tied D interrupt the pulse of the opening.' },
      { listen: 'beethoven-5-first', bar: { n: '125', occ: 1 }, note: 'The horns’ G and the strings’ D♭–C lead to a fermata before F minor is established.' },
    ],
    see: ['general-pause', 'cadenza', 'motif'],
  },
  {
    slug: 'general-pause', term: 'General pause', aka: [], kind: 'transition',
    short: 'Silence for the whole ensemble at once: a deliberate break that stops the music before it restarts.',
    html: `<p>A general pause (marked G.P. in some scores) clears the air; the listener hears the last chord die away. It is used to separate sections, to prepare an arrival, or to delay a final cadence.</p><p>Bar 57 of Beethoven’s Fifth is silent, between the cut-off diminished seventh of bar 56 and the short B♭-major chord of bar 58, after which the horns call. The same silence recurs at bars 123–124 before the development. In the “Hallelujah” chorus a general pause separates the final declaration from the accumulated repetitions.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '57', occ: 1 }, note: 'A silent bar between the cut-off chord and the horn call.' },
      { listen: 'handel-messiah-hallelujah', t: 186, note: 'The moving parts converge, then a general pause precedes the final declaration.' },
    ],
    see: ['fermata', 'medial-caesura', 'plagal-cadence'],
  },
  {
    slug: 'medial-caesura', term: 'Medial caesura', aka: ['caesura'], kind: 'transition',
    short: 'The pause in a sonata exposition that separates the first group from the second theme, usually after a half cadence on the dominant.',
    html: `<p>Caesura is Latin for “cut”. The medial caesura is the break in the middle of an exposition after which the second theme begins; the term was popularised by James Hepokoski and Warren Darcy’s <i>Elements of Sonata Theory</i> (2006). The harmony usually stops on the dominant of the new key, and a silence or a repeated chord marks the join.</p><p>In Beethoven’s Fifth, bar 56 cuts off a diminished seventh, bar 57 is silent, and a short B♭-major chord at bar 58, the dominant of E♭, releases the horns’ call. In Mozart’s G minor Symphony the transition gathers on F major, the dominant of B♭, and ends in a break before the quiet second theme; the recapitulation reworks the same pause so that it leads to G minor.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '59', occ: 1 }, note: 'Silence clears space for the horn call that begins the second group.' },
      { listen: 'mozart-40-molto-allegro', t: 50, note: 'The transition gathers on the dominant and breaks off before the second theme.' },
    ],
    see: ['exposition', 'half-cadence', 'general-pause', 'sonata-form'],
  },
  {
    slug: 'crescendo-build', term: 'Crescendo build', aka: ['crescendo', 'crescendos'], kind: 'transition',
    short: 'A long, gradual increase in force that carries the music towards a climax, by adding instruments, notes, register or speed.',
    html: `<p>A build is not only “getting louder”: composers also thicken the texture, raise the register, quicken the rhythm or move the bass. The score may say <i>crescendo</i>, or may rely on the writing alone.</p><p>In Lawrence Odom’s band transcription of Debussy’s <i>La Mer</i>, quiet preparation gives way to broad chordal motion in D♭ major, with the bass joining the expanding progression. Ravel’s <i>Boléro</i> is a single build: the growing orchestra supplies most of the large-scale change while a two-bar rhythm and a repeated bass stay fixed.</p>`,
    hear: [
      { listen: 'debussy-la-mer-dawn', t: 514, note: 'Small gestures become broad chordal motion as the closing chorale arrives.' },
      { listen: 'ravel-bolero', t: 0, note: 'The growing orchestra supplies the large-scale change over a fixed rhythm.' },
    ],
    see: ['decrescendo', 'ostinato', 'orchestration'],
  },
  {
    slug: 'decrescendo', term: 'Decrescendo', aka: ['diminuendo', 'decrescendi'], kind: 'transition',
    short: 'A gradual fall in loudness; at a join it can clear space for the next section or let a climax dissolve.',
    html: `<p>The word is Italian for “decreasing”; <i>diminuendo</i> means the same. A decrescendo can be as structural as a climax: it prepares a return, empties a texture or ends a piece.</p><p>In Elgar’s “Nimrod” the orchestra reduces its weight while keeping the slow phrase; the upper line descends, the supporting parts weaken and E♭ major is allowed to settle. In the development of Beethoven’s Fifth, the diminuendo reduces the weight of the shrinking chord exchanges without changing the metre.</p>`,
    hear: [
      { listen: 'elgar-enigma-nimrod', t: 156, note: 'The orchestra gives back the melody: the climax is released into a quiet withdrawal.' },
      { listen: 'beethoven-5-first', bar: { n: '196', occ: 1 }, note: 'The chord exchanges shrink and the weight falls away, with the metre unchanged.' },
    ],
    see: ['crescendo-build', 'liquidation', 'fade'],
  },
  {
    slug: 'texture-change', term: 'Texture change', aka: ['change of texture'], kind: 'transition',
    short: 'A shift in how the parts are layered: solo to ensemble, melody and accompaniment to counterpoint, chords to running notes.',
    html: `<p>Texture is how many lines sound and how they relate. A join can be made by changing it alone, while key and tempo stay put.</p><p>In Bach’s Fifth Brandenburg Concerto the opening ritornello’s regular pulse continues into the solo episode, but the ensemble is reduced: flute and solo violin exchange short figures above the harpsichord’s running part. In the “Hallelujah” chorus, block-like acclamations give way to overlapping entries on “For the Lord God omnipotent reigneth”.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 22, note: 'The ensemble yields to a conversation among flute, violin and harpsichord.' },
      { listen: 'handel-messiah-hallelujah', t: 36, note: 'One declaration becomes several pursuing voices.' },
    ],
    see: ['orchestration-change', 'homophony', 'imitation'],
  },
  {
    slug: 'orchestration-change', term: 'Orchestration change', aka: [], kind: 'transition',
    short: 'A change in who plays the music — a melody handed to other instruments, a section dropped or added — that marks or shapes the join.',
    html: `<p>The same line can end and begin on different instruments, and the change of colour alone can mark a new section.</p><p>At bar 59 of Beethoven’s Fifth the horns fill the silence with B♭–B♭–B♭–E♭–F–B♭, replacing the full ensemble. In the recapitulation the call passes to the bassoons, transposed down a minor third, and the second group begins in C major rather than E♭.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '59', occ: 1 }, note: 'Exposed horns fill the gap with the call.' },
      { listen: 'beethoven-5-first', bar: { n: '303', occ: 1 }, note: 'Bassoons, not horns, give the call, a minor third lower.' },
    ],
    see: ['orchestration', 'texture-change', 'register-change'],
  },
  {
    slug: 'register-change', term: 'Register change', aka: [], kind: 'transition',
    short: 'A move into a much higher or lower pitch range, which changes the weight and colour of the music at a join.',
    html: `<p>Register is pitch height. A line that drops an octave or rises to the top of the instrument changes how heavy or fragile the music sounds, even when the notes are the same.</p><p>In Satie’s first <i>Gymnopédie</i> the melody drops from F♯ to a low E in bar 19 and holds it for three bars, while the accompaniment moves from G–B to G–B–D and then F–A–D beneath it. In the Adagietto of Mahler’s Fifth the violin line rises as the returning phrase grows into the climax.</p>`,
    hear: [
      { listen: 'satie-gymnopedie-1', bar: { n: '19', occ: 1 }, note: 'The melody drops to a low E held for three bars while the harmony changes beneath it.' },
      { listen: 'mahler-5-adagietto', t: 555, note: 'The violin line rises as the returning phrase becomes the climax.' },
    ],
    see: ['orchestration-change', 'texture-change', 'divisi'],
  },
  {
    slug: 'tempo-change', term: 'Tempo change', aka: [], kind: 'transition',
    short: 'A shift of speed marked in the score, such as Largo to Moderato, that signals a new section.',
    html: `<p>Tempo markings are Italian words: <i>Largo</i> (broad), <i>Moderato</i> (moderate), <i>Presto</i> (very fast). A change can alter the character of a theme as much as a change of key.</p><p>In Chopin’s First Ballade the Largo introduction gives way to a Moderato in 6/4, and the keyboard separates into singer and support. Bruckner’s Seventh moves from <i>Sehr schnell</i> to <i>Etwas langsamer</i> at the trio, and the fast tempo returns with the da capo.</p>`,
    hear: [
      { listen: 'chopin-ballade-1', t: 30, note: 'Declamation finds a regular bass as the Moderato begins.' },
      { listen: 'bruckner-7-scherzo', t: 198, note: 'The trio is marked Etwas langsamer: somewhat slower.' },
    ],
    see: ['metre-change', 'metre', 'rubato'],
  },
  {
    slug: 'metre-change', term: 'Metre change', aka: [], kind: 'transition',
    short: 'A change of time signature or beat grouping, which alters how the pulse is felt.',
    html: `<p>When the time signature changes the same beat is grouped differently, and the music can sound broader or more urgent without a change of tempo marking.</p><p>In the finale of Brahms’s Fourth, 3/4 becomes 3/2 in a slower variation: each bar doubles in length while the note-value speed stays the same. In Chopin’s First Ballade, 4/4 changes to 6/4, heard as two broad groups of three. In Puccini’s Mimì aria, the light 2/4 account gives way to common time at a held pause.</p>`,
    hear: [
      { listen: 'brahms-4-finale', t: 205, note: 'Twice the space within each bar: 3/4 becomes 3/2.' },
      { listen: 'puccini-mi-chiamano-mimi', t: 140, note: 'A held pause, then common time and the long lyrical span.' },
    ],
    see: ['metre', 'tempo-change', 'fermata'],
  },
  {
    slug: 'link-passage', term: 'Link passage', aka: ['linking passage', 'bridge passage'], kind: 'transition',
    short: 'A short passage written to connect two sections: no new theme, only the harmony and motion that lead from one to the other.',
    html: `<p>A link passage can be a few bars or a long paragraph. It is material that exists for the join itself, often derived from what precedes it.</p><p>In Mendelssohn’s <i>Hebrides</i> the transition redirects the B minor opening towards D major, its relative major, and reduces the force of the preceding gestures, so that cellos and bassoons can carry the longer second subject. In the finale of Brahms’s Fourth, a descending oboe line carries one variation into the next.</p>`,
    hear: [
      { listen: 'mendelssohn-hebrides', t: 120, note: 'The bass figure makes room for song: the transition leads to the cellos’ long second subject.' },
      { listen: 'brahms-4-finale', t: 284, note: 'An oboe line opens the chorale.' },
    ],
    see: ['elision', 'modulation', 'texture-change'],
  },
  {
    slug: 'cadenza', term: 'Cadenza', aka: ['cadenzas'], kind: 'transition',
    short: 'A passage for the soloist alone in a concerto or aria, displaying technique over a pause on the dominant; originally improvised.',
    html: `<p>Italian for “cadence”. In a concerto the orchestra stops, usually on a dominant chord, and the soloist plays alone, traditionally improvising on the movement’s themes. Composers from Beethoven on often wrote them out.</p><p>Bach’s Fifth Brandenburg Concerto has a harpsichord cadenza written out in full, beginning at bar 154 and prolonging the dominant until bar 219, with one player supplying the whole texture. Schumann writes out the cadenza of his Piano Concerto, and the pianist continues alone after the orchestra stops. In Beethoven’s Fifth the oboe’s written Adagio solo at bar 268 acts like a short cadenza within the recapitulation.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 386, note: 'One harpsichord supplies the whole texture: the movement’s largest change of scale.' },
      { listen: 'schumann-piano-concerto-1', t: 692, note: 'The orchestra leaves the argument to the piano: a written-out cadenza.' },
      { listen: 'beethoven-5-first', bar: { n: '268', occ: 1 }, note: 'The strings stop and the oboe continues alone in a written Adagio.' },
    ],
    see: ['concerto', 'half-cadence', 'standing-on-the-dominant', 'fermata'],
  },
  {
    slug: 'attacca', term: 'Attacca', aka: ['attacca subito'], kind: 'transition',
    short: 'Italian “attack”: an instruction to go straight on to the next movement without a pause.',
    html: `<p>Movements are normally separated by a pause in which the performers settle and the audience breathes. <i>Attacca</i> removes it, so the end of one movement leads straight into the start of the next and the work feels continuous. Mendelssohn links the movements of his Violin Concerto in E minor, Op. 64, in this way, without a break.</p>`,
    hear: [],
    see: ['general-pause', 'link-passage', 'fermata'],
  },
  {
    slug: 'fade', term: 'Fade-out', aka: ['fade out'], kind: 'transition',
    short: 'An ending in which the music tapers away to nothing instead of closing on a final cadence.',
    html: `<p>A composed fade comes from reducing the number of instruments, the force and the activity until only a sound or a few notes remain. It is not a studio fade-out, which is applied to a recording afterwards. The harmony may have arrived before the sound disappears.</p><p>Elgar’s “Nimrod” settles in E♭ major while the strings continue to taper. In the closing bars of Debussy’s <i>La cathédrale engloutie</i> the echo sheds its accompaniment, and in C. P. E. Bach’s F♯ minor Fantasia quick figures leave isolated sounds and the clavichord’s decay does the rest.</p>`,
    hear: [
      { listen: 'debussy-cathedrale-engloutie', t: 305, note: 'The echo sheds its accompaniment: closing bells, then silence.' },
      { listen: 'cpe-bach-fantasia-fsharp', t: 698, note: 'Quick figures leave isolated sounds in the closing withdrawal.' },
    ],
    see: ['decrescendo', 'tonic-pedal', 'clavichord'],
  },
];

export default [...form, ...harmony, ...texture, ...rhythm, ...notation, ...tuning, ...instrument, ...performance, ...recording, ...influence, ...transition];
