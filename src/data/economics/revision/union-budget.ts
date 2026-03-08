import type { SubjectRevision } from '@/types/subject-notes'

export const unionBudgetRevision: SubjectRevision = {
  "topic": "union-budget",
  "bullets": [
    "Article 112: Annual Financial Statement (Budget). Article 113: Appropriation Bill. Article 265: No tax without law.",
    "Article 266: Consolidated Fund of India (all revenues). Article 267: Contingency Fund (Rs 500 crore, President).",
    "Three funds: Consolidated Fund (voted by Parliament), Public Account (not voted), Contingency Fund.",
    "First budget: James Wilson (1860). First in independent India: R.K. Shanmukham Chetty (1947).",
    "Railway Budget merged with General Budget from 2017. Budget date moved to February 1 from 2017.",
    "Revenue Deficit = Revenue Expenditure − Revenue Receipts.",
    "Fiscal Deficit = Total Expenditure − Total Receipts (excl. borrowings) = Total Borrowing.",
    "Primary Deficit = Fiscal Deficit − Interest Payments.",
    "Finance Bill (taxation proposals) must be passed within 75 days.",
    "Rajya Sabha can discuss but cannot vote on Demand for Grants.",
    "Vote on Account: Interim approval for expenditure until full budget is passed (usually 2 months).",
    "Economic Survey: Presented day before Budget by Chief Economic Adviser — NOT a budget document."
  ],
  "comparisons": [
    {
      "title": "Revenue Deficit vs Fiscal Deficit vs Primary Deficit",
      "headers": [
        "Deficit",
        "Formula",
        "Significance"
      ],
      "rows": [
        [
          "Revenue Deficit",
          "Rev Exp − Rev Receipts",
          "Govt borrowing for consumption"
        ],
        [
          "Fiscal Deficit",
          "Total Exp − Total Receipts (excl. borrowing)",
          "Total borrowing requirement"
        ],
        [
          "Primary Deficit",
          "Fiscal Deficit − Interest Payments",
          "Borrowing need excl. debt servicing"
        ],
        [
          "Effective Rev Deficit",
          "Rev Deficit − Grants for capital assets",
          "Truer picture (since 2011-12)"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Budget Articles — \"112-113-265-266-267\"",
      "mnemonic": "Art 112 (Budget), 113 (Appropriation), 265 (No tax without law), 266 (CFI), 267 (Contingency)",
      "explanation": "Key constitutional articles for budget: 112 = Annual Financial Statement, 113 = Appropriation Bill, 265 = No tax without authority of law, 266 = Consolidated Fund + Public Account, 267 = Contingency Fund."
    }
  ]
}
