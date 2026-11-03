import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Terminal,
  Zap,
  Check,
  Sliders,
  Workflow,
  Sparkles,
  Smartphone,
  Building2,
  Cpu,
  Layers,
  ChevronRight,
  Gauge,
  SlidersHorizontal,
  Compass,
  Eye,
  CheckCircle2,
  Car,
  Fuel,
  Headphones,
  RotateCw,
} from 'lucide-react';
import { companyInfo } from '../data/company';
import { template3CaseStudies } from '../data/caseStudies';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import ClientLogoCloud from '../components/ClientLogoCloud';
import AboutSection from '../components/AboutSection';

/**
 * Template 6: Neo-Architect / Swiss Tech Kinetic Bento Studio
 * High-end architectural tech design inspired by Stripe, Teenage Engineering, Apple Pro, and Cosmos.
 * Tactile micro-interactions, live 3-mode architectural cockpit in the hero,
 * interactive ROI and pod builder, and real enterprise case studies (IMC Toyota, PARCO, PSO).
 */
export default function Template6NeoBento({ onOpenContact }) {
  // Hero 3-Mode Architecture Switcher
  const [heroMode, setHeroMode] = useState(0);

  // Bento Interactive Pod Calculator
  const [podType, setPodType] = useState('fullstack');
  const [engineerCount, setEngineerCount] = useState(4);

  // Bento Interactive AP Console ROI Slider
  const [monthlyInvoices, setMonthlyInvoices] = useState(2500);

  // Hero Mode Specs
  const heroSpecs = [
    {
      id: 'ai-products',
      tag: '01 / PROPRIETARY AI SUITE',
      title: 'AP Console & Trip Planner Engines',
      description:
        'In-house autonomous software: 3-way invoice OCR matching against SAP/Oracle and AI travel itinerary reasoning.',
      stats: [
        { label: 'OCR Accuracy', val: '99.8%' },
        { label: 'Human Touch', val: '0.00s' },
        { label: 'Travel Hours', val: '-35%' },
      ],
      blueprint: 'AI Vision OCR → Multi-Modal Reasoning → SAP RFC Push',
    },
    {
      id: 'sap-core',
      tag: '02 / ENTERPRISE ERP BRIDGES',
      title: 'SAP S/4HANA, SF Ariba & Oracle Clean Core',
      description:
        'Mission-critical cross-vendor supply chain bridges proven at national oil and refinery scale (PARCO & PSO).',
      stats: [
        { label: 'PO Cycle Time', val: '-60%' },
        { label: 'RFC Latency', val: '< 14ms' },
        { label: 'Core Mod', val: 'Zero' },
      ],
      blueprint: 'Clean Core BTP → SF Ariba Network → Oracle Integration',
    },
    {
      id: 'omnichannel',
      tag: '03 / HIGH-CONCURRENCY DIGITAL',
      title: 'Automotive Scale Web & Mobile Platforms',
      description:
        'Unified Next.js portals & React Native iOS/Android platforms handling tens of thousands of orders (IMC Toyota).',
      stats: [
        { label: 'Monthly Orders', val: '42,000+' },
        { label: 'Platform Uptime', val: '99.99%' },
        { label: 'Page Latency', val: '< 45ms' },
      ],
      blueprint: 'Next.js 15 → Node/Postgres API → React Native / Flutter',
    },
  ];

  // Pod options
  const podOptions = {
    fullstack: {
      name: 'Full-Stack Web & Mobile Squad',
      roles: '2 Senior React/Next.js + 1 React Native + 1 QA Engineer',
      savings: '$180,000 / yr saved vs US-only staffing',
      sla: '< 15 min incident response',
      rateMultiplier: 3800,
    },
    sap: {
      name: 'SAP & Enterprise Basis Pod',
      roles: '2 SAP S/4HANA / BTP Devs + 1 SF Ariba Integration Lead + 1 DevOps',
      savings: '$240,000 / yr saved vs US-only staffing',
      sla: '24/7/365 continuous managed Basis',
      rateMultiplier: 4600,
    },
    ai: {
      name: 'Autonomous AI & AP Console Squad',
      roles: '2 Python/LangGraph AI Engineers + 1 Computer Vision Lead + 1 Full-Stack',
      savings: '$210,000 / yr saved vs US-only staffing',
      sla: 'Continuous model tuning & data integrity',
      rateMultiplier: 4200,
    },
  };

  // AP Console Savings Calculation
  const annualHoursSaved = Math.round((monthlyInvoices * 0.12 * 12));
  const estimatedCostSaved = Math.round(annualHoursSaved * 45);

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 font-sans selection:bg-amber-400 selection:text-black">
      
      {/* Swiss Architectural Top Bar */}
      <header className="sticky top-9 z-30 bg-[#0A0D14]/90 backdrop-blur-xl border-b border-white/10 shadow-lg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src={companyInfo.logos.white}
                alt="NYBIX"
                className="h-8 sm:h-9 w-auto object-contain brightness-110"
              />
              <span className="hidden md:inline-block font-mono text-[10px] text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded">
                NEO-BENTO STUDIO
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-medium text-slate-300">
              <a href="#bento-matrix" className="hover:text-amber-400 transition">01 // BENTO MATRIX</a>
              <a href="#pod-builder" className="hover:text-amber-400 transition">02 // OFFSHORE PODS</a>
              <a href="#case-studies" className="hover:text-amber-400 transition">03 // CLIENT DOSSIERS</a>
              <a href="#about" className="hover:text-amber-400 transition">04 // ABOUT US</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenContact}
              className="text-xs font-mono border-amber-400/40 text-amber-300 hover:bg-amber-400/10"
            >
              <span>[ESTIMATE SPRINT]</span>
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenContact}
              className="text-xs font-mono bg-amber-400 text-slate-950 hover:bg-amber-300 font-bold shadow-md shadow-amber-400/20"
            >
              <span>INITIALIZE CONSULTATION →</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section — Architectural Statement with 3-Mode Cockpit */}
      <section className="relative pt-20 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Subtle grid lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          
          {/* Top Specification Pill */}
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
            <span className="tracking-widest uppercase">SYSTEM ARCHITECTURE SPECIFICATION // 2026</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Massive Kinetic Typography */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.04] text-white">
                Engineering <span className="text-amber-400">What’s Next</span> in Enterprise AI & Scalable Platforms.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Nyabix combines the stability of certified SAP S/4HANA & SF Ariba integrations with the speed of proprietary AI products (AP Console & Trip Planner) and high-concurrency mobile commerce platforms.
              </p>

              {/* Verified Client Seals */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500 uppercase">Trusted Delivery:</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-slate-200">PARCO Refinery</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-slate-200">IMC (Toyota)</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-slate-200">Pakistan State Oil (PSO)</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onOpenContact}
                  className="gap-2 bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 text-sm shadow-xl shadow-amber-400/20"
                >
                  <span>Request Architecture Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  as="a"
                  href="#bento-matrix"
                  variant="secondary"
                  size="lg"
                  className="bg-slate-900 border border-white/10 text-slate-200 hover:bg-slate-800 text-sm font-mono"
                >
                  <span>Explore Bento Matrix</span>
                </Button>
              </div>
            </div>

            {/* Right Column: Interactive 3-Mode Architectural Cockpit */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  {heroSpecs[heroMode].tag}
                </span>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setHeroMode(idx)}
                      className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                        heroMode === idx
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Mode Content */}
              <div className="space-y-5 pt-6">
                <div>
                  <h3 className="text-xl font-bold font-display text-white">
                    {heroSpecs[heroMode].title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {heroSpecs[heroMode].description}
                  </p>
                </div>

                {/* Micro Metric Grid */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  {heroSpecs[heroMode].stats.map((st, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-950 border border-white/5 text-center">
                      <div className="text-lg font-bold font-mono text-amber-300">{st.val}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{st.label}</div>
                    </div>
                  ))}
                </div>

                {/* Architectural Blueprint Bar */}
                <div className="p-3 rounded-xl bg-slate-950 border border-amber-400/20 font-mono text-[11px] text-amber-200 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{heroSpecs[heroMode].blueprint}</span>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Fast-Track Deployment: 4-5 Days</span>
                  <button
                    onClick={onOpenContact}
                    className="text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Blueprint Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* World-Class Client Trust Cloud */}
      <div id="clients">
        <ClientLogoCloud dark={true} />
      </div>

      {/* MASSIVE INTERACTIVE BENTO GRID (WOW FACTOR) */}
      <section id="bento-matrix" className="py-24 bg-[#0A0D14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono uppercase tracking-wider">
              <span>BENTO ARCHITECTURE MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
              Tactile, Modular Engineering Capabilities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore how each pillar of Nyabix delivers measurable enterprise velocity and technical sovereignty.
            </p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Bento Card 1: IMC Toyota Automotive Scale (Span 7) */}
            <div className="lg:col-span-7 bg-slate-900/80 rounded-3xl border border-white/10 p-8 flex flex-col justify-between hover:border-amber-400/40 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    CASE STUDY // AUTOMOTIVE COMMERCE
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">42,000+ Orders/Mo</span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                  Indus Motor Company (IMC - Toyota Pakistan) Unified Ecosystem
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Engineered modern Next.js customer web storefronts, native React Native mobile platforms (iOS & Android), and centralized catalog synchronization connecting nationwide authorized Toyota dealerships.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 pt-4 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-white/5">
                    <div className="text-amber-400 font-bold text-base">$1.8M/yr</div>
                    <div className="text-[10px] text-slate-400">Operational Savings</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-white/5">
                    <div className="text-white font-bold text-base">99.99%</div>
                    <div className="text-[10px] text-slate-400">High-Concurrency Uptime</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-white/5">
                    <div className="text-emerald-400 font-bold text-base">100%</div>
                    <div className="text-[10px] text-slate-400">Unified Web + Mobile Sync</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Tech: Next.js 15 • React Native • Node.js • PostgreSQL</span>
                <button
                  onClick={onOpenContact}
                  className="text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bento Card 2: Interactive AP Console Savings Calculator (Span 5) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-white/10 p-8 flex flex-col justify-between hover:border-cyan-400/40 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    AP CONSOLE ROI SIMULATOR
                  </span>
                  <span className="text-slate-400">3-Way Match</span>
                </div>

                <h3 className="text-xl font-bold font-display text-white">
                  Automated Invoice Processing Savings
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Drag the slider to calculate how much AP Console eliminates in manual data entry overhead.
                </p>

                {/* Interactive Slider */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Monthly Invoices:</span>
                    <span className="text-cyan-400 font-bold text-sm">{monthlyInvoices.toLocaleString()} / mo</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={monthlyInvoices}
                    onChange={(e) => setMonthlyInvoices(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                {/* Live Calculated Output */}
                <div className="grid grid-cols-2 gap-3 pt-3 font-mono text-center">
                  <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/20">
                    <div className="text-xl font-bold text-cyan-300">${estimatedCostSaved.toLocaleString()}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Est. Annual Cost Saved</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/20">
                    <div className="text-xl font-bold text-emerald-300">{annualHoursSaved.toLocaleString()} hrs</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Manual Hours Saved</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">SLA: 99.8% Field Extraction</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onOpenContact}
                  className="text-xs text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/10"
                >
                  <span>Request AP Trial</span>
                </Button>
              </div>
            </div>

            {/* Bento Card 3: PARCO Refinery SAP SF Ariba & Oracle (Span 6) */}
            <div className="lg:col-span-6 bg-slate-900/80 rounded-3xl border border-white/10 p-8 flex flex-col justify-between hover:border-blue-400/40 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-blue-400 font-bold flex items-center gap-2">
                    <Fuel className="w-4 h-4" />
                    ENTERPRISE SAP & ARIBA
                  </span>
                  <span className="text-slate-400">Refinery Scale</span>
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                  PARCO Refinery (Pak-Arab Refinery Limited)
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Turnkey cross-vendor integration linking SAP SF Ariba procurement with legacy Oracle databases and SAP S/4HANA clean core, cutting purchase order approval times by 60%.
                </p>

                <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Cross-System Bridge:</span>
                    <span className="text-emerald-400">SF Ariba ⇄ Oracle ⇄ SAP</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Cutover Downtime:</span>
                    <span className="text-white font-bold">Zero Production Disruption</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Clean Core Certified:</span>
                    <span className="text-blue-400">BTP Side-by-Side Extensibility</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified Client Engagement</span>
                <button
                  onClick={onOpenContact}
                  className="text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Architectural Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bento Card 4: Pakistan State Oil (PSO) AP Manifest (Span 6) */}
            <div className="lg:col-span-6 bg-slate-900/80 rounded-3xl border border-white/10 p-8 flex flex-col justify-between hover:border-emerald-400/40 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold flex items-center gap-2">
                    <Fuel className="w-4 h-4" />
                    HIGH-VOLUME OIL & GAS
                  </span>
                  <span className="text-slate-400">National Logistics</span>
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                  Pakistan State Oil (PSO) Document Automation
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Deployed Nybix AP Console document intelligence for high-frequency fuel freight manifest parsing, matching 25,000+ monthly tanker shipments against SAP PO line items.
                </p>

                <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Monthly Document Volume:</span>
                    <span className="text-emerald-400 font-bold">25,000+ Freight Manifests</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Discrepancy Flagging:</span>
                    <span className="text-white font-bold">Autonomous Toll & Weight Matching</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>ERP Synchronization:</span>
                    <span className="text-cyan-400">Automated SAP BSEG Line Item Posting</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified National Oil Infrastructure</span>
                <button
                  onClick={onOpenContact}
                  className="text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect Fuel Delivery Architecture</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DEDICATED 24/7 OFFSHORE POD BUILDER (WOW FACTOR) */}
      <section id="pod-builder" className="py-24 bg-gradient-to-b from-[#0A0D14] via-[#0E1320] to-[#0A0D14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <Headphones className="w-3.5 h-3.5" />
                <span>OFFSHORE POD ENGINE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white leading-tight">
                24/7 Dedicated Offshore Squads with 60%+ TCO Savings
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Scale your engineering bandwidth without compromising technical quality or communication. Our dual-hub model in Dallas (USA) and Karachi (PK) ensures round-the-clock delivery, time-zone overlap, and senior-only engineering talent.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Average Turnaround:</span>
                  <span className="text-emerald-400 font-bold">&lt; 15 Min SLA</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Time-Zone Coverage:</span>
                  <span className="text-cyan-400 font-bold">24 Hours Continuous Overlap</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Direct Collaboration:</span>
                  <span className="text-white font-bold">Slack / Teams / Jira Sync</span>
                </div>
              </div>
            </div>

            {/* Interactive Pod Configurator */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl border border-emerald-500/30 p-8 shadow-2xl backdrop-blur-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">Select Squad Specialization:</span>
                <span className="text-slate-500">Dallas • Karachi Pod</span>
              </div>

              {/* Pod Type Selectors */}
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'fullstack', label: 'Full-Stack & Mobile' },
                  { id: 'sap', label: 'SAP Basis & SF Ariba' },
                  { id: 'ai', label: 'Autonomous AI & AP' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPodType(p.id)}
                    className={`p-3 rounded-xl text-center font-mono text-xs transition cursor-pointer ${
                      podType === p.id
                        ? 'bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-400/20'
                        : 'bg-slate-950 border border-white/10 text-slate-300 hover:text-white'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              {/* Active Pod Spec Details */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between text-emerald-400 font-bold text-sm">
                  <span>{podOptions[podType].name}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-[10px]">Active Deployment</span>
                </div>

                <div className="text-slate-300 text-xs">
                  <strong>Team Composition:</strong> {podOptions[podType].roles}
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                    <div className="text-[10px] text-slate-500">Economic Lift</div>
                    <div className="text-emerald-300 font-bold mt-0.5">{podOptions[podType].savings}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                    <div className="text-[10px] text-slate-500">Incident SLA</div>
                    <div className="text-cyan-300 font-bold mt-0.5">{podOptions[podType].sla}</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={onOpenContact}
                    className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs"
                  >
                    <span>Request Pod Scoping & Contract Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Official About Us Section (Dark Mode Integration) */}
      <AboutSection onOpenContact={onOpenContact} dark={true} />

      {/* Neo-Architect Minimalist Footer */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-14 border-t border-white/10 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-3">
            <img
              src={companyInfo.logos.white}
              alt="NYBIX Technologies"
              className="h-8 w-auto object-contain brightness-110"
            />
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Enterprise technology engineering firm delivering SAP SF Ariba integrations, proprietary AI products (AP Console & Trip Planner), and 24/7 dedicated offshore engineering squads.
            </p>
            <div className="space-y-1 text-slate-300 text-[11px] pt-1">
              <div>Email: <a href={`mailto:${companyInfo.email}`} className="text-amber-400 hover:underline">{companyInfo.email}</a></div>
              <div>PK Hotline: <a href={`tel:${companyInfo.phones.pkCall}`} className="hover:text-white transition">{companyInfo.phones.pkDisplay}</a></div>
              <div>USA Partner: <a href={`tel:${companyInfo.phones.usCall}`} className="hover:text-white transition">{companyInfo.phones.usDisplay}</a></div>
              <div>Hubs: {companyInfo.locations}</div>
            </div>
            <div className="text-slate-500 text-[11px] pt-2">© 2026 Nyabix Technologies. All rights reserved.</div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">AI & In-House</h4>
            <ul className="space-y-2">
              <li><a href="#bento-matrix" className="hover:text-amber-400 transition">AP Console (AI OCR)</a></li>
              <li><a href="#bento-matrix" className="hover:text-amber-400 transition">Trip Planner Engine</a></li>
              <li><a href="#bento-matrix" className="hover:text-amber-400 transition">3-Way PO Automation</a></li>
              <li><a href="#bento-matrix" className="hover:text-amber-400 transition">Private LLM Copilots</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Core Engineering</h4>
            <ul className="space-y-2">
              <li><a href="#bento-matrix" className="hover:text-amber-400 transition">SAP S/4HANA & Ariba</a></li>
              <li><a href="#bento-matrix" className="hover:text-amber-400 transition">Oracle DB Bridges</a></li>
              <li><a href="#bento-matrix" className="hover:text-amber-400 transition">React Native & Flutter</a></li>
              <li><a href="#bento-matrix" className="hover:text-amber-400 transition">Next.js 15 Portals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Verified Delivery</h4>
            <ul className="space-y-2">
              <li><a href="#bento-matrix" className="hover:text-amber-400 transition">Indus Motor Co. (Toyota)</a></li>
              <li><a href="#bento-matrix" className="hover:text-amber-400 transition">PARCO Refinery</a></li>
              <li><a href="#bento-matrix" className="hover:text-amber-400 transition">Pakistan State Oil (PSO)</a></li>
              <li><a href="#pod-builder" className="hover:text-amber-400 transition">24/7 Dedicated Pods</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}

