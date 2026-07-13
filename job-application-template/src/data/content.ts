import type { CompanyProfile, ContactInfo, Highlight, PersonalInfo, ServiceItem, Skill } from '../types/content';

export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  role: 'Professional Role',
  location: 'City / Country',
  tagline: 'A clean, reusable job application website template',
  summary:
    'Replace this copy with your own introduction and tailor the page for each opportunity in minutes.',
};

export const companyProfile: CompanyProfile = {
  name: 'Your Target Company',
  shortName: 'Company',
  logoAlt: 'Company logo',
  mission: 'Add your target company mission here.',
  vision: 'Add your target company vision here.',
  summaryPrompt: 'Click the logo to reveal the company mission and vision.',
};

export const skills: Skill[] = [
  {
    keyword: 'Brand Strategy',
    explanation:
      'Describe the value you bring to a team in a way that can be reused and tailored for each application.',
  },
  {
    keyword: 'Storytelling',
    explanation:
      'Use this section to explain your communication style, content strengths, or narrative skills.',
  },
  {
    keyword: 'Digital Marketing',
    explanation:
      'Highlight campaigns, platforms, or marketing experience that map well to the role you are targeting.',
  },
  {
    keyword: 'Languages',
    explanation:
      'List the languages you speak and how they support international or cross-functional collaboration.',
  },
  {
    keyword: 'Organisation',
    explanation:
      'Show how you manage projects, deadlines, and priorities with clarity and consistency.',
  },
  {
    keyword: 'AI Curiosity',
    explanation:
      'Add your interest in modern tools, experimentation, or workflow improvements that strengthen your profile.',
  },
];

export const cvHighlights: Highlight[] = [
  {
    title: 'Experience',
    text: 'Replace this card with your relevant professional background and achievements.',
  },
  {
    title: 'Communication',
    text: 'Add your education, training, or communication strengths so the profile feels distinctive.',
  },
  {
    title: 'International Fit',
    text: 'Mention global exposure, language skills, or cross-cultural experience if relevant.',
  },
  {
    title: 'Content & Social',
    text: 'Highlight your content creation, writing, editing, or social media experience.',
  },
  {
    title: 'Working Style',
    text: 'Describe how you collaborate, learn quickly, and stay organised when working on projects.',
  },
  {
    title: 'Additional Experience',
    text: 'Use this area for freelance, volunteer, or extracurricular work that supports your application.',
  },
];

export const serviceItems: ServiceItem[] = [
  { title: 'Communication' },
  { title: 'Strategy' },
  { title: 'Brand Identity' },
  { title: 'Events & Experience' },
  { title: 'Content & Social' },
];

export const contactInfo: ContactInfo = {
  phone: '+32 000 00 00 00',
  email: 'your.email@example.com',
  location: 'City, Country',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
  ],
};
