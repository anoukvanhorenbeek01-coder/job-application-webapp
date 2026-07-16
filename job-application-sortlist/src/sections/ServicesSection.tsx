import { companyProfile, serviceItems } from '../data/content';
import { theme } from '../config/theme';

export function ServicesSection() {
  return (
    <section className="px-5 py-18 sm:px-8 lg:px-12" style={{ backgroundColor: theme.colors.surface }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7a8391]">
              {companyProfile.shortName} focus
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Where my marketing profile plugs into the marketplace.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#5b6270]">
            Sortlist sits between companies looking for the right partner and agencies looking for qualified growth.
            My CV adds communication range on both sides of that match.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {serviceItems.map((service, index) => (
            <article
              key={service.title}
              className="flex min-h-72 flex-col justify-between rounded-[24px] border border-[#d8ded0] bg-[#f4f7ff] p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2f5bff] text-sm font-black text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-xl font-black leading-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b6270]">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
