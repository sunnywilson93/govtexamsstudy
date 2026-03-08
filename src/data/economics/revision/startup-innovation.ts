import type { SubjectRevision } from '@/types/subject-notes'

export const startupInnovationRevision: SubjectRevision = {
  topic: 'startup-innovation',
  bullets: [
    "Startup India launched January 16, 2016. DPIIT is nodal department. 1.46 lakh DPIIT-recognised startups (Dec 2024).",
    "Startup definition: Entity ≤10 years old, turnover ≤Rs 100 crore, working on innovation/new products/services.",
    "Tax benefit: 100% income tax exemption on profits for 3 years out of 10 (Section 80-IAC). Angel tax abolished (Budget 2024-25).",
    "Fund of Funds: Rs 10,000 crore via SIDBI. Invested in 129 AIFs. Rs 20,044 crore deployed in 975+ startups.",
    "India has 114 unicorns (Dec 2024) — 3rd globally (US, China, India). Top: Flipkart ($37.6B), PhonePe ($12B).",
    "Sector distribution: FinTech 22 unicorns, E-commerce 18, SaaS 15, EdTech 7, HealthTech 6, Logistics 5.",
    "Geographic: Bangalore 39%, Delhi-NCR 27%, Mumbai 18%. 50% of startups from beyond top 5 cities.",
    "AIM (Atal Innovation Mission, NITI Aayog): ATLs (10,000 in schools), AICs (68 incubation centres), ANICs.",
    "Global Innovation Index 2023: India rank 40 (up from 81 in 2015). Highest among lower middle-income countries.",
    "India's R&D: 0.64% of GDP (vs China 2.4%, US 3.4%). Need to increase to 2%. Researchers: 255 per million.",
    "Patent grants: 30,490 (FY23) — 7x increase from 4,227 (FY14). Startup fast-track: examination within 6 months.",
    "GI registrations: 500+. Darjeeling Tea, Basmati Rice, Tirupati Laddu, Kanchipuram Silk.",
    "Space startups: Agnikul Cosmos, Skyroot Aerospace (launched Vikram-S), Pixxel. IN-SPACe authorises private space.",
    "Semiconductor Mission: Rs 76,000 crore. Micron (Gujarat), Tata (Assam + Gujarat), CG Power (Sanand).",
    "National AI Mission: Rs 10,372 crore. India's first AI unicorn: Krutrim (Bhavish Aggarwal)."
],
  comparisons: [
    {
        "title": "Startup Financing Stages",
        "headers": [
            "Stage",
            "Investment Size",
            "Investors",
            "Examples"
        ],
        "rows": [
            [
                "Angel/Seed",
                "Rs 5-50 lakh",
                "Individual HNIs, angel groups",
                "Indian Angel Network, Mumbai Angels"
            ],
            [
                "Series A/B",
                "Rs 50 lakh-50 crore",
                "VC funds",
                "Peak XV (Sequoia), Accel, Blume, Elevation"
            ],
            [
                "Growth/PE",
                "Rs 50 crore+",
                "Growth funds, PE",
                "SoftBank, Tiger Global, Prosus"
            ],
            [
                "IPO",
                "Rs 100 crore+",
                "Public market",
                "Zomato, Nykaa, Ola Electric"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "AIM Components — \"ATL-AIC-ANIC\"",
        "mnemonic": "ATL (Tinkering Labs in schools), AIC (Incubation Centres), ANIC (New India Challenges)",
        "explanation": "Three key components of Atal Innovation Mission — Labs for school students, Incubation for startups, Challenges for product innovation."
    }
],
}
