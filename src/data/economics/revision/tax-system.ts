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
    "India's tax-to-GDP ratio: ~11.7% — lower than OECD average (~34%).",
    "Gross tax revenue FY24: Rs 34.6 lakh crore. Income Tax Rs 10.4L crore, Corporate Rs 9.1L crore, GST Rs 20.18L crore.",
    "Direct tax share: ~53-54% of total tax (up from ~35% in 2000). Progressive shift — direct taxes are progressive, indirect are regressive.",
    "IT filers: 8.2 crore (FY24). Only 1.04 crore pay tax >Rs 5L. Narrow base — only 6-7% of Indians file ITR.",
    "Art. 265: No tax without authority of law. Art. 246A: GST power to both Centre & States. Art. 269A: IGST on inter-state supply.",
    "Art. 270: Union taxes shared with states per FC. 15th FC (N.K. Singh): 41% vertical devolution (from 42% under 14th FC).",
    "Cess/surcharge NOT shared with states. Centre collected Rs 5+ lakh crore cess/surcharge in FY24. States protest fiscal federalism violation.",
    "15th FC horizontal devolution criteria: Income distance (45%), Population (15%), Area (15%), Forest/ecology (10%), Demographic performance (12.5%), Tax effort (2.5%).",
    "Kelkar Task Force (2000): First proposed GST. Kelkar Committee (2002): Broaden tax base, reduce rates. Chelliah Committee (1991): VAT, customs reform.",
    "GAAR (effective 2017): Denies tax benefits of arrangements whose principal purpose is tax benefit. Parthasarathi Shome Committee (2012) shaped implementation.",
    "DTAA: India has ~100 treaties. India-Mauritius DTAA amended (2016) — source-country capital gains tax from April 2017. Treaty shopping curbed.",
    "BEPS Pillar 1: Reallocate taxing rights to market jurisdictions. Pillar 2: 15% global minimum tax for MNCs >EUR 750 million revenue.",
    "Equalisation Levy: 6% on digital ad (2016), 2% on e-commerce (2020). Removed in 2024 as part of OECD Pillar 1 negotiations.",
    "Transfer pricing: Arm's length principle. Sections 92-92F. APAs (Advance Pricing Agreements): 500+ signed for certainty.",
    "Tax litigation: 5.5 lakh cases pending. Rs 12+ lakh crore disputed. Govt success: 27% at ITAT, 13% at High Courts.",
    "Vivad Se Vishwas 1.0 (2020): Resolved 1.5 lakh direct tax disputes. VSV 2.0 (2024): Covers contractual disputes.",
    "Faceless Assessment (2020): All IT assessments electronic — no face-to-face. Reduces corruption. Faceless Appeal also operational.",
    "Revenue foregone (tax expenditure): Rs 1.5+ lakh crore direct taxes (FY25 estimate). Customs exemptions: Rs 2.5+ lakh crore annually.",
    "Agricultural income: Tax-exempt under Section 10(1). Entry 46, List II. Rs 7-8 lakh crore escapes tax. Only 4 states tax it (nominal).",
    "State taxes: SGST, state excise (alcohol Rs 2-3L crore), stamp duty (Rs 2-3L crore), motor vehicle tax, profession tax (max Rs 2,500/yr).",
    "States' own tax revenue: 35-40% of total revenue. Rest from 41% central devolution + grants. Rich states (Gujarat, TN) self-reliant; poor states depend.",
    "Section 80C: Rs 1.5 lakh deduction (old regime). 80D: Health insurance. 24(b): Home loan interest Rs 2L. Standard deduction Rs 75,000 (new regime).",
    "Startups: 80-IAC — 3 years tax holiday (turnover up to Rs 100 crore). SEZ: Section 10AA — being phased out.",
    "STT (Securities Transaction Tax): On purchase/sale of securities. DDT abolished 2020 — dividends now taxable in recipient's hands.",
    "Tax buoyancy >1 since FY22 — revenue grows faster than GDP. Indicates improving compliance and formalisation (GST, digital payments).",
    "Health & Education Cess: 4% on income tax + surcharge. Road Cess: Rs 18 on petrol, Rs 18 on diesel. GST Compensation Cess continues till March 2026.",
    "GSTN: 100% government-owned (Centre 50%, States 50%). 1.46 crore taxpayers. 1 billion+ invoices/month. Return compliance: ~85% (FY24).",
    "Surcharge on income tax: 10% (50L-1Cr), 15% (1-2Cr), 25% (2-5Cr), 37% (>5Cr old regime) / 25% (>5Cr new regime).",
    "Black economy estimated 20-30% of GDP. Demonetisation (2016), GST, digital payments, SFT/AIS, Project Insight (AI/ML) all aim to curb it."
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
    },
    {
      "title": "Old vs New Income Tax Regime (2024-25)",
      "headers": ["Feature", "Old Regime", "New Regime (Default)"],
      "rows": [
        ["Standard deduction", "Rs 50,000", "Rs 75,000"],
        ["Section 80C", "Available (Rs 1.5 lakh)", "Not available"],
        ["HRA exemption", "Available", "Not available"],
        ["80D (Health insurance)", "Available", "Not available"],
        ["Tax rates", "Higher (up to 30% above Rs 10L)", "Lower (30% above Rs 15L)"],
        ["Suitability", "High deductions/exemptions", "Fewer deductions, simpler filing"]
      ]
    },
    {
      "title": "Key Tax Reform Committees",
      "headers": ["Committee", "Year", "Key Recommendation"],
      "rows": [
        ["Chelliah Committee", "1991", "VAT, customs reform, lower income tax rates"],
        ["Kelkar Task Force", "2000", "First formal GST proposal"],
        ["Kelkar Committee (Direct Taxes)", "2002", "Broaden base, reduce rates, eliminate exemptions"],
        ["Parthasarathi Shome", "2012", "GAAR implementation — deferral, calibrated approach"],
        ["Akhilesh Ranjan (DTC 2.0)", "2019", "Simplified direct tax code with fewer exemptions"]
      ]
    },
    {
      "title": "Tax Revenue Composition FY24",
      "headers": ["Tax Head", "Revenue (Rs lakh crore)", "Share of Gross Tax"],
      "rows": [
        ["Income Tax", "10.4", "~30%"],
        ["Corporate Tax", "9.1", "~26%"],
        ["GST (Centre+States)", "20.18", "~58% (of indirect)"],
        ["Customs", "2.1", "~6%"],
        ["Excise (petrol/tobacco)", "3.2", "~9%"]
      ]
    },
    {
      "title": "Centre vs State Tax Powers",
      "headers": ["Feature", "Centre (Union List)", "States (State List)"],
      "rows": [
        ["Income tax", "Yes (except agricultural)", "Agricultural income only"],
        ["Corporate tax", "Yes", "No"],
        ["GST", "CGST + IGST", "SGST/UTGST"],
        ["Excise", "Petroleum, tobacco", "Alcohol for human consumption"],
        ["Customs", "Yes", "No"],
        ["Stamp duty", "Non-judicial stamps", "Property transactions"],
        ["Motor vehicle tax", "No", "Yes"]
      ]
    },
    {
      "title": "India's Tax-to-GDP vs Peers",
      "headers": ["Country", "Tax-to-GDP (%)", "Key Feature"],
      "rows": [
        ["India", "~11.7%", "Narrow base, agriculture exempt"],
        ["OECD average", "~34%", "Broad base, fewer exemptions"],
        ["USA", "~27%", "Federal + State income tax"],
        ["China", "~17%", "VAT-heavy, narrow income tax"],
        ["Brazil", "~33%", "High indirect taxes, complex system"]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "GST — \"CIST\" Types",
      "mnemonic": "CGST, IGST, SGST, (U)TGST",
      "explanation": "Intra-state: CGST + SGST. Inter-state: IGST (goes to Centre, shared with consuming state). Union Territories: CGST + UTGST. GST Council decides rates, exemptions — decisions by 3/4th majority."
    },
    {
      "title": "GST Articles — \"246-269-279\"",
      "mnemonic": "246A (concurrent GST power), 269A (IGST), 279A (GST Council)",
      "explanation": "Three key constitutional articles inserted by 101st Amendment. 246A gives both Parliament and State Legislatures power for GST. 269A governs IGST collection and sharing. 279A establishes the GST Council."
    },
    {
      "title": "Tax Administration — \"CBDT-CBIC\"",
      "mnemonic": "CBDT = Direct (Income Tax, Corporate Tax). CBIC = Indirect (GST, Customs, Excise on petroleum/tobacco)",
      "explanation": "Two central boards under the Department of Revenue, Ministry of Finance. CBDT administers direct taxes. CBIC administers indirect taxes and customs."
    },
    {
      "title": "Items Outside GST — \"PAPER\"",
      "mnemonic": "Petroleum (5 products), Alcohol, Property (stamp duty), Electricity, Real estate",
      "explanation": "Five major items outside the GST framework. Each has a separate tax regime — state excise for alcohol, central excise for petroleum, stamp duty for property, electricity duty for power."
    },
    {
      "title": "15th FC Devolution Criteria — \"IPADTF\"",
      "mnemonic": "Income distance (45%), Population (15%), Area (15%), Demographic (12.5%), Tax effort (2.5%), Forest (10%)",
      "explanation": "Horizontal devolution formula for distributing the 41% divisible pool among states. Income distance gets the highest weight, ensuring poorer states receive more."
    }
  ]
}
