import type { SubjectConcept } from '@/types/subject-notes'

export const exchangeRateConcept: SubjectConcept = {
  topic: 'exchange-rate',
  title: 'Exchange Rate & Forex Reserves',
  description:
    'Exchange rate regimes, rupee convertibility, forex reserves management, FEMA, and capital account liberalisation in India.',
  category: 'External Sector',
  keyDates: [
    { year: '1947-71', event: 'India followed a fixed exchange rate system pegged to British Pound Sterling' },
    { year: '1975', event: 'Rupee pegged to a basket of currencies instead of a single currency' },
    { year: '1991', event: 'Rupee devalued by ~20% in two steps (July 1 and July 3) during the BoP crisis' },
    { year: '1993', event: 'India adopted the market-determined (managed float) exchange rate system' },
    { year: '1994', event: 'Current account convertibility achieved — rupee fully convertible on current account under Article VIII of IMF' },
    { year: '1999', event: 'FEMA (Foreign Exchange Management Act) replaced FERA — shift from conservation to management of forex' },
    { year: '2024', event: 'India\'s forex reserves ~$640 billion — 4th largest in the world' },
  ],
  notes: [
    {
      section: 'Exchange Rate Regimes',
      content:
        'Fixed Exchange Rate: Currency value pegged to another currency or gold (Bretton Woods system, 1944-1971). Floating Exchange Rate: Determined entirely by market forces of demand and supply. Managed Float (Dirty Float): Market-determined but central bank intervenes to prevent excessive volatility. India follows this system since 1993. Advantages of floating rate: Automatic adjustment to BoP, monetary policy independence. Disadvantages: Exchange rate volatility, speculative attacks. Currency Appreciation: Rupee strengthens (say, Rs 82 to Rs 80 per dollar) — imports become cheaper, exports become more expensive. Currency Depreciation: Rupee weakens — exports become cheaper, imports costlier. Devaluation = deliberate government action to reduce value; Depreciation = market-driven.',
    },
    {
      section: 'Forex Reserves',
      content:
        'India\'s foreign exchange reserves (managed by RBI) comprise: Foreign Currency Assets (FCAs) — ~95% of total, includes US dollar, euro, pound, yen. Gold — ~8% by value. SDRs (Special Drawing Rights) — allocated by IMF. Reserve Tranche Position — India\'s quota in IMF. India\'s reserves: ~$640 billion (early 2025) — provide ~10 months of import cover (comfortable level is 3-6 months). Reserves peaked at ~$705 billion in September 2021 before declining due to RBI\'s dollar sales to defend the rupee. Purpose of reserves: Defend the exchange rate, meet external obligations, maintain market confidence, provide a buffer against external shocks. Import Cover = Forex Reserves / Monthly Import Bill.',
    },
    {
      section: 'FEMA & Capital Account Convertibility',
      content:
        'FEMA 1999 (Foreign Exchange Management Act): Replaced FERA 1973. Key shift — from "conservation" (restrictive) to "management" (facilitative) of foreign exchange. FERA violations were criminal offences; FEMA violations are civil offences. Current Account Convertibility: Freedom to convert domestic currency for current account transactions (trade, remittances, travel) — India achieved this in 1994. Capital Account Convertibility: Freedom to convert for capital transactions (investment, borrowing) — India has partial capital account convertibility. Tarapore Committee-I (1997): Recommended full capital account convertibility subject to preconditions (fiscal deficit <3.5%, inflation 3-5%, NPA <5%). Tarapore Committee-II (2006): Revised roadmap for fuller capital account convertibility. India has progressively liberalised — FDI is mostly automatic, FPI limits have been raised, ECB norms eased.',
    },
    {
      section: 'REER & Currency Competitiveness',
      content:
        'Real Effective Exchange Rate (REER): The weighted average of a country\'s currency against a basket of trading partners\' currencies, adjusted for relative inflation. If REER > 100 (base year), the currency is overvalued in real terms (India\'s exports become less competitive). If REER < 100, the currency is undervalued (exports more competitive). RBI publishes REER indices (6-currency and 36-currency baskets). Nominal Effective Exchange Rate (NEER): Not adjusted for inflation — shows nominal changes against trading partners. India\'s REER has generally been above 100 in recent years, suggesting mild overvaluation. Factors affecting exchange rate: Interest rate differentials, inflation differentials, BoP position, capital flows, speculation, RBI intervention, political stability.',
    },
    {
      section: 'Internationalisation of the Rupee',
      content:
        'India has been taking steps towards rupee internationalisation: RBI\'s framework for rupee settlement of international trade (July 2022) — allows invoicing, payment, and settlement in INR for exports/imports. Rupee-denominated bonds (Masala Bonds): Indian entities raise capital abroad in rupees, shifting exchange rate risk to the investor. INR in SDR basket: Not yet included (SDR basket has USD, EUR, CNY, JPY, GBP). Bilateral currency swap arrangements: With Japan ($75 billion), SAARC countries, and others. Vostro accounts: Special Rupee Vostro Accounts (SRVAs) opened by banks from Russia, Sri Lanka, and others for rupee trade settlement. Benefits of internationalisation: Reduced exchange rate risk for Indian businesses, lower dependence on the US dollar, enhanced global standing of the rupee.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Exchange rates and forex reserves are high-priority topics. UPSC tests REER, capital account convertibility, and FEMA provisions. Banking exams ask about forex reserve components, managed float regime, and Masala Bonds. SSC exams test factual questions on FERA vs FEMA, devaluation history, and current forex reserve levels.',
}
