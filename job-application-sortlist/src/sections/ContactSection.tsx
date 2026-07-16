import { contactInfo, personalInfo } from '../data/content';
import { theme } from '../config/theme';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 py-14 sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.colors.surface, color: theme.colors.text }}
    >
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#d8ded0] bg-[#f4f7ff] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7a8391]">Contact</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">Ready to talk marketing at Sortlist.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5b6270]">{personalInfo.summary}</p>
          </div>

          <div className="rounded-[26px] bg-white p-5 shadow-[0_18px_50px_rgba(16,17,20,0.06)]">
            <div className="grid gap-3 text-base font-semibold">
              <a href={`tel:${contactInfo.phone}`} className="rounded-2xl bg-[#f4f7ff] p-4 hover:bg-[#eaf0ff]">
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="rounded-2xl bg-[#f4f7ff] p-4 hover:bg-[#eaf0ff]">
                {contactInfo.email}
              </a>
              <p className="rounded-2xl bg-[#f4f7ff] p-4">{contactInfo.location}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {contactInfo.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full bg-[#101114] px-5 py-3 text-sm font-black text-white hover:bg-[#2a2d34]"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
