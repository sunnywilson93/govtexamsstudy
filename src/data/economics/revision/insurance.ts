import type { SubjectRevision } from '@/types/subject-notes'

export const insuranceRevision: SubjectRevision = {
  "topic": "insurance",
  "bullets": [
    "LIC established 1956 by nationalising 245 private insurers. GIC established 1972.",
    "IRDAI: Insurance regulator. Established 1999 (IRDA Act). HQ: Hyderabad.",
    "FDI in insurance: 26% (2000) → 49% (2015) → 74% (2021).",
    "PMJJBY: Life cover Rs 2 lakh. Premium Rs 436/year. Age 18-50.",
    "PMSBY: Accident cover Rs 2 lakh (death/total disability), Rs 1 lakh (partial). Premium Rs 20/year. Age 18-70.",
    "PM-JAY (Ayushman Bharat): Rs 5 lakh/family/year health cover. ~55 crore beneficiaries. Cashless.",
    "NPS: Defined contribution pension. Mandatory for central govt employees post-Jan 2004. Regulated by PFRDA.",
    "APY (Atal Pension Yojana): For unorganised sector. Rs 1,000-5,000/month pension after 60. Age 18-40.",
    "PMFBY: Crop insurance — 2% kharif, 1.5% rabi, 5% commercial. Technology-based claims.",
    "Insurance penetration in India: ~4.2% of GDP. Density: ~$92 per capita."
  ],
  "comparisons": [
    {
      "title": "PMJJBY vs PMSBY vs APY",
      "headers": [
        "Feature",
        "PMJJBY",
        "PMSBY",
        "APY"
      ],
      "rows": [
        [
          "Type",
          "Life insurance",
          "Accident insurance",
          "Pension"
        ],
        [
          "Cover",
          "Rs 2 lakh",
          "Rs 2 lakh/1 lakh",
          "Rs 1,000-5,000/month"
        ],
        [
          "Premium",
          "Rs 436/year",
          "Rs 20/year",
          "Rs 42-1,454/month"
        ],
        [
          "Age",
          "18-50 years",
          "18-70 years",
          "18-40 years"
        ],
        [
          "Launched",
          "May 2015",
          "May 2015",
          "May 2015"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Insurance FDI Limits — \"26-49-74\"",
      "mnemonic": "26% (2000), 49% (2015), 74% (2021)",
      "explanation": "FDI in insurance sector was opened at 26% in 2000, raised to 49% in 2015 (IRDA renamed IRDAI), and further to 74% in 2021 (Insurance Amendment Act)."
    }
  ]
}
