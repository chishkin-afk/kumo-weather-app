import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Kumo weather app',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
