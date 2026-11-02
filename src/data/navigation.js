/**
 * Navigation configurations for each template
 */

export const template1Nav = {
  items: [
    { label: 'Services', href: '#services' },
    {
      label: 'SAP Practice',
      href: '#sap-practice',
      badge: 'Core',
    },
    { label: 'AI & Automation', href: '#ai-practice' },
    { label: 'Web & Mobile', href: '#digital' },
    { label: 'Industries', href: '#industries' },
  ],
  topBarLeft: 'Certified Enterprise Practice',
  topBarRight: 'Global Delivery Excellence',
};

export const template2Nav = {
  filterItems: [
    { id: 'sap', label: 'SAP Systems' },
    { id: 'ai', label: 'AI & Agents' },
    { id: 'web', label: 'Web & Mobile' },
    { id: 'ecom', label: 'E-Commerce' },
  ],
};

export const template3Nav = {
  items: [
    { label: 'Advisory Pillars', href: '#strategic-pillars' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Executive Briefings', href: '#insights' },
    { label: 'The Velocity Sprint', href: '#methodology' },
  ],
  topBarLabel: 'Nybix Strategic Advisory',
  topBarSubtext: 'Transforming Fortune 1000 & High-Growth Enterprises',
  topBarLocations: 'New York • London • Karachi',
};

export const template4Nav = {
  items: [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Architecture Engine', href: '#architecture' },
    { label: 'The Nybix Edge', href: '#advantage' },
    {
      label: 'Live Agent Telemetry',
      href: '#terminal',
      pulse: true,
    },
  ],
};

/**
 * Compare modal template options
 */
export const compareTemplates = [
  {
    id: 1,
    label: 'Template 1',
    title: 'Enterprise SAP Leader',
    desc: 'Modeled after SAP global portals and Ernst & Young (EY) enterprise technology pages.',
    features: [
      '✓ Traditional SAP Blue (#0070F2)',
      '✓ Tabbed Core Service Drill-Downs',
      '✓ Vertical Industry Practice Cards',
      '✓ Authority & Compliance Trust Badges',
    ],
    buttonClass:
      'bg-[#0070F2] text-white hover:bg-blue-700',
  },
  {
    id: 2,
    label: 'Template 2',
    title: 'Modern Tech & AI Innovator',
    desc: 'Silicon Valley modern tech aesthetic (like Stripe, Vercel, modern cloud consultancies).',
    features: [
      '✓ Electric Cobalt (#2563EB) & White',
      '✓ Interactive Service Filter Grid',
      '✓ Dynamic 4-Step Velocity Process',
      '✓ Interactive ROI Savings Calculator',
    ],
    buttonClass:
      'bg-blue-600 text-white hover:bg-blue-700',
  },
  {
    id: 3,
    label: 'Template 3',
    title: 'Global Digital Advisory',
    desc: 'Executive Big-4 management consultancy style (McKinsey / Deloitte / EY Advisory).',
    features: [
      '✓ Deep Navy (#0B192C) & White',
      '✓ Strategic Pillar Deep-Dives',
      '✓ Detailed Executive Case Studies',
      '✓ Thought Leadership Briefings',
    ],
    buttonClass:
      'bg-[#003882] text-white hover:bg-slate-800',
  },
  {
    id: 4,
    label: 'Template 4',
    title: 'Futuristic Tech & AI Systems',
    desc: 'Next-gen Apple & Linear inspired enterprise tech (clean micro-gradients & telemetry).',
    features: [
      '✓ Ice Blue, Cobalt & Pure White',
      '✓ Dynamic 3-Tier Architecture Blueprint',
      '✓ Live AI Agent Telemetry Console',
      '✓ Modern Value vs Traditional Matrix',
    ],
    buttonClass:
      'bg-gradient-to-r from-blue-600 to-[#0070F2] text-white hover:from-blue-700 hover:to-blue-600 shadow-sm',
  },
];

/**
 * Template switcher tabs
 */
export const templateSwitcherTabs = [
  { id: 1, label: 'Enterprise SAP' },
  { id: 2, label: 'Modern Tech & AI' },
  { id: 3, label: 'Digital Advisory' },
  { id: 4, label: 'Futuristic Tech' },
];
