import React, { useEffect, useMemo, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import TechStack from './components/TechStack.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CvDownloadModal from './components/CvDownloadModal.jsx';
import { profile } from './data/profile.js';
import { uiTranslations } from './data/uiTranslations.js';

const DEFAULT_LANGUAGE = 'es';
const STORAGE_KEY = 'portfolio-language';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    return savedLanguage === 'en' || savedLanguage === 'es' ? savedLanguage : DEFAULT_LANGUAGE;
  });

  const appClassName = useMemo(
    () => (darkMode ? 'dark bg-ink text-white' : 'bg-mist text-ink'),
    [darkMode]
  );

  const t = uiTranslations[language] ?? uiTranslations[DEFAULT_LANGUAGE];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return (
    <div className={appClassName}>
      <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(11,161,162,0.10),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,249,252,1))] transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,rgba(11,161,162,0.18),transparent_30%),linear-gradient(180deg,rgba(6,16,28,1),rgba(10,22,36,1))]">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} t={t} />
        <main>
          <Hero t={t} onOpenCvModal={() => setIsCvModalOpen(true)} />
          <About t={t} />
          <ProjectsSection language={language} t={t} />
          <TechStack t={t} />
          <Services t={t} />
          <Contact t={t} onOpenCvModal={() => setIsCvModalOpen(true)} />
        </main>
        <Footer t={t} />
        <CvDownloadModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} t={t} />

        <a
          href={profile.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={t.app.whatsapp}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-aqua text-white shadow-glow transition hover:-translate-y-1 hover:bg-[#078889]"
        >
          <MessageCircle size={22} />
        </a>

        <button
          type="button"
          aria-label={t.app.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-6 z-40 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/85 text-ink shadow-soft backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/10 dark:text-white"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </div>
  );
}

export default App;
