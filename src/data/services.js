import {
  Building2,
  Cpu,
  Globe,
  Smartphone,
  ShoppingBag,
  Database,
  Globe2,
  Sparkles,
} from 'lucide-react';

/**
 * Template 1 — Enterprise SAP tabbed services
 */
export const template1Services = [
  {
    id: 'sap',
    title: 'SAP Enterprise Solutions',
    icon: Building2,
    tag: 'Flagship Core',
    headline: 'End-to-End SAP S/4HANA & Cloud Transformation',
    desc: 'Seamlessly migrate, implement, and orchestrate enterprise resource planning with certified SAP methodologies. We modernize legacy ERP environments into agile, intelligent digital cores.',
    capabilities: [
      'SAP S/4HANA Cloud & On-Premise Implementation',
      'Legacy ECC 6.0 to S/4HANA Brownfield & Greenfield Migrations',
      'SAP Business Technology Platform (BTP) & Extension Suite',
      'SAP Fiori Custom UX & Enterprise Integration Architecture',
      '24/7 Managed Services, Basis Administration & Performance Tuning',
    ],
    stat: '40%+',
    statLabel: 'Average cycle time reduction for business reporting',
  },
  {
    id: 'ai',
    title: 'Enterprise AI & Automation',
    icon: Cpu,
    tag: 'Next-Gen Innovation',
    headline: 'Intelligent Agentic Systems & Autonomous Enterprise Workflows',
    desc: 'Embed conversational AI, automated decision engines, and predictive intelligence into your core ERP and enterprise workflows for maximum operational velocity.',
    capabilities: [
      'Custom Enterprise AI Agents & Workflow Automation',
      'Predictive Analytics & Automated Demand Forecasting',
      'Intelligent Document Processing (IDP) for Invoicing & Logistics',
      'ERP-Integrated LLM Copilots & Enterprise Knowledge Graphs',
      'Secure Private AI Deployment with Zero Data Leakage',
    ],
    stat: '65%',
    statLabel: 'Routine administrative workload reduction',
  },
  {
    id: 'web',
    title: 'Enterprise Web Platforms',
    icon: Globe,
    tag: 'Digital Engineering',
    headline: 'Mission-Critical Corporate Portals & Web Applications',
    desc: 'High-availability, enterprise-grade web engineering designed to handle high transaction volumes, multi-tenant architectures, and complex backend integrations.',
    capabilities: [
      'Custom B2B Customer & Supplier Portals with ERP Sync',
      'Modern High-Performance Web Apps (React, Next.js, Node)',
      'Enterprise Single Sign-On (SSO), Role-Based Access & SOC2 Compliance',
      'Micro-Frontend & Microservices Architecture Design',
      'Cloud-Native CI/CD Automation & Kubernetes Scalability',
    ],
    stat: '99.95%',
    statLabel: 'Platform uptime SLA across production deployments',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: Smartphone,
    tag: 'Field & Consumer Apps',
    headline: 'Native & Cross-Platform Mobile Solutions for Enterprise',
    desc: 'Empower field engineers, supply chain operators, and end consumers with blazing-fast, offline-capable iOS and Android applications.',
    capabilities: [
      'Warehouse & Supply Chain Handheld Scanning Apps',
      'Field Service & Maintenance Technician Mobile Portals',
      'Executive Real-Time KPI Dashboards & Approval Flows',
      'Cross-Platform React Native & Flutter Engineering',
      'Secure Offline Data Synchronization with Enterprise Backends',
    ],
    stat: '3.5x',
    statLabel: 'Faster field ticket turnaround & dispatch',
  },
  {
    id: 'ecom',
    title: 'E-Commerce Solutions',
    icon: ShoppingBag,
    tag: 'Commerce & Scale',
    headline: 'Omnichannel B2B & B2C Digital Commerce Engines',
    desc: 'Turn digital touchpoints into revenue drivers with high-converting, scalable e-commerce platforms fully unified with your inventory, pricing, and ERP systems.',
    capabilities: [
      'B2B Wholesale Portals with Tiered Pricing & Credit Approvals',
      'Headless Commerce Architectures & Microservices APIs',
      'Real-Time SAP Inventory & Order Management Integration',
      'Multi-Currency, Multi-Warehouse Global Fulfillment',
      'High-Converting Checkout Optimization & Payment Gateways',
    ],
    stat: '28%',
    statLabel: 'Average conversion lift across modernized storefronts',
  },
];

/**
 * Template 2 — Modern AI service grid
 */
export const template2Services = [
  {
    category: 'sap',
    title: 'SAP S/4HANA Modern Cloud',
    tagline: 'Clean-core ERP with zero technical debt',
    tech: ['SAP S/4HANA', 'BTP', 'Fiori', 'CAP Model'],
    icon: Database,
    highlight: 'Speed up quarterly financial closing by 4x',
  },
  {
    category: 'ai',
    title: 'Autonomous Enterprise AI Agents',
    tagline: 'Self-orchestrating agents for ERP & CRM operations',
    tech: ['Custom LLMs', 'LangGraph', 'Vector DBs', 'RAG'],
    icon: Cpu,
    highlight: '70% reduction in manual cross-system data entry',
  },
  {
    category: 'web',
    title: 'Next-Gen Web Applications',
    tagline: 'Sub-second page speeds with enterprise auth & role RBAC',
    tech: ['Next.js 15', 'React 19', 'Node.js', 'PostgreSQL'],
    icon: Globe2,
    highlight: 'Sub-50ms latency for B2B portal interactions',
  },
  {
    category: 'mobile',
    title: 'Enterprise Mobile Field Apps',
    tagline: 'Full offline sync for technicians, warehouse, and logistics',
    tech: ['React Native', 'Swift', 'Kotlin', 'WatermelonDB'],
    icon: Smartphone,
    highlight: 'Zero data loss in zero-connectivity environments',
  },
  {
    category: 'ecom',
    title: 'High-Volume Headless Commerce',
    tagline: 'Real-time multi-warehouse inventory & ERP synchronization',
    tech: ['Shopify Plus', 'Commerce Layer', 'Stripe', 'GraphQL'],
    icon: ShoppingBag,
    highlight: 'Over $100M+ in annual transaction capability',
  },
  {
    category: 'ai',
    title: 'Intelligent Document Intelligence',
    tagline: 'Automated invoice parsing & three-way matching against SAP',
    tech: ['Computer Vision', 'OCR Models', 'SAP RFCs'],
    icon: Sparkles,
    highlight: 'Parse complex multi-page invoices in under 1.2s',
  },
];

/**
 * Template 2 — Filter categories
 */
export const template2FilterCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'sap', label: 'SAP ERP' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'web', label: 'Web Platform' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'ecom', label: 'E-Commerce' },
];

/**
 * Template 2 — Workflow steps
 */
export const template2WorkflowSteps = [
  {
    step: '01',
    title: 'Architecture & Discovery',
    desc: 'Deep audit of existing SAP tables, API dependencies, security requirements, and automation targets.',
    badge: 'Days 1-2',
  },
  {
    step: '02',
    title: 'Rapid Prototype Demo',
    desc: 'Delivery of 3-4 interactive templates with real sample data for executive alignment and approval.',
    badge: 'Days 3-4',
  },
  {
    step: '03',
    title: 'Core System Integration',
    desc: 'Integration with SAP BTP, OpenAI/Anthropic APIs, ERP databases, and payment/auth pipelines.',
    badge: 'Sprint Phase',
  },
  {
    step: '04',
    title: 'Global Go-Live & Ops',
    desc: '24/7 observability, zero-downtime rolling updates, and managed basis SLA guarantees.',
    badge: 'Production',
  },
];

/**
 * Template 2 — Hero metrics
 */
export const template2HeroMetrics = [
  { val: '< 1.2s', label: 'Average ERP Query Latency' },
  { val: '4-5 Days', label: 'Initial Working Template Sprint' },
  { val: '100%', label: 'White & Blue Enterprise Aesthetic' },
  { val: '24/7', label: 'Continuous DevOps & SLA' },
];
