import type { SubjectRevision } from '@/types/subject-notes'

export const externalDebtRevision: SubjectRevision = {
  topic: 'external-debt',
  bullets: [
    "India's external debt: $682.3 billion (June 2024). Debt/GDP: 18.8% — well below 40% danger threshold.",
    "Composition: ECBs $225.6B (33%), NRI deposits $157.2B (23%), Short-term trade credits $131.8B (19%), Multilateral $73.2B (11%).",
    "Government (sovereign) debt: 23.1% of total. Private debt: 76.9%. Predominantly private — considered safer.",
    "Debt service ratio: 6.7% (FY24) — well below 20% danger mark. Was 35.3% during 1991 crisis.",
    "Short-term debt/Forex reserves: 22.5%. Reserves cover 4.4x short-term debt. Guidotti-Greenspan rule comfortably met.",
    "Forex reserves/External debt: 93.7% — reserves nearly cover total external debt.",
    "ECBs: Regulated by RBI. All-in-cost ceiling (SOFR + 550bps). MAMP: 3 years (Track I), 5 years (Track II).",
    "NRI deposits: FCNR(B) (foreign currency, 1-5 years), NRE (rupee, freely repatriable), NRO (rupee, conditionally repatriable).",
    "India has NEVER issued sovereign bonds in foreign currency — deliberate policy to avoid exchange rate risk.",
    "JP Morgan GBI-EM: India included from June 2024. Expected $20-30B FPI flows into domestic G-Secs.",
    "Largest multilateral lender to India: World Bank (IDA + IBRD $39.7B). ADB: $22.3B. AIIB: $9.6B.",
    "Largest bilateral lender: Japan (JICA $24+B) — concessional 0.1-1.4% interest, 30-40 year repayment.",
    "India prepaid IMF loan (2003) and high-cost bilateral debt — shift from debtor to comfortable position.",
    "Rupee-denominated component: 31.4% of external debt — insulates from exchange rate risk.",
    "NaBFID borrows in rupees from domestic market + international green bonds — infrastructure DFI without forex risk."
],
  comparisons: [
    {
        "title": "External Debt Sustainability Indicators",
        "headers": [
            "Indicator",
            "Current Value",
            "Danger Threshold",
            "Status"
        ],
        "rows": [
            [
                "Debt/GDP",
                "18.8%",
                "40%",
                "Comfortable"
            ],
            [
                "Debt Service Ratio",
                "6.7%",
                "20%",
                "Comfortable"
            ],
            [
                "Short-term debt/Reserves",
                "22.5%",
                "100% (Guidotti-Greenspan)",
                "Comfortable"
            ],
            [
                "Reserves/Total debt",
                "93.7%",
                "Should be high",
                "Very strong"
            ],
            [
                "Import cover (months)",
                "11 months",
                "3 months minimum",
                "Comfortable"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "NRI Deposit Types — \"FCNR-NRE-NRO\"",
        "mnemonic": "FCNR(B): Foreign currency, fixed deposit. NRE: Rupee, freely repatriable. NRO: Rupee, conditionally repatriable",
        "explanation": "Three types of NRI deposits in descending order of repatriability — FCNR and NRE are freely repatriable, NRO has conditions."
    }
],
}
