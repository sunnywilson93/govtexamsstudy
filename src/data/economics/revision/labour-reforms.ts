import type { SubjectRevision } from '@/types/subject-notes'

export const labourReformsRevision: SubjectRevision = {
  topic: 'labour-reforms',
  bullets: [
    "29 central labour laws consolidated into 4 Labour Codes: Wages (2019), Industrial Relations (2020), Social Security (2020), OSH (2020).",
    "Code on Wages: Universal minimum wage, floor wage (Rs 178/day), gender-neutral equal remuneration, electronic payment.",
    "Industrial Relations Code: Retrenchment permission threshold raised 100→300 workers. Fixed-term employment. 14-day strike notice.",
    "Social Security Code: Extends social security to gig/platform workers. Social Security Fund. Aggregator contributions.",
    "OSH Code: 12-hour work days allowed (48 hours/week max). Prohibits contract labour in core activities. Inter-state migrant provisions.",
    "Labour Codes implementation deferred — most states yet to frame rules. Target dates shifted repeatedly since 2021.",
    "EPFO: India's largest social security. EPF (12%+12%), EPS (8.33% from employer). Corpus Rs 22+ lakh crore. 30 crore accounts.",
    "ESIC: Medical, sickness, maternity insurance. Workers up to Rs 21,000/month. 14.2 crore insured. 159 hospitals.",
    "PLFS FY24: LFPR 60.1%. Unemployment 3.2%. Female LFPR 41.7% (up from 23.3% FY18). Youth unemployment ~10%.",
    "Employment structure: Self-employed 57.3%, Regular wage 21.7%, Casual 21%. Agriculture 45.8%.",
    "Informal employment: 89% of workers. 50% of GDP. No contract, no social security, no minimum wage protection.",
    "e-Shram portal: 30 crore unorganised workers registered. Rs 2 lakh accidental insurance.",
    "PMKVY 1.0-4.0: Over 1.4 crore youth trained. PMKVY 4.0 focuses on Industry 4.0 skills (AI, IoT, drones, EVs).",
    "MGNREGA: 100 days guaranteed employment. Rs 86,000 crore (FY25). Average wage Rs 267/day. 7 crore job cards.",
    "India needs 8-10 million new jobs annually. Formal job creation (EPFO): 1.5-2 million annually — large gap filled by informal/self-employment.",
    "India's gig workers: 7.7 million (NITI Aayog 2022). Expected 23.5 million by 2029-30. Social Security Code covers them."
],
  comparisons: [
    {
        "title": "4 Labour Codes",
        "headers": [
            "Code",
            "Enacted",
            "Consolidates",
            "Key Reform"
        ],
        "rows": [
            [
                "Code on Wages",
                "2019",
                "4 laws (Minimum Wages, Payment of Wages, Equal Remuneration, Bonus)",
                "Universal minimum wage, floor wage"
            ],
            [
                "Industrial Relations",
                "2020",
                "3 laws (ID Act, Trade Unions, Standing Orders)",
                "Retrenchment threshold 100→300, fixed-term employment"
            ],
            [
                "Social Security",
                "2020",
                "9 laws (EPF, ESI, Maternity, Gratuity etc.)",
                "Gig/platform worker coverage, universal SS"
            ],
            [
                "OSH",
                "2020",
                "13 laws (Factories, Mines, Contract Labour etc.)",
                "12-hour days allowed, migrant worker registration"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "EPFO Contribution — \"12+12\"",
        "mnemonic": "Employee 12% to EPF. Employer 12% split: 3.67% EPF + 8.33% EPS",
        "explanation": "Employee contributes 12% of basic wages to EPF. Employer's 12%: 3.67% to EPF and 8.33% to Employee Pension Scheme."
    }
],
}
