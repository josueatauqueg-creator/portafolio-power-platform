import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';
import { projectCategories, projects } from '../data/projects.js';
import { projectTranslations } from '../data/projectTranslations.js';

const PROJECTS_PER_PAGE = 6;

function mergeProjectTranslations(project, language, t) {
  if (language === 'es') return project;
  const translation = projectTranslations[language]?.[project.id];
  const displayCategory = t.categories[project.category] ?? project.category;
  if (!translation) return { ...project, displayCategory };
  return {
    ...project,
    ...translation,
    id: project.id,
    client: project.client,
    category: project.category,
    image: project.image,
    gallery: project.gallery,
    featured: project.featured,
    displayCategory
  };
}

function ProjectsSection({ language, t }) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const translatedProjects = useMemo(
    () => projects.map((project) => mergeProjectTranslations(project, language, t)),
    [language, t]
  );

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return translatedProjects.filter((project) => {
      const matchesCategory = activeCategory === 'Todos' || project.category === activeCategory || project.tools.includes(activeCategory);
      const searchable = [project.title, project.client, project.category, project.displayCategory, project.description, ...project.tools, project.database]
        .join(' ')
        .toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, query, translatedProjects, t.categories]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const pageNumbers = useMemo(() => Array.from({ length: totalPages }, (_, index) => index + 1), [totalPages]);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [currentPage, filteredProjects]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, query]);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (!selectedProject) return;
    const refreshedProject = translatedProjects.find((project) => project.id === selectedProject.id);
    if (refreshedProject) {
      setSelectedProject(refreshedProject);
    }
  }, [language, selectedProject, translatedProjects]);

  return (
    <section id="proyectos" className="section-shell">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">{t.projects.eyebrow}</p>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-copy">{t.projects.copy}</p>
        </div>
        <div className="relative w-full lg:max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.projects.searchPlaceholder}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-medium outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/10 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
          />
        </div>
      </div>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? 'border-aqua bg-aqua text-white shadow-glow'
                : 'border-slate-200 bg-white text-slate-600 hover:border-aqua hover:text-aqua dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-300'
            }`}
          >
            {t.categories[category] ?? category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} t={t} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600 dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-300">
          {t.projects.noResults}
        </div>
      )}

      {totalPages > 1 && (
        <nav
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row dark:border-white/10 dark:bg-white/[0.08]"
          aria-label={t.projects.paginationLabel}
        >
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            {t.projects.page} {currentPage} {t.projects.of} {totalPages}
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:w-auto">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-aqua hover:text-aqua disabled:cursor-not-allowed disabled:opacity-45 dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-300"
            >
              {t.projects.previous}
            </button>

            {pageNumbers.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                aria-current={currentPage === page ? 'page' : undefined}
                className={`grid h-10 min-w-10 place-items-center rounded-lg border px-3 text-sm font-bold transition ${
                  currentPage === page
                    ? 'border-aqua bg-aqua text-white shadow-glow'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-aqua hover:text-aqua dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-300'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-aqua hover:text-aqua disabled:cursor-not-allowed disabled:opacity-45 dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-300"
            >
              {t.projects.next}
            </button>
          </div>
        </nav>
      )}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} t={t} />
    </section>
  );
}

export default ProjectsSection;
