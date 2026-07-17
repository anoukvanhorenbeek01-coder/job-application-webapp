import { cvHighlights, companyProfile } from '../data/content';
import { theme } from '../config/theme';
import { SectionHeading } from '../components/SectionHeading';

const borderColors = ['#4285f4', '#ea4335', '#fbbc04', '#34a853'];

export function HighlightsSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24" style={{ backgroundColor: theme.colors.background }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading eyebrow={`CV highlights for ${companyProfile.shortName}`} title="Experience that supports insight, launches, and adoption." />
          <p className="max-w-2xl text-lg leading-8 text-[#5f6368]">
            Google product marketing starts with the user and ends with useful technology. My experience is rooted in communication, but it already touches campaigns, content, AI quality, market nuance, and organized delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cvHighlights.map((item, index) => (
            <article key={item.title} className="rounded-[28px] border border-[#dadce0] bg-white p-6 shadow-sm">
              <div
                className="mb-5 h-1.5 w-16 rounded-full"
                style={{ backgroundColor: borderColors[index % borderColors.length] }}
              />
              {item.meta ? (
                <p className="text-xs font-semibold uppercase text-[#5f6368]">{item.meta}</p>
              ) : null}
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#202124]">{item.title}</h3>
              <p className="mt-5 leading-7 text-[#5f6368]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
