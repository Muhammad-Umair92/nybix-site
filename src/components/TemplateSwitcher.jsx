import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { cn } from '../lib/cn';
import { templateSwitcherTabs } from '../data/navigation';
import { companyInfo } from '../data/company';

/**
 * Clean, compact, single-row Top Controller Bar
 * Combines template switching + quick contact without cluttering the screen
 */
export default function TemplateSwitcher({
  activeTemplate,
  onTemplateChange,
  onOpenCompare,
  onOpenContact,
}) {
  return (
    <div
      className="sticky top-0 z-50 text-white border-b border-white/10 shadow-md px-2 sm:px-4 lg:px-6 py-2 transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-dark, #0B192C)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 text-xs">
        
        {/* Left: Brand Identity + Fast Location Badges */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="font-bold tracking-wider uppercase text-[11px] text-slate-200">NYBIX</span>
          </div>
          <span className="hidden xl:inline text-slate-500">|</span>
          <span className="hidden xl:inline text-[11px] text-slate-400">
            {companyInfo.locations}
          </span>
        </div>

        {/* Center: Sleek 7-Template Segmented Control (Zero Scrollbar, Fully Responsive) */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-700/80 shadow-inner overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {templateSwitcherTabs.map((tab) => {
            const isActive = activeTemplate === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTemplateChange(tab.id)}
                className={cn(
                  'flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg font-medium text-[11px] transition-all cursor-pointer whitespace-nowrap shrink-0',
                  isActive
                    ? 'text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                )}
                style={
                  isActive
                    ? { backgroundColor: 'var(--color-primary, #0070F2)' }
                    : {}
                }
              >
                <span
                  className={cn(
                    'w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0',
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  )}
                >
                  {tab.id}
                </span>
                {/* On mobile: show text only for active tab. On md+: show short label. On 2xl: show full label */}
                <span className={cn(
                  isActive ? 'inline' : 'hidden md:inline',
                  'transition-all'
                )}>
                  <span className="hidden 2xl:inline">{tab.label}</span>
                  <span className="2xl:hidden">{tab.short}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Quick Compare + Direct Phone */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenCompare}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-white transition font-medium text-[11px] cursor-pointer hover:opacity-90 shrink-0"
            style={{ backgroundColor: 'var(--color-accent, #003882)' }}
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span className="hidden sm:inline">Compare</span>
            <span className="sm:hidden">8</span>
          </button>
          
          <a
            href={`tel:${companyInfo.phones.pkCall}`}
            className="hidden 2xl:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition text-[11px] shrink-0"
          >
            <span className="text-emerald-400 font-bold">PK:</span> {companyInfo.phones.pkDisplay}
          </a>
        </div>

      </div>
    </div>
  );
}
