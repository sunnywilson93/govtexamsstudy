import type { SubjectRevision } from '@/types/subject-notes'

export const inclusiveGrowthRevision: SubjectRevision = {
  "topic": "inclusive-growth",
  "bullets": [
    "Inclusive Growth: Growth creating opportunities for all and distributing benefits equitably.",
    "Gini Coefficient: 0 = perfect equality, 1 = perfect inequality. India consumption Gini: ~0.35.",
    "India HDI: 0.644 (2022), rank 132/191 — Medium Human Development.",
    "HDI = Life Expectancy + Mean/Expected Years of Schooling + GNI per capita (PPP).",
    "MPI headcount: 55.1% (2005-06) → 11.28% (2022-23) — one of fastest reductions globally.",
    "17 SDGs (UN 2015, Agenda 2030). NITI Aayog SDG India Index ranks states.",
    "Top SDG performers: Kerala, Tamil Nadu, Himachal Pradesh. Lowest: Bihar, Jharkhand.",
    "Top 10% of Indians own 77% of wealth. Top 1% own 40.5% (Oxfam).",
    "Inter-state disparity: Goa highest per capita GSDP, Bihar lowest.",
    "India per capita income: ~$2,600 (nominal), ~$9,200 (PPP). Target: $5 trillion economy."
  ],
  "comparisons": [
    {
      "title": "HDI vs MPI",
      "headers": [
        "Feature",
        "HDI",
        "MPI"
      ],
      "rows": [
        [
          "Published by",
          "UNDP",
          "UNDP + OPHI / NITI Aayog"
        ],
        [
          "Dimensions",
          "Health, Education, Income",
          "Health, Education, Living Standards"
        ],
        [
          "Indicators",
          "4",
          "12"
        ],
        [
          "Measures",
          "Average achievement",
          "Deprivation (poverty)"
        ],
        [
          "India rank/value",
          "132/191 (0.644)",
          "11.28% headcount (2022-23)"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "SDGs — \"17 Goals, 2030 Deadline\"",
      "mnemonic": "No Poverty, Zero Hunger, Health, Education, Gender, Water, Energy...",
      "explanation": "The first 6 SDGs: 1-No Poverty, 2-Zero Hunger, 3-Good Health, 4-Quality Education, 5-Gender Equality, 6-Clean Water. India is on track for energy and industry goals but lagging on hunger, health, and gender."
    }
  ]
}
