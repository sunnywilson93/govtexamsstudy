import type { SubjectConcept } from '@/types/subject-notes'

export const citizenshipConcept: SubjectConcept = {
  topic: 'citizenship',
  title: 'Citizenship',
  description:
    'Citizenship in India is governed by Articles 5-11 of the Constitution and the Citizenship Act, 1955. India follows single citizenship (unlike the US with dual citizenship). The Constitution defines who became citizens at its commencement, while Parliament has the power to regulate citizenship through legislation.',
  category: 'Constitutional Foundations',
  keyDates: [
    { year: '1950', event: 'Constitutional provisions on citizenship (Art 5-11) came into force; defined citizenship at commencement' },
    { year: '1955', event: 'Citizenship Act enacted by Parliament under Article 11; provided five modes of acquiring citizenship' },
    { year: '1986', event: 'Citizenship (Amendment) Act — tightened citizenship by birth; child born in India after 1987 requires at least one Indian parent' },
    { year: '2003', event: 'Citizenship (Amendment) Act — introduced concept of Overseas Citizen of India (OCI); made illegal migrants ineligible; further tightened birth-based citizenship' },
    { year: '2005', event: 'OCI scheme operationalized; replaced PIO card system' },
    { year: '2015', event: 'PIO card merged with OCI card; OCI cardholders get lifelong visa and various privileges' },
    { year: '2019', event: 'Citizenship Amendment Act (CAA) — fast-tracked citizenship for persecuted religious minorities (Hindu, Sikh, Buddhist, Jain, Parsi, Christian) from Pakistan, Bangladesh, and Afghanistan who entered India before 31 December 2014' },
    { year: '2024', event: 'CAA rules notified, making the 2019 Act operational' },
  ],
  notes: [
    {
      section: 'Constitutional Provisions (Articles 5-11)',
      content:
        'Article 5 — citizenship at commencement for persons domiciled in India having been born in India, or whose parents were born in India, or who had been ordinarily resident for 5+ years. Article 6 — rights of citizenship for certain persons who migrated from Pakistan to India before 19 July 1948 (automatic if before) or after (needed to register). Article 7 — certain migrants to Pakistan after 1 March 1947 excluded, unless they returned with a permit for resettlement. Article 8 — rights of persons of Indian origin residing outside India (could register at Indian consulates). Article 9 — automatic loss of Indian citizenship on acquiring citizenship of a foreign state. Article 10 — every citizen continues to be a citizen subject to any law made by Parliament. Article 11 — Parliament\'s power to regulate citizenship by law (basis for the Citizenship Act 1955).',
    },
    {
      section: 'Citizenship Act, 1955: Modes of Acquisition',
      content:
        'The Act provides five modes of acquiring Indian citizenship: (1) By Birth — born in India on/after 26 Jan 1950 but before 1 July 1987: automatic citizen; born after 1 July 1987: one parent must be Indian; born after 3 Dec 2004: both parents must be Indian, or one parent Indian and other not an illegal migrant. (2) By Descent — born outside India to a father who is an Indian citizen (originally); amended to include mother; must be registered at Indian consulate within one year. (3) By Registration — certain categories can apply (persons of Indian origin, spouses of Indian citizens with 7 years residency, minor children of Indian citizens, etc.). (4) By Naturalization — foreigners can apply after 12 years continuous residency (including 12 months immediately before), good character, knowledge of a scheduled language, etc. (5) By Incorporation of Territory — when a new territory becomes part of India.',
    },
    {
      section: 'Loss of Citizenship',
      content:
        'Indian citizenship can be lost in three ways: (1) Renunciation (Section 8) — voluntary; any Indian citizen of full capacity can make a declaration of renunciation; minor children also lose citizenship (but can resume within one year of turning 18). (2) Termination (Section 9) — automatic loss when an Indian citizen voluntarily acquires citizenship of another country; constitutional basis in Article 9. (3) Deprivation (Section 10) — compulsory termination by the Central Government on grounds such as: citizenship obtained by fraud, disloyalty to the Constitution, unlawful trading with enemy during war, ordinary residence outside India for 7 continuous years, sentenced to imprisonment for 2+ years within 5 years of registration/naturalization.',
    },
    {
      section: 'Single Citizenship and Its Implications',
      content:
        'India follows the principle of single citizenship borrowed from the British model, unlike the US where both federal and state citizenships exist. All citizens enjoy the same political and civil rights throughout the country regardless of the state they belong to. This was adopted to promote national unity and integration, especially given India\'s diversity. The Constitution does not provide for state citizenship — rights like voting in state elections are based on domicile or residence, not state citizenship. However, states can give preferences to residents in education and employment (Art 16(3)).',
    },
    {
      section: 'Overseas Citizen of India (OCI) & CAA 2019',
      content:
        'OCI is not citizenship but a status allowing lifelong visa, no requirement to report to police, parity with NRIs in financial, educational, and economic fields (but no voting rights, no government jobs, no buying agricultural land). OCI was introduced by the 2003 amendment and the PIO card was merged into OCI in 2015. The Citizenship Amendment Act (CAA) 2019 amended the 1955 Act to grant fast-tracked citizenship (5 years residency instead of 11) to persecuted religious minorities — Hindus, Sikhs, Buddhists, Jains, Parsis, and Christians — from Pakistan, Bangladesh, and Afghanistan who entered India on or before 31 December 2014. The Act was controversial and challenged as violating Article 14 (right to equality) by excluding Muslims. The government argued it targets religiously persecuted minorities from specific Islamic-majority countries.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'A high-yield topic for UPSC and SSC. Key areas tested: modes of acquiring/losing citizenship, single vs dual citizenship, Articles 5-11, differences between OCI/PIO, CAA 2019 provisions, and the tightening of citizenship-by-birth criteria over time. UPSC Prelims tests nuanced understanding of constitutional provisions vs statutory provisions.',
}
