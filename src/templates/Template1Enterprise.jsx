import React, { useState } from 'react';
import {
  Building2,
  Cpu,
  Globe,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Award,
} from 'lucide-react';
import { template1Services } from '../data/services';
import { template1Industries } from '../data/industries';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import TopBar from '../components/layout/TopBar';

export default function Template1Enterprise({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('sap');
  const services = template1Services;
  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Header Bar */}
      <TopBar
        leftContent={
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-blue-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> Certified Enterprise Practice
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline">SAP S/4HANA • Enterprise AI • Digital Platforms</span>
          </div>
        }
        rightContent={
          <div className="flex items-center gap-4">
            <span>Global Delivery Excellence</span>
            <button
              onClick={onOpenContact}
              className="text-blue-400 hover:text-white transition font-medium cursor-pointer"
            >
              Request Consultation →
            </button>
          </div>
        }
      />

      {/* Main Enterprise Navbar */}
      <header className="sticky top-12 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center gap-3">
                <img
                  src="/logo/nybix-logo-clean.png"
                  alt="NYBIX Enterprise Solutions"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
              <a href="#services" className="hover:text-[#0070F2] transition">Services</a>
              <a href="#sap-practice" className="hover:text-[#0070F2] transition flex items-center gap-1">
                SAP Practice <span className="bg-blue-50 text-[#0070F2] text-[10px] px-1.5 py-0.5 rounded font-semibold border border-blue-200">Core</span>
              </a>
              <a href="#ai-practice" className="hover:text-[#0070F2] transition">AI & Automation</a>
              <a href="#digital" className="hover:text-[#0070F2] transition">Web & Mobile</a>
              <a href="#industries" className="hover:text-[#0070F2] transition">Industries</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="md"
              onClick={onOpenContact}
              className="hidden sm:inline-flex"
            >
              Client Portal
            </Button>
            <Button
              variant="primary-sap"
              size="md"
              onClick={onOpenContact}
              className="gap-2"
            >
              <span>Schedule Strategic Call</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Classic SAP / EY Enterprise Authority */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#0070F2_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0070F2] text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Enterprise Digital & SAP Implementation Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B192C] font-display leading-[1.12]">
                Architecting the <span className="text-[#0070F2]">Intelligent Enterprise</span> Across SAP, AI & Cloud.
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Nybix delivers high-impact technology modernization for visionary enterprises. From certified SAP S/4HANA migrations and automated AI agent workflows to custom enterprise web and mobile platforms.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  variant="primary-sap"
                  size="lg"
                  onClick={onOpenContact}
                  className="gap-2 shadow-lg shadow-blue-500/25"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  as="a"
                  href="#services"
                  variant="secondary"
                  size="lg"
                >
                  Explore Core Services
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">150+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Global Enterprise Projects</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0070F2]">99.8%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">SLA Uptime Compliance</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">4-5 Days</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Rapid Prototyping Sprint</div>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Architecture Matrix */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="bg-[#003882] text-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-blue-200">Enterprise Framework</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mt-2">The Nybix Delivery Engine</h3>
                  <p className="text-xs text-blue-100 mt-1">Unified governance across ERP, AI, and digital customer channels.</p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/60 border border-blue-100">
                    <div className="w-8 h-8 rounded bg-[#0070F2] text-white flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">SAP S/4HANA Modernization</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Clean core architecture, BTP integration & automated reporting pipelines.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded bg-[#0B192C] text-white flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Enterprise AI & Autonomous Agents</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Predictive forecasting, automated invoice intake & ERP copilot tools.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded bg-sky-600 text-white flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">High-Concurrency Web & Mobile</h4>
                      <p className="text-xs text-slate-600 mt-0.5">B2B client portals, mobile field execution apps & e-commerce scale.</p>
                    </div>
                  </div>

                  <Button
                    variant="primary-sap"
                    size="md"
                    onClick={onOpenContact}
                    className="w-full mt-2 gap-2"
                  >
                    <span>Download Enterprise Architecture Whitepaper</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section with Enterprise Interactive Tabs */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            badge="Capabilities & Offerings"
            badgeClassName="text-[#0070F2]"
            heading="Full-Spectrum Technology Transformation"
            headingClassName="text-[#0B192C]"
            description="Organized into dedicated Centers of Excellence with specialized industry squads."
            descriptionClassName="text-base"
            className="mb-14"
          />

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-slate-200 pb-4">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold transition cursor-pointer ${
                    isActive
                      ? 'bg-[#0070F2] text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Card Content */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="blue-dark">
                  {activeService.tag}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0B192C] font-display">
                  {activeService.headline}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {activeService.desc}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Deliverables & Strengths</h4>
                  <ul className="grid sm:grid-cols-1 gap-2.5">
                    {activeService.capabilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0070F2] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Button
                    variant="primary-sap"
                    size="md"
                    onClick={onOpenContact}
                    className="gap-2 shadow-sm"
                  >
                    <span>Consult with a Principal Architect</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-md">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Business Impact Metric</div>
                  <div className="text-5xl font-black text-[#0070F2] my-3 font-display">
                    {activeService.stat}
                  </div>
                  <p className="text-sm font-medium text-slate-700 leading-snug">
                    {activeService.statLabel}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>Deployment Methodology</span>
                      <span className="font-semibold text-slate-900">Agile SAP Activate & CI/CD</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>Quality & Security Audit</span>
                      <span className="font-semibold text-slate-900">Enterprise SOC2 & ISO compliant</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>Support Coverage</span>
                      <span className="font-semibold text-slate-900">24/7 Managed Operations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            badge="Industry Expertise"
            badgeClassName="text-[#0070F2]"
            heading="Engineered for Industry-Specific Scale"
            headingClassName="text-[#0B192C]"
            description="Deep vertical domain knowledge configured with pre-built accelerators."
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {template1Industries.map((ind, idx) => (
              <Card key={idx} className="p-6">
                <div className="text-xs font-bold text-[#0070F2] uppercase tracking-wider">{ind.metric}</div>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 font-display">{ind.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{ind.desc}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0070F2]">
                  <span>Explore Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Call To Action */}
      <section className="py-20 bg-[#0B192C] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Launch Your 4-5 Day Sprint</span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display mt-3 mb-6">
            Ready to Modernize Your Enterprise Tech Stack?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect directly with Nybix principal architects to evaluate your SAP, AI, Web or E-Commerce roadmap with customized deployment milestones.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button
              variant="cta-white"
              size="lg"
              onClick={onOpenContact}
              className="gap-2"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#0070F2]" />
            </Button>
            <Button
              variant="cta-blue"
              size="lg"
              onClick={onOpenContact}
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo/nybix-logo-white.png"
                alt="NYBIX Technologies"
                className="h-8 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-4">
              Enterprise technology engineering firm specializing in SAP S/4HANA migrations, autonomous AI workflows, corporate web apps, and digital commerce.
            </p>
            <div className="text-slate-500">© 2026 Nybix. All rights reserved. Confidential.</div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">SAP Practice</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition">S/4HANA Migration</a></li>
              <li><a href="#services" className="hover:text-white transition">SAP BTP Integration</a></li>
              <li><a href="#services" className="hover:text-white transition">Fiori UX Design</a></li>
              <li><a href="#services" className="hover:text-white transition">24/7 Managed Basis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Digital & AI</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition">Enterprise AI Agents</a></li>
              <li><a href="#services" className="hover:text-white transition">Corporate Portals</a></li>
              <li><a href="#services" className="hover:text-white transition">iOS & Android Apps</a></li>
              <li><a href="#services" className="hover:text-white transition">B2B E-Commerce</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Governance</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition">ISO 27001 Certified</a></li>
              <li><a href="#services" className="hover:text-white transition">SOC 2 Type II</a></li>
              <li><a href="#services" className="hover:text-white transition">Data Privacy Policy</a></li>
              <li><a href="#services" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
