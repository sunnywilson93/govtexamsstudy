import type { SubjectConcept } from '@/types/subject-notes'

export const populationConcept: SubjectConcept = {
  topic: 'population',
  title: 'Population of India',
  description:
    'India is the most populous country in the world (surpassing China in 2023) with about 1.44 billion people. The 2011 Census recorded 1.21 billion. India\'s demographic profile — growth rate, density, sex ratio, literacy, and demographic dividend — is crucial for government exams.',
  category: 'Human Geography',
  keyDates: [
    { year: '2023', event: 'India becomes the world\'s most populous country, surpassing China (UN estimate)' },
    { year: 'Census 2011', event: 'Population 1,21,05,69,573 (1.21 billion); decadal growth rate 17.7%' },
    { year: 'Density 2011', event: '382 persons per sq km; Bihar highest density (1,106), Arunachal Pradesh lowest (17)' },
    { year: 'Sex Ratio 2011', event: '943 females per 1,000 males; Kerala highest (1,084), Haryana lowest (879)' },
    { year: 'Literacy 2011', event: '74.04% (males 82.14%, females 65.46%); Kerala highest (93.91%), Bihar lowest (63.82%)' },
    { year: 'UP', event: 'Most populous state (199.8 million in 2011); Sikkim least populous (6.1 lakh)' },
    { year: 'Demographic Dividend', event: 'About 65% of population below 35 years — youth bulge expected to drive economic growth' },
  ],
  notes: [
    {
      section: 'Population Growth Trends',
      content:
        'India\'s population has grown from 361 million (1951) to 1.21 billion (2011), and is estimated at 1.44 billion (2023). The decadal growth rate has declined from 21.5% (1991-2001) to 17.7% (2001-2011). Total Fertility Rate (TFR) has dropped from 5.9 (1950s) to about 2.0 (2020, NFHS-5), which is at replacement level. India experienced four phases of growth: (1) Pre-1921 — stagnant/fluctuating growth (1921 is called "Great Divide" or "Demographic Divide" as population consistently grew after this year); (2) 1921-1951 — steady growth; (3) 1951-1981 — rapid growth ("population explosion") due to declining death rates with still-high birth rates; (4) Post-1981 — declining growth rate but increasing absolute numbers. India\'s demographic transition is still in progress — from high birth/death rates to low birth/death rates. The National Population Policy 2000 aims for population stabilization by 2045.',
    },
    {
      section: 'Population Distribution & Density',
      content:
        'India\'s population density (2011) is 382 persons per sq km. Distribution is highly uneven — the Indo-Gangetic Plain (UP, Bihar, West Bengal) is the most densely populated, while the Himalayan states, NE India, and the Thar Desert are sparsely populated. State-wise: Bihar has the highest density (1,106/sq km), followed by West Bengal (1,028) and Kerala (860). Arunachal Pradesh has the lowest density (17/sq km), followed by Mizoram (52). Among UTs, Delhi has the highest density (11,320/sq km), while Ladakh has the lowest. UP is the most populous state (199.8 million) — if it were a country, it would be the 5th most populous in the world. Sikkim is the least populous state (6.1 lakh). Five states (UP, Maharashtra, Bihar, West Bengal, Madhya Pradesh) together hold about 47% of India\'s population. Rural population constitutes about 68.8% and urban about 31.2% (2011).',
    },
    {
      section: 'Sex Ratio & Literacy',
      content:
        'Sex Ratio (2011): 943 females per 1,000 males (improved from 933 in 2001). Kerala has the highest sex ratio (1,084), followed by Tamil Nadu (996) and Andhra Pradesh (993). Haryana has the lowest sex ratio (879), followed by J&K (889) and Sikkim (890). Child Sex Ratio (0-6 years): 914 — alarmingly low, indicating sex-selective practices; worst in Haryana (834) and Punjab (846). Beti Bachao Beti Padhao campaign (2015) addresses this. Literacy (2011): 74.04% (males 82.14%, females 65.46%); gender gap is 16.68 percentage points. Kerala has the highest literacy (93.91% — first fully literate state by 1991 total literacy campaign), followed by Lakshadweep (91.85%) and Mizoram (91.33%). Bihar has the lowest literacy (63.82%). Literacy is defined (Census) as the ability to read and write with understanding in any language for persons aged 7+. The literacy rate has risen dramatically from 18.33% (1951) to 74.04% (2011). Saakshar Bharat programme targets adult literacy.',
    },
    {
      section: 'Demographic Dividend & Age Structure',
      content:
        'India has a young population — about 65% below 35 years and about 50% below 25 years. The median age is about 28 years (compared to 38 in China, 48 in Japan). This "demographic dividend" — a large working-age population relative to dependents — is expected to last until the 2040s-50s and can potentially boost economic growth if the youth are skilled and employed. The dependency ratio (ratio of non-working to working-age population) is declining. However, challenges include: high unemployment among youth (especially educated youth), skill gaps (only about 5% of Indian workforce is formally skilled compared to 96% in South Korea), regional disparities (southern and western states are aging faster while UP, Bihar, MP have younger demographics), and the need for massive job creation. India adds about 12 million people to the workforce annually. National Skill Development Mission (2015) and Skill India Mission aim to train 400 million youth. National Education Policy 2020 aims to transform education for demographic dividend realization.',
    },
    {
      section: 'Census & Population Policy',
      content:
        'The Census of India is conducted every 10 years by the Registrar General and Census Commissioner. The first Census was in 1872 (non-synchronous) and the first synchronous Census in 1881. India has completed 15 Censuses (1872-2011). The Census 2021 has been postponed due to COVID-19. The Census Act 1948 provides the legal framework. The Census collects data on population, housing, religion, caste (SC/ST), occupation, fertility, mortality, migration, and disability. National Population Register (NPR) is linked to the Census — registers every usual resident. India launched its family planning programme in 1952 — the first country in the world to do so. National Population Policy 2000 aims for: (1) Immediate — address unmet needs for contraception and healthcare; (2) Medium-term — bring TFR to replacement level (2.1) by 2010 (achieved by 2020); (3) Long-term — achieve population stabilization by 2045. NFHS (National Family Health Survey) is a key data source — NFHS-5 (2019-21) shows TFR at 2.0, MMR declining, and IMR at 35.2.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Population geography is a very high-frequency topic. SSC/RRB exams test highest/lowest density, sex ratio, literacy stats by state. UPSC asks about demographic dividend, population policies, and Census concepts. Current affairs on NFHS data, demographic transition, and Census 2021 postponement are important.',
}
