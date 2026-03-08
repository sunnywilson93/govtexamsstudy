import type { SubjectRevision } from '@/types/subject-notes'

export const foodSecurityRevision: SubjectRevision = {
  topic: 'food-security',
  bullets: [
    "NFSA 2013: Rights-based food security. 81.35 crore beneficiaries (75% rural, 50% urban).",
    "NFSA entitlements: PHH — 5 kg/person/month. AAY — 35 kg/household/month. From Jan 2024, all grain free (Rs 0).",
    "FCI: Established 1965. Procures at MSP, maintains buffer stocks, distributes through PDS.",
    "MSP set by government on CACP (Commission for Agricultural Costs & Prices) recommendation. 22 crops covered.",
    "MSP 2024-25: Wheat Rs 2,275/quintal. Paddy Rs 2,300/quintal. Policy: 1.5x A2+FL cost (since 2018).",
    "Buffer stock norms: Jan 27.58 MT, April 21.04 MT, July 41.12 MT, October 30.78 MT.",
    "Targeted PDS (1997) replaced universal PDS. NFSA-based PDS (2013) replaced TPDS.",
    "ONORC (One Nation One Ration Card, 2019): Inter-state portability. 130+ crore transactions. All 36 states/UTs covered.",
    "PMGKAY (2020): Free 5 kg/person/month extra grain during COVID. 33 months. 116.3 MT distributed. Cost Rs 3.91 lakh crore.",
    "ePoS devices at 5.4 lakh FPS (out of 5.5 lakh). Aadhaar-linked ration cards: 95%+. Leakage reduced from 47% to ~10%.",
    "Food subsidy: Rs 2.05 lakh crore (FY24). FCI + state agencies procured 78.2 MT rice + 26.2 MT wheat (FY24).",
    "Rice fortification: Mandatory with iron, folic acid, vitamin B12 for PDS. Target: 100% by 2024.",
    "NFHS-5 nutrition: 35.5% children stunted, 19.3% wasted, 57% women anaemic. Nutritional insecurity persists despite caloric security.",
    "PM POSHAN (Mid-Day Meal): 11.8 crore children in 11.2 lakh schools. 450 kcal (primary), 700 kcal (upper primary).",
    "Shanta Kumar Committee (2015): Recommended capping NFSA at 40%, cash transfers, FCI restructuring. Not implemented."
],
  comparisons: [
    {
        "title": "MSP Cost Concepts",
        "headers": [
            "Concept",
            "Full Form",
            "Includes"
        ],
        "rows": [
            [
                "A2",
                "Actual paid-out costs",
                "Seeds, fertilisers, hired labour, fuel, irrigation, rent paid"
            ],
            [
                "A2+FL",
                "A2 + Family Labour",
                "A2 + imputed value of family members' labour"
            ],
            [
                "C2",
                "Comprehensive cost",
                "A2+FL + imputed rent on owned land + interest on owned capital"
            ]
        ]
    },
    {
        "title": "PDS Evolution",
        "headers": [
            "Phase",
            "Period",
            "Feature"
        ],
        "rows": [
            [
                "Universal PDS",
                "1947-1997",
                "All households, no targeting, high leakage"
            ],
            [
                "Targeted PDS",
                "1997-2013",
                "BPL/APL categories, exclusion/inclusion errors"
            ],
            [
                "NFSA-based",
                "2013-present",
                "Rights-based, PHH/AAY categories, Aadhaar-linked"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "NFSA Quantities — \"5-35\"",
        "mnemonic": "PHH: 5 kg per person per month. AAY: 35 kg per household per month",
        "explanation": "Two entitlement levels under NFSA — Priority Household (5 kg/person) and Antyodaya Anna Yojana (35 kg/household)."
    },
    {
        "title": "MSP Formula — \"1.5x A2+FL\"",
        "mnemonic": "MSP = at least 1.5 times A2+FL cost",
        "explanation": "Government policy since 2018: MSP set at minimum 150% of A2+FL (actual paid-out costs + imputed family labour value)."
    }
],
}
