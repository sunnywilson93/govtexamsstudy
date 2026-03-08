import type { SubjectConcept } from '@/types/subject-notes'

export const chiefMinisterConcept: SubjectConcept = {
  topic: 'chief-minister',
  title: 'Chief Minister & State Council of Ministers',
  description:
    'The Chief Minister is the head of government at the state level, analogous to the Prime Minister at the Centre. Articles 163-167 deal with the CM and the State Council of Ministers. The CM is the real executive authority in the state, while the Governor is the constitutional head.',
  category: 'State Government',
  keyDates: [
    { year: '1950', event: 'State executive provisions came into force; first Chief Ministers appointed in all states' },
    { year: '1967', event: 'First coalition governments formed in several states (Kerala, West Bengal) after fourth general elections — changed the dynamics of CM selection' },
    { year: '1974', event: 'Samsher Singh case — SC confirmed that the CM and Council of Ministers are the real executive at the state level' },
    { year: '2003', event: '91st Amendment limited the State Council of Ministers to 15% of total membership of Vidhan Sabha (minimum 12)' },
  ],
  notes: [
    {
      section: 'Appointment and Term',
      content:
        'The CM is appointed by the Governor (Art 164). The Governor invites the leader of the majority party in the Vidhan Sabha to form the government. If no single party has a majority, the Governor may invite the leader of the largest party or a coalition leader who can demonstrate majority support. The CM must be a member of the state legislature — if not a member at the time of appointment, must become one within 6 months. The CM holds office during the pleasure of the Governor (Art 164(1)), which practically means as long as the CM commands majority in the Vidhan Sabha. The CM can be from either House of the state legislature (Vidhan Sabha or Vidhan Parishad), though by convention, the CM is usually from the Vidhan Sabha.',
    },
    {
      section: 'Powers and Functions',
      content:
        'In relation to the Council of Ministers: recommends appointment and dismissal of ministers to the Governor; allocates and reshuffles portfolios; presides over cabinet meetings; guides, coordinates, and directs activities of ministers; if the CM resigns or is dismissed, the entire Council falls. In relation to the Governor: principal channel of communication between the Council of Ministers and the Governor (Art 167); advises the Governor on appointment of Advocate General, State PSC members, etc.; recommends dissolution of Vidhan Sabha. In relation to the state legislature: leader of the House; announces government policies; chief spokesperson of the state government. Other roles: Chairman of the State Planning Board; member of the Inter-State Council (chaired by PM); member of the NITI Aayog Governing Council; heads the State Disaster Management Authority.',
    },
    {
      section: 'State Council of Ministers',
      content:
        'The State Council of Ministers is constituted similarly to the Union Council of Ministers: Cabinet Ministers, Ministers of State, and Deputy Ministers. The 91st Amendment (2003) capped the total size at 15% of the total membership of the Vidhan Sabha, with a minimum of 12 ministers. Article 164(1A) added by the 91st Amendment also provides that a member of the state legislature who belongs to any political party and is disqualified under the Tenth Schedule (anti-defection) shall also be disqualified to be a minister. Collective responsibility (Art 164(2)): the Council is collectively responsible to the Vidhan Sabha. Individual responsibility: ministers hold office during the pleasure of the Governor (effectively the CM). A minister who is not a member of the legislature for 6 consecutive months ceases to be a minister (Art 164(4)).',
    },
    {
      section: 'CM vs PM — Comparison',
      content:
        'Both are heads of government at their respective levels and are the real executives. Both lead the Council of Ministers and are the principal channel of communication with the constitutional head. However, key differences exist: the PM operates under a federal structure with wider powers (defense, foreign affairs, Union List); the CM operates within the state sphere. The PM advises the President on Governor appointments — affecting state politics. During President\'s Rule (Art 356), the CM and Council are removed and the state comes under direct central rule. The CM has no role in constitutional amendments. The PM\'s removal requires loss of Lok Sabha confidence; the CM\'s removal requires loss of Vidhan Sabha confidence. The CM has no military command, unlike the PM who advises the Supreme Commander (President).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Important for State PSC exams and UPSC. Questions cover: appointment process, constitutional provisions (Art 163-167), comparison with PM, the 91st Amendment cap on ministers, collective responsibility, and the CM\'s role during Governor-CM conflicts. Understanding the CM\'s position in the constitutional scheme is essential for answering questions on state governance.',
}
