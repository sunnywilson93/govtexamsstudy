import type { SubjectConcept } from '@/types/subject-notes'

export const politicalPartiesConcept: SubjectConcept = {
  topic: 'political-parties',
  title: 'Political Parties in India',
  description:
    'The original Constitution never mentioned political parties. The 52nd Amendment (1985) gave them their first constitutional recognition through the Tenth Schedule. Registration and regulation operate under Section 29A of the RPA, 1951 and the Election Symbols Order, 1968. Questions target national vs state party recognition criteria, the Electoral Bond judgment (2024), symbol dispute rules, the anti-defection mechanism, and coalition politics. The current count of national parties and the ECI\'s deregistration limitations appear frequently in Prelims.',
  category: 'Political Process',
  keyDates: [
    { year: '1885', event: 'Indian National Congress founded — the oldest political party in India, established in Bombay by A.O. Hume' },
    { year: '1906', event: 'All India Muslim League founded in Dhaka; became the primary party advocating for Muslim interests and later for Pakistan' },
    { year: '1925', event: 'Communist Party of India (CPI) founded in Kanpur — oldest surviving left party in India' },
    { year: '1951', event: 'Bharatiya Jan Sangh founded by Syama Prasad Mookerjee — precursor to the Bharatiya Janata Party (BJP)' },
    { year: '1951', event: 'Representation of the People Act, 1951 provided for registration of political parties under Section 29A' },
    { year: '1968', event: 'Election Symbols (Reservation and Allotment) Order issued by the Election Commission for allocation and recognition of party symbols' },
    { year: '1975', event: 'Tarkunde Committee was among the earliest to recommend electoral reforms including independent election commission and transparency' },
    { year: '1985', event: '52nd Amendment (Anti-Defection Law) added the Tenth Schedule — first constitutional recognition of political parties' },
    { year: '1998', event: 'Indrajit Gupta Committee recommended partial state funding of elections limited to recognized national and state parties' },
    { year: '2003', event: '91st Amendment strengthened the Anti-Defection Law — barred defectors from holding ministerial office, removed "one-third split" exception' },
    { year: '2013', event: 'Central Information Commission ruled that six national parties are "public authorities" under the RTI Act (parties disputed this)' },
    { year: '2017', event: 'Electoral bonds introduced as a new method of political funding; anonymous donations to registered parties allowed' },
    { year: '2024', event: 'Supreme Court struck down the Electoral Bond Scheme as unconstitutional in ADR v. UOI, violating the right to information under Article 19(1)(a)' },
    { year: '2024', event: 'Kovind Committee on "One Nation One Election" recommended simultaneous elections for Lok Sabha and state assemblies' },
  ],
  notes: [
    {
      section: 'Constitutional and Legal Framework',
      content:
        'The original Constitution contains no provision on political parties. The 52nd Amendment (1985) delivered their first constitutional recognition by adding the Tenth Schedule, which references "political parties" and "legislature parties." Article 19(1)(c) guarantees the right to form associations and unions, including political parties. The primary statute is the Representation of the People Act, 1951. Section 29A enables any association of Indian citizens calling itself a political party to register with the ECI. The party must maintain a written constitution, and office-bearers must be members. The ECI registers parties on the condition that objectives and activities align with the Constitution. The Election Symbols (Reservation and Allotment) Order, 1968 governs party classification and symbol allotment. The ECI can recognize, derecognize, merge, or split parties under this Order. Section 13A of the Income Tax Act, 1961 grants tax exemptions to political parties that file returns and maintain proper accounts.',
    },
    {
      section: 'Recognition Criteria — National and State Parties',
      content:
        'The ECI classifies parties into three tiers: national, state (recognized in specific states), and registered unrecognized. A party qualifies as a national party by meeting any one condition: securing at least 6% of valid votes in four or more states at a LS or Assembly election and winning at least 4 LS seats; winning at least 2% of total LS seats (currently 11) from at least 3 different states; or holding state-party recognition in four or more states. State-party recognition requires any one condition: at least 6% of valid votes in the state at a LS or Assembly election plus at least 2 Assembly seats; at least 6% of valid votes in the state at a LS election plus at least 1 LS seat; winning at least 3% of total Assembly seats or 3 seats (whichever is more); or winning at least 1 LS seat for every 25 seats allotted to the state. As of 2024, India has 6 national parties, over 50 state parties, and around 2,500 registered unrecognized parties.',
    },
    {
      section: 'Anti-Defection Law — Tenth Schedule',
      content:
        'The 52nd Amendment (1985) gave political parties their first constitutional mention through the Tenth Schedule, targeting the "Aaya Ram, Gaya Ram" phenomenon of legislators switching parties to destabilize governments in the 1960s-70s. Disqualification applies when a member voluntarily gives up party membership, or votes or abstains against the party whip without prior permission (and the party does not condone within 15 days). The merger exception survives: two-thirds of a legislature party\'s members can merge with another party without disqualification. The 91st Amendment (2003) deleted the original one-third split exception and inserted paragraph 1B, barring anyone disqualified under the Tenth Schedule from ministerial appointment. The Speaker or Chairman decides disqualification petitions, but the SC in Kihoto Hollohan v. Zachillhu (1992) confirmed judicial review of the Speaker\'s decision. Speakers frequently delay decisions for years, undermining the law\'s deterrent value.',
    },
    {
      section: 'Types of Party Systems',
      content:
        'India shifted from a one-party dominant system to a multi-party system across three phases. From 1952 to 1967, the Indian National Congress dominated both the Centre and most states. Rajni Kothari termed this the "Congress system." Between 1967 and 1989, opposition parties emerged at the state level and the first non-Congress government took power at the Centre (Janata Party, 1977-79). Since 1989, India has operated as a genuine multi-party system with coalition governments dominant until 2014. The coalition era (1989-2014) produced alliances like the NDA (led by BJP) and UPA (led by Congress). Regional parties including DMK, AIADMK, TMC, SP, BSP, TDP, JD(U), and Shiv Sena have shaped government formation at the Centre. India\'s party landscape features ideological diversity (left-wing CPI(M) to right-wing BJP), caste-based parties (BSP, RJD), regional forces (DMK, TMC, BRS), and personality-driven parties. The Anti-Defection Law enforces party discipline, though splits and mergers remain frequent.',
    },
    {
      section: 'Party Funding and Electoral Bonds',
      content:
        'Party funding remains deeply contentious. Legal sources include membership fees, sale of publications, donations from individuals and companies (Section 29B of RPA, Section 182 of Companies Act, 2013), limited government grants, and electoral bonds (2018-2024). The Electoral Bond Scheme, operationalized in 2018, let donors buy bearer instruments from SBI in denominations from Rs 1,000 to Rs 1 crore and donate anonymously to registered parties. Neither donor identity nor funding source reached the public. The SC in Association for Democratic Reforms v. Union of India (2024) struck down the entire scheme as unconstitutional. The Court held that electoral bonds violated the right to information under Art 19(1)(a), which includes the voter\'s right to know about political funding. The SC directed SBI to disclose all transaction data. Before electoral bonds, cash donations below Rs 20,000 accounted for a major share of party income, fuelling concerns about black money in elections.',
    },
    {
      section: 'Inner-Party Democracy and Organizational Structure',
      content:
        'Inner-party democracy remains weak across Indian politics. Section 29A of the RPA requires parties to hold organizational elections regularly. In practice, most parties suffer hereditary leadership (dynastic politics) or control by a small clique. The ECI can demand updated office-bearer lists but cannot dictate how internal elections run. The SC in Indian National Congress v. Institute of Social Welfare (2002) termed political parties "quasi-state institutions" that should function democratically. The NCRWC (2002) recommended regular organizational elections, transparent accounts, and democratic candidate selection norms. The 2nd ARC (4th Report) recommended standalone legislation to regulate party internal functioning. No such comprehensive law exists. Dynastic politics, where party leadership passes across generations within one family, cuts across the political spectrum and remains a significant governance concern.',
    },
    {
      section: 'Deregistration and Regulation',
      content:
        'The ECI registers parties under Section 29A but holds no explicit power to deregister them. The SC in Subramanian Swamy v. Election Commission of India (2008) confirmed this limitation. The ECI can refuse registration when party objectives conflict with the Constitution, derecognize a party (stripping its symbol and privileges) for failing recognition criteria, and note non-contesting parties, but it cannot deregister them. This gap has produced nearly 2,800 registered parties as of 2024, with fewer than 10% ever contesting elections. The ECI has repeatedly sought legislative authority to deregister parties that skip elections or violate legal requirements. Parliament has not acted. "Dummy candidates" and "shell parties" created to split votes or siphon donations remain a problem the ECI has flagged for legislative intervention.',
    },
    {
      section: 'Privileges of Recognized Parties',
      content:
        'Recognition brings tangible advantages. The party gets its election symbol reserved exclusively for its candidates in recognized constituencies. It receives free time on Doordarshan and All India Radio during elections under the ECI\'s equitable allocation scheme. The ECI provides two free sets of electoral rolls per recognized constituency. The party gets space for campaign hoardings and posters near polling stations. Recognized parties can nominate up to 40 star campaigners (registered unrecognized parties get only 20), and star campaigner travel costs do not count against the candidate\'s expenditure ceiling under Section 77 of RPA 1951. The ECI consults recognized parties on election schedules, voter education, and Model Code of Conduct implementation. National parties hold their symbol across India; state parties hold it within recognized states. Symbol recognition matters immensely for voter identification in areas with lower literacy. Losing recognition severely damages a party\'s electoral prospects.',
    },
    {
      section: 'Coalition Politics and Alliance Formations',
      content:
        'Coalition politics defined Indian democracy from 1989 to 2014. Single-party majority rule (Congress domination, 1947-1989) gave way to alliance-driven governance. Key alliances: NDA (formed 1998, led by BJP), UPA (formed 2004, led by Congress), Left Front (led by CPI(M)), and shifting Third Front combinations. Coalition governments face four recurring challenges. The Common Minimum Programme (CMP) forces partners to compromise on individual platforms. Coalition dharma demands mutual support on key votes. Coalition compulsions let smaller parties extract disproportionate concessions by threatening withdrawal. Policy paralysis follows when consensus requirements slow decision-making. The Sarkaria Commission (1988) and Punchhi Commission (2010) examined coalition government functioning in the Centre-state context. Despite these challenges, coalition politics ensured broader representation of diverse regional interests in national governance.',
    },
    {
      section: 'Criminalization of Politics',
      content:
        'Criminalization of politics persists as a governance crisis. ADR data shows MPs with declared criminal cases rising from 24% in 2004 to over 40% in 2024. Section 8 of RPA 1951 disqualifies only on conviction, not when charges are framed, letting persons with serious pending cases contest elections. The SC in Lily Thomas v. Union of India (2013) struck down Section 8(4), removing the 3-month appeal window for convicted sitting legislators. This addresses post-conviction only. The Law Commission (255th Report, 2015) recommended barring persons charged with offences carrying 5+ years imprisonment (where courts have framed charges), but Parliament has not acted. The SC in its 2020 order directed parties to publish candidate criminal antecedents on websites and social media within 48 hours of selection, along with reasons for choosing candidates with criminal records over cleaner alternatives. The percentage of tainted candidates keeps climbing because parties prioritize perceived winnability over clean records.',
    },
    {
      section: 'State Funding of Elections',
      content:
        'Multiple committees have recommended state funding of elections, but none has been implemented. The Indrajit Gupta Committee (1998) recommended partial state funding limited to recognized national and state parties for in-kind expenses (fuel, stationery, microphones), not cash transfers. The Dinesh Goswami Committee (1990) included state funding in a broader reform package. The Law Commission (1999) tied state funding to prior reforms regulating party finances. The NCRWC (2002) supported it subject to transparent accounts and internal democracy. Currently, parties receive limited in-kind support (free broadcast time, electoral rolls) but zero direct state funding. Germany, Sweden, and Brazil operate comprehensive public funding systems. India resists for four reasons: fiscal burden, difficulty designing a fair allocation formula, risk of taxpayer money reaching non-serious parties, and the political challenge of building consensus when any framework might disproportionately benefit incumbents or larger parties.',
    },
    {
      section: 'One Nation One Election Debate',
      content:
        'Simultaneous elections (One Nation One Election) would synchronize Lok Sabha and all state assembly polls. The Kovind Committee (2024), chaired by former President Ram Nath Kovind, recommended this and proposed constitutional amendments. Arguments for: reduced election spending (ECI spends roughly Rs 10,000 crore per general election), less policy disruption from the Model Code of Conduct (which freezes government decisions for months), lower security force deployment, and stronger governance continuity. Arguments against: it weakens federalism by linking state politics to national cycles, violates state assemblies\' constitutional right to complete their 5-year terms, advantages larger national parties over regional ones, reduces mid-term accountability, and demands massive logistical overhaul (EVMs, security, voter education). Required constitutional amendments touch Articles 83, 85, 172, 174, and 356. India held simultaneous elections until 1967, when premature dissolutions broke the cycle. The Law Commission (1999) and NITI Aayog have also examined this proposal.',
    },
    {
      section: 'Symbol Allocation and Disputes',
      content:
        'The Election Symbols (Reservation and Allotment) Order, 1968 governs symbol allocation. National parties hold their symbol across India; state parties hold it within their recognized states. Unrecognized and independent candidates receive "free symbols" from an ECI pool. Paragraph 15 of the Symbols Order empowers the ECI to decide recognition and symbol disputes. When a party splits, the ECI determines which faction keeps the name and symbol. Notable disputes: the 1969 Congress split (Indira Congress vs Organization Congress), the Shiv Sena split (2022-23, ECI gave the name and symbol to the Eknath Shinde faction), and the NCP split (2023, ECI assigned the name and symbol to the Ajit Pawar faction). The ECI weighs three factors: majority in the legislature party, majority in the organizational wing, and majority among office-bearers. The SC in Sadiq Ali v. Election Commission (1972) upheld this power. Frozen symbols belong to formerly recognized parties that lost recognition. These symbols stay frozen and cannot be allotted to others until the ECI decides their disposal.',
    },
    {
      section: 'Regional Parties and Federal Democracy',
      content:
        'Regional parties reflect India\'s linguistic, ethnic, and cultural diversity and have shaped democratic evolution at every level. Major regional parties include DMK and AIADMK (Tamil Nadu), TMC (West Bengal), SP and BSP (Uttar Pradesh), JD(U) and RJD (Bihar), TDP and YSR Congress (Andhra Pradesh), BRS (Telangana), Shiv Sena (Maharashtra), Akali Dal (Punjab), AGP (Assam), National Conference and PDP (J&K), BJD (Odisha), and JD(S) (Karnataka). They have governed most states and served as essential coalition partners at the Centre. Regional parties push state-specific demands: language policy, resource sharing, autonomy, reservation, and cultural identity. Their rise has strengthened federalism by forcing central policy to account for diverse regional interests. Critics counter that regional parties promote parochial interests, practise identity politics, and fragment the national polity. The Sarkaria Commission (1988) and Punchhi Commission (2010) recognized their legitimate role in India\'s multi-level federal structure. Tensions between national and regional parties over GST, river water disputes, and language policy illustrate the dynamic nature of Indian federalism.',
    },
    {
      section: 'Election Expenditure and Campaign Finance',
      content:
        'Section 77 of RPA 1951 requires every candidate to maintain daily expenditure accounts. The ECI caps spending: Rs 95 lakh for LS elections in larger states (Rs 75 lakh in smaller), Rs 40 lakh for state assembly elections in larger states (Rs 28 lakh in smaller). These limits apply only to individual candidates, not parties. Parties face no spending cap, creating a legal loophole: party expenditure on rallies, media campaigns, and advertising escapes the candidate\'s limit. The SC in Kanwar Lal Gupta v. Amar Nath Chawla (1975) held that party spending benefiting a specific candidate must be clubbed with the candidate\'s account. Enforcement remains weak. The ceiling applies only from nomination filing to results. Paid news, where purchased media coverage masquerades as editorial content, has emerged as unaccounted election spending. The ECI has set up district monitoring cells to track and report paid news violations. The gap between legal limits and actual spending (estimated at 10-50 times the ceiling) remains the biggest challenge in campaign finance regulation.',
    },
    {
      section: 'Recent Developments and Reforms',
      content:
        'Recent reforms address funding, transparency, and criminalization. The Electoral Bond judgment (2024) forced political funding into the open and triggered demands for state funding or a transparent replacement. The ECI\'s digitization of party registration and reporting has improved oversight. NOTA, introduced in 2013 after PUCL v. Union of India, gave voters the right to reject all candidates, though NOTA votes do not alter election outcomes. The SC in Lily Thomas v. Union of India (2013) ruled that MPs/MLAs convicted with 2+ years imprisonment lose their seats immediately, with no appeal window. The Law Commission (255th Report, 2015) recommended decriminalization through stronger pre-trial screening of candidates with serious charges. Mandatory candidate disclosure of criminal antecedents, assets, and liabilities (from SC directions in Association for Democratic Reforms v. Union of India, 2002) has raised voter awareness. Despite these reforms, the percentage of candidates with criminal records contesting elections continues to climb, exposing the persistent gap between legal provisions and political reality.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Very frequently tested in UPSC Prelims and Mains. Questions focus on recognition criteria for national/state parties, the number of national parties, the Electoral Bond judgment (2024), Section 29A of RPA, the Anti-Defection Law (first constitutional recognition, 91st Amendment changes, Kihoto Hollohan), coalition politics, privileges of recognized parties, One Nation One Election, symbol disputes, and state funding committees. SSC exams test factual details on party registration and recognition.',
}
