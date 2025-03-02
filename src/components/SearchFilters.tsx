import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getAllTags, getAllJobTypes, getAllLocations } from '@/lib/jobs';

interface SearchFiltersProps {
  onFilterChange: (filters: {
    search: string;
    type: string;
    location: string;
    tags: string[];
  }) => void;
}

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [showAllTags, setShowAllTags] = useState(false);

  useEffect(() => {
    setAvailableTags(getAllTags());
    setJobTypes(getAllJobTypes());
    setLocations(getAllLocations());
  }, []);

  useEffect(() => {
    const handleFilterUpdate = () => {
      onFilterChange({
        search,
        type: selectedType,
        location: selectedLocation,
        tags: selectedTags,
      });
    };

    handleFilterUpdate();
    // We're intentionally not including onFilterChange in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, selectedType, selectedLocation, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSearch('');
    setSelectedType('');
    setSelectedLocation('');
    setSelectedTags([]);
  };

  const displayedTags = showAllTags
    ? availableTags
    : availableTags.slice(0, 10);

  return (
    <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
      <div className="space-y-2">
        <h3 className="font-medium">Search</h3>
        <Input
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Job Type</h3>
        <div className="flex flex-wrap gap-2">
          {jobTypes.map((type) => (
            <Badge
              key={type}
              variant={selectedType === type ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedType(selectedType === type ? '' : type)}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Location</h3>
        <div className="flex flex-wrap gap-2">
          {locations.map((location) => (
            <Badge
              key={location}
              variant={selectedLocation === location ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedLocation(selectedLocation === location ? '' : location)}
            >
              {location}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {displayedTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => handleTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}
          {availableTags.length > 10 && (
            <Button
              variant="link"
              className="p-0 h-auto text-xs"
              onClick={() => setShowAllTags(!showAllTags)}
            >
              {showAllTags ? 'Show Less' : `Show All (${availableTags.length})`}
            </Button>
          )}
        </div>
      </div>

      {(search || selectedType || selectedLocation || selectedTags.length > 0) && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleClearFilters}
          className="w-full mt-2"
        >
          Clear Filters
        </Button>
      )}
    </div>
  );
}