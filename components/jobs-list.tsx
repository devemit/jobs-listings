import { JobProps } from '@/types/types';
import JobSingle from './job-single';

export default function JobsList({ jobs }: { jobs: any }) {
  return (
    <main className='flex flex-col space-y-8 px-6 py-14'>
      {jobs.map((job: JobProps) => (
        <JobSingle job={job} />
      ))}
    </main>
  );
}
