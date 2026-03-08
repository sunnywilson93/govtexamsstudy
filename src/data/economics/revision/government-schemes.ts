import type { SubjectRevision } from '@/types/subject-notes'

export const governmentSchemesRevision: SubjectRevision = {
  "topic": "government-schemes",
  "bullets": [
    "MGNREGA (2006): 100 days wage guarantee. Demand-driven. 15-day limit. 60:40 wage-material ratio.",
    "PM-KISAN (2019): Rs 6,000/year in 3 instalments. All farmer families. DBT to bank accounts.",
    "Mudra (PMMY, 2015): Shishu (≤Rs 50K), Kishore (50K-5L), Tarun (5L-10L). Collateral-free.",
    "Jan Dhan (2014): Zero-balance, RuPay card, Rs 1L accident cover, Rs 30K life cover. 51+ crore accounts.",
    "Ayushman Bharat PM-JAY (2018): Rs 5L/family/year health cover. ~55 crore beneficiaries. Cashless.",
    "Ujjwala (2016): Free LPG connections to BPL women. 9+ crore connections (Phase 1+2).",
    "Sukanya Samriddhi: Girl child savings. ~8.2% interest. EEE tax status.",
    "PMFBY (2016): Crop insurance — 2% kharif, 1.5% rabi, 5% commercial.",
    "Jal Jeevan Mission (2019): Piped water (55 lpcd) to every rural household.",
    "Start-Up India (2016): Tax holiday, Fund of Funds, self-certification. 1 lakh+ recognised start-ups."
  ],
  "comparisons": [
    {
      "title": "Mudra Loan Categories",
      "headers": [
        "Category",
        "Loan Amount",
        "Target"
      ],
      "rows": [
        [
          "Shishu",
          "Up to Rs 50,000",
          "Start-up/early stage micro-enterprises"
        ],
        [
          "Kishore",
          "Rs 50,001 to Rs 5 lakh",
          "Growing micro-enterprises"
        ],
        [
          "Tarun",
          "Rs 5,00,001 to Rs 10 lakh",
          "Established small enterprises"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Mudra Categories — \"SKT\"",
      "mnemonic": "Shishu (baby = small loan), Kishore (youth = medium), Tarun (adult = large)",
      "explanation": "Mudra loans are categorised by growth stage: Shishu (up to Rs 50K) for start-ups, Kishore (50K-5L) for growing, Tarun (5L-10L) for established. Remember: age/size increases from Shishu to Tarun."
    }
  ]
}
