import type { SubjectRevision } from '@/types/subject-notes'

export const pppModelRevision: SubjectRevision = {
  topic: 'ppp-model',
  bullets: [
    "PPP: Long-term contract between government and private entity for public infrastructure/services. Private bears risk and management.",
    "BOT (Build-Operate-Transfer): Private builds, operates for concession period, transfers back. BOT-Toll (revenue risk with private) vs BOT-Annuity (with government).",
    "HAM (Hybrid Annuity Model, 2015): Government pays 40% during construction + annuity over 15 years for remaining 60%. Dominant highway PPP model.",
    "TOT (Toll-Operate-Transfer): Government auctions toll rights on built highways for 30 years. 3 bundles raised Rs 36,000+ crore.",
    "VGF (Viability Gap Funding): Grant up to 30% of TPC from Centre + 30% from state/ministry = up to 60%. Makes unviable PPPs bankable.",
    "NIP (National Infrastructure Pipeline 2020): Rs 111 lakh crore investment target. PPP expected for 21% of projects.",
    "Airport PPPs: Delhi (GMR), Bangalore (BIAL), Hyderabad (GMR). 6 AAI airports leased to Adani (2019).",
    "NHAI: Dominant PPP implementing agency. Built 10,457 km in FY24 (28.6 km/day record). Total NH: 1,46,145 km.",
    "Bharatmala Pariyojana (2017): Rs 5.35 lakh crore, 34,800 km. Mix of EPC, HAM, BOT.",
    "Major Port Authorities Act 2021: Landlord model — port authority manages land, private operators build+operate terminals.",
    "InvITs: SEBI-regulated trusts owning infrastructure assets. IndiGrid, IRB InvIT, PowerGrid InvIT.",
    "LARR Act 2013: Consent 80% (private), 70% (PPP). Compensation 2x urban/4x rural market value. SIA mandatory.",
    "Kelkar Committee (2015): Recommended independent PPP institution (3PI) for renegotiation. Standardised concession agreements.",
    "Smart Cities Mission: 100 cities, Rs 2.05 lakh crore. PPP for ICCC, waste-to-energy, smart water, e-buses.",
    "Key challenge: Land acquisition, contract renegotiation (moral hazard), financing mismatch (banks' 3-5 year deposits vs 15-25 year infra loans)."
],
  comparisons: [
    {
        "title": "BOT-Toll vs HAM vs EPC",
        "headers": [
            "Feature",
            "BOT-Toll",
            "HAM",
            "EPC"
        ],
        "rows": [
            [
                "Revenue risk",
                "Private sector",
                "Shared (annuity-based)",
                "Government (100%)"
            ],
            [
                "Construction funding",
                "100% private",
                "40% govt + 60% private",
                "100% government"
            ],
            [
                "Concession period",
                "20-30 years",
                "15 years annuity",
                "No concession (hand over on completion)"
            ],
            [
                "When used",
                "High traffic routes",
                "Medium traffic routes",
                "Low traffic / strategic routes"
            ],
            [
                "Private incentive",
                "High (toll revenue)",
                "Moderate (annuity)",
                "Low (construction only)"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "PPP Models — \"BOT-HAM-TOT\"",
        "mnemonic": "BOT (Build-Operate-Transfer), HAM (Hybrid Annuity), TOT (Toll-Operate-Transfer)",
        "explanation": "Three main highway PPP models — BOT (private builds and tolls), HAM (40-60 cost sharing), TOT (government sells toll rights on built roads)."
    }
],
}
