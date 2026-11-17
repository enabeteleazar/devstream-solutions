import type { ReactNode } from 'react';

type SectionIntroProps = {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  id?: string;
};

export function SectionIntro({ eyebrow, title, children, id }: SectionIntroProps) {
  return (
    <div className="grid gap-6 border-t border-line pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
      <div className="grid gap-4">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          {title}
        </h2>
      </div>
      {children && <p className="max-w-[52ch] self-end text-lg text-muted">{children}</p>}
    </div>
  );
}
