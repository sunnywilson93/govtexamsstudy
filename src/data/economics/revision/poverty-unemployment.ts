import type { SubjectRevision } from '@/types/subject-notes'

export const povertyUnemploymentRevision: SubjectRevision = {
  topic: 'poverty-unemployment',
  bullets: [
    'Alagh Committee (1979): Calorie-based poverty line — 2400 kcal/day (rural), 2100 kcal/day (urban).',
    'Tendulkar Committee (2009): Expenditure-based — Rs 32/day urban, Rs 26/day rural (2004-05 prices).',
    'Rangarajan Committee (2014): Higher line — Rs 47/day urban, Rs 32/day rural (2011-12 prices).',
    'Multidimensional Poverty Index (MPI): NITI Aayog + UNDP/OPHI — health, education, standard of living (12 indicators). India\'s MPI headcount: 11.28% (2022-23), down from 29.17% (2013-14).',
    'Disguised Unemployment: Marginal productivity is zero — very common in Indian agriculture.',
    'PLFS (Periodic Labour Force Survey): By NSO. Unemployment Rate 2022-23: 3.2%. LFPR: 57.9%.',
    'Three employment measures: Usual Status (ps+ss) — lowest UR; CWS — medium; CDS — highest UR.',
    'MGNREGA: 100 days guaranteed wage employment per rural household. Work within 15 days or unemployment allowance.',
    'MGNREGA: 60:40 wage-material ratio. 1/3rd women. Wages linked to CPI-AL. Social audit mandatory.',
    'Structural Unemployment = skill mismatch. Cyclical = recession. Frictional = between jobs. Seasonal = agriculture.',
  ],
  comparisons: [
    {
      title: 'Poverty Line Committees',
      headers: ['Committee', 'Year', 'Basis', 'Key Feature'],
      rows: [
        ['Y.K. Alagh', '1979', 'Calorie intake', '2400 kcal rural, 2100 kcal urban'],
        ['Lakdawala', '1993', 'State-specific CPI', 'Used CPI-IW (urban) and CPI-AL (rural)'],
        ['Tendulkar', '2009', 'Monthly expenditure', 'Rs 816/month rural, Rs 1000/month urban'],
        ['Rangarajan', '2014', 'Higher expenditure', 'Rs 972/month rural, Rs 1407/month urban'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Poverty Committees Chronology — ALTR',
      mnemonic: 'Alagh, Lakdawala, Tendulkar, Rangarajan',
      explanation: 'Remember the poverty line committees in order: A-L-T-R. Alagh (1979, calorie), Lakdawala (1993, state CPI), Tendulkar (2009, expenditure), Rangarajan (2014, higher expenditure). "All Lines Tend to Rise."',
    },
  ],
}
