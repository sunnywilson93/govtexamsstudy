import type { SubjectRevision } from '@/types/subject-notes'

export const demographicDividendRevision: SubjectRevision = {
  "topic": "demographic-dividend",
  "bullets": [
    "Demographic Dividend: Working-age (15-64) > dependent population → growth potential.",
    "India surpassed China as most populous country (April 2023). ~1.44 billion.",
    "India's working-age: ~68%. Dependency ratio: ~44 (declining). Dividend window: ~2005-2060.",
    "TFR: 2.0 (NFHS-5, 2019-21) — below replacement level (2.1) for first time.",
    "Census 2011: 1.21 billion, literacy 73%, sex ratio 943, urbanisation 31.16%. Census 2021 postponed.",
    "Public spending on education: ~3% GDP. NEP 2020 targets 6%.",
    "Only 5% of India's workforce has formal vocational training (vs 52% in USA).",
    "India's remittances: $125 billion (2023) — highest in the world.",
    "HDI 0.644. IMR 28/1000. MMR 97/100,000. Life expectancy 70.19 years.",
    "India is 3rd largest producer of pharma by volume — 'Pharmacy of the world' for generics."
  ],
  "comparisons": [
    {
      "title": "India's Demographic Dividend vs China",
      "headers": [
        "Feature",
        "India",
        "China"
      ],
      "rows": [
        [
          "Population (2024)",
          "~1.44 billion (1st)",
          "~1.42 billion (2nd)"
        ],
        [
          "Median age",
          "~28 years",
          "~39 years"
        ],
        [
          "Working-age trend",
          "Expanding until ~2055",
          "Already declining"
        ],
        [
          "TFR",
          "2.0",
          "1.0 (well below replacement)"
        ],
        [
          "Dividend window",
          "2005-2060",
          "Closing"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "NFHS-5 Key Data — \"TFR 2, SR 1020, IMR 35\"",
      "mnemonic": "TFR: 2.0. Sex Ratio at Birth: 929. Overall Sex Ratio: 1020 (females per 1000 males)",
      "explanation": "NFHS-5 (2019-21) key findings: TFR = 2.0 (below replacement for first time). Sex ratio at birth: 929 (improving). For the first time, overall sex ratio favours females (1020 per 1000 males) due to higher female life expectancy."
    }
  ]
}
