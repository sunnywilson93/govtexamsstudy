import type { SubjectRevision } from '@/types/subject-notes'

export const pressureBeltsWindsRevision: SubjectRevision = {
  "topic": "pressure-belts-winds",
  "bullets": [
    "Standard atmospheric pressure at sea level: 1013.25 mb (hPa) = 760 mm Hg.",
    "7 pressure belts: Equatorial Low (Doldrums), 2 Subtropical Highs (Horse Latitudes), 2 Subpolar Lows, 2 Polar Highs.",
    "Planetary winds: Trade Winds (30°→0°), Westerlies (30°→60°), Polar Easterlies (90°→60°).",
    "Coriolis Effect: winds deflect right in NH, left in SH; zero at equator, maximum at poles.",
    "ITCZ (Inter-Tropical Convergence Zone) shifts seasonally — over India in summer, driving SW monsoon.",
    "Three-cell model: Hadley Cell (0-30°), Ferrel Cell (30-60°), Polar Cell (60-90°).",
    "Subtropical Jet Stream (STJ) withdrawal from India triggers SW monsoon onset in June.",
    "Tropical Easterly Jet (TEJ) flows from east to west over peninsular India during summer monsoon.",
    "Somali Jet — low-level jet bringing moisture from the Indian Ocean; strengthened by cold Somali Current.",
    "Local winds in India: Loo (hot, NW India), Norwesters/Kalbaishakhi (thunderstorms, E India), Mango Showers (pre-monsoon, Kerala).",
    "Trade winds are the most consistent winds; Westerlies bring Western Disturbances to India.",
    "SW Monsoon (June-Sept) brings 75% of India's annual rainfall; NE Monsoon (Oct-Dec) gives rain to Tamil Nadu.",
    "Buys Ballot's Law: stand with back to wind in NH — low pressure is to your left.",
    "IMD (est. 1875, HQ Delhi) is India's national meteorological agency.",
    "Pressure belts shift 5-10° with apparent movement of the Sun — critical for monsoon mechanism."
  ],
  "comparisons": [
    {
      "title": "Planetary Wind Systems",
      "headers": [
        "Wind",
        "Direction (NH)",
        "Zone",
        "Characteristics"
      ],
      "rows": [
        [
          "Trade Winds",
          "NE to SW",
          "30°→0°",
          "Most consistent; drive ocean currents"
        ],
        [
          "Westerlies",
          "SW to NE",
          "30°→60°",
          "Variable; carry Western Disturbances"
        ],
        [
          "Polar Easterlies",
          "NE to SW",
          "90°→60°",
          "Cold, dry, weak"
        ]
      ]
    },
    {
      "title": "SW Monsoon vs NE Monsoon",
      "headers": [
        "Feature",
        "SW Monsoon",
        "NE Monsoon"
      ],
      "rows": [
        [
          "Period",
          "June-September",
          "October-December"
        ],
        [
          "Wind direction",
          "Southwest",
          "Northeast"
        ],
        [
          "Moisture source",
          "Indian Ocean (Arabian Sea + Bay of Bengal)",
          "Bay of Bengal"
        ],
        [
          "Rainfall coverage",
          "Most of India",
          "Mainly Tamil Nadu, SE coast"
        ],
        [
          "Share of annual rain",
          "~75%",
          "~10-15%"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Pressure Belt Order (Equator to Pole)",
      "mnemonic": "Every Student Seems Perfectly — EL, STH, SPL, PH",
      "explanation": "Equatorial Low, Subtropical High, Subpolar Low, Polar High — alternating low and high pressure belts."
    },
    {
      "title": "Monsoon Onset Trigger",
      "mnemonic": "STJ Shifts North → Monsoon Starts",
      "explanation": "The withdrawal of the Subtropical Jet Stream from south of the Himalayas to north triggers the sudden onset of the SW monsoon."
    }
  ]
}
