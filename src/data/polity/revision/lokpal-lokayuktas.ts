import type { SubjectRevision } from '@/types/subject-notes'

export const lokpalLokayuktasRevision: SubjectRevision = {
  topic: 'lokpal-lokayuktas',
  bullets: [
    'Lokpal and Lokayuktas Act, 2013 — passed 18 December 2013. Presidential assent: 1 January 2014.',
    'First recommended by the 1st ARC (Morarji Desai Committee, 1966). First Bill introduced in 1968. Took 45 years to become law.',
    'Lokpal: Chairperson + max 8 members. 50% must be judicial members. 50% from SC/ST/OBC/minorities/women.',
    'Selection Committee: PM (chair), Speaker, LoP (Lok Sabha), CJI or SC judge nominated by CJI, eminent jurist.',
    'Jurisdiction: PM (with safeguards), Ministers, MPs, Group A-D officers, boards/corporations funded by Centre.',
    'PM safeguards: full bench considers inquiry; 2/3 majority can dismiss complaint; no matters of defence/security/foreign relations.',
    'Inquiry Wing (Director of Inquiry) + Investigation Wing (Director of Investigation). Can also use CBI.',
    'Preliminary inquiry: 60 days (extendable by 30). Investigation: 6 months (extendable by 6). Trial: 1 year (extendable by 1).',
    'Can attach property acquired through corruption during investigation.',
    'Justice Pinaki Chandra Ghose — first Lokpal Chairperson, appointed 19 March 2019.',
    'Lokayuktas: Section 63 mandates every state to establish within one year. Maharashtra first (1971).',
    'Justice Santosh Hegde (Karnataka Lokayukta 2006-2011) exposed the mining scam — most notable state Lokayukta.',
    'Modeled on Scandinavian Ombudsman (Sweden, 1809 — Justitieombudsman). Anna Hazare movement (2011) was catalyst.',
    'Jan Lokpal Bill demanded by civil society differed from government Bill on PM inclusion, judiciary, and Citizen\'s Charter.',
    'Penalty for false complaints provided to prevent misuse.',
    'Judiciary NOT under Lokpal jurisdiction — major criticism.',
  ],
  comparisons: [
    {
      title: 'Lokpal Selection Committee',
      headers: ['Member', 'Role'],
      rows: [
        ['Prime Minister', 'Chairperson'],
        ['Speaker of Lok Sabha', 'Member'],
        ['Leader of Opposition (LS)', 'Member'],
        ['CJI or SC Judge nominated by CJI', 'Member'],
        ['Eminent Jurist', 'Nominated by other 4 members'],
      ],
    },
    {
      title: 'Lokpal vs Ombudsman (Sweden)',
      headers: ['Feature', 'Indian Lokpal', 'Swedish Ombudsman'],
      rows: [
        ['Focus', 'Anti-corruption', 'Maladministration broadly'],
        ['Prosecution', 'Can prosecute via Special Courts', 'Only recommendations'],
        ['Head of Govt', 'PM included (with safeguards)', 'Varies'],
        ['Selection', 'Political figures involved', 'Parliament alone'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Lokpal Composition — "8+1 = Half Judicial"',
      mnemonic: '1 Chairperson + max 8 members; 50% judicial members',
      explanation: 'The Lokpal consists of a Chairperson and up to 8 members, with at least half being judicial members.',
    },
    {
      title: 'First Lokpal — "PCG 2019"',
      mnemonic: 'Pinaki Chandra Ghose — first Chairperson, 2019',
      explanation: 'Justice P.C. Ghose was appointed as the first Lokpal Chairperson in March 2019.',
    },
  ],
}
