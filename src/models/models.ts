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
  role?: string;
  company?: string;
  companyUrl?: string;
  period: string;
  location?: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface SkillChild {
  name: string;
  value: number;
}

export interface SkillGroup {
  name: string;
  children: SkillChild[];
}

export interface Award {
  title: string;
  issuer?: string;
  issuerUrl?: string;
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
  skills: SkillGroup[]; // <-- changed from Skill[] to SkillGroup[]
  awards: Award[];
  interests: Interest[];
}
