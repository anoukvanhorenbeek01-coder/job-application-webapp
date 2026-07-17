import { contactInfo } from '../data/content';
import { theme } from '../config/theme';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-[#dbe4ed] px-5 py-12 sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.colors.surface, color: theme.colors.text }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-[#213343] p-6 text-white sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffcec2]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black leading-none">
            Ready to grow better together.
          </h2>
        </div>
        <div className="grid gap-3 text-base leading-7 sm:grid-cols-2">
          <a href={`tel:${contactInfo.phone}`} className="rounded-lg bg-white/10 px-4 py-3 hover:bg-white/15">
            {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="rounded-lg bg-white/10 px-4 py-3 hover:bg-white/15">
            {contactInfo.email}
          </a>
          <p className="rounded-lg bg-white/10 px-4 py-3">{contactInfo.location}</p>
          <div className="flex flex-wrap gap-3">
            {contactInfo.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg bg-[#ff5c35] px-4 py-3 font-bold text-white hover:bg-[#e04826]"
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
