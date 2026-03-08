import type { SubjectRevision } from '@/types/subject-notes'
export const parliamentaryCommitteesRevision: SubjectRevision = {
  topic: 'parliamentary-committees',
  bullets: [
    'Two types: Standing (permanent) and Ad Hoc (temporary — Select Committees, Joint Committees, JPCs).',
    'PAC: 22 members (15 LS + 7 RS). Chairman appointed by Speaker — CONVENTION: from opposition. Examines CAG reports.',
    'Estimates Committee: 30 members — ALL from Lok Sabha (no RS). Chairman from ruling party. Examines budget estimates.',
    'PAC = post-mortem examination (after expenditure). Estimates Committee = ex-ante examination (during budgeting).',
    'COPU: 22 members (15 LS + 7 RS). Examines accounts of public undertakings + CAG reports on PSUs.',
    'DRSCs: 24 committees (increased from 17 in 2004). 31 members each (21 LS + 10 RS). Cover all ministries.',
    'DRSCs examine: Demands for Grants, Bills referred to them, annual reports. Recommendations NOT binding.',
    'No Minister can be a member of the PAC. CAG acts as guide/friend/philosopher to PAC.',
    'PAC first constituted in 1921 under Government of India Act, 1919 — oldest parliamentary committee.',
    'JPC: Ad hoc committee for specific investigations. Composition reflects party strength in Parliament.',
    'Privileges Committee: Examines breach of privilege complaints. Ethics Committee: Examines misconduct of members.',
    'Business Advisory Committee: Allocates time for legislative business. Rules Committee: Reviews procedure rules.',
    'Committee recommendations are advisory — NOT legally binding on the government.',
    'Less than 25% of Bills referred to DRSCs in recent Lok Sabhas — declining trend is a major concern.',
    'Committee proceedings are confidential — limiting public engagement. Members work in non-partisan manner.',
    'DRSCs: 16 nominated by Speaker, 8 by Chairman of Rajya Sabha.',
  ],
  comparisons: [
    { title: 'Three Financial Committees', headers: ['Feature', 'PAC', 'Estimates Committee', 'COPU'], rows: [
      ['Members', '22 (15+7)', '30 (all LS)', '22 (15+7)'],
      ['Chairman', 'Opposition (convention)', 'Ruling party', 'Speaker appoints'],
      ['Examines', 'CAG reports', 'Budget estimates', 'PSU accounts + CAG'],
      ['Type', 'Post-mortem', 'Ex-ante', 'Post-mortem (PSUs)'],
      ['First constituted', '1921', '1950', '1964'],
    ]},
  ],
  mnemonics: [
    { title: 'PAC = "22-Opposition-CAG"', mnemonic: '22 members, Opposition chairman, examines CAG reports', explanation: 'Three key facts about the Public Accounts Committee.' },
    { title: 'Estimates = "30-All LS-Budget"', mnemonic: '30 members, all from Lok Sabha, examines budget estimates', explanation: 'Three key facts about the Estimates Committee — the only financial committee without RS representation.' },
  ],
}
