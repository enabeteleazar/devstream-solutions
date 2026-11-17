import { useEffect } from 'react';
import { company } from '../content';

// Les éléments entre crochets sont à compléter avec les informations officielles de l'entreprise.
const sections = [
  {
    title: 'Éditeur du site',
    lines: [
      company.name,
      'Forme juridique : [à compléter]',
      'SIRET : [à compléter]',
      'Adresse : [à compléter]',
      `Responsable de la publication : ${company.founder}`,
      `Contact : ${company.email}`,
    ],
  },
  {
    title: 'Hébergement',
    lines: ['Vercel Inc.', '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis', 'vercel.com'],
  },
  {
    title: 'Données personnelles',
    lines: [
      'Les informations envoyées via le formulaire de contact (nom, e-mail, entreprise, message) servent uniquement à répondre à votre demande. Elles sont transmises par e-mail et ne sont ni revendues ni utilisées à des fins publicitaires.',
      `Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à ${company.email}.`,
    ],
  },
  {
    title: 'Cookies',
    lines: ['Ce site n’utilise pas de cookies publicitaires ni d’outil de suivi.'],
  },
  {
    title: 'Propriété intellectuelle',
    lines: [`Les textes et éléments graphiques de ce site sont la propriété de ${company.name}, sauf mention contraire.`],
  },
];

export function Legal() {
  useEffect(() => {
    document.title = `Mentions légales | ${company.name}`;
  }, []);

  return (
    <main id="contenu" tabIndex={-1} className="container-site grid gap-12 py-16 lg:py-24">
      <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">Mentions légales</h1>
      <div className="grid max-w-[68ch] gap-10">
        {sections.map((section) => (
          <section key={section.title} className="grid gap-3 border-t border-line pt-6">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            {section.lines.map((line) => (
              <p key={line} className="text-muted">
                {line}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
