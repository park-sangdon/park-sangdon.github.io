export interface ProfileData {
  nameKo: string;
  nameEn: string;
  titleKo: string;
  titleEn: string;
  affiliationKo: string;
  affiliationEn: string;
  departmentKo: string;
  departmentEn: string;
  officeKo: string;
  officeEn: string;
  email: string;
  scholarUrl: string;
  researchId: string;
  researchgateUrl: string;
  orcidUrl: string;
  githubUrl: string;
  hiringMessage: {
    ko: string;
    en: string;
  };
  bioKo: string;
  bioEn: string;
}

export type NewsType = 'paper' | 'award' | 'service' | 'talk' | 'general';

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  type: NewsType;
  link?: string;
  isImportant?: boolean;
}

export type ProjectStatus = 'active' | 'completed';

export interface ProjectItem {
  id: string;
  titleKo: string;
  titleEn: string;
  descriptionKo: string;
  descriptionEn: string;
  period: string;
  sponsorKo: string;
  sponsorEn: string;
  status: ProjectStatus;
  tags: string[];
  roleKo: string;
  roleEn: string;
}

export type PubType = 'journal' | 'conference' | 'preprint';

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PubType;
  abstract?: string;
  doi?: string;
  pdfUrl?: string;
  citations: number;
  tags: string[];
  bibtex: string;
  journalImpact?: string; // and other metrics like JCR Q1, etc.
}

export interface CourseItem {
  id: string;
  code: string;
  titleKo: string;
  titleEn: string;
  semester: string;
  targetKo: string;
  targetEn: string;
  descriptionKo: string;
  descriptionEn: string;
  syllabusItems: string[];
}
