import { queryClient } from '@/shared/api/instance';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Kumo weather app',
};

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['700', '800', '500', '400'],
  fallback: ['sans-serif'],
});

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${manrope.className}`}>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
