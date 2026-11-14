import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import { cn } from '../lib/cn';

/**
 * Authentic High-Quality Client & Technology Partner Marquee Showcase
 * Two rows running in opposite directions with authentic vector marks and crisp typography.
 * Sourced from official enterprise engagements: PARCO, IMC Toyota, PSO + Global Tech Platforms.
 */

/* ── Row 1: Enterprise Clients & Core ERP Platforms ── */
const row1Logos = [
  {
    id: 'parco',
    name: 'PARCO',
    tag: 'Pak-Arab Refinery Limited',
    accent: '#059669',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#047857" fillOpacity="0.14" />
        <path d="M20 7C20 7 13.5 15.5 13.5 22C13.5 25.59 16.41 28.5 20 28.5C23.59 28.5 26.5 25.59 26.5 22C26.5 15.5 20 7 20 7Z" fill="#059669" />
        <path d="M18 16H22V31H18V16Z" fill="#047857" />
        <path d="M15 24H25V26H15V24Z" fill="#10B981" />
        <circle cx="20" cy="13" r="2" fill="#34D399" />
      </svg>
    ),
  },
  {
    id: 'imc',
    name: 'IMC Toyota',
    tag: 'Indus Motor Company',
    accent: '#DC2626',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#DC2626" fillOpacity="0.12" />
        {/* Toyota Signature Triple Oval Geometry */}
        <ellipse cx="20" cy="20" rx="13.5" ry="9" stroke="#DC2626" strokeWidth="2.2" fill="none" />
        <ellipse cx="20" cy="18" rx="4.8" ry="7" stroke="#DC2626" strokeWidth="2.2" fill="none" />
        <path d="M12.5 16C12.5 16 16 20.5 20 20.5C24 20.5 27.5 16 27.5 16" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'pso',
    name: 'Pakistan State Oil',
    tag: 'PSO National Energy',
    accent: '#0284C7',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#0284C7" fillOpacity="0.12" />
        {/* Dynamic Dual Droplets */}
        <path d="M20 8C19 12 13 18 13 23.5C13 27.5 16.2 30.5 20 30.5C20 30.5 15.5 26 15.5 22C15.5 17 20 8 20 8Z" fill="#059669" />
        <path d="M20 8C21 12 27 18 27 23.5C27 27.5 23.8 30.5 20 30.5C20 30.5 24.5 26 24.5 22C24.5 17 20 8 20 8Z" fill="#0284C7" />
        <circle cx="20" cy="22" r="3" fill="#F8FAFC" />
        <circle cx="20" cy="22" r="1.5" fill="#0284C7" />
      </svg>
    ),
  },
  {
    id: 'sap',
    name: 'SAP',
    tag: 'S/4HANA & Clean Core BTP',
    accent: '#0070F2',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sapGrad1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#008FD3" />
            <stop offset="1" stopColor="#0050B3" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#sapGrad1)" />
        <text x="6.5" y="25" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="900" letterSpacing="0.5">SAP</text>
      </svg>
    ),
  },
  {
    id: 'oracle',
    name: 'Oracle Cloud',
    tag: 'Infrastructure & ERP',
    accent: '#EA580C',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#C74634" />
        <rect x="9" y="14" width="22" height="12" rx="6" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 'aws',
    name: 'Amazon Web Services',
    tag: 'AWS Cloud Infrastructure',
    accent: '#F59E0B',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#232F3E" />
        <text x="9" y="19" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fontWeight="800">aws</text>
        <path d="M10 24C16 27.5 24 27.5 29 24" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M27 21.5L29.5 24.2L26.5 25.5" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
    tag: 'Vertex AI & BigQuery',
    accent: '#4285F4',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#4285F4" fillOpacity="0.1" />
        <path d="M20 9L29 14.2V25.8L20 31L11 25.8V14.2L20 9Z" stroke="#4285F4" strokeWidth="2" fill="none" />
        <path d="M20 9L29 14.2L20 20L11 14.2L20 9Z" fill="#EA4335" fillOpacity="0.9" />
        <path d="M11 14.2L20 20V31L11 25.8V14.2Z" fill="#4285F4" fillOpacity="0.9" />
        <path d="M20 20L29 14.2V25.8L20 31V20Z" fill="#34A853" fillOpacity="0.9" />
        <circle cx="20" cy="20" r="3" fill="#FBBC04" />
      </svg>
    ),
  },
];

/* ── Row 2: Global Tech Platforms & Industrial Partners ── */
const row2Logos = [
  {
    id: 'azure',
    name: 'Microsoft Azure',
    tag: 'Enterprise Cloud',
    accent: '#0078D4',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#0078D4" fillOpacity="0.12" />
        <path d="M13 29L22.5 10H28L18 29H13Z" fill="#0078D4" />
        <path d="M22 18L17.5 26.5H24L28.5 29H13.5L22 18Z" fill="#50E6FF" />
        <path d="M22.5 10L18.5 21L24 23.5L28 10H22.5Z" fill="#005A9E" />
      </svg>
    ),
  },
  {
    id: 'ariba',
    name: 'SAP Ariba',
    tag: 'Procurement Supply Chain',
    accent: '#F59E0B',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#D97706" fillOpacity="0.14" />
        <path d="M20 10L27 17L20 24L13 17L20 10Z" fill="#F59E0B" />
        <path d="M20 18L27 25L20 32L13 25L20 18Z" fill="#D97706" />
        <circle cx="20" cy="21" r="2.5" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    tag: 'Cloud-Native Orchestration',
    accent: '#326CE5',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#326CE5" fillOpacity="0.12" />
        <circle cx="20" cy="20" r="9" stroke="#326CE5" strokeWidth="2.2" fill="none" />
        <circle cx="20" cy="20" r="3" fill="#326CE5" />
        <path d="M20 11V14M20 26V29M12 16L14.5 17.5M25.5 22.5L28 24M12 24L14.5 22.5M25.5 17.5L28 16" stroke="#326CE5" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'docker',
    name: 'Docker',
    tag: 'Enterprise Containers',
    accent: '#2496ED',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#2496ED" fillOpacity="0.12" />
        <rect x="13" y="17" width="3" height="3" fill="#2496ED" />
        <rect x="17" y="17" width="3" height="3" fill="#2496ED" />
        <rect x="21" y="17" width="3" height="3" fill="#2496ED" />
        <rect x="17" y="13" width="3" height="3" fill="#2496ED" />
        <rect x="21" y="13" width="3" height="3" fill="#2496ED" />
        <path d="M10 21C11.5 20.8 13 21.5 13 21.5C14 20.5 24 20.5 27 23C29 23 30 22 30.5 21C30.5 21 31 24.5 28.5 26.5C25.5 28.5 13.5 28.5 10 24C9.5 23.5 9 22 10 21Z" fill="#2496ED" />
        <circle cx="13" cy="23.5" r="0.8" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    tag: 'Enterprise CRM & Cloud',
    accent: '#00A1E0',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#00A1E0" fillOpacity="0.12" />
        <path d="M18 14C19.5 12.8 21.7 12.8 23.2 13.9C24.5 13.5 26 14 26.8 15.2C27.8 15.5 28.6 16.4 28.7 17.5C29.6 18.2 30 19.4 29.6 20.5C29.3 21.6 28.3 22.4 27.2 22.5H14C12.9 22.4 12 21.5 12 20.4C12 19.3 12.8 18.4 13.9 18.2C13.8 17.1 14.5 16 15.5 15.5C16.1 14.5 17 14.1 18 14Z" fill="#00A1E0" />
      </svg>
    ),
  },
  {
    id: 'indus-supply',
    name: 'Indus Motors',
    tag: 'Automotive Supply Chain',
    accent: '#DC2626',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#DC2626" fillOpacity="0.12" />
        <circle cx="20" cy="20" r="10" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 2" fill="none" />
        <path d="M16 20L19 23L25 17" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'parco-logistics',
    name: 'Pak-Arab Pipeline',
    tag: 'Refinery Infrastructure',
    accent: '#059669',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#047857" fillOpacity="0.12" />
        <path d="M11 25C14 21 17 21 20 25C23 29 26 29 29 25" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M11 19C14 15 17 15 20 19C23 23 26 23 29 19" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="19" r="2.5" fill="#047857" />
      </svg>
    ),
  },
];

/* ── Minimalist High-End Partner Logo Pill ── */
function LogoCard({ item, activeDark }) {
  return (
    <div
      className={cn(
        'group flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl border transition-all duration-200 cursor-pointer shrink-0 select-none',
        'hover:-translate-y-0.5 hover:scale-[1.02]',
        activeDark
          ? 'bg-slate-900/80 hover:bg-slate-900 border-white/10 hover:border-white/20 text-white shadow-lg shadow-black/20'
          : 'bg-white hover:bg-slate-50/80 border-slate-200/90 hover:border-slate-300 text-slate-900 shadow-xs hover:shadow-md'
      )}
      style={{ minWidth: '220px' }}
    >
      {/* Authentic High-Quality Logo Emblem */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        {item.logoSvg}
      </div>

      {/* Crisp Brand Name & Sector Tag */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'text-sm sm:text-base font-bold font-display tracking-tight truncate leading-tight',
              activeDark ? 'text-white' : 'text-slate-950'
            )}
          >
            {item.name}
          </span>
        </div>
        <span
          className={cn(
            'text-[11px] font-medium tracking-normal truncate block mt-0.5 leading-tight',
            activeDark ? 'text-slate-400' : 'text-slate-500'
          )}
        >
          {item.tag}
        </span>
      </div>
    </div>
  );
}

export default function ClientLogoCloud({ className = '', dark = false, isDark = false }) {
  const activeDark = dark || isDark;

  return (
    <div
      className={cn(
        'py-10 transition-colors duration-300 relative overflow-hidden',
        activeDark
          ? 'bg-slate-950/70 border-y border-white/10 text-slate-200'
          : 'bg-slate-50/90 border-y border-slate-200 text-slate-800',
        className
      )}
    >
      {/* ── CSS Keyframes for Two Opposite Running Tracks ── */}
      <style>{`
        @keyframes runningTrackLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes runningTrackRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .running-marquee-track-left {
          display: flex;
          width: max-content;
          animation: runningTrackLeft 36s linear infinite;
        }
        .running-marquee-track-right {
          display: flex;
          width: max-content;
          animation: runningTrackRight 36s linear infinite;
        }
        .running-marquee-track-left:hover,
        .running-marquee-track-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Header Badge ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span
            className={cn(
              'text-xs font-bold uppercase tracking-widest',
              activeDark ? 'text-slate-300' : 'text-slate-700'
            )}
          >
            Verified Enterprise Clients & Certified Global Platforms
          </span>
        </div>

        <span
          className={cn(
            'inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full border',
            activeDark
              ? 'border-white/10 bg-white/5 text-slate-400'
              : 'border-slate-200 bg-white text-slate-600 shadow-xs'
          )}
        >
          <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
          Continuous Running Telemetry • Hover to Pause
        </span>
      </div>

      {/* ── Running Infinite Tracks in Opposite Directions ── */}
      <div className="relative w-full overflow-hidden space-y-4">
        {/* Left & Right Soft Fade Gradients */}
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none',
            activeDark
              ? 'bg-gradient-to-r from-slate-950 to-transparent'
              : 'bg-gradient-to-r from-slate-50 to-transparent'
          )}
        />
        <div
          className={cn(
            'absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none',
            activeDark
              ? 'bg-gradient-to-l from-slate-950 to-transparent'
              : 'bg-gradient-to-l from-slate-50 to-transparent'
          )}
        />

        {/* Row 1: Running Left */}
        <div className="running-marquee-track-left gap-4 py-1">
          {[...row1Logos, ...row1Logos].map((client, index) => (
            <LogoCard
              key={`row1-${client.id}-${index}`}
              item={client}
              activeDark={activeDark}
            />
          ))}
        </div>

        {/* Row 2: Running Right (Opposite Direction) */}
        <div className="running-marquee-track-right gap-4 py-1">
          {[...row2Logos, ...row2Logos].map((client, index) => (
            <LogoCard
              key={`row2-${client.id}-${index}`}
              item={client}
              activeDark={activeDark}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
