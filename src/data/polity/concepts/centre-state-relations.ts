import type { SubjectConcept } from '@/types/subject-notes'

export const centreStateRelationsConcept: SubjectConcept = {
  topic: 'centre-state-relations',
  title: 'Centre-State Relations',
  description:
    'Centre-State relations in India are governed by Part XI (Art 245-263) of the Constitution. India follows a federal structure with a strong unitary bias. Legislative, administrative, and financial relations between the Centre and States are distributed through three lists in the Seventh Schedule.',
  category: 'Federal Structure',
  keyDates: [
    { year: '1950', event: 'Three lists in the Seventh Schedule came into force: Union List (97 subjects), State List (66 subjects), Concurrent List (47 subjects)' },
    { year: '1956', event: 'States Reorganisation Commission — linguistic reorganization; new Centre-State dynamics emerged' },
    { year: '1969', event: 'Rajamannar Committee (Tamil Nadu) — recommended wider state autonomy' },
    { year: '1971', event: 'Article 249 used for the first time — Rajya Sabha empowered Parliament to legislate on State List subjects in national interest' },
    { year: '1983', event: 'Sarkaria Commission appointed to review Centre-State relations' },
    { year: '1988', event: 'Sarkaria Commission report submitted — made 247 recommendations for improving Centre-State relations' },
    { year: '1990', event: 'Inter-State Council constituted under Art 263 based on Sarkaria Commission recommendation' },
    { year: '2010', event: 'Punchhi Commission on Centre-State relations submitted report with recommendations on Governor\'s role, emergency provisions, and fiscal relations' },
    { year: '2017', event: 'Goods and Services Tax (GST) implemented — transformed fiscal federalism; GST Council became a key federal institution' },
  ],
  notes: [
    {
      section: 'Legislative Relations (Art 245-255)',
      content:
        'Distribution of legislative powers follows the Seventh Schedule: Union List (List I) — 100 subjects (originally 97) including defence, foreign affairs, banking, currency, atomic energy, railways, etc. — only Parliament can legislate. State List (List II) — 61 subjects (originally 66) including public order, police, public health, agriculture, land, state taxes, etc. — only state legislatures can legislate (normally). Concurrent List (List III) — 52 subjects (originally 47) including criminal law, bankruptcy, education, forests, trade unions, etc. — both can legislate, but in case of conflict, central law prevails (Art 254). Residuary powers lie with Parliament (Art 248 + Entry 97 of Union List). Parliament can legislate on State List subjects in five circumstances: (1) Rajya Sabha resolution in national interest (Art 249); (2) during Proclamation of Emergency (Art 250); (3) by agreement of two or more states (Art 252); (4) for implementing international treaties (Art 253); (5) during President\'s Rule (Art 356).',
    },
    {
      section: 'Administrative Relations (Art 256-263)',
      content:
        'Article 256: executive power of states shall be exercised in compliance with laws made by Parliament and existing laws. Article 257: executive power of states not to impede federal executive power; Centre can give directions on construction and maintenance of means of communication, protection of railways. Article 258: Centre can confer powers on state officers with state government\'s consent (delegation). Article 258A (7th Amendment): state government can confer functions on Union officers. Article 261: full faith and credit to public acts, records, and judicial proceedings of Union and states. Article 262: Parliament can legislate for adjudication of inter-state water disputes (Interstate Water Disputes Act, 1956). Article 263: President can establish an Inter-State Council for investigation and advice on inter-state disputes and coordination. The Inter-State Council was established in 1990; PM is the Chairman.',
    },
    {
      section: 'Financial Relations (Art 264-293)',
      content:
        'The Constitution provides for distribution of tax revenues between Centre and States. Article 268: duties levied by Centre but collected and retained by states (e.g., stamp duties). Article 269: taxes levied and collected by Centre but assigned to states (CST, now subsumed in GST). Article 270: taxes levied and collected by Centre and distributed between Centre and States — this is the main provision; the Finance Commission recommends the share. Article 275: grants-in-aid from the Consolidated Fund of India to states. Article 280: Finance Commission (constituted every 5 years) recommends the distribution of net proceeds of taxes, grants-in-aid principles, and measures for augmenting state revenues. Article 282: Centre and states can make grants for any public purpose (discretionary grants). GST (101st Amendment, 2016): subsumed most indirect taxes; GST Council (Art 279A) is a constitutional body with representatives from Centre and all states — decisions by 3/4 majority (Centre has 1/3 weightage, states have 2/3).',
    },
    {
      section: 'Sarkaria and Punchhi Commission Recommendations',
      content:
        'Sarkaria Commission (1983-88): Article 356 should be used only as a last resort; the Governor should be a non-partisan person from outside the state; residuary powers of taxation should remain with Parliament; Inter-State Council should be constituted under Art 263 (implemented in 1990); the All India Services should be strengthened; the Rajya Sabha should have an effective role in Centre-State relations. Punchhi Commission (2007-10): recommended that the Governor should be given a fixed tenure of 5 years and removable only through impeachment; concurrent jurisdiction should be used more carefully; Art 355-356 provisions need stricter guidelines; localized emergencies should not lead to state-wide President\'s Rule; the Inter-State Council should be strengthened. Both commissions rejected demands for "true federalism" and recommended cooperative federalism within the existing framework.',
    },
    {
      section: 'Cooperative and Competitive Federalism',
      content:
        'India\'s federal model has evolved from "quasi-federal" to "cooperative federalism" to "competitive federalism." NITI Aayog (established 2015, replacing the Planning Commission) promotes cooperative and competitive federalism — states compete on governance indicators. The GST Council is a model of cooperative federalism, with Centre and states jointly deciding tax rates. The Inter-State Council and Zonal Councils (established under States Reorganisation Act 1956 — 5 zonal councils + North Eastern Council) facilitate inter-state cooperation. However, tensions persist: states demand more fiscal autonomy; Centre uses Governor appointments and President\'s Rule as political tools; centrally sponsored schemes reduce state flexibility. The concept of "asymmetric federalism" applies to special provisions for J&K (now abrogated), northeast states (Art 371A-I), and tribal areas (Fifth and Sixth Schedules).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'One of the most important and frequently tested topics. UPSC tests on: three lists and their subjects, circumstances when Parliament can legislate on State List, Finance Commission, GST Council, Art 256-263, Sarkaria/Punchhi recommendations, and cooperative federalism. SSC exams test on list identification and article-provision matching.',
}
