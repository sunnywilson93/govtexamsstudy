import type { SubjectConcept } from '@/types/subject-notes'

export const insuranceConcept: SubjectConcept = {
  topic: 'insurance',
  title: 'Insurance & Pension Sector',
  description:
    'IRDAI regulation, life and non-life insurance, government schemes (PMJJBY, PMSBY, PM-JAY, PMFBY), pension reforms via NPS and APY, OPS vs NPS debate, and social security through insurance.',
  category: 'Banking & Monetary',
  keyDates: [
    { year: '1938', event: 'Insurance Act 1938 enacted \u2014 first comprehensive insurance legislation in India; still the foundational statute (amended multiple times)' },
    { year: '1956', event: 'Life Insurance Corporation (LIC) established by nationalising 245 private insurance companies under the LIC Act' },
    { year: '1972', event: 'General Insurance Corporation (GIC) established \u2014 general insurance nationalised; 4 subsidiaries created' },
    { year: '1993', event: 'Malhotra Committee recommends opening insurance to private sector and establishing a regulator' },
    { year: '1999', event: 'IRDA (Insurance Regulatory and Development Authority) established under IRDA Act 1999' },
    { year: '2000', event: 'Insurance sector opened to private participation with 26% FDI cap; first private insurers licensed' },
    { year: '2004', event: 'National Pension System (NPS) launched for central government employees joining on or after January 1, 2004' },
    { year: '2009', event: 'NPS opened to all citizens on voluntary basis; PFRDA established as regulator' },
    { year: '2013', event: 'PFRDA Act enacted \u2014 statutory basis for pension regulation; NPS trust established' },
    { year: '2015', event: 'PMJJBY, PMSBY, and APY launched (May 9); FDI raised to 49%; IRDA renamed IRDAI' },
    { year: '2016', event: 'Pradhan Mantri Fasal Bima Yojana (PMFBY) launched \u2014 restructured crop insurance at subsidised premiums' },
    { year: '2018', event: 'Ayushman Bharat \u2014 PM-JAY launched (September 23) providing Rs 5 lakh health cover to 55 crore beneficiaries' },
    { year: '2021', event: 'FDI in insurance raised to 74% (Insurance Amendment Act 2021); LIC IPO groundwork begins' },
    { year: '2022', event: 'LIC IPO \u2014 largest IPO in Indian history at that time (Rs 20,557 crore); market cap briefly touched Rs 7+ lakh crore' },
  ],
  notes: [
    {
      section: 'Insurance Regulation \u2014 IRDAI',
      content:
        'IRDAI (Insurance Regulatory and Development Authority of India) is the apex statutory body regulating and promoting the insurance industry. Established under IRDA Act 1999, HQ Hyderabad. Core functions: licensing insurers, protecting policyholder interests, regulating premiums, setting solvency margins (1.5x or 150%), promoting penetration, and supervising intermediaries (brokers, agents, corporate agents, web aggregators). Chairman and members appointed by Central Government. Key powers: product approval (File & Use for most products), investment norms (prescribed shares in G-Secs, infrastructure, social sector), and grievance redressal (IGMS). The 2015 amendment renamed IRDA to IRDAI and allowed foreign reinsurer branches. IRDAI has been progressively deregulating \u2014 moving toward principle-based regulation in 2023-24 with more product flexibility. Insurance Ombudsman (17 centres) handles complaints up to Rs 50 lakh.',
    },
    {
      section: 'History of Insurance in India',
      content:
        'Oriental Life Insurance Company (1818, Calcutta) was the first Indian insurer. Insurance Act 1938 provided the first comprehensive legislation. Post-independence, insurance served national development. Life insurance was nationalised in 1956 (LIC Act, merging 245 companies). General insurance was nationalised in 1972 (GIBNA) \u2014 GIC became the holding company with 4 subsidiaries (New India Assurance, United India, Oriental, National). The Malhotra Committee (1993) recommended liberalisation \u2014 private entry and an independent regulator. IRDA Act 1999 followed, and private insurers entered from 2000. FDI limits rose progressively: 26% (2000) \u2192 49% (2015) \u2192 74% (2021). The sector has transformed from a government monopoly to a competitive market with 70+ companies. Public sector entities (LIC, PSU general insurers) still dominate market share.',
    },
    {
      section: 'Life Insurance',
      content:
        'Life insurance provides financial protection against death, disability, or survival to a certain age. Major types: (1) Term \u2014 pure risk cover, lowest premium, no maturity benefit. (2) Endowment \u2014 savings + insurance, guaranteed maturity + bonuses. (3) ULIP \u2014 market-linked, part premium invested in equity/debt, IRDAI-regulated 5-year lock-in. (4) Whole Life \u2014 coverage until death, builds cash value. (5) Money Back \u2014 periodic survival benefits. (6) Annuity \u2014 regular post-retirement income. LIC holds 65%+ market share (61% in new business premium, 2023-24). AUM exceeds Rs 43 lakh crore \u2014 larger than many countries\' GDP. LIC IPO (May 2022): Rs 949/share, Rs 20,557 crore raised. Private players: HDFC Life, SBI Life, ICICI Prudential, Max Life, Bajaj Allianz Life. Life insurance penetration: ~3.2% of GDP (global ~3.3%). 30+ life insurers operate in India.',
    },
    {
      section: 'General/Non-Life Insurance',
      content:
        'General insurance covers financial losses from events other than death: health, motor, fire, marine, liability, crop, travel, engineering. Four PSU general insurers: New India Assurance (oldest, 1919), United India, Oriental, National \u2014 together ~30% market share. GIC Re is the sole national reinsurer, operating globally. Private players: ICICI Lombard, Bajaj Allianz General, HDFC Ergo, Tata AIG. Motor is the largest segment (~35%), followed by health (~33%) and fire (~8%). Third-party motor insurance is mandatory under the Motor Vehicles Act. Non-life penetration: only ~1% of GDP (global ~4.1%) \u2014 massive protection gap. Challenges: low rural awareness, high crop insurance claim ratios, fraud detection. IRDAI promotes sandbox initiatives and insurtech to expand coverage via micro-insurance and parametric products.',
    },
    {
      section: 'Health Insurance & Ayushman Bharat',
      content:
        'Health insurance is the fastest-growing segment (~20% CAGR). Models: indemnity-based (reimburses actual hospitalisation costs) and defined benefit (fixed sum on diagnosis). Standalone health insurers (Star Health, Niva Bupa, Care Health, Aditya Birla Health) compete with general insurers. Ayushman Bharat has two components: (a) HWCs \u2014 1.6 lakh sub-centres upgraded for comprehensive primary care. (b) PM-JAY \u2014 Rs 5 lakh/family/year for secondary and tertiary hospitalisation covering ~12 crore poor families (~55 crore beneficiaries). PM-JAY is the world\'s largest government-funded health insurance scheme \u2014 cashless, paperless at empanelled hospitals. Does not cover outpatient expenses. Eligibility based on SECC 2011 deprivation criteria. Cumulative claims exceed Rs 80,000 crore. Several states expanded coverage (Rajasthan\'s Chiranjeevi, Kerala\'s KASP). IRDAI introduced standard product "Arogya Sanjeevani" (2020) for uniformity. OOP health expenditure fell from 62.6% (2014-15) to ~48% (2019-20) but remains among the highest globally.',
    },
    {
      section: 'Crop Insurance \u2014 PMFBY',
      content:
        'PMFBY (2016) replaced NAIS and MNAIS. Farmer premium capped at 2% (kharif), 1.5% (rabi), 5% (commercial/horticultural) \u2014 balance shared equally by Centre and state. Coverage: prevented sowing, mid-season adversity, post-harvest losses (up to 14 days), localised calamities (hailstorm, landslide, inundation). Technology: remote sensing, satellite imagery, drones, weather stations for CCEs. Made voluntary for all farmers from kharif 2020 (earlier mandatory for loanee farmers). ~5.5 crore applications annually. Claims paid: ~Rs 1.5 lakh crore since inception. Some states withdrew (Gujarat, Bihar, WB, AP, Jharkhand, Telangana) over subsidy burden and settlement disputes. RWBCIS provides payouts based on weather parameters (parametric insurance). PMFBY has reduced farmer distress but faces challenges in timely settlement (72-hour loss intimation) and accurate yield estimation.',
    },
    {
      section: 'National Pension System (NPS)',
      content:
        'NPS is a defined contribution scheme regulated by PFRDA (PFRDA Act 2013). It replaced OPS for central government employees joining on or after January 1, 2004. Key features: (1) Two tiers \u2014 Tier-I (retirement account, restricted withdrawal until 60), Tier-II (savings, flexible). (2) Choice of fund managers (SBI Pension Fund, UTI RSL, LIC Pension Fund, HDFC Pension, etc.). (3) Asset allocation: Active Choice (subscriber picks E/C/G/A mix) or Auto Choice (lifecycle fund). (4) At maturity: minimum 40% used to buy annuity, up to 60% withdrawn tax-free (since Budget 2019). AUM: Rs 12+ lakh crore (2024). 7.5 crore subscribers. Tax benefits: 80CCD(1) up to 10% of salary within 80C limit; 80CCD(1B) additional Rs 50,000; 80CCD(2) employer contribution up to 14% (central govt) or 10% (others). NPS Vatsalya (2024): NPS for minors, converts to regular NPS at 18.',
    },
    {
      section: 'Atal Pension Yojana (APY) & Social Security Pensions',
      content:
        'APY (2015) targets unorganised sector workers lacking pension. Guaranteed pension of Rs 1,000\u20135,000/month after age 60; contribution depends on entry age and chosen pension level. Government co-contributes 50% for 5 years (for those without statutory social security). Eligibility: 18\u201340 years. 6+ crore subscribers (2024). Administered by PFRDA. Other pensions: NSAP covers IGNOAPS (Rs 200/month BPL aged 60\u201379, Rs 500 for 80+), Widow Pension, Disability Pension, and NFBS (Rs 20,000 lump sum on breadwinner death). PM-SYM: voluntary pension for unorganised workers earning up to Rs 15,000/month. Rs 3,000/month after 60. Government matches equal contribution.',
    },
    {
      section: 'OPS vs NPS Debate',
      content:
        'OPS (Old Pension Scheme): defined benefit \u2014 50% of last drawn salary, no market risk, fully government-funded, DA-indexed, commutation allowed. NPS: defined contribution, market-linked returns, shared funding, no guaranteed amount. Government employees criticise NPS for creating retirement insecurity (market-dependent pension), lower replacement ratio (~35\u201340% vs 50% under OPS), and no guaranteed family pension. States reverting to OPS: Rajasthan, Chhattisgarh, Jharkhand, Himachal Pradesh, Punjab. RBI and fiscal experts warn OPS reversion creates unfunded liabilities (estimated Rs 800+ crore per 1,000 employees over their lifetime). UPS (Unified Pension Scheme, August 2024) offers a middle path: assured 50% of average basic pay of last 12 months (for 25+ years service), assured family pension at 60% of employee pension, minimum Rs 10,000. States may adopt UPS.',
    },
    {
      section: 'Employee Insurance \u2014 ESI & EPF',
      content:
        'ESI: medical, sickness, maternity, disability, and dependent benefits. Applies to 10+ employee establishments for workers earning up to Rs 21,000/month. Contribution: employer 3.25%, employee 0.75%. Administered by ESIC under ESI Act 1948. 14+ crore beneficiaries. Runs its own hospitals and dispensaries. EPF: retirement savings under EPF & MP Act 1952. Both employer and employee contribute 12% of basic wages. Employer\'s 12%: 3.67% to EPF, 8.33% to EPS. Interest rate: 8.25% (2023-24). EPFO manages Rs 18+ lakh crore, 6.7+ crore active members. Auto-transfer via UAN. EPF has EEE tax treatment for contributions up to Rs 2.5 lakh/year. EDLI: life insurance up to Rs 7 lakh for EPF members. Code on Social Security 2020 consolidates 9 laws (EPF, ESI, gratuity, maternity, etc.) and extends social security to gig and platform workers.',
    },
    {
      section: 'Micro-Insurance & Financial Inclusion',
      content:
        'Micro-insurance provides low-premium, low-coverage products for economically vulnerable populations. IRDAI mandates insurers to underwrite minimum rural and social sector percentages. Regulations (2005, revised 2015): individual life cover up to Rs 2 lakh, general up to Rs 1 lakh. Distribution: CSCs, SHGs, MFIs, banking correspondents. Jan Dhan-linked insurance: PMJDY accounts carry built-in accident insurance (Rs 1\u20132 lakh via RuPay card). PMJJBY has 16+ crore cumulative enrolments; PMSBY has 34+ crore. Challenges: low awareness, claim rejection fears, premium collection difficulties in the informal economy. Parametric/index-based insurance (payouts triggered by weather indices without loss assessment) is emerging for agriculture and disaster risk. InsurTech companies (Digit, Acko, Go Digit) use AI/ML for underwriting, claims, and distribution to reach previously uninsured segments.',
    },
    {
      section: 'Reinsurance in India',
      content:
        'Reinsurance is "insurance for insurers" \u2014 risk transfer from primary insurers to reinsurers. GIC Re (established 1972) is India\'s sole domestic reinsurer, 12th-largest globally, operating in 170+ countries. India mandates obligatory cession: all insurers must cede a minimum percentage (currently 4%, reduced from 5% in 2023) of gross premium to GIC Re. Foreign reinsurers operate via Indian branches (Lloyd\'s, Swiss Re, Munich Re, SCOR since 2017) or cross-border. IRDAI has been opening the market to increase capacity and reduce GIC Re concentration. Reinsurance market: ~Rs 60,000 crore. Key challenges: catastrophe risk management (floods, cyclones), adequate capital for large risks, pricing transparency.',
    },
    {
      section: 'Motor & Third-Party Insurance',
      content:
        'Motor insurance is the largest non-life segment (~35% of premium). Two components: (a) third-party liability \u2014 mandatory under Motor Vehicles Act, covers death/injury/property damage to third parties, unlimited liability; (b) own damage \u2014 covers damage from accidents, fire, theft, natural calamities. Third-party premium is regulated (fixed tariff). Own-damage was detariffed in 2007 for competitive pricing. Penetration improved through digital compliance and vehicle registration linkage. Issues: high third-party claims (especially commercial vehicles), claim farming fraud, MACT backlog. SC mandated long-term third-party cover (3 years cars, 5 years two-wheelers) in 2018, later modified. E-vehicle insurance is an emerging category with distinct risk profiles (battery, charging). Telematics-based pay-as-you-drive insurance is gaining traction.',
    },
    {
      section: 'Insurance Penetration & Global Comparison',
      content:
        'Insurance penetration (premium as % of GDP): India ~4.2% (life ~3.2%, non-life ~1%) vs global ~7%. Insurance density (premium per capita): India ~$92 vs global $874. Protection gap: among the highest globally \u2014 $27 billion mortality, $56 billion health. Comparison: Taiwan ~17.4%, Hong Kong ~15%, UK ~10.3%, US ~11.7%, China ~4.6%, Japan ~8.3%. India\'s non-life penetration (1%) is far below global (4.1%) \u2014 huge growth potential in health, motor, and property. Factors for low penetration: low incomes, savings preference over protection, trust deficit, limited rural distribution, complex products, cultural attitudes toward risk discussion. Government push through PMJJBY/PMSBY/PM-JAY, digital distribution, and regulatory simplification is gradually improving penetration. IRDAI\'s "Insurance for All by 2047" targets significant increases.',
    },
    {
      section: 'LIC \u2014 Structure & Significance',
      content:
        'LIC is India\'s largest institutional investor and largest life insurer by premium, assets, and policyholders. Established 1956 by merging 245 companies. AUM exceeds Rs 43 lakh crore (~17% of GDP). Equity holdings: ~Rs 10 lakh crore (largest domestic institutional investor). Market share: 65%+. 20+ lakh agents (largest globally). 1.15+ lakh employees. 4,700+ branches. LIC IPO (May 2022): Rs 20,557 crore at Rs 949/share (3.5% stake). Embedded value: Rs 5.4 lakh crore. LIC has been anchor investor in government disinvestment (raises "buyer of last resort" concerns). Sovereign guarantee on LIC policies was removed for post-IPO policies. Investment mandate includes 15% in infrastructure and social sector. Subsidiaries: LIC Housing Finance, LIC Mutual Fund, LIC Pension Fund.',
    },
    {
      section: 'Digital Insurance & InsurTech',
      content:
        'The insurance industry is undergoing digital transformation. Key developments: (1) Digital-first insurers (Digit, Acko, Go Digit) offer fully online purchase, claims, and servicing. (2) IRDAI sandbox (2019) enables testing of innovative products (drone insurance, pay-per-use, cyber insurance). (3) Bima Sugam \u2014 IRDAI\'s proposed unified platform (like UPI for insurance) for policy purchase, claims, and portability on a single digital interface. (4) Web aggregators (PolicyBazaar, Coverfox) compare and distribute products online. (5) AI/ML: fraud detection, underwriting automation, chatbot claims, dynamic pricing. (6) Telematics: usage-based motor insurance via IoT tracking driving behaviour. (7) Blockchain: smart contracts for parametric insurance (automatic payouts on trigger). Saral Jeevan Bima (2021): IRDAI-mandated standard term product across all life insurers for easy comparison. IRDAI mandates all insurers to offer digital channels. Insurance repositories store policies electronically.',
    },
    {
      section: 'Disaster Risk Insurance & Climate',
      content:
        'India faces $10\u201315 billion annual disaster losses (floods, cyclones, earthquakes, droughts); less than 10% is insured. PMFBY covers crops, but broader disaster risk insurance for assets and livelihoods remains limited. NDMA focuses on preparedness; SDRF and NDRF provide post-disaster relief but are not insurance. Catastrophe bonds: India has not issued sovereign cat bonds but World Bank-assisted pilots for flood risk (Maharashtra) are under discussion. Climate risk: increasing extreme weather frequency (Amphan, Tauktae, Biparjoy) drives up claim costs. Parametric weather insurance triggers payouts on measured parameters (rainfall, temperature) without physical loss assessment \u2014 faster, cheaper, more transparent. Livestock insurance covers animal death under DEDS subsidy. India\'s Disaster Risk Reduction roadmap (Sendai Framework) includes expanding insurance penetration as a key pillar.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Banking exams test PMJJBY/PMSBY details, NPS structure, and IRDAI functions. UPSC covers insurance penetration, FDI limits, PM-JAY coverage, OPS vs NPS debate, and crop insurance mechanics. SSC exams target LIC establishment year, premium amounts under government schemes, and EPFO/ESIC provisions.',
}
