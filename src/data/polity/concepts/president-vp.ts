import type { SubjectConcept } from '@/types/subject-notes'

export const presidentVpConcept: SubjectConcept = {
  topic: 'president-vp',
  title: 'President & Vice-President',
  description:
    'The President of India is the head of state and the supreme commander of the armed forces. The executive power of the Union is vested in the President (Art 53), exercised through officers subordinate to him. The Vice-President is the ex-officio Chairman of the Rajya Sabha and acts as President in case of vacancy.',
  category: 'Union Executive',
  keyDates: [
    { year: '1950', event: 'Dr. Rajendra Prasad became the first President of India (elected by the Constituent Assembly on 24 January 1950)' },
    { year: '1952', event: 'First presidential election under the Constitution; Dr. Rajendra Prasad elected (only President to serve two terms)' },
    { year: '1969', event: 'V.V. Giri elected President as an independent candidate after the official Congress candidate N. Sanjiva Reddy was defeated; first instance of "conscience vote"' },
    { year: '1974', event: 'Supreme Court in Samsher Singh v. State of Punjab held that the President and Governor are constitutional (ceremonial) heads and must act on the aid and advice of the Council of Ministers' },
    { year: '1997', event: 'K.R. Narayanan became the first Dalit President of India' },
    { year: '2007', event: 'Pratibha Patil became the first woman President of India' },
    { year: '2017', event: 'Ram Nath Kovind elected as the 14th President' },
    { year: '2022', event: 'Droupadi Murmu became the first tribal (Santhal) woman President and the youngest President at the time of election' },
  ],
  notes: [
    {
      section: 'Qualifications, Election & Term of the President',
      content:
        'Qualifications (Art 58): citizen of India, completed 35 years, qualified for Lok Sabha membership, should not hold any office of profit. The President is elected indirectly by an Electoral College (Art 54) consisting of elected members of both Houses of Parliament and elected members of state legislative assemblies (not nominated members or MLCs). UTs of Delhi and Puducherry were included by the 70th Amendment (1992). The election uses the system of proportional representation by means of single transferable vote with secret ballot. Value of each MLA\'s vote = (total population of state / total elected MLAs) x (1/1000). Value of each MP\'s vote = total value of all MLAs\' votes / total elected MPs. The President holds office for 5 years but can resign by writing to the Vice-President. The President can be impeached under Art 61 for "violation of the Constitution" — the process requires a 14-day notice signed by 1/4 members of either House, passed by 2/3 majority of total membership of that House, and then by 2/3 majority of total membership of the other House.',
    },
    {
      section: 'Powers of the President',
      content:
        'Executive powers: all executive actions taken in his name (Art 77); appoints PM and Council of Ministers (Art 75), Attorney General (Art 76), CAG, CEC and other ECs, UPSC Chairman, Governors, judges of SC and HC, etc. Legislative powers: summons, prorogues, and dissolves Lok Sabha (Art 85); addresses Parliament at the commencement of first session each year (Art 87); nominates 12 members to Rajya Sabha (Art 80) and 2 Anglo-Indians to Lok Sabha (deleted by 104th Amendment, 2020); grants prior recommendation for money bills (Art 110); gives assent to bills (Art 111) — can withhold assent (pocket veto); issues ordinances when Parliament is not in session (Art 123). Financial powers: no money bill can be introduced without President\'s recommendation; causes Union Budget to be laid before Parliament (Art 112); controls Contingency Fund of India. Judicial powers: appoints SC/HC judges; grants pardons, reprieves, respites, remissions, commutations under Art 72 (different from Governor\'s Art 161 — President can pardon death sentences and court martial sentences). Diplomatic powers: represents India internationally; treaties and agreements in his name. Military powers: Supreme Commander of armed forces.',
    },
    {
      section: 'Constitutional Position of the President',
      content:
        'Article 74 (amended by 42nd Amendment, 1976) makes it mandatory for the President to act on the "aid and advice" of the Council of Ministers headed by the PM. The 44th Amendment (1978) added a proviso allowing the President to send the advice back for reconsideration once, but must act on the reconsidered advice. The SC in Samsher Singh v. State of Punjab (1974) held that the President is a constitutional head and must act on ministerial advice in all matters. However, the President exercises discretion in: appointing the PM when no party has a clear majority, dismissing the Council of Ministers when it loses majority, dissolving Lok Sabha when the Council of Ministers has lost majority. The President\'s role becomes crucial during coalition politics, hung parliaments, and constitutional crises.',
    },
    {
      section: 'Vice-President',
      content:
        'The Vice-President is the second-highest constitutional office (Art 63-71). Qualifications (Art 66): citizen of India, completed 35 years, qualified for Rajya Sabha membership. Elected by an Electoral College consisting of members of both Houses of Parliament (elected + nominated) by proportional representation through single transferable vote. The VP is the ex-officio Chairman of the Rajya Sabha (Art 64). Acts as President when the office falls vacant or the President is unable to discharge functions (Art 65) — can act for a maximum of 6 months, during which the VP does not perform duties of Rajya Sabha Chairman. Term: 5 years; can be removed by a resolution of the Rajya Sabha passed by an effective majority and agreed to by Lok Sabha (Art 67(b)) — no grounds for removal specified. Dr. S. Radhakrishnan was the first VP (1952-1962). The VP has no formal functions beyond chairing Rajya Sabha; does not get a salary as VP but draws salary as Rajya Sabha Chairman.',
    },
    {
      section: 'Pardoning Power (Article 72)',
      content:
        'The President can grant pardons, reprieves, respites, remissions, and commutations of sentences in cases: (1) of court martial; (2) where the sentence is for an offence under Union law; (3) death sentences. This power is broader than the Governor\'s power under Art 161 (Governor cannot pardon death sentences or court martial sentences). Pardon completely absolves the person; Commutation substitutes one punishment for another (e.g., death to life imprisonment); Remission reduces the sentence without changing its character; Respite awards a lesser sentence considering special circumstances; Reprieve temporarily stays the execution. The pardoning power is exercised on the advice of the Council of Ministers and is subject to judicial review (Maru Ram v. Union of India, 1980; Kehar Singh v. Union of India, 1989).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Among the most important topics. UPSC tests on electoral college composition, vote value calculation, pardoning power distinctions, and the President\'s discretionary powers. SSC frequently asks about first President, qualifications, impeachment procedure, and ordinance-making power. Questions comparing President\'s and Governor\'s powers are very common.',
}
