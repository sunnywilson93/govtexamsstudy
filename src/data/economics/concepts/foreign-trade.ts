import type { SubjectConcept } from '@/types/subject-notes'

export const foreignTradeConcept: SubjectConcept = {
  topic: 'foreign-trade',
  title: 'Foreign Trade & BoP',
  description:
    'India\'s foreign trade policy, balance of payments, current account deficit, trade agreements, and WTO for competitive exam preparation.',
  category: 'External Sector',
  keyDates: [
    { year: '1991', event: 'Trade liberalisation under LPG reforms — import licensing abolished, tariffs reduced significantly' },
    { year: '1995', event: 'WTO established (January 1) — India is a founding member' },
    { year: '2015', event: 'Foreign Trade Policy 2015-20 announced — "Make in India" integration, MEIS and SEIS schemes' },
    { year: '2023', event: 'Foreign Trade Policy 2023 announced — shift from incentives to remission (RoDTEP), focus on e-commerce exports' },
    { year: '2019', event: 'India withdrew from RCEP (Regional Comprehensive Economic Partnership) negotiations' },
    { year: '2022', event: 'India-UAE CEPA and India-Australia ECTA signed — first major trade agreements in a decade' },
    { year: '2024', event: 'India\'s merchandise exports ~$437 billion; services exports ~$340 billion (2023-24)' },
  ],
  notes: [
    {
      section: 'India\'s Foreign Trade — Overview',
      content:
        'India\'s total trade (merchandise + services) was approximately $1.56 trillion in 2023-24. Key exports: Petroleum products, IT services, gems & jewellery, pharmaceuticals, engineering goods, textiles, chemicals, agricultural products (rice, spices, marine products). Key imports: Crude oil & petroleum (~27% of import bill), gold, electronic goods, coal, machinery, chemicals, vegetable oils. Major trade partners: USA (largest trade partner), China (largest import source), UAE, Saudi Arabia, Germany, Hong Kong, Singapore. Trade deficit in merchandise is structural (~$240 billion in 2023-24) but partially offset by services surplus (~$160 billion). Services exports are led by IT/BPM (~55% of services exports).',
    },
    {
      section: 'Balance of Payments (BoP)',
      content:
        'BoP is a systematic record of all economic transactions between residents of a country and the rest of the world. Current Account: Trade balance (exports − imports of goods), services balance (IT, tourism, transport), primary income (investment income, compensation), secondary income (remittances, grants). Current Account Deficit (CAD) = imports > exports on current account. India\'s CAD was ~1.2% of GDP in 2023-24. Capital Account: FDI, FPI, ECBs, NRI deposits, banking capital, short-term credit. Overall BoP = Current Account + Capital Account. If surplus, forex reserves increase. India\'s forex reserves: ~$640 billion (early 2025). Errors & Omissions: Residual item to balance the BoP.',
    },
    {
      section: 'Trade Policy Instruments',
      content:
        'Tariffs: Import duties (customs duty) — basic customs duty, IGST, social welfare surcharge. Anti-dumping duty: When foreign goods sold below cost to capture market. Countervailing duty: To offset subsidies given by exporting country. Safeguard duty: Temporary protection against import surge. Non-Tariff Barriers: Quotas, licensing requirements, phytosanitary standards, technical barriers. Export Promotion: RoDTEP (Remission of Duties and Taxes on Exported Products) — replaced MEIS. Duty Drawback scheme. Special Economic Zones (SEZs): Tax incentives for export-oriented units. EPC (Export Promotion Councils) for different sectors. ECGC (Export Credit Guarantee Corporation): Insurance cover for export credit risks.',
    },
    {
      section: 'WTO & India',
      content:
        'India is a founding member of the WTO (1995). Key WTO agreements: GATT (goods), GATS (services), TRIPS (intellectual property), TRIMS (investment measures), AoA (Agreement on Agriculture). India has been vocal on: Food security (public stockholding for food security — peace clause at Bali 2013), Special Safeguard Mechanism (SSM) for developing countries, TRIPS and access to affordable medicines (Doha Declaration 2001). Dispute Settlement: WTO\'s Appellate Body was paralysed from 2019 due to US blocking appointments. India has been involved in disputes on solar energy (lost), steel and aluminium tariffs, ICT products. MFN (Most Favoured Nation) principle: Non-discrimination — any concession to one WTO member must extend to all. Exceptions: RTAs/FTAs, GSP (preferential treatment to developing countries).',
    },
    {
      section: 'Free Trade Agreements (FTAs)',
      content:
        'India has signed FTAs/CEPAs with: ASEAN (AIFTA, 2010), Japan (CEPA, 2011), South Korea (CEPA, 2010), Singapore (CECA, 2005), Sri Lanka, Nepal, SAFTA (South Asian FTA). Recent agreements: India-UAE CEPA (2022, comprehensive), India-Australia ECTA (2022, interim). Ongoing negotiations: India-UK FTA, India-EU FTA, India-GCC FTA. India withdrew from RCEP (2019) — concerns about cheap Chinese imports flooding the market. CEPA = Comprehensive Economic Partnership Agreement (broader than FTA — covers services, investment, IPR). Rules of Origin: Prevent trans-shipment — ensure goods actually originate in the partner country. India\'s FTA utilisation rate is relatively low (~25%) compared to ASEAN countries (~50-60%).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Foreign trade is frequently tested in UPSC (BoP concepts, CAD, WTO issues, FTAs) and SSC/banking exams (trade data, major exports/imports, trade partners). Questions on India\'s RCEP withdrawal, recent CEPAs, and WTO disputes are common in current affairs sections.',
}
