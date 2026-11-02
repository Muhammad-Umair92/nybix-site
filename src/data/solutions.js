/**
 * Template 4 — Solutions matrix including Proprietary Products (AP Console & Trip Planner)
 */
export const template4Solutions = [
  {
    id: 'ap-console',
    title: 'AP Console (Proprietary AI Product)',
    badge: 'Proprietary AI',
    tagline:
      'Autonomous accounts payable engine for automated 3-way invoice matching and instant SAP / Oracle posting.',
    architecture: {
      layer1: 'Unstructured Supplier Invoices (PDF/Scans/EDI) & ERP Data',
      layer2: 'Nybix AP Console OCR Vision & Multi-Step Reasoning Engine',
      layer3: 'Direct SAP S/4HANA & Oracle Line-Item Posting with Zero Humans',
    },
    benefits: [
      'Automated 3-way matching against Purchase Orders & Goods Receipts',
      'Sub-second multi-page invoice parsing with 99.8% field accuracy',
      'Direct RFC and BTP connector for SAP S/4HANA, SF Ariba & Oracle',
      'Proven at scale across enterprise fuel and manufacturing leaders (PSO)',
    ],
    metric: '75% Faster',
    metricLabel: 'Invoice processing cycle with zero manual data entry',
  },
  {
    id: 'trip-planner',
    title: 'Trip Planner (Proprietary AI Product)',
    badge: 'Smart Logistics AI',
    tagline:
      'Intelligent corporate travel and fleet route planning engine with real-time budget and policy optimization.',
    architecture: {
      layer1: 'Flight/Hotel APIs, Fleet Telematics & Corporate Travel Policies',
      layer2: 'Nybix Itinerary Reasoning Graph & Cost-Optimization Model',
      layer3: 'Executive Mobile Booking Interface & Automated ERP Cost-Center Sync',
    },
    benefits: [
      'Multi-modal route optimization taking cost, time, and safety into account',
      'Real-time corporate travel compliance and approval automation',
      'Predictive disruption alerts with automated rebooking options',
      'Direct synchronization with corporate calendar and ERP cost centers',
    ],
    metric: '35% Saved',
    metricLabel: 'In administrative travel planning & corporate expense overhead',
  },
  {
    id: 'sap-ariba',
    title: 'SAP S/4HANA, SF Ariba & Oracle Bridges',
    badge: 'Flagship Core',
    tagline:
      'Clean-core enterprise integration connecting SAP S/4HANA, SF Ariba, and Oracle databases.',
    architecture: {
      layer1: 'Legacy ECC 6.0, Oracle Databases & Multi-Vendor Procurement',
      layer2: 'Nybix Automated Migration Engine & BTP Integration Suite',
      layer3: 'Clean-Core S/4HANA Cloud + Custom Fiori Analytics & EDI',
    },
    benefits: [
      'Turnkey SF Ariba and Oracle supply chain procurement bridges (PARCO)',
      'Rapid brownfield / greenfield deployment with zero cutover disruption',
      'Seamless BTP side-by-side extensibility without core modification',
      '24/7 continuous observability & Basis performance tuning',
    ],
    metric: '60% Faster',
    metricLabel: 'Procurement PO approvals across complex refinery pipelines',
  },
  {
    id: 'imc-platform',
    title: 'Enterprise Digital Ecosystems (IMC Platform)',
    badge: 'Digital Commerce',
    tagline:
      'Unified Next.js web portals and React Native mobile commerce apps for nationwide customer scale.',
    architecture: {
      layer1: 'Centralized Product Catalogs, Inventory Databases & Payment Gateways',
      layer2: 'Edge-Rendered Next.js 15 & Node.js/PostgreSQL Scalable APIs',
      layer3: 'Native React Native Android & iOS Apps + Web Consumer Storefront',
    },
    benefits: [
      'Unified customer shopping experience across web, iOS, and Android (IMC)',
      'Real-time inventory tracking and automated multi-channel order updates',
      'Role-based admin dashboards for inventory, pricing, and sales tracking',
      'Sub-50ms global latency with high-concurrency peak load support',
    ],
    metric: '99.99%',
    metricLabel: 'Platform uptime SLA across high-volume customer portals',
  },
  {
    id: 'offshore-squads',
    title: '24/7 Dedicated Offshore Support Squads',
    badge: 'Global Delivery',
    tagline:
      'High-velocity offshore development pods and round-the-clock managed operations.',
    architecture: {
      layer1: 'Global Infrastructure, Cloud Deployments & SAP Basis Environments',
      layer2: 'Nybix 24/7 L1/L2/L3 Monitoring, Alerting & Incident Response',
      layer3: 'Dedicated Agile Squads with Time-Zone Aligned Sprint Delivery',
    },
    benefits: [
      'Dedicated full-stack, mobile, and SAP development engineering pods',
      'Round-the-clock 24/7 managed SLA monitoring and technical support',
      '60%+ cost optimization with zero quality or communication compromises',
      'Time-zone aligned collaboration for US, UK, and Middle East/Asia teams',
    ],
    metric: '60%+',
    metricLabel: 'Cost optimization with top-tier engineering delivery',
  },
];

/**
 * Template 4 — Initial simulated agent logs featuring AP Console and real client pipelines
 */
export const template4SimulatedLogs = [
  {
    time: '10:42:01',
    level: 'SYS',
    msg: 'SAP S/4HANA & SF Ariba connection verified. BTP endpoints healthy.',
    status: 'success',
  },
  {
    time: '10:42:04',
    level: 'AP-CONSOLE',
    msg: 'PSO fuel manifest parsed: 1,200 invoices matched against SAP PO with 99.8% confidence.',
    status: 'active',
  },
  {
    time: '10:42:09',
    level: 'IMC-SYNC',
    msg: 'IMC mobile & web platform catalog updated with live warehouse inventory.',
    status: 'success',
  },
  {
    time: '10:42:15',
    level: 'OFFSHORE',
    msg: '24/7 Global Managed Support active: 0 unresolved incidents across all clusters.',
    status: 'success',
  },
];
