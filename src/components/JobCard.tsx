import { Job } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

interface JobCardProps {
  job: Job;
  onClick: (job: Job) => void;
}

export function JobCard({ job, onClick }: JobCardProps) {
  const daysLeft = () => {
    const lastDate = new Date(job.lastDateToApply);
    const today = new Date();
    const diffTime = lastDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatPostedDate = () => {
    try {
      return formatDistanceToNow(new Date(job.postedDate), { addSuffix: true });
    } catch (error) {
      return job.postedDate;
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

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow border-gray-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold text-gray-800">{job.title}</CardTitle>
          <Badge variant="outline" className="ml-2 font-medium">
            {getJobTypeIcon(job.type)} {job.type}
          </Badge>
        </div>
        <div className="text-sm font-medium text-gray-600">{job.company}</div>
        <div className="text-sm text-gray-600">📍 {job.location}</div>
      </CardHeader>
      <CardContent className="flex-grow">
        {job.salary && <p className="text-sm mb-2 font-medium text-gray-700">💰 {job.salary}</p>}
        <div className="flex flex-wrap gap-1 mt-2">
          {job.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="text-xs font-medium text-gray-600">
          Posted {formatPostedDate()}
        </div>
        <div className="flex items-center">
          {daysLeft() > 0 ? (
            <span className="text-xs font-medium text-gray-600 mr-2">
              {daysLeft()} days left
            </span>
          ) : (
            <span className="text-xs font-medium text-red-500 mr-2">Closed</span>
          )}
          <Button
            size="sm"
            onClick={() => onClick(job)}
            className="bg-[#0070f3] hover:bg-[#0060df] text-white font-medium"
          >
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}