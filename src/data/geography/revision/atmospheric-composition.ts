import type { SubjectRevision } from '@/types/subject-notes'

export const atmosphericCompositionRevision: SubjectRevision = {
  "topic": "atmospheric-composition",
  "bullets": [
    "Atmosphere composition: Nitrogen 78.08%, Oxygen 20.95%, Argon 0.93%, CO2 0.04% (~420 ppm in 2024), trace gases.",
    "CO2 has risen from 280 ppm (pre-industrial) to 420+ ppm — highest in 800,000 years; primary greenhouse gas.",
    "Water vapour (0-4%) is the most abundant greenhouse gas; varies by location; concentrated in the lower troposphere.",
    "Five atmospheric layers: Troposphere (0-18 km), Stratosphere (18-50 km), Mesosphere (50-80 km), Thermosphere (80-700 km), Exosphere (>700 km).",
    "Troposphere: 75% of atmospheric mass, all weather, temp decreases at 6.5°C/1000 m (normal lapse rate).",
    "Stratosphere: contains ozone layer (20-25 km), temp increases with altitude, jet aircraft fly here.",
    "Ozone layer absorbs 97-99% of UV-B radiation; discovered depleted (Antarctic ozone hole) in 1985.",
    "Montreal Protocol (1987): phasing out CFCs — ratified by all 198 UN members; most successful environmental treaty.",
    "Solar constant: ~1,361 W/m² at top of atmosphere; Earth reflects 30% (planetary albedo).",
    "Earth's heat budget: 30% reflected, 23% absorbed by atmosphere, 47% absorbed by surface.",
    "Greenhouse effect keeps Earth at ~15°C instead of -18°C; enhanced greenhouse effect causes global warming.",
    "Temperature inversion: reversal of normal lapse rate; causes fog and smog; common in Indo-Gangetic Plain in winter.",
    "Three types of rainfall: convectional (equatorial), orographic (Western Ghats), cyclonic/frontal (Western Disturbances).",
    "Mawsynram/Cherrapunji — world's wettest places (~11,873 mm/year) due to orographic rainfall on Khasi Hills.",
    "Western Disturbances — extratropical storms from the Mediterranean bringing winter rain to north India.",
    "Loo — hot dry winds in Indo-Gangetic Plain (May-June); Norwesters (Kalbaishakhi) — thunderstorms in eastern India (April-May).",
    "India's NCAP (2019): targets 20-30% reduction in PM2.5/PM10 in 131 cities by 2025-26."
  ],
  "comparisons": [
    {
      "title": "Atmospheric Layers",
      "headers": [
        "Layer",
        "Altitude",
        "Temperature",
        "Key Features"
      ],
      "rows": [
        [
          "Troposphere",
          "0-8/18 km",
          "Decreases (6.5°C/km)",
          "All weather, 75% of mass"
        ],
        [
          "Stratosphere",
          "18-50 km",
          "Increases (ozone absorbs UV)",
          "Ozone layer, jet aircraft"
        ],
        [
          "Mesosphere",
          "50-80 km",
          "Decreases",
          "Coldest layer (-90°C), meteors burn"
        ],
        [
          "Thermosphere",
          "80-700 km",
          "Increases (>1500°C)",
          "Ionosphere, auroras, ISS orbit"
        ],
        [
          "Exosphere",
          ">700 km",
          "Varies",
          "Transition to space, satellites"
        ]
      ]
    },
    {
      "title": "Types of Rainfall",
      "headers": [
        "Type",
        "Mechanism",
        "Indian Example"
      ],
      "rows": [
        [
          "Convectional",
          "Intense heating → convection",
          "Summer afternoon thundershowers"
        ],
        [
          "Orographic",
          "Moist air forced over mountains",
          "Mawsynram, Western Ghats windward"
        ],
        [
          "Cyclonic/Frontal",
          "Air mass convergence",
          "Western Disturbances (winter rain)"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Atmospheric Layers (bottom to top)",
      "mnemonic": "Totally Sexy Men Turn Everywhere",
      "explanation": "Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere — from surface upward."
    },
    {
      "title": "Atmosphere Composition",
      "mnemonic": "Never Offer Arjun Carbon — 78, 21, 1, 0.04",
      "explanation": "Nitrogen 78%, Oxygen 21%, Argon ~1%, CO2 0.04% — approximate percentages of major atmospheric gases."
    }
  ]
}
