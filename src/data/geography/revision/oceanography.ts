import type { SubjectRevision } from '@/types/subject-notes'

export const oceanographyRevision: SubjectRevision = {
  "topic": "oceanography",
  "bullets": [
    "Oceans cover about 71% of Earth's surface; Pacific is the largest and deepest.",
    "Challenger Deep in Mariana Trench (Pacific) is the deepest point — 11,034 m.",
    "Average ocean salinity: 35 ppt; Dead Sea has highest salinity (~340 ppt).",
    "Continental Shelf: shallow extension of continent, up to 200 m depth; India's shelf is 530,000 sq km.",
    "Mid-ocean ridges are formed at divergent plate boundaries; Mid-Atlantic Ridge is the longest (16,000 km).",
    "Spring Tides occur during full moon and new moon (Sun-Moon-Earth aligned); Neap Tides at quarter moons.",
    "Gulf of Khambhat has the highest tidal range in India; Bay of Fundy (Canada) has world's highest.",
    "UNCLOS (1982) defines maritime zones: Territorial Sea (12 nm), EEZ (200 nm), Continental Shelf.",
    "India's EEZ is about 2.01 million sq km.",
    "Strait of Hormuz: 20% of world oil transit; Strait of Malacca: busiest commercial strait.",
    "2004 Indian Ocean Tsunami (9.1 magnitude) killed over 230,000 people globally, 12,400 in India.",
    "India's Deep Ocean Mission explores polymetallic nodules in Central Indian Ocean Basin."
  ],
  "comparisons": [
    {
      "title": "UNCLOS Maritime Zones",
      "headers": [
        "Zone",
        "Extent",
        "Rights"
      ],
      "rows": [
        [
          "Territorial Sea",
          "0-12 nm",
          "Full sovereignty"
        ],
        [
          "Contiguous Zone",
          "12-24 nm",
          "Customs, immigration enforcement"
        ],
        [
          "EEZ",
          "0-200 nm",
          "Sovereign rights over resources"
        ],
        [
          "Continental Shelf",
          "Up to 350 nm",
          "Seabed/subsoil resource rights"
        ],
        [
          "High Seas",
          "Beyond EEZ",
          "Freedom of navigation; common heritage"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Tides (S vs N)",
      "mnemonic": "Spring = Strong (Sun+Moon aligned); Neap = Narrow (Sun⊥Moon)",
      "explanation": "Spring tides have the largest range (full/new moon). Neap tides have the smallest range (quarter moons)."
    }
  ]
}
