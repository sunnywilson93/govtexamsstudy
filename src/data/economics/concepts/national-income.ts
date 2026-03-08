import type { SubjectConcept } from '@/types/subject-notes'

export const nationalIncomeConcept: SubjectConcept = {
  topic: 'national-income',
  title: 'National Income Accounting',
  description:
    'GDP, GNP, NNP, NDP, and other national income aggregates. Methods of calculation, difference between factor cost and market price, and India-specific data for competitive exams.',
  category: 'Basic Concepts',
  keyDates: [
    { year: '1868', event: 'Dadabhai Naoroji made the first estimate of India\'s national income (Poverty and Un-British Rule in India)' },
    { year: '1949', event: 'National Income Committee formed under P.C. Mahalanobis (later chaired by D.R. Gadgil)' },
    { year: '2015', event: 'India shifted GDP base year from 2004-05 to 2011-12 and adopted GVA at basic prices' },
    { year: '1954', event: 'CSO (Central Statistical Organisation) established — now renamed NSO (National Statistical Office) in 2019' },
    { year: '2019', event: 'NSSO and CSO merged to form NSO (National Statistical Office) under MoSPI' },
    { year: '2024', event: 'India\'s GDP at current prices estimated at approximately Rs 296 lakh crore for 2023-24' },
    { year: '1931', event: 'V.K.R.V. Rao provided the first scientific estimate of India\'s national income' },
  ],
  notes: [
    {
      section: 'Key National Income Aggregates',
      content:
        'GDP (Gross Domestic Product): Total value of all final goods and services produced within the domestic territory of a country in a year. It includes output by foreign nationals within the country but excludes output by nationals abroad. GNP (Gross National Product) = GDP + Net Factor Income from Abroad (NFIA). NFIA = Factor income earned by Indians abroad minus factor income earned by foreigners in India. For India, NFIA is typically negative (GNP < GDP). NDP (Net Domestic Product) = GDP − Depreciation. NNP (Net National Product) = GNP − Depreciation. NNP at factor cost = National Income. Per Capita Income = National Income / Population.',
    },
    {
      section: 'Factor Cost vs Market Price',
      content:
        'Factor Cost (FC): The cost of production, i.e., payments to factors of production (land, labour, capital, enterprise). Market Price (MP): The price at which goods are sold in the market, including indirect taxes minus subsidies. MP = FC + Indirect Taxes − Subsidies. Therefore: GDP at FC = GDP at MP − Net Indirect Taxes (where Net Indirect Taxes = Indirect Taxes − Subsidies). Post-2015 revision, India reports GDP at market prices as the headline number and GVA (Gross Value Added) at basic prices. Basic Price = Factor Cost + Production Taxes − Production Subsidies.',
    },
    {
      section: 'Methods of Measuring National Income',
      content:
        'Three methods yield the same result (in theory): (1) Production/Output/Value Added Method: Sum of value added at each stage of production across all sectors (primary, secondary, tertiary). Avoids double counting by using value added, not total output. (2) Income Method: Sum of all factor incomes — wages, rent, interest, profit. Used for sectors where output is hard to measure (e.g., services). (3) Expenditure Method: Sum of all final expenditure — GDP = C + I + G + (X − M), where C = private consumption, I = investment, G = government spending, (X−M) = net exports. India uses all three methods: production method for agriculture and industry, income method for services, and expenditure method as a cross-check.',
    },
    {
      section: 'Nominal vs Real GDP',
      content:
        'Nominal GDP (GDP at current prices): Measured at prices prevailing in the current year. Includes the effect of inflation. Real GDP (GDP at constant prices): Measured at prices of a fixed base year. Removes the effect of inflation, showing actual growth in output. GDP Deflator = (Nominal GDP / Real GDP) × 100. It measures the overall price level in the economy. If GDP Deflator > 100, prices have risen since the base year. India\'s current base year is 2011-12. Real GDP growth rate is the more meaningful indicator of economic progress. India\'s real GDP growth was approximately 8.2% in 2023-24.',
    },
    {
      section: 'GVA (Gross Value Added) — Post-2015 Framework',
      content:
        'Since January 2015, India uses GVA at basic prices as the primary measure of sectoral performance. GVA = GDP − Net Product Taxes. Three sectors: (1) Agriculture & Allied (share ~15% of GVA), (2) Industry including manufacturing, mining, construction, electricity (~30%), (3) Services including trade, transport, financial, public administration (~55%). The services sector is the largest contributor to India\'s GVA. CSO (now NSO under MoSPI) releases quarterly and annual GDP/GVA estimates. Advance Estimate (January), Second Advance Estimate (February), First Revised Estimate (January next year), Second Revised Estimate, Third Revised Estimate.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'National income is among the most frequently tested economics topics across all exams. UPSC Prelims regularly asks about GDP vs GNP, factor cost vs market price, and the GVA framework. SSC and banking exams test formulas (GDP=C+I+G+NX), base year, and latest GDP figures. Questions on who gave the first national income estimate (Dadabhai Naoroji) are perennial favourites.',
}
