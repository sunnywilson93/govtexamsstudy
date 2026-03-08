import type { SubjectRevision } from '@/types/subject-notes'

export const worldClimateRegionsRevision: SubjectRevision = {
  "topic": "world-climate-regions",
  "bullets": [
    "Köppen classification: 5 groups — A (Tropical), B (Dry), C (Temperate), D (Continental), E (Polar).",
    "A: All months >18°C; Af (equatorial rainforest), Am (monsoon), Aw (savanna/wet-dry).",
    "B: Evaporation > precipitation; BWh (hot desert), BWk (cold desert), BSh (hot steppe), BSk (cold steppe).",
    "C: Coldest month -3°C to 18°C; Cfa (humid subtropical), Cfb (oceanic), Csa (Mediterranean), Cwa (subtropical dry winter).",
    "D: Coldest month <-3°C; continental; Dfa/Dfb (humid continental), Dfc (subarctic/taiga).",
    "E: Warmest month <10°C; ET (tundra), EF (ice cap).",
    "India spans: Aw (peninsular), Am (Malabar, NE), BWh (W Rajasthan), BSh (E Rajasthan), Cwa (Indo-Gangetic Plain).",
    "Mediterranean (Csa): warm dry summers, cool wet winters; olives, grapes, citrus; around Mediterranean Sea, California, Chile.",
    "Tropical rainforests (Af): Amazon, Congo, Indonesia; most biodiverse biome.",
    "Deserts (BWh) at 20-30° latitude due to subtropical high pressure; cold current deserts on west coasts.",
    "Taiga/Boreal (Dfc): world's largest biome by area; Russia, Canada, Scandinavia; spruce, pine, fir.",
    "Climate zones shifting poleward due to global warming; tropical belt widening ~0.5°/decade.",
    "Sahara expanded ~10% since 1920; desertification spreading.",
    "Treeline in Himalayas shifting upward 200-300 m over last century.",
    "India's NAPCC (2008): 8 missions addressing climate change impacts."
  ],
  "comparisons": [
    {
      "title": "Köppen Climate Groups",
      "headers": [
        "Group",
        "Name",
        "Temperature",
        "Example"
      ],
      "rows": [
        [
          "A",
          "Tropical",
          "All months >18°C",
          "Amazon, Indian Peninsula"
        ],
        [
          "B",
          "Dry",
          "Evap > Precip",
          "Sahara, Thar, Atacama"
        ],
        [
          "C",
          "Temperate",
          "-3 to 18°C coldest",
          "W Europe, Indo-Gangetic Plain"
        ],
        [
          "D",
          "Continental",
          "<-3°C coldest",
          "Russia, Canada, N USA"
        ],
        [
          "E",
          "Polar",
          "<10°C warmest",
          "Antarctica, Arctic, High Himalayas"
        ]
      ]
    },
    {
      "title": "Climate-Biome Correspondence",
      "headers": [
        "Climate",
        "Biome",
        "Key Vegetation"
      ],
      "rows": [
        [
          "Af",
          "Tropical Rainforest",
          "Multi-layered evergreen canopy"
        ],
        [
          "Aw",
          "Tropical Savanna",
          "Grassland with scattered trees"
        ],
        [
          "Csa",
          "Mediterranean",
          "Olive, grape, citrus"
        ],
        [
          "Dfc",
          "Taiga/Boreal",
          "Coniferous (spruce, pine, fir)"
        ],
        [
          "ET",
          "Tundra",
          "Mosses, lichens, dwarf shrubs"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Köppen Groups",
      "mnemonic": "A-B-C-D-E = Always Be Careful During Exams",
      "explanation": "Tropical, Dry, Temperate, Continental, Polar — the five major climate groups."
    },
    {
      "title": "Mediterranean Climate Features",
      "mnemonic": "Mediterranean = Mild wet winters, Mega dry summers",
      "explanation": "Mediterranean climate (Csa) has warm/hot dry summers and cool/mild wet winters."
    }
  ]
}
