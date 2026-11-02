import React, { useState } from 'react';
import { Check, Send } from 'lucide-react';
import Modal from './ui/Modal';

/**
 * Contact form modal extracted from App.jsx.
 */
export default function ContactModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'SAP Enterprise Solutions',
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
        service: 'SAP Enterprise Solutions',
        message: '',
      });
    }, 2500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
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
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Direct Engagement
          </span>
          <h3 className="text-xl font-bold font-display text-slate-900 mt-1 mb-1">
            Schedule Scoping Session
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Discuss SAP S/4HANA migration, AI agent automation, web apps, or
            e-commerce scale.
          </p>

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
                  Company
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company Name"
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
                <option>SAP Enterprise Solutions (S/4HANA)</option>
                <option>Enterprise AI & Autonomous Agents</option>
                <option>Custom Web Application Development</option>
                <option>Mobile App Development (iOS/Android)</option>
                <option>Omnichannel E-Commerce Platforms</option>
                <option>Full Multi-Disciplinary Transformation</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Project Details / Scope
              </label>
              <textarea
                rows="3"
                placeholder="Tell us about your timeline, current system, and goals..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
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
    </Modal>
  );
}
