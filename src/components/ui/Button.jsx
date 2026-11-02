import React from 'react';
import { cn } from '../../lib/cn';

const variants = {
  primary:
    'text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20',
  'primary-sap':
    'text-white bg-[#0070F2] hover:bg-[#0058C6] shadow-md shadow-blue-500/25',
  'primary-navy':
    'text-white bg-[#003882] hover:bg-[#0B192C] shadow-md',
  'primary-dark':
    'text-white bg-slate-950 hover:bg-slate-900 shadow-lg',
  secondary:
    'text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm',
  'secondary-muted':
    'text-slate-700 bg-slate-100 hover:bg-slate-200',
  ghost:
    'text-blue-600 hover:text-blue-800',
  outline:
    'text-[#0070F2] bg-blue-50 hover:bg-blue-100 border border-blue-200',
  'cta-white':
    'text-[#0B192C] bg-white hover:bg-slate-100 shadow-lg',
  'cta-blue':
    'text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30',
  'gradient':
    'text-white bg-gradient-to-r from-blue-600 to-[#0070F2] hover:from-blue-700 hover:to-blue-600 shadow-md shadow-blue-500/20',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
  xl: 'px-8 py-3.5 text-base',
};

const shapes = {
  default: 'rounded',
  rounded: 'rounded-lg',
  pill: 'rounded-full',
};

/**
 * Reusable Button component with variant, size, and shape props.
 * Accepts className override via cn() for Tailwind class merging.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'default',
  className,
  as: Component = 'button',
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center font-semibold transition',
        variants[variant],
        sizes[size],
        shapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
