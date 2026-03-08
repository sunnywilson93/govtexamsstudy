import type { SubjectRevision } from '@/types/subject-notes'

export const populationRevision: SubjectRevision = {
  "topic": "population",
  "bullets": [
    "India became the world's most populous country in 2023, surpassing China (UN estimate).",
    "Census 2011 population: 1.21 billion; decadal growth rate 17.7% (2001-2011).",
    "Population density (2011): 382 persons/sq km; Bihar highest (1,106), Arunachal Pradesh lowest (17).",
    "Sex ratio (2011): 943 females per 1,000 males; Kerala highest (1,084), Haryana lowest (879).",
    "Child sex ratio (0-6): 914 — alarming; worst in Haryana (834) and Punjab (846).",
    "Literacy (2011): 74.04%; Kerala highest (93.91%), Bihar lowest (63.82%).",
    "UP is the most populous state (199.8 million); Sikkim is least populous (6.1 lakh).",
    "1921 is called the \"Great Divide\" — population consistently grew after this year.",
    "India's Total Fertility Rate (TFR) has dropped to 2.0 (NFHS-5) — at replacement level.",
    "About 65% of India's population is below 35 years — demographic dividend opportunity.",
    "India's first Census was in 1872 (non-synchronous); first synchronous Census in 1881.",
    "National Population Policy 2000 aims for population stabilization by 2045."
  ],
  "comparisons": [
    {
      "title": "Census 2011 Key Statistics",
      "headers": [
        "Indicator",
        "Value",
        "Highest State",
        "Lowest State"
      ],
      "rows": [
        [
          "Total Population",
          "1.21 billion",
          "UP (199.8M)",
          "Sikkim (6.1L)"
        ],
        [
          "Density",
          "382/sq km",
          "Bihar (1,106)",
          "Arunachal (17)"
        ],
        [
          "Sex Ratio",
          "943",
          "Kerala (1,084)",
          "Haryana (879)"
        ],
        [
          "Literacy",
          "74.04%",
          "Kerala (93.91%)",
          "Bihar (63.82%)"
        ],
        [
          "Decadal Growth",
          "17.7%",
          "Meghalaya (27.9%)",
          "Nagaland (-0.6%)"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Census 2011 Extremes",
      "mnemonic": "Kerala leads in Sex Ratio + Literacy; Bihar lowest in both",
      "explanation": "Kerala has highest sex ratio (1,084) AND literacy (93.91%). Bihar has highest density (1,106/sq km) and lowest literacy (63.82%)."
    }
  ]
}
