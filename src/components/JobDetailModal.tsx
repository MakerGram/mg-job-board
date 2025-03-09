import { Job } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface JobDetailModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export function JobDetailModal({ job, isOpen, onClose }: JobDetailModalProps) {
  if (!job) return null;

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMMM dd, yyyy');
    } catch {
      return dateString;
    }
  };

  const getJobTypeIcon = (type: string) => {
    switch (type) {
      case 'Full-time':
        return '🏢';
      case 'Part-time':
        return '⌛';
      case 'Freelance':
        return '💻';
      case 'Internship':
        return '🎓';
      default:
        return '💼';
    }
  };

  // Check if job is closed based on last date to apply
  const isJobClosed = () => {
    try {
      const lastDate = new Date(job.lastDateToApply);
      const today = new Date();
      return today > lastDate;
    } catch {
      return false;
    }
  };

  const jobClosed = isJobClosed();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <DialogTitle className="text-2xl font-bold text-gray-800">{job.title}</DialogTitle>
              {jobClosed && (
                <Badge variant="destructive" className="font-medium bg-red-100 text-red-700 border border-red-200">
                  CLOSED
                </Badge>
              )}
            </div>
            <Badge variant="outline" className="font-medium">
              {getJobTypeIcon(job.type)} {job.type}
            </Badge>
          </div>
          <div className="text-base text-muted-foreground mt-2">
            <div className="font-semibold">{job.company}</div>
            <div>📍 {job.location}</div>
            {job.salary && <div className="text-base text-muted-foreground">{job.salary}</div>}
          </div>
        </DialogHeader>

        <div className="space-y-4 my-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Job Description</h3>
            <p className="whitespace-pre-line text-gray-700">{job.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">How to Apply</h3>
            <p className="text-gray-700">{job.howToApply}</p>
            {jobClosed && (
              <p className="mt-2 text-red-600 font-medium">
                This job posting has closed and is no longer accepting applications.
              </p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Skills & Tags</h3>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 font-medium">Posted by</p>
              <p className="text-gray-700">{job.postedBy}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Posted on</p>
              <p className="text-gray-700">{formatDate(job.postedDate)}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Last date to apply</p>
              <p className={`${jobClosed ? 'text-red-600 font-medium' : 'text-gray-700'}`}>
                {formatDate(job.lastDateToApply)} {jobClosed && '(Closed)'}
              </p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium"
          >
            Close
          </Button>
          {job.externalLink && !jobClosed && (
            <Button
              variant="default"
              onClick={() => window.open(job.externalLink, '_blank')}
              className="bg-[#0070f3] hover:bg-[#0060df] text-white font-medium"
            >
              Apply Now
            </Button>
          )}
          {job.externalLink && jobClosed && (
            <Button
              variant="outline"
              onClick={() => window.open(job.externalLink, '_blank')}
              className="border-[#0070f3] text-[#0070f3] hover:bg-[#0070f3]/10 font-medium"
            >
              View Job Page
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}