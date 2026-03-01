export interface ExperienceRole {
  title: string;
  period: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  logo: string;
  location: string;
  period: string;
  description: string;
  roles: ExperienceRole[];
  tags: string[];
}

export interface AppLink {
  label: string;
  playStore?: string;
  appStore?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  role: string;
  impact: string;
  featured?: boolean;
  screenshots: string[];
  links: {
    live?: string;
    github?: string;
  };
  apps: AppLink[];
}
