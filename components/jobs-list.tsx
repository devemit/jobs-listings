'use client';
import { useState, useEffect } from 'react';
import { JobProps } from '@/types/types';
import JobSingle from './job-single';

export default function JobsList({ jobs }: any) {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [query, setQuery] = useState('');

  function applyFilters() {
    const inputText = query.toLowerCase().trim();
    const filteredNew = jobs.filter(
      (job: any) =>
        job.role.toLowerCase().includes(inputText) || job.position.toLowerCase().includes(inputText)
    );
    setFilteredJobs(filteredNew);
  }

  useEffect(() => {
    applyFilters();
  }, [query]);

  return (
    <main className='flex flex-col space-y-8 px-6 py-10'>
      <section>
        <div className='flex items-center'>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type='text'
            placeholder='Filter jobs here ...'
            className='px-2 py-1 w-full md:w-1/2 lg:w-1/4'
          />
        </div>
      </section>
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-6 md:space-y-0'>
        {filteredJobs.map((job: JobProps) => (
          <JobSingle key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
