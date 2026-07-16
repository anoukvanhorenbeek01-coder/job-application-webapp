import { cvHighlights, companyProfile } from '../data/content';
import { theme } from '../config/theme';

export function HighlightsSection() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 lg:px-12" style={{ backgroundColor: theme.colors.background }}>
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[36px] bg-[#101114] p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8fa5ff]">
                CV highlights for {companyProfile.shortName}
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                Experience signals behind the application.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#dce2d2]">
              A compact view of the proof points Sortlist could read like a qualified profile:
              marketing execution, editorial clarity, international context, and structured follow-through.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {cvHighlights.map((item) => (
              <article key={item.title} className="rounded-[26px] border border-white/12 bg-white p-5 text-[#101114]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#7a8391]">{item.meta}</p>
                    <h3 className="mt-3 text-2xl font-black leading-tight">{item.title}</h3>
                  </div>
                  <span className="rounded-full bg-[#eaf0ff] px-3 py-1 text-xs font-black text-[#173a8a]">Verified</span>
                </div>
                <p className="mt-5 leading-7 text-[#4f5663]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
