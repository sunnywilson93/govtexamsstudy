import type { SubjectRevision } from '@/types/subject-notes'

export const energyRevision: SubjectRevision = {
  "topic": "energy",
  "bullets": [
    "India is the 3rd largest energy consumer and producer in the world.",
    "Thermal power (coal-based) accounts for about 57% of installed capacity.",
    "Renewable energy accounts for about 42% of installed capacity (including large hydro).",
    "India's solar installed capacity: about 72 GW (2023); target 280 GW by 2030.",
    "India's wind installed capacity: about 44 GW — 4th largest globally; Tamil Nadu leads.",
    "Bhadla Solar Park (Rajasthan) — one of the world's largest solar parks (2,245 MW).",
    "India has 22 operational nuclear reactors at 7 sites; Tarapur (1969) was the first.",
    "Kudankulam (Tamil Nadu) is the largest nuclear plant — Russian collaboration (2x1,000 MW).",
    "India's three-stage nuclear programme designed by Homi Bhabha; thorium-based Stage 3.",
    "India has 25% of world's thorium reserves in monazite sands of Kerala.",
    "India co-founded International Solar Alliance (ISA, 2015, HQ Gurugram) with France.",
    "India committed to Net Zero by 2070 at COP26 Glasgow (2021)."
  ],
  "comparisons": [
    {
      "title": "Conventional vs Renewable Energy",
      "headers": [
        "Feature",
        "Conventional",
        "Renewable"
      ],
      "rows": [
        [
          "Sources",
          "Coal, oil, gas, nuclear, large hydro",
          "Solar, wind, biomass, small hydro"
        ],
        [
          "Share",
          "~58% of installed capacity",
          "~42% of installed capacity"
        ],
        [
          "Pollution",
          "High (CO2, particulates)",
          "Low/zero emissions"
        ],
        [
          "Availability",
          "Finite/exhaustible",
          "Infinite/inexhaustible"
        ],
        [
          "Cost",
          "Fluctuating (fuel dependent)",
          "Declining (solar tariff < Rs 2/unit)"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Nuclear Power Plants (TRKN-KK-Ka)",
      "mnemonic": "Tarapur, Rawatbhata, Kalpakkam, Narora, Kaiga, Kudankulam, Kakrapar",
      "explanation": "India's 7 nuclear power plant locations. Tarapur (Maharashtra) was the first; Kudankulam (Tamil Nadu) is the largest."
    }
  ]
}
