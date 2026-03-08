import type { SubjectRevision } from '@/types/subject-notes'

export const moneySupplyRevision: SubjectRevision = {
  topic: 'money-supply',
  bullets: [
    'M1 (Narrow Money) = Currency with public + Demand deposits + Other deposits with RBI — most liquid.',
    'M2 = M1 + Post Office savings deposits.',
    'M3 (Broad Money) = M1 + Time deposits with banks — most commonly used measure.',
    'M4 = M3 + Total Post Office deposits (excluding NSC) — least liquid.',
    'Reserve Money (M0) = Currency in Circulation + Bankers\' Deposits with RBI + Other Deposits with RBI = High-Powered Money.',
    'Money Multiplier = M3 / M0. Higher CRR → lower money multiplier.',
    'RBI issues all currency notes except Re 1 note (issued by Ministry of Finance, signed by Finance Secretary).',
    'All coins are minted by Government of India (mints: Mumbai, Kolkata, Hyderabad, Noida).',
    'RBI follows Minimum Reserve System (since 1957) — must maintain Rs 200 crore (Rs 115 crore gold + Rs 85 crore foreign securities).',
    'Fisher\'s Equation: MV = PT (Money × Velocity = Price × Transactions).',
    'e-Rupee (CBDC) pilot launched by RBI in December 2022 — digital form of legal tender.',
    'Demonetisation (November 8, 2016): Rs 500 and Rs 1000 notes demonetised. Rs 2000 notes withdrawn in May 2023.',
  ],
  comparisons: [
    {
      title: 'Money Supply Aggregates',
      headers: ['Measure', 'Components', 'Liquidity'],
      rows: [
        ['M1', 'Currency + Demand deposits + Other RBI deposits', 'Most liquid'],
        ['M2', 'M1 + Post Office savings', 'High'],
        ['M3', 'M1 + Time deposits', 'Moderate (most used)'],
        ['M4', 'M3 + All Post Office deposits (excl. NSC)', 'Least liquid'],
        ['M0', 'Currency in circulation + Bank deposits with RBI', 'Monetary base'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Money Supply Order — "1234 Gets Broader"',
      mnemonic: 'M1 = Narrow, M3 = Broad, M4 = Broadest',
      explanation: 'As you go from M1 to M4, money supply gets broader (includes less liquid assets). M1 is the most liquid (cash + demand deposits). Each subsequent measure adds less liquid components.',
    },
    {
      title: 'Reserve Money Components — CCB',
      mnemonic: 'Currency in Circulation, Cash (bankers\' deposits with RBI), Bank other deposits',
      explanation: 'Reserve Money (M0/High-Powered Money) = Currency in Circulation + Bankers\' Deposits with RBI + Other Deposits with RBI. It forms the base for credit creation.',
    },
  ],
}
