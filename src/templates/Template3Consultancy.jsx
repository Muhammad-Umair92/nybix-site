import React, { useState } from 'react';
import { 
  Compass, 
  Target, 
  TrendingUp, 
  Award, 
  FileText, 
  Briefcase, 
  Building, 
  ArrowRight, 
  Check, 
  Layers, 
  ChevronRight,
  ShieldCheck,
  Quote,
  Clock,
  Sparkles
} from 'lucide-react';

export default function Template3Consultancy({ onOpenContact }) {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      client: 'Global Automotive Tier-1 Supplier',
      sector: 'Automotive & Discrete Manufacturing',
      challenge: 'Fragmented legacy ERP (ECC 6.0) causing 48-hour delays in supply chain reconciliation and inventory blind spots across 12 manufacturing plants.',
      solution: 'Turnkey SAP S/4HANA migration orchestrated by Nybix with custom BTP extension apps for shop-floor tracking and real-time supplier EDI connectivity.',
      impact: 'Zero-downtime cutover over a holiday weekend; 42% reduction in material holding costs; real-time visibility across all 12 global plants.'
    },
    {
      client: 'Omnichannel Fashion & Apparel Retailer',
      sector: 'Consumer Goods & Retail',
      challenge: 'High customer churn and dropped cart rates during peak flash sales with disconnect between online Shopify frontend and backend warehouse ERP.',
      solution: 'Re-architected headless commerce engine unified with SAP S/4HANA inventory and AI-powered personalized recommendation models.',
      impact: 'Sub-200ms page loads during Black Friday peak; 34% increase in average order value (AOV); 99.99% uptime with \$40M+ throughput.'
    },
    {
      client: 'Multi-Region Industrial Logistics Fleet',
      sector: 'Transportation & Logistics',
      challenge: 'Manual paper-based dispatch and invoice reconciliation leading to 30-day payment cycles and uncollected demurrage claims.',
      solution: 'Bespoke mobile field execution app (iOS & Android) with automated OCR document capture and instant SAP billing integration.',
      impact: 'DSO (Days Sales Outstanding) decreased from 31 days to 6 days; automated processing of 15,000+ monthly delivery manifests.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Top Advisory Bar */}
      <div className="bg-[#0B192C] text-slate-300 text-xs py-2.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white tracking-wider uppercase text-[11px]">Nybix Strategic Advisory</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Transforming Fortune 1000 & High-Growth Enterprises</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-blue-400 font-medium">New York • London • Karachi</span>
            <button onClick={onOpenContact} className="text-white hover:text-blue-400 transition underline underline-offset-4 font-medium">
              Client Advisory Desk
            </button>
          </div>
        </div>
      </div>

      {/* Advisory Header */}
      <header className="sticky top-12 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center">
                <img 
                  src="/logo/nybix-logo-clean.png" 
                  alt="NYBIX Consulting & Advisory" 
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </a>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
              <a href="#strategic-pillars" className="hover:text-blue-700 transition">Advisory Pillars</a>
              <a href="#case-studies" className="hover:text-blue-700 transition">Case Studies</a>
              <a href="#insights" className="hover:text-blue-700 transition">Executive Briefings</a>
              <a href="#methodology" className="hover:text-blue-700 transition">The Velocity Sprint</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenContact}
              className="px-6 py-3 rounded text-sm font-semibold text-white bg-[#003882] hover:bg-[#0B192C] transition shadow-md flex items-center gap-2"
            >
              <span>Engage Our Partners</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Executive Editorial Vibe (EY / McKinsey Style) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider">
              Strategic Executive Briefing
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black text-[#0B192C] leading-tight">
              Where Rigorous Enterprise SAP Meets Autonomous Intelligence.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed font-sans">
              Nybix partners with C-suite executives to de-risk complex technology overhauls. We combine proven enterprise governance across SAP ERP systems with cutting-edge AI implementation and robust web/mobile engineering.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={onOpenContact}
                className="px-7 py-3.5 rounded text-sm font-semibold text-white bg-[#003882] hover:bg-[#0B192C] transition shadow-md flex items-center gap-2"
              >
                <span>Request Executive Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                href="#case-studies"
                className="px-7 py-3.5 rounded text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
              >
                Review Verified Client Value
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="strategic-pillars" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-sans">Four Core Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0B192C] mt-2">
              Transformational Capabilities
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every engagement is architected to deliver measurable EBITDA improvements and technical sovereignty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                pillar: 'Pillar I',
                title: 'SAP S/4HANA Strategy',
                desc: 'Comprehensive brownfield/greenfield migration roadmaps, clean-core compliance, and BTP extension architecture.'
              },
              {
                icon: Target,
                pillar: 'Pillar II',
                title: 'Enterprise AI Strategy',
                desc: 'Deploying domain-specific LLM agents, automated workflow orchestration, and predictive business intelligence.'
              },
              {
                icon: Compass,
                pillar: 'Pillar III',
                title: 'Digital Experience Engineering',
                desc: 'Developing resilient, high-concurrency B2B web portals and offline-first mobile applications for field teams.'
              },
              {
                icon: TrendingUp,
                pillar: 'Pillar IV',
                title: 'Unified Digital Commerce',
                desc: 'Scalable omnichannel architectures integrating storefront transactions directly with supply chain ERP.'
              }
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition">
                  <div>
                    <div className="text-xs font-semibold text-blue-700 uppercase tracking-widest">{p.pillar}</div>
                    <h3 className="text-lg font-serif font-bold text-slate-900 mt-2 mb-3">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#003882]">
                    <span>Consult Practice Leader</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Case Studies Interactive Showcase */}
      <section id="case-studies" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Proven Performance</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0B192C] mt-2">
              Executive Case Studies
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Real-world transformations delivered with zero-downtime tolerance.
            </p>
          </div>

          {/* Selectable tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {caseStudies.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCase(idx)}
                className={`px-5 py-2.5 rounded text-xs font-semibold transition ${
                  selectedCase === idx
                    ? 'bg-[#003882] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c.client}
              </button>
            ))}
          </div>

          {/* Case Detail Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
              {caseStudies[selectedCase].sector}
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
              {caseStudies[selectedCase].client}
            </h3>

            <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">The Challenge</div>
                <p className="text-xs text-slate-700 leading-relaxed">{caseStudies[selectedCase].challenge}</p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700">The Solution</div>
                <p className="text-xs text-slate-700 leading-relaxed">{caseStudies[selectedCase].solution}</p>
              </div>

              <div className="space-y-2 bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">Documented Impact</div>
                <p className="text-xs font-medium text-slate-900 leading-relaxed">{caseStudies[selectedCase].impact}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
              <button 
                onClick={onOpenContact}
                className="px-6 py-2.5 rounded text-xs font-semibold text-white bg-[#003882] hover:bg-[#0B192C] transition flex items-center gap-1.5"
              >
                <span>Request Detailed Audit Report</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Advisory Footer */}
      <footer className="bg-[#0B192C] text-slate-400 py-12 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="mb-2">
              <img 
                src="/logo/nybix-logo-white.png" 
                alt="NYBIX Advisory & Consulting" 
                className="h-7 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-slate-400 text-xs">High-integrity enterprise technology practices.</p>
          </div>
          <div className="flex items-center gap-6 text-slate-400 text-xs">
            <span>SAP Practice</span>
            <span>AI Practice</span>
            <span>Web & Mobile</span>
            <span>E-Commerce</span>
          </div>
          <div className="text-slate-500">© 2026 Nybix. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}

