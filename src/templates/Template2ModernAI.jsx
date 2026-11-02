import React, { useState } from 'react';
import {
  ArrowUpRight,
  Zap,
  Calculator,
} from 'lucide-react';
import {
  template2Services,
  template2FilterCategories,
  template2WorkflowSteps,
  template2HeroMetrics,
} from '../data/services';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';

export default function Template2ModernAI({ onOpenContact }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [teamSize, setTeamSize] = useState(50);
  const [infraComplexity, setInfraComplexity] = useState('medium');

  const allServices = template2Services;

  const filteredServices =
    selectedFilter === 'all'
      ? allServices
      : allServices.filter((s) => s.category === selectedFilter);

  // Quick interactive estimation calculation
  const calculatedSavings = Math.round(
    teamSize * (infraComplexity === 'high' ? 14000 : infraComplexity === 'medium' ? 8500 : 4500)
  );
  const estimatedDays =
    infraComplexity === 'high' ? '14-21 Days' : infraComplexity === 'medium' ? '7-10 Days' : '4-5 Days';

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 font-sans">
      {/* Modern Minimal Navigation */}
      <header className="sticky top-12 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <a href="#" className="flex items-center">
                <img
                  src="/logo/nybix-logo-clean.png"
                  alt="NYBIX Tech"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </a>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <button
                onClick={() => setSelectedFilter('sap')}
                className={`transition cursor-pointer ${
                  selectedFilter === 'sap' ? 'font-semibold' : 'hover:opacity-80'
                }`}
                style={selectedFilter === 'sap' ? { color: 'var(--color-primary, #2563EB)' } : {}}
              >
                SAP Systems
              </button>
              <button
                onClick={() => setSelectedFilter('ai')}
                className={`transition cursor-pointer ${
                  selectedFilter === 'ai' ? 'font-semibold' : 'hover:opacity-80'
                }`}
                style={selectedFilter === 'ai' ? { color: 'var(--color-primary, #2563EB)' } : {}}
              >
                AI & Agents
              </button>
              <button
                onClick={() => setSelectedFilter('web')}
                className={`transition cursor-pointer ${
                  selectedFilter === 'web' ? 'font-semibold' : 'hover:opacity-80'
                }`}
                style={selectedFilter === 'web' ? { color: 'var(--color-primary, #2563EB)' } : {}}
              >
                Web & Mobile
              </button>
              <button
                onClick={() => setSelectedFilter('ecom')}
                className={`transition cursor-pointer ${
                  selectedFilter === 'ecom' ? 'font-semibold' : 'hover:opacity-80'
                }`}
                style={selectedFilter === 'ecom' ? { color: 'var(--color-primary, #2563EB)' } : {}}
              >
                E-Commerce
              </button>
              <a
                href="#calculator"
                className="hover:opacity-80 transition flex items-center gap-1 text-slate-500"
              >
                <Calculator className="w-3.5 h-3.5" /> ROI Calculator
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              shape="rounded"
              onClick={onOpenContact}
              className="gap-2"
            >
              <span>Build With Nybix</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Futuristic, Clean, High Contrast White & Electric Blue */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] blur-3xl -z-10 pointer-events-none opacity-50"
          style={{
            background:
              'radial-gradient(ellipse at center, var(--color-primary-light, #EBF4FE) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-xs"
            style={{
              backgroundColor: 'var(--color-primary-light, #EBF4FE)',
              borderColor: 'var(--color-primary, #2563EB)',
              color: 'var(--color-primary, #2563EB)',
            }}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Fast-Track Deployment Sprint: 4-5 Day Functional Prototypes</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 font-display max-w-4xl mx-auto leading-[1.08]">
            Supercharge Enterprise Operations with{' '}
            <span
              className="underline decoration-wavy decoration-2"
              style={{
                color: 'var(--color-primary, #2563EB)',
                textDecorationColor: 'var(--color-primary-glow, rgba(37,99,235,0.4))',
              }}
            >
              SAP & Intelligent AI
            </span>
            .
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We bridge deep SAP ERP stability with bleeding-edge AI automation, bespoke web portals, and omnichannel digital commerce architectures.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              shape="rounded"
              onClick={onOpenContact}
              className="gap-2 shadow-lg shadow-blue-600/25"
            >
              <span>Start Your Implementation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button
              as="a"
              href="#calculator"
              variant="secondary"
              size="lg"
              shape="rounded"
            >
              Calculate Estimated ROI
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {template2HeroMetrics.map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div
                  className="text-2xl sm:text-3xl font-extrabold font-display"
                  style={{ color: 'var(--color-primary, #2563EB)' }}
                >
                  {stat.val}
                </div>
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
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: 'var(--color-primary, #2563EB)' }}
              >
                The Nybix Arsenal
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mt-1">
                Modular Enterprise Architecture
              </h2>
              <p className="text-slate-600 text-sm mt-1">Filter by practice to inspect technical toolsets and business impact.</p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {template2FilterCategories.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    selectedFilter === f.id
                      ? 'text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  style={
                    selectedFilter === f.id
                      ? { backgroundColor: 'var(--color-primary, #2563EB)' }
                      : {}
                  }
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
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition group-hover:scale-105"
                        style={{
                          backgroundColor: 'var(--color-primary-light, #EBF4FE)',
                          color: 'var(--color-primary, #2563EB)',
                        }}
                      >
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
                      className="transition cursor-pointer"
                      style={{ color: 'var(--color-primary, #2563EB)' }}
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
          <SectionHeader
            badge="The 4-Step Velocity Model"
            badgeClassName="text-[var(--color-primary,#2563EB)]"
            heading="How Nybix Deploys In Days, Not Months"
            description="From initial prototype validation to enterprise production scale."
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {template2WorkflowSteps.map((st, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 relative">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-2xl font-black font-display"
                    style={{ color: 'var(--color-primary, #2563EB)' }}
                  >
                    {st.step}
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded border"
                    style={{
                      backgroundColor: 'var(--color-primary-light, #EBF4FE)',
                      borderColor: 'var(--color-primary, #2563EB)',
                      color: 'var(--color-primary, #2563EB)',
                    }}
                  >
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
          <div
            className="text-white rounded-2xl p-8 sm:p-12 shadow-2xl transition-colors duration-300"
            style={{
              background:
                'linear-gradient(135deg, #0F172A 0%, var(--color-dark, #0B192C) 100%)',
            }}
          >
            <div className="text-center max-w-xl mx-auto mb-10">
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: 'var(--color-primary, #38BDF8)' }}
              >
                Interactive Estimator
              </span>
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
                    <span
                      className="font-bold"
                      style={{ color: 'var(--color-primary, #38BDF8)' }}
                    >
                      {teamSize} Users
                    </span>
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
                        className={`py-2 text-xs font-semibold rounded capitalize transition cursor-pointer ${
                          infraComplexity === c
                            ? 'text-white'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                        style={
                          infraComplexity === c
                            ? { backgroundColor: 'var(--color-primary, #2563EB)' }
                            : {}
                        }
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
                <div
                  className="text-4xl sm:text-5xl font-black font-display"
                  style={{ color: 'var(--color-primary, #38BDF8)' }}
                >
                  ${calculatedSavings.toLocaleString()}
                </div>
                <div className="text-xs text-slate-300">
                  Target Rapid Prototype Timeline: <span className="font-bold text-emerald-400">{estimatedDays}</span>
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full py-3 rounded text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition shadow-md cursor-pointer"
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
          <div className="flex items-center gap-3">
            <img
              src="/logo/nybix-logo-clean.png"
              alt="NYBIX Tech"
              className="h-6 w-auto object-contain"
            />
            <span className="text-slate-400">|</span>
            <span>Enterprise Edition</span>
          </div>
          <div>© 2026 Nybix. Built for enterprise scale and speed.</div>
        </div>
      </footer>
    </div>
  );
}
