import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/cn';

/**
 * Hamburger menu for mobile with slide-in drawer.
 */
export default function MobileMenu({ items = [], ctaButton, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('lg:hidden', className)}>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-slate-700 hover:text-slate-900 transition"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-6 space-y-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 transition"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="space-y-4">
              {items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-slate-700 hover:text-blue-600 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            {ctaButton && (
              <div className="pt-4 border-t border-slate-200">
                {ctaButton}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
