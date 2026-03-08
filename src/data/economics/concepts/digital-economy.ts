import type { SubjectConcept } from '@/types/subject-notes'

export const digitalEconomyConcept: SubjectConcept = {
  topic: 'digital-economy',
  title: 'Digital Economy & Fintech',
  description:
    'UPI, digital payments, CBDC, cryptocurrency regulation, Digital India, e-governance, and India\'s digital public infrastructure.',
  category: 'Social & Contemporary',
  keyDates: [
    { year: '2016', event: 'UPI (Unified Payments Interface) launched by NPCI — revolutionised digital payments' },
    { year: '2015', event: 'Digital India programme launched (July 1) — transform India into a digitally empowered society' },
    { year: '2022', event: 'RBI launched e-Rupee (CBDC) pilot — Digital Rupee for retail and wholesale' },
    { year: '2022', event: 'Cryptocurrency taxed at 30% flat rate + 1% TDS on transfers (Union Budget 2022)' },
    { year: '2009', event: 'Aadhaar project launched under UIDAI — world\'s largest biometric ID system' },
    { year: '2023', event: 'UPI processed 10+ billion transactions in a single month for the first time' },
    { year: '2024', event: 'UPI crossed 13+ billion transactions/month; India accounts for 46% of global real-time payments' },
  ],
  notes: [
    {
      section: 'Digital Public Infrastructure (DPI) — India Stack',
      content:
        'India has built a world-leading Digital Public Infrastructure stack: Layer 1 — Identity: Aadhaar (12-digit unique ID, biometric + demographic, 1.38 billion enrolments). Run by UIDAI. Aadhaar is not a citizenship proof but an identity proof. Layer 2 — Payments: UPI (Unified Payments Interface), AEPS (Aadhaar-Enabled Payment System), RuPay cards. Layer 3 — Data: DigiLocker (document storage), Account Aggregator (consent-based financial data sharing). JAM Trinity: Jan Dhan + Aadhaar + Mobile — enables Direct Benefit Transfer (DBT), reducing leakage in subsidies. Over Rs 34 lakh crore transferred via DBT. India\'s DPI model was endorsed at G20 (2023) for global adoption. MOSIP (Modular Open Source Identity Platform) allows other countries to adopt Aadhaar-like systems.',
    },
    {
      section: 'UPI & Digital Payments',
      content:
        'UPI: Real-time, 24/7, interbank electronic fund transfer via mobile. Developed by NPCI (National Payments Corporation of India). Zero-cost for users. Apps: PhonePe (~48% share), Google Pay (~36%), Paytm, BHIM. UPI 2.0: Overdraft facility, invoice-in-payments. UPI Lite: Small-value offline transactions. UPI for international payments: India-Singapore (UPI-PayNow), India-UAE, India-France linkages. Other digital payment modes: NEFT (National Electronic Funds Transfer — batch settlement), RTGS (Real Time Gross Settlement — for large values, minimum Rs 2 lakh), IMPS (Immediate Payment Service — 24/7), NACH (National Automated Clearing House — for recurring payments like EMIs). Total digital transactions in India: 16,400+ crore (2023-24). India accounts for 46% of global real-time digital payments.',
    },
    {
      section: 'CBDC — Digital Rupee',
      content:
        'Central Bank Digital Currency (CBDC) is a digital form of fiat currency issued by RBI. e-Rupee (e₹): Pilot launched in November 2022. Two types: Wholesale (e₹-W, for interbank settlements, G-Sec transactions) and Retail (e₹-R, for public use via digital wallets through banks). e-Rupee is a legal tender like physical currency. It is a liability of RBI (unlike cryptocurrencies which have no sovereign backing). Key features: No interest paid (unlike bank deposits), anonymity for small transactions, programmability (government can set expiry for stimulus payments). Benefits: Reduced cost of currency management (printing, storing, transporting), enhanced financial inclusion, efficient cross-border payments. Concerns: Disintermediation of banks (people may shift from bank deposits to CBDC), privacy, cybersecurity. India\'s CBDC is on a distributed ledger but not blockchain-based.',
    },
    {
      section: 'Cryptocurrency & Regulation',
      content:
        'Cryptocurrency (Bitcoin, Ethereum, etc.) is a decentralised digital currency based on blockchain technology. Not legal tender in India. RBI has consistently warned against crypto risks. RBI\'s 2018 circular banning banks from dealing with crypto entities was struck down by Supreme Court (2020). Budget 2022: 30% flat tax on income from virtual digital assets (VDAs), 1% TDS on transfers, no deduction for losses. This is purely taxation — not legalisation or regulation. A comprehensive Cryptocurrency Bill has been proposed but not yet introduced. India supports global regulation under G20/OECD/IMF framework rather than a ban. Blockchain (underlying technology): Has legitimate applications — supply chain tracking, land records, educational certificates. NITI Aayog has published a blockchain strategy document.',
    },
    {
      section: 'Digital India & E-Governance',
      content:
        'Digital India Programme (2015): Three vision areas — (1) Digital infrastructure as utility to every citizen (broadband, mobile, digital identity), (2) Governance and services on demand, (3) Digital empowerment of citizens. Key components: BharatNet (optical fibre to gram panchayats), Common Service Centres (CSCs — 5 lakh centres for e-services in rural areas), e-Governance (UMANG app — 1,600+ services, DigiLocker, e-Courts, e-Office, GeM — Government e-Marketplace). IT/BPM Sector: Revenue ~$254 billion (2023-24), employs 5.4 million directly. India is the world\'s largest IT services exporter. Open Network for Digital Commerce (ONDC): Decentralised e-commerce platform — unbundles buyer, seller, logistics layers. Aims to democratise e-commerce beyond Amazon/Flipkart duopoly. Data Protection: Digital Personal Data Protection Act 2023 — consent-based data processing, Data Protection Board, penalties up to Rs 250 crore.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Digital economy is increasingly important in all exams. Banking exams heavily test UPI, NEFT vs RTGS, and digital payment modes. UPSC asks about CBDC, India Stack, and data protection. SSC exams test Digital India components, Aadhaar, and DigiLocker. Crypto taxation and e-Rupee are frequently tested current affairs topics.',
}
