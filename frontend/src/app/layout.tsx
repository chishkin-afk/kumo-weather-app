import { queryClient } from '@/shared/api/instance';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Kumo weather app',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
