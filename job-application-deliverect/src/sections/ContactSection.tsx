import { contactInfo } from '../data/content';
import { theme } from '../config/theme';

export function ContactSection() {
  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12" style={{ backgroundColor: theme.colors.primary, color: theme.colors.inverted }}>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#e8f54a]">Contact</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-black leading-none sm:text-5xl">
            Ready to talk product, customers, and clear messaging.
          </h2>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-base leading-7">
          <a href={`tel:${contactInfo.phone}`} className="block hover:underline">
            {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="mt-2 block hover:underline">
            {contactInfo.email}
          </a>
          <p className="mt-2">{contactInfo.location}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {contactInfo.socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="rounded-full bg-white px-5 py-2 font-black text-[#123b2a] transition hover:bg-[#e8f54a]" target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
