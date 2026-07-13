export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  tagline: string;
  summary: string;
}

export interface CompanyProfile {
  name: string;
  shortName: string;
  logoAlt: string;
  mission: string;
  vision: string;
  summaryPrompt: string;
}

export interface Skill {
  keyword: string;
  explanation: string;
}

export interface Highlight {
  title: string;
  text: string;
}

export interface ServiceItem {
  title: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  socialLinks: SocialLink[];
}
