import type { SubjectRevision } from '@/types/subject-notes'

export const fiscalPolicyRevision: SubjectRevision = {
  "topic": "fiscal-policy",
  "bullets": [
    "Fiscal Policy: Use of taxation and expenditure by government to influence the economy.",
    "FRBM Act 2003: Target — fiscal deficit 3% of GDP, eliminate revenue deficit.",
    "N.K. Singh Committee (2017): Debt-GDP ratio 40% (Centre), 20% (States), combined 60%. Fiscal Council proposed.",
    "Escape Clause: Allows 0.5% GDP deviation in case of war, calamity, structural reform, or slowdown.",
    "Fiscal deficit 2024-25: 4.9% of GDP. Target: below 4.5% by 2025-26.",
    "Crowding Out: Heavy government borrowing raises interest rates, discourages private investment.",
    "15th Finance Commission (NK Singh): 41% of divisible pool to states. Cess and surcharges NOT shared.",
    "GST Compensation: States guaranteed 14% annual growth in GST revenue for 5 years (2017-22).",
    "Expansionary fiscal policy: More spending/lower taxes → boost demand. Contractionary: Opposite.",
    "Monetised Deficit: Fiscal deficit financed by RBI printing money. FRBM prohibits this."
  ],
  "comparisons": [
    {
      "title": "Expansionary vs Contractionary Fiscal Policy",
      "headers": [
        "Feature",
        "Expansionary",
        "Contractionary"
      ],
      "rows": [
        [
          "Government spending",
          "Increased",
          "Decreased"
        ],
        [
          "Taxes",
          "Reduced",
          "Increased"
        ],
        [
          "Fiscal deficit",
          "Widens",
          "Narrows"
        ],
        [
          "Used during",
          "Recession/slowdown",
          "Inflation/overheating"
        ],
        [
          "Effect on demand",
          "Boosts aggregate demand",
          "Reduces aggregate demand"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "FRBM Targets — \"3% FD, Zero RD\"",
      "mnemonic": "Fiscal Deficit: 3% of GDP; Revenue Deficit: Zero",
      "explanation": "The original FRBM Act (2003) targeted fiscal deficit of 3% of GDP and elimination of revenue deficit. N.K. Singh Committee recommended a glide path with Debt-GDP ceiling of 60% (Centre 40%, States 20%)."
    }
  ]
}
