import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, Eye } from 'lucide-react';
import Template1Enterprise from './templates/Template1Enterprise.jsx';
import Template2ModernAI from './templates/Template2ModernAI.jsx';
import Template3Consultancy from './templates/Template3Consultancy.jsx';
import Template4Futuristic from './templates/Template4Futuristic.jsx';
import Template5CyberAI from './templates/Template5CyberAI.jsx';
import Template6NeoBento from './templates/Template6NeoBento.jsx';
import Template7AuroraKinetic from './templates/Template7AuroraKinetic.jsx';
import Template8DigiTrends from './templates/Template8DigiTrends.jsx';
import Template9ApexGlobal from './templates/Template9ApexGlobal.jsx';
import TemplateSwitcher from './components/TemplateSwitcher';
import CompareModal from './components/CompareModal';
import ContactModal from './components/ContactModal';
import ThemePicker from './components/ThemePicker';

export default function App() {
  // Active template state (persisted in localStorage + URL override, default: 9)
  const [activeTemplate, setActiveTemplate] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlTpl = parseInt(params.get('template') || params.get('t'), 10);
      if (urlTpl >= 1 && urlTpl <= 9) return urlTpl;
      const saved = localStorage.getItem('nybix_active_template_v2');
      const parsed = parseInt(saved, 10);
      return parsed >= 1 && parsed <= 9 ? parsed : 9;
    } catch {
      return 9;
    }
  });

  // Test Mode Toggle State: DEFAULT IS FALSE (Client Mode ON by default, test tools hidden)
  const [isTestMode, setIsTestMode] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      // Query param override: ?test=1 or ?demo=1 enables test mode
      if (params.get('test') === '1' || params.get('demo') === '1') {
        return true;
      }
      // Query param override: ?test=0 or ?client=1 forces client mode
      if (params.get('test') === '0' || params.get('demo') === '0' || params.get('client') === '1') {
        return false;
      }
      const saved = localStorage.getItem('nybix_test_mode');
      // Default: FALSE (Client Mode ON, testing tools hidden)
      return saved !== null ? saved === 'true' : false;
    } catch {
      return false;
    }
  });

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const handleTemplateChange = (id) => {
    setActiveTemplate(id);
    try {
      localStorage.setItem('nybix_active_template_v2', String(id));
    } catch (e) {
      // storage unavailable
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleTestMode = (val) => {
    const nextVal = typeof val === 'boolean' ? val : !isTestMode;
    setIsTestMode(nextVal);
    try {
      localStorage.setItem('nybix_test_mode', String(nextVal));
    } catch (e) {
      // storage unavailable
    }
  };

  // Keyboard shortcut: Alt + T or Ctrl + Shift + D to toggle Test Mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.altKey && e.key.toLowerCase() === 't') || (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'd')) {
        e.preventDefault();
        handleToggleTestMode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTestMode]);

  return (
    <div className="relative min-h-screen">
      {/* ── Top Demo Controller Bar (Only Visible in Test Mode) ── */}
      {isTestMode && (
        <TemplateSwitcher
          activeTemplate={activeTemplate}
          onTemplateChange={handleTemplateChange}
          onOpenCompare={() => setIsCompareOpen(true)}
          onToggleTestMode={handleToggleTestMode}
        />
      )}

      {/* ── Active Template Renderer (Defaults to Template 9: Apex Global Sovereign Studio) ── */}
      <main>
        {activeTemplate === 1 && (
          <Template1Enterprise onOpenContact={() => setIsContactOpen(true)} />
        )}
        {activeTemplate === 2 && (
          <Template2ModernAI onOpenContact={() => setIsContactOpen(true)} />
        )}
        {activeTemplate === 3 && (
          <Template3Consultancy onOpenContact={() => setIsContactOpen(true)} />
        )}
        {activeTemplate === 4 && (
          <Template4Futuristic onOpenContact={() => setIsContactOpen(true)} />
        )}
        {activeTemplate === 5 && (
          <Template5CyberAI onOpenContact={() => setIsContactOpen(true)} />
        )}
        {activeTemplate === 6 && (
          <Template6NeoBento onOpenContact={() => setIsContactOpen(true)} />
        )}
        {activeTemplate === 7 && (
          <Template7AuroraKinetic onOpenContact={() => setIsContactOpen(true)} />
        )}
        {activeTemplate === 8 && (
          <Template8DigiTrends onOpenContact={() => setIsContactOpen(true)} />
        )}
        {activeTemplate === 9 && (
          <Template9ApexGlobal onOpenContact={() => setIsContactOpen(true)} />
        )}
      </main>

      {/* ── Floating Theme Customizer (Only Visible in Test Mode) ── */}
      {isTestMode && <ThemePicker />}

      {/* ── Floating Control Pill to Toggle Client Mode OFF / Test Mode ON (When in Client Mode) ── */}
      {!isTestMode && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => handleToggleTestMode(true)}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-full text-xs font-bold bg-slate-950/90 hover:bg-slate-900 text-white border border-emerald-500/50 hover:border-emerald-400 shadow-2xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer group"
            title="Client Mode is ON (All testing options hidden). Click to turn Test Mode ON, or press Alt + T"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-emerald-300 font-bold">Client Mode:</span>
            {/* Active Switch Indicator */}
            <div className="relative inline-flex items-center h-3.5 w-6 rounded-full bg-emerald-500/40 border border-emerald-400 p-0.5 transition-colors">
              <div className="h-2 w-2 rounded-full bg-emerald-300 transition-transform translate-x-2.5" />
            </div>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-emerald-400 text-slate-950 uppercase tracking-wide">
              ON
            </span>
            <span className="text-[10px] text-slate-400 font-medium pl-1 border-l border-white/20 hidden sm:inline">
              Test Mode (Alt+T)
            </span>
          </button>
        </div>
      )}

      {/* ── Modal: Comparison Matrix (Only Accessible in Test Mode) ── */}
      {isTestMode && (
        <CompareModal
          isOpen={isCompareOpen}
          onClose={() => setIsCompareOpen(false)}
          activeTemplate={activeTemplate}
          onSelectTemplate={handleTemplateChange}
        />
      )}

      {/* ── Modal: Contact & Consultation (Always Functional) ── */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
