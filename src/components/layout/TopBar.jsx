import React from 'react';
import { cn } from '../../lib/cn';

/**
 * Thin info bar at the top of templates.
 */
export default function TopBar({
  leftContent,
  rightContent,
  className,
}) {
  return (
    <div
      className={cn(
        'bg-[#0B192C] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        {leftContent}
        {rightContent}
      </div>
    </div>
  );
}
