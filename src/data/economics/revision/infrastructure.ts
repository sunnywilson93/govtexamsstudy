import type { SubjectRevision } from '@/types/subject-notes'

export const infrastructureRevision: SubjectRevision = {
  "topic": "infrastructure",
  "bullets": [
    "India: 2nd largest road network (~6.4 million km). National Highways ~1.46 lakh km.",
    "Bharatmala: Highway development. Sagarmala: Port-led development. UDAN: Regional air connectivity.",
    "Indian Railways: 4th largest network (~68,000 km). DFC: Eastern (1,337 km) and Western (1,506 km).",
    "Installed power capacity: ~430 GW. Thermal ~57%, Renewable ~43% (solar ~18%, wind ~11%, hydro ~11%).",
    "Net Zero target: 2070. Non-fossil fuel capacity: 500 GW by 2030. COP26 Glasgow announcements.",
    "National Green Hydrogen Mission: 5 MMT by 2030. Rs 19,744 crore outlay.",
    "PPP Models: BOT-Toll, BOT-Annuity, DBFOT, HAM (40% govt + 60% annuity), EPC (100% govt).",
    "NIP (National Infrastructure Pipeline): Rs 111 lakh crore (2020-25).",
    "Jal Jeevan Mission: Piped water to all rural households. 17% (2019) → ~77% (2024).",
    "ISA (International Solar Alliance): India-France, HQ Gurugram. 120+ members."
  ],
  "comparisons": [
    {
      "title": "PPP Models in Infrastructure",
      "headers": [
        "Model",
        "Govt Funding",
        "Risk Bearer",
        "Used For"
      ],
      "rows": [
        [
          "BOT-Toll",
          "Nil",
          "Private (revenue risk)",
          "High-traffic highways"
        ],
        [
          "BOT-Annuity",
          "Annuity payments",
          "Government (revenue)",
          "Moderate-traffic roads"
        ],
        [
          "HAM",
          "40% during construction",
          "Shared",
          "Most highway projects"
        ],
        [
          "EPC",
          "100%",
          "Government",
          "Low-traffic areas"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "India's Maritime & Land Initiatives — \"BSU\"",
      "mnemonic": "Bharatmala (roads), Sagarmala (ports), UDAN (airports)",
      "explanation": "Three major connectivity initiatives: Bharatmala Pariyojana = highway network. Sagarmala = port-led development and coastal shipping. UDAN (Ude Desh ka Aam Naagrik) = regional air connectivity to underserved airports."
    }
  ]
}
