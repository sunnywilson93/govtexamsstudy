import type { SubjectRevision } from '@/types/subject-notes'

export const financialMarketsRevision: SubjectRevision = {
  "topic": "financial-markets",
  "bullets": [
    "Money Market: Short-term (up to 1 year). Capital Market: Long-term (over 1 year).",
    "T-Bills: 91-day, 182-day, 364-day. Issued by RBI on behalf of GoI. Zero-coupon (discount). Min Rs 25,000.",
    "Commercial Paper (CP): 7 days to 1 year. Unsecured. Issued by corporates.",
    "Call Money: Overnight interbank lending. Notice Money: 2-14 days. Only banks and primary dealers.",
    "BSE: Asia's oldest stock exchange (1875). Index: Sensex (30 stocks). NSE: Electronic trading (1994). Index: Nifty 50.",
    "SEBI: Statutory since 1992 (SEBI Act). HQ: Mumbai. Regulates stock exchanges, mutual funds, FPIs.",
    "IPO = Initial Public Offering. FPO = Follow-on Public Offer. Rights Issue = offered to existing shareholders.",
    "Demat Account: Electronic securities. Depositories: NSDL, CDSL. DPs are intermediaries.",
    "Bond prices and yields move inversely. When RBI cuts rates, bond prices rise.",
    "Sovereign Gold Bonds: Denominated in grams of gold, 2.5% annual interest, 8-year tenure."
  ],
  "comparisons": [
    {
      "title": "Money Market vs Capital Market",
      "headers": [
        "Feature",
        "Money Market",
        "Capital Market"
      ],
      "rows": [
        [
          "Tenure",
          "Up to 1 year",
          "Over 1 year"
        ],
        [
          "Instruments",
          "T-Bills, CP, CD, Call Money",
          "Shares, Bonds, Debentures"
        ],
        [
          "Risk",
          "Low",
          "Higher"
        ],
        [
          "Liquidity",
          "Very high",
          "Variable"
        ],
        [
          "Regulator",
          "RBI",
          "SEBI"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "T-Bill Maturities — \"91-182-364\"",
      "mnemonic": "Three T-Bill tenures: 91 days, 182 days, 364 days",
      "explanation": "Treasury Bills come in three maturities. All are zero-coupon (sold at discount, redeemed at par). Minimum investment Rs 25,000. Issued by RBI on behalf of Government of India through auctions."
    }
  ]
}
