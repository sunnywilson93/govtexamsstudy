import type { SubjectRevision } from '@/types/subject-notes'

export const exchangeRateRevision: SubjectRevision = {
  "topic": "exchange-rate",
  "bullets": [
    "India follows managed float (dirty float) since 1993 — market-determined with RBI intervention.",
    "Rupee devalued ~20% in July 1991 (two steps) during BoP crisis.",
    "Current account convertibility achieved in 1994. Capital account: partial convertibility.",
    "FEMA 1999 replaced FERA 1973 — shift from conservation to management. FEMA violations are civil offences.",
    "Forex reserves: ~$640 billion (early 2025). Components: FCAs (~95%), Gold, SDRs, IMF reserve position.",
    "Import cover = Forex Reserves / Monthly imports. India: ~10 months (comfortable: 3-6 months).",
    "REER >100: Currency overvalued (exports less competitive). REER <100: Undervalued.",
    "Appreciation: Rupee strengthens (82→80/dollar). Depreciation: Rupee weakens (80→82/dollar).",
    "Tarapore Committee-I (1997) and II (2006) recommended full capital account convertibility — not yet achieved.",
    "Masala Bonds: Rupee-denominated bonds issued overseas — exchange rate risk on investor."
  ],
  "comparisons": [
    {
      "title": "FERA vs FEMA",
      "headers": [
        "Feature",
        "FERA (1973)",
        "FEMA (1999)"
      ],
      "rows": [
        [
          "Approach",
          "Conservation of forex",
          "Management of forex"
        ],
        [
          "Violations",
          "Criminal offence",
          "Civil offence"
        ],
        [
          "Objective",
          "Restrict forex outflows",
          "Facilitate external trade/payments"
        ],
        [
          "Current account",
          "Restricted",
          "Fully convertible"
        ],
        [
          "Capital account",
          "Highly restricted",
          "Partially liberalised"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Exchange Rate Timeline — \"Fixed → Basket → Float\"",
      "mnemonic": "1947-71: Fixed to GBP. 1975: Basket. 1993: Managed Float",
      "explanation": "India's exchange rate evolution: Fixed rate pegged to British Pound (1947-71), then to a basket of currencies (1975), and finally a market-determined managed float (1993). The 1991 devaluation was the pivot."
    }
  ]
}
