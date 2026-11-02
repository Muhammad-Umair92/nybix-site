import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Database, 
  Globe2, 
  Smartphone, 
  ShoppingBag, 
  ArrowUpRight, 
  Terminal, 
  Workflow, 
  Zap, 
  ShieldAlert, 
  CheckCircle,
  Sliders,
  Calculator,
  ChevronRight,
  Code2,
  Server
} from 'lucide-react';

export default function Template2ModernAI({ onOpenContact }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [teamSize, setTeamSize] = useState(50);
  const [infraComplexity, setInfraComplexity] = useState('medium');

  const allServices = [
    {
      category: 'sap',
      title: 'SAP S/4HANA Modern Cloud',
      tagline: 'Clean-core ERP with zero technical debt',
      tech: ['SAP S/4HANA', 'BTP', 'Fiori', 'CAP Model'],
      icon: Database,
      highlight: 'Speed up quarterly financial closing by 4x'
    },
    {
      category: 'ai',
      title: 'Autonomous Enterprise AI Agents',
      tagline: 'Self-orchestrating agents for ERP & CRM operations',
      tech: ['Custom LLMs', 'LangGraph', 'Vector DBs', 'RAG'],
      icon: Cpu,
      highlight: '70% reduction in manual cross-system data entry'
    },
    {
      category: 'web',
      title: 'Next-Gen Web Applications',
      tagline: 'Sub-second page speeds with enterprise auth & role RBAC',
      tech: ['Next.js 15', 'React 19', 'Node.js', 'PostgreSQL'],
      icon: Globe2,
      highlight: 'Sub-50ms latency for B2B portal interactions'
    },
    {
      category: 'mobile',
      title: 'Enterprise Mobile Field Apps',
      tagline: 'Full offline sync for technicians, warehouse, and logistics',
      tech: ['React Native', 'Swift', 'Kotlin', 'WatermelonDB'],
      icon: Smartphone,
      highlight: 'Zero data loss in zero-connectivity environments'
    },
    {
      category: 'ecom',
      title: 'High-Volume Headless Commerce',
      tagline: 'Real-time multi-warehouse inventory & ERP synchronization',
      tech: ['Shopify Plus', 'Commerce Layer', 'Stripe', 'GraphQL'],
      icon: ShoppingBag,
      highlight: 'Over \$100M+ in annual transaction capability'
    },
    {
      category: 'ai',
      title: 'Intelligent Document Intelligence',
      tagline: 'Automated invoice parsing & three-way matching against SAP',
      tech: ['Computer Vision', 'OCR Models', 'SAP RFCs'],
      icon: Sparkles,
      highlight: 'Parse complex multi-page invoices in under 1.2s'
    }
  ];

  const filteredServices = selectedFilter === 'all' 
    ? allServices 
    : allServices.filter(s => s.category === selectedFilter);

  // Quick interactive estimation calculation
  const calculatedSavings = Math.round(teamSize * (infraComplexity === 'high' ? 14000 : infraComplexity === 'medium' ? 8500 : 4500));
  const estimatedDays = infraComplexity === 'high' ? '14-21 Days' : infraComplexity === 'medium' ? '7-10 Days' : '4-5 Days';

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 font-sans">
      
      {/* Modern Minimal Navigation */}
      <header className="sticky top-12 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                N
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                nybix<span className="text-blue-600">.tech</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <button 
                onClick={() => setSelectedFilter('sap')}
                className={`hover:text-blue-600 transition ${selectedFilter === 'sap' ? 'text-blue-600 font-semibold' : ''}`}
              >
                SAP Systems
              </button>
              <button 
                onClick={() => setSelectedFilter('ai')}
                className={`hover:text-blue-600 transition ${selectedFilter === 'ai' ? 'text-blue-600 font-semibold' : ''}`}
              >
                AI & Agents
              </button>
              <button 
                onClick={() => setSelectedFilter('web')}
                className={`hover:text-blue-600 transition ${selectedFilter === 'web' ? 'text-blue-600 font-semibold' : ''}`}
              >
                Web & Mobile
              </button>
              <button 
                onClick={() => setSelectedFilter('ecom')}
                className={`hover:text-blue-600 transition ${selectedFilter === 'ecom' ? 'text-blue-600 font-semibold' : ''}`}
              >
                E-Commerce
              </button>
              <a href="#calculator" className="hover:text-blue-600 transition flex items-center gap-1 text-slate-500">
                <Calculator className="w-3.5 h-3.5" /> ROI Calculator
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-md shadow-blue-500/20 flex items-center gap-2"
            >
              <span>Build With Nybix</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Futuristic, Clean, High Contrast White & Electric Blue */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100/60 via-blue-50/20 to-transparent blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold shadow-xs">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Fast-Track Deployment Sprint: 4-5 Day Functional Prototypes</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 font-display max-w-4xl mx-auto leading-[1.08]">
            Supercharge Enterprise Operations with <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2">SAP & Intelligent AI</span>.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We bridge deep SAP ERP stability with bleeding-edge AI automation, bespoke web portals, and omnichannel digital commerce architectures.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <button 
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-600/25 flex items-center gap-2"
            >
              <span>Start Your Implementation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a 
              href="#calculator"
              className="px-8 py-3.5 rounded-lg text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 transition border border-slate-300 shadow-xs"
            >
              Calculate Estimated ROI
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { val: '< 1.2s', label: 'Average ERP Query Latency' },
              { val: '4-5 Days', label: 'Initial Working Template Sprint' },
              { val: '100%', label: 'White & Blue Enterprise Aesthetic' },
              { val: '24/7', label: 'Continuous DevOps & SLA' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-display">{stat.val}</div>
                <div className="text-xs text-slate-500 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Service Filter Grid */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Nybix Arsenal</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mt-1">
                Modular Enterprise Architecture
              </h2>
              <p className="text-slate-600 text-sm mt-1">Filter by practice to inspect technical toolsets and business impact.</p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'sap', label: 'SAP ERP' },
                { id: 'ai', label: 'AI & Automation' },
                { id: 'web', label: 'Web Platform' },
                { id: 'mobile', label: 'Mobile Apps' },
                { id: 'ecom', label: 'E-Commerce' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                    selectedFilter === f.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all p-6 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                        {srv.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-blue-600 transition">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {srv.tagline}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="text-[11px] font-semibold text-slate-500 mb-2">Tech Stack:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {srv.tech.map((t, i) => (
                          <span key={i} className="text-[10px] font-medium bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-600">
                      ✓ {srv.highlight}
                    </span>
                    <button 
                      onClick={onOpenContact}
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive Workflow Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The 4-Step Velocity Model</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mt-1">
              How Nybix Deploys In Days, Not Months
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From initial prototype validation to enterprise production scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Architecture & Discovery',
                desc: 'Deep audit of existing SAP tables, API dependencies, security requirements, and automation targets.',
                badge: 'Days 1-2'
              },
              {
                step: '02',
                title: 'Rapid Prototype Demo',
                desc: 'Delivery of 3-4 interactive templates with real sample data for executive alignment and approval.',
                badge: 'Days 3-4'
              },
              {
                step: '03',
                title: 'Core System Integration',
                desc: 'Integration with SAP BTP, OpenAI/Anthropic APIs, ERP databases, and payment/auth pipelines.',
                badge: 'Sprint Phase'
              },
              {
                step: '04',
                title: 'Global Go-Live & Ops',
                desc: '24/7 observability, zero-downtime rolling updates, and managed basis SLA guarantees.',
                badge: 'Production'
              }
            ].map((st, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-blue-600 font-display">{st.step}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {st.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-display">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator Widget */}
      <section id="calculator" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-[#0B192C] text-white rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Interactive Estimator</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display mt-2">
                Estimate Your Modernization Value
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Configure your team scale and infrastructure complexity to see potential efficiency ROI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span>Active Team / Users:</span>
                    <span className="text-blue-400 font-bold">{teamSize} Users</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="500" 
                    step="10"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold mb-2">Current System Complexity:</div>
                  <div className="grid grid-cols-3 gap-2">
                    {['standard', 'medium', 'high'].map((c) => (
                      <button
                        key={c}
                        onClick={() => setInfraComplexity(c)}
                        className={`py-2 text-xs font-semibold rounded capitalize transition ${
                          infraComplexity === c 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-slate-400 bg-slate-800/60 p-3 rounded border border-slate-700">
                  ⚡ Calculations based on automated SAP invoice processing, automated customer inquiries, and optimized web load times.
                </div>
              </div>

              {/* Result Display */}
              <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 text-center space-y-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Estimated Annual Hours Saved</span>
                <div className="text-4xl sm:text-5xl font-black text-blue-400 font-display">
                  \${(calculatedSavings).toLocaleString()}
                </div>
                <div className="text-xs text-slate-300">
                  Target Rapid Prototype Timeline: <span className="font-bold text-emerald-400">{estimatedDays}</span>
                </div>

                <button 
                  onClick={onOpenContact}
                  className="w-full py-3 rounded text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition shadow-md"
                >
                  Book Scoping Session
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Modern Tech Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">NYBIX TECH</span>
            <span>•</span>
            <span>Blue & White Tech Edition</span>
          </div>
          <div>© 2026 Nybix. Built for enterprise scale and speed.</div>
        </div>
      </footer>

    </div>
  );
}

