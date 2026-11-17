import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems } from '../content';
import { Button } from './Button';
import { Logo } from './Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur-md">
      <nav className="container-site flex h-[4.5rem] items-center justify-between gap-6" aria-label="Navigation principale">
        <Logo />

        <ul className="hidden items-center gap-8 text-[15px] text-muted md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="transition-colors hover:text-ink" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="/#contact" className="hidden md:inline-flex">
          Nous écrire
        </Button>

        <button
          className="inline-flex size-11 items-center justify-center rounded-full border border-line md:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div id="menu-mobile" className="border-t border-line bg-paper md:hidden">
          <ul className="container-site grid gap-1 py-4">
            {[...navItems, { href: '/#contact', label: 'Contact' }].map((item) => (
              <li key={item.href}>
                <a className="block rounded-xl px-3 py-3 text-lg hover:bg-plum-soft" href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
