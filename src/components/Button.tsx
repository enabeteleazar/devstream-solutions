import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
};

const variants = {
  primary: 'bg-plum text-paper hover:bg-plum/90',
  ghost: 'border border-line text-ink hover:border-ink/40',
};

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-[15px] font-medium transition-colors ${variants[variant]} ${className}`}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
