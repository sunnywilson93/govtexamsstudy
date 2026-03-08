import type { SubjectConcept } from '@/types/subject-notes'

export const internationalOrganizationsConcept: SubjectConcept = {
  topic: 'international-organizations',
  title: 'International Economic Organizations',
  description:
    'IMF, World Bank, WTO, ADB, AIIB, NDB, and other multilateral economic institutions — their structure, functions, and India\'s role.',
  category: 'External Sector',
  keyDates: [
    { year: '1944', event: 'Bretton Woods Conference — IMF and World Bank (IBRD) established' },
    { year: '1945', event: 'IMF and World Bank began operations; India is a founding member of both' },
    { year: '1995', event: 'WTO established replacing GATT — India is a founding member' },
    { year: '2014', event: 'New Development Bank (NDB) established by BRICS nations; HQ in Shanghai' },
    { year: '2016', event: 'Asian Infrastructure Investment Bank (AIIB) became operational; HQ in Beijing; India is second-largest shareholder' },
    { year: '1966', event: 'Asian Development Bank (ADB) established; HQ in Manila; India is a founding member' },
    { year: '2023', event: 'India hosted G20 Summit as President — "One Earth, One Family, One Future"' },
  ],
  notes: [
    {
      section: 'International Monetary Fund (IMF)',
      content:
        'Established in 1945, headquartered in Washington DC. 190 member countries. Head: Managing Director (current: Kristalina Georgieva). India\'s quota: ~2.75% (8th largest). Quota determines voting power, borrowing access, and SDR allocation. Functions: Surveillance of global economy, financial assistance to countries with BoP problems, technical assistance, SDR allocation. Lending facilities: Stand-By Arrangement (SBA), Extended Fund Facility (EFF), Rapid Financing Instrument (RFI). Conditionality: IMF loans come with structural adjustment conditions (fiscal discipline, market reforms). India borrowed from IMF in 1991 during the BoP crisis. SDR (Special Drawing Right): International reserve asset based on a basket of 5 currencies (USD, EUR, CNY, JPY, GBP). SDR is not a currency but a claim on freely usable currencies.',
    },
    {
      section: 'World Bank Group',
      content:
        'Headquartered in Washington DC. 5 institutions: (1) IBRD (International Bank for Reconstruction and Development): Loans to middle-income and creditworthy low-income countries. (2) IDA (International Development Association): Concessional loans and grants to poorest countries. India graduated from IDA in 2014. (3) IFC (International Finance Corporation): Loans and equity to private sector in developing countries. (4) MIGA (Multilateral Investment Guarantee Agency): Political risk insurance for investors. (5) ICSID (International Centre for Settlement of Investment Disputes): Arbitration of investment disputes. Head: President (current: Ajay Banga — first Indian-origin president). India is both a borrower and a shareholder. World Bank provides loans for infrastructure, education, health, and climate projects in India.',
    },
    {
      section: 'Regional & New Multilateral Banks',
      content:
        'Asian Development Bank (ADB): Established 1966, HQ Manila. Promotes economic development in Asia-Pacific. India is a founding member and 4th largest shareholder. Provides loans, grants, and technical assistance. Asian Infrastructure Investment Bank (AIIB): Established 2016, HQ Beijing. 109 members. Focuses on infrastructure. India is the second-largest shareholder (~7.5% vote share) after China (~26.6%). New Development Bank (NDB): Established by BRICS (2014), HQ Shanghai. India\'s first president: K.V. Kamath. Focus: Infrastructure and sustainable development in emerging economies. Now expanded beyond BRICS — Bangladesh, UAE, Egypt, Uruguay as new members. Bilateral agencies: JICA (Japan), KfW (Germany), AFD (France) — provide concessional loans for Indian projects (Delhi Metro, bullet train, smart cities).',
    },
    {
      section: 'G20 & India',
      content:
        'G20 is a forum of 19 countries + EU + African Union, representing ~85% of global GDP and 75% of international trade. India held the G20 Presidency in 2023. Theme: "One Earth, One Family, One Future" (Vasudhaiva Kutumbakam). Key outcomes of India\'s presidency: New Delhi Leaders\' Declaration, African Union admitted as permanent member, Global Biofuels Alliance launched, Multilateral Development Bank reforms supported. G20 summit in New Delhi (September 9-10, 2023) also endorsed India\'s Digital Public Infrastructure (DPI) model (Aadhaar, UPI, DigiLocker) for global adoption. India-Middle East-Europe Economic Corridor (IMEC) announced at the summit — multimodal connectivity linking India to Europe via Middle East.',
    },
    {
      section: 'UNCTAD, OECD & Credit Rating Agencies',
      content:
        'UNCTAD (UN Conference on Trade and Development): HQ Geneva. Promotes developing countries\' interests in international trade. Publishes Trade and Development Report, World Investment Report. India is a member. OECD (Organisation for Economic Cooperation and Development): "Rich countries\' club" — 38 members. India is not a member but is a "Key Partner." OECD publishes Economic Surveys, PISA rankings, and leads the Base Erosion and Profit Shifting (BEPS) project for international tax reform. Pillar 1 and Pillar 2 of BEPS framework: Global minimum tax of 15% on MNEs. Credit Rating Agencies: S&P, Moody\'s, Fitch rate India\'s sovereign debt. India\'s rating: BBB- (S&P/Fitch) / Baa3 (Moody\'s) — lowest investment grade. India has argued for reform of rating methodologies which are biased against developing countries.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'International organisations are tested across all exams. UPSC asks about IMF quota reforms, World Bank group institutions, and G20 outcomes. Banking exams test headquarters, heads, and SDR composition. SSC exams ask factual questions on founding years, headquarters, and India\'s membership status. India\'s G20 presidency has generated many current affairs questions.',
}
