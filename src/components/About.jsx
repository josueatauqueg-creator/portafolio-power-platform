import { CheckCircle2 } from 'lucide-react';

function About({ t }) {
  return (
    <section id="sobre-mi" className="bg-white/70 dark:bg-white/[0.03]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="section-title">{t.about.title}</h2>
        </div>
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <p className="text-lg leading-8 text-justify text-slate-700 dark:text-slate-200">
            {t.about.copy}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.strengths.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.08]">
                <CheckCircle2 className="text-aqua" size={20} />
                <span className="font-semibold text-slate-800 dark:text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
