import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeaderProps {
  onPostJobClick: () => void;
}

export function Header({ onPostJobClick }: HeaderProps) {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-2 sm:px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex flex-col sm:flex-row sm:items-center">
            <span className="text-xl sm:text-2xl font-bold text-[#0070f3] leading-tight">MakerGram</span>
            <span className="text-xl sm:text-2xl font-medium sm:ml-2 leading-tight">Job Board</span>
          </Link>
        </div>
        <Button
          onClick={onPostJobClick}
          className="bg-[#0070f3] hover:bg-[#0060df] text-white font-medium text-sm sm:text-base"
        >
          Post a Job
        </Button>
      </div>
    </header>
  );
}