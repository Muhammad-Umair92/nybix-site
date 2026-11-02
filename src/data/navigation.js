import { companyInfo } from './company';

/**
 * Navigation configurations for each template based on official brief
 */

export const template1Nav = {
  items: [
    { label: 'Services', href: '#services' },
    {
      label: 'SAP & SF Ariba',
      href: '#sap-practice',
      badge: 'Core',
    },
    { label: 'AI & AP Console', href: '#ai-practice' },
    { label: 'Mobile & Web', href: '#digital' },
    { label: 'Clients (PARCO • IMC • PSO)', href: '#industries' },
  ],
  topBarLeft: 'Certified SAP & AI Practice | SF Ariba • Oracle • Mobile',
  topBarRight: `${companyInfo.phones.pkDisplay} | ${companyInfo.phones.usDisplay}`,
};

export const template2Nav = {
  filterItems: [
    { id: 'sap', label: 'SAP & Ariba' },
    { id: 'ai', label: 'AI & AP Console' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Platform' },
    { id: 'ecom', label: 'E-Commerce' },
    { id: 'support', label: 'Offshore Support' },
  ],
};

export const template3Nav = {
  items: [
    { label: 'Advisory Pillars', href: '#strategic-pillars' },
    { label: 'Case Studies (IMC • PARCO • PSO)', href: '#case-studies' },
    { label: 'Methodology', href: '#methodology' },
  ],
  topBarLabel: 'Nyabix Strategic Advisory',
  topBarSubtext: 'Enterprise SAP, SF Ariba & Autonomous AI',
  topBarLocations: 'Dallas (USA) • Karachi (PK)',
};

export const template4Nav = {
  items: [
    { label: 'Solutions Matrix', href: '#solutions' },
    { label: 'Proprietary Products', href: '#solutions' },
    { label: 'Client Telemetry (PSO • IMC)', href: '#terminal' },
    { label: 'The Nybix Edge', href: '#advantage' },
  ],
};

/**
 * Compare modal template options
 */
export const compareTemplates = [
  {
    id: 1,
    label: 'Template 1',
    title: 'Enterprise SAP & Ariba Leader',
    desc: 'Modeled after SAP global portals and Ernst & Young (EY) enterprise technology pages.',
    features: [
      '✓ Traditional SAP Enterprise Style',
      '✓ Tabbed Core Service Drill-Downs',
      '✓ Verified Client Cards (PARCO, IMC, PSO)',
      '✓ Authority & Compliance Trust Badges',
    ],
    buttonClass: 'bg-[#0070F2] text-white hover:bg-blue-700',
  },
  {
    id: 2,
    label: 'Template 2',
    title: 'Modern Tech & AI Innovator',
    desc: 'Silicon Valley modern tech aesthetic (like Stripe, Vercel, modern cloud consultancies).',
    features: [
      '✓ Electric High-Contrast Vibe',
      '✓ Interactive Service Filter Grid',
      '✓ Dynamic 4-Step Velocity Process',
      '✓ Interactive ROI Savings Calculator',
    ],
    buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
  },
  {
    id: 3,
    label: 'Template 3',
    title: 'Global Digital Advisory',
    desc: 'Executive Big-4 management consultancy style (McKinsey / Deloitte / EY Advisory).',
    features: [
      '✓ Deep Corporate Tone & White',
      '✓ Strategic Pillar Deep-Dives',
      '✓ Real Case Studies: IMC Toyota & PARCO',
      '✓ Executive Scoping Briefings',
    ],
    buttonClass: 'bg-[#003882] text-white hover:bg-slate-800',
  },
  {
    id: 4,
    label: 'Template 4',
    title: 'Futuristic Systems & Products',
    desc: 'Next-gen Apple & Linear inspired enterprise tech (clean micro-gradients & telemetry).',
    features: [
      '✓ Proprietary Products: AP Console & Trip Planner',
      '✓ Dynamic 3-Tier Architecture Blueprint',
      '✓ Live Real-Time Telemetry Terminal',
      '✓ 24/7 Dedicated Offshore Squad Support',
    ],
    buttonClass: 'bg-gradient-to-r from-blue-600 to-[#0070F2] text-white hover:from-blue-700 hover:to-blue-600 shadow-sm',
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
