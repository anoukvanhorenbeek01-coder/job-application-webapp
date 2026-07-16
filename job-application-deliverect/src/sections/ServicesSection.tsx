import { companyProfile, serviceItems } from '../data/content';
import { theme } from '../config/theme';

export function ServicesSection() {
  return (
    <section className="border-b border-[#c8dacd] px-5 py-16 sm:px-8 lg:px-12 lg:py-24" style={{ backgroundColor: theme.colors.primary, color: theme.colors.inverted }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#e8f54a]">
              {companyProfile.shortName} fit
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-none sm:text-5xl">
              Product marketing for complex platforms, made clear.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/75">
            Deliverect sits between product, operations, data, and commerce. These are the PMM muscles from my CV that already connect to that environment.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {serviceItems.map((service, index) => (
            <article key={service.title} className="rounded-3xl border border-white/15 bg-white/10 p-5">
              <p className="text-sm font-black text-[#e8f54a]">0{index + 1}</p>
              <h3 className="mt-8 text-xl font-black leading-tight">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/70">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
