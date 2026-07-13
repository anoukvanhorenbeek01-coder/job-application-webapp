import { contactInfo } from '../data/content';

export function ContactSection() {
  return (
    <section className="bg-[#050505] px-5 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-medium text-neutral-400">Contact</p>
          <h2 className="mt-4 max-w-4xl text-[2.35rem] font-semibold leading-none sm:text-[4rem]">
            Ready to bring the story into the product.
          </h2>
        </div>
        <div className="space-y-2 text-base leading-7 text-neutral-300 lg:justify-self-end lg:text-right">
          <p>
            <a href={`tel:${contactInfo.phone.replaceAll(' ', '')}`} className="hover:underline">
              {contactInfo.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">
              {contactInfo.email}
            </a>
          </p>
          <p>{contactInfo.location}</p>
          <div className="flex flex-wrap gap-4 pt-2 lg:justify-end">
            {contactInfo.socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="font-semibold text-white hover:underline" target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
