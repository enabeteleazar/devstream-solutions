import { ArrowRight, Copy } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { company, projectTypes } from '../content';

type Status = 'idle' | 'sending' | 'success' | 'error';

const emptyForm = { name: '', email: '', company: '', projectType: projectTypes[0], message: '', website: '' };

export function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const update = (field: keyof typeof emptyForm) => (event: { target: { value: string } }) =>
    setForm((state) => ({ ...state, [field]: event.target.value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? 'Envoi impossible');
      }
      setStatus('success');
      setForm(emptyForm);
    } catch (caught) {
      setStatus('error');
      setError(caught instanceof Error ? caught.message : 'Envoi impossible');
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(company.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="container-site grid gap-12 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-24" aria-labelledby="contact-titre">
      <div className="grid content-start gap-6 border-t border-line pt-8">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-titre" className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Parlons de <em className="text-plum">votre projet</em>.
        </h2>
        <p className="max-w-[44ch] text-lg text-muted">
          Décrivez-nous votre besoin en quelques lignes. Nous revenons vers vous rapidement pour fixer un premier échange,
          gratuit et sans engagement.
        </p>
        <div className="grid gap-2 rounded-3xl bg-plum-soft p-6">
          <p className="text-sm text-muted">Vous préférez l’e-mail ?</p>
          <div className="flex flex-wrap items-center gap-3">
            <a className="text-lg font-medium text-plum hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <button
              className="inline-flex items-center gap-1.5 rounded-full border border-plum/20 px-3 py-1 text-sm text-plum hover:bg-paper"
              type="button"
              onClick={copyEmail}
            >
              <Copy size={14} aria-hidden="true" />
              {copied ? 'Copiée' : 'Copier'}
            </button>
          </div>
        </div>
      </div>

      <form className="relative grid gap-5 rounded-3xl border border-line bg-paper p-6 sm:p-8" onSubmit={handleSubmit}>
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update('website')} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium" htmlFor="name">
            Nom
            <input className="field" id="name" name="name" autoComplete="name" required maxLength={100} value={form.name} onChange={update('name')} />
          </label>
          <label className="grid gap-2 text-sm font-medium" htmlFor="email">
            E-mail
            <input className="field" id="email" name="email" type="email" autoComplete="email" required maxLength={200} value={form.email} onChange={update('email')} />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium" htmlFor="company">
            <span>
              Entreprise <span className="font-normal text-muted">(facultatif)</span>
            </span>
            <input className="field" id="company" name="company" autoComplete="organization" maxLength={150} value={form.company} onChange={update('company')} />
          </label>
          <label className="grid gap-2 text-sm font-medium" htmlFor="projectType">
            Type de projet
            <select className="field" id="projectType" name="projectType" value={form.projectType} onChange={update('projectType')}>
              {projectTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium" htmlFor="message">
          Votre projet
          <textarea
            className="field min-h-40 resize-y py-3"
            id="message"
            name="message"
            required
            maxLength={5000}
            placeholder="Votre activité, vos objectifs, vos délais…"
            value={form.message}
            onChange={update('message')}
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted" role="status" aria-live="polite">
            {status === 'success' && 'Merci, votre message est bien envoyé. Nous vous répondons rapidement.'}
            {status === 'error' && `${error}. Vous pouvez aussi nous écrire directement par e-mail.`}
          </p>
          <button
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-plum px-6 font-medium text-paper transition-colors hover:bg-plum/90 disabled:opacity-60"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Envoi…' : 'Envoyer'}
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
      </form>
    </section>
  );
}
