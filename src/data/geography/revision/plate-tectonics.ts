import type { SubjectRevision } from '@/types/subject-notes'

export const plateTectonicsRevision: SubjectRevision = {
  topic: 'plate-tectonics',
  bullets: [
    'Alfred Wegener proposed Continental Drift Theory (1912) — all continents were once part of Pangaea, surrounded by Panthalassa ocean.',
    'Pangaea split into Laurasia (north) and Gondwana (south) about 200 million years ago.',
    'Evidence for drift: jigsaw fit of coastlines, identical Glossopteris/Mesosaurus fossils across continents, matching rock formations, glacial tillite in tropical India.',
    'Harry Hess proposed Sea Floor Spreading (1960-62) — new oceanic crust forms at mid-ocean ridges and moves outward symmetrically.',
    'Plate Tectonics Theory (1967-68) — the lithosphere is divided into rigid plates that float on the semi-fluid asthenosphere.',
    '7 major plates: Pacific (largest), North American, South American, African, Eurasian, Indo-Australian, Antarctic.',
    'Three boundary types: Divergent (constructive — new crust), Convergent (destructive — subduction/mountains), Transform (conservative — faults).',
    'Indian Plate collided with Eurasian Plate ~50 MYA, creating the Himalayas — world\'s youngest and highest fold mountains.',
    'Indian Plate still moves northward at ~5 cm/year; Himalayas rise ~1 cm/year — seismically active.',
    'Driving forces: mantle convection currents (Holmes, 1929), slab pull, ridge push, basal drag.',
    'Ring of Fire — 75% of world\'s volcanoes and 90% of earthquakes along Pacific Plate margins.',
    'India\'s Seismic Zone V (highest risk): J&K, Ladakh, HP, Uttarakhand, N. Bihar, all NE India, Kutch, Andaman & Nicobar.',
    'Barren Island (Andaman Sea) — India\'s only active volcano; Narcondam has a dormant volcano.',
    'Deccan Traps (~66 MYA) — formed by the Reunion hotspot; massive basalt lava flows covering 500,000 sq km.',
    'Gondwana formations in India contain 98% of coal reserves — identical Glossopteris flora found in India, Africa, S. America, Antarctica, Australia.',
    'The 2004 Indian Ocean tsunami was caused by a 9.1 magnitude earthquake on the India-Burma subduction zone off Sumatra.',
  ],
  comparisons: [
    {
      title: 'Continental Drift vs Plate Tectonics',
      headers: ['Feature', 'Continental Drift (Wegener, 1912)', 'Plate Tectonics (1967-68)'],
      rows: [
        ['Concept', 'Continents drift through ocean floor', 'Rigid plates move on asthenosphere'],
        ['Mechanism', 'Tidal/centrifugal forces (too weak)', 'Mantle convection currents (proven)'],
        ['Unit of movement', 'Continents only', 'Entire lithospheric plates (continent + ocean floor)'],
        ['Ocean floor role', 'Passive — continents plough through', 'Active — created at ridges, destroyed at trenches'],
        ['Scientific status', 'Initially rejected, later vindicated', 'Universally accepted'],
      ],
    },
    {
      title: 'Divergent vs Convergent vs Transform Boundaries',
      headers: ['Feature', 'Divergent', 'Convergent', 'Transform'],
      rows: [
        ['Plate motion', 'Move apart', 'Collide', 'Slide past each other'],
        ['Crust effect', 'New crust created', 'Crust subducted/destroyed', 'Crust preserved'],
        ['Landforms', 'Mid-ocean ridges, rift valleys', 'Fold mountains, trenches, volcanoes', 'Faults, earthquakes'],
        ['Example', 'Mid-Atlantic Ridge, East African Rift', 'Himalayas, Mariana Trench', 'San Andreas Fault'],
      ],
    },
    {
      title: 'Types of Convergent Boundaries',
      headers: ['Type', 'Process', 'Landform', 'Example'],
      rows: [
        ['Oceanic-Continental', 'Oceanic plate subducts', 'Volcanic mountain arc + trench', 'Andes, Cascades'],
        ['Continental-Continental', 'Crumpling/folding', 'Fold mountains (no volcanism)', 'Himalayas (India-Eurasia)'],
        ['Oceanic-Oceanic', 'One plate subducts', 'Volcanic island arc + trench', 'Japan, Andaman Islands'],
      ],
    },
  ],
  mnemonics: [
    {
      title: '7 Major Plates',
      mnemonic: 'PANSEIA — Pacific, African, North American, South American, Eurasian, Indo-Australian, Antarctic',
      explanation: 'The 7 major lithospheric plates in descending order of general recognition. Pacific is the largest plate.',
    },
    {
      title: 'Seismic Zone V Areas in India',
      mnemonic: 'J-K Helps Utterly Nervous Kutch And Nicobar',
      explanation: 'Zone V (very high risk): J&K, Ladakh, Himachal Pradesh, Uttarakhand, North Bihar, NE India, Kutch (Gujarat), Andaman & Nicobar.',
    },
    {
      title: 'Evidence for Continental Drift (FGCJ)',
      mnemonic: 'Fossils, Geology, Climate, Jigsaw fit',
      explanation: 'Wegener\'s four types of evidence: matching fossils, geological rock matches, paleoclimatic evidence (glacial deposits), and coastline jigsaw fit.',
    },
  ],
}
