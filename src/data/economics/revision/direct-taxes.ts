import type { SubjectRevision } from '@/types/subject-notes'

export const directTaxesRevision: SubjectRevision = {
  topic: 'direct-taxes',
  bullets: [
    "Income Tax Act 1961 — governing statute. CBDT administers. Central tax (Union List Entry 82).",
    "5 heads of income: Salary, House Property, Business/Profession, Capital Gains, Other Sources.",
    "New Tax Regime (default from FY23-24): Lower rates, fewer deductions. Budget 2025-26: Nil up to Rs 4L, then 5/10/15/20/25/30%.",
    "Rebate u/s 87A: Zero tax for income up to Rs 12 lakh under new regime (Budget 2025-26).",
    "Corporate tax: 22% (effective 25.17%) for existing companies. 15% (17.16%) for new manufacturing companies (from Oct 2019).",
    "MAT: 15% of book profits — ensures minimum tax payment. Companies under 22% regime exempt from MAT.",
    "DDT abolished from FY 2020-21 — dividends now taxed in shareholders' hands at slab rates.",
    "Capital gains (Budget 2024-25): STCG on listed equity: 20% (from 15%). LTCG: 12.5% (from 10%). Exemption Rs 1.25 lakh.",
    "Indexation benefit removed for all assets from Budget 2024-25 — rate reduced to uniform 12.5% LTCG.",
    "STT on F&O increased in Budget 2024-25: Options 0.1% (from 0.0625%), Futures 0.02% (from 0.0125%).",
    "Total direct tax collection FY24: Rs 19.58 lakh crore. Direct taxes = 56% of total tax revenue.",
    "ITR filers: 7.28 crore (AY 2024-25) — doubled from 3.36 crore (AY 2014-15). Base broadening achieved.",
    "Agricultural income exempt from income tax under Section 10(1) — colonial-era provision.",
    "Faceless assessment (2020): Scrutiny done remotely, random allocation — reduces corruption and harassment.",
    "Vivad Se Vishwas: Dispute resolution scheme. VSV 2020: 1.5 lakh cases settled. VSV 2.0 launched 2024.",
    "BEPS: India part of OECD/G20 Inclusive Framework. Pillar 2: Global minimum tax 15%. India withdrew equalisation levy (2024)."
],
  comparisons: [
    {
        "title": "Old Tax Regime vs New Tax Regime",
        "headers": [
            "Feature",
            "Old Regime",
            "New Regime (FY 2025-26)"
        ],
        "rows": [
            [
                "Rates",
                "5%, 20%, 30%",
                "5%, 10%, 15%, 20%, 25%, 30%"
            ],
            [
                "Deductions",
                "Section 80C (Rs 1.5L), 80D, HRA, LTA etc.",
                "Very limited (NPS 80CCD(2), standard deduction Rs 75K)"
            ],
            [
                "Rebate limit",
                "Rs 5 lakh",
                "Rs 12 lakh (Budget 2025-26)"
            ],
            [
                "Default",
                "Optional",
                "Default from FY 2023-24"
            ],
            [
                "Best for",
                "High deduction claimers",
                "Most salaried individuals"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "Heads of Income — \"SHBCO\"",
        "mnemonic": "Salary, House property, Business/Profession, Capital gains, Other sources",
        "explanation": "Five heads of income under Income Tax Act 1961 — Section 14."
    },
    {
        "title": "Capital Gains Rates — \"20-12.5\"",
        "mnemonic": "STCG listed equity: 20%. LTCG all assets: 12.5% (no indexation)",
        "explanation": "Post-Budget 2024-25 rates: STCG on listed equity 20%, LTCG uniformly 12.5% without indexation benefit."
    }
],
}
