import type { SubjectRevision } from '@/types/subject-notes'

export const cyclonesRevision: SubjectRevision = {
  "topic": "cyclones",
  "bullets": [
    "Cyclones are low-pressure systems with inward-spiralling winds — counterclockwise in NH, clockwise in SH.",
    "Tropical cyclones: Hurricanes (Atlantic), Typhoons (NW Pacific), Cyclones (Indian Ocean), Willy-Willies (Australia).",
    "Formation needs: SST >26.5°C, Coriolis force (>5° from equator), low wind shear, upper-level divergence.",
    "Cyclone structure: Eye (calm, 20-40 km), Eyewall (strongest winds/rain), Spiral Rainbands.",
    "IMD classification: Depression→Deep Depression→Cyclonic Storm→Severe→Very Severe→Extremely Severe→Super Cyclonic Storm (>221 km/h).",
    "Bay of Bengal produces ~5-6 cyclones/year vs Arabian Sea ~1-2 (4:1 ratio).",
    "Bay of Bengal more cyclonic: higher SST (freshwater inflow), lower wind shear, ITCZ position, no cold upwelling.",
    "Cyclone seasons: Pre-monsoon (Apr-Jun) and Post-monsoon (Oct-Dec); post-monsoon is more active.",
    "Storm surge — most lethal component — accounts for ~90% of cyclone deaths; worst on shallow coasts and funnel-shaped bays.",
    "1999 Odisha Super Cyclone: 260 km/h winds, 7-8 m storm surge, 10,000+ deaths — led to NDMA establishment.",
    "Cyclone Fani (2019): massive evacuation of 1.2 million in Odisha — only 89 deaths; improved disaster management.",
    "Western Disturbances are extratropical cyclones from the Mediterranean — source of winter rain in north India.",
    "Extratropical cyclones: form at Polar Front (30-60°), have frontal structure, driven by temperature contrast.",
    "NTCA/NDRF and early warning (120-hour forecasts) have dramatically reduced cyclone mortality in India.",
    "Cyclone naming: 13 WMO/ESCAP countries contribute names in rotation; names like Amphan, Tauktae, Biparjoy.",
    "Climate change: proportion of intense cyclones increasing; Arabian Sea warming faster — more cyclones there."
  ],
  "comparisons": [
    {
      "title": "Tropical vs Extratropical Cyclones",
      "headers": [
        "Feature",
        "Tropical Cyclone",
        "Extratropical Cyclone"
      ],
      "rows": [
        [
          "Energy source",
          "Warm ocean water (latent heat)",
          "Temperature contrast between air masses"
        ],
        [
          "Formation zone",
          "5-30° latitude over oceans",
          "30-60° latitude (Polar Front)"
        ],
        [
          "Fronts",
          "No fronts",
          "Well-defined warm and cold fronts"
        ],
        [
          "Size",
          "100-500 km diameter",
          "1000-3000 km diameter"
        ],
        [
          "Intensity",
          "More intense winds",
          "Less intense but widespread"
        ],
        [
          "Indian example",
          "Bay of Bengal cyclones",
          "Western Disturbances"
        ]
      ]
    },
    {
      "title": "Bay of Bengal vs Arabian Sea Cyclones",
      "headers": [
        "Feature",
        "Bay of Bengal",
        "Arabian Sea"
      ],
      "rows": [
        [
          "Frequency",
          "~5-6/year",
          "~1-2/year"
        ],
        [
          "SST",
          "Higher (freshwater inflow)",
          "Lower (cold Somali Current)"
        ],
        [
          "Wind shear",
          "Lower",
          "Higher"
        ],
        [
          "Most affected coast",
          "Odisha, AP, TN, WB",
          "Gujarat, Maharashtra"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Cyclone Formation Conditions",
      "mnemonic": "SSCLU — SST>26.5°C, Sufficient Coriolis, Low shear, Upper divergence",
      "explanation": "Four essential conditions for tropical cyclone formation."
    },
    {
      "title": "IMD Cyclone Categories",
      "mnemonic": "D-DD-CS-SCS-VSCS-ESCS-SuCS",
      "explanation": "Depression, Deep Depression, Cyclonic Storm, Severe CS, Very Severe CS, Extremely Severe CS, Super Cyclonic Storm."
    }
  ]
}
