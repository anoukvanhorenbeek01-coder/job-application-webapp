interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-neutral-500">{eyebrow}</p>
      <h2 className="max-w-3xl text-[2.35rem] font-semibold leading-none tracking-normal sm:text-[4rem]">{title}</h2>
    </div>
  );
}
