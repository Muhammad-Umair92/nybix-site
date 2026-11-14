import React from 'react';
import { ShieldCheck, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { cn } from '../lib/cn';

/**
 * Inspired Running Client & Technology Partner Marquee Showcase
 * Sourced from official enterprise engagements: PARCO, IMC Toyota, PSO + Global Tech Platforms.
 */

/* ── High-Fidelity Custom Vector SVG Emblems ── */
const clientLogos = [
  {
    id: 'parco',
    name: 'PARCO',
    fullName: 'Pak-Arab Refinery Limited',
    sector: 'Energy & Petrochemicals',
    metric: '60% Faster PO Cycles',
    solution: 'SAP S/4HANA & SF Ariba',
    accent: '#059669',
    badge: 'Refinery Core',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#047857" fillOpacity="0.12" />
        <path d="M20 7L27 15H22V24H18V15H13L20 7Z" fill="#059669" />
        <path d="M12 26H28V31C28 32.1 27.1 33 26 33H14C12.9 33 12 32.1 12 31V26Z" fill="#047857" />
        <circle cx="20" cy="18" r="2.5" fill="#10B981" />
      </svg>
    ),
  },
  {
    id: 'imc',
    name: 'IMC Toyota',
    fullName: 'Indus Motor Company',
    sector: 'Automotive & Commerce',
    metric: 'Nationwide Mobile + Web',
    solution: 'Full-Stack E-Commerce',
    accent: '#DC2626',
    badge: 'Automotive Leader',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#DC2626" fillOpacity="0.12" />
        {/* Toyota Signature Triple Oval Geometric Geometry */}
        <ellipse cx="20" cy="20" rx="13" ry="8.5" stroke="#DC2626" strokeWidth="2.2" fill="none" />
        <ellipse cx="20" cy="18" rx="5" ry="6.5" stroke="#DC2626" strokeWidth="2.2" fill="none" />
        <path d="M14 15.5C14 15.5 17 19.5 20 19.5C23 19.5 26 15.5 26 15.5" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'pso',
    name: 'PSO',
    fullName: 'Pakistan State Oil',
    sector: 'National Energy Supply Chain',
    metric: '25,000+ Manifests/Mo',
    solution: 'AP Console AI OCR',
    accent: '#0284C7',
    badge: 'National Infrastructure',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#0284C7" fillOpacity="0.12" />
        <path d="M20 8C20 8 13 18 13 24C13 27.86 16.13 31 20 31C23.86 31 27 27.86 27 24C27 18 20 8 20 8Z" fill="#0284C7" />
        <path d="M20 14C20 14 16 20 16 24C16 26.2 17.8 28 20 28C22.2 28 24 26.2 24 24C24 20 20 14 20 14Z" fill="#38BDF8" fillOpacity="0.8" />
        <circle cx="20" cy="24" r="2.5" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'sap',
    name: 'SAP',
    fullName: 'Enterprise Systems & BTP',
    sector: 'Cloud ERP & SF Ariba',
    metric: 'Gold Certified Practice',
    solution: 'Clean Core S/4HANA',
    accent: '#0070F2',
    badge: 'Technology Partner',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#0070F2" />
        <text x="7" y="25" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" fontWeight="900" letterSpacing="0.5">SAP</text>
      </svg>
    ),
  },
  {
    id: 'oracle',
    name: 'Oracle',
    fullName: 'Oracle Cloud Infrastructure',
    sector: 'Database & Enterprise Apps',
    metric: 'High-Throughput RFCs',
    solution: 'Refinery Oracle Bridge',
    accent: '#EA580C',
    badge: 'Cloud Integration',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#C74634" />
        <ellipse cx="20" cy="20" rx="11" ry="6" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 'aws',
    name: 'AWS',
    fullName: 'Amazon Web Services',
    sector: 'Cloud Infrastructure',
    metric: '99.99% Cloud SLA',
    solution: 'Multi-AZ Kubernetes',
    accent: '#F59E0B',
    badge: 'Cloud Platform',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#232F3E" />
        <path d="M12 24C17 27 23 27 28 24" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M26 21L28 24L25 25" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="10" y="18" fill="#FFFFFF" fontFamily="sans-serif" fontSize="10" fontWeight="bold">aws</text>
      </svg>
    ),
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
    fullName: 'Google Cloud Platform',
    sector: 'AI & Data Engineering',
    metric: 'Vertex AI & BigQuery',
    solution: 'Document OCR Pipelines',
    accent: '#4285F4',
    badge: 'AI Partner',
    logoSvg: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#4285F4" fillOpacity="0.12" />
        <polygon points="20,10 29,15 29,25 20,30 11,25 11,15" stroke="#4285F4" strokeWidth="2.2" fill="none" />
        <polygon points="20,14 25,17 25,23 20,26 15,23 15,17" fill="#4285F4" />
      </svg>
    ),
  },
];

export default function ClientLogoCloud({ className = '', dark = false, isDark = false }) {
  const activeDark = dark || isDark;

  return (
    <div
      className={cn(
        'py-8 transition-colors duration-300 relative overflow-hidden',
        activeDark
          ? 'bg-slate-950/70 border-y border-white/10 text-slate-200'
          : 'bg-slate-50/90 border-y border-slate-200 text-slate-800',
        className
      )}
    >
      {/* ── CSS Animation for Smooth Infinite Running Track ── */}
      <style>{`
        @keyframes runningTrack {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .running-marquee-track {
          display: flex;
          width: max-content;
          animation: runningTrack 32s linear infinite;
        }
        .running-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Header Badge ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500 animate-pulse" />
          <span
            className={cn(
              'text-[11px] font-bold uppercase tracking-widest',
              activeDark ? 'text-slate-400' : 'text-slate-600'
            )}
          >
            Verified Enterprise Clients & Certified Platforms
          </span>
        </div>

        <span
          className={cn(
            'hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full border',
            activeDark
              ? 'border-white/10 bg-white/5 text-slate-400'
              : 'border-slate-200 bg-white text-slate-600 shadow-xs'
          )}
        >
          <Sparkles className="w-3 h-3 text-amber-400" />
          Continuous Running Telemetry • Hover to Pause
        </span>
      </div>

      {/* ── Running Infinite Track with Logos ── */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Soft Fade Gradients */}
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none',
            activeDark
              ? 'bg-gradient-to-r from-slate-950 to-transparent'
              : 'bg-gradient-to-r from-slate-50 to-transparent'
          )}
        />
        <div
          className={cn(
            'absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none',
            activeDark
              ? 'bg-gradient-to-l from-slate-950 to-transparent'
              : 'bg-gradient-to-l from-slate-50 to-transparent'
          )}
        />

        {/* Continuous Track Duplicated For Seamless Loop */}
        <div className="running-marquee-track gap-4 py-2">
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className={cn(
                'flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl border transition-all duration-300 hover:scale-[1.03] cursor-pointer shrink-0 shadow-sm',
                activeDark
                  ? 'bg-slate-900/90 border-slate-800 hover:border-slate-600 text-white'
                  : 'bg-white border-slate-200/90 hover:border-slate-400 text-slate-900 shadow-xs'
              )}
              style={{ minWidth: '280px' }}
            >
              {/* Logo Emblem */}
              {client.logoSvg}

              {/* Client Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4
                    className={cn(
                      'text-sm font-extrabold font-display leading-tight truncate',
                      activeDark ? 'text-white' : 'text-slate-950'
                    )}
                  >
                    {client.name}
                  </h4>
                  <span
                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: `${client.accent}15`,
                      color: client.accent,
                    }}
                  >
                    {client.badge}
                  </span>
                </div>

                <div
                  className={cn(
                    'text-[11px] truncate mt-0.5',
                    activeDark ? 'text-slate-400' : 'text-slate-500'
                  )}
                >
                  {client.solution}
                </div>

                <div className="flex items-center gap-1.5 mt-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span
                    className="text-[10px] font-mono font-bold truncate"
                    style={{ color: client.accent }}
                  >
                    {client.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
