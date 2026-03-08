import type { SubjectRevision } from '@/types/subject-notes'

export const historicalBackgroundRevision: SubjectRevision = {
  topic: 'historical-background',
  bullets: [
    'Regulating Act 1773 — first step to regulate EIC; created Supreme Court at Calcutta; Governor-General of Bengal (Warren Hastings).',
    'Pitt\'s India Act 1784 — dual government: Board of Control (Crown) + Court of Directors (Company).',
    'Charter Act 1833 — Governor-General of Bengal became Governor-General of India (Lord William Bentinck); ended EIC commercial activities; open competition for civil services (Macaulay Committee, 1853 Act).',
    'Government of India Act 1858 — abolished EIC; power to Crown; Secretary of State for India created; Governor-General became Viceroy.',
    'Indian Councils Act 1861 — portfolio system; Indians nominated to Viceroy\'s council for the first time.',
    'Indian Councils Act 1892 — indirect elections introduced (termed "nomination on recommendation"); budgetary discussions allowed.',
    'Morley-Minto Reforms 1909 — separate electorates for Muslims; S.P. Sinha first Indian on Viceroy\'s Executive Council.',
    'Montagu-Chelmsford Reforms 1919 — Dyarchy in provinces (Reserved + Transferred subjects); bicameralism at centre; direct elections; Public Service Commission.',
    'GoI Act 1935 — proposed All-India Federation (never implemented); provincial autonomy; three lists (federal, provincial, concurrent); Federal Court; RBI; abolished Dyarchy in provinces; introduced Dyarchy at centre (never implemented).',
    'Indian Independence Act 1947 — two dominions (India, Pakistan); abolished Secretary of State, India Council, Viceroy; Constituent Assemblies empowered; GoI Act 1935 as interim constitution.',
    'Constitution borrowed from: UK (parliamentary system, rule of law), USA (Fundamental Rights, judicial review, Preamble), Ireland (DPSPs), Canada (federation with strong centre), Australia (Concurrent List), France (Republic, liberty-equality-fraternity), Germany (suspension of FRs during Emergency).',
    'GoI Act 1935 is the single largest source — about 250 provisions drawn directly from it.',
  ],
  comparisons: [
    {
      title: 'Key Acts and Their Provisions',
      headers: ['Act', 'Year', 'Key Provisions'],
      rows: [
        ['Regulating Act', '1773', 'Supreme Court at Calcutta; Governor-General of Bengal'],
        ['Pitt\'s India Act', '1784', 'Board of Control; dual government'],
        ['Charter Act', '1833', 'Governor-General of India; ended EIC trade'],
        ['Charter Act', '1853', 'Separated legislative & executive functions; open competition for civil services'],
        ['GoI Act', '1858', 'Crown rule; Secretary of State; Viceroy'],
        ['Indian Councils Act', '1861', 'Portfolio system; Indian nominees'],
        ['Indian Councils Act', '1892', 'Indirect elections; budget discussions'],
        ['Indian Councils Act', '1909', 'Separate electorates; first Indian on Executive Council'],
        ['GoI Act', '1919', 'Dyarchy; bicameralism; direct elections; PSC'],
        ['GoI Act', '1935', 'Provincial autonomy; three lists; Federal Court; RBI'],
        ['Indian Independence Act', '1947', 'Two dominions; sovereign Constituent Assemblies'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'British Acts Chronology (RPCC GIII GI)',
      mnemonic: 'R-P-C-C-G-I-I-I-G-I: Regulating, Pitt\'s, Charter 1833, Charter 1853, GoI 1858, IC 1861, IC 1892, IC 1909, GoI 1919, GoI 1935',
      explanation: 'The ten major British legislative acts affecting India in chronological order from 1773 to 1935.',
    },
    {
      title: 'Constitutional Sources (USA-IRE-CAN-AUS)',
      mnemonic: 'US = FR + JR, Ireland = DPSP, Canada = Centre Strong, Australia = Concurrent List',
      explanation: 'Key borrowed features: USA (Fundamental Rights, Judicial Review), Ireland (DPSPs), Canada (Federation with strong centre, residuary powers with Centre), Australia (Concurrent List, joint sitting).',
    },
  ],
}
