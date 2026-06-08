import { Code2, Database, FileCode2, Gauge, Network, Workflow } from 'lucide-react';

const icons = [Workflow, Gauge, Database, Network, Code2, FileCode2];

function TechStack({ t }) {
  return (
    <section id="tecnologias" className="bg-white/70 dark:bg-white/[0.03]">
      <div className="section-shell">
        <p className="eyebrow">{t.techStack.eyebrow}</p>
        <h2 className="section-title">{t.techStack.title}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.techStack.items.map((tech, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={tech} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-aqua/50 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.08]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-aqua/10 text-aqua transition group-hover:bg-aqua group-hover:text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-bold text-ink dark:text-white">{tech}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
