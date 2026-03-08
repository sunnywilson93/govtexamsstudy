import type { SubjectRevision } from '@/types/subject-notes'

export const rbiRevision: SubjectRevision = {
  topic: 'rbi',
  bullets: [
    'RBI established: April 1, 1935 under RBI Act 1934. Nationalised: January 1, 1949. HQ: Mumbai.',
    'Recommendation of Hilton Young Commission (1926) led to RBI\'s establishment.',
    'First Governor: Sir Osborne Smith. First Indian Governor: C.D. Deshmukh. Current (2025): Sanjay Malhotra.',
    'RBI issues all currency notes except Re 1 note (Ministry of Finance). Coins minted by Government of India.',
    'Repo Rate: Rate at which RBI lends to banks (currently 6.25%). Reverse Repo: Derived from SDF (currently ~6%).',
    'CRR (Cash Reserve Ratio): % of NDTL kept with RBI as cash. Currently 4%. No interest paid.',
    'SLR (Statutory Liquidity Ratio): % of NDTL in liquid assets (cash, gold, G-Secs). Currently 18%.',
    'LAF Corridor: MSF (repo+0.25%) → Repo (policy rate) → SDF (repo−0.25%). SDF replaced reverse repo as floor in April 2022.',
    'MPC: 6 members (3 RBI + 3 external). Decides repo rate. Governor has casting vote. Meets 6 times/year.',
    'OMO: RBI buys G-Secs → injects liquidity (expansionary). Sells G-Secs → absorbs liquidity (contractionary).',
    'Qualitative tools: Margin requirements, moral suasion, direct action, PSL norms (40% of ANBC).',
    'Section 22 of RBI Act: Sole right to issue bank notes. Section 24: SLR. Section 42: CRR.',
  ],
  comparisons: [
    {
      title: 'Repo Rate vs Reverse Repo vs CRR vs SLR',
      headers: ['Tool', 'Current Rate', 'Purpose', 'Key Feature'],
      rows: [
        ['Repo Rate', '6.25%', 'RBI lends to banks', 'Policy rate; decided by MPC'],
        ['SDF', '6.00%', 'Banks park funds with RBI', 'Floor of LAF corridor (since April 2022)'],
        ['MSF', '6.50%', 'Emergency borrowing from RBI', 'Ceiling of LAF corridor; repo + 0.25%'],
        ['CRR', '4%', 'Cash with RBI', 'No interest paid; reduces lendable funds'],
        ['SLR', '18%', 'Liquid assets maintained', 'Cash + Gold + G-Secs; earns interest'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'RBI Functions — BIRD-FDP',
      mnemonic: 'Banker (to govt & banks), Issuer (currency), Regulator, Developer, Foreign exchange, Debt management, Payment systems',
      explanation: 'RBI\'s 7 key functions: Banker to Government and Banks, Issuer of Currency, Regulator of Banking, Developmental Role, Foreign Exchange Manager, Debt Manager, Payment System Oversight.',
    },
    {
      title: 'LAF Corridor — "MSF on top, SDF at bottom"',
      mnemonic: 'MSF (ceiling) > Repo (middle) > SDF (floor)',
      explanation: 'The LAF corridor has MSF at the top (repo + 0.25%), Repo rate in the middle (policy rate), and SDF at the bottom (repo − 0.25%). Banks borrow at repo/MSF and park at SDF.',
    },
  ],
}
