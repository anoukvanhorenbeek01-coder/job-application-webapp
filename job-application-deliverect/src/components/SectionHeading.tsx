interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-black uppercase tracking-[0.26em] text-[#29c56f]">{eyebrow}</p>
      <h2 className="max-w-4xl text-3xl font-black leading-[1.02] text-[#123b2a] sm:text-5xl">{title}</h2>
    </div>
  );
}
