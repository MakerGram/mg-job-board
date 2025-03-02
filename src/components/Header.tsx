import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeaderProps {
  onPostJobClick: () => void;
}

export function Header({ onPostJobClick }: HeaderProps) {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#0070f3]">MakerGram</span>
            <span className="text-2xl font-medium ml-2">Job Board</span>
          </Link>
        </div>
        <Button
          onClick={onPostJobClick}
          className="bg-[#0070f3] hover:bg-[#0060df] text-white font-medium"
        >
          Post a Job
        </Button>
      </div>
    </header>
  );
}