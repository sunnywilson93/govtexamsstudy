import type { SubjectRevision } from '@/types/subject-notes'

export const microfinanceShgsRevision: SubjectRevision = {
  topic: 'microfinance-shgs',
  bullets: [
    "SHG: Voluntary group of 10-20 people (typically women) who save regularly and lend to members from pooled savings.",
    "SHG-Bank Linkage Programme: Launched by NABARD 1992. 119.4 lakh SHGs linked to banks. Rs 2.03 lakh crore savings (FY24).",
    "Three SHG-BLP models: Model 1 (banks form+finance), Model 2 (NGO forms, bank finances — most common), Model 3 (NGO as intermediary).",
    "DAY-NRLM (2011): GoI flagship SHG programme. 91 lakh SHGs, 10 crore women members. Centre-State 60:40 funding.",
    "NBFC-MFI: RBI-regulated. 75%+ assets as qualifying microfinance loans. Largest: CreditAccess Grameen (Rs 30,000+ crore AUM).",
    "Microfinance sector (Sep 2024): Rs 4.34 lakh crore portfolio, 7.36 crore borrowers. NBFC-MFIs 38%, Banks 32%, SFBs 18%.",
    "AP Microfinance Crisis 2010: Aggressive MFI lending → over-indebtedness, suicides. AP ordinance restricted MFIs. Led to Malegam Committee (2011).",
    "RBI 2022 revised framework: Microfinance = collateral-free loan to household with income ≤ Rs 3 lakh/year. Repayment ≤ 50% of household income.",
    "JLG (Joint Liability Group): 4-10 members, mutual guarantee replaces collateral. NABARD promotes for tenant/landless farmers.",
    "PM SVANidhi (2020): Working capital loans for street vendors. Rs 10K → 20K → 50K ladder. 54.2 lakh loans sanctioned.",
    "SFBs converted from NBFC-MFIs: Bandhan Bank (2015), Equitas, Ujjivan, AU SFB. Must lend 75% ANBC to PSL, 50% in ≤ Rs 25 lakh tickets.",
    "Women SHGs: 88% of all SHGs. Southern states dominate (AP, TN, Kerala, Karnataka = 60%+ of SHGs).",
    "SHG default rate: Below 3% — far lower than commercial lending. Group social pressure ensures repayment.",
    "DAY-NULM: Urban counterpart of NRLM. 9.7 lakh SHGs, 1.07 crore urban poor women. Budget: Rs 1,325 crore (FY25).",
    "Credit bureau coverage: 95% microfinance borrowers have credit bureau records (up from <10% in 2010)."
],
  comparisons: [
    {
        "title": "SHG vs JLG",
        "headers": [
            "Feature",
            "SHG",
            "JLG"
        ],
        "rows": [
            [
                "Group size",
                "10-20",
                "4-10"
            ],
            [
                "Primary focus",
                "Savings first, then credit",
                "Credit access (mutual guarantee)"
            ],
            [
                "Formation",
                "Community-driven, NGO-facilitated",
                "Often MFI/bank promoted"
            ],
            [
                "Interest rate",
                "Group-decided (12-24% annual)",
                "Institutional rate (18-26%)"
            ],
            [
                "Target group",
                "Women from poor households",
                "Tenant farmers, landless labourers"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "MUDRA Categories — \"SKT\"",
        "mnemonic": "Shishu ≤50K, Kishore 50K-5L, Tarun 5L-10L",
        "explanation": "Three MUDRA categories by loan size — Shishu (smallest), Kishore (medium), Tarun (largest, up to Rs 10 lakh)."
    },
    {
        "title": "SHG-BLP Models — \"1-2-3\"",
        "mnemonic": "Model 1: Bank forms+finances. Model 2: NGO forms, Bank finances. Model 3: NGO intermediary",
        "explanation": "Three SHG-Bank Linkage models — Model 2 (NGO forms, bank finances) is the most common."
    }
],
}
