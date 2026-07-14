import { companyProfile, serviceItems } from '../data/content';
import { theme } from '../config/theme';

export function ServicesSection() {
  return (
    <section
      className="border-b-2 border-black px-4 py-16 sm:px-6 lg:px-10"
      style={{ backgroundColor: theme.colors.primary, color: theme.colors.inverted }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em]">{companyProfile.shortName} fit</p>
            <h2 className="mt-4 max-w-xl text-3xl font-black uppercase leading-none sm:text-5xl">
              Built for a team inside the brand.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/80">
            OLIVER's model is about being close enough to the business to make sharper, faster,
            more relevant work. These are the areas where my CV already connects to that rhythm.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border-2 border-[#f5f0e8] bg-[#f5f0e8] md:grid-cols-5">
          {serviceItems.map((service, index) => (
            <article key={service.title} className="min-h-56 bg-black p-5">
              <p className="text-sm font-black text-[#ffd500]">0{index + 1}</p>
              <h3 className="mt-8 text-xl font-black uppercase leading-tight">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/75">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
