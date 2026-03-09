import type { SubjectConcept } from '@/types/subject-notes'

export const unionBudgetConcept: SubjectConcept = {
  topic: 'union-budget',
  title: 'Union Budget & Budget Process',
  description:
    'Constitutional provisions, budget cycle, revenue and capital accounts, key budget documents, and budgetary reforms in India.',
  category: 'Public Finance',
  keyDates: [
    { year: '1860', event: 'First budget of India presented by James Wilson on April 7 — Finance Member of the Viceroy\'s Council' },
    { year: '1947', event: 'First budget of Independent India presented by R.K. Shanmukham Chetty on November 26' },
    { year: '2017', event: 'Railway Budget merged with General Budget; budget date advanced from end of February to February 1' },
    { year: '2017', event: 'Plan and Non-Plan expenditure classification abolished (post-Planning Commission dissolution)' },
    { year: '1955', event: 'First Five Year Plan expenditure integrated into budget — Plan vs Non-Plan distinction began' },
    { year: '2024', event: 'Interim Budget 2024-25 presented in February; full budget in July after general elections' },
    { year: '2003', event: 'FRBM Act enacted — mandated fiscal deficit targets for the central government' },
    { year: '1921', event: 'Separation of Railway finances from General Budget on the recommendation of Acworth Committee' },
    { year: '1946', event: 'Liaquat Ali Khan presented the last budget of undivided India' },
    { year: '1970', event: 'First Supplementary Budget presented; Parliament approved excess grants for the first time' },
    { year: '1991', event: 'Manmohan Singh\'s liberalisation budget — reduced customs duties, opened economy; India\'s most transformative budget' },
    { year: '1997', event: 'P. Chidambaram\'s "Dream Budget" — reduced income tax rates to 30%, broadened tax base' },
    { year: '2000', event: 'Budget presentation time changed from 5 PM to 11 AM (Yashwant Sinha, ending colonial practice)' },
    { year: '2005', event: 'FRBM Rules implemented — targets: fiscal deficit 3% of GDP, revenue deficit 0% by 2008-09' },
    { year: '2012', event: 'Concept of "Effective Revenue Deficit" introduced to distinguish revenue expenditure used for capital creation' },
    { year: '2016', event: 'Plan and Non-Plan classification abolished after dissolution of Planning Commission (2014)' },
    { year: '2021', event: 'Budget went paperless for first time; presented on a tablet (Nirmala Sitharaman)' },
    { year: '2023', event: 'FRBM Act target revised to fiscal deficit below 4.5% of GDP by 2025-26' },
  ],
  notes: [
    {
      section: 'Constitutional Provisions',
      content:
        'Article 112: The President shall cause to be laid before Parliament an "Annual Financial Statement" (Budget) showing estimated receipts and expenditure. Article 113: Appropriation Bill — no money can be withdrawn from Consolidated Fund of India without Parliament\'s approval. Article 114: Appropriation Bill procedure. Article 115: Supplementary and Excess Grants. Article 116: Votes on Account, Vote of Credit, Exceptional Grants. Article 265: No tax shall be levied or collected except by authority of law. Article 266: Consolidated Fund of India and Public Account. Article 267: Contingency Fund of India (Rs 500 crore, at the disposal of the President for urgent expenditure). Three types of funds: CFI (all revenues and loans), Public Account (deposits, provident funds — not voted by Parliament), Contingency Fund.',
    },
    {
      section: 'Budget Structure — Revenue & Capital',
      content:
        'Revenue Account: Revenue Receipts = Tax Revenue (income tax, corporation tax, GST, customs, excise) + Non-Tax Revenue (dividends from PSUs, interest receipts, spectrum auction fees, RBI surplus). Revenue Expenditure = Salaries, pensions, interest payments, subsidies, grants to states. Revenue Deficit = Revenue Expenditure − Revenue Receipts (indicates government is borrowing for consumption). Capital Account: Capital Receipts = Borrowings (market loans, external debt), disinvestment proceeds, recovery of loans. Capital Expenditure = Creation of assets (roads, bridges, defence equipment), loans given to states/PSUs. Fiscal Deficit = Total Expenditure − Total Receipts (excluding borrowings). It equals total borrowing by the government. Primary Deficit = Fiscal Deficit − Interest Payments.',
    },
    {
      section: 'Budget Documents',
      content:
        'Key budget documents presented to Parliament: (1) Annual Financial Statement (the Budget itself, Art. 112). (2) Demand for Grants — one for each ministry/department (voted by Lok Sabha). (3) Finance Bill — contains taxation proposals (must be passed within 75 days). (4) Appropriation Bill — authorises expenditure from CFI. (5) Macro-Economic Framework Statement (FRBM requirement). (6) Medium Term Fiscal Policy Statement. (7) Fiscal Policy Strategy Statement. (8) Expenditure Profile. (9) Budget at a Glance. (10) Receipt Budget and Expenditure Budget. Economic Survey (prepared by the Chief Economic Adviser) is presented a day before the Budget — reviews economic performance but is not a budget document.',
    },
    {
      section: 'Budget Process & Timeline',
      content:
        'The budget cycle has four stages: (1) Preparation (September-January): Ministries submit estimates, Finance Ministry compiles. (2) Presentation (February 1): Finance Minister presents in Lok Sabha. President\'s recommendation required (Art. 117). (3) Discussion & Approval: General discussion → Demand for Grants (department-wise) → Guillotine (undiscussed demands put to vote on last allotted day) → Appropriation Bill → Finance Bill. (4) Execution & Review: CAG audits expenditure. Rajya Sabha can only discuss, not vote on Demand for Grants. If budget not passed before April 1, Vote on Account allows government to spend for a limited period (usually 2 months). Interim Budget is a full budget presented before elections; Vote on Account is more limited.',
    },
    {
      section: 'Key Budget Metrics — 2024-25',
      content:
        'Total Expenditure (2024-25 BE): ~Rs 48.21 lakh crore. Capital Expenditure: ~Rs 11.11 lakh crore (23% of total). Revenue Expenditure: ~Rs 37.09 lakh crore. Fiscal Deficit target: 4.9% of GDP (2024-25 revised), target of below 4.5% by 2025-26. Revenue Deficit: Targeted at 1.8% of GDP. Major expenditure heads: Interest Payments (~26% of revenue expenditure), Defence (~8%), Subsidies (food, fertiliser, fuel ~7%), Central Sector and Centrally Sponsored Schemes. Tax revenue is shared with states through Finance Commission recommendations (currently 15th FC: 41% of divisible pool to states). Cess and surcharges are not shared with states.',
    },
    {
      section: 'FRBM Act & Fiscal Discipline',
      content:
        'The Fiscal Responsibility and Budget Management (FRBM) Act, 2003 mandated the central government to eliminate revenue deficit and reduce fiscal deficit to 3% of GDP by 2008-09. FRBM Rules (2004) implemented the targets. The N.K. Singh Committee (2017) recommended replacing rigid targets with a debt-to-GDP anchor of 40% for the Centre and 20% for states, with a fiscal deficit range of 2.5-3% of GDP and an escape clause for extraordinary circumstances (national security, calamity, structural reforms with fiscal implications). The FRBM Amendment Act (2018) adopted the committee\'s recommendations. During COVID-19, the escape clause was invoked — fiscal deficit rose to 9.2% of GDP in FY21. Post-pandemic glide path: 6.4% (FY22) → 5.9% (FY23) → 5.6% (FY24) → 4.9% (FY25 RE) → below 4.5% (FY26 target). States have their own FRBM Acts — most target 3% fiscal deficit. The 15th Finance Commission linked conditional grants to states maintaining FRBM targets.',
    },
    {
      section: 'Subsidies — Food, Fertiliser, Fuel',
      content:
        'Three major subsidies dominate expenditure: (1) Food Subsidy: Rs 2.05 lakh crore (FY25 BE). Under NFSA (2013), 81.35 crore beneficiaries get subsidised grains through PDS. FCI is the primary procurement and distribution agency. MSP procurement cost minus Central Issue Price (CIP) = per-unit subsidy. Free grain under PM Garib Kalyan Ann Yojana (PMGKAY) during COVID expanded to Rs 3.45 lakh crore (FY21-23). (2) Fertiliser Subsidy: Rs 1.64 lakh crore (FY25 BE). Urea pricing controlled (decontrolled for NBS fertilisers). Nutrient-Based Subsidy (NBS) for P&K fertilisers since 2010. Nano urea by IFFCO aims to reduce subsidy burden. (3) Fuel Subsidy: Rs 11,925 crore (FY25 BE) — sharply reduced after deregulation of diesel (2014) and LPG reform (PAHAL/DBTL). PMUY provided 10 crore free LPG connections but refill rates remain a concern. Total explicit subsidies: ~Rs 3.81 lakh crore (FY25 BE) — about 8% of total expenditure.',
    },
    {
      section: 'Interest Payments & Debt Burden',
      content:
        'Interest payments are the largest single item of revenue expenditure: Rs 11.63 lakh crore (FY25 BE) — about 26% of total revenue expenditure and 40% of revenue receipts. Central government debt: ~Rs 171 lakh crore (FY25) — about 57% of GDP. Debt-to-GDP ratio was ~52% pre-COVID, rose to 61% in FY21, and is on a gradual consolidation path. N.K. Singh Committee target: 40% by FY25 (missed due to pandemic). India\'s government securities (G-Secs) are the primary borrowing instrument — RBI manages issuance. Primary deficit (fiscal deficit minus interest) was near zero in FY24, indicating government is not borrowing to pay interest on old debt — a positive sign. State government debt adds another ~29% of GDP, making combined government debt ~85% of GDP. High interest payments crowd out capital expenditure and social sector spending.',
    },
    {
      section: 'Capital Expenditure Push',
      content:
        'Capital expenditure (capex) has been prioritised since FY22 to boost growth through the multiplier effect. Centre\'s capex: Rs 4.39 lakh crore (FY21) → Rs 7.28 lakh crore (FY23) → Rs 10.01 lakh crore (FY24) → Rs 11.11 lakh crore (FY25 BE) — nearly tripled in 4 years. Capex multiplier for India estimated at 2.5-4.5x (RBI study). Key capex channels: National Highways (NHAI), Railways (including Vande Bharat), PM Gati Shakti (multi-modal infrastructure), smart cities, Jal Jeevan Mission. States are incentivised through 50-year interest-free loans for capex (Rs 1.3 lakh crore in FY24). Quality of expenditure has improved — capex share rose from 12% (FY20) to 23% (FY25) of total expenditure. Capital expenditure is more growth-inducing than revenue expenditure (salaries, pensions, interest) and is a key fiscal reform metric.',
    },
    {
      section: 'Revenue Receipts — Tax & Non-Tax',
      content:
        'Total receipts (FY25 BE): Rs 32.07 lakh crore (revenue) + Rs 16.14 lakh crore (capital). Tax Revenue (Centre\'s net after devolution to states): Rs 25.83 lakh crore. Gross tax revenue: Rs 38.31 lakh crore (FY25 BE). Major components: Income Tax (~Rs 12.01 lakh crore), Corporate Tax (~Rs 10.20 lakh crore), GST (~Rs 10.68 lakh crore), Customs (~Rs 2.30 lakh crore), Excise (~Rs 3.20 lakh crore). Non-Tax Revenue: Rs 5.46 lakh crore — includes dividends from PSUs and RBI surplus (Rs 2.11 lakh crore in FY24 — record), interest receipts, user charges, spectrum auction fees, and receipts from Union Territories. Disinvestment receipts (capital receipt): Rs 50,000 crore (FY25 BE) — target usually underachieved. Tax revenue has grown at ~14% CAGR since FY21, reflecting improved compliance and formalisation.',
    },
    {
      section: 'Expenditure Classification',
      content:
        'Post-2017, expenditure is classified as: (1) Revenue Expenditure (~77% of total): does not create assets — salaries, pensions, interest, subsidies, grants to states. (2) Capital Expenditure (~23%): creates assets or reduces liabilities — roads, ports, railways, defence equipment, loans to states and PSUs. Earlier Plan vs Non-Plan classification (abolished 2016) split spending by Planning Commission allocation, which distorted expenditure quality analysis. Current classification: Scheme Expenditure (Central Sector Schemes + Centrally Sponsored Schemes) vs Non-Scheme Expenditure (interest, defence, pensions, establishment). CSS are shared with states (often 60:40 or 90:10 for NE/hill states). Central Sector Schemes are 100% centrally funded. Charged expenditure (salaries of constitutional authorities, interest on debt, CAG expenses) is not voted — automatically charged to CFI.',
    },
    {
      section: 'Consolidated Fund, Public Account & Contingency Fund',
      content:
        'Article 266(1): Consolidated Fund of India (CFI) — all revenues received, all loans raised, and all money received in repayment of loans. No money can be withdrawn except under appropriation made by law (Art. 266(3)). Article 266(2): Public Account — money received by the government as trustee (provident funds, small savings, judicial deposits, departmental deposits). Government can make payments from it without Parliamentary approval. Article 267: Contingency Fund — Rs 500 crore (enhanced from Rs 50 crore in 2005). Placed at the President\'s disposal for urgent unforeseen expenditure pending Parliamentary authorisation. States have parallel structures: State Consolidated Fund, State Public Account, State Contingency Fund (at Governor\'s disposal). The distinction matters for exam questions: CFI money is "voted" by Parliament; Public Account is not.',
    },
    {
      section: 'Demands for Grants & Guillotine',
      content:
        'After general discussion, the budget goes to department-wise Demand for Grants. Each ministry/department presents one Demand for Grant. Lok Sabha alone can vote on Demands. Types of cuts: (1) Disapproval of Policy Cut (demand reduced to Re 1) — disapproves the entire policy underlying the demand. (2) Economy Cut (demand reduced by Rs 100) — suggests economy in expenditure. (3) Token Cut (demand reduced by a specified amount) — voices a specific grievance. In practice, with limited parliamentary time, many demands go undiscussed. The "Guillotine" happens on the last allotted day — all remaining undiscussed demands are put to vote together without debate. This is a major criticism — crores of expenditure get approved without scrutiny. Department-related Standing Committees (24 committees covering all ministries) were created to partially address this, but their recommendations are not binding.',
    },
    {
      section: 'Finance Bill vs Money Bill',
      content:
        'Finance Bill: Contains taxation proposals for the coming year. It is a Money Bill under Article 110. Must be introduced in Lok Sabha only, with the President\'s recommendation (Art. 117). Must be passed within 75 days of introduction. Rajya Sabha can suggest amendments but cannot reject — Lok Sabha may accept or reject suggestions. If not passed in 75 days, provisions lapse. Money Bill definition (Art. 110): Deals exclusively with taxation, borrowing, CFI/Public Account payments, appropriation from CFI, audit of Union/State accounts. The Speaker certifies whether a bill is a Money Bill — this certification is final and cannot be questioned (Art. 110(3)). Aadhaar Act (2016) was controversially passed as a Money Bill. Finance Act 2017 challenged for including non-taxation provisions (tribunal reforms) in a Money Bill — SC ruled on it in Rojer Mathew case.',
    },
    {
      section: 'Supplementary, Additional & Excess Grants',
      content:
        'Article 115 provides for: (1) Supplementary Grants — when the amount authorised by the Appropriation Act is insufficient for that year. Presented to Lok Sabha during the year. (2) Additional Grants — for new expenditure not contemplated in the budget. (3) Excess Grants — when money has been spent in excess of the amount granted for that year. Regularised after the event, on the advice of the Comptroller and Auditor General (CAG). The Public Accounts Committee (PAC) examines excess grants. Article 116 provides for: (1) Vote on Account — advance grant for part of the financial year (usually 2 months) when the full budget cannot be passed before April 1. (2) Vote of Credit — like a blank cheque for unexpected demand (e.g., war). (3) Exceptional Grant — expenditure not part of any financial year\'s service. These are instruments of parliamentary financial control — ensuring the executive cannot spend without legislative approval.',
    },
    {
      section: 'Budget Speeches & Historic Budgets',
      content:
        'Notable budgets in India\'s history: (1) 1947 — R.K. Shanmukham Chetty: post-Partition budget, partition costs, refugee rehabilitation. (2) 1958 — T.T. Krishnamachari resigned over Mundhra scandal (LIC investment impropriety). (3) 1973 — Y.B. Chavan: "Black Budget" during oil crisis and drought. (4) 1991 — Manmohan Singh: Liberalisation budget — reduced peak customs from 355% to 150%, opened 11 sectors to FDI, abolished industrial licensing for most sectors. (5) 1997 — P. Chidambaram: "Dream Budget" — reduced income tax to 30%, Voluntary Disclosure of Income Scheme (VDIS). (6) 2005 — P. Chidambaram: Introduced NREGA in budget. (7) 2017 — Arun Jaitley: Merged Railway and General Budget. (8) 2020 — Nirmala Sitharaman: Longest-ever budget speech (2 hours 40 minutes). (9) 2021 — First paperless budget presented on a tablet.',
    },
    {
      section: 'Parliamentary Committees & Budget Scrutiny',
      content:
        'Key committees for budget oversight: (1) Estimates Committee (30 members, all from Lok Sabha): Examines if spending is within approved limits and suggests economies. (2) Public Accounts Committee (PAC, 22 members — 15 LS + 7 RS): Examines audit reports of CAG. Most important post-expenditure scrutiny body. Chaired traditionally by an opposition leader. (3) Committee on Public Undertakings (22 members — 15 LS + 7 RS): Examines PSU reports and CAG audit. (4) 24 Department-related Standing Committees (16 each, 21 from LS + 10 from RS): Pre-budget scrutiny of Demands for Grants. Their reports are recommendatory, not binding. (5) Standing Committee on Finance: Specifically examines banking, taxation, economic policy. CAG (Article 148) is the external auditor — audits all accounts of the Union and states. CAG\'s reports form the basis of PAC examination.',
    },
    {
      section: 'Outcome Budget & Performance-Based Budgeting',
      content:
        'Outcome Budget was introduced in 2005-06 to shift focus from inputs/outputs to outcomes. Each ministry must specify physical targets alongside financial allocations. Example: rather than just "Rs 10,000 crore for highways," the outcome metric is "10,000 km of highways to be constructed." The Finance Ministry compiles and presents it to Parliament. Criticisms: outcome metrics are often vague, difficult to measure, and rarely enforced. Performance-based budgeting (PBB) takes this further — linking funding to achieved results. Zero-Based Budgeting (ZBB) — every item must be justified from scratch each year (not just incremental changes). India experimented with ZBB in 1986-87 under Rajiv Gandhi but abandoned it due to administrative complexity. Gender Budgeting: Since 2005-06, a separate Gender Budget Statement shows allocations for women. Part A: 100% women-specific schemes. Part B: At least 30% for women. Green Budgeting introduced in 2023 to track climate-relevant expenditure.',
    },
    {
      section: 'Off-Budget Borrowing & Fiscal Transparency',
      content:
        'Off-budget borrowings are loans taken by PSUs or special purpose vehicles on behalf of the government, which do not appear in the fiscal deficit calculation. Examples: FCI borrowing from National Small Savings Fund (NSSF) for food subsidy (peak Rs 3.86 lakh crore in FY21); NHAI bonds for highway construction; Air India revival funding. The CAG has repeatedly flagged off-budget items as disguised fiscal deficit. The 15th Finance Commission (N.K. Singh) recommended treating PSU borrowings backed by government guarantee as part of fiscal deficit. Budget 2020-21 began clearing FCI\'s off-budget backlog. By FY24, most off-budget items were brought on-budget, improving fiscal transparency. The debt-to-GDP ratio appears higher after on-budgeting but reflects truer fiscal position. States also resort to off-budget borrowing (UDAY bonds for discoms, state guarantee-backed SPV loans) — the 15th FC penalised this practice.',
    },
    {
      section: 'Centrally Sponsored Schemes (CSS) vs Central Sector Schemes',
      content:
        'Central Sector Schemes: 100% funded by Centre, implemented by central ministries/agencies. Examples: PM-KISAN (Rs 6,000/year to farmers), PM MUDRA Yojana, Startup India, PLI schemes. Central Sector scheme expenditure: ~Rs 14.94 lakh crore (FY25 BE). Centrally Sponsored Schemes (CSS): Jointly funded by Centre and states in specified ratios. Standard sharing: 60:40 (Centre:State) for general category states, 90:10 for NE and hill states. Examples: MGNREGA, Samagra Shiksha, National Health Mission, PM Awas Yojana, Jal Jeevan Mission, National Rural Livelihoods Mission. CSS expenditure: ~Rs 4.15 lakh crore (FY25 BE). The Sub-Committee of CMs on CSS Rationalisation (NITI Aayog, 2015) recommended reducing CSS from 66 to 28 umbrella schemes. Key issue: states with limited fiscal space struggle to provide matching contributions, leading to implementation delays.',
    },
    {
      section: 'Defence Budget',
      content:
        'India\'s defence budget (FY25 BE): Rs 6.22 lakh crore (~1.9% of GDP, ~13% of total expenditure). Components: Revenue (salaries, stores, maintenance): ~Rs 3.63 lakh crore (~58%). Capital (weapons, equipment, aircraft, ships): ~Rs 1.72 lakh crore (~28%). Pensions: ~Rs 87,000 crore (~14%). Defence pensions have risen sharply after OROP (One Rank One Pension, 2015). India is the 4th largest defence spender globally (after US, China, Russia). Capital procurement share is low compared to peers — Personnel costs consume ~60% of the defence budget. Reforms: Defence Acquisition Procedure (DAP 2020) prioritises Make in India. Rs 1.27 lakh crore earmarked for domestic procurement (FY25). Defence Industrial Corridors in UP (Aligarh-Lucknow-Jhansi) and Tamil Nadu (Chennai-Salem-Coimbatore). Agnipath scheme (2022) aims to reduce long-term pension burden by introducing 4-year short-service military recruitment.',
    },
    {
      section: 'RBI Surplus Transfer',
      content:
        'RBI transfers surplus to the government annually as a non-tax revenue receipt. This is the profit after meeting RBI\'s own operational costs and maintaining reserves. The Bimal Jalan Committee (2019) recommended maintaining a Contingency Risk Buffer (CRB) of 5.5-6.5% of RBI\'s balance sheet. If reserves exceed this, the excess can be transferred. Record transfer: Rs 2.11 lakh crore (FY24 — May 2024), including Rs 1 lakh crore from revaluation of forex reserves. This was ~0.7% of GDP and significantly helped the fiscal deficit target. Past controversy: In 2018-19, the government sought Rs 3.6 lakh crore from RBI reserves, leading to tensions and the resignation of Governor Urjit Patel. The Jalan Committee resolved this by setting a rule-based framework. RBI surplus is inherently volatile — depends on forex market operations, interest income from G-Secs, and revaluation gains. Relying heavily on RBI surplus for fiscal deficit management is considered fiscally imprudent.',
    },
    {
      section: 'Gender Budget & Child Budget',
      content:
        'Gender Budget Statement (GBS) was introduced in 2005-06. Part A: Schemes with 100% allocation for women (e.g., Beti Bachao Beti Padhao, PM Matru Vandana Yojana, Mahila Shakti Kendra). Part B: Schemes with at least 30% allocation for women (e.g., MGNREGA, PMAY, NHM). Total gender budget (FY25 BE): ~Rs 3.27 lakh crore. Child Budget Statement: Tracks allocations for children (0-18 years). Total child budget (FY25 BE): ~Rs 1.05 lakh crore — about 2.3% of total expenditure. Both are analytical tools for tracking budget allocations by demographic category, not separate budgets. The SC Nutrition Budget was introduced in 2021 to track allocations for Scheduled Castes. A similar Tribal Sub-Plan budget exists for STs. These demographic budgets enhance transparency but are criticised for merely repackaging existing allocations without additionality.',
    },
    {
      section: 'Union Budget vs State Budgets',
      content:
        'Key differences: (1) Article 112 governs the Union Budget; Article 202 governs State Budgets. (2) Union Budget presented by the Finance Minister; State Budget by the State Finance Minister. (3) Rajya Sabha cannot vote on Demands for Grants; State Legislative Councils (where they exist) also cannot vote on Demands. (4) Vote on Account (Art. 116) is for Union; Art. 206 is the state equivalent. (5) Contingency Fund: Union — Rs 500 crore (President); State — varies (Governor). (6) States cannot run fiscal deficits exceeding limits set by their FRBM Acts (typically 3% of GSDP), but many breach this limit. (7) States depend on central transfers for 35-60% of their revenue (FC devolution + grants + CSS share). (8) States cannot borrow externally without Centre\'s consent (Art. 293). (9) States\' tax revenue is limited to SGST, state excise (alcohol), stamp duty, motor vehicle tax, and profession tax.',
    },
    {
      section: 'Budget Reforms — Digital & Process',
      content:
        'Key reforms: (1) Budget date changed from last working day of February to February 1 (2017) — allows implementation from April 1. Earlier, the colonial practice of 5 PM presentation (to align with London morning) was changed to 11 AM by Yashwant Sinha (2000). (2) Railway Budget merged with General Budget (2017) — Bibek Debroy Committee recommendation. (3) Plan/Non-Plan classification abolished (2017). (4) Paperless budget from 2021 — "Union Budget Mobile App" for MPs and public. (5) Outcome Budget introduced (2005-06). (6) Medium-Term Expenditure Framework Statement mandated under FRBM. (7) Budget Allocation & Expenditure monitored through PFMS (Public Financial Management System) — real-time tracking. (8) Direct Benefit Transfer (DBT) for subsidies — Rs 34 lakh crore transferred since 2013, saving Rs 3.48 lakh crore by eliminating ghosts and duplicates. (9) Single Nodal Account (SNA) for CSS — states must spend from Centre\'s designated account, improving fund flow transparency.',
    },
    {
      section: 'Black Budget, White Paper & Interim Budget',
      content:
        'Black Budget: The 1973-74 budget presented by Y.B. Chavan during the oil crisis and drought — deficit financing led to high inflation and was termed "Black Budget" by the opposition. White Paper on Indian Economy: Presented in 2024 by the NDA government after elections, documenting fiscal mismanagement claims about the UPA era (2004-14) — including high fiscal deficit, policy paralysis, and corruption. White Papers are not part of the regular budget process but are political documents. Interim Budget: A full budget presented by an outgoing government before elections. Morarji Desai presented the most interim budgets (10 budgets total — 6 annual + 4 interim). Convention is that the outgoing government does not make major policy changes in an interim budget (a convention, not a rule). Vote on Account is more limited — only expenditure permission, no taxation changes. The 2024 Interim Budget (February) was followed by a full budget in July after the general elections.',
    },
    {
      section: 'Fiscal Federalism & Budget',
      content:
        'Vertical imbalance: Centre collects ~62% of all taxes but shares 41% of divisible pool with states (15th FC). Horizontal imbalance: Wide variation in fiscal capacity among states — Bihar\'s per capita income is 1/5th of Haryana\'s. Instruments of fiscal transfers: (1) Tax devolution (41% of divisible pool — largest source). (2) Finance Commission Grants (revenue deficit grants, sector-specific grants, performance-based grants). (3) CSS and Central Sector Scheme funding. (4) 50-year interest-free capex loans (since FY23). States\' grievances: (1) Cess/surcharge not shared — now 23% of gross tax revenue vs 6% in 2011-12. (2) GST compensation ended June 2022. (3) Conditional grants reduce states\' spending autonomy. (4) Southern states (TN, Karnataka, Kerala) argue they are penalised for better demographic and fiscal performance. NITI Aayog\'s Governing Council is the forum for Centre-State fiscal dialogue. The Inter-State Council (Art. 263) also discusses fiscal matters.',
    },
    {
      section: 'Global Comparisons — Budget Practices',
      content:
        'USA: Budget proposed by the President, modified and passed by Congress. Congressional Budget Office (CBO) provides independent fiscal analysis. Government shutdowns occur when Congress fails to pass appropriation bills. UK: Budget presented by the Chancellor of the Exchequer. The "Red Box" tradition. Office for Budget Responsibility (OBR) provides independent forecasts — India lacks a comparable body. Germany: "Schwarze Null" (Black Zero) — constitutional balanced budget rule (debt brake). India\'s FRBM is statutory, not constitutional. Japan: Highest government debt-to-GDP (~263%) but mostly domestically held. India\'s debt (~57% Centre + ~29% States) is also largely domestic. EU: Stability and Growth Pact — 3% fiscal deficit and 60% debt-to-GDP limits for Eurozone members (frequently breached). India\'s fiscal deficit targets (below 4.5% by FY26) are broadly comparable. Australia: Charter of Budget Honesty mandates fiscal transparency — similar to India\'s FRBM requirements. Key lesson: Independent fiscal councils (US CBO, UK OBR) improve fiscal discipline — India\'s N.K. Singh Committee recommended creating one.',
    },
    {
      section: 'National Small Savings Fund (NSSF) & Budget',
      content:
        'NSSF is a fund in the Public Account of India into which all small savings collections (PPF, NSC, Sukanya Samriddhi, Senior Citizens Savings Scheme, Post Office deposits) are credited. NSSF corpus: ~Rs 30 lakh crore. NSSF lends to: (1) Central Government — for meeting fiscal deficit. (2) State Governments — 15th FC recommended NSSF loans only to willing states (not mandatory). (3) FCI — for food subsidy (being wound down). NSSF interest rates are benchmarked to G-Sec yields (reviewed quarterly) but are set slightly higher for political reasons — creating a fiscal cost. Small savings competition with bank deposits affects monetary policy transmission — when NSSF rates are higher than bank FDs, funds flow to small savings, reducing banks\' deposit base. This is a structural issue in India\'s financial system. PPF interest rate: 7.1% (2024), NSC: 7.7%, Sukanya Samriddhi: 8.2% — all tax-advantaged.',
    },
    {
      section: 'Budget & Monetary Policy Coordination',
      content:
        'The budget and monetary policy must be coordinated for macroeconomic stability. Government borrowing (fiscal deficit) affects: (1) Interest rates — higher borrowing crowds out private investment (crowding-out effect). (2) Liquidity — RBI must manage liquidity impact of government spending and borrowing. (3) Inflation — large fiscal deficits financed by money creation are inflationary (monetisation). Before 1997: RBI automatically monetised the government\'s deficit through ad-hoc Treasury Bills. The Supplementary Agreement (1997) between RBI and the government abolished ad-hoc Treasury Bills — a landmark reform. Now: Government borrows through dated G-Secs (market borrowing), and RBI manages the market via OMOs (Open Market Operations) and LAF. RBI\'s Ways and Means Advances (WMA) provide short-term credit to the government for cash flow mismatches — not for deficit financing. The government\'s borrowing programme is announced in the budget and coordinated with RBI\'s liquidity management calendar.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Union Budget is one of the most important topics for all exams, especially in the months following the budget. UPSC tests constitutional provisions, deficit concepts, and FRBM Act. SSC and banking exams ask about the first budget, budget documents, and deficit definitions. Current affairs questions on fiscal deficit targets and major budget announcements are tested across all exams.',
}
