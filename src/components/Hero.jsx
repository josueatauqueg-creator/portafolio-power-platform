import { ArrowDownToLine, BarChart3, Mail, Rocket } from 'lucide-react';

function Hero({ t, onOpenCvModal }) {
  return (
    <section id="inicio" className="section-shell grid min-h-[calc(100vh-80px)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="animate-[fadeInUp_0.6s_ease-out]">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          {t.hero.subtitle}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#proyectos" className="primary-button">
            <Rocket size={18} />
            {t.hero.viewProjects}
          </a>
          <button type="button" onClick={onOpenCvModal} className="secondary-button">
            <ArrowDownToLine size={18} />
            {t.hero.downloadCv}
          </button>
          <a href="#contacto" className="secondary-button">
            <Mail size={18} />
            {t.hero.contact}
          </a>
        </div>
      </div>

      <div className="glass-card animate-[fadeInUp_0.7s_ease-out] rounded-2xl p-5 sm:p-6">
        <div className="rounded-xl bg-ink p-5 text-white dark:bg-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-aqua">{t.hero.impactPanel}</p>
              <h2 className="mt-2 text-2xl font-bold">{t.hero.impactTitle}</h2>
            </div>
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-aqua/20 text-aqua">
              <BarChart3 size={24} />
            </span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.08] p-4">
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-5 text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {t.hero.chips.map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
