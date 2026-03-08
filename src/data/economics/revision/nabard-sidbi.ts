import type { SubjectRevision } from '@/types/subject-notes'

export const nabardSidbiRevision: SubjectRevision = {
  topic: 'nabard-sidbi',
  bullets: [
    "NABARD: Est. July 12, 1982 (CRAFICARD/Sivaraman Committee). Apex DFI for agriculture and rural development. HQ: Mumbai.",
    "NABARD replaced ARDC and took over RBI's agricultural credit functions. GoI holds 100% (RBI share transferred 2019).",
    "NABARD functions: Refinance (Rs 3.11 lakh crore FY24), Supervision (cooperative banks, RRBs), Development (SHG-BLP, FPOs).",
    "RIDF (Rural Infrastructure Development Fund): Banks' PSL shortfall deposited with NABARD. Cumulative: Rs 4.46 lakh crore, 8.4 lakh projects.",
    "SHG-Bank Linkage Programme: World's largest microfinance. 119.4 lakh SHGs, Rs 2.03 lakh crore savings, Rs 2.05 lakh crore loans (FY24).",
    "SIDBI: Est. April 2, 1990 (SIDBI Act 1989). Principal DFI for MSMEs. HQ: Lucknow.",
    "SIDBI manages Fund of Funds for Startups (Rs 10,000 crore) — invested in 129 AIFs supporting 975+ startups.",
    "MUDRA: Subsidiary of SIDBI. Three categories: Shishu (up to Rs 50K), Kishore (Rs 50K-5L), Tarun (Rs 5-10L).",
    "CGTMSE: GoI + SIDBI trust. Collateral-free credit guarantee up to Rs 5 crore for MSMEs. 80+ lakh guarantees approved.",
    "NaBFID: Est. 2021 (NaBFID Act). New DFI for long-term infrastructure financing. Authorised capital: Rs 1 lakh crore.",
    "EXIM Bank: Est. 1982. Lines of Credit to 68 countries ($35.5 billion). Promotes Indian exports through tied aid.",
    "NHB (National Housing Bank): Est. 1988. Apex housing finance regulator. Owned by RBI. Implements PMAY-CLSS. RESIDEX price index.",
    "IDBI converted from DFI to bank (2004). ICICI converted 2002. NaBFID revives DFI concept with sovereign backing.",
    "PSL targets: 40% of ANBC for domestic banks. Agriculture 18%, Micro 7.5%, Weaker sections 12%.",
    "PSLCs (Priority Sector Lending Certificates): Tradable certificates — banks meet PSL targets via market mechanism. Rs 10 lakh crore+ annual trading."
],
  comparisons: [
    {
        "title": "NABARD vs SIDBI",
        "headers": [
            "Feature",
            "NABARD",
            "SIDBI"
        ],
        "rows": [
            [
                "Established",
                "1982",
                "1990"
            ],
            [
                "Focus",
                "Agriculture & rural development",
                "MSMEs"
            ],
            [
                "HQ",
                "Mumbai",
                "Lucknow"
            ],
            [
                "Key programme",
                "SHG-Bank Linkage, RIDF",
                "MUDRA, CGTMSE, Fund of Funds"
            ],
            [
                "Ownership",
                "100% GoI",
                "GoI majority + others"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "MUDRA Categories — \"SKT\"",
        "mnemonic": "Shishu (up to Rs 50K), Kishore (Rs 50K-5L), Tarun (Rs 5L-10L)",
        "explanation": "Three MUDRA loan categories in ascending order of size — named after Sanskrit words for infant, youth, and young adult."
    },
    {
        "title": "DFI Timeline — \"IFCI-ICICI-IDBI-NABARD-SIDBI-NaBFID\"",
        "mnemonic": "1948-1955-1964-1982-1990-2021",
        "explanation": "India's DFI evolution: IFCI (1948), ICICI (1955), IDBI (1964), NABARD (1982), SIDBI (1990), NaBFID (2021)."
    }
],
}
