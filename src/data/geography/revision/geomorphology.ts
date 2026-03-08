import type { SubjectRevision } from '@/types/subject-notes'

export const geomorphologyRevision: SubjectRevision = {
  "topic": "geomorphology",
  "bullets": [
    "Earth is approximately 4.6 billion years old; interior has three layers: Crust, Mantle, Core.",
    "Continental crust (sial) is thicker (30-70 km); Oceanic crust (sima) is thinner (5-10 km) but denser.",
    "Moho discontinuity: between crust and mantle; Gutenberg: mantle-core; Lehmann: outer-inner core.",
    "Plate Tectonics: 7 major plates; boundaries: Convergent, Divergent, Transform.",
    "Himalayas formed by convergence of Indian and Eurasian plates ~50 MYA.",
    "Ring of Fire (Pacific) — 75% of world's active volcanoes and 90% of earthquakes.",
    "Mariana Trench (11,034 m) is the deepest point on Earth — Challenger Deep in Pacific.",
    "Weathering: Physical (frost, exfoliation), Chemical (carbonation, oxidation), Biological (roots, lichens).",
    "River erosion creates V-shaped valleys, gorges, waterfalls; deposition creates deltas, floodplains.",
    "Glaciers create cirques, U-shaped valleys, moraines, drumlins.",
    "India's seismic zones: Zone V (highest risk — NE, Kashmir, Kutch), Zone II (lowest — stable Peninsula).",
    "Bhuj earthquake 2001 (7.7 magnitude) catalysed the Disaster Management Act 2005."
  ],
  "comparisons": [
    {
      "title": "Earth's Interior Layers",
      "headers": [
        "Layer",
        "Depth",
        "State",
        "Composition"
      ],
      "rows": [
        [
          "Crust",
          "0-70 km",
          "Solid",
          "Silicates (sial/sima)"
        ],
        [
          "Upper Mantle",
          "70-400 km",
          "Partially molten (asthenosphere)",
          "Iron-magnesium silicates"
        ],
        [
          "Lower Mantle",
          "400-2,900 km",
          "Solid (high pressure)",
          "Dense silicates"
        ],
        [
          "Outer Core",
          "2,900-5,100 km",
          "Liquid",
          "Iron-nickel (generates magnetic field)"
        ],
        [
          "Inner Core",
          "5,100-6,371 km",
          "Solid",
          "Iron-nickel (extreme pressure)"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Discontinuities (M-G-L)",
      "mnemonic": "Moho (Crust-Mantle), Gutenberg (Mantle-Core), Lehmann (Outer-Inner Core)",
      "explanation": "Three seismic discontinuities in Earth's interior. Identified by changes in seismic wave velocity."
    }
  ]
}
