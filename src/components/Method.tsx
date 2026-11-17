import { commitments, steps } from '../content';
import { SectionIntro } from './SectionIntro';

export function Method() {
  return (
    <section id="methode" className="bg-plum-soft" aria-labelledby="methode-titre">
      <div className="container-site grid gap-14 py-16 lg:py-24">
        <SectionIntro
          id="methode-titre"
          eyebrow="Méthode"
          title={
            <>
              Un projet clair, <em className="text-plum">étape par étape</em>.
            </>
          }
        >
          Pas de surprise en cours de route : vous validez chaque étape avant de passer à la suivante.
        </SectionIntro>

        <ol className="grid gap-px overflow-hidden rounded-3xl border border-plum/15 bg-plum/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="grid content-start gap-3 bg-paper p-7">
              <span className="font-serif text-4xl italic text-plum">{index + 1}</span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-[15px] text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="grid gap-8 border-t border-plum/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => (
            <div key={item.title} className="grid content-start gap-2">
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="text-[15px] text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
