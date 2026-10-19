# Grieg — hosted recordings and rejected candidates

Checked 18 October 2026. Dossiers: `content/dossiers/grieg-*.json`. Listen files: `content/listen/grieg-*.mjs`. Grieg died in 1907, so the compositions are in the public domain everywhere; every right below concerns the recording only, and editions are separate.

## Hosted

| Id | Recording | Rights basis | Notes |
| --- | --- | --- | --- |
| `grieg-piano-concerto-first` | Piano Concerto in A minor, I. Allegro molto moderato. Neal O’Doan, piano; University of Washington Symphony Orchestra; Peter Erős. 12:44. | Commons licence CC BY-SA 2.0; the repository states its files are “subject to the EFF OAL” (Open Audio License), which Commons treats as CC BY-SA 2.0. | Source: Pandora Music repository at ibiblio (Al Goldstein collection), via Commons. The repository’s own notice describes Pandora Records as a label founded in 1973 and active for over ten years, and thanks Glenn White for recordings made in Seattle; the file has no session date, venue or catalogue number. Dossier marks these unknown. Audio estimate: A minor at about A = 440. |
| `grieg-peer-gynt-mountain-king` | Peer Gynt Suite No. 1, IV. In the Hall of the Mountain King. Czech National Symphony Orchestra as the Musopen Symphony Orchestra. 2:34. | Commons tag PD-author (Musopen); the Internet Archive’s Musopen Kickstarter compilation carries the CC Public Domain Mark. | Musopen’s own pages returned HTTP 403; the Commons description and the Internet Archive item are the sources. The file is dated 2012-04-07 in the Commons template and was uploaded 14 October 2012. No conductor is named in anything opened. |
| `grieg-holberg-air` | From Holberg’s Time, IV. Air. Marine Chamber Orchestra of the United States Marine Band, Maj. Jason K. Fettig, 17 August 2013, Schlesinger Concert Hall, Alexandria, Virginia. 5:17. | Commons tag PD-USGov-Military-Marines: work of the US federal government. | The Marine Band’s “Web Exclusives” page, cited by Commons, opened through the Internet Archive but its audio listing did not render. Hall notes rest on the piano version (typeset IMSLP edition PMLP08562, mirrored at archive.org `imslp-suite-op40-grieg-edvard`) and the BSO programme note; the string score itself was not read. |
| `grieg-wedding-day-vetter-2006` | Promoted from comparison-only. | CC BY 4.0 (existing dossier). | `concert: false` removed, `order: 4`, `composer: 'grieg'`. Vetter’s complete performance is the Hall’s Lyric Piece. |
| `grieg-wedding-day-grieg-1903` | Stays comparison-only. | Existing dossier (US published before the cutoff). | `composer: 'grieg'`, `guest` removed, `order: 5`. The comparison `grieg-wedding-day` now names the roster slug in `composer` (data only; `src/compare.mjs` falls back to the reference’s composer, and the group stays explicit). |

Cue placement. Section and cue times come from the author’s reading of the recordings’ structure against the programme notes and the scores named in each cue’s evidence. All cues are `passage` precision, so each reads correctly if it appears ten seconds early or late. Audio analysis was run once for each file (`node tools/audio.mjs analyze`) and used only to locate large boundaries; none of its figures appear in the notes.

## Rejected candidates

- **Entremont, Philadelphia Orchestra, Ormandy, Columbia Masterworks ML 5301 (1958), Internet Archive transfer** `lp_concerto-for-piano-and-orchestra-in-a-mino_edvard-grieg-philippe-entremont-the-philad`. First publication is documented (Internet Archive record dated 1958; Discogs release 5642247 gives 1958, Columbia Masterworks ML 5301; the sleeve text names the performers). It would qualify for `eu-published-before-1963`. Rejected on pitch: the transfer’s first movement runs 14:13 and the audio estimates its key as A♭ minor, a semitone below the printed A minor, while the University of Washington recording of the same movement runs 12:44 and reads as A minor (the Musopen files run 12:35). A transfer at the wrong speed is not hosted.
- **Musopen Piano Concerto files on Commons** (`Edvard Grieg - piano concerto in a minor, op. 16 - i./ii./iii. …`): public domain, but the Commons record says only “See Musopen for performance author information”, and Musopen returned HTTP 403. Performers unknown, so not hosted.
- **PDP-CH 78-rpm sides on Commons** (Backhaus/Barbirolli, HMV DB 2075; Gieseking/Rosbaud, Columbia LX 648; Blech/Berlin Philharmonic, Vocalion A38009, “Morning”): each is one record side, not a complete movement of the concerto; the Vocalion “Morning” (1921, Berlin Philharmonic under Leo Blech) is a complete piece and would qualify, but the Musopen modern-sound recordings were preferred for the Hall.
- **piano-midi.de files on Commons** (*Album Leaf* Op. 47 No. 2, *Little Bird*, *Puck*, *Wedding*): MIDI-rendered, excluded by LISTENING.md.
- **Kevin MacLeod, “Hall of the Mountain King”** (CC BY 3.0, 2:33) and the two **Omega13a** Peer Gynt suite files (CC BY / CC BY-SA 4.0): synthesised, excluded.
- **Mark Gasser, Notturno, Op. 54 No. 4, live 2009** (Commons, CC BY-SA 3.0, 4:21): eligible and a real performance; no score of that Lyric Piece could be verified for notes, so not hosted.

## Available but not hosted

Musopen/Czech National Symphony Orchestra: “Morning Mood” (3:49), “The Death of Åse” (4:34), “Anitra’s Dance” (≈4:00). United States Marine Band Chamber Orchestra, same concert: Praeludium (2:41), Sarabande (4:12), Gavotte–Musette–Gavotte (3:22), Rigaudon (4:27). Listen files could be added for any of these on the same `set` ids (`grieg-peer-gynt-suite-1`, `grieg-holberg-suite`).

Internet Archive LP and 78 transfers not examined for a dated first-publication source: Boyd Neel String Orchestra, *Holberg Suite* (Decca, listed 1950); Fistoulari/Philharmonia Grieg programme (listed 1958); London String Orchestra, Walter Goehr, *Holberg Suite* 78s (listed 1938–39); Budapest Quartet, G minor Quartet (RCA, listed 1937); Pressler, *Lyric Pieces* Op. 54 and Op. 57 (listed 1958).

## Unresolved

- Session dates of the University of Washington and Musopen recordings; the Musopen conductor.
- Whether the Marine Chamber Orchestra’s Holberg Air follows the string score’s repeats exactly as the piano version’s repeat sign suggests; the notes say only that the opening strain is played twice, which the recording does.
- The Commons API rate-limited several checks during the session; `tools/audio.mjs check` and `tools/validate.mjs` found all three files with MP3 derivatives.
