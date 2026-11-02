import React from 'react';
import {
  Compass,
  Eye,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { companyInfo } from '../data/company';
import Button from './ui/Button';
import SectionHeader from './ui/SectionHeader';

/**
 * Official About Us Component
 * Integrates official company narrative, mission, vision, and core specialties.
 */
export default function AboutSection({ onOpenContact, dark = false }) {
  const { about } = companyInfo;

  return (
    <section
      id="about"
      className={`py-20 border-t transition-colors duration-300 ${
        dark
          ? 'bg-slate-950 text-white border-slate-800'
          : 'bg-white text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: 'var(--color-primary-light, #EBF4FE)',
              color: 'var(--color-primary, #0070F2)',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{about.title}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display leading-[1.15] ${dark ? 'text-white' : 'text-slate-950'}`}>
            Turning Ideas into{' '}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--color-primary, #0070F2), #38BDF8)',
              }}
            >
              Innovative Digital Solutions
            </span>
            .
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            {about.lead}
          </p>
        </div>

        {/* Two-Column Grid: Narrative & Mission/Vision Cards */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Narrative & Specialties */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              {about.body.map((para, i) => (
                <p
                  key={i}
                  className={dark ? 'text-slate-300' : 'text-slate-700'}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Core Capabilities Pills */}
            <div className="pt-2">
              <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                Core Engineering Capabilities
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {about.specialties.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-xs font-semibold ${
                      dark
                        ? 'bg-slate-900 border-slate-800 text-slate-200'
                        : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: 'var(--color-primary, #0070F2)' }}
                    />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenContact}
                className="gap-2 text-xs"
              >
                <span>Partner With Nyabix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
              <Button
                as="a"
                href="#services"
                variant={dark ? 'secondary-dark' : 'secondary'}
                size="md"
                className="text-xs"
              >
                Explore All Offerings
              </Button>
            </div>
          </div>

          {/* Right Column: Mission & Vision Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Our Mission */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border transition-all relative overflow-hidden flex-1 flex flex-col justify-between ${
                dark
                  ? 'bg-slate-900/90 border-slate-800'
                  : 'bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 border-blue-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold"
                    style={{
                      backgroundColor: 'var(--color-primary, #0070F2)',
                      color: '#ffffff',
                    }}
                  >
                    <Compass className="w-6 h-6" />
                  </div>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: 'var(--color-primary-light, #EBF4FE)',
                      color: 'var(--color-primary, #0070F2)',
                    }}
                  >
                    Purpose
                  </span>
                </div>

                <div>
                  <h3 className={`text-xl font-bold font-display ${dark ? 'text-white' : 'text-slate-900'}`}>
                    Our Mission
                  </h3>
                  <p className={`mt-2 text-sm sm:text-base font-medium leading-relaxed ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
                    "{about.mission}"
                  </p>
                </div>
              </div>

              <div className={`mt-6 pt-4 border-t text-xs flex items-center gap-2 ${dark ? 'border-slate-800 text-slate-400' : 'border-blue-100 text-slate-500'}`}>
                <Zap className="w-3.5 h-3.5 text-blue-500" />
                <span>Impact-driven delivery for high-growth enterprises</span>
              </div>
            </div>

            {/* Our Vision */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border transition-all relative overflow-hidden flex-1 flex flex-col justify-between ${
                dark
                  ? 'bg-slate-900/90 border-slate-800'
                  : 'bg-gradient-to-br from-emerald-50/60 via-white to-emerald-50/20 border-emerald-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Aspiration
                  </span>
                </div>

                <div>
                  <h3 className={`text-xl font-bold font-display ${dark ? 'text-white' : 'text-slate-900'}`}>
                    Our Vision
                  </h3>
                  <p className={`mt-2 text-sm sm:text-base font-medium leading-relaxed ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
                    "{about.vision}"
                  </p>
                </div>
              </div>

              <div className={`mt-6 pt-4 border-t text-xs flex items-center gap-2 ${dark ? 'border-slate-800 text-slate-400' : 'border-emerald-100 text-slate-500'}`}>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dallas (USA) • Karachi (PK) • Serving global clients</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
