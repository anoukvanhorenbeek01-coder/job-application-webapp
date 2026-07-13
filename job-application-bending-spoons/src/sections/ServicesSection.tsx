import { companyProfile, serviceItems } from '../data/content';

export function ServicesSection() {
  return (
    <section className="bg-[#050505] px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h2 className="text-[2.5rem] font-semibold leading-none tracking-normal sm:text-[4rem]">
            Useful from day one
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-neutral-300 lg:justify-self-end">
            A communication profile shaped for {companyProfile.shortName}: editorial judgement, brand energy, AI curiosity, and international range.
          </p>
        </div>
        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {serviceItems.map((service) => (
            <div key={service.title} className="flex min-h-32 items-end rounded-[1.25rem] bg-[#1a1a1a] p-5">
              <p className="text-xl font-semibold leading-tight">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
