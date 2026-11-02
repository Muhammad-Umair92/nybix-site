/**
 * Template 4 — Solutions matrix
 */
export const template4Solutions = [
  {
    id: 'sap-core',
    title: 'SAP S/4HANA Clean-Core Modernization',
    badge: 'Flagship Core',
    tagline:
      'Eliminate technical debt and migrate to S/4HANA Cloud with zero operational disruption.',
    architecture: {
      layer1: 'Legacy ECC 6.0 / Heterogeneous Databases',
      layer2: 'Nybix Automated Migration Engine & BTP Integration Suite',
      layer3: 'Clean-Core S/4HANA Cloud + Custom Fiori Analytics',
    },
    benefits: [
      'Rapid brownfield / greenfield deployment methodology',
      'Real-time automated financial & supply chain consolidation',
      'Seamless BTP side-by-side extensibility without core modification',
      '24/7 continuous observability & Basis performance tuning',
    ],
    metric: '45% Faster',
    metricLabel: 'Migration cycle compared to legacy SI approaches',
  },
  {
    id: 'agentic-ai',
    title: 'Autonomous Enterprise AI Systems',
    badge: 'Next-Gen Intelligence',
    tagline:
      'Self-orchestrating AI agents operating directly within your ERP, CRM, and supply chain.',
    architecture: {
      layer1: 'Enterprise Unstructured Data & ERP Data Lakes',
      layer2: 'Nybix Agentic LLM Orchestrator & Multi-Step Reasoning Graph',
      layer3: 'Autonomous Invoice Matching, Customer Service & Forecasting',
    },
    benefits: [
      'Automated 3-way invoice matching & ERP posting without humans',
      'Predictive supply chain stockout warning algorithms',
      'Enterprise-grade private vector databases with zero data leakage',
      'Domain-tuned copilots for executive decision acceleration',
    ],
    metric: '72% Workload',
    metricLabel: 'Routine administrative tasks fully automated',
  },
  {
    id: 'digital-web',
    title: 'High-Concurrency Web & Mobile Portals',
    badge: 'Digital Engineering',
    tagline:
      'Sub-second digital platforms built for millions of transactions, vendor portals, and field teams.',
    architecture: {
      layer1: 'Microservices & Enterprise REST/GraphQL APIs',
      layer2: 'Edge-Rendered Next.js 15 & React Native Unified Runtime',
      layer3: 'Offline-First Field Applications & B2B Customer Portals',
    },
    benefits: [
      'Sub-50ms global latency for heavy enterprise portal queries',
      'Field technician apps with robust offline SQLite sync',
      'Enterprise SSO, Role-Based Access Control (RBAC), SOC2 Type II',
      'Auto-scaling Kubernetes infrastructure with zero-downtime rollouts',
    ],
    metric: '99.99%',
    metricLabel: 'Guaranteed platform availability SLA',
  },
  {
    id: 'commerce',
    title: 'Enterprise Omnichannel B2B/B2C Commerce',
    badge: 'Revenue Velocity',
    tagline:
      'Unified digital commerce engines directly synced with multi-warehouse ERP inventory.',
    architecture: {
      layer1: 'SAP Inventory, Tiered Pricing & Warehouse Management',
      layer2: 'Headless Commerce API & High-Speed Checkout Middleware',
      layer3: 'Global Multi-Currency, Multi-Brand Digital Storefronts',
    },
    benefits: [
      'B2B custom contract pricing, credit limits & approval workflows',
      'Instant multi-warehouse inventory updates within seconds',
      'High-converting mobile-first checkout flows',
      'Over $150M+ annual transaction throughput capacity',
    ],
    metric: '3.2x',
    metricLabel: 'Average increase in B2B digital order volume',
  },
];

/**
 * Template 4 — Initial simulated agent logs
 */
export const template4SimulatedLogs = [
  {
    time: '10:42:01',
    level: 'SYS',
    msg: 'SAP S/4HANA Cloud connection verified. BTP endpoints healthy.',
    status: 'success',
  },
  {
    time: '10:42:04',
    level: 'AI-AGENT',
    msg: 'Document Intelligence parsing 1,200 supplier invoices... 99.8% match rate.',
    status: 'active',
  },
  {
    time: '10:42:09',
    level: 'SYNC',
    msg: 'B2B Commerce catalog updated with real-time warehouse inventory across 8 hubs.',
    status: 'success',
  },
];
