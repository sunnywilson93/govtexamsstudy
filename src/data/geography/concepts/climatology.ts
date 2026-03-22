import type { SubjectConcept } from '@/types/subject-notes'

export const climatologyConcept: SubjectConcept = {
  topic: 'climatology',
  title: 'World Climatology',
  description:
    'World climatology covers the pressure belts, wind systems, ocean currents, and climate zones that govern global weather patterns. The Koeppen classification (A through E) and three-cell atmospheric circulation model form the exam backbone. UPSC tests ENSO impacts, jet stream roles, and ocean current-climate linkages, while SSC/RRB asks about atmospheric layers, trade winds, and the Coriolis effect.',
  category: 'World Geography',
  keyDates: [
    { year: 'Koeppen', event: 'Koeppen Climate Classification — divides world into 5 major groups: A, B, C, D, E' },
    { year: 'ITCZ', event: 'Inter-Tropical Convergence Zone — equatorial low-pressure belt where trade winds converge' },
    { year: 'Coriolis Effect', event: 'Earth\'s rotation deflects winds — right in Northern Hemisphere, left in Southern' },
    { year: 'El Nino', event: 'Periodic warming of eastern Pacific Ocean — causes droughts in India, floods in Peru' },
    { year: 'La Nina', event: 'Periodic cooling of eastern Pacific — typically leads to stronger Indian monsoon' },
    { year: 'Jet Streams', event: 'High-altitude (9-12 km) westerly winds at about 200 km/h; influence weather patterns' },
    { year: 'Paris Agreement', event: '2015 — global commitment to limit warming to 1.5-2°C above pre-industrial levels' },
  ],
  notes: [
    {
      section: 'Atmospheric Structure & Heating',
      content:
        'Five atmospheric layers stack by temperature behaviour. The Troposphere (0-12 km; 8 km at poles, 16 km at equator) holds 75% of atmospheric mass and generates all weather; temperature drops at 6.5°C/km (Normal Lapse Rate) up to the Tropopause. The Stratosphere (12-50 km) contains the ozone layer (15-35 km) that absorbs UV radiation, causing temperature to rise with altitude; jet aircraft cruise here in calm, stable air. The Mesosphere (50-80 km) cools sharply to -90°C at the mesopause and burns up incoming meteors. The Thermosphere (80-700 km) heats rapidly as it absorbs solar radiation and houses the ionosphere, which reflects radio waves for long-distance communication. The Exosphere (above 700 km) merges into outer space. Earth receives insolation and reflects 30% back as albedo. Greenhouse gases (CO2, methane, water vapour, N2O) trap outgoing infrared radiation, keeping surface temperature at 15°C instead of -18°C. Over time, Earth maintains radiative equilibrium, emitting as much energy as it absorbs.',
    },
    {
      section: 'Pressure Belts & Wind Systems',
      content:
        'Four pressure belts encircle the Earth. The Equatorial Low (Doldrums, 0-5°N/S) generates rising air, persistent clouds, and heavy rainfall at the ITCZ. The Subtropical High (Horse Latitudes, 25-35°N/S) brings descending air that creates dry, calm conditions beneath the world\'s major deserts: Sahara, Thar, and Atacama. The Sub-polar Low (60°N/S) marks where warm subtropical and cold polar air converge, spawning frontal zones and cyclonic storms. The Polar High (90°N/S) caps each pole with cold, dense, descending air under permanent ice. Three wind systems flow between these belts: Trade Winds (NE in NH, SE in SH) blow from subtropical highs to equatorial lows as the most consistent winds on Earth; Westerlies (35-65°) carry moisture from subtropical highs toward sub-polar lows, watering temperate western coasts; Polar Easterlies flow from polar highs toward sub-polar lows. The Coriolis Effect deflects all moving air right in the Northern Hemisphere and left in the Southern, reaching zero at the equator and maximum at the poles.',
    },
    {
      section: 'Climate Zones & Koeppen Classification',
      content:
        'Koeppen classified world climates into 5 major groups based on temperature and precipitation: (A) Tropical — no winter, temp >18°C year-round; types: Af (Tropical Wet — Amazon, Congo, SE Asia), Am (Monsoon — India, Myanmar), Aw (Tropical Savanna — East Africa, Central America); (B) Dry/Arid — evaporation exceeds precipitation; types: BWh (Hot Desert — Sahara, Thar, Atacama), BSh (Semi-Arid/Steppe — Sahel, parts of India); (C) Warm Temperate/Mesothermal — mild winters; types: Cfa (Humid Subtropical — SE USA, eastern China, Buenos Aires), Cfb (Marine West Coast — NW Europe, New Zealand), Cs (Mediterranean — California, S Europe, S Australia); (D) Cold/Microthermal — severe winters; types: Dfa/Dfb (Humid Continental — NE USA, central Europe), Dfc (Subarctic/Taiga — Siberia, Canada); (E) Polar — no true summer; types: ET (Tundra — Arctic coasts), EF (Ice Cap — Greenland, Antarctica). India covers Am, Aw, BSh, BWh, Cwg, and others — showing its climatic diversity.',
    },
    {
      section: 'Ocean Currents & Their Effects',
      content:
        'Ocean currents are large-scale movements of water driven by winds, temperature differences, salinity, and Earth\'s rotation. Warm currents flow from tropics toward poles; cold currents flow from poles toward tropics. Major warm currents: Gulf Stream (North Atlantic — keeps NW Europe warm), Kuroshio/Japan Current (North Pacific), Brazilian Current (South Atlantic), East Australian Current. Major cold currents: Labrador Current (NW Atlantic), California Current (NE Pacific), Canary Current (NE Atlantic), Peru/Humboldt Current (SE Pacific), Benguela Current (SE Atlantic), West Australian Current. Effects on climate: Warm currents make coastal areas warmer and wetter (e.g., Western Europe is warmer than eastern Canada at same latitude due to Gulf Stream); Cold currents make coastal areas cooler and drier (e.g., Atacama Desert — the world\'s driest — is partly caused by the cold Humboldt Current). Mixing zones of warm and cold currents are rich fishing grounds — Grand Banks (Gulf Stream + Labrador), Dogger Bank (North Sea), Sea of Japan (Kuroshio + Oyashio).',
    },
    {
      section: 'ENSO, IOD & Global Climate Phenomena',
      content:
        'El Nino-Southern Oscillation (ENSO) is the most important coupled ocean-atmosphere phenomenon affecting global weather. El Nino (warm phase): Abnormal warming of eastern Pacific (Peru coast) — weakens trade winds, warm water shifts eastward. Effects: drought in India, Australia, Indonesia; heavy rains/floods in Peru, Ecuador, California; coral bleaching in Pacific. La Nina (cool phase): Abnormal cooling of eastern Pacific — strengthens trade winds. Effects: stronger Indian monsoon (more rainfall), wetter Australia/Indonesia, cooler and drier western Americas. ENSO cycle occurs every 2-7 years. Indian Ocean Dipole (IOD): Temperature difference between western and eastern Indian Ocean. Positive IOD (warm west, cool east) brings more rainfall to India; negative IOD causes drought. IOD can modulate ENSO\'s effect on Indian monsoon. Other phenomena: North Atlantic Oscillation (NAO) — affects European weather; Madden-Julian Oscillation (MJO) — 30-60 day oscillation affecting tropical rainfall; Arctic Oscillation — affects winter weather in Northern Hemisphere.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'World climatology is a fundamental UPSC topic. Questions on pressure belts, wind systems, ENSO, ocean currents, and Koeppen classification are common. SSC/RRB exams test atmospheric layers, wind names, and current-climate effects. Understanding climate phenomena like El Nino/La Nina is essential for current affairs linked to monsoon predictions.',
}
