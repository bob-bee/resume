// src/models/models.ts

export interface RoleBucket {
  key: string;
  title: string;
  summary: string;
}

export interface Contact {
  icon: string;
  text: string;
  url: string | null;
}

export interface WorkRole {
  title: string;
  duration: string;
  items: string[];
}

export interface WorkExperience {
  company: string;
  url: string;
  location: string;
  period: string;
  roles: WorkRole[];
}

export interface Project {
  name: string;
  company?: string;
  companyUrl?: string;
  period: string;
  location?: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Skills {
  operatingSystems: string[];
  networking: string[];
  devOpsTools: string[];
  cloudPlatforms: string[];
  databases: string[];
  analyticsAndBI: string[];
  webDevelopment: string[];
  scriptingAndAutomation: string[];
  administration: string[];
  otherTech: string[];
  softSkills: string[];
  languages: string[];
}
export interface Certification {
  name: string;
  company?: string;
  companyUrl?: string;
  period?: string;
  location?: string;
  items?: string[];
}

export interface Award {
  title: string;
  issuer?: string;
  period?: string;
  location?: string;
  items?: string[];
}

export interface Interest {
  title: string;
  goal: string;
  notes?: string[];
}

export interface ResumeState {
  name: string;
  roleBuckets: RoleBucket[];
  contacts: Contact[];
  work: WorkExperience[];
  projects: Project[];
  education: Education[];
  skills: Skills;
  certifications: Certification[];
  awards: Award[];
  interests: Interest[];
}
