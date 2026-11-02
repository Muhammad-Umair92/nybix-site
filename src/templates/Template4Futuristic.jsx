import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Network, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Terminal, 
  Zap, 
  Check, 
  Boxes, 
  Database, 
  Workflow, 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  ChevronRight, 
  Lock, 
  TrendingUp, 
  Play, 
  RefreshCw,
  Server,
  Code2
} from 'lucide-react';

export default function Template4Futuristic({ onOpenContact }) {
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeTabMetric, setActiveTabMetric] = useState('enterprise');
  const [simulatedLogs, setSimulatedLogs] = useState([
    { time: '10:42:01', level: 'SYS', msg: 'SAP S/4HANA Cloud connection verified. BTP endpoints healthy.', status: 'success' },
    { time: '10:42:04', level: 'AI-AGENT', msg: 'Document Intelligence parsing 1,200 supplier invoices... 99.8% match rate.', status: 'active' },
    { time: '10:42:09', level: 'SYNC', msg: 'B2B Commerce catalog updated with real-time warehouse inventory across 8 hubs.', status: 'success' }
  ]);

  const solutions = [
    {
      id: 'sap-core',
      title: 'SAP S/4HANA Clean-Core Modernization',
      badge: 'Flagship Core',
      tagline: 'Eliminate technical debt and migrate to S/4HANA Cloud with zero operational disruption.',
      architecture: {
        layer1: 'Legacy ECC 6.0 / Heterogeneous Databases',
        layer2: 'Nybix Automated Migration Engine & BTP Integration Suite',
        layer3: 'Clean-Core S/4HANA Cloud + Custom Fiori Analytics'
      },
      benefits: [
        'Rapid brownfield / greenfield deployment methodology',
        'Real-time automated financial & supply chain consolidation',
        'Seamless BTP side-by-side extensibility without core modification',
        '24/7 continuous observability & Basis performance tuning'
      ],
      metric: '45% Faster',
      metricLabel: 'Migration cycle compared to legacy SI approaches'
    },
    {
      id: 'agentic-ai',
      title: 'Autonomous Enterprise AI Systems',
      badge: 'Next-Gen Intelligence',
      tagline: 'Self-orchestrating AI agents operating directly within your ERP, CRM, and supply chain.',
      architecture: {
        layer1: 'Enterprise Unstructured Data & ERP Data Lakes',
        layer2: 'Nybix Agentic LLM Orchestrator & Multi-Step Reasoning Graph',
        layer3: 'Autonomous Invoice Matching, Customer Service & Forecasting'
      },
      benefits: [
        'Automated 3-way invoice matching & ERP posting without humans',
        'Predictive supply chain stockout warning algorithms',
        'Enterprise-grade private vector databases with zero data leakage',
        'Domain-tuned copilots for executive decision acceleration'
      ],
      metric: '72% Workload',
      metricLabel: 'Routine administrative tasks fully automated'
    },
    {
      id: 'digital-web',
      title: 'High-Concurrency Web & Mobile Portals',
      badge: 'Digital Engineering',
      tagline: 'Sub-second digital platforms built for millions of transactions, vendor portals, and field teams.',
      architecture: {
        layer1: 'Microservices & Enterprise REST/GraphQL APIs',
        layer2: 'Edge-Rendered Next.js 15 & React Native Unified Runtime',
        layer3: 'Offline-First Field Applications & B2B Customer Portals'
      },
      benefits: [
        'Sub-50ms global latency for heavy enterprise portal queries',
        'Field technician apps with robust offline SQLite sync',
        'Enterprise SSO, Role-Based Access Control (RBAC), SOC2 Type II',
        'Auto-scaling Kubernetes infrastructure with zero-downtime rollouts'
      ],
      metric: '99.99%',
      metricLabel: 'Guaranteed platform availability SLA'
    },
    {
      id: 'commerce',
      title: 'Enterprise Omnichannel B2B/B2C Commerce',
      badge: 'Revenue Velocity',
      tagline: 'Unified digital commerce engines directly synced with multi-warehouse ERP inventory.',
      architecture: {
        layer1: 'SAP Inventory, Tiered Pricing & Warehouse Management',
        layer2: 'Headless Commerce API & High-Speed Checkout Middleware',
        layer3: 'Global Multi-Currency, Multi-Brand Digital Storefronts'
      },
      benefits: [
        'B2B custom contract pricing, credit limits & approval workflows',
        'Instant multi-warehouse inventory updates within seconds',
        'High-converting mobile-first checkout flows',
        'Over $150M+ annual transaction throughput capacity'
      ],
      metric: '3.2x',
      metricLabel: 'Average increase in B2B digital order volume'
    }
  ];

  const currentSolution = solutions[activeSolution];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Sleek Floating Enterprise Navbar */}
      <nav className="sticky top-12 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/logo/nybix-logo-clean.png" 
                alt="NYBIX" 
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>

            <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-600">
              <a href="#solutions" className="hover:text-blue-600 transition">Solutions</a>
              <a href="#architecture" className="hover:text-blue-600 transition">Architecture Engine</a>
              <a href="#advantage" className="hover:text-blue-600 transition">The Nybix Edge</a>
              <a href="#terminal" className="hover:text-blue-600 transition flex items-center gap-1 text-blue-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                Live Agent Telemetry
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-[#0070F2] hover:from-blue-700 hover:to-blue-600 transition shadow-md shadow-blue-500/20 flex items-center gap-2"
            >
              <span>Initiate 4-5 Day Sprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - World-Class Sleek Minimalist Tech */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white">
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Next-Generation Enterprise Systems Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.05] max-w-4xl mx-auto">
            The Operating System for Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#0070F2] to-sky-500">SAP & AI Enterprises</span>.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nybix bridges the gap between deep SAP ERP governance and cutting-edge autonomous AI, high-concurrency web engineering, and omnichannel commerce.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <button 
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-slate-950 hover:bg-slate-900 transition shadow-lg flex items-center gap-2.5 group"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#solutions"
              className="px-7 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition border border-slate-200 shadow-xs"
            >
              Explore Solutions Matrix
            </a>
          </div>

          {/* Real-time Enterprise Trust Proof Bar */}
          <div className="pt-16 max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 p-6 shadow-xl shadow-slate-200/40 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div className="space-y-1 border-r border-slate-100 last:border-none pr-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Expertise</div>
                <div className="text-lg font-bold text-slate-900 font-display">SAP S/4HANA & BTP</div>
                <div className="text-[11px] text-blue-600 font-medium">Clean Core Certified</div>
              </div>
              <div className="space-y-1 border-r border-slate-100 last:border-none pr-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Sprint Cadence</div>
                <div className="text-lg font-bold text-slate-900 font-display">4-5 Day Validation</div>
                <div className="text-[11px] text-blue-600 font-medium">Working Prototypes</div>
              </div>
              <div className="space-y-1 border-r border-slate-100 last:border-none pr-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">AI Automation</div>
                <div className="text-lg font-bold text-slate-900 font-display">Autonomous Agents</div>
                <div className="text-[11px] text-blue-600 font-medium">ERP & CRM In-Loop</div>
              </div>
              <div className="space-y-1 pr-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Reliability SLA</div>
                <div className="text-lg font-bold text-slate-900 font-display">99.99% Uptime</div>
                <div className="text-[11px] text-emerald-600 font-medium">24/7 Managed Ops</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Solution Configurator */}
      <section id="solutions" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Interactive Solution Suite</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mt-2">
              Architected for Zero Technical Debt
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select an enterprise discipline below to inspect live architecture layers and documented business velocity.
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {solutions.map((sol, idx) => (
              <button
                key={sol.id}
                onClick={() => setActiveSolution(idx)}
                className={`px-5 py-3 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                  activeSolution === idx
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-102'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{sol.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  activeSolution === idx ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {sol.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Dynamic Solution Showcase Card */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Solution Capabilities */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-800 uppercase tracking-wider">
                    {currentSolution.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mt-3">
                    {currentSolution.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {currentSolution.tagline}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Value Pillars</div>
                  <div className="space-y-2">
                    {currentSolution.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-normal">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button 
                    onClick={onOpenContact}
                    className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-md shadow-blue-500/20 flex items-center gap-2"
                  >
                    <span>Request Scoping Document</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive 3-Tier Architecture Diagram */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Architecture Blueprint</span>
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Zero Technical Debt
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Layer 3 */}
                    <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Presentation & Action Layer</div>
                      <div className="text-xs font-semibold text-slate-900 mt-0.5">{currentSolution.architecture.layer3}</div>
                    </div>

                    <div className="flex justify-center -my-1 text-blue-400">
                      <Workflow className="w-4 h-4" />
                    </div>

                    {/* Layer 2 */}
                    <div className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Nybix Core Orchestration Engine</div>
                      <div className="text-xs font-semibold text-slate-100 mt-0.5">{currentSolution.architecture.layer2}</div>
                    </div>

                    <div className="flex justify-center -my-1 text-blue-400">
                      <Workflow className="w-4 h-4" />
                    </div>

                    {/* Layer 1 */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Enterprise Data & Infrastructure</div>
                      <div className="text-xs font-semibold text-slate-800 mt-0.5">{currentSolution.architecture.layer1}</div>
                    </div>
                  </div>

                  {/* Impact Metric Banner */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-blue-600 font-display">{currentSolution.metric}</div>
                      <div className="text-[11px] text-slate-500">{currentSolution.metricLabel}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-900">4-5 Day Sprint</div>
                      <div className="text-[11px] text-slate-500">Fast Proof-of-Concept</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Live Agent Telemetry Terminal Preview */}
      <section id="terminal" className="py-20 bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
                <Terminal className="w-3.5 h-3.5" /> Autonomous Execution Engine
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display">
                Real-Time Telemetry & Agent Operations
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Production Infrastructure Status: <strong>Optimal</strong></span>
            </div>
          </div>

          {/* Terminal Box */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-7 shadow-2xl font-mono text-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-400">nybix-agent-orchestrator.prod</span>
              </div>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-blue-300">SAP BTP • WebSocket Stream</span>
            </div>

            <div className="space-y-3 pt-4">
              {simulatedLogs.map((log, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-slate-500 select-none">{log.time}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    log.level === 'SYS' ? 'bg-slate-800 text-slate-300' :
                    log.level === 'AI-AGENT' ? 'bg-blue-900/60 text-blue-300' :
                    'bg-emerald-950 text-emerald-300'
                  }`}>
                    [{log.level}]
                  </span>
                  <span className="text-slate-300 leading-relaxed flex-1">{log.msg}</span>
                  <span className="text-[10px] text-emerald-400">✓ OK</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-slate-400">
              <div className="flex items-center gap-4 text-[11px]">
                <span>Active Threads: <strong className="text-white">128</strong></span>
                <span>•</span>
                <span>Latency: <strong className="text-emerald-400">18ms</strong></span>
                <span>•</span>
                <span>Uptime: <strong className="text-white">99.99%</strong></span>
              </div>
              <button 
                onClick={onOpenContact}
                className="text-blue-400 hover:text-white transition flex items-center gap-1.5 text-xs font-semibold"
              >
                <span>Request Technical Deep Dive</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* The Nybix Edge vs Traditional Consultancies */}
      <section id="advantage" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Modern Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mt-2">
              Why Visionary Enterprises Choose Nybix
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Replacing bloated 6-month consulting roadmaps with rapid, high-velocity engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">4-5 Day Validation Sprints</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We deliver functional, interactive prototype architectures in days, not months. You test real workflows with real team stakeholders before committing capital.
              </p>
              <div className="text-xs font-semibold text-blue-700">⚡ 5x Faster Time-to-Alignment</div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Clean-Core SAP Discipline</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero modification of the SAP core. All custom intelligence, AI workflows, and customer portals live on BTP and modern cloud runtimes to ensure effortless upgrades.
              </p>
              <div className="text-xs font-semibold text-slate-900">🔒 Future-Proof Architecture</div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#0070F2] text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Native Autonomous AI</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We don't sell generic chatbots. We build autonomous agent swarms that parse multi-page supplier documents, predict inventory spikes, and automate cross-system reconciliation.
              </p>
              <div className="text-xs font-semibold text-[#0070F2]">🤖 Real Operational EBITDA Lift</div>
            </div>
          </div>

        </div>
      </section>

      {/* World-Class Modern Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-4">
            <img 
              src="/logo/nybix-logo-white.png" 
              alt="NYBIX Technologies" 
              className="h-8 w-auto object-contain brightness-110"
            />
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Enterprise technology firm delivering mission-critical SAP S/4HANA migrations, autonomous AI agent platforms, and scalable digital commerce architectures.
            </p>
            <div className="text-slate-500 text-[11px]">© 2026 Nybix Inc. Enterprise Systems Division.</div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Core Disciplines</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:text-white transition">SAP S/4HANA Cloud</a></li>
              <li><a href="#solutions" className="hover:text-white transition">Autonomous AI Agents</a></li>
              <li><a href="#solutions" className="hover:text-white transition">Enterprise Web Portals</a></li>
              <li><a href="#solutions" className="hover:text-white transition">Field Mobile Apps</a></li>
              <li><a href="#solutions" className="hover:text-white transition">B2B Headless Commerce</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Enterprise Delivery</h4>
            <ul className="space-y-2">
              <li><a href="#advantage" className="hover:text-white transition">4-5 Day Validation Sprint</a></li>
              <li><a href="#architecture" className="hover:text-white transition">Clean-Core Governance</a></li>
              <li><a href="#terminal" className="hover:text-white transition">Live Agent Telemetry</a></li>
              <li><a href="#solutions" className="hover:text-white transition">24/7 Managed Operations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Engagement</h4>
            <ul className="space-y-2">
              <li><button onClick={onOpenContact} className="hover:text-white transition text-left">Schedule Briefing</button></li>
              <li><button onClick={onOpenContact} className="hover:text-white transition text-left">Request RFP Audit</button></li>
              <li><button onClick={onOpenContact} className="hover:text-white transition text-left">Client Portal Access</button></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
