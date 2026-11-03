import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Terminal,
  Zap,
  Check,
  Workflow,
  Sparkles,
  FileCheck2,
  Navigation,
  Globe2,
  Clock,
  Layers,
  Cpu,
  ChevronRight,
  Play,
  RotateCcw,
  Building2,
  Smartphone,
  ExternalLink,
  Flame,
} from 'lucide-react';
import { companyInfo } from '../data/company';
import { template3CaseStudies } from '../data/caseStudies';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import ClientLogoCloud from '../components/ClientLogoCloud';
import AboutSection from '../components/AboutSection';

/**
 * Template 5: Cyber Luxury / Deep Space AI Matrix
 * High-impact modern design inspired by Silicon Valley tier-1 AI firms (Linear, Raycast, Vercel Ship).
 * Deep obsidian dark canvas, neon ambient glows, interactive AP Console OCR vision simulator,
 * live multi-leg Trip Planner route engine, and real client proof (PARCO, IMC Toyota, PSO).
 */
export default function Template5CyberAI({ onOpenContact }) {
  // Interactive AP Console Scanner State
  const [ocrStep, setOcrStep] = useState(0); // 0: Idle, 1: Scanning, 2: Matched
  const [selectedInvoice, setSelectedInvoice] = useState(0);

  // Interactive Trip Planner State
  const [activeRoute, setActiveRoute] = useState(0);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Sample invoices for AP Console live demo
  const sampleInvoices = [
    {
      vendor: 'Pak-Arab Refinery Corp (PARCO)',
      invNumber: 'INV-2026-90412',
      poRef: 'PO-SAP-450098124',
      amount: '$148,250.00',
      items: 'Industrial Refinery Catalyst (Grade 4A) • 12 Units',
      status: 'Ready for 3-Way Verification',
    },
    {
      vendor: 'Indus Motor Co. (Toyota Pakistan)',
      invNumber: 'INV-2026-88102',
      poRef: 'PO-SAP-771029411',
      amount: '$84,900.00',
      items: 'Next.js Regional Hub Inventory Sync Middleware Licenses',
      status: 'Ready for 3-Way Verification',
    },
    {
      vendor: 'Pakistan State Oil (PSO Fleet Logistics)',
      invNumber: 'INV-2026-77319',
      poRef: 'PO-SAP-330198420',
      amount: '$219,400.00',
      items: 'Fuel Tanker Fleet Automated Manifest Reconciliation',
      status: 'Ready for 3-Way Verification',
    },
  ];

  // Sample routes for Trip Planner live demo
  const sampleRoutes = [
    {
      title: 'Executive Multi-Leg: Dallas (USA) ⇄ Tokyo ⇄ Karachi (PK)',
      purpose: 'Toyota Automotive Platform Steering & Technology Pod Alignment',
      baselineCost: '$14,200',
      optimizedCost: '$9,850',
      hoursSaved: '18.5 hrs',
      policyScore: '100% Compliant',
    },
    {
      title: 'Refinery Technical Audit: Dallas HQ ⇄ PARCO Hubs ⇄ Dubai',
      purpose: 'SAP SF Ariba & Oracle Cross-Database Cutover Governance',
      baselineCost: '$8,900',
      optimizedCost: '$6,150',
      hoursSaved: '11.0 hrs',
      policyScore: '100% Compliant',
    },
  ];

  // Run AP Console Scan Simulation
  const handleRunScan = () => {
    setOcrStep(1);
    setTimeout(() => {
      setOcrStep(2);
    }, 1200);
  };

  const handleResetScan = () => {
    setOcrStep(0);
  };

  // Run Trip Planner Optimization Simulation
  const handleOptimizeRoute = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Sleek Floating Glassmorphic Navbar */}
      <nav className="sticky top-9 z-30 bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src={companyInfo.logos.white}
                alt="NYBIX"
                className="h-8 sm:h-9 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform"
              />
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                CYBER MATRIX OS
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300">
              <a href="#ap-simulator" className="hover:text-cyan-400 transition flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                AP Console Simulator
              </a>
              <a href="#trip-planner" className="hover:text-cyan-400 transition">Trip Planner</a>
              <a href="#disciplines" className="hover:text-cyan-400 transition">Engineering Matrix</a>
              <a href="#clients" className="hover:text-cyan-400 transition">Enterprise Proof</a>
              <a href="#about" className="hover:text-cyan-400 transition">About Us</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="gradient"
              size="sm"
              shape="pill"
              onClick={onOpenContact}
              className="gap-2 text-xs bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Launch 4-5 Day Sprint</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section — Deep Space Neon Aurora Canvas */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-white/10">
        
        {/* Ambient Neon Glow Orbs */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/20 to-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[450px] bg-gradient-to-bl from-indigo-600/20 via-sky-600/15 to-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        {/* Micro cyber grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Live Operational Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
              <span>BATTLE-TESTED AT PARCO • IMC (TOYOTA) • PSO</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400">99.8% AP MATCH SLA</span>
            </div>

            {/* Giant Kinetic Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.06]">
              Autonomous Intelligence for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
                Mission-Critical Enterprise
              </span>
              .
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Nyabix bridges deep-tier SAP S/4HANA & SF Ariba stability with bleeding-edge AI products (<strong className="text-white">AP Console & Trip Planner</strong>), native mobile architectures, and 24/7 offshore engineering pods.
            </p>

            {/* High-Impact Actions */}
            <div className="flex flex-wrap justify-center items-center gap-4 pt-3">
              <Button
                variant="primary"
                size="lg"
                shape="pill"
                onClick={onOpenContact}
                className="gap-2.5 text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-102 transition-all"
              >
                <span>Initiate Architecture Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                as="a"
                href="#ap-simulator"
                variant="secondary"
                size="lg"
                shape="pill"
                className="text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10"
              >
                <span>Test AP Console Live</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </Button>
            </div>

            {/* Hero Live Telemetry Strip */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
              
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">AP Console SLA</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">99.8%</div>
                <div className="text-xs text-slate-400">Automated 3-Way Accuracy</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">SAP RFC Latency</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">&lt; 14ms</div>
                <div className="text-xs text-slate-400">Clean Core BTP Bridges</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-purple-400">Automotive Scale</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">42,000+</div>
                <div className="text-xs text-slate-400">Monthly Orders (IMC Toyota)</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400">Offshore Pods</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">24/7/365</div>
                <div className="text-xs text-slate-400">Dallas • Karachi Overlap</div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* World-Class Client Trust Cloud */}
      <div id="clients">
        <ClientLogoCloud dark={true} />
      </div>

      {/* FEATURE SPOTLIGHT 1: Interactive AP Console OCR Simulator (WOW Factor!) */}
      <section id="ap-simulator" className="py-24 bg-gradient-to-b from-[#030712] via-[#050C1B] to-[#030712] border-b border-white/10 relative overflow-hidden">
        
        {/* Glow behind the simulator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/10 blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proprietary In-House AI Engine</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              AP Console: Autonomous 3-Way Matching in Action
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Experience how our proprietary AI document vision pipeline ingests unstructured supplier invoices, extracts line items with 99.8% precision, and auto-posts to SAP S/4HANA & Oracle with zero manual typing.
            </p>
          </div>

          {/* Interactive Simulator Shell */}
          <div className="bg-slate-900/90 rounded-3xl border border-cyan-500/30 p-6 sm:p-10 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl">
            
            {/* Top Controller Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Select Real-World Test Scenario:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {sampleInvoices.map((inv, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedInvoice(idx);
                        setOcrStep(0);
                      }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        selectedInvoice === idx
                          ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-750 border border-white/5'
                      }`}
                    >
                      Scenario {idx + 1}: {inv.vendor.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="flex items-center gap-3">
                {ocrStep === 0 && (
                  <button
                    onClick={handleRunScan}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:scale-102 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run AI 3-Way Match</span>
                  </button>
                )}
                {ocrStep === 1 && (
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-900/60 border border-blue-400/40 text-blue-300 font-mono text-xs animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>Neural OCR Parsing Document...</span>
                  </div>
                )}
                {ocrStep === 2 && (
                  <button
                    onClick={handleResetScan}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs transition cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Simulation</span>
                  </button>
                )}
              </div>
            </div>

            {/* Simulator Split Screen */}
            <div className="grid lg:grid-cols-12 gap-8 pt-8 items-stretch">
              
              {/* Left Side: Mock Invoice Document with Visual Scan Line */}
              <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl border border-white/10 p-6 relative overflow-hidden font-mono text-xs flex flex-col justify-between">
                
                {/* Animated Scan Beam */}
                {ocrStep === 1 && (
                  <div className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-[bounce_2s_infinite] pointer-events-none" />
                )}

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 text-slate-500 text-[11px]">
                    <span>UNSTRUCTURED PDF INPUT</span>
                    <span className="text-cyan-400 font-semibold">{sampleInvoices[selectedInvoice].invNumber}</span>
                  </div>

                  <div className="space-y-4 pt-4 text-slate-300">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">Vendor Entity</div>
                      <div className="text-white font-bold text-sm mt-0.5">{sampleInvoices[selectedInvoice].vendor}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">PO Reference</div>
                        <div className="text-cyan-300 font-semibold">{sampleInvoices[selectedInvoice].poRef}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Invoice Total</div>
                        <div className="text-emerald-400 font-bold text-base">{sampleInvoices[selectedInvoice].amount}</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900 border border-white/5">
                      <div className="text-[10px] text-slate-500 uppercase">Line Item Manifest</div>
                      <div className="text-slate-200 text-xs mt-1 leading-relaxed">
                        {sampleInvoices[selectedInvoice].items}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Input Format: OCR PDF/TIFF</span>
                  <span className="text-emerald-400">Encrypted Transport (AES-256)</span>
                </div>

              </div>

              {/* Right Side: Live Autonomous Execution & SAP Posting Console */}
              <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl border border-white/10 p-6 flex flex-col justify-between font-mono text-xs">
                
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 text-slate-500 text-[11px]">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>NYBIX AP CONSOLE REASONING ENGINE</span>
                    </span>
                    <span className="text-slate-400">SAP S/4HANA BTP</span>
                  </div>

                  <div className="space-y-3 pt-4">
                    
                    {/* Stage 1 */}
                    <div className={`p-3 rounded-xl border transition-all ${
                      ocrStep >= 1
                        ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-200'
                        : 'bg-slate-900/50 border-white/5 text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Step 1: Multi-Modal Document Extraction</span>
                        <span>{ocrStep >= 1 ? '✓ Complete (99.8%)' : 'Waiting...'}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Parsed 28 key-value bounding boxes with zero positional template dependencies.
                      </p>
                    </div>

                    {/* Stage 2 */}
                    <div className={`p-3 rounded-xl border transition-all ${
                      ocrStep === 2
                        ? 'bg-blue-950/40 border-blue-500/40 text-blue-200'
                        : 'bg-slate-900/50 border-white/5 text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Step 2: 3-Way Match vs PO & Goods Receipt</span>
                        <span>{ocrStep === 2 ? '✓ 100% Match' : 'Waiting...'}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Cross-referenced line items, quantity, tax tolerance & vendor master tables.
                      </p>
                    </div>

                    {/* Stage 3 */}
                    <div className={`p-3 rounded-xl border transition-all ${
                      ocrStep === 2
                        ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-200'
                        : 'bg-slate-900/50 border-white/5 text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Step 3: Direct SAP S/4HANA Ledger Post</span>
                        <span>{ocrStep === 2 ? '✓ Auto-Posted' : 'Waiting...'}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Posted to SAP BKPF/BSEG via RFC bridge. Human touch time: <strong>0.00 seconds</strong>.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Final Verification Banner */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-slate-400">Cycle Time: </span>
                    <strong className="text-white">{ocrStep === 2 ? '1.18 seconds' : '--'}</strong>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onOpenContact}
                    className="text-[11px] border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10"
                  >
                    <span>Request AP Console Trial</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURE SPOTLIGHT 2: Interactive Trip Planner AI Logistics Optimizer */}
      <section id="trip-planner" className="py-24 bg-[#030712] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 border border-indigo-500/40 text-indigo-400 text-xs font-mono uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5" />
                <span>Proprietary Smart Logistics AI</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white leading-tight">
                Trip Planner: Enterprise Itinerary & Route Reasoning
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Autonomous travel and logistics optimization engine that balances executive corporate travel policies, real-time airline/fleet pricing, and dynamic disruption handling while auto-syncing cost centers into SAP.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>35% reduction in corporate travel planning hours</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Automated disruption rebooking & expense authorization</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span>Direct ERP cost-center & calendar ledger integration</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenContact}
                  className="gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30"
                >
                  <span>Schedule Trip Planner Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            {/* Interactive Trip Planner Interactive Card */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl border border-indigo-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <span className="font-mono text-indigo-300 uppercase tracking-wider">Interactive Route Engine</span>
                <span className="text-slate-400 font-mono text-[11px]">AI Multi-Leg Optimizer</span>
              </div>

              {/* Route Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
                {sampleRoutes.map((rt, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveRoute(i)}
                    className={`p-3 rounded-xl text-left font-mono text-xs transition cursor-pointer ${
                      activeRoute === i
                        ? 'bg-indigo-950 border border-indigo-400 text-white'
                        : 'bg-slate-950/80 border border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-xs truncate">{rt.title.split(':')[0]}</div>
                    <div className="text-[10px] text-slate-400 truncate mt-1">{rt.purpose}</div>
                  </button>
                ))}
              </div>

              {/* Active Route Telemetry Breakdown */}
              <div className="bg-slate-950 rounded-2xl border border-white/10 p-5 space-y-4 font-mono text-xs">
                <div className="text-white font-bold leading-relaxed">
                  {sampleRoutes[activeRoute].title}
                </div>
                <div className="text-slate-400 text-[11px]">
                  Objective: {sampleRoutes[activeRoute].purpose}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-white/5">
                    <div className="text-[10px] text-slate-500">Standard Cost</div>
                    <div className="text-slate-400 font-bold mt-0.5 line-through">{sampleRoutes[activeRoute].baselineCost}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30">
                    <div className="text-[10px] text-emerald-400">AI Optimized</div>
                    <div className="text-emerald-300 font-bold mt-0.5">{sampleRoutes[activeRoute].optimizedCost}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
                    <div className="text-[10px] text-cyan-400">Hours Saved</div>
                    <div className="text-cyan-300 font-bold mt-0.5">{sampleRoutes[activeRoute].hoursSaved}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30">
                    <div className="text-[10px] text-purple-400">Compliance</div>
                    <div className="text-purple-300 font-bold mt-0.5">100% Policy</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={handleOptimizeRoute}
                    disabled={isOptimizing}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isOptimizing ? 'Re-Routing Itinerary Graph...' : 'Re-Run Optimization Model'}</span>
                  </button>
                  <span className="text-[11px] text-slate-500">Live API Feeds: Amadeus • Sabre • ERP</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CORE DISCIPLINES BENTO MATRIX */}
      <section id="disciplines" className="py-24 bg-gradient-to-b from-[#030712] via-[#050C1B] to-[#030712] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <SectionHeader
            badge="Full-Stack Technical Capabilities"
            badgeClassName="text-cyan-400 bg-cyan-950 border border-cyan-500/40"
            heading="Engineered for Scalability, Security & Speed"
            headingClassName="text-white"
            description="Our specialized practices span SAP clean core enterprise stability, autonomous AI engineering, mobile application ecosystems, and 24/7 offshore squads."
            className="mb-14"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Discipline 1: SAP & SF Ariba */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/50 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">SAP S/4HANA & SF Ariba Bridges</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clean-core ERP implementations, SF Ariba procurement orchestration, and Oracle database cross-connectivity proven at refinery scale (PARCO).
              </p>
              <div className="pt-2 text-xs font-mono text-cyan-400">
                ✓ S/4HANA • BTP • Oracle • Fiori • EDI
              </div>
            </div>

            {/* Discipline 2: Mobile App Dev */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-blue-500/50 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-500/40 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">Mobile Application Engineering</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Native iOS (Swift), Android (Kotlin), React Native, Flutter, and Shopify mobile applications built for high concurrency and offline field synchronization.
              </p>
              <div className="pt-2 text-xs font-mono text-blue-400">
                ✓ React Native • Flutter • Swift • Shopify SDK
              </div>
            </div>

            {/* Discipline 3: Web Portals & E-Commerce */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-indigo-500/50 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950 border border-indigo-500/40 text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">High-Speed Web & E-Commerce</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Modern Next.js 15 portals, scalable consumer e-commerce platforms (proven at IMC Toyota scale), and real-time inventory and pricing sync engines.
              </p>
              <div className="pt-2 text-xs font-mono text-indigo-400">
                ✓ Next.js 15 • React 19 • Node.js • PostgreSQL
              </div>
            </div>

            {/* Discipline 4: Dedicated 24/7 Offshore Support */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/50 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">24/7 Dedicated Offshore Squads</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cost-optimized senior engineering pods operating from Karachi & Dallas. 60%+ TCO reduction with continuous managed L1/L2/L3 SLAs and time-zone alignment.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-400">
                ✓ 24/7 Managed SLAs • DevOps • Basis Support
              </div>
            </div>

            {/* Discipline 5: Autonomous AI & LLMs */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-purple-500/50 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-purple-950 border border-purple-500/40 text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">Autonomous AI & Decision Systems</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Multi-agent LangGraph workflows, custom internal enterprise LLM copilots, vector database search, and automated back-office reasoning engines.
              </p>
              <div className="pt-2 text-xs font-mono text-purple-400">
                ✓ LangGraph • Vector DBs • Private LLMs • OCR
              </div>
            </div>

            {/* Discipline 6: Rapid 4-5 Day Prototypes */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-amber-500/50 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-amber-950 border border-amber-500/40 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">4-5 Day Validation Sprints</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We eliminate months of theoretical discovery by shipping interactive, working functional prototypes loaded with real client sample data in just 4-5 days.
              </p>
              <div className="pt-2 text-xs font-mono text-amber-400">
                ✓ Interactive Proof-of-Concept • Zero Risk
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Official About Us Section (Dark Theme Mode) */}
      <AboutSection onOpenContact={onOpenContact} dark={true} />

      {/* GLOBAL DELIVERY COCKPIT (Dallas & Karachi Clocks) */}
      <section className="py-20 bg-[#030712] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-white/10 text-center space-y-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Global Engineering Network</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
              Dallas (USA) • Karachi (PK) Dual-Hub Power
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Our dual-hub model gives enterprise clients the strategic executive proximity of the United States with the 24/7 high-velocity engineering capability of our top-tier Pakistan development campus.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-950 border border-white/5">
                <div className="text-cyan-400 font-bold text-sm">Dallas, Texas (USA)</div>
                <div className="text-slate-400 mt-1">Direct Partner: <a href={`tel:${companyInfo.phones.usCall}`} className="hover:text-white transition">{companyInfo.phones.usDisplay}</a></div>
                <div className="text-[10px] text-emerald-400 mt-2">Executive Strategy & Scoping</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-white/5">
                <div className="text-emerald-400 font-bold text-sm">Karachi (PK Campus)</div>
                <div className="text-slate-400 mt-1">Direct Hotline: <a href={`tel:${companyInfo.phones.pkCall}`} className="hover:text-white transition">{companyInfo.phones.pkDisplay}</a></div>
                <div className="text-[10px] text-cyan-400 mt-2">24/7 Managed Engineering Pods</div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="cta-white"
                size="lg"
                onClick={onOpenContact}
                className="gap-2 text-xs font-bold"
              >
                <span>Connect With Delivery Leadership</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Luxury Footer */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-3">
            <img
              src={companyInfo.logos.white}
              alt="NYBIX Technologies"
              className="h-8 w-auto object-contain brightness-110"
            />
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Enterprise technology firm delivering SAP SF Ariba integrations, autonomous AI products (AP Console & Trip Planner), and 24/7 dedicated offshore engineering squads.
            </p>
            <div className="space-y-1 text-slate-300 text-[11px] pt-1 font-mono">
              <div>Email: <a href={`mailto:${companyInfo.email}`} className="text-cyan-400 hover:underline">{companyInfo.email}</a></div>
              <div>Phone (PK): <a href={`tel:${companyInfo.phones.pkCall}`} className="hover:text-white transition">{companyInfo.phones.pkDisplay}</a></div>
              <div>Phone (USA): <a href={`tel:${companyInfo.phones.usCall}`} className="hover:text-white transition">{companyInfo.phones.usDisplay}</a></div>
              <div>Hubs: {companyInfo.locations}</div>
            </div>
            <div className="text-slate-500 text-[11px] pt-2">© 2026 Nyabix Technologies. All rights reserved.</div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">AI Products</h4>
            <ul className="space-y-2">
              <li><a href="#ap-simulator" className="hover:text-cyan-400 transition">AP Console (AI OCR)</a></li>
              <li><a href="#trip-planner" className="hover:text-cyan-400 transition">Trip Planner Engine</a></li>
              <li><a href="#disciplines" className="hover:text-cyan-400 transition">3-Way PO Matching</a></li>
              <li><a href="#disciplines" className="hover:text-cyan-400 transition">Private LLM Copilots</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Enterprise Practice</h4>
            <ul className="space-y-2">
              <li><a href="#disciplines" className="hover:text-cyan-400 transition">SAP S/4HANA Cloud</a></li>
              <li><a href="#disciplines" className="hover:text-cyan-400 transition">SF Ariba & Oracle</a></li>
              <li><a href="#disciplines" className="hover:text-cyan-400 transition">React Native & Flutter</a></li>
              <li><a href="#disciplines" className="hover:text-cyan-400 transition">Next.js Web Platforms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Verified Clients</h4>
            <ul className="space-y-2">
              <li><a href="#clients" className="hover:text-cyan-400 transition">Indus Motor Co. (Toyota)</a></li>
              <li><a href="#clients" className="hover:text-cyan-400 transition">PARCO Refinery</a></li>
              <li><a href="#clients" className="hover:text-cyan-400 transition">Pakistan State Oil (PSO)</a></li>
              <li><button onClick={onOpenContact} className="hover:text-cyan-400 transition text-left cursor-pointer">Client Portal Access</button></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
