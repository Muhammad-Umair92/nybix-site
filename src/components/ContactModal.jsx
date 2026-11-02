import React, { useState } from 'react';
import { Check, Send, Mail, Phone, MapPin } from 'lucide-react';
import Modal from './ui/Modal';
import { companyInfo } from '../data/company';

/**
 * Contact form modal with official company contact details from the brief.
 */
export default function ContactModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'SAP & SF Ariba Integrations',
    message: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'SAP & SF Ariba Integrations',
        message: '',
      });
    }, 2500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      {formSubmitted ? (
        <div className="text-center py-8 space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-display">
            Consultation Scheduled!
          </h3>
          <p className="text-xs text-slate-600">
            Thank you! A Nybix principal architect will reach out within 2
            business hours with scoping details.
          </p>
        </div>
      ) : (
        <div>
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: 'var(--color-primary, #0070F2)' }}
          >
            Direct Engagement
          </span>
          <h3 className="text-xl font-bold font-display text-slate-900 mt-1 mb-1">
            Schedule Strategic Scoping Session
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Discuss SAP/SF Ariba, AI automation, AP Console, web/mobile apps, or dedicated offshore engineering squads.
          </p>

          {/* Direct Contact Info Banner */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5 grid sm:grid-cols-2 gap-2 text-[11px] text-slate-700">
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Mail className="w-3 h-3" />
              </div>
              <span className="truncate">{companyInfo.email}</span>
            </a>
            <a
              href={`tel:${companyInfo.phones.pkCall}`}
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Phone className="w-3 h-3" />
              </div>
              <span>PK: {companyInfo.phones.pkDisplay}</span>
            </a>
            <a
              href={`tel:${companyInfo.phones.usCall}`}
              className="flex items-center gap-2 hover:text-blue-600 transition sm:col-span-2"
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Phone className="w-3 h-3" />
              </div>
              <span>USA: {companyInfo.phones.usDisplay}</span>
            </a>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Faizan Saleem / Executive"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. IMC, PARCO, PSO"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Target Service Area
              </label>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600"
              >
                <option>SAP & SF Ariba Integrations (S/4HANA & Oracle)</option>
                <option>Enterprise AI & AP Console Autonomous Invoicing</option>
                <option>Mobile App Development (iOS, Android, React Native, Flutter)</option>
                <option>Custom Web & High-Volume E-Commerce (Shopify Plus)</option>
                <option>Dedicated Offshore Engineering & Support Squads</option>
                <option>Proprietary Products (AP Console / Trip Planner)</option>
                <option>Full Multi-Disciplinary Digital Transformation</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Project Details / Scope
              </label>
              <textarea
                rows="3"
                placeholder="Tell us about your timeline, current ERP/tech system, and modernization goals..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-lg text-sm font-semibold text-white transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
              style={{ backgroundColor: 'var(--color-primary, #0070F2)' }}
            >
              <span>Send Consultation Request</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </Modal>
  );
}
