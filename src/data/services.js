import {
  Building2,
  Cpu,
  Globe,
  Smartphone,
  ShoppingBag,
  Database,
  Globe2,
  Sparkles,
  Headphones,
  GitMerge,
  Layers,
  Code2,
} from 'lucide-react';

/**
 * Template 1 — Enterprise Services with Official Brief Offerings
 */
export const template1Services = [
  {
    id: 'sap-ariba',
    title: 'SAP & SF Ariba Integrations',
    icon: Building2,
    tag: 'Flagship Core',
    headline: 'End-to-End SAP S/4HANA, SF Ariba & Oracle Integrations',
    desc: 'Deep enterprise integration engineering connecting SAP S/4HANA, SAP SuccessFactors (SF), SAP Ariba procurement, and Oracle enterprise databases with clean-core architecture.',
    capabilities: [
      'SAP S/4HANA Cloud & On-Premise Implementation & Migration',
      'SAP SF Ariba Procurement & Supplier Network Integration',
      'SF Ariba — Oracle Enterprise ERP Cross-System Bridges',
      'SAP Business Technology Platform (BTP) & Custom Fiori Apps',
      '24/7 Enterprise Basis Management, SLA Operations & Tuning',
    ],
    stat: '40%+',
    statLabel: 'Average cycle time reduction for multi-ERP business reporting',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Agents',
    icon: Cpu,
    tag: 'Next-Gen Intelligence',
    headline: 'Autonomous Enterprise AI Agents & Workflow Automation',
    desc: 'Custom enterprise AI agents, automated decision engines, and predictive intelligence deployed directly into your core ERP, supply chain, and customer pipelines.',
    capabilities: [
      'Custom Enterprise AI Agents & Multi-Step LangGraph Orchestration',
      'Automated Invoicing & AP Console 3-Way Matching against SAP',
      'Predictive Supply Chain Demand Forecasting & Stockout Warnings',
      'Private Enterprise LLMs with Zero Customer Data Leakage',
      'ERP-Integrated Copilots & Custom Knowledge Graph Assistants',
    ],
    stat: '72%',
    statLabel: 'Routine administrative workload automated end-to-end',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Engineering',
    icon: Smartphone,
    tag: 'iOS, Android & Hybrid',
    headline: 'Native & Cross-Platform Mobile Applications',
    desc: 'Production-grade mobile apps for iOS and Android built on React Native and Flutter, plus dedicated Shopify mobile commerce and field technician applications.',
    capabilities: [
      'Native iOS (Swift) & Android (Kotlin) High-Performance Apps',
      'Cross-Platform React Native & Flutter Enterprise Engineering',
      'Shopify Mobile App Development & Omnichannel Mobile Checkout',
      'Warehouse & Field Technician Handheld Scanning with Offline Sync',
      'Executive KPI Approval Dashboards & Biometric Security',
    ],
    stat: '3.5x',
    statLabel: 'Faster field ticket turnaround & dispatch speed',
  },
  {
    id: 'web-ecom',
    title: 'Web & E-Commerce Solutions',
    icon: ShoppingBag,
    tag: 'High-Volume Commerce',
    headline: 'Next-Gen Web Platforms & Scalable E-Commerce Engines',
    desc: 'High-concurrency web engineering (Next.js, React) and headless e-commerce architectures unified in real time with multi-warehouse inventory and SAP pricing.',
    capabilities: [
      'Custom High-Speed Corporate Portals & Web Applications (Next.js/React)',
      'High-Volume B2B & B2C Headless E-Commerce (Shopify Plus, Stripe)',
      'Real-Time Multi-Warehouse Inventory & SAP ERP Synchronization',
      'Role-Based Access Control (RBAC), SSO & SOC2 Enterprise Compliance',
      'Sub-50ms Global Edge Latency & Microservices Architectures',
    ],
    stat: '99.95%',
    statLabel: 'Platform availability SLA across production deployments',
  },
  {
    id: 'offshore-support',
    title: 'Dedicated Offshore Support',
    icon: Headphones,
    tag: 'Managed Engineering',
    headline: 'Cost-Optimized Offshore Development & 24/7 Managed Ops',
    desc: 'Scale your engineering velocity with dedicated offshore software squads, certified SAP consultants, and round-the-clock L1/L2/L3 support teams.',
    capabilities: [
      'Dedicated Offshore Agile Software Squads (Full-Stack, Mobile, AI)',
      '24/7 Managed L1/L2/L3 Production Monitoring & Incident Response',
      'Certified SAP Basis, BTP & ABAP Remote Support Engineers',
      'Substantial 60%+ TCO Savings with Global Delivery Standards',
      'Seamless Time-Zone Alignment across US, UK & Middle East/Asia',
    ],
    stat: '60%+',
    statLabel: 'Average engineering TCO reduction with zero quality compromise',
  },
  {
    id: 'custom-dev',
    title: 'Custom Developments',
    icon: Code2,
    tag: 'Bespoke Engineering',
    headline: 'Tailored Enterprise Software & Legacy Modernization',
    desc: 'Bespoke software solutions engineered from scratch to solve proprietary business problems where off-the-shelf software falls short.',
    capabilities: [
      'Custom Full-Stack Web & Backend Microservices Systems',
      'Legacy Modernization: Monolith to Cloud-Native Kubernetes',
      'Complex API Middleware & Cross-Vendor Database Bridges',
      'High-Throughput Financial & Transactional Processing Pipelines',
      'Rigorous Unit & Integration Test Automation Suites',
    ],
    stat: 'Zero',
    statLabel: 'Technical debt with modular clean-core engineering',
  },
];

/**
 * Template 2 — Modern Tech & AI Service Grid
 */
export const template2Services = [
  {
    category: 'sap',
    title: 'SAP S/4HANA & SF Ariba Integrations',
    tagline: 'Clean-core ERP with SF Ariba & Oracle bridges',
    tech: ['SAP S/4HANA', 'SF Ariba', 'Oracle', 'BTP', 'Fiori'],
    icon: Building2,
    highlight: 'Seamless procurement & supply chain cutover',
  },
  {
    category: 'ai',
    title: 'Autonomous Enterprise AI & AP Console',
    tagline: 'AI agents & 3-way invoice matching for ERP',
    tech: ['AP Console', 'LangGraph', 'LLMs', 'Vector DBs'],
    icon: Cpu,
    highlight: '72% reduction in manual data entry & invoice lag',
  },
  {
    category: 'mobile',
    title: 'Native & Cross-Platform Mobile Apps',
    tagline: 'iOS, Android, React Native & Shopify Mobile Apps',
    tech: ['React Native', 'Flutter', 'Swift', 'Shopify SDK'],
    icon: Smartphone,
    highlight: 'Full offline sync & high-converting mobile checkout',
  },
  {
    category: 'web',
    title: 'Next-Gen Web Platforms & Portals',
    tagline: 'Sub-second page speeds with enterprise auth & role RBAC',
    tech: ['Next.js 15', 'React 19', 'Node.js', 'PostgreSQL'],
    icon: Globe2,
    highlight: 'Sub-50ms latency for B2B portal interactions',
  },
  {
    category: 'ecom',
    title: 'High-Volume E-Commerce Systems',
    tagline: 'Real-time multi-warehouse inventory & ERP sync',
    tech: ['Shopify Plus', 'Commerce Layer', 'Stripe', 'GraphQL'],
    icon: ShoppingBag,
    highlight: 'Over $100M+ in annual transaction capability',
  },
  {
    category: 'support',
    title: '24/7 Dedicated Offshore Support',
    tagline: 'Offshore engineering pods & managed Basis operations',
    tech: ['24/7 SLAs', 'L1/L2/L3', 'Dedicated Squads', 'DevOps'],
    icon: Headphones,
    highlight: '60%+ cost optimization with global delivery excellence',
  },
];

/**
 * Template 2 — Filter categories
 */
export const template2FilterCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'sap', label: 'SAP & Ariba' },
  { id: 'ai', label: 'AI Automation' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'web', label: 'Web Platform' },
  { id: 'ecom', label: 'E-Commerce' },
  { id: 'support', label: 'Offshore Support' },
];

/**
 * Template 2 — Workflow steps
 */
export const template2WorkflowSteps = [
  {
    step: '01',
    title: 'Architecture & Discovery',
    desc: 'Audit of SAP/Ariba/Oracle tables, API dependencies, security compliance, and automation targets.',
    badge: 'Days 1-2',
  },
  {
    step: '02',
    title: 'Rapid Prototype Demo',
    desc: 'Delivery of interactive functional prototypes with real sample data for executive alignment.',
    badge: 'Days 3-4',
  },
  {
    step: '03',
    title: 'Core System Integration',
    desc: 'Seamless integration with SAP BTP, SF Ariba, Oracle, AI models, and secure payment pipelines.',
    badge: 'Sprint Phase',
  },
  {
    step: '04',
    title: 'Global Go-Live & Ops',
    desc: '24/7 continuous observability, managed offshore support squads, and zero-downtime rollouts.',
    badge: 'Production',
  },
];

/**
 * Template 2 — Hero metrics
 */
export const template2HeroMetrics = [
  { val: '< 1.2s', label: 'Average ERP Query Latency' },
  { val: '4-5 Days', label: 'Initial Working Template Sprint' },
  { val: '24/7', label: 'Dedicated Offshore Support' },
  { val: '60%+', label: 'Engineering Cost Optimization' },
];
