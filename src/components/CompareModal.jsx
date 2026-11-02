import React from 'react';
import { cn } from '../lib/cn';
import Modal from './ui/Modal';
import { compareTemplates } from '../data/navigation';

/**
 * Compare modal extracted from App.jsx.
 */
export default function CompareModal({
  isOpen,
  onClose,
  activeTemplate,
  onSelectTemplate,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-6xl"
      className="max-h-[90vh] overflow-y-auto"
    >
      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
        Executive Decision Matrix
      </span>
      <h2 className="text-2xl font-bold font-display text-slate-900 mt-1">
        Side-by-Side Template Comparison (4 Themes)
      </h2>
      <p className="text-xs text-slate-500 mt-1">
        All 4 options utilize the preferred White & Blue palette while targeting
        different brand personalities and buyer audiences.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-xs">
        {compareTemplates.map((tpl) => (
          <div
            key={tpl.id}
            className={cn(
              'p-5 rounded-xl border flex flex-col justify-between',
              activeTemplate === tpl.id
                ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-600/20'
                : 'border-slate-200 bg-slate-50'
            )}
          >
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                {tpl.label}
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-2 font-display">
                {tpl.title}
              </h3>
              <p className="text-slate-600 text-xs mb-3">{tpl.desc}</p>
              <ul className="space-y-1.5 text-slate-700">
                {tpl.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => {
                onSelectTemplate(tpl.id);
                onClose();
              }}
              className={cn(
                'mt-6 w-full py-2 rounded font-semibold text-xs transition',
                tpl.buttonClass
              )}
            >
              {activeTemplate === tpl.id
                ? 'Currently Viewing'
                : `Switch to ${tpl.label}`}
            </button>
          </div>
        ))}
      </div>
    </Modal>
  );
}
