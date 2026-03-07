import type { ReasoningProblem } from "@/types/reasoning"

export const causeEffectProblems: ReasoningProblem[] = [
  // ── Easy (p1–p10): SSC CGL Tier 1 basic, RRB NTPC level ──────────
  {
    id: "ce-p1",
    topic: "cause-effect",
    title: "SSC CGL 2023: Heat Wave and School Closure",
    question:
      "Statement I: The government declared a one-week holiday for all schools due to extreme heat. Statement II: The temperature in the city exceeded 45 degrees Celsius for three consecutive days. Determine the cause-effect relationship.",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression: "I: school holiday declared | II: temperature exceeded 45C for 3 days",
        result: "Two related events identified",
        explanation:
          "Statement I is a government action; Statement II is a weather condition.",
      },
      {
        id: 2,
        operation: "Identify the logical sequence",
        expression: "Temperature rise (II) -> government response (I)",
        result: "II precedes I logically and temporally",
        explanation:
          "Extreme heat is the condition that prompted the government to act. The holiday is the response.",
      },
      {
        id: 3,
        operation: "Apply cause-effect definition",
        expression: "Cause: event that triggers | Effect: event that follows",
        result: "II is the cause; I is the effect",
        explanation:
          "The temperature crossing 45C caused the government to declare the school holiday.",
      },
    ],
    answer: "Statement II is the cause; Statement I is the effect.",
    difficulty: "easy",
  },
  {
    id: "ce-p2",
    topic: "cause-effect",
    title: "RRB NTPC 2022: Unemployment and Job Applications",
    question:
      "Statement I: There has been an exceptional rise in the number of unemployed youth compared to the previous year. Statement II: Several hundred candidates applied for a single bank manager position. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: unemployment among youth increased | II: hundreds applied for one bank job",
        result: "Two events in the employment domain",
        explanation:
          "Statement I is about rising unemployment; Statement II is about intense job competition.",
      },
      {
        id: 2,
        operation: "Test: Is I the cause of II?",
        expression:
          "More unemployed youth -> more people competing for each job opening -> hundreds of applications?",
        result: "Strong logical link",
        explanation:
          "Rising unemployment directly increases the number of applicants per vacancy.",
      },
      {
        id: 3,
        operation: "Test: Is II the cause of I?",
        expression: "Many applying for a job -> more unemployment?",
        result: "No logical mechanism",
        explanation:
          "The act of applying does not cause unemployment. The reverse direction does not hold.",
      },
    ],
    answer: "Statement I is the cause; Statement II is the effect.",
    difficulty: "easy",
  },
  {
    id: "ce-p3",
    topic: "cause-effect",
    title: "SSC CGL 2024: Truck Accident and Police Cordon",
    question:
      "Statement I: A huge truck overturned on the road last night. Statement II: Police cordoned off the entire area in the locality this morning. Determine the relationship.",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression: "I: truck overturned last night | II: police cordoned off area this morning",
        result: "Two events in the same locality, temporal sequence clear",
        explanation:
          "Statement I is an accident; Statement II is a subsequent safety measure.",
      },
      {
        id: 2,
        operation: "Test: Is I the cause of II?",
        expression: "Truck accident -> police cordon the area for safety/investigation?",
        result: "Strong and direct causal link",
        explanation:
          "A major road accident would prompt police to secure the area for investigation and traffic management.",
      },
      {
        id: 3,
        operation: "Verify reverse direction",
        expression: "Police cordoning -> truck overturning? No logical mechanism.",
        result: "Reverse does not hold",
        explanation:
          "Cordoning is a response to the accident, not its cause.",
      },
    ],
    answer: "Statement I is the cause; Statement II is the effect.",
    difficulty: "easy",
  },
  {
    id: "ce-p4",
    topic: "cause-effect",
    title: "SSC CHSL 2023: Rainfall Prediction and Crop Choice",
    question:
      "Statement I: Farmers in Maharashtra switched to drought-resistant crop varieties this season. Statement II: The meteorological department predicted below-normal rainfall for the kharif season. Which is cause and which is effect?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: farmers switched to drought-resistant crops | II: below-normal rainfall predicted",
        result: "Two events in the agricultural domain",
        explanation:
          "Statement I is a farming decision; Statement II is a weather forecast.",
      },
      {
        id: 2,
        operation: "Identify the logical sequence",
        expression: "Rainfall prediction (II) -> farmer decision (I)",
        result: "II logically precedes I",
        explanation:
          "Farmers make crop choices based on weather forecasts. The prediction prompted the switch.",
      },
      {
        id: 3,
        operation: "Apply cause-effect definition",
        expression: "Cause = forecast (II) | Effect = crop switch (I)",
        result: "II is the cause; I is the effect",
        explanation:
          "The below-normal rainfall prediction caused farmers to switch to drought-resistant varieties.",
      },
    ],
    answer: "Statement II is the cause; Statement I is the effect.",
    difficulty: "easy",
  },
  {
    id: "ce-p5",
    topic: "cause-effect",
    title: "RRB NTPC 2023: Malware Discovery and Import Ban",
    question:
      "Statement I: The central government banned the import of certain foreign electronic goods. Statement II: A large consignment of those electronics was found to contain surveillance malware. Determine the relationship.",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: import ban on foreign electronics | II: malware found in electronics",
        result: "Two events in the trade/security domain",
        explanation:
          "Statement I is a policy action; Statement II is a security discovery.",
      },
      {
        id: 2,
        operation: "Identify the sequence",
        expression: "Malware discovery (II) -> government ban (I)",
        result: "II triggers I",
        explanation:
          "The security threat prompted the government to impose the ban as a protective measure.",
      },
      {
        id: 3,
        operation: "Verify reverse",
        expression: "Import ban -> malware found? No, discovery precedes ban.",
        result: "II is the cause; I is the effect",
        explanation:
          "The malware discovery caused the import ban.",
      },
    ],
    answer: "Statement II is the cause; Statement I is the effect.",
    difficulty: "easy",
  },
  {
    id: "ce-p6",
    topic: "cause-effect",
    title: "SSC CGL 2022: Sugar Import and Price Drop",
    question:
      "Statement I: The government imported a large quantity of sugar as part of trade agreements with other nations. Statement II: Sugar prices have dropped significantly in the domestic market in recent months. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: government imported large quantity of sugar | II: domestic sugar prices dropped",
        result: "Two events in the commodity market",
        explanation:
          "Statement I is a trade action; Statement II is a market outcome.",
      },
      {
        id: 2,
        operation: "Test: Is I the cause of II?",
        expression:
          "Large sugar imports -> increased domestic supply -> prices fall?",
        result: "Strong causal link (supply-demand economics)",
        explanation:
          "When supply increases while demand stays constant, prices fall. This is a fundamental economic principle.",
      },
      {
        id: 3,
        operation: "Verify reverse",
        expression: "Falling prices -> government imports? Illogical.",
        result: "I is the cause; II is the effect",
        explanation:
          "Increased supply from imports directly caused the domestic price drop.",
      },
    ],
    answer: "Statement I is the cause; Statement II is the effect.",
    difficulty: "easy",
  },
  {
    id: "ce-p7",
    topic: "cause-effect",
    title: "SSC CGL 2023: ISRO Launch and Hockey Win — Independent Events",
    question:
      "Statement I: ISRO successfully launched its latest space mission. Statement II: The Indian hockey team won the Asian Champions Trophy. Are these related?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: space mission launch | II: hockey tournament victory",
        result: "Two events in entirely different domains",
        explanation:
          "Statement I is about space exploration; Statement II is about sports.",
      },
      {
        id: 2,
        operation: "Test both directions of causation",
        expression:
          "Space launch -> hockey win? No. Hockey win -> space launch? No.",
        result: "No logical mechanism in either direction",
        explanation:
          "Space missions and sports results operate in completely independent domains.",
      },
      {
        id: 3,
        operation: "Check for common cause",
        expression: "Is there a single event causing both?",
        result: "No plausible common cause",
        explanation:
          "These are achievements in separate domains with independent planning and execution.",
      },
    ],
    answer: "Both statements are independent events with no causal relationship.",
    difficulty: "easy",
  },
  {
    id: "ce-p8",
    topic: "cause-effect",
    title: "RRB NTPC 2024: Parent Protest and Fee Regulation",
    question:
      "Statement I: The government has recently fixed the fees for professional courses offered by unaided institutions, much lower than last year. Statement II: Parents of aspiring students launched a severe agitation last year protesting against the high fees charged by unaided institutions. Determine the relationship.",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: government fixed lower fees | II: parents protested high fees last year",
        result: "Two events in the education policy domain",
        explanation:
          "Statement I is a regulatory action; Statement II is a public protest.",
      },
      {
        id: 2,
        operation: "Identify the temporal and logical sequence",
        expression:
          "Parent protest (II, last year) -> government regulation (I, recently)",
        result: "II precedes I",
        explanation:
          "The protest happened first; the fee regulation followed as the government's response.",
      },
      {
        id: 3,
        operation: "Confirm the direction",
        expression: "Protest caused government intervention to regulate fees",
        result: "II is the cause; I is the effect",
        explanation:
          "Public pressure from parents prompted the government to cap professional course fees.",
      },
    ],
    answer: "Statement II is the cause; Statement I is the effect.",
    difficulty: "easy",
  },
  {
    id: "ce-p9",
    topic: "cause-effect",
    title: "SSC CGL 2024: Air Pollution and Respiratory Admissions",
    question:
      "Statement I: Air pollution levels in Delhi exceeded the 'severe plus' category for 10 consecutive days. Statement II: Hospital admissions for respiratory ailments in Delhi doubled during the same period. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: severe air pollution for 10 days | II: respiratory admissions doubled",
        result: "Two events in the same city and same period",
        explanation:
          "Both events concern Delhi and share temporal overlap.",
      },
      {
        id: 2,
        operation: "Test: Is I the cause of II?",
        expression:
          "Severe pollution -> people fall ill -> hospital admissions rise?",
        result: "Strong and direct causal link",
        explanation:
          "Prolonged severe pollution causes asthma attacks, bronchitis, and breathing difficulties.",
      },
      {
        id: 3,
        operation: "Verify reverse",
        expression: "More hospital admissions -> more pollution? No.",
        result: "I is the cause; II is the effect",
        explanation:
          "Severe air pollution directly caused the spike in respiratory hospital admissions.",
      },
    ],
    answer: "Statement I is the cause; Statement II is the effect.",
    difficulty: "easy",
  },
  {
    id: "ce-p10",
    topic: "cause-effect",
    title: "SSC MTS 2023: Health Awareness and Yoga",
    question:
      "Statement I: The importance of yoga and exercise is being realised by all sections of society. Statement II: There is increasing awareness about health, particularly among middle-aged people. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: yoga/exercise importance realised | II: increasing health awareness",
        result: "Two events in the public health domain",
        explanation:
          "Statement I is about adoption of healthy practices; Statement II is about growing awareness.",
      },
      {
        id: 2,
        operation: "Test: Is II the cause of I?",
        expression:
          "Health awareness grows -> people start valuing yoga/exercise?",
        result: "Strong logical link",
        explanation:
          "Growing health consciousness naturally leads people to recognise the importance of wellness practices.",
      },
      {
        id: 3,
        operation: "Confirm direction",
        expression: "Awareness (II) -> adoption of yoga (I)",
        result: "II is the cause; I is the effect",
        explanation:
          "Health awareness drives the recognition of yoga and exercise importance.",
      },
    ],
    answer: "Statement II is the cause; Statement I is the effect.",
    difficulty: "easy",
  },

  // ── Medium (p11–p20): SSC CGL Tier 1 advanced, IBPS Clerk level ───
  {
    id: "ce-p11",
    topic: "cause-effect",
    title: "IBPS Clerk 2023: Road Accidents and Challans — Common Cause",
    question:
      "Statement I: The number of road accidents in the city increased sharply last month. Statement II: The traffic police issued a record number of challans (fines) last month. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: road accidents increased | II: traffic challans at record high",
        result: "Two events in the traffic domain during the same period",
        explanation:
          "Both events occur in the same domain and time frame.",
      },
      {
        id: 2,
        operation: "Test both directions",
        expression:
          "More accidents -> more challans? Possible but indirect. More challans -> more accidents? Illogical (challans deter violations).",
        result: "Neither directly causes the other",
        explanation:
          "Both are responses to the same underlying traffic problem.",
      },
      {
        id: 3,
        operation: "Identify common cause",
        expression:
          "Increased traffic volume / reckless driving -> causes both more accidents AND stricter enforcement",
        result: "Both are effects of a common cause",
        explanation:
          "A surge in traffic or reckless behaviour independently causes more accidents and prompts police to increase enforcement.",
      },
    ],
    answer: "Both are effects of a common cause (increased traffic/recklessness).",
    difficulty: "medium",
  },
  {
    id: "ce-p12",
    topic: "cause-effect",
    title: "SSC CGL 2023: Water Shortage and Migration",
    question:
      "Statement I: Several villages in Bundelkhand reported acute water shortage this summer. Statement II: A large number of families migrated from Bundelkhand to nearby cities. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: acute water shortage in villages | II: families migrated to cities",
        result: "Two events in the same region and time",
        explanation:
          "Both concern the Bundelkhand region and involve rural distress.",
      },
      {
        id: 2,
        operation: "Test: Is I the cause of II?",
        expression:
          "Water shortage -> villages uninhabitable -> forced migration?",
        result: "Strong logical link",
        explanation:
          "Water scarcity directly forces families to seek alternatives in cities.",
      },
      {
        id: 3,
        operation: "Verify reverse",
        expression: "Migration -> water shortage? Fewer people would reduce demand.",
        result: "Reverse is illogical",
        explanation:
          "Migration is a consequence of shortage, not its cause.",
      },
    ],
    answer: "Statement I is the cause; Statement II is the effect.",
    difficulty: "medium",
  },
  {
    id: "ce-p13",
    topic: "cause-effect",
    title: "IBPS Clerk 2024: Compulsory English and Coaching Demand",
    question:
      "Statement I: The state government made English a compulsory subject from Class 1. Statement II: Enrolment in English-medium coaching centres in rural areas increased by 40%. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: English made compulsory from Class 1 | II: coaching enrolment up 40%",
        result: "Two events in the education domain",
        explanation:
          "Statement I is a policy change; Statement II is a market response.",
      },
      {
        id: 2,
        operation: "Test: Is I the cause of II?",
        expression:
          "Compulsory English -> parents seek coaching for children?",
        result: "Strong logical link",
        explanation:
          "When English becomes compulsory, parents in rural areas seek coaching to help children cope.",
      },
      {
        id: 3,
        operation: "Verify reverse",
        expression: "More coaching -> government makes English compulsory? No.",
        result: "I is the cause; II is the effect",
        explanation:
          "The policy created the demand for coaching. Government policy precedes market response.",
      },
    ],
    answer: "Statement I is the cause; Statement II is the effect.",
    difficulty: "medium",
  },
  {
    id: "ce-p14",
    topic: "cause-effect",
    title: "SSC CGL 2022: Flood Warning and Flooding — Common Cause Trap",
    question:
      "Statement I: The river flooded several low-lying areas of the city this week. Statement II: The municipal corporation issued flood-warning notices to residents last week. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements with temporal clue",
        expression:
          "I: flooding this week | II: flood warnings issued last week",
        result: "II occurred before I in time",
        explanation:
          "The warning preceded the actual flooding.",
      },
      {
        id: 2,
        operation: "Avoid the temporal-causation trap",
        expression:
          "Did the warning cause the flood? No. The warning anticipated the flood.",
        result: "II did not cause I",
        explanation:
          "Just because warnings came before flooding does not mean they caused it.",
      },
      {
        id: 3,
        operation: "Identify the common cause",
        expression:
          "Heavy upstream rainfall -> municipal corporation issues warnings (II) AND -> river floods (I)",
        result: "Both are effects of a common cause",
        explanation:
          "Heavy rainfall caused both the warnings (early response) and the flooding (later consequence).",
      },
    ],
    answer: "Both are effects of a common cause (heavy upstream rainfall).",
    difficulty: "medium",
  },
  {
    id: "ce-p15",
    topic: "cause-effect",
    title: "IBPS Clerk 2022: Gold Price and Multiplex — No Relation",
    question:
      "Statement I: The price of gold increased by 15% last quarter. Statement II: A new multiplex cinema opened in the city last quarter. Are these related?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: gold price up 15% | II: new multiplex opened",
        result: "Two events in entirely different domains",
        explanation:
          "Gold pricing is a national/global economic phenomenon. A multiplex is a local commercial event.",
      },
      {
        id: 2,
        operation: "Test both directions",
        expression:
          "Gold price rise -> cinema opening? No. Cinema opening -> gold price rise? No.",
        result: "No logical mechanism in either direction",
        explanation:
          "These sectors have no causal relationship.",
      },
      {
        id: 3,
        operation: "Check for common cause",
        expression: "Any single event causing both? No.",
        result: "No causal relationship exists",
        explanation:
          "Gold prices are driven by global factors; cinema investment by local demand. Pure coincidence of timing.",
      },
    ],
    answer: "The two statements have no causal relationship.",
    difficulty: "medium",
  },
  {
    id: "ce-p16",
    topic: "cause-effect",
    title: "SSC CGL 2024: Rupee Depreciation and FII Outflow — Common Cause",
    question:
      "Statement I: The rupee depreciated sharply against the US dollar last month. Statement II: Foreign institutional investors (FIIs) pulled out over 20,000 crore from Indian equity markets last month. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: rupee depreciation | II: FII outflow from equity markets",
        result: "Two financial events in the same period",
        explanation:
          "Both relate to India's financial markets and occurred simultaneously.",
      },
      {
        id: 2,
        operation: "Test both directions",
        expression:
          "Weak rupee -> FIIs leave (reduced returns)? Plausible. FII outflow -> rupee weakens (dollar demand)? Also plausible.",
        result: "Both directions possible — suggests common cause",
        explanation:
          "Each could theoretically cause the other, pointing to a common underlying trigger.",
      },
      {
        id: 3,
        operation: "Identify the common cause",
        expression:
          "US Fed rate hike / global risk aversion -> makes dollar assets attractive (FIIs exit) AND -> strengthens dollar against rupee",
        result: "Both are effects of a common cause",
        explanation:
          "Global monetary tightening simultaneously causes FII outflows and rupee depreciation.",
      },
    ],
    answer: "Both are effects of a common cause (global monetary/geopolitical factors).",
    difficulty: "medium",
  },
  {
    id: "ce-p17",
    topic: "cause-effect",
    title: "IBPS Clerk 2023: Oilseed Production and Edible Oil Imports",
    question:
      "Statement I: Oilseed production in the country decreased sharply this year. Statement II: The government has predicted an increase in imported edible oil for the coming year. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: oilseed production fell | II: government expects more oil imports",
        result: "Two events in the agriculture/trade domain",
        explanation:
          "Statement I is about production shortfall; Statement II is about import forecast.",
      },
      {
        id: 2,
        operation: "Test: Is I the cause of II?",
        expression:
          "Lower oilseed production -> less domestic oil -> need to import more?",
        result: "Strong causal link",
        explanation:
          "When domestic production of a commodity falls, imports must rise to meet demand.",
      },
      {
        id: 3,
        operation: "Verify reverse",
        expression: "More imports predicted -> production drops? No.",
        result: "I is the cause; II is the effect",
        explanation:
          "The production decline necessitates higher imports.",
      },
    ],
    answer: "Statement I is the cause; Statement II is the effect.",
    difficulty: "medium",
  },
  {
    id: "ce-p18",
    topic: "cause-effect",
    title: "SSC CGL 2023: School Closure and Student Withdrawal — Independent Effects",
    question:
      "Statement I: All the schools in the area had to be kept closed for most of the week. Statement II: Many parents have withdrawn their children from the local schools. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: schools closed for the week | II: parents withdrew children",
        result: "Two events in the education domain",
        explanation:
          "Statement I is about temporary closure; Statement II is about permanent withdrawal.",
      },
      {
        id: 2,
        operation: "Test both directions",
        expression:
          "School closure -> parents withdraw? Possible if closure was prolonged, but not necessary. Parent withdrawal -> school closure? Possible if enrolment drops, but not direct.",
        result: "Neither is a clear cause of the other",
        explanation:
          "Temporary closure and permanent withdrawal are different types of events with different triggers.",
      },
      {
        id: 3,
        operation: "Determine the relationship",
        expression:
          "Closure could be due to weather/strike; withdrawal due to quality concerns. Different triggers.",
        result: "Both are effects of independent causes",
        explanation:
          "Schools may close due to external disruptions, while parents withdraw due to quality or safety concerns. Independent triggers.",
      },
    ],
    answer: "Both statements are effects of independent causes.",
    difficulty: "medium",
  },
  {
    id: "ce-p19",
    topic: "cause-effect",
    title: "IBPS Clerk 2024: Vegetable Prices and Incessant Rains",
    question:
      "Statement I: Vegetable prices in the market increased sharply over the past two weeks. Statement II: Incessant rains over the past month have caused severe flooding in agricultural regions. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: vegetable prices increased | II: flooding in agricultural regions due to rain",
        result: "Two events: price increase and agricultural disruption",
        explanation:
          "Statement I is a market outcome; Statement II is a natural disaster affecting agriculture.",
      },
      {
        id: 2,
        operation: "Test: Is II the cause of I?",
        expression:
          "Flooding destroys crops -> supply falls -> prices rise?",
        result: "Strong causal link",
        explanation:
          "Agricultural flooding reduces supply of vegetables, directly causing price increases.",
      },
      {
        id: 3,
        operation: "Confirm direction",
        expression: "Rising prices -> flooding? No logical mechanism.",
        result: "II is the cause; I is the effect",
        explanation:
          "The incessant rains and flooding caused the sharp increase in vegetable prices.",
      },
    ],
    answer: "Statement II is the cause; Statement I is the effect.",
    difficulty: "medium",
  },
  {
    id: "ce-p20",
    topic: "cause-effect",
    title: "SSC CGL 2024: Literacy Rate and Training Programs",
    question:
      "Statement I: The district's literacy rate has been rising for the past four years. Statement II: The district administration organised a comprehensive training programme for literacy campaign volunteers. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: literacy rate rising | II: administration trained literacy volunteers",
        result: "Two events in the education/governance domain",
        explanation:
          "Statement I is an outcome; Statement II is an administrative initiative.",
      },
      {
        id: 2,
        operation: "Test: Is II the cause of I?",
        expression:
          "Training programmes for volunteers -> more effective literacy campaigns -> higher literacy rate?",
        result: "Strong logical link",
        explanation:
          "Well-trained volunteers run better literacy programmes, directly improving literacy rates.",
      },
      {
        id: 3,
        operation: "Verify reverse",
        expression: "Rising literacy -> government trains volunteers? Less likely.",
        result: "II is the cause; I is the effect",
        explanation:
          "The training programme for volunteers caused the improvement in literacy rates.",
      },
    ],
    answer: "Statement II is the cause; Statement I is the effect.",
    difficulty: "medium",
  },

  // ── Hard (p21–p30): IBPS PO, SBI PO, UPSC CSAT level ─────────────
  {
    id: "ce-p21",
    topic: "cause-effect",
    title: "IBPS PO 2023: Waterlogging and Traffic Disruption — Common Cause",
    question:
      "Statement I: Several residential colonies in Bengaluru experienced severe waterlogging after the recent rains. Statement II: Traffic on the Outer Ring Road was disrupted for over 8 hours. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: waterlogging in residential areas | II: traffic disruption on ORR",
        result: "Two events in the same city, likely same time",
        explanation:
          "Both concern Bengaluru and appear linked to the same weather event.",
      },
      {
        id: 2,
        operation: "Test direct causation both ways",
        expression:
          "Waterlogging in colonies -> ORR traffic disruption? Not directly. ORR disruption -> residential waterlogging? No.",
        result: "Neither directly causes the other",
        explanation:
          "Residential waterlogging and road flooding are parallel consequences.",
      },
      {
        id: 3,
        operation: "Identify common cause",
        expression:
          "Heavy rainfall + poor drainage -> causes waterlogging (I) AND road flooding/traffic disruption (II)",
        result: "Both are effects of a common cause",
        explanation:
          "Heavy rainfall independently caused both residential waterlogging and traffic disruption.",
      },
    ],
    answer: "Both are effects of a common cause (heavy rainfall and poor drainage).",
    difficulty: "hard",
  },
  {
    id: "ce-p22",
    topic: "cause-effect",
    title: "SBI PO 2023: RBI Repo Rate Chain — Sequential Cause-Effect",
    question:
      "Statement I: The Reserve Bank of India raised the repo rate by 50 basis points. Statement II: Home loan EMIs increased across all major banks within the next quarter. Statement III: Demand for new residential properties in metro cities declined by 12%. What is the relationship among these?",
    steps: [
      {
        id: 1,
        operation: "Read all three statements",
        expression:
          "I: RBI raised repo rate | II: home loan EMIs increased | III: residential demand declined 12%",
        result: "Three events forming a potential chain",
        explanation:
          "All three relate to monetary policy and its downstream effects on housing.",
      },
      {
        id: 2,
        operation: "Test I -> II",
        expression:
          "Repo rate hike -> banks raise lending rates -> EMIs increase",
        result: "I is the cause of II",
        explanation:
          "When RBI raises repo rate, banks pass the cost to borrowers through higher EMIs.",
      },
      {
        id: 3,
        operation: "Test II -> III",
        expression:
          "Higher EMIs -> reduced affordability -> fewer home purchases",
        result: "II is the cause of III",
        explanation:
          "When EMIs rise, fewer people can afford homes, reducing property demand.",
      },
      {
        id: 4,
        operation: "Identify the full chain",
        expression: "I -> II -> III (sequential cause-effect)",
        result: "I is the root cause; II is intermediate; III is final effect",
        explanation:
          "This is a cascading monetary policy chain common in banking exam questions.",
      },
    ],
    answer: "I causes II; II causes III. Sequential causal chain with I as root cause.",
    difficulty: "hard",
  },
  {
    id: "ce-p23",
    topic: "cause-effect",
    title: "UPSC CSAT 2023: MSP Hike, Record Production, Wheat Exports",
    question:
      "Statement I: The Indian government announced a 10% increase in MSP for wheat. Statement II: India's wheat production reached a record high this year. Statement III: Large quantities of wheat were exported to neighbouring countries. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read all three statements",
        expression:
          "I: MSP for wheat increased 10% | II: record wheat production | III: wheat exports increased",
        result: "Three events in the agricultural trade domain",
        explanation:
          "All three concern wheat pricing, production, and trade.",
      },
      {
        id: 2,
        operation: "Test I -> II",
        expression:
          "Higher MSP -> farmers incentivised to grow more wheat -> record production?",
        result: "Plausible causal link with time lag",
        explanation:
          "Higher MSP encourages more land allocation to wheat.",
      },
      {
        id: 3,
        operation: "Test II -> III",
        expression:
          "Record production -> surplus beyond domestic need -> exports increase?",
        result: "Strong causal link",
        explanation:
          "Production surplus naturally leads to higher export volumes.",
      },
      {
        id: 4,
        operation: "Identify the chain",
        expression: "I -> II -> III",
        result: "Sequential chain: MSP hike leads to production, surplus enables exports",
        explanation:
          "The MSP increase incentivised production; the record harvest created surplus for export.",
      },
    ],
    answer: "I contributes to II (cause-effect); II is the direct cause of III (sequential chain).",
    difficulty: "hard",
  },
  {
    id: "ce-p24",
    topic: "cause-effect",
    title: "IBPS PO 2024: RBI Restrictions on Small Banks",
    question:
      "Statement I: The Reserve Bank of India has recently put restrictions on a few small banks in the country. Statement II: The small banks in the private and co-operative sector are not in a position to withstand competition from bigger public-sector banks. Determine the relationship.",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: RBI restrictions on small banks | II: small banks cannot compete with larger banks",
        result: "Two events in the banking regulation domain",
        explanation:
          "Statement I is regulatory action; Statement II is competitive weakness.",
      },
      {
        id: 2,
        operation: "Test: Is II the cause of I?",
        expression:
          "Small banks failing to compete -> RBI steps in to protect depositors?",
        result: "Strong logical link",
        explanation:
          "When small banks face existential competitive threats, the regulator intervenes to protect the financial system.",
      },
      {
        id: 3,
        operation: "Verify reverse",
        expression: "RBI restrictions -> small banks cannot compete? Restrictions are a response, not a cause.",
        result: "II is the cause; I is the effect",
        explanation:
          "The competitive weakness prompted regulatory intervention.",
      },
    ],
    answer: "Statement II is the cause; Statement I is the effect.",
    difficulty: "hard",
  },
  {
    id: "ce-p25",
    topic: "cause-effect",
    title: "SBI PO 2024: Petrol Prices Unchanged, Crude Oil Rises — Independent Effects",
    question:
      "Statement I: The prices of petrol and diesel in the domestic market have remained unchanged for the past few months. Statement II: The crude oil prices in the international market have gone up substantially in the last few months. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: domestic fuel prices unchanged | II: international crude oil prices up",
        result: "Two events in the energy market",
        explanation:
          "Statement I is about domestic pricing; Statement II is about global commodity prices.",
      },
      {
        id: 2,
        operation: "Test: Is II the cause of I?",
        expression:
          "Rising crude -> domestic prices should rise too, but they did not. Government subsidies/elections may keep prices stable.",
        result: "II did not directly cause I",
        explanation:
          "Normally rising crude would push domestic prices up, but government intervention keeps them stable.",
      },
      {
        id: 3,
        operation: "Determine the relationship",
        expression:
          "Stable domestic prices = government policy decision. Rising crude = global market forces. Independent drivers.",
        result: "Both are effects of independent causes",
        explanation:
          "Domestic price stability is driven by government policy; crude oil prices by global supply-demand. These are independent causes producing independent effects.",
      },
    ],
    answer: "Both statements are effects of independent causes.",
    difficulty: "hard",
  },
  {
    id: "ce-p26",
    topic: "cause-effect",
    title: "UPSC CSAT 2024: Police Arrest and Community Vigilance — Common Cause",
    question:
      "Statement I: Police arrested three burglars from the neighbourhood last week. Statement II: The neighbourhood civic organisation has begun nightly vigilance patrols. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: police arrested burglars | II: community started night patrols",
        result: "Two events in the same neighbourhood",
        explanation:
          "Statement I is police action; Statement II is community action.",
      },
      {
        id: 2,
        operation: "Test both directions",
        expression:
          "Arrests -> community patrols? Not necessarily; community acts independently. Community patrols -> arrests? Possible but indirect.",
        result: "Neither is the clear direct cause of the other",
        explanation:
          "Both are responses to the same underlying problem.",
      },
      {
        id: 3,
        operation: "Identify common cause",
        expression:
          "Increased crime/burglaries in the area -> police increased patrols and made arrests (I) AND -> community started vigilance (II)",
        result: "Both are effects of a common cause",
        explanation:
          "A spike in burglaries prompted both police enforcement and community self-defence measures.",
      },
    ],
    answer: "Both are effects of a common cause (increased crime in the neighbourhood).",
    difficulty: "hard",
  },
  {
    id: "ce-p27",
    topic: "cause-effect",
    title: "IBPS PO Mains 2023: Food Commodity Prices and Opposition Strike",
    question:
      "Statement I: Prices of essential food commodities have risen sharply in the last few weeks. Statement II: The opposition parties have called for a general strike in protest against the government. Determine the relationship.",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: food prices rose sharply | II: opposition called general strike",
        result: "Two events: economic hardship and political action",
        explanation:
          "Statement I is an economic condition; Statement II is a political response.",
      },
      {
        id: 2,
        operation: "Test: Is I the cause of II?",
        expression:
          "Sharp rise in food prices -> public anger -> opposition exploits it by calling strike?",
        result: "Strong logical link",
        explanation:
          "Rising food prices create public discontent, which opposition parties channel into strikes.",
      },
      {
        id: 3,
        operation: "Verify reverse",
        expression: "Strike -> food prices rise? A strike could disrupt supply, but the strike is a response here.",
        result: "I is the cause; II is the effect",
        explanation:
          "The sharp rise in food commodity prices gave the opposition grounds to call a general strike.",
      },
    ],
    answer: "Statement I is the cause; Statement II is the effect.",
    difficulty: "hard",
  },
  {
    id: "ce-p28",
    topic: "cause-effect",
    title: "SBI PO 2023: Load Shedding — Common Cause for Rural and Urban",
    question:
      "Statement I: Several rural and semi-urban areas have been experiencing long hours of load shedding (power cuts). Statement II: The government has decided to extend power supply duration to urban areas. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: rural/semi-urban load shedding | II: government extends urban power supply",
        result: "Two events in the power distribution domain",
        explanation:
          "Statement I is about power shortage in rural areas; Statement II is about policy favouring urban areas.",
      },
      {
        id: 2,
        operation: "Test: Is II the cause of I?",
        expression:
          "Government prioritises urban power -> diverts from rural -> rural load shedding?",
        result: "Plausible but not the root cause",
        explanation:
          "Diverting power to urban areas could worsen rural shortages.",
      },
      {
        id: 3,
        operation: "Identify the common cause",
        expression:
          "Insufficient total power generation -> government prioritises urban areas (II) AND -> rural areas face load shedding (I)",
        result: "Both are effects of a common cause",
        explanation:
          "Insufficient power generation forces the government to ration supply, leading to both rural load shedding and extended urban supply as parallel policy outcomes.",
      },
    ],
    answer: "Both are effects of a common cause (insufficient power generation).",
    difficulty: "hard",
  },
  {
    id: "ce-p29",
    topic: "cause-effect",
    title: "UPSC CSAT 2023: Single-Teacher Schools and Dropouts",
    question:
      "Statement I: Many primary schools in rural areas are being run by a single teacher. Statement II: There has been a huge dropout rate from rural primary schools. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: single-teacher rural schools | II: high dropout rate",
        result: "Two events in the rural education domain",
        explanation:
          "Statement I is about staffing; Statement II is about student retention.",
      },
      {
        id: 2,
        operation: "Test: Is I the cause of II?",
        expression:
          "Single-teacher school -> poor quality education, less attention per student -> students drop out?",
        result: "Strong logical link",
        explanation:
          "Understaffed schools provide poor educational quality, directly contributing to student attrition.",
      },
      {
        id: 3,
        operation: "Verify reverse",
        expression: "High dropouts -> single teacher? Possible (fewer students = fewer teachers needed) but the primary direction is I -> II.",
        result: "I is the cause; II is the effect",
        explanation:
          "Inadequate staffing leads to poor teaching quality, which causes students to drop out.",
      },
    ],
    answer: "Statement I is the cause; Statement II is the effect.",
    difficulty: "hard",
  },
  {
    id: "ce-p30",
    topic: "cause-effect",
    title: "IBPS PO 2024: Tea Export and Coffee Demand — Independent Causes",
    question:
      "Statement I: India has surpassed the value of tea exports this year due to increased demand for quality tea in the European market. Statement II: There has been a surge in domestic demand for coffee over the last two years. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression:
          "I: tea exports increased (European demand) | II: domestic coffee demand surged",
        result: "Two events in the beverage market",
        explanation:
          "Statement I is about international tea trade; Statement II is about domestic coffee consumption.",
      },
      {
        id: 2,
        operation: "Test both directions",
        expression:
          "More tea exports -> more coffee demand? No direct link. More coffee demand -> more tea exports? No direct link.",
        result: "Neither causes the other",
        explanation:
          "These are distinct market trends in different beverages and different markets (international vs domestic).",
      },
      {
        id: 3,
        operation: "Check for common cause",
        expression:
          "Is there a single event causing both? Tea demand is driven by European preferences; coffee demand by domestic lifestyle changes. Independent drivers.",
        result: "Both are independent causes",
        explanation:
          "Tea export growth and coffee demand increase are unrelated market phenomena driven by separate factors.",
      },
    ],
    answer: "Both statements are independent causes with no relationship between them.",
    difficulty: "hard",
  },
]
