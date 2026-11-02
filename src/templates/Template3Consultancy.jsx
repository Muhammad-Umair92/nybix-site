import React, { useState } from 'react';
import {
  Compass,
  Target,
  TrendingUp,
  Briefcase,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  Headphones,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { template3CaseStudies } from '../data/caseStudies';
import { companyInfo } from '../data/company';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import ClientLogoCloud from '../components/ClientLogoCloud';
import ProductsSection from '../components/ProductsSection';
import AboutSection from '../components/AboutSection';

export default function Template3Consultancy({ onOpenContact }) {
  const [selectedCase, setSelectedCase] = useState(0);
  const caseStudies = template3CaseStudies;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sleek Advisory Header (Single Clean Navbar) */}
      <header className="sticky top-9 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/logo/nybix-logo-clean.png"
                alt="NYBIX Consulting & Advisory"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-700">
              <a href="#about" className="hover:text-[var(--color-primary,#0070F2)] transition">
                About Us
              </a>
              <a href="#strategic-pillars" className="hover:text-[var(--color-primary,#0070F2)] transition">
                Advisory Pillars
              </a>
              <a href="#clients" className="hover:text-[var(--color-primary,#0070F2)] transition">
                Enterprise Clients
              </a>
              <a href="#products" className="hover:text-[var(--color-primary,#0070F2)] transition flex items-center gap-1">
                Products <span className="bg-blue-50 text-[var(--color-primary,#0070F2)] text-[9px] px-1.5 py-0.2 rounded font-bold border border-blue-200">AP Console</span>
              </a>
              <a href="#case-studies" className="hover:text-[var(--color-primary,#0070F2)] transition">
                Verified Cases
              </a>
              <a href="#offshore" className="hover:text-[var(--color-primary,#0070F2)] transition">
                Offshore Pods
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="primary-navy"
              size="sm"
              onClick={onOpenContact}
              className="gap-2 text-xs"
            >
              <span>Engage Our Partners</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Executive Editorial Vibe (EY / McKinsey Style) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <div
              className="inline-block px-3 py-1 rounded border text-xs font-semibold uppercase tracking-wider"
              style={{
                backgroundColor: 'var(--color-primary-light, #EBF4FE)',
                borderColor: 'var(--color-primary, #0070F2)',
                color: 'var(--color-accent, #003882)',
              }}
            >
              Strategic Executive Briefing
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black text-[var(--color-dark,#0B192C)] leading-tight">
              Where Rigorous Enterprise SAP Meets Autonomous Intelligence.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Nyabix partners with enterprise executives at industry leaders like <strong>Indus Motor Company (IMC Toyota)</strong>, <strong>PARCO Refinery</strong>, and <strong>PSO</strong>. We combine proven enterprise governance across SAP SF Ariba and Oracle with proprietary AI tools (AP Console) and high-velocity offshore squads.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary-navy"
                size="lg"
                onClick={onOpenContact}
                className="gap-2 text-sm"
              >
                <span>Request Executive Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                as="a"
                href="#case-studies"
                variant="secondary-muted"
                size="lg"
                className="text-sm"
              >
                Review Verified Client Value
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* World-Class Client Trust Cloud */}
      <div id="clients">
        <ClientLogoCloud />
      </div>

      {/* Proprietary In-House Products Section (AP Console & Trip Planner) */}
      <ProductsSection onOpenContact={onOpenContact} />

      {/* Strategic Pillars */}
      <section id="strategic-pillars" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            badge="Four Core Pillars"
            badgeClassName="text-[var(--color-primary,#0070F2)]"
            heading="Transformational Capabilities"
            headingClassName="font-serif font-black text-[var(--color-dark,#0B192C)]"
            description="Every engagement is architected to deliver measurable operational improvements and enterprise technical sovereignty."
            align="left"
            className="mb-14"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                pillar: 'Pillar I',
                title: 'SAP & SF Ariba Strategy',
                desc: 'Comprehensive SAP S/4HANA migrations, SF Ariba procurement orchestration, and Oracle database cross-connectivity.',
              },
              {
                icon: Target,
                pillar: 'Pillar II',
                title: 'Autonomous AI Products',
                desc: 'Proprietary AP Console for 3-way invoice matching against SAP, custom LangGraph agents, and Trip Planner logistics optimization.',
              },
              {
                icon: Compass,
                pillar: 'Pillar III',
                title: 'Full-Stack Web & Mobile Apps',
                desc: 'Production Next.js corporate storefronts, React Native iOS/Android platforms (proven at IMC Toyota scale), and Shopify mobile apps.',
              },
              {
                icon: Headphones,
                pillar: 'Pillar IV',
                title: '24/7 Offshore Support Pods',
                desc: 'Cost-optimized dedicated offshore engineering squads delivering 60%+ TCO reduction with continuous managed L1/L2/L3 support.',
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition">
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: 'var(--color-primary, #0070F2)' }}
                    >
                      {p.pillar}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-900 mt-2 mb-3">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[var(--color-accent,#003882)]">
                    <span>Consult Practice Leader</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Interactive Showcase — Featuring Real Clients IMC, PARCO, PSO */}
      <section id="case-studies" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            badge="Verified Client Performance"
            badgeClassName="text-[var(--color-primary,#0070F2)]"
            heading="Executive Case Studies"
            headingClassName="font-serif font-black text-[var(--color-dark,#0B192C)]"
            description="Real-world transformations delivered for Indus Motor Company (Toyota), Pak-Arab Refinery (PARCO), and Pakistan State Oil (PSO)."
            className="mb-14"
          />

          {/* Selectable tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {caseStudies.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCase(idx)}
                className={`px-5 py-2.5 rounded text-xs font-semibold transition cursor-pointer ${
                  selectedCase === idx
                    ? 'text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                style={
                  selectedCase === idx
                    ? { backgroundColor: 'var(--color-accent, #003882)' }
                    : {}
                }
              >
                {c.client}
              </button>
            ))}
          </div>

          {/* Case Detail Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div
              className="text-xs font-bold uppercase tracking-wider mb-1"
              style={{ color: 'var(--color-primary, #0070F2)' }}
            >
              {caseStudies[selectedCase].sector}
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              {caseStudies[selectedCase].client}
            </h3>
            {caseStudies[selectedCase].tech && (
              <div className="text-[11px] font-mono text-slate-500 mb-6">
                Tech Stack: <span className="font-semibold text-slate-700">{caseStudies[selectedCase].tech}</span>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">The Challenge</div>
                <p className="text-xs text-slate-700 leading-relaxed">{caseStudies[selectedCase].challenge}</p>
              </div>

              <div className="space-y-2">
                <div
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: 'var(--color-primary, #0070F2)' }}
                >
                  The Nybix Solution
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{caseStudies[selectedCase].solution}</p>
              </div>

              <div className="space-y-2 bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">Documented Outcome</div>
                <p className="text-xs font-medium text-slate-900 leading-relaxed">{caseStudies[selectedCase].impact}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
              <Button
                variant="primary-navy"
                size="sm"
                onClick={onOpenContact}
                className="gap-1.5"
              >
                <span>Request Case Study Scoping Report</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Official About Us Section (Mission, Vision & Digital Solutions) */}
      <AboutSection onOpenContact={onOpenContact} />

      {/* Offshore Delivery Practice Section */}
      <section id="offshore" className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 text-[var(--color-primary,#0070F2)] text-xs font-bold uppercase tracking-wider">
                <Headphones className="w-3.5 h-3.5" />
                <span>Global Engineering Pods</span>
              </div>
              <h2 className="text-3xl font-serif font-black text-slate-900 leading-tight">
                24/7 Dedicated Offshore Squads with Enterprise Governance
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Empower your enterprise with dedicated senior engineering squads based in our delivery hubs in Karachi and Dallas. We provide round-the-clock L1/L2/L3 SLAs, SAP Basis administration, and full-stack development, delivering 60%+ TCO reduction without quality or time-zone friction.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
                <div>
                  <div className="font-serif font-bold text-xl text-slate-900">24/7/365</div>
                  <div className="text-slate-500 text-[11px]">Managed SLA Support</div>
                </div>
                <div>
                  <div className="font-serif font-bold text-xl text-[var(--color-primary,#0070F2)]">60%+</div>
                  <div className="text-slate-500 text-[11px]">TCO Cost Reduction</div>
                </div>
                <div>
                  <div className="font-serif font-bold text-xl text-slate-900">&lt; 15 min</div>
                  <div className="text-slate-500 text-[11px]">Critical Incident Response</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs">
              <h3 className="font-bold text-slate-900 text-sm">Offshore Pod Capabilities</h3>
              <ul className="space-y-2.5 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>SAP S/4HANA & SF Ariba Dedicated Technical Teams</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>React Native, Flutter & iOS/Android Developers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Next.js 15, Node.js & High-Volume E-Commerce Pods</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Slack/Teams Integration with Client Leads</span>
                </li>
              </ul>
              <Button
                variant="primary-navy"
                size="md"
                onClick={onOpenContact}
                className="w-full mt-2"
              >
                <span>Request Offshore Pod Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Footer */}
      <footer
        className="text-slate-400 py-12 text-xs border-t border-slate-800"
        style={{ backgroundColor: 'var(--color-dark, #0B192C)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="mb-2">
              <img
                src="/logo/nybix-logo-white.png"
                alt="NYBIX Advisory & Consulting"
                className="h-7 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-slate-400 text-xs">High-integrity enterprise technology & offshore practice.</p>
            <div className="text-slate-300 text-[11px] mt-1 space-x-3">
              <span>Email: <a href={`mailto:${companyInfo.email}`} className="text-blue-400 hover:underline">{companyInfo.email}</a></span>
              <span>•</span>
              <span>PK: {companyInfo.phones.pkDisplay}</span>
              <span>•</span>
              <span>USA: {companyInfo.phones.usDisplay}</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-slate-400 text-xs">
            <span>SAP & SF Ariba</span>
            <span>AP Console</span>
            <span>IMC Toyota Case</span>
            <span>Offshore Squads</span>
          </div>
          <div className="text-slate-500">© 2026 Nyabix Technologies. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
