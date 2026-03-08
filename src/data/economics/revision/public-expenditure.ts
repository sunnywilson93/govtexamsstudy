import type { SubjectRevision } from '@/types/subject-notes'

export const publicExpenditureRevision: SubjectRevision = {
  "topic": "public-expenditure",
  "bullets": [
    "Revenue Expenditure: Does not create assets (salaries, pensions, interest, subsidies). Capital Expenditure: Creates assets or reduces liabilities.",
    "Major subsidies: Food (~Rs 2 lakh crore), Fertiliser (~Rs 1.64 lakh crore), LPG/petroleum.",
    "FCI (Food Corporation of India): Procures, stores, distributes food grains under PDS.",
    "DBT via JAM Trinity eliminates ghost beneficiaries — saved over Rs 2.7 lakh crore cumulatively.",
    "Capital expenditure multiplier: Rs 1 of CapEx generates Rs 2.5-4.0 of output (IMF estimates for India).",
    "CapEx budget has risen sharply: Rs 4.39L cr (21-22) → Rs 11.11L cr (24-25).",
    "NMP (National Monetisation Pipeline): Rs 6 lakh crore from leasing brownfield assets (not privatisation).",
    "Disinvestment: Sale of government stake in PSUs. Air India sold to Tata Group (2022).",
    "Central Sector Schemes: 100% Centre funded. Centrally Sponsored: Centre + State funding (60:40 etc.).",
    "Outcome Budgeting: Focus on results/outcomes rather than just expenditure allocation."
  ],
  "comparisons": [
    {
      "title": "Revenue vs Capital Expenditure",
      "headers": [
        "Feature",
        "Revenue Expenditure",
        "Capital Expenditure"
      ],
      "rows": [
        [
          "Asset creation",
          "No",
          "Yes"
        ],
        [
          "Examples",
          "Salaries, pensions, subsidies",
          "Roads, bridges, defence equipment"
        ],
        [
          "Fiscal multiplier",
          "Lower",
          "Higher (2.5-4x)"
        ],
        [
          "Share of budget",
          "~77%",
          "~23%"
        ],
        [
          "Growth impact",
          "Consumption support",
          "Long-term productive capacity"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Three Big Subsidies — \"FFF\"",
      "mnemonic": "Food, Fertiliser, Fuel (petroleum/LPG)",
      "explanation": "The three major explicit subsidies in India's budget are Food (FCI/PDS), Fertiliser (urea/NBS), and Fuel (LPG/kerosene). Together they account for ~7-10% of central government expenditure."
    }
  ]
}
