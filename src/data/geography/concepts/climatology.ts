import type { SubjectConcept } from '@/types/subject-notes'

export const climatologyConcept: SubjectConcept = {
  topic: 'climatology',
  title: 'World Climatology',
  description:
    'Climatology studies long-term weather patterns across the globe. Earth\'s climate is shaped by latitude, altitude, ocean currents, pressure systems, and atmospheric circulation. Understanding global climate zones, wind systems, and climate change is essential for geography in competitive exams.',
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
        'The atmosphere has five layers: (1) Troposphere — 0-12 km (8 km at poles, 16 km at equator); contains 75% of atmospheric mass; all weather occurs here; temperature decreases with altitude at 6.5°C/km (Normal Lapse Rate); topped by Tropopause; (2) Stratosphere — 12-50 km; ozone layer (15-35 km) absorbs UV radiation; temperature increases with altitude; jet aircraft fly here; (3) Mesosphere — 50-80 km; temperature decreases; coldest layer (about -90°C at mesopause); meteors burn up here; (4) Thermosphere — 80-700 km; temperature rises sharply due to absorption of solar radiation; includes the ionosphere (important for radio wave reflection); (5) Exosphere — above 700 km; merges with outer space. Earth receives energy through insolation (incoming solar radiation). Albedo is the fraction reflected back — Earth\'s average albedo is about 30%. Greenhouse effect: CO2, methane, water vapour, N2O trap outgoing infrared radiation, maintaining average surface temperature at 15°C (without it, Earth would be -18°C). Energy budget: Earth radiates as much energy as it receives in the long run (radiative equilibrium).',
    },
    {
      section: 'Pressure Belts & Wind Systems',
      content:
        'Global pressure belts: (1) Equatorial Low Pressure Belt (Doldrums, 0-5°N/S) — intense heating causes air to rise; calm, cloudy, heavy rainfall; ITCZ location; (2) Subtropical High Pressure Belt (Horse Latitudes, 25-35°N/S) — descending air creates dry, calm conditions; world\'s major deserts located here (Sahara, Thar, Atacama); (3) Sub-polar Low Pressure Belt (60°N/S) — convergence of warm subtropical and cold polar air; frontal zone, cyclonic storms; (4) Polar High Pressure Belt (90°N/S) — cold, dense, descending air; permanent ice. Wind systems: Trade Winds (NE in NH, SE in SH — most consistent winds, blow from subtropical high to equatorial low); Westerlies (blow from subtropical high toward sub-polar low, 35-65°; bring rain to western coasts in temperate zones); Polar Easterlies (blow from polar high toward sub-polar low). Coriolis Effect: Earth\'s rotation deflects moving air — right in Northern Hemisphere, left in Southern; zero at equator, maximum at poles; explains why winds are not straight but curved.',
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
