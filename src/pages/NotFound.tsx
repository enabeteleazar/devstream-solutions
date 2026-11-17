import { Button } from '../components/Button';

export function NotFound() {
  return (
    <main id="contenu" tabIndex={-1} className="container-site grid content-center justify-items-start gap-6 py-24 lg:py-32">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">Cette page n’existe pas.</h1>
      <p className="max-w-[52ch] text-muted">
        L’adresse est peut-être erronée, ou la page a été déplacée. Revenez à l’accueil pour découvrir nos services et nos projets.
      </p>
      <Button href="/">Retour à l’accueil</Button>
    </main>
  );
}
