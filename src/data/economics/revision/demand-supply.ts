import type { SubjectRevision } from '@/types/subject-notes'

export const demandSupplyRevision: SubjectRevision = {
  topic: 'demand-supply',
  bullets: [
    'Law of Demand: Price ↑ → Quantity Demanded ↓ (inverse, ceteris paribus). Demand curve slopes downward.',
    'Exceptions to Law of Demand: Giffen goods (inferior, income effect > substitution effect), Veblen goods (prestige/luxury), speculative markets.',
    'Movement along demand curve (price change) vs Shift of demand curve (non-price factors: income, tastes, related goods prices).',
    'Law of Supply: Price ↑ → Quantity Supplied ↑ (direct relationship). Supply curve slopes upward.',
    'Equilibrium: Demand = Supply. Above equilibrium → surplus. Below equilibrium → shortage. Self-correcting via price mechanism.',
    'Price ceiling (maximum price below equilibrium): Creates shortage. Examples: DPCO drug prices, rent control.',
    'Price floor (minimum price above equilibrium): Creates surplus. Example: MSP for agricultural produce — FCI procures surplus.',
    'PED = % change in Qd / % change in P. Elastic (>1), Unit elastic (=1), Inelastic (<1).',
    'Inelastic demand: Necessities (salt, medicines), habit-forming goods (tobacco), goods with few substitutes (petrol). Government taxes these for maximum revenue.',
    'Income Elasticity (YED): Normal goods (>0), Inferior goods (<0), Luxury goods (>1), Necessities (0<YED<1).',
    'Cross Elasticity (XED): Substitutes (>0, e.g. tea-coffee), Complements (<0, e.g. car-petrol), Unrelated (=0).',
    'Engel\'s Law: As income rises, proportion spent on food falls. India\'s food share: 53% (1993-94) → 39% (2022-23).',
    'Consumer surplus = Willingness to pay − Market price. Producer surplus = Market price − Minimum supply price.',
    'Deadweight loss: Welfare loss from taxes, price controls, monopoly — surplus lost, not captured by anyone.',
    'India\'s ECA 1955: Government controls production, supply, distribution of essential commodities. Stock limits on tur, urad (2023).',
    'FCI buffer stock operations: Buy at MSP when prices fall, release through OMSS when prices rise — price stabilisation.',
    'Cobweb theory: Agricultural supply based on last year\'s price creates cyclical oversupply/undersupply (onion, potato, tomato).',
  ],
  comparisons: [
    {
      title: 'Price Ceiling vs Price Floor',
      headers: ['Feature', 'Price Ceiling', 'Price Floor'],
      rows: [
        ['Definition', 'Maximum legal price', 'Minimum legal price'],
        ['Position vs equilibrium', 'Below equilibrium', 'Above equilibrium'],
        ['Market effect', 'Creates shortage', 'Creates surplus'],
        ['Indian example', 'DPCO drug prices, rent control', 'MSP for crops'],
        ['Who benefits', 'Consumers (lower price)', 'Producers (guaranteed minimum)'],
      ],
    },
    {
      title: 'Elastic vs Inelastic Demand',
      headers: ['Feature', 'Elastic (PED > 1)', 'Inelastic (PED < 1)'],
      rows: [
        ['Response to price change', 'Quantity changes more than proportionally', 'Quantity changes less than proportionally'],
        ['Substitutes', 'Many available', 'Few or none'],
        ['Good type', 'Luxury, non-essential', 'Necessity, essential'],
        ['Tax revenue effect', 'Tax reduces revenue significantly', 'Tax generates maximum revenue'],
        ['Indian examples', 'Air travel, branded clothing', 'Petrol, salt, basic medicines'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Demand Shifters — "PIGET"',
      mnemonic: 'Population, Income, Government policy, Expectations, Tastes',
      explanation: 'Five non-price factors that shift the entire demand curve: Population changes, Income changes, Government subsidies/taxes, Expectations of future prices, Tastes/preferences.',
    },
    {
      title: 'Elasticity — "SNITH"',
      mnemonic: 'Substitutes, Necessity, Income proportion, Time horizon, Habit',
      explanation: 'Five determinants of PED: More Substitutes → more elastic; Necessities → inelastic; Higher Income proportion → more elastic; Longer Time → more elastic; Habit-forming → inelastic.',
    },
  ],
}
