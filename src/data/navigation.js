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
  {
    id: 5,
    label: 'Template 5',
    title: 'Cyber Luxury AI Matrix',
    desc: 'Silicon Valley AI Lab aesthetic (Raycast, Linear, Vercel Ship) with neon dark ambiance and titanium light mode.',
    features: [
      '✓ Interactive AP Console OCR 3-Way Simulator',
      '✓ Multi-Leg Trip Planner Route Reasoning Demo',
      '✓ Built-in Dark & Light Mode Switcher',
      '✓ Live Dual-Hub Clocks: Dallas (USA) & Karachi (PK)',
    ],
    buttonClass: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:opacity-90 shadow-sm',
  },
  {
    id: 6,
    label: 'Template 6',
    title: 'Neo-Architect Bento Studio',
    desc: 'Tactile Swiss tech and architectural kinetic bento layout (Stripe, Teenage Engineering, Apple Pro) with dual modes.',
    features: [
      '✓ 3-Mode Interactive Hero Architecture Switcher',
      '✓ Massive Interactive Bento Matrix Grid',
      '✓ Built-in Dark & Light Mode Switcher',
      '✓ Interactive 24/7 Offshore Squad Pod Builder',
    ],
    buttonClass: 'bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 shadow-sm',
  },
  {
    id: 7,
    label: 'Template 7',
    title: 'Kinetic Aurora Studio',
    desc: 'Award-winning creative web design with floating ambient auroras, interactive kinetic telemetry, and live dark/light mode.',
    features: [
      '✓ Floating Ambient Aurora & Glassmorphic Mesh',
      '✓ Interactive Digital Transformation Slider',
      '✓ Kinetic Solution Engine: AI, SAP & Omnichannel',
      '✓ Built-in One-Click Dark & Light Mode Switcher',
    ],
    buttonClass: 'bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-bold hover:opacity-90 shadow-sm',
  },
  {
    id: 8,
    label: 'Template 8',
    title: 'DigiTrends Agency Studio',
    desc: 'Bold digital agency aesthetic inspired by DigiTrends.co — high-contrast black/red, Rubik typography, hero slider, and marquee client proof.',
    features: [
      '✓ Animated Hero Slider with 3 Rotating Themes',
      '✓ Animated Service Grid with Hover Interactions',
      '✓ Infinite Marquee Client Logos & Award Badges',
      '✓ Built-in Dark & Light Mode Switcher',
    ],
    buttonClass: 'bg-[#ff0000] text-white font-bold hover:bg-[#cc0000] shadow-sm',
  },
  {
    id: 9,
    label: 'Template 9',
    title: 'Apex Sovereign Studio',
    desc: 'Best-of-Best synthesis of Adobe, SAP, DigiTrends, Adbio & Folio3 — interactive solution stage, dual-hub pod model, and live theme synchronization.',
    features: [
      '✓ Adobe-Style Interactive Solution Stage',
      '✓ SAP Mission-Critical Enterprise Authority',
      '✓ Folio3 Dual-Hub Global 24/7 Delivery Pods',
      '✓ Dynamic Global Theme & Dark/Light Synchronizer',
    ],
    buttonClass: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold hover:opacity-95 shadow-md',
  },
];

/**
 * Template switcher tabs
 */
export const templateSwitcherTabs = [
  { id: 1, label: 'Enterprise SAP', short: 'SAP' },
  { id: 2, label: 'Modern Tech & AI', short: 'Tech & AI' },
  { id: 3, label: 'Digital Advisory', short: 'Advisory' },
  { id: 4, label: 'Futuristic Tech', short: 'Futuristic' },
  { id: 5, label: 'Cyber AI Matrix', short: 'Cyber AI' },
  { id: 6, label: 'Neo-Bento Studio', short: 'Neo Bento' },
  { id: 7, label: 'Kinetic Aurora Studio', short: 'Aurora' },
  { id: 8, label: 'DigiTrends Agency', short: 'DigiTrends' },
  { id: 9, label: 'Apex Sovereign Studio', short: 'Apex Studio' },
];
