// Recording and arrangement: https://commons.wikimedia.org/wiki/File:Infernal_Dance_from_The_Firebird_by_Stravinsky.ogg
// Premiere: https://www.loc.gov/collections/ballets-russes-de-serge-diaghilev/articles-and-essays/works-listing-by-title/f/
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
  intro: 'The Firebird forces the sorcerer Kashchei and his creatures to dance until they collapse. This is Thomas Knox’s wind-band arrangement: brass, woodwind and percussion carry the ballet’s displaced accents without an orchestral string section.',
  sections: [
    { t: 0, label: 'Dance · repeated figures' },
    { t: 108, label: 'Sustained middle paragraph' },
    { t: 144, label: 'Quiet restart' },
    { t: 194, label: 'Closing build-up' },
    { t: 240, label: 'Final sonority' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Kashchei’s enforced dance', text: 'This is not a dance the sorcerer chooses: the Firebird compels him and his followers to move. The opening’s separated gestures gather into more continuous motion; in this band arrangement, wind attacks carry the rhythmic edges normally shared with orchestral strings.', evidence: 'Opening 0.6 onsets/s at −23.0 dB grows to 3.4 onsets/s at −12.9 dB by 0:10 and 4.2/s at 0:25. Scoring follows the documented Thomas Knox band arrangement.' },
    { t: 30, kind: 'life', title: 'From law to orchestration', text: 'Stravinsky entered St Petersburg University to study law in 1901. His decisive musical training came privately from Rimsky-Korsakov, whose regular lessons in 1905–08 included the practical work of orchestration; he did not follow a conservatoire course.' },
    { t: 62, kind: 'listen', title: 'Accents across the pulse', text: 'Follow the underlying pulse separately from the accented notes. The short figures become more crowded and the sound brighter, but a sudden reduction in volume is approaching; the dance advances through contrasts rather than one continuous crescendo.', evidence: 'Brightness 1,952–2,435 Hz at 1:00–1:10; attacks reach 4.6/s at 1:15. Boundary 1:20 (0.51) precedes the drop from −13.0 dB at 1:15 to −27.5 at 1:25.' },
    { t: 92, kind: 'world', title: 'Paris, June 1910', text: 'The Firebird opened at the Paris Opéra on 25 June 1910 for Diaghilev’s Ballets Russes. Michel Fokine choreographed it and Tamara Karsavina danced the title role. Stravinsky had turned twenty-eight only eight days before the premiere.' },
    { t: 108, kind: 'form', title: 'A longer line', text: 'The sharply articulated gestures give way to more sustained writing. Listen for a longer melodic span across the pulse: the number of separate attacks drops, even as the band begins to increase its weight again.', evidence: 'Boundary 1:48 (0.54); 0.2 onsets/s at 1:50–1:55, with brightness near 1,180 Hz after 2,694 at 1:40; loudness grows from −18.1 at 1:50 to −10.5 dB at 2:15.' },
    { t: 144, kind: 'music', title: 'Low and suddenly quiet', text: 'The sound abruptly drops into a darker, quieter register. Repeated figures gather again from this reduced texture, becoming more active before the brighter upper sound returns.', evidence: 'Boundary 2:24 (0.71); −27.5 dB and centroid 494 Hz at 2:25, followed by 3.0–3.4 onsets/s at 2:30–2:35. Brightness rises to 1,963 Hz at 2:40.' },
    { t: 175, kind: 'life', title: 'Two more ballets', text: 'Diaghilev followed The Firebird with commissions for Petrushka, first performed in 1911, and The Rite of Spring in 1913. Within four Paris seasons, Stravinsky moved from this Russian fairy tale to a puppet’s tragedy and an invented pagan sacrifice.' },
    { t: 208, kind: 'music', title: 'The closing surge', text: 'The band builds to another forceful peak, then pulls back. Keep listening through that retreat: the strongest sustained sound is still to come, rather than at the first crest of the closing passage.', evidence: '−16.1 dB at 3:25 rises to −7.9 at 3:35, falls to −22.3 at 3:50, then reaches the loudest window, −5.9 dB, at 4:00.' },
    { t: 240, kind: 'music', title: 'The final sound holds', text: 'The last sonority is held rather than driven forward by repeated attacks. Its sustained weight makes the ending different from the clipped figures that began the dance; the remaining sound is allowed to die away.', evidence: 'Loudest window at 4:00: −5.9 dB, only 0.2 onsets/s; 4:05 has no new detected attacks, followed by −47.7 dB at 4:10 and −51.1 at 4:15.' },
  ],
};
