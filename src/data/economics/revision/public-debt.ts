import type { SubjectRevision } from '@/types/subject-notes'

export const publicDebtRevision: SubjectRevision = {
  "topic": "public-debt",
  "bullets": [
    "India's internal debt: ~95% of total public debt (rupee-denominated). External debt: ~5%.",
    "India's central government debt: ~57% of GDP. Total public debt (Centre + States): ~81%.",
    "External debt: ~$663 billion (March 2024). External Debt-to-GDP: ~19%. Debt service ratio: ~6.7%.",
    "Small savings: PPF (~7.1%), NSC (~7.7%), KVP, SCSS (~8.2%), Sukanya Samriddhi (~8.2%).",
    "Domar Condition: If growth rate > interest rate on debt, debt-to-GDP ratio declines.",
    "WMA (Ways and Means Advances): Short-term borrowing from RBI to bridge revenue-expenditure gaps.",
    "Primary Dealers: Licensed by RBI to make market in G-Secs. Underwrite auctions. 21 PDs in India.",
    "RBI Retail Direct (2021): Retail investors can buy G-Secs directly through Gilt Account with RBI.",
    "NSSF (National Small Savings Fund): Collects small savings, lends to Centre and States.",
    "Interest payments consume ~40-45% of revenue receipts — largest single expenditure item."
  ],
  "comparisons": [
    {
      "title": "Key Small Savings Schemes",
      "headers": [
        "Scheme",
        "Tenure",
        "Rate (approx.)",
        "Tax Benefit"
      ],
      "rows": [
        [
          "PPF",
          "15 years",
          "7.1%",
          "EEE (exempt-exempt-exempt)"
        ],
        [
          "NSC",
          "5 years",
          "7.7%",
          "Sec 80C deduction"
        ],
        [
          "SCSS",
          "5 years",
          "8.2%",
          "Sec 80C deduction; interest taxable"
        ],
        [
          "SSY",
          "21 years (girl child)",
          "8.2%",
          "EEE"
        ],
        [
          "KVP",
          "~115 months",
          "7.5%",
          "No tax benefit on investment"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "PPF = EEE — \"Triple E Tax Haven\"",
      "mnemonic": "Exempt at investment (80C), Exempt interest, Exempt maturity",
      "explanation": "PPF enjoys EEE (Exempt-Exempt-Exempt) tax status — investment qualifies for Sec 80C deduction, interest is tax-free, and maturity proceeds are tax-free. Sukanya Samriddhi also has EEE status."
    }
  ]
}
