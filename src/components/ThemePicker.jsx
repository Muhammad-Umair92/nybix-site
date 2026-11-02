import React, { useState } from 'react';
import { Palette, Check, X, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeTheme, setTheme, themes } = useTheme();

  return (
    <>
      {/* Floating Theme Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20"
          style={{
            backgroundColor: 'var(--color-primary, #0070F2)',
            boxShadow: '0 10px 25px -5px var(--color-primary-glow, rgba(0, 112, 242, 0.4))',
          }}
          aria-label="Customize Color Theme"
        >
          <Palette className="w-4 h-4 animate-spin-slow" />
          <span className="hidden sm:inline">Theme:</span>
          <span className="font-bold">{activeTheme.name.split(' ')[0]}</span>
          <span
            className="w-3 h-3 rounded-full border border-white inline-block ml-0.5"
            style={{ backgroundColor: activeTheme.previewColor }}
          />
        </button>
      </div>

      {/* Floating Theme Drawer / Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end p-4 sm:p-6 pointer-events-none">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs pointer-events-auto transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          <div className="bg-white rounded-2xl w-full max-w-sm p-5 text-slate-900 shadow-2xl relative pointer-events-auto border border-slate-200 z-10 animate-fade-in-up">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-blue-600" />
                <h3 className="font-bold text-sm text-slate-900 font-display">
                  Selectable Color Themes
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-2 mb-4 leading-relaxed">
              Choose an enterprise color palette to preview how the entire site
              adapts seamlessly across brand identities.
            </p>

            {/* Themes list */}
            <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
              {themes.map((theme) => {
                const isActive = activeTheme.id === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setTheme(theme.id);
                    }}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? 'border-blue-600 bg-blue-50/50 shadow-xs ring-2 ring-blue-500/20'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Swatch previews */}
                      <div className="flex -space-x-1 shrink-0">
                        <span
                          className="w-5 h-5 rounded-full border border-white shadow-xs"
                          style={{ backgroundColor: theme.previewColor }}
                        />
                        <span
                          className="w-5 h-5 rounded-full border border-white shadow-xs"
                          style={{ backgroundColor: theme.accentColor }}
                        />
                        <span
                          className="w-5 h-5 rounded-full border border-white shadow-xs"
                          style={{ backgroundColor: theme.darkColor }}
                        />
                      </div>

                      <div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <span>{theme.name}</span>
                          {theme.id === 'sap-blue' && (
                            <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">
                              Default
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                          {theme.subtitle}
                        </div>
                      </div>
                    </div>

                    {isActive && (
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Live dynamic CSS variables
              </span>
              <button
                onClick={() => setTheme('sap-blue')}
                className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
              >
                Reset Default
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
