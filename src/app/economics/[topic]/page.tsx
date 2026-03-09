import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { SubjectConcept, SubjectRevision, SubjectProblem } from '@/types/subject-notes'
import { SubjectTopicTabs } from '@/components/visualizers/shared/SubjectTopicTabs'

// Basic Concepts
import { basicConceptsConcept } from '@/data/economics/concepts/basic-concepts'
import { nationalIncomeConcept } from '@/data/economics/concepts/national-income'
import { moneySupplyConcept } from '@/data/economics/concepts/money-supply'
import { inflationConcept } from '@/data/economics/concepts/inflation'
import { povertyUnemploymentConcept } from '@/data/economics/concepts/poverty-unemployment'
import { demandSupplyConcept } from '@/data/economics/concepts/demand-supply'
import { marketStructuresConcept } from '@/data/economics/concepts/market-structures'

import { basicConceptsRevision } from '@/data/economics/revision/basic-concepts'
import { nationalIncomeRevision } from '@/data/economics/revision/national-income'
import { moneySupplyRevision } from '@/data/economics/revision/money-supply'
import { inflationRevision } from '@/data/economics/revision/inflation'
import { povertyUnemploymentRevision } from '@/data/economics/revision/poverty-unemployment'
import { demandSupplyRevision } from '@/data/economics/revision/demand-supply'
import { marketStructuresRevision } from '@/data/economics/revision/market-structures'

import { basicConceptsProblems } from '@/data/economics/problems/basic-concepts-problems'
import { nationalIncomeProblems } from '@/data/economics/problems/national-income-problems'
import { moneySupplyProblems } from '@/data/economics/problems/money-supply-problems'
import { inflationProblems } from '@/data/economics/problems/inflation-problems'
import { povertyUnemploymentProblems } from '@/data/economics/problems/poverty-unemployment-problems'
import { demandSupplyProblems } from '@/data/economics/problems/demand-supply-problems'
import { marketStructuresProblems } from '@/data/economics/problems/market-structures-problems'

// Banking & Monetary
import { rbiConcept } from '@/data/economics/concepts/rbi'
import { bankingSystemConcept } from '@/data/economics/concepts/banking-system'
import { financialMarketsConcept } from '@/data/economics/concepts/financial-markets'
import { bankingNpasConcept } from '@/data/economics/concepts/banking-npas'
import { insuranceConcept } from '@/data/economics/concepts/insurance'
import { sebiConcept } from '@/data/economics/concepts/sebi'
import { nabardSidbiConcept } from '@/data/economics/concepts/nabard-sidbi'
import { microfinanceShgsConcept } from '@/data/economics/concepts/microfinance-shgs'

import { rbiRevision } from '@/data/economics/revision/rbi'
import { bankingSystemRevision } from '@/data/economics/revision/banking-system'
import { financialMarketsRevision } from '@/data/economics/revision/financial-markets'
import { bankingNpasRevision } from '@/data/economics/revision/banking-npas'
import { insuranceRevision } from '@/data/economics/revision/insurance'
import { sebiRevision } from '@/data/economics/revision/sebi'
import { nabardSidbiRevision } from '@/data/economics/revision/nabard-sidbi'
import { microfinanceShgsRevision } from '@/data/economics/revision/microfinance-shgs'

import { rbiProblems } from '@/data/economics/problems/rbi-problems'
import { bankingSystemProblems } from '@/data/economics/problems/banking-system-problems'
import { financialMarketsProblems } from '@/data/economics/problems/financial-markets-problems'
import { bankingNpasProblems } from '@/data/economics/problems/banking-npas-problems'
import { insuranceProblems } from '@/data/economics/problems/insurance-problems'
import { sebiProblems } from '@/data/economics/problems/sebi-problems'
import { nabardSidbiProblems } from '@/data/economics/problems/nabard-sidbi-problems'
import { microfinanceShgsProblems } from '@/data/economics/problems/microfinance-shgs-problems'

// Public Finance
import { unionBudgetConcept } from '@/data/economics/concepts/union-budget'
import { fiscalPolicyConcept } from '@/data/economics/concepts/fiscal-policy'
import { taxSystemConcept } from '@/data/economics/concepts/tax-system'
import { publicDebtConcept } from '@/data/economics/concepts/public-debt'
import { publicExpenditureConcept } from '@/data/economics/concepts/public-expenditure'
import { gstDetailConcept } from '@/data/economics/concepts/gst-detail'
import { directTaxesConcept } from '@/data/economics/concepts/direct-taxes'

import { unionBudgetRevision } from '@/data/economics/revision/union-budget'
import { fiscalPolicyRevision } from '@/data/economics/revision/fiscal-policy'
import { taxSystemRevision } from '@/data/economics/revision/tax-system'
import { publicDebtRevision } from '@/data/economics/revision/public-debt'
import { publicExpenditureRevision } from '@/data/economics/revision/public-expenditure'
import { gstDetailRevision } from '@/data/economics/revision/gst-detail'
import { directTaxesRevision } from '@/data/economics/revision/direct-taxes'

import { unionBudgetProblems } from '@/data/economics/problems/union-budget-problems'
import { fiscalPolicyProblems } from '@/data/economics/problems/fiscal-policy-problems'
import { taxSystemProblems } from '@/data/economics/problems/tax-system-problems'
import { publicDebtProblems } from '@/data/economics/problems/public-debt-problems'
import { publicExpenditureProblems } from '@/data/economics/problems/public-expenditure-problems'
import { gstDetailProblems } from '@/data/economics/problems/gst-detail-problems'
import { directTaxesProblems } from '@/data/economics/problems/direct-taxes-problems'

// External Sector
import { foreignTradeConcept } from '@/data/economics/concepts/foreign-trade'
import { exchangeRateConcept } from '@/data/economics/concepts/exchange-rate'
import { internationalOrganizationsConcept } from '@/data/economics/concepts/international-organizations'
import { fdiFiiConcept } from '@/data/economics/concepts/fdi-fii'
import { balanceOfPaymentsConcept } from '@/data/economics/concepts/balance-of-payments'
import { wtoIndiaConcept } from '@/data/economics/concepts/wto-india'
import { regionalTradeConcept } from '@/data/economics/concepts/regional-trade'
import { externalDebtConcept } from '@/data/economics/concepts/external-debt'

import { foreignTradeRevision } from '@/data/economics/revision/foreign-trade'
import { exchangeRateRevision } from '@/data/economics/revision/exchange-rate'
import { internationalOrganizationsRevision } from '@/data/economics/revision/international-organizations'
import { fdiFiiRevision } from '@/data/economics/revision/fdi-fii'
import { balanceOfPaymentsRevision } from '@/data/economics/revision/balance-of-payments'
import { wtoIndiaRevision } from '@/data/economics/revision/wto-india'
import { regionalTradeRevision } from '@/data/economics/revision/regional-trade'
import { externalDebtRevision } from '@/data/economics/revision/external-debt'

import { foreignTradeProblems } from '@/data/economics/problems/foreign-trade-problems'
import { exchangeRateProblems } from '@/data/economics/problems/exchange-rate-problems'
import { internationalOrganizationsProblems } from '@/data/economics/problems/international-organizations-problems'
import { fdiFiiProblems } from '@/data/economics/problems/fdi-fii-problems'
import { balanceOfPaymentsProblems } from '@/data/economics/problems/balance-of-payments-problems'
import { wtoIndiaProblems } from '@/data/economics/problems/wto-india-problems'
import { regionalTradeProblems } from '@/data/economics/problems/regional-trade-problems'
import { externalDebtProblems } from '@/data/economics/problems/external-debt-problems'

// Planning & Development
import { planningConcept } from '@/data/economics/concepts/planning'
import { economicReformsConcept } from '@/data/economics/concepts/economic-reforms'
import { agricultureEconomyConcept } from '@/data/economics/concepts/agriculture-economy'
import { industryPolicyConcept } from '@/data/economics/concepts/industry-policy'
import { infrastructureConcept } from '@/data/economics/concepts/infrastructure'
import { disinvestmentConcept } from '@/data/economics/concepts/disinvestment'
import { pppModelConcept } from '@/data/economics/concepts/ppp-model'
import { sezCorridorsConcept } from '@/data/economics/concepts/sez-corridors'
import { landReformsConcept } from '@/data/economics/concepts/land-reforms'
import { msmeSectorConcept } from '@/data/economics/concepts/msme-sector'

import { planningRevision } from '@/data/economics/revision/planning'
import { economicReformsRevision } from '@/data/economics/revision/economic-reforms'
import { agricultureEconomyRevision } from '@/data/economics/revision/agriculture-economy'
import { industryPolicyRevision } from '@/data/economics/revision/industry-policy'
import { infrastructureRevision } from '@/data/economics/revision/infrastructure'
import { disinvestmentRevision } from '@/data/economics/revision/disinvestment'
import { pppModelRevision } from '@/data/economics/revision/ppp-model'
import { sezCorridorsRevision } from '@/data/economics/revision/sez-corridors'
import { landReformsRevision } from '@/data/economics/revision/land-reforms'
import { msmeSectorRevision } from '@/data/economics/revision/msme-sector'

import { planningProblems } from '@/data/economics/problems/planning-problems'
import { economicReformsProblems } from '@/data/economics/problems/economic-reforms-problems'
import { agricultureEconomyProblems } from '@/data/economics/problems/agriculture-economy-problems'
import { industryPolicyProblems } from '@/data/economics/problems/industry-policy-problems'
import { infrastructureProblems } from '@/data/economics/problems/infrastructure-problems'
import { disinvestmentProblems } from '@/data/economics/problems/disinvestment-problems'
import { pppModelProblems } from '@/data/economics/problems/ppp-model-problems'
import { sezCorridorsProblems } from '@/data/economics/problems/sez-corridors-problems'
import { landReformsProblems } from '@/data/economics/problems/land-reforms-problems'
import { msmeSectorProblems } from '@/data/economics/problems/msme-sector-problems'

// Social & Contemporary
import { inclusiveGrowthConcept } from '@/data/economics/concepts/inclusive-growth'
import { governmentSchemesConcept } from '@/data/economics/concepts/government-schemes'
import { digitalEconomyConcept } from '@/data/economics/concepts/digital-economy'
import { sustainableDevelopmentConcept } from '@/data/economics/concepts/sustainable-development'
import { socialSecurityConcept } from '@/data/economics/concepts/social-security'
import { demographicDividendConcept } from '@/data/economics/concepts/demographic-dividend'
import { hdiMpiConcept } from '@/data/economics/concepts/hdi-mpi'
import { foodSecurityConcept } from '@/data/economics/concepts/food-security'
import { labourReformsConcept } from '@/data/economics/concepts/labour-reforms'
import { startupInnovationConcept } from '@/data/economics/concepts/startup-innovation'

import { inclusiveGrowthRevision } from '@/data/economics/revision/inclusive-growth'
import { governmentSchemesRevision } from '@/data/economics/revision/government-schemes'
import { digitalEconomyRevision } from '@/data/economics/revision/digital-economy'
import { sustainableDevelopmentRevision } from '@/data/economics/revision/sustainable-development'
import { socialSecurityRevision } from '@/data/economics/revision/social-security'
import { demographicDividendRevision } from '@/data/economics/revision/demographic-dividend'
import { hdiMpiRevision } from '@/data/economics/revision/hdi-mpi'
import { foodSecurityRevision } from '@/data/economics/revision/food-security'
import { labourReformsRevision } from '@/data/economics/revision/labour-reforms'
import { startupInnovationRevision } from '@/data/economics/revision/startup-innovation'

import { inclusiveGrowthProblems } from '@/data/economics/problems/inclusive-growth-problems'
import { governmentSchemesProblems } from '@/data/economics/problems/government-schemes-problems'
import { digitalEconomyProblems } from '@/data/economics/problems/digital-economy-problems'
import { sustainableDevelopmentProblems } from '@/data/economics/problems/sustainable-development-problems'
import { socialSecurityProblems } from '@/data/economics/problems/social-security-problems'
import { demographicDividendProblems } from '@/data/economics/problems/demographic-dividend-problems'
import { hdiMpiProblems } from '@/data/economics/problems/hdi-mpi-problems'
import { foodSecurityProblems } from '@/data/economics/problems/food-security-problems'
import { labourReformsProblems } from '@/data/economics/problems/labour-reforms-problems'
import { startupInnovationProblems } from '@/data/economics/problems/startup-innovation-problems'

interface TopicData {
  concept: SubjectConcept
  revision: SubjectRevision
  problems: SubjectProblem[]
  label: string
  description: string
}

const TOPIC_DATA: Record<string, TopicData> = {
  'basic-concepts': {
    concept: basicConceptsConcept,
    revision: basicConceptsRevision,
    problems: basicConceptsProblems,
    label: 'Basic Economic Concepts',
    description:
      'Basic economic concepts for UPSC, SSC & banking exams. GDP, GNP, demand-supply, market types with notes, revision, and PYQs.',
  },
  'national-income': {
    concept: nationalIncomeConcept,
    revision: nationalIncomeRevision,
    problems: nationalIncomeProblems,
    label: 'National Income Accounting',
    description:
      'National income accounting for government exams. GDP, NDP, NNP, methods of measurement with notes, revision, and PYQs.',
  },
  'money-supply': {
    concept: moneySupplyConcept,
    revision: moneySupplyRevision,
    problems: moneySupplyProblems,
    label: 'Money & Money Supply',
    description:
      'Money supply for UPSC & SSC. M0-M3 aggregates, money multiplier, velocity of circulation with notes, revision, and PYQs.',
  },
  inflation: {
    concept: inflationConcept,
    revision: inflationRevision,
    problems: inflationProblems,
    label: 'Inflation & Price Indices',
    description:
      'Inflation for government exams. CPI, WPI, demand-pull, cost-push, inflation targeting with notes, revision, and PYQs.',
  },
  'poverty-unemployment': {
    concept: povertyUnemploymentConcept,
    revision: povertyUnemploymentRevision,
    problems: povertyUnemploymentProblems,
    label: 'Poverty & Unemployment',
    description:
      'Poverty and unemployment for UPSC & SSC. Poverty lines, MGNREGA, employment surveys with notes, revision, and PYQs.',
  },
  rbi: {
    concept: rbiConcept,
    revision: rbiRevision,
    problems: rbiProblems,
    label: 'Reserve Bank of India',
    description:
      'RBI for government exams. Monetary policy, repo rate, CRR, SLR, MPC, LAF corridor with notes, revision, and PYQs.',
  },
  'banking-system': {
    concept: bankingSystemConcept,
    revision: bankingSystemRevision,
    problems: bankingSystemProblems,
    label: 'Indian Banking System',
    description:
      'Indian banking system for UPSC & SSC. PSBs, private banks, SFBs, payments banks, RRBs with notes, revision, and PYQs.',
  },
  'financial-markets': {
    concept: financialMarketsConcept,
    revision: financialMarketsRevision,
    problems: financialMarketsProblems,
    label: 'Financial Markets & SEBI',
    description:
      'Financial markets for government exams. Stock exchanges, SEBI, bonds, derivatives with notes, revision, and PYQs.',
  },
  'banking-npas': {
    concept: bankingNpasConcept,
    revision: bankingNpasRevision,
    problems: bankingNpasProblems,
    label: 'Banking Reforms & NPAs',
    description:
      'Banking NPAs and reforms for UPSC & SSC. Bad loans, IBC, SARFAESI, recapitalisation with notes, revision, and PYQs.',
  },
  insurance: {
    concept: insuranceConcept,
    revision: insuranceRevision,
    problems: insuranceProblems,
    label: 'Insurance & Pension',
    description:
      'Insurance sector for government exams. IRDAI, LIC, PM insurance schemes, NPS with notes, revision, and PYQs.',
  },
  'union-budget': {
    concept: unionBudgetConcept,
    revision: unionBudgetRevision,
    problems: unionBudgetProblems,
    label: 'Union Budget',
    description:
      'Union Budget for UPSC & SSC. Revenue/capital receipts, expenditure, budget documents with notes, revision, and PYQs.',
  },
  'fiscal-policy': {
    concept: fiscalPolicyConcept,
    revision: fiscalPolicyRevision,
    problems: fiscalPolicyProblems,
    label: 'Fiscal Policy & Deficits',
    description:
      'Fiscal policy for government exams. Fiscal deficit, FRBM Act, revenue deficit with notes, revision, and PYQs.',
  },
  'tax-system': {
    concept: taxSystemConcept,
    revision: taxSystemRevision,
    problems: taxSystemProblems,
    label: 'Indian Tax System',
    description:
      'Indian tax system for UPSC & SSC. GST, income tax, corporate tax, direct vs indirect with notes, revision, and PYQs.',
  },
  'public-debt': {
    concept: publicDebtConcept,
    revision: publicDebtRevision,
    problems: publicDebtProblems,
    label: 'Public Debt',
    description:
      'Public debt for government exams. Internal vs external debt, debt-GDP ratio, G-Secs with notes, revision, and PYQs.',
  },
  'public-expenditure': {
    concept: publicExpenditureConcept,
    revision: publicExpenditureRevision,
    problems: publicExpenditureProblems,
    label: 'Public Expenditure',
    description:
      'Public expenditure for UPSC & SSC. Plan vs non-plan, subsidies, Centrally Sponsored Schemes with notes, revision, and PYQs.',
  },
  'foreign-trade': {
    concept: foreignTradeConcept,
    revision: foreignTradeRevision,
    problems: foreignTradeProblems,
    label: 'Foreign Trade & BoP',
    description:
      'Foreign trade for government exams. Exports, imports, trade deficit, balance of payments with notes, revision, and PYQs.',
  },
  'exchange-rate': {
    concept: exchangeRateConcept,
    revision: exchangeRateRevision,
    problems: exchangeRateProblems,
    label: 'Exchange Rate & Forex',
    description:
      'Exchange rate for UPSC & SSC. Fixed vs floating, NEER, REER, forex reserves with notes, revision, and PYQs.',
  },
  'international-organizations': {
    concept: internationalOrganizationsConcept,
    revision: internationalOrganizationsRevision,
    problems: internationalOrganizationsProblems,
    label: 'International Economic Organizations',
    description:
      'International organisations for government exams. IMF, World Bank, WTO, ADB, BRICS with notes, revision, and PYQs.',
  },
  'fdi-fii': {
    concept: fdiFiiConcept,
    revision: fdiFiiRevision,
    problems: fdiFiiProblems,
    label: 'FDI & FII',
    description:
      'FDI and FII for UPSC & SSC. Automatic vs approval route, sectoral caps, FPI with notes, revision, and PYQs.',
  },
  planning: {
    concept: planningConcept,
    revision: planningRevision,
    problems: planningProblems,
    label: 'Economic Planning in India',
    description:
      'Economic planning for government exams. Five Year Plans, Planning Commission, NITI Aayog with notes, revision, and PYQs.',
  },
  'economic-reforms': {
    concept: economicReformsConcept,
    revision: economicReformsRevision,
    problems: economicReformsProblems,
    label: 'LPG Reforms (1991)',
    description:
      'Economic reforms for UPSC & SSC. Liberalisation, privatisation, globalisation, BoP crisis with notes, revision, and PYQs.',
  },
  'agriculture-economy': {
    concept: agricultureEconomyConcept,
    revision: agricultureEconomyRevision,
    problems: agricultureEconomyProblems,
    label: 'Agriculture & Food Security',
    description:
      'Agriculture economy for government exams. MSP, PDS, Green Revolution, crop insurance with notes, revision, and PYQs.',
  },
  'industry-policy': {
    concept: industryPolicyConcept,
    revision: industryPolicyRevision,
    problems: industryPolicyProblems,
    label: 'Industrial Policy & MSMEs',
    description:
      'Industrial policy for UPSC & SSC. Make in India, PLI, MSME classification with notes, revision, and PYQs.',
  },
  infrastructure: {
    concept: infrastructureConcept,
    revision: infrastructureRevision,
    problems: infrastructureProblems,
    label: 'Infrastructure & Energy',
    description:
      'Infrastructure for government exams. NIP, Bharatmala, Sagarmala, power sector with notes, revision, and PYQs.',
  },
  'inclusive-growth': {
    concept: inclusiveGrowthConcept,
    revision: inclusiveGrowthRevision,
    problems: inclusiveGrowthProblems,
    label: 'Inclusive Growth & Financial Inclusion',
    description:
      'Inclusive growth for UPSC & SSC. Jan Dhan, SHGs, priority sector lending with notes, revision, and PYQs.',
  },
  'government-schemes': {
    concept: governmentSchemesConcept,
    revision: governmentSchemesRevision,
    problems: governmentSchemesProblems,
    label: 'Government Schemes',
    description:
      'Government schemes for government exams. PM-KISAN, Ayushman Bharat, Ujjwala, MUDRA with notes, revision, and PYQs.',
  },
  'digital-economy': {
    concept: digitalEconomyConcept,
    revision: digitalEconomyRevision,
    problems: digitalEconomyProblems,
    label: 'Digital Economy & FinTech',
    description:
      'Digital economy for UPSC & SSC. UPI, Digital Rupee, India Stack, ONDC with notes, revision, and PYQs.',
  },
  'sustainable-development': {
    concept: sustainableDevelopmentConcept,
    revision: sustainableDevelopmentRevision,
    problems: sustainableDevelopmentProblems,
    label: 'Sustainable Development & Climate',
    description:
      'Sustainable development for government exams. SDGs, Paris Agreement, green finance with notes, revision, and PYQs.',
  },
  'social-security': {
    concept: socialSecurityConcept,
    revision: socialSecurityRevision,
    problems: socialSecurityProblems,
    label: 'Social Security & Labour',
    description:
      'Social security for UPSC & SSC. Labour codes, EPFO, ESIC, pension schemes with notes, revision, and PYQs.',
  },
  'demographic-dividend': {
    concept: demographicDividendConcept,
    revision: demographicDividendRevision,
    problems: demographicDividendProblems,
    label: 'Demographic Dividend & Human Capital',
    description:
      'Demographic dividend for government exams. Population dynamics, skill development, education with notes, revision, and PYQs.',
  },
  'demand-supply': {
    concept: demandSupplyConcept,
    revision: demandSupplyRevision,
    problems: demandSupplyProblems,
    label: 'Demand, Supply & Elasticity',
    description:
      'Demand, supply and elasticity for UPSC & SSC. Law of demand, price floors, ceilings, PED, cross elasticity with notes, revision, and PYQs.',
  },
  'market-structures': {
    concept: marketStructuresConcept,
    revision: marketStructuresRevision,
    problems: marketStructuresProblems,
    label: 'Market Structures & Competition',
    description:
      'Market structures for government exams. Perfect competition, monopoly, oligopoly, CCI, anti-trust with notes, revision, and PYQs.',
  },
  sebi: {
    concept: sebiConcept,
    revision: sebiRevision,
    problems: sebiProblems,
    label: 'SEBI & Capital Market Regulation',
    description:
      'SEBI for UPSC & banking exams. Capital market regulation, IPO norms, insider trading, mutual funds with notes, revision, and PYQs.',
  },
  'nabard-sidbi': {
    concept: nabardSidbiConcept,
    revision: nabardSidbiRevision,
    problems: nabardSidbiProblems,
    label: 'NABARD, SIDBI & Development Finance',
    description:
      'NABARD and SIDBI for government exams. Rural credit, MSME financing, RIDF, refinancing with notes, revision, and PYQs.',
  },
  'microfinance-shgs': {
    concept: microfinanceShgsConcept,
    revision: microfinanceShgsRevision,
    problems: microfinanceShgsProblems,
    label: 'Microfinance & Self-Help Groups',
    description:
      'Microfinance and SHGs for UPSC & SSC. SHG-bank linkage, MFIs, NRLM, financial inclusion with notes, revision, and PYQs.',
  },
  'gst-detail': {
    concept: gstDetailConcept,
    revision: gstDetailRevision,
    problems: gstDetailProblems,
    label: 'GST — Detailed Analysis',
    description:
      'GST detailed analysis for government exams. CGST, SGST, IGST, GST Council, ITC, compensation cess with notes, revision, and PYQs.',
  },
  'direct-taxes': {
    concept: directTaxesConcept,
    revision: directTaxesRevision,
    problems: directTaxesProblems,
    label: 'Direct Taxes & Tax Reforms',
    description:
      'Direct taxes for UPSC & SSC. Income tax, corporate tax, new regime, Vivad se Vishwas, faceless assessment with notes, revision, and PYQs.',
  },
  'balance-of-payments': {
    concept: balanceOfPaymentsConcept,
    revision: balanceOfPaymentsRevision,
    problems: balanceOfPaymentsProblems,
    label: 'Balance of Payments',
    description:
      'Balance of payments for government exams. Current account, capital account, CAD, forex reserves, BoP crisis with notes, revision, and PYQs.',
  },
  'wto-india': {
    concept: wtoIndiaConcept,
    revision: wtoIndiaRevision,
    problems: wtoIndiaProblems,
    label: 'WTO & India',
    description:
      'WTO and India for UPSC & SSC. Doha Round, dispute settlement, AoA, TRIPS, trade facilitation with notes, revision, and PYQs.',
  },
  'regional-trade': {
    concept: regionalTradeConcept,
    revision: regionalTradeRevision,
    problems: regionalTradeProblems,
    label: 'Regional Trade & FTAs',
    description:
      'Regional trade agreements for government exams. ASEAN FTA, SAFTA, RCEP, CEPA, trade blocs with notes, revision, and PYQs.',
  },
  'external-debt': {
    concept: externalDebtConcept,
    revision: externalDebtRevision,
    problems: externalDebtProblems,
    label: 'External Debt Management',
    description:
      'External debt for UPSC & SSC. ECBs, NRI deposits, debt sustainability, multilateral borrowings with notes, revision, and PYQs.',
  },
  disinvestment: {
    concept: disinvestmentConcept,
    revision: disinvestmentRevision,
    problems: disinvestmentProblems,
    label: 'Disinvestment & Privatisation',
    description:
      'Disinvestment for government exams. Strategic sale, DIPAM, OFS, Air India, LIC IPO with notes, revision, and PYQs.',
  },
  'ppp-model': {
    concept: pppModelConcept,
    revision: pppModelRevision,
    problems: pppModelProblems,
    label: 'PPP Model & Infrastructure Finance',
    description:
      'PPP model for UPSC & SSC. BOT, DBOT, HAM, VGF, NaBFID, infrastructure financing with notes, revision, and PYQs.',
  },
  'sez-corridors': {
    concept: sezCorridorsConcept,
    revision: sezCorridorsRevision,
    problems: sezCorridorsProblems,
    label: 'SEZs & Industrial Corridors',
    description:
      'SEZs and industrial corridors for government exams. DMIC, Bharatmala, Sagarmala, PLI, NIMZ with notes, revision, and PYQs.',
  },
  'land-reforms': {
    concept: landReformsConcept,
    revision: landReformsRevision,
    problems: landReformsProblems,
    label: 'Land Reforms & Agrarian Relations',
    description:
      'Land reforms for UPSC & SSC. Zamindari abolition, land ceiling, tenancy reforms, SVAMITVA, digitisation with notes, revision, and PYQs.',
  },
  'msme-sector': {
    concept: msmeSectorConcept,
    revision: msmeSectorRevision,
    problems: msmeSectorProblems,
    label: 'MSME Sector',
    description:
      'MSME sector for government exams. Udyam registration, MUDRA, CGTMSE, PM Vishwakarma, GeM procurement with notes, revision, and PYQs.',
  },
  'hdi-mpi': {
    concept: hdiMpiConcept,
    revision: hdiMpiRevision,
    problems: hdiMpiProblems,
    label: 'HDI, MPI & Development Indicators',
    description:
      'HDI and MPI for UPSC & SSC. Human development, multidimensional poverty, gender indices, UNDP rankings with notes, revision, and PYQs.',
  },
  'food-security': {
    concept: foodSecurityConcept,
    revision: foodSecurityRevision,
    problems: foodSecurityProblems,
    label: 'Food Security & PDS',
    description:
      'Food security for government exams. NFSA, PDS, FCI, One Nation One Ration Card, PM Garib Kalyan with notes, revision, and PYQs.',
  },
  'labour-reforms': {
    concept: labourReformsConcept,
    revision: labourReformsRevision,
    problems: labourReformsProblems,
    label: 'Labour Reforms & Labour Codes',
    description:
      'Labour reforms for UPSC & SSC. Four labour codes, wages, social security, industrial relations, OSH with notes, revision, and PYQs.',
  },
  'startup-innovation': {
    concept: startupInnovationConcept,
    revision: startupInnovationRevision,
    problems: startupInnovationProblems,
    label: 'Startup India & Innovation',
    description:
      'Startup ecosystem for government exams. DPIIT, unicorns, Fund of Funds, AIM, patents, GII rankings with notes, revision, and PYQs.',
  },
}

interface Props {
  params: Promise<{ topic: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params
  const data = TOPIC_DATA[topic]
  if (!data) return {}
  const title = `${data.label} — Notes, Revision & PYQs | GovtExamsStudy`
  const description = `${data.description} Free notes, revision tricks, and previous year questions for UPSC, SSC CGL, and government exams.`
  return {
    title,
    description,
    keywords: [`${data.label}`, `${data.label} UPSC`, `${data.label} notes`, 'Indian Economy', 'economics for UPSC', 'SSC CGL economics', `${data.label} PYQ`],
    openGraph: {
      title,
      description,
      type: 'article',
      siteName: 'GovtExamsStudy',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: `https://govtexamsstudy.org/economics/${topic}`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(TOPIC_DATA).map((topic) => ({ topic }))
}

export default async function TopicPage({ params }: Props) {
  const { topic } = await params
  const data = TOPIC_DATA[topic]

  if (!data) notFound()

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-text-primary">{data.label}</h1>
      <SubjectTopicTabs
        concept={data.concept}
        revision={data.revision}
        problems={data.problems}
        subject="economics"
      />
    </div>
  )
}
