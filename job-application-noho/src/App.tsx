import { useState } from 'react';

const company = {
  name: 'NOHO - Madrid',
  logoText: 'NOHO',
  mission:
    'Ayudar a marcas, personas e instituciones a potenciar su reputación mediante una comunicación directa, eficaz y orientada por un propósito.',
  vision:
    'Construir marcas relevantes desde la estrategia, la creatividad, la identidad visual, la experiencia y el contenido social.',
};

const skills = [
  {
    keyword: 'Brand Identity',
    explanation:
      'En Lotus Bakeries España apoyé marcas como Biscoff, nakd y TREK a través de redes sociales, campañas con influencers, branded content, eventos y trade marketing. Puedo aportar a NOHO una mirada centrada en cómo cada mensaje, detalle y punto de contacto construye una historia de marca.',
  },
  {
    keyword: 'Storytelling',
    explanation:
      'Mi formación en periodismo, comunicación y copywriting me ayuda a convertir información compleja en contenido claro y atractivo. Puedo ayudar a NOHO a comunicar con un tono humano, preciso y fácil de recordar.',
  },
  {
    keyword: 'Social Media',
    explanation:
      'Tengo experiencia práctica planificando contenido para redes, coordinando colaboraciones con influencers, gestionando publicaciones y analizando alcance e interacción. Eso me permite apoyar contenido creativo sin perder de vista los resultados.',
  },
  {
    keyword: 'Idiomas',
    explanation:
      'Hablo neerlandés como lengua materna y tengo un nivel avanzado de inglés y español, además de francés intermedio. Esto me ayuda a adaptar el tono, traducir ideas entre culturas y comunicar con seguridad en un entorno internacional como Madrid.',
  },
  {
    keyword: 'Organización',
    explanation:
      'Soy organizada, proactiva y estoy acostumbrada a gestionar varias tareas a la vez, desde calendarios de contenido hasta eventos y materiales POS. Puedo ayudar a que los proyectos avancen con claridad, estructura y ritmo.',
  },
  {
    keyword: 'Curiosidad AI',
    explanation:
      'Mi trabajo freelance como AI data annotator me entrenó para evaluar contenido digital con criterio y atención a la calidad. Junto con mi curso de AI, esto me da curiosidad práctica por nuevas herramientas y flujos de trabajo más inteligentes.',
  },
];

const cvHighlights = [
  {
    title: 'Experiencia en marketing',
    text: 'Junior Brand Manager Intern en Lotus Bakeries España, trabajando en planificación de redes sociales, campañas con influencers, branded content, notas de prensa, eventos, ferias, materiales POS, folletos promocionales y fichas de producto.',
  },
  {
    title: 'Perfil de comunicación',
    text: 'Máster en Periodismo y Bachelor en Lingüística y Literatura en KU Leuven en Bélgica, y Máster en Communication and Future Marketing en GBSB Global Business School en Madrid.',
  },
  {
    title: 'Encaje internacional',
    text: 'Vivo en Madrid pero soy de Bélgica. Durante mi Máster en Periodismo hice un intercambio en la Universidad de Buenos Aires. Mis idiomas: neerlandés, inglés, español y francés.',
  },
  {
    title: 'Content & Social',
    text: 'Writing, copywriting, proofreading, traducción, Canva, Microsoft Office, edición básica de video y formación en AI. Son habilidades útiles para una comunicación de marca clara, visual y rápida.',
  },
  {
    title: 'Forma de trabajar',
    text: 'Organización meticulosa, perseverancia, trabajo en equipo, empatía, flexibilidad y gestión del tiempo. Me adapto bien a entornos dinámicos y disfruto los retos nuevos.',
  },
  {
    title: 'Experiencia extra',
    text: 'Journalist Intern en DPG Media, traductora/proofreader/AI data annotator freelance en Mindy Support, copywriter en Forsethi y administradora financiera voluntaria.',
  },
];

const services = [
  'Communication',
  'Strategy',
  'Brand Identity',
  'Events & Experience',
  'Content & Social',
];

function App() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [showCompanySummary, setShowCompanySummary] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f4ee] font-sans text-black">
      <section className="min-h-screen border-b border-black px-5 py-6 sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-black pb-5 text-xs font-semibold uppercase tracking-[0.18em]">
          <span>Anouk Vanhorenbeek</span>
          <span>Madrid / NOHO</span>
        </nav>

        <div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col justify-center">
          <div className="mb-8">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em]">
                Página de candidatura personalizada
              </p>
              <h1 className="max-w-5xl text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
                Hola NOHO, soy Anouk y quiero ayudar a crear marcas relevantes.
              </h1>
            </div>
          </div>

          <p className="mx-auto mb-8 max-w-xl text-center text-base leading-7">
            Haz clic en el logo para ver una síntesis de misión y visión.
            Después explora las palabras clave para descubrir qué puedo aportar
            al equipo.
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
                  src="/NOHO logo.png"
                  alt="NOHO logo"
                  className="h-28 w-40 object-contain"
                />
              </button>

              <div className="mt-6">
                <h2 className="text-3xl font-black uppercase tracking-tight">
                  {company.name}
                </h2>
                {showCompanySummary ? (
                  <div className="mt-5 space-y-4 border-t border-black pt-5 text-left text-base leading-7">
                    <p>
                      <span className="font-black uppercase">Misión:</span>{' '}
                      {company.mission}
                    </p>
                    <p>
                      <span className="font-black uppercase">Visión:</span>{' '}
                      {company.vision}
                    </p>
                  </div>
                ) : (
                  <p className="mt-5 border-t border-black pt-5 text-base leading-7">
                    Haz clic en el logo para revelar la misión y visión.
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
                Lo que puedo aportar
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

      <section className="border-b border-black bg-black px-5 py-16 text-[#f7f4ee] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            Territorio NOHO
          </p>
          <div className="mt-8 grid gap-px overflow-hidden border border-[#f7f4ee] bg-[#f7f4ee] md:grid-cols-5">
            {services.map((service) => (
              <div key={service} className="flex min-h-28 items-center justify-center bg-black p-5 text-center">
                <p className="text-lg font-black uppercase leading-tight">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-black pb-10 lg:grid-cols-[0.8fr_1.2fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em]">
              Resumen de CV para NOHO
            </p>
            <h2 className="text-2xl font-black uppercase leading-none tracking-tight sm:text-4xl">
              Experiencia en marca, comunicación y marketing.
            </h2>
          </div>

          <div className="grid border-l border-black md:grid-cols-2 lg:grid-cols-3">
            {cvHighlights.map((item) => (
              <article
                key={item.title}
                className="border-b border-r border-black p-6"
              >
                <h3 className="text-2xl font-black uppercase leading-none">
                  {item.title}
                </h3>
                <p className="mt-5 leading-7">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#f7f4ee] bg-black px-5 py-12 text-[#f7f4ee] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            Contacto
          </p>
          <div className="mt-4 space-y-2 text-base leading-7">
            <p>
              <a href="tel:+32478423332" className="hover:underline">
                +32 478 42 33 32
              </a>
            </p>
            <p>
              <a href="mailto:anouk.vhb@outlook.com" className="hover:underline">
                anouk.vhb@outlook.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/anouk-vanhorenbeek-305377275/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
