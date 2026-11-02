import React, { useState } from 'react';
import {
  Sparkles,
  FileCheck2,
  Navigation,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Zap,
} from 'lucide-react';
import { companyInfo } from '../data/company';
import Button from './ui/Button';
import SectionHeader from './ui/SectionHeader';

/**
 * Proprietary Products Showcase (AP Console & Trip Planner)
 */
export default function ProductsSection({ onOpenContact, dark = false }) {
  const [activeProduct, setActiveProduct] = useState(0);
  const products = companyInfo.products;
  const current = products[activeProduct];

  return (
    <section
      id="products"
      className={`py-20 border-t transition-colors duration-300 ${
        dark
          ? 'bg-slate-950 text-white border-slate-800'
          : 'bg-white text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          badge="Proprietary AI Engineering"
          badgeClassName="text-[var(--color-primary,#0070F2)]"
          heading="Nyabix In-House Enterprise AI Products"
          headingClassName={dark ? 'text-white' : 'text-slate-900'}
          description="Purpose-built autonomous software engines designed to solve mission-critical corporate bottlenecks."
          className="mb-12"
        />

        {/* Product Selector Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {products.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveProduct(idx)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-xs transition-all cursor-pointer ${
                activeProduct === idx
                  ? 'text-white shadow-md scale-102'
                  : dark
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
              style={
                activeProduct === idx
                  ? { backgroundColor: 'var(--color-primary, #0070F2)' }
                  : {}
              }
            >
              {p.id === 'ap-console' ? (
                <FileCheck2 className="w-4 h-4" />
              ) : (
                <Navigation className="w-4 h-4" />
              )}
              <span>{p.name}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 font-normal">
                {p.category}
              </span>
            </button>
          ))}
        </div>

        {/* Active Product Detailed Card */}
        <div
          className={`rounded-3xl border p-8 sm:p-12 shadow-xl transition-all ${
            dark
              ? 'bg-slate-900/90 border-slate-800'
              : 'bg-slate-50/80 border-slate-200'
          }`}
        >
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: 'var(--color-primary-light, #EBF4FE)',
                  color: 'var(--color-primary, #0070F2)',
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{current.badge}</span>
              </div>

              <h3 className="text-3xl font-bold font-display leading-tight">
                {current.name}: <span className="text-[var(--color-primary,#0070F2)]">{current.tagline}</span>
              </h3>

              <p className={`text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                {current.desc}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Engine Architecture & Deliverables
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {current.capabilities.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: 'var(--color-primary, #0070F2)' }}
                      />
                      <span className={dark ? 'text-slate-200' : 'text-slate-700'}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Button
                  variant="primary-sap"
                  size="md"
                  onClick={onOpenContact}
                  className="gap-2"
                >
                  <span>Request {current.name} Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="lg:col-span-5">
              <div
                className={`p-8 rounded-2xl border shadow-md space-y-5 ${
                  dark
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Documented Enterprise ROI
                </div>
                <div
                  className="text-4xl sm:text-5xl font-black font-display"
                  style={{ color: 'var(--color-primary, #0070F2)' }}
                >
                  {current.impact}
                </div>
                <p className={`text-xs leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  De-risk your corporate roadmap by deploying battle-tested, pre-built proprietary engines configured directly into your SAP, SF Ariba, or Oracle landscape.
                </p>

                <div className="pt-4 border-t border-slate-200/40 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Deployment SLA:</span>
                    <span className="font-semibold">4-5 Day Validation Sprint</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Data Sovereignty:</span>
                    <span className="font-semibold">Zero-Data Leakage / On-Premise Ready</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
