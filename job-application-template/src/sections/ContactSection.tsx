import { contactInfo } from '../data/content';
import { theme } from '../config/theme';

export function ContactSection() {
  return (
    <section className="border-t px-5 py-12 sm:px-8 lg:px-12" style={{ backgroundColor: theme.colors.primary, color: theme.colors.inverted, borderColor: theme.colors.inverted }}>
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em]">Contact</p>
        <div className="mt-4 space-y-2 text-base leading-7">
          <p>
            <a href={`tel:${contactInfo.phone}`} className="hover:underline">
              {contactInfo.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">
              {contactInfo.email}
            </a>
          </p>
          <p>{contactInfo.location}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            {contactInfo.socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:underline" target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
