import type { SubjectConcept } from '@/types/subject-notes'

export const economicReformsConcept: SubjectConcept = {
  topic: 'economic-reforms',
  title: 'LPG Reforms (1991) & Beyond',
  description:
    'Liberalisation, Privatisation, Globalisation — the 1991 economic reforms, their background, key measures, and impact on Indian economy.',
  category: 'Planning & Development',
  keyDates: [
    { year: '1991', event: 'New Economic Policy (NEP) announced by FM Manmohan Singh under PM Narasimha Rao — LPG reforms' },
    { year: '1991', event: 'India pledged 67 tonnes of gold to Bank of England and UBS to secure emergency loans' },
    { year: '1991', event: 'Industrial Policy Resolution 1991 — abolished industrial licensing for most industries' },
    { year: '1991', event: 'Rupee devalued by ~20% in two steps (July 1-3)' },
    { year: '1992', event: 'SEBI made statutory body; NSE incorporated; disinvestment began' },
    { year: '2016', event: 'Demonetisation of Rs 500 and Rs 1000 notes (November 8)' },
    { year: '2017', event: 'GST launched — biggest indirect tax reform since independence' },
  ],
  notes: [
    {
      section: 'Background — Crisis of 1991',
      content:
        'By 1991, India faced a severe economic crisis: Forex reserves fell to barely 2 weeks of import cover (~$1.2 billion). Fiscal deficit exceeded 8% of GDP. Inflation was ~13%. External debt had grown sharply — debt service ratio was ~35%. Gulf War (1990) led to a spike in oil prices and loss of remittances from the Middle East. India was on the verge of sovereign default. As an emergency measure, India pledged 67 tonnes of gold to the Bank of England and Union Bank of Switzerland. India approached the IMF for a $2.2 billion loan — IMF conditionality required structural reforms. PM P.V. Narasimha Rao and FM Dr. Manmohan Singh initiated the New Economic Policy (NEP) — Liberalisation, Privatisation, Globalisation (LPG).',
    },
    {
      section: 'Liberalisation',
      content:
        'Industrial Licensing: Industrial Policy 1991 abolished the "Licence Raj" — licensing retained only for 6 industries (later reduced to 2: defence production and atomic energy). MRTP Act (Monopolies and Restrictive Trade Practices) relaxed — later replaced by Competition Act 2002. Small-scale industry reservation reduced (from 800+ items to fewer than 20). Financial Sector Reforms: Interest rate deregulation, new private banks licensed (ICICI Bank, HDFC Bank in 1994), capital adequacy norms (Basel standards), SEBI empowered. External Sector Reforms: Exchange rate unified (dual rate abolished 1993), current account convertibility (1994), tariff reduction (peak customs duty from 150% to ~15%), quantitative restrictions on imports removed. Tax Reforms: Direct tax rates reduced, VAT introduced (replaced state-level sales tax), tax base broadened.',
    },
    {
      section: 'Privatisation & Globalisation',
      content:
        'Privatisation: Government reduced its role from "commanding heights of economy" to facilitator. Disinvestment of PSU shares began. Strategic sale of companies (Modern Food Industries to Hindustan Lever, VSNL to Tata). National Investment Fund created in 2005 to manage disinvestment proceeds. FDI limits raised across sectors. However, full privatisation was politically difficult — the term "disinvestment" was preferred. Globalisation: Integration with the global economy. India joined WTO (1995 founding member). FDI inflows surged — from $129 million (1991) to $84 billion (2021-22). India became a major IT/BPO services exporter. MNCs established operations in India. However, globalisation also brought challenges: job displacement in traditional sectors, import competition for domestic industry, widening inequality.',
    },
    {
      section: 'Second Generation Reforms (2000s onwards)',
      content:
        'Labour Market Reforms: Code on Wages (2019), Industrial Relations Code (2020), Social Security Code (2020), Occupational Safety Code (2020) — consolidated 29 labour laws into 4 codes. Implementation pending as states frame rules. Factor Market Reforms: Land Acquisition Act 2013, IBC 2016, RERA 2016. Agricultural Reforms: Controversial farm laws of 2020 (repealed in 2021) aimed at deregulating agricultural markets. MSP-based procurement continues. Goods and Services Tax (2017): Unified indirect tax, eliminated inter-state barriers. Digital India & JAM Trinity: Aadhaar, UPI, DBT, DigiLocker — digital infrastructure for governance. Make in India (2014), Start-Up India (2016), Stand-Up India (2016): Manufacturing and entrepreneurship promotion. PLI Scheme (2020): Production Linked Incentives across 14 sectors.',
    },
    {
      section: 'Impact & Assessment of Reforms',
      content:
        'Positive: GDP growth accelerated from "Hindu rate of growth" (3.5%) to 6-8% average. Foreign investment surged. Poverty declined significantly. Middle class expanded. India became a global IT services hub. Consumer choices expanded. Forex reserves built up. Negative/Challenges: Jobless growth — manufacturing employment did not grow proportionally. Agrarian distress persisted. Regional disparities widened (west/south grew faster than east/north). Inequality increased — India has one of the highest wealth inequality levels. Informal sector remained large (~90% of workforce). Environmental costs of rapid industrialisation. India is now at ~$3,700 per capita GDP (nominal, 2023-24) and aims to become a $5 trillion economy. The challenge is to make growth more inclusive and sustainable.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'LPG reforms are one of the most important economics topics. UPSC tests the background (1991 crisis), specific reforms, and their impact. SSC exams ask about the year, key personalities, and what was abolished/reformed. Banking exams test financial sector reforms and FDI liberalisation. Current affairs questions on second-generation reforms and PLI schemes are common.',
}
