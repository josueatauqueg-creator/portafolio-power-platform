import { useState } from 'react';
import { ArrowDownToLine, Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import { profile } from '../data/profile.js';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykabgol';
const initialFormState = {
  name: '',
  company: '',
  email: '',
  message: ''
};

function Contact({ t, onOpenCvModal }) {
  const [formData, setFormData] = useState(initialFormState);
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const isEnglish = t.contact.send === 'Send message';
  const feedbackText = {
    sending: isEnglish ? 'Sending...' : 'Enviando...',
    required: isEnglish ? 'Please complete name, email, and message.' : 'Completa nombre, correo y mensaje.',
    success: isEnglish ? 'Message sent successfully. I will contact you soon.' : 'Mensaje enviado correctamente. Te contactaré pronto.',
    error: isEnglish ? 'The message could not be sent. Please try again.' : 'No se pudo enviar el mensaje. Inténtalo nuevamente.'
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus(null);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    const company = formData.company.trim();

    if (!name || !email || !message) {
      setSubmitStatus({ type: 'error', message: feedbackText.required });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          company,
          email,
          message
        })
      });

      if (!response.ok) {
        throw new Error('Formspree request failed');
      }

      setFormData(initialFormState);
      setSubmitStatus({ type: 'success', message: feedbackText.success });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: feedbackText.error });
    } finally {
      setIsSending(false);
    }
  };

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
              <button type="button" onClick={onOpenCvModal} className="secondary-button border-white/10 bg-white/[0.08] text-white">
                <ArrowDownToLine size={18} />
                {t.contact.cv}
              </button>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-white p-5 text-ink shadow-2xl dark:bg-[#0A1624] sm:p-6" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {t.contact.name}
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/10 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
                placeholder={t.contact.namePlaceholder}
              />
            </label>
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {t.contact.company}
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/10 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
                placeholder={t.contact.companyPlaceholder}
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-slate-700 dark:text-slate-200">
            {t.contact.email}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/10 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
              placeholder={t.contact.emailPlaceholder}
            />
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-700 dark:text-slate-200">
            {t.contact.message}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 min-h-36 w-full resize-y rounded-xl border border-slate-200 p-4 outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/10 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
              placeholder={t.contact.messagePlaceholder}
            />
          </label>
          {submitStatus && (
            <p
              className={`mt-4 rounded-xl border px-4 py-3 text-sm font-semibold ${submitStatus.type === 'success'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200'
                : 'border-red-200 bg-red-50 text-red-700 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-200'
                }`}
            >
              {submitStatus.message}
            </p>
          )}
          <button type="submit" disabled={isSending} className="primary-button mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70">
            <Send size={18} />
            {isSending ? feedbackText.sending : t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
