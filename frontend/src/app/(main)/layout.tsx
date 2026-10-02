import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
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
        linkButton={{
          path: '/list',
          name: 'list',
        }}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
