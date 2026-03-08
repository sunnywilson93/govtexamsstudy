import type { SubjectRevision } from '@/types/subject-notes'

export const hdiMpiRevision: SubjectRevision = {
  topic: 'hdi-mpi',
  bullets: [
    "HDI: Developed by Mahbub ul Haq + Amartya Sen. Published by UNDP since 1990. Three dimensions: Health, Education, Income.",
    "HDI dimensions: Health (life expectancy at birth), Education (mean years + expected years of schooling), Income (GNI per capita PPP$).",
    "HDI = Geometric mean of 3 dimension indices. Categories: Very High (≥0.800), High (0.700-0.799), Medium (0.550-0.699), Low (<0.550).",
    "India's HDI 2024 report: 0.644, rank 134/193. Life expectancy 67.7 years. Mean schooling 6.6 years. GNI $6,951 PPP.",
    "India HDI improved from 0.434 (2000) to 0.644 (2022) — 48% increase. But trails Sri Lanka (0.782), China (0.788), Brazil (0.760).",
    "IHDI: Adjusts for inequality — India's HDI drops ~27% when adjusted for inequality (0.644 → ~0.478).",
    "GDI: Female HDI / Male HDI. India: ~0.849 — women's HDI is 15% lower than men's.",
    "GII: Gender Inequality Index — reproductive health, empowerment, labour market. India rank: 108/170.",
    "MPI (Global): UNDP + OPHI. 10 indicators across health, education, living standards. Poor if deprived in ≥1/3 weighted indicators.",
    "NITI Aayog's National MPI (2021): 25.01% multidimensionally poor (2015-16). Updated 2023: declined to 11.28% (2019-21).",
    "National MPI: 12 indicators, 3 dimensions. Bihar highest MPI (51.91%), Kerala lowest (0.71%).",
    "Poverty committees: Lakdawala (1993, calorie-based), Tendulkar (2009, consumption expenditure), Rangarajan (2014, higher line — not adopted).",
    "World Bank extreme poverty: $2.15/day (2017 PPP). India at $2.15: ~10-12%. At $3.65/day: ~45%. At $6.85/day: ~83%.",
    "HCES 2022-23: First consumption survey since 2011-12. Rural MPCE Rs 3,773, Urban Rs 6,459. Food share declined (Engel's Law confirmed).",
    "SDG 1: End poverty in all forms. India's SDG India Index score for SDG 1: 72 (2023-24) — 'Performer' category.",
    "Capability Approach (Amartya Sen): Development = expanding freedoms/capabilities, not just income. Influenced HDI design."
],
  comparisons: [
    {
        "title": "Poverty Committees Comparison",
        "headers": [
            "Committee",
            "Year",
            "Methodology",
            "Poverty Estimate"
        ],
        "rows": [
            [
                "Lakdawala",
                "1993",
                "Calorie norms: 2,400 kcal (rural), 2,100 (urban)",
                "45.3% (1993-94)"
            ],
            [
                "Tendulkar",
                "2009",
                "Consumption expenditure (Rs 26/day rural, Rs 32/day urban)",
                "21.9% (2011-12)"
            ],
            [
                "Rangarajan",
                "2014",
                "Higher expenditure (Rs 32/day rural, Rs 47/day urban)",
                "29.5% (2011-12)"
            ]
        ]
    },
    {
        "title": "HDI vs MPI",
        "headers": [
            "Feature",
            "HDI",
            "MPI"
        ],
        "rows": [
            [
                "Publisher",
                "UNDP",
                "UNDP + OPHI (Global); NITI Aayog (National)"
            ],
            [
                "Dimensions",
                "3 (health, education, income)",
                "3 (health, education, living standards)"
            ],
            [
                "Indicators",
                "4",
                "10 (global) / 12 (national)"
            ],
            [
                "Measures",
                "Average achievement",
                "Deprivation (who is poor and how)"
            ],
            [
                "India value",
                "0.644 (rank 134)",
                "11.28% headcount (national MPI 2023)"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "HDI Dimensions — \"HEI\"",
        "mnemonic": "Health (life expectancy), Education (schooling years), Income (GNI per capita PPP)",
        "explanation": "Three dimensions of HDI — Health measured by life expectancy at birth, Education by mean + expected years of schooling, Income by GNI per capita in PPP dollars."
    },
    {
        "title": "Poverty Committees — \"LTR\"",
        "mnemonic": "Lakdawala (1993 calories) → Tendulkar (2009 consumption) → Rangarajan (2014 higher line)",
        "explanation": "Three major poverty estimation committees in chronological order — each used a progressively refined methodology."
    }
],
}
