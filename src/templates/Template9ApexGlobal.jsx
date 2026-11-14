import React, { useState, useEffect, useRef } from 'react';
import {
  Sun, Moon, ArrowRight, Phone, Mail, MapPin, Zap, Globe, Smartphone,
  Code2, Brain, ShoppingCart, Award, ChevronRight, Play, Star, CheckCircle2,
  Layers, TrendingUp, Users, Shield, Sparkles, Clock, Activity, Cpu,
  Database, Server, Terminal, Lock, ChevronDown, Check, Compass
} from 'lucide-react';
import { companyInfo } from '../data/company';
import { template3CaseStudies } from '../data/caseStudies';
import { useTheme } from '../context/ThemeContext';
import ClientLogoCloud from '../components/ClientLogoCloud';
import AboutSection from '../components/AboutSection';
import { cn } from '../lib/cn';

/* ─────────────────────────────────────────────────────────────────
   DATA ARCHITECTURE (Adobe + SAP + DigiTrends + Folio3 + Adbio)
───────────────────────────────────────────────────────────────── */

const solutionPillars = [
  {
    id: 'sap-core',
    label: 'SAP S/4HANA & Ariba',
    tag: 'SAP Gold Practice',
    headline: 'Clean-Core ERP Architecture & SF Ariba Procurement',
    client: 'PARCO (Pak-Arab Refinery)',
    desc: 'Enterprise S/4HANA brownfield/greenfield deployments integrated with SAP Business Technology Platform (BTP). Proven across refinery pipelines and complex petrochemical procurement.',
    metrics: [
      { label: 'Approval Speed', val: '60% faster' },
      { label: 'Audit Governance', val: '100% compliant' },
      { label: 'ERP Clean Core', val: 'Zero debt' },
    ],
    features: [
      'SAP S/4HANA Cloud & On-Premises Migration',
      'SAP SF Ariba Sourcing, Contracts & Network Integration',
      'SAP BTP Side-by-Side Extensions & Custom Fiori Apps',
      'Legacy Oracle / AS400 ERP Reconciliation Bridge',
    ],
    tech: ['SAP S/4HANA', 'SF Ariba', 'SAP BTP', 'Fiori UX', 'Oracle'],
  },
  {
    id: 'ai-doc',
    label: 'Autonomous AI & AP Console',
    tag: 'Proprietary IP',
    headline: 'AP Console: Intelligent 3-Way OCR Invoice Matching',
    client: 'PSO (Pakistan State Oil)',
    desc: 'Proprietary computer vision and document intelligence engine processing 25,000+ paper delivery manifests monthly with 99.8% match accuracy and automated SAP ledger posting.',
    metrics: [
      { label: 'Monthly Manifests', val: '25,000+' },
      { label: 'Match Accuracy', val: '99.8%' },
      { label: 'DSO Reduction', val: '5 days' },
    ],
    features: [
      'Multi-page OCR extraction of fuel invoices & manifests',
      'Automated 3-way reconciliation against PO & Goods Receipt',
      'Zero-latency RFC integration directly into SAP FI/CO',
      'Demurrage exception alerting & predictive dispute resolution',
    ],
    tech: ['AP Console', 'Computer Vision', 'PyTorch', 'SAP RFC', 'PostgreSQL'],
  },
  {
    id: 'ecom-mobile',
    label: 'Digital Commerce & Mobile',
    tag: 'Automotive Scale',
    headline: 'Nationwide E-Commerce & Native Mobile Ecosystems',
    client: 'IMC (Indus Motor Company - Toyota)',
    desc: 'Complete full-stack automotive commerce platform unifying responsive web and native iOS/Android mobile apps for customer orders, real-time parts catalogs, and dealer dispatch.',
    metrics: [
      { label: 'Customer Reach', val: 'Nationwide' },
      { label: 'Uptime SLA', val: '99.95%' },
      { label: 'Order Processing', val: 'Sub-second' },
    ],
    features: [
      'React & Next.js high-performance web storefronts',
      'Cross-platform React Native mobile apps (iOS & Android)',
      'Automated inventory & warehouse synchronization',
      'Secure high-throughput payment gateway integration',
    ],
    tech: ['React 19', 'Next.js', 'React Native', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'cloud-squads',
    label: 'Trip Planner & 24/7 Squads',
    tag: 'Follow-The-Sun Support',
    headline: 'Trip Planner Logistics & Dedicated Global Offshore Pods',
    client: 'Dallas HQ + Karachi Delivery Center',
    desc: 'Proprietary logistics routing engine with dedicated 24/7 agile engineering squads delivering seamless US management with high-velocity Pakistani engineering capacity.',
    metrics: [
      { label: 'Timezone Coverage', val: '24/7/365' },
      { label: 'Average SLA Response', val: '< 15 mins' },
      { label: 'Cost Advantage', val: '40-60%' },
    ],
    features: [
      'Multi-depot algorithmic route optimization (Trip Planner)',
      'Dedicated SAP Basis, ABAP & Full-Stack engineering squads',
      'Dual-hub project management (Dallas, TX + Karachi, PK)',
      'Transparent sprint tracking & weekly client telemetry',
    ],
    tech: ['Trip Planner', 'Docker', 'Kubernetes', 'AWS', 'GCP'],
  },
];

const executiveStats = [
  { val: '25,000+', label: 'Monthly Manifests Automated', sub: 'PSO AP Console Deployment' },
  { val: '60%', label: 'PO Approval Cycle Acceleration', sub: 'PARCO SAP Ariba Transformation' },
  { val: '99.95%', label: 'Mission-Critical SLA Uptime', sub: 'IMC Toyota E-Commerce Platform' },
  { val: '24/7', label: 'Dual-Hub Synchronized Delivery', sub: 'Dallas (USA) & Karachi (PK)' },
];

const certBadges = [
  'SAP Certified Enterprise Partner',
  'ISO 9001:2015 Quality Certified',
  'SOC 2 Type II Security Compliant',
  'Clutch 5.0 Rated Global B2B',
  'Forbes Technology Council Member',
  'Google Cloud & AWS Validated',
];

/* ─────────────────────────────────────────────────────────────────
   ANIMATED COUNTER COMPONENT
───────────────────────────────────────────────────────────────── */
function ApexCounter({ target }) {
  const [display, setDisplay] = useState(target);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const match = target.match(/^([\d,.]+)(.*)$/);
          if (!match) return;
          const numStr = match[1].replace(/,/g, '');
          const isFloat = numStr.includes('.');
          const num = parseFloat(numStr);
          const suffix = match[2] || '';
          if (isNaN(num)) return;

          const steps = 30;
          const stepVal = num / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += stepVal;
            if (current >= num) {
              setDisplay(target);
              clearInterval(timer);
            } else {
              setDisplay((isFloat ? current.toFixed(2) : Math.floor(current).toLocaleString()) + suffix);
            }
          }, 35);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

/* ─────────────────────────────────────────────────────────────────
   MAIN COMPONENT: TEMPLATE 9 (APEX GLOBAL BENCHMARK)
───────────────────────────────────────────────────────────────── */
export default function Template9ApexGlobal({ onOpenContact }) {
  const [isDark, setIsDark] = useState(false);
  const [activePillar, setActivePillar] = useState(solutionPillars[0].id);
  const [activeTab, setActiveTab] = useState('architecture');
  const { activeTheme } = useTheme();

  const currentPillar = solutionPillars.find((p) => p.id === activePillar) || solutionPillars[0];

  // Theme-aware color references
  const bg = isDark ? '#06090e' : '#ffffff';
  const surface = isDark ? '#0d131d' : '#f8fafc';
  const surfaceSubtle = isDark ? '#131b29' : '#f1f5f9';
  const text = isDark ? '#f8fafc' : '#0f172a';
  const textMuted = isDark ? '#94a3b8' : '#64748b';
  const border = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.08)';

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-500 relative selection:bg-[var(--color-primary)] selection:text-white"
      style={{ backgroundColor: bg, color: text }}
    >
      {/* ── Global Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
        @keyframes apexMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .apex-glass { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        .apex-gradient-text {
          background: linear-gradient(135deg, var(--color-primary, #0070F2), #0284c7, #4338ca);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* ── Ambient Background Glows ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] opacity-20 transition-all duration-700"
          style={{ backgroundColor: 'var(--color-primary, #0070F2)' }}
        />
        <div
          className="absolute top-[40%] -right-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-10 transition-all duration-700"
          style={{ backgroundColor: 'var(--color-accent, #003882)' }}
        />
      </div>

      {/* ── Sticky Executive Navigation (Adobe / SAP Style) ── */}
      <nav
        className="sticky top-0 z-30 border-b transition-colors duration-300 apex-glass"
        style={{
          backgroundColor: isDark ? 'rgba(6, 9, 14, 0.85)' : 'rgba(255, 255, 255, 0.95)',
          borderColor: border,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2">
              <img
                src={isDark ? companyInfo.logos.white : companyInfo.logos.clean}
                alt={companyInfo.name}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>
            <span
              className="hidden 2xl:inline-block text-[11px] font-semibold tracking-wider uppercase pl-3 border-l"
              style={{ borderColor: border, color: textMuted }}
            >
              Enterprise Sovereign Practice
            </span>
          </div>

          {/* Clean Executive Anchor Links (Adobe & SAP Structure) */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold">
            <a
              href="#interactive-stage"
              className="transition-colors hover:text-[var(--color-primary)]"
              style={{ color: textMuted }}
            >
              Solutions Stage
            </a>
            <a
              href="#case-studies"
              className="transition-colors hover:text-[var(--color-primary)]"
              style={{ color: textMuted }}
            >
              Case Studies
            </a>
            <a
              href="#delivery"
              className="transition-colors hover:text-[var(--color-primary)]"
              style={{ color: textMuted }}
            >
              Global Delivery (24/7)
            </a>
            <a
              href="#about-section"
              className="transition-colors hover:text-[var(--color-primary)]"
              style={{ color: textMuted }}
            >
              About Nyabix
            </a>
          </div>

          {/* Dual-Hub Contact & Action Button */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={`tel:${companyInfo.phones.pkCall}`}
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold hover:underline shrink-0"
              style={{ color: textMuted }}
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>{companyInfo.phones.pkDisplay}</span>
            </a>

            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 text-white text-xs font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-1.5 cursor-pointer shrink-0"
              style={{
                backgroundColor: 'var(--color-primary, #0070F2)',
                boxShadow: '0 4px 15px -3px var(--color-primary-glow, rgba(0, 112, 242, 0.4))',
              }}
            >
              <span>Scope Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Certifications & Authority Marquee (DigiTrends + SAP) ── */}
      <div className="py-2.5 overflow-hidden border-b relative z-10" style={{ borderColor: border, backgroundColor: surfaceSubtle }}>
        <div className="flex gap-8 w-max" style={{ animation: 'apexMarquee 35s linear infinite' }}>
          {[...certBadges, ...certBadges].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase shrink-0" style={{ color: textMuted }}>
              <Shield className="w-3.5 h-3.5" style={{ color: 'var(--color-primary, #0070F2)' }} />
              <span>{badge}</span>
              <span className="text-slate-600 ml-4">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Master Hero Stage (Adobe Inspiration + Swiss Precision) ── */}
      <section className="relative z-10 pt-16 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Executive Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-8"
            style={{
              borderColor: 'var(--color-primary, #0070F2)',
              backgroundColor: 'var(--color-primary-glow, rgba(0, 112, 242, 0.1))',
              color: 'var(--color-primary, #0070F2)',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Digital Benchmark • SAP & Autonomous AI</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-8 font-display max-w-5xl mx-auto">
            Where Enterprise SAP Meets{' '}
            <span className="apex-gradient-text">Autonomous AI Velocity</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal" style={{ color: textMuted }}>
            Nyabix delivers mission-critical SAP S/4HANA migrations, proprietary AP Console document intelligence, and omnichannel digital commerce for industry leaders like <strong>PARCO</strong>, <strong>IMC Toyota</strong>, and <strong>Pakistan State Oil</strong>.
          </p>

          {/* Dual CTAs (DigiTrends bold action + Adobe elegance) */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2 cursor-pointer"
              style={{
                backgroundColor: 'var(--color-primary, #0070F2)',
                boxShadow: '0 12px 30px -5px var(--color-primary-glow, rgba(0, 112, 242, 0.5))',
              }}
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#interactive-stage"
              className={cn(
                'px-8 py-4 font-semibold text-sm sm:text-base rounded-full border transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer',
                isDark ? 'border-slate-700 text-slate-200 hover:bg-slate-800' : 'border-slate-300 text-slate-800 hover:bg-slate-100'
              )}
            >
              <Compass className="w-4 h-4" style={{ color: 'var(--color-primary, #0070F2)' }} />
              <span>Explore Interactive Stage</span>
            </a>
          </div>

          {/* 4 Executive Metric Pillars (DigiTrends + Folio3 Numbers) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            {executiveStats.map((st, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: surface,
                  borderColor: border,
                }}
              >
                <div
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1"
                  style={{ color: 'var(--color-primary, #0070F2)' }}
                >
                  <ApexCounter target={st.val} />
                </div>
                <div className="text-xs font-bold mb-1" style={{ color: text }}>
                  {st.label}
                </div>
                <div className="text-[11px]" style={{ color: textMuted }}>
                  {st.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Proof Logo Cloud ── */}
      <section id="clients" className="relative z-10">
        <ClientLogoCloud isDark={isDark} />
      </section>

      {/* ── Interactive Adobe-Style Solution Stage ── */}
      <section id="interactive-stage" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-xs font-bold tracking-widest uppercase mb-3 inline-block"
              style={{ color: 'var(--color-primary, #0070F2)' }}
            >
              Interactive Solutions Stage
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-display">
              Four Specialized Engineering Disciplines
            </h2>
            <p className="text-base" style={{ color: textMuted }}>
              Select a strategic focus area below to preview its architecture, live client outcomes, and technology stack.
            </p>
          </div>

          {/* Adobe-Style Segmented Navigation Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 rounded-2xl border mb-8" style={{ backgroundColor: surface, borderColor: border }}>
            {solutionPillars.map((p) => {
              const isSelected = activePillar === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p.id)}
                  className={cn(
                    'p-4 rounded-xl text-left transition-all duration-300 cursor-pointer relative overflow-hidden',
                    isSelected ? 'shadow-lg' : 'hover:bg-white/5'
                  )}
                  style={{
                    backgroundColor: isSelected ? 'var(--color-primary, #0070F2)' : 'transparent',
                    color: isSelected ? '#ffffff' : text,
                  }}
                >
                  <span
                    className={cn(
                      'text-[10px] font-bold uppercase tracking-wider block mb-1',
                      isSelected
                        ? 'text-white/90'
                        : isDark
                          ? 'text-slate-400'
                          : 'text-slate-600'
                    )}
                  >
                    {p.tag}
                  </span>
                  <span
                    className={cn(
                      'text-xs sm:text-sm font-bold block leading-tight',
                      isSelected
                        ? 'text-white'
                        : isDark
                          ? 'text-slate-100'
                          : 'text-slate-950'
                    )}
                  >
                    {p.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Stage Canvas (Studio Preview) */}
          <div
            className="rounded-3xl border p-6 sm:p-10 transition-all duration-500 shadow-2xl relative overflow-hidden"
            style={{ backgroundColor: surface, borderColor: border }}
          >
            {/* Ambient Corner Accent */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-15 pointer-events-none"
              style={{ backgroundColor: 'var(--color-primary, #0070F2)' }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Deep Specs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: 'var(--color-primary-glow, rgba(0, 112, 242, 0.15))',
                      color: 'var(--color-primary, #0070F2)',
                    }}
                  >
                    Verified Engagement: {currentPillar.client}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  {currentPillar.headline}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed" style={{ color: textMuted }}>
                  {currentPillar.desc}
                </p>

                {/* Key Capabilities List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentPillar.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-medium">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: 'var(--color-primary, #0070F2)' }}
                      />
                      <span style={{ color: text }}>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t" style={{ borderColor: border }}>
                  <span className="text-[11px] font-bold uppercase tracking-wider block mb-2" style={{ color: textMuted }}>
                    Deployment Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentPillar.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium border"
                        style={{
                          backgroundColor: surfaceSubtle,
                          borderColor: border,
                          color: text,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Outcome Dashboard (SAP Telemetry + Adbio Clean Aesthetic) */}
              <div className="lg:col-span-5">
                <div
                  className="p-6 rounded-2xl border space-y-6 shadow-inner relative"
                  style={{ backgroundColor: surfaceSubtle, borderColor: border }}
                >
                  <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: border }}>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4" style={{ color: 'var(--color-primary, #0070F2)' }} />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: text }}>
                        Production Impact Telemetry
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                      VERIFIED
                    </span>
                  </div>

                  <div className="space-y-4">
                    {currentPillar.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          'flex items-center justify-between p-3 rounded-xl border transition-all',
                          isDark ? 'bg-black/20' : 'bg-white shadow-xs'
                        )}
                        style={{ borderColor: border }}
                      >
                        <span className="text-xs font-medium" style={{ color: textMuted }}>
                          {m.label}
                        </span>
                        <span className="text-base font-extrabold font-mono" style={{ color: 'var(--color-primary, #0070F2)' }}>
                          {m.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl border text-xs leading-relaxed" style={{ borderColor: border, backgroundColor: surface }}>
                    <div className="font-bold mb-1 flex items-center gap-1.5" style={{ color: text }}>
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      Client Advantage Note
                    </div>
                    <span style={{ color: textMuted }}>
                      Architected and deployed with zero data downtime across high-concurrency enterprise pipelines.
                    </span>
                  </div>

                  <button
                    onClick={onOpenContact}
                    className="w-full py-3 text-white text-xs font-bold rounded-xl transition-all duration-200 hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer"
                    style={{ backgroundColor: 'var(--color-primary, #0070F2)' }}
                  >
                    <span>Request Technical Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Verified Enterprise Case Studies (PARCO, IMC, PSO) ── */}
      <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 border-t relative z-10" style={{ borderColor: border, backgroundColor: surfaceSubtle }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span
                className="text-xs font-bold tracking-widest uppercase mb-3 inline-block"
                style={{ color: 'var(--color-primary, #0070F2)' }}
              >
                Executive Portfolio
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">
                Field-Tested Enterprise Engagements
              </h2>
            </div>
            <p className="text-sm max-w-md" style={{ color: textMuted }}>
              Detailed case studies from Pakistan's most demanding refinery, supply chain, and automotive operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {template3CaseStudies.map((cs, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-lg"
                style={{ backgroundColor: surface, borderColor: border }}
              >
                <div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 inline-block"
                    style={{
                      backgroundColor: 'var(--color-primary-glow, rgba(0, 112, 242, 0.15))',
                      color: 'var(--color-primary, #0070F2)',
                    }}
                  >
                    {cs.sector}
                  </span>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {cs.client}
                  </h3>

                  <div className="text-xs mb-4 leading-relaxed" style={{ color: textMuted }}>
                    <strong className={cn("block mb-1 font-bold", isDark ? "text-slate-200" : "text-slate-900")}>Challenge:</strong>
                    {cs.challenge}
                  </div>

                  <div className="text-xs mb-6 leading-relaxed" style={{ color: textMuted }}>
                    <strong className={cn("block mb-1 font-bold", isDark ? "text-slate-200" : "text-slate-900")}>Impact:</strong>
                    {cs.impact}
                  </div>
                </div>

                <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: border }}>
                  <span className="text-[11px] font-mono" style={{ color: textMuted }}>
                    {cs.tech.split(',')[0]}
                  </span>
                  <button
                    onClick={onOpenContact}
                    className="text-xs font-bold flex items-center gap-1 cursor-pointer transition-all hover:gap-2"
                    style={{ color: 'var(--color-primary, #0070F2)' }}
                  >
                    <span>Read Brief</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Delivery Engine: Dallas + Karachi (Folio3 Pod Model) ── */}
      <section id="delivery" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border p-8 sm:p-14 relative overflow-hidden shadow-2xl"
            style={{
              backgroundColor: surface,
              borderColor: border,
            }}
          >
            <div className="max-w-3xl mb-12">
              <span
                className="text-xs font-bold tracking-widest uppercase mb-3 inline-block"
                style={{ color: 'var(--color-primary, #0070F2)' }}
              >
                Global Follow-The-Sun Delivery
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-display">
                Dual-Hub Governance. 24/7/365 Continuous Velocity.
              </h2>
              <p className="text-sm sm:text-base" style={{ color: textMuted }}>
                Strategic leadership and architecture directed from Dallas, Texas, with senior full-stack and SAP engineering squads operating around the clock from our Karachi Innovation Center.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Dallas Hub Card */}
              <div className="p-6 rounded-2xl border" style={{ borderColor: border, backgroundColor: surfaceSubtle }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-bold text-base">Dallas Innovation & Strategic HQ</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">
                    CENTRAL (CST)
                  </span>
                </div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: textMuted }}>
                  Client account executives, compliance officers, and enterprise architecture leads oversee governance, SOC2 reviews, and roadmap planning.
                </p>
                <div className="text-xs font-mono font-semibold" style={{ color: 'var(--color-primary, #0070F2)' }}>
                  {companyInfo.phones.usDisplay}
                </div>
              </div>

              {/* Karachi Delivery Center */}
              <div className="p-6 rounded-2xl border" style={{ borderColor: border, backgroundColor: surfaceSubtle }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇵🇰</span>
                    <span className="font-bold text-base">Karachi Global Engineering Center</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                    24/7 ENG SQUADS
                  </span>
                </div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: textMuted }}>
                  Certified SAP S/4HANA consultants, ABAP specialists, AI engineers, and DevOps pods delivering high-throughput execution with 40-60% cost efficiency.
                </p>
                <div className="text-xs font-mono font-semibold" style={{ color: 'var(--color-primary, #0070F2)' }}>
                  {companyInfo.phones.pkDisplay}
                </div>
              </div>
            </div>

            {/* Official Contact Channels */}
            <div className="p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: border, backgroundColor: bg }}>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: 'var(--color-primary, #0070F2)' }} />
                <div>
                  <span className="text-xs block font-bold">Direct Scoping Channel:</span>
                  <a href={`mailto:${companyInfo.email}`} className="text-sm font-semibold hover:underline" style={{ color: 'var(--color-primary, #0070F2)' }}>
                    {companyInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={onOpenContact}
                className="px-6 py-2.5 text-white text-xs font-bold rounded-full transition-all duration-200 hover:scale-105 cursor-pointer shadow-md"
                style={{ backgroundColor: 'var(--color-primary, #0070F2)' }}
              >
                Connect With Managing Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Nyabix Standard Section ── */}
      <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8 border-t relative z-10" style={{ borderColor: border, backgroundColor: surfaceSubtle }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span
              className="text-xs font-bold tracking-widest uppercase mb-2 inline-block"
              style={{ color: 'var(--color-primary, #0070F2)' }}
            >
              Enterprise Authority
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
              Built on Decades of Enterprise Rigor
            </h2>
          </div>
          <AboutSection isDark={isDark} />
        </div>
      </section>

      {/* ── Grand Final Call-To-Action (SAP / Adobe Grand Style) ── */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-colors duration-500"
        style={{
          background: isDark
            ? 'linear-gradient(180deg, #06090e 0%, #0c1421 100%)'
            : 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border inline-block"
            style={{
              borderColor: 'var(--color-primary, #0070F2)',
              backgroundColor: 'var(--color-primary-glow, rgba(0, 112, 242, 0.1))',
              color: 'var(--color-primary, #0070F2)',
            }}
          >
            Ready for Immediate Scoping
          </span>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight font-display">
            Start Your Enterprise Transformation with{' '}
            <span className="apex-gradient-text">Nyabix</span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: textMuted }}>
            Whether migrating legacy ECC 6.0 to SAP S/4HANA, deploying the AP Console for 25,000+ manifests, or engineering nationwide commerce — we deliver.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenContact}
              className="px-10 py-4 text-white font-black text-base rounded-full transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2 cursor-pointer"
              style={{
                backgroundColor: 'var(--color-primary, #0070F2)',
                boxShadow: '0 15px 35px -5px var(--color-primary-glow, rgba(0, 112, 242, 0.6))',
              }}
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`mailto:${companyInfo.email}`}
              className={cn(
                'px-8 py-4 font-bold text-base rounded-full border transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer',
                isDark ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-slate-300 text-slate-900 hover:bg-slate-100'
              )}
            >
              <Mail className="w-4 h-4" />
              <span>Email Brief Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Executive Footer ── */}
      <footer className="py-8 px-4 sm:px-6 border-t text-xs transition-colors duration-300" style={{ borderColor: border, backgroundColor: surface }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4" style={{ color: textMuted }}>
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wider uppercase" style={{ color: text }}>
              {companyInfo.name}
            </span>
            <span>•</span>
            <span>{companyInfo.tagline}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>{companyInfo.locations}</span>
            <a href={`mailto:${companyInfo.email}`} className="hover:underline font-semibold" style={{ color: 'var(--color-primary, #0070F2)' }}>
              {companyInfo.email}
            </a>
          </div>
        </div>
      </footer>

      {/* ── Floating Dark/Light Toggle (Positioned on Left to Avoid Overlapping ThemePicker!) ── */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border"
          style={{
            backgroundColor: isDark ? '#111827' : '#ffffff',
            color: isDark ? '#ffffff' : '#0f172a',
            borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)',
          }}
          aria-label="Toggle dark/light mode"
        >
          {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </div>
  );
}

