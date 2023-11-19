import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import Navbar from '@/components/navbar';
import './globals.css';

const spartan = League_Spartan({ subsets: ['latin'], weight: ['500', '700'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${spartan.className} bg-ligthcyan`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
