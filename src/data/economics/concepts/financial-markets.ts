import type { SubjectConcept } from '@/types/subject-notes'

export const financialMarketsConcept: SubjectConcept = {
  topic: 'financial-markets',
  title: 'Financial Markets & Instruments',
  description:
    'Money market, capital market, SEBI, stock exchanges, bonds, mutual funds, and key financial instruments in India for competitive exam preparation.',
  category: 'Banking & Monetary',
  keyDates: [
    { year: '1875', event: 'Bombay Stock Exchange (BSE) established — Asia\'s oldest stock exchange' },
    { year: '1992', event: 'SEBI given statutory powers under the SEBI Act 1992; National Stock Exchange (NSE) incorporated' },
    { year: '1994', event: 'NSE started electronic screen-based trading — revolutionised Indian capital markets' },
    { year: '2000', event: 'Dematerialisation became mandatory; NSDL and CDSL fully operational' },
    { year: '2003', event: 'Fiscal Responsibility and Budget Management (FRBM) Act — limited RBI\'s participation in primary government securities market' },
    { year: '2015', event: 'Gold Monetisation Scheme and Sovereign Gold Bond launched' },
    { year: '2024', event: 'India\'s market capitalisation crossed $4 trillion — 5th largest globally' },
  ],
  notes: [
    {
      section: 'Money Market',
      content:
        'The money market deals in short-term funds (up to 1 year). Key instruments: Treasury Bills (T-Bills): Issued by RBI on behalf of the Government of India. Available in 91-day, 182-day, and 364-day maturities. Sold at a discount, redeemed at par. Zero-coupon instruments. Minimum investment: Rs 25,000. Commercial Paper (CP): Short-term unsecured promissory note issued by corporates. Maturity: 7 days to 1 year. Certificate of Deposit (CD): Time deposit issued by banks (maturity: 7 days to 1 year) and financial institutions (1-3 years). Call Money/Notice Money: Overnight (call) or 2-14 day (notice) interbank lending. Only scheduled banks and primary dealers can participate. Repo/Reverse Repo: Short-term borrowing/lending against government securities (part of LAF).',
    },
    {
      section: 'Capital Market',
      content:
        'The capital market deals in long-term funds (over 1 year). Primary Market: Where new securities are issued (IPO, FPO, Rights Issue, Bonus Issue). IPO = Initial Public Offering (first time a company offers shares to the public). FPO = Follow-on Public Offer. Book Building: Price discovery mechanism where investors bid within a price band. Secondary Market: Where existing securities are traded (BSE, NSE). BSE benchmark index: Sensex (30 stocks). NSE benchmark index: Nifty 50 (50 stocks). Demat Account: Electronic holding of securities — maintained by Depositories (NSDL, CDSL). Depository Participants (DPs) are intermediaries (banks, brokers). SEBI is the regulator of the capital market.',
    },
    {
      section: 'SEBI — Securities & Exchange Board of India',
      content:
        'SEBI was established in 1988 as a non-statutory body and given statutory powers in 1992 (SEBI Act). Headquarters: Mumbai. Chairman (as of 2025): Tuhin Kanta Pandey. Functions: (1) Protect investor interests, (2) Regulate securities markets, (3) Promote market development. SEBI regulates: Stock exchanges, mutual funds, credit rating agencies, portfolio managers, investment advisers, foreign portfolio investors (FPIs), alternative investment funds (AIFs). Key regulations: Prohibition of Insider Trading, Substantial Acquisition of Shares (Takeover Code), Listing Obligations (LODR). SEBI can impose penalties, suspend trading, and order disgorgement of ill-gotten gains.',
    },
    {
      section: 'Government Securities & Bonds',
      content:
        'Government Securities (G-Secs): Debt instruments issued by the central or state government. Dated Securities: Long-term (5-40 years), pay semi-annual coupon interest. State Development Loans (SDLs): Issued by state governments. Sovereign Gold Bonds (SGB): Issued by RBI on behalf of GoI — denominated in grams of gold, pay 2.5% annual interest. Inflation-Indexed Bonds: Protect against inflation. Corporate Bonds: Issued by companies — higher yield but higher risk than G-Secs. Bond prices and yields move inversely. When RBI cuts repo rate, bond prices rise (yields fall). The yield curve (plotting yields against maturities) is normally upward-sloping. An inverted yield curve may signal recession.',
    },
    {
      section: 'Mutual Funds & Other Instruments',
      content:
        'Mutual Funds: Pool money from investors to invest in diversified portfolios. Regulated by SEBI. Types: Equity funds, Debt funds, Hybrid funds, Index funds, ELSS (tax-saving), Money Market funds. NAV (Net Asset Value) = (Total Assets − Total Liabilities) / Number of Units. AMFI (Association of Mutual Funds in India) is the industry body. Exchange Traded Funds (ETFs): Trade on stock exchanges like shares; track an index. Government uses CPSE ETF and Bharat Bond ETF for disinvestment. Real Estate Investment Trusts (REITs) and Infrastructure Investment Trusts (InvITs): Allow small investors to invest in real estate/infrastructure projects. GIFT City (Gujarat International Finance Tec-City) in Gandhinagar is India\'s first International Financial Services Centre (IFSC), regulated by IFSCA.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Financial markets are heavily tested in banking exams. IBPS PO/Clerk exams regularly ask about money market instruments (T-Bills, CP, CD), SEBI functions, and stock exchange indices. UPSC tests the broader market structure, bond yield dynamics, and government securities. SSC exams ask factual questions about BSE/NSE, mutual fund types, and SEBI headquarters.',
}
