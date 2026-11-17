import { Plus } from 'lucide-react';
import { faq } from '../content';
import { SectionIntro } from './SectionIntro';

export function Faq() {
  return (
    <section id="faq" className="container-site grid gap-12 py-16 lg:py-24" aria-labelledby="faq-titre">
      <SectionIntro id="faq-titre" eyebrow="Questions fréquentes" title="Ce que l’on nous demande souvent." />

      <div className="grid border-t border-line lg:ml-[calc(50%+1.5rem)]">
        {faq.map((item) => (
          <details key={item.q} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus className="size-5 shrink-0 text-plum transition-transform group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="max-w-[60ch] pb-6 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
