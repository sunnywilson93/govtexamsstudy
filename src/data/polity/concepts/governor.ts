import type { SubjectConcept } from '@/types/subject-notes'

export const governorConcept: SubjectConcept = {
  topic: 'governor',
  title: 'Governor of a State',
  description:
    'The Governor is the constitutional head of a state, appointed by the President (Art 155). Articles 153-167 deal with the state executive. Unlike the President, the Governor is not elected but nominated, and serves "during the pleasure of the President." The Governor acts as the vital link between the Centre and the State.',
  category: 'State Government',
  keyDates: [
    { year: '1950', event: 'Constitutional provisions for state executive came into force; Governors appointed for all states' },
    { year: '1956', event: 'States Reorganisation Act — one Governor can be appointed for two or more states (Art 153)' },
    { year: '1974', event: 'Samsher Singh case — SC held Governor, like President, is a constitutional head and must normally act on ministerial advice' },
    { year: '1979', event: 'First Sarkaria Commission appointed to review Centre-State relations, including the role of the Governor' },
    { year: '1994', event: 'S.R. Bommai v. Union of India — SC laid down guidelines on President\'s Rule, limiting arbitrary imposition; Governor\'s report made subject to judicial review' },
    { year: '2010', event: 'B.P. Singhal v. Union of India — SC held that the President can remove a Governor at any time without giving reasons but not on arbitrary grounds' },
    { year: '2016', event: 'Nabam Rebia v. Deputy Speaker — SC clarified Governor\'s discretionary powers and limits' },
  ],
  notes: [
    {
      section: 'Appointment, Qualifications, and Term',
      content:
        'The Governor is appointed by the President by warrant under his hand and seal (Art 155). Qualifications (Art 157): citizen of India, completed 35 years. By convention (not constitutional requirement): the Governor should not belong to the state they are appointed to, the state government is consulted before appointment. Term: 5 years, but holds office "during the pleasure of the President" (Art 156) — can be removed at any time. The SC in B.P. Singhal (2010) held that removal cannot be arbitrary, must not be for mala fide reasons, but the President need not give reasons. The Governor takes an oath before the Chief Justice (or senior-most judge) of the concerned High Court. One person can be Governor of two or more states (Art 153, 7th Amendment, 1956). The Governor\'s salary and allowances are charged on the Consolidated Fund of the State.',
    },
    {
      section: 'Powers of the Governor',
      content:
        'Executive powers (Art 154): executive power of the state vested in the Governor; appoints CM and Council of Ministers, Advocate General, State Election Commissioner, State PSC Chairman; all executive actions taken in his name. Legislative powers: summons, prorogues state legislature; can dissolve Vidhan Sabha; addresses the legislature at first session each year; nominates 1/6 members of Vidhan Parishad (Art 171); can nominate one Anglo-Indian to Vidhan Sabha (removed by 104th Amendment); reserves bills for President\'s consideration (Art 200); issues ordinances when legislature not in session (Art 213). Financial powers: causes state budget to be laid; no Money Bill can be introduced without Governor\'s recommendation; controls State Contingency Fund. Judicial powers: appoints district judges in consultation with HC (Art 233); is consulted by President in appointment of HC judges; grants pardons, reprieves, etc. under Art 161 — but cannot pardon death sentences or court martial sentences (unlike the President).',
    },
    {
      section: 'Discretionary Powers',
      content:
        'Unlike the President, the Governor has certain discretionary powers. Constitutional discretion: (1) Reservation of a bill for President\'s consideration (Art 200); (2) Recommendation for President\'s Rule in the state (Art 356); (3) Exercising functions as administrator of an adjoining UT; (4) Determining the amount payable by autonomous tribal district councils (Sixth Schedule). Situational discretion: appointing the CM when no party has clear majority; dismissing the CM who has lost confidence but refuses to resign; dissolving the assembly when the ministry has lost majority. Special responsibilities: in Assam (tribal areas), Sikkim, Nagaland (law and order), Arunachal Pradesh, Mizoram, Manipur (tribal areas), Maharashtra and Gujarat (Vidarbha and Saurashtra development boards). The Governor\'s discretion has been controversial — critics argue Governors act as agents of the Centre.',
    },
    {
      section: 'Governor\'s Role in President\'s Rule (Art 356)',
      content:
        'Article 356 empowers the President to impose President\'s Rule in a state if satisfied (on Governor\'s report or otherwise) that the state government cannot be carried on in accordance with the Constitution. The Governor\'s report to the President recommending President\'s Rule is crucial and has been misused historically. The landmark S.R. Bommai v. Union of India (1994) case laid down guidelines: President\'s Rule can be imposed only as a last resort; the state assembly should not be dissolved until Parliament approves the proclamation; the SC can examine the validity of the proclamation (including the Governor\'s report); floor test is the only way to prove majority. Before Bommai, President\'s Rule was imposed over 100 times — post-Bommai, the instances have reduced significantly.',
    },
    {
      section: 'Commissions on Centre-State Relations and the Governor',
      content:
        'Several commissions have examined the Governor\'s role: The Sarkaria Commission (1983-87) recommended that the Governor should be selected from outside the state, be a distinguished person, not be active in politics, appointment should be made after consultation with the CM, and the Governor should be given a fixed tenure of 5 years. The Punchhi Commission (2007-10) recommended that the phrase "during the pleasure of the President" should be deleted and the Governor should be removable only through impeachment by the state legislature; the Governor should have no role in university appointments; and the Lokpal should have jurisdiction over the Governor. The SC in Rameshwar Prasad v. Union of India (2006) held that the Governor\'s exercise of discretion is subject to judicial review.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Very important for UPSC and State PSCs. Questions cover: appointment and removal (especially B.P. Singhal case), discretionary vs constitutional powers, comparison with President\'s powers (especially pardoning power), Art 356 and S.R. Bommai guidelines, and Sarkaria/Punchhi Commission recommendations. The Governor\'s controversial role is a favorite UPSC Mains topic.',
}
