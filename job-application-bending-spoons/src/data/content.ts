import type { CompanyProfile, ContactInfo, Highlight, PersonalInfo, ServiceItem, Skill } from '../types/content';

export const personalInfo: PersonalInfo = {
  name: 'Anouk Vanhorenbeek',
  role: 'Graduate Product Communications Manager application',
  location: 'Madrid, Spain',
  tagline: 'Product communications for iconic products',
  summary:
    'A multilingual communication, journalism, and marketing profile with hands-on brand, content, PR, influencer, and AI evaluation experience.',
};

export const companyProfile: CompanyProfile = {
  name: 'Bending Spoons',
  shortName: 'Bending Spoons',
  logoAlt: 'Bending Spoons logo',
  mission:
    'Acquire and improve iconic digital products, operating them for the long term with small, talent-dense teams.',
  vision:
    'Create deep product transformations that speed up innovation, benefit customers, and strengthen performance at global scale.',
  summaryPrompt: 'Click the mark to reveal why this application fits the Bending Spoons way of building.',
};

export const skills: Skill[] = [
  {
    keyword: 'Product storytelling',
    explanation:
      'I connect product details to clear, human narratives through journalism training, interview experience, copywriting, and brand communication.',
  },
  {
    keyword: 'Brand execution',
    explanation:
      'At Lotus Bakeries Spain, I helped plan social content, influencer campaigns, events, press materials, POS assets, brochures, and product sheets.',
  },
  {
    keyword: 'AI fluency',
    explanation:
      'As an AI Data Annotator, I evaluated model responses, wrote queries and responses, and learned to judge relevance, quality, and usefulness with precision.',
  },
  {
    keyword: 'Languages',
    explanation:
      'Dutch native, English C1, Spanish C1, and French B1: a strong base for international product communication and cross-market sensitivity.',
  },
  {
    keyword: 'Organisation',
    explanation:
      'My CV consistently points to structure: campaign planning, KPI follow-up, trade-show support, financial administration, and youth-leader coordination.',
  },
  {
    keyword: 'Adaptability',
    explanation:
      'I have studied and worked across Belgium, Spain, and Argentina, moving between journalism, marketing, translation, AI, and volunteer leadership.',
  },
];

export const cvHighlights: Highlight[] = [
  {
    title: 'Brand storytelling',
    meta: 'Lotus Bakeries Spain + journalism training',
    text: 'My communication style sits between brand thinking and editorial clarity. At Lotus Bakeries Spain, I helped turn product and campaign ideas into social content, influencer concepts, press materials, brochures, and event communication. My journalism background adds the discipline behind that work: asking the right questions, finding the angle, and making the message easy to understand.',
  },
  {
    title: 'Product curiosity',
    meta: 'AI Data Annotation + future marketing',
    text: 'Working as an AI Data Annotator trained me to look carefully at how people ask questions, what makes an answer useful, and where generated content succeeds or fails. That mindset fits product communications: understand the user need, identify what matters, and communicate improvements in a way that feels precise rather than decorative.',
  },
  {
    title: 'Clear writing',
    meta: 'DPG Media + copywriting',
    text: 'At DPG Media, I wrote articles, conducted interviews, and contributed to reports from the field. That experience taught me to write with speed, accuracy, and audience awareness. Combined with copywriting and proofreading work, it gives me a practical base for product updates, launch communication, internal briefs, and customer-facing stories.',
  },
  {
    title: 'International communication',
    meta: 'Belgium, Spain, Argentina + four languages',
    text: 'I have studied and worked across Belgium, Spain, and Argentina, and I communicate in Dutch, English, Spanish, and French. That international range helps me think beyond one market or tone of voice, which matters when communicating products used by people with different expectations, habits, and cultural contexts.',
  },
  {
    title: 'Organisation',
    meta: 'Campaign planning + financial responsibility',
    text: 'The practical side of my CV is very structured: planning social content, tracking influencer KPIs, coordinating events, supporting trade shows, creating POS materials, and managing finances as a youth organisation treasurer. I like work to be creative, but I also like it to be clear, trackable, and finished properly.',
  },
  {
    title: 'Adaptability',
    meta: 'KSA Zonhoven | 2007 - 2023',
    text: 'My path moves through journalism, marketing, translation, AI evaluation, and volunteer leadership. Rather than seeing that as scattered, I see it as a strength: I learn quickly, adapt to new environments, and bring a communication lens to different types of work. That is exactly the kind of range I want to bring to Bending Spoons.',
  },
];

export const serviceItems: ServiceItem[] = [
  { title: 'Writing' },
  { title: 'Copywriting' },
  { title: 'Canva' },
  { title: 'AI training' },
  { title: 'Excel' },
];

export const contactInfo: ContactInfo = {
  phone: '+32 478 42 33 32',
  email: 'anouk.vhb@outlook.com',
  location: 'Madrid, Spain',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anouk-vanhorenbeek-305377275/' },
    {
      label: 'Role',
      href: 'https://jobs.bendingspoons.com/positions/6a3b8f3d6482acd354f87bc1?utm_source=bendingspoons&utm_medium=website&utm_campaign=careers',
    },
  ],
};
