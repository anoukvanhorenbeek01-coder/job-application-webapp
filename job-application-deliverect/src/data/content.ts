import type { CompanyProfile, ContactInfo, Highlight, PersonalInfo, ServiceItem, Skill } from '../types/content';

export const personalInfo: PersonalInfo = {
  name: 'Anouk Vanhorenbeek',
  role: 'Product Marketing Manager application',
  location: 'Madrid, Spain',
  tagline: 'Product stories that make digital ordering easier to understand, adopt, and love.',
  summary:
    'A multilingual communication, journalism, and marketing profile with hands-on brand, content, PR, influencer, event, and AI evaluation experience.',
};

export const companyProfile: CompanyProfile = {
  name: 'Deliverect',
  shortName: 'Deliverect',
  logoAlt: 'Deliverect logo',
  mission:
    'Help restaurants and retailers scale digital ordering through one intelligent, API-first commerce platform that simplifies orders, menus, channels, and fulfilment.',
  vision:
    'Make omnichannel food commerce faster, more profitable, and more reliable for brands operating across delivery, dine-in, takeout, drive-thru, catering, and retail.',
  summaryPrompt: 'Click the Deliverect logo for the mission and vision behind this application.',
};

export const skills: Skill[] = [
  {
    keyword: 'Product storytelling',
    explanation:
      'I connect product details to clear, human narratives through journalism training, interview experience, copywriting, and brand communication.',
  },
  {
    keyword: 'Go-to-market support',
    explanation:
      'At Lotus Bakeries Spain, I helped plan campaign content, events, influencer work, press materials, POS assets, product sheets, and KPI follow-up.',
  },
  {
    keyword: 'Customer insight',
    explanation:
      'My journalism background trained me to ask better questions, find the useful angle, and translate real needs into messaging that feels concrete.',
  },
  {
    keyword: 'Languages',
    explanation:
      'Dutch native, English C2, Spanish C2, and French B2 give me a strong base for international positioning, market nuance, and cross-functional work.',
  },
  {
    keyword: 'AI fluency',
    explanation:
      'As an AI Data Annotator, I evaluated responses for relevance, clarity, quality, and usefulness: a practical habit for sharpening product content.',
  },
  {
    keyword: 'Operational clarity',
    explanation:
      'I like creative work to be structured: calendars, campaign planning, event support, KPI follow-up, financial responsibility, and clear execution.',
  },
];

export const cvHighlights: Highlight[] = [
  {
    title: 'Brand and campaign execution',
    meta: 'Lotus Bakeries Spain',
    text: 'Supported social media planning, influencer campaigns, branded content, press materials, events, trade shows, POS materials, brochures, and product sheets. That gives me a practical base for launch assets, campaign coordination, and clear product communication.',
  },
  {
    title: 'Messaging with editorial discipline',
    meta: 'DPG Media + KU Leuven',
    text: 'Wrote articles, conducted interviews, and built a communication foundation through journalism and linguistics. I bring the discipline of listening closely, finding the angle, and shaping information for a real audience.',
  },
  {
    title: 'International market sensitivity',
    meta: 'Belgium, Spain, Argentina',
    text: 'I have studied and worked across Belgium, Spain, and Argentina, and communicate in Dutch, English, Spanish, and French. For Deliverect, that means I can think beyond one market, tone, or customer context.',
  },
  {
    title: 'Content that supports adoption',
    meta: 'Copywriting, social, PR',
    text: 'My experience spans writing, copywriting, proofreading, translation, Canva, basic video editing, social content, and PR support. I can help turn product value into assets that sales, customer, and marketing teams can actually use.',
  },
  {
    title: 'Data-aware judgement',
    meta: 'AI Data Annotation',
    text: 'Evaluating AI output trained me to judge whether content is accurate, relevant, useful, and well-structured. That habit fits product marketing work where clarity, proof, and audience fit matter as much as creativity.',
  },
  {
    title: 'Reliable team rhythm',
    meta: 'Campaigns + volunteer leadership',
    text: 'From campaign planning and KPI follow-up to youth-organisation finance responsibilities, I am comfortable bringing order to moving pieces. I am proactive, meticulous, empathetic, and good at helping work move from idea to finished.',
  },
];

export const serviceItems: ServiceItem[] = [
  {
    title: 'Positioning',
    description: 'Translate platform complexity into value messages restaurants, retailers, and internal teams can use.',
  },
  {
    title: 'Launch assets',
    description: 'Support campaigns with clear copy, content, press material, product sheets, and channel-ready storytelling.',
  },
  {
    title: 'Market nuance',
    description: 'Bring multilingual sensitivity across English, Spanish, Dutch, and French-speaking contexts.',
  },
  {
    title: 'Customer voice',
    description: 'Use interview instincts and editorial judgement to surface needs, proof points, and human stories.',
  },
  {
    title: 'Execution',
    description: 'Keep creative work organised with planning, coordination, follow-up, and attention to detail.',
  },
];

export const contactInfo: ContactInfo = {
  phone: '+32 478 42 33 32',
  email: 'anouk.vhb@outlook.com',
  location: 'Madrid, Spain',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anouk-vanhorenbeek-305377275/' },
    { label: 'Role', href: 'https://jobs.lever.co/deliverect/5c98550e-42e8-4154-9756-aa94601a55b8' },
  ],
};
