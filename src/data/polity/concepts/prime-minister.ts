import type { SubjectConcept } from '@/types/subject-notes'

export const primeMinisterConcept: SubjectConcept = {
  topic: 'prime-minister',
  title: 'Prime Minister & Council of Ministers',
  description:
    'The Prime Minister is the head of government and the real executive authority in India. Articles 74-75 deal with the PM and the Council of Ministers. The PM is appointed by the President but is actually the leader of the majority party in the Lok Sabha. The Council of Ministers, headed by the PM, aids and advises the President.',
  category: 'Union Executive',
  keyDates: [
    { year: '1947', event: 'Jawaharlal Nehru became the first Prime Minister of India (15 August 1947); served until his death in 1964 — the longest-serving PM' },
    { year: '1966', event: 'Indira Gandhi became the first woman Prime Minister of India' },
    { year: '1977', event: 'Morarji Desai became the first non-Congress PM; first PM to resign after losing a no-confidence motion' },
    { year: '1989', event: 'Era of coalition governments began with V.P. Singh\'s Janata Dal government' },
    { year: '1996', event: 'Atal Bihari Vajpayee served the shortest full term as PM (13 days in 1996); later served a full term (1999-2004)' },
    { year: '2004', event: 'Manmohan Singh became the first Sikh PM and first PM in independent India from the Rajya Sabha' },
    { year: '2014', event: 'Narendra Modi became PM; first PM born in independent India' },
  ],
  notes: [
    {
      section: 'Appointment and Qualifications',
      content:
        'Article 75(1): the PM is appointed by the President. By convention, the President invites the leader of the majority party in Lok Sabha to form the government. If no party has a clear majority, the President uses discretion — may invite the leader of the largest party or the coalition leader who can demonstrate majority support. The PM must be a member of either House of Parliament. If appointed without being a member, they must become a member within 6 months (convention). Qualifications: citizen of India, must be a member of either House (or become one within 6 months), must not hold any office of profit. No minimum age is prescribed, but since one must be qualified as an MP, the effective minimum age is 25 (Lok Sabha) or 30 (Rajya Sabha).',
    },
    {
      section: 'Powers and Functions of the PM',
      content:
        'In relation to the Council of Ministers: recommends appointment and dismissal of ministers to the President; allocates and reshuffles portfolios; presides over Cabinet meetings; guides and coordinates ministerial activities; can bring about the collapse of the government by resigning (all ministers must resign). In relation to the President: principal channel of communication between the Council of Ministers and the President (Art 78); advises the President on appointment of key officials (AG, CAG, EC, UPSC, Governors, etc.); recommends dissolution of Lok Sabha. In relation to Parliament: leader of the House (Lok Sabha); announces government policies on the floor; chief spokesperson of the government. Other roles: Chairman of NITI Aayog (replaced Planning Commission in 2015), Chairman of the National Development Council, National Integration Council, Inter-State Council, National Disaster Management Authority, and the Nuclear Command Authority.',
    },
    {
      section: 'Council of Ministers: Composition and Categories',
      content:
        'The Council of Ministers consists of three tiers: (1) Cabinet Ministers — most senior, attend Cabinet meetings, hold important portfolios; collectively form the "Cabinet" which is the highest decision-making body. (2) Ministers of State (Independent Charge) — head ministries independently. (3) Ministers of State — assist Cabinet Ministers in their ministries. (4) Deputy Ministers — assist Ministers of State or Cabinet Ministers. The total size of the Council of Ministers (including PM) cannot exceed 15% of the total membership of Lok Sabha (91st Amendment, 2003) — i.e., maximum 81 ministers. Article 75(3): the Council of Ministers is collectively responsible to the Lok Sabha — if the PM loses confidence of Lok Sabha, the entire Council must resign. Art 75(2): ministers hold office during the "pleasure of the President" (effectively the PM). A minister who is not a member of either House for 6 consecutive months ceases to be a minister.',
    },
    {
      section: 'Collective and Individual Responsibility',
      content:
        'Collective Responsibility (Art 75(3)): the Council of Ministers "swim and sink together." All ministers must publicly support Cabinet decisions regardless of personal views (Cabinet secrecy, Art 74(2)). If the PM resigns or is removed, the entire Council falls. A no-confidence motion, if passed in Lok Sabha, requires the entire Council to resign. Individual Responsibility: each minister is individually responsible to the PM — the PM can ask any minister to resign, and if refused, can advise the President to dismiss them. Ministers are also responsible to Parliament and can be questioned on their ministry. Legal Responsibility: there is no provision for countersignature by a minister on Presidential orders (unlike in the UK), making legal responsibility of ministers absent in India.',
    },
    {
      section: 'Cabinet vs Council of Ministers',
      content:
        'The Constitution mentions only "Council of Ministers" (Art 74-75), not "Cabinet." The Cabinet is a smaller body within the Council of Ministers, composed of senior ministers (Cabinet rank). The 44th Amendment (1978) for the first time mentioned the term "Cabinet" (Art 352 — national emergency to be declared based on written advice of the Cabinet). The Cabinet is the supreme decision-making body and meets regularly. The Council of Ministers rarely meets as a whole. Cabinet decisions are binding on all ministers. The Cabinet Committee system helps in efficient governance — important committees include the Cabinet Committee on Security (CCS), Cabinet Committee on Economic Affairs (CCEA), Appointments Committee of the Cabinet (ACC), and Cabinet Committee on Political Affairs. The Cabinet Secretariat, headed by the Cabinet Secretary (senior-most civil servant), provides support to the Cabinet.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'One of the most frequently tested topics. UPSC asks about collective responsibility, Art 74-75, constitutional vs real executive, and PM\'s role vis-a-vis the President. SSC exams test factual questions on appointment, qualifications, and the 91st Amendment cap. The Cabinet vs Council of Ministers distinction is a classic question.',
}
