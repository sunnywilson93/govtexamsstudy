import type { SubjectRevision } from '@/types/subject-notes'

export const scheduledTribalAreasRevision: SubjectRevision = {
  topic: 'scheduled-tribal-areas',
  bullets: [
    'Fifth Schedule (Art 244(1)): tribal areas in 10 states (AP, Telangana, Chhattisgarh, Gujarat, HP, Jharkhand, MP, Maharashtra, Odisha, Rajasthan).',
    'Governor has special powers in Fifth Schedule areas: can direct laws not to apply or apply with modifications; submits annual report to President.',
    'Tribes Advisory Council (TAC): up to 20 members; 3/4 must be tribal MLAs.',
    'Sixth Schedule (Art 244(2)): tribal areas in 4 NE states — Assam, Meghalaya, Tripura, Mizoram.',
    'Sixth Schedule establishes Autonomous District Councils (ADCs): up to 30 members (4 nominated by Governor, rest elected for 5 years).',
    'ADC powers: laws on land, forests (not reserved), jhum, village chiefs, inheritance, marriage, social customs; can levy taxes; village/district courts.',
    'PESA (1996): extends 73rd Amendment to Fifth Schedule areas; Gram Sabha is the central institution.',
    'PESA: Gram Sabha controls community resources, minor forest produce; consent required for land acquisition; ownership of minor forest produce.',
    'Forest Rights Act 2006: recognizes forest-dwelling tribal rights over forest land (up to 4 hectares individual); community forest rights.',
    'Art 371 series: special provisions for specific states — 371A (Nagaland), 371B (Assam), 371F (Sikkim), 371G (Mizoram), etc.',
    'Samata v. AP (2013): non-tribals cannot acquire tribal land in Fifth Schedule areas.',
  ],
  comparisons: [
    {
      title: 'Fifth Schedule vs Sixth Schedule',
      headers: ['Aspect', 'Fifth Schedule', 'Sixth Schedule'],
      rows: [
        ['Article', 'Art 244(1)', 'Art 244(2)'],
        ['States', '10 states', '4 NE states (Assam, Meghalaya, Tripura, Mizoram)'],
        ['Governance', 'Governor + TAC', 'Autonomous District/Regional Councils'],
        ['Governor\'s role', 'Modify laws; annual reports', 'Supervisory; can annul ADC laws'],
        ['Extension of Panchayati Raj', 'Via PESA 1996', 'ADCs function as local self-government'],
        ['Judicial powers', 'Limited', 'ADCs can establish village/district courts'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Sixth Schedule States (AMTM)',
      mnemonic: 'Assam, Meghalaya, Tripura, Mizoram',
      explanation: 'The four northeastern states covered by the Sixth Schedule.',
    },
  ],
}
