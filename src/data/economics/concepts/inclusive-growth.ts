import type { SubjectConcept } from '@/types/subject-notes'

export const inclusiveGrowthConcept: SubjectConcept = {
  topic: 'inclusive-growth',
  title: 'Inclusive Growth & Inequality',
  description:
    'Inclusive development, Gini coefficient, HDI, SDGs, regional disparities, and policies for equitable growth in India.',
  category: 'Social & Contemporary',
  keyDates: [
    { year: '2007', event: 'Eleventh Five Year Plan introduced "Inclusive Growth" as the central theme' },
    { year: '2015', event: 'UN adopted 17 Sustainable Development Goals (SDGs) — deadline 2030' },
    { year: '2006', event: 'Arjun Sengupta Committee on Unorganised Sector — 77% lived on less than Rs 20/day' },
    { year: '2022', event: 'India ranked 132 out of 191 on HDI (UNDP Human Development Report)' },
    { year: '2023', event: 'India\'s SDG India Index by NITI Aayog — Kerala topped; Bihar ranked lowest' },
    { year: '2017', event: 'World Inequality Report highlighted India\'s rising income inequality' },
  ],
  notes: [
    {
      section: 'Inclusive Growth — Concept',
      content:
        'Inclusive growth means economic growth that creates opportunities for all segments of population and distributes the benefits equitably. It is growth that reduces poverty, unemployment, and inequality simultaneously. India has achieved high GDP growth but the benefits have not been shared equally — disparities persist across income groups, regions, genders, castes, and rural-urban areas. UNDP definition: Growth that not only creates new economic opportunities but also ensures equal access to them. The 11th Five Year Plan (2007-12) made "Inclusive Growth" its core objective. The 12th FYP aimed for "Faster, Sustainable, and More Inclusive Growth." Key dimensions: Income inclusion, employment inclusion, social inclusion (education, health), regional inclusion, gender inclusion.',
    },
    {
      section: 'Measuring Inequality',
      content:
        'Gini Coefficient: Measures inequality on a scale of 0 (perfect equality) to 1 (perfect inequality). India\'s consumption Gini: ~0.35 (moderate by global standards), but income/wealth Gini is much higher (~0.54 wealth Gini). Lorenz Curve: Graphical representation — the farther it is from the 45-degree line of equality, the greater the inequality. Palma Ratio: Ratio of the richest 10% to the poorest 40%. Oxfam reports: Top 10% of Indians own 77% of wealth; top 1% own 40.5%. Kuznets Curve: Hypothesis that inequality first increases then decreases as economies develop (inverted-U shape). India appears to still be on the rising part of the curve. Piketty (Capital in the 21st Century): When return on capital (r) exceeds economic growth (g), inequality widens. India\'s r has consistently exceeded g for the wealthy.',
    },
    {
      section: 'Human Development Index (HDI)',
      content:
        'HDI (UNDP): Composite index of Life Expectancy (health), Mean Years of Schooling + Expected Years of Schooling (education), and GNI per capita (PPP) (standard of living). Ranges from 0 to 1. Categories: Very High (>0.8), High (0.7-0.8), Medium (0.55-0.7), Low (<0.55). India\'s HDI: 0.644 (2022) — Medium Human Development category, ranked 132/191. India\'s rank has improved from 189/191 in 1990 to 132 in 2022. Inequality-adjusted HDI (IHDI): Adjusts HDI for inequality — India loses ~26% of HDI when adjusted. Gender Development Index (GDI): Compares female and male HDI. Gender Inequality Index (GII): Reflects gender-based disadvantages in reproductive health, empowerment, and labour market. Multidimensional Poverty Index (MPI): Developed by UNDP and OPHI — India\'s MPI headcount fell from 55.1% (2005-06) to 11.28% (2022-23) — one of the fastest reductions globally.',
    },
    {
      section: 'Sustainable Development Goals (SDGs)',
      content:
        '17 SDGs adopted by UN in 2015 (Agenda 2030): No Poverty (1), Zero Hunger (2), Good Health (3), Quality Education (4), Gender Equality (5), Clean Water (6), Affordable Energy (7), Decent Work (8), Industry & Innovation (9), Reduced Inequalities (10), Sustainable Cities (11), Responsible Consumption (12), Climate Action (13), Life Below Water (14), Life on Land (15), Peace & Justice (16), Partnerships (17). India\'s SDG performance (NITI Aayog SDG India Index): Kerala, Tamil Nadu, Himachal Pradesh are top performers. Bihar, Jharkhand, Assam rank lowest. India is on track for some goals (clean energy, industry) but lagging on hunger, health, and gender equality.',
    },
    {
      section: 'Regional Disparities',
      content:
        'India has significant inter-state disparities. Per capita GSDP: Goa (highest, ~Rs 5 lakh), Delhi, Sikkim vs Bihar (lowest, ~Rs 55,000), Jharkhand, UP. Southern and western states (Karnataka, Tamil Nadu, Maharashtra, Gujarat) have grown faster than eastern and northern states (Bihar, UP, MP, Odisha). Causes: Historical neglect, low industrialisation, poor infrastructure, governance deficits, adverse geography. Corrective measures: Finance Commission transfers (higher share to lower-income states), centrally sponsored schemes, special category status, Aspirational Districts Programme. Urban-Rural Divide: Urban poverty: ~5.3%, Rural poverty: ~7.2% (MPI 2022-23). Monthly Per Capita Consumption Expenditure: Urban Rs 6,459 vs Rural Rs 3,773 (Household Consumption Expenditure Survey 2022-23). Migration from rural to urban areas is significant (~45 crore internal migrants).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Inclusive growth is a core UPSC Mains topic and increasingly tested in Prelims. Questions on HDI components, SDG targets, and Gini coefficient are common. SSC exams test SDG numbers, India\'s HDI rank, and inequality statistics. Banking exams ask about financial inclusion and regional development indicators.',
}
