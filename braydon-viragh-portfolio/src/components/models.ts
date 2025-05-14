export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
  coverImage: string;
  features: string[];
  techStack: string[];
}
