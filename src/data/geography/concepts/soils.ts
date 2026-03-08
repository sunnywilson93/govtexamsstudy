import type { SubjectConcept } from '@/types/subject-notes'

export const soilsConcept: SubjectConcept = {
  topic: 'soils',
  title: 'Soils of India',
  description:
    'India has diverse soil types due to its varied relief, climate, vegetation, and parent rock. The Indian Council of Agricultural Research (ICAR) has classified Indian soils into 8 major types. Soils directly influence agricultural productivity and are a critical topic for government exams.',
  category: 'Physical Geography',
  keyDates: [
    { year: 'Alluvial Soil', event: 'Most widespread soil in India — covers about 43% of total land area' },
    { year: 'Black Soil', event: 'Also called Regur/Black Cotton Soil — derived from Deccan Trap basalt' },
    { year: 'Red Soil', event: 'Covers about 18.5% of India — rich in iron oxide, poor in nitrogen and humus' },
    { year: 'Laterite Soil', event: 'Found in high rainfall areas — rich in iron and aluminium, poor in fertility' },
    { year: 'ICAR', event: 'Indian Council of Agricultural Research classifies Indian soils into 8 major types' },
    { year: 'USDA System', event: 'USDA Soil Taxonomy classifies soils into orders — India has Alfisols, Vertisols, Inceptisols, Entisols, etc.' },
    { year: 'Soil Erosion', event: 'About 130 million hectares (nearly 45% of land area) in India affected by soil erosion' },
  ],
  notes: [
    {
      section: 'Alluvial Soils',
      content:
        'Alluvial soils are the most widespread and important soils in India, covering about 43% of the total area. Found mainly in the Northern Plains (Indo-Gangetic-Brahmaputra Plain), river valleys, and deltas of peninsular rivers. Two types: (1) Bhangar — older alluvium, found on elevated terraces away from river banks, contains calcareous nodules (kankar), less fertile; (2) Khadar — newer alluvium, found on floodplains, renewed annually by floods, more fertile. Rich in potash and lime but deficient in nitrogen, phosphorus, and humus. These soils are ideal for growing rice, wheat, sugarcane, maize, pulses, and oilseeds. The colour varies from light grey to ash grey (depending on depth of deposition). The alluvial soils of the Ganga-Yamuna Doab are among the most fertile in the world.',
    },
    {
      section: 'Black Soils (Regur)',
      content:
        'Black soils or Regur soils are derived from the weathering of Deccan Trap basalt (lava). They are also called "Black Cotton Soil" because cotton is the main crop grown on them. Found predominantly in Maharashtra, Gujarat, western Madhya Pradesh, northern Karnataka, parts of Telangana, and Andhra Pradesh. Key properties: high clay content (montmorillonite), self-ploughing nature (develop deep cracks in summer, swell when wet), high moisture retention capacity, rich in iron, magnesium, calcium, and aluminium but deficient in nitrogen, phosphorus, and organic matter. These soils are ideal for dry farming due to their moisture-retaining capacity. The black colour is due to titaniferous magnetite (iron and titanium compounds). Thickness varies from a thin layer on uplands to 6 metres in valleys.',
    },
    {
      section: 'Red and Yellow Soils',
      content:
        'Red soils cover about 18.5% of India and develop on crystalline igneous rocks (granite, gneiss) in areas of low rainfall. Found in Tamil Nadu, parts of Karnataka, Andhra Pradesh, Odisha, Jharkhand, Chhattisgarh, and Madhya Pradesh. The red colour is due to diffusion of iron oxide (haematite) in crystalline and metamorphic rocks. Yellow colour appears in hydrated form (goethite). Properties: sandy to loamy texture, porous, friable, poor in nitrogen, phosphorus, and humus but rich in iron and potash. Less fertile than alluvial and black soils. With irrigation and fertilizers, these soils can support millets, pulses, oilseeds, and tobacco. In hilly areas, they are thin and gravelly; in plains, they are deeper and more fertile.',
    },
    {
      section: 'Laterite, Forest & Other Soils',
      content:
        'Laterite soils form in areas of heavy rainfall (above 200 cm) through the process of leaching — silica is washed out, leaving behind iron and aluminium oxides. Found on hill summits of Western Ghats, Eastern Ghats, Rajmahal Hills, Vindhyas, and parts of Meghalaya. Brick-red colour, hardens when exposed to air (name from Latin "later" = brick), acidic, poor in nitrogen and organic matter. Used for making bricks. Bauxite (aluminium ore) is associated with laterite soils. Forest soils (mountain soils) are found in forest-covered areas of the Himalayas, Western Ghats, and Eastern Ghats; rich in humus but deficient in potash, phosphorus, and lime; acidic in nature. Arid/Desert soils are found in western Rajasthan, parts of Gujarat and Haryana; sandy, saline, poor in humus, rich in phosphate; contain kankar (calcium carbonate) nodules. Peaty/Marshy soils: found in Sundarbans, Kerala backwaters, and Almora; heavy, black, acidic, rich in organic matter but waterlogged.',
    },
    {
      section: 'Soil Conservation in India',
      content:
        'India loses about 5,334 million tonnes of soil annually due to erosion. About 130 million hectares (nearly 45%) of land is affected. Major types of soil erosion: (1) Sheet erosion — removal of top layer by flowing water; (2) Rill erosion — small channels formed by running water; (3) Gully erosion — deep channels formed, creating "ravines" (badlands) — common in the Chambal valley; (4) Wind erosion — common in arid Rajasthan. Soil conservation measures include: contour ploughing (ploughing along contour lines), terrace farming (cutting steps on slopes), strip cropping, afforestation and reforestation, building check dams, construction of embankments, crop rotation, mulching, shelter belts (rows of trees to break wind). Key government initiatives: National Mission for Sustainable Agriculture, Soil Health Card Scheme (2015), Watershed Development Programme, Pradhan Mantri Krishi Sinchayee Yojana (PMKSY). The Central Soil & Water Conservation Research and Training Institute (CSWCRTI), Dehradun, is a key research body.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Soils of India is a high-frequency topic. UPSC Prelims tests soil type-crop-region associations and soil properties. SSC/RRB exams ask about soil colours, parent rocks, and self-ploughing soils. The Soil Health Card Scheme and soil conservation techniques are important for current affairs.',
}
