import type { CompanyProfile, ContactInfo, Highlight, PersonalInfo, ServiceItem, Skill } from '../types/content';

export const personalInfo: PersonalInfo = {
  name: 'Anouk Vanhorenbeek',
  role: 'Associate Product Marketing Manager application',
  location: 'Madrid, Spain',
  tagline: 'Know the user. Shape the story. Make the product feel useful.',
  summary:
    'A multilingual communication, journalism, marketing, and AI-evaluation profile with hands-on experience in brand campaigns, content, PR, influencers, events, and structured execution.',
};

export const companyProfile: CompanyProfile = {
  name: 'Google',
  shortName: 'Google',
  logoAlt: 'Google logo',
  mission: 'Organize the world\'s information and make it universally accessible and useful.',
  vision:
    'Build technology for everyone, bringing user needs and product magic together through helpful products, responsible AI, and clear communication.',
  summaryPrompt: 'Click the Google logo to reveal the mission and vision behind this application.',
};

export const skills: Skill[] = [
  {
    keyword: 'User empathy',
    explanation:
      'Journalism trained me to listen first, ask sharper questions, and turn messy information into a message people can actually use.',
  },
  {
    keyword: 'Product storytelling',
    explanation:
      'I connect product details to clear human value through copywriting, interviews, brand communication, and audience-aware content.',
  },
  {
    keyword: 'Go-to-market support',
    explanation:
      'At Lotus Bakeries Spain, I supported social planning, influencer campaigns, events, press materials, POS assets, product sheets, and KPI follow-up.',
  },
  {
    keyword: 'Languages',
    explanation:
      'Dutch native, English C2, Spanish C2, and French B2 give me a practical base for global marketing, localization sensitivity, and cross-market collaboration.',
  },
  {
    keyword: 'AI curiosity',
    explanation:
      'As an AI Data Annotator, I evaluated model answers for relevance, clarity, quality, and usefulness: a hands-on habit for thinking about AI and product value.',
  },
  {
    keyword: 'Ambiguity',
    explanation:
      'My path across Belgium, Spain, Argentina, journalism, marketing, translation, AI work, and volunteer leadership shows that I learn quickly and move well through new contexts.',
  },
];

export const cvHighlights: Highlight[] = [
  {
    title: 'Brand and campaign execution',
    meta: 'Lotus Bakeries Spain',
    text: 'Supported social media planning, influencer campaigns, branded content, press materials, events, trade shows, POS materials, brochures, and product sheets. That is a strong starting point for launch support, campaign coordination, and product messaging.',
  },
  {
    title: 'Editorial judgement',
    meta: 'DPG Media + KU Leuven',
    text: 'Wrote articles, conducted interviews, and built a communication foundation through journalism and linguistics. I bring the discipline of listening closely, finding the angle, and making information useful for a real audience.',
  },
  {
    title: 'User-first technology lens',
    meta: 'AI Data Annotation',
    text: 'Evaluating AI responses taught me to judge whether an answer is accurate, relevant, well-structured, and actually helpful. That maps neatly to Google product marketing: start with the user need, then connect it to the technology.',
  },
  {
    title: 'Global mindset',
    meta: 'Belgium, Spain, Argentina',
    text: 'I have studied and worked across different countries and communicate in Dutch, English, Spanish, and French. For Google, that means I can think beyond one market, tone, culture, or product context.',
  },
  {
    title: 'Structured creativity',
    meta: 'Campaigns, KPIs, finance',
    text: 'Creative work becomes stronger when it is organized. My experience includes campaign planning, KPI follow-up, event coordination, trade-show support, financial administration, and volunteer leadership responsibilities.',
  },
  {
    title: 'APMM learning energy',
    meta: 'Early-career marketing fit',
    text: 'The APMM program asks for curiosity, communication, cross-functional energy, and comfort with learning. My route is not one straight line, but it is consistently built around people, messages, products, and making information clearer.',
  },
];

export const serviceItems: ServiceItem[] = [
  {
    title: 'User insight',
    description: 'Use interview instincts and editorial discipline to understand what people need and why it matters.',
  },
  {
    title: 'Positioning',
    description: 'Translate product value into clear messages for launches, campaigns, and internal alignment.',
  },
  {
    title: 'Campaigns',
    description: 'Support go-to-market work with content planning, influencer coordination, PR assets, events, and KPIs.',
  },
  {
    title: 'AI fluency',
    description: 'Bring hands-on judgment around AI output quality, usefulness, relevance, and clarity.',
  },
  {
    title: 'Global tone',
    description: 'Work across languages and cultural contexts with care for nuance, audience, and accessibility.',
  },
];

export const contactInfo: ContactInfo = {
  phone: '+32 478 42 33 32',
  email: 'anouk.vhb@outlook.com',
  location: 'Madrid, Spain',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anouk-vanhorenbeek-305377275/' },
    {
      label: 'Role',
      href: 'https://www.google.com/about/careers/applications/jobs/results/140372266939491014-associate-product-marketing-manager/?src=Online/LinkedIn/linkedin_us&utm_source=linkedin&utm_medium=jobposting&utm_campaign=contract',
    },
  ],
};
