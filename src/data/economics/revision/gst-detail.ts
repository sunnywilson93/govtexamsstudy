import type { SubjectRevision } from '@/types/subject-notes'

export const gstDetailRevision: SubjectRevision = {
  topic: 'gst-detail',
  bullets: [
    "GST launched July 1, 2017. Replaced 17 indirect taxes + 13 cesses. 101st Constitutional Amendment Act 2016.",
    "Article 246A: Concurrent power to Centre and States. Article 269A: IGST on inter-state supply. Article 279A: GST Council.",
    "GST Council: Union FM (Chairman) + State FMs. Centre 1/3 voting, States 2/3. Decisions by 3/4th majority.",
    "Dual GST: CGST (Centre) + SGST (State) on intra-state. IGST on inter-state. UTGST for UTs without legislature.",
    "4 slabs: 5% (essentials), 12% (standard), 18% (most goods/services), 28% (luxury/sin goods + cess).",
    "Exempt: Fresh fruits/vegetables, milk, eggs, unbranded grains, healthcare, education, sanitary napkins.",
    "Outside GST: Alcohol for human consumption (state excise), 5 petroleum products, electricity, real estate (stamp duty).",
    "ITC mechanism: Input tax on purchases offsets output tax on sales — eliminates cascading. CGST offsets CGST, SGST offsets SGST.",
    "Blocked ITC (Section 17(5)): Motor vehicles, food/beverages, club membership, construction of immovable property.",
    "GSTN: IT backbone. 1.46 crore registrants. Returns: GSTR-1 (outward, by 11th) + GSTR-3B (summary+payment, by 20th).",
    "Composition Scheme: Turnover ≤ Rs 1.5 crore. Flat rates: 1% (manufacturers), 5% (restaurants). No ITC. 17 lakh businesses.",
    "E-way Bill: Required for goods movement > Rs 50,000. About 10 crore/month generated.",
    "E-invoicing: Mandatory for turnover > Rs 5 crore. Reduces fake invoicing and improves ITC verification.",
    "Revenue: FY24 Rs 20.18 lakh crore. Highest single month: April 2024 Rs 2.10 lakh crore. Monthly average FY25: Rs 1.82 lakh crore.",
    "GST Compensation Cess: On luxury/sin goods. Original 5-year period ended June 2022. Continues till March 2026 to repay COVID borrowings.",
    "SC ruled (2022): GST Council recommendations are recommendatory, not binding on Parliament/State Legislatures."
],
  comparisons: [
    {
        "title": "CGST vs SGST vs IGST",
        "headers": [
            "Feature",
            "CGST",
            "SGST/UTGST",
            "IGST"
        ],
        "rows": [
            [
                "Levied by",
                "Centre",
                "State/UT",
                "Centre"
            ],
            [
                "On",
                "Intra-state supply",
                "Intra-state supply",
                "Inter-state supply + imports"
            ],
            [
                "Revenue to",
                "Centre",
                "State/UT",
                "Apportioned (CGST→Centre, SGST→consumer state)"
            ],
            [
                "Rate",
                "Half of total GST rate",
                "Half of total GST rate",
                "Full GST rate"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "Items Outside GST — \"PAPER\"",
        "mnemonic": "Petroleum products (5), Alcohol, Property (stamp duty), Electricity, Real estate",
        "explanation": "Key items outside GST framework — each has separate taxation regime (state excise, central excise, stamp duty, electricity duty)."
    },
    {
        "title": "GST Articles — \"246-269-279\"",
        "mnemonic": "246A (concurrent power), 269A (IGST), 279A (GST Council)",
        "explanation": "Three key constitutional articles for GST framework."
    }
],
}
