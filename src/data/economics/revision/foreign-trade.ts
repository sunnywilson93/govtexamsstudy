import type { SubjectRevision } from '@/types/subject-notes'

export const foreignTradeRevision: SubjectRevision = {
  "topic": "foreign-trade",
  "bullets": [
    "India's total trade (2023-24): ~$1.56 trillion. Merchandise exports: ~$437B. Services exports: ~$340B.",
    "Trade deficit (merchandise): ~$240 billion. Services surplus: ~$160 billion.",
    "Largest trade partner: USA. Largest import source: China. Key imports: crude oil, gold, electronics.",
    "CAD (Current Account Deficit): ~1.2% of GDP (2023-24). BoP = Current Account + Capital Account.",
    "WTO: India is founding member (1995). MFN principle: Non-discrimination among WTO members.",
    "India withdrew from RCEP (2019) — concerns about cheap Chinese imports.",
    "Recent FTAs: India-UAE CEPA (2022), India-Australia ECTA (2022).",
    "RoDTEP replaced MEIS: Remission of duties and taxes on exported products.",
    "SEZs: Tax incentives for export-oriented units. Regulated under SEZ Act 2005.",
    "Anti-dumping duty: When foreign goods sold below fair market value to capture market."
  ],
  "comparisons": [
    {
      "title": "Current Account vs Capital Account of BoP",
      "headers": [
        "Feature",
        "Current Account",
        "Capital Account"
      ],
      "rows": [
        [
          "Includes",
          "Trade, services, remittances",
          "FDI, FPI, ECBs, NRI deposits"
        ],
        [
          "Nature",
          "Income/consumption flows",
          "Investment/borrowing flows"
        ],
        [
          "India's position",
          "Usually deficit (CAD)",
          "Usually surplus"
        ],
        [
          "Key component",
          "Trade balance",
          "FDI + FPI"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "BoP = CA + KA — \"Current + Capital\"",
      "mnemonic": "Balance of Payments = Current Account + Capital Account",
      "explanation": "The BoP has two main accounts. Current Account covers trade, services, income, and transfers. Capital Account covers investment flows (FDI, FPI) and borrowings. Overall BoP surplus → forex reserves increase."
    }
  ]
}
