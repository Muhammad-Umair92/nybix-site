import React, { useState, useEffect } from 'react';
import Template1Enterprise from './templates/Template1Enterprise.jsx';
import Template2ModernAI from './templates/Template2ModernAI.jsx';
import Template3Consultancy from './templates/Template3Consultancy.jsx';
import Template4Futuristic from './templates/Template4Futuristic.jsx';
import {
  Layers,
  Sparkles,
  Check,
  X,
  Send,
  FileText,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Shield,
  HelpCircle,
  Eye,
  SlidersHorizontal,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [activeTemplate, setActiveTemplate] = useState(1);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'SAP Enterprise Solutions',
    message: ''
  });

  const handleTemplateChange = (id) => {
    setActiveTemplate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsContactOpen(false);
      setFormData({ name: '', email: '', company: '', service: 'SAP Enterprise Solutions', message: '' });
    }, 2500);
  };

  return (
    <div className="relative min-h-screen">

      {/* =========================================================================
          TOP MASTER DEMO CONTROLLER (Always Fixed)
          Allows instant switching between all 3 Blue & White Nybix Templates
          ========================================================================= */}
      <div className="sticky top-0 z-50 bg-[#0B192C] text-white border-b border-blue-900/60 shadow-lg px-3 sm:px-6 py-2.5">
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
            <button
              onClick={() => handleTemplateChange(1)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition ${activeTemplate === 1
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
            >
              <span className="w-4 h-4 rounded-full bg-blue-400/20 flex items-center justify-center text-[10px] font-bold">1</span>
              <span>Enterprise SAP</span>
            </button>

            <button
              onClick={() => handleTemplateChange(2)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition ${activeTemplate === 2
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
            >
              <span className="w-4 h-4 rounded-full bg-blue-400/20 flex items-center justify-center text-[10px] font-bold">2</span>
              <span>Modern Tech & AI</span>
            </button>

            <button
              onClick={() => handleTemplateChange(3)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition ${activeTemplate === 3
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
            >
              <span className="w-4 h-4 rounded-full bg-blue-400/20 flex items-center justify-center text-[10px] font-bold">3</span>
              <span>Digital Advisory</span>
            </button>

            <button
              onClick={() => handleTemplateChange(4)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition ${activeTemplate === 4
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
            >
              <span className="w-4 h-4 rounded-full bg-blue-400/20 flex items-center justify-center text-[10px] font-bold">4</span>
              <span>Futuristic Tech</span>
            </button>
          </div>

          {/* Comparison Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCompareOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-700/80 hover:bg-blue-600 text-white transition font-medium"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Compare (4 Themes)</span>
            </button>
          </div>

        </div>
      </div>

      {/* =========================================================================
          ACTIVE TEMPLATE RENDERER
          ========================================================================= */}
      <main>
        {activeTemplate === 1 && <Template1Enterprise onOpenContact={() => setIsContactOpen(true)} />}
        {activeTemplate === 2 && <Template2ModernAI onOpenContact={() => setIsContactOpen(true)} />}
        {activeTemplate === 3 && <Template3Consultancy onOpenContact={() => setIsContactOpen(true)} />}
        {activeTemplate === 4 && <Template4Futuristic onOpenContact={() => setIsContactOpen(true)} />}
      </main>

      {/* =========================================================================
          MODAL: COMPARISON MATRIX (All 4 Templates)
          ========================================================================= */}
      {isCompareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-slate-900 shadow-2xl relative">
            <button
              onClick={() => setIsCompareOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Executive Decision Matrix</span>
            <h2 className="text-2xl font-bold font-display text-slate-900 mt-1">
              Side-by-Side Template Comparison (4 Themes)
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              All 4 options utilize the preferred White & Blue palette while targeting different brand personalities and buyer audiences.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-xs">

              {/* Option 1 */}
              <div className={`p-5 rounded-xl border flex flex-col justify-between ${activeTemplate === 1 ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-600/20' : 'border-slate-200 bg-slate-50'}`}>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Template 1</div>
                  <h3 className="text-base font-bold text-slate-900 mt-1 mb-2 font-display">Enterprise SAP Leader</h3>
                  <p className="text-slate-600 text-xs mb-3">
                    Modeled after SAP global portals and Ernst & Young (EY) enterprise technology pages.
                  </p>
                  <ul className="space-y-1.5 text-slate-700">
                    <li className="flex items-center gap-1.5">✓ Traditional SAP Blue (#0070F2)</li>
                    <li className="flex items-center gap-1.5">✓ Tabbed Core Service Drill-Downs</li>
                    <li className="flex items-center gap-1.5">✓ Vertical Industry Practice Cards</li>
                    <li className="flex items-center gap-1.5">✓ Authority & Compliance Trust Badges</li>
                  </ul>
                </div>
                <button
                  onClick={() => { setActiveTemplate(1); setIsCompareOpen(false); }}
                  className="mt-6 w-full py-2 rounded font-semibold text-xs bg-[#0070F2] text-white hover:bg-blue-700 transition"
                >
                  {activeTemplate === 1 ? 'Currently Viewing' : 'Switch to Template 1'}
                </button>
              </div>

              {/* Option 2 */}
              <div className={`p-5 rounded-xl border flex flex-col justify-between ${activeTemplate === 2 ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-600/20' : 'border-slate-200 bg-slate-50'}`}>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Template 2</div>
                  <h3 className="text-base font-bold text-slate-900 mt-1 mb-2 font-display">Modern Tech & AI Innovator</h3>
                  <p className="text-slate-600 text-xs mb-3">
                    Silicon Valley modern tech aesthetic (like Stripe, Vercel, modern cloud consultancies).
                  </p>
                  <ul className="space-y-1.5 text-slate-700">
                    <li className="flex items-center gap-1.5">✓ Electric Cobalt (#2563EB) & White</li>
                    <li className="flex items-center gap-1.5">✓ Interactive Service Filter Grid</li>
                    <li className="flex items-center gap-1.5">✓ Dynamic 4-Step Velocity Process</li>
                    <li className="flex items-center gap-1.5">✓ Interactive ROI Savings Calculator</li>
                  </ul>
                </div>
                <button
                  onClick={() => { setActiveTemplate(2); setIsCompareOpen(false); }}
                  className="mt-6 w-full py-2 rounded font-semibold text-xs bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  {activeTemplate === 2 ? 'Currently Viewing' : 'Switch to Template 2'}
                </button>
              </div>

              {/* Option 3 */}
              <div className={`p-5 rounded-xl border flex flex-col justify-between ${activeTemplate === 3 ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-600/20' : 'border-slate-200 bg-slate-50'}`}>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Template 3</div>
                  <h3 className="text-base font-bold text-slate-900 mt-1 mb-2 font-display">Global Digital Advisory</h3>
                  <p className="text-slate-600 text-xs mb-3">
                    Executive Big-4 management consultancy style (McKinsey / Deloitte / EY Advisory).
                  </p>
                  <ul className="space-y-1.5 text-slate-700">
                    <li className="flex items-center gap-1.5">✓ Deep Navy (#0B192C) & White</li>
                    <li className="flex items-center gap-1.5">✓ Strategic Pillar Deep-Dives</li>
                    <li className="flex items-center gap-1.5">✓ Detailed Executive Case Studies</li>
                    <li className="flex items-center gap-1.5">✓ Thought Leadership Briefings</li>
                  </ul>
                </div>
                <button
                  onClick={() => { setActiveTemplate(3); setIsCompareOpen(false); }}
                  className="mt-6 w-full py-2 rounded font-semibold text-xs bg-[#003882] text-white hover:bg-slate-800 transition"
                >
                  {activeTemplate === 3 ? 'Currently Viewing' : 'Switch to Template 3'}
                </button>
              </div>

              {/* Option 4 */}
              <div className={`p-5 rounded-xl border flex flex-col justify-between ${activeTemplate === 4 ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-600/20' : 'border-slate-200 bg-slate-50'}`}>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Template 4</div>
                  <h3 className="text-base font-bold text-slate-900 mt-1 mb-2 font-display">Futuristic Tech & AI Systems</h3>
                  <p className="text-slate-600 text-xs mb-3">
                    Next-gen Apple & Linear inspired enterprise tech (clean micro-gradients & telemetry).
                  </p>
                  <ul className="space-y-1.5 text-slate-700">
                    <li className="flex items-center gap-1.5">✓ Ice Blue, Cobalt & Pure White</li>
                    <li className="flex items-center gap-1.5">✓ Dynamic 3-Tier Architecture Blueprint</li>
                    <li className="flex items-center gap-1.5">✓ Live AI Agent Telemetry Console</li>
                    <li className="flex items-center gap-1.5">✓ Modern Value vs Traditional Matrix</li>
                  </ul>
                </div>
                <button
                  onClick={() => { setActiveTemplate(4); setIsCompareOpen(false); }}
                  className="mt-6 w-full py-2 rounded font-semibold text-xs bg-gradient-to-r from-blue-600 to-[#0070F2] text-white hover:from-blue-700 hover:to-blue-600 transition shadow-sm"
                >
                  {activeTemplate === 4 ? 'Currently Viewing' : 'Switch to Template 4'}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 3: CONTACT & CONSULTATION BOOKING
          ========================================================================= */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 text-slate-900 shadow-2xl relative">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display">Consultation Scheduled!</h3>
                <p className="text-xs text-slate-600">
                  Thank you! A Nybix principal architect will reach out within 2 business hours with scoping details.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Direct Engagement</span>
                <h3 className="text-xl font-bold font-display text-slate-900 mt-1 mb-1">
                  Schedule Scoping Session
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Discuss SAP S/4HANA migration, AI agent automation, web apps, or e-commerce scale.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Faizan Saleem / Executive"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Company</label>
                      <input
                        type="text"
                        required
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Target Service Area</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600"
                    >
                      <option>SAP Enterprise Solutions (S/4HANA)</option>
                      <option>Enterprise AI & Autonomous Agents</option>
                      <option>Custom Web Application Development</option>
                      <option>Mobile App Development (iOS/Android)</option>
                      <option>Omnichannel E-Commerce Platforms</option>
                      <option>Full Multi-Disciplinary Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Project Details / Scope</label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about your timeline, current system, and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Send Consultation Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

