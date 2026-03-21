import type { SubjectConcept } from '@/types/subject-notes'

export const digitalEconomyConcept: SubjectConcept = {
  topic: 'digital-economy',
  title: 'Digital Economy & Fintech',
  description:
    'India processes 46% of the world\'s real-time digital payments. Exams test UPI transaction volumes, CBDC mechanics, Aadhaar jurisprudence, DPDPA 2023 provisions, and India Stack layers. Banking exams heavily test payment modes (NEFT vs RTGS vs IMPS); UPSC tests policy frameworks and data protection.',
  category: 'Social & Contemporary',
  keyDates: [
    { year: '2016', event: 'UPI (Unified Payments Interface) launched by NPCI — revolutionised digital payments' },
    { year: '2015', event: 'Digital India programme launched (July 1) — transform India into a digitally empowered society' },
    { year: '2022', event: 'RBI launched e-Rupee (CBDC) pilot — Digital Rupee for retail and wholesale' },
    { year: '2022', event: 'Cryptocurrency taxed at 30% flat rate + 1% TDS on transfers (Union Budget 2022)' },
    { year: '2009', event: 'Aadhaar project launched under UIDAI — world\'s largest biometric ID system' },
    { year: '2023', event: 'UPI processed 10+ billion transactions in a single month for the first time' },
    { year: '2024', event: 'UPI crossed 13+ billion transactions/month; India accounts for 46% of global real-time payments' },
  ],
  notes: [
    {
      section: 'Digital Public Infrastructure (DPI) — India Stack',
      content:
        'India built a world-leading DPI stack in three layers. Layer 1 (Identity): Aadhaar provides a 12-digit unique ID with biometric and demographic data. 1.38 billion enrolments. Run by UIDAI. Aadhaar proves identity, not citizenship. Layer 2 (Payments): UPI, AEPS (Aadhaar-Enabled Payment System), and RuPay cards. Layer 3 (Data): DigiLocker (document storage) and Account Aggregator (consent-based financial data sharing). JAM Trinity (Jan Dhan + Aadhaar + Mobile) powers DBT. Over Rs 34 lakh crore transferred via DBT. Government claims Rs 3.48 lakh crore in savings by eliminating ghost beneficiaries. India\'s DPI model was endorsed at G20 (2023) for global adoption. MOSIP (Modular Open Source Identity Platform) lets other countries adopt Aadhaar-like systems. Exam tip: Know the three India Stack layers and JAM Trinity.',
    },
    {
      section: 'UPI & Digital Payments',
      content:
        'UPI enables real-time, 24/7, zero-cost interbank transfers via mobile. NPCI developed it. Apps: PhonePe (~48% share), Google Pay (~36%), Paytm, BHIM. UPI 2.0 added overdraft facility and invoice-in-payments. UPI Lite handles small offline transactions. International linkages: UPI-PayNow (Singapore), UPI-IPP (UAE), India-France, India-Sri Lanka, Nepal, Bhutan, Mauritius. Other payment modes: NEFT (batch-based, 24/7 since December 2019). RTGS (large values above Rs 2 lakh, 24/7 since December 2020). IMPS (24/7 real-time). NACH (recurring bulk: EMIs, SIPs, salary, pensions). CTS (image-based cheque clearing). Total digital transactions in India: 16,400+ crore (2023-24). India accounts for 46% of global real-time digital payments. Exam essential: UPI monthly volume (13+ billion), NEFT vs RTGS distinction, and international linkages.',
    },
    {
      section: 'CBDC — Digital Rupee',
      content:
        'The e-Rupee is RBI-issued digital fiat currency. Pilot launched November 2022. Two types: Wholesale (e-W, for interbank settlements and G-Sec transactions) and Retail (e-R, for public use via bank digital wallets). The e-Rupee is legal tender and an RBI liability (unlike cryptocurrencies). Key features: No interest paid (unlike bank deposits). Small-transaction anonymity. Programmability (government can set expiry on stimulus payments). Benefits: Reduced currency management costs (printing, storing, transporting). Enhanced financial inclusion. Efficient cross-border payments. Concerns: Bank disintermediation (people shifting from deposits to CBDC), privacy risks, and cybersecurity. India\'s CBDC uses a distributed ledger but is not blockchain-based. Exam tip: Know the e-W vs e-R distinction and that CBDC is an RBI liability.',
    },
    {
      section: 'Cryptocurrency & Regulation',
      content:
        'Cryptocurrency (Bitcoin, Ethereum) is decentralised digital currency on blockchain. Not legal tender in India. RBI has consistently warned against risks. RBI\'s 2018 banking ban on crypto was struck down by the Supreme Court (2020). Budget 2022 imposed 30% flat tax on VDA gains with 1% TDS on transfers. No loss deduction allowed. This is taxation, not regulation or legalisation. A comprehensive Cryptocurrency Bill has been proposed but not introduced. India supports global regulation under the G20/OECD/IMF framework rather than an outright ban. Blockchain (the underlying technology) has legitimate applications: supply chain tracking, land records, and educational certificates. NITI Aayog published a blockchain strategy document. Exam tip: Know the 30% tax rate, 1% TDS, and that crypto is taxed but not regulated.',
    },
    {
      section: 'Digital India & E-Governance',
      content:
        'Digital India (2015) has three vision areas: digital infrastructure as a utility, governance on demand, and digital empowerment. Key components: BharatNet (optical fibre to gram panchayats). CSCs (5 lakh centres for rural e-services). UMANG app (1,600+ government services). DigiLocker. e-Courts. GeM (Government e-Marketplace). India\'s IT/BPM sector generates ~$254 billion (2023-24) and employs 5.4 million. India leads global IT services exports. ONDC (Open Network for Digital Commerce): Decentralised e-commerce unbundling buyer, seller, and logistics layers. Aims to break the Amazon/Flipkart duopoly. Over 6 lakh merchants onboarded (2024). DPDPA 2023: Consent-based data processing. Data Protection Board adjudicates complaints. Penalties up to Rs 250 crore. Cross-border transfer allowed except to blacklisted countries (negative list). Broad government exemptions for security and sovereignty. Exam essential: ONDC purpose and DPDPA 2023 penalty cap.',
    },
    {
      section: 'Telecom Revolution & BharatNet',
      content:
        'India went from 5 million phone connections (1991) to 1.17 billion mobile subscribers (2024), the world\'s 2nd largest telecom market. Jio\'s entry (September 2016) with free 4G crashed data prices from Rs 200/GB to Rs 10/GB. India\'s data consumption: 25+ GB per user per month (among the highest globally). Market structure: Jio (43%, 482M subscribers), Airtel (33%, 385M), Vodafone Idea (18%, 213M). BSNL/MTNL revival: Rs 1.64 lakh crore package with 4G rollout. 5G launched October 2022. Near-nationwide coverage by early 2025. Spectrum auction (2022) raised Rs 1.5 lakh crore. BharatNet: Optical fibre to all 2.5 lakh gram panchayats. Investment: Rs 61,109 crore (revised, including PPP). About 2.14 lakh gram panchayats connected (2024). Challenges: last-mile connectivity, equipment damage, and low utilisation. PM-WANI enables public Wi-Fi through PDOs without licence or registration, leveraging BharatNet backbone. Exam tip: Know Jio\'s market share, 5G launch date, and BharatNet coverage.',
    },
    {
      section: 'E-Governance & Government Platforms',
      content:
        'India built robust e-governance platforms. UMANG: 1,600+ services, 8 crore+ downloads. DigiLocker: 25+ crore users, verified documents from issuing authorities. GeM (2016): Online government procurement. GMV Rs 4+ lakh crore (cumulative). 75+ lakh sellers. Replaced DGS&D. e-Courts: 24+ crore cases tracked on National Judicial Data Grid. Virtual hearings expanded during COVID. CERSAI: Central registry preventing multiple loans on same collateral. MCA-21: Company registration in 2 days via SPICe+. TReDS: Trade receivables discounting for MSMEs through RXIL, M1xchange, and Invoicemart. NSWS: Single-window clearance for business approvals. GSTN: IT backbone processing 1.4+ crore monthly returns. FASTag: Mandatory RFID toll collection. Reduced wait from 8-10 minutes to 47 seconds. Monthly collection: Rs 5,000+ crore. Exam tip: Know GeM GMV and FASTag wait-time improvement.',
    },
    {
      section: 'Fintech Ecosystem & Digital Lending',
      content:
        'India\'s fintech sector is the 3rd largest globally by deal volume. 3,000+ firms. Market estimated at $150 billion by 2025. Payments: PhonePe, Google Pay, Paytm, CRED, Razorpay, BharatPe. UPI dominates. BNPL faced RBI tightening. Lending: Digital platforms (Jupiter, KreditBee, Slice, Navi) originate through bank/NBFC partnerships. RBI Digital Lending Guidelines (September 2022) require all loans to be disbursed directly into borrower accounts. LSPs must disclose the regulated entity. APR must be disclosed. FLDG capped at 5%. WealthTech: Zerodha (70 lakh+ active clients). Demat accounts grew from 4 crore (2019) to 16+ crore (2024). SIP flows: Rs 21,000+ crore/month. InsurTech: Policybazaar, Digit Insurance, Acko. Neo-banking: Fi Money, Jupiter, Niyo operate on partner bank infrastructure. RBI Regulatory Sandbox (2019) lets fintechs test innovations in a controlled environment. India Stack enables fintech: Aadhaar (eKYC in minutes), UPI (instant payments), AA (consent-based data), DigiLocker (verification). Together they dramatically cut financial services delivery costs. Exam essential: Digital lending rules (direct disbursement, FLDG cap) and demat account growth.',
    },
    {
      section: 'Cybersecurity & Digital Risk',
      content:
        'CERT-In reported 13.91 lakh cybersecurity incidents in 2022. Major threats: UPI/card fraud (Rs 14,413 crore lost in 2023-24). Phishing, SIM swapping, QR code scams. RBI established DPIP for real-time fraud detection. Data breaches are frequent. Ransomware hit AIIMS Delhi (November 2022), paralysing systems for 15 days. CERT-In directions (April 2022): Mandatory 6-hour incident reporting. 180-day log retention. KYC for VPN users. IT Act 2000 (amended 2008): Section 43 (computer damage), Section 66 (computer offences). Section 66A (online speech restriction) struck down in Shreya Singhal (2015). Section 69A (website blocking, used for 224 Chinese app bans including TikTok, 2020). DPDPA 2023: Consent-based processing. Purpose limitation, data minimisation, storage limitation. Data Protection Board. Penalties up to Rs 250 crore. Negative list approach for cross-border transfers (less restrictive than GDPR). Broad government exemptions for security and sovereignty drew criticism. Exam tip: Know CERT-In reporting timeline (6 hours) and DPDPA penalty cap.',
    },
    {
      section: 'Artificial Intelligence & Emerging Technologies',
      content:
        'India\'s AI market: $17 billion (2024), projected $50+ billion by 2030. NITI Aayog\'s National Strategy (2018) prioritised healthcare, agriculture, education, smart cities, and transport. India aims to be the "AI garage of the world." IndiaAI Mission (Budget 2024-25, Rs 10,372 crore): 10,000 GPU compute infrastructure (PPP). IndiaAI Innovation Centre for sovereign foundation models in Indian languages. Datasets platform for anonymised non-personal data. Sector-specific applications. Skilling 1 lakh people. India has the 2nd largest AI talent pool (after USA). Key applications: Agriculture (crop yield prediction, pest detection). Healthcare (TB screening by Qure.ai, drug discovery). Language (Bhashini for real-time translation across 22 scheduled languages). Governance (Project Insight for tax evasion, satellite-based crop cutting for PMFBY). Financial services (AI underwriting, fraud detection). Semiconductor policy: India Semiconductor Mission (Rs 76,000 crore). Tata + Powerchip fab in Dholera. Micron ATMP in Sanand. Goal: reduce 100% chip import dependence. Exam essential: IndiaAI Mission allocation and Bhashini\'s language function.',
    },
    {
      section: 'E-Commerce & Platform Economy',
      content:
        'India\'s e-commerce market: ~$83 billion (2024), projected $200 billion by 2027. Fastest-growing globally. Major platforms: Amazon India, Flipkart (Walmart), Meesho, JioMart. Quick commerce (10-30 min delivery): Blinkit (Zomato), Instamart (Swiggy), Zepto. FDI policy: 100% allowed in marketplace model. Not allowed in inventory model. Amazon and Flipkart face complaints about preferential sellers circumventing restrictions. Consumer Protection E-Commerce Rules 2020: Country of origin display, grievance officers, no search manipulation. ONDC (2022): Government-backed open protocol democratising e-commerce. 6 lakh+ merchants. Covers food, grocery, mobility, hotels. Gig economy: 77 lakh workers (NITI Aayog), projected 2.35 crore by 2029-30. Platforms: Zomato, Swiggy, Uber, Ola, Urban Company. Code on Social Security 2020 recognised gig/platform workers but rules are not yet notified. Key debate: Are gig workers employees (entitled to benefits) or independent contractors? They currently lack minimum wage, health insurance, PF, and gratuity. Exam tip: Know FDI restrictions (marketplace vs inventory) and ONDC purpose.',
    },
    {
      section: 'Digital Financial Inclusion — Jan Dhan & Beyond',
      content:
        'PMJDY (August 2014): 52.4 crore accounts (December 2024). 67% rural/semi-urban. 56% women holders. Deposits: Rs 2.31 lakh crore. 35+ crore RuPay cards with Rs 2 lakh accident insurance. Overdraft up to Rs 10,000. Zero-balance accounts dropped from 76% to 16%. JAM trinity enabled DBT to 325+ central schemes. Rs 34+ lakh crore transferred. Rs 3.48 lakh crore saved by eliminating ghost beneficiaries. PMJDY is the prerequisite for digital economy success: without bank accounts, UPI/AEPS/DBT cannot function. RBI\'s Financial Inclusion Index: 64.2 (March 2024, from 43.4 in 2017). Access is high; usage is improving but remains the weak link. The digital divide persists: rural internet 44% vs urban 73%. Feature phones (30%+ of subscribers) cannot access UPI. The *99# USSD service for feature phones exists but has negligible usage due to poor user experience. Exam essential: PMJDY account count, zero-balance improvement, and FI-Index score.',
    },
    {
      section: 'RBI\'s Digital Payment Initiatives & Regulation',
      content:
        'RBI regulates all payment systems under the Payment and Settlement Systems Act 2007. 80+ authorised entities. PPIs (wallets): Full-KYC up to Rs 2 lakh, interoperable with UPI since 2022. Minimum-KYC: Rs 10,000 limit. Paytm Payments Bank crisis (2024): RBI restricted new customers for KYC and data storage failures. Payment Aggregators: Must obtain RBI licence, maintain Rs 15 crore net worth (rising to Rs 25 crore). Card-on-file data storage banned. Licensed PAs: Razorpay, CCAvenue, PayU, BillDesk, Cashfree. Tokenisation (October 2022): Merchants cannot store card numbers. Device-specific tokens replace card data. Enhanced security. Payments Vision 2025 targets: 3x digital payments per capita, QR at every merchant, 90%+ government e-payments. Cash paradox: Currency-in-circulation reached Rs 35.5 lakh crore (March 2024, 12.3% of GDP). Despite digital growth, cash grows in absolute terms. Exam tip: Know PPI interoperability rule and the cash-digital paradox.',
    },
    {
      section: 'Digital Divide & Rural Connectivity Challenges',
      content:
        'Despite achievements, a massive digital divide persists. Urban internet: 73%. Rural: 44% (TRAI, 2024). Gender: Male internet users 57%, female 33% (GSMA). Only 31% of Indian women use mobile internet. Age: 63% of users are under 35. Income: Bottom 40% have limited smartphone access. Feature phones still account for 30%+ of connections. Language: 90% of internet content is consumed in vernacular. Bhashini and vernacular content growth address this. Disability: Only 3% of Indian websites meet WCAG accessibility standards. Key barriers: Entry-level smartphones cost Rs 5,000-7,000. Digital literacy differs from knowing how to use a phone. BharatNet fibre reaches gram panchayats but last-mile home connectivity is weak (only 4 crore fixed broadband vs 120 crore mobile). Digital fraud fear deters first-time users. Government responses: BharatNet (rural broadband). PM-WANI (public Wi-Fi). CSCs (5 lakh access points). PMGDISHA (6 crore rural citizens trained). Exam favourite: The gender digital divide (31% female mobile internet) and last-mile problem.',
    },
    {
      section: 'Account Aggregator Framework & Open Banking',
      content:
        'Account Aggregator (AA) is RBI\'s consent-based data sharing framework. AAs are RBI-regulated NBFCs facilitating secure sharing between Financial Information Providers (banks, AMCs, insurers, pension funds) and Financial Information Users (lenders, wealth managers). Customers control what data is shared, with whom, for how long, and can revoke consent anytime. Eight licensed AAs: Finvu, OneMoney, CAMS Finserv, NESL, Yodlee, PhonePe (Anumati), Protean, Perfios. How it works: Customer wants a loan. Gives consent on AA app. AA fetches bank statements, GST returns, and insurance details from FIPs. Shares with lender. Lender makes credit decisions based on actual cash flow, not just CIBIL scores. Over 1.5 crore consent artefacts processed (2024). Estimated to unlock Rs 4 lakh crore in additional MSME credit. AA is part of India\'s DEPA (Data Empowerment and Protection Architecture), the fourth India Stack layer. UK\'s Open Banking, EU\'s PSD2, and Australia\'s Consumer Data Right are similar but cover only banking. India\'s AA is cross-sectoral (banking, insurance, pensions, securities, tax). India is the first country with such a comprehensive framework. Exam tip: AA enables cash-flow-based lending. Know the cross-sectoral advantage over UK/EU.',
    },
    {
      section: 'RuPay & Card Payments Ecosystem',
      content:
        'RuPay (NPCI, 2012) is India\'s indigenous card network competing with Visa and Mastercard. 80+ crore cards issued (bulk through Jan Dhan). Market share: Debit cards: RuPay 60%, Visa 27%, Mastercard 12%. Credit cards: Visa 55%, Mastercard 32%, RuPay 13% (growing after mandatory RuPay credit on UPI from 2023). RuPay advantages: Lower interchange fees (0% MDR on RuPay debit up to Rs 2,000). Domestic processing (data stays in India). UPI integration. International acceptance in 200+ countries through Discover, JCB, and UnionPay partnerships. Card industry: 100+ crore debit cards, 10.4 crore credit cards (December 2024). Credit card spending: Rs 1.7 lakh crore/month. Debit card POS usage declines as UPI replaces swipes. MDR waiver controversy: Government waived MDR on RuPay debit and UPI (2020). Merchants pay nothing. Payment companies struggle with revenue models. NPCI\'s Rs 3,500 crore annual government incentive partially compensates. Debate: Is zero-MDR sustainable? Tokenisation (October 2022): Merchants cannot store card numbers. Device-specific tokens enhanced security. Exam essential: RuPay debit market share (60%) and zero-MDR debate.',
    },
    {
      section: 'Digital Health Infrastructure — ABDM & CoWIN',
      content:
        'ABDM (2021) builds India\'s digital health infrastructure. ABHA (14-digit health ID): 60+ crore created. Links all health records to one profile. HIE-CM enables consent-based health record sharing across hospitals, labs, and insurers. HFR: 3.6+ lakh facilities registered. HPR: 1 lakh+ professionals verified. UHI: Open protocol for teleconsultation, lab ordering, and medicine delivery (similar to UPI for payments). CoWIN (2021): India\'s COVID vaccination platform. 120+ crore beneficiaries registered. 220+ crore doses tracked. 200+ crore certificates generated. Handled 2.5 crore registrations in a single peak day. Open-sourced to 142+ countries. ABDM\'s significance: India\'s healthcare is 70%+ private, unorganised, and paper-based. ABDM creates interoperability, reduces test duplication, enables care continuity, and generates population-level health data. Integration with PM-JAY enables cashless hospitalisation with real-time claims. Exam tip: Know ABHA enrolment count (60+ crore) and CoWIN\'s open-source reach.',
    },
    {
      section: 'EdTech & Digital Education',
      content:
        'India\'s EdTech sector: $7.5 billion (2024), projected $30 billion by 2030. 4,000+ startups. COVID catalysed digital education. Government initiatives: DIKSHA (7+ crore content plays/month, 36 languages, QR-coded textbooks). SWAYAM (5,000+ courses, 4 crore+ enrolments). SWAYAM PRABHA (34 DTH channels). PM eVidya unified digital delivery. National Digital University framework enables fully online degrees. NEAT for AI-based personalised learning. Private EdTech: Byju\'s peaked at $22 billion valuation then entered NCLT (a cautionary tale). PhysicsWallah is profitable. The EdTech shakeout (2022-24) brought funding collapse, valuation crashes, and mass layoffs. Business models shifted from free to paid. The fundamental challenge: content is abundant but learning outcomes stay weak. ASER 2023 showed only 25% of Class 3 students can read at Class 2 level. Technology alone cannot fix foundational literacy. Teacher training, assessment, and curriculum design must accompany digital tools. Exam tip: Know DIKSHA and SWAYAM as government platforms and the Byju\'s NCLT lesson.',
    },
    {
      section: 'Digital Agriculture & AgriTech',
      content:
        'Agriculture employs 42% but contributes only 18% of GDP. Technology can bridge this productivity gap. Agristack proposes a unified farmer database linking Aadhaar, land records, and crop data for targeted subsidies, credit, and advisory. Privacy concerns exist around data commercialisation. eNAM (2016): 1,361 mandis in 23 states. Rs 3+ lakh crore trade value. Enables inter-state trade and price discovery, but physical reforms remain incomplete. PM Kisan: Rs 6,000/year to 11+ crore farmers via DBT. Total disbursement: Rs 3.24 lakh crore. PMFBY: 7.3 crore farmer applications (FY24). Satellite-based crop cutting using AI and remote sensing replaces manipulation-prone manual methods. Soil Health Card: 24+ crore issued. AgriTech startups: DeHaat (advisory + inputs + credit), Ninjacart (farm-to-retailer), AgroStar (inputs), CropIn (satellite monitoring), Stellapps (dairy IoT). Total funding: $3+ billion (2019-24). Key technologies: Drone spraying (regulations relaxed 2022), IoT precision farming, AI pest detection, satellite crop monitoring, blockchain traceability (Coffee Board). Exam essential: eNAM mandi count and Agristack privacy debate.',
    },
    {
      section: 'Smart Cities & Urban Digital Infrastructure',
      content:
        'Smart Cities Mission (2015): Rs 2.05 lakh crore for 100 cities. Each city has an SPV. Digital components: ICCCs (85+ cities) monitor CCTV, traffic, water, waste, and emergencies. Repurposed as COVID war rooms. Smart water: IoT sensors, smart meters, SCADA. Nagpur piloted 24x7 water PPP with smart metering. Smart mobility: ITMS, adaptive signals, e-buses (FAME II funded 7,000+). Surat, Pune, and Bhopal deployed city-wide traffic intelligence. Solid waste: GPS-tracked collection, citizen apps, waste-to-energy (Delhi has 3 plants). Digital governance: Property tax digitalisation, building plan automation. DIGIT platform adopted by 4,500+ urban local bodies. PM Gati Shakti (2021): GIS-based multimodal master planning integrating 16 ministries. 1,500+ data layers. Coordinates roads, railways, ports, airports, and waterways. Exam tip: Know ICCC function and PM Gati Shakti\'s cross-ministry integration.',
    },
    {
      section: 'Drone Policy & Unmanned Aerial Vehicles',
      content:
        'Drone Rules 2021 liberalised policy. Key changes: No security clearance needed. Digital sky platform for registration. Micro drones (sub-250g) de-registered from most rules. Three zones: Green (auto-permission), Yellow (controlled), Red (prohibited near airports, military, borders). PLI for Drones: Rs 120 crore. 200+ manufacturers, 50+ service providers. Applications: Agriculture (Kisan Drone, 15,000+ sold, covers 10 acres/hour vs 1 acre manual). Mapping (SVAMITVA: 6.62 lakh villages being drone-surveyed for property cards; 2 lakh done by 2024). Healthcare (ICMR medicine delivery to remote areas). Disaster management. Infrastructure inspection. Defence (TAPAS, Rustom-2). Drone market: $1.8 billion by 2026, $4.5 billion by 2030. 1 lakh+ pilot jobs expected. Challenge: UTM (Unmanned Traffic Management) for increasing drone density. Exam essential: Drone Rules 2021 zone system and SVAMITVA scheme linkage.',
    },
    {
      section: 'Cloud Computing & Data Centre Growth',
      content:
        'India\'s data centre market: $4.5 billion (2024), growing 25%+ CAGR. Installed capacity: 950+ MW, expected 2,000+ MW by 2028. Major investments: Adani ($5 billion), Reliance (Jamnagar), AWS, Azure (3 regions), Google Cloud (2 regions). Data Centre Policy 2020 granted infrastructure status, enabling long-term financing at lower rates. States offer land, power subsidies, and single-window clearances. Cloud market: $13 billion, growing 25%+. Government Cloud (MeghRaj) hosts 1,500+ applications. RBI mandated payment data storage in India (April 2018), driving AWS, Google, and Microsoft to build Indian regions. DPDPA 2023 uses a negative list (data can go abroad except to blacklisted countries). Critical sectors (banking, health) have sector-specific localisation. Government data must stay in India. NIC operates government data centres. S3WAAS hosts 17,000+ government websites. Exam tip: Know data centre infrastructure status and RBI\'s payment data localisation mandate.',
    },
    {
      section: 'Digital Taxation & Platform Taxation',
      content:
        'India pioneered digital economy taxation. Equalisation Levy 1.0 (2016): 6% on online advertising to non-residents. EL 2.0 (2020): 2% on non-resident e-commerce operators (above Rs 2 crore turnover). Repealed August 2024 as India committed to OECD Pillar 1. Significant Economic Presence (SEP, 2018): Section 9(1)(i) amended to deem non-residents with Rs 2 crore+ transactions or 3 lakh+ users as having Indian business connection. Awaits OECD Pillar 1 operationalisation. OECD Two-Pillar Framework: Pillar 1 reallocates 25% of residual profits (above 10% margin) of MNEs with EUR 20 billion+ revenue to market jurisdictions. Delayed beyond 2025. Pillar 2 imposes 15% global minimum tax on MNEs with EUR 750 million+ revenue. India introduced provisions from April 2024. About 1,700 MNEs operating in India are affected. GST on OIDAR services: 18% on Netflix, Spotify, Google Workspace. Crypto taxation: 30% on VDA gains (no loss offset), 1% TDS. Most restrictive globally. Exam essential: Pillar 1 vs Pillar 2 distinction and crypto tax rate (30%).',
    },
    {
      section: 'Digital Identity & Privacy — Aadhaar Jurisprudence',
      content:
        'K.S. Puttaswamy vs Union of India (2017): 9-judge bench unanimously held privacy is a fundamental right under Articles 14, 19, and 21. Established a three-part restriction test: legality, necessity, and proportionality. Puttaswamy (2018, Aadhaar Judgment): 5-judge bench upheld Aadhaar 4:1. Key holdings: Aadhaar for DBT/subsidies/tax filing is valid. Aadhaar for private companies struck down (Section 57). No mandatory Aadhaar for bank accounts or SIMs. Data retention limited to 5 years after last authentication. Metadata accessible only by District Judge order. Money Bill route upheld by majority. Justice Chandrachud dissented (called it constitutional fraud, warned of surveillance architecture). Impact: Private companies cannot mandate Aadhaar-eKYC. Telecom KYC reverted to physical/OTP. DPDPA 2023 now provides the statutory data processing framework. Aadhaar remains operationally critical (100 billion+ authentications) but with judicial privacy guardrails. Exam must-know: Privacy as fundamental right (2017) and Section 57 struck down (2018).',
    },
    {
      section: 'Bharat Bill Payment System & Recurring Payments',
      content:
        'BBPS (NPCI-operated): Pan-India bill payment covering 20,000+ billers. Electricity, water, gas, telecom, DTH, insurance, municipal taxes, education, FASTag, credit cards, loans, housing maintenance. Over 30 crore transactions monthly (2024). Value: Rs 1 lakh crore+ annually. Any bill can be paid from any bank/app through BBPS interoperability. Cross-border BBPS announced for NRIs. NACH: Bulk recurring payments (EMIs, SIPs, insurance, salary, dividends). 1,200+ crore mandates registered. NACH is the backbone of India\'s subscription economy. UPI Autopay (2020) enables recurring e-mandates via QR/UPI ID. Limit: Rs 1 lakh per transaction. RBI mandates additional authentication for recurring payments above Rs 15,000. Exam tip: Know BBPS transaction volume and NACH\'s role in SIP/EMI processing.',
    },
    {
      section: 'Cross-Border Digital Payments & International Linkages',
      content:
        'India is internationalising its DPI as a diplomatic and economic tool. UPI International: UPI-PayNow (Singapore, February 2023). UPI-IPP (UAE). UPI at Eiffel Tower and select French merchants (2023). Acceptance in Sri Lanka, Nepal, Bhutan, and Mauritius. Target: 20+ countries by 2026. RuPay International: Accepted in 200+ countries via Discover, JCB, UnionPay, and DinaCard partnerships. NIPL (NPCI International Payments Limited, 2020) deploys UPI, RuPay, and BBPS internationally. UPI challenges SWIFT and traditional remittance corridors (Western Union, MoneyGram) for retail cross-border payments with lower cost and faster settlement. India\'s G20 presidency (2023) featured DPI as a development model for the Global South. India offered DPI frameworks (MOSIP, DIGIT, UPI, CoWIN) to 50+ countries. Rupee internationalisation: RBI allowed rupee trade settlement (2022) through SRVAs opened by 22 countries. Russia, Malaysia, Sri Lanka, and UAE initiated rupee trade. UPI/RTGS facilitate cross-border rupee settlements. Exam essential: UPI-PayNow linkage (Singapore) and NIPL\'s international deployment role.',
    },
    {
      section: 'GovTech & Digital Public Administration',
      content:
        'India\'s digital governance extends to backend administration. e-Office: Digital file management in 80+ ministries and 36 states. Reduced processing from 15 days to 3 days. NIC: 200+ data centres, 7 lakh km network, hosts NIC Cloud, video conferencing, and 10,000+ government websites. e-Procurement: CPPP for tenders above Rs 5 lakh. GeM for goods/services. CPGRAMS: 25+ lakh grievances resolved annually (15-20 day average). MyGov: 3.5 crore+ registered users for policy consultations and citizen engagement. NDAP: Open platform standardising access to data from 46+ ministries for evidence-based policy. iGOT Karmayogi: 46 lakh+ government employees on AI-based training platform under Mission Karmayogi. India\'s GovTech stack integrates identity, payments, data sharing, and governance platforms into one of the most comprehensive ecosystems globally. Exam tip: Know e-Office processing time improvement and GeM procurement platform.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Digital economy is increasingly important in all exams. Banking exams heavily test UPI, NEFT vs RTGS, and digital payment modes. UPSC asks about CBDC, India Stack, and data protection. SSC exams test Digital India components, Aadhaar, and DigiLocker. Crypto taxation and e-Rupee are frequently tested current affairs topics.',
}
