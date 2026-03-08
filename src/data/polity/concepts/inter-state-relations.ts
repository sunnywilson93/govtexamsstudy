import type { SubjectConcept } from '@/types/subject-notes'

export const interStateRelationsConcept: SubjectConcept = {
  topic: 'inter-state-relations',
  title: 'Inter-State Relations',
  description:
    'The Constitution contains provisions for adjudication of inter-state disputes, coordination through Inter-State Councils and Zonal Councils, and ensures freedom of trade, commerce, and intercourse throughout India. Articles 262-263 and 301-307 deal with inter-state relations.',
  category: 'Federal Structure',
  keyDates: [
    { year: '1950', event: 'Constitutional provisions on inter-state trade (Art 301-307) and water disputes (Art 262) came into force' },
    { year: '1956', event: 'States Reorganisation Act — established 5 Zonal Councils (North, South, East, West, Central)' },
    { year: '1956', event: 'Inter-State Water Disputes Act enacted under Art 262 for adjudication of river water disputes' },
    { year: '1972', event: 'North Eastern Council established by North Eastern Council Act as the sixth zonal body' },
    { year: '1990', event: 'Inter-State Council constituted by Presidential order under Art 263 based on Sarkaria Commission recommendation' },
    { year: '2018', event: 'Inter-State Council reconstituted; PM as Chairman; includes CMs of all states, administrators of UTs with legislatures, and 6 Union Ministers' },
  ],
  notes: [
    {
      section: 'Inter-State Water Disputes (Art 262)',
      content:
        'Article 262(1): Parliament may by law provide for adjudication of disputes relating to waters of inter-state rivers or river valleys. Article 262(2): Parliament may provide that neither the SC nor any other court shall exercise jurisdiction over such disputes. Under this, Parliament enacted the Inter-State Water Disputes Act, 1956, which provides for the establishment of ad hoc tribunals by the Central Government. Major water dispute tribunals: Krishna Water Disputes Tribunal (AP, Karnataka, Maharashtra), Cauvery Water Disputes Tribunal (Karnataka, Tamil Nadu, Kerala, Puducherry), Ravi-Beas Tribunal (Punjab, Haryana, Rajasthan), Narmada Water Disputes Tribunal (Gujarat, MP, Maharashtra, Rajasthan), Mahadayi/Mandovi Tribunal (Goa, Karnataka, Maharashtra). The Inter-State River Water Disputes (Amendment) Act 2019 proposed a single Standing Tribunal with multiple benches to replace ad hoc tribunals.',
    },
    {
      section: 'Inter-State Council (Art 263)',
      content:
        'Article 263 empowers the President to establish an Inter-State Council for: (a) inquiring into and advising upon disputes between states; (b) investigating and discussing subjects of common interest; (c) making recommendations for better coordination of policy and action. The Council was established in 1990 based on Sarkaria Commission recommendations. Composition: PM (Chairman), CMs of all states, CMs of UTs with legislatures, Administrators of UTs without legislatures, 6 Union Ministers of Cabinet rank nominated by the PM. The Council meets at the PM\'s discretion; its recommendations are advisory. A Standing Committee of the ISC handles day-to-day matters. Though under-utilized, the ISC is an important constitutional mechanism for cooperative federalism.',
    },
    {
      section: 'Zonal Councils',
      content:
        'Zonal Councils are statutory (not constitutional) bodies established by the States Reorganisation Act, 1956. Five zonal councils: Northern (8 states + 2 UTs), Central (4 states), Eastern (4 states), Western (3 states + 2 UTs), Southern (5 states + 1 UT). Each council is chaired by the Union Home Minister. Members include the CMs and two ministers from each state. The councils discuss matters of common concern: border disputes, linguistic minorities, economic planning, inter-state transport, etc. The North Eastern Council (NEC), established in 1972, functions as the zonal council for the 8 northeastern states (Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura) — it has additional functions relating to development planning for the region.',
    },
    {
      section: 'Freedom of Trade, Commerce & Intercourse (Art 301-307)',
      content:
        'Article 301: trade, commerce, and intercourse throughout India shall be free. This ensures a common market. Article 302: Parliament may impose restrictions on trade between states or within a state in the public interest. Article 303: Parliament and state legislatures cannot give preference to one state over another in trade matters — exception: Parliament can for dealing with scarcity situations. Article 304: state legislatures can impose reasonable restrictions on trade with other states, and can impose taxes on goods from other states if similar taxes are levied on goods produced within the state — requires President\'s sanction. Article 305: saves existing state laws imposing taxes on inter-state trade. Article 307: Parliament may appoint an authority for carrying out purposes of Art 301-304. These provisions ensure India functions as a single economic unit while allowing limited state regulation.',
    },
    {
      section: 'Full Faith and Credit & Mutual Recognition',
      content:
        'Article 261: full faith and credit shall be given to the public acts, records, and judicial proceedings of the Union and every state throughout India. Final judgments of civil courts in any part of India are enforceable anywhere in India. This mirrors the US Constitution\'s "full faith and credit" clause and ensures legal unity. Article 261(3): Parliament may prescribe the manner and conditions for proving and the effect of public acts, records, and judicial proceedings. Article 262 creates an exception for inter-state water disputes, where Parliament can bar ordinary courts from jurisdiction. Together, these provisions ensure that while states have autonomy, there is legal integration across the Indian Union.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Frequently tested in UPSC and State PSCs. Key areas: Art 262 and inter-state water disputes (especially current disputes like Cauvery, Krishna), Inter-State Council composition and functions, Zonal Councils (statutory vs constitutional, who chairs), and freedom of trade provisions. Questions on specific water dispute tribunals are common in State PSC exams.',
}
