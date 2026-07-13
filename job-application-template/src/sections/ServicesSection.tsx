import { companyProfile, serviceItems } from '../data/content';
import { theme } from '../config/theme';

export function ServicesSection() {
  return (
    <section className="border-b border-black px-5 py-16 sm:px-8 lg:px-12" style={{ backgroundColor: theme.colors.primary, color: theme.colors.inverted }}>
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em]">
          {companyProfile.shortName} focus
        </p>
        <div className="mt-8 grid gap-px overflow-hidden border border-[#f7f4ee] bg-[#f7f4ee] md:grid-cols-5">
          {serviceItems.map((service) => (
            <div key={service.title} className="flex min-h-28 items-center justify-center bg-black p-5 text-center">
              <p className="text-lg font-black uppercase leading-tight">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
