import type { SubjectConcept } from '@/types/subject-notes'

export const geomorphologyConcept: SubjectConcept = {
  topic: 'geomorphology',
  title: 'Geomorphology — Landforms & Processes',
  description:
    'Geomorphology is the study of landforms and the processes that shape the Earth\'s surface. It covers endogenic processes (tectonic forces, volcanism) and exogenic processes (weathering, erosion, deposition). Understanding landform evolution is fundamental for geography in government exams.',
  category: 'World Geography',
  keyDates: [
    { year: 'Earth Age', event: 'Earth is approximately 4.6 billion years old' },
    { year: 'Plate Tectonics', event: 'Theory developed in the 1960s; explains movement of lithospheric plates' },
    { year: 'Continental Drift', event: 'Alfred Wegener proposed the theory in 1912 — Pangaea broke into continents' },
    { year: 'Richter Scale', event: 'Measures earthquake magnitude; replaced by Moment Magnitude Scale (Mw)' },
    { year: 'Ring of Fire', event: 'Pacific Ring of Fire — 75% of world\'s active volcanoes and 90% of earthquakes' },
    { year: 'Himalayas', event: 'Young fold mountains formed by collision of Indian and Eurasian plates ~50 MYA' },
  ],
  notes: [
    {
      section: 'Interior of the Earth',
      content:
        'The Earth has a layered structure: (1) Crust — outermost solid layer; 5-70 km thick; two types: Continental Crust (sial — silica + aluminium, avg density 2.7, thicker 30-70 km) and Oceanic Crust (sima — silica + magnesium, avg density 3.0, thinner 5-10 km); (2) Mantle — extends from Moho discontinuity to 2,900 km depth; upper mantle includes the rigid lithosphere (crust + upper mantle, 100 km) and the plastic asthenosphere (100-400 km, where convection currents drive plate tectonics); lower mantle extends to the Gutenberg discontinuity; (3) Core — outer core (2,900-5,100 km, liquid iron-nickel, generates Earth\'s magnetic field) and inner core (5,100-6,371 km, solid iron-nickel due to extreme pressure). Discontinuities: Mohorovicic (Moho) — between crust and mantle; Gutenberg — between mantle and core; Lehmann — between outer and inner core. Seismic waves (P-waves and S-waves) provide evidence of Earth\'s interior — S-waves cannot travel through liquid, proving the outer core is liquid.',
    },
    {
      section: 'Plate Tectonics & Volcanism',
      content:
        'The lithosphere is divided into major tectonic plates: Pacific (largest), North American, South American, Eurasian, African, Antarctic, and Indo-Australian. Plate boundaries are of three types: (1) Convergent (destructive) — plates collide; ocean-ocean convergence creates island arcs (Japan, Philippines); ocean-continent creates fold mountains + volcanic chains (Andes); continent-continent creates fold mountains without volcanism (Himalayas); subduction zones form deep ocean trenches (Mariana Trench — deepest at 11,034 m); (2) Divergent (constructive) — plates move apart; mid-ocean ridges form (Mid-Atlantic Ridge); rift valleys on continents (East African Rift); new oceanic crust formed; (3) Transform (conservative) — plates slide past each other; San Andreas Fault (California); frequent earthquakes but no volcanism. Volcanism: lava, gases, and pyroclastic material ejected through vents. Active volcanism concentrated along plate boundaries — Ring of Fire (Pacific), Mid-Atlantic Ridge, East African Rift. Volcano types: Shield (broad, gentle slopes — Mauna Loa), Composite/Stratovolcano (steep, layered — Mt. Fuji), Cinder Cone (smallest), Caldera (collapsed craters — Yellowstone).',
    },
    {
      section: 'Weathering & Mass Wasting',
      content:
        'Weathering is the in-situ breakdown of rocks without transport. Three types: (1) Physical/Mechanical Weathering — frost wedging (water freezes in cracks, expands), exfoliation/onion peeling (thermal expansion/contraction), pressure release (unloading), salt crystal growth; dominant in arid/semi-arid and cold regions; (2) Chemical Weathering — hydration, oxidation (iron becomes rust), carbonation (limestone dissolution by carbonic acid — creates karst topography), hydrolysis (feldspar breaks down to clay); dominant in hot-humid tropical regions; (3) Biological Weathering — plant roots penetrate cracks, burrowing animals, lichens secrete acids. Mass wasting/mass movement: gravity-driven downslope movement of rock/soil; types: rockfall, landslides (common in Himalayas), mudflow/debris flow, soil creep (slowest), slumping (rotational slide). Factors: steep slopes, saturated soil, earthquakes, deforestation. India\'s Himalayan and Western Ghats regions are highly vulnerable to landslides, especially during monsoon.',
    },
    {
      section: 'Erosional & Depositional Landforms',
      content:
        'River landforms: Erosional — V-shaped valleys, gorges/canyons, waterfalls, rapids, river terraces, meanders, oxbow lakes, potholes; Depositional — alluvial fans (at mountain base), floodplains, natural levees, deltas (arcuate — Nile, bird-foot — Mississippi, cuspate — Ebro). Glacial landforms: Erosional — cirques (armchair-shaped), aretes, horns (Matterhorn), U-shaped valleys, hanging valleys, fjords; Depositional — moraines (lateral, medial, terminal, ground), drumlins (inverted spoon), eskers (sinuous ridges), outwash plains. Wind/Aeolian landforms (desert): Erosional — mushroom/pedestal rocks, yardangs, zeugens, inselbergs; Depositional — sand dunes (barchan — crescent, seif/longitudinal, transverse), loess deposits. Karst landforms (limestone): Erosional — sinkholes/dolines, uvala, polje, swallow holes, limestone pavements; Depositional (underground) — stalactites (ceiling), stalagmites (floor), pillars, cave formations. Coastal landforms: Erosional — sea cliffs, sea caves, arches, stacks, wave-cut platforms; Depositional — beaches, spits, bars, lagoons, tombolos.',
    },
    {
      section: 'Earthquakes & Their Impact',
      content:
        'Earthquakes are caused by sudden release of energy in the Earth\'s crust, creating seismic waves. Focus (hypocenter) is the point of origin underground; Epicenter is the point on the surface directly above. Types: Tectonic (most destructive, at plate boundaries), Volcanic (associated with volcanism), Collapse (cave/mine), and Explosion (nuclear/industrial). Measurement: Richter Scale (logarithmic, measures magnitude), now largely replaced by Moment Magnitude Scale (Mw); Modified Mercalli Intensity Scale measures intensity (effects on structures/people). India\'s seismic zones (BIS): Zone V (very high risk — NE India, Kashmir, Himachal, Uttarakhand, Rann of Kutch, Andaman & Nicobar), Zone IV (high — Delhi, Bihar, UP, parts of Maharashtra), Zone III (moderate — most of Peninsular India), Zone II (low — stable Peninsular shield). Major earthquakes in India: Bihar-Nepal 1934 (8.1), Assam 1950 (8.6, strongest recorded), Latur 1993 (6.2, Peninsular — unexpected), Bhuj 2001 (7.7), Kashmir 2005 (7.6), Sikkim 2011 (6.9). National Disaster Management Authority (NDMA) coordinates earthquake preparedness.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Geomorphology is an important UPSC topic (1-2 questions yearly). Plate tectonics, seismic zones, and landform identification are frequently tested. SSC/RRB exams ask about Earth\'s interior layers, deepest trench, highest volcano, and earthquake zones. Matching landforms with their agents (river, glacier, wind) is a classic question pattern.',
}
