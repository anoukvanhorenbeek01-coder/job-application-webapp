import { useState } from 'react';
import { companyProfile, personalInfo, skills } from '../data/content';
import { theme } from '../config/theme';

export function HeroSection() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [showCompanySummary, setShowCompanySummary] = useState(false);

  return (
    <section className="min-h-screen overflow-hidden border-b border-[#c8dacd] px-5 py-5 sm:px-8 lg:px-12" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#c8dacd] bg-white/90 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] shadow-sm">
        <span>{personalInfo.name}</span>
        <span>{companyProfile.shortName} / {personalInfo.location}</span>
      </nav>

      <div className="mx-auto grid min-h-[calc(100vh-5.5rem)] w-full max-w-7xl gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-14">
        <div>
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#29c56f]">
              {personalInfo.role}
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] text-[#123b2a] sm:text-6xl lg:text-7xl">
              {personalInfo.tagline}
            </h1>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#506257]">
            {personalInfo.summary}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <button
                key={skill.keyword}
                onClick={() => setSelectedSkill(skill)}
                className={`rounded-full border px-5 py-3 text-left text-sm font-black transition hover:border-[#29c56f] hover:bg-[#e8f54a] ${
                  selectedSkill.keyword === skill.keyword
                    ? 'border-[#123b2a] bg-[#123b2a] text-white'
                    : 'border-[#c8dacd] bg-white text-[#123b2a]'
                }`}
              >
                {skill.keyword}
              </button>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#c8dacd] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.42fr_1fr]">
              <div className="border-b border-[#c8dacd] bg-[#123b2a] p-5 text-white lg:border-b-0 lg:border-r">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e8f54a]">
                  What I can contribute
                </p>
                <h3 className="mt-3 text-3xl font-black leading-none">
                  {selectedSkill.keyword}
                </h3>
              </div>
              <p className="p-5 text-base leading-7 text-[#506257] lg:text-lg lg:leading-8">
                {selectedSkill.explanation}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#c8dacd] bg-white p-5 shadow-xl shadow-[#123b2a]/10 sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#c8dacd] pb-5 text-xs font-black uppercase tracking-[0.18em] text-[#506257]">
              <span>Intelligent commerce</span>
              <span>PMM fit</span>
            </div>
            <button
              onClick={() => setShowCompanySummary(!showCompanySummary)}
              className="mx-auto flex min-h-44 w-full items-center justify-center rounded-3xl border border-[#c8dacd] bg-[#f6fbf6] p-8 transition hover:-translate-y-1 hover:border-[#29c56f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#29c56f]"
            >
              <img
                src={theme.branding.logoPath}
                alt={companyProfile.logoAlt}
                className="max-h-28 w-full object-contain"
              />
            </button>

            <div className="mt-6">
              <h2 className="text-3xl font-black text-[#123b2a] sm:text-4xl">
                {companyProfile.name}
              </h2>
              {showCompanySummary ? (
                <div className="mt-5 space-y-4 border-t border-[#c8dacd] pt-5 text-left text-base leading-7 text-[#506257]">
                  <p>
                    <span className="font-black text-[#123b2a]">Mission:</span>{' '}
                    {companyProfile.mission}
                  </p>
                  <p>
                    <span className="font-black text-[#123b2a]">Vision:</span>{' '}
                    {companyProfile.vision}
                  </p>
                </div>
              ) : (
                <p className="mt-5 border-t border-[#c8dacd] pt-5 text-base leading-7 text-[#506257]">
                  {companyProfile.summaryPrompt}
                </p>
              )}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {['1.5B+ orders', '80K locations', '65+ countries'].map((stat) => (
                <div key={stat} className="rounded-2xl bg-[#f6fbf6] p-3 text-center text-sm font-black text-[#123b2a]">
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
