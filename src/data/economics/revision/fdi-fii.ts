import type { SubjectRevision } from '@/types/subject-notes'

export const fdiFiiRevision: SubjectRevision = {
  "topic": "fdi-fii",
  "bullets": [
    "FDI: Long-term, management control (10%+ equity), stable. FPI: Short-term, financial (stocks/bonds), volatile 'hot money'.",
    "Two FDI routes: Automatic (no approval needed) and Government (ministry approval needed).",
    "Press Note 3 (2020): FDI from countries sharing land border needs government approval (targets China).",
    "100% FDI (auto): IT, e-commerce marketplace, food processing, single-brand retail.",
    "74% FDI (auto): Defence (up to 74%), private banking.",
    "49% FDI: Insurance (raised to 74% in 2021), pension, stock exchanges.",
    "Prohibited: Lottery, gambling, chit funds, tobacco, atomic energy, real estate business.",
    "Top FDI sources: Singapore, Mauritius, USA, Netherlands, Japan.",
    "ECBs: Commercial loans from abroad. Min maturity 3 years. Exchange rate risk on borrower.",
    "PLI Scheme: Production Linked Incentives across 14 sectors. Total outlay Rs 1.97 lakh crore."
  ],
  "comparisons": [
    {
      "title": "FDI vs FPI",
      "headers": [
        "Feature",
        "FDI",
        "FPI/FII"
      ],
      "rows": [
        [
          "Nature",
          "Long-term, productive",
          "Short-term, financial"
        ],
        [
          "Control",
          "Management control (10%+)",
          "No management control"
        ],
        [
          "Stability",
          "Stable, not easily reversed",
          "Volatile, easily reversed"
        ],
        [
          "Brings",
          "Technology, jobs, expertise",
          "Portfolio capital"
        ],
        [
          "Regulator",
          "DPIIT/RBI",
          "SEBI"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "FDI Routes — \"Auto or Govt\"",
      "mnemonic": "Automatic Route: Most sectors. Government Route: Sensitive sectors (defence 74%+, media, multi-brand retail)",
      "explanation": "Most FDI is automatic (notify RBI). Government route needed for sensitive sectors. Press Note 3 (2020): All FDI from land-border countries (especially China) requires government approval."
    }
  ]
}
