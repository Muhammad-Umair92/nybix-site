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
import { companyInfo } from '../data/company';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import ClientLogoCloud from '../components/ClientLogoCloud';
import ProductsSection from '../components/ProductsSection';
import AboutSection from '../components/AboutSection';

export default function Template1Enterprise({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('sap-ariba');
  const services = template1Services;
  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* Sleek Main Enterprise Navbar (Clean single header) */}
      <header className="sticky top-9 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img
                src={companyInfo.logos.clean}
                alt="NYBIX Enterprise Solutions"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-700">
              <a href="#about" className="hover:text-[var(--color-primary,#0070F2)] transition">About Us</a>
              <a href="#services" className="hover:text-[var(--color-primary,#0070F2)] transition">Services</a>
              <a href="#products" className="hover:text-[var(--color-primary,#0070F2)] transition flex items-center gap-1">
                Products <span className="bg-blue-50 text-[var(--color-primary,#0070F2)] text-[9px] px-1.5 py-0.2 rounded font-bold border border-blue-200">AP Console</span>
              </a>
              <a href="#clients" className="hover:text-[var(--color-primary,#0070F2)] transition">Enterprise Clients</a>
              <a href="#industries" className="hover:text-[var(--color-primary,#0070F2)] transition">Industries</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenContact}
              className="hidden sm:inline-flex text-xs"
            >
              Client Portal
            </Button>
            <Button
              variant="primary-sap"
              size="sm"
              onClick={onOpenContact}
              className="gap-2 text-xs"
            >
              <span>Schedule Strategic Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Classic SAP / EY Enterprise Authority */}
      <section className="relative pt-16 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/20 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary,#0070F2)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[var(--color-primary,#0070F2)] text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Enterprise SAP S/4HANA, SF Ariba & AI Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-dark,#0B192C)] font-display leading-[1.1]">
                Architecting the <span className="text-[var(--color-primary,#0070F2)]">Intelligent Enterprise</span> Across SAP, AI & Cloud.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Nybix delivers high-impact technology modernization for visionary enterprises like <strong>PARCO</strong>, <strong>IMC (Toyota)</strong>, and <strong>PSO</strong>. From certified SAP SF Ariba and Oracle bridges to proprietary AI products (AP Console) and 24/7 offshore support squads.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button
                  variant="primary-sap"
                  size="lg"
                  onClick={onOpenContact}
                  className="gap-2 shadow-lg shadow-blue-500/25 text-sm"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  as="a"
                  href="#services"
                  variant="secondary"
                  size="lg"
                  className="text-sm"
                >
                  Explore Core Services
                </Button>
              </div>

              {/* Trust Badges - Clean Numbers Only */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--color-dark,#0B192C)] font-display">150+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Enterprise Deployments</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary,#0070F2)] font-display">99.8%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">AP Console OCR Match SLA</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--color-dark,#0B192C)] font-display">24/7</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Dedicated Offshore Ops</div>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Architecture Matrix */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="bg-[var(--color-accent,#003882)] text-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-blue-200">Enterprise Framework</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <h3 className="text-lg font-bold mt-2">The Nybix Delivery Engine</h3>
                  <p className="text-xs text-blue-100 mt-1">Unified governance across SAP S/4HANA, SF Ariba, Oracle, and AI Products.</p>
                </div>

                <div className="p-6 space-y-3.5 text-xs">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-primary,#0070F2)] text-white flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">SAP S/4HANA & SF Ariba Bridges</h4>
                      <p className="text-slate-600 mt-0.5">Seamless SF Ariba procurement with Oracle & SAP S/4HANA clean core.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-dark,#0B192C)] text-white flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">AP Console (Proprietary AI)</h4>
                      <p className="text-slate-600 mt-0.5">Automated 3-way invoice matching & ERP line item posting with zero data entry.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Full-Stack Web & Mobile Apps</h4>
                      <p className="text-slate-600 mt-0.5">High-volume Next.js portals, React Native mobile apps & offshore support squads.</p>
                    </div>
                  </div>

                  <Button
                    variant="primary-sap"
                    size="md"
                    onClick={onOpenContact}
                    className="w-full mt-2 gap-2 text-xs"
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

      {/* World-Class Client Trust Cloud */}
      <div id="clients">
        <ClientLogoCloud />
      </div>

      {/* Proprietary In-House Products Section (AP Console & Trip Planner) */}
      <ProductsSection onOpenContact={onOpenContact} />

      {/* Core Services Section with Enterprise Interactive Tabs */}
      <section id="services" className="py-20 bg-slate-50/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            badge="Capabilities & Offerings"
            badgeClassName="text-[var(--color-primary,#0070F2)]"
            heading="Full-Spectrum Technology Transformation"
            headingClassName="text-[var(--color-dark,#0B192C)]"
            description="Organized into dedicated Centers of Excellence: SAP, SF Ariba, AI Automation, Mobile, Web, and 24/7 Offshore Support."
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
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    isActive
                      ? 'bg-[var(--color-primary,#0070F2)] text-white shadow-md shadow-blue-500/20'
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
          <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div
                  className="inline-block px-3 py-1 rounded text-xs font-bold"
                  style={{
                    backgroundColor: 'var(--color-primary-light, #EBF4FE)',
                    color: 'var(--color-accent, #003882)',
                  }}
                >
                  {activeService.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark,#0B192C)] font-display">
                  {activeService.headline}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeService.desc}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Deliverables & Strengths</h4>
                  <ul className="grid sm:grid-cols-1 gap-2.5">
                    {activeService.capabilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-primary,#0070F2)] shrink-0 mt-0.5" />
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
                    className="gap-2 shadow-sm text-xs"
                  >
                    <span>Consult with a Principal Architect</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Business Impact Metric</div>
                  <div className="text-5xl font-black text-[var(--color-primary,#0070F2)] my-3 font-display">
                    {activeService.stat}
                  </div>
                  <p className="text-xs font-medium text-slate-700 leading-snug">
                    {activeService.statLabel}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>Deployment Methodology</span>
                      <span className="font-semibold text-slate-900">Agile SAP Activate & CI/CD</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>Quality & Security Audit</span>
                      <span className="font-semibold text-slate-900">Enterprise SOC2 & ISO compliant</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>Global Support Coverage</span>
                      <span className="font-semibold text-slate-900">24/7 Dedicated Offshore Squads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Verified Client Solutions Section */}
      <section id="industries" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            badge="Verified Enterprise Track Record"
            badgeClassName="text-[var(--color-primary,#0070F2)]"
            heading="Solutions Engineered for Industry Leaders"
            headingClassName="text-[var(--color-dark,#0B192C)]"
            description="Proven impact delivering for national fuel distributors, energy refineries, and automotive leaders."
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {template1Industries.map((ind, idx) => (
              <Card key={idx} className="p-6 rounded-2xl">
                <div className="text-xs font-bold text-[var(--color-primary,#0070F2)] uppercase tracking-wider">{ind.metric}</div>
                <h3 className="text-base font-bold text-slate-900 mt-2 mb-1 font-display">{ind.title}</h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 inline-block mb-2">
                  {ind.tag}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">{ind.desc}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[var(--color-primary,#0070F2)]">
                  <span>Explore Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Official About Us Section (Mission, Vision & Digital Solutions) */}
      <AboutSection onOpenContact={onOpenContact} />

      {/* Corporate Call To Action */}
      <section
        className="py-20 text-white relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-dark, #0B192C)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Launch Your 4-5 Day Sprint</span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display mt-3 mb-6">
            Ready to Modernize Your Enterprise Tech Stack?
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect directly with Nybix principal architects to evaluate your SAP, SF Ariba, Oracle, AP Console, or dedicated offshore development roadmap.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button
              variant="cta-white"
              size="lg"
              onClick={onOpenContact}
              className="gap-2 text-sm"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4 text-[var(--color-primary,#0070F2)]" />
            </Button>
            <Button
              variant="primary-sap"
              size="lg"
              onClick={onOpenContact}
              className="text-sm"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Footer with Official Contacts */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <img
                src={companyInfo.logos.white}
                alt="NYBIX Technologies"
                className="h-7 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Enterprise technology engineering firm delivering SAP SF Ariba integrations, autonomous AI products (AP Console), high-volume web/mobile platforms, and 24/7 offshore support.
            </p>
            <div className="space-y-1 text-slate-300 text-[11px] pt-1">
              <div><strong>Email:</strong> <a href={`mailto:${companyInfo.email}`} className="text-blue-400 hover:underline">{companyInfo.email}</a></div>
              <div><strong>Phone (PK):</strong> <a href={`tel:${companyInfo.phones.pkCall}`} className="hover:text-white transition">{companyInfo.phones.pkDisplay}</a></div>
              <div><strong>Phone (USA):</strong> <a href={`tel:${companyInfo.phones.usCall}`} className="hover:text-white transition">{companyInfo.phones.usDisplay}</a></div>
              <div><strong>Hubs:</strong> {companyInfo.locations}</div>
            </div>
            <div className="text-slate-500 pt-2">© 2026 Nyabix Technologies. All rights reserved. Confidential.</div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">SAP & Enterprise</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition">SAP S/4HANA Cloud</a></li>
              <li><a href="#services" className="hover:text-white transition">SF Ariba Integrations</a></li>
              <li><a href="#services" className="hover:text-white transition">Oracle ERP Bridges</a></li>
              <li><a href="#services" className="hover:text-white transition">SAP BTP & Fiori Apps</a></li>
              <li><a href="#services" className="hover:text-white transition">24/7 Managed Basis Ops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">AI & Products</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-white transition">AP Console (AI Invoicing)</a></li>
              <li><a href="#products" className="hover:text-white transition">Trip Planner Engine</a></li>
              <li><a href="#services" className="hover:text-white transition">Next.js Web Portals</a></li>
              <li><a href="#services" className="hover:text-white transition">React Native & Flutter</a></li>
              <li><a href="#services" className="hover:text-white transition">Shopify Mobile Apps</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Enterprise Clients</h4>
            <ul className="space-y-2">
              <li><a href="#clients" className="hover:text-white transition">IMC (Toyota Pakistan)</a></li>
              <li><a href="#clients" className="hover:text-white transition">PARCO Refinery</a></li>
              <li><a href="#clients" className="hover:text-white transition">PSO Supply Chain</a></li>
              <li><a href="#services" className="hover:text-white transition">24/7 Offshore Pods</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
