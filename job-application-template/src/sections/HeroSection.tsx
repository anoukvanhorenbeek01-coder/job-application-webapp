import { useState } from 'react';
import { companyProfile, personalInfo, skills } from '../data/content';
import { theme } from '../config/theme';

export function HeroSection() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [showCompanySummary, setShowCompanySummary] = useState(false);

  return (
    <section className="min-h-screen border-b border-black px-5 py-6 sm:px-8 lg:px-12" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-black pb-5 text-xs font-semibold uppercase tracking-[0.18em]">
        <span>{personalInfo.name}</span>
        <span>{personalInfo.location}</span>
      </nav>

      <div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col justify-center">
        <div className="mb-8">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em]">
              {personalInfo.role}
            </p>
            <h1 className="max-w-5xl text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
              {personalInfo.tagline}
            </h1>
          </div>
        </div>

        <p className="mx-auto mb-8 max-w-xl text-center text-base leading-7">
          {personalInfo.summary}
        </p>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.3fr_0.85fr] lg:items-center">
          <div className="hidden gap-3 lg:flex lg:flex-col">
            {skills.slice(0, 3).map((skill) => (
              <button
                key={skill.keyword}
                onClick={() => setSelectedSkill(skill)}
                className={`border border-black px-5 py-3 text-left text-sm font-bold uppercase tracking-[0.16em] transition hover:bg-black hover:text-[#f7f4ee] ${
                  selectedSkill.keyword === skill.keyword
                    ? 'bg-black text-[#f7f4ee]'
                    : 'bg-transparent text-black'
                }`}
              >
                {skill.keyword}
              </button>
            ))}
          </div>

          <div className="border border-black bg-[#f7f4ee] p-5 text-center">
            <button
              onClick={() => setShowCompanySummary(!showCompanySummary)}
              className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-black bg-white transition hover:scale-105 sm:h-56 sm:w-56"
            >
              <img
                src={theme.branding.logoPath}
                alt={companyProfile.logoAlt}
                className="h-28 w-40 object-contain"
              />
            </button>

            <div className="mt-6">
              <h2 className="text-3xl font-black uppercase tracking-tight">
                {companyProfile.name}
              </h2>
              {showCompanySummary ? (
                <div className="mt-5 space-y-4 border-t border-black pt-5 text-left text-base leading-7">
                  <p>
                    <span className="font-black uppercase">Mission:</span>{' '}
                    {companyProfile.mission}
                  </p>
                  <p>
                    <span className="font-black uppercase">Vision:</span>{' '}
                    {companyProfile.vision}
                  </p>
                </div>
              ) : (
                <p className="mt-5 border-t border-black pt-5 text-base leading-7">
                  {companyProfile.summaryPrompt}
                </p>
              )}
            </div>
          </div>

          <div className="hidden gap-3 lg:flex lg:flex-col">
            {skills.slice(3, 6).map((skill) => (
              <button
                key={skill.keyword}
                onClick={() => setSelectedSkill(skill)}
                className={`border border-black px-5 py-3 text-left text-sm font-bold uppercase tracking-[0.16em] transition hover:bg-black hover:text-[#f7f4ee] ${
                  selectedSkill.keyword === skill.keyword
                    ? 'bg-black text-[#f7f4ee]'
                    : 'bg-transparent text-black'
                }`}
              >
                {skill.keyword}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 lg:hidden">
          {skills.map((skill) => (
            <button
              key={skill.keyword}
              onClick={() => setSelectedSkill(skill)}
              className={`border border-black px-3 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] transition hover:bg-black hover:text-[#f7f4ee] ${
                selectedSkill.keyword === skill.keyword
                  ? 'bg-black text-[#f7f4ee]'
                  : 'bg-transparent text-black'
              }`}
            >
              {skill.keyword}
            </button>
          ))}
        </div>

        <div className="mt-4 grid border border-black lg:mt-10 lg:grid-cols-[0.45fr_1fr]">
          <div className="border-b border-black p-5 lg:border-b-0 lg:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]">
              What I can contribute
            </p>
            <h3 className="mt-3 text-3xl font-black uppercase leading-none lg:text-4xl">
              {selectedSkill.keyword}
            </h3>
          </div>
          <p className="p-5 text-base leading-7 lg:text-lg lg:leading-8">
            {selectedSkill.explanation}
          </p>
        </div>
      </div>
    </section>
  );
}
