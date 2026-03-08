import type { SubjectRevision } from '@/types/subject-notes'

export const attorneyGeneralRevision: SubjectRevision = {
  topic: 'attorney-general',
  bullets: [
    'Appointed by the President under Article 76. Must be qualified to be a Judge of the Supreme Court (citizen of India + 10 years HC advocate or 5 years HC judge or distinguished jurist).',
    'Holds office during the pleasure of the President — no fixed tenure, no formal removal procedure like impeachment.',
    'Not a member of the Cabinet. Not bound by collective responsibility. Not a government servant — receives a retainer (fee), not salary.',
    'Has the right to speak in and take part in proceedings of both Houses of Parliament and any committee (Art 88), but CANNOT vote.',
    'Has the right of audience in all courts and tribunals in India — the highest right of audience in the country.',
    'Can engage in private practice but should NOT advise against the Government of India or defend accused in criminal cases without permission.',
    'Assisted by the Solicitor General (second-highest law officer) and Additional Solicitor Generals — both appointed by the President.',
    'M.C. Setalvad was the first AG (1950-1963). Soli Sorabjee served two terms (1989-90 and 1998-2004). R. Venkataramani is the current (16th) AG.',
    'Appears on behalf of Government of India in all cases in the SC and HCs. Represents the government in references under Article 143 (advisory jurisdiction).',
    'Can initiate contempt proceedings under the Contempt of Courts Act, 1971. His consent is required for private parties to initiate contempt in the SC.',
    'The state-level equivalent is the Advocate General (Art 165), appointed by the Governor with qualifications of an HC judge.',
    'AG is NOT debarred from private practice — unlike the Solicitor General who is a full-time government counsel.',
    'In the US and UK, the Attorney General is a Cabinet member with executive authority. Indian AG has no such executive powers — purely advisory and representational.',
    'The AG enjoys all privileges and immunities available to a Member of Parliament.',
    'The AG typically resigns when the government changes — convention, not constitutional requirement.',
  ],
  comparisons: [
    {
      title: 'Attorney General vs Advocate General',
      headers: ['Feature', 'Attorney General (Art 76)', 'Advocate General (Art 165)'],
      rows: [
        ['Appointed by', 'President', 'Governor'],
        ['Qualification', 'Qualified as SC Judge', 'Qualified as HC Judge'],
        ['Advises', 'Union Government', 'State Government'],
        ['Right in Legislature', 'Art 88 — Parliament (no vote)', 'Art 177 — State Legislature (no vote)'],
        ['Primary Court', 'Supreme Court', 'High Court'],
        ['Tenure', 'Pleasure of President', 'Pleasure of Governor'],
      ],
    },
    {
      title: 'Attorney General vs Solicitor General',
      headers: ['Feature', 'Attorney General', 'Solicitor General'],
      rows: [
        ['Rank', 'Highest law officer', 'Second-highest law officer'],
        ['Basis', 'Constitutional (Art 76)', 'Executive order (Law Officers Order)'],
        ['Private practice', 'Allowed (with restrictions)', 'Not allowed against govt'],
        ['Remuneration', 'Retainer (fee)', 'Fixed remuneration'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'AG\'s Key Features — "PARS"',
      mnemonic: 'P-leasure tenure, A-udience in all courts, R-ight to speak in Parliament, S-C judge qualification',
      explanation: 'Remembering the four defining features of the Attorney General: pleasure of President, right of audience, right to speak (not vote) in Parliament, and SC judge qualification.',
    },
    {
      title: 'First AG — "SET"',
      mnemonic: 'Setalvad-Established-Traditions',
      explanation: 'M.C. Setalvad was the first AG (1950-1963), serving the longest single tenure and establishing conventions for the office.',
    },
  ],
}
