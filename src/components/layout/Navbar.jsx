import React from 'react';
import { cn } from '../../lib/cn';

/**
 * Reusable navbar component.
 * @param {{ logo, navItems, ctaButton, height, className }} props
 */
export default function Navbar({
  logo,
  navItems = [],
  ctaButton,
  secondaryButton,
  height = 'h-20',
  className,
  navClassName,
}) {
  return (
    <header
      className={cn(
        'sticky top-12 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200',
        className
      )}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between',
          height
        )}
      >
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3">
              {logo}
            </a>
          </div>

          {/* Desktop Nav */}
          {navItems.length > 0 && (
            <nav
              className={cn(
                'hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700',
                navClassName
              )}
            >
              {navItems}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          {secondaryButton}
          {ctaButton}
        </div>
      </div>
    </header>
  );
}
