import type { SubjectConcept } from '@/types/subject-notes'

export const demographicDividendConcept: SubjectConcept = {
  topic: 'demographic-dividend',
  title: 'Demographic Dividend & Human Capital',
  description:
    'India\'s demographic transition, population policy, skill development, education spending, and leveraging the youth bulge for economic growth.',
  category: 'Social & Contemporary',
  keyDates: [
    { year: '2023', event: 'India surpassed China as the world\'s most populous country (~1.44 billion)' },
    { year: '2011', event: 'Census 2011 — population 121 crore, decadal growth rate 17.7%, sex ratio 943' },
    { year: '2000', event: 'National Population Policy — aim to achieve replacement level fertility (TFR 2.1) by 2010' },
    { year: '2020', event: 'National Education Policy (NEP) 2020 — targets 6% of GDP spending on education' },
    { year: '2015', event: 'National Skill Development Mission launched — target: skill 40 crore youth by 2022' },
    { year: '2005', event: 'India\'s median age below 25 — one of the youngest populations globally' },
    { year: '2025', event: 'India\'s demographic dividend window estimated to last until 2055-60' },
  ],
  notes: [
    {
      section: 'Demographic Dividend — Concept',
      content:
        'Demographic Dividend occurs when the working-age population (15-64 years) is larger than the non-working-age (dependent) population — creating potential for higher economic growth. India\'s working-age population: ~68% (2024). Dependency ratio (dependents per 100 working-age people): ~44 (declining). India\'s demographic dividend window: ~2005-06 to 2055-60 — this 50-year window is a once-in-a-lifetime opportunity. In contrast, China\'s working-age population is already declining. To realise the dividend, India must ensure: Quality education and skills, productive employment, good health, and social infrastructure. If these conditions are not met, the dividend becomes a demographic disaster — a large unemployed, unskilled youth population leading to social unrest.',
    },
    {
      section: 'Population Dynamics',
      content:
        'India\'s population: ~1.44 billion (2024) — surpassed China in April 2023. Total Fertility Rate (TFR): 2.0 (NFHS-5, 2019-21) — below replacement level (2.1) for the first time. Urban TFR: 1.6, Rural TFR: 2.1. TFR varies significantly by state — Bihar (2.98), UP (2.35) vs Kerala (1.56), Tamil Nadu (1.75). India is still adding ~13 million people per year due to population momentum (large cohort of women in reproductive age). Census 2021 was postponed due to COVID — Census 2011 remains the latest. Key Census 2011 data: Population 1.21 billion, decadal growth 17.7%, sex ratio 943, literacy 73%, urbanisation 31.16%. National Population Policy 2000: Long-term objective of population stabilisation by 2045.',
    },
    {
      section: 'Human Capital & Education',
      content:
        'India\'s public spending on education: ~3% of GDP (NEP 2020 targets 6%). Literacy rate: 77.7% (Census 2011, NFHS-5 suggests improvement). Male: 84.7%, Female: 70.3%. Despite near-universal enrolment in primary education (RTE Act 2009), learning outcomes remain poor — ASER reports show many Grade 5 students cannot read Grade 2 text. Annual Status of Education Report (ASER): Annual assessment of learning outcomes in rural India by Pratham Foundation. Higher Education: Gross Enrollment Ratio (GER) in higher education: ~28.4% (AISHE 2021-22). Target: 50% by 2035 (NEP). India produces ~1.5 million engineers/year but employability is low (~45% as per industry surveys). Brain drain: Net migration of skilled professionals to USA, UK, Canada, Australia, Gulf countries — however, reverse brain drain and diaspora remittances ($125 billion in 2023, world\'s highest) partially offset this.',
    },
    {
      section: 'Skill Development',
      content:
        'Only 5% of India\'s workforce has formal vocational training (vs 52% in USA, 68% in UK, 75% in Germany, 96% in South Korea). Skill Development Institutional Framework: MSDE (Ministry of Skill Development and Entrepreneurship), NSDC (National Skill Development Corporation — PPP model), Sector Skill Councils (SSCs, 37 sectors). PM Kaushal Vikas Yojana (PMKVY): Short-term training (150-300 hours), certification, placement support. Recognition of Prior Learning (RPL) for existing workers. Skill India Digital Hub: Online platform for skill courses and certifications. Industrial Training Institutes (ITIs): ~15,000 ITIs across India, offering trades in engineering and non-engineering fields. National Apprenticeship Promotion Scheme (NAPS): Stipend support for apprentices in establishments. Challenges: Quality of training, industry-academia gap, low female participation, regional disparities in skill availability.',
    },
    {
      section: 'Health & Population Policy',
      content:
        'India\'s health indicators have improved but remain below global averages: Infant Mortality Rate (IMR): 28 per 1000 live births (2020). Maternal Mortality Ratio (MMR): 97 per 100,000 live births (2018-20). Life Expectancy at birth: 70.19 years (2021). India\'s public health spending: ~2.1% of GDP (National Health Policy 2017 targets 2.5% by 2025). Out-of-pocket health expenditure: ~47.1% (among the highest globally — pushes 55 million into poverty annually). Ayushman Bharat: Two-pillar approach — HWCs for primary care, PM-JAY for hospital care. National Health Mission (NHM): Umbrella programme for NRHM (rural) and NUHM (urban). Key missions: Janani Suraksha Yojana (institutional deliveries), Rashtriya Bal Swasthya Karyakram (child health screening), National Nutrition Mission (POSHAN). India\'s pharmaceutical industry: 3rd largest by volume globally, "pharmacy of the world" for generics — supplies 60% of global vaccines.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Demographic dividend is a high-priority topic for UPSC Mains (essays and GS papers). UPSC Prelims tests TFR, dependency ratio, and Census data. SSC exams ask about Census 2011 data, literacy rates, and NEP 2020 features. Banking exams test health insurance (PM-JAY) and skill development schemes. Questions on India surpassing China in population are common in current affairs.',
}
