import React from 'react';
import { ShieldCheck, Building2, Fuel, Car, Award } from 'lucide-react';
import { companyInfo } from '../data/company';

/**
 * World-Class Enterprise Client Trust Bar
 * Displays verified enterprise engagements (PARCO, IMC, PSO) with clean typography and badges.
 */
export default function ClientLogoCloud({ className = '', dark = false }) {
  return (
    <div
      className={`py-8 border-y transition-colors duration-300 ${
        dark
          ? 'bg-slate-900/60 border-slate-800 text-slate-300'
          : 'bg-slate-50/80 border-slate-200/80 text-slate-700'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Label */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Proven Enterprise Delivery For</span>
          </div>

          {/* Client Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
            
            {/* IMC */}
            <div
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all hover:scale-102 ${
                dark
                  ? 'bg-slate-800/80 border-slate-700 text-white'
                  : 'bg-white border-slate-200 shadow-xs text-slate-900'
              }`}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                style={{
                  backgroundColor: 'var(--color-primary-light, #EBF4FE)',
                  color: 'var(--color-primary, #0070F2)',
                }}
              >
                <Car className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold font-display leading-tight">IMC (Toyota)</div>
                <div className="text-[10px] text-slate-500">Unified Web & Mobile E-Commerce</div>
              </div>
            </div>

            {/* PARCO */}
            <div
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all hover:scale-102 ${
                dark
                  ? 'bg-slate-800/80 border-slate-700 text-white'
                  : 'bg-white border-slate-200 shadow-xs text-slate-900'
              }`}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                style={{
                  backgroundColor: 'var(--color-primary-light, #EBF4FE)',
                  color: 'var(--color-primary, #0070F2)',
                }}
              >
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold font-display leading-tight">PARCO Refinery</div>
                <div className="text-[10px] text-slate-500">SAP SF Ariba & Oracle Integration</div>
              </div>
            </div>

            {/* PSO */}
            <div
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all hover:scale-102 ${
                dark
                  ? 'bg-slate-800/80 border-slate-700 text-white'
                  : 'bg-white border-slate-200 shadow-xs text-slate-900'
              }`}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                style={{
                  backgroundColor: 'var(--color-primary-light, #EBF4FE)',
                  color: 'var(--color-primary, #0070F2)',
                }}
              >
                <Fuel className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold font-display leading-tight">PSO (State Oil)</div>
                <div className="text-[10px] text-slate-500">AP Console AI Manifest Invoicing</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
