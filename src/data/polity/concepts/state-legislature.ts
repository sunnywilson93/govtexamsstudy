import type { SubjectConcept } from '@/types/subject-notes'

export const stateLegislatureConcept: SubjectConcept = {
  topic: 'state-legislature',
  title: 'State Legislature',
  description:
    'The State Legislature is the law-making body at the state level. It may be unicameral (only Vidhan Sabha) or bicameral (Vidhan Sabha + Vidhan Parishad). Articles 168-212 deal with the state legislature. Currently, only 6 states have bicameral legislatures.',
  category: 'State Government',
  keyDates: [
    { year: '1950', event: 'State legislatures constituted under the new Constitution' },
    { year: '1956', event: 'States Reorganisation Act reorganized state legislatures' },
    { year: '1985', event: 'Anti-Defection Law (52nd Amendment, Tenth Schedule) applied to state legislatures' },
    { year: '2004', event: 'Andhra Pradesh Legislative Council abolished (later recreated in 2007)' },
    { year: '2020', event: 'Jammu & Kashmir Legislative Council abolished after J&K became a UT under J&K Reorganisation Act 2019' },
  ],
  notes: [
    {
      section: 'Composition',
      content:
        'Vidhan Sabha (Legislative Assembly — Art 170): members directly elected by universal adult franchise on the basis of territorial constituencies. Strength: minimum 60, maximum 500 (exceptions: Sikkim — 32, Goa — 40, Mizoram — 40, and some UTs have fewer). The Governor can nominate 1 member from the Anglo-Indian community if not adequately represented (provision deleted by 104th Amendment, 2020). Normal term: 5 years; can be dissolved earlier by the Governor. Vidhan Parishad (Legislative Council — Art 171): a permanent body, not subject to dissolution; 1/3 members retire every 2 years; each member serves 6 years. Maximum strength: 1/3 of Vidhan Sabha strength, minimum 40. Composition: 1/3 elected by MLAs, 1/3 by local body members (municipalities, panchayats, etc.), 1/12 by teachers (3-year standing), 1/12 by registered graduates (3-year standing), and 1/6 nominated by the Governor (literature, science, art, cooperative movement, social service). Currently, 6 states have Vidhan Parishad: Bihar, Karnataka, Maharashtra, Telangana, Uttar Pradesh, and Andhra Pradesh.',
    },
    {
      section: 'Creation and Abolition of Vidhan Parishad',
      content:
        'Article 169 allows Parliament to create or abolish the Legislative Council of a state if the Vidhan Sabha passes a resolution by a special majority (2/3 of members present and voting + majority of total membership). Parliament then passes a law by simple majority — this is not considered a constitutional amendment under Art 368. States that have abolished their Councils: Andhra Pradesh (1985, recreated 2007), Tamil Nadu (1986), West Bengal (1969), Punjab (1969), Assam, Madhya Pradesh, Odisha. The Jammu & Kashmir Legislative Council was abolished in 2019 when J&K was reorganized into UTs. Rajasthan and Odisha have passed resolutions for creation but the process is pending in Parliament.',
    },
    {
      section: 'Presiding Officers',
      content:
        'Vidhan Sabha: the Speaker is the presiding officer, elected from among members. The Deputy Speaker substitutes when the Speaker is absent. Their roles, removal procedures, and powers mirror the Lok Sabha Speaker and Deputy Speaker at the state level. The Speaker decides on disqualification under the Anti-Defection Law (Tenth Schedule). Vidhan Parishad: the Chairman is the presiding officer, elected from among members. The Deputy Chairman substitutes. Their roles mirror the Rajya Sabha Chairman and Deputy Chairman. The Chairman can be removed by a resolution passed by a majority of all then-members of the Council, after 14 days\' notice. The Speaker has broader powers than the Chairman — for example, the Speaker decides whether a bill is a Money Bill.',
    },
    {
      section: 'Legislative Process at State Level',
      content:
        'Ordinary Bills can be introduced in either House (in bicameral states). If the two Houses disagree, there is no provision for a joint sitting at the state level — if the Vidhan Parishad rejects a bill passed by the Vidhan Sabha, the Vidhan Sabha can pass it again and send it; if the Council again rejects or delays beyond the prescribed period, the bill is deemed passed (Vidhan Sabha prevails). Money Bills can only be introduced in the Vidhan Sabha; the Council can suggest amendments within 14 days, but the Sabha may accept or reject suggestions. Constitutional Amendment Bills under Art 368 require special majority in the state legislature when state ratification is needed. The Governor can give assent, withhold assent, return a bill for reconsideration (except Money Bills), or reserve it for the President\'s consideration (Art 200-201).',
    },
    {
      section: 'Comparison: Parliament vs State Legislature',
      content:
        'Both have similar structures and procedures, but key differences exist: Parliament has sovereignty in Union List and concurrent areas; state legislatures operate on State List and Concurrent List (with Parliament\'s overriding power). Rajya Sabha members serve 6-year terms; Vidhan Parishad members also serve 6-year terms. Joint sitting is possible in Parliament (Art 108) but not in state legislatures. The Speaker of Lok Sabha\'s decision on Money Bills is final; at the state level, the Speaker of Vidhan Sabha similarly certifies Money Bills. Lok Sabha has maximum 552 members; Vidhan Sabha has maximum 500. Rajya Sabha has maximum 250 members; Vidhan Parishad maximum is 1/3 of Vidhan Sabha strength. Parliamentary privileges extend to state legislatures as well (Art 194 mirrors Art 105).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Important for State PSC exams and UPSC. Frequently tested areas: which states have bicameral legislatures, composition of Vidhan Parishad (the 1/3, 1/3, 1/12, 1/12, 1/6 formula), Art 169 procedure for creating/abolishing Councils, absence of joint sitting provision at state level, and comparison with Parliament. Questions on the Speaker\'s role in anti-defection cases are increasingly common.',
}
