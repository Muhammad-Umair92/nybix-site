import React from 'react';
import { cn } from '../../lib/cn';

const variants = {
  blue: 'bg-blue-50 text-[#0070F2] border-blue-200',
  'blue-dark': 'bg-blue-100/80 text-[#003882]',
  'blue-pill': 'bg-blue-50 border-blue-200 text-blue-700',
  navy: 'bg-blue-50 border-blue-200 text-blue-800',
  slate: 'bg-slate-100 text-slate-600',
  'slate-mono': 'bg-slate-100 text-slate-600 font-mono',
  emerald: 'bg-emerald-100 text-emerald-600',
};

/**
 * Small label/tag component with color variants.
 */
export default function Badge({
  children,
  variant = 'blue',
  className,
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
