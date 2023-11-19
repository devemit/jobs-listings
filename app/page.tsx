import JobsList from '@/components/jobs-list';
import jobs from '../jobs.json';

export default function Home() {
  return (
    <>
      <JobsList jobs={jobs} />
    </>
  );
}
