import { useState } from 'react';
import { companyProfile, personalInfo, skills } from '../data/content';
import { theme } from '../config/theme';

const colorDots = ['bg-[#4285f4]', 'bg-[#ea4335]', 'bg-[#fbbc04]', 'bg-[#34a853]'];

export function HeroSection() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [showCompanySummary, setShowCompanySummary] = useState(false);

  return (
    <section
      className="min-h-screen overflow-hidden border-b border-[#dadce0] px-5 py-5 sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-[#dadce0] bg-white px-4 py-3 text-xs font-medium text-[#5f6368] shadow-sm">
        <span>{personalInfo.name}</span>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">{companyProfile.shortName} APMM / {personalInfo.location}</span>
          <a
            href="#contact"
            className="rounded-full bg-[#1a73e8] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#185abc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a73e8]"
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="mx-auto grid min-h-[calc(100vh-5.25rem)] w-full max-w-7xl gap-10 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-14">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase text-[#1a73e8]">
            {personalInfo.role}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-[#202124] sm:text-6xl lg:text-7xl">
            {personalInfo.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6368]">
            {personalInfo.summary}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <button
                key={skill.keyword}
                onClick={() => setSelectedSkill(skill)}
                className={`group rounded-full border px-4 py-3 text-left text-sm font-medium transition hover:-translate-y-0.5 hover:border-[#1a73e8] hover:bg-white hover:shadow-md ${
                  selectedSkill.keyword === skill.keyword
                    ? 'border-[#1a73e8] bg-white text-[#1a73e8] shadow-md'
                    : 'border-[#dadce0] bg-white/70 text-[#202124]'
                }`}
              >
                <span className={`mr-3 inline-block h-2.5 w-2.5 rounded-full ${colorDots[index % colorDots.length]}`} />
                {skill.keyword}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-[#dadce0] bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase text-[#5f6368]">What I can add</p>
            <div className="mt-3 grid gap-4 lg:grid-cols-[0.38fr_1fr] lg:items-start">
              <h3 className="text-3xl font-semibold leading-tight text-[#202124]">
                {selectedSkill.keyword}
              </h3>
              <p className="text-base leading-7 text-[#5f6368] lg:text-lg lg:leading-8">
                {selectedSkill.explanation}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-[#fbbc04]/20 blur-2xl" />
          <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-[#34a853]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-[#dadce0] bg-white p-6 shadow-xl shadow-[#202124]/10 sm:p-8">
            <div className="flex items-center gap-2 border-b border-[#dadce0] pb-5">
              {colorDots.map((dot) => (
                <span key={dot} className={`h-3 w-3 rounded-full ${dot}`} />
              ))}
            </div>

            <button
              onClick={() => setShowCompanySummary(!showCompanySummary)}
              className="my-8 flex min-h-48 w-full items-center justify-center rounded-[28px] border border-[#dadce0] bg-[#f8fafd] p-8 transition hover:-translate-y-1 hover:border-[#1a73e8] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a73e8]"
              aria-expanded={showCompanySummary}
            >
              <img
                src={theme.branding.logoPath}
                alt={companyProfile.logoAlt}
                className="max-h-24 w-full object-contain"
              />
            </button>

            <div>
              <p className="text-xs font-semibold uppercase text-[#1a73e8]">Click the logo</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#202124] sm:text-4xl">
                {companyProfile.name}
              </h2>
              {showCompanySummary ? (
                <div className="mt-5 space-y-4 border-t border-[#dadce0] pt-5 text-left text-base leading-7 text-[#5f6368]">
                  <p>
                    <span className="font-semibold text-[#202124]">Mission:</span>{' '}
                    {companyProfile.mission}
                  </p>
                  <p>
                    <span className="font-semibold text-[#202124]">Vision:</span>{' '}
                    {companyProfile.vision}
                  </p>
                </div>
              ) : (
                <p className="mt-5 border-t border-[#dadce0] pt-5 text-base leading-7 text-[#5f6368]">
                  {companyProfile.summaryPrompt}
                </p>
              )}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['User first', 'Product magic', 'Global scale'].map((stat) => (
                <div key={stat} className="rounded-2xl bg-[#f8fafd] p-3 text-center text-sm font-medium text-[#202124]">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
