import { useState } from 'react';
import { companyProfile, personalInfo, skills } from '../data/content';
import { theme } from '../config/theme';

const leadSignals = [
  { label: 'Marketing profile', value: 'Brand + content + PR' },
  { label: 'Market fit', value: 'Belgium to Madrid' },
  { label: 'Intent', value: 'Spontaneous application' },
];

export function HeroSection() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [showCompanySummary, setShowCompanySummary] = useState(false);

  return (
    <section
      className="min-h-screen px-5 py-5 sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#d8ded0] bg-white px-4 py-3 shadow-[0_18px_50px_rgba(16,17,20,0.06)]">
        <div className="flex items-center gap-3">
          <img src={theme.branding.logoPath} alt={companyProfile.logoAlt} className="h-9 w-9 rounded-full" />
          <div className="leading-tight">
            <span className="block text-sm font-black">{personalInfo.name}</span>
            <span className="block text-xs font-bold text-[#7a8391]">{companyProfile.shortName} application</span>
          </div>
        </div>
        <div className="hidden items-center gap-7 text-sm font-semibold text-[#5b6270] md:flex">
          <span>Find providers</span>
          <span>Get clients</span>
          <span>Resources</span>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-[#101114] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#2a2d34]"
        >
          Contact
        </a>
      </nav>

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#eaf0ff] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#173a8a]">
            {personalInfo.role}
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
            {personalInfo.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5663]">{personalInfo.summary}</p>

          <div className="mt-8 rounded-[28px] border border-[#d8ded0] bg-white p-3 shadow-[0_20px_70px_rgba(16,17,20,0.08)]">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex min-h-14 flex-1 items-center rounded-full bg-[#f5f7ef] px-5 text-sm font-semibold text-[#5b6270]">
                What service?
                <span className="ml-2 font-black text-[#101114]">Marketing</span>
              </div>
              <div className="flex min-h-14 flex-1 items-center rounded-full bg-[#f5f7ef] px-5 text-sm font-semibold text-[#5b6270]">
                Where?
                <span className="ml-2 font-black text-[#101114]">{personalInfo.location}</span>
              </div>
              <a
                href="#experience"
                className="flex min-h-14 items-center justify-center rounded-full bg-[#2f5bff] px-6 text-sm font-black text-white transition hover:bg-[#2448d8]"
              >
                Match profile
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {leadSignals.map((signal) => (
              <div key={signal.label} className="rounded-2xl border border-[#d8ded0] bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7a8391]">{signal.label}</p>
                <p className="mt-2 text-base font-black">{signal.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-[32px] border border-[#d8ded0] bg-white p-5 shadow-[0_22px_80px_rgba(16,17,20,0.10)]">
            <button
              onClick={() => setShowCompanySummary(!showCompanySummary)}
              className="flex w-full items-center gap-5 rounded-[24px] border border-[#d8ded0] bg-[#f4f7ff] p-5 text-left transition hover:border-[#2f5bff]"
              aria-expanded={showCompanySummary}
            >
              <span className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-[22px] shadow-[0_16px_40px_rgba(16,17,20,0.07)]">
                <img src={theme.branding.logoPath} alt={companyProfile.logoAlt} className="h-full w-full object-cover" />
              </span>
              <span>
                <span className="block text-xs font-black uppercase tracking-[0.18em] text-[#7a8391]">
                  Click logo
                </span>
                <span className="mt-2 block text-3xl font-black">{companyProfile.name}</span>
                <span className="mt-2 block text-sm leading-6 text-[#5b6270]">{companyProfile.summaryPrompt}</span>
              </span>
            </button>

            <div className="mt-5 rounded-[24px] bg-[#101114] p-5 text-white">
              {showCompanySummary ? (
                <div className="space-y-4 text-sm leading-6">
                  <p>
                    <span className="font-black text-[#8fa5ff]">Mission: </span>
                    {companyProfile.mission}
                  </p>
                  <p>
                    <span className="font-black text-[#8fa5ff]">Vision: </span>
                    {companyProfile.vision}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8fa5ff]">Live match preview</p>
                  <p className="mt-3 text-2xl font-black">Anouk could support marketplace marketing, content, and trust-building stories.</p>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#d8ded0] bg-white p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7a8391]">Values I can add</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <button
                  key={skill.keyword}
                  onClick={() => setSelectedSkill(skill)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    selectedSkill.keyword === skill.keyword
                      ? 'border-[#101114] bg-[#101114] text-white'
                      : 'border-[#d8ded0] bg-white text-[#101114] hover:border-[#2f5bff]'
                  }`}
                >
                  {skill.keyword}
                </button>
              ))}
            </div>
            <div className="mt-5 rounded-[24px] bg-[#eaf0ff] p-5">
              <p className="text-2xl font-black">{selectedSkill.keyword}</p>
              <p className="mt-3 leading-7 text-[#23396f]">{selectedSkill.explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
