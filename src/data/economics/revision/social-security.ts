import type { SubjectRevision } from '@/types/subject-notes'

export const socialSecurityRevision: SubjectRevision = {
  "topic": "social-security",
  "bullets": [
    "29 labour laws consolidated into 4 codes: Wages (2019), Industrial Relations (2020), Social Security (2020), OSH (2020).",
    "EPF: 12% employee + 12% employer. Interest ~8.25%. For establishments with 20+ employees.",
    "ESI: Employer 3.25% + Employee 0.75%. For employees earning ≤Rs 21,000/month. 10+ employee establishments.",
    "Gratuity: 15 days' wages per year of service after 5 years. Maximum Rs 20 lakh.",
    "Maternity leave: 26 weeks (first 2 children), 12 weeks (subsequent). 10+ employee establishments.",
    "Informal sector: ~90% of workforce (~450 million). e-Shram portal: 30+ crore registrations.",
    "Gig workers: Code on Social Security 2020 — first recognition. Social Security Fund from platform contributions.",
    "PM-SYM: Pension Rs 3,000/month for unorganised workers after 60. Equal govt co-contribution.",
    "7th Pay Commission: Minimum pay Rs 18,000/month. Fitment factor 2.57. Pay ratio 1:13.85.",
    "Code on Wages: National Floor Wage to be set by Centre. States can set higher."
  ],
  "comparisons": [
    {
      "title": "Four Labour Codes",
      "headers": [
        "Code",
        "Year",
        "Laws Merged",
        "Key Feature"
      ],
      "rows": [
        [
          "Code on Wages",
          "2019",
          "4 laws",
          "National Floor Wage, universal coverage"
        ],
        [
          "Industrial Relations",
          "2020",
          "3 laws",
          "Hire/fire up to 300 workers without approval"
        ],
        [
          "Social Security",
          "2020",
          "9 laws",
          "Covers gig/platform workers for first time"
        ],
        [
          "OSH Code",
          "2020",
          "13 laws",
          "Safety norms, working conditions, inter-state migrants"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "EPF + ESI — \"12+12 and 3.25+0.75\"",
      "mnemonic": "EPF: 12% each (employee + employer). ESI: 3.25% employer + 0.75% employee = 4%",
      "explanation": "EPF: Both employee and employer contribute 12% of basic salary. Of employer's 12%, 8.33% goes to EPS (pension). ESI: Total 4% (employer 3.25% + employee 0.75%). ESI applies to employees earning up to Rs 21,000/month."
    }
  ]
}
