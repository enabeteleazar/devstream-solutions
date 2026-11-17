import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Legal } from './pages/Legal';

export function App() {
  const path = window.location.pathname.replace(/\/+$/, '');
  const isLegal = path === '/mentions-legales';

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-plum focus:px-4 focus:py-2 focus:font-semibold focus:text-paper"
        href="#contenu"
      >
        Aller au contenu
      </a>
      <Header />
      {isLegal ? <Legal /> : <Home />}
      <Footer />
    </>
  );
}
