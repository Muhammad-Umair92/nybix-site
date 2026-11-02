import React from 'react';
import { cn } from '../../lib/cn';

/**
 * Reusable footer component that accepts columns config, logo, and copyright text.
 */
export default function Footer({
  logo,
  description,
  copyright,
  columns = [],
  className,
  containerClassName,
}) {
  return (
    <footer
      className={cn(
        'bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800',
        className
      )}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto px-4 sm:px-8',
          containerClassName
        )}
      >
        {/* Brand column */}
        {(logo || description || copyright) && (
          <div className="col-span-2">
            {logo && <div className="mb-4">{logo}</div>}
            {description && (
              <p className="text-slate-400 max-w-sm leading-relaxed mb-4">
                {description}
              </p>
            )}
            {copyright && (
              <div className="text-slate-500">{copyright}</div>
            )}
          </div>
        )}

        {/* Link columns */}
        {columns.map((col, idx) => (
          <div key={idx}>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="hover:text-white transition text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href || '#'}
                      className="hover:text-white transition"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
