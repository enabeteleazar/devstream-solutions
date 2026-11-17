import { company, navItems } from '../content';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="grid content-start gap-3">
          <Logo />
          <p className="max-w-[36ch] text-[15px] text-muted">
            {company.tagline}. Sites web, plateformes SaaS et applications web sur mesure.
          </p>
        </div>
        <nav aria-label="Pied de page">
          <ul className="grid gap-2 text-[15px] text-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="hover:text-ink" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid content-start gap-2 text-[15px] text-muted">
          <a className="hover:text-ink" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <p>{company.area}</p>
          <a className="hover:text-ink" href="/mentions-legales">
            Mentions légales
          </a>
        </div>
      </div>
      <div className="container-site border-t border-line py-6 text-sm text-muted">
        © {new Date().getFullYear()} {company.name}
      </div>
    </footer>
  );
}
