import type { SubjectConcept } from '@/types/subject-notes'

export const amendmentProcedureConcept: SubjectConcept = {
  topic: 'amendment-procedure',
  title: 'Constitutional Amendment Procedure',
  description:
    'Article 368 of the Constitution provides for the amendment procedure. The Indian Constitution is neither rigid nor flexible — it combines features of both. The amendment process varies based on the provision being amended, requiring either simple majority, special majority, or special majority plus state ratification.',
  category: 'Federal Structure',
  keyDates: [
    { year: '1951', event: 'First Amendment — added Art 15(4) for SCs/STs, inserted Ninth Schedule, restricted FR under Art 19' },
    { year: '1967', event: 'Golaknath case — SC held FRs cannot be amended (overruled Shankari Prasad)' },
    { year: '1971', event: '24th Amendment — restored Parliament\'s power to amend any part of the Constitution; clarified that "law" in Art 13 does not include constitutional amendments' },
    { year: '1973', event: 'Kesavananda Bharati — upheld 24th Amendment but introduced Basic Structure doctrine limiting amendment power' },
    { year: '1976', event: '42nd Amendment (Mini Constitution) — most comprehensive amendment; added Socialist, Secular, Integrity to Preamble; FDs; curtailed judicial review; many provisions later reversed by 44th Amendment' },
    { year: '1978', event: '44th Amendment — restored many provisions changed by 42nd Amendment; emergency safeguards; removed Right to Property from FRs' },
    { year: '2015', event: '100th Amendment — land boundary agreement with Bangladesh (exchange of enclaves)' },
    { year: '2019', event: '103rd Amendment — 10% EWS reservation in education and public employment' },
    { year: '2023', event: '106th Amendment (Nari Shakti Vandan Adhiniyam) — 33% reservation for women in Lok Sabha and state assemblies' },
  ],
  notes: [
    {
      section: 'Three Methods of Amendment',
      content:
        'The Constitution provides three methods of amendment: (1) Simple Majority of Parliament (like ordinary legislation) — Art 2 (admission of new states), Art 3 (formation of new states), Art 4 (consequential changes to Schedules I & IV), Art 169 (creation/abolition of state legislative councils), Second Schedule (salaries, allowances), Art 105/194 (parliamentary privileges), etc. These are not considered amendments under Art 368. (2) Special Majority of Parliament — majority of the total membership of each House AND 2/3 majority of members present and voting. Most provisions of the Constitution are amended by this method. (3) Special Majority + Ratification by at least half of the state legislatures (by simple majority) — for provisions relating to federal structure: Art 54-55 (election of President), Art 73-162 (extent of executive power), Art 124-147, 214-231 (SC and HCs), distribution of legislative powers (Seventh Schedule), representation of states in Parliament, Art 368 itself, and any list in the Seventh Schedule.',
    },
    {
      section: 'Procedure under Article 368',
      content:
        'An amendment bill can be introduced in either House of Parliament (not in state legislatures). It can be introduced by a minister or a private member and does not require prior permission of the President. The bill must be passed in each House separately by a special majority — no provision for joint sitting. If ratification is required, the bill must be ratified by legislatures of at least half of the states within a specified time (no specific time limit in the Constitution). After passage (and ratification, if needed), the bill is presented to the President, who must give assent (no discretion to withhold — 24th Amendment clarified this). The amendment comes into force from the date of Presidential assent or from a date specified in the amendment.',
    },
    {
      section: 'Landmark Cases on Amendability',
      content:
        'Shankari Prasad v. Union of India (1951): SC held that Parliament can amend any part of the Constitution, including FRs. Sajjan Singh v. State of Rajasthan (1965): reaffirmed Shankari Prasad. Golaknath v. State of Punjab (1967): SC reversed its position and held that FRs are "transcendental and immutable" and Parliament cannot amend them. 24th Amendment (1971): restored Parliament\'s constituent power and clarified that Art 13\'s "law" does not include constitutional amendments. Kesavananda Bharati v. State of Kerala (1973): SC upheld 24th and 25th Amendments but introduced the Basic Structure Doctrine — Parliament can amend any provision but cannot destroy the basic structure. This was decided by a 7:6 majority in a 13-judge bench (the largest ever). Indira Nehru Gandhi v. Raj Narain (1975): SC applied basic structure doctrine to strike down the 39th Amendment. Minerva Mills v. Union of India (1980): SC reaffirmed basic structure; struck down Art 31C as amended by 42nd Amendment and Art 368(4)-(5). Waman Rao v. Union of India (1981): SC held Ninth Schedule laws passed after 24 April 1973 are subject to judicial review. I.R. Coelho v. State of TN (2007): SC held that laws in the Ninth Schedule can be challenged if they violate basic structure.',
    },
    {
      section: 'Basic Structure — Key Features',
      content:
        'The basic structure is not defined in the Constitution but has been identified through various SC judgments. Features identified include: supremacy of the Constitution, sovereign, democratic, and republican nature, secular character of the Constitution, separation of powers, federal character, unity and integrity of India, independence of the judiciary, judicial review, fundamental rights (their essence, not every detail), harmony and balance between FRs and DPSPs, free and fair elections, rule of law, parliamentary system of government, principle of equality, limited power of Parliament to amend, effective access to justice, powers of the SC under Art 32, 136, 141, 142. The list is not exhaustive and the SC continues to identify new basic features. The basic structure doctrine is India\'s unique contribution to global constitutional law.',
    },
    {
      section: 'Important Amendments',
      content:
        '1st (1951): Art 15(4), Ninth Schedule. 7th (1956): states reorganization. 24th (1971): Parliament\'s power to amend FRs. 25th (1971): Art 31C — DPSP primacy over Art 14, 19. 42nd (1976): "Mini Constitution" — added Socialist, Secular, Integrity to Preamble; FDs in Part IVA; curtailed judicial review. 44th (1978): reversed many 42nd Amendment provisions; emergency safeguards; removed Right to Property from FRs. 52nd (1985): Anti-Defection Law (Tenth Schedule). 61st (1988): voting age reduced from 21 to 18. 73rd-74th (1992): Panchayati Raj and Municipalities. 86th (2002): Right to Education (Art 21A). 91st (2003): capped Council of Ministers at 15% of lower house. 101st (2016): GST. 103rd (2019): 10% EWS reservation. 104th (2020): removed Anglo-Indian nominations. 106th (2023): Women\'s reservation in Lok Sabha and state assemblies.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'One of the most critical topics for all exams. UPSC tests on: basic structure doctrine, landmark cases, three methods of amendment, provisions requiring state ratification, and specific amendment provisions. SSC exams test on important amendment numbers and their provisions. The Kesavananda Bharati case is the most frequently asked case in Indian polity.',
}
