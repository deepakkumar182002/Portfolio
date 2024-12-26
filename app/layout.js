import { Inter } from 'next/font/google';
import './globals.css';
import AOSProvider from '@/components/AOSProvider';
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Deep | Front-end Dev',
  description: 'created in Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSProvider>
          {children}
          <Analytics />
        </AOSProvider>
      </body>
    </html>
  );
}
