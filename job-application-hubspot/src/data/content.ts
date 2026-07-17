import type { CompanyProfile, ContactInfo, Highlight, PersonalInfo, ServiceItem, Skill } from '../types/content';

export const personalInfo: PersonalInfo = {
  name: 'Anouk Vanhorenbeek',
  role: 'Spontaneous marketing application',
  location: 'Madrid, Spain',
  tagline: 'Helping useful products become clear, human, and easy to grow with.',
  summary:
    'A multilingual communication, journalism, marketing, and AI-evaluation profile with hands-on experience in content, campaigns, PR, influencers, events, and structured execution.',
};

export const companyProfile: CompanyProfile = {
  name: 'HubSpot',
  shortName: 'HubSpot',
  logoAlt: 'HubSpot logo',
  mission:
    'Help millions of organizations grow better by aligning business growth with customer success.',
  vision:
    'Make growing a business easier through connected marketing, sales, service, content, data, CRM, and AI tools built around the customer.',
  summaryPrompt: 'Click the HubSpot logo to reveal the mission and vision behind this application.',
};

export const skills: Skill[] = [
  {
    keyword: 'Inbound mindset',
    explanation:
      'My journalism training taught me to start with what people need, not what a brand wants to push. That fits HubSpot\'s helpful, customer-first approach to marketing.',
  },
  {
    keyword: 'Content clarity',
    explanation:
      'I can turn campaign ideas, product information, interviews, and brand messages into clear copy and content that is useful for real audiences.',
  },
  {
    keyword: 'Campaign support',
    explanation:
      'At Lotus Bakeries Spain, I supported social planning, influencer campaigns, events, press materials, POS assets, product sheets, and KPI follow-up.',
  },
  {
    keyword: 'Languages',
    explanation:
      'Dutch native, English C1, Spanish C1, and French B1 give me a strong base for international teams, localization sensitivity, and cross-market communication.',
  },
  {
    keyword: 'AI judgement',
    explanation:
      'As an AI Data Annotator, I evaluated model responses for relevance, usefulness, structure, and clarity: a practical habit for working in an AI-powered marketing environment.',
  },
  {
    keyword: 'Growth energy',
    explanation:
      'My path across Belgium, Spain, Argentina, journalism, marketing, translation, AI work, and volunteer leadership shows I learn quickly and move well through new contexts.',
  },
];

export const cvHighlights: Highlight[] = [
  {
    title: 'Brand and content execution',
    meta: 'Lotus Bakeries Spain',
    text: 'Supported social media planning, influencer campaigns, branded content, press materials, events, trade shows, POS materials, brochures, and product sheets. That gives me a practical base for marketing work that needs both creativity and follow-through.',
  },
  {
    title: 'Editorial judgement',
    meta: 'DPG Media + journalism',
    text: 'Wrote articles, conducted interviews, and contributed to reporting from the field. I bring the discipline of listening closely, finding the useful angle, and making information understandable for a real audience.',
  },
  {
    title: 'Customer-first communication',
    meta: 'Marketing + communication studies',
    text: 'HubSpot grew from the idea that buyers want helpful information. My own communication style is built around that same logic: understand the person first, then shape the message around what is actually useful.',
  },
  {
    title: 'AI-aware content thinking',
    meta: 'AI Data Annotator',
    text: 'Evaluating AI output trained me to judge whether content is accurate, relevant, structured, and genuinely helpful. That fits a customer platform where AI should make work clearer, faster, and better.',
  },
  {
    title: 'International range',
    meta: 'Belgium, Spain, Argentina',
    text: 'I have studied and worked across different countries and communicate in Dutch, English, Spanish, and French. That range helps me think beyond one market, tone, or customer context.',
  },
  {
    title: 'Structured collaboration',
    meta: 'Campaigns + volunteer leadership',
    text: 'From campaign planning and KPI follow-up to youth-organisation finance responsibilities, I am comfortable bringing order to moving pieces and helping work move from idea to finished.',
  },
];

export const serviceItems: ServiceItem[] = [
  {
    title: 'Attract',
    description: 'Content and campaign instincts that help people find the message because it answers a real need.',
  },
  {
    title: 'Engage',
    description: 'Social, PR, influencer, and event experience shaped into useful audience touchpoints.',
  },
  {
    title: 'Convert',
    description: 'Clear writing that connects benefits, proof points, and next steps without losing the human tone.',
  },
  {
    title: 'Connect',
    description: 'Multilingual communication across teams, markets, and customer contexts.',
  },
  {
    title: 'Grow better',
    description: 'Curiosity, structure, and AI-aware judgement for marketing that scales with care.',
  },
];

export const contactInfo: ContactInfo = {
  phone: '+32 478 42 33 32',
  email: 'anouk.vhb@outlook.com',
  location: 'Madrid, Spain',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anouk-vanhorenbeek-305377275/' },
    { label: 'HubSpot', href: 'https://www.hubspot.com/' },
  ],
};
