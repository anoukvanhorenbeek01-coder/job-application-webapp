import type { CompanyProfile, ContactInfo, Highlight, PersonalInfo, ServiceItem, Skill } from '../types/content';

export const personalInfo: PersonalInfo = {
  name: 'Anouk Vanhorenbeek',
  role: 'Content Creator & Community Manager application',
  location: 'Madrid, Spain',
  tagline: 'Community-first content for brands that want the inside edge.',
  summary:
    'A multilingual communication, journalism, and marketing profile with hands-on social content, influencer, PR, event, and AI evaluation experience.',
};

export const companyProfile: CompanyProfile = {
  name: 'OLIVER Agency',
  shortName: 'OLIVER',
  logoAlt: 'OLIVER Agency logo',
  mission:
    'Design, build, and run bespoke in-house agencies and marketing ecosystems that help brands create smarter, more effective work from the inside.',
  vision:
    'Keep evolving the agency model with global talent, brand closeness, efficient creative operations, and technology that helps teams move faster with purpose.',
  summaryPrompt: 'Click the logo for the OLIVER mission and vision behind this application.',
};

export const skills: Skill[] = [
  {
    keyword: 'Social content',
    explanation:
      'At Lotus Bakeries Spain, I helped plan and create social content around campaigns, events, product stories, influencer work, and brand moments.',
  },
  {
    keyword: 'Community instinct',
    explanation:
      'My journalism training taught me to listen first, find the human angle, and respond with tone and timing that feel natural to the audience.',
  },
  {
    keyword: 'Brand closeness',
    explanation:
      'I like getting close to a brand from the inside: understanding the product, translating priorities into content, and keeping every asset recognisable.',
  },
  {
    keyword: 'Languages',
    explanation:
      'Dutch native, English C2, Spanish C2, and French B2 give me a strong base for international teams, local nuance, and cross-market content.',
  },
  {
    keyword: 'Creator mindset',
    explanation:
      'I enjoy moving from idea to execution: writing, briefing, coordinating assets, using Canva, checking details, and making content ready for the channel.',
  },
  {
    keyword: 'AI curiosity',
    explanation:
      'As an AI Data Annotator, I evaluated model responses and learned to judge relevance, quality, clarity, and usefulness with precision.',
  },
];

export const cvHighlights: Highlight[] = [
  {
    title: 'Brand & social content',
    meta: 'Lotus Bakeries Spain',
    text: 'Supported social media planning, influencer campaigns, press materials, events, POS assets, brochures, and product sheets. That experience maps directly to content creation inside a brand-focused agency team.',
  },
  {
    title: 'Editorial judgement',
    meta: 'DPG Media + journalism',
    text: 'Wrote articles, conducted interviews, and contributed to reporting work from the field. I bring the discipline of asking better questions, finding the angle, and writing clearly for a real audience.',
  },
  {
    title: 'Community-ready tone',
    meta: 'Communication across markets',
    text: 'Studying and working across Belgium, Spain, and Argentina helped me adapt tone, context, and expectations. For OLIVER, that means content and community work that can stay locally sensitive while serving a global brand model.',
  },
  {
    title: 'Influencer & campaign support',
    meta: 'Planning, KPIs, events',
    text: 'Helped coordinate influencer activity, follow campaign KPIs, support trade shows, and prepare communication materials. I understand that content needs creativity, but also planning, follow-up, and clean execution.',
  },
  {
    title: 'AI-aware content thinking',
    meta: 'AI Data Annotator',
    text: 'Evaluating AI output trained me to look closely at usefulness, relevance, and quality. That is valuable for a Brandtech environment where creativity and new tools need thoughtful judgement.',
  },
  {
    title: 'Structured collaboration',
    meta: 'KSA Zonhoven',
    text: 'Volunteer leadership and treasurer responsibilities strengthened my organisation, responsibility, and follow-through. I am comfortable helping a team move from a loose idea to a finished piece of work.',
  },
];

export const serviceItems: ServiceItem[] = [
  {
    title: 'In-house brand focus',
    description: 'Content built close to the client, product, audience, and daily brand reality.',
  },
  {
    title: 'Social-first execution',
    description: 'Ideas shaped for feeds, communities, moments, and fast-moving campaign needs.',
  },
  {
    title: 'Editorial clarity',
    description: 'Journalism-trained writing that turns brand messages into clear human stories.',
  },
  {
    title: 'Influencer support',
    description: 'Practical experience with campaigns, tracking, events, and creator coordination.',
  },
  {
    title: 'AI-aware judgement',
    description: 'Comfort with modern tools, quality evaluation, and precise content assessment.',
  },
];

export const contactInfo: ContactInfo = {
  phone: '+32 478 42 33 32',
  email: 'anouk.vhb@outlook.com',
  location: 'Madrid, Spain',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anouk-vanhorenbeek-305377275/' },
    { label: 'Role', href: 'https://job-boards.greenhouse.io/oliver/jobs/7811950' },
  ],
};
