import type { SubjectRevision } from '@/types/subject-notes'

export const sebiRevision: SubjectRevision = {
  topic: 'sebi',
  bullets: [
    "SEBI established April 12, 1988 (non-statutory). Statutory body: SEBI Act 1992. HQ: Mumbai. Chairman (2025): Tuhin Kanta Pandey.",
    "SEBI mandates: Protect investors, promote securities market development, regulate securities market.",
    "SEBI powers: Quasi-legislative (frame regulations), quasi-executive (investigate), quasi-judicial (pass orders, impose penalties).",
    "BSE: Established 1875, Asia's oldest. SENSEX: 30 stocks, base 1978-79. NSE: Established 1992. NIFTY 50: base November 1995.",
    "India's market capitalisation crossed $5 trillion (December 2024) — 4th largest globally.",
    "T+1 settlement introduced January 2023 — India among first major markets. Reduces counterparty risk.",
    "IPO allocation: QIB 50%, NII 15%, Retail 35%. Book building is dominant price discovery mechanism.",
    "Total demat accounts: 17.8 crore (December 2024) — up from 4 crore in 2020 (post-COVID retail surge).",
    "Mutual fund AUM: Rs 68+ lakh crore. SIP monthly inflows: Rs 25,000+ crore (2024). 44 AMCs operational.",
    "SEBI (Prohibition of Insider Trading) Regulations 2015: Insiders cannot trade with UPSI. Penalties up to Rs 25 crore or 3x profit.",
    "FMC merged into SEBI (2015) — SEBI became unified regulator for securities and commodity derivatives.",
    "SEBI LODR 2015: Corporate governance norms — 1/3 independent directors, audit committee, related party transaction disclosures.",
    "Takeover Code 2011: 25%+ acquisition triggers mandatory open offer for 26% of voting capital.",
    "GIFT City IFSC: Regulated by IFSCA (2020). International financial services — banking, insurance, fund management, aircraft leasing.",
    "Finfluencer regulation (2024): SEBI barred registered entities from associating with unregistered financial influencers."
],
  comparisons: [
    {
        "title": "BSE vs NSE",
        "headers": [
            "Feature",
            "BSE",
            "NSE"
        ],
        "rows": [
            [
                "Established",
                "1875",
                "1992"
            ],
            [
                "Index",
                "SENSEX (30 stocks)",
                "NIFTY 50 (50 stocks)"
            ],
            [
                "Listed companies",
                "5,500+",
                "2,200+"
            ],
            [
                "Derivatives volume",
                "Lower",
                "90%+ of derivatives trading"
            ],
            [
                "Base year",
                "1978-79 (100)",
                "Nov 3, 1995 (1000)"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "SEBI Mandates — \"PIR\"",
        "mnemonic": "Protect investors, Improve market, Regulate intermediaries",
        "explanation": "SEBI's three core mandates under the SEBI Act 1992."
    },
    {
        "title": "IPO Allocation — \"50-15-35\"",
        "mnemonic": "QIB 50%, NII 15%, Retail 35%",
        "explanation": "Standard IPO allocation ratio for book-built issues regulated by SEBI."
    }
],
}
