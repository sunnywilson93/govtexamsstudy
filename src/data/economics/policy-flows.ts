import type { PolicyFlow } from "@/types/economics"

export const policyFlows: PolicyFlow[] = [
  {
    id: "monetary-policy-transmission",
    name: "Monetary Policy Transmission",
    description:
      "How the RBI's repo rate changes ripple through the economy to affect inflation, demand, and GDP growth.",
    category: "monetary",
    steps: [
      {
        id: 1,
        title: "RBI changes Repo Rate",
        description:
          "The Reserve Bank of India raises or lowers the repo rate (the rate at which banks borrow overnight funds from RBI). This is the primary monetary policy tool.",
        value: "Current Repo Rate: 6.50%",
        connections: [{ targetStepId: 2, label: "Signals cost of money" }],
      },
      {
        id: 2,
        title: "Bank Lending Rates adjust",
        description:
          "Commercial banks adjust their MCLR (Marginal Cost of Funds Based Lending Rate) and external benchmark-linked rates in response to the repo rate change.",
        value: "MCLR typically moves 0.5-0.7x of repo change",
        connections: [{ targetStepId: 3, label: "Affects borrowing cost" }],
      },
      {
        id: 3,
        title: "Consumer and Business Borrowing",
        description:
          "Higher lending rates discourage borrowing (loans become expensive); lower rates encourage borrowing (EMIs decrease). Affects home loans, auto loans, and business credit.",
        connections: [{ targetStepId: 4, label: "Changes spending capacity" }],
      },
      {
        id: 4,
        title: "Aggregate Demand",
        description:
          "When borrowing decreases, consumer spending and business investment fall, reducing aggregate demand. When borrowing increases, demand rises.",
        connections: [{ targetStepId: 5, label: "Influences price levels" }],
      },
      {
        id: 5,
        title: "Inflation Impact",
        description:
          "Lower demand reduces upward pressure on prices (inflation falls). Higher demand can push prices up (inflation rises). RBI targets 4% CPI inflation (with ±2% band).",
        value: "Target: 4% CPI (2-6% band)",
        connections: [{ targetStepId: 6, label: "Affects real growth" }],
      },
      {
        id: 6,
        title: "GDP Growth Impact",
        description:
          "Tight monetary policy (high rates) controls inflation but slows growth. Loose monetary policy (low rates) boosts growth but risks inflation. The RBI balances this trade-off.",
        connections: [{ targetStepId: 7, label: "Feedback loop" }],
      },
      {
        id: 7,
        title: "RBI reassesses and recalibrates",
        description:
          "The Monetary Policy Committee (MPC) meets bi-monthly to review inflation data, growth projections, and global conditions. Policy stance can be accommodative, neutral, or hawkish.",
        connections: [{ targetStepId: 1, label: "Next policy cycle" }],
      },
    ],
  },
  {
    id: "fiscal-policy-multiplier",
    name: "Fiscal Policy Multiplier Effect",
    description:
      "How government spending increase creates a multiplied effect on employment, income, demand, and tax revenue.",
    category: "fiscal",
    steps: [
      {
        id: 1,
        title: "Government increases spending",
        description:
          "The Union Government increases capital expenditure (e.g., road construction, railways, defence) through the Union Budget. Funded by tax revenue or borrowing.",
        value: "Capital Expenditure FY25: ~₹11.1 lakh crore",
        connections: [{ targetStepId: 2, label: "Creates projects" }],
      },
      {
        id: 2,
        title: "Infrastructure Development",
        description:
          "Money flows to infrastructure projects — highways, railways, ports, digital infrastructure. Contracts go to construction firms, steel manufacturers, cement companies.",
        connections: [{ targetStepId: 3, label: "Generates jobs" }],
      },
      {
        id: 3,
        title: "Employment Generation",
        description:
          "Infrastructure projects create direct jobs (construction workers, engineers) and indirect jobs (suppliers, transport, food vendors). MGNREGA provides rural employment guarantee.",
        connections: [{ targetStepId: 4, label: "Workers earn income" }],
      },
      {
        id: 4,
        title: "Income and Consumption Rise",
        description:
          "Newly employed workers spend their income on goods and services — food, clothing, housing, education. This is the Marginal Propensity to Consume (MPC).",
        connections: [{ targetStepId: 5, label: "Spending increases" }],
      },
      {
        id: 5,
        title: "Aggregate Demand Increases",
        description:
          "Higher consumer spending increases demand for goods and services. Businesses respond by increasing production, hiring more workers, and investing in capacity expansion.",
        connections: [{ targetStepId: 6, label: "Economic activity grows" }],
      },
      {
        id: 6,
        title: "Tax Revenue Growth",
        description:
          "Higher economic activity generates more tax revenue — GST (consumption), Income Tax (employment), Corporate Tax (profits). This helps reduce fiscal deficit over time.",
        connections: [{ targetStepId: 7, label: "Fiscal consolidation" }],
      },
      {
        id: 7,
        title: "Fiscal Multiplier Effect",
        description:
          "The initial government spending creates a multiplied impact on GDP. For India, the fiscal multiplier for capital expenditure is estimated at 2.5-3x, meaning ₹1 of capex generates ₹2.5-3 of GDP.",
        value: "Multiplier: ~2.5-3x for capital expenditure",
        connections: [{ targetStepId: 1, label: "Next budget cycle" }],
      },
    ],
  },
]
