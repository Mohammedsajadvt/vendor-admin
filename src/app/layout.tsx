import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '@/styles/globals.css';
import RootLayoutClient from './RootLayoutClient';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vendor',
  description: 'Vendor App Admin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`} cz-shortcut-listen="true"
       data-new-gr-c-s-check-loaded="14.1235.0" data-gr-ext-installed="">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
