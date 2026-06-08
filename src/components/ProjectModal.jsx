import { useEffect, useState } from 'react';
import { Database, Layers3, Sparkles, WalletCards, X } from 'lucide-react';

function DetailBlock({ icon: Icon, title, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
      <div className="mb-3 flex items-center gap-2 font-bold text-ink dark:text-white">
        <Icon className="text-aqua" size={18} />
        {title}
      </div>
      {children}
    </div>
  );
}

function ProjectModal({ project, onClose, t }) {
  const [selectedImage, setSelectedImage] = useState('/projects/placeholder-project.svg');

  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  useEffect(() => {
    if (!project) return;
    setSelectedImage(project.gallery?.[0] || project.image || '/projects/placeholder-project.svg');
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-[#0A1624]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur dark:border-white/10 dark:bg-[#0A1624]/95">
          <div>
            <p className="text-sm font-semibold text-aqua">{project.client}</p>
            <h2 className="text-xl font-bold text-ink dark:text-white">{project.title}</h2>
          </div>
          <button
            type="button"
            aria-label={t.modal.closeDetail}
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:text-slate-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-6 p-5 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <img
              src={selectedImage}
              alt={`${t.projects.detailAlt} ${project.title}`}
              className="aspect-[16/10] w-full rounded-xl border border-slate-200 object-cover dark:border-white/10"
              onError={(event) => {
                event.currentTarget.src = '/projects/placeholder-project.svg';
              }}
            />
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.gallery.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-lg border p-1 transition hover:border-aqua ${
                    selectedImage === image
                      ? 'border-aqua ring-2 ring-aqua/20'
                      : 'border-slate-200 dark:border-white/10'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${t.projects.galleryAlt} ${project.title}`}
                    className="aspect-[16/10] w-full rounded-md object-cover"
                    onError={(event) => {
                      event.currentTarget.src = '/projects/placeholder-project.svg';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <DetailBlock icon={Layers3} title={t.modal.solution}>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{project.solution}</p>
            </DetailBlock>
            <DetailBlock icon={Database} title={t.modal.database}>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{project.database}</p>
            </DetailBlock>
            <DetailBlock icon={Sparkles} title={t.modal.toolsAndIntegrations}>
              <div className="flex flex-wrap gap-2">
                {[...project.tools, ...project.integrations].map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </DetailBlock>
            <DetailBlock icon={WalletCards} title={t.modal.license}>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{project.license}</p>
            </DetailBlock>
            <div className="rounded-xl border border-aqua/20 bg-aqua/10 p-4">
              <h3 className="font-bold text-ink dark:text-white">{t.modal.benefits}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                {project.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
