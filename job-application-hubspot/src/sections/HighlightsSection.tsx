import { cvHighlights, companyProfile } from '../data/content';
import { theme } from '../config/theme';
import { SectionHeading } from '../components/SectionHeading';

export function HighlightsSection() {
  return (
    <section
      className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow={`CV highlights for ${companyProfile.shortName}`}
            title="Experience that supports useful, customer-first marketing."
          />
          <p className="max-w-2xl text-lg leading-8 text-[#516f90]">
            My CV is rooted in communication, but the through-line is very HubSpot: listen
            closely, make information helpful, connect content to real needs, and keep the work
            organised enough to scale.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cvHighlights.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-lg border border-[#dbe4ed] p-6 shadow-sm ${
                index === 2 || index === 3 ? 'bg-[#ffebe6]' : 'bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#dbe4ed] pb-5">
                <div>
                  {item.meta ? (
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#516f90]">
                      {item.meta}
                    </p>
                  ) : null}
                  <h3 className="mt-3 text-2xl font-black leading-none text-[#213343]">
                    {item.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded-lg bg-[#ff5c35] px-3 py-1 text-xs font-black text-white">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-5 leading-7 text-[#516f90]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
