import type { SubjectRevision } from '@/types/subject-notes'

export const physiographyRevision: SubjectRevision = {
  topic: 'physiography',
  bullets: [
    'India covers 3,287,263 sq km — 7th largest country; extends from 8°4\'N to 37°6\'N latitude and 68°7\'E to 97°25\'E longitude.',
    'Tropic of Cancer passes through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram.',
    'Standard Meridian 82°30\'E passes through Mirzapur (UP); IST is UTC+5:30.',
    'The Himalayas have 3 parallel ranges: Greater Himalayas (Himadri), Lesser Himalayas (Himachal), Outer Himalayas (Shiwaliks).',
    'K2 (8,611 m) in PoK is India\'s highest peak; Kanchenjunga (8,586 m) in Sikkim is highest peak entirely within India.',
    'Longitudinal valleys between Shiwaliks and Lesser Himalayas are called Duns (e.g., Dehra Dun).',
    'Northern Plains divided into 4 zones: Bhabar (pebble belt), Terai (marshy), Bhangar (older alluvium with kankar), Khadar (newer alluvium, fertile).',
    'Peninsular Plateau divided by Narmada River — Central Highlands (north) and Deccan Plateau (south).',
    'Aravalli Range is the oldest fold mountain in India; Guru Shikhar (1,722 m) is its highest peak.',
    'Western Ghats are continuous, higher (avg 900-1,600 m); Eastern Ghats are discontinuous, lower (avg 600 m).',
    'Anai Mudi (2,695 m) in Anaimalai Hills is the highest peak in South India.',
    'Western and Eastern Ghats meet at the Nilgiri Hills in Tamil Nadu.',
    'India has 7,516.6 km of coastline — 5,422.6 km mainland + 2,094 km island coastline.',
    'Andaman & Nicobar Islands (572 islands) in Bay of Bengal; Lakshadweep (36 islands, coral origin) in Arabian Sea.',
    'Indira Point on Great Nicobar is India\'s southernmost point; Barren Island has India\'s only active volcano.',
    'Ten Degree Channel separates Andaman and Nicobar groups; Eight Degree Channel separates Lakshadweep from Maldives.',
  ],
  comparisons: [
    {
      title: 'Western Ghats vs Eastern Ghats',
      headers: ['Feature', 'Western Ghats', 'Eastern Ghats'],
      rows: [
        ['Continuity', 'Continuous from Gujarat to Kerala', 'Discontinuous — broken by rivers'],
        ['Average Height', '900-1,600 m', '600 m'],
        ['Highest Peak', 'Anai Mudi (2,695 m)', 'Mahendragiri (1,501 m, Odisha)'],
        ['Rainfall', 'Heavy rainfall on windward (west) side', 'Less rainfall — leeward of SW monsoon'],
        ['Rivers', 'Source of most Peninsular east-flowing rivers', 'Rivers cross through gaps'],
        ['UNESCO Status', 'World Heritage Site (2012)', 'Not a World Heritage Site'],
        ['Biodiversity', 'Hotspot — very high endemism', 'Less endemic biodiversity'],
      ],
    },
    {
      title: 'Himalayan vs Peninsular Rivers',
      headers: ['Feature', 'Himalayan Rivers', 'Peninsular Rivers'],
      rows: [
        ['Origin', 'Glaciers and snow', 'Western Ghats / Peninsular Plateau'],
        ['Nature', 'Perennial (year-round flow)', 'Seasonal (rain-fed)'],
        ['Drainage Pattern', 'Antecedent, dendritic', 'Superimposed, trellis, radial'],
        ['Course', 'Long, meandering', 'Shorter, fixed valleys'],
        ['Erosion', 'Active erosion — V-shaped valleys, gorges', 'Less erosion — flow on hard rock'],
        ['Deltas', 'Large deltas (Sundarbans)', 'Smaller deltas (except Godavari, Krishna)'],
        ['Examples', 'Ganga, Yamuna, Brahmaputra', 'Godavari, Krishna, Kaveri, Narmada'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Tropic of Cancer States (GR-MC-JhWTM)',
      mnemonic: 'Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram',
      explanation: 'The 8 states through which the Tropic of Cancer (23.5°N) passes, from west to east across India.',
    },
    {
      title: 'Northern Plains Zones (Bhabar-Terai-Bhangar-Khadar)',
      mnemonic: 'Big Trees Bear Kiwis',
      explanation: 'The four zones of the Northern Plains from north to south: Bhabar (pebbles), Terai (marshy), Bhangar (old alluvium), Khadar (new alluvium — most fertile).',
    },
  ],
}
