import { Job } from '@/types';
import jobsData from '@/data/jobs.json';

export function getAllJobs(): Job[] {
  // Sort jobs by postedDate in descending order (newest first)
  return [...jobsData as Job[]].sort((a, b) => {
    const dateA = new Date(a.postedDate).getTime();
    const dateB = new Date(b.postedDate).getTime();
    return dateB - dateA; // Descending order (newest first)
  });
}

export function getJobById(id: string): Job | undefined {
  return getAllJobs().find(job => job.id === id);
}

export function filterJobs(
  jobs: Job[],
  filters: {
    search?: string;
    type?: string;
    location?: string;
    tags?: string[];
  }
): Job[] {
  return jobs.filter(job => {
    // Filter by search term
    if (filters.search && !job.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !job.company.toLowerCase().includes(filters.search.toLowerCase()) &&
        !job.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }

    // Filter by job type
    if (filters.type && job.type !== filters.type) {
      return false;
    }

    // Filter by location
    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    // Filter by tags
    if (filters.tags && filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(tag =>
        job.tags.some(jobTag => jobTag.toLowerCase() === tag.toLowerCase())
      );
      if (!hasMatchingTag) {
        return false;
      }
    }

    return true;
  });
}

export function getAllTags(): string[] {
  const allTags = getAllJobs().flatMap(job => job.tags);
  return [...new Set(allTags)].sort();
}

export function getAllLocations(): string[] {
  const allLocations = getAllJobs().map(job => job.location);
  return [...new Set(allLocations)].sort();
}

export function getAllJobTypes(): string[] {
  const allTypes = getAllJobs().map(job => job.type);
  return [...new Set(allTypes)].sort();
}