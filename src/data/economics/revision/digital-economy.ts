import type { SubjectRevision } from '@/types/subject-notes'

export const digitalEconomyRevision: SubjectRevision = {
  "topic": "digital-economy",
  "bullets": [
    "UPI: Real-time, 24/7, interbank transfers via mobile. By NPCI. Zero cost. 13+ billion txns/month (2024).",
    "India Stack: Aadhaar (identity) + UPI/AEPS (payments) + DigiLocker (data) + Account Aggregator.",
    "e-Rupee (CBDC): Digital form of legal tender issued by RBI. Pilot since Nov 2022. Retail + Wholesale.",
    "Cryptocurrency: 30% flat tax on VDA income + 1% TDS on transfers (Budget 2022). Not legal tender.",
    "Digital India (2015): 3 visions — digital infrastructure, governance on demand, digital empowerment.",
    "Aadhaar: 12-digit unique ID by UIDAI. 1.38+ billion enrolments. Biometric + demographic.",
    "India = 46% of global real-time digital payments. Total digital txns: 16,400+ crore (2023-24).",
    "NEFT: Batch settlement. RTGS: Real-time (≥Rs 2 lakh). IMPS: 24/7 instant. NACH: Recurring payments.",
    "ONDC (Open Network for Digital Commerce): Decentralised e-commerce, unbundles buyer/seller/logistics.",
    "Digital Personal Data Protection Act 2023: Consent-based processing, Data Protection Board, penalties up to Rs 250 crore."
  ],
  "comparisons": [
    {
      "title": "NEFT vs RTGS vs IMPS vs UPI",
      "headers": [
        "Feature",
        "NEFT",
        "RTGS",
        "IMPS",
        "UPI"
      ],
      "rows": [
        [
          "Settlement",
          "Half-hourly batches",
          "Real-time gross",
          "Immediate",
          "Immediate"
        ],
        [
          "Minimum",
          "No minimum",
          "Rs 2 lakh",
          "Re 1",
          "Re 1"
        ],
        [
          "Availability",
          "24/7",
          "24/7",
          "24/7",
          "24/7"
        ],
        [
          "Channel",
          "Bank",
          "Bank",
          "Bank/app",
          "Mobile app"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "India Stack Layers — \"IPD\"",
      "mnemonic": "Identity (Aadhaar), Payments (UPI), Data (DigiLocker/AA)",
      "explanation": "India's Digital Public Infrastructure has three layers: Identity layer (Aadhaar — 1.38B enrolments), Payment layer (UPI — 13B+ monthly txns), Data layer (DigiLocker, Account Aggregator). This \"India Stack\" was endorsed by G20 for global adoption."
    }
  ]
}
