import { useState } from 'react';
import { companyProfile, personalInfo, skills } from '../data/content';
import { theme } from '../config/theme';

export function HeroSection() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [showCompanySummary, setShowCompanySummary] = useState(false);

  return (
    <section
      className="min-h-screen border-b-2 border-black px-4 py-4 sm:px-6 lg:px-10"
      style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-3 border-2 border-black bg-white px-4 py-3 text-[0.68rem] font-black uppercase tracking-[0.18em] sm:grid-cols-3 sm:px-5">
        <span>{personalInfo.name}</span>
        <span className="hidden text-center sm:block">{companyProfile.shortName} application</span>
        <span className="text-right">{personalInfo.location}</span>
      </nav>

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl content-center gap-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="flex flex-col justify-between border-2 border-black bg-white">
          <div className="border-b-2 border-black p-5 sm:p-8">
            <p className="mb-5 inline-block bg-[#ffd500] px-3 py-2 text-xs font-black uppercase tracking-[0.2em]">
              {personalInfo.role}
            </p>
            <h1 className="max-w-4xl text-3xl font-black uppercase leading-[0.96] tracking-normal sm:text-5xl lg:text-6xl">
              {personalInfo.tagline}
            </h1>
          </div>

          <div className="grid border-b-2 border-black lg:grid-cols-[0.72fr_1fr]">
            <div className="border-b-2 border-black bg-black p-5 text-[#f5f0e8] lg:border-b-0 lg:border-r-2">
              <p className="text-xs font-black uppercase tracking-[0.24em]">Why OLIVER</p>
              <p className="mt-4 text-2xl font-black uppercase leading-none">
                The in-house model fits how I like to work.
              </p>
            </div>
            <p className="p-5 text-base leading-7 sm:text-lg sm:leading-8">{personalInfo.summary}</p>
          </div>

          <div className="grid gap-px bg-black sm:grid-cols-3">
            {skills.map((skill) => (
              <button
                key={skill.keyword}
                onClick={() => setSelectedSkill(skill)}
                className={`min-h-16 px-4 py-4 text-left text-sm font-black uppercase leading-tight transition ${
                  selectedSkill.keyword === skill.keyword
                    ? 'bg-[#ffd500] text-black'
                    : 'bg-[#f5f0e8] text-black hover:bg-white'
                }`}
              >
                {skill.keyword}
              </button>
            ))}
          </div>
        </div>

        <aside className="grid content-start gap-6">
          <div className="border-2 border-black bg-black p-5 text-[#f5f0e8] sm:p-7">
            <button
              onClick={() => setShowCompanySummary(!showCompanySummary)}
              className="flex w-full items-center gap-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd500]"
              aria-expanded={showCompanySummary}
            >
              <img
                src={theme.branding.logoPath}
                alt={companyProfile.logoAlt}
                className="h-24 w-24 shrink-0 border border-[#f5f0e8] object-cover sm:h-32 sm:w-32"
              />
              <span>
                <span className="block text-2xl font-black uppercase leading-none sm:text-3xl">OLIVER'S AGENCY</span>
              </span>
            </button>

            <div className="mt-6 border-t border-[#f5f0e8] pt-5 text-base leading-7">
              {showCompanySummary ? (
                <div className="space-y-4">
                  <p>
                    <span className="font-black uppercase text-[#ffd500]">Mission: </span>
                    {companyProfile.mission}
                  </p>
                  <p>
                    <span className="font-black uppercase text-[#ffd500]">Vision: </span>
                    {companyProfile.vision}
                  </p>
                </div>
              ) : (
                <p>{companyProfile.summaryPrompt}</p>
              )}
            </div>
          </div>

          <div className="border-2 border-black bg-[#ffd500] p-5 sm:p-6 lg:max-w-[34rem]">
            <p className="text-xs font-black uppercase tracking-[0.24em]">Selected value</p>
            <h2 className="mt-3 text-2xl font-black uppercase leading-none sm:text-3xl">
              {selectedSkill.keyword}
            </h2>
            <p className="mt-4 max-w-[29rem] text-base leading-7">{selectedSkill.explanation}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
