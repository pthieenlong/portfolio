export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  publishedAt: Date;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  image?: string;
  draft: boolean;
  readingTime?: number;
}

export interface Experience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}
