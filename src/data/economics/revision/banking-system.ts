import type { SubjectRevision } from '@/types/subject-notes'

export const bankingSystemRevision: SubjectRevision = {
  "topic": "banking-system",
  "bullets": [
    "Bank of Calcutta (1806) — first bank in India (later became Bank of Bengal).",
    "Imperial Bank of India (1921) = merger of Bank of Bengal + Bank of Bombay + Bank of Madras. Became SBI in 1955.",
    "1st nationalisation (1969): 14 banks with deposits >Rs 50 crore. 2nd nationalisation (1980): 6 more banks.",
    "Currently 12 PSBs (after 2020 mega-merger of 10 into 4), 21 private banks, 46 foreign banks.",
    "Small Finance Banks: Must lend 75% to priority sector. 50% of loans <Rs 25 lakh. Examples: AU SFB, Equitas, Ujjivan.",
    "Payments Banks: Accept deposits up to Rs 2 lakh. Cannot lend. Examples: Paytm, India Post, Airtel, Jio.",
    "RRBs: Established 1976. Shareholding: Centre 50%, State 15%, Sponsor Bank 35%. First RRB: Prathama Bank (1975, Moradabad).",
    "Jan Dhan Yojana (2014): Zero-balance account, RuPay card, Rs 1 lakh accident insurance. 51+ crore accounts.",
    "Narasimham Committee-I (1991): Reduce CRR/SLR, capital adequacy, DRTs. Narasimham-II (1998): Bank mergers, CRAR 10%.",
    "JAM Trinity: Jan Dhan + Aadhaar + Mobile — enables Direct Benefit Transfer (DBT)."
  ],
  "comparisons": [
    {
      "title": "Public Sector Banks vs Private Banks vs Foreign Banks",
      "headers": [
        "Feature",
        "PSBs",
        "Private Banks",
        "Foreign Banks"
      ],
      "rows": [
        [
          "Ownership",
          "Government >51%",
          "Private shareholders",
          "Foreign parent bank"
        ],
        [
          "Number",
          "12",
          "21",
          "46"
        ],
        [
          "Largest",
          "SBI",
          "HDFC Bank",
          "Standard Chartered"
        ],
        [
          "PSL target",
          "40% of ANBC",
          "40% of ANBC",
          "40% (with sub-targets)"
        ],
        [
          "Focus",
          "Social banking, rural",
          "Urban, retail, technology",
          "Corporate, forex, trade"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Bank Nationalisation — \"14 in '69, 6 in '80\"",
      "mnemonic": "14 banks (1969) + 6 banks (1980) = 20 nationalised banks",
      "explanation": "First phase (1969): 14 banks with deposits over Rs 50 crore under PM Indira Gandhi. Second phase (1980): 6 more banks with deposits over Rs 200 crore. New Bank of India later merged with PNB (1993)."
    }
  ]
}
