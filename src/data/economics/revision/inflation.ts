import type { SubjectRevision } from '@/types/subject-notes'

export const inflationRevision: SubjectRevision = {
  topic: 'inflation',
  bullets: [
    'Inflation = sustained rise in general price level. Deflation = sustained fall. Disinflation = falling rate of inflation. Stagflation = stagnation + inflation.',
    'Demand-Pull Inflation: "Too much money chasing too few goods." Cost-Push Inflation: Rise in input costs (oil, wages).',
    'CPI (Consumer Price Index) Combined: Used by RBI for inflation targeting. Base year 2012. Published by NSO monthly.',
    'WPI (Wholesale Price Index): Base year 2011-12. Published by Office of Economic Adviser, Ministry of Commerce. Does NOT include services.',
    'Flexible Inflation Targeting (FIT): CPI target of 4% ±2% (2% to 6%). RBI Act amended in 2016.',
    'MPC (Monetary Policy Committee): 6 members — 3 RBI (Governor + 2) + 3 external (appointed by government). Governor has casting vote.',
    'If inflation breaches tolerance band for 3 consecutive quarters, RBI must report to government with reasons and remedies.',
    'Core Inflation = CPI/WPI excluding food and fuel (volatile components).',
    'Phillips Curve: Inverse relationship between inflation and unemployment (short run).',
    'Food & Beverages has the highest weight (~45.9%) in CPI basket.',
    'Inflation benefits debtors (repay in cheaper money), hurts creditors and fixed-income groups.',
    'Real Interest Rate = Nominal Interest Rate − Inflation Rate. If negative, savings lose value.',
  ],
  comparisons: [
    {
      title: 'CPI vs WPI',
      headers: ['Feature', 'CPI', 'WPI'],
      rows: [
        ['Full form', 'Consumer Price Index', 'Wholesale Price Index'],
        ['Measures', 'Retail/consumer prices', 'Wholesale/producer prices'],
        ['Services', 'Included', 'NOT included'],
        ['Published by', 'NSO (MoSPI)', 'OEA (Ministry of Commerce)'],
        ['Base year', '2012', '2011-12'],
        ['Used for', 'RBI monetary policy (since 2014)', 'GDP deflation, trade analysis'],
        ['Items', '299', '697'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Types of Inflation — DCS',
      mnemonic: 'Demand-pull, Cost-push, Structural',
      explanation: 'Demand-Pull = excess demand (spending). Cost-Push = rising costs (supply side). Structural = bottlenecks in developing economies. Remember: "Demand Creates Shortages" — DCS.',
    },
    {
      title: 'MPC Composition — "3+3, Gov Casts"',
      mnemonic: '3 RBI + 3 External = 6 members; Governor has casting vote',
      explanation: 'MPC has 3 internal RBI members (Governor as chairperson + 2 others) and 3 external members nominated by the central government. Decisions by majority vote; Governor has the casting vote in case of a tie.',
    },
  ],
}
