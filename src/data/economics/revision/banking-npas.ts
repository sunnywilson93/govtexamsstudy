import type { SubjectRevision } from '@/types/subject-notes'

export const bankingNpasRevision: SubjectRevision = {
  "topic": "banking-npas",
  "bullets": [
    "NPA: Loan where interest/principal overdue for more than 90 days.",
    "Classification: Standard → Sub-Standard (NPA <12 months) → Doubtful (NPA >12 months) → Loss.",
    "SMA: SMA-0 (1-30 days overdue), SMA-1 (31-60 days), SMA-2 (61-90 days).",
    "Gross NPA = total NPAs before provisions. Net NPA = Gross NPA − Provisions.",
    "Gross NPA ratio of SCBs: peaked at 11.2% (2017-18), improved to ~2.8% (2024).",
    "SARFAESI Act 2002: Banks can seize assets without court. Not for agri land or loans <Rs 1 lakh.",
    "IBC 2016: Time-bound insolvency resolution (180+90 days, max 330 days). NCLT adjudicates.",
    "IBC waterfall: Resolution costs → Workmen dues (24 months) → Secured creditors → Unsecured → Govt → Equity.",
    "NARCL (Bad Bank, 2021): Acquires stressed assets >Rs 500 crore. Government guarantee Rs 30,600 crore.",
    "Twin Balance Sheet Problem: Overleveraged corporates + stressed banks — identified in Economic Survey 2016-17."
  ],
  "comparisons": [
    {
      "title": "SARFAESI Act vs IBC vs DRT",
      "headers": [
        "Feature",
        "SARFAESI (2002)",
        "IBC (2016)",
        "DRT (1993)"
      ],
      "rows": [
        [
          "Nature",
          "Asset seizure without court",
          "Insolvency resolution",
          "Debt recovery tribunal"
        ],
        [
          "Timeline",
          "No fixed timeline",
          "180+90 days (max 330)",
          "No strict timeline"
        ],
        [
          "Applicability",
          "Secured loans >Rs 1 lakh",
          "All types of debt",
          "Debts >Rs 20 lakh"
        ],
        [
          "Adjudicator",
          "Bank itself",
          "NCLT",
          "DRT/DRAT"
        ],
        [
          "Key limitation",
          "Not for agri land",
          "Liquidation if no resolution",
          "Often delayed"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "NPA 90-Day Rule — \"3 months = NPA\"",
      "mnemonic": "Overdue >90 days = NPA. SMA: 30-60-90 (SMA-0, SMA-1, SMA-2)",
      "explanation": "A loan becomes NPA when interest or principal remains overdue for more than 90 days. The SMA classification provides early warning: SMA-0 (1-30 days), SMA-1 (31-60), SMA-2 (61-90)."
    }
  ]
}
