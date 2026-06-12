import { useEffect } from 'react';
import { Download, FileText, X } from 'lucide-react';

function CvDownloadModal({ isOpen, onClose, t }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#0A1624]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-aqua/10 text-aqua">
              <FileText size={22} />
            </span>
            <div>
              <h2 id="cv-modal-title" className="text-2xl font-bold text-ink dark:text-white">
                {t.cvModal.title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            aria-label={t.cvModal.close}
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:text-slate-200"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{t.cvModal.description}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a href="/cv/cv-es.pdf" download className="primary-button">
            <Download size={18} />
            {t.cvModal.spanish}
          </a>
          <a href="/cv/cv-en.pdf" download className="primary-button">
            <Download size={18} />
            {t.cvModal.english}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CvDownloadModal;
