interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase text-[#1a73e8]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-[#202124] sm:text-5xl">{title}</h2>
    </div>
  );
}
