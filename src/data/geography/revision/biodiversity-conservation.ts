import type { SubjectRevision } from '@/types/subject-notes'

export const biodiversityConservationRevision: SubjectRevision = {
  "topic": "biodiversity-conservation",
  "bullets": [
    "In-situ conservation: protecting species in natural habitats (NPs, WLSs, BRs, Sacred Groves).",
    "Ex-situ conservation: outside natural habitats (zoos, botanical gardens, gene banks, seed banks).",
    "CBD (1992): conservation, sustainable use, fair benefit sharing of genetic resources.",
    "CITES (1975): regulates wildlife trade through 3 Appendices (I — banned, II — controlled, III — protected).",
    "Nagoya Protocol (2010): Access and Benefit Sharing (ABS) of genetic resources.",
    "Kunming-Montreal GBF (2022): protect 30% of land and ocean by 2030 (\"30x30\" target).",
    "IUCN Red List categories: EX, CR, EN, VU, NT, LC.",
    "WLPA Schedule I provides highest protection for most endangered species (tiger, lion, elephant).",
    "NBA (Chennai) regulates access to biological resources under Biological Diversity Act 2002.",
    "Captive breeding successes: Barasingha (Kanha), tigers (Sariska, Panna reintroduction), vultures (Pinjore).",
    "HIPPO: major threats — Habitat loss, Invasive species, Pollution, Population growth, Over-exploitation.",
    "Lantana camara is the most dominant invasive weed in Indian forests."
  ],
  "comparisons": [
    {
      "title": "In-Situ vs Ex-Situ Conservation",
      "headers": [
        "Feature",
        "In-Situ",
        "Ex-Situ"
      ],
      "rows": [
        [
          "Location",
          "Natural habitat",
          "Outside natural habitat"
        ],
        [
          "Examples",
          "NPs, WLSs, BRs, Sacred Groves",
          "Zoos, gene banks, botanical gardens"
        ],
        [
          "Scope",
          "Entire ecosystem protected",
          "Individual species/genetic material"
        ],
        [
          "Preference",
          "More preferred — natural conditions",
          "Supplementary method"
        ],
        [
          "Cost",
          "Lower per-species but large areas needed",
          "Higher per-species, controlled environment"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Threats to Biodiversity (HIPPO)",
      "mnemonic": "Habitat loss, Invasive species, Pollution, Population, Over-exploitation",
      "explanation": "The five major threats to global biodiversity. Habitat loss is the #1 cause of species extinction worldwide."
    }
  ]
}
