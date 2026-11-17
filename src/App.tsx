import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { company } from './content';
import { Home } from './pages/Home';
import { Legal } from './pages/Legal';
import { NotFound } from './pages/NotFound';

const routes: Record<string, () => JSX.Element> = {
  '': Home,
  '/mentions-legales': Legal,
};

// Met à jour la balise canonique et indique aux moteurs de ne pas indexer les pages introuvables.
function usePageMeta(path: string, found: boolean) {
  useEffect(() => {
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = `${company.url}${path || '/'}`;

    if (!found) {
      document.title = `Page introuvable | ${company.name}`;
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'noindex';
      document.head.appendChild(robots);
      return () => robots.remove();
    }
  }, [path, found]);
}

export function App() {
  const path = window.location.pathname.replace(/\/+$/, '');
  const Page = routes[path] ?? NotFound;
  usePageMeta(path, Page !== NotFound);

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-plum focus:px-4 focus:py-2 focus:font-semibold focus:text-paper"
        href="#contenu"
      >
        Aller au contenu
      </a>
      <Header />
      <Page />
      <Footer />
    </>
  );
}
