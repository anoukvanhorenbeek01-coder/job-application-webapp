import { contactInfo } from '../data/content';
import { theme } from '../config/theme';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-[#dadce0] px-5 py-12 sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.colors.surface, color: theme.colors.text }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase text-[#1a73e8]">Contact</p>
          <div className="mt-4 space-y-2 text-base leading-7 text-[#5f6368]">
            <p>
              <a href={`tel:${contactInfo.phone}`} className="hover:text-[#1a73e8] hover:underline">
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-[#1a73e8] hover:underline">
                {contactInfo.email}
              </a>
            </p>
            <p>{contactInfo.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {contactInfo.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-[#dadce0] bg-[#f8fafd] px-5 py-3 text-sm font-medium text-[#202124] transition hover:border-[#1a73e8] hover:bg-white hover:text-[#1a73e8]"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
