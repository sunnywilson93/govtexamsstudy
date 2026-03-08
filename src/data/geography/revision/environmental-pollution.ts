import type { SubjectRevision } from '@/types/subject-notes'

export const environmentalPollutionRevision: SubjectRevision = {
  "topic": "environmental-pollution",
  "bullets": [
    "India has 39 of the world's 50 most polluted cities by PM2.5 concentration.",
    "National AQI has 6 categories: Good (0-50), Satisfactory, Moderate, Poor, Very Poor, Severe (401-500).",
    "BS-VI emission norms implemented from April 2020 (India skipped BS-V).",
    "NCAP (2019) targets 40% reduction in PM2.5 and PM10 by 2025-26 in 131 cities.",
    "Namami Gange (2014) — Rs 20,000+ crore programme for cleaning the Ganga river.",
    "India generates about 62 million tonnes of solid waste annually; only ~28% is processed.",
    "Single-use plastic items banned from July 2022 in India.",
    "NGT (National Green Tribunal, 2010) — specialized environmental court; Principal Bench in Delhi.",
    "CPCB and SPCBs are statutory bodies for pollution monitoring and control.",
    "SWM Rules 2016 mandate source segregation of waste into wet, dry, and hazardous.",
    "India is the 3rd largest e-waste generator globally (about 3.2 million tonnes/year).",
    "Stubble burning in Punjab and Haryana is a major cause of Delhi's winter smog."
  ],
  "comparisons": [
    {
      "title": "Types of Pollution — Sources & Laws",
      "headers": [
        "Type",
        "Major Sources",
        "Key Legislation"
      ],
      "rows": [
        [
          "Air",
          "Vehicles, industries, stubble burning",
          "Air Act 1981; BS-VI norms"
        ],
        [
          "Water",
          "Sewage (80%), industries, agriculture",
          "Water Act 1974; Namami Gange"
        ],
        [
          "Solid Waste",
          "Household, commercial, industrial",
          "SWM Rules 2016; Plastic Ban 2022"
        ],
        [
          "Noise",
          "Traffic, construction, loudspeakers",
          "Noise Rules 2000 under EPA 1986"
        ],
        [
          "Soil",
          "Fertilizers, pesticides, mining waste",
          "EPA 1986; Soil Health Card 2015"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "AQI Categories",
      "mnemonic": "Good-Satisfactory-Moderate-Poor-Very Poor-Severe",
      "explanation": "National AQI ranges: Good (0-50), Satisfactory (51-100), Moderate (101-200), Poor (201-300), Very Poor (301-400), Severe (401-500)."
    }
  ]
}
