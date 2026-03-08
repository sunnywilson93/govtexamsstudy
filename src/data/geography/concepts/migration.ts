import type { SubjectConcept } from '@/types/subject-notes'

export const migrationConcept: SubjectConcept = {
  topic: 'migration',
  title: 'Migration in India',
  description:
    'Migration is a key demographic process in India. According to Census 2011, about 455 million people (37% of the population) were classified as migrants. Rural-to-urban migration drives urbanization, while interstate migration reflects economic disparities. Understanding migration patterns is essential for planning and governance.',
  category: 'Human Geography',
  keyDates: [
    { year: 'Census 2011', event: '455 million migrants (37% of population); 70% intra-state, 12% inter-state' },
    { year: 'Rural-Urban', event: 'Rural-to-urban migration is the fastest growing stream, driven by economic opportunities' },
    { year: 'Top Destination', event: 'Maharashtra and Delhi are the top destination states for interstate migrants' },
    { year: 'Top Source', event: 'UP and Bihar are the largest source states for interstate out-migration' },
    { year: 'Marriage Migration', event: '49% of all migration in India is marriage-related (predominantly female)' },
    { year: 'Economic Survey 2017', event: 'Estimated interstate migrant workforce at about 9 million annually' },
    { year: 'One Nation One Ration Card', event: 'Launched 2019 — enables migrant workers to access PDS in any state' },
  ],
  notes: [
    {
      section: 'Types & Streams of Migration',
      content:
        'The Census classifies migrants by Place of Last Residence (POLR) and Place of Birth (POB). Four streams of internal migration: (1) Rural-to-Rural (R-R) — largest stream (about 50% of all migration); dominated by marriage migration of women; (2) Rural-to-Urban (R-U) — second largest; primarily economic (employment, education); drives urbanization; young male workers from UP, Bihar, Rajasthan, Odisha migrate to Mumbai, Delhi, Bengaluru, Gujarat; (3) Urban-to-Urban (U-U) — transfer of employment, education, marriage; professional migration; (4) Urban-to-Rural (U-R) — smallest stream; includes retirement, reverse migration (as seen during COVID-19 lockdown in 2020). International migration: India has the largest diaspora in the world (about 18 million overseas Indians). Major destinations: UAE, USA, Saudi Arabia, UK, Canada. Remittances to India are the highest in the world (about $125 billion in 2023). Brain drain (emigration of skilled professionals) is a concern, partially offset by brain gain and remittances.',
    },
    {
      section: 'Push & Pull Factors of Migration',
      content:
        'Push Factors (reasons to leave origin): (1) Poverty and low wages in rural areas; (2) Lack of employment opportunities — disguised unemployment in agriculture; (3) Natural disasters — floods, droughts, cyclones; (4) Land fragmentation — average holding size 1.08 hectares and declining; (5) Social factors — caste discrimination, social conflicts; (6) Inadequate infrastructure — poor education, health facilities in rural areas; (7) Agrarian distress — crop failures, indebtedness. Pull Factors (attractions at destination): (1) Better employment opportunities — industries, construction, services sector; (2) Higher wages — urban wages significantly higher than rural; (3) Education — colleges, professional courses; (4) Healthcare — better hospitals and medical facilities; (5) Better infrastructure — transport, communication, entertainment; (6) Social mobility — urbanization offers escape from rigid social hierarchies. Seasonal/circular migration is significant — agricultural labourers move to construction, brick kilns, sugarcane harvesting for 4-8 months and return; estimated 100+ million seasonal migrants.',
    },
    {
      section: 'Consequences of Migration',
      content:
        'Positive effects: (1) Remittances — rural households receive income from urban migrants, improving living standards; (2) Skill transfer — migrants acquire skills and bring them back; (3) Demographic rebalancing — eases population pressure in over-populated areas; (4) Cultural exchange — promotes national integration; (5) Economic growth — migrants fill labour shortages in destination areas. Negative effects: (1) At origin — loss of productive workforce (brain drain), feminization of agriculture (women left behind), social disruption (family separation, child development); (2) At destination — pressure on urban infrastructure (housing, water, sanitation), growth of slums, exploitation of workers (low wages, no social security), social tensions (anti-migrant sentiments), environmental degradation; (3) Migrants face vulnerability — lack of identity documents, exclusion from welfare schemes, language barriers, poor working conditions. The massive reverse migration during the COVID-19 lockdown (March-June 2020) exposed the vulnerability of India\'s estimated 100+ million migrant workers — led to the e-Shram portal registration and One Nation One Ration Card implementation.',
    },
    {
      section: 'Migration Corridors & Patterns',
      content:
        'Major interstate migration corridors: UP-to-Maharashtra (largest corridor), UP-to-Delhi, Bihar-to-Delhi, Bihar-to-Maharashtra, Rajasthan-to-Gujarat, Odisha-to-Gujarat, and MP-to-Maharashtra. The "heartland-to-periphery" pattern is dominant — migrants from the relatively less developed Hindi belt states (UP, Bihar, MP, Rajasthan, Jharkhand, Chhattisgarh, Odisha) move to more developed states/cities (Maharashtra, Delhi, Gujarat, Karnataka, Tamil Nadu, Kerala). Major destination cities: Mumbai (receives migrants from all over India), Delhi-NCR (from UP, Bihar, Rajasthan), Bengaluru (from Tamil Nadu, Kerala, AP, NE), Surat (from Odisha, UP, Bihar — diamond and textile industries), Chennai, Hyderabad, Pune, Ahmedabad, Kolkata. Kerala is a unique case — it is both a major source of international emigrants (to Gulf countries) and a destination for domestic migrants from NE and eastern India. Intra-state migration is much larger than interstate — for example, rural-to-urban migration within Maharashtra or Tamil Nadu.',
    },
    {
      section: 'Government Response & Welfare Measures',
      content:
        'Key government measures for migrant welfare: (1) Inter-State Migrant Workmen Act 1979 — regulates employment of interstate migrants; requires registration and provision of displacement allowance, equal pay; largely ineffective due to poor implementation; (2) One Nation One Ration Card (ONORC, 2019) — enables migrant workers to access subsidized food grains under PDS in any state using their ration card and Aadhaar; about 80 crore beneficiaries; a landmark reform for food security portability; (3) e-Shram Portal (2021) — registers unorganized workers including migrants; over 29 crore registrations; provides accidental insurance of Rs 2 lakh; (4) PM SVANidhi — micro-credit to street vendors, many of whom are migrants; (5) Affordable Rental Housing Complexes (ARHCs) under PMAY-Urban — targets migrant workers/urban poor; (6) Building and Other Construction Workers Act 1996 — provides for welfare boards and cess-funded benefits. COVID-19 highlighted the need for comprehensive national migration policy — NITI Aayog and ILO have recommended a national framework for migration governance.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Migration is an important topic tested in geography, economy, and governance sections. UPSC asks about migration streams, consequences, and policy frameworks. SSC/RRB exams test about push-pull factors and migration-related schemes. Current affairs on ONORC, e-Shram, and migrant welfare are frequently tested, especially post-COVID.',
}
