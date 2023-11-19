import Image from 'next/image';
export default function Navbar() {
  return (
    <nav
      className='w-full mx-auto shadow-sm
    '
    >
      <div className='relative w-full h-36'>
        <Image src='/bg-header-mobile.svg' fill alt='header' />
      </div>
    </nav>
  );
}
