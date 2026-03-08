import type { SubjectRevision } from '@/types/subject-notes'

export const censusDemographicsRevision: SubjectRevision = {
  "topic": "census-demographics",
  "bullets": [
    "First synchronous census: 1881 under W.W. Plowden; 2011 was the 15th census.",
    "Census conducted by ORGI (Office of Registrar General) under Ministry of Home Affairs; Census Act 1948.",
    "India's population (Census 2011): 1,210,854,977 (623.7M male, 587.1M female).",
    "India became world's most populous country in 2024 (~1.44 billion), surpassing China.",
    "Decadal growth rate: 21.54% (1991-2001) → 17.72% (2001-2011) — declining.",
    "TFR dropped to 2.0 (NFHS-5, 2019-21) — at replacement level.",
    "Sex ratio (2011): 943 females/1000 males; child sex ratio (0-6): 914 — concerning.",
    "Best sex ratio: Kerala (1,084); worst: Haryana (879). Delhi: 868.",
    "Literacy (2011): 74.04% overall (male 82.14%, female 65.46%); best: Kerala (93.91%); worst: Bihar (63.82%).",
    "Most populous state: UP (~200M); least: Sikkim (6.1 lakh).",
    "Population density (2011): India average 382/sq km; highest: Delhi (11,320); lowest: Arunachal Pradesh (17).",
    "Urban population: 31.2% (2011); estimated ~36% by 2026.",
    "Demographic Dividend: working-age (15-64) ~68% of population; window closes ~2055-60.",
    "India's median age: ~28.4 years (2024) — one of youngest among major economies.",
    "SRS (Sample Registration System) provides annual vital statistics between censuses.",
    "Census 2021 postponed due to COVID-19; status uncertain."
  ],
  "comparisons": [
    {
      "title": "Census 2011 Key Statistics",
      "headers": [
        "Indicator",
        "National Average",
        "Best State",
        "Worst State"
      ],
      "rows": [
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
          "Density",
          "382/sq km",
          "Delhi (11,320)",
          "Arunachal (17)"
        ],
        [
          "Population",
          "1.21 billion",
          "UP (highest)",
          "Sikkim (lowest)"
        ]
      ]
    },
    {
      "title": "Demographic Transition in India",
      "headers": [
        "Stage",
        "Period",
        "Characteristics"
      ],
      "rows": [
        [
          "Stage 1",
          "Pre-1920s",
          "High birth, high death, stable"
        ],
        [
          "Stage 2",
          "1920s-1970s",
          "Death rate falls, rapid growth"
        ],
        [
          "Stage 3",
          "1980s-present",
          "Birth rate falling, growth decelerating"
        ],
        [
          "Stage 4",
          "Future (Kerala, TN approaching)",
          "Both rates low, stable/declining"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Census 2011 Key Numbers",
      "mnemonic": "121-943-74 — Population 1.21B, Sex Ratio 943, Literacy 74%",
      "explanation": "The three most commonly asked Census 2011 statistics."
    },
    {
      "title": "Sex Ratio Best/Worst",
      "mnemonic": "Kerala Loves (1,084), Haryana Hates (879)",
      "explanation": "Kerala has the best sex ratio; Haryana has the worst among major states."
    }
  ]
}
