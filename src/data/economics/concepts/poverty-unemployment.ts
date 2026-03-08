import type { SubjectConcept } from '@/types/subject-notes'

export const povertyUnemploymentConcept: SubjectConcept = {
  topic: 'poverty-unemployment',
  title: 'Poverty & Unemployment',
  description:
    'Poverty measurement in India, poverty lines, types of unemployment, employment programmes, and demographic dividend for government exam preparation.',
  category: 'Basic Concepts',
  keyDates: [
    { year: '1962', event: 'First poverty line estimate by the Working Group headed by B.N. Ganguli — based on minimum consumption expenditure' },
    { year: '1979', event: 'Y.K. Alagh Committee — linked poverty line to calorie intake (2400 kcal rural, 2100 kcal urban)' },
    { year: '1993', event: 'Lakdawala Committee — used state-specific poverty lines, updated the methodology' },
    { year: '2009', event: 'Tendulkar Committee — shifted from calorie-based to expenditure-based poverty line (Rs 32/day urban, Rs 26/day rural)' },
    { year: '2014', event: 'Rangarajan Committee — proposed higher poverty line (Rs 47/day urban, Rs 32/day rural)' },
    { year: '2023', event: 'NITI Aayog\'s National MPI report — multidimensional poverty declined from 29.17% (2013-14) to 11.28% (2022-23)' },
    { year: '2006', event: 'MGNREGA enacted — guarantees 100 days of wage employment per rural household per year' },
    { year: '2017', event: 'Periodic Labour Force Survey (PLFS) launched by NSO — replaced NSSO employment surveys' },
  ],
  notes: [
    {
      section: 'Poverty Line in India — Evolution',
      content:
        'India traditionally used a consumption expenditure-based poverty line. Alagh Committee (1979): Calorie-based — 2400 kcal/day for rural, 2100 kcal/day for urban areas. Lakdawala Committee (1993): Used Consumer Price Index for Industrial Workers (CPI-IW) for urban and CPI-AL for rural, with state-specific lines. Tendulkar Committee (2009): Shifted to Monthly Per Capita Expenditure (MPCE) — Rs 816/month rural, Rs 1000/month urban (2004-05 prices). Rangarajan Committee (2014): Proposed higher lines — Rs 972/month rural, Rs 1407/month urban (2011-12 prices). Currently, no single official poverty line is universally adopted. NITI Aayog uses the Multidimensional Poverty Index (MPI) — covers health, education, and standard of living (12 indicators).',
    },
    {
      section: 'Types of Poverty',
      content:
        'Absolute Poverty: Based on a fixed minimum standard (poverty line) — unable to meet basic needs. Relative Poverty: Compared to the standard of living of others in society (inequality measure). Situational/Transient Poverty: Temporary poverty due to specific circumstances (natural disaster, job loss). Chronic Poverty: Persistent, long-term poverty across generations. Urban Poverty: Characterised by slum dwelling, lack of formal employment, and poor access to services. Rural Poverty: Associated with landlessness, low agricultural productivity, and seasonal unemployment. Head Count Ratio (HCR) = percentage of population below poverty line. Poverty Gap = the depth of poverty, measuring how far below the poverty line the poor are on average.',
    },
    {
      section: 'Types of Unemployment',
      content:
        'Structural Unemployment: Mismatch between workers\' skills and available jobs (common in developing economies). Cyclical Unemployment: Due to economic downturns and recession (demand deficiency). Frictional Unemployment: Short-term, between jobs — voluntary transition period. Seasonal Unemployment: Common in agriculture — workers idle between sowing and harvesting seasons. Disguised Unemployment: More people employed than necessary, marginal productivity is zero (very common in Indian agriculture). Open Unemployment: Willing and able to work but cannot find employment. Educated Unemployment: Degree holders unable to find appropriate employment (a major issue in India). Underemployment: Employed below their skill level or for fewer hours than desired.',
    },
    {
      section: 'Employment Data & PLFS',
      content:
        'The Periodic Labour Force Survey (PLFS) is conducted by NSO (previously NSSO) and provides quarterly (urban) and annual (rural + urban) employment data. Key indicators: Labour Force Participation Rate (LFPR) — proportion of working-age population in the labour force; Worker Population Ratio (WPR) — proportion actually employed; Unemployment Rate (UR). As per PLFS 2022-23: UR = 3.2% (all India), LFPR = 57.9%. Female LFPR has shown improvement but remains significantly lower than male LFPR. India uses usual status (ps+ss), current weekly status (CWS), and current daily status (CDS) measures — CDS gives the highest unemployment rate.',
    },
    {
      section: 'Government Employment Programmes',
      content:
        'MGNREGA (2006): Guarantees 100 days of unskilled wage employment per rural household per year. Legal right to work — if work not provided within 15 days, unemployment allowance must be paid. Wages are indexed to CPI-AL. PM-KAUSHAL (PMKVY): Skill development scheme under MSDE. Deendayal Antyodaya Yojana — National Rural Livelihoods Mission (DAY-NRLM): Self-employment through SHGs. PM Employment Generation Programme (PMEGP): Credit-linked subsidy for micro-enterprises. Start-Up India (2016): Tax benefits, easy compliance, and funding support for startups. National Career Service (NCS): Online portal connecting job seekers with employers.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Poverty and unemployment are high-priority topics for all competitive exams. UPSC frequently tests poverty line committees (Tendulkar, Rangarajan), types of unemployment, and the MPI methodology. SSC and banking exams ask about MGNREGA provisions, PLFS data, and basic definitions. Questions on disguised unemployment in agriculture and the demographic dividend are perennial favourites.',
}
