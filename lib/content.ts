export type PageId =
  | "home"
  | "about"
  | "services"
  | "industries"
  | "projects"
  | "team"
  | "insights"
  | "careers"
  | "contact";

export type ServiceId =
  | "civil"
  | "water"
  | "supervision"
  | "pm"
  | "advisory"
  | "studies"
  | "qs"
  | "tender";

export const navItems: { id: PageId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "projects", label: "Projects" },
  { id: "team", label: "Team" },
  { id: "insights", label: "Insights" },
  { id: "careers", label: "Careers" },
];

export const pagePaths: Record<PageId, string> = {
  home: '/',
  about: '/about',
  services: '/services',
  industries: '/industries',
  projects: '/projects',
  team: '/team',
  insights: '/insights',
  careers: '/careers',
  contact: '/contact',
};

export const siteUrl = 'https://andalucia-engineering.com';

export const pageSeo: Record<PageId, { title: string; description: string; priority: number }> = {
  home: {
    title: 'Andalucia Engineering Consulting | Civil & Water Infrastructure | Budapest',
    description:
      'Budapest-based civil and water infrastructure consultancy delivering technical advisory, construction supervision, project management, and FIDIC contract administration across Europe, MENA, and Central Asia.',
    priority: 1,
  },
  about: {
    title: 'About Andalucia Engineering Consulting | Engineering Better Decisions',
    description:
      'Learn about Andalucia Engineering Consulting, an independent infrastructure consultancy supporting better engineering decisions across civil, water, transport, and construction projects.',
    priority: 0.9,
  },
  services: {
    title: 'Engineering Consultancy Services | Civil, Water, Supervision & Advisory',
    description:
      'Civil engineering, water resources engineering, construction supervision, FIDIC administration, project management, feasibility studies, tender support, and quantity surveying services.',
    priority: 0.95,
  },
  industries: {
    title: 'Infrastructure Sectors | Water, Transport, Municipal & Development',
    description:
      'Sector expertise in water and irrigation, transport infrastructure, municipal public works, agriculture, environmental safeguards, and international development programmes.',
    priority: 0.85,
  },
  projects: {
    title: 'Infrastructure Project Experience | Andalucia Engineering Consulting',
    description:
      'Selected professional experience in canal modernization, climate-adaptive water resources, commercial construction, and infrastructure programme delivery.',
    priority: 0.85,
  },
  team: {
    title: 'Engineering Team | Andalucia Engineering Consulting',
    description:
      'Meet the engineering leadership behind Andalucia Engineering Consulting, with international experience in infrastructure delivery, construction supervision, and technical advisory.',
    priority: 0.75,
  },
  insights: {
    title: 'Engineering Insights | Water, FIDIC, MDB Programmes & Infrastructure',
    description:
      'Engineering perspectives on water resources, FIDIC contracts, MDB-funded programmes, sustainability, project management, and infrastructure markets.',
    priority: 0.7,
  },
  careers: {
    title: 'Careers | Andalucia Engineering Consulting',
    description:
      'Career opportunities and speculative applications for civil engineers, water engineers, resident engineers, quantity surveyors, and construction supervision professionals.',
    priority: 0.7,
  },
  contact: {
    title: 'Contact Andalucia Engineering Consulting | Budapest',
    description:
      'Contact Andalucia Engineering Consulting in Budapest for civil engineering, water resources, construction supervision, technical advisory, and project management enquiries.',
    priority: 0.9,
  },
};

export const serviceCards = [
  [
    "Civil Engineering",
    "Structural analysis, earthworks, foundations, and civil works specifications for infrastructure at any scale.",
  ],
  [
    "Water Resources Engineering",
    "Irrigation system design, hydraulic modelling, canal rehabilitation, and water management studies.",
  ],
  [
    "Construction Supervision",
    "FIDIC-aligned site oversight, quality assurance, contract administration, and progress monitoring.",
  ],
  [
    "Project Management",
    "Programme planning, risk management, stakeholder coordination, and MDB-aligned reporting.",
  ],
  [
    "Technical Advisory",
    "Independent technical reviews, due diligence, peer reviews, and lender's engineer services.",
  ],
  [
    "Quantity Surveying & Cost",
    "Bills of quantities, cost estimation, value engineering, and tender documentation for civil works.",
  ],
] as const;

export const services: {
  id: ServiceId;
  title: string;
  paragraphs: string[];
  features: { title: string; text: string }[];
  footer?: string;
}[] = [
  {
    id: "civil",
    title: "Civil Engineering",
    paragraphs: [
      "Civil engineering sits at the core of every infrastructure project we touch. We provide structural analysis, earthworks design, drainage design, foundations engineering, and civil works specifications for projects ranging from irrigation infrastructure to industrial facilities.",
      "Our civil engineering work is underpinned by rigorous design standards and a thorough understanding of construction methodology, ensuring that what we specify can actually be built, on budget and to programme.",
    ],
    features: [
      {
        title: "Structural Design & Analysis",
        text: "Concrete, masonry, and steel structures for civil infrastructure including hydraulic structures, bridges, and retaining systems.",
      },
      {
        title: "Earthworks & Geotechnics",
        text: "Earthworks specifications, slope stability, embankment design, and geotechnical assessment for linear infrastructure.",
      },
      {
        title: "Drainage Design",
        text: "Surface water management, culvert design, and stormwater systems aligned with local and international standards.",
      },
      {
        title: "Specifications & Drawings",
        text: "Technical specification writing and drawing coordination for tender and construction documentation.",
      },
    ],
    footer:
      "Typical clients: Government agencies, municipalities, developers, construction contractors, international organisations.",
  },
  {
    id: "water",
    title: "Water Resources Engineering",
    paragraphs: [
      "Water resources engineering is our deepest technical specialism. With direct experience managing the rehabilitation of 924.5 km of irrigation canals across Egypt and supervising MDB-funded irrigation programmes in Uzbekistan, our team brings practical field expertise to the full range of water infrastructure challenges.",
    ],
    features: [
      {
        title: "Irrigation System Design",
        text: "Canal network design, irrigation scheme planning, and distribution system optimisation for agricultural and municipal water supply.",
      },
      {
        title: "Hydraulic Modelling",
        text: "Open channel hydraulics, flood routing, flow measurement, and hydraulic structure design.",
      },
      {
        title: "Canal Rehabilitation",
        text: "Assessment, design, and supervision of canal lining, cross-drainage works, and conveyance structure rehabilitation.",
      },
      {
        title: "Water Management Studies",
        text: "Water balance studies, demand assessment, and water use efficiency analysis for government and MDB clients.",
      },
    ],
  },
  {
    id: "supervision",
    title: "Construction Supervision",
    paragraphs: [
      "Effective construction supervision is the difference between a project that meets its technical specification and one that merely meets its completion date. We provide resident engineer and supervision engineer services that maintain technical standards, enforce contract conditions, and protect client interests.",
    ],
    features: [
      {
        title: "FIDIC Contract Administration",
        text: "Formal administration of FIDIC Red Book and Yellow Book contracts including variation management, payment certificates, and claim assessment.",
      },
      {
        title: "Quality Assurance",
        text: "Materials testing oversight, method statement review, inspection and test plans, and non-conformance management.",
      },
      {
        title: "Progress Monitoring",
        text: "Programme monitoring, earned value analysis, and monthly reporting for employers and funders.",
      },
      {
        title: "MDB Reporting",
        text: "Asian Development Bank, World Bank, and EBRD progress reporting, safeguard monitoring, and procurement documentation.",
      },
    ],
  },
  {
    id: "pm",
    title: "Project Management",
    paragraphs: [
      "Infrastructure projects fail not because of engineering errors, but because of management failures: unclear scope, poor risk identification, weak contractor coordination, and inadequate stakeholder communication. We provide structured project management services that address these failure modes systematically.",
    ],
    features: [
      {
        title: "Programme Planning",
        text: "WBS development, baseline programming, resource allocation, and critical path analysis.",
      },
      {
        title: "Risk Management",
        text: "Risk register development, quantitative risk assessment, and mitigation planning.",
      },
      {
        title: "Stakeholder Coordination",
        text: "Government liaison, community engagement protocols, and inter-agency coordination.",
      },
      {
        title: "Reporting & Governance",
        text: "Monthly progress reports, management dashboards, and board-level briefings for programme sponsors.",
      },
    ],
  },
  {
    id: "advisory",
    title: "Technical Advisory",
    paragraphs: [
      "Independent technical advice, offered without stake in the construction outcome, is one of the most valuable services an engineering consultancy can provide. We work as trusted advisors to clients who need objective assessment of technical proposals, contractor performance, or design adequacy.",
    ],
    features: [
      {
        title: "Technical Due Diligence",
        text: "Independent review of design proposals, construction programmes, and contractor technical submissions for lenders and investors.",
      },
      {
        title: "Expert Witness Support",
        text: "Technical expert reports and opinion evidence for dispute resolution and arbitration.",
      },
      {
        title: "Peer Review",
        text: "Independent peer review of engineering designs, calculations, and specifications before construction commitment.",
      },
      {
        title: "Lender's Engineer",
        text: "Acting as the employer's technical representative in project finance structures, monitoring draw-down conditions.",
      },
    ],
  },
  {
    id: "studies",
    title: "Feasibility Studies & Engineering Studies",
    paragraphs: [
      "Good infrastructure decisions are made before a single cubic metre of concrete is poured. Our feasibility and engineering study services help clients assess technical viability, understand cost drivers, and compare alternatives before committing capital.",
    ],
    features: [
      {
        title: "Pre-Feasibility Studies",
        text: "Rapid assessment of technical options and order-of-magnitude costs at early programme stages.",
      },
      {
        title: "Detailed Feasibility Studies",
        text: "Full technical, economic, and environmental feasibility analysis meeting MDB appraisal requirements.",
      },
      {
        title: "Options Analysis",
        text: "Structured multi-criteria assessment of design alternatives, procurement routes, and phasing strategies.",
      },
      {
        title: "Master Planning",
        text: "Long-term infrastructure master planning for irrigation networks, water supply systems, and municipal infrastructure.",
      },
    ],
  },
  {
    id: "qs",
    title: "Quantity Surveying & Cost Estimation",
    paragraphs: [
      "Cost certainty is rarely achieved without deliberate effort. We provide quantity surveying and cost estimation services that give clients the confidence to make investment decisions, procure contractors competitively, and manage budget performance through construction.",
    ],
    features: [
      {
        title: "Bills of Quantities",
        text: "Detailed take-off and measurement of civil works for competitive tendering under FIDIC and local procurement frameworks.",
      },
      {
        title: "Cost Estimation",
        text: "Class 3-5 estimates from conceptual through to definitive, appropriate to the design stage and procurement route.",
      },
      {
        title: "Value Engineering",
        text: "Structured review to identify cost reduction opportunities without compromising functional requirements.",
      },
      {
        title: "Variation Assessment",
        text: "Evaluation and pricing of contractor variations, claims, and disputes during the construction phase.",
      },
    ],
  },
  {
    id: "tender",
    title: "Tender Support",
    paragraphs: [
      "A well-structured tender process attracts competent contractors at competitive prices. A poorly structured one attracts the wrong contractors at prices that trigger disputes. We help clients design tender processes that work, and help contractors prepare technical submissions that win.",
    ],
    features: [
      {
        title: "Tender Documentation",
        text: "Preparation of complete tender packages including specifications, drawings, BoQs, and contract conditions.",
      },
      {
        title: "Bid Evaluation",
        text: "Technical and financial evaluation of contractor bids, including qualification assessment and recommendation reports.",
      },
      {
        title: "Technical Proposal Writing",
        text: "Assistance to contractors preparing methodology statements, CVs, and approach documents for competitive tenders.",
      },
      {
        title: "Pre-Qualification Support",
        text: "PQ questionnaire preparation, capability statements, and submission management for MDB-funded procurement.",
      },
    ],
  },
];

export const industries = [
  [
    "Water & Irrigation",
    "Canal systems, irrigation networks, hydraulic structures, and water resource management programmes.",
  ],
  [
    "Transport Infrastructure",
    "Road and bridge engineering, drainage, and transport corridor consultancy across Eastern Europe and Central Asia.",
  ],
  [
    "Municipal & Urban",
    "Public works, drainage, utility networks, and EU co-funded municipal infrastructure programmes.",
  ],
  [
    "Agriculture & Rural Development",
    "Rural infrastructure, agricultural drainage, irrigation schemes, and land improvement programmes.",
  ],
  [
    "Environmental",
    "Environmental impact assessment, wetland engineering, and international organisation safeguard compliance.",
  ],
  [
    "International Development",
    "MDB-funded infrastructure with Asian Development Bank, World Bank, EBRD, and bilateral donor procurement and reporting expertise.",
  ],
] as const;

export const processSteps = [
  [
    "01",
    "Initial Consultation",
    "Scope definition, needs assessment, and preliminary technical discussion.",
  ],
  [
    "02",
    "Technical Proposal",
    "Methodology, deliverables plan, team structure, and fee proposal.",
  ],
  [
    "03",
    "Engineering Delivery",
    "Studies, design, supervision, or advisory services per agreed scope.",
  ],
  [
    "04",
    "Quality Review",
    "Independent technical checks and structured client review cycles.",
  ],
  [
    "05",
    "Handover & Support",
    "Documentation, training if required, and post-completion advisory.",
  ],
] as const;

export const insights = [
  [
    "Water Resources",
    "Why canal lining efficiency figures are often overstated",
    "The published conveyance efficiency gains from canal lining programmes frequently fail to account for changing water table conditions and agricultural demand shifts. What the numbers actually tell us.",
    "Engineering Insight · Coming soon",
  ],
  [
    "FIDIC Contracts",
    "The three FIDIC clauses engineers most commonly misapply",
    "Contract administration in the field rarely matches what was intended in the drafting room. A practical look at where FIDIC Red Book interpretation goes wrong on irrigation and civil works contracts.",
    "Technical Commentary · Coming soon",
  ],
  [
    "MDB Programmes",
    "What MDB-funded projects expect from their supervision consultants",
    "Multilateral development bank projects carry specific reporting, safeguard, and governance obligations that many consultants learn only after mobilisation. A guide to what to expect before you arrive.",
    "Programme Management · Coming soon",
  ],
  [
    "Sustainability",
    "Designing irrigation infrastructure for a water-scarce future",
    "Climate projections for Central Asia and MENA point to significant reductions in freshwater availability. How should irrigation system design respond, and how should existing systems be rehabilitated?",
    "Sustainability · Coming soon",
  ],
  [
    "Project Management",
    "Programme planning on multi-site infrastructure: lessons from Egypt",
    "Managing a 924 km canal rehabilitation programme across 271 canals simultaneously is a coordination problem as much as an engineering one. What worked, what did not, and why sequencing matters.",
    "Programme Management · Coming soon",
  ],
  [
    "Industry Outlook",
    "Central Asia's infrastructure decade: what it means for consultants",
    "Asian Development Bank, World Bank, and bilateral funders are significantly increasing investment in water and transport infrastructure across Uzbekistan, Kazakhstan, and Kyrgyzstan. Where the opportunities lie.",
    "Market Outlook · Coming soon",
  ],
] as const;
