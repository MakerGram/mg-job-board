# Guide to Adding new Jobs to the Job Board

This guide explains how to add job listings to the `jobs.json` file and details all available parameters.

## File Location
The jobs data is stored in `src/data/jobs.json`

## Job Object Structure

Each job in the array should follow this structure:

```json
{
  "id": "string",
  "title": "string",
  "company": "string",
  "location": "string",
  "salary": "string (optional)",
  "type": "JobType",
  "tags": ["string"],
  "lastDateToApply": "YYYY-MM-DD",
  "description": "string",
  "howToApply": "string",
  "postedBy": "string",
  "postedDate": "YYYY-MM-DD",
  "externalLink": "string (optional)"
}
```

## Parameter Details

### Required Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `id` | string | Unique identifier for the job | "mg_001" |
| `title` | string | Job title | "Hardware Design Engineer" |
| `company` | string | Company name | "MakerGram Labs" |
| `location` | string | Job location | "Bangalore, India (Hybrid)" |
| `type` | string | Must be one of: "Full-time", "Part-time", "Freelance", "Internship" | "Full-time" |
| `tags` | string[] | Array of relevant tags/skills | ["PCB Design", "Arduino", "Embedded Systems"] |
| `lastDateToApply` | string | Last date to apply in YYYY-MM-DD format | "2024-04-30" |
| `description` | string | Detailed job description | "Join MakerGram Labs to design next-gen IoT devices..." |
| `howToApply` | string | Instructions on how to apply | "Apply through the MakerGram job portal" |
| `postedBy` | string | Name of the person/organization posting the job | "MakerGram Team" |
| `postedDate` | string | Date when the job was posted in YYYY-MM-DD format | "2024-03-15" |

### Optional Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `salary` | string | Salary information | "₹8,00,000 - ₹12,00,000/year" |
| `externalLink` | string | URL to external application page | "https://makergram.com/careers/apply" |

## Example Job Entry

```json
{
  "id": "mg_001",
  "title": "Hardware Design Engineer",
  "company": "MakerGram Labs",
  "location": "Bangalore, India (Hybrid)",
  "salary": "₹8,00,000 - ₹12,00,000/year",
  "type": "Full-time",
  "tags": ["PCB Design", "Arduino", "Embedded Systems", "IoT", "3D Printing"],
  "lastDateToApply": "2024-04-30",
  "description": "Join MakerGram Labs to design next-gen IoT devices and maker tools. We're looking for a Hardware Design Engineer with expertise in PCB design, embedded systems, and rapid prototyping. Experience with Arduino, Raspberry Pi, and 3D printing is a plus. You'll be working on innovative projects that empower the maker community.",
  "howToApply": "Apply through the MakerGram job portal",
  "postedBy": "MakerGram Team",
  "postedDate": "2024-03-15",
  "externalLink": "https://makergram.com/careers/apply"
}
```

## Important Notes

1. The `id` must be unique for each job entry
2. Dates should be in YYYY-MM-DD format
3. The `type` field must be exactly one of: "Full-time", "Part-time", "Freelance", "Internship"
4. `tags` should be an array of strings
5. The `externalLink` should be a valid URL if provided
6. Jobs are displayed in reverse chronological order based on `postedDate`

## Adding a New Job

1. Open `src/data/jobs.json`
2. Add a new job object to the array
3. Ensure all required parameters are included
4. Add any optional parameters as needed
5. Make sure the JSON syntax is valid
6. Save the file

## Best Practices

1. Use descriptive and clear job titles
2. Include relevant tags that match the job requirements
3. Provide detailed job descriptions
4. Include clear application instructions
5. Use consistent date formatting
6. Keep the external link up to date
7. Update the last date to apply when the position is filled