import { useState } from 'react';
import { companyProfile, personalInfo, skills } from '../data/content';
import { theme } from '../config/theme';

export function HeroSection() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [showCompanySummary, setShowCompanySummary] = useState(false);

  return (
    <section
      className="min-h-screen overflow-hidden border-b border-[#dbe4ed] px-5 py-6 sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-lg border border-[#dbe4ed] bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] shadow-sm">
        <span>{personalInfo.name}</span>
        <div className="flex items-center gap-3">
          <span className="hidden text-[#516f90] sm:inline">{personalInfo.location}</span>
          <a
            href="#contact"
            className="rounded-lg bg-[#ff5c35] px-4 py-2 text-white transition hover:bg-[#e04826]"
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-7xl gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
        <div>
          <p className="mb-5 inline-flex rounded-lg bg-[#ffebe6] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
            {personalInfo.role}
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
            {personalInfo.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#516f90]">
            {personalInfo.summary}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <button
                key={skill.keyword}
                onClick={() => setSelectedSkill(skill)}
                className={`rounded-lg border px-4 py-3 text-left text-sm font-black transition ${
                  selectedSkill.keyword === skill.keyword
                    ? 'border-[#213343] bg-[#213343] text-white shadow-lg shadow-[#213343]/10'
                    : 'border-[#dbe4ed] bg-white text-[#213343] hover:border-[#ff5c35] hover:text-[#ff5c35]'
                }`}
              >
                {skill.keyword}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-4 border border-[#ffcec2]" />
          <div className="relative rounded-lg border border-[#dbe4ed] bg-white p-5 shadow-xl shadow-[#213343]/10 sm:p-7">
            <div className="rounded-lg bg-[#fff7f0] p-6 text-center">
              <button
                onClick={() => setShowCompanySummary(!showCompanySummary)}
                className="mx-auto flex min-h-44 w-full max-w-sm items-center justify-center rounded-lg border border-[#dbe4ed] bg-white px-8 py-10 transition hover:-translate-y-1 hover:border-[#ff5c35] hover:shadow-xl hover:shadow-[#ff5c35]/10"
              >
                <img
                  src={theme.branding.logoPath}
                  alt={companyProfile.logoAlt}
                  className="h-24 w-full object-contain"
                />
              </button>

              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
                  {theme.branding.supportText}
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-normal">
                  {companyProfile.name}
                </h2>
                {showCompanySummary ? (
                  <div className="mt-5 space-y-4 rounded-lg border border-[#dbe4ed] bg-white p-5 text-left text-base leading-7 text-[#516f90]">
                    <p>
                      <span className="font-black text-[#213343]">Mission:</span>{' '}
                      {companyProfile.mission}
                    </p>
                    <p>
                      <span className="font-black text-[#213343]">Vision:</span>{' '}
                      {companyProfile.vision}
                    </p>
                  </div>
                ) : (
                  <p className="mt-5 rounded-lg border border-[#dbe4ed] bg-white p-5 text-base leading-7 text-[#516f90]">
                    {companyProfile.summaryPrompt}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-[#dbe4ed] bg-white p-5 shadow-sm lg:col-span-2 lg:grid lg:grid-cols-[0.35fr_1fr] lg:items-center lg:p-0">
          <div className="border-b border-[#dbe4ed] pb-5 lg:border-b-0 lg:border-r lg:p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
              What I can contribute
            </p>
            <h3 className="mt-3 text-3xl font-black leading-none lg:text-4xl">
              {selectedSkill.keyword}
            </h3>
          </div>
          <p className="pt-5 text-base leading-7 text-[#516f90] lg:p-6 lg:text-lg lg:leading-8">
            {selectedSkill.explanation}
          </p>
        </div>
      </div>
    </section>
  );
}
