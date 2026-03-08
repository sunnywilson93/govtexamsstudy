import type { SubjectRevision } from '@/types/subject-notes'

export const taxSystemRevision: SubjectRevision = {
  "topic": "tax-system",
  "bullets": [
    "Direct Tax: Cannot be shifted (Income Tax, Corporate Tax). Indirect Tax: Can be shifted to consumer (GST).",
    "GST launched July 1, 2017 — 101st Constitutional Amendment. 'One Nation, One Tax.'",
    "GST types: CGST (Central), SGST (State), IGST (Inter-state), UTGST (Union Territory).",
    "GST slabs: 0%, 5%, 12%, 18%, 28%. Compensation Cess on luxury/demerit goods above 28%.",
    "GST Council (Art. 279A): FM as chair + all state FMs. 3/4th majority (Centre 1/3 vote, States 2/3).",
    "Outside GST: Petroleum (5 products), alcohol for human consumption, electricity, real estate (partly).",
    "ITC (Input Tax Credit): Tax on inputs offsets tax on outputs — eliminates cascading/tax-on-tax.",
    "Corporate Tax: 22% (existing companies), 15% (new manufacturing, from Oct 2019).",
    "New Income Tax Regime (2024-25 default): 0-3L: Nil, 3-7L: 5%, 7-10L: 10%, 10-12L: 15%, 12-15L: 20%, >15L: 30%.",
    "India's tax-to-GDP ratio: ~11.7% — lower than OECD average (~34%)."
  ],
  "comparisons": [
    {
      "title": "Direct Tax vs Indirect Tax",
      "headers": [
        "Feature",
        "Direct Tax",
        "Indirect Tax"
      ],
      "rows": [
        [
          "Burden shifting",
          "Cannot be shifted",
          "Shifted to consumer"
        ],
        [
          "Nature",
          "Progressive",
          "Generally regressive"
        ],
        [
          "Examples",
          "Income Tax, Corporate Tax",
          "GST, Customs Duty"
        ],
        [
          "Administered by",
          "CBDT",
          "CBIC"
        ],
        [
          "Base",
          "Income/wealth",
          "Consumption/transaction"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "GST — \"CIST\" Types",
      "mnemonic": "CGST, IGST, SGST, (U)TGST",
      "explanation": "Intra-state: CGST + SGST. Inter-state: IGST (goes to Centre, shared with consuming state). Union Territories: CGST + UTGST. GST Council decides rates, exemptions — decisions by 3/4th majority."
    }
  ]
}
