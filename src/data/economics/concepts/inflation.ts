import type { SubjectConcept } from '@/types/subject-notes'

export const inflationConcept: SubjectConcept = {
  topic: 'inflation',
  title: 'Inflation & Price Indices',
  description:
    'Types of inflation, CPI, WPI, GDP deflator, inflation targeting framework, and the impact of inflation on the Indian economy for competitive exam preparation.',
  category: 'Basic Concepts',
  keyDates: [
    { year: '2016', event: 'RBI adopted Flexible Inflation Targeting (FIT) framework — CPI target of 4% (±2%)' },
    { year: '2014', event: 'Urjit Patel Committee recommended CPI-based inflation targeting for monetary policy' },
    { year: '2011', event: 'New CPI (Combined) series launched with base year 2012 (later revised); WPI base year changed to 2011-12' },
    { year: '2013', event: 'Raghuram Rajan Committee report on Indian Financial Sector Reforms' },
    { year: '1974', event: 'India experienced severe inflation (~28.6%) due to oil crisis — led to JP Movement' },
    { year: '2022', event: 'RBI raised repo rate from 4% to 6.5% to combat post-COVID inflation spike' },
    { year: '1991', event: 'Inflation reached ~13.9% — contributed to the balance of payments crisis and reforms' },
  ],
  notes: [
    {
      section: 'Meaning & Types of Inflation',
      content:
        'Inflation is a sustained increase in the general price level, reducing purchasing power of money. Deflation is a sustained decrease in the general price level. Disinflation is a decrease in the rate of inflation (prices still rising, but slower). Stagflation is simultaneous occurrence of stagnation (low growth, high unemployment) and inflation. Reflation is deliberate policy-driven increase in prices to counter deflation. Types by rate: Creeping/Mild (<3%), Walking/Trotting (3-7%), Running (10-20%), Hyperinflation (>50% per month — e.g., Zimbabwe, Venezuela). Types by cause: Demand-Pull (too much money chasing too few goods), Cost-Push (rise in input costs — wages, oil, raw materials), Structural (supply-side bottlenecks in developing economies).',
    },
    {
      section: 'Consumer Price Index (CPI)',
      content:
        'CPI measures changes in the price level of a basket of consumer goods and services purchased by households. India has multiple CPI series: CPI (Combined) — used for inflation targeting by RBI, published by NSO monthly, base year 2012; CPI (Industrial Workers) — used for DA calculation for central government employees, base year 2016; CPI (Agricultural Labourers) and CPI (Rural Labourers). CPI (Combined) covers urban and rural areas with 299 items. Food & Beverages has the highest weight (~45.9%) in CPI. CPI is a better measure of cost of living than WPI because it captures retail prices that consumers actually pay. Headline inflation in India refers to CPI (Combined) year-on-year change.',
    },
    {
      section: 'Wholesale Price Index (WPI)',
      content:
        'WPI measures price changes at the wholesale/producer level, not at the consumer level. Published by the Office of Economic Adviser (OEA), Ministry of Commerce & Industry. Current base year: 2011-12. WPI has three major groups: Primary Articles (~22.6% weight), Fuel & Power (~13.2%), and Manufactured Products (~64.2%). WPI does not include services. Core inflation = WPI/CPI excluding food and fuel (these are volatile). Before 2014, RBI used WPI for monetary policy decisions. After the Urjit Patel Committee, CPI replaced WPI as the anchor for monetary policy. WPI is still important for deflating GDP from nominal to real terms and for trade/industry analysis.',
    },
    {
      section: 'Inflation Targeting Framework',
      content:
        'The RBI Act was amended in 2016 (via Finance Act) to mandate a Flexible Inflation Targeting (FIT) framework. Target: CPI inflation of 4% with a tolerance band of +/-2% (i.e., 2% to 6%). If inflation breaches the upper or lower tolerance band for three consecutive quarters, RBI must submit a report to the government explaining reasons and remedial actions. The Monetary Policy Committee (MPC) — 6 members (3 RBI + 3 external appointed by government) — sets the repo rate to achieve the inflation target. The MPC was constituted in September 2016. The inflation target is reviewed every five years; renewed in 2021 for 2021-26 with the same 4%±2% target.',
    },
    {
      section: 'Effects of Inflation',
      content:
        'On Debtors & Creditors: Inflation benefits debtors (repay in cheaper money) and hurts creditors (receive money with less purchasing power). On Fixed Income Groups: Salaried employees, pensioners suffer as real income falls. On Investors: Equity may hedge against inflation; fixed deposits lose real value. On Savings: Discourages saving if real interest rate (nominal rate − inflation) is negative. On Exports: Moderate inflation may make exports cheaper initially, but persistent high inflation makes exports uncompetitive. Phillips Curve: Inverse relationship between inflation and unemployment — lower unemployment → higher inflation (short run). On Government: Inflation increases nominal tax revenue (fiscal drag) but also increases expenditure on DA, subsidies.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Inflation is among the most heavily tested topics. UPSC asks about CPI vs WPI, the inflation targeting framework, types of inflation, and the role of MPC. Banking exams (IBPS, SBI) test definitions and current inflation data. SSC exams focus on factual recall — base years, who publishes which index, and Phillips Curve. Questions on stagflation, demand-pull vs cost-push, and real vs nominal interest rates are common across all exams.',
}
