import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { cn } from '../lib/cn';
import { templateSwitcherTabs } from '../data/navigation';

/**
 * Top demo controller bar — template switcher extracted from App.jsx.
 */
export default function TemplateSwitcher({
  activeTemplate,
  onTemplateChange,
  onOpenCompare,
}) {
  return (
    <div
      className="sticky top-0 z-50 text-white border-b border-blue-900/60 shadow-lg px-3 sm:px-6 py-2.5 transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-dark, #0B192C)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <img
            src="/logo/nybix-logo-white.png"
            alt="NYBIX Logo"
            className="h-6 w-auto object-contain brightness-110"
          />
        </div>

        {/* Template Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-lg border border-slate-700">
          {templateSwitcherTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTemplateChange(tab.id)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition cursor-pointer',
                activeTemplate === tab.id
                  ? 'text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              )}
              style={
                activeTemplate === tab.id
                  ? { backgroundColor: 'var(--color-primary, #0070F2)' }
                  : {}
              }
            >
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                {tab.id}
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Comparison Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCompare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-white transition font-medium cursor-pointer"
            style={{ backgroundColor: 'var(--color-accent, #003882)' }}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Compare (4 Themes)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
