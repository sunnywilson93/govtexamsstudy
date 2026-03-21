import type { SubjectConcept } from '@/types/subject-notes'

export const labourReformsConcept: SubjectConcept = {
  topic: 'labour-reforms',
  title: 'Labour Reforms & Codes',
  description:
    'Consolidation of 29 central labour laws into 4 Labour Codes, gig economy regulation, PLFS employment data, EPFO/ESIC architecture, skilling programmes, and the informal-to-formal transition challenge.',
  category: 'Social & Contemporary',
  keyDates: [
    { year: '1926', event: 'Trade Unions Act enacted \u2014 first labour law in India; gave workers the right to form unions' },
    { year: '1936', event: 'Payment of Wages Act \u2014 regulated timely wage payment to factory workers' },
    { year: '1947', event: 'Industrial Disputes Act enacted \u2014 regulated layoffs, retrenchment, and closure of industrial establishments' },
    { year: '1948', event: 'Minimum Wages Act and Factories Act enacted \u2014 post-independence labour protection framework' },
    { year: '1952', event: 'Employees\' Provident Fund and Miscellaneous Provisions Act \u2014 mandatory provident fund for formal workers' },
    { year: '1961', event: 'Maternity Benefit Act enacted \u2014 provided 12 weeks maternity leave (later raised to 26 weeks in 2017)' },
    { year: '1970', event: 'Contract Labour (Regulation and Abolition) Act \u2014 regulated employment of contract workers' },
    { year: '1976', event: 'Equal Remuneration Act \u2014 equal pay for equal work regardless of gender' },
    { year: '2005', event: 'MGNREGA enacted \u2014 100 days guaranteed wage employment for rural households' },
    { year: '2017', event: 'Periodic Labour Force Survey (PLFS) started by NSO \u2014 replaced quinquennial Employment-Unemployment Survey' },
    { year: '2019', event: 'Code on Wages enacted \u2014 first of 4 labour codes; consolidated 4 laws' },
    { year: '2020', event: 'Three remaining Labour Codes enacted: Industrial Relations Code, Social Security Code, and OSH Code' },
    { year: '2021', event: 'e-Shram portal launched \u2014 national database for unorganised workers' },
    { year: '2024', event: 'PLFS FY24: Unemployment rate 3.2%; LFPR 60.1%; Female LFPR 41.7%' },
    { year: '1923', event: 'Workmen\'s Compensation Act \u2014 first social insurance law; compensation for industrial injuries' },
    { year: '1946', event: 'Industrial Employment (Standing Orders) Act \u2014 formal conditions of employment for factory workers' },
  ],
  notes: [
    {
      section: 'Labour Codes \u2014 Overview of Consolidation',
      content:
        'India\'s 29 central and 100+ state labour laws \u2014 many colonial-era \u2014 have been consolidated into 4 Codes. (1) Code on Wages 2019: consolidates Minimum Wages Act 1948, Payment of Wages Act 1936, Payment of Bonus Act 1965, Equal Remuneration Act 1976. Introduces a universal "floor wage" set by Centre (states cannot go below); currently Rs 178/day (yet to be formally notified under the Code). Gender-neutral equal remuneration. Electronic payment mandatory. Covers all employees irrespective of wage ceiling. (2) Industrial Relations Code 2020: consolidates Industrial Disputes Act 1947, Trade Unions Act 1926, Standing Orders Act 1946. Standing orders apply to 300+ worker units (raised from 100). Retrenchment/closure permission threshold raised from 100 to 300 workers. Fixed-term employment formalised. Worker reskilling fund (15 days wages). 14-day strike notice for all establishments. (3) Social Security Code 2020: consolidates 9 laws (EPF, ESI, Maternity, Gratuity, Unorganised Workers SS Acts). First-ever coverage for gig and platform workers. (4) OSH Code 2020: consolidates 13 laws (Factories, Mines, Contract Labour, Building Workers Acts). Single registration for establishments.',
    },
    {
      section: 'Key Reforms in Labour Codes',
      content:
        'Transformative changes: (1) Threshold reform \u2014 retrenchment/closure permission raised from 100 to 300 workers. Establishments up to 300 can freely hire and fire. Long-standing industry demand because the rigid 100 threshold incentivised firms to stay small or use contract labour. Expected to encourage formalisation and scaling. (2) Fixed-term employment \u2014 workers get all permanent-employee benefits (leave, pro-rata gratuity, social security) for the contract duration. Employers gain flexibility without pushing workers into informality. (3) Gig and platform workers \u2014 Social Security Code defines "gig worker" and "platform worker" for the first time. A Social Security Fund will be created from aggregator contributions. National database mandated. NITI Aayog (2022): 7.7 million gig workers, projected 23.5 million by 2029-30. (4) Working hours \u2014 OSH Code allows up to 12 hours/day (max 48/week), enabling 4-day work weeks. (5) Contract labour \u2014 prohibited in core activities under OSH Code. (6) Inter-state migrants \u2014 mandatory registration, travel allowance, equal wages, voting facilitation.',
    },
    {
      section: 'Trade Unions & Collective Bargaining',
      content:
        'Trade Unions Act 1926 (now under IR Code). Key changes: (1) Negotiating Union/Council \u2014 if one union has 51%+ members, it becomes sole negotiating union; otherwise a council is formed from unions with 20%+ membership. (2) Registration threshold \u2014 only unions with 10% membership (or 100 members, whichever less) qualify. (3) Standing Orders \u2014 now apply to 300+ worker units (from 100+). (4) Strikes/lockouts \u2014 14-day advance notice for all establishments (earlier only public utilities). No action during conciliation or within 7 days of conclusion. Penalty: up to Rs 50,000 fine or 1 month imprisonment for illegal strike; Rs 50,000 for illegal lockout. Major federations: BMS (RSS-affiliated, largest), INTUC (Congress), AITUC (CPI), HMS, CITU (CPM). Central unions oppose the Codes \u2014 argue raised thresholds undermine worker protection.',
    },
    {
      section: 'Industrial Disputes & Resolution Mechanism',
      content:
        'IR Code 2020 framework: (1) Grievance Redressal Committee \u2014 mandatory in 20+ worker establishments. (2) Conciliation \u2014 government officers mediate; compulsory in public utilities. (3) Arbitration \u2014 voluntary, binding. (4) Industrial Tribunal \u2014 adjudicates unresolved disputes; can award reinstatement or compensation. (5) National Industrial Tribunal \u2014 for multi-state or nationally important disputes. Layoff: temporary inability to provide work. Retrenchment: permanent surplus termination (not disciplinary). Closure: complete shutdown. 300+ worker establishments: prior government permission needed; 15 days average pay per completed year as compensation; LIFO applies. Under 300: no permission needed, only notice and compensation. The 100-to-300 shift is the most debated reform. Critics say it will lead to mass layoffs in medium enterprises; supporters say firms will no longer artificially stay below 100.',
    },
    {
      section: 'EPFO & ESI \u2014 Social Security Architecture',
      content:
        'EPFO: India\'s largest social security body. Three schemes: (1) EPF \u2014 employee 12% + employer 12% of basic wages. Employer\'s 12%: 3.67% to EPF, 8.33% to EPS. Corpus: Rs 22+ lakh crore. 30 crore member accounts (7\u20138 crore active). (2) EPS (1995) \u2014 employer\'s 8.33% (capped at Rs 15,000 wage ceiling) + government 1.16%. Pension after 10 years service and age 58. 78 lakh pensioners (2024). Average: Rs 1,000\u20133,000/month. SC ruled (November 2022) employees can opt for higher pension on actual wages. (3) EDLI \u2014 life insurance up to Rs 7 lakh during service. Coverage: 20+ employee establishments (to be unified under Social Security Code). EPFO net new subscribers indicate formal job creation \u2014 FY24: ~14.91 lakh/month average. ESIC: medical, sickness, maternity, disability, unemployment insurance. Workers earning up to Rs 21,000/month in 10+ establishments. 14.2 crore insured. 159 hospitals, 1,500+ dispensaries. Employer 3.25%, employee 0.75%. Atal Beemit Vyakti Kalyan Yojana: unemployment insurance \u2014 50% of average daily wages for 90 days.',
    },
    {
      section: 'Gratuity, Maternity & Other Key Provisions',
      content:
        'Gratuity (now under Social Security Code): payable after 5 continuous years (relaxed for fixed-term \u2014 pro rata). Amount: 15 days wages per completed year. Max: Rs 20 lakh (tax-free for government employees). Fixed-term workers get pro-rata gratuity even below 5 years \u2014 a significant expansion. Maternity Benefit (amended 2017, under SS Code): 26 weeks for first two children (12 for third+). Mandatory cr\u00e8che in 50+ employee establishments. Work-from-home option post-leave if work permits. Commissioning (surrogacy) and adopting mothers: 12 weeks. Payment of Bonus (under Code on Wages): minimum 8.33%, max 20%. Applies to 20+ employee establishments, employees drawing up to Rs 21,000/month. Eligible after 30+ days of work. All provisions apply to all covered workers under the respective Codes, significantly widening coverage from the old fragmented regime where thresholds varied across 29 laws.',
    },
    {
      section: 'Employment Trends \u2014 PLFS Data',
      content:
        'PLFS by NSO is India\'s primary employment data source. Key indicators (FY24): LFPR: 60.1% (usual status), up from 49.8% (FY18). Female LFPR: 41.7% (up from 23.3% \u2014 18-point increase). WPR: 58.2%. Unemployment: 3.2% (down from 6.1% FY18). Youth unemployment (15-29): ~10% \u2014 significantly higher than overall. Sectoral: agriculture 45.8% (down from 49%), manufacturing 11.4%, construction 12.5%, services 30.3%. Employment status: self-employed 57.3% (includes unpaid family helpers), regular wage 21.7%, casual 21%. Quality concerns: high self-employment masks disguised unemployment. 89% work informally (no contract, no social security). NEET rate: ~28% for 15-29 year olds (predominantly young women). The female LFPR surge is debated \u2014 some attribute it to genuine participation, others to measurement changes and distress-driven entry into low-quality work.',
    },
    {
      section: 'Skill India & Employment Programmes',
      content:
        'India\'s demographic dividend (65% below 35) demands adequate skilling. (1) PMKVY: short-term training (200-600 hours) + certification. 1.4+ crore trained across PMKVY 1.0-4.0. PMKVY 4.0 targets Industry 4.0 skills (AI, robotics, IoT, drones, EVs). (2) NSDC: PPP model (GoI 49%, private 51%). 38 Sector Skill Councils set curriculum. (3) ITIs: 15,000+, 25 lakh annual intake. NCVET regulates. (4) PM Vishwakarma (2023): 18 traditional trades (carpenter, blacksmith, goldsmith, potter). Training, toolkits, Rs 1\u20132 lakh interest-free loans. (5) DDU-GKY: placement-linked training for rural BPL youth. (6) PM Internship Scheme (2024): 1 crore internships at top 500 companies. Rs 5,000/month + Rs 6,000 one-time. (7) ELI schemes (Budget 2024-25): Scheme A \u2014 1 month salary (up to Rs 15,000) for first-time employees; Scheme B \u2014 incentives for manufacturing hiring; Scheme C \u2014 employer EPFO reimbursement.',
    },
    {
      section: 'MGNREGA & Rural Employment',
      content:
        'MGNREGA (2005): 100 days guaranteed wage employment per household per year. Key features: (1) demand-driven \u2014 work within 15 days of application; unemployment allowance if not. (2) Unskilled manual work \u2014 water conservation, drought-proofing, irrigation, land development, rural connectivity. (3) 60:40 wage-material ratio. (4) Mandatory gram sabha social audit. (5) At least 1/3 women workers (actual: ~55%). FY25 allocation: Rs 86,000 crore. ~7 crore active job cards. National average wage: Rs 267/day (Rs 363 Haryana, Rs 220 Bihar). Annual person-days: ~260\u2013300 crore. Debates: (1) crucial safety net during lean season and shocks (essential during COVID); (2) critics say it reduces farm labour supply; (3) 40%+ payments delayed beyond 15 days; (4) asset quality often poor; (5) convergence with PMAY, PMGSY, JJM needed. Periodic demands: raise guarantee to 150 days and extend to urban areas (Rajasthan has a state-level urban employment guarantee).',
    },
    {
      section: 'Informal Economy & Formalisation',
      content:
        'India\'s workforce: 89% informal employment (PLFS). Informal sector: ~50% of GDP, 89% of workers \u2014 extremely low productivity. Informal workers lack contracts, social security, minimum wage protection, workplace safety, and leave. Formalisation measures: (1) GST (2017) \u2014 1.46 crore registered businesses (2024). (2) PM Mudra Yojana \u2014 formal micro-credit; 44.46 crore loans (Shishu/Kishore/Tarun). (3) e-Shram (2021) \u2014 30 crore registered unorganised workers with Rs 2 lakh accidental insurance. Categories: construction, domestic, gig, street vendors, home-based, agricultural. (4) PM-SYM \u2014 Rs 55\u2013200/month contribution (government matches); Rs 3,000/month pension after 60. 46 lakh subscribers. (5) PMJJBY \u2014 Rs 436/year for Rs 2 lakh life cover; 16.2 crore subscribers. (6) PMSBY \u2014 Rs 20/year for Rs 2 lakh accident cover; 34.5 crore subscribers. The Social Security Code aims for a universal floor, but funding social security for 400+ million informal workers \u2014 mostly self-employed or in micro-enterprises without employer contributions \u2014 remains the central challenge.',
    },
    {
      section: 'Gig Economy & Platform Workers',
      content:
        'India\'s gig economy: 7.7 million workers (NITI Aayog 2022), projected 23.5 million by 2029-30. Platforms: Zomato, Swiggy, Uber, Ola, Urban Company, Dunzo. Issues: (1) Platforms classify workers as "partners," avoiding labour law obligations (minimum wages, PF, ESI, gratuity, leave). (2) Social Security Code 2020 \u2014 first legal definition and coverage. Platforms must register, contribute to Social Security Fund, maintain worker database. (3) Rajasthan Platform Based Gig Workers Act 2023 \u2014 India\'s first state gig law. Welfare board, 1\u20132% transaction fee, social security fund, grievance redressal. (4) Karnataka drafted a Gig Workers Bill. (5) Globally: EU Directive on Platform Work (2024) presumes employment; UK SC ruled Uber drivers are "workers." India\'s approach via the SS Code is more limited \u2014 social security but not employee classification. (6) Challenges: algorithmic management, income volatility, no minimum earnings guarantee, no paid leave, high road accident rates for delivery workers.',
    },
    {
      section: 'Labour Codes \u2014 Implementation Status & Critique',
      content:
        'All 4 Codes were enacted (Wages 2019, others 2020) but implementation requires: (1) Central Rules \u2014 drafts published, final rules pending. (2) State Rules \u2014 labour is on the Concurrent List; states must frame rules. As of 2024, most states have not finalised all four. Only a few (UP, MP, Gujarat, Karnataka) notified rules for some Codes. Target dates have slipped repeatedly since 2021. Delay causes: complex transition from 29 laws, trade union opposition (BMS, INTUC, AITUC, CITU all protested), political sensitivity (raising thresholds and allowing 12-hour days are unpopular), election cycles. Criticisms: (1) "hire and fire" \u2014 300-worker threshold eases layoffs in medium enterprises; (2) reduced contract worker protection; (3) weak gig provisions \u2014 social security but no employment status or minimum wages; (4) 12-hour workday health concerns. Supporters: simplification cuts compliance burden; flexibility encourages formal hiring and FDI; rigid laws have long been cited as barriers to manufacturing growth.',
    },
    {
      section: 'Demographic Dividend & Employment Challenge',
      content:
        'India needs 8\u201310 million non-farm jobs annually (CMIE). Formal creation (EPFO): 1.5\u20132 million/year \u2014 the gap fills with informal and self-employment. Working-age population (15-64): ~68% \u2014 dividend window until ~2050. Challenges: (1) Manufacturing stagnated at 11\u201312% of employment despite Make in India \u2014 "premature deindustrialisation." (2) Jobless growth \u2014 GDP at 6\u20137% but automation and capital intensity reduce labour absorption. (3) Education-employment mismatch \u2014 48% of graduates "unemployable" (India Skills Report); ITI training has low industry relevance. (4) Regional disparities \u2014 UP, Bihar, MP, Rajasthan have high youth unemployment; TN, Karnataka, Gujarat have better outcomes. (5) Female participation \u2014 despite rising LFPR, quality is low \u2014 concentrated in unpaid family work, agriculture, and low-wage informal jobs. Success depends on simultaneously achieving flexibility (for investment) and protection (for workers) \u2014 a balance no developing country has easily struck.',
    },
    {
      section: 'Minimum Wages \u2014 Floor Wage & Methodology',
      content:
        'Code on Wages 2019 introduces a statutory "floor wage" \u2014 no state can set minimum wages below it. Currently Rs 178/day (yet to be formally declared under the Code). How minimums are set: committee method (tripartite \u2014 government, employers, workers) or notification method. Wages are fixed by skill level (unskilled to highly skilled), zone, and work type. VDA component revised periodically based on CPI. Pre-Code problems: 1,709 different rates across states; 45% of wage workers paid below minimum wages; only "scheduled employments" covered. The Code extends minimum wage to ALL employees regardless of sector or type. The Anoop Satpathy Committee (2019) recommended Rs 375/day as national minimum based on 2,400 kcal/day for 3.6 consuming units + housing, education, medical, and non-food \u2014 about Rs 9,750/month. The gap between the current floor (Rs 178) and the recommended minimum (Rs 375) highlights the political difficulty of reform.',
    },
    {
      section: 'Contract Labour & Outsourcing',
      content:
        'Contract Labour Act 1970 (now under OSH Code). India has ~4 crore contract workers. The original Act regulated (not abolished) contract labour in 20+ worker establishments. Principal employer remains liable for welfare if contractor fails. OSH Code changes: (1) contract labour prohibited in "core activities" \u2014 but "core" is not precisely defined, leaving room for litigation; incidental activities (security, catering, cleaning) can still use contract labour. (2) Establishments under 50 workers are exempt (reduced threshold). (3) Principal employer liability continues. (4) Single registration replaces multiple licences. The system has been criticised for creating a parallel low-wage workforce \u2014 many industries (auto, electronics, FMCG) use 40\u201360% contract workers earning 30\u201350% less than permanent staff for the same work. SAIL v. National Waterfront Workers Union (SC, 2001): abolishing contract labour does not automatically absorb workers into the principal employer\'s rolls.',
    },
    {
      section: 'Inter-State Migrant Workers',
      content:
        'India has an estimated 14 crore internal migrants (Census 2011; actual figures likely higher). COVID exposed their vulnerability \u2014 an estimated 1 crore walked home during the 2020 lockdown, highlighting the absence of portable benefits. OSH Code provisions: (1) mandatory registration by employer; (2) journey allowance from home to workplace and back; (3) equal wages to local workers; (4) one annual return journey at employer\'s expense; (5) toll-free helpline; (6) voting facilitation via postal ballot. Pre-Code: the Inter-State Migrant Workmen Act 1979 was almost entirely unenforced \u2014 fewer than 50,000 registered despite 14+ crore migrants. ONORC enables PDS access in any state for 80+ crore beneficiaries. e-Shram portal: 30 crore registrations (many migrants), Rs 2 lakh accidental insurance. Core challenge: most migration is informal and undocumented \u2014 construction, domestic work, brick kiln, and agricultural workers remain highly vulnerable.',
    },
    {
      section: 'Occupational Safety, Health & Working Conditions',
      content:
        'OSH Code 2020 consolidates 13 laws. Key provisions: (1) Single registration (replaces multiple). (2) Max 8 hours/day, 48 hours/week \u2014 but daily hours can extend to 12 with government notification (enables 4-day week). (3) Overtime at 2x ordinary wage. (4) Annual leave: 1 day per 20 days worked. (5) Women allowed in all establishments including night shifts (with safety, transport, consent). Previously Factories Act prohibited women\'s night work. (6) National Board for OSH advises on safety standards. (7) Building Workers Welfare Cess (1% of construction cost) \u2014 Rs 52,000+ crore collected but only 30\u201340% disbursed. 5.5+ crore registered construction workers. (8) DGMS regulates mines safety; ~3,000+ mines; fatality rate declining but still 0.4\u20130.5 per 1,000 workers. (9) Beedi, plantation, and migrant workers brought under one framework. Consolidation reduces 13 compliance systems to one, easing regulatory burden for multi-establishment employers.',
    },
    {
      section: 'Women in the Workforce \u2014 Legal Framework & Barriers',
      content:
        'Legal protections: (1) Equal pay under Code on Wages. (2) Maternity: 26 weeks (first 2 children); cr\u00e8che mandatory (50+ employees). (3) POSH Act 2013 \u2014 ICC mandatory for 10+ worker establishments; LCC for smaller ones. (4) Night shifts allowed under OSH Code with safety provisions. Female LFPR: 23.3% (FY18) \u2192 41.7% (FY24). The 18-point increase is debated. Possible factors: (1) genuine participation increase, especially self-employment; (2) PLFS captures unpaid family work better than older surveys; (3) distress-driven entry into low-wage work. Quality concerns: 85% in self-employment or casual labour; only 15% in regular wage. 60%+ in agriculture. Unpaid family work inflates LFPR without income generation. Indian women spend 6x more on unpaid domestic work than men (Time Use Survey 2019). India ranks 127/146 on the Global Gender Gap Index 2023 (WEF) \u2014 142nd in economic participation.',
    },
    {
      section: 'Child Labour & Bonded Labour',
      content:
        'Child Labour Amendment Act 2016: complete ban on employment below 14 in all occupations. Adolescents (14-18) prohibited in hazardous work but allowed in non-hazardous and family enterprises. Penalty: 6 months to 2 years + Rs 20,000\u201350,000 fine. Census 2011: 10.1 million child labourers. UNICEF estimates declined to 3.3 million (2020) \u2014 COVID may have reversed gains. NCLP provides special schools for rescued children. PENCIL portal tracks complaints. Bonded Labour Abolition Act 1976: punishable by up to 3 years + Rs 2,000 fine. Rehabilitation: Rs 1 lakh (adult), Rs 2 lakh (child/adolescent), Rs 3 lakh (women/children in extreme cases). Problem areas: brick kilns, carpet weaving, beedi rolling, stone quarrying, domestic work. Bandhua Mukti Morcha v. Union of India (SC, 1984): identification, release, and rehabilitation is a fundamental right under Articles 21 and 23. Despite legal frameworks, enforcement is weak \u2014 only 3.13 lakh bonded labourers identified since 1976.',
    },
    {
      section: 'International Labour Standards \u2014 ILO & India',
      content:
        'India is a founding ILO member (1919). Ratified 47 of 190 Conventions. Key ratifications: Forced Labour (No. 29, 1954), Abolition of Forced Labour (No. 105, 2000), Equal Remuneration (No. 100, 1958), Discrimination (No. 111, 1960), Minimum Age (No. 138, 2017), Worst Forms of Child Labour (No. 182, 2017). India has NOT ratified Freedom of Association (No. 87) and Right to Organise (No. 98). India argues its Constitution (Article 19(1)(c)) and domestic laws already cover these. Critics say non-ratification signals reluctance on union rights. Of ILO\'s 8 Fundamental Conventions, India has ratified 6 (missing No. 87 and 98). India\'s DWCP aligns national policies with ILO\'s Decent Work Agenda (4 pillars: employment creation, social protection, rights at work, social dialogue). India\'s Labour Codes are partly influenced by ILO but diverge on thresholds and gig worker classification.',
    },
    {
      section: 'Wages & Inequality in India',
      content:
        'India\'s wage structure shows extreme inequality. Regular/salaried: Rs 20,000\u201325,000/month average (PLFS FY24) \u2014 but government employees earn 2\u20133x more than private regular workers. Casual labourers: Rs 8,000\u201310,000/month. Self-employed: highly variable. 7th Pay Commission (2016): minimum Rs 18,000/month, max Rs 2.5 lakh (ratio 1:13.85). Successive Pay Commissions raised government wages significantly, creating a large premium over private sector. Minimum wage violations: ILO estimates 45% of wage workers earn below minimums. Higher compliance in Kerala, Delhi; lower in Bihar, Jharkhand, Odisha. Real wage growth: 2\u20133% annually, below GDP growth. Oxfam 2024: top 1% own 40.1%, bottom 50% own 6.4%. Labour\'s GDP share fell from ~38% (2000) to ~33% (2023) \u2014 growth disproportionately benefits capital owners. Addressing inequality requires effective minimum wage enforcement, collective bargaining, progressive taxation, and social transfers.',
    },
    {
      section: 'Plantation Labour & Sector-Specific Laws',
      content:
        'Plantation Labour Act 1951 (under OSH Code): covers tea, coffee, rubber, cardamom, cinchona plantations with 15+ workers. Employer must provide housing, medical facilities, canteen, education, cr\u00e8che. Tea plantations are the largest organised employer \u2014 3.5+ million workers (Assam, WB, TN, Kerala). Women: 50\u201360%. Wages among the lowest in organised sector (Rs 200\u2013350/day). Garden closures in WB and Assam have caused humanitarian crises \u2014 workers depend on plantations for housing, food, and services. Beedi Workers Act 1966: 4.4+ million workers, predominantly home-based women. Beedi Welfare Fund (cess-funded) provides housing, health, education. The OSH Code consolidates these into a single framework but preserves special welfare provisions.',
    },
    {
      section: 'Domestic Workers & Home-Based Workers',
      content:
        'India has an estimated 5\u20136 million domestic workers (ILO estimates vary between 3.9 and 50 million). 80%+ women, often migrants in urban households. Not covered by most labour laws \u2014 only 10\u201312 states notified minimum wages for domestic work. Not under Factories Act, EPFO, or ESIC. Social Security Code 2020 includes "domestic worker" as "unorganised worker" \u2014 enabling e-Shram registration and scheme access. India has NOT ratified ILO Convention 189 (Domestic Workers, 2011) \u2014 only 36 countries have. Draft National Policy for Domestic Workers proposed inclusion under all labour laws but was never finalised. Home-based workers (garment sub-contracting, incense sticks, papad): estimated 5+ million. Classified as "own-account" or "self-employed," denying them labour law protections.',
    },
    {
      section: 'Agricultural Labour',
      content:
        'Agriculture employs 45.8% but contributes only ~15% of GDP \u2014 extremely low per-worker productivity. Agricultural labourers are the most vulnerable: (1) seasonal (3\u20136 months peak), disguised unemployment in lean season; (2) no contracts, no social security, no leave; (3) minimum wages are the lowest across all scheduled employments (Rs 200\u2013300/day in most states); (4) women constitute 70% but rarely hold land titles, credit, or subsidy access. MGNREGA is the de facto lean-season employment guarantee; credited with raising agricultural wages 5\u20138% in well-implemented areas. PM-KISAN (Rs 6,000/year) covers land-owning farmers, NOT the 55% who are landless labourers. PM-SYM is the only available pension but coverage is poor (46 lakh subscribers vs 15+ crore labourers). Structural causes: land reform failures, holding fragmentation, absence of non-farm rural employment.',
    },
    {
      section: 'Industrial Relations \u2014 Strikes, Lockouts & Key Disputes',
      content:
        'Landmark disputes: (1) Bombay Textile Strike (1982-83) \u2014 Datta Samant-led, 2.5 lakh workers, 18 months, 50+ mill closures. Marked organised labour\'s decline. (2) Maruti Suzuki Manesar (2012) \u2014 workers killed a manager over contract labour conditions; 148 convicted. Exposed permanent-contract worker tensions. (3) Wistron/Apple supplier Kolar (2020) \u2014 contract workers rioted over unpaid wages and 12-hour shifts; Apple tightened supplier standards. Strike trends: person-days lost declined from 33 million (2000) to 1\u20132 million recently \u2014 reflecting both improved relations and reduced union power. IR Code\'s 14-day notice further restricts spontaneous action. Stoppages account for <0.01% of organised-sector person-days. Trade union membership as share of organised workforce fell from 40%+ (1980s) to under 15%.',
    },
    {
      section: 'Labour in SEZs & Export Zones',
      content:
        'SEZ Act 2005: SEZs offer labour relaxations alongside tax incentives. Most states declared SEZs as "public utilities" \u2014 restricting strikes (14-day notice mandatory). Some states (Gujarat, Maharashtra, AP) granted additional relaxations. 60\u201370% of the SEZ workforce is contract/temporary. Predominantly young (18-30), female (60%+ in electronics/textiles), non-unionised. Criticism: "enclaves of deregulation" with fewer protections, long hours (10\u201312), forced overtime, suppressed unionisation, gender issues (maternity enforcement gaps, harassment, no cr\u00e8ches). The Labour Codes apply uniformly to all establishments including SEZs \u2014 theoretically ending special regimes, though implementation remains state-dependent.',
    },
    {
      section: 'Second National Commission on Labour (2002) & Reform Committees',
      content:
        'Ravindra Varma Commission (2002) recommended consolidating labour laws into 4\u20135 groups \u2014 the conceptual basis for today\'s 4 Codes (enacted 17\u201318 years later). Key recommendations: umbrella legislation, small enterprise exemptions, universal social security, negotiating unions/councils. Other committees: (1) P.B. Gajendragadkar Commission (1969) \u2014 first major reform recommendation. (2) Arjun Sengupta Committee (2007) \u2014 92% unorganised workers; recommended National Minimum Social Security; led to Unorganised Workers\' SS Act 2008. (3) NCEUS (2004-09, Arjun Sengupta) \u2014 77% living below Rs 20/day. (4) VV Giri National Labour Institute \u2014 research and training. (5) Central Advisory Board on Labour \u2014 tripartite policy advisory. The evolution from Gajendragadkar (1969) to Varma (2002) to enacted Codes (2019-20) spans 50+ years \u2014 reflecting labour reform\'s political difficulty.',
    },
    {
      section: 'State-Level Labour Reforms',
      content:
        'Labour is on the Concurrent List; states have enacted independent reforms. (1) Rajasthan (2014): first to raise retrenchment threshold to 300; relaxed closure conditions and standing orders threshold. (2) MP: raised Factories Act threshold from 10 to 20 (with power), 20 to 40 (without). (3) Gujarat: extended overtime from 50 to 125 hours/quarter. (4) UP (COVID, 2020): attempted suspending all but 3 laws for 3 years \u2014 modified after protests. (5) Karnataka: 12-hour shifts in IT/BT with consent; drafted Gig Workers Bill. (6) Rajasthan: first state gig worker law (2023). (7) TN: strong unions, strict enforcement, high plantation wages. (8) Kerala: highest minimum wages, strongest unions but accused of discouraging investment. Divergence creates regulatory arbitrage \u2014 firms locate in flexible states (Gujarat, Maharashtra, Rajasthan) over stricter ones (Kerala, WB). This "race to the bottom" motivated the central Codes \u2014 a uniform national floor with state flexibility above it.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'UPSC Prelims and Mains heavily test the 4 Labour Codes (names, features), PLFS data, EPFO/ESIC provisions, MGNREGA, Skill India, and gig worker regulation. GS Paper 3 probes employment challenges, the informal economy, and formalisation. SSC CGL covers Minimum Wages Act, Factories Act, and basic provisions. IBPS PO tests EPFO contribution rates, ESIC coverage, and recent policy changes.',
}
