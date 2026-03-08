import type { SubjectConcept } from '@/types/subject-notes'

export const emergencyProvisionsConcept: SubjectConcept = {
  topic: 'emergency-provisions',
  title: 'Emergency Provisions',
  description:
    'Emergency provisions (Part XVIII, Articles 352-360) transform the federal structure into a unitary one during extraordinary situations. Three types of emergencies exist: National Emergency (Art 352), State Emergency/President\'s Rule (Art 356), and Financial Emergency (Art 360). These provisions were borrowed from the German Weimar Constitution.',
  category: 'Federal Structure',
  keyDates: [
    { year: '1950', event: 'Emergency provisions came into force; based on provisions of the Government of India Act 1935 and the Weimar Constitution' },
    { year: '1962', event: 'First National Emergency declared due to Chinese aggression (Art 352); lasted until 1968' },
    { year: '1971', event: 'Second National Emergency declared during India-Pakistan war (Art 352); revoked in 1977' },
    { year: '1975', event: 'Third National Emergency (Internal Emergency) declared on grounds of "internal disturbance" by Indira Gandhi; lasted until 1977; most controversial use of emergency powers' },
    { year: '1978', event: '44th Amendment — "internal disturbance" replaced with "armed rebellion" in Art 352; safeguards against misuse strengthened; Art 20 and 21 made non-suspendable during Emergency' },
    { year: '1994', event: 'S.R. Bommai v. Union of India — SC laid down strict guidelines for Art 356, making Governor\'s report and President\'s satisfaction subject to judicial review' },
    { year: '2016', event: 'Uttarakhand and Arunachal Pradesh President\'s Rule cases — SC reinforced Bommai guidelines' },
  ],
  notes: [
    {
      section: 'National Emergency (Art 352)',
      content:
        'The President can proclaim a National Emergency when the security of India or any part thereof is threatened by war, external aggression, or armed rebellion (originally "internal disturbance" — changed by 44th Amendment). The 44th Amendment requires: (1) written advice from the Cabinet (not just the PM); (2) proclamation must be approved by Parliament within one month (originally two months) by special majority (2/3 of members present and voting, which must also be a majority of total membership); (3) if approved, continues for 6 months at a time; can be extended indefinitely with parliamentary approval every 6 months. Revocation: by the President at any time; must be revoked if Lok Sabha passes a resolution by simple majority disapproving it — the 44th Amendment introduced this safeguard and provided that 1/10 members of Lok Sabha can requisition a special session for this purpose. National Emergency has been declared 3 times: 1962 (Chinese aggression), 1971 (Pakistan war), 1975 (internal disturbance).',
    },
    {
      section: 'Effects of National Emergency',
      content:
        'On the federal structure: Centre can direct any state on how to exercise its executive power; Parliament can legislate on State List subjects (Art 250); the distribution of revenues can be altered by the President (Art 354). On Fundamental Rights: Art 358 — Art 19 (six freedoms) is automatically suspended during Emergency proclaimed on grounds of war or external aggression (not armed rebellion — 44th Amendment distinction). Art 359 — the President can suspend the right to move any court for enforcement of FRs listed in the suspension order. However, Art 20 (protection against conviction for offences) and Art 21 (right to life and personal liberty) cannot be suspended even during Emergency (44th Amendment). On Parliament: Lok Sabha\'s term can be extended by one year at a time during Emergency (Art 83(2)); election to Lok Sabha can be postponed but must be held within 6 months of revocation.',
    },
    {
      section: 'President\'s Rule / State Emergency (Art 356)',
      content:
        'Article 356: if the President is satisfied (on Governor\'s report or otherwise) that the government of a state cannot be carried on according to the provisions of the Constitution, the President can: (1) assume all functions of the state government; (2) transfer state legislature\'s powers to Parliament; (3) make incidental/consequential provisions. Duration: initially 6 months; can be extended by 6 months at a time up to a maximum of 3 years (each extension requires parliamentary approval by simple majority); extension beyond 1 year requires either a National Emergency in operation or Election Commission certification that elections cannot be held. President\'s Rule has been imposed over 130 times. S.R. Bommai case guidelines: (1) floor test is the only way to test majority; (2) state assembly should not be dissolved until Parliament approves; (3) judicial review is available; (4) political considerations should not be the basis. Art 365: if a state fails to comply with Union directions, the President can hold that the state government cannot be carried on — grounds for Art 356.',
    },
    {
      section: 'Financial Emergency (Art 360)',
      content:
        'Article 360: if the President is satisfied that the financial stability or credit of India or any part thereof is threatened, a Financial Emergency can be declared. Approval by Parliament within 2 months by simple majority; continues until revoked by the President (no maximum period specified). Effects: Centre can direct states on financial matters; the President can direct reduction of salaries of all government servants (including judges of SC and HC); the President can reserve all Money Bills and Financial Bills passed by state legislatures for consideration. A Financial Emergency has NEVER been declared in India. This provision was borrowed from the National Recovery Administration provisions during the Great Depression in the USA. The Sarkaria Commission recommended its retention as a last resort.',
    },
    {
      section: 'Safeguards Against Misuse (44th Amendment)',
      content:
        'The 44th Amendment (1978) introduced crucial safeguards against emergency misuse, learning from the 1975 Emergency experience: (1) "internal disturbance" replaced with "armed rebellion" in Art 352 — raising the threshold; (2) written advice of the Cabinet required (not just PM); (3) Art 20 and 21 made non-suspendable (overturning the ADM Jabalpur ruling); (4) Art 19 suspendable only during war/external aggression, not armed rebellion; (5) Parliamentary approval period reduced from 2 months to 1 month; (6) 1/10 Lok Sabha members can requisition a special session to consider revocation; (7) Lok Sabha can revoke Emergency by simple majority; (8) President\'s satisfaction under Art 352 and 356 made subject to judicial review; (9) Post-Emergency elections mandated within 6 months. These amendments significantly restricted the scope for emergency misuse.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'One of the most heavily tested topics. UPSC tests on: three types of emergencies and their differences, 44th Amendment safeguards, Bommai case guidelines, effects on FRs (especially which rights can/cannot be suspended), duration and approval requirements, and historical instances. SSC exams test factual recall on article numbers, how many times each emergency was declared, and key differences between Art 352, 356, and 360.',
}
