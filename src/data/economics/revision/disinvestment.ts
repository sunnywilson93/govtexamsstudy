import type { SubjectRevision } from '@/types/subject-notes'

export const disinvestmentRevision: SubjectRevision = {
  topic: 'disinvestment',
  bullets: [
    "Disinvestment: Government selling stake in PSU. Minority (retains control) vs Strategic (51%+ with management transfer = privatisation).",
    "First disinvestment: 1991 — minority stakes in 31 PSUs raising Rs 3,038 crore.",
    "DIPAM (Dept of Investment & Public Asset Management): Under MoF. Manages disinvestment. Established 2016.",
    "Air India privatisation (2021): Sold to Tata Group for Rs 18,000 crore enterprise value. Returned to Tata after 69 years.",
    "LIC IPO (2022): India's largest IPO at Rs 21,008 crore. Government sold 3.5% stake.",
    "New PSE Policy (2021): Government in strategic sectors only (defence, atomic energy, transport, banking, power, minerals). Privatise rest.",
    "Maharatna CPSEs (12): BHEL, BPCL, Coal India, GAIL, HPCL, IOC, NTPC, ONGC, Power Grid, SAIL + Oil India, NHPC, REC, PFC.",
    "Total CPSEs: 389 (260 operational). CPSE turnover: Rs 35+ lakh crore. Profit: Rs 3.2 lakh crore (FY24).",
    "OFS: Offer for Sale through stock exchange. ETF route: CPSE ETF and Bharat 22 ETF raised Rs 74,000+ crore.",
    "NMP (National Monetisation Pipeline 2021): Rs 6 lakh crore target FY22-25. InvITs, TOT, airport leasing, warehousing.",
    "NITI Aayog identifies PSUs for strategic sale → CGD recommends → AM (GoI Ministers) approves → Transaction advisor manages.",
    "IDBI Bank strategic sale: In process. Government + LIC selling 60.72% stake. RBI approved 'fit and proper' assessment.",
    "Cumulative disinvestment receipts (1991-2024): Over Rs 5 lakh crore.",
    "Hindustan Zinc controversy: Sold for Rs 445 crore (2002). Market cap now Rs 1.5+ lakh crore — undervaluation criticism.",
    "Strategic sectors: Atomic energy, space, defence, transport, telecom, power, petroleum, coal, minerals, banking, insurance, financial services."
],
  comparisons: [
    {
        "title": "Minority Disinvestment vs Strategic Disinvestment",
        "headers": [
            "Feature",
            "Minority Disinvestment",
            "Strategic Disinvestment"
        ],
        "rows": [
            [
                "Stake sold",
                "5-10% (small)",
                "51%+ (majority)"
            ],
            [
                "Management control",
                "Retained by government",
                "Transferred to private buyer"
            ],
            [
                "Purpose",
                "Revenue generation (fiscal deficit)",
                "Efficiency, governance improvement"
            ],
            [
                "Example",
                "ONGC OFS, Coal India buyback",
                "Air India to Tata, VSNL to Tata"
            ],
            [
                "Government role post-sale",
                "Remains majority owner",
                "Exits or becomes minority"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "Maharatna Status — \"BINGO CHPS\"",
        "mnemonic": "BHEL, IOC, NTPC, GAIL, ONGC, Coal India, HPCL, Power Grid, SAIL + BPCL, Oil India, NHPC, REC, PFC",
        "explanation": "12 Maharatna CPSEs (as of 2024) — most autonomous, can invest up to Rs 5,000 crore without government approval."
    }
],
}
