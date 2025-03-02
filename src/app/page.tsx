'use client';

import { useState, useEffect, useCallback } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JobCard } from '@/components/JobCard';
import { JobDetailModal } from '@/components/JobDetailModal';
import { SearchFilters } from '@/components/SearchFilters';
import { getAllJobs, filterJobs } from '@/lib/jobs';
import { Job } from '@/types';

// Google Form URL for job submissions
const JOB_SUBMISSION_FORM_URL = 'https://link.makergram.com/job-board-application';

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    location: '',
    tags: [] as string[],
  });

  // Load jobs only once when component mounts
  useEffect(() => {
    const allJobs = getAllJobs();
    setJobs(allJobs);
    setFilteredJobs(allJobs);
  }, []);

  // Apply filters whenever jobs or filters change
  useEffect(() => {
    const applyFilters = () => {
      setFilteredJobs(filterJobs(jobs, filters));
    };

    applyFilters();
  }, [jobs, filters]);

  // Memoize the filter change handler to prevent recreation on each render
  const handleFilterChange = useCallback((newFilters: {
    search: string;
    type: string;
    location: string;
    tags: string[];
  }) => {
    setFilters(newFilters);
  }, []);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePostJobClick = () => {
    // Redirect to Google Form
    window.open(JOB_SUBMISSION_FORM_URL, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onPostJobClick={handlePostJobClick} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <SearchFilters onFilterChange={handleFilterChange} />
          </div>

          <div className="md:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Available
              </h2>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} onClick={handleJobClick} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No jobs found</h3>
                <p className="text-gray-500 mt-2">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      <JobDetailModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
