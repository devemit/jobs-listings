import { Job } from '@/types/types';
import Image from 'next/image';

export default function JobSingle({ job }: Job) {
  return (
    <section className='bg-secondarycyan px-6 py-4 rounded-lg border-l-8 border-primary'>
      <div className='flex flex-col space-y-2'>
        <div className='relative h-12 w-12'>
          <Image src={job.logo} alt='logo' fill />
        </div>
        <div className='flex space-x-2 items-center'>
          <p className='text-primary'>{job.company}</p>
          <p className='rounded-full text-xs p-1  flex items-center justify-center text-secondarycyan bg-primary font-semibold'>
            NEW!
          </p>
          <p className='rounded-full p-1 text-xs flex items-center justify-center text-secondarycyan font-semibold bg-[#333]'>
            FEATURED
          </p>
        </div>
        <div>
          <p className='font-semibold'>{job.role}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='text-darkcyan'>{job.postedAt}</p>
          <span className='text-darkcyan mt-2'>*</span>
          <p className='text-darkcyan'>{job.contract}</p>
          <span className='text-darkcyan mt-2'>*</span>

          <p className='text-darkcyan'>{job.location}</p>
        </div>
        <hr className='text-darkcyan' />
        <div className='flex items-center space-x-2 '>
          {job.languages.map((lang) => (
            <span className='p-1 text-primary bg-primary/50 font-semibold'>{lang}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
