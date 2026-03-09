import type { SubjectRevision } from '@/types/subject-notes'

export const unionBudgetRevision: SubjectRevision = {
  "topic": "union-budget",
  "bullets": [
    "Article 112: Annual Financial Statement (Budget). Article 113: Appropriation Bill. Article 265: No tax without law.",
    "Article 266: Consolidated Fund of India (all revenues). Article 267: Contingency Fund (Rs 500 crore, President).",
    "Three funds: Consolidated Fund (voted by Parliament), Public Account (not voted), Contingency Fund.",
    "First budget: James Wilson (1860). First in independent India: R.K. Shanmukham Chetty (1947).",
    "Railway Budget merged with General Budget from 2017. Budget date moved to February 1 from 2017.",
    "Revenue Deficit = Revenue Expenditure − Revenue Receipts.",
    "Fiscal Deficit = Total Expenditure − Total Receipts (excl. borrowings) = Total Borrowing.",
    "Primary Deficit = Fiscal Deficit − Interest Payments.",
    "Finance Bill (taxation proposals) must be passed within 75 days.",
    "Rajya Sabha can discuss but cannot vote on Demand for Grants.",
    "Vote on Account: Interim approval for expenditure until full budget is passed (usually 2 months).",
    "Economic Survey: Presented day before Budget by Chief Economic Adviser — NOT a budget document.",
    "FRBM Act 2003: Targets — fiscal deficit 3% of GDP, eliminate revenue deficit. N.K. Singh Committee (2017): debt-to-GDP anchor of 40% for Centre, 20% for states.",
    "Fiscal Deficit FY25 (RE): 4.9% of GDP. Target below 4.5% by FY26. COVID peak: 9.2% (FY21). Glide path: 6.4%→5.9%→5.6%→4.9%.",
    "Central Govt debt: ~57% of GDP (~Rs 171 lakh crore). Combined Centre+State debt: ~85% of GDP. N.K. Singh target of 40% missed.",
    "Interest payments: Rs 11.63 lakh crore (FY25 BE) — 26% of revenue expenditure, single largest item. Crowds out capex and social spending.",
    "Capital Expenditure tripled: Rs 4.39L crore (FY21)→Rs 11.11L crore (FY25 BE). Capex share: 12% (FY20)→23% (FY25) of total expenditure.",
    "50-year interest-free capex loans to states: Rs 1.3 lakh crore (FY24). Incentivises state-level infrastructure spending.",
    "Three major subsidies: Food Rs 2.05L crore, Fertiliser Rs 1.64L crore, Fuel Rs 11,925 crore (FY25 BE). Total ~Rs 3.81 lakh crore (~8% of expenditure).",
    "FCI off-budget borrowing from NSSF peaked at Rs 3.86 lakh crore (FY21). Now brought on-budget for fiscal transparency.",
    "RBI surplus transfer FY24: Rs 2.11 lakh crore (record). Bimal Jalan Committee (2019): CRB of 5.5-6.5% of RBI balance sheet.",
    "CSS sharing: 60:40 (Centre:State) for general states, 90:10 for NE/hill states. Sub-Committee of CMs recommended reducing from 66 to 28 umbrella CSS.",
    "Defence budget: Rs 6.22 lakh crore (FY25 BE, ~1.9% of GDP). Revenue 58%, Capital 28%, Pensions 14%. Agnipath to reduce pension burden.",
    "Gender Budget Statement: Part A = 100% for women, Part B = 30%+ for women. Total gender budget FY25: ~Rs 3.27 lakh crore.",
    "Charged expenditure (not voted): Salaries of constitutional authorities, interest on debt, CAG expenses, SC/HC judges\' salaries.",
    "Types of cuts in Demands for Grants: Disapproval of Policy (Re 1), Economy Cut (Rs 100), Token Cut (specific amount for grievance).",
    "Guillotine: On last allotted day, all undiscussed Demands for Grants put to vote without debate — major criticism of budget process.",
    "PAC (22 members, 15 LS + 7 RS) examines CAG audit reports. Chaired traditionally by opposition leader. Estimates Committee (30, all LS).",
    "Outcome Budget (2005-06): Physical targets alongside financial allocations. Green Budget (2023): Tracks climate-relevant expenditure.",
    "Zero-Based Budgeting tried in 1986-87 (Rajiv Gandhi) — abandoned due to complexity. Every item justified from scratch, not incremental.",
    "Money Bill (Art. 110): Speaker\'s certification is final. Aadhaar Act (2016) controversially passed as Money Bill.",
    "Ad-hoc Treasury Bills abolished in 1997 (Supplementary Agreement) — ended automatic monetisation of deficit by RBI. Landmark reform.",
    "NSSF corpus ~Rs 30 lakh crore. PPF 7.1%, NSC 7.7%, Sukanya Samriddhi 8.2%. Rates reviewed quarterly, benchmarked to G-Sec yields.",
    "DBT since 2013: Rs 34 lakh crore transferred, Rs 3.48 lakh crore saved by eliminating ghosts and duplicates.",
    "Bibek Debroy Committee recommended merger of Railway Budget with General Budget (implemented 2017).",
    "Cess/surcharge share of gross tax: 6% (2011-12)→23% (FY24). Not shared with states — key fiscal federalism grievance.",
    "Morarji Desai: Most budgets (10 total — 6 annual + 4 interim). Manmohan Singh\'s 1991 budget: Most transformative (liberalisation).",
    "PFMS (Public Financial Management System): Real-time tracking of government expenditure. Single Nodal Account (SNA) for CSS fund flow.",
    "Art. 293: States cannot borrow externally without Centre\'s consent. States\' FRBM targets: typically 3% fiscal deficit of GSDP."
  ],
  "comparisons": [
    {
      "title": "Revenue Deficit vs Fiscal Deficit vs Primary Deficit",
      "headers": [
        "Deficit",
        "Formula",
        "Significance"
      ],
      "rows": [
        [
          "Revenue Deficit",
          "Rev Exp − Rev Receipts",
          "Govt borrowing for consumption"
        ],
        [
          "Fiscal Deficit",
          "Total Exp − Total Receipts (excl. borrowing)",
          "Total borrowing requirement"
        ],
        [
          "Primary Deficit",
          "Fiscal Deficit − Interest Payments",
          "Borrowing need excl. debt servicing"
        ],
        [
          "Effective Rev Deficit",
          "Rev Deficit − Grants for capital assets",
          "Truer picture (since 2011-12)"
        ]
      ]
    },
    {
      "title": "Consolidated Fund vs Public Account vs Contingency Fund",
      "headers": ["Feature", "Consolidated Fund (Art. 266(1))", "Public Account (Art. 266(2))", "Contingency Fund (Art. 267)"],
      "rows": [
        ["Contents", "All revenues, loans raised, repayments", "Deposits, provident funds, small savings", "Rs 500 crore imprest"],
        ["Parliamentary approval", "Required for withdrawal", "Not required", "President authorises; Parliament ratifies later"],
        ["Nature", "Government\'s own money", "Government as trustee", "Emergency fund"],
        ["Examples", "Tax revenue, market borrowings", "GPF, PPF, judicial deposits", "Urgent unforeseen expenditure"]
      ]
    },
    {
      "title": "Union Budget vs State Budget",
      "headers": ["Feature", "Union Budget (Art. 112)", "State Budget (Art. 202)"],
      "rows": [
        ["Presented by", "Union Finance Minister", "State Finance Minister"],
        ["Upper House role", "Rajya Sabha: discuss only, cannot vote on Demands", "Legislative Council: discuss only, cannot vote on Demands"],
        ["Contingency Fund", "Rs 500 crore (President)", "Varies (Governor)"],
        ["External borrowing", "Sovereign borrowing allowed", "Not allowed without Centre\'s consent (Art. 293)"],
        ["Tax devolution received", "N/A (collects)", "41% of divisible pool (15th FC)"],
        ["FRBM target", "Below 4.5% FD by FY26", "Typically 3% of GSDP"]
      ]
    },
    {
      "title": "Central Sector Schemes vs Centrally Sponsored Schemes",
      "headers": ["Feature", "Central Sector Schemes", "Centrally Sponsored Schemes (CSS)"],
      "rows": [
        ["Funding", "100% by Centre", "Shared (60:40 general, 90:10 NE/hill)"],
        ["Implementation", "Central ministries/agencies", "State governments"],
        ["Examples", "PM-KISAN, PLI, MUDRA", "MGNREGA, PMAY, NHM, JJM"],
        ["Expenditure FY25", "~Rs 14.94 lakh crore", "~Rs 4.15 lakh crore"],
        ["State autonomy", "States not involved", "States must provide matching share"]
      ]
    },
    {
      "title": "Key Budget Expenditure Heads FY25 (BE)",
      "headers": ["Head", "Amount (Rs lakh crore)", "Share of Total", "Trend"],
      "rows": [
        ["Interest Payments", "11.63", "~24%", "Rising — largest single item"],
        ["Capital Expenditure", "11.11", "~23%", "Tripled since FY21"],
        ["Defence", "6.22", "~13%", "Steady ~1.9% of GDP"],
        ["Subsidies (Food+Fert+Fuel)", "3.81", "~8%", "Down from COVID peak"],
        ["Central Sector Schemes", "14.94", "~31%", "Growing — includes PLI, PM-KISAN"],
        ["Total Expenditure", "48.21", "100%", "Growing at ~7-8% annually"]
      ]
    },
    {
      "title": "Parliamentary Committees for Budget Scrutiny",
      "headers": ["Committee", "Members", "Function", "Key Feature"],
      "rows": [
        ["Estimates Committee", "30 (all Lok Sabha)", "Pre-expenditure: Examines if spending within limits", "No Rajya Sabha members"],
        ["Public Accounts Committee", "22 (15 LS + 7 RS)", "Post-expenditure: Examines CAG audit reports", "Chaired by opposition leader"],
        ["Committee on Public Undertakings", "22 (15 LS + 7 RS)", "Examines PSU performance and CAG audit", "Covers all central PSUs"],
        ["Dept-related Standing Committees", "31 each (21 LS + 10 RS)", "Pre-budget: Scrutinise Demands for Grants", "24 committees, cover all ministries"]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Budget Articles — \"112-113-265-266-267\"",
      "mnemonic": "Art 112 (Budget), 113 (Appropriation), 265 (No tax without law), 266 (CFI), 267 (Contingency)",
      "explanation": "Key constitutional articles for budget: 112 = Annual Financial Statement, 113 = Appropriation Bill, 265 = No tax without authority of law, 266 = Consolidated Fund + Public Account, 267 = Contingency Fund."
    },
    {
      "title": "Budget Process — \"PDAE\"",
      "mnemonic": "Preparation (Sep-Jan), Discussion (Feb-Mar), Approval (Appropriation + Finance Bill), Execution & Audit (CAG)",
      "explanation": "Four stages of budget cycle. Preparation by Finance Ministry, presented Feb 1, general discussion then Demand for Grants then Guillotine, Appropriation Bill and Finance Bill (75 days), then CAG audit."
    },
    {
      "title": "Three Funds — \"CPC\"",
      "mnemonic": "Consolidated Fund (Art. 266(1)) — all revenues/loans; Public Account (Art. 266(2)) — deposits/PF; Contingency Fund (Art. 267) — Rs 500 crore",
      "explanation": "CFI needs Parliamentary approval for withdrawal. Public Account does not (government acts as trustee). Contingency Fund is at President's disposal for urgent expenditure — Parliament ratifies later."
    },
    {
      "title": "Deficit Formulas — \"R-F-P\"",
      "mnemonic": "Revenue Deficit = RevExp − RevReceipts, Fiscal Deficit = TotalExp − TotalReceipts (excl borrowing), Primary Deficit = FD − Interest",
      "explanation": "Revenue deficit shows borrowing for consumption (bad). Fiscal deficit shows total borrowing (most cited). Primary deficit excludes interest — shows if government is borrowing to pay interest on old debt."
    },
    {
      "title": "Historic Budgets — \"WC-MS-PC\"",
      "mnemonic": "Wilson-Chetty (first: 1860/1947), Manmohan Singh (1991 liberalisation), P. Chidambaram (1997 Dream Budget)",
      "explanation": "James Wilson: first-ever Indian budget (1860). R.K. Shanmukham Chetty: first independent India budget (1947). Manmohan Singh: liberalisation budget. P. Chidambaram: reduced income tax to 30%, broadened base."
    }
  ]
}
