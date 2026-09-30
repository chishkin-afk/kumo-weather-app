import Header from '@/widgets/header/ui/Header';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.scss';
import Providers from './providers';

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
        <Header
          links={[
            {
              name: 'weather',
              path: '#weather',
            },
            {
              name: 'statistics',
              path: '#stats',
            },
            {
              name: 'forecast',
              path: '#forecast',
            },
          ]}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
