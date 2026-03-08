import type { SubjectConcept } from '@/types/subject-notes'

export const governmentSchemesConcept: SubjectConcept = {
  topic: 'government-schemes',
  title: 'Government Schemes & Programmes',
  description:
    'Major central government schemes — PM-KISAN, MGNREGA, Ayushman Bharat, Mudra, Ujjwala, Start-Up India, and more for competitive exams.',
  category: 'Social & Contemporary',
  keyDates: [
    { year: '2006', event: 'MGNREGA enacted — world\'s largest employment guarantee programme' },
    { year: '2014', event: 'Jan Dhan Yojana, Make in India, Swachh Bharat Mission launched' },
    { year: '2015', event: 'PM Mudra Yojana, Start-Up India initiative, PMJJBY, PMSBY, APY launched' },
    { year: '2016', event: 'PM Ujjwala Yojana — free LPG connections to BPL women' },
    { year: '2018', event: 'Ayushman Bharat — PM Jan Arogya Yojana (PM-JAY) launched' },
    { year: '2019', event: 'PM-KISAN, Jal Jeevan Mission launched' },
    { year: '2020', event: 'PM SVANidhi (street vendors), Garib Kalyan Rojgar Abhiyan (migrant workers)' },
  ],
  notes: [
    {
      section: 'Employment & Rural Development',
      content:
        'MGNREGA (2006): Guarantees 100 days of unskilled manual wage employment per rural household per year. Demand-driven — work must be provided within 15 days of application, else unemployment allowance. 60:40 wage-material ratio. Gram Sabha approves work plans. Social audit mandatory. 1/3rd beneficiaries must be women. Wages linked to CPI-AL (Agricultural Labourers). PM Garib Kalyan Rojgar Abhiyan: Launched during COVID for returning migrant workers — 25 schemes converged for 116 districts. PMEGP (PM Employment Generation Programme): Credit-linked subsidy for setting up micro-enterprises in rural and urban areas. Managed by KVIC (Khadi and Village Industries Commission). DAY-NRLM (Deendayal Antyodaya Yojana — National Rural Livelihoods Mission): Self-employment through SHGs (Self Help Groups). Target: Mobilise 9 crore rural households into SHGs.',
    },
    {
      section: 'Financial Inclusion & Credit',
      content:
        'PM Jan Dhan Yojana (2014): Zero-balance bank accounts, RuPay debit card, Rs 1 lakh accident insurance, Rs 30,000 life cover, overdraft up to Rs 10,000. Over 51 crore accounts opened. PM Mudra Yojana (PMMY, 2015): Collateral-free loans to micro/small enterprises. Three categories: Shishu (up to Rs 50,000), Kishore (Rs 50,001 — Rs 5 lakh), Tarun (Rs 5,00,001 — Rs 10 lakh). Over Rs 27 lakh crore disbursed cumulatively. Stand-Up India (2016): Loans of Rs 10 lakh to Rs 1 crore for SC/ST and women entrepreneurs. At least one SC/ST and one woman borrower per bank branch. Start-Up India (2016): Self-certification, 3-year tax holiday (80IAC), Fund of Funds ($1.5 billion via SIDBI), simplified compliance. India has 100,000+ recognised start-ups, third largest ecosystem globally.',
    },
    {
      section: 'Health & Nutrition',
      content:
        'Ayushman Bharat: Two pillars — (1) Health & Wellness Centres (HWCs): 1.5 lakh sub-centres/PHCs upgraded for comprehensive primary healthcare. (2) PM-JAY: Rs 5 lakh/family/year health insurance for 55 crore beneficiaries. Cashless, paperless at empanelled hospitals. 1,929 treatment packages. World\'s largest government-funded health insurance. PM Poshan Shakti Nirman (PM POSHAN): Renamed Mid-Day Meal scheme — cooked meals to children in government schools. Covers 11.8 crore children. POSHAN Abhiyan (National Nutrition Mission): Targets stunting, underweight, anaemia, and low birth weight. Technology-driven (ICDS-CAS app for real-time monitoring). Integrated Child Development Services (ICDS): Nutrition, pre-school education, immunisation, health check-ups for children under 6 and pregnant/lactating women through Anganwadi centres (14 lakh centres).',
    },
    {
      section: 'Housing, Energy & Water',
      content:
        'PM Awas Yojana — Gramin (PMAY-G): Pucca house with basic amenities. Rs 1.20 lakh (plains), Rs 1.30 lakh (hilly/difficult areas). Target: 2.95 crore houses. PM Awas Yojana — Urban (PMAY-U): Interest subsidy on home loans (CLSS), affordable housing in partnership, beneficiary-led construction. PM Ujjwala Yojana (2016): Free LPG connections to BPL women. Phase 1: 5 crore connections; Phase 2: 1 crore more. Reduced indoor air pollution and health risks. PAHAL (Direct Benefit Transfer for LPG): LPG subsidy deposited directly in bank accounts. Give-It-Up: Voluntary surrender of LPG subsidy. PM Surya Ghar Muft Bijli Yojana (2024): Free electricity up to 300 units through rooftop solar. Subsidy for solar panel installation on 1 crore households. Jal Jeevan Mission: Piped water (55 lpcd) to every rural household. Coverage improved from 17% (2019) to ~77% (2024). Target: 100% coverage.',
    },
    {
      section: 'Education, Skill & Social Welfare',
      content:
        'National Education Policy (NEP) 2020: Replaced 34-year-old policy. 5+3+3+4 structure. Mother tongue/regional language instruction till Grade 5. Multidisciplinary education. Academic Bank of Credits. PM SHRI Schools: Model schools under NEP. Samagra Shiksha: Integrated scheme for school education (merged SSA, RMSA, Teacher Education). PM Kaushal Vikas Yojana (PMKVY): Skill certification for youth — recognition of prior learning. Managed by NSDC (National Skill Development Corporation). PM Vishwakarma: Support for artisans and craftspersons — training, toolkit, credit. Sukanya Samriddhi Yojana: Savings scheme for girl child — highest interest rate among small savings. Beti Bachao, Beti Padhao: Awareness campaign against gender discrimination. PM Matru Vandana Yojana: Rs 5,000 maternity benefit (3 instalments) for first live birth. One Nation One Ration Card: PDS portability for migrant workers.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Government schemes are tested in every competitive exam. Banking exams extensively ask about Jan Dhan, Mudra Yojana details (Shishu/Kishore/Tarun), and PM-JAY coverage. SSC exams test scheme launch years, beneficiaries, and financial details. UPSC tests the broader policy rationale, implementation challenges, and convergence of schemes.',
}
