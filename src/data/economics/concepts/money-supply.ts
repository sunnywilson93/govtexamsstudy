import type { SubjectConcept } from '@/types/subject-notes'

export const moneySupplyConcept: SubjectConcept = {
  topic: 'money-supply',
  title: 'Money & Money Supply',
  description:
    'Functions of money, money supply aggregates (M0–M4), money multiplier, currency in circulation, and RBI\'s role in controlling money supply for government exam preparation.',
  category: 'Basic Concepts',
  keyDates: [
    { year: '1935', event: 'Reserve Bank of India established — sole authority to issue currency notes in India' },
    { year: '1957', event: 'India adopted decimal coinage system (100 paise = 1 rupee)' },
    { year: '1977', event: 'RBI introduced the new money supply measures (M1, M2, M3, M4) based on Second Working Group recommendations' },
    { year: '2016', event: 'Demonetisation of Rs 500 and Rs 1000 notes (November 8) — sharp contraction in currency in circulation' },
    { year: '2023', event: 'Rs 2000 notes withdrawn from circulation (May) — exchanged/deposited by September 30, 2023' },
    { year: '1940', event: 'One-rupee note is issued by Government of India (Ministry of Finance), not RBI — continues to this day' },
  ],
  notes: [
    {
      section: 'Functions of Money',
      content:
        'Money serves four primary functions: (1) Medium of Exchange — eliminates the need for double coincidence of wants required in barter. (2) Measure of Value (Unit of Account) — provides a common denominator to express prices. (3) Store of Value — allows purchasing power to be saved for future use (limited by inflation). (4) Standard of Deferred Payments — facilitates credit transactions and future obligations. Money has evolved from commodity money (gold, silver) → metallic coins → paper currency → bank money (cheques, deposits) → digital money (UPI, CBDC). India launched the e-Rupee (CBDC) pilot in December 2022.',
    },
    {
      section: 'Money Supply Aggregates in India',
      content:
        'RBI defines money supply in four measures: M1 (Narrow Money) = Currency with public + Demand deposits with banks + Other deposits with RBI. M2 = M1 + Post Office savings deposits. M3 (Broad Money) = M1 + Time deposits with banks. M4 = M3 + Total Post Office deposits (excluding NSC). M1 is the most liquid; M4 is the least liquid. M3 is the most commonly used measure and is often called "aggregate monetary resources." Currency with public = Currency in circulation − Cash with banks. RBI publishes money supply data fortnightly.',
    },
    {
      section: 'Reserve Money (M0 / High-Powered Money)',
      content:
        'Reserve Money (M0) = Currency in Circulation + Bankers\' Deposits with RBI + Other Deposits with RBI. It is also called High-Powered Money (H) or Monetary Base because it forms the base for money creation through the banking system. Money Multiplier (m) = M3 / M0. If reserve ratio is r and currency-deposit ratio is c, then m = (1+c)/(c+r). A higher CRR reduces the money multiplier. RBI controls M0 directly through OMOs, CRR changes, and currency issuance. Changes in M0 lead to amplified changes in M3 through the multiplier effect.',
    },
    {
      section: 'Currency Issuance in India',
      content:
        'RBI issues all currency notes except the one-rupee note (issued by the Ministry of Finance, signed by the Finance Secretary). All coins are minted by the Government of India (at mints in Mumbai, Kolkata, Hyderabad, Noida). RBI follows the Minimum Reserve System (MRS) since 1957 — it must maintain minimum reserves of Rs 200 crore (Rs 115 crore in gold + Rs 85 crore in foreign securities). Section 22 of the RBI Act gives RBI the sole right to issue bank notes. Notes are legal tender — they must be accepted for transactions. Coins are limited legal tender — coins up to Re 1 are legal tender for any amount; coins above Re 1 are legal tender up to Rs 1000.',
    },
    {
      section: 'Velocity of Circulation & Quantity Theory',
      content:
        'Velocity of Circulation (V) = Number of times a unit of money changes hands in a given period. Fisher\'s Equation of Exchange: MV = PT, where M = money supply, V = velocity, P = price level, T = volume of transactions. This implies that if V and T are constant, an increase in M leads to a proportional increase in P (inflation). Cambridge Equation: Md = kPY (people hold a fraction k of nominal income as money). Monetarists (Milton Friedman) argue that inflation is "always and everywhere a monetary phenomenon." This theoretical base underpins RBI\'s inflation-targeting framework adopted in 2016.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Money supply is a high-frequency topic especially in banking exams (IBPS PO/Clerk) and UPSC. Questions on M1 vs M3 definitions, components of reserve money, and the money multiplier concept appear regularly. SSC exams test factual recall — who issues one-rupee notes, what is legal tender, and the Minimum Reserve System. UPSC may frame analytical questions combining money supply with inflation or monetary policy.',
}
