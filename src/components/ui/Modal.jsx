import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/cn';

/**
 * Generic modal backdrop + card wrapper with close button.
 * Extracted from App.jsx pattern.
 */
export default function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = 'max-w-lg',
  className,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className={cn(
          'bg-white rounded-2xl w-full p-6 sm:p-8 text-slate-900 shadow-2xl relative',
          maxWidth,
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
