import { cvHighlights, companyProfile } from '../data/content';
import { theme } from '../config/theme';
import { SectionHeading } from '../components/SectionHeading';

export function HighlightsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24" style={{ backgroundColor: theme.colors.background }}>
      <div className="mx-auto max-w-7xl">
        <div className="border-2 border-black bg-white p-5 sm:p-8">
          <SectionHeading
            eyebrow={`CV highlights for ${companyProfile.shortName}`}
            title="Experience that can turn into content, community, and brand momentum."
          />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {cvHighlights.map((item, index) => (
            <article
              key={item.title}
              className={`border-2 border-black p-5 sm:p-7 ${
                index % 3 === 1 ? 'bg-[#ffd500]' : index % 3 === 2 ? 'bg-black text-[#f5f0e8]' : 'bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-4 border-b border-current pb-5">
                <div>
                  {item.meta ? (
                    <p className="text-xs font-black uppercase tracking-[0.22em] opacity-75">{item.meta}</p>
                  ) : null}
                  <h3 className="mt-3 text-2xl font-black uppercase leading-none sm:text-3xl">{item.title}</h3>
                </div>
                <span className="shrink-0 text-sm font-black">0{index + 1}</span>
              </div>
              <p className="mt-5 text-base leading-7">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
