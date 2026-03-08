import type { SubjectRevision } from '@/types/subject-notes'

export const basicConceptsRevision: SubjectRevision = {
  topic: 'basic-concepts',
  bullets: [
    'Adam Smith — Wealth definition ("The Wealth of Nations", 1776). Alfred Marshall — Welfare definition. Lionel Robbins — Scarcity definition. Paul Samuelson — Growth definition.',
    'Three types of economies: Capitalist (USA — private ownership, market mechanism), Socialist (Cuba — state ownership, central planning), Mixed (India — coexistence of public and private sectors).',
    'India adopted the mixed economy model after independence through Industrial Policy Resolution 1948 and Planning Commission (1950).',
    'Law of Demand: Price increases → quantity demanded decreases (inverse). Exceptions: Giffen goods (inferior goods with strong income effect), Veblen goods (luxury/status goods).',
    'Law of Supply: Price increases → quantity supplied increases (direct relationship).',
    'Perfect Competition: Many buyers/sellers, homogeneous product. Monopoly: Single seller. Monopolistic Competition: Many sellers, differentiated products. Oligopoly: Few dominant sellers.',
    'Opportunity Cost = value of the next best alternative foregone.',
    'PPC (Production Possibility Curve) is concave to origin due to increasing opportunity cost. Points inside = underutilisation. Points outside = unattainable with current resources.',
    'Microeconomics studies individual units (consumer, firm). Macroeconomics studies the whole economy (GDP, inflation). J.M. Keynes = father of macroeconomics.',
    'Elasticity of Demand = %change in quantity demanded / %change in price. Salt = perfectly inelastic. Luxury goods = relatively elastic.',
  ],
  comparisons: [
    {
      title: 'Microeconomics vs Macroeconomics',
      headers: ['Aspect', 'Microeconomics', 'Macroeconomics'],
      rows: [
        ['Scope', 'Individual economic units', 'Economy as a whole'],
        ['Focus', 'Price determination, consumer behaviour', 'GDP, inflation, unemployment'],
        ['Father', 'Alfred Marshall', 'J.M. Keynes'],
        ['Example', 'Why are onion prices rising?', 'Why is India\'s GDP growth slowing?'],
        ['Key tools', 'Demand-supply analysis', 'Fiscal and monetary policy'],
      ],
    },
    {
      title: 'Capitalist vs Socialist vs Mixed Economy',
      headers: ['Feature', 'Capitalist', 'Socialist', 'Mixed'],
      rows: [
        ['Ownership', 'Private', 'State', 'Both'],
        ['Resource allocation', 'Price mechanism', 'Central planning', 'Market + Government'],
        ['Motive', 'Profit', 'Social welfare', 'Both'],
        ['Example', 'USA', 'Cuba', 'India'],
        ['Role of government', 'Minimal', 'Dominant', 'Regulatory + Participatory'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Economics Definitions — SWRS',
      mnemonic: 'Smith (Wealth), Robbins (Scarcity)',
      explanation: 'Adam Smith = Wealth definition (1776). Alfred Marshall = Welfare definition. Lionel Robbins = Scarcity definition. Paul Samuelson = Growth definition. For exams, remember the sequence: W-W-S-G (Wealth → Welfare → Scarcity → Growth).',
    },
    {
      title: 'Market Structures — PMMO',
      mnemonic: 'Perfect, Monopolistic, Monopoly, Oligopoly',
      explanation: 'Number of sellers decreases: Perfect Competition (many) → Monopolistic Competition (many, differentiated) → Oligopoly (few) → Monopoly (one). Remember: "Products Move from Many to One" — PMMO.',
    },
  ],
}
