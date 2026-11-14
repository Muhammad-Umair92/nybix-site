import logoClean from '../assets/logo/nybix-logo-clean.png';
import logoWhite from '../assets/logo/nybix-logo-white.png';

/**
 * Official Nyabix Company Information, Contact Channels, Real Clients & Proprietary Products
 * Source: Official Requirements Brief (Nyabix_Website_Details.md & WhatsApp Scoping Brief)
 */

export const companyInfo = {
  name: 'Nyabix Technologies',
  email: 'nyabix.tech@gmail.com',
  logoClean: logoClean,
  logoWhite: logoWhite,
  logos: {
    clean: logoClean,
    white: logoWhite,
  },
  phones: {
    pkDisplay: '+92 300 1NYABIX / +92 300 1692249',
    pkCall: '+923001692249',
    usDisplay: '+1 (469) 805-2733',
    usCall: '+14698052733',
  },
  locations: 'Dallas (USA) • Karachi (PK)',
  
  // Real enterprise clients specified in the brief
  clients: [
    {
      id: 'parco',
      name: 'PARCO',
      fullName: 'Pak-Arab Refinery Limited',
      industry: 'Energy & Petrochemical Infrastructure',
      solution: 'SF Ariba & Oracle ERP Integration',
      metric: '60% Faster PO Cycles',
      desc: 'Seamless SAP SF Ariba procurement orchestration integrated with Oracle refinery logistics and SAP S/4HANA core.',
    },
    {
      id: 'imc',
      name: 'IMC (Toyota)',
      fullName: 'Indus Motor Company',
      industry: 'Automotive Manufacturing & Retail Commerce',
      solution: 'Full-Stack E-Commerce & Mobile Apps',
      metric: 'Unified Web + Mobile',
      desc: 'Modern unified e-commerce platform with responsive Next.js frontend, React Native Android/iOS apps, and centralized inventory.',
    },
    {
      id: 'pso',
      name: 'PSO',
      fullName: 'Pakistan State Oil',
      industry: 'National Fuel Distribution & Supply Chain',
      solution: 'AP Console & Automated Invoicing',
      metric: '25,000+ Manifests/Mo',
      desc: 'Nybix AP Console document intelligence for high-frequency freight manifest parsing and ERP invoice reconciliation.',
    },
  ],

  // Proprietary Nyabix Products from the brief
  products: [
    {
      id: 'ap-console',
      name: 'AP Console',
      tagline: 'Autonomous AI Accounts Payable & Invoicing Engine',
      category: 'Enterprise AI Product',
      badge: 'Proprietary Solution',
      desc: 'End-to-end automated 3-way matching of supplier invoices against purchase orders and SAP S/4HANA / Oracle ERP records with zero human data entry.',
      capabilities: [
        'Automated 3-way invoice matching & ERP line item posting',
        'Sub-second multi-page OCR parsing with 99.8% field accuracy',
        'Direct RFC connector for SAP S/4HANA, SF Ariba & Oracle',
        'Smart exception workflows & vendor duplicate detection',
      ],
      impact: '75% faster invoice turnaround',
    },
    {
      id: 'trip-planner',
      name: 'Trip Planner',
      tagline: 'Intelligent Corporate Itinerary & Logistics Optimization',
      category: 'Smart Logistics AI',
      badge: 'Proprietary Solution',
      desc: 'AI-driven multi-modal travel and fleet route planning engine with corporate budget optimization, automated approval flows, and real-time disruption handling.',
      capabilities: [
        'Autonomous multi-leg travel route & schedule optimization',
        'Real-time corporate travel policy and expense enforcement',
        'Direct calendar and corporate ERP cost-center synchronization',
        'Dynamic disruption detection and automated alternative booking',
      ],
      impact: '35% reduction in corporate travel planning hours',
    },
  ],
  // Official About Us, Mission & Vision from Client Brief
  about: {
    title: 'About Nyabix',
    headline: 'Turning Ideas into Innovative Digital Solutions',
    lead: 'At Nyabix, we are a technology-driven company committed to turning ideas into innovative digital solutions.',
    body: [
      'We specialize in AI development, mobile application development, web development, e-commerce solutions, and enterprise software development.',
      'From creating powerful mobile applications for Android and cross-platform devices to building intelligent AI systems and scalable web applications, we help businesses embrace technology and achieve their goals.',
      'Our focus is on delivering high-quality, reliable, and customized solutions that improve efficiency, enhance user experiences, and support business growth.',
    ],
    mission: 'To empower businesses through innovative technology and exceptional digital solutions.',
    vision: 'To become a trusted technology partner for businesses worldwide.',
    specialties: [
      'AI Development',
      'Android & Cross-Platform Mobile Apps',
      'Scalable Web Portals',
      'E-Commerce Solutions',
      'Enterprise Software & ERP Integrations',
      'Dedicated 24/7 Offshore Support',
    ],
  },
};

