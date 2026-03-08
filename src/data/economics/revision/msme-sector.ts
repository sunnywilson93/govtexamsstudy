import type { SubjectRevision } from '@/types/subject-notes'

export const msmeSectorRevision: SubjectRevision = {
  topic: 'msme-sector',
  bullets: [
    "MSME classification (revised 2020): Both investment AND turnover criteria. No manufacturing-services distinction.",
    "Micro: Investment ≤ Rs 1 crore AND Turnover ≤ Rs 5 crore. Small: ≤ Rs 10 crore AND ≤ Rs 50 crore. Medium: ≤ Rs 50 crore AND ≤ Rs 250 crore.",
    "Udyam Registration: Aadhaar-based, free, paperless. 4.67 crore registrations (Dec 2024). Micro: 96% of registered MSMEs.",
    "MSME sector: 30% of GDP. 48% of exports. 11.1 crore jobs. 6.3 crore estimated total MSMEs.",
    "Credit gap: Demand Rs 69.3 lakh crore. Formal supply Rs 27 lakh crore. Gap Rs 42 lakh crore.",
    "PMMY (MUDRA): Rs 27.75 lakh crore cumulative through 44.46 crore loans. Women: 68%. Average ticket: Rs 62,000.",
    "CGTMSE: Collateral-free guarantee up to Rs 5 crore. GoI + SIDBI trust. 80+ lakh guarantees approved.",
    "ECLGS (COVID): 20% additional credit. Rs 5 lakh crore guarantee cover. Rs 3.48 lakh crore disbursed. Prevented mass MSME bankruptcy.",
    "GeM: Government procurement platform. GMV Rs 4.5+ lakh crore. 70+ lakh sellers (57% MSMEs). 25% procurement from MSMEs mandatory.",
    "TReDS: Trade Receivables Discounting System. Rs 1.5+ lakh crore factored. RXIL, M1xchange, Invoicemart.",
    "MSME Samadhaan: Delayed payment monitoring portal. Section 15-23 MSMED Act: Payment within 45 days mandatory.",
    "PM Vishwakarma (2023): 18 traditional trades. Training, toolkit (Rs 15K), credit (Rs 1L+2L at 5%). Target: 30 lakh artisans.",
    "ZED (Zero Defect Zero Effect): Quality certification for MSMEs. 32,000+ certified. Preference in government procurement.",
    "ODOP (One District One Product): 1,233 products from 761 districts. Marketing and export promotion support.",
    "MSME employment intensity: 120 workers per Rs 1 crore investment vs ~5 for large enterprises."
],
  comparisons: [
    {
        "title": "MSME Classification (2020)",
        "headers": [
            "Category",
            "Investment",
            "Turnover"
        ],
        "rows": [
            [
                "Micro",
                "≤ Rs 1 crore",
                "≤ Rs 5 crore"
            ],
            [
                "Small",
                "≤ Rs 10 crore",
                "≤ Rs 50 crore"
            ],
            [
                "Medium",
                "≤ Rs 50 crore",
                "≤ Rs 250 crore"
            ]
        ]
    },
    {
        "title": "MUDRA Loan Categories",
        "headers": [
            "Category",
            "Loan Limit",
            "Share of Loans"
        ],
        "rows": [
            [
                "Shishu",
                "Up to Rs 50,000",
                "64% by number"
            ],
            [
                "Kishore",
                "Rs 50,000 – Rs 5 lakh",
                "28%"
            ],
            [
                "Tarun",
                "Rs 5 lakh – Rs 10 lakh",
                "8%"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "MSME Limits — \"1-5, 10-50, 50-250\"",
        "mnemonic": "Micro: 1cr/5cr. Small: 10cr/50cr. Medium: 50cr/250cr (Investment/Turnover)",
        "explanation": "MSME classification uses dual criteria — both investment and turnover thresholds must be met."
    }
],
}
