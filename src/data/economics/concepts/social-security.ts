import type { SubjectConcept } from '@/types/subject-notes'

export const socialSecurityConcept: SubjectConcept = {
  topic: 'social-security',
  title: 'Social Security & Labour Reforms',
  description:
    'Labour codes, social safety nets, minimum wages, gig economy, informal sector, and India\'s social protection architecture.',
  category: 'Social & Contemporary',
  keyDates: [
    { year: '1948', event: 'Employees\' State Insurance Act — health insurance for industrial workers' },
    { year: '1952', event: 'Employees\' Provident Funds Act — retirement savings for organised sector' },
    { year: '2019', event: 'Four Labour Codes passed (Code on Wages 2019; three others in 2020)' },
    { year: '2020', event: 'Code on Social Security 2020 — first time gig and platform workers recognised for social security' },
    { year: '2005', event: 'Unorganised Workers Social Security Act — framework for informal sector' },
    { year: '2017', event: 'Maternity Benefit (Amendment) Act — maternity leave increased from 12 to 26 weeks' },
    { year: '2020', event: 'e-Shram portal launched for registration of unorganised workers — 30+ crore registrations' },
  ],
  notes: [
    {
      section: 'Four Labour Codes',
      content:
        'India consolidated 29 central labour laws into 4 codes: (1) Code on Wages 2019: Merged 4 laws — Minimum Wages Act, Payment of Wages Act, Payment of Bonus Act, Equal Remuneration Act. National Floor Wage to be set by Centre; states can set higher. Universal minimum wage coverage (previously only for scheduled employments). (2) Industrial Relations Code 2020: Merged 3 laws — Trade Unions Act, Industrial Employment Act, Industrial Disputes Act. Firms with up to 300 workers can hire/fire without government permission (earlier limit was 100). Fixed-term employment recognised. (3) Code on Social Security 2020: Merged 9 laws — covers EPF, ESI, maternity benefit, gratuity. Extended to gig workers and platform workers. Social Security Fund for unorganised workers. (4) Occupational Safety, Health & Working Conditions Code 2020: Merged 13 laws — safety norms, working hours, inter-state migrant workers. Implementation requires states to frame rules — still pending in most states.',
    },
    {
      section: 'Informal & Gig Economy',
      content:
        'India\'s informal sector employs approximately 90% of the workforce (~450 million workers) and contributes ~50% of GDP. Characteristics: No formal contract, no social security, low wages, poor working conditions. e-Shram Portal (2021): National database of unorganised workers. 30+ crore registrations. Linked to Aadhaar. Workers get Rs 2 lakh accident insurance (under PMSBY). Gig Economy: Workers engaged through digital platforms without traditional employer-employee relationship. Examples: Uber/Ola drivers, Zomato/Swiggy delivery partners, Urban Company professionals. NITI Aayog estimates 7.7 million gig workers (2020-21), expected to reach 23.5 million by 2029-30. Code on Social Security 2020 includes gig/platform workers for the first time — Social Security Fund financed by platform contributions (1-2% of annual turnover).',
    },
    {
      section: 'Key Social Security Schemes',
      content:
        'EPF (Employees\' Provident Fund): 12% employee + 12% employer contribution (of which 8.33% goes to EPS). Applicable to establishments with 20+ employees. Interest rate: 8.25% (2023-24). EPFO manages ~28 crore accounts. ESI (Employees\' State Insurance): Medical, sickness, maternity, disability benefits. For employees earning up to Rs 21,000/month. Employer: 3.25%, Employee: 0.75%. Gratuity: Payment upon retirement/resignation after 5 years of continuous service. 15 days\' wages for each year of service (maximum Rs 20 lakh). Maternity Benefit: 26 weeks for first 2 children, 12 weeks for subsequent. Applicable to establishments with 10+ employees. Crèche facility mandatory for 50+ employees. PM Shram Yogi Maandhan (PM-SYM): Pension scheme for unorganised workers — Rs 3,000/month after age 60. Equal contribution by worker and government. Age: 18-40 years.',
    },
    {
      section: 'Minimum Wages',
      content:
        'Minimum Wages Act 1948 (now subsumed under Code on Wages 2019): Centre and states fix minimum wages for scheduled employments. Variable Dearness Allowance (VDA) adjusted periodically for inflation. Current central minimum wage for unskilled workers: ~Rs 176/day (varies by region). The Code on Wages proposes a National Floor Wage — no state can fix minimum wage below this. Regional variation: Metropolitan, non-metropolitan, rural. 7th Pay Commission (2016): Revised minimum pay for central government employees to Rs 18,000/month (from Rs 7,000). Pay ratio: 1:13.85 (lowest to highest). Fitment factor: 2.57. DA (Dearness Allowance): Compensates government employees for inflation — revised twice a year based on AICPI (All India Consumer Price Index for Industrial Workers). Current DA: ~50% of basic pay.',
    },
    {
      section: 'Women & Vulnerable Groups',
      content:
        'Equal Remuneration: Code on Wages mandates equal pay for equal work regardless of gender. Maternity Benefit: 26 weeks paid leave. PM Matru Vandana Yojana (PMMVY): Rs 5,000 for first live birth. Beti Bachao Beti Padhao: Improving child sex ratio and girls\' education. Sukanya Samriddhi Yojana: Savings for girl child. One Stop Centre (Sakhi): Support for women affected by violence. Nirbhaya Fund: For women\'s safety and security initiatives. SC/ST Welfare: Post Matric Scholarship, Stand-Up India (loans to SC/ST entrepreneurs), Scheduled Castes Sub Plan (now SCSP). Persons with Disabilities: Rights of Persons with Disabilities Act 2016 — 21 categories of disability recognised, 4% reservation in government jobs. National Trust Act 1999 for intellectual disabilities. Senior Citizens: IGNOAPS (Indira Gandhi National Old Age Pension Scheme) — Rs 200/month for BPL elderly. SCSS and PM Vaya Vandana Yojana for investment.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Labour reforms and social security are important for UPSC (Labour Codes, gig economy, informal sector) and SSC/banking exams (EPF, ESI, minimum wages, maternity benefit). Questions on the four Labour Codes, e-Shram portal, and gig worker provisions are increasingly common. EPF interest rates and ESIC coverage are tested in banking exams.',
}
