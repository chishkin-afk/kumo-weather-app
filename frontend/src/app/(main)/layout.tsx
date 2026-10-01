import Header from '@/widgets/header/ui/Header';
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
    </>
  );
}
