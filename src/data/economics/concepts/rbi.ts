import type { SubjectConcept } from '@/types/subject-notes'

export const rbiConcept: SubjectConcept = {
  topic: 'rbi',
  title: 'Reserve Bank of India (RBI)',
  description:
    'Structure, functions, monetary policy tools, and regulatory role of the Reserve Bank of India — the central bank and apex monetary authority of the country.',
  category: 'Banking & Monetary',
  keyDates: [
    { year: '1935', event: 'RBI established on April 1 under the RBI Act 1934 based on the Hilton Young Commission (1926) recommendation' },
    { year: '1949', event: 'RBI nationalised on January 1 — government acquired entire share capital' },
    { year: '2016', event: 'Monetary Policy Committee (MPC) constituted under amended RBI Act — first meeting in October 2016' },
    { year: '1969', event: '14 major commercial banks nationalised; RBI\'s regulatory role expanded significantly' },
    { year: '1997', event: 'Bimal Jalan introduced the Liquidity Adjustment Facility (LAF) corridor system' },
    { year: '2020', event: 'RBI cut repo rate to historic low of 4% during COVID-19 pandemic' },
    { year: '2024', event: 'RBI maintained repo rate at 6.5% through most of 2024; cut to 6.25% in February 2025' },
  ],
  notes: [
    {
      section: 'Structure & Organisation',
      content:
        'RBI is headquartered in Mumbai. It has 4 regional offices (Mumbai, Delhi, Kolkata, Chennai) and several sub-offices. The Central Board of Directors consists of: Governor (appointed by Government of India for 4 years), up to 4 Deputy Governors, 4 directors nominated from each local board, 10 directors nominated by the Government, 2 government officials. The Governor is the ex-officio chairman of the Central Board. First Governor: Sir Osborne Smith (1935-37). First Indian Governor: C.D. Deshmukh (1943-49). Current Governor (as of 2025): Sanjay Malhotra. RBI has 4 Local Boards — Western (Mumbai), Eastern (Kolkata), Northern (Delhi), Southern (Chennai).',
    },
    {
      section: 'Functions of RBI',
      content:
        'Monetary Authority: Formulates and implements monetary policy to maintain price stability and ensure adequate flow of credit. Issuer of Currency: Sole authority to issue currency notes (except Re 1 note — issued by GoI). Banker to Government: Manages government accounts, handles public debt, acts as adviser. Banker to Banks: Maintains CRR accounts, provides refinance, acts as lender of last resort. Regulator of Banks: Licenses banks, sets prudential norms (capital adequacy, NPAs), conducts inspections. Foreign Exchange Manager: Manages forex reserves, regulates forex market under FEMA 1999. Developmental Role: Priority sector lending norms, financial inclusion, rural credit. Payment System Regulator: Oversees NEFT, RTGS, UPI, and other payment systems.',
    },
    {
      section: 'Monetary Policy Tools — Quantitative',
      content:
        'Repo Rate: Rate at which RBI lends to banks against government securities (currently 6.25% as of Feb 2025). Reverse Repo Rate: Rate at which RBI borrows from banks (currently derived from SDF rate under the revised framework). CRR (Cash Reserve Ratio): Percentage of NDTL (Net Demand and Time Liabilities) banks must keep with RBI as cash. Currently 4%. No interest is paid on CRR. SLR (Statutory Liquidity Ratio): Percentage of NDTL banks must maintain in liquid assets (cash, gold, government securities). Currently 18%. Open Market Operations (OMO): RBI buys/sells government securities to inject/absorb liquidity. MSF (Marginal Standing Facility): Emergency overnight borrowing from RBI at MSF rate (repo + 0.25%). SDF (Standing Deposit Facility): Introduced in April 2022 — replaced reverse repo as the floor of the LAF corridor.',
    },
    {
      section: 'Monetary Policy Tools — Qualitative',
      content:
        'Qualitative (selective) tools target specific sectors: Margin Requirements: RBI prescribes minimum margins for loans against commodities/shares to control speculative activity. Moral Suasion: RBI persuades banks through advice, appeals, and discussions (no legal backing). Direct Action: RBI can refuse to rediscount bills, charge penal interest, or revoke banking licences. Rationing of Credit: Setting sector-specific credit ceilings. Priority Sector Lending (PSL): Banks must direct 40% of credit to priority sectors (agriculture, MSMEs, education, housing, weaker sections). For foreign banks with less than 20 branches, PSL target is 40% of ANBC with specific sub-targets.',
    },
    {
      section: 'LAF Corridor & Policy Rate Framework',
      content:
        'The Liquidity Adjustment Facility (LAF) corridor is the operating framework for monetary policy. The corridor has: Upper bound = MSF rate (repo + 0.25%). Middle = Repo rate (policy rate). Lower bound = SDF rate (repo − 0.25%). Since April 2022, SDF replaced reverse repo as the floor rate. Banks borrow from RBI at repo rate (via LAF) by pledging government securities. Banks park excess funds with RBI at SDF rate (no collateral needed). In emergencies, banks borrow at MSF rate. The MPC (3 RBI + 3 external members) decides the repo rate. Governor has the casting vote. Decisions are by majority, published with individual member votes.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'RBI is the single most important topic for banking exams (IBPS PO/Clerk, SBI PO). Questions on repo rate, CRR, SLR, MPC composition, and RBI functions appear in nearly every exam. UPSC tests the regulatory framework, LAF corridor, and inflation targeting. SSC exams ask about RBI headquarters, first governor, and note issuance. Current affairs questions on rate decisions are common across all exams.',
}
