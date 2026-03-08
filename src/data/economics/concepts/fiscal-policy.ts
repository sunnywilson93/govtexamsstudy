import type { SubjectConcept } from '@/types/subject-notes'

export const fiscalPolicyConcept: SubjectConcept = {
  topic: 'fiscal-policy',
  title: 'Fiscal Policy & FRBM',
  description:
    'Fiscal policy instruments, FRBM Act, fiscal deficit management, government borrowing, and the role of fiscal policy in economic stabilisation.',
  category: 'Public Finance',
  keyDates: [
    { year: '2003', event: 'FRBM Act enacted — mandated eliminating revenue deficit and reducing fiscal deficit to 3% of GDP' },
    { year: '2018', event: 'N.K. Singh Committee recommended fiscal deficit path of 3% by 2019-20 and debt-GDP ratio of 40% for Centre' },
    { year: '2020', event: 'FRBM targets suspended due to COVID-19; escape clause invoked for fiscal deficit above 3%' },
    { year: '2021', event: 'Fiscal deficit reached 9.2% of GDP in 2020-21 due to pandemic spending' },
    { year: '2024', event: 'Fiscal deficit targeted at 5.1% of GDP for 2024-25; glide path towards 4.5% by 2025-26' },
    { year: '1991', event: 'Fiscal crisis — fiscal deficit was ~8% of GDP, contributing to balance of payments crisis' },
  ],
  notes: [
    {
      section: 'Meaning & Objectives of Fiscal Policy',
      content:
        'Fiscal policy refers to the government\'s use of taxation and expenditure to influence the economy. Objectives: (1) Economic Growth: Increased public investment (capital expenditure) stimulates growth. (2) Price Stability: Adjusting taxes and spending to manage aggregate demand. (3) Employment Generation: Government spending creates jobs directly (MGNREGA) and indirectly. (4) Redistribution of Income: Progressive taxation and transfer payments reduce inequality. (5) Balance of Payments: Tariffs and export incentives. Expansionary fiscal policy: Increased spending or reduced taxes to boost demand (used during recession). Contractionary fiscal policy: Reduced spending or increased taxes to control inflation. Fiscal policy works alongside monetary policy — coordination is essential.',
    },
    {
      section: 'Fiscal Deficit & Related Concepts',
      content:
        'Revenue Deficit = Revenue Expenditure − Revenue Receipts. Indicates government is dissaving — borrowing for current consumption. Effective Revenue Deficit = Revenue Deficit − Grants for creation of capital assets. Introduced in Budget 2011-12 to give a truer picture. Fiscal Deficit = Total Expenditure − Total Receipts (excluding borrowings) = Total Borrowing. It indicates the total borrowing requirement. Primary Deficit = Fiscal Deficit − Interest Payments. Shows the borrowing need excluding legacy debt servicing. If primary deficit is zero, the entire borrowing is for interest payments. Monetised Deficit = Fiscal deficit financed by RBI (printing money). The FRBM Act prohibits RBI from buying government securities in the primary market (no direct monetisation).',
    },
    {
      section: 'FRBM Act & Fiscal Consolidation',
      content:
        'FRBM Act 2003 (Fiscal Responsibility and Budget Management): Originally targeted eliminating revenue deficit by 2008-09 and reducing fiscal deficit to 3% of GDP. Amended multiple times; deadlines extended. N.K. Singh Committee (2017): Recommended fiscal deficit path of 3% by FY20, 2.8% by FY21, 2.5% by FY23. Recommended Debt-GDP ratio of 40% for Centre, 20% for States, combined 60%. Recommended creating an autonomous Fiscal Council. Escape Clause: Allows deviation from targets by 0.5% of GDP in case of national security, war, national calamity, structural reforms, or economic slowdown. COVID-19 led to invocation of the escape clause in 2020-21. States have their own FRBM Acts — state fiscal deficit targets are typically 3-3.5% of GSDP.',
    },
    {
      section: 'Government Borrowing & Public Debt',
      content:
        'The government borrows through: Market Borrowings (dated G-Secs, T-Bills) — largest source. Small Savings: PPF, NSC, KVP, Sukanya Samriddhi — channelled into National Small Savings Fund (NSSF). External Borrowing: Multilateral (World Bank, ADB), bilateral, sovereign bonds. Provident Funds and Insurance. India\'s general government debt is approximately 81% of GDP (2023-24). Central government debt: ~57% of GDP. Internal debt dominates (~95%), external debt is ~5%. Crowding Out Effect: When government borrows heavily, it pushes up interest rates, making private sector borrowing more expensive and potentially reducing private investment. However, if borrowing is used for productive capital expenditure, it can "crowd in" private investment.',
    },
    {
      section: 'Fiscal Federalism & Finance Commission',
      content:
        'Article 280 provides for the Finance Commission — a constitutional body constituted every 5 years to recommend the distribution of tax revenues between Centre and States. 15th Finance Commission (NK Singh, 2020-26): Recommended 41% of divisible pool of central taxes to states (same as 14th FC). Cess and surcharges are NOT part of the divisible pool — their share has been increasing, reducing states\' actual share. Grants-in-Aid: Article 275 (statutory, on FC recommendation) and Article 282 (discretionary). GST Compensation: States were guaranteed 14% annual growth in GST revenue for 5 years (2017-2022) — shortfall compensated from Compensation Cess. Off-budget borrowings by states (through state PSUs, special purpose vehicles) are a concern for fiscal transparency.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Fiscal policy and the FRBM Act are core UPSC topics — questions on deficit concepts, fiscal consolidation, and Finance Commission recommendations appear regularly. Banking exams test fiscal deficit definitions and current targets. SSC exams ask about FRBM provisions, types of deficits, and the crowding out effect.',
}
