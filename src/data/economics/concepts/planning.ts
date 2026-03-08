import type { SubjectConcept } from '@/types/subject-notes'

export const planningConcept: SubjectConcept = {
  topic: 'planning',
  title: 'Economic Planning in India',
  description:
    'Five Year Plans, Planning Commission, NITI Aayog, Mahalanobis model, and the evolution of India\'s development strategy.',
  category: 'Planning & Development',
  keyDates: [
    { year: '1950', event: 'Planning Commission established (March 15) with PM as chairman — extra-constitutional body' },
    { year: '1951', event: 'First Five Year Plan (1951-56) launched — focus on agriculture, based on Harrod-Domar model' },
    { year: '1956', event: 'Second Five Year Plan — Mahalanobis model, focus on heavy industries and public sector' },
    { year: '1969', event: 'Gadgil Formula for allocation of plan funds to states' },
    { year: '1991', event: 'LPG reforms shifted planning emphasis from state-led to market-oriented growth' },
    { year: '2015', event: 'NITI Aayog replaced Planning Commission (January 1) — think tank, not directive planner' },
    { year: '2017', event: 'Twelfth Five Year Plan (2012-17) was the last — replaced by 15-year vision, 7-year strategy, 3-year action plan' },
  ],
  notes: [
    {
      section: 'Planning Commission & Its Role',
      content:
        'The Planning Commission was established by a Cabinet Resolution in 1950 (not by an Act of Parliament — hence extra-constitutional). PM was its ex-officio chairman. Functions: Assess resources, formulate Five Year Plans, allocate Plan expenditure, appraise projects. The Commission had significant power — it controlled Plan transfers to states, making them dependent on central allocation (often called a "super cabinet"). Critics argued it undermined federalism and was top-down. Gadgil Formula (1969, modified later): Determined distribution of central Plan assistance among states based on population (60%), per capita income (25%), tax effort (7.5%), and special problems (7.5%). The formula was modified over time but remained the basis until 2015.',
    },
    {
      section: 'Five Year Plans — Key Highlights',
      content:
        '1st FYP (1951-56): Agriculture focus, community development programme, Bhakra Nangal dam. Growth: 3.6%. 2nd FYP (1956-61): Mahalanobis Model — heavy industrialisation, public sector expansion (steel plants at Bhilai, Durgapur, Rourkela). 3rd FYP (1961-66): Self-reliance, but disrupted by wars (1962, 1965) and drought. Three Annual Plans (1966-69): Plan holiday due to economic crisis. 4th FYP (1969-74): Social justice, Gadgil Formula. Green Revolution gains. 5th FYP (1974-79): Poverty eradication — "Garibi Hatao." Minimum Needs Programme. 6th FYP (1980-85): Focus on infrastructure. 7th FYP (1985-90): Technology and modernisation. Growth: 6.01% (best until then). Two Annual Plans (1990-92). 8th FYP (1992-97): Post-LPG reforms, market orientation. 9th FYP (1997-02): Social justice and equity. 10th FYP (2002-07): Targeted 8% growth. 11th FYP (2007-12): Inclusive growth. 12th FYP (2012-17): Faster, sustainable, more inclusive growth — last FYP.',
    },
    {
      section: 'NITI Aayog — Structure & Role',
      content:
        'National Institution for Transforming India (NITI Aayog) replaced Planning Commission on January 1, 2015. It is a think tank, not a directive planning body. Structure: Chairperson (PM), Vice-Chairperson (appointed by PM — current: Suman Bery), CEO (Secretary rank), full-time members, part-time members, ex-officio members (FM, Defence Minister, others), special invitees. Governing Council: All CMs and Lt Governors. Regional Councils for specific issues. Key role: Cooperative and competitive federalism, evidence-based policy, monitoring SDGs, ranking states (School Education Quality Index, Health Index, SDG India Index). NITI Aayog has no power to allocate funds — this shifted to Finance Commission. It provides a platform for Centre-State coordination but lacks the resource allocation power that made the Planning Commission influential.',
    },
    {
      section: 'NITI Aayog — Key Initiatives',
      content:
        'Three-Year Action Agenda (2017-20), Seven-Year Strategy (2017-24), Fifteen-Year Vision (2017-32) replaced the Five Year Plan framework. Aspirational Districts Programme: 112 backward districts across 28 states, ranked on health, education, agriculture, financial inclusion, basic infrastructure. Atal Innovation Mission (AIM): Promotes innovation and entrepreneurship. Atal Tinkering Labs in schools, Atal Incubation Centres. Sustainable Development Goals (SDG) India Index: Ranks states on SDG performance. Composite Water Management Index (CWMI): Ranks states on water management. Women Entrepreneurship Platform (WEP). India Innovation Index. National Data & Analytics Platform (NDAP). NITI Aayog\'s role in privatisation roadmap: Strategic disinvestment recommendations (Air India, BPCL).',
    },
    {
      section: 'Growth Models & Development Strategy',
      content:
        'Harrod-Domar Model: Growth depends on savings rate and capital-output ratio. Higher savings → higher investment → higher growth. First FYP was based on this. Mahalanobis Model (P.C. Mahalanobis): Two-sector model — emphasis on heavy industry (capital goods) sector to create long-run growth. Second FYP was based on this — led to public sector steel plants, machinery manufacturing. Import Substitution Industrialisation (ISI): India followed ISI strategy (1950s-1980s) — produce domestically what was imported, high tariffs on imports, licensing system. Led to "licence raj." Export-led growth: Post-1991, India shifted towards export orientation while retaining some ISI elements. Lewis Model of Structural Transformation: Development involves moving surplus labour from agriculture (low productivity) to industry (high productivity) — relevant to India\'s ongoing structural transformation where agriculture employs ~42% but contributes only ~15% of GDP.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Economic planning is a core UPSC topic — Five Year Plans, NITI Aayog structure, and growth models are regularly tested. SSC exams ask factual questions on which FYP focused on what, who chaired the Planning Commission, and NITI Aayog initiatives. Banking exams test NITI Aayog rankings and Aspirational Districts Programme.',
}
