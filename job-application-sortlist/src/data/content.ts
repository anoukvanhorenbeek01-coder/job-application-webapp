import type { CompanyProfile, ContactInfo, Highlight, PersonalInfo, ServiceItem, Skill } from '../types/content';

export const personalInfo: PersonalInfo = {
  name: 'Anouk Vanhorenbeek',
  role: 'Spontaneous marketing application',
  location: 'Madrid, Spain',
  tagline: 'Marketing stories that help the right clients and agencies find each other.',
  summary:
    'A multilingual communication, journalism, and marketing profile with hands-on brand, content, PR, influencer, event, and AI evaluation experience.',
};

export const companyProfile: CompanyProfile = {
  name: 'Sortlist',
  shortName: 'Sortlist',
  logoAlt: 'Sortlist logo',
  mission:
    'Help companies search, discover, and match with trusted providers across hundreds of marketing, creative, product, and digital services.',
  vision:
    'Build great business stories by making provider discovery more transparent, more qualified, and more useful for both clients and agencies.',
  summaryPrompt: 'Click the Sortlist mark for the mission and vision behind this spontaneous application.',
};

export const skills: Skill[] = [
  {
    keyword: 'Buyer empathy',
    explanation:
      'Journalism trained me to ask better questions before writing. For Sortlist, that means I can help turn client needs, provider strengths, and marketplace signals into content that feels specific rather than generic.',
  },
  {
    keyword: 'Agency fluency',
    explanation:
      'At Lotus Bakeries Spain, I worked close to social content, influencers, press materials, events, POS assets, brochures, and campaign follow-up, so I understand the practical language agencies and brand teams use.',
  },
  {
    keyword: 'Lead storytelling',
    explanation:
      'Sortlist speaks about qualified leads, intent, trust, and growth. My strength is translating that value into concise stories, landing-page copy, sales support, and content that makes the benefit easy to grasp.',
  },
  {
    keyword: 'Languages',
    explanation:
      'Dutch native, English C2, Spanish C2, and French B2 give me a strong base for an international marketplace with Belgian roots, a Madrid office, and audiences across Europe.',
  },
  {
    keyword: 'AI judgement',
    explanation:
      'As an AI Data Annotator, I evaluated response quality, relevance, clarity, and usefulness. That habit is valuable for AI-assisted outreach, content QA, and marketplace communication that still needs a human standard.',
  },
  {
    keyword: 'Operational clarity',
    explanation:
      'I like creative work to be structured: campaign calendars, KPI follow-up, event support, finance responsibility, and clear execution. Marketing ideas should become assets people can actually use.',
  },
];

export const cvHighlights: Highlight[] = [
  {
    title: 'Brand and campaign execution',
    meta: 'Lotus Bakeries Spain',
    text: 'Supported social media planning, influencer campaigns, branded content, press materials, events, trade shows, POS materials, brochures, and product sheets. That gives me a grounded view of how marketing providers and brand teams collaborate.',
  },
  {
    title: 'Editorial judgement',
    meta: 'DPG Media + KU Leuven',
    text: 'Wrote articles, conducted interviews, and built a communication foundation through journalism and linguistics. I bring the discipline of listening closely, finding the angle, and shaping information for a real audience.',
  },
  {
    title: 'International market fit',
    meta: 'Belgium, Spain, Argentina',
    text: 'I have studied and worked across Belgium, Spain, and Argentina, and communicate in Dutch, English, Spanish, and French. That fits Sortlist as a Belgian company with a Madrid presence and a broad European marketplace.',
  },
  {
    title: 'Content for trust',
    meta: 'Copywriting, social, PR',
    text: 'My experience spans writing, copywriting, proofreading, translation, Canva, basic video editing, social content, and PR support. I can help make provider stories, case proof, and marketplace value feel trustworthy.',
  },
  {
    title: 'Data-aware quality sense',
    meta: 'AI Data Annotation',
    text: 'Evaluating AI output trained me to judge whether content is accurate, relevant, useful, and well-structured. That mindset fits a platform where buyer intent, outreach quality, and signal clarity matter.',
  },
  {
    title: 'Reliable team rhythm',
    meta: 'Campaigns + volunteer leadership',
    text: 'From campaign planning and KPI follow-up to youth-organisation treasurer responsibilities, I am comfortable bringing order to moving pieces. I am proactive, meticulous, empathetic, and good at finishing work properly.',
  },
];

export const serviceItems: ServiceItem[] = [
  {
    title: 'Marketplace content',
    description: 'Clear provider, category, and campaign copy that helps clients understand what they need and who can help.',
  },
  {
    title: 'Lead nurturing',
    description: 'Messaging that turns buyer intent and agency value into warm, useful communication.',
  },
  {
    title: 'Trust signals',
    description: 'Case-story instincts, editorial judgement, and proof-oriented writing for a marketplace built on confidence.',
  },
  {
    title: 'Madrid + Belgium fit',
    description: 'A Belgian profile based in Madrid with multilingual sensitivity across Dutch, English, Spanish, and French.',
  },
  {
    title: 'Marketing operations',
    description: 'Practical support with planning, KPI follow-up, campaign assets, events, and cross-functional coordination.',
  },
];

export const contactInfo: ContactInfo = {
  phone: '+32 478 42 33 32',
  email: 'anouk.vhb@outlook.com',
  location: 'Madrid, Spain',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anouk-vanhorenbeek-305377275/' },
    { label: 'Sortlist', href: 'https://www.sortlist.com/' },
  ],
};
