export interface Member {
  name: string;
  role: string;
  image?: string;
  description?: string;
  email?: string;
  links?: {
    googleScholar?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
  type: 'Journal' | 'Conference';
}

export interface ResearchArea {
  title: string;
  description: string;
  icon: string;
}

export interface LabInfo {
  name: string;
  fullName: string;
  professor: string;
  university: string;
  department: string;
  location: string;
  email: string;
  phone: string;
  researchAreas: ResearchArea[];
  publications: Publication[];
  members: Member[];
}
