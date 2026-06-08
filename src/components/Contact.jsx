import { ArrowDownToLine, Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import { profile } from '../data/profile.js';

function Contact({ t }) {
  return (
    <section id="contacto" className="bg-ink text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{t.contact.copy}</p>
          <div className="mt-8 space-y-3">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.08] p-4 transition hover:border-aqua">
              <Mail className="text-aqua" size={20} />
              {profile.email}
            </a>
            <a href={profile.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.08] p-4 transition hover:border-aqua">
              <MessageCircle className="text-aqua" size={20} />
              {profile.whatsapp}
            </a>
            <div className="grid gap-3 sm:grid-cols-3">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="secondary-button border-white/10 bg-white/[0.08] text-white">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-button border-white/10 bg-white/[0.08] text-white">
                <Github size={18} />
                GitHub
              </a>
              <a href={profile.cvUrl} className="secondary-button border-white/10 bg-white/[0.08] text-white">
                <ArrowDownToLine size={18} />
                {t.contact.cv}
              </a>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-white p-5 text-ink shadow-2xl sm:p-6" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              {t.contact.name}
              <input className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/10" placeholder={t.contact.namePlaceholder} />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              {t.contact.company}
              <input className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/10" placeholder={t.contact.companyPlaceholder} />
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            {t.contact.email}
            <input type="email" className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/10" placeholder={t.contact.emailPlaceholder} />
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            {t.contact.message}
            <textarea className="mt-2 min-h-36 w-full resize-y rounded-xl border border-slate-200 p-4 outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/10" placeholder={t.contact.messagePlaceholder} />
          </label>
          <button type="submit" className="primary-button mt-5 w-full">
            <Send size={18} />
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
