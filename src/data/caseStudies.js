/**
 * Real Executive Case Studies (IMC, PARCO, PSO)
 * Sourced directly from official client brief (Nyabix_Website_Details.md & WhatsApp scoping)
 */

export const template3CaseStudies = [
  {
    client: 'IMC (Indus Motor Company - Toyota)',
    sector: 'Automotive & Digital Commerce',
    challenge:
      'Indus Motor Company needed a centralized digital platform to manage online operations, provide customers with a seamless shopping experience across web and mobile devices, and simplify real-time order and inventory management.',
    solution:
      'Nybix designed and developed a complete full-stack e-commerce ecosystem featuring a modern responsive Next.js/React website, native-feel iOS & Android mobile applications built on React Native, centralized admin dashboard, secure payment gateway, and scalable Node.js/PostgreSQL APIs.',
    impact:
      'Established unified web & mobile shopping experience across Pakistan; automated order tracking and catalog management; created a resilient, scalable foundation for future digital expansion.',
    tech: 'React.js, Next.js, React Native, Node.js, Express, PostgreSQL, Docker',
  },
  {
    client: 'PARCO (Pak-Arab Refinery Limited)',
    sector: 'Energy & Petrochemical Infrastructure',
    challenge:
      'Complex multi-system procurement across refinery operations, marine terminals, and cross-country pipeline networks, resulting in delayed vendor reconciliations and siloed Oracle/SAP data.',
    solution:
      'Nybix architected an enterprise integration bridge unifying SAP SF Ariba procurement with legacy Oracle databases and SAP S/4HANA core, implementing clean-core BTP extension services.',
    impact:
      '60% acceleration in purchase order approval cycle times; unified procurement visibility across refinery operations; 100% compliance with corporate audit governance.',
    tech: 'SAP S/4HANA, SF Ariba, Oracle Cloud ERP, SAP BTP, Custom Fiori',
  },
  {
    client: 'PSO (Pakistan State Oil)',
    sector: 'National Fuel Distribution & Supply Chain',
    challenge:
      'Manual reconciliation of over 25,000 monthly high-volume paper manifests and supplier invoices across nationwide fuel depots, leading to invoice backlogs and demurrage exposure.',
    solution:
      'Nybix deployed the proprietary AP Console with custom document intelligence and computer vision models for automated 3-way matching and direct SAP financial posting.',
    impact:
      'Automated processing of 25,000+ monthly delivery manifests with 99.8% OCR match accuracy; 5-day reduction in Days Sales Outstanding (DSO); zero demurrage claims.',
    tech: 'AP Console, Computer Vision, OCR Models, SAP RFCs, PostgreSQL',
  },
];
