interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ff5c35]">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-none tracking-normal text-[#213343] sm:text-5xl">{title}</h2>
    </div>
  );
}
