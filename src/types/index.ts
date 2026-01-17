export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  image: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  resumeLink: string;
}

export interface AboutSection {
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  repoLink: string;
  image: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  hero: HeroSection;
  about: AboutSection;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: string[];
  strengths: string[];
  careerObjective: string;
  additionalExpertise: {
    domains: string[];
    methodologies: string[];
  };
}
