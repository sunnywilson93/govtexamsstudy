import type { SubjectRevision } from '@/types/subject-notes'

export const climatologyRevision: SubjectRevision = {
  "topic": "climatology",
  "bullets": [
    "Troposphere (0-12 km) contains 75% of atmosphere and all weather phenomena.",
    "Ozone layer is in the Stratosphere (15-35 km); absorbs UV radiation.",
    "Normal Lapse Rate: temperature decreases at 6.5°C per 1,000 m altitude in troposphere.",
    "Four pressure belts: Equatorial Low (Doldrums), Subtropical High (Horse Latitudes), Sub-polar Low, Polar High.",
    "Trade Winds blow from subtropical high to equatorial low; NE in Northern Hemisphere, SE in Southern.",
    "Westerlies blow from subtropical high toward sub-polar low (35-65°); bring rain to western coasts.",
    "Coriolis Effect: deflects winds right in NH, left in SH; zero at equator, maximum at poles.",
    "El Nino: warming of eastern Pacific — causes drought in India; La Nina: cooling — stronger Indian monsoon.",
    "Koeppen classified world climates into 5 groups: A (Tropical), B (Dry), C (Temperate), D (Cold), E (Polar).",
    "Gulf Stream keeps NW Europe warm; Humboldt Current keeps Peru coast cool and dry.",
    "Mixing zones of warm and cold currents are rich fishing grounds (e.g., Grand Banks).",
    "Indian Ocean Dipole (IOD): Positive IOD increases Indian monsoon rainfall."
  ],
  "comparisons": [
    {
      "title": "Pressure Belts & Wind Systems",
      "headers": [
        "Pressure Belt",
        "Latitude",
        "Wind System",
        "Weather"
      ],
      "rows": [
        [
          "Equatorial Low (Doldrums)",
          "0-5°",
          "Trade Winds converge here",
          "Calm, cloudy, heavy rain"
        ],
        [
          "Subtropical High (Horse Latitudes)",
          "25-35°",
          "Source of Trade Winds & Westerlies",
          "Dry, calm — deserts here"
        ],
        [
          "Sub-polar Low",
          "~60°",
          "Westerlies meet Polar Easterlies",
          "Cyclonic storms, fronts"
        ],
        [
          "Polar High",
          "~90°",
          "Polar Easterlies blow from here",
          "Cold, dry, stable"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Atmospheric Layers",
      "mnemonic": "Troposphere-Stratosphere-Mesosphere-Thermosphere-Exosphere (T-S-M-T-E)",
      "explanation": "Five atmospheric layers from ground up. Weather in troposphere; ozone in stratosphere; coldest in mesosphere."
    }
  ]
}
