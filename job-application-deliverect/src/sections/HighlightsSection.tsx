import { cvHighlights, companyProfile } from '../data/content';
import { theme } from '../config/theme';
import { SectionHeading } from '../components/SectionHeading';

export function HighlightsSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24" style={{ backgroundColor: theme.colors.background }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading eyebrow={`CV highlights for ${companyProfile.shortName}`} title="Experience that can support positioning, launches, and adoption." />
          <p className="max-w-2xl text-lg leading-8 text-[#506257]">
            A Product Marketing Manager needs to turn product value into customer-ready messages and internally useful assets. My experience starts from communication, but it is already close to campaigns, content, customer understanding, and structured execution.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cvHighlights.map((item, index) => (
            <article key={item.title} className={`rounded-3xl border border-[#c8dacd] p-6 shadow-sm ${
              index === 1 || index === 4 ? 'bg-[#e8f54a]' : 'bg-white'
            }`}>
              <div className="flex items-start justify-between gap-4 border-b border-[#c8dacd] pb-5">
                <div>
                  {item.meta ? (
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#506257]">{item.meta}</p>
                  ) : null}
                  <h3 className="mt-3 text-2xl font-black leading-none text-[#123b2a]">{item.title}</h3>
                </div>
                <span className="shrink-0 rounded-full bg-[#123b2a] px-3 py-1 text-xs font-black text-white">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-5 leading-7 text-[#506257]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
