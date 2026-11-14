import React, { useState, useEffect, useRef } from 'react';
import {
  Sun, Moon, ArrowRight, Phone, Mail, MapPin, Zap, Globe, Smartphone,
  Code2, Brain, ShoppingCart, Award, ChevronRight, Play, Star, CheckCircle2,
  Layers, TrendingUp, Users, Shield
} from 'lucide-react';
import { companyInfo } from '../data/company';
import { template3CaseStudies } from '../data/caseStudies';
import Button from '../components/ui/Button';
import ClientLogoCloud from '../components/ClientLogoCloud';
import AboutSection from '../components/AboutSection';
import { cn } from '../lib/cn';

/* ─────────── Static data ─────────── */
const services = [
  {
    icon: Brain,
    title: 'Enterprise AI & Automation',
    desc: 'Embed agentic AI into your ERP and enterprise workflows. From document intelligence to predictive analytics — we automate what slows you down.',
    tag: 'AI-First',
    color: '#ff0000',
  },
  {
    icon: Layers,
    title: 'SAP S/4HANA & SF Ariba',
    desc: 'End-to-end SAP transformation: S/4HANA migration, SF Ariba procurement, BTP extensions, and 24/7 managed services for PARCO and beyond.',
    tag: 'Core Practice',
    color: '#cc0000',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native iOS, Android, and cross-platform apps for enterprise field ops, e-commerce, and consumer products — delivered fast.',
    tag: 'Mobile',
    color: '#ff0000',
  },
  {
    icon: Globe,
    title: 'Enterprise Web Platforms',
    desc: 'High-availability portals, B2B platforms, and digital storefronts engineered for mission-critical uptime and deep ERP integration.',
    tag: 'Web Engineering',
    color: '#cc0000',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    desc: 'Headless commerce architectures, omnichannel storefronts, and real-time inventory sync that convert at scale — like IMC Toyota.',
    tag: 'Commerce',
    color: '#ff0000',
  },
  {
    icon: Code2,
    title: 'AP Console & Trip Planner',
    desc: 'Proprietary platforms purpose-built for logistics: 25,000+ manifests/month processed via AP Console OCR and intelligent trip routing.',
    tag: 'SaaS Products',
    color: '#cc0000',
  },
];

const heroSlides = [
  {
    tag: 'AI-First Enterprise',
    headline: 'Autonomous AI for\nEnterprise Operations',
    sub: 'From SAP S/4HANA to intelligent document processing — we automate the enterprise core.',
    cta: 'Request a Quote',
    bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)',
  },
  {
    tag: 'SAP & SF Ariba',
    headline: 'SAP Certified\nTransformation Partner',
    sub: 'PARCO, IMC Toyota, PSO — enterprise SAP S/4HANA and Ariba implementations that deliver.',
    cta: 'See Our Work',
    bg: 'linear-gradient(135deg, #000a1a 0%, #001a0a 50%, #000a1a 100%)',
  },
  {
    tag: 'Digital Products',
    headline: 'Products Built\nFor Scale',
    sub: 'AP Console processes 25,000+ manifests/month. Trip Planner routes fleets in real time.',
    cta: 'Explore Products',
    bg: 'linear-gradient(135deg, #0a000a 0%, #1a0010 50%, #0a000a 100%)',
  },
];

const stats = [
  { value: '10+', label: 'Years Enterprise Experience', icon: TrendingUp },
  { value: '25K+', label: 'Monthly Manifests via AP Console', icon: Zap },
  { value: '99.95%', label: 'Platform Uptime SLA', icon: Shield },
  { value: '3', label: 'Fortune-Sector Client Wins', icon: Award },
];

const awards = [
  'Clutch Top B2B',
  'SAP Certified',
  'Forbes Tech',
  'ISO 9001',
  'Inc 5000',
  'Google Partner',
];

/* ─────────── Animated counter ─────────── */
function AnimatedCounter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
          const suffix = target.replace(/[\d,]/g, '');
          const steps = 60;
          const increment = numericTarget / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
              setCount(numericTarget + suffix);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current) + suffix);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count || target}</span>;
}

/* ─────────── Marquee ─────────── */
function Marquee({ items, speed = 30, isDark }) {
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex gap-8 w-max"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={cn(
              'text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border shrink-0',
              isDark
                ? 'border-white/10 text-white/50 bg-white/5'
                : 'border-black/10 text-black/40 bg-black/5'
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────── Hero Slider ─────────── */
function HeroSlider({ onOpenContact, isDark }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <div
      className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden"
      style={{ background: isDark ? slide.bg : 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)' }}
    >
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff0000]" />

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(${isDark ? 'white' : 'black'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'white' : 'black'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Slide tag pills */}
      <div className="absolute top-6 left-0 right-0 flex justify-center gap-2 z-10">
        {heroSlides.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              'px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer',
              i === active
                ? 'bg-[#ff0000] text-white'
                : isDark
                  ? 'bg-white/10 text-white/60 hover:bg-white/20'
                  : 'bg-black/10 text-black/50 hover:bg-black/20'
            )}
          >
            {s.tag}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <span className={cn('text-xs font-bold tracking-widest uppercase mb-4 inline-block', isDark ? 'text-[#ff0000]' : 'text-[#cc0000]')}>
            {slide.tag}
          </span>
          <h1
            className={cn(
              'font-black leading-none mb-6 transition-all duration-500',
              isDark ? 'text-white' : 'text-black'
            )}
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontFamily: '"Rubik", sans-serif' }}
          >
            {slide.headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {i === 0 ? line : <span className="text-[#ff0000]">{line}</span>}
              </span>
            ))}
          </h1>
          <p className={cn('text-lg leading-relaxed mb-10 max-w-xl', isDark ? 'text-white/70' : 'text-black/60')}>
            {slide.sub}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenContact}
              className="flex items-center gap-2 px-8 py-3.5 bg-[#ff0000] text-white font-bold rounded-full hover:bg-[#cc0000] transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30"
            >
              {slide.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className={cn(
                'flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold border transition-all duration-300 hover:scale-105',
                isDark
                  ? 'border-white/30 text-white hover:border-white hover:bg-white/10'
                  : 'border-black/30 text-black hover:border-black hover:bg-black/5'
              )}
            >
              <Play className="w-4 h-4" />
              See Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              'rounded-full transition-all duration-300 cursor-pointer',
              i === active ? 'w-6 h-2 bg-[#ff0000]' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            )}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────── Main Template ─────────── */
export default function Template8DigiTrends({ onOpenContact }) {
  const [isDark, setIsDark] = useState(true);

  const bg = isDark ? '#000000' : '#ffffff';
  const text = isDark ? '#ffffff' : '#000000';
  const textMuted = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)';
  const cardBg = isDark ? '#0d0d0d' : '#f5f5f5';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-500 relative"
      style={{ backgroundColor: bg, color: text, fontFamily: '"Rubik", sans-serif' }}
    >
      {/* ── Global style injection for marquee animation ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&display=swap');
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes fadeSlideUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .dt-service-card:hover { transform: translateY(-4px); border-color: #ff0000 !important; }
        .dt-cta-btn:hover { background: #cc0000 !important; transform: scale(1.04); }
        .dt-award-badge:hover { border-color: #ff0000 !important; color: #ff0000 !important; }
      `}</style>

      {/* ── Sticky Navigation ── */}
      <nav
        className="sticky top-0 z-50 border-b transition-colors duration-300"
        style={{ backgroundColor: isDark ? '#000000' : '#ffffff', borderColor: border }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={companyInfo.logoClean}
              alt={companyInfo.name}
              className="h-8 w-auto object-contain"
              style={{ filter: isDark ? 'brightness(0) invert(1)' : 'none' }}
            />
          </div>

          {/* Nav links — desktop */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {['Services', 'AI Practice', 'Case Studies', 'Products', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="transition-colors duration-200 hover:text-[#ff0000]"
                style={{ color: textMuted }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phones.pkCall}`}
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold"
              style={{ color: textMuted }}
            >
              <Phone className="w-3.5 h-3.5" />
              {companyInfo.phones.pkDisplay}
            </a>
            <button
              onClick={onOpenContact}
              className="px-5 py-2 bg-[#ff0000] text-white text-sm font-bold rounded-full hover:bg-[#cc0000] transition-all duration-300 cursor-pointer"
            >
              Estimate Project
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero Slider ── */}
      <HeroSlider onOpenContact={onOpenContact} isDark={isDark} />

      {/* ── Award Marquee ── */}
      <div className="py-4 overflow-hidden border-y" style={{ borderColor: border, backgroundColor: cardBg }}>
        <Marquee items={awards} speed={20} isDark={isDark} />
      </div>

      {/* ── Stats Row ── */}
      <div className="py-16 px-6" id="about">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="text-center p-6 rounded-2xl border transition-all duration-300 hover:border-[#ff0000] group"
                style={{ borderColor: border, backgroundColor: cardBg }}
              >
                <Icon className="w-6 h-6 mx-auto mb-3 text-[#ff0000] group-hover:scale-110 transition-transform" />
                <div
                  className="font-black text-3xl sm:text-4xl mb-1"
                  style={{ color: text, fontFamily: '"Rubik", sans-serif' }}
                >
                  <AnimatedCounter target={s.value} />
                </div>
                <div className="text-xs font-medium leading-tight" style={{ color: textMuted }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Services Section ── */}
      <div
        className="py-20 px-6"
        id="services"
        style={{ backgroundColor: isDark ? '#0d0d0d' : '#f5f5f5' }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#ff0000] mb-3 inline-block">
              What We Do
            </span>
            <h2
              className="font-black leading-none mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: '"Rubik", sans-serif', color: text }}
            >
              Services Built for{' '}
              <span className="text-[#ff0000]">Enterprise Scale</span>
            </h2>
            <p className="text-base max-w-xl" style={{ color: textMuted }}>
              From SAP S/4HANA transformations to autonomous AI systems — we build technology that moves the enterprise forward.
            </p>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="dt-service-card p-7 rounded-2xl border cursor-pointer transition-all duration-300"
                  style={{ backgroundColor: isDark ? '#000' : '#fff', borderColor: border }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(255,0,0,0.1)' }}
                    >
                      <Icon className="w-6 h-6 text-[#ff0000]" />
                    </div>
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(255,0,0,0.1)', color: '#ff0000' }}
                    >
                      {svc.tag}
                    </span>
                  </div>
                  <h4
                    className="font-bold text-lg mb-3"
                    style={{ color: text, fontFamily: '"Rubik", sans-serif' }}
                  >
                    {svc.title}
                  </h4>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: textMuted }}>
                    {svc.desc}
                  </p>
                  <span
                    className="flex items-center gap-1 text-xs font-bold text-[#ff0000] hover:gap-2 transition-all duration-200"
                  >
                    Explore More <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Clients ── */}
      <div className="py-16 px-6" id="clients">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#ff0000] mb-2 inline-block">
              Trusted By
            </span>
            <h3
              className="font-black text-2xl sm:text-3xl"
              style={{ color: text, fontFamily: '"Rubik", sans-serif' }}
            >
              Clients That Lead Their Industries
            </h3>
          </div>
          <ClientLogoCloud isDark={isDark} />
        </div>
      </div>

      {/* ── Case Studies ── */}
      <div
        className="py-20 px-6"
        id="case-studies"
        style={{ backgroundColor: isDark ? '#0d0d0d' : '#f5f5f5' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#ff0000] mb-3 inline-block">
              Case Studies
            </span>
            <h2
              className="font-black leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: '"Rubik", sans-serif', color: text }}
            >
              Real Projects.{' '}
              <span className="text-[#ff0000]">Real Results.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {template3CaseStudies.slice(0, 3).map((cs, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl border hover:border-[#ff0000] transition-all duration-300 group"
                style={{ backgroundColor: isDark ? '#000' : '#fff', borderColor: border }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {[cs.sector].slice(0, 2).map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(255,0,0,0.1)', color: '#ff0000' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className="font-black text-lg mb-3 group-hover:text-[#ff0000] transition-colors"
                  style={{ color: text, fontFamily: '"Rubik", sans-serif' }}
                >
                  {cs.client}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: textMuted }}>
                  {cs.impact}
                </p>
                <div
                  className="flex items-center gap-2 font-bold text-sm text-[#ff0000] group-hover:gap-3 transition-all duration-200 cursor-pointer"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About Section ── */}
      <div className="py-20 px-6" id="about-section">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#ff0000] mb-3 inline-block">
              About Nyabix
            </span>
            <h2
              className="font-black"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontFamily: '"Rubik", sans-serif', color: text }}
            >
              The Enterprise Tech Partner{' '}
              <span className="text-[#ff0000]">Built for Results</span>
            </h2>
          </div>
          <AboutSection isDark={isDark} />
        </div>
      </div>

      {/* ── Locations / Hub Banner ── */}
      <div
        className="py-16 px-6"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #1a0000 0%, #000 50%, #0a000a 100%)'
            : 'linear-gradient(135deg, #fff0f0 0%, #fff 50%, #fff5f5 100%)',
        }}
        id="locations"
      >
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-[#ff0000] mb-3 inline-block">
            Global Delivery
          </span>
          <h2
            className="font-black mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontFamily: '"Rubik", sans-serif', color: text }}
          >
            Dual-Hub. 24/7.{' '}
            <span className="text-[#ff0000]">Always On.</span>
          </h2>
          <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: textMuted }}>
            Enterprise support anchored in Dallas, USA and Karachi, Pakistan — synchronized across time zones for uninterrupted delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {[
              { city: 'Dallas, USA', emoji: '🇺🇸', phone: companyInfo.phones.usDisplay, role: 'Strategic HQ' },
              { city: 'Karachi, PK', emoji: '🇵🇰', phone: companyInfo.phones.pkDisplay, role: 'Delivery Hub' },
            ].map((hub, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border flex-1 max-w-xs mx-auto sm:mx-0"
                style={{ borderColor: 'rgba(255,0,0,0.3)', backgroundColor: isDark ? 'rgba(255,0,0,0.05)' : 'rgba(255,0,0,0.03)' }}
              >
                <div className="text-3xl mb-2">{hub.emoji}</div>
                <div className="font-black text-lg mb-1" style={{ color: text, fontFamily: '"Rubik", sans-serif' }}>
                  {hub.city}
                </div>
                <div className="text-xs mb-2 font-semibold text-[#ff0000]">{hub.role}</div>
                <div className="text-sm font-mono" style={{ color: textMuted }}>{hub.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div
        className="py-20 px-6"
        style={{ backgroundColor: '#ff0000' }}
        id="contact"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: '"Rubik", sans-serif' }}
          >
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Let's scope your next SAP, AI, or digital project. Dallas + Karachi teams standing by.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onOpenContact}
              className="px-10 py-4 bg-white text-[#ff0000] font-black text-base rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Request a Quote
            </button>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-base rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              {companyInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer
        className="py-8 px-6 border-t text-center"
        style={{ borderColor: border, backgroundColor: isDark ? '#000' : '#f5f5f5' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: textMuted }}>
          <div className="font-bold tracking-wider uppercase" style={{ color: text }}>
            {companyInfo.name}
          </div>
          <div>{companyInfo.tagline}</div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${companyInfo.email}`} className="hover:text-[#ff0000] transition-colors">
              {companyInfo.email}
            </a>
          </div>
        </div>
      </footer>

      {/* ── Dark / Light Toggle ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border"
          style={{
            backgroundColor: isDark ? '#ff0000' : '#000',
            color: '#fff',
            borderColor: isDark ? '#cc0000' : '#333',
          }}
          aria-label="Toggle dark/light mode"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          {isDark ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  );
}
