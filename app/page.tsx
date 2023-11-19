import JobsList from '@/components/jobs-list';
import Filters from '@/components/filters';
import jobs from '../jobs.json';

export default function Home() {
  return (
    <>
      <Filters />
      <JobsList jobs={jobs} />
    </>
  );
}
