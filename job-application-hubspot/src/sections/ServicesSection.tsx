import { companyProfile, serviceItems } from '../data/content';
import { theme } from '../config/theme';

export function ServicesSection() {
  return (
    <section
      className="border-b border-[#dbe4ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      style={{ backgroundColor: theme.colors.secondary, color: theme.colors.inverted }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffcec2]">
              {companyProfile.shortName} fit
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-none sm:text-5xl">
              Marketing energy for the customer platform era.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/75">
            HubSpot connects marketing, sales, service, content, data, CRM, and AI. These are
            the ways my experience can plug into a team focused on helping customers grow better.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {serviceItems.map((service, index) => (
            <article key={service.title} className="rounded-lg border border-white/15 bg-white/10 p-5">
              <p className="text-sm font-black text-[#ffcec2]">0{index + 1}</p>
              <h3 className="mt-8 text-2xl font-black leading-tight">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/70">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
