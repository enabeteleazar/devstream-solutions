import { ArrowUpRight } from 'lucide-react';
import { projects } from '../content';
import { SectionIntro } from './SectionIntro';

export function Work() {
  return (
    <section id="projets" className="container-site grid gap-12 py-16 lg:py-24" aria-labelledby="projets-titre">
      <SectionIntro id="projets-titre" eyebrow="Projets" title={<>Des projets <em className="text-plum">concrets</em>, en ligne.</>}>
        Sites vitrines, applications de réservation, tableaux de bord : quelques réalisations récentes.
      </SectionIntro>

      <ul className="grid">
        {projects.map((project) => (
          <li key={project.name} className="border-b border-line first:border-t">
            <article className="grid gap-4 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)_auto] md:gap-10">
              <div className="grid content-start gap-1">
                <p className="eyebrow">{project.kind}</p>
                <h3 className="font-serif text-3xl tracking-tight">{project.name}</h3>
                <p className="text-sm text-muted">{project.client}</p>
              </div>
              <div className="grid content-start gap-4">
                <p className="text-muted">{project.summary}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {project.url && (
                <a
                  className="inline-flex items-center gap-1.5 self-start text-[15px] font-medium text-plum hover:underline md:justify-self-end"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir le projet
                  <ArrowUpRight size={16} aria-hidden="true" />
                  <span className="sr-only">{project.name} (nouvel onglet)</span>
                </a>
              )}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
