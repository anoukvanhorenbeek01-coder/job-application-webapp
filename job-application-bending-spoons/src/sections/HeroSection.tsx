import { useState } from 'react';
import { companyProfile, personalInfo, skills } from '../data/content';
import { theme } from '../config/theme';

const stats = [
  { value: '4', label: 'working languages' },
  { value: '3', label: 'communication fields' },
  { value: '1', label: 'product communications goal' },
];

export function HeroSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [showCompanySummary, setShowCompanySummary] = useState(false);

  return (
    <section className="min-h-screen bg-white px-5 pb-16 pt-5 text-[#050505] sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between text-sm font-medium">
        <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
          <img src={theme.branding.logoPath} alt="" className="h-7 w-14 object-contain" />
          <span className="font-semibold">{personalInfo.name}</span>
        </a>
        <div className="flex items-center gap-5">
          <a href="#values" className="hidden hover:underline sm:inline">
            Values
          </a>
          <a href="#experience" className="hover:underline">
            CV
          </a>
        </div>
      </nav>

      <div id="top" className="mx-auto max-w-[1180px] pt-20 sm:pt-24 lg:pt-28">
        <div className="max-w-[720px]">
          <p className="text-sm font-medium text-neutral-500">{personalInfo.role}</p>
          <h1 className="mt-4 text-[3.1rem] font-semibold leading-[0.98] tracking-normal sm:text-[4.8rem] lg:text-[5.9rem]">
            {personalInfo.tagline}
          </h1>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <button
              onClick={() => setShowCompanySummary(!showCompanySummary)}
              aria-expanded={showCompanySummary}
              className="group flex min-h-[18rem] w-full items-center justify-center rounded-[2rem] bg-[#f5f5f2] px-10 py-16 transition hover:bg-[#eeeeea] sm:min-h-[24rem]"
            >
              <img
                src={theme.branding.logoPath}
                alt={companyProfile.logoAlt}
                className="w-full max-w-[24rem] object-contain"
              />
            </button>
            <p className="mt-4 text-center text-sm text-neutral-500">
              {showCompanySummary ? 'Click again to return to the application summary.' : companyProfile.summaryPrompt}
            </p>
          </div>

          <div>
            {showCompanySummary ? (
              <div className="grid max-w-[34rem] gap-6">
                <p className="text-[1.2rem] leading-8 text-neutral-700 sm:text-[1.35rem]">
                  <span className="font-semibold text-neutral-900">Mission: </span>
                  {companyProfile.mission}
                </p>
                <p className="text-[1.2rem] leading-8 text-neutral-700 sm:text-[1.35rem]">
                  <span className="font-semibold text-neutral-900">Vision: </span>
                  {companyProfile.vision}
                </p>
              </div>
            ) : (
              <>
                <p className="max-w-[34rem] text-[1.35rem] leading-[1.35] text-neutral-800 sm:text-[1.7rem]">
                  I want to help turn complex product improvements into communication people can immediately understand.
                </p>
                <p className="mt-6 max-w-[34rem] text-base leading-7 text-neutral-500">
                  {personalInfo.summary}
                </p>
              </>
            )}
            <div className="mt-10 grid gap-5 border-y border-neutral-200 py-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold leading-none">{stat.value}</p>
                  <p className="mt-2 text-sm leading-5 text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="values" className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <button
              key={skill.keyword}
              onClick={() => setSelectedSkill(selectedSkill === skill.keyword ? null : skill.keyword)}
              aria-expanded={selectedSkill === skill.keyword}
              className={`min-h-28 rounded-[1.25rem] p-6 text-left transition ${
                selectedSkill === skill.keyword
                  ? 'bg-[#050505] text-white'
                  : 'bg-[#f5f5f2] text-[#050505] hover:bg-[#ecece7]'
              }`}
            >
              <span className="text-xl font-semibold leading-tight">{skill.keyword}</span>
              {selectedSkill === skill.keyword ? (
                <span className="mt-4 block text-sm leading-6 text-neutral-300">
                  {skill.explanation}
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
