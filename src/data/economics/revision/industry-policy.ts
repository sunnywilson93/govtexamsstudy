import type { SubjectRevision } from '@/types/subject-notes'

export const industryPolicyRevision: SubjectRevision = {
  "topic": "industry-policy",
  "bullets": [
    "IPR 1948: Mixed economy. IPR 1956: 3 schedules (A-state, B-mixed, C-private). Mahalanobis influence.",
    "New Industrial Policy 1991: De-licensing (retained for 2: defence, atomic energy), de-reservation, FDI liberalisation.",
    "MSME definition (2020): Micro (investment ≤1cr, turnover ≤5cr), Small (≤10cr, ≤50cr), Medium (≤50cr, ≤250cr).",
    "MSMEs: ~30% GDP, ~45% manufacturing, ~48% exports, ~11 crore jobs.",
    "PLI Scheme (2020): 14 sectors, Rs 1.97 lakh crore. 4-6% incentive on incremental sales for 5 years.",
    "Make in India (2014): 25 sectors. Four pillars: New Processes, Infrastructure, Sectors, Mindset.",
    "CCI (Competition Commission): Regulates anti-competitive agreements, abuse of dominant position, mergers.",
    "DMIC (Delhi-Mumbai Industrial Corridor): 1,504 km along Dedicated Freight Corridor. JICA funding.",
    "Udyam Registration: Online MSME registration (Aadhaar-linked). Replaced UAM.",
    "CGTMSE: Collateral-free loans up to Rs 5 crore for MSMEs."
  ],
  "comparisons": [
    {
      "title": "MSME Classification (Revised 2020)",
      "headers": [
        "Category",
        "Investment Limit",
        "Turnover Limit"
      ],
      "rows": [
        [
          "Micro",
          "Up to Rs 1 crore",
          "Up to Rs 5 crore"
        ],
        [
          "Small",
          "Up to Rs 10 crore",
          "Up to Rs 50 crore"
        ],
        [
          "Medium",
          "Up to Rs 50 crore",
          "Up to Rs 250 crore"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "MSME Limits — \"1-5, 10-50, 50-250\"",
      "mnemonic": "Micro: 1 cr investment/5 cr turnover. Small: 10/50. Medium: 50/250.",
      "explanation": "Investment AND turnover criteria (whichever is higher determines category). Both manufacturing and services have same limits (distinction removed in 2020). Udyam Registration is the portal."
    }
  ]
}
