import { ArrowUpRight, Building2 } from 'lucide-react';

function ProjectCard({ project, onOpen, t }) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:border-aqua/50 dark:border-white/10 dark:bg-white/[0.08]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-white/5">
        <img
          src={project.image || '/projects/placeholder-project.svg'}
          alt={`${t.projects.previewAlt} ${project.title}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.src = '/projects/placeholder-project.svg';
          }}
        />
        {project.featured && <span className="badge absolute left-4 top-4 bg-white/95">{t.projects.featured}</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <Building2 size={16} />
          {project.client}
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-tight text-ink dark:text-white">{project.title}</h3>
          <span className="badge shrink-0">{project.displayCategory ?? project.category}</span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
              {tool}
            </span>
          ))}
        </div>
        <button type="button" onClick={() => onOpen(project)} className="secondary-button mt-6 w-full py-2.5">
          {t.projects.viewDetail}
          <ArrowUpRight size={17} />
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
