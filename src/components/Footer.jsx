import { BriefcaseBusiness } from 'lucide-react';
import { profile } from '../data/profile.js';

function Footer({ t }) {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-white/10 dark:bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8 dark:text-slate-400">
        <div className="flex items-center gap-3">
          <span className="h-10 w-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft dark:border-white/10">
            <img
              src="/projects/foto-perfil.jpg"
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </span>
          <span>
            <strong className="block text-ink dark:text-white">{profile.name}</strong>
            {t.footer.copy}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
