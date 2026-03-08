import type { SubjectRevision } from '@/types/subject-notes'

export const agricultureEconomyRevision: SubjectRevision = {
  "topic": "agriculture-economy",
  "bullets": [
    "Agriculture: ~15% GDP, ~42% employment — indicates low productivity and disguised unemployment.",
    "86% of farmers are small/marginal (holdings <2 hectares). Average farm size: 1.08 hectares.",
    "Green Revolution (1960s): M.S. Swaminathan (India), Norman Borlaug. HYV seeds, fertilisers, irrigation.",
    "MSP announced for 23 crops by CACP. Since 2018-19, MSP = 1.5 × A2+FL cost.",
    "Swaminathan Commission: Recommended MSP at C2+50% (comprehensive cost including rent and interest).",
    "NFSA 2013: 5 kg/person/month — Rice Rs 3/kg, Wheat Rs 2/kg, Coarse grains Rs 1/kg. Covers 67% population.",
    "PM-KISAN: Rs 6,000/year in 3 instalments. Over 11 crore farmer families.",
    "PMFBY: Crop insurance — 2% kharif, 1.5% rabi, 5% commercial crops. Drone/satellite assessment.",
    "White Revolution (Operation Flood, 1970): Verghese Kurien, Amul. India = largest milk producer.",
    "Three farm laws (2020) repealed in Nov 2021. e-NAM links APMCs electronically."
  ],
  "comparisons": [
    {
      "title": "MSP Cost Concepts — A2, FL, C2",
      "headers": [
        "Cost Concept",
        "Includes",
        "Used For"
      ],
      "rows": [
        [
          "A2",
          "Actual paid-out costs (seeds, fertiliser, labour hired)",
          "Minimum cost calculation"
        ],
        [
          "A2+FL",
          "A2 + imputed family labour",
          "MSP calculation (current formula: 1.5× A2+FL)"
        ],
        [
          "C2",
          "A2+FL + rent on land + interest on capital",
          "Swaminathan Commission recommendation (C2+50%)"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Crop Seasons — KRZ",
      "mnemonic": "Kharif (June-Oct): Rice, Maize, Cotton. Rabi (Oct-Mar): Wheat, Mustard, Gram. Zaid (Mar-Jun): Watermelon, Cucumber",
      "explanation": "India has three cropping seasons. Kharif = monsoon crops (sown June, harvested Oct). Rabi = winter crops (sown Oct, harvested Mar). Zaid = short summer season. Remember: K=Kharif=Monsoon, R=Rabi=Winter, Z=Zaid=Summer."
    }
  ]
}
