
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  status: string;
}

export interface CVData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  profile: string;
  photo?: string;
  experience: Experience[];
  technicalSkills: string[];
  softSkills: string[];
  education: Education[];
}
