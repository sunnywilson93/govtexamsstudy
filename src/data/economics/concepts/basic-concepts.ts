import type { SubjectConcept } from '@/types/subject-notes'

export const basicConceptsConcept: SubjectConcept = {
  topic: 'basic-concepts',
  title: 'Basic Economic Concepts',
  description:
    'Fundamental concepts of economics including scarcity, opportunity cost, types of economies, demand-supply, and market structures that form the foundation of Indian Economy for competitive exams.',
  category: 'Basic Concepts',
  keyDates: [
    { year: '1776', event: 'Adam Smith published "The Wealth of Nations" — birth of classical economics' },
    { year: '1936', event: 'J.M. Keynes published "The General Theory" — birth of macroeconomics' },
    { year: '1991', event: 'India shifted from mixed economy towards market-oriented economy (LPG reforms)' },
    { year: '1950', event: 'Planning Commission established — India adopted mixed economy model' },
    { year: '2015', event: 'NITI Aayog replaced Planning Commission — shift towards cooperative federalism' },
    { year: '1948', event: 'Industrial Policy Resolution — laid foundation for public sector dominance' },
  ],
  notes: [
    {
      section: 'Meaning & Definitions of Economics',
      content:
        'Economics studies how societies allocate scarce resources among unlimited wants. Adam Smith defined it as the study of wealth ("An Inquiry into the Nature and Causes of the Wealth of Nations"). Alfred Marshall shifted focus to welfare — economics is the study of mankind in the ordinary business of life. Lionel Robbins gave the scarcity definition — economics is the science that studies human behaviour as a relationship between ends and scarce means which have alternative uses. Paul Samuelson combined growth and scarcity in his definition. For exams, remember: Wealth definition (Smith) → Welfare definition (Marshall) → Scarcity definition (Robbins) → Growth definition (Samuelson).',
    },
    {
      section: 'Types of Economies',
      content:
        'Capitalist Economy (USA, UK): Private ownership of means of production, price mechanism allocates resources, profit motive drives production. Socialist Economy (erstwhile USSR, Cuba): State ownership, central planning allocates resources, social welfare is the motive. Mixed Economy (India): Coexistence of public and private sectors, government intervenes to correct market failures while allowing market forces to operate. India adopted the mixed economy model after independence through the Industrial Policy Resolution 1948 and the establishment of the Planning Commission in 1950. Post-1991 reforms shifted India towards greater market orientation while retaining social safety nets.',
    },
    {
      section: 'Demand, Supply & Market Equilibrium',
      content:
        'Law of Demand: Quantity demanded increases as price falls (inverse relationship), ceteris paribus. Exceptions: Giffen goods (inferior goods where income effect outweighs substitution effect — e.g., coarse grains for very poor consumers), Veblen goods (luxury goods bought for status — higher price increases demand). Law of Supply: Quantity supplied increases as price rises (direct relationship). Market Equilibrium occurs where demand equals supply. Elasticity of Demand measures responsiveness of quantity demanded to price changes. Price Elasticity = %change in quantity demanded / %change in price. Perfectly inelastic (salt, life-saving drugs), perfectly elastic (theoretical), unitary elastic, relatively elastic/inelastic.',
    },
    {
      section: 'Market Structures',
      content:
        'Perfect Competition: Large number of buyers and sellers, homogeneous product, free entry/exit, perfect information (e.g., agricultural markets). Monopoly: Single seller, no close substitutes, barriers to entry (e.g., Indian Railways in passenger rail). Monopolistic Competition: Many sellers, differentiated products, free entry/exit (e.g., restaurants, clothing brands). Oligopoly: Few dominant sellers, interdependent pricing, barriers to entry (e.g., Indian telecom — Jio, Airtel, Vi). Monopsony: Single buyer (e.g., government as sole buyer of defence equipment). Duopoly: Two sellers (subset of oligopoly).',
    },
    {
      section: 'Opportunity Cost & Production Possibility Curve',
      content:
        'Opportunity Cost is the value of the next best alternative foregone. It is the real cost of choosing one option over another. Production Possibility Curve (PPC) / Production Possibility Frontier (PPF) shows the maximum possible combinations of two goods an economy can produce with given resources and technology. Points on the curve represent efficient use; points inside represent underutilization; points outside are unattainable with current resources. The PPC is concave to the origin due to increasing opportunity cost. Economic growth shifts the PPC outward. UPSC often tests PPC concepts in the context of guns vs butter (defence vs development).',
    },
    {
      section: 'Micro vs Macroeconomics',
      content:
        'Microeconomics studies individual economic units — consumer behaviour, firm decisions, market equilibrium, factor pricing. Macroeconomics studies the economy as a whole — GDP, inflation, unemployment, fiscal/monetary policy. J.M. Keynes is called the father of macroeconomics. For Indian economy questions in exams, macroeconomic concepts (GDP, inflation, fiscal deficit, monetary policy) are tested more frequently. Ragnar Frisch coined the terms "microeconomics" and "macroeconomics." The paradox of thrift (individual saving is good but if everyone saves more, aggregate demand falls) illustrates why macro behaviour differs from micro behaviour.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Basic economic concepts form the foundation for all economy questions. UPSC Prelims tests concepts like PPC, opportunity cost, and market structures. SSC and banking exams frequently ask definitions, types of economies, and demand-supply fundamentals. Understanding these concepts is essential for answering applied questions on Indian economy policy.',
}
