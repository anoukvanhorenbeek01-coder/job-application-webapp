import { cvHighlights, companyProfile } from '../data/content';
import { theme } from '../config/theme';
import { SectionHeading } from '../components/SectionHeading';

export function HighlightsSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12" style={{ backgroundColor: theme.colors.background }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-black pb-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow={`CV highlights for ${companyProfile.shortName}`} title="Experience in brand, communication, and strategy." />
        </div>

        <div className="grid border-l border-black md:grid-cols-2 lg:grid-cols-3">
          {cvHighlights.map((item) => (
            <article key={item.title} className="border-b border-r border-black p-6">
              <h3 className="text-2xl font-black uppercase leading-none">{item.title}</h3>
              <p className="mt-5 leading-7">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
