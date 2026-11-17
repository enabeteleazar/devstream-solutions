import { Contact } from '../components/Contact';
import { Faq } from '../components/Faq';
import { Hero } from '../components/Hero';
import { Method } from '../components/Method';
import { Services } from '../components/Services';
import { Work } from '../components/Work';

export function Home() {
  return (
    <main id="contenu" tabIndex={-1}>
      <Hero />
      <Services />
      <Work />
      <Method />
      <Faq />
      <Contact />
    </main>
  );
}
