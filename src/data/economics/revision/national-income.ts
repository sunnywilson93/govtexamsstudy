import type { SubjectRevision } from '@/types/subject-notes'

export const nationalIncomeRevision: SubjectRevision = {
  topic: 'national-income',
  bullets: [
    'GDP = Total value of final goods/services produced within domestic territory in a year.',
    'GNP = GDP + Net Factor Income from Abroad (NFIA). For India, NFIA is typically negative, so GNP < GDP.',
    'NDP = GDP − Depreciation. NNP = GNP − Depreciation. NNP at Factor Cost = National Income.',
    'GDP at MP = GDP at FC + Indirect Taxes − Subsidies.',
    'Three methods of measuring: Production/Value Added Method, Income Method, Expenditure Method (GDP = C + I + G + X − M).',
    'Nominal GDP = at current prices (includes inflation). Real GDP = at constant/base year prices (removes inflation effect).',
    'GDP Deflator = (Nominal GDP / Real GDP) × 100.',
    'India\'s base year for GDP calculation is 2011-12. GVA at basic prices is used for sectoral analysis since 2015.',
    'Services sector contributes ~55% of GVA; Agriculture ~15%; Industry ~30%.',
    'Dadabhai Naoroji made the first estimate of India\'s national income. V.K.R.V. Rao gave the first scientific estimate.',
    'NSO (formerly CSO + NSSO, merged in 2019) under MoSPI releases GDP/GVA estimates.',
    'Per Capita Income = National Income / Population. India\'s per capita income: ~Rs 1.97 lakh (2023-24 at current prices).',
  ],
  comparisons: [
    {
      title: 'GDP vs GNP vs NDP vs NNP',
      headers: ['Aggregate', 'Formula', 'Key Point'],
      rows: [
        ['GDP', 'Total output within domestic territory', 'Includes foreigners\' output in India'],
        ['GNP', 'GDP + NFIA', 'Includes Indians\' output abroad'],
        ['NDP', 'GDP − Depreciation', 'Net of capital consumption'],
        ['NNP at FC', 'GNP − Depreciation − Net Indirect Taxes', 'This is National Income'],
      ],
    },
    {
      title: 'Factor Cost vs Market Price vs Basic Price',
      headers: ['Concept', 'Formula', 'Used For'],
      rows: [
        ['Factor Cost', 'Payment to factors of production', 'Pre-2015 GDP reporting'],
        ['Market Price', 'FC + Indirect Taxes − Subsidies', 'Current headline GDP'],
        ['Basic Price', 'FC + Production Taxes − Production Subsidies', 'GVA reporting (post-2015)'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'National Income Pioneers — DNV',
      mnemonic: 'Dadabhai Naoroji (First Estimate), National Income Committee (Mahalanobis), VKRV Rao (Scientific)',
      explanation: 'Dadabhai Naoroji (1868) — first estimate of national income, book: "Poverty and Un-British Rule in India". V.K.R.V. Rao (1931) — first scientific estimate. P.C. Mahalanobis chaired the National Income Committee (1949).',
    },
  ],
}
