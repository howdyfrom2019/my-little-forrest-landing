import type { Metadata } from 'next';
import { IBM_Plex_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from '@/lib/utils/tailwindUtil';

const ibmPlexSans = IBM_Plex_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

const tenada = localFont({
  src: [
    {
      path: './font/Tenada.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/Tenada.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-tenada',
});

export const metadata: Metadata = {
  title: '나의 작은 정원',
  description: 'AI generated visual novel project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn([
          ibmPlexSans.variable,
          tenada.variable,
          'font-sans font-normal',
        ])}
      >
        {children}
      </body>
    </html>
  );
}
