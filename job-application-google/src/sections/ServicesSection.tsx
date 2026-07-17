import { companyProfile, serviceItems } from '../data/content';
import { theme } from '../config/theme';

const accentColors = ['#4285f4', '#ea4335', '#fbbc04', '#34a853', '#1a73e8'];

export function ServicesSection() {
  return (
    <section
      className="border-b border-[#dadce0] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      style={{ backgroundColor: theme.colors.surface, color: theme.colors.text }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase text-[#1a73e8]">
              {companyProfile.shortName} fit
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
              Product marketing skills for connecting technology to people.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#5f6368]">
            The APMM role sits between user insight, launch execution, product understanding, and cross-functional communication. These are the muscles from my CV that already point in that direction.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {serviceItems.map((service, index) => (
            <article key={service.title} className="rounded-[24px] border border-[#dadce0] bg-[#f8fafd] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
              <span
                className="block h-1.5 w-12 rounded-full"
                style={{ backgroundColor: accentColors[index % accentColors.length] }}
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight text-[#202124]">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#5f6368]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
