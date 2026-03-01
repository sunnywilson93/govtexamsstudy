import type { BodySystem } from "@/types/science"

export const bodySystems: BodySystem[] = [
  {
    id: "digestive",
    name: "Digestive System",
    description:
      "The digestive system breaks down food into nutrients that the body uses for energy, growth, and cell repair. It includes the alimentary canal and accessory organs.",
    organs: [
      { id: "mouth", name: "Mouth (Buccal Cavity)", function: "Mechanical digestion by teeth and chemical digestion by salivary amylase (starch to maltose)", position: { x: 50, y: 10 } },
      { id: "oesophagus", name: "Oesophagus", function: "Transports food from mouth to stomach via peristalsis", position: { x: 50, y: 25 } },
      { id: "stomach", name: "Stomach", function: "Secretes HCl and pepsin for protein digestion. Churns food into chyme", position: { x: 45, y: 40 } },
      { id: "small-intestine", name: "Small Intestine", function: "Major site of digestion and absorption. Divided into duodenum, jejunum, and ileum. Villi increase surface area", position: { x: 50, y: 55 } },
      { id: "large-intestine", name: "Large Intestine", function: "Absorbs water and electrolytes. Houses gut bacteria. Forms and stores faeces", position: { x: 55, y: 70 } },
    ],
    diseases: [
      {
        id: "jaundice",
        name: "Jaundice",
        system: "digestive",
        cause: "Excess bilirubin in blood due to liver dysfunction or bile duct obstruction",
        symptoms: ["Yellowing of skin and eyes", "Dark urine", "Fatigue", "Abdominal pain"],
        examRelevance: "Frequently asked in GK — caused by liver malfunction; bilirubin is a breakdown product of haemoglobin",
      },
      {
        id: "diarrhoea",
        name: "Diarrhoea",
        system: "digestive",
        cause: "Bacterial, viral or parasitic infection of the intestines; contaminated food/water",
        symptoms: ["Loose watery stools", "Dehydration", "Abdominal cramps", "Nausea"],
        examRelevance: "ORS (Oral Rehydration Solution) is the primary treatment — a common exam question",
      },
      {
        id: "peptic-ulcer",
        name: "Peptic Ulcer",
        system: "digestive",
        cause: "Helicobacter pylori bacteria or excessive NSAID use eroding the stomach lining",
        symptoms: ["Burning stomach pain", "Bloating", "Heartburn", "Nausea"],
        examRelevance: "Barry Marshall and Robin Warren won the Nobel Prize (2005) for discovering H. pylori as the cause",
      },
    ],
    examFacts: [
      "Salivary amylase (ptyalin) acts in the mouth at pH 6.8 — digests starch to maltose",
      "HCl in stomach provides pH 1.5-2 — kills bacteria and activates pepsinogen to pepsin",
      "Bile salts from the liver emulsify fats (not a digestive enzyme — no chemical digestion by bile)",
      "Pancreatic juice contains trypsin, lipase, and amylase — acts in duodenum",
      "Villi and microvilli in the small intestine increase absorption surface area to ~250 sq m",
    ],
  },
  {
    id: "circulatory",
    name: "Circulatory System",
    description:
      "The circulatory system transports blood, nutrients, oxygen, and waste products throughout the body. It consists of the heart, blood vessels, and blood.",
    organs: [
      { id: "heart", name: "Heart", function: "Four-chambered muscular pump. Pumps oxygenated blood to body and deoxygenated blood to lungs", position: { x: 48, y: 30 } },
      { id: "arteries", name: "Arteries", function: "Carry oxygenated blood away from heart (except pulmonary artery). Thick, elastic walls", position: { x: 40, y: 35 } },
      { id: "veins", name: "Veins", function: "Carry deoxygenated blood towards heart (except pulmonary vein). Have valves to prevent backflow", position: { x: 60, y: 35 } },
      { id: "capillaries", name: "Capillaries", function: "Thin-walled exchange vessels. Site of gas, nutrient, and waste exchange between blood and tissues", position: { x: 50, y: 50 } },
    ],
    diseases: [
      {
        id: "hypertension",
        name: "Hypertension (High Blood Pressure)",
        system: "circulatory",
        cause: "Narrowing of arteries, high salt intake, obesity, stress, genetic factors",
        symptoms: ["Often asymptomatic (silent killer)", "Headache", "Shortness of breath", "Chest pain"],
        examRelevance: "Normal BP: 120/80 mmHg. Hypertension is called the 'silent killer' — common exam question",
      },
      {
        id: "anaemia",
        name: "Anaemia",
        system: "circulatory",
        cause: "Iron deficiency, vitamin B12 deficiency, or genetic conditions (sickle cell, thalassemia)",
        symptoms: ["Fatigue", "Pale skin", "Shortness of breath", "Dizziness"],
        examRelevance: "Iron-deficiency anaemia is the most common nutritional deficiency globally. Sickle cell anaemia is autosomal recessive",
      },
    ],
    examFacts: [
      "Human heart has 4 chambers: 2 atria (upper) and 2 ventricles (lower)",
      "Blood group system: A, B, AB (universal recipient), O (universal donor) — discovered by Karl Landsteiner",
      "Rh factor discovered by Landsteiner and Wiener. Rh-negative mother with Rh-positive foetus can cause erythroblastosis fetalis",
      "Double circulation: systemic (body) + pulmonary (lungs)",
      "RBCs (erythrocytes) have no nucleus in mammals. Lifespan ~120 days. Produced in bone marrow",
    ],
  },
  {
    id: "respiratory",
    name: "Respiratory System",
    description:
      "The respiratory system facilitates gas exchange — oxygen is inhaled into the lungs and carbon dioxide is exhaled. It includes the nasal passages, trachea, bronchi, and lungs.",
    organs: [
      { id: "nasal-cavity", name: "Nasal Cavity", function: "Filters, warms, and humidifies inhaled air. Mucus and cilia trap dust particles", position: { x: 50, y: 8 } },
      { id: "trachea", name: "Trachea (Windpipe)", function: "Conducts air to lungs. Supported by C-shaped cartilage rings", position: { x: 50, y: 20 } },
      { id: "lungs", name: "Lungs", function: "Primary organs of respiration. Contain ~300 million alveoli for gas exchange", position: { x: 50, y: 32 } },
      { id: "diaphragm", name: "Diaphragm", function: "Muscular sheet below lungs. Contracts during inhalation (flattens), relaxes during exhalation (dome-shaped)", position: { x: 50, y: 42 } },
    ],
    diseases: [
      {
        id: "asthma",
        name: "Asthma",
        system: "respiratory",
        cause: "Allergic reaction causing inflammation and narrowing of airways (bronchospasm)",
        symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing"],
        examRelevance: "Triggered by allergens, pollution, cold air. Bronchodilators (inhalers) used for immediate relief",
      },
      {
        id: "tuberculosis",
        name: "Tuberculosis (TB)",
        system: "respiratory",
        cause: "Mycobacterium tuberculosis bacteria. Airborne transmission",
        symptoms: ["Chronic cough (>2 weeks)", "Blood-stained sputum", "Weight loss", "Night sweats"],
        examRelevance: "BCG vaccine provides partial protection. India has the highest TB burden globally. DOTS (Directly Observed Treatment Short-course) strategy by WHO",
      },
      {
        id: "pneumonia",
        name: "Pneumonia",
        system: "respiratory",
        cause: "Bacterial (Streptococcus pneumoniae), viral, or fungal infection of lung alveoli",
        symptoms: ["High fever", "Cough with phlegm", "Chest pain", "Difficulty breathing"],
        examRelevance: "Leading cause of death in children under 5 worldwide. Pneumococcal vaccine available",
      },
    ],
    examFacts: [
      "Alveoli are the functional units of lungs — thin-walled, surrounded by capillaries for gas exchange",
      "Haemoglobin in RBCs carries O2 (as oxyhaemoglobin) and some CO2 (as carbaminohaemoglobin)",
      "Most CO2 is transported as bicarbonate ions (HCO3-) in plasma",
      "Vital capacity = tidal volume + inspiratory reserve + expiratory reserve (~3.5-4.5 litres)",
      "Respiration rate: 12-20 breaths per minute in adults",
    ],
  },
  {
    id: "nervous",
    name: "Nervous System",
    description:
      "The nervous system coordinates body activities through electrical impulses. It comprises the Central Nervous System (brain + spinal cord) and the Peripheral Nervous System.",
    organs: [
      { id: "brain", name: "Brain", function: "Control centre. Cerebrum (thinking), cerebellum (balance), medulla oblongata (involuntary functions like breathing, heartbeat)", position: { x: 50, y: 5 } },
      { id: "spinal-cord", name: "Spinal Cord", function: "Conducts nerve impulses between brain and body. Controls reflex actions", position: { x: 50, y: 30 } },
      { id: "neurons", name: "Neurons (Nerve Cells)", function: "Functional unit. Transmit electrical impulses. Three types: sensory, motor, and relay neurons", position: { x: 50, y: 50 } },
    ],
    diseases: [
      {
        id: "alzheimers",
        name: "Alzheimer's Disease",
        system: "nervous",
        cause: "Progressive degeneration of brain neurons. Accumulation of amyloid plaques and tau tangles",
        symptoms: ["Memory loss", "Confusion", "Difficulty with language", "Personality changes"],
        examRelevance: "Most common form of dementia. Named after Dr. Alois Alzheimer (1906). No cure currently available",
      },
      {
        id: "epilepsy",
        name: "Epilepsy",
        system: "nervous",
        cause: "Abnormal electrical activity in brain neurons causing seizures",
        symptoms: ["Seizures (convulsions)", "Temporary confusion", "Staring spells", "Loss of consciousness"],
        examRelevance: "Affects ~50 million people worldwide. EEG (Electroencephalogram) used for diagnosis",
      },
    ],
    examFacts: [
      "Neuron is the structural and functional unit of the nervous system",
      "Synapse is the junction between two neurons — neurotransmitters (acetylcholine, dopamine) transmit impulses",
      "Reflex arc: stimulus → receptor → sensory neuron → spinal cord → motor neuron → effector (muscle/gland)",
      "Cerebrum is the largest part of the brain — responsible for thinking, memory, and voluntary actions",
      "Medulla oblongata controls involuntary functions: breathing, heart rate, blood pressure, swallowing",
    ],
  },
  {
    id: "skeletal",
    name: "Skeletal System",
    description:
      "The skeletal system provides structural support, protects internal organs, enables movement, stores minerals, and produces blood cells in bone marrow.",
    organs: [
      { id: "bones", name: "Bones", function: "206 bones in adult human. Provide framework, protect organs, store calcium and phosphorus", position: { x: 50, y: 20 } },
      { id: "joints", name: "Joints", function: "Points where bones meet. Types: ball-and-socket (hip), hinge (knee, elbow), pivot (neck), gliding (wrist)", position: { x: 50, y: 40 } },
      { id: "cartilage", name: "Cartilage", function: "Flexible connective tissue. Cushions joints, shapes nose and ears. Less rigid than bone", position: { x: 50, y: 55 } },
      { id: "ligaments", name: "Ligaments", function: "Strong fibrous tissue connecting bone to bone. Stabilise joints", position: { x: 50, y: 65 } },
    ],
    diseases: [
      {
        id: "osteoporosis",
        name: "Osteoporosis",
        system: "skeletal",
        cause: "Loss of bone density due to calcium deficiency, ageing, hormonal changes (post-menopause)",
        symptoms: ["Fragile bones", "Fractures from minor falls", "Loss of height", "Stooped posture"],
        examRelevance: "More common in post-menopausal women due to drop in oestrogen. Calcium and Vitamin D supplementation recommended",
      },
      {
        id: "arthritis",
        name: "Arthritis",
        system: "skeletal",
        cause: "Inflammation of joints — Osteoarthritis (wear and tear) or Rheumatoid (autoimmune)",
        symptoms: ["Joint pain", "Swelling", "Stiffness", "Reduced range of motion"],
        examRelevance: "Osteoarthritis is the most common joint disease. Rheumatoid arthritis is an autoimmune disorder",
      },
    ],
    examFacts: [
      "Total bones: 206 in adults, ~270-300 in newborns (many fuse during growth)",
      "Smallest bone: stapes (in middle ear). Largest bone: femur (thigh bone)",
      "Skull has 22 bones (8 cranial + 14 facial). Hyoid bone in throat is the only bone not articulating with another bone",
      "Bone marrow produces RBCs, WBCs, and platelets (haematopoiesis)",
      "Rickets in children and osteomalacia in adults caused by Vitamin D deficiency",
    ],
  },
  {
    id: "excretory",
    name: "Excretory System",
    description:
      "The excretory system removes metabolic waste products from the body. The kidneys are the primary excretory organs, filtering blood to produce urine.",
    organs: [
      { id: "kidneys", name: "Kidneys", function: "Filter blood to remove urea, excess water, and salts. Each kidney has ~1 million nephrons (functional units)", position: { x: 45, y: 40 } },
      { id: "ureters", name: "Ureters", function: "Tubes connecting kidneys to urinary bladder. Transport urine via peristalsis", position: { x: 50, y: 55 } },
      { id: "urinary-bladder", name: "Urinary Bladder", function: "Muscular sac storing urine. Capacity ~300-500 mL. Controlled by sphincter muscles", position: { x: 50, y: 65 } },
      { id: "urethra", name: "Urethra", function: "Tube through which urine is expelled from the body", position: { x: 50, y: 75 } },
    ],
    diseases: [
      {
        id: "kidney-stones",
        name: "Kidney Stones (Renal Calculi)",
        system: "excretory",
        cause: "Crystallisation of calcium oxalate, uric acid, or other minerals in the kidneys",
        symptoms: ["Severe flank pain (renal colic)", "Blood in urine", "Nausea", "Frequent urination"],
        examRelevance: "Most common type is calcium oxalate stones. Lithotripsy uses shock waves to break stones",
      },
      {
        id: "urinary-tract-infection",
        name: "Urinary Tract Infection (UTI)",
        system: "excretory",
        cause: "Bacterial infection (usually E. coli) of the urinary tract",
        symptoms: ["Burning during urination", "Frequent urge to urinate", "Cloudy urine", "Pelvic pain"],
        examRelevance: "More common in women due to shorter urethra. Treated with antibiotics",
      },
    ],
    examFacts: [
      "Nephron is the structural and functional unit of the kidney. Each kidney has ~1 million nephrons",
      "Nephron parts: Bowman's capsule, proximal tubule, Loop of Henle, distal tubule, collecting duct",
      "Kidneys filter ~180 litres of blood daily but produce only ~1.5 litres of urine (99% reabsorbed)",
      "ADH (Anti-Diuretic Hormone / Vasopressin) from posterior pituitary controls water reabsorption",
      "Dialysis is the artificial process of filtering blood when kidneys fail — haemodialysis uses a machine",
    ],
  },
]
