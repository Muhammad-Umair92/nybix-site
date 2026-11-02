import React, { createContext, useContext, useState, useEffect } from 'react';

export const themes = [
  {
    id: 'sap-blue',
    name: 'SAP Blue & White (Default)',
    subtitle: 'Classic SAP / EY Enterprise Palette',
    previewColor: '#0070F2',
    accentColor: '#003882',
    darkColor: '#0B192C',
    variables: {
      '--color-primary': '#0070F2',
      '--color-primary-dark': '#0058C6',
      '--color-primary-light': '#EBF4FE',
      '--color-primary-glow': 'rgba(0, 112, 242, 0.25)',
      '--color-accent': '#003882',
      '--color-dark': '#0B192C',
      '--color-surface': '#F8FAFC',
    },
  },
  {
    id: 'emerald-exec',
    name: 'Emerald Executive',
    subtitle: 'Modern Clean Tech & ESG Authority',
    previewColor: '#059669',
    accentColor: '#065F46',
    darkColor: '#064E3B',
    variables: {
      '--color-primary': '#059669',
      '--color-primary-dark': '#047857',
      '--color-primary-light': '#ECFDF5',
      '--color-primary-glow': 'rgba(5, 150, 105, 0.25)',
      '--color-accent': '#065F46',
      '--color-dark': '#064E3B',
      '--color-surface': '#F9FAFB',
    },
  },
  {
    id: 'royal-indigo',
    name: 'Royal Indigo',
    subtitle: 'Silicon Valley AI & Cloud Consultancies',
    previewColor: '#6366F1',
    accentColor: '#4338CA',
    darkColor: '#1E1B4B',
    variables: {
      '--color-primary': '#6366F1',
      '--color-primary-dark': '#4F46E5',
      '--color-primary-light': '#EEF2FF',
      '--color-primary-glow': 'rgba(99, 102, 241, 0.25)',
      '--color-accent': '#4338CA',
      '--color-dark': '#1E1B4B',
      '--color-surface': '#F8FAFC',
    },
  },
  {
    id: 'crimson-power',
    name: 'Crimson Enterprise',
    subtitle: 'High-Impact Fintech & Global Energy',
    previewColor: '#DC2626',
    accentColor: '#991B1B',
    darkColor: '#450A0A',
    variables: {
      '--color-primary': '#DC2626',
      '--color-primary-dark': '#B91C1C',
      '--color-primary-light': '#FEF2F2',
      '--color-primary-glow': 'rgba(220, 38, 38, 0.25)',
      '--color-accent': '#991B1B',
      '--color-dark': '#450A0A',
      '--color-surface': '#FAFAFA',
    },
  },
  {
    id: 'midnight-slate',
    name: 'Midnight Cobalt',
    subtitle: 'Apple & Linear High-Contrast Minimalist',
    previewColor: '#2563EB',
    accentColor: '#1D4ED8',
    darkColor: '#0F172A',
    variables: {
      '--color-primary': '#2563EB',
      '--color-primary-dark': '#1D4ED8',
      '--color-primary-light': '#EFF6FF',
      '--color-primary-glow': 'rgba(37, 99, 235, 0.25)',
      '--color-accent': '#1E40AF',
      '--color-dark': '#0F172A',
      '--color-surface': '#F8FAFC',
    },
  },
  {
    id: 'amber-gold',
    name: 'Warm Amber Prestige',
    subtitle: 'Private Equity, Legal & Strategic Advisory',
    previewColor: '#D97706',
    accentColor: '#92400E',
    darkColor: '#451A03',
    variables: {
      '--color-primary': '#D97706',
      '--color-primary-dark': '#B45309',
      '--color-primary-light': '#FFFBEB',
      '--color-primary-glow': 'rgba(217, 119, 6, 0.25)',
      '--color-accent': '#92400E',
      '--color-dark': '#451A03',
      '--color-surface': '#FFFDF8',
    },
  },
];

const ThemeContext = createContext({
  activeTheme: themes[0],
  setTheme: () => {},
  themes: [],
});

export function ThemeProvider({ children }) {
  const [activeThemeId, setActiveThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem('nybix-theme');
      return saved || 'sap-blue';
    } catch {
      return 'sap-blue';
    }
  });

  const activeTheme = themes.find((t) => t.id === activeThemeId) || themes[0];

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(activeTheme.variables).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });
    try {
      localStorage.setItem('nybix-theme', activeTheme.id);
    } catch (e) {
      // storage unavailable
    }
  }, [activeTheme]);

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        setTheme: (id) => setActiveThemeId(id),
        themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
