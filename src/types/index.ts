export type JobType = 'Full-time' | 'Part-time' | 'Freelance' | 'Internship';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: JobType;
  tags: string[];
  lastDateToApply: string;
  description: string;
  howToApply: string;
  postedBy: string;
  postedDate: string;
  externalLink?: string;
}