import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Terminal,
  Zap,
  Check,
  Sparkles,
  Workflow,
  FileCheck2,
  Smartphone,
  Building2,
  Cpu,
  Layers,
  Globe2,
  Clock,
  Sun,
  Moon,
  Play,
  RotateCcw,
  CheckCircle2,
  BarChart3,
  Users,
  Award,
  Activity,
  ExternalLink,
  ChevronRight,
  Gauge,
  SlidersHorizontal,
} from 'lucide-react';
import { companyInfo } from '../data/company';
import { template3CaseStudies } from '../data/caseStudies';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import ClientLogoCloud from '../components/ClientLogoCloud';
import AboutSection from '../components/AboutSection';
import { cn } from '../lib/cn';

/**
 * Template 7: Kinetic Aurora & Spatial Glass Studio
 * Award-winning creative modern web design featuring fluid ambient aurora meshes,
 * interactive spatial architecture nodes, live before/after transformation slider,
 * interactive solution pipeline, real enterprise proof (PARCO, IMC, PSO),
 * and native one-click Dark & Light mode toggle.
 */
export default function Template7AuroraKinetic({ onOpenContact }) {
  // Built-in Dark / Light Mode
  const [isDark, setIsDark] = useState(true);

  // Hero Spatial Node Switcher
  const [activeNode, setActiveNode] = useState(0);

  // Interactive Solution Pipeline State
  const [activePipelineTab, setActivePipelineTab] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [pipelineProgress, setPipelineProgress] = useState(100);

  // Before/After Transformation Slider (0: Traditional Legacy, 1: Nybix Autonomous)
  const [transformationMode, setTransformationMode] = useState(1);
  const [annualSpend, setAnnualSpend] = useState(2500000); // $2.5M baseline

  // 24/7 Offshore Squad Tier
  const [selectedPod, setSelectedPod] = useState(0);

  // Spatial Nodes Data
  const spatialNodes = [
    {
      id: 0,
      title: 'SAP S/4HANA & Ariba',
      category: 'Enterprise Core',
      metric: '60% Faster Cycles',
      client: 'PARCO Refinery',
      desc: 'Deep ERP choreography uniting SAP S/4HANA, SF Ariba, and Oracle logistics with zero manual data entry.',
      gradient: 'from-blue-500 to-indigo-600',
      tag: 'Certified Core',
    },
    {
      id: 1,
      title: 'Autonomous AP Console',
      category: 'Cognitive AI',
      metric: '25,000+ Invoices/Mo',
      client: 'Pakistan State Oil',
      desc: 'Proprietary AI vision engine performing 3-way matching and auto-posting directly to SAP in 3.8 seconds.',
      gradient: 'from-cyan-400 to-blue-500',
      tag: 'Proprietary AI',
    },
    {
      id: 2,
      title: 'Omnichannel Commerce',
      category: 'Mobile & Web',
      metric: 'Unified Ecosystem',
      client: 'IMC (Toyota)',
      desc: 'Next.js high-speed web portal paired with React Native iOS & Android apps with sub-second inventory sync.',
      gradient: 'from-emerald-400 to-teal-600',
      tag: 'High Velocity',
    },
    {
      id: 3,
      title: '24/7 Offshore Pods',
      category: 'Global Engineering',
      metric: '< 15 Min Critical SLA',
      client: 'Dallas ⇄ Karachi',
      desc: 'Dedicated cross-functional squads providing 62% TCO savings and round-the-clock enterprise support.',
      gradient: 'from-amber-400 to-orange-500',
      tag: 'Always On',
    },
  ];

  // Solution Engine Tabs
  const solutionTabs = [
    {
      title: 'Autonomous AP Console',
      badge: 'Cognitive AI',
      headline: 'Autonomous 3-Way Invoice Reconciliation in 3.8s',
      clientRef: 'Deployed at Pakistan State Oil (PSO) — 25,000+ Manifests/Mo',
      steps: [
        { label: 'Multi-Modal Ingest', detail: 'PDF, TIFF, Scan, EDI & EDIFACT stream parsing', time: '0.4s' },
        { label: 'Semantic Extraction', detail: 'LLM + OCR line-item itemization with 99.8% precision', time: '1.2s' },
        { label: '3-Way ERP Match', detail: 'Automated reconciliation against PO & Goods Receipt (GRN)', time: '1.4s' },
        { label: 'SAP Direct Posting', detail: 'API post to S/4HANA table with cryptographic audit hash', time: '0.8s' },
      ],
      kpi1: '99.8%',
      kpi1Label: 'Straight-Through Processing',
      kpi2: '$420K+',
      kpi2Label: 'Annual Direct Labor Saved',
    },
    {
      title: 'SAP SF Ariba Orchestration',
      badge: 'Procurement Core',
      headline: 'End-to-End Strategic Sourcing & Refinery Logistics',
      clientRef: 'Deployed at Pak-Arab Refinery (PARCO) — Critical Infrastructure',
      steps: [
        { label: 'Supplier Portal Sync', detail: 'Automated RFQ distribution and digital vendor quotes', time: 'Instant' },
        { label: 'Catalog Orchestration', detail: 'Unified petrochemical equipment item taxonomy', time: 'Live' },
        { label: 'Oracle Bridge', detail: 'Real-time telemetry synchronization between Oracle and SAP', time: 'Sync' },
        { label: 'Treasury Clearance', detail: 'Multi-tiered compliance approval with cryptographic logs', time: 'Auto' },
      ],
      kpi1: '60%',
      kpi1Label: 'Reduction in PO Cycle Time',
      kpi2: '100%',
      kpi2Label: 'Audit & Compliance Conformance',
    },
    {
      title: 'Omnichannel Retail Commerce',
      badge: 'Mobile & Cloud',
      headline: 'Next-Gen Mobile Commerce & Real-Time Stock Engine',
      clientRef: 'Engineered for Indus Motor Company (Toyota Pakistan)',
      steps: [
        { label: 'Unified Next.js Web', detail: 'Ultra-fast headless commerce frontend with sub-100ms FCP', time: '< 80ms' },
        { label: 'Native Mobile Apps', detail: 'Cross-platform iOS and Android apps with biometric login', time: 'Native' },
        { label: 'Inventory Event Bus', detail: 'Centralized live stock synchronization across national hubs', time: '< 50ms' },
        { label: 'Payment Gateway', detail: 'Secure multi-rail checkout with real-time fraud scoring', time: 'Secure' },
      ],
      kpi1: '4.2x',
      kpi1Label: 'Mobile Conversion Velocity',
      kpi2: '99.99%',
      kpi2Label: 'Peak Launch Uptime',
    },
  ];

  // Pod Tiers
  const podTiers = [
    {
      name: 'Full-Stack Digital Pod',
      focus: 'Web, Mobile Apps & Cloud Microservices',
      roles: '1 Tech Lead • 2 React Native / Next.js • 1 Backend Node/Go • 1 QA Automation',
      rate: '$4,200 / engineer / mo',
      tcoReduction: '64%',
      sla: '< 15 mins',
      popular: true,
    },
    {
      name: 'Enterprise SAP & Ariba Pod',
      focus: 'S/4HANA Migration, SF Ariba & Oracle ERP',
      roles: '1 SAP Solution Architect • 2 ABAP/Fiori Devs • 1 Integration Lead • 1 QA',
      rate: '$5,400 / engineer / mo',
      tcoReduction: '58%',
      sla: '< 10 mins',
      popular: false,
    },
    {
      name: 'Autonomous AI & AP Pod',
      focus: 'Computer Vision, OCR, AP Automation & LLM Workflows',
      roles: '1 AI Research Lead • 2 ML/Python Engineers • 1 ERP Pipeline Dev • 1 QA',
      rate: '$5,800 / engineer / mo',
      tcoReduction: '61%',
      sla: '< 15 mins',
      popular: false,
    },
  ];

  // Run simulated pipeline animation
  const handleRunSimulation = () => {
    setIsSimulating(true);
    setPipelineProgress(0);
    const interval = setInterval(() => {
      setPipelineProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  // Dynamic calculations for transformation slider
  const estimatedSavings = Math.round(annualSpend * 0.42);
  const hoursReclaimed = Math.round((annualSpend / 1000) * 12);

  return (
    <div
      className={cn(
        'min-h-screen font-sans transition-colors duration-300 relative overflow-x-hidden',
        isDark
          ? 'bg-[#040714] text-slate-100 selection:bg-cyan-500 selection:text-black'
          : 'bg-[#F8FAFF] text-slate-900 selection:bg-blue-600 selection:text-white'
      )}
    >
      {/* Dynamic Ambient Aurora Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={cn(
            'absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-[140px] animate-float-slow pointer-events-none opacity-40',
            isDark ? 'bg-gradient-to-tr from-violet-700 via-indigo-600 to-cyan-500' : 'bg-gradient-to-tr from-violet-300 via-indigo-200 to-cyan-300'
          )}
        />
        <div
          className={cn(
            'absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full blur-[150px] animate-float-reverse pointer-events-none opacity-30',
            isDark ? 'bg-gradient-to-bl from-cyan-600 via-blue-700 to-purple-800' : 'bg-gradient-to-bl from-cyan-200 via-blue-200 to-purple-300'
          )}
        />
        <div
          className={cn(
            'absolute bottom-10 left-1/3 w-[500px] h-[500px] rounded-full blur-[160px] animate-pulse-glow pointer-events-none opacity-25',
            isDark ? 'bg-gradient-to-tr from-emerald-600 via-teal-700 to-blue-800' : 'bg-gradient-to-tr from-emerald-200 via-teal-200 to-blue-200'
          )}
        />
      </div>

      {/* Subtle Spatial Grid Texture */}
      <div
        className={cn(
          'fixed inset-0 pointer-events-none z-0',
          isDark
            ? 'bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]'
            : 'bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem]'
        )}
      />

      {/* Floating Spatial Navigation Header */}
      <header
        className={cn(
          'sticky top-9 z-30 backdrop-blur-xl border-b transition-all duration-300',
          isDark
            ? 'bg-[#040714]/80 border-white/10 shadow-2xl'
            : 'bg-white/80 border-slate-200/80 shadow-md shadow-slate-200/50'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src={isDark ? companyInfo.logos.white : companyInfo.logos.clean}
                alt="NYBIX"
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span
                className={cn(
                  'hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full border',
                  isDark
                    ? 'bg-violet-950/60 border-violet-500/40 text-violet-300'
                    : 'bg-violet-50 border-violet-200 text-violet-700'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                AURORA KINETIC STUDIO
              </span>
            </a>

            {/* Navigation Anchor Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold">
              <a
                href="#transformation"
                className={cn('transition', isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600')}
              >
                Transformation Index
              </a>
              <a
                href="#solutions"
                className={cn('transition', isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600')}
              >
                Kinetic Solutions
              </a>
              <a
                href="#pods"
                className={cn('transition', isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600')}
              >
                24/7 Global Pods
              </a>
              <a
                href="#clients"
                className={cn('transition', isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600')}
              >
                Enterprise Proof
              </a>
              <a
                href="#about"
                className={cn('transition', isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600')}
              >
                About Us
              </a>
            </nav>
          </div>

          {/* Right Action Controls: Dark/Light Mode Toggle + CTA */}
          <div className="flex items-center gap-3">
            
            {/* Native Dark / Light Mode Switcher */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={cn(
                'flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition border backdrop-blur-md cursor-pointer',
                isDark
                  ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-sm'
              )}
              title="Toggle Dark / Light Mode"
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                  <span className="hidden sm:inline">Dark Mode</span>
                </>
              )}
            </button>

            {/* Launch Consultation CTA */}
            <Button
              variant="gradient"
              size="sm"
              shape="pill"
              onClick={onOpenContact}
              className="gap-2 text-xs bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 text-white font-semibold"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Launch Transformation</span>
            </Button>
          </div>

        </div>
      </header>

      {/* Main Content Sections */}
      <main className="relative z-10">
        
        {/* HERO SECTION: Kinetic Spatial Experience */}
        <section className="relative pt-20 pb-24 border-b overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            {/* Top Interactive Eyebrow */}
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono shadow-sm',
                  isDark
                    ? 'bg-slate-900/90 border-cyan-500/30 text-cyan-300'
                    : 'bg-white border-blue-200 text-blue-700 shadow-blue-100/50'
                )}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
                <span>SPATIAL COMPUTING • ENTERPRISE SAP S/4HANA • AUTONOMOUS AI</span>
                <span className="opacity-40">|</span>
                <span className="text-emerald-400 font-semibold">PARCO • IMC • PSO</span>
              </div>

              {/* Kinetic Magnetic Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.08]">
                Architecting the{' '}
                <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Autonomous
                </span>{' '}
                Enterprise Ecosystem.
              </h1>

              <p
                className={cn(
                  'text-base sm:text-lg max-w-2xl mx-auto leading-relaxed',
                  isDark ? 'text-slate-300' : 'text-slate-600'
                )}
              >
                We unite SAP S/4HANA & SF Ariba procurement with proprietary cognitive AI vision (AP Console),
                high-velocity mobile commerce, and 24/7 dedicated offshore engineering squads.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Button
                  variant="gradient"
                  size="lg"
                  shape="pill"
                  onClick={onOpenContact}
                  className="gap-2 px-8 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all text-white font-bold"
                >
                  <span>Schedule Executive Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <a
                  href="#transformation"
                  className={cn(
                    'px-6 py-3 rounded-full text-sm font-semibold transition border backdrop-blur-md flex items-center gap-2',
                    isDark
                      ? 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/15'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm'
                  )}
                >
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  <span>Explore Transformation Index</span>
                </a>
              </div>
            </div>

            {/* INTERACTIVE SPATIAL ARCHITECTURE NODE COCKPIT */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div
                className={cn(
                  'p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl transition-all shadow-2xl relative overflow-hidden',
                  isDark
                    ? 'bg-slate-950/70 border-white/15 shadow-indigo-950/50'
                    : 'bg-white/90 border-slate-200 shadow-xl shadow-slate-200/50'
                )}
              >
                {/* Micro Scan Beam Animation */}
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-beam pointer-events-none" />

                {/* Node Switcher Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {spatialNodes.map((node) => {
                    const isSelected = activeNode === node.id;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setActiveNode(node.id)}
                        className={cn(
                          'p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden',
                          isSelected
                            ? isDark
                              ? 'bg-white/10 border-cyan-400/80 shadow-lg shadow-cyan-500/20'
                              : 'bg-violet-50/80 border-violet-400 shadow-md shadow-violet-200'
                            : isDark
                            ? 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-400'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600'
                        )}
                      >
                        <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1">
                          {node.category}
                        </div>
                        <div
                          className={cn(
                            'text-xs sm:text-sm font-bold truncate',
                            isSelected
                              ? isDark
                                ? 'text-white'
                                : 'text-slate-900'
                              : isDark
                              ? 'text-slate-300'
                              : 'text-slate-700'
                          )}
                        >
                          {node.title}
                        </div>
                        <div className="text-[11px] font-mono text-emerald-400 mt-1 font-semibold">
                          {node.metric}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Node Telemetry Stage */}
                <div
                  className={cn(
                    'p-6 sm:p-8 rounded-2xl border relative overflow-hidden transition-all',
                    isDark ? 'bg-slate-900/90 border-white/10' : 'bg-slate-50/80 border-slate-200'
                  )}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {spatialNodes[activeNode].tag}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          Client Telemetry: <strong className="text-white">{spatialNodes[activeNode].client}</strong>
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display">
                        {spatialNodes[activeNode].title}
                      </h3>
                      <p className={cn('text-xs sm:text-sm leading-relaxed', isDark ? 'text-slate-300' : 'text-slate-600')}>
                        {spatialNodes[activeNode].desc}
                      </p>
                    </div>

                    {/* Stage Metrics Card */}
                    <div
                      className={cn(
                        'p-5 rounded-xl border flex flex-col justify-center min-w-[240px]',
                        isDark ? 'bg-black/50 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                      )}
                    >
                      <div className="text-[10px] font-mono uppercase text-slate-400">Verified Impact</div>
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 mt-1">
                        {spatialNodes[activeNode].metric}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Battle-tested in enterprise production environments.
                      </div>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={onOpenContact}
                        className="mt-4 text-xs font-mono w-full justify-center"
                      >
                        Deep-Dive Architecture →
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: DIGITAL TRANSFORMATION INDEX (BEFORE VS. AFTER SLIDER) */}
        <section id="transformation" className="py-24 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-violet-400">
                01 // EXECUTIVE ROI BENCHMARK
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display">
                Legacy Manual Bottlenecks vs.{' '}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Nybix Autonomous Scale
                </span>
              </h2>
              <p className={cn('text-sm sm:text-base', isDark ? 'text-slate-400' : 'text-slate-600')}>
                Toggle or adjust annual operations to view immediate calculated labor reclamation and process acceleration.
              </p>
            </div>

            {/* Interactive Transformation Stage */}
            <div
              className={cn(
                'max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl border backdrop-blur-xl shadow-2xl transition-all',
                isDark ? 'bg-slate-950/80 border-white/15' : 'bg-white border-slate-200 shadow-slate-200/50'
              )}
            >
              {/* Mode Toggle Pills */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase text-slate-400">Viewing Architecture:</span>
                  <div className="flex p-1 rounded-xl bg-slate-900 border border-slate-700">
                    <button
                      onClick={() => setTransformationMode(0)}
                      className={cn(
                        'px-4 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer',
                        transformationMode === 0
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                          : 'text-slate-400 hover:text-white'
                      )}
                    >
                      Legacy Manual Operations
                    </button>
                    <button
                      onClick={() => setTransformationMode(1)}
                      className={cn(
                        'px-4 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer',
                        transformationMode === 1
                          ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md'
                          : 'text-slate-400 hover:text-white'
                      )}
                    >
                      Nybix Autonomous Ecosystem
                    </button>
                  </div>
                </div>

                {/* Annual Spend Slider */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">Baseline Ops Spend:</span>
                  <span className="text-sm font-mono font-bold text-cyan-400">
                    ${(annualSpend / 1000000).toFixed(1)}M/yr
                  </span>
                  <input
                    type="range"
                    min="1000000"
                    max="10000000"
                    step="500000"
                    value={annualSpend}
                    onChange={(e) => setAnnualSpend(Number(e.target.value))}
                    className="w-28 sm:w-36 accent-cyan-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Dynamic Comparison Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Metric 1: Invoice Processing Time */}
                <div
                  className={cn(
                    'p-5 rounded-2xl border transition-all',
                    transformationMode === 1
                      ? isDark
                        ? 'bg-gradient-to-b from-cyan-950/40 to-slate-900 border-cyan-500/40'
                        : 'bg-cyan-50/50 border-cyan-200'
                      : isDark
                      ? 'bg-rose-950/20 border-rose-500/30'
                      : 'bg-rose-50/50 border-rose-200'
                  )}
                >
                  <div className="text-[10px] font-mono uppercase text-slate-400">AP Invoice Cycle</div>
                  <div
                    className={cn(
                      'text-2xl sm:text-3xl font-extrabold font-mono mt-1',
                      transformationMode === 1 ? 'text-cyan-400' : 'text-rose-400'
                    )}
                  >
                    {transformationMode === 1 ? '3.8 Seconds' : '14 Days'}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {transformationMode === 1
                      ? 'Autonomous AI OCR 3-Way Match'
                      : 'Manual batch data entry & paperwork'}
                  </div>
                </div>

                {/* Metric 2: Human Error Margin */}
                <div
                  className={cn(
                    'p-5 rounded-2xl border transition-all',
                    transformationMode === 1
                      ? isDark
                        ? 'bg-gradient-to-b from-violet-950/40 to-slate-900 border-violet-500/40'
                        : 'bg-violet-50/50 border-violet-200'
                      : isDark
                      ? 'bg-rose-950/20 border-rose-500/30'
                      : 'bg-rose-50/50 border-rose-200'
                  )}
                >
                  <div className="text-[10px] font-mono uppercase text-slate-400">Reconciliation Error Rate</div>
                  <div
                    className={cn(
                      'text-2xl sm:text-3xl font-extrabold font-mono mt-1',
                      transformationMode === 1 ? 'text-violet-400' : 'text-rose-400'
                    )}
                  >
                    {transformationMode === 1 ? '0.01%' : '12.8%'}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {transformationMode === 1
                      ? 'Direct cryptographic audit verification'
                      : 'High incidence of duplicate vendor payments'}
                  </div>
                </div>

                {/* Metric 3: Pod Mobilization */}
                <div
                  className={cn(
                    'p-5 rounded-2xl border transition-all',
                    transformationMode === 1
                      ? isDark
                        ? 'bg-gradient-to-b from-indigo-950/40 to-slate-900 border-indigo-500/40'
                        : 'bg-indigo-50/50 border-indigo-200'
                      : isDark
                      ? 'bg-rose-950/20 border-rose-500/30'
                      : 'bg-rose-50/50 border-rose-200'
                  )}
                >
                  <div className="text-[10px] font-mono uppercase text-slate-400">Engineering Mobilization</div>
                  <div
                    className={cn(
                      'text-2xl sm:text-3xl font-extrabold font-mono mt-1',
                      transformationMode === 1 ? 'text-indigo-400' : 'text-rose-400'
                    )}
                  >
                    {transformationMode === 1 ? '24 - 48 Hours' : '3 - 5 Months'}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {transformationMode === 1
                      ? 'Pre-vetted cross-functional offshore squads'
                      : 'Lengthy recruiter sourcing & onboarding'}
                  </div>
                </div>

                {/* Metric 4: Direct Operational Savings */}
                <div
                  className={cn(
                    'p-5 rounded-2xl border transition-all',
                    transformationMode === 1
                      ? isDark
                        ? 'bg-gradient-to-b from-emerald-950/40 to-slate-900 border-emerald-500/40'
                        : 'bg-emerald-50/50 border-emerald-200'
                      : isDark
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-slate-100 border-slate-200'
                  )}
                >
                  <div className="text-[10px] font-mono uppercase text-slate-400">Annual Operational Savings</div>
                  <div
                    className={cn(
                      'text-2xl sm:text-3xl font-extrabold font-mono mt-1',
                      transformationMode === 1 ? 'text-emerald-400' : 'text-slate-500'
                    )}
                  >
                    {transformationMode === 1
                      ? `$${(estimatedSavings / 1000).toFixed(0)}K+`
                      : '$0 (Overhead)'}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {transformationMode === 1
                      ? `${hoursReclaimed.toLocaleString()} labor hours saved/year`
                      : 'Continuous high operational burn rate'}
                  </div>
                </div>

              </div>

              {/* Bottom Executive Summary */}
              <div
                className={cn(
                  'mt-8 p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono',
                  isDark ? 'bg-black/40 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                )}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Proven across <strong>PARCO Refinery</strong>, <strong>Indus Motor (Toyota)</strong>, and{' '}
                    <strong>Pakistan State Oil (PSO)</strong>.
                  </span>
                </div>
                <button
                  onClick={onOpenContact}
                  className="text-cyan-400 hover:underline font-bold flex items-center gap-1 cursor-pointer shrink-0"
                >
                  Request Customized ROI Audit →
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: THE KINETIC SOLUTION ENGINE */}
        <section id="solutions" className="py-24 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
                02 // KINETIC SOLUTION PIPELINE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display">
                Four Pillars of Modern Enterprise Transformation
              </h2>
              <p className={cn('text-sm sm:text-base', isDark ? 'text-slate-400' : 'text-slate-600')}>
                Experience how our core platforms orchestrate high-throughput enterprise pipelines with real-time feedback.
              </p>
            </div>

            {/* Pipeline Stage Container */}
            <div
              className={cn(
                'max-w-5xl mx-auto rounded-3xl border backdrop-blur-xl shadow-2xl overflow-hidden transition-all',
                isDark ? 'bg-slate-950/80 border-white/15' : 'bg-white border-slate-200 shadow-slate-200/50'
              )}
            >
              {/* Tab Selector */}
              <div className="flex border-b border-white/10 overflow-x-auto no-scrollbar">
                {solutionTabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActivePipelineTab(idx);
                      setPipelineProgress(100);
                    }}
                    className={cn(
                      'px-6 py-4 text-xs font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer border-r border-white/5',
                      activePipelineTab === idx
                        ? isDark
                          ? 'bg-white/10 text-cyan-400 border-b-2 border-b-cyan-400'
                          : 'bg-violet-50 text-violet-700 border-b-2 border-b-violet-600'
                        : isDark
                        ? 'text-slate-400 hover:text-white hover:bg-white/5'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                    )}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{tab.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Tab Content Stage */}
              <div className="p-6 sm:p-10 space-y-8">
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      {solutionTabs[activePipelineTab].badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                      {solutionTabs[activePipelineTab].headline}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400 font-semibold">
                      {solutionTabs[activePipelineTab].clientRef}
                    </p>
                  </div>

                  {/* Simulator Trigger */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleRunSimulation}
                      disabled={isSimulating}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition shadow-md cursor-pointer',
                        isSimulating
                          ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90'
                      )}
                    >
                      {isSimulating ? (
                        <>
                          <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                          <span>Simulating Pipeline...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" />
                          <span>Simulate Pipeline Flow</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Interactive Pipeline Steps Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {solutionTabs[activePipelineTab].steps.map((st, sIdx) => {
                    const stepActive = pipelineProgress >= (sIdx + 1) * 25;
                    return (
                      <div
                        key={sIdx}
                        className={cn(
                          'p-4 rounded-xl border transition-all duration-300 relative',
                          stepActive
                            ? isDark
                              ? 'bg-white/10 border-cyan-400/50 shadow-md shadow-cyan-500/10'
                              : 'bg-violet-50/60 border-violet-300 shadow-sm'
                            : isDark
                            ? 'bg-white/5 border-white/5 opacity-50'
                            : 'bg-slate-50 border-slate-200 opacity-50'
                        )}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                          <span className="text-slate-400">STAGE 0{sIdx + 1}</span>
                          <span className="text-cyan-400 font-bold">{st.time}</span>
                        </div>
                        <div className="text-sm font-bold mb-1">{st.label}</div>
                        <div className="text-xs text-slate-400 leading-snug">{st.detail}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Verified Impact Stats */}
                <div
                  className={cn(
                    'p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-around gap-6',
                    isDark ? 'bg-black/50 border-white/10' : 'bg-slate-50 border-slate-200'
                  )}
                >
                  <div className="text-center">
                    <div className="text-3xl font-extrabold font-mono text-cyan-400">
                      {solutionTabs[activePipelineTab].kpi1}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {solutionTabs[activePipelineTab].kpi1Label}
                    </div>
                  </div>
                  <div className="h-8 w-px bg-white/10 hidden sm:block" />
                  <div className="text-center">
                    <div className="text-3xl font-extrabold font-mono text-emerald-400">
                      {solutionTabs[activePipelineTab].kpi2}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {solutionTabs[activePipelineTab].kpi2Label}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* SECTION 4: 24/7 DEDICATED OFFSHORE PODS */}
        <section id="pods" className="py-24 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400">
                03 // GLOBAL ENGINEERING SQUADS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display">
                Dedicated 24/7 Offshore Squads (Dallas ⇄ Karachi)
              </h2>
              <p className={cn('text-sm sm:text-base', isDark ? 'text-slate-400' : 'text-slate-600')}>
                Senior enterprise engineers integrated with your workflow in 24-48 hours. 60%+ TCO reduction with round-the-clock coverage.
              </p>
            </div>

            {/* Pod Tiers Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {podTiers.map((pod, pIdx) => {
                const isSelected = selectedPod === pIdx;
                return (
                  <div
                    key={pIdx}
                    className={cn(
                      'p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative',
                      isSelected
                        ? isDark
                          ? 'bg-slate-900/90 border-cyan-400 shadow-2xl shadow-cyan-500/20 ring-1 ring-cyan-400'
                          : 'bg-white border-violet-500 shadow-xl shadow-violet-200/50 ring-1 ring-violet-500'
                        : isDark
                        ? 'bg-slate-950/60 border-white/10 hover:border-white/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    )}
                  >
                    {pod.popular && (
                      <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md">
                        Most Requested
                      </span>
                    )}

                    <div className="space-y-4">
                      <div className="text-xs font-mono text-cyan-400 font-bold uppercase">Tier 0{pIdx + 1}</div>
                      <h3 className="text-xl font-bold font-display">{pod.name}</h3>
                      <p className={cn('text-xs leading-relaxed', isDark ? 'text-slate-400' : 'text-slate-600')}>
                        {pod.focus}
                      </p>

                      <div
                        className={cn(
                          'p-3.5 rounded-xl border text-xs font-mono',
                          isDark ? 'bg-black/40 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                        )}
                      >
                        <div className="text-[10px] text-slate-400 uppercase mb-1">Squad Structure:</div>
                        {pod.roles}
                      </div>

                      <div className="pt-2 space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Typical TCO Reduction:</span>
                          <strong className="text-emerald-400 font-mono text-sm">{pod.tcoReduction}</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Critical Response SLA:</span>
                          <strong className="font-mono">{pod.sla}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10">
                      <Button
                        variant={isSelected ? 'gradient' : 'secondary'}
                        size="sm"
                        onClick={() => {
                          setSelectedPod(pIdx);
                          onOpenContact();
                        }}
                        className="w-full text-xs font-bold justify-center"
                      >
                        {isSelected ? 'Reserve Squad Pod →' : 'Select Pod Tier'}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 5: ENTERPRISE PROOF (REAL CASE STUDIES: PARCO, IMC, PSO) */}
        <section id="clients" className="py-24 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-400">
                04 // VERIFIED IMPACT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display">
                Battle-Tested Across Industry Leaders
              </h2>
              <p className={cn('text-sm sm:text-base', isDark ? 'text-slate-400' : 'text-slate-600')}>
                Real enterprise transformation delivered for refinery infrastructure, automotive commerce, and national energy grids.
              </p>
            </div>

            {/* Client Logo Cloud */}
            <div className="mb-14">
              <ClientLogoCloud dark={isDark} />
            </div>

            {/* Case Studies Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {template3CaseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className={cn(
                    'p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300',
                    isDark
                      ? 'bg-slate-950/70 border-white/10 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10'
                      : 'bg-white border-slate-200 hover:border-violet-400 hover:shadow-lg shadow-sm'
                  )}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400">{cs.client}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                        {cs.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-display">{cs.title}</h3>
                    <p className={cn('text-xs leading-relaxed', isDark ? 'text-slate-300' : 'text-slate-600')}>
                      {cs.summary}
                    </p>

                    <div
                      className={cn(
                        'p-4 rounded-xl border text-center',
                        isDark ? 'bg-black/40 border-white/10' : 'bg-slate-50 border-slate-200'
                      )}
                    >
                      <div className="text-2xl font-extrabold font-mono text-emerald-400">{cs.stats}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{cs.statsLabel}</div>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Architecture: {cs.impact}</span>
                    <button
                      onClick={onOpenContact}
                      className="text-cyan-400 font-bold hover:underline cursor-pointer"
                    >
                      View Dossier →
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 6: UNIFIED ABOUT SECTION (OFFICIAL BRIEF MISSION & VISION) */}
        <section id="about" className="py-24 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <AboutSection dark={isDark} />
          </div>
        </section>

        {/* SECTION 7: FINAL EXECUTIVE CONVERSION CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
              <span>DALLAS (USA) • KARACHI (PAKISTAN)</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display">
              Ready to Accelerate Your Enterprise with{' '}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Nyabix Technologies?
              </span>
            </h2>

            <p className={cn('text-sm sm:text-base max-w-2xl mx-auto', isDark ? 'text-slate-300' : 'text-slate-600')}>
              Engage with our principal architects for a structured 4-5 day scoping sprint, SAP feasibility audit, or offshore squad mobilization.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                variant="gradient"
                size="lg"
                shape="pill"
                onClick={onOpenContact}
                className="gap-2 px-8 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all text-white font-bold"
              >
                <span>Launch Scoping Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <a
                href={`tel:${companyInfo.phones.pkCall}`}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-semibold transition border backdrop-blur-md',
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/15'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm'
                )}
              >
                Direct Line: {companyInfo.phones.pkDisplay}
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Modern Studio Footer */}
      <footer
        className={cn(
          'py-12 border-t text-xs transition-colors',
          isDark ? 'bg-black/90 border-white/10 text-slate-400' : 'bg-white border-slate-200 text-slate-500'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={isDark ? companyInfo.logos.white : companyInfo.logos.clean}
              alt="NYBIX"
              className="h-6 w-auto object-contain"
            />
            <span>© {new Date().getFullYear()} Nyabix Technologies. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Enterprise SAP • SF Ariba • Autonomous AI • Offshore Pods</span>
            <a href={`mailto:${companyInfo.email}`} className="text-cyan-400 hover:underline">
              {companyInfo.email}
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Dark/Light Mode Pill in Bottom Right Corner */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsDark(!isDark)}
          className={cn(
            'flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition shadow-2xl border backdrop-blur-xl cursor-pointer hover:scale-105',
            isDark
              ? 'bg-slate-900/90 text-white border-cyan-500/40 shadow-cyan-500/20'
              : 'bg-white/95 text-slate-900 border-slate-300 shadow-slate-300/60'
          )}
          title="Switch Dark / Light Mode"
        >
          {isDark ? (
            <>
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Switch to Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-indigo-600" />
              <span>Switch to Dark Mode</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}

