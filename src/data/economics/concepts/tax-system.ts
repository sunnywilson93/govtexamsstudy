import type { SubjectConcept } from '@/types/subject-notes'

export const taxSystemConcept: SubjectConcept = {
  topic: 'tax-system',
  title: 'Indian Tax System & GST',
  description:
    'Direct and indirect taxes, GST structure, income tax, corporate tax, customs, and the constitutional framework of taxation in India.',
  category: 'Public Finance',
  keyDates: [
    { year: '2017', event: 'Goods and Services Tax (GST) launched on July 1 — "One Nation, One Tax" (101st Constitutional Amendment)' },
    { year: '2000', event: 'Kelkar Committee on Direct Tax reform recommended broadening the tax base' },
    { year: '2016', event: '101st Constitutional Amendment Act passed — inserted Articles 246A, 269A, 279A for GST' },
    { year: '2019', event: 'Corporate tax rate reduced from 30% to 22% (existing companies) and 15% (new manufacturing companies)' },
    { year: '1962', event: 'Direct Taxes Administration Enquiry Committee (Mahavir Tyagi) recommended reforms' },
    { year: '2020', event: 'New optional income tax regime introduced with lower rates but fewer exemptions' },
    { year: '2024', event: 'New tax regime made the default regime; standard deduction increased to Rs 75,000' },
  ],
  notes: [
    {
      section: 'Direct vs Indirect Taxes',
      content:
        'Direct Taxes: Tax burden cannot be shifted — paid by the person on whom it is levied. Examples: Income Tax, Corporate Tax, Capital Gains Tax, Securities Transaction Tax (STT), Wealth Tax (abolished in 2016). Managed by CBDT (Central Board of Direct Taxes). Indirect Taxes: Tax burden can be shifted to the consumer. Examples: GST, Customs Duty, Excise Duty (on petroleum, tobacco). Managed by CBIC (Central Board of Indirect Taxes and Customs). Progressive Tax: Rate increases with income (income tax). Regressive Tax: Takes a larger percentage from lower-income groups (sales tax, VAT). Proportional Tax: Same rate for all (corporate tax at a flat rate). India\'s tax-to-GDP ratio is ~11.7% (2023-24) — lower than OECD average (~34%). Direct tax share has been growing and now exceeds indirect tax share.',
    },
    {
      section: 'GST — Structure & Framework',
      content:
        'GST replaced multiple indirect taxes (excise, service tax, VAT, octroi, entry tax, luxury tax, etc.) with a unified national tax. It is a destination-based, multi-stage, comprehensive tax on value addition. Types: CGST (Central), SGST (State), IGST (Inter-state — collected by Centre, shared with consuming state), UTGST (Union Territory). GST Council (Art. 279A): Constitutional body chaired by the Union Finance Minister, with state finance ministers as members. Decisions by 3/4th majority (Centre has 1/3rd vote, all states together 2/3rd). Tax slabs: 0%, 5%, 12%, 18%, 28%. Compensation Cess on luxury/demerit goods (above 28%) — was used to compensate states for revenue shortfall until June 2022.',
    },
    {
      section: 'GST — Key Features',
      content:
        'Input Tax Credit (ITC): Tax paid on inputs can be used to offset tax on outputs — eliminates cascading effect (tax on tax). E-Way Bill: Required for movement of goods worth more than Rs 50,000. Composition Scheme: For small taxpayers with turnover up to Rs 1.5 crore — pay tax at a lower rate (1-6%), cannot collect tax from customers, no ITC. GST Network (GSTN): IT backbone for GST — handles registration, returns, payments. Items outside GST: Petroleum products (crude oil, natural gas, ATF, diesel, petrol), electricity, alcohol for human consumption, real estate (partially). Reverse Charge Mechanism: In certain cases, the recipient pays GST instead of the supplier. E-invoicing mandatory for businesses with turnover above Rs 5 crore.',
    },
    {
      section: 'Income Tax Structure',
      content:
        'Income tax is levied under the Income Tax Act 1961 on individuals, HUFs, firms, companies, and other entities. Five heads of income: Salary, House Property, Business/Profession, Capital Gains, Other Sources. Two regimes (2024-25): Old Regime (with exemptions — HRA, 80C, 80D etc.) and New Regime (default — lower rates, standard deduction of Rs 75,000, fewer exemptions). New regime tax slabs (2024-25): 0-3L: Nil, 3-7L: 5%, 7-10L: 10%, 10-12L: 15%, 12-15L: 20%, above 15L: 30%. TDS (Tax Deducted at Source) and TCS (Tax Collected at Source) are mechanisms for advance tax collection. PAN (Permanent Account Number) is mandatory for financial transactions above specified limits. Aadhaar-PAN linking is mandatory.',
    },
    {
      section: 'Customs Duty & Other Taxes',
      content:
        'Customs Duty: Levied on imports (and some exports) under the Customs Act 1962. Types: Basic Customs Duty (BCD), Integrated GST (IGST) on imports, Social Welfare Surcharge, Anti-dumping duty, Countervailing duty, Safeguard duty. Excise Duty: Now applicable only to petroleum products and tobacco (others subsumed in GST). Securities Transaction Tax (STT): On purchase/sale of securities on recognised stock exchanges. Dividend Distribution Tax (DDT): Abolished in 2020 — dividends now taxable in hands of recipients. Equalisation Levy: "Google Tax" — 6% on digital advertising services and 2% on e-commerce supply of goods/services by non-resident operators. Removed in 2024 as part of OECD Pillar 1 negotiations. Cess: Specific purpose tax — Education Cess (4% health & education cess on income tax), Swachh Bharat Cess (discontinued).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'GST is one of the most heavily tested topics across all exams. UPSC asks about the GST Council, constitutional amendments, and items outside GST. SSC exams test GST slab rates, launch date, and types (CGST/SGST/IGST). Banking exams ask about ITC, e-way bill, and the composition scheme. Income tax regime changes are commonly tested as current affairs.',
}
