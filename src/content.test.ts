import { describe, expect, it } from 'vitest';
import { company, faq, navItems, projects, services, steps } from './content';

describe('contenu du site', () => {
  it('a des services complets et uniques', () => {
    expect(services).toHaveLength(3);
    expect(new Set(services.map((s) => s.id)).size).toBe(services.length);
    services.forEach((s) => expect(s.deliverables.length).toBeGreaterThan(0));
  });

  it('a des projets avec des liens valides', () => {
    projects.forEach((p) => {
      expect(p.name.length).toBeGreaterThan(0);
      if (p.url) expect(() => new URL(p.url as string)).not.toThrow();
    });
  });

  it('pointe la navigation vers des sections existantes', () => {
    const ids = ['services', 'projets', 'methode', 'faq', 'contact'];
    navItems.forEach((item) => expect(ids).toContain(item.href.replace('/#', '')));
  });

  it('a une méthode, une FAQ et un e-mail', () => {
    expect(steps.length).toBeGreaterThan(0);
    expect(faq.length).toBeGreaterThan(0);
    expect(company.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});
