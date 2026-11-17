import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="container-site grid gap-12 pb-16 pt-16 sm:pt-24 lg:pb-20">
      <h1 className="max-w-[13ch] font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.025em]">
        Votre activité mérite un site <em className="text-plum">à sa hauteur</em>.
      </h1>

      <div className="flex flex-col justify-between gap-8 border-t border-line pt-8 lg:flex-row lg:items-end">
        <p className="max-w-[48ch] text-lg text-muted sm:text-xl">
          DevStream Solutions est un studio de développement web. Nous créons des sites, des plateformes SaaS et des
          applications sur mesure, avec le même soin pour le design que pour le code.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#contact">
            Démarrer un projet
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
          <Button href="#projets" variant="ghost">
            Voir nos projets
          </Button>
        </div>
      </div>
    </section>
  );
}
