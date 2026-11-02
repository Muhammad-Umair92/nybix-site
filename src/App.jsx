import React, { useState } from 'react';
import Template1Enterprise from './templates/Template1Enterprise.jsx';
import Template2ModernAI from './templates/Template2ModernAI.jsx';
import Template3Consultancy from './templates/Template3Consultancy.jsx';
import Template4Futuristic from './templates/Template4Futuristic.jsx';
import TemplateSwitcher from './components/TemplateSwitcher';
import CompareModal from './components/CompareModal';
import ContactModal from './components/ContactModal';
import ThemePicker from './components/ThemePicker';

export default function App() {
  const [activeTemplate, setActiveTemplate] = useState(1);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const handleTemplateChange = (id) => {
    setActiveTemplate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Top Demo Controller Bar */}
      <TemplateSwitcher
        activeTemplate={activeTemplate}
        onTemplateChange={handleTemplateChange}
        onOpenCompare={() => setIsCompareOpen(true)}
      />

      {/* Active Template Renderer */}
      <main>
        {activeTemplate === 1 && (
          <Template1Enterprise onOpenContact={() => setIsContactOpen(true)} />
        )}
        {activeTemplate === 2 && (
          <Template2ModernAI onOpenContact={() => setIsContactOpen(true)} />
        )}
        {activeTemplate === 3 && (
          <Template3Consultancy onOpenContact={() => setIsContactOpen(true)} />
        )}
        {activeTemplate === 4 && (
          <Template4Futuristic onOpenContact={() => setIsContactOpen(true)} />
        )}
      </main>

      {/* Floating Theme Customizer */}
      <ThemePicker />

      {/* Modal: Comparison Matrix */}
      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        activeTemplate={activeTemplate}
        onSelectTemplate={handleTemplateChange}
      />

      {/* Modal: Contact & Consultation */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
