import { Check } from 'lucide-react';
import { services } from '../content';
import { SectionIntro } from './SectionIntro';

export function Services() {
  return (
    <section id="services" className="container-site grid gap-12 py-16 lg:py-24" aria-labelledby="services-titre">
      <SectionIntro id="services-titre" eyebrow="Savoir-faire" title="Trois métiers, une même exigence.">
        Que vous ayez besoin d’être visible, de lancer un produit ou d’outiller vos équipes, nous prenons en charge le
        projet de bout en bout.
      </SectionIntro>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.id} className="flex flex-col gap-4 rounded-3xl bg-plum-soft p-7 sm:p-8">
            <p className="font-serif text-xl italic text-plum">{service.kicker}</p>
            <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
            <p className="text-muted">{service.text}</p>
            <ul className="mt-auto grid gap-2.5 border-t border-plum/15 pt-5 text-[15px]">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check className="mt-1 size-4 shrink-0 text-plum" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
