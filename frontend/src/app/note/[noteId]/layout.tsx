import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <Header
        links={[
          {
            path: '#edit',
            name: 'edit',
          },
          {
            path: '#stats',
            name: 'statistics',
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
