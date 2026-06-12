import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../data/profile.js';

const navItems = [
  { href: '#inicio', key: 'home' },
  { href: '#sobre-mi', key: 'about' },
  { href: '#proyectos', key: 'projects' },
  { href: '#tecnologias', key: 'technologies' },
  { href: '#servicios', key: 'services' },
  { href: '#contacto', key: 'contact' }
];

function Navbar({ darkMode, setDarkMode, language, setLanguage, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? 'border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-ink/80'
        : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="h-11 w-11 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft dark:border-white/10">
            <img
              src="/projects/foto-perfil.jpg"
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </span>
          <span>
            <span className="block text-sm font-bold leading-tight text-ink dark:text-white">{profile.name}</span>
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">{t.profile.role}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-aqua/10 hover:text-aqua dark:text-slate-300"
            >
              {t.navbar[item.key]}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-lg border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-white/[0.08]" aria-label={t.language.label}>
            {[
              { value: 'es', label: t.language.spanish },
              { value: 'en', label: t.language.english }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setLanguage(option.value)}
                className={`rounded-md px-3 py-1.5 text-xs font-bold transition ${language === option.value
                  ? 'bg-aqua text-white shadow-sm'
                  : 'text-slate-600 hover:text-aqua dark:text-slate-300'
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label={t.navbar.toggleTheme}
            onClick={() => setDarkMode((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-ink transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#proyectos" className="primary-button py-2.5">
            {t.navbar.viewProjects}
          </a>
        </div>

        <button
          type="button"
          aria-label={t.navbar.openMenu}
          onClick={() => setMenuOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-ink lg:hidden dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-soft lg:hidden dark:border-white/10 dark:bg-ink">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-aqua/10 hover:text-aqua dark:text-slate-200"
              >
                {t.navbar[item.key]}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1 dark:border-white/10 dark:bg-white/[0.08]">
              {[
                { value: 'es', label: t.language.spanish },
                { value: 'en', label: t.language.english }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setLanguage(option.value)}
                  className={`rounded-lg px-3 py-2 text-sm font-bold transition ${language === option.value
                    ? 'bg-aqua text-white shadow-glow'
                    : 'text-slate-600 hover:text-aqua dark:text-slate-300'
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={() => setDarkMode((value) => !value)}
                className="secondary-button flex-1 py-2.5"
              >
                {darkMode ? <Sun size={17} /> : <Moon size={17} />}
                {t.navbar.mode}
              </button>
              <a href="#contacto" onClick={() => setMenuOpen(false)} className="primary-button flex-1 py-2.5">
                {t.navbar.contactMe}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
