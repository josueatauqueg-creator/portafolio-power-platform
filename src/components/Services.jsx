import { ArrowRight, Blocks, Bot, ChartNoAxesCombined, DatabaseZap, FileSpreadsheet, GitBranch, Lightbulb, Rocket } from 'lucide-react';

const serviceIcons = [Blocks, Bot, DatabaseZap, ChartNoAxesCombined, GitBranch, FileSpreadsheet, Lightbulb, Rocket];

function Services({ t }) {
  return (
    <section id="servicios" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-copy">{t.services.copy}</p>
          <a href="#contacto" className="primary-button mt-8">
            {t.services.cta}
            <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.services.items.map((title, index) => {
            const Icon = serviceIcons[index];
            return (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-aqua/50 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.08]">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-violet">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug text-ink dark:text-white">{title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
