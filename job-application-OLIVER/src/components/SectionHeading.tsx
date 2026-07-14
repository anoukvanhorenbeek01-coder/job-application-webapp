interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em]">{eyebrow}</p>
      <h2 className="text-2xl font-black uppercase leading-none tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
