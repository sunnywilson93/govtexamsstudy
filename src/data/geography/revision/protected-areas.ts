import type { SubjectRevision } from '@/types/subject-notes'

export const protectedAreasRevision: SubjectRevision = {
  "topic": "protected-areas",
  "bullets": [
    "India has 106 National Parks, 567 Wildlife Sanctuaries, 52 Tiger Reserves, 18 Biosphere Reserves.",
    "Jim Corbett (Uttarakhand, 1936) — India's first National Park and first Tiger Reserve (1973).",
    "Hemis (Ladakh) — largest National Park in India by area; snow leopard habitat.",
    "Kaziranga (Assam) — one-horned rhinoceros; highest tiger density; UNESCO World Heritage Site.",
    "Gir (Gujarat) — only habitat of the Asiatic Lion in the world.",
    "Keibul Lamjao (Manipur) — only floating National Park; habitat of Sangai deer.",
    "India has 3,167+ tigers (2022 census) — 75% of world's wild tiger population.",
    "18 Biosphere Reserves in India; Nilgiri BR (1986) was the first; 12 in UNESCO World Network.",
    "India has 75 Ramsar Sites (2023); Tamil Nadu has the most sites (16).",
    "India has 7 Natural UNESCO World Heritage Sites.",
    "Eco-Sensitive Zones (ESZ) are buffer zones (up to 10 km) around NPs and WLSs.",
    "Sacred Groves are community-protected forest patches — contribute to traditional conservation."
  ],
  "comparisons": [
    {
      "title": "Key National Parks & Their Species",
      "headers": [
        "National Park",
        "State",
        "Key Species"
      ],
      "rows": [
        [
          "Jim Corbett",
          "Uttarakhand",
          "Bengal Tiger (first NP)"
        ],
        [
          "Kaziranga",
          "Assam",
          "One-horned Rhinoceros"
        ],
        [
          "Gir",
          "Gujarat",
          "Asiatic Lion"
        ],
        [
          "Sundarbans",
          "West Bengal",
          "Royal Bengal Tiger (mangrove)"
        ],
        [
          "Kanha",
          "Madhya Pradesh",
          "Barasingha (hard-ground swamp deer)"
        ],
        [
          "Periyar",
          "Kerala",
          "Indian Elephant"
        ],
        [
          "Silent Valley",
          "Kerala",
          "Lion-tailed Macaque"
        ],
        [
          "Namdapha",
          "Arunachal Pradesh",
          "4 big cats (tiger, leopard, snow leopard, clouded leopard)"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Protected Area Hierarchy",
      "mnemonic": "NP > WLS > CR > CmR (National Park > Wildlife Sanctuary > Conservation Reserve > Community Reserve)",
      "explanation": "National Parks have highest protection (no human activity). WLS allows limited activity. CR/CmR are buffer/corridor areas."
    }
  ]
}
