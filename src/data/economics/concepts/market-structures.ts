import type { SubjectConcept } from '@/types/subject-notes'

export const marketStructuresConcept: SubjectConcept = {
  topic: 'market-structures',
  title: 'Market Structures',
  description:
    'Perfect competition, monopoly, monopolistic competition, oligopoly, and monopsony \u2014 characteristics, pricing behaviour, efficiency implications, CCI enforcement, and relevance to Indian markets.',
  category: 'Basic Concepts',
  keyDates: [
    { year: '1838', event: 'Augustin Cournot developed the first mathematical model of oligopoly (duopoly model)' },
    { year: '1933', event: 'Edward Chamberlin published Theory of Monopolistic Competition; Joan Robinson published Economics of Imperfect Competition' },
    { year: '1969', event: 'Monopolies and Restrictive Trade Practices (MRTP) Act enacted in India to curb monopolistic practices' },
    { year: '2002', event: 'Competition Act enacted \u2014 replaced MRTP Act; established Competition Commission of India (CCI)' },
    { year: '2009', event: 'CCI became fully functional; started investigating anti-competitive agreements and abuse of dominance' },
    { year: '2018', event: 'CCI imposed Rs 136 crore penalty on Google for search bias \u2014 abuse of dominant position' },
    { year: '2022', event: 'Competition (Amendment) Act 2023 introduced deal value threshold, settlement & commitment framework' },
    { year: '2024', event: 'CCI investigated major tech platforms (Apple, Google, Meta) for anti-competitive practices in digital markets' },
    { year: '1991', event: 'Industrial licensing abolished for most sectors under LPG reforms \u2014 promoting competition over monopoly' },
    { year: '1970', event: 'George Akerlof published "The Market for Lemons" \u2014 demonstrated how information asymmetry causes market failure' },
    { year: '1982', event: 'William Baumol proposed contestable markets theory \u2014 potential competition can discipline monopolists' },
    { year: '2016', event: 'Jio launched with free services \u2014 triggered massive telecom consolidation; 12+ operators reduced to 3' },
    { year: '2019', event: 'Consumer Protection Act 2019 enacted \u2014 CCPA, product liability, e-commerce rules, misleading ad penalties' },
    { year: '1994', event: 'National Telecom Policy opened telecom sector to private competition \u2014 ended DoT/BSNL monopoly' },
    { year: '2023', event: 'Committee on Digital Competition Law (CDCL) recommended ex-ante regulation for Systemically Significant Digital Enterprises' },
  ],
  notes: [
    {
      section: 'Perfect Competition',
      content:
        'Theoretical market with: (1) many buyers and sellers \u2014 none can influence price; (2) homogeneous products; (3) free entry and exit; (4) perfect information; (5) no transport/transaction costs; (6) firms are price takers. Individual firm\'s demand curve is perfectly elastic at the market price. Profit maximisation: MR = MC. Short run: supernormal profits or losses possible. Long run: free entry/exit ensures only normal profits \u2014 supernormal profits attract entrants, increasing supply, pushing price down. Achieves allocative efficiency (P = MC) and productive efficiency (minimum average cost). No real market is perfectly competitive, but agricultural commodity markets (wheat, rice in mandis) approximate it \u2014 many small farmers, homogeneous product, market-determined price. Deviations exist: information asymmetry (farmers lack real-time price data), transport costs, intermediary exploitation. eNAM (2016, 1,361+ mandis by 2024) moves agricultural markets closer to the competitive ideal through better price discovery and transparency.',
    },
    {
      section: 'Monopoly',
      content:
        'Single firm is the sole producer with no close substitutes. High barriers to entry: legal (patents, licences), natural (economies of scale), strategic (predatory pricing). Monopolist is a price maker \u2014 sets price by choosing output. Demand curve = market demand (downward sloping). Maximises at MR = MC, but MR < P (unlike perfect competition) \u2192 higher price, lower output than competitive equilibrium \u2192 deadweight loss. Types: (a) Natural monopoly \u2014 economies of scale so large that one firm supplies the market at lower cost than many. Indian Railways, DISCOMs. (b) Legal \u2014 patents (20-year under Patents Act 1970 per TRIPS), copyrights, licences. (c) Government \u2014 India Post (letters under Indian Post Office Act 1898); pre-1991 many sectors had de facto government monopolies. Price discrimination: first-degree (maximum willingness to pay), second-degree (different quantities \u2014 electricity slabs), third-degree (different consumer groups \u2014 railways 1AC/2AC/3AC/Sleeper/General). Indian Railways practises extensive discrimination with 8+ classes and dynamic pricing on premium trains.',
    },
    {
      section: 'Monopolistic Competition',
      content:
        'Formalised by Chamberlin (1933). Features of both competition and monopoly: (1) many firms; (2) differentiated products (brand, quality, design, location); (3) free entry/exit in the long run; (4) some market power (downward-sloping demand) but close substitutes exist. Indian examples: restaurants (Zomato listed 280,000+ in 2024), retail clothing (Allen Solly, Peter England, local brands), FMCG (HUL, ITC, Dabur, Patanjali), coaching institutes. Short run: supernormal profits possible through successful differentiation. Long run: free entry erodes profits \u2014 new firms shift demand left until only normal profits remain. Non-price competition dominates: advertising (India\'s market: Rs 1.07 lakh crore, 2024), brand building, innovation, service. Selling costs (10\u201315% of FMCG revenue) are a distinctive feature. Excess capacity is a feature \u2014 firms produce below cost-minimising output, the social cost of variety.',
    },
    {
      section: 'Oligopoly',
      content:
        'Few large firms with interdependent decisions \u2014 each must consider rivals\' reactions. Characteristics: (1) few dominant sellers; (2) high entry barriers (capital, technology, brand); (3) homogeneous (steel, cement) or differentiated (auto, telecom) products; (4) strategic interdependence. Models: (a) Cournot \u2014 simultaneous quantity competition, Nash equilibrium between monopoly and competitive output. (b) Bertrand \u2014 price competition driving prices toward MC. (c) Stackelberg \u2014 leader-follower, first-mover advantage. (d) Kinked demand curve \u2014 explains price rigidity: rivals match cuts but ignore raises. Indian examples: telecom (Jio 470M+, Airtel 380M+, Vi 220M+ after consolidation from 12+ operators), cement (top 5 control ~50%), aviation (IndiGo 60%+, Air India-Vistara merged, Akasa, SpiceJet), steel (Tata, JSW, SAIL, JSPL, AMNS). Collusive oligopoly (cartel): firms restrict output and raise prices. CCI penalised cement companies (Rs 6,307 crore, 2012), beer companies, tyre manufacturers. OPEC is the most famous international cartel.',
    },
    {
      section: 'Monopsony & Other Market Forms',
      content:
        'Monopsony: single buyer with power to push purchase prices below competitive levels. Examples: (a) government as sole buyer of domestic defence equipment (HAL, BEL, BDL). (b) FCI as dominant wheat/rice buyer at MSP \u2014 80\u201390% procurement in Punjab/Haryana creates monopsony-like conditions. (c) Large corporations as sole employer in company towns (Tata in Jamshedpur historically). Bilateral monopoly: one seller, one buyer \u2014 outcome depends on bargaining power. Example: Coal India vs its unions. Duopoly: exactly two sellers \u2014 Boeing/Airbus in large commercial aircraft; Visa/Mastercard in payment networks. Oligopsony: few buyers. Remote agricultural markets with 2\u20133 traders buying from many farmers approximate this \u2014 a rationale for MSP and cooperative marketing. Contestable markets (Baumol, 1982): even a monopolist may behave competitively if entry barriers are low and exit is costless. India\'s digital markets show contestability \u2014 established players face potential global tech entrants.',
    },
    {
      section: 'Competition Policy in India',
      content:
        'India\'s competition law evolved from MRTP Act 1969 (preventing concentration, aligned with socialist industrial policy) to Competition Act 2002 (market-oriented, promoting competition, preventing anti-competitive practices). CCI has three mandates: (1) Anti-competitive agreements (Section 3): horizontal (cartels, price-fixing, bid rigging, market sharing) presumed to cause AAEC. Vertical (exclusive supply, refusal to deal, RPM, tying) assessed under rule of reason. (2) Abuse of dominant position (Section 4): dominance assessed by market share, entry barriers, countervailing buyer power \u2014 no threshold specified. Dominance itself is legal; abuse is not. Major cases: Google (Rs 1,337.76 crore Android practices, 2022), Coal India (Rs 1,773 crore, set aside), Intel (Rs 87 crore). (3) Merger regulation (Sections 5-6): combinations above asset/turnover thresholds need CCI approval. 2023 Amendment: Rs 2,000 crore deal value threshold (targets digital acquisitions). CCI approved 900+ combinations. 7 members (Chair + 6), 60+ cases annually.',
    },
    {
      section: 'Market Failure & Government Intervention',
      content:
        'Market failure: free markets fail to allocate resources efficiently. Types: (1) Externalities \u2014 costs/benefits not in market prices. Negative: pollution (NCAP targets 40% PM2.5 reduction). Positive: education, vaccination (subsidised because markets underprovide). Pigouvian tax corrects negatives \u2014 coal cess (Rs 400/tonne). (2) Public goods \u2014 non-excludable, non-rivalrous (street lighting, defence). Free-rider problem means private markets won\'t supply them. (3) Information asymmetry \u2014 adverse selection (pre-contract: "Lemons," Akerlof 1970), moral hazard (post-contract: insured take more risks). IRDAI mandates disclosure; SEBI mandates prospectus requirements. (4) Merit goods \u2014 underconsumed because individuals underestimate benefits (education, healthcare, nutrition). Government subsidises or directly provides: PM Poshan, Ayushman Bharat.',
    },
    {
      section: 'CCI Powers & Anti-Competitive Agreements',
      content:
        'Under Section 3, horizontal agreements are presumed to cause AAEC \u2014 burden shifts to parties. Vertical agreements assessed under rule of reason \u2014 CCI evaluates actual competition effects. Key cases: (1) Cement cartel (2012) \u2014 Rs 6,307 crore on 11 companies (ACC, Ambuja, UltraTech). NCLAT reduced penalty but upheld cartel finding. (2) Google Android (2022) \u2014 Rs 1,337.76 crore for mandatory pre-installation, preventing competing forks, default search. (3) Google Play Store (2022) \u2014 Rs 936 crore for abusing in-app payment dominance. (4) Beer cartel (2021) \u2014 United Breweries, SABMiller, Carlsberg for multi-state price coordination. (5) Auto spare parts (2014) \u2014 14 companies penalised for restricting supply to independent garages. Competition (Amendment) Act 2023: Rs 2,000 crore deal value threshold for digital acquisitions; settlement and commitment framework; merger timeline reduced from 210 to 150 days. Total CCI penalties: Rs 8,000+ crore since inception; 900+ merger reviews.',
    },
    {
      section: 'Digital Markets & Platform Competition',
      content:
        'Unique challenges: (1) Network effects \u2014 platform value rises with users (Facebook, WhatsApp, UPI), creating natural barriers and winner-takes-all dynamics. (2) Data as barrier \u2014 dominant platforms accumulate massive datasets (Google search, Amazon purchases) that entrants cannot replicate. (3) Multi-sided platforms \u2014 Amazon serves buyers and sellers; can leverage one-side dominance to advantage itself (private label promotion over third parties). (4) Killer acquisitions \u2014 buying potential competitors before they grow (Facebook/Instagram 2012, Facebook/WhatsApp 2014). The Rs 2,000 crore deal value threshold addresses this. India-specific: Amazon/Flipkart investigated for preferential seller treatment and deep discounting. Google\'s 95%+ search and 97%+ Android share. Apple App Store\'s 30% commission investigated. Zomato-Swiggy food delivery duopoly. EU\'s DMA (2022) designates "gatekeepers." India\'s CDCL (2024) recommended an ex-ante framework for "Systemically Significant Digital Enterprises" (SSDEs) based on turnover, users, and market cap.',
    },
    {
      section: 'Regulation of Natural Monopolies in India',
      content:
        'Natural monopolies need regulation because one firm supplies the market more efficiently than many, but without regulation prices become supracompetitive. (1) Electricity: DISCOMs regulated by SERCs, which set tariffs balancing consumer protection and viability. Multi-year frameworks. Open access lets large consumers buy directly from generators. (2) Railways: government monopoly with partial private entry (Tejas, Vande Bharat). Rail regulatory authority discussed but not established. (3) Telecom: was DoT/BSNL monopoly until NTP 1994. Now oligopoly regulated by TRAI (interconnection, tariffs, spectrum). (4) Airports: AERA sets aeronautical charges for major airports. Private operators (Adani, GMR) manage under oversight. (5) Petroleum: deregulated 2010 (petrol), 2014 (diesel) \u2014 but PSU oil companies (IOC, BPCL, HPCL) coordinate pricing. Private share <10%. India moved from government monopoly (pre-1991) to regulated competition. Independent regulators (TRAI, CERC/SERCs, AERA, PNGRB, CCI) balance efficiency, investment, and consumer welfare. The challenge: ensuring regulatory independence from government interference.',
    },
    {
      section: 'Consumer Welfare & Market Efficiency',
      content:
        'Perfect competition maximises consumer surplus (P = MC, socially optimal output, no deadweight loss). Monopoly creates deadweight loss (output restricted, P > MC). Monopolistic competition operates at excess capacity \u2014 the cost of variety (consumers pay slightly more for choice). Oligopoly outcomes depend on competition intensity: collusive oligopolies approach monopoly (cement cartel); competitive ones approach the competitive ideal (telecom price wars). India examples: (a) Telecom \u2014 Jio\'s 2016 entry drove prices to among the world\'s lowest ($0.17/GB vs $4.21 global). Data consumption: 19 GB/user/month. Textbook competitive entry improving welfare. (b) Aviation \u2014 IndiGo\'s low-cost model cut domestic fares 40\u201350% from early 2000s. (c) E-commerce \u2014 Amazon-Flipkart competition drove discounting but raises predatory pricing concerns (could lead to monopoly pricing long term). Consumer Protection Act 2019 complements competition law: CCPA, product liability, e-commerce rules, misleading ad penalties. Consumer welfare is the ultimate objective of both competition and consumer protection.',
    },
    {
      section: 'Market Concentration & Measurement',
      content:
        'Metrics: (1) CR4/CR8 (sum of top 4/8 firms\' shares). CR4 > 60% indicates oligopoly. India: Telecom CR3 = 95%+, Cement CR5 = 50%+, Aviation CR1 = 60%+ (IndiGo alone). (2) HHI (sum of squared shares): <1,500 unconcentrated, 1,500\u20132,500 moderate, >2,500 highly concentrated. US DOJ and EU use HHI for merger review. CCI also considers it. (3) Lerner Index: (P - MC)/P, from 0 (perfect competition) to 1 (max power). Estimated from cost/pricing data. Concentration has increased in several sectors: telecom went from 12+ to 3 operators (2015\u20132024). Aviation: 3\u20134 carriers. Banking: top 5 hold 50%+ deposits (post-merger SBI+associates, BoB+Dena+Vijaya, PNB+OBC+United). Steel: JSW + Tata hold 35\u201340%. CCI uses HHI changes, entry barriers, countervailing buyer power, and dynamic efficiency in merger assessment.',
    },
    {
      section: 'Game Theory & Strategic Behaviour',
      content:
        'Game theory provides the framework for oligopoly analysis. (1) Nash Equilibrium \u2014 no player can improve by unilaterally changing strategy. In Cournot duopoly, Nash equilibrium output lies between monopoly and competitive levels. (2) Prisoner\'s Dilemma \u2014 both firms benefit from collusion but each has incentive to cheat \u2192 both cheat, earning less than cooperation would yield. Explains cartel instability (OPEC members exceed quotas; Indian cement companies undercut). (3) Dominant strategy \u2014 optimal regardless of opponent. In Prisoner\'s Dilemma, defection dominates despite mutual cooperation being better. (4) Repeated games \u2014 cooperation becomes possible through tit-for-tat strategies, explaining tacit collusion (avoiding price wars without explicit agreement). (5) First-mover advantage (Stackelberg) \u2014 committing first captures larger share. Jio\'s 4G first-mover (2016) captured 35%+ share within 3 years. UPSC Economics optional frequently tests Nash equilibrium, Prisoner\'s Dilemma, and dominant strategy.',
    },
    {
      section: 'Barriers to Entry & Market Power',
      content:
        'Higher barriers lead to more concentrated markets. Types: (1) Structural \u2014 economies of scale (natural monopoly in electricity), capital requirements (5G spectrum: Rs 1.5 lakh crore 2022 auction), network effects (UPI, WhatsApp). (2) Strategic \u2014 predatory pricing (Jio\'s free period investigated by TRAI, not found predatory), limit pricing, exclusive dealing. (3) Legal/regulatory \u2014 patents (20 years), licences (3 active telecom holders post-consolidation), government monopoly (Railways, India Post), import restrictions (BIS, phytosanitary standards). (4) Information and reputation \u2014 established brands (Tata, Reliance, HUL) enjoy trust new entrants cannot easily replicate. CCI assesses entry barriers when determining dominance under Section 4. Significant barriers shift welfare from consumers to producers, justifying regulation.',
    },
    {
      section: 'Pricing Strategies in Indian Markets',
      content:
        'Strategies by market structure: (1) Penetration pricing \u2014 low initial prices for market share, then raises. Jio\'s free services (September 2016 \u2013 March 2017), Patanjali\'s FMCG pricing. (2) Predatory pricing \u2014 below cost to eliminate rivals. CCI investigates under Section 4. Test: dominant firm pricing below cost, eliminating competitors, then raising prices. Amazon/Flipkart accused of deep-discount predation funded by foreign investors (CAIT complaints). (3) Price leadership \u2014 largest firm sets price, others follow. UltraTech leads cement pricing; IOC leads petroleum retail. (4) Dynamic pricing \u2014 real-time demand-based. Railways (Tatkal, flexi-fare up to 1.5x), airlines (yield management), ride-hailing (surge pricing). (5) Loss leader \u2014 one product at a loss to attract buyers of profitable items. Reliance Fresh, DMart, Amazon Prime. (6) Geographic pricing \u2014 different prices by market. FMCG sachets/Re 1 packs in rural areas \u2014 effectively third-degree price discrimination.',
    },
    {
      section: 'Indian Banking \u2014 Market Structure & Competition',
      content:
        'Oligopoly with dominant state-owned segment. 12 PSBs, 21 private, 46 foreign, 12 Small Finance Banks, 6 Payments Banks. PSBs hold ~58% of assets (down from 70%+ pre-merger). Top 5 (SBI, HDFC Bank, ICICI, BoB, PNB) hold 50%+ deposits. SBI: 22\u201323% deposit share (merged with 5 associates, 2017). Acts as price leader. HDFC Bank: largest private; HDFC-HDFC Bank merger (2023) created 4th-largest globally by market cap. Fintech competition: UPI (12+ billion transactions/month 2024). PhonePe (47%), Google Pay (34%), Paytm \u2014 oligopolistic payment ecosystem. SFBs (AU, Equitas, Ujjivan) serve underbanked segments. Digital bank licences under discussion (NITI Aayog recommendation). RBI regulates via PSL (40% of ANBC), licensing, merger approval, interest rate norms. Banking Regulation Act 1949 and Competition Act 2002 jointly govern; CCI has concurrent jurisdiction over bank mergers.',
    },
    {
      section: 'Agricultural Markets \u2014 Competition & Reforms',
      content:
        'Agricultural markets deviate from competition due to information asymmetry, spatial oligopsony, and regulatory fragmentation. Pre-reform: (1) APMC Acts required sales through licensed mandis; arhtiyas extracted 2\u20135% commission; farmers received only 30\u201340% of consumer price. (2) 2\u20133 traders dominate remote areas, depressing prices. (3) Farmers lacked real-time price information. Reforms: (1) Model APMC Act 2003 \u2014 recommended direct marketing, contract farming, private markets; poorly implemented. (2) eNAM (2016) \u2014 1,361+ mandis integrated for online bidding and price discovery; inter-state trade barriers and APMC resistance limit effectiveness. (3) Farm Laws 2020-21 (repealed November 2021) \u2014 allowed trade outside mandis, promoted contracts, removed stock limits. Farmer fears of MSP/mandi dismantling led to year-long protests and repeal. (4) MSP for 23 crops but procurement mainly wheat/rice in Punjab, Haryana, MP. (5) FPOs: most promising mechanism \u2014 collective marketing bypasses intermediaries, improves bargaining. 10,000 target.',
    },
    {
      section: 'Anti-Competitive Practices in Public Procurement',
      content:
        'Bid rigging in public procurement is a major competition concern. India\'s public procurement: ~20% of GDP (Rs 50+ lakh crore annually). Types: (1) cover bidding \u2014 intentionally high losing bids; (2) bid rotation \u2014 firms take turns winning; (3) market allocation \u2014 geographic or project-type division; (4) bid suppression \u2014 agreed non-bidding. CCI cases: tyre companies (2018, defence procurement), information service providers (2021, government data tenders), flash memory producers (2020, global cartel affecting India), zinc carbon batteries (2018, railway procurement). GeM (2016): government e-marketplace. 73+ lakh sellers, Rs 4+ lakh crore transactions (2024). Competitive bidding, reverse auctions, and transparency reduce collusion. CVC mandates integrity pacts for large procurements. CCI conducts market studies and issues advisories on procurement design that minimises collusion \u2014 random lot allocation, variable bid parameters, confidential bidding.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'UPSC Economics optional and Prelims frequently test market structure features, CCI orders, cartel penalties, and Indian oligopoly examples. SSC CGL asks factual questions on market types and characteristics. IBPS PO tests CCI\'s role and recent competition cases involving financial institutions. State PSCs cover market failure, public goods, and government intervention rationale.',
}
