import type { SubjectRevision } from '@/types/subject-notes'
export const governanceReformsRevision: SubjectRevision = {
  topic: 'governance-reforms',
  bullets: [
    '1st ARC (1966): Morarji Desai. 20 reports. Key: Lokpal, civil service reform, decentralization, financial admin reform.',
    '2nd ARC (2005): Veerappa Moily. 15 reports. Key: ethics, RTI strengthening, e-governance, citizen-centric admin.',
    'Digital India (1 July 2015): 9 pillars — broadband, mobile, e-governance, e-Kranti, information, electronics, IT for jobs.',
    'JAM Trinity: Jan Dhan (50 cr+ accounts) + Aadhaar (139 cr+ IDs) + Mobile (120 cr+ subscribers).',
    'DBT (1 January 2013): Direct benefit transfer to bank accounts. 300+ schemes, 54 ministries. Savings: Rs 3 lakh cr+.',
    'Mission Karmayogi (2020): NPCSCB — competency-based civil service training. iGOT Karmayogi platform.',
    'Lateral Entry (2018): Domain experts recruited at Joint Secretary level. 9 inducted in 2019-2020.',
    'Citizen Charters: Introduced 1997 (based on UK model). No legal consequences for non-compliance.',
    'Right to Public Services Acts: MP first (2010). Legal guarantee of time-bound service delivery with penalties.',
    'Anti-corruption: Prevention of Corruption Act 1988 (amended 2018), CVC (1964/2003), CBI (1963), Lokpal (2019).',
    'NeGP (2006): 31 Mission Mode Projects — Aadhaar, MCA21, Income Tax, Passport Seva, e-District, CSCs.',
    'India Stack: Aadhaar + UPI + DigiLocker + e-Sign — digital public infrastructure model.',
    'CPGRAMS: Centralized Public Grievance Redress and Monitoring System for online complaint tracking.',
    'Aspirational Districts Programme (NITI Aayog, 2018): 112 backward districts, measurable targets across 5 sectors.',
    '2018 Amendment to PCA: "bribe-giving" made an offence. Section 17A: prior approval needed for investigating JS+ officers.',
    'India ranked 93/180 in Transparency International CPI 2023.',
  ],
  comparisons: [
    { title: 'Two Administrative Reforms Commissions', headers: ['Feature', '1st ARC', '2nd ARC'], rows: [
      ['Year', '1966-1970', '2005-2009'],
      ['Chairman', 'Morarji Desai', 'Veerappa Moily'],
      ['Reports', '20', '15'],
      ['Key recommendation', 'Lokpal', 'Ethics in governance, e-governance'],
      ['Implementation', 'Slow/partial', 'Several implemented'],
    ]},
  ],
  mnemonics: [
    { title: 'JAM Trinity', mnemonic: 'Jan Dhan + Aadhaar + Mobile = JAM', explanation: 'The three pillars of India\'s Direct Benefit Transfer infrastructure.' },
    { title: 'Digital India Pillars — 9', mnemonic: 'BUMP EEEII — Broadband, Universal Mobile, Public Internet, Make in India electronics, E-governance, E-Kranti, Early harvest, Information, IT for Jobs', explanation: 'The nine pillars of the Digital India programme.' },
  ],
}
