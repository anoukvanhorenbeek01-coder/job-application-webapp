import { contactInfo } from '../data/content';
import { theme } from '../config/theme';

export function ContactSection() {
  return (
    <section
      className="border-t-2 border-black px-4 py-10 sm:px-6 lg:px-10"
      style={{ backgroundColor: theme.colors.accent, color: theme.colors.text }}
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em]">Contact</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-none">Ready to talk content.</h2>
        </div>
        <div className="grid gap-px overflow-hidden border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-[1.05fr_1.5fr_0.75fr_0.95fr]">
          <a
            href={`tel:${contactInfo.phone}`}
            className="bg-[#ffd500] p-4 text-sm font-black uppercase break-all hover:bg-white xl:text-base"
          >
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="bg-[#ffd500] p-4 text-sm font-black uppercase break-all hover:bg-white xl:text-base"
          >
            {contactInfo.email}
          </a>
          <p className="bg-[#ffd500] p-4 font-black uppercase">{contactInfo.location}</p>
          <div className="flex bg-[#ffd500]">
            {contactInfo.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-1 items-center justify-center border-r border-black p-4 font-black uppercase last:border-r-0 hover:bg-white"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
