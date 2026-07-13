import { cvHighlights, companyProfile } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';

export function HighlightsSection() {
  return (
    <section id="experience" className="bg-white px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading eyebrow={`CV highlights for ${companyProfile.shortName}`} title="Experience in brand, communication, AI, and international storytelling." />
          <p className="max-w-2xl text-base leading-7 text-neutral-700 lg:justify-self-end">
            Selected moments from my CV, ordered around what matters for a product communications role: clear writing, sharp positioning, campaign execution, and calm ownership.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cvHighlights.map((item) => (
            <article key={item.title} className="min-h-72 rounded-[1.5rem] bg-[#f5f5f2] p-7">
              <p className="mb-5 min-h-10 text-sm font-medium leading-5 text-neutral-500">
                {item.meta}
              </p>
              <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
              <p className="mt-5 leading-7 text-neutral-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
