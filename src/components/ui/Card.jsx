import React from 'react';
import { cn } from '../../lib/cn';

/**
 * Base card component with hover states.
 */
export default function Card({
  children,
  className,
  hover = true,
  ...props
}) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-slate-200 shadow-sm',
        hover && 'hover:border-blue-300 transition',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
