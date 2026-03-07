import type { ReasoningProblem } from "@/types/reasoning"

export const criticalReasoningProblems: ReasoningProblem[] = [
  // ── Easy (p1–p10) ─────────────────────────────────────────────

  {
    id: "cr-p1",
    topic: "critical-reasoning",
    title: "SSC CGL: Basic Assumption — Solar Energy",
    question:
      "Statement: 'The government should increase spending on solar energy to reduce dependence on coal.' Which is an assumption? (a) Solar energy can replace coal. (b) Coal is the only energy source. (c) The government has unlimited funds.",
    steps: [
      {
        id: 1,
        operation: "Identify premise and conclusion",
        expression:
          "Premise: Government should spend on solar. Conclusion: This will reduce coal dependence.",
        result: "The link is: solar can substitute for coal",
        explanation: "The argument assumes solar is a viable replacement.",
      },
      {
        id: 2,
        operation: "Apply negation test to (a)",
        expression:
          "Negate: 'Solar energy CANNOT replace coal.' Does argument collapse? Yes — spending on solar would be pointless.",
        result: "(a) passes negation test — it IS the assumption",
        explanation: "If solar cannot replace coal, the conclusion fails.",
      },
      {
        id: 3,
        operation: "Check (b) and (c)",
        expression:
          "(b) Coal is the only source — too extreme, argument does not require this. (c) Unlimited funds — not needed; just 'increase' spending.",
        result: "(b) and (c) are not assumptions",
        explanation:
          "Both are stronger claims than what the argument needs.",
      },
    ],
    answer: "(a) Solar energy can replace coal.",
    difficulty: "easy",
  },
  {
    id: "cr-p2",
    topic: "critical-reasoning",
    title: "IBPS PO: Simple Strengthener — Traffic Signal",
    question:
      "Argument: 'After the new traffic signal was installed, accidents at the junction decreased by 40%. Therefore, the traffic signal reduced accidents.' Which strengthens this argument? (a) No other changes were made at the junction. (b) The junction was repainted. (c) Fewer cars now use this route.",
    steps: [
      {
        id: 1,
        operation: "Identify the gap",
        expression:
          "Gap: Correlation (signal installed then accidents dropped) does not equal Causation. Alternative causes could exist.",
        result: "Need to eliminate alternative explanations",
        explanation: "The argument assumes the signal is the cause.",
      },
      {
        id: 2,
        operation: "Evaluate (a)",
        expression:
          "'No other changes' eliminates alternative causes",
        result: "STRENGTHENS — removes competing explanations",
        explanation:
          "If nothing else changed, the signal is more likely the cause.",
      },
      {
        id: 3,
        operation: "Evaluate (b) and (c)",
        expression:
          "(b) Repainting = alternative cause, weakens. (c) Fewer cars = alternative cause, weakens.",
        result: "(b) and (c) WEAKEN the argument",
        explanation:
          "Both provide alternative explanations for reduced accidents.",
      },
    ],
    answer: "(a) No other changes were made at the junction.",
    difficulty: "easy",
  },
  {
    id: "cr-p3",
    topic: "critical-reasoning",
    title: "SSC CHSL: Course of Action — Traffic Congestion",
    question:
      "Statement: 'Traffic congestion in the city has increased significantly.' Course of action I: Ban all private vehicles. Course of action II: Improve public transport. Which follows?",
    steps: [
      {
        id: 1,
        operation: "Test Course I: Ban all private vehicles",
        expression:
          "Is it feasible? Banning ALL private vehicles is extreme and impractical.",
        result: "NOT a valid course of action",
        explanation:
          "It fails the feasibility test — a total ban is unrealistic.",
      },
      {
        id: 2,
        operation: "Test Course II: Improve public transport",
        expression:
          "Is it feasible? Yes. Does it address the problem? Yes — better public transport reduces private vehicle usage.",
        result: "VALID course of action",
        explanation:
          "It is practical and directly addresses traffic congestion.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Only Course II follows",
        result: "Course of action II follows",
        explanation:
          "Course I is impractical; Course II is both feasible and relevant.",
      },
    ],
    answer: "Only Course of action II follows.",
    difficulty: "easy",
  },
  {
    id: "cr-p4",
    topic: "critical-reasoning",
    title: "SBI PO: Basic Weakener — Breakfast and Scores",
    question:
      "Argument: 'Students who eat breakfast score higher on exams. Therefore, eating breakfast improves exam performance.' Which weakens this? (a) Students who eat breakfast also study more. (b) Breakfast foods are nutritious. (c) Most toppers eat breakfast.",
    steps: [
      {
        id: 1,
        operation: "Identify the gap",
        expression:
          "Correlation between breakfast and scores is assumed to be causal",
        result: "Alternative cause would weaken",
        explanation:
          "If another factor explains both, the causal link breaks.",
      },
      {
        id: 2,
        operation: "Evaluate (a)",
        expression:
          "Students who eat breakfast also study more — studying could explain higher scores",
        result: "WEAKENS — provides an alternative cause",
        explanation:
          "The correlation might be due to study habits, not breakfast itself.",
      },
      {
        id: 3,
        operation: "Evaluate (b) and (c)",
        expression:
          "(b) Supports the argument (nutritious = might help). (c) Supports the argument (toppers eat breakfast).",
        result: "(b) and (c) strengthen, not weaken",
        explanation: "Neither provides an alternative explanation.",
      },
    ],
    answer: "(a) Students who eat breakfast also study more.",
    difficulty: "easy",
  },
  {
    id: "cr-p5",
    topic: "critical-reasoning",
    title: "UPSC CSAT: Inference from Facts — GDP Growth",
    question:
      "Statement: 'India's GDP grew by 7% this year, the highest among G20 nations.' Which can be inferred? (a) India's economy is the largest. (b) Other G20 nations grew by less than 7%. (c) India will grow by 7% next year too.",
    steps: [
      {
        id: 1,
        operation: "Evaluate (a)",
        expression:
          "Highest growth rate does not equal largest economy. China/USA could have larger GDP with slower growth.",
        result: "CANNOT be inferred",
        explanation:
          "Growth rate and absolute size are different measures.",
      },
      {
        id: 2,
        operation: "Evaluate (b)",
        expression:
          "'Highest among G20' means all other G20 nations grew less than 7%",
        result: "CAN be inferred — this is directly implied",
        explanation:
          "If India's 7% is the highest, others must be below 7%.",
      },
      {
        id: 3,
        operation: "Evaluate (c)",
        expression:
          "Past performance does not guarantee future results",
        result: "CANNOT be inferred",
        explanation: "No information about next year is given.",
      },
    ],
    answer: "(b) Other G20 nations grew by less than 7%.",
    difficulty: "easy",
  },
  {
    id: "cr-p6",
    topic: "critical-reasoning",
    title: "SSC CGL: Statement-Assumption — Probation Offer",
    question:
      "Statement: 'You are hereby appointed as a programmer with a probation period of one year and your performance will be reviewed at the end of the period for confirmation.' Assumptions: I. The performance of an individual generally is not known at the time of appointment. II. Generally an individual tries to prove his worth in the probation period. Which is implicit?",
    steps: [
      {
        id: 1,
        operation: "Test Assumption I via negation",
        expression:
          "Negate: 'Performance IS known at appointment.' If true, why have a probation period? The statement would be unnecessary.",
        result: "Assumption I is implicit",
        explanation:
          "Probation exists precisely because performance cannot be assessed upfront.",
      },
      {
        id: 2,
        operation: "Test Assumption II via negation",
        expression:
          "Negate: 'Individuals do NOT try to prove themselves during probation.' If true, why review for confirmation? The review assumes effort.",
        result: "Assumption II is implicit",
        explanation:
          "The confirmation review assumes the individual will demonstrate capability.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression: "Both assumptions are necessary for the statement to make sense",
        result: "Both I and II are implicit",
        explanation:
          "Probation assumes unknown initial performance (I) and expected effort (II).",
      },
    ],
    answer: "Both Assumption I and Assumption II are implicit.",
    difficulty: "easy",
  },
  {
    id: "cr-p7",
    topic: "critical-reasoning",
    title: "IBPS Clerk: Statement-Assumption — School Age",
    question:
      "Statement: 'It is desirable to put the child in school at the age of 5 or so.' Assumptions: I. At that age the child reaches appropriate level of development and is ready to learn. II. The schools do not admit children after six years of age. Which is implicit?",
    steps: [
      {
        id: 1,
        operation: "Test Assumption I",
        expression:
          "The word 'desirable' at age 5 implies the child is developmentally ready to learn at this age.",
        result: "Assumption I is implicit",
        explanation:
          "The recommendation rests on the child's developmental readiness.",
      },
      {
        id: 2,
        operation: "Test Assumption II",
        expression:
          "'At the age of 5 or so' — the phrase 'or so' indicates flexibility. Nothing suggests schools refuse children after age 6.",
        result: "Assumption II is NOT implicit",
        explanation:
          "The statement recommends an age, not a deadline imposed by schools.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression: "Only the developmental readiness assumption is needed",
        result: "Only Assumption I is implicit",
        explanation:
          "The statement is about optimal timing, not admission cutoffs.",
      },
    ],
    answer: "Only Assumption I is implicit.",
    difficulty: "easy",
  },
  {
    id: "cr-p8",
    topic: "critical-reasoning",
    title: "RRB NTPC: Statement-Assumption — Blue Tie Identification",
    question:
      "Statement: 'Blue tie would help identify our staff from others.' Assumptions: I. The company needs to identify its staff from others. II. Blue tie is the latest fashion. Which is implicit?",
    steps: [
      {
        id: 1,
        operation: "Test Assumption I",
        expression:
          "The phrase 'help identify our staff from others' presupposes identification is needed.",
        result: "Assumption I is implicit",
        explanation:
          "If identification were not needed, suggesting a blue tie would be pointless.",
      },
      {
        id: 2,
        operation: "Test Assumption II",
        expression:
          "Being 'the latest fashion' has nothing to do with identification. The tie is functional, not fashionable.",
        result: "Assumption II is NOT implicit",
        explanation:
          "Fashion relevance is irrelevant to the purpose of staff identification.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression: "Only the identification need is assumed",
        result: "Only Assumption I is implicit",
        explanation: "The statement is about utility, not fashion.",
      },
    ],
    answer: "Only Assumption I is implicit.",
    difficulty: "easy",
  },
  {
    id: "cr-p9",
    topic: "critical-reasoning",
    title: "SSC MTS: Statement-Assumption — Public Smoking",
    question:
      "Statement: 'Public smoking is an offence under the law.' Assumptions: I. Smoking harms the smoker's health. II. Smoke harms others' health in public spaces. Which is implicit?",
    steps: [
      {
        id: 1,
        operation: "Analyze why the law targets PUBLIC smoking",
        expression:
          "The word 'public' is key — the law specifically targets smoking in shared spaces, not private smoking.",
        result: "The concern is about harm to others, not just the smoker",
        explanation:
          "If only personal health mattered, all smoking would be banned, not just public smoking.",
      },
      {
        id: 2,
        operation: "Test Assumption I",
        expression:
          "Smoker's own health — this does not explain why only PUBLIC smoking is an offence. Private smoking would also be banned if this were the assumption.",
        result: "Assumption I is NOT implicit",
        explanation:
          "Personal health concern does not justify public-specific restriction.",
      },
      {
        id: 3,
        operation: "Test Assumption II",
        expression:
          "Harm to others in public spaces — this directly explains why PUBLIC smoking is targeted.",
        result: "Assumption II is implicit",
        explanation:
          "The public restriction logic implies concern for bystanders' health.",
      },
    ],
    answer: "Only Assumption II is implicit.",
    difficulty: "easy",
  },
  {
    id: "cr-p10",
    topic: "critical-reasoning",
    title: "IBPS PO: Statement-Assumption — Mother's Warning",
    question:
      "Statement: 'If you trouble me, I will slap you.' — A mother warns her child. Assumptions: I. With the warning, the child may stop troubling her. II. All children are basically naughty. Which is implicit?",
    steps: [
      {
        id: 1,
        operation: "Test Assumption I",
        expression:
          "Why does the mother warn? She expects the warning to have an effect — to deter the child from troubling her.",
        result: "Assumption I is implicit",
        explanation:
          "Warnings are given with the expectation of behavioral change.",
      },
      {
        id: 2,
        operation: "Test Assumption II",
        expression:
          "The statement is about ONE specific child at ONE specific moment. It says nothing about ALL children.",
        result: "Assumption II is NOT implicit",
        explanation:
          "A specific incident cannot be generalized to all children.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression: "Only the deterrence assumption holds",
        result: "Only Assumption I is implicit",
        explanation:
          "The mother assumes her warning will change this child's behavior.",
      },
    ],
    answer: "Only Assumption I is implicit.",
    difficulty: "easy",
  },

  // ── Medium (p11–p20) ──────────────────────────────────────────

  {
    id: "cr-p11",
    topic: "critical-reasoning",
    title: "SSC CGL: Hidden Assumption — IIT Graduates",
    question:
      "Argument: 'Company X should hire only IIT graduates because they are the best engineers.' What is the hidden assumption?",
    steps: [
      {
        id: 1,
        operation: "Identify premise and conclusion",
        expression:
          "Premise: IIT graduates are the best engineers. Conclusion: Hire only IIT graduates.",
        result: "Gap: Being the best engineers = being the best employees",
        explanation:
          "The argument assumes engineering skill translates to job performance.",
      },
      {
        id: 2,
        operation: "Identify the assumption",
        expression:
          "The company needs the best engineers (not other skills), and IIT graduates will perform well at this specific company.",
        result:
          "Assumption: The company's needs are best met by top engineering talent",
        explanation:
          "The argument ignores soft skills, domain fit, and cost considerations.",
      },
      {
        id: 3,
        operation: "Apply negation test",
        expression:
          "Negate: 'The company does NOT need the best engineers.' If true, hiring only IIT grads is not justified.",
        result: "Argument collapses — confirms this is the assumption",
        explanation: "The negation test validates the assumption.",
      },
    ],
    answer:
      "The company's primary need is top engineering talent, and being the best engineer translates to being the best employee.",
    difficulty: "medium",
  },
  {
    id: "cr-p12",
    topic: "critical-reasoning",
    title: "IBPS PO: Strengthen with Data — Plastic Ban",
    question:
      "Argument: 'City A banned plastic bags. Plastic waste in landfills dropped 30%. The ban was effective.' Which MOST strengthens? (a) City B also banned plastic bags. (b) No new recycling programs were introduced during this period. (c) Plastic bag manufacturers protested.",
    steps: [
      {
        id: 1,
        operation: "Identify the gap",
        expression:
          "Need to confirm the ban (not something else) caused the 30% drop",
        result: "Eliminate alternative explanations",
        explanation: "The argument claims a causal relationship.",
      },
      {
        id: 2,
        operation: "Evaluate (b)",
        expression:
          "No new recycling programs means the drop was not due to recycling",
        result:
          "MOST strengthens — eliminates the biggest alternative explanation",
        explanation:
          "Recycling programs would be the most obvious alternative cause.",
      },
      {
        id: 3,
        operation: "Evaluate (a) and (c)",
        expression:
          "(a) Another city's action is irrelevant to City A's result. (c) Protests do not address effectiveness.",
        result: "Neither strengthens the argument about City A",
        explanation: "Both are tangential to the causal claim.",
      },
    ],
    answer:
      "(b) No new recycling programs were introduced during this period.",
    difficulty: "medium",
  },
  {
    id: "cr-p13",
    topic: "critical-reasoning",
    title: "SBI PO: Weaken a Policy — Junk Food Tax",
    question:
      "Argument: 'The government should increase taxes on junk food to improve public health.' Which weakens? (a) People will switch to home-cooked meals. (b) People will buy junk food from neighboring states with lower taxes. (c) Junk food is high in calories.",
    steps: [
      {
        id: 1,
        operation: "Identify the gap",
        expression:
          "Assumes: higher price leads to less junk food consumption leads to better health",
        result: "If consumption does not decrease, the policy fails",
        explanation: "The argument depends on reduced consumption.",
      },
      {
        id: 2,
        operation: "Evaluate (b)",
        expression:
          "People buying from neighboring states = consumption does not decrease, just shifts location",
        result: "WEAKENS — policy will not reduce actual consumption",
        explanation: "Tax avoidance undermines the policy's goal.",
      },
      {
        id: 3,
        operation: "Evaluate (a) and (c)",
        expression:
          "(a) Supports the argument (switching to healthy food). (c) Supports the premise (junk food is unhealthy).",
        result: "Both strengthen, not weaken",
        explanation:
          "Neither provides a reason the policy would fail.",
      },
    ],
    answer:
      "(b) People will buy junk food from neighboring states with lower taxes.",
    difficulty: "medium",
  },
  {
    id: "cr-p14",
    topic: "critical-reasoning",
    title: "UPSC CSAT: Statement-Assumption — Airline Flights",
    question:
      "Statement: 'The airline should add more flights on the Delhi-Mumbai route to meet rising demand.' Assumptions: I. There is indeed rising demand on this route. II. The airline has sufficient aircraft. Which is implicit?",
    steps: [
      {
        id: 1,
        operation: "Test Assumption I",
        expression:
          "Negate: 'There is NO rising demand.' If true, adding flights is unjustified.",
        result: "Assumption I is VALID",
        explanation:
          "The entire premise rests on rising demand being real.",
      },
      {
        id: 2,
        operation: "Test Assumption II",
        expression:
          "Negate: 'The airline does NOT have sufficient aircraft.' The statement says 'should add' — a recommendation that implies the airline can execute it.",
        result: "Assumption II is also VALID",
        explanation:
          "A recommendation assumes operational capacity to execute.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression:
          "Both assumptions are necessary for the recommendation to be meaningful",
        result: "Both I and II are valid assumptions",
        explanation:
          "In exam context, both demand (I) and capacity (II) are implicit.",
      },
    ],
    answer: "Both Assumption I and Assumption II are valid.",
    difficulty: "medium",
  },
  {
    id: "cr-p15",
    topic: "critical-reasoning",
    title: "SSC CGL: Conclusion from Facts — Training Assessment",
    question:
      "Facts: 'All employees who completed the training scored above 80% in the assessment. Rajesh scored 65%.' Which must be true? (a) Rajesh did not complete the training. (b) Rajesh is a poor performer. (c) The training was not useful for Rajesh.",
    steps: [
      {
        id: 1,
        operation: "Apply contrapositive logic",
        expression:
          "If training completed then score > 80%. Contrapositive: score <= 80% then training NOT completed.",
        result:
          "Rajesh scored 65% (<=80%) therefore Rajesh did not complete the training",
        explanation:
          "The contrapositive of a true statement is always true.",
      },
      {
        id: 2,
        operation: "Evaluate (a)",
        expression: "This matches the contrapositive conclusion",
        result: "(a) MUST be true",
        explanation:
          "Rajesh cannot have completed the training and scored 65%.",
      },
      {
        id: 3,
        operation: "Evaluate (b) and (c)",
        expression:
          "(b) 'Poor performer' — not stated, 65% could be good without training. (c) 'Training not useful' — we cannot know since he did not complete it.",
        result: "Neither (b) nor (c) must be true",
        explanation: "Both go beyond what the facts support.",
      },
    ],
    answer: "(a) Rajesh did not complete the training.",
    difficulty: "medium",
  },
  {
    id: "cr-p16",
    topic: "critical-reasoning",
    title: "IBPS PO: Course of Action — Malaria Outbreak",
    question:
      "Statement: 'A large number of people in ward X of the city are diagnosed to be suffering from a fatal malaria type.' Courses of action: I. Municipal authority should conduct extensive fumigation in ward X. II. People should be advised to avoid mosquito bites. Which follows?",
    steps: [
      {
        id: 1,
        operation: "Test Course I: Fumigation",
        expression:
          "Is it feasible? Yes — municipal authorities can fumigate. Does it address the problem? Yes — kills mosquitoes that spread malaria.",
        result: "Course I is VALID",
        explanation:
          "Fumigation directly targets the cause (mosquitoes) of malaria.",
      },
      {
        id: 2,
        operation: "Test Course II: Advise avoidance",
        expression:
          "Is it feasible? Yes — public advisories are standard. Does it address the problem? Yes — prevention through personal protection.",
        result: "Course II is VALID",
        explanation:
          "Advising people helps them take precautions until fumigation eliminates the threat.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression:
          "Both are practical and complementary approaches to the crisis",
        result: "Both I and II follow",
        explanation:
          "Prevention (II) and elimination (I) are complementary strategies.",
      },
    ],
    answer: "Both Course of action I and II follow.",
    difficulty: "medium",
  },
  {
    id: "cr-p17",
    topic: "critical-reasoning",
    title: "SSC CGL: Statement-Argument — Export Encouragement",
    question:
      "Statement: 'Should India encourage exports, when most things are insufficient for internal use?' Arguments: I. Yes, we have to earn foreign exchange to pay for our imports. II. No, even selective encouragement would lead to shortages. Which is strong?",
    steps: [
      {
        id: 1,
        operation: "Evaluate Argument I",
        expression:
          "India needs foreign exchange to import essential goods. Exporting surplus goods generates this foreign exchange.",
        result: "Argument I is STRONG",
        explanation:
          "The need for foreign exchange is a valid economic justification.",
      },
      {
        id: 2,
        operation: "Evaluate Argument II",
        expression:
          "'Even selective encouragement' — this is an absolute claim. Selective export of surplus items need not cause domestic shortages.",
        result: "Argument II is WEAK",
        explanation:
          "The argument is too sweeping; selective exports can avoid shortages.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression: "Only the foreign exchange argument holds logically",
        result: "Only Argument I is strong",
        explanation:
          "Argument I provides valid justification; II overgeneralizes.",
      },
    ],
    answer: "Only Argument I is strong.",
    difficulty: "medium",
  },
  {
    id: "cr-p18",
    topic: "critical-reasoning",
    title: "RRB NTPC: Course of Action — Drought Response",
    question:
      "Statement: 'Severe drought is reported to have set in several parts of the country.' Courses of action: I. Government should provide financial assistance to affected areas. II. Food, water, and fodder should be sent immediately to save people and cattle. Which follows?",
    steps: [
      {
        id: 1,
        operation: "Test Course I: Financial assistance",
        expression:
          "Is it feasible? Partially — during drought, money alone cannot help if supplies are unavailable. Is it urgent? Not the most immediate priority.",
        result: "Course I is NOT the best immediate response",
        explanation:
          "Financial aid is slower and less directly helpful than physical supplies during drought.",
      },
      {
        id: 2,
        operation: "Test Course II: Send food, water, fodder",
        expression:
          "Is it feasible? Yes. Is it urgent? Yes — people and cattle need sustenance immediately during drought.",
        result: "Course II is VALID — directly addresses survival needs",
        explanation:
          "Immediate supply of essentials is the primary emergency response.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression:
          "During a disaster, immediate physical relief trumps financial assistance",
        result: "Only Course II follows",
        explanation:
          "Financial assistance may help later, but immediate survival needs take priority.",
      },
    ],
    answer: "Only Course of action II follows.",
    difficulty: "medium",
  },
  {
    id: "cr-p19",
    topic: "critical-reasoning",
    title: "UPSC CSAT: Statement-Assumption — Conveyance Allowance",
    question:
      "Statement: 'In order to bring punctuality in our office, we must provide conveyance allowance to our employees.' Assumptions: I. Conveyance allowance will not help in bringing punctuality. II. Discipline and reward should always go hand in hand. Which is implicit?",
    steps: [
      {
        id: 1,
        operation: "Test Assumption I",
        expression:
          "The statement says conveyance allowance WILL bring punctuality. Assumption I says it will NOT. This directly contradicts the statement.",
        result: "Assumption I is NOT implicit — it contradicts the statement",
        explanation:
          "An assumption cannot negate the very premise it supports.",
      },
      {
        id: 2,
        operation: "Test Assumption II",
        expression:
          "The statement links a reward (conveyance allowance) with a discipline outcome (punctuality). This implies rewards drive disciplined behavior.",
        result: "Assumption II is implicit",
        explanation:
          "The recommendation assumes that reward mechanisms motivate discipline.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression: "Only the reward-discipline link is assumed",
        result: "Only Assumption II is implicit",
        explanation:
          "I contradicts the statement; II captures the underlying logic.",
      },
    ],
    answer: "Only Assumption II is implicit.",
    difficulty: "medium",
  },
  {
    id: "cr-p20",
    topic: "critical-reasoning",
    title: "SBI PO: Course of Action — RBI Directive Violation",
    question:
      "Statement: 'Exporters allege commercial banks are violating Reserve Bank of India directive on post-shipment export credit.' Courses of action: I. Officers in commercial banks should be suspended. II. RBI should stop issuing such directives. Which follows?",
    steps: [
      {
        id: 1,
        operation: "Test Course I: Suspend officers",
        expression:
          "Allegation alone does not justify suspension. First, verify the allegation, then take proportionate action.",
        result: "Course I is EXTREME — does NOT follow",
        explanation:
          "Suspension without investigation is disproportionate and premature.",
      },
      {
        id: 2,
        operation: "Test Course II: Stop issuing directives",
        expression:
          "The problem is violation of directives, not the directives themselves. Stopping directives removes regulation entirely.",
        result: "Course II does NOT follow — it addresses the wrong problem",
        explanation:
          "The solution should be enforcing compliance, not removing the rules.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression:
          "Neither course is appropriate; the correct action would be investigation and enforcement",
        result: "Neither Course I nor II follows",
        explanation:
          "Both are either extreme or misdirected responses to the problem.",
      },
    ],
    answer: "Neither Course of action I nor II follows.",
    difficulty: "medium",
  },

  // ── Hard (p21–p30) ────────────────────────────────────────────

  {
    id: "cr-p21",
    topic: "critical-reasoning",
    title: "UPSC CSAT: Multi-Step Assumption Chain — Electric Buses",
    question:
      "Argument: 'City should invest in electric buses because they will reduce air pollution, which will decrease respiratory diseases, ultimately reducing healthcare costs.' Identify the weakest assumption in this chain.",
    steps: [
      {
        id: 1,
        operation: "Identify the assumption chain",
        expression:
          "A1: Electric buses will replace diesel buses. A2: Reduced bus emissions cause significant air quality improvement. A3: Better air leads to fewer respiratory diseases. A4: Fewer diseases lead to lower healthcare costs.",
        result: "Four assumptions in the chain",
        explanation: "Each link relies on an assumption.",
      },
      {
        id: 2,
        operation: "Evaluate weakest link",
        expression:
          "A2 is weakest: buses may be a small fraction of total pollution. Even replacing all buses may not significantly improve air quality if industrial or vehicular pollution dominates.",
        result: "A2 is the weakest assumption",
        explanation:
          "Bus emissions may be a minor contributor to total air pollution.",
      },
      {
        id: 3,
        operation: "State answer",
        expression:
          "The assumption that replacing buses will significantly improve air quality is weakest",
        result: "Buses may contribute minimally to total pollution",
        explanation:
          "If most pollution comes from factories, cars, and two-wheelers, electric buses alone will not meaningfully reduce pollution.",
      },
    ],
    answer:
      "The weakest assumption is that electric buses will significantly improve air quality (buses may be a minor pollution source).",
    difficulty: "hard",
  },
  {
    id: "cr-p22",
    topic: "critical-reasoning",
    title: "UPSC CSAT: Paradox Resolution — Education Budget",
    question:
      "Paradox: 'Country X increased its education budget by 50%, yet literacy rates declined.' Which best resolves this paradox? (a) The population grew faster than the budget increase. (b) Teachers received higher salaries. (c) New schools were built.",
    steps: [
      {
        id: 1,
        operation: "Understand the paradox",
        expression:
          "More spending should improve literacy, but the opposite happened",
        result:
          "Need an explanation for why more money led to worse results",
        explanation:
          "Something is counteracting the increased spending.",
      },
      {
        id: 2,
        operation: "Evaluate (a)",
        expression:
          "If population grew > 50%, per-capita spending actually decreased despite total budget increase",
        result:
          "RESOLVES the paradox — per-capita investment actually fell",
        explanation:
          "The budget increase was swallowed by population growth.",
      },
      {
        id: 3,
        operation: "Evaluate (b) and (c)",
        expression:
          "(b) Higher salaries = part of spending, does not explain decline. (c) New schools = should help literacy, deepens the paradox.",
        result: "Neither resolves the paradox",
        explanation:
          "Both are consistent with improved literacy, not declining.",
      },
    ],
    answer: "(a) The population grew faster than the budget increase.",
    difficulty: "hard",
  },
  {
    id: "cr-p23",
    topic: "critical-reasoning",
    title: "UPSC CSAT: Triple Assumption — Semiconductor Policy",
    question:
      "Statement: 'India should develop its own semiconductor fabrication facilities to reduce dependence on imports.' Assumptions: I. India currently imports most of its semiconductors. II. It is technically possible for India to build such facilities. III. The cost of building these facilities is justified. Which are implicit?",
    steps: [
      {
        id: 1,
        operation: "Test Assumption I",
        expression:
          "Negate: 'India does NOT import most semiconductors.' If true, there is no dependence to reduce.",
        result: "Assumption I is VALID — presupposes import dependence",
        explanation:
          "Without existing dependence, the recommendation is baseless.",
      },
      {
        id: 2,
        operation: "Test Assumption II",
        expression:
          "Negate: 'It is NOT technically possible.' If true, the recommendation is futile.",
        result: "Assumption II is VALID — technical feasibility is assumed",
        explanation: "An impossible recommendation would not be made.",
      },
      {
        id: 3,
        operation: "Test Assumption III",
        expression:
          "Negate: 'The cost is NOT justified.' The statement says 'should develop' — this implies the benefits outweigh costs.",
        result: "Assumption III is VALID — cost-benefit is implicitly assumed",
        explanation:
          "A policy recommendation assumes the action is worthwhile.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "All three assumptions are necessary",
        result: "I, II, and III are all valid assumptions",
        explanation:
          "Each is necessary for the statement to be meaningful.",
      },
    ],
    answer: "All three assumptions (I, II, III) are valid.",
    difficulty: "hard",
  },
  {
    id: "cr-p24",
    topic: "critical-reasoning",
    title: "SSC CGL: Evaluate an Argument — Remote Work Productivity",
    question:
      "Argument: 'Remote work increases productivity because a study showed remote workers at Company X logged 15% more hours than office workers.' Identify the flaw.",
    steps: [
      {
        id: 1,
        operation: "Identify the claim",
        expression:
          "Claim: Remote work increases productivity. Evidence: More hours logged.",
        result: "The argument equates hours with productivity",
        explanation: "More hours does not mean more productive output.",
      },
      {
        id: 2,
        operation: "Identify the primary flaw",
        expression:
          "Productivity = output per unit time. Logging more hours could mean lower efficiency (same output in more time) or inability to disconnect from work.",
        result:
          "Flaw: Confusing quantity of work (hours) with quality (productivity)",
        explanation:
          "The evidence does not measure actual output or efficiency.",
      },
      {
        id: 3,
        operation: "Identify secondary flaw",
        expression:
          "Single company study (Company X) may not generalize to all companies",
        result:
          "Flaw: Small/biased sample — generalization from one company",
        explanation: "Company X's results may not be representative.",
      },
    ],
    answer:
      "The argument confuses hours worked with productivity (output per hour) and generalizes from a single company.",
    difficulty: "hard",
  },
  {
    id: "cr-p25",
    topic: "critical-reasoning",
    title: "IBPS PO: Triple Course of Action — Reservoir Crisis",
    question:
      "Statement: 'Water levels in the city's reservoir have dropped to 20% due to consecutive years of low rainfall.' Courses of action: I. Ration water supply to residential areas. II. Construct a new dam. III. Promote rainwater harvesting in all buildings. Which follow?",
    steps: [
      {
        id: 1,
        operation: "Test Course I: Ration water",
        expression:
          "Feasible? Yes. Addresses problem? Yes — reduces consumption when supply is critically low.",
        result: "Course I is a VALID short-term measure",
        explanation:
          "Rationing directly addresses the immediate water shortage.",
      },
      {
        id: 2,
        operation: "Test Course II: Construct new dam",
        expression:
          "Feasible? Partially — dam construction takes years. Addresses current problem? Not immediately.",
        result: "Course II is valid as a LONG-TERM measure",
        explanation:
          "It does not help the current crisis but prevents future ones.",
      },
      {
        id: 3,
        operation: "Test Course III: Rainwater harvesting",
        expression:
          "Feasible? Yes. Addresses problem? Yes — augments water supply and reduces reservoir dependence.",
        result: "Course III is VALID as a medium-term measure",
        explanation:
          "Rainwater harvesting supplements reservoir supply over time.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression:
          "All three are valid at different time horizons: I (short), III (medium), II (long)",
        result: "All three courses of action follow",
        explanation:
          "Each addresses the problem through different time frames.",
      },
    ],
    answer: "All three courses of action follow.",
    difficulty: "hard",
  },
  {
    id: "cr-p26",
    topic: "critical-reasoning",
    title: "UPSC CSAT: Statement-Argument — Drug Testing in India",
    question:
      "Statement: 'Should all drugs patented and manufactured in Western countries be tested before licensing for sale in India?' Arguments: I. Yes, many such drugs require different doses and duration for Indian population due to different body types. II. No, this is just not feasible and hence cannot be implemented. Which is strong?",
    steps: [
      {
        id: 1,
        operation: "Evaluate Argument I",
        expression:
          "Physiological differences between populations are well-documented. Dosing may need adjustment for Indian demographics.",
        result: "Argument I is STRONG",
        explanation:
          "Citizen health is a primary concern; testing ensures safety for the local population.",
      },
      {
        id: 2,
        operation: "Evaluate Argument II",
        expression:
          "'Not feasible' — this is a vague assertion. Many countries test imported drugs. India has regulatory infrastructure (CDSCO).",
        result: "Argument II is WEAK",
        explanation:
          "The claim of infeasibility is unsupported and demonstrably false.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression: "Only the health-safety argument is logically sound",
        result: "Only Argument I is strong",
        explanation:
          "Health concerns are valid; the feasibility objection is baseless.",
      },
    ],
    answer: "Only Argument I is strong.",
    difficulty: "hard",
  },
  {
    id: "cr-p27",
    topic: "critical-reasoning",
    title: "SSC CGL: Complex Weakener — Organic Farming",
    question:
      "Argument: 'Organic farming produces healthier food because it avoids synthetic pesticides. Therefore, the government should subsidize organic farming to improve national health outcomes.' Which MOST weakens? (a) Organic food costs 3x more than conventional food. (b) Organic farms produce 30% less yield per hectare. (c) Studies show no significant nutritional difference between organic and conventional produce. (d) Some organic farms use natural pesticides that are also harmful.",
    steps: [
      {
        id: 1,
        operation: "Identify the core claim",
        expression:
          "The argument rests on: organic = healthier food. If this premise is false, the entire argument collapses.",
        result: "Attack the premise that organic food is healthier",
        explanation:
          "The policy recommendation depends entirely on health benefits.",
      },
      {
        id: 2,
        operation: "Evaluate (c) and (d)",
        expression:
          "(c) No nutritional difference — directly undermines 'healthier food' claim. (d) Harmful natural pesticides — undermines 'avoids harmful chemicals' claim.",
        result: "Both (c) and (d) attack the core premise",
        explanation:
          "(c) is strongest because it uses scientific evidence to deny the health benefit entirely.",
      },
      {
        id: 3,
        operation: "Evaluate (a) and (b)",
        expression:
          "(a) Cost is a practical concern but does not deny health benefits. (b) Lower yield is an economic issue, not a health one.",
        result: "(a) and (b) do not weaken the health argument",
        explanation:
          "They raise implementation issues, not logical flaws in the health claim.",
      },
      {
        id: 4,
        operation: "Select strongest weakener",
        expression:
          "(c) Most directly undermines the central premise of health benefits",
        result: "(c) is the MOST weakening option",
        explanation:
          "If there is no health difference, the entire justification for subsidies disappears.",
      },
    ],
    answer:
      "(c) Studies show no significant nutritional difference between organic and conventional produce.",
    difficulty: "hard",
  },
  {
    id: "cr-p28",
    topic: "critical-reasoning",
    title: "IBPS PO: Course of Action — Airline Losses",
    question:
      "Statement: 'Since its launch in 1981, airline Vayudoot has accumulated losses amounting to Rs 153 crore.' Courses of action: I. Vayudoot should reduce wasteful expenditure and increase passenger fares. II. Government should provide Rs 300 crore to make the airline economically viable. Which follows?",
    steps: [
      {
        id: 1,
        operation: "Test Course I: Reduce waste and increase fares",
        expression:
          "Is it feasible? Yes — cost-cutting and revenue increase are standard business remedies. Does it address the problem? Yes — directly tackles the source of losses.",
        result: "Course I is VALID — addresses root causes",
        explanation:
          "Reducing expenditure and increasing revenue is the standard approach to losses.",
      },
      {
        id: 2,
        operation: "Test Course II: Provide Rs 300 crore",
        expression:
          "Is it feasible? Questionable — throwing money at a loss-making entity without fixing the root cause is wasteful. Rs 300 crore is nearly double the accumulated loss.",
        result: "Course II does NOT follow — it is a bailout without reform",
        explanation:
          "Capital injection without operational changes will likely lead to more losses.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression: "Only operational reform is a valid course of action",
        result: "Only Course I follows",
        explanation:
          "Fixing the business model is necessary; bailouts alone are not sufficient.",
      },
    ],
    answer: "Only Course of action I follows.",
    difficulty: "hard",
  },
  {
    id: "cr-p29",
    topic: "critical-reasoning",
    title: "UPSC CSAT: Statement-Argument — Solar Energy Policy",
    question:
      "Statement: 'Should India make efforts to harness solar energy to fulfill its energy requirements?' Arguments: I. Yes, most of the energy sources used at present are exhaustible. II. No, harnessing solar energy requires a lot of capital, which India lacks. Which is strong?",
    steps: [
      {
        id: 1,
        operation: "Evaluate Argument I",
        expression:
          "Current primary sources (coal, oil, gas) ARE exhaustible. Solar is renewable and inexhaustible. Long-term energy security requires renewable sources.",
        result: "Argument I is STRONG",
        explanation:
          "The exhaustibility of current sources is a fact that supports transitioning to solar.",
      },
      {
        id: 2,
        operation: "Evaluate Argument II",
        expression:
          "Solar energy costs have dropped dramatically. India has received significant international investment for solar. The 'India lacks capital' claim is outdated and vague.",
        result: "Argument II is WEAK",
        explanation:
          "Solar energy has become cost-effective, and capital constraints can be overcome through multiple financing mechanisms.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression: "Energy sustainability outweighs capital concerns",
        result: "Only Argument I is strong",
        explanation:
          "The exhaustibility argument is factually strong; the capital argument is factually weak.",
      },
    ],
    answer: "Only Argument I is strong.",
    difficulty: "hard",
  },
  {
    id: "cr-p30",
    topic: "critical-reasoning",
    title: "UPSC CSAT: Complex Inference — Industrial vs Agricultural Economy",
    question:
      "Passage: 'Country Y's industrial output grew by 12% while agricultural output declined by 8%. Industrial sector now contributes 55% of GDP compared to 35% from agriculture. The government announced a new irrigation scheme costing Rs 10,000 crore.' Which can be validly inferred? (a) Country Y is transitioning from agricultural to industrial economy. (b) The irrigation scheme will reverse the agricultural decline. (c) Industrial growth caused agricultural decline. (d) The government considers agricultural decline a problem worth addressing.",
    steps: [
      {
        id: 1,
        operation: "Evaluate (a)",
        expression:
          "Industry at 55% and growing, agriculture at 35% and declining — classic transition pattern. But one year's data is not a 'transition.'",
        result:
          "(a) is LIKELY but not CERTAIN from one year's data",
        explanation:
          "A transition implies a sustained trend, not one data point.",
      },
      {
        id: 2,
        operation: "Evaluate (d)",
        expression:
          "Government announced Rs 10,000 crore irrigation scheme AFTER agricultural decline. Spending this much on irrigation directly signals concern about agriculture.",
        result: "(d) CAN be validly inferred",
        explanation:
          "Significant spending on agriculture implies the government sees the decline as a problem.",
      },
      {
        id: 3,
        operation: "Evaluate (b) and (c)",
        expression:
          "(b) 'Will reverse' — cannot be inferred; irrigation may or may not work. (c) 'Industrial growth caused agricultural decline' — correlation, not causation; no evidence of causal link.",
        result: "Neither (b) nor (c) can be validly inferred",
        explanation:
          "Both make causal claims unsupported by the passage.",
      },
      {
        id: 4,
        operation: "Select strongest inference",
        expression: "(d) is the safest and most directly supported inference",
        result: "(d) is the valid inference",
        explanation:
          "Government action (spending) directly indicates recognition of a problem.",
      },
    ],
    answer:
      "(d) The government considers agricultural decline a problem worth addressing.",
    difficulty: "hard",
  },
]
