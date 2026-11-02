import React from 'react';
import { cn } from '../../lib/cn';

/**
 * Reusable section header block (badge + heading + description).
 * Supports both centered and left-aligned layouts.
 */
export default function SectionHeader({
  badge,
  badgeClassName,
  heading,
  headingClassName,
  description,
  descriptionClassName,
  align = 'center',
  className,
}) {
  return (
    <div
      className={cn(
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl',
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            'text-xs font-bold uppercase tracking-wider text-blue-600',
            badgeClassName
          )}
        >
          {badge}
        </span>
      )}
      {heading && (
        <h2
          className={cn(
            'text-3xl sm:text-4xl font-bold text-slate-900 font-display mt-2',
            headingClassName
          )}
        >
          {heading}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            'text-sm text-slate-600 mt-2',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
