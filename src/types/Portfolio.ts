export interface Hero {
  name: string;
  title: string;
  tagline: string;
  profileImage: string;
}

export interface About {
  bio: string;
  email: string;
  phone: string;
  location: string;
  socials: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
}

export interface PortfolioData {
  id: string;
  templateId: number;
  hero: Hero;
  about: About;
  skills: string[];
  services: Service[];
  portfolio: Project[];
  testimonials: string[];
  footer?: { title: string; summary?: string };
  contact: { message: string; email: string; phone: string };
}

type Social = string;

type Product = {
  title: string;
  image: string;
  description: string;
};

export interface FormData {
  name: string;
  email: string;
  phone: string;
  title: string;
  tagline: string;
  profileImage: string;
  bio: string;
  location: string;
  socials: Social[];
  services: Service[];
  portfolio: Product[];
  testimonials: string[];
  message: string;
  footerMessage: string;
  footerText: string;
}