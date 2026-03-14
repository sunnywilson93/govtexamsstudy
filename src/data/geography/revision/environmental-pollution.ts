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
    "Stubble burning in Punjab and Haryana is a major cause of Delhi's winter smog.",
    "PM2.5 particles (diameter < 2.5 micrometres) penetrate deep into lungs — most dangerous for health.",
    "BOD (Biochemical Oxygen Demand) measures organic pollution in water; higher BOD means more polluted.",
    "Eutrophication occurs when excess nutrients (nitrogen, phosphorus) cause algal blooms, depleting dissolved oxygen.",
    "Noise level standards: residential zones 55 dB (day), 45 dB (night); industrial zones 75 dB (day), 70 dB (night).",
    "Fly ash from thermal power plants is a major solid waste — used in brick-making and cement production.",
    "India's FAME scheme (Faster Adoption and Manufacturing of EVs) promotes electric vehicles to reduce vehicular pollution.",
    "Ozone at ground level is a secondary pollutant formed by reaction of NOx and VOCs in sunlight — causes smog.",
    "Central Pollution Control Board (CPCB) monitors air quality at 800+ stations across India under NAAQM programme.",
    "Biomagnification — concentration of pollutants (like DDT, mercury) increases at each trophic level in the food chain.",
    "Thermal pollution from power plants raises water temperature, reducing dissolved oxygen and harming aquatic life.",
    "GRAP (Graded Response Action Plan) for Delhi-NCR activates progressively stricter measures as AQI worsens."
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
